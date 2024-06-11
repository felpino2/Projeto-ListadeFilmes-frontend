<template>

    <div class = "form">
      <div class = "account-form">
        <h1>
          Register
        </h1>
        <p>
        Join our community of hero lovers and be up to date with your favorite universes.
        </p>
        <label>Username</label>
        <input type="text" id="username">
        <label>Password</label>
        <input type="password" id="pwd">
        <label>Confirm Password</label>
        <input type="password" id="cnfrmpwd">
        <a href="more"><u>Already have an account?</u></a>
        <RouterLink to="/home"><button type="reset" class="register-button">JOIN FOR FREE</button></RouterLink>
      </div>
    </div>

</template>

<style scoped>

.form {
  top: 0;
  position: absolute;
  width: 500px;
  height: 90%;
  left: 50%;
  margin: 0 0 0 -250px;
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
  margin-top: 10%;
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
}

.form h1 {
  margin-left: 200px;
  color: #181818;
  font-size: 3rem;
  font-weight: bolder;
  letter-spacing: 2px;
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

<script setup>

</script>