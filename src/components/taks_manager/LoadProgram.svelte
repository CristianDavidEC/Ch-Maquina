<script>
  import FaSolidLaptopCode from "svelte-icons-pack/fa/FaSolidLaptopCode"
  import Icon from "svelte-icons-pack/Icon.svelte"
  import { syntaxCheck } from "../../lib/core/check"
  import { allApplications } from "../../store/program_store"
  import { application } from "../../store/application"

  const processFilesSelected = (event) => {
    const filesEvent = event.target.files

    for (const file of filesEvent) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const content = e.target.result
        const splitcontent = content.toString().split("\r\n")
        application.name = file.name
        application.code = splitcontent
        application.codeSize = splitcontent.length
        syntaxCheck(application)
        addApp({ ...application })
      }
      reader.readAsText(file)
    }
    application.restartApplication()
    console.log($allApplications)
  }

  const addApp = (newApp) => {
    allApplications.update((apps) => {
      apps.push(newApp)
      return apps
    })
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
    id="formFileMultiple"
    multiple
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
