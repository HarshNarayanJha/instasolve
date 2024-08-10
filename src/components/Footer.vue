<script setup></script>

<template>
  <div>
    <img src="/src/assets/icons/icon.png" alt="appicon" class="app-icon" />
    <h2>Insta Solve</h2>
  </div>
  <div>
    <a href="https://github.com/HarshNarayanJha" target="_blank"><p>@HarshNarayanJha</p></a>
    <a href="https://github.com/HarshNarayanJha/Insta-Solve" target="_blank">
      <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/HarshNarayanJha/Insta-Solve?style=social" />
    </a>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 150px;
  margin-top: 12px;

  h2 {
    font-family: "Baloo 2";
    font-weight: 600;
    margin-left: 20px;
    color: var(--c-green);
  }
}

p {
  margin-bottom: 8px;
  margin-right: 20px;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: var(--c-text);
}

img.app-icon {
  max-width: 30px;
}

@media (max-width: 500px) {
  h2 {
    font-size: 1.2rem;
  }

  div {
    h2 {
      margin-left: 10px;
    }
  }

  p {
    font-size: 0.8rem;
  }
}
</style>
