import { writable } from "svelte/store"

function createApplicationStore() {
  const { subscribe, update, set } = writable({
    name: "",
    state: "",
    codeSize: 0,
    acumulator: 0,
    codeIndexCurrent: 0,
    variables: [],
    tags: [],
    code: [],
    errors: [],
  })

  return {
    subscribe,

    assignPropsValue: (prop, value) =>
      update((program) => {
        program[prop] = value
        return program
      }),

    addElementToListProperty: (prop, newElement) =>
      update((program) => {
        program[prop].push(newElement)
        return program
      }),

    restartApplication: () =>
      set({
        name: "",
        code: [],
        variables: [],
        tags: [],
        errors: [],
        state: "",
        codeSize: 0,
        codeIndexCurrent: 0,
        acumulator: 0,
      }),
  }
}

export const variables = writable([])
export const tags = writable([])
export const allApplications = writable([])

export const application = createApplicationStore()
