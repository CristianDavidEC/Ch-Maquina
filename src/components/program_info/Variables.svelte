<script>
  import Icon from "svelte-icons-pack/Icon.svelte"
  import BsMemory from "svelte-icons-pack/bs/BsMemory"
  import SiCodefactor from "svelte-icons-pack/si/SiCodefactor"
  import VscSymbolVariable from "svelte-icons-pack/vsc/VscSymbolVariable"
</script>

<div>
  <table class="w-full table-auto">
    <thead class="border-y-2 bg-amber-600/50 border-amber-800">
      <tr>
        <th scope="col" class="px-3 py-2 text-left">
          <Icon src={BsMemory} size="25" className="inline-block" />
        </th>
        <th scope="col" class="px-3 py-2 text-left">
          <Icon src={SiCodefactor} size="18" className="inline-block" />
        </th>
        <th scope="col" class="px-3 py-2 text-left">
          <Icon src={VscSymbolVariable} size="25" className="inline-block" />
        </th>
      </tr>
    </thead>
    <tbody>
      {#each Array(10) as variable}
        <tr
          class="border-b-2 border-amber-800 transition duration-150 ease-in-out hover:hover:bg-amber-600/20"
        >
          <td class="px-3 py-2"> A00X{variable} </td>
          <td class="px-3 py-2"> {variable} </td>
          <td class="px-3 py-2"> {variable} </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
