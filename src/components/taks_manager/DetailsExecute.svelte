<script>
  import Icon from "svelte-icons-pack/Icon.svelte"
  import CgMenuMotion from "svelte-icons-pack/cg/CgMenuMotion"
  import RiLogoCodepenLine from "svelte-icons-pack/ri/RiLogoCodepenLine"
  import RiSystemApps2Line from "svelte-icons-pack/ri/RiSystemApps2Line"
  import ProcessPlanner from "./ProcessPlanner.svelte"
  import { currentApp } from "../../store/program_store"
</script>

<div class="px-3 p-10 border-2 rounded-lg mx-4">
  <h1>
    <Icon src={RiLogoCodepenLine} size="25" className="inline-block m-1" />
    Accumulator: {$currentApp.name ? $currentApp.acumulator : "N/A"}
  </h1>

  <h1>
    <Icon src={CgMenuMotion} size="25" className="inline-block m-1" />
    Instruction: {$currentApp.name ? $currentApp.codeIndexCurrent + 1 : "N/A"}
  </h1>

  <h1>
    <Icon src={RiSystemApps2Line} size="25" className="inline-block m-1" />
    App execution: {$currentApp.name ? $currentApp.name : "N/A"}
  </h1>

  <ProcessPlanner />
</div>
