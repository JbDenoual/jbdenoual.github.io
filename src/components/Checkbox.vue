<template>
  <div :class="[`checkbox-2`, className || ``]"></div>
</template>

<script>
export default {
  name: "Checkbox",
  props: ["className"],
};
</script>

<style>
.checkbox-2 {
  background-image: url(https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67e80fd1e86bdee6f8bb7528/img/checkbox-1.svg);
  background-size: 100% 100%;
  height: 53px;
  margin-top: 3.59px;
  width: 52px;
}

.checkbox-2.checkbox-1 {
  align-self: flex-end;
  margin-bottom: -0.16px;
  margin-top: unset;
}

.checkbox-2.checkbox-3 {
  margin-bottom: 10.01px;
  margin-top: unset;
}
</style>
