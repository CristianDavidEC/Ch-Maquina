import { application } from "../../store/program_store"
import { declareVariables } from "./variable"
import { declareTags } from "./tags"
import {
  errorWrongDefineOperation,
  errorVariableIsNotDefined,
  errorNoReturnInstrucction,
  errorTypeValue,
  errorTagIsNotDefined,
} from "./errors/errors_check"
import { validInstructions, propertyProgram, statusProgram } from "./constants"
import { errorInvalidInstruction } from "./errors/errors_check"
import { findVariable, findTag } from "../../store/tools"

const regexNameProp = new RegExp("^[a-zA-Z_][a-zA-Z0-9_]*$")

let programa
application.subscribe((app) => {
  programa = app
})

const instructionsEvaluated = ["", "//", "retorne", "nueva", "etiqueta"]

const syntaxCheck = (code) => {
  declareVarsAndTags(code)
  checkRetorne(code)
  code.forEach((line, indexLine) => {
    line = line.trim()
    const splitLine = line.split(" ")
    application.addElementToListProperty(propertyProgram.code, line)

    if (instructionsEvaluated.includes(splitLine[0])) return

    const instruction = validInstructions[splitLine[0]]
    if (!instruction) {
      const error = errorInvalidInstruction(splitLine[0], indexLine)
      application.addElementToListProperty(propertyProgram.errors, error)

      return
    }

    checkXInstructions[instruction.check](splitLine, indexLine)
  })

  validateStatusProgram()
}

const validateStatusProgram = () => {
  if (programa.errors.length > 0) {
    application.assignPropsValue(propertyProgram.state, statusProgram.wrong)

    return
  }
  application.assignPropsValue(propertyProgram.state, statusProgram.ready)
}

const declareVarsAndTags = (code) => {
  code.forEach((line, indexLine) => {
    line = line.trim()
    const splitLine = line.split(" ")
    declareVariables(splitLine, indexLine)
    declareTags(splitLine, indexLine)
  })
}

const checkVariableOperations = (splitLine, indexLine) => {
  if (splitLine.length !== 2) {
    const error = errorWrongDefineOperation(splitLine, indexLine)
    application.addElementToListProperty(propertyProgram.errors, error)

    return
  }

  if (splitLine[1] === "acumulador") {
    return
  }

  const variable = findVariable(splitLine[1])
  if (!variable) {
    const error = errorVariableIsNotDefined(splitLine, indexLine)
    application.addElementToListProperty(propertyProgram.errors, error)

    return
  }

  if (variable.indexLine > indexLine) {
    const error = errorVariableIsNotDefined(splitLine, indexLine)
    application.addElementToListProperty(propertyProgram.errors, error)

    return
  }
}

const checkRetorne = (code) => {
  const finalLine = code[code.length - 1]
  if (!finalLine.startsWith("retorne")) {
    const error = errorNoReturnInstrucction("retorne", code.length)
    application.addElementToListProperty(propertyProgram.errors, error)
  }
}

const checkLogicalOperation = (splitLine, indexLine) => {
  if (splitLine.length !== 4) {
    const error = errorWrongDefineOperation(splitLine, indexLine)
    application.addElementToListProperty(propertyProgram.errors, error)

    return
  }

  splitLine.shift()
  splitLine.forEach((variable) => {
    const variableFound = findVariable(variable)
    if (variableFound.type !== "L") {
      const error = errorTypeValue(variable, indexLine)
      application.addElementToListProperty(propertyProgram.errors, error)

      return
    }
  })
}

const checkExtraiga = (splitLine, indexLine) => {
  if (splitLine.length !== 2) {
    const error = errorWrongDefineOperation(splitLine, indexLine)
    application.addElementToListProperty(propertyProgram.errors, error)

    return
  }

  if (isNaN(Number(splitLine[1]))) {
    const error = errorTypeValue(splitLine[1], indexLine)
    application.addElementToListProperty(propertyProgram.errors, error)

    return
  }
}

const checkVayaSi = (splitLine, indexLine) => {
  if (splitLine.length !== 3) {
    const error = errorWrongDefineOperation(splitLine, indexLine)
    application.addElementToListProperty(propertyProgram.errors, error)

    return
  }

  const tag = findTag(splitLine[1])
  const tag2 = findTag(splitLine[2])
  if (!tag || !tag2) {
    const error = errorTagIsNotDefined(splitLine, indexLine)
    application.addElementToListProperty(propertyProgram.errors, error)

    return
  }
}

const checkVaya = (splitLine, indexLine) => {
  if (splitLine.length !== 2) {
    const error = errorTagIsNotDefined(splitLine, indexLine)
    application.addElementToListProperty(propertyProgram.errors, error)

    return
  }

  const tag = findTag(splitLine[1])
  if (!tag) {
    const error = errorTagIsNotDefined(splitLine, indexLine)
    application.addElementToListProperty(propertyProgram.errors, error)

    return
  }
}

const checkXInstructions = {
  checkVariableOperations,
  checkExtraiga,
  checkLogicalOperation,
  checkVaya,
  checkVayaSi,
}

export { syntaxCheck, regexNameProp }
