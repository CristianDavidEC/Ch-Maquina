<script>
  import { outputs } from "../../store/program_store"
</script>

<div class="block border-2 rounded-lg h-full overflow-hidden">
  <img class="m-auto my-2" src="impresora.png" alt="monitor" />
  {#each $outputs as out}
    {#if out.type === "imprima"}
      <p class="mx-2">{out.value}</p>
    {/if}
  {/each}
</div>

<style>
  img {
    width: 130px;
  }
</style>
