<template>
  <div class="checkbox">
    <div class="overlap-group-22">
      <div class="rectangle-33"></div>
      <div class="rectangle-32"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
};
</script>

<style>
.checkbox {
  height: 54px;
  position: relative;
  width: 53px;
}

.overlap-group-22 {
  height: 54px;
  position: relative;
}

.rectangle-33 {
  background-color: var(--hippie-blue);
  height: 50px;
  left: 3px;
  position: absolute;
  top: 4px;
  width: 50px;
}

.rectangle-32 {
  background-color: var(--link-water);
  height: 50px;
  left: 0;
  position: absolute;
  top: 0;
  width: 50px;
}
</style>
