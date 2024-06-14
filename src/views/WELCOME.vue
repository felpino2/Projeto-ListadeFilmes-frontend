<script>

import JSslider from "../components/JSslider.vue"

export default {

  components: {
    JSslider
  }

}


</script>

<template>

<div>
    <div class = "header">
      <u><RouterLink to="/login">SIGN IN</RouterLink><RouterLink to="/register">CREATE ACCOUNT</RouterLink></u>
    </div>
    <div class="body">
      <h1>
        Your superhero hub.
      </h1>
      <h2>
        Keep in touch with your favorite characters, track their stories and continuity - all in one site.
        <RouterLink to="/register"><button type="reset" class="register-button">JOIN FOR FREE</button></RouterLink>
      </h2>
      <div class = "footer">
        <a href="more"><u>LEARN MORE</u></a>
      </div>
    </div>
  <div>
    <h3>
      What's new today?
    </h3>
    <h2>
      Tired of trying to figure out the continuity of the latest releases?
      Heroflix has the perfect fix for you.
    </h2>
    <p>
      All of your favorites - and more!
    </p>
  </div>
  </div>

  <div class="header">

    <JSslider  :teste="'linha'"/>

  </div>
</template>

<style scoped>

a {

  text-decoration: none;
  color: #ffffff;

}

.header {

  letter-spacing: 2px;
  margin-top: 80px;
  font-size: 1.2rem;
  margin-left: -50px;
  width: 800px;

}

h1 {

  margin-top: 100px;
  margin-bottom: 10px;
  letter-spacing: -1px;
  font-size: 4rem;
  font-weight: bolder;
  width: 800px;

}

h2 {

  margin-top: 20px;
  letter-spacing: -1px;
  font-size: 3rem;
  font-weight: lighter;
  width: 800px;

}

h3 {

  margin-bottom: 10px;
  letter-spacing: -1px;
  font-size: 4rem;
  font-weight: bolder;

}

.register-button {

  margin-top: 70px;
  background-color: #FF914D;
  border: 1px;
  border-radius: 50px;
  color: #000000;
  cursor: pointer;
  letter-spacing: 3px;
  font-size:1.3rem;
  font-weight: lighter;
  width: 290px;
  height: 80px;
  margin-bottom: -100px;
  margin-left: -50px;

}

.footer {

  margin-top: 120px;
  letter-spacing: 2px;
  font-size: 1.2rem;
  margin-left: -5px;

}

p {

  letter-spacing: -1px;
  font-size: 2rem;
  font-weight: lighter;
  width: 700px;

}

.slider {



}

</style>