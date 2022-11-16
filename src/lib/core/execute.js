import {
  currentApp,
  outputs,
  variables,
  tags,
  errors,
} from "../../store/program_store"

let variableExec
let tagExec
let appExec
let errorsExec

const execute = () => {
  loadItems()
  if (errorsExec.length > 0) {
    return
  }

  const { code } = appExec
}

const loadItems = () => {
  variables.subscribe((variables) => {
    variableExec = variables
  })

  tags.subscribe((tags) => {
    tagExec = tags
  })

  currentApp.subscribe((app) => {
    appExec = app
  })

  errors.subscribe((errors) => {
    errorsExec = errors
  })
}

const findVariable = (nameVariable) => {
  return variableExec.find((variable) => variable.name === nameVariable)
}

const updateVariable = (nameVariable, value) => {
  const index = variableExec.findIndex(
    (variable) => variable.name === nameVariable
  )

  variables.update((variables) => {
    variables[index].value = value
    return variables
  })
}

const findTag = (nameTag) => {
  return tagExec.find((tag) => tag.name === nameTag)
}

const findIndexTag = (nameTag) => {
  return tagExec.findIndex((tag) => tag.name === nameTag)
}

export { execute, findVariable, findTag, updateVariable, findIndexTag }
