<template>
  <div :class="[`line-4`, className || ``]">
    <checkbox2 />
    <p class="votre rubik-light-shark-24px">{{ votreQuotidienNeV }}</p>
  </div>
</template>

<script>
import Checkbox2 from "./Checkbox2";
export default {
  name: "Line2",
  components: {
    Checkbox2,
  },
  props: ["votreQuotidienNeV", "className"],
};
</script>

<style>
.line-4 {
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

.line-4.line-5,
.line-4.line-7 {
  gap: 32px;
}
</style>
