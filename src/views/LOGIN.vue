<template>

  <div class = "form">
    <div class = "account-form">
      <h1>
        <RouterLink to="/"><img src="../assets/images/logo1.png" class = "logo" alt = "heroflix"/></RouterLink>
      </h1>
      <h1>
        Login
      </h1>
      <p>
        We are glad to have you as a part of our dedicated community.
      </p>
      <label>Username</label>
      <input type="text" id="username">
      <label>Password</label>
      <input type="password" id="pwd">
      <a href="/register"><u>Doesn't have an account?</u></a>
      <RouterLink to="/home"><button type="reset" class="register-button">SIGN IN</button></RouterLink>
    </div>
  </div>

</template>

<style scoped>

.logo {

  border: 1px;
  border-radius: 10px;
  padding: 1px;
  width:250px;
  margin-left: -55px;
  margin-bottom: -30px;

}

.form {

  top: 0;
  position: absolute;
  width: 500px;
  height: 90%;
  left: 50%;
  margin: 5px 0 0 -250px;
  overflow: hidden;
  font-size: 1rem;
  font-weight: lighter;
  letter-spacing: 1px;
  color: black;

}

.account-form {

  background-color: white;
  border-radius: 30px;
  height: 90%;
  width: 100%;
  margin-left: 0;
  margin-top: 19%;

}

.account-form label {

  font-weight: bold;

}

.account-form input{

  display: block;
  margin-top: 10px;
  width: 80%;
  height: 5%;

}

.account-form p {

  text-align: center;
  display: block;
  width: 82%;
  color: #272727;

}

.form h1 {

  margin-top: -10px;
  color: #272727;
  margin-left: 180px;
  font-size: 3rem;
  font-weight: bolder;
  letter-spacing: 2px;

}

.register-button {

  margin-top: 40px;
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
  margin-left: 100px;

}
a {

  margin-left: 1px;
  text-decoration: none;
  color: #272727;

}

</style>

<script setup>

</script>