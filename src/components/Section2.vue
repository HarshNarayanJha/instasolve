<script setup>
import DeviceScreen from "./DeviceScreen.vue";
</script>

<template>
  <div class="section-text">
    <p>Now the solutions are at your fingertips</p>
    <p class="different">With Full Understanding</p>
  </div>
  <div class="section-screenshot">
    <DeviceScreen image="result-page/dark/iphone-13.png" width="500px" light="none" fetchpriority="low" loading="lazy" />
    <DeviceScreen image="result-page/light/iphone-13.png" width="500px" dark="none" fetchpriority="low" loading="lazy" />
  </div>
</template>

<style scoped>
.section-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.5rem;
    display: inline;
    padding: 0 15px;
  }

  p {
    font-size: 1.4rem;
    color: var(--c-text);
    text-align: center;
  }

  p.different {
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 1.3px;
    color: var(--color-different);
  }
}

.section-screenshot {
  flex: 0.5;
}

@media (max-width: 1024px) {
  .section-text {
    align-items: center;
  }
}
</style>
