<template>
  <div class="work">
    <p
      class="header-section wow animate__animated animate__fadeIn animate__slower animate__delay-0s"
    >
      لنصل
    </p>
    <h1
      class="header wow animate__animated animate__fadeIn animate__slower animate__delay-1s"
    >
      كيف نعمل
    </h1>
    <p
      class="header-desc wow animate__animated animate__fadeIn animate__slower animate__delay-2s"
    >
      في عالمٍ سريع التطور أصبح الإبداع صعب الوصول ، تأتي تأثير + لتشاركك
      استراتيجيات العمل لدينا لتأخذ أعمالك إلى وجهات جديدة أكثر إبداعاً وتأثيراً
      .
    </p>
    <div class="uk-slider-container-offset" uk-slider>
      <div
        class="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slider="left: true"
      >
        <ul class="uk-slider-items uk-grid uk-grid-match">
          <li class="uk-width-2-5@xl uk-width-2-3@m">
            <div
              class="uk-cover-container wow animate__animated animate__fadeInLeft"
            >
              <div class="text">
                <img src="../../assets/icon-search.svg" alt="" />
                <h2>مرحلة البحث</h2>
                <p>لفهم ونحدد احتياجات العميل والسوق</p>
              </div>
              <img src="../../assets/work.png" alt="" />
            </div>
          </li>
          <li class="uk-width-2-5@xl uk-width-2-3@m">
            <div
              class="uk-cover-container wow animate__animated animate__fadeInLeft animate__delay-1s"
            >
              <div class="text">
                <img src="../../assets/work-3.svg" alt="" />

                <h2>مرحلة التخطيت</h2>
                <p>
                  نحن نأخذ في الاعتبار جميع الجوانب بما في ذلك خطة ادارة الازمات
                  في جميع الأوقات.
                </p>
              </div>
              <img class="work-card" src="../../assets/work.png" alt="" />
            </div>
          </li>
          <li class="uk-width-2-5@xl uk-width-2-3@m">
            <div
              class="uk-cover-container wow animate__animated animate__fadeInLeft animate__delay-2s"
            >
              <div class="text">
                <img src="../../assets/shuttle.svg" alt="" />

                <h2>مرحلة التنفيذ</h2>
                <p>نقوم بتعيين فريق متخصص لكل مهمة</p>
              </div>
              <img class="work-card" src="../../assets/work.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
      <!-- <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> -->
      <!-- <ul class="uk-slider-items"></ul> -->

      <!-- <ul class="lists uk-slider-nav">
        <li class="btns"><a href uk-slider-item="previous">…</a></li>
        <li class="active"><a href uk-slider-item="next">…</a></li>
      </ul> -->
      <div class="lists">
        <a href uk-slider-item="previous" class="previous"> </a>
        <a href uk-slider-item="next" class="next"> </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../scss/variables.scss";
@import "https://cdn.jsdelivr.net/npm/uikit@3.17.0/dist/css/uikit.min.css";

.work {
  // min-height: 800px;
  min-height: 100vh !important;

  clear: both;
  width: 100%;
  background-color: #0b0a31;
  padding: 50px 0px;
  // text-align: center;
  overflow: hidden;
  padding: 100px 10% 100px 0px;
  .header-section {
    @include header-section;
    // margin: auto;
  }
  .header {
    color: white;
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
      right: 0%;
    }
  }

  .header-desc {
    color: white;
    font-size: 20px;
    font-weight: 400;
    line-height: 39.5px;
    letter-spacing: 1px;
    width: 50%;
    margin-bottom: 50px;
  }
  li {
    align-items: center;
  }

  .uk-cover-container {
    width: 200px !important;
    border-radius: 20px !important;
    display: flex;
    justify-content: center;
    height: 240px;
    transition: all 0.3s ease-in;
    margin: 50px 0px;

    .text {
      padding: 40px;
      width: 50%;
      padding: 50px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        font-size: 17px;
        font-weight: 200;
        line-height: 23.5px;
        color: #8b3e3e !important;
      }
      h2 {
        font-size: 22px;
        font-weight: 800;
        line-height: 30px;
        color: #8b3e3e !important;
      }
      img {
        margin: 10px 0px;
        width: 40px;

        height: 40px;
      }
    }
    img {
      width: 60%;
      border-radius: 0%;
      margin-bottom: 10px;
    }

    &:hover {
      transform: scaleY(1.1);
      .text {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        img {
          filter: brightness(90);
        }
        h2 {
          color: white !important;
        }
        p {
          color: white !important;
        }
      }
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 20px;
      padding: 2px;
      background: linear-gradient(0deg, #ec4d4d36, #b52df440, #ffffff);

      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
  .lists {
    display: flex !important;
    width: 100px;
    margin: auto;
    justify-content: center;
    text-align: center !important;
    .previous {
      background-color: rgba(88, 88, 88, 0.6) !important;

      border-color: transparent;
      width: 40px !important;
      border-radius: 11px !important;
      height: 8px !important;
      margin: 50px 5px 0px;
      opacity: 1;
    }
    .next {
      background-color: rgba(88, 88, 88, 0.6) !important;
      border-color: transparent;
      width: 20px !important;
      border-radius: 11px !important;
      height: 8px !important;
      margin: 50px 5px 0px;
      opacity: 1;
    }
    .uk-invisible {
      visibility: visible !important;
      background-color: rgba(212, 212, 212, 0.87) !important;
    }
  }
}

@media (max-width: 575.98px) {
  .work {
    padding: 50px 20px;
  }
  .header-desc {
    width: 90% !important;
  }
  .work .uk-cover-container {
    height: 300px !important;
    .text {
      padding: 25px;
    }
  }
  .work .uk-cover-container.sec .text {
    padding: 20px;
    font-size: 15px;
  }
  .work .uk-cover-container img {
    width: 50%;
  }
  .work .uk-cover-container.third {
    img {
      width: 50%;
    }
  }
  .work .uk-cover-container.third .text {
    padding: 0px 5px 0px 0px;
    font-size: 15px;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .work .header-desc {
    width: 90%;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .work .header-desc {
    width: 70%;
  }
}
@media (min-width: 992px) and (max-width: 1399.98px) {
  .work .header-desc {
    width: 70%;
  }
  .work .uk-cover-container .text {
    padding: 25px;
  }
  .work .uk-cover-container.sec .text {
    padding: 20px;
  }
}
@media (min-width: 1400px) and (max-width: 1900px) {
  .work .uk-cover-container .text {
    padding: 25px;
  }
  .work .uk-cover-container.sec .text {
    padding: 20px;
  }
}
</style>

<script>
export default {
  name: "WorksComponent",
};
</script>
