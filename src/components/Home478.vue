<template>
  <div class="home-u40478u41 screen">
    <div class="global-5">
      <div class="home_section_1-4">
        <div class="header-16">
          <div class="header-17">
            <img class="logo-10" :src="logo" alt="Logo" />
            <div class="menu-8">
              <div class="accueil-4 rubik-normal-white-16px">{{ accueil1 }}</div>
              <router-link to="/product-management">
                <div class="link-8 rubik-normal-white-16px">{{ productManagement1 }}</div> </router-link
              ><router-link to="/product-ops">
                <div class="link-8 rubik-normal-white-16px">{{ productOps1 }}</div> </router-link
              ><router-link to="/experiences">
                <div class="link-8 rubik-normal-white-16px">{{ expriences1 }}</div> </router-link
              ><router-link to="/contact">
                <div class="link-8 rubik-normal-white-16px">{{ place1 }}</div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="home_section_1_details-4">
          <div class="home_section_1_details_1-4">
            <img class="me-4" :src="me" alt="me" />
            <div class="home_section_1_text-4">
              <caroussel2 />
              <div class="home_section_1_buttons-4">
                <router-link to="/product-management">
                  <div class="home_button_1-4">
                    <div class="overlap-group-50">
                      <div class="rectangle-10-32"></div>
                      <div class="rectangle-9-32"></div>
                      <div class="product-manager-8 rubik-light-midnight-blue-18px">{{ productManager1 }}</div>
                    </div>
                  </div></router-link
                ><router-link to="/product-ops">
                  <div class="home_button_2-4">
                    <div class="overlap-group1-22">
                      <div class="rectangle-10-33"></div>
                      <div class="rectangle-9-33"></div>
                      <div class="product-ops-12 rubik-light-midnight-blue-18px">{{ productOps2 }}</div>
                    </div>
                  </div></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_section_2-4">
        <div class="home_section_2_1-4">
          <home2-left />
          <home2-right />
        </div>
      </div>
      <div class="home_section_3-4">
        <p class="je-suis-la-recherche-dun-4 inferi-regular-normal-shark-47px">{{ jeSuisLaRechercheDun }}</p>
        <div class="home_3_offers-4">
          <div class="home_3_offers_1-4">
            <div class="home_offer-4">
              <div class="overlap-group1-23">
                <div class="overlap-group-48">
                  <div class="rectangle-10-34"></div>
                  <div class="rectangle-9-34"></div>
                  <div class="product-manager-9 rubik-normal-red-damask-35px">{{ productManager2 }}</div>
                  <p class="pour-des-missions-de-8 rubik-light-black-22px" v-html="pourDesMissionsDe1"></p>
                </div>
                <router-link to="/product-management">
                  <div class="home_offer_1_1-4">
                    <img
                      class="x-11"
                      src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67e80fd1e86bdee6f8bb7528/img/----3.svg"
                      alt="--&gt;"
                    /></div
                ></router-link>
              </div>
            </div>
            <div class="home_offer-4">
              <div class="overlap-group2-11">
                <div class="overlap-group-48">
                  <div class="rectangle-10-35"></div>
                  <div class="rectangle-9-35"></div>
                  <div class="product-ops-13 rubik-normal-midnight-blue-35px">{{ productOps3 }}</div>
                  <p class="pour-des-missions-de-9 rubik-light-black-20px" v-html="pourDesMissionsDe2"></p>
                </div>
                <router-link to="/product-ops">
                  <div class="home_offer_2_1-4">
                    <img
                      class="x-12"
                      src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67e80fd1e86bdee6f8bb7528/img/----4.svg"
                      alt="--&gt;"
                    /></div
                ></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_section_4-4">
        <div class="about-4">
          <div class="propos-de-moi-4 inferi-regular-normal-shark-47px">{{ proposDeMoi }}</div>
          <p class="mes-clients-me-dcri-4 rubik-light-shark-19px" v-html="mesClientsMeDcri"></p>
          <router-link to="/experiences">
            <div class="_button-4">
              <div class="overlap-group-49">
                <div class="rectangle-10-31"></div>
                <div class="rectangle-9-31"></div>
                <div class="consulter-mes-experiences-4 rubik-normal-midnight-blue-18px">
                  {{ consulterMesExperiences }}
                </div>
              </div>
            </div></router-link
          >
        </div>
        <about-picture :src="aboutPictureProps.src" />
      </div>
      <div class="home_section_5-4">
        <p class="les-principes-qui-gu-4 inferi-trial-regular-normal-midnight-blue-47px">{{ lesPrincipesQuiGu }}</p>
        <div class="home_principles-4">
          <div class="principle-9">
            <principle1 />
            <principle2 :surname="principle21Props.surname" />
            <principle3 />
          </div>
          <div class="principle-9">
            <principle2 :surname="principle22Props.surname" />
            <principle5 />
          </div>
        </div>
      </div>
      <footer class="footer-8">
        <div class="footer_contact-7">
          <p class="plutt-que-dadmirer-4 inferi-regular-normal-white-47px">{{ pluttQueDadmirer }}</p>
          <router-link to="/contact">
            <div class="_button-4">
              <div class="overlap-group-49">
                <div class="rectangle-10-31"></div>
                <div class="rectangle-9-31"></div>
                <div class="allons-y-ensemble-7 rubik-normal-midnight-blue-18px">{{ allonsYEnsemble }}</div>
              </div>
            </div></router-link
          >
        </div>
        <div class="footer_links-8">
          <div class="footer_links_1-8">
            <img class="logo-10" :src="logo_2" alt="logo_2" />
            <div class="menu-8">
              <div class="accueil-4 rubik-normal-white-16px">{{ accueil2 }}</div>
              <router-link to="/product-management">
                <div class="link-8 rubik-normal-white-16px">{{ productManagement2 }}</div> </router-link
              ><router-link to="/product-ops">
                <div class="link-8 rubik-normal-white-16px">{{ productOps4 }}</div> </router-link
              ><router-link to="/experiences">
                <div class="link-8 rubik-normal-white-16px">{{ expriences2 }}</div> </router-link
              ><router-link to="/contact">
                <div class="link-8 rubik-normal-white-16px">{{ place2 }}</div>
              </router-link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Caroussel2 from "./Caroussel2";
import Home2Left from "./Home2Left";
import Home2Right from "./Home2Right";
import AboutPicture from "./AboutPicture";
import Principle1 from "./Principle1";
import Principle2 from "./Principle2";
import Principle3 from "./Principle3";
import Principle5 from "./Principle5";
export default {
  name: "Home478",
  components: {
    Caroussel2,
    Home2Left,
    Home2Right,
    AboutPicture,
    Principle1,
    Principle2,
    Principle3,
    Principle5,
  },
  props: [
    "logo",
    "accueil1",
    "productManagement1",
    "productOps1",
    "expriences1",
    "place1",
    "me",
    "productManager1",
    "productOps2",
    "jeSuisLaRechercheDun",
    "productManager2",
    "pourDesMissionsDe1",
    "productOps3",
    "pourDesMissionsDe2",
    "proposDeMoi",
    "mesClientsMeDcri",
    "consulterMesExperiences",
    "lesPrincipesQuiGu",
    "pluttQueDadmirer",
    "allonsYEnsemble",
    "logo_2",
    "accueil2",
    "productManagement2",
    "productOps4",
    "expriences2",
    "place2",
    "aboutPictureProps",
    "principle21Props",
    "principle22Props",
  ],
};
</script>

<style>
.home-u40478u41 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
}

.global-5 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 80px;
  position: relative;
  width: 100%;
}

.home_section_1-4 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--midnight-blue);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.header-16 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.header-17,
.footer_links_1-8 {
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

.logo-10 {
  position: relative;
  width: 63.13px;
}

.menu-8 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 30px 30px;
  justify-content: flex-end;
  margin-left: -3.05e-5px;
  min-height: 62px;
  position: relative;
}

.accueil-4 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.link-8 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.home_section_1_details-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 10px 10px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.home_section_1_details_1-4 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 100px 100px;
  justify-content: center;
  margin-bottom: -1px;
  margin-left: -1px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0px 42px 42px 0px;
  position: relative;
}

.me-4 {
  height: 371px;
  position: relative;
  width: 371px;
}

.home_section_1_text-4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  max-width: 600px;
  position: relative;
  width: 600px;
}

.home_section_1_buttons-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 60px 60px;
  position: relative;
  width: 100%;
}

.home_button_1-4 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 253px;
}

.overlap-group-50 {
  height: 72px;
  position: relative;
  width: 251px;
}

.rectangle-10-32 {
  background-color: var(--macaroni-and-cheese);
  height: 64px;
  left: 4px;
  position: absolute;
  top: 8px;
  width: 247px;
}

.rectangle-9-32 {
  background-color: var(--negroni);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 247px;
}

.product-manager-8 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 242px;
}

.home_button_2-4 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 210px;
}

.overlap-group1-22 {
  height: 72px;
  position: relative;
  width: 208px;
}

.rectangle-10-33 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 3px;
  position: absolute;
  top: 8px;
  width: 205px;
}

.rectangle-9-33 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 205px;
}

.product-ops-12 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 201px;
}

.home_section_2-4 {
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

.home_section_2_1-4 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 53px 53px;
  justify-content: center;
  position: relative;
}

.home_section_3-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 90px;
  position: relative;
  width: 100%;
}

.je-suis-la-recherche-dun-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.home_3_offers-4 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 10px 10px;
  position: relative;
  width: 100%;
}

.home_3_offers_1-4 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 91px 91px;
  justify-content: center;
  position: relative;
}

.home_offer-4 {
  height: 508px;
  position: relative;
  width: 501px;
}

.overlap-group1-23 {
  height: 471px;
  position: relative;
  width: 505px;
}

.overlap-group-48 {
  height: 444px;
  left: 0;
  position: absolute;
  top: 0;
  width: 501px;
}

.rectangle-10-34 {
  background-color: var(--red-damask);
  height: 431px;
  left: 10px;
  position: absolute;
  top: 13px;
  width: 491px;
}

.rectangle-9-34 {
  background-color: var(--negroni);
  height: 433px;
  left: 0;
  position: absolute;
  top: 0;
  width: 492px;
}

.product-manager-9 {
  left: 47px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  width: 343px;
}

.pour-des-missions-de-8 {
  left: 47px;
  letter-spacing: -0.42px;
  line-height: 33px;
  position: absolute;
  top: 133px;
  width: 430px;
}

.home_offer_1_1-4 {
  align-items: flex-end;
  background-color: var(--red-damask);
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 64px;
  justify-content: flex-end;
  left: 39px;
  min-width: 170px;
  padding: 18.5px 60.2px;
  position: absolute;
  top: 407px;
}

.x-11,
.x-12 {
  height: 27px;
  width: 45px;
}

.overlap-group2-11 {
  height: 469px;
  position: relative;
  width: 505px;
}

.rectangle-10-35 {
  background-color: var(--hippie-blue);
  height: 424px;
  left: 9px;
  position: absolute;
  top: 20px;
  width: 492px;
}

.rectangle-9-35 {
  background-color: var(--link-water);
  height: 433px;
  left: 0;
  position: absolute;
  top: 0;
  width: 491px;
}

.product-ops-13 {
  left: 46px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  width: 373px;
}

.pour-des-missions-de-9 {
  left: 46px;
  letter-spacing: -0.22px;
  line-height: 30px;
  position: absolute;
  top: 133px;
  width: 430px;
}

.home_offer_2_1-4 {
  align-items: flex-end;
  background-color: var(--hippie-blue);
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 64px;
  justify-content: flex-end;
  left: 46px;
  min-width: 170px;
  padding: 18.5px 60.2px;
  position: absolute;
  top: 405px;
}

.home_section_4-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 50px 50px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.about-4 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  position: relative;
}

.propos-de-moi-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 358px;
}

.mes-clients-me-dcri-4 {
  letter-spacing: 0;
  line-height: 35px;
  position: relative;
  width: 653px;
}

._button-4 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 312px;
}

.overlap-group-49 {
  height: 72px;
  position: relative;
  width: 310px;
}

.rectangle-10-31 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 5px;
  position: absolute;
  top: 8px;
  width: 305px;
}

.rectangle-9-31 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 305px;
}

.consulter-mes-experiences-4,
.allons-y-ensemble-7 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 299px;
}

.home_section_5-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 75px;
  position: relative;
  width: 100%;
}

.les-principes-qui-gu-4,
.plutt-que-dadmirer-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.home_principles-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
}

.principle-9 {
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

.footer-8 {
  align-items: center;
  align-self: stretch;
  background-color: var(--midnight-blue);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 80px;
  margin-bottom: -1px;
  margin-left: -1px;
  margin-right: -1px;
  padding: 50px 0px;
  position: relative;
  width: 100%;
}

.footer_contact-7 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  max-width: 1100px;
  position: relative;
  width: 100%;
}

.footer_links-8 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}
</style>
