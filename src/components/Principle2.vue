<template>
  <div class="principle-1">
    <div class="overlap-group-12">
      <div class="rectangle-30-8"></div>
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
.principle-3,
.principle-4,
.principle-5,
.principle-6,
.principle-7,
.principle-8 {
  height: 355.13px;
  position: relative;
  width: 357.13px;
}

.overlap-group-12,
.overlap-group-13,
.overlap-group-14,
.overlap-group-15,
.overlap-group-16,
.overlap-group-17,
.overlap-group-18,
.overlap-group-19 {
  height: 355px;
  position: relative;
  width: 355px;
}

.rectangle-30-8,
.rectangle-30-9,
.rectangle-30-10,
.rectangle-30-11,
.rectangle-30-12,
.rectangle-30-13,
.rectangle-30-14,
.rectangle-30-15 {
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
.bien-comprendre-le-p-4,
.surname-5,
.bien-comprendre-le-p-5,
.surname-6,
.bien-comprendre-le-p-6,
.surname-7,
.bien-comprendre-le-p-7 {
  left: 53px;
  letter-spacing: -0.22px;
  line-height: 30px;
  position: absolute;
  text-align: center;
  top: 118px;
  width: 249px;
}
</style>
