<script>
  import Icon from "svelte-icons-pack/Icon.svelte"
  import BiPlayCircle from "svelte-icons-pack/bi/BiPlayCircle"
  import RiSystemApps2Line from "svelte-icons-pack/ri/RiSystemApps2Line"
  import AiOutlineCode from "svelte-icons-pack/ai/AiOutlineCode"
  import BsFileEarmarkCode from "svelte-icons-pack/bs/BsFileEarmarkCode"
  import BiBarcodeReader from "svelte-icons-pack/bi/BiBarcodeReader"
  import {
    allApplications,
    currentApp,
    restartValuesArrays,
    errorMemory,
  } from "../../store/program_store"
  import { execute } from "../../lib/core/execute/execute"

  let appNameSelected = ""

  function clickInProgram(app) {
    if ($errorMemory) {
      return
    }
    currentApp.resetCurrentApp()
    restartValuesArrays()

    appNameSelected = app.name
    currentApp.setCurrentApp(app)
    execute()
  }
</script>

<div>
  <table class="w-full table-auto">
    <thead class="border-y-2 bg-rose-600/50">
      <tr>
        <th scope="col" class="px-3 py-2 text-left">
          <Icon src={RiSystemApps2Line} size="25" />
        </th>
        <th scope="col" class="px-3 py-2 text-left">
          <Icon src={BiBarcodeReader} size="25" />
        </th>
        <th scope="col" class="px-3 py-2 text-left">
          <Icon src={AiOutlineCode} size="25" />
        </th>
        <th scope="col" class="px-3 py-2 text-left">
          <Icon src={BsFileEarmarkCode} size="25" />
        </th>
        <th scope="col" class="px-3 py-2 text-left" />
      </tr>
    </thead>
    <tbody>
      {#each $allApplications as app}
        <tr
          class="border-b-2 transition duration-150 ease-in-out 
                {appNameSelected === app.name
            ? 'bg-rose-600/50'
            : 'hover:hover:bg-rose-700/20'}"
        >
          <td class="px-3 py-2"> {app.name} </td>
          <td class="px-3 py-2"> {app.idApp} </td>
          <td class="px-3 py-2"> {app.state} </td>
          <td class="px-3 py-2"> {app.codeSize} </td>
          <button
            class="px-1 py-1 m-1 bg-rose-600/50 rounded-lg hover:hover:bg-rose-600/80 border-2"
            on:click={() => clickInProgram(app)}
          >
            <Icon src={BiPlayCircle} size="25" />
          </button>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
</style>
