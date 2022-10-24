import { writable } from "svelte/store"

function createProgramStore() {
  const { subscribe, update } = writable(objectProgram)

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

const objectProgram = {
  name: "",
  state: "",
  codeSize: 0,
  acumulator: 0,
  codeIndex: 0,
  variables: [],
  tags: [],
  code: [],
}

export const program = createProgramStore()
