<template>
  <div :class="[`checkbox-3`, className || ``]"></div>
</template>

<script>
export default {
  name: "Checkbox2",
  props: ["className"],
};
</script>

<style>
.checkbox-3 {
  background-image: url(https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fe4f74e6d4840876cfaa/img/checkbox-1@2x.png);
  background-size: 100% 100%;
  height: 53px;
  margin-top: 3.59px;
  width: 52px;
}

.checkbox-3.checkbox-2 {
  align-self: flex-end;
  margin-bottom: -0.16px;
  margin-top: unset;
}

.checkbox-3.checkbox-4 {
  margin-bottom: 10.01px;
  margin-top: unset;
}
</style>
