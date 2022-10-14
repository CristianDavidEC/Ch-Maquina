<script>
  import Window from "./Screen.svelte";
</script>

<Window class="bg-pink-400/90">
  <div class="m-1">
    <label for="memory">Memory</label>
    <input
      type="range"
      id="memory"
      name="Name"
      max="100"
      min="0"
      step="5"
      class="block"
    />

    <label for="kernel">Kernel</label>
    <input
      type="range"
      id="kernel"
      name="Name"
      max="100"
      min="0"
      step="5"
      class="block"
    />
    <h3>Processes</h3>
  </div>
</Window>
