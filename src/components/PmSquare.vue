<template>
  <div :class="[`pm_square-1-1`, className || ``]">
    <div class="overlap-group-26">
      <div class="rectangle-31-6"></div>
      <div class="rectangle-30-17"></div>
      <p class="construire-une-strat inter-medium-midnight-blue-16px">{{ construireUneStrat }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PmSquare",
  props: ["construireUneStrat", "className"],
};
</script>

<style>
.pm_square-1-1 {
  height: 237.56px;
  position: relative;
  width: 294.35px;
}

.overlap-group-26 {
  height: 238px;
  position: relative;
  width: 292px;
}

.rectangle-31-6 {
  background-color: var(--macaroni-and-cheese);
  height: 226px;
  left: 8px;
  position: absolute;
  top: 12px;
  width: 284px;
}

.rectangle-30-17 {
  background-color: var(--negroni);
  height: 226px;
  left: 0;
  position: absolute;
  top: 0;
  width: 284px;
}

.construire-une-strat {
  left: 13px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 71px;
  width: 258px;
}

.pm_square-1-1.pm_square-2 {
  width: 294.35px;
}

.pm_square-1-1.pm_square-1-2 .construire-une-strat,
.pm_square-1-1.pm_square-1 .construire-une-strat {
  top: 70px;
}
</style>
