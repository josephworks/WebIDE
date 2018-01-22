/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function() {
  var e = ["vs/workbench/parts/terminal/node/terminalProcess", "require", "exports", "os", "path", "node-pty"];
  define(e[0], function(n) {
    for (var s = [], t = 0, o = n.length; t < o; t++) s[t] = e[n[t]];
    return s
  }([1, 2, 3, 4, 5]), function(e, n, s, t, o) {
    "use strict";

    function r() {
      T && clearTimeout(T), T = setTimeout(function() {
        E.kill(), process.exit(l)
      }, 250)
    }

    function c() {
      process.send({
        type: "title",
        content: E.process
      }), f = E.process
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i;
    i = "win32" === s.platform() ? t.basename(process.env.PTYSHELL) : "xterm-256color";
    var p = process.env.PTYSHELL,
      a = function() {
        if (process.env.PTYSHELLCMDLINE) return process.env.PTYSHELLCMDLINE;
        for (var e = [], n = 0; process.env["PTYSHELLARG" + n];) e.push(process.env["PTYSHELLARG" + n]), n++;
        return e
      }(),
      v = process.env.PTYCWD,
      u = process.env.PTYCOLS,
      L = process.env.PTYROWS,
      f = "";
    ! function(e) {
      setInterval(function() {
        try {
          process.kill(e, 0)
        } catch (e) {
          process.exit()
        }
      }, 5e3)
    }(process.env.PTYPID),
    function() {
      ["AMD_ENTRYPOINT", "ELECTRON_RUN_AS_NODE", "GOOGLE_API_KEY", "PTYCWD", "PTYPID", "PTYSHELL", "PTYCOLS", "PTYROWS", "PTYSHELLCMDLINE", "VSCODE_LOGS"].forEach(function(e) {
        process.env[e] && delete process.env[e]
      });
      for (var e = 0; process.env["PTYSHELLARG" + e];) delete process.env["PTYSHELLARG" + e], e++
    }();
    var P = {
      name: i,
      cwd: v
    };
    u && L && (P.cols = parseInt(u, 10), P.rows = parseInt(L, 10));
    var T, l, E = o.fork(p, a, P);
    E.on("data", function(e) {
      process.send({
        type: "data",
        content: e
      }), T && (clearTimeout(T), r())
    }), E.on("exit", function(e) {
      l = e, r()
    }), process.on("message", function(e) {
      "input" === e.event ? E.write(e.data) : "resize" === e.event ? E.resize(Math.max(e.cols, 1), Math.max(e.rows, 1)) : "shutdown" === e.event && r()
    }), process.send({
      type: "pid",
      content: E.pid
    }), c(), setInterval(function() {
      f !== E.process && c()
    }, 200)
  })
}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\workbench\parts\terminal\node\terminalProcess.js.map