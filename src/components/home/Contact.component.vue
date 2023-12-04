<template>
  <section class="content-us">
    <div class="container">
      <p class="header-section wow animate__animated animate__bounceIn">
        التواصل
      </p>
      <h1 class="header wow animate__animated animate__bounceIn">
        الطريق نحو المستقبل وجهة نرسمها في تأثير +
      </h1>

      <div class="row">
        <div class="col-12 col-md-6">
          <div
            class="content-us-text wow animate__animated animate__bounceInRight"
          >
            <form class="row g-3">
              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="الأسم ثلاثي"
                />
              </div>
              <div class="col-md-8">
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="الجهة"
                />
              </div>
              <div class="col-md-4">
                <input
                  class="form-control"
                  id="inputPassword4"
                  placeholder="رقم الهاتف"
                />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="عنوان الرسالة .. "
                />
              </div>

              <div class="col-12">
                <div class="mb-3">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="نص الرسالة....."
                  ></textarea>
                </div>
              </div>
              <div class="col-12">
                <div
                  class="go-with-us wow animate__animated animate__bounceInUp"
                >
                  <p>تواصل معنا</p>
                  <img src="../../assets/icon_arrow-left.svg" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          class="col-12 col-md-6 wow animate__animated animate__bounceInLeft"
        >
          <img src="../../assets/map.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

.content-us {
  width: 100%;
  height: auto;
  margin: 0px auto;

  padding: 50px 0px;
  .header-section {
    @include header-section;
  }
  .header {
    color: #233a76;
    font-size: 45px;
    font-weight: 400;
    font-family: "ArbFONTS-bold" !important;
    width: 50%;
    margin-top: 50px;
    margin-bottom: 100px;

    position: relative;
    &::before {
      content: url(../../assets/shape.svg);
      position: absolute;
      top: 140px;
    }
  }
  .content-us-text {
    width: fit-content;
    text-align: justify;
    margin: auto;
    font-family: Cairo;
    input,
    textarea {
      padding: 20px;
      border-radius: 10px;
      font-family: Cairo;
    }
  }

  .go-with-us {
    display: flex;
    // justify-content: center;
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
  .content-us {
    padding: 20px;
    .header {
      font-size: 20px;
      width: 100%;
      margin-bottom: 50px;
      position: relative;
      &::before {
        content: url(../../assets/shape.svg);
        position: absolute;
        top: 70px;
      }
    }
    .content-us-text {
      padding: 10px 0px;
      text-align: center;
    }
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .content-us {
    padding: 50px;
    .header {
      font-size: 20px;
      width: 100%;
      margin-bottom: 50px;
      position: relative;
      &::before {
        content: url(../../assets/shape.svg);
        position: absolute;
        top: 50px;
      }
    }
    .content-us-text {
      padding: 10px 0px;
      text-align: center;
    }
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .content-us {
    padding: 20px;
    .header {
      font-size: 20px;
      width: 100%;
      margin-bottom: 50px;
      position: relative;
      &::before {
        content: url(../../assets/shape.svg);
        position: absolute;
        top: 30px;
      }
    }
    .content-us-text {
      padding: 10px 0px;
      text-align: center;
    }
  }
}
@media (min-width: 992px) and (max-width: 1479.98px) {
  .content-us {
    padding: 50px;
    width: 100%;

    .header {
      font-size: 20px;
      width: 100%;
      margin-bottom: 50px;
      position: relative;
      &::before {
        content: url(../../assets/shape.svg);
        position: absolute;
        top: 50px;
      }
    }
    .content-us-text {
      padding: 10px 0px;
      text-align: center;
    }
  }
}
@media (min-width: 1480px) and (max-width: 1900px) {
}
</style>

<script>
import WOW from "wow.js"; // Import wow.js if it's not already included

export default {
  mounted() {
    new WOW().init();
  },
  name: "ContactComponent",
};
</script>
