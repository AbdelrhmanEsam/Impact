<template>
  <div class="sponser">
    <p class="header-section wow animate__animated animate__bounceIn">
      شركاؤنا
    </p>
    <h1 class="header wow animate__animated animate__bounceIn">
      بثقتهم يزدهر الإبداع
    </h1>

    <div uk-slider>
      <div
        class="uk-position-relative uk-visible-toggle uk-light mb-5 wow animate__animated animate__fadeInLeft"
        tabindex="-1"
        uk-slider
      >
        <ul
          class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-child-width-1-6@xl uk-grid"
        >
          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo3.png" />
            </div>
          </li>

          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo4.png" />
            </div>
          </li>

          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo10.png" />
            </div>
          </li>

          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo9.png" />
            </div>
          </li>

          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo11.png" />
            </div>
          </li>

          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo12.png" />
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo13.png" />
            </div>
          </li>
        </ul>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          href
          uk-slidenav-previous
          uk-slider-item="previous"
        ></a>
        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href
          uk-slidenav-next
          uk-slider-item="next"
        ></a>
      </div>
    </div>

    <div uk-slider>
      <div
        class="uk-position-relative uk-visible-toggle uk-light mb-5 wow animate__animated animate__fadeInRight"
        tabindex="-1"
        uk-slider
      >
        <ul
          class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-child-width-1-6@xl uk-grid"
        >
          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo7.png" />
            </div>
          </li>

          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo6.png" />
            </div>
          </li>

          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo13.png" />
            </div>
          </li>

          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo8.png" />
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo1.png" />
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo2.png" />
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo5.png" />
            </div>
          </li>
          <li>
            <div class="uk-panel">
              <img class="card-icon" src="../../assets/logo6.png" />
            </div>
          </li>
        </ul>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          href
          uk-slidenav-previous
          uk-slider-item="previous"
        ></a>
        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href
          uk-slidenav-next
          uk-slider-item="next"
        ></a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../scss/variables.scss";
@import "https://cdn.jsdelivr.net/npm/uikit@3.17.0/dist/css/uikit.min.css";

.sponser {
  // min-height: 800px;
  clear: both;
  width: 100%;
  padding: 50px 0px;
  text-align: center;
  overflow: hidden;
  min-height: 100vh !important;
  .header-section {
    @include header-section;
    margin: auto;
  }
  .header {
    color: #233a76;
    font-size: 50px;
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
  ul {
    display: flex;
    align-items: center;
    opacity: 0.5;
  }
  .uk-panel {
    // padding: 50px;
    margin: 50px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      // width: 100%;
      height: 100%;
    }
  }
}

@media (max-width: 575.98px) {
  .sponser {
    .header {
      font-size: 30px;
      &::before {
        right: 50%;
        transform: translate(50%);

        margin: auto;
        // width: 100%;
      }
    }
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .sponser {
    .header {
      font-size: 35px;
      &::before {
        right: 50%;
        transform: translate(50%);
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .sponser {
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
  name: "sponserComponent",
};
</script>
