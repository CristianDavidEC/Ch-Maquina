<script lang="ts">
    import Icon from "svelte-icons-pack/Icon.svelte";
    import BsMemory from "svelte-icons-pack/bs/BsMemory";
    import BsCpu from "svelte-icons-pack/bs/BsCpu";
    import BiPulse from "svelte-icons-pack/bi/BiPulse";
</script>

<div class="mx-3">
    <label for="memory">
        <Icon src={BsMemory} size="25" className="inline-block" />
        Memory: 50%
    </label>
    <input
        type="range"
        id="memory"
        max="100"
        min="0"
        step="10"
        class="block w-full mb-2 mt-1"
    />

    <label for="kernel">
        <Icon src={BsCpu} size="25" className="inline-block" />
        Kernel: 50%
    </label>
    <input
        type="range"
        id="kernel"
        max="100"
        min="0"
        step="5"
        class="block w-full mb-2 mt-1"
    />

    <label for="speed">
        <Icon src={BiPulse} size="25" className="inline-block" />
        Speed: 50%
    </label>
    <input
        type="range"
        id="speed"
        max="100"
        min="0"
        step="5"
        class="block w-full mb-2 mt-1"
    />
</div>

<style>
    input[type="range"] {
        overflow: hidden;
        -webkit-appearance: none;
        background-color: aliceblue;
        border-radius: 10px;
        border: 2px solid rgb(0, 0, 0);
        outline: none;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        height: 12px;
        -webkit-appearance: none;
        border-radius: 10px;
        color: #0c1d22;
    }

    input[type="range"]::-webkit-slider-thumb {
        width: 10px;
        -webkit-appearance: none;
        height: 12px;
        border-radius: 2px;
        cursor: ew-resize;
        background: rgba(112, 22, 45, 0.85);
        box-shadow: -200px 0 0 200px rgb(217, 95, 125);
    }
</style>
