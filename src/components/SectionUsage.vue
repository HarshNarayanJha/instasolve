<script setup>
import DeviceScreen from "./DeviceScreen.vue";
</script>

<template>
  <div class="section-text">
    <h1>Easy To Use</h1>
    <p>Your Answers are just one click away...</p>
    <ul>
      <li>Start asking by tapping the Scan Button</li>
      <li>Either snap (or pick) a photo or type the question in the text field</li>
      <li>Tap the solve button to get the solution</li>
      <li>Read the Solution, save it, or share it</li>
    </ul>
  </div>
  <div class="section-screenshot">
    <DeviceScreen
      image="scan-page/light/samsung-ultra-right.png"
      width="600px"
      light_image="scan-page/dark/samsung-ultra-right.png"
      dark_image="scan-page/dark/samsung-ultra-right.png"
      fetchpriority="low"
      loading="lazy"
    />
  </div>
</template>

<style scoped>
.section-screenshot {
  width: 35%;
  border-radius: 50%;
}

.section-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  h1 {
    font-size: 2.8rem;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
    font-weight: bold;
  }

  p span {
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

  ul {
    margin-top: 20px;
  }

  ul li {
    list-style-type: none;
    padding-left: 0;
    padding: 10px 15px;
    margin: 10px 0;
    background: var(--color-background-soft);
    border-radius: 10px;
    min-height: 75px;
    width: 400px;
    display: flex;
    align-items: center;
    font-size: 1.15rem;

    span.inverted {
      background: var(--color-background-inverse);
      color: var(--color-text-inverse);
      padding: 0 6px;
      font-weight: 600;
      border-radius: 5px;
    }
  }
}

@media (max-width: 1024px) {
  .section-screenshot {
    width: auto;
    margin: auto;
  }

  .section-text {
    align-items: center;

    span {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 2.5rem;
      display: block;
      padding: 0 15px;
    }
  }
}
</style>
