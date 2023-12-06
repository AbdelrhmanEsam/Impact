<template>
  <section class="content-us">
    <div class="container">
      <p
        class="header-section wow animate__animated animate__bounceIn animate__slower"
      >
        التواصل
      </p>
      <h1
        class="header wow animate__animated animate__bounceIn animate__slower"
      >
        الطريق نحو المستقبل وجهة نرسمها في تأثير +
      </h1>

      <div class="row">
        <div class="col-12 col-md-6">
          <div
            class="content-us-text wow animate__animated animate__fadeInRight animate__slower"
          >
            <form class="row g-4">
              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="  الإسم ثلاثي"
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
                <div class="go-with-us wow animate__animated animate__fadeInUp">
                  <p>إرسل إلينا</p>
                  <img src="../../assets/icon_arrow-left.svg" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="map wow animate__animated animate__fadeInRight">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d110410.89915095264!2d31.7470737!3d30.141676800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1701862924226!5m2!1sar!2seg"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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
    margin: 0% !important;
    padding: 0% !important;

    input,
    textarea {
      padding: 20px;
      border-radius: 10px;
      font-family: Cairo;
      border: 1px solid #d8d8d8;
    }
  }
  .map {
    width: 100%;
    height: 80%;
    iframe {
      width: 100%;
      height: 100%;
    }
  }

  .go-with-us {
    display: flex;
    p {
      color: $main-color-alt;
      font-size: 22px;
      font-weight: 700;
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
    padding: 40px 20px;
    height: auto !important;
    .header {
      font-size: 18px;
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
    .map {
      margin: 20px 0px;
      width: 100%;
      height: 100%;
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
    .map {
      margin-top: 20px;
      width: 100%;
      height: 100%;
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
    .map {
      width: 100%;
      height: 100%;
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

    .map {
      width: 100%;
      height: 100%;
    }
  }
}
@media (min-width: 1480px) and (max-width: 1900px) {
  .map {
    width: 100%;
    height: 100%;
  }
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
