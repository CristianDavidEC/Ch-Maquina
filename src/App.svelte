<script>
  import Taskbar from "./views/Taskbar.svelte"
  import TaskManager from "./views/TaskManager.svelte"
  import Display from "./views/Outputs.svelte"
  import MemoryMap from "./views/MemoryMap.svelte"
  import ProgramInfo from "./views/ProgramInfo.svelte"
</script>

<div class="grid grid-cols-2 gap-2 h-full font-semibold">
  <TaskManager />
  <MemoryMap />
  <ProgramInfo />
  <Display />
  <Taskbar />
</div>
