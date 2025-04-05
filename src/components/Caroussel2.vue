<template>
  <div class="caroussel_2-2">
    <div class="caroussel-2">
      <div class="home_section_1_text_1-2">
        <p class="librez-le-potentiel-2 inferi-regular-normal-white-45px">
          Libérez le potentiel de votre <br />produit grâce à une expertise <br />Delivery et Discovery
        </p>
        <p class="je-prends-en-charge-2 rubik-light-white-22px">
          Je prends en charge votre produit et accompagne vos équipes de développement et de design pour que, tous
          ensemble, nous atteignons vos objectifs.
        </p>
      </div>
    </div>
    <div class="page-indicator">
      <div class="ellipse-3"></div>
      <div class="ellipse-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Caroussel2",
};
</script>

<style>
.caroussel_2-2,
.caroussel_2-3,
.caroussel_2-4,
.caroussel_2-5,
.caroussel_2-6,
.caroussel_2-7 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 600px;
}

.caroussel-2,
.caroussel-3,
.caroussel-4,
.caroussel-5,
.caroussel-6,
.caroussel-7 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 30px;
  position: relative;
  width: 100%;
}

.home_section_1_text_1-2,
.home_section_1_text_1-3,
.home_section_1_text_1-4,
.home_section_1_text_1-5,
.home_section_1_text_1-6,
.home_section_1_text_1-7 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 30px;
  min-width: 400px;
  position: relative;
}

.librez-le-potentiel-2,
.librez-le-potentiel-3,
.librez-le-potentiel-4,
.librez-le-potentiel-5,
.librez-le-potentiel-6,
.librez-le-potentiel-7 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.je-prends-en-charge-2,
.je-prends-en-charge-3,
.je-prends-en-charge-4,
.je-prends-en-charge-5,
.je-prends-en-charge-6,
.je-prends-en-charge-7 {
  align-self: stretch;
  letter-spacing: -0.24px;
  line-height: 33px;
  position: relative;
}

.page-indicator,
.page-indicator-1,
.page-indicator-2,
.page-indicator-3,
.page-indicator-4,
.page-indicator-5 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 38px;
}

.ellipse-3,
.ellipse-3-1,
.ellipse-3-2,
.ellipse-3-3,
.ellipse-3-4,
.ellipse-3-5 {
  background-color: var(--hippie-blue);
  border-radius: 6px;
  height: 12px;
  position: relative;
  width: 12px;
}

.ellipse-4,
.ellipse-4-1,
.ellipse-4-2,
.ellipse-4-3,
.ellipse-4-4,
.ellipse-4-5 {
  background-color: var(--link-water);
  border-radius: 6px;
  height: 12px;
  position: relative;
  width: 12px;
}
</style>
