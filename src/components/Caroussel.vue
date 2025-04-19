<template>
  <div :class="[`caroussel`, className || ``]">
    <div class="home_section_1_text_1">
      <p class="librez-le-potentiel inferi-regular-normal-white-45px" v-html="librezLePotentiel"></p>
      <p class="je-prends-en-charge rubik-light-white-22px">
        Je prends en charge votre produit et accompagne vos équipes de développement et de design pour que, tous
        ensemble, nous atteignons vos objectifs.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Caroussel",
  props: ["librezLePotentiel", "className"],
};
</script>

<style>
.caroussel {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 30px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.home_section_1_text_1 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 30px;
  position: relative;
}

.librez-le-potentiel {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.je-prends-en-charge {
  align-self: stretch;
  letter-spacing: -0.24px;
  line-height: 33px;
  position: relative;
}

.caroussel.caroussel-2 {
  justify-content: unset;
}

.caroussel.caroussel-2 .home_section_1_text_1 {
  align-items: flex-start;
  min-width: 400px;
}
</style>
