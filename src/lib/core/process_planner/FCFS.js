import {
  allApplications,
  currentApp,
  restartValuesArrays,
  errorMemory,
} from "../../../store/program_store"
import { execute, updateApp } from "../execute/execute"
import { stateProgram } from "../checks/constants"

let aplicationsStore
allApplications.subscribe((value) => {
  aplicationsStore = value
})

let errorM
errorMemory.subscribe((value) => {
  errorM = value
})

const FCFS = () => {
  aplicationsStore.forEach((app) => {
    if (errorM) {
      return
    }
    currentApp.resetCurrentApp()
    restartValuesArrays()

    currentApp.setCurrentApp(app)
    execute(0)
  })
}

export { FCFS }
