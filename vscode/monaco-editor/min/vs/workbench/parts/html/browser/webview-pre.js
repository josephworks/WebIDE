/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
! function() {
  "use strict";

  function t(t) {
    t && (t.classList.remove("vscode-light", "vscode-dark", "vscode-high-contrast"), t.classList.add(l.activeTheme))
  }

  function e() {
    return document.getElementById("active-frame")
  }

  function n() {
    return document.getElementById("pending-frame")
  }

  function o(t) {
    if (t && t.view && t.view.document)
      for (var e = t.view.document.getElementsByTagName("base")[0], n = t.target; n;) {
        if (n.tagName && "a" === n.tagName.toLowerCase() && n.href) {
          if ("#" === n.getAttribute("href")) t.view.scrollTo(0, 0);
          else if (n.hash && (n.getAttribute("href") === n.hash || e && n.href.indexOf(e.href) >= 0)) {
            var o = t.view.document.getElementById(n.hash.substr(1, n.hash.length - 1));
            o && o.scrollIntoView()
          } else r.sendToHost("did-click-link", n.href);
          t.preventDefault();
          break
        }
        n = n.parentNode
      }
  }

  function i(t) {
    if (d) return;
    const e = t.target.body.scrollTop / t.target.body.clientHeight;
    isNaN(e) || (d = !0, window.requestAnimationFrame(function() {
      try {
        r.sendToHost("did-scroll", e)
      } catch (t) {}
      d = !1
    }))
  }
  const r = require("electron").ipcRenderer;
  var c, s = !0,
    a = [];
  const l = {
    initialScrollProgress: void 0
  };
  var d = !1;
  document.addEventListener("DOMContentLoaded", function() {
    r.on("baseUrl", function(t, e) {
      l.baseUrl = e
    }), r.on("styles", function(n, o, i) {
      l.styles = o, l.activeTheme = i;
      var r = e();
      if (r) {
        t(r.contentDocument.getElementsByTagName("body")[0]), Object.keys(o).forEach(function(t) {
          r.contentDocument.documentElement.style.setProperty(`--${t}`, o[t])
        })
      }
    }), r.on("focus", function() {
      const t = e();
      t && t.contentWindow.focus()
    }), r.on("content", function(d, u) {
      const m = u.options,
        f = u.contents.join("\n"),
        h = (new DOMParser).parseFromString(f, "text/html");
      if (h.querySelectorAll("a").forEach(t => {
          t.title || (t.title = t.href)
        }), l.baseUrl && 0 === h.head.getElementsByTagName("base").length) {
        const t = h.createElement("base");
        t.href = l.baseUrl, h.head.appendChild(t)
      }
      const b = h.createElement("style");
      b.id = "_defaultStyles";
      const g = Object.keys(l.styles).map(function(t) {
        return `--${t}: ${l.styles[t]};`
      });
      b.innerHTML = `\n\t\t\t:root { ${g.join(" ")} }\n\n\t\t\tbody {\n\t\t\t\tbackground-color: var(--background-color);\n\t\t\t\tcolor: var(--color);\n\t\t\t\tfont-family: var(--font-family);\n\t\t\t\tfont-weight: var(--font-weight);\n\t\t\t\tfont-size: var(--font-size);\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0 20px;\n\t\t\t}\n\n\t\t\timg {\n\t\t\t\tmax-width: 100%;\n\t\t\t\tmax-height: 100%;\n\t\t\t}\n\n\t\t\tbody a {\n\t\t\t\tcolor: var(--link-color);\n\t\t\t}\n\n\t\t\ta:focus,\n\t\t\tinput:focus,\n\t\t\tselect:focus,\n\t\t\ttextarea:focus {\n\t\t\t\toutline: 1px solid -webkit-focus-ring-color;\n\t\t\t\toutline-offset: -1px;\n\t\t\t}\n\t\t\t::-webkit-scrollbar {\n\t\t\t\twidth: 10px;\n\t\t\t\theight: 10px;\n\t\t\t}\n\t\t\t::-webkit-scrollbar-thumb {\n\t\t\t\tbackground-color: var(--scrollbar-thumb);\n\t\t\t}\n\t\t\t::-webkit-scrollbar-thumb:hover {\n\t\t\t\tbackground-color: var(--scrollbar-thumb-hover);\n\t\t\t}\n\t\t\t::-webkit-scrollbar-thumb:active {\n\t\t\t\tbackground-color: var(--scrollbar-thumb-active);\n\t\t\t}\n\t\t\t`,
        h.head.hasChildNodes() ? h.head.insertBefore(b, h.head.firstChild) : h.head.appendChild(b), t(h.body);
      const v = e();
      var p;
      if (s) s = !1, p = function(t) {
        isNaN(l.initialScrollProgress) || 0 === t.scrollTop && (t.scrollTop = t.clientHeight * l.initialScrollProgress)
      };
      else {
        const t = v && v.contentDocument && v.contentDocument.body ? v.contentDocument.body.scrollTop : 0;
        p = function(e) {
          0 === e.scrollTop && (e.scrollTop = t)
        }
      }
      const y = n();
      y && (y.setAttribute("id", ""), document.body.removeChild(y)), a = [];
      const w = document.createElement("iframe");
      w.setAttribute("id", "pending-frame"), w.setAttribute("frameborder", "0"), w.setAttribute("sandbox", m.allowScripts ? "allow-scripts allow-forms allow-same-origin" : "allow-same-origin"), w.style.cssText = "display: block; margin: 0; overflow: hidden; position: absolute; width: 100%; height: 100%; visibility: hidden", document.body.appendChild(w), w.contentDocument.open("text/html", "replace"), w.contentWindow.onbeforeunload = function() {
        return console.log("prevented webview navigation"), !1
      };
      var T = function(t, r) {
        t.body && (p(t.body),
          t.body.addEventListener("click", o));
        const c = n();
        if (c && c.contentDocument === t) {
          const t = e();
          t && document.body.removeChild(t), c.setAttribute("id", "active-frame"), c.style.visibility = "visible", r.addEventListener("scroll", i), a.forEach(function(t) {
            r.postMessage(t, document.location.origin)
          }), a = []
        }
      };
      clearTimeout(c), c = void 0, c = setTimeout(function() {
        clearTimeout(c), c = void 0, T(w.contentDocument, w.contentWindow)
      }, 200), w.contentWindow.addEventListener("load", function(t) {
        c && (clearTimeout(c), c = void 0, T(t.target, this))
      }), w.contentDocument.write("<!DOCTYPE html>"), w.contentDocument.write(h.documentElement.innerHTML), w.contentDocument.close(), r.sendToHost("did-set-content")
    }), r.on("message", function(t, o) {
      if (n()) a.push(o);
      else {
        const t = e();
        t && t.contentWindow.postMessage(o, document.location.origin)
      }
    }), r.on("initial-scroll-position", function(t, e) {
      l.initialScrollProgress = e
    }), window.onmessage = function(t) {
      r.sendToHost(t.data.command, t.data.data)
    }, r.sendToHost("webview-ready", process.pid)
  })
}();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\workbench\parts\html\browser\webview-pre.js.map