import { findVariable, updateVariable } from "./execute"

const cargue = (lineCode, currentApp) => {
  const variable = findVariable(lineCode[1])
  currentApp.updateProperty("acumulator", variable.value)
}

const almacene = (lineCode, appExec) => {
  const variable = findVariable(lineCode[1])
  updateVariable(variable.name, appExec.acumulator)
}

const lea = (lineCode) => {
  const variable = findVariable(lineCode[1])
  const value = prompt(`Enter a value for the variable ${variable.name}`)

  updateVariable(variable.name, typesOf[variable.type](value))
}

const typesOf = {
  I: (value) => parseInt(value),
  R: (value) => parseFloat(value),
  C: (value) => value,
  L: (value) => (value > 1 ? 1 : 0),
}
