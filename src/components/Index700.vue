<template>
  <div class="index-u40700u41 screen"><global-home3 v-bind="globalHome3Props" /></div>
</template>

<script>
import GlobalHome3 from "./GlobalHome3";
export default {
  name: "Index700",
  components: {
    GlobalHome3,
  },
  props: ["globalHome3Props"],
};
</script>

<style>
.index-u40700u41 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
