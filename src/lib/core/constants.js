const validInstructions = {
  cargue: true,
  almacene: true,
  nueva: true,
  etiqueta: true,
  lea: true,
  sume: true,
  reste: true,
  multiplique: true,
  divida: true,
  potencia: true,
  modulo: true,
  concatene: true,
  elimine: true,
  extraiga: true,
  Y: true,
  O: true,
  NO: true,
  menor: true,
  mayor: true,
  igual: true,
  muestre: true,
  imprima: true,
  vaya: true,
  vayasi: true,
}

const validString = {
  cargue: "cargue",
  almacene: "almacene",
  nueva: "nueva",
  etiqueta: "etiqueta",
  lea: "lea",
  sume: "sume",
  reste: "reste",
  multiplique: "multiplique",
  divida: "divida",
  potencia: "potencia",
  modulo: "modulo",
  concatene: "concatene",
  elimine: "elimine",
  extraiga: "extraiga",
  Y: "Y",
  O: "O",
  NO: "NO",
  menor: "menor",
  mayor: "mayor",
  igual: "igual",
  muestre: "muestre",
  imprima: "imprima",
  vaya: "vaya",
  vayasi: "vayasi",
}

const validTypeVariables = {
  I: true,
  R: true,
  C: true,
  L: true,
}

const propertyProgram = {
  name: "name",
  state: "state",
  codeSize: "codeSize",
  acumulator: "acumulator",
  codeIndexCurrent: "codeIndexCurrent",
  variables: "variables",
  tags: "tags",
  code: "code",
  errors: "errors",
}

const statusProgram = {
  ready: "ready",
  running: "running",
  stopped: "stopped",
  finished: "finished",
  loading: "loading",
  wrong: "wrong",
}

export {
  validInstructions,
  validString,
  propertyProgram,
  validTypeVariables,
  statusProgram,
}
