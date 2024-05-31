<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="white">{{ msg }}</h1>
    <h3>
      Keep in touch with your favorite franchises, track their stories and continuities - all in one site.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 750;
  font-size: 3.3rem;
  position: relative;
  top: -9px;
}

h3 {
  font-weight: 1;
  font-size: 2.2rem;
  position: relative;
}

.greetings h1,
.greetings h3 {
  text-align: left;
}

@media (min-width: 1028px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
