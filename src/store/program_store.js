import { writable } from "svelte/store"

function createProgramStore() {
  const { subscribe, update } = writable({
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
  }
}

export const programStore = createProgramStore()
