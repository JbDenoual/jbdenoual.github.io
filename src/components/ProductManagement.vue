<template>
  <div class="product-management screen">
    <div class="pm_global_1">
      <div class="pm_section_1">
        <div class="header-8">
          <div class="header-9">
            <router-link to="/home"><img class="logo-15" :src="logo" alt="Logo" /></router-link>
            <div class="menu-4">
              <router-link to="/home">
                <div class="link-4 rubik-normal-white-16px">{{ accueil1 }}</div>
              </router-link>
              <div class="product-management-1 rubik-normal-white-16px">{{ productManagement1 }}</div>
              <router-link to="/product-ops">
                <div class="link-4 rubik-normal-white-16px">{{ productOps1 }}</div> </router-link
              ><router-link to="/experiences">
                <div class="link-4 rubik-normal-white-16px">{{ expriences1 }}</div> </router-link
              ><router-link to="/contact">
                <div class="link-4 rubik-normal-white-16px">{{ place1 }}</div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="pm_section_1_details-1">
          <h1
            class="product-manager-au-quotidien inferi-trial-regular-normal-white-47px"
            v-html="productManagerAuQuotidien"
          ></h1>
          <p class="surname-8 rubik-light-white-22px">{{ surname1 }}</p>
          <router-link to="/contact">
            <div class="pm_section_1_button-1">
              <div class="overlap-group-32">
                <div class="rectangle-10-14"></div>
                <div class="rectangle-9-14"></div>
                <p class="jemmne-mon-produit rubik-normal-midnight-blue-18px">{{ jemmneMonProduit }}</p>
              </div>
            </div></router-link
          >
        </div>
      </div>
      <div class="pm_section_2">
        <div class="pm_section">
          <p class="jutiliserai-mon-exp inferi-regular-normal-shark-40px">{{ jutiliseraiMonExp }}</p>
        </div>
        <div class="pm_section_2_squares">
          <div class="pm_square">
            <div class="overlap-group-29">
              <div class="rectangle-31-4"></div>
              <div class="rectangle-30-35"></div>
              <p class="crer-une-vision-ins inter-medium-midnight-blue-16px">{{ crerUneVisionIns }}</p>
            </div>
          </div>
          <pm-square :construireUneStrat="pmSquare1Props.construireUneStrat" />
          <pm-square :construireUneStrat="pmSquare2Props.construireUneStrat" :className="pmSquare2Props.className" />
          <pm-square :construireUneStrat="pmSquare3Props.construireUneStrat" :className="pmSquare3Props.className" />
          <pm-square2 :comprendreVotreMt="pmSquare21Props.comprendreVotreMt" />
          <pm-square2 :comprendreVotreMt="pmSquare22Props.comprendreVotreMt" :className="pmSquare22Props.className" />
          <pm-square :construireUneStrat="pmSquare4Props.construireUneStrat" :className="pmSquare4Props.className" />
          <div class="pm_square">
            <div class="overlap-group-29">
              <div class="rectangle-31-4"></div>
              <div class="rectangle-30-35"></div>
              <p class="travailler-au-quotid inter-medium-midnight-blue-16px">{{ travaillerAuQuotid }}</p>
            </div>
          </div>
          <pm-square2 :comprendreVotreMt="pmSquare23Props.comprendreVotreMt" :className="pmSquare23Props.className" />
        </div>
      </div>
      <div class="pm_section-1">
        <div class="pm_section">
          <div class="sommes-nous-compatibles inferi-trial-regular-normal-midnight-blue-47px">
            {{ sommesNousCompatibles }}
          </div>
        </div>
        <div class="pm_section_3_detail">
          <div class="pm_section_3_detail_1">
            <div class="overlap-group-33">
              <div class="rectangle-31-5"></div>
              <div class="rectangle-30-36"></div>
              <div class="pm_section_3_1">
                <div class="pm_section_3_1_5">
                  <img
                    class="checkbox"
                    src="https://cdn.animaapp.com/projects/67de7d97a31d67f6e9fd3da5/releases/67e80fd1e86bdee6f8bb7528/img/checkbox.svg"
                    alt="checkbox"
                  />
                  <p class="vous-tes-intresss-par-mon-profil rubik-light-shark-32px">
                    {{ vousTesIntresssParMonProfil }}
                  </p>
                </div>
                <div class="pm_section_3_1_4">
                  <checkbox />
                  <p class="vous-tes-favorable rubik-light-shark-32px">{{ vousTesFavorable }}</p>
                </div>
                <div class="pm_section_3_1_3">
                  <checkbox :className="checkbox1Props.className" />
                  <p class="vous-avez-une-cultur rubik-light-shark-32px">{{ vousAvezUneCultur }}</p>
                </div>
                <div class="pm_section_3_1_2">
                  <checkbox :className="checkbox2Props.className" />
                  <p class="surname-9 rubik-light-shark-32px">{{ surname2 }}</p>
                </div>
                <div class="pm_section_3_1_1">
                  <checkbox :className="checkbox3Props.className" />
                  <p class="vous-souhaitez-amli rubik-light-shark-32px">{{ vousSouhaitezAmli }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/contact">
          <div class="pm_section_3_button">
            <div class="overlap-group1-22">
              <div class="rectangle-10-15"></div>
              <div class="rectangle-9-15"></div>
              <div class="apprenons-nous-connaitre rubik-normal-midnight-blue-18px">{{ apprenonsNousConnaitre }}</div>
            </div>
          </div></router-link
        >
      </div>
      <div class="pm_section-1">
        <p class="mon-approche-en-quelques-mots inferi-trial-regular-normal-shark-47px">
          {{ monApprocheEnQuelquesMots }}
        </p>
        <div class="pm_section_4_details">
          <a href="https://jbdenoual.com/files/Commencer%20dans%20une%20nouvelle%20entreprise.pdf" target="_blank">
            <div class="pm_section_4_offer_1">
              <div class="overlap-group1-23">
                <div class="overlap-group-34">
                  <div class="rectangle-10-16"></div>
                  <div class="rectangle-9-16"></div>
                  <p class="commencer-dans-une-nouvelle-entreprise rubik-normal-red-damask-35px">
                    {{ commencerDansUneNouvelleEntreprise }}
                  </p>
                </div>
                <home-offer11 />
              </div></div></a
          ><a href="files/Pratiquer la phase de Discovery.pdf" target="_blank">
            <div class="pm_section_4_offer">
              <div class="overlap-group-30">
                <div class="overlap-group-31">
                  <div class="rectangle-10-13"></div>
                  <div class="rectangle-9-13"></div>
                  <div class="pratiquer-le-discovery rubik-normal-red-damask-35px">{{ pratiquerLeDiscovery }}</div>
                </div>
                <home-offer11 :className="homeOffer111Props.className" />
              </div></div></a
          ><a href="files/Pratiquer la phase de Delivery.pdf" target="_blank">
            <div class="pm_section_4_offer">
              <div class="overlap-group-30">
                <div class="overlap-group-31">
                  <div class="rectangle-10-13"></div>
                  <div class="rectangle-9-13"></div>
                  <div class="pratiquer-le-delivery rubik-normal-red-damask-35px">{{ pratiquerLeDelivery }}</div>
                </div>
                <home-offer11 :className="homeOffer112Props.className" />
              </div></div
          ></a>
        </div>
      </div>
      <footer class="footer-4">
        <div class="footer_contact-3">
          <p class="dfinissez-rigoureus inferi-regular-normal-white-47px">{{ dfinissezRigoureus }}</p>
          <router-link to="/contact">
            <div class="footer_button-1">
              <div class="overlap-group-35">
                <div class="rectangle-10-17"></div>
                <div class="rectangle-9-17"></div>
                <div class="allons-y-ensemble-3 rubik-normal-midnight-blue-18px">{{ allonsYEnsemble }}</div>
              </div>
            </div></router-link
          >
        </div>
        <div class="footer_links-4">
          <div class="footer_links_1-4">
            <router-link to="/home"><img class="logo-15" :src="logo_2" alt="logo_2" /></router-link>
            <div class="menu-4">
              <router-link to="/home">
                <div class="link-4 rubik-normal-white-16px">{{ accueil2 }}</div>
              </router-link>
              <div class="product-management-1 rubik-normal-white-16px">{{ productManagement2 }}</div>
              <router-link to="/product-ops">
                <div class="link-4 rubik-normal-white-16px">{{ productOps2 }}</div> </router-link
              ><router-link to="/experiences">
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
import PmSquare from "./PmSquare";
import PmSquare2 from "./PmSquare2";
import Checkbox from "./Checkbox";
import HomeOffer11 from "./HomeOffer11";
export default {
  name: "ProductManagement",
  components: {
    PmSquare,
    PmSquare2,
    Checkbox,
    HomeOffer11,
  },
  props: [
    "logo",
    "accueil1",
    "productManagement1",
    "productOps1",
    "expriences1",
    "place1",
    "productManagerAuQuotidien",
    "surname1",
    "jemmneMonProduit",
    "jutiliseraiMonExp",
    "crerUneVisionIns",
    "travaillerAuQuotid",
    "sommesNousCompatibles",
    "vousTesIntresssParMonProfil",
    "vousTesFavorable",
    "vousAvezUneCultur",
    "surname2",
    "vousSouhaitezAmli",
    "apprenonsNousConnaitre",
    "monApprocheEnQuelquesMots",
    "commencerDansUneNouvelleEntreprise",
    "pratiquerLeDiscovery",
    "pratiquerLeDelivery",
    "dfinissezRigoureus",
    "allonsYEnsemble",
    "logo_2",
    "accueil2",
    "productManagement2",
    "productOps2",
    "expriences2",
    "place2",
    "pmSquare1Props",
    "pmSquare2Props",
    "pmSquare3Props",
    "pmSquare21Props",
    "pmSquare22Props",
    "pmSquare4Props",
    "pmSquare23Props",
    "checkbox1Props",
    "checkbox2Props",
    "checkbox3Props",
    "homeOffer111Props",
    "homeOffer112Props",
  ],
};
</script>

<style>
.product-management {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
}

.pm_global_1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 80px;
  position: relative;
  width: 100%;
}

.pm_section_1 {
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

.logo-15 {
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

.product-management-1 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.pm_section_1_details-1 {
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

.product-manager-au-quotidien,
.mon-approche-en-quelques-mots {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.surname-8 {
  letter-spacing: -0.24px;
  line-height: 33px;
  position: relative;
  text-align: center;
}

.pm_section_1_button-1 {
  cursor: pointer;
  height: 72px;
  position: relative;
  width: 483px;
}

.overlap-group-32 {
  height: 72px;
  position: relative;
  width: 481px;
}

.rectangle-10-14 {
  background-color: var(--macaroni-and-cheese);
  height: 64px;
  left: 8px;
  position: absolute;
  top: 8px;
  width: 473px;
}

.rectangle-9-14 {
  background-color: var(--negroni);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 473px;
}

.jemmne-mon-produit {
  left: 4px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 464px;
}

.pm_section_2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 133px;
  position: relative;
  width: 100%;
}

.pm_section {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  max-width: 1100px;
  position: relative;
  width: 100%;
}

.jutiliserai-mon-exp,
.sommes-nous-compatibles {
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.pm_section_2_squares {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 32px 90px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.pm_square {
  height: 237.56px;
  position: relative;
  width: 294.35px;
}

.overlap-group-29 {
  height: 238px;
  position: relative;
  width: 292px;
}

.rectangle-31-4 {
  background-color: var(--macaroni-and-cheese);
  height: 226px;
  left: 8px;
  position: absolute;
  top: 12px;
  width: 284px;
}

.rectangle-30-35 {
  background-color: var(--negroni);
  height: 226px;
  left: 0;
  position: absolute;
  top: 0;
  width: 284px;
}

.crer-une-vision-ins {
  left: 13px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 95px;
  width: 258px;
}

.travailler-au-quotid {
  left: 13px;
  letter-spacing: -0.18px;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 58px;
  width: 258px;
}

.pm_section-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 90px;
  position: relative;
  width: 100%;
}

.pm_section_3_detail {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  max-width: 840px;
  position: relative;
  width: 100%;
}

.pm_section_3_detail_1 {
  align-self: stretch;
  height: 656.95px;
  position: relative;
  width: 100%;
}

.overlap-group-33 {
  height: 657px;
  position: relative;
  width: 840px;
}

.rectangle-31-5 {
  background-color: var(--hippie-blue);
  height: 643px;
  left: 9px;
  position: absolute;
  top: 14px;
  width: 831px;
}

.rectangle-30-36 {
  background-color: var(--link-water);
  height: 640px;
  left: 0;
  position: absolute;
  top: 0;
  width: 830px;
}

.pm_section_3_1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 35px;
  min-height: 549px;
  position: absolute;
  top: 49px;
  width: 795px;
}

.pm_section_3_1_5 {
  align-items: center;
  display: flex;
  gap: 28px;
  min-width: 797px;
}

.checkbox {
  align-self: flex-end;
  height: 53px;
  margin-bottom: -0.16px;
  width: 52px;
}

.vous-tes-intresss-par-mon-profil {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 4.7px;
  min-height: 37px;
  white-space: nowrap;
  width: 715px;
}

.pm_section_3_1_4 {
  align-items: flex-start;
  display: flex;
  gap: 28px;
  height: 114px;
  margin-left: 0;
  margin-top: 52px;
  min-width: 765px;
  position: relative;
}

.vous-tes-favorable {
  letter-spacing: 0;
  line-height: normal;
  min-height: 114px;
  width: 682px;
}

.pm_section_3_1_3 {
  align-items: center;
  display: flex;
  gap: 28px;
  height: 53px;
  margin-top: 48px;
  min-width: 765px;
  position: relative;
}

.vous-avez-une-cultur {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 5.83px;
  min-height: 38px;
  width: 682px;
}

.pm_section_3_1_2 {
  align-items: center;
  display: flex;
  gap: 28px;
  height: 76px;
  margin-top: 48px;
  min-width: 765px;
  position: relative;
}

.surname-9 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 76px;
  width: 682px;
}

.pm_section_3_1_1 {
  align-items: center;
  display: flex;
  gap: 28px;
  height: 53px;
  margin-top: 54px;
  min-width: 768px;
  position: relative;
}

.vous-souhaitez-amli {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 5.83px;
  min-height: 38px;
  width: 686px;
}

.pm_section_3_button {
  cursor: pointer;
  height: 72.21px;
  position: relative;
  width: 334.24px;
}

.overlap-group1-22 {
  height: 72px;
  position: relative;
  width: 332px;
}

.rectangle-10-15 {
  background-color: var(--macaroni-and-cheese);
  height: 64px;
  left: 6px;
  position: absolute;
  top: 8px;
  width: 326px;
}

.rectangle-9-15 {
  background-color: var(--negroni);
  height: 65px;
  left: 0;
  position: absolute;
  top: 0;
  width: 326px;
}

.apprenons-nous-connaitre {
  left: 3px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 22px;
  width: 320px;
}

.pm_section_4_details {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 60px 60px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.pm_section_4_offer_1 {
  cursor: pointer;
  height: 273px;
  position: relative;
  width: 501px;
}

.overlap-group1-23 {
  height: 273px;
  position: relative;
  width: 503px;
}

.overlap-group-34 {
  height: 251px;
  left: 0;
  position: absolute;
  top: 0;
  width: 501px;
}

.rectangle-10-16 {
  background-color: var(--red-damask);
  height: 238px;
  left: 10px;
  position: absolute;
  top: 13px;
  width: 491px;
}

.rectangle-9-16 {
  background-color: var(--negroni);
  height: 240px;
  left: 0;
  position: absolute;
  top: 0;
  width: 492px;
}

.commencer-dans-une-nouvelle-entreprise,
.pratiquer-le-discovery,
.pratiquer-le-delivery {
  left: 47px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
  width: 343px;
}

.pm_section_4_offer {
  cursor: pointer;
  height: 232px;
  position: relative;
  width: 501px;
}

.overlap-group-30 {
  height: 232px;
  position: relative;
  width: 503px;
}

.overlap-group-31 {
  height: 210px;
  left: 0;
  position: absolute;
  top: 0;
  width: 501px;
}

.rectangle-10-13 {
  background-color: var(--red-damask);
  height: 197px;
  left: 10px;
  position: absolute;
  top: 13px;
  width: 491px;
}

.rectangle-9-13 {
  background-color: var(--negroni);
  height: 197px;
  left: 0;
  position: absolute;
  top: 0;
  width: 492px;
}

.footer-4 {
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

.dfinissez-rigoureus {
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

.overlap-group-35 {
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
