import {
  allApplications,
  currentApp,
  restartValuesArrays,
  errorMemory,
} from "../../../store/program_store"
import { execute } from "../execute/execute"

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
    execute()
  })
}

export { FCFS }
