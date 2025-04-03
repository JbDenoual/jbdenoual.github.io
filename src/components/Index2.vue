<template>
  <div class="index-2 screen"><global-home2 v-bind="globalHome2Props" /></div>
</template>

<script>
import GlobalHome2 from "./GlobalHome2";
export default {
  name: "Index2",
  components: {
    GlobalHome2,
  },
  props: ["globalHome2Props"],
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
