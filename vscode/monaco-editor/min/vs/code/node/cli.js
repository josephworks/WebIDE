/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function() {
  var e = ["exports", "require", "vs/base/common/winjs.base", "vs/base/common/platform", "path", "vs/base/common/event", "vs/base/common/uri", "fs", "vs/base/common/types", "vs/base/common/async", "vs/base/common/lifecycle", "vs/base/node/extfs", "vs/base/common/functional", "vs/base/common/errors", "os", "vs/platform/node/product", "assert", "vs/base/common/cancellation", "vs/base/common/map", "vs/base/node/flow", "vs/base/common/strings", "vs/base/common/uuid", "vs/base/common/linkedList", "vs/platform/environment/node/argv", "vs/base/node/pfs", "vs/base/common/arrays", "vs/base/node/ports", "vs/base/common/objects", "vs/base/node/stream", "vs/base/node/encoding", "iconv-lite", "child_process", "vs/nls!vs/platform/environment/node/argv", "vs/platform/node/package", "vs/nls!vs/code/node/cli", "vs/nls", "net", "vs/base/common/winjs.base.raw", "minimist", "vs/code/node/cli"],
    t = function(t) {
      for (var n = [], r = 0, i = t.length; r < i; r++) n[r] = e[t[r]];
      return n
    };
  define(e[12], t([1, 0]), function(e, t) {
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
  }), define(e[10], t([1, 0, 12]), function(e, t, n) {
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
  }), define(e[22], t([1, 0]), function(e, t) {
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
      e[e.Unknown = 0] = "Unknown",
        e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled"
    }(t.AccessibilitySupport || (t.AccessibilitySupport = {}))
  }), define(e[8], t([1, 0]), function(e, t) {
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
  }), define(e[27], t([1, 0, 8]), function(e, t, n) {
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
  define(e[6], t([1, 0, 3]), function(e, t, r) {
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
          } - 1 === (m = (s = s.toLowerCase()).indexOf(":")) ? r.push(n(s)) : r.push(n(s.substr(0, m)), s.substr(m))
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
            return void 0 === t ? t = this.scheme : null === t && (t = l), void 0 === n ? n = this.authority : null === n && (n = l), void 0 === r ? r = this.path : null === r && (r = l), void 0 === i ? i = this.query : null === i && (i = l), void 0 === o ? o = this.fragment : null === o && (o = l), t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new _(t, n, r, i, o)
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
          }),
          t.prototype.toString = function(e) {
            return void 0 === e && (e = !1), e ? s(this, !0) : (this._formatted || (this._formatted = s(this, !1)), this._formatted)
          }, t
      }(m)
    }), define(e[18], t([1, 0, 6]), function(e, t, r) {
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
            },
            e.forStrings = function() {
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
          this._map.clear(), this._head = void 0,
            this._tail = void 0, this._size = 0
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
    }), define(e[20], t([1, 0, 18]), function(e, t, n) {
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
      }, t.canNormalize = "function" == typeof "".normalize;
      var m = new n.LRUCache(1e4);
      t.normalizeNFC = function(e) {
        return s(e, "NFC", m)
      };
      var _ = new n.LRUCache(1e4);
      t.normalizeNFD = function(e) {
        return s(e, "NFD", _)
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
      var g = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
      t.containsRTL = function(e) {
        return g.test(e)
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
      var E = /\x1B\x5B[12]?K/g,
        x = /\x1b\[\d+m/g,
        P = /\x1b\[0?m/g;
      t.removeAnsiEscapeCodes = function(e) {
          return e && (e = (e = (e = e.replace(E, "")).replace(x, "")).replace(P, "")), e
        }, t.UTF8_BOM_CHARACTER = String.fromCharCode(65279), t.startsWithUTF8BOM = d, t.stripUTF8BOM = function(e) {
          return d(e) ? e.substr(1) : e
        }, t.safeBtoa = function(e) {
          return btoa(encodeURIComponent(e))
        }, t.repeat = function(e, t) {
          for (var n = "", r = 0; r < t; r++) n += e;
          return n
        },
        t.fuzzyContains = function(e, t) {
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
    }), define(e[21], t([1, 0]), function(e, t) {
      "use strict";

      function r() {
        return new s
      }

      function i(e) {
        return u.test(e)
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
      var u = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
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

        function u(e, t) {
          var n;
          n = t && "object" == typeof t && "function" == typeof t.then ? D : N, e._value = t, e._setState(n)
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
          g(e, {
            c: t,
            e: n,
            p: r,
            asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.done")
          })
        }

        function d(e, t, n, r) {
          e._value = t, _(e, t, n, r), e._setState(M)
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
                l._state !== D && l._listeners && n.push(l)
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
                  l ? (o._traceAsyncCallbackStarting(a.asyncOpID), p = !0, l.handlesOnError || _(f, r, c, t, l),
                    f._setCompleteValue(l(r))) : f._setChainedErrorValue(r, t)
                } catch (e) {
                  f._setExceptionValue(e)
                } finally {
                  p && o._traceAsyncCallbackCompleted()
                }
                f._state !== D && f._listeners && n.push(f)
              } else B.prototype.done.call(t, null, l)
            }
          }
        }

        function _(e, t, n, r, i) {
          if (P._listeners[C]) {
            if (t instanceof Error && t.message === S) return;
            P.dispatchEvent(C, n(e, t, r, i))
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

        function g(e, t) {
          var n = e._listeners;
          n ? (n = Array.isArray(n) ? n : [n]).push(t) : n = t, e._listeners = n
        }

        function b(e, t, n) {
          e._isException = n || !1, e._errorId = t
        }

        function w(e, t, n, r) {
          e._value = t, _(e, t, n, r), e._setState(z)
        }

        function E(e, t) {
          var n;
          n = t && "object" == typeof t && "function" == typeof t.then ? D : I, e._value = t, e._setState(n)
        }

        function x(e, t, n, r) {
          var i = new H(e);
          return g(e, {
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
        var C = "error",
          S = "Canceled",
          k = !1,
          O = {
            promise: 1,
            thenPromise: 2,
            errorPromise: 4,
            exceptionPromise: 8,
            completePromise: 16
          };
        O.all = O.promise | O.thenPromise | O.errorPromise | O.exceptionPromise | O.completePromise;
        var T, A, D, j, F, L, N, I, M, z, W = 1;
        T = {
          name: "created",
          enter: function(e) {
            e._setState(A)
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
        }, A = {
          name: "working",
          enter: s,
          cancel: function(e) {
            e._setState(F)
          },
          done: p,
          then: x,
          _completed: u,
          _error: d,
          _notify: s,
          _progress: y,
          _setCompleteValue: E,
          _setErrorValue: w
        }, D = {
          name: "waiting",
          enter: function(e) {
            var t = e._value;
            if (t instanceof H && t._state !== z && t._state !== I) g(t, {
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
            e._setState(j)
          },
          done: p,
          then: x,
          _completed: u,
          _error: d,
          _notify: s,
          _progress: y,
          _setCompleteValue: E,
          _setErrorValue: w
        }, j = {
          name: "waiting_canceled",
          enter: function(e) {
            e._setState(L);
            var t = e._value;
            t.cancel && t.cancel()
          },
          cancel: s,
          done: p,
          then: x,
          _completed: u,
          _error: d,
          _notify: s,
          _progress: y,
          _setCompleteValue: E,
          _setErrorValue: w
        }, F = {
          name: "canceled",
          enter: function(e) {
            e._setState(L), e._cancelAction()
          },
          cancel: s,
          done: p,
          then: x,
          _completed: u,
          _error: d,
          _notify: s,
          _progress: y,
          _setCompleteValue: E,
          _setErrorValue: w
        }, L = {
          name: "canceling",
          enter: function(e) {
            var t = new Error(S);
            t.name = t.message, e._value = t, e._setState(M)
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
        }, N = {
          name: "complete_notify",
          enter: function(e) {
            if (e.done = V.prototype.done, e.then = V.prototype.then, e._listeners)
              for (var t, n = [e]; n.length;)(t = n.shift())._state._notify(t, n);
            e._setState(I)
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
        }, M = {
          name: "error_notify",
          enter: function(e) {
            if (e.done = B.prototype.done, e.then = B.prototype.then, e._listeners)
              for (var t, n = [e]; n.length;)(t = n.shift())._state._notify(t, n);
            e._setState(z)
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
        }, z = {
          name: "error",
          enter: function(e) {
            e.done = B.prototype.done, e.then = B.prototype.then, e._cleanupAction()
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
        var U, R = n.Class.define(null, {
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
          H = n.Class.derive(R, function(e) {
            k && (!0 === k || k & O.thenPromise) && (this._stack = J._getStack()), this._creator = e, this._setState(T), this._run()
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
          B = n.Class.define(function(e) {
            k && (!0 === k || k & O.errorPromise) && (this._stack = J._getStack()), this._value = e, _(this, e, f)
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
              n instanceof Error && n.message === S || J._doneHandler(n)
            },
            then: function(e, t) {
              if (!t) return this;
              var n, r = this._value;
              try {
                t.handlesOnError || _(null, r, c, this, t), n = new V(t(r))
              } catch (e) {
                n = e === r ? this : new q(e)
              }
              return n
            }
          }, {
            supportedForProcessing: !1
          }),
          q = n.Class.derive(B, function(e) {
            k && (!0 === k || k & O.exceptionPromise) && (this._stack = J._getStack()), this._value = e, _(this, e, h)
          }, {}, {
            supportedForProcessing: !1
          }),
          V = n.Class.define(function(e) {
            if (k && (!0 === k || k & O.completePromise) && (this._stack = J._getStack()), e && "object" == typeof e && "function" == typeof e.then) {
              var t = new H(null);
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
                J._doneHandler(e)
              }
            },
            then: function(e) {
              try {
                var t = e ? e(this._value) : this._value;
                return t === this._value ? this : new V(t)
              } catch (e) {
                return new q(e)
              }
            }
          }, {
            supportedForProcessing: !1
          }),
          J = n.Class.derive(R, function(e, t) {
            k && (!0 === k || k & O.promise) && (this._stack = J._getStack()), this._oncancel = t, this._setState(T), this._run();
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
              return new J(function(t, n) {
                var r = Object.keys(e);
                0 === r.length && t();
                var i = 0;
                r.forEach(function(o) {
                  J.as(e[o]).then(function() {
                    t({
                      key: o,
                      value: e[o]
                    })
                  }, function(s) {
                    s instanceof Error && s.name === S ? ++i === r.length && t(J.cancel) : n({
                      key: o,
                      value: e[o]
                    })
                  })
                })
              }, function() {
                Object.keys(e).forEach(function(t) {
                  var n = J.as(e[t]);
                  "function" == typeof n.cancel && n.cancel()
                })
              })
            },
            as: function(e) {
              return e && "object" == typeof e && "function" == typeof e.then ? e : new V(e)
            },
            cancel: {
              get: function() {
                return U = U || new B(new r(S))
              }
            },
            dispatchEvent: function(e, t) {
              return P.dispatchEvent(e, t)
            },
            is: function(e) {
              return e && "object" == typeof e && "function" == typeof e.then
            },
            join: function(e) {
              return new J(function(t, n, r) {
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
                        }), c === u ? t(J.cancel) : n(o)
                      }
                    } else r({
                      Key: e,
                      Done: !0
                    })
                  };
                i.forEach(function(t) {
                  var n = e[t];
                  void 0 === n ? u++ : J.then(n, function(e) {
                    s[t] = e, c(t)
                  }, function(e) {
                    o[t] = e, c(t)
                  })
                }), 0 !== (a -= u) || t(s)
              }, function() {
                Object.keys(e).forEach(function(t) {
                  var n = J.as(e[t]);
                  "function" == typeof n.cancel && n.cancel()
                })
              })
            },
            removeEventListener: function(e, t, n) {
              P.removeEventListener(e, t, n)
            },
            supportedForProcessing: !1,
            then: function(e, t, n, r) {
              return J.as(e).then(t, n, r)
            },
            thenEach: function(e, t, n, r) {
              var i = Array.isArray(e) ? [] : {};
              return Object.keys(e).forEach(function(o) {
                i[o] = J.as(e[o]).then(t, n, r)
              }), J.join(i)
            },
            timeout: function(n, r) {
              var i = function(n) {
                var r;
                return new J(function(i) {
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
              return new B(e)
            },
            _veryExpensiveTagWithStack: {
              get: function() {
                return k
              },
              set: function(e) {
                k = e
              }
            },
            _veryExpensiveTagWithStack_tag: O,
            _getStack: function() {
              if (e.Debug && e.Debug.debuggerEnabled) try {
                throw new Error
              } catch (e) {
                return e.stack
              }
            },
            _cancelBlocker: function(e, t) {
              if (!J.is(e)) return J.wrap(e);
              var n, r, i = new J(function(e, t) {
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
        return Object.defineProperties(J, i.createEventProperties(C)), J._doneHandler = function(e) {
          t._setImmediate(function() {
            throw e
          })
        }, {
          PromiseStateMachine: R,
          Promise: J,
          state_created: T
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
    }(), define(e[2], t([37]), function(e) {
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
            a(r.next(e))
          } catch (e) {
            o(e)
          }
        }

        function u(e) {
          try {
            a(r.throw(e))
          } catch (e) {
            o(e)
          }
        }

        function a(e) {
          e.done ? i(e.value) : new n(function(t) {
            t(e.value)
          }).then(s, u)
        }
        a((r = r.apply(e, t || [])).next())
      })
    },
    i = this && this.__generator || function(e, t) {
      function n(n) {
        return function(s) {
          return function(n) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; u;) try {
              if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
              switch (i = 0, o && (n = [0, o.value]), n[0]) {
                case 0:
                case 1:
                  o = n;
                  break;
                case 4:
                  return u.label++, {
                    value: n[1],
                    done: !1
                  };
                case 5:
                  u.label++, i = n[1], n = [0];
                  continue;
                case 7:
                  n = u.ops.pop(), u.trys.pop();
                  continue;
                default:
                  if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                  }
                  if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    u.label = n[1];
                    break
                  }
                  if (6 === n[0] && u.label < o[1]) {
                    u.label = o[1], o = n;
                    break
                  }
                  if (o && u.label < o[2]) {
                    u.label = o[2], u.ops.push(n);
                    break
                  }
                  o[2] && u.ops.pop(), u.trys.pop();
                  continue
              }
              n = t.call(e, u)
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
      var r, i, o, s, u = {
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
  define(e[25], t([1, 0, 2]), function(e, t, n) {
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
      return u(e, t), e
    }

    function u(e, t) {
      if (!(e.length <= 1)) {
        var n = e.length / 2 | 0,
          r = e.slice(0, n),
          i = e.slice(n);
        u(r, t), u(i, t);
        for (var o = 0, s = 0, a = 0; o < r.length && s < i.length;) {
          var c = t(r[o], i[s]);
          e[a++] = c <= 0 ? r[o++] : i[s++]
        }
        for (; o < r.length;) e[a++] = r[o++];
        for (; s < i.length;) e[a++] = i[s++]
      }
    }

    function a(e, t, n) {
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
        var u = e[o],
          a = t[s],
          c = n(u, a);
        0 === c ? (o += 1, s += 1) : c < 0 ? (r(o, 1, []), o += 1) : c > 0 && (r(o, 0, [a]), s += 1)
      }
      return i
    }

    function c(e, t, n, r, i) {
      for (var s = function(i) {
          var s = e[r];
          if (t(s, n[i - 1]) < 0) {
            n.pop();
            var u = o(n, function(e) {
              return t(s, e) < 0
            });
            n.splice(u, 0, s)
          }
        }, u = n.length; r < i; r++) s(u)
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
        var u = o[i];
        n && 0 === t(n[0], u) ? n.push(u) : (n = [u], r.push(n))
      }
      return r
    }, t.sortedDiff = a, t.delta = function(e, t, n) {
      for (var r = [], i = [], o = 0, s = a(e, t, n); o < s.length; o++) {
        var u = s[o];
        r.push.apply(r, e.slice(u.start, u.start + u.deleteCount)), i.push.apply(i, u.toInsert)
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
      var u = this;
      if (0 === o) return n.TPromise.as([]);
      var a = !1;
      return new n.TPromise(function(n, l) {
        r(u, void 0, void 0, function() {
          var n, r, u, l;
          return i(this, function(i) {
            switch (i.label) {
              case 0:
                n = e.length, r = e.slice(0, o).sort(t), u = o, l = Math.min(o + s, n), i.label = 1;
              case 1:
                return u < n ? u > o ? [4, new Promise(function(e) {
                  return setTimeout(e)
                })] : [3, 3] : [3, 5];
              case 2:
                i.sent(), i.label = 3;
              case 3:
                if (a) throw new Error("canceled");
                c(e, t, r, u, l), i.label = 4;
              case 4:
                return u = l, l = Math.min(l + s, n), [3, 1];
              case 5:
                return [2, r]
            }
          })
        }).then(n, l)
      }, function() {
        a = !0
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
  }), define(e[13], t([1, 0, 3, 8, 2]), function(e, t, n, r, i) {
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
        },
        e.prototype.getUnexpectedErrorHandler = function() {
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
  }), define(e[5], t([1, 0, 10, 2, 12, 13, 22]), function(e, t, n, r, i, o, s) {
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
                a.dispose = e._noop, t._disposed || (u(), t._options && t._options.onLastListenerRemove && t._listeners.isEmpty() && t._options.onLastListenerRemove(t))
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
      }, t.once = u,
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
  }), define(e[17], t([1, 0, 5]), function(e, t, n) {
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
  }), define(e[9], t([1, 0, 13, 3, 2, 17, 10, 5]), function(e, t, r, i, o, s, u, a) {
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
    t.ShallowCancelThenPromise = _,
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
    t.Limiter = y;
    var g = function(e) {
      function t() {
        return e.call(this, 1) || this
      }
      return n(t, e), t
    }(y);
    t.Queue = g;
    var b = function() {
      function e() {
        this.queues = Object.create(null)
      }
      return e.prototype.queueFor = function(e) {
        var t = this,
          n = e.toString();
        if (!this.queues[n]) {
          var r = new g;
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
    }(u.Disposable);
    t.TimeoutTimer = w;
    var E = function(e) {
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
    }(u.Disposable);
    t.IntervalTimer = E;
    var x = function() {
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
    t.RunOnceScheduler = x, t.nfcall = function(e) {
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
    }(a.Emitter);
    t.ThrottledEmitter = P
  }), define(e[19], t([1, 0, 16]), function(e, t, n) {
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
      e.forEach(function(u, a) {
        t(u, function(t, u) {
          if (t ? (o = !0, r[a] = null, i[a] = t) : (r[a] = u, i[a] = null), ++s === e.length) return n(o ? i : null, r)
        })
      })
    }, t.loop = r, t.sequence = i
  }), define(e[11], t([1, 0, 21, 20, 3, 19, 7, 4, 2, 9]), function(e, t, n, r, i, o, s, u, a, c) {
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
            u = s.createWriteStream(t, {
              mode: n
            }),
            a = function(e) {
              i || (i = !0, r(e))
            };
          o.on("error", a), u.on("error", a), o.on("end", function() {
            u.end(function() {
              i || (i = !0, s.chmod(t, n, r))
            })
          }), o.pipe(u, {
            end: !1
          })
        }(e, t, 511 & o.mode, n);
        if (r[e]) return n(null);
        r[e] = !0;
        var a = function() {
          f(e, function(i, o) {
            g(o, function(n, i) {
              h(u.join(e, n), u.join(t, n), function(e) {
                return i(e, void 0)
              }, r)
            }, n)
          })
        };
        p(t, 511 & o.mode).done(a, a)
      })
    }

    function p(e, t) {
      var n = function() {
        return c.nfcall(s.mkdir, e, t).then(null, function(t) {
          return "EEXIST" === t.code ? c.nfcall(s.stat, e).then(function(t) {
            return t.isDirectory ? null : a.TPromise.wrapError(new Error("'" + e + "' exists and is not a directory."))
          }) : a.TPromise.wrapError(t)
        })
      };
      return e === u.dirname(e) ? a.TPromise.as(!0) : n().then(null, function(r) {
        return "ENOENT" === r.code ? p(u.dirname(e), t).then(n) : a.TPromise.wrapError(r)
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
                d(u.join(e, n), function(n) {
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
          return v(u.join(e, t))
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

    function _(e) {
      var t = u.dirname(e);
      if (e === t) return e;
      var n = (u.basename(e) || e).toLowerCase();
      try {
        var r = l(t).filter(function(e) {
          return e.toLowerCase() === n
        });
        if (1 === r.length) {
          if (o = _(t)) return u.join(o, r[0])
        } else if (r.length > 1) {
          var i = r.indexOf(n);
          if (i >= 0) {
            var o = _(t);
            if (o) return u.join(o, r[i])
          }
        }
      } catch (e) {}
      return null
    }

    function y(e) {
      return r.rtrim(u.normalize(e), u.sep)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var g = o.loop;
    t.readdirSync = l, t.readdir = f, t.copy = h, t.mkdirp = p, t.del = function(e, t, i, o) {
      s.exists(e, function(a) {
        if (!a) return i(null);
        s.stat(e, function(a, c) {
          if (a || !c) return i(a);
          if ("." === e[e.length - 1] || r.endsWith(e, "./") || r.endsWith(e, ".\\")) return d(e, i);
          var l = u.join(t, n.generateUuid());
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
    }, t.realcaseSync = _, t.realpathSync = function(e) {
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
  }), define(e[24], t([1, 0, 2, 11, 4, 9, 7, 14, 3, 5]), function(e, t, n, r, i, o, s, u, a, c) {
    "use strict";

    function l(e) {
      return o.nfcall(r.readdir, e)
    }

    function f(e) {
      return p(e).then(function(t) {
        return t.isDirectory() && !t.isSymbolicLink() ? l(e).then(function(t) {
          return n.TPromise.join(t.map(function(t) {
            return f(i.join(e, t))
          }))
        }).then(function() {
          return d(e)
        }) : v(e)
      }, function(e) {
        if ("ENOENT" !== e.code) return n.TPromise.wrapError(e)
      })
    }

    function h(e) {
      return o.nfcall(s.stat, e)
    }

    function p(e) {
      return o.nfcall(s.lstat, e)
    }

    function d(e) {
      return o.nfcall(s.rmdir, e)
    }

    function v(e) {
      return o.nfcall(s.unlink, e)
    }

    function m(e, t, n) {
      return function(e) {
        var t = y[e];
        if (!t) {
          t = new o.Queue, y[e] = t;
          c.once(t.onFinished)(function() {
            delete y[e], t.dispose()
          })
        }
        return t
      }(function(e) {
        var t = e;
        (a.isWindows || a.isMacintosh) && (t = t.toLowerCase());
        return t
      }(e)).queue(function() {
        return o.nfcall(r.writeFileAndFlush, e, t, n)
      })
    }

    function _(e) {
      return h(e).then(function(e) {
        return e.isDirectory()
      }, function() {
        return !1
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.readdir = l, t.exists = function(e) {
      return new n.TPromise(function(t) {
        return s.exists(e, t)
      })
    }, t.chmod = function(e, t) {
      return o.nfcall(s.chmod, e, t)
    }, t.mkdirp = r.mkdirp, t.rimraf = f, t.realpath = function(e) {
      return o.nfcall(r.realpath, e)
    }, t.stat = h, t.lstat = p, t.rename = function(e, t) {
      return o.nfcall(s.rename, e, t)
    }, t.rmdir = d, t.unlink = v, t.symlink = function(e, t, n) {
      return o.nfcall(s.symlink, e, t, n)
    }, t.readlink = function(e) {
      return o.nfcall(s.readlink, e)
    }, t.touch = function(e) {
      var t = Date.now() / 1e3;
      return o.nfcall(s.utimes, e, t, t)
    }, t.truncate = function(e, t) {
      return o.nfcall(s.truncate, e, t)
    }, t.readFile = function(e, t) {
      return o.nfcall(s.readFile, e, t)
    };
    var y = Object.create(null);
    t.writeFile = m, t.readDirsInDir = function(e) {
      return l(e).then(function(t) {
        return n.TPromise.join(t.map(function(t) {
          return _(i.join(e, t))
        })).then(function(e) {
          return t.filter(function(t, n) {
            return e[n]
          })
        })
      })
    }, t.dirExists = _, t.fileExists = function(e) {
      return h(e).then(function(e) {
        return e.isFile()
      }, function() {
        return !1
      })
    };
    var g = u.tmpdir();
    t.del = function(e, t) {
      return void 0 === t && (t = g), o.nfcall(r.del, e, t)
    }, t.whenDeleted = function(e) {
      return new n.TPromise(function(t) {
        var n = !1,
          r = setInterval(function() {
            n || (n = !0, s.exists(e, function(e) {
              n = !1, e || (clearInterval(r), t(null))
            }))
          }, 1e3)
      })
    }
  }), define(e[26], t([1, 0, 36]), function(e, t, n) {
    "use strict";

    function r(e, t, o) {
      if (0 === t) return o(0);
      var s = new n.Socket;
      s.once("connect", function() {
        return i(s), r(e + 1, t - 1, o)
      }), s.once("data", function() {}), s.once("error", function(n) {
        return i(s), "ECONNREFUSED" !== n.code ? r(e + 1, t - 1, o) : o(e)
      }), s.connect(e, "127.0.0.1")
    }

    function i(e) {
      try {
        e.removeAllListeners("connect"), e.removeAllListeners("error"), e.end(), e.destroy(), e.unref()
      } catch (e) {
        console.error(e)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.findFreePort = function(e, t, n) {
      var i = !1;
      return new Promise(function(o) {
        var s = setTimeout(function() {
          if (!i) return i = !0, o(0)
        }, n);
        r(e, t, function(e) {
          if (!i) return i = !0, clearTimeout(s), o(e)
        })
      })
    }
  }), define(e[28], t([1, 0, 7, 2]), function(e, t, n, r) {
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

          function u() {
            n.read(o, a, c, t - c, null, function(e, n) {
              return e ? s(e, null, 0) : 0 === n ? s(null, a, c) : (c += n) === t ? s(null, a, c) : u()
            })
          }
          if (e) return i(e);
          var a = new Buffer(t),
            c = 0;
          u()
        })
      })
    }, t.readToMatchingString = function(e, t, i, o) {
      return new r.TPromise(function(r, s) {
        return n.open(e, "r", null, function(u, a) {
          function c(e, t) {
            n.close(a, function(n) {
              return n ? s(n) : e && "EISDIR" === e.code ? s(e) : r(t)
            })
          }

          function l() {
            n.read(a, f, h, i, null, function(n, r) {
              if (n) return c(n, null);
              if (0 === r) return c(null, null);
              h += r;
              var i = f.indexOf(t);
              return i >= 0 ? c(null, f.toString("utf8").substr(0, i)) : h >= o ? c(new Error("Could not find " + t + " in first " + o + " bytes of " + e), null) : l()
            })
          }
          if (u) return s(u);
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
          for (; u;) try {
            if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
            switch (i = 0, o && (n = [0, o.value]), n[0]) {
              case 0:
              case 1:
                o = n;
                break;
              case 4:
                return u.label++, {
                  value: n[1],
                  done: !1
                };
              case 5:
                u.label++, i = n[1], n = [0];
                continue;
              case 7:
                n = u.ops.pop(), u.trys.pop();
                continue;
              default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                  u = 0;
                  continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                  u.label = n[1];
                  break
                }
                if (6 === n[0] && u.label < o[1]) {
                  u.label = o[1], o = n;
                  break
                }
                if (o && u.label < o[2]) {
                  u.label = o[2], u.ops.push(n);
                  break
                }
                o[2] && u.ops.pop(), u.trys.pop();
                continue
            }
            n = t.call(e, u)
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
    var r, i, o, s, u = {
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
  define(e[29], t([1, 0, 28, 30, 2, 3, 31]), function(e, t, n, o, s, u, a) {
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
      return r ? (e && console.log("Found VSCODE_CLI_ENCODING variable: " + r), n = s.TPromise.as(r)) : n = u.isLinux || u.isMacintosh ? new s.TPromise(function(t) {
        e && console.log('Running "locale charmap" to detect terminal encoding...'), a.exec("locale charmap", function(e, n, r) {
          return t(n)
        })
      }) : new s.TPromise(function(t) {
        e && console.log('Running "chcp" to detect terminal encoding...'), a.exec("chcp", function(e, n, r) {
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
  }), define(e[32], t([35, 34]), function(e, t) {
    return e.create("vs/platform/environment/node/argv", t)
  }), define(e[33], t([1, 0, 4, 6]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n.dirname(r.default.parse(e.toUrl("")).fsPath),
      o = n.join(i, "package.json");
    t.default = e.__$__nodeRequire(o)
  }), define(e[15], t([1, 0, 4, 6]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n.dirname(r.default.parse(e.toUrl("")).fsPath),
      o = n.join(i, "product.json"),
      s = e.__$__nodeRequire(o);
    process.env.VSCODE_DEV && (s.nameShort += " Dev", s.nameLong += " Dev", s.dataFolderName += "-dev"), t.default = s
  }), define(e[23], t([1, 0, 14, 38, 16, 25, 32, 3, 15]), function(e, t, n, r, i, o, s, u, a) {
    "use strict";

    function c(e) {
      return e.goto && e._.forEach(function(e) {
        return i(/^(\w:)?[^:]+(:\d*){0,2}$/.test(e), s.localize(0, null))
      }), e
    }

    function l(e) {
      var t = o.firstIndex(e, function(e) {
        return !/^-/.test(e)
      });
      if (t > -1) return e.slice(0, t).concat(e.slice(t + 1))
    }

    function f(e) {
      return r(e, p)
    }

    function h(e, t) {
      var n = Object.keys(e),
        r = Math.max.apply(null, n.map(function(e) {
          return e.length
        })) + 2 + 1;
      if (t - r < 25) return n.reduce(function(t, n) {
        return t.concat(["  " + n, "      " + e[n]])
      }, []).join("\n");
      var i = t - r - 1,
        o = "";
      return n.forEach(function(t) {
        var n = function(e, t) {
            var n = [];
            for (; e.length;) {
              var r = e.length < t ? e.length : e.lastIndexOf(" ", t),
                i = e.slice(0, r).trim();
              e = e.slice(r), n.push(i)
            }
            return n
          }(e[t], i),
          s = " ".repeat(r - t.length - 2);
        o.length > 0 && (o += "\n"), o += "  " + t + s + n[0];
        for (var u = 1; u < n.length; u++) o += "\n" + " ".repeat(r) + n[u]
      }), o
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var p = {
      string: ["locale", "user-data-dir", "extensions-dir", "extensionDevelopmentPath", "extensionTestsPath", "install-extension", "uninstall-extension", "debugId", "debugPluginHost", "debugBrkPluginHost", "debugSearch", "debugBrkSearch", "enable-proposed-api", "export-default-configuration", "install-source"],
      boolean: ["help", "version", "wait", "diff", "add", "goto", "new-window", "unity-launch", "reuse-window", "open-url", "performance", "prof-startup", "verbose", "logExtensionHostCommunication", "disable-extensions", "list-extensions", "show-versions", "nolazy", "skip-getting-started", "skip-release-notes", "sticky-quickopen", "disable-telemetry", "disable-updates", "disable-crash-reporter", "skip-add-to-recently-opened", "status", "file-write", "file-chmod", "upload-logs"],
      alias: {
        add: "a",
        help: "h",
        version: "v",
        wait: "w",
        diff: "d",
        goto: "g",
        status: "s",
        "new-window": "n",
        "reuse-window": "r",
        performance: "p",
        "disable-extensions": "disableExtensions",
        "extensions-dir": "extensionHomePath",
        debugPluginHost: "inspect-extensions",
        debugBrkPluginHost: "inspect-brk-extensions",
        debugSearch: "inspect-search",
        debugBrkSearch: "inspect-brk-search"
      }
    };
    t.parseMainProcessArgv = function(e) {
      var t = e.slice(1);
      return process.env.VSCODE_DEV && (t = l(t)), c(f(t))
    }, t.parseCLIProcessArgv = function(e) {
      var t = e.slice(2);
      return process.env.VSCODE_DEV && (t = l(t)), c(f(t))
    }, t.parseArgs = f;
    var d = {
        "-d, --diff <file> <file>": s.localize(1, null),
        "-a, --add <dir>": s.localize(2, null),
        "-g, --goto <file:line[:character]>": s.localize(3, null),
        "-n, --new-window": s.localize(4, null),
        "-r, --reuse-window": s.localize(5, null),
        "-w, --wait": s.localize(6, null),
        "--locale <locale>": s.localize(7, null),
        "--user-data-dir <dir>": s.localize(8, null),
        "-v, --version": s.localize(9, null),
        "-h, --help": s.localize(10, null)
      },
      v = {
        "--extensions-dir <dir>": s.localize(11, null),
        "--list-extensions": s.localize(12, null),
        "--show-versions": s.localize(13, null),
        "--install-extension (<extension-id> | <extension-vsix-path>)": s.localize(14, null),
        "--uninstall-extension (<extension-id> | <extension-vsix-path>)": s.localize(15, null),
        "--enable-proposed-api <extension-id>": s.localize(16, null)
      },
      m = {
        "--verbose": s.localize(17, null),
        "--log <level>": s.localize(18, null),
        "-s, --status": s.localize(19, null),
        "-p, --performance": s.localize(20, null),
        "--prof-startup": s.localize(21, null),
        "--disable-extensions": s.localize(22, null),
        "--inspect-extensions": s.localize(23, null),
        "--inspect-brk-extensions": s.localize(24, null),
        "--disable-gpu": s.localize(25, null),
        "--upload-logs": s.localize(26, null)
      };
    t.formatOptions = h, t.buildHelpMessage = function(e, t, r) {
      var i = process.stdout.isTTY ? process.stdout.columns : 80,
        o = t + ("win32" === n.platform() ? ".exe" : "");
      return e + " " + r + "\n\n" + s.localize(27, null) + ": " + o + " [" + s.localize(28, null) + "] [" + s.localize(29, null) + "...]\n\n" + (u.isWindows ? s.localize(30, null, a.default.applicationName) : s.localize(31, null, a.default.applicationName)) + "\n\n" + s.localize(32, null) + ":\n" + h(d, i) + "\n\n" + s.localize(33, null) + ":\n" + h(v, i) + "\n\n" + s.localize(34, null) + ":\n" + h(m, i)
    }
  });
  i = this && this.__generator || function(e, t) {
    function n(n) {
      return function(s) {
        return function(n) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; u;) try {
            if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
            switch (i = 0, o && (n = [0, o.value]), n[0]) {
              case 0:
              case 1:
                o = n;
                break;
              case 4:
                return u.label++, {
                  value: n[1],
                  done: !1
                };
              case 5:
                u.label++, i = n[1], n = [0];
                continue;
              case 7:
                n = u.ops.pop(),
                  u.trys.pop();
                continue;
              default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                  u = 0;
                  continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                  u.label = n[1];
                  break
                }
                if (6 === n[0] && u.label < o[1]) {
                  u.label = o[1], o = n;
                  break
                }
                if (o && u.label < o[2]) {
                  u.label = o[2], u.ops.push(n);
                  break
                }
                o[2] && u.ops.pop(), u.trys.pop();
                continue
            }
            n = t.call(e, u)
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
    var r, i, o, s, u = {
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
  define(e[39], t([1, 0, 31, 2, 27, 23, 15, 33, 4, 14, 7, 24, 26, 29, 30, 11, 3]), function(e, t, n, o, s, u, a, c, l, f, h, p, d, v, m, _, y) {
    "use strict";

    function g(t) {
      return r(this, void 0, o.TPromise, function() {
        var g, b, w, E, x, P, C, S, k, O, T, A, D, j, F, L, N, I, M, z, W, U, R, H, B = this;
        return i(this, function(q) {
          switch (q.label) {
            case 0:
              try {
                g = u.parseCLIProcessArgv(t)
              } catch (e) {
                return console.error(e.message), [2, o.TPromise.as(null)]
              }
              return g.help ? (console.log(u.buildHelpMessage(a.default.nameLong, a.default.applicationName, c.default.version)), [3, 9]) : [3, 1];
            case 1:
              return g.version ? (console.log(c.default.version + "\n" + a.default.commit + "\n" + process.arch), [3, 9]) : [3, 2];
            case 2:
              return function(e) {
                return !!(e["install-source"] || e["list-extensions"] || e["install-extension"] || e["uninstall-extension"])
              }(g) ? (b = new o.TPromise(function(t) {
                return e(["vs/code/node/cliProcessMain"], t)
              }), [2, b.then(function(e) {
                return e.main(g)
              })]) : [3, 3];
            case 3:
              if (!g["file-write"]) return [3, 4];
              if (w = g._[0], E = g._[1], !(w && E && w !== E && l.isAbsolute(w) && l.isAbsolute(E) && h.existsSync(w) && h.statSync(w).isFile() && h.existsSync(E) && h.statSync(E).isFile())) return [2, o.TPromise.wrapError(new Error("Using --file-write with invalid arguments."))];
              try {
                x = void 0, P = !1, g["file-chmod"] && (128 & (x = h.statSync(E).mode) || (h.chmodSync(E, 128 | x), P = !0)), C = h.readFileSync(w);
                try {
                  _.writeFileAndFlushSync(E, C)
                } catch (e) {
                  if (!y.isWindows || "EPERM" !== e.code) throw e;
                  h.truncateSync(E, 0), _.writeFileAndFlushSync(E, C, {
                    flag: "r+"
                  })
                }
                P && h.chmodSync(E, x)
              } catch (e) {
                return [2, o.TPromise.wrapError(new Error("Using --file-write resulted in an error: " + e))]
              }
              return [2, o.TPromise.as(null)];
            case 4:
              delete(S = s.assign({}, process.env, {
                VSCODE_CLI: "1",
                ELECTRON_NO_ATTACH_CONSOLE: "1"
              })).ELECTRON_RUN_AS_NODE, k = [], (O = g.verbose || g.status) && (S.ELECTRON_ENABLE_LOGGING = "1", k.push(function(e) {
                return e.stdout.on("data", function(e) {
                  return console.log(e.toString("utf8").trim())
                }), e.stderr.on("data", function(e) {
                  return console.log(e.toString("utf8").trim())
                }), new o.TPromise(function(t) {
                  return e.once("exit", function() {
                    return t(null)
                  })
                })
              })), T = void 0;
              try {
                T = !process.stdin.isTTY
              } catch (e) {}
              if ((A = g._.some(function(e) {
                  return "-" === e
                })) && (g._ = g._.filter(function(e) {
                  return "-" !== e
                }), t = t.filter(function(e) {
                  return "-" !== e
                })), T)
                if (0 === g._.length && A) {
                  D = l.join(f.tmpdir(), "code-stdin-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 3) + ".txt"), j = void 0;
                  try {
                    F = h.createWriteStream(D)
                  } catch (e) {
                    j = e
                  }
                  j || (v.resolveTerminalEncoding(O).done(function(e) {
                    var t = m.decodeStream(e);
                    process.stdin.pipe(t).pipe(F)
                  }), t.push(D), t.push("--wait"), t.push("--skip-add-to-recently-opened"), g.wait = !0), O && (j ? console.error("Failed to create file to read via stdin: " + j.toString()) : console.log("Reading from stdin via: " + D))
                } else 0 === g._.length && k.push(function(e) {
                  return new o.TPromise(function(e) {
                    var t = function() {
                      y.isWindows ? console.log("Run with '" + a.default.applicationName + " -' to read output from another program (e.g. 'echo Hello World | " + a.default.applicationName + " -').") : console.log("Run with '" + a.default.applicationName + " -' to read from stdin (e.g. 'ps aux | grep code | " + a.default.applicationName + " -')."), e(void 0)
                    };
                    setTimeout(function() {
                      process.stdin.removeListener("data", t), e(void 0)
                    }, 1e3), process.stdin.once("data", t)
                  })
                });
              if (g.wait) {
                N = void 0, I = l.join(f.tmpdir(), Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 10));
                try {
                  h.writeFileSync(I, ""), L = I, t.push("--waitMarkerFilePath", L)
                } catch (e) {
                  N = e
                }
                O && (N ? console.error("Failed to create marker file for --wait: " + N.toString()) : console.log("Marker file for --wait created: " + L))
              }
              return g["prof-startup"] ? [4, d.findFreePort(9222, 10, 6e3)] : [3, 8];
            case 5:
              return M = q.sent(), [4, d.findFreePort(M + 1, 10, 6e3)];
            case 6:
              return z = q.sent(), [4, d.findFreePort(z + 1, 10, 6e3)];
            case 7:
              if (W = q.sent(), !M || !z || !W) return console.error("Failed to find free ports for profiler to connect to do."), [2];
              U = l.join(f.homedir(), Math.random().toString(16).slice(-4)), t.push("--inspect-brk=" + M), t.push("--remote-debugging-port=" + z), t.push("--inspect-brk-extensions=" + W), t.push("--prof-startup-prefix", U), t.push("--no-cached-data"), h.writeFileSync(U, t.slice(-6).join("|")), k.push(function(t) {
                return r(B, void 0, void 0, function() {
                  var t, n, r, o, s, u, a, c;
                  return i(this, function(i) {
                    switch (i.label) {
                      case 0:
                        return [4, new Promise(function(t, n) {
                          e(["v8-inspect-profiler"], t, n)
                        })];
                      case 1:
                        return t = i.sent(), [4, t.startProfiling({
                          port: M
                        })];
                      case 2:
                        return n = i.sent(), [4, t.startProfiling({
                          port: z,
                          tries: 200
                        })];
                      case 3:
                        return r = i.sent(), [4, t.startProfiling({
                          port: W,
                          tries: 300
                        })];
                      case 4:
                        return o = i.sent(), p.whenDeleted(U), [4, n.stop()];
                      case 5:
                        return s = i.sent(), [4, r.stop()];
                      case 6:
                        return u = i.sent(), [4, o.stop()];
                      case 7:
                        return a = i.sent(), c = "", process.env.VSCODE_DEV || (s = t.rewriteAbsolutePaths(s, "piiRemoved"), u = t.rewriteAbsolutePaths(u, "piiRemoved"), a = t.rewriteAbsolutePaths(a, "piiRemoved"), c = ".txt"), [4, t.writeProfile(s, U + "-main.cpuprofile" + c)];
                      case 8:
                        return i.sent(), [4, t.writeProfile(u, U + "-renderer.cpuprofile" + c)];
                      case 9:
                        return i.sent(), [4, t.writeProfile(a, U + "-exthost.cpuprofile" + c)];
                      case 10:
                        return i.sent(), [2]
                    }
                  })
                })
              }), q.label = 8;
            case 8:
              return R = {
                detached: !0,
                env: S
              }, O || (R.stdio = "ignore"), H = n.spawn(process.execPath, t.slice(2), R), g.wait && L ? [2, new o.TPromise(function(e) {
                H.once("exit", function() {
                  return e(null)
                }), p.whenDeleted(L).done(e, e)
              }).then(function() {
                D && h.unlinkSync(D)
              })] : [2, o.TPromise.join(k.map(function(e) {
                return e(H)
              }))];
            case 9:
              return [2, o.TPromise.as(null)]
          }
        })
      })
    }

    function b(e) {
      setTimeout(function() {
        return process.exit(e)
      }, 0)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.main = g, g(process.argv).then(function() {
      return b(0)
    }).then(null, function(e) {
      console.error(e.stack ? e.stack : e), b(1)
    })
  })
}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\code\node\cli.js.map