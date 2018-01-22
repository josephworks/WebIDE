/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";
! function() {
  try {
    const n = function() {
        const o = window.location.search.substring(1).split("&");
        for (var n = 0; n < o.length; n++) {
          var c = o[n].split("=");
          if ("config" === c[0] && c[1]) return JSON.parse(decodeURIComponent(c[1]))
        }
        return {}
      }(),
      c = window.document,
      e = n.baseTheme || "vs";
    c.body.className = "monaco-shell " + e;
    var o = n.backgroundColor;
    o || (o = "hc-black" === e ? "#000000" : "vs" === e ? "#FFFFFF" : "#1E1E1E");
    const r = "hc-black" === e ? "#FFFFFF" : "vs" === e ? "#6C6C6C" : "#CCCCCC",
      s = c.createElement("style");
    s.innerHTML = ".monaco-shell { background-color:" + o + "; color:" + r + "; }", c.head.appendChild(s)
  } catch (o) {
    console.error(o)
  }
}();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\workbench\electron-browser\bootstrap\preload.js.map