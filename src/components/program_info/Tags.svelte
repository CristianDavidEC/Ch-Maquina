<script>
  import Icon from "svelte-icons-pack/Icon.svelte"
  import BsMemory from "svelte-icons-pack/bs/BsMemory"
  import AiOutlineTag from "svelte-icons-pack/ai/AiOutlineTag"
  import { currentApp, tags } from "../../store/program_store"
</script>

<div>
  <table class="w-full table-auto">
    <thead class="border-y-2 bg-amber-600/50 border-amber-800">
      <tr>
        <th scope="col" class="px-3 py-2 text-left">
          <Icon src={BsMemory} size="25" className="inline-block" />
        </th>
        <th scope="col" class="px-3 py-2 text-left">
          <Icon src={AiOutlineTag} size="25" className="inline-block" />
        </th>
      </tr>
    </thead>
    <tbody>
      {#each $tags as tag}
        <tr
          class="border-b-2 border-amber-800/80 transition duration-150 ease-in-out hover:hover:bg-amber-600/20"
        >
          <td class="px-3 py-2"> {$currentApp.idApp}X{tag.indexLine} </td>
          <td class="px-3 py-2"> {tag.content} </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
