<template>
  <div class="index-1 screen"><global-home v-bind="globalHomeProps" /></div>
</template>

<script>
import GlobalHome from "./GlobalHome";
export default {
  name: "Index",
  components: {
    GlobalHome,
  },
  props: ["globalHomeProps"],
};
</script>

<style>
.index-1 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
