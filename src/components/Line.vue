<template>
  <div :class="[`line`, className || ``]">
    <checkbox />
    <p class="votre-quipe-produit rubik-light-shark-24px">{{ votreQuipeProduit }}</p>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Line",
  components: {
    Checkbox,
  },
  props: ["votreQuipeProduit", "className"],
};
</script>

<style>
.line {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 31px;
  position: relative;
  width: 100%;
}

.votre-quipe-produit {
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}

.line.line-1 {
  gap: 32px;
}
</style>
