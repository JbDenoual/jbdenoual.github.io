<template>
  <div class="group">
    <div class="overlap-group-23">
      <div class="rectangle-31-6"></div>
      <div class="rectangle-30-17"></div>
      <p class="animer-des-sessions rubik-light-red-damask-16px">{{ animerDesSessions }}</p>
      <div class="x-par-mois rubik-normal-red-damask-28px">{{ x2XParMois }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group9",
  props: ["animerDesSessions", "x2XParMois"],
};
</script>

<style>
.group {
  height: 237.56px;
  position: relative;
  width: 296.35px;
}

.overlap-group-23 {
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

.animer-des-sessions,
.raliser-un-talk-sur {
  left: 28px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  top: 96px;
  width: 237px;
}

.x-par-mois {
  left: 55px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 30px;
  width: 173px;
}
</style>
