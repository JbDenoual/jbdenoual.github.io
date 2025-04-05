<template>
  <div class="home-u40700u41 screen"><global-home v-bind="globalHomeProps" /></div>
</template>

<script>
import GlobalHome from "./GlobalHome";
export default {
  name: "Home700",
  components: {
    GlobalHome,
  },
  props: ["globalHomeProps"],
};
</script>

<style>
.home-u40700u41 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
