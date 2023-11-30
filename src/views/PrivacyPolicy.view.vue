<template>
  <div>
    <PrivacyPolicyComponent></PrivacyPolicyComponent>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import PrivacyPolicyComponent from "@/components/policies/PrivacyPolicy.component.vue";

export default {
  name: "PrivacyPolicyView",
  components: {
    PrivacyPolicyComponent,
  },
  created() {
    this.$store.commit("setPage", "contact");

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },
};
</script>
