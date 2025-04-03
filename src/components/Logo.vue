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
.logo-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 63.13px;
}

.star {
  height: 14.33px;
  position: relative;
  width: 14.33px;
}

.polygon-container {
  height: 14px;
  position: relative;
  width: 14px;
}

.polygon-1 {
  height: 8px;
  left: 6px;
  position: absolute;
  top: 0;
  width: 1px;
}

.polygon-2 {
  height: 8px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 1px;
}

.polygon-3 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 6px;
  width: 8px;
}

.polygon-4 {
  height: 1px;
  left: 7px;
  position: absolute;
  top: 6px;
  width: 8px;
}

.polygon-5 {
  height: 4px;
  left: 7px;
  position: absolute;
  top: 4px;
  width: 4px;
}

.polygon-6 {
  height: 4px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 4px;
}

.polygon-7 {
  height: 4px;
  left: 4px;
  position: absolute;
  top: 7px;
  width: 4px;
}

.polygon-8 {
  height: 4px;
  left: 4px;
  position: absolute;
  top: 4px;
  width: 4px;
}

.logo-2 {
  height: 48.04px;
  position: relative;
  width: 63.13px;
}

.logo-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-height: 48px;
  width: 63px;
}

.jb,
.jb-1 {
  height: 34px;
  margin-left: 1.96px;
  width: 61px;
}

.denoual {
  height: 11px;
  width: 60px;
}
</style>
