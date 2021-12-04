import {
  React,
  import_react_router_dom,
  init_react
} from "/build/_shared/chunk-YVYQ7GME.js";

// browser-route-module:/Users/joshcs/Documents/GitHub/blockify/app/routes/about.tsx?browser
init_react();

// app/routes/about.tsx
init_react();

// app/styles/demos/about.css
var about_default = "/build/_assets/about-GGM5BPB3.css";

// app/routes/about.tsx
var meta = () => {
  return {
    title: "About Remix"
  };
};
var links = () => {
  return [{ rel: "stylesheet", href: about_default }];
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about__intro"
  }, /* @__PURE__ */ React.createElement("h2", null, "About Us"), /* @__PURE__ */ React.createElement("p", null, "Ok, so this page isn't really ", /* @__PURE__ */ React.createElement("em", null, "about us"), " (yet), but we did want to tell you how this project started."), /* @__PURE__ */ React.createElement("p", null, "We'll have more coming soon, but ", /* @__PURE__ */ React.createElement("em", null, "for now"), " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/FarzaTV/status/1466967658348400643?s=20"
  }, "here's a bit about what sparked the idea"), "."), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)));
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/about-LS36SR6V.js.map
