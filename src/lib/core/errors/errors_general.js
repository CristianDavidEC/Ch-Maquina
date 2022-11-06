import { validInstructions } from "../constants"
import { regexNameProp } from "../check"

const errorInvalidLine = (lines, indexCode) => {
  return `Error: ${lines.join(" ")} is invalid declaration | ${indexCode}:`
}

const errorInvalidInstruction = (instruction, indexCode) => {
  return `Error: ${instruction} is not a valid instruction | ${indexCode}:`
}

const errorVariableNameLong = (instruction, indexCode) => {
  return `Error: ${instruction} is a very long variable name | ${indexCode}:`
}

const errorUseReservedWord = (instruction, indexCode) => {
  return `Error: ${instruction} is a reserved word | ${indexCode}:`
}

const errorSyntaxName = (instruction, indexCode) => {
  return `Error: ${instruction} does not meet variable name specifications | ${indexCode}:`
}

const errorDeclarationProperty = (splitLine, indexLine) => {
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
  errorDeclarationProperty,
}
