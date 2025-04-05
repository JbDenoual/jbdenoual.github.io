<template>
  <div class="contact screen">
    <div class="global">
      <div class="section_1">
        <div class="header">
          <div class="header-1">
            <router-link to="/home"><img class="logo" :src="logo" alt="Logo" /></router-link>
            <div class="menu">
              <router-link to="/home">
                <div class="link rubik-normal-white-16px">{{ accueil1 }}</div> </router-link
              ><router-link to="/product-management">
                <div class="link rubik-normal-white-16px">{{ productManagement1 }}</div> </router-link
              ><router-link to="/product-ops">
                <div class="link rubik-normal-white-16px">{{ productOps1 }}</div> </router-link
              ><router-link to="/experiences">
                <div class="link rubik-normal-white-16px">{{ expriences1 }}</div>
              </router-link>
              <div class="place rubik-normal-white-16px">{{ place1 }}</div>
            </div>
          </div>
        </div>
        <div class="frame-5">
          <h1 class="place-1 inferi-trial-regular-normal-white-47px">{{ place2 }}</h1>
        </div>
      </div>
      <div class="section_2">
        <p class="envoyez-moi-un-e-mail inferi-regular-normal-shark-40px">{{ envoyezMoiUnEMail }}</p>
        <a href="mailto:denoual.jeanbaptiste@gmail.com" target="_blank">
          <div class="denoualjeanbaptistegmailcom inferi-regular-normal-shark-40px">
            {{ denoualJeanbaptisteGmailCom }}
          </div>
        </a>
      </div>
      <div class="section-3">
        <p class="vous-pouvez-aussi-me-trouver-sur inferi-regular-normal-midnight-blue-47px">
          {{ vousPouvezAussiMeTrouverSur }}
        </p>
        <div class="frame-24">
          <a href="https://www.linkedin.com/in/jean-baptiste-denoual-3a4b4232/" target="_blank">
            <div class="frame-21">
              <img class="linkedin" :src="linkedin1" alt="linkedin" />
              <div class="linkedin-1 inferi-regular-normal-midnight-blue-47px">{{ linkedin2 }}</div>
            </div></a
          ><a href="https://www.malt.fr/profile/jeanbaptistedenoual1" target="_blank">
            <div class="frame-23">
              <img class="malt" :src="malt1" alt="malt" />
              <div class="malt-1 inferi-regular-normal-midnight-blue-47px">{{ malt2 }}</div>
            </div></a
          >
        </div>
      </div>
      <footer class="footer">
        <div class="footer_links">
          <div class="footer_links_1">
            <router-link to="/home"><img class="logo" :src="logo_2" alt="logo_2" /></router-link>
            <div class="menu">
              <router-link to="/home">
                <div class="link rubik-normal-white-16px">{{ accueil2 }}</div> </router-link
              ><router-link to="/product-management">
                <div class="link rubik-normal-white-16px">{{ productManagement2 }}</div> </router-link
              ><router-link to="/product-ops">
                <div class="link rubik-normal-white-16px">{{ productOps2 }}</div> </router-link
              ><router-link to="/experiences">
                <div class="link rubik-normal-white-16px">{{ expriences2 }}</div>
              </router-link>
              <div class="place rubik-normal-white-16px">{{ place3 }}</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: [
    "logo",
    "accueil1",
    "productManagement1",
    "productOps1",
    "expriences1",
    "place1",
    "place2",
    "envoyezMoiUnEMail",
    "denoualJeanbaptisteGmailCom",
    "vousPouvezAussiMeTrouverSur",
    "linkedin1",
    "linkedin2",
    "malt1",
    "malt2",
    "logo_2",
    "accueil2",
    "productManagement2",
    "productOps2",
    "expriences2",
    "place3",
  ],
};
</script>

<style>
.contact {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 120px;
  position: relative;
}

.global {
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

.section_1 {
  align-items: center;
  align-self: stretch;
  background-color: var(--midnight-blue);
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 306.37px;
  position: relative;
  width: 100%;
}

.header {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.header-1,
.footer_links_1 {
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

.logo {
  cursor: pointer;
  position: relative;
  width: 63.13px;
}

.menu {
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

.link {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.place {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.frame-5 {
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

.place-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: fit-content;
}

.section_2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  padding: 0px 42px;
  position: relative;
  width: 100%;
}

.envoyez-moi-un-e-mail {
  letter-spacing: -0.88px;
  line-height: 60px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.denoualjeanbaptistegmailcom {
  cursor: pointer;
  letter-spacing: -0.88px;
  line-height: 60px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  text-decoration: underline;
  white-space: nowrap;
  width: fit-content;
}

.section-3 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  padding: 0px 42px;
  position: relative;
  width: 100%;
}

.vous-pouvez-aussi-me-trouver-sur {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 1093px;
}

.frame-24 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 153px 153px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.frame-21 {
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 75px;
  position: relative;
}

.linkedin {
  height: 95px;
  object-fit: cover;
  position: relative;
  width: 94px;
}

.linkedin-1,
.malt-1 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 189px;
}

.frame-23 {
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 33px;
  position: relative;
}

.malt {
  height: 94px;
  position: relative;
  width: 94px;
}

.footer {
  align-items: center;
  align-self: stretch;
  background-color: var(--midnight-blue);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 80px;
  margin-left: -1px;
  margin-right: -1px;
  position: relative;
  width: 100%;
}

.footer_links {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}
</style>
