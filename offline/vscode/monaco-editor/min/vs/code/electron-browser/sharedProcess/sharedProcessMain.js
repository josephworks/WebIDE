/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function() {
  var e = ["exports", "require", "vs/base/common/winjs.base", "vs/base/common/event", "path", "vs/base/common/objects", "vs/platform/instantiation/common/instantiation", "vs/base/common/platform", "vs/base/common/types", "vs/base/common/lifecycle", "vs/base/common/uri", "vs/nls!vs/code/electron-browser/sharedProcess/sharedProcessMain", "vs/nls", "vs/base/common/strings", "vs/base/common/errors", "vs/platform/registry/common/platform", "vs/platform/configuration/common/configuration", "vs/platform/environment/common/environment", "vs/base/node/pfs", "vs/platform/configuration/common/configurationRegistry", "fs", "vs/platform/node/product", "vs/base/common/async", "vs/base/common/arrays", "vs/base/common/uuid", "vs/base/common/paths", "os", "vs/platform/log/common/log", "vs/platform/node/package", "vs/platform/extensionManagement/common/extensionManagement", "vs/platform/message/common/message", "vs/base/node/extfs", "vs/base/common/map", "vs/base/parts/ipc/common/ipc", "vs/base/node/request", "vs/base/common/json", "vs/base/common/assert", "vs/base/common/functional", "vs/platform/extensionManagement/common/extensionManagementUtil", "vs/platform/instantiation/common/serviceCollection", "vs/platform/instantiation/common/descriptors", "vs/platform/configuration/common/configurationModels", "vs/platform/request/node/request", "vs/platform/telemetry/common/telemetry", "vs/base/common/actions", "vs/base/common/cancellation", "vs/base/common/severity", "vs/nls!vs/base/node/zip", "vs/nls!vs/platform/configuration/common/configurationRegistry", "vs/nls!vs/platform/extensionManagement/common/extensionManagement", "vs/nls!vs/platform/extensionManagement/node/extensionGalleryService", "vs/nls!vs/platform/extensionManagement/node/extensionManagementService", "vs/nls!vs/platform/extensions/node/extensionValidator", "vs/nls!vs/platform/message/common/message", "vs/nls!vs/platform/request/node/request", "vs/nls!vs/platform/telemetry/common/telemetryService", "vs/platform/extensionManagement/common/extensionManagementIpc", "vs/platform/extensionManagement/common/extensionNls", "vs/platform/extensions/node/extensionValidator", "semver", "vs/base/common/glob", "vs/base/common/mime", "vs/base/node/flow", "vs/platform/request/node/requestService", "vs/base/common/graph", "vs/platform/extensions/common/extensions", "vs/base/common/collections", "vs/platform/instantiation/common/instantiationService", "vs/platform/keybinding/common/keybinding", "vs/platform/request/electron-browser/requestService", "vs/platform/log/node/spdlogService", "vs/base/node/config", "vs/base/node/paths", "vs/platform/message/common/messageIpc", "vs/base/common/date", "vs/base/common/linkedList", "vs/code/electron-browser/sharedProcess/contrib/nodeCachedDataCleaner", "vs/code/electron-browser/sharedProcess/contrib/contributions", "vs/platform/environment/node/environmentService", "vs/platform/extensionManagement/node/extensionManagementService", "vs/base/node/proxy", "vs/platform/jsonschemas/common/jsonContributionRegistry", "url", "vs/base/common/decorators", "vs/base/parts/ipc/node/ipc.net", "vs/platform/configuration/node/configuration", "vs/platform/configuration/node/configurationService", "vs/platform/extensionManagement/node/extensionGalleryService", "vs/nls!vs/base/common/severity", "vs/platform/telemetry/common/telemetryIpc", "vs/platform/telemetry/common/telemetryService", "vs/platform/telemetry/common/telemetryUtils", "vs/platform/telemetry/node/appInsightsAppender", "vs/base/node/zip", "vs/platform/telemetry/node/commonProperties", "vs/platform/windows/common/windows", "vs/platform/windows/common/windowsIpc", "net", "applicationinsights", "crypto", "spdlog", "zlib", "yauzl", "assert", "vs/base/common/winjs.base.raw", "stream", "vs/code/electron-browser/sharedProcess/sharedProcessMain", "electron"],
    t = function(t) {
      for (var n = [], r = 0, i = t.length; r < i; r++) n[r] = e[t[r]];
      return n
    };
  define(e[36], t([1, 0]), function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ok = function(e, t) {
      if (!e || null === e) throw new Error(t ? "Assertion failed (" + t + ")" : "Assertion Failed")
    }
  }), define(e[66], t([1, 0]), function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = Object.prototype.hasOwnProperty;
    t.values = function(e) {
      var t = [];
      for (var r in e) n.call(e, r) && t.push(e[r]);
      return t
    }, t.size = function(e) {
      var t = 0;
      for (var r in e) n.call(e, r) && (t += 1);
      return t
    }, t.forEach = function(e, t) {
      var r = function(r) {
        if (n.call(e, r) && !1 === t({
            key: r,
            value: e[r]
          }, function() {
            delete e[r]
          })) return {
          value: void 0
        }
      };
      for (var i in e) {
        var o = r(i);
        if ("object" == typeof o) return o.value
      }
    }, t.remove = function(e, t) {
      return !!n.call(e, t) && (delete e[t], !0)
    }, t.groupBy = function(e, t) {
      for (var n = Object.create(null), r = 0, i = e; r < i.length; r++) {
        var o = i[r],
          s = t(o),
          a = n[s];
        a || (a = n[s] = []), a.push(o)
      }
      return n
    }
  }), define(e[74], t([1, 0]), function(e, t) {
    "use strict";

    function n(e) {
      return e < 10 ? "0" + e : String(e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.toLocalISOString = function(e) {
      return e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + "." + (e.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
    }
  }), define(e[83], t([1, 0]), function(e, t) {
    "use strict";

    function n(e) {
      return function(t, n, r) {
        var i = null,
          o = null;
        if ("function" == typeof r.value ? (i = "value", o = r.value) : "function" == typeof r.get && (i = "get", o = r.get), !o) throw new Error("not supported");
        r[i] = e(o, n)
      }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createDecorator = n, t.memoize = function(e, t, n) {
        var r = null,
          i = null;
        if ("function" == typeof n.value ? (r = "value", i = n.value) : "function" == typeof n.get && (r = "get", i = n.get), !i) throw new Error("not supported");
        var o = "$memoize$" + t;
        n[r] = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return this.hasOwnProperty(o) || Object.defineProperty(this, o, {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: i.apply(this, e)
          }), this[o]
        }
      },
      t.debounce = function(e) {
        return n(function(t, n) {
          var r = "$debounce$" + n;
          return function() {
            for (var n = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
            clearTimeout(this[r]), this[r] = setTimeout(function() {
              return t.apply(n, i)
            }, e)
          }
        })
      }
  }), define(e[37], t([1, 0]), function(e, t) {
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
  }), define(e[35], t([1, 0]), function(e, t) {
    "use strict";

    function n(e, t) {
      function n(t, n) {
        for (var r = 0, i = 0; r < t || !n;) {
          var o = e.charCodeAt(a);
          if (o >= 48 && o <= 57) i = 16 * i + o - 48;
          else if (o >= 65 && o <= 70) i = 16 * i + o - 65 + 10;
          else {
            if (!(o >= 97 && o <= 102)) break;
            i = 16 * i + o - 97 + 10
          }
          a++, r++
        }
        return r < t && (i = -1), i
      }

      function s() {
        if (f = "", d = u.None, p = a, a >= l) return p = l, h = c.EOF;
        var t = e.charCodeAt(a);
        if (r(t)) {
          do {
            a++, f += String.fromCharCode(t), t = e.charCodeAt(a)
          } while (r(t));
          return h = c.Trivia
        }
        if (i(t)) return a++, f += String.fromCharCode(t), 13 === t && 10 === e.charCodeAt(a) && (a++, f += "\n"), h = c.LineBreakTrivia;
        switch (t) {
          case 123:
            return a++,
              h = c.OpenBraceToken;
          case 125:
            return a++, h = c.CloseBraceToken;
          case 91:
            return a++, h = c.OpenBracketToken;
          case 93:
            return a++, h = c.CloseBracketToken;
          case 58:
            return a++, h = c.ColonToken;
          case 44:
            return a++, h = c.CommaToken;
          case 34:
            return a++, f = function() {
              for (var t = "", r = a;;) {
                if (a >= l) {
                  t += e.substring(r, a), d = u.UnexpectedEndOfString;
                  break
                }
                var o = e.charCodeAt(a);
                if (34 === o) {
                  t += e.substring(r, a), a++;
                  break
                }
                if (92 !== o) {
                  if (o >= 0 && o <= 31) {
                    if (i(o)) {
                      t += e.substring(r, a), d = u.UnexpectedEndOfString;
                      break
                    }
                    d = u.InvalidCharacter
                  }
                  a++
                } else {
                  if (t += e.substring(r, a), ++a >= l) {
                    d = u.UnexpectedEndOfString;
                    break
                  }
                  switch (o = e.charCodeAt(a++)) {
                    case 34:
                      t += '"';
                      break;
                    case 92:
                      t += "\\";
                      break;
                    case 47:
                      t += "/";
                      break;
                    case 98:
                      t += "\b";
                      break;
                    case 102:
                      t += "\f";
                      break;
                    case 110:
                      t += "\n";
                      break;
                    case 114:
                      t += "\r";
                      break;
                    case 116:
                      t += "\t";
                      break;
                    case 117:
                      var s = n(4, !0);
                      s >= 0 ? t += String.fromCharCode(s) : d = u.InvalidUnicode;
                      break;
                    default:
                      d = u.InvalidEscapeCharacter
                  }
                  r = a
                }
              }
              return t
            }(), h = c.StringLiteral;
          case 47:
            var s = a - 1;
            if (47 === e.charCodeAt(a + 1)) {
              for (a += 2; a < l && !i(e.charCodeAt(a));) a++;
              return f = e.substring(s, a), h = c.LineCommentTrivia
            }
            if (42 === e.charCodeAt(a + 1)) {
              a += 2;
              for (var g = l - 1, v = !1; a < g;) {
                if (42 === e.charCodeAt(a) && 47 === e.charCodeAt(a + 1)) {
                  a += 2, v = !0;
                  break
                }
                a++
              }
              return v || (a++, d = u.UnexpectedEndOfComment), f = e.substring(s, a), h = c.BlockCommentTrivia
            }
            return f += String.fromCharCode(t), a++, h = c.Unknown;
          case 45:
            if (f += String.fromCharCode(t), ++a === l || !o(e.charCodeAt(a))) return h = c.Unknown;
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return f += function() {
                var t = a;
                if (48 === e.charCodeAt(a)) a++;
                else
                  for (a++; a < e.length && o(e.charCodeAt(a));) a++;
                if (a < e.length && 46 === e.charCodeAt(a)) {
                  if (!(++a < e.length && o(e.charCodeAt(a)))) return d = u.UnexpectedEndOfNumber, e.substring(t, a);
                  for (a++; a < e.length && o(e.charCodeAt(a));) a++
                }
                var n = a;
                if (a < e.length && (69 === e.charCodeAt(a) || 101 === e.charCodeAt(a)))
                  if ((++a < e.length && 43 === e.charCodeAt(a) || 45 === e.charCodeAt(a)) && a++, a < e.length && o(e.charCodeAt(a))) {
                    for (a++; a < e.length && o(e.charCodeAt(a));) a++;
                    n = a
                  } else d = u.UnexpectedEndOfNumber;
                return e.substring(t, n)
              }(),
              h = c.NumericLiteral;
          default:
            for (; a < l && function(e) {
                if (r(e) || i(e)) return !1;
                switch (e) {
                  case 125:
                  case 93:
                  case 123:
                  case 91:
                  case 34:
                  case 58:
                  case 44:
                    return !1
                }
                return !0
              }(t);) a++, t = e.charCodeAt(a);
            if (p !== a) {
              switch (f = e.substring(p, a)) {
                case "true":
                  return h = c.TrueKeyword;
                case "false":
                  return h = c.FalseKeyword;
                case "null":
                  return h = c.NullKeyword
              }
              return h = c.Unknown
            }
            return f += String.fromCharCode(t), a++, h = c.Unknown
        }
      }
      void 0 === t && (t = !1);
      var a = 0,
        l = e.length,
        f = "",
        p = 0,
        h = c.Unknown,
        d = u.None;
      return {
        setPosition: function(e) {
          a = e, f = "", p = 0, h = c.Unknown, d = u.None
        },
        getPosition: function() {
          return a
        },
        scan: t ? function() {
          var e;
          do {
            e = s()
          } while (e >= c.LineCommentTrivia && e <= c.Trivia);
          return e
        } : s,
        getToken: function() {
          return h
        },
        getTokenValue: function() {
          return f
        },
        getTokenOffset: function() {
          return p
        },
        getTokenLength: function() {
          return a - p
        },
        getTokenError: function() {
          return d
        }
      }
    }

    function r(e) {
      return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || 5760 === e || e >= 8192 && e <= 8203 || 8239 === e || 8287 === e || 12288 === e || 65279 === e
    }

    function i(e) {
      return 10 === e || 13 === e || 8232 === e || 8233 === e
    }

    function o(e) {
      return e >= 48 && e <= 57
    }

    function s(e) {
      if ("array" === e.type) return e.children.map(s);
      if ("object" === e.type) {
        for (var t = {}, n = 0, r = e.children; n < r.length; n++) {
          var i = r[n];
          t[i.children[0].value] = s(i.children[1])
        }
        return t
      }
      return e.value
    }

    function a(e, t, r) {
      function i(e) {
        return e ? function() {
          return e(h.getTokenOffset(), h.getTokenLength())
        } : function() {
          return !0
        }
      }

      function o(e) {
        return e ? function(t) {
          return e(t, h.getTokenOffset(), h.getTokenLength())
        } : function() {
          return !0
        }
      }

      function s() {
        for (;;) {
          var e = h.scan();
          switch (e) {
            case c.LineCommentTrivia:
            case c.BlockCommentTrivia:
              E && a(f.InvalidSymbol);
              break;
            case c.Unknown:
              a(f.InvalidSymbol);
              break;
            case c.Trivia:
            case c.LineBreakTrivia:
              break;
            default:
              return e
          }
        }
      }

      function a(e, t, n) {
        if (void 0 === t && (t = []), void 0 === n && (n = []), C(e), t.length + n.length > 0)
          for (var r = h.getToken(); r !== c.EOF;) {
            if (-1 !== t.indexOf(r)) {
              s();
              break
            }
            if (-1 !== n.indexOf(r)) break;
            r = s()
          }
      }

      function u(e) {
        var t = h.getTokenValue();
        return e ? b(t) : g(t), s(), !0
      }

      function l() {
        return h.getToken() !== c.StringLiteral ? (a(f.PropertyNameExpected, [], [c.CloseBraceToken, c.CommaToken]), !1) : (u(!1), h.getToken() === c.ColonToken ? (_(":"), s(), p() || a(f.ValueExpected, [], [c.CloseBraceToken, c.CommaToken])) : a(f.ColonExpected, [], [c.CloseBraceToken, c.CommaToken]), !0)
      }

      function p() {
        switch (h.getToken()) {
          case c.OpenBracketToken:
            return function() {
              m(), s();
              for (var e = !1; h.getToken() !== c.CloseBracketToken && h.getToken() !== c.EOF;) {
                if (h.getToken() === c.CommaToken) {
                  if (e || a(f.ValueExpected, [], []), _(","), s(), h.getToken() === c.CloseBracketToken && w) break
                } else e && a(f.CommaExpected, [], []);
                p() || a(f.ValueExpected, [], [c.CloseBracketToken, c.CommaToken]), e = !0
              }
              return y(), h.getToken() !== c.CloseBracketToken ? a(f.CloseBracketExpected, [c.CloseBracketToken], []) : s(), !0
            }();
          case c.OpenBraceToken:
            return function() {
              d(), s();
              for (var e = !1; h.getToken() !== c.CloseBraceToken && h.getToken() !== c.EOF;) {
                if (h.getToken() === c.CommaToken) {
                  if (e || a(f.ValueExpected, [], []), _(","), s(), h.getToken() === c.CloseBraceToken && w) break
                } else e && a(f.CommaExpected, [], []);
                l() || a(f.ValueExpected, [], [c.CloseBraceToken, c.CommaToken]), e = !0
              }
              return v(), h.getToken() !== c.CloseBraceToken ? a(f.CloseBraceExpected, [c.CloseBraceToken], []) : s(), !0
            }();
          case c.StringLiteral:
            return u(!0);
          default:
            return function() {
              switch (h.getToken()) {
                case c.NumericLiteral:
                  var e = 0;
                  try {
                    "number" != typeof(e = JSON.parse(h.getTokenValue())) && (a(f.InvalidNumberFormat), e = 0)
                  } catch (e) {
                    a(f.InvalidNumberFormat)
                  }
                  b(e);
                  break;
                case c.NullKeyword:
                  b(null);
                  break;
                case c.TrueKeyword:
                  b(!0);
                  break;
                case c.FalseKeyword:
                  b(!1);
                  break;
                default:
                  return !1
              }
              return s(), !0
            }()
        }
      }
      var h = n(e, !1),
        d = i(t.onObjectBegin),
        g = o(t.onObjectProperty),
        v = i(t.onObjectEnd),
        m = i(t.onArrayBegin),
        y = i(t.onArrayEnd),
        b = o(t.onLiteralValue),
        _ = o(t.onSeparator),
        C = o(t.onError),
        E = r && r.disallowComments,
        w = r && r.allowTrailingComma;
      return s(), h.getToken() === c.EOF || (p() ? (h.getToken() !== c.EOF && a(f.EndOfFileExpected, [], []), !0) : (a(f.ValueExpected, [], []), !1))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u;
    ! function(e) {
      e[e.None = 0] = "None",
        e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter"
    }(u = t.ScanError || (t.ScanError = {}));
    var c;
    ! function(e) {
      e[e.Unknown = 0] = "Unknown", e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.EOF = 16] = "EOF"
    }(c = t.SyntaxKind || (t.SyntaxKind = {})), t.createScanner = n;
    var l;
    ! function(e) {
      e[e.nullCharacter = 0] = "nullCharacter", e[e.maxAsciiCharacter = 127] = "maxAsciiCharacter", e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.lineSeparator = 8232] = "lineSeparator", e[e.paragraphSeparator = 8233] = "paragraphSeparator", e[e.nextLine = 133] = "nextLine", e[e.space = 32] = "space", e[e.nonBreakingSpace = 160] = "nonBreakingSpace", e[e.enQuad = 8192] = "enQuad", e[e.emQuad = 8193] = "emQuad", e[e.enSpace = 8194] = "enSpace", e[e.emSpace = 8195] = "emSpace", e[e.threePerEmSpace = 8196] = "threePerEmSpace", e[e.fourPerEmSpace = 8197] = "fourPerEmSpace", e[e.sixPerEmSpace = 8198] = "sixPerEmSpace", e[e.figureSpace = 8199] = "figureSpace", e[e.punctuationSpace = 8200] = "punctuationSpace", e[e.thinSpace = 8201] = "thinSpace", e[e.hairSpace = 8202] = "hairSpace", e[e.zeroWidthSpace = 8203] = "zeroWidthSpace", e[e.narrowNoBreakSpace = 8239] = "narrowNoBreakSpace", e[e.ideographicSpace = 12288] = "ideographicSpace", e[e.mathematicalSpace = 8287] = "mathematicalSpace", e[e.ogham = 5760] = "ogham", e[e._ = 95] = "_", e[e.$ = 36] = "$", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2",
        e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.ampersand = 38] = "ampersand", e[e.asterisk = 42] = "asterisk", e[e.at = 64] = "at", e[e.backslash = 92] = "backslash", e[e.bar = 124] = "bar", e[e.caret = 94] = "caret",
        e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.closeParen = 41] = "closeParen", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.equals = 61] = "equals", e[e.exclamation = 33] = "exclamation", e[e.greaterThan = 62] = "greaterThan", e[e.lessThan = 60] = "lessThan", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.openParen = 40] = "openParen", e[e.percent = 37] = "percent", e[e.plus = 43] = "plus", e[e.question = 63] = "question", e[e.semicolon = 59] = "semicolon", e[e.singleQuote = 39] = "singleQuote", e[e.slash = 47] = "slash", e[e.tilde = 126] = "tilde", e[e.backspace = 8] = "backspace", e[e.formFeed = 12] = "formFeed", e[e.byteOrderMark = 65279] = "byteOrderMark", e[e.tab = 9] = "tab", e[e.verticalTab = 11] = "verticalTab"
    }(l || (l = {}));
    var f;
    ! function(e) {
      e[e.InvalidSymbol = 0] = "InvalidSymbol", e[e.InvalidNumberFormat = 1] = "InvalidNumberFormat", e[e.PropertyNameExpected = 2] = "PropertyNameExpected", e[e.ValueExpected = 3] = "ValueExpected", e[e.ColonExpected = 4] = "ColonExpected",
        e[e.CommaExpected = 5] = "CommaExpected", e[e.CloseBraceExpected = 6] = "CloseBraceExpected", e[e.CloseBracketExpected = 7] = "CloseBracketExpected", e[e.EndOfFileExpected = 8] = "EndOfFileExpected"
    }(f = t.ParseErrorCode || (t.ParseErrorCode = {})), t.parse = function(e, t, n) {
      function r(e) {
        Array.isArray(o) ? o.push(e) : i && (o[i] = e)
      }
      void 0 === t && (t = []);
      var i = null,
        o = [],
        s = [];
      return a(e, {
        onObjectBegin: function() {
          var e = {};
          r(e), s.push(o), o = e, i = null
        },
        onObjectProperty: function(e) {
          i = e
        },
        onObjectEnd: function() {
          o = s.pop()
        },
        onArrayBegin: function() {
          var e = [];
          r(e), s.push(o), o = e, i = null
        },
        onArrayEnd: function() {
          o = s.pop()
        },
        onLiteralValue: r,
        onError: function(e) {
          t.push({
            error: e
          })
        }
      }, n), o[0]
    }, t.parseTree = function(e, t, n) {
      function r(e) {
        "property" === o.type && (o.length = e - o.offset, o = o.parent)
      }

      function i(e) {
        return o.children.push(e), e
      }
      void 0 === t && (t = []);
      var o = {
        type: "array",
        offset: -1,
        length: -1,
        children: []
      };
      a(e, {
        onObjectBegin: function(e) {
          o = i({
            type: "object",
            offset: e,
            length: -1,
            parent: o,
            children: []
          })
        },
        onObjectProperty: function(e, t, n) {
          (o = i({
            type: "property",
            offset: t,
            length: -1,
            parent: o,
            children: []
          })).children.push({
            type: "string",
            value: e,
            offset: t,
            length: n,
            parent: o
          })
        },
        onObjectEnd: function(e, t) {
          o.length = e + t - o.offset, o = o.parent, r(e + t)
        },
        onArrayBegin: function(e, t) {
          o = i({
            type: "array",
            offset: e,
            length: -1,
            parent: o,
            children: []
          })
        },
        onArrayEnd: function(e, t) {
          o.length = e + t - o.offset, o = o.parent, r(e + t)
        },
        onLiteralValue: function(e, t, n) {
          i({
            type: function(e) {
              switch (typeof e) {
                case "boolean":
                  return "boolean";
                case "number":
                  return "number";
                case "string":
                  return "string";
                default:
                  return "null"
              }
            }(e),
            offset: t,
            length: n,
            parent: o,
            value: e
          }), r(t + n)
        },
        onSeparator: function(e, t, n) {
          "property" === o.type && (":" === e ? o.columnOffset = t : "," === e && r(t))
        },
        onError: function(e) {
          t.push({
            error: e
          })
        }
      }, n);
      var s = o.children[0];
      return s && delete s.parent, s
    }, t.findNodeAtLocation = function(e, t) {
      if (e) {
        for (var n = e, r = 0, i = t; r < i.length; r++) {
          var o = i[r];
          if ("string" == typeof o) {
            if ("object" !== n.type) return;
            for (var s = !1, a = 0, u = n.children; a < u.length; a++) {
              var c = u[a];
              if (c.children[0].value === o) {
                n = c.children[1], s = !0;
                break
              }
            }
            if (!s) return
          } else {
            var l = o;
            if ("array" !== n.type || l < 0 || l >= n.children.length) return;
            n = n.children[l]
          }
        }
        return n
      }
    }, t.getNodeValue = s, t.visit = a
  }), define(e[9], t([1, 0, 37]), function(e, t, n) {
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
  }), define(e[75], t([1, 0]), function(e, t) {
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
              this._last = i,
                i.prev = o, o.next = i
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
  }), define(e[7], t([1, 0]), function(e, t) {
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
      n = "win32" === process.platform, r = "darwin" === process.platform, i = "linux" === process.platform,
        o = !n && 0 === process.getuid();
      var l = process.env.VSCODE_NLS_CONFIG;
      if (l) try {
        var f = JSON.parse(l),
          p = f.availableLanguages["*"];
        u = f.locale, c = p || t.LANGUAGE_DEFAULT
      } catch (e) {}
      s = !0
    } else if ("object" == typeof navigator) {
      var h = navigator.userAgent;
      n = h.indexOf("Windows") >= 0, r = h.indexOf("Macintosh") >= 0, i = h.indexOf("Linux") >= 0, a = !0, c = u = navigator.language
    }
    var d;
    ! function(e) {
      e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows"
    }(d = t.Platform || (t.Platform = {}));
    var g = d.Web;
    s && (r ? g = d.Mac : n ? g = d.Windows : i && (g = d.Linux)), t.isWindows = n, t.isMacintosh = r, t.isLinux = i, t.isRootUser = o, t.isNative = s, t.isWeb = a, t.platform = g, t.language = c, t.locale = u;
    var v = "object" == typeof self ? self : global;
    t.globals = v, t.setTimeout = v.setTimeout.bind(v), t.clearTimeout = v.clearTimeout.bind(v), t.setInterval = v.setInterval.bind(v), t.clearInterval = v.clearInterval.bind(v);
    ! function(e) {
      e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux"
    }(t.OperatingSystem || (t.OperatingSystem = {})), t.OS = r ? 2 : n ? 1 : 3;
    ! function(e) {
      e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled"
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
    }, t.isUndefined = o, t.isUndefinedOrNull = s;
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
  }), define(e[64], t([1, 0, 8, 66]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function() {
      function e(e) {
        this._hashFn = e, this._nodes = Object.create(null)
      }
      return e.prototype.roots = function() {
        var e = [];
        return r.forEach(this._nodes, function(t) {
          n.isEmptyObject(t.value.outgoing) && e.push(t.value)
        }), e
      }, e.prototype.traverse = function(e, t, n) {
        var r = this.lookup(e);
        r && this._traverse(r, t, Object.create(null), n)
      }, e.prototype._traverse = function(e, t, n, i) {
        var o = this,
          s = this._hashFn(e.data);
        if (!n[s]) {
          n[s] = !0, i(e.data);
          var a = t ? e.outgoing : e.incoming;
          r.forEach(a, function(e) {
            return o._traverse(e.value, t, n, i)
          })
        }
      }, e.prototype.insertEdge = function(e, t) {
        var n = this.lookupOrInsertNode(e),
          r = this.lookupOrInsertNode(t);
        n.outgoing[this._hashFn(t)] = r, r.incoming[this._hashFn(e)] = n
      }, e.prototype.removeNode = function(e) {
        var t = this._hashFn(e);
        delete this._nodes[t], r.forEach(this._nodes, function(e) {
          delete e.value.outgoing[t], delete e.value.incoming[t]
        })
      }, e.prototype.lookupOrInsertNode = function(e) {
        var t = this._hashFn(e),
          n = this._nodes[t];
        return n || (n = function(e) {
          return {
            data: e,
            incoming: Object.create(null),
            outgoing: Object.create(null)
          }
        }(e), this._nodes[t] = n), n
      }, e.prototype.lookup = function(e) {
        return this._nodes[this._hashFn(e)]
      }, Object.defineProperty(e.prototype, "length", {
        get: function() {
          return Object.keys(this._nodes).length
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.toString = function() {
        var e = [];
        return r.forEach(this._nodes, function(t) {
          e.push(t.key + ", (incoming)[" + Object.keys(t.value.incoming).join(", ") + "], (outgoing)[" + Object.keys(t.value.outgoing).join(",") + "]")
        }), e.join("\n")
      }, e
    }();
    t.Graph = i
  }), define(e[5], t([1, 0, 8]), function(e, t, n) {
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
  define(e[10], t([1, 0, 7]), function(e, t, r) {
      "use strict";

      function i(e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase()
      }

      function o(e) {
        var t;
        return t = e.authority && e.path && "file" === e.scheme ? "//" + e.authority + e.path : h.test(e.path) ? e.path[1].toLowerCase() + e.path.substr(2) : e.path, r.isWindows && (t = t.replace(/\//g, "\\")), t
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
        if (o && r.push(o, ":"), (s || "file" === o) && r.push("//"), s) {
          if (-1 !== (v = s.indexOf("@"))) {
            var p = s.substr(0, v);
            s = s.substr(v + 1), -1 === (v = p.indexOf(":")) ? r.push(n(p)) : r.push(n(p.substr(0, v)), ":", n(p.substr(v + 1))), r.push("@")
          } - 1 === (v = (s = s.toLowerCase()).indexOf(":")) ? r.push(n(s)) : r.push(n(s.substr(0, v)), s.substr(v))
        }
        if (a) {
          var h = d.exec(a);
          h && (a = h[1] ? "/" + h[2].toLowerCase() + a.substr(3) : h[2].toLowerCase() + a.substr(2));
          for (var g = 0;;) {
            var v = a.indexOf(f, g);
            if (-1 === v) {
              r.push(n(a.substring(g)));
              break
            }
            r.push(n(a.substring(g, v)), f), g = v + 1
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
        p = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
        h = /^\/[a-zA-Z]:/,
        d = /^(\/)?([A-Z]:)/,
        g = /^[a-zA-Z]:/,
        v = function() {
          function e(e, t, n, r, i) {
            "object" == typeof e ? (this.scheme = e.scheme || l, this.authority = e.authority || l, this.path = e.path || l, this.query = e.query || l, this.fragment = e.fragment || l) : (this.scheme = e || l, this.authority = t || l, this.path = n || l, this.query = r || l, this.fragment = i || l, function(e) {
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
            return void 0 === t ? t = this.scheme : null === t && (t = l), void 0 === n ? n = this.authority : null === n && (n = l), void 0 === r ? r = this.path : null === r && (r = l),
              void 0 === i ? i = this.query : null === i && (i = l), void 0 === o ? o = this.fragment : null === o && (o = l), t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new m(t, n, r, i, o)
          }, e.parse = function(e) {
            var t = p.exec(e);
            return t ? new m(t[2] || l, decodeURIComponent(t[4] || l), decodeURIComponent(t[5] || l), decodeURIComponent(t[7] || l), decodeURIComponent(t[9] || l)) : new m(l, l, l, l, l)
          }, e.file = function(e) {
            var t = l;
            if (r.isWindows && (e = e.replace(/\\/g, f)), e[0] === f && e[1] === f) {
              var n = e.indexOf(f, 2); - 1 === n ? (t = e.substring(2), e = f) : (t = e.substring(2, n), e = e.substring(n) || f)
            }
            return g.test(e) ? e = f + e : e[0] !== f && (e = f + e), new m("file", t, e, l, l)
          }, e.from = function(e) {
            return new m(e.scheme, e.authority, e.path, e.query, e.fragment)
          }, e.prototype.toString = function(e) {
            return void 0 === e && (e = !1), s(this, e)
          }, e.prototype.toJSON = function() {
            var e = {
              $mid: 1,
              fsPath: this.fsPath,
              external: this.toString()
            };
            return this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query),
              this.fragment && (e.fragment = this.fragment), e
          }, e.revive = function(t) {
            if (t) {
              if (t instanceof e) return t;
              var n = new m(t);
              return n._fsPath = t.fsPath, n._formatted = t.external, n
            }
            return t
          }, e
        }();
      t.default = v;
      var m = function(e) {
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
      }(v)
    }), define(e[32], t([1, 0, 10]), function(e, t, r) {
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
          this._value = "",
            this._pos = 0
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
      var p;
      ! function(e) {
        e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew"
      }(p = t.Touch || (t.Touch = {}));
      var h = function() {
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
          void 0 === t && (t = p.None);
          var n = this._map.get(e);
          if (n) return t !== p.None && this.touch(n, t), n.value
        }, e.prototype.set = function(e, t, n) {
          void 0 === n && (n = p.None);
          var r = this._map.get(e);
          if (r) r.value = t, n !== p.None && this.touch(r, n);
          else {
            switch (r = {
              key: e,
              value: t,
              next: void 0,
              previous: void 0
            }, n) {
              case p.None:
                this.addItemLast(r);
                break;
              case p.AsOld:
                this.addItemFirst(r);
                break;
              case p.AsNew:
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
          if (t === p.AsOld || t === p.AsNew)
            if (t === p.AsOld) {
              if (e === this._head) return;
              var n = e.next,
                r = e.previous;
              e === this._tail ? (r.next = void 0, this._tail = r) : (n.previous = r, r.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e,
                this._head = e
            } else if (t === p.AsNew) {
            if (e === this._tail) return;
            var n = e.next,
              r = e.previous;
            e === this._head ? (n.previous = void 0, this._head = n) : (n.previous = r, r.next = n), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e
          }
        }, e
      }();
      t.LinkedMap = h;
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
          return e.prototype.get.call(this, t, p.AsNew)
        }, t.prototype.peek = function(t) {
          return e.prototype.get.call(this, t, p.None)
        }, t.prototype.set = function(t, n) {
          e.prototype.set.call(this, t, n, p.AsNew), this.checkTrim()
        }, t.prototype.checkTrim = function() {
          this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio))
        }, t
      }(h);
      t.LRUCache = d
    }), define(e[13], t([1, 0, 32]), function(e, t, n) {
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

      function p(e, t, n, r, i, o) {
        for (; t < n && i < o;) {
          if (e[t] !== r[i]) return !1;
          t += 1, i += 1
        }
        return !0
      }

      function h(e) {
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
      var g = /{(\d+)}/g;
      t.format = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          return 0 === t.length ? e : e.replace(g, function(e, n) {
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
      var v = new n.LRUCache(1e4);
      t.normalizeNFC = function(e) {
        return s(e, "NFC", v)
      };
      var m = new n.LRUCache(1e4);
      t.normalizeNFD = function(e) {
        return s(e, "NFD", m)
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
          if (p(e, i, n, t, 0, r)) return r;
          r -= 1, i += 1
        }
        return 0
      }, t.isHighSurrogate = function(e) {
        return 55296 <= e && e <= 56319
      }, t.isLowSurrogate = function(e) {
        return 56320 <= e && e <= 57343
      };
      var b = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
      t.containsRTL = function(e) {
        return b.test(e)
      };
      var _ = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEF8]|\uD83E[\uDD00-\uDDE6])/;
      t.containsEmoji = function(e) {
        return _.test(e)
      };
      var C = /^[\t\n\r\x20-\x7E]*$/;
      t.isBasicASCII = function(e) {
        return C.test(e)
      }, t.containsFullWidthCharacter = function(e) {
        for (var t = 0, n = e.length; t < n; t++)
          if (h(e.charCodeAt(t))) return !0;
        return !1
      }, t.isFullWidthCharacter = h, t.lcut = function(e, n) {
        if (e.length < n) return e;
        for (var r = /\b/g, i = 0; r.test(e) && !(e.length - r.lastIndex < n);) i = r.lastIndex, r.lastIndex += 1;
        return e.substring(i).replace(/^\s/, t.empty)
      };
      var E = /\x1B\x5B[12]?K/g,
        w = /\x1b\[\d+m/g,
        S = /\x1b\[0?m/g;
      t.removeAnsiEscapeCodes = function(e) {
        return e && (e = (e = (e = e.replace(E, "")).replace(w, "")).replace(S, "")), e
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
    }), define(e[25], t([1, 0, 7, 13]), function(e, t, n, r) {
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
        for (var o = i ? "\\" : "/", u = a(e, o), c = u.length, p = !1, h = "", d = u.length; d <= r; d++)
          if (d === r || 47 === e.charCodeAt(d) || 92 === e.charCodeAt(d)) {
            if (s(e, c, d, "..")) {
              var g = h.lastIndexOf(o),
                v = h.slice(g + 1);
              (u || v.length > 0) && ".." !== v && (h = -1 === g ? "" : h.slice(0, g), p = !0)
            } else s(e, c, d, ".") && (u || h || d < r - 1) && (p = !0);
            if (!p) {
              var m = e.slice(c, d);
              "" !== h && h[h.length - 1] !== o && (h += o), h += m
            }
            c = d + 1, p = !1
          }
        return u + h
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
      var p = n.isWindows ? /[\\/:\*\?"<>\|]/g : /[\\/]/g,
        h = /^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])$/i;
      t.isValidBasename = function(e) {
          return !(!e || 0 === e.length || /^\s+$/.test(e) || (p.lastIndex = 0, p.test(e) || n.isWindows && h.test(e) || "." === e || ".." === e || n.isWindows && "." === e[e.length - 1] || n.isWindows && e.length !== e.trim().length))
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
          return n.isWindows ? u(e) : c(e)
        }, t.isAbsolute_win32 = u, t.isAbsolute_posix = c
    }), define(e[24], t([1, 0]), function(e, t) {
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
          n = t && "object" == typeof t && "function" == typeof t.then ? D : L, e._value = t, e._setState(n)
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
          return _(e, i, r), u(r ? t : null, r ? null : t, e, i, n)
        }

        function f(e, t) {
          var n = ++U;
          return _(e, n), u(null, t, e, n)
        }

        function p(e, t) {
          var n = ++U;
          return _(e, n, !0), u(t, null, e, n)
        }

        function h(e, t, n, r) {
          b(e, {
            c: t,
            e: n,
            p: r,
            asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.done")
          })
        }

        function d(e, t, n, r) {
          e._value = t, m(e, t, n, r), e._setState(M)
        }

        function g(t, n) {
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
                l._state !== D && l._listeners && n.push(l)
              } else H.prototype.done.call(t, c)
            }
          }
        }

        function v(t, n) {
          var r = t._value,
            i = t._listeners;
          if (i) {
            t._listeners = null;
            var s, a;
            for (s = 0, a = Array.isArray(i) ? i.length : 1; s < a; s++) {
              var u = 1 === a ? i : i[s],
                l = u.e,
                f = u.promise,
                p = e.Debug && (r && r.name === P ? e.Debug.MS_ASYNC_OP_STATUS_CANCELED : e.Debug.MS_ASYNC_OP_STATUS_ERROR);
              if (o._traceAsyncOperationCompleted(u.asyncOpID, p), f) {
                var h = !1;
                try {
                  l ? (o._traceAsyncCallbackStarting(u.asyncOpID), h = !0, l.handlesOnError || m(f, r, c, t, l),
                    f._setCompleteValue(l(r))) : f._setChainedErrorValue(r, t)
                } catch (e) {
                  f._setExceptionValue(e)
                } finally {
                  h && o._traceAsyncCallbackCompleted()
                }
                f._state !== D && f._listeners && n.push(f)
              } else q.prototype.done.call(t, null, l)
            }
          }
        }

        function m(e, t, n, r, i) {
          if (S._listeners[x]) {
            if (t instanceof Error && t.message === P) return;
            S.dispatchEvent(x, n(e, t, r, i))
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

        function b(e, t) {
          var n = e._listeners;
          n ? (n = Array.isArray(n) ? n : [n]).push(t) : n = t, e._listeners = n
        }

        function _(e, t, n) {
          e._isException = n || !1, e._errorId = t
        }

        function C(e, t, n, r) {
          e._value = t, m(e, t, n, r), e._setState(N)
        }

        function E(e, t) {
          var n;
          n = t && "object" == typeof t && "function" == typeof t.then ? D : F, e._value = t, e._setState(n)
        }

        function w(e, t, n, r) {
          var i = new z(e);
          return b(e, {
            promise: i,
            c: t,
            e: n,
            p: r,
            asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.then")
          }), i
        }
        e.Debug && (e.Debug.setNonUserCodeExceptions = !0);
        var S = new(n.Class.mix(n.Class.define(null, {}, {
          supportedForProcessing: !1
        }), i.eventMixin));
        S._listeners = {};
        var x = "error",
          P = "Canceled",
          O = !1,
          T = {
            promise: 1,
            thenPromise: 2,
            errorPromise: 4,
            exceptionPromise: 8,
            completePromise: 16
          };
        T.all = T.promise | T.thenPromise | T.errorPromise | T.exceptionPromise | T.completePromise;
        var k, I, D, j, A, R, L, F, M, N, U = 1;
        k = {
          name: "created",
          enter: function(e) {
            e._setState(I)
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
          name: "working",
          enter: s,
          cancel: function(e) {
            e._setState(A)
          },
          done: h,
          then: w,
          _completed: a,
          _error: d,
          _notify: s,
          _progress: y,
          _setCompleteValue: E,
          _setErrorValue: C
        }, D = {
          name: "waiting",
          enter: function(e) {
            var t = e._value;
            if (t instanceof z && t._state !== N && t._state !== F) b(t, {
              promise: e
            });
            else {
              var n = function(r) {
                t._errorId ? e._chainedError(r, t) : (m(e, r, c, t, n), e._error(r))
              };
              n.handlesOnError = !0, t.then(e._completed.bind(e), n, e._progress.bind(e))
            }
          },
          cancel: function(e) {
            e._setState(j)
          },
          done: h,
          then: w,
          _completed: a,
          _error: d,
          _notify: s,
          _progress: y,
          _setCompleteValue: E,
          _setErrorValue: C
        }, j = {
          name: "waiting_canceled",
          enter: function(e) {
            e._setState(R);
            var t = e._value;
            t.cancel && t.cancel()
          },
          cancel: s,
          done: h,
          then: w,
          _completed: a,
          _error: d,
          _notify: s,
          _progress: y,
          _setCompleteValue: E,
          _setErrorValue: C
        }, A = {
          name: "canceled",
          enter: function(e) {
            e._setState(R), e._cancelAction()
          },
          cancel: s,
          done: h,
          then: w,
          _completed: a,
          _error: d,
          _notify: s,
          _progress: y,
          _setCompleteValue: E,
          _setErrorValue: C
        }, R = {
          name: "canceling",
          enter: function(e) {
            var t = new Error(P);
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
        }, L = {
          name: "complete_notify",
          enter: function(e) {
            if (e.done = H.prototype.done, e.then = H.prototype.then, e._listeners)
              for (var t, n = [e]; n.length;)(t = n.shift())._state._notify(t, n);
            e._setState(F)
          },
          cancel: s,
          done: null,
          then: null,
          _completed: s,
          _error: s,
          _notify: g,
          _progress: s,
          _setCompleteValue: s,
          _setErrorValue: s
        }, F = {
          name: "success",
          enter: function(e) {
            e.done = H.prototype.done, e.then = H.prototype.then, e._cleanupAction()
          },
          cancel: s,
          done: null,
          then: null,
          _completed: s,
          _error: s,
          _notify: g,
          _progress: s,
          _setCompleteValue: s,
          _setErrorValue: s
        }, M = {
          name: "error_notify",
          enter: function(e) {
            if (e.done = q.prototype.done, e.then = q.prototype.then, e._listeners)
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
          name: "error",
          enter: function(e) {
            e.done = q.prototype.done, e.then = q.prototype.then, e._cleanupAction()
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
        };
        var W, B = n.Class.define(null, {
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
              var t = this._state._setErrorValue(this, e, p);
              return this._run(), t
            },
            _run: function() {
              for (; this._nextState;) this._state = this._nextState, this._nextState = null, this._state.enter(this)
            }
          }, {
            supportedForProcessing: !1
          }),
          z = n.Class.derive(B, function(e) {
            O && (!0 === O || O & T.thenPromise) && (this._stack = G._getStack()), this._creator = e, this._setState(k), this._run()
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
          q = n.Class.define(function(e) {
            O && (!0 === O || O & T.errorPromise) && (this._stack = G._getStack()), this._value = e, m(this, e, f)
          }, {
            cancel: function() {},
            done: function(e, t) {
              var n = this._value;
              if (t) try {
                t.handlesOnError || m(null, n, c, this, t);
                var r = t(n);
                return void(r && "object" == typeof r && "function" == typeof r.done && r.done())
              } catch (e) {
                n = e
              }
              n instanceof Error && n.message === P || G._doneHandler(n)
            },
            then: function(e, t) {
              if (!t) return this;
              var n, r = this._value;
              try {
                t.handlesOnError || m(null, r, c, this, t), n = new H(t(r))
              } catch (e) {
                n = e === r ? this : new V(e)
              }
              return n
            }
          }, {
            supportedForProcessing: !1
          }),
          V = n.Class.derive(q, function(e) {
            O && (!0 === O || O & T.exceptionPromise) && (this._stack = G._getStack()), this._value = e, m(this, e, p)
          }, {}, {
            supportedForProcessing: !1
          }),
          H = n.Class.define(function(e) {
            if (O && (!0 === O || O & T.completePromise) && (this._stack = G._getStack()), e && "object" == typeof e && "function" == typeof e.then) {
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
                G._doneHandler(e)
              }
            },
            then: function(e) {
              try {
                var t = e ? e(this._value) : this._value;
                return t === this._value ? this : new H(t)
              } catch (e) {
                return new V(e)
              }
            }
          }, {
            supportedForProcessing: !1
          }),
          G = n.Class.derive(B, function(e, t) {
            O && (!0 === O || O & T.promise) && (this._stack = G._getStack()), this._oncancel = t, this._setState(k), this._run();
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
                S.dispatchEvent("error", e)
              }
            },
            _cleanupAction: function() {
              this._oncancel = null
            }
          }, {
            addEventListener: function(e, t, n) {
              S.addEventListener(e, t, n)
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
                    s instanceof Error && s.name === P ? ++i === r.length && t(G.cancel) : n({
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
              return e && "object" == typeof e && "function" == typeof e.then ? e : new H(e)
            },
            cancel: {
              get: function() {
                return W = W || new q(new r(P))
              }
            },
            dispatchEvent: function(e, t) {
              return S.dispatchEvent(e, t)
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
                          t instanceof Error && t.name === P && c++
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
              S.removeEventListener(e, t, n)
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
              return new H(e)
            },
            wrapError: function(e) {
              return new q(e)
            },
            _veryExpensiveTagWithStack: {
              get: function() {
                return O
              },
              set: function(e) {
                O = e
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
          PromiseStateMachine: B,
          Promise: G,
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
    }(), define(e[2], t([104]), function(e) {
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
  define(e[23], t([1, 0, 2]), function(e, t, n) {
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
  }), define(e[14], t([1, 0, 7, 8, 2]), function(e, t, n, r, i) {
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
  }), define(e[3], t([1, 0, 9, 2, 37, 14, 75]), function(e, t, n, r, i, o, s) {
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
    var p = function() {
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
    t.Emitter = p;
    var h = function() {
      function e() {
        var e = this;
        this.hasListeners = !1, this.events = [], this.emitter = new p({
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
    t.EventMultiplexer = h, t.fromCallback = function(e) {
        var t, n = new p({
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
        var t = new p,
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
          u = new p({
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
    var g = function() {
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
      return new g(e)
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
        o = new p({
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
        i = new p({
          onListenerDidAdd: function(e, n, i) {
            t ? setTimeout(function() {
              return r(n, i)
            }) : r(n, i)
          }
        });
      return i.event
    };
    var v = function() {
      function e() {
        this.emitter = new p, this.event = this.emitter.event, this.disposable = n.empty
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
    t.Relay = v, t.fromNodeEventEmitter = function(e, t, n) {
      void 0 === n && (n = function(e) {
        return e
      });
      var r = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return i.fire(n.apply(void 0, e))
        },
        i = new p({
          onFirstListenerAdd: function() {
            return e.on(t, r)
          },
          onLastListenerRemove: function() {
            return e.removeListener(t, r)
          }
        });
      return i.event
    }
  }), define(e[44], t([1, 0, 2, 3]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function() {
      function e(e, t, n, i, o) {
        void 0 === t && (t = ""), void 0 === n && (n = ""), void 0 === i && (i = !0), this._onDidChange = new r.Emitter, this._id = e, this._label = t, this._cssClass = n, this._enabled = i, this._actionCallback = o
      }
      return e.prototype.dispose = function() {
          this._onDidChange.dispose()
        }, Object.defineProperty(e.prototype, "onDidChange", {
          get: function() {
            return this._onDidChange.event
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "id", {
          get: function() {
            return this._id
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "label", {
          get: function() {
            return this._label
          },
          set: function(e) {
            this._setLabel(e)
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype._setLabel = function(e) {
          this._label !== e && (this._label = e, this._onDidChange.fire({
            label: e
          }))
        }, Object.defineProperty(e.prototype, "tooltip", {
          get: function() {
            return this._tooltip
          },
          set: function(e) {
            this._setTooltip(e)
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype._setTooltip = function(e) {
          this._tooltip !== e && (this._tooltip = e, this._onDidChange.fire({
            tooltip: e
          }))
        },
        Object.defineProperty(e.prototype, "class", {
          get: function() {
            return this._cssClass
          },
          set: function(e) {
            this._setClass(e)
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype._setClass = function(e) {
          this._cssClass !== e && (this._cssClass = e, this._onDidChange.fire({
            class: e
          }))
        }, Object.defineProperty(e.prototype, "enabled", {
          get: function() {
            return this._enabled
          },
          set: function(e) {
            this._setEnabled(e)
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype._setEnabled = function(e) {
          this._enabled !== e && (this._enabled = e, this._onDidChange.fire({
            enabled: e
          }))
        }, Object.defineProperty(e.prototype, "checked", {
          get: function() {
            return this._checked
          },
          set: function(e) {
            this._setChecked(e)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "radio", {
          get: function() {
            return this._radio
          },
          set: function(e) {
            this._setRadio(e)
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype._setChecked = function(e) {
          this._checked !== e && (this._checked = e, this._onDidChange.fire({
            checked: e
          }))
        }, e.prototype._setRadio = function(e) {
          this._radio !== e && (this._radio = e, this._onDidChange.fire({
            radio: e
          }))
        }, Object.defineProperty(e.prototype, "order", {
          get: function() {
            return this._order
          },
          set: function(e) {
            this._order = e
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.run = function(e, t) {
          return void 0 !== this._actionCallback ? this._actionCallback(e) : n.TPromise.as(!0)
        }, e
    }();
    t.Action = i;
    var o = function() {
      function e() {
        this._onDidBeforeRun = new r.Emitter, this._onDidRun = new r.Emitter
      }
      return Object.defineProperty(e.prototype, "onDidRun", {
        get: function() {
          return this._onDidRun.event
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "onDidBeforeRun", {
        get: function() {
          return this._onDidBeforeRun.event
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.run = function(e, t) {
        var r = this;
        return e.enabled ? (this._onDidBeforeRun.fire({
          action: e
        }), this.runAction(e, t).then(function(t) {
          r._onDidRun.fire({
            action: e,
            result: t
          })
        }, function(t) {
          r._onDidRun.fire({
            action: e,
            error: t
          })
        })) : n.TPromise.as(null)
      }, e.prototype.runAction = function(e, t) {
        var r = t ? e.run(t) : e.run();
        return n.TPromise.is(r) ? r : n.TPromise.wrap(r)
      }, e.prototype.dispose = function() {}, e
    }();
    t.ActionRunner = o
  }), define(e[45], t([1, 0, 3]), function(e, t, n) {
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
  }), define(e[22], t([1, 0, 14, 7, 2, 45, 9, 3]), function(e, t, r, i, o, s, a, u) {
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
      },
      t.asWinJsPromise = function(e) {
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
    var p = function() {
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
    t.Throttler = p;
    var h = function() {
      function e() {
        this.current = o.TPromise.wrap(null)
      }
      return e.prototype.queue = function(e) {
        return this.current = this.current.then(function() {
          return e()
        })
      }, e
    }();
    t.SimpleThrottler = h;
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
        this.cancelTimeout(), this.completionPromise && (this.completionPromise.cancel(), this.completionPromise = null)
      }, e.prototype.cancelTimeout = function() {
        null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
      }, e
    }();
    t.Delayer = d;
    var g = function(e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return n.throttler = new p, n
      }
      return n(t, e), t.prototype.trigger = function(t, n) {
        var r = this;
        return e.prototype.trigger.call(this, function() {
          return r.throttler.queue(t)
        }, n)
      }, t
    }(d);
    t.ThrottledDelayer = g;
    var v = function() {
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
    t.Barrier = v;
    var m = function(e) {
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
    t.ShallowCancelThenPromise = m, t.timeout = function(e) {
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
    var b = function(e) {
      function t() {
        return e.call(this, 1) || this
      }
      return n(t, e), t
    }(y);
    t.Queue = b;
    var _ = function() {
      function e() {
        this.queues = Object.create(null)
      }
      return e.prototype.queueFor = function(e) {
        var t = this,
          n = e.toString();
        if (!this.queues[n]) {
          var r = new b;
          r.onFinished(function() {
            r.dispose(), delete t.queues[n]
          }), this.queues[n] = r
        }
        return this.queues[n]
      }, e
    }();
    t.ResourceQueue = _, t.setDisposableTimeout = function(e, t) {
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
    }(a.Disposable);
    t.TimeoutTimer = C;
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
    }(a.Disposable);
    t.IntervalTimer = E;
    var w = function() {
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
    t.RunOnceScheduler = w, t.nfcall = function(e) {
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
    var S = function(e) {
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
    }(u.Emitter);
    t.ThrottledEmitter = S
  }), define(e[60], t([1, 0, 23, 13, 25, 32, 2]), function(e, t, n, r, i, o, s) {
    "use strict";

    function a(e) {
      switch (e) {
        case 0:
          return "";
        case 1:
          return _ + "*?";
        default:
          return "(?:" + b + "|" + _ + "+" + b + "|" + b + _ + "+)*?"
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
          return e === m
        })) t = ".*";
      else {
        var i = !1;
        n.forEach(function(e, o) {
          if (e !== m) {
            for (var s, l = !1, f = "", p = !1, h = "", d = 0; d < e.length; d++)
              if ("}" !== (s = e[d]) && l) f += s;
              else if (!p || "]" === s && h) switch (s) {
              case "{":
                l = !0;
                continue;
              case "[":
                p = !0;
                continue;
              case "}":
                var g = "(?:" + u(f, ",").map(function(e) {
                  return c(e)
                }).join("|") + ")";
                t += g, l = !1, f = "";
                break;
              case "]":
                t += "[" + h + "]", p = !1, h = "";
                break;
              case "?":
                t += _;
                continue;
              case "*":
                t += a(1);
                continue;
              default:
                t += r.escapeRegExpCharacters(s)
            } else {
              h += "-" === s ? s : "^" !== s && "!" !== s || h ? s === y ? "" : r.escapeRegExpCharacters(s) : "^"
            }
            o < n.length - 1 && n[o + 1] !== m && (t += b), i = !1
          } else i || (t += a(2), i = !0)
        })
      }
      return t
    }

    function l(e, t) {
      if (!e) return I;
      var i;
      i = "string" != typeof e ? e.pattern : e;
      var o = (i = i.trim()) + "_" + !!t.trimForExclusions,
        s = T.get(o);
      if (s) return f(s, e);
      var a;
      if (E.test(i)) {
        var u = i.substr(4);
        s = function(e, t) {
          return e && r.endsWith(e, u) ? i : null
        }
      } else s = (a = w.exec(p(i, t))) ? function(e, t) {
        var n = "/" + e,
          i = "\\" + e,
          o = function(o, s) {
            return o ? s ? s === e ? t : null : o === e || r.endsWith(o, n) || r.endsWith(o, i) ? t : null : null
          },
          s = [e];
        return o.basenames = s, o.patterns = [t], o.allBasenames = s, o
      }(a[1], i) : (t.trimForExclusions ? x : S).test(i) ? function(e, t) {
        var r = v(e.slice(1, -1).split(",").map(function(e) {
            return l(e, t)
          }).filter(function(e) {
            return e !== I
          }), e),
          i = r.length;
        if (!i) return I;
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
      }(i, t) : (a = P.exec(p(i, t))) ? h(a[1].substr(1), i, !0) : (a = O.exec(p(i, t))) ? h(a[1], i, !1) : function(e) {
        try {
          var t = new RegExp("^" + c(e) + "$");
          return function(n, r) {
            return t.lastIndex = 0, n && t.test(n) ? e : null
          }
        } catch (e) {
          return I
        }
      }(i);
      return T.set(o, s), f(s, e)
    }

    function f(e, t) {
      return "string" == typeof t ? e : function(n, r) {
        return i.isEqualOrParent(n, t.base) ? e(i.normalize(t.pathToRelative(t.base, n)), r) : null
      }
    }

    function p(e, t) {
      return t.trimForExclusions && r.endsWith(e, "/**") ? e.substr(0, e.length - 2) : e
    }

    function h(e, t, n) {
      var o = i.nativeSep !== i.sep ? e.replace(C, i.nativeSep) : e,
        s = i.nativeSep + o,
        a = n ? function(e, n) {
          return e && (e === o || r.endsWith(e, s)) ? t : null
        } : function(e, n) {
          return e && e === o ? t : null
        };
      return a.allPaths = [(n ? "*/" : "./") + e], a
    }

    function d(e, t) {
      if (void 0 === t && (t = {}), !e) return k;
      if ("string" == typeof e || g(e)) {
        var r = l(e, t);
        if (r === I) return k;
        var o = function(e, t) {
          return !!r(e, t)
        };
        return r.allBasenames && (o.allBasenames = r.allBasenames), r.allPaths && (o.allPaths = r.allPaths), o
      }
      return function(e, t) {
        var r = v(Object.getOwnPropertyNames(e).map(function(n) {
            return function(e, t, n) {
              if (!1 === t) return I;
              var r = l(e, n);
              if (r === I) return I;
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
            return e !== I
          })),
          o = r.length;
        if (!o) return I;
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
              var p = r[l](e, t, a);
              if (p) return p
            }
            return null
          },
          p = n.first(r, function(e) {
            return !!e.allBasenames
          });
        p && (f.allBasenames = p.allBasenames);
        var h = r.reduce(function(e, t) {
          return t.allPaths ? e.concat(t.allPaths) : e
        }, []);
        h.length && (f.allPaths = h);
        return f
      }(e, t)
    }

    function g(e) {
      var t = e;
      return t && "string" == typeof t.base && "string" == typeof t.pattern && "function" == typeof t.pathToRelative
    }

    function v(e, t) {
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
    var m = "**",
      y = "/",
      b = "[/\\\\]",
      _ = "[^/\\\\]",
      C = /\//g;
    t.splitGlobAware = u;
    var E = /^\*\*\/\*\.[\w\.-]+$/,
      w = /^\*\*\/([\w\.-]+)\/?$/,
      S = /^{\*\*\/[\*\.]?[\w\.-]+\/?(,\*\*\/[\*\.]?[\w\.-]+\/?)*}$/,
      x = /^{\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?(,\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?)*}$/,
      P = /^\*\*((\/[\w\.-]+)+)\/?$/,
      O = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/,
      T = new o.LRUCache(1e4),
      k = function() {
        return !1
      },
      I = function() {
        return null
      };
    t.match = function(e, t, n) {
      return !(!e || !t) && d(e)(t, void 0, n)
    }, t.parse = d, t.isRelativePattern = g, t.parseToAsync = function(e, t) {
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
  }), define(e[61], t([1, 0, 25, 13, 60]), function(e, t, n, r, i) {
    "use strict";

    function o(e, t) {
      void 0 === t && (t = !1);
      var r = function(e) {
        return {
          id: e.id,
          mime: e.mime,
          filename: e.filename,
          extension: e.extension,
          filepattern: e.filepattern,
          firstline: e.firstline,
          userConfigured: e.userConfigured,
          filenameLowercase: e.filename ? e.filename.toLowerCase() : void 0,
          extensionLowercase: e.extension ? e.extension.toLowerCase() : void 0,
          filepatternLowercase: e.filepattern ? e.filepattern.toLowerCase() : void 0,
          filepatternOnPath: !!e.filepattern && e.filepattern.indexOf(n.sep) >= 0
        }
      }(e);
      c.push(r), r.userConfigured ? f.push(r) : l.push(r), t && !r.userConfigured && c.forEach(function(e) {
        e.mime === r.mime || e.userConfigured || (r.extension && e.extension === r.extension && console.warn("Overwriting extension <<" + r.extension + ">> to now point to mime <<" + r.mime + ">>"), r.filename && e.filename === r.filename && console.warn("Overwriting filename <<" + r.filename + ">> to now point to mime <<" + r.mime + ">>"), r.filepattern && e.filepattern === r.filepattern && console.warn("Overwriting filepattern <<" + r.filepattern + ">> to now point to mime <<" + r.mime + ">>"), r.firstline && e.firstline === r.firstline && console.warn("Overwriting firstline <<" + r.firstline + ">> to now point to mime <<" + r.mime + ">>"))
      })
    }

    function s(e, i) {
      if (!e) return [t.MIME_UNKNOWN];
      e = e.toLowerCase();
      var o = n.basename(e),
        s = a(e, o, f);
      if (s) return [s, t.MIME_TEXT];
      var u = a(e, o, l);
      if (u) return [u, t.MIME_TEXT];
      if (i) {
        var p = function(e) {
          r.startsWithUTF8BOM(e) && (e = e.substr(1));
          if (e.length > 0)
            for (var t = 0; t < c.length; ++t) {
              var n = c[t];
              if (n.firstline) {
                var i = e.match(n.firstline);
                if (i && i.length > 0) return n.mime
              }
            }
          return null
        }(i);
        if (p) return [p, t.MIME_TEXT]
      }
      return [t.MIME_UNKNOWN]
    }

    function a(e, t, n) {
      for (var o, s, a, u = n.length - 1; u >= 0; u--) {
        var c = n[u];
        if (t === c.filenameLowercase) {
          o = c;
          break
        }
        if (c.filepattern && (!s || c.filepattern.length > s.filepattern.length)) {
          var l = c.filepatternOnPath ? e : t;
          i.match(c.filepatternLowercase, l) && (s = c)
        }
        c.extension && (!a || c.extension.length > a.extension.length) && r.endsWith(t, c.extensionLowercase) && (a = c)
      }
      return o ? o.mime : s ? s.mime : a ? a.mime : null
    }

    function u(e) {
      return !e || ("string" == typeof e ? e === t.MIME_BINARY || e === t.MIME_TEXT || e === t.MIME_UNKNOWN : 1 === e.length && u(e[0]))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.MIME_TEXT = "text/plain", t.MIME_BINARY = "application/octet-stream", t.MIME_UNKNOWN = "application/unknown";
    var c = [],
      l = [],
      f = [];
    t.registerTextMime = o, t.clearTextMimes = function(e) {
      e ? (c = c.filter(function(e) {
        return !e.userConfigured
      }), f = []) : (c = [], l = [], f = [])
    }, t.guessMimeTypes = s, t.isUnspecific = u, t.suggestFilename = function(e, t) {
      for (var n = 0; n < c.length; n++) {
        var r = c[n];
        if (!r.userConfigured && r.id === e && r.extension) return t + r.extension
      }
      return t
    }
  }), define(e[62], t([1, 0, 103]), function(e, t, n) {
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
      }),
      t.parallel = function(e, t, n) {
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
  }), define(e[31], t([1, 0, 24, 13, 7, 62, 20, 4, 2, 22]), function(e, t, n, r, i, o, s, a, u, c) {
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

    function p(e, t, n, r) {
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
            b(o, function(n, i) {
              p(a.join(e, n), a.join(t, n), function(e) {
                return i(e, void 0)
              }, r)
            }, n)
          })
        };
        h(t, 511 & o.mode).done(u, u)
      })
    }

    function h(e, t) {
      var n = function() {
        return c.nfcall(s.mkdir, e, t).then(null, function(t) {
          return "EEXIST" === t.code ? c.nfcall(s.stat, e).then(function(t) {
            return t.isDirectory ? null : u.TPromise.wrapError(new Error("'" + e + "' exists and is not a directory."))
          }) : u.TPromise.wrapError(t)
        })
      };
      return e === a.dirname(e) ? u.TPromise.as(!0) : n().then(null, function(r) {
        return "ENOENT" === r.code ? h(a.dirname(e), t).then(n) : u.TPromise.wrapError(r)
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
                  o--, n && (i = i || n),
                    0 === o && (i ? t(i) : s.rmdir(e, t))
                })
              })
            }
          })
        }) : t(null)
      })
    }

    function g(e) {
      try {
        var t = s.lstatSync(e);
        t.isDirectory() && !t.isSymbolicLink() ? (l(e).forEach(function(t) {
          return g(a.join(e, t))
        }), s.rmdirSync(e)) : s.unlinkSync(e)
      } catch (e) {
        if ("ENOENT" === e.code) return;
        throw e
      }
    }

    function v(e) {
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

    function m(e) {
      var t = a.dirname(e);
      if (e === t) return e;
      var n = (a.basename(e) || e).toLowerCase();
      try {
        var r = l(t).filter(function(e) {
          return e.toLowerCase() === n
        });
        if (1 === r.length) {
          if (o = m(t)) return a.join(o, r[0])
        } else if (r.length > 1) {
          var i = r.indexOf(n);
          if (i >= 0) {
            var o = m(t);
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
    var b = o.loop;
    t.readdirSync = l, t.readdir = f, t.copy = p, t.mkdirp = h, t.del = function(e, t, i, o) {
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
    }, t.delSync = g, t.mv = function(e, t, n) {
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
        return o ? o && e.toLowerCase() !== t.toLowerCase() && "EXDEV" === o.code || r.endsWith(e, ".") ? p(e, t, function(t) {
          if (t) return n(t);
          d(e, i)
        }) : n(o) : i(null)
      })
    };
    var _ = !0;
    t.writeFileAndFlush = function(e, t, n, r) {
      if (n = v(n), !_) return s.writeFile(e, t, n, r);
      s.open(e, n.flag, n.mode, function(e, n) {
        if (e) return r(e);
        s.writeFile(n, t, function(e) {
          if (e) return s.close(n, function() {
            return r(e)
          });
          s.fdatasync(n, function(e) {
            return e && (console.warn("[node.js fs] fdatasync is now disabled for this session because it failed: ", e), _ = !1),
              s.close(n, function(e) {
                return r(e)
              })
          })
        })
      })
    }, t.writeFileAndFlushSync = function(e, t, n) {
      if (n = v(n), !_) return s.writeFileSync(e, t, n);
      var r = s.openSync(e, n.flag, n.mode);
      try {
        s.writeFileSync(r, t);
        try {
          s.fdatasyncSync(r)
        } catch (e) {
          console.warn("[node.js fs] fdatasyncSync is now disabled for this session because it failed: ", e), _ = !1
        }
      } finally {
        s.closeSync(r)
      }
    }, t.realcaseSync = m, t.realpathSync = function(e) {
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
  }), define(e[71], t([1, 0, 20, 4, 5, 9, 3, 35, 31]), function(e, t, n, r, i, o, s, a, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = function() {
      function e(e, t) {
        void 0 === t && (t = {
          changeBufferDelay: 0,
          defaultConfig: Object.create(null),
          onError: function(e) {
            return console.error(e)
          }
        }), this._path = e, this.options = t, this.disposables = [], this.configName = r.basename(this._path), this._onDidUpdateConfiguration = new s.Emitter, this.disposables.push(this._onDidUpdateConfiguration), this.registerWatcher(), this.initAsync()
      }
      return Object.defineProperty(e.prototype, "path", {
        get: function() {
          return this._path
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "hasParseErrors", {
        get: function() {
          return this.parseErrors && this.parseErrors.length > 0
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "onDidUpdateConfiguration", {
        get: function() {
          return this._onDidUpdateConfiguration.event
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.initAsync = function() {
        var e = this;
        this.loadAsync(function(t) {
          e.loaded || e.updateCache(t), e.options.initCallback && e.options.initCallback(e.getConfig())
        })
      }, e.prototype.updateCache = function(e) {
        this.cache = e, this.loaded = !0
      }, e.prototype.loadSync = function() {
        try {
          return this.parse(n.readFileSync(this._path).toString())
        } catch (e) {
          return this.options.defaultConfig
        }
      }, e.prototype.loadAsync = function(e) {
        var t = this;
        n.readFile(this._path, function(n, r) {
          return e(n ? t.options.defaultConfig : t.parse(r.toString()))
        })
      }, e.prototype.parse = function(e) {
        var t;
        try {
          this.parseErrors = [], t = this.options.parse ? this.options.parse(e, this.parseErrors) : a.parse(e, this.parseErrors)
        } catch (e) {}
        return t || this.options.defaultConfig
      }, e.prototype.registerWatcher = function() {
        var e = this,
          t = r.dirname(this._path);
        this.watch(t, !0), n.lstat(this._path, function(t, r) {
          t || r.isDirectory() || r.isSymbolicLink() && n.readlink(e._path, function(t, n) {
            t || e.watch(n, !1)
          })
        })
      }, e.prototype.watch = function(e, t) {
        var r = this;
        if (!this.disposed) try {
          var i = u.watch(e, function(e, n) {
            return r.onConfigFileChange(e, n, t)
          });
          i.on("error", function(t, n) {
            return r.options.onError("Error watching " + e + " for configuration changes (" + t + ", " + n + ")")
          }), this.disposables.push(o.toDisposable(function() {
            i.removeAllListeners(), i.close()
          }))
        } catch (t) {
          n.exists(e, function(n) {
            n && r.options.onError("Failed to watch " + e + " for configuration changes (" + t.toString() + ")")
          })
        }
      }, e.prototype.onConfigFileChange = function(e, t, n) {
        var r = this;
        n && t !== this.configName || (this.timeoutHandle && (global.clearTimeout(this.timeoutHandle), this.timeoutHandle = null), this.timeoutHandle = global.setTimeout(function() {
          return r.reload()
        }, this.options.changeBufferDelay))
      }, e.prototype.reload = function(e) {
        var t = this;
        this.loadAsync(function(n) {
          if (i.equals(n, t.cache) || (t.updateCache(n), t._onDidUpdateConfiguration.fire({
              config: t.cache
            })), e) return e(n)
        })
      }, e.prototype.getConfig = function() {
        return this.ensureLoaded(), this.cache
      }, e.prototype.getValue = function(e, t) {
        if (this.ensureLoaded(), !e) return t;
        var n = this.cache ? this.cache[e] : void 0;
        return void 0 !== n ? n : t
      }, e.prototype.ensureLoaded = function() {
        this.loaded || this.updateCache(this.loadSync())
      }, e.prototype.dispose = function() {
        this.disposed = !0, this.disposables = o.dispose(this.disposables)
      }, e
    }();
    t.ConfigWatcher = c
  }), define(e[72], t([1, 0, 10]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n.default.parse(e.toUrl("paths")).fsPath,
      i = e.__$__nodeRequire(r);
    t.getAppDataPath = i.getAppDataPath, t.getDefaultUserDataPath = i.getDefaultUserDataPath
  }), define(e[18], t([1, 0, 2, 31, 4, 22, 20, 26, 7, 3]), function(e, t, n, r, i, o, s, a, u, c) {
    "use strict";

    function l(e) {
      return o.nfcall(r.readdir, e)
    }

    function f(e) {
      return h(e).then(function(t) {
        return t.isDirectory() && !t.isSymbolicLink() ? l(e).then(function(t) {
          return n.TPromise.join(t.map(function(t) {
            return f(i.join(e, t))
          }))
        }).then(function() {
          return d(e)
        }) : g(e)
      }, function(e) {
        if ("ENOENT" !== e.code) return n.TPromise.wrapError(e)
      })
    }

    function p(e) {
      return o.nfcall(s.stat, e)
    }

    function h(e) {
      return o.nfcall(s.lstat, e)
    }

    function d(e) {
      return o.nfcall(s.rmdir, e)
    }

    function g(e) {
      return o.nfcall(s.unlink, e)
    }

    function v(e, t, n) {
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
        (u.isWindows || u.isMacintosh) && (t = t.toLowerCase());
        return t
      }(e)).queue(function() {
        return o.nfcall(r.writeFileAndFlush, e, t, n)
      })
    }

    function m(e) {
      return p(e).then(function(e) {
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
    }, t.stat = p, t.lstat = h, t.rename = function(e, t) {
      return o.nfcall(s.rename, e, t)
    }, t.rmdir = d, t.unlink = g, t.symlink = function(e, t, n) {
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
    t.writeFile = v, t.readDirsInDir = function(e) {
      return l(e).then(function(t) {
        return n.TPromise.join(t.map(function(t) {
          return m(i.join(e, t))
        })).then(function(e) {
          return t.filter(function(t, n) {
            return e[n]
          })
        })
      })
    }, t.dirExists = m, t.fileExists = function(e) {
      return p(e).then(function(e) {
        return e.isFile()
      }, function() {
        return !1
      })
    };
    var b = a.tmpdir();
    t.del = function(e, t) {
      return void 0 === t && (t = b), o.nfcall(r.del, e, t)
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
  define(e[80], t([1, 0, 82, 8, 2]), function(e, t, n, o, s) {
      "use strict";

      function a(t, a) {
        return void 0 === a && (a = {}), r(this, void 0, s.TPromise, function() {
          var r, s, u, c, l, f;
          return i(this, function(i) {
            switch (i.label) {
              case 0:
                return r = n.parse(t), (s = a.proxyUrl || function(e) {
                  return "http:" === e.protocol ? process.env.HTTP_PROXY || process.env.http_proxy || null : "https:" === e.protocol ? process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || null : null
                }(r)) ? (u = n.parse(s), /^https?:$/.test(u.protocol) ? (c = {
                  host: u.hostname,
                  port: Number(u.port),
                  auth: u.auth,
                  rejectUnauthorized: !o.isBoolean(a.strictSSL) || a.strictSSL
                }, "http:" !== r.protocol ? [3, 2] : [4, new Promise(function(t, n) {
                  e(["http-proxy-agent"], t, n)
                })]) : [2, null]) : [2, null];
              case 1:
                return f = i.sent(), [3, 4];
              case 2:
                return [4, new Promise(function(t, n) {
                  e(["https-proxy-agent"], t, n)
                })];
              case 3:
                f = i.sent(), i.label = 4;
              case 4:
                return l = f, [2, new l(c)]
            }
          })
        })
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getProxyAgent = a
    }), define(e[33], t([1, 0, 2, 9, 3]), function(e, t, n, r, i) {
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
          this.protocol = e, this.channels = Object.create(null),
            this.activeRequests = Object.create(null), this.protocolListener = this.protocol.onMessage(function(e) {
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
        }, e.prototype.dispose = function() {
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
          this.channelClient.dispose(), this.channelClient = null, this.channelServer.dispose(),
            this.channelServer = null
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
    }), define(e[84], t([1, 0, 97, 2, 3, 33, 4, 26, 24]), function(e, t, r, i, o, s, a, u, c) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.generateRandomPipeName = function() {
        var e = c.generateUuid();
        return "win32" === process.platform ? "\\\\.\\pipe\\vscode-" + e + "-sock" : a.join(u.tmpdir(), "vscode-" + e + ".sock")
      };
      var l = function() {
        function e(t) {
          var n = this;
          this._socket = t, this._onMessage = new o.Emitter, this.onMessage = this._onMessage.event, this._writeBuffer = new(function() {
            function e() {
              this._data = [], this._totalLength = 0
            }
            return e.prototype.add = function(e, t) {
              var n = 0 === this._totalLength;
              return this._data.push(e, t), this._totalLength += e.length + t.length, n
            }, e.prototype.take = function() {
              var e = Buffer.concat(this._data, this._totalLength);
              return this._data.length = 0, this._totalLength = 0, e
            }, e
          }());
          var r = [],
            i = 0,
            s = {
              readHead: !0,
              bodyIsJson: !1,
              bodyLen: -1
            };
          t.on("data", function(t) {
            for (r.push(t), i += t.length; i > 0;) {
              if (s.readHead) {
                if (!(i >= e._headerLen)) break;
                o = Buffer.concat(r);
                s.bodyIsJson = 1 === o.readInt8(0), s.bodyLen = o.readInt32BE(1), s.readHead = !1;
                u = o.slice(e._headerLen);
                i = u.length, r = [u]
              }
              if (!s.readHead) {
                if (!(i >= s.bodyLen)) break;
                var o, a = (o = Buffer.concat(r)).toString("utf8", 0, s.bodyLen);
                s.bodyIsJson && (a = JSON.parse(a)), n._onMessage.fire(a);
                var u = o.slice(s.bodyLen);
                i = u.length, r = [u], s.bodyIsJson = !1, s.bodyLen = -1, s.readHead = !0
              }
            }
          })
        }
        return e.prototype.send = function(t) {
          var n = Buffer.alloc(e._headerLen);
          "string" != typeof t && (t = JSON.stringify(t), n.writeInt8(1, 0));
          var r = Buffer.from(t);
          n.writeInt32BE(r.length, 1), this._writeSoon(n, r)
        }, e.prototype._writeSoon = function(e, t) {
          var n = this;
          this._writeBuffer.add(e, t) && setImmediate(function() {
            n._socket.destroyed || n._socket.write(n._writeBuffer.take())
          })
        }, e._headerLen = 17, e
      }();
      t.Protocol = l;
      var f = function(e) {
        function t(n) {
          var r = e.call(this, t.toClientConnectionEvent(n)) || this;
          return r.server = n, r
        }
        return n(t, e), t.toClientConnectionEvent = function(e) {
          var t = o.fromNodeEventEmitter(e, "connection");
          return o.mapEvent(t, function(e) {
            return {
              protocol: new l(e),
              onDidClientDisconnect: o.once(o.fromNodeEventEmitter(e, "close"))
            }
          })
        }, t.prototype.dispose = function() {
          e.prototype.dispose.call(this), this.server.close(), this.server = null
        }, t
      }(s.IPCServer);
      t.Server = f;
      var p = function(e) {
        function t(t, n) {
          var r = e.call(this, new l(t), n) || this;
          return r.socket = t, r._onClose = new o.Emitter, t.once("close", function() {
            return r._onClose.fire()
          }), r
        }
        return n(t, e), Object.defineProperty(t.prototype, "onClose", {
          get: function() {
            return this._onClose.event
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.dispose = function() {
          e.prototype.dispose.call(this), this.socket.end(), this.socket = null
        }, t
      }(s.IPCClient);
      t.Client = p, t.serve = function(e) {
        return new i.TPromise(function(t, n) {
          var i = r.createServer();
          i.on("error", n), i.listen(e, function() {
            i.removeListener("error", n), t(new f(i))
          })
        })
      }, t.connect = function(e, t) {
        return new i.TPromise(function(n, i) {
          var o = r.createConnection(e, function() {
            o.removeListener("error", i), n(new p(o, t))
          });
          o.once("error", i)
        })
      }
    }), define(e[88], t([12, 11]), function(e, t) {
      return e.create("vs/base/common/severity", t)
    }), define(e[46], t([1, 0, 88, 13]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i;
      ! function(e) {
        e[e.Ignore = 0] = "Ignore", e[e.Info = 1] = "Info", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error"
      }(i || (i = {})),
      function(e) {
        var t = "error",
          i = "warning",
          o = "warn",
          s = "info",
          a = Object.create(null);
        a[e.Error] = n.localize(0, null), a[e.Warning] = n.localize(1, null), a[e.Info] = n.localize(2, null), e.fromValue = function(n) {
          return n ? r.equalsIgnoreCase(t, n) ? e.Error : r.equalsIgnoreCase(i, n) || r.equalsIgnoreCase(o, n) ? e.Warning : r.equalsIgnoreCase(s, n) ? e.Info : e.Ignore : e.Ignore
        }, e.toString = function(e) {
          return a[e] || r.empty
        }, e.compare = function(e, t) {
          return t - e
        }
      }(i || (i = {})), t.default = i
    }), define(e[47], t([12, 11]), function(e, t) {
      return e.create("vs/base/node/zip", t)
    }), define(e[48], t([12, 11]), function(e, t) {
      return e.create("vs/platform/configuration/common/configurationRegistry", t)
    }), define(e[49], t([12, 11]), function(e, t) {
      return e.create("vs/platform/extensionManagement/common/extensionManagement", t)
    }), define(e[50], t([12, 11]), function(e, t) {
      return e.create("vs/platform/extensionManagement/node/extensionGalleryService", t)
    }), define(e[51], t([12, 11]), function(e, t) {
      return e.create("vs/platform/extensionManagement/node/extensionManagementService", t)
    }),
    define(e[52], t([12, 11]), function(e, t) {
      return e.create("vs/platform/extensions/node/extensionValidator", t)
    }), define(e[53], t([12, 11]), function(e, t) {
      return e.create("vs/platform/message/common/message", t)
    }), define(e[54], t([12, 11]), function(e, t) {
      return e.create("vs/platform/request/node/request", t)
    }), define(e[55], t([12, 11]), function(e, t) {
      return e.create("vs/platform/telemetry/common/telemetryService", t)
    }), define(e[56], t([1, 0, 33, 3]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function() {
        function e(e) {
          this.service = e, this.onInstallExtension = r.buffer(e.onInstallExtension, !0), this.onDidInstallExtension = r.buffer(e.onDidInstallExtension, !0), this.onUninstallExtension = r.buffer(e.onUninstallExtension, !0), this.onDidUninstallExtension = r.buffer(e.onDidUninstallExtension, !0)
        }
        return e.prototype.call = function(e, t) {
          switch (e) {
            case "event:onInstallExtension":
              return n.eventToCall(this.onInstallExtension);
            case "event:onDidInstallExtension":
              return n.eventToCall(this.onDidInstallExtension);
            case "event:onUninstallExtension":
              return n.eventToCall(this.onUninstallExtension);
            case "event:onDidUninstallExtension":
              return n.eventToCall(this.onDidUninstallExtension);
            case "install":
              return this.service.install(t);
            case "installFromGallery":
              return this.service.installFromGallery(t[0]);
            case "uninstall":
              return this.service.uninstall(t[0], t[1]);
            case "getInstalled":
              return this.service.getInstalled(t);
            case "updateMetadata":
              return this.service.updateMetadata(t[0], t[1])
          }
        }, e
      }();
      t.ExtensionManagementChannel = i;
      var o = function() {
        function e(e) {
          this.channel = e, this._onInstallExtension = n.eventFromCall(this.channel, "event:onInstallExtension"), this._onDidInstallExtension = n.eventFromCall(this.channel, "event:onDidInstallExtension"), this._onUninstallExtension = n.eventFromCall(this.channel, "event:onUninstallExtension"), this._onDidUninstallExtension = n.eventFromCall(this.channel, "event:onDidUninstallExtension")
        }
        return Object.defineProperty(e.prototype, "onInstallExtension", {
          get: function() {
            return this._onInstallExtension
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "onDidInstallExtension", {
          get: function() {
            return this._onDidInstallExtension
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "onUninstallExtension", {
          get: function() {
            return this._onUninstallExtension
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "onDidUninstallExtension", {
          get: function() {
            return this._onDidUninstallExtension
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.install = function(e) {
          return this.channel.call("install", e)
        }, e.prototype.installFromGallery = function(e) {
          return this.channel.call("installFromGallery", [e])
        }, e.prototype.uninstall = function(e, t) {
          return void 0 === t && (t = !1), this.channel.call("uninstall", [e, t])
        }, e.prototype.getInstalled = function(e) {
          return void 0 === e && (e = null), this.channel.call("getInstalled", e)
        }, e.prototype.updateMetadata = function(e, t) {
          return this.channel.call("updateMetadata", [e, t])
        }, e
      }();
      t.ExtensionManagementChannelClient = o
    }), define(e[57], t([1, 0, 5]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = /^%([\w\d.-]+)%$/i;
      t.localizeManifest = function(e, t) {
        return n.cloneAndChange(e, function(e) {
          if ("string" == typeof e) {
            var n = r.exec(e);
            if (n) return t[n[1]] || e
          }
        })
      }
    }), define(e[58], t([1, 0, 52, 59, 4]), function(e, t, n, r, i) {
      "use strict";

      function o(e) {
        return "*" === (e = e.trim()) || h.test(e)
      }

      function s(e) {
        if (!o(e)) return null;
        if ("*" === (e = e.trim())) return {
          hasCaret: !1,
          hasGreaterEquals: !1,
          majorBase: 0,
          majorMustEqual: !1,
          minorBase: 0,
          minorMustEqual: !1,
          patchBase: 0,
          patchMustEqual: !1,
          preRelease: null
        };
        var t = e.match(h);
        return {
          hasCaret: "^" === t[1],
          hasGreaterEquals: ">=" === t[1],
          majorBase: "x" === t[2] ? 0 : parseInt(t[2], 10),
          majorMustEqual: "x" !== t[2],
          minorBase: "x" === t[4] ? 0 : parseInt(t[4], 10),
          minorMustEqual: "x" !== t[4],
          patchBase: "x" === t[6] ? 0 : parseInt(t[6], 10),
          patchMustEqual: "x" !== t[6],
          preRelease: t[8] || null
        }
      }

      function a(e) {
        if (!e) return null;
        var t = e.majorBase,
          n = e.majorMustEqual,
          r = e.minorBase,
          i = e.minorMustEqual,
          o = e.patchBase,
          s = e.patchMustEqual;
        return e.hasCaret && (0 === t ? s = !1 : (i = !1, s = !1)), {
          majorBase: t,
          majorMustEqual: n,
          minorBase: r,
          minorMustEqual: i,
          patchBase: o,
          patchMustEqual: s,
          isMinimum: e.hasGreaterEquals
        }
      }

      function u(e, t) {
        var n;
        n = "string" == typeof e ? a(s(e)) : e;
        var r;
        if (r = "string" == typeof t ? a(s(t)) : t, !n || !r) return !1;
        var i = n.majorBase,
          o = n.minorBase,
          u = n.patchBase,
          c = r.majorBase,
          l = r.minorBase,
          f = r.patchBase,
          p = r.majorMustEqual,
          h = r.minorMustEqual,
          d = r.patchMustEqual;
        return r.isMinimum ? i > c || !(i < c) && (o > l || !(o < l) && u >= f) : (1 !== i || 0 !== c || p && h && d || (c = 1, l = 0, f = 0, p = !0, h = !1, d = !1), !(i < c) && (i > c ? !p : !(o < l) && (o > l ? !h : !(u < f) && (!(u > f) || !d))))
      }

      function c(e, t, n) {
        return !(!t.isBuiltin && void 0 !== t.main) || l(e, t.engines.vscode, n)
      }

      function l(e, t, r) {
        void 0 === r && (r = []);
        var i = a(s(t));
        if (!i) return r.push(n.localize(0, null, t)), !1;
        if (0 === i.majorBase) {
          if (!i.majorMustEqual || !i.minorMustEqual) return r.push(n.localize(1, null, t)), !1
        } else if (!i.majorMustEqual) return r.push(n.localize(2, null, t)), !1;
        return !!u(e, i) || (r.push(n.localize(3, null, e, t)), !1)
      }

      function f(e) {
        if (!Array.isArray(e)) return !1;
        for (var t = 0, n = e.length; t < n; t++)
          if ("string" != typeof e[t]) return !1;
        return !0
      }

      function p(e, t, o, s) {
        return !! function(e, t, r) {
          if (!t) return r.push(n.localize(4, null)), !1;
          if ("string" != typeof t.publisher) return r.push(n.localize(5, null, "publisher")), !1;
          if ("string" != typeof t.name) return r.push(n.localize(6, null, "name")), !1;
          if ("string" != typeof t.version) return r.push(n.localize(7, null, "version")), !1;
          if (!t.engines) return r.push(n.localize(8, null, "engines")), !1;
          if ("string" != typeof t.engines.vscode) return r.push(n.localize(9, null, "engines.vscode")), !1;
          if (void 0 !== t.extensionDependencies && !f(t.extensionDependencies)) return r.push(n.localize(10, null, "extensionDependencies")), !1;
          if (void 0 !== t.activationEvents) {
            if (!f(t.activationEvents)) return r.push(n.localize(11, null, "activationEvents")), !1;
            if (void 0 === t.main) return r.push(n.localize(12, null, "activationEvents", "main")), !1
          }
          if (void 0 !== t.main) {
            if ("string" != typeof t.main) return r.push(n.localize(13, null, "main")), !1;
            var o = i.join(e, t.main);
            if (o.indexOf(e) && r.push(n.localize(14, null, o, e)),
              void 0 === t.activationEvents) return r.push(n.localize(15, null, "activationEvents", "main")), !1
          }
          return !0
        }(t, o, s) && (r.valid(o.version) ? c(e, o, s) : (s.push(n.localize(16, null)), !1))
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var h = /^(\^|>=)?((\d+)|x)\.((\d+)|x)\.((\d+)|x)(\-.*)?$/;
      t.isValidVersionStr = o, t.parseVersion = s, t.normalizeVersion = a, t.isValidVersion = u, t.isValidExtensionVersion = c, t.isVersionValid = l, t.isValidExtensionDescription = p
    }), define(e[40], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = function() {
        return function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this.ctor = e, this.staticArguments = t
        }
      }();
      t.SyncDescriptor = n, t.createSyncDescriptor = function(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        return new(n.bind.apply(n, [void 0, e].concat(t)))
      }
    }), define(e[6], t([1, 0]), function(e, t) {
      "use strict";

      function n(e, t, n, r) {
        t[i.DI_TARGET] === t ? t[i.DI_DEPENDENCIES].push({
          id: e,
          index: n,
          optional: r
        }) : (t[i.DI_DEPENDENCIES] = [{
          id: e,
          index: n,
          optional: r
        }], t[i.DI_TARGET] = t)
      }

      function r(e) {
        if (i.serviceIds.has(e)) return i.serviceIds.get(e);
        var t = function(e, r, i) {
          if (3 !== arguments.length) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
          n(t, e, i, !1)
        };
        return t.toString = function() {
          return e
        }, i.serviceIds.set(e, t), t
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i;
      ! function(e) {
        e.serviceIds = new Map, e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies", e.getServiceDependencies = function(t) {
          return t[e.DI_DEPENDENCIES] || []
        }
      }(i = t._util || (t._util = {})), t.IInstantiationService = r("instantiationService"), t.createDecorator = r, t.optional = function(e) {
        return function(t, r, i) {
          if (3 !== arguments.length) throw new Error("@optional-decorator can only be used to decorate a parameter");
          n(e, t, i, !0)
        }
      }
    }), define(e[17], t([1, 0, 6]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IEnvironmentService = n.createDecorator("environmentService")
    }), define(e[29], t([1, 0, 49, 6]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EXTENSION_IDENTIFIER_PATTERN = "^([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$", t.EXTENSION_IDENTIFIER_REGEX = new RegExp(t.EXTENSION_IDENTIFIER_PATTERN);
      ! function(e) {
        e[e.System = 0] = "System", e[e.User = 1] = "User"
      }(t.LocalExtensionType || (t.LocalExtensionType = {})), t.IExtensionManagementService = r.createDecorator("extensionManagementService"), t.IExtensionGalleryService = r.createDecorator("extensionGalleryService");
      ! function(e) {
        e[e.NoneOrRelevance = 0] = "NoneOrRelevance", e[e.LastUpdatedDate = 1] = "LastUpdatedDate", e[e.Title = 2] = "Title", e[e.PublisherName = 3] = "PublisherName", e[e.InstallCount = 4] = "InstallCount", e[e.PublishedDate = 5] = "PublishedDate", e[e.AverageRating = 6] = "AverageRating", e[e.WeightedRating = 12] = "WeightedRating"
      }(t.SortBy || (t.SortBy = {}));
      ! function(e) {
        e[e.Default = 0] = "Default", e[e.Ascending = 1] = "Ascending", e[e.Descending = 2] = "Descending"
      }(t.SortOrder || (t.SortOrder = {}));
      ! function(e) {
        e.Uninstall = "uninstall"
      }(t.StatisticType || (t.StatisticType = {}));
      ! function(e) {
        e[e.Disabled = 0] = "Disabled", e[e.WorkspaceDisabled = 1] = "WorkspaceDisabled", e[e.Enabled = 2] = "Enabled", e[e.WorkspaceEnabled = 3] = "WorkspaceEnabled"
      }(t.EnablementState || (t.EnablementState = {})), t.IExtensionEnablementService = r.createDecorator("extensionEnablementService"), t.IExtensionTipsService = r.createDecorator("extensionTipsService"), t.ExtensionsLabel = n.localize(0, null), t.ExtensionsChannelId = "extensions", t.PreferencesLabel = n.localize(1, null)
    });
  var o = this && this.__assign || Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
    }
    return e
  };
  define(e[38], t([1, 0, 29]), function(e, t, n) {
    "use strict";

    function r(e, t) {
      return e.uuid && t.uuid ? e.uuid === t.uuid : e.id === t.id || a(e.id) === a(t.id)
    }

    function i(e, t) {
      return e + "." + t.toLocaleLowerCase()
    }

    function s(e) {
      return i(e.manifest.publisher, e.manifest.name)
    }

    function a(e) {
      return e.replace(n.EXTENSION_IDENTIFIER_REGEX, function(e, t, n) {
        return i(t, n)
      })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      t.areSameExtensions = r, t.getGalleryExtensionId = i, t.getGalleryExtensionIdFromLocal = s, t.LOCAL_EXTENSION_ID_REGEX = /^([^.]+\..+)-(\d+\.\d+\.\d+(-.*)?)$/, t.getIdFromLocalExtensionId = function(e) {
        var n = t.LOCAL_EXTENSION_ID_REGEX.exec(e);
        return a(n && n[1] ? n[1] : e)
      }, t.adoptToGalleryExtensionId = a, t.groupByExtension = function(e, t) {
        for (var n = [], i = function(e) {
            for (var i = 0, o = n; i < o.length; i++) {
              var s = o[i];
              if (s.some(function(n) {
                  return r(t(n), t(e))
                })) return s
            }
            return null
          }, o = 0, s = e; o < s.length; o++) {
          var a = s[o],
            u = i(a);
          u ? u.push(a) : n.push([a])
        }
        return n
      }, t.getLocalExtensionTelemetryData = function(e) {
        return {
          id: s(e),
          name: e.manifest.name,
          galleryId: null,
          publisherId: e.metadata ? e.metadata.publisherId : null,
          publisherName: e.manifest.publisher,
          publisherDisplayName: e.metadata ? e.metadata.publisherDisplayName : null,
          dependencies: e.manifest.extensionDependencies && e.manifest.extensionDependencies.length > 0
        }
      }, t.getGalleryExtensionTelemetryData = function(e) {
        return o({
          id: e.identifier.id,
          name: e.name,
          galleryId: e.identifier.uuid,
          publisherId: e.publisherId,
          publisherName: e.publisher,
          publisherDisplayName: e.publisherDisplayName,
          dependencies: e.properties.dependencies.length > 0
        }, e.telemetryData)
      }, t.BetterMergeDisabledNowKey = "extensions/bettermergedisablednow", t.BetterMergeId = "pprice.better-merge"
  }), define(e[65], t([1, 0, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.MANIFEST_CACHE_FOLDER = "CachedExtensions", t.USER_MANIFEST_CACHE_FILE = "user", t.BUILTIN_MANIFEST_CACHE_FILE = "builtin", t.IExtensionService = n.createDecorator("extensionService");
    var r = function() {
      return function(e, t, n, r, i) {
        this.startup = e, this.codeLoadingTime = t, this.activateCallTime = n, this.activateResolvedTime = r, this.activationEvent = i
      }
    }();
    t.ActivationTimes = r;
    var i = function() {
      return function(e, t) {
        this.description = e, this.value = t
      }
    }();
    t.ExtensionPointContribution = i
  }), define(e[39], t([1, 0]), function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function() {
      function e() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._entries = new Map;
        for (var n = 0, r = e; n < r.length; n++) {
          var i = r[n],
            o = i[0],
            s = i[1];
          this.set(o, s)
        }
      }
      return e.prototype.set = function(e, t) {
        var n = this._entries.get(e);
        return this._entries.set(e, t), n
      }, e.prototype.forEach = function(e) {
        this._entries.forEach(function(t, n) {
          return e(n, t)
        })
      }, e.prototype.has = function(e) {
        return this._entries.has(e)
      }, e.prototype.get = function(e) {
        return this._entries.get(e)
      }, e
    }();
    t.ServiceCollection = n
  }), define(e[67], t([1, 0, 14, 8, 36, 64, 40, 6, 39]), function(e, t, n, r, i, o, s, a, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = function() {
      function e(e, t) {
        void 0 === e && (e = new u.ServiceCollection), void 0 === t && (t = !1), this._services = e, this._strict = t, this._services.set(a.IInstantiationService, this)
      }
      return e.prototype.createChild = function(t) {
        var n = this;
        return this._services.forEach(function(e, r) {
          t.has(e) || (r instanceof s.SyncDescriptor && (r = n._createAndCacheServiceInstance(e, r)), t.set(e, r))
        }), new e(t, this._strict)
      }, e.prototype.invokeFunction = function(e) {
        for (var t = this, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
        var o;
        try {
          return o = {
            get: function(e, n) {
              var r = t._getOrCreateServiceInstance(e);
              if (!r && n !== a.optional) throw new Error("[invokeFunction] unkown service '" + e + "'");
              return r
            }
          }, e.apply(void 0, [o].concat(r))
        } finally {
          o.get = function() {
            throw n.illegalState("service accessor is only valid during the invocation of its target method")
          }
        }
      }, e.prototype.createInstance = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return e instanceof s.SyncDescriptor ? this._createInstance(e, t) : this._createInstance(new s.SyncDescriptor(e), t)
      }, e.prototype._createInstance = function(e, t) {
        for (var n = e.staticArguments.concat(t), i = a._util.getServiceDependencies(e.ctor).sort(function(e, t) {
            return e.index - t.index
          }), o = [], s = 0, u = i; s < u.length; s++) {
          var c = u[s],
            l = this._getOrCreateServiceInstance(c.id);
          if (!l && this._strict && !c.optional) throw new Error("[createInstance] " + e.ctor.name + " depends on UNKNOWN service " + c.id + ".");
          o.push(l)
        }
        var f = i.length > 0 ? i[0].index : n.length;
        if (n.length !== f) {
          console.warn("[createInstance] First service dependency of " + e.ctor.name + " at position " + (f + 1) + " conflicts with " + n.length + " static arguments");
          var p = f - n.length;
          n = p > 0 ? n.concat(new Array(p)) : n.slice(0, f)
        }
        var h = [e.ctor];
        return h.push.apply(h, n), h.push.apply(h, o), r.create.apply(null, h)
      }, e.prototype._getOrCreateServiceInstance = function(e) {
        var t = this._services.get(e);
        return t instanceof s.SyncDescriptor ? this._createAndCacheServiceInstance(e, t) : t
      }, e.prototype._createAndCacheServiceInstance = function(e, t) {
        function n() {
          var e = new Error("[createInstance] cyclic dependency between services");
          throw e.message = r.toString(), e
        }
        i.ok(this._services.get(e) instanceof s.SyncDescriptor);
        for (var r = new o.Graph(function(e) {
            return e.id.toString()
          }), u = 0, c = [{
            id: e,
            desc: t
          }]; c.length;) {
          var l = c.pop();
          r.lookupOrInsertNode(l), u++ > 100 && n();
          for (var f = 0, p = a._util.getServiceDependencies(l.desc.ctor); f < p.length; f++) {
            var h = p[f],
              d = this._services.get(h.id);
            if (d || console.warn("[createInstance] " + e + " depends on " + h.id + " which is NOT registered."), d instanceof s.SyncDescriptor) {
              var g = {
                id: h.id,
                desc: d
              };
              r.insertEdge(l, g), c.push(g)
            }
          }
        }
        for (;;) {
          var v = r.roots();
          if (0 === v.length) {
            0 !== r.length && n();
            break
          }
          for (var m = 0, y = v; m < y.length; m++) {
            var b = y[m],
              _ = this._createInstance(b.data.desc, []);
            this._services.set(b.data.id, _), r.removeNode(b.data)
          }
        }
        return this._services.get(e)
      }, e
    }();
    t.InstantiationService = c
  }), define(e[68], t([1, 0, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    ! function(e) {
      e[e.Default = 1] = "Default", e[e.User = 2] = "User"
    }(t.KeybindingSource || (t.KeybindingSource = {})), t.IKeybindingService = n.createDecorator("keybindingService")
  });
  var s = this && this.__decorate || function(e, t, n, r) {
      var i, o = arguments.length,
        s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
      else
        for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
      return o > 3 && s && Object.defineProperty(t, n, s), s
    },
    a = this && this.__param || function(e, t) {
      return function(n, r) {
        t(n, r, e)
      }
    };
  define(e[27], t([1, 0, 17, 6, 7]), function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ILogService = r.createDecorator("logService");
    var o;
    ! function(e) {
      e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Info = 2] = "Info", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical", e[e.Off = 6] = "Off"
    }(o = t.LogLevel || (t.LogLevel = {}));
    var u = function() {
      function e(e) {
        this.level = o.Error, this.setLevel(e.logLevel), this.useColors = !i.isWindows
      }
      return e.prototype.setLevel = function(e) {
        this.level = e
      }, e.prototype.getLevel = function() {
        return this.level
      }, e.prototype.trace = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= o.Trace && (this.useColors ? console.log.apply(console, ["[90m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.log.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
      }, e.prototype.debug = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= o.Debug && (this.useColors ? console.log.apply(console, ["[90m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.log.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
      }, e.prototype.info = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= o.Info && (this.useColors ? console.log.apply(console, ["[90m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.log.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
      }, e.prototype.warn = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= o.Warning && (this.useColors ? console.warn.apply(console, ["[93m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.warn.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
      }, e.prototype.error = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= o.Error && (this.useColors ? console.error.apply(console, ["[91m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.error.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
      }, e.prototype.critical = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= o.Critical && (this.useColors ? console.error.apply(console, ["[90m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.error.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
      }, e.prototype.dispose = function() {}, e = s([a(0, n.IEnvironmentService)], e)
    }();
    t.ConsoleLogMainService = u;
    var c = function() {
      function e(e) {
        this.level = o.Error, this.setLevel(e.logLevel)
      }
      return e.prototype.setLevel = function(e) {
          this.level = e
        }, e.prototype.getLevel = function() {
          return this.level
        }, e.prototype.trace = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this.level <= o.Trace && console.log.apply(console, ["%cTRACE", "color: #888", e].concat(t))
        },
        e.prototype.debug = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this.level <= o.Debug && console.log.apply(console, ["%cDEBUG", "background: #eee; color: #888", e].concat(t))
        }, e.prototype.info = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this.level <= o.Info && console.log.apply(console, ["%c INFO", "color: #33f", e].concat(t))
        }, e.prototype.warn = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this.level <= o.Warning && console.log.apply(console, ["%c WARN", "color: #993", e].concat(t))
        }, e.prototype.error = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this.level <= o.Error && console.log.apply(console, ["%c  ERR", "color: #f33", e].concat(t))
        }, e.prototype.critical = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this.level <= o.Critical && console.log.apply(console, ["%cCRITI", "background: #f33; color: white", e].concat(t))
        }, e.prototype.dispose = function() {}, e = s([a(0, n.IEnvironmentService)], e)
    }();
    t.ConsoleLogService = c;
    var l = function() {
      function e(e) {
        this.logServices = e
      }
      return e.prototype.setLevel = function(e) {
        for (var t = 0, n = this.logServices; t < n.length; t++) {
          n[t].setLevel(e)
        }
      }, e.prototype.getLevel = function() {
        for (var e = 0, t = this.logServices; e < t.length; e++) {
          return t[e].getLevel()
        }
        return o.Info
      }, e.prototype.trace = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        for (var r = 0, i = this.logServices; r < i.length; r++) {
          var o = i[r];
          o.trace.apply(o, [e].concat(t))
        }
      }, e.prototype.debug = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        for (var r = 0, i = this.logServices; r < i.length; r++) {
          var o = i[r];
          o.debug.apply(o, [e].concat(t))
        }
      }, e.prototype.info = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        for (var r = 0, i = this.logServices; r < i.length; r++) {
          var o = i[r];
          o.info.apply(o, [e].concat(t))
        }
      }, e.prototype.warn = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        for (var r = 0, i = this.logServices; r < i.length; r++) {
          var o = i[r];
          o.warn.apply(o, [e].concat(t))
        }
      }, e.prototype.error = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        for (var r = 0, i = this.logServices; r < i.length; r++) {
          var o = i[r];
          o.error.apply(o, [e].concat(t))
        }
      }, e.prototype.critical = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        for (var r = 0, i = this.logServices; r < i.length; r++) {
          var o = i[r];
          o.critical.apply(o, [e].concat(t))
        }
      }, e.prototype.dispose = function() {
        for (var e = 0, t = this.logServices; e < t.length; e++) {
          t[e].dispose()
        }
      }, e
    }();
    t.MultiplexLogService = l;
    var f = function() {
      function e() {}
      return e.prototype.setLevel = function(e) {}, e.prototype.getLevel = function() {
        return o.Info
      }, e.prototype.trace = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      }, e.prototype.debug = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      }, e.prototype.info = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      }, e.prototype.warn = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      }, e.prototype.error = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      }, e.prototype.critical = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      }, e.prototype.dispose = function() {}, e
    }();
    t.NullLogService = f
  }), define(e[70], t([1, 0, 4, 27, 100]), function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.createSpdLogService = function(e, t, s) {
      try {
        i.setAsyncMode(8192, 2e3);
        var a = s ? n.join(t.logsPath, s) : t.logsPath,
          u = n.join(a, e + ".log"),
          c = new i.RotatingLogger(e, u, 5242880, 6);
        return c.setLevel(0), new o(c, t.logLevel)
      } catch (e) {
        console.error(e)
      }
      return new r.NullLogService
    };
    var o = function() {
      function e(e, t) {
        void 0 === t && (t = r.LogLevel.Error), this.logger = e, this.level = t
      }
      return e.prototype.setLevel = function(e) {
        this.level = e
      }, e.prototype.getLevel = function() {
        return this.level
      }, e.prototype.trace = function() {
        this.level <= r.LogLevel.Trace && this.logger.trace(this.format(arguments))
      }, e.prototype.debug = function() {
        this.level <= r.LogLevel.Debug && this.logger.debug(this.format(arguments))
      }, e.prototype.info = function() {
        this.level <= r.LogLevel.Info && this.logger.info(this.format(arguments))
      }, e.prototype.warn = function() {
        this.level <= r.LogLevel.Warning && this.logger.warn(this.format(arguments))
      }, e.prototype.error = function() {
        if (this.level <= r.LogLevel.Error) {
          var e = arguments[0];
          if (e instanceof Error) {
            var t = Array.prototype.slice.call(arguments);
            t[0] = e.stack, this.logger.error(this.format(t))
          } else this.logger.error(this.format(arguments))
        }
      }, e.prototype.critical = function() {
        this.level <= r.LogLevel.Critical && this.logger.critical(this.format(arguments))
      }, e.prototype.dispose = function() {
        this.logger.flush(), this.logger.drop()
      }, e.prototype.format = function(e) {
        for (var t = "", n = 0; n < e.length; n++) {
          var r = e[n];
          if ("object" == typeof r) try {
            r = JSON.stringify(r)
          } catch (e) {}
          t += (n > 0 ? " " : "") + r
        }
        return t
      }, e
    }()
  }), define(e[30], t([1, 0, 53, 25, 2, 46, 6, 44]), function(e, t, n, r, i, o, s, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CloseAction = new a.Action("close.message", n.localize(0, null), null, !0, function() {
        return i.TPromise.as(!0)
      }),
      t.LaterAction = new a.Action("later.message", n.localize(1, null), null, !0, function() {
        return i.TPromise.as(!0)
      }), t.CancelAction = new a.Action("cancel.message", n.localize(2, null), null, !0, function() {
        return i.TPromise.as(!0)
      }), t.IMessageService = s.createDecorator("messageService");
    var u = 10;
    t.getConfirmMessage = function(e, t) {
      var i = [e];
      return i.push(""), i.push.apply(i, t.slice(0, u).map(function(e) {
        return r.basename(e.fsPath)
      })), t.length > u && (t.length - u == 1 ? i.push(n.localize(3, null)) : i.push(n.localize(4, null, t.length - u))), i.push(""), i.join("\n")
    }, t.IChoiceService = s.createDecorator("choiceService"), t.Severity = o.default
  }), define(e[73], t([1, 0, 2, 30]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function() {
      function e(e) {
        this.choiceService = e
      }
      return e.prototype.call = function(e, t) {
        switch (e) {
          case "choose":
            return this.choiceService.choose(t[0], t[1], t[2], t[3], t[4])
        }
        return n.TPromise.wrapError(new Error("invalid command"))
      }, e = s([a(0, r.IChoiceService)], e)
    }();
    t.ChoiceChannel = i;
    var o = function() {
      function e(e) {
        this.channel = e
      }
      return e.prototype.choose = function(e, t, n, r, i) {
        return this.channel.call("choose", [e, t, n, r, i])
      }, e
    }();
    t.ChoiceChannelClient = o
  }), define(e[28], t([1, 0, 4, 10]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n.dirname(r.default.parse(e.toUrl("")).fsPath),
      o = n.join(i, "package.json");
    t.default = e.__$__nodeRequire(o)
  }), define(e[21], t([1, 0, 4, 10]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n.dirname(r.default.parse(e.toUrl("")).fsPath),
      o = n.join(i, "product.json"),
      s = e.__$__nodeRequire(o);
    process.env.VSCODE_DEV && (s.nameShort += " Dev", s.nameLong += " Dev", s.dataFolderName += "-dev"), t.default = s
  }), define(e[76], t([1, 0, 9, 14, 2, 4, 18, 17, 21]), function(e, t, n, r, i, o, u, c, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = function() {
      function e(e) {
        this._environmentService = e, this._disposables = [], this._manageCachedDataSoon()
      }
      return e.prototype.dispose = function() {
          this._disposables = n.dispose(this._disposables)
        },
        e.prototype._manageCachedDataSoon = function() {
          if (this._environmentService.nodeCachedDataDir) {
            var t = o.dirname(this._environmentService.nodeCachedDataDir),
              n = o.basename(this._environmentService.nodeCachedDataDir),
              s = setTimeout(function() {
                s = void 0, u.readdir(t).then(function(r) {
                  var s = Date.now(),
                    a = [];
                  return r.forEach(function(r) {
                    if (r !== n) {
                      var i = o.join(t, r);
                      a.push(u.stat(i).then(function(t) {
                        if (t.isDirectory()) {
                          if (s - t.mtime.getTime() > e._DataMaxAge) return u.rimraf(i)
                        }
                      }))
                    }
                  }), i.TPromise.join(a)
                }).done(void 0, r.onUnexpectedError)
              }, 3e4);
            this._disposables.push({
              dispose: function() {
                clearTimeout(s)
              }
            })
          }
        }, e._DataMaxAge = l.default.nameLong.indexOf("Insiders") >= 0 ? 6048e5 : 7776e6, e = s([a(0, c.IEnvironmentService)], e)
    }();
    t.NodeCachedDataCleaner = f
  }), define(e[77], t([1, 0, 76]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.createSharedProcessContributions = function(e) {
      e.createInstance(n.NodeCachedDataCleaner)
    }
  }), define(e[78], t([1, 0, 99, 72, 26, 4, 10, 83, 28, 21, 27, 74, 7]), function(e, t, n, r, i, o, a, u, c, l, f, p, h) {
    "use strict";

    function d(e, t) {
      return h.isWindows ? function(e, t) {
        return "\\\\.\\pipe\\" + n.createHash("md5").update(e).digest("hex") + "-" + c.default.version + "-" + t + "-sock"
      }(e, t) : function(e, t) {
        return _ ? o.join(_, c.default.name + "-" + c.default.version + "-" + t + ".sock") : o.join(e, c.default.version + "-" + t + ".sock")
      }(e, t)
    }

    function g(e, t) {
      return m(e.debugPluginHost, e.debugBrkPluginHost, 5870, t, e.debugId)
    }

    function v(e, t) {
      return m(e.debugSearch, e.debugBrkSearch, 5876, t)
    }

    function m(e, t, n, r, i) {
      var o = t || e,
        s = Number(o) || (r ? null : n);
      return {
        port: s,
        break: !!s && Boolean(!!t),
        debugId: i
      }
    }

    function y(e, t) {
      if (e) {
        var n = o.resolve(e);
        return o.normalize(e) === n ? n : o.resolve(t.env.VSCODE_CWD || t.cwd(), e)
      }
    }

    function b(e, t) {
      return y(e["user-data-dir"], t) || o.resolve(r.getDefaultUserDataPath(t.platform))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var _ = process.env.XDG_RUNTIME_DIR,
      C = function() {
        function t(e, t) {
          if (this._args = e, this._execPath = t, !process.env.VSCODE_LOGS) {
            var n = p.toLocalISOString(new Date).replace(/-|:|\.\d+Z$/g, "");
            process.env.VSCODE_LOGS = o.join(this.userDataPath, "logs", n)
          }
          this.logsPath = process.env.VSCODE_LOGS
        }
        return Object.defineProperty(t.prototype, "args", {
            get: function() {
              return this._args
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "appRoot", {
            get: function() {
              return o.dirname(a.default.parse(e.toUrl("")).fsPath)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "execPath", {
            get: function() {
              return this._execPath
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "cliPath", {
            get: function() {
              return function(e, t, n) {
                return h.isWindows ? n ? o.join(o.dirname(e), "bin", l.default.applicationName + ".cmd") : o.join(t, "scripts", "code-cli.bat") : h.isLinux ? n ? o.join(o.dirname(e), "bin", "" + l.default.applicationName) : o.join(t, "scripts", "code-cli.sh") : n ? o.join(t, "bin", "code") : o.join(t, "scripts", "code-cli.sh")
              }(this.execPath, this.appRoot, this.isBuilt)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "userHome", {
            get: function() {
              return i.homedir()
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "userDataPath", {
            get: function() {
              return b(this._args, process)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "appNameLong", {
            get: function() {
              return l.default.nameLong
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "appQuality", {
            get: function() {
              return l.default.quality
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "appSettingsHome", {
            get: function() {
              return o.join(this.userDataPath, "User")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "appSettingsPath", {
            get: function() {
              return o.join(this.appSettingsHome, "settings.json")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "settingsSearchBuildId", {
            get: function() {
              return l.default.settingsSearchBuildId
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "settingsSearchUrl", {
            get: function() {
              return l.default.settingsSearchUrl
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "appKeybindingsPath", {
            get: function() {
              return o.join(this.appSettingsHome, "keybindings.json")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "isExtensionDevelopment", {
            get: function() {
              return !!this._args.extensionDevelopmentPath
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "backupHome", {
            get: function() {
              return o.join(this.userDataPath, "Backups")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "backupWorkspacesPath", {
            get: function() {
              return o.join(this.backupHome, "workspaces.json")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "workspacesHome", {
            get: function() {
              return o.join(this.userDataPath, "Workspaces")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "installSourcePath", {
            get: function() {
              return o.join(this.userDataPath, "installSource")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "extensionsPath", {
            get: function() {
              return y(this._args["extensions-dir"], process) || process.env.VSCODE_EXTENSIONS || o.join(this.userHome, l.default.dataFolderName, "extensions")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "extensionDevelopmentPath", {
            get: function() {
              return this._args.extensionDevelopmentPath ? o.normalize(this._args.extensionDevelopmentPath) : this._args.extensionDevelopmentPath
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "extensionTestsPath", {
            get: function() {
              return this._args.extensionTestsPath ? o.normalize(this._args.extensionTestsPath) : this._args.extensionTestsPath
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "disableExtensions", {
            get: function() {
              return this._args["disable-extensions"]
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "skipGettingStarted", {
            get: function() {
              return this._args["skip-getting-started"]
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "skipReleaseNotes", {
            get: function() {
              return this._args["skip-release-notes"]
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "skipAddToRecentlyOpened", {
            get: function() {
              return this._args["skip-add-to-recently-opened"]
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "debugExtensionHost", {
            get: function() {
              return g(this._args, this.isBuilt)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "debugSearch", {
            get: function() {
              return v(this._args, this.isBuilt)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "isBuilt", {
            get: function() {
              return !process.env.VSCODE_DEV
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "verbose", {
            get: function() {
              return this._args.verbose
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "logLevel", {
            get: function() {
              if (this.verbose) return f.LogLevel.Trace;
              if ("string" == typeof this._args.log) {
                switch (this._args.log.toLowerCase()) {
                  case "trace":
                    return f.LogLevel.Trace;
                  case "debug":
                    return f.LogLevel.Debug;
                  case "info":
                    return f.LogLevel.Info;
                  case "warn":
                    return f.LogLevel.Warning;
                  case "error":
                    return f.LogLevel.Error;
                  case "critical":
                    return f.LogLevel.Critical;
                  case "off":
                    return f.LogLevel.Off
                }
              }
              return f.LogLevel.Info
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "wait", {
            get: function() {
              return this._args.wait
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "logExtensionHostCommunication", {
            get: function() {
              return this._args.logExtensionHostCommunication
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "performance", {
            get: function() {
              return this._args.performance
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "status", {
            get: function() {
              return this._args.status
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "mainIPCHandle", {
            get: function() {
              return d(this.userDataPath, "main")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "sharedIPCHandle", {
            get: function() {
              return d(this.userDataPath, "shared")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "nodeCachedDataDir", {
            get: function() {
              return this.isBuilt ? o.join(this.userDataPath, "CachedData", l.default.commit || new Array(41).join("0")) : void 0
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "disableUpdates", {
            get: function() {
              return !!this._args["disable-updates"]
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "disableCrashReporter", {
            get: function() {
              return !!this._args["disable-crash-reporter"]
            },
            enumerable: !0,
            configurable: !0
          }), s([u.memoize], t.prototype, "appRoot", null), s([u.memoize], t.prototype, "cliPath", null), s([u.memoize], t.prototype, "userHome", null), s([u.memoize], t.prototype, "userDataPath", null), s([u.memoize], t.prototype, "appSettingsHome", null), s([u.memoize], t.prototype, "appSettingsPath", null), s([u.memoize], t.prototype, "settingsSearchBuildId", null), s([u.memoize], t.prototype, "settingsSearchUrl", null), s([u.memoize], t.prototype, "appKeybindingsPath", null), s([u.memoize], t.prototype, "isExtensionDevelopment", null), s([u.memoize], t.prototype, "backupHome", null),
          s([u.memoize], t.prototype, "backupWorkspacesPath", null), s([u.memoize], t.prototype, "workspacesHome", null), s([u.memoize], t.prototype, "installSourcePath", null), s([u.memoize], t.prototype, "extensionsPath", null), s([u.memoize], t.prototype, "extensionDevelopmentPath", null), s([u.memoize], t.prototype, "extensionTestsPath", null), s([u.memoize], t.prototype, "debugExtensionHost", null), s([u.memoize], t.prototype, "debugSearch", null), s([u.memoize], t.prototype, "logLevel", null), s([u.memoize], t.prototype, "mainIPCHandle", null), s([u.memoize], t.prototype, "sharedIPCHandle", null), s([u.memoize], t.prototype, "nodeCachedDataDir", null), t
      }();
    t.EnvironmentService = C, t.parseExtensionHostPort = g, t.parseSearchPort = v, t.parseDebugPort = m, t.parseUserDataDir = b
  }), define(e[15], t([1, 0, 8, 36]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function() {
      function e() {
        this.data = {}
      }
      return e.prototype.add = function(e, t) {
        r.ok(n.isString(e)), r.ok(n.isObject(t)),
          r.ok(!this.data.hasOwnProperty(e), "There is already an extension with this id"), this.data[e] = t
      }, e.prototype.knows = function(e) {
        return this.data.hasOwnProperty(e)
      }, e.prototype.as = function(e) {
        return this.data[e] || null
      }, e
    }();
    t.Registry = new i
  }), define(e[81], t([1, 0, 15, 3]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Extensions = {
      JSONContribution: "base.contributions.json"
    };
    var i = new(function() {
      function e() {
        this._onDidChangeSchema = new r.Emitter, this.onDidChangeSchema = this._onDidChangeSchema.event, this.schemasById = {}
      }
      return e.prototype.registerSchema = function(e, t) {
        this.schemasById[function(e) {
          return e.length > 0 && "#" === e.charAt(e.length - 1) ? e.substring(0, e.length - 1) : e
        }(e)] = t, this._onDidChangeSchema.fire(e)
      }, e.prototype.getSchemaContributions = function() {
        return {
          schemas: this.schemasById
        }
      }, e
    }());
    n.Registry.add(t.Extensions.JSONContribution, i)
  }), define(e[19], t([1, 0, 48, 3, 15, 8, 13, 81, 5]), function(e, t, n, r, i, o, s, a, u) {
    "use strict";

    function c(e) {
      return t.OVERRIDE_PROPERTY_PATTERN.test(e) ? n.localize(3, null, e) : void 0 !== v.getConfigurationProperties()[e] ? n.localize(4, null, e) : null
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Extensions = {
      Configuration: "base.contributions.configuration"
    };
    var l;
    ! function(e) {
      e[e.WINDOW = 1] = "WINDOW", e[e.RESOURCE = 2] = "RESOURCE"
    }(l = t.ConfigurationScope || (t.ConfigurationScope = {})), t.settingsSchema = {
      properties: {},
      patternProperties: {},
      additionalProperties: !1,
      errorMessage: "Unknown configuration setting"
    }, t.resourceSettingsSchema = {
      properties: {},
      patternProperties: {},
      additionalProperties: !1,
      errorMessage: "Unknown configuration setting"
    }, t.editorConfigurationSchemaId = "vscode://schemas/settings/editor";
    var f = i.Registry.as(a.Extensions.JSONContribution),
      p = function() {
        function e() {
          this.overrideIdentifiers = [], this._onDidRegisterConfiguration = new r.Emitter, this.onDidRegisterConfiguration = this._onDidRegisterConfiguration.event, this.configurationContributors = [], this.editorConfigurationSchema = {
            properties: {},
            patternProperties: {},
            additionalProperties: !1,
            errorMessage: "Unknown editor configuration setting"
          }, this.configurationProperties = {}, this.excludedConfigurationProperties = {}, this.computeOverridePropertyPattern(), f.registerSchema(t.editorConfigurationSchemaId, this.editorConfigurationSchema)
        }
        return e.prototype.registerConfiguration = function(e, t) {
          void 0 === t && (t = !0), this.registerConfigurations([e], [], t)
        }, e.prototype.registerConfigurations = function(e, t, n) {
          var r = this;
          void 0 === n && (n = !0);
          var i = this.toConfiguration(t);
          i && e.push(i);
          var o = [];
          e.forEach(function(e) {
            o.push.apply(o, r.validateAndRegisterProperties(e, n)), r.configurationContributors.push(e), r.registerJSONConfiguration(e), r.updateSchemaForOverrideSettingsConfiguration(e)
          }), this._onDidRegisterConfiguration.fire(o)
        }, e.prototype.notifyConfigurationSchemaUpdated = function(e) {
          f.registerSchema(t.editorConfigurationSchemaId, this.editorConfigurationSchema)
        }, e.prototype.registerOverrideIdentifiers = function(e) {
          (t = this.overrideIdentifiers).push.apply(t, e), this.updateOverridePropertyPatternKey();
          var t
        }, e.prototype.toConfiguration = function(e) {
          for (var r = {
              id: "defaultOverrides",
              title: n.localize(0, null),
              properties: {}
            }, i = 0, o = e; i < o.length; i++) {
            var s = o[i];
            for (var a in s.defaults) {
              var u = s.defaults[a];
              t.OVERRIDE_PROPERTY_PATTERN.test(a) && "object" == typeof u && (r.properties[a] = {
                type: "object",
                default: u,
                description: n.localize(1, null, a),
                $ref: t.editorConfigurationSchemaId
              })
            }
          }
          return Object.keys(r.properties).length ? r : null
        }, e.prototype.validateAndRegisterProperties = function(e, t, n, r) {
          void 0 === t && (t = !0), void 0 === n && (n = l.WINDOW), void 0 === r && (r = !1), n = void 0 !== e.scope && null !== e.scope ? e.scope : n, r = e.overridable || r;
          var i = [],
            s = e.properties;
          if (s)
            for (var a in s) {
              var u = void 0;
              if (t && (u = c(a))) console.warn(u), delete s[a];
              else {
                var f = s[a],
                  p = f.default;
                o.isUndefined(p) && (f.default = function(e) {
                  switch (Array.isArray(e) ? e[0] : e) {
                    case "boolean":
                      return !1;
                    case "integer":
                    case "number":
                      return 0;
                    case "string":
                      return "";
                    case "array":
                      return [];
                    case "object":
                      return {};
                    default:
                      return null
                  }
                }(f.type)), r && (f.overridable = !0), void 0 === f.scope && (f.scope = n), !s[a].hasOwnProperty("included") || s[a].included ? (this.configurationProperties[a] = s[a], i.push(a)) : (this.excludedConfigurationProperties[a] = s[a], delete s[a])
              }
            }
          var h = e.allOf;
          if (h)
            for (var d = 0, g = h; d < g.length; d++) {
              var v = g[d];
              i.push.apply(i, this.validateAndRegisterProperties(v, t, n, r))
            }
          return i
        }, e.prototype.getConfigurations = function() {
          return this.configurationContributors
        }, e.prototype.getConfigurationProperties = function() {
          return this.configurationProperties
        }, e.prototype.getExcludedConfigurationProperties = function() {
          return this.excludedConfigurationProperties
        }, e.prototype.registerJSONConfiguration = function(e) {
          function n(e) {
            var r = e.properties;
            if (r)
              for (var i in r) t.settingsSchema.properties[i] = r[i], t.resourceSettingsSchema.properties[i] = u.deepClone(r[i]), r[i].scope !== l.RESOURCE && (t.resourceSettingsSchema.properties[i].doNotSuggest = !0);
            var o = e.allOf;
            o && o.forEach(n)
          }
          n(e)
        }, e.prototype.updateSchemaForOverrideSettingsConfiguration = function(e) {
          e.id !== h && (this.update(e),
            f.registerSchema(t.editorConfigurationSchemaId, this.editorConfigurationSchema))
        }, e.prototype.updateOverridePropertyPatternKey = function() {
          var e = t.settingsSchema.patternProperties[this.overridePropertyPattern];
          e || (e = {
            type: "object",
            description: n.localize(2, null),
            errorMessage: "Unknown Identifier. Use language identifiers",
            $ref: t.editorConfigurationSchemaId
          }), delete t.settingsSchema.patternProperties[this.overridePropertyPattern], this.computeOverridePropertyPattern(), t.settingsSchema.patternProperties[this.overridePropertyPattern] = e, t.resourceSettingsSchema.patternProperties[this.overridePropertyPattern] = e
        }, e.prototype.update = function(e) {
          var t = this,
            n = e.properties;
          if (n)
            for (var r in n) n[r].overridable && (this.editorConfigurationSchema.properties[r] = this.getConfigurationProperties()[r]);
          var i = e.allOf;
          i && i.forEach(function(e) {
            return t.update(e)
          })
        }, e.prototype.computeOverridePropertyPattern = function() {
          this.overridePropertyPattern = this.overrideIdentifiers.length ? g.replace("${0}", this.overrideIdentifiers.map(function(e) {
            return s.createRegExp(e, !1).source
          }).join("|")) : d
        }, e
      }(),
      h = "override",
      d = "\\[.*\\]$",
      g = "\\[(${0})\\]$";
    t.OVERRIDE_PROPERTY_PATTERN = new RegExp(d);
    var v = new p;
    i.Registry.add(t.Extensions.Configuration, v), t.validateProperty = c, t.getScopes = function(e) {
      var t = v.getConfigurationProperties();
      return e.map(function(e) {
        return t[e].scope
      })
    }
  }), define(e[16], t([1, 0, 5, 8, 10, 15, 6, 19]), function(e, t, n, r, i, o, s, a) {
    "use strict";

    function u(e, t) {
      var n = Object.create(null);
      for (var r in e) c(n, r, e[r], t);
      return n
    }

    function c(e, t, n, r) {
      for (var i = t.split("."), o = i.pop(), s = e, a = 0; a < i.length; a++) {
        var u = i[a],
          c = s[u];
        switch (typeof c) {
          case "undefined":
            c = s[u] = Object.create(null);
            break;
          case "object":
            break;
          default:
            return void r("Ignoring " + t + " as " + i.slice(0, a + 1).join(".") + " is " + JSON.stringify(c))
        }
        s = c
      }
      "object" == typeof s ? s[o] = n : r("Ignoring " + t + " as " + i.join(".") + " is " + JSON.stringify(s))
    }

    function l(e, t) {
      var n = t.shift();
      if (0 !== t.length) {
        if (-1 !== Object.keys(e).indexOf(n)) {
          var r = e[n];
          "object" != typeof r || Array.isArray(r) || (l(r, t),
            0 === Object.keys(r).length && delete e[n])
        }
      } else delete e[n]
    }

    function f(e, t, n) {
      var r = function(e, t) {
        for (var n = e, r = 0; r < t.length; r++) {
          if ("object" != typeof n || null === n) return;
          n = n[t[r]]
        }
        return n
      }(e, t.split("."));
      return void 0 === r ? n : r
    }

    function p(e, t, n) {
      Object.keys(t).forEach(function(i) {
        i in e ? r.isObject(e[i]) && r.isObject(t[i]) ? p(e[i], t[i], n) : n && (e[i] = t[i]) : e[i] = t[i]
      })
    }

    function h(e) {
      return e.substring(1, e.length - 1)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IConfigurationService = s.createDecorator("configurationService"), t.isConfigurationOverrides = function(e) {
      return e && "object" == typeof e && (!e.overrideIdentifier || "string" == typeof e.overrideIdentifier) && (!e.resource || e.resource instanceof i.default)
    };
    ! function(e) {
      e[e.USER = 1] = "USER", e[e.WORKSPACE = 2] = "WORKSPACE", e[e.WORKSPACE_FOLDER = 3] = "WORKSPACE_FOLDER", e[e.DEFAULT = 4] = "DEFAULT", e[e.MEMORY = 5] = "MEMORY"
    }(t.ConfigurationTarget || (t.ConfigurationTarget = {})), t.compare = function(e, t) {
      for (var r = t.keys.filter(function(t) {
          return -1 === e.keys.indexOf(t)
        }), i = e.keys.filter(function(e) {
          return -1 === t.keys.indexOf(e)
        }), o = [], s = 0, a = e.keys; s < a.length; s++) {
        var u = a[s],
          c = f(e.contents, u),
          l = f(t.contents, u);
        n.equals(c, l) || o.push(u)
      }
      return {
        added: r,
        removed: i,
        updated: o
      }
    }, t.toOverrides = function(e, t) {
      for (var n = [], r = o.Registry.as(a.Extensions.Configuration).getConfigurationProperties(), i = 0, s = Object.keys(e); i < s.length; i++) {
        var c = s[i];
        if (a.OVERRIDE_PROPERTY_PATTERN.test(c)) {
          var l = {};
          for (var f in e[c]) r[f] && r[f].overridable && (l[f] = e[c][f]);
          n.push({
            identifiers: [h(c).trim()],
            contents: u(l, t)
          })
        }
      }
      return n
    }, t.toValuesTree = u, t.addToValueTree = c, t.removeFromValueTree = function(e, t) {
      l(e, t.split("."))
    }, t.getConfigurationValue = f, t.merge = p, t.getConfigurationKeys = function() {
      var e = o.Registry.as(a.Extensions.Configuration).getConfigurationProperties();
      return Object.keys(e)
    }, t.getDefaultValues = function() {
      var e = Object.create(null),
        t = o.Registry.as(a.Extensions.Configuration).getConfigurationProperties();
      for (var n in t) c(e, n, t[n].default, function(e) {
        return console.error("Conflict in default settings: " + e)
      });
      return e
    }, t.overrideIdentifierFromKey = h, t.keyFromOverrideIdentifier = function(e) {
      return "[" + e + "]"
    }
  }), define(e[41], t([1, 0, 35, 32, 23, 8, 5, 10, 19, 16]), function(e, t, r, i, o, s, a, u, c, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = function() {
      function e(e, t, n) {
        void 0 === e && (e = {}), void 0 === t && (t = []), void 0 === n && (n = []), this._contents = e, this._keys = t, this._overrides = n, this.isFrozen = !1
      }
      return Object.defineProperty(e.prototype, "contents", {
        get: function() {
          return this.checkAndFreeze(this._contents)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "overrides", {
        get: function() {
          return this.checkAndFreeze(this._overrides)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "keys", {
        get: function() {
          return this.checkAndFreeze(this._keys)
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.getValue = function(e) {
        return e ? l.getConfigurationValue(this.contents, e) : this.contents
      }, e.prototype.override = function(t) {
        var n = this.getContentsForOverrideIdentifer(t);
        if (!n || "object" != typeof n || !Object.keys(n).length) return this;
        for (var r = {}, i = 0, s = o.distinct(Object.keys(this.contents).concat(Object.keys(n))); i < s.length; i++) {
          var u = s[i],
            c = this.contents[u],
            l = n[u];
          l && ("object" == typeof c && "object" == typeof l ? (c = a.deepClone(c), this.mergeContents(c, l)) : c = l), r[u] = c
        }
        return new e(r)
      }, e.prototype.merge = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        for (var r = a.deepClone(this.contents), i = a.deepClone(this.overrides), s = this.keys.slice(), u = 0, c = t; u < c.length; u++) {
          var l = c[u];
          this.mergeContents(r, l.contents);
          for (var f = function(e) {
              var t = i.filter(function(t) {
                return o.equals(t.identifiers, e.identifiers)
              })[0];
              t ? p.mergeContents(t.contents, e.contents) : i.push(e)
            }, p = this, h = 0, d = l.overrides; h < d.length; h++) {
            f(d[h])
          }
          for (var g = 0, v = l.keys; g < v.length; g++) {
            var m = v[g]; - 1 === s.indexOf(m) && s.push(m)
          }
        }
        return new e(r, s, i)
      }, e.prototype.freeze = function() {
        return this.isFrozen = !0, this
      }, e.prototype.mergeContents = function(e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
          var i = r[n];
          i in e && s.isObject(e[i]) && s.isObject(t[i]) ? this.mergeContents(e[i], t[i]) : e[i] = a.deepClone(t[i])
        }
      }, e.prototype.checkAndFreeze = function(e) {
        return this.isFrozen && !Object.isFrozen(e) ? a.deepFreeze(e) : e
      }, e.prototype.getContentsForOverrideIdentifer = function(e) {
        for (var t = 0, n = this.overrides; t < n.length; t++) {
          var r = n[t];
          if (-1 !== r.identifiers.indexOf(e)) return r.contents
        }
        return null
      }, e.prototype.toJSON = function() {
        return {
          contents: this.contents,
          overrides: this.overrides,
          keys: this.keys
        }
      }, e.prototype.setValue = function(e, t) {
        this.addKey(e), l.addToValueTree(this.contents, e, t, function(e) {
          throw new Error(e)
        })
      }, e.prototype.removeValue = function(e) {
        this.removeKey(e) && l.removeFromValueTree(this.contents, e)
      }, e.prototype.addKey = function(e) {
        for (var t = this.keys.length, n = 0; n < t; n++) 0 === e.indexOf(this.keys[n]) && (t = n);
        this.keys.splice(t, 1, e)
      }, e.prototype.removeKey = function(e) {
        var t = this.keys.indexOf(e);
        return -1 !== t && (this.keys.splice(t, 1), !0)
      }, e
    }();
    t.ConfigurationModel = f;
    var p = function(e) {
      function t() {
        for (var t = l.getDefaultValues(), n = l.getConfigurationKeys(), r = [], i = 0, o = Object.keys(t); i < o.length; i++) {
          var s = o[i];
          c.OVERRIDE_PROPERTY_PATTERN.test(s) && r.push({
            identifiers: [l.overrideIdentifierFromKey(s).trim()],
            contents: l.toValuesTree(t[s], function(e) {
              return console.error("Conflict in default settings file: " + e)
            })
          })
        }
        return e.call(this, t, n, r) || this
      }
      return n(t, e), t
    }(f);
    t.DefaultConfigurationModel = p;
    var h = function() {
      function e(e) {
        this._name = e, this._configurationModel = null, this._parseErrors = []
      }
      return Object.defineProperty(e.prototype, "configurationModel", {
        get: function() {
          return this._configurationModel || new f
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "errors", {
        get: function() {
          return this._parseErrors
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.parse = function(e) {
        var t = this.parseContent(e),
          n = this.parseRaw(t);
        this._configurationModel = new f(n.contents, n.keys, n.overrides)
      }, e.prototype.parseContent = function(e) {
        function t(e) {
          Array.isArray(o) ? o.push(e) : i && (o[i] = e)
        }
        var n = {},
          i = null,
          o = [],
          s = [],
          a = [],
          u = {
            onObjectBegin: function() {
              var e = {};
              t(e), s.push(o), o = e, i = null
            },
            onObjectProperty: function(e) {
              i = e
            },
            onObjectEnd: function() {
              o = s.pop()
            },
            onArrayBegin: function() {
              var e = [];
              t(e), s.push(o), o = e, i = null
            },
            onArrayEnd: function() {
              o = s.pop()
            },
            onLiteralValue: t,
            onError: function(e) {
              a.push({
                error: e
              })
            }
          };
        if (e) try {
          r.visit(e, u), n = o[0] || {}
        } catch (e) {
          console.error("Error while parsing settings file " + this._name + ": " + e), this._parseErrors = [e]
        }
        return n
      }, e.prototype.parseRaw = function(e) {
        var t = this;
        return {
          contents: l.toValuesTree(e, function(e) {
            return console.error("Conflict in settings file " + t._name + ": " + e)
          }),
          keys: Object.keys(e),
          overrides: l.toOverrides(e, function(e) {
            return console.error("Conflict in settings file " + t._name + ": " + e)
          })
        }
      }, e
    }();
    t.ConfigurationModelParser = h;
    var d = function() {
      function e(e, t, n, r, o, s) {
        void 0 === n && (n = new f), void 0 === r && (r = new i.StrictResourceMap), void 0 === o && (o = new f), void 0 === s && (s = new i.StrictResourceMap), this._defaultConfiguration = e, this._userConfiguration = t,
          this._workspaceConfiguration = n, this._folderConfigurations = r, this._memoryConfiguration = o, this._memoryConfigurationByResource = s, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations = new i.StrictResourceMap
      }
      return e.prototype.getValue = function(e, t, n) {
          return this.getConsolidateConfigurationModel(t, n).getValue(e)
        }, e.prototype.updateValue = function(e, t, n) {
          void 0 === n && (n = {});
          var r;
          n.resource ? (r = this._memoryConfigurationByResource.get(n.resource)) || (r = new f, this._memoryConfigurationByResource.set(n.resource, r)) : r = this._memoryConfiguration, void 0 === t ? r.removeValue(e) : r.setValue(e, t), n.resource || (this._workspaceConsolidatedConfiguration = null)
        }, e.prototype.inspect = function(e, t, n) {
          var r = this.getConsolidateConfigurationModel(t, n),
            i = this.getFolderConfigurationModelForResource(t.resource, n),
            o = t.resource ? this._memoryConfigurationByResource.get(t.resource) || this._memoryConfiguration : this._memoryConfiguration;
          return {
            default: t.overrideIdentifier ? this._defaultConfiguration.freeze().override(t.overrideIdentifier).getValue(e) : this._defaultConfiguration.freeze().getValue(e),
            user: t.overrideIdentifier ? this._userConfiguration.freeze().override(t.overrideIdentifier).getValue(e) : this._userConfiguration.freeze().getValue(e),
            workspace: n ? t.overrideIdentifier ? this._workspaceConfiguration.freeze().override(t.overrideIdentifier).getValue(e) : this._workspaceConfiguration.freeze().getValue(e) : void 0,
            workspaceFolder: i ? t.overrideIdentifier ? i.freeze().override(t.overrideIdentifier).getValue(e) : i.freeze().getValue(e) : void 0,
            memory: t.overrideIdentifier ? o.freeze().override(t.overrideIdentifier).getValue(e) : o.freeze().getValue(e),
            value: r.getValue(e)
          }
        }, e.prototype.keys = function(e) {
          var t = this.getFolderConfigurationModelForResource(null, e);
          return {
            default: this._defaultConfiguration.freeze().keys,
            user: this._userConfiguration.freeze().keys,
            workspace: this._workspaceConfiguration.freeze().keys,
            workspaceFolder: t ? t.freeze().keys : []
          }
        },
        e.prototype.updateDefaultConfiguration = function(e) {
          this._defaultConfiguration = e, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear()
        }, e.prototype.updateUserConfiguration = function(e) {
          this._userConfiguration = e, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear()
        }, e.prototype.updateWorkspaceConfiguration = function(e) {
          this._workspaceConfiguration = e, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear()
        }, e.prototype.updateFolderConfiguration = function(e, t) {
          this._folderConfigurations.set(e, t), this._foldersConsolidatedConfigurations.delete(e)
        }, e.prototype.deleteFolderConfiguration = function(e) {
          this.folders.delete(e), this._foldersConsolidatedConfigurations.delete(e)
        }, Object.defineProperty(e.prototype, "defaults", {
          get: function() {
            return this._defaultConfiguration
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "user", {
          get: function() {
            return this._userConfiguration
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "workspace", {
          get: function() {
            return this._workspaceConfiguration
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "folders", {
          get: function() {
            return this._folderConfigurations
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "memory", {
          get: function() {
            return this._memoryConfiguration
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "memoryByResource", {
          get: function() {
            return this._memoryConfigurationByResource
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.getConsolidateConfigurationModel = function(e, t) {
          var n = this.getConsolidatedConfigurationModelForResource(e, t);
          return e.overrideIdentifier ? n.override(e.overrideIdentifier) : n
        }, e.prototype.getConsolidatedConfigurationModelForResource = function(e, t) {
          var n = e.resource,
            r = this.getWorkspaceConsolidatedConfiguration();
          if (t && n) {
            var i = t.getFolder(n);
            i && (r = this.getFolderConsolidatedConfiguration(i.uri) || r);
            var o = this._memoryConfigurationByResource.get(n);
            o && (r = r.merge(o))
          }
          return r
        }, e.prototype.getWorkspaceConsolidatedConfiguration = function() {
          return this._workspaceConsolidatedConfiguration || (this._workspaceConsolidatedConfiguration = this._defaultConfiguration.merge(this._userConfiguration).merge(this._workspaceConfiguration).merge(this._memoryConfiguration).freeze()), this._workspaceConsolidatedConfiguration
        }, e.prototype.getFolderConsolidatedConfiguration = function(e) {
          var t = this._foldersConsolidatedConfigurations.get(e);
          if (!t) {
            var n = this.getWorkspaceConsolidatedConfiguration(),
              r = this._folderConfigurations.get(e);
            r ? (t = n.merge(r).freeze(), this._foldersConsolidatedConfigurations.set(e, t)) : t = n
          }
          return t
        }, e.prototype.getFolderConfigurationModelForResource = function(e, t) {
          if (t && e) {
            var n = t.getFolder(e);
            if (n) return this._folderConfigurations.get(n.uri)
          }
          return null
        }, e.prototype.toData = function() {
          var e = this;
          return {
            defaults: {
              contents: this._defaultConfiguration.contents,
              overrides: this._defaultConfiguration.overrides,
              keys: this._defaultConfiguration.keys
            },
            user: {
              contents: this._userConfiguration.contents,
              overrides: this._userConfiguration.overrides,
              keys: this._userConfiguration.keys
            },
            workspace: {
              contents: this._workspaceConfiguration.contents,
              overrides: this._workspaceConfiguration.overrides,
              keys: this._workspaceConfiguration.keys
            },
            folders: this._folderConfigurations.keys().reduce(function(t, n) {
              var r = e._folderConfigurations.get(n),
                i = r.contents,
                o = r.overrides,
                s = r.keys;
              return t[n.toString()] = {
                contents: i,
                overrides: o,
                keys: s
              }, t
            }, Object.create({}))
          }
        }, e.prototype.allKeys = function(e) {
          var t = this.keys(e),
            n = t.default.slice(),
            r = function(e) {
              for (var t = 0, r = e; t < r.length; t++) {
                var i = r[t]; - 1 === n.indexOf(i) && n.push(i)
              }
            };
          r(t.user), r(t.workspace);
          for (var i = 0, o = this.folders.keys(); i < o.length; i++) {
            var s = o[i];
            r(this.folders.get(s).keys)
          }
          return n
        }, e.parse = function(t) {
          return new e(e.parseConfigurationModel(t.defaults), e.parseConfigurationModel(t.user), e.parseConfigurationModel(t.workspace), Object.keys(t.folders).reduce(function(n, r) {
            return n.set(u.default.parse(r), e.parseConfigurationModel(t.folders[r])), n
          }, new i.StrictResourceMap))
        }, e.parseConfigurationModel = function(e) {
          return new f(e.contents, e.keys, e.overrides).freeze()
        }, e
    }();
    t.Configuration = d;
    var g = function() {
      function e() {}
      return e.prototype.doesConfigurationContains = function(e, t) {
        for (var n, r = e.contents, i = l.toValuesTree((o = {}, o[t] = !0, o), function() {});
          "object" == typeof i && (n = Object.keys(i)[0]);) {
          if (!(r = r[n])) return !1;
          i = i[n]
        }
        return !0;
        var o
      }, e.prototype.updateKeys = function(e, t, n) {
        for (var r = 0, i = t; r < i.length; r++) {
          var o = i[r];
          e.setValue(o, {})
        }
      }, e
    }();
    t.AbstractConfigurationChangeEvent = g;
    var v = function(e) {
      function t(t, n) {
        void 0 === t && (t = new f), void 0 === n && (n = new i.StrictResourceMap);
        var r = e.call(this) || this;
        return r._changedConfiguration = t, r._changedConfigurationByResource = n, r
      }
      return n(t, e), Object.defineProperty(t.prototype, "changedConfiguration", {
          get: function() {
            return this._changedConfiguration
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "changedConfigurationByResource", {
          get: function() {
            return this._changedConfigurationByResource
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.change = function(e, n) {
          if (e instanceof t) {
            this._changedConfiguration = this._changedConfiguration.merge(e._changedConfiguration);
            for (var r = 0, i = e._changedConfigurationByResource.keys(); r < i.length; r++) {
              var o = i[r],
                s = this.getOrSetChangedConfigurationForResource(o);
              s = s.merge(e._changedConfigurationByResource.get(o)), this._changedConfigurationByResource.set(o, s)
            }
          } else this.changeWithKeys(e, n);
          return this
        }, t.prototype.telemetryData = function(e, t) {
          return this._source = e, this._sourceConfig = t, this
        }, Object.defineProperty(t.prototype, "affectedKeys", {
          get: function() {
            var e = this._changedConfiguration.keys.slice();
            return this._changedConfigurationByResource.forEach(function(t) {
              return e.push.apply(e, t.keys)
            }), o.distinct(e)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "source", {
          get: function() {
            return this._source
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "sourceConfig", {
          get: function() {
            return this._sourceConfig
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.affectsConfiguration = function(e, t) {
          var n = [this._changedConfiguration];
          if (t) {
            var r = this._changedConfigurationByResource.get(t);
            r && n.push(r)
          } else n.push.apply(n, this._changedConfigurationByResource.values());
          for (var i = 0, o = n; i < o.length; i++) {
            var s = o[i];
            if (this.doesConfigurationContains(s, e)) return !0
          }
          return !1
        }, t.prototype.changeWithKeys = function(e, t) {
          var n = t ? this.getOrSetChangedConfigurationForResource(t) : this._changedConfiguration;
          this.updateKeys(n, e)
        }, t.prototype.getOrSetChangedConfigurationForResource = function(e) {
          var t = this._changedConfigurationByResource.get(e);
          return t || (t = new f, this._changedConfigurationByResource.set(e, t)), t
        }, t
    }(g);
    t.ConfigurationChangeEvent = v
  }), define(e[85], t([1, 0, 9, 14, 41, 71, 3, 2]), function(e, t, r, i, o, s, a, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = function(e) {
      function t(t) {
        var n = e.call(this) || this;
        return n._onDidChangeConfiguration = n._register(new a.Emitter), n.onDidChangeConfiguration = n._onDidChangeConfiguration.event, n.userConfigModelWatcher = new s.ConfigWatcher(t, {
          changeBufferDelay: 300,
          onError: function(e) {
            return i.onUnexpectedError(e)
          },
          defaultConfig: new o.ConfigurationModelParser(t),
          parse: function(e, n) {
            var r = new o.ConfigurationModelParser(t);
            return r.parse(e), r.errors.slice(), r
          }
        }), n._register(n.userConfigModelWatcher), n._register(n.userConfigModelWatcher.onDidUpdateConfiguration(function() {
          return n._onDidChangeConfiguration.fire(n.configurationModel)
        })), n
      }
      return n(t, e), Object.defineProperty(t.prototype, "configurationModel", {
        get: function() {
          return this.userConfigModelWatcher.getConfig().configurationModel
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.reload = function() {
        var e = this;
        return new u.TPromise(function(t) {
          return e.userConfigModelWatcher.reload(function() {
            return t(null)
          })
        })
      }, t
    }(r.Disposable);
    t.UserConfiguration = c
  }), define(e[86], t([1, 0, 15, 19, 9, 16, 41, 3, 17, 2, 5, 85]), function(e, t, r, i, o, u, c, l, f, p, h, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var g = function(e) {
      function t(t) {
        var n = e.call(this) || this;
        return n._onDidChangeConfiguration = n._register(new l.Emitter), n.onDidChangeConfiguration = n._onDidChangeConfiguration.event, n.userConfiguration = n._register(new d.UserConfiguration(t.appSettingsPath)), n.reset(), n._register(n.userConfiguration.onDidChangeConfiguration(function() {
          return n.onDidChangeUserConfiguration()
        })), n._register(r.Registry.as(i.Extensions.Configuration).onDidRegisterConfiguration(function(e) {
          return n.onDidRegisterConfiguration(e)
        })), n
      }
      return n(t, e), Object.defineProperty(t.prototype, "configuration", {
        get: function() {
          return this._configuration
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.getConfigurationData = function() {
        return this.configuration.toData()
      }, t.prototype.getValue = function(e, t) {
        var n = "string" == typeof e ? e : void 0,
          r = u.isConfigurationOverrides(e) ? e : u.isConfigurationOverrides(t) ? t : {};
        return this.configuration.getValue(n, r, null)
      }, t.prototype.updateValue = function(e, t, n, r) {
        return p.TPromise.wrapError(new Error("not supported"))
      }, t.prototype.inspect = function(e) {
        return this.configuration.inspect(e, {}, null)
      }, t.prototype.keys = function() {
        return this.configuration.keys(null)
      }, t.prototype.reloadConfiguration = function(e) {
        var t = this;
        return e ? p.TPromise.as(null) : this.userConfiguration.reload().then(function() {
          return t.onDidChangeUserConfiguration()
        })
      }, t.prototype.onDidChangeUserConfiguration = function() {
        var e = this,
          t = [],
          n = u.compare(this._configuration.user, this.userConfiguration.configurationModel),
          r = n.added,
          i = n.updated,
          o = n.removed;
        if ((t = r.concat(i, o)).length) {
          var s = this._configuration;
          this.reset(), (t = t.filter(function(t) {
            return !h.equals(s.getValue(t, {}, null), e._configuration.getValue(t, {}, null))
          })).length && this.trigger(t, u.ConfigurationTarget.USER)
        }
      }, t.prototype.onDidRegisterConfiguration = function(e) {
        this.reset(), this.trigger(e, u.ConfigurationTarget.DEFAULT)
      }, t.prototype.reset = function() {
        var e = new c.DefaultConfigurationModel,
          t = this.userConfiguration.configurationModel;
        this._configuration = new c.Configuration(e, t)
      }, t.prototype.trigger = function(e, t) {
        this._onDidChangeConfiguration.fire((new c.ConfigurationChangeEvent).change(e).telemetryData(t, this.getTargetConfiguration(t)))
      }, t.prototype.getTargetConfiguration = function(e) {
        switch (e) {
          case u.ConfigurationTarget.DEFAULT:
            return this._configuration.defaults.contents;
          case u.ConfigurationTarget.USER:
            return this._configuration.user.contents
        }
        return {}
      }, t = s([a(0, f.IEnvironmentService)], t)
    }(o.Disposable);
    t.ConfigurationService = g
  }), define(e[42], t([1, 0, 54, 6, 19, 15]), function(e, t, n, r, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IRequestService = r.createDecorator("requestService2"), o.Registry.as(i.Extensions.Configuration).registerConfiguration({
      id: "http",
      order: 15,
      title: n.localize(0, null),
      type: "object",
      properties: {
        "http.proxy": {
          type: "string",
          pattern: "^https?://([^:]*(:[^@]*)?@)?([^:]+)(:\\d+)?/?$|^$",
          description: n.localize(1, null)
        },
        "http.proxyStrictSSL": {
          type: "boolean",
          default: !0,
          description: n.localize(2, null)
        },
        "http.proxyAuthorization": {
          type: ["null", "string"],
          default: null,
          description: n.localize(3, null)
        }
      }
    })
  }), define(e[43], t([1, 0, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ITelemetryService = n.createDecorator("telemetryService")
  }), define(e[89], t([1, 0, 2]), function(e, t, n) {
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
  }), define(e[90], t([1, 0, 55, 13, 6, 16, 19, 2, 9, 5, 15]), function(e, t, n, r, i, o, u, c, l, f, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var h = function() {
      function e(e, t) {
        this._configurationService = t, this._disposables = [], this._cleanupPatterns = [], this._appender = e.appender, this._commonProperties = e.commonProperties || c.TPromise.as({}), this._piiPaths = e.piiPaths || [], this._userOptIn = void 0 === e.userOptIn || e.userOptIn, this._cleanupPatterns.push([/file:\/\/\/.*?\/resources\/app\//gi, ""], [/file:\/\/\/.*/gi, ""], [/ENOENT: no such file or directory.*?\'([^\']+)\'/gi, "ENOENT: no such file or directory"]);
        for (var n = 0, i = this._piiPaths; n < i.length; n++) {
          var o = i[n];
          this._cleanupPatterns.push([new RegExp(r.escapeRegExpCharacters(o), "gi"), ""])
        }
        this._configurationService && (this._updateUserOptIn(), this._configurationService.onDidChangeConfiguration(this._updateUserOptIn, this, this._disposables), this.publicLog("optInStatus", {
          optIn: this._userOptIn
        }))
      }
      return e.prototype._updateUserOptIn = function() {
        var e = this._configurationService.getValue(d);
        this._userOptIn = e ? e.enableTelemetry : this._userOptIn
      }, Object.defineProperty(e.prototype, "isOptedIn", {
        get: function() {
          return this._userOptIn
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.getTelemetryInfo = function() {
        return this._commonProperties.then(function(e) {
          return {
            sessionId: e.sessionID,
            instanceId: e["common.instanceId"],
            machineId: e["common.machineId"]
          }
        })
      }, e.prototype.dispose = function() {
        this._disposables = l.dispose(this._disposables)
      }, e.prototype.publicLog = function(e, t) {
        var n = this;
        return this._userOptIn ? this._commonProperties.then(function(r) {
          t = f.mixin(t, r), t = f.cloneAndChange(t, function(e) {
            if ("string" == typeof e) return n._cleanupInfo(e)
          }), n._appender.log(e, t)
        }, function(e) {
          console.error(e)
        }) : c.TPromise.as(void 0)
      }, e.prototype._cleanupInfo = function(e) {
        for (var t = 0, n = this._cleanupPatterns; t < n.length; t++) {
          var r = n[t],
            i = r[0],
            o = r[1];
          e = e.replace(i, o)
        }
        return e
      }, e.IDLE_START_EVENT_NAME = "UserIdleStart", e.IDLE_STOP_EVENT_NAME = "UserIdleStop", e = s([a(1, i.optional(o.IConfigurationService))], e)
    }();
    t.TelemetryService = h;
    var d = "telemetry";
    p.Registry.as(u.Extensions.Configuration).registerConfiguration({
      id: d,
      order: 110,
      type: "object",
      title: n.localize(0, null),
      properties: {
        "telemetry.enableTelemetry": {
          type: "boolean",
          description: n.localize(1, null),
          default: !0
        }
      }
    })
  }), define(e[91], t([1, 0, 2, 61, 25, 16, 68]), function(e, t, n, r, i, o, s) {
    "use strict";

    function a(e, t) {
      return t.onDidChangeConfiguration(function(t) {
        t.source !== o.ConfigurationTarget.DEFAULT && (e.publicLog("updateConfiguration", {
          configurationSource: o.ConfigurationTarget[t.source],
          configurationKeys: function(e) {
            if (!e) return [];
            var t = [];
            return u(t, "", e), t
          }(t.sourceConfig)
        }), e.publicLog("updateConfigurationValues", {
          configurationSource: o.ConfigurationTarget[t.source],
          configurationValues: function(e, t) {
            if (!e) return [];
            return t.reduce(function(t, n) {
              var r = n.split(".").reduce(function(e, t) {
                return e && "object" == typeof e ? e[t] : void 0
              }, e);
              return void 0 !== r && t.push((i = {}, i[n] = r, i)), t;
              var i
            }, [])
          }(t.sourceConfig, c)
        }))
      })
    }

    function u(e, t, n) {
      n && "object" == typeof n && !Array.isArray(n) ? Object.keys(n).forEach(function(r) {
        return u(e, t ? t + "." + r : r, n[r])
      }) : e.push(t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.NullTelemetryService = new(function() {
      function e() {}
      return e.prototype.publicLog = function(e, t) {
        return n.TPromise.wrap(null)
      }, e.prototype.getTelemetryInfo = function() {
        return n.TPromise.wrap({
          instanceId: "someValue.instanceId",
          sessionId: "someValue.sessionId",
          machineId: "someValue.machineId"
        })
      }, e
    }()), t.combinedAppender = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return {
        log: function(t, n) {
          return e.forEach(function(e) {
            return e.log(t, n)
          })
        }
      }
    }, t.NullAppender = {
      log: function() {
        return null
      }
    }, t.telemetryURIDescriptor = function(e, t) {
      var n = e && e.fsPath;
      return n ? {
        mimeType: r.guessMimeTypes(n).join(", "),
        ext: i.extname(n),
        path: t(n)
      } : {}
    };
    var c = ["editor.tabCompletion", "editor.fontFamily", "editor.fontWeight", "editor.fontSize", "editor.lineHeight", "editor.letterSpacing", "editor.lineNumbers", "editor.rulers", "editor.wordSeparators", "editor.tabSize", "editor.insertSpaces", "editor.detectIndentation", "editor.roundedSelection", "editor.scrollBeyondLastLine", "editor.minimap.enabled", "editor.minimap.renderCharacters", "editor.minimap.maxColumn", "editor.find.seedSearchStringFromSelection", "editor.find.autoFindInSelection", "editor.wordWrap", "editor.wordWrapColumn", "editor.wrappingIndent", "editor.mouseWheelScrollSensitivity", "editor.multiCursorModifier", "editor.quickSuggestions", "editor.quickSuggestionsDelay", "editor.parameterHints", "editor.autoClosingBrackets", "editor.autoIndent", "editor.formatOnType", "editor.formatOnPaste", "editor.suggestOnTriggerCharacters", "editor.acceptSuggestionOnEnter", "editor.acceptSuggestionOnCommitCharacter", "editor.snippetSuggestions", "editor.emptySelectionClipboard", "editor.wordBasedSuggestions", "editor.suggestFontSize", "editor.suggestLineHeight", "editor.selectionHighlight", "editor.occurrencesHighlight", "editor.overviewRulerLanes", "editor.overviewRulerBorder", "editor.cursorBlinking", "editor.cursorStyle", "editor.mouseWheelZoom", "editor.fontLigatures", "editor.hideCursorInOverviewRuler", "editor.renderWhitespace", "editor.renderControlCharacters", "editor.renderIndentGuides", "editor.renderLineHighlight", "editor.codeLens", "editor.folding", "editor.showFoldingControls", "editor.matchBrackets", "editor.glyphMargin", "editor.useTabStops", "editor.trimAutoWhitespace", "editor.stablePeek", "editor.dragAndDrop", "editor.formatOnSave", "editor.colorDecorators", "window.zoomLevel", "files.autoSave", "files.hotExit", "files.associations", "workbench.statusBar.visible", "files.trimTrailingWhitespace", "git.confirmSync", "workbench.sideBar.location", "window.openFilesInNewWindow", "javascript.validate.enable", "window.restoreWindows", "extensions.autoUpdate", "files.eol", "explorer.openEditors.visible", "workbench.editor.enablePreview", "files.autoSaveDelay", "workbench.editor.showTabs", "files.encoding", "files.autoGuessEncoding", "git.enabled", "http.proxyStrictSSL", "terminal.integrated.fontFamily", "workbench.editor.enablePreviewFromQuickOpen", "workbench.editor.swipeToNavigate", "php.builtInCompletions.enable", "php.validate.enable", "php.validate.run", "workbench.welcome.enabled", "workbench.startupEditor"];
    t.configurationTelemetry = a, t.keybindingsTelemetry = function(e, t) {
      return t.onDidUpdateKeybindings(function(t) {
        t.source === s.KeybindingSource.User && t.keybindings && e.publicLog("updateKeybindings", {
          bindings: t.keybindings.map(function(e) {
            return {
              key: e.key,
              command: e.command,
              when: e.when,
              args: !!e.args || void 0
            }
          })
        })
      })
    }
  }), define(e[92], t([1, 0, 98, 8, 5, 2]), function(e, t, n, r, i, o) {
    "use strict";

    function s(e) {
      !1 === a && (n.setup("2588e01f-f6c9-4cd6-a348-143741f8d702").setAutoCollectConsole(!1).setAutoCollectExceptions(!1).setAutoCollectPerformance(!1).setAutoCollectRequests(!1), a = !0);
      var t = n.getClient(e);
      return t.channel.setOfflineMode(!0), t.context.tags[t.context.keys.deviceMachineName] = "", 0 === e.indexOf("AIF-") && (t.config.endpointUrl = "https://vortex.data.microsoft.com/collect/v1"), t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = !1,
      u = function() {
        function e(e, t, n) {
          this._eventPrefix = e, this._defaultData = t, this._defaultData || (this._defaultData = Object.create(null)),
            "string" == typeof n ? this._aiClient = s(n) : "function" == typeof n && (this._aiClient = n())
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
            for (var a = 0, u = Object.getOwnPropertyNames(t); a < u.length; a++) {
              var c = u[a],
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
    t.AppInsightsAppender = u
  }), define(e[94], t([1, 0, 7, 26, 24, 18]), function(e, t, n, r, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.resolveCommonProperties = function(e, t, s, a) {
      var u = Object.create(null);
      u["common.machineId"] = s, u.sessionID = i.generateUuid() + Date.now(), u.commitHash = e, u.version = t, u["common.osVersion"] = r.release(), u["common.platform"] = n.Platform[n.platform], u["common.nodePlatform"] = process.platform, u["common.nodeArch"] = process.arch;
      var c = 0,
        l = Date.now();
      return Object.defineProperties(u, {
        timestamp: {
          get: function() {
            return new Date
          },
          enumerable: !0
        },
        "common.timesincesessionstart": {
          get: function() {
            return Date.now() - l
          },
          enumerable: !0
        },
        "common.sequence": {
          get: function() {
            return c++
          },
          enumerable: !0
        }
      }), o.readFile(a, "utf8").then(function(e) {
        return u["common.source"] = e.slice(0, 30), u
      }, function(e) {
        return u
      })
    }
  }), define(e[95], t([1, 0, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      t.IWindowsService = n.createDecorator("windowsService"), t.IWindowService = n.createDecorator("windowService");
    ! function(e) {
      e[e.CLI = 0] = "CLI", e[e.DOCK = 1] = "DOCK", e[e.MENU = 2] = "MENU", e[e.DIALOG = 3] = "DIALOG", e[e.DESKTOP = 4] = "DESKTOP", e[e.API = 5] = "API"
    }(t.OpenContext || (t.OpenContext = {}));
    ! function(e) {
      e[e.NONE = 0] = "NONE", e[e.LOADING = 1] = "LOADING", e[e.NAVIGATING = 2] = "NAVIGATING", e[e.READY = 3] = "READY"
    }(t.ReadyState || (t.ReadyState = {}))
  }), define(e[96], t([1, 0, 3, 33, 10]), function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function() {
      function e(e) {
        this.service = e, this.onWindowOpen = n.buffer(e.onWindowOpen, !0), this.onWindowFocus = n.buffer(e.onWindowFocus, !0), this.onWindowBlur = n.buffer(e.onWindowBlur, !0)
      }
      return e.prototype.call = function(e, t) {
        switch (e) {
          case "event:onWindowOpen":
            return r.eventToCall(this.onWindowOpen);
          case "event:onWindowFocus":
            return r.eventToCall(this.onWindowFocus);
          case "event:onWindowBlur":
            return r.eventToCall(this.onWindowBlur);
          case "pickFileFolderAndOpen":
            return this.service.pickFileFolderAndOpen(t);
          case "pickFileAndOpen":
            return this.service.pickFileAndOpen(t);
          case "pickFolderAndOpen":
            return this.service.pickFolderAndOpen(t);
          case "pickWorkspaceAndOpen":
            return this.service.pickWorkspaceAndOpen(t);
          case "showMessageBox":
            return this.service.showMessageBox(t[0], t[1]);
          case "showSaveDialog":
            return this.service.showSaveDialog(t[0], t[1]);
          case "showOpenDialog":
            return this.service.showOpenDialog(t[0], t[1]);
          case "reloadWindow":
            return this.service.reloadWindow(t);
          case "openDevTools":
            return this.service.openDevTools(t);
          case "toggleDevTools":
            return this.service.toggleDevTools(t);
          case "closeWorkspace":
            return this.service.closeWorkspace(t);
          case "createAndEnterWorkspace":
            var n = t[1],
              o = void 0;
            return Array.isArray(n) && (o = n.map(function(e) {
              return {
                uri: i.default.revive(e.uri),
                name: e.name
              }
            })), this.service.createAndEnterWorkspace(t[0], o, t[2]);
          case "saveAndEnterWorkspace":
            return this.service.saveAndEnterWorkspace(t[0], t[1]);
          case "toggleFullScreen":
            return this.service.toggleFullScreen(t);
          case "setRepresentedFilename":
            return this.service.setRepresentedFilename(t[0], t[1]);
          case "addRecentlyOpened":
            return this.service.addRecentlyOpened(t);
          case "removeFromRecentlyOpened":
            return this.service.removeFromRecentlyOpened(t);
          case "clearRecentlyOpened":
            return this.service.clearRecentlyOpened();
          case "showPreviousWindowTab":
            return this.service.showPreviousWindowTab();
          case "showNextWindowTab":
            return this.service.showNextWindowTab();
          case "moveWindowTabToNewWindow":
            return this.service.moveWindowTabToNewWindow();
          case "mergeAllWindowTabs":
            return this.service.mergeAllWindowTabs();
          case "toggleWindowTabsBar":
            return this.service.toggleWindowTabsBar();
          case "updateTouchBar":
            return this.service.updateTouchBar(t[0], t[1]);
          case "getRecentlyOpened":
            return this.service.getRecentlyOpened(t);
          case "focusWindow":
            return this.service.focusWindow(t);
          case "closeWindow":
            return this.service.closeWindow(t);
          case "isFocused":
            return this.service.isFocused(t);
          case "isMaximized":
            return this.service.isMaximized(t);
          case "maximizeWindow":
            return this.service.maximizeWindow(t);
          case "unmaximizeWindow":
            return this.service.unmaximizeWindow(t);
          case "onWindowTitleDoubleClick":
            return this.service.onWindowTitleDoubleClick(t);
          case "setDocumentEdited":
            return this.service.setDocumentEdited(t[0], t[1]);
          case "openWindow":
            return this.service.openWindow(t[0], t[1]);
          case "openNewWindow":
            return this.service.openNewWindow();
          case "showWindow":
            return this.service.showWindow(t);
          case "getWindows":
            return this.service.getWindows();
          case "getWindowCount":
            return this.service.getWindowCount();
          case "relaunch":
            return this.service.relaunch(t[0]);
          case "whenSharedProcessReady":
            return this.service.whenSharedProcessReady();
          case "toggleSharedProcess":
            return this.service.toggleSharedProcess();
          case "quit":
            return this.service.quit();
          case "log":
            return this.service.log(t[0], t[1]);
          case "showItemInFolder":
            return this.service.showItemInFolder(t);
          case "openExternal":
            return this.service.openExternal(t);
          case "startCrashReporter":
            return this.service.startCrashReporter(t)
        }
      }, e
    }();
    t.WindowsChannel = o;
    var s = function() {
      function e(e) {
        this.channel = e, this._onWindowOpen = r.eventFromCall(this.channel, "event:onWindowOpen"), this._onWindowFocus = r.eventFromCall(this.channel, "event:onWindowFocus"), this._onWindowBlur = r.eventFromCall(this.channel, "event:onWindowBlur")
      }
      return Object.defineProperty(e.prototype, "onWindowOpen", {
          get: function() {
            return this._onWindowOpen
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "onWindowFocus", {
          get: function() {
            return this._onWindowFocus
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "onWindowBlur", {
          get: function() {
            return this._onWindowBlur
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.pickFileFolderAndOpen = function(e) {
          return this.channel.call("pickFileFolderAndOpen", e)
        }, e.prototype.pickFileAndOpen = function(e) {
          return this.channel.call("pickFileAndOpen", e)
        }, e.prototype.pickFolderAndOpen = function(e) {
          return this.channel.call("pickFolderAndOpen", e)
        }, e.prototype.pickWorkspaceAndOpen = function(e) {
          return this.channel.call("pickWorkspaceAndOpen", e)
        },
        e.prototype.showMessageBox = function(e, t) {
          return this.channel.call("showMessageBox", [e, t])
        }, e.prototype.showSaveDialog = function(e, t) {
          return this.channel.call("showSaveDialog", [e, t])
        }, e.prototype.showOpenDialog = function(e, t) {
          return this.channel.call("showOpenDialog", [e, t])
        }, e.prototype.reloadWindow = function(e) {
          return this.channel.call("reloadWindow", e)
        }, e.prototype.openDevTools = function(e) {
          return this.channel.call("openDevTools", e)
        }, e.prototype.toggleDevTools = function(e) {
          return this.channel.call("toggleDevTools", e)
        }, e.prototype.closeWorkspace = function(e) {
          return this.channel.call("closeWorkspace", e)
        }, e.prototype.createAndEnterWorkspace = function(e, t, n) {
          return this.channel.call("createAndEnterWorkspace", [e, t, n])
        }, e.prototype.saveAndEnterWorkspace = function(e, t) {
          return this.channel.call("saveAndEnterWorkspace", [e, t])
        }, e.prototype.toggleFullScreen = function(e) {
          return this.channel.call("toggleFullScreen", e)
        }, e.prototype.setRepresentedFilename = function(e, t) {
          return this.channel.call("setRepresentedFilename", [e, t])
        },
        e.prototype.addRecentlyOpened = function(e) {
          return this.channel.call("addRecentlyOpened", e)
        }, e.prototype.removeFromRecentlyOpened = function(e) {
          return this.channel.call("removeFromRecentlyOpened", e)
        }, e.prototype.clearRecentlyOpened = function() {
          return this.channel.call("clearRecentlyOpened")
        }, e.prototype.getRecentlyOpened = function(e) {
          return this.channel.call("getRecentlyOpened", e)
        }, e.prototype.showPreviousWindowTab = function() {
          return this.channel.call("showPreviousWindowTab")
        }, e.prototype.showNextWindowTab = function() {
          return this.channel.call("showNextWindowTab")
        }, e.prototype.moveWindowTabToNewWindow = function() {
          return this.channel.call("moveWindowTabToNewWindow")
        }, e.prototype.mergeAllWindowTabs = function() {
          return this.channel.call("mergeAllWindowTabs")
        }, e.prototype.toggleWindowTabsBar = function() {
          return this.channel.call("toggleWindowTabsBar")
        }, e.prototype.focusWindow = function(e) {
          return this.channel.call("focusWindow", e)
        }, e.prototype.closeWindow = function(e) {
          return this.channel.call("closeWindow", e)
        },
        e.prototype.isFocused = function(e) {
          return this.channel.call("isFocused", e)
        }, e.prototype.isMaximized = function(e) {
          return this.channel.call("isMaximized", e)
        }, e.prototype.maximizeWindow = function(e) {
          return this.channel.call("maximizeWindow", e)
        }, e.prototype.unmaximizeWindow = function(e) {
          return this.channel.call("unmaximizeWindow", e)
        }, e.prototype.onWindowTitleDoubleClick = function(e) {
          return this.channel.call("onWindowTitleDoubleClick", e)
        }, e.prototype.setDocumentEdited = function(e, t) {
          return this.channel.call("setDocumentEdited", [e, t])
        }, e.prototype.quit = function() {
          return this.channel.call("quit")
        }, e.prototype.relaunch = function(e) {
          return this.channel.call("relaunch", [e])
        }, e.prototype.whenSharedProcessReady = function() {
          return this.channel.call("whenSharedProcessReady")
        }, e.prototype.toggleSharedProcess = function() {
          return this.channel.call("toggleSharedProcess")
        }, e.prototype.openWindow = function(e, t) {
          return this.channel.call("openWindow", [e, t])
        }, e.prototype.openNewWindow = function() {
          return this.channel.call("openNewWindow")
        },
        e.prototype.showWindow = function(e) {
          return this.channel.call("showWindow", e)
        }, e.prototype.getWindows = function() {
          return this.channel.call("getWindows")
        }, e.prototype.getWindowCount = function() {
          return this.channel.call("getWindowCount")
        }, e.prototype.log = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          return this.channel.call("log", [e, t])
        }, e.prototype.showItemInFolder = function(e) {
          return this.channel.call("showItemInFolder", e)
        }, e.prototype.openExternal = function(e) {
          return this.channel.call("openExternal", e)
        }, e.prototype.startCrashReporter = function(e) {
          return this.channel.call("startCrashReporter", e)
        }, e.prototype.updateTouchBar = function(e, t) {
          return this.channel.call("updateTouchBar", [e, t])
        }, e
    }();
    t.WindowsChannelClient = s
  }), define(e[93], t([1, 0, 47, 4, 20, 22, 18, 2, 102]), function(e, t, n, r, i, o, s, a, u) {
    "use strict";

    function c(e, t, n) {
      return new a.TPromise(function(u, c) {
        var l = new o.SimpleThrottler,
          f = a.TPromise.as(null);
        e.once("error", c), e.once("close", function() {
          return f.then(u, c)
        }), e.on("entry", function(u) {
          if (n.sourcePathRegex.test(u.fileName)) {
            var c = u.fileName.replace(n.sourcePathRegex, "");
            if (/\/$/.test(c)) {
              var p = r.join(t, c);
              f = s.mkdirp(p)
            } else {
              var h = o.ninvoke(e, e.openReadStream, u),
                d = function(e) {
                  var t = e.externalFileAttributes >> 16 || 33188;
                  return [448, 56, 7].map(function(e) {
                    return t & e
                  }).reduce(function(e, t) {
                    return e + t
                  }, 61440 & t)
                }(u);
              f = l.queue(function() {
                return h.then(function(e) {
                  return function(e, t, n, o, u) {
                    var c = r.dirname(t),
                      l = r.join(o, c),
                      f = r.join(o, t);
                    return s.mkdirp(l).then(function() {
                      return new a.TPromise(function(t, r) {
                        var o = i.createWriteStream(f, {
                          mode: n
                        });
                        o.once("finish", function() {
                          return t(null)
                        }), o.once("error", r), e.once("error", r), e.pipe(o)
                      })
                    })
                  }(e, c, d, t)
                })
              })
            }
          }
        })
      })
    }

    function l(e, t) {
      return function(e, t) {
        return o.nfcall(u.open, e).then(function(e) {
          return new a.TPromise(function(r, i) {
            e.on("entry", function(n) {
              n.fileName === t && o.ninvoke(e, e.openReadStream, n).done(function(e) {
                return r(e)
              }, function(e) {
                return i(e)
              })
            }), e.once("close", function() {
              return i(new Error(n.localize(0, null, t)))
            })
          })
        })
      }(e, t).then(function(e) {
        return new a.TPromise(function(t, n) {
          var r = [];
          e.once("error", n), e.on("data", function(e) {
            return r.push(e)
          }), e.on("end", function() {
            return t(Buffer.concat(r))
          })
        })
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.extract = function(e, t, n) {
      void 0 === n && (n = {});
      var r = new RegExp(n.sourcePath ? "^" + n.sourcePath : ""),
        i = o.nfcall(u.open, e);
      return n.overwrite && (i = i.then(function(e) {
        return s.rimraf(t).then(function() {
          return e
        })
      })), i.then(function(e) {
        return c(e, t, {
          sourcePathRegex: r
        })
      })
    }, t.buffer = l
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
  define(e[79], t([1, 0, 51, 4, 18, 14, 5, 9, 23, 93, 2, 29, 38, 57, 17, 22, 3, 59, 10, 30, 28, 7, 65, 27]), function(e, t, o, u, c, l, f, p, h, d, g, v, m, y, b, _, C, E, w, S, x, P, O, T) {
    "use strict";

    function k(e) {
      return new g.TPromise(function(t, n) {
        try {
          var r = JSON.parse(e),
            i = r.__metadata || null;
          delete r.__metadata, t({
            manifest: r,
            metadata: i
          })
        } catch (e) {
          n(new Error(o.localize(0, null)))
        }
      })
    }

    function I(e) {
      return d.buffer(e, "extension/package.json").then(function(e) {
        return k(e.toString("utf8"))
      }).then(function(e) {
        var t = e.manifest;
        return g.TPromise.as(t)
      })
    }

    function D(e) {
      var t = [c.readFile(u.join(e, "package.json"), "utf8").then(function(e) {
        return k(e)
      }), c.readFile(u.join(e, "package.nls.json"), "utf8").then(null, function(e) {
        return "ENOENT" !== e.code ? g.TPromise.wrapError(e) : "{}"
      }).then(function(e) {
        return JSON.parse(e)
      })];
      return g.TPromise.join(t).then(function(e) {
        var t = e[0],
          n = t.manifest,
          r = t.metadata,
          i = e[1];
        return {
          manifest: y.localizeManifest(n, i),
          metadata: r
        }
      })
    }

    function j(e, t) {
      return R(e.identifier.id, t)
    }

    function A(e) {
      return R(m.getGalleryExtensionId(e.publisher, e.name), e.version)
    }

    function R(e, t) {
      return e + "-" + t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var L = u.normalize(u.join(w.default.parse(e.toUrl("")).fsPath, "..", "extensions")),
      F = function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return r.code = n, r
        }
        return n(t, e), t
      }(Error);
    t.ExtensionManagementError = F, t.validateLocalExtension = I;
    var M = function() {
      function e(e, t, n, r) {
        this.choiceService = t, this.galleryService = n, this.logService = r, this.disposables = [],
          this._onInstallExtension = new C.Emitter, this.onInstallExtension = this._onInstallExtension.event, this._onDidInstallExtension = new C.Emitter, this.onDidInstallExtension = this._onDidInstallExtension.event, this._onUninstallExtension = new C.Emitter, this.onUninstallExtension = this._onUninstallExtension.event, this._onDidUninstallExtension = new C.Emitter, this.onDidUninstallExtension = this._onDidUninstallExtension.event, this.extensionsPath = e.extensionsPath, this.uninstalledPath = u.join(this.extensionsPath, ".obsolete"), this.userDataPath = e.userDataPath, this.uninstalledFileLimiter = new _.Limiter(1)
      }
      return e.prototype.deleteExtensionsManifestCache = function() {
          var e = u.join(this.userDataPath, O.MANIFEST_CACHE_FOLDER),
            t = u.join(e, O.USER_MANIFEST_CACHE_FILE);
          c.del(t).done(function() {}, function() {})
        }, e.prototype.install = function(e) {
          var t = this;
          return this.deleteExtensionsManifestCache(), e = u.resolve(e), I(e).then(function(n) {
            var r = {
              id: A(n)
            };
            return t.unsetUninstalledAndRemove(r.id).then(function() {
              return t.checkOutdated(n).then(function(i) {
                return i ? (t.logService.info("Installing the extension:", r.id), t._onInstallExtension.fire({
                  identifier: r,
                  zipPath: e
                }), t.getMetadata(m.getGalleryExtensionId(n.publisher, n.name)).then(function(i) {
                  return t.installFromZipPath(r, e, i, n)
                }, function(i) {
                  return t.installFromZipPath(r, e, null, n)
                }).then(function() {
                  return t.logService.info("Successfully installed the extension:", r.id)
                }, function(e) {
                  return t.logService.error("Failed to install the extension:", r.id, e.message), g.TPromise.wrapError(e)
                })) : null
              })
            }, function(e) {
              return g.TPromise.wrapError(new Error(o.localize(1, null, n.displayName || n.name)))
            })
          })
        }, e.prototype.unsetUninstalledAndRemove = function(e) {
          var t = this;
          return this.isUninstalled(e).then(function(n) {
            if (n) {
              t.logService.trace("Removing the extension:", e);
              var r = u.join(t.extensionsPath, e);
              return c.rimraf(r).then(function() {
                return t.unsetUninstalled(e)
              }).then(function() {
                return t.logService.info("Removed the extension:", e)
              })
            }
            return null
          })
        }, e.prototype.checkOutdated = function(e) {
          var t = this,
            n = {
              id: m.getGalleryExtensionId(e.publisher, e.name)
            };
          return this.getInstalled(v.LocalExtensionType.User).then(function(r) {
            var i = r.filter(function(t) {
              return m.areSameExtensions(n, {
                id: m.getGalleryExtensionIdFromLocal(t)
              }) && E.gt(t.manifest.version, e.version)
            })[0];
            if (i) {
              var s = o.localize(2, null),
                a = [o.localize(3, null), o.localize(4, null)];
              return t.choiceService.choose(S.Severity.Info, s, a, 1, !0).then(function(e) {
                return 0 === e ? t.uninstall(i, !0).then(function() {
                  return !0
                }) : g.TPromise.wrapError(l.canceled())
              })
            }
            return !0
          })
        }, e.prototype.installFromZipPath = function(e, t, n, r) {
          var i = this;
          return this.installExtension({
            zipPath: t,
            id: e.id,
            metadata: n
          }).then(function(e) {
            return i.galleryService.isEnabled() && e.manifest.extensionDependencies && e.manifest.extensionDependencies.length ? i.getDependenciesToInstall(e.manifest.extensionDependencies).then(function(e) {
              return i.downloadAndInstallExtensions(n ? e.filter(function(e) {
                return e.identifier.uuid !== n.id
              }) : e)
            }).then(function() {
              return e
            }, function(t) {
              return i.uninstallExtension(e),
                g.TPromise.wrapError(new Error(o.localize(5, null, t instanceof Error ? t.message : t)))
            }) : e
          }).then(function(n) {
            return i._onDidInstallExtension.fire({
              identifier: e,
              zipPath: t,
              local: n
            })
          }, function(n) {
            return i._onDidInstallExtension.fire({
              identifier: e,
              zipPath: t,
              error: n
            }), g.TPromise.wrapError(n)
          })
        }, e.prototype.installFromGallery = function(e) {
          var t = this;
          return this.deleteExtensionsManifestCache(), this.onInstallExtensions([e]), this.collectExtensionsToInstall(e).then(function(e) {
            return e.length > 1 && t.onInstallExtensions(e.slice(1)), t.downloadAndInstallExtensions(e).then(function(n) {
              return t.onDidInstallExtensions(e, n, [])
            }, function(n) {
              return t.onDidInstallExtensions(e, [], n)
            })
          }, function(n) {
            return t.onDidInstallExtensions([e], [], [n])
          })
        }, e.prototype.collectExtensionsToInstall = function(e) {
          var t = this;
          return this.galleryService.loadCompatibleVersion(e).then(function(n) {
            return n ? t.getDependenciesToInstall(n.properties.dependencies).then(function(e) {
              return [n].concat(e.filter(function(e) {
                return e.identifier.uuid !== n.identifier.uuid
              }))
            }, function(e) {
              return g.TPromise.wrapError(new F(t.joinErrors(e).message, "gallery"))
            }) : g.TPromise.wrapError(new F(o.localize(6, null, e.identifier.id, x.default.version), "incompatible"))
          }, function(e) {
            return g.TPromise.wrapError(new F(t.joinErrors(e).message, "gallery"))
          })
        }, e.prototype.downloadAndInstallExtensions = function(e) {
          var t = this;
          return g.TPromise.join(e.map(function(e) {
            return t.downloadInstallableExtension(e).then(function(e) {
              return t.installExtension(e)
            })
          })).then(null, function(n) {
            return t.rollback(e).then(function() {
              return g.TPromise.wrapError(n)
            }, function() {
              return g.TPromise.wrapError(n)
            })
          })
        }, e.prototype.downloadInstallableExtension = function(e) {
          var t = this,
            n = j(e, e.version),
            r = {
              id: e.identifier.uuid,
              publisherId: e.publisherId,
              publisherDisplayName: e.publisherDisplayName
            };
          return this.galleryService.loadCompatibleVersion(e).then(function(i) {
            return i ? (t.logService.trace("Started downloading extension:", e.name), t.galleryService.download(e).then(function(i) {
              return t.logService.info("Downloaded extension:", e.name),
                I(i).then(function() {
                  return {
                    zipPath: i,
                    id: n,
                    metadata: r
                  }
                }, function(e) {
                  return g.TPromise.wrapError(new F(t.joinErrors(e).message, "validating"))
                })
            }, function(e) {
              return g.TPromise.wrapError(new F(t.joinErrors(e).message, "downloading"))
            })) : g.TPromise.wrapError(new F(o.localize(7, null, e.identifier.id, x.default.version), "incompatible"))
          }, function(e) {
            return g.TPromise.wrapError(new F(t.joinErrors(e).message, "gallery"))
          })
        }, e.prototype.rollback = function(e) {
          var t = this;
          return this.filterOutUninstalled(e).then(function(e) {
            return g.TPromise.join(e.map(function(e) {
              return t.uninstallExtension(e)
            }))
          }).then(function() {
            return null
          }, function() {
            return null
          })
        }, e.prototype.onInstallExtensions = function(e) {
          for (var t = 0, n = e; t < n.length; t++) {
            var r = n[t];
            this.logService.info("Installing extension:", r.name);
            var i = j(r, r.version);
            this._onInstallExtension.fire({
              identifier: {
                id: i,
                uuid: r.identifier.uuid
              },
              gallery: r
            })
          }
        }, e.prototype.onDidInstallExtensions = function(e, t, n) {
          var r = this;
          return e.forEach(function(e, i) {
            var o = {
                id: j(e, e.version),
                uuid: e.identifier.uuid
              },
              s = t[i],
              a = n[i];
            if (s) r.logService.info("Extensions installed successfully:", e.identifier.id), r._onDidInstallExtension.fire({
              identifier: o,
              gallery: e,
              local: s
            });
            else {
              var u = a && a.code ? a.code : "unknown";
              r.logService.error("Failed to install extension:", e.identifier.id, a ? a.message : u), r._onDidInstallExtension.fire({
                identifier: o,
                gallery: e,
                error: u
              })
            }
          }), n.length ? g.TPromise.wrapError(this.joinErrors(n)) : g.TPromise.as(null)
        }, e.prototype.getDependenciesToInstall = function(e) {
          var t = this;
          return e.length ? this.getInstalled().then(function(n) {
            var r = e.filter(function(e) {
              return n.every(function(t) {
                return m.getGalleryExtensionId(t.manifest.publisher, t.manifest.name) !== e
              })
            });
            return r.length ? t.galleryService.loadAllDependencies(r.map(function(e) {
              return {
                id: e
              }
            })).then(function(e) {
              return e.filter(function(e) {
                var t = j(e, e.version);
                return n.every(function(e) {
                  return e.identifier.id !== t
                })
              })
            }) : []
          }) : g.TPromise.as([])
        }, e.prototype.filterOutUninstalled = function(e) {
          var t = this;
          return this.getInstalled().then(function(n) {
            return n.filter(function(n) {
              return !!t.getGalleryExtensionForLocalExtension(e, n)
            })
          })
        }, e.prototype.getGalleryExtensionForLocalExtension = function(e, t) {
          var n = e.filter(function(e) {
            return m.areSameExtensions(t.identifier, {
              id: j(e, e.version),
              uuid: e.identifier.uuid
            })
          });
          return n.length ? n[0] : null
        }, e.prototype.installExtension = function(e) {
          var t = this;
          return this.unsetUninstalledAndGetLocal(e.id).then(function(n) {
            return n || t.extractAndInstall(e)
          }, function(e) {
            return P.isMacintosh ? g.TPromise.wrapError(new F(o.localize(8, null), "unsetUninstalled")) : g.TPromise.wrapError(new F(o.localize(9, null), "unsetUninstalled"))
          })
        }, e.prototype.unsetUninstalledAndGetLocal = function(e) {
          var t = this;
          return this.isUninstalled(e).then(function(n) {
            return n ? (t.logService.trace("Removing the extension from uninstalled list:", e), t.unsetUninstalled(e).then(function() {
              return t.logService.info("Removed the extension from uninstalled list:", e), t.getInstalled(v.LocalExtensionType.User)
            }).then(function(t) {
              return t.filter(function(t) {
                return t.identifier.id === e
              })[0]
            })) : null
          })
        }, e.prototype.extractAndInstall = function(e) {
          var t = this,
            n = e.zipPath,
            r = e.id,
            i = e.metadata,
            o = u.join(this.extensionsPath, r);
          return c.rimraf(o).then(function() {
            return t.logService.trace("Started extracting the extension from " + n + " to " + o), d.extract(n, o, {
              sourcePath: "extension",
              overwrite: !0
            }).then(function() {
              return t.logService.info("Extracted extension to " + o + ":", r), g.TPromise.join([D(o), c.readdir(o)]).then(null, function(e) {
                return g.TPromise.wrapError(new F(t.joinErrors(e).message, "local"))
              })
            }, function(e) {
              return g.TPromise.wrapError(new F(e.message, "extracting"))
            }).then(function(e) {
              var n = e[0].manifest,
                s = e[1],
                a = s.filter(function(e) {
                  return /^readme(\.txt|\.md|)$/i.test(e)
                })[0],
                c = a ? w.default.file(u.join(o, a)).toString() : null,
                l = s.filter(function(e) {
                  return /^changelog(\.txt|\.md|)$/i.test(e)
                })[0],
                f = l ? w.default.file(u.join(o, l)).toString() : null,
                p = {
                  type: v.LocalExtensionType.User,
                  identifier: {
                    id: r,
                    uuid: i ? i.id : null
                  },
                  manifest: n,
                  metadata: i,
                  path: o,
                  readmeUrl: c,
                  changelogUrl: f
                };
              return t.logService.trace("Updating metadata of the extension:", r), t.saveMetadataForLocalExtension(p).then(function() {
                return t.logService.info("Updated metadata of the extension:", r), p
              }, function(e) {
                return g.TPromise.wrapError(new F(t.joinErrors(e).message, "local"))
              })
            })
          }, function(e) {
            return g.TPromise.wrapError(new F(t.joinErrors(e).message, "deleting"))
          })
        }, e.prototype.uninstall = function(e, t) {
          var n = this;
          return void 0 === t && (t = !1), this.deleteExtensionsManifestCache(), this.getInstalled(v.LocalExtensionType.User).then(function(r) {
            var i = r.filter(function(t) {
              return t.manifest.publisher === e.manifest.publisher && t.manifest.name === e.manifest.name
            }).map(function(e) {
              return n.checkForDependenciesAndUninstall(e, r, t)
            });
            return g.TPromise.join(i).then(function() {
              return null
            }, function(e) {
              return g.TPromise.wrapError(n.joinErrors(e))
            })
          })
        }, e.prototype.updateMetadata = function(e, t) {
          return this.deleteExtensionsManifestCache(), e.metadata = t, this.saveMetadataForLocalExtension(e)
        }, e.prototype.saveMetadataForLocalExtension = function(e) {
          if (!e.metadata) return g.TPromise.as(e);
          var t = u.join(this.extensionsPath, e.identifier.id, "package.json");
          return c.readFile(t, "utf8").then(function(e) {
            return k(e)
          }).then(function(t) {
            var n = t.manifest;
            return f.assign(n, {
              __metadata: e.metadata
            })
          }).then(function(e) {
            return c.writeFile(t, JSON.stringify(e, null, "\t"))
          }).then(function() {
            return e
          })
        }, e.prototype.getMetadata = function(e) {
          return this.galleryService.query({
            names: [e],
            pageSize: 1
          }).then(function(e) {
            var t = e.firstPage[0];
            return t ? {
              id: t.identifier.uuid,
              publisherDisplayName: t.publisherDisplayName,
              publisherId: t.publisherId
            } : null
          })
        }, e.prototype.joinErrors = function(e) {
          var t = Array.isArray(e) ? e : [e];
          return 1 === t.length ? t[0] instanceof Error ? t[0] : new Error(t[0]) : t.reduce(function(e, t) {
            return new Error(e.message + (e.message ? "," : "") + (t instanceof Error ? t.message : t))
          }, new Error(""))
        }, e.prototype.checkForDependenciesAndUninstall = function(e, t, n) {
          var r = this;
          return this.preUninstallExtension(e).then(function() {
            return r.hasDependencies(e, t) ? r.promptForDependenciesAndUninstall(e, t, n) : r.promptAndUninstall(e, t, n)
          }).then(function() {
            return r.postUninstallExtension(e)
          }, function(t) {
            return r.postUninstallExtension(e, "local"), g.TPromise.wrapError(t)
          })
        }, e.prototype.hasDependencies = function(e, t) {
          return !(!e.manifest.extensionDependencies || !e.manifest.extensionDependencies.length) && t.some(function(t) {
            return -1 !== e.manifest.extensionDependencies.indexOf(m.getGalleryExtensionIdFromLocal(t))
          })
        }, e.prototype.promptForDependenciesAndUninstall = function(e, t, n) {
          var r = this;
          if (n) {
            var i = h.distinct(this.getDependenciesToUninstallRecursively(e, t, [])).filter(function(t) {
              return t !== e
            });
            return this.uninstallWithDependencies(e, i, t)
          }
          var s = o.localize(10, null, e.manifest.displayName || e.manifest.name),
            a = [o.localize(11, null), o.localize(12, null), o.localize(13, null)];
          return this.logService.info("Requesting for confirmation to uninstall extension with dependencies", e.identifier.id), this.choiceService.choose(S.Severity.Info, s, a, 2, !0).then(function(n) {
            if (0 === n) return r.uninstallWithDependencies(e, [], t);
            if (1 === n) {
              var i = h.distinct(r.getDependenciesToUninstallRecursively(e, t, [])).filter(function(t) {
                return t !== e
              });
              return r.uninstallWithDependencies(e, i, t)
            }
            return r.logService.info("Cancelled uninstalling extension:", e.identifier.id), g.TPromise.wrapError(l.canceled())
          }, function(e) {
            return g.TPromise.wrapError(l.canceled())
          })
        }, e.prototype.promptAndUninstall = function(e, t, n) {
          var r = this;
          if (n) return this.uninstallWithDependencies(e, [], t);
          var i = o.localize(14, null, e.manifest.displayName || e.manifest.name),
            s = [o.localize(15, null), o.localize(16, null)];
          return this.logService.info("Requesting for confirmation to uninstall extension", e.identifier.id), this.choiceService.choose(S.Severity.Info, i, s, 1, !0).then(function(n) {
            return 0 === n ? r.uninstallWithDependencies(e, [], t) : (r.logService.info("Cancelled uninstalling extension:", e.identifier.id), g.TPromise.wrapError(l.canceled()))
          }, function(e) {
            return g.TPromise.wrapError(l.canceled())
          })
        },
        e.prototype.uninstallWithDependencies = function(e, t, n) {
          var r = this,
            i = this.filterDependents(e, t, n),
            o = this.getDependents(e, n).filter(function(t) {
              return e !== t && -1 === i.indexOf(t)
            });
          return o.length ? g.TPromise.wrapError(new Error(this.getDependentsErrorMessage(e, o))) : g.TPromise.join([this.uninstallExtension(e)].concat(i.map(function(e) {
            return r.doUninstall(e)
          }))).then(function() {
            return null
          })
        }, e.prototype.getDependentsErrorMessage = function(e, t) {
          return 1 === t.length ? o.localize(17, null, e.manifest.displayName || e.manifest.name, t[0].manifest.displayName || t[0].manifest.name) : 2 === t.length ? o.localize(18, null, e.manifest.displayName || e.manifest.name, t[0].manifest.displayName || t[0].manifest.name, t[1].manifest.displayName || t[1].manifest.name) : o.localize(19, null, e.manifest.displayName || e.manifest.name, t[0].manifest.displayName || t[0].manifest.name, t[1].manifest.displayName || t[1].manifest.name)
        }, e.prototype.getDependenciesToUninstallRecursively = function(e, t, n) {
          if (-1 !== n.indexOf(e)) return [];
          if (n.push(e), !e.manifest.extensionDependencies || 0 === e.manifest.extensionDependencies.length) return [];
          for (var r = t.filter(function(t) {
              return -1 !== e.manifest.extensionDependencies.indexOf(m.getGalleryExtensionIdFromLocal(t))
            }), i = [], o = 0, s = r; o < s.length; o++) {
            var a = s[o];
            i.push.apply(i, this.getDependenciesToUninstallRecursively(a, t, n))
          }
          return r.concat(i)
        }, e.prototype.filterDependents = function(e, t, n) {
          n = n.filter(function(t) {
            return t !== e && t.manifest.extensionDependencies && t.manifest.extensionDependencies.length > 0
          });
          for (var r = t.slice(0), i = 0; i < t.length; i++) {
            var o = t[i];
            this.getDependents(o, n).filter(function(e) {
              return -1 === t.indexOf(e)
            }).length && r.splice(i - (t.length - r.length), 1)
          }
          return r
        }, e.prototype.getDependents = function(e, t) {
          return t.filter(function(t) {
            return t.manifest.extensionDependencies && -1 !== t.manifest.extensionDependencies.indexOf(m.getGalleryExtensionIdFromLocal(e))
          })
        }, e.prototype.doUninstall = function(e) {
          var t = this;
          return this.preUninstallExtension(e).then(function() {
            return t.uninstallExtension(e)
          }).then(function() {
            return t.postUninstallExtension(e)
          }, function(n) {
            return t.postUninstallExtension(e, "local"), g.TPromise.wrapError(n)
          })
        }, e.prototype.preUninstallExtension = function(e) {
          var t = this,
            n = u.join(this.extensionsPath, e.identifier.id);
          return c.exists(n).then(function(e) {
            return e ? null : g.TPromise.wrapError(new Error(o.localize(20, null)))
          }).then(function() {
            t.logService.info("Uninstalling extension:", e.identifier.id), t._onUninstallExtension.fire(e.identifier)
          })
        }, e.prototype.uninstallExtension = function(e) {
          var t = this,
            n = {
              id: m.getGalleryExtensionIdFromLocal(e),
              uuid: e.identifier.uuid
            };
          return this.scanUserExtensions(!1).then(function(e) {
            return e.filter(function(e) {
              return m.areSameExtensions({
                id: m.getGalleryExtensionIdFromLocal(e),
                uuid: e.identifier.uuid
              }, n)
            })
          }).then(function(e) {
            return t.setUninstalled.apply(t, e.map(function(e) {
              return e.identifier.id
            }))
          })
        }, e.prototype.postUninstallExtension = function(e, t) {
          return r(this, void 0, g.TPromise, function() {
            return i(this, function(n) {
              switch (n.label) {
                case 0:
                  return t ? (this.logService.error("Failed to uninstall extension:", e.identifier.id, t), [3, 3]) : [3, 1];
                case 1:
                  return this.logService.info("Successfully uninstalled extension:", e.identifier.id), e.identifier.uuid ? [4, this.galleryService.reportStatistic(e.manifest.publisher, e.manifest.name, e.manifest.version, v.StatisticType.Uninstall)] : [3, 3];
                case 2:
                  n.sent(), n.label = 3;
                case 3:
                  return this._onDidUninstallExtension.fire({
                    identifier: e.identifier,
                    error: t
                  }), [2]
              }
            })
          })
        }, e.prototype.getInstalled = function(e) {
          var t = this;
          void 0 === e && (e = null);
          var n = [];
          return null !== e && e !== v.LocalExtensionType.System || n.push(this.scanSystemExtensions().then(null, function(e) {
            return new F(t.joinErrors(e).message, "scanningSystem")
          })), null !== e && e !== v.LocalExtensionType.User || n.push(this.scanUserExtensions(!0).then(null, function(e) {
            return new F(t.joinErrors(e).message, "scanningUser")
          })), g.TPromise.join(n).then(h.flatten, function(e) {
            return g.TPromise.wrapError(t.joinErrors(e))
          })
        }, e.prototype.scanSystemExtensions = function() {
          var e = this;
          return this.logService.trace("Started scanning system extensions"), this.scanExtensions(L, v.LocalExtensionType.System).then(function(t) {
            return e.logService.info("Scanned system extensions:", t.length), t
          })
        }, e.prototype.scanUserExtensions = function(e) {
          var t = this;
          return this.logService.trace("Started scanning user extensions"), this.scanExtensions(this.extensionsPath, v.LocalExtensionType.User).then(function(n) {
            if (t.logService.info("Scanned user extensions:", n.length), e) {
              return m.groupByExtension(n, function(e) {
                return {
                  id: m.getGalleryExtensionIdFromLocal(e),
                  uuid: e.identifier.uuid
                }
              }).map(function(e) {
                return e.sort(function(e, t) {
                  return E.rcompare(e.manifest.version, t.manifest.version)
                })[0]
              })
            }
            return n
          })
        }, e.prototype.scanExtensions = function(e, t) {
          var n = new _.Limiter(10);
          return this.scanExtensionFolders(e).then(function(r) {
            return g.TPromise.join(r.map(function(r) {
              var i = u.join(e, r);
              return n.queue(function() {
                return c.readdir(i).then(function(e) {
                  var n = e.filter(function(e) {
                      return /^readme(\.txt|\.md|)$/i.test(e)
                    })[0],
                    o = n ? w.default.file(u.join(i, n)).toString() : null,
                    s = e.filter(function(e) {
                      return /^changelog(\.txt|\.md|)$/i.test(e)
                    })[0],
                    a = s ? w.default.file(u.join(i, s)).toString() : null;
                  return D(i).then(function(e) {
                    var n = e.manifest,
                      s = e.metadata;
                    n.extensionDependencies && (n.extensionDependencies = n.extensionDependencies.map(function(e) {
                      return m.adoptToGalleryExtensionId(e)
                    }));
                    var u = {
                      id: r,
                      uuid: s ? s.id : null
                    };
                    return {
                      type: t,
                      identifier: u,
                      manifest: n,
                      metadata: s,
                      path: i,
                      readmeUrl: o,
                      changelogUrl: a
                    }
                  })
                }).then(null, function() {
                  return null
                })
              })
            }))
          }).then(function(e) {
            return e.filter(function(e) {
              return !!e
            })
          })
        }, e.prototype.scanExtensionFolders = function(e) {
          return this.getUninstalledExtensions().then(function(t) {
            return c.readdir(e).then(function(e) {
              return e.filter(function(e) {
                return !t[e]
              })
            })
          })
        }, e.prototype.removeDeprecatedExtensions = function() {
          var e = this;
          return this.getUninstalledExtensions().then(function(t) {
            var n = Object.keys(t);
            return e.scanUserExtensions(!1).then(function(t) {
              var r = m.groupByExtension(t, function(e) {
                  return {
                    id: m.getGalleryExtensionIdFromLocal(e),
                    uuid: e.identifier.uuid
                  }
                }),
                i = h.flatten(r.map(function(e) {
                  return e.sort(function(e, t) {
                    return E.rcompare(e.manifest.version, t.manifest.version)
                  }).slice(1)
                })).map(function(e) {
                  return e.identifier.id
                });
              return g.TPromise.join(n.concat(i).map(function(t) {
                return c.rimraf(u.join(e.extensionsPath, t)).then(function() {
                  return e.withUninstalledExtensions(function(e) {
                    return delete e[t]
                  })
                })
              }))
            })
          })
        }, e.prototype.isUninstalled = function(e) {
          return this.filterUninstalled(e).then(function(e) {
            return 1 === e.length
          })
        }, e.prototype.filterUninstalled = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return this.withUninstalledExtensions(function(t) {
            for (var n = [], r = 0, i = e; r < i.length; r++) {
              var o = i[r];
              t[o] && n.push(o)
            }
            return n
          })
        }, e.prototype.setUninstalled = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return this.withUninstalledExtensions(function(t) {
            return f.assign(t, e.reduce(function(e, t) {
              return e[t] = !0, e
            }, {}))
          })
        }, e.prototype.unsetUninstalled = function(e) {
          return this.withUninstalledExtensions(function(t) {
            return delete t[e]
          })
        }, e.prototype.getUninstalledExtensions = function() {
          return this.withUninstalledExtensions(function(e) {
            return e
          })
        }, e.prototype.withUninstalledExtensions = function(e) {
          var t = this;
          return this.uninstalledFileLimiter.queue(function() {
            var n = null;
            return c.readFile(t.uninstalledPath, "utf8").then(null, function(e) {
              return "ENOENT" === e.code ? g.TPromise.as("{}") : g.TPromise.wrapError(e)
            }).then(function(e) {
              try {
                return JSON.parse(e)
              } catch (e) {
                return {}
              }
            }).then(function(t) {
              return n = e(t), t
            }).then(function(e) {
              if (0 === Object.keys(e).length) return c.rimraf(t.uninstalledPath);
              var n = JSON.stringify(e);
              return c.writeFile(t.uninstalledPath, n)
            }).then(function() {
              return n
            })
          })
        }, e.prototype.dispose = function() {
          this.disposables = p.dispose(this.disposables)
        }, e = s([a(0, b.IEnvironmentService), a(1, S.IChoiceService), a(2, v.IExtensionGalleryService), a(3, T.ILogService)], e)
    }();
    t.ExtensionManagementService = M, t.getLocalExtensionIdFromGallery = j, t.getLocalExtensionIdFromManifest = A
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
      },
      "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
      }), s
  };
  define(e[34], t([1, 0, 2, 8, 82, 20, 5, 101]), function(e, t, n, o, s, a, u, c) {
    "use strict";

    function l(t) {
      var a;
      return (t.getRawRequest ? n.TPromise.as(t.getRawRequest(t)) : function(t) {
        return r(this, void 0, n.TPromise, function() {
          var n, r, o;
          return i(this, function(i) {
            switch (i.label) {
              case 0:
                return "https:" !== (n = s.parse(t.url)).protocol ? [3, 2] : [4, new Promise(function(t, n) {
                  e(["https"], t, n)
                })];
              case 1:
                return o = i.sent(), [3, 4];
              case 2:
                return [4, new Promise(function(t, n) {
                  e(["http"], t, n)
                })];
              case 3:
                o = i.sent(), i.label = 4;
              case 4:
                return r = o, [2, r.request]
            }
          })
        })
      }(t)).then(function(e) {
        return new n.TPromise(function(n, r) {
          var i = s.parse(t.url),
            f = {
              hostname: i.hostname,
              port: i.port ? parseInt(i.port) : "https:" === i.protocol ? 443 : 80,
              protocol: i.protocol,
              path: i.path,
              method: t.type || "GET",
              headers: t.headers,
              agent: t.agent,
              rejectUnauthorized: !o.isBoolean(t.strictSSL) || t.strictSSL
            };
          if (t.user && t.password && (f.auth = t.user + ":" + t.password), (a = e(f, function(e) {
              var i = o.isNumber(t.followRedirects) ? t.followRedirects : 3;
              if (e.statusCode >= 300 && e.statusCode < 400 && i > 0 && e.headers.location) l(u.assign({}, t, {
                url: e.headers.location,
                followRedirects: i - 1
              })).done(n, r);
              else {
                var s = e;
                "gzip" === e.headers["content-encoding"] && (s = s.pipe(c.createGunzip())), n({
                  res: e,
                  stream: s
                })
              }
            })).on("error", r), t.timeout && a.setTimeout(t.timeout), t.data) {
            if ("string" != typeof t.data) return void t.data.pipe(a);
            a.write(t.data)
          }
          a.end()
        }, function() {
          return a && a.abort()
        })
      })
    }

    function f(e) {
      return e.res.statusCode >= 200 && e.res.statusCode < 300 || 1223 === e.res.statusCode
    }

    function p(e) {
      return 204 === e.res.statusCode
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.request = l, t.download = function(e, t) {
      return new n.TPromise(function(n, r) {
        var i = a.createWriteStream(e);
        i.once("finish", function() {
          return n(null)
        }), t.stream.once("error", r), t.stream.pipe(i)
      })
    }, t.asText = function(e) {
      return new n.TPromise(function(t, n) {
        if (!f(e)) return n("Server returned " + e.res.statusCode);
        if (p(e)) return t(null);
        var r = [];
        e.stream.on("data", function(e) {
          return r.push(e)
        }), e.stream.on("end", function() {
          return t(r.join(""))
        }), e.stream.on("error", n)
      })
    }, t.asJson = function(e) {
      return new n.TPromise(function(t, n) {
        if (!f(e)) return n("Server returned " + e.res.statusCode);
        if (p(e)) return t(null);
        if (!/application\/json/.test(e.res.headers["content-type"])) return n("Response doesn't appear to be JSON");
        var r = [];
        e.stream.on("data", function(e) {
          return r.push(e)
        }), e.stream.on("end", function() {
          return t(JSON.parse(r.join("")))
        }), e.stream.on("error", n)
      })
    }
  }), define(e[87], t([1, 0, 50, 26, 4, 2, 23, 14, 29, 38, 5, 42, 43, 34, 28, 21, 58, 17, 18, 31, 24]), function(e, t, n, r, i, u, c, l, f, p, h, d, g, v, m, y, b, _, C, E, w) {
    "use strict";

    function S() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return String(e.reduce(function(e, t) {
        return e | t
      }, 0))
    }

    function x(e, t) {
      var n = (e || []).filter(function(e) {
        return e.statisticName === t
      })[0];
      return n ? n.value : 0
    }

    function P(t, n) {
      var r = t.files.filter(function(e) {
        return e.assetType === n
      })[0];
      if (n === A.Repository && t.properties) {
        var i = t.properties.filter(function(e) {
            return e.key === n
          }),
          o = new RegExp("((git|ssh|http(s)?)|(git@[w.]+))(:(//)?)([w.@:/-~]+)(.git)(/)?");
        return (s = i.filter(function(e) {
          return o.test(e.value)
        })[0]) ? {
          uri: s.value,
          fallbackUri: s.value
        } : {
          uri: null,
          fallbackUri: null
        }
      }
      if (!r) {
        if (n === A.Icon) {
          var s = e.toUrl("./media/defaultIcon.png");
          return {
            uri: s,
            fallbackUri: s
          }
        }
        return null
      }
      return n === A.VSIX ? {
        uri: t.fallbackAssetUri + "/" + n + "?redirect=true&install=true",
        fallbackUri: t.fallbackAssetUri + "/" + n + "?install=true"
      } : {
        uri: t.assetUri + "/" + n,
        fallbackUri: t.fallbackAssetUri + "/" + n
      }
    }

    function O(e) {
      var t = e.properties ? e.properties.filter(function(e) {
          return e.key === R.Dependency
        }) : [],
        n = t.length > 0 && t[0].value;
      return n ? n.split(",").map(function(e) {
        return p.adoptToGalleryExtensionId(e)
      }) : []
    }

    function T(e) {
      var t = e.properties ? e.properties.filter(function(e) {
        return e.key === R.Engine
      }) : [];
      return t.length > 0 && t[0].value || ""
    }

    function k(e, t, n, r, i) {
      var o = e.versions[0],
        s = {
          manifest: P(o, A.Manifest),
          readme: P(o, A.Details),
          changelog: P(o, A.Changelog),
          download: P(o, A.VSIX),
          icon: P(o, A.Icon),
          license: P(o, A.License),
          repository: P(o, A.Repository)
        };
      return {
        identifier: {
          id: p.getGalleryExtensionId(e.publisher.publisherName, e.extensionName),
          uuid: e.extensionId
        },
        name: e.extensionName,
        version: o.version,
        date: o.lastUpdated,
        displayName: e.displayName,
        publisherId: e.publisher.publisherId,
        publisher: e.publisher.publisherName,
        publisherDisplayName: e.publisher.displayName,
        description: e.shortDescription || "",
        installCount: x(e.statistics, "install"),
        rating: x(e.statistics, "averagerating"),
        ratingCount: x(e.statistics, "ratingcount"),
        assets: s,
        properties: {
          dependencies: O(o),
          engine: T(o)
        },
        telemetryData: {
          index: (r.pageNumber - 1) * r.pageSize + n,
          searchText: r.searchText,
          querySource: i
        },
        preview: function(e) {
          return -1 !== e.indexOf("preview")
        }(e.flags)
      }
    }

    function I(e) {
      var t = i.join(e.userDataPath, "machineid");
      return C.readFile(t, "utf8").then(function(e) {
        return w.isUUID(e) ? e : u.TPromise.wrap(null)
      }, function(e) {
        return u.TPromise.wrap(null)
      }).then(function(e) {
        if (!e) {
          e = w.generateUuid();
          try {
            E.writeFileAndFlushSync(t, e)
          } catch (e) {}
        }
        return {
          "X-Market-Client-Id": "VSCode " + m.default.version,
          "User-Agent": "VSCode " + m.default.version,
          "X-Market-User-Id": e
        }
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var D;
    ! function(e) {
      e[e.None = 0] = "None", e[e.IncludeVersions = 1] = "IncludeVersions", e[e.IncludeFiles = 2] = "IncludeFiles", e[e.IncludeCategoryAndTags = 4] = "IncludeCategoryAndTags", e[e.IncludeSharedAccounts = 8] = "IncludeSharedAccounts", e[e.IncludeVersionProperties = 16] = "IncludeVersionProperties", e[e.ExcludeNonValidated = 32] = "ExcludeNonValidated", e[e.IncludeInstallationTargets = 64] = "IncludeInstallationTargets", e[e.IncludeAssetUri = 128] = "IncludeAssetUri", e[e.IncludeStatistics = 256] = "IncludeStatistics", e[e.IncludeLatestVersionOnly = 512] = "IncludeLatestVersionOnly", e[e.Unpublished = 4096] = "Unpublished"
    }(D || (D = {}));
    var j;
    ! function(e) {
      e[e.Tag = 1] = "Tag", e[e.ExtensionId = 4] = "ExtensionId", e[e.Category = 5] = "Category", e[e.ExtensionName = 7] = "ExtensionName", e[e.Target = 8] = "Target", e[e.Featured = 9] = "Featured", e[e.SearchText = 10] = "SearchText", e[e.ExcludeWithFlags = 12] = "ExcludeWithFlags"
    }(j || (j = {}));
    var A = {
        Icon: "Microsoft.VisualStudio.Services.Icons.Default",
        Details: "Microsoft.VisualStudio.Services.Content.Details",
        Changelog: "Microsoft.VisualStudio.Services.Content.Changelog",
        Manifest: "Microsoft.VisualStudio.Code.Manifest",
        VSIX: "Microsoft.VisualStudio.Services.VSIXPackage",
        License: "Microsoft.VisualStudio.Services.Content.License",
        Repository: "Microsoft.VisualStudio.Services.Links.Source"
      },
      R = {
        Dependency: "Microsoft.VisualStudio.Code.ExtensionDependencies",
        Engine: "Microsoft.VisualStudio.Code.Engine"
      },
      L = {
        pageNumber: 1,
        pageSize: 10,
        sortBy: f.SortBy.NoneOrRelevance,
        sortOrder: f.SortOrder.Default,
        flags: D.None,
        criteria: [],
        assetTypes: []
      },
      F = function() {
        function e(e) {
          void 0 === e && (e = L), this.state = e
        }
        return Object.defineProperty(e.prototype, "pageNumber", {
            get: function() {
              return this.state.pageNumber
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "pageSize", {
            get: function() {
              return this.state.pageSize
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "sortBy", {
            get: function() {
              return this.state.sortBy
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "sortOrder", {
            get: function() {
              return this.state.sortOrder
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "flags", {
            get: function() {
              return this.state.flags
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.withPage = function(t, n) {
            return void 0 === n && (n = this.state.pageSize), new e(h.assign({}, this.state, {
              pageNumber: t,
              pageSize: n
            }))
          }, e.prototype.withFilter = function(t) {
            for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            var i = this.state.criteria.concat(n.map(function(e) {
              return {
                filterType: t,
                value: e
              }
            }));
            return new e(h.assign({}, this.state, {
              criteria: i
            }))
          }, e.prototype.withSortBy = function(t) {
            return new e(h.assign({}, this.state, {
              sortBy: t
            }))
          }, e.prototype.withSortOrder = function(t) {
            return new e(h.assign({}, this.state, {
              sortOrder: t
            }))
          }, e.prototype.withFlags = function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new e(h.assign({}, this.state, {
              flags: t.reduce(function(e, t) {
                return e | t
              }, 0)
            }))
          },
          e.prototype.withAssetTypes = function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new e(h.assign({}, this.state, {
              assetTypes: t
            }))
          }, Object.defineProperty(e.prototype, "raw", {
            get: function() {
              var e = this.state,
                t = e.criteria,
                n = e.pageNumber,
                r = e.pageSize,
                i = e.sortBy,
                o = e.sortOrder,
                s = e.flags;
              return {
                filters: [{
                  criteria: t,
                  pageNumber: n,
                  pageSize: r,
                  sortBy: i,
                  sortOrder: o
                }],
                assetTypes: e.assetTypes,
                flags: s
              }
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "searchText", {
            get: function() {
              var e = this.state.criteria.filter(function(e) {
                return e.filterType === j.SearchText
              })[0];
              return e ? e.value : ""
            },
            enumerable: !0,
            configurable: !0
          }), e
      }(),
      M = function() {
        function e(e, t, n) {
          this.requestService = e, this.environmentService = t, this.telemetryService = n;
          var r = y.default.extensionsGallery;
          this.extensionsGalleryUrl = r && r.serviceUrl, this.commonHeadersPromise = I(this.environmentService)
        }
        return e.prototype.api = function(e) {
          return void 0 === e && (e = ""), "" + this.extensionsGalleryUrl + e
        }, e.prototype.isEnabled = function() {
          return !!this.extensionsGalleryUrl
        }, e.prototype.query = function(e) {
          var t = this;
          if (void 0 === e && (e = {}), !this.isEnabled()) return u.TPromise.wrapError(new Error("No extension gallery service configured."));
          var n = e.names ? "ids" : e.text ? "text" : "all",
            r = e.text || "",
            i = h.getOrDefault(e, function(e) {
              return e.pageSize
            }, 50);
          this.telemetryService.publicLog("galleryService:query", {
            type: n,
            text: r
          });
          var o = (new F).withFlags(D.IncludeLatestVersionOnly, D.IncludeAssetUri, D.IncludeStatistics, D.IncludeFiles, D.IncludeVersionProperties).withPage(1, i).withFilter(j.Target, "Microsoft.VisualStudio.Code").withFilter(j.ExcludeWithFlags, S(D.Unpublished)).withAssetTypes(A.Icon, A.License, A.Details, A.Manifest, A.VSIX, A.Changelog);
          return r ? ((r = (r = (r = r.replace(/\bcategory:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g, function(e, t, n) {
              return o = o.withFilter(j.Category, n || t), ""
            })).replace(/\btag:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g, function(e, t, n) {
              return o = o.withFilter(j.Tag, n || t), ""
            })).trim()) && (r = r.length < 200 ? r : r.substring(0, 200), o = o.withFilter(j.SearchText, r)),
            o = o.withSortBy(f.SortBy.NoneOrRelevance)) : o = e.ids ? o.withFilter.apply(o, [j.ExtensionId].concat(e.ids)) : e.names ? o.withFilter.apply(o, [j.ExtensionName].concat(e.names)) : o.withSortBy(f.SortBy.InstallCount), "number" == typeof e.sortBy && (o = o.withSortBy(e.sortBy)), "number" == typeof e.sortOrder && (o = o.withSortOrder(e.sortOrder)), this.queryGallery(o).then(function(n) {
            var r = n.galleryExtensions,
              i = n.total;
            return {
              firstPage: r.map(function(n, r) {
                return k(n, t.extensionsGalleryUrl, r, o, e.source)
              }),
              total: i,
              pageSize: o.pageSize,
              getPage: function(n) {
                var r = o.withPage(n + 1);
                return t.queryGallery(r).then(function(n) {
                  return n.galleryExtensions.map(function(n, i) {
                    return k(n, t.extensionsGalleryUrl, i, r, e.source)
                  })
                })
              }
            }
          })
        }, e.prototype.queryGallery = function(e) {
          var t = this;
          return this.commonHeadersPromise.then(function(n) {
            var r = JSON.stringify(e.raw),
              i = h.assign({}, n, {
                "Content-Type": "application/json",
                Accept: "application/json;api-version=3.0-preview.1",
                "Accept-Encoding": "gzip",
                "Content-Length": r.length
              });
            return t.requestService.request({
              type: "POST",
              url: t.api("/extensionquery"),
              data: r,
              headers: i
            }).then(function(e) {
              return e.res.statusCode >= 400 && e.res.statusCode < 500 ? {
                galleryExtensions: [],
                total: 0
              } : v.asJson(e).then(function(e) {
                var t = e.results[0],
                  n = t.extensions,
                  r = t.resultMetadata && t.resultMetadata.filter(function(e) {
                    return "ResultCount" === e.metadataType
                  })[0];
                return {
                  galleryExtensions: n,
                  total: r && r.metadataItems.filter(function(e) {
                    return "TotalCount" === e.name
                  })[0].count || 0
                }
              })
            })
          })
        }, e.prototype.reportStatistic = function(e, t, n, r) {
          var i = this;
          return this.isEnabled() ? this.commonHeadersPromise.then(function(s) {
            var a = o({}, s, {
              Accept: "*/*;api-version=4.0-preview.1"
            });
            return i.requestService.request({
              type: "POST",
              url: i.api("/publishers/" + e + "/extensions/" + t + "/" + n + "/stats?statType=" + r),
              headers: a
            }).then(null, function() {
              return null
            })
          }) : u.TPromise.as(null)
        }, e.prototype.download = function(e) {
          var t = this;
          return this.loadCompatibleVersion(e).then(function(e) {
            if (!e) return u.TPromise.wrapError(new Error(n.localize(0, null, m.default.version)));
            var o = i.join(r.tmpdir(), w.generateUuid()),
              s = p.getGalleryExtensionTelemetryData(e),
              a = (new Date).getTime();
            return t.getAsset(e.assets.download).then(function(e) {
              return v.download(o, e)
            }).then(function() {
              return function(e) {
                return t.telemetryService.publicLog("galleryService:downloadVSIX", h.assign(s, {
                  duration: e
                }))
              }((new Date).getTime() - a)
            }).then(function() {
              return o
            })
          })
        }, e.prototype.getReadme = function(e) {
          return this.getAsset(e.assets.readme).then(v.asText)
        }, e.prototype.getManifest = function(e) {
          return this.getAsset(e.assets.manifest).then(v.asText).then(JSON.parse)
        }, e.prototype.getChangelog = function(e) {
          return this.getAsset(e.assets.changelog).then(v.asText)
        }, e.prototype.loadAllDependencies = function(e) {
          return this.getDependenciesReccursively(e.map(function(e) {
            return e.id
          }), [])
        }, e.prototype.loadCompatibleVersion = function(e) {
          var t = this;
          if (e.properties.engine && this.isEngineValid(e.properties.engine)) return u.TPromise.wrap(e);
          var n = (new F).withFlags(D.IncludeVersions, D.IncludeFiles, D.IncludeVersionProperties).withPage(1, 1).withFilter(j.Target, "Microsoft.VisualStudio.Code").withFilter(j.ExcludeWithFlags, S(D.Unpublished)).withAssetTypes(A.Manifest, A.VSIX).withFilter(j.ExtensionId, e.identifier.uuid);
          return this.queryGallery(n).then(function(n) {
            var r = n.galleryExtensions[0];
            return r ? t.getLastValidExtensionVersion(r, r.versions).then(function(t) {
              return t ? (e.properties.dependencies = O(t), e.properties.engine = T(t), e.assets.download = P(t, A.VSIX), e.version = t.version, e) : null
            }) : null
          })
        }, e.prototype.loadDependencies = function(e) {
          var t = this;
          if (!e || 0 === e.length) return u.TPromise.as([]);
          var n = (r = (new F).withFlags(D.IncludeLatestVersionOnly, D.IncludeAssetUri, D.IncludeStatistics, D.IncludeFiles, D.IncludeVersionProperties).withPage(1, e.length).withFilter(j.Target, "Microsoft.VisualStudio.Code").withFilter(j.ExcludeWithFlags, S(D.Unpublished)).withAssetTypes(A.Icon, A.License, A.Details, A.Manifest, A.VSIX)).withFilter.apply(r, [j.ExtensionName].concat(e));
          return this.queryGallery(n).then(function(e) {
            for (var r = [], i = [], o = 0; o < e.galleryExtensions.length; o++) {
              var s = e.galleryExtensions[o]; - 1 === i.indexOf(s.extensionId) && (r.push(k(s, t.extensionsGalleryUrl, o, n, "dependencies")), i.push(s.extensionId))
            }
            return r
          });
          var r
        }, e.prototype.getDependenciesReccursively = function(t, n) {
          var r = this;
          return t && t.length && (t = n.length ? t.filter(function(t) {
            return !e.hasExtensionByName(n, t)
          }) : t).length ? this.loadDependencies(t).then(function(t) {
            for (var i = new Set, o = 0, s = t; o < s.length; o++) {
              var a = s[o];
              a.properties.dependencies && a.properties.dependencies.forEach(function(e) {
                return i.add(e)
              })
            }
            n = c.distinct(n.concat(t), function(e) {
              return e.identifier.uuid
            });
            var u = [];
            return i.forEach(function(t) {
              return !e.hasExtensionByName(n, t) && u.push(t)
            }), r.getDependenciesReccursively(u, n)
          }) : u.TPromise.wrap(n)
        }, e.prototype.getAsset = function(e, t) {
          var n = this;
          return void 0 === t && (t = {}), this.commonHeadersPromise.then(function(r) {
            var i = h.assign({}, r, t.headers || {});
            t = h.assign({}, t, {
              type: "GET"
            }, {
              headers: i
            });
            var o = e.uri,
              s = e.fallbackUri,
              a = h.assign({}, t, {
                url: o
              });
            return n.requestService.request(a).then(function(e) {
              return 200 === e.res.statusCode ? u.TPromise.as(e) : v.asText(e).then(function(t) {
                return u.TPromise.wrapError(new Error("Expected 200, got back " + e.res.statusCode + " instead.\n\n" + t))
              })
            }).then(null, function(e) {
              if (l.isPromiseCanceledError(e)) return u.TPromise.wrapError(e);
              var r = l.getErrorMessage(e);
              n.telemetryService.publicLog("galleryService:requestError", {
                url: o,
                cdn: !0,
                message: r
              }), n.telemetryService.publicLog("galleryService:cdnFallback", {
                url: o,
                message: r
              });
              var i = h.assign({}, t, {
                url: s
              });
              return n.requestService.request(i).then(null, function(e) {
                if (l.isPromiseCanceledError(e)) return u.TPromise.wrapError(e);
                var t = l.getErrorMessage(e);
                return n.telemetryService.publicLog("galleryService:requestError", {
                  url: s,
                  cdn: !1,
                  message: t
                }), u.TPromise.wrapError(e)
              })
            })
          })
        }, e.prototype.getLastValidExtensionVersion = function(e, t) {
          var n = this.getLastValidExtensionVersionFromProperties(e, t);
          return n || this.getLastValidExtensionVersionReccursively(e, t)
        }, e.prototype.getLastValidExtensionVersionFromProperties = function(e, t) {
          for (var n = 0, r = t; n < r.length; n++) {
            var i = r[n],
              o = T(i);
            if (!o) return null;
            if (this.isEngineValid(o)) return u.TPromise.wrap(i)
          }
          return null
        }, e.prototype.getLastValidExtensionVersionReccursively = function(e, t) {
          var n = this;
          if (!t.length) return null;
          var r = t[0],
            i = P(r, A.Manifest);
          return this.getAsset(i, {
            headers: {
              "Accept-Encoding": "gzip"
            }
          }).then(function(e) {
            return v.asJson(e)
          }).then(function(i) {
            var o = i.engines.vscode;
            return n.isEngineValid(o) ? (r.properties = r.properties || [], r.properties.push({
              key: R.Engine,
              value: i.engines.vscode
            }), r) : n.getLastValidExtensionVersionReccursively(e, t.slice(1))
          })
        }, e.prototype.isEngineValid = function(e) {
          return "*" === e || b.isVersionValid(m.default.version, e)
        }, e.hasExtensionByName = function(e, t) {
          for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            if (i.publisher + "." + i.name === t) return !0
          }
          return !1
        }, e = s([a(0, d.IRequestService), a(1, _.IEnvironmentService), a(2, g.ITelemetryService)], e)
      }();
    t.ExtensionGalleryService = M, t.resolveMarketplaceHeaders = I
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
  define(e[63], t([1, 0, 2, 5, 34, 80, 16]), function(e, t, n, o, u, c, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var f = function() {
      function e(e) {
        var t = this;
        this.disposables = [], this.configure(e.getValue()), e.onDidChangeConfiguration(function() {
          return t.configure(e.getValue())
        }, this, this.disposables)
      }
      return e.prototype.configure = function(e) {
        this.proxyUrl = e.http && e.http.proxy, this.strictSSL = e.http && e.http.proxyStrictSSL, this.authorization = e.http && e.http.proxyAuthorization
      }, e.prototype.request = function(e, t) {
        return void 0 === t && (t = u.request), r(this, void 0, n.TPromise, function() {
          var n, r, s, a, u;
          return i(this, function(i) {
            switch (i.label) {
              case 0:
                return n = this, r = n.proxyUrl, s = n.strictSSL, a = e, (u = e.agent) ? [3, 2] : [4, c.getProxyAgent(e.url, {
                  proxyUrl: r,
                  strictSSL: s
                })];
              case 1:
                u = i.sent(), i.label = 2;
              case 2:
                return a.agent = u, e.strictSSL = s, this.authorization && (e.headers = o.assign(e.headers || {}, {
                  "Proxy-Authorization": this.authorization
                })), [2, t(e)]
            }
          })
        })
      }, e = s([a(0, l.IConfigurationService)], e)
    }();
    t.RequestService = f
  }), define(e[69], t([1, 0, 2, 105, 63]), function(e, t, r, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function(e) {
      function r() {
        return null !== e && e.apply(this, arguments) || this
      }
      return n(r, e), r.prototype.request = function(n) {
        return e.prototype.request.call(this, n, t.xhrRequest)
      }, r
    }(o.RequestService);
    t.RequestService = s;
    var a = function(e) {
      function t(t) {
        var n = e.call(this) || this;
        return n._buffer = new Buffer(new Uint8Array(t)), n._offset = 0, n._length = n._buffer.length, n
      }
      return n(t, e), t.prototype._read = function(e) {
        this._offset < this._length ? (this.push(this._buffer.slice(this._offset, this._offset + e)), this._offset += e) : this.push(null)
      }, t
    }(i.Readable);
    t.xhrRequest = function(e) {
      var t = new XMLHttpRequest;
      return new r.TPromise(function(n, r) {
        return t.open(e.type || "GET", e.url, !0, e.user, e.password),
          function(e, t) {
            if (t.headers) e: for (var n in t.headers) {
              switch (n) {
                case "User-Agent":
                case "Accept-Encoding":
                case "Content-Length":
                  continue e
              }
              e.setRequestHeader(n, t.headers[n])
            }
          }(t, e), t.responseType = "arraybuffer", t.onerror = function(e) {
            return r(new Error("XHR failed: " + t.statusText))
          }, t.onload = function(e) {
            n({
              res: {
                statusCode: t.status,
                headers: function(e) {
                  for (var t = Object.create(null), n = 0, r = e.getAllResponseHeaders().split(/\r\n|\n|\r/g); n < r.length; n++) {
                    var i = r[n];
                    if (i) {
                      var o = i.indexOf(":");
                      t[i.substr(0, o).trim().toLowerCase()] = i.substr(o + 1).trim()
                    }
                  }
                  return t
                }(t)
              },
              stream: new a(t.response)
            })
          }, t.ontimeout = function(t) {
            return r(new Error("XHR timeout: " + e.timeout + "ms"))
          }, e.timeout && (t.timeout = e.timeout), t.send(e.data), null
      }, function() {
        t.abort()
      })
    }
  }), define(e[106], t([1, 0, 20, 7, 21, 28, 84, 2, 39, 40, 67, 17, 78, 56, 29, 79, 87, 16, 86, 42, 69, 43, 91, 94, 89, 90, 92, 30, 73, 95, 96, 107, 9, 77, 70, 27]), function(e, t, n, r, i, o, u, c, l, f, p, h, d, g, v, m, y, b, _, C, E, w, S, x, P, O, T, k, I, D, j, A, R, L, F, M) {
    "use strict";

    function N(e) {
      ! function(e) {
        new c.TPromise(function(e, t) {
          A.ipcRenderer.once("handshake:hey there", function(t, n) {
            return e(n)
          }), A.ipcRenderer.send("handshake:hello")
        }).then(function(t) {
          return function(e) {
            function t(i) {
              return u.serve(e).then(null, function(o) {
                return !i || r.isWindows || "EADDRINUSE" !== o.code ? c.TPromise.wrapError(o) : u.connect(e, "").then(function(e) {
                  return e.dispose(), c.TPromise.wrapError(new Error("There is an instance already running."))
                }, function(r) {
                  try {
                    n.unlinkSync(e)
                  } catch (e) {
                    return c.TPromise.wrapError(new Error("Error deleting the shared ipc hook."))
                  }
                  return t(!1)
                })
              })
            }
            return t(!0)
          }(t.sharedIPCHandle).then(function(n) {
            return function(e, t, n) {
              var r = new l.ServiceCollection,
                s = new d.EnvironmentService(t.args, process.execPath),
                a = F.createSpdLogService("sharedprocess", s);
              process.once("exit", function() {
                return a.dispose()
              }), a.info("main", JSON.stringify(n)), r.set(h.IEnvironmentService, s), r.set(M.ILogService, a), r.set(b.IConfigurationService, new f.SyncDescriptor(_.ConfigurationService)), r.set(C.IRequestService, new f.SyncDescriptor(E.RequestService));
              var u = e.getChannel("windows", {
                  route: function() {
                    return "main"
                  }
                }),
                c = new j.WindowsChannelClient(u);
              r.set(D.IWindowsService, c);
              var A = new U(c),
                R = e.getChannel("choice", {
                  route: function() {
                    return a.info("Routing choice request to the client", A.activeClientId), A.activeClientId
                  }
                });
              r.set(k.IChoiceService, new I.ChoiceChannelClient(R));
              var N = new p.InstantiationService(r);
              N.invokeFunction(function(t) {
                var r = [];
                i.default.aiConfig && i.default.aiConfig.asimovKey && r.push(new T.AppInsightsAppender(W, null, i.default.aiConfig.asimovKey)), process.once("exit", function() {
                  return r.forEach(function(e) {
                    return e.dispose()
                  })
                });
                var s = S.combinedAppender.apply(void 0, r);
                e.registerChannel("telemetryAppender", new P.TelemetryAppenderChannel(s));
                var a = new l.ServiceCollection,
                  u = t.get(h.IEnvironmentService),
                  c = u.appRoot,
                  p = u.extensionsPath,
                  d = u.extensionDevelopmentPath,
                  b = u.isBuilt,
                  _ = u.installSourcePath;
                if (b && !d && !u.args["disable-telemetry"] && i.default.enableTelemetry) {
                  var C = {
                    appender: s,
                    commonProperties: x.resolveCommonProperties(i.default.commit, o.default.version, n.machineId, _),
                    piiPaths: [c, p]
                  };
                  a.set(w.ITelemetryService, new f.SyncDescriptor(O.TelemetryService, C))
                } else a.set(w.ITelemetryService, S.NullTelemetryService);
                a.set(v.IExtensionManagementService, new f.SyncDescriptor(m.ExtensionManagementService)), a.set(v.IExtensionGalleryService, new f.SyncDescriptor(y.ExtensionGalleryService));
                var E = N.createChild(a);
                E.invokeFunction(function(t) {
                  var n = t.get(v.IExtensionManagementService),
                    r = new g.ExtensionManagementChannel(n);
                  e.registerChannel("extensions", r), n.removeDeprecatedExtensions(), L.createSharedProcessContributions(E)
                })
              })
            }(n, t, e)
          })
        }).then(function() {
          return A.ipcRenderer.send("handshake:im ready")
        })
      }(e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.startup = N;
    var U = function() {
        function e(e) {
          this.disposables = [], e.onWindowOpen(this.setActiveWindow, this, this.disposables), e.onWindowFocus(this.setActiveWindow, this, this.disposables)
        }
        return e.prototype.setActiveWindow = function(e) {
          this._activeWindowId = e
        }, Object.defineProperty(e.prototype, "activeClientId", {
          get: function() {
            return "window:" + this._activeWindowId
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.dispose = function() {
          this.disposables = R.dispose(this.disposables)
        }, e = s([a(0, D.IWindowsService)], e)
      }(),
      W = "monacoworkbench"
  })
}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\code\electron-browser\sharedProcess\sharedProcessMain.js.map