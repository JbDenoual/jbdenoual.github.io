<template>
  <div :class="[`pm_b1`, className || ``]">
    <img
      class="x-4"
      src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fe4f74e6d4840876cfaa/img/----4@2x.png"
      alt="--&gt;"
    />
  </div>
</template>

<script>
export default {
  name: "HomeOffer11",
  props: ["className"],
};
</script>

<style>
.pm_b1 {
  background-color: var(--red-damask);
  border-radius: 100px;
  display: flex;
  height: 64px;
  left: 64px;
  position: absolute;
  top: 209px;
  width: 170px;
}

.x-4 {
  height: 26.51px;
  margin-left: 65.6px;
  margin-top: 19px;
  width: 44.69px;
}

.pm_b1.pm_b {
  top: 168px;
}
</style>
