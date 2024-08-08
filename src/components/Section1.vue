<script setup>
import DeviceScreen from "./DeviceScreen.vue";
</script>

<template>
  <div class="section-screenshot">
    <DeviceScreen
      image="scan-page/light/samsung-ultra-left.png"
      width="600px"
      light_image="scan-page/dark/samsung-ultra-right.png"
      dark_image="scan-page/light/samsung-ultra-left.png"
      fetchpriority="low"
      loading="lazy"
    />
  </div>
  <div class="section-text">
    <p>Ever had a doubt? Have no one around who may solve it for you?</p>
    <p>Don't worry from now on</p>
    <h2>Insta Solve</h2>
    <p>is here!</p>

    <p>Solve any question with <i>just</i> the click of a button</p>
    <p>Save Answers for later</p>
    <p>Don't have internet? Save your question and ask it later!</p>
    <p>Click a photo and ask any question in it, or just type it out!</p>
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

  h2 {
    font-size: 1.8rem;
    line-height: 2.5rem;
    display: inline;
    padding: 0 8px;
    color: var(--c-green);
    font-weight: 900;
    font-family: "Baloo 2";
  }

  p {
    font-size: 1.2rem;
    color: var(--c-text);
    text-align: center;
    display: inline;
  }

  li {
    list-style-type: disc;
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
