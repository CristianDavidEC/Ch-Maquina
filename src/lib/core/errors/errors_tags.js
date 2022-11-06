const errorValueLineToGo = (instruction, indexCode) => {
  return `Error: ${instruction} the value of the labels must be numeric | ${indexCode}:`
}

const errorValueNotRange = (instruction, indexCode) => {
  return `Error: ${instruction} the value is out of range of code lines | ${indexCode}:`
}

export { errorValueLineToGo, errorValueNotRange }
