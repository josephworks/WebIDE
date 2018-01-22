/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";
global._performanceEntries = global._performanceEntries || [], "function" != typeof define && "object" == typeof module && "object" == typeof module.exports && (global.define = function(e, t) {
  module.exports = t(), global.define = void 0
}), define([], function() {
  function e(e) {
    global._performanceEntries.push("mark", e, r(), 0), "function" == typeof console.timeStamp && console.timeStamp(e)
  }

  function t(e, t, o) {
    let i, l, f = r();
    i = t ? n(t) : f, l = o ? n(o) - i : f - i, global._performanceEntries.push("measure", e, i, l)
  }

  function n(e) {
    const t = global._performanceEntries;
    for (let n = t.length - 1; n >= 0; n -= 4)
      if (t[n - 2] === e) return t[n - 1];
    throw new Error(e + " not found")
  }
  const r = Date.now;
  return {
    mark: e,
    measure: t,
    time: function(n) {
      let r = `${n}/start`;
      return e(r), {
        stop() {
          t(n, r)
        }
      }
    },
    getEntries: function(e, t) {
      const n = [],
        r = global._performanceEntries;
      for (let o = 0; o < r.length; o += 4) r[o] !== e || void 0 !== t && r[o + 1] !== t || n.push({
        type: r[o],
        name: r[o + 1],
        startTime: r[o + 2],
        duration: r[o + 3]
      });
      return n.sort((e, t) => e.startTime - t.startTime)
    },
    getEntry: function(e, t) {
      const n = global._performanceEntries;
      for (let r = 0; r < n.length; r += 4)
        if (n[r] === e && n[r + 1] === t) return {
          type: n[r],
          name: n[r + 1],
          startTime: n[r + 2],
          duration: n[r + 3]
        }
    },
    getDuration: function(e, t) {
      const n = global._performanceEntries;
      let r = e,
        o = 0;
      for (let i = 0; i < n.length; i += 4)
        if (n[i + 1] === r) {
          if (r !== e) return n[i + 2] - o;
          r = t, o = n[i + 2]
        }
      return 0
    },
    importEntries: function(e) {
      global._performanceEntries.splice(0, 0, ...e)
    },
    exportEntries: function() {
      return global._performanceEntries.slice(0)
    }
  }
});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\base\common\performance.js.map
