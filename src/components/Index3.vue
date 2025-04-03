<template>
  <div class="index screen">
    <div class="global-2">
      <div class="home_section_1-2">
        <div class="header-10">
          <div class="header-11">
            <img class="logo-7" :src="logo" alt="Logo" />
            <div class="menu-5">
              <div class="accueil-2 rubik-normal-white-16px">{{ accueil1 }}</div>
              <router-link to="/product-management">
                <div class="link-5 rubik-normal-white-16px">{{ productManagement1 }}</div> </router-link
              ><router-link to="/product-ops">
                <div class="link-5 rubik-normal-white-16px">{{ productOps1 }}</div> </router-link
              ><router-link to="/experiences">
                <div class="link-5 rubik-normal-white-16px">{{ expriences1 }}</div> </router-link
              ><router-link to="/contact">
                <div class="link-5 rubik-normal-white-16px">{{ place1 }}</div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="home_section_1_details-2">
          <div class="home_section_1_details_1-2">
            <img class="me-2" :src="me" alt="me" />
            <div class="home_section_1_text-2">
              <caroussel2 />
              <div class="home_section_1_buttons-2">
                <router-link to="/product-management">
                  <div class="home_button_1-2">
                    <div class="overlap-group-39">
                      <div class="rectangle-10-19"></div>
                      <div class="rectangle-9-19"></div>
                      <div class="product-manager-4 rubik-light-midnight-blue-18px">{{ productManager1 }}</div>
                    </div>
                  </div></router-link
                ><router-link to="/product-ops">
                  <div class="home_button_2-2">
                    <div class="overlap-group1-16">
                      <div class="rectangle-10-20"></div>
                      <div class="rectangle-9-20"></div>
                      <div class="product-ops-8 rubik-light-midnight-blue-18px">{{ productOps2 }}</div>
                    </div>
                  </div></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <home-section2 />
      <div class="home_section_3-2">
        <p class="je-suis-la-recherche-dun-2 inferi-regular-normal-shark-47px">{{ jeSuisLaRechercheDun }}</p>
        <div class="home_3_offers-2">
          <div class="home_3_offers_1-2">
            <div class="home_offer-2">
              <div class="overlap-group1-17">
                <div class="overlap-group-37">
                  <div class="rectangle-10-21"></div>
                  <div class="rectangle-9-21"></div>
                  <div class="product-manager-5 rubik-normal-red-damask-35px">{{ productManager2 }}</div>
                  <p class="pour-des-missions-de-4 rubik-light-black-22px" v-html="pourDesMissionsDe1"></p>
                </div>
                <router-link to="/product-management">
                  <div class="home_offer_1_1-2">
                    <img
                      class="x-7"
                      src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67e80fd1e86bdee6f8bb7528/img/----3.svg"
                      alt="--&gt;"
                    /></div
                ></router-link>
              </div>
            </div>
            <div class="home_offer-2">
              <div class="overlap-group2-9">
                <div class="overlap-group-37">
                  <div class="rectangle-10-22"></div>
                  <div class="rectangle-9-22"></div>
                  <div class="product-ops-9 rubik-normal-midnight-blue-35px">{{ productOps3 }}</div>
                  <p class="pour-des-missions-de-5 rubik-light-black-20px" v-html="pourDesMissionsDe2"></p>
                </div>
                <router-link to="/product-ops">
                  <div class="home_offer_2_1-2">
                    <img
                      class="x-8"
                      src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67e80fd1e86bdee6f8bb7528/img/----4.svg"
                      alt="--&gt;"
                    /></div
                ></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_section_4-2">
        <div class="about-2">
          <div class="propos-de-moi-2 inferi-regular-normal-shark-47px">{{ proposDeMoi }}</div>
          <p class="mes-clients-me-dcri-2 rubik-light-shark-19px" v-html="mesClientsMeDcri"></p>
          <router-link to="/experiences">
            <div class="_button-2">
              <div class="overlap-group-38">
                <div class="rectangle-10-18"></div>
                <div class="rectangle-9-18"></div>
                <div class="consulter-mes-experiences-2 rubik-normal-midnight-blue-18px">
                  {{ consulterMesExperiences }}
                </div>
              </div>
            </div></router-link
          >
        </div>
        <about-picture :src="aboutPictureProps.src" />
      </div>
      <home-section5
        :principle21Props="homeSection5Props.principle21Props"
        :principle22Props="homeSection5Props.principle22Props"
      />
      <footer class="footer-5">
        <div class="footer_contact-4">
          <p class="plutt-que-dadmirer-2 inferi-regular-normal-white-47px">{{ pluttQueDadmirer }}</p>
          <router-link to="/contact">
            <div class="_button-2">
              <div class="overlap-group-38">
                <div class="rectangle-10-18"></div>
                <div class="rectangle-9-18"></div>
                <div class="allons-y-ensemble-4 rubik-normal-midnight-blue-18px">{{ allonsYEnsemble }}</div>
              </div>
            </div></router-link
          >
        </div>
        <div class="footer_links-5">
          <div class="footer_links_1-5">
            <img class="logo-7" :src="logo_2" alt="logo_2" />
            <div class="menu-5">
              <div class="accueil-2 rubik-normal-white-16px">{{ accueil2 }}</div>
              <router-link to="/product-management">
                <div class="link-5 rubik-normal-white-16px">{{ productManagement2 }}</div> </router-link
              ><router-link to="/product-ops">
                <div class="link-5 rubik-normal-white-16px">{{ productOps4 }}</div> </router-link
              ><router-link to="/experiences">
                <div class="link-5 rubik-normal-white-16px">{{ expriences2 }}</div> </router-link
              ><router-link to="/contact">
                <div class="link-5 rubik-normal-white-16px">{{ place2 }}</div>
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
import HomeSection2 from "./HomeSection2";
import AboutPicture from "./AboutPicture";
import HomeSection5 from "./HomeSection5";
export default {
  name: "Index3",
  components: {
    Caroussel2,
    HomeSection2,
    AboutPicture,
    HomeSection5,
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
    "pluttQueDadmirer",
    "allonsYEnsemble",
    "logo_2",
    "accueil2",
    "productManagement2",
    "productOps4",
    "expriences2",
    "place2",
    "aboutPictureProps",
    "homeSection5Props",
  ],
};
</script>

<style>
.index {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
}

.global-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 80px;
  position: relative;
  width: 100%;
}

.home_section_1-2 {
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

.header-10 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.header-11,
.footer_links_1-5 {
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

.logo-7 {
  position: relative;
  width: 63.13px;
}

.menu-5 {
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

.accueil-2 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.link-5 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.home_section_1_details-2 {
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

.home_section_1_details_1-2 {
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

.me-2 {
  height: 371px;
  position: relative;
  width: 371px;
}

.home_section_1_text-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  max-width: 600px;
  position: relative;
  width: 600px;
}

.home_section_1_buttons-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 60px 60px;
  position: relative;
  width: 100%;
}

.home_button_1-2 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 253px;
}

.overlap-group-39 {
  height: 72px;
  position: relative;
  width: 251px;
}

.rectangle-10-19 {
  background-color: var(--macaroni-and-cheese);
  height: 64px;
  left: 4px;
  position: absolute;
  top: 8px;
  width: 247px;
}

.rectangle-9-19 {
  background-color: var(--negroni);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 247px;
}

.product-manager-4 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 242px;
}

.home_button_2-2 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 210px;
}

.overlap-group1-16 {
  height: 72px;
  position: relative;
  width: 208px;
}

.rectangle-10-20 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 3px;
  position: absolute;
  top: 8px;
  width: 205px;
}

.rectangle-9-20 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 205px;
}

.product-ops-8 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 201px;
}

.home_section_3-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 90px;
  position: relative;
  width: 100%;
}

.je-suis-la-recherche-dun-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.home_3_offers-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 10px 10px;
  position: relative;
  width: 100%;
}

.home_3_offers_1-2 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 91px 91px;
  justify-content: center;
  position: relative;
}

.home_offer-2 {
  height: 508px;
  position: relative;
  width: 501px;
}

.overlap-group1-17 {
  height: 471px;
  position: relative;
  width: 505px;
}

.overlap-group-37 {
  height: 444px;
  left: 0;
  position: absolute;
  top: 0;
  width: 501px;
}

.rectangle-10-21 {
  background-color: var(--red-damask);
  height: 431px;
  left: 10px;
  position: absolute;
  top: 13px;
  width: 491px;
}

.rectangle-9-21 {
  background-color: var(--negroni);
  height: 433px;
  left: 0;
  position: absolute;
  top: 0;
  width: 492px;
}

.product-manager-5 {
  left: 47px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  width: 343px;
}

.pour-des-missions-de-4 {
  left: 47px;
  letter-spacing: -0.42px;
  line-height: 33px;
  position: absolute;
  top: 133px;
  width: 430px;
}

.home_offer_1_1-2 {
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

.x-7,
.x-8 {
  height: 27px;
  width: 45px;
}

.overlap-group2-9 {
  height: 469px;
  position: relative;
  width: 505px;
}

.rectangle-10-22 {
  background-color: var(--hippie-blue);
  height: 424px;
  left: 9px;
  position: absolute;
  top: 20px;
  width: 492px;
}

.rectangle-9-22 {
  background-color: var(--link-water);
  height: 433px;
  left: 0;
  position: absolute;
  top: 0;
  width: 491px;
}

.product-ops-9 {
  left: 46px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  width: 373px;
}

.pour-des-missions-de-5 {
  left: 46px;
  letter-spacing: -0.22px;
  line-height: 30px;
  position: absolute;
  top: 133px;
  width: 430px;
}

.home_offer_2_1-2 {
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

.home_section_4-2 {
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

.about-2 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  position: relative;
}

.propos-de-moi-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 358px;
}

.mes-clients-me-dcri-2 {
  letter-spacing: 0;
  line-height: 35px;
  position: relative;
  width: 653px;
}

._button-2 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 312px;
}

.overlap-group-38 {
  height: 72px;
  position: relative;
  width: 310px;
}

.rectangle-10-18 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 5px;
  position: absolute;
  top: 8px;
  width: 305px;
}

.rectangle-9-18 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 305px;
}

.consulter-mes-experiences-2,
.allons-y-ensemble-4 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 299px;
}

.footer-5 {
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

.footer_contact-4 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  max-width: 1100px;
  position: relative;
  width: 100%;
}

.plutt-que-dadmirer-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.footer_links-5 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}
</style>
