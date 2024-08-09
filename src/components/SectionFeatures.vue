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
    <h1>Clear and Simple</h1>
    <p>Ever had a doubt? Have no one around who may solve it for you?</p>
    <p>Don't worry from now on <span>Insta Solve</span> is here!</p>
    <ul>
      <li>Solve any question with <i>just</i> the click of a button</li>
      <li>Save Answers for later reference</li>
      <li>Don't have internet? Save your question and ask it later</li>
      <li>Answers according to subject and grade</li>
      <li>Click a photo and ask any question in it, or just type it out</li>
      <li><span class="inverted">Dark Mode</span> , because obviously</li>
      <li>... And much more, just try it out</li>
    </ul>
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
    font-size: 2.8rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
