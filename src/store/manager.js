import { writable } from "svelte/store"

const processPlanner = writable("FCFS")

const quantumApp = writable(5)

const requiredMemory = writable(0)

const memory = writable(100)

const kernel = writable(10)

const speed = writable(0)

export { memory, kernel, speed, requiredMemory, processPlanner, quantumApp }
