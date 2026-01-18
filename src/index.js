// src/index.js

import { registerApplication, start } from "single-spa";

// // app de exemplo (welcome)
// registerApplication({
//   name: "@single-spa/welcome",
//   app: () => System.import("@single-spa/welcome"),
//   activeWhen: ["/"],
// });

// aqui você vai registrar seus microfronts reais
// registerApplication({
//   name: "@spamanager/navbar",
//   app: () => System.import("@spamanager/navbar"),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
