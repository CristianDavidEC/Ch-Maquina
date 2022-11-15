<script>
  import FaSolidLaptopCode from "svelte-icons-pack/fa/FaSolidLaptopCode"
  import Icon from "svelte-icons-pack/Icon.svelte"
  import { syntaxCheck } from "../../lib/core/check"
  import { allApplications } from "../../store/program_store"
  import { application, randomAppCode } from "../../store/application"
  import { errorMemory } from "../../store/program_store"
  import { memory, kernel, requiredMemory } from "../../store/manager"

  const allMemory = 1000

  const processFilesSelected = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = (e) => {
      const content = e.target.result
      const splitcontent = content.toString().split("\r\n")
      application.name = file.name
      application.code = splitcontent
      application.codeSize = splitcontent.length
      application.idApp = randomAppCode()
      syntaxCheck(application)
      addApp({ ...application })
      requiredMemory.update((n) => n + splitcontent.length)
      checkMemoryAvailability()
    }
    reader.readAsText(file)

    application.restartApplication()
  }

  const addApp = (newApp) => {
    allApplications.update((apps) => {
      apps.push(newApp)
      return apps
    })
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

<div class="mt-2 border-t-2">
  <label for="formFileMultiple" class="form-label w-full inline-block my-2">
    <Icon src={FaSolidLaptopCode} size="25" className="inline-block" />
    Open your Program
  </label>
  <input
    class="form-control
        mb-4
        block
        w-full
        text-xs
        bg-white
        border-2 border-black
        rounded-lg
        cursor-pointer
        focus:text-gray-900 focus:bg-white focus:border-pink-900 focus:outline-none"
    type="file"
    on:change={processFilesSelected}
  />
</div>

<style>
  input::-webkit-file-upload-button:hover {
    background: rgba(234, 73, 113, 0.6);
    border-color: transparent;
    border-style: solid;
    cursor: pointer;
  }

  input::-webkit-file-upload-button {
    background: rgba(246, 164, 194, 0.78);
    border-color: transparent;
    border-style: solid;
    cursor: pointer;
  }
</style>
