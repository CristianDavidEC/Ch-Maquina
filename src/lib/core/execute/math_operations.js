import { findVariable } from "./execute"
import { errors } from "../../../store/program_store"

const sume = (lineCode, appExec, currentApp) => {
  const variable = findVariable(lineCode[1])
  if (variable) {
    currentApp.updateProperty("acumulator", appExec.acumulator + variable.value)
  }
}

const reste = (lineCode, appExec, currentApp) => {
  const variable = findVariable(lineCode[1])
  if (variable) {
    currentApp.updateProperty("acumulator", appExec.acumulator - variable.value)
  }
}

const multiplique = (lineCode, appExec, currentApp) => {
  const variable = findVariable(lineCode[1])
  if (variable) {
    currentApp.updateProperty("acumulator", appExec.acumulator * variable.value)
  }
}

const divida = (lineCode, appExec, currentApp) => {
  const variable = findVariable(lineCode[1])

  if (variable.value === 0) {
    currentApp.updateProperty("state", "error")
    const error = `It is not possible to divide by zero, the variable ${variable.name} has a value of 0`
    errors.update((errors) => {
      errors.push(error)
      return errors
    })

    return
  }

  currentApp.updateProperty("acumulator", appExec.acumulator / variable.value)
}

const potencia = (lineCode, appExec, currentApp) => {
  const variable = findVariable(lineCode[1])
  if (variable) {
    currentApp.updateProperty(
      "acumulator",
      Math.pow(appExec.acumulator, variable.value)
    )
  }
}

const modulo = (lineCode, appExec, currentApp) => {
  const variable = findVariable(lineCode[1])
  if (variable) {
    currentApp.updateProperty("acumulator", appExec.acumulator % variable.value)
  }
}

export { sume, reste, multiplique, divida, potencia, modulo }
