<template>
  <div class="group-1-1">
    <div class="overlap-group-25">
      <div class="rectangle-31-8"></div>
      <div class="rectangle-30-19"></div>
      <p class="apprendre-prioriser-selon-la-valeur">{{ apprendrePrioriserSelonLaValeur }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group11",
  props: ["apprendrePrioriserSelonLaValeur"],
};
</script>

<style>
.group-1-1 {
  height: 237.56px;
  position: relative;
  width: 294.35px;
}

.overlap-group-25 {
  height: 238px;
  position: relative;
  width: 292px;
}

.rectangle-31-8 {
  background-color: var(--hippie-blue);
  height: 226px;
  left: 8px;
  position: absolute;
  top: 12px;
  width: 284px;
}

.rectangle-30-19 {
  background-color: var(--link-water);
  height: 226px;
  left: 0;
  position: absolute;
  top: 0;
  width: 284px;
}

.apprendre-prioriser-selon-la-valeur,
.adapter-votre-postur,
.booster-les-soft-skills-du-pm {
  left: 26px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 95px;
  width: 241px;
}
</style>
