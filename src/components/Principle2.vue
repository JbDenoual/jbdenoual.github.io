<template>
  <div class="principle-4">
    <div class="overlap-group-8">
      <div class="rectangle-30-5"></div>
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
.principle-4,
.principle-5,
.principle-6,
.principle-7,
.principle-8 {
  height: 355.13px;
  position: relative;
  width: 357.13px;
}

.overlap-group-8,
.overlap-group-9,
.overlap-group-10,
.overlap-group-11,
.overlap-group-12 {
  height: 355px;
  position: relative;
  width: 355px;
}

.rectangle-30-5,
.rectangle-30-6,
.rectangle-30-7,
.rectangle-30-8,
.rectangle-30-9 {
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
.bien-comprendre-le-p-2,
.surname-3,
.bien-comprendre-le-p-3,
.surname-4,
.bien-comprendre-le-p-4 {
  left: 53px;
  letter-spacing: -0.22px;
  line-height: 30px;
  position: absolute;
  text-align: center;
  top: 118px;
  width: 249px;
}
</style>
