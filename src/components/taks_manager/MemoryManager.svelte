<script>
  import Icon from "svelte-icons-pack/Icon.svelte"
  import BsMemory from "svelte-icons-pack/bs/BsMemory"
  import BsCpu from "svelte-icons-pack/bs/BsCpu"
  import BiPulse from "svelte-icons-pack/bi/BiPulse"
  import { memory, kernel, speed, requiredMemory } from "../../store/manager"
  import { errorMemory } from "../../store/program_store"

  let memoryMannage = 100
  let kernelMannage = 10
  let speedMannage = 0

  const allMemory = 1000

  const onChangeMemory = () => {
    memory.set(memoryMannage)
    kernel.set(kernelMannage)

    checkMemoryAvailability()
  }

  const checkMemoryAvailability = () => {
    let memoryFilled = $requiredMemory + $kernel
    let memoryAvailable = (allMemory * $memory) / 100
    console.log(memoryAvailable)

    if (memoryFilled > memoryAvailable) {
      const newError = `The amount of available memory is insufficient. Memory required:${memoryFilled} | Memory available:${memoryAvailable}`
      errorMemory.set(newError)

      return
    }

    errorMemory.set("")
  }
</script>

<div class="mx-3">
  <label for="memory">
    <Icon src={BsMemory} size="25" className="inline-block" />
    Memory: {memoryMannage}%
  </label>
  <input
    type="range"
    id="memory"
    max="100"
    min="0"
    step="10"
    class="block w-full mb-2 mt-1"
    bind:value={memoryMannage}
    on:change={onChangeMemory}
  />

  <label for="kernel">
    <Icon src={BsCpu} size="25" className="inline-block" />
    Kernel: {kernelMannage}
  </label>
  <input
    type="range"
    id="kernel"
    max="100"
    min="0"
    step="5"
    class="block w-full mb-2 mt-1"
    bind:value={kernelMannage}
    on:change={onChangeMemory}
  />

  <label for="speed">
    <Icon src={BiPulse} size="25" className="inline-block" />
    Speed: {speedMannage === 0 ? "Real Time" : speedMannage + " seg"}
  </label>
  <input
    type="range"
    id="speed"
    max="2.5"
    min="0"
    step="0.5"
    class="block w-full mb-2 mt-1"
    bind:value={speedMannage}
    on:change={() => speed.set(speedMannage)}
  />
</div>

<style>
  input[type="range"] {
    overflow: hidden;
    -webkit-appearance: none;
    background-color: aliceblue;
    border-radius: 10px;
    border: 2px solid rgb(0, 0, 0);
    outline: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    height: 12px;
    -webkit-appearance: none;
    border-radius: 10px;
    color: #0c1d22;
  }

  input[type="range"]::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    height: 12px;
    border-radius: 2px;
    cursor: ew-resize;
    background: rgba(112, 22, 45, 0.85);
    box-shadow: -200px 0 0 200px rgb(217, 95, 125);
  }
</style>
