// ==UserScript==
// @name         一括読み込み
// @match        https://midorinet-iwate.cybozu.com/o/*
// @require      https://raw.githubusercontent.com/midoriI2026/nenji1/main/nenji1.js
// @require      https://raw.githubusercontent.com/midoriI2026/nenji2/main/nenji2.js
// ==/UserScript==
(function() {
  'use strict';
  const url = location.href;
  const isDid35 = url.includes("did=35");
  const isTargetPage =
  url.includes("page=DBRecord") || url.includes("page=DBForm");  
  if (isDid35 && isTargetPage) {
    nenji1();
  }
  // DBRecord + did=35 のときだけ実行
  if (url.includes("page=DBTaskForm") && url.includes("did=35")) {
    nenji2();
  }
})();
