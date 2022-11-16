import { findTag } from "./execute"

const vaya = (lineCode, currentApp) => {
  const tag = findTag(lineCode[1])
  currentApp.updateProperty("codeIndexCurrent", tag.lineToGo)
}

const vayaSi = (lineCode, currentApp, appExec) => {
  const tag1 = findTag(lineCode[1])
  const tag2 = findTag(lineCode[2])

  if (appExec.acumulator > 0) {
    currentApp.updateProperty("codeIndexCurrent", tag1.lineToGo)
    return
  }

  if (appExec.acumulator < 0) {
    currentApp.updateProperty("codeIndexCurrent", tag2.lineToGo)
    return
  }

  currentApp.updateProperty("codeIndexCurrent", appExec.codeIndexCurrent + 1)
}
