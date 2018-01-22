/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function() {
  var e = ["require", "exports", "vs/base/common/paths", "vs/base/common/strings", "vs/base/common/arrays", "vs/base/common/winjs.base", "vs/base/common/platform", "vs/workbench/parts/output/common/outputLinkComputer", "vs/base/common/uri", "vs/editor/common/core/range"],
    t = function(t) {
      for (var n = [], r = 0, i = t.length; r < i; r++) n[r] = e[t[r]];
      return n
    };
  define(e[2], t([0, 1, 6, 3]), function(e, t, n, r) {
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
          return t ? !l.test(e) : !f.test(e)
        }(e, i)) return e;
      for (var o = i ? "\\" : "/", c = a(e, o), s = c.length, h = !1, v = "", d = c.length; d <= r; d++)
        if (d === r || 47 === e.charCodeAt(d) || 92 === e.charCodeAt(d)) {
          if (u(e, s, d, "..")) {
            var p = v.lastIndexOf(o),
              g = v.slice(p + 1);
            (c || g.length > 0) && ".." !== g && (v = -1 === p ? "" : v.slice(0, p), h = !0)
          } else u(e, s, d, ".") && (c || v || d < r - 1) && (h = !0);
          if (!h) {
            var m = e.slice(s, d);
            "" !== v && v[v.length - 1] !== o && (v += o), v += m
          }
          s = d + 1, h = !1
        }
      return c + v
    }

    function u(e, t, n, r) {
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
      var u = e.indexOf("://");
      if (-1 !== u)
        for (u += 3; u < n; u++)
          if (47 === (r = e.charCodeAt(u)) || 92 === r) return e.slice(0, u + 1);
      return ""
    }

    function c(e) {
      if (!e) return !1;
      var t = e.charCodeAt(0);
      if (47 === t || 92 === t) return !0;
      if ((t >= 65 && t <= 90 || t >= 97 && t <= 122) && e.length > 2 && 58 === e.charCodeAt(1)) {
        var n = e.charCodeAt(2);
        if (47 === n || 92 === n) return !0
      }
      return !1
    }

    function s(e) {
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
    var f = /(\/\.\.?\/)|(\/\.\.?)$|^(\.\.?\/)|(\/\/+)|(\\)/,
      l = /(\\\.\.?\\)|(\\\.\.?)$|^(\.\.?\\)|(\\\\+)|(\/)/;
    t.normalize = o, t.getRoot = a, t.join = function() {
      for (var e = "", n = 0; n < arguments.length; n++) {
        var r = arguments[n];
        if (n > 0) {
          var i = e.charCodeAt(e.length - 1);
          if (47 !== i && 92 !== i) {
            var u = r.charCodeAt(0);
            47 !== u && 92 !== u && (e += t.sep)
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
      v = /^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])$/i;
    t.isValidBasename = function(e) {
      return !(!e || 0 === e.length || /^\s+$/.test(e) || (h.lastIndex = 0, h.test(e) || n.isWindows && v.test(e) || "." === e || ".." === e || n.isWindows && "." === e[e.length - 1] || n.isWindows && e.length !== e.trim().length))
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
      return n.isWindows ? c(e) : s(e)
    }, t.isAbsolute_win32 = c, t.isAbsolute_posix = s
  });
  var n = this && this.__awaiter || function(e, t, n, r) {
      return new(n || (n = Promise))(function(i, o) {
        function u(e) {
          try {
            c(r.next(e))
          } catch (e) {
            o(e)
          }
        }

        function a(e) {
          try {
            c(r.throw(e))
          } catch (e) {
            o(e)
          }
        }

        function c(e) {
          e.done ? i(e.value) : new n(function(t) {
            t(e.value)
          }).then(u, a)
        }
        c((r = r.apply(e, t || [])).next())
      })
    },
    r = this && this.__generator || function(e, t) {
      function n(n) {
        return function(u) {
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
          }([n, u])
        }
      }
      var r, i, o, u, a = {
        label: 0,
        sent: function() {
          if (1 & o[0]) throw o[1];
          return o[1]
        },
        trys: [],
        ops: []
      };
      return u = {
        next: n(0),
        throw: n(1),
        return: n(2)
      }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
      }), u
    };
  define(e[4], t([0, 1, 5]), function(e, t, i) {
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

    function u(e, t) {
      return a(e, t), e
    }

    function a(e, t) {
      if (!(e.length <= 1)) {
        var n = e.length / 2 | 0,
          r = e.slice(0, n),
          i = e.slice(n);
        a(r, t), a(i, t);
        for (var o = 0, u = 0, c = 0; o < r.length && u < i.length;) {
          var s = t(r[o], i[u]);
          e[c++] = s <= 0 ? r[o++] : i[u++]
        }
        for (; o < r.length;) e[c++] = r[o++];
        for (; u < i.length;) e[c++] = i[u++]
      }
    }

    function c(e, t, n) {
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
      for (var i = [], o = 0, u = 0;;) {
        if (o === e.length) {
          r(o, 0, t.slice(u));
          break
        }
        if (u === t.length) {
          r(o, e.length - o, []);
          break
        }
        var a = e[o],
          c = t[u],
          s = n(a, c);
        0 === s ? (o += 1, u += 1) : s < 0 ? (r(o, 1, []), o += 1) : s > 0 && (r(o, 0, [c]), u += 1)
      }
      return i
    }

    function s(e, t, n, r, i) {
      for (var u = function(i) {
          var u = e[r];
          if (t(u, n[i - 1]) < 0) {
            n.pop();
            var a = o(n, function(e) {
              return t(u, e) < 0
            });
            n.splice(a, 0, u)
          }
        }, a = n.length; r < i; r++) u(a)
    }

    function f(e, t) {
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
          u = n(e[o], t);
        if (u < 0) r = o + 1;
        else {
          if (!(u > 0)) return o;
          i = o - 1
        }
      }
      return -(r + 1)
    }, t.findFirst = o, t.mergeSort = u, t.groupBy = function(e, t) {
      for (var n, r = [], i = 0, o = u(e.slice(0), t); i < o.length; i++) {
        var a = o[i];
        n && 0 === t(n[0], a) ? n.push(a) : (n = [a], r.push(n))
      }
      return r
    }, t.sortedDiff = c, t.delta = function(e, t, n) {
      for (var r = [], i = [], o = 0, u = c(e, t, n); o < u.length; o++) {
        var a = u[o];
        r.push.apply(r, e.slice(a.start, a.start + a.deleteCount)), i.push.apply(i, a.toInsert)
      }
      return {
        removed: r,
        added: i
      }
    }, t.top = function(e, t, n) {
      if (0 === n) return [];
      var r = e.slice(0, n).sort(t);
      return s(e, t, r, n, e.length), r
    }, t.topAsync = function(e, t, o, u) {
      var a = this;
      if (0 === o) return i.TPromise.as([]);
      var c = !1;
      return new i.TPromise(function(i, f) {
        n(a, void 0, void 0, function() {
          var n, i, a, f;
          return r(this, function(r) {
            switch (r.label) {
              case 0:
                n = e.length, i = e.slice(0, o).sort(t), a = o, f = Math.min(o + u, n), r.label = 1;
              case 1:
                return a < n ? a > o ? [4, new Promise(function(e) {
                  return setTimeout(e)
                })] : [3, 3] : [3, 5];
              case 2:
                r.sent(), r.label = 3;
              case 3:
                if (c) throw new Error("canceled");
                s(e, t, i, a, f), r.label = 4;
              case 4:
                return a = f, f = Math.min(f + u, n), [3, 1];
              case 5:
                return [2, i]
            }
          })
        }).then(i, f)
      }, function() {
        c = !0
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
    }, t.firstIndex = f, t.first = function(e, t, n) {
      void 0 === n && (n = null);
      var r = f(e, t);
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
  }), define(e[7], t([0, 1, 5, 8, 2, 3, 4, 9]), function(e, t, n, r, i, o, u, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = function() {
      function e(e, t) {
        this.ctx = e, this.patterns = new Map, this.computePatterns(t)
      }
      return e.prototype.computePatterns = function(t) {
        var n = this;
        t.workspaceFolders.map(function(e) {
          return r.default.parse(e)
        }).forEach(function(t) {
          var r = e.createPatterns(t);
          n.patterns.set(t.fsPath, r)
        })
      }, e.prototype.getModel = function(e) {
        for (var t = this.ctx.getMirrorModels(), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r.uri.toString() === e) return r
        }
        return null
      }, e.prototype.computeLinks = function(t) {
        var o = this.getModel(t);
        if (o) {
          var u = [],
            a = o.getValue().split(/\r\n|\r|\n/);
          return this.patterns.forEach(function(t, n) {
            for (var o = {
                toResource: function(e) {
                  return "string" == typeof e ? r.default.file(i.join(n, e)) : null
                }
              }, c = 0, s = a.length; c < s; c++) u.push.apply(u, e.detectLinks(a[c], c + 1, t, o))
          }), n.TPromise.as(u)
        }
      }, e.createPatterns = function(e) {
        var t = [];
        return u.distinct([i.normalize(e.fsPath, !0), i.normalize(e.fsPath, !1)]).forEach(function(e) {
          t.push(new RegExp(o.escapeRegExpCharacters(e) + "(\\S*) on line ((\\d+)(, column (\\d+))?)", "gi")), t.push(new RegExp(o.escapeRegExpCharacters(e) + "(\\S*):line ((\\d+)(, column (\\d+))?)", "gi")), t.push(new RegExp(o.escapeRegExpCharacters(e) + "([^\\s\\(\\)]*)(\\s?\\((\\d+)(,(\\d+))?)\\)", "gi")), t.push(new RegExp(o.escapeRegExpCharacters(e) + "([^:\\s\\(\\)<>'\"\\[\\]]*)(:(\\d+))?(:(\\d+))?", "gi"))
        }), t
      }, e.detectLinks = function(e, t, n, r) {
        var i = [];
        return n.forEach(function(n) {
          n.lastIndex = 0;
          for (var u, c = 0, s = function() {
              var n = o.rtrim(u[1], ".").replace(/\\/g, "/"),
                s = void 0;
              try {
                s = r.toResource(n).toString()
              } catch (e) {
                return "continue"
              }
              if (u[3]) {
                var f = u[3];
                if (u[5]) {
                  var l = u[5];
                  s = o.format("{0}#{1},{2}", s, f, l)
                } else s = o.format("{0}#{1}", s, f)
              }
              var h = o.rtrim(u[0], "."),
                v = e.indexOf(h, c);
              c += v + h.length;
              var d = {
                startColumn: v + 1,
                startLineNumber: t,
                endColumn: v + 1 + h.length,
                endLineNumber: t
              };
              if (i.some(function(e) {
                  return a.Range.areIntersectingOrTouching(e.range, d)
                })) return {
                value: void 0
              };
              i.push({
                range: d,
                url: s
              })
            }; null !== (u = n.exec(e));) {
            var f = s();
            if ("object" == typeof f) return f.value
          }
        }), i
      }, e
    }();
    t.OutputLinkComputer = c, t.create = function(e, t) {
      return new c(e, t)
    }
  })
}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\workbench\parts\output\common\outputLinkComputer.js.map