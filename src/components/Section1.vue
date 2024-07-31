<script setup>
import DeviceScreen from "./DeviceScreen.vue";
</script>

<template>
  <div class="section-screenshot">
    <DeviceScreen image="scan-page/light/samsung-ultra-left.png" width="600px" light="none" />
    <DeviceScreen image="scan-page/dark/samsung-ultra-right.png" width="600px" dark="none" />
  </div>
  <div class="section-text">
    <p>Ever had a doubt? Have no one around who will solve it for you?</p>
    <p>Don't worry from now on. <h1>Insta Solve</h1> is here!</p>
  </div>
</template>

<style scoped>

.section-screenshot {
  width: 50%;
  border-radius: 50%;
}

.section-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.5rem;
    display: inline;
    padding: 0 15px;
  }

  p {
    color: var(--c-text);
    text-align: center;
  }
}

@media (max-width: 1024px) {
  .section-screenshot {
    width: auto;
    margin: auto;
  }

  .section-text {
    align-items: center;

    h1 {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 2.5rem;
      display: block;
      padding: 0 15px;
    }
  }
}
</style>
