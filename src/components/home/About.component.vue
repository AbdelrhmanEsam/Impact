<template>
  <section class="about">
    <div class="overly"></div>
    <div class="container">
      <div class="row">
        <div class="about-impact">
          <div class="about-img">
            <div class="about-header">
              <h1>عن “تأثير +”</h1>
            </div>
            <img src="../../assets/man-pic.jpg" alt="" />
          </div>
          <div class="about-text">
            <p>
              انطلقت شركة تأثير في مدينة الرياض في مجال تنظيم المعارض والمؤتمرات
              بكوادر بشرية مؤهلة ومتخصصة في مجال الفعاليات وشغوفة في هذا المجال
              ومنذ انطلاقتها قامت تأثير بتنظيم أحداث وفعاليات متعددة واستطاعت في
              فترة زمنية قصيرة أن تحصل على العديد من شركاء النجاح من الجهات
              الحكومية والخاصة.
            </p>
          </div>
        </div>
      </div>
      <div class="about-company">
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="card">
              <h1 class="header">فلسفة الشركة</h1>
              <p>
                نسعى الى تحقيق أهدافنا المتمثلة في رفع مستوى المعارض والمؤتمرات
                والفعاليات وكافة الخدمات المقدمة في هذا المجال من خلال تحقيق
                أهداف عملائنا.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-12">
            <div class="card">
              <h1 class="header">رؤية الشركة</h1>
              <p>
                الريادة في الفعاليات والتسويق المبتكرة والمتجددة وإستخدام
                التقنيات المتقدمة التي تلبي تطلعات شركائنا وتحقق التوقعات.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="go-with-us">
        <p>نظم فعاليتك معنا</p>
        <img src="../../assets/icon_arrow-left.svg" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

.about {
  position: relative;
  width: 100%;
  height: auto !important;
  background: linear-gradient(85deg, #233a76 0%, #543c97 100%);
  z-index: 1 !important;

  &::before {
    content: "";
    position: absolute;
    bottom: -1px !important;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: #0c0633;
    clip-path: polygon(200% 200%, 0% 0%, 0% 100%);
    z-index: -1;
  }
  .overly {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-image: url(../../assets/Isolation_Mode.svg);
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: -1;
    transform: skewY(-10deg);
  }
  .about-impact {
    display: flex;
    align-items: center;

    padding: 30px 0px;
    .about-img {
      width: 30%;
      img {
        border-radius: 10px;
      }
      .about-header h1 {
        color: white;
        font-size: 50px;
        font-weight: 600;
        position: relative;
        right: 80%;
        top: 90px;

        &::before {
          content: url(../../assets/shape.svg);
          position: absolute;
          top: 60px;
          // left: 200px;
          left: 50%;
        }
      }
    }
    .about-text {
      width: 60%;
      padding: 50px;
      p {
        color: white;
        font-size: 20px;
        font-family: Cairo;
        font-weight: 400;
        line-height: 39.5px;
        text-align: justify;
        z-index: 1;
      }
    }
  }
  .about-company {
    padding: 50px 0px;
    text-align: justify;
    .card {
      margin: 0px 0px 0px 50px;
      background: none;
      border: none;
      height: 100%;
      .header {
        color: white;
        font-size: 35px;
        font-weight: 400;
        line-height: 159px;
        position: relative;
        &::after {
          content: url(../../assets/shape3.svg);
          position: absolute;
          width: 50px;
          height: 100px;
          left: 100%;
        }
        &::before {
          content: "";
          position: absolute;
          width: 50px;
          height: 2px;
          background-color: aqua;
          top: 80%;
        }
      }
      p {
        color: white;
        font-size: 20px;
        // font-family: FF Shamel Family;
        font-weight: 400;
        line-height: 39.5px;
      }
    }
  }
  .go-with-us {
    display: flex;
    width: auto !important;
    height: 100px;
    p {
      color: $main-color-alt;
      font-size: 22px;
      font-weight: 400;
    }
    img {
      width: 30px;
      height: 30px;
      margin: 0px 10px;
    }
  }
}
@media (max-width: 575.98px) {
  .about-impact {
    flex-direction: column !important;
    width: 100% !important;
    padding: 50px 0px 0px !important;
    .about-img {
      width: 100% !important;
      .about-header h1 {
        color: white;
        font-size: 50px;
        font-weight: 600;
        position: relative;
        right: 0% !important;
        // transform: translate(50%);
        top: 0px !important;
        text-align: center;
        &::before {
          position: absolute;
          top: 60px;
          left: 10% !important;
        }
      }
    }
    .about-text {
      width: 100% !important;
      margin-top: 80px;
      padding: 0px !important;
    }
  }

  .about-company {
    padding: 0px !important;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .about-impact {
    flex-direction: column !important;
    width: 100% !important;
    padding: 50px 0px 0px !important;
    .about-img {
      width: 100% !important;
      .about-header h1 {
        color: white;
        font-size: 50px;
        font-weight: 600;
        position: relative;
        right: 50%;
        transform: translate(50%);
        top: 0px !important;
      }
    }
    .about-text {
      width: 100% !important;
      margin-top: 80px;
      padding: 0px !important;
    }
  }

  .about-company {
    padding: 0px !important;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .about-impact {
    display: flex;
    align-items: center;

    .about-img {
      width: 60% !important;
      height: 80% !important;
      img {
        width: 100%;
        height: 100% !important;
      }
      .about-header h1 {
        color: white;
        font-size: 50px;
        font-weight: 600;
        position: relative;
        right: 5% !important;
        top: -30px !important;
        &::before {
          left: 30px !important;
        }
      }
    }
    .about-text {
      width: 40%;
      margin: 100px 20px !important;
      padding: 50px 0px !important;

      align-items: center;
      // background-color: #ffffff80;
    }
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .about {
    .about-text {
      padding: 50px;
    }
    .about-img {
      img {
        width: 100%;
        height: 400px;
      }
    }
  }
}
@media (min-width: 1400px) {
  .about {
    .about-img {
      width: 90%;
    }
  }
}
</style>

<script>
import WOW from "wow.js"; // Import wow.js if it's not already included

export default {
  mounted() {
    new WOW().init();
  },
  name: "AboutComponent",
};
</script>
