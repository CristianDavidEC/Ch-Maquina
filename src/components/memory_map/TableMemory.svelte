<script>
  import Icon from "svelte-icons-pack/Icon.svelte"
  import BsMemory from "svelte-icons-pack/bs/BsMemory"
  import SiCodefactor from "svelte-icons-pack/si/SiCodefactor"
  import VscSymbolVariable from "svelte-icons-pack/vsc/VscSymbolVariable"
  import FiCpu from "svelte-icons-pack/fi/FiCpu"
  import CgHashtag from "svelte-icons-pack/cg/CgHashtag"
  import { programStore } from "../../store/program_store"
</script>

<div>
  <table class="w-full table-auto bor">
    <thead class="border-y-2 bg-blue-800/40">
      <tr>
        <th scope="col" class="px-3 py-2 text-left">
          Type
          <Icon src={CgHashtag} size="20" className="inline-block" />
        </th>
        <th scope="col" class="px-3 py-2 text-left">
          Address
          <Icon src={BsMemory} size="25" className="inline-block" />
        </th>
        <th scope="col" class="px-3 py-2 text-left">
          Content
          <Icon src={SiCodefactor} size="18" className="inline-block" />
        </th>
        <th scope="col" class="px-3 py-2 text-left">
          Value
          <Icon src={VscSymbolVariable} size="25" className="inline-block" />
        </th>
      </tr>
    </thead>
    <tbody>
      {#each $programStore.code as line}
        <tr
          class="border-b-2 transition duration-150 ease-in-out hover:bg-blue-800/20"
        >
          <td class="px-4 py-2">
            <Icon src={FiCpu} size="18" className="inline-block" />
          </td>
          <td class="px-3 py-2"> A00X81 </td>
          <td class="px-3 py-2">{line}</td>
          <td class="px-3 py-2"> Colombia </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
