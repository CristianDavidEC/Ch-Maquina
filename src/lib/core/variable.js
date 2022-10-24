import { findIndexLine } from "./check"
import { validInstructions, validString } from "./constants"
import { invalidInstruction } from "./errors"

const regexVariableName = new RegExp("^[a-zA-Z_][a-zA-Z0-9_]*$")

const findVariables = (code, nameProgram) => {
  const variables = code.filter((line) => {
    let splitLine = line.split(" ")
    return validString.nueva === splitLine[0].toLowerCase()
  })

  return variables
}

const checkVaribleSyntax = (code, line, nameProgram) => {
  let indexLine = findIndexLine(code, line)
  let splitLine = line.split(" ")
  if (!validInstructions[splitLine[0].toLowerCase()]) {
    return invalidInstruction(splitLine[0], indexLine)
  }
}

export { findVariables }
