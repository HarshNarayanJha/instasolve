<script setup>
import { onMounted } from "vue";
import DeviceScreen from "./DeviceScreen.vue";

onMounted(() => {
  const dataScreens = document.querySelectorAll("[data-screen]");
  const dataScreenImages = document.querySelectorAll("[data-screen-image]");

  dataScreenImages.forEach((image) => {
    image.style.display = "none";
  });
  dataScreenImages[0].style.display = "block";

  dataScreens.forEach((step) => {
    step.addEventListener("mouseover", (e) => {
      dataScreenImages.forEach((image) => {
        image.style.display = "none";
      });
      document.querySelector(`[data-screen-image="${e.target.dataset.screen}"]`).style.display = "block";
    });
  });
});
</script>

<template>
  <div class="section-text">
    <h1>Easy To Use</h1>
    <p>Your Answers are just one click away</p>
    <ul>
      <li data-screen="1"><span class="icon fa6-solid--dice-one"></span>Start by tapping the Ask Question Button</li>
      <li data-screen="2">
        <span class="icon fa6-solid--dice-two"></span>Either snap (or pick) a photo <br />
        or type the question in the text field
      </li>
      <li data-screen="3"><span class="icon fa6-solid--dice-three"></span>Tap the solve button to get the solution</li>
      <li data-screen="4"><span class="icon fa6-solid--dice-four"></span>Read the Solution, save it, or share it</li>
    </ul>
    <small>NOTE: Screenshots are under progress!</small>
  </div>
  <div class="section-screenshot">
    <DeviceScreen
      image="home-page/empty/dark/pixel.png"
      width="350px"
      light_image="home-page/empty/dark/pixel.png"
      dark_image="home-page/empty/dark/pixel.png"
      fetchpriority="low"
      loading="lazy"
      data-screen-image="1"
    />
    <DeviceScreen
      image="result-page/dark/iphone-13.png"
      width="350px"
      light_image="result-page/dark/iphone-13.png"
      dark_image="result-page/dark/iphone-13.png"
      fetchpriority="low"
      loading="lazy"
      data-screen-image="2"
    />
    <DeviceScreen
      image="home-page/empty/dark/pixel.png"
      width="350px"
      light_image="home-page/empty/dark/pixel.png"
      dark_image="home-page/empty/dark/pixel.png"
      fetchpriority="low"
      loading="lazy"
      data-screen-image="3"
    />
    <DeviceScreen
      image="scan-page/light/samsung-ultra-right.png"
      width="350px"
      light_image="scan-page/dark/samsung-ultra-right.png"
      dark_image="scan-page/dark/samsung-ultra-right.png"
      fetchpriority="low"
      loading="lazy"
      data-screen-image="4"
    />
  </div>
</template>

<style scoped>
.section-screenshot {
  width: 35%;
  border-radius: 50%;
  padding-top: 40px;
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
    padding-bottom: 16px;
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
    margin-top: 5px;
  }

  ul li {
    list-style-type: none;
    padding-left: 0;
    padding: 10px 15px;
    margin: 10px 0;
    background: var(--color-background-soft);
    border-radius: 10px;
    min-height: 75px;
    width: min(400px, 85vw);
    display: flex;
    align-items: center;
    font-size: 1.15rem;
    transition: 0.4s background linear;
    line-height: 1.75rem;

    span.inverted {
      background: var(--color-background-inverse);
      color: var(--color-text-inverse);
      padding: 0 6px;
      font-weight: 600;
      border-radius: 5px;
    }
  }

  ul li:hover {
    background: var(--color-background-mute);
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
