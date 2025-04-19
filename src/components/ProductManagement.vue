<template>
  <div class="product-management screen"><pm-global1 v-bind="pmGlobal1Props" /></div>
</template>

<script>
import PmGlobal1 from "./PmGlobal1";
export default {
  name: "ProductManagement",
  components: {
    PmGlobal1,
  },
  props: ["pmGlobal1Props"],
};
</script>

<style>
.product-management {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
