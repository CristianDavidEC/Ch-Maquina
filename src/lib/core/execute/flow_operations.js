import { findTag } from "./execute"

const vaya = (lineCode, currentApp) => {
  const tag = findTag(lineCode[1])
  console.log(tag)
  currentApp.updateProperty("codeIndexCurrent", tag.lineToGo)
}

const vayaSi = (lineCode, currentApp, appExec, index) => {
  const tag1 = findTag(lineCode[1])
  const tag2 = findTag(lineCode[2])

  if (appExec.acumulator > 0) {
    currentApp.updateProperty("codeIndexCurrent", tag1.lineToGo - 1)
    return tag1.lineToGo - 1
  }

  if (appExec.acumulator < 0) {
    currentApp.updateProperty("codeIndexCurrent", tag2.lineToGo - 1)
    return tag2.lineToGo - 1
  }

  currentApp.updateProperty("codeIndexCurrent", index + 1)
  return (index += 1)
}

export { vaya, vayaSi }
