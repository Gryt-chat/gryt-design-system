import Link from 'next/link'

interface jsonDataInterface {
  [key: string]: string
}

export function GenerateMenu(jsonData: jsonDataInterface) {
  const groups: { [key: string]: any } = {}

  Object.keys(jsonData).forEach((key) => {
    const dir = jsonData[key]
    const parts = dir.split('/')
    if (parts[1].length > 0 && !groups[parts[1]]) groups[parts[1]] = []
    if (key.length > 0) {
      groups[parts[1]]?.push({ [key]: dir })
    }
  })
  return Object.keys(groups).map((categoryKey) => {
    return (
      <div key={categoryKey}>
        <h2 className='font-bold text-2xl'>{categoryKey}</h2>
        <ul className='flex flex-col gap-2'>
          {groups[categoryKey].map((element: { [key: string]: any }) => {
            return Object.keys(element).map((categoryItemKey) => {
              if (categoryItemKey !== categoryKey)
                return (
                  <li key={categoryItemKey}>
                    <Link
                      className='link font-medium'
                      href={element[categoryItemKey]}
                    >
                      {categoryItemKey}
                    </Link>
                  </li>
                )
            })
          })}
        </ul>
      </div>
    )
  })
}
