<template>
  <div class="experiences screen">
    <div class="global-1">
      <div class="xp_section_1">
        <div class="header-4">
          <div class="header-5">
            <router-link to="/index"><img class="logo-6" :src="logo" alt="Logo" /></router-link>
            <div class="menu-2">
              <router-link to="/index">
                <div class="link-2 rubik-normal-white-16px">{{ accueil1 }}</div> </router-link
              ><router-link to="/product-management">
                <div class="link-2 rubik-normal-white-16px">{{ productManagement1 }}</div> </router-link
              ><router-link to="/product-ops">
                <div class="link-2 rubik-normal-white-16px">{{ productOps1 }}</div>
              </router-link>
              <div class="expriences rubik-normal-white-16px">{{ expriences1 }}</div>
              <router-link to="/contact">
                <div class="link-2 rubik-normal-white-16px">{{ place1 }}</div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="pm_section_1_details">
          <h1 class="expriences-1 inferi-regular-normal-white-47px">{{ expriences2 }}</h1>
          <p class="fort-de-plus-de-10-a rubik-light-white-22px">{{ fortDePlusDe10A }}</p>
          <router-link to="/contact">
            <div class="pm_section_1_button">
              <div class="overlap-group-10">
                <div class="rectangle-10-5"></div>
                <div class="rectangle-9-5"></div>
                <p class="discutons-le-temps-dun-cafe rubik-normal-midnight-blue-18px">{{ discutonsLeTempsDunCafe }}</p>
              </div>
            </div></router-link
          >
        </div>
      </div>
      <div class="section-2">
        <div class="left">
          <p class="mon-profil-en-quelques-mots inferi-regular-normal-shark-47px">{{ monProfilEnQuelquesMots }}</p>
        </div>
        <div class="frame-25">
          <div class="frame-14">
            <div class="group-25">
              <div class="overlap-group-11 rubik-light-shark-28px">
                <div class="rectangle-31"></div>
                <div class="rectangle-30-12"></div>
                <p class="ancien-directeur-d">{{ ancienDirecteurD }}</p>
                <p class="radio-france-oui">{{ radioFranceOui }}</p>
                <p class="crateur-dapplica">{{ crateurDapplica }}</p>
                <div class="anglais-courant">{{ anglaisCourant }}</div>
                <p class="x10-ans-dexprien">{{ x10AnsDexprien }}</p>
              </div>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/jean-baptiste-denoual-3a4b4232/" target="_blank">
            <div class="button-1">
              <div class="overlap-group1-8">
                <div class="rectangle-10-6"></div>
                <div class="rectangle-9-6"></div>
                <p class="voir-mes-experiences rubik-normal-midnight-blue-18px">{{ voirMesExperiences }}</p>
              </div>
            </div></a
          >
        </div>
      </div>
      <div class="section-3-1">
        <div class="tlcharger-mon-cv-dtaill inferi-regular-normal-midnight-blue-47px">{{ tlchargerMonCvDtaill }}</div>
        <a href="files/CV Compétences Jean-Baptiste Denoual 2025.pdf" target="_blank">
          <div class="frame-26">
            <div class="group-9">
              <div class="overlap-group-12">
                <div class="rectangle-31-1"></div>
                <img class="cv_screenshot" :src="cv_Screenshot" alt="cv_screenshot" />
              </div>
            </div></div
        ></a>
      </div>
      <div class="section-4">
        <p class="ce-quils-disent-de-moi inferi-regular-normal-shark-47px">{{ ceQuilsDisentDeMoi }}</p>
        <div class="frame-20">
          <div class="group-17">
            <div class="overlap-group-13">
              <div class="rectangle-31-2"></div>
              <div class="rectangle-30-13"></div>
              <p class="jai-eu-l rubik-light-shark-16px" v-html="jAiEuLePlaisirD"></p>
              <div class="group-19">
                <img class="kevin" :src="kevin" alt="kevin" />
                <div class="group-18">
                  <div class="name inferi-trial-regular-normal-shark-26px">{{ name }}</div>
                  <div class="designer-ui-et-developpeur inferi-trial-regular-normal-shark-16px">
                    {{ designerUiEtDeveloppeur }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group-18-1">
            <div class="overlap-group1-9">
              <div class="rectangle-31-3"></div>
              <div class="rectangle-30-14"></div>
              <p class="jai-eu-l rubik-light-shark-16px" v-html="jAiEuLOccasionD"></p>
              <div class="group-19-1">
                <img class="matthieu" :src="matthieu" alt="matthieu" />
                <div class="group-18-2">
                  <div class="matthieu-oger inferi-trial-regular-normal-shark-26px">{{ matthieuOger }}</div>
                  <div class="dsi-adjoint inferi-trial-regular-normal-shark-16px">{{ dsiAdjoint }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer-2">
        <div class="footer_contact-1">
          <p class="crer-un-produit-est inferi-regular-normal-white-47px">{{ crerUnProduitEst }}</p>
          <router-link to="/contact">
            <div class="footer_button">
              <div class="overlap-group-14">
                <div class="rectangle-10-7"></div>
                <div class="rectangle-9-7"></div>
                <div class="allons-y-ensemble-1 rubik-normal-midnight-blue-18px">{{ allonsYEnsemble }}</div>
              </div>
            </div></router-link
          >
        </div>
        <div class="footer_links-2">
          <div class="footer_links_1-2">
            <router-link to="/index"><img class="logo-6" :src="logo_2" alt="logo_2" /></router-link>
            <div class="menu-2">
              <router-link to="/index">
                <div class="link-2 rubik-normal-white-16px">{{ accueil2 }}</div> </router-link
              ><router-link to="/product-management">
                <div class="link-2 rubik-normal-white-16px">{{ productManagement2 }}</div> </router-link
              ><router-link to="/product-ops">
                <div class="link-2 rubik-normal-white-16px">{{ productOps2 }}</div>
              </router-link>
              <div class="expriences rubik-normal-white-16px">{{ expriences3 }}</div>
              <router-link to="/contact">
                <div class="link-2 rubik-normal-white-16px">{{ place2 }}</div>
              </router-link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experiences",
  props: [
    "logo",
    "accueil1",
    "productManagement1",
    "productOps1",
    "expriences1",
    "place1",
    "expriences2",
    "fortDePlusDe10A",
    "discutonsLeTempsDunCafe",
    "monProfilEnQuelquesMots",
    "ancienDirecteurD",
    "radioFranceOui",
    "crateurDapplica",
    "anglaisCourant",
    "x10AnsDexprien",
    "voirMesExperiences",
    "tlchargerMonCvDtaill",
    "cv_Screenshot",
    "ceQuilsDisentDeMoi",
    "jAiEuLePlaisirD",
    "kevin",
    "name",
    "designerUiEtDeveloppeur",
    "jAiEuLOccasionD",
    "matthieu",
    "matthieuOger",
    "dsiAdjoint",
    "crerUnProduitEst",
    "allonsYEnsemble",
    "logo_2",
    "accueil2",
    "productManagement2",
    "productOps2",
    "expriences3",
    "place2",
  ],
};
</script>

<style>
.experiences {
  align-items: center;
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

.xp_section_1 {
  align-items: center;
  align-self: stretch;
  background-color: var(--red-damask);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.header-4 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.header-5,
.footer_links_1-2 {
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

.menu-2 {
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

.link-2 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.expriences {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.pm_section_1_details {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 60px;
  max-width: 720px;
  padding: 42px 0px;
  position: relative;
  width: 100%;
}

.expriences-1,
.tlcharger-mon-cv-dtaill,
.ce-quils-disent-de-moi {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.fort-de-plus-de-10-a {
  letter-spacing: -0.24px;
  line-height: 33px;
  position: relative;
  text-align: center;
}

.pm_section_1_button {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 483px;
}

.overlap-group-10 {
  height: 72px;
  position: relative;
  width: 481px;
}

.rectangle-10-5 {
  background-color: var(--macaroni-and-cheese);
  height: 64px;
  left: 8px;
  position: absolute;
  top: 8px;
  width: 473px;
}

.rectangle-9-5 {
  background-color: var(--negroni);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 473px;
}

.discutons-le-temps-dun-cafe {
  left: 4px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 464px;
}

.section-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 90px;
  position: relative;
  width: 100%;
}

.left {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.mon-profil-en-quelques-mots {
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.frame-25 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  max-width: 1000px;
  padding: 0px 20px;
  position: relative;
  width: 100%;
}

.frame-14 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  padding: 50px 40px;
  position: relative;
  width: 100%;
}

.group-25 {
  align-self: stretch;
  height: 504px;
  margin-right: -10px;
  position: relative;
  width: 100%;
}

.overlap-group-11 {
  height: 504px;
  position: relative;
  width: 880px;
}

.rectangle-31 {
  background-color: var(--hippie-blue);
  height: 492px;
  left: 9px;
  position: absolute;
  top: 12px;
  width: 871px;
}

.rectangle-30-12 {
  background-color: var(--link-water);
  height: 491px;
  left: 0;
  position: absolute;
  top: 0;
  width: 872px;
}

.ancien-directeur-d {
  left: 43px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 131px;
  width: 739px;
}

.radio-france-oui {
  left: 43px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 214px;
  width: 760px;
}

.crateur-dapplica {
  left: 44px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 300px;
  width: 798px;
}

.anglais-courant {
  left: 43px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 391px;
  width: 760px;
}

.x10-ans-dexprien {
  left: 43px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 48px;
  width: 739px;
}

.button-1 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 529.41px;
}

.overlap-group1-8 {
  height: 72px;
  position: relative;
  width: 527px;
}

.rectangle-10-6 {
  background-color: var(--macaroni-and-cheese);
  height: 64px;
  left: 8px;
  position: absolute;
  top: 8px;
  width: 519px;
}

.rectangle-9-6 {
  background-color: var(--negroni);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 519px;
}

.voir-mes-experiences {
  left: 4px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 509px;
}

.section-3-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 63px;
  position: relative;
  width: 100%;
}

.frame-26 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  max-width: 700px;
  padding: 0px 20px;
  position: relative;
  width: 100%;
}

.group-9 {
  align-self: stretch;
  height: 938.74px;
  position: relative;
  width: 100%;
}

.overlap-group-12 {
  height: 939px;
  position: relative;
  width: 660px;
}

.rectangle-31-1 {
  background-color: var(--hippie-blue);
  height: 933px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 660px;
}

.cv_screenshot {
  height: 925px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 652px;
}

.section-4 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 77px;
  position: relative;
  width: 100%;
}

.frame-20 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 60px 60px;
  justify-content: center;
  padding: 0px 20px;
  position: relative;
  width: 100%;
}

.group-17 {
  height: 503px;
  position: relative;
  width: 492px;
}

.overlap-group-13 {
  height: 503px;
  position: relative;
  width: 490px;
}

.rectangle-31-2 {
  background-color: var(--macaroni-and-cheese);
  height: 492px;
  left: 9px;
  position: absolute;
  top: 11px;
  width: 481px;
}

.rectangle-30-13 {
  background-color: var(--negroni);
  height: 491px;
  left: 0;
  position: absolute;
  top: 0;
  width: 483px;
}

.jai-eu-l {
  left: 50px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  top: 50px;
  width: 385px;
}

.group-19 {
  display: flex;
  gap: 29px;
  height: 78px;
  left: 45px;
  position: absolute;
  top: 391px;
  width: 301px;
}

.kevin,
.matthieu {
  height: 78px;
  width: 78px;
}

.group-18 {
  display: flex;
  flex-direction: column;
  height: 63px;
  margin-top: 8px;
  width: 198px;
}

.name {
  height: 39px;
  letter-spacing: -0.57px;
  line-height: 39px;
  white-space: nowrap;
  width: 142px;
}

.designer-ui-et-developpeur {
  height: 24px;
  letter-spacing: -0.3px;
  line-height: 24px;
  white-space: nowrap;
  width: 194px;
}

.group-18-1 {
  height: 640px;
  position: relative;
  width: 492px;
}

.overlap-group1-9 {
  height: 640px;
  position: relative;
  width: 490px;
}

.rectangle-31-3 {
  background-color: var(--macaroni-and-cheese);
  height: 629px;
  left: 9px;
  position: absolute;
  top: 11px;
  width: 481px;
}

.rectangle-30-14 {
  background-color: var(--negroni);
  height: 628px;
  left: 0;
  position: absolute;
  top: 0;
  width: 483px;
}

.group-19-1 {
  display: flex;
  gap: 29px;
  height: 78px;
  left: 45px;
  position: absolute;
  top: 518px;
  width: 271px;
}

.group-18-2 {
  display: flex;
  flex-direction: column;
  height: 63px;
  margin-top: 8px;
  width: 168px;
}

.matthieu-oger {
  height: 39px;
  letter-spacing: -0.57px;
  line-height: 39px;
  white-space: nowrap;
  width: 164px;
}

.dsi-adjoint {
  height: 24px;
  letter-spacing: -0.3px;
  line-height: 24px;
  white-space: nowrap;
  width: 81px;
}

.footer-2 {
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

.footer_contact-1 {
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

.crer-un-produit-est {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.footer_button {
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

.rectangle-10-7 {
  background-color: var(--hippie-blue-2);
  height: 64px;
  left: 5px;
  position: absolute;
  top: 8px;
  width: 305px;
}

.rectangle-9-7 {
  background-color: var(--link-water-2);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 305px;
}

.allons-y-ensemble-1 {
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 299px;
}

.footer_links-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}
</style>
