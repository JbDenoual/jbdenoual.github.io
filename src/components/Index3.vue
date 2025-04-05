<template>
  <div class="index-2 screen"><global-home5 v-bind="globalHome5Props" /></div>
</template>

<script>
import GlobalHome5 from "./GlobalHome5";
export default {
  name: "Index3",
  components: {
    GlobalHome5,
  },
  props: ["globalHome5Props"],
};
</script>

<style>
.index-2 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
