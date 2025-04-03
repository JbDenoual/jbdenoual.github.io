<template>
  <div class="global_home-1">
    <div class="home_section_1-1">
      <div class="header-2">
        <div class="header-3">
          <logo :jb="logo1Props.jb" :denoual="logo1Props.denoual" />
          <div class="menu-1">
            <div class="accueil-1 rubik-normal-white-16px">{{ accueil1 }}</div>
            <router-link to="/product-management">
              <div class="link-1 rubik-normal-white-16px">{{ productManagement1 }}</div> </router-link
            ><router-link to="/product-ops">
              <div class="link-1 rubik-normal-white-16px">{{ productOps1 }}</div> </router-link
            ><router-link to="/experiences">
              <div class="link-1 rubik-normal-white-16px">{{ expriences1 }}</div> </router-link
            ><router-link to="/contact">
              <div class="link-1 rubik-normal-white-16px">{{ place1 }}</div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="home_section_1_details-1">
        <div class="home_section_1_details_1-1">
          <img class="me-1" :src="me" alt="me" />
          <div class="home_section_1_text-1">
            <caroussel2 />
            <div class="home_section_1_buttons-1">
              <router-link to="/product-management">
                <div class="home_button_1-1">
                  <div class="overlap-group-15">
                    <div class="rectangle-10-6"></div>
                    <div class="rectangle-9-6"></div>
                    <div class="product-manager-2 rubik-light-midnight-blue-18px">{{ productManager1 }}</div>
                  </div>
                </div></router-link
              ><router-link to="/product-ops">
                <div class="home_button_2-1">
                  <div class="overlap-group1-12">
                    <div class="rectangle-10-7"></div>
                    <div class="rectangle-9-7"></div>
                    <div class="product-ops-2 rubik-light-midnight-blue-18px">{{ productOps2 }}</div>
                  </div>
                </div></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <home-section2 />
    <div class="home_section_3-1">
      <p class="je-suis-la-recherche-dun-1 inferi-regular-normal-shark-47px">{{ jeSuisLaRechercheDun }}</p>
      <div class="home_3_offers-1">
        <div class="home_3_offers_1-1">
          <div class="home_offer-1">
            <div class="overlap-group1-13">
              <div class="overlap-group-13">
                <div class="rectangle-10-8"></div>
                <div class="rectangle-9-8"></div>
                <div class="product-manager-3 rubik-normal-red-damask-35px">{{ productManager2 }}</div>
                <p class="pour-des-missions-de-2 rubik-light-black-22px" v-html="pourDesMissionsDe1"></p>
              </div>
              <router-link to="/product-management">
                <div class="home_offer_1_1-1">
                  <img
                    class="x-2"
                    src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67e80fd1e86bdee6f8bb7528/img/----3.svg"
                    alt="--&gt;"
                  /></div
              ></router-link>
            </div>
          </div>
          <div class="home_offer-1">
            <div class="overlap-group2-6">
              <div class="overlap-group-13">
                <div class="rectangle-10-9"></div>
                <div class="rectangle-9-9"></div>
                <div class="product-ops-3 rubik-normal-midnight-blue-35px">{{ productOps3 }}</div>
                <p class="pour-des-missions-de-3 rubik-light-black-20px" v-html="pourDesMissionsDe2"></p>
              </div>
              <router-link to="/product-ops">
                <div class="home_offer_2_1-1">
                  <img
                    class="x-3"
                    src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67e80fd1e86bdee6f8bb7528/img/----4.svg"
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
            <div class="overlap-group-14">
              <div class="rectangle-10-5"></div>
              <div class="rectangle-9-5"></div>
              <div class="consulter-mes-experiences-1 rubik-normal-midnight-blue-18px">
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
    <footer class="footer-1">
      <div class="footer_contact-1">
        <p class="plutt-que-dadmirer-1 inferi-regular-normal-white-47px">{{ pluttQueDadmirer }}</p>
        <router-link to="/contact">
          <div class="_button-1">
            <div class="overlap-group-14">
              <div class="rectangle-10-5"></div>
              <div class="rectangle-9-5"></div>
              <div class="allons-y-ensemble-1 rubik-normal-midnight-blue-18px">{{ allonsYEnsemble }}</div>
            </div>
          </div></router-link
        >
      </div>
      <div class="footer_links-1">
        <div class="footer_links_1-1">
          <logo :jb="logo2Props.jb" :denoual="logo2Props.denoual" />
          <div class="menu-1">
            <div class="accueil-1 rubik-normal-white-16px">{{ accueil2 }}</div>
            <router-link to="/product-management">
              <div class="link-1 rubik-normal-white-16px">{{ productManagement2 }}</div> </router-link
            ><router-link to="/product-ops">
              <div class="link-1 rubik-normal-white-16px">{{ productOps4 }}</div> </router-link
            ><router-link to="/experiences">
              <div class="link-1 rubik-normal-white-16px">{{ expriences2 }}</div> </router-link
            ><router-link to="/contact">
              <div class="link-1 rubik-normal-white-16px">{{ place2 }}</div>
            </router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from "./Logo";
import Caroussel2 from "./Caroussel2";
import HomeSection2 from "./HomeSection2";
import AboutPicture from "./AboutPicture";
import HomeSection5 from "./HomeSection5";
export default {
  name: "GlobalHome2",
  components: {
    Logo,
    Caroussel2,
    HomeSection2,
    AboutPicture,
    HomeSection5,
  },
  props: [
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
    "accueil2",
    "productManagement2",
    "productOps4",
    "expriences2",
    "place2",
    "logo1Props",
    "aboutPictureProps",
    "homeSection5Props",
    "logo2Props",
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

.header-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.header-3,
.footer_links_1-1 {
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

.menu-1 {
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

.accueil-1 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.link-1 {
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
  padding: 0px 42px 42px 0px;
  position: relative;
}

.me-1 {
  height: 371px;
  position: relative;
  width: 371px;
}

.home_section_1_text-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  max-width: 600px;
  position: relative;
  width: 600px;
}

.home_section_1_buttons-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 60px 60px;
  position: relative;
  width: 100%;
}

.home_button_1-1 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 253px;
}

.overlap-group-15 {
  height: 72px;
  position: relative;
  width: 251px;
}

.rectangle-10-6 {
  background-color: var(--macaroni-and-cheese);
  height: 64px;
  left: 4px;
  position: absolute;
  top: 8px;
  width: 247px;
}

.rectangle-9-6 {
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

.overlap-group1-12 {
  height: 72px;
  position: relative;
  width: 208px;
}

.rectangle-10-7 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 3px;
  position: absolute;
  top: 8px;
  width: 205px;
}

.rectangle-9-7 {
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
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
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

.home_offer-1 {
  height: 508px;
  position: relative;
  width: 501px;
}

.overlap-group1-13 {
  height: 471px;
  position: relative;
  width: 505px;
}

.overlap-group-13 {
  height: 444px;
  left: 0;
  position: absolute;
  top: 0;
  width: 501px;
}

.rectangle-10-8 {
  background-color: var(--red-damask);
  height: 431px;
  left: 10px;
  position: absolute;
  top: 13px;
  width: 491px;
}

.rectangle-9-8 {
  background-color: var(--negroni);
  height: 433px;
  left: 0;
  position: absolute;
  top: 0;
  width: 492px;
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

.overlap-group2-6 {
  height: 469px;
  position: relative;
  width: 505px;
}

.rectangle-10-9 {
  background-color: var(--hippie-blue);
  height: 424px;
  left: 9px;
  position: absolute;
  top: 20px;
  width: 492px;
}

.rectangle-9-9 {
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
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
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
  letter-spacing: 0;
  line-height: 35px;
  position: relative;
  width: 653px;
}

._button-1 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 312px;
}

.overlap-group-14 {
  height: 72px;
  position: relative;
  width: 310px;
}

.rectangle-10-5 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 5px;
  position: absolute;
  top: 8px;
  width: 305px;
}

.rectangle-9-5 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 305px;
}

.consulter-mes-experiences-1,
.allons-y-ensemble-1 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 299px;
}

.footer-1 {
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

.footer_contact-1 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  max-width: 1100px;
  position: relative;
  width: 100%;
}

.plutt-que-dadmirer-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.footer_links-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}
</style>
