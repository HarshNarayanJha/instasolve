<script setup>
const props = defineProps(["image", "width", "height", "light_image", "dark_image", "fetchpriority", "loading"]);

const width = props.width || "350px";

function imgUrl(name) {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}
</script>

<template>
  <picture>

    <source
      :srcset="imgUrl(light_image)"
      alt="screenshot"
      :fetchpriority="fetchpriority"
      :loading="loading"
      :width="width"
      media="(prefers-color-scheme: light)"
    />

    <source
      :srcset="imgUrl(dark_image)"
      alt="screenshot"
      :fetchpriority="fetchpriority"
      :loading="loading"
      :width="width"
      media="(prefers-color-scheme: dark)"
    />

    <img
      :src="imgUrl(image)"
      alt="screenshot"
      draggable="false"
      :fetchpriority="fetchpriority"
      :loading="loading"
      :width="width"
    />
  </picture>
</template>

<style scoped>
img {
  max-width: 350px;
  min-width: v-bind(width) !important;
  min-height: 600px;
  max-height: v-bind(height);
  margin-right: -10px;
}

@media (max-width: 1280px) {
  img {
    max-width: 250px;
    min-width: calc(v-bind(width) / 1.4) !important;
    min-height: 300px;
  }
}

@media (max-width: 500px) {
  img {
    max-width: 150px;
    min-width: calc(v-bind(width) / 1.8) !important;
    min-height: 150px;
  }
}
</style>
