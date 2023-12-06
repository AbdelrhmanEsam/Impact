<template>
  <div :class="['navbar-bg', { 'navbar-scrolled': isScrolled }]">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <img class="navbar-brand" src="../../assets/logo-impact.svg" alt="" />

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
              <a @click="OurServices" class="nav-link">خدماتنا</a>
            </li>

            <li>
              <a @click="OurProducts" class="nav-link"> أعمالنا</a>
            </li>

            <li>
              <a @click="Sponsers" class="nav-link"> عملاؤنا </a>
            </li>

            <li>
              <a @click="News" class="nav-link">الأخبار</a>
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
  z-index: 1;
  top: 0;
  padding-bottom: 5px;
  clear: both;
  box-shadow: 0 0 2px (#aeaeae);
  position: fixed;
  transition: background-color 0.3s ease;

  .navbar {
    padding: 10px 0px 0px;
    top: 0;
    justify-content: space-around;
    display: flex;

    .navbar-brand {
      width: auto;
      // height: 90%;
      margin: 0%;
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
      width: 65%;
    }
  }
  .navbar-toggler {
    background-color: #fff;
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
      // width: 200px;
      span {
        margin: 8px;
      }
      img {
        margin: 0px !important;
        padding: 0px !important;
      }
    }
  }
}
.navbar-scrolled {
  background-color: #0c0632;
  z-index: 1000;
  padding: 0px;
  img {
    // width: 50px;
    height: 80px;
  }

  .whats {
    span {
      margin: 5px;
    }

    img {
      width: auto;
      height: 30px;
      border: 1px;
    }
  }
}

@media (max-width: 575.98px) {
  .navbar {
    width: 100%;
    padding: 0px;

    .navbar-nav {
      margin: auto;
      width: 100%;
    }
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
    align-items: center;

    .router-link-exact-active {
      color: $main-color;
      border-bottom: 0px;
    }
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .navbar-expand-lg .navbar-nav {
    margin: 0;
    padding: 3px 0px;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    font-size: 14px !important;
    margin: 0;
    padding: 0%;
  }
}
@media (min-width: 1400px) {
}
</style>

<script>
export default {
  name: "NavbarComponent",

  data() {
    return {
      isScrolled: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20;
    },
    OurServices() {
      this.$scrollTo("#our-services", 500);
    },
    OurProducts() {
      this.$scrollTo("#our-products", 500);
    },
    Sponsers() {
      this.$scrollTo("#sponsers", 500);
    },
    News() {
      this.$scrollTo("#news", 500);
    },
  },
};
</script>
