<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const loginUser = async () => {
  console.log("Logging in with data:", {
    username: username.value,
    password: password.value
  })

  try {
    const response = await axios.post('http://localhost:8080/login', {
      username: username.value,
      password: password.value
    })

    console.log("Response:", response)

    if (response.status === 200) {
      alert('Login successful!')
      router.push('/home')
    } else {
      alert('Failed to login. Please try again.')
    }
  } catch (error) {
    console.error('Error logging in:', error)
    alert('Failed to login. Please try again.')
  }
}
</script>

<template>
  <div class="form">
    <div class="account-form">
      <h1>
        Login
      </h1>
      <p>
        We are glad to have you as a part of our community.
      </p>
      <label>Username</label>
      <input type="text" id="username">
      <label>Password</label>
      <input type="password" id="pwd">
      <a href="/register"><u>Register now</u></a>
      <RouterLink to="/home"><button type="reset" class="register-button">SIGN IN</button></RouterLink>
    </div>
  </div>
</template>

<style scoped>

.form {

  top: 0;
  position: absolute;
  width: 500px;
  height: 85%;
  left: 50%;
  margin: 20px 0 0 -250px;
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
  margin-top: 15%;

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
  margin-top: 10px;

}

h1 {

  color: #272727;
  font-size: 3rem;
  font-weight: bolder;
  letter-spacing: 2px;
  margin-left: 180px;

}

.register-button {

  margin-top: 60px;
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
  margin-left: 100px;

}

a {

  margin-left: 1px;
  text-decoration: none;
  color: #272727;

}

</style>
