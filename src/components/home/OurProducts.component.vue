<template>
  <div class="Our-products">
    <p class="header-section wow animate__animated animate__bounceIn">
      أعمالنا
    </p>
    <h1 class="header wow animate__animated animate__bounceIn">
      حيث تكتمل دائرة الإبداع لتحقق أهدافكم
    </h1>

    <div uk-slider>
      <div
        class="uk-position-relative"
        style="right: 20px"
        tabindex="-1"
        uk-slider
      >
        <div class="uk-slider-container uk-light">
          <ul
            class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-5@l uk-child-width-1-5@xl uk-grid"
          >
            <li>
              <div
                class="uk-panel wow animate__animated animate__fadeInLeft"
              ></div>
            </li>
            <li>
              <div
                class="uk-panel wow animate__animated animate__fadeInLeft"
              ></div>
            </li>
            <li>
              <div
                class="uk-panel active wow animate__animated animate__fadeInUp"
              >
                <div class="date">
                  <img src="../../assets/icon-calendar.svg" alt="" />
                  <span>10/3/2023</span>
                </div>
                <div>
                  <h2 class="card-header">عنوان البطولة هنا</h2>
                  <p class="card-desc">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div
                class="uk-panel wow animate__animated animate__fadeInRight"
              ></div>
            </li>

            <li>
              <div
                class="uk-panel wow animate__animated animate__fadeInRight"
              ></div>
            </li>
          </ul>
        </div>

        <div class="left">
          <a
            class="uk-position-center-left uk-position-small uk-light uk-visible"
            uk-slidenav-next
          >
          </a>
        </div>
        <div class="right">
          <a
            class="uk-position-center-right uk-position-small uk-light uk-visible"
            uk-slidenav-previous
          ></a>
          <!-- uk-slider-item="previous" -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../scss/variables.scss";
@import "https://cdn.jsdelivr.net/npm/uikit@3.17.0/dist/css/uikit.min.css";

.Our-products {
  // min-height: 800px;
  min-height: 100vh !important;

  clear: both;
  width: 100%;
  background-color: #091e66;
  padding: 50px 0px;
  text-align: center;
  overflow: hidden;
  .header-section {
    @include header-section;
    margin: auto;
  }
  .header {
    color: white;
    font-size: 40px;
    font-weight: 400;
    line-height: 159px;
    overflow: hidden;
    font-family: "ArbFONTS-bold" !important;

    margin-bottom: 50px;

    position: relative;
    &::before {
      content: url(../../assets/shape.svg);
      position: absolute;
      top: 90px;
      right: 42%;
    }
  }

  .uk-panel {
    padding: 50px;
    height: 450px;
    margin: 50px 0px 0px;
    background-image: url(../../assets/cars.png);
    background-repeat: round;
    border-radius: 20px !important;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;

    .card-header {
      color: white;
      font-size: 25px;
      // font-family: FF Shamel Family;
      font-weight: 400;
      position: relative;
      margin: 50px auto;
      &::after {
        content: "";
        width: 70px;
        height: 2px;
        background-color: aqua;
        position: absolute;
        right: 0%;
        bottom: -50% !important;
      }
    }
    .card-desc {
      color: white;
      font-size: 15px;
      font-weight: 400;
      line-height: 24px;
    }
  }
  .uk-panel.active {
    height: 550px;
    margin-top: -10px;
    background-image: url(../../assets/car-pic2.jpg);
    .date {
      background-color: #00000080;
      width: max-content;
      display: flex;
      border-radius: 20px;
      color: white;
      padding: 10px;
      img {
        width: 20px;
        height: 20px;
        margin: 0px 0px 0px 5px;
      }
    }
  }

  .left,
  .right {
    background: linear-gradient(
      96deg,
      #350573 0%,
      rgba(188.7, 0, 255, 0.67) 100%
    );

    display: block;
    position: absolute !important;
    width: 80px;
    height: 80px !important;
    top: 45%;

    z-index: 1;
  }
  .left {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    left: 0;
  }
  .right {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    right: -20px !important;
  }
}

@media (max-width: 575.98px) {
  .Our-products {
    .header {
      font-size: 25px;
      &::before {
        right: 50%;
        transform: translate(50%);
      }
    }
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .Our-products {
    .header {
      font-size: 30px;
      &::before {
        right: 50%;
        transform: translate(50%);
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .Our-products {
    .header {
      font-size: 35px;
      &::before {
        right: 35%;
      }
    }
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
}

@media (min-width: 1400px) {
}
</style>

<script>
export default {
  name: "Our-productsComponent",
};
</script>
