<script setup></script>

<template>
  <div class="section-text">
    <h1>An App with Values</h1>
    <ul>
      <li>
        <span class="icon fluent--eye-tracking-off-16-filled mr-0"></span>
        <h3>No Tracking</h3>
        <p>Insta Solve does not collect any personal data at any point</p>
      </li>
      <li>
        <span class="icon fluent--shield-lock-16-filled mr-0"></span>
        <h3>No AI Training</h3>
        <p>Your questions are not used for any AI model training</p>
      </li>
      <li>
        <span class="icon fluent--people-16-filled mr-0"></span>
        <h3>Made with Care</h3>
        <p>Insta Solve is made by a real person and people in mind</p>
      </li>
    </ul>
    <h2>Having Queries?</h2>
    <div class="mail-card">
      <a href="mailto:instasolve@harshnj.is-a.dev"><span class="icon ic--baseline-mail inline mr-0"></span> instasolve@harshnj.is-a.dev</a>
    </div>
  </div>
</template>

<style scoped>
.section-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 1050px;

  h1,
  h2 {
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
    padding-top: 32px;
    padding-bottom: 38px;
    line-height: 3rem;
  }

  h2 {
    font-size: 2rem;
    margin-top: 5px;
    padding-bottom: 16px;
    margin-left: auto;
  }

  ul {
    margin-top: 5px;
    display: flex;
    gap: 30px;
    text-align: center;
    margin-bottom: 20px;
  }

  ul li {
    list-style-type: none;
    padding-left: 0;
    padding: 50px 25px;
    flex: 1;
    background: var(--color-background-soft);
    border-radius: 10px;

    span {
      margin: auto;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 1.6rem;
      font-weight: 800;
    }

    p {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--c-text);
    }
  }

  div.mail-card {
    display: block;
    padding: 8px 12px;
    margin: 8px;
    margin-left: auto;
    background: var(--color-background-mute);
    border-radius: 10px;

    a {
      text-decoration: none;
      color: var(--color-text);
    }
  }
}

@media (max-width: 1024px) {
  .section-text {
    max-width: 400px;

    ul {
      flex-direction: column;
    }

    p span {
      font-size: 1.8rem;
      display: inline-block;
      font-weight: 900;
    }
  }
}
</style>
