<template>
  <div :class="[`group-2-1`, className || ``]">
    <div class="overlap-group-46">
      <div class="rectangle-31-14"></div>
      <div class="rectangle-30-45"></div>
      <p class="passer-dun-mindset">{{ passerDunMindset }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group92",
  props: ["passerDunMindset", "className"],
};
</script>

<style>
.group-2-1 {
  height: 237.56px;
  position: relative;
  width: 294.35px;
}

.overlap-group-46 {
  height: 238px;
  position: relative;
  width: 292px;
}

.rectangle-31-14 {
  background-color: var(--hippie-blue);
  height: 226px;
  left: 8px;
  position: absolute;
  top: 12px;
  width: 284px;
}

.rectangle-30-45 {
  background-color: var(--link-water);
  height: 226px;
  left: 0;
  position: absolute;
  top: 0;
  width: 284px;
}

.passer-dun-mindset {
  left: 26px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 83px;
  width: 241px;
}
</style>
