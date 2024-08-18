<script setup>
import AppIcon from "./AppIcon.vue";
import DeviceScreen from "./DeviceScreen.vue";
</script>

<template>
  <div class="lead-section-text">
    <AppIcon />
    <h1>Insta Solve</h1>
    <p>Doubts are Fun</p>
  </div>
  <div class="lead-section-screenshots">
    <DeviceScreen
      light_image="home-page/contents/light/pixel.png"
      dark_image="home-page/empty/dark/pixel.png"
      image="home-page/empty/dark/pixel.png"
    />

    <!-- Needs to be home-page/empty/dark right here -->
    <DeviceScreen
      image="home-page/contents/dark/samsung-s21.png"
      height="800px"
      light_image="home-page/contents/light/iphone-13.png"
      dark_image="home-page/contents/dark/samsung-s21.png"
    />
  </div>
</template>

<style scoped>
.lead-section-text {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    line-height: 3rem;
  }

  p {
    margin: 0;
    padding: 0;
    color: var(--c-text);
    font-size: 1.2rem;
  }
}

.lead-section-screenshots {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  /* gap: 5px; */
}
</style>
