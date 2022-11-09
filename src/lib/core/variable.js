import { programStore } from "../../store/program_store"

import { validTypeVariables } from "./constants"

import { errorTypeOfVariable, errorTypeValue } from "./errors/errors"

import { errorInvalidLine, checkDeclarationProperty } from "./errors/errors"

const declareVariables = (splitLine, indexLine) => {
  if (splitLine[0] !== "nueva") {
    return
  }

  const error = checkVaribleSyntax(splitLine, indexLine)
  if (error) {
    programStore.addElementToListProperty("errors", error)

    return
  }

  const newVariable = createVariable(splitLine, indexLine)
  //console.log(newVariable)
  programStore.addElementToListProperty("variables", newVariable)
}

const checkVaribleSyntax = (splitLine, indexLine) => {
  if (splitLine.length < 3) {
    return errorInvalidLine(splitLine, indexLine)
  }

  const error = checkDeclarationProperty(splitLine, indexLine)
  if (error) {
    return error
  }

  if (!validTypeVariables[splitLine[2]]) {
    return errorTypeOfVariable(splitLine[2], indexLine)
  }

  if (!checkValue(splitLine)) {
    return errorTypeValue(splitLine[2], indexLine)
  }
}

const checkValue = (splitLine) => {
  let value = splitLine.slice(3).join(" ")

  if (splitLine[2] !== "C") {
    if (isNaN(Number(value))) {
      return false
    }
  }

  if (splitLine[2] === "L") {
    if (Number(value) > 1 || Number(value) < 0) {
      return false
    }
  }

  return true
}

const createVariable = (splitLine, indexLine) => {
  return {
    name: splitLine[1],
    type: splitLine[2],
    indexLine: indexLine,
    content: splitLine.slice(0, 3).join(" "),
    value: assignValue(splitLine[2], splitLine.slice(3).join(" ")),
  }
}

const assignValue = (type, value) => {
  switch (type) {
    case "C":
      return value
    case "I":
      return Math.round(Number(value))
    case "R":
      return Number(value)
    case "L":
      return Number(value)
  }
}

export { declareVariables }
