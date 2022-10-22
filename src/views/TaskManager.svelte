<script lang="ts">
  import ProgramDescription from "../components/taks_manager/ProgramDescription.svelte";
  import LoadProgram from "../components/taks_manager/LoadProgram.svelte";
  import MemoryManager from "../components/taks_manager/MemoryManager.svelte";
  import Window from "./Screen.svelte";
  import DetailsExecute from "../components/taks_manager/DetailsExecute.svelte";
</script>

<Window class="bg-pink-400/90">
  <div class="grid grid-cols-2">
    <MemoryManager />
    <DetailsExecute />
  </div>
  <LoadProgram />
  <ProgramDescription />
</Window>
