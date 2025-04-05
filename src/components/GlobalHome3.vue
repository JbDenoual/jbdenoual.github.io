<template>
  <div :class="[`global_home-2`, className || ``]">
    <div class="home_section_1-2">
      <div class="header-12">
        <div class="header-13">
          <logo :jb="logo1Props.jb" :denoual="logo1Props.denoual" />
          <div class="menu-6">
            <div class="accueil-2 rubik-normal-white-16px">{{ accueil1 }}</div>
            <router-link to="/product-management"
              ><div class="link-6 rubik-normal-white-16px">Product Management</div> </router-link
            ><router-link to="/product-ops"
              ><div class="link-6 variant-1 rubik-normal-white-16px">Product Ops</div> </router-link
            ><router-link to="/experiences"
              ><div class="link-6 variant-2 rubik-normal-white-16px">Expériences</div> </router-link
            ><router-link to="/contact">
              <div class="place-2 rubik-normal-white-16px">{{ place1 }}</div>
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
                  <div class="overlap-group-54">
                    <div class="rectangle-10-23"></div>
                    <div class="rectangle-9-23"></div>
                    <div class="product-manager-4 rubik-light-midnight-blue-18px">PRODUCT MANAGER</div>
                  </div>
                </div></router-link
              ><router-link to="/product-ops">
                <div class="home_button_2-2">
                  <div class="overlap-group1-24">
                    <div class="rectangle-10-24"></div>
                    <div class="rectangle-9-24"></div>
                    <div class="product-ops-8 rubik-light-midnight-blue-18px">PRODUCT OPS</div>
                  </div>
                </div></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_section_2-2">
      <div class="home_section_2_1-2">
        <home2-left :className="home2LeftProps.className" />
        <home2-right />
      </div>
    </div>
    <div class="home_section_3-2">
      <p class="je-suis-la-recherche-dun-2 inferi-regular-normal-shark-47px">{{ jeSuisLaRechercheDun }}</p>
      <div class="home_3_offers-2">
        <div class="home_3_offers_1-2">
          <div class="home_offer">
            <div class="overlap-group1-25">
              <div class="overlap-group-50">
                <div class="rectangle-10-25"></div>
                <div class="rectangle-9-25"></div>
                <div class="product-manager-5 rubik-normal-red-damask-35px">PRODUCT MANAGER</div>
                <p class="pour-des-missions-de-4 rubik-light-black-22px">
                  Pour des missions de longue durée. <br /><br />En tant que Product Manager Expert, <br />Je pilote
                  votre produit digital en prenant en main vos process de Discovery et de Delivery, <br />Afin
                  d’atteindre vos objectifs business.
                </p>
              </div>
              <router-link to="/product-management">
                <div class="home_offer_1_1-2">
                  <img
                    class="x-7"
                    src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67eea617e98caa0bd1212493/img/----7.svg"
                    alt="--&gt;"
                  /></div
              ></router-link>
            </div>
          </div>
          <div class="home_offer">
            <div class="overlap-group2-12">
              <div class="overlap-group-50">
                <div class="rectangle-10-26"></div>
                <div class="rectangle-9-26"></div>
                <div class="product-ops-9 rubik-normal-midnight-blue-35px">PRODUCT OPS</div>
                <p class="pour-des-missions-de-5 rubik-light-black-20px">
                  Pour des missions de courte ou moyenne durée.<br /><br />Je transmets à vos équipes des méthodes qui
                  leur permettent de garder le cap et de viser juste à répétition. Je les accompagne au quotidien pour
                  les aider à résoudre leurs problématiques opérationnelles, tout en devenant plus efficace dans leur
                  quotidien.
                </p>
              </div>
              <router-link to="/product-ops">
                <div class="home_offer_2_1-2">
                  <img
                    class="x-8"
                    src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67eea617e98caa0bd1212493/img/----8.svg"
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
        <div class="propos-de-moi-2 inferi-regular-normal-shark-47px">À propos de moi</div>
        <p class="mes-clients-me-dcri-2 rubik-light-shark-19px">
          Mes clients me décrivent comme étant déterminé, curieux et fiable, certains disent aussi que je ressemble à un
          pirate.<br /><br />J’ai travaillé sur +20 produits digitaux différents, app mobile et SaaS, dans le B2B et le
          B2C, pour des grands comptes, startups, agences et indépendants.<br /><br />Avant de devenir un Expert en
          Product Management, j’ai été développeur, designer et entrepreneur. Créer des produits digitaux est un art
          complexe qui regroupent des domaines très différents et j’aime apporter de la synergie et de l’entraide pour
          libérer le potentiel des équipes.<br /><br />Je viens de Rennes, en Bretagne, j’ai vécu en Asie et en
          Australie et je vis actuellement à Paris. Quand je ne fais pas de PM, je prends ma planche de surf et je pars
          dans le sud ouest de la France pour attraper quelques vagues, j’aime aussi prendre des photos, grimper des
          falaises, méditer et partager ce que j’apprends autour de moi.
        </p>
        <router-link to="/experiences">
          <div class="_button-2">
            <div class="overlap-group-51">
              <div class="rectangle-10-21"></div>
              <div class="rectangle-9-21"></div>
              <div class="consulter-mes-experiences-2 rubik-normal-midnight-blue-18px">CONSULTER MES EXPERIENCES</div>
            </div>
          </div></router-link
        >
      </div>
      <about-picture :src="aboutPictureProps.src" :className="aboutPictureProps.className" />
    </div>
    <div class="home_section_5-2">
      <p class="les-principes-qui-gu-2 inferi-trial-regular-normal-midnight-blue-47px">{{ lesPrincipesQuiGu }}</p>
      <div class="home_principles-2">
        <div class="principle-10">
          <principle1 />
          <principle2 :surname="principle21Props.surname" />
          <principle3 />
        </div>
        <div class="principle-10">
          <principle2 :surname="principle22Props.surname" />
          <principle5 />
        </div>
      </div>
    </div>
    <footer class="footer-6">
      <div class="footer_contact-5">
        <p class="plutt-que-dadmirer-2 inferi-regular-normal-white-47px">{{ pluttQueDadmirer }}</p>
        <router-link to="/contact">
          <div class="_button-2">
            <div class="overlap-group-51">
              <div class="rectangle-10-21"></div>
              <div class="rectangle-9-21"></div>
              <div class="allons-y-ensemble-5 rubik-normal-midnight-blue-18px">{{ allonsYEnsemble }}</div>
            </div>
          </div></router-link
        >
      </div>
      <div class="footer_links-6">
        <div class="footer_links_1-6">
          <logo :jb="logo2Props.jb" :denoual="logo2Props.denoual" />
          <div class="menu-6">
            <div class="accueil-2 variant-1 rubik-normal-white-16px">Accueil</div>
            <router-link to="/product-management"
              ><div class="link-6 variant-3 rubik-normal-white-16px">Product Management</div> </router-link
            ><router-link to="/product-ops"
              ><div class="link-6 variant-4 rubik-normal-white-16px">Product Ops</div> </router-link
            ><router-link to="/experiences">
              <div class="link-6 variant-5 rubik-normal-white-16px">{{ expriences2 }}</div> </router-link
            ><router-link to="/contact"
              ><div class="place-2 variant-1 rubik-normal-white-16px">Contact</div>
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
import Home2Left from "./Home2Left";
import Home2Right from "./Home2Right";
import AboutPicture from "./AboutPicture";
import Principle1 from "./Principle1";
import Principle2 from "./Principle2";
import Principle3 from "./Principle3";
import Principle5 from "./Principle5";
export default {
  name: "GlobalHome3",
  components: {
    Logo,
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
    "accueil1",
    "place1",
    "me",
    "jeSuisLaRechercheDun",
    "lesPrincipesQuiGu",
    "pluttQueDadmirer",
    "allonsYEnsemble",
    "expriences2",
    "className",
    "logo1Props",
    "home2LeftProps",
    "aboutPictureProps",
    "principle21Props",
    "principle22Props",
    "logo2Props",
  ],
};
</script>

<style>
.global_home-2 {
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

.header-12 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.header-13,
.footer_links_1-6 {
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

.menu-6 {
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

.accueil-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.link-6 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.place-2,
.global_home-2.global_home-3 .link-6.variant-1,
.global_home-2.global_home-3 .link-6.variant-2,
.global_home-2.global_home-3 .link-6.variant-3,
.global_home-2.global_home-3 .link-6.variant-4,
.global_home-2.global_home-3 .link-6.variant-5 {
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

.overlap-group-54 {
  height: 72px;
  position: relative;
  width: 251px;
}

.rectangle-10-23 {
  background-color: var(--macaroni-and-cheese);
  height: 64px;
  left: 4px;
  position: absolute;
  top: 8px;
  width: 247px;
}

.rectangle-9-23 {
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

.overlap-group1-24 {
  height: 72px;
  position: relative;
  width: 208px;
}

.rectangle-10-24 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 3px;
  position: absolute;
  top: 8px;
  width: 205px;
}

.rectangle-9-24 {
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

.home_section_2-2 {
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

.home_section_2_1-2 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 53px 53px;
  justify-content: center;
  position: relative;
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

.home_offer {
  height: 508px;
  position: relative;
  width: 501px;
}

.overlap-group1-25 {
  height: 471px;
  position: relative;
  width: 505px;
}

.overlap-group-50 {
  height: 444px;
  left: 0;
  position: absolute;
  top: 0;
  width: 501px;
}

.rectangle-10-25 {
  background-color: var(--red-damask);
  height: 431px;
  left: 10px;
  position: absolute;
  top: 13px;
  width: 491px;
}

.rectangle-9-25 {
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

.overlap-group2-12 {
  height: 469px;
  position: relative;
  width: 505px;
}

.rectangle-10-26 {
  background-color: var(--hippie-blue);
  height: 424px;
  left: 9px;
  position: absolute;
  top: 20px;
  width: 492px;
}

.rectangle-9-26 {
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

.overlap-group-51 {
  height: 72px;
  position: relative;
  width: 310px;
}

.rectangle-10-21 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 5px;
  position: absolute;
  top: 8px;
  width: 305px;
}

.rectangle-9-21 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 305px;
}

.consulter-mes-experiences-2,
.allons-y-ensemble-5 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 299px;
}

.home_section_5-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 75px;
  position: relative;
  width: 100%;
}

.les-principes-qui-gu-2,
.plutt-que-dadmirer-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.home_principles-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
}

.principle-10 {
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

.footer-6 {
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

.footer_contact-5 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  max-width: 1100px;
  position: relative;
  width: 100%;
}

.footer_links-6 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.global_home-2.global_home-3 .accueil-2,
.global_home-2.global_home-3 .link-6 {
  margin-top: unset;
}

.global_home-2.global_home-3 .accueil-2.variant-1 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.global_home-2.global_home-3 .place-2 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: unset;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
