"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseURL = exports.mailchimp = exports.display = exports.style = exports.effects = exports.protectedRoutes = exports.routes = void 0;
var baseURL = "demo.magic-portfolio.com";
exports.baseURL = baseURL;
var routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": false,
  "/gallery": true
}; // Enable password protection on selected routes
// Set password in the .env file, refer to .env.example

exports.routes = routes;
var protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true
};
exports.protectedRoutes = protectedRoutes;
var style = {
  theme: "dark",
  // dark | light
  neutral: "gray",
  // sand | gray | slate
  brand: "emerald",
  // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "orange",
  // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast",
  // color | contrast
  solidStyle: "flat",
  // flat | plastic
  border: "playful",
  // rounded | playful | conservative
  surface: "translucent",
  // filled | translucent
  transition: "all" // all | micro | macro

};
exports.style = style;
var effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 75
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50
  },
  dots: {
    display: true,
    size: 2,
    color: "brand-on-background-weak",
    opacity: 20
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100
  }
};
exports.effects = effects;
var display = {
  location: true,
  time: true
};
exports.display = display;
var mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: false,
      x: 100,
      y: 0,
      radius: 100
    },
    gradient: {
      display: true,
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      tilt: -45,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
      opacity: 100
    },
    dots: {
      display: false,
      size: 24,
      color: "brand-on-background-weak",
      opacity: 100
    },
    lines: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100
    },
    grid: {
      display: true,
      color: "neutral-alpha-weak",
      opacity: 100
    }
  }
};
exports.mailchimp = mailchimp;