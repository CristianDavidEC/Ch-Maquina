<script>
  import Icon from "svelte-icons-pack/Icon.svelte"
  import BiPlayCircle from "svelte-icons-pack/bi/BiPlayCircle"
  import RiSystemApps2Line from "svelte-icons-pack/ri/RiSystemApps2Line"
  import AiOutlineCode from "svelte-icons-pack/ai/AiOutlineCode"
  import BsFileEarmarkCode from "svelte-icons-pack/bs/BsFileEarmarkCode"
  import { allApplications } from "../../store/program_store"

  let appNameSelected = ""

  function handleClick(app) {
    appNameSelected = app.name
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
            : 'hover:hover:bg-rose-600/20'}"
          on:click={() => handleClick(app)}
        >
          <td class="px-3 py-2"> {app.name} </td>
          <td class="px-3 py-2"> {app.state} </td>
          <td class="px-3 py-2"> {app.codeSize} </td>
          <td class="px-3 py-2">
            <Icon src={BiPlayCircle} size="25" />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
</style>
