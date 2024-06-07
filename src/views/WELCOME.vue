<script setup>

import slider from "../components/JSslider.vue"

</script>

<template>

<div>
    <div>
      <u>SIGN IN</u> <u>CREATE ACCOUNT</u> <U>FILMS</U>
    </div>
    <div class="body">
      <h1>
        Your superhero hub.
      </h1>
      <h2>
        Keep in touch with your favorite characters, track their stories and continuity - all in one site.
      </h2>
      <RouterLink to="/login"><button type="reset" class="register-button">JOIN FOR FREE</button></RouterLink>
        </div>
    <div>
      <a href="more"><u>LEARN MORE</u></a>
    </div>
  <div class="hidden">
    ;-(
  </div>
  </div>
  <div>
    :-)
  </div>

</template>

<style scoped>

h1 {
  margin-top: 100px;
  margin-bottom: 10px;
  font-size: 3rem;
  font-weight: bolder;
}

h2 {

  font-size: 2rem;
  font-weight: lighter;
  width: 500px;

}

.register-button {
  background-color: #FF914D;
  border: 1px;
  border-radius: 50px;
  color: #000000;
  cursor: pointer;
  font-size:1.2rem;
  font-weight: lighter;
  width: 200px;
  height: 60px;
  margin-bottom: -50px;
}

</style>