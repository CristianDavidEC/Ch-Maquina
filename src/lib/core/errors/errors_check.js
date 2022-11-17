import { validInstructions } from "../checks/constants"
import { regexNameProp } from "../checks/check"

const errorInvalidLine = (lines, indexCode) => {
  return `Error: ${lines.join(" ")}, is invalid declaration|${indexCode + 1}: `
}

const errorInvalidInstruction = (instruction, indexCode) => {
  return `Error: ${instruction}, is not a valid instruction|${indexCode + 1}: `
}

const errorNoReturnInstrucction = (line, indexCode) => {
  return `Error: ${line}, the final line is not a return statement|${
    indexCode + 1
  }: `
}

const errorVariableNameLong = (instruction, indexCode) => {
  return `Error: ${instruction}, is a very long variable name|${
    indexCode + 1
  }: `
}

const errorUseReservedWord = (instruction, indexCode) => {
  return `Error: ${instruction}, is a reserved word|${indexCode + 1}: `
}

const errorSyntaxName = (instruction, indexCode) => {
  return `Error: ${instruction.join(
    " "
  )}, does not meet variable name specifications|${indexCode + 1}: `
}

const errorWrongDefineOperation = (lines, indexCode) => {
  return `Error: ${lines.join(" ")}, the operation is wrong|${indexCode + 1}: `
}

const errorVariableIsNotDefined = (lines, indexCode) => {
  return `Error: ${lines.join(" ")}, the variable is not defined|${
    indexCode + 1
  }: `
}

const errorTagIsNotDefined = (lines, indexCode) => {
  return `Error: ${lines.join(" ")}, the tag is not defined|${indexCode + 1}: `
}

const errorTypeOfVariable = (instruction, indexCode) => {
  return `Error: ${instruction} the type of variable is unknown|${
    indexCode + 1
  }: `
}

const errorTypeValue = (instruction, indexCode) => {
  return `Error: ${instruction} the value is not of the stated type|${
    indexCode + 1
  }: `
}

const errorValueLineToGo = (instruction, indexCode) => {
  return `Error: ${instruction} the value of the labels must be numeric|${
    indexCode + 1
  }: `
}

const errorValueNotRange = (instruction, indexCode) => {
  return `Error: ${instruction} the value is out of range of code lines|${
    indexCode + 1
  }: `
}

const checkDeclarationProperty = (splitLine, indexLine) => {
  if (splitLine[1].length > 255) {
    return errorVariableNameLong(splitLine[1], indexLine)
  }

  if (validInstructions[splitLine[1]]) {
    return errorUseReservedWord(splitLine[1], indexLine)
  }

  if (!regexNameProp.test(splitLine[1])) {
    return errorSyntaxName(splitLine, indexLine)
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
