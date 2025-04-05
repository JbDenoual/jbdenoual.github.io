import Vue from "vue";
import Router from "vue-router";
import Contact from "./components/Contact";
import Home700 from "./components/Home700";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import ProductManagement from "./components/ProductManagement";
import ProductOps from "./components/ProductOps";
import Index700 from "./components/Index700";
import Index from "./components/Index";
import Index478 from "./components/Index478";
import Index2 from "./components/Index2";
import Index3 from "./components/Index3";
import Home478 from "./components/Home478";
import ProductOpsproductOps from "./components/ProductOpsproductOps";
import {
  contactData,
  home700Data,
  experiencesData,
  homeData,
  productManagementData,
  productOpsData,
  index700Data,
  indexData,
  index478Data,
  index2Data,
  index3Data,
  home478Data,
  productOpsproductOpsData,
} from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/contact",
      component: Contact,
      props: { ...contactData },
    },
    {
      path: "/home-u40700u41",
      component: Home700,
      props: { globalHomeProps: home700Data.globalHomeProps },
    },
    {
      path: "/experiences",
      component: Experiences,
      props: { ...experiencesData },
    },
    {
      path: "/home",
      component: Home,
      props: { globalHome2Props: homeData.globalHome2Props },
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
      path: "/index-u40700u41",
      component: Index700,
      props: { globalHome3Props: index700Data.globalHome3Props },
    },
    {
      path: "/index",
      component: Index,
      props: { globalHome4Props: indexData.globalHome4Props },
    },
    {
      path: "/index-u40478u41",
      component: Index478,
      props: { globalHome3Props: index478Data.globalHome3Props },
    },
    {
      path: "/index-2",
      component: Index3,
      props: { globalHome5Props: index3Data.globalHome5Props },
    },
    {
      path: "/home-u40478u41",
      component: Home478,
      props: { ...home478Data },
    },
    {
      path: "/product-opsu47product-ops",
      component: ProductOpsproductOps,
      props: { ...productOpsproductOpsData },
    },
    {
      path: "*",
      component: Index2,
      props: { globalHome4Props: index2Data.globalHome4Props },
    },
  ],
});
