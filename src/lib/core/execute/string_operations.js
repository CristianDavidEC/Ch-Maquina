import { findVariable } from "./execute"

const concatene = (lineCode, appExec, currentApp) => {
  const variable = findVariable(lineCode[1])
  if (variable) {
    currentApp.updateProperty(
      "acumulator",
      appExec.acumulator + " " + variable.value
    )
  }
}

const elimine = (lineCode, appExec, currentApp) => {
  const variable = findVariable(lineCode[1])
  if (variable) {
    currentApp.updateProperty(
      "acumulator",
      appExec.acumulator.replaceAll(variable.value, "")
    )
  }
}

const extraiga = (lineCode, appExec, currentApp) => {
  currentApp.updateProperty(
    "acumulator",
    appExec.acumulator.substring(0, lineCode[1])
  )
}

export { concatene, elimine, extraiga }
