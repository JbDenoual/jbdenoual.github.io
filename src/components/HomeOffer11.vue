<template>
  <div :class="[`pm_b1`, className || ``]">
    <img
      class="x-4"
      src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67e80fd1e86bdee6f8bb7528/img/---.svg"
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
  align-items: flex-end;
  background-color: var(--red-damask);
  border-radius: 100px;
  display: flex;
  height: 64px;
  justify-content: flex-end;
  left: 64px;
  min-width: 170px;
  padding: 18.5px 60.2px;
  position: absolute;
  top: 209px;
}

.x-4 {
  height: 27px;
  width: 45px;
}

.pm_b1.pm_b {
  top: 168px;
}
</style>
