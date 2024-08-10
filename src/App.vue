<script setup>
import Header from "./components/Header.vue";
import SectionLead from "./components/SectionLead.vue";
import SectionFeatures from "./components/SectionFeatures.vue";
import SectionUsage from "./components/SectionUsage.vue";
import SectionAbout from "./components/SectionAbout.vue";
import SectionFooter from "./components/SectionFooter.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <section class="lead" id="lead">
      <SectionLead />
    </section>

    <section class="reverse-mobile" id="features">
      <SectionFeatures />
    </section>

    <section id="usage">
      <SectionUsage />
    </section>

    <section class="reverse-mobile" id="about">
      <SectionAbout />
    </section>

    <section class="last" id="github">
      <SectionFooter />
    </section>

    <footer>
      <Footer />
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

  margin: 120px 0;
  margin-top: 0;
  padding: 0 20px;
  padding-top: 60px;
}

section.lead {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 3rem;
  padding-top: 0;
}

section.last {
  display: flex;
  align-items: end;
  flex-direction: row;
  justify-content: space-around;

  min-height: 22svh;

  margin: 20px 0;
  padding: 0 10px;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 80px;
  padding: 10px;
  /* padding: 0 10px; */
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

@media (max-width: 500px) {
  section {
    margin: 60px 0;
    padding-top: 50px;
  }

  footer {
    flex-direction: column;
    padding: 0;
  }
}
</style>
