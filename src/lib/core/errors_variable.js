const errorInvalidDeclaration = (lines, indexCode) => {
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

const errorSyntaxNameVariable = (instruction, indexCode) => {
  return `Error: ${instruction} does not meet variable name specifications | ${indexCode}:`
}

const errorTypeOfVariable = (instruction, indexCode) => {
  return `Error: ${instruction} the type of variable is unknown | ${indexCode}:`
}

const errorTypeValue = (instruction, indexCode) => {
  return `Error: ${instruction} the value is not of the stated type | ${indexCode}:`
}

export {
  errorInvalidDeclaration,
  errorInvalidInstruction,
  errorVariableNameLong,
  errorUseReservedWord,
  errorSyntaxNameVariable,
  errorTypeOfVariable,
  errorTypeValue,
}
