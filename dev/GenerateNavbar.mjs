import fs from 'fs'
import path from 'path'

function getAllDescendants(directory, root, json) {
  const files = fs.readdirSync(directory)

  files.forEach((file) => {
    const filePath = path.join(directory, file)
    const fileStats = fs.statSync(filePath)

    if (fileStats.isDirectory()) {
      getAllDescendants(filePath, root, json)
    } else if (fileStats.isFile() && file === 'page.tsx') {
      const parentName = path.basename(directory)
      const relativePath = path.relative(root, filePath)

      // Remove "page.tsx" from the relative path
      const modifiedPath = relativePath.replace(/\/?page\.tsx$/, '')

      // Replace backslashes with forward slashes
      const finalPath = modifiedPath.replace(/\\/g, '/')

      json[parentName] = '/' + finalPath
    }
  })
}

// Usage example
const currentDirectory = process.cwd()
const rootDirectory = path.join(currentDirectory, 'src/app')
const jsonDocument = {}

getAllDescendants(rootDirectory, rootDirectory, jsonDocument)

const jsonFilePath = path.join(currentDirectory, 'src/navbar.json')
const jsonData = JSON.stringify(jsonDocument, null, 2)

fs.writeFileSync(jsonFilePath, jsonData)

console.log('navbar.json file created successfully.')
