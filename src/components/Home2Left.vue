<template>
  <div :class="[`home_2_left-1`, className || ``]">
    <h1 class="une-approche-centre-1 inferi-regular-normal-midnight-blue-47px">
      Une approche centrée sur les Hard Skills du PM
    </h1>
    <p class="si-jai-pu-voir-pl-1 inferi-regular-normal-midnight-blue-26px">
      « Si j’ai pu voir plus loin, c’est en me tenant sur les épaules de géants. » -- Isaac Newton
    </p>
  </div>
</template>

<script>
export default {
  name: "Home2Left",
  props: ["className"],
};
</script>

<style>
.home_2_left-1 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 56px;
  justify-content: center;
  max-width: 400px;
  min-width: 350px;
  position: relative;
}

.une-approche-centre-1 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.si-jai-pu-voir-pl-1 {
  align-self: stretch;
  letter-spacing: -0.49px;
  line-height: 39px;
  position: relative;
}

.home_2_left-1.home_2_left-2,
.home_2_left-1.home_2_left-3,
.home_2_left-1.home_2_left-4,
.home_2_left-1.home_2_left-5,
.home_2_left-1.home_2_left-6,
.home_2_left-1.home_2_left-7 {
  flex: unset;
  flex-grow: unset;
  min-width: unset;
  width: 400px;
}
</style>
