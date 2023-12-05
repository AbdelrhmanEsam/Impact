<template>
  <Navbare></Navbare>
  <div>
    <InfoPolicyComponent></InfoPolicyComponent>
  </div>
</template>

<style lang="scss" scoped>
.navbar-bg {
  background-color: #0c0632 !important;
}
</style>

<script>
import Navbare from "@/components/layouts/Navbar.vue";
import InfoPolicyComponent from "@/components/policies/InfoPolicy.component.vue";

export default {
  name: "InfoPolicyView",
  components: {
    Navbare,
    InfoPolicyComponent,
  },

  created() {
    this.$store.commit("setPage", "InfoPolicy");

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },
};
</script>
