<template>
  <div class="work">
    <p class="header-section wow animate__animated animate__bounceIn">لنصل</p>
    <h1 class="header wow animate__animated animate__bounceIn">كيف نعمل</h1>
    <p class="header-desc wow animate__animated animate__fadeIn">
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
              class="uk-cover-container first wow animate__animated animate__fadeInLeft"
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
              class="uk-cover-container sec wow animate__animated animate__fadeInLeft"
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
              class="uk-cover-container third wow animate__animated animate__fadeInLeft"
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
      <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

      <!-- <ul class="lists">
        <li class="btns"></li>
        <li class="active"></li>
      </ul> -->
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
  padding: 100px 100px 100px 0px;
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
    height: 250px;
    width: 200px !important;
    border-radius: 20px !important;
    border: 1px solid #ffffff2b;
    // border: 1px solid #000;
    display: flex;
    justify-content: end;

    // border-width: 2px;
    // border-style: solid;
    // border-image-source: linear-gradient(
    //   to top,
    //   #430e44 0%,
    //   #120325 50%,
    //   #ffffff90 100%
    // );
    // border-radius: 20px !important;
    // border-image-slice: 1;
    .text {
      display: flex;
      flex-direction: column;
      padding: 50px;
      justify-content: space-evenly;
      img {
        width: 40px;
        height: 40px;
      }
      h2 {
        color: white;
        font-size: 22px;
        font-weight: 400;
        line-height: 30px;
      }
      p {
        color: white;
        font-size: 17px;
        font-weight: 200;
        line-height: 23.5px;
      }
    }
    img {
      width: 60%;
      border-radius: 0%;
    }
  }
  .uk-cover-container.sec {
    height: 220px;
    .text {
      padding: 40px;
      width: 50%;
      p,
      h2 {
        color: #8b3e3e !important;
      }
      img {
        margin: 10px 0px;
      }
    }
  }
  .uk-cover-container.third {
    height: 180px;
    .work-card {
      width: 80%;
    }
    .text {
      padding: 50px;
      p,
      h2 {
        color: #8b3e3e !important;
      }
      img {
        margin: 10px 0px;
      }
    }
  }

  .lists {
    display: flex;
    width: 100px;
    margin: auto;
    justify-content: space-around;
    .btns {
      background-color: rgba(212, 212, 212, 0.87) !important;
      border-color: transparent;
      width: 40px !important;
      border-radius: 11px !important;
      height: 8px !important;
      margin: 50px auto 0px;
      // display: flex;
    }
    .active {
      background-color: rgba(88, 88, 88, 0.6) !important;
      border-color: transparent;
      width: 20px !important;
      border-radius: 11px !important;
      height: 8px !important;
      margin: 50px auto 0px;
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
