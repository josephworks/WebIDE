/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function() {
  var e = ["require", "exports", "vs/base/common/winjs.base", "vs/base/common/strings", "vs/base/common/platform", "child_process", "vs/base/common/paths", "path", "vs/base/common/uri", "vs/base/common/objects", "vs/base/common/types", "vs/base/common/arrays", "vs/base/common/event", "vs/base/common/map", "vs/workbench/services/search/node/ripgrepTextSearch", "vs/base/common/lifecycle", "fs", "vs/base/common/errors", "vs/base/parts/ipc/common/ipc", "vs/base/parts/ipc/node/ipc.cp", "vs/base/common/functional", "vs/base/node/extfs", "vs/base/common/async", "vs/base/common/glob", "vs/base/node/flow", "string_decoder", "vs/base/common/errorMessage", "vs/base/node/decoder", "vs/workbench/services/search/node/rawSearchService", "vs/base/common/cancellation", "vs/workbench/services/search/node/fileSearch", "vs/base/common/uuid", "vs/base/node/stdFork", "os", "vs/workbench/services/search/node/ripgrepFileSearch", "vs/base/common/comparers", "vs/base/node/stream", "vs/base/node/encoding", "vscode-ripgrep", "vs/base/common/filters", "vs/base/parts/quickopen/common/quickOpenScorer", "vs/nls!vs/base/common/errorMessage", "vs/nls", "vs/nls!vs/workbench/services/search/node/searchApp", "vs/base/node/console", "vs/nls!vs/base/node/processes", "vs/base/node/processes", "vs/base/common/processes", "vs/platform/files/node/files", "vs/workbench/services/search/node/search", "vs/workbench/services/search/node/searchIpc", "vs/workbench/services/search/node/textSearch", "vs/workbench/services/search/node/worker/searchWorkerIpc", "vs/workbench/services/search/node/textSearchWorkerProvider", "vs/base/common/linkedList", "events", "iconv-lite", "net", "vs/base/common/winjs.base.raw", "assert", "graceful-fs", "vs/workbench/services/search/node/searchApp"],
    t = function(t) {
      for (var n = [], r = 0, i = t.length; r < i; r++) n[r] = e[t[r]];
      return n
    };
  define(e[20], t([0, 1]), function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.once = function(e) {
      var t, n = this,
        r = !1;
      return function() {
        return r ? t : (r = !0, t = e.apply(n, arguments))
      }
    }
  }), define(e[15], t([0, 1, 20]), function(e, t, n) {
    "use strict";

    function r(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      return Array.isArray(e) ? (e.forEach(function(e) {
        return e && e.dispose()
      }), []) : 0 !== t.length ? (r(e), r(t), []) : e ? (e.dispose(), e) : void 0
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.empty = Object.freeze({
      dispose: function() {}
    }), t.isDisposable = function(e) {
      return "function" == typeof e.dispose && 0 === e.dispose.length
    }, t.dispose = r, t.combinedDisposable = function(e) {
      return {
        dispose: function() {
          return r(e)
        }
      }
    }, t.toDisposable = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return {
        dispose: function() {
          for (var t = 0, n = e; t < n.length; t++)(0, n[t])()
        }
      }
    };
    var i = function() {
      function e() {
        this._toDispose = []
      }
      return e.prototype.dispose = function() {
        this._toDispose = r(this._toDispose)
      }, e.prototype._register = function(e) {
        return this._toDispose.push(e), e
      }, e
    }();
    t.Disposable = i;
    var o = function() {
      function e() {
        this.references = Object.create(null)
      }
      return e.prototype.acquire = function(e) {
        var t = this,
          r = this.references[e];
        r || (r = this.references[e] = {
          counter: 0,
          object: this.createReferencedObject(e)
        });
        var i = r.object,
          o = n.once(function() {
            0 == --r.counter && (t.destroyReferencedObject(r.object), delete t.references[e])
          });
        return r.counter++, {
          object: i,
          dispose: o
        }
      }, e
    }();
    t.ReferenceCollection = o;
    var s = function() {
      function e(e) {
        this.object = e
      }
      return e.prototype.dispose = function() {}, e
    }();
    t.ImmortalReference = s
  }), define(e[54], t([0, 1]), function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function() {
        return function(e) {
          this.element = e
        }
      }(),
      r = function() {
        function e() {}
        return e.prototype.isEmpty = function() {
            return !this._first
          }, e.prototype.clear = function() {
            this._first = void 0, this._last = void 0
          }, e.prototype.unshift = function(e) {
            return this.insert(e, !1)
          },
          e.prototype.push = function(e) {
            return this.insert(e, !0)
          }, e.prototype.insert = function(e, t) {
            var r = this,
              i = new n(e);
            if (this._first)
              if (t) {
                var o = this._last;
                this._last = i, i.prev = o, o.next = i
              } else {
                var s = this._first;
                this._first = i, i.next = s, s.prev = i
              }
            else this._first = i, this._last = i;
            return function() {
              for (var e = r._first; e instanceof n; e = e.next)
                if (e === i) {
                  if (e.prev && e.next) {
                    var t = e.prev;
                    t.next = e.next, e.next.prev = t
                  } else e.prev || e.next ? e.next ? e.prev || (r._first = r._first.next, r._first.prev = void 0) : (r._last = r._last.prev, r._last.next = void 0) : (r._first = void 0, r._last = void 0);
                  break
                }
            }
          }, e.prototype.iterator = function() {
            var e = {
                done: void 0,
                value: void 0
              },
              t = this._first;
            return {
              next: function() {
                return t ? (e.done = !1, e.value = t.element, t = t.next) : (e.done = !0, e.value = void 0), e
              }
            }
          }, e.prototype.toArray = function() {
            for (var e = [], t = this._first; t instanceof n; t = t.next) e.push(t.element);
            return e
          }, e
      }();
    t.LinkedList = r
  }), define(e[4], t([0, 1]), function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = !1,
      r = !1,
      i = !1,
      o = !1,
      s = !1,
      a = !1,
      u = void 0,
      c = void 0;
    if (t.LANGUAGE_DEFAULT = "en", "object" == typeof process) {
      n = "win32" === process.platform, r = "darwin" === process.platform, i = "linux" === process.platform, o = !n && 0 === process.getuid();
      var l = process.env.VSCODE_NLS_CONFIG;
      if (l) try {
        var f = JSON.parse(l),
          h = f.availableLanguages["*"];
        u = f.locale, c = h || t.LANGUAGE_DEFAULT
      } catch (e) {}
      s = !0
    } else if ("object" == typeof navigator) {
      var p = navigator.userAgent;
      n = p.indexOf("Windows") >= 0, r = p.indexOf("Macintosh") >= 0, i = p.indexOf("Linux") >= 0, a = !0, c = u = navigator.language
    }
    var d;
    ! function(e) {
      e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows"
    }(d = t.Platform || (t.Platform = {}));
    var v = d.Web;
    s && (r ? v = d.Mac : n ? v = d.Windows : i && (v = d.Linux)), t.isWindows = n, t.isMacintosh = r, t.isLinux = i, t.isRootUser = o, t.isNative = s, t.isWeb = a, t.platform = v, t.language = c, t.locale = u;
    var m = "object" == typeof self ? self : global;
    t.globals = m, t.setTimeout = m.setTimeout.bind(m), t.clearTimeout = m.clearTimeout.bind(m), t.setInterval = m.setInterval.bind(m),
      t.clearInterval = m.clearInterval.bind(m);
    ! function(e) {
      e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux"
    }(t.OperatingSystem || (t.OperatingSystem = {})), t.OS = r ? 2 : n ? 1 : 3;
    ! function(e) {
      e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled"
    }(t.AccessibilitySupport || (t.AccessibilitySupport = {}))
  }), define(e[47], t([0, 1]), function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    ! function(e) {
      e[e.stdout = 0] = "stdout", e[e.stderr = 1] = "stderr"
    }(t.Source || (t.Source = {}));
    ! function(e) {
      e[e.Success = 0] = "Success", e[e.Unknown = 1] = "Unknown", e[e.AccessDenied = 2] = "AccessDenied", e[e.ProcessNotFound = 3] = "ProcessNotFound"
    }(t.TerminateResponseCode || (t.TerminateResponseCode = {}))
  }), define(e[10], t([0, 1]), function(e, t) {
    "use strict";

    function n(e) {
      return Array.isArray ? Array.isArray(e) : !(!e || typeof e.length !== c.number || e.constructor !== Array)
    }

    function r(e) {
      return typeof e === c.string || e instanceof String
    }

    function i(e) {
      return !(typeof e !== c.object || null === e || Array.isArray(e) || e instanceof RegExp || e instanceof Date)
    }

    function o(e) {
      return typeof e === c.undefined
    }

    function s(e) {
      return o(e) || null === e
    }

    function a(e) {
      return typeof e === c.function
    }

    function u(e, t) {
      if (r(t)) {
        if (typeof e !== t) throw new Error("argument does not match constraint: typeof " + t)
      } else if (a(t)) {
        if (e instanceof t) return;
        if (!s(e) && e.constructor === t) return;
        if (1 === t.length && !0 === t.call(void 0, e)) return;
        throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true")
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = {
      number: "number",
      string: "string",
      undefined: "undefined",
      object: "object",
      function: "function"
    };
    t.isArray = n, t.isString = r, t.isStringArray = function(e) {
        return n(e) && e.every(function(e) {
          return r(e)
        })
      }, t.isObject = i, t.isNumber = function(e) {
        return (typeof e === c.number || e instanceof Number) && !isNaN(e)
      }, t.isBoolean = function(e) {
        return !0 === e || !1 === e
      }, t.isUndefined = o,
      t.isUndefinedOrNull = s;
    var l = Object.prototype.hasOwnProperty;
    t.isEmptyObject = function(e) {
      if (!i(e)) return !1;
      for (var t in e)
        if (l.call(e, t)) return !1;
      return !0
    }, t.isFunction = a, t.areFunctions = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e && e.length > 0 && e.every(a)
    }, t.validateConstraints = function(e, t) {
      for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) u(e[r], t[r])
    }, t.validateConstraint = u, t.create = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      var r = Object.create(e.prototype);
      return e.apply(r, t), r
    }
  }), define(e[9], t([0, 1, 10]), function(e, t, n) {
    "use strict";

    function r(e) {
      if (!e || "object" != typeof e) return e;
      if (e instanceof RegExp) return e;
      var t = Array.isArray(e) ? [] : {};
      return Object.keys(e).forEach(function(n) {
        e[n] && "object" == typeof e[n] ? t[n] = r(e[n]) : t[n] = e[n]
      }), t
    }

    function i(e, t, r) {
      if (n.isUndefinedOrNull(e)) return e;
      var o = t(e);
      if (void 0 !== o) return o;
      if (n.isArray(e)) {
        for (var s = [], a = 0; a < e.length; a++) s.push(i(e[a], t, r));
        return s
      }
      if (n.isObject(e)) {
        if (r.indexOf(e) >= 0) throw new Error("Cannot clone recursive data-structure");
        r.push(e);
        var c = {};
        for (var l in e) u.call(e, l) && (c[l] = i(e[l], t, r));
        return r.pop(), c
      }
      return e
    }

    function o(e, t, r) {
      return void 0 === r && (r = !0), n.isObject(e) ? (n.isObject(t) && Object.keys(t).forEach(function(i) {
        i in e ? r && (n.isObject(e[i]) && n.isObject(t[i]) ? o(e[i], t[i], r) : e[i] = t[i]) : e[i] = t[i]
      }), e) : t
    }

    function s(e, t) {
      if (e === t) return !0;
      if (null === e || void 0 === e || null === t || void 0 === t) return !1;
      if (typeof e != typeof t) return !1;
      if ("object" != typeof e) return !1;
      if (Array.isArray(e) !== Array.isArray(t)) return !1;
      var n, r;
      if (Array.isArray(e)) {
        if (e.length !== t.length) return !1;
        for (n = 0; n < e.length; n++)
          if (!s(e[n], t[n])) return !1
      } else {
        var i = [];
        for (r in e) i.push(r);
        i.sort();
        var o = [];
        for (r in t) o.push(r);
        if (o.sort(), !s(i, o)) return !1;
        for (n = 0; n < i.length; n++)
          if (!s(e[i[n]], t[i[n]])) return !1
      }
      return !0
    }

    function a(e) {
      for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = !0;
      return t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.deepClone = r, t.deepFreeze = function(e) {
      if (!e || "object" != typeof e) return e;
      for (var t = [e]; t.length > 0;) {
        var n = t.shift();
        Object.freeze(n);
        for (var r in n)
          if (u.call(n, r)) {
            var i = n[r];
            "object" != typeof i || Object.isFrozen(i) || t.push(i)
          }
      }
      return e
    };
    var u = Object.prototype.hasOwnProperty;
    t.cloneAndChange = function(e, t) {
        return i(e, t, [])
      }, t.mixin = o, t.assign = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return t.forEach(function(t) {
          return Object.keys(t).forEach(function(n) {
            return e[n] = t[n]
          })
        }), e
      }, t.equals = s, t.arrayToHash = a, t.createKeywordMatcher = function(e, t) {
        void 0 === t && (t = !1), t && (e = e.map(function(e) {
          return e.toLowerCase()
        }));
        var n = a(e);
        return t ? function(e) {
          return void 0 !== n[e.toLowerCase()] && n.hasOwnProperty(e.toLowerCase())
        } : function(e) {
          return void 0 !== n[e] && n.hasOwnProperty(e)
        }
      }, t.safeStringify = function(e) {
        var t = [];
        return JSON.stringify(e, function(e, r) {
          if (n.isObject(r) || Array.isArray(r)) {
            if (-1 !== t.indexOf(r)) return "[Circular]";
            t.push(r)
          }
          return r
        })
      }, t.getOrDefault = function(e, t, n) {
        void 0 === n && (n = null);
        var r = t(e);
        return void 0 === r ? n : r
      },
      t.distinct = function(e, t) {
        var n = Object.create(null);
        return e && t ? (Object.keys(t).forEach(function(r) {
          var i = e[r],
            o = t[r];
          s(i, o) || (n[r] = o)
        }), n) : n
      }
  });
  var n = this && this.__extends || function() {
    var e = Object.setPrototypeOf || {
      __proto__: []
    }
    instanceof Array && function(e, t) {
      e.__proto__ = t
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    };
    return function(t, n) {
      function r() {
        this.constructor = t
      }
      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
  }();
  define(e[8], t([0, 1, 4]), function(e, t, r) {
      "use strict";

      function i(e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase()
      }

      function o(e) {
        var t;
        return t = e.authority && e.path && "file" === e.scheme ? "//" + e.authority + e.path : p.test(e.path) ? e.path[1].toLowerCase() + e.path.substr(2) : e.path, r.isWindows && (t = t.replace(/\//g, "\\")), t
      }

      function s(e, t) {
        var n = t ? function(e) {
            return e.replace(/[#?]/, i)
          } : function(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, i)
          },
          r = [],
          o = e.scheme,
          s = e.authority,
          a = e.path,
          u = e.query,
          c = e.fragment;
        if (o && r.push(o, ":"),
          (s || "file" === o) && r.push("//"), s) {
          if (-1 !== (m = s.indexOf("@"))) {
            var h = s.substr(0, m);
            s = s.substr(m + 1), -1 === (m = h.indexOf(":")) ? r.push(n(h)) : r.push(n(h.substr(0, m)), ":", n(h.substr(m + 1))), r.push("@")
          } - 1 === (m = (s = s.toLowerCase()).indexOf(":")) ? r.push(n(s)) : r.push(n(s.substr(0, m)), s.substr(m))
        }
        if (a) {
          var p = d.exec(a);
          p && (a = p[1] ? "/" + p[2].toLowerCase() + a.substr(3) : p[2].toLowerCase() + a.substr(2));
          for (var v = 0;;) {
            var m = a.indexOf(f, v);
            if (-1 === m) {
              r.push(n(a.substring(v)));
              break
            }
            r.push(n(a.substring(v, m)), f), v = m + 1
          }
        }
        return u && r.push("?", n(u)), c && r.push("#", n(c)), r.join(l)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = /^\w[\w\d+.-]*$/,
        u = /^\//,
        c = /^\/\//,
        l = "",
        f = "/",
        h = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
        p = /^\/[a-zA-Z]:/,
        d = /^(\/)?([A-Z]:)/,
        v = /^[a-zA-Z]:/,
        m = function() {
          function e(e, t, n, r, i) {
            "object" == typeof e ? (this.scheme = e.scheme || l, this.authority = e.authority || l, this.path = e.path || l, this.query = e.query || l, this.fragment = e.fragment || l) : (this.scheme = e || l, this.authority = t || l, this.path = n || l, this.query = r || l,
              this.fragment = i || l,
              function(e) {
                if (e.scheme && !a.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
                if (e.path)
                  if (e.authority) {
                    if (!u.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
                  } else if (c.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
              }(this))
          }
          return e.isUri = function(t) {
            return t instanceof e || !!t && ("string" == typeof t.authority && "string" == typeof t.fragment && "string" == typeof t.path && "string" == typeof t.query && "string" == typeof t.scheme)
          }, Object.defineProperty(e.prototype, "fsPath", {
            get: function() {
              return o(this)
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.with = function(e) {
            if (!e) return this;
            var t = e.scheme,
              n = e.authority,
              r = e.path,
              i = e.query,
              o = e.fragment;
            return void 0 === t ? t = this.scheme : null === t && (t = l), void 0 === n ? n = this.authority : null === n && (n = l),
              void 0 === r ? r = this.path : null === r && (r = l), void 0 === i ? i = this.query : null === i && (i = l), void 0 === o ? o = this.fragment : null === o && (o = l), t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new g(t, n, r, i, o)
          }, e.parse = function(e) {
            var t = h.exec(e);
            return t ? new g(t[2] || l, decodeURIComponent(t[4] || l), decodeURIComponent(t[5] || l), decodeURIComponent(t[7] || l), decodeURIComponent(t[9] || l)) : new g(l, l, l, l, l)
          }, e.file = function(e) {
            var t = l;
            if (r.isWindows && (e = e.replace(/\\/g, f)), e[0] === f && e[1] === f) {
              var n = e.indexOf(f, 2); - 1 === n ? (t = e.substring(2), e = f) : (t = e.substring(2, n), e = e.substring(n) || f)
            }
            return v.test(e) ? e = f + e : e[0] !== f && (e = f + e), new g("file", t, e, l, l)
          }, e.from = function(e) {
            return new g(e.scheme, e.authority, e.path, e.query, e.fragment)
          }, e.prototype.toString = function(e) {
            return void 0 === e && (e = !1), s(this, e)
          }, e.prototype.toJSON = function() {
            var e = {
              $mid: 1,
              fsPath: this.fsPath,
              external: this.toString()
            };
            return this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority),
              this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e
          }, e.revive = function(t) {
            if (t) {
              if (t instanceof e) return t;
              var n = new g(t);
              return n._fsPath = t.fsPath, n._formatted = t.external, n
            }
            return t
          }, e
        }();
      t.default = m;
      var g = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t._formatted = null, t._fsPath = null, t
        }
        return n(t, e), Object.defineProperty(t.prototype, "fsPath", {
          get: function() {
            return this._fsPath || (this._fsPath = o(this)), this._fsPath
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.toString = function(e) {
          return void 0 === e && (e = !1), e ? s(this, !0) : (this._formatted || (this._formatted = s(this, !1)), this._formatted)
        }, t
      }(m)
    }), define(e[13], t([0, 1, 8]), function(e, t, r) {
      "use strict";

      function i(e) {
        var t = [];
        return e.forEach(function(e) {
          return t.push(e)
        }), t
      }

      function o(e) {
        var t = [];
        return e.forEach(function(e, n) {
          return t.push(n)
        }), t
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.values = i, t.keys = o, t.getOrSet = function(e, t, n) {
        var r = e.get(t);
        return void 0 === r && (r = n, e.set(t, r)), r
      };
      var s = function() {
        function e() {
          this._value = "", this._pos = 0
        }
        return e.prototype.reset = function(e) {
          return this._value = e, this._pos = 0, this
        }, e.prototype.next = function() {
          return this._pos += 1, this
        }, e.prototype.join = function(e) {
          return e.join("")
        }, e.prototype.hasNext = function() {
          return this._pos < this._value.length - 1
        }, e.prototype.cmp = function(e) {
          return e.charCodeAt(0) - this._value.charCodeAt(this._pos)
        }, e.prototype.value = function() {
          return this._value[this._pos]
        }, e
      }();
      t.StringIterator = s;
      var a = function() {
        function e() {}
        return e.prototype.reset = function(e) {
          return this._value = e.replace(/\\$|\/$/, ""), this._from = 0, this._to = 0, this.next()
        }, e.prototype.hasNext = function() {
          return this._to < this._value.length
        }, e.prototype.join = function(e) {
          return e.join("/")
        }, e.prototype.next = function() {
          this._from = this._to;
          for (var t = !0; this._to < this._value.length; this._to++) {
            var n = this._value.charCodeAt(this._to);
            if (n === e._fwd || n === e._bwd) {
              if (!t) break;
              this._from++
            } else t = !1
          }
          return this
        }, e.prototype.cmp = function(e) {
          for (var t = 0, n = e.length, r = this._from; t < n && r < this._to;) {
            var i = e.charCodeAt(t) - this._value.charCodeAt(r);
            if (0 !== i) return i;
            t += 1, r += 1
          }
          return n === this._to - this._from ? 0 : t < n ? -1 : 1
        }, e.prototype.value = function() {
          return this._value.substring(this._from, this._to)
        }, e._fwd = "/".charCodeAt(0), e._bwd = "\\".charCodeAt(0), e
      }();
      t.PathIterator = a;
      var u = function() {
          function e() {}
          return e.prototype.isEmpty = function() {
            return !(this.left || this.mid || this.right || this.element)
          }, e
        }(),
        c = function() {
          function e(e) {
            this._iter = e
          }
          return e.forPaths = function() {
            return new e(new a)
          }, e.forStrings = function() {
            return new e(new s)
          }, e.prototype.clear = function() {
            this._root = void 0
          }, e.prototype.set = function(e, t) {
            var n, r = this._iter.reset(e);
            for (this._root || (this._root = new u, this._root.str = r.value()), n = this._root;;) {
              var i = r.cmp(n.str);
              if (i > 0) n.left || (n.left = new u, n.left.str = r.value()), n = n.left;
              else if (i < 0) n.right || (n.right = new u, n.right.str = r.value()), n = n.right;
              else {
                if (!r.hasNext()) break;
                r.next(), n.mid || (n.mid = new u, n.mid.str = r.value()), n = n.mid
              }
            }
            var o = n.element;
            return n.element = t, o
          }, e.prototype.get = function(e) {
            for (var t = this._iter.reset(e), n = this._root; n;) {
              var r = t.cmp(n.str);
              if (r > 0) n = n.left;
              else if (r < 0) n = n.right;
              else {
                if (!t.hasNext()) break;
                t.next(), n = n.mid
              }
            }
            return n ? n.element : void 0
          }, e.prototype.delete = function(e) {
            for (var t = this._iter.reset(e), n = [], r = this._root; r;) {
              var i = t.cmp(r.str);
              if (i > 0) n.push([1, r]), r = r.left;
              else if (i < 0) n.push([-1, r]), r = r.right;
              else {
                if (!t.hasNext()) {
                  for (r.element = void 0; n.length > 0 && r.isEmpty();) {
                    var o = n.pop(),
                      s = o[0],
                      a = o[1];
                    switch (s) {
                      case 1:
                        a.left = void 0;
                        break;
                      case 0:
                        a.mid = void 0;
                        break;
                      case -1:
                        a.right = void 0
                    }
                    r = a
                  }
                  break
                }
                t.next(), n.push([0, r]), r = r.mid
              }
            }
          }, e.prototype.findSubstr = function(e) {
            for (var t, n = this._iter.reset(e), r = this._root; r;) {
              var i = n.cmp(r.str);
              if (i > 0) r = r.left;
              else if (i < 0) r = r.right;
              else {
                if (!n.hasNext()) break;
                n.next(), t = r.element || t, r = r.mid
              }
            }
            return r && r.element || t
          }, e.prototype.findSuperstr = function(t) {
            for (var n = this._iter.reset(t), r = this._root; r;) {
              var i = n.cmp(r.str);
              if (i > 0) r = r.left;
              else if (i < 0) r = r.right;
              else {
                if (!n.hasNext()) {
                  if (!r.mid) return;
                  var o = new e(this._iter);
                  return o._root = r.mid, o
                }
                n.next(), r = r.mid
              }
            }
          }, e.prototype.forEach = function(e) {
            this._forEach(this._root, [], e)
          }, e.prototype._forEach = function(e, t, n) {
            e && (this._forEach(e.left, t, n), t.push(e.str), e.element && n(e.element, this._iter.join(t)), this._forEach(e.mid, t, n), t.pop(), this._forEach(e.right, t, n))
          }, e
        }();
      t.TernarySearchTree = c;
      var l = function() {
        function e(e) {
          this.ignoreCase = e, this.map = new Map
        }
        return e.prototype.set = function(e, t) {
          this.map.set(this.toKey(e), t)
        }, e.prototype.get = function(e) {
          return this.map.get(this.toKey(e))
        }, e.prototype.has = function(e) {
          return this.map.has(this.toKey(e))
        }, Object.defineProperty(e.prototype, "size", {
          get: function() {
            return this.map.size
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.clear = function() {
          this.map.clear()
        }, e.prototype.delete = function(e) {
          return this.map.delete(this.toKey(e))
        }, e.prototype.forEach = function(e) {
          this.map.forEach(e)
        }, e.prototype.values = function() {
          return i(this.map)
        }, e.prototype.toKey = function(e) {
          var t = e.toString();
          return this.ignoreCase && (t = t.toLowerCase()), t
        }, e
      }();
      t.ResourceMap = l;
      var f = function(e) {
        function t() {
          return e.call(this) || this
        }
        return n(t, e), t.prototype.keys = function() {
          return o(this.map).map(function(e) {
            return r.default.parse(e)
          })
        }, t
      }(l);
      t.StrictResourceMap = f;
      var h;
      ! function(e) {
        e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew"
      }(h = t.Touch || (t.Touch = {}));
      var p = function() {
        function e() {
          this._map = new Map, this._head = void 0, this._tail = void 0, this._size = 0
        }
        return e.prototype.clear = function() {
          this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0
        }, e.prototype.isEmpty = function() {
          return !this._head && !this._tail
        }, Object.defineProperty(e.prototype, "size", {
          get: function() {
            return this._size
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.has = function(e) {
          return this._map.has(e)
        }, e.prototype.get = function(e, t) {
          void 0 === t && (t = h.None);
          var n = this._map.get(e);
          if (n) return t !== h.None && this.touch(n, t), n.value
        }, e.prototype.set = function(e, t, n) {
          void 0 === n && (n = h.None);
          var r = this._map.get(e);
          if (r) r.value = t, n !== h.None && this.touch(r, n);
          else {
            switch (r = {
              key: e,
              value: t,
              next: void 0,
              previous: void 0
            }, n) {
              case h.None:
                this.addItemLast(r);
                break;
              case h.AsOld:
                this.addItemFirst(r);
                break;
              case h.AsNew:
              default:
                this.addItemLast(r)
            }
            this._map.set(e, r), this._size++
          }
        }, e.prototype.delete = function(e) {
          return !!this.remove(e)
        }, e.prototype.remove = function(e) {
          var t = this._map.get(e);
          if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value
        }, e.prototype.shift = function() {
          if (this._head || this._tail) {
            if (!this._head || !this._tail) throw new Error("Invalid list");
            var e = this._head;
            return this._map.delete(e.key), this.removeItem(e), this._size--, e.value
          }
        }, e.prototype.forEach = function(e, t) {
          for (var n = this._head; n;) t ? e.bind(t)(n.value, n.key, this) : e(n.value, n.key, this), n = n.next
        }, e.prototype.values = function() {
          for (var e = [], t = this._head; t;) e.push(t.value), t = t.next;
          return e
        }, e.prototype.keys = function() {
          for (var e = [], t = this._head; t;) e.push(t.key), t = t.next;
          return e
        }, e.prototype.trimOld = function(e) {
          if (!(e >= this.size))
            if (0 !== e) {
              for (var t = this._head, n = this.size; t && n > e;) this._map.delete(t.key), t = t.next, n--;
              this._head = t,
                this._size = n, t.previous = void 0
            } else this.clear()
        }, e.prototype.addItemFirst = function(e) {
          if (this._head || this._tail) {
            if (!this._head) throw new Error("Invalid list");
            e.next = this._head, this._head.previous = e
          } else this._tail = e;
          this._head = e
        }, e.prototype.addItemLast = function(e) {
          if (this._head || this._tail) {
            if (!this._tail) throw new Error("Invalid list");
            e.previous = this._tail, this._tail.next = e
          } else this._head = e;
          this._tail = e
        }, e.prototype.removeItem = function(e) {
          if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
          else if (e === this._head) this._head = e.next;
          else if (e === this._tail) this._tail = e.previous;
          else {
            var t = e.next,
              n = e.previous;
            if (!t || !n) throw new Error("Invalid list");
            t.previous = n, n.next = t
          }
        }, e.prototype.touch = function(e, t) {
          if (!this._head || !this._tail) throw new Error("Invalid list");
          if (t === h.AsOld || t === h.AsNew)
            if (t === h.AsOld) {
              if (e === this._head) return;
              var n = e.next,
                r = e.previous;
              e === this._tail ? (r.next = void 0, this._tail = r) : (n.previous = r, r.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e,
                this._head = e
            } else if (t === h.AsNew) {
            if (e === this._tail) return;
            var n = e.next,
              r = e.previous;
            e === this._head ? (n.previous = void 0, this._head = n) : (n.previous = r, r.next = n), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e
          }
        }, e
      }();
      t.LinkedMap = p;
      var d = function(e) {
        function t(t, n) {
          void 0 === n && (n = 1);
          var r = e.call(this) || this;
          return r._limit = t, r._ratio = Math.min(Math.max(0, n), 1), r
        }
        return n(t, e), Object.defineProperty(t.prototype, "limit", {
          get: function() {
            return this._limit
          },
          set: function(e) {
            this._limit = e, this.checkTrim()
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "ratio", {
          get: function() {
            return this._ratio
          },
          set: function(e) {
            this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim()
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.get = function(t) {
          return e.prototype.get.call(this, t, h.AsNew)
        }, t.prototype.peek = function(t) {
          return e.prototype.get.call(this, t, h.None)
        }, t.prototype.set = function(t, n) {
          e.prototype.set.call(this, t, n, h.AsNew), this.checkTrim()
        }, t.prototype.checkTrim = function() {
          this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio))
        }, t
      }(p);
      t.LRUCache = d
    }), define(e[3], t([0, 1, 13]), function(e, t, n) {
      "use strict";

      function r(e) {
        return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\[\]\(\)\#]/g, "\\$&")
      }

      function i(e, t) {
        if (!e || !t) return e;
        var n = t.length;
        if (0 === n || 0 === e.length) return e;
        for (var r = 0; e.indexOf(t, r) === r;) r += n;
        return e.substring(r)
      }

      function o(e, t) {
        if (!e || !t) return e;
        var n = t.length,
          r = e.length;
        if (0 === n || 0 === r) return e;
        for (var i = r, o = -1;;) {
          if (-1 === (o = e.lastIndexOf(t, i - 1)) || o + n !== i) break;
          if (0 === o) return "";
          i = o
        }
        return e.substring(0, i)
      }

      function s(e, n, r) {
        if (!t.canNormalize || !e) return e;
        var i = r.get(e);
        if (i) return i;
        var o;
        return o = y.test(e) ? e.normalize(n) : e, r.set(e, o), o
      }

      function a(e, t) {
        return e < t ? -1 : e > t ? 1 : 0
      }

      function u(e) {
        return e >= 97 && e <= 122
      }

      function c(e) {
        return e >= 65 && e <= 90
      }

      function l(e) {
        return u(e) || c(e)
      }

      function f(e, t, n) {
        if (void 0 === n && (n = e.length), "string" != typeof e || "string" != typeof t) return !1;
        for (var r = 0; r < n; r++) {
          var i = e.charCodeAt(r),
            o = t.charCodeAt(r);
          if (i !== o)
            if (l(i) && l(o)) {
              var s = Math.abs(i - o);
              if (0 !== s && 32 !== s) return !1
            } else if (String.fromCharCode(i).toLowerCase() !== String.fromCharCode(o).toLowerCase()) return !1
        }
        return !0
      }

      function h(e, t, n, r, i, o) {
        for (; t < n && i < o;) {
          if (e[t] !== r[i]) return !1;
          t += 1, i += 1
        }
        return !0
      }

      function p(e) {
        return (e = +e) >= 11904 && e <= 55215 || e >= 63744 && e <= 64255 || e >= 65281 && e <= 65374
      }

      function d(e) {
        return e && e.length > 0 && 65279 === e.charCodeAt(0)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.empty = "", t.isFalsyOrWhitespace = function(e) {
        return !e || "string" != typeof e || 0 === e.trim().length
      }, t.pad = function(e, t, n) {
        void 0 === n && (n = "0");
        for (var r = "" + e, i = [r], o = r.length; o < t; o++) i.push(n);
        return i.reverse().join("")
      };
      var v = /{(\d+)}/g;
      t.format = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          return 0 === t.length ? e : e.replace(v, function(e, n) {
            var r = parseInt(n, 10);
            return isNaN(r) || r < 0 || r >= t.length ? e : t[r]
          })
        }, t.escape = function(e) {
          return e.replace(/[<|>|&]/g, function(e) {
            switch (e) {
              case "<":
                return "&lt;";
              case ">":
                return "&gt;";
              case "&":
                return "&amp;";
              default:
                return e
            }
          })
        },
        t.escapeRegExpCharacters = r, t.trim = function(e, t) {
          return void 0 === t && (t = " "), o(i(e, t), t)
        }, t.ltrim = i, t.rtrim = o, t.convertSimple2RegExpPattern = function(e) {
          return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*")
        }, t.stripWildcards = function(e) {
          return e.replace(/\*/g, "")
        }, t.startsWith = function(e, t) {
          if (e.length < t.length) return !1;
          for (var n = 0; n < t.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }, t.endsWith = function(e, t) {
          var n = e.length - t.length;
          return n > 0 ? e.indexOf(t, n) === n : 0 === n && e === t
        }, t.createRegExp = function(e, t, n) {
          if (void 0 === n && (n = {}), !e) throw new Error("Cannot create regex from empty string");
          t || (e = r(e)), n.wholeWord && (/\B/.test(e.charAt(0)) || (e = "\\b" + e), /\B/.test(e.charAt(e.length - 1)) || (e += "\\b"));
          var i = "";
          return n.global && (i += "g"), n.matchCase || (i += "i"), n.multiline && (i += "m"), new RegExp(e, i)
        }, t.regExpLeadsToEndlessLoop = function(e) {
          return "^" !== e.source && "^$" !== e.source && "$" !== e.source && "^\\s*$" !== e.source && e.exec("") && 0 === e.lastIndex
        }, t.regExpContainsBackreference = function(e) {
          return !!e.match(/([^\\]|^)(\\\\)*\\\d+/)
        }, t.canNormalize = "function" == typeof "".normalize;
      var m = new n.LRUCache(1e4);
      t.normalizeNFC = function(e) {
        return s(e, "NFC", m)
      };
      var g = new n.LRUCache(1e4);
      t.normalizeNFD = function(e) {
        return s(e, "NFD", g)
      };
      var y = /[^\u0000-\u0080]/;
      t.firstNonWhitespaceIndex = function(e) {
        for (var t = 0, n = e.length; t < n; t++) {
          var r = e.charCodeAt(t);
          if (32 !== r && 9 !== r) return t
        }
        return -1
      }, t.getLeadingWhitespace = function(e, t, n) {
        void 0 === t && (t = 0), void 0 === n && (n = e.length);
        for (var r = t; r < n; r++) {
          var i = e.charCodeAt(r);
          if (32 !== i && 9 !== i) return e.substring(t, r)
        }
        return e.substring(t, n)
      }, t.lastNonWhitespaceIndex = function(e, t) {
        void 0 === t && (t = e.length - 1);
        for (var n = t; n >= 0; n--) {
          var r = e.charCodeAt(n);
          if (32 !== r && 9 !== r) return n
        }
        return -1
      }, t.compare = a, t.compareIgnoreCase = function(e, t) {
        for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
          var i = e.charCodeAt(r),
            o = t.charCodeAt(r);
          if (i !== o) {
            c(i) && (i += 32), c(o) && (o += 32);
            var s = i - o;
            if (0 !== s) return u(i) && u(o) ? s : a(e.toLowerCase(), t.toLowerCase())
          }
        }
        return e.length < t.length ? -1 : e.length > t.length ? 1 : 0
      }, t.equalsIgnoreCase = function(e, t) {
        return (e ? e.length : 0) === (t ? t.length : 0) && f(e, t)
      }, t.beginsWithIgnoreCase = function(e, t) {
        var n = t.length;
        return !(t.length > e.length) && f(e, t, n)
      }, t.commonPrefixLength = function(e, t) {
        var n, r = Math.min(e.length, t.length);
        for (n = 0; n < r; n++)
          if (e.charCodeAt(n) !== t.charCodeAt(n)) return n;
        return r
      }, t.commonSuffixLength = function(e, t) {
        var n, r = Math.min(e.length, t.length),
          i = e.length - 1,
          o = t.length - 1;
        for (n = 0; n < r; n++)
          if (e.charCodeAt(i - n) !== t.charCodeAt(o - n)) return n;
        return r
      }, t.overlap = function(e, t) {
        var n = e.length,
          r = t.length,
          i = n - r;
        if (0 === i) return e === t ? n : 0;
        for (i < 0 && (r += i, i = 0); i < n && r > 0;) {
          if (h(e, i, n, t, 0, r)) return r;
          r -= 1, i += 1
        }
        return 0
      }, t.isHighSurrogate = function(e) {
        return 55296 <= e && e <= 56319
      }, t.isLowSurrogate = function(e) {
        return 56320 <= e && e <= 57343
      };
      var _ = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
      t.containsRTL = function(e) {
        return _.test(e)
      };
      var b = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEF8]|\uD83E[\uDD00-\uDDE6])/;
      t.containsEmoji = function(e) {
        return b.test(e)
      };
      var w = /^[\t\n\r\x20-\x7E]*$/;
      t.isBasicASCII = function(e) {
        return w.test(e)
      }, t.containsFullWidthCharacter = function(e) {
        for (var t = 0, n = e.length; t < n; t++)
          if (p(e.charCodeAt(t))) return !0;
        return !1
      }, t.isFullWidthCharacter = p, t.lcut = function(e, n) {
        if (e.length < n) return e;
        for (var r = /\b/g, i = 0; r.test(e) && !(e.length - r.lastIndex < n);) i = r.lastIndex, r.lastIndex += 1;
        return e.substring(i).replace(/^\s/, t.empty)
      };
      var P = /\x1B\x5B[12]?K/g,
        C = /\x1b\[\d+m/g,
        E = /\x1b\[0?m/g;
      t.removeAnsiEscapeCodes = function(e) {
        return e && (e = (e = (e = e.replace(P, "")).replace(C, "")).replace(E, "")), e
      }, t.UTF8_BOM_CHARACTER = String.fromCharCode(65279), t.startsWithUTF8BOM = d, t.stripUTF8BOM = function(e) {
        return d(e) ? e.substr(1) : e
      }, t.safeBtoa = function(e) {
        return btoa(encodeURIComponent(e))
      }, t.repeat = function(e, t) {
        for (var n = "", r = 0; r < t; r++) n += e;
        return n
      }, t.fuzzyContains = function(e, t) {
        if (!e || !t) return !1;
        if (e.length < t.length) return !1;
        for (var n = t.length, r = e.toLowerCase(), i = 0, o = -1; i < n;) {
          var s = r.indexOf(t[i], o + 1);
          if (s < 0) return !1;
          o = s, i++
        }
        return !0
      }, t.containsUppercaseCharacter = function(e, t) {
        return void 0 === t && (t = !1), !!e && (t && (e = e.replace(/\\./g, "")), e.toLowerCase() !== e)
      }
    }), define(e[39], t([0, 1, 3, 13]), function(e, t, n, r) {
      "use strict";

      function i() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function(t, n) {
          for (var r = 0, i = e.length; r < i; r++) {
            var o = e[r](t, n);
            if (o) return o
          }
          return null
        }
      }

      function o(e, t, r) {
        if (!r || r.length < t.length) return null;
        return (e ? n.beginsWithIgnoreCase(r, t) : 0 === r.indexOf(t)) ? t.length > 0 ? [{
          start: 0,
          end: t.length
        }] : [] : null
      }

      function s(e, t) {
        var n = t.toLowerCase().indexOf(e.toLowerCase());
        return -1 === n ? null : [{
          start: n,
          end: n + e.length
        }]
      }

      function a(e, t) {
        return u(e.toLowerCase(), t.toLowerCase(), 0, 0)
      }

      function u(e, t, n, r) {
        if (n === e.length) return [];
        if (r === t.length) return null;
        if (e[n] === t[r]) {
          var i = null;
          return (i = u(e, t, n + 1, r + 1)) ? d({
            start: r,
            end: r + 1
          }, i) : null
        }
        return u(e, t, n, r + 1)
      }

      function c(e) {
        return 97 <= e && e <= 122
      }

      function l(e) {
        return 65 <= e && e <= 90
      }

      function f(e) {
        return 48 <= e && e <= 57
      }

      function h(e) {
        return 32 === e || 9 === e || 10 === e || 13 === e
      }

      function p(e) {
        return c(e) || l(e) || f(e)
      }

      function d(e, t) {
        return 0 === t.length ? t = [e] : e.end === t[0].start ? t[0].start = e.start : t.unshift(e), t
      }

      function v(e, t) {
        for (var n = t; n < e.length; n++) {
          var r = e.charCodeAt(n);
          if (l(r) || f(r) || n > 0 && !p(e.charCodeAt(n - 1))) return n
        }
        return e.length
      }

      function m(e, t, n, r) {
        if (n === e.length) return [];
        if (r === t.length) return null;
        if (e[n] !== t[r].toLowerCase()) return null;
        var i = null,
          o = r + 1;
        for (i = m(e, t, n + 1, r + 1); !i && (o = v(t, o)) < t.length;) i = m(e, t, n + 1, o), o++;
        return null === i ? null : d({
          start: r,
          end: r + 1
        }, i)
      }

      function g(e, t) {
        if (!t) return null;
        if (0 === (t = t.trim()).length) return null;
        if (! function(e) {
            for (var t = 0, n = 0, r = 0, i = 0, o = 0; o < e.length; o++) l(r = e.charCodeAt(o)) && t++, c(r) && n++, h(r) && i++;
            return 0 !== t && 0 !== n || 0 !== i ? t <= 5 : e.length <= 30
          }(e)) return null;
        if (t.length > 60) return null;
        var n = function(e) {
          for (var t = 0, n = 0, r = 0, i = 0, o = 0, s = 0; s < e.length; s++) l(o = e.charCodeAt(s)) && t++, c(o) && n++, p(o) && r++, f(o) && i++;
          return {
            upperPercent: t / e.length,
            lowerPercent: n / e.length,
            alphaPercent: r / e.length,
            numericPercent: i / e.length
          }
        }(t);
        if (! function(e) {
            var t = e.upperPercent,
              n = e.lowerPercent,
              r = e.alphaPercent,
              i = e.numericPercent;
            return n > .2 && t < .8 && r > .6 && i < .2
          }(n)) {
          if (! function(e) {
              var t = e.upperPercent;
              return 0 === e.lowerPercent && t > .6
            }(n)) return null;
          t = t.toLowerCase()
        }
        for (var r = null, i = 0; i < t.length && null === (r = m(e.toLowerCase(), t, 0, i));) i = v(t, i + 1);
        return r
      }

      function y(e, t, n, r, i) {
        if (n === e.length) return [];
        if (r === t.length) return null;
        if (e[n] !== t[r].toLowerCase()) return null;
        var o = null,
          s = r + 1;
        if (o = y(e, t, n + 1, r + 1, i), !i)
          for (; !o && (s = _(t, s)) < t.length;) o = y(e, t, n + 1, s, i), s++;
        return null === o ? null : d({
          start: r,
          end: r + 1
        }, o)
      }

      function _(e, t) {
        for (var n = t; n < e.length; n++) {
          if (h(e.charCodeAt(n)) || n > 0 && h(e.charCodeAt(n - 1))) return n
        }
        return e.length
      }

      function b() {
        for (var e = [], t = [0], n = 1; n <= 100; n++) t.push(-n);
        for (n = 0; n <= 100; n++) {
          var r = t.slice(0);
          r[0] = -n, e.push(r)
        }
        return e
      }

      function w(e, t, n, r, i) {
        function o(e, t, n) {
          for (void 0 === n && (n = " "); e.length < t;) e = n + e;
          return e
        }
        for (var s = " |   |" + r.split("").map(function(e) {
            return o(e, 3)
          }).join("|") + "\n", a = 0; a <= n; a++) s += 0 === a ? " |" : t[a - 1] + "|", s += e[a].slice(0, i + 1).map(function(e) {
          return o(e.toString(), 3)
        }).join("|") + "\n";
        return s
      }

      function P(e, t) {
        if (t < 0 || t >= e.length) return !1;
        switch (e.charCodeAt(t)) {
          case 95:
          case 45:
          case 46:
          case 32:
          case 47:
          case 92:
          case 39:
          case 34:
          case 58:
            return !0;
          default:
            return !1
        }
      }

      function C(e, t) {
        if (t < 0 || t >= e.length) return !1;
        switch (e.charCodeAt(t)) {
          case 32:
          case 9:
            return !0;
          default:
            return !1
        }
      }

      function E(e, t, n) {
        var r = e.length > 100 ? 100 : e.length,
          i = t.length > 100 ? 100 : t.length,
          o = 0;
        for (void 0 === n && (n = r); o < n && C(e, o);) o += 1;
        if (o === r) return [-100, []];
        if (!(r > i)) {
          for (var s = e.toLowerCase(), a = t.toLowerCase(), u = o, c = 0; u < r && c < i;) s[u] === a[c] && (u += 1), c += 1;
          if (u === r) {
            for (u = o + 1; u <= r; u++)
              for (c = 1; c <= i; c++) {
                var l = -1,
                  f = a[c - 1];
                s[u - 1] === f && (l = c === u - o ? e[u - 1] === t[c - 1] ? 7 : 5 : f !== t[c - 1] ? e[u - 1] === t[c - 1] ? 7 : 5 : P(a, c - 2) || C(a, c - 2) ? 5 : 1), R[u][c] = l;
                var h = O[u - 1][c - 1] + (l > 1 ? 1 : l),
                  p = O[u - 1][c] + -1,
                  d = O[u][c - 1] + -1;
                d >= p ? d > h ? (O[u][c] = d, D[u][c] = 4) : d === h ? (O[u][c] = d, D[u][c] = 6) : (O[u][c] = h, D[u][c] = 2) : p > h ? (O[u][c] = p, D[u][c] = 1) : p === h ? (O[u][c] = p, D[u][c] = 3) : (O[u][c] = h, D[u][c] = 2)
              }
            if (F && (console.log(w(O, e, r, t, i)), console.log(w(D, e, r, t, i)), console.log(w(R, e, r, t, i))), M = 0, j = -100, I = o, x(r, i, 0, new W, !1), 0 !== M) return [j, L.toArray()]
          }
        }
      }

      function x(e, t, n, r, i) {
        if (!(M >= 10 || n < -25)) {
          for (var o = 0; e > I && t > 0;) {
            var s = R[e][t],
              a = D[e][t];
            if (4 === a) t -= 1, i ? n -= 5 : r.isEmpty() || (n -= 1), i = !1, o = 0;
            else {
              if (!(2 & a)) return;
              if (4 & a && x(e, t - 1, r.isEmpty() ? n : n - 1, r.slice(), i), n += s, e -= 1, t -= 1, r.unshift(t), i = !0, 1 === s) {
                if (o += 1, e === I) return
              } else n += 1 + o * (s - 1), o = 0
            }
          }
          M += 1, (n -= t >= 3 ? 9 : 3 * t) > j && (j = n, L = r)
        }
      }

      function S(e, t, n, r) {
        var i = E(e, t, r);
        if (i && !n) return i;
        if (e.length >= 3)
          for (var o = Math.min(7, e.length - 1), s = 1; s < o; s++) {
            var a = function(e, t) {
              if (t + 1 >= e.length) return;
              var n = e[t],
                r = e[t + 1];
              if (n === r) return;
              return e.slice(0, t) + r + n + e.slice(t + 2)
            }(e, s);
            if (a) {
              var u = E(a, t, r);
              u && (u[0] -= 3, (!i || u[0] > i[0]) && (i = u))
            }
          }
        return i
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.or = i, t.matchesStrictPrefix = o.bind(void 0, !1), t.matchesPrefix = o.bind(void 0, !0), t.matchesContiguousSubString = s, t.matchesSubString = a, t.isUpper = l, t.matchesCamelCase = g, t.matchesWords = function(e, t, n) {
        if (void 0 === n && (n = !1), !t || 0 === t.length) return null;
        for (var r = null, i = 0; i < t.length && null === (r = y(e.toLowerCase(), t, 0, i, n));) i = _(t, i + 1);
        return r
      }, t.fuzzyContiguousFilter = i(t.matchesPrefix, g, s);
      var k = i(t.matchesPrefix, g, a),
        T = new r.LRUCache(1e4);
      t.matchesFuzzy = function(e, r, i) {
        if (void 0 === i && (i = !1),
          "string" != typeof e || "string" != typeof r) return null;
        var o = T.get(e);
        o || (o = new RegExp(n.convertSimple2RegExpPattern(e), "i"), T.set(e, o));
        var s = o.exec(r);
        return s ? [{
          start: s.index,
          end: s.index + s[0].length
        }] : i ? k(e, r) : t.fuzzyContiguousFilter(e, r)
      }, t.skipScore = function(e, t, n) {
        e = e.toLowerCase(), t = t.toLowerCase();
        for (var r = [], i = 0, o = 0; o < e.length; ++o) {
          var s = t.indexOf(e.charAt(o), i);
          s >= 0 && (r.push(s), i = s + 1)
        }
        return [r.length, r]
      }, t.createMatches = function(e) {
        var t = [];
        if (!e) return t;
        for (var n, r = 0, i = e; r < i.length; r++) {
          var o = i[r];
          n && n.end === o ? n.end += 1 : (n = {
            start: o,
            end: o + 1
          }, t.push(n))
        }
        return t
      };
      var A, O = b(),
        R = b(),
        D = b(),
        F = !1;
      ! function(e) {
        e[e.Top = 1] = "Top", e[e.Diag = 2] = "Diag", e[e.Left = 4] = "Left"
      }(A || (A = {})), t.fuzzyScore = E;
      var L, M = 0,
        j = 0,
        I = 0,
        W = function() {
          function e() {}
          return e.prototype.isEmpty = function() {
            return !this._data && (!this._parent || this._parent.isEmpty())
          }, e.prototype.unshift = function(e) {
            this._data ? this._data.unshift(e) : this._data = [e]
          }, e.prototype.slice = function() {
            var t = new e;
            return t._parent = this,
              t._parentLen = this._data ? this._data.length : 0, t
          }, e.prototype.toArray = function() {
            if (!this._data) return this._parent.toArray();
            for (var e = [], t = this; t;) t._parent && t._parent._data && e.push(t._parent._data.slice(t._parent._data.length - t._parentLen)), t = t._parent;
            return Array.prototype.concat.apply(this._data, e)
          }, e
        }();
      t.fuzzyScoreGracefulAggressive = function(e, t, n) {
        return S(e, t, !0, n)
      }, t.fuzzyScoreGraceful = function(e, t, n) {
        return S(e, t, !1, n)
      }
    }), define(e[6], t([0, 1, 4, 3]), function(e, t, n, r) {
      "use strict";

      function i(e) {
        var t = ~e.lastIndexOf("/") || ~e.lastIndexOf("\\");
        return 0 === t ? e : ~t == e.length - 1 ? i(e.substring(0, e.length - 1)) : e.substr(1 + ~t)
      }

      function o(e, t) {
        if (null === e || void 0 === e) return e;
        var r = e.length;
        if (0 === r) return ".";
        var i = n.isWindows && t;
        if (function(e, t) {
            return t ? !f.test(e) : !l.test(e)
          }(e, i)) return e;
        for (var o = i ? "\\" : "/", u = a(e, o), c = u.length, h = !1, p = "", d = u.length; d <= r; d++)
          if (d === r || 47 === e.charCodeAt(d) || 92 === e.charCodeAt(d)) {
            if (s(e, c, d, "..")) {
              var v = p.lastIndexOf(o),
                m = p.slice(v + 1);
              (u || m.length > 0) && ".." !== m && (p = -1 === v ? "" : p.slice(0, v), h = !0)
            } else s(e, c, d, ".") && (u || p || d < r - 1) && (h = !0);
            if (!h) {
              var g = e.slice(c, d);
              "" !== p && p[p.length - 1] !== o && (p += o), p += g
            }
            c = d + 1, h = !1
          }
        return u + p
      }

      function s(e, t, n, r) {
        return t + r.length === n && e.indexOf(r, t) === t
      }

      function a(e, t) {
        if (void 0 === t && (t = "/"), !e) return "";
        var n = e.length,
          r = e.charCodeAt(0);
        if (47 === r || 92 === r) {
          if ((47 === (r = e.charCodeAt(1)) || 92 === r) && 47 !== (r = e.charCodeAt(2)) && 92 !== r) {
            for (var i = 3, o = i; i < n && (47 !== (r = e.charCodeAt(i)) && 92 !== r); i++);
            if (r = e.charCodeAt(i + 1), o !== i && 47 !== r && 92 !== r)
              for (i += 1; i < n; i++)
                if (47 === (r = e.charCodeAt(i)) || 92 === r) return e.slice(0, i + 1).replace(/[\\/]/g, t)
          }
          return t
        }
        if ((r >= 65 && r <= 90 || r >= 97 && r <= 122) && 58 === e.charCodeAt(1)) return 47 === (r = e.charCodeAt(2)) || 92 === r ? e.slice(0, 2) + t : e.slice(0, 2);
        var s = e.indexOf("://");
        if (-1 !== s)
          for (s += 3; s < n; s++)
            if (47 === (r = e.charCodeAt(s)) || 92 === r) return e.slice(0, s + 1);
        return ""
      }

      function u(e) {
        if (!e) return !1;
        var t = e.charCodeAt(0);
        if (47 === t || 92 === t) return !0;
        if ((t >= 65 && t <= 90 || t >= 97 && t <= 122) && e.length > 2 && 58 === e.charCodeAt(1)) {
          var n = e.charCodeAt(2);
          if (47 === n || 92 === n) return !0
        }
        return !1
      }

      function c(e) {
        return e && 47 === e.charCodeAt(0)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.sep = "/", t.nativeSep = n.isWindows ? "\\" : "/", t.dirname = function(e) {
        var r = ~e.lastIndexOf("/") || ~e.lastIndexOf("\\");
        if (0 === r) return ".";
        if (0 == ~r) return e[0];
        var i = e.substring(0, ~r);
        return n.isWindows && ":" === i[i.length - 1] && (i += t.nativeSep), i
      }, t.basename = i, t.extname = function(e) {
        var t = ~(e = i(e)).lastIndexOf(".");
        return t ? e.substring(~t) : ""
      };
      var l = /(\/\.\.?\/)|(\/\.\.?)$|^(\.\.?\/)|(\/\/+)|(\\)/,
        f = /(\\\.\.?\\)|(\\\.\.?)$|^(\.\.?\\)|(\\\\+)|(\/)/;
      t.normalize = o, t.getRoot = a, t.join = function() {
        for (var e = "", n = 0; n < arguments.length; n++) {
          var r = arguments[n];
          if (n > 0) {
            var i = e.charCodeAt(e.length - 1);
            if (47 !== i && 92 !== i) {
              var s = r.charCodeAt(0);
              47 !== s && 92 !== s && (e += t.sep)
            }
          }
          e += r
        }
        return o(e)
      }, t.isUNC = function(e) {
        if (!n.isWindows) return !1;
        if (!e || e.length < 5) return !1;
        var t = e.charCodeAt(0);
        if (92 !== t) return !1;
        if (92 !== (t = e.charCodeAt(1))) return !1;
        for (var r = 2, i = r; r < e.length && 92 !== (t = e.charCodeAt(r)); r++);
        return i !== r && (t = e.charCodeAt(r + 1), !isNaN(t) && 92 !== t)
      };
      var h = n.isWindows ? /[\\/:\*\?"<>\|]/g : /[\\/]/g,
        p = /^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])$/i;
      t.isValidBasename = function(e) {
        return !(!e || 0 === e.length || /^\s+$/.test(e) || (h.lastIndex = 0, h.test(e) || n.isWindows && p.test(e) || "." === e || ".." === e || n.isWindows && "." === e[e.length - 1] || n.isWindows && e.length !== e.trim().length))
      }, t.isEqual = function(e, t, n) {
        var i = e === t;
        return !n || i ? i : !(!e || !t) && r.equalsIgnoreCase(e, t)
      }, t.isEqualOrParent = function(e, n, i) {
        if (e === n) return !0;
        if (!e || !n) return !1;
        if (n.length > e.length) return !1;
        if (i) {
          if (!r.beginsWithIgnoreCase(e, n)) return !1;
          if (n.length === e.length) return !0;
          var o = n.length;
          return n.charAt(n.length - 1) === t.nativeSep && o--, e.charAt(o) === t.nativeSep
        }
        return n.charAt(n.length - 1) !== t.nativeSep && (n += t.nativeSep), 0 === e.indexOf(n)
      }, t.isAbsolute = function(e) {
        return n.isWindows ? u(e) : c(e)
      }, t.isAbsolute_win32 = u, t.isAbsolute_posix = c
    }), define(e[35], t([0, 1, 3, 6]), function(e, t, n, r) {
      "use strict";

      function i(e, t, n) {
        if (void 0 === n && (n = !1), l) {
          var r = e || "",
            i = t || "",
            s = l.compare(r, i);
          return f && 0 === s && r !== i ? r < i ? -1 : 1 : s
        }
        return o(e, t, n)
      }

      function o(e, t, n) {
        void 0 === n && (n = !1), n || (e = e && e.toLowerCase(), t = t && t.toLowerCase());
        var r = a(e),
          i = r[0],
          o = r[1],
          s = a(t),
          u = s[0],
          c = s[1];
        return i !== u ? i < u ? -1 : 1 : o === c ? 0 : o < c ? -1 : 1
      }

      function s(e, t) {
        if (l) {
          var n = a(e),
            r = n[0],
            i = n[1],
            o = a(t),
            s = o[0],
            u = o[1],
            c = l.compare(i, u);
          if (0 === c) {
            if (f && i !== u) return i < u ? -1 : 1;
            if (c = l.compare(r, s), f && 0 === c && r !== s) return r < s ? -1 : 1
          }
          return c
        }
        return function(e, t) {
          var n = a(e && e.toLowerCase()),
            r = n[0],
            i = n[1],
            o = a(t && t.toLowerCase()),
            s = o[0],
            u = o[1];
          if (i !== u) return i < u ? -1 : 1;
          if (r === s) return 0;
          return r < s ? -1 : 1
        }(e, t)
      }

      function a(e) {
        var t = e ? h.exec(e) : [];
        return [t && t[1] || "", t && t[3] || ""]
      }

      function u(e, t, n) {
        return void 0 === n && (n = !1), n || (e = e && e.toLowerCase(), t = t && t.toLowerCase()), e === t ? 0 : e < t ? -1 : 1
      }

      function c(e, t, r) {
        var i = e.toLowerCase(),
          o = t.toLowerCase(),
          s = n.startsWith(i, r),
          a = n.startsWith(o, r);
        if (s !== a) return s ? -1 : 1;
        if (s && a) {
          if (i.length < o.length) return -1;
          if (i.length > o.length) return 1
        }
        return 0
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l, f;
      t.setFileNameComparer = function(e) {
        l = e, f = e.resolvedOptions().numeric
      }, t.compareFileNames = i;
      var h = /^(.*?)(\.([^.]*))?$/;
      t.noIntlCompareFileNames = o, t.compareFileExtensions = s, t.comparePaths = function(e, t, n) {
        void 0 === n && (n = !1);
        for (var o, s, a = e.split(r.nativeSep), c = t.split(r.nativeSep), l = a.length - 1, f = c.length - 1, h = 0;; h++) {
          if (o = l === h, s = f === h, o && s) return i(a[h], c[h], n);
          if (o) return -1;
          if (s) return 1;
          var p = u(a[h], c[h], n);
          if (0 !== p) return p
        }
      }, t.compareAnything = function(e, t, r) {
        var o = e.toLowerCase(),
          s = t.toLowerCase(),
          a = c(e, t, r);
        if (a) return a;
        var u = n.endsWith(o, r);
        if (u !== n.endsWith(s, r)) return u ? -1 : 1;
        var l = i(o, s);
        return 0 !== l ? l : o.localeCompare(s)
      }, t.compareByPrefix = c
    }), define(e[31], t([0, 1]), function(e, t) {
      "use strict";

      function r() {
        return new s
      }

      function i(e) {
        return a.test(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function() {
          function e(e) {
            this._value = e
          }
          return e.prototype.asHex = function() {
            return this._value
          }, e
        }(),
        s = function(e) {
          function t() {
            return e.call(this, [t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), "-", t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), "-", "4", t._randomHex(), t._randomHex(), t._randomHex(), "-", t._oneOf(t._timeHighBits), t._randomHex(), t._randomHex(), t._randomHex(), "-", t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex(), t._randomHex()].join("")) || this
          }
          return n(t, e), t._oneOf = function(e) {
            return e[Math.floor(e.length * Math.random())]
          }, t._randomHex = function() {
            return t._oneOf(t._chars)
          }, t._chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], t._timeHighBits = ["8", "9", "a", "b"], t
        }(o);
      t.v4 = r;
      var a = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      t.isUUID = i, t.parse = function(e) {
        if (!i(e)) throw new Error("invalid uuid");
        return new o(e)
      }, t.generateUuid = function() {
        return r().asHex()
      }
    }),
    function() {
      var e = {};
      e["WinJS/Core/_WinJS"] = {};
      var t = function(t, n, r) {
        var i = {},
          o = !1,
          s = n.map(function(t) {
            return "exports" === t ? (o = !0, i) : e[t]
          }),
          a = r.apply({}, s);
        e[t] = o ? i : a
      };
      t("WinJS/Core/_Global", [], function() {
        "use strict";
        return "undefined" != typeof window ? window : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {}
      }), t("WinJS/Core/_BaseCoreUtils", ["WinJS/Core/_Global"], function(e) {
        "use strict";
        return {
          hasWinRT: !!e.Windows,
          markSupportedForProcessing: function(e) {
            return e.supportedForProcessing = !0, e
          },
          _setImmediate: e.setImmediate ? e.setImmediate.bind(e) : function(t) {
            e.setTimeout(t, 0)
          }
        }
      }), t("WinJS/Core/_WriteProfilerMark", ["WinJS/Core/_Global"], function(e) {
        "use strict";
        return e.msWriteProfilerMark || function() {}
      }), t("WinJS/Core/_Base", ["WinJS/Core/_WinJS", "WinJS/Core/_Global", "WinJS/Core/_BaseCoreUtils", "WinJS/Core/_WriteProfilerMark"], function(e, t, n, r) {
        "use strict";

        function i(e, t, n) {
          var r, i, o, s = Object.keys(t),
            a = Array.isArray(e);
          for (i = 0, o = s.length; i < o; i++) {
            var u = s[i],
              c = 95 !== u.charCodeAt(0),
              l = t[u];
            !l || "object" != typeof l || void 0 === l.value && "function" != typeof l.get && "function" != typeof l.set ? c ? a ? e.forEach(function(e) {
              e[u] = l
            }) : e[u] = l : (r = r || {})[u] = {
              value: l,
              enumerable: c,
              configurable: !0,
              writable: !0
            } : (void 0 === l.enumerable && (l.enumerable = c), n && l.setName && "function" == typeof l.setName && l.setName(n + "." + u), (r = r || {})[u] = l)
          }
          r && (a ? e.forEach(function(e) {
            Object.defineProperties(e, r)
          }) : Object.defineProperties(e, r))
        }
        return function() {
            function n(n, r) {
              var i = n || {};
              if (r) {
                var o = r.split(".");
                i === t && "WinJS" === o[0] && (i = e, o.splice(0, 1));
                for (var s = 0, a = o.length; s < a; s++) {
                  var u = o[s];
                  i[u] || Object.defineProperty(i, u, {
                    value: {},
                    writable: !1,
                    enumerable: !0,
                    configurable: !0
                  }), i = i[u]
                }
              }
              return i
            }

            function o(e, t, r) {
              var o = n(e, t);
              return r && i(o, r, t || "<ANONYMOUS>"), o
            }
            var s = e;
            s.Namespace || (s.Namespace = Object.create(Object.prototype));
            var a = {
              uninitialized: 1,
              working: 2,
              initialized: 3
            };
            Object.defineProperties(s.Namespace, {
              defineWithParent: {
                value: o,
                writable: !0,
                enumerable: !0,
                configurable: !0
              },
              define: {
                value: function(e, n) {
                  return o(t, e, n)
                },
                writable: !0,
                enumerable: !0,
                configurable: !0
              },
              _lazy: {
                value: function(e) {
                  var t, n, i = a.uninitialized;
                  return {
                    setName: function(e) {
                      t = e
                    },
                    get: function() {
                      switch (i) {
                        case a.initialized:
                          return n;
                        case a.uninitialized:
                          i = a.working;
                          try {
                            r("WinJS.Namespace._lazy:" + t + ",StartTM"), n = e()
                          } finally {
                            r("WinJS.Namespace._lazy:" + t + ",StopTM"), i = a.uninitialized
                          }
                          return e = null, i = a.initialized, n;
                        case a.working:
                          throw "Illegal: reentrancy on initialization";
                        default:
                          throw "Illegal"
                      }
                    },
                    set: function(e) {
                      switch (i) {
                        case a.working:
                          throw "Illegal: reentrancy on initialization";
                        default:
                          i = a.initialized, n = e
                      }
                    },
                    enumerable: !0,
                    configurable: !0
                  }
                },
                writable: !0,
                enumerable: !0,
                configurable: !0
              },
              _moduleDefine: {
                value: function(e, r, o) {
                  var s = [e],
                    a = null;
                  return r && (a = n(t, r), s.push(a)), i(s, o, r || "<ANONYMOUS>"), a
                },
                writable: !0,
                enumerable: !0,
                configurable: !0
              }
            })
          }(),
          function() {
            function t(e, t, r) {
              return e = e || function() {}, n.markSupportedForProcessing(e), t && i(e.prototype, t), r && i(e, r), e
            }
            e.Namespace.define("WinJS.Class", {
              define: t,
              derive: function(e, r, o, s) {
                if (e) {
                  r = r || function() {};
                  var a = e.prototype;
                  return r.prototype = Object.create(a), n.markSupportedForProcessing(r), Object.defineProperty(r.prototype, "constructor", {
                    value: r,
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                  }), o && i(r.prototype, o), s && i(r, s), r
                }
                return t(r, o, s)
              },
              mix: function(e) {
                e = e || function() {};
                var t, n;
                for (t = 1, n = arguments.length; t < n; t++) i(e.prototype, arguments[t]);
                return e
              }
            })
          }(), {
            Namespace: e.Namespace,
            Class: e.Class
          }
      }), t("WinJS/Core/_ErrorFromName", ["WinJS/Core/_Base"], function(e) {
        "use strict";
        var t = e.Class.derive(Error, function(e, t) {
          this.name = e, this.message = t || e
        }, {}, {
          supportedForProcessing: !1
        });
        return e.Namespace.define("WinJS", {
          ErrorFromName: t
        }), t
      }), t("WinJS/Core/_Events", ["exports", "WinJS/Core/_Base"], function(e, t) {
        "use strict";

        function n(e) {
          var t = "_on" + e + "state";
          return {
            get: function() {
              var e = this[t];
              return e && e.userHandler
            },
            set: function(n) {
              var r = this[t];
              n ? (r || (r = {
                  wrapper: function(e) {
                    return r.userHandler(e)
                  },
                  userHandler: n
                }, Object.defineProperty(this, t, {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }), this.addEventListener(e, r.wrapper, !1)),
                r.userHandler = n) : r && (this.removeEventListener(e, r.wrapper, !1), this[t] = null)
            },
            enumerable: !0
          }
        }
        var r = t.Class.define(function(e, t, n) {
            this.detail = t, this.target = n, this.timeStamp = Date.now(), this.type = e
          }, {
            bubbles: {
              value: !1,
              writable: !1
            },
            cancelable: {
              value: !1,
              writable: !1
            },
            currentTarget: {
              get: function() {
                return this.target
              }
            },
            defaultPrevented: {
              get: function() {
                return this._preventDefaultCalled
              }
            },
            trusted: {
              value: !1,
              writable: !1
            },
            eventPhase: {
              value: 0,
              writable: !1
            },
            target: null,
            timeStamp: null,
            type: null,
            preventDefault: function() {
              this._preventDefaultCalled = !0
            },
            stopImmediatePropagation: function() {
              this._stopImmediatePropagationCalled = !0
            },
            stopPropagation: function() {}
          }, {
            supportedForProcessing: !1
          }),
          i = {
            _listeners: null,
            addEventListener: function(e, t, n) {
              n = n || !1, this._listeners = this._listeners || {};
              for (var r = this._listeners[e] = this._listeners[e] || [], i = 0, o = r.length; i < o; i++) {
                var s = r[i];
                if (s.useCapture === n && s.listener === t) return
              }
              r.push({
                listener: t,
                useCapture: n
              })
            },
            dispatchEvent: function(e, t) {
              var n = this._listeners && this._listeners[e];
              if (n) {
                for (var i = new r(e, t, this), o = 0, s = (n = n.slice(0, n.length)).length; o < s && !i._stopImmediatePropagationCalled; o++) n[o].listener(i);
                return i.defaultPrevented || !1
              }
              return !1
            },
            removeEventListener: function(e, t, n) {
              n = n || !1;
              var r = this._listeners && this._listeners[e];
              if (r)
                for (var i = 0, o = r.length; i < o; i++) {
                  var s = r[i];
                  if (s.listener === t && s.useCapture === n) {
                    r.splice(i, 1), 0 === r.length && delete this._listeners[e];
                    break
                  }
                }
            }
          };
        t.Namespace._moduleDefine(e, "WinJS.Utilities", {
          _createEventProperty: n,
          createEventProperties: function() {
            for (var e = {}, t = 0, r = arguments.length; t < r; t++) {
              var i = arguments[t];
              e["on" + i] = n(i)
            }
            return e
          },
          eventMixin: i
        })
      }), t("WinJS/Core/_Trace", ["WinJS/Core/_Global"], function(e) {
        "use strict";

        function t(e) {
          return e
        }
        return {
          _traceAsyncOperationStarting: e.Debug && e.Debug.msTraceAsyncOperationStarting && e.Debug.msTraceAsyncOperationStarting.bind(e.Debug) || t,
          _traceAsyncOperationCompleted: e.Debug && e.Debug.msTraceAsyncOperationCompleted && e.Debug.msTraceAsyncOperationCompleted.bind(e.Debug) || t,
          _traceAsyncCallbackStarting: e.Debug && e.Debug.msTraceAsyncCallbackStarting && e.Debug.msTraceAsyncCallbackStarting.bind(e.Debug) || t,
          _traceAsyncCallbackCompleted: e.Debug && e.Debug.msTraceAsyncCallbackCompleted && e.Debug.msTraceAsyncCallbackCompleted.bind(e.Debug) || t
        }
      }), t("WinJS/Promise/_StateMachine", ["WinJS/Core/_Global", "WinJS/Core/_BaseCoreUtils", "WinJS/Core/_Base", "WinJS/Core/_ErrorFromName", "WinJS/Core/_Events", "WinJS/Core/_Trace"], function(e, t, n, r, i, o) {
        "use strict";

        function s() {}

        function a(e, t) {
          var n;
          n = t && "object" == typeof t && "function" == typeof t.then ? R : M, e._value = t, e._setState(n)
        }

        function u(e, t, n, r, i, o) {
          return {
            exception: e,
            error: t,
            promise: n,
            handler: o,
            id: r,
            parent: i
          }
        }

        function c(e, t, n, r) {
          var i = n._isException,
            o = n._errorId;
          return u(i ? t : null, i ? null : t, e, o, n, r)
        }

        function l(e, t, n) {
          var r = n._isException,
            i = n._errorId;
          return b(e, i, r), u(r ? t : null, r ? null : t, e, i, n)
        }

        function f(e, t) {
          var n = ++N;
          return b(e, n), u(null, t, e, n)
        }

        function h(e, t) {
          var n = ++N;
          return b(e, n, !0), u(t, null, e, n)
        }

        function p(e, t, n, r) {
          _(e, {
            c: t,
            e: n,
            p: r,
            asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.done")
          })
        }

        function d(e, t, n, r) {
          e._value = t, g(e, t, n, r), e._setState(I)
        }

        function v(t, n) {
          var r = t._value,
            i = t._listeners;
          if (i) {
            t._listeners = null;
            var s, a;
            for (s = 0, a = Array.isArray(i) ? i.length : 1; s < a; s++) {
              var u = 1 === a ? i : i[s],
                c = u.c,
                l = u.promise;
              if (o._traceAsyncOperationCompleted(u.asyncOpID, e.Debug && e.Debug.MS_ASYNC_OP_STATUS_SUCCESS), l) {
                o._traceAsyncCallbackStarting(u.asyncOpID);
                try {
                  l._setCompleteValue(c ? c(r) : r)
                } catch (e) {
                  l._setExceptionValue(e)
                } finally {
                  o._traceAsyncCallbackCompleted()
                }
                l._state !== R && l._listeners && n.push(l)
              } else J.prototype.done.call(t, c)
            }
          }
        }

        function m(t, n) {
          var r = t._value,
            i = t._listeners;
          if (i) {
            t._listeners = null;
            var s, a;
            for (s = 0, a = Array.isArray(i) ? i.length : 1; s < a; s++) {
              var u = 1 === a ? i : i[s],
                l = u.e,
                f = u.promise,
                h = e.Debug && (r && r.name === S ? e.Debug.MS_ASYNC_OP_STATUS_CANCELED : e.Debug.MS_ASYNC_OP_STATUS_ERROR);
              if (o._traceAsyncOperationCompleted(u.asyncOpID, h), f) {
                var p = !1;
                try {
                  l ? (o._traceAsyncCallbackStarting(u.asyncOpID), p = !0, l.handlesOnError || g(f, r, c, t, l),
                    f._setCompleteValue(l(r))) : f._setChainedErrorValue(r, t)
                } catch (e) {
                  f._setExceptionValue(e)
                } finally {
                  p && o._traceAsyncCallbackCompleted()
                }
                f._state !== R && f._listeners && n.push(f)
              } else H.prototype.done.call(t, null, l)
            }
          }
        }

        function g(e, t, n, r, i) {
          if (E._listeners[x]) {
            if (t instanceof Error && t.message === S) return;
            E.dispatchEvent(x, n(e, t, r, i))
          }
        }

        function y(e, t) {
          var n = e._listeners;
          if (n) {
            var r, i;
            for (r = 0, i = Array.isArray(n) ? n.length : 1; r < i; r++) {
              var o = 1 === i ? n : n[r],
                s = o.p;
              if (s) try {
                s(t)
              } catch (e) {}
              o.c || o.e || !o.promise || o.promise._progress(t)
            }
          }
        }

        function _(e, t) {
          var n = e._listeners;
          n ? (n = Array.isArray(n) ? n : [n]).push(t) : n = t, e._listeners = n
        }

        function b(e, t, n) {
          e._isException = n || !1, e._errorId = t
        }

        function w(e, t, n, r) {
          e._value = t, g(e, t, n, r), e._setState(W)
        }

        function P(e, t) {
          var n;
          n = t && "object" == typeof t && "function" == typeof t.then ? R : j, e._value = t, e._setState(n)
        }

        function C(e, t, n, r) {
          var i = new U(e);
          return _(e, {
            promise: i,
            c: t,
            e: n,
            p: r,
            asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.then")
          }), i
        }
        e.Debug && (e.Debug.setNonUserCodeExceptions = !0);
        var E = new(n.Class.mix(n.Class.define(null, {}, {
          supportedForProcessing: !1
        }), i.eventMixin));
        E._listeners = {};
        var x = "error",
          S = "Canceled",
          k = !1,
          T = {
            promise: 1,
            thenPromise: 2,
            errorPromise: 4,
            exceptionPromise: 8,
            completePromise: 16
          };
        T.all = T.promise | T.thenPromise | T.errorPromise | T.exceptionPromise | T.completePromise;
        var A, O, R, D, F, L, M, j, I, W, N = 1;
        A = {
          name: "created",
          enter: function(e) {
            e._setState(O)
          },
          cancel: s,
          done: s,
          then: s,
          _completed: s,
          _error: s,
          _notify: s,
          _progress: s,
          _setCompleteValue: s,
          _setErrorValue: s
        }, O = {
          name: "working",
          enter: s,
          cancel: function(e) {
            e._setState(F)
          },
          done: p,
          then: C,
          _completed: a,
          _error: d,
          _notify: s,
          _progress: y,
          _setCompleteValue: P,
          _setErrorValue: w
        }, R = {
          name: "waiting",
          enter: function(e) {
            var t = e._value;
            if (t instanceof U && t._state !== W && t._state !== j) _(t, {
              promise: e
            });
            else {
              var n = function(r) {
                t._errorId ? e._chainedError(r, t) : (g(e, r, c, t, n), e._error(r))
              };
              n.handlesOnError = !0, t.then(e._completed.bind(e), n, e._progress.bind(e))
            }
          },
          cancel: function(e) {
            e._setState(D)
          },
          done: p,
          then: C,
          _completed: a,
          _error: d,
          _notify: s,
          _progress: y,
          _setCompleteValue: P,
          _setErrorValue: w
        }, D = {
          name: "waiting_canceled",
          enter: function(e) {
            e._setState(L);
            var t = e._value;
            t.cancel && t.cancel()
          },
          cancel: s,
          done: p,
          then: C,
          _completed: a,
          _error: d,
          _notify: s,
          _progress: y,
          _setCompleteValue: P,
          _setErrorValue: w
        }, F = {
          name: "canceled",
          enter: function(e) {
            e._setState(L), e._cancelAction()
          },
          cancel: s,
          done: p,
          then: C,
          _completed: a,
          _error: d,
          _notify: s,
          _progress: y,
          _setCompleteValue: P,
          _setErrorValue: w
        }, L = {
          name: "canceling",
          enter: function(e) {
            var t = new Error(S);
            t.name = t.message, e._value = t, e._setState(I)
          },
          cancel: s,
          done: s,
          then: s,
          _completed: s,
          _error: s,
          _notify: s,
          _progress: s,
          _setCompleteValue: s,
          _setErrorValue: s
        }, M = {
          name: "complete_notify",
          enter: function(e) {
            if (e.done = J.prototype.done, e.then = J.prototype.then, e._listeners)
              for (var t, n = [e]; n.length;)(t = n.shift())._state._notify(t, n);
            e._setState(j)
          },
          cancel: s,
          done: null,
          then: null,
          _completed: s,
          _error: s,
          _notify: v,
          _progress: s,
          _setCompleteValue: s,
          _setErrorValue: s
        }, j = {
          name: "success",
          enter: function(e) {
            e.done = J.prototype.done, e.then = J.prototype.then, e._cleanupAction()
          },
          cancel: s,
          done: null,
          then: null,
          _completed: s,
          _error: s,
          _notify: v,
          _progress: s,
          _setCompleteValue: s,
          _setErrorValue: s
        }, I = {
          name: "error_notify",
          enter: function(e) {
            if (e.done = H.prototype.done, e.then = H.prototype.then, e._listeners)
              for (var t, n = [e]; n.length;)(t = n.shift())._state._notify(t, n);
            e._setState(W)
          },
          cancel: s,
          done: null,
          then: null,
          _completed: s,
          _error: s,
          _notify: m,
          _progress: s,
          _setCompleteValue: s,
          _setErrorValue: s
        }, W = {
          name: "error",
          enter: function(e) {
            e.done = H.prototype.done, e.then = H.prototype.then, e._cleanupAction()
          },
          cancel: s,
          done: null,
          then: null,
          _completed: s,
          _error: s,
          _notify: m,
          _progress: s,
          _setCompleteValue: s,
          _setErrorValue: s
        };
        var z, q = n.Class.define(null, {
            _listeners: null,
            _nextState: null,
            _state: null,
            _value: null,
            cancel: function() {
              this._state.cancel(this), this._run()
            },
            done: function(e, t, n) {
              this._state.done(this, e, t, n)
            },
            then: function(e, t, n) {
              return this._state.then(this, e, t, n)
            },
            _chainedError: function(e, t) {
              var n = this._state._error(this, e, l, t);
              return this._run(), n
            },
            _completed: function(e) {
              var t = this._state._completed(this, e);
              return this._run(), t
            },
            _error: function(e) {
              var t = this._state._error(this, e, f);
              return this._run(), t
            },
            _progress: function(e) {
              this._state._progress(this, e)
            },
            _setState: function(e) {
              this._nextState = e
            },
            _setCompleteValue: function(e) {
              this._state._setCompleteValue(this, e), this._run()
            },
            _setChainedErrorValue: function(e, t) {
              var n = this._state._setErrorValue(this, e, l, t);
              return this._run(), n
            },
            _setExceptionValue: function(e) {
              var t = this._state._setErrorValue(this, e, h);
              return this._run(), t
            },
            _run: function() {
              for (; this._nextState;) this._state = this._nextState, this._nextState = null, this._state.enter(this)
            }
          }, {
            supportedForProcessing: !1
          }),
          U = n.Class.derive(q, function(e) {
            k && (!0 === k || k & T.thenPromise) && (this._stack = G._getStack()), this._creator = e, this._setState(A), this._run()
          }, {
            _creator: null,
            _cancelAction: function() {
              this._creator && this._creator.cancel()
            },
            _cleanupAction: function() {
              this._creator = null
            }
          }, {
            supportedForProcessing: !1
          }),
          H = n.Class.define(function(e) {
            k && (!0 === k || k & T.errorPromise) && (this._stack = G._getStack()), this._value = e, g(this, e, f)
          }, {
            cancel: function() {},
            done: function(e, t) {
              var n = this._value;
              if (t) try {
                t.handlesOnError || g(null, n, c, this, t);
                var r = t(n);
                return void(r && "object" == typeof r && "function" == typeof r.done && r.done())
              } catch (e) {
                n = e
              }
              n instanceof Error && n.message === S || G._doneHandler(n)
            },
            then: function(e, t) {
              if (!t) return this;
              var n, r = this._value;
              try {
                t.handlesOnError || g(null, r, c, this, t), n = new J(t(r))
              } catch (e) {
                n = e === r ? this : new B(e)
              }
              return n
            }
          }, {
            supportedForProcessing: !1
          }),
          B = n.Class.derive(H, function(e) {
            k && (!0 === k || k & T.exceptionPromise) && (this._stack = G._getStack()), this._value = e, g(this, e, h)
          }, {}, {
            supportedForProcessing: !1
          }),
          J = n.Class.define(function(e) {
            if (k && (!0 === k || k & T.completePromise) && (this._stack = G._getStack()), e && "object" == typeof e && "function" == typeof e.then) {
              var t = new U(null);
              return t._setCompleteValue(e), t
            }
            this._value = e
          }, {
            cancel: function() {},
            done: function(e) {
              if (e) try {
                var t = e(this._value);
                t && "object" == typeof t && "function" == typeof t.done && t.done()
              } catch (e) {
                G._doneHandler(e)
              }
            },
            then: function(e) {
              try {
                var t = e ? e(this._value) : this._value;
                return t === this._value ? this : new J(t)
              } catch (e) {
                return new B(e)
              }
            }
          }, {
            supportedForProcessing: !1
          }),
          G = n.Class.derive(q, function(e, t) {
            k && (!0 === k || k & T.promise) && (this._stack = G._getStack()), this._oncancel = t, this._setState(A), this._run();
            try {
              e(this._completed.bind(this), this._error.bind(this), this._progress.bind(this))
            } catch (e) {
              this._setExceptionValue(e)
            }
          }, {
            _oncancel: null,
            _cancelAction: function() {
              try {
                if (!this._oncancel) throw new Error("Promise did not implement oncancel");
                this._oncancel()
              } catch (e) {
                e.message, e.stack;
                E.dispatchEvent("error", e)
              }
            },
            _cleanupAction: function() {
              this._oncancel = null
            }
          }, {
            addEventListener: function(e, t, n) {
              E.addEventListener(e, t, n)
            },
            any: function(e) {
              return new G(function(t, n) {
                var r = Object.keys(e);
                0 === r.length && t();
                var i = 0;
                r.forEach(function(o) {
                  G.as(e[o]).then(function() {
                    t({
                      key: o,
                      value: e[o]
                    })
                  }, function(s) {
                    s instanceof Error && s.name === S ? ++i === r.length && t(G.cancel) : n({
                      key: o,
                      value: e[o]
                    })
                  })
                })
              }, function() {
                Object.keys(e).forEach(function(t) {
                  var n = G.as(e[t]);
                  "function" == typeof n.cancel && n.cancel()
                })
              })
            },
            as: function(e) {
              return e && "object" == typeof e && "function" == typeof e.then ? e : new J(e)
            },
            cancel: {
              get: function() {
                return z = z || new H(new r(S))
              }
            },
            dispatchEvent: function(e, t) {
              return E.dispatchEvent(e, t)
            },
            is: function(e) {
              return e && "object" == typeof e && "function" == typeof e.then
            },
            join: function(e) {
              return new G(function(t, n, r) {
                var i = Object.keys(e),
                  o = Array.isArray(e) ? [] : {},
                  s = Array.isArray(e) ? [] : {},
                  a = 0,
                  u = i.length,
                  c = function(e) {
                    if (0 == --u) {
                      var a = Object.keys(o).length;
                      if (0 === a) t(s);
                      else {
                        var c = 0;
                        i.forEach(function(e) {
                          var t = o[e];
                          t instanceof Error && t.name === S && c++
                        }), c === a ? t(G.cancel) : n(o)
                      }
                    } else r({
                      Key: e,
                      Done: !0
                    })
                  };
                i.forEach(function(t) {
                  var n = e[t];
                  void 0 === n ? a++ : G.then(n, function(e) {
                    s[t] = e, c(t)
                  }, function(e) {
                    o[t] = e, c(t)
                  })
                }), 0 !== (u -= a) || t(s)
              }, function() {
                Object.keys(e).forEach(function(t) {
                  var n = G.as(e[t]);
                  "function" == typeof n.cancel && n.cancel()
                })
              })
            },
            removeEventListener: function(e, t, n) {
              E.removeEventListener(e, t, n)
            },
            supportedForProcessing: !1,
            then: function(e, t, n, r) {
              return G.as(e).then(t, n, r)
            },
            thenEach: function(e, t, n, r) {
              var i = Array.isArray(e) ? [] : {};
              return Object.keys(e).forEach(function(o) {
                i[o] = G.as(e[o]).then(t, n, r)
              }), G.join(i)
            },
            timeout: function(n, r) {
              var i = function(n) {
                var r;
                return new G(function(i) {
                  n ? r = e.setTimeout(i, n) : t._setImmediate(i)
                }, function() {
                  r && e.clearTimeout(r)
                })
              }(n);
              return r ? function(e, t) {
                var n = function() {
                  e.cancel()
                };
                return e.then(function() {
                  t.cancel()
                }), t.then(n, n), t
              }(i, r) : i
            },
            wrap: function(e) {
              return new J(e)
            },
            wrapError: function(e) {
              return new H(e)
            },
            _veryExpensiveTagWithStack: {
              get: function() {
                return k
              },
              set: function(e) {
                k = e
              }
            },
            _veryExpensiveTagWithStack_tag: T,
            _getStack: function() {
              if (e.Debug && e.Debug.debuggerEnabled) try {
                throw new Error
              } catch (e) {
                return e.stack
              }
            },
            _cancelBlocker: function(e, t) {
              if (!G.is(e)) return G.wrap(e);
              var n, r, i = new G(function(e, t) {
                n = e, r = t
              }, function() {
                n = null, r = null, t && t()
              });
              return e.then(function(e) {
                n && n(e)
              }, function(e) {
                r && r(e)
              }), i
            }
          });
        return Object.defineProperties(G, i.createEventProperties(x)), G._doneHandler = function(e) {
          t._setImmediate(function() {
            throw e
          })
        }, {
          PromiseStateMachine: q,
          Promise: G,
          state_created: A
        }
      }), t("WinJS/Promise", ["WinJS/Core/_Base", "WinJS/Promise/_StateMachine"], function(e, t) {
        "use strict";
        return e.Namespace.define("WinJS", {
          Promise: t.Promise
        }), t.Promise
      });
      var n = e["WinJS/Core/_WinJS"];
      "undefined" == typeof exports && "function" == typeof define && define.amd ? define("vs/base/common/winjs.base.raw", n) : module.exports = n, "undefined" != typeof process && "function" == typeof process.nextTick && (e["WinJS/Core/_BaseCoreUtils"]._setImmediate = function(e) {
        return process.nextTick(e)
      })
    }(), define(e[2], t([58]), function(e) {
      "use strict";
      return {
        Promise: e.Promise,
        TPromise: e.Promise,
        PPromise: e.Promise
      }
    });
  var r = this && this.__awaiter || function(e, t, n, r) {
      return new(n || (n = Promise))(function(i, o) {
        function s(e) {
          try {
            u(r.next(e))
          } catch (e) {
            o(e)
          }
        }

        function a(e) {
          try {
            u(r.throw(e))
          } catch (e) {
            o(e)
          }
        }

        function u(e) {
          e.done ? i(e.value) : new n(function(t) {
            t(e.value)
          }).then(s, a)
        }
        u((r = r.apply(e, t || [])).next())
      })
    },
    i = this && this.__generator || function(e, t) {
      function n(n) {
        return function(s) {
          return function(n) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; a;) try {
              if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
              switch (i = 0, o && (n = [0, o.value]), n[0]) {
                case 0:
                case 1:
                  o = n;
                  break;
                case 4:
                  return a.label++, {
                    value: n[1],
                    done: !1
                  };
                case 5:
                  a.label++, i = n[1], n = [0];
                  continue;
                case 7:
                  n = a.ops.pop(), a.trys.pop();
                  continue;
                default:
                  if (o = a.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    a = 0;
                    continue
                  }
                  if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    a.label = n[1];
                    break
                  }
                  if (6 === n[0] && a.label < o[1]) {
                    a.label = o[1], o = n;
                    break
                  }
                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(n);
                    break
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue
              }
              n = t.call(e, a)
            } catch (e) {
              n = [6, e], i = 0
            } finally {
              r = o = 0
            }
            if (5 & n[0]) throw n[1];
            return {
              value: n[0] ? n[1] : void 0,
              done: !0
            }
          }([n, s])
        }
      }
      var r, i, o, s, a = {
        label: 0,
        sent: function() {
          if (1 & o[0]) throw o[1];
          return o[1]
        },
        trys: [],
        ops: []
      };
      return s = {
        next: n(0),
        throw: n(1),
        return: n(2)
      }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
      }), s
    };
  define(e[11], t([0, 1, 2]), function(e, t, n) {
    "use strict";

    function o(e, t) {
      var n = 0,
        r = e.length;
      if (0 === r) return 0;
      for (; n < r;) {
        var i = Math.floor((n + r) / 2);
        t(e[i]) ? r = i : n = i + 1
      }
      return n
    }

    function s(e, t) {
      return a(e, t), e
    }

    function a(e, t) {
      if (!(e.length <= 1)) {
        var n = e.length / 2 | 0,
          r = e.slice(0, n),
          i = e.slice(n);
        a(r, t), a(i, t);
        for (var o = 0, s = 0, u = 0; o < r.length && s < i.length;) {
          var c = t(r[o], i[s]);
          e[u++] = c <= 0 ? r[o++] : i[s++]
        }
        for (; o < r.length;) e[u++] = r[o++];
        for (; s < i.length;) e[u++] = i[s++]
      }
    }

    function u(e, t, n) {
      function r(e, t, n) {
        if (0 !== t || 0 !== n.length) {
          var r = i[i.length - 1];
          r && r.start + r.deleteCount === e ? (r.deleteCount += t, (o = r.toInsert).push.apply(o, n)) : i.push({
            start: e,
            deleteCount: t,
            toInsert: n
          });
          var o
        }
      }
      for (var i = [], o = 0, s = 0;;) {
        if (o === e.length) {
          r(o, 0, t.slice(s));
          break
        }
        if (s === t.length) {
          r(o, e.length - o, []);
          break
        }
        var a = e[o],
          u = t[s],
          c = n(a, u);
        0 === c ? (o += 1, s += 1) : c < 0 ? (r(o, 1, []), o += 1) : c > 0 && (r(o, 0, [u]), s += 1)
      }
      return i
    }

    function c(e, t, n, r, i) {
      for (var s = function(i) {
          var s = e[r];
          if (t(s, n[i - 1]) < 0) {
            n.pop();
            var a = o(n, function(e) {
              return t(s, e) < 0
            });
            n.splice(a, 0, s)
          }
        }, a = n.length; r < i; r++) s(a)
    }

    function l(e, t) {
      for (var n = 0; n < e.length; n++) {
        if (t(e[n])) return n
      }
      return -1
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.tail = function(e, t) {
      return void 0 === t && (t = 0), e[e.length - (1 + t)]
    }, t.equals = function(e, t, n) {
      if (void 0 === n && (n = function(e, t) {
          return e === t
        }), e.length !== t.length) return !1;
      for (var r = 0, i = e.length; r < i; r++)
        if (!n(e[r], t[r])) return !1;
      return !0
    }, t.binarySearch = function(e, t, n) {
      for (var r = 0, i = e.length - 1; r <= i;) {
        var o = (r + i) / 2 | 0,
          s = n(e[o], t);
        if (s < 0) r = o + 1;
        else {
          if (!(s > 0)) return o;
          i = o - 1
        }
      }
      return -(r + 1)
    }, t.findFirst = o, t.mergeSort = s, t.groupBy = function(e, t) {
      for (var n, r = [], i = 0, o = s(e.slice(0), t); i < o.length; i++) {
        var a = o[i];
        n && 0 === t(n[0], a) ? n.push(a) : (n = [a], r.push(n))
      }
      return r
    }, t.sortedDiff = u, t.delta = function(e, t, n) {
      for (var r = [], i = [], o = 0, s = u(e, t, n); o < s.length; o++) {
        var a = s[o];
        r.push.apply(r, e.slice(a.start, a.start + a.deleteCount)), i.push.apply(i, a.toInsert)
      }
      return {
        removed: r,
        added: i
      }
    }, t.top = function(e, t, n) {
      if (0 === n) return [];
      var r = e.slice(0, n).sort(t);
      return c(e, t, r, n, e.length), r
    }, t.topAsync = function(e, t, o, s) {
      var a = this;
      if (0 === o) return n.TPromise.as([]);
      var u = !1;
      return new n.TPromise(function(n, l) {
        r(a, void 0, void 0, function() {
          var n, r, a, l;
          return i(this, function(i) {
            switch (i.label) {
              case 0:
                n = e.length, r = e.slice(0, o).sort(t), a = o, l = Math.min(o + s, n), i.label = 1;
              case 1:
                return a < n ? a > o ? [4, new Promise(function(e) {
                  return setTimeout(e)
                })] : [3, 3] : [3, 5];
              case 2:
                i.sent(), i.label = 3;
              case 3:
                if (u) throw new Error("canceled");
                c(e, t, r, a, l), i.label = 4;
              case 4:
                return a = l, l = Math.min(l + s, n), [3, 1];
              case 5:
                return [2, r]
            }
          })
        }).then(n, l)
      }, function() {
        u = !0
      })
    }, t.coalesce = function(e) {
      return e ? e.filter(function(e) {
        return !!e
      }) : e
    }, t.move = function(e, t, n) {
      e.splice(n, 0, e.splice(t, 1)[0])
    }, t.isFalsyOrEmpty = function(e) {
      return !Array.isArray(e) || 0 === e.length
    }, t.distinct = function(e, t) {
      if (!t) return e.filter(function(t, n) {
        return e.indexOf(t) === n
      });
      var n = Object.create(null);
      return e.filter(function(e) {
        var r = t(e);
        return !n[r] && (n[r] = !0, !0)
      })
    }, t.uniqueFilter = function(e) {
      var t = Object.create(null);
      return function(n) {
        var r = e(n);
        return !t[r] && (t[r] = !0, !0)
      }
    }, t.firstIndex = l, t.first = function(e, t, n) {
      void 0 === n && (n = null);
      var r = l(e, t);
      return r < 0 ? n : e[r]
    }, t.commonPrefixLength = function(e, t, n) {
      void 0 === n && (n = function(e, t) {
        return e === t
      });
      for (var r = 0, i = 0, o = Math.min(e.length, t.length); i < o && n(e[i], t[i]); i++) r++;
      return r
    }, t.flatten = function(e) {
      return [].concat.apply([], e)
    }, t.range = function(e, t) {
      var n = "number" == typeof t ? e : 0;
      "number" == typeof t ? n = e : (n = 0, t = e);
      var r = [];
      if (n <= t)
        for (i = n; i < t; i++) r.push(i);
      else
        for (var i = n; i > t; i--) r.push(i);
      return r
    }, t.fill = function(e, t, n) {
      void 0 === n && (n = []);
      for (var r = 0; r < e; r++) n[r] = t();
      return n
    }, t.index = function(e, t, n) {
      return void 0 === n && (n = function(e) {
        return e
      }), e.reduce(function(e, r) {
        var i = t(r);
        return e[i] = n(r, e[i]), e
      }, Object.create(null))
    }, t.insert = function(e, t) {
      return e.push(t),
        function() {
          var n = e.indexOf(t);
          n > -1 && e.splice(n, 1)
        }
    }, t.arrayInsert = function(e, t, n) {
      var r = e.slice(0, t),
        i = e.slice(t);
      return r.concat(n, i)
    }
  }), define(e[17], t([0, 1, 4, 10, 2]), function(e, t, n, r, i) {
    "use strict";

    function o(e) {
      s(e) || t.errorHandler.onUnexpectedError(e)
    }

    function s(e) {
      return e instanceof Error && e.name === c && e.message === c
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = {};
    i.TPromise.addEventListener("error", function(e) {
      var t = e.detail,
        n = t.id;
      t.parent ? t.handler && a && delete a[n] : (a[n] = t, 1 === Object.keys(a).length && setTimeout(function() {
        var e = a;
        a = {}, Object.keys(e).forEach(function(t) {
          var n = e[t];
          n.exception ? o(n.exception) : n.error && o(n.error), console.log("WARNING: Promise with no error callback:" + n.id), console.log(n), n.exception && console.log(n.exception.stack)
        })
      }, 0))
    });
    var u = function() {
      function e() {
        this.listeners = [], this.unexpectedErrorHandler = function(e) {
          n.setTimeout(function() {
            if (e.stack) throw new Error(e.message + "\n\n" + e.stack);
            throw e
          }, 0)
        }
      }
      return e.prototype.addListener = function(e) {
          var t = this;
          return this.listeners.push(e),
            function() {
              t._removeListener(e)
            }
        }, e.prototype.emit = function(e) {
          this.listeners.forEach(function(t) {
            t(e)
          })
        }, e.prototype._removeListener = function(e) {
          this.listeners.splice(this.listeners.indexOf(e), 1)
        }, e.prototype.setUnexpectedErrorHandler = function(e) {
          this.unexpectedErrorHandler = e
        },
        e.prototype.getUnexpectedErrorHandler = function() {
          return this.unexpectedErrorHandler
        }, e.prototype.onUnexpectedError = function(e) {
          this.unexpectedErrorHandler(e), this.emit(e)
        }, e.prototype.onUnexpectedExternalError = function(e) {
          this.unexpectedErrorHandler(e)
        }, e
    }();
    t.ErrorHandler = u, t.errorHandler = new u, t.setUnexpectedErrorHandler = function(e) {
      t.errorHandler.setUnexpectedErrorHandler(e)
    }, t.onUnexpectedError = o, t.onUnexpectedExternalError = function(e) {
      s(e) || t.errorHandler.onUnexpectedExternalError(e)
    }, t.transformErrorForSerialization = function(e) {
      if (e instanceof Error) return {
        $isError: !0,
        name: e.name,
        message: e.message,
        stack: e.stacktrace || e.stack
      };
      return e
    };
    var c = "Canceled";
    t.isPromiseCanceledError = s, t.canceled = function() {
      var e = new Error(c);
      return e.name = e.message, e
    }, t.illegalArgument = function(e) {
      return e ? new Error("Illegal argument: " + e) : new Error("Illegal argument")
    }, t.illegalState = function(e) {
      return e ? new Error("Illegal state: " + e) : new Error("Illegal state")
    }, t.readonly = function(e) {
      return e ? new Error("readonly property '" + e + " cannot be changed'") : new Error("readonly property cannot be changed")
    }, t.disposed = function(e) {
      var t = new Error(e + " has been disposed");
      return t.name = "DISPOSED", t
    }, t.create = function(e, t) {
      void 0 === t && (t = {});
      var n = new Error(e);
      return r.isNumber(t.severity) && (n.severity = t.severity), t.actions && (n.actions = t.actions), n
    }, t.getErrorMessage = function(e) {
      return e ? e.message ? e.message : e.stack ? e.stack.split("\n")[0] : String(e) : "Error"
    }
  }), define(e[12], t([0, 1, 15, 2, 20, 17, 54]), function(e, t, n, r, i, o, s) {
    "use strict";

    function a(e) {
      return function(t, n, r) {
        void 0 === n && (n = null);
        var i = e(function(e) {
          return i.dispose(), t.call(n, e)
        }, null, r);
        return i
      }
    }

    function u(e, t) {
      return function(n, r, i) {
        return void 0 === r && (r = null), e(function(e) {
          return n.call(r, t(e))
        }, null, i)
      }
    }

    function c(e, t) {
      return function(n, r, i) {
        return void 0 === r && (r = null), e(function(e) {
          t(e), n.call(r, e)
        }, null, i)
      }
    }

    function l(e, t) {
      return function(n, r, i) {
        return void 0 === r && (r = null), e(function(e) {
          return t(e) && n.call(r, e)
        }, null, i)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f;
    ! function(e) {
      var t = {
        dispose: function() {}
      };
      e.None = function() {
        return t
      }
    }(f || (f = {})), t.default = f;
    var h = function() {
      function e(e) {
        this._options = e
      }
      return Object.defineProperty(e.prototype, "event", {
        get: function() {
          var t = this;
          return this._event || (this._event = function(n, r, i) {
            t._listeners || (t._listeners = new s.LinkedList);
            var o = t._listeners.isEmpty();
            o && t._options && t._options.onFirstListenerAdd && t._options.onFirstListenerAdd(t);
            var a = t._listeners.push(r ? [n, r] : n);
            o && t._options && t._options.onFirstListenerDidAdd && t._options.onFirstListenerDidAdd(t), t._options && t._options.onListenerDidAdd && t._options.onListenerDidAdd(t, n, r);
            var u;
            return u = {
              dispose: function() {
                u.dispose = e._noop, t._disposed || (a(), t._options && t._options.onLastListenerRemove && t._listeners.isEmpty() && t._options.onLastListenerRemove(t))
              }
            }, Array.isArray(i) && i.push(u), u
          }), this._event
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.fire = function(e) {
        if (this._listeners) {
          this._deliveryQueue || (this._deliveryQueue = []);
          for (var t = this._listeners.iterator(), n = t.next(); !n.done; n = t.next()) this._deliveryQueue.push([n.value, e]);
          for (; this._deliveryQueue.length > 0;) {
            var r = this._deliveryQueue.shift(),
              i = r[0],
              s = r[1];
            try {
              "function" == typeof i ? i.call(void 0, s) : i[0].call(i[1], s)
            } catch (n) {
              o.onUnexpectedError(n)
            }
          }
        }
      }, e.prototype.dispose = function() {
        this._listeners && (this._listeners = void 0), this._deliveryQueue && (this._deliveryQueue.length = 0), this._disposed = !0
      }, e._noop = function() {}, e
    }();
    t.Emitter = h;
    var p = function() {
      function e() {
        var e = this;
        this.hasListeners = !1, this.events = [], this.emitter = new h({
          onFirstListenerAdd: function() {
            return e.onFirstListenerAdd()
          },
          onLastListenerRemove: function() {
            return e.onLastListenerRemove()
          }
        })
      }
      return Object.defineProperty(e.prototype, "event", {
        get: function() {
          return this.emitter.event
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.add = function(e) {
        var t = this,
          r = {
            event: e,
            listener: null
          };
        this.events.push(r), this.hasListeners && this.hook(r);
        return n.toDisposable(i.once(function() {
          t.hasListeners && t.unhook(r);
          var e = t.events.indexOf(r);
          t.events.splice(e, 1)
        }))
      }, e.prototype.onFirstListenerAdd = function() {
        var e = this;
        this.hasListeners = !0, this.events.forEach(function(t) {
          return e.hook(t)
        })
      }, e.prototype.onLastListenerRemove = function() {
        var e = this;
        this.hasListeners = !1, this.events.forEach(function(t) {
          return e.unhook(t)
        })
      }, e.prototype.hook = function(e) {
        var t = this;
        e.listener = e.event(function(e) {
          return t.emitter.fire(e)
        })
      }, e.prototype.unhook = function(e) {
        e.listener.dispose(), e.listener = null
      }, e.prototype.dispose = function() {
        this.emitter.dispose()
      }, e
    }();
    t.EventMultiplexer = p, t.fromCallback = function(e) {
        var t, n = new h({
          onFirstListenerAdd: function() {
            return t = e(function(e) {
              return n.fire(e)
            })
          },
          onLastListenerRemove: function() {
            return t.dispose()
          }
        });
        return n.event
      }, t.fromPromise = function(e) {
        var t = new h,
          n = !1;
        return e.then(null, function() {
          return null
        }).then(function() {
          n ? t.fire() : setTimeout(function() {
            return t.fire()
          }, 0)
        }), n = !0, t.event
      }, t.toPromise = function(e) {
        return new r.TPromise(function(t) {
          var n = e(function(e) {
            n.dispose(), t(e)
          })
        })
      }, t.once = a,
      t.anyEvent = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function(t, r, i) {
          return void 0 === r && (r = null), n.combinedDisposable(e.map(function(e) {
            return e(function(e) {
              return t.call(r, e)
            }, null, i)
          }))
        }
      }, t.debounceEvent = function(e, t, n, r) {
        void 0 === n && (n = 100), void 0 === r && (r = !1);
        var i, o = void 0,
          s = void 0,
          a = 0,
          u = new h({
            onFirstListenerAdd: function() {
              i = e(function(e) {
                a++, o = t(o, e), r && !s && u.fire(o), clearTimeout(s), s = setTimeout(function() {
                  var e = o;
                  o = void 0, s = void 0, (!r || a > 1) && u.fire(e), a = 0
                }, n)
              })
            },
            onLastListenerRemove: function() {
              i.dispose()
            }
          });
        return u.event
      };
    var d = function() {
      function e() {
        this.buffers = []
      }
      return e.prototype.wrapEvent = function(e) {
        var t = this;
        return function(n, r, i) {
          return e(function(e) {
            var i = t.buffers[t.buffers.length - 1];
            i ? i.push(function() {
              return n.call(r, e)
            }) : n.call(r, e)
          }, void 0, i)
        }
      }, e.prototype.bufferEvents = function(e) {
        var t = [];
        this.buffers.push(t), e(), this.buffers.pop(), t.forEach(function(e) {
          return e()
        })
      }, e
    }();
    t.EventBufferer = d, t.mapEvent = u, t.forEach = c, t.filterEvent = l;
    var v = function() {
      function e(e) {
        this._event = e
      }
      return Object.defineProperty(e.prototype, "event", {
        get: function() {
          return this._event
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.map = function(t) {
        return new e(u(this._event, t))
      }, e.prototype.forEach = function(t) {
        return new e(c(this._event, t))
      }, e.prototype.filter = function(t) {
        return new e(l(this._event, t))
      }, e.prototype.on = function(e, t, n) {
        return this._event(e, t, n)
      }, e
    }();
    t.chain = function(e) {
      return new v(e)
    }, t.stopwatch = function(e) {
      var t = (new Date).getTime();
      return u(a(e), function(e) {
        return (new Date).getTime() - t
      })
    }, t.buffer = function(e, t, n) {
      void 0 === t && (t = !1), void 0 === n && (n = []), n = n.slice();
      var r = e(function(e) {
          n ? n.push(e) : o.fire(e)
        }),
        i = function() {
          n.forEach(function(e) {
            return o.fire(e)
          }), n = null
        },
        o = new h({
          onFirstListenerAdd: function() {
            r || (r = e(function(e) {
              return o.fire(e)
            }))
          },
          onFirstListenerDidAdd: function() {
            n && (t ? setTimeout(i) : i())
          },
          onLastListenerRemove: function() {
            r.dispose(), r = null
          }
        });
      return o.event
    }, t.echo = function(e, t, n) {
      void 0 === t && (t = !1), void 0 === n && (n = []), n = n.slice(), e(function(e) {
        n.push(e), i.fire(e)
      });
      var r = function(e, t) {
          return n.forEach(function(n) {
            return e.call(t, n)
          })
        },
        i = new h({
          onListenerDidAdd: function(e, n, i) {
            t ? setTimeout(function() {
              return r(n, i)
            }) : r(n, i)
          }
        });
      return i.event
    };
    var m = function() {
      function e() {
        this.emitter = new h, this.event = this.emitter.event, this.disposable = n.empty
      }
      return Object.defineProperty(e.prototype, "input", {
        set: function(e) {
          this.disposable.dispose(), this.disposable = e(this.emitter.fire, this.emitter)
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.dispose = function() {
        this.disposable.dispose(), this.emitter.dispose()
      }, e
    }();
    t.Relay = m, t.fromNodeEventEmitter = function(e, t, n) {
      void 0 === n && (n = function(e) {
        return e
      });
      var r = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return i.fire(n.apply(void 0, e))
        },
        i = new h({
          onFirstListenerAdd: function() {
            return e.on(t, r)
          },
          onLastListenerRemove: function() {
            return e.removeListener(t, r)
          }
        });
      return i.event
    }
  }), define(e[29], t([0, 1, 12]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r, i = Object.freeze(function(e, t) {
      var n = setTimeout(e.bind(t), 0);
      return {
        dispose: function() {
          clearTimeout(n)
        }
      }
    });
    ! function(e) {
      e.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: n.default.None
      }), e.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: i
      })
    }(r = t.CancellationToken || (t.CancellationToken = {}));
    var o = function() {
        function e() {
          this._isCancelled = !1
        }
        return e.prototype.cancel = function() {
          this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this._emitter = void 0))
        }, Object.defineProperty(e.prototype, "isCancellationRequested", {
          get: function() {
            return this._isCancelled
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "onCancellationRequested", {
          get: function() {
            return this._isCancelled ? i : (this._emitter || (this._emitter = new n.Emitter), this._emitter.event)
          },
          enumerable: !0,
          configurable: !0
        }), e
      }(),
      s = function() {
        function e() {}
        return Object.defineProperty(e.prototype, "token", {
          get: function() {
            return this._token || (this._token = new o),
              this._token
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.cancel = function() {
          this._token ? this._token instanceof o && this._token.cancel() : this._token = r.Cancelled
        }, e.prototype.dispose = function() {
          this.cancel()
        }, e
      }();
    t.CancellationTokenSource = s
  }), define(e[22], t([0, 1, 17, 4, 2, 29, 15, 12]), function(e, t, r, i, o, s, a, u) {
    "use strict";

    function c(e) {
      return e && "function" == typeof e.then
    }

    function l(e, t) {
      return new o.TPromise(function(n, i, o) {
        e.done(function(e) {
          try {
            t(e)
          } catch (e) {
            r.onUnexpectedError(e)
          }
          n(e)
        }, function(e) {
          try {
            t(e)
          } catch (e) {
            r.onUnexpectedError(e)
          }
          i(e)
        }, function(e) {
          o(e)
        })
      }, function() {
        e.cancel()
      })
    }

    function f(e) {
      function t(r) {
        void 0 !== r && null !== r && n.push(r);
        var i = e.length ? e.pop()() : null;
        return i ? i.then(t) : o.TPromise.as(n)
      }
      var n = [];
      return e = e.reverse(), o.TPromise.as(null).then(t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isThenable = c, t.toThenable = function(e) {
      return c(e) ? e : o.TPromise.as(e)
    }, t.asWinJsPromise = function(e) {
      var t = new s.CancellationTokenSource;
      return new o.TPromise(function(n, r, i) {
        var s = e(t.token);
        s instanceof o.TPromise ? s.then(n, r, i) : c(s) ? s.then(n, r) : n(s)
      }, function() {
        t.cancel()
      })
    }, t.wireCancellationToken = function(e, t, n) {
      var i = e.onCancellationRequested(function() {
        return t.cancel()
      });
      return n && (t = t.then(void 0, function(e) {
        if (!r.isPromiseCanceledError(e)) return o.TPromise.wrapError(e)
      })), l(t, function() {
        return i.dispose()
      })
    };
    var h = function() {
      function e() {
        this.activePromise = null, this.queuedPromise = null, this.queuedPromiseFactory = null
      }
      return e.prototype.queue = function(e) {
        var t = this;
        if (this.activePromise) {
          if (this.queuedPromiseFactory = e, !this.queuedPromise) {
            var n = function() {
              t.queuedPromise = null;
              var e = t.queue(t.queuedPromiseFactory);
              return t.queuedPromiseFactory = null, e
            };
            this.queuedPromise = new o.TPromise(function(e, r, i) {
              t.activePromise.then(n, n, i).done(e)
            }, function() {
              t.activePromise.cancel()
            })
          }
          return new o.TPromise(function(e, n, r) {
            t.queuedPromise.then(e, n, r)
          }, function() {})
        }
        return this.activePromise = e(), new o.TPromise(function(e, n, r) {
          t.activePromise.done(function(n) {
            t.activePromise = null, e(n)
          }, function(e) {
            t.activePromise = null, n(e)
          }, r)
        }, function() {
          t.activePromise.cancel()
        })
      }, e
    }();
    t.Throttler = h;
    var p = function() {
      function e() {
        this.current = o.TPromise.wrap(null)
      }
      return e.prototype.queue = function(e) {
        return this.current = this.current.then(function() {
          return e()
        })
      }, e
    }();
    t.SimpleThrottler = p;
    var d = function() {
      function e(e) {
        this.defaultDelay = e, this.timeout = null, this.completionPromise = null, this.onSuccess = null, this.task = null
      }
      return e.prototype.trigger = function(e, t) {
        var n = this;
        return void 0 === t && (t = this.defaultDelay), this.task = e, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new o.TPromise(function(e) {
          n.onSuccess = e
        }, function() {}).then(function() {
          n.completionPromise = null, n.onSuccess = null;
          var e = n.task;
          return n.task = null, e()
        })), this.timeout = setTimeout(function() {
          n.timeout = null, n.onSuccess(null)
        }, t), this.completionPromise
      }, e.prototype.isTriggered = function() {
        return null !== this.timeout
      }, e.prototype.cancel = function() {
        this.cancelTimeout(), this.completionPromise && (this.completionPromise.cancel(),
          this.completionPromise = null)
      }, e.prototype.cancelTimeout = function() {
        null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
      }, e
    }();
    t.Delayer = d;
    var v = function(e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return n.throttler = new h, n
      }
      return n(t, e), t.prototype.trigger = function(t, n) {
        var r = this;
        return e.prototype.trigger.call(this, function() {
          return r.throttler.queue(t)
        }, n)
      }, t
    }(d);
    t.ThrottledDelayer = v;
    var m = function() {
      function e() {
        var e = this;
        this._isOpen = !1, this._promise = new o.TPromise(function(t, n, r) {
          e._completePromise = t
        }, function() {
          console.warn("You should really not try to cancel this ready promise!")
        })
      }
      return e.prototype.isOpen = function() {
        return this._isOpen
      }, e.prototype.open = function() {
        this._isOpen = !0, this._completePromise(!0)
      }, e.prototype.wait = function() {
        return this._promise
      }, e
    }();
    t.Barrier = m;
    var g = function(e) {
      function t(t) {
        var n, i, o, s = this;
        return s = e.call(this, function(e, t, r) {
          n = e, i = t, o = r
        }, function() {
          i(r.canceled())
        }) || this, t.then(n, i, o), s
      }
      return n(t, e), t
    }(o.TPromise);
    t.ShallowCancelThenPromise = g,
      t.timeout = function(e) {
        return new o.Promise(function(t) {
          return setTimeout(t, e)
        })
      }, t.always = l, t.sequence = f, t.first = function(e, t) {
        void 0 === t && (t = function(e) {
          return !!e
        }), e = e.reverse().slice();
        var n = function() {
          return 0 === e.length ? o.TPromise.as(null) : e.pop()().then(function(e) {
            return t(e) ? o.TPromise.as(e) : n()
          })
        };
        return n()
      };
    var y = function() {
      function e(e) {
        this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onFinished = new u.Emitter
      }
      return Object.defineProperty(e.prototype, "onFinished", {
        get: function() {
          return this._onFinished.event
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "size", {
        get: function() {
          return this.runningPromises + this.outstandingPromises.length
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.queue = function(e) {
        var t = this;
        return new o.TPromise(function(n, r, i) {
          t.outstandingPromises.push({
            factory: e,
            c: n,
            e: r,
            p: i
          }), t.consume()
        })
      }, e.prototype.consume = function() {
        for (var e = this; this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism;) {
          var t = this.outstandingPromises.shift();
          this.runningPromises++;
          var n = t.factory();
          n.done(t.c, t.e, t.p), n.done(function() {
            return e.consumed()
          }, function() {
            return e.consumed()
          })
        }
      }, e.prototype.consumed = function() {
        this.runningPromises--, this.outstandingPromises.length > 0 ? this.consume() : this._onFinished.fire()
      }, e.prototype.dispose = function() {
        this._onFinished.dispose()
      }, e
    }();
    t.Limiter = y;
    var _ = function(e) {
      function t() {
        return e.call(this, 1) || this
      }
      return n(t, e), t
    }(y);
    t.Queue = _;
    var b = function() {
      function e() {
        this.queues = Object.create(null)
      }
      return e.prototype.queueFor = function(e) {
        var t = this,
          n = e.toString();
        if (!this.queues[n]) {
          var r = new _;
          r.onFinished(function() {
            r.dispose(), delete t.queues[n]
          }), this.queues[n] = r
        }
        return this.queues[n]
      }, e
    }();
    t.ResourceQueue = b, t.setDisposableTimeout = function(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
      var i = setTimeout.apply(void 0, [e, t].concat(n));
      return {
        dispose: function() {
          clearTimeout(i)
        }
      }
    };
    var w = function(e) {
      function t() {
        var t = e.call(this) || this;
        return t._token = -1, t
      }
      return n(t, e), t.prototype.dispose = function() {
        this.cancel(), e.prototype.dispose.call(this)
      }, t.prototype.cancel = function() {
        -1 !== this._token && (i.clearTimeout(this._token), this._token = -1)
      }, t.prototype.cancelAndSet = function(e, t) {
        var n = this;
        this.cancel(), this._token = i.setTimeout(function() {
          n._token = -1, e()
        }, t)
      }, t.prototype.setIfNotSet = function(e, t) {
        var n = this; - 1 === this._token && (this._token = i.setTimeout(function() {
          n._token = -1, e()
        }, t))
      }, t
    }(a.Disposable);
    t.TimeoutTimer = w;
    var P = function(e) {
      function t() {
        var t = e.call(this) || this;
        return t._token = -1, t
      }
      return n(t, e), t.prototype.dispose = function() {
        this.cancel(), e.prototype.dispose.call(this)
      }, t.prototype.cancel = function() {
        -1 !== this._token && (i.clearInterval(this._token), this._token = -1)
      }, t.prototype.cancelAndSet = function(e, t) {
        this.cancel(), this._token = i.setInterval(function() {
          e()
        }, t)
      }, t
    }(a.Disposable);
    t.IntervalTimer = P;
    var C = function() {
      function e(e, t) {
        this.timeoutToken = -1, this.runner = e, this.timeout = t, this.timeoutHandler = this.onTimeout.bind(this)
      }
      return e.prototype.dispose = function() {
        this.cancel(), this.runner = null
      }, e.prototype.cancel = function() {
        this.isScheduled() && (i.clearTimeout(this.timeoutToken), this.timeoutToken = -1)
      }, e.prototype.schedule = function(e) {
        void 0 === e && (e = this.timeout), this.cancel(), this.timeoutToken = i.setTimeout(this.timeoutHandler, e)
      }, e.prototype.isScheduled = function() {
        return -1 !== this.timeoutToken
      }, e.prototype.onTimeout = function() {
        this.timeoutToken = -1, this.runner && this.runner()
      }, e
    }();
    t.RunOnceScheduler = C, t.nfcall = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      return new o.TPromise(function(n, r) {
        return e.apply(void 0, t.concat([function(e, t) {
          return e ? r(e) : n(t)
        }]))
      }, function() {
        return null
      })
    }, t.ninvoke = function(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
      return new o.TPromise(function(r, i) {
        return t.call.apply(t, [e].concat(n, [function(e, t) {
          return e ? i(e) : r(t)
        }]))
      }, function() {
        return null
      })
    };
    var E = function(e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }
      return n(t, e),
        t.prototype.throttle = function(e) {
          var t = this;
          return this.suspended = !0, l(e, function() {
            return t.resume()
          })
        }, t.prototype.fire = function(t) {
          return this.suspended ? (this.lastEvent = t, void(this.hasLastEvent = !0)) : e.prototype.fire.call(this, t)
        }, t.prototype.resume = function() {
          this.suspended = !1, this.hasLastEvent && this.fire(this.lastEvent), this.hasLastEvent = !1, this.lastEvent = void 0
        }, t
    }(u.Emitter);
    t.ThrottledEmitter = E
  }), define(e[23], t([0, 1, 11, 3, 6, 13, 2]), function(e, t, n, r, i, o, s) {
    "use strict";

    function a(e) {
      switch (e) {
        case 0:
          return "";
        case 1:
          return b + "*?";
        default:
          return "(?:" + _ + "|" + b + "+" + _ + "|" + _ + b + "+)*?"
      }
    }

    function u(e, t) {
      if (!e) return [];
      for (var n, r = [], i = !1, o = !1, s = "", a = 0; a < e.length; a++) {
        switch (n = e[a]) {
          case t:
            if (!i && !o) {
              r.push(s), s = "";
              continue
            }
            break;
          case "{":
            i = !0;
            break;
          case "}":
            i = !1;
            break;
          case "[":
            o = !0;
            break;
          case "]":
            o = !1
        }
        s += n
      }
      return s && r.push(s), r
    }

    function c(e) {
      if (!e) return "";
      var t = "",
        n = u(e, y);
      if (n.every(function(e) {
          return e === g
        })) t = ".*";
      else {
        var i = !1;
        n.forEach(function(e, o) {
          if (e !== g) {
            for (var s, l = !1, f = "", h = !1, p = "", d = 0; d < e.length; d++)
              if ("}" !== (s = e[d]) && l) f += s;
              else if (!h || "]" === s && p) switch (s) {
              case "{":
                l = !0;
                continue;
              case "[":
                h = !0;
                continue;
              case "}":
                var v = "(?:" + u(f, ",").map(function(e) {
                  return c(e)
                }).join("|") + ")";
                t += v, l = !1, f = "";
                break;
              case "]":
                t += "[" + p + "]", h = !1, p = "";
                break;
              case "?":
                t += b;
                continue;
              case "*":
                t += a(1);
                continue;
              default:
                t += r.escapeRegExpCharacters(s)
            } else {
              p += "-" === s ? s : "^" !== s && "!" !== s || p ? s === y ? "" : r.escapeRegExpCharacters(s) : "^"
            }
            o < n.length - 1 && n[o + 1] !== g && (t += _), i = !1
          } else i || (t += a(2), i = !0)
        })
      }
      return t
    }

    function l(e, t) {
      if (!e) return O;
      var i;
      i = "string" != typeof e ? e.pattern : e;
      var o = (i = i.trim()) + "_" + !!t.trimForExclusions,
        s = T.get(o);
      if (s) return f(s, e);
      var a;
      if (P.test(i)) {
        var u = i.substr(4);
        s = function(e, t) {
          return e && r.endsWith(e, u) ? i : null
        }
      } else s = (a = C.exec(h(i, t))) ? function(e, t) {
        var n = "/" + e,
          i = "\\" + e,
          o = function(o, s) {
            return o ? s ? s === e ? t : null : o === e || r.endsWith(o, n) || r.endsWith(o, i) ? t : null : null
          },
          s = [e];
        return o.basenames = s, o.patterns = [t], o.allBasenames = s, o
      }(a[1], i) : (t.trimForExclusions ? x : E).test(i) ? function(e, t) {
        var r = m(e.slice(1, -1).split(",").map(function(e) {
            return l(e, t)
          }).filter(function(e) {
            return e !== O
          }), e),
          i = r.length;
        if (!i) return O;
        if (1 === i) return r[0];
        var o = function(t, n) {
            for (var i = 0, o = r.length; i < o; i++)
              if (r[i](t, n)) return e;
            return null
          },
          s = n.first(r, function(e) {
            return !!e.allBasenames
          });
        s && (o.allBasenames = s.allBasenames);
        var a = r.reduce(function(e, t) {
          return t.allPaths ? e.concat(t.allPaths) : e
        }, []);
        a.length && (o.allPaths = a);
        return o
      }(i, t) : (a = S.exec(h(i, t))) ? p(a[1].substr(1), i, !0) : (a = k.exec(h(i, t))) ? p(a[1], i, !1) : function(e) {
        try {
          var t = new RegExp("^" + c(e) + "$");
          return function(n, r) {
            return t.lastIndex = 0, n && t.test(n) ? e : null
          }
        } catch (e) {
          return O
        }
      }(i);
      return T.set(o, s), f(s, e)
    }

    function f(e, t) {
      return "string" == typeof t ? e : function(n, r) {
        return i.isEqualOrParent(n, t.base) ? e(i.normalize(t.pathToRelative(t.base, n)), r) : null
      }
    }

    function h(e, t) {
      return t.trimForExclusions && r.endsWith(e, "/**") ? e.substr(0, e.length - 2) : e
    }

    function p(e, t, n) {
      var o = i.nativeSep !== i.sep ? e.replace(w, i.nativeSep) : e,
        s = i.nativeSep + o,
        a = n ? function(e, n) {
          return e && (e === o || r.endsWith(e, s)) ? t : null
        } : function(e, n) {
          return e && e === o ? t : null
        };
      return a.allPaths = [(n ? "*/" : "./") + e], a
    }

    function d(e, t) {
      if (void 0 === t && (t = {}), !e) return A;
      if ("string" == typeof e || v(e)) {
        var r = l(e, t);
        if (r === O) return A;
        var o = function(e, t) {
          return !!r(e, t)
        };
        return r.allBasenames && (o.allBasenames = r.allBasenames), r.allPaths && (o.allPaths = r.allPaths), o
      }
      return function(e, t) {
        var r = m(Object.getOwnPropertyNames(e).map(function(n) {
            return function(e, t, n) {
              if (!1 === t) return O;
              var r = l(e, n);
              if (r === O) return O;
              if ("boolean" == typeof t) return r;
              if (t) {
                var i = t.when;
                if ("string" == typeof i) {
                  var o = function(t) {
                      var n = i.replace("$(basename)", t.name);
                      return -1 !== t.siblings.indexOf(n) ? e : null
                    },
                    a = function(e, t, n) {
                      if (!r(e, t)) return null;
                      var i = n();
                      return i ? s.TPromise.is(i) ? i.then(o) : o(i) : null
                    };
                  return a.requiresSiblings = !0, a
                }
              }
              return r
            }(n, e[n], t)
          }).filter(function(e) {
            return e !== O
          })),
          o = r.length;
        if (!o) return O;
        if (!r.some(function(e) {
            return e.requiresSiblings
          })) {
          if (1 === o) return r[0];
          var a = function(e, t, n) {
              for (var i = 0, o = r.length; i < o; i++) {
                var s = r[i](e, t);
                if (s) return s
              }
              return null
            },
            u = n.first(r, function(e) {
              return !!e.allBasenames
            });
          u && (a.allBasenames = u.allBasenames);
          var c = r.reduce(function(e, t) {
            return t.allPaths ? e.concat(t.allPaths) : e
          }, []);
          return c.length && (a.allPaths = c), a
        }
        var f = function(e, t, n) {
            function o(n) {
              if (n && n.length) {
                t || (t = i.basename(e));
                var r = t.substr(0, t.length - i.extname(e).length);
                return {
                  siblings: n,
                  name: r
                }
              }
            }

            function a() {
              if (!c) {
                c = !0;
                var e = n();
                u = s.TPromise.is(e) ? e.then(o) : o(e)
              }
              return u
            }
            for (var u, c = !n, l = 0, f = r.length; l < f; l++) {
              var h = r[l](e, t, a);
              if (h) return h
            }
            return null
          },
          h = n.first(r, function(e) {
            return !!e.allBasenames
          });
        h && (f.allBasenames = h.allBasenames);
        var p = r.reduce(function(e, t) {
          return t.allPaths ? e.concat(t.allPaths) : e
        }, []);
        p.length && (f.allPaths = p);
        return f
      }(e, t)
    }

    function v(e) {
      var t = e;
      return t && "string" == typeof t.base && "string" == typeof t.pattern && "function" == typeof t.pathToRelative
    }

    function m(e, t) {
      var n = e.filter(function(e) {
        return !!e.basenames
      });
      if (n.length < 2) return e;
      var r, i = n.reduce(function(e, t) {
        return e.concat(t.basenames)
      }, []);
      if (t) {
        r = [];
        for (var o = 0, s = i.length; o < s; o++) r.push(t)
      } else r = n.reduce(function(e, t) {
        return e.concat(t.patterns)
      }, []);
      var a = function(e, t) {
        if (!e) return null;
        if (!t) {
          var n = void 0;
          for (n = e.length; n > 0; n--) {
            var o = e.charCodeAt(n - 1);
            if (47 === o || 92 === o) break
          }
          t = e.substr(n)
        }
        var s = i.indexOf(t);
        return -1 !== s ? r[s] : null
      };
      a.basenames = i, a.patterns = r, a.allBasenames = i;
      var u = e.filter(function(e) {
        return !e.basenames
      });
      return u.push(a), u
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.getEmptyExpression = function() {
      return Object.create(null)
    };
    var g = "**",
      y = "/",
      _ = "[/\\\\]",
      b = "[^/\\\\]",
      w = /\//g;
    t.splitGlobAware = u;
    var P = /^\*\*\/\*\.[\w\.-]+$/,
      C = /^\*\*\/([\w\.-]+)\/?$/,
      E = /^{\*\*\/[\*\.]?[\w\.-]+\/?(,\*\*\/[\*\.]?[\w\.-]+\/?)*}$/,
      x = /^{\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?(,\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?)*}$/,
      S = /^\*\*((\/[\w\.-]+)+)\/?$/,
      k = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/,
      T = new o.LRUCache(1e4),
      A = function() {
        return !1
      },
      O = function() {
        return null
      };
    t.match = function(e, t, n) {
      return !(!e || !t) && d(e)(t, void 0, n)
    }, t.parse = d, t.isRelativePattern = v, t.parseToAsync = function(e, t) {
      var n = d(e, t);
      return function(e, t, r) {
        var i = n(e, t, r);
        return i instanceof s.TPromise ? i : s.TPromise.as(i)
      }
    }, t.getBasenameTerms = function(e) {
      return e.allBasenames || []
    }, t.getPathTerms = function(e) {
      return e.allPaths || []
    }
  }), define(e[44], t([0, 1, 8]), function(e, t, n) {
    "use strict";

    function r(e) {
      var t, n = [];
      try {
        var r = JSON.parse(e.arguments),
          i = r[r.length - 1];
        i && i.__$stack && (r.pop(), t = i.__$stack), n.push.apply(n, r)
      } catch (t) {
        n.push("Unable to log remote console arguments", e.arguments)
      }
      return {
        args: n,
        stack: t
      }
    }

    function i(e) {
      if ("string" != typeof e) return i(r(e).stack);
      var t = e;
      if (t) {
        var o = t.split("\n")[0],
          s = /at [^\/]*((?:(?:[a-zA-Z]+:)|(?:[\/])|(?:\\\\))(?:.+)):(\d+):(\d+)/.exec(o);
        if (s && 4 === s.length) return {
          uri: n.default.file(s[1]),
          line: Number(s[2]),
          column: Number(s[3])
        }
      }
    }

    function o(e) {
      return "color: " + e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isRemoteConsoleLog = function(e) {
      var t = e;
      return t && "string" == typeof t.type && "string" == typeof t.severity
    }, t.parse = r, t.getFirstFrame = i, t.log = function(e, t) {
      var n = r(e),
        i = n.args,
        s = n.stack,
        a = "string" == typeof i[0] && 1 === i.length,
        u = s && s.split("\n")[0];
      u && (u = "(" + u.trim() + ")");
      var c = [];
      c = "string" == typeof i[0] ? u && a ? ["%c[" + t + "] %c" + i[0] + " %c" + u, o("blue"), o("black"), o("grey")] : ["%c[" + t + "] %c" + i[0], o("blue"), o("black")].concat(i.slice(1)) : ["%c[" + t + "]%", o("blue")].concat(i), u && !a && c.push(u), console[e.severity].apply(console, c)
    }
  }), define(e[27], t([0, 1, 25]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = function() {
      function e(e) {
        void 0 === e && (e = "utf8"), this.stringDecoder = new n.StringDecoder(e), this.remaining = null
      }
      return e.prototype.write = function(e) {
        var t = [],
          n = this.remaining ? this.remaining + this.stringDecoder.write(e) : this.stringDecoder.write(e);
        if (n.length < 1) return t;
        for (var r, i = 0, o = i; o < n.length;)
          if (13 === (r = n.charCodeAt(o)) || 10 === r) {
            if (t.push(n.substring(i, o)), ++o < n.length) {
              var s = r;
              r = n.charCodeAt(o),
                (13 === s && 10 === r || 10 === s && 13 === r) && o++
            }
            i = o
          } else o++;
        return this.remaining = i < n.length ? n.substr(i) : null, t
      }, e.prototype.end = function() {
        return this.remaining
      }, e
    }();
    t.LineDecoder = r
  }), define(e[24], t([0, 1, 59]), function(e, t, n) {
    "use strict";

    function r(e, t, i) {
      if (n.ok(e, "Missing first parameter"), n.ok("function" == typeof t, "Second parameter must be a function that is called for each element"), n.ok("function" == typeof i, "Third parameter must be a function that is called on error and success"), "function" == typeof e) try {
        e(function(e, n) {
          e ? i(e, null) : r(n, t, i)
        })
      } catch (e) {
        i(e, null)
      } else {
        var o = [],
          s = function(n) {
            if (n < e.length) try {
              t(e[n], function(e, t) {
                !0 !== e && !1 !== e || (t = e, e = null), e ? i(e, null) : (t && o.push(t), process.nextTick(function() {
                  s(n + 1)
                }))
              }, n, e.length)
            } catch (e) {
              i(e, null)
            } else i(null, o)
          };
        s(0)
      }
    }

    function i(e) {
      ! function(e) {
        n.ok(e.length > 1, "Need at least one error handler and one function to process sequence"), e.forEach(function(e) {
          n.ok("function" == typeof e)
        });
        var t = e.splice(0, 1)[0],
          i = null;
        r(e, function(e, t) {
          var n = function(e, n) {
            !0 !== e && !1 !== e || (n = e, e = null), e ? t(e, null) : (i = n, t(null, null))
          };
          try {
            e.call(n, i)
          } catch (e) {
            t(e, null)
          }
        }, function(e, n) {
          e && t(e)
        })
      }(Array.isArray(e) ? e : Array.prototype.slice.call(arguments))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.parallel = function(e, t, n) {
      var r = new Array(e.length),
        i = new Array(e.length),
        o = !1,
        s = 0;
      if (0 === e.length) return n(null, []);
      e.forEach(function(a, u) {
        t(a, function(t, a) {
          if (t ? (o = !0, r[u] = null, i[u] = t) : (r[u] = a, i[u] = null), ++s === e.length) return n(o ? i : null, r)
        })
      })
    }, t.loop = r, t.sequence = i
  }), define(e[21], t([0, 1, 31, 3, 4, 24, 16, 7, 2, 22]), function(e, t, n, r, i, o, s, a, u, c) {
    "use strict";

    function l(e) {
      return i.isMacintosh ? s.readdirSync(e).map(function(e) {
        return r.normalizeNFC(e)
      }) : s.readdirSync(e)
    }

    function f(e, t) {
      return i.isMacintosh ? s.readdir(e, function(e, n) {
        return e ? t(e, null) : t(null, n.map(function(e) {
          return r.normalizeNFC(e)
        }))
      }) : s.readdir(e, t)
    }

    function h(e, t, n, r) {
      r || (r = Object.create(null)), s.stat(e, function(i, o) {
        if (i) return n(i);
        if (!o.isDirectory()) return function(e, t, n, r) {
          var i = !1,
            o = s.createReadStream(e),
            a = s.createWriteStream(t, {
              mode: n
            }),
            u = function(e) {
              i || (i = !0, r(e))
            };
          o.on("error", u), a.on("error", u), o.on("end", function() {
            a.end(function() {
              i || (i = !0, s.chmod(t, n, r))
            })
          }), o.pipe(a, {
            end: !1
          })
        }(e, t, 511 & o.mode, n);
        if (r[e]) return n(null);
        r[e] = !0;
        var u = function() {
          f(e, function(i, o) {
            _(o, function(n, i) {
              h(a.join(e, n), a.join(t, n), function(e) {
                return i(e, void 0)
              }, r)
            }, n)
          })
        };
        p(t, 511 & o.mode).done(u, u)
      })
    }

    function p(e, t) {
      var n = function() {
        return c.nfcall(s.mkdir, e, t).then(null, function(t) {
          return "EEXIST" === t.code ? c.nfcall(s.stat, e).then(function(t) {
            return t.isDirectory ? null : u.TPromise.wrapError(new Error("'" + e + "' exists and is not a directory."))
          }) : u.TPromise.wrapError(t)
        })
      };
      return e === a.dirname(e) ? u.TPromise.as(!0) : n().then(null, function(r) {
        return "ENOENT" === r.code ? p(a.dirname(e), t).then(n) : u.TPromise.wrapError(r)
      })
    }

    function d(e, t) {
      if ("\\" === e || "/" === e) return t(new Error("Will not delete root!"));
      s.exists(e, function(n) {
        n ? s.lstat(e, function(n, r) {
          if (n || !r) t(n);
          else if (!r.isDirectory() || r.isSymbolicLink()) {
            var i = r.mode;
            128 & i ? s.unlink(e, t) : s.chmod(e, 128 | i, function(n) {
              n ? t(n) : s.unlink(e, t)
            })
          } else f(e, function(n, r) {
            if (n || !r) t(n);
            else if (0 === r.length) s.rmdir(e, t);
            else {
              var i = null,
                o = r.length;
              r.forEach(function(n) {
                d(a.join(e, n), function(n) {
                  o--, n && (i = i || n), 0 === o && (i ? t(i) : s.rmdir(e, t))
                })
              })
            }
          })
        }) : t(null)
      })
    }

    function v(e) {
      try {
        var t = s.lstatSync(e);
        t.isDirectory() && !t.isSymbolicLink() ? (l(e).forEach(function(t) {
          return v(a.join(e, t))
        }), s.rmdirSync(e)) : s.unlinkSync(e)
      } catch (e) {
        if ("ENOENT" === e.code) return;
        throw e
      }
    }

    function m(e) {
      if (!e) return {
        mode: 438,
        flag: "w"
      };
      var t = {
        mode: e.mode,
        flag: e.flag
      };
      return "number" != typeof t.mode && (t.mode = 438), "string" != typeof t.flag && (t.flag = "w"), t
    }

    function g(e) {
      var t = a.dirname(e);
      if (e === t) return e;
      var n = (a.basename(e) || e).toLowerCase();
      try {
        var r = l(t).filter(function(e) {
          return e.toLowerCase() === n
        });
        if (1 === r.length) {
          if (o = g(t)) return a.join(o, r[0])
        } else if (r.length > 1) {
          var i = r.indexOf(n);
          if (i >= 0) {
            var o = g(t);
            if (o) return a.join(o, r[i])
          }
        }
      } catch (e) {}
      return null
    }

    function y(e) {
      return r.rtrim(a.normalize(e), a.sep)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var _ = o.loop;
    t.readdirSync = l, t.readdir = f, t.copy = h, t.mkdirp = p, t.del = function(e, t, i, o) {
      s.exists(e, function(u) {
        if (!u) return i(null);
        s.stat(e, function(u, c) {
          if (u || !c) return i(u);
          if ("." === e[e.length - 1] || r.endsWith(e, "./") || r.endsWith(e, ".\\")) return d(e, i);
          var l = a.join(t, n.generateUuid());
          s.rename(e, l, function(t) {
            if (t) return d(e, i);
            i(null), d(l, function(e) {
              e && console.error(e), o && o(e)
            })
          })
        })
      })
    }, t.delSync = v, t.mv = function(e, t, n) {
      function i(e) {
        if (e) return n(e);
        s.stat(t, function(e, r) {
          return e ? n(e) : r.isDirectory() ? n(null) : void s.open(t, "a", null, function(e, t) {
            if (e) return n(e);
            s.futimes(t, r.atime, new Date, function(e) {
              if (e) return n(e);
              s.close(t, n)
            })
          })
        })
      }
      if (e === t) return n(null);
      s.rename(e, t, function(o) {
        return o ? o && e.toLowerCase() !== t.toLowerCase() && "EXDEV" === o.code || r.endsWith(e, ".") ? h(e, t, function(t) {
          if (t) return n(t);
          d(e, i)
        }) : n(o) : i(null)
      })
    };
    var b = !0;
    t.writeFileAndFlush = function(e, t, n, r) {
      if (n = m(n), !b) return s.writeFile(e, t, n, r);
      s.open(e, n.flag, n.mode, function(e, n) {
        if (e) return r(e);
        s.writeFile(n, t, function(e) {
          if (e) return s.close(n, function() {
            return r(e)
          });
          s.fdatasync(n, function(e) {
            return e && (console.warn("[node.js fs] fdatasync is now disabled for this session because it failed: ", e), b = !1), s.close(n, function(e) {
              return r(e)
            })
          })
        })
      })
    }, t.writeFileAndFlushSync = function(e, t, n) {
      if (n = m(n), !b) return s.writeFileSync(e, t, n);
      var r = s.openSync(e, n.flag, n.mode);
      try {
        s.writeFileSync(r, t);
        try {
          s.fdatasyncSync(r)
        } catch (e) {
          console.warn("[node.js fs] fdatasyncSync is now disabled for this session because it failed: ", e), b = !1
        }
      } finally {
        s.closeSync(r)
      }
    }, t.realcaseSync = g, t.realpathSync = function(e) {
      try {
        return s.realpathSync(e)
      } catch (n) {
        var t = y(e);
        return s.accessSync(t, s.constants.R_OK), t
      }
    }, t.realpath = function(e, t) {
      return s.realpath(e, function(n, r) {
        if (!n) return t(null, r);
        var i = y(e);
        return s.access(i, s.constants.R_OK, function(e) {
          return t(e, i)
        })
      })
    }, t.watch = function(e, t) {
      var n = s.watch(e);
      return n.on("change", function(e, n) {
        var o = null;
        n && (o = n.toString(), i.isMacintosh && (o = r.normalizeNFC(o))), t(e, o)
      }), n
    }
  }), define(e[32], t([0, 1, 7, 33, 57, 5, 8]), function(e, t, n, r, i, o, s) {
    "use strict";

    function a() {
      var e = "vscode-" + function(e) {
        for (var t = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], n = "", r = 0; r < e; r++) n += t[Math.floor(t.length * Math.random())];
        return n
      }(40);
      return "win32" === process.platform ? "\\\\.\\pipe\\" + e + "-sock" : n.join(r.tmpdir(), e + ".sock")
    }

    function u(t, n, r, u) {
      var c, l = !1,
        f = function(e) {
          l || (l = !0, u(e, null))
        },
        h = a(),
        p = a(),
        d = a(),
        v = function(e, t, n, r) {
          var i = {};
          for (var o in e) i[o] = e[o];
          return i.STDIN_PIPE_NAME = t, i.STDOUT_PIPE_NAME = n, i.STDERR_PIPE_NAME = r, i.ELECTRON_RUN_AS_NODE = "1", i.ELECTRON_NO_ASAR = "1", i
        }(r.env || process.env, h, p, d),
        m = i.createServer(function(e) {
          c.stderr = e
        });
      m.listen(d);
      var g = i.createServer(function(e) {
        e.once("data", function(t) {
          c.stdin = i.connect(h), c.stdout = e,
            function(e) {
              l || (l = !0, u(null, e))
            }(c)
        })
      });
      g.listen(p);
      var y = !1,
        _ = function() {
          y || (y = !0, process.removeListener("exit", _), g.close(), m.close())
        },
        b = s.default.parse(e.toUrl("./stdForkStart.js")).fsPath;
      (c = o.fork(b, [t].concat(n), {
        silent: !0,
        cwd: r.cwd,
        env: v,
        execArgv: r.execArgv
      })).once("error", function(e) {
        _(), f(e)
      }), c.once("exit", function(e) {
        _(), f(e)
      }), process.once("exit", _)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.fork = u
  }), define(e[36], t([0, 1, 16, 2]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.readExactlyByFile = function(e, t) {
      return new r.TPromise(function(r, i) {
        n.open(e, "r", null, function(e, o) {
          function s(e, t, s) {
            n.close(o, function(n) {
              return n ? i(n) : e && "EISDIR" === e.code ? i(e) : r({
                buffer: t,
                bytesRead: s
              })
            })
          }

          function a() {
            n.read(o, u, c, t - c, null, function(e, n) {
              return e ? s(e, null, 0) : 0 === n ? s(null, u, c) : (c += n) === t ? s(null, u, c) : a()
            })
          }
          if (e) return i(e);
          var u = new Buffer(t),
            c = 0;
          a()
        })
      })
    }, t.readToMatchingString = function(e, t, i, o) {
      return new r.TPromise(function(r, s) {
        return n.open(e, "r", null, function(a, u) {
          function c(e, t) {
            n.close(u, function(n) {
              return n ? s(n) : e && "EISDIR" === e.code ? s(e) : r(t)
            })
          }

          function l() {
            n.read(u, f, h, i, null, function(n, r) {
              if (n) return c(n, null);
              if (0 === r) return c(null, null);
              h += r;
              var i = f.indexOf(t);
              return i >= 0 ? c(null, f.toString("utf8").substr(0, i)) : h >= o ? c(new Error("Could not find " + t + " in first " + o + " bytes of " + e), null) : l()
            })
          }
          if (a) return s(a);
          var f = new Buffer(o),
            h = 0;
          l()
        })
      })
    }
  });
  i = this && this.__generator || function(e, t) {
    function n(n) {
      return function(s) {
        return function(n) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; a;) try {
            if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
            switch (i = 0, o && (n = [0, o.value]), n[0]) {
              case 0:
              case 1:
                o = n;
                break;
              case 4:
                return a.label++, {
                  value: n[1],
                  done: !1
                };
              case 5:
                a.label++, i = n[1], n = [0];
                continue;
              case 7:
                n = a.ops.pop(), a.trys.pop();
                continue;
              default:
                if (o = a.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                  a = 0;
                  continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                  a.label = n[1];
                  break
                }
                if (6 === n[0] && a.label < o[1]) {
                  a.label = o[1], o = n;
                  break
                }
                if (o && a.label < o[2]) {
                  a.label = o[2], a.ops.push(n);
                  break
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue
            }
            n = t.call(e, a)
          } catch (e) {
            n = [6, e], i = 0
          } finally {
            r = o = 0
          }
          if (5 & n[0]) throw n[1];
          return {
            value: n[0] ? n[1] : void 0,
            done: !0
          }
        }([n, s])
      }
    }
    var r, i, o, s, a = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return s = {
      next: n(0),
      throw: n(1),
      return: n(2)
    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
      return this
    }), s
  };
  define(e[37], t([0, 1, 36, 56, 2, 4, 5]), function(e, t, n, o, s, a, u) {
      "use strict";

      function c(e) {
        return e === t.UTF8_with_bom ? t.UTF8 : e
      }

      function l(e, n) {
        if (!e || n < 2) return null;
        var r = e.readUInt8(0),
          i = e.readUInt8(1);
        if (254 === r && 255 === i) return t.UTF16be;
        if (255 === r && 254 === i) return t.UTF16le;
        if (n < 3) return null;
        var o = e.readUInt8(2);
        return 239 === r && 187 === i && 191 === o ? t.UTF8 : null
      }

      function f(e) {
        var t = e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        return d[t] || t
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.UTF8 = "utf8", t.UTF8_with_bom = "utf8bom", t.UTF16be = "utf16be", t.UTF16le = "utf16le", t.bomLength = function(e) {
        switch (e) {
          case t.UTF8:
            return 3;
          case t.UTF16be:
          case t.UTF16le:
            return 2
        }
        return 0
      }, t.decode = function(e, t, n) {
        return o.decode(e, c(t), n)
      }, t.encode = function(e, t, n) {
        return o.encode(e, c(t), n)
      }, t.encodingExists = function(e) {
        return o.encodingExists(c(e))
      }, t.decodeStream = function(e) {
        return o.decodeStream(c(e))
      }, t.detectEncodingByBOMFromBuffer = l, t.detectEncodingByBOM = function(e) {
        return n.readExactlyByFile(e, 3).then(function(e) {
          return l(e.buffer, e.bytesRead)
        })
      };
      var h = .2,
        p = ["ascii", "utf-8", "utf-16", "utf-32"];
      t.guessEncodingByBuffer = function(t) {
        return r(this, void 0, s.TPromise, function() {
          var n, r, o;
          return i(this, function(i) {
            switch (i.label) {
              case 0:
                return [4, new Promise(function(t, n) {
                  e(["jschardet"], t, n)
                })];
              case 1:
                return n = i.sent(), n.Constants.MINIMUM_THRESHOLD = h, (r = n.detect(t)) && r.encoding ? (o = r.encoding.toLowerCase(), 0 <= p.indexOf(o) ? [2, null] : [2, f(r.encoding)]) : [2, null]
            }
          })
        })
      };
      var d = {
        ibm866: "cp866",
        big5: "cp950"
      };
      t.toCanonicalName = function(e) {
        switch (e) {
          case "shiftjis":
            return "shift-jis";
          case "utf16le":
            return "utf-16le";
          case "utf16be":
            return "utf-16be";
          case "big5hkscs":
            return "big5-hkscs";
          case "eucjp":
            return "euc-jp";
          case "euckr":
            return "euc-kr";
          case "koi8r":
            return "koi8-r";
          case "koi8u":
            return "koi8-u";
          case "macroman":
            return "x-mac-roman";
          case "utf8bom":
            return "utf8";
          default:
            var t = e.match(/windows(\d+)/);
            return t ? "windows-" + t[1] : e
        }
      };
      var v = {
        437: "cp437",
        850: "cp850",
        852: "cp852",
        855: "cp855",
        857: "cp857",
        860: "cp860",
        861: "cp861",
        863: "cp863",
        865: "cp865",
        866: "cp866",
        869: "cp869",
        936: "cp936",
        1252: "cp1252"
      };
      t.resolveTerminalEncoding = function(e) {
        var n, r = process.env.VSCODE_CLI_ENCODING;
        return r ? (e && console.log("Found VSCODE_CLI_ENCODING variable: " + r), n = s.TPromise.as(r)) : n = a.isLinux || a.isMacintosh ? new s.TPromise(function(t) {
          e && console.log('Running "locale charmap" to detect terminal encoding...'), u.exec("locale charmap", function(e, n, r) {
            return t(n)
          })
        }) : new s.TPromise(function(t) {
          e && console.log('Running "chcp" to detect terminal encoding...'), u.exec("chcp", function(e, n, r) {
            if (n)
              for (var i = Object.keys(v), o = 0; o < i.length; o++) {
                var s = i[o];
                if (n.indexOf(s) >= 0) return t(v[s])
              }
            return t(void 0)
          })
        }), n.then(function(n) {
          if (e && console.log("Detected raw terminal encoding: " + n), !n || "utf-8" === n.toLowerCase() || n.toLowerCase() === t.UTF8) return t.UTF8;
          var r = f(n);
          return o.encodingExists(r) ? r : (e && console.log("Unsupported terminal encoding, falling back to UTF-8."), t.UTF8)
        })
      }
    }), define(e[18], t([0, 1, 2, 15, 12]), function(e, t, n, r, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o;
      ! function(e) {
        e[e.RequestCommon = 0] = "RequestCommon", e[e.RequestCancel = 1] = "RequestCancel", e[e.ResponseInitialize = 2] = "ResponseInitialize", e[e.ResponseSuccess = 3] = "ResponseSuccess", e[e.ResponseProgress = 4] = "ResponseProgress", e[e.ResponseError = 5] = "ResponseError", e[e.ResponseErrorObj = 6] = "ResponseErrorObj"
      }(o || (o = {}));
      var s;
      ! function(e) {
        e[e.Uninitialized = 0] = "Uninitialized", e[e.Idle = 1] = "Idle"
      }(s || (s = {}));
      var a = function() {
        function e(e) {
          var t = this;
          this.protocol = e, this.channels = Object.create(null), this.activeRequests = Object.create(null), this.protocolListener = this.protocol.onMessage(function(e) {
            return t.onMessage(e)
          }), this.protocol.send({
            type: o.ResponseInitialize
          })
        }
        return e.prototype.registerChannel = function(e, t) {
          this.channels[e] = t
        }, e.prototype.onMessage = function(e) {
          switch (e.type) {
            case o.RequestCommon:
              this.onCommonRequest(e);
              break;
            case o.RequestCancel:
              this.onCancelRequest(e)
          }
        }, e.prototype.onCommonRequest = function(e) {
          var t, i = this,
            s = this.channels[e.channelName];
          try {
            t = s.call(e.name, e.arg)
          } catch (e) {
            t = n.TPromise.wrapError(e)
          }
          var a = e.id,
            u = t.then(function(t) {
              i.protocol.send({
                id: a,
                data: t,
                type: o.ResponseSuccess
              }), delete i.activeRequests[e.id]
            }, function(t) {
              t instanceof Error ? i.protocol.send({
                id: a,
                data: {
                  message: t.message,
                  name: t.name,
                  stack: t.stack ? t.stack.split("\n") : void 0
                },
                type: o.ResponseError
              }) : i.protocol.send({
                id: a,
                data: t,
                type: o.ResponseErrorObj
              }), delete i.activeRequests[e.id]
            }, function(e) {
              i.protocol.send({
                id: a,
                data: e,
                type: o.ResponseProgress
              })
            });
          this.activeRequests[e.id] = r.toDisposable(function() {
            return u.cancel()
          })
        }, e.prototype.onCancelRequest = function(e) {
          var t = this.activeRequests[e.id];
          t && (t.dispose(), delete this.activeRequests[e.id])
        }, e.prototype.dispose = function() {
          var e = this;
          this.protocolListener.dispose(), this.protocolListener = null, Object.keys(this.activeRequests).forEach(function(t) {
            e.activeRequests[t].dispose()
          }), this.activeRequests = null
        }, e
      }();
      t.ChannelServer = a;
      var u = function() {
        function e(e) {
          var t = this;
          this.protocol = e, this.state = s.Uninitialized, this.activeRequests = [], this.bufferedRequests = [], this.handlers = Object.create(null), this.lastRequestId = 0, this.protocolListener = this.protocol.onMessage(function(e) {
            return t.onMessage(e)
          })
        }
        return e.prototype.getChannel = function(e) {
            var t = this;
            return {
              call: function(n, r) {
                return t.request(e, n, r)
              }
            }
          }, e.prototype.request = function(e, t, n) {
            var r = this,
              i = {
                raw: {
                  id: this.lastRequestId++,
                  type: o.RequestCommon,
                  channelName: e,
                  name: t,
                  arg: n
                }
              },
              a = this.state === s.Uninitialized ? this.bufferRequest(i) : this.doRequest(i);
            return this.activeRequests.push(a), a.then(null, function(e) {
              return null
            }).done(function() {
              return r.activeRequests = r.activeRequests.filter(function(e) {
                return e !== a
              })
            }), a
          }, e.prototype.doRequest = function(e) {
            var t = this,
              r = e.raw.id;
            return new n.TPromise(function(n, i, s) {
              t.handlers[r] = function(e) {
                switch (e.type) {
                  case o.ResponseSuccess:
                    delete t.handlers[r], n(e.data);
                    break;
                  case o.ResponseError:
                    delete t.handlers[r];
                    var a = new Error(e.data.message);
                    a.stack = e.data.stack, a.name = e.data.name, i(a);
                    break;
                  case o.ResponseErrorObj:
                    delete t.handlers[r], i(e.data);
                    break;
                  case o.ResponseProgress:
                    s(e.data)
                }
              }, t.send(e.raw)
            }, function() {
              return t.send({
                id: r,
                type: o.RequestCancel
              })
            })
          }, e.prototype.bufferRequest = function(e) {
            var t = this,
              r = null;
            return new n.TPromise(function(n, i, o) {
              t.bufferedRequests.push(e), e.flush = function() {
                e.flush = null, r = t.doRequest(e).then(n, i, o)
              }
            }, function() {
              if (e.flush = null, t.state === s.Uninitialized) {
                var n = t.bufferedRequests.indexOf(e); - 1 !== n && t.bufferedRequests.splice(n, 1)
              } else r && (r.cancel(), r = null)
            })
          }, e.prototype.onMessage = function(e) {
            if (function(e) {
                return e >= o.ResponseInitialize
              }(e.type)) {
              if (this.state === s.Uninitialized && e.type === o.ResponseInitialize) return this.state = s.Idle, this.bufferedRequests.forEach(function(e) {
                return e.flush && e.flush()
              }), void(this.bufferedRequests = null);
              var t = this.handlers[e.id];
              t && t(e)
            }
          }, e.prototype.send = function(e) {
            try {
              this.protocol.send(e)
            } catch (e) {}
          },
          e.prototype.dispose = function() {
            this.protocolListener.dispose(), this.protocolListener = null, this.activeRequests.forEach(function(e) {
              return e.cancel()
            }), this.activeRequests = []
          }, e
      }();
      t.ChannelClient = u;
      var c = function() {
        function e(e) {
          var t = this;
          this.channels = Object.create(null), this.channelClients = Object.create(null), this.onClientAdded = new i.Emitter, e(function(e) {
            var n = e.protocol,
              r = e.onDidClientDisconnect;
            i.once(n.onMessage)(function(e) {
              var i = new a(n),
                o = new u(n);
              Object.keys(t.channels).forEach(function(e) {
                return i.registerChannel(e, t.channels[e])
              }), t.channelClients[e] = o, t.onClientAdded.fire(e), r(function() {
                i.dispose(), o.dispose(), delete t.channelClients[e]
              })
            })
          })
        }
        return e.prototype.getChannel = function(e, t) {
          var r = this;
          return {
            call: function(i, o) {
              var s = t.route(i, o);
              return s ? r.getClient(s).then(function(t) {
                return t.getChannel(e).call(i, o)
              }) : n.TPromise.wrapError(new Error("Client id should be provided"))
            }
          }
        }, e.prototype.registerChannel = function(e, t) {
          this.channels[e] = t
        }, e.prototype.getClient = function(e) {
          var t = this,
            r = this.channelClients[e];
          return r ? n.TPromise.as(r) : new n.TPromise(function(n) {
            i.once(i.filterEvent(t.onClientAdded.event, function(t) {
              return t === e
            }))(function() {
              return n(t.channelClients[e])
            })
          })
        }, e.prototype.dispose = function() {
          this.channels = Object.create(null), this.channelClients = Object.create(null), this.onClientAdded.dispose()
        }, e
      }();
      t.IPCServer = c;
      var l = function() {
        function e(e, t) {
          e.send(t), this.channelClient = new u(e), this.channelServer = new a(e)
        }
        return e.prototype.getChannel = function(e) {
          return this.channelClient.getChannel(e)
        }, e.prototype.registerChannel = function(e, t) {
          this.channelServer.registerChannel(e, t)
        }, e.prototype.dispose = function() {
          this.channelClient.dispose(), this.channelClient = null, this.channelServer.dispose(), this.channelServer = null
        }, e
      }();
      t.IPCClient = l, t.getDelayedChannel = function(e) {
        return {
          call: function(t, n) {
            return e.then(function(e) {
              return e.call(t, n)
            })
          }
        }
      }, t.getNextTickChannel = function(e) {
        var t = !1;
        return {
          call: function(r, i) {
            return t ? e.call(r, i) : n.TPromise.timeout(0).then(function() {
              return t = !0
            }).then(function() {
              return e.call(r, i)
            })
          }
        }
      }, t.eventToCall = function(e, t) {
        void 0 === t && (t = function(e) {
          return e
        });
        var r;
        return new n.TPromise(function(n, i, o) {
          return r = e(function(e) {
            return o(t(e))
          })
        }, function() {
          return r.dispose()
        })
      }, t.eventFromCall = function(e, t, n, r) {
        void 0 === n && (n = null), void 0 === r && (r = function(e) {
          return e
        });
        var o, s = new i.Emitter({
          onFirstListenerAdd: function() {
            o = e.call(t, n).then(null, function(e) {
              return null
            }, function(e) {
              return s.fire(r(e))
            })
          },
          onLastListenerRemove: function() {
            o.cancel(), o = null
          }
        });
        return s.event
      }
    }), define(e[40], t([0, 1, 35, 39, 6, 4, 3]), function(e, t, n, r, i, o, s) {
      "use strict";

      function a(e, t, n, i) {
        if (!e || !t) return h;
        var o = e.length,
          s = t.length;
        if (o < s) return h;
        var a = e.toLowerCase();
        if (!i) {
          if (-1 === a.indexOf(n)) return h
        }
        return function(e, t, n, i, o, s) {
          for (var a = [], u = [], c = 0; c < n; c++)
            for (var l = 0; l < s; l++) {
              var h = c * s + l,
                p = (c - 1) * s + l - 1,
                d = l > 0 ? a[h - 1] : 0,
                v = c > 0 && l > 0 ? a[p] : 0,
                m = c > 0 && l > 0 ? u[p] : 0,
                g = void 0;
              (g = !v && c > 0 ? 0 : function(e, t, n, i, o, s, a) {
                var u = 0;
                if (t[n] !== o[s]) return u;
                u += 1, a > 0 && (u += 5 * a);
                e[n] === i[s] && (u += 1);
                if (0 === s) u += 8;
                else {
                  var c = function(e) {
                    switch (e) {
                      case 47:
                      case 92:
                        return 5;
                      case 95:
                      case 45:
                      case 46:
                      case 32:
                      case 39:
                      case 34:
                      case 58:
                        return 4;
                      default:
                        return 0
                    }
                  }(i.charCodeAt(s - 1));
                  c ? u += c : r.isUpper(i.charCodeAt(s)) && (u += 1)
                }
                return u
              }(e, t, c, i, o, l, m)) && v + g >= d ? (u[h] = m + 1, a[h] = v + g) : (u[h] = f, a[h] = d)
            }
          var y = [],
            _ = n - 1,
            b = s - 1;
          for (; _ >= 0 && b >= 0;) {
            u[h = _ * s + b] === f ? b-- : (y.push(b), _--, b--)
          }
          return [a[n * s - 1], y.reverse()]
        }(t, n, s, e, a, o)
      }

      function u(e, t, n, o, s) {
        if (!e || !t.value) return p;
        var u = o.getItemLabel(e);
        if (!u) return p;
        var c, l = o.getItemDescription(e),
          f = s[c = l ? "" + u + l + t.value + n : "" + u + t.value + n];
        if (f) return f;
        var h = function(e, t, n, o, s) {
          if (n && i.isEqual(o.value, n, !0)) return {
            score: d,
            labelMatch: [{
              start: 0,
              end: e.length
            }],
            descriptionMatch: t ? [{
              start: 0,
              end: t.length
            }] : void 0
          };
          if (!n || !o.containsPathSeparator) {
            var u = r.matchesPrefix(o.value, e);
            if (u) return {
              score: v,
              labelMatch: u
            };
            var c = r.matchesCamelCase(o.value, e);
            if (c) return {
              score: m,
              labelMatch: c
            };
            var l = a(e, o.value, o.lowercase, s),
              f = l[0],
              h = l[1];
            if (f) return {
              score: f + g,
              labelMatch: r.createMatches(h)
            }
          }
          if (t) {
            var y = t;
            n && (y = "" + t + i.nativeSep);
            var _ = y.length,
              b = a("" + y + e, o.value, o.lowercase, s),
              w = b[0],
              P = b[1];
            if (w) {
              var C = [],
                E = [];
              return r.createMatches(P).forEach(function(e) {
                e.start < _ && e.end > _ ? (C.push({
                  start: 0,
                  end: e.end - _
                }), E.push({
                  start: e.start,
                  end: _
                })) : e.start >= _ ? C.push({
                  start: e.start - _,
                  end: e.end - _
                }) : E.push(e)
              }), {
                score: w,
                labelMatch: C,
                descriptionMatch: E
              }
            }
          }
          return p
        }(u, l, o.getItemPath(e), t, n);
        return s[c] = h, h
      }

      function c(e, t, n) {
        var r = t.labelMatch && t.labelMatch.length,
          i = t.descriptionMatch && t.descriptionMatch.length,
          o = -1,
          s = -1;
        if (i ? o = t.descriptionMatch[0].start : r && (o = t.labelMatch[0].start), r) {
          if (s = t.labelMatch[t.labelMatch.length - 1].end, i) {
            var a = n.getItemDescription(e);
            a && (s += a.length)
          }
        } else i && (s = t.descriptionMatch[t.descriptionMatch.length - 1].end);
        return s - o
      }

      function l(e, t, r, i) {
        var o = i.getItemLabel(e),
          s = i.getItemLabel(t),
          a = i.getItemDescription(e),
          u = i.getItemDescription(t),
          c = o.length + (a ? a.length : 0),
          l = s.length + (u ? u.length : 0);
        if (c !== l) return c - l;
        var f = i.getItemPath(e),
          h = i.getItemPath(t);
        return f && h && f.length !== h.length ? f.length - h.length : o !== s ? n.compareAnything(o, s, r.value) : a && u && a !== u ? n.compareAnything(a, u, r.value) : f && h && f !== h ? n.compareAnything(f, h, r.value) : 0
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var f = 0,
        h = [f, []];
      t.score = a;
      var p = Object.freeze({
          score: 0
        }),
        d = 1 << 18,
        v = 1 << 17,
        m = 65536,
        g = 32768;
      t.prepareQuery = function(e) {
        var t, n;
        return e && (e = s.stripWildcards(e).replace(/\s/g, ""), o.isWindows && (e = e.replace(/\//g, "\\")), t = e.toLowerCase(), n = e.indexOf(i.nativeSep) >= 0), {
          value: e,
          lowercase: t,
          containsPathSeparator: n
        }
      }, t.scoreItem = u, t.compareItemsByScore = function(e, t, n, r, i, o, s) {
        void 0 === s && (s = l);
        var a = u(e, n, r, i, o),
          f = u(t, n, r, i, o),
          h = a.score,
          p = f.score;
        if ((h === d || p === d) && h !== p) return h === d ? -1 : 1;
        if (h === v || p === v) {
          if (h !== p) return h === v ? -1 : 1;
          var y = i.getItemLabel(e),
            _ = i.getItemLabel(t);
          if (y.length !== _.length) return y.length - _.length
        }
        if (h === m || p === m) {
          if (h !== p) return h === m ? -1 : 1;
          var y = i.getItemLabel(e),
            _ = i.getItemLabel(t),
            b = function(e, t) {
              if (!e && !t || !e.length && !t.length) return 0;
              if (!t || !t.length) return -1;
              if (!e || !e.length) return 1;
              var n = e[0].start,
                r = e[e.length - 1].end - n,
                i = t[0].start,
                o = t[t.length - 1].end - i;
              return r === o ? 0 : o < r ? 1 : -1
            }(a.labelMatch, f.labelMatch);
          if (0 !== b) return b;
          if (y.length !== _.length) return y.length - _.length
        }
        if (h > g || p > g) {
          if (p < g) return -1;
          if (h < g) return 1
        }
        if (h !== p) return h > p ? -1 : 1;
        var w = c(e, a, i),
          P = c(t, f, i);
        return w && P && w !== P ? P > w ? -1 : 1 : s(e, t, n, i)
      }, t.fallbackCompare = l
    }), define(e[41], t([42, 43]), function(e, t) {
      return e.create("vs/base/common/errorMessage", t)
    }), define(e[26], t([0, 1, 41, 10, 11]), function(e, t, n, r, i) {
      "use strict";

      function o(e, t) {
        return e.message ? t && (e.stack || e.stacktrace) ? n.localize(0, null, s(e), e.stack || e.stacktrace) : s(e) : n.localize(1, null)
      }

      function s(e) {
        return "string" == typeof e.code && "number" == typeof e.errno && "string" == typeof e.syscall ? n.localize(2, null, e.message) : e.message
      }

      function a(e, t) {
        if (void 0 === e && (e = null), void 0 === t && (t = !1), !e) return n.localize(3, null);
        if (Array.isArray(e)) {
          var s = i.coalesce(e),
            u = a(s[0], t);
          return s.length > 1 ? n.localize(4, null, u, s.length) : u
        }
        if (r.isString(e)) return e;
        if (e.detail) {
          var c = e.detail;
          if (c.error) return o(c.error, t);
          if (c.exception) return o(c.exception, t)
        }
        return e.stack ? o(e, t) : e.message ? e.message : n.localize(5, null)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.toErrorMessage = a
    }), define(e[45], t([42, 43]), function(e, t) {
      return e.create("vs/base/node/processes", t)
    }), define(e[46], t([0, 1, 7, 5, 32, 45, 2, 10, 8, 9, 6, 4, 27, 47]), function(e, t, r, i, o, s, a, u, c, l, f, h, p, d) {
      "use strict";

      function v(t, n) {
        if (h.isWindows) try {
          var r = {
            stdio: ["pipe", "pipe", "ignore"]
          };
          n && (r.cwd = n), i.execFileSync("taskkill", ["/T", "/F", "/PID", t.pid.toString()], r)
        } catch (e) {
          return {
            success: !1,
            error: e,
            code: e.status ? function(e) {
              switch (e) {
                case 0:
                  return d.TerminateResponseCode.Success;
                case 1:
                  return d.TerminateResponseCode.AccessDenied;
                case 128:
                  return d.TerminateResponseCode.ProcessNotFound;
                default:
                  return d.TerminateResponseCode.Unknown
              }
            }(e.status) : d.TerminateResponseCode.Unknown
          }
        } else if (h.isLinux || h.isMacintosh) try {
          var o = c.default.parse(e.toUrl("vs/base/node/terminateProcess.sh")).fsPath,
            s = i.spawnSync(o, [t.pid.toString()]);
          if (s.error) return {
            success: !1,
            error: s.error
          }
        } catch (e) {
          return {
            success: !1,
            error: e
          }
        } else t.kill("SIGKILL");
        return {
          success: !0
        }
      }

      function m() {
        return process.env.comspec || "cmd.exe"
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var g = i.exec,
        y = i.spawn;
      t.Source = d.Source, t.TerminateResponseCode = d.TerminateResponseCode, t.terminateProcess = v, t.getWindowsShell = m;
      var _ = function() {
        function e(e, t, n, r) {
          var i = this;
          if (r) this.cmd = e, this.args = t, this.shell = n, this.options = r;
          else if (n && t) this.module = e, this.args = t, this.shell = !1, this.options = n;
          else {
            var o = e;
            this.cmd = o.command, this.shell = o.isShellCommand, this.args = o.args.slice(0), this.options = o.options || {}
          }
          if (this.childProcess = null, this.terminateRequested = !1, this.options.env) {
            var s = Object.create(null);
            Object.keys(process.env).forEach(function(e) {
              s[e] = process.env[e]
            }), Object.keys(this.options.env).forEach(function(e) {
              s[e] = i.options.env[e]
            }), this.options.env = s
          }
        }
        return e.prototype.getSanitizedCommand = function() {
          var t = this.cmd.toLowerCase(),
            n = t.lastIndexOf(r.sep);
          return -1 !== n && (t = t.substring(n + 1)), e.WellKnowCommands[t] ? t : "other"
        }, e.prototype.start = function() {
          var e = this;
          return h.isWindows && (this.options && this.options.cwd && f.isUNC(this.options.cwd) || !this.options && !this.options.cwd && f.isUNC(process.cwd())) ? a.TPromise.wrapError(new Error(s.localize(0, null))) : this.useExec().then(function(t) {
            var n, r, i, s = new a.PPromise(function(e, t, o) {
              n = e, r = t, i = o
            });
            if (t) {
              var c = e.cmd;
              e.args && (c = c + " " + e.args.join(" ")), e.childProcess = g(c, e.options, function(t, o, s) {
                e.childProcess = null;
                var a = t;
                a && a.killed ? r({
                  killed: e.terminateRequested,
                  stdout: o.toString(),
                  stderr: s.toString()
                }) : e.handleExec(n, i, t, o, s)
              })
            } else {
              var f = null,
                p = function(t) {
                  e.childProcess = null, e.childProcessPromise = null, e.handleClose(t, n, i, r);
                  var o = {
                    terminated: e.terminateRequested
                  };
                  u.isNumber(t) && (o.cmdCode = t), n(o)
                };
              if (e.shell && h.isWindows) {
                var d = l.deepClone(e.options);
                d.windowsVerbatimArguments = !0, d.detached = !1;
                var v = !1,
                  _ = !1,
                  b = [],
                  w = e.ensureQuotes(e.cmd);
                b.push(w.value), v = w.quoted, e.args && e.args.forEach(function(t) {
                  w = e.ensureQuotes(t), b.push(w.value), _ = _ && w.quoted
                });
                var P = ["/s", "/c"];
                v ? _ ? P.push('"' + b.join(" ") + '"') : b.length > 1 ? P.push('"' + b[0] + '" ' + b.slice(1).join(" ")) : P.push('"' + b[0] + '"') : P.push(b.join(" ")), f = y(m(), P, d)
              } else e.cmd ? f = y(e.cmd, e.args, e.options) : e.module && (e.childProcessPromise = new a.TPromise(function(t, s, a) {
                o.fork(e.module, e.args, e.options, function(o, a) {
                  if (o) return s(o), void r({
                    terminated: e.terminateRequested,
                    error: o
                  });
                  e.childProcess = a, e.childProcess.on("close", p), e.handleSpawn(a, n, i, r, !1), t(a)
                })
              }));
              f && (e.childProcess = f, e.childProcessPromise = a.TPromise.as(f), f.on("error", function(t) {
                e.childProcess = null, r({
                  terminated: e.terminateRequested,
                  error: t
                })
              }), f.pid && (e.childProcess.on("close", p), e.handleSpawn(f, n, i, r, !0)))
            }
            return s
          })
        }, e.prototype.handleClose = function(e, t, n, r) {}, e.prototype.ensureQuotes = function(t) {
          return e.regexp.test(t) ? {
            value: '"' + t + '"',
            quoted: !0
          } : {
            value: t,
            quoted: t.length > 0 && '"' === t[0] && '"' === t[t.length - 1]
          }
        }, Object.defineProperty(e.prototype, "pid", {
          get: function() {
            return this.childProcessPromise.then(function(e) {
              return e.pid
            }, function(e) {
              return -1
            })
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.terminate = function() {
          var e = this;
          return this.childProcessPromise ? this.childProcessPromise.then(function(t) {
            e.terminateRequested = !0;
            var n = v(t, e.options.cwd);
            return n.success && (e.childProcess = null), n
          }, function(e) {
            return {
              success: !0
            }
          }) : a.TPromise.as({
            success: !0
          })
        }, e.prototype.useExec = function() {
          var e = this;
          return new a.TPromise(function(t, n, r) {
            e.shell && h.isWindows || t(!1);
            var i = y(m(), ["/s", "/c"]);
            i.on("error", function(e) {
              t(!0)
            }), i.on("exit", function(e) {
              t(!1)
            })
          })
        }, e.WellKnowCommands = {
          ant: !0,
          cmake: !0,
          eslint: !0,
          gradle: !0,
          grunt: !0,
          gulp: !0,
          jake: !0,
          jenkins: !0,
          jshint: !0,
          make: !0,
          maven: !0,
          msbuild: !0,
          msc: !0,
          nmake: !0,
          npm: !0,
          rake: !0,
          tsc: !0,
          xbuild: !0
        }, e.regexp = /^[^"].* .*[^"]/, e
      }();
      t.AbstractProcess = _;
      var b = function(e) {
        function t(t, n, r, i) {
          return e.call(this, t, n, r, i) || this
        }
        return n(t, e),
          t.prototype.handleExec = function(e, t, n, r, i) {
            [r, i].forEach(function(e, n) {
              var r = new p.LineDecoder;
              r.write(e).forEach(function(e) {
                t({
                  line: e,
                  source: 0 === n ? d.Source.stdout : d.Source.stderr
                })
              });
              var i = r.end();
              i && t({
                line: i,
                source: 0 === n ? d.Source.stdout : d.Source.stderr
              })
            }), e({
              terminated: this.terminateRequested,
              error: n
            })
          }, t.prototype.handleSpawn = function(e, t, n, r, i) {
            var o = this;
            this.stdoutLineDecoder = new p.LineDecoder, this.stderrLineDecoder = new p.LineDecoder, e.stdout.on("data", function(e) {
              o.stdoutLineDecoder.write(e).forEach(function(e) {
                return n({
                  line: e,
                  source: d.Source.stdout
                })
              })
            }), e.stderr.on("data", function(e) {
              o.stderrLineDecoder.write(e).forEach(function(e) {
                return n({
                  line: e,
                  source: d.Source.stderr
                })
              })
            })
          }, t.prototype.handleClose = function(e, t, n, r) {
            [this.stdoutLineDecoder.end(), this.stderrLineDecoder.end()].forEach(function(e, t) {
              e && n({
                line: e,
                source: 0 === t ? d.Source.stdout : d.Source.stderr
              })
            })
          }, t
      }(_);
      t.LineProcess = b, t.createQueuedSender = function(e) {
        var t = [],
          n = !1,
          r = function(i) {
            n ? t.push(i) : e.send(i, function(e) {
              if (e && console.error(e), n = !1, t.length > 0) {
                var i = t.slice(0);
                t = [], i.forEach(function(e) {
                  return r(e)
                })
              }
            }) && !h.isWindows || (n = !0)
          };
        return {
          send: r
        }
      }
    }), define(e[19], t([0, 1, 5, 2, 22, 9, 12, 46, 18, 44]), function(e, t, r, i, o, s, a, u, c, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var f = function(e) {
        function t() {
          var t = e.call(this, {
            send: function(e) {
              try {
                process.send(e)
              } catch (e) {}
            },
            onMessage: a.fromNodeEventEmitter(process, "message", function(e) {
              return e
            })
          }) || this;
          return process.once("disconnect", function() {
            return t.dispose()
          }), t
        }
        return n(t, e), t
      }(c.ChannelServer);
      t.Server = f;
      var h = function() {
        function e(e, t) {
          this.modulePath = e, this.options = t;
          var n = t && t.timeout ? t.timeout : 6e4;
          this.disposeDelayer = new o.Delayer(n), this.activeRequests = [], this.child = null, this._client = null, this.channels = Object.create(null)
        }
        return e.prototype.getChannel = function(e) {
          var t = this;
          return {
            call: function(n, r) {
              return t.request(e, n, r)
            }
          }
        }, e.prototype.request = function(e, t, n) {
          var r = this;
          if (!this.disposeDelayer) return i.TPromise.wrapError(new Error("disposed"));
          this.disposeDelayer.cancel();
          var o = (this.channels[e] || (this.channels[e] = this.client.getChannel(e))).call(t, n),
            s = new i.TPromise(function(e, t, n) {
              o.then(e, t, n).done(function() {
                r.activeRequests && (r.activeRequests.splice(r.activeRequests.indexOf(s), 1), 0 === r.activeRequests.length && r.disposeDelayer.trigger(function() {
                  return r.disposeClient()
                }))
              })
            }, function() {
              return o.cancel()
            });
          return this.activeRequests.push(s), s
        }, Object.defineProperty(e.prototype, "client", {
          get: function() {
            var e = this;
            if (!this._client) {
              var t = this.options && this.options.args ? this.options.args : [],
                n = Object.create(null);
              n.env = s.assign(s.deepClone(process.env), {
                  VSCODE_PARENT_PID: String(process.pid)
                }), this.options && this.options.env && (n.env = s.assign(n.env, this.options.env)), this.options && this.options.freshExecArgv && (n.execArgv = []), this.options && "number" == typeof this.options.debug && (n.execArgv = ["--nolazy", "--inspect=" + this.options.debug]), this.options && "number" == typeof this.options.debugBrk && (n.execArgv = ["--nolazy", "--inspect-brk=" + this.options.debugBrk]),
                this.child = r.fork(this.modulePath, t, n);
              var i = new a.Emitter;
              a.fromNodeEventEmitter(this.child, "message", function(e) {
                return e
              })(function(t) {
                if (l.isRemoteConsoleLog(t)) return l.log(t, "IPC Library: " + e.options.serverName), null;
                i.fire(t)
              });
              var o = this.options.useQueue ? u.createQueuedSender(this.child) : this.child,
                f = {
                  send: function(t) {
                    return e.child && e.child.connected && o.send(t)
                  },
                  onMessage: i.event
                };
              this._client = new c.ChannelClient(f);
              var h = function() {
                return e.disposeClient()
              };
              process.once("exit", h), this.child.on("error", function(t) {
                return console.warn('IPC "' + e.options.serverName + '" errored with ' + t)
              }), this.child.on("exit", function(t, n) {
                process.removeListener("exit", h), e.activeRequests && (e.activeRequests.forEach(function(e) {
                  return e.cancel()
                }), e.activeRequests = []), 0 !== t && "SIGTERM" !== n && (console.warn('IPC "' + e.options.serverName + '" crashed with exit code ' + t), e.disposeDelayer.cancel(), e.disposeClient())
              })
            }
            return this._client
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.disposeClient = function() {
          this._client && (this.child.kill(), this.child = null, this._client = null, this.channels = Object.create(null))
        }, e.prototype.dispose = function() {
          this.disposeDelayer.cancel(), this.disposeDelayer = null, this.disposeClient(), this.activeRequests = null
        }, e
      }();
      t.Client = h
    }), define(e[48], t([0, 1]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      t.MAX_FILE_SIZE = "ia32" === process.arch ? 314572800 : 17179869184
    }), define(e[49], t([0, 1]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function() {
        function e(e) {
          this.path = e, this.lineMatches = []
        }
        return e.prototype.addMatch = function(e) {
          this.lineMatches.push(e)
        }, e.prototype.serialize = function() {
          for (var e = [], t = 0, n = 0; n < this.lineMatches.length; n++) t += this.lineMatches[n].offsetAndLengths.length, e.push(this.lineMatches[n].serialize());
          return {
            path: this.path,
            lineMatches: e,
            numMatches: t
          }
        }, e
      }();
      t.FileMatch = n;
      var r = function() {
        function e(e, t) {
          this.preview = e.replace(/(\r|\n)*$/, ""), this.lineNumber = t, this.offsetAndLengths = []
        }
        return e.prototype.addMatch = function(e, t) {
          this.offsetAndLengths.push([e, t])
        }, e.prototype.serialize = function() {
          return {
            preview: this.preview,
            lineNumber: this.lineNumber,
            offsetAndLengths: this.offsetAndLengths
          }
        }, e
      }();
      t.LineMatch = r
    }), define(e[50], t([0, 1]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function() {
        function e(e) {
          this.service = e
        }
        return e.prototype.call = function(e, t) {
          switch (e) {
            case "fileSearch":
              return this.service.fileSearch(t);
            case "textSearch":
              return this.service.textSearch(t);
            case "clearCache":
              return this.service.clearCache(t);
            case "fetchTelemetry":
              return this.service.fetchTelemetry()
          }
        }, e
      }();
      t.SearchChannel = n;
      var r = function() {
        function e(e) {
          this.channel = e
        }
        return e.prototype.fileSearch = function(e) {
          return this.channel.call("fileSearch", e)
        }, e.prototype.textSearch = function(e) {
          return this.channel.call("textSearch", e)
        }, e.prototype.clearCache = function(e) {
          return this.channel.call("clearCache", e)
        }, e.prototype.fetchTelemetry = function() {
          return this.channel.call("fetchTelemetry")
        }, e
      }();
      t.SearchChannelClient = r
    }), define(e[51], t([0, 1, 7, 17]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function() {
        function e(e, t, n) {
          this.isCanceled = !1, this.isDone = !1, this.totalBytes = 0, this.processedBytes = 0, this.progressed = 0, this.walkerIsDone = !1, this.limitReached = !1, this.numResults = 0, this.nextWorker = 0, this.config = e, this.walker = t, this.workerProvider = n
        }
        return e.prototype.cancel = function() {
          this.isCanceled = !0, this.walker.cancel(), this.workers.forEach(function(e) {
            e.cancel().then(null, r.onUnexpectedError)
          })
        }, e.prototype.initializeWorkers = function() {
          this.workers.forEach(function(e) {
            e.initialize().then(null, r.onUnexpectedError)
          })
        }, e.prototype.search = function(t, i, o) {
          var s = this;
          this.workers = this.workerProvider.getWorkers(), this.initializeWorkers();
          var a = 1 === this.config.folderQueries.length ? this.config.folderQueries[0].fileEncoding || "utf8" : "utf8",
            u = function() {
              ++s.progressed % e.PROGRESS_FLUSH_CHUNK_SIZE == 0 && i({
                total: s.totalBytes,
                worked: s.processedBytes
              })
            },
            c = function(e) {
              s.processedBytes += e, !e || s.isDone || s.isCanceled || s.limitReached || u(), !s.isDone && s.processedBytes === s.totalBytes && s.walkerIsDone && (s.isDone = !0, o(s.walkerError, {
                limitHit: s.limitReached,
                stats: s.walker.getStats()
              }))
            },
            l = function(e, n) {
              var i = s.workers[s.nextWorker];
              s.nextWorker = (s.nextWorker + 1) % s.workers.length;
              var o = {
                absolutePaths: e,
                maxResults: s.config.maxResults && s.config.maxResults - s.numResults,
                pattern: s.config.contentPattern,
                fileEncoding: a
              };
              i.search(o).then(function(e) {
                if (!e || s.limitReached || s.isCanceled) return c(n);
                var r = e.matches;
                t(r), s.numResults += e.numMatches, s.config.maxResults && s.numResults >= s.config.maxResults && (s.limitReached = !0), c(n)
              }, function(e) {
                r.onUnexpectedError(e), c(n)
              })
            },
            f = [],
            h = 0,
            p = Math.pow(2, 20);
          this.walker.walk(this.config.folderQueries, this.config.extraFiles, function(e) {
            var t = e.size || 1;
            if (s.totalBytes += t, s.limitReached || s.isCanceled) return c(t);
            u();
            var r = e.base ? [e.base, e.relativePath].join(n.sep) : e.relativePath;
            f.push(r), (h += t) >= p && (l(f, h), f = [], h = 0)
          }, function(e, t) {
            s.walkerIsDone = !0,
              s.walkerError = e, f.length ? s.limitReached || s.isCanceled ? c(h) : l(f, h) : c(0)
          })
        }, e.PROGRESS_FLUSH_CHUNK_SIZE = 50, e
      }();
      t.Engine = i
    }), define(e[52], t([0, 1]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function() {
        function e(e) {
          this.worker = e
        }
        return e.prototype.call = function(e, t) {
          switch (e) {
            case "initialize":
              return this.worker.initialize();
            case "search":
              return this.worker.search(t);
            case "cancel":
              return this.worker.cancel()
          }
        }, e
      }();
      t.SearchWorkerChannel = n;
      var r = function() {
        function e(e) {
          this.channel = e
        }
        return e.prototype.initialize = function() {
          return this.channel.call("initialize")
        }, e.prototype.search = function(e) {
          return this.channel.call("search", e)
        }, e.prototype.cancel = function() {
          return this.channel.call("cancel")
        }, e
      }();
      t.SearchWorkerChannelClient = r
    }), define(e[53], t([0, 1, 33, 8, 18, 19, 52]), function(e, t, n, r, i, o, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = function() {
        function t() {
          this.workers = []
        }
        return t.prototype.getWorkers = function() {
          for (var e = n.cpus().length; this.workers.length < e;) this.createWorker();
          return this.workers
        }, t.prototype.createWorker = function() {
          var t = new o.Client(r.default.parse(e.toUrl("bootstrap")).fsPath, {
              serverName: "Search Worker " + this.workers.length,
              args: ["--type=searchWorker"],
              timeout: 3e4,
              env: {
                AMD_ENTRYPOINT: "vs/workbench/services/search/node/worker/searchWorkerApp",
                PIPE_LOGGING: "true",
                VERBOSE_LOGGING: process.env.VERBOSE_LOGGING
              },
              useQueue: !0
            }),
            n = i.getNextTickChannel(t.getChannel("searchWorker")),
            a = new s.SearchWorkerChannelClient(n);
          this.workers.push(a)
        }, t
      }();
      t.TextSearchWorkerProvider = a
    }), define(e[14], t([0, 1, 55, 7, 25, 5, 38, 9, 4, 3, 6, 21, 37, 23, 2, 49]), function(e, t, r, i, o, s, a, u, c, l, f, h, p, d, v, m) {
      "use strict";

      function g(e) {
        var t = e.split("\n")[0];
        return l.startsWith(t, "Error parsing regex") ? t : l.startsWith(t, "error parsing glob") || l.startsWith(t, "unsupported encoding") ? t.charAt(0).toUpperCase() + t.substr(1) : void 0
      }

      function y(e, t, n, r) {
        void 0 === r && (r = !0);
        var i = [],
          o = {};
        return e.forEach(function(e) {
          var s = b(u.assign({}, e.excludePattern || {}, t || {}), r && e.folder, n);
          i.push.apply(i, s.globArgs), s.siblingClauses && (o = u.assign(o, s.siblingClauses))
        }), {
          globArgs: i,
          siblingClauses: o
        }
      }

      function _(e, t, n) {
        void 0 === n && (n = !0);
        var r = [];
        return e.forEach(function(e) {
          var i = b(u.assign({}, t || {}, e.includePattern || {}), n && e.folder);
          r.push.apply(r, i.globArgs)
        }), r
      }

      function b(e, t, n) {
        var r = [],
          i = null;
        return Object.keys(e).forEach(function(o) {
          if ((!n || !n.has(o)) && o) {
            var s = e[o];
            o = P(t ? w(t, o) : o), o = l.startsWith(o, "\\\\") ? "\\\\" + o.substr(2).replace(/\\/g, "/") : o.replace(/\\/g, "/"), "boolean" == typeof s && s ? r.push(C(o)) : s && s.when && (i || (i = {}), i[o] = s)
          }
        }), {
          globArgs: r,
          siblingClauses: i
        }
      }

      function w(e, t) {
        return f.isAbsolute(t) ? t : i.join(e, t)
      }

      function P(e) {
        return e = l.rtrim(e, "\\"), l.rtrim(e, "/")
      }

      function C(e) {
        return "c:/" === f.getRoot(e).toLowerCase() ? e.replace(/^c:[/\\]/i, "/") : e
      }

      function E(e) {
        var t = ["--hidden", "--heading", "--line-number", "--color", "ansi", "--colors", "path:none", "--colors", "line:none", "--colors", "match:fg:red", "--colors", "match:style:nobold"];
        e.contentPattern.isSmartCase ? t.push("--smart-case") : t.push(e.contentPattern.isCaseSensitive ? "--case-sensitive" : "--ignore-case"), _(e.folderQueries, e.includePattern).forEach(function(e) {
          t.push("-g", e)
        });
        var n, r = function(e) {
            if (e.length < 2) return null;
            var t = e[0];
            if (!t.excludePattern) return null;
            var n = new Set;
            return Object.keys(t.excludePattern).forEach(function(t) {
              l.startsWith(t, "**") && e.every(function(e) {
                return e.excludePattern && !0 === e.excludePattern[t]
              }) && n.add(t)
            }), n
          }(e.folderQueries),
          i = y(e.folderQueries, e.excludePattern, r);
        i.globArgs.forEach(function(e) {
            return t.push("-g", "!" + e)
          }), r && r.forEach(function(e) {
            return t.push("-g", "!" + P(e))
          }), n = i.siblingClauses, e.maxFilesize && t.push("--max-filesize", e.maxFilesize + ""), e.disregardIgnoreFiles ? t.push("--no-ignore") : t.push("--no-ignore-parent"), e.ignoreSymlinks || t.push("--follow"), 1 === e.folderQueries.length && e.folderQueries[0].fileEncoding && "utf8" !== e.folderQueries[0].fileEncoding && t.push("--encoding", p.toCanonicalName(e.folderQueries[0].fileEncoding)),
          "--" === e.contentPattern.pattern && (e.contentPattern.isRegExp = !0, e.contentPattern.pattern = "\\-\\-");
        var o;
        if (e.contentPattern.isWordMatch) {
          var s = l.createRegExp(e.contentPattern.pattern, e.contentPattern.isRegExp, {
            wholeWord: e.contentPattern.isWordMatch
          }).source.replace(/\\\//g, "/");
          t.push("--regexp", s)
        } else e.contentPattern.isRegExp ? t.push("--regexp", e.contentPattern.pattern) : (o = e.contentPattern.pattern, t.push("--fixed-strings"));
        return t.push("--"), o && t.push(o), t.push.apply(t, e.folderQueries.map(function(e) {
          return e.folder
        })), t.push.apply(t, e.extraFiles), {
          globArgs: t,
          siblingClauses: n
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var x = function() {
        function e(e) {
          var t = this;
          this.config = e, this.isDone = !1, this.resultsHandledP = v.TPromise.wrap(null), this.killRgProcFn = function() {
            return t.rgProc && t.rgProc.kill()
          }
        }
        return e.prototype.cancel = function() {
          this.isDone = !0, this.ripgrepParser.cancel(), this.rgProc.kill()
        }, e.prototype.search = function(e, t, n) {
          var r = this;
          if (!this.config.folderQueries.length && !this.config.extraFiles.length) return process.removeListener("exit", this.killRgProcFn), void n(null, {
            limitHit: !1,
            stats: null
          });
          var o = E(this.config);
          o.siblingClauses && (this.postProcessExclusions = d.parseToAsync(o.siblingClauses, {
            trimForExclusions: !0
          }));
          var u = c.isWindows ? "c:/" : "/";
          process.nextTick(function() {
            var e = o.globArgs.map(function(e) {
              return e.match(/^-/) ? e : "'" + e + "'"
            }).join(" ");
            t({
              message: "rg " + e + "\n - cwd: " + u + "\n"
            }), o.siblingClauses && t({
              message: " - Sibling clauses: " + JSON.stringify(o.siblingClauses) + "\n"
            })
          }), this.rgProc = s.spawn(a.rgPath, o.globArgs, {
            cwd: u
          }), process.once("exit", this.killRgProcFn), this.ripgrepParser = new S(this.config.maxResults, u, this.config.extraFiles), this.ripgrepParser.on("result", function(t) {
            if (r.postProcessExclusions) {
              var n = r.postProcessExclusions(t.path, void 0, function() {
                return function(e) {
                  return new v.TPromise(function(t, n) {
                    h.readdir(i.dirname(e), function(e, r) {
                      e && n(e), t(r)
                    })
                  })
                }(t.path)
              }).then(function(n) {
                n || e(t)
              });
              r.resultsHandledP = v.TPromise.join([r.resultsHandledP, n])
            } else e(t)
          }), this.ripgrepParser.on("hitLimit", function() {
            r.cancel(), process.removeListener("exit", r.killRgProcFn), n(null, {
              limitHit: !0,
              stats: null
            })
          }), this.rgProc.stdout.on("data", function(e) {
            r.ripgrepParser.handleData(e)
          });
          var l = !1;
          this.rgProc.stdout.once("data", function() {
            return l = !0
          });
          var f = "";
          this.rgProc.stderr.on("data", function(e) {
            var n = e.toString();
            t({
              message: n
            }), f += n
          }), this.rgProc.on("close", function(e) {
            r.ripgrepParser.flush(), r.resultsHandledP.then(function() {
              if (r.rgProc = null, !r.isDone) {
                r.isDone = !0;
                var e = void 0;
                process.removeListener("exit", r.killRgProcFn), f && !l && (e = g(f)) ? n(new Error(e), {
                  limitHit: !1,
                  stats: null
                }) : n(null, {
                  limitHit: !1,
                  stats: null
                })
              }
            })
          })
        }, e
      }();
      t.RipgrepEngine = x, t.rgErrorMsgForDisplay = g;
      var S = function(e) {
        function t(t, n, r) {
          var i = e.call(this) || this;
          return i.maxResults = t, i.rootFolder = n, i.numResults = 0, i.stringDecoder = new o.StringDecoder, i.extraSearchFiles = r || [], i
        }
        return n(t, e), t.prototype.cancel = function() {
            this.isDone = !0
          },
          t.prototype.flush = function() {
            this.handleDecodedData(this.stringDecoder.end()), this.fileMatch && this.onResult()
          }, t.prototype.handleData = function(e) {
            var t = "string" == typeof e ? e : this.stringDecoder.write(e);
            this.handleDecodedData(t)
          }, t.prototype.handleDecodedData = function(e) {
            var n = (this.remainder ? this.remainder + e : e).split(/\r\n|\n/);
            this.remainder = n[n.length - 1] ? n.pop() : null;
            for (var r = 0; r < n.length; r++) {
              var i = n[r].trim();
              if (this.isDone) break;
              var o = void 0;
              if (o = i.match(t.RESULT_REGEX)) {
                var s = parseInt(o[1]) - 1,
                  a = o[2];
                o[3] && (a += t.MATCH_END_MARKER), this.handleMatchLine(i, s, a)
              } else(o = i.match(t.FILE_REGEX)) && (this.fileMatch && this.onResult(), this.fileMatch = this.getFileMatch(o[1]))
            }
          }, t.prototype.getFileMatch = function(e) {
            var t = i.isAbsolute(e) ? e : i.join(this.rootFolder, e);
            return new m.FileMatch(t)
          }, t.prototype.handleMatchLine = function(e, n, r) {
            0 === n && (r = l.stripUTF8BOM(r));
            var i = new m.LineMatch(r, n);
            if (!this.fileMatch) {
              var o = this.extraSearchFiles[0];
              if (!o) throw new Error("Got match line for unknown file");
              this.fileMatch = this.getFileMatch(o)
            }
            this.fileMatch.addMatch(i);
            for (var s = 0, a = -1, u = -1, c = 0, f = !1, h = [], p = 0; p < r.length - (t.MATCH_END_MARKER.length - 1);)
              if (r.substr(p, t.MATCH_START_MARKER.length) === t.MATCH_START_MARKER) {
                var d = r.slice(s, p);
                h.push(d), a = p += t.MATCH_START_MARKER.length, u = c
              } else if (r.substr(p, t.MATCH_END_MARKER.length) === t.MATCH_END_MARKER) {
              var v = r.slice(a, p);
              h.push(v), f || i.addMatch(u, c - u), a = -1, u = -1, s = p += t.MATCH_END_MARKER.length, this.numResults++, this.numResults >= this.maxResults && (f = !0)
            } else p++, c++;
            var g = r.slice(s);
            h.push(g);
            var y = h.join("");
            i.preview = y, f && (this.cancel(), this.onResult(), this.emit("hitLimit"))
          }, t.prototype.onResult = function() {
            this.emit("result", this.fileMatch.serialize()), this.fileMatch = null
          }, t.RESULT_REGEX = /^\u001b\[m(\d+)\u001b\[m:(.*)(\r?)/, t.FILE_REGEX = /^\u001b\[m(.+)\u001b\[m$/, t.MATCH_START_MARKER = "[m[31m", t.MATCH_END_MARKER = "[m", t
      }(r.EventEmitter);
      t.RipgrepParser = S, t.foldersToRgExcludeGlobs = y, t.foldersToIncludeGlobs = _, t.getAbsoluteGlob = w, t.fixDriveC = C
    }),
    define(e[34], t([0, 1, 5, 38, 4, 3, 14]), function(e, t, n, r, i, o, s) {
      "use strict";

      function a(e, t, a, c) {
        var l = function(e, t, n, r) {
          var a = ["--files", "--hidden", "--case-sensitive"];
          s.foldersToIncludeGlobs([t], n, !1).forEach(function(e) {
            a.push("-g", u(i.isMacintosh ? o.normalizeNFD(e) : e))
          });
          var c, l = s.foldersToRgExcludeGlobs([t], r, void 0, !1);
          l.globArgs.forEach(function(e) {
            return a.push("-g", "!" + u(i.isMacintosh ? o.normalizeNFD(e) : e))
          }), c = l.siblingClauses, !1 !== t.disregardIgnoreFiles ? a.push("--no-ignore") : a.push("--no-ignore-parent");
          e.ignoreSymlinks || a.push("--follow");
          e.exists && a.push("--quiet");
          return a.push("--"), a.push("."), {
            globArgs: a,
            siblingClauses: c
          }
        }(e, t, a, c);
        return {
          cmd: n.spawn(r.rgPath, l.globArgs, {
            cwd: t.folder
          }),
          siblingClauses: l.siblingClauses
        }
      }

      function u(e) {
        return o.startsWith(e, "**") || o.startsWith(e, "/") ? e : "/" + e
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.spawnRipgrepCmd = a
    }), define(e[30], t([0, 1, 5, 25, 26, 16, 7, 6, 9, 11, 4, 3, 10, 23, 21, 24, 34, 14]), function(e, t, n, r, i, o, s, a, u, c, l, f, h, p, d, v, m, g) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var y;
      ! function(e) {
        e[e.Node = 1] = "Node", e[e.MacFind = 2] = "MacFind", e[e.WindowsDir = 3] = "WindowsDir", e[e.LinuxFind = 4] = "LinuxFind", e[e.Ripgrep = 5] = "Ripgrep"
      }(y || (y = {}));
      var _ = function() {
        function e(e) {
          var t = this;
          this.config = e, this.useRipgrep = !1 !== e.useRipgrep, this.filePattern = e.filePattern, this.includePattern = e.includePattern && p.parse(e.includePattern), this.maxResults = e.maxResults || null, this.exists = e.exists, this.maxFilesize = e.maxFilesize || null, this.walkedPaths = Object.create(null), this.resultCount = 0, this.isLimitHit = !1, this.directoriesWalked = 0, this.filesWalked = 0, this.traversal = y.Node, this.errors = [], this.filePattern && (this.normalizedFilePatternLowercase = f.stripWildcards(this.filePattern).toLowerCase()), this.globalExcludePattern = e.excludePattern && p.parse(e.excludePattern), this.folderExcludePatterns = new Map, e.folderQueries.forEach(function(n) {
            var r = u.assign({}, n.excludePattern || {}, t.config.excludePattern || {});
            e.folderQueries.map(function(e) {
              return e.folder
            }).filter(function(e) {
              return e !== n.folder
            }).forEach(function(e) {
              a.isEqualOrParent(e, n.folder) && (r[s.relative(n.folder, e)] = !0)
            }), t.folderExcludePatterns.set(n.folder, new w(r, n.folder))
          })
        }
        return e.prototype.cancel = function() {
            this.isCanceled = !0
          }, e.prototype.walk = function(e, t, n, r) {
            var o = this;
            this.fileWalkStartTime = Date.now(), this.checkFilePatternAbsoluteMatch(function(a, u) {
              if (o.isCanceled) return r(null, o.isLimitHit);
              if (a) return o.resultCount++, n({
                relativePath: o.filePattern,
                basename: s.basename(o.filePattern),
                size: u
              }), r(null, o.isLimitHit);
              t && t.forEach(function(e) {
                var t = s.basename(e);
                o.globalExcludePattern && o.globalExcludePattern(e, t) || o.matchFile(n, {
                  relativePath: e,
                  basename: t
                })
              });
              var c = o.nodeJSTraversal;
              o.maxFilesize || (o.useRipgrep ? (o.traversal = y.Ripgrep, c = o.cmdTraversal) : l.isMacintosh ? (o.traversal = y.MacFind, c = o.cmdTraversal) : l.isLinux && (o.traversal = y.LinuxFind, c = o.cmdTraversal));
              c === o.nodeJSTraversal || (o.cmdForkStartTime = Date.now()), v.parallel(e, function(e, t) {
                o.call(c, o, e, n, function(e) {
                  if (e) {
                    var n = i.toErrorMessage(e);
                    console.error(n), o.errors.push(n), t(e, void 0)
                  } else t(void 0, void 0)
                })
              }, function(e, t) {
                var n = e ? e.filter(function(e) {
                  return !!e
                })[0] : null;
                r(n, o.isLimitHit)
              })
            })
          }, e.prototype.call = function(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            try {
              e.apply(t, n)
            } catch (e) {
              n[n.length - 1](e)
            }
          }, e.prototype.cmdTraversal = function(e, t, n) {
            var r, i, o = this,
              a = e.folder,
              u = l.isMacintosh,
              c = function() {
                return r && r.kill()
              },
              h = function(e) {
                process.removeListener("exit", c), h = function() {}, n(e)
              },
              p = "",
              d = !0,
              v = this.initDirectoryTree(),
              g = this.useRipgrep,
              y = !1;
            if (g) {
              var _ = m.spawnRipgrepCmd(this.config, e, this.config.includePattern, this.folderExcludePatterns.get(e.folder).expression);
              r = _.cmd, i = !Object.keys(_.siblingClauses).length
            } else r = this.spawnFindCmd(e);
            process.on("exit", c), this.collectStdout(r, "utf8", g, function(n, r, l) {
              if (n) h(n);
              else if (o.isLimitHit) h();
              else {
                var m = p + (u ? f.normalizeNFC(r) : r),
                  _ = m.split(g ? "\n" : "\n./");
                if (!g && d && m.length >= 2 && (d = !1, _[0] = _[0].trim().substr(2)), l) {
                  var b = _.length;
                  _[b - 1] = _[b - 1].trim(),
                    _[b - 1] || _.pop()
                } else p = _.pop();
                if (_.length && -1 !== _[0].indexOf("\n")) h(new Error("Splitting up files failed"));
                else if (o.cmdResultCount += _.length, g && i) {
                  for (var w = 0, P = _; w < P.length; w++) {
                    var C = P[w];
                    C === o.filePattern && (y = !0);
                    var E = s.basename(C);
                    if (o.matchFile(t, {
                        base: a,
                        relativePath: C,
                        basename: E
                      }), o.isLimitHit) {
                      c();
                      break
                    }
                  }(l || o.isLimitHit) && (y ? h() : o.checkFilePatternRelativeMatch(e.folder, function(n, r) {
                    n && (o.resultCount++, t({
                      base: e.folder,
                      relativePath: o.filePattern,
                      basename: s.basename(o.filePattern)
                    })), h()
                  }))
                } else o.addDirectoryEntries(v, a, _, t), l && (o.matchDirectoryTree(v, a, t), h())
              }
            })
          }, e.prototype.spawnFindCmd = function(e) {
            var t = this.folderExcludePatterns.get(e.folder),
              r = t.getBasenameTerms(),
              i = t.getPathTerms(),
              o = ["-L", "."];
            if (r.length || i.length) {
              o.push("-not", "(", "(");
              for (var s = 0, a = r; s < a.length; s++) {
                var u = a[s];
                o.push("-name", u), o.push("-o")
              }
              for (var c = 0, l = i; c < l.length; c++) {
                var f = l[c];
                o.push("-path", f), o.push("-o")
              }
              o.pop(), o.push(")", "-prune", ")")
            }
            return o.push("-type", "f"), n.spawn("find", o, {
              cwd: e.folder
            })
          },
          e.prototype.readStdout = function(e, t, n, r) {
            var i = "";
            this.collectStdout(e, t, n, function(e, t, n) {
              e ? r(e) : (i += t, n && r(null, i))
            })
          }, e.prototype.collectStdout = function(e, t, n, r) {
            var i = this,
              o = function(e, t, n) {
                (e || n) && (o = function() {}, i.cmdForkResultTime = Date.now()), r(e, t, n)
              };
            this.forwardData(e.stdout, t, o);
            var s = this.collectData(e.stderr),
              a = !1;
            e.stdout.once("data", function() {
              return a = !0
            }), e.on("error", function(e) {
              o(e)
            }), e.on("close", function(e) {
              var r;
              (n ? !a && (r = i.decodeData(s, t)) && g.rgErrorMsgForDisplay(r) : 0 !== e) ? o(new Error("command failed with error code " + e + ": " + i.decodeData(s, t))): (n && i.exists && 0 === e && (i.isLimitHit = !0), o(null, "", !0))
            })
          }, e.prototype.forwardData = function(e, t, n) {
            var i = new r.StringDecoder(t);
            return e.on("data", function(e) {
              n(null, i.write(e))
            }), i
          }, e.prototype.collectData = function(e) {
            var t = [];
            return e.on("data", function(e) {
              t.push(e)
            }), t
          }, e.prototype.decodeData = function(e, t) {
            var n = new r.StringDecoder(t);
            return e.map(function(e) {
              return n.write(e)
            }).join("")
          }, e.prototype.initDirectoryTree = function() {
            var e = {
              rootEntries: [],
              pathToEntries: Object.create(null)
            };
            return e.pathToEntries["."] = e.rootEntries, e
          }, e.prototype.addDirectoryEntries = function(e, t, n, r) {
            function i(e) {
              var n = s.basename(e),
                r = s.dirname(e),
                a = o[r];
              a || (a = o[r] = [], i(r)), a.push({
                base: t,
                relativePath: e,
                basename: n
              })
            }
            var o = e.pathToEntries;
            if (-1 !== n.indexOf(this.filePattern)) {
              var a = s.basename(this.filePattern);
              this.matchFile(r, {
                base: t,
                relativePath: this.filePattern,
                basename: a
              })
            }
            n.forEach(i)
          }, e.prototype.matchDirectoryTree = function(e, t, n) {
            function r(e) {
              s.directoriesWalked++;
              for (var t = function(t, i) {
                  var c = e[t],
                    l = c.relativePath,
                    f = c.basename;
                  if (a.test(l, f, function() {
                      return u !== f ? e.map(function(e) {
                        return e.basename
                      }) : []
                    })) return "continue";
                  var h = o[l];
                  if (h) r(h);
                  else {
                    if (s.filesWalked++, l === u) return "continue";
                    s.matchFile(n, c)
                  }
                  return s.isLimitHit ? "break" : void 0
                }, i = 0, c = e.length; i < c; i++) {
                if ("break" === t(i)) break
              }
            }
            var i = e.rootEntries,
              o = e.pathToEntries,
              s = this,
              a = this.folderExcludePatterns.get(t),
              u = this.filePattern;
            r(i)
          }, e.prototype.nodeJSTraversal = function(e, t, n) {
            var r = this;
            this.directoriesWalked++, d.readdir(e.folder, function(i, o) {
              return i || r.isCanceled || r.isLimitHit ? n() : r.checkFilePatternRelativeMatch(e.folder, function(i, a) {
                return r.isCanceled || r.isLimitHit ? n() : (i && (r.resultCount++, t({
                  base: e.folder,
                  relativePath: r.filePattern,
                  basename: s.basename(r.filePattern),
                  size: a
                })), r.doWalk(e, "", o, t, n))
              })
            })
          }, e.prototype.getStats = function() {
            return {
              fromCache: !1,
              traversal: y[this.traversal],
              errors: this.errors,
              fileWalkStartTime: this.fileWalkStartTime,
              fileWalkResultTime: Date.now(),
              directoriesWalked: this.directoriesWalked,
              filesWalked: this.filesWalked,
              resultCount: this.resultCount,
              cmdForkStartTime: this.cmdForkStartTime,
              cmdForkResultTime: this.cmdForkResultTime,
              cmdResultCount: this.cmdResultCount
            }
          }, e.prototype.checkFilePatternAbsoluteMatch = function(e) {
            return this.filePattern && s.isAbsolute(this.filePattern) ? o.stat(this.filePattern, function(t, n) {
              return e(!t && !n.isDirectory(), n && n.size)
            }) : e(!1)
          }, e.prototype.checkFilePatternRelativeMatch = function(e, t) {
            if (!this.filePattern || s.isAbsolute(this.filePattern)) return t(null);
            var n = s.join(e, this.filePattern);
            return o.stat(n, function(e, r) {
              return t(e || r.isDirectory() ? null : n, r && r.size)
            })
          }, e.prototype.doWalk = function(e, t, n, r, i) {
            var a = this,
              u = e.folder;
            v.parallel(n, function(i, c) {
              if (a.isCanceled || a.isLimitHit) return c(null, void 0);
              var l = n;
              a.config.filePattern === i && (l = []);
              var f = t ? [t, i].join(s.sep) : i;
              if (a.folderExcludePatterns.get(e.folder).test(f, i, function() {
                  return l
                })) return c(null, void 0);
              var p = [u, f].join(s.sep);
              o.lstat(p, function(t, n) {
                if (t || a.isCanceled || a.isLimitHit) return c(null, void 0);
                a.statLinkIfNeeded(p, n, function(t, o) {
                  return t || a.isCanceled || a.isLimitHit ? c(null, void 0) : o.isDirectory() ? (a.directoriesWalked++, a.realPathIfNeeded(p, n, function(t, n) {
                    return t || a.isCanceled || a.isLimitHit ? c(null, void 0) : a.walkedPaths[n] ? c(null, void 0) : (a.walkedPaths[n] = !0, d.readdir(p, function(t, n) {
                      if (t || a.isCanceled || a.isLimitHit) return c(null, void 0);
                      a.doWalk(e, f, n, r, function(e) {
                        return c(e, void 0)
                      })
                    }))
                  })) : (a.filesWalked++,
                    f === a.filePattern ? c(null, void 0) : a.maxFilesize && h.isNumber(o.size) && o.size > a.maxFilesize ? c(null, void 0) : (a.matchFile(r, {
                      base: u,
                      relativePath: f,
                      basename: i,
                      size: o.size
                    }), c(null, void 0)))
                })
              })
            }, function(e) {
              return e && (e = c.coalesce(e)), i(e && e.length > 0 ? e[0] : null)
            })
          }, e.prototype.matchFile = function(e, t) {
            !this.isFilePatternMatch(t.relativePath) || this.includePattern && !this.includePattern(t.relativePath, t.basename) || (this.resultCount++, (this.exists || this.maxResults && this.resultCount > this.maxResults) && (this.isLimitHit = !0), this.isLimitHit || e(t))
          }, e.prototype.isFilePatternMatch = function(e) {
            return !this.filePattern || ("*" === this.filePattern || f.fuzzyContains(e, this.normalizedFilePatternLowercase))
          }, e.prototype.statLinkIfNeeded = function(e, t, n) {
            return t.isSymbolicLink() ? o.stat(e, n) : n(null, t)
          }, e.prototype.realPathIfNeeded = function(e, t, n) {
            return t.isSymbolicLink() ? o.realpath(e, function(e, t) {
              return e ? n(e) : n(null, t)
            }) : n(null, e)
          }, e
      }();
      t.FileWalker = _;
      var b = function() {
        function e(e) {
          this.folderQueries = e.folderQueries,
            this.extraFiles = e.extraFiles, this.walker = new _(e)
        }
        return e.prototype.search = function(e, t, n) {
          var r = this;
          this.walker.walk(this.folderQueries, this.extraFiles, e, function(e, t) {
            n(e, {
              limitHit: t,
              stats: r.walker.getStats()
            })
          })
        }, e.prototype.cancel = function() {
          this.walker.cancel()
        }, e
      }();
      t.Engine = b;
      var w = function() {
        function e(e, t) {
          this.expression = e, this.root = t, this.init(e)
        }
        return e.prototype.init = function(e) {
          var t, n;
          Object.keys(e).filter(function(t) {
            return e[t]
          }).forEach(function(r) {
            s.isAbsolute(r) ? (t = t || p.getEmptyExpression())[r] = e[r] : (n = n || p.getEmptyExpression())[r] = e[r]
          }), this.absoluteParsedExpr = t && p.parse(t, {
            trimForExclusions: !0
          }), this.relativeParsedExpr = n && p.parse(n, {
            trimForExclusions: !0
          })
        }, e.prototype.test = function(e, t, n) {
          return this.relativeParsedExpr && this.relativeParsedExpr(e, t, n) || this.absoluteParsedExpr && this.absoluteParsedExpr(s.join(this.root, e), t, n)
        }, e.prototype.getBasenameTerms = function() {
          var e = [];
          return this.absoluteParsedExpr && e.push.apply(e, p.getBasenameTerms(this.absoluteParsedExpr)),
            this.relativeParsedExpr && e.push.apply(e, p.getBasenameTerms(this.relativeParsedExpr)), e
        }, e.prototype.getPathTerms = function() {
          var e = [];
          return this.absoluteParsedExpr && e.push.apply(e, p.getPathTerms(this.absoluteParsedExpr)), this.relativeParsedExpr && e.push.apply(e, p.getPathTerms(this.relativeParsedExpr)), e
        }, e
      }()
    }), define(e[28], t([0, 1, 16, 7, 60, 11, 9, 3, 2, 30, 48, 14, 51, 53, 3, 40]), function(e, t, n, r, i, o, s, a, u, c, l, f, h, p, d, v) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), i.gracefulify(n);
      var m = function() {
        function e() {
          this.caches = Object.create(null)
        }
        return e.prototype.fileSearch = function(t) {
          return this.doFileSearch(c.Engine, t, e.BATCH_SIZE)
        }, e.prototype.textSearch = function(e) {
          return e.useRipgrep ? this.ripgrepTextSearch(e) : this.legacyTextSearch(e)
        }, e.prototype.ripgrepTextSearch = function(t) {
          t.maxFilesize = l.MAX_FILE_SIZE;
          var n = new f.RipgrepEngine(t);
          return new u.PPromise(function(t, r, i) {
            var o = new _(e.BATCH_SIZE, i);
            n.search(function(e) {
              o.addItem(e, e.numMatches)
            }, function(e) {
              i(e)
            }, function(e, n) {
              o.flush(), e ? r(e) : t(n)
            })
          }, function() {
            n.cancel()
          })
        }, e.prototype.legacyTextSearch = function(t) {
          this.textSearchWorkerProvider || (this.textSearchWorkerProvider = new p.TextSearchWorkerProvider);
          var n = new h.Engine(t, new c.FileWalker({
            folderQueries: t.folderQueries,
            extraFiles: t.extraFiles,
            includePattern: t.includePattern,
            excludePattern: t.excludePattern,
            filePattern: t.filePattern,
            useRipgrep: !1,
            maxFilesize: l.MAX_FILE_SIZE
          }), this.textSearchWorkerProvider);
          return this.doTextSearch(n, e.BATCH_SIZE)
        }, e.prototype.doFileSearch = function(e, t, n) {
          var r = this;
          if (t.sortByScore) {
            var i = this.trySortedSearchFromCache(t);
            if (!i) {
              var o = t.maxResults ? s.assign({}, t, {
                  maxResults: null
                }) : t,
                a = new e(o);
              i = this.doSortedSearch(a, t)
            }
            return new u.PPromise(function(e, t, o) {
              process.nextTick(function() {
                i.then(function(t) {
                  var i = t[0],
                    s = t[1].map(function(e) {
                      return r.rawMatchToSearchItem(e)
                    });
                  r.sendProgress(s, o, n), e(i)
                }, t, o)
              })
            }, function() {
              i.cancel()
            })
          }
          var c;
          return new u.PPromise(function(i, o, s) {
            var a = new e(t);
            c = r.doSearch(a, n).then(i, o, function(e) {
              s(Array.isArray(e) ? e.map(function(e) {
                return r.rawMatchToSearchItem(e)
              }) : e.relativePath ? r.rawMatchToSearchItem(e) : e)
            })
          }, function() {
            c.cancel()
          })
        }, e.prototype.rawMatchToSearchItem = function(e) {
          return {
            path: e.base ? [e.base, e.relativePath].join(r.sep) : e.relativePath
          }
        }, e.prototype.doSortedSearch = function(e, t) {
          var n, r, i = this,
            o = new u.PPromise(function(t, r, o) {
              var s = [];
              n = i.doSearch(e, -1).then(function(e) {
                t([e, s]), i.telemetryPipe && i.telemetryPipe({
                  eventName: "fileSearch",
                  data: e.stats
                })
              }, r, function(e) {
                Array.isArray(e) ? s = e : o(e)
              })
            }, function() {
              n.cancel()
            });
          t.cacheKey && ((r = this.getOrCreateCache(t.cacheKey)).resultsToSearchCache[t.filePattern] = o, o.then(null, function(e) {
            delete r.resultsToSearchCache[t.filePattern]
          }), o = this.preventCancellation(o));
          var a;
          return new u.PPromise(function(e, n, u) {
            a = o.then(function(n) {
              var o = n[0],
                a = n[1],
                u = r ? r.scorerCache : Object.create(null),
                c = Date.now();
              return i.sortResults(t, a, u).then(function(n) {
                var r = Date.now();
                e([{
                  stats: s.assign({}, o.stats, {
                    unsortedResultTime: c,
                    sortedResultTime: r
                  }),
                  limitHit: o.limitHit || "number" == typeof t.maxResults && a.length > t.maxResults
                }, n])
              })
            }, n, u)
          }, function() {
            a.cancel()
          })
        }, e.prototype.getOrCreateCache = function(e) {
          var t = this.caches[e];
          return t || (this.caches[e] = new g)
        }, e.prototype.trySortedSearchFromCache = function(e) {
          var t = this,
            n = e.cacheKey && this.caches[e.cacheKey];
          if (n) {
            var r = Date.now(),
              i = this.getResultsFromCache(n, e.filePattern);
            if (i) {
              var o;
              return new u.PPromise(function(s, a, u) {
                o = i.then(function(i) {
                  var o = i[0],
                    a = i[1],
                    u = i[2],
                    c = Date.now();
                  return t.sortResults(e, a, n.scorerCache).then(function(t) {
                    var n = Date.now(),
                      i = {
                        fromCache: !0,
                        cacheLookupStartTime: r,
                        cacheFilterStartTime: u.cacheFilterStartTime,
                        cacheLookupResultTime: c,
                        cacheEntryCount: u.cacheFilterResultCount,
                        resultCount: a.length
                      };
                    e.sortByScore && (i.unsortedResultTime = c, i.sortedResultTime = n), u.cacheWasResolved || (i.joined = o.stats), s([{
                      limitHit: o.limitHit || "number" == typeof e.maxResults && a.length > e.maxResults,
                      stats: i
                    }, t])
                  })
                }, a, u)
              }, function() {
                o.cancel()
              })
            }
          }
        }, e.prototype.sortResults = function(e, t, n) {
          var r = v.prepareQuery(e.filePattern);
          return o.topAsync(t, function(e, t) {
            return v.compareItemsByScore(e, t, r, !0, y, n)
          }, e.maxResults, 1e4)
        }, e.prototype.sendProgress = function(e, t, n) {
          if (n && n > 0)
            for (var r = 0; r < e.length; r += n) t(e.slice(r, r + n));
          else t(e)
        }, e.prototype.getResultsFromCache = function(e, t) {
          if (r.isAbsolute(t)) return null;
          var n, i, o = t.indexOf(r.sep) >= 0;
          for (var s in e.resultsToSearchCache)
            if (a.startsWith(t, s)) {
              if (o && s.indexOf(r.sep) < 0) continue;
              var c = e.resultsToSearchCache[s];
              c.then(function() {
                i = !1
              }), i = !0, n = this.preventCancellation(c);
              break
            }
          return n ? new u.PPromise(function(e, r, o) {
            n.then(function(n) {
              for (var r = n[0], o = n[1], s = Date.now(), u = [], c = a.stripWildcards(t).toLowerCase(), l = 0; l < o.length; l++) {
                var f = o[l];
                d.fuzzyContains(f.relativePath, c) && u.push(f)
              }
              e([r, u, {
                cacheWasResolved: i,
                cacheFilterStartTime: s,
                cacheFilterResultCount: o.length
              }])
            }, r, o)
          }, function() {
            n.cancel()
          }) : null
        }, e.prototype.doTextSearch = function(e, t) {
          return new u.PPromise(function(n, r, i) {
            var o = new _(t, i);
            e.search(function(e) {
              var t = e.reduce(function(e, t) {
                return e + t.numMatches
              }, 0);
              o.addItems(e, t)
            }, function(e) {
              i(e)
            }, function(e, t) {
              o.flush(), e ? r(e) : n(t)
            })
          }, function() {
            e.cancel()
          })
        }, e.prototype.doSearch = function(e, t) {
          return new u.PPromise(function(n, r, i) {
            var o = [];
            e.search(function(e) {
              e && (t ? (o.push(e), t > 0 && o.length >= t && (i(o), o = [])) : i(e))
            }, function(e) {
              i(e)
            }, function(e, t) {
              o.length && i(o), e ? r(e) : n(t)
            })
          }, function() {
            e.cancel()
          })
        }, e.prototype.clearCache = function(e) {
          return delete this.caches[e], u.TPromise.as(void 0)
        }, e.prototype.fetchTelemetry = function() {
          var e = this;
          return new u.PPromise(function(t, n, r) {
            e.telemetryPipe = r
          }, function() {
            e.telemetryPipe = null
          })
        }, e.prototype.preventCancellation = function(e) {
          return new u.PPromise(function(t, n, r) {
            process.nextTick(function() {
              e.then(t, n, r)
            })
          }, function() {})
        }, e.BATCH_SIZE = 512, e
      }();
      t.SearchService = m;
      var g = function() {
          return function() {
            this.resultsToSearchCache = Object.create(null), this.scorerCache = Object.create(null)
          }
        }(),
        y = new(function() {
          function e() {}
          return e.prototype.getItemLabel = function(e) {
              return e.basename
            },
            e.prototype.getItemDescription = function(e) {
              return e.relativePath.substr(0, e.relativePath.length - e.basename.length - 1)
            }, e.prototype.getItemPath = function(e) {
              return e.relativePath
            }, e
        }()),
        _ = function() {
          function e(e, t) {
            this.maxBatchSize = e, this.cb = t, this.totalNumberCompleted = 0, this.batch = [], this.batchSize = 0
          }
          return e.prototype.addItem = function(e, t) {
            e && (this.maxBatchSize > 0 ? this.addItemToBatch(e, t) : this.cb(e))
          }, e.prototype.addItems = function(e, t) {
            e && (this.maxBatchSize > 0 ? this.addItemsToBatch(e, t) : this.cb(e))
          }, e.prototype.addItemToBatch = function(e, t) {
            this.batch.push(e), this.batchSize += t, this.onUpdate()
          }, e.prototype.addItemsToBatch = function(e, t) {
            this.batch = this.batch.concat(e), this.batchSize += t, this.onUpdate()
          }, e.prototype.onUpdate = function() {
            var t = this;
            this.totalNumberCompleted < e.START_BATCH_AFTER_COUNT ? this.flush() : this.batchSize >= this.maxBatchSize ? this.flush() : this.timeoutHandle || (this.timeoutHandle = setTimeout(function() {
              t.flush()
            }, e.TIMEOUT))
          }, e.prototype.flush = function() {
            this.batchSize && (this.totalNumberCompleted += this.batchSize, this.cb(this.batch), this.batch = [], this.batchSize = 0, this.timeoutHandle && (clearTimeout(this.timeoutHandle), this.timeoutHandle = 0))
          }, e.TIMEOUT = 4e3, e.START_BATCH_AFTER_COUNT = 50, e
        }()
    }), define(e[61], t([0, 1, 19, 50, 28]), function(e, t, n, r, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = new n.Server,
        s = new i.SearchService,
        a = new r.SearchChannel(s);
      o.registerChannel("search", a)
    })
}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\workbench\services\search\node\searchApp.js.map