<template>
  <div>
    <InfoPolicyComponent></InfoPolicyComponent>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import InfoPolicyComponent from "@/components/policies/InfoPolicy.component.vue";

export default {
  name: "InfoPolicyView",
  components: {
    InfoPolicyComponent,
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
