<template>
  <div class="left-1"><h1 class="title">Laissez moi deviner...</h1></div>
</template>

<script>
export default {
  name: "Left",
};
</script>

<style>
.left-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  position: relative;
  width: 100%;
}

.title {
  color: var(--red-damask);
  font-family: var(--font-family-inferi-trial-regular);
  font-size: 64px;
  font-weight: 400;
  letter-spacing: -1.41px;
  line-height: 96px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 1093px;
}
</style>
