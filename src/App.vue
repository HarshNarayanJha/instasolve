<script setup>
import Header from "./components/Header.vue";
import SectionLead from "./components/SectionLead.vue";
import Section1 from "./components/Section1.vue";
import Section2 from "./components/Section2.vue";
import Section3 from "./components/Section3.vue";
</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <section class="lead">
      <SectionLead />
    </section>

    <section class="reverse-mobile">
      <Section1 />
    </section>

    <section>
      <Section2 />
    </section>

    <footer>
      <Section3 />
    </footer>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  justify-content: space-around;
  align-items: start;
  position: sticky;
  top: 10px;

  margin-bottom: 2em;
}

section {
  display: flex;
  align-items: center;
  justify-content: space-around;

  min-height: 78svh;

  margin: 40px 0;
  padding: 0 20px;
}

section.lead {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 3rem;
}

footer {
  display: flex;
  align-items: end;
  justify-content: space-around;

  min-height: 22svh;

  margin: 20px 0;
  padding: 0 10px;
}

@media (max-width: 1024px) {
  section {
    display: flex;
    flex-direction: column;
  }

  section.reverse-mobile {
    flex-direction: column-reverse;
  }

  section.lead {
    display: flex;
    flex-direction: column;
  }
}
</style>
