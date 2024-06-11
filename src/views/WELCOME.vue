<script>

</script>

<template>

<div>
    <div class = "header">
  <u>SIGN IN</u><u>CREATE ACCOUNT</u><U>FILMS</U>
    </div>
    <div class="body">
      <h1>
        Your superhero hub.
      </h1>
      <h2>
        Keep in touch with your favorite characters, track their stories and continuity - all in one site.
      </h2>
      <RouterLink to="/register"><button type="reset" class="register-button">JOIN FOR FREE</button></RouterLink>
        </div>
    <div class = "header">
    <a href="more"><u>LEARN MORE</u></a>
    </div>
  </div>

</template>

<style scoped>

.header {

  letter-spacing: 2px;
  margin-top: 70px;
  font-size: 1.2rem;
  margin-left: -5px;

}

h1 {

  margin-top: 100px;
  margin-bottom: 10px;
  letter-spacing: -1px;
  font-size: 4rem;
  font-weight: bolder;

}

h2 {

  letter-spacing: -1px;
  font-size: 3rem;
  font-weight: lighter;
  width: 700px;

}

.register-button {

  margin-top: 15px;
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
  margin-bottom: -50px;
  margin-left: -5px;

}

</style>