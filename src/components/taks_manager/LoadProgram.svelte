<script>
    import FaSolidLaptopCode from "svelte-icons-pack/fa/FaSolidLaptopCode";
    import Icon from "svelte-icons-pack/Icon.svelte";

    let files;

    $: if (files) {
        for (const file of files) {
            console.log(file);
        }
    }

    const onFileSelected = (event) => {
        let filesEvent = event.target.files;
        for (const file of filesEvent) {
            let archivo = file;
            let reader = new FileReader();
            reader.onload = (e) => {
                let content = e.target.result;
                console.log(content);
            };
            reader.readAsText(archivo);
        }
    };
</script>

<div class="mt-2 border-t-2">
    <label for="formFileMultiple" class="form-label w-full inline-block my-2">
        <Icon src={FaSolidLaptopCode} size="25" className="inline-block" />
        Open your Program
    </label>
    <input
        class="form-control
        mb-4
        block
        w-full
        text-xs
        bg-white
        border-2 border-black
        rounded-lg
        cursor-pointer
        focus:text-gray-900 focus:bg-white focus:border-pink-900 focus:outline-none"
        type="file"
        id="formFileMultiple"
        multiple
        on:change={onFileSelected}
    />
</div>

<style>
    input::-webkit-file-upload-button:hover {
        background: rgba(234, 73, 113, 0.6);
        border-color: transparent;
        border-style: solid;
        cursor: pointer;
    }

    input::-webkit-file-upload-button {
        background: rgba(246, 164, 194, 0.78);
        border-color: transparent;
        border-style: solid;
        cursor: pointer;
    }
</style>
