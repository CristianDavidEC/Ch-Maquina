import { writable } from "svelte/store"

const processPlanner = writable("FCFS")

const requiredMemory = writable(0)

const memory = writable(100)

const kernel = writable(10)

const speed = writable(0)

export { memory, kernel, speed, requiredMemory, processPlanner }
