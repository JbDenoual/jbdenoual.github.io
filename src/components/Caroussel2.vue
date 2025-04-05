<template>
  <div class="caroussel_2">
    <div class="caroussel">
      <div class="home_section_1_text_1">
        <p class="librez-le-potentiel inferi-regular-normal-white-45px">
          Libérez le potentiel de votre <br />produit grâce à une expertise Delivery et Discovery
        </p>
        <p class="je-prends-en-charge rubik-light-white-22px">
          Je prends en charge votre produit et accompagne vos équipes de développement et de design pour que, tous
          ensemble, nous atteignons vos objectifs.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Caroussel2",
};
</script>

<style>
.caroussel_2,
.caroussel_2-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 0px 10px;
  position: relative;
  width: 100%;
}

.caroussel,
.caroussel-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 30px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.home_section_1_text_1,
.home_section_1_text_1-1 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 30px;
  position: relative;
}

.librez-le-potentiel,
.librez-le-potentiel-1 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.je-prends-en-charge,
.je-prends-en-charge-1 {
  align-self: stretch;
  letter-spacing: -0.24px;
  line-height: 33px;
  position: relative;
}
</style>
