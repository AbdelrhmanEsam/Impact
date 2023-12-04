<template>
  <div class="home">
    <LandingComponent></LandingComponent>
    <AboutComponent></AboutComponent>
    <OurServicesComponent></OurServicesComponent>
    <OurProductsComponent></OurProductsComponent>
    <WorkComponent></WorkComponent>
    <TwoImpactComponent></TwoImpactComponent>
    <SponsersComponent></SponsersComponent>
    <news-component></news-component>
    <ask-component></ask-component>
    <ContactComponent></ContactComponent>
  </div>
</template>

<script>
import LandingComponent from "@/components/home/Landing.component.vue";
import AboutComponent from "@/components/home/About.component.vue";
import OurServicesComponent from "@/components/home/OurServices.component.vue";
import OurProductsComponent from "@/components/home/OurProducts.component.vue";
import WorkComponent from "@/components/home/Work.component.vue";
import TwoImpactComponent from "@/components/home/TwoImpact.component.vue";
import SponsersComponent from "@/components/home/Sponsers.component.vue";
import NewsComponent from "@/components/home/News.component.vue";
import AskComponent from "@/components/home/Ask.component.vue";
import ContactComponent from "@/components/home/Contact.component.vue";
import WOW from "wow.js";

export default {
  name: "HomeView",
  components: {
    LandingComponent,
    AboutComponent,
    OurServicesComponent,
    OurProductsComponent,
    WorkComponent,
    TwoImpactComponent,
    SponsersComponent,
    NewsComponent,
    AskComponent,
    ContactComponent,
  },

  created() {
    this.$store.commit("setPage", "contact");

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },

  mounted() {
    const wow = new WOW();
    wow.init();
  },
};
</script>
