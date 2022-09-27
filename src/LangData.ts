const bs: Array<[string, string]> = [
  ['Planets', 'Planete'],
  ['Photo by', 'Fotografija od'],
  ['on', 'sa'],
]

export const getTranslate = (
  lang: string | undefined,
  text: string
): string => {
  let returnText: [string, string] | undefined

  if (lang === 'bs') {
    returnText = bs.find((t) => t[0] === text)
  }

  if (returnText) return returnText[1]

  return text
}
