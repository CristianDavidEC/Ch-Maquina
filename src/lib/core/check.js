import { program } from "../../store/program_store"
import { findVariables } from "./variable"
import { propertysProgram } from "./constants"

const syntaxCheck = (code, nameProgram) => {
  program.assignPropsValue(propertysProgram.name, nameProgram)

  const variables = findVariables(code, nameProgram)
  console.log(variables)
}

const findIndexLine = (code, line) => {
  return code.findIndex((codeLine) => codeLine === line)
}

export { syntaxCheck, findIndexLine }
