<template>
  <div class="line-4">
    <checkbox22 />
    <p class="vous rubik-light-shark-24px">{{ vousAvezDesObject }}</p>
  </div>
</template>

<script>
import Checkbox22 from "./Checkbox22";
export default {
  name: "Line3",
  components: {
    Checkbox22,
  },
  props: ["vousAvezDesObject"],
};
</script>

<style>
.line-4 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 32px;
  position: relative;
  width: 100%;
}

.vous {
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}
</style>
