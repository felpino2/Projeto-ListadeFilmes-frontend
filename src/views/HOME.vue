<script setup>

</script>

<template>

  <div class="container">
    <div class="header">

      <div class="topnav">
        <h1>HEROFLIX</h1>
      </div>
    </div>

    <div class="body">
      search bar 1
    </div>

    <div class="body">
      main films title
      <div>
        films
      </div>
    </div>

    <div class="footer">
      <div class="bottomnav">
        SITE MADE AS A FINAL PROJECT
      </div>
    </div>

  </div>

</template>

<style scoped>

.header {
  position:fixed;
  padding:0;
  top:0;
  width: 100%;
  margin: 0 0 615px -165px;
  display: grid;
  color: white;
  background-color: #FF914D;
}

.topnav {
  margin-top: 20px;
  margin-bottom: -20px;
}

h1 {
  font-weight: bold;
  letter-spacing: 1px;
}

.footer {
  position:fixed;
  padding:0;
  bottom:0;
  width: 100%;
  height: 50px;
  margin: 0 0 0 -165px;
  display: grid;
  color: grey;
  background-color: #272727;
}

.bottomnav {
  margin-top: 15px;
}

</style>