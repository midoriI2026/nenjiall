// ==UserScript==
// @name         一括読み込み
// @match        https://midorinet-iwate.cybozu.com/o/*
// @require      https://raw.githubusercontent.com/midoriI2026/nenji1/main/nenji1.js
// @require      https://raw.githubusercontent.com/midoriI2026/nenji2/main/nenji2.js
// ==/UserScript==
(function() {
  'use strict';

  const params = new URLSearchParams(location.search);

  function isPage(page, did) {
    return params.get("page") === page && params.get("did") === String(did);
  }

  window.addEventListener('load', () => {

    if (isPage("DBRecord", 35) || isPage("DBForm", 35)) {
      nenji1();
    }

    if (isPage("DBTaskForm", 35)) {
      nenji2();
    }

  });

})();
