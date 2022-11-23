import {
  currentApp,
  variables,
  tags,
  errors,
  outputs,
  allApplications,
} from "../../../store/program_store"
import { cargue, almacene, lea } from "./acumulator_operations"
import {
  sume,
  reste,
  multiplique,
  divida,
  potencia,
  modulo,
} from "./math_operations"
import { concatene, elimine, extraiga } from "./string_operations"
import { and, or, not, equal, greater, lesser } from "./logic_operations"
import { goingOut } from "./outputs_operations"
import { vaya, vayaSi } from "./flow_operations"
import { stateProgram } from "../checks/constants"

let variableExec
let tagExec
let appExec
let errorsExec
let aplicationsStore
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

allApplications.subscribe((value) => {
  aplicationsStore = value
})

const execute = (quantum) => {
  if (errorsExec.length > 0) {
    return
  }
  let finish = true

  outputs.update((outputs) => {
    const out = {
      type: "muestre",
      value: `App_execution./${appExec.name}`,
    }
    outputs.push(out)

    return outputs
  })

  updateApp(appExec.name, stateProgram.running)
  let index = appExec.codeIndexCurrent
  let iteradorQuantum = 0

  while (finish) {
    let lineCode = appExec.code[index].split(" ")
    let operation = lineCode[0]

    if (operation === "vaya") {
      index = vaya(lineCode, currentApp)
      lineCode = appExec.code[index].split(" ")
      operation = lineCode[0]
    }

    if (operation === "vayasi") {
      index = vayaSi(lineCode, currentApp, appExec, index)
      lineCode = appExec.code[index].split(" ")
      operation = lineCode[0]
    }

    operationsToExecute(operation, lineCode, currentApp, appExec)

    currentApp.updateProperty("codeIndexCurrent", index)
    index += 1

    if (operation === "retorne") {
      finish = false
      updateApp(appExec.name, stateProgram.finished)
    }

    if (quantum > 0) {
      iteradorQuantum += 1
      if (iteradorQuantum === quantum) {
        finish = false
      }
    }
  }
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

const updateApp = (nameApp, value) => {
  const index = aplicationsStore.findIndex(
    (variable) => variable.name === nameApp
  )

  allApplications.update((app) => {
    app[index].state = value
    return app
  })
}

const operationsToExecute = (operation, lineCode, currentApp, appExec) => {
  switch (operation) {
    case "cargue":
      cargue(lineCode, currentApp)
      break
    case "almacene":
      almacene(lineCode, appExec)
      break
    case "lea":
      lea(lineCode)
      break
    case "sume":
      sume(lineCode, appExec, currentApp)
      break
    case "reste":
      reste(lineCode, appExec, currentApp)
      break
    case "multiplique":
      multiplique(lineCode, appExec, currentApp)
      break
    case "divida":
      divida(lineCode, appExec, currentApp)
      break
    case "potencia":
      potencia(lineCode, appExec, currentApp)
      break
    case "modulo":
      modulo(lineCode, appExec, currentApp)
      break
    case "concatene":
      concatene(lineCode, appExec, currentApp)
      break
    case "elimine":
      elimine(lineCode, appExec, currentApp)
      break
    case "extraiga":
      extraiga(lineCode, appExec, currentApp)
      break
    case "Y":
      and(lineCode)
      break
    case "O":
      or(lineCode)
      break
    case "NO":
      not(lineCode)
      break
    case "igual":
      equal(lineCode)
      break
    case "mayor":
      greater(lineCode)
      break
    case "menor":
      lesser(lineCode)
      break
    case "imprima":
      goingOut(lineCode, appExec)
      break
    case "muestre":
      goingOut(lineCode, appExec)
      break
    default:
      break
  }
}

const findTag = (nameTag) => {
  return tagExec.find((tag) => tag.name === nameTag)
}

const findIndexTag = (nameTag) => {
  return tagExec.findIndex((tag) => tag.name === nameTag)
}

export {
  execute,
  findVariable,
  findTag,
  updateVariable,
  findIndexTag,
  updateApp,
}
