import Vue from "vue";
import Router from "vue-router";
import Contact from "./components/Contact";
import Index700 from "./components/Index700";
import Experiences from "./components/Experiences";
import Index from "./components/Index";
import ProductManagement from "./components/ProductManagement";
import ProductOps from "./components/ProductOps";
import Index478 from "./components/Index478";

import {
  contactData,
  index700Data,
  experiencesData,
  indexData,
  productManagementData,
  productOpsData,
  index478Data,
} from "./data";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/contact",
      component: Contact,
      props: { ...contactData },
    },
    {
      path: "/index-u40700u41",
      component: Index700,
      props: { globalHomeProps: index700Data.globalHomeProps },
    },
    {
      path: "/experiences",
      component: Experiences,
      props: { ...experiencesData },
    },
    {
      path: "/product-management",
      component: ProductManagement,
      props: { ...productManagementData },
    },
    {
      path: "/product-ops",
      component: ProductOps,
      props: { ...productOpsData },
    },
    {
      path: "/index-u40478u41",
      component: Index478,
      props: { globalHome3Props: index478Data.globalHome3Props },
    },
    {
      path: "*",
      component: Index,
      props: { globalHome2Props: indexData.globalHome2Props },
    },
  ],
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
});
