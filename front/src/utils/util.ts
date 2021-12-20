const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms))

const rgb2rgba = (color: string, alpha: number): string => {
  let rgba = color.match(/[\d.]+/g)
  if (rgba && rgba.length >= 3) {
    return `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${alpha})`
  }
  return color
}

export { delay, rgb2rgba }
