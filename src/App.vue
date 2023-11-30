<template>
  <Navbare></Navbare>
  <router-view />
  <Footer></Footer>
</template>

<script>
import Icons from "uikit/dist/js/uikit-icons";
import UIkit from "uikit";
UIkit.use(Icons);

import Navbare from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";
export default {
  name: "App",
  components: {
    Navbare,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap");

body {
  height: auto;
  position: relative;
  overflow-x: hidden;
}
* {
  font-family: "Bahij";
}

.container {
  display: block !important;
  width: 80% !important;
}

@media (min-width: 576px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 85%;
  }
}
@media (min-width: 768px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 90% !important;
  }
}

@media (min-width: 1400px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 90% !important;
  }
}
* a {
  text-decoration: none;
}
ul {
  margin: 0;
  padding: 0;
}
.row {
  margin: 0 !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  width: 0px;
  height: 10px;
  margin-bottom: 10px;
}
</style>
