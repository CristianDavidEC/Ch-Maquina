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

const SJFNoExpropiative = () => {
  if (errorM) {
    return
  }

  const apps = [...aplicationsStore]

  apps.sort(function (a, b) {
    if (a.code.length > b.code.length) {
      return 1
    }
    if (a.code.length < b.code.length) {
      return -1
    }
    return 0
  })

  apps.forEach((app) => {
    if (errorM) {
      return
    }
    currentApp.resetCurrentApp()
    restartValuesArrays()

    currentApp.setCurrentApp(app)
    execute(0)
  })
}

export { SJFNoExpropiative }
