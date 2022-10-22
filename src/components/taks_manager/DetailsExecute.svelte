<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import BiTimer from "svelte-icons-pack/bi/BiTimer";
    import CgMenuMotion from "svelte-icons-pack/cg/CgMenuMotion";
    import RiLogoCodepenLine from "svelte-icons-pack/ri/RiLogoCodepenLine";
</script>

<div class="px-3 p-10 border-2 rounded-lg mx-4">
    <h1>
        <Icon src={RiLogoCodepenLine} size="25" className="inline-block m-1" />
        Accumulator: 50
    </h1>
    <h1>
        <Icon src={CgMenuMotion} size="25" className="inline-block m-1" />
        Instruction: 50
    </h1>
    <h1>
        <Icon src={BiTimer} size="25" className="inline-block m-1" />
        Time Execution: 50
    </h1>
</div>
