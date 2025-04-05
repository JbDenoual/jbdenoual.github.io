<template>
  <div class="global_home">
    <div class="home_section_1">
      <div class="header-2">
        <div class="header-3">
          <logo :jb="logo1Props.jb" :denoual="logo1Props.denoual" />
          <div class="menu-1">
            <div class="accueil rubik-normal-white-16px">{{ accueil1 }}</div>
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
      <div class="home_section_1_details">
        <div class="home_section_1_details_1">
          <img class="me" :src="me" alt="me" />
          <div class="home_section_1_text">
            <div class="caroussel_2">
              <div class="caroussel">
                <div class="home_section_1_text_1">
                  <p class="librez-le-potentiel inferi-regular-normal-white-45px" v-html="librezLePotentiel"></p>
                  <p class="je-prends-en-charge rubik-light-white-22px">{{ jePrendsEnCharge }}</p>
                </div>
              </div>
            </div>
            <div class="home_section_1_buttons">
              <router-link to="/product-management">
                <div class="home_button_1">
                  <div class="overlap-group-1">
                    <div class="rectangle-10-1"></div>
                    <div class="rectangle-9-1"></div>
                    <div class="product-manager rubik-light-midnight-blue-18px">{{ productManager1 }}</div>
                  </div>
                </div></router-link
              ><router-link to="/product-ops">
                <div class="home_button_2">
                  <div class="overlap-group1">
                    <div class="rectangle-10-2"></div>
                    <div class="rectangle-9-2"></div>
                    <div class="product-ops rubik-light-midnight-blue-18px">{{ productOps2 }}</div>
                  </div>
                </div></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_section_2">
      <div class="home_section_2_1">
        <div class="home_2_left">
          <h1 class="une-approche-centre inferi-regular-normal-midnight-blue-47px">{{ uneApprocheCentre }}</h1>
          <p class="si-jai-pu-voir-pl inferi-regular-normal-midnight-blue-26px">{{ siJaiPuVoirPl }}</p>
        </div>
        <div class="home_2_right">
          <p class="indispensables-pour rubik-light-eerie-black-19px">{{ indispensablesPour }}</p>
        </div>
      </div>
    </div>
    <div class="home_section_3">
      <p class="je-suis-la-recherche-dun inferi-regular-normal-shark-47px">{{ jeSuisLaRechercheDun }}</p>
      <div class="home_3_offers">
        <div class="home_3_offers_1">
          <div class="home_offer_1">
            <div class="overlap-group1-1">
              <div class="overlap-group-2">
                <div class="rectangle-10-3"></div>
                <div class="rectangle-9-3"></div>
                <div class="product-manager-1 rubik-normal-red-damask-35px">{{ productManager2 }}</div>
                <p class="pour-des-missions-de rubik-light-black-22px" v-html="pourDesMissionsDe1"></p>
              </div>
              <router-link to="/product-management">
                <div class="home_offer_1_1">
                  <img
                    class="x"
                    src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fbb2451992eb73b30f36/img/---.svg"
                    alt="--&gt;"
                  /></div
              ></router-link>
            </div>
          </div>
          <div class="home_offer_2">
            <div class="overlap-group2">
              <div class="overlap-group-3">
                <div class="rectangle-10-4"></div>
                <div class="rectangle-9-4"></div>
                <div class="product-ops-1 rubik-normal-midnight-blue-35px">{{ productOps3 }}</div>
                <p class="pour-des-missions-de-1 rubik-light-black-20px" v-html="pourDesMissionsDe2"></p>
              </div>
              <router-link to="/product-ops">
                <div class="home_offer_2_1">
                  <img
                    class="x-1"
                    src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67f0fbb2451992eb73b30f36/img/----1.svg"
                    alt="--&gt;"
                  /></div
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_section_4">
      <div class="about">
        <div class="propos-de-moi inferi-regular-normal-shark-47px">{{ proposDeMoi }}</div>
        <p class="mes-clients-me-dcri rubik-light-shark-19px" v-html="mesClientsMeDcri"></p>
        <router-link to="/experiences">
          <div class="_button">
            <div class="overlap-group">
              <div class="rectangle-10"></div>
              <div class="rectangle-9"></div>
              <div class="consulter-mes-experiences rubik-normal-midnight-blue-18px">{{ consulterMesExperiences }}</div>
            </div>
          </div></router-link
        >
      </div>
      <about-picture :src="aboutPictureProps.src" />
    </div>
    <div class="home_section_5">
      <p class="les-principes-qui-gu inferi-regular-normal-midnight-blue-47px">{{ lesPrincipesQuiGu }}</p>
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
    </div>
    <footer class="footer-1">
      <div class="footer_contact">
        <p class="plutt-que-dadmirer inferi-regular-normal-white-47px">{{ pluttQueDadmirer }}</p>
        <router-link to="/contact">
          <div class="_button">
            <div class="overlap-group">
              <div class="rectangle-10"></div>
              <div class="rectangle-9"></div>
              <div class="allons-y-ensemble rubik-normal-midnight-blue-18px">{{ allonsYEnsemble }}</div>
            </div>
          </div></router-link
        >
      </div>
      <div class="footer_links-1">
        <div class="footer_links_1-1">
          <logo :jb="logo2Props.jb" :denoual="logo2Props.denoual" />
          <div class="menu-1">
            <div class="accueil rubik-normal-white-16px">{{ accueil2 }}</div>
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
import AboutPicture from "./AboutPicture";
import Principle1 from "./Principle1";
import Principle2 from "./Principle2";
import Principle3 from "./Principle3";
import Principle5 from "./Principle5";
export default {
  name: "GlobalHome",
  components: {
    Logo,
    AboutPicture,
    Principle1,
    Principle2,
    Principle3,
    Principle5,
  },
  props: [
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
    "uneApprocheCentre",
    "siJaiPuVoirPl",
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
    "accueil2",
    "productManagement2",
    "productOps4",
    "expriences2",
    "place2",
    "logo1Props",
    "aboutPictureProps",
    "principle21Props",
    "principle22Props",
    "logo2Props",
  ],
};
</script>

<style>
.global_home {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 80px;
  position: relative;
  width: 100%;
}

.home_section_1 {
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

.header-3 {
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

.accueil {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
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

.home_section_1_details {
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

.home_section_1_details_1 {
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

.me {
  height: 350px;
  position: relative;
  width: 350px;
}

.home_section_1_text {
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

.caroussel_2 {
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

.caroussel {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 30px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.home_section_1_text_1 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 30px;
  position: relative;
}

.librez-le-potentiel,
.une-approche-centre {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.je-prends-en-charge {
  align-self: stretch;
  letter-spacing: -0.24px;
  line-height: 33px;
  position: relative;
}

.home_section_1_buttons {
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

.home_button_1 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 253px;
}

.overlap-group-1 {
  height: 72px;
  position: relative;
  width: 251px;
}

.rectangle-10-1 {
  background-color: var(--macaroni-and-cheese);
  height: 64px;
  left: 4px;
  position: absolute;
  top: 8px;
  width: 247px;
}

.rectangle-9-1 {
  background-color: var(--negroni);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 247px;
}

.product-manager {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 242px;
}

.home_button_2 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 210px;
}

.overlap-group1 {
  height: 72px;
  position: relative;
  width: 208px;
}

.rectangle-10-2 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 3px;
  position: absolute;
  top: 8px;
  width: 205px;
}

.rectangle-9-2 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 205px;
}

.product-ops {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 201px;
}

.home_section_2 {
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

.home_section_2_1 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 53px 53px;
  justify-content: center;
  position: relative;
}

.home_2_left {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 56px;
  justify-content: center;
  max-width: 400px;
  min-width: 350px;
  position: relative;
}

.si-jai-pu-voir-pl {
  align-self: stretch;
  letter-spacing: -0.49px;
  line-height: 39px;
  position: relative;
}

.home_2_right {
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

.indispensables-pour {
  flex: 1;
  letter-spacing: -0.21px;
  line-height: 28.5px;
  margin-top: -1px;
  position: relative;
}

.home_section_3 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 90px;
  position: relative;
  width: 100%;
}

.je-suis-la-recherche-dun {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.home_3_offers {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 10px 10px;
  position: relative;
  width: 100%;
}

.home_3_offers_1 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 91px 91px;
  justify-content: center;
  position: relative;
}

.home_offer_1 {
  flex: 1;
  flex-grow: 1;
  height: 508px;
  max-width: 500px;
  position: relative;
}

.overlap-group1-1 {
  height: 471px;
  position: relative;
  width: 481px;
}

.overlap-group-2 {
  height: 444px;
  left: 0;
  position: absolute;
  top: 0;
  width: 477px;
}

.rectangle-10-3 {
  background-color: var(--red-damask);
  height: 431px;
  left: 10px;
  position: absolute;
  top: 13px;
  width: 365px;
}

.rectangle-9-3 {
  background-color: var(--negroni);
  height: 433px;
  left: 0;
  position: absolute;
  top: 0;
  width: 366px;
}

.product-manager-1 {
  left: 47px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  width: 343px;
}

.pour-des-missions-de {
  left: 47px;
  letter-spacing: -0.42px;
  line-height: 33px;
  position: absolute;
  top: 133px;
  width: 430px;
}

.home_offer_1_1 {
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

.x,
.x-1 {
  height: 27px;
  width: 45px;
}

.home_offer_2 {
  height: 508px;
  margin-left: -63px;
  margin-right: -63px;
  position: relative;
  width: 501px;
}

.overlap-group2 {
  height: 469px;
  position: relative;
  width: 505px;
}

.overlap-group-3 {
  height: 444px;
  left: 0;
  position: absolute;
  top: 0;
  width: 501px;
}

.rectangle-10-4 {
  background-color: var(--hippie-blue);
  height: 424px;
  left: 9px;
  position: absolute;
  top: 20px;
  width: 492px;
}

.rectangle-9-4 {
  background-color: var(--link-water);
  height: 433px;
  left: 0;
  position: absolute;
  top: 0;
  width: 491px;
}

.product-ops-1 {
  left: 46px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  width: 373px;
}

.pour-des-missions-de-1 {
  left: 46px;
  letter-spacing: -0.22px;
  line-height: 30px;
  position: absolute;
  top: 133px;
  width: 430px;
}

.home_offer_2_1 {
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

.home_section_4 {
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

.about {
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

.propos-de-moi {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 358px;
}

.mes-clients-me-dcri {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 35px;
  position: relative;
}

._button {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 312px;
}

.overlap-group {
  height: 72px;
  position: relative;
  width: 310px;
}

.rectangle-10 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 5px;
  position: absolute;
  top: 8px;
  width: 305px;
}

.rectangle-9 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 305px;
}

.consulter-mes-experiences,
.allons-y-ensemble {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 299px;
}

.home_section_5 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 75px;
  position: relative;
  width: 100%;
}

.les-principes-qui-gu,
.plutt-que-dadmirer {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

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

.footer_contact {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  max-width: 1100px;
  position: relative;
  width: 100%;
}

.footer_links-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

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
</style>
