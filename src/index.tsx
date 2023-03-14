import fs from 'fs'
import path from 'path'

const components: { [key: string]: any } = {}

// Read all component files in the components directory
const componentFiles = fs.readdirSync(path.join(__dirname, 'components'))

// Loop through each file and export all named exports
for (const file of componentFiles) {
  if (file.endsWith('.tsx')) {
    const componentModule = require(path.join(__dirname, 'components', file))
    for (const key in componentModule) {
      if (Object.prototype.hasOwnProperty.call(componentModule, key)) {
        components[key] = componentModule[key]
      }
    }
  }
}

export { components }
