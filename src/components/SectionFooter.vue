<script setup>
import DeviceScreen from "./DeviceScreen.vue";
</script>

<template>
  <div class="section-text">
    <a href="https://github.com/HarshNarayanJha/Insta-Solve" target="_blank" aria-label="GitHub Repo of Insta Solve">
      <h1>Get The App</h1></a>
    <h1 class="different">Or star it on GitHub</h1>
  </div>
  <div class="section-screenshot">
    <a href="https://github.com/HarshNarayanJha/Insta-Solve" target="_blank" aria-label="GitHub Repo of Insta Solve">
      <picture>
        <source
          srcset="/src/assets/icons/github-mark-white.png"
          media="(prefers-color-scheme: dark)"
          alt="appicon"
          fetchpriority="low"
          loading="lazy"
        />
        <source
          srcset="/src/assets/icons/github-mark.png"
          media="(prefers-color-scheme: light)"
          alt="appicon"
          fetchpriority="low"
          loading="lazy"
        />
        <img src="/src/assets/icons/github-mark-white.png" alt="appicon" fetchpriority="low" loading="lazy" />
      </picture>
    </a>
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

  h1.different {
    font-size: 1.7rem;
    font-weight: 400;
    color: var(--color-different);
  }
}

.section-screenshot {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: 0 10px;
    padding: 0 10px;
  }

  img {
    max-width: 100px;
  }
}

@media (max-width: 500px) {
  .section-text {
    h1 {
      font-size: 1.5rem;
      line-height: 2rem;
      padding: 0;
    }

    h1.different {
      font-size: 1.2rem;
    }
  }

  .section-screenshot {
    img {
      max-width: 75px;
    }
  }
}
</style>
