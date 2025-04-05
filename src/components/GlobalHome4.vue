<template>
  <div class="global_home-4">
    <div class="home_section_1-4">
      <div class="header-16">
        <div class="header-17">
          <img
            class="logo-17"
            src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67e457f15401f68fc04be158/img/logo@2x.png"
            alt="Logo"
          />
          <div class="menu-8">
            <div class="accueil-3 rubik-normal-white-16px">Accueil</div>
            <router-link to="/product-management"
              ><div class="link-7 rubik-normal-white-16px">Product Management</div> </router-link
            ><router-link to="/product-ops"><div class="link-7 rubik-normal-white-16px">Product Ops</div> </router-link
            ><router-link to="/experiences"><div class="link-7 rubik-normal-white-16px">Expériences</div> </router-link
            ><router-link to="/contact"><div class="link-7 rubik-normal-white-16px">Contact</div> </router-link>
          </div>
        </div>
      </div>
      <div class="home_section_1_details-4">
        <div class="home_section_1_details_1-4">
          <img
            class="me-4"
            src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67e808922ff18dbfb1113119/img/me-2@2x.png"
            alt="me"
          />
          <div class="home_section_1_text-4">
            <caroussel2 />
            <div class="home_section_1_buttons-4">
              <router-link to="/product-management">
                <div class="home_button_1-4">
                  <div class="overlap-group-60">
                    <div class="rectangle-10-33"></div>
                    <div class="rectangle-9-33"></div>
                    <div class="product-manager-8 rubik-light-midnight-blue-18px">PRODUCT MANAGER</div>
                  </div>
                </div></router-link
              ><router-link to="/product-ops">
                <div class="home_button_2-4">
                  <div class="overlap-group1-28">
                    <div class="rectangle-10-34"></div>
                    <div class="rectangle-9-34"></div>
                    <div class="product-ops-12 rubik-light-midnight-blue-18px">PRODUCT OPS</div>
                  </div>
                </div></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <home-section2 :home2LeftProps="homeSection2Props.home2LeftProps" />
    <div class="home_section_3-4">
      <p class="je-suis-la-recherche-dun-4 inferi-regular-normal-shark-47px">“Je suis à la recherche d’un...“</p>
      <div class="home_3_offers-4">
        <div class="home_3_offers_1-4">
          <div class="home_offer-2">
            <div class="overlap-group1-29">
              <div class="overlap-group-56">
                <div class="rectangle-10-35"></div>
                <div class="rectangle-9-35"></div>
                <div class="product-manager-9 rubik-normal-red-damask-35px">PRODUCT MANAGER</div>
                <p class="pour-des-missions-de-8 rubik-light-black-22px">
                  Pour des missions de longue durée. <br /><br />En tant que Product Manager Expert, <br />Je pilote
                  votre produit digital en prenant en main vos process de Discovery et de Delivery, <br />Afin
                  d’atteindre vos objectifs business.
                </p>
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
          <div class="home_offer-2">
            <div class="overlap-group2-14">
              <div class="overlap-group-56">
                <div class="rectangle-10-36"></div>
                <div class="rectangle-9-36"></div>
                <div class="product-ops-13 rubik-normal-midnight-blue-35px">PRODUCT OPS</div>
                <p class="pour-des-missions-de-9 rubik-light-black-20px">
                  Pour des missions de courte ou moyenne durée.<br /><br />Je transmets à vos équipes des méthodes qui
                  leur permettent de garder le cap et de viser juste à répétition. Je les accompagne au quotidien pour
                  les aider à résoudre leurs problématiques opérationnelles, tout en devenant plus efficace dans leur
                  quotidien.
                </p>
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
        <div class="propos-de-moi-4 inferi-regular-normal-shark-47px">À propos de moi</div>
        <p class="mes-clients-me-dcri-4 rubik-light-shark-19px">
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
          <div class="_button-4">
            <div class="overlap-group-57">
              <div class="rectangle-10-31"></div>
              <div class="rectangle-9-31"></div>
              <div class="consulter-mes-experiences-4 rubik-normal-midnight-blue-18px">CONSULTER MES EXPERIENCES</div>
            </div>
          </div></router-link
        >
      </div>
      <about-picture :src="aboutPictureProps.src" :className="aboutPictureProps.className" />
    </div>
    <home-section5
      :principle21Props="homeSection5Props.principle21Props"
      :principle22Props="homeSection5Props.principle22Props"
    />
    <footer class="footer-8">
      <div class="footer_contact-7">
        <p class="plutt-que-dadmirer-4 inferi-regular-normal-white-47px">
          Plutôt que d’admirer les autres, devenez une source d’inspiration pour eux
        </p>
        <router-link to="/contact">
          <div class="_button-4">
            <div class="overlap-group-57">
              <div class="rectangle-10-31"></div>
              <div class="rectangle-9-31"></div>
              <div class="allons-y-ensemble-7 rubik-normal-midnight-blue-18px">ALLONS-Y ENSEMBLE</div>
            </div>
          </div></router-link
        >
      </div>
      <div class="footer_links-8">
        <div class="footer_links_1-8">
          <img
            class="logo-17"
            src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67e801427988368e651c01fa/img/logo-2-3.png"
            alt="logo_2"
          />
          <div class="menu-8">
            <div class="accueil-3 rubik-normal-white-16px">Accueil</div>
            <router-link to="/product-management"
              ><div class="link-7 rubik-normal-white-16px">Product Management</div> </router-link
            ><router-link to="/product-ops"><div class="link-7 rubik-normal-white-16px">Product Ops</div> </router-link
            ><router-link to="/experiences"><div class="link-7 rubik-normal-white-16px">Expériences</div> </router-link
            ><router-link to="/contact"><div class="link-7 rubik-normal-white-16px">Contact</div> </router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Caroussel2 from "./Caroussel2";
import HomeSection2 from "./HomeSection2";
import AboutPicture from "./AboutPicture";
import HomeSection5 from "./HomeSection5";
export default {
  name: "GlobalHome4",
  components: {
    Caroussel2,
    HomeSection2,
    AboutPicture,
    HomeSection5,
  },
  props: ["homeSection2Props", "aboutPictureProps", "homeSection5Props"],
};
</script>

<style>
.global_home-4,
.global_home-5 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 80px;
  position: relative;
  width: 100%;
}

.home_section_1-4,
.home_section_1-5 {
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

.header-16,
.header-18 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.header-17,
.footer_links_1-8,
.header-19,
.footer_links_1-9 {
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

.logo-17,
.logo-18 {
  position: relative;
  width: 63.13px;
}

.menu-8,
.menu-9 {
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

.accueil-3,
.accueil-4 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.link-7,
.link-8 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.home_section_1_details-4,
.home_section_1_details-5 {
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

.home_section_1_details_1-4,
.home_section_1_details_1-5 {
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

.me-4,
.me-5 {
  height: 371px;
  position: relative;
  width: 371px;
}

.home_section_1_text-4,
.home_section_1_text-5 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  max-width: 600px;
  position: relative;
  width: 600px;
}

.home_section_1_buttons-4,
.home_section_1_buttons-5 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 60px 60px;
  position: relative;
  width: 100%;
}

.home_button_1-4,
.home_button_1-5 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 253px;
}

.overlap-group-60,
.overlap-group-61 {
  height: 72px;
  position: relative;
  width: 251px;
}

.rectangle-10-33,
.rectangle-10-37 {
  background-color: var(--macaroni-and-cheese);
  height: 64px;
  left: 4px;
  position: absolute;
  top: 8px;
  width: 247px;
}

.rectangle-9-33,
.rectangle-9-37 {
  background-color: var(--negroni);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 247px;
}

.product-manager-8,
.product-manager-10 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 242px;
}

.home_button_2-4,
.home_button_2-5 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 210px;
}

.overlap-group1-28,
.overlap-group1-30 {
  height: 72px;
  position: relative;
  width: 208px;
}

.rectangle-10-34,
.rectangle-10-38 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 3px;
  position: absolute;
  top: 8px;
  width: 205px;
}

.rectangle-9-34,
.rectangle-9-38 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 205px;
}

.product-ops-12,
.product-ops-14 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 201px;
}

.home_section_3-4,
.home_section_3-5 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 90px;
  position: relative;
  width: 100%;
}

.je-suis-la-recherche-dun-4,
.je-suis-la-recherche-dun-5 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.home_3_offers-4,
.home_3_offers-5 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 10px 10px;
  position: relative;
  width: 100%;
}

.home_3_offers_1-4,
.home_3_offers_1-5 {
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 91px 91px;
  justify-content: center;
  position: relative;
}

.home_offer-2,
.home_offer-3 {
  height: 508px;
  position: relative;
  width: 501px;
}

.overlap-group1-29,
.overlap-group1-31 {
  height: 471px;
  position: relative;
  width: 505px;
}

.overlap-group-56,
.overlap-group-58 {
  height: 444px;
  left: 0;
  position: absolute;
  top: 0;
  width: 501px;
}

.rectangle-10-35,
.rectangle-10-39 {
  background-color: var(--red-damask);
  height: 431px;
  left: 10px;
  position: absolute;
  top: 13px;
  width: 491px;
}

.rectangle-9-35,
.rectangle-9-39 {
  background-color: var(--negroni);
  height: 433px;
  left: 0;
  position: absolute;
  top: 0;
  width: 492px;
}

.product-manager-9,
.product-manager-11 {
  left: 47px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  width: 343px;
}

.pour-des-missions-de-8,
.pour-des-missions-de-10 {
  left: 47px;
  letter-spacing: -0.42px;
  line-height: 33px;
  position: absolute;
  top: 133px;
  width: 430px;
}

.home_offer_1_1-4,
.home_offer_1_1-5 {
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
.x-12,
.x-13,
.x-14 {
  height: 27px;
  width: 45px;
}

.overlap-group2-14,
.overlap-group2-15 {
  height: 469px;
  position: relative;
  width: 505px;
}

.rectangle-10-36,
.rectangle-10-40 {
  background-color: var(--hippie-blue);
  height: 424px;
  left: 9px;
  position: absolute;
  top: 20px;
  width: 492px;
}

.rectangle-9-36,
.rectangle-9-40 {
  background-color: var(--link-water);
  height: 433px;
  left: 0;
  position: absolute;
  top: 0;
  width: 491px;
}

.product-ops-13,
.product-ops-15 {
  left: 46px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  width: 373px;
}

.pour-des-missions-de-9,
.pour-des-missions-de-11 {
  left: 46px;
  letter-spacing: -0.22px;
  line-height: 30px;
  position: absolute;
  top: 133px;
  width: 430px;
}

.home_offer_2_1-4,
.home_offer_2_1-5 {
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

.home_section_4-4,
.home_section_4-5 {
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

.about-4,
.about-5 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  position: relative;
}

.propos-de-moi-4,
.propos-de-moi-5 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 358px;
}

.mes-clients-me-dcri-4,
.mes-clients-me-dcri-5 {
  letter-spacing: 0;
  line-height: 35px;
  position: relative;
  width: 653px;
}

._button-4,
._button-5 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 312px;
}

.overlap-group-57,
.overlap-group-59 {
  height: 72px;
  position: relative;
  width: 310px;
}

.rectangle-10-31,
.rectangle-10-32 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 5px;
  position: absolute;
  top: 8px;
  width: 305px;
}

.rectangle-9-31,
.rectangle-9-32 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 305px;
}

.consulter-mes-experiences-4,
.allons-y-ensemble-7,
.consulter-mes-experiences-5,
.allons-y-ensemble-8 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 299px;
}

.footer-8,
.footer-9 {
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

.footer_contact-7,
.footer_contact-8 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  max-width: 1100px;
  position: relative;
  width: 100%;
}

.plutt-que-dadmirer-4,
.plutt-que-dadmirer-5 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.footer_links-8,
.footer_links-9 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}
</style>
