const findVariable = (nameVariable) => {
  return application.variables.find(
    (variable) => variable.name === nameVariable
  )
}

const findTag = (nameTag) => {
  return application.tags.find((tag) => tag.name === nameTag)
}

const restartApplication = () => {
  application.name = ""
  application.code = []
  application.idAp = ""
  application.variables = []
  application.tags = []
  application.errors = []
  application.state = ""
  application.codeSize = 0
  application.codeIndexCurrent = 0
  application.acumulator = 0
}

const application = {
  name: "",
  idAp: "",
  state: "",
  codeSize: 0,
  acumulator: 0,
  codeIndexCurrent: 0,
  variables: [],
  tags: [],
  code: [],
  errors: [],
  findVariable,
  findTag,
  restartApplication,
}
export { application }
