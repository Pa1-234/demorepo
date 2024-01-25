import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const productId = window.location.pathname.split("/pdp/")[1];

/*registerApplication({
  name: '@sonta/header',
  app: () => System.import('@sonta/header'),
  activeWhen: () => true, // or any condition for the footer
  customProps: {
    // Add custom props if needed
  },
});*/

registerApplication({
  name: "@sonata/pdp",
  app: () => System.import("@sonata/pdp"),
  activeWhen: ["/pdp/:productId"],
  customProps: {
    productId: productId,
    // Add custom props if needed
  },
});

registerApplication({
  name: "@sonata/homepage",
  app: () => System.import("@sonata/homepage"),
  activeWhen: (location) => {
    // Activate when the path is the main page or root ("/")
    return location.pathname === "/" || location.pathname === "/homepage";
  }, // Display on the main page
  customProps: {
    // Add custom props if needed
  },
});


registerApplication({
  name: "@sonata/footer",
  app: () => System.import("@sonata/footer"),
  activeWhen: ["/"], // Display footer on all pages
  customProps: {
    // Add custom props if needed
  },
});

// Make sure the footer is loaded after the signup module

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start({
  urlRerouteOnly: true,
});
