import { programStore } from "./program_store"

let programa
programStore.subscribe((program) => {
  programa = program
})

const findVariable = (nameVariable) => {
  return programa.variables.find((variable) => variable.name === nameVariable)
}

const findTag = (nameTag) => {
  return programa.tags.find((tag) => tag.name === nameTag)
}

export { findVariable, findTag }
