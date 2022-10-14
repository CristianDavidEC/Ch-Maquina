<script>
    import Printer from "../components/outputs/Printer.svelte";
    import Monitor from "../components/outputs/Monitor.svelte";
    import Window from "./Screen.svelte";
</script>

<Window class="bg-emerald-400/90">
    <div class="grid grid-cols-2 gap-6">
        <Monitor />
        <Printer />
    </div>
</Window>
