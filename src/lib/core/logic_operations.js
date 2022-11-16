import { findVariable, updateVariable } from "./execute"

const and = (lineCode) => {
  const operator1 = findVariable(lineCode[1])
  const operator2 = findVariable(lineCode[2])
  const result = findVariable(lineCode[3])

  if (operator1.value && operator2.value) {
    updateVariable(result.name, 1)

    return
  }

  updateVariable(result.name, 0)
}

const or = (lineCode) => {
  const operator1 = findVariable(lineCode[1])
  const operator2 = findVariable(lineCode[2])
  const result = findVariable(lineCode[3])

  if (operator1.value || operator2.value) {
    updateVariable(result.name, 1)

    return
  }

  updateVariable(result.name, 0)
}

const not = (lineCode) => {
  const operator = findVariable(lineCode[1])
  const result = findVariable(lineCode[2])

  if (operator.value) {
    updateVariable(result.name, 0)

    return
  }

  updateVariable(result.name, 1)
}

const equal = (lineCode) => {
  const operator1 = findVariable(lineCode[1])
  const operator2 = findVariable(lineCode[2])
  const result = findVariable(lineCode[3])

  if (operator1.value === operator2.value) {
    updateVariable(result.name, 1)

    return
  }

  updateVariable(result.name, 0)
}

const greater = (lineCode) => {
  const operator1 = findVariable(lineCode[1])
  const operator2 = findVariable(lineCode[2])
  const result = findVariable(lineCode[3])

  if (operator1.value > operator2.value) {
    updateVariable(result.name, 1)

    return
  }

  updateVariable(result.name, 0)
}

const lesser = (lineCode) => {
  const operator1 = findVariable(lineCode[1])
  const operator2 = findVariable(lineCode[2])
  const result = findVariable(lineCode[3])

  if (operator1.value < operator2.value) {
    updateVariable(result.name, 1)

    return
  }

  updateVariable(result.name, 0)
}
