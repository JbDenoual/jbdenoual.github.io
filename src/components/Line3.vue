<template>
  <div class="line-6">
    <checkbox2 />
    <p class="vous rubik-light-shark-24px">{{ vousAvezDesObject }}</p>
  </div>
</template>

<script>
import Checkbox2 from "./Checkbox2";
export default {
  name: "Line3",
  components: {
    Checkbox2,
  },
  props: ["vousAvezDesObject"],
};
</script>

<style>
.line-6,
.line-8 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 32px;
  position: relative;
  width: 100%;
}

.vous,
.vous-avez-des-object {
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}
</style>
