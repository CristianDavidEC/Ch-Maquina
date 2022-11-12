import { declareVariables } from "./variable"
import { declareTags } from "./tags"
import {
  errorWrongDefineOperation,
  errorVariableIsNotDefined,
  errorNoReturnInstrucction,
  errorTypeValue,
  errorTagIsNotDefined,
} from "./errors/errors_check"
import { validInstructions, stateProgram } from "./constants"
import { errorInvalidInstruction } from "./errors/errors_check"

const regexNameProp = new RegExp("^[a-zA-Z_][a-zA-Z0-9_]*$")
const instructionsEvaluated = ["", "//", "retorne", "nueva", "etiqueta"]

const syntaxCheck = (application) => {
  const { code } = application
  checkRetorne(application)
  declareVarsAndTags(application)

  code.forEach((line, indexLine) => {
    line = line.trim()
    const splitLine = line.split(" ")

    if (instructionsEvaluated.includes(splitLine[0])) return

    const instruction = validInstructions[splitLine[0]]
    if (!instruction) {
      const error = errorInvalidInstruction(splitLine[0], indexLine)
      application.errors.push(error)

      return
    }

    checkXInstructions[instruction.check](splitLine, indexLine, application)
  })

  validateStatusProgram(application)
}

const validateStatusProgram = (application) => {
  if (application.errors.length > 0) {
    application.state = stateProgram.wrong

    return
  }

  application.state = stateProgram.ready
}

const declareVarsAndTags = (application) => {
  const { code } = application
  code.forEach((line, indexLine) => {
    line = line.trim()
    const splitLine = line.split(" ")
    declareVariables(splitLine, indexLine, application)
    declareTags(splitLine, indexLine, application)
  })
}

const checkVariableOperations = (splitLine, indexLine, application) => {
  if (splitLine.length !== 2) {
    const error = errorWrongDefineOperation(splitLine, indexLine)
    application.errors.push(error)

    return
  }

  if (splitLine[1] === "acumulador") {
    return
  }

  const variable = application.findVariable(splitLine[1])
  if (!variable) {
    const error = errorVariableIsNotDefined(splitLine, indexLine)
    application.errors.push(error)

    return
  }

  if (variable.indexLine > indexLine) {
    const error = errorVariableIsNotDefined(splitLine, indexLine)
    application.errors.push(error)

    return
  }
}

const checkRetorne = (application) => {
  const { code } = application
  const finalLine = code[code.length - 1]
  if (!finalLine.startsWith("retorne")) {
    const error = errorNoReturnInstrucction("retorne", code.length)
    application.errors.push(error)
  }
}

const checkLogicalOperation = (splitLine, indexLine, application) => {
  if (splitLine.length !== 4) {
    const error = errorWrongDefineOperation(splitLine, indexLine)
    application.errors.push(error)

    return
  }

  splitLine.shift()
  splitLine.forEach((variable) => {
    const variableFound = application.findVariable(variable)
    if (variableFound.type !== "L") {
      const error = errorTypeValue(variable, indexLine)
      application.errors.push(error)

      return
    }
  })
}

const checkExtraiga = (splitLine, indexLine, application) => {
  if (splitLine.length !== 2) {
    const error = errorWrongDefineOperation(splitLine, indexLine)
    application.errors.push(error)

    return
  }

  if (isNaN(Number(splitLine[1]))) {
    const error = errorTypeValue(splitLine[1], indexLine)
    application.errors.push(error)

    return
  }
}

const checkVayaSi = (splitLine, indexLine, application) => {
  if (splitLine.length !== 3) {
    const error = errorWrongDefineOperation(splitLine, indexLine)
    application.errors.push(error)

    return
  }

  const tag = application.findTag(splitLine[1])
  const tag2 = application.findTag(splitLine[2])
  if (!tag || !tag2) {
    const error = errorTagIsNotDefined(splitLine, indexLine)
    application.errors.push(error)

    return
  }
}

const checkVaya = (splitLine, indexLine, application) => {
  if (splitLine.length !== 2) {
    const error = errorTagIsNotDefined(splitLine, indexLine)
    application.errors.push(error)

    return
  }

  const tag = application.findTag(splitLine[1])
  if (!tag) {
    const error = errorTagIsNotDefined(splitLine, indexLine)
    application.errors.push(error)

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
