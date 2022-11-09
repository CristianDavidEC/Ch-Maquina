import { programStore } from "./../../store/program_store"
import { errorInvalidLine, checkDeclarationProperty } from "./errors/errors"
import { errorValueLineToGo, errorValueNotRange } from "./errors/errors"
import { propertyProgram } from "./constants"

let codeSize
programStore.subscribe((program) => {
  codeSize = program.codeSize
})

const declareTags = (splitLine, indexLine) => {
  if (splitLine[0] !== "etiqueta") {
    return
  }
  const error = checkTagSyntax(splitLine, indexLine)
  if (error) {
    programStore.addElementToListProperty(propertyProgram.errors, error)
    return
  }

  const newTag = createTag(splitLine, indexLine)
  programStore.addElementToListProperty(propertyProgram.tags, newTag)
}

const checkTagSyntax = (splitLine, indexLine) => {
  if (splitLine.length !== 3) {
    return errorInvalidLine(splitLine, indexLine)
  }

  const error = checkDeclarationProperty(splitLine, indexLine)
  if (error) {
    return error
  }

  if (isNaN(Number(splitLine[2]))) {
    return errorValueLineToGo(splitLine[2], indexLine)
  }

  if (Number(splitLine[2]) >= codeSize - 1 || Number(splitLine[2]) < 0) {
    return errorValueNotRange(splitLine[2], indexLine)
  }
}

const createTag = (splitLine, indexLine) => {
  return {
    name: splitLine[1],
    indexLine: indexLine,
    lineToGo: Number(splitLine[2]),
    content: splitLine.join(" "),
  }
}

export { declareTags }
