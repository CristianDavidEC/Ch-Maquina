<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import CgPlayButtonO from "svelte-icons-pack/cg/CgPlayButtonO";
  import CgPlayTrackNextO from "svelte-icons-pack/cg/CgPlayTrackNextO";
  import CgPlayTrackPrevO from "svelte-icons-pack/cg/CgPlayTrackPrevO";
  import CgPlayStopO from "svelte-icons-pack/cg/CgPlayStopO";
</script>

<div
  class="absolute top-[248px] right-1  items-center justify-center rounded-xl p-1 text-white border-2  bg-cyan-900/80"
>
  <Icon
    src={CgPlayButtonO}
    size="33"
    className="my-2 hover:bg-cyan-500/80 p-1 rounded-lg"
  />
  <Icon
    src={CgPlayTrackPrevO}
    size="33"
    className="my-2 hover:bg-cyan-500/80 p-1 rounded-lg"
  />
  <Icon
    src={CgPlayStopO}
    size="33"
    className="my-2 hover:bg-cyan-500/80 p-1 rounded-lg"
  />
  <Icon
    src={CgPlayTrackNextO}
    size="33"
    className="my-2 hover:bg-cyan-500/80 p-1 rounded-lg"
  />
</div>
