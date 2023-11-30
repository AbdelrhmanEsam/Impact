<template>
  <div class="mews">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-12">
          <div class="news-text">
            <p class="header-section">الأخبار</p>
            <h1 class="header">اخبار تأثير +</h1>
            <p class="header-desc">
              نحيطكم بتفاصيل رحلتنا المُلهمة لتكونوا معنا على اطلاع أول بأول بكل
              ماهو جديد لدينا...
            </p>

            <div class="go-with-us">
              <p>المزيد من الأخبار</p>
              <img src="../../assets/icon_arrow-left.svg" />
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-12">
          <div class="news-imgs">
            <div class="card">
              <img src="../../assets/child.png" alt="" />

              <div class="desc">
                <h3>هنا نص لخبر او تنظيم فعالية جديدة</h3>
                <p>
                  هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو
                  وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه
                  مازال نصاً بديلاً ومؤقتاً.
                </p>
                <div class="go-with-us">
                  <img src="../../assets/icon_arrow-left.svg" />
                  <p>المزيد من الأخبار</p>
                </div>
              </div>
            </div>
            <div class="card">
              <img src="../../assets/child.png" alt="" />

              <div class="desc">
                <h3>هنا نص لخبر او تنظيم فعالية جديدة</h3>
                <p>
                  هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو
                  وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه
                  مازال نصاً بديلاً ومؤقتاً.
                </p>
                <div class="go-with-us">
                  <img src="../../assets/icon_arrow-left.svg" />
                  <p>المزيد من الأخبار</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "https://cdn.jsdelivr.net/npm/uikit@3.17.0/dist/css/uikit.min.css";
@import "../../scss/variables.scss";

.mews {
  width: 100%;
  background: linear-gradient(2deg, #430e44 0%, #120325 59%, #0b0735 100%);
  padding: 100px 0px;
  align-content: center;
  height: 100%;

  .news-text {
    width: 100%;
    .header-section {
      @include header-section;
    }
    .header {
      color: white;
      font-size: 50px;
      font-weight: 400;

      padding: 50px 0px;
      margin-bottom: 50px;
      height: 100%;
      overflow-y: hidden;
      position: relative;
      &::before {
        content: url(../../assets/shape.svg);
        position: absolute;
        top: 130px;
        right: -6%;
      }
    }

    .header-desc {
      color: white;
      font-size: 20px;
      font-weight: 400;
      line-height: 39.5px;
      letter-spacing: 1px;
      width: 60%;
      margin-bottom: 50px;
    }
    .go-with-us {
      display: flex;
      width: auto;
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

  .news-imgs {
    width: 100%;
    height: 100%;
    .card {
      display: flex !important;
      flex-direction: row;
      padding: 40px 25px;
      width: 100%;
      height: 300px;
      margin: 10px 0px;
      img {
        width: 200px;
      }
      .desc {
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3 {
          color: #444;
          font-size: 22px;
          font-weight: 600;
          line-height: 30px;
        }
        p {
          color: #717171;
          font-weight: 400;
          line-height: 23.5px;
        }
        .go-with-us {
          display: flex;

          justify-content: end;
          p {
            color: $main-color-alt;
            font-size: 17px;
            font-weight: 400;
            margin: 5px 0px;
          }
          img {
            width: 30px;
            height: 30px;
            margin: 0px 10px;
          }
        }
      }
    }
  }
}

@media (max-width: 575.98px) {
  .mews {
    padding: 50px 0px;

    .news-text {
      .header-desc {
        width: 100%;
      }
    }
    .news-imgs {
      padding: 0%;
      .card {
        flex-direction: column;
        height: auto;
        text-align: center;
        h3 {
          text-align: justify;
          letter-spacing: 0cap;
        }
        img {
          margin: auto;
        }
        .go-with-us {
          text-align: center;
          margin: auto;
          width: max-content;
        }
      }
    }
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .mews {
    padding: 50px 0px;

    .news-text {
      .header-desc {
        width: 100%;
      }
    }
    .news-imgs {
      padding: 0%;
      .card {
        flex-direction: column;
        height: auto;
        text-align: center;
        h3 {
          text-align: justify;
          letter-spacing: 0cap;
        }
        img {
          margin: auto;
        }
        .go-with-us {
          text-align: center;
          margin: auto;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
}
@media (min-width: 992px) and (max-width: 1479.98px) {
  .mews {
    display: flex;
    flex-direction: column;
  }
  .mews .news-imgs .card .desc {
    padding: 10px;
  }
}
@media (min-width: 1480px) and (max-width: 1900px) {
  .mews {
  }
  .mews .news-imgs .card .desc {
    padding: 10px;
  }
}
</style>

<script>
export default {
  name: "mewssComponent",
};
</script>
