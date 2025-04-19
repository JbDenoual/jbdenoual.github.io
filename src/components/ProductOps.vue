<template>
  <div class="product-ops-5 screen">
    <div class="global-2">
      <div class="section_1-1">
        <div class="header-8">
          <div class="header-9">
            <router-link to="/index"><img class="logo-8" :src="logo" alt="Logo" /></router-link>
            <div class="menu-4">
              <router-link to="/index">
                <div class="link-4 rubik-normal-white-16px">{{ accueil1 }}</div> </router-link
              ><router-link to="/product-management">
                <div class="link-4 rubik-normal-white-16px">{{ productManagement1 }}</div>
              </router-link>
              <div class="product-ops-4 rubik-normal-white-16px">{{ productOps1 }}</div>
              <router-link to="/experiences">
                <div class="link-4 rubik-normal-white-16px">{{ expriences1 }}</div> </router-link
              ><router-link to="/contact">
                <div class="link-4 rubik-normal-white-16px">{{ place1 }}</div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="frame-5-1">
          <div class="product-ops-coaching-formation inferi-regular-normal-white-47px">
            {{ productOpsCoachingFormation }}
          </div>
          <p class="les-meilleures-quip rubik-light-white-22px">{{ lesMeilleuresQuip }}</p>
          <router-link to="/contact">
            <div class="button-1-1">
              <div class="overlap-group-20">
                <div class="rectangle-10-13"></div>
                <div class="rectangle-9-13"></div>
                <p class="je-fais-grandir-mon-equipe rubik-normal-midnight-blue-18px">{{ jeFaisGrandirMonEquipe }}</p>
              </div>
            </div></router-link
          >
        </div>
      </div>
      <div class="section_2-1">
        <div class="left-1">
          <h1 class="title">{{ title }}</h1>
        </div>
        <div class="frame-13">
          <div class="frame-14-1">
            <line :votreQuipeProduit="line1Props.votreQuipeProduit" />
            <line2 :votreQuotidienNeV="line21Props.votreQuotidienNeV" />
            <line :votreQuipeProduit="line2Props.votreQuipeProduit" :className="line2Props.className" />
            <line2 :votreQuotidienNeV="line22Props.votreQuotidienNeV" :className="line22Props.className" />
            <line3 :vousAvezDesObject="line31Props.vousAvezDesObject" />
            <line3 :vousAvezDesObject="line32Props.vousAvezDesObject" />
          </div>
          <p class="si-vous-lisez-ces-li" v-html="siVousLisezCesLi"></p>
        </div>
      </div>
      <div class="section_3">
        <div class="frame-11">
          <div class="product-ops-6 inferi-regular-normal-midnight-blue-47px">{{ productOps2 }}</div>
          <p class="une-approche-varie">{{ uneApprocheVarie }}</p>
        </div>
        <div class="frame-12">
          <group9 :animerDesSessions="group91Props.animerDesSessions" :x2XParMois="group91Props.x2XParMois" />
          <group9 :animerDesSessions="group92Props.animerDesSessions" :x2XParMois="group92Props.x2XParMois" />
          <div class="group-11">
            <div class="overlap-group-19">
              <div class="rectangle-31-5"></div>
              <div class="rectangle-30-16"></div>
              <p class="mettre-en-place-des rubik-light-red-damask-16px">{{ mettreEnPlaceDes }}</p>
              <div class="en-continue rubik-normal-red-damask-28px">{{ enContinue }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="section_4">
        <div class="frame-8">
          <div class="coaching-et-formation inferi-regular-normal-shark-47px">{{ coachingEtFormation }}</div>
          <p class="jutilise-mon-expri">{{ jutiliseMonExpri }}</p>
        </div>
        <div class="frame-10">
          <div class="frame-9 inter-medium-midnight-blue-16px">
            <group92 :passerDunMindset="group921Props.passerDunMindset" />
            <div class="group-1">
              <div class="overlap-group-19">
                <div class="rectangle-31-4"></div>
                <div class="rectangle-30-15"></div>
                <p class="developper-les-pilie" v-html="developperLesPilie"></p>
              </div>
            </div>
            <group92 :passerDunMindset="group922Props.passerDunMindset" />
            <group11 :apprendrePrioriserSelonLaValeur="group111Props.apprendrePrioriserSelonLaValeur" />
            <group92 :passerDunMindset="group923Props.passerDunMindset" :className="group923Props.className" />
            <div class="group-1">
              <div class="overlap-group-19">
                <div class="rectangle-31-4"></div>
                <div class="rectangle-30-15"></div>
                <p class="identifier-les-probl">{{ identifierLesProbl }}</p>
              </div>
            </div>
            <group92 :passerDunMindset="group924Props.passerDunMindset" :className="group924Props.className" />
            <group11 :apprendrePrioriserSelonLaValeur="group112Props.apprendrePrioriserSelonLaValeur" />
            <group11 :apprendrePrioriserSelonLaValeur="group113Props.apprendrePrioriserSelonLaValeur" />
          </div>
          <router-link to="/contact">
            <div class="button-3">
              <div class="overlap-group9">
                <div class="rectangle-10-14"></div>
                <div class="rectangle-9-14"></div>
                <div class="en-savoir-plus rubik-normal-midnight-blue-18px">{{ enSavoirPlus }}</div>
              </div>
            </div></router-link
          >
        </div>
      </div>
      <footer class="footer-4">
        <div class="footer_contact-3">
          <p class="ne-vous-contentez-pa inferi-regular-normal-white-47px">{{ neVousContentezPa }}</p>
          <router-link to="/contact">
            <div class="footer_button-1">
              <div class="overlap-group-21">
                <div class="rectangle-10-15"></div>
                <div class="rectangle-9-15"></div>
                <div class="allons-y-ensemble-3 rubik-normal-midnight-blue-18px">{{ allonsYEnsemble }}</div>
              </div>
            </div></router-link
          >
        </div>
        <div class="footer_links-4">
          <div class="footer_links_1-4">
            <router-link to="/index"><img class="logo-8" :src="logo_2" alt="logo_2" /></router-link>
            <div class="menu-4">
              <router-link to="/index">
                <div class="link-4 rubik-normal-white-16px">{{ accueil2 }}</div> </router-link
              ><router-link to="/product-management">
                <div class="link-4 rubik-normal-white-16px">{{ productManagement2 }}</div>
              </router-link>
              <div class="product-ops-4 rubik-normal-white-16px">{{ productOps3 }}</div>
              <router-link to="/experiences">
                <div class="link-4 rubik-normal-white-16px">{{ expriences2 }}</div> </router-link
              ><router-link to="/contact">
                <div class="link-4 rubik-normal-white-16px">{{ place2 }}</div>
              </router-link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Line from "./Line";
import Line2 from "./Line2";
import Line3 from "./Line3";
import Group9 from "./Group9";
import Group92 from "./Group92";
import Group11 from "./Group11";
export default {
  name: "ProductOps",
  components: {
    Line,
    Line2,
    Line3,
    Group9,
    Group92,
    Group11,
  },
  props: [
    "logo",
    "accueil1",
    "productManagement1",
    "productOps1",
    "expriences1",
    "place1",
    "productOpsCoachingFormation",
    "lesMeilleuresQuip",
    "jeFaisGrandirMonEquipe",
    "title",
    "siVousLisezCesLi",
    "productOps2",
    "uneApprocheVarie",
    "mettreEnPlaceDes",
    "enContinue",
    "coachingEtFormation",
    "jutiliseMonExpri",
    "developperLesPilie",
    "identifierLesProbl",
    "enSavoirPlus",
    "neVousContentezPa",
    "allonsYEnsemble",
    "logo_2",
    "accueil2",
    "productManagement2",
    "productOps3",
    "expriences2",
    "place2",
    "line1Props",
    "line21Props",
    "line2Props",
    "line22Props",
    "line31Props",
    "line32Props",
    "group91Props",
    "group92Props",
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
.product-ops-5 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
}

.global-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 80px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.section_1-1 {
  align-items: center;
  align-self: stretch;
  background-color: var(--midnight-blue);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.header-8 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.header-9,
.footer_links_1-4 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 0px 470px;
  justify-content: space-between;
  padding: 42px;
  position: relative;
}

.logo-8 {
  cursor: pointer;
  position: relative;
  width: 63.13px;
}

.menu-4 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 30px 30px;
  justify-content: flex-end;
  margin-left: -3.81e-6px;
  min-height: 62px;
  position: relative;
}

.link-4 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.product-ops-4 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.frame-5-1 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 60px;
  max-width: 750px;
  padding: 42px 0px;
  position: relative;
  width: 100%;
}

.product-ops-coaching-formation {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: fit-content;
}

.les-meilleures-quip {
  letter-spacing: -0.24px;
  line-height: 33px;
  position: relative;
  text-align: center;
  width: 703px;
}

.button-1-1 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 483px;
}

.overlap-group-20 {
  height: 72px;
  position: relative;
  width: 481px;
}

.rectangle-10-13 {
  background-color: var(--hippie-blue);
  height: 64px;
  left: 8px;
  position: absolute;
  top: 8px;
  width: 473px;
}

.rectangle-9-13 {
  background-color: var(--link-water);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 473px;
}

.je-fais-grandir-mon-equipe {
  left: 4px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 464px;
}

.section_2-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  position: relative;
  width: 100%;
}

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
  font-family: var(--font-family-inferi-regular);
  font-size: 64px;
  font-weight: 400;
  letter-spacing: -1.41px;
  line-height: 96px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 1093px;
}

.frame-13 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 84px;
  max-width: 1100px;
  position: relative;
  width: 100%;
}

.frame-14-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 54px;
  position: relative;
  width: 100%;
}

.si-vous-lisez-ces-li {
  align-self: stretch;
  color: var(--shark);
  font-family: var(--font-family-inferi-regular);
  font-size: var(--font-size-xxxl);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}

.section_3 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 90px;
  position: relative;
  width: 100%;
}

.frame-11 {
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
.coaching-et-formation {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.une-approche-varie {
  align-self: stretch;
  color: var(--shark);
  font-family: var(--font-family-inferi-trial-regular);
  font-size: 32px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 48px;
  position: relative;
  text-align: center;
}

.frame-12 {
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

.group-11 {
  height: 237.56px;
  position: relative;
  width: 296.35px;
}

.overlap-group-19 {
  height: 238px;
  position: relative;
  width: 292px;
}

.rectangle-31-5 {
  background-color: var(--macaroni-and-cheese);
  height: 226px;
  left: 8px;
  position: absolute;
  top: 12px;
  width: 284px;
}

.rectangle-30-16 {
  background-color: var(--negroni);
  height: 226px;
  left: 0;
  position: absolute;
  top: 0;
  width: 284px;
}

.mettre-en-place-des {
  left: 28px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  top: 96px;
  width: 237px;
}

.en-continue {
  left: 52px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 30px;
  width: 188px;
}

.section_4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 138px;
  position: relative;
  width: 100%;
}

.frame-8 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}

.jutilise-mon-expri {
  align-self: stretch;
  color: var(--shark);
  font-family: var(--font-family-inferi-regular);
  font-size: 32px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 48px;
  position: relative;
  text-align: center;
}

.frame-10 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 120.44px;
  padding: 0px 18.32px;
  position: relative;
  width: 100%;
}

.frame-9 {
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

.group-1 {
  height: 237.56px;
  position: relative;
  width: 294.35px;
}

.rectangle-31-4 {
  background-color: var(--hippie-blue);
  height: 226px;
  left: 8px;
  position: absolute;
  top: 12px;
  width: 284px;
}

.rectangle-30-15 {
  background-color: var(--link-water);
  height: 226px;
  left: 0;
  position: absolute;
  top: 0;
  width: 284px;
}

.developper-les-pilie {
  left: 26px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 59px;
  width: 241px;
}

.identifier-les-probl {
  left: 26px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 71px;
  width: 241px;
}

.button-3 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 260.98px;
}

.overlap-group9 {
  height: 72px;
  position: relative;
  width: 259px;
}

.rectangle-10-14 {
  background-color: var(--macaroni-and-cheese);
  height: 64px;
  left: 4px;
  position: absolute;
  top: 8px;
  width: 255px;
}

.rectangle-9-14 {
  background-color: var(--negroni);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 255px;
}

.en-savoir-plus {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 250px;
}

.footer-4 {
  align-items: center;
  align-self: stretch;
  background-color: var(--midnight-blue);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 80px;
  margin-left: -1px;
  margin-right: -1px;
  padding: 50px 0px;
  position: relative;
  width: 100%;
}

.footer_contact-3 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  max-width: 1100px;
  padding: 0px 42px;
  position: relative;
  width: 100%;
}

.ne-vous-contentez-pa {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.footer_button-1 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 312px;
}

.overlap-group-21 {
  height: 72px;
  position: relative;
  width: 310px;
}

.rectangle-10-15 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 5px;
  position: absolute;
  top: 8px;
  width: 305px;
}

.rectangle-9-15 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 305px;
}

.allons-y-ensemble-3 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 299px;
}

.footer_links-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}
</style>
