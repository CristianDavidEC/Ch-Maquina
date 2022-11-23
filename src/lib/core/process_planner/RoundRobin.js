import {
  allApplications,
  currentApp,
  errorMemory,
  variables,
} from "../../../store/program_store"
import { quantumApp } from "../../../store/manager"
import { execute, updateApp } from "../execute/execute"
import { stateProgram } from "../checks/constants"

let appRunnig
currentApp.subscribe((value) => {
  appRunnig = value
})

let aplicationsStore
allApplications.subscribe((value) => {
  aplicationsStore = value
})

let errorM
errorMemory.subscribe((value) => {
  errorM = value
})

let quantum
quantumApp.subscribe((value) => {
  quantum = value
})

let vars
variables.subscribe((value) => {
  vars = value
})

const RoundRobin = () => {
  let finished = true
  const apps = [...aplicationsStore]

  while (finished) {
    let stateExc = apps.map((app) => {
      return app.state
    })

    if (stateExc.every((state) => state === stateProgram.finished)) {
      finished = false
    }

    if (stateExc.indexOf("wrong") >= 0) {
      finished = false
    }

    apps.forEach((app) => {
      if (errorM) {
        return
      }

      if (app.state === stateProgram.finished) {
        return
      }

      currentApp.setCurrentApp(app)
      execute(quantum)

      app.variables = vars
      app.codeIndexCurrent = appRunnig.codeIndexCurrent
      app.acumulator = appRunnig.acumulator

      if (app.codeIndexCurrent === app.code.length) {
        app.state = stateProgram.finished
        updateApp(app.name, stateProgram.finished)
      }
    })
  }
}

export { RoundRobin }
