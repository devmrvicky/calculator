import "./calculator/script.js";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
