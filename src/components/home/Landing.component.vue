<template>
  <div class="main">
    <div class="container">
      <div class="desc">
        <h1 class="first">صناع</h1>
        <h1 class="sec">الحدث</h1>
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
    // display: flex;
    // // flex-direction: column;
    // // justify-content: center;
    // // align-items: end;
    position: absolute;
    right: 40%;
    top: 40%;
    transform: translate(100%, 0%);
    .first {
      color: $main-color-alt;
      // position: absolute;
      font-size: 150px;
      font-weight: 800;
      &::after {
        content: url(../../assets/shape.svg);
        position: absolute;
        top: 60px;
        left: 80px;
      }
    }
    .sec {
      position: absolute;
      left: 0% !important;
      top: 15%;
      transform: translateX(-50%);
      font-size: 150px;
      font-weight: 800;
      color: $main-color;
      &::after {
        content: url(../../assets/shape2.svg);
        position: absolute;
        top: 80px;
        left: 0px;
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
    // .desc {
    //   align-items: center;
    //   padding: 0px;
    //   position: relative;
    //   left: 0% !important;
    //   .first {
    //     font-size: 80px !important;
    //     height: 140px;
    //     overflow: hidden;
    //     left: 10%;
    //     &::after {
    //       position: absolute;
    //       top: 70px;
    //       left: 40px;
    //       // overflow: hidden;
    //     }
    //   }
    //   .sec {
    //     left: 30% !important;
    //     transform: translateX(-50%);

    //     font-size: 80px !important;
    //     &::after {
    //       position: absolute;
    //       top: 80px;
    //       left: -80px;
    //     }
    //   }
    // }

    .desc {
      position: relative;
      right: 0% !important;
      transform: translate(50%);
      .first {
        font-size: 80px !important;
        height: 140px;
        overflow: hidden;
        left: 10%;
        &::after {
          position: absolute;
          top: 80px;
          left: -70px;
        }
      }
      .sec {
        font-size: 80px !important;
        &::after {
          position: absolute;
          top: 80px;
          left: -100px;
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    // .desc {
    //   align-items: center;
    //   position: relative;
    //   // right: 25%;
    //   top: 5%;
    //   .first {
    //     font-size: 80px;
    //     height: 140px;
    //     overflow: hidden;
    //     left: 10%;

    //     &::after {
    //       position: absolute;
    //       top: 60px;
    //       left: 30px;
    //       overflow: hidden;
    //     }
    //   }
    //   .sec {
    //     left: 30% !important;
    //     transform: translateX(-50%);

    //     font-size: 80px;
    //     &::after {
    //       position: absolute;
    //       top: 80px;
    //       left: -80px;
    //     }
    //   }
    // }
    .desc {
      position: relative;
      right: 0% !important;
      transform: translate(50%);
      .first {
        font-size: 80px !important;
        height: 140px;
        overflow: hidden;
        left: 10%;
        &::after {
          position: absolute;
          top: 80px;
          left: -70px;
        }
      }
      .sec {
        font-size: 80px !important;
        &::after {
          position: absolute;
          top: 80px;
          left: -100px;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .desc {
      position: relative;
      right: 0% !important;
      transform: translate(50%);
      .first {
        font-size: 100px !important;
        height: 140px;
        overflow: hidden;
        left: 10%;
        &::after {
          position: absolute;
          top: 80px;
          left: -70px;
          // overflow: hidden;
        }
      }
      .sec {
        //   left: 30% !important;
        //   transform: translateX(-50%);

        font-size: 100px !important;
        &::after {
          position: absolute;
          top: 80px;
          left: -100px;
        }
      }
    }
  }
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
export default {
  name: "LandingPageComponent",
  data() {
    return {
      navHeight: 0,
    };
  },
};
</script>
