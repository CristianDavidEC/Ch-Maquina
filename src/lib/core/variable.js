import { program } from "../../store/program_store"
import { findIndexLine } from "./check"
import {
  propertysProgram,
  validInstructions,
  validString,
  validTypeVariables,
} from "./constants"
import {
  errorInvalidDeclaration,
  errorInvalidInstruction,
  errorSyntaxNameVariable,
  errorTypeOfVariable,
  errorTypeValue,
  errorUseReservedWord,
  errorVariableNameLong,
} from "./errors_variable"

const regexVariableName = new RegExp("^[a-zA-Z_][a-zA-Z0-9_]*$")

const findVariables = (code) => {
  for (const line of code) {
    line.trim()
    let splitLine = line.split(" ")
    if (validString.nueva === splitLine[0]) {
      checkVariableLine(code, line, splitLine)
    }
  }
}

const checkVariableLine = (code, line, splitLine) => {
  const indexLine = findIndexLine(code, line)
  const error = checkVaribleSyntax(splitLine, indexLine)

  if (error) {
    console.log(error)
    program.addElementToListProperty(propertysProgram.errors, error)

    return
  }

  let newVariable = createVariable(splitLine, indexLine)
  program.addElementToListProperty(propertysProgram.variables, newVariable)
}

const checkVaribleSyntax = (splitLine, indexLine) => {
  if (splitLine.length < 3) {
    return errorInvalidDeclaration(splitLine, indexLine)
  }

  if (!validInstructions[splitLine[0]]) {
    return errorInvalidInstruction(splitLine[0], indexLine)
  }

  if (splitLine[1].length > 255) {
    return errorVariableNameLong(splitLine[1], indexLine)
  }

  if (validInstructions[splitLine[1]]) {
    return errorUseReservedWord(splitLine[1], indexLine)
  }

  if (!regexVariableName.test(splitLine[1])) {
    return errorSyntaxNameVariable(splitLine[1], indexLine)
  }

  if (!validTypeVariables[splitLine[2]]) {
    return errorTypeOfVariable(splitLine[2], indexLine)
  }

  if (!validateValue(splitLine)) {
    return errorTypeValue(splitLine[2], indexLine)
  }
}

const validateValue = (splitLine) => {
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
    indexLine: indexLine,
    name: splitLine[1],
    type: splitLine[2],
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
    default:
      return 0
  }
}

export { findVariables }
