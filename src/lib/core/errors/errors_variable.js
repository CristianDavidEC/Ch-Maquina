const errorTypeOfVariable = (instruction, indexCode) => {
  return `Error: ${instruction} the type of variable is unknown | ${indexCode}:`
}

const errorTypeValue = (instruction, indexCode) => {
  return `Error: ${instruction} the value is not of the stated type | ${indexCode}:`
}

export { errorTypeOfVariable, errorTypeValue }
