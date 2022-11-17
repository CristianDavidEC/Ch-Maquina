import {
  errorInvalidLine,
  checkDeclarationProperty,
} from "../errors/errors_check"
import { errorValueLineToGo, errorValueNotRange } from "../errors/errors_check"

const declareTags = (splitLine, indexLine, application) => {
  if (splitLine[0] !== "etiqueta") {
    return
  }

  const error = checkTagSyntax(splitLine, indexLine, application)
  if (error) {
    application.errors.push(error)
    return
  }

  const newTag = createTag(splitLine, indexLine)
  application.tags.push(newTag)
}

const checkTagSyntax = (splitLine, indexLine, application) => {
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

  if (Number(splitLine[2]) > application.codeSize || Number(splitLine[2]) < 0) {
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
