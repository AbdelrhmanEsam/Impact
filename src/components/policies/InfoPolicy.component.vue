<template>
  <nav :class="navbarClasses">
    <!-- Navbar content here -->
    <section class="info">
      <div class="container">
        <div class="card">
          <h1>سياسة ملفات تعريف الارتباط</h1>
          <p>
            يستخدم هذا الموقع ملفات تعريف الارتباط (cookies)، إذ نستخدمها لتخصيص
            المحتوى والإعلانات، ولتوفير مزايا وسائل التواصل الاجتماعي ولتحليل
            حركة المرور لمواقعنا. نشارك أيضاً معلومات حول استخدامك لموقعنا مع
            شركائنا في وسائل التواصل الاجتماعي ووكالات الإعلان وشركات تحليل
            البيانات والذين قد يجمعونها مع المعلومات الأخرى التي قدمتها لهم أو
            التي جمعوها من استخدامك لخدماتهم.
          </p>
          <div class="question">
            <h2>ما هي ملفات تعريف الارتباط؟</h2>
            <p>
              ملفات تعريف الارتباط هي ملفات نصية صغيرة تُخَزَّن في متصفحك أو
              جهاز الكمبيوتر الخاص بك أو جهازك المحمول عند زيارتك لصفحة على
              الإنترنت أو تطبيق، وذلك لتحسين تجربتك. وسيرسل نظامنا ملف تعريف
              ارتباط إلى جهازك عندما تزور موقعنا الإلكتروني، وذلك ما لم تعدّل
              إعدادات متصفحك لرفض ملفات تعريف الارتباط. يستخدم موقعنا ما يلي:
            </p>
          </div>

          <div class="question">
            <h2>ملفات تعريف الارتباط الضرورية</h2>
            <p>
              تساعد ملفات تعريف الارتباط الضرورية في جعل الموقع الإلكتروني
              قابلاً للاستخدام، من خلال تمكين الوظائف الأساسية مثل التنقل في
              الصفحة والوصول إلى المناطق الآمنة في الموقع الإلكتروني. ولا يمكن
              للموقع أن يعمل بشكل صحيح بدون ملفات تعريف الارتباط هذه.
            </p>
          </div>

          <div class="question">
            <h2>ملفات تعريف الارتباط التفضيلية</h2>
            <p>
              تُمكّن ملفات تعريف الارتباط التفضيلية الموقع الإلكتروني من تذكر
              المعلومات التي تغيّر طريقة أداء الموقع أو شكله، مثل لغتك المفضلة
              أو المنطقة التي تكون فيها.
            </p>
          </div>

          <div class="question">
            <h2>ملفات تعريف الارتباط الإحصائية</h2>
            <p>
              تساعد ملفات تعريف الارتباط الإحصائية مالكي المواقع الإلكترونية على
              فهم كيفية تفاعل الزوار مع تلك المواقع من خلال جمع المعلومات
              والإبلاغ عنها بشكل مجهول.
            </p>
          </div>

          <div class="question">
            <h2>ملفات تعريف الارتباط التسويقية</h2>
            <p>
              تُستخدم ملفات تعريف الارتباط التسويقية لتتبع الزوار عبر المواقع
              الإلكترونية. والغرض من ذلك هو عرض إعلانات ملائمة وجذابة للمستخدم،
              وبالتالي تكون أكثر قيمة للناشرين والمعلنين الخارجيين.
            </p>
          </div>

          <div class="question">
            <h2>تعطيل ملفات تعريف الارتباط</h2>
            <p>
              يمكنك تعطيل ملفات تعريف الارتباط عن طريق تنشيط الإعداد الموجود في
              متصفحك والذي يسمح لك برفض إعداد جميع ملفات تعريف الارتباط أو
              بعضها. ومع ذلك، إذا كنت تستخدم إعدادات المتصفح الخاص بك لحظر جميع
              ملفات تعريف الارتباط (بما في ذلك ملفات تعريف الارتباط الأساسية)،
              فقد لا تتمكن من الوصول إلى كل أو أجزاء من موقعنا. لمزيد من
              المعلومات، يرجى التواصل معنا عبر البريد الإلكتروني
              impactplus@neom.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
.info {
  width: 100%;
  background-color: rgba(250, 235, 215, 0.245);
  // height: 500px;
  padding: 50px;
  .card {
    background-color: #fff;
    padding: 50px;
    width: 100%;
    height: 100%;
    margin-top: 100px;
    h1 {
      color: #233a76;
      font-size: 50px;
      font-weight: 400;
    }
    p {
      color: #233a76;
      font-size: 20px;
      font-weight: 400;
      line-height: 39.5px;
      word-wrap: break-word;
      padding: 50px;
    }
    .question {
      h2 {
        color: #233a76;
        font-size: 24px;
        font-weight: 800;
        // line-height: 39.5px;
        word-wrap: break-word;
        padding: 0%;
      }
      p {
        color: #233a76;
        font-size: 20px;
        font-weight: 400;
        line-height: 39.5px;
        word-wrap: break-word;
        padding: 10px;
      }
    }
  }
}
.navbar-bg {
  background-color: #f60202;
}
@media (max-width: 575.98px) {
  .info {
    padding: 50px 0px;
    .container {
      width: 100% !important;
    }
    .card {
      padding: 20px 0px;
      h1,
      .question h2 {
        padding: 10px;
      }
    }
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .info {
    padding: 50px 0px;
    .container {
      width: 100% !important;
    }
    .card {
      padding: 20px 0px;
      h1,
      .question h2 {
        padding: 10px;
      }
    }
  }
}
</style>

<script>
export default {
  name: "InfoPolicyComponent",
  data() {
    return {
      currentPage: "InfoPolicyComponent",
    };
  },
  computed: {
    navbarClasses() {
      return (
        "navbar " +
        (this.currentPage === "InfoPolicyComponent" ? "navbar-about" : "")
      );
    },
  },
};
</script>
