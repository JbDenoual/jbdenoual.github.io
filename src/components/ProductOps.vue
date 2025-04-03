<template>
  <div class="product-ops-5 screen">
    <div class="global-1">
      <div class="section_1-1">
        <div class="header-8">
          <div class="header-9">
            <router-link to="/index-1"><img class="logo-6" :src="logo" alt="Logo" /></router-link>
            <div class="menu-4">
              <router-link to="/index-1">
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
          <div class="product-ops-coaching-formation inferi-trial-regular-normal-white-47px">
            {{ productOpsCoachingFormation }}
          </div>
          <p class="les-meilleures-quip rubik-light-white-22px">{{ lesMeilleuresQuip }}</p>
          <router-link to="/contact">
            <div class="button-1">
              <div class="overlap-group-25">
                <div class="rectangle-10-15"></div>
                <div class="rectangle-9-15"></div>
                <p class="je-fais-grandir-mon-equipe rubik-normal-midnight-blue-18px">{{ jeFaisGrandirMonEquipe }}</p>
              </div>
            </div></router-link
          >
        </div>
      </div>
      <div class="section_2-1">
        <left />
        <div class="frame-13">
          <div class="frame-14">
            <line :votreQuipeProduit="line1Props.votreQuipeProduit" />
            <line2 :votreQuotidienNeV="line21Props.votreQuotidienNeV" />
            <line :votreQuipeProduit="line2Props.votreQuipeProduit" :className="line2Props.className" />
            <line2 :votreQuotidienNeV="line22Props.votreQuotidienNeV" :className="line22Props.className" />
            <line3 :vousAvezDesObject="line31Props.vousAvezDesObject" />
            <line3 :vousAvezDesObject="line32Props.vousAvezDesObject" />
          </div>
          <p class="si-vous-lisez-ces-li inferi-regular-normal-shark-28px" v-html="siVousLisezCesLi"></p>
        </div>
      </div>
      <section3
        :mettreEnPlaceDes="section3Props.mettreEnPlaceDes"
        :group91Props="section3Props.group91Props"
        :group92Props="section3Props.group92Props"
      />
      <div class="section_4">
        <div class="frame-8">
          <div class="coaching-et-formation inferi-regular-normal-shark-47px">{{ coachingEtFormation }}</div>
          <p class="jutilise-mon-expri">{{ jutiliseMonExpri }}</p>
        </div>
        <div class="frame-10">
          <frame9 v-bind="frame9Props" />
          <router-link to="/contact">
            <div class="button-3">
              <div class="overlap-group9">
                <div class="rectangle-10-16"></div>
                <div class="rectangle-9-16"></div>
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
              <div class="overlap-group-26">
                <div class="rectangle-10-17"></div>
                <div class="rectangle-9-17"></div>
                <div class="allons-y-ensemble-3 rubik-normal-midnight-blue-18px">{{ allonsYEnsemble }}</div>
              </div>
            </div></router-link
          >
        </div>
        <div class="footer_links-4">
          <div class="footer_links_1-4">
            <router-link to="/index-1"><img class="logo-6" :src="logo_2" alt="logo_2" /></router-link>
            <div class="menu-4">
              <router-link to="/index-1">
                <div class="link-4 rubik-normal-white-16px">{{ accueil2 }}</div> </router-link
              ><router-link to="/product-management">
                <div class="link-4 rubik-normal-white-16px">{{ productManagement2 }}</div>
              </router-link>
              <div class="product-ops-4 rubik-normal-white-16px">{{ productOps2 }}</div>
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
import Left from "./Left";
import Line from "./Line";
import Line2 from "./Line2";
import Line3 from "./Line3";
import Section3 from "./Section3";
import Frame9 from "./Frame9";
export default {
  name: "ProductOps",
  components: {
    Left,
    Line,
    Line2,
    Line3,
    Section3,
    Frame9,
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
    "siVousLisezCesLi",
    "coachingEtFormation",
    "jutiliseMonExpri",
    "enSavoirPlus",
    "neVousContentezPa",
    "allonsYEnsemble",
    "logo_2",
    "accueil2",
    "productManagement2",
    "productOps2",
    "expriences2",
    "place2",
    "line1Props",
    "line21Props",
    "line2Props",
    "line22Props",
    "line31Props",
    "line32Props",
    "section3Props",
    "frame9Props",
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

.global-1 {
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

.logo-6 {
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
  margin-left: 0px;
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

.button-1 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 483px;
}

.overlap-group-25 {
  height: 72px;
  position: relative;
  width: 481px;
}

.rectangle-10-15 {
  background-color: var(--hippie-blue);
  height: 64px;
  left: 8px;
  position: absolute;
  top: 8px;
  width: 473px;
}

.rectangle-9-15 {
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

.frame-14 {
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
  letter-spacing: 0;
  line-height: normal;
  position: relative;
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

.coaching-et-formation {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
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

.rectangle-10-16 {
  background-color: var(--macaroni-and-cheese);
  height: 64px;
  left: 4px;
  position: absolute;
  top: 8px;
  width: 255px;
}

.rectangle-9-16 {
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

.overlap-group-26 {
  height: 72px;
  position: relative;
  width: 310px;
}

.rectangle-10-17 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 5px;
  position: absolute;
  top: 8px;
  width: 305px;
}

.rectangle-9-17 {
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
