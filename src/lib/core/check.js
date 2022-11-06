import { programStore } from "../../store/program_store"
import { declareVariables } from "./variable"
import { declareTags } from "./tags"
import { validInstructions, propertyProgram } from "./constants"
import { errorInvalidInstruction } from "./errors/errors_general"

const regexNameProp = new RegExp("^[a-zA-Z_][a-zA-Z0-9_]*$")

let programa
programStore.subscribe((program) => {
  programa = program
})

const syntaxCheck = (code) => {
  code.forEach((line, indexLine) => {
    line.trim()
    const splitLine = line.split(" ")

    if (!validInstructions[splitLine[0]]) {
      const error = errorInvalidInstruction(splitLine[0], indexLine)
      programStore.addElementToListProperty(propertyProgram.errors, error)

      return
    }

    declareVariables(splitLine, indexLine)
    declareTags(splitLine, indexLine)
  })
  console.log(programa)
}

const findIndexLine = (code, line) => {
  return code.findIndex((codeLine) => codeLine.trim() === line)
}

export { syntaxCheck, findIndexLine, regexNameProp }
