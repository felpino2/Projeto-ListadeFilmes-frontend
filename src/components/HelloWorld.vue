<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h4>
    <u>Learn more</u>
  </h4>
  <div class="greetings">
    <h2 class="white">{{ msg }}</h2>
    <h3>
      Keep in touch with your favorite franchises, track their stories and continuities - all in one site.
    </h3>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 700;
  font-size: 4rem;
  position: relative;
  top: 30px;
}

h3 {
  font-weight: lighter;
  font-size: 3rem;
  position: relative;
}

h4 {
  min-width: 15%;
  max-width: 25%;
  position: absolute;
  bottom: 10px;
  left: 190px;
  font-weight: lighter;
  font-size: 2rem;
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
