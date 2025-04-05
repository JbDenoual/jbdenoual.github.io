<template>
  <div class="index screen">
    <global-home4
      :homeSection2Props="globalHome4Props.homeSection2Props"
      :aboutPictureProps="globalHome4Props.aboutPictureProps"
      :homeSection5Props="globalHome4Props.homeSection5Props"
    />
  </div>
</template>

<script>
import GlobalHome4 from "./GlobalHome4";
export default {
  name: "Index",
  components: {
    GlobalHome4,
  },
  props: ["globalHome4Props"],
};
</script>

<style>
.index {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
