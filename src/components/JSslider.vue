<!-- COMPONENTES BÁSICOS QUE PODERÃO SER UTILIZADOS COMO OBJETOS, CASO O MESMO COMPONENTE SE REPITA EM DIVERSAS PÁGINAS. -->

<style>

</style>

<script>

export default {

  props: {

    teste: String

  }

}

</script>

<template>

<div>

  <p>
    {{teste}}
  </p>

</div>

</template>