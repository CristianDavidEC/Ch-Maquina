<script>
  import {
    errors,
    currentApp,
    errorMemory,
    outputs,
  } from "../../store/program_store"
</script>

<div class="block border-2 rounded-lg">
  <img class="m-auto my-2" src="escritorio.png" alt="monitor" />
  {#if $errorMemory}
    <p class="bg-red-500 mx-2 rounded-md">{$errorMemory}</p>
  {/if}

  {#each $errors as error}
    <p class="bg-red-500 mx-2 rounded-md">{error}{$currentApp.name}</p>
    <br />
  {/each}

  {#each $outputs as out}
    {#if out.type === "muestre"}
      <p class="mx-2">{out.value}</p>
    {/if}
  {/each}
</div>

<style>
  img {
    width: 130px;
  }
</style>
