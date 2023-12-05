<template>
  <Navbare></Navbare>
  <div>
    <PrivacyPolicyComponent></PrivacyPolicyComponent>
  </div>
</template>

<style lang="scss" scoped>
.navbar-bg {
  background-color: #0c0632 !important;
}
</style>

<script>
import Navbare from "@/components/layouts/Navbar.vue";
import PrivacyPolicyComponent from "@/components/policies/PrivacyPolicy.component.vue";

export default {
  name: "PrivacyPolicyView",
  components: {
    Navbare,
    PrivacyPolicyComponent,
  },
  created() {
    this.$store.commit("setPage", "PrivacyPolicy");

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },
  data() {
    return {
      currentPage: "PrivacyPolicy",
    };
  },
};
</script>
