import { validInstructions } from "../constants"
import { regexNameProp } from "../check"

const errorInvalidLine = (lines, indexCode) => {
  return `Error: ${lines.join(" ")}, is invalid declaration | ${indexCode}:`
}

const errorInvalidInstruction = (instruction, indexCode) => {
  return `Error: ${instruction}, is not a valid instruction | ${indexCode}:`
}

const errorNoReturnInstrucction = (line, indexCode) => {
  return `Error: ${line}, the final line is not a return statement | ${indexCode}:`
}

const errorVariableNameLong = (instruction, indexCode) => {
  return `Error: ${instruction}, is a very long variable name | ${indexCode}:`
}

const errorUseReservedWord = (instruction, indexCode) => {
  return `Error: ${instruction}, is a reserved word | ${indexCode}:`
}

const errorSyntaxName = (instruction, indexCode) => {
  return `Error: ${instruction}, does not meet variable name specifications | ${indexCode}:`
}

const errorWrongDefineOperation = (lines, indexCode) => {
  return `Error: ${lines.join(" ")}, the operation is wrong | ${indexCode}:`
}

const errorVariableIsNotDefined = (lines, indexCode) => {
  return `Error: ${lines.join(
    " "
  )}, the variable is not defined | ${indexCode}:`
}

const errorTagIsNotDefined = (lines, indexCode) => {
  return `Error: ${lines.join(
    " "
  )}, the variable is not defined | ${indexCode}:`
}

const errorTypeOfVariable = (instruction, indexCode) => {
  return `Error: ${instruction} the type of variable is unknown | ${indexCode}:`
}

const errorTypeValue = (instruction, indexCode) => {
  return `Error: ${instruction} the value is not of the stated type | ${indexCode}:`
}

const errorValueLineToGo = (instruction, indexCode) => {
  return `Error: ${instruction} the value of the labels must be numeric | ${indexCode}:`
}

const errorValueNotRange = (instruction, indexCode) => {
  return `Error: ${instruction} the value is out of range of code lines | ${indexCode}:`
}

const checkDeclarationProperty = (splitLine, indexLine) => {
  if (splitLine[1].length > 255) {
    return errorVariableNameLong(splitLine[1], indexLine)
  }

  if (validInstructions[splitLine[1]]) {
    return errorUseReservedWord(splitLine[1], indexLine)
  }

  if (!regexNameProp.test(splitLine[1])) {
    return errorSyntaxName(splitLine[1], indexLine)
  }
}

export {
  errorInvalidLine,
  errorInvalidInstruction,
  errorVariableNameLong,
  errorUseReservedWord,
  errorSyntaxName,
  checkDeclarationProperty,
  errorWrongDefineOperation,
  errorVariableIsNotDefined,
  errorNoReturnInstrucction,
  errorTypeOfVariable,
  errorTypeValue,
  errorValueLineToGo,
  errorValueNotRange,
  errorTagIsNotDefined,
}
