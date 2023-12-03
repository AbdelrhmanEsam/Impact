<template>
  <div class="navbar-bg">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <img
          class="navbar-brand"
          src="../../assets/logo-impact.svg"
          alt="logo"
        />

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page">
                عن تأثير +
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="nav-link">خدماتنا</router-link>
            </li>

            <li>
              <router-link to="/about-us" class="nav-link">
                أعمالنا</router-link
              >
            </li>

            <li>
              <router-link to="/contact-us" class="nav-link">
                عملاؤنا
              </router-link>
            </li>

            <li>
              <router-link to="/jobs" class="nav-link">الأخبار</router-link>
            </li>
          </ul>
          <div class="whats d-flex col-sm-none" role="button">
            <a
              href="https://wa.me/+9660540542258/?text=Hello%20World!"
              class="lang"
              aria-label="button"
            >
              <span> 9660540542258+ </span>
              <img src="../../assets/whatsapp.svg" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../..//scss/variables.scss";
@import "../../scss/fonts.scss";

.navbar-bg {
  font-family: $font-family;
  direction: rtl;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  padding-bottom: 5px;
  clear: both;
  // background-color: #0c0632;
  box-shadow: 0 0 2px (#aeaeae);

  .navbar {
    padding: 10px 0px 0px;
    top: 0;
    justify-content: space-around;
    display: flex;

    .navbar-brand {
      width: 150px;
      // height: 90%;
      padding: 10px 0px;
    }
    ul li {
      font-family: "ArbFONTS";
      margin: 0px 15px;
      a {
        color: white;
      }
    }
    .navbar-nav {
      margin: auto;
    }
  }
  .navbar-toggler {
    background-color: #00abad6e;
    padding: 10px;
    height: fit-content;
  }

  .whats {
    width: auto;
    height: 40px;
    border: 1px;
    a {
      display: flex;
      margin: 7px;
      color: white;
      width: 200px;
      span {
        margin: 5px 0px;
      }
      img {
        margin: 0px !important;
        padding: 0px !important;
      }
    }
  }
}

@media (max-width: 575.98px) {
  .navbar {
    width: 100%;
    padding: 0px;
  }
  .navbar-bg .navbar {
    justify-content: space-between;

    .router-link-exact-active {
      color: $main-color;
      border-bottom: 0px;
    }
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .navbar-bg .navbar {
    justify-content: space-between;
    .router-link-exact-active {
      color: $main-color;
      border-bottom: 0px;
    }
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .navbar-bg .navbar {
    justify-content: space-between;
    .router-link-exact-active {
      color: $main-color;
      border-bottom: 0px;
    }
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .navbar-expand-lg .navbar-nav {
    margin: 0;
    padding: 0%;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    font-size: 16px !important;
    margin: 0;
    padding: 0%;
  }
}
@media (min-width: 1400px) {
}
</style>

<script>
// import { logo } from "../../data/images";
export default {
  name: "NavbarComponent",
};
// data() {
//   return {
//     isTaggle: false,
//     isFixed: false,
//     logo,
//   };
// },
// methods: {
//   changeToggel() {
//     this.isTaggle = !this.isTaggle;
//   },
//   navScrole() {
//     window.onscroll = () => {
//       let navHeight = window.document.querySelector("nav").offsetHeight;
//       let scrollY = window.scrollY;
//       if (scrollY > 500) {
//         this.isFixed = true;
//         document.body.setAttribute(
//           "style",
//           "padding-top:" + navHeight + "px"
//         );
//       } else {
//         document.body.setAttribute("style", "padding-top:" + 0);
//         this.isFixed = false;
//       }
//     };
//   },
//   move(id) {
//     console.log(id);
//     let element = document.getElementById(id);
//     if (!element) {
//       this.$router.push("/");
//       setTimeout(() => {
//         element = document.getElementById(id);
//         let height = element.offsetTop - 90;
//         window.scrollTo(0, height);
//       });
//     } else {
//       let height = element.offsetTop - 90;
//       window.scrollTo(0, height);
//     }
//   },
// },
// created() {
//   this.navScrole();
// },
</script>
