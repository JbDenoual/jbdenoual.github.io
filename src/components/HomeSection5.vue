<template>
  <div class="home_section_5-1">
    <p class="les-principes-qui-gu-1 inferi-regular-normal-midnight-blue-47px">
      Les principes qui guident mon quotidien en tant que Product
    </p>
    <div class="home_principles-1">
      <div class="principle-4">
        <principle1 />
        <principle2 :surname="principle21Props.surname" />
        <principle3 />
      </div>
      <div class="principle-4">
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
.home_section_5-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 75px;
  position: relative;
  width: 100%;
}

.les-principes-qui-gu-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.home_principles-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
}

.principle-4 {
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
