<script>
  import { processPlanner } from "../../store/manager"

  let process = [
    {
      func: "FCFS",
      name: "First Come First Serve",
    },
    {
      func: "SJFExpropiative",
      name: "Shortest Job First Expropriative",
    },
    {
      func: "SJFNoExpropiative",
      name: "Shortest Job First No Expropriative",
    },
    {
      func: "RoundRobin",
      name: "Round Robin",
    },
  ]

  let selected = process[0].func
</script>

<div class="mt-2">
  <select
    class="w-full  rounded-md outline-none"
    bind:value={selected}
    on:change={() => processPlanner.set(selected)}
  >
    {#each process as p}
      <option value={p.func}>
        {p.name}
      </option>
    {/each}
  </select>
</div>
