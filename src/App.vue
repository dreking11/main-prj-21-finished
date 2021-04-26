<template>
  <the-header></the-header>
  <div>
  <img alt="24G logo" src="../assets/24logo.png">
  </div>
  <div>
  <img alt="24G" src="../assets/who_is_24g.jpg">
  </div>
  <div>
  <img alt="CES 2015" src="../assets/ces_overview.jpg">
  </div>
  <img alt="Future Of Drones" src="../assets/future_of_drones.jpg">
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <div class="card">
    <p>
      Visit the Agency leading the world in innovation.
      <a href="https://24g.com/" target="_blank" rel="noopener">24G</a>.
    </p>
    <h3>Who is 24G?</h3>
    <ul>
      <li><a href="https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.mp4" target="_blank" rel="noopener">Who is 24G</a></li>
    </ul>
    <h3>CES 2015 Overview</h3>
    <ul>
      <li><a href="https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/ces_overview.mp4" target="_blank" rel="noopener">CES Overview</a></li>
    </ul>
    <h3>Future Of Drones</h3>
    <ul>
      <li><a href="https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/future_of_drones.mp4" target="_blank" rel="noopener">Future Of Drones</a></li>
    </ul>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  }  
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>