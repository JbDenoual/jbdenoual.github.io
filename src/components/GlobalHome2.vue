<template>
  <div class="global_home-1">
    <div class="home_section_1-1">
      <div class="header-6">
        <div class="header-7">
          <img class="logo-14" :src="logo" alt="Logo" />
          <div class="menu-3">
            <div class="accueil-1 rubik-normal-white-16px">{{ accueil1 }}</div>
            <router-link to="/product-management">
              <div class="link-3 rubik-normal-white-16px">{{ productManagement1 }}</div> </router-link
            ><router-link to="/product-ops">
              <div class="link-3 rubik-normal-white-16px">{{ productOps1 }}</div> </router-link
            ><router-link to="/experiences">
              <div class="link-3 rubik-normal-white-16px">{{ expriences1 }}</div> </router-link
            ><router-link to="/contact">
              <div class="link-3 rubik-normal-white-16px">{{ place1 }}</div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="home_section_1_details-1">
        <div class="home_section_1_details_1-1">
          <img class="me-1" :src="me" alt="me" />
          <div class="home_section_1_text-1">
            <div class="caroussel_2-1">
              <div class="caroussel-1">
                <div class="home_section_1_text_1-1">
                  <p class="librez-le-potentiel-1 inferi-regular-normal-white-45px" v-html="librezLePotentiel"></p>
                  <p class="je-prends-en-charge-1 rubik-light-white-22px">{{ jePrendsEnCharge }}</p>
                </div>
              </div>
            </div>
            <div class="home_section_1_buttons-1">
              <router-link to="/product-management">
                <div class="home_button_1-1">
                  <div class="overlap-group-26">
                    <div class="rectangle-10-9"></div>
                    <div class="rectangle-9-9"></div>
                    <div class="product-manager-2 rubik-light-midnight-blue-18px">{{ productManager1 }}</div>
                  </div>
                </div></router-link
              ><router-link to="/product-ops">
                <div class="home_button_2-1">
                  <div class="overlap-group1-20">
                    <div class="rectangle-10-10"></div>
                    <div class="rectangle-9-10"></div>
                    <div class="product-ops-2 rubik-light-midnight-blue-18px">{{ productOps2 }}</div>
                  </div>
                </div></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_section_2-1">
      <div class="home_section_2_1-1">
        <home2-left />
        <div class="home_2_right-1">
          <p class="indispensables-pour-1 rubik-light-eerie-black-19px">{{ indispensablesPour }}</p>
        </div>
      </div>
    </div>
    <div class="home_section_3-1">
      <p class="je-suis-la-recherche-dun-1 inferi-regular-normal-shark-47px">{{ jeSuisLaRechercheDun }}</p>
      <div class="home_3_offers-1">
        <div class="home_3_offers_1-1">
          <div class="home_offer_1-1">
            <div class="overlap-group1-21">
              <div class="overlap-group-27">
                <div class="rectangle-10-11"></div>
                <div class="rectangle-9-11"></div>
                <div class="product-manager-3 rubik-normal-red-damask-35px">{{ productManager2 }}</div>
                <p class="pour-des-missions-de-2 rubik-light-black-22px" v-html="pourDesMissionsDe1"></p>
              </div>
              <router-link to="/product-management">
                <div class="home_offer_1_1-1">
                  <img
                    class="x-2"
                    src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fbb2451992eb73b30f36/img/----2.svg"
                    alt="--&gt;"
                  /></div
              ></router-link>
            </div>
          </div>
          <div class="home_offer_2-1">
            <div class="overlap-group2-9">
              <div class="overlap-group-28">
                <div class="rectangle-10-12"></div>
                <div class="rectangle-9-12"></div>
                <div class="product-ops-3 rubik-normal-midnight-blue-35px">{{ productOps3 }}</div>
                <p class="pour-des-missions-de-3 rubik-light-black-20px" v-html="pourDesMissionsDe2"></p>
              </div>
              <router-link to="/product-ops">
                <div class="home_offer_2_1-1">
                  <img
                    class="x-3"
                    src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fbb2451992eb73b30f36/img/----3.svg"
                    alt="--&gt;"
                  /></div
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_section_4-1">
      <div class="about-1">
        <div class="propos-de-moi-1 inferi-regular-normal-shark-47px">{{ proposDeMoi }}</div>
        <p class="mes-clients-me-dcri-1 rubik-light-shark-19px" v-html="mesClientsMeDcri"></p>
        <router-link to="/experiences">
          <div class="_button-1">
            <div class="overlap-group-25">
              <div class="rectangle-10-8"></div>
              <div class="rectangle-9-8"></div>
              <div class="consulter-mes-experiences-1 rubik-normal-midnight-blue-18px">
                {{ consulterMesExperiences }}
              </div>
            </div>
          </div></router-link
        >
      </div>
      <about-picture :src="aboutPictureProps.src" :className="aboutPictureProps.className" />
    </div>
    <div class="home_section_5-1">
      <p class="les-principes-qui-gu-1 inferi-regular-normal-midnight-blue-47px">{{ lesPrincipesQuiGu }}</p>
      <div class="home_principles-1">
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
    <footer class="footer-3">
      <div class="footer_contact-2">
        <p class="plutt-que-dadmirer-1 inferi-regular-normal-white-47px">{{ pluttQueDadmirer }}</p>
        <router-link to="/contact">
          <div class="_button-1">
            <div class="overlap-group-25">
              <div class="rectangle-10-8"></div>
              <div class="rectangle-9-8"></div>
              <div class="allons-y-ensemble-2 rubik-normal-midnight-blue-18px">{{ allonsYEnsemble }}</div>
            </div>
          </div></router-link
        >
      </div>
      <div class="footer_links-3">
        <div class="footer_links_1-3">
          <img class="logo-14" :src="logo_2" alt="logo_2" />
          <div class="menu-3">
            <div class="accueil-1 rubik-normal-white-16px">{{ accueil2 }}</div>
            <router-link to="/product-management">
              <div class="link-3 rubik-normal-white-16px">{{ productManagement2 }}</div> </router-link
            ><router-link to="/product-ops">
              <div class="link-3 rubik-normal-white-16px">{{ productOps4 }}</div> </router-link
            ><router-link to="/experiences">
              <div class="link-3 rubik-normal-white-16px">{{ expriences2 }}</div> </router-link
            ><router-link to="/contact">
              <div class="link-3 rubik-normal-white-16px">{{ place2 }}</div>
            </router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Home2Left from "./Home2Left";
import AboutPicture from "./AboutPicture";
import Principle1 from "./Principle1";
import Principle2 from "./Principle2";
import Principle3 from "./Principle3";
import Principle5 from "./Principle5";
export default {
  name: "GlobalHome2",
  components: {
    Home2Left,
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
    "librezLePotentiel",
    "jePrendsEnCharge",
    "productManager1",
    "productOps2",
    "indispensablesPour",
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
.global_home-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 80px;
  position: relative;
  width: 100%;
}

.home_section_1-1 {
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

.header-6 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.header-7 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 30px 470px;
  justify-content: space-between;
  padding: 42px;
  position: relative;
}

.logo-14 {
  position: relative;
  width: 63.13px;
}

.menu-3 {
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

.accueil-1 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.link-3 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.home_section_1_details-1 {
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

.home_section_1_details_1-1 {
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
  padding: 0px 0px 42px;
  position: relative;
}

.me-1 {
  height: 350px;
  position: relative;
  width: 350px;
}

.home_section_1_text-1 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 30px;
  justify-content: center;
  max-width: 600px;
  min-width: 350px;
  position: relative;
}

.caroussel_2-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 0px 10px;
  position: relative;
  width: 100%;
}

.caroussel-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 30px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.home_section_1_text_1-1 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 30px;
  position: relative;
}

.librez-le-potentiel-1 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.je-prends-en-charge-1 {
  align-self: stretch;
  letter-spacing: -0.24px;
  line-height: 33px;
  position: relative;
}

.home_section_1_buttons-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 60px 60px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.home_button_1-1 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 253px;
}

.overlap-group-26 {
  height: 72px;
  position: relative;
  width: 251px;
}

.rectangle-10-9 {
  background-color: var(--macaroni-and-cheese);
  height: 64px;
  left: 4px;
  position: absolute;
  top: 8px;
  width: 247px;
}

.rectangle-9-9 {
  background-color: var(--negroni);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 247px;
}

.product-manager-2 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 242px;
}

.home_button_2-1 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 210px;
}

.overlap-group1-20 {
  height: 72px;
  position: relative;
  width: 208px;
}

.rectangle-10-10 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 3px;
  position: absolute;
  top: 8px;
  width: 205px;
}

.rectangle-9-10 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 205px;
}

.product-ops-2 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 201px;
}

.home_section_2-1 {
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

.home_section_2_1-1 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 53px 53px;
  justify-content: center;
  position: relative;
}

.home_2_right-1 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 10px;
  justify-content: flex-end;
  max-width: 400px;
  min-width: 350px;
  position: relative;
}

.indispensables-pour-1 {
  flex: 1;
  letter-spacing: -0.21px;
  line-height: 28.5px;
  margin-top: -1px;
  position: relative;
}

.home_section_3-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 90px;
  position: relative;
  width: 100%;
}

.je-suis-la-recherche-dun-1 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.home_3_offers-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 10px 10px;
  position: relative;
  width: 100%;
}

.home_3_offers_1-1 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 91px 91px;
  justify-content: center;
  position: relative;
}

.home_offer_1-1 {
  flex: 1;
  flex-grow: 1;
  height: 508px;
  max-width: 500px;
  position: relative;
}

.overlap-group1-21 {
  height: 471px;
  position: relative;
  width: 504px;
}

.overlap-group-27 {
  height: 444px;
  left: 0;
  position: absolute;
  top: 0;
  width: 500px;
}

.rectangle-10-11 {
  background-color: var(--red-damask);
  height: 431px;
  left: 10px;
  position: absolute;
  top: 13px;
  width: 490px;
}

.rectangle-9-11 {
  background-color: var(--negroni);
  height: 433px;
  left: 0;
  position: absolute;
  top: 0;
  width: 491px;
}

.product-manager-3 {
  left: 47px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  width: 343px;
}

.pour-des-missions-de-2 {
  left: 47px;
  letter-spacing: -0.42px;
  line-height: 33px;
  position: absolute;
  top: 133px;
  width: 430px;
}

.home_offer_1_1-1 {
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

.x-2,
.x-3 {
  height: 27px;
  width: 45px;
}

.home_offer_2-1 {
  height: 508px;
  position: relative;
  width: 501px;
}

.overlap-group2-9 {
  height: 469px;
  position: relative;
  width: 505px;
}

.overlap-group-28 {
  height: 444px;
  left: 0;
  position: absolute;
  top: 0;
  width: 501px;
}

.rectangle-10-12 {
  background-color: var(--hippie-blue);
  height: 424px;
  left: 9px;
  position: absolute;
  top: 20px;
  width: 492px;
}

.rectangle-9-12 {
  background-color: var(--link-water);
  height: 433px;
  left: 0;
  position: absolute;
  top: 0;
  width: 491px;
}

.product-ops-3 {
  left: 46px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  width: 373px;
}

.pour-des-missions-de-3 {
  left: 46px;
  letter-spacing: -0.22px;
  line-height: 30px;
  position: absolute;
  top: 133px;
  width: 430px;
}

.home_offer_2_1-1 {
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

.home_section_4-1 {
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

.about-1 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 50px;
  justify-content: center;
  max-width: 650px;
  position: relative;
}

.propos-de-moi-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 358px;
}

.mes-clients-me-dcri-1 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 35px;
  position: relative;
}

._button-1 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 312px;
}

.overlap-group-25 {
  height: 72px;
  position: relative;
  width: 310px;
}

.rectangle-10-8 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 5px;
  position: absolute;
  top: 8px;
  width: 305px;
}

.rectangle-9-8 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 305px;
}

.consulter-mes-experiences-1,
.allons-y-ensemble-2 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 299px;
}

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

.les-principes-qui-gu-1,
.plutt-que-dadmirer-1 {
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

.footer-3 {
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

.footer_contact-2 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  max-width: 1100px;
  position: relative;
  width: 100%;
}

.footer_links-3 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.footer_links_1-3 {
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
</style>
