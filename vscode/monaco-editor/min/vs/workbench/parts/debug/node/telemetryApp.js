/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function() {
  var e = ["exports", "require", "vs/base/common/winjs.base", "vs/base/common/platform", "vs/base/common/uri", "vs/base/common/types", "vs/base/common/event", "vs/base/common/lifecycle", "vs/base/common/objects", "vs/base/common/functional", "vs/base/common/errors", "child_process", "vs/base/common/paths", "vs/base/common/linkedList", "vs/platform/telemetry/node/appInsightsAppender", "vs/base/common/async", "vs/base/common/processes", "vs/base/common/cancellation", "vs/base/common/map", "vs/base/node/console", "vs/base/node/decoder", "vs/platform/telemetry/common/telemetryIpc", "vs/base/node/stdFork", "path", "vs/base/parts/ipc/node/ipc.cp", "vs/base/node/processes", "vs/base/common/strings", "vs/base/parts/ipc/common/ipc", "vs/nls!vs/base/node/processes", "vs/nls", "vs/nls!vs/workbench/parts/debug/node/telemetryApp", "net", "os", "string_decoder", "vs/base/common/winjs.base.raw", "applicationinsights", "vs/workbench/parts/debug/node/telemetryApp"],
    t = function(t) {
      for (var n = [], r = 0, i = t.length; r < i; r++) n[r] = e[t[r]];
      return n
    };
  define(e[9], t([1, 0]), function(e, t) {
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
  }), define(e[7], t([1, 0, 9]), function(e, t, n) {
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
        },
        e.prototype._register = function(e) {
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
  }), define(e[13], t([1, 0]), function(e, t) {
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
          }, e.prototype.push = function(e) {
            return this.insert(e, !0)
          },
          e.prototype.insert = function(e, t) {
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
  }), define(e[3], t([1, 0]), function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = !1,
      r = !1,
      i = !1,
      o = !1,
      s = !1,
      u = !1,
      a = void 0,
      c = void 0;
    if (t.LANGUAGE_DEFAULT = "en", "object" == typeof process) {
      n = "win32" === process.platform, r = "darwin" === process.platform, i = "linux" === process.platform, o = !n && 0 === process.getuid();
      var l = process.env.VSCODE_NLS_CONFIG;
      if (l) try {
        var f = JSON.parse(l),
          h = f.availableLanguages["*"];
        a = f.locale, c = h || t.LANGUAGE_DEFAULT
      } catch (e) {}
      s = !0
    } else if ("object" == typeof navigator) {
      var p = navigator.userAgent;
      n = p.indexOf("Windows") >= 0, r = p.indexOf("Macintosh") >= 0, i = p.indexOf("Linux") >= 0, u = !0, c = a = navigator.language
    }
    var d;
    ! function(e) {
      e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows"
    }(d = t.Platform || (t.Platform = {}));
    var v = d.Web;
    s && (r ? v = d.Mac : n ? v = d.Windows : i && (v = d.Linux)), t.isWindows = n, t.isMacintosh = r, t.isLinux = i, t.isRootUser = o, t.isNative = s, t.isWeb = u, t.platform = v, t.language = c, t.locale = a;
    var m = "object" == typeof self ? self : global;
    t.globals = m, t.setTimeout = m.setTimeout.bind(m), t.clearTimeout = m.clearTimeout.bind(m), t.setInterval = m.setInterval.bind(m), t.clearInterval = m.clearInterval.bind(m);
    ! function(e) {
      e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux"
    }(t.OperatingSystem || (t.OperatingSystem = {})), t.OS = r ? 2 : n ? 1 : 3;
    ! function(e) {
      e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled"
    }(t.AccessibilitySupport || (t.AccessibilitySupport = {}))
  }), define(e[16], t([1, 0]), function(e, t) {
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
  }), define(e[5], t([1, 0]), function(e, t) {
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

    function u(e) {
      return typeof e === c.function
    }

    function a(e, t) {
      if (r(t)) {
        if (typeof e !== t) throw new Error("argument does not match constraint: typeof " + t)
      } else if (u(t)) {
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
    }, t.isUndefined = o, t.isUndefinedOrNull = s;
    var l = Object.prototype.hasOwnProperty;
    t.isEmptyObject = function(e) {
      if (!i(e)) return !1;
      for (var t in e)
        if (l.call(e, t)) return !1;
      return !0
    }, t.isFunction = u, t.areFunctions = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e && e.length > 0 && e.every(u)
    }, t.validateConstraints = function(e, t) {
      for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) a(e[r], t[r])
    }, t.validateConstraint = a, t.create = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      var r = Object.create(e.prototype);
      return e.apply(r, t), r
    }
  }), define(e[8], t([1, 0, 5]), function(e, t, n) {
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
        for (var s = [], u = 0; u < e.length; u++) s.push(i(e[u], t, r));
        return s
      }
      if (n.isObject(e)) {
        if (r.indexOf(e) >= 0) throw new Error("Cannot clone recursive data-structure");
        r.push(e);
        var c = {};
        for (var l in e) a.call(e, l) && (c[l] = i(e[l], t, r));
        return r.pop(), c
      }
      return e
    }

    function o(e, t, r) {
      return void 0 === r && (r = !0),
        n.isObject(e) ? (n.isObject(t) && Object.keys(t).forEach(function(i) {
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

    function u(e) {
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
          if (a.call(n, r)) {
            var i = n[r];
            "object" != typeof i || Object.isFrozen(i) || t.push(i)
          }
      }
      return e
    };
    var a = Object.prototype.hasOwnProperty;
    t.cloneAndChange = function(e, t) {
      return i(e, t, [])
    }, t.mixin = o, t.assign = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      return t.forEach(function(t) {
        return Object.keys(t).forEach(function(n) {
          return e[n] = t[n]
        })
      }), e
    }, t.equals = s, t.arrayToHash = u, t.createKeywordMatcher = function(e, t) {
      void 0 === t && (t = !1), t && (e = e.map(function(e) {
        return e.toLowerCase()
      }));
      var n = u(e);
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
    }, t.distinct = function(e, t) {
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
  define(e[4], t([1, 0, 3]), function(e, t, r) {
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
          u = e.path,
          a = e.query,
          c = e.fragment;
        if (o && r.push(o, ":"), (s || "file" === o) && r.push("//"), s) {
          if (-1 !== (m = s.indexOf("@"))) {
            var h = s.substr(0, m);
            s = s.substr(m + 1), -1 === (m = h.indexOf(":")) ? r.push(n(h)) : r.push(n(h.substr(0, m)), ":", n(h.substr(m + 1))), r.push("@")
          } -
          1 === (m = (s = s.toLowerCase()).indexOf(":")) ? r.push(n(s)) : r.push(n(s.substr(0, m)), s.substr(m))
        }
        if (u) {
          var p = d.exec(u);
          p && (u = p[1] ? "/" + p[2].toLowerCase() + u.substr(3) : p[2].toLowerCase() + u.substr(2));
          for (var v = 0;;) {
            var m = u.indexOf(f, v);
            if (-1 === m) {
              r.push(n(u.substring(v)));
              break
            }
            r.push(n(u.substring(v, m)), f), v = m + 1
          }
        }
        return a && r.push("?", n(a)), c && r.push("#", n(c)), r.join(l)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var u = /^\w[\w\d+.-]*$/,
        a = /^\//,
        c = /^\/\//,
        l = "",
        f = "/",
        h = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
        p = /^\/[a-zA-Z]:/,
        d = /^(\/)?([A-Z]:)/,
        v = /^[a-zA-Z]:/,
        m = function() {
          function e(e, t, n, r, i) {
            "object" == typeof e ? (this.scheme = e.scheme || l, this.authority = e.authority || l, this.path = e.path || l, this.query = e.query || l, this.fragment = e.fragment || l) : (this.scheme = e || l, this.authority = t || l, this.path = n || l, this.query = r || l, this.fragment = i || l, function(e) {
              if (e.scheme && !u.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
              if (e.path)
                if (e.authority) {
                  if (!a.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
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
            return void 0 === t ? t = this.scheme : null === t && (t = l), void 0 === n ? n = this.authority : null === n && (n = l), void 0 === r ? r = this.path : null === r && (r = l), void 0 === i ? i = this.query : null === i && (i = l), void 0 === o ? o = this.fragment : null === o && (o = l),
              t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new _(t, n, r, i, o)
          }, e.parse = function(e) {
            var t = h.exec(e);
            return t ? new _(t[2] || l, decodeURIComponent(t[4] || l), decodeURIComponent(t[5] || l), decodeURIComponent(t[7] || l), decodeURIComponent(t[9] || l)) : new _(l, l, l, l, l)
          }, e.file = function(e) {
            var t = l;
            if (r.isWindows && (e = e.replace(/\\/g, f)), e[0] === f && e[1] === f) {
              var n = e.indexOf(f, 2); - 1 === n ? (t = e.substring(2), e = f) : (t = e.substring(2, n), e = e.substring(n) || f)
            }
            return v.test(e) ? e = f + e : e[0] !== f && (e = f + e), new _("file", t, e, l, l)
          }, e.from = function(e) {
            return new _(e.scheme, e.authority, e.path, e.query, e.fragment)
          }, e.prototype.toString = function(e) {
            return void 0 === e && (e = !1), s(this, e)
          }, e.prototype.toJSON = function() {
            var e = {
              $mid: 1,
              fsPath: this.fsPath,
              external: this.toString()
            };
            return this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e
          }, e.revive = function(t) {
            if (t) {
              if (t instanceof e) return t;
              var n = new _(t);
              return n._fsPath = t.fsPath, n._formatted = t.external, n
            }
            return t
          }, e
        }();
      t.default = m;
      var _ = function(e) {
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
    }), define(e[18], t([1, 0, 4]), function(e, t, r) {
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
          return this._value = e,
            this._pos = 0, this
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
      var u = function() {
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
      t.PathIterator = u;
      var a = function() {
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
            return new e(new u)
          }, e.forStrings = function() {
            return new e(new s)
          }, e.prototype.clear = function() {
            this._root = void 0
          }, e.prototype.set = function(e, t) {
            var n, r = this._iter.reset(e);
            for (this._root || (this._root = new a, this._root.str = r.value()), n = this._root;;) {
              var i = r.cmp(n.str);
              if (i > 0) n.left || (n.left = new a, n.left.str = r.value()), n = n.left;
              else if (i < 0) n.right || (n.right = new a, n.right.str = r.value()), n = n.right;
              else {
                if (!r.hasNext()) break;
                r.next(), n.mid || (n.mid = new a, n.mid.str = r.value()), n = n.mid
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
                      u = o[1];
                    switch (s) {
                      case 1:
                        u.left = void 0;
                        break;
                      case 0:
                        u.mid = void 0;
                        break;
                      case -1:
                        u.right = void 0
                    }
                    r = u
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
                this._head = t, this._size = n, t.previous = void 0
              } else this.clear()
          },
          e.prototype.addItemFirst = function(e) {
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
                e === this._tail ? (r.next = void 0, this._tail = r) : (n.previous = r, r.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e
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
    }), define(e[26], t([1, 0, 18]), function(e, t, n) {
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
        return o = g.test(e) ? e.normalize(n) : e, r.set(e, o), o
      }

      function u(e, t) {
        return e < t ? -1 : e > t ? 1 : 0
      }

      function a(e) {
        return e >= 97 && e <= 122
      }

      function c(e) {
        return e >= 65 && e <= 90
      }

      function l(e) {
        return a(e) || c(e)
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
        }, t.escapeRegExpCharacters = r, t.trim = function(e, t) {
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
        },
        t.canNormalize = "function" == typeof "".normalize;
      var m = new n.LRUCache(1e4);
      t.normalizeNFC = function(e) {
        return s(e, "NFC", m)
      };
      var _ = new n.LRUCache(1e4);
      t.normalizeNFD = function(e) {
        return s(e, "NFD", _)
      };
      var g = /[^\u0000-\u0080]/;
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
      }, t.compare = u, t.compareIgnoreCase = function(e, t) {
        for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
          var i = e.charCodeAt(r),
            o = t.charCodeAt(r);
          if (i !== o) {
            c(i) && (i += 32), c(o) && (o += 32);
            var s = i - o;
            if (0 !== s) return a(i) && a(o) ? s : u(e.toLowerCase(), t.toLowerCase())
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
      var y = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
      t.containsRTL = function(e) {
        return y.test(e)
      };
      var b = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEF8]|\uD83E[\uDD00-\uDDE6])/;
      t.containsEmoji = function(e) {
        return b.test(e)
      };
      var C = /^[\t\n\r\x20-\x7E]*$/;
      t.isBasicASCII = function(e) {
        return C.test(e)
      }, t.containsFullWidthCharacter = function(e) {
        for (var t = 0, n = e.length; t < n; t++)
          if (p(e.charCodeAt(t))) return !0;
        return !1
      }, t.isFullWidthCharacter = p, t.lcut = function(e, n) {
        if (e.length < n) return e;
        for (var r = /\b/g, i = 0; r.test(e) && !(e.length - r.lastIndex < n);) i = r.lastIndex, r.lastIndex += 1;
        return e.substring(i).replace(/^\s/, t.empty)
      };
      var w = /\x1B\x5B[12]?K/g,
        E = /\x1b\[\d+m/g,
        P = /\x1b\[0?m/g;
      t.removeAnsiEscapeCodes = function(e) {
        return e && (e = (e = (e = e.replace(w, "")).replace(E, "")).replace(P, "")), e
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
    }), define(e[12], t([1, 0, 3, 26]), function(e, t, n, r) {
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
        for (var o = i ? "\\" : "/", a = u(e, o), c = a.length, h = !1, p = "", d = a.length; d <= r; d++)
          if (d === r || 47 === e.charCodeAt(d) || 92 === e.charCodeAt(d)) {
            if (s(e, c, d, "..")) {
              var v = p.lastIndexOf(o),
                m = p.slice(v + 1);
              (a || m.length > 0) && ".." !== m && (p = -1 === v ? "" : p.slice(0, v), h = !0)
            } else s(e, c, d, ".") && (a || p || d < r - 1) && (h = !0);
            if (!h) {
              var _ = e.slice(c, d);
              "" !== p && p[p.length - 1] !== o && (p += o), p += _
            }
            c = d + 1, h = !1
          }
        return a + p
      }

      function s(e, t, n, r) {
        return t + r.length === n && e.indexOf(r, t) === t
      }

      function u(e, t) {
        if (void 0 === t && (t = "/"), !e) return "";
        var n = e.length,
          r = e.charCodeAt(0);
        if (47 === r || 92 === r) {
          if ((47 === (r = e.charCodeAt(1)) || 92 === r) && 47 !== (r = e.charCodeAt(2)) && 92 !== r) {
            for (var i = 3, o = i; i < n && (47 !== (r = e.charCodeAt(i)) && 92 !== r); i++);
            if (r = e.charCodeAt(i + 1),
              o !== i && 47 !== r && 92 !== r)
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

      function a(e) {
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
      t.normalize = o, t.getRoot = u, t.join = function() {
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
        },
        t.isEqualOrParent = function(e, n, i) {
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
          return n.isWindows ? a(e) : c(e)
        }, t.isAbsolute_win32 = a, t.isAbsolute_posix = c
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
          u = r.apply({}, s);
        e[t] = o ? i : u
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
            u = Array.isArray(e);
          for (i = 0, o = s.length; i < o; i++) {
            var a = s[i],
              c = 95 !== a.charCodeAt(0),
              l = t[a];
            !l || "object" != typeof l || void 0 === l.value && "function" != typeof l.get && "function" != typeof l.set ? c ? u ? e.forEach(function(e) {
              e[a] = l
            }) : e[a] = l : (r = r || {})[a] = {
              value: l,
              enumerable: c,
              configurable: !0,
              writable: !0
            } : (void 0 === l.enumerable && (l.enumerable = c), n && l.setName && "function" == typeof l.setName && l.setName(n + "." + a), (r = r || {})[a] = l)
          }
          r && (u ? e.forEach(function(e) {
            Object.defineProperties(e, r)
          }) : Object.defineProperties(e, r))
        }
        return function() {
            function n(n, r) {
              var i = n || {};
              if (r) {
                var o = r.split(".");
                i === t && "WinJS" === o[0] && (i = e, o.splice(0, 1));
                for (var s = 0, u = o.length; s < u; s++) {
                  var a = o[s];
                  i[a] || Object.defineProperty(i, a, {
                    value: {},
                    writable: !1,
                    enumerable: !0,
                    configurable: !0
                  }), i = i[a]
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
            var u = {
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
                  var t, n, i = u.uninitialized;
                  return {
                    setName: function(e) {
                      t = e
                    },
                    get: function() {
                      switch (i) {
                        case u.initialized:
                          return n;
                        case u.uninitialized:
                          i = u.working;
                          try {
                            r("WinJS.Namespace._lazy:" + t + ",StartTM"), n = e()
                          } finally {
                            r("WinJS.Namespace._lazy:" + t + ",StopTM"), i = u.uninitialized
                          }
                          return e = null, i = u.initialized, n;
                        case u.working:
                          throw "Illegal: reentrancy on initialization";
                        default:
                          throw "Illegal"
                      }
                    },
                    set: function(e) {
                      switch (i) {
                        case u.working:
                          throw "Illegal: reentrancy on initialization";
                        default:
                          i = u.initialized, n = e
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
                    u = null;
                  return r && (u = n(t, r), s.push(u)), i(s, o, r || "<ANONYMOUS>"), u
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
                  var u = e.prototype;
                  return r.prototype = Object.create(u), n.markSupportedForProcessing(r), Object.defineProperty(r.prototype, "constructor", {
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
              }), this.addEventListener(e, r.wrapper, !1)), r.userHandler = n) : r && (this.removeEventListener(e, r.wrapper, !1), this[t] = null)
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

        function u(e, t) {
          var n;
          n = t && "object" == typeof t && "function" == typeof t.then ? j : I, e._value = t, e._setState(n)
        }

        function a(e, t, n, r, i, o) {
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
          return a(i ? t : null, i ? null : t, e, o, n, r)
        }

        function l(e, t, n) {
          var r = n._isException,
            i = n._errorId;
          return b(e, i, r), a(r ? t : null, r ? null : t, e, i, n)
        }

        function f(e, t) {
          var n = ++W;
          return b(e, n), a(null, t, e, n)
        }

        function h(e, t) {
          var n = ++W;
          return b(e, n, !0), a(t, null, e, n)
        }

        function p(e, t, n, r) {
          y(e, {
            c: t,
            e: n,
            p: r,
            asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.done")
          })
        }

        function d(e, t, n, r) {
          e._value = t, _(e, t, n, r), e._setState(F)
        }

        function v(t, n) {
          var r = t._value,
            i = t._listeners;
          if (i) {
            t._listeners = null;
            var s, u;
            for (s = 0, u = Array.isArray(i) ? i.length : 1; s < u; s++) {
              var a = 1 === u ? i : i[s],
                c = a.c,
                l = a.promise;
              if (o._traceAsyncOperationCompleted(a.asyncOpID, e.Debug && e.Debug.MS_ASYNC_OP_STATUS_SUCCESS), l) {
                o._traceAsyncCallbackStarting(a.asyncOpID);
                try {
                  l._setCompleteValue(c ? c(r) : r)
                } catch (e) {
                  l._setExceptionValue(e)
                } finally {
                  o._traceAsyncCallbackCompleted()
                }
                l._state !== j && l._listeners && n.push(l)
              } else V.prototype.done.call(t, c)
            }
          }
        }

        function m(t, n) {
          var r = t._value,
            i = t._listeners;
          if (i) {
            t._listeners = null;
            var s, u;
            for (s = 0, u = Array.isArray(i) ? i.length : 1; s < u; s++) {
              var a = 1 === u ? i : i[s],
                l = a.e,
                f = a.promise,
                h = e.Debug && (r && r.name === S ? e.Debug.MS_ASYNC_OP_STATUS_CANCELED : e.Debug.MS_ASYNC_OP_STATUS_ERROR);
              if (o._traceAsyncOperationCompleted(a.asyncOpID, h), f) {
                var p = !1;
                try {
                  l ? (o._traceAsyncCallbackStarting(a.asyncOpID), p = !0, l.handlesOnError || _(f, r, c, t, l), f._setCompleteValue(l(r))) : f._setChainedErrorValue(r, t)
                } catch (e) {
                  f._setExceptionValue(e)
                } finally {
                  p && o._traceAsyncCallbackCompleted()
                }
                f._state !== j && f._listeners && n.push(f)
              } else J.prototype.done.call(t, null, l)
            }
          }
        }

        function _(e, t, n, r, i) {
          if (P._listeners[A]) {
            if (t instanceof Error && t.message === S) return;
            P.dispatchEvent(A, n(e, t, r, i))
          }
        }

        function g(e, t) {
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

        function y(e, t) {
          var n = e._listeners;
          n ? (n = Array.isArray(n) ? n : [n]).push(t) : n = t, e._listeners = n
        }

        function b(e, t, n) {
          e._isException = n || !1, e._errorId = t
        }

        function C(e, t, n, r) {
          e._value = t, _(e, t, n, r), e._setState(q)
        }

        function w(e, t) {
          var n;
          n = t && "object" == typeof t && "function" == typeof t.then ? j : N, e._value = t, e._setState(n)
        }

        function E(e, t, n, r) {
          var i = new z(e);
          return y(e, {
            promise: i,
            c: t,
            e: n,
            p: r,
            asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.then")
          }), i
        }
        e.Debug && (e.Debug.setNonUserCodeExceptions = !0);
        var P = new(n.Class.mix(n.Class.define(null, {}, {
          supportedForProcessing: !1
        }), i.eventMixin));
        P._listeners = {};
        var A = "error",
          S = "Canceled",
          O = !1,
          x = {
            promise: 1,
            thenPromise: 2,
            errorPromise: 4,
            exceptionPromise: 8,
            completePromise: 16
          };
        x.all = x.promise | x.thenPromise | x.errorPromise | x.exceptionPromise | x.completePromise;
        var k, D, j, T, R, L, I, N, F, q, W = 1;
        k = {
          name: "created",
          enter: function(e) {
            e._setState(D)
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
        }, D = {
          name: "working",
          enter: s,
          cancel: function(e) {
            e._setState(R)
          },
          done: p,
          then: E,
          _completed: u,
          _error: d,
          _notify: s,
          _progress: g,
          _setCompleteValue: w,
          _setErrorValue: C
        }, j = {
          name: "waiting",
          enter: function(e) {
            var t = e._value;
            if (t instanceof z && t._state !== q && t._state !== N) y(t, {
              promise: e
            });
            else {
              var n = function(r) {
                t._errorId ? e._chainedError(r, t) : (_(e, r, c, t, n), e._error(r))
              };
              n.handlesOnError = !0, t.then(e._completed.bind(e), n, e._progress.bind(e))
            }
          },
          cancel: function(e) {
            e._setState(T)
          },
          done: p,
          then: E,
          _completed: u,
          _error: d,
          _notify: s,
          _progress: g,
          _setCompleteValue: w,
          _setErrorValue: C
        }, T = {
          name: "waiting_canceled",
          enter: function(e) {
            e._setState(L);
            var t = e._value;
            t.cancel && t.cancel()
          },
          cancel: s,
          done: p,
          then: E,
          _completed: u,
          _error: d,
          _notify: s,
          _progress: g,
          _setCompleteValue: w,
          _setErrorValue: C
        }, R = {
          name: "canceled",
          enter: function(e) {
            e._setState(L), e._cancelAction()
          },
          cancel: s,
          done: p,
          then: E,
          _completed: u,
          _error: d,
          _notify: s,
          _progress: g,
          _setCompleteValue: w,
          _setErrorValue: C
        }, L = {
          name: "canceling",
          enter: function(e) {
            var t = new Error(S);
            t.name = t.message, e._value = t, e._setState(F)
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
        }, I = {
          name: "complete_notify",
          enter: function(e) {
            if (e.done = V.prototype.done, e.then = V.prototype.then, e._listeners)
              for (var t, n = [e]; n.length;)(t = n.shift())._state._notify(t, n);
            e._setState(N)
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
        }, N = {
          name: "success",
          enter: function(e) {
            e.done = V.prototype.done, e.then = V.prototype.then, e._cleanupAction()
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
        }, F = {
          name: "error_notify",
          enter: function(e) {
            if (e.done = J.prototype.done, e.then = J.prototype.then, e._listeners)
              for (var t, n = [e]; n.length;)(t = n.shift())._state._notify(t, n);
            e._setState(q)
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
        }, q = {
          name: "error",
          enter: function(e) {
            e.done = J.prototype.done, e.then = J.prototype.then, e._cleanupAction()
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
        var M, U = n.Class.define(null, {
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
          z = n.Class.derive(U, function(e) {
            O && (!0 === O || O & x.thenPromise) && (this._stack = H._getStack()), this._creator = e, this._setState(k), this._run()
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
          J = n.Class.define(function(e) {
            O && (!0 === O || O & x.errorPromise) && (this._stack = H._getStack()), this._value = e, _(this, e, f)
          }, {
            cancel: function() {},
            done: function(e, t) {
              var n = this._value;
              if (t) try {
                t.handlesOnError || _(null, n, c, this, t);
                var r = t(n);
                return void(r && "object" == typeof r && "function" == typeof r.done && r.done())
              } catch (e) {
                n = e
              }
              n instanceof Error && n.message === S || H._doneHandler(n)
            },
            then: function(e, t) {
              if (!t) return this;
              var n, r = this._value;
              try {
                t.handlesOnError || _(null, r, c, this, t), n = new V(t(r))
              } catch (e) {
                n = e === r ? this : new B(e)
              }
              return n
            }
          }, {
            supportedForProcessing: !1
          }),
          B = n.Class.derive(J, function(e) {
            O && (!0 === O || O & x.exceptionPromise) && (this._stack = H._getStack()), this._value = e, _(this, e, h)
          }, {}, {
            supportedForProcessing: !1
          }),
          V = n.Class.define(function(e) {
            if (O && (!0 === O || O & x.completePromise) && (this._stack = H._getStack()), e && "object" == typeof e && "function" == typeof e.then) {
              var t = new z(null);
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
                H._doneHandler(e)
              }
            },
            then: function(e) {
              try {
                var t = e ? e(this._value) : this._value;
                return t === this._value ? this : new V(t)
              } catch (e) {
                return new B(e)
              }
            }
          }, {
            supportedForProcessing: !1
          }),
          H = n.Class.derive(U, function(e, t) {
            O && (!0 === O || O & x.promise) && (this._stack = H._getStack()), this._oncancel = t, this._setState(k), this._run();
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
                P.dispatchEvent("error", e)
              }
            },
            _cleanupAction: function() {
              this._oncancel = null
            }
          }, {
            addEventListener: function(e, t, n) {
              P.addEventListener(e, t, n)
            },
            any: function(e) {
              return new H(function(t, n) {
                var r = Object.keys(e);
                0 === r.length && t();
                var i = 0;
                r.forEach(function(o) {
                  H.as(e[o]).then(function() {
                    t({
                      key: o,
                      value: e[o]
                    })
                  }, function(s) {
                    s instanceof Error && s.name === S ? ++i === r.length && t(H.cancel) : n({
                      key: o,
                      value: e[o]
                    })
                  })
                })
              }, function() {
                Object.keys(e).forEach(function(t) {
                  var n = H.as(e[t]);
                  "function" == typeof n.cancel && n.cancel()
                })
              })
            },
            as: function(e) {
              return e && "object" == typeof e && "function" == typeof e.then ? e : new V(e)
            },
            cancel: {
              get: function() {
                return M = M || new J(new r(S))
              }
            },
            dispatchEvent: function(e, t) {
              return P.dispatchEvent(e, t)
            },
            is: function(e) {
              return e && "object" == typeof e && "function" == typeof e.then
            },
            join: function(e) {
              return new H(function(t, n, r) {
                var i = Object.keys(e),
                  o = Array.isArray(e) ? [] : {},
                  s = Array.isArray(e) ? [] : {},
                  u = 0,
                  a = i.length,
                  c = function(e) {
                    if (0 == --a) {
                      var u = Object.keys(o).length;
                      if (0 === u) t(s);
                      else {
                        var c = 0;
                        i.forEach(function(e) {
                          var t = o[e];
                          t instanceof Error && t.name === S && c++
                        }), c === u ? t(H.cancel) : n(o)
                      }
                    } else r({
                      Key: e,
                      Done: !0
                    })
                  };
                i.forEach(function(t) {
                  var n = e[t];
                  void 0 === n ? u++ : H.then(n, function(e) {
                    s[t] = e, c(t)
                  }, function(e) {
                    o[t] = e, c(t)
                  })
                }), 0 !== (a -= u) || t(s)
              }, function() {
                Object.keys(e).forEach(function(t) {
                  var n = H.as(e[t]);
                  "function" == typeof n.cancel && n.cancel()
                })
              })
            },
            removeEventListener: function(e, t, n) {
              P.removeEventListener(e, t, n)
            },
            supportedForProcessing: !1,
            then: function(e, t, n, r) {
              return H.as(e).then(t, n, r)
            },
            thenEach: function(e, t, n, r) {
              var i = Array.isArray(e) ? [] : {};
              return Object.keys(e).forEach(function(o) {
                i[o] = H.as(e[o]).then(t, n, r)
              }), H.join(i)
            },
            timeout: function(n, r) {
              var i = function(n) {
                var r;
                return new H(function(i) {
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
              return new V(e)
            },
            wrapError: function(e) {
              return new J(e)
            },
            _veryExpensiveTagWithStack: {
              get: function() {
                return O
              },
              set: function(e) {
                O = e
              }
            },
            _veryExpensiveTagWithStack_tag: x,
            _getStack: function() {
              if (e.Debug && e.Debug.debuggerEnabled) try {
                throw new Error
              } catch (e) {
                return e.stack
              }
            },
            _cancelBlocker: function(e, t) {
              if (!H.is(e)) return H.wrap(e);
              var n, r, i = new H(function(e, t) {
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
        return Object.defineProperties(H, i.createEventProperties(A)), H._doneHandler = function(e) {
          t._setImmediate(function() {
            throw e
          })
        }, {
          PromiseStateMachine: U,
          Promise: H,
          state_created: k
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
    }(), define(e[2], t([34]), function(e) {
      "use strict";
      return {
        Promise: e.Promise,
        TPromise: e.Promise,
        PPromise: e.Promise
      }
    }), define(e[10], t([1, 0, 3, 5, 2]), function(e, t, n, r, i) {
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
      var u = {};
      i.TPromise.addEventListener("error", function(e) {
        var t = e.detail,
          n = t.id;
        t.parent ? t.handler && u && delete u[n] : (u[n] = t, 1 === Object.keys(u).length && setTimeout(function() {
          var e = u;
          u = {}, Object.keys(e).forEach(function(t) {
            var n = e[t];
            n.exception ? o(n.exception) : n.error && o(n.error), console.log("WARNING: Promise with no error callback:" + n.id), console.log(n), n.exception && console.log(n.exception.stack)
          })
        }, 0))
      });
      var a = function() {
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
        }, e.prototype.getUnexpectedErrorHandler = function() {
          return this.unexpectedErrorHandler
        }, e.prototype.onUnexpectedError = function(e) {
          this.unexpectedErrorHandler(e), this.emit(e)
        }, e.prototype.onUnexpectedExternalError = function(e) {
          this.unexpectedErrorHandler(e)
        }, e
      }();
      t.ErrorHandler = a, t.errorHandler = new a, t.setUnexpectedErrorHandler = function(e) {
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
    }), define(e[6], t([1, 0, 7, 2, 9, 10, 13]), function(e, t, n, r, i, o, s) {
      "use strict";

      function u(e) {
        return function(t, n, r) {
          void 0 === n && (n = null);
          var i = e(function(e) {
            return i.dispose(), t.call(n, e)
          }, null, r);
          return i
        }
      }

      function a(e, t) {
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
              var u = t._listeners.push(r ? [n, r] : n);
              o && t._options && t._options.onFirstListenerDidAdd && t._options.onFirstListenerDidAdd(t), t._options && t._options.onListenerDidAdd && t._options.onListenerDidAdd(t, n, r);
              var a;
              return a = {
                dispose: function() {
                  a.dispose = e._noop, t._disposed || (u(),
                    t._options && t._options.onLastListenerRemove && t._listeners.isEmpty() && t._options.onLastListenerRemove(t))
                }
              }, Array.isArray(i) && i.push(a), a
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
        },
        t.fromPromise = function(e) {
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
        }, t.once = u, t.anyEvent = function() {
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
            u = 0,
            a = new h({
              onFirstListenerAdd: function() {
                i = e(function(e) {
                  u++, o = t(o, e), r && !s && a.fire(o), clearTimeout(s), s = setTimeout(function() {
                    var e = o;
                    o = void 0, s = void 0, (!r || u > 1) && a.fire(e), u = 0
                  }, n)
                })
              },
              onLastListenerRemove: function() {
                i.dispose()
              }
            });
          return a.event
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
      t.EventBufferer = d, t.mapEvent = a, t.forEach = c, t.filterEvent = l;
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
          return new e(a(this._event, t))
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
        return a(u(e), function(e) {
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
              }),
              n = null
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
    }), define(e[17], t([1, 0, 6]), function(e, t, n) {
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
            }),
            Object.defineProperty(e.prototype, "onCancellationRequested", {
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
              return this._token || (this._token = new o), this._token
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
    }), define(e[15], t([1, 0, 10, 3, 2, 17, 7, 6]), function(e, t, r, i, o, s, u, a) {
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
            n.completionPromise = null,
              n.onSuccess = null;
            var e = n.task;
            return n.task = null, e()
          })), this.timeout = setTimeout(function() {
            n.timeout = null, n.onSuccess(null)
          }, t), this.completionPromise
        }, e.prototype.isTriggered = function() {
          return null !== this.timeout
        }, e.prototype.cancel = function() {
          this.cancelTimeout(), this.completionPromise && (this.completionPromise.cancel(), this.completionPromise = null)
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
      var _ = function(e) {
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
      t.ShallowCancelThenPromise = _, t.timeout = function(e) {
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
      var g = function() {
        function e(e) {
          this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onFinished = new a.Emitter
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
      t.Limiter = g;
      var y = function(e) {
        function t() {
          return e.call(this, 1) || this
        }
        return n(t, e), t
      }(g);
      t.Queue = y;
      var b = function() {
        function e() {
          this.queues = Object.create(null)
        }
        return e.prototype.queueFor = function(e) {
          var t = this,
            n = e.toString();
          if (!this.queues[n]) {
            var r = new y;
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
      var C = function(e) {
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
      }(u.Disposable);
      t.TimeoutTimer = C;
      var w = function(e) {
        function t() {
          var t = e.call(this) || this;
          return t._token = -1, t
        }
        return n(t, e), t.prototype.dispose = function() {
            this.cancel(), e.prototype.dispose.call(this)
          },
          t.prototype.cancel = function() {
            -1 !== this._token && (i.clearInterval(this._token), this._token = -1)
          }, t.prototype.cancelAndSet = function(e, t) {
            this.cancel(), this._token = i.setInterval(function() {
              e()
            }, t)
          }, t
      }(u.Disposable);
      t.IntervalTimer = w;
      var E = function() {
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
      t.RunOnceScheduler = E, t.nfcall = function(e) {
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
      var P = function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.throttle = function(e) {
          var t = this;
          return this.suspended = !0, l(e, function() {
            return t.resume()
          })
        }, t.prototype.fire = function(t) {
          return this.suspended ? (this.lastEvent = t, void(this.hasLastEvent = !0)) : e.prototype.fire.call(this, t)
        }, t.prototype.resume = function() {
          this.suspended = !1, this.hasLastEvent && this.fire(this.lastEvent), this.hasLastEvent = !1, this.lastEvent = void 0
        }, t
      }(a.Emitter);
      t.ThrottledEmitter = P
    }), define(e[19], t([1, 0, 4]), function(e, t, n) {
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
          u = "string" == typeof i[0] && 1 === i.length,
          a = s && s.split("\n")[0];
        a && (a = "(" + a.trim() + ")");
        var c = [];
        c = "string" == typeof i[0] ? a && u ? ["%c[" + t + "] %c" + i[0] + " %c" + a, o("blue"), o("black"), o("grey")] : ["%c[" + t + "] %c" + i[0], o("blue"), o("black")].concat(i.slice(1)) : ["%c[" + t + "]%", o("blue")].concat(i), a && !u && c.push(a), console[e.severity].apply(console, c)
      }
    }), define(e[20], t([1, 0, 33]), function(e, t, n) {
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
                r = n.charCodeAt(o), (13 === s && 10 === r || 10 === s && 13 === r) && o++
              }
              i = o
            } else o++;
          return this.remaining = i < n.length ? n.substr(i) : null, t
        }, e.prototype.end = function() {
          return this.remaining
        }, e
      }();
      t.LineDecoder = r
    }), define(e[22], t([1, 0, 23, 32, 31, 11, 4]), function(e, t, n, r, i, o, s) {
      "use strict";

      function u() {
        var e = "vscode-" + function(e) {
          for (var t = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], n = "", r = 0; r < e; r++) n += t[Math.floor(t.length * Math.random())];
          return n
        }(40);
        return "win32" === process.platform ? "\\\\.\\pipe\\" + e + "-sock" : n.join(r.tmpdir(), e + ".sock")
      }

      function a(t, n, r, a) {
        var c, l = !1,
          f = function(e) {
            l || (l = !0, a(e, null))
          },
          h = u(),
          p = u(),
          d = u(),
          v = function(e, t, n, r) {
            var i = {};
            for (var o in e) i[o] = e[o];
            return i.STDIN_PIPE_NAME = t, i.STDOUT_PIPE_NAME = n, i.STDERR_PIPE_NAME = r, i.ELECTRON_RUN_AS_NODE = "1", i.ELECTRON_NO_ASAR = "1", i
          }(r.env || process.env, h, p, d),
          m = i.createServer(function(e) {
            c.stderr = e
          });
        m.listen(d);
        var _ = i.createServer(function(e) {
          e.once("data", function(t) {
            c.stdin = i.connect(h), c.stdout = e,
              function(e) {
                l || (l = !0, a(null, e))
              }(c)
          })
        });
        _.listen(p);
        var g = !1,
          y = function() {
            g || (g = !0, process.removeListener("exit", y), _.close(), m.close())
          },
          b = s.default.parse(e.toUrl("./stdForkStart.js")).fsPath;
        (c = o.fork(b, [t].concat(n), {
          silent: !0,
          cwd: r.cwd,
          env: v,
          execArgv: r.execArgv
        })).once("error", function(e) {
          y(), f(e)
        }), c.once("exit", function(e) {
          y(), f(e)
        }), process.once("exit", y)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.fork = a
    }), define(e[27], t([1, 0, 2, 7, 6]), function(e, t, n, r, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o;
      ! function(e) {
        e[e.RequestCommon = 0] = "RequestCommon", e[e.RequestCancel = 1] = "RequestCancel", e[e.ResponseInitialize = 2] = "ResponseInitialize",
          e[e.ResponseSuccess = 3] = "ResponseSuccess", e[e.ResponseProgress = 4] = "ResponseProgress", e[e.ResponseError = 5] = "ResponseError", e[e.ResponseErrorObj = 6] = "ResponseErrorObj"
      }(o || (o = {}));
      var s;
      ! function(e) {
        e[e.Uninitialized = 0] = "Uninitialized", e[e.Idle = 1] = "Idle"
      }(s || (s = {}));
      var u = function() {
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
          var u = e.id,
            a = t.then(function(t) {
              i.protocol.send({
                id: u,
                data: t,
                type: o.ResponseSuccess
              }), delete i.activeRequests[e.id]
            }, function(t) {
              t instanceof Error ? i.protocol.send({
                id: u,
                data: {
                  message: t.message,
                  name: t.name,
                  stack: t.stack ? t.stack.split("\n") : void 0
                },
                type: o.ResponseError
              }) : i.protocol.send({
                id: u,
                data: t,
                type: o.ResponseErrorObj
              }), delete i.activeRequests[e.id]
            }, function(e) {
              i.protocol.send({
                id: u,
                data: e,
                type: o.ResponseProgress
              })
            });
          this.activeRequests[e.id] = r.toDisposable(function() {
            return a.cancel()
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
      t.ChannelServer = u;
      var a = function() {
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
            u = this.state === s.Uninitialized ? this.bufferRequest(i) : this.doRequest(i);
          return this.activeRequests.push(u), u.then(null, function(e) {
            return null
          }).done(function() {
            return r.activeRequests = r.activeRequests.filter(function(e) {
              return e !== u
            })
          }), u
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
                  var u = new Error(e.data.message);
                  u.stack = e.data.stack, u.name = e.data.name, i(u);
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
        }, e.prototype.dispose = function() {
          this.protocolListener.dispose(), this.protocolListener = null, this.activeRequests.forEach(function(e) {
            return e.cancel()
          }), this.activeRequests = []
        }, e
      }();
      t.ChannelClient = a;
      var c = function() {
        function e(e) {
          var t = this;
          this.channels = Object.create(null), this.channelClients = Object.create(null), this.onClientAdded = new i.Emitter,
            e(function(e) {
              var n = e.protocol,
                r = e.onDidClientDisconnect;
              i.once(n.onMessage)(function(e) {
                var i = new u(n),
                  o = new a(n);
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
          e.send(t), this.channelClient = new a(e), this.channelServer = new u(e)
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
    }), define(e[28], t([29, 30]), function(e, t) {
      return e.create("vs/base/node/processes", t)
    }), define(e[25], t([1, 0, 23, 11, 22, 28, 2, 5, 4, 8, 12, 3, 20, 16]), function(e, t, r, i, o, s, u, a, c, l, f, h, p, d) {
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
      var _ = i.exec,
        g = i.spawn;
      t.Source = d.Source, t.TerminateResponseCode = d.TerminateResponseCode, t.terminateProcess = v, t.getWindowsShell = m;
      var y = function() {
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
          return -1 !== n && (t = t.substring(n + 1)),
            e.WellKnowCommands[t] ? t : "other"
        }, e.prototype.start = function() {
          var e = this;
          return h.isWindows && (this.options && this.options.cwd && f.isUNC(this.options.cwd) || !this.options && !this.options.cwd && f.isUNC(process.cwd())) ? u.TPromise.wrapError(new Error(s.localize(0, null))) : this.useExec().then(function(t) {
            var n, r, i, s = new u.PPromise(function(e, t, o) {
              n = e, r = t, i = o
            });
            if (t) {
              var c = e.cmd;
              e.args && (c = c + " " + e.args.join(" ")), e.childProcess = _(c, e.options, function(t, o, s) {
                e.childProcess = null;
                var u = t;
                u && u.killed ? r({
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
                  a.isNumber(t) && (o.cmdCode = t), n(o)
                };
              if (e.shell && h.isWindows) {
                var d = l.deepClone(e.options);
                d.windowsVerbatimArguments = !0, d.detached = !1;
                var v = !1,
                  y = !1,
                  b = [],
                  C = e.ensureQuotes(e.cmd);
                b.push(C.value), v = C.quoted, e.args && e.args.forEach(function(t) {
                  C = e.ensureQuotes(t), b.push(C.value), y = y && C.quoted
                });
                var w = ["/s", "/c"];
                v ? y ? w.push('"' + b.join(" ") + '"') : b.length > 1 ? w.push('"' + b[0] + '" ' + b.slice(1).join(" ")) : w.push('"' + b[0] + '"') : w.push(b.join(" ")), f = g(m(), w, d)
              } else e.cmd ? f = g(e.cmd, e.args, e.options) : e.module && (e.childProcessPromise = new u.TPromise(function(t, s, u) {
                o.fork(e.module, e.args, e.options, function(o, u) {
                  if (o) return s(o), void r({
                    terminated: e.terminateRequested,
                    error: o
                  });
                  e.childProcess = u, e.childProcess.on("close", p), e.handleSpawn(u, n, i, r, !1), t(u)
                })
              }));
              f && (e.childProcess = f, e.childProcessPromise = u.TPromise.as(f), f.on("error", function(t) {
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
          }) : u.TPromise.as({
            success: !0
          })
        }, e.prototype.useExec = function() {
          var e = this;
          return new u.TPromise(function(t, n, r) {
            e.shell && h.isWindows || t(!1);
            var i = g(m(), ["/s", "/c"]);
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
      t.AbstractProcess = y;
      var b = function(e) {
        function t(t, n, r, i) {
          return e.call(this, t, n, r, i) || this
        }
        return n(t, e), t.prototype.handleExec = function(e, t, n, r, i) {
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
      }(y);
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
    }), define(e[24], t([1, 0, 11, 2, 15, 8, 6, 25, 27, 19]), function(e, t, r, i, o, s, u, a, c, l) {
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
            onMessage: u.fromNodeEventEmitter(process, "message", function(e) {
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
              }), this.options && this.options.env && (n.env = s.assign(n.env, this.options.env)), this.options && this.options.freshExecArgv && (n.execArgv = []), this.options && "number" == typeof this.options.debug && (n.execArgv = ["--nolazy", "--inspect=" + this.options.debug]), this.options && "number" == typeof this.options.debugBrk && (n.execArgv = ["--nolazy", "--inspect-brk=" + this.options.debugBrk]), this.child = r.fork(this.modulePath, t, n);
              var i = new u.Emitter;
              u.fromNodeEventEmitter(this.child, "message", function(e) {
                return e
              })(function(t) {
                if (l.isRemoteConsoleLog(t)) return l.log(t, "IPC Library: " + e.options.serverName), null;
                i.fire(t)
              });
              var o = this.options.useQueue ? a.createQueuedSender(this.child) : this.child,
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
          this.disposeDelayer.cancel(),
            this.disposeDelayer = null, this.disposeClient(), this.activeRequests = null
        }, e
      }();
      t.Client = h
    }), define(e[21], t([1, 0, 2]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
        function e(e) {
          this.appender = e
        }
        return e.prototype.call = function(e, t) {
          var r = t.eventName,
            i = t.data;
          return this.appender.log(r, i), n.TPromise.as(null)
        }, e
      }();
      t.TelemetryAppenderChannel = r;
      var i = function() {
        function e(e) {
          this.channel = e
        }
        return e.prototype.log = function(e, t) {
          return this.channel.call("log", {
            eventName: e,
            data: t
          }).done(null, function(e) {
            return "Failed to log telemetry: " + console.warn(e)
          }), n.TPromise.as(null)
        }, e.prototype.dispose = function() {}, e
      }();
      t.TelemetryAppenderClient = i
    }), define(e[14], t([1, 0, 35, 5, 8, 2]), function(e, t, n, r, i, o) {
      "use strict";

      function s(e) {
        !1 === u && (n.setup("2588e01f-f6c9-4cd6-a348-143741f8d702").setAutoCollectConsole(!1).setAutoCollectExceptions(!1).setAutoCollectPerformance(!1).setAutoCollectRequests(!1), u = !0);
        var t = n.getClient(e);
        return t.channel.setOfflineMode(!0),
          t.context.tags[t.context.keys.deviceMachineName] = "", 0 === e.indexOf("AIF-") && (t.config.endpointUrl = "https://vortex.data.microsoft.com/collect/v1"), t
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var u = !1,
        a = function() {
          function e(e, t, n) {
            this._eventPrefix = e, this._defaultData = t, this._defaultData || (this._defaultData = Object.create(null)), "string" == typeof n ? this._aiClient = s(n) : "function" == typeof n && (this._aiClient = n())
          }
          return e._getData = function(t) {
            var n = Object.create(null),
              r = Object.create(null),
              i = Object.create(null);
            e._flaten(t, i);
            for (var o in i) {
              var s = i[o = o.length > 150 ? o.substr(o.length - 149) : o];
              "number" == typeof s ? r[o] = s : "boolean" == typeof s ? r[o] = s ? 1 : 0 : "string" == typeof s ? n[o] = s.substring(0, 1023) : void 0 !== s && null !== s && (n[o] = s)
            }
            return {
              properties: n,
              measurements: r
            }
          }, e._flaten = function(t, n, o, s) {
            if (void 0 === o && (o = 0), t)
              for (var u = 0, a = Object.getOwnPropertyNames(t); u < a.length; u++) {
                var c = a[u],
                  l = t[c],
                  f = s ? s + c : c;
                Array.isArray(l) ? n[f] = i.safeStringify(l) : l instanceof Date ? n[f] = l.toISOString() : r.isObject(l) ? o < 2 ? e._flaten(l, n, o + 1, f + ".") : n[f] = i.safeStringify(l) : n[f] = l
              }
          }, e.prototype.log = function(t, n) {
            if (this._aiClient) {
              n = i.mixin(n, this._defaultData);
              var r = e._getData(n),
                o = r.properties,
                s = r.measurements;
              this._aiClient.trackEvent(this._eventPrefix + "/" + t, o, s)
            }
          }, e.prototype.dispose = function() {
            var e = this;
            if (this._aiClient) return new o.TPromise(function(t) {
              e._aiClient.sendPendingData(function() {
                e._aiClient = void 0, t(void 0)
              })
            })
          }, e
        }();
      t.AppInsightsAppender = a
    }), define(e[36], t([1, 0, 24, 14, 21]), function(e, t, n, r, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = new r.AppInsightsAppender(process.argv[2], JSON.parse(process.argv[3]), process.argv[4]);
      process.once("exit", function() {
        return o.dispose()
      });
      var s = new i.TelemetryAppenderChannel(o);
      (new n.Server).registerChannel("telemetryAppender", s)
    })
}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\workbench\parts\debug\node\telemetryApp.js.map