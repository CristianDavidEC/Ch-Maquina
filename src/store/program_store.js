import { writable } from "svelte/store"

function createProgramStore() {
  const { subscribe, update, set } = writable(objetProgram)

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

    restartProgram: () => set(objetProgram),
  }
}

const objetProgram = {
  name: "",
  state: "",
  codeSize: 0,
  acumulator: 0,
  codeIndexCurrent: 0,
  variables: [],
  tags: [],
  code: [],
  errors: [],
}

export const variables = writable([])
export const tags = writable([])
export const programsLoaded = writable([])
export const programStore = createProgramStore()
