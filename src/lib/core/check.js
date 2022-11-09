import { programStore } from "../../store/program_store"
import { declareVariables } from "./variable"
import { declareTags } from "./tags"
import {
  errorWrongDefineOperation,
  errorVariableIsNotDefined,
  errorNoReturnInstrucction,
  errorTypeValue,
  errorTagIsNotDefined,
} from "./errors/errors"
import { validInstructions, propertyProgram } from "./constants"
import { errorInvalidInstruction } from "./errors/errors"
import { findVariable, findTag } from "../../store/tools"

const regexNameProp = new RegExp("^[a-zA-Z_][a-zA-Z0-9_]*$")

let programa
programStore.subscribe((program) => {
  programa = program
})

const syntaxCheck = (code) => {
  checkRetorne(code)
  declareVarsAndTags(code)

  code.forEach((line, indexLine) => {
    line.trim()
    const splitLine = line.split(" ")
    programStore.addElementToListProperty(propertyProgram.code, line)

    if (splitLine[0] === "") {
      return
    }

    if (splitLine[0] === "//") {
      return
    }

    if (splitLine[0] === "retorne") {
      return
    }

    if (!validInstructions[splitLine[0]]) {
      const error = errorInvalidInstruction(splitLine[0], indexLine)
      programStore.addElementToListProperty(propertyProgram.errors, error)

      return
    }

    checkSyntaxOperation(splitLine, indexLine)
  })

  console.log(programa)
}

const declareVarsAndTags = (code) => {
  code.forEach((line, indexLine) => {
    line.trim()
    const splitLine = line.split(" ")
    declareVariables(splitLine, indexLine)
    declareTags(splitLine, indexLine)
  })
}

const checkSyntaxOperation = (splitLine, indexLine) => {
  const operation = splitLine[0]

  if (operation === "nueva" || operation === "etiqueta") {
    return
  }

  if (operation === "vaya" || operation === "vayasi") {
    checkVayaOperation(splitLine, indexLine)
    return
  }

  if (operation === "extraiga") {
    checkExtraiga(splitLine, indexLine)
    return
  }

  if (splitLine.length === 2) {
    const variable = findVariable(splitLine[1])
    checkVariableOperations(variable, splitLine, indexLine)
    return
  }

  if (splitLine.length === 4) {
    checkLogicalOperation(splitLine, indexLine)
    return
  }

  const error = errorWrongDefineOperation(splitLine, indexLine)
  programStore.addElementToListProperty(propertyProgram.errors, error)
}

const checkVariableOperations = (variable, splitLine, indexLine) => {
  if (!variable) {
    const error = errorVariableIsNotDefined(splitLine, indexLine)
    programStore.addElementToListProperty(propertyProgram.errors, error)

    return
  }

  if (variable.indexLine > indexLine) {
    const error = errorVariableIsNotDefined(splitLine, indexLine)
    programStore.addElementToListProperty(propertyProgram.errors, error)

    return
  }
}

const checkRetorne = (code) => {
  const finalLine = code[code.length - 1]
  console.log(finalLine)
  if (!finalLine.startsWith("retorne")) {
    const error = errorNoReturnInstrucction("retorne", code.length)
    programStore.addElementToListProperty(propertyProgram.errors, error)
  }
}

const checkLogicalOperation = (splitLine, indexLine) => {
  console.log(splitLine)
  const variablesLogic = splitLine.shift()

  variablesLogic.forEach((variable) => {
    const variableFound = findVariable(variable)
    checkVariableOperations(variableFound, [variable], indexLine)

    if (variableFound.type !== "L") {
      const error = errorTypeValue(variable, indexLine)
      programStore.addElementToListProperty(propertyProgram.errors, error)

      return
    }
  })
}

const checkExtraiga = (splitLine, indexLine) => {
  if (splitLine.length !== 2) {
    const error = errorWrongDefineOperation(splitLine, indexLine)
    programStore.addElementToListProperty(propertyProgram.errors, error)

    return
  }

  if (isNaN(Number(splitLine[1]))) {
    const error = errorTypeValue(splitLine[1], indexLine)
    programStore.addElementToListProperty(propertyProgram.errors, error)

    return
  }
}

const checkVayaOperation = (splitLine, indexLine) => {
  if (splitLine[0] === "vaya") {
    checkVaya(splitLine, indexLine)

    return
  }

  if (splitLine[0] === "vayasi") {
    checkVayaSi(splitLine, indexLine)

    return
  }
}

const checkVayaSi = (splitLine, indexLine) => {
  if (splitLine.length !== 3) {
    const error = errorWrongDefineOperation(splitLine, indexLine)
    programStore.addElementToListProperty(propertyProgram.errors, error)

    return
  }

  const tag = findTag(splitLine[1])
  const tag2 = findTag(splitLine[2])
  if (!tag || !tag2) {
    const error = errorVariableIsNotDefined(splitLine, indexLine)
    programStore.addElementToListProperty(propertyProgram.errors, error)

    return
  }
}

const checkVaya = (splitLine, indexLine) => {
  if (splitLine.length !== 2) {
    const error = errorTagIsNotDefined(splitLine, indexLine)
    programStore.addElementToListProperty(propertyProgram.errors, error)

    return
  }

  const tag = findTag(splitLine[1])
  if (!tag) {
    const error = errorTagIsNotDefined(splitLine, indexLine)
    programStore.addElementToListProperty(propertyProgram.errors, error)

    return
  }
}

export { syntaxCheck, regexNameProp }
