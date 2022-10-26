import { findVariables } from "./variable"

const syntaxCheck = (code) => {
  findVariables(code)
}

const findIndexLine = (code, line) => {
  return code.findIndex((codeLine) => codeLine === line)
}

export { syntaxCheck, findIndexLine }
