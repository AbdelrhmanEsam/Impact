<template>
  <section class="two-impact">
    <div class="first">
      <div class="text">
        <h1 class="header">نمهد لك الطريق لتجربة فريدة يكون لها تأثير</h1>
        <p>
          “تأثير +” إحدى الشركات السعودية الرائدة في بناء وتنظيم وتجهيز
          الفعاليات والمعارض والمؤتمرات
        </p>
        <button>تواصل معنا الآن</button>
      </div>
    </div>
    <div class="sec">
      <div class="text">
        <h1 class="header">تعرّف علينا عن قرب</h1>
        <div class="cards">
          <div class="card">
            <h2>الإبداع</h2>
            <p>
              لأن الإبداع أصله فكرة .. نستلهم أفكارنا الإبداعية من بيئتنا
              المحلية وننفذها بمقاييس عالمية
            </p>
          </div>

          <div class="card">
            <h2>المواكبة</h2>
            <p>
              مواكبون في رؤيتنا لأحدث التقنيات التي تعطينا القدرة على إكمال
              مسيرتنا
            </p>
          </div>

          <div class="card">
            <h2>التميز</h2>
            <p>سمتنا اللي نسمو بها في مشاريعنا وعملياتنا الإبداعية</p>
          </div>

          <div class="card">
            <h2>التطور</h2>
            <p>نتطور لنطوّر ونستمر في عمليتنا التطويرية لنرتقي بعملائنا</p>
          </div>
        </div>
      </div>
    </div>
    <!-- </div>
    </div> -->
  </section>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
.two-impact {
  width: 100%;
  background: url("../../assets/impacts-tow.png");
  position: relative;
  background-repeat: round;
  text-align: center;
  display: flex;
  .first {
    width: 50%;
    background: rgba(26, 26, 26, 0.4) !important;
    z-index: 1;
    padding: 100px;
    .text {
      height: 100%;
      width: 90%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .header {
        color: white;
        font-size: 50px;
        font-weight: 400;
        line-height: 59px;
        // margin-bottom: 50px;
        font-family: "ArbFONTS-bold" !important;

        position: relative;
        &::before {
          content: url(../../assets/shape.svg);
          position: absolute;
          top: 150px;
          right: 25%;
        }
      }
      p {
        color: rgba(255, 255, 255, 0.638);
        font-size: 20px;
        font-weight: 200;
        line-height: 39.5px;
        letter-spacing: 1px;
        width: 75%;
      }
      button {
        background: none;
        border-radius: 40px;
        border: 1px solid #da528a;
        padding: 20px 40px;
        color: #da528a;
        &:hover {
          // border: 1px solid $main-color;
          // color: $main-color;
          border: 1px solid #fff;
          color: #fff;
          background-color: #da528a;
          transition: $main-transition;
        }
      }
    }
  }

  .sec {
    height: 100%;
    width: 50%;
    z-index: 1;
    padding: 100px 50px;
    .text {
      height: 100%;
      width: 80%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: justify;
      .header {
        color: white;
        font-size: 50px;
        font-weight: 400;
        line-height: 59px;
        // overflow: hidden;
        font-family: "ArbFONTS-bold" !important;

        margin: 50px 0px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: 80px;
          right: 0%;
          width: 70%;
          height: 3px;
          background-color: white;
        }
      }
      .cards {
        display: flex;
        flex-wrap: wrap;
        padding: 25px 0px;
        .card {
          width: 50%;
          padding: 10px 0px 10px 40px;
          background: none;
          color: white;
          border: none;
          background: none;
          h2 {
            margin: 40px 0px;
            color: white;
            font-family: "ArbFONTS-bold" !important;
            font-weight: 200;

            &::before {
              content: "";
              position: absolute;
              top: 105px;
              right: 0%;
              width: 80px;
              height: 3px;
              background-color: $main-color-alt;
            }
          }
          p {
            color: white;
            font-size: 17px;
            font-weight: 200;
            line-height: 23.5px;
            font-family: "ArbFONTS-bold" !important;
          }
        }
      }
    }
  }
}
@media (max-width: 575.98px) {
  .two-impact {
    flex-direction: column;

    .first {
      width: 100% !important;
      padding: 100px 50px !important;
      .text {
        width: 90% !important;
        justify-content: space-around;
        .header {
          font-size: 30px !important;
          margin-bottom: 50px !important;
          &::before {
            top: 120px !important;
            right: 10% !important;
            width: auto !important;
            margin: auto;
          }
        }
        p {
          margin: 50px auto;
        }
      }
    }
    .sec {
      width: 100% !important;
      padding: 50px 100px;
      .text {
        width: 100% !important;

        .header {
          font-size: 25px !important;
          margin: 0px !important;
          &::before {
            margin: auto;
          }
        }
        .cards {
          padding: 50px 0px 0px !important;
          flex-direction: column;

          .card {
            width: 100% !important;
            padding: 0px !important;
            h2 {
              margin: 30px 0px;
              color: white !important;
              &::before {
                top: 75px;
              }
            }
            p {
              color: #ffffffa0;
              font-size: 18px;
              font-weight: 100 !important;
              font-family: $font-family;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .two-impact {
    flex-direction: column;
    .first {
      width: 100% !important;
      padding: 100px 50px !important;
      .text {
        width: 80% !important;
        justify-content: space-around;
        .header {
          font-size: 35px !important;
          margin-bottom: 50px !important;
          &::before {
            top: 120px !important;
            // right: 10% !important;
            width: auto !important;
            margin: auto;
          }
        }
        p {
          margin: 50px auto;
        }
      }
    }
    .sec {
      width: 100% !important;
      padding: 50px 100px;
      .text {
        width: 100% !important;

        .header {
          font-size: 35px !important;
          margin: 0px !important;
          &::before {
            margin: auto;
          }
        }
        .cards {
          padding: 50px 0px 0px !important;
          flex-direction: column;

          .card {
            width: 100% !important;
            padding: 0px !important;
            h2 {
              margin: 30px 0px;

              &::before {
                top: 75px;
              }
            }
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .first {
    padding: 100px 50px !important;
    .text {
      width: 100% !important;

      .header {
        font-size: 35px !important;
        margin-bottom: 50px !important;
        &::before {
          top: 180px !important;
          right: 10% !important;
          width: auto !important;
          margin: auto;
        }
      }
    }
  }
  .sec {
    .text {
      width: 100% !important;

      .header {
        font-size: 35px !important;
        margin-bottom: 50px !important;
        &::before {
          margin: auto;
        }
      }
      .cards {
        padding: 0% !important;
        flex-direction: column;
        .card {
          width: 100% !important;
          padding: 0px !important;
        }
      }
    }
  }
}
@media (min-width: 992px) and (max-width: 1479.98px) {
  .first {
    padding: 100px 50px !important;
    .text {
      width: 100% !important;

      .header {
        font-size: 45px !important;
        margin-bottom: 50px !important;
        &::before {
          top: 180px !important;
          // right: 10% !important;
          width: auto !important;
          margin: auto;
        }
      }
    }
  }
  .sec {
    .text {
      width: 100% !important;

      .header {
        font-size: 45px !important;
        margin-bottom: 50px !important;
        &::before {
          margin: auto;
        }
      }
    }
  }
}
@media (min-width: 1480px) and (max-width: 1900px) {
}
</style>

<script>
export default {
  name: "TwoImpactComponent",
};
</script>
