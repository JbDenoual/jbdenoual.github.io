<template>
  <div class="home_section_5">
    <p class="les-principes-qui-gu inferi-trial-regular-normal-midnight-blue-47px">
      Les principes qui guident mon quotidien en tant que Product
    </p>
    <div class="home_principles">
      <div class="principle">
        <principle1 />
        <principle2 :surname="principle21Props.surname" />
        <principle3 />
      </div>
      <div class="principle">
        <principle2 :surname="principle22Props.surname" />
        <principle5 />
      </div>
    </div>
  </div>
</template>

<script>
import Principle1 from "./Principle1";
import Principle2 from "./Principle2";
import Principle3 from "./Principle3";
import Principle5 from "./Principle5";
export default {
  name: "HomeSection5",
  components: {
    Principle1,
    Principle2,
    Principle3,
    Principle5,
  },
  props: ["principle21Props", "principle22Props"],
};
</script>

<style>
.home_section_5,
.home_section_5-1,
.home_section_5-2,
.home_section_5-3 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 75px;
  position: relative;
  width: 100%;
}

.les-principes-qui-gu,
.les-principes-qui-gu-1,
.les-principes-qui-gu-2,
.les-principes-qui-gu-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.home_principles,
.home_principles-1,
.home_principles-2,
.home_principles-3 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
}

.principle,
.principle-1,
.principle-2,
.principle-3 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 0px 0px;
  justify-content: center;
  position: relative;
  width: 100%;
}
</style>
