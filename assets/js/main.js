/* =========================================================
   main.js
   JS bootstrap — აქედან იწყება ყველაფერი
   ========================================================= */

import { initNavigation } from "./components/navigation.js";
import { initLangSwitcher } from "./components/lang-switch.js";

function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function () {
  document.querySelectorAll(".site-nav").forEach(initNavigation);

  document.querySelectorAll(".lang-switch").forEach(initLangSwitcher);
});
