<script>
  import { createEventDispatcher } from "svelte"
  import Icon from "svelte-icons-pack/Icon.svelte"
  import BiPlayCircle from "svelte-icons-pack/bi/BiPlayCircle"
  export let applitacion
  export let nameApp
  let selected = false
  const dispatch = createEventDispatcher()

  function handleClick(app) {
    selected = true

    validateAppSelected()
    dispatch("appSelected", {
      app: applitacion.name,
    })
  }

  const validateAppSelected = () => {
    if (nameApp === applitacion.name) {
      selected = true

      return
    }

    selected = false
  }
</script>

<tr
  class="border-b-2 transition duration-150 ease-in-out hover:hover:bg-rose-600/20 
  {selected ? 'bg-rose-600/50' : ''}"
  on:click={() => handleClick(applitacion)}
>
  <td class="px-3 py-2"> {applitacion.name} </td>
  <td class="px-3 py-2"> {applitacion.state} </td>
  <td class="px-3 py-2"> {applitacion.codeSize} </td>
  <td class="px-3 py-2">
    <Icon src={BiPlayCircle} size="25" />
  </td>
</tr>
