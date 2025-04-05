<template>
  <div class="group">
    <div class="overlap-group-42">
      <div class="rectangle-31-10"></div>
      <div class="rectangle-30-41"></div>
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
.group,
.group-1 {
  height: 237.56px;
  position: relative;
  width: 296.35px;
}

.overlap-group-42,
.overlap-group-43 {
  height: 238px;
  position: relative;
  width: 292px;
}

.rectangle-31-10,
.rectangle-31-11 {
  background-color: var(--macaroni-and-cheese);
  height: 226px;
  left: 8px;
  position: absolute;
  top: 12px;
  width: 284px;
}

.rectangle-30-41,
.rectangle-30-42 {
  background-color: var(--negroni);
  height: 226px;
  left: 0;
  position: absolute;
  top: 0;
  width: 284px;
}

.animer-des-sessions,
.raliser-un-talk-sur,
.animer-des-sessions-1,
.raliser-un-talk-sur-1 {
  left: 28px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  top: 96px;
  width: 237px;
}

.x-par-mois,
.x-par-mois-1 {
  left: 55px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 30px;
  width: 173px;
}
</style>
