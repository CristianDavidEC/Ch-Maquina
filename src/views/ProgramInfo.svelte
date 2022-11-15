<script>
  import Window from "./Screen.svelte"
  import Variables from "../components/program_info/Variables.svelte"
  import ProgramCode from "../components/program_info/ProgramCode.svelte"
  import Tags from "../components/program_info/Tags.svelte"
  import Icon from "svelte-icons-pack/Icon.svelte"
  import VscFileCode from "svelte-icons-pack/vsc/VscFileCode"
  import AiOutlineTags from "svelte-icons-pack/ai/AiOutlineTags"
  import BsBoxes from "svelte-icons-pack/bs/BsBoxes"

  let items = ["Program Code", "Variables", "Tags"]
  let icons = [VscFileCode, BsBoxes, AiOutlineTags]
  let activeItem = items[0]
</script>

<Window class="bg-amber-300/90">
  <div>
    <lu class="flex justify-start list-none">
      {#each items as item, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li
          class:active={item === activeItem}
          class="py-1 px-5 cursor-pointer rounded-t-lg hover:bg-amber-700/25ñ border-b-2 border-amber-700/40"
          on:click={() => (activeItem = item)}
        >
          {item}
          <Icon src={icons[i]} size="20" className="inline-block" />
        </li>
      {/each}
    </lu>
  </div>

  <div class="mt-2">
    {#if activeItem === "Program Code"}
      <ProgramCode />
    {:else if activeItem === "Variables"}
      <Variables />
    {:else if activeItem === "Tags"}
      <Tags />
    {/if}
  </div>
</Window>

<style>
  .active {
    background-color: rgb(217 119 6 / 0.5);
    border-bottom: 3px solid rgb(146 64 14);
  }
</style>
