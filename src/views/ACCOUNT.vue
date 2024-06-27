<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()

const registerUser = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
    return
  }

  try {
    const response = await axios.post('http://localhost:8080/register', {
      username: username.value,
      password: password.value
    })

    if (response.status === 200) {
      router.push('/home')
    } else {
      alert('Failed to register. Please try again.')
    }
  } catch (error) {
    console.error('Error registering user:', error)
    alert('Failed to register. Please try again.')
  }
}
</script>

<template>
  <div class="form">
    <div class="account-form">
      <h1>
        Register
      </h1>
      <p>
        Join our community of hero lovers and be up to date with your favorite universes.
      </p>
      <label>Username</label>
      <input type="text" v-model="username">
      <label>Password</label>
      <input type="password" v-model="password">
      <label>Confirm Password</label>
      <input type="password" v-model="confirmPassword">
      <a href="/login"><u>Already have an account?</u></a>
      <button type="button" class="register-button" @click="registerUser">JOIN FOR FREE</button>
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
  margin-left: 150px;

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
