<script setup>
import DeviceScreen from "./DeviceScreen.vue";
</script>

<template>
  <div class="section-text">
    <h1>Get The App</h1>
    <h1 class="different">Or star it on GitHub</h1>
  </div>
  <div class="section-screenshot">
    <a href="https://github.com/HarshNarayanJha/Insta-Solve" target="_blank"
      ><img class="dark" src="/src/assets/icons/github-mark-white.png" alt="appicon"
    /></a>
    <a href="https://github.com/HarshNarayanJha/Insta-Solve" target="_blank"
      ><img class="light" src="/src/assets/icons/github-mark.png" alt="appicon"
    /></a>
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

  img {
    max-width: 100px;
  }

  img.dark {
    display: none;
  }

  @media (prefers-color-scheme: dark) {
    img.light {
      display: none;
    }

    img.dark {
      display: block;
    }
  }
}

@media (max-width: 500px) {
  .section-text {
    h1 {
      font-size: 1.5rem;
      line-height: 2rem;
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
