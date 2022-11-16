import { findVariable } from "./execute"
import { outputs } from "../../store/program_store"

const goingOut = (lineCode, appExec) => {
  const out = {
    type: lineCode[0],
    value: "",
  }

  if (lineCode[1] === "acumulador") {
    outputs.update((outputs) => {
      out.value = appExec.acumulator
      outputs.push(out)

      return outputs
    })

    return
  }

  const variable = findVariable(lineCode[1])
  outputs.update((outputs) => {
    out.value = variable.value
    outputs.push(out)

    return outputs
  })
}
