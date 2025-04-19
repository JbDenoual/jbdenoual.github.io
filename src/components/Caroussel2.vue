<template>
  <div class="caroussel_2"><caroussel :librezLePotentiel="carousselProps.librezLePotentiel" /></div>
</template>

<script>
import Caroussel from "./Caroussel";
export default {
  name: "Caroussel2",
  components: {
    Caroussel,
  },
  props: ["carousselProps"],
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
</style>
