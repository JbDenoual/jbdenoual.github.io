<template>
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
</template>

<script>
import Principle1 from "./Principle1";
import Principle2 from "./Principle2";
import Principle3 from "./Principle3";
import Principle5 from "./Principle5";
export default {
  name: "HomePrinciples",
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
.home_principles {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
}

.principle {
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
