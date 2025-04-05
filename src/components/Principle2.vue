<template>
  <div class="principle-1">
    <div class="overlap-group-7">
      <div class="rectangle-30-3"></div>
      <p class="surname rubik-normal-orange-20px">{{ surname }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Principle2",
  props: ["surname"],
};
</script>

<style>
.principle-1,
.principle-2,
.principle-3 {
  height: 355.13px;
  position: relative;
  width: 357.13px;
}

.overlap-group-7,
.overlap-group-8,
.overlap-group-9 {
  height: 355px;
  position: relative;
  width: 355px;
}

.rectangle-30-3,
.rectangle-30-4,
.rectangle-30-5 {
  background-color: var(--negroni);
  height: 251px;
  left: 52px;
  position: absolute;
  top: 52px;
  transform: rotate(-45deg);
  width: 251px;
}

.surname,
.bien-comprendre-le-p,
.surname-1,
.bien-comprendre-le-p-1,
.surname-2,
.bien-comprendre-le-p-2 {
  left: 53px;
  letter-spacing: -0.22px;
  line-height: 30px;
  position: absolute;
  text-align: center;
  top: 118px;
  width: 249px;
}
</style>
