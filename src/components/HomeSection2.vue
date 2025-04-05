<template>
  <div class="home_section_2-4">
    <div class="home_section_2_1-4">
      <home2-left :className="home2LeftProps.className" />
      <home2-right />
    </div>
  </div>
</template>

<script>
import Home2Left from "./Home2Left";
import Home2Right from "./Home2Right";
export default {
  name: "HomeSection2",
  components: {
    Home2Left,
    Home2Right,
  },
  props: ["home2LeftProps"],
};
</script>

<style>
.home_section_2-4,
.home_section_2-5,
.home_section_2-6 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 53px 53px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.home_section_2_1-4,
.home_section_2_1-5,
.home_section_2_1-6 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 53px 53px;
  justify-content: center;
  position: relative;
}
</style>
