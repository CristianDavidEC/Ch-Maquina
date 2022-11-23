<script>
  import { processPlanner } from "../store/manager"
  import { executables } from "../lib/core/process_planner/planner"
  import Icon from "svelte-icons-pack/Icon.svelte"
  import CgPlayButtonO from "svelte-icons-pack/cg/CgPlayButtonO"
  import CgPlayTrackNextO from "svelte-icons-pack/cg/CgPlayTrackNextO"
  import CgPlayTrackPrevO from "svelte-icons-pack/cg/CgPlayTrackPrevO"
  import CgPlayStopO from "svelte-icons-pack/cg/CgPlayStopO"

  function clickExecute() {
    executables[$processPlanner]()
  }
</script>

<div
  class="absolute top-[248px] right-1  items-center justify-center rounded-xl text-white border-2  bg-cyan-900/80"
>
  <button
    class="my-2 hover:bg-cyan-500/80 p-1 rounded-lg block"
    on:click={() => clickExecute()}
  >
    <Icon src={CgPlayButtonO} size="30" />
  </button>

  <button class="my-2 hover:bg-cyan-500/80 p-1 rounded-lg block">
    <Icon src={CgPlayTrackPrevO} size="30" className="" />
  </button>

  <button class="my-2 hover:bg-cyan-500/80 p-1 rounded-lg block">
    <Icon src={CgPlayStopO} size="30" />
  </button>

  <button class="my-2 hover:bg-cyan-500/80 p-1 rounded-lg block">
    <Icon src={CgPlayTrackNextO} size="30" />
  </button>
</div>
