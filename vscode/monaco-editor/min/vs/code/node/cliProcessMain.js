/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function() {
  var e = ["require", "exports", "vs/base/common/winjs.base", "vs/platform/instantiation/common/instantiation", "vs/base/common/objects", "vs/nls!vs/code/node/cliProcessMain", "vs/base/common/types", "vs/nls", "path", "vs/base/common/strings", "vs/base/common/event", "vs/platform/configuration/common/configuration", "vs/platform/environment/common/environment", "vs/platform/registry/common/platform", "vs/base/common/platform", "vs/base/common/paths", "vs/base/common/uri", "vs/platform/log/common/log", "vs/platform/configuration/common/configurationRegistry", "vs/base/common/lifecycle", "vs/base/node/pfs", "vs/base/common/errors", "vs/platform/extensionManagement/common/extensionManagement", "vs/platform/node/package", "vs/base/common/arrays", "vs/base/common/async", "vs/base/node/extfs", "vs/base/common/assert", "os", "vs/platform/message/common/message", "vs/base/common/json", "vs/platform/request/node/request", "vs/platform/telemetry/common/telemetry", "vs/platform/node/product", "vs/platform/instantiation/common/serviceCollection", "vs/platform/extensionManagement/common/extensionManagementUtil", "fs", "vs/platform/configuration/common/configurationModels", "vs/base/node/request", "vs/platform/instantiation/common/descriptors", "vs/base/common/mime", "vs/nls!vs/platform/message/common/message", "vs/nls!vs/platform/telemetry/common/telemetryService", "vs/platform/extensionManagement/common/extensionNls", "vs/platform/extensions/node/extensionValidator", "semver", "vs/nls!vs/platform/extensions/node/extensionValidator", "vs/nls!vs/platform/extensionManagement/node/extensionManagementService", "vs/nls!vs/platform/extensionManagement/node/extensionGalleryService", "vs/nls!vs/platform/extensionManagement/common/extensionManagement", "vs/nls!vs/platform/configuration/common/configurationRegistry", "vs/platform/extensions/common/extensions", "vs/nls!vs/base/node/zip", "vs/platform/instantiation/common/instantiationService", "vs/base/common/severity", "vs/platform/keybinding/common/keybinding", "vs/nls!vs/base/common/severity", "vs/platform/log/node/spdlogService", "vs/platform/request/node/requestService", "url", "vs/platform/message/node/messageCli", "vs/platform/extensionManagement/node/extensionGalleryService", "vs/platform/environment/node/environmentService", "vs/base/common/collections", "vs/base/node/proxy", "vs/base/node/paths", "vs/base/node/config", "vs/nls!vs/platform/request/node/request", "vs/platform/jsonschemas/common/jsonContributionRegistry", "vs/base/common/map", "vs/base/common/glob", "vs/base/common/actions", "vs/platform/configuration/node/configuration", "vs/platform/configuration/node/configurationService", "vs/base/common/labels", "vs/platform/state/common/state", "vs/platform/state/node/stateService", "vs/platform/extensionManagement/node/extensionManagementService", "vs/base/common/graph", "vs/platform/telemetry/common/telemetryService", "vs/platform/telemetry/common/telemetryUtils", "vs/platform/telemetry/node/appInsightsAppender", "vs/base/common/date", "vs/platform/telemetry/node/commonProperties", "vs/base/common/uuid", "vs/base/common/decorators", "vs/base/node/zip", "applicationinsights", "yauzl", "original-fs", "crypto", "zlib", "readline", "spdlog", "vs/code/node/cliProcessMain"],
    t = function(t) {
      for (var n = [], r = 0, i = t.length; r < i; r++) n[r] = e[t[r]];
      return n
    };
  define(e[27], t([0, 1]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ok = function(e, t) {
        if (!e || null === e) throw new Error(t ? "Assertion failed (" + t + ")" : "Assertion Failed")
      }
    }), define(e[63], t([0, 1]), function(e, t) {
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
            a = t(o),
            s = n[a];
          s || (s = n[a] = []), s.push(o)
        }
        return n
      }
    }), define(e[82], t([0, 1]), function(e, t) {
      "use strict";

      function n(e) {
        return e < 10 ? "0" + e : String(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.toLocalISOString = function(e) {
        return e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + "." + (e.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
      }
    }), define(e[85], t([0, 1]), function(e, t) {
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
    }), define(e[30], t([0, 1]), function(e, t) {
      "use strict";

      function n(e, t) {
        function n(t, n) {
          for (var r = 0, i = 0; r < t || !n;) {
            var o = e.charCodeAt(s);
            if (o >= 48 && o <= 57) i = 16 * i + o - 48;
            else if (o >= 65 && o <= 70) i = 16 * i + o - 65 + 10;
            else {
              if (!(o >= 97 && o <= 102)) break;
              i = 16 * i + o - 97 + 10
            }
            s++, r++
          }
          return r < t && (i = -1), i
        }

        function a() {
          if (f = "", h = u.None, p = s, s >= l) return p = l, d = c.EOF;
          var t = e.charCodeAt(s);
          if (r(t)) {
            do {
              s++, f += String.fromCharCode(t), t = e.charCodeAt(s)
            } while (r(t));
            return d = c.Trivia
          }
          if (i(t)) return s++, f += String.fromCharCode(t), 13 === t && 10 === e.charCodeAt(s) && (s++, f += "\n"), d = c.LineBreakTrivia;
          switch (t) {
            case 123:
              return s++, d = c.OpenBraceToken;
            case 125:
              return s++, d = c.CloseBraceToken;
            case 91:
              return s++, d = c.OpenBracketToken;
            case 93:
              return s++, d = c.CloseBracketToken;
            case 58:
              return s++, d = c.ColonToken;
            case 44:
              return s++, d = c.CommaToken;
            case 34:
              return s++, f = function() {
                for (var t = "", r = s;;) {
                  if (s >= l) {
                    t += e.substring(r, s), h = u.UnexpectedEndOfString;
                    break
                  }
                  var o = e.charCodeAt(s);
                  if (34 === o) {
                    t += e.substring(r, s), s++;
                    break
                  }
                  if (92 !== o) {
                    if (o >= 0 && o <= 31) {
                      if (i(o)) {
                        t += e.substring(r, s), h = u.UnexpectedEndOfString;
                        break
                      }
                      h = u.InvalidCharacter
                    }
                    s++
                  } else {
                    if (t += e.substring(r, s), ++s >= l) {
                      h = u.UnexpectedEndOfString;
                      break
                    }
                    switch (o = e.charCodeAt(s++)) {
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
                        var a = n(4, !0);
                        a >= 0 ? t += String.fromCharCode(a) : h = u.InvalidUnicode;
                        break;
                      default:
                        h = u.InvalidEscapeCharacter
                    }
                    r = s
                  }
                }
                return t
              }(), d = c.StringLiteral;
            case 47:
              var a = s - 1;
              if (47 === e.charCodeAt(s + 1)) {
                for (s += 2; s < l && !i(e.charCodeAt(s));) s++;
                return f = e.substring(a, s), d = c.LineCommentTrivia
              }
              if (42 === e.charCodeAt(s + 1)) {
                s += 2;
                for (var g = l - 1, v = !1; s < g;) {
                  if (42 === e.charCodeAt(s) && 47 === e.charCodeAt(s + 1)) {
                    s += 2, v = !0;
                    break
                  }
                  s++
                }
                return v || (s++, h = u.UnexpectedEndOfComment),
                  f = e.substring(a, s), d = c.BlockCommentTrivia
              }
              return f += String.fromCharCode(t), s++, d = c.Unknown;
            case 45:
              if (f += String.fromCharCode(t), ++s === l || !o(e.charCodeAt(s))) return d = c.Unknown;
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
                var t = s;
                if (48 === e.charCodeAt(s)) s++;
                else
                  for (s++; s < e.length && o(e.charCodeAt(s));) s++;
                if (s < e.length && 46 === e.charCodeAt(s)) {
                  if (!(++s < e.length && o(e.charCodeAt(s)))) return h = u.UnexpectedEndOfNumber, e.substring(t, s);
                  for (s++; s < e.length && o(e.charCodeAt(s));) s++
                }
                var n = s;
                if (s < e.length && (69 === e.charCodeAt(s) || 101 === e.charCodeAt(s)))
                  if ((++s < e.length && 43 === e.charCodeAt(s) || 45 === e.charCodeAt(s)) && s++, s < e.length && o(e.charCodeAt(s))) {
                    for (s++; s < e.length && o(e.charCodeAt(s));) s++;
                    n = s
                  } else h = u.UnexpectedEndOfNumber;
                return e.substring(t, n)
              }(), d = c.NumericLiteral;
            default:
              for (; s < l && function(e) {
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
                }(t);) s++, t = e.charCodeAt(s);
              if (p !== s) {
                switch (f = e.substring(p, s)) {
                  case "true":
                    return d = c.TrueKeyword;
                  case "false":
                    return d = c.FalseKeyword;
                  case "null":
                    return d = c.NullKeyword
                }
                return d = c.Unknown
              }
              return f += String.fromCharCode(t), s++, d = c.Unknown
          }
        }
        void 0 === t && (t = !1);
        var s = 0,
          l = e.length,
          f = "",
          p = 0,
          d = c.Unknown,
          h = u.None;
        return {
          setPosition: function(e) {
            s = e, f = "", p = 0, d = c.Unknown, h = u.None
          },
          getPosition: function() {
            return s
          },
          scan: t ? function() {
            var e;
            do {
              e = a()
            } while (e >= c.LineCommentTrivia && e <= c.Trivia);
            return e
          } : a,
          getToken: function() {
            return d
          },
          getTokenValue: function() {
            return f
          },
          getTokenOffset: function() {
            return p
          },
          getTokenLength: function() {
            return s - p
          },
          getTokenError: function() {
            return h
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

      function a(e) {
        if ("array" === e.type) return e.children.map(a);
        if ("object" === e.type) {
          for (var t = {}, n = 0, r = e.children; n < r.length; n++) {
            var i = r[n];
            t[i.children[0].value] = a(i.children[1])
          }
          return t
        }
        return e.value
      }

      function s(e, t, r) {
        function i(e) {
          return e ? function() {
            return e(d.getTokenOffset(), d.getTokenLength())
          } : function() {
            return !0
          }
        }

        function o(e) {
          return e ? function(t) {
            return e(t, d.getTokenOffset(), d.getTokenLength())
          } : function() {
            return !0
          }
        }

        function a() {
          for (;;) {
            var e = d.scan();
            switch (e) {
              case c.LineCommentTrivia:
              case c.BlockCommentTrivia:
                S && s(f.InvalidSymbol);
                break;
              case c.Unknown:
                s(f.InvalidSymbol);
                break;
              case c.Trivia:
              case c.LineBreakTrivia:
                break;
              default:
                return e
            }
          }
        }

        function s(e, t, n) {
          if (void 0 === t && (t = []), void 0 === n && (n = []), C(e), t.length + n.length > 0)
            for (var r = d.getToken(); r !== c.EOF;) {
              if (-1 !== t.indexOf(r)) {
                a();
                break
              }
              if (-1 !== n.indexOf(r)) break;
              r = a()
            }
        }

        function u(e) {
          var t = d.getTokenValue();
          return e ? b(t) : g(t), a(), !0
        }

        function l() {
          return d.getToken() !== c.StringLiteral ? (s(f.PropertyNameExpected, [], [c.CloseBraceToken, c.CommaToken]), !1) : (u(!1), d.getToken() === c.ColonToken ? (E(":"), a(),
            p() || s(f.ValueExpected, [], [c.CloseBraceToken, c.CommaToken])) : s(f.ColonExpected, [], [c.CloseBraceToken, c.CommaToken]), !0)
        }

        function p() {
          switch (d.getToken()) {
            case c.OpenBracketToken:
              return function() {
                m(), a();
                for (var e = !1; d.getToken() !== c.CloseBracketToken && d.getToken() !== c.EOF;) {
                  if (d.getToken() === c.CommaToken) {
                    if (e || s(f.ValueExpected, [], []), E(","), a(), d.getToken() === c.CloseBracketToken && x) break
                  } else e && s(f.CommaExpected, [], []);
                  p() || s(f.ValueExpected, [], [c.CloseBracketToken, c.CommaToken]), e = !0
                }
                return y(), d.getToken() !== c.CloseBracketToken ? s(f.CloseBracketExpected, [c.CloseBracketToken], []) : a(), !0
              }();
            case c.OpenBraceToken:
              return function() {
                h(), a();
                for (var e = !1; d.getToken() !== c.CloseBraceToken && d.getToken() !== c.EOF;) {
                  if (d.getToken() === c.CommaToken) {
                    if (e || s(f.ValueExpected, [], []), E(","), a(), d.getToken() === c.CloseBraceToken && x) break
                  } else e && s(f.CommaExpected, [], []);
                  l() || s(f.ValueExpected, [], [c.CloseBraceToken, c.CommaToken]), e = !0
                }
                return v(),
                  d.getToken() !== c.CloseBraceToken ? s(f.CloseBraceExpected, [c.CloseBraceToken], []) : a(), !0
              }();
            case c.StringLiteral:
              return u(!0);
            default:
              return function() {
                switch (d.getToken()) {
                  case c.NumericLiteral:
                    var e = 0;
                    try {
                      "number" != typeof(e = JSON.parse(d.getTokenValue())) && (s(f.InvalidNumberFormat), e = 0)
                    } catch (e) {
                      s(f.InvalidNumberFormat)
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
                return a(), !0
              }()
          }
        }
        var d = n(e, !1),
          h = i(t.onObjectBegin),
          g = o(t.onObjectProperty),
          v = i(t.onObjectEnd),
          m = i(t.onArrayBegin),
          y = i(t.onArrayEnd),
          b = o(t.onLiteralValue),
          E = o(t.onSeparator),
          C = o(t.onError),
          S = r && r.disallowComments,
          x = r && r.allowTrailingComma;
        return a(), d.getToken() === c.EOF || (p() ? (d.getToken() !== c.EOF && s(f.EndOfFileExpected, [], []), !0) : (s(f.ValueExpected, [], []), !1))
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var u;
      ! function(e) {
        e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString",
          e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter"
      }(u = t.ScanError || (t.ScanError = {}));
      var c;
      ! function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.EOF = 16] = "EOF"
      }(c = t.SyntaxKind || (t.SyntaxKind = {})), t.createScanner = n;
      var l;
      ! function(e) {
        e[e.nullCharacter = 0] = "nullCharacter", e[e.maxAsciiCharacter = 127] = "maxAsciiCharacter",
          e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.lineSeparator = 8232] = "lineSeparator", e[e.paragraphSeparator = 8233] = "paragraphSeparator", e[e.nextLine = 133] = "nextLine", e[e.space = 32] = "space", e[e.nonBreakingSpace = 160] = "nonBreakingSpace", e[e.enQuad = 8192] = "enQuad", e[e.emQuad = 8193] = "emQuad", e[e.enSpace = 8194] = "enSpace", e[e.emSpace = 8195] = "emSpace", e[e.threePerEmSpace = 8196] = "threePerEmSpace", e[e.fourPerEmSpace = 8197] = "fourPerEmSpace", e[e.sixPerEmSpace = 8198] = "sixPerEmSpace", e[e.figureSpace = 8199] = "figureSpace", e[e.punctuationSpace = 8200] = "punctuationSpace", e[e.thinSpace = 8201] = "thinSpace", e[e.hairSpace = 8202] = "hairSpace", e[e.zeroWidthSpace = 8203] = "zeroWidthSpace", e[e.narrowNoBreakSpace = 8239] = "narrowNoBreakSpace", e[e.ideographicSpace = 12288] = "ideographicSpace", e[e.mathematicalSpace = 8287] = "mathematicalSpace", e[e.ogham = 5760] = "ogham", e[e._ = 95] = "_", e[e.$ = 36] = "$", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8",
          e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.ampersand = 38] = "ampersand", e[e.asterisk = 42] = "asterisk", e[e.at = 64] = "at", e[e.backslash = 92] = "backslash", e[e.bar = 124] = "bar", e[e.caret = 94] = "caret", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.closeParen = 41] = "closeParen",
          e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.equals = 61] = "equals", e[e.exclamation = 33] = "exclamation", e[e.greaterThan = 62] = "greaterThan", e[e.lessThan = 60] = "lessThan", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.openParen = 40] = "openParen", e[e.percent = 37] = "percent", e[e.plus = 43] = "plus", e[e.question = 63] = "question", e[e.semicolon = 59] = "semicolon", e[e.singleQuote = 39] = "singleQuote", e[e.slash = 47] = "slash", e[e.tilde = 126] = "tilde", e[e.backspace = 8] = "backspace", e[e.formFeed = 12] = "formFeed", e[e.byteOrderMark = 65279] = "byteOrderMark", e[e.tab = 9] = "tab", e[e.verticalTab = 11] = "verticalTab"
      }(l || (l = {}));
      var f;
      ! function(e) {
        e[e.InvalidSymbol = 0] = "InvalidSymbol", e[e.InvalidNumberFormat = 1] = "InvalidNumberFormat", e[e.PropertyNameExpected = 2] = "PropertyNameExpected", e[e.ValueExpected = 3] = "ValueExpected", e[e.ColonExpected = 4] = "ColonExpected", e[e.CommaExpected = 5] = "CommaExpected", e[e.CloseBraceExpected = 6] = "CloseBraceExpected",
          e[e.CloseBracketExpected = 7] = "CloseBracketExpected", e[e.EndOfFileExpected = 8] = "EndOfFileExpected"
      }(f = t.ParseErrorCode || (t.ParseErrorCode = {})), t.parse = function(e, t, n) {
        function r(e) {
          Array.isArray(o) ? o.push(e) : i && (o[i] = e)
        }
        void 0 === t && (t = []);
        var i = null,
          o = [],
          a = [];
        return s(e, {
          onObjectBegin: function() {
            var e = {};
            r(e), a.push(o), o = e, i = null
          },
          onObjectProperty: function(e) {
            i = e
          },
          onObjectEnd: function() {
            o = a.pop()
          },
          onArrayBegin: function() {
            var e = [];
            r(e), a.push(o), o = e, i = null
          },
          onArrayEnd: function() {
            o = a.pop()
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
        s(e, {
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
        var a = o.children[0];
        return a && delete a.parent, a
      }, t.findNodeAtLocation = function(e, t) {
        if (e) {
          for (var n = e, r = 0, i = t; r < i.length; r++) {
            var o = i[r];
            if ("string" == typeof o) {
              if ("object" !== n.type) return;
              for (var a = !1, s = 0, u = n.children; s < u.length; s++) {
                var c = u[s];
                if (c.children[0].value === o) {
                  n = c.children[1], a = !0;
                  break
                }
              }
              if (!a) return
            } else {
              var l = o;
              if ("array" !== n.type || l < 0 || l >= n.children.length) return;
              n = n.children[l]
            }
          }
          return n
        }
      }, t.getNodeValue = a, t.visit = s
    }),
    define(e[78], t([0, 1, 6, 63]), function(e, t, n, r) {
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
            a = this._hashFn(e.data);
          if (!n[a]) {
            n[a] = !0, i(e.data);
            var s = t ? e.outgoing : e.incoming;
            r.forEach(s, function(e) {
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
    }), define(e[15], t([0, 1, 14, 9]), function(e, t, n, r) {
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
        for (var o = i ? "\\" : "/", u = s(e, o), c = u.length, p = !1, d = "", h = u.length; h <= r; h++)
          if (h === r || 47 === e.charCodeAt(h) || 92 === e.charCodeAt(h)) {
            if (a(e, c, h, "..")) {
              var g = d.lastIndexOf(o),
                v = d.slice(g + 1);
              (u || v.length > 0) && ".." !== v && (d = -1 === g ? "" : d.slice(0, g), p = !0)
            } else a(e, c, h, ".") && (u || d || h < r - 1) && (p = !0);
            if (!p) {
              var m = e.slice(c, h);
              "" !== d && d[d.length - 1] !== o && (d += o), d += m
            }
            c = h + 1, p = !1
          }
        return u + d
      }

      function a(e, t, n, r) {
        return t + r.length === n && e.indexOf(r, t) === t
      }

      function s(e, t) {
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
        var a = e.indexOf("://");
        if (-1 !== a)
          for (a += 3; a < n; a++)
            if (47 === (r = e.charCodeAt(a)) || 92 === r) return e.slice(0, a + 1);
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
      t.normalize = o, t.getRoot = s, t.join = function() {
        for (var e = "", n = 0; n < arguments.length; n++) {
          var r = arguments[n];
          if (n > 0) {
            var i = e.charCodeAt(e.length - 1);
            if (47 !== i && 92 !== i) {
              var a = r.charCodeAt(0);
              47 !== a && 92 !== a && (e += t.sep)
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
        d = /^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])$/i;
      t.isValidBasename = function(e) {
        return !(!e || 0 === e.length || /^\s+$/.test(e) || (p.lastIndex = 0, p.test(e) || n.isWindows && d.test(e) || "." === e || ".." === e || n.isWindows && "." === e[e.length - 1] || n.isWindows && e.length !== e.trim().length))
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
    }), define(e[74], t([0, 1, 16, 14, 15, 9]), function(e, t, n, r, i, o) {
      "use strict";

      function a(e) {
        return r.isWindows && e && ":" === e[1]
      }

      function s(e) {
        return a(e) ? e.charAt(0).toUpperCase() + e.slice(1) : e
      }

      function u(e, t) {
        return e && (r.isMacintosh || r.isLinux) && i.isEqualOrParent(e, t, !r.isLinux) && (e = "~" + e.substr(t.length)), e
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getPathLabel = function(e, t, c) {
        if (!e) return null;
        if ("string" == typeof e && (e = n.default.file(e)), "file" !== e.scheme && "untitled" !== e.scheme) return e.authority + e.path;
        var l = t ? t.getWorkspaceFolder(e) : null;
        if (l) {
          var f = t.getWorkspace().folders.length > 1,
            p = void 0;
          if (p = i.isEqual(l.uri.fsPath, e.fsPath, !r.isLinux) ? "" : i.normalize(o.ltrim(e.fsPath.substr(l.uri.fsPath.length), i.nativeSep), !0), f) {
            var d = i.basename(l.uri.fsPath);
            p = p ? i.join(d, p) : d
          }
          return p
        }
        if (a(e.fsPath)) return i.normalize(s(e.fsPath), !0);
        var h = i.normalize(e.fsPath, !0);
        return !r.isWindows && c && (h = u(h, c.userHome)), h
      }, t.getBaseLabel = function(e) {
        if (!e) return null;
        "string" == typeof e && (e = n.default.file(e));
        var t = i.basename(e.fsPath) || e.fsPath;
        return a(t) ? s(t) : t
      }, t.normalizeDriveLetter = s, t.tildify = u, t.untildify = function(e, t) {
        return e.replace(/^~($|\/|\\)/, t + "$1")
      };
      var c = "…",
        l = "\\\\",
        f = "~";
      t.shorten = function(e) {
        for (var t = new Array(e.length), n = !1, r = 0; r < e.length; r++) {
          var a = e[r];
          if ("" !== a)
            if (a) {
              n = !0;
              var s = "";
              0 === a.indexOf(l) ? (s = a.substr(0, a.indexOf(l) + l.length), a = a.substr(a.indexOf(l) + l.length)) : 0 === a.indexOf(i.nativeSep) ? (s = a.substr(0, a.indexOf(i.nativeSep) + i.nativeSep.length), a = a.substr(a.indexOf(i.nativeSep) + i.nativeSep.length)) : 0 === a.indexOf(f) && (s = a.substr(0, a.indexOf(f) + f.length), a = a.substr(a.indexOf(f) + f.length));
              for (var u = a.split(i.nativeSep), p = 1; n && p <= u.length; p++)
                for (var d = u.length - p; n && d >= 0; d--) {
                  n = !1;
                  for (var h = u.slice(d, d + p).join(i.nativeSep), g = 0; !n && g < e.length; g++)
                    if (g !== r && e[g] && e[g].indexOf(h) > -1) {
                      var v = d + p === u.length,
                        m = d > 0 && e[g].indexOf(i.nativeSep) > -1 ? i.nativeSep + h : h,
                        y = o.endsWith(e[g], m);
                      n = !v || y
                    }
                  if (!n) {
                    var b = "";
                    (o.endsWith(u[0], ":") || "" !== s) && (1 === d && (d = 0, p++, h = u[0] + i.nativeSep + h), d > 0 && (b = u[0] + i.nativeSep), b = s + b), d > 0 && (b = b + c + i.nativeSep), b += h, d + p < u.length && (b = b + i.nativeSep + c), t[r] = b
                  }
                }
              n && (t[r] = a)
            } else t[r] = a;
          else t[r] = "." + i.nativeSep
        }
        return t
      };
      var p;
      ! function(e) {
        e[e.TEXT = 0] = "TEXT", e[e.VARIABLE = 1] = "VARIABLE", e[e.SEPARATOR = 2] = "SEPARATOR"
      }(p || (p = {})), t.template = function(e, t) {
        void 0 === t && (t = Object.create(null));
        for (var n, r = [], i = !1, o = "", a = 0; a < e.length; a++)
          if ("$" === (n = e[a]) || i && "{" === n) o && r.push({
            value: o,
            type: p.TEXT
          }), o = "", i = !0;
          else if ("}" === n && i) {
          var s = t[o];
          if ("string" == typeof s) s.length && r.push({
            value: s,
            type: p.VARIABLE
          });
          else if (s) {
            var u = r[r.length - 1];
            u && u.type === p.SEPARATOR || r.push({
              value: s.label,
              type: p.SEPARATOR
            })
          }
          o = "", i = !1
        } else o += n;
        return o && !i && r.push({
          value: o,
          type: p.TEXT
        }), r.filter(function(e, t) {
          return e.type !== p.SEPARATOR || [r[t - 1], r[t + 1]].every(function(e) {
            return e && e.type === p.VARIABLE && e.value.length > 0
          })
        }).map(function(e) {
          return e.value
        }).join("")
      }, t.mnemonicMenuLabel = function(e, t) {
        return r.isMacintosh || t ? e.replace(/\(&&\w\)|&&/g, "") : e.replace(/&&/g, "&")
      }, t.mnemonicButtonLabel = function(e) {
        return r.isMacintosh ? e.replace(/\(&&\w\)|&&/g, "") : e.replace(/&&/g, r.isWindows ? "&" : "_")
      }, t.unmnemonicLabel = function(e) {
        return e.replace(/&/g, "&&")
      }
    }), define(e[71], t([0, 1, 2, 10]), function(e, t, n, r) {
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
          }),
          Object.defineProperty(e.prototype, "label", {
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
          }, Object.defineProperty(e.prototype, "class", {
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
          }),
          Object.defineProperty(e.prototype, "onDidBeforeRun", {
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
    }), define(e[70], t([0, 1, 24, 9, 15, 69, 2]), function(e, t, n, r, i, o, a) {
      "use strict";

      function s(e) {
        switch (e) {
          case 0:
            return "";
          case 1:
            return E + "*?";
          default:
            return "(?:" + b + "|" + E + "+" + b + "|" + b + E + "+)*?"
        }
      }

      function u(e, t) {
        if (!e) return [];
        for (var n, r = [], i = !1, o = !1, a = "", s = 0; s < e.length; s++) {
          switch (n = e[s]) {
            case t:
              if (!i && !o) {
                r.push(a), a = "";
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
          a += n
        }
        return a && r.push(a), r
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
              for (var a, l = !1, f = "", p = !1, d = "", h = 0; h < e.length; h++)
                if ("}" !== (a = e[h]) && l) f += a;
                else if (!p || "]" === a && d) switch (a) {
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
                  t += "[" + d + "]", p = !1, d = "";
                  break;
                case "?":
                  t += E;
                  continue;
                case "*":
                  t += s(1);
                  continue;
                default:
                  t += r.escapeRegExpCharacters(a)
              } else {
                d += "-" === a ? a : "^" !== a && "!" !== a || d ? a === y ? "" : r.escapeRegExpCharacters(a) : "^"
              }
              o < n.length - 1 && n[o + 1] !== m && (t += b), i = !1
            } else i || (t += s(2), i = !0)
          })
        }
        return t
      }

      function l(e, t) {
        if (!e) return k;
        var i;
        i = "string" != typeof e ? e.pattern : e;
        var o = (i = i.trim()) + "_" + !!t.trimForExclusions,
          a = T.get(o);
        if (a) return f(a, e);
        var s;
        if (S.test(i)) {
          var u = i.substr(4);
          a = function(e, t) {
            return e && r.endsWith(e, u) ? i : null
          }
        } else a = (s = x.exec(p(i, t))) ? function(e, t) {
          var n = "/" + e,
            i = "\\" + e,
            o = function(o, a) {
              return o ? a ? a === e ? t : null : o === e || r.endsWith(o, n) || r.endsWith(o, i) ? t : null : null
            },
            a = [e];
          return o.basenames = a, o.patterns = [t], o.allBasenames = a, o
        }(s[1], i) : (t.trimForExclusions ? w : _).test(i) ? function(e, t) {
          var r = v(e.slice(1, -1).split(",").map(function(e) {
              return l(e, t)
            }).filter(function(e) {
              return e !== k
            }), e),
            i = r.length;
          if (!i) return k;
          if (1 === i) return r[0];
          var o = function(t, n) {
              for (var i = 0, o = r.length; i < o; i++)
                if (r[i](t, n)) return e;
              return null
            },
            a = n.first(r, function(e) {
              return !!e.allBasenames
            });
          a && (o.allBasenames = a.allBasenames);
          var s = r.reduce(function(e, t) {
            return t.allPaths ? e.concat(t.allPaths) : e
          }, []);
          s.length && (o.allPaths = s);
          return o
        }(i, t) : (s = P.exec(p(i, t))) ? d(s[1].substr(1), i, !0) : (s = O.exec(p(i, t))) ? d(s[1], i, !1) : function(e) {
          try {
            var t = new RegExp("^" + c(e) + "$");
            return function(n, r) {
              return t.lastIndex = 0, n && t.test(n) ? e : null
            }
          } catch (e) {
            return k
          }
        }(i);
        return T.set(o, a), f(a, e)
      }

      function f(e, t) {
        return "string" == typeof t ? e : function(n, r) {
          return i.isEqualOrParent(n, t.base) ? e(i.normalize(t.pathToRelative(t.base, n)), r) : null
        }
      }

      function p(e, t) {
        return t.trimForExclusions && r.endsWith(e, "/**") ? e.substr(0, e.length - 2) : e
      }

      function d(e, t, n) {
        var o = i.nativeSep !== i.sep ? e.replace(C, i.nativeSep) : e,
          a = i.nativeSep + o,
          s = n ? function(e, n) {
            return e && (e === o || r.endsWith(e, a)) ? t : null
          } : function(e, n) {
            return e && e === o ? t : null
          };
        return s.allPaths = [(n ? "*/" : "./") + e], s
      }

      function h(e, t) {
        if (void 0 === t && (t = {}), !e) return I;
        if ("string" == typeof e || g(e)) {
          var r = l(e, t);
          if (r === k) return I;
          var o = function(e, t) {
            return !!r(e, t)
          };
          return r.allBasenames && (o.allBasenames = r.allBasenames), r.allPaths && (o.allPaths = r.allPaths), o
        }
        return function(e, t) {
          var r = v(Object.getOwnPropertyNames(e).map(function(n) {
              return function(e, t, n) {
                if (!1 === t) return k;
                var r = l(e, n);
                if (r === k) return k;
                if ("boolean" == typeof t) return r;
                if (t) {
                  var i = t.when;
                  if ("string" == typeof i) {
                    var o = function(t) {
                        var n = i.replace("$(basename)", t.name);
                        return -1 !== t.siblings.indexOf(n) ? e : null
                      },
                      s = function(e, t, n) {
                        if (!r(e, t)) return null;
                        var i = n();
                        return i ? a.TPromise.is(i) ? i.then(o) : o(i) : null
                      };
                    return s.requiresSiblings = !0, s
                  }
                }
                return r
              }(n, e[n], t)
            }).filter(function(e) {
              return e !== k
            })),
            o = r.length;
          if (!o) return k;
          if (!r.some(function(e) {
              return e.requiresSiblings
            })) {
            if (1 === o) return r[0];
            var s = function(e, t, n) {
                for (var i = 0, o = r.length; i < o; i++) {
                  var a = r[i](e, t);
                  if (a) return a
                }
                return null
              },
              u = n.first(r, function(e) {
                return !!e.allBasenames
              });
            u && (s.allBasenames = u.allBasenames);
            var c = r.reduce(function(e, t) {
              return t.allPaths ? e.concat(t.allPaths) : e
            }, []);
            return c.length && (s.allPaths = c), s
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

              function s() {
                if (!c) {
                  c = !0;
                  var e = n();
                  u = a.TPromise.is(e) ? e.then(o) : o(e)
                }
                return u
              }
              for (var u, c = !n, l = 0, f = r.length; l < f; l++) {
                var p = r[l](e, t, s);
                if (p) return p
              }
              return null
            },
            p = n.first(r, function(e) {
              return !!e.allBasenames
            });
          p && (f.allBasenames = p.allBasenames);
          var d = r.reduce(function(e, t) {
            return t.allPaths ? e.concat(t.allPaths) : e
          }, []);
          d.length && (f.allPaths = d);
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
          for (var o = 0, a = i.length; o < a; o++) r.push(t)
        } else r = n.reduce(function(e, t) {
          return e.concat(t.patterns)
        }, []);
        var s = function(e, t) {
          if (!e) return null;
          if (!t) {
            var n = void 0;
            for (n = e.length; n > 0; n--) {
              var o = e.charCodeAt(n - 1);
              if (47 === o || 92 === o) break
            }
            t = e.substr(n)
          }
          var a = i.indexOf(t);
          return -1 !== a ? r[a] : null
        };
        s.basenames = i, s.patterns = r, s.allBasenames = i;
        var u = e.filter(function(e) {
          return !e.basenames
        });
        return u.push(s), u
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getEmptyExpression = function() {
        return Object.create(null)
      };
      var m = "**",
        y = "/",
        b = "[/\\\\]",
        E = "[^/\\\\]",
        C = /\//g;
      t.splitGlobAware = u;
      var S = /^\*\*\/\*\.[\w\.-]+$/,
        x = /^\*\*\/([\w\.-]+)\/?$/,
        _ = /^{\*\*\/[\*\.]?[\w\.-]+\/?(,\*\*\/[\*\.]?[\w\.-]+\/?)*}$/,
        w = /^{\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?(,\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?)*}$/,
        P = /^\*\*((\/[\w\.-]+)+)\/?$/,
        O = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/,
        T = new o.LRUCache(1e4),
        I = function() {
          return !1
        },
        k = function() {
          return null
        };
      t.match = function(e, t, n) {
        return !(!e || !t) && h(e)(t, void 0, n)
      }, t.parse = h, t.isRelativePattern = g, t.parseToAsync = function(e, t) {
        var n = h(e, t);
        return function(e, t, r) {
          var i = n(e, t, r);
          return i instanceof a.TPromise ? i : a.TPromise.as(i)
        }
      }, t.getBasenameTerms = function(e) {
        return e.allBasenames || []
      }, t.getPathTerms = function(e) {
        return e.allPaths || []
      }
    }), define(e[40], t([0, 1, 15, 9, 70]), function(e, t, n, r, i) {
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

      function a(e, i) {
        if (!e) return [t.MIME_UNKNOWN];
        e = e.toLowerCase();
        var o = n.basename(e),
          a = s(e, o, f);
        if (a) return [a, t.MIME_TEXT];
        var u = s(e, o, l);
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

      function s(e, t, n) {
        for (var o, a, s, u = n.length - 1; u >= 0; u--) {
          var c = n[u];
          if (t === c.filenameLowercase) {
            o = c;
            break
          }
          if (c.filepattern && (!a || c.filepattern.length > a.filepattern.length)) {
            var l = c.filepatternOnPath ? e : t;
            i.match(c.filepatternLowercase, l) && (a = c)
          }
          c.extension && (!s || c.extension.length > s.extension.length) && r.endsWith(t, c.extensionLowercase) && (s = c)
        }
        return o ? o.mime : a ? a.mime : s ? s.mime : null
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
      }, t.guessMimeTypes = a, t.isUnspecific = u, t.suggestFilename = function(e, t) {
        for (var n = 0; n < c.length; n++) {
          var r = c[n];
          if (!r.userConfigured && r.id === e && r.extension) return t + r.extension
        }
        return t
      }
    }),
    define(e[66], t([0, 1, 36, 8, 4, 19, 10, 30, 26]), function(e, t, n, r, i, o, a, s, u) {
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
          }), this._path = e, this.options = t, this.disposables = [], this.configName = r.basename(this._path), this._onDidUpdateConfiguration = new a.Emitter, this.disposables.push(this._onDidUpdateConfiguration), this.registerWatcher(), this.initAsync()
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
            this.parseErrors = [], t = this.options.parse ? this.options.parse(e, this.parseErrors) : s.parse(e, this.parseErrors)
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
    }), define(e[65], t([0, 1, 16]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = n.default.parse(e.toUrl("paths")).fsPath,
        i = e.__$__nodeRequire(r);
      t.getAppDataPath = i.getAppDataPath, t.getDefaultUserDataPath = i.getDefaultUserDataPath
    });
  var n = this && this.__awaiter || function(e, t, n, r) {
      return new(n || (n = Promise))(function(i, o) {
        function a(e) {
          try {
            u(r.next(e))
          } catch (e) {
            o(e)
          }
        }

        function s(e) {
          try {
            u(r.throw(e))
          } catch (e) {
            o(e)
          }
        }

        function u(e) {
          e.done ? i(e.value) : new n(function(t) {
            t(e.value)
          }).then(a, s)
        }
        u((r = r.apply(e, t || [])).next())
      })
    },
    r = this && this.__generator || function(e, t) {
      function n(n) {
        return function(a) {
          return function(n) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; s;) try {
              if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
              switch (i = 0, o && (n = [0, o.value]), n[0]) {
                case 0:
                case 1:
                  o = n;
                  break;
                case 4:
                  return s.label++, {
                    value: n[1],
                    done: !1
                  };
                case 5:
                  s.label++, i = n[1], n = [0];
                  continue;
                case 7:
                  n = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    s = 0;
                    continue
                  }
                  if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    s.label = n[1];
                    break
                  }
                  if (6 === n[0] && s.label < o[1]) {
                    s.label = o[1], o = n;
                    break
                  }
                  if (o && s.label < o[2]) {
                    s.label = o[2], s.ops.push(n);
                    break
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue
              }
              n = t.call(e, s)
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
          }([n, a])
        }
      }
      var r, i, o, a, s = {
        label: 0,
        sent: function() {
          if (1 & o[0]) throw o[1];
          return o[1]
        },
        trys: [],
        ops: []
      };
      return a = {
        next: n(0),
        throw: n(1),
        return: n(2)
      }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
      }), a
    };
  define(e[64], t([0, 1, 59, 6, 2]), function(e, t, i, o, a) {
      "use strict";

      function s(t, s) {
        return void 0 === s && (s = {}), n(this, void 0, a.TPromise, function() {
          var n, a, u, c, l, f;
          return r(this, function(r) {
            switch (r.label) {
              case 0:
                return n = i.parse(t), (a = s.proxyUrl || function(e) {
                  return "http:" === e.protocol ? process.env.HTTP_PROXY || process.env.http_proxy || null : "https:" === e.protocol ? process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || null : null
                }(n)) ? (u = i.parse(a), /^https?:$/.test(u.protocol) ? (c = {
                  host: u.hostname,
                  port: Number(u.port),
                  auth: u.auth,
                  rejectUnauthorized: !o.isBoolean(s.strictSSL) || s.strictSSL
                }, "http:" !== n.protocol ? [3, 2] : [4, new Promise(function(t, n) {
                  e(["http-proxy-agent"], t, n)
                })]) : [2, null]) : [2, null];
              case 1:
                return f = r.sent(), [3, 4];
              case 2:
                return [4, new Promise(function(t, n) {
                  e(["https-proxy-agent"], t, n)
                })];
              case 3:
                f = r.sent(), r.label = 4;
              case 4:
                return l = f, [2, new l(c)]
            }
          })
        })
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getProxyAgent = s
    }), define(e[56], t([7, 5]), function(e, t) {
      return e.create("vs/base/common/severity", t)
    }), define(e[54], t([0, 1, 56, 9]), function(e, t, n, r) {
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
          a = "info",
          s = Object.create(null);
        s[e.Error] = n.localize(0, null), s[e.Warning] = n.localize(1, null), s[e.Info] = n.localize(2, null), e.fromValue = function(n) {
          return n ? r.equalsIgnoreCase(t, n) ? e.Error : r.equalsIgnoreCase(i, n) || r.equalsIgnoreCase(o, n) ? e.Warning : r.equalsIgnoreCase(a, n) ? e.Info : e.Ignore : e.Ignore
        }, e.toString = function(e) {
          return s[e] || r.empty
        }, e.compare = function(e, t) {
          return t - e
        }
      }(i || (i = {})), t.default = i
    }), define(e[52], t([7, 5]), function(e, t) {
      return e.create("vs/base/node/zip", t)
    }), define(e[50], t([7, 5]), function(e, t) {
      return e.create("vs/platform/configuration/common/configurationRegistry", t)
    }), define(e[49], t([7, 5]), function(e, t) {
      return e.create("vs/platform/extensionManagement/common/extensionManagement", t)
    }), define(e[48], t([7, 5]), function(e, t) {
      return e.create("vs/platform/extensionManagement/node/extensionGalleryService", t)
    }), define(e[47], t([7, 5]), function(e, t) {
      return e.create("vs/platform/extensionManagement/node/extensionManagementService", t)
    }),
    define(e[46], t([7, 5]), function(e, t) {
      return e.create("vs/platform/extensions/node/extensionValidator", t)
    }), define(e[41], t([7, 5]), function(e, t) {
      return e.create("vs/platform/message/common/message", t)
    }), define(e[67], t([7, 5]), function(e, t) {
      return e.create("vs/platform/request/node/request", t)
    }), define(e[42], t([7, 5]), function(e, t) {
      return e.create("vs/platform/telemetry/common/telemetryService", t)
    }), define(e[43], t([0, 1, 4]), function(e, t, n) {
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
    }), define(e[44], t([0, 1, 46, 45, 8]), function(e, t, n, r, i) {
      "use strict";

      function o(e) {
        return "*" === (e = e.trim()) || d.test(e)
      }

      function a(e) {
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
        var t = e.match(d);
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

      function s(e) {
        if (!e) return null;
        var t = e.majorBase,
          n = e.majorMustEqual,
          r = e.minorBase,
          i = e.minorMustEqual,
          o = e.patchBase,
          a = e.patchMustEqual;
        return e.hasCaret && (0 === t ? a = !1 : (i = !1, a = !1)), {
          majorBase: t,
          majorMustEqual: n,
          minorBase: r,
          minorMustEqual: i,
          patchBase: o,
          patchMustEqual: a,
          isMinimum: e.hasGreaterEquals
        }
      }

      function u(e, t) {
        var n;
        n = "string" == typeof e ? s(a(e)) : e;
        var r;
        if (r = "string" == typeof t ? s(a(t)) : t, !n || !r) return !1;
        var i = n.majorBase,
          o = n.minorBase,
          u = n.patchBase,
          c = r.majorBase,
          l = r.minorBase,
          f = r.patchBase,
          p = r.majorMustEqual,
          d = r.minorMustEqual,
          h = r.patchMustEqual;
        return r.isMinimum ? i > c || !(i < c) && (o > l || !(o < l) && u >= f) : (1 !== i || 0 !== c || p && d && h || (c = 1, l = 0, f = 0, p = !0, d = !1, h = !1), !(i < c) && (i > c ? !p : !(o < l) && (o > l ? !d : !(u < f) && (!(u > f) || !h))))
      }

      function c(e, t, n) {
        return !(!t.isBuiltin && void 0 !== t.main) || l(e, t.engines.vscode, n)
      }

      function l(e, t, r) {
        void 0 === r && (r = []);
        var i = s(a(t));
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

      function p(e, t, o, a) {
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
            if (o.indexOf(e) && r.push(n.localize(14, null, o, e)), void 0 === t.activationEvents) return r.push(n.localize(15, null, "activationEvents", "main")), !1
          }
          return !0
        }(t, o, a) && (r.valid(o.version) ? c(e, o, a) : (a.push(n.localize(16, null)), !1))
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var d = /^(\^|>=)?((\d+)|x)\.((\d+)|x)\.((\d+)|x)(\-.*)?$/;
      t.isValidVersionStr = o, t.parseVersion = a, t.normalizeVersion = s, t.isValidVersion = u, t.isValidExtensionVersion = c, t.isVersionValid = l, t.isValidExtensionDescription = p
    }), define(e[39], t([0, 1]), function(e, t) {
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
    }), define(e[3], t([0, 1]), function(e, t) {
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
    }), define(e[12], t([0, 1, 3]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IEnvironmentService = n.createDecorator("environmentService")
    }), define(e[22], t([0, 1, 49, 3]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.EXTENSION_IDENTIFIER_PATTERN = "^([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$", t.EXTENSION_IDENTIFIER_REGEX = new RegExp(t.EXTENSION_IDENTIFIER_PATTERN);
      ! function(e) {
        e[e.System = 0] = "System", e[e.User = 1] = "User"
      }(t.LocalExtensionType || (t.LocalExtensionType = {})), t.IExtensionManagementService = r.createDecorator("extensionManagementService"), t.IExtensionGalleryService = r.createDecorator("extensionGalleryService");
      ! function(e) {
        e[e.NoneOrRelevance = 0] = "NoneOrRelevance",
          e[e.LastUpdatedDate = 1] = "LastUpdatedDate", e[e.Title = 2] = "Title", e[e.PublisherName = 3] = "PublisherName", e[e.InstallCount = 4] = "InstallCount", e[e.PublishedDate = 5] = "PublishedDate", e[e.AverageRating = 6] = "AverageRating", e[e.WeightedRating = 12] = "WeightedRating"
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
  var i = this && this.__assign || Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
    }
    return e
  };
  define(e[35], t([0, 1, 22]), function(e, t, n) {
    "use strict";

    function r(e, t) {
      return e.uuid && t.uuid ? e.uuid === t.uuid : e.id === t.id || s(e.id) === s(t.id)
    }

    function o(e, t) {
      return e + "." + t.toLocaleLowerCase()
    }

    function a(e) {
      return o(e.manifest.publisher, e.manifest.name)
    }

    function s(e) {
      return e.replace(n.EXTENSION_IDENTIFIER_REGEX, function(e, t, n) {
        return o(t, n)
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.areSameExtensions = r, t.getGalleryExtensionId = o, t.getGalleryExtensionIdFromLocal = a, t.LOCAL_EXTENSION_ID_REGEX = /^([^.]+\..+)-(\d+\.\d+\.\d+(-.*)?)$/, t.getIdFromLocalExtensionId = function(e) {
      var n = t.LOCAL_EXTENSION_ID_REGEX.exec(e);
      return s(n && n[1] ? n[1] : e)
    }, t.adoptToGalleryExtensionId = s, t.groupByExtension = function(e, t) {
      for (var n = [], i = function(e) {
          for (var i = 0, o = n; i < o.length; i++) {
            var a = o[i];
            if (a.some(function(n) {
                return r(t(n), t(e))
              })) return a
          }
          return null
        }, o = 0, a = e; o < a.length; o++) {
        var s = a[o],
          u = i(s);
        u ? u.push(s) : n.push([s])
      }
      return n
    }, t.getLocalExtensionTelemetryData = function(e) {
      return {
        id: a(e),
        name: e.manifest.name,
        galleryId: null,
        publisherId: e.metadata ? e.metadata.publisherId : null,
        publisherName: e.manifest.publisher,
        publisherDisplayName: e.metadata ? e.metadata.publisherDisplayName : null,
        dependencies: e.manifest.extensionDependencies && e.manifest.extensionDependencies.length > 0
      }
    }, t.getGalleryExtensionTelemetryData = function(e) {
      return i({
        id: e.identifier.id,
        name: e.name,
        galleryId: e.identifier.uuid,
        publisherId: e.publisherId,
        publisherName: e.publisher,
        publisherDisplayName: e.publisherDisplayName,
        dependencies: e.properties.dependencies.length > 0
      }, e.telemetryData)
    }, t.BetterMergeDisabledNowKey = "extensions/bettermergedisablednow", t.BetterMergeId = "pprice.better-merge"
  }), define(e[51], t([0, 1, 3]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MANIFEST_CACHE_FOLDER = "CachedExtensions", t.USER_MANIFEST_CACHE_FILE = "user", t.BUILTIN_MANIFEST_CACHE_FILE = "builtin",
      t.IExtensionService = n.createDecorator("extensionService");
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
  }), define(e[34], t([0, 1]), function(e, t) {
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
            a = i[1];
          this.set(o, a)
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
  }), define(e[53], t([0, 1, 21, 6, 27, 78, 39, 3, 34]), function(e, t, n, r, i, o, a, s, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = function() {
      function e(e, t) {
        void 0 === e && (e = new u.ServiceCollection), void 0 === t && (t = !1), this._services = e, this._strict = t, this._services.set(s.IInstantiationService, this)
      }
      return e.prototype.createChild = function(t) {
          var n = this;
          return this._services.forEach(function(e, r) {
            t.has(e) || (r instanceof a.SyncDescriptor && (r = n._createAndCacheServiceInstance(e, r)), t.set(e, r))
          }), new e(t, this._strict)
        }, e.prototype.invokeFunction = function(e) {
          for (var t = this, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
          var o;
          try {
            return o = {
              get: function(e, n) {
                var r = t._getOrCreateServiceInstance(e);
                if (!r && n !== s.optional) throw new Error("[invokeFunction] unkown service '" + e + "'");
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
          return e instanceof a.SyncDescriptor ? this._createInstance(e, t) : this._createInstance(new a.SyncDescriptor(e), t)
        }, e.prototype._createInstance = function(e, t) {
          for (var n = e.staticArguments.concat(t), i = s._util.getServiceDependencies(e.ctor).sort(function(e, t) {
              return e.index - t.index
            }), o = [], a = 0, u = i; a < u.length; a++) {
            var c = u[a],
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
          var d = [e.ctor];
          return d.push.apply(d, n), d.push.apply(d, o), r.create.apply(null, d)
        }, e.prototype._getOrCreateServiceInstance = function(e) {
          var t = this._services.get(e);
          return t instanceof a.SyncDescriptor ? this._createAndCacheServiceInstance(e, t) : t
        },
        e.prototype._createAndCacheServiceInstance = function(e, t) {
          function n() {
            var e = new Error("[createInstance] cyclic dependency between services");
            throw e.message = r.toString(), e
          }
          i.ok(this._services.get(e) instanceof a.SyncDescriptor);
          for (var r = new o.Graph(function(e) {
              return e.id.toString()
            }), u = 0, c = [{
              id: e,
              desc: t
            }]; c.length;) {
            var l = c.pop();
            r.lookupOrInsertNode(l), u++ > 100 && n();
            for (var f = 0, p = s._util.getServiceDependencies(l.desc.ctor); f < p.length; f++) {
              var d = p[f],
                h = this._services.get(d.id);
              if (h || console.warn("[createInstance] " + e + " depends on " + d.id + " which is NOT registered."), h instanceof a.SyncDescriptor) {
                var g = {
                  id: d.id,
                  desc: h
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
                E = this._createInstance(b.data.desc, []);
              this._services.set(b.data.id, E), r.removeNode(b.data)
            }
          }
          return this._services.get(e)
        }, e
    }();
    t.InstantiationService = c
  }), define(e[55], t([0, 1, 3]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    ! function(e) {
      e[e.Default = 1] = "Default", e[e.User = 2] = "User"
    }(t.KeybindingSource || (t.KeybindingSource = {})), t.IKeybindingService = n.createDecorator("keybindingService")
  });
  var o = this && this.__decorate || function(e, t, n, r) {
      var i, o = arguments.length,
        a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
      else
        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
      return o > 3 && a && Object.defineProperty(t, n, a), a
    },
    a = this && this.__param || function(e, t) {
      return function(n, r) {
        t(n, r, e)
      }
    };
  define(e[17], t([0, 1, 12, 3, 14]), function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ILogService = r.createDecorator("logService");
    var s;
    ! function(e) {
      e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Info = 2] = "Info", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical", e[e.Off = 6] = "Off"
    }(s = t.LogLevel || (t.LogLevel = {}));
    var u = function() {
      function e(e) {
        this.level = s.Error, this.setLevel(e.logLevel),
          this.useColors = !i.isWindows
      }
      return e.prototype.setLevel = function(e) {
        this.level = e
      }, e.prototype.getLevel = function() {
        return this.level
      }, e.prototype.trace = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= s.Trace && (this.useColors ? console.log.apply(console, ["[90m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.log.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
      }, e.prototype.debug = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= s.Debug && (this.useColors ? console.log.apply(console, ["[90m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.log.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
      }, e.prototype.info = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= s.Info && (this.useColors ? console.log.apply(console, ["[90m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.log.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
      }, e.prototype.warn = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= s.Warning && (this.useColors ? console.warn.apply(console, ["[93m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.warn.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
      }, e.prototype.error = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= s.Error && (this.useColors ? console.error.apply(console, ["[91m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.error.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
      }, e.prototype.critical = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= s.Critical && (this.useColors ? console.error.apply(console, ["[90m[main " + (new Date).toLocaleTimeString() + "][0m", e].concat(t)) : console.error.apply(console, ["[main " + (new Date).toLocaleTimeString() + "]", e].concat(t)))
      }, e.prototype.dispose = function() {}, e = o([a(0, n.IEnvironmentService)], e)
    }();
    t.ConsoleLogMainService = u;
    var c = function() {
      function e(e) {
        this.level = s.Error, this.setLevel(e.logLevel)
      }
      return e.prototype.setLevel = function(e) {
        this.level = e
      }, e.prototype.getLevel = function() {
        return this.level
      }, e.prototype.trace = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= s.Trace && console.log.apply(console, ["%cTRACE", "color: #888", e].concat(t))
      }, e.prototype.debug = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= s.Debug && console.log.apply(console, ["%cDEBUG", "background: #eee; color: #888", e].concat(t))
      }, e.prototype.info = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= s.Info && console.log.apply(console, ["%c INFO", "color: #33f", e].concat(t))
      }, e.prototype.warn = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= s.Warning && console.log.apply(console, ["%c WARN", "color: #993", e].concat(t))
      }, e.prototype.error = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= s.Error && console.log.apply(console, ["%c  ERR", "color: #f33", e].concat(t))
      }, e.prototype.critical = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        this.level <= s.Critical && console.log.apply(console, ["%cCRITI", "background: #f33; color: white", e].concat(t))
      }, e.prototype.dispose = function() {}, e = o([a(0, n.IEnvironmentService)], e)
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
          return s.Info
        },
        e.prototype.trace = function(e) {
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
        return s.Info
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
  }), define(e[57], t([0, 1, 8, 17, 93]), function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.createSpdLogService = function(e, t, a) {
      try {
        i.setAsyncMode(8192, 2e3);
        var s = a ? n.join(t.logsPath, a) : t.logsPath,
          u = n.join(s, e + ".log"),
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
  }), define(e[29], t([0, 1, 41, 15, 2, 54, 3, 71]), function(e, t, n, r, i, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.CloseAction = new s.Action("close.message", n.localize(0, null), null, !0, function() {
      return i.TPromise.as(!0)
    }), t.LaterAction = new s.Action("later.message", n.localize(1, null), null, !0, function() {
      return i.TPromise.as(!0)
    }), t.CancelAction = new s.Action("cancel.message", n.localize(2, null), null, !0, function() {
      return i.TPromise.as(!0)
    }), t.IMessageService = a.createDecorator("messageService");
    var u = 10;
    t.getConfirmMessage = function(e, t) {
      var i = [e];
      return i.push(""), i.push.apply(i, t.slice(0, u).map(function(e) {
        return r.basename(e.fsPath)
      })), t.length > u && (t.length - u == 1 ? i.push(n.localize(3, null)) : i.push(n.localize(4, null, t.length - u))), i.push(""), i.join("\n")
    }, t.IChoiceService = a.createDecorator("choiceService"), t.Severity = o.default
  }), define(e[60], t([0, 1, 92, 2]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function() {
      function e() {}
      return e.prototype.choose = function(e, t, i, o) {
        var a = this,
          s = new r.TPromise(function(e, r) {
            var o = n.createInterface({
              input: process.stdin,
              output: process.stdout,
              terminal: !0
            });
            o.prompt(), o.write(a.toQuestion(t, i)), o.prompt(), o.once("line", function(t) {
              o.close(), e(a.toOption(t, i))
            }), o.once("SIGINT", function() {
              o.close(), s.cancel()
            })
          });
        return s
      }, e.prototype.toQuestion = function(e, t) {
        return t.reduce(function(e, n, r) {
          return e + n + "(" + r + ")" + (r < t.length - 1 ? " | " : "\n")
        }, e + " ")
      }, e.prototype.toOption = function(e, t) {
        var n = parseInt(e);
        if (!isNaN(n)) return n;
        e = e.toLocaleLowerCase();
        for (var r = 0; r < t.length; r++)
          if (t[r].toLocaleLowerCase() === e) return r;
        return -1
      }, e
    }();
    t.ChoiceCliService = i
  }), define(e[62], t([0, 1, 90, 65, 28, 8, 16, 85, 23, 33, 17, 82, 14]), function(e, t, n, r, i, a, s, u, c, l, f, p, d) {
    "use strict";

    function h(e, t) {
      return d.isWindows ? function(e, t) {
        return "\\\\.\\pipe\\" + n.createHash("md5").update(e).digest("hex") + "-" + c.default.version + "-" + t + "-sock"
      }(e, t) : function(e, t) {
        return E ? a.join(E, c.default.name + "-" + c.default.version + "-" + t + ".sock") : a.join(e, c.default.version + "-" + t + ".sock")
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
        a = Number(o) || (r ? null : n);
      return {
        port: a,
        break: !!a && Boolean(!!t),
        debugId: i
      }
    }

    function y(e, t) {
      if (e) {
        var n = a.resolve(e);
        return a.normalize(e) === n ? n : a.resolve(t.env.VSCODE_CWD || t.cwd(), e)
      }
    }

    function b(e, t) {
      return y(e["user-data-dir"], t) || a.resolve(r.getDefaultUserDataPath(t.platform))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var E = process.env.XDG_RUNTIME_DIR,
      C = function() {
        function t(e, t) {
          if (this._args = e, this._execPath = t, !process.env.VSCODE_LOGS) {
            var n = p.toLocalISOString(new Date).replace(/-|:|\.\d+Z$/g, "");
            process.env.VSCODE_LOGS = a.join(this.userDataPath, "logs", n)
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
              return a.dirname(s.default.parse(e.toUrl("")).fsPath)
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
                return d.isWindows ? n ? a.join(a.dirname(e), "bin", l.default.applicationName + ".cmd") : a.join(t, "scripts", "code-cli.bat") : d.isLinux ? n ? a.join(a.dirname(e), "bin", "" + l.default.applicationName) : a.join(t, "scripts", "code-cli.sh") : n ? a.join(t, "bin", "code") : a.join(t, "scripts", "code-cli.sh")
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
          }), Object.defineProperty(t.prototype, "userDataPath", {
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
              return a.join(this.userDataPath, "User")
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "appSettingsPath", {
            get: function() {
              return a.join(this.appSettingsHome, "settings.json")
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
              return a.join(this.appSettingsHome, "keybindings.json")
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
              return a.join(this.userDataPath, "Backups")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "backupWorkspacesPath", {
            get: function() {
              return a.join(this.backupHome, "workspaces.json")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "workspacesHome", {
            get: function() {
              return a.join(this.userDataPath, "Workspaces")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "installSourcePath", {
            get: function() {
              return a.join(this.userDataPath, "installSource")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "extensionsPath", {
            get: function() {
              return y(this._args["extensions-dir"], process) || process.env.VSCODE_EXTENSIONS || a.join(this.userHome, l.default.dataFolderName, "extensions")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "extensionDevelopmentPath", {
            get: function() {
              return this._args.extensionDevelopmentPath ? a.normalize(this._args.extensionDevelopmentPath) : this._args.extensionDevelopmentPath
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "extensionTestsPath", {
            get: function() {
              return this._args.extensionTestsPath ? a.normalize(this._args.extensionTestsPath) : this._args.extensionTestsPath
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "disableExtensions", {
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
          }),
          Object.defineProperty(t.prototype, "verbose", {
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
          }),
          Object.defineProperty(t.prototype, "status", {
            get: function() {
              return this._args.status
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "mainIPCHandle", {
            get: function() {
              return h(this.userDataPath, "main")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "sharedIPCHandle", {
            get: function() {
              return h(this.userDataPath, "shared")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "nodeCachedDataDir", {
            get: function() {
              return this.isBuilt ? a.join(this.userDataPath, "CachedData", l.default.commit || new Array(41).join("0")) : void 0
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
          }), o([u.memoize], t.prototype, "appRoot", null), o([u.memoize], t.prototype, "cliPath", null), o([u.memoize], t.prototype, "userHome", null),
          o([u.memoize], t.prototype, "userDataPath", null), o([u.memoize], t.prototype, "appSettingsHome", null), o([u.memoize], t.prototype, "appSettingsPath", null), o([u.memoize], t.prototype, "settingsSearchBuildId", null), o([u.memoize], t.prototype, "settingsSearchUrl", null), o([u.memoize], t.prototype, "appKeybindingsPath", null), o([u.memoize], t.prototype, "isExtensionDevelopment", null), o([u.memoize], t.prototype, "backupHome", null), o([u.memoize], t.prototype, "backupWorkspacesPath", null), o([u.memoize], t.prototype, "workspacesHome", null), o([u.memoize], t.prototype, "installSourcePath", null), o([u.memoize], t.prototype, "extensionsPath", null), o([u.memoize], t.prototype, "extensionDevelopmentPath", null), o([u.memoize], t.prototype, "extensionTestsPath", null), o([u.memoize], t.prototype, "debugExtensionHost", null), o([u.memoize], t.prototype, "debugSearch", null), o([u.memoize], t.prototype, "logLevel", null), o([u.memoize], t.prototype, "mainIPCHandle", null), o([u.memoize], t.prototype, "sharedIPCHandle", null), o([u.memoize], t.prototype, "nodeCachedDataDir", null), t
      }();
    t.EnvironmentService = C, t.parseExtensionHostPort = g, t.parseSearchPort = v, t.parseDebugPort = m, t.parseUserDataDir = b
  }), define(e[13], t([0, 1, 6, 27]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function() {
      function e() {
        this.data = {}
      }
      return e.prototype.add = function(e, t) {
        r.ok(n.isString(e)), r.ok(n.isObject(t)), r.ok(!this.data.hasOwnProperty(e), "There is already an extension with this id"), this.data[e] = t
      }, e.prototype.knows = function(e) {
        return this.data.hasOwnProperty(e)
      }, e.prototype.as = function(e) {
        return this.data[e] || null
      }, e
    }();
    t.Registry = new i
  }), define(e[68], t([0, 1, 13, 10]), function(e, t, n, r) {
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
  }), define(e[18], t([0, 1, 50, 10, 13, 6, 9, 68, 4]), function(e, t, n, r, i, o, a, s, u) {
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
      },
      t.editorConfigurationSchemaId = "vscode://schemas/settings/editor";
    var f = i.Registry.as(s.Extensions.JSONContribution),
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
            o.push.apply(o, r.validateAndRegisterProperties(e, n)), r.configurationContributors.push(e),
              r.registerJSONConfiguration(e), r.updateSchemaForOverrideSettingsConfiguration(e)
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
            var a = o[i];
            for (var s in a.defaults) {
              var u = a.defaults[s];
              t.OVERRIDE_PROPERTY_PATTERN.test(s) && "object" == typeof u && (r.properties[s] = {
                type: "object",
                default: u,
                description: n.localize(1, null, s),
                $ref: t.editorConfigurationSchemaId
              })
            }
          }
          return Object.keys(r.properties).length ? r : null
        }, e.prototype.validateAndRegisterProperties = function(e, t, n, r) {
          void 0 === t && (t = !0), void 0 === n && (n = l.WINDOW), void 0 === r && (r = !1), n = void 0 !== e.scope && null !== e.scope ? e.scope : n, r = e.overridable || r;
          var i = [],
            a = e.properties;
          if (a)
            for (var s in a) {
              var u = void 0;
              if (t && (u = c(s))) console.warn(u), delete a[s];
              else {
                var f = a[s],
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
                }(f.type)), r && (f.overridable = !0), void 0 === f.scope && (f.scope = n), !a[s].hasOwnProperty("included") || a[s].included ? (this.configurationProperties[s] = a[s], i.push(s)) : (this.excludedConfigurationProperties[s] = a[s], delete a[s])
              }
            }
          var d = e.allOf;
          if (d)
            for (var h = 0, g = d; h < g.length; h++) {
              var v = g[h];
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
          e.id !== d && (this.update(e), f.registerSchema(t.editorConfigurationSchemaId, this.editorConfigurationSchema))
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
            return a.createRegExp(e, !1).source
          }).join("|")) : h
        }, e
      }(),
      d = "override",
      h = "\\[.*\\]$",
      g = "\\[(${0})\\]$";
    t.OVERRIDE_PROPERTY_PATTERN = new RegExp(h);
    var v = new p;
    i.Registry.add(t.Extensions.Configuration, v), t.validateProperty = c, t.getScopes = function(e) {
      var t = v.getConfigurationProperties();
      return e.map(function(e) {
        return t[e].scope
      })
    }
  }), define(e[11], t([0, 1, 4, 6, 16, 13, 3, 18]), function(e, t, n, r, i, o, a, s) {
    "use strict";

    function u(e, t) {
      var n = Object.create(null);
      for (var r in e) c(n, r, e[r], t);
      return n
    }

    function c(e, t, n, r) {
      for (var i = t.split("."), o = i.pop(), a = e, s = 0; s < i.length; s++) {
        var u = i[s],
          c = a[u];
        switch (typeof c) {
          case "undefined":
            c = a[u] = Object.create(null);
            break;
          case "object":
            break;
          default:
            return void r("Ignoring " + t + " as " + i.slice(0, s + 1).join(".") + " is " + JSON.stringify(c))
        }
        a = c
      }
      "object" == typeof a ? a[o] = n : r("Ignoring " + t + " as " + i.join(".") + " is " + JSON.stringify(a))
    }

    function l(e, t) {
      var n = t.shift();
      if (0 !== t.length) {
        if (-1 !== Object.keys(e).indexOf(n)) {
          var r = e[n];
          "object" != typeof r || Array.isArray(r) || (l(r, t), 0 === Object.keys(r).length && delete e[n])
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

    function d(e) {
      return e.substring(1, e.length - 1)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IConfigurationService = a.createDecorator("configurationService"), t.isConfigurationOverrides = function(e) {
      return e && "object" == typeof e && (!e.overrideIdentifier || "string" == typeof e.overrideIdentifier) && (!e.resource || e.resource instanceof i.default)
    };
    ! function(e) {
      e[e.USER = 1] = "USER", e[e.WORKSPACE = 2] = "WORKSPACE", e[e.WORKSPACE_FOLDER = 3] = "WORKSPACE_FOLDER", e[e.DEFAULT = 4] = "DEFAULT", e[e.MEMORY = 5] = "MEMORY"
    }(t.ConfigurationTarget || (t.ConfigurationTarget = {})), t.compare = function(e, t) {
        for (var r = t.keys.filter(function(t) {
            return -1 === e.keys.indexOf(t)
          }), i = e.keys.filter(function(e) {
            return -1 === t.keys.indexOf(e)
          }), o = [], a = 0, s = e.keys; a < s.length; a++) {
          var u = s[a],
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
        for (var n = [], r = o.Registry.as(s.Extensions.Configuration).getConfigurationProperties(), i = 0, a = Object.keys(e); i < a.length; i++) {
          var c = a[i];
          if (s.OVERRIDE_PROPERTY_PATTERN.test(c)) {
            var l = {};
            for (var f in e[c]) r[f] && r[f].overridable && (l[f] = e[c][f]);
            n.push({
              identifiers: [d(c).trim()],
              contents: u(l, t)
            })
          }
        }
        return n
      }, t.toValuesTree = u, t.addToValueTree = c,
      t.removeFromValueTree = function(e, t) {
        l(e, t.split("."))
      }, t.getConfigurationValue = f, t.merge = p, t.getConfigurationKeys = function() {
        var e = o.Registry.as(s.Extensions.Configuration).getConfigurationProperties();
        return Object.keys(e)
      }, t.getDefaultValues = function() {
        var e = Object.create(null),
          t = o.Registry.as(s.Extensions.Configuration).getConfigurationProperties();
        for (var n in t) c(e, n, t[n].default, function(e) {
          return console.error("Conflict in default settings: " + e)
        });
        return e
      }, t.overrideIdentifierFromKey = d, t.keyFromOverrideIdentifier = function(e) {
        return "[" + e + "]"
      }
  });
  var s = this && this.__extends || function() {
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
  define(e[37], t([0, 1, 30, 69, 24, 6, 4, 16, 18, 11]), function(e, t, n, r, i, o, a, u, c, l) {
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
        for (var r = {}, o = 0, s = i.distinct(Object.keys(this.contents).concat(Object.keys(n))); o < s.length; o++) {
          var u = s[o],
            c = this.contents[u],
            l = n[u];
          l && ("object" == typeof c && "object" == typeof l ? (c = a.deepClone(c),
            this.mergeContents(c, l)) : c = l), r[u] = c
        }
        return new e(r)
      }, e.prototype.merge = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        for (var r = a.deepClone(this.contents), o = a.deepClone(this.overrides), s = this.keys.slice(), u = 0, c = t; u < c.length; u++) {
          var l = c[u];
          this.mergeContents(r, l.contents);
          for (var f = function(e) {
              var t = o.filter(function(t) {
                return i.equals(t.identifiers, e.identifiers)
              })[0];
              t ? p.mergeContents(t.contents, e.contents) : o.push(e)
            }, p = this, d = 0, h = l.overrides; d < h.length; d++) {
            f(h[d])
          }
          for (var g = 0, v = l.keys; g < v.length; g++) {
            var m = v[g]; - 1 === s.indexOf(m) && s.push(m)
          }
        }
        return new e(r, s, o)
      }, e.prototype.freeze = function() {
        return this.isFrozen = !0, this
      }, e.prototype.mergeContents = function(e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
          var i = r[n];
          i in e && o.isObject(e[i]) && o.isObject(t[i]) ? this.mergeContents(e[i], t[i]) : e[i] = a.deepClone(t[i])
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
          var a = o[i];
          c.OVERRIDE_PROPERTY_PATTERN.test(a) && r.push({
            identifiers: [l.overrideIdentifierFromKey(a).trim()],
            contents: l.toValuesTree(t[a], function(e) {
              return console.error("Conflict in default settings file: " + e)
            })
          })
        }
        return e.call(this, t, n, r) || this
      }
      return s(t, e), t
    }(f);
    t.DefaultConfigurationModel = p;
    var d = function() {
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
        var r = {},
          i = null,
          o = [],
          a = [],
          s = [],
          u = {
            onObjectBegin: function() {
              var e = {};
              t(e), a.push(o), o = e, i = null
            },
            onObjectProperty: function(e) {
              i = e
            },
            onObjectEnd: function() {
              o = a.pop()
            },
            onArrayBegin: function() {
              var e = [];
              t(e), a.push(o), o = e, i = null
            },
            onArrayEnd: function() {
              o = a.pop()
            },
            onLiteralValue: t,
            onError: function(e) {
              s.push({
                error: e
              })
            }
          };
        if (e) try {
          n.visit(e, u), r = o[0] || {}
        } catch (e) {
          console.error("Error while parsing settings file " + this._name + ": " + e), this._parseErrors = [e]
        }
        return r
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
    t.ConfigurationModelParser = d;
    var h = function() {
      function e(e, t, n, i, o, a) {
        void 0 === n && (n = new f), void 0 === i && (i = new r.StrictResourceMap), void 0 === o && (o = new f), void 0 === a && (a = new r.StrictResourceMap), this._defaultConfiguration = e, this._userConfiguration = t, this._workspaceConfiguration = n, this._folderConfigurations = i, this._memoryConfiguration = o, this._memoryConfigurationByResource = a, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations = new r.StrictResourceMap
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
        }, e.prototype.updateDefaultConfiguration = function(e) {
          this._defaultConfiguration = e, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear()
        }, e.prototype.updateUserConfiguration = function(e) {
          this._userConfiguration = e, this._workspaceConsolidatedConfiguration = null,
            this._foldersConsolidatedConfigurations.clear()
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
        }),
        Object.defineProperty(e.prototype, "memory", {
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
                a = r.keys;
              return t[n.toString()] = {
                contents: i,
                overrides: o,
                keys: a
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
            var a = o[i];
            r(this.folders.get(a).keys)
          }
          return n
        }, e.parse = function(t) {
          return new e(e.parseConfigurationModel(t.defaults), e.parseConfigurationModel(t.user), e.parseConfigurationModel(t.workspace), Object.keys(t.folders).reduce(function(n, r) {
            return n.set(u.default.parse(r), e.parseConfigurationModel(t.folders[r])), n
          }, new r.StrictResourceMap))
        }, e.parseConfigurationModel = function(e) {
          return new f(e.contents, e.keys, e.overrides).freeze()
        }, e
    }();
    t.Configuration = h;
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
        void 0 === t && (t = new f), void 0 === n && (n = new r.StrictResourceMap);
        var i = e.call(this) || this;
        return i._changedConfiguration = t, i._changedConfigurationByResource = n, i
      }
      return s(t, e), Object.defineProperty(t.prototype, "changedConfiguration", {
        get: function() {
          return this._changedConfiguration
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "changedConfigurationByResource", {
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
              a = this.getOrSetChangedConfigurationForResource(o);
            a = a.merge(e._changedConfigurationByResource.get(o)), this._changedConfigurationByResource.set(o, a)
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
          }), i.distinct(e)
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
          var a = o[i];
          if (this.doesConfigurationContains(a, e)) return !0
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
  }), define(e[72], t([0, 1, 19, 21, 37, 66, 10, 2]), function(e, t, n, r, i, o, a, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = function(e) {
      function t(t) {
        var n = e.call(this) || this;
        return n._onDidChangeConfiguration = n._register(new a.Emitter), n.onDidChangeConfiguration = n._onDidChangeConfiguration.event, n.userConfigModelWatcher = new o.ConfigWatcher(t, {
          changeBufferDelay: 300,
          onError: function(e) {
            return r.onUnexpectedError(e)
          },
          defaultConfig: new i.ConfigurationModelParser(t),
          parse: function(e, n) {
            var r = new i.ConfigurationModelParser(t);
            return r.parse(e), r.errors.slice(), r
          }
        }), n._register(n.userConfigModelWatcher), n._register(n.userConfigModelWatcher.onDidUpdateConfiguration(function() {
          return n._onDidChangeConfiguration.fire(n.configurationModel)
        })), n
      }
      return s(t, e), Object.defineProperty(t.prototype, "configurationModel", {
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
    }(n.Disposable);
    t.UserConfiguration = c
  }), define(e[73], t([0, 1, 13, 18, 19, 11, 37, 10, 12, 2, 4, 72]), function(e, t, n, r, i, u, c, l, f, p, d, h) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var g = function(e) {
      function t(t) {
        var i = e.call(this) || this;
        return i._onDidChangeConfiguration = i._register(new l.Emitter),
          i.onDidChangeConfiguration = i._onDidChangeConfiguration.event, i.userConfiguration = i._register(new h.UserConfiguration(t.appSettingsPath)), i.reset(), i._register(i.userConfiguration.onDidChangeConfiguration(function() {
            return i.onDidChangeUserConfiguration()
          })), i._register(n.Registry.as(r.Extensions.Configuration).onDidRegisterConfiguration(function(e) {
            return i.onDidRegisterConfiguration(e)
          })), i
      }
      return s(t, e), Object.defineProperty(t.prototype, "configuration", {
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
          var a = this._configuration;
          this.reset(), (t = t.filter(function(t) {
            return !d.equals(a.getValue(t, {}, null), e._configuration.getValue(t, {}, null))
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
      }, t = o([a(0, f.IEnvironmentService)], t)
    }(i.Disposable);
    t.ConfigurationService = g
  }), define(e[31], t([0, 1, 67, 3, 18, 13]), function(e, t, n, r, i, o) {
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
  }), define(e[75], t([0, 1, 3]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IStateService = n.createDecorator("stateService")
  }), define(e[76], t([0, 1, 8, 89, 12, 26, 6, 17]), function(e, t, n, r, i, s, u, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = function() {
      function e(e, t) {
        this.dbPath = e, this.onError = t, this.database = null
      }
      return e.prototype.ensureLoaded = function() {
        this.database || (this.database = this.loadSync())
      }, e.prototype.getItem = function(e, t) {
        this.ensureLoaded();
        var n = this.database[e];
        return u.isUndefinedOrNull(n) ? t : n
      }, e.prototype.setItem = function(e, t) {
        if (this.ensureLoaded(), u.isUndefinedOrNull(t)) return this.removeItem(e);
        ("string" != typeof t && "number" != typeof t && "boolean" != typeof t || this.database[e] !== t) && (this.database[e] = t, this.saveSync())
      }, e.prototype.removeItem = function(e) {
        this.ensureLoaded(), u.isUndefined(this.database[e]) || (this.database[e] = void 0, this.saveSync())
      }, e.prototype.loadSync = function() {
        try {
          return JSON.parse(r.readFileSync(this.dbPath).toString())
        } catch (e) {
          return e && "ENOENT" !== e.code && this.onError(e), {}
        }
      }, e.prototype.saveSync = function() {
        try {
          s.writeFileAndFlushSync(this.dbPath, JSON.stringify(this.database, null, 4))
        } catch (e) {
          this.onError(e)
        }
      }, e
    }();
    t.FileStorage = l;
    var f = function() {
      function e(e, t) {
        this.fileStorage = new l(n.join(e.userDataPath, "storage.json"), function(e) {
          return t.error(e)
        })
      }
      return e.prototype.getItem = function(e, t) {
        return this.fileStorage.getItem(e, t)
      }, e.prototype.setItem = function(e, t) {
        this.fileStorage.setItem(e, t)
      }, e.prototype.removeItem = function(e) {
        this.fileStorage.removeItem(e)
      }, e = o([a(0, i.IEnvironmentService), a(1, c.ILogService)], e)
    }();
    t.StateService = f
  }), define(e[32], t([0, 1, 3]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ITelemetryService = n.createDecorator("telemetryService")
  }), define(e[79], t([0, 1, 42, 9, 3, 11, 18, 2, 19, 4, 13]), function(e, t, n, r, i, s, u, c, l, f, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = function() {
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
        var e = this._configurationService.getValue(h);
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
      }, e.IDLE_START_EVENT_NAME = "UserIdleStart", e.IDLE_STOP_EVENT_NAME = "UserIdleStop", e = o([a(1, i.optional(s.IConfigurationService))], e)
    }();
    t.TelemetryService = d;
    var h = "telemetry";
    p.Registry.as(u.Extensions.Configuration).registerConfiguration({
      id: h,
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
  }), define(e[80], t([0, 1, 2, 40, 15, 11, 55]), function(e, t, n, r, i, o, a) {
    "use strict";

    function s(e, t) {
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
    t.configurationTelemetry = s, t.keybindingsTelemetry = function(e, t) {
      return t.onDidUpdateKeybindings(function(t) {
        t.source === a.KeybindingSource.User && t.keybindings && e.publicLog("updateKeybindings", {
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
  }), define(e[81], t([0, 1, 87, 6, 4, 2]), function(e, t, n, r, i, o) {
    "use strict";

    function a(e) {
      !1 === s && (n.setup("2588e01f-f6c9-4cd6-a348-143741f8d702").setAutoCollectConsole(!1).setAutoCollectExceptions(!1).setAutoCollectPerformance(!1).setAutoCollectRequests(!1), s = !0);
      var t = n.getClient(e);
      return t.channel.setOfflineMode(!0), t.context.tags[t.context.keys.deviceMachineName] = "", 0 === e.indexOf("AIF-") && (t.config.endpointUrl = "https://vortex.data.microsoft.com/collect/v1"), t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = !1,
      u = function() {
        function e(e, t, n) {
          this._eventPrefix = e, this._defaultData = t, this._defaultData || (this._defaultData = Object.create(null)),
            "string" == typeof n ? this._aiClient = a(n) : "function" == typeof n && (this._aiClient = n())
        }
        return e._getData = function(t) {
          var n = Object.create(null),
            r = Object.create(null),
            i = Object.create(null);
          e._flaten(t, i);
          for (var o in i) {
            var a = i[o = o.length > 150 ? o.substr(o.length - 149) : o];
            "number" == typeof a ? r[o] = a : "boolean" == typeof a ? r[o] = a ? 1 : 0 : "string" == typeof a ? n[o] = a.substring(0, 1023) : void 0 !== a && null !== a && (n[o] = a)
          }
          return {
            properties: n,
            measurements: r
          }
        }, e._flaten = function(t, n, o, a) {
          if (void 0 === o && (o = 0), t)
            for (var s = 0, u = Object.getOwnPropertyNames(t); s < u.length; s++) {
              var c = u[s],
                l = t[c],
                f = a ? a + c : c;
              Array.isArray(l) ? n[f] = i.safeStringify(l) : l instanceof Date ? n[f] = l.toISOString() : r.isObject(l) ? o < 2 ? e._flaten(l, n, o + 1, f + ".") : n[f] = i.safeStringify(l) : n[f] = l
            }
        }, e.prototype.log = function(t, n) {
          if (this._aiClient) {
            n = i.mixin(n, this._defaultData);
            var r = e._getData(n),
              o = r.properties,
              a = r.measurements;
            this._aiClient.trackEvent(this._eventPrefix + "/" + t, o, a)
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
  }), define(e[83], t([0, 1, 14, 28, 84, 20]), function(e, t, n, r, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.resolveCommonProperties = function(e, t, a, s) {
      var u = Object.create(null);
      u["common.machineId"] = a, u.sessionID = i.generateUuid() + Date.now(), u.commitHash = e, u.version = t, u["common.osVersion"] = r.release(), u["common.platform"] = n.Platform[n.platform], u["common.nodePlatform"] = process.platform, u["common.nodeArch"] = process.arch;
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
      }), o.readFile(s, "utf8").then(function(e) {
        return u["common.source"] = e.slice(0, 30), u
      }, function(e) {
        return u
      })
    }
  }), define(e[86], t([0, 1, 52, 8, 36, 25, 20, 2, 88]), function(e, t, n, r, i, o, a, s, u) {
    "use strict";

    function c(e, t, n) {
      return new s.TPromise(function(u, c) {
        var l = new o.SimpleThrottler,
          f = s.TPromise.as(null);
        e.once("error", c), e.once("close", function() {
          return f.then(u, c)
        }), e.on("entry", function(u) {
          if (n.sourcePathRegex.test(u.fileName)) {
            var c = u.fileName.replace(n.sourcePathRegex, "");
            if (/\/$/.test(c)) {
              var p = r.join(t, c);
              f = a.mkdirp(p)
            } else {
              var d = o.ninvoke(e, e.openReadStream, u),
                h = function(e) {
                  var t = e.externalFileAttributes >> 16 || 33188;
                  return [448, 56, 7].map(function(e) {
                    return t & e
                  }).reduce(function(e, t) {
                    return e + t
                  }, 61440 & t)
                }(u);
              f = l.queue(function() {
                return d.then(function(e) {
                  return function(e, t, n, o, u) {
                    var c = r.dirname(t),
                      l = r.join(o, c),
                      f = r.join(o, t);
                    return a.mkdirp(l).then(function() {
                      return new s.TPromise(function(t, r) {
                        var o = i.createWriteStream(f, {
                          mode: n
                        });
                        o.once("finish", function() {
                          return t(null)
                        }), o.once("error", r), e.once("error", r), e.pipe(o)
                      })
                    })
                  }(e, c, h, t)
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
          return new s.TPromise(function(r, i) {
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
        return new s.TPromise(function(t, n) {
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
        return a.rimraf(t).then(function() {
          return e
        })
      })), i.then(function(e) {
        return c(e, t, {
          sourcePathRegex: r
        })
      })
    }, t.buffer = l
  });
  r = this && this.__generator || function(e, t) {
    function n(n) {
      return function(a) {
        return function(n) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; s;) try {
            if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
            switch (i = 0, o && (n = [0, o.value]), n[0]) {
              case 0:
              case 1:
                o = n;
                break;
              case 4:
                return s.label++, {
                  value: n[1],
                  done: !1
                };
              case 5:
                s.label++, i = n[1], n = [0];
                continue;
              case 7:
                n = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                  s = 0;
                  continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                  s.label = n[1];
                  break
                }
                if (6 === n[0] && s.label < o[1]) {
                  s.label = o[1], o = n;
                  break
                }
                if (o && s.label < o[2]) {
                  s.label = o[2], s.ops.push(n);
                  break
                }
                o[2] && s.ops.pop(), s.trys.pop();
                continue
            }
            n = t.call(e, s)
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
        }([n, a])
      }
    }
    var r, i, o, a, s = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return a = {
      next: n(0),
      throw: n(1),
      return: n(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
      return this
    }), a
  };
  define(e[77], t([0, 1, 47, 8, 20, 21, 4, 19, 24, 86, 2, 22, 35, 43, 12, 25, 10, 45, 16, 29, 23, 14, 51, 17]), function(e, t, i, u, c, l, f, p, d, h, g, v, m, y, b, E, C, S, x, _, w, P, O, T) {
    "use strict";

    function I(e) {
      return new g.TPromise(function(t, n) {
        try {
          var r = JSON.parse(e),
            o = r.__metadata || null;
          delete r.__metadata, t({
            manifest: r,
            metadata: o
          })
        } catch (e) {
          n(new Error(i.localize(0, null)))
        }
      })
    }

    function k(e) {
      return h.buffer(e, "extension/package.json").then(function(e) {
        return I(e.toString("utf8"))
      }).then(function(e) {
        var t = e.manifest;
        return g.TPromise.as(t)
      })
    }

    function D(e) {
      var t = [c.readFile(u.join(e, "package.json"), "utf8").then(function(e) {
        return I(e)
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
      return A(e.identifier.id, t)
    }

    function L(e) {
      return A(m.getGalleryExtensionId(e.publisher, e.name), e.version)
    }

    function A(e, t) {
      return e + "-" + t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var M = u.normalize(u.join(x.default.parse(e.toUrl("")).fsPath, "..", "extensions")),
      R = function(e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return r.code = n, r
        }
        return s(t, e), t
      }(Error);
    t.ExtensionManagementError = R, t.validateLocalExtension = k;
    var N = function() {
      function e(e, t, n, r) {
        this.choiceService = t, this.galleryService = n, this.logService = r, this.disposables = [], this._onInstallExtension = new C.Emitter, this.onInstallExtension = this._onInstallExtension.event, this._onDidInstallExtension = new C.Emitter, this.onDidInstallExtension = this._onDidInstallExtension.event, this._onUninstallExtension = new C.Emitter, this.onUninstallExtension = this._onUninstallExtension.event, this._onDidUninstallExtension = new C.Emitter, this.onDidUninstallExtension = this._onDidUninstallExtension.event, this.extensionsPath = e.extensionsPath, this.uninstalledPath = u.join(this.extensionsPath, ".obsolete"), this.userDataPath = e.userDataPath, this.uninstalledFileLimiter = new E.Limiter(1)
      }
      return e.prototype.deleteExtensionsManifestCache = function() {
        var e = u.join(this.userDataPath, O.MANIFEST_CACHE_FOLDER),
          t = u.join(e, O.USER_MANIFEST_CACHE_FILE);
        c.del(t).done(function() {}, function() {})
      }, e.prototype.install = function(e) {
        var t = this;
        return this.deleteExtensionsManifestCache(), e = u.resolve(e), k(e).then(function(n) {
          var r = {
            id: L(n)
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
            return g.TPromise.wrapError(new Error(i.localize(1, null, n.displayName || n.name)))
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
          var o = r.filter(function(t) {
            return m.areSameExtensions(n, {
              id: m.getGalleryExtensionIdFromLocal(t)
            }) && S.gt(t.manifest.version, e.version)
          })[0];
          if (o) {
            var a = i.localize(2, null),
              s = [i.localize(3, null), i.localize(4, null)];
            return t.choiceService.choose(_.Severity.Info, a, s, 1, !0).then(function(e) {
              return 0 === e ? t.uninstall(o, !0).then(function() {
                return !0
              }) : g.TPromise.wrapError(l.canceled())
            })
          }
          return !0
        })
      }, e.prototype.installFromZipPath = function(e, t, n, r) {
        var o = this;
        return this.installExtension({
          zipPath: t,
          id: e.id,
          metadata: n
        }).then(function(e) {
          return o.galleryService.isEnabled() && e.manifest.extensionDependencies && e.manifest.extensionDependencies.length ? o.getDependenciesToInstall(e.manifest.extensionDependencies).then(function(e) {
            return o.downloadAndInstallExtensions(n ? e.filter(function(e) {
              return e.identifier.uuid !== n.id
            }) : e)
          }).then(function() {
            return e
          }, function(t) {
            return o.uninstallExtension(e), g.TPromise.wrapError(new Error(i.localize(5, null, t instanceof Error ? t.message : t)))
          }) : e
        }).then(function(n) {
          return o._onDidInstallExtension.fire({
            identifier: e,
            zipPath: t,
            local: n
          })
        }, function(n) {
          return o._onDidInstallExtension.fire({
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
            return g.TPromise.wrapError(new R(t.joinErrors(e).message, "gallery"))
          }) : g.TPromise.wrapError(new R(i.localize(6, null, e.identifier.id, w.default.version), "incompatible"))
        }, function(e) {
          return g.TPromise.wrapError(new R(t.joinErrors(e).message, "gallery"))
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
        return this.galleryService.loadCompatibleVersion(e).then(function(o) {
          return o ? (t.logService.trace("Started downloading extension:", e.name), t.galleryService.download(e).then(function(i) {
            return t.logService.info("Downloaded extension:", e.name), k(i).then(function() {
              return {
                zipPath: i,
                id: n,
                metadata: r
              }
            }, function(e) {
              return g.TPromise.wrapError(new R(t.joinErrors(e).message, "validating"))
            })
          }, function(e) {
            return g.TPromise.wrapError(new R(t.joinErrors(e).message, "downloading"))
          })) : g.TPromise.wrapError(new R(i.localize(7, null, e.identifier.id, w.default.version), "incompatible"))
        }, function(e) {
          return g.TPromise.wrapError(new R(t.joinErrors(e).message, "gallery"))
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
            a = t[i],
            s = n[i];
          if (a) r.logService.info("Extensions installed successfully:", e.identifier.id), r._onDidInstallExtension.fire({
            identifier: o,
            gallery: e,
            local: a
          });
          else {
            var u = s && s.code ? s.code : "unknown";
            r.logService.error("Failed to install extension:", e.identifier.id, s ? s.message : u), r._onDidInstallExtension.fire({
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
          return P.isMacintosh ? g.TPromise.wrapError(new R(i.localize(8, null), "unsetUninstalled")) : g.TPromise.wrapError(new R(i.localize(9, null), "unsetUninstalled"))
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
          return t.logService.trace("Started extracting the extension from " + n + " to " + o), h.extract(n, o, {
            sourcePath: "extension",
            overwrite: !0
          }).then(function() {
            return t.logService.info("Extracted extension to " + o + ":", r), g.TPromise.join([D(o), c.readdir(o)]).then(null, function(e) {
              return g.TPromise.wrapError(new R(t.joinErrors(e).message, "local"))
            })
          }, function(e) {
            return g.TPromise.wrapError(new R(e.message, "extracting"))
          }).then(function(e) {
            var n = e[0].manifest,
              a = e[1],
              s = a.filter(function(e) {
                return /^readme(\.txt|\.md|)$/i.test(e)
              })[0],
              c = s ? x.default.file(u.join(o, s)).toString() : null,
              l = a.filter(function(e) {
                return /^changelog(\.txt|\.md|)$/i.test(e)
              })[0],
              f = l ? x.default.file(u.join(o, l)).toString() : null,
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
              return g.TPromise.wrapError(new R(t.joinErrors(e).message, "local"))
            })
          })
        }, function(e) {
          return g.TPromise.wrapError(new R(t.joinErrors(e).message, "deleting"))
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
          return I(e)
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
          var o = d.distinct(this.getDependenciesToUninstallRecursively(e, t, [])).filter(function(t) {
            return t !== e
          });
          return this.uninstallWithDependencies(e, o, t)
        }
        var a = i.localize(10, null, e.manifest.displayName || e.manifest.name),
          s = [i.localize(11, null), i.localize(12, null), i.localize(13, null)];
        return this.logService.info("Requesting for confirmation to uninstall extension with dependencies", e.identifier.id), this.choiceService.choose(_.Severity.Info, a, s, 2, !0).then(function(n) {
          if (0 === n) return r.uninstallWithDependencies(e, [], t);
          if (1 === n) {
            var i = d.distinct(r.getDependenciesToUninstallRecursively(e, t, [])).filter(function(t) {
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
        var o = i.localize(14, null, e.manifest.displayName || e.manifest.name),
          a = [i.localize(15, null), i.localize(16, null)];
        return this.logService.info("Requesting for confirmation to uninstall extension", e.identifier.id),
          this.choiceService.choose(_.Severity.Info, o, a, 1, !0).then(function(n) {
            return 0 === n ? r.uninstallWithDependencies(e, [], t) : (r.logService.info("Cancelled uninstalling extension:", e.identifier.id), g.TPromise.wrapError(l.canceled()))
          }, function(e) {
            return g.TPromise.wrapError(l.canceled())
          })
      }, e.prototype.uninstallWithDependencies = function(e, t, n) {
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
        return 1 === t.length ? i.localize(17, null, e.manifest.displayName || e.manifest.name, t[0].manifest.displayName || t[0].manifest.name) : 2 === t.length ? i.localize(18, null, e.manifest.displayName || e.manifest.name, t[0].manifest.displayName || t[0].manifest.name, t[1].manifest.displayName || t[1].manifest.name) : i.localize(19, null, e.manifest.displayName || e.manifest.name, t[0].manifest.displayName || t[0].manifest.name, t[1].manifest.displayName || t[1].manifest.name)
      }, e.prototype.getDependenciesToUninstallRecursively = function(e, t, n) {
        if (-1 !== n.indexOf(e)) return [];
        if (n.push(e), !e.manifest.extensionDependencies || 0 === e.manifest.extensionDependencies.length) return [];
        for (var r = t.filter(function(t) {
            return -1 !== e.manifest.extensionDependencies.indexOf(m.getGalleryExtensionIdFromLocal(t))
          }), i = [], o = 0, a = r; o < a.length; o++) {
          var s = a[o];
          i.push.apply(i, this.getDependenciesToUninstallRecursively(s, t, n))
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
          return e ? null : g.TPromise.wrapError(new Error(i.localize(20, null)))
        }).then(function() {
          t.logService.info("Uninstalling extension:", e.identifier.id),
            t._onUninstallExtension.fire(e.identifier)
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
        return n(this, void 0, g.TPromise, function() {
          return r(this, function(n) {
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
          return new R(t.joinErrors(e).message, "scanningSystem")
        })), null !== e && e !== v.LocalExtensionType.User || n.push(this.scanUserExtensions(!0).then(null, function(e) {
          return new R(t.joinErrors(e).message, "scanningUser")
        })), g.TPromise.join(n).then(d.flatten, function(e) {
          return g.TPromise.wrapError(t.joinErrors(e))
        })
      }, e.prototype.scanSystemExtensions = function() {
        var e = this;
        return this.logService.trace("Started scanning system extensions"), this.scanExtensions(M, v.LocalExtensionType.System).then(function(t) {
          return e.logService.info("Scanned system extensions:", t.length), t
        })
      }, e.prototype.scanUserExtensions = function(e) {
        var t = this;
        return this.logService.trace("Started scanning user extensions"), this.scanExtensions(this.extensionsPath, v.LocalExtensionType.User).then(function(n) {
          if (t.logService.info("Scanned user extensions:", n.length),
            e) {
            return m.groupByExtension(n, function(e) {
              return {
                id: m.getGalleryExtensionIdFromLocal(e),
                uuid: e.identifier.uuid
              }
            }).map(function(e) {
              return e.sort(function(e, t) {
                return S.rcompare(e.manifest.version, t.manifest.version)
              })[0]
            })
          }
          return n
        })
      }, e.prototype.scanExtensions = function(e, t) {
        var n = new E.Limiter(10);
        return this.scanExtensionFolders(e).then(function(r) {
          return g.TPromise.join(r.map(function(r) {
            var i = u.join(e, r);
            return n.queue(function() {
              return c.readdir(i).then(function(e) {
                var n = e.filter(function(e) {
                    return /^readme(\.txt|\.md|)$/i.test(e)
                  })[0],
                  o = n ? x.default.file(u.join(i, n)).toString() : null,
                  a = e.filter(function(e) {
                    return /^changelog(\.txt|\.md|)$/i.test(e)
                  })[0],
                  s = a ? x.default.file(u.join(i, a)).toString() : null;
                return D(i).then(function(e) {
                  var n = e.manifest,
                    a = e.metadata;
                  n.extensionDependencies && (n.extensionDependencies = n.extensionDependencies.map(function(e) {
                    return m.adoptToGalleryExtensionId(e)
                  }));
                  var u = {
                    id: r,
                    uuid: a ? a.id : null
                  };
                  return {
                    type: t,
                    identifier: u,
                    manifest: n,
                    metadata: a,
                    path: i,
                    readmeUrl: o,
                    changelogUrl: s
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
              i = d.flatten(r.map(function(e) {
                return e.sort(function(e, t) {
                  return S.rcompare(e.manifest.version, t.manifest.version)
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
      }, e = o([a(0, b.IEnvironmentService), a(1, _.IChoiceService), a(2, v.IExtensionGalleryService), a(3, T.ILogService)], e)
    }();
    t.ExtensionManagementService = N, t.getLocalExtensionIdFromGallery = j, t.getLocalExtensionIdFromManifest = L
  });
  r = this && this.__generator || function(e, t) {
    function n(n) {
      return function(a) {
        return function(n) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; s;) try {
            if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
            switch (i = 0, o && (n = [0, o.value]), n[0]) {
              case 0:
              case 1:
                o = n;
                break;
              case 4:
                return s.label++, {
                  value: n[1],
                  done: !1
                };
              case 5:
                s.label++, i = n[1], n = [0];
                continue;
              case 7:
                n = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                  s = 0;
                  continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                  s.label = n[1];
                  break
                }
                if (6 === n[0] && s.label < o[1]) {
                  s.label = o[1], o = n;
                  break
                }
                if (o && s.label < o[2]) {
                  s.label = o[2], s.ops.push(n);
                  break
                }
                o[2] && s.ops.pop(), s.trys.pop();
                continue
            }
            n = t.call(e, s)
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
        }([n, a])
      }
    }
    var r, i, o, a, s = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return a = {
      next: n(0),
      throw: n(1),
      return: n(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
      return this
    }), a
  };
  define(e[38], t([0, 1, 2, 6, 59, 36, 4, 91]), function(e, t, i, o, a, s, u, c) {
    "use strict";

    function l(t) {
      var s;
      return (t.getRawRequest ? i.TPromise.as(t.getRawRequest(t)) : function(t) {
        return n(this, void 0, i.TPromise, function() {
          var n, i, o;
          return r(this, function(r) {
            switch (r.label) {
              case 0:
                return "https:" !== (n = a.parse(t.url)).protocol ? [3, 2] : [4, new Promise(function(t, n) {
                  e(["https"], t, n)
                })];
              case 1:
                return o = r.sent(), [3, 4];
              case 2:
                return [4, new Promise(function(t, n) {
                  e(["http"], t, n)
                })];
              case 3:
                o = r.sent(), r.label = 4;
              case 4:
                return i = o, [2, i.request]
            }
          })
        })
      }(t)).then(function(e) {
        return new i.TPromise(function(n, r) {
          var i = a.parse(t.url),
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
          if (t.user && t.password && (f.auth = t.user + ":" + t.password), (s = e(f, function(e) {
              var i = o.isNumber(t.followRedirects) ? t.followRedirects : 3;
              if (e.statusCode >= 300 && e.statusCode < 400 && i > 0 && e.headers.location) l(u.assign({}, t, {
                url: e.headers.location,
                followRedirects: i - 1
              })).done(n, r);
              else {
                var a = e;
                "gzip" === e.headers["content-encoding"] && (a = a.pipe(c.createGunzip())), n({
                  res: e,
                  stream: a
                })
              }
            })).on("error", r), t.timeout && s.setTimeout(t.timeout), t.data) {
            if ("string" != typeof t.data) return void t.data.pipe(s);
            s.write(t.data)
          }
          s.end()
        }, function() {
          return s && s.abort()
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
      return new i.TPromise(function(n, r) {
        var i = s.createWriteStream(e);
        i.once("finish", function() {
          return n(null)
        }), t.stream.once("error", r), t.stream.pipe(i)
      })
    }, t.asText = function(e) {
      return new i.TPromise(function(t, n) {
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
      return new i.TPromise(function(t, n) {
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
  }), define(e[61], t([0, 1, 48, 28, 8, 2, 24, 21, 22, 35, 4, 31, 32, 38, 23, 33, 44, 12, 20, 26, 84]), function(e, t, n, r, s, u, c, l, f, p, d, h, g, v, m, y, b, E, C, S, x) {
    "use strict";

    function _() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return String(e.reduce(function(e, t) {
        return e | t
      }, 0))
    }

    function w(e, t) {
      var n = (e || []).filter(function(e) {
        return e.statisticName === t
      })[0];
      return n ? n.value : 0
    }

    function P(t, n) {
      var r = t.files.filter(function(e) {
        return e.assetType === n
      })[0];
      if (n === L.Repository && t.properties) {
        var i = t.properties.filter(function(e) {
            return e.key === n
          }),
          o = new RegExp("((git|ssh|http(s)?)|(git@[w.]+))(:(//)?)([w.@:/-~]+)(.git)(/)?");
        return (a = i.filter(function(e) {
          return o.test(e.value)
        })[0]) ? {
          uri: a.value,
          fallbackUri: a.value
        } : {
          uri: null,
          fallbackUri: null
        }
      }
      if (!r) {
        if (n === L.Icon) {
          var a = e.toUrl("./media/defaultIcon.png");
          return {
            uri: a,
            fallbackUri: a
          }
        }
        return null
      }
      return n === L.VSIX ? {
        uri: t.fallbackAssetUri + "/" + n + "?redirect=true&install=true",
        fallbackUri: t.fallbackAssetUri + "/" + n + "?install=true"
      } : {
        uri: t.assetUri + "/" + n,
        fallbackUri: t.fallbackAssetUri + "/" + n
      }
    }

    function O(e) {
      var t = e.properties ? e.properties.filter(function(e) {
          return e.key === A.Dependency
        }) : [],
        n = t.length > 0 && t[0].value;
      return n ? n.split(",").map(function(e) {
        return p.adoptToGalleryExtensionId(e)
      }) : []
    }

    function T(e) {
      var t = e.properties ? e.properties.filter(function(e) {
        return e.key === A.Engine
      }) : [];
      return t.length > 0 && t[0].value || ""
    }

    function I(e, t, n, r, i) {
      var o = e.versions[0],
        a = {
          manifest: P(o, L.Manifest),
          readme: P(o, L.Details),
          changelog: P(o, L.Changelog),
          download: P(o, L.VSIX),
          icon: P(o, L.Icon),
          license: P(o, L.License),
          repository: P(o, L.Repository)
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
        installCount: w(e.statistics, "install"),
        rating: w(e.statistics, "averagerating"),
        ratingCount: w(e.statistics, "ratingcount"),
        assets: a,
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

    function k(e) {
      var t = s.join(e.userDataPath, "machineid");
      return C.readFile(t, "utf8").then(function(e) {
        return x.isUUID(e) ? e : u.TPromise.wrap(null)
      }, function(e) {
        return u.TPromise.wrap(null)
      }).then(function(e) {
        if (!e) {
          e = x.generateUuid();
          try {
            S.writeFileAndFlushSync(t, e)
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
      e[e.None = 0] = "None", e[e.IncludeVersions = 1] = "IncludeVersions", e[e.IncludeFiles = 2] = "IncludeFiles", e[e.IncludeCategoryAndTags = 4] = "IncludeCategoryAndTags", e[e.IncludeSharedAccounts = 8] = "IncludeSharedAccounts", e[e.IncludeVersionProperties = 16] = "IncludeVersionProperties", e[e.ExcludeNonValidated = 32] = "ExcludeNonValidated",
        e[e.IncludeInstallationTargets = 64] = "IncludeInstallationTargets", e[e.IncludeAssetUri = 128] = "IncludeAssetUri", e[e.IncludeStatistics = 256] = "IncludeStatistics", e[e.IncludeLatestVersionOnly = 512] = "IncludeLatestVersionOnly", e[e.Unpublished = 4096] = "Unpublished"
    }(D || (D = {}));
    var j;
    ! function(e) {
      e[e.Tag = 1] = "Tag", e[e.ExtensionId = 4] = "ExtensionId", e[e.Category = 5] = "Category", e[e.ExtensionName = 7] = "ExtensionName", e[e.Target = 8] = "Target", e[e.Featured = 9] = "Featured", e[e.SearchText = 10] = "SearchText", e[e.ExcludeWithFlags = 12] = "ExcludeWithFlags"
    }(j || (j = {}));
    var L = {
        Icon: "Microsoft.VisualStudio.Services.Icons.Default",
        Details: "Microsoft.VisualStudio.Services.Content.Details",
        Changelog: "Microsoft.VisualStudio.Services.Content.Changelog",
        Manifest: "Microsoft.VisualStudio.Code.Manifest",
        VSIX: "Microsoft.VisualStudio.Services.VSIXPackage",
        License: "Microsoft.VisualStudio.Services.Content.License",
        Repository: "Microsoft.VisualStudio.Services.Links.Source"
      },
      A = {
        Dependency: "Microsoft.VisualStudio.Code.ExtensionDependencies",
        Engine: "Microsoft.VisualStudio.Code.Engine"
      },
      M = {
        pageNumber: 1,
        pageSize: 10,
        sortBy: f.SortBy.NoneOrRelevance,
        sortOrder: f.SortOrder.Default,
        flags: D.None,
        criteria: [],
        assetTypes: []
      },
      R = function() {
        function e(e) {
          void 0 === e && (e = M), this.state = e
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
            return void 0 === n && (n = this.state.pageSize), new e(d.assign({}, this.state, {
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
            return new e(d.assign({}, this.state, {
              criteria: i
            }))
          }, e.prototype.withSortBy = function(t) {
            return new e(d.assign({}, this.state, {
              sortBy: t
            }))
          }, e.prototype.withSortOrder = function(t) {
            return new e(d.assign({}, this.state, {
              sortOrder: t
            }))
          }, e.prototype.withFlags = function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new e(d.assign({}, this.state, {
              flags: t.reduce(function(e, t) {
                return e | t
              }, 0)
            }))
          }, e.prototype.withAssetTypes = function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new e(d.assign({}, this.state, {
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
                a = e.flags;
              return {
                filters: [{
                  criteria: t,
                  pageNumber: n,
                  pageSize: r,
                  sortBy: i,
                  sortOrder: o
                }],
                assetTypes: e.assetTypes,
                flags: a
              }
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "searchText", {
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
      N = function() {
        function e(e, t, n) {
          this.requestService = e, this.environmentService = t, this.telemetryService = n;
          var r = y.default.extensionsGallery;
          this.extensionsGalleryUrl = r && r.serviceUrl, this.commonHeadersPromise = k(this.environmentService)
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
              i = d.getOrDefault(e, function(e) {
                return e.pageSize
              }, 50);
            this.telemetryService.publicLog("galleryService:query", {
              type: n,
              text: r
            });
            var o = (new R).withFlags(D.IncludeLatestVersionOnly, D.IncludeAssetUri, D.IncludeStatistics, D.IncludeFiles, D.IncludeVersionProperties).withPage(1, i).withFilter(j.Target, "Microsoft.VisualStudio.Code").withFilter(j.ExcludeWithFlags, _(D.Unpublished)).withAssetTypes(L.Icon, L.License, L.Details, L.Manifest, L.VSIX, L.Changelog);
            return r ? ((r = (r = (r = r.replace(/\bcategory:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g, function(e, t, n) {
              return o = o.withFilter(j.Category, n || t), ""
            })).replace(/\btag:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g, function(e, t, n) {
              return o = o.withFilter(j.Tag, n || t), ""
            })).trim()) && (r = r.length < 200 ? r : r.substring(0, 200), o = o.withFilter(j.SearchText, r)), o = o.withSortBy(f.SortBy.NoneOrRelevance)) : o = e.ids ? o.withFilter.apply(o, [j.ExtensionId].concat(e.ids)) : e.names ? o.withFilter.apply(o, [j.ExtensionName].concat(e.names)) : o.withSortBy(f.SortBy.InstallCount), "number" == typeof e.sortBy && (o = o.withSortBy(e.sortBy)), "number" == typeof e.sortOrder && (o = o.withSortOrder(e.sortOrder)), this.queryGallery(o).then(function(n) {
              var r = n.galleryExtensions,
                i = n.total;
              return {
                firstPage: r.map(function(n, r) {
                  return I(n, t.extensionsGalleryUrl, r, o, e.source)
                }),
                total: i,
                pageSize: o.pageSize,
                getPage: function(n) {
                  var r = o.withPage(n + 1);
                  return t.queryGallery(r).then(function(n) {
                    return n.galleryExtensions.map(function(n, i) {
                      return I(n, t.extensionsGalleryUrl, i, r, e.source)
                    })
                  })
                }
              }
            })
          }, e.prototype.queryGallery = function(e) {
            var t = this;
            return this.commonHeadersPromise.then(function(n) {
              var r = JSON.stringify(e.raw),
                i = d.assign({}, n, {
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
            var o = this;
            return this.isEnabled() ? this.commonHeadersPromise.then(function(a) {
              var s = i({}, a, {
                Accept: "*/*;api-version=4.0-preview.1"
              });
              return o.requestService.request({
                type: "POST",
                url: o.api("/publishers/" + e + "/extensions/" + t + "/" + n + "/stats?statType=" + r),
                headers: s
              }).then(null, function() {
                return null
              })
            }) : u.TPromise.as(null)
          }, e.prototype.download = function(e) {
            var t = this;
            return this.loadCompatibleVersion(e).then(function(e) {
              if (!e) return u.TPromise.wrapError(new Error(n.localize(0, null, m.default.version)));
              var i = s.join(r.tmpdir(), x.generateUuid()),
                o = p.getGalleryExtensionTelemetryData(e),
                a = (new Date).getTime();
              return t.getAsset(e.assets.download).then(function(e) {
                return v.download(i, e)
              }).then(function() {
                return function(e) {
                  return t.telemetryService.publicLog("galleryService:downloadVSIX", d.assign(o, {
                    duration: e
                  }))
                }((new Date).getTime() - a)
              }).then(function() {
                return i
              })
            })
          },
          e.prototype.getReadme = function(e) {
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
            var n = (new R).withFlags(D.IncludeVersions, D.IncludeFiles, D.IncludeVersionProperties).withPage(1, 1).withFilter(j.Target, "Microsoft.VisualStudio.Code").withFilter(j.ExcludeWithFlags, _(D.Unpublished)).withAssetTypes(L.Manifest, L.VSIX).withFilter(j.ExtensionId, e.identifier.uuid);
            return this.queryGallery(n).then(function(n) {
              var r = n.galleryExtensions[0];
              return r ? t.getLastValidExtensionVersion(r, r.versions).then(function(t) {
                return t ? (e.properties.dependencies = O(t),
                  e.properties.engine = T(t), e.assets.download = P(t, L.VSIX), e.version = t.version, e) : null
              }) : null
            })
          }, e.prototype.loadDependencies = function(e) {
            var t = this;
            if (!e || 0 === e.length) return u.TPromise.as([]);
            var n = (r = (new R).withFlags(D.IncludeLatestVersionOnly, D.IncludeAssetUri, D.IncludeStatistics, D.IncludeFiles, D.IncludeVersionProperties).withPage(1, e.length).withFilter(j.Target, "Microsoft.VisualStudio.Code").withFilter(j.ExcludeWithFlags, _(D.Unpublished)).withAssetTypes(L.Icon, L.License, L.Details, L.Manifest, L.VSIX)).withFilter.apply(r, [j.ExtensionName].concat(e));
            return this.queryGallery(n).then(function(e) {
              for (var r = [], i = [], o = 0; o < e.galleryExtensions.length; o++) {
                var a = e.galleryExtensions[o]; - 1 === i.indexOf(a.extensionId) && (r.push(I(a, t.extensionsGalleryUrl, o, n, "dependencies")), i.push(a.extensionId))
              }
              return r
            });
            var r
          }, e.prototype.getDependenciesReccursively = function(t, n) {
            var r = this;
            return t && t.length && (t = n.length ? t.filter(function(t) {
              return !e.hasExtensionByName(n, t)
            }) : t).length ? this.loadDependencies(t).then(function(t) {
              for (var i = new Set, o = 0, a = t; o < a.length; o++) {
                var s = a[o];
                s.properties.dependencies && s.properties.dependencies.forEach(function(e) {
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
              var i = d.assign({}, r, t.headers || {});
              t = d.assign({}, t, {
                type: "GET"
              }, {
                headers: i
              });
              var o = e.uri,
                a = e.fallbackUri,
                s = d.assign({}, t, {
                  url: o
                });
              return n.requestService.request(s).then(function(e) {
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
                  }),
                  n.telemetryService.publicLog("galleryService:cdnFallback", {
                    url: o,
                    message: r
                  });
                var i = d.assign({}, t, {
                  url: a
                });
                return n.requestService.request(i).then(null, function(e) {
                  if (l.isPromiseCanceledError(e)) return u.TPromise.wrapError(e);
                  var t = l.getErrorMessage(e);
                  return n.telemetryService.publicLog("galleryService:requestError", {
                    url: a,
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
              i = P(r, L.Manifest);
            return this.getAsset(i, {
              headers: {
                "Accept-Encoding": "gzip"
              }
            }).then(function(e) {
              return v.asJson(e)
            }).then(function(i) {
              var o = i.engines.vscode;
              return n.isEngineValid(o) ? (r.properties = r.properties || [], r.properties.push({
                key: A.Engine,
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
          }, e = o([a(0, h.IRequestService), a(1, E.IEnvironmentService), a(2, g.ITelemetryService)], e)
      }();
    t.ExtensionGalleryService = N, t.resolveMarketplaceHeaders = k
  });
  r = this && this.__generator || function(e, t) {
    function n(n) {
      return function(a) {
        return function(n) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; s;) try {
            if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
            switch (i = 0, o && (n = [0, o.value]), n[0]) {
              case 0:
              case 1:
                o = n;
                break;
              case 4:
                return s.label++, {
                  value: n[1],
                  done: !1
                };
              case 5:
                s.label++, i = n[1], n = [0];
                continue;
              case 7:
                n = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                  s = 0;
                  continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                  s.label = n[1];
                  break
                }
                if (6 === n[0] && s.label < o[1]) {
                  s.label = o[1], o = n;
                  break
                }
                if (o && s.label < o[2]) {
                  s.label = o[2], s.ops.push(n);
                  break
                }
                o[2] && s.ops.pop(), s.trys.pop();
                continue
            }
            n = t.call(e, s)
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
        }([n, a])
      }
    }
    var r, i, o, a, s = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return a = {
      next: n(0),
      throw: n(1),
      return: n(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
      return this
    }), a
  };
  define(e[58], t([0, 1, 2, 4, 38, 64, 11]), function(e, t, i, s, u, c, l) {
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
        this.proxyUrl = e.http && e.http.proxy, this.strictSSL = e.http && e.http.proxyStrictSSL,
          this.authorization = e.http && e.http.proxyAuthorization
      }, e.prototype.request = function(e, t) {
        return void 0 === t && (t = u.request), n(this, void 0, i.TPromise, function() {
          var n, i, o, a, u;
          return r(this, function(r) {
            switch (r.label) {
              case 0:
                return n = this, i = n.proxyUrl, o = n.strictSSL, a = e, (u = e.agent) ? [3, 2] : [4, c.getProxyAgent(e.url, {
                  proxyUrl: i,
                  strictSSL: o
                })];
              case 1:
                u = r.sent(), r.label = 2;
              case 2:
                return a.agent = u, e.strictSSL = o, this.authorization && (e.headers = s.assign(e.headers || {}, {
                  "Proxy-Authorization": this.authorization
                })), [2, t(e)]
            }
          })
        })
      }, e = o([a(0, l.IConfigurationService)], e)
    }();
    t.RequestService = f
  });
  r = this && this.__generator || function(e, t) {
    function n(n) {
      return function(a) {
        return function(n) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; s;) try {
            if (r = 1, i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
            switch (i = 0, o && (n = [0, o.value]), n[0]) {
              case 0:
              case 1:
                o = n;
                break;
              case 4:
                return s.label++, {
                  value: n[1],
                  done: !1
                };
              case 5:
                s.label++, i = n[1], n = [0];
                continue;
              case 7:
                n = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                  s = 0;
                  continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                  s.label = n[1];
                  break
                }
                if (6 === n[0] && s.label < o[1]) {
                  s.label = o[1], o = n;
                  break
                }
                if (o && s.label < o[2]) {
                  s.label = o[2], s.ops.push(n);
                  break
                }
                o[2] && s.ops.pop(), s.trys.pop();
                continue
            }
            n = t.call(e, s)
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
        }([n, a])
      }
    }
    var r, i, o, a, s = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return a = {
      next: n(0),
      throw: n(1),
      return: n(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
      return this
    }), a
  };
  define(e[94], t([0, 1, 5, 33, 23, 8, 2, 25, 34, 39, 53, 12, 62, 22, 77, 61, 32, 80, 79, 83, 31, 58, 11, 73, 81, 20, 29, 60, 74, 75, 76, 57, 17, 21]), function(e, t, i, s, u, c, l, f, p, d, h, g, v, m, y, b, E, C, S, x, _, w, P, O, T, I, k, D, j, L, A, M, R, N) {
    "use strict";

    function U(e, t) {
      return t ? e.publisher + "." + e.name + "@" + e.version : e.publisher + "." + e.name
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var F = i.localize(2, null, "ms-vscode.csharp"),
      B = function() {
        function e(e, t, n) {
          this.environmentService = e, this.extensionManagementService = t, this.extensionGalleryService = n
        }
        return e.prototype.run = function(e) {
            if (e["install-source"]) return this.setInstallSource(e["install-source"]);
            if (e["list-extensions"]) return this.listExtensions(e["show-versions"]);
            if (e["install-extension"]) {
              var t = "string" == typeof(n = e["install-extension"]) ? [n] : n;
              return this.installExtension(t)
            }
            if (e["uninstall-extension"]) {
              var n = e["uninstall-extension"],
                r = "string" == typeof n ? [n] : n;
              return this.uninstallExtension(r)
            }
          }, e.prototype.setInstallSource = function(e) {
            return I.writeFile(this.environmentService.installSourcePath, e.slice(0, 30))
          }, e.prototype.listExtensions = function(e) {
            return this.extensionManagementService.getInstalled(m.LocalExtensionType.User).then(function(t) {
              t.forEach(function(t) {
                return console.log(U(t.manifest, e))
              })
            })
          }, e.prototype.installExtension = function(e) {
            var t = this,
              n = e.filter(function(e) {
                return /\.vsix$/i.test(e)
              }).map(function(e) {
                return function() {
                  var n = c.isAbsolute(e) ? e : c.join(process.cwd(), e);
                  return t.extensionManagementService.install(n).then(function() {
                    console.log(i.localize(3, null, j.getBaseLabel(n)))
                  }, function(e) {
                    return N.isPromiseCanceledError(e) ? (console.log(i.localize(4, null, j.getBaseLabel(n))), null) : l.TPromise.wrapError(e)
                  })
                }
              }),
              r = e.filter(function(e) {
                return !/\.vsix$/i.test(e)
              }).map(function(e) {
                return function() {
                  return t.extensionManagementService.getInstalled(m.LocalExtensionType.User).then(function(n) {
                    return n.some(function(t) {
                      return U(t.manifest) === e
                    }) ? (console.log(i.localize(5, null, e)), l.TPromise.as(null)) : t.extensionGalleryService.query({
                      names: [e],
                      source: "cli"
                    }).then(null, function(e) {
                      if (e.responseText) try {
                        var t = JSON.parse(e.responseText);
                        return l.TPromise.wrapError(t.message)
                      } catch (e) {}
                      return l.TPromise.wrapError(e)
                    }).then(function(n) {
                      var r = n.firstPage[0];
                      return r ? (console.log(i.localize(6, null, e)), console.log(i.localize(7, null)), t.extensionManagementService.installFromGallery(r).then(function() {
                        return console.log(i.localize(8, null, e, r.version))
                      }, function(t) {
                        return N.isPromiseCanceledError(t) ? (console.log(i.localize(9, null, e)), null) : l.TPromise.wrapError(t)
                      })) : l.TPromise.wrapError(new Error(function(e) {
                        return i.localize(0, null, e)
                      }(e) + "\n" + F))
                    })
                  })
                }
              });
            return f.sequence(n.concat(r))
          }, e.prototype.uninstallExtension = function(e) {
            var t = this;
            return f.sequence(e.map(function(e) {
              return function() {
                return function(e) {
                  return n(this, void 0, l.TPromise, function() {
                    var t, n;
                    return r(this, function(r) {
                      switch (r.label) {
                        case 0:
                          return /\.vsix$/i.test(e) ? (t = c.isAbsolute(e) ? e : c.join(process.cwd(), e), [4, y.validateLocalExtension(t)]) : [2, e];
                        case 1:
                          return n = r.sent(), [2, U(n)]
                      }
                    })
                  })
                }(e).then(function(e) {
                  return t.extensionManagementService.getInstalled(m.LocalExtensionType.User).then(function(n) {
                    var r = n.filter(function(t) {
                      return U(t.manifest) === e
                    })[0];
                    return r ? (console.log(i.localize(10, null, e)), t.extensionManagementService.uninstall(r, !0).then(function() {
                      return console.log(i.localize(11, null, e))
                    })) : l.TPromise.wrapError(new Error(function(e) {
                      return i.localize(1, null, e)
                    }(e) + "\n" + F))
                  })
                })
              }
            }))
          },
          e = o([a(0, g.IEnvironmentService), a(1, m.IExtensionManagementService), a(2, m.IExtensionGalleryService)], e)
      }(),
      z = "monacoworkbench";
    t.main = function(e) {
      var t = new p.ServiceCollection,
        n = new v.EnvironmentService(e, process.execPath),
        r = M.createSpdLogService("cli", n);
      process.once("exit", function() {
        return r.dispose()
      }), r.info("main", e), t.set(g.IEnvironmentService, n), t.set(R.ILogService, r), t.set(L.IStateService, new d.SyncDescriptor(A.StateService));
      var i = new h.InstantiationService(t);
      return i.invokeFunction(function(t) {
        var n = t.get(g.IEnvironmentService),
          r = t.get(L.IStateService);
        return l.TPromise.join([n.appSettingsHome, n.extensionsPath].map(function(e) {
          return I.mkdirp(e)
        })).then(function() {
          var t = n.appRoot,
            o = n.extensionsPath,
            a = n.extensionDevelopmentPath,
            c = n.isBuilt,
            l = n.installSourcePath,
            f = new p.ServiceCollection;
          if (f.set(P.IConfigurationService, new d.SyncDescriptor(O.ConfigurationService)), f.set(_.IRequestService, new d.SyncDescriptor(w.RequestService)),
            f.set(m.IExtensionManagementService, new d.SyncDescriptor(y.ExtensionManagementService)), f.set(m.IExtensionGalleryService, new d.SyncDescriptor(b.ExtensionGalleryService)), f.set(k.IChoiceService, new d.SyncDescriptor(D.ChoiceCliService)), c && !a && !n.args["disable-telemetry"] && s.default.enableTelemetry) {
            var h = [];
            s.default.aiConfig && s.default.aiConfig.asimovKey && h.push(new T.AppInsightsAppender(z, null, s.default.aiConfig.asimovKey)), process.once("exit", function() {
              return h.forEach(function(e) {
                return e.dispose()
              })
            });
            var g = {
              appender: C.combinedAppender.apply(void 0, h),
              commonProperties: x.resolveCommonProperties(s.default.commit, u.default.version, r.getItem("telemetry.machineId"), l),
              piiPaths: [t, o]
            };
            f.set(E.ITelemetryService, new d.SyncDescriptor(S.TelemetryService, g))
          } else f.set(E.ITelemetryService, C.NullTelemetryService);
          return i.createChild(f).createInstance(B).run(e)
        })
      })
    }
  })
}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\code\node\cliProcessMain.js.map