<template>
  <div :class="[`logo-1-1`, className || ``]">
    <div class="star">
      <div class="polygon-container">
        <img
          class="polygon-1"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fe4f74e6d4840876cfaa/img/polygon-1@2x.png"
          alt="Polygon 1"
        />
        <img
          class="polygon-2"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fe4f74e6d4840876cfaa/img/polygon-2@2x.png"
          alt="Polygon 2"
        />
        <img
          class="polygon-3"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fe4f74e6d4840876cfaa/img/polygon-3@2x.png"
          alt="Polygon 3"
        />
        <img
          class="polygon-4"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fe4f74e6d4840876cfaa/img/polygon-4@2x.png"
          alt="Polygon 4"
        />
        <img
          class="polygon-5"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fe4f74e6d4840876cfaa/img/polygon-5@2x.png"
          alt="Polygon 5"
        />
        <img
          class="polygon-6"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fe4f74e6d4840876cfaa/img/polygon-6@2x.png"
          alt="Polygon 6"
        />
        <img
          class="polygon-7"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fe4f74e6d4840876cfaa/img/polygon-7@2x.png"
          alt="Polygon 7"
        />
        <img
          class="polygon-8"
          src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fe4f74e6d4840876cfaa/img/polygon-8@2x.png"
          alt="Polygon 8"
        />
      </div>
    </div>
    <div class="logo-2">
      <div class="logo-3">
        <img class="jb" :src="jb" alt="JB" /><img class="denoual-1" :src="denoual" alt="Denoual" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: ["jb", "denoual", "className"],
};
</script>

<style>
.logo-1-1 {
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
  display: flex;
  flex-direction: column;
  gap: 3.1px;
  height: 48px;
  width: 63px;
}

.jb {
  height: 34.2px;
  margin-left: 2px;
  width: 61.17px;
}

.denoual-1 {
  height: 10.78px;
  width: 59.82px;
}

.logo-1-1.logo-1 .jb {
  height: 34.2px;
}

.logo-1-1.logo-1 .denoual-1 {
  height: 10.78px;
}

.logo-1-1.logo-4-1 .logo-3,
.logo-1-1.logo-4 .logo-3 {
  align-items: flex-start;
  gap: 3px;
  height: unset;
  min-height: 48px;
}

.logo-1-1.logo-4-1 .jb,
.logo-1-1.logo-4 .jb {
  height: 34px;
  margin-left: 1.96px;
  width: 61px;
}

.logo-1-1.logo-4-1 .denoual-1,
.logo-1-1.logo-4 .denoual-1 {
  height: 11px;
  width: 60px;
}
</style>
