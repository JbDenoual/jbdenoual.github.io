<template>
  <div class="section_3">
    <div class="frame-11">
      <div class="product-ops-6 inferi-regular-normal-midnight-blue-47px">Product Ops</div>
      <p class="une-approche-varie inferi-trial-regular-normal-shark-32px">
        Une approche variée et multiple pour créer une culture de recherche d’excellence et d’entraide
      </p>
    </div>
    <div class="frame-12">
      <group9 :animerDesSessions="group91Props.animerDesSessions" :x2XParMois="group91Props.x2XParMois" />
      <group9 :animerDesSessions="group92Props.animerDesSessions" :x2XParMois="group92Props.x2XParMois" />
      <div class="group-11">
        <div class="overlap-group2-7">
          <div class="rectangle-31-4"></div>
          <div class="rectangle-30-24"></div>
          <p class="mettre-en-place-des-1 rubik-light-red-damask-16px">{{ mettreEnPlaceDes }}</p>
          <div class="en-continue rubik-normal-red-damask-28px">EN CONTINUE</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Group9 from "./Group9";
export default {
  name: "Section3",
  components: {
    Group9,
  },
  props: ["mettreEnPlaceDes", "group91Props", "group92Props"],
};
</script>

<style>
.section_3,
.section_3-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 90px;
  position: relative;
  width: 100%;
}

.frame-11,
.frame-11-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}

.product-ops-6,
.product-ops-7 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.une-approche-varie,
.une-approche-varie-1 {
  align-self: stretch;
  letter-spacing: -0.7px;
  line-height: 48px;
  position: relative;
  text-align: center;
}

.frame-12,
.frame-12-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 89.65px 89.65px;
  justify-content: center;
  padding: 0px 18.32px;
  position: relative;
  width: 100%;
}

.group-11,
.group-11-1 {
  height: 237.56px;
  position: relative;
  width: 296.35px;
}

.overlap-group2-7,
.overlap-group2-8 {
  height: 238px;
  position: relative;
  width: 292px;
}

.rectangle-31-4,
.rectangle-31-5 {
  background-color: var(--macaroni-and-cheese);
  height: 226px;
  left: 8px;
  position: absolute;
  top: 12px;
  width: 284px;
}

.rectangle-30-24,
.rectangle-30-25 {
  background-color: var(--negroni);
  height: 226px;
  left: 0;
  position: absolute;
  top: 0;
  width: 284px;
}

.mettre-en-place-des-1,
.mettre-en-place-des-2 {
  left: 28px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  top: 96px;
  width: 237px;
}

.en-continue,
.en-continue-1 {
  left: 52px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 30px;
  width: 188px;
}
</style>
