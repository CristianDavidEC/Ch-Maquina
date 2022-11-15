import { writable } from "svelte/store"

const app = {
  name: "",
  idApp: "",
  state: "",
  acumulator: 0,
  codeIndexCurrent: 0,
  code: [],
}

function createCurrentApp() {
  const { subscribe, set, update } = writable(app)

  return {
    subscribe,
    updateProperty: (prop, value) => update((app) => (app[prop] = value)),
    setCurrentApp: (newApp) =>
      update((app) => {
        app.name = newApp.name
        app.idApp = newApp.idApp
        app.state = newApp.state
        app.acumulator = newApp.acumulator
        app.codeIndexCurrent = newApp.codeIndexCurrent
        app.code = newApp.code

        setValuesArrays(newApp)
        return app
      }),
  }
}

const variables = writable([])

const tags = writable([])

const errors = writable([])

const outputs = writable([])

const errorMemory = writable("")

const setValuesArrays = (newApp) => {
  variables.set(newApp.variables)
  tags.set(newApp.tags)
  errors.set(newApp.errors)
}

const restartValuesArrays = () => {
  variables.set([])
  tags.set([])
  errors.set([])
}

const allApplications = writable([])

const currentApp = createCurrentApp()

export {
  allApplications,
  currentApp,
  variables,
  tags,
  errors,
  errorMemory,
  outputs,
  restartValuesArrays,
}
