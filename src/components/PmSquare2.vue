<template>
  <div :class="[`pm_square-4`, className || ``]">
    <div class="overlap-group-34">
      <div class="rectangle-31-12"></div>
      <div class="rectangle-30-23"></div>
      <p class="comprendre-votre-mt inter-medium-midnight-blue-16px">{{ comprendreVotreMt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PmSquare2",
  props: ["comprendreVotreMt", "className"],
};
</script>

<style>
.pm_square-4 {
  height: 237.56px;
  position: relative;
  width: 294.35px;
}

.overlap-group-34 {
  height: 238px;
  position: relative;
  width: 292px;
}

.rectangle-31-12 {
  background-color: var(--macaroni-and-cheese);
  height: 226px;
  left: 8px;
  position: absolute;
  top: 12px;
  width: 284px;
}

.rectangle-30-23 {
  background-color: var(--negroni);
  height: 226px;
  left: 0;
  position: absolute;
  top: 0;
  width: 284px;
}

.comprendre-votre-mt {
  left: 13px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 83px;
  width: 258px;
}

.pm_square-4.pm_square-3,
.pm_square-4.pm_square-3-1 {
  width: 294.35px;
}

.pm_square-4.pm_square-3 .comprendre-votre-mt {
  top: 82px;
}
</style>
