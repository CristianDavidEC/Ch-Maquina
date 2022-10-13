<script lang="ts">
  import Taskbar from "./views/Taskbar.svelte";
  import TaskManager from "./views/TaskManager.svelte";
  import Display from "./views/Display.svelte";
  import MemoryMap from "./views/MemoryMap.svelte";
  import ProgramInfo from "./views/ProgramInfo.svelte";
</script>

<div class="grid grid-cols-2 h-full">
  <TaskManager />
  <Display />
  <MemoryMap />
  <ProgramInfo />
</div>
