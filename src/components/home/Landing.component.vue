<template>
  <div class="main">
    <div class="container">
      <div class="desc">
        <h1 class="first wow animate__animated animate__fadeIn">صناع</h1>
        <h1 class="sec wow animate__animated animate__fadeOut">الحدث</h1>
      </div>

      <button class="btn contact-btn">
        <img src="../../assets/customer-service.svg" alt="" />
        <p>اطلب خدمة</p>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

.main {
  direction: ltr;
  width: 100%;
  background-image: url(../../assets/1.1.jpg);
  background-size: cover;
  height: 100vh;
  position: relative;
  color: white;
  clear: both;
  .container {
    height: inherit;
  }
  .desc {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

    .first {
      color: #fff;
      font-family: "ArbFONTS-bold" !important;
      position: relative;
      left: 10%;
      font-size: 150px;
      &::after {
        padding: 5px;
        overflow: hidden;
        content: url(../../assets/shape.svg);
        position: absolute;
        top: 60px;
        left: 80px;
      }
    }
    .sec {
      position: relative;
      font-family: "ArbFONTS-bold" !important;
      height: 150px;
      font-size: 150px;
      color: $main-color;
      padding: 5px;

      &::after {
        content: url(../../assets/shape2.svg);
        position: absolute;
        top: 70px;
        left: 20px;
      }
    }
  }
  button.contact-btn {
    padding: 10px;
    border-radius: 8px;
    font-size: 30px;
    color: black;
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: 0;
    // background-color: $main-color;
    background: linear-gradient(
      180deg,
      rgba(5, 186, 181, 0.64) 0%,
      rgba(5, 99.12, 186, 0.64) 100%
    );
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    img {
      width: 50%;
      height: 50%;
    }
    p {
      color: white;
      font-size: 18px;
      font-family: Cairo;
      font-weight: 800;
      line-height: 27.88px;
    }
  }

  @media (max-width: 575.98px) {
    .desc {
      .first {
        font-size: 100px !important;
        overflow: hidden;
        left: 0%;
        &::after {
          left: 50px;
          width: 200px;
        }
      }
      .sec {
        font-size: 100px !important;
        position: relative;
        left: -10%;
        padding: 10px;
        overflow: hidden;
        &::after {
          left: -60px;
          top: 80px;
          width: 100px !important;
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .desc {
      .first {
        font-size: 100px !important;
        overflow: hidden;
        left: 0%;
        &::after {
          left: 50px;
          width: 200px;
        }
      }
      .sec {
        font-size: 100px !important;
        position: relative;
        left: -10%;
        padding: 10px;
        overflow: hidden;
        &::after {
          left: -60px;
          top: 80px;
          width: 100px !important;
        }
      }
    }
  }
  // @media (min-width: 768px) and (max-width: 991.98px) {
  //   .desc {
  //     position: relative;
  //     right: 0% !important;
  //     transform: translate(50%);
  //     .first {
  //       font-size: 100px !important;
  //       height: 140px;
  //       overflow: hidden;
  //       left: 10%;
  //       &::after {
  //         position: absolute;
  //         top: 80px;
  //         left: -70px;
  //         // overflow: hidden;
  //       }
  //     }
  //     .sec {
  //       //   left: 30% !important;
  //       //   transform: translateX(-50%);

  //       font-size: 100px !important;
  //       &::after {
  //         position: absolute;
  //         top: 80px;
  //         left: -100px;
  //       }
  //     }
  //   }
  // }
  // @media (min-width: 992px) and (max-width: 1399.98px) {
  //   .desc {
  //     position: relative;
  //     right: 5%;
  //     top: 5%;
  //   }
  // }
  // @media (min-width: 1400px) and (max-width: 1900px) {
  //   .desc {
  //     position: relative;
  //     right: 15%;
  //     top: 5%;
  //   }
  // }
}
</style>

<script>
import WOW from "wow.js"; // Import wow.js if it's not already included

export default {
  name: "LandingPageComponent",
  data() {
    return {
      navHeight: 0,
    };
  },
  mounted() {
    new WOW().init();
  },
};
</script>
