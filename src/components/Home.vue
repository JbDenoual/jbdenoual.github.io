<template>
  <div class="home screen"><global-home2 v-bind="globalHome2Props" /></div>
</template>

<script>
import GlobalHome2 from "./GlobalHome2";
export default {
  name: "Home",
  components: {
    GlobalHome2,
  },
  props: ["globalHome2Props"],
};
</script>

<style>
.home {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
