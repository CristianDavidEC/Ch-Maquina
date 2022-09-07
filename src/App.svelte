<script lang="ts">
  import Taskbar from "./components/Taskbar.svelte";
  import TaskManager from "./components/TaskManager.svelte";
  import Display from "./components/Display.svelte";
  import MemoryMap from "./components/MemoryMap.svelte";
  import ProgramInfo from "./components/ProgramInfo.svelte";
</script>

<div class="h-full">
  <div class="grid grid-cols-2 gap-1 h-full">
    <TaskManager />
    <Display />
    <MemoryMap />
    <ProgramInfo />
  </div>
  <Taskbar />
</div>
