<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import CgPlayButtonO from "svelte-icons-pack/cg/CgPlayButtonO";
  import CgPlayTrackNextO from "svelte-icons-pack/cg/CgPlayTrackNextO";
  import CgPlayTrackPrevO from "svelte-icons-pack/cg/CgPlayTrackPrevO";
  import CgPlayStopO from "svelte-icons-pack/cg/CgPlayStopO";
</script>

<div class="flex justify-center p-2 bg-cyan-500/40">
  <Icon src={CgPlayButtonO} size="32" />
  <Icon src={CgPlayTrackPrevO} size="32" />
  <Icon src={CgPlayStopO} size="32" />
  <Icon src={CgPlayTrackNextO} size="32" />
</div>
