const PATH_BASE = import.meta.env.DEV 
  ? '/src/assets/img/deserts/'
  : '/forgot-sugar-img-train/deserts/'

export function parseDesertName(filePath: string): string {
  const desertNameAndExtension = filePath.split(PATH_BASE).at(-1)
  if (!desertNameAndExtension) throw new Error(`Error during desert name parsing: ${filePath}`)
  return desertNameAndExtension.split('.').at(0)!
}

export function getRandomItem<T>(arr: T[]): T {
  const randomInd = Math.floor(Math.random() * arr.length)
  return arr[randomInd]
}

export function shuffleArr<T extends readonly U[], U>(arr: T): U[] {
  const copy: U[] = arr.slice()
  for (let i = 0; i < copy.length; i++) {
    const randomInd = Math.floor(Math.random() * arr.length)
    ;[copy[i], copy[randomInd]] = [copy[randomInd], copy[i]]
  }
  return copy
}