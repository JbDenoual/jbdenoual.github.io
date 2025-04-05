<template>
  <div class="frame-9 inter-medium-midnight-blue-16px">
    <group92 :passerDunMindset="group921Props.passerDunMindset" />
    <div class="group-1-1">
      <div class="overlap-group-44">
        <div class="rectangle-31-12"></div>
        <div class="rectangle-30-43"></div>
        <p class="developper-les-pilie" v-html="developperLesPilie"></p>
      </div>
    </div>
    <group92 :passerDunMindset="group922Props.passerDunMindset" />
    <group11 :apprendrePrioriserSelonLaValeur="group111Props.apprendrePrioriserSelonLaValeur" />
    <group92 :passerDunMindset="group923Props.passerDunMindset" :className="group923Props.className" />
    <div class="group-1-1">
      <div class="overlap-group-44">
        <div class="rectangle-31-12"></div>
        <div class="rectangle-30-43"></div>
        <p class="identifier-les-probl">{{ identifierLesProbl }}</p>
      </div>
    </div>
    <group92 :passerDunMindset="group924Props.passerDunMindset" :className="group924Props.className" />
    <group11 :apprendrePrioriserSelonLaValeur="group112Props.apprendrePrioriserSelonLaValeur" />
    <group11 :apprendrePrioriserSelonLaValeur="group113Props.apprendrePrioriserSelonLaValeur" />
  </div>
</template>

<script>
import Group92 from "./Group92";
import Group11 from "./Group11";
export default {
  name: "Frame9",
  components: {
    Group92,
    Group11,
  },
  props: [
    "developperLesPilie",
    "identifierLesProbl",
    "group921Props",
    "group922Props",
    "group111Props",
    "group923Props",
    "group924Props",
    "group112Props",
    "group113Props",
  ],
};
</script>

<style>
.frame-9,
.frame-9-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 90.44px 89.65px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.group-1-1,
.group-1-2 {
  height: 237.56px;
  position: relative;
  width: 294.35px;
}

.overlap-group-44,
.overlap-group-45 {
  height: 238px;
  position: relative;
  width: 292px;
}

.rectangle-31-12,
.rectangle-31-13 {
  background-color: var(--hippie-blue);
  height: 226px;
  left: 8px;
  position: absolute;
  top: 12px;
  width: 284px;
}

.rectangle-30-43,
.rectangle-30-44 {
  background-color: var(--link-water);
  height: 226px;
  left: 0;
  position: absolute;
  top: 0;
  width: 284px;
}

.developper-les-pilie,
.developper-les-pilie-1 {
  left: 26px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 59px;
  width: 241px;
}

.identifier-les-probl,
.identifier-les-probl-1 {
  left: 26px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 71px;
  width: 241px;
}
</style>
