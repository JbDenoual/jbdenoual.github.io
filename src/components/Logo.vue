<template>
  <div class="logo-1">
    <div class="star">
      <div class="polygon-container">
        <img
          class="polygon-1"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67eea419e98caa0bd1212482/img/polygon-1.svg"
          alt="Polygon 1"
        />
        <img
          class="polygon-2"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67eea419e98caa0bd1212482/img/polygon-2.svg"
          alt="Polygon 2"
        />
        <img
          class="polygon-3"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67eea419e98caa0bd1212482/img/polygon-3.svg"
          alt="Polygon 3"
        />
        <img
          class="polygon-4"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67eea419e98caa0bd1212482/img/polygon-4.svg"
          alt="Polygon 4"
        />
        <img
          class="polygon-5"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67eea419e98caa0bd1212482/img/polygon-5.svg"
          alt="Polygon 5"
        />
        <img
          class="polygon-6"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67eea419e98caa0bd1212482/img/polygon-6.svg"
          alt="Polygon 6"
        />
        <img
          class="polygon-7"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67eea419e98caa0bd1212482/img/polygon-7.svg"
          alt="Polygon 7"
        />
        <img
          class="polygon-8"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67eea419e98caa0bd1212482/img/polygon-8.svg"
          alt="Polygon 8"
        />
      </div>
    </div>
    <div class="logo-2">
      <div class="logo-3">
        <img class="jb" :src="jb" alt="JB" /><img class="denoual" :src="denoual" alt="Denoual" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: ["jb", "denoual"],
};
</script>

<style>
.logo-1,
.logo-4,
.logo-7,
.logo-10 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 63.13px;
}

.star,
.star-1,
.star-2,
.star-3 {
  height: 14.33px;
  position: relative;
  width: 14.33px;
}

.polygon-container,
.polygon-container-1,
.polygon-container-2,
.polygon-container-3 {
  height: 14px;
  position: relative;
  width: 14px;
}

.polygon-1,
.polygon-1-1,
.polygon-1-2,
.polygon-1-3 {
  height: 8px;
  left: 6px;
  position: absolute;
  top: 0;
  width: 1px;
}

.polygon-2,
.polygon-2-1,
.polygon-2-2,
.polygon-2-3 {
  height: 8px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 1px;
}

.polygon-3,
.polygon-3-1,
.polygon-3-2,
.polygon-3-3 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 6px;
  width: 8px;
}

.polygon-4,
.polygon-4-1,
.polygon-4-2,
.polygon-4-3 {
  height: 1px;
  left: 7px;
  position: absolute;
  top: 6px;
  width: 8px;
}

.polygon-5,
.polygon-5-1,
.polygon-5-2,
.polygon-5-3 {
  height: 4px;
  left: 7px;
  position: absolute;
  top: 4px;
  width: 4px;
}

.polygon-6,
.polygon-6-1,
.polygon-6-2,
.polygon-6-3 {
  height: 4px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 4px;
}

.polygon-7,
.polygon-7-1,
.polygon-7-2,
.polygon-7-3 {
  height: 4px;
  left: 4px;
  position: absolute;
  top: 7px;
  width: 4px;
}

.polygon-8,
.polygon-8-1,
.polygon-8-2,
.polygon-8-3 {
  height: 4px;
  left: 4px;
  position: absolute;
  top: 4px;
  width: 4px;
}

.logo-2,
.logo-5,
.logo-8,
.logo-11 {
  height: 48.04px;
  position: relative;
  width: 63.13px;
}

.logo-3,
.logo-6,
.logo-9,
.logo-12 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-height: 48px;
  width: 63px;
}

.jb,
.jb-1,
.jb-2,
.jb-3,
.jb-4,
.jb-5,
.jb-6,
.jb-7 {
  height: 34px;
  margin-left: 1.96px;
  width: 61px;
}

.denoual,
.denoual-1,
.denoual-2,
.denoual-3 {
  height: 11px;
  width: 60px;
}
</style>
