<script>
  import { errors, currentApp, errorMemory } from "../../store/program_store"
</script>

<div class="block border-2 rounded-lg">
  <img class="m-auto my-2" src="escritorio.png" alt="monitor" />
  {#if $errorMemory}
    <p class="bg-red-500 mx-0">{$errorMemory}</p>
  {/if}

  {#each $errors as error}
    <p class="bg-red-500 mx-0">{error}{$currentApp.name}</p>
    <br />
  {/each}
  <p class="m-4" />
</div>

<style>
  img {
    width: 130px;
  }
</style>
