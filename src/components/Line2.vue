<template>
  <div :class="[`line-2`, className || ``]">
    <checkbox />
    <p class="votre rubik-light-shark-24px">{{ votreQuotidienNeV }}</p>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Line2",
  components: {
    Checkbox,
  },
  props: ["votreQuotidienNeV", "className"],
};
</script>

<style>
.line-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 31px;
  position: relative;
  width: 100%;
}

.votre {
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.line-2.line-3 {
  gap: 32px;
}
</style>
