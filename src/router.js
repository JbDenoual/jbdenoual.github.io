import Vue from "vue";
import Router from "vue-router";
import Index from "./components/Index";
import Index2 from "./components/Index2";
import Contact from "./components/Contact";
import ProductManagement from "./components/ProductManagement";
import ProductOps from "./components/ProductOps";
import Index3 from "./components/Index3";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import Home478 from "./components/Home478";
import ProductOpsproductOps from "./components/ProductOpsproductOps";
import {
  indexData,
  index2Data,
  contactData,
  productManagementData,
  productOpsData,
  index3Data,
  experiencesData,
  homeData,
  home478Data,
  productOpsproductOpsData,
} from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/index-1",
      component: Index,
      props: { globalHomeProps: indexData.globalHomeProps },
    },
    {
      path: "/index-2",
      component: Index2,
      props: { globalHome2Props: index2Data.globalHome2Props },
    },
    {
      path: "/contact",
      component: Contact,
      props: { ...contactData },
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
      path: "/index",
      component: Index3,
      props: { ...index3Data },
    },
    {
      path: "/experiences",
      component: Experiences,
      props: { ...experiencesData },
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
      component: Home,
      props: { ...homeData },
    },
  ],
});
