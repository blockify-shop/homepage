import {
  Link,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-YVYQ7GME.js";

// browser-route-module:/Users/joshcs/Documents/GitHub/blockify/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var meta = () => {
  return {
    title: "blockify",
    description: "welcome to blockify!"
  };
};
function Index() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "welcome to blockify!"), /* @__PURE__ */ React.createElement("p", null, "we're building eCommerce solutions on the Blockchain")), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Resources"), /* @__PURE__ */ React.createElement("ul", null, data.resources.map((resource) => /* @__PURE__ */ React.createElement("li", {
    key: resource.url,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement("a", {
    href: resource.url
  }, resource.name)))), /* @__PURE__ */ React.createElement("h2", null, "More"), /* @__PURE__ */ React.createElement("ul", null, data.demos.map((demo) => /* @__PURE__ */ React.createElement("li", {
    key: demo.to,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: demo.to,
    prefetch: "intent"
  }, demo.name))))));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-EZ2K3M3Z.js.map
