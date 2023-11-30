<template>
  <footer>
    <div class="head-footer">
      <h1>كُن معنا ليصلك جديدنا</h1>
      <img src="../../assets/shape.svg" alt="" />
      <p>
        نحيطكم بتفاصيل رحلتنا المُلهمة لتكونوا معنا على اطلاع أول بأول بكل ماهو
        جديد لدينا...
      </p>
      <div class="form">
        <label for="">
          اشترك
          <img src="../../assets/icon_arrow-left.svg" />
        </label>
        <input type="text" placeholder="اكتب الإميل الإلكتروني" />
      </div>
    </div>
    <div class="center-footer">
      <img class="logo-footer" src="../../assets/logo2mpact.svg" />
      <p>تابع تأثير + على وسائل التواصل الاجتماعي</p>
      <div class="icons">
        <img src="../../assets/instagram.svg" alt="" />
        <img src="../../assets/twitter.svg" alt="" />
        <img src="../../assets/whatsapp.svg" alt="" />
      </div>
    </div>
    <div class="copyright">
      <router-link to="/info-policies">
        <p>سياسة الخصوصية</p>
      </router-link>

      <router-link to="/privacy-policies">
        <p>سياسة ملفات تعريف الارتباط</p>
      </router-link>
      <p>© 2024 جميع الحقوق محفوظة</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

footer {
  background-color: $main-bg-color;
  width: 100%;
  // height: auto;
  // position: absolute;
  bottom: 0 !important;
  text-align: center;

  .head-footer {
    padding: 70px;
    width: 100%;
    h1 {
      color: white;
      font-size: 50px;
      font-weight: 400;
      line-height: 93px;
      word-wrap: break-word;
    }
    img {
      width: 200px;
      margin: 1rem;
    }
    p {
      font-size: 20px;
      color: white;
      font-weight: 400;
      line-height: 39.5px;
    }
    .form {
      background-color: #07001a;
      border-radius: 10px;
      width: fit-content;
      padding: 10px 50px;
      margin: 1rem auto;
      label {
        color: $main-color-alt;
        font-family: Cairo;
        border-left: 2px solid $main-bg-color;
        img {
          width: 40px;
          margin: 0px 10px 0px 25px;
        }
      }
      input {
        padding: 20px;
        direction: ltr;
        margin: 0px 15px;
        background-color: #07001a;
        border: none;
        color: white;
        font-family: Cairo;
        width: 400px;
      }
    }
  }
  .center-footer {
    width: 100%;
    border-top: 1px solid #dddddd42;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 25px;
    .logo-footer {
      width: 130px;
      height: 80px;
    }
    p {
      color: white;
      font-size: 18px;
      font-family: Cairo;
      font-weight: 600;
    }
    .icons {
      display: flex;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  .copyright {
    background-color: #07001a;
    padding: 20px;
    display: flex;
    justify-content: center;
    p {
      margin: 0px 50px;
      color: white;
      font-size: 18px;
      font-family: Cairo;
      font-weight: 600;
    }
  }
}

@media (max-width: 575.98px) {
  .head-footer {
    padding: 50px 20px !important;
    h1 {
      line-height: 50px !important;
    }
    .form {
      padding: 0px 10px !important;
      label {
        img {
          margin: 0px 10px !important;
          width: 20px !important;
        }
      }
      input {
        width: 200px !important;
      }
    }
  }
  .center-footer {
    padding: 25px 10px;
    .logo-footer {
      width: 100px !important;
      height: 80px;
    }
    p {
      font-size: 14px !important;
      font-weight: 400;
      margin: 0px !important;
    }
  }
  .copyright {
    flex-direction: column;
    p {
      font-size: 16px !important;
    }
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .head-footer {
    padding: 50px !important;
    h1 {
      line-height: 50px !important;
    }
    .form {
      padding: 0px 20px !important;
      label {
        img {
          width: 20px !important;
        }
      }
      input {
        width: 200px !important;
      }
    }
  }
  .copyright {
    p {
      font-size: 14px !important;
      margin: 0px 10px !important;
    }
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .head-footer {
    .form {
      padding: 0px 20px !important;
      label {
        img {
          width: 20px !important;
        }
      }
      input {
        width: 300px !important;
      }
    }
  }
  .copyright {
    p {
      font-size: 16px !important;
      margin: 0px 20px !important;
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
  name: "LowerFooterComponent",
};
</script>
