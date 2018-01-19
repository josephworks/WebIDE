/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function() {
  var e = ["require", "exports", "vs/base/common/winjs.base", "vs/base/common/platform", "vs/base/common/event", "path", "vs/platform/instantiation/common/instantiation", "vs/base/common/uri", "vs/base/common/objects", "vs/platform/environment/common/environment", "vs/base/common/types", "vs/platform/log/common/log", "electron", "vs/base/common/lifecycle", "vs/base/common/paths", "vs/nls!vs/code/electron-main/main", "vs/platform/node/product", "vs/base/common/strings", "vs/nls", "vs/platform/workspaces/common/workspaces", "vs/platform/configuration/common/configuration", "vs/base/common/arrays", "vs/platform/windows/common/windows", "os", "fs", "vs/base/node/pfs", "vs/base/common/async", "vs/base/common/errors", "vs/platform/state/common/state", "vs/base/node/extfs", "vs/platform/windows/electron-main/windows", "vs/base/parts/ipc/common/ipc", "vs/base/common/uuid", "vs/base/common/labels", "vs/platform/registry/common/platform", "vs/base/common/map", "vs/platform/history/common/history", "vs/platform/request/node/request", "vs/platform/lifecycle/electron-main/lifecycleMain", "vs/base/common/json", "vs/platform/telemetry/common/telemetry", "vs/base/node/request", "vs/platform/configuration/common/configurationRegistry", "vs/platform/url/common/url", "vs/platform/node/package", "vs/platform/files/common/files", "vs/platform/update/common/update", "vs/platform/backup/common/backup", "original-fs", "vs/platform/instantiation/common/serviceCollection", "vs/platform/instantiation/common/descriptors", "vs/base/common/functional", "vs/base/common/decorators", "crypto", "child_process", "vs/base/node/id", "vs/base/common/assert", "vs/base/common/resources", "vs/base/common/network", "vs/base/common/jsonFormatter", "vs/base/parts/ipc/node/ipc.net", "vs/platform/environment/node/argv", "vs/code/node/paths", "vs/base/node/config", "vs/code/electron-main/keyboard", "vs/platform/extensionManagement/common/extensionManagement", "vs/code/electron-main/launch", "vs/platform/configuration/common/configurationModels", "vs/code/electron-main/window", "vs/nls!vs/platform/request/node/request", "vs/nls!vs/platform/telemetry/common/telemetryService", "vs/base/common/jsonEdit", "vs/platform/extensions/node/extensionValidator", "vs/base/common/graph", "vs/base/common/cancellation", "vs/base/common/collections", "vs/base/node/paths", "vs/base/common/glob", "vs/base/node/proxy", "vs/platform/extensionManagement/common/extensionManagementUtil", "url", "vs/base/node/stats", "vs/base/common/mime", "vs/platform/instantiation/common/instantiationService", "vs/platform/keybinding/common/keybinding", "vs/platform/lifecycle/common/lifecycle", "vs/base/parts/ipc/common/ipc.electron", "vs/platform/log/common/bufferLog", "vs/platform/log/node/spdlogService", "vs/base/parts/ipc/electron-main/ipc.electron-main", "vs/base/node/crypto", "vs/code/electron-main/diagnostics", "vs/base/common/linkedList", "vs/platform/environment/node/environmentService", "vs/code/electron-main/sharedProcess", "vs/platform/jsonschemas/common/jsonContributionRegistry", "vs/base/common/date", "vs/code/node/shellEnv", "vs/base/node/flow", "vs/platform/configuration/node/configuration", "vs/platform/configuration/node/configurationService", "vs/nls!vs/base/node/ps", "assert", "vs/platform/state/node/stateService", "vs/code/electron-main/app", "vs/base/node/ps", "vs/platform/telemetry/common/telemetryIpc", "vs/platform/telemetry/common/telemetryService", "vs/platform/telemetry/common/telemetryUtils", "vs/platform/telemetry/node/commonProperties", "vs/nls!vs/code/electron-main/auth", "vs/platform/update/common/updateIpc", "vs/nls!vs/code/electron-main/menus", "vs/platform/url/electron-main/urlService", "vs/nls!vs/code/electron-main/window", "vs/nls!vs/code/electron-main/windows", "vs/platform/url/common/urlIpc", "vs/platform/windows/common/windowsIpc", "vs/nls!vs/platform/configuration/common/configurationRegistry", "vs/code/electron-main/auth", "vs/nls!vs/platform/environment/node/argv", "vs/platform/windows/electron-main/windowsService", "vs/nls!vs/platform/extensionManagement/common/extensionManagement", "vs/nls!vs/platform/extensionManagement/node/extensionGalleryService", "vs/code/electron-main/menus", "vs/code/node/windowsFinder", "vs/platform/backup/electron-main/backupMainService", "vs/platform/history/electron-main/historyMainService", "vs/platform/workspace/common/workspace", "vs/platform/workspaces/common/workspacesIpc", "vs/platform/workspaces/node/workspaces", "vs/platform/workspaces/electron-main/workspacesMainService", "vs/nls!vs/platform/extensions/node/extensionValidator", "vs/platform/extensionManagement/node/extensionGalleryService", "vs/nls!vs/platform/history/electron-main/historyMainService", "vs/code/electron-main/windows", "vs/platform/request/node/requestService", "vs/platform/request/electron-main/requestService", "vs/platform/update/electron-main/auto-updater.linux", "events", "vs/platform/update/electron-main/auto-updater.win32", "vs/platform/update/electron-main/updateService", "vs/nls!vs/platform/workspaces/common/workspaces", "net", "vs/base/common/winjs.base.raw", "vs/code/electron-main/main", "native-keymap", "zlib", "spdlog", "minimist", "vs/base/common/performance", "semver"],
    t = function(t) {
      for (var n = [], r = 0, i = t.length; r < i; r++) n[r] = e[t[r]];
      return n
    };
  define(e[56], t([0, 1]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ok = function(e, t) {
        if (!e || null === e) throw new Error(t ? "Assertion failed (" + t + ")" : "Assertion Failed")
      }
    }), define(e[75], t([0, 1]), function(e, t) {
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
    }), define(e[96], t([0, 1]), function(e, t) {
      "use strict";

      function n(e) {
        return e < 10 ? "0" + e : String(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.toLocalISOString = function(e) {
        return e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + "." + (e.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
      }
    }), define(e[52], t([0, 1]), function(e, t) {
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
    }), define(e[51], t([0, 1]), function(e, t) {
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
    }), define(e[39], t([0, 1]), function(e, t) {
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
          if (f = "", h = c.None, d = a, a >= l) return d = l, p = u.EOF;
          var t = e.charCodeAt(a);
          if (r(t)) {
            do {
              a++, f += String.fromCharCode(t), t = e.charCodeAt(a)
            } while (r(t));
            return p = u.Trivia
          }
          if (i(t)) return a++, f += String.fromCharCode(t), 13 === t && 10 === e.charCodeAt(a) && (a++, f += "\n"), p = u.LineBreakTrivia;
          switch (t) {
            case 123:
              return a++,
                p = u.OpenBraceToken;
            case 125:
              return a++, p = u.CloseBraceToken;
            case 91:
              return a++, p = u.OpenBracketToken;
            case 93:
              return a++, p = u.CloseBracketToken;
            case 58:
              return a++, p = u.ColonToken;
            case 44:
              return a++, p = u.CommaToken;
            case 34:
              return a++, f = function() {
                for (var t = "", r = a;;) {
                  if (a >= l) {
                    t += e.substring(r, a), h = c.UnexpectedEndOfString;
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
                        t += e.substring(r, a), h = c.UnexpectedEndOfString;
                        break
                      }
                      h = c.InvalidCharacter
                    }
                    a++
                  } else {
                    if (t += e.substring(r, a), ++a >= l) {
                      h = c.UnexpectedEndOfString;
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
                        s >= 0 ? t += String.fromCharCode(s) : h = c.InvalidUnicode;
                        break;
                      default:
                        h = c.InvalidEscapeCharacter
                    }
                    r = a
                  }
                }
                return t
              }(), p = u.StringLiteral;
            case 47:
              var s = a - 1;
              if (47 === e.charCodeAt(a + 1)) {
                for (a += 2; a < l && !i(e.charCodeAt(a));) a++;
                return f = e.substring(s, a), p = u.LineCommentTrivia
              }
              if (42 === e.charCodeAt(a + 1)) {
                a += 2;
                for (var v = l - 1, g = !1; a < v;) {
                  if (42 === e.charCodeAt(a) && 47 === e.charCodeAt(a + 1)) {
                    a += 2, g = !0;
                    break
                  }
                  a++
                }
                return g || (a++, h = c.UnexpectedEndOfComment), f = e.substring(s, a), p = u.BlockCommentTrivia
              }
              return f += String.fromCharCode(t), a++, p = u.Unknown;
            case 45:
              if (f += String.fromCharCode(t), ++a === l || !o(e.charCodeAt(a))) return p = u.Unknown;
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
                    if (!(++a < e.length && o(e.charCodeAt(a)))) return h = c.UnexpectedEndOfNumber, e.substring(t, a);
                    for (a++; a < e.length && o(e.charCodeAt(a));) a++
                  }
                  var n = a;
                  if (a < e.length && (69 === e.charCodeAt(a) || 101 === e.charCodeAt(a)))
                    if ((++a < e.length && 43 === e.charCodeAt(a) || 45 === e.charCodeAt(a)) && a++, a < e.length && o(e.charCodeAt(a))) {
                      for (a++; a < e.length && o(e.charCodeAt(a));) a++;
                      n = a
                    } else h = c.UnexpectedEndOfNumber;
                  return e.substring(t, n)
                }(),
                p = u.NumericLiteral;
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
              if (d !== a) {
                switch (f = e.substring(d, a)) {
                  case "true":
                    return p = u.TrueKeyword;
                  case "false":
                    return p = u.FalseKeyword;
                  case "null":
                    return p = u.NullKeyword
                }
                return p = u.Unknown
              }
              return f += String.fromCharCode(t), a++, p = u.Unknown
          }
        }
        void 0 === t && (t = !1);
        var a = 0,
          l = e.length,
          f = "",
          d = 0,
          p = u.Unknown,
          h = c.None;
        return {
          setPosition: function(e) {
            a = e, f = "", d = 0, p = u.Unknown, h = c.None
          },
          getPosition: function() {
            return a
          },
          scan: t ? function() {
            var e;
            do {
              e = s()
            } while (e >= u.LineCommentTrivia && e <= u.Trivia);
            return e
          } : s,
          getToken: function() {
            return p
          },
          getTokenValue: function() {
            return f
          },
          getTokenOffset: function() {
            return d
          },
          getTokenLength: function() {
            return a - d
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
            return e(p.getTokenOffset(), p.getTokenLength())
          } : function() {
            return !0
          }
        }

        function o(e) {
          return e ? function(t) {
            return e(t, p.getTokenOffset(), p.getTokenLength())
          } : function() {
            return !0
          }
        }

        function s() {
          for (;;) {
            var e = p.scan();
            switch (e) {
              case u.LineCommentTrivia:
              case u.BlockCommentTrivia:
                _ && a(f.InvalidSymbol);
                break;
              case u.Unknown:
                a(f.InvalidSymbol);
                break;
              case u.Trivia:
              case u.LineBreakTrivia:
                break;
              default:
                return e
            }
          }
        }

        function a(e, t, n) {
          if (void 0 === t && (t = []), void 0 === n && (n = []), S(e), t.length + n.length > 0)
            for (var r = p.getToken(); r !== u.EOF;) {
              if (-1 !== t.indexOf(r)) {
                s();
                break
              }
              if (-1 !== n.indexOf(r)) break;
              r = s()
            }
        }

        function c(e) {
          var t = p.getTokenValue();
          return e ? w(t) : v(t), s(), !0
        }

        function l() {
          return p.getToken() !== u.StringLiteral ? (a(f.PropertyNameExpected, [], [u.CloseBraceToken, u.CommaToken]), !1) : (c(!1), p.getToken() === u.ColonToken ? (b(":"), s(), d() || a(f.ValueExpected, [], [u.CloseBraceToken, u.CommaToken])) : a(f.ColonExpected, [], [u.CloseBraceToken, u.CommaToken]), !0)
        }

        function d() {
          switch (p.getToken()) {
            case u.OpenBracketToken:
              return function() {
                m(), s();
                for (var e = !1; p.getToken() !== u.CloseBracketToken && p.getToken() !== u.EOF;) {
                  if (p.getToken() === u.CommaToken) {
                    if (e || a(f.ValueExpected, [], []), b(","), s(), p.getToken() === u.CloseBracketToken && k) break
                  } else e && a(f.CommaExpected, [], []);
                  d() || a(f.ValueExpected, [], [u.CloseBracketToken, u.CommaToken]), e = !0
                }
                return y(), p.getToken() !== u.CloseBracketToken ? a(f.CloseBracketExpected, [u.CloseBracketToken], []) : s(), !0
              }();
            case u.OpenBraceToken:
              return function() {
                h(), s();
                for (var e = !1; p.getToken() !== u.CloseBraceToken && p.getToken() !== u.EOF;) {
                  if (p.getToken() === u.CommaToken) {
                    if (e || a(f.ValueExpected, [], []), b(","), s(), p.getToken() === u.CloseBraceToken && k) break
                  } else e && a(f.CommaExpected, [], []);
                  l() || a(f.ValueExpected, [], [u.CloseBraceToken, u.CommaToken]), e = !0
                }
                return g(), p.getToken() !== u.CloseBraceToken ? a(f.CloseBraceExpected, [u.CloseBraceToken], []) : s(), !0
              }();
            case u.StringLiteral:
              return c(!0);
            default:
              return function() {
                switch (p.getToken()) {
                  case u.NumericLiteral:
                    var e = 0;
                    try {
                      "number" != typeof(e = JSON.parse(p.getTokenValue())) && (a(f.InvalidNumberFormat), e = 0)
                    } catch (e) {
                      a(f.InvalidNumberFormat)
                    }
                    w(e);
                    break;
                  case u.NullKeyword:
                    w(null);
                    break;
                  case u.TrueKeyword:
                    w(!0);
                    break;
                  case u.FalseKeyword:
                    w(!1);
                    break;
                  default:
                    return !1
                }
                return s(), !0
              }()
          }
        }
        var p = n(e, !1),
          h = i(t.onObjectBegin),
          v = o(t.onObjectProperty),
          g = i(t.onObjectEnd),
          m = i(t.onArrayBegin),
          y = i(t.onArrayEnd),
          w = o(t.onLiteralValue),
          b = o(t.onSeparator),
          S = o(t.onError),
          _ = r && r.disallowComments,
          k = r && r.allowTrailingComma;
        return s(), p.getToken() === u.EOF || (d() ? (p.getToken() !== u.EOF && a(f.EndOfFileExpected, [], []), !0) : (a(f.ValueExpected, [], []), !1))
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var c;
      ! function(e) {
        e[e.None = 0] = "None",
          e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter"
      }(c = t.ScanError || (t.ScanError = {}));
      var u;
      ! function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.EOF = 16] = "EOF"
      }(u = t.SyntaxKind || (t.SyntaxKind = {})), t.createScanner = n;
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
              for (var s = !1, a = 0, c = n.children; a < c.length; a++) {
                var u = c[a];
                if (u.children[0].value === o) {
                  n = u.children[1], s = !0;
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
    }), define(e[59], t([0, 1, 39]), function(e, t, n) {
      "use strict";

      function r(e, t) {
        return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length)
      }

      function i(e, t, r) {
        function i() {
          return h + o(p, c + g)
        }

        function s() {
          var e = m.scan();
          for (v = !1; e === n.SyntaxKind.Trivia || e === n.SyntaxKind.LineBreakTrivia;) v = v || e === n.SyntaxKind.LineBreakTrivia, e = m.scan();
          return e
        }

        function a(t, n, r) {
          e.substring(n, r) !== t && y.push({
            offset: n,
            length: r - n,
            content: t
          })
        }
        var c, u, l, f;
        if (t) {
          for (f = (l = t.offset) + t.length; l > 0 && ! function(e, t) {
              return -1 !== "\r\n".indexOf(e.charAt(t))
            }(e, l - 1);) l--;
          var d = n.createScanner(e, !0);
          d.setPosition(f), d.scan(), f = d.getPosition(), u = e.substring(l, f), c = function(e, t, n) {
            var r = 0,
              i = 0,
              o = n.tabSize || 4;
            for (; r < e.length;) {
              var s = e.charAt(r);
              if (" " === s) i++;
              else {
                if ("\t" !== s) break;
                i += o
              }
              r++
            }
            return Math.floor(i / o)
          }(u, 0, r)
        } else u = e, l = 0, f = e.length, c = 0;
        var p, h = function(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t.charAt(n);
              if ("\r" === r) return n + 1 < t.length && "\n" === t.charAt(n + 1) ? "\r\n" : "\r";
              if ("\n" === r) return "\n"
            }
            return e && e.eol || "\n"
          }(r, e),
          v = !1,
          g = 0;
        p = r.insertSpaces ? o(" ", r.tabSize) : "\t";
        var m = n.createScanner(u, !1),
          y = [],
          w = s();
        if (w !== n.SyntaxKind.EOF) {
          var b = m.getTokenOffset() + l;
          a(o(p, c), l, b)
        }
        for (; w !== n.SyntaxKind.EOF;) {
          for (var S = m.getTokenOffset() + m.getTokenLength() + l, _ = s(), k = ""; !v && (_ === n.SyntaxKind.LineCommentTrivia || _ === n.SyntaxKind.BlockCommentTrivia);) {
            a(" ", S, m.getTokenOffset() + l), S = m.getTokenOffset() + m.getTokenLength() + l, k = _ === n.SyntaxKind.LineCommentTrivia ? i() : "", _ = s()
          }
          if (_ === n.SyntaxKind.CloseBraceToken) w !== n.SyntaxKind.OpenBraceToken && (g--, k = i());
          else if (_ === n.SyntaxKind.CloseBracketToken) w !== n.SyntaxKind.OpenBracketToken && (g--, k = i());
          else if (_ !== n.SyntaxKind.EOF) {
            switch (w) {
              case n.SyntaxKind.OpenBracketToken:
              case n.SyntaxKind.OpenBraceToken:
                g++, k = i();
                break;
              case n.SyntaxKind.CommaToken:
              case n.SyntaxKind.LineCommentTrivia:
                k = i();
                break;
              case n.SyntaxKind.BlockCommentTrivia:
                k = v ? i() : " ";
                break;
              case n.SyntaxKind.ColonToken:
                k = " ";
                break;
              case n.SyntaxKind.NullKeyword:
              case n.SyntaxKind.TrueKeyword:
              case n.SyntaxKind.FalseKeyword:
              case n.SyntaxKind.NumericLiteral:
                _ !== n.SyntaxKind.NullKeyword && _ !== n.SyntaxKind.FalseKeyword && _ !== n.SyntaxKind.NumericLiteral || (k = " ")
            }!v || _ !== n.SyntaxKind.LineCommentTrivia && _ !== n.SyntaxKind.BlockCommentTrivia || (k = i())
          }
          a(k, S, m.getTokenOffset() + l), w = _
        }
        return y
      }

      function o(e, t) {
        for (var n = "", r = 0; r < t; r++) n += e;
        return n
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.applyEdit = r, t.applyEdits = function(e, t) {
        for (var n = t.length - 1; n >= 0; n--) e = r(e, t[n]);
        return e
      }, t.format = i
    }), define(e[71], t([0, 1, 39, 59]), function(e, t, n, r) {
      "use strict";

      function i(e, t, r, i, s) {
        for (var a = n.parseTree(e, []), c = void 0, u = void 0; t.length > 0 && (u = t.pop(), void 0 === (c = n.findNodeAtLocation(a, t)) && void 0 !== r);) "string" == typeof u ? ((S = {})[u] = r, r = S) : r = [r];
        if (c) {
          if ("object" === c.type && "string" == typeof u) {
            var l = n.findNodeAtLocation(c, [u]);
            if (void 0 !== l) {
              if (void 0 === r) {
                var f = c.children.indexOf(l.parent),
                  d = void 0,
                  p = l.parent.offset + l.parent.length;
                if (f > 0) {
                  d = (w = c.children[f - 1]).offset + w.length
                } else if (d = c.offset + 1, c.children.length > 1) {
                  p = c.children[1].offset
                }
                return o(e, {
                  offset: d,
                  length: p - d,
                  content: ""
                }, i)
              }
              return o(e, {
                offset: l.offset,
                length: l.length,
                content: JSON.stringify(r)
              }, i)
            }
            if (void 0 === r) return [];
            var h = JSON.stringify(u) + ": " + JSON.stringify(r),
              v = s ? s(c.children.map(function(e) {
                return e.children[0].value
              })) : c.children.length,
              g = void 0;
            if (v > 0) {
              g = {
                offset: (w = c.children[v - 1]).offset + w.length,
                length: 0,
                content: "," + h
              }
            } else g = 0 === c.children.length ? {
              offset: c.offset + 1,
              length: 0,
              content: h
            } : {
              offset: c.offset + 1,
              length: 0,
              content: h + ","
            };
            return o(e, g, i)
          }
          if ("array" === c.type && "number" == typeof u) {
            if (-1 === u) {
              var h = "" + JSON.stringify(r),
                g = void 0;
              if (0 === c.children.length) g = {
                offset: c.offset + 1,
                length: 0,
                content: h
              };
              else {
                g = {
                  offset: (w = c.children[c.children.length - 1]).offset + w.length,
                  length: 0,
                  content: "," + h
                }
              }
              return o(e, g, i)
            }
            if (void 0 === r && c.children.length >= 0) {
              var m = u,
                y = c.children[m],
                g = void 0;
              if (1 === c.children.length) g = {
                offset: c.offset + 1,
                length: c.length - 2,
                content: ""
              };
              else if (c.children.length - 1 === m) {
                var w = c.children[m - 1],
                  b = w.offset + w.length;
                g = {
                  offset: b,
                  length: c.offset + c.length - 2 - b,
                  content: ""
                }
              } else g = {
                offset: y.offset,
                length: c.children[m + 1].offset - y.offset,
                content: ""
              };
              return o(e, g, i)
            }
            throw new Error("Array modification not supported yet")
          }
          throw new Error("Can not add " + ("number" != typeof u ? "index" : "property") + " to parent of type " + c.type)
        }
        if (void 0 === r) throw new Error("Can not delete in empty document");
        return o(e, {
          offset: a ? a.offset : 0,
          length: a ? a.length : 0,
          content: JSON.stringify(r)
        }, i);
        var S
      }

      function o(e, t, n) {
        for (var i = r.applyEdit(e, t), o = t.offset, s = t.offset + t.content.length, a = r.format(i, {
            offset: o,
            length: s - o
          }, n), c = a.length - 1; c >= 0; c--) {
          var u = a[c];
          i = r.applyEdit(i, u), o = Math.min(o, u.offset), s = Math.max(s, u.offset + u.length), s += u.content.length - u.length
        }
        return [{
          offset: o,
          length: e.length - (i.length - s) - o,
          content: i.substring(o, s)
        }]
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.removeProperty = function(e, t, n) {
        return i(e, t, void 0, n)
      }, t.setProperty = i
    }),
    define(e[13], t([0, 1, 51]), function(e, t, n) {
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
    }), define(e[92], t([0, 1]), function(e, t) {
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
    }), define(e[58], t([0, 1]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      ! function(e) {
        e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data"
      }(t.Schemas || (t.Schemas = {}))
    }), global._performanceEntries = global._performanceEntries || [],
    "function" != typeof define && "object" == typeof module && "object" == typeof module.exports && (global.define = function(e, t) {
      module.exports = t(), global.define = void 0
    }), define("vs/base/common/performance", [], function() {
      function e(e) {
        global._performanceEntries.push("mark", e, r(), 0), "function" == typeof console.timeStamp && console.timeStamp(e)
      }

      function t(e, t, i) {
        let o, s, a = r();
        o = t ? n(t) : a, s = i ? n(i) - o : a - o, global._performanceEntries.push("measure", e, o, s)
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
          for (let i = 0; i < r.length; i += 4) r[i] !== e || void 0 !== t && r[i + 1] !== t || n.push({
            type: r[i],
            name: r[i + 1],
            startTime: r[i + 2],
            duration: r[i + 3]
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
            i = 0;
          for (let o = 0; o < n.length; o += 4)
            if (n[o + 1] === r) {
              if (r !== e) return n[o + 2] - i;
              r = t, i = n[o + 2]
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
    }), define(e[3], t([0, 1]), function(e, t) {
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
        c = void 0,
        u = void 0;
      if (t.LANGUAGE_DEFAULT = "en", "object" == typeof process) {
        n = "win32" === process.platform, r = "darwin" === process.platform, i = "linux" === process.platform, o = !n && 0 === process.getuid();
        var l = process.env.VSCODE_NLS_CONFIG;
        if (l) try {
          var f = JSON.parse(l),
            d = f.availableLanguages["*"];
          c = f.locale, u = d || t.LANGUAGE_DEFAULT
        } catch (e) {}
        s = !0
      } else if ("object" == typeof navigator) {
        var p = navigator.userAgent;
        n = p.indexOf("Windows") >= 0, r = p.indexOf("Macintosh") >= 0, i = p.indexOf("Linux") >= 0,
          a = !0, u = c = navigator.language
      }
      var h;
      ! function(e) {
        e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows"
      }(h = t.Platform || (t.Platform = {}));
      var v = h.Web;
      s && (r ? v = h.Mac : n ? v = h.Windows : i && (v = h.Linux)), t.isWindows = n, t.isMacintosh = r, t.isLinux = i, t.isRootUser = o, t.isNative = s, t.isWeb = a, t.platform = v, t.language = u, t.locale = c;
      var g = "object" == typeof self ? self : global;
      t.globals = g, t.setTimeout = g.setTimeout.bind(g), t.clearTimeout = g.clearTimeout.bind(g), t.setInterval = g.setInterval.bind(g), t.clearInterval = g.clearInterval.bind(g);
      ! function(e) {
        e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux"
      }(t.OperatingSystem || (t.OperatingSystem = {})), t.OS = r ? 2 : n ? 1 : 3;
      ! function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled"
      }(t.AccessibilitySupport || (t.AccessibilitySupport = {}))
    }), define(e[10], t([0, 1]), function(e, t) {
      "use strict";

      function n(e) {
        return Array.isArray ? Array.isArray(e) : !(!e || typeof e.length !== u.number || e.constructor !== Array)
      }

      function r(e) {
        return typeof e === u.string || e instanceof String
      }

      function i(e) {
        return !(typeof e !== u.object || null === e || Array.isArray(e) || e instanceof RegExp || e instanceof Date)
      }

      function o(e) {
        return typeof e === u.undefined
      }

      function s(e) {
        return o(e) || null === e
      }

      function a(e) {
        return typeof e === u.function
      }

      function c(e, t) {
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
      var u = {
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
          return (typeof e === u.number || e instanceof Number) && !isNaN(e)
        },
        t.isBoolean = function(e) {
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
        for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) c(e[r], t[r])
      }, t.validateConstraint = c, t.create = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        var r = Object.create(e.prototype);
        return e.apply(r, t), r
      }
    }), define(e[73], t([0, 1, 10, 75]), function(e, t, n, r) {
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
    }), define(e[8], t([0, 1, 10]), function(e, t, n) {
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
          var u = {};
          for (var l in e) c.call(e, l) && (u[l] = i(e[l], t, r));
          return r.pop(), u
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
            if (c.call(n, r)) {
              var i = n[r];
              "object" != typeof i || Object.isFrozen(i) || t.push(i)
            }
        }
        return e
      };
      var c = Object.prototype.hasOwnProperty;
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
  define(e[7], t([0, 1, 3]), function(e, t, r) {
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
          c = e.query,
          u = e.fragment;
        if (o && r.push(o, ":"), (s || "file" === o) && r.push("//"), s) {
          if (-1 !== (g = s.indexOf("@"))) {
            var d = s.substr(0, g);
            s = s.substr(g + 1), -1 === (g = d.indexOf(":")) ? r.push(n(d)) : r.push(n(d.substr(0, g)), ":", n(d.substr(g + 1))), r.push("@")
          } - 1 === (g = (s = s.toLowerCase()).indexOf(":")) ? r.push(n(s)) : r.push(n(s.substr(0, g)), s.substr(g))
        }
        if (a) {
          var p = h.exec(a);
          p && (a = p[1] ? "/" + p[2].toLowerCase() + a.substr(3) : p[2].toLowerCase() + a.substr(2));
          for (var v = 0;;) {
            var g = a.indexOf(f, v);
            if (-1 === g) {
              r.push(n(a.substring(v)));
              break
            }
            r.push(n(a.substring(v, g)), f), v = g + 1
          }
        }
        return c && r.push("?", n(c)), u && r.push("#", n(u)), r.join(l)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = /^\w[\w\d+.-]*$/,
        c = /^\//,
        u = /^\/\//,
        l = "",
        f = "/",
        d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
        p = /^\/[a-zA-Z]:/,
        h = /^(\/)?([A-Z]:)/,
        v = /^[a-zA-Z]:/,
        g = function() {
          function e(e, t, n, r, i) {
            "object" == typeof e ? (this.scheme = e.scheme || l, this.authority = e.authority || l, this.path = e.path || l, this.query = e.query || l, this.fragment = e.fragment || l) : (this.scheme = e || l, this.authority = t || l, this.path = n || l, this.query = r || l, this.fragment = i || l, function(e) {
              if (e.scheme && !a.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
              if (e.path)
                if (e.authority) {
                  if (!c.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
                } else if (u.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
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
            return void 0 === t ? t = this.scheme : null === t && (t = l), void 0 === n ? n = this.authority : null === n && (n = l), void 0 === r ? r = this.path : null === r && (r = l), void 0 === i ? i = this.query : null === i && (i = l), void 0 === o ? o = this.fragment : null === o && (o = l), t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new m(t, n, r, i, o)
          }, e.parse = function(e) {
            var t = d.exec(e);
            return t ? new m(t[2] || l, decodeURIComponent(t[4] || l), decodeURIComponent(t[5] || l), decodeURIComponent(t[7] || l), decodeURIComponent(t[9] || l)) : new m(l, l, l, l, l)
          }, e.file = function(e) {
            var t = l;
            if (r.isWindows && (e = e.replace(/\\/g, f)), e[0] === f && e[1] === f) {
              var n = e.indexOf(f, 2); - 1 === n ? (t = e.substring(2), e = f) : (t = e.substring(2, n), e = e.substring(n) || f)
            }
            return v.test(e) ? e = f + e : e[0] !== f && (e = f + e), new m("file", t, e, l, l)
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
            return this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e
          }, e.revive = function(t) {
            if (t) {
              if (t instanceof e) return t;
              var n = new m(t);
              return n._fsPath = t.fsPath, n._formatted = t.external, n
            }
            return t
          }, e
        }();
      t.default = g;
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
      }(g)
    }), define(e[35], t([0, 1, 7]), function(e, t, r) {
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
      var c = function() {
          function e() {}
          return e.prototype.isEmpty = function() {
            return !(this.left || this.mid || this.right || this.element)
          }, e
        }(),
        u = function() {
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
            for (this._root || (this._root = new c, this._root.str = r.value()), n = this._root;;) {
              var i = r.cmp(n.str);
              if (i > 0) n.left || (n.left = new c, n.left.str = r.value()), n = n.left;
              else if (i < 0) n.right || (n.right = new c, n.right.str = r.value()), n = n.right;
              else {
                if (!r.hasNext()) break;
                r.next(), n.mid || (n.mid = new c, n.mid.str = r.value()), n = n.mid
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
            e && (this._forEach(e.left, t, n), t.push(e.str), e.element && n(e.element, this._iter.join(t)), this._forEach(e.mid, t, n), t.pop(),
              this._forEach(e.right, t, n))
          }, e
        }();
      t.TernarySearchTree = u;
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
      var d;
      ! function(e) {
        e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld",
          e[e.AsNew = 2] = "AsNew"
      }(d = t.Touch || (t.Touch = {}));
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
            void 0 === t && (t = d.None);
            var n = this._map.get(e);
            if (n) return t !== d.None && this.touch(n, t), n.value
          }, e.prototype.set = function(e, t, n) {
            void 0 === n && (n = d.None);
            var r = this._map.get(e);
            if (r) r.value = t, n !== d.None && this.touch(r, n);
            else {
              switch (r = {
                key: e,
                value: t,
                next: void 0,
                previous: void 0
              }, n) {
                case d.None:
                  this.addItemLast(r);
                  break;
                case d.AsOld:
                  this.addItemFirst(r);
                  break;
                case d.AsNew:
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
          },
          e.prototype.addItemLast = function(e) {
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
            if (t === d.AsOld || t === d.AsNew)
              if (t === d.AsOld) {
                if (e === this._head) return;
                var n = e.next,
                  r = e.previous;
                e === this._tail ? (r.next = void 0, this._tail = r) : (n.previous = r, r.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e
              } else if (t === d.AsNew) {
              if (e === this._tail) return;
              var n = e.next,
                r = e.previous;
              e === this._head ? (n.previous = void 0, this._head = n) : (n.previous = r, r.next = n), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e
            }
          }, e
      }();
      t.LinkedMap = p;
      var h = function(e) {
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
          return e.prototype.get.call(this, t, d.AsNew)
        }, t.prototype.peek = function(t) {
          return e.prototype.get.call(this, t, d.None)
        }, t.prototype.set = function(t, n) {
          e.prototype.set.call(this, t, n, d.AsNew), this.checkTrim()
        }, t.prototype.checkTrim = function() {
          this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio))
        }, t
      }(p);
      t.LRUCache = h
    }), define(e[17], t([0, 1, 35]), function(e, t, n) {
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

      function c(e) {
        return e >= 97 && e <= 122
      }

      function u(e) {
        return e >= 65 && e <= 90
      }

      function l(e) {
        return c(e) || u(e)
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

      function d(e, t, n, r, i, o) {
        for (; t < n && i < o;) {
          if (e[t] !== r[i]) return !1;
          t += 1, i += 1
        }
        return !0
      }

      function p(e) {
        return (e = +e) >= 11904 && e <= 55215 || e >= 63744 && e <= 64255 || e >= 65281 && e <= 65374
      }

      function h(e) {
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
        },
        t.stripWildcards = function(e) {
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
      var g = new n.LRUCache(1e4);
      t.normalizeNFC = function(e) {
        return s(e, "NFC", g)
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
            u(i) && (i += 32), u(o) && (o += 32);
            var s = i - o;
            if (0 !== s) return c(i) && c(o) ? s : a(e.toLowerCase(), t.toLowerCase())
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
          if (d(e, i, n, t, 0, r)) return r;
          r -= 1, i += 1
        }
        return 0
      }, t.isHighSurrogate = function(e) {
        return 55296 <= e && e <= 56319
      }, t.isLowSurrogate = function(e) {
        return 56320 <= e && e <= 57343
      };
      var w = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
      t.containsRTL = function(e) {
        return w.test(e)
      };
      var b = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEF8]|\uD83E[\uDD00-\uDDE6])/;
      t.containsEmoji = function(e) {
        return b.test(e)
      };
      var S = /^[\t\n\r\x20-\x7E]*$/;
      t.isBasicASCII = function(e) {
        return S.test(e)
      }, t.containsFullWidthCharacter = function(e) {
        for (var t = 0, n = e.length; t < n; t++)
          if (p(e.charCodeAt(t))) return !0;
        return !1
      }, t.isFullWidthCharacter = p, t.lcut = function(e, n) {
        if (e.length < n) return e;
        for (var r = /\b/g, i = 0; r.test(e) && !(e.length - r.lastIndex < n);) i = r.lastIndex, r.lastIndex += 1;
        return e.substring(i).replace(/^\s/, t.empty)
      };
      var _ = /\x1B\x5B[12]?K/g,
        k = /\x1b\[\d+m/g,
        C = /\x1b\[0?m/g;
      t.removeAnsiEscapeCodes = function(e) {
        return e && (e = (e = (e = e.replace(_, "")).replace(k, "")).replace(C, "")), e
      }, t.UTF8_BOM_CHARACTER = String.fromCharCode(65279), t.startsWithUTF8BOM = h, t.stripUTF8BOM = function(e) {
        return h(e) ? e.substr(1) : e
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
    }), define(e[14], t([0, 1, 3, 17]), function(e, t, n, r) {
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
        for (var o = i ? "\\" : "/", c = a(e, o), u = c.length, d = !1, p = "", h = c.length; h <= r; h++)
          if (h === r || 47 === e.charCodeAt(h) || 92 === e.charCodeAt(h)) {
            if (s(e, u, h, "..")) {
              var v = p.lastIndexOf(o),
                g = p.slice(v + 1);
              (c || g.length > 0) && ".." !== g && (p = -1 === v ? "" : p.slice(0, v), d = !0)
            } else s(e, u, h, ".") && (c || p || h < r - 1) && (d = !0);
            if (!d) {
              var m = e.slice(u, h);
              "" !== p && p[p.length - 1] !== o && (p += o), p += m
            }
            u = h + 1, d = !1
          }
        return c + p
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

      function u(e) {
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
      var d = n.isWindows ? /[\\/:\*\?"<>\|]/g : /[\\/]/g,
        p = /^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])$/i;
      t.isValidBasename = function(e) {
          return !(!e || 0 === e.length || /^\s+$/.test(e) || (d.lastIndex = 0, d.test(e) || n.isWindows && p.test(e) || "." === e || ".." === e || n.isWindows && "." === e[e.length - 1] || n.isWindows && e.length !== e.trim().length))
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
          return n.isWindows ? c(e) : u(e)
        }, t.isAbsolute_win32 = c, t.isAbsolute_posix = u
    }), define(e[33], t([0, 1, 7, 3, 14, 17]), function(e, t, n, r, i, o) {
      "use strict";

      function s(e) {
        return r.isWindows && e && ":" === e[1]
      }

      function a(e) {
        return s(e) ? e.charAt(0).toUpperCase() + e.slice(1) : e
      }

      function c(e, t) {
        return e && (r.isMacintosh || r.isLinux) && i.isEqualOrParent(e, t, !r.isLinux) && (e = "~" + e.substr(t.length)), e
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getPathLabel = function(e, t, u) {
        if (!e) return null;
        if ("string" == typeof e && (e = n.default.file(e)), "file" !== e.scheme && "untitled" !== e.scheme) return e.authority + e.path;
        var l = t ? t.getWorkspaceFolder(e) : null;
        if (l) {
          var f = t.getWorkspace().folders.length > 1,
            d = void 0;
          if (d = i.isEqual(l.uri.fsPath, e.fsPath, !r.isLinux) ? "" : i.normalize(o.ltrim(e.fsPath.substr(l.uri.fsPath.length), i.nativeSep), !0), f) {
            var p = i.basename(l.uri.fsPath);
            d = d ? i.join(p, d) : p
          }
          return d
        }
        if (s(e.fsPath)) return i.normalize(a(e.fsPath), !0);
        var h = i.normalize(e.fsPath, !0);
        return !r.isWindows && u && (h = c(h, u.userHome)), h
      }, t.getBaseLabel = function(e) {
        if (!e) return null;
        "string" == typeof e && (e = n.default.file(e));
        var t = i.basename(e.fsPath) || e.fsPath;
        return s(t) ? a(t) : t
      }, t.normalizeDriveLetter = a, t.tildify = c, t.untildify = function(e, t) {
        return e.replace(/^~($|\/|\\)/, t + "$1")
      };
      var u = "…",
        l = "\\\\",
        f = "~";
      t.shorten = function(e) {
        for (var t = new Array(e.length), n = !1, r = 0; r < e.length; r++) {
          var s = e[r];
          if ("" !== s)
            if (s) {
              n = !0;
              var a = "";
              0 === s.indexOf(l) ? (a = s.substr(0, s.indexOf(l) + l.length), s = s.substr(s.indexOf(l) + l.length)) : 0 === s.indexOf(i.nativeSep) ? (a = s.substr(0, s.indexOf(i.nativeSep) + i.nativeSep.length),
                s = s.substr(s.indexOf(i.nativeSep) + i.nativeSep.length)) : 0 === s.indexOf(f) && (a = s.substr(0, s.indexOf(f) + f.length), s = s.substr(s.indexOf(f) + f.length));
              for (var c = s.split(i.nativeSep), d = 1; n && d <= c.length; d++)
                for (var p = c.length - d; n && p >= 0; p--) {
                  n = !1;
                  for (var h = c.slice(p, p + d).join(i.nativeSep), v = 0; !n && v < e.length; v++)
                    if (v !== r && e[v] && e[v].indexOf(h) > -1) {
                      var g = p + d === c.length,
                        m = p > 0 && e[v].indexOf(i.nativeSep) > -1 ? i.nativeSep + h : h,
                        y = o.endsWith(e[v], m);
                      n = !g || y
                    }
                  if (!n) {
                    var w = "";
                    (o.endsWith(c[0], ":") || "" !== a) && (1 === p && (p = 0, d++, h = c[0] + i.nativeSep + h), p > 0 && (w = c[0] + i.nativeSep), w = a + w), p > 0 && (w = w + u + i.nativeSep), w += h, p + d < c.length && (w = w + i.nativeSep + u), t[r] = w
                  }
                }
              n && (t[r] = s)
            } else t[r] = s;
          else t[r] = "." + i.nativeSep
        }
        return t
      };
      var d;
      ! function(e) {
        e[e.TEXT = 0] = "TEXT", e[e.VARIABLE = 1] = "VARIABLE", e[e.SEPARATOR = 2] = "SEPARATOR"
      }(d || (d = {})), t.template = function(e, t) {
        void 0 === t && (t = Object.create(null));
        for (var n, r = [], i = !1, o = "", s = 0; s < e.length; s++)
          if ("$" === (n = e[s]) || i && "{" === n) o && r.push({
            value: o,
            type: d.TEXT
          }), o = "", i = !0;
          else if ("}" === n && i) {
          var a = t[o];
          if ("string" == typeof a) a.length && r.push({
            value: a,
            type: d.VARIABLE
          });
          else if (a) {
            var c = r[r.length - 1];
            c && c.type === d.SEPARATOR || r.push({
              value: a.label,
              type: d.SEPARATOR
            })
          }
          o = "", i = !1
        } else o += n;
        return o && !i && r.push({
          value: o,
          type: d.TEXT
        }), r.filter(function(e, t) {
          return e.type !== d.SEPARATOR || [r[t - 1], r[t + 1]].every(function(e) {
            return e && e.type === d.VARIABLE && e.value.length > 0
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
    }), define(e[57], t([0, 1, 14, 17]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.basenameOrAuthority = function(e) {
          return n.basename(e.fsPath) || e.authority
        }, t.isEqualOrParent = function(e, t, r) {
          return e.scheme === t.scheme && e.authority === t.authority && n.isEqualOrParent(e.fsPath, t.fsPath, r)
        },
        t.isEqual = function(e, t, n) {
          return !(e !== t) || !(!e || !t) && (n ? r.equalsIgnoreCase(e.toString(), t.toString()) : e.toString() === t.toString())
        }, t.dirname = function(e) {
          return e.with({
            path: n.dirname(e.path)
          })
        }
    }), define(e[32], t([0, 1]), function(e, t) {
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
            var c = s[i],
              u = 95 !== c.charCodeAt(0),
              l = t[c];
            !l || "object" != typeof l || void 0 === l.value && "function" != typeof l.get && "function" != typeof l.set ? u ? a ? e.forEach(function(e) {
              e[c] = l
            }) : e[c] = l : (r = r || {})[c] = {
              value: l,
              enumerable: u,
              configurable: !0,
              writable: !0
            } : (void 0 === l.enumerable && (l.enumerable = u), n && l.setName && "function" == typeof l.setName && l.setName(n + "." + c), (r = r || {})[c] = l)
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
                  var c = o[s];
                  i[c] || Object.defineProperty(i, c, {
                    value: {},
                    writable: !1,
                    enumerable: !0,
                    configurable: !0
                  }), i = i[c]
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

        function a(e, t) {
          var n;
          n = t && "object" == typeof t && "function" == typeof t.then ? W : A, e._value = t, e._setState(n)
        }

        function c(e, t, n, r, i, o) {
          return {
            exception: e,
            error: t,
            promise: n,
            handler: o,
            id: r,
            parent: i
          }
        }

        function u(e, t, n, r) {
          var i = n._isException,
            o = n._errorId;
          return c(i ? t : null, i ? null : t, e, o, n, r)
        }

        function l(e, t, n) {
          var r = n._isException,
            i = n._errorId;
          return b(e, i, r), c(r ? t : null, r ? null : t, e, i, n)
        }

        function f(e, t) {
          var n = ++j;
          return b(e, n), c(null, t, e, n)
        }

        function d(e, t) {
          var n = ++j;
          return b(e, n, !0), c(t, null, e, n)
        }

        function p(e, t, n, r) {
          w(e, {
            c: t,
            e: n,
            p: r,
            asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.done")
          })
        }

        function h(e, t, n, r) {
          e._value = t, m(e, t, n, r), e._setState(F)
        }

        function v(t, n) {
          var r = t._value,
            i = t._listeners;
          if (i) {
            t._listeners = null;
            var s, a;
            for (s = 0, a = Array.isArray(i) ? i.length : 1; s < a; s++) {
              var c = 1 === a ? i : i[s],
                u = c.c,
                l = c.promise;
              if (o._traceAsyncOperationCompleted(c.asyncOpID, e.Debug && e.Debug.MS_ASYNC_OP_STATUS_SUCCESS), l) {
                o._traceAsyncCallbackStarting(c.asyncOpID);
                try {
                  l._setCompleteValue(u ? u(r) : r)
                } catch (e) {
                  l._setExceptionValue(e)
                } finally {
                  o._traceAsyncCallbackCompleted()
                }
                l._state !== W && l._listeners && n.push(l)
              } else H.prototype.done.call(t, u)
            }
          }
        }

        function g(t, n) {
          var r = t._value,
            i = t._listeners;
          if (i) {
            t._listeners = null;
            var s, a;
            for (s = 0, a = Array.isArray(i) ? i.length : 1; s < a; s++) {
              var c = 1 === a ? i : i[s],
                l = c.e,
                f = c.promise,
                d = e.Debug && (r && r.name === P ? e.Debug.MS_ASYNC_OP_STATUS_CANCELED : e.Debug.MS_ASYNC_OP_STATUS_ERROR);
              if (o._traceAsyncOperationCompleted(c.asyncOpID, d), f) {
                var p = !1;
                try {
                  l ? (o._traceAsyncCallbackStarting(c.asyncOpID), p = !0, l.handlesOnError || m(f, r, u, t, l), f._setCompleteValue(l(r))) : f._setChainedErrorValue(r, t)
                } catch (e) {
                  f._setExceptionValue(e)
                } finally {
                  p && o._traceAsyncCallbackCompleted()
                }
                f._state !== W && f._listeners && n.push(f)
              } else q.prototype.done.call(t, null, l)
            }
          }
        }

        function m(e, t, n, r, i) {
          if (C._listeners[E]) {
            if (t instanceof Error && t.message === P) return;
            C.dispatchEvent(E, n(e, t, r, i))
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

        function w(e, t) {
          var n = e._listeners;
          n ? (n = Array.isArray(n) ? n : [n]).push(t) : n = t, e._listeners = n
        }

        function b(e, t, n) {
          e._isException = n || !1, e._errorId = t
        }

        function S(e, t, n, r) {
          e._value = t, m(e, t, n, r), e._setState(N)
        }

        function _(e, t) {
          var n;
          n = t && "object" == typeof t && "function" == typeof t.then ? W : R, e._value = t, e._setState(n)
        }

        function k(e, t, n, r) {
          var i = new B(e);
          return w(e, {
            promise: i,
            c: t,
            e: n,
            p: r,
            asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.then")
          }), i
        }
        e.Debug && (e.Debug.setNonUserCodeExceptions = !0);
        var C = new(n.Class.mix(n.Class.define(null, {}, {
          supportedForProcessing: !1
        }), i.eventMixin));
        C._listeners = {};
        var E = "error",
          P = "Canceled",
          O = !1,
          I = {
            promise: 1,
            thenPromise: 2,
            errorPromise: 4,
            exceptionPromise: 8,
            completePromise: 16
          };
        I.all = I.promise | I.thenPromise | I.errorPromise | I.exceptionPromise | I.completePromise;
        var M, T, W, x, D, L, A, R, F, N, j = 1;
        M = {
          name: "created",
          enter: function(e) {
            e._setState(T)
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
        }, T = {
          name: "working",
          enter: s,
          cancel: function(e) {
            e._setState(D)
          },
          done: p,
          then: k,
          _completed: a,
          _error: h,
          _notify: s,
          _progress: y,
          _setCompleteValue: _,
          _setErrorValue: S
        }, W = {
          name: "waiting",
          enter: function(e) {
            var t = e._value;
            if (t instanceof B && t._state !== N && t._state !== R) w(t, {
              promise: e
            });
            else {
              var n = function(r) {
                t._errorId ? e._chainedError(r, t) : (m(e, r, u, t, n), e._error(r))
              };
              n.handlesOnError = !0, t.then(e._completed.bind(e), n, e._progress.bind(e))
            }
          },
          cancel: function(e) {
            e._setState(x)
          },
          done: p,
          then: k,
          _completed: a,
          _error: h,
          _notify: s,
          _progress: y,
          _setCompleteValue: _,
          _setErrorValue: S
        }, x = {
          name: "waiting_canceled",
          enter: function(e) {
            e._setState(L);
            var t = e._value;
            t.cancel && t.cancel()
          },
          cancel: s,
          done: p,
          then: k,
          _completed: a,
          _error: h,
          _notify: s,
          _progress: y,
          _setCompleteValue: _,
          _setErrorValue: S
        }, D = {
          name: "canceled",
          enter: function(e) {
            e._setState(L), e._cancelAction()
          },
          cancel: s,
          done: p,
          then: k,
          _completed: a,
          _error: h,
          _notify: s,
          _progress: y,
          _setCompleteValue: _,
          _setErrorValue: S
        }, L = {
          name: "canceling",
          enter: function(e) {
            var t = new Error(P);
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
        }, A = {
          name: "complete_notify",
          enter: function(e) {
            if (e.done = H.prototype.done, e.then = H.prototype.then, e._listeners)
              for (var t, n = [e]; n.length;)(t = n.shift())._state._notify(t, n);
            e._setState(R)
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
        }, R = {
          name: "success",
          enter: function(e) {
            e.done = H.prototype.done, e.then = H.prototype.then, e._cleanupAction()
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
            if (e.done = q.prototype.done, e.then = q.prototype.then, e._listeners)
              for (var t, n = [e]; n.length;)(t = n.shift())._state._notify(t, n);
            e._setState(N)
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
          _notify: g,
          _progress: s,
          _setCompleteValue: s,
          _setErrorValue: s
        };
        var U, z = n.Class.define(null, {
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
              var t = this._state._setErrorValue(this, e, d);
              return this._run(), t
            },
            _run: function() {
              for (; this._nextState;) this._state = this._nextState, this._nextState = null, this._state.enter(this)
            }
          }, {
            supportedForProcessing: !1
          }),
          B = n.Class.derive(z, function(e) {
            O && (!0 === O || O & I.thenPromise) && (this._stack = K._getStack()), this._creator = e, this._setState(M), this._run()
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
            O && (!0 === O || O & I.errorPromise) && (this._stack = K._getStack()), this._value = e, m(this, e, f)
          }, {
            cancel: function() {},
            done: function(e, t) {
              var n = this._value;
              if (t) try {
                t.handlesOnError || m(null, n, u, this, t);
                var r = t(n);
                return void(r && "object" == typeof r && "function" == typeof r.done && r.done())
              } catch (e) {
                n = e
              }
              n instanceof Error && n.message === P || K._doneHandler(n)
            },
            then: function(e, t) {
              if (!t) return this;
              var n, r = this._value;
              try {
                t.handlesOnError || m(null, r, u, this, t), n = new H(t(r))
              } catch (e) {
                n = e === r ? this : new V(e)
              }
              return n
            }
          }, {
            supportedForProcessing: !1
          }),
          V = n.Class.derive(q, function(e) {
            O && (!0 === O || O & I.exceptionPromise) && (this._stack = K._getStack()), this._value = e, m(this, e, d)
          }, {}, {
            supportedForProcessing: !1
          }),
          H = n.Class.define(function(e) {
            if (O && (!0 === O || O & I.completePromise) && (this._stack = K._getStack()), e && "object" == typeof e && "function" == typeof e.then) {
              var t = new B(null);
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
                K._doneHandler(e)
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
          K = n.Class.derive(z, function(e, t) {
            O && (!0 === O || O & I.promise) && (this._stack = K._getStack()), this._oncancel = t, this._setState(M), this._run();
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
                C.dispatchEvent("error", e)
              }
            },
            _cleanupAction: function() {
              this._oncancel = null
            }
          }, {
            addEventListener: function(e, t, n) {
              C.addEventListener(e, t, n)
            },
            any: function(e) {
              return new K(function(t, n) {
                var r = Object.keys(e);
                0 === r.length && t();
                var i = 0;
                r.forEach(function(o) {
                  K.as(e[o]).then(function() {
                    t({
                      key: o,
                      value: e[o]
                    })
                  }, function(s) {
                    s instanceof Error && s.name === P ? ++i === r.length && t(K.cancel) : n({
                      key: o,
                      value: e[o]
                    })
                  })
                })
              }, function() {
                Object.keys(e).forEach(function(t) {
                  var n = K.as(e[t]);
                  "function" == typeof n.cancel && n.cancel()
                })
              })
            },
            as: function(e) {
              return e && "object" == typeof e && "function" == typeof e.then ? e : new H(e)
            },
            cancel: {
              get: function() {
                return U = U || new q(new r(P))
              }
            },
            dispatchEvent: function(e, t) {
              return C.dispatchEvent(e, t)
            },
            is: function(e) {
              return e && "object" == typeof e && "function" == typeof e.then
            },
            join: function(e) {
              return new K(function(t, n, r) {
                var i = Object.keys(e),
                  o = Array.isArray(e) ? [] : {},
                  s = Array.isArray(e) ? [] : {},
                  a = 0,
                  c = i.length,
                  u = function(e) {
                    if (0 == --c) {
                      var a = Object.keys(o).length;
                      if (0 === a) t(s);
                      else {
                        var u = 0;
                        i.forEach(function(e) {
                          var t = o[e];
                          t instanceof Error && t.name === P && u++
                        }), u === a ? t(K.cancel) : n(o)
                      }
                    } else r({
                      Key: e,
                      Done: !0
                    })
                  };
                i.forEach(function(t) {
                  var n = e[t];
                  void 0 === n ? a++ : K.then(n, function(e) {
                    s[t] = e, u(t)
                  }, function(e) {
                    o[t] = e, u(t)
                  })
                }), 0 !== (c -= a) || t(s)
              }, function() {
                Object.keys(e).forEach(function(t) {
                  var n = K.as(e[t]);
                  "function" == typeof n.cancel && n.cancel()
                })
              })
            },
            removeEventListener: function(e, t, n) {
              C.removeEventListener(e, t, n)
            },
            supportedForProcessing: !1,
            then: function(e, t, n, r) {
              return K.as(e).then(t, n, r)
            },
            thenEach: function(e, t, n, r) {
              var i = Array.isArray(e) ? [] : {};
              return Object.keys(e).forEach(function(o) {
                i[o] = K.as(e[o]).then(t, n, r)
              }), K.join(i)
            },
            timeout: function(n, r) {
              var i = function(n) {
                var r;
                return new K(function(i) {
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
            _veryExpensiveTagWithStack_tag: I,
            _getStack: function() {
              if (e.Debug && e.Debug.debuggerEnabled) try {
                throw new Error
              } catch (e) {
                return e.stack
              }
            },
            _cancelBlocker: function(e, t) {
              if (!K.is(e)) return K.wrap(e);
              var n, r, i = new K(function(e, t) {
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
        return Object.defineProperties(K, i.createEventProperties(E)), K._doneHandler = function(e) {
          t._setImmediate(function() {
            throw e
          })
        }, {
          PromiseStateMachine: z,
          Promise: K,
          state_created: M
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
    }(), define(e[2], t([144]), function(e) {
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
          }).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
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
                  o[2] && a.ops.pop(),
                    a.trys.pop();
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
  define(e[21], t([0, 1, 2]), function(e, t, n) {
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
        for (var o = 0, s = 0, c = 0; o < r.length && s < i.length;) {
          var u = t(r[o], i[s]);
          e[c++] = u <= 0 ? r[o++] : i[s++]
        }
        for (; o < r.length;) e[c++] = r[o++];
        for (; s < i.length;) e[c++] = i[s++]
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
          c = t[s],
          u = n(a, c);
        0 === u ? (o += 1, s += 1) : u < 0 ? (r(o, 1, []), o += 1) : u > 0 && (r(o, 0, [c]), s += 1)
      }
      return i
    }

    function u(e, t, n, r, i) {
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
        n && 0 === t(n[0], a) ? n.push(a) : (n = [a],
          r.push(n))
      }
      return r
    }, t.sortedDiff = c, t.delta = function(e, t, n) {
      for (var r = [], i = [], o = 0, s = c(e, t, n); o < s.length; o++) {
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
      return u(e, t, r, n, e.length), r
    }, t.topAsync = function(e, t, o, s) {
      var a = this;
      if (0 === o) return n.TPromise.as([]);
      var c = !1;
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
                if (c) throw new Error("canceled");
                u(e, t, r, a, l), i.label = 4;
              case 4:
                return a = l, l = Math.min(l + s, n), [3, 1];
              case 5:
                return [2, r]
            }
          })
        }).then(n, l)
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
  }), define(e[27], t([0, 1, 3, 10, 2]), function(e, t, n, r, i) {
    "use strict";

    function o(e) {
      s(e) || t.errorHandler.onUnexpectedError(e)
    }

    function s(e) {
      return e instanceof Error && e.name === u && e.message === u
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
    var c = function() {
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
    t.ErrorHandler = c, t.errorHandler = new c, t.setUnexpectedErrorHandler = function(e) {
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
    var u = "Canceled";
    t.isPromiseCanceledError = s, t.canceled = function() {
      var e = new Error(u);
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
  }), define(e[4], t([0, 1, 13, 2, 51, 27, 92]), function(e, t, n, r, i, o, s) {
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

    function c(e, t) {
      return function(n, r, i) {
        return void 0 === r && (r = null), e(function(e) {
          return n.call(r, t(e))
        }, null, i)
      }
    }

    function u(e, t) {
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
    var d = function() {
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
            var c;
            return c = {
              dispose: function() {
                c.dispose = e._noop, t._disposed || (a(), t._options && t._options.onLastListenerRemove && t._listeners.isEmpty() && t._options.onLastListenerRemove(t))
              }
            }, Array.isArray(i) && i.push(c), c
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
    t.Emitter = d;
    var p = function() {
      function e() {
        var e = this;
        this.hasListeners = !1, this.events = [], this.emitter = new d({
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
      var t, n = new d({
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
      var t = new d,
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
    }, t.once = a, t.anyEvent = function() {
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
        c = new d({
          onFirstListenerAdd: function() {
            i = e(function(e) {
              a++, o = t(o, e), r && !s && c.fire(o), clearTimeout(s), s = setTimeout(function() {
                var e = o;
                o = void 0, s = void 0, (!r || a > 1) && c.fire(e), a = 0
              }, n)
            })
          },
          onLastListenerRemove: function() {
            i.dispose()
          }
        });
      return c.event
    };
    var h = function() {
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
    t.EventBufferer = h, t.mapEvent = c, t.forEach = u, t.filterEvent = l;
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
        return new e(c(this._event, t))
      }, e.prototype.forEach = function(t) {
        return new e(u(this._event, t))
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
      return c(a(e), function(e) {
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
        o = new d({
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
        i = new d({
          onListenerDidAdd: function(e, n, i) {
            t ? setTimeout(function() {
              return r(n, i)
            }) : r(n, i)
          }
        });
      return i.event
    };
    var g = function() {
      function e() {
        this.emitter = new d, this.event = this.emitter.event, this.disposable = n.empty
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
    t.Relay = g, t.fromNodeEventEmitter = function(e, t, n) {
      void 0 === n && (n = function(e) {
        return e
      });
      var r = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return i.fire(n.apply(void 0, e))
        },
        i = new d({
          onFirstListenerAdd: function() {
            return e.on(t, r)
          },
          onLastListenerRemove: function() {
            return e.removeListener(t, r)
          }
        });
      return i.event
    }
  }), define(e[74], t([0, 1, 4]), function(e, t, n) {
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
  }), define(e[26], t([0, 1, 27, 3, 2, 74, 13, 4]), function(e, t, r, i, o, s, a, c) {
    "use strict";

    function u(e) {
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
    }), t.isThenable = u, t.toThenable = function(e) {
      return u(e) ? e : o.TPromise.as(e)
    }, t.asWinJsPromise = function(e) {
      var t = new s.CancellationTokenSource;
      return new o.TPromise(function(n, r, i) {
        var s = e(t.token);
        s instanceof o.TPromise ? s.then(n, r, i) : u(s) ? s.then(n, r) : n(s)
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
    var d = function() {
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
    t.Throttler = d;
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
    var h = function() {
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
    t.Delayer = h;
    var v = function(e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return n.throttler = new d, n
      }
      return n(t, e), t.prototype.trigger = function(t, n) {
        var r = this;
        return e.prototype.trigger.call(this, function() {
          return r.throttler.queue(t)
        }, n)
      }, t
    }(h);
    t.ThrottledDelayer = v;
    var g = function() {
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
    t.Barrier = g;
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
        this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onFinished = new c.Emitter
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
    var w = function(e) {
      function t() {
        return e.call(this, 1) || this
      }
      return n(t, e), t
    }(y);
    t.Queue = w;
    var b = function() {
      function e() {
        this.queues = Object.create(null)
      }
      return e.prototype.queueFor = function(e) {
        var t = this,
          n = e.toString();
        if (!this.queues[n]) {
          var r = new w;
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
    var S = function(e) {
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
    t.TimeoutTimer = S;
    var _ = function(e) {
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
    }(a.Disposable);
    t.IntervalTimer = _;
    var k = function() {
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
    t.RunOnceScheduler = k, t.nfcall = function(e) {
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
    var C = function(e) {
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
    }(c.Emitter);
    t.ThrottledEmitter = C
  }), define(e[77], t([0, 1, 21, 17, 14, 35, 2]), function(e, t, n, r, i, o, s) {
    "use strict";

    function a(e) {
      switch (e) {
        case 0:
          return "";
        case 1:
          return b + "*?";
        default:
          return "(?:" + w + "|" + b + "+" + w + "|" + w + b + "+)*?"
      }
    }

    function c(e, t) {
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

    function u(e) {
      if (!e) return "";
      var t = "",
        n = c(e, y);
      if (n.every(function(e) {
          return e === m
        })) t = ".*";
      else {
        var i = !1;
        n.forEach(function(e, o) {
          if (e !== m) {
            for (var s, l = !1, f = "", d = !1, p = "", h = 0; h < e.length; h++)
              if ("}" !== (s = e[h]) && l) f += s;
              else if (!d || "]" === s && p) switch (s) {
              case "{":
                l = !0;
                continue;
              case "[":
                d = !0;
                continue;
              case "}":
                var v = "(?:" + c(f, ",").map(function(e) {
                  return u(e)
                }).join("|") + ")";
                t += v, l = !1, f = "";
                break;
              case "]":
                t += "[" + p + "]", d = !1, p = "";
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
            o < n.length - 1 && n[o + 1] !== m && (t += w), i = !1
          } else i || (t += a(2), i = !0)
        })
      }
      return t
    }

    function l(e, t) {
      if (!e) return T;
      var i;
      i = "string" != typeof e ? e.pattern : e;
      var o = (i = i.trim()) + "_" + !!t.trimForExclusions,
        s = I.get(o);
      if (s) return f(s, e);
      var a;
      if (_.test(i)) {
        var c = i.substr(4);
        s = function(e, t) {
          return e && r.endsWith(e, c) ? i : null
        }
      } else s = (a = k.exec(d(i, t))) ? function(e, t) {
        var n = "/" + e,
          i = "\\" + e,
          o = function(o, s) {
            return o ? s ? s === e ? t : null : o === e || r.endsWith(o, n) || r.endsWith(o, i) ? t : null : null
          },
          s = [e];
        return o.basenames = s, o.patterns = [t], o.allBasenames = s, o
      }(a[1], i) : (t.trimForExclusions ? E : C).test(i) ? function(e, t) {
        var r = g(e.slice(1, -1).split(",").map(function(e) {
            return l(e, t)
          }).filter(function(e) {
            return e !== T
          }), e),
          i = r.length;
        if (!i) return T;
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
      }(i, t) : (a = P.exec(d(i, t))) ? p(a[1].substr(1), i, !0) : (a = O.exec(d(i, t))) ? p(a[1], i, !1) : function(e) {
        try {
          var t = new RegExp("^" + u(e) + "$");
          return function(n, r) {
            return t.lastIndex = 0, n && t.test(n) ? e : null
          }
        } catch (e) {
          return T
        }
      }(i);
      return I.set(o, s), f(s, e)
    }

    function f(e, t) {
      return "string" == typeof t ? e : function(n, r) {
        return i.isEqualOrParent(n, t.base) ? e(i.normalize(t.pathToRelative(t.base, n)), r) : null
      }
    }

    function d(e, t) {
      return t.trimForExclusions && r.endsWith(e, "/**") ? e.substr(0, e.length - 2) : e
    }

    function p(e, t, n) {
      var o = i.nativeSep !== i.sep ? e.replace(S, i.nativeSep) : e,
        s = i.nativeSep + o,
        a = n ? function(e, n) {
          return e && (e === o || r.endsWith(e, s)) ? t : null
        } : function(e, n) {
          return e && e === o ? t : null
        };
      return a.allPaths = [(n ? "*/" : "./") + e], a
    }

    function h(e, t) {
      if (void 0 === t && (t = {}), !e) return M;
      if ("string" == typeof e || v(e)) {
        var r = l(e, t);
        if (r === T) return M;
        var o = function(e, t) {
          return !!r(e, t)
        };
        return r.allBasenames && (o.allBasenames = r.allBasenames), r.allPaths && (o.allPaths = r.allPaths), o
      }
      return function(e, t) {
        var r = g(Object.getOwnPropertyNames(e).map(function(n) {
            return function(e, t, n) {
              if (!1 === t) return T;
              var r = l(e, n);
              if (r === T) return T;
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
            return e !== T
          })),
          o = r.length;
        if (!o) return T;
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
            c = n.first(r, function(e) {
              return !!e.allBasenames
            });
          c && (a.allBasenames = c.allBasenames);
          var u = r.reduce(function(e, t) {
            return t.allPaths ? e.concat(t.allPaths) : e
          }, []);
          return u.length && (a.allPaths = u), a
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
              if (!u) {
                u = !0;
                var e = n();
                c = s.TPromise.is(e) ? e.then(o) : o(e)
              }
              return c
            }
            for (var c, u = !n, l = 0, f = r.length; l < f; l++) {
              var d = r[l](e, t, a);
              if (d) return d
            }
            return null
          },
          d = n.first(r, function(e) {
            return !!e.allBasenames
          });
        d && (f.allBasenames = d.allBasenames);
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

    function g(e, t) {
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
      var c = e.filter(function(e) {
        return !e.basenames
      });
      return c.push(a), c
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.getEmptyExpression = function() {
      return Object.create(null)
    };
    var m = "**",
      y = "/",
      w = "[/\\\\]",
      b = "[^/\\\\]",
      S = /\//g;
    t.splitGlobAware = c;
    var _ = /^\*\*\/\*\.[\w\.-]+$/,
      k = /^\*\*\/([\w\.-]+)\/?$/,
      C = /^{\*\*\/[\*\.]?[\w\.-]+\/?(,\*\*\/[\*\.]?[\w\.-]+\/?)*}$/,
      E = /^{\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?(,\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?)*}$/,
      P = /^\*\*((\/[\w\.-]+)+)\/?$/,
      O = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/,
      I = new o.LRUCache(1e4),
      M = function() {
        return !1
      },
      T = function() {
        return null
      };
    t.match = function(e, t, n) {
      return !(!e || !t) && h(e)(t, void 0, n)
    }, t.parse = h, t.isRelativePattern = v, t.parseToAsync = function(e, t) {
      var n = h(e, t);
      return function(e, t, r) {
        var i = n(e, t, r);
        return i instanceof s.TPromise ? i : s.TPromise.as(i)
      }
    }, t.getBasenameTerms = function(e) {
      return e.allBasenames || []
    }, t.getPathTerms = function(e) {
      return e.allPaths || []
    }
  }), define(e[82], t([0, 1, 14, 17, 77]), function(e, t, n, r, i) {
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
      u.push(r), r.userConfigured ? f.push(r) : l.push(r), t && !r.userConfigured && u.forEach(function(e) {
        e.mime === r.mime || e.userConfigured || (r.extension && e.extension === r.extension && console.warn("Overwriting extension <<" + r.extension + ">> to now point to mime <<" + r.mime + ">>"), r.filename && e.filename === r.filename && console.warn("Overwriting filename <<" + r.filename + ">> to now point to mime <<" + r.mime + ">>"), r.filepattern && e.filepattern === r.filepattern && console.warn("Overwriting filepattern <<" + r.filepattern + ">> to now point to mime <<" + r.mime + ">>"), r.firstline && e.firstline === r.firstline && console.warn("Overwriting firstline <<" + r.firstline + ">> to now point to mime <<" + r.mime + ">>"))
      })
    }

    function s(e, i) {
      if (!e) return [t.MIME_UNKNOWN];
      e = e.toLowerCase();
      var o = n.basename(e),
        s = a(e, o, f);
      if (s) return [s, t.MIME_TEXT];
      var c = a(e, o, l);
      if (c) return [c, t.MIME_TEXT];
      if (i) {
        var d = function(e) {
          r.startsWithUTF8BOM(e) && (e = e.substr(1));
          if (e.length > 0)
            for (var t = 0; t < u.length; ++t) {
              var n = u[t];
              if (n.firstline) {
                var i = e.match(n.firstline);
                if (i && i.length > 0) return n.mime
              }
            }
          return null
        }(i);
        if (d) return [d, t.MIME_TEXT]
      }
      return [t.MIME_UNKNOWN]
    }

    function a(e, t, n) {
      for (var o, s, a, c = n.length - 1; c >= 0; c--) {
        var u = n[c];
        if (t === u.filenameLowercase) {
          o = u;
          break
        }
        if (u.filepattern && (!s || u.filepattern.length > s.filepattern.length)) {
          var l = u.filepatternOnPath ? e : t;
          i.match(u.filepatternLowercase, l) && (s = u)
        }
        u.extension && (!a || u.extension.length > a.extension.length) && r.endsWith(t, u.extensionLowercase) && (a = u)
      }
      return o ? o.mime : s ? s.mime : a ? a.mime : null
    }

    function c(e) {
      return !e || ("string" == typeof e ? e === t.MIME_BINARY || e === t.MIME_TEXT || e === t.MIME_UNKNOWN : 1 === e.length && c(e[0]))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.MIME_TEXT = "text/plain", t.MIME_BINARY = "application/octet-stream", t.MIME_UNKNOWN = "application/unknown";
    var u = [],
      l = [],
      f = [];
    t.registerTextMime = o, t.clearTextMimes = function(e) {
      e ? (u = u.filter(function(e) {
        return !e.userConfigured
      }), f = []) : (u = [], l = [], f = [])
    }, t.guessMimeTypes = s, t.isUnspecific = c, t.suggestFilename = function(e, t) {
      for (var n = 0; n < u.length; n++) {
        var r = u[n];
        if (!r.userConfigured && r.id === e && r.extension) return t + r.extension
      }
      return t
    }
  }), define(e[90], t([0, 1, 24, 53, 2, 51]), function(e, t, n, r, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.checksum = function(e, t) {
      return new i.TPromise(function(t, i) {
        var s = n.createReadStream(e),
          a = r.createHash("sha1");
        s.pipe(a);
        var c = o.once(function(e, n) {
          s.removeAllListeners(), a.removeAllListeners(), e ? i(e) : t(n)
        });
        s.once("error", c), s.once("end", c), a.once("error", c), a.once("data", function(e) {
          return c(null, e.toString("hex"))
        })
      }).then(function(e) {
        return e !== t ? i.TPromise.wrapError(new Error("Hash mismatch")) : i.TPromise.as(null)
      })
    }
  }), define(e[98], t([0, 1, 102]), function(e, t, n) {
    "use strict";

    function r(e, t, i) {
      if (n.ok(e, "Missing first parameter"), n.ok("function" == typeof t, "Second parameter must be a function that is called for each element"),
        n.ok("function" == typeof i, "Third parameter must be a function that is called on error and success"), "function" == typeof e) try {
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
      e.forEach(function(a, c) {
        t(a, function(t, a) {
          if (t ? (o = !0, r[c] = null, i[c] = t) : (r[c] = a, i[c] = null), ++s === e.length) return n(o ? i : null, r)
        })
      })
    }, t.loop = r, t.sequence = i
  }), define(e[29], t([0, 1, 32, 17, 3, 98, 24, 5, 2, 26]), function(e, t, n, r, i, o, s, a, c, u) {
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

    function d(e, t, n, r) {
      r || (r = Object.create(null)), s.stat(e, function(i, o) {
        if (i) return n(i);
        if (!o.isDirectory()) return function(e, t, n, r) {
          var i = !1,
            o = s.createReadStream(e),
            a = s.createWriteStream(t, {
              mode: n
            }),
            c = function(e) {
              i || (i = !0, r(e))
            };
          o.on("error", c), a.on("error", c), o.on("end", function() {
            a.end(function() {
              i || (i = !0, s.chmod(t, n, r))
            })
          }), o.pipe(a, {
            end: !1
          })
        }(e, t, 511 & o.mode, n);
        if (r[e]) return n(null);
        r[e] = !0;
        var c = function() {
          f(e, function(i, o) {
            w(o, function(n, i) {
              d(a.join(e, n), a.join(t, n), function(e) {
                return i(e, void 0)
              }, r)
            }, n)
          })
        };
        p(t, 511 & o.mode).done(c, c)
      })
    }

    function p(e, t) {
      var n = function() {
        return u.nfcall(s.mkdir, e, t).then(null, function(t) {
          return "EEXIST" === t.code ? u.nfcall(s.stat, e).then(function(t) {
            return t.isDirectory ? null : c.TPromise.wrapError(new Error("'" + e + "' exists and is not a directory."))
          }) : c.TPromise.wrapError(t)
        })
      };
      return e === a.dirname(e) ? c.TPromise.as(!0) : n().then(null, function(r) {
        return "ENOENT" === r.code ? p(a.dirname(e), t).then(n) : c.TPromise.wrapError(r)
      })
    }

    function h(e, t) {
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
                h(a.join(e, n), function(n) {
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

    function g(e) {
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
    var w = o.loop;
    t.readdirSync = l, t.readdir = f, t.copy = d, t.mkdirp = p, t.del = function(e, t, i, o) {
      s.exists(e, function(c) {
        if (!c) return i(null);
        s.stat(e, function(c, u) {
          if (c || !u) return i(c);
          if ("." === e[e.length - 1] || r.endsWith(e, "./") || r.endsWith(e, ".\\")) return h(e, i);
          var l = a.join(t, n.generateUuid());
          s.rename(e, l, function(t) {
            if (t) return h(e, i);
            i(null),
              h(l, function(e) {
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
        return o ? o && e.toLowerCase() !== t.toLowerCase() && "EXDEV" === o.code || r.endsWith(e, ".") ? d(e, t, function(t) {
          if (t) return n(t);
          h(e, i)
        }) : n(o) : i(null)
      })
    };
    var b = !0;
    t.writeFileAndFlush = function(e, t, n, r) {
      if (n = g(n), !b) return s.writeFile(e, t, n, r);
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
      if (n = g(n), !b) return s.writeFileSync(e, t, n);
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
  }), define(e[63], t([0, 1, 24, 5, 8, 13, 4, 39, 29]), function(e, t, n, r, i, o, s, a, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = function() {
      function e(e, t) {
        void 0 === t && (t = {
            changeBufferDelay: 0,
            defaultConfig: Object.create(null),
            onError: function(e) {
              return console.error(e)
            }
          }), this._path = e, this.options = t, this.disposables = [], this.configName = r.basename(this._path),
          this._onDidUpdateConfiguration = new s.Emitter, this.disposables.push(this._onDidUpdateConfiguration), this.registerWatcher(), this.initAsync()
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
          var i = c.watch(e, function(e, n) {
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
    t.ConfigWatcher = u
  }), define(e[55], t([0, 1, 2, 27, 32, 23, 35]), function(e, t, n, r, i, o, s) {
    "use strict";

    function a() {
      return c || (c = new n.TPromise(function(t) {
        n.TPromise.join([new Promise(function(t, n) {
          e(["crypto"], t, n)
        }), new Promise(function(t, n) {
          e(["getmac"], t, n)
        })]).then(function(e) {
          var n = e[0],
            i = e[1];
          try {
            i.getMac(function(e, r) {
              t(e ? void 0 : n.createHash("sha256").update(r, "utf8").digest("hex"))
            })
          } catch (e) {
            r.onUnexpectedError(e), t(void 0)
          }
        }, function(e) {
          r.onUnexpectedError(e), t(void 0)
        })
      }).then(function(e) {
        return e || i.generateUuid()
      }))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.virtualMachineHint = new(function() {
      function e() {}
      return e.prototype._isVirtualMachineMacAdress = function(e) {
        return this._virtualMachineOUIs || (this._virtualMachineOUIs = s.TernarySearchTree.forStrings(), this._virtualMachineOUIs.set("00-50-56", !0), this._virtualMachineOUIs.set("00-0C-29", !0), this._virtualMachineOUIs.set("00-05-69", !0), this._virtualMachineOUIs.set("00-03-FF", !0), this._virtualMachineOUIs.set("00-1C-42", !0), this._virtualMachineOUIs.set("00-16-3E", !0), this._virtualMachineOUIs.set("08-00-27", !0), this._virtualMachineOUIs.set("00:50:56", !0), this._virtualMachineOUIs.set("00:0C:29", !0), this._virtualMachineOUIs.set("00:05:69", !0),
          this._virtualMachineOUIs.set("00:03:FF", !0), this._virtualMachineOUIs.set("00:1C:42", !0), this._virtualMachineOUIs.set("00:16:3E", !0), this._virtualMachineOUIs.set("08:00:27", !0)), this._virtualMachineOUIs.findSubstr(e)
      }, e.prototype.value = function() {
        if (void 0 === this._value) {
          var e = 0,
            t = 0,
            n = o.networkInterfaces();
          for (var r in n)
            if (Object.prototype.hasOwnProperty.call(n, r))
              for (var i = 0, s = n[r]; i < s.length; i++) {
                var a = s[i],
                  c = a.mac;
                a.internal || (t += 1, this._isVirtualMachineMacAdress(c.toUpperCase()) && (e += 1))
              }
          this._value = t > 0 ? e / t : 0
        }
        return this._value
      }, e
    }());
    var c;
    t.getMachineId = a
  }), define(e[76], t([0, 1, 7]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n.default.parse(e.toUrl("paths")).fsPath,
      i = e.__$__nodeRequire(r);
    t.getAppDataPath = i.getAppDataPath, t.getDefaultUserDataPath = i.getDefaultUserDataPath
  }), define(e[25], t([0, 1, 2, 29, 5, 26, 24, 23, 3, 4]), function(e, t, n, r, i, o, s, a, c, u) {
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
          return h(e)
        }) : v(e)
      }, function(e) {
        if ("ENOENT" !== e.code) return n.TPromise.wrapError(e)
      })
    }

    function d(e) {
      return o.nfcall(s.stat, e)
    }

    function p(e) {
      return o.nfcall(s.lstat, e)
    }

    function h(e) {
      return o.nfcall(s.rmdir, e)
    }

    function v(e) {
      return o.nfcall(s.unlink, e)
    }

    function g(e, t, n) {
      return function(e) {
        var t = y[e];
        if (!t) {
          t = new o.Queue, y[e] = t;
          u.once(t.onFinished)(function() {
            delete y[e], t.dispose()
          })
        }
        return t
      }(function(e) {
        var t = e;
        (c.isWindows || c.isMacintosh) && (t = t.toLowerCase());
        return t
      }(e)).queue(function() {
        return o.nfcall(r.writeFileAndFlush, e, t, n)
      })
    }

    function m(e) {
      return d(e).then(function(e) {
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
    }, t.stat = d, t.lstat = p, t.rename = function(e, t) {
      return o.nfcall(s.rename, e, t)
    }, t.rmdir = h, t.unlink = v, t.symlink = function(e, t, n) {
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
    t.writeFile = g, t.readDirsInDir = function(e) {
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
      return d(e).then(function(e) {
        return e.isFile()
      }, function() {
        return !1
      })
    };
    var w = a.tmpdir();
    t.del = function(e, t) {
      return void 0 === t && (t = w), o.nfcall(r.del, e, t)
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
      },
      "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
      }), s
  };
  define(e[78], t([0, 1, 80, 10, 2]), function(e, t, n, o, s) {
      "use strict";

      function a(t, a) {
        return void 0 === a && (a = {}), r(this, void 0, s.TPromise, function() {
          var r, s, c, u, l, f;
          return i(this, function(i) {
            switch (i.label) {
              case 0:
                return r = n.parse(t), (s = a.proxyUrl || function(e) {
                  return "http:" === e.protocol ? process.env.HTTP_PROXY || process.env.http_proxy || null : "https:" === e.protocol ? process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || null : null
                }(r)) ? (c = n.parse(s), /^https?:$/.test(c.protocol) ? (u = {
                  host: c.hostname,
                  port: Number(c.port),
                  auth: c.auth,
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
                return l = f, [2, new l(u)]
            }
          })
        })
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        t.getProxyAgent = a
    }), define(e[81], t([0, 1, 24, 5]), function(e, t, n, r) {
      "use strict";

      function i(e) {
        var t = [];
        return e.forEach(function(e, n) {
          return t.push({
            name: n,
            count: e
          })
        }), t.sort(function(e, t) {
          return t.count - e.count
        })
      }

      function o(e, t) {
        var o = [{
            tag: "grunt.js",
            pattern: /^gruntfile\.js$/i
          }, {
            tag: "gulp.js",
            pattern: /^gulpfile\.js$/i
          }, {
            tag: "tsconfig.json",
            pattern: /^tsconfig\.json$/i
          }, {
            tag: "package.json",
            pattern: /^package\.json$/i
          }, {
            tag: "jsconfig.json",
            pattern: /^jsconfig\.json$/i
          }, {
            tag: "tslint.json",
            pattern: /^tslint\.json$/i
          }, {
            tag: "eslint.json",
            pattern: /^eslint\.json$/i
          }, {
            tag: "tasks.json",
            pattern: /^tasks\.json$/i
          }, {
            tag: "launch.json",
            pattern: /^launch\.json$/i
          }, {
            tag: "settings.json",
            pattern: /^settings\.json$/i
          }, {
            tag: "webpack.config.js",
            pattern: /^webpack\.config\.js$/i
          }, {
            tag: "project.json",
            pattern: /^project\.json$/i
          }, {
            tag: "makefile",
            pattern: /^makefile$/i
          }, {
            tag: "sln",
            pattern: /^.+\.sln$/i
          }, {
            tag: "csproj",
            pattern: /^.+\.csproj$/i
          }, {
            tag: "cmake",
            pattern: /^.+\.cmake$/i
          }],
          s = new Map,
          a = new Map,
          c = function(e, t, i, o) {
            try {
              for (var s = 0, a = n.readdirSync(e); s < a.length; s++) {
                var u = a[s];
                if (o.maxReached) return;
                try {
                  if (n.statSync(r.join(e, u)).isDirectory()) - 1 === i.indexOf(u) && c(r.join(e, u), t, i, o);
                  else {
                    if (o.count >= 2e4) return void(o.maxReached = !0);
                    o.count++, t(u)
                  }
                } catch (e) {}
              }
            } catch (e) {}
          },
          u = {
            count: 0,
            maxReached: !1
          };
        return c(e, function(e) {
          if (e.lastIndexOf(".") >= 0) {
            var t = e.split(".").pop();
            t && function(e) {
              s.has(e) ? s.set(e, s.get(e) + 1) : s.set(e, 1)
            }(t)
          }! function(e) {
            for (var t = 0, n = o; t < n.length; t++) {
              var r = n[t];
              r.pattern.test(e) && (a.has(r.tag) ? a.set(r.tag, a.get(r.tag) + 1) : a.set(r.tag, 1))
            }
          }(e)
        }, t, u), {
          configFiles: i(a),
          fileTypes: i(s),
          fileCount: u.count,
          maxFilesReached: u.maxReached
        }
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.collectLaunchConfigs = function(e) {
          var t = new Map,
            o = r.join(e, ".vscode", "launch.json");
          if (n.existsSync(o)) try {
            var s = n.readFileSync(o).toString(),
              a = JSON.parse(s);
            if (a.configurations)
              for (var c = 0, u = a.configurations; c < u.length; c++) {
                var l = u[c].type;
                l && (t.has(l) ? t.set(l, t.get(l) + 1) : t.set(l, 1))
              }
          } catch (e) {}
          return i(t)
        },
        t.collectWorkspaceStats = o
    }), define(e[31], t([0, 1, 2, 13, 4]), function(e, t, n, r, i) {
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
          },
          e.prototype.onCommonRequest = function(e) {
            var t, i = this,
              s = this.channels[e.channelName];
            try {
              t = s.call(e.name, e.arg)
            } catch (e) {
              t = n.TPromise.wrapError(e)
            }
            var a = e.id,
              c = t.then(function(t) {
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
              return c.cancel()
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
      var c = function() {
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
                  a.stack = e.data.stack,
                    a.name = e.data.name, i(a);
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
          this.protocolListener.dispose(), this.protocolListener = null,
            this.activeRequests.forEach(function(e) {
              return e.cancel()
            }), this.activeRequests = []
        }, e
      }();
      t.ChannelClient = c;
      var u = function() {
        function e(e) {
          var t = this;
          this.channels = Object.create(null), this.channelClients = Object.create(null), this.onClientAdded = new i.Emitter, e(function(e) {
            var n = e.protocol,
              r = e.onDidClientDisconnect;
            i.once(n.onMessage)(function(e) {
              var i = new a(n),
                o = new c(n);
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
      t.IPCServer = u;
      var l = function() {
        function e(e, t) {
          e.send(t), this.channelClient = new c(e), this.channelServer = new a(e)
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
    }), define(e[86], t([0, 1, 13, 4]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = function() {
        function e(e, t) {
          this.sender = e;
          var n = new r.Emitter;
          t(function(e) {
            return n.fire(e)
          }), this._onMessage = n.event
        }
        return Object.defineProperty(e.prototype, "onMessage", {
          get: function() {
            return this._onMessage
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.send = function(e) {
          try {
            this.sender.send("ipc:message", e)
          } catch (e) {}
        }, e.prototype.dispose = function() {
          this.listener = n.dispose(this.listener)
        }, e
      }();
      t.Protocol = i
    }),
    define(e[89], t([0, 1, 4, 31, 86, 12]), function(e, t, r, i, o, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = function(e) {
        function t() {
          return e.call(this, t.getOnDidClientConnect()) || this
        }
        return n(t, e), t.getOnDidClientConnect = function() {
          var e = r.fromNodeEventEmitter(s.ipcMain, "ipc:hello", function(e) {
            return e.sender
          });
          return r.mapEvent(e, function(e) {
            var t = function(e) {
              var t = r.fromNodeEventEmitter(s.ipcMain, "ipc:message", function(e, t) {
                  return {
                    event: e,
                    message: t
                  }
                }),
                n = r.filterEvent(t, function(t) {
                  return t.event.sender.getId() === e
                });
              return r.mapEvent(n, function(e) {
                return e.message
              })
            }(e.getId());
            return {
              protocol: new o.Protocol(e, t),
              onDidClientDisconnect: r.fromNodeEventEmitter(e, "destroyed")
            }
          })
        }, t
      }(i.IPCServer);
      t.Server = a
    }), define(e[60], t([0, 1, 143, 2, 4, 31, 5, 23, 32]), function(e, t, r, i, o, s, a, c, u) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.generateRandomPipeName = function() {
        var e = u.generateUuid();
        return "win32" === process.platform ? "\\\\.\\pipe\\vscode-" + e + "-sock" : a.join(c.tmpdir(), "vscode-" + e + ".sock")
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
                c = o.slice(e._headerLen);
                i = c.length, r = [c]
              }
              if (!s.readHead) {
                if (!(i >= s.bodyLen)) break;
                var o, a = (o = Buffer.concat(r)).toString("utf8", 0, s.bodyLen);
                s.bodyIsJson && (a = JSON.parse(a)), n._onMessage.fire(a);
                var c = o.slice(s.bodyLen);
                i = c.length, r = [c], s.bodyIsJson = !1, s.bodyLen = -1, s.readHead = !0
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
      var d = function(e) {
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
      t.Client = d, t.serve = function(e) {
        return new i.TPromise(function(t, n) {
          var i = r.createServer();
          i.on("error", n), i.listen(e, function() {
            i.removeListener("error", n), t(new f(i))
          })
        })
      }, t.connect = function(e, t) {
        return new i.TPromise(function(n, i) {
          var o = r.createConnection(e, function() {
            o.removeListener("error", i), n(new d(o, t))
          });
          o.once("error", i)
        })
      }
    });
  var o = this && this.__decorate || function(e, t, n, r) {
    var i, o = arguments.length,
      s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
    else
      for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
    return o > 3 && s && Object.defineProperty(t, n, s), s
  };
  define(e[94], t([0, 1, 8, 52, 13, 2, 12, 26]), function(e, t, n, r, i, s, a, c) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var u = function() {
        function t(e, t, n) {
          this.environmentService = e, this.machineId = t, this.userEnv = n, this.barrier = new c.Barrier, this.disposables = []
        }
        return Object.defineProperty(t.prototype, "_whenReady", {
          get: function() {
            var t = this;
            this.window = new a.BrowserWindow({
              show: !1,
              webPreferences: {
                images: !1,
                webaudio: !1,
                webgl: !1
              }
            });
            var r = n.assign({
                appRoot: this.environmentService.appRoot,
                machineId: this.machineId,
                nodeCachedDataDir: this.environmentService.nodeCachedDataDir,
                userEnv: this.userEnv
              }),
              o = e.toUrl("vs/code/electron-browser/sharedProcess/sharedProcess.html") + "?config=" + encodeURIComponent(JSON.stringify(r));
            this.window.loadURL(o);
            var c = function(e) {
              t.window.isVisible() && (e.preventDefault(), t.window.hide())
            };
            return this.window.on("close", c), this.disposables.push(i.toDisposable(function() {
                return t.window.removeListener("close", c)
              })),
              this.disposables.push(i.toDisposable(function() {
                setTimeout(function() {
                  try {
                    t.window.close()
                  } catch (e) {}
                  t.window = null
                }, 0)
              })), new s.TPromise(function(e, n) {
                a.ipcMain.once("handshake:hello", function(n) {
                  n.sender.send("handshake:hey there", {
                    sharedIPCHandle: t.environmentService.sharedIPCHandle,
                    args: t.environmentService.args
                  }), a.ipcMain.once("handshake:im ready", function() {
                    return e(null)
                  })
                })
              })
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.spawn = function() {
          this.barrier.open()
        }, t.prototype.whenReady = function() {
          var e = this;
          return this.barrier.wait().then(function() {
            return e._whenReady
          })
        }, t.prototype.toggle = function() {
          this.window.isVisible() ? this.hide() : this.show()
        }, t.prototype.show = function() {
          this.window.show(), this.window.webContents.openDevTools()
        }, t.prototype.hide = function() {
          this.window.webContents.closeDevTools(), this.window.hide()
        }, t.prototype.dispose = function() {
          this.disposables = i.dispose(this.disposables)
        }, o([r.memoize], t.prototype, "_whenReady", null), t
      }();
      t.SharedProcess = u
    }),
    define(e[62], t([0, 1, 5, 21, 17, 14, 3, 10, 29]), function(e, t, n, r, i, o, s, a, c) {
      "use strict";

      function u(e, t) {
        var u = process.env.VSCODE_CWD || process.cwd(),
          f = e.map(function(e) {
            var r, f = String(e);
            t && (f = (r = l(f)).path), f && (f = function(e, t) {
              s.isWindows && (t = i.rtrim(t, '"'));
              t = i.trim(i.trim(t, " "), "\t"), s.isWindows && (t = n.resolve(e, t), t = i.rtrim(t, "."));
              return t
            }(u, f));
            var d;
            try {
              d = c.realpathSync(f)
            } catch (e) {
              d = n.normalize(n.isAbsolute(f) ? f : n.join(u, f))
            }
            var p = n.basename(d);
            return p && !o.isValidBasename(p) ? null : t ? (r.path = d, function(e) {
              var t = [e.path];
              a.isNumber(e.line) && t.push(String(e.line));
              a.isNumber(e.column) && t.push(String(e.column));
              return t.join(":")
            }(r)) : d
          }),
          d = s.isWindows || s.isMacintosh,
          p = r.distinct(f, function(e) {
            return e && d ? e.toLowerCase() : e
          });
        return r.coalesce(p)
      }

      function l(e) {
        var t, n = null,
          r = null;
        if (e.split(":").forEach(function(e) {
            var i = Number(e);
            a.isNumber(i) ? null === n ? n = i : null === r && (r = i) : t = t ? [t, e].join(":") : e
          }), !t) throw new Error("Format for `--goto` should be: `FILE:LINE(:COLUMN)`");
        return {
          path: t,
          line: null !== n ? n : void 0,
          column: null !== r ? r : null !== n ? 1 : void 0
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.validatePaths = function(e) {
        e["open-url"] && (e._urls = e._, e._ = []);
        var t = u(e._, e.goto);
        return e._ = t, e.diff = e.diff && 2 === t.length, e
      }, t.parseLineAndColumnAware = l
    }), define(e[97], t([0, 1, 54, 8, 32, 2, 3]), function(e, t, n, r, i, o, s) {
      "use strict";

      function a() {
        return void 0 === c && (c = s.isWindows ? o.TPromise.as({}) : "1" === process.env.VSCODE_CLI ? o.TPromise.as({}) : new o.TPromise(function(e, t) {
          var o = process.env.ELECTRON_RUN_AS_NODE,
            s = process.env.ELECTRON_NO_ATTACH_CONSOLE,
            a = i.generateUuid().replace(/-/g, "").substr(0, 12),
            c = new RegExp(a + "(.*)" + a),
            u = r.assign({}, process.env, {
              ELECTRON_RUN_AS_NODE: "1",
              ELECTRON_NO_ATTACH_CONSOLE: "1"
            }),
            l = "'" + process.execPath + "' -p '\"" + a + '" + JSON.stringify(process.env) + "' + a + "\"'",
            f = n.spawn(process.env.SHELL, ["-ilc", l], {
              detached: !0,
              stdio: ["ignore", "pipe", process.stderr],
              env: u
            }),
            d = [];
          f.on("error", function() {
            return e({})
          }), f.stdout.on("data", function(e) {
            return d.push(e)
          }), f.on("close", function(n, r) {
            if (0 !== n) return t(new Error("Failed to get environment"));
            var i = Buffer.concat(d).toString("utf8"),
              a = c.exec(i),
              u = a ? a[1] : "{}";
            try {
              var l = JSON.parse(u);
              o ? l.ELECTRON_RUN_AS_NODE = o : delete l.ELECTRON_RUN_AS_NODE, s ? l.ELECTRON_NO_ATTACH_CONSOLE = s : delete l.ELECTRON_NO_ATTACH_CONSOLE, delete l.XDG_RUNTIME_DIR, e(l)
            } catch (e) {
              t(e)
            }
          })
        }).then(null, function() {
          return {}
        })), c
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var c;
      t.getShellEnvironment = a
    }), define(e[101], t([18, 15]), function(e, t) {
      return e.create("vs/base/node/ps", t)
    }), define(e[105], t([0, 1, 54, 5, 101, 7]), function(e, t, n, r, i, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.listProcesses = function(t) {
        return new Promise(function(s, a) {
          function c(e, n, r, i, o) {
            var s = f.get(n);
            if (e === t || s) {
              var a = {
                name: u(r),
                cmd: r,
                pid: e,
                ppid: n,
                load: i,
                mem: o
              };
              f.set(e, a), e === t && (l = a), s && (s.children || (s.children = []), s.children.push(a), s.children.length > 1 && (s.children = s.children.sort(function(e, t) {
                return e.pid - t.pid
              })))
            }
          }

          function u(e) {
            var t = /--disable-blink-features=Auxclick/;
            if (/\\watcher\\win32\\CodeHelper\.exe/.exec(e)) return "watcherService ";
            if (/--crashes-directory/.exec(e)) return "electron-crash-reporter";
            if (/\\pipe\\winpty-control/.exec(e)) return "winpty-process";
            if (/conhost\.exe/.exec(e)) return "console-window-host (Windows internal process)";
            var n = /--type=([a-zA-Z-]+)/.exec(e);
            if (n && 2 === n.length) return "renderer" === n[1] ? t.exec(e) ? "window" : "shared-process" : n[1];
            var r = /[a-zA-Z-]+\.js/g,
              i = "";
            do {
              (n = r.exec(e)) && (i += n + " ")
            } while (n);
            return i && 0 !== e.indexOf("node ") ? "electron_node " + i : e
          }
          var l, f = new Map;
          if ("win32" === process.platform) {
            console.log(i.localize(0, null));
            var d = function(e) {
                return 0 === e.indexOf("\\\\?\\") ? e.substr(4) : 0 === e.indexOf("\\??\\") ? e.substr(4) : 0 === e.indexOf('"\\\\?\\') ? '"' + e.substr(5) : 0 === e.indexOf('"\\??\\') ? '"' + e.substr(5) : e
              },
              p = r.basename(process.execPath),
              h = "& {& '" + o.default.parse(e.toUrl("vs/base/node/ps-win.ps1")).fsPath + "' -ProcessName '" + p + "' -MaxSamples 3}",
              v = n.spawn("powershell.exe", ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", h]),
              g = "",
              m = "";
            v.stdout.on("data", function(e) {
              g += e.toString()
            }), v.stderr.on("data", function(e) {
              m += e.toString()
            }), v.on("exit", function() {
              if (m.length > 0) a(new Error(m));
              else {
                var e = new Map;
                try {
                  for (var n = 0, r = JSON.parse(g); n < r.length; n++) {
                    var i = r[n];
                    if ("processInfo" === i.type) {
                      var o = 0;
                      if (i.cpuLoad) {
                        for (var c = 0, f = i.cpuLoad; c < f.length; c++) o += f[c];
                        o /= i.cpuLoad.length
                      } else o = -1;
                      var p = d(i.commandLine);
                      e.set(i.processId, {
                        name: u(p),
                        cmd: p,
                        pid: i.processId,
                        ppid: i.parentProcessId,
                        load: o,
                        mem: i.workingSetSize
                      })
                    }
                  }(l = e.get(t)) ? (e.forEach(function(t) {
                    var n = e.get(t.ppid);
                    n && (n.children || (n.children = []), n.children.push(t))
                  }), e.forEach(function(e) {
                    e.children && (e.children = e.children.sort(function(e, t) {
                      return e.pid - t.pid
                    }))
                  }), s(l)) : a(new Error("Root process " + t + " not found"))
                } catch (e) {
                  console.log(g), a(e)
                }
              }
            })
          } else {
            var y = /^\s*([0-9]+)\s+([0-9]+)\s+([0-9]+\.[0-9]+)\s+([0-9]+\.[0-9]+)\s+(.+)$/;
            n.exec("/bin/ps -ax -o pid=,ppid=,pcpu=,pmem=,command=", {
              maxBuffer: 1024e3
            }, function(e, t, n) {
              if (e || n) a(e || n.toString());
              else {
                for (var r = 0, i = t.toString().split("\n"); r < i.length; r++) {
                  var o = i[r],
                    u = y.exec(o.trim());
                  u && 6 === u.length && c(parseInt(u[1]), parseInt(u[2]), u[5], parseFloat(u[3]), parseFloat(u[4]))
                }
                s(l)
              }
            })
          }
        })
      }
    }), define(e[110], t([18, 15]), function(e, t) {
      return e.create("vs/code/electron-main/auth", t)
    }), define(e[112], t([18, 15]), function(e, t) {
      return e.create("vs/code/electron-main/menus", t)
    }), define(e[114], t([18, 15]), function(e, t) {
      return e.create("vs/code/electron-main/window", t)
    }), define(e[115], t([18, 15]), function(e, t) {
      return e.create("vs/code/electron-main/windows", t)
    }), define(e[118], t([18, 15]), function(e, t) {
      return e.create("vs/platform/configuration/common/configurationRegistry", t)
    }), define(e[120], t([18, 15]), function(e, t) {
      return e.create("vs/platform/environment/node/argv", t)
    }), define(e[122], t([18, 15]), function(e, t) {
      return e.create("vs/platform/extensionManagement/common/extensionManagement", t)
    }), define(e[123], t([18, 15]), function(e, t) {
      return e.create("vs/platform/extensionManagement/node/extensionGalleryService", t)
    }),
    define(e[132], t([18, 15]), function(e, t) {
      return e.create("vs/platform/extensions/node/extensionValidator", t)
    }), define(e[134], t([18, 15]), function(e, t) {
      return e.create("vs/platform/history/electron-main/historyMainService", t)
    }), define(e[69], t([18, 15]), function(e, t) {
      return e.create("vs/platform/request/node/request", t)
    }), define(e[70], t([18, 15]), function(e, t) {
      return e.create("vs/platform/telemetry/common/telemetryService", t)
    }), define(e[142], t([18, 15]), function(e, t) {
      return e.create("vs/platform/workspaces/common/workspaces", t)
    }), define(e[72], t([0, 1, 132, 151, 5]), function(e, t, n, r, i) {
      "use strict";

      function o(e) {
        return "*" === (e = e.trim()) || p.test(e)
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
        var t = e.match(p);
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

      function c(e, t) {
        var n;
        n = "string" == typeof e ? a(s(e)) : e;
        var r;
        if (r = "string" == typeof t ? a(s(t)) : t, !n || !r) return !1;
        var i = n.majorBase,
          o = n.minorBase,
          c = n.patchBase,
          u = r.majorBase,
          l = r.minorBase,
          f = r.patchBase,
          d = r.majorMustEqual,
          p = r.minorMustEqual,
          h = r.patchMustEqual;
        return r.isMinimum ? i > u || !(i < u) && (o > l || !(o < l) && c >= f) : (1 !== i || 0 !== u || d && p && h || (u = 1, l = 0, f = 0, d = !0, p = !1, h = !1), !(i < u) && (i > u ? !d : !(o < l) && (o > l ? !p : !(c < f) && (!(c > f) || !h))))
      }

      function u(e, t, n) {
        return !(!t.isBuiltin && void 0 !== t.main) || l(e, t.engines.vscode, n)
      }

      function l(e, t, r) {
        void 0 === r && (r = []);
        var i = a(s(t));
        if (!i) return r.push(n.localize(0, null, t)), !1;
        if (0 === i.majorBase) {
          if (!i.majorMustEqual || !i.minorMustEqual) return r.push(n.localize(1, null, t)), !1
        } else if (!i.majorMustEqual) return r.push(n.localize(2, null, t)), !1;
        return !!c(e, i) || (r.push(n.localize(3, null, e, t)), !1)
      }

      function f(e) {
        if (!Array.isArray(e)) return !1;
        for (var t = 0, n = e.length; t < n; t++)
          if ("string" != typeof e[t]) return !1;
        return !0
      }

      function d(e, t, o, s) {
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
        }(t, o, s) && (r.valid(o.version) ? u(e, o, s) : (s.push(n.localize(16, null)), !1))
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var p = /^(\^|>=)?((\d+)|x)\.((\d+)|x)\.((\d+)|x)(\-.*)?$/;
      t.isValidVersionStr = o, t.parseVersion = s, t.normalizeVersion = a, t.isValidVersion = c, t.isValidExtensionVersion = u, t.isVersionValid = l, t.isValidExtensionDescription = d
    }), define(e[50], t([0, 1]), function(e, t) {
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
      t.SyncDescriptor = n,
        t.createSyncDescriptor = function(e) {
          for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
          return new(n.bind.apply(n, [void 0, e].concat(t)))
        }
    }), define(e[6], t([0, 1]), function(e, t) {
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
    }), define(e[47], t([0, 1, 6]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IBackupMainService = n.createDecorator("backupMainService")
    }), define(e[9], t([0, 1, 6]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IEnvironmentService = n.createDecorator("environmentService")
    }), define(e[65], t([0, 1, 122, 6]), function(e, t, n, r) {
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
  var s = this && this.__assign || Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
    }
    return e
  };
  define(e[79], t([0, 1, 65]), function(e, t, n) {
    "use strict";

    function r(e, t) {
      return e.uuid && t.uuid ? e.uuid === t.uuid : e.id === t.id || a(e.id) === a(t.id)
    }

    function i(e, t) {
      return e + "." + t.toLocaleLowerCase()
    }

    function o(e) {
      return i(e.manifest.publisher, e.manifest.name)
    }

    function a(e) {
      return e.replace(n.EXTENSION_IDENTIFIER_REGEX, function(e, t, n) {
        return i(t, n)
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.areSameExtensions = r, t.getGalleryExtensionId = i, t.getGalleryExtensionIdFromLocal = o, t.LOCAL_EXTENSION_ID_REGEX = /^([^.]+\..+)-(\d+\.\d+\.\d+(-.*)?)$/, t.getIdFromLocalExtensionId = function(e) {
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
          c = i(a);
        c ? c.push(a) : n.push([a])
      }
      return n
    }, t.getLocalExtensionTelemetryData = function(e) {
      return {
        id: o(e),
        name: e.manifest.name,
        galleryId: null,
        publisherId: e.metadata ? e.metadata.publisherId : null,
        publisherName: e.manifest.publisher,
        publisherDisplayName: e.metadata ? e.metadata.publisherDisplayName : null,
        dependencies: e.manifest.extensionDependencies && e.manifest.extensionDependencies.length > 0
      }
    }, t.getGalleryExtensionTelemetryData = function(e) {
      return s({
        id: e.identifier.id,
        name: e.name,
        galleryId: e.identifier.uuid,
        publisherId: e.publisherId,
        publisherName: e.publisher,
        publisherDisplayName: e.publisherDisplayName,
        dependencies: e.properties.dependencies.length > 0
      }, e.telemetryData)
    }, t.BetterMergeDisabledNowKey = "extensions/bettermergedisablednow", t.BetterMergeId = "pprice.better-merge"
  }), define(e[45], t([0, 1, 14, 3, 6, 17, 57]), function(e, t, r, i, o, s, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IFileService = o.createDecorator("fileService");
    ! function(e) {
      e[e.File = 0] = "File",
        e[e.Dir = 1] = "Dir", e[e.Symlink = 2] = "Symlink"
    }(t.FileType || (t.FileType = {}));
    ! function(e) {
      e[e.CREATE = 0] = "CREATE", e[e.DELETE = 1] = "DELETE", e[e.MOVE = 2] = "MOVE", e[e.COPY = 3] = "COPY", e[e.IMPORT = 4] = "IMPORT"
    }(t.FileOperation || (t.FileOperation = {}));
    var c = function() {
      function e(e, t, n) {
        this._resource = e, this._operation = t, this._target = n
      }
      return Object.defineProperty(e.prototype, "resource", {
        get: function() {
          return this._resource
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "target", {
        get: function() {
          return this._target
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "operation", {
        get: function() {
          return this._operation
        },
        enumerable: !0,
        configurable: !0
      }), e
    }();
    t.FileOperationEvent = c;
    var u;
    ! function(e) {
      e[e.UPDATED = 0] = "UPDATED", e[e.ADDED = 1] = "ADDED", e[e.DELETED = 2] = "DELETED"
    }(u = t.FileChangeType || (t.FileChangeType = {}));
    var l = function() {
      function e(e) {
        this._changes = e
      }
      return Object.defineProperty(e.prototype, "changes", {
          get: function() {
            return this._changes
          },
          enumerable: !0,
          configurable: !0
        }),
        e.prototype.contains = function(e, t) {
          return !!e && this._changes.some(function(n) {
            return n.type === t && (t === u.DELETED ? a.isEqualOrParent(e, n.resource, !i.isLinux) : a.isEqual(e, n.resource, !i.isLinux))
          })
        }, e.prototype.getAdded = function() {
          return this.getOfType(u.ADDED)
        }, e.prototype.gotAdded = function() {
          return this.hasType(u.ADDED)
        }, e.prototype.getDeleted = function() {
          return this.getOfType(u.DELETED)
        }, e.prototype.gotDeleted = function() {
          return this.hasType(u.DELETED)
        }, e.prototype.getUpdated = function() {
          return this.getOfType(u.UPDATED)
        }, e.prototype.gotUpdated = function() {
          return this.hasType(u.UPDATED)
        }, e.prototype.getOfType = function(e) {
          return this._changes.filter(function(t) {
            return t.type === e
          })
        }, e.prototype.hasType = function(e) {
          return this._changes.some(function(t) {
            return t.type === e
          })
        }, e
    }();
    t.FileChangesEvent = l, t.isParent = function(e, t, n) {
      return !(!e || !t || e === t) && !(t.length > e.length) && (t.charAt(t.length - 1) !== r.nativeSep && (t += r.nativeSep), n ? s.beginsWithIgnoreCase(e, t) : 0 === e.indexOf(t))
    }, t.indexOf = function(e, t, n) {
      return t.length > e.length ? -1 : e === t ? 0 : (n && (e = e.toLowerCase(), t = t.toLowerCase()), e.indexOf(t))
    };
    var f = function(e) {
      function t(t, n, r) {
        var i = e.call(this, t) || this;
        return i.fileOperationResult = n, i.options = r, i
      }
      return n(t, e), t
    }(Error);
    t.FileOperationError = f;
    ! function(e) {
      e[e.FILE_IS_BINARY = 0] = "FILE_IS_BINARY", e[e.FILE_IS_DIRECTORY = 1] = "FILE_IS_DIRECTORY", e[e.FILE_NOT_FOUND = 2] = "FILE_NOT_FOUND", e[e.FILE_NOT_MODIFIED_SINCE = 3] = "FILE_NOT_MODIFIED_SINCE", e[e.FILE_MODIFIED_SINCE = 4] = "FILE_MODIFIED_SINCE", e[e.FILE_MOVE_CONFLICT = 5] = "FILE_MOVE_CONFLICT", e[e.FILE_READ_ONLY = 6] = "FILE_READ_ONLY", e[e.FILE_PERMISSION_DENIED = 7] = "FILE_PERMISSION_DENIED", e[e.FILE_TOO_LARGE = 8] = "FILE_TOO_LARGE", e[e.FILE_INVALID_PATH = 9] = "FILE_INVALID_PATH"
    }(t.FileOperationResult || (t.FileOperationResult = {})), t.AutoSaveConfiguration = {
        OFF: "off",
        AFTER_DELAY: "afterDelay",
        ON_FOCUS_CHANGE: "onFocusChange",
        ON_WINDOW_CHANGE: "onWindowChange"
      }, t.HotExitConfiguration = {
        OFF: "off",
        ON_EXIT: "onExit",
        ON_EXIT_AND_WINDOW_CLOSE: "onExitAndWindowClose"
      },
      t.CONTENT_CHANGE_EVENT_BUFFER_DELAY = 1e3, t.FILES_ASSOCIATIONS_CONFIG = "files.associations", t.FILES_EXCLUDE_CONFIG = "files.exclude", t.SUPPORTED_ENCODINGS = {
        utf8: {
          labelLong: "UTF-8",
          labelShort: "UTF-8",
          order: 1,
          alias: "utf8bom"
        },
        utf8bom: {
          labelLong: "UTF-8 with BOM",
          labelShort: "UTF-8 with BOM",
          encodeOnly: !0,
          order: 2,
          alias: "utf8"
        },
        utf16le: {
          labelLong: "UTF-16 LE",
          labelShort: "UTF-16 LE",
          order: 3
        },
        utf16be: {
          labelLong: "UTF-16 BE",
          labelShort: "UTF-16 BE",
          order: 4
        },
        windows1252: {
          labelLong: "Western (Windows 1252)",
          labelShort: "Windows 1252",
          order: 5
        },
        iso88591: {
          labelLong: "Western (ISO 8859-1)",
          labelShort: "ISO 8859-1",
          order: 6
        },
        iso88593: {
          labelLong: "Western (ISO 8859-3)",
          labelShort: "ISO 8859-3",
          order: 7
        },
        iso885915: {
          labelLong: "Western (ISO 8859-15)",
          labelShort: "ISO 8859-15",
          order: 8
        },
        macroman: {
          labelLong: "Western (Mac Roman)",
          labelShort: "Mac Roman",
          order: 9
        },
        cp437: {
          labelLong: "DOS (CP 437)",
          labelShort: "CP437",
          order: 10
        },
        windows1256: {
          labelLong: "Arabic (Windows 1256)",
          labelShort: "Windows 1256",
          order: 11
        },
        iso88596: {
          labelLong: "Arabic (ISO 8859-6)",
          labelShort: "ISO 8859-6",
          order: 12
        },
        windows1257: {
          labelLong: "Baltic (Windows 1257)",
          labelShort: "Windows 1257",
          order: 13
        },
        iso88594: {
          labelLong: "Baltic (ISO 8859-4)",
          labelShort: "ISO 8859-4",
          order: 14
        },
        iso885914: {
          labelLong: "Celtic (ISO 8859-14)",
          labelShort: "ISO 8859-14",
          order: 15
        },
        windows1250: {
          labelLong: "Central European (Windows 1250)",
          labelShort: "Windows 1250",
          order: 16
        },
        iso88592: {
          labelLong: "Central European (ISO 8859-2)",
          labelShort: "ISO 8859-2",
          order: 17
        },
        cp852: {
          labelLong: "Central European (CP 852)",
          labelShort: "CP 852",
          order: 18
        },
        windows1251: {
          labelLong: "Cyrillic (Windows 1251)",
          labelShort: "Windows 1251",
          order: 19
        },
        cp866: {
          labelLong: "Cyrillic (CP 866)",
          labelShort: "CP 866",
          order: 20
        },
        iso88595: {
          labelLong: "Cyrillic (ISO 8859-5)",
          labelShort: "ISO 8859-5",
          order: 21
        },
        koi8r: {
          labelLong: "Cyrillic (KOI8-R)",
          labelShort: "KOI8-R",
          order: 22
        },
        koi8u: {
          labelLong: "Cyrillic (KOI8-U)",
          labelShort: "KOI8-U",
          order: 23
        },
        iso885913: {
          labelLong: "Estonian (ISO 8859-13)",
          labelShort: "ISO 8859-13",
          order: 24
        },
        windows1253: {
          labelLong: "Greek (Windows 1253)",
          labelShort: "Windows 1253",
          order: 25
        },
        iso88597: {
          labelLong: "Greek (ISO 8859-7)",
          labelShort: "ISO 8859-7",
          order: 26
        },
        windows1255: {
          labelLong: "Hebrew (Windows 1255)",
          labelShort: "Windows 1255",
          order: 27
        },
        iso88598: {
          labelLong: "Hebrew (ISO 8859-8)",
          labelShort: "ISO 8859-8",
          order: 28
        },
        iso885910: {
          labelLong: "Nordic (ISO 8859-10)",
          labelShort: "ISO 8859-10",
          order: 29
        },
        iso885916: {
          labelLong: "Romanian (ISO 8859-16)",
          labelShort: "ISO 8859-16",
          order: 30
        },
        windows1254: {
          labelLong: "Turkish (Windows 1254)",
          labelShort: "Windows 1254",
          order: 31
        },
        iso88599: {
          labelLong: "Turkish (ISO 8859-9)",
          labelShort: "ISO 8859-9",
          order: 32
        },
        windows1258: {
          labelLong: "Vietnamese (Windows 1258)",
          labelShort: "Windows 1258",
          order: 33
        },
        gbk: {
          labelLong: "Chinese (GBK)",
          labelShort: "GBK",
          order: 34
        },
        gb18030: {
          labelLong: "Chinese (GB18030)",
          labelShort: "GB18030",
          order: 35
        },
        cp950: {
          labelLong: "Traditional Chinese (Big5)",
          labelShort: "Big5",
          order: 36
        },
        big5hkscs: {
          labelLong: "Traditional Chinese (Big5-HKSCS)",
          labelShort: "Big5-HKSCS",
          order: 37
        },
        shiftjis: {
          labelLong: "Japanese (Shift JIS)",
          labelShort: "Shift JIS",
          order: 38
        },
        eucjp: {
          labelLong: "Japanese (EUC-JP)",
          labelShort: "EUC-JP",
          order: 39
        },
        euckr: {
          labelLong: "Korean (EUC-KR)",
          labelShort: "EUC-KR",
          order: 40
        },
        windows874: {
          labelLong: "Thai (Windows 874)",
          labelShort: "Windows 874",
          order: 41
        },
        iso885911: {
          labelLong: "Latin/Thai (ISO 8859-11)",
          labelShort: "ISO 8859-11",
          order: 42
        },
        koi8ru: {
          labelLong: "Cyrillic (KOI8-RU)",
          labelShort: "KOI8-RU",
          order: 43
        },
        koi8t: {
          labelLong: "Tajik (KOI8-T)",
          labelShort: "KOI8-T",
          order: 44
        },
        gb2312: {
          labelLong: "Simplified Chinese (GB 2312)",
          labelShort: "GB 2312",
          order: 45
        },
        cp865: {
          labelLong: "Nordic DOS (CP 865)",
          labelShort: "CP 865",
          order: 46
        },
        cp850: {
          labelLong: "Western European DOS (CP 850)",
          labelShort: "CP 850",
          order: 47
        }
      };
    ! function(e) {
      e[e.FILE = 0] = "FILE", e[e.FOLDER = 1] = "FOLDER", e[e.ROOT_FOLDER = 2] = "ROOT_FOLDER"
    }(t.FileKind || (t.FileKind = {}))
  }), define(e[36], t([0, 1, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IHistoryMainService = n.createDecorator("historyMainService")
  }), define(e[49], t([0, 1]), function(e, t) {
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
  }), define(e[83], t([0, 1, 27, 10, 56, 73, 50, 6, 49]), function(e, t, n, r, i, o, s, a, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = function() {
      function e(e, t) {
        void 0 === e && (e = new c.ServiceCollection), void 0 === t && (t = !1), this._services = e, this._strict = t, this._services.set(a.IInstantiationService, this)
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
          }), o = [], s = 0, c = i; s < c.length; s++) {
          var u = c[s],
            l = this._getOrCreateServiceInstance(u.id);
          if (!l && this._strict && !u.optional) throw new Error("[createInstance] " + e.ctor.name + " depends on UNKNOWN service " + u.id + ".");
          o.push(l)
        }
        var f = i.length > 0 ? i[0].index : n.length;
        if (n.length !== f) {
          console.warn("[createInstance] First service dependency of " + e.ctor.name + " at position " + (f + 1) + " conflicts with " + n.length + " static arguments");
          var d = f - n.length;
          n = d > 0 ? n.concat(new Array(d)) : n.slice(0, f)
        }
        var p = [e.ctor];
        return p.push.apply(p, n), p.push.apply(p, o), r.create.apply(null, p)
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
          }), c = 0, u = [{
            id: e,
            desc: t
          }]; u.length;) {
          var l = u.pop();
          r.lookupOrInsertNode(l), c++ > 100 && n();
          for (var f = 0, d = a._util.getServiceDependencies(l.desc.ctor); f < d.length; f++) {
            var p = d[f],
              h = this._services.get(p.id);
            if (h || console.warn("[createInstance] " + e + " depends on " + p.id + " which is NOT registered."), h instanceof s.SyncDescriptor) {
              var v = {
                id: p.id,
                desc: h
              };
              r.insertEdge(l, v), u.push(v)
            }
          }
        }
        for (;;) {
          var g = r.roots();
          if (0 === g.length) {
            0 !== r.length && n();
            break
          }
          for (var m = 0, y = g; m < y.length; m++) {
            var w = y[m],
              b = this._createInstance(w.data.desc, []);
            this._services.set(w.data.id, b), r.removeNode(w.data)
          }
        }
        return this._services.get(e)
      }, e
    }();
    t.InstantiationService = u
  }), define(e[84], t([0, 1, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    ! function(e) {
      e[e.Default = 1] = "Default", e[e.User = 2] = "User"
    }(t.KeybindingSource || (t.KeybindingSource = {})), t.IKeybindingService = n.createDecorator("keybindingService")
  }), define(e[85], t([0, 1, 2, 4, 6]), function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ILifecycleService = i.createDecorator("lifecycleService");
    ! function(e) {
      e[e.CLOSE = 1] = "CLOSE",
        e[e.QUIT = 2] = "QUIT", e[e.RELOAD = 3] = "RELOAD", e[e.LOAD = 4] = "LOAD"
    }(t.ShutdownReason || (t.ShutdownReason = {}));
    var o;
    ! function(e) {
      e[e.NewWindow = 1] = "NewWindow", e[e.ReloadedWindow = 3] = "ReloadedWindow", e[e.ReopenedWindow = 4] = "ReopenedWindow"
    }(o = t.StartupKind || (t.StartupKind = {}));
    var s;
    ! function(e) {
      e[e.Starting = 1] = "Starting", e[e.Restoring = 2] = "Restoring", e[e.Running = 3] = "Running", e[e.Eventually = 4] = "Eventually"
    }(s = t.LifecyclePhase || (t.LifecyclePhase = {})), t.NullLifecycleService = {
      _serviceBrand: null,
      phase: s.Running,
      when: function() {
        return Promise.resolve()
      },
      startupKind: o.NewWindow,
      onWillShutdown: r.default.None,
      onShutdown: r.default.None
    }, t.handleVetos = function(e, t) {
      if (0 === e.length) return n.TPromise.as(!1);
      for (var r = [], i = !1, o = 0, s = e; o < s.length; o++) {
        var a = s[o];
        if (!0 === a) return n.TPromise.as(!0);
        n.TPromise.is(a) && r.push(a.then(function(e) {
          e && (i = !0)
        }, function(e) {
          t(e), i = !0
        }))
      }
      return n.TPromise.join(r).then(function() {
        return i
      })
    }
  });
  var a = this && this.__param || function(e, t) {
    return function(n, r) {
      t(n, r, e)
    }
  };
  define(e[11], t([0, 1, 9, 6, 3]), function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ILogService = r.createDecorator("logService");
    var s;
    ! function(e) {
      e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Info = 2] = "Info", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical", e[e.Off = 6] = "Off"
    }(s = t.LogLevel || (t.LogLevel = {}));
    var c = function() {
      function e(e) {
        this.level = s.Error, this.setLevel(e.logLevel), this.useColors = !i.isWindows
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
    t.ConsoleLogMainService = c;
    var u = function() {
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
        },
        e.prototype.debug = function(e) {
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
    t.ConsoleLogService = u;
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
  }), define(e[87], t([0, 1, 11]), function(e, t, n) {
    "use strict";

    function r(e, t) {
      switch (t) {
        case n.LogLevel.Trace:
          return e.trace;
        case n.LogLevel.Debug:
          return e.debug;
        case n.LogLevel.Info:
          return e.info;
        case n.LogLevel.Warning:
          return e.warn;
        case n.LogLevel.Error:
          return e.error;
        case n.LogLevel.Critical:
          return e.critical;
        default:
          throw new Error("Invalid log level")
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function() {
      function e(e) {
        void 0 === e && (e = n.LogLevel.Error), this.level = e, this.buffer = [], this._logger = void 0
      }
      return Object.defineProperty(e.prototype, "logger", {
          set: function(e) {
            this._logger = e;
            for (var t = 0, n = this.buffer; t < n.length; t++) {
              var i = n[t],
                o = i.level,
                s = i.args;
              r(e, o).apply(e, s)
            }
            this.buffer = []
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.setLevel = function(e) {
          this.level = e
        },
        e.prototype.getLevel = function() {
          return this.level
        }, e.prototype._log = function(e, t) {
          if (this._logger) {
            r(this._logger, e).apply(this._logger, t)
          } else this.level <= e && this.buffer.push({
            level: e,
            args: t
          })
        }, e.prototype.trace = function() {
          this._log(n.LogLevel.Trace, arguments)
        }, e.prototype.debug = function() {
          this._log(n.LogLevel.Debug, arguments)
        }, e.prototype.info = function() {
          this._log(n.LogLevel.Info, arguments)
        }, e.prototype.warn = function() {
          this._log(n.LogLevel.Warning, arguments)
        }, e.prototype.error = function() {
          this._log(n.LogLevel.Error, arguments)
        }, e.prototype.critical = function() {
          this._log(n.LogLevel.Critical, arguments)
        }, e.prototype.dispose = function() {
          this._logger && this._logger.dispose()
        }, e
    }();
    t.BufferLogService = i
  }), define(e[88], t([0, 1, 5, 11, 148]), function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.createSpdLogService = function(e, t, s) {
      try {
        i.setAsyncMode(8192, 2e3);
        var a = s ? n.join(t.logsPath, s) : t.logsPath,
          c = n.join(a, e + ".log"),
          u = new i.RotatingLogger(e, c, 5242880, 6);
        return u.setLevel(0), new o(u, t.logLevel)
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
        },
        e.prototype.dispose = function() {
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
  }), define(e[44], t([0, 1, 5, 7]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n.dirname(r.default.parse(e.toUrl("")).fsPath),
      o = n.join(i, "package.json");
    t.default = e.__$__nodeRequire(o)
  }), define(e[16], t([0, 1, 5, 7]), function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n.dirname(r.default.parse(e.toUrl("")).fsPath),
      o = n.join(i, "product.json"),
      s = e.__$__nodeRequire(o);
    process.env.VSCODE_DEV && (s.nameShort += " Dev", s.nameLong += " Dev", s.dataFolderName += "-dev"), t.default = s
  }), define(e[91], t([0, 1, 81, 105, 16, 44, 23, 55, 17, 3, 12, 5]), function(e, t, n, r, i, o, s, a, c, u, l, f) {
    "use strict";

    function d(e) {
      return r.listProcesses(e.mainPID).then(function(t) {
        console.log(""), console.log(function(e) {
          var t = 1073741824,
            n = [];
          n.push("Version:          " + o.default.name + " " + o.default.version + " (" + (i.default.commit || "Commit unknown") + ", " + (i.default.date || "Date unknown") + ")"), n.push("OS Version:       " + s.type() + " " + s.arch() + " " + s.release());
          var r = s.cpus();
          r && r.length > 0 && n.push("CPUs:             " + r[0].model + " (" + r.length + " x " + r[0].speed + ")");
          n.push("Memory (System):  " + (s.totalmem() / t).toFixed(2) + "GB (" + (s.freemem() / t).toFixed(2) + "GB free)"), u.isWindows || n.push("Load (avg):       " + s.loadavg().map(function(e) {
            return Math.round(e)
          }).join(", "));
          return n.push("VM:               " + Math.round(100 * a.virtualMachineHint.value()) + "%"), n.push("Screen Reader:    " + (l.app.isAccessibilitySupportEnabled() ? "yes" : "no")), n.push("Process Argv:     " + e.mainArguments.join(" ")), n.join("\n")
        }(e)), console.log(""), console.log(function(e, t) {
          var n = new Map;
          e.windows.forEach(function(e) {
            return n.set(e.pid, e.title)
          });
          var r = [];
          r.push("CPU %\tMem MB\t   PID\tProcess"), t && p(n, r, t, 0);
          return r.join("\n")
        }(e, t)), e.windows.some(function(e) {
          return e.folders && e.folders.length > 0
        }) && (console.log(""), console.log("Workspace Stats: "), e.windows.forEach(function(e) {
          0 !== e.folders.length && (console.log("|  Window (" + e.title + ")"), e.folders.forEach(function(e) {
            try {
              var t = n.collectWorkspaceStats(e, ["node_modules", ".git"]),
                r = t.fileCount + " files";
              t.maxFilesReached && (r = "more than " + r), console.log("|    Folder (" + f.basename(e) + "): " + r), console.log(function(e) {
                for (var t = [], n = 0, r = function(e, r) {
                    var o = " " + e + "(" + r + ")";
                    n + o.length > 60 ? (t.push(i), n = (i = "|                 ").length) : n += o.length, i += o
                  }, i = "|      File types:", o = e.fileTypes.length > 10 ? 10 : e.fileTypes.length, s = 0; s < o; s++) {
                  var a = e.fileTypes[s];
                  r(a.name, a.count)
                }
                t.push(i), e.configFiles.length >= 0 && (i = "|      Conf files:", n = 0, e.configFiles.forEach(function(e) {
                  r(e.name, e.count)
                }), t.push(i));
                return t.join("\n")
              }(t));
              var i = n.collectLaunchConfigs(e);
              i.length > 0 && console.log(function(e) {
                var t = [],
                  n = "|      Launch Configs:";
                return e.forEach(function(e) {
                    var t = e.count > 1 ? " " + e.name + "(" + e.count + ")" : " " + e.name;
                    n += t
                  }), t.push(n),
                  t.join("\n")
              }(i))
            } catch (t) {
              console.log("|      Error: Unable to collect workpsace stats for folder " + e + " (" + t.toString() + ")")
            }
          }))
        })), console.log(""), console.log("")
      })
    }

    function p(e, t, n, r) {
      var o;
      0 === r ? o = i.default.applicationName + " main" : (o = c.repeat("  ", r) + " " + n.name, "window" === n.name && (o = o + " (" + e.get(n.pid) + ")"));
      var a = "win32" === process.platform ? n.mem : s.totalmem() * (n.mem / 100);
      t.push(c.pad(Number(n.load.toFixed(0)), 5, " ") + "\t" + c.pad(Number((a / 1048576).toFixed(0)), 6, " ") + "\t" + c.pad(Number(n.pid.toFixed(0)), 6, " ") + "\t" + o), Array.isArray(n.children) && n.children.forEach(function(n) {
        return p(e, t, n, r + 1)
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.printDiagnostics = d
  }), define(e[61], t([0, 1, 23, 149, 102, 21, 120, 3, 16]), function(e, t, n, r, i, o, s, a, c) {
    "use strict";

    function u(e) {
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

    function d(e, t) {
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
        for (var a = 1; a < n.length; a++) o += "\n" + " ".repeat(r) + n[a]
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
      return process.env.VSCODE_DEV && (t = l(t)), u(f(t))
    }, t.parseCLIProcessArgv = function(e) {
      var t = e.slice(2);
      return process.env.VSCODE_DEV && (t = l(t)), u(f(t))
    }, t.parseArgs = f;
    var h = {
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
      g = {
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
    t.formatOptions = d, t.buildHelpMessage = function(e, t, r) {
      var i = process.stdout.isTTY ? process.stdout.columns : 80,
        o = t + ("win32" === n.platform() ? ".exe" : "");
      return e + " " + r + "\n\n" + s.localize(27, null) + ": " + o + " [" + s.localize(28, null) + "] [" + s.localize(29, null) + "...]\n\n" + (a.isWindows ? s.localize(30, null, c.default.applicationName) : s.localize(31, null, c.default.applicationName)) + "\n\n" + s.localize(32, null) + ":\n" + d(h, i) + "\n\n" + s.localize(33, null) + ":\n" + d(v, i) + "\n\n" + s.localize(34, null) + ":\n" + d(g, i)
    }
  }), define(e[93], t([0, 1, 53, 76, 23, 5, 7, 52, 44, 16, 11, 96, 3]), function(e, t, n, r, i, s, a, c, u, l, f, d, p) {
    "use strict";

    function h(e, t) {
      return p.isWindows ? function(e, t) {
        return "\\\\.\\pipe\\" + n.createHash("md5").update(e).digest("hex") + "-" + u.default.version + "-" + t + "-sock"
      }(e, t) : function(e, t) {
        return b ? s.join(b, u.default.name + "-" + u.default.version + "-" + t + ".sock") : s.join(e, u.default.version + "-" + t + ".sock")
      }(e, t)
    }

    function v(e, t) {
      return m(e.debugPluginHost, e.debugBrkPluginHost, 5870, t, e.debugId)
    }

    function g(e, t) {
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
        var n = s.resolve(e);
        return s.normalize(e) === n ? n : s.resolve(t.env.VSCODE_CWD || t.cwd(), e)
      }
    }

    function w(e, t) {
      return y(e["user-data-dir"], t) || s.resolve(r.getDefaultUserDataPath(t.platform))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var b = process.env.XDG_RUNTIME_DIR,
      S = function() {
        function t(e, t) {
          if (this._args = e, this._execPath = t, !process.env.VSCODE_LOGS) {
            var n = d.toLocalISOString(new Date).replace(/-|:|\.\d+Z$/g, "");
            process.env.VSCODE_LOGS = s.join(this.userDataPath, "logs", n)
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
              return s.dirname(a.default.parse(e.toUrl("")).fsPath)
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
                return p.isWindows ? n ? s.join(s.dirname(e), "bin", l.default.applicationName + ".cmd") : s.join(t, "scripts", "code-cli.bat") : p.isLinux ? n ? s.join(s.dirname(e), "bin", "" + l.default.applicationName) : s.join(t, "scripts", "code-cli.sh") : n ? s.join(t, "bin", "code") : s.join(t, "scripts", "code-cli.sh")
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
              return w(this._args, process)
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
              return s.join(this.userDataPath, "User")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "appSettingsPath", {
            get: function() {
              return s.join(this.appSettingsHome, "settings.json")
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
              return s.join(this.appSettingsHome, "keybindings.json")
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
              return s.join(this.userDataPath, "Backups")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "backupWorkspacesPath", {
            get: function() {
              return s.join(this.backupHome, "workspaces.json")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "workspacesHome", {
            get: function() {
              return s.join(this.userDataPath, "Workspaces")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "installSourcePath", {
            get: function() {
              return s.join(this.userDataPath, "installSource")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "extensionsPath", {
            get: function() {
              return y(this._args["extensions-dir"], process) || process.env.VSCODE_EXTENSIONS || s.join(this.userHome, l.default.dataFolderName, "extensions")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "extensionDevelopmentPath", {
            get: function() {
              return this._args.extensionDevelopmentPath ? s.normalize(this._args.extensionDevelopmentPath) : this._args.extensionDevelopmentPath
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "extensionTestsPath", {
            get: function() {
              return this._args.extensionTestsPath ? s.normalize(this._args.extensionTestsPath) : this._args.extensionTestsPath
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
              return v(this._args, this.isBuilt)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(t.prototype, "debugSearch", {
            get: function() {
              return g(this._args, this.isBuilt)
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
              return this.isBuilt ? s.join(this.userDataPath, "CachedData", l.default.commit || new Array(41).join("0")) : void 0
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
          }), o([c.memoize], t.prototype, "appRoot", null), o([c.memoize], t.prototype, "cliPath", null), o([c.memoize], t.prototype, "userHome", null), o([c.memoize], t.prototype, "userDataPath", null), o([c.memoize], t.prototype, "appSettingsHome", null), o([c.memoize], t.prototype, "appSettingsPath", null), o([c.memoize], t.prototype, "settingsSearchBuildId", null), o([c.memoize], t.prototype, "settingsSearchUrl", null), o([c.memoize], t.prototype, "appKeybindingsPath", null), o([c.memoize], t.prototype, "isExtensionDevelopment", null), o([c.memoize], t.prototype, "backupHome", null), o([c.memoize], t.prototype, "backupWorkspacesPath", null), o([c.memoize], t.prototype, "workspacesHome", null), o([c.memoize], t.prototype, "installSourcePath", null), o([c.memoize], t.prototype, "extensionsPath", null), o([c.memoize], t.prototype, "extensionDevelopmentPath", null), o([c.memoize], t.prototype, "extensionTestsPath", null), o([c.memoize], t.prototype, "debugExtensionHost", null),
          o([c.memoize], t.prototype, "debugSearch", null), o([c.memoize], t.prototype, "logLevel", null), o([c.memoize], t.prototype, "mainIPCHandle", null), o([c.memoize], t.prototype, "sharedIPCHandle", null), o([c.memoize], t.prototype, "nodeCachedDataDir", null), t
      }();
    t.EnvironmentService = S, t.parseExtensionHostPort = v, t.parseSearchPort = g, t.parseDebugPort = m, t.parseUserDataDir = w
  }), define(e[34], t([0, 1, 10, 56]), function(e, t, n, r) {
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
  }), define(e[95], t([0, 1, 34, 4]), function(e, t, n, r) {
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
  }), define(e[42], t([0, 1, 118, 4, 34, 10, 17, 95, 8]), function(e, t, n, r, i, o, s, a, c) {
    "use strict";

    function u(e) {
      return t.OVERRIDE_PROPERTY_PATTERN.test(e) ? n.localize(3, null, e) : void 0 !== g.getConfigurationProperties()[e] ? n.localize(4, null, e) : null
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
      d = function() {
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
                var c = s.defaults[a];
                t.OVERRIDE_PROPERTY_PATTERN.test(a) && "object" == typeof c && (r.properties[a] = {
                  type: "object",
                  default: c,
                  description: n.localize(1, null, a),
                  $ref: t.editorConfigurationSchemaId
                })
              }
            }
            return Object.keys(r.properties).length ? r : null
          }, e.prototype.validateAndRegisterProperties = function(e, t, n, r) {
            void 0 === t && (t = !0),
              void 0 === n && (n = l.WINDOW), void 0 === r && (r = !1), n = void 0 !== e.scope && null !== e.scope ? e.scope : n, r = e.overridable || r;
            var i = [],
              s = e.properties;
            if (s)
              for (var a in s) {
                var c = void 0;
                if (t && (c = u(a))) console.warn(c), delete s[a];
                else {
                  var f = s[a],
                    d = f.default;
                  o.isUndefined(d) && (f.default = function(e) {
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
            var p = e.allOf;
            if (p)
              for (var h = 0, v = p; h < v.length; h++) {
                var g = v[h];
                i.push.apply(i, this.validateAndRegisterProperties(g, t, n, r))
              }
            return i
          }, e.prototype.getConfigurations = function() {
            return this.configurationContributors
          }, e.prototype.getConfigurationProperties = function() {
            return this.configurationProperties
          },
          e.prototype.getExcludedConfigurationProperties = function() {
            return this.excludedConfigurationProperties
          }, e.prototype.registerJSONConfiguration = function(e) {
            function n(e) {
              var r = e.properties;
              if (r)
                for (var i in r) t.settingsSchema.properties[i] = r[i], t.resourceSettingsSchema.properties[i] = c.deepClone(r[i]), r[i].scope !== l.RESOURCE && (t.resourceSettingsSchema.properties[i].doNotSuggest = !0);
              var o = e.allOf;
              o && o.forEach(n)
            }
            n(e)
          }, e.prototype.updateSchemaForOverrideSettingsConfiguration = function(e) {
            e.id !== p && (this.update(e), f.registerSchema(t.editorConfigurationSchemaId, this.editorConfigurationSchema))
          }, e.prototype.updateOverridePropertyPatternKey = function() {
            var e = t.settingsSchema.patternProperties[this.overridePropertyPattern];
            e || (e = {
                type: "object",
                description: n.localize(2, null),
                errorMessage: "Unknown Identifier. Use language identifiers",
                $ref: t.editorConfigurationSchemaId
              }), delete t.settingsSchema.patternProperties[this.overridePropertyPattern], this.computeOverridePropertyPattern(),
              t.settingsSchema.patternProperties[this.overridePropertyPattern] = e, t.resourceSettingsSchema.patternProperties[this.overridePropertyPattern] = e
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
            this.overridePropertyPattern = this.overrideIdentifiers.length ? v.replace("${0}", this.overrideIdentifiers.map(function(e) {
              return s.createRegExp(e, !1).source
            }).join("|")) : h
          }, e
      }(),
      p = "override",
      h = "\\[.*\\]$",
      v = "\\[(${0})\\]$";
    t.OVERRIDE_PROPERTY_PATTERN = new RegExp(h);
    var g = new d;
    i.Registry.add(t.Extensions.Configuration, g), t.validateProperty = u, t.getScopes = function(e) {
      var t = g.getConfigurationProperties();
      return e.map(function(e) {
        return t[e].scope
      })
    }
  }), define(e[20], t([0, 1, 8, 10, 7, 34, 6, 42]), function(e, t, n, r, i, o, s, a) {
    "use strict";

    function c(e, t) {
      var n = Object.create(null);
      for (var r in e) u(n, r, e[r], t);
      return n
    }

    function u(e, t, n, r) {
      for (var i = t.split("."), o = i.pop(), s = e, a = 0; a < i.length; a++) {
        var c = i[a],
          u = s[c];
        switch (typeof u) {
          case "undefined":
            u = s[c] = Object.create(null);
            break;
          case "object":
            break;
          default:
            return void r("Ignoring " + t + " as " + i.slice(0, a + 1).join(".") + " is " + JSON.stringify(u))
        }
        s = u
      }
      "object" == typeof s ? s[o] = n : r("Ignoring " + t + " as " + i.join(".") + " is " + JSON.stringify(s))
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

    function d(e, t, n) {
      Object.keys(t).forEach(function(i) {
        i in e ? r.isObject(e[i]) && r.isObject(t[i]) ? d(e[i], t[i], n) : n && (e[i] = t[i]) : e[i] = t[i]
      })
    }

    function p(e) {
      return e.substring(1, e.length - 1)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      t.IConfigurationService = s.createDecorator("configurationService"), t.isConfigurationOverrides = function(e) {
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
        var c = a[s],
          u = f(e.contents, c),
          l = f(t.contents, c);
        n.equals(u, l) || o.push(c)
      }
      return {
        added: r,
        removed: i,
        updated: o
      }
    }, t.toOverrides = function(e, t) {
      for (var n = [], r = o.Registry.as(a.Extensions.Configuration).getConfigurationProperties(), i = 0, s = Object.keys(e); i < s.length; i++) {
        var u = s[i];
        if (a.OVERRIDE_PROPERTY_PATTERN.test(u)) {
          var l = {};
          for (var f in e[u]) r[f] && r[f].overridable && (l[f] = e[u][f]);
          n.push({
            identifiers: [p(u).trim()],
            contents: c(l, t)
          })
        }
      }
      return n
    }, t.toValuesTree = c, t.addToValueTree = u, t.removeFromValueTree = function(e, t) {
      l(e, t.split("."))
    }, t.getConfigurationValue = f, t.merge = d, t.getConfigurationKeys = function() {
      var e = o.Registry.as(a.Extensions.Configuration).getConfigurationProperties();
      return Object.keys(e)
    }, t.getDefaultValues = function() {
      var e = Object.create(null),
        t = o.Registry.as(a.Extensions.Configuration).getConfigurationProperties();
      for (var n in t) u(e, n, t[n].default, function(e) {
        return console.error("Conflict in default settings: " + e)
      });
      return e
    }, t.overrideIdentifierFromKey = p, t.keyFromOverrideIdentifier = function(e) {
      return "[" + e + "]"
    }
  }), define(e[67], t([0, 1, 39, 35, 21, 10, 8, 7, 42, 20]), function(e, t, r, i, o, s, a, c, u, l) {
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
          var c = s[i],
            u = this.contents[c],
            l = n[c];
          l && ("object" == typeof u && "object" == typeof l ? (u = a.deepClone(u), this.mergeContents(u, l)) : u = l), r[c] = u
        }
        return new e(r)
      }, e.prototype.merge = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        for (var r = a.deepClone(this.contents), i = a.deepClone(this.overrides), s = this.keys.slice(), c = 0, u = t; c < u.length; c++) {
          var l = u[c];
          this.mergeContents(r, l.contents);
          for (var f = function(e) {
              var t = i.filter(function(t) {
                return o.equals(t.identifiers, e.identifiers)
              })[0];
              t ? d.mergeContents(t.contents, e.contents) : i.push(e)
            }, d = this, p = 0, h = l.overrides; p < h.length; p++) {
            f(h[p])
          }
          for (var v = 0, g = l.keys; v < g.length; v++) {
            var m = g[v]; - 1 === s.indexOf(m) && s.push(m)
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
    var d = function(e) {
      function t() {
        for (var t = l.getDefaultValues(), n = l.getConfigurationKeys(), r = [], i = 0, o = Object.keys(t); i < o.length; i++) {
          var s = o[i];
          u.OVERRIDE_PROPERTY_PATTERN.test(s) && r.push({
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
    t.DefaultConfigurationModel = d;
    var p = function() {
      function e(e) {
        this._name = e,
          this._configurationModel = null, this._parseErrors = []
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
            c = {
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
            r.visit(e, c), n = o[0] || {}
          } catch (e) {
            console.error("Error while parsing settings file " + this._name + ": " + e), this._parseErrors = [e]
          }
          return n
        },
        e.prototype.parseRaw = function(e) {
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
    t.ConfigurationModelParser = p;
    var h = function() {
      function e(e, t, n, r, o, s) {
        void 0 === n && (n = new f), void 0 === r && (r = new i.StrictResourceMap), void 0 === o && (o = new f), void 0 === s && (s = new i.StrictResourceMap), this._defaultConfiguration = e, this._userConfiguration = t, this._workspaceConfiguration = n, this._folderConfigurations = r, this._memoryConfiguration = o, this._memoryConfigurationByResource = s, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations = new i.StrictResourceMap
      }
      return e.prototype.getValue = function(e, t, n) {
          return this.getConsolidateConfigurationModel(t, n).getValue(e)
        }, e.prototype.updateValue = function(e, t, n) {
          void 0 === n && (n = {});
          var r;
          n.resource ? (r = this._memoryConfigurationByResource.get(n.resource)) || (r = new f,
            this._memoryConfigurationByResource.set(n.resource, r)) : r = this._memoryConfiguration, void 0 === t ? r.removeValue(e) : r.setValue(e, t), n.resource || (this._workspaceConsolidatedConfiguration = null)
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
          this._userConfiguration = e, this._workspaceConsolidatedConfiguration = null, this._foldersConsolidatedConfigurations.clear()
        }, e.prototype.updateWorkspaceConfiguration = function(e) {
          this._workspaceConfiguration = e, this._workspaceConsolidatedConfiguration = null,
            this._foldersConsolidatedConfigurations.clear()
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
        },
        e.prototype.allKeys = function(e) {
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
            return n.set(c.default.parse(r), e.parseConfigurationModel(t.folders[r])), n
          }, new i.StrictResourceMap))
        }, e.parseConfigurationModel = function(e) {
          return new f(e.contents, e.keys, e.overrides).freeze()
        }, e
    }();
    t.Configuration = h;
    var v = function() {
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
    t.AbstractConfigurationChangeEvent = v;
    var g = function(e) {
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
        },
        t.prototype.getOrSetChangedConfigurationForResource = function(e) {
          var t = this._changedConfigurationByResource.get(e);
          return t || (t = new f, this._changedConfigurationByResource.set(e, t)), t
        }, t
    }(v);
    t.ConfigurationChangeEvent = g
  }), define(e[99], t([0, 1, 13, 27, 67, 63, 4, 2]), function(e, t, r, i, o, s, a, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = function(e) {
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
      return n(t, e),
        Object.defineProperty(t.prototype, "configurationModel", {
          get: function() {
            return this.userConfigModelWatcher.getConfig().configurationModel
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.reload = function() {
          var e = this;
          return new c.TPromise(function(t) {
            return e.userConfigModelWatcher.reload(function() {
              return t(null)
            })
          })
        }, t
    }(r.Disposable);
    t.UserConfiguration = u
  }), define(e[100], t([0, 1, 34, 42, 13, 20, 67, 4, 9, 2, 8, 99]), function(e, t, r, i, s, c, u, l, f, d, p, h) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var v = function(e) {
      function t(t) {
        var n = e.call(this) || this;
        return n._onDidChangeConfiguration = n._register(new l.Emitter), n.onDidChangeConfiguration = n._onDidChangeConfiguration.event, n.userConfiguration = n._register(new h.UserConfiguration(t.appSettingsPath)), n.reset(), n._register(n.userConfiguration.onDidChangeConfiguration(function() {
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
          r = c.isConfigurationOverrides(e) ? e : c.isConfigurationOverrides(t) ? t : {};
        return this.configuration.getValue(n, r, null)
      }, t.prototype.updateValue = function(e, t, n, r) {
        return d.TPromise.wrapError(new Error("not supported"))
      }, t.prototype.inspect = function(e) {
        return this.configuration.inspect(e, {}, null)
      }, t.prototype.keys = function() {
        return this.configuration.keys(null)
      }, t.prototype.reloadConfiguration = function(e) {
        var t = this;
        return e ? d.TPromise.as(null) : this.userConfiguration.reload().then(function() {
          return t.onDidChangeUserConfiguration()
        })
      }, t.prototype.onDidChangeUserConfiguration = function() {
        var e = this,
          t = [],
          n = c.compare(this._configuration.user, this.userConfiguration.configurationModel),
          r = n.added,
          i = n.updated,
          o = n.removed;
        if ((t = r.concat(i, o)).length) {
          var s = this._configuration;
          this.reset(), (t = t.filter(function(t) {
            return !p.equals(s.getValue(t, {}, null), e._configuration.getValue(t, {}, null))
          })).length && this.trigger(t, c.ConfigurationTarget.USER)
        }
      }, t.prototype.onDidRegisterConfiguration = function(e) {
        this.reset(), this.trigger(e, c.ConfigurationTarget.DEFAULT)
      }, t.prototype.reset = function() {
        var e = new u.DefaultConfigurationModel,
          t = this.userConfiguration.configurationModel;
        this._configuration = new u.Configuration(e, t)
      }, t.prototype.trigger = function(e, t) {
        this._onDidChangeConfiguration.fire((new u.ConfigurationChangeEvent).change(e).telemetryData(t, this.getTargetConfiguration(t)))
      }, t.prototype.getTargetConfiguration = function(e) {
        switch (e) {
          case c.ConfigurationTarget.DEFAULT:
            return this._configuration.defaults.contents;
          case c.ConfigurationTarget.USER:
            return this._configuration.user.contents
        }
        return {}
      }, t = o([a(0, f.IEnvironmentService)], t)
    }(s.Disposable);
    t.ConfigurationService = v
  }), define(e[37], t([0, 1, 69, 6, 42, 34]), function(e, t, n, r, i, o) {
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
  }), define(e[28], t([0, 1, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IStateService = n.createDecorator("stateService")
  }), define(e[103], t([0, 1, 5, 48, 9, 29, 10, 11]), function(e, t, n, r, i, s, c, u) {
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
        },
        e.prototype.getItem = function(e, t) {
          this.ensureLoaded();
          var n = this.database[e];
          return c.isUndefinedOrNull(n) ? t : n
        }, e.prototype.setItem = function(e, t) {
          if (this.ensureLoaded(), c.isUndefinedOrNull(t)) return this.removeItem(e);
          ("string" != typeof t && "number" != typeof t && "boolean" != typeof t || this.database[e] !== t) && (this.database[e] = t, this.saveSync())
        }, e.prototype.removeItem = function(e) {
          this.ensureLoaded(), c.isUndefined(this.database[e]) || (this.database[e] = void 0, this.saveSync())
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
      }, e = o([a(0, i.IEnvironmentService), a(1, u.ILogService)], e)
    }();
    t.StateService = f
  }), define(e[40], t([0, 1, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ITelemetryService = n.createDecorator("telemetryService")
  }), define(e[106], t([0, 1, 2]), function(e, t, n) {
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
  }), define(e[107], t([0, 1, 70, 17, 6, 20, 42, 2, 13, 8, 34]), function(e, t, n, r, i, s, c, u, l, f, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var p = function() {
      function e(e, t) {
        this._configurationService = t, this._disposables = [], this._cleanupPatterns = [], this._appender = e.appender, this._commonProperties = e.commonProperties || u.TPromise.as({}), this._piiPaths = e.piiPaths || [], this._userOptIn = void 0 === e.userOptIn || e.userOptIn, this._cleanupPatterns.push([/file:\/\/\/.*?\/resources\/app\//gi, ""], [/file:\/\/\/.*/gi, ""], [/ENOENT: no such file or directory.*?\'([^\']+)\'/gi, "ENOENT: no such file or directory"]);
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
        },
        Object.defineProperty(e.prototype, "isOptedIn", {
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
          }) : u.TPromise.as(void 0)
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
    t.TelemetryService = p;
    var h = "telemetry";
    d.Registry.as(c.Extensions.Configuration).registerConfiguration({
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
  }), define(e[108], t([0, 1, 2, 82, 14, 20, 84]), function(e, t, n, r, i, o, s) {
    "use strict";

    function a(e, t) {
      return t.onDidChangeConfiguration(function(t) {
        t.source !== o.ConfigurationTarget.DEFAULT && (e.publicLog("updateConfiguration", {
          configurationSource: o.ConfigurationTarget[t.source],
          configurationKeys: function(e) {
            if (!e) return [];
            var t = [];
            return c(t, "", e), t
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
          }(t.sourceConfig, u)
        }))
      })
    }

    function c(e, t, n) {
      n && "object" == typeof n && !Array.isArray(n) ? Object.keys(n).forEach(function(r) {
        return c(e, t ? t + "." + r : r, n[r])
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
    var u = ["editor.tabCompletion", "editor.fontFamily", "editor.fontWeight", "editor.fontSize", "editor.lineHeight", "editor.letterSpacing", "editor.lineNumbers", "editor.rulers", "editor.wordSeparators", "editor.tabSize", "editor.insertSpaces", "editor.detectIndentation", "editor.roundedSelection", "editor.scrollBeyondLastLine", "editor.minimap.enabled", "editor.minimap.renderCharacters", "editor.minimap.maxColumn", "editor.find.seedSearchStringFromSelection", "editor.find.autoFindInSelection", "editor.wordWrap", "editor.wordWrapColumn", "editor.wrappingIndent", "editor.mouseWheelScrollSensitivity", "editor.multiCursorModifier", "editor.quickSuggestions", "editor.quickSuggestionsDelay", "editor.parameterHints", "editor.autoClosingBrackets", "editor.autoIndent", "editor.formatOnType", "editor.formatOnPaste", "editor.suggestOnTriggerCharacters", "editor.acceptSuggestionOnEnter", "editor.acceptSuggestionOnCommitCharacter", "editor.snippetSuggestions", "editor.emptySelectionClipboard", "editor.wordBasedSuggestions", "editor.suggestFontSize", "editor.suggestLineHeight", "editor.selectionHighlight", "editor.occurrencesHighlight", "editor.overviewRulerLanes", "editor.overviewRulerBorder", "editor.cursorBlinking", "editor.cursorStyle", "editor.mouseWheelZoom", "editor.fontLigatures", "editor.hideCursorInOverviewRuler", "editor.renderWhitespace", "editor.renderControlCharacters", "editor.renderIndentGuides", "editor.renderLineHighlight", "editor.codeLens", "editor.folding", "editor.showFoldingControls", "editor.matchBrackets", "editor.glyphMargin", "editor.useTabStops", "editor.trimAutoWhitespace", "editor.stablePeek", "editor.dragAndDrop", "editor.formatOnSave", "editor.colorDecorators", "window.zoomLevel", "files.autoSave", "files.hotExit", "files.associations", "workbench.statusBar.visible", "files.trimTrailingWhitespace", "git.confirmSync", "workbench.sideBar.location", "window.openFilesInNewWindow", "javascript.validate.enable", "window.restoreWindows", "extensions.autoUpdate", "files.eol", "explorer.openEditors.visible", "workbench.editor.enablePreview", "files.autoSaveDelay", "workbench.editor.showTabs", "files.encoding", "files.autoGuessEncoding", "git.enabled", "http.proxyStrictSSL", "terminal.integrated.fontFamily", "workbench.editor.enablePreviewFromQuickOpen", "workbench.editor.swipeToNavigate", "php.builtInCompletions.enable", "php.validate.enable", "php.validate.run", "workbench.welcome.enabled", "workbench.startupEditor"];
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
  }), define(e[109], t([0, 1, 3, 23, 32, 25]), function(e, t, n, r, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.resolveCommonProperties = function(e, t, s, a) {
      var c = Object.create(null);
      c["common.machineId"] = s, c.sessionID = i.generateUuid() + Date.now(), c.commitHash = e, c.version = t, c["common.osVersion"] = r.release(), c["common.platform"] = n.Platform[n.platform], c["common.nodePlatform"] = process.platform, c["common.nodeArch"] = process.arch;
      var u = 0,
        l = Date.now();
      return Object.defineProperties(c, {
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
              return u++
            },
            enumerable: !0
          }
        }),
        o.readFile(a, "utf8").then(function(e) {
          return c["common.source"] = e.slice(0, 30), c
        }, function(e) {
          return c
        })
    }
  }), define(e[46], t([0, 1, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    ! function(e) {
      e[e.Uninitialized = 0] = "Uninitialized", e[e.Idle = 1] = "Idle", e[e.CheckingForUpdate = 2] = "CheckingForUpdate", e[e.UpdateAvailable = 3] = "UpdateAvailable", e[e.UpdateDownloaded = 4] = "UpdateDownloaded"
    }(t.State || (t.State = {}));
    ! function(e) {
      e[e.Implicit = 0] = "Implicit", e[e.Explicit = 1] = "Explicit"
    }(t.ExplicitState || (t.ExplicitState = {})), t.IUpdateService = n.createDecorator("updateService")
  }), define(e[111], t([0, 1, 2, 31, 4, 27, 46]), function(e, t, n, r, i, o, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = function() {
      function e(e) {
        this.service = e
      }
      return e.prototype.call = function(e, t) {
        switch (e) {
          case "event:onError":
            return r.eventToCall(this.service.onError);
          case "event:onUpdateAvailable":
            return r.eventToCall(this.service.onUpdateAvailable);
          case "event:onUpdateNotAvailable":
            return r.eventToCall(this.service.onUpdateNotAvailable);
          case "event:onUpdateReady":
            return r.eventToCall(this.service.onUpdateReady);
          case "event:onStateChange":
            return r.eventToCall(this.service.onStateChange);
          case "checkForUpdates":
            return this.service.checkForUpdates(t);
          case "quitAndInstall":
            return this.service.quitAndInstall();
          case "_getInitialState":
            return n.TPromise.as(this.service.state)
        }
      }, e
    }();
    t.UpdateChannel = a;
    var c = function() {
      function e(e) {
        var t = this;
        this.channel = e, this._onError = r.eventFromCall(this.channel, "event:onError"), this._onUpdateAvailable = r.eventFromCall(this.channel, "event:onUpdateAvailable"), this._onUpdateNotAvailable = r.eventFromCall(this.channel, "event:onUpdateNotAvailable"), this._onUpdateReady = r.eventFromCall(this.channel, "event:onUpdateReady"), this._onRemoteStateChange = r.eventFromCall(this.channel, "event:onStateChange"), this._onStateChange = new i.Emitter, this._state = s.State.Uninitialized, this.onStateChange(function(e) {
          return t._state = e
        }), e.call("_getInitialState").done(function(e) {
          t._onStateChange.fire(e), t._onRemoteStateChange(function(e) {
            return t._onStateChange.fire(e)
          })
        }, o.onUnexpectedError)
      }
      return Object.defineProperty(e.prototype, "onError", {
        get: function() {
          return this._onError
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "onUpdateAvailable", {
        get: function() {
          return this._onUpdateAvailable
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "onUpdateNotAvailable", {
        get: function() {
          return this._onUpdateNotAvailable
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "onUpdateReady", {
        get: function() {
          return this._onUpdateReady
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "onStateChange", {
        get: function() {
          return this._onStateChange.event
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "state", {
        get: function() {
          return this._state
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.checkForUpdates = function(e) {
        return this.channel.call("checkForUpdates", e)
      }, e.prototype.quitAndInstall = function() {
        return this.channel.call("quitAndInstall")
      }, e
    }();
    t.UpdateChannelClient = c
  }), define(e[43], t([0, 1, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ID = "urlService", t.IURLService = n.createDecorator(t.ID)
  }), define(e[113], t([0, 1, 4, 16, 12, 7]), function(e, t, n, r, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function() {
      function e(e) {
        void 0 === e && (e = []), this.openUrlEmitter = new n.Emitter;
        var t = global.getOpenUrls() || [],
          s = ("string" == typeof e ? [e] : e).concat(t);
        i.app.setAsDefaultProtocolClient(r.default.urlProtocol, process.execPath, ["--open-url", "--"]);
        var a = n.fromNodeEventEmitter(i.app, "open-url", function(e, t) {
            return {
              event: e,
              url: t
            }
          }),
          c = n.mapEvent(a, function(e) {
            var t = e.event,
              n = e.url;
            return t.preventDefault(), n
          }),
          u = n.echo(c, !0, s);
        this.onOpenURL = n.chain(n.anyEvent(u, this.openUrlEmitter.event)).map(function(e) {
          try {
            return o.default.parse(e)
          } catch (e) {
            return null
          }
        }).filter(function(e) {
          return !!e
        }).event
      }
      return e.prototype.open = function(e) {
        this.openUrlEmitter.fire(e)
      }, e
    }();
    t.URLService = s
  }), define(e[22], t([0, 1, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IWindowsService = n.createDecorator("windowsService"), t.IWindowService = n.createDecorator("windowService");
    ! function(e) {
      e[e.CLI = 0] = "CLI", e[e.DOCK = 1] = "DOCK", e[e.MENU = 2] = "MENU", e[e.DIALOG = 3] = "DIALOG", e[e.DESKTOP = 4] = "DESKTOP", e[e.API = 5] = "API"
    }(t.OpenContext || (t.OpenContext = {}));
    ! function(e) {
      e[e.NONE = 0] = "NONE", e[e.LOADING = 1] = "LOADING", e[e.NAVIGATING = 2] = "NAVIGATING", e[e.READY = 3] = "READY"
    }(t.ReadyState || (t.ReadyState = {}))
  }), define(e[38], t([0, 1, 12, 2, 11, 28, 4, 6, 22, 85]), function(e, t, n, r, i, s, c, u, l, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ILifecycleService = u.createDecorator("lifecycleService");
    var d;
    ! function(e) {
      e[e.CLOSE = 1] = "CLOSE", e[e.QUIT = 2] = "QUIT", e[e.RELOAD = 3] = "RELOAD", e[e.LOAD = 4] = "LOAD"
    }(d = t.UnloadReason || (t.UnloadReason = {}));
    var p = function() {
      function e(e, t) {
        this.logService = e, this.stateService = t, this._onBeforeQuit = new c.Emitter, this.onBeforeQuit = this._onBeforeQuit.event,
          this._onBeforeWindowClose = new c.Emitter, this.onBeforeWindowClose = this._onBeforeWindowClose.event, this._onBeforeWindowUnload = new c.Emitter, this.onBeforeWindowUnload = this._onBeforeWindowUnload.event, this.windowToCloseRequest = Object.create(null), this.quitRequested = !1, this.oneTimeListenerTokenGenerator = 0, this._wasRestarted = !1, this.handleRestarted()
      }
      return e.prototype.handleRestarted = function() {
        this._wasRestarted = !!this.stateService.getItem(e.QUIT_FROM_RESTART_MARKER), this._wasRestarted && this.stateService.removeItem(e.QUIT_FROM_RESTART_MARKER)
      }, Object.defineProperty(e.prototype, "wasRestarted", {
        get: function() {
          return this._wasRestarted
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.ready = function() {
        this.registerListeners()
      }, e.prototype.registerListeners = function() {
        var e = this;
        n.app.on("before-quit", function(t) {
          e.logService.trace("Lifecycle#before-quit"), e.quitRequested || e._onBeforeQuit.fire(), e.quitRequested = !0
        }), n.app.on("window-all-closed", function() {
          e.logService.trace("Lifecycle#window-all-closed"),
            (e.quitRequested || "darwin" !== process.platform) && n.app.quit()
        })
      }, e.prototype.registerWindow = function(e) {
        var t = this;
        e.win.on("close", function(n) {
          var r = e.id;
          if (t.logService.trace("Lifecycle#window-before-close", r), t.windowToCloseRequest[r]) return t.logService.trace("Lifecycle#window-close", r), void delete t.windowToCloseRequest[r];
          n.preventDefault(), t.unload(e, d.CLOSE).done(function(n) {
            n ? (t.quitRequested = !1, delete t.windowToCloseRequest[r]) : (t.windowToCloseRequest[r] = !0, t._onBeforeWindowClose.fire(e), e.close())
          })
        })
      }, e.prototype.unload = function(e, t, n) {
        var i = this;
        if (e.readyState !== l.ReadyState.READY) return r.TPromise.as(!1);
        this.logService.trace("Lifecycle#unload()", e.id);
        var o = this.quitRequested ? d.QUIT : t;
        return this.doUnloadWindowInRenderer(e, o, n).then(function(t) {
          return t ? i.handleVeto(t) : i.doUnloadWindowInMain(e, o).then(function(e) {
            return i.handleVeto(e)
          })
        })
      }, e.prototype.handleVeto = function(e) {
        return e && this.pendingQuitPromiseComplete && (this.pendingQuitPromiseComplete(!0), this.pendingQuitPromiseComplete = null,
          this.pendingQuitPromise = null), e
      }, e.prototype.doUnloadWindowInRenderer = function(e, t, i) {
        var o = this;
        return new r.TPromise(function(r) {
          var s = o.oneTimeListenerTokenGenerator++,
            a = "vscode:ok" + s,
            c = "vscode:cancel" + s;
          n.ipcMain.once(a, function() {
            r(!1)
          }), n.ipcMain.once(c, function() {
            r(!0)
          }), e.send("vscode:beforeUnload", {
            okChannel: a,
            cancelChannel: c,
            reason: t,
            payload: i
          })
        })
      }, e.prototype.doUnloadWindowInMain = function(e, t) {
        var n = this,
          r = [];
        return this._onBeforeWindowUnload.fire({
          reason: t,
          window: e,
          veto: function(e) {
            r.push(e)
          }
        }), f.handleVetos(r, function(e) {
          return n.logService.error(e)
        })
      }, e.prototype.quit = function(t) {
        var i = this;
        return this.logService.trace("Lifecycle#quit()"), this.pendingQuitPromise || (this.pendingQuitPromise = new r.TPromise(function(r) {
            i.pendingQuitPromiseComplete = r, n.app.once("will-quit", function() {
              i.pendingQuitPromiseComplete && (t && i.stateService.setItem(e.QUIT_FROM_RESTART_MARKER, !0), i.pendingQuitPromiseComplete(!1), i.pendingQuitPromiseComplete = null, i.pendingQuitPromise = null)
            }), n.app.quit()
          })),
          this.pendingQuitPromise
      }, e.prototype.kill = function(e) {
        n.app.exit(e)
      }, e.prototype.relaunch = function(t) {
        var r = this,
          i = process.argv.slice(1);
        if (t && t.addArgs && i.push.apply(i, t.addArgs), t && t.removeArgs)
          for (var o = 0, s = t.removeArgs; o < s.length; o++) {
            var a = s[o],
              c = i.indexOf(a);
            c >= 0 && i.splice(c, 1)
          }
        var u = !1;
        n.app.once("quit", function() {
          u || (r.stateService.setItem(e.QUIT_FROM_RESTART_MARKER, !0), n.app.relaunch({
            args: i
          }))
        }), this.quit().then(function(e) {
          u = e
        })
      }, e.prototype.isQuitRequested = function() {
        return !!this.quitRequested
      }, e.QUIT_FROM_RESTART_MARKER = "quit.from.restart", e = o([a(0, i.ILogService), a(1, s.IStateService)], e)
    }();
    t.LifecycleService = p
  }), define(e[116], t([0, 1, 31, 4, 22, 7]), function(e, t, n, r, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = function(e) {
        return e.toJSON()
      },
      u = function(e) {
        return s.default.revive(e)
      },
      l = function() {
        function e(e, t) {
          var n = this;
          this.service = e, t.onWindowFocus(function(e) {
            return n.focusedWindowId = e
          })
        }
        return e.prototype.call = function(e, t) {
          var i = this;
          switch (e) {
            case "event:onOpenURL":
              return n.eventToCall(r.filterEvent(this.service.onOpenURL, function() {
                return i.isWindowFocused(t)
              }), c)
          }
        }, e.prototype.isWindowFocused = function(e) {
          return this.focusedWindowId === e
        }, e = o([a(1, i.IWindowsService)], e)
      }();
    t.URLChannel = l;
    var f = function() {
      function e(e, t) {
        this.channel = e, this.windowID = t, this._onOpenURL = n.eventFromCall(this.channel, "event:onOpenURL", this.windowID, u)
      }
      return Object.defineProperty(e.prototype, "onOpenURL", {
        get: function() {
          return this._onOpenURL
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.open = function(e) {}, e
    }();
    t.URLChannelClient = f
  }), define(e[117], t([0, 1, 4, 31, 7]), function(e, t, n, r, i) {
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
        }, e.prototype.showMessageBox = function(e, t) {
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
        }, e.prototype.addRecentlyOpened = function(e) {
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
        },
        e.prototype.focusWindow = function(e) {
          return this.channel.call("focusWindow", e)
        }, e.prototype.closeWindow = function(e) {
          return this.channel.call("closeWindow", e)
        }, e.prototype.isFocused = function(e) {
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
        },
        e.prototype.openWindow = function(e, t) {
          return this.channel.call("openWindow", [e, t])
        }, e.prototype.openNewWindow = function() {
          return this.channel.call("openNewWindow")
        }, e.prototype.showWindow = function(e) {
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
  }), define(e[30], t([0, 1, 6]), function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      t.IWindowsMainService = n.createDecorator("windowsMainService")
  }), define(e[119], t([0, 1, 110, 13, 30, 4, 12]), function(e, t, n, r, i, s, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = function() {
      function t(e) {
        this.windowsMainService = e, this.retryCount = 0, this.disposables = [];
        s.fromNodeEventEmitter(c.app, "login", function(e, t, n, r, i) {
          return {
            event: e,
            webContents: t,
            req: n,
            authInfo: r,
            cb: i
          }
        })(this.onLogin, this, this.disposables)
      }
      return t.prototype.onLogin = function(t) {
        var r = t.event,
          i = t.authInfo,
          o = t.cb;
        if (i.isProxy && !(this.retryCount++ > 1)) {
          r.preventDefault();
          var s = {
              alwaysOnTop: !0,
              skipTaskbar: !0,
              resizable: !1,
              width: 450,
              height: 220,
              show: !0,
              title: "VS Code"
            },
            a = this.windowsMainService.getFocusedWindow();
          a && (s.parent = a.win, s.modal = !0);
          var u = new c.BrowserWindow(s),
            l = e.toUrl("vs/code/electron-browser/proxy/auth.html") + "?config=" + encodeURIComponent(JSON.stringify({})),
            f = i.host + ":" + i.port,
            d = {
              title: n.localize(0, null),
              message: n.localize(1, null, f)
            },
            p = "promptForCredentials(" + JSON.stringify(d) + ")",
            h = function() {
              return o("", "")
            };
          u.on("close", h), u.setMenu(null), u.loadURL(l), u.webContents.executeJavaScript(p, !0).then(function(e) {
            var t = e.username,
              n = e.password;
            o(t, n), u.removeListener("close", h), u.close()
          })
        }
      }, t.prototype.dispose = function() {
        this.disposables = r.dispose(this.disposables)
      }, t = o([a(0, i.IWindowsMainService)], t)
    }();
    t.ProxyAuthHandler = u
  }), define(e[64], t([0, 1, 146, 28, 4, 63, 9, 12, 30, 11]), function(e, t, n, r, i, s, c, u, l, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = function() {
      function e() {
        this._emitter = new i.Emitter, this._registered = !1
      }
      return e.prototype.onDidChangeKeyboardLayout = function(e) {
        var t = this;
        return this._registered || (this._registered = !0, n.onDidChangeKeyboardLayout(function() {
          t._emitter.fire()
        })), this._emitter.event(e)
      }, e.INSTANCE = new e, e
    }();
    t.KeyboardLayoutMonitor = d;
    var p = function() {
      function e(t, n, r, o) {
        var a = this;
        this.stateService = t, this.windowsMainService = r, this.logService = o, this._onKeybindingsChanged = new i.Emitter, this.onKeybindingsChanged = this._onKeybindingsChanged.event, this.commandIds = new Set,
          this.keybindings = this.stateService.getItem(e.lastKnownKeybindingsMapStorageKey) || Object.create(null), this.keybindingsWatcher = new s.ConfigWatcher(n.appKeybindingsPath, {
            changeBufferDelay: 100,
            onError: function(e) {
              return a.logService.error(e)
            }
          }), this.registerListeners()
      }
      return e.prototype.registerListeners = function() {
          var t = this;
          u.ipcMain.on("vscode:keybindingsResolved", function(n, r) {
            var i = [];
            try {
              i = JSON.parse(r)
            } catch (e) {}
            var o = !1,
              s = 0,
              a = Object.create(null);
            i.forEach(function(e) {
              s++, a[e.id] = e, t.keybindings[e.id] && e.label === t.keybindings[e.id].label || (o = !0)
            }), Object.keys(t.keybindings).length !== s && (o = !0), o && (t.keybindings = a, t.stateService.setItem(e.lastKnownKeybindingsMapStorageKey, t.keybindings), t._onKeybindingsChanged.fire())
          });
          i.once(this.windowsMainService.onWindowReady)(function(e) {
            return t.resolveKeybindings(e)
          }), this.keybindingsWatcher.onDidUpdateConfiguration(function() {
            return t.resolveKeybindings()
          }), this.windowsMainService.onWindowReload(function() {
            return t.resolveKeybindings()
          })
        },
        e.prototype.resolveKeybindings = function(e) {
          if (void 0 === e && (e = this.windowsMainService.getLastActiveWindow()), this.commandIds.size && e) {
            var t = [];
            this.commandIds.forEach(function(e) {
              return t.push(e)
            }), e.sendWhenReady("vscode:resolveKeybindings", JSON.stringify(t))
          }
        }, e.prototype.getKeybinding = function(e) {
          if (e) return this.commandIds.has(e) || this.commandIds.add(e), this.keybindings[e]
        }, e.prototype.dispose = function() {
          this._onKeybindingsChanged.dispose(), this.keybindingsWatcher.dispose()
        }, e.lastKnownKeybindingsMapStorageKey = "lastKnownKeybindings", e = o([a(0, r.IStateService), a(1, c.IEnvironmentService), a(2, l.IWindowsMainService), a(3, f.ILogService)], e)
    }();
    t.KeybindingsResolver = p
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
  define(e[121], t([0, 1, 2, 13, 8, 7, 22, 9, 12, 4, 43, 38, 30, 36]), function(e, t, n, s, c, u, l, f, d, p, h, v, g, m) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var y = function() {
        function e(e, t, n, r, i, o) {
          var s = this;
          this.sharedProcess = e, this.windowsMainService = t, this.environmentService = n, this.lifecycleService = i,
            this.historyService = o, this.disposables = [], this.onWindowOpen = p.fromNodeEventEmitter(d.app, "browser-window-created", function(e, t) {
              return t.id
            }), this.onWindowFocus = p.fromNodeEventEmitter(d.app, "browser-window-focus", function(e, t) {
              return t.id
            }), this.onWindowBlur = p.fromNodeEventEmitter(d.app, "browser-window-blur", function(e, t) {
              return t.id
            }), p.chain(r.onOpenURL).filter(function(e) {
              return "file" === e.authority && !!e.path
            }).map(function(e) {
              return u.default.file(e.fsPath)
            }).on(this.openFileForURI, this, this.disposables), p.chain(r.onOpenURL).filter(function(e) {
              return /^extension/.test(e.path)
            }).filter(function() {
              return 0 === s.windowsMainService.getWindowCount()
            }).on(this.openExtensionForURI, this, this.disposables)
        }
        return e.prototype.pickFileFolderAndOpen = function(e) {
            return this.windowsMainService.pickFileFolderAndOpen(e), n.TPromise.as(null)
          }, e.prototype.pickFileAndOpen = function(e) {
            return this.windowsMainService.pickFileAndOpen(e), n.TPromise.as(null)
          }, e.prototype.pickFolderAndOpen = function(e) {
            return this.windowsMainService.pickFolderAndOpen(e), n.TPromise.as(null)
          }, e.prototype.pickWorkspaceAndOpen = function(e) {
            return this.windowsMainService.pickWorkspaceAndOpen(e), n.TPromise.as(null)
          }, e.prototype.showMessageBox = function(e, t) {
            var n = this.windowsMainService.getWindowById(e);
            return this.windowsMainService.showMessageBox(t, n)
          }, e.prototype.showSaveDialog = function(e, t) {
            var n = this.windowsMainService.getWindowById(e);
            return this.windowsMainService.showSaveDialog(t, n)
          }, e.prototype.showOpenDialog = function(e, t) {
            var n = this.windowsMainService.getWindowById(e);
            return this.windowsMainService.showOpenDialog(t, n)
          }, e.prototype.reloadWindow = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            return t && this.windowsMainService.reload(t), n.TPromise.as(null)
          }, e.prototype.openDevTools = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            return t && t.win.webContents.openDevTools(), n.TPromise.as(null)
          }, e.prototype.toggleDevTools = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            if (t) {
              var r = t.win.webContents;
              !t.hasHiddenTitleBarStyle() || t.win.isFullScreen() || r.isDevToolsOpened() ? r.toggleDevTools() : r.openDevTools({
                mode: "undocked"
              })
            }
            return n.TPromise.as(null)
          }, e.prototype.updateTouchBar = function(e, t) {
            var r = this.windowsMainService.getWindowById(e);
            return r && r.updateTouchBar(t), n.TPromise.as(null)
          }, e.prototype.closeWorkspace = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            return t && this.windowsMainService.closeWorkspace(t), n.TPromise.as(null)
          }, e.prototype.createAndEnterWorkspace = function(e, t, r) {
            var i = this.windowsMainService.getWindowById(e);
            return i ? this.windowsMainService.createAndEnterWorkspace(i, t, r) : n.TPromise.as(null)
          }, e.prototype.saveAndEnterWorkspace = function(e, t) {
            var r = this.windowsMainService.getWindowById(e);
            return r ? this.windowsMainService.saveAndEnterWorkspace(r, t) : n.TPromise.as(null)
          }, e.prototype.toggleFullScreen = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            return t && t.toggleFullScreen(), n.TPromise.as(null)
          }, e.prototype.setRepresentedFilename = function(e, t) {
            var r = this.windowsMainService.getWindowById(e);
            return r && r.setRepresentedFilename(t), n.TPromise.as(null)
          }, e.prototype.addRecentlyOpened = function(e) {
            return this.historyService.addRecentlyOpened(void 0, e), n.TPromise.as(null)
          }, e.prototype.removeFromRecentlyOpened = function(e) {
            return this.historyService.removeFromRecentlyOpened(e), n.TPromise.as(null)
          }, e.prototype.clearRecentlyOpened = function() {
            return this.historyService.clearRecentlyOpened(), n.TPromise.as(null)
          }, e.prototype.getRecentlyOpened = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            return t ? n.TPromise.as(this.historyService.getRecentlyOpened(t.config.workspace || t.config.folderPath, t.config.filesToOpen)) : n.TPromise.as(this.historyService.getRecentlyOpened())
          }, e.prototype.showPreviousWindowTab = function() {
            return d.Menu.sendActionToFirstResponder("selectPreviousTab:"), n.TPromise.as(void 0)
          }, e.prototype.showNextWindowTab = function() {
            return d.Menu.sendActionToFirstResponder("selectNextTab:"), n.TPromise.as(void 0)
          },
          e.prototype.moveWindowTabToNewWindow = function() {
            return d.Menu.sendActionToFirstResponder("moveTabToNewWindow:"), n.TPromise.as(void 0)
          }, e.prototype.mergeAllWindowTabs = function() {
            return d.Menu.sendActionToFirstResponder("mergeAllWindows:"), n.TPromise.as(void 0)
          }, e.prototype.toggleWindowTabsBar = function() {
            return d.Menu.sendActionToFirstResponder("toggleTabBar:"), n.TPromise.as(void 0)
          }, e.prototype.focusWindow = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            return t && t.win.focus(), n.TPromise.as(null)
          }, e.prototype.closeWindow = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            return t && t.win.close(), n.TPromise.as(null)
          }, e.prototype.isFocused = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            return t ? n.TPromise.as(t.win.isFocused()) : n.TPromise.as(null)
          }, e.prototype.isMaximized = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            return t ? n.TPromise.as(t.win.isMaximized()) : n.TPromise.as(null)
          }, e.prototype.maximizeWindow = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            return t && t.win.maximize(), n.TPromise.as(null)
          }, e.prototype.unmaximizeWindow = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            return t && t.win.unmaximize(), n.TPromise.as(null)
          }, e.prototype.onWindowTitleDoubleClick = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            return t && t.onWindowTitleDoubleClick(), n.TPromise.as(null)
          }, e.prototype.setDocumentEdited = function(e, t) {
            var r = this.windowsMainService.getWindowById(e);
            return r && r.win.isDocumentEdited() !== t && r.win.setDocumentEdited(t), n.TPromise.as(null)
          }, e.prototype.openWindow = function(e, t) {
            return e && e.length ? (this.windowsMainService.open({
              context: l.OpenContext.API,
              cli: this.environmentService.args,
              pathsToOpen: e,
              forceNewWindow: t && t.forceNewWindow,
              forceReuseWindow: t && t.forceReuseWindow,
              forceOpenWorkspaceAsFile: t && t.forceOpenWorkspaceAsFile
            }), n.TPromise.as(null)) : n.TPromise.as(null)
          }, e.prototype.openNewWindow = function() {
            return this.windowsMainService.openNewWindow(l.OpenContext.API), n.TPromise.as(null)
          }, e.prototype.showWindow = function(e) {
            var t = this.windowsMainService.getWindowById(e);
            return t && t.win.show(), n.TPromise.as(null)
          }, e.prototype.getWindows = function() {
            var e = this.windowsMainService.getWindows().map(function(e) {
              return {
                id: e.id,
                workspace: e.openedWorkspace,
                openedFolderPath: e.openedFolderPath,
                title: e.win.getTitle(),
                filename: e.getRepresentedFilename()
              }
            });
            return n.TPromise.as(e)
          }, e.prototype.getWindowCount = function() {
            return n.TPromise.as(this.windowsMainService.getWindows().length)
          }, e.prototype.log = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            return (i = console[e]).apply.apply(i, [console].concat(t)), n.TPromise.as(null);
            var i
          }, e.prototype.showItemInFolder = function(e) {
            return d.shell.showItemInFolder(e), n.TPromise.as(null)
          }, e.prototype.openExternal = function(e) {
            return n.TPromise.as(d.shell.openExternal(e))
          }, e.prototype.startCrashReporter = function(e) {
            return d.crashReporter.start(e), n.TPromise.as(null)
          }, e.prototype.quit = function() {
            return this.windowsMainService.quit(), n.TPromise.as(null)
          }, e.prototype.relaunch = function(e) {
            return this.lifecycleService.relaunch(e), n.TPromise.as(null)
          }, e.prototype.whenSharedProcessReady = function() {
            return this.sharedProcess.whenReady()
          }, e.prototype.toggleSharedProcess = function() {
            return this.sharedProcess.toggle(), n.TPromise.as(null)
          }, e.prototype.openFileForURI = function(e) {
            var t = c.assign(Object.create(null), this.environmentService.args, {
                goto: !0
              }),
              r = [e.fsPath];
            return this.windowsMainService.open({
              context: l.OpenContext.API,
              cli: t,
              pathsToOpen: r
            }), n.TPromise.as(null)
          }, e.prototype.openExtensionForURI = function(e) {
            return r(this, void 0, n.TPromise, function() {
              var e, t;
              return i(this, function(n) {
                switch (n.label) {
                  case 0:
                    return e = c.assign(Object.create(null), this.environmentService.args), [4, this.windowsMainService.open({
                      context: l.OpenContext.API,
                      cli: e
                    })[0]];
                  case 1:
                    return (t = n.sent()) ? (t.win.show(), [2]) : [2]
                }
              })
            })
          }, e.prototype.dispose = function() {
            this.disposables = s.dispose(this.disposables)
          },
          e = o([a(1, g.IWindowsMainService), a(2, f.IEnvironmentService), a(3, h.IURLService), a(4, v.ILifecycleService), a(5, m.IHistoryMainService)], e)
      }();
      t.WindowsService = y
    }), define(e[19], t([0, 1, 6, 45, 142, 14, 3, 33]), function(e, t, n, r, i, o, s, a) {
      "use strict";

      function c(e) {
        return e && "object" == typeof e && "string" == typeof e.path && (!e.name || "string" == typeof e.name)
      }

      function u(e) {
        return e && "object" == typeof e && "string" == typeof e.uri && (!e.name || "string" == typeof e.name)
      }

      function l(e) {
        return "string" == typeof e
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IWorkspacesMainService = n.createDecorator("workspacesMainService"), t.IWorkspacesService = n.createDecorator("workspacesService"), t.WORKSPACE_EXTENSION = "code-workspace", t.WORKSPACE_FILTER = [{
        name: i.localize(0, null),
        extensions: [t.WORKSPACE_EXTENSION]
      }], t.UNTITLED_WORKSPACE_NAME = "workspace.json", t.isStoredWorkspaceFolder = function(e) {
        return c(e) || u(e)
      }, t.isRawFileWorkspaceFolder = c, t.isRawUriWorkspaceFolder = u, t.getWorkspaceLabel = function(e, n, c) {
        if (l(e)) return a.tildify(e, n.userHome);
        if (r.isParent(e.configPath, n.workspacesHome, !s.isLinux)) return i.localize(1, null);
        var u = o.basename(e.configPath),
          f = u.substr(0, u.length - t.WORKSPACE_EXTENSION.length - 1);
        return c && c.verbose ? i.localize(2, null, a.getPathLabel(o.join(o.dirname(e.configPath), f), null, n)) : i.localize(3, null, f)
      }, t.isSingleFolderWorkspaceIdentifier = l, t.isWorkspaceIdentifier = function(e) {
        var t = e;
        return t && "string" == typeof t.id && "string" == typeof t.configPath
      }
    }), define(e[66], t([0, 1, 2, 11, 43, 9, 6, 22, 30, 25, 19]), function(e, t, n, r, i, s, c, u, l, f, d) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ID = "launchService", t.ILaunchService = c.createDecorator(t.ID);
      var p = function() {
        function e(e) {
          this.service = e
        }
        return e.prototype.call = function(e, t) {
          switch (e) {
            case "start":
              var n = t,
                r = n.args,
                i = n.userEnv;
              return this.service.start(r, i);
            case "get-main-process-id":
              return this.service.getMainProcessId();
            case "get-main-process-info":
              return this.service.getMainProcessInfo();
            case "get-logs-path":
              return this.service.getLogsPath()
          }
        }, e
      }();
      t.LaunchChannel = p;
      var h = function() {
        function e(e) {
          this.channel = e
        }
        return e.prototype.start = function(e, t) {
          return this.channel.call("start", {
            args: e,
            userEnv: t
          })
        }, e.prototype.getMainProcessId = function() {
          return this.channel.call("get-main-process-id", null)
        }, e.prototype.getMainProcessInfo = function() {
          return this.channel.call("get-main-process-info", null)
        }, e.prototype.getLogsPath = function() {
          return this.channel.call("get-logs-path", null)
        }, e
      }();
      t.LaunchChannelClient = h;
      var v = function() {
        function e(e, t, n, r, i) {
          this.logService = e, this.windowsMainService = t, this.urlService = n, this.workspacesMainService = r, this.environmentService = i
        }
        return e.prototype.start = function(e, t) {
          return this.logService.trace("Received data from other instance: ", e, t), this.shouldOpenUrl(e) ? n.TPromise.as(null) : this.startOpenWindow(e, t)
        }, e.prototype.shouldOpenUrl = function(e) {
          var t = this;
          return !!(e["open-url"] && e._urls && e._urls.length > 0) && (e._urls.forEach(function(e) {
            return t.urlService.open(e)
          }), !0)
        }, e.prototype.startOpenWindow = function(e, t) {
          var r, i = t.VSCODE_CLI ? u.OpenContext.CLI : u.OpenContext.DESKTOP;
          return e.extensionDevelopmentPath ? this.windowsMainService.openExtensionDevelopmentHostWindow({
            context: i,
            cli: e,
            userEnv: t
          }) : r = 0 === e._.length && (e["new-window"] || e["unity-launch"]) ? this.windowsMainService.open({
            context: i,
            cli: e,
            userEnv: t,
            forceNewWindow: !0,
            forceEmpty: !0
          }) : 0 === e._.length ? [this.windowsMainService.focusLastActive(e, i)] : this.windowsMainService.open({
            context: i,
            cli: e,
            userEnv: t,
            forceNewWindow: e["new-window"],
            preferNewWindow: !e["reuse-window"] && !e.wait,
            forceReuseWindow: e["reuse-window"],
            diffMode: e.diff,
            addMode: e.add
          }), e.wait && 1 === r.length && r[0] ? n.TPromise.any([this.windowsMainService.waitForWindowCloseOrLoad(r[0].id), f.whenDeleted(e.waitMarkerFilePath)]).then(function() {}, function() {}) : n.TPromise.as(null)
        }, e.prototype.getMainProcessId = function() {
          return this.logService.trace("Received request for process ID from other instance."), n.TPromise.as(process.pid)
        }, e.prototype.getMainProcessInfo = function() {
          var e = this;
          return this.logService.trace("Received request for main process info from other instance."), n.TPromise.wrap({
            mainPID: process.pid,
            mainArguments: process.argv,
            windows: this.windowsMainService.getWindows().map(function(t) {
              return e.getWindowInfo(t)
            })
          })
        }, e.prototype.getLogsPath = function() {
          return this.logService.trace("Received request for logs path from other instance."), n.TPromise.as(this.environmentService.logsPath)
        }, e.prototype.getWindowInfo = function(e) {
          var t = [];
          if (e.openedFolderPath) t.push(e.openedFolderPath);
          else if (e.openedWorkspace) {
            this.workspacesMainService.resolveWorkspaceSync(e.openedWorkspace.configPath).folders.forEach(function(e) {
              "file" === e.uri.scheme && t.push(e.uri.fsPath)
            })
          }
          return {
            pid: e.win.webContents.getOSProcessId(),
            title: e.win.getTitle(),
            folders: t
          }
        }, e = o([a(0, r.ILogService), a(1, l.IWindowsMainService), a(2, i.IURLService), a(3, d.IWorkspacesMainService), a(4, s.IEnvironmentService)], e)
      }();
      t.LaunchService = v
    }),
    define(e[124], t([0, 1, 112, 3, 21, 9, 12, 22, 20, 45, 40, 46, 16, 26, 6, 33, 64, 30, 36, 19]), function(e, t, n, r, i, s, c, u, l, f, d, p, h, v, g, m, y, w, b, S) {
      "use strict";

      function _() {
        return new c.MenuItem({
          type: "separator"
        })
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var k = function() {
        function e(e, t, n, r, i, o, s) {
          var a = this;
          this.updateService = e, this.configurationService = n, this.windowsMainService = r, this.environmentService = i, this.telemetryService = o, this.historyMainService = s, this.keys = ["files.autoSave", "editor.multiCursorModifier", "workbench.sideBar.location", "workbench.statusBar.visible", "workbench.activityBar.visible", "window.enableMenuBarMnemonics", "window.nativeTabs"], this.extensionViewlets = [], this.nativeTabMenuItems = [], this.menuUpdater = new v.RunOnceScheduler(function() {
            return a.doUpdateMenu()
          }, 0), this.keybindingsResolver = t.createInstance(y.KeybindingsResolver), this.install(), this.registerListeners()
        }
        return e.prototype.registerListeners = function() {
            var e = this;
            c.app.on("will-quit", function() {
                e.isQuitting = !0
              }),
              this.historyMainService.onRecentlyOpenedChange(function() {
                return e.updateMenu()
              }), this.windowsMainService.onWindowsCountChanged(function(t) {
                return e.onWindowsCountChanged(t)
              }), this.windowsMainService.onActiveWindowChanged(function() {
                return e.updateWorkspaceMenuItems()
              }), this.windowsMainService.onWindowReady(function() {
                return e.updateWorkspaceMenuItems()
              }), this.windowsMainService.onWindowClose(function() {
                return e.updateWorkspaceMenuItems()
              }), c.ipcMain.on("vscode:extensionViewlets", function(t, n) {
                var r = [];
                try {
                  r = JSON.parse(n)
                } catch (e) {}
                r.length && (e.extensionViewlets = r, e.updateMenu())
              }), this.configurationService.onDidChangeConfiguration(function(t) {
                return e.onConfigurationUpdated(t)
              }), this.updateService.onStateChange(function() {
                return e.updateMenu()
              }), this.keybindingsResolver.onKeybindingsChanged(function() {
                return e.updateMenu()
              })
          }, e.prototype.onConfigurationUpdated = function(e) {
            this.keys.some(function(t) {
              return e.affectsConfiguration(t)
            }) && this.updateMenu()
          },
          Object.defineProperty(e.prototype, "currentAutoSaveSetting", {
            get: function() {
              return this.configurationService.getValue("files.autoSave")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "currentMultiCursorModifierSetting", {
            get: function() {
              return this.configurationService.getValue("editor.multiCursorModifier")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "currentSidebarLocation", {
            get: function() {
              return this.configurationService.getValue("workbench.sideBar.location") || "left"
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "currentStatusbarVisible", {
            get: function() {
              var e = this.configurationService.getValue("workbench.statusBar.visible");
              return "boolean" != typeof e && (e = !0), e
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "currentActivityBarVisible", {
            get: function() {
              var e = this.configurationService.getValue("workbench.activityBar.visible");
              return "boolean" != typeof e && (e = !0), e
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "currentEnableMenuBarMnemonics", {
            get: function() {
              var e = this.configurationService.getValue("window.enableMenuBarMnemonics");
              return "boolean" != typeof e && (e = !0), e
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "currentEnableNativeTabs", {
            get: function() {
              var e = this.configurationService.getValue("window.nativeTabs");
              return "boolean" != typeof e && (e = !1), e
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.updateMenu = function() {
            this.menuUpdater.schedule()
          }, e.prototype.doUpdateMenu = function() {
            var e = this;
            this.isQuitting || setTimeout(function() {
              e.isQuitting || e.install()
            }, 10)
          }, e.prototype.onWindowsCountChanged = function(e) {
            r.isMacintosh && (0 === e.oldCount && e.newCount > 0 || e.oldCount > 0 && 0 === e.newCount ? this.updateMenu() : this.currentEnableNativeTabs && this.nativeTabMenuItems.forEach(function(t) {
              t && (t.enabled = e.newCount > 1)
            }))
          }, e.prototype.updateWorkspaceMenuItems = function() {
            var e = this.windowsMainService.getLastActiveWindow(),
              t = e && !!e.openedWorkspace,
              n = e && !!e.openedFolderPath;
            this.closeWorkspace.visible = t, this.closeFolder.visible = !t, this.closeFolder.enabled = n || r.isLinux
          }, e.prototype.install = function() {
            var e, t = this,
              i = new c.Menu;
            if (r.isMacintosh) {
              var o = new c.Menu;
              e = new c.MenuItem({
                label: h.default.nameShort,
                submenu: o
              }), this.setMacApplicationMenu(o)
            }
            var s = new c.Menu,
              a = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(0, null)),
                submenu: s
              });
            this.setFileMenu(s);
            var l = new c.Menu,
              f = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(1, null)),
                submenu: l
              });
            this.setEditMenu(l);
            var d = new c.Menu,
              p = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(2, null)),
                submenu: d
              });
            this.setSelectionMenu(d);
            var v = new c.Menu,
              g = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(3, null)),
                submenu: v
              });
            this.setViewMenu(v);
            var m = new c.Menu,
              y = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(4, null)),
                submenu: m
              });
            this.setGotoMenu(m);
            var w = new c.Menu,
              b = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(5, null)),
                submenu: w
              });
            this.setDebugMenu(w);
            var S;
            if (r.isMacintosh) {
              var _ = new c.Menu;
              S = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(6, null)),
                submenu: _,
                role: "window"
              }), this.setMacWindowMenu(_)
            }
            var k = new c.Menu,
              C = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(7, null)),
                submenu: k,
                role: "help"
              });
            this.setHelpMenu(k);
            var E = new c.Menu,
              P = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(8, null)),
                submenu: E
              });
            if (this.setTaskMenu(E), e && i.append(e), i.append(a), i.append(f), i.append(p), i.append(g), i.append(y), i.append(b), i.append(P), S && i.append(S), i.append(C), c.Menu.setApplicationMenu(i), r.isMacintosh && !this.appMenuInstalled) {
              this.appMenuInstalled = !0;
              var O = new c.Menu;
              O.append(new c.MenuItem({
                label: this.mnemonicLabel(n.localize(9, null)),
                click: function() {
                  return t.windowsMainService.openNewWindow(u.OpenContext.DOCK)
                }
              })), c.app.dock.setMenu(O)
            }
          }, e.prototype.setMacApplicationMenu = function(e) {
            var t = this,
              r = new c.MenuItem({
                label: n.localize(10, null, h.default.nameLong),
                role: "about"
              }),
              i = this.getUpdateMenuItems(),
              o = this.getPreferencesMenu(),
              s = new c.Menu,
              a = new c.MenuItem({
                label: n.localize(11, null),
                role: "services",
                submenu: s
              }),
              u = new c.MenuItem({
                label: n.localize(12, null, h.default.nameLong),
                role: "hide",
                accelerator: "Command+H"
              }),
              l = new c.MenuItem({
                label: n.localize(13, null),
                role: "hideothers",
                accelerator: "Command+Alt+H"
              }),
              f = new c.MenuItem({
                label: n.localize(14, null),
                role: "unhide"
              }),
              d = new c.MenuItem(this.likeAction("workbench.action.quit", {
                label: n.localize(15, null, h.default.nameLong),
                click: function() {
                  (0 === t.windowsMainService.getWindowCount() || t.windowsMainService.getFocusedWindow()) && t.windowsMainService.quit()
                }
              })),
              p = [r];
            p.push.apply(p, i), p.push.apply(p, [_(), o, _(), a, _(), u, l, f, _(), d]), p.forEach(function(t) {
              return e.append(t)
            })
          }, e.prototype.setFileMenu = function(e) {
            var t, o = this,
              s = 0 === this.windowsMainService.getWindowCount();
            t = s ? new c.MenuItem(this.likeAction("workbench.action.files.newUntitledFile", {
              label: this.mnemonicLabel(n.localize(16, null)),
              click: function() {
                return o.windowsMainService.openNewWindow(u.OpenContext.MENU)
              }
            })) : this.createMenuItem(n.localize(17, null), "workbench.action.files.newUntitledFile");
            var a;
            a = s ? new c.MenuItem(this.likeAction("workbench.action.files.openFileFolder", {
              label: this.mnemonicLabel(n.localize(18, null)),
              click: function(e, t, n) {
                return o.windowsMainService.pickFileFolderAndOpen({
                  forceNewWindow: o.isOptionClick(n),
                  telemetryExtraData: {
                    from: "menu"
                  }
                })
              }
            })) : this.createMenuItem(n.localize(19, null), ["workbench.action.files.openFileFolder", "workbench.action.files.openFileFolderInNewWindow"]);
            var l;
            l = s ? new c.MenuItem(this.likeAction("workbench.action.openWorkspace", {
              label: this.mnemonicLabel(n.localize(20, null)),
              click: function(e, t, n) {
                return o.windowsMainService.pickWorkspaceAndOpen({
                  forceNewWindow: o.isOptionClick(n),
                  telemetryExtraData: {
                    from: "menu"
                  }
                })
              }
            })) : this.createMenuItem(n.localize(21, null), ["workbench.action.openWorkspace", "workbench.action.openWorkspaceInNewWindow"]);
            var d;
            d = s ? new c.MenuItem(this.likeAction("workbench.action.files.openFolder", {
              label: this.mnemonicLabel(n.localize(22, null)),
              click: function(e, t, n) {
                return o.windowsMainService.pickFolderAndOpen({
                  forceNewWindow: o.isOptionClick(n),
                  telemetryExtraData: {
                    from: "menu"
                  }
                })
              }
            })) : this.createMenuItem(n.localize(23, null), ["workbench.action.files.openFolder", "workbench.action.files.openFolderInNewWindow"]);
            var p;
            p = s ? new c.MenuItem(this.likeAction("workbench.action.files.openFile", {
              label: this.mnemonicLabel(n.localize(24, null)),
              click: function(e, t, n) {
                return o.windowsMainService.pickFileAndOpen({
                  forceNewWindow: o.isOptionClick(n),
                  telemetryExtraData: {
                    from: "menu"
                  }
                })
              }
            })) : this.createMenuItem(n.localize(25, null), ["workbench.action.files.openFile", "workbench.action.files.openFileInNewWindow"]);
            var h = new c.Menu;
            this.setOpenRecentMenu(h);
            var v = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(26, null)),
                submenu: h,
                enabled: h.items.length > 0
              }),
              g = this.createMenuItem(n.localize(27, null), "workbench.action.saveWorkspaceAs"),
              m = this.createMenuItem(n.localize(28, null), "workbench.action.addRootFolder"),
              y = this.createMenuItem(n.localize(29, null), "workbench.action.files.save"),
              w = this.createMenuItem(n.localize(30, null), "workbench.action.files.saveAs"),
              b = this.createMenuItem(n.localize(31, null), "workbench.action.files.saveAll"),
              S = [f.AutoSaveConfiguration.AFTER_DELAY, f.AutoSaveConfiguration.ON_FOCUS_CHANGE, f.AutoSaveConfiguration.ON_WINDOW_CHANGE].some(function(e) {
                return o.currentAutoSaveSetting === e
              }),
              k = new c.MenuItem(this.likeAction("vscode.toggleAutoSave", {
                label: this.mnemonicLabel(n.localize(32, null)),
                type: "checkbox",
                checked: S,
                enabled: this.windowsMainService.getWindowCount() > 0,
                click: function() {
                  return o.windowsMainService.sendToFocused("vscode.toggleAutoSave")
                }
              }, !1)),
              C = this.getPreferencesMenu(),
              E = new c.MenuItem(this.likeAction("workbench.action.newWindow", {
                label: this.mnemonicLabel(n.localize(33, null)),
                click: function() {
                  return o.windowsMainService.openNewWindow(u.OpenContext.MENU)
                }
              })),
              P = this.createMenuItem(n.localize(34, null), "workbench.action.files.revert"),
              O = new c.MenuItem(this.likeAction("workbench.action.closeWindow", {
                label: this.mnemonicLabel(n.localize(35, null)),
                click: function() {
                  return o.windowsMainService.getLastActiveWindow().win.close()
                },
                enabled: this.windowsMainService.getWindowCount() > 0
              }));
            this.closeWorkspace = this.createMenuItem(n.localize(36, null), "workbench.action.closeFolder"), this.closeFolder = this.createMenuItem(n.localize(37, null), "workbench.action.closeFolder");
            var I = this.createMenuItem(n.localize(38, null), "workbench.action.closeActiveEditor"),
              M = new c.MenuItem(this.likeAction("workbench.action.quit", {
                label: this.mnemonicLabel(n.localize(39, null)),
                click: function() {
                  return o.windowsMainService.quit()
                }
              }));
            this.updateWorkspaceMenuItems(),
              i.coalesce([t, E, _(), r.isMacintosh ? a : null, r.isMacintosh ? null : p, r.isMacintosh ? null : d, l, v, _(), m, g, _(), y, w, b, _(), k, _(), r.isMacintosh ? null : C, r.isMacintosh ? null : _(), P, I, this.closeWorkspace, this.closeFolder, O, r.isMacintosh ? null : _(), r.isMacintosh ? null : M]).forEach(function(t) {
                return e.append(t)
              })
          }, e.prototype.getPreferencesMenu = function() {
            var e = this.createMenuItem(n.localize(40, null), "workbench.action.openGlobalSettings"),
              t = this.createMenuItem(n.localize(41, null), "workbench.action.openGlobalKeybindings"),
              r = this.createMenuItem(n.localize(42, null), "workbench.extensions.action.showRecommendedKeymapExtensions"),
              i = this.createMenuItem(n.localize(43, null), "workbench.action.openSnippets"),
              o = this.createMenuItem(n.localize(44, null), "workbench.action.selectTheme"),
              s = this.createMenuItem(n.localize(45, null), "workbench.action.selectIconTheme"),
              a = new c.Menu;
            return a.append(e), a.append(_()), a.append(t), a.append(r), a.append(_()), a.append(i), a.append(_()), a.append(o), a.append(s), new c.MenuItem({
              label: this.mnemonicLabel(n.localize(46, null)),
              submenu: a
            })
          }, e.prototype.setOpenRecentMenu = function(t) {
            var r = this;
            t.append(this.createMenuItem(n.localize(47, null), "workbench.action.reopenClosedEditor"));
            var i = this.historyMainService.getRecentlyOpened(),
              o = i.workspaces,
              s = i.files;
            if (o.length > 0) {
              t.append(_());
              for (a = 0; a < e.MAX_MENU_RECENT_ENTRIES && a < o.length; a++) t.append(this.createOpenRecentMenuItem(o[a], "openRecentWorkspace", !1))
            }
            if (s.length > 0) {
              t.append(_());
              for (var a = 0; a < e.MAX_MENU_RECENT_ENTRIES && a < s.length; a++) t.append(this.createOpenRecentMenuItem(s[a], "openRecentFile", !0))
            }(o.length || s.length) && (t.append(_()), t.append(this.createMenuItem(n.localize(48, null), "workbench.action.openRecent")), t.append(_()), t.append(new c.MenuItem(this.likeAction("workbench.action.clearRecentFiles", {
              label: this.mnemonicLabel(n.localize(49, null)),
              click: function() {
                return r.historyMainService.clearRecentlyOpened()
              }
            }))))
          }, e.prototype.createOpenRecentMenuItem = function(e, t, n) {
            var r, i, o = this;
            return S.isSingleFolderWorkspaceIdentifier(e) || "string" == typeof e ? (r = m.unmnemonicLabel(m.getPathLabel(e, null, this.environmentService)), i = e) : (r = S.getWorkspaceLabel(e, this.environmentService, {
              verbose: !0
            }), i = e.configPath), new c.MenuItem(this.likeAction(t, {
              label: r,
              click: function(t, r, s) {
                var a = o.isOptionClick(s);
                o.windowsMainService.open({
                  context: u.OpenContext.MENU,
                  cli: o.environmentService.args,
                  pathsToOpen: [i],
                  forceNewWindow: a,
                  forceOpenWorkspaceAsFile: n
                }).length > 0 || o.historyMainService.removeFromRecentlyOpened([S.isSingleFolderWorkspaceIdentifier(e) ? e : e.configPath])
              }
            }, !1))
          }, e.prototype.isOptionClick = function(e) {
            return e && (!r.isMacintosh && (e.ctrlKey || e.shiftKey) || r.isMacintosh && (e.metaKey || e.altKey))
          }, e.prototype.createRoleMenuItem = function(e, t, n) {
            var r = {
              label: this.mnemonicLabel(e),
              role: n,
              enabled: !0
            };
            return new c.MenuItem(this.withKeybinding(t, r))
          }, e.prototype.setEditMenu = function(e) {
            var t, i, o, s, a;
            r.isMacintosh ? (t = this.createContextAwareMenuItem(n.localize(50, null), "undo", {
              inDevTools: function(e) {
                return e.undo()
              },
              inNoWindow: function() {
                return c.Menu.sendActionToFirstResponder("undo:")
              }
            }), i = this.createContextAwareMenuItem(n.localize(51, null), "redo", {
              inDevTools: function(e) {
                return e.redo()
              },
              inNoWindow: function() {
                return c.Menu.sendActionToFirstResponder("redo:")
              }
            }), o = this.createRoleMenuItem(n.localize(52, null), "editor.action.clipboardCutAction", "cut"), s = this.createRoleMenuItem(n.localize(53, null), "editor.action.clipboardCopyAction", "copy"), a = this.createRoleMenuItem(n.localize(54, null), "editor.action.clipboardPasteAction", "paste")) : (t = this.createMenuItem(n.localize(55, null), "undo"), i = this.createMenuItem(n.localize(56, null), "redo"), o = this.createMenuItem(n.localize(57, null), "editor.action.clipboardCutAction"), s = this.createMenuItem(n.localize(58, null), "editor.action.clipboardCopyAction"), a = this.createMenuItem(n.localize(59, null), "editor.action.clipboardPasteAction"));
            var u = this.createMenuItem(n.localize(60, null), "actions.find"),
              l = this.createMenuItem(n.localize(61, null), "editor.action.startFindReplaceAction"),
              f = this.createMenuItem(n.localize(62, null), "workbench.action.findInFiles"),
              d = this.createMenuItem(n.localize(63, null), "workbench.action.replaceInFiles"),
              p = this.createMenuItem(n.localize(64, null), "editor.emmet.action.expandAbbreviation"),
              h = this.createMenuItem(n.localize(65, null), "workbench.action.showEmmetCommands"),
              v = this.createMenuItem(n.localize(66, null), "editor.action.commentLine"),
              g = this.createMenuItem(n.localize(67, null), "editor.action.blockComment");
            [t, i, _(), o, s, a, _(), u, l, _(), f, d, _(), v, g, p, h].forEach(function(t) {
              return e.append(t)
            })
          }, e.prototype.setSelectionMenu = function(e) {
            var t;
            t = "ctrlCmd" === this.currentMultiCursorModifierSetting ? n.localize(68, null) : r.isMacintosh ? n.localize(69, null) : n.localize(70, null);
            var i = this.createMenuItem(t, "workbench.action.toggleMultiCursorModifier"),
              o = this.createMenuItem(n.localize(71, null), "editor.action.insertCursorAbove"),
              s = this.createMenuItem(n.localize(72, null), "editor.action.insertCursorBelow"),
              a = this.createMenuItem(n.localize(73, null), "editor.action.insertCursorAtEndOfEachLineSelected"),
              u = this.createMenuItem(n.localize(74, null), "editor.action.addSelectionToNextFindMatch"),
              l = this.createMenuItem(n.localize(75, null), "editor.action.addSelectionToPreviousFindMatch"),
              f = this.createMenuItem(n.localize(76, null), "editor.action.selectHighlights"),
              d = this.createMenuItem(n.localize(77, null), "editor.action.copyLinesUpAction"),
              p = this.createMenuItem(n.localize(78, null), "editor.action.copyLinesDownAction"),
              h = this.createMenuItem(n.localize(79, null), "editor.action.moveLinesUpAction"),
              v = this.createMenuItem(n.localize(80, null), "editor.action.moveLinesDownAction");
            [r.isMacintosh ? this.createContextAwareMenuItem(n.localize(81, null), "editor.action.selectAll", {
              inDevTools: function(e) {
                return e.selectAll()
              },
              inNoWindow: function() {
                return c.Menu.sendActionToFirstResponder("selectAll:")
              }
            }) : this.createMenuItem(n.localize(82, null), "editor.action.selectAll"), this.createMenuItem(n.localize(83, null), "editor.action.smartSelect.grow"), this.createMenuItem(n.localize(84, null), "editor.action.smartSelect.shrink"), _(), d, p, h, v, _(), i, o, s, a, u, l, f].forEach(function(t) {
              return e.append(t)
            })
          }, e.prototype.setViewMenu = function(e) {
            var t, o = this,
              s = this.createMenuItem(n.localize(85, null), "workbench.view.explorer"),
              a = this.createMenuItem(n.localize(86, null), "workbench.view.search"),
              u = this.createMenuItem(n.localize(87, null), "workbench.view.scm"),
              l = this.createMenuItem(n.localize(88, null), "workbench.view.debug"),
              f = this.createMenuItem(n.localize(89, null), "workbench.view.extensions"),
              d = this.createMenuItem(n.localize(90, null), "workbench.action.output.toggleOutput"),
              p = this.createMenuItem(n.localize(91, null), "workbench.debug.action.toggleRepl"),
              h = this.createMenuItem(n.localize(92, null), "workbench.action.terminal.toggleTerminal"),
              v = this.createMenuItem(n.localize(93, null), "workbench.actions.view.problems");
            if (this.extensionViewlets.length) {
              var g = new c.Menu;
              this.extensionViewlets.forEach(function(e) {
                g.append(o.createMenuItem(e.label, e.id))
              }), t = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(94, null)),
                submenu: g,
                enabled: !0
              })
            }
            var m, y = this.createMenuItem(n.localize(95, null), "workbench.action.showCommands"),
              w = new c.MenuItem(this.withKeybinding("workbench.action.toggleFullScreen", {
                label: this.mnemonicLabel(n.localize(96, null)),
                click: function() {
                  return o.windowsMainService.getLastActiveWindow().toggleFullScreen()
                },
                enabled: this.windowsMainService.getWindowCount() > 0
              })),
              b = this.createMenuItem(n.localize(97, null), "workbench.action.toggleZenMode"),
              S = this.createMenuItem(n.localize(98, null), "workbench.action.toggleMenuBar"),
              k = this.createMenuItem(n.localize(99, null), "workbench.action.splitEditor"),
              C = this.createMenuItem(n.localize(100, null), "workbench.action.toggleEditorGroupLayout"),
              E = this.createMenuItem(n.localize(101, null), "workbench.action.toggleSidebarVisibility");
            m = "right" !== this.currentSidebarLocation ? n.localize(102, null) : n.localize(103, null);
            var P, O = this.createMenuItem(m, "workbench.action.toggleSidebarPosition"),
              I = this.createMenuItem(n.localize(104, null), "workbench.action.togglePanel");
            P = this.currentStatusbarVisible ? n.localize(105, null) : n.localize(106, null);
            var M, T = this.createMenuItem(P, "workbench.action.toggleStatusbarVisibility");
            M = this.currentActivityBarVisible ? n.localize(107, null) : n.localize(108, null);
            var W = this.createMenuItem(M, "workbench.action.toggleActivityBarVisibility"),
              x = this.createMenuItem(n.localize(109, null), "editor.action.toggleWordWrap"),
              D = this.createMenuItem(n.localize(110, null), "editor.action.toggleMinimap"),
              L = this.createMenuItem(n.localize(111, null), "editor.action.toggleRenderWhitespace"),
              A = this.createMenuItem(n.localize(112, null), "editor.action.toggleRenderControlCharacter"),
              R = this.createMenuItem(n.localize(113, null), "workbench.action.zoomIn"),
              F = this.createMenuItem(n.localize(114, null), "workbench.action.zoomOut"),
              N = this.createMenuItem(n.localize(115, null), "workbench.action.zoomReset");
            i.coalesce([y, _(), s, a, u, l, f, t, _(), d, v, p, h, _(), w, b, r.isWindows || r.isLinux ? S : void 0, _(), k, C, O, E, I, T, W, _(), x, D, L, A, _(), R, F, N]).forEach(function(t) {
              return e.append(t)
            })
          },
          e.prototype.setGotoMenu = function(e) {
            var t = this.createMenuItem(n.localize(116, null), "workbench.action.navigateBack"),
              r = this.createMenuItem(n.localize(117, null), "workbench.action.navigateForward"),
              i = new c.Menu,
              o = this.createMenuItem(n.localize(118, null), "workbench.action.nextEditor"),
              s = this.createMenuItem(n.localize(119, null), "workbench.action.previousEditor"),
              a = this.createMenuItem(n.localize(120, null), "workbench.action.openNextRecentlyUsedEditorInGroup"),
              u = this.createMenuItem(n.localize(121, null), "workbench.action.openPreviousRecentlyUsedEditorInGroup");
            [o, s, _(), a, u].forEach(function(e) {
              return i.append(e)
            });
            var l = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(122, null)),
                submenu: i,
                enabled: !0
              }),
              f = new c.Menu,
              d = this.createMenuItem(n.localize(123, null), "workbench.action.focusFirstEditorGroup"),
              p = this.createMenuItem(n.localize(124, null), "workbench.action.focusSecondEditorGroup"),
              h = this.createMenuItem(n.localize(125, null), "workbench.action.focusThirdEditorGroup"),
              v = this.createMenuItem(n.localize(126, null), "workbench.action.focusNextGroup"),
              g = this.createMenuItem(n.localize(127, null), "workbench.action.focusPreviousGroup");
            [d, p, h, _(), v, g].forEach(function(e) {
              return f.append(e)
            });
            var m = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(128, null)),
                submenu: f,
                enabled: !0
              }),
              y = this.createMenuItem(n.localize(129, null), "workbench.action.quickOpen"),
              w = this.createMenuItem(n.localize(130, null), "workbench.action.gotoSymbol"),
              b = this.createMenuItem(n.localize(131, null), "workbench.action.showAllSymbols"),
              S = this.createMenuItem(n.localize(132, null), "editor.action.goToDeclaration"),
              k = this.createMenuItem(n.localize(133, null), "editor.action.goToTypeDefinition"),
              C = this.createMenuItem(n.localize(134, null), "editor.action.goToImplementation"),
              E = this.createMenuItem(n.localize(135, null), "workbench.action.gotoLine");
            [t, r, _(), l, m, _(), y, w, b, S, k, C, E].forEach(function(t) {
              return e.append(t)
            })
          }, e.prototype.setDebugMenu = function(e) {
            var t = this.createMenuItem(n.localize(136, null), "workbench.action.debug.start"),
              r = this.createMenuItem(n.localize(137, null), "workbench.action.debug.run"),
              i = this.createMenuItem(n.localize(138, null), "workbench.action.debug.stop"),
              o = this.createMenuItem(n.localize(139, null), "workbench.action.debug.restart"),
              s = this.createMenuItem(n.localize(140, null), "workbench.action.debug.configure"),
              a = this.createMenuItem(n.localize(141, null), "debug.addConfiguration"),
              u = this.createMenuItem(n.localize(142, null), "workbench.action.debug.stepOver"),
              l = this.createMenuItem(n.localize(143, null), "workbench.action.debug.stepInto"),
              f = this.createMenuItem(n.localize(144, null), "workbench.action.debug.stepOut"),
              d = this.createMenuItem(n.localize(145, null), "workbench.action.debug.continue"),
              p = this.createMenuItem(n.localize(146, null), "editor.debug.action.toggleBreakpoint"),
              h = new c.Menu;
            h.append(this.createMenuItem(n.localize(147, null), "editor.debug.action.conditionalBreakpoint")),
              h.append(this.createMenuItem(n.localize(148, null), "editor.debug.action.toggleColumnBreakpoint")), h.append(this.createMenuItem(n.localize(149, null), "workbench.debug.viewlet.action.addFunctionBreakpointAction"));
            var v = new c.MenuItem({
                label: this.mnemonicLabel(n.localize(150, null)),
                submenu: h
              }),
              g = this.createMenuItem(n.localize(151, null), "workbench.debug.viewlet.action.enableAllBreakpoints"),
              m = this.createMenuItem(n.localize(152, null), "workbench.debug.viewlet.action.disableAllBreakpoints"),
              y = this.createMenuItem(n.localize(153, null), "workbench.debug.viewlet.action.removeAllBreakpoints"),
              w = this.createMenuItem(n.localize(154, null), "debug.installAdditionalDebuggers");
            [t, r, i, o, _(), s, a, _(), u, l, f, d, _(), p, v, g, m, y, _(), w].forEach(function(t) {
              return e.append(t)
            })
          }, e.prototype.setMacWindowMenu = function(e) {
            var t = new c.MenuItem({
                label: n.localize(155, null),
                role: "minimize",
                accelerator: "Command+M",
                enabled: this.windowsMainService.getWindowCount() > 0
              }),
              r = new c.MenuItem({
                label: n.localize(156, null),
                role: "zoom",
                enabled: this.windowsMainService.getWindowCount() > 0
              }),
              i = new c.MenuItem({
                label: n.localize(157, null),
                role: "front",
                enabled: this.windowsMainService.getWindowCount() > 0
              }),
              o = this.createMenuItem(n.localize(158, null), "workbench.action.switchWindow");
            this.nativeTabMenuItems = [];
            var s = [];
            if (this.currentEnableNativeTabs) {
              var a = this.windowsMainService.getWindowCount() > 1;
              this.nativeTabMenuItems.push(this.createMenuItem(n.localize(159, null), "workbench.action.showPreviousWindowTab", a)), this.nativeTabMenuItems.push(this.createMenuItem(n.localize(160, null), "workbench.action.showNextWindowTab", a)), this.nativeTabMenuItems.push(this.createMenuItem(n.localize(161, null), "workbench.action.moveWindowTabToNewWindow", a)), this.nativeTabMenuItems.push(this.createMenuItem(n.localize(162, null), "workbench.action.mergeAllWindowTabs", a)), s.push.apply(s, [_()].concat(this.nativeTabMenuItems))
            } else this.nativeTabMenuItems = [];
            [t, r, o].concat(s, [_(), i]).forEach(function(t) {
              return e.append(t)
            })
          }, e.prototype.toggleDevTools = function() {
            var e = this.windowsMainService.getFocusedWindow();
            if (e && e.win) {
              var t = e.win.webContents;
              !e.hasHiddenTitleBarStyle() || e.win.isFullScreen() || t.isDevToolsOpened() ? t.toggleDevTools() : t.openDevTools({
                mode: "undocked"
              })
            }
          }, e.prototype.setHelpMenu = function(e) {
            var t = this,
              o = new c.MenuItem(this.likeAction("workbench.action.toggleDevTools", {
                label: this.mnemonicLabel(n.localize(163, null)),
                click: function() {
                  return t.toggleDevTools()
                },
                enabled: this.windowsMainService.getWindowCount() > 0
              })),
              s = new c.MenuItem(this.likeAction("accessibilityOptions", {
                label: this.mnemonicLabel(n.localize(164, null)),
                accelerator: null,
                click: function() {
                  t.openAccessibilityOptions()
                }
              }, !1)),
              a = null;
            if (h.default.reportIssueUrl) {
              var u = n.localize(165, null);
              a = this.windowsMainService.getWindowCount() > 0 ? this.createMenuItem(u, "workbench.action.reportIssues") : new c.MenuItem({
                label: this.mnemonicLabel(u),
                click: function() {
                  return t.openUrl(h.default.reportIssueUrl, "openReportIssues")
                }
              })
            }
            var l = r.isLinux ? h.default.keyboardShortcutsUrlLinux : r.isMacintosh ? h.default.keyboardShortcutsUrlMac : h.default.keyboardShortcutsUrlWin;
            if (i.coalesce([new c.MenuItem({
                label: this.mnemonicLabel(n.localize(166, null)),
                click: function() {
                  return t.runActionInRenderer("workbench.action.showWelcomePage")
                },
                enabled: this.windowsMainService.getWindowCount() > 0
              }), new c.MenuItem({
                label: this.mnemonicLabel(n.localize(167, null)),
                click: function() {
                  return t.runActionInRenderer("workbench.action.showInteractivePlayground")
                },
                enabled: this.windowsMainService.getWindowCount() > 0
              }), h.default.documentationUrl ? new c.MenuItem({
                label: this.mnemonicLabel(n.localize(168, null)),
                click: function() {
                  return t.runActionInRenderer("workbench.action.openDocumentationUrl")
                },
                enabled: this.windowsMainService.getWindowCount() > 0
              }) : null, h.default.releaseNotesUrl ? new c.MenuItem({
                label: this.mnemonicLabel(n.localize(169, null)),
                click: function() {
                  return t.runActionInRenderer("update.showCurrentReleaseNotes")
                },
                enabled: this.windowsMainService.getWindowCount() > 0
              }) : null, _(), l ? new c.MenuItem({
                label: this.mnemonicLabel(n.localize(170, null)),
                click: function() {
                  return t.runActionInRenderer("workbench.action.keybindingsReference")
                },
                enabled: this.windowsMainService.getWindowCount() > 0
              }) : null, h.default.introductoryVideosUrl ? new c.MenuItem({
                label: this.mnemonicLabel(n.localize(171, null)),
                click: function() {
                  return t.runActionInRenderer("workbench.action.openIntroductoryVideosUrl")
                },
                enabled: this.windowsMainService.getWindowCount() > 0
              }) : null, h.default.tipsAndTricksUrl ? new c.MenuItem({
                label: this.mnemonicLabel(n.localize(172, null)),
                click: function() {
                  return t.runActionInRenderer("workbench.action.openTipsAndTricksUrl")
                },
                enabled: this.windowsMainService.getWindowCount() > 0
              }) : null, h.default.introductoryVideosUrl || l ? _() : null, h.default.twitterUrl ? new c.MenuItem({
                label: this.mnemonicLabel(n.localize(173, null)),
                click: function() {
                  return t.openUrl(h.default.twitterUrl, "openTwitterUrl")
                }
              }) : null, h.default.requestFeatureUrl ? new c.MenuItem({
                label: this.mnemonicLabel(n.localize(174, null)),
                click: function() {
                  return t.openUrl(h.default.requestFeatureUrl, "openUserVoiceUrl")
                }
              }) : null, a, h.default.twitterUrl || h.default.requestFeatureUrl || h.default.reportIssueUrl ? _() : null, h.default.licenseUrl ? new c.MenuItem({
                label: this.mnemonicLabel(n.localize(175, null)),
                click: function() {
                  if (r.language) {
                    var e = h.default.licenseUrl.indexOf("?") > 0 ? "&" : "?";
                    t.openUrl("" + h.default.licenseUrl + e + "lang=" + r.language, "openLicenseUrl")
                  } else t.openUrl(h.default.licenseUrl, "openLicenseUrl")
                }
              }) : null, h.default.privacyStatementUrl ? new c.MenuItem({
                label: this.mnemonicLabel(n.localize(176, null)),
                click: function() {
                  if (r.language) {
                    var e = h.default.licenseUrl.indexOf("?") > 0 ? "&" : "?";
                    t.openUrl("" + h.default.privacyStatementUrl + e + "lang=" + r.language, "openPrivacyStatement")
                  } else t.openUrl(h.default.privacyStatementUrl, "openPrivacyStatement")
                }
              }) : null, h.default.licenseUrl || h.default.privacyStatementUrl ? _() : null, o, r.isWindows && "stable" !== h.default.quality ? s : null]).forEach(function(t) {
                return e.append(t)
              }), !r.isMacintosh) {
              var f = this.getUpdateMenuItems();
              f.length && (e.append(_()), f.forEach(function(t) {
                return e.append(t)
              })), e.append(_()), e.append(new c.MenuItem({
                label: this.mnemonicLabel(n.localize(177, null)),
                click: function() {
                  return t.openAboutDialog()
                }
              }))
            }
          }, e.prototype.setTaskMenu = function(e) {
            var t = this.createMenuItem(n.localize(178, null), "workbench.action.tasks.runTask"),
              r = this.createMenuItem(n.localize(179, null), "workbench.action.tasks.build"),
              i = this.createMenuItem(n.localize(180, null), "workbench.action.tasks.showTasks"),
              o = this.createMenuItem(n.localize(181, null), "workbench.action.tasks.restartTask"),
              s = this.createMenuItem(n.localize(182, null), "workbench.action.tasks.terminate"),
              a = this.createMenuItem(n.localize(183, null), "workbench.action.tasks.configureTaskRunner"),
              c = this.createMenuItem(n.localize(184, null), "workbench.action.tasks.configureDefaultBuildTask");
            [t, r, _(), s, o, i, _(), a, c].forEach(function(t) {
              return e.append(t)
            })
          }, e.prototype.openAccessibilityOptions = function() {
            var e = new c.BrowserWindow({
              alwaysOnTop: !0,
              skipTaskbar: !0,
              resizable: !1,
              width: 450,
              height: 300,
              show: !0,
              title: n.localize(185, null)
            });
            e.setMenuBarVisibility(!1), e.loadURL("chrome://accessibility")
          }, e.prototype.getUpdateMenuItems = function() {
            var e = this;
            switch (this.updateService.state) {
              case p.State.Uninitialized:
                return [];
              case p.State.UpdateDownloaded:
                return [new c.MenuItem({
                  label: n.localize(186, null),
                  click: function() {
                    e.reportMenuActionTelemetry("RestartToUpdate"), e.updateService.quitAndInstall()
                  }
                })];
              case p.State.CheckingForUpdate:
                return [new c.MenuItem({
                  label: n.localize(187, null),
                  enabled: !1
                })];
              case p.State.UpdateAvailable:
                if (r.isLinux) return [new c.MenuItem({
                  label: n.localize(188, null),
                  click: function() {
                    e.updateService.quitAndInstall()
                  }
                })];
                var t = r.isWindows ? n.localize(189, null) : n.localize(190, null);
                return [new c.MenuItem({
                  label: t,
                  enabled: !1
                })];
              default:
                return [new c.MenuItem({
                  label: n.localize(191, null),
                  click: function() {
                    return setTimeout(function() {
                      e.reportMenuActionTelemetry("CheckForUpdate"), e.updateService.checkForUpdates(!0)
                    }, 0)
                  }
                })]
            }
          }, e.prototype.createMenuItem = function(e, t, n, r) {
            var i = this,
              o = this.mnemonicLabel(e),
              s = "function" == typeof t ? t : function(e, n, r) {
                var o = t;
                Array.isArray(t) && (o = i.isOptionClick(r) ? t[1] : t[0]), i.runActionInRenderer(o)
              },
              a = "boolean" == typeof n ? n : this.windowsMainService.getWindowCount() > 0,
              u = "boolean" == typeof r && r,
              l = {
                label: o,
                click: s,
                enabled: a
              };
            u && (l.type = "checkbox", l.checked = u);
            var f;
            return "string" == typeof t ? f = t : Array.isArray(t) && (f = t[0]), new c.MenuItem(this.withKeybinding(f, l))
          }, e.prototype.createContextAwareMenuItem = function(e, t, n) {
            var r = this;
            return new c.MenuItem(this.withKeybinding(t, {
              label: this.mnemonicLabel(e),
              enabled: this.windowsMainService.getWindowCount() > 0,
              click: function() {
                var e = r.windowsMainService.getFocusedWindow();
                return e ? e.win.webContents.isDevToolsFocused() ? n.inDevTools(e.win.webContents.devToolsWebContents) : void r.runActionInRenderer(t) : n.inNoWindow()
              }
            }))
          }, e.prototype.runActionInRenderer = function(e) {
            this.windowsMainService.getFocusedWindow() && this.windowsMainService.sendToFocused("vscode:runAction", {
              id: e,
              from: "menu"
            })
          },
          e.prototype.withKeybinding = function(e, t) {
            var n = this.keybindingsResolver.getKeybinding(e);
            if (n && n.label)
              if (n.isNative) t.accelerator = n.label;
              else {
                var r = t.label.indexOf("[");
                t.label = r >= 0 ? t.label.substr(0, r) + " [" + n.label + "]" : t.label + " [" + n.label + "]"
              }
            else t.accelerator = void 0;
            return t
          }, e.prototype.likeAction = function(e, t, n) {
            var r = this;
            void 0 === n && (n = !t.accelerator), n && (t = this.withKeybinding(e, t));
            var i = t.click;
            return t.click = function(t, n, o) {
              r.reportMenuActionTelemetry(e), i && i(t, n, o)
            }, t
          }, e.prototype.openAboutDialog = function() {
            var e = this.windowsMainService.getFocusedWindow() || this.windowsMainService.getLastActiveWindow(),
              t = n.localize(192, null, c.app.getVersion(), h.default.commit || "Unknown", h.default.date || "Unknown", process.versions.electron, process.versions.chrome, process.versions.node, process.arch),
              i = [n.localize(193, null)];
            r.isWindows && i.push(m.mnemonicButtonLabel(n.localize(194, null))), this.windowsMainService.showMessageBox({
              title: h.default.nameLong,
              type: "info",
              message: h.default.nameLong,
              detail: "\n" + t,
              buttons: i,
              noLink: !0
            }, e).then(function(e) {
              r.isWindows && 1 === e.button && c.clipboard.writeText(t)
            })
          }, e.prototype.openUrl = function(e, t) {
            c.shell.openExternal(e), this.reportMenuActionTelemetry(t)
          }, e.prototype.reportMenuActionTelemetry = function(e) {
            this.telemetryService.publicLog("workbenchActionExecuted", {
              id: e,
              from: "menu"
            })
          }, e.prototype.mnemonicLabel = function(e) {
            return m.mnemonicMenuLabel(e, !this.currentEnableMenuBarMnemonics)
          }, e.MAX_MENU_RECENT_ENTRIES = 10, e = o([a(0, p.IUpdateService), a(1, g.IInstantiationService), a(2, l.IConfigurationService), a(3, w.IWindowsMainService), a(4, s.IEnvironmentService), a(5, d.ITelemetryService), a(6, b.IHistoryMainService)], e)
      }();
      t.CodeMenu = k
    }), define(e[125], t([0, 1, 5, 24, 3, 14, 22, 19, 58]), function(e, t, n, r, i, o, s, a, c) {
      "use strict";

      function u(e) {
        var t = e.windows,
          a = e.newWindow,
          u = e.reuseWindow,
          f = e.context,
          d = e.filePath,
          p = e.userHome,
          h = e.codeSettingsFolder,
          v = e.workspaceResolver;
        if (!a && d && (f === s.OpenContext.DESKTOP || f === s.OpenContext.CLI || f === s.OpenContext.DOCK)) {
          var g = function(e, t, n) {
            for (var r = e.filter(function(e) {
                return !!e.openedWorkspace
              }), s = 0; s < r.length; s++) {
              var a = r[s],
                u = n(a.openedWorkspace);
              if (u && u.folders.some(function(e) {
                  return e.uri.scheme === c.Schemas.file && o.isEqualOrParent(t, e.uri.fsPath, !i.isLinux)
                })) return a
            }
            var l = e.filter(function(e) {
              return "string" == typeof e.openedFolderPath && o.isEqualOrParent(t, e.openedFolderPath, !i.isLinux)
            });
            if (l.length) return l.sort(function(e, t) {
              return -(e.openedFolderPath.length - t.openedFolderPath.length)
            })[0];
            return null
          }(t, d, v);
          if (g && g.openedWorkspace) return g;
          var m = !u && function(e, t, s) {
            var a = n.dirname(o.normalize(e, !0)),
              c = t && o.normalize(t, !0);
            i.isLinux || (c = c && c.toLowerCase());
            var u = null;
            for (; a !== u;) {
              if (function(e, t, o) {
                  void 0 === o && (o = ".vscode");
                  try {
                    return (i.isLinux ? e : e.toLowerCase()) === t ? r.statSync(n.join(e, o, "settings.json")).isFile() : r.statSync(n.join(e, o)).isDirectory()
                  } catch (e) {}
                  return !1
                }(a, c, s)) return a;
              u = a, a = n.dirname(a)
            }
            return null
          }(d, p, h);
          if (g && !(m && m.length > g.openedFolderPath.length)) return g;
          if (m) return m
        }
        return a ? null : l(t)
      }

      function l(e) {
        var t = Math.max.apply(Math, e.map(function(e) {
          return e.lastFocusTime
        }));
        return e.filter(function(e) {
          return e.lastFocusTime === t
        })[0]
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.findBestWindowOrFolderForFile = u, t.getLastActiveWindow = l, t.findWindowOnWorkspace = function(e, t) {
        return e.filter(function(e) {
          if (a.isSingleFolderWorkspaceIdentifier(t)) {
            if ("string" == typeof e.openedFolderPath && o.isEqual(e.openedFolderPath, t, !i.isLinux)) return !0
          } else if (e.openedWorkspace && e.openedWorkspace.id === t.id) return !0;
          return !1
        })[0]
      }, t.findWindowOnExtensionDevelopmentPath = function(e, t) {
        return e.filter(function(e) {
          return !!o.isEqual(e.extensionDevelopmentPath, t, !i.isLinux)
        })[0]
      }, t.findWindowOnWorkspaceOrFolderPath = function(e, t) {
        return e.filter(function(e) {
          return !(!e.openedWorkspace || !o.isEqual(e.openedWorkspace.configPath, t, !i.isLinux)) || !(!e.openedFolderPath || !o.isEqual(e.openedFolderPath, t, !i.isLinux))
        })[0]
      }
    }), define(e[126], t([0, 1, 21, 24, 5, 53, 3, 29, 9, 20, 45, 11, 19]), function(e, t, n, r, i, s, c, u, l, f, d, p, h) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var v = function() {
        function e(e, t, n) {
          this.configurationService = t, this.logService = n, this.backupHome = e.backupHome, this.workspacesJsonPath = e.backupWorkspacesPath, this.loadSync()
        }
        return e.prototype.getWorkspaceBackups = function() {
            return this.isHotExitOnExitAndWindowClose() ? [] : this.backups.rootWorkspaces.slice(0)
          }, e.prototype.getFolderBackupPaths = function() {
            return this.isHotExitOnExitAndWindowClose() ? [] : this.backups.folderWorkspaces.slice(0)
          }, e.prototype.isHotExitEnabled = function() {
            return this.getHotExitConfig() !== d.HotExitConfiguration.OFF
          }, e.prototype.isHotExitOnExitAndWindowClose = function() {
            return this.getHotExitConfig() === d.HotExitConfiguration.ON_EXIT_AND_WINDOW_CLOSE
          }, e.prototype.getHotExitConfig = function() {
            var e = this.configurationService.getValue();
            return e && e.files && e.files.hotExit || d.HotExitConfiguration.ON_EXIT
          }, e.prototype.getEmptyWindowBackupPaths = function() {
            return this.backups.emptyWorkspaces.slice(0)
          },
          e.prototype.registerWorkspaceBackupSync = function(e, t) {
            this.pushBackupPathsSync(e, this.backups.rootWorkspaces);
            var n = i.join(this.backupHome, e.id);
            return t && this.moveBackupFolderSync(n, t), n
          }, e.prototype.moveBackupFolderSync = function(e, t) {
            if (r.existsSync(e) && this.convertToEmptyWindowBackup(e), r.existsSync(t)) try {
              r.renameSync(t, e)
            } catch (e) {
              this.logService.error("Backup: Could not move backup folder to new location: " + e.toString())
            }
          }, e.prototype.registerFolderBackupSync = function(e) {
            return this.pushBackupPathsSync(e, this.backups.folderWorkspaces), i.join(this.backupHome, this.getFolderHash(e))
          }, e.prototype.registerEmptyWindowBackupSync = function(e) {
            return e || (e = this.getRandomEmptyWindowId()), this.pushBackupPathsSync(e, this.backups.emptyWorkspaces), i.join(this.backupHome, e)
          }, e.prototype.pushBackupPathsSync = function(e, t) {
            -1 === this.indexOf(e, t) && (t.push(e), this.saveSync())
          }, e.prototype.removeBackupPathSync = function(e, t) {
            if (t) {
              var n = this.indexOf(e, t); - 1 !== n && (t.splice(n, 1), this.saveSync())
            }
          },
          e.prototype.indexOf = function(e, t) {
            var r = this;
            if (!t) return -1;
            var i = this.sanitizeId(e);
            return n.firstIndex(t, function(e) {
              return r.sanitizeId(e) === i
            })
          }, e.prototype.sanitizeId = function(e) {
            return h.isSingleFolderWorkspaceIdentifier(e) ? this.sanitizePath(e) : e.id
          }, e.prototype.loadSync = function() {
            var e;
            try {
              e = JSON.parse(r.readFileSync(this.workspacesJsonPath, "utf8").toString())
            } catch (t) {
              e = Object.create(null)
            }
            if (e.rootWorkspaces) {
              var t = e.rootWorkspaces;
              Array.isArray(t) && !t.some(function(e) {
                return "object" != typeof e
              }) || (e.rootWorkspaces = [])
            } else e.rootWorkspaces = [];
            if (e.folderWorkspaces) {
              n = e.folderWorkspaces;
              Array.isArray(n) && !n.some(function(e) {
                return "string" != typeof e
              }) || (e.folderWorkspaces = [])
            } else e.folderWorkspaces = [];
            if (e.emptyWorkspaces) {
              var n = e.emptyWorkspaces;
              Array.isArray(n) && !n.some(function(e) {
                return "string" != typeof e
              }) || (e.emptyWorkspaces = [])
            } else e.emptyWorkspaces = [];
            this.backups = this.dedupeBackups(e), this.validateBackupWorkspaces(e)
          }, e.prototype.dedupeBackups = function(e) {
            var t = this;
            return e.folderWorkspaces = n.distinct(e.folderWorkspaces, function(e) {
              return t.sanitizePath(e)
            }), e.rootWorkspaces = n.distinct(e.rootWorkspaces, function(e) {
              return t.sanitizePath(e.id)
            }), e
          }, e.prototype.validateBackupWorkspaces = function(e) {
            var t = this,
              n = [],
              o = [];
            o.push.apply(o, e.rootWorkspaces.map(function(t) {
              return {
                workspaceIdentifier: t,
                target: e.rootWorkspaces
              }
            })), o.push.apply(o, e.folderWorkspaces.map(function(t) {
              return {
                workspaceIdentifier: t,
                target: e.folderWorkspaces
              }
            })), o.forEach(function(e) {
              var o = e.workspaceIdentifier,
                s = h.isSingleFolderWorkspaceIdentifier(o) ? o : o.configPath,
                a = i.join(t.backupHome, h.isSingleFolderWorkspaceIdentifier(o) ? t.getFolderHash(o) : o.id),
                c = t.hasBackupsSync(a),
                u = c && !r.existsSync(s);
              c && !u || (n.push({
                workspaceIdentifier: o,
                backupPath: a,
                target: e.target
              }), u && t.convertToEmptyWindowBackup(a))
            }), e.emptyWorkspaces.forEach(function(r) {
              var o = i.join(t.backupHome, r);
              t.hasBackupsSync(o) || n.push({
                workspaceIdentifier: r,
                backupPath: o,
                target: e.emptyWorkspaces
              })
            }), n.forEach(function(e) {
              var n = e.backupPath,
                r = e.workspaceIdentifier,
                i = e.target;
              try {
                u.delSync(n)
              } catch (e) {
                t.logService.error("Backup: Could not delete stale backup: " + e.toString())
              }
              t.removeBackupPathSync(r, i)
            })
          }, e.prototype.convertToEmptyWindowBackup = function(e) {
            var t = this.getRandomEmptyWindowId();
            this.pushBackupPathsSync(t, this.backups.emptyWorkspaces);
            var n = i.join(this.backupHome, t);
            try {
              r.renameSync(e, n)
            } catch (e) {
              return this.logService.error("Backup: Could not rename backup folder: " + e.toString()), this.removeBackupPathSync(t, this.backups.emptyWorkspaces), !1
            }
            return !0
          }, e.prototype.hasBackupsSync = function(e) {
            try {
              var t = u.readdirSync(e);
              return 0 !== t.length && t.some(function(t) {
                try {
                  return u.readdirSync(i.join(e, t)).length > 0
                } catch (e) {
                  return !1
                }
              })
            } catch (e) {
              return !1
            }
          }, e.prototype.saveSync = function() {
            try {
              r.existsSync(this.backupHome) || r.mkdirSync(this.backupHome), u.writeFileAndFlushSync(this.workspacesJsonPath, JSON.stringify(this.backups))
            } catch (e) {
              this.logService.error("Backup: Could not save workspaces.json: " + e.toString())
            }
          },
          e.prototype.getRandomEmptyWindowId = function() {
            return (Date.now() + Math.round(1e3 * Math.random())).toString()
          }, e.prototype.sanitizePath = function(e) {
            return c.isLinux ? e : e.toLowerCase()
          }, e.prototype.getFolderHash = function(e) {
            return s.createHash("md5").update(this.sanitizePath(e)).digest("hex")
          }, e = o([a(0, l.IEnvironmentService), a(1, f.IConfigurationService), a(2, p.ILogService)], e)
      }();
      t.BackupMainService = v
    }), define(e[127], t([0, 1, 5, 134, 21, 17, 28, 12, 11, 33, 4, 3, 19, 9, 14, 26]), function(e, t, n, r, i, s, c, u, l, f, d, p, h, v, g, m) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var y = function() {
        function e(e, t, n, r) {
          var i = this;
          this.stateService = e, this.logService = t, this.workspacesMainService = n, this.environmentService = r, this._onRecentlyOpenedChange = new d.Emitter, this.onRecentlyOpenedChange = this._onRecentlyOpenedChange.event, this.macOSRecentDocumentsUpdater = new m.RunOnceScheduler(function() {
            return i.updateMacOSRecentDocuments()
          }, 800), this.registerListeners()
        }
        return e.prototype.registerListeners = function() {
            var e = this;
            this.workspacesMainService.onWorkspaceSaved(function(t) {
              return e.onWorkspaceSaved(t)
            })
          }, e.prototype.onWorkspaceSaved = function(e) {
            this.addRecentlyOpened([e.workspace], [])
          }, e.prototype.addRecentlyOpened = function(t, n) {
            var r = this;
            if (t && t.length > 0 || n && n.length > 0) {
              var o = this.getRecentlyOpened();
              t.forEach(function(e) {
                !h.isSingleFolderWorkspaceIdentifier(e) && r.workspacesMainService.isUntitledWorkspace(e) || (o.workspaces.unshift(e), o.workspaces = i.distinct(o.workspaces, function(e) {
                  return r.distinctFn(e)
                }))
              }), n.forEach(function(e) {
                o.files.unshift(e), o.files = i.distinct(o.files, function(e) {
                  return r.distinctFn(e)
                }), p.isWindows && u.app.addRecentDocument(e)
              }), o.workspaces = o.workspaces.slice(0, e.MAX_TOTAL_RECENT_ENTRIES), o.files = o.files.slice(0, e.MAX_TOTAL_RECENT_ENTRIES), this.saveRecentlyOpened(o), this._onRecentlyOpenedChange.fire(), p.isMacintosh && this.macOSRecentDocumentsUpdater.schedule()
            }
          }, e.prototype.removeFromRecentlyOpened = function(e) {
            var t = this.getRecentlyOpened(),
              n = !1;
            e.forEach(function(e) {
              var r = i.firstIndex(t.workspaces, function(t) {
                return g.isEqual(h.isSingleFolderWorkspaceIdentifier(t) ? t : t.configPath, e, !p.isLinux)
              });
              r >= 0 && (t.workspaces.splice(r, 1), n = !0), (r = i.firstIndex(t.files, function(t) {
                return g.isEqual(t, e, !p.isLinux)
              })) >= 0 && (t.files.splice(r, 1), n = !0)
            }), n && (this.saveRecentlyOpened(t), this._onRecentlyOpenedChange.fire(), p.isMacintosh && this.macOSRecentDocumentsUpdater.schedule())
          }, e.prototype.updateMacOSRecentDocuments = function() {
            if (p.isMacintosh) {
              u.app.clearRecentDocuments();
              for (var t = this.getRecentlyOpened(), n = e.MAX_MACOS_DOCK_RECENT_ENTRIES, r = 0; r < t.workspaces.length && r < e.MAX_MACOS_DOCK_RECENT_ENTRIES / 2; r++) {
                var i = t.workspaces[r];
                u.app.addRecentDocument(h.isSingleFolderWorkspaceIdentifier(i) ? i : i.configPath), n--
              }
              for (r = 0; r < t.files.length && r < n; r++) {
                var o = t.files[r];
                u.app.addRecentDocument(o)
              }
            }
          }, e.prototype.clearRecentlyOpened = function() {
            this.saveRecentlyOpened({
              workspaces: [],
              files: []
            }), u.app.clearRecentDocuments(), this._onRecentlyOpenedChange.fire()
          },
          e.prototype.getRecentlyOpened = function(t, n) {
            var r, o, s = this,
              a = this.stateService.getItem(e.recentlyOpenedStorageKey);
            return a ? (r = a.workspaces || [], o = a.files || []) : (r = [], o = []), t && r.unshift(t), n && o.unshift.apply(o, n.map(function(e) {
              return e.filePath
            })), r = i.distinct(r, function(e) {
              return s.distinctFn(e)
            }), o = i.distinct(o, function(e) {
              return s.distinctFn(e)
            }), r = r.filter(function(e) {
              return h.isSingleFolderWorkspaceIdentifier(e) || !s.workspacesMainService.isUntitledWorkspace(e)
            }), {
              workspaces: r,
              files: o
            }
          }, e.prototype.distinctFn = function(e) {
            return h.isSingleFolderWorkspaceIdentifier(e) ? p.isLinux ? e : e.toLowerCase() : e.id
          }, e.prototype.saveRecentlyOpened = function(t) {
            this.stateService.setItem(e.recentlyOpenedStorageKey, t)
          }, e.prototype.updateWindowsJumpList = function() {
            var e = this;
            if (p.isWindows) {
              var t = [];
              t.push({
                  type: "tasks",
                  items: [{
                    type: "task",
                    title: r.localize(0, null),
                    description: r.localize(1, null),
                    program: process.execPath,
                    args: "-n",
                    iconPath: process.execPath,
                    iconIndex: 0
                  }]
                }),
                this.getRecentlyOpened().workspaces.length > 0 && (this.removeFromRecentlyOpened(u.app.getJumpListSettings().removedItems.filter(function(e) {
                  return !!e.args
                }).map(function(e) {
                  return s.trim(e.args, '"')
                })), t.push({
                  type: "custom",
                  name: r.localize(2, null),
                  items: this.getRecentlyOpened().workspaces.slice(0, 7).map(function(t) {
                    return {
                      type: "task",
                      title: h.isSingleFolderWorkspaceIdentifier(t) ? f.getBaseLabel(t) : h.getWorkspaceLabel(t, e.environmentService),
                      description: h.isSingleFolderWorkspaceIdentifier(t) ? r.localize(3, null, f.getBaseLabel(t), f.getPathLabel(n.dirname(t))) : r.localize(4, null),
                      program: process.execPath,
                      args: '"' + (h.isSingleFolderWorkspaceIdentifier(t) ? t : t.configPath) + '"',
                      iconPath: "explorer.exe",
                      iconIndex: 0
                    }
                  }).filter(function(e) {
                    return !!e
                  })
                })), t.push({
                  type: "recent"
                });
              try {
                u.app.setJumpList(t)
              } catch (e) {
                this.logService.warn("#setJumpList", e)
              }
            }
          }, e.MAX_TOTAL_RECENT_ENTRIES = 100, e.MAX_MACOS_DOCK_RECENT_ENTRIES = 10, e.recentlyOpenedStorageKey = "openedPathsList",
          e = o([a(0, c.IStateService), a(1, l.ILogService), a(2, h.IWorkspacesMainService), a(3, v.IEnvironmentService)], e)
      }();
      t.HistoryMainService = y
    }), define(e[128], t([0, 1, 7, 14, 57, 6, 35, 19, 21, 3]), function(e, t, n, r, i, o, s, a, c, u) {
      "use strict";

      function l(e, t) {
        var o = function(e, t) {
          return e.map(function(e, i) {
            var o;
            if (a.isRawFileWorkspaceFolder(e)) o = function(e, t) {
              if (e) {
                if (r.isAbsolute(e)) return n.default.file(e);
                if (t) return t.with({
                  path: r.join(t.path, e)
                })
              }
              return null
            }(e.path, t);
            else if (a.isRawUriWorkspaceFolder(e)) try {
              o = n.default.parse(e.uri)
            } catch (e) {
              console.warn(e)
            }
            if (o) return new d({
              uri: o,
              name: e.name,
              index: i
            }, e)
          })
        }(e, t);
        return function(e) {
          return c.distinct(e, function(e) {
            return u.isLinux ? e.uri.toString() : e.uri.toString().toLowerCase()
          })
        }(c.coalesce(o)).map(function(e, t) {
          var n = e.uri,
            r = e.raw,
            o = e.name;
          return new d({
            uri: n,
            name: o || i.basenameOrAuthority(n),
            index: t
          }, r)
        })
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IWorkspaceContextService = o.createDecorator("contextService");
      ! function(e) {
        e[e.EMPTY = 1] = "EMPTY", e[e.FOLDER = 2] = "FOLDER",
          e[e.WORKSPACE = 3] = "WORKSPACE"
      }(t.WorkbenchState || (t.WorkbenchState = {}));
      var f = function() {
        function e(e, t, n, r, i) {
          void 0 === t && (t = ""), void 0 === n && (n = []), void 0 === r && (r = null), this._id = e, this._name = t, this._configuration = r, this._ctime = i, this._foldersMap = s.TernarySearchTree.forPaths(), this.folders = n
        }
        return e.prototype.update = function(e) {
          this._id = e.id, this._name = e.name, this._configuration = e.configuration, this._ctime = e.ctime, this.folders = e.folders
        }, Object.defineProperty(e.prototype, "folders", {
          get: function() {
            return this._folders
          },
          set: function(e) {
            this._folders = e, this.updateFoldersMap()
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "id", {
          get: function() {
            return this._id
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "ctime", {
          get: function() {
            return this._ctime
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "name", {
          get: function() {
            return this._name
          },
          set: function(e) {
            this._name = e
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "configuration", {
          get: function() {
            return this._configuration
          },
          set: function(e) {
            this._configuration = e
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.getFolder = function(e) {
          return e ? this._foldersMap.findSubstr(e.toString()) : null
        }, e.prototype.updateFoldersMap = function() {
          this._foldersMap = s.TernarySearchTree.forPaths();
          for (var e = 0, t = this.folders; e < t.length; e++) {
            var n = t[e];
            this._foldersMap.set(n.uri.toString(), n)
          }
        }, e.prototype.toJSON = function() {
          return {
            id: this.id,
            folders: this.folders,
            name: this.name
          }
        }, e
      }();
      t.Workspace = f;
      var d = function() {
        function e(e, t) {
          this.raw = t, this.uri = e.uri, this.index = e.index, this.name = e.name
        }
        return e.prototype.toResource = function(e) {
          return this.uri.with({
            path: r.join(this.uri.path, e)
          })
        }, e.prototype.toJSON = function() {
          return {
            uri: this.uri,
            name: this.name,
            index: this.index
          }
        }, e
      }();
      t.WorkspaceFolder = d, t.toWorkspaceFolders = l
    }), define(e[129], t([0, 1, 7]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
        function e(e) {
          this.service = e
        }
        return e.prototype.call = function(e, t) {
          switch (e) {
            case "createWorkspace":
              var r = t,
                i = void 0;
              return Array.isArray(r) && (i = r.map(function(e) {
                return {
                  uri: n.default.revive(e.uri),
                  name: e.name
                }
              })), this.service.createWorkspace(i)
          }
        }, e
      }();
      t.WorkspacesChannel = r;
      var i = function() {
        function e(e) {
          this.channel = e
        }
        return e.prototype.createWorkspace = function(e) {
          return this.channel.call("createWorkspace", e)
        }, e
      }();
      t.WorkspacesChannelClient = i
    }), define(e[130], t([0, 1, 19, 3, 5, 14, 33]), function(e, t, n, r, i, o, s) {
      "use strict";

      function a(e, t, a) {
        var u = function(e) {
          var t = !r.isWindows;
          r.isWindows && e.forEach(function(e) {
            n.isRawFileWorkspaceFolder(e) && !t && e.path.indexOf(c) >= 0 && (t = !0)
          });
          return t
        }(a);
        return o.isEqualOrParent(e, t, !r.isLinux) && (e = i.relative(t, e) || "."), r.isWindows && (i.isAbsolute(e) ? (u && (e = o.normalize(e, !1)), e = s.normalizeDriveLetter(e)) : u && (e = e.replace(/[\\]/g, c))), e
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var c = "/";
      t.massageFolderPathForWorkspace = a
    }),
    define(e[131], t([0, 1, 19, 2, 45, 9, 5, 25, 24, 3, 29, 4, 11, 14, 21, 53, 39, 71, 59, 130, 128, 7]), function(e, t, n, r, i, s, c, u, l, f, d, p, h, v, g, m, y, w, b, S, _, k) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var C = function() {
        function e(e, t) {
          this.environmentService = e, this.logService = t, this.workspacesHome = e.workspacesHome, this._onWorkspaceSaved = new p.Emitter, this._onUntitledWorkspaceDeleted = new p.Emitter
        }
        return Object.defineProperty(e.prototype, "onWorkspaceSaved", {
            get: function() {
              return this._onWorkspaceSaved.event
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "onUntitledWorkspaceDeleted", {
            get: function() {
              return this._onUntitledWorkspaceDeleted.event
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.resolveWorkspaceSync = function(e) {
            if (!this.isWorkspacePath(e)) return null;
            var t;
            try {
              t = l.readFileSync(e, "utf8")
            } catch (e) {
              return null
            }
            return this.doResolveWorkspace(e, t)
          }, e.prototype.isWorkspacePath = function(e) {
            return this.isInsideWorkspacesHome(e) || c.extname(e) === "." + n.WORKSPACE_EXTENSION
          },
          e.prototype.doResolveWorkspace = function(e, t) {
            try {
              var n = this.doParseStoredWorkspace(e, t);
              return {
                id: this.getWorkspaceId(e),
                configPath: e,
                folders: _.toWorkspaceFolders(n.folders, k.default.file(c.dirname(e)))
              }
            } catch (e) {
              this.logService.warn(e.toString())
            }
            return null
          }, e.prototype.doParseStoredWorkspace = function(e, t) {
            var r;
            try {
              r = y.parse(t)
            } catch (t) {
              throw new Error(e + " cannot be parsed as JSON file (" + t + ").")
            }
            if (Array.isArray(r.folders) && (r.folders = r.folders.filter(function(e) {
                return n.isStoredWorkspaceFolder(e)
              })), !Array.isArray(r.folders)) throw new Error(e + " looks like an invalid workspace file.");
            return r
          }, e.prototype.isInsideWorkspacesHome = function(e) {
            return i.isParent(e, this.environmentService.workspacesHome, !f.isLinux)
          }, e.prototype.createWorkspace = function(e) {
            var t = this.createUntitledWorkspace(e),
              n = t.workspace,
              r = t.configParent,
              i = t.storedWorkspace;
            return u.mkdirp(r).then(function() {
              return u.writeFile(n.configPath, JSON.stringify(i, null, "\t")).then(function() {
                return n
              })
            })
          },
          e.prototype.createWorkspaceSync = function(e) {
            var t = this.createUntitledWorkspace(e),
              n = t.workspace,
              r = t.configParent,
              i = t.storedWorkspace;
            return l.existsSync(this.workspacesHome) || l.mkdirSync(this.workspacesHome), l.mkdirSync(r), d.writeFileAndFlushSync(n.configPath, JSON.stringify(i, null, "\t")), n
          }, e.prototype.createUntitledWorkspace = function(e) {
            void 0 === e && (e = []);
            var t = (Date.now() + Math.round(1e3 * Math.random())).toString(),
              r = c.join(this.workspacesHome, t),
              i = c.join(r, n.UNTITLED_WORKSPACE_NAME),
              o = {
                folders: e.map(function(e) {
                  var t, n = e.uri;
                  return t = "file" === n.scheme ? {
                    path: S.massageFolderPathForWorkspace(n.fsPath, r, [])
                  } : {
                    uri: n.toString(!0)
                  }, e.name && (t.name = e.name), t
                })
              };
            return {
              workspace: {
                id: this.getWorkspaceId(i),
                configPath: i
              },
              configParent: r,
              storedWorkspace: o
            }
          }, e.prototype.getWorkspaceId = function(e) {
            return f.isLinux || (e = e.toLowerCase()), m.createHash("md5").update(e).digest("hex")
          }, e.prototype.isUntitledWorkspace = function(e) {
            return this.isInsideWorkspacesHome(e.configPath)
          }, e.prototype.saveWorkspace = function(e, t) {
            var i = this;
            return v.isEqual(e.configPath, t, !f.isLinux) ? r.TPromise.as(e) : u.readFile(e.configPath).then(function(o) {
              var s, a = o.toString();
              try {
                s = i.doParseStoredWorkspace(e.configPath, a)
              } catch (e) {
                return r.TPromise.wrapError(e)
              }
              var l = c.dirname(e.configPath),
                d = c.dirname(t);
              s.folders.forEach(function(e) {
                n.isRawFileWorkspaceFolder(e) && (c.isAbsolute(e.path) || (e.path = c.resolve(l, e.path)), e.path = S.massageFolderPathForWorkspace(e.path, d, s.folders))
              });
              var p = a;
              return w.setProperty(a, ["folders"], s.folders, {
                insertSpaces: !1,
                tabSize: 4,
                eol: f.isLinux || f.isMacintosh ? "\n" : "\r\n"
              }).forEach(function(e) {
                p = b.applyEdit(a, e)
              }), u.writeFile(t, p).then(function() {
                var n = {
                  id: i.getWorkspaceId(t),
                  configPath: t
                };
                return i._onWorkspaceSaved.fire({
                  workspace: n,
                  oldConfigPath: e.configPath
                }), i.deleteUntitledWorkspaceSync(e), n
              })
            })
          }, e.prototype.deleteUntitledWorkspaceSync = function(e) {
            this.isUntitledWorkspace(e) && (this.doDeleteUntitledWorkspaceSync(e.configPath), this._onUntitledWorkspaceDeleted.fire(e))
          }, e.prototype.doDeleteUntitledWorkspaceSync = function(e) {
            try {
              d.delSync(c.dirname(e))
            } catch (t) {
              this.logService.warn("Unable to delete untitled workspace " + e + " (" + t + ").")
            }
          }, e.prototype.getUntitledWorkspacesSync = function() {
            var e = this,
              t = [];
            try {
              t = d.readdirSync(this.workspacesHome).map(function(t) {
                return c.join(e.workspacesHome, t, n.UNTITLED_WORKSPACE_NAME)
              })
            } catch (e) {
              e && "ENOENT" !== e.code && this.logService.warn("Unable to read folders in " + this.workspacesHome + " (" + e + ").")
            }
            return g.coalesce(t.map(function(t) {
              var n = e.resolveWorkspaceSync(t);
              return n ? {
                id: n.id,
                configPath: t
              } : (e.doDeleteUntitledWorkspaceSync(t), null)
            }))
          }, e = o([a(0, s.IEnvironmentService), a(1, h.ILogService)], e)
      }();
      t.WorkspacesMainService = C
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
                a.label++, i = n[1],
                  n = [0];
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
  define(e[41], t([0, 1, 2, 10, 80, 24, 8, 147]), function(e, t, n, o, s, a, c, u) {
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
              if (e.statusCode >= 300 && e.statusCode < 400 && i > 0 && e.headers.location) l(c.assign({}, t, {
                url: e.headers.location,
                followRedirects: i - 1
              })).done(n, r);
              else {
                var s = e;
                "gzip" === e.headers["content-encoding"] && (s = s.pipe(u.createGunzip())), n({
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

    function d(e) {
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
        if (d(e)) return t(null);
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
        if (d(e)) return t(null);
        if (!/application\/json/.test(e.res.headers["content-type"])) return n("Response doesn't appear to be JSON");
        var r = [];
        e.stream.on("data", function(e) {
            return r.push(e)
          }), e.stream.on("end", function() {
            return t(JSON.parse(r.join("")))
          }),
          e.stream.on("error", n)
      })
    }
  }), define(e[133], t([0, 1, 123, 23, 5, 2, 21, 27, 65, 79, 8, 37, 40, 41, 44, 16, 72, 9, 25, 29, 32]), function(e, t, n, r, i, c, u, l, f, d, p, h, v, g, m, y, w, b, S, _, k) {
    "use strict";

    function C() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return String(e.reduce(function(e, t) {
        return e | t
      }, 0))
    }

    function E(e, t) {
      var n = (e || []).filter(function(e) {
        return e.statisticName === t
      })[0];
      return n ? n.value : 0
    }

    function P(t, n) {
      var r = t.files.filter(function(e) {
        return e.assetType === n
      })[0];
      if (n === D.Repository && t.properties) {
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
        if (n === D.Icon) {
          var s = e.toUrl("./media/defaultIcon.png");
          return {
            uri: s,
            fallbackUri: s
          }
        }
        return null
      }
      return n === D.VSIX ? {
        uri: t.fallbackAssetUri + "/" + n + "?redirect=true&install=true",
        fallbackUri: t.fallbackAssetUri + "/" + n + "?install=true"
      } : {
        uri: t.assetUri + "/" + n,
        fallbackUri: t.fallbackAssetUri + "/" + n
      }
    }

    function O(e) {
      var t = e.properties ? e.properties.filter(function(e) {
          return e.key === L.Dependency
        }) : [],
        n = t.length > 0 && t[0].value;
      return n ? n.split(",").map(function(e) {
        return d.adoptToGalleryExtensionId(e)
      }) : []
    }

    function I(e) {
      var t = e.properties ? e.properties.filter(function(e) {
        return e.key === L.Engine
      }) : [];
      return t.length > 0 && t[0].value || ""
    }

    function M(e, t, n, r, i) {
      var o = e.versions[0],
        s = {
          manifest: P(o, D.Manifest),
          readme: P(o, D.Details),
          changelog: P(o, D.Changelog),
          download: P(o, D.VSIX),
          icon: P(o, D.Icon),
          license: P(o, D.License),
          repository: P(o, D.Repository)
        };
      return {
        identifier: {
          id: d.getGalleryExtensionId(e.publisher.publisherName, e.extensionName),
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
        installCount: E(e.statistics, "install"),
        rating: E(e.statistics, "averagerating"),
        ratingCount: E(e.statistics, "ratingcount"),
        assets: s,
        properties: {
          dependencies: O(o),
          engine: I(o)
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

    function T(e) {
      var t = i.join(e.userDataPath, "machineid");
      return S.readFile(t, "utf8").then(function(e) {
        return k.isUUID(e) ? e : c.TPromise.wrap(null)
      }, function(e) {
        return c.TPromise.wrap(null)
      }).then(function(e) {
        if (!e) {
          e = k.generateUuid();
          try {
            _.writeFileAndFlushSync(t, e)
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
    var W;
    ! function(e) {
      e[e.None = 0] = "None", e[e.IncludeVersions = 1] = "IncludeVersions", e[e.IncludeFiles = 2] = "IncludeFiles", e[e.IncludeCategoryAndTags = 4] = "IncludeCategoryAndTags", e[e.IncludeSharedAccounts = 8] = "IncludeSharedAccounts", e[e.IncludeVersionProperties = 16] = "IncludeVersionProperties", e[e.ExcludeNonValidated = 32] = "ExcludeNonValidated",
        e[e.IncludeInstallationTargets = 64] = "IncludeInstallationTargets", e[e.IncludeAssetUri = 128] = "IncludeAssetUri", e[e.IncludeStatistics = 256] = "IncludeStatistics", e[e.IncludeLatestVersionOnly = 512] = "IncludeLatestVersionOnly", e[e.Unpublished = 4096] = "Unpublished"
    }(W || (W = {}));
    var x;
    ! function(e) {
      e[e.Tag = 1] = "Tag", e[e.ExtensionId = 4] = "ExtensionId", e[e.Category = 5] = "Category", e[e.ExtensionName = 7] = "ExtensionName", e[e.Target = 8] = "Target", e[e.Featured = 9] = "Featured", e[e.SearchText = 10] = "SearchText", e[e.ExcludeWithFlags = 12] = "ExcludeWithFlags"
    }(x || (x = {}));
    var D = {
        Icon: "Microsoft.VisualStudio.Services.Icons.Default",
        Details: "Microsoft.VisualStudio.Services.Content.Details",
        Changelog: "Microsoft.VisualStudio.Services.Content.Changelog",
        Manifest: "Microsoft.VisualStudio.Code.Manifest",
        VSIX: "Microsoft.VisualStudio.Services.VSIXPackage",
        License: "Microsoft.VisualStudio.Services.Content.License",
        Repository: "Microsoft.VisualStudio.Services.Links.Source"
      },
      L = {
        Dependency: "Microsoft.VisualStudio.Code.ExtensionDependencies",
        Engine: "Microsoft.VisualStudio.Code.Engine"
      },
      A = {
        pageNumber: 1,
        pageSize: 10,
        sortBy: f.SortBy.NoneOrRelevance,
        sortOrder: f.SortOrder.Default,
        flags: W.None,
        criteria: [],
        assetTypes: []
      },
      R = function() {
        function e(e) {
          void 0 === e && (e = A), this.state = e
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
            return void 0 === n && (n = this.state.pageSize), new e(p.assign({}, this.state, {
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
            return new e(p.assign({}, this.state, {
              criteria: i
            }))
          }, e.prototype.withSortBy = function(t) {
            return new e(p.assign({}, this.state, {
              sortBy: t
            }))
          }, e.prototype.withSortOrder = function(t) {
            return new e(p.assign({}, this.state, {
              sortOrder: t
            }))
          }, e.prototype.withFlags = function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new e(p.assign({}, this.state, {
              flags: t.reduce(function(e, t) {
                return e | t
              }, 0)
            }))
          }, e.prototype.withAssetTypes = function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new e(p.assign({}, this.state, {
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
          }),
          Object.defineProperty(e.prototype, "searchText", {
            get: function() {
              var e = this.state.criteria.filter(function(e) {
                return e.filterType === x.SearchText
              })[0];
              return e ? e.value : ""
            },
            enumerable: !0,
            configurable: !0
          }), e
      }(),
      F = function() {
        function e(e, t, n) {
          this.requestService = e, this.environmentService = t, this.telemetryService = n;
          var r = y.default.extensionsGallery;
          this.extensionsGalleryUrl = r && r.serviceUrl, this.commonHeadersPromise = T(this.environmentService)
        }
        return e.prototype.api = function(e) {
            return void 0 === e && (e = ""), "" + this.extensionsGalleryUrl + e
          }, e.prototype.isEnabled = function() {
            return !!this.extensionsGalleryUrl
          }, e.prototype.query = function(e) {
            var t = this;
            if (void 0 === e && (e = {}), !this.isEnabled()) return c.TPromise.wrapError(new Error("No extension gallery service configured."));
            var n = e.names ? "ids" : e.text ? "text" : "all",
              r = e.text || "",
              i = p.getOrDefault(e, function(e) {
                return e.pageSize
              }, 50);
            this.telemetryService.publicLog("galleryService:query", {
              type: n,
              text: r
            });
            var o = (new R).withFlags(W.IncludeLatestVersionOnly, W.IncludeAssetUri, W.IncludeStatistics, W.IncludeFiles, W.IncludeVersionProperties).withPage(1, i).withFilter(x.Target, "Microsoft.VisualStudio.Code").withFilter(x.ExcludeWithFlags, C(W.Unpublished)).withAssetTypes(D.Icon, D.License, D.Details, D.Manifest, D.VSIX, D.Changelog);
            return r ? ((r = (r = (r = r.replace(/\bcategory:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g, function(e, t, n) {
              return o = o.withFilter(x.Category, n || t), ""
            })).replace(/\btag:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g, function(e, t, n) {
              return o = o.withFilter(x.Tag, n || t), ""
            })).trim()) && (r = r.length < 200 ? r : r.substring(0, 200), o = o.withFilter(x.SearchText, r)), o = o.withSortBy(f.SortBy.NoneOrRelevance)) : o = e.ids ? o.withFilter.apply(o, [x.ExtensionId].concat(e.ids)) : e.names ? o.withFilter.apply(o, [x.ExtensionName].concat(e.names)) : o.withSortBy(f.SortBy.InstallCount), "number" == typeof e.sortBy && (o = o.withSortBy(e.sortBy)), "number" == typeof e.sortOrder && (o = o.withSortOrder(e.sortOrder)), this.queryGallery(o).then(function(n) {
              var r = n.galleryExtensions,
                i = n.total;
              return {
                firstPage: r.map(function(n, r) {
                  return M(n, t.extensionsGalleryUrl, r, o, e.source)
                }),
                total: i,
                pageSize: o.pageSize,
                getPage: function(n) {
                  var r = o.withPage(n + 1);
                  return t.queryGallery(r).then(function(n) {
                    return n.galleryExtensions.map(function(n, i) {
                      return M(n, t.extensionsGalleryUrl, i, r, e.source)
                    })
                  })
                }
              }
            })
          }, e.prototype.queryGallery = function(e) {
            var t = this;
            return this.commonHeadersPromise.then(function(n) {
              var r = JSON.stringify(e.raw),
                i = p.assign({}, n, {
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
                } : g.asJson(e).then(function(e) {
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
            return this.isEnabled() ? this.commonHeadersPromise.then(function(o) {
              var a = s({}, o, {
                Accept: "*/*;api-version=4.0-preview.1"
              });
              return i.requestService.request({
                type: "POST",
                url: i.api("/publishers/" + e + "/extensions/" + t + "/" + n + "/stats?statType=" + r),
                headers: a
              }).then(null, function() {
                return null
              })
            }) : c.TPromise.as(null)
          }, e.prototype.download = function(e) {
            var t = this;
            return this.loadCompatibleVersion(e).then(function(e) {
              if (!e) return c.TPromise.wrapError(new Error(n.localize(0, null, m.default.version)));
              var o = i.join(r.tmpdir(), k.generateUuid()),
                s = d.getGalleryExtensionTelemetryData(e),
                a = (new Date).getTime();
              return t.getAsset(e.assets.download).then(function(e) {
                return g.download(o, e)
              }).then(function() {
                return function(e) {
                  return t.telemetryService.publicLog("galleryService:downloadVSIX", p.assign(s, {
                    duration: e
                  }))
                }((new Date).getTime() - a)
              }).then(function() {
                return o
              })
            })
          },
          e.prototype.getReadme = function(e) {
            return this.getAsset(e.assets.readme).then(g.asText)
          }, e.prototype.getManifest = function(e) {
            return this.getAsset(e.assets.manifest).then(g.asText).then(JSON.parse)
          }, e.prototype.getChangelog = function(e) {
            return this.getAsset(e.assets.changelog).then(g.asText)
          }, e.prototype.loadAllDependencies = function(e) {
            return this.getDependenciesReccursively(e.map(function(e) {
              return e.id
            }), [])
          }, e.prototype.loadCompatibleVersion = function(e) {
            var t = this;
            if (e.properties.engine && this.isEngineValid(e.properties.engine)) return c.TPromise.wrap(e);
            var n = (new R).withFlags(W.IncludeVersions, W.IncludeFiles, W.IncludeVersionProperties).withPage(1, 1).withFilter(x.Target, "Microsoft.VisualStudio.Code").withFilter(x.ExcludeWithFlags, C(W.Unpublished)).withAssetTypes(D.Manifest, D.VSIX).withFilter(x.ExtensionId, e.identifier.uuid);
            return this.queryGallery(n).then(function(n) {
              var r = n.galleryExtensions[0];
              return r ? t.getLastValidExtensionVersion(r, r.versions).then(function(t) {
                return t ? (e.properties.dependencies = O(t),
                  e.properties.engine = I(t), e.assets.download = P(t, D.VSIX), e.version = t.version, e) : null
              }) : null
            })
          }, e.prototype.loadDependencies = function(e) {
            var t = this;
            if (!e || 0 === e.length) return c.TPromise.as([]);
            var n = (r = (new R).withFlags(W.IncludeLatestVersionOnly, W.IncludeAssetUri, W.IncludeStatistics, W.IncludeFiles, W.IncludeVersionProperties).withPage(1, e.length).withFilter(x.Target, "Microsoft.VisualStudio.Code").withFilter(x.ExcludeWithFlags, C(W.Unpublished)).withAssetTypes(D.Icon, D.License, D.Details, D.Manifest, D.VSIX)).withFilter.apply(r, [x.ExtensionName].concat(e));
            return this.queryGallery(n).then(function(e) {
              for (var r = [], i = [], o = 0; o < e.galleryExtensions.length; o++) {
                var s = e.galleryExtensions[o]; - 1 === i.indexOf(s.extensionId) && (r.push(M(s, t.extensionsGalleryUrl, o, n, "dependencies")), i.push(s.extensionId))
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
              n = u.distinct(n.concat(t), function(e) {
                return e.identifier.uuid
              });
              var c = [];
              return i.forEach(function(t) {
                return !e.hasExtensionByName(n, t) && c.push(t)
              }), r.getDependenciesReccursively(c, n)
            }) : c.TPromise.wrap(n)
          }, e.prototype.getAsset = function(e, t) {
            var n = this;
            return void 0 === t && (t = {}), this.commonHeadersPromise.then(function(r) {
              var i = p.assign({}, r, t.headers || {});
              t = p.assign({}, t, {
                type: "GET"
              }, {
                headers: i
              });
              var o = e.uri,
                s = e.fallbackUri,
                a = p.assign({}, t, {
                  url: o
                });
              return n.requestService.request(a).then(function(e) {
                return 200 === e.res.statusCode ? c.TPromise.as(e) : g.asText(e).then(function(t) {
                  return c.TPromise.wrapError(new Error("Expected 200, got back " + e.res.statusCode + " instead.\n\n" + t))
                })
              }).then(null, function(e) {
                if (l.isPromiseCanceledError(e)) return c.TPromise.wrapError(e);
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
                var i = p.assign({}, t, {
                  url: s
                });
                return n.requestService.request(i).then(null, function(e) {
                  if (l.isPromiseCanceledError(e)) return c.TPromise.wrapError(e);
                  var t = l.getErrorMessage(e);
                  return n.telemetryService.publicLog("galleryService:requestError", {
                    url: s,
                    cdn: !1,
                    message: t
                  }), c.TPromise.wrapError(e)
                })
              })
            })
          }, e.prototype.getLastValidExtensionVersion = function(e, t) {
            var n = this.getLastValidExtensionVersionFromProperties(e, t);
            return n || this.getLastValidExtensionVersionReccursively(e, t)
          }, e.prototype.getLastValidExtensionVersionFromProperties = function(e, t) {
            for (var n = 0, r = t; n < r.length; n++) {
              var i = r[n],
                o = I(i);
              if (!o) return null;
              if (this.isEngineValid(o)) return c.TPromise.wrap(i)
            }
            return null
          }, e.prototype.getLastValidExtensionVersionReccursively = function(e, t) {
            var n = this;
            if (!t.length) return null;
            var r = t[0],
              i = P(r, D.Manifest);
            return this.getAsset(i, {
              headers: {
                "Accept-Encoding": "gzip"
              }
            }).then(function(e) {
              return g.asJson(e)
            }).then(function(i) {
              var o = i.engines.vscode;
              return n.isEngineValid(o) ? (r.properties = r.properties || [], r.properties.push({
                key: L.Engine,
                value: i.engines.vscode
              }), r) : n.getLastValidExtensionVersionReccursively(e, t.slice(1))
            })
          }, e.prototype.isEngineValid = function(e) {
            return "*" === e || w.isVersionValid(m.default.version, e)
          }, e.hasExtensionByName = function(e, t) {
            for (var n = 0, r = e; n < r.length; n++) {
              var i = r[n];
              if (i.publisher + "." + i.name === t) return !0
            }
            return !1
          }, e = o([a(0, h.IRequestService), a(1, b.IEnvironmentService), a(2, v.ITelemetryService)], e)
      }();
    t.ExtensionGalleryService = F, t.resolveMarketplaceHeaders = T
  }), define(e[68], t([0, 1, 5, 8, 114, 7, 28, 12, 2, 9, 11, 20, 61, 16, 22, 13, 3, 19, 47, 150, 133]), function(e, t, n, r, i, s, c, u, l, f, d, p, h, v, g, m, y, w, b, S, _) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var k;
    ! function(e) {
      e[e.Maximized = 0] = "Maximized", e[e.Normal = 1] = "Normal", e[e.Minimized = 2] = "Minimized", e[e.Fullscreen = 3] = "Fullscreen"
    }(k = t.WindowMode || (t.WindowMode = {})), t.defaultWindowState = function(e) {
      return void 0 === e && (e = k.Normal), {
        width: 1024,
        height: 768,
        mode: e
      }
    };
    var C = function() {
      function C(e, t, n, r, i, o, s) {
        this.logService = t, this.environmentService = n, this.configurationService = r, this.stateService = i, this.workspacesMainService = o, this.backupMainService = s, this.touchBarGroups = [], this._lastFocusTime = -1, this._readyState = g.ReadyState.NONE, this.whenReadyCallbacks = [], this.toDispose = [], this.createBrowserWindow(e), this.onConfigurationUpdated(), this.createTouchBar(), this.handleMarketplaceRequests(), this.registerListeners()
      }
      return C.prototype.createBrowserWindow = function(e) {
          this.windowState = this.restoreWindowState(e.state);
          var t = this.windowState.mode === k.Maximized || this.windowState.mode === k.Fullscreen,
            r = this.getBackgroundColor();
          y.isMacintosh && r.toUpperCase() === C.DEFAULT_BG_DARK && (r = "#171717");
          var i = {
            width: this.windowState.width,
            height: this.windowState.height,
            x: this.windowState.x,
            y: this.windowState.y,
            backgroundColor: r,
            minWidth: C.MIN_WIDTH,
            minHeight: C.MIN_HEIGHT,
            show: !t,
            title: v.default.nameLong,
            webPreferences: {
              backgroundThrottling: !1,
              disableBlinkFeatures: "Auxclick"
            }
          };
          y.isLinux && (i.icon = n.join(this.environmentService.appRoot, "resources/linux/code.png"));
          var o = this.configurationService.getValue("window"),
            s = !1;
          o && o.nativeTabs && (i.tabbingIdentifier = v.default.nameShort, s = !0);
          var a = !1;
          if (y.isMacintosh && (!o || !o.titleBarStyle || "custom" === o.titleBarStyle)) {
            !this.environmentService.isBuilt || !!e.extensionDevelopmentPath || (a = !0)
          }
          if (s && (a = !1), a && (i.titleBarStyle = "hidden", this.hiddenTitleBarStyle = !0), this._win = new u.BrowserWindow(i), this._id = this._win.id, y.isWindows && !t) try {
            if (u.screen.getAllDisplays().length > 1) {
              var c = this._win.getPosition(),
                l = c[0],
                f = c[1];
              l === this.windowState.x && f === this.windowState.y || this._win.setPosition(this.windowState.x, this.windowState.y, !1)
            }
          } catch (e) {
            this.logService.warn("Unexpected error fixing window position on windows with multiple windows: " + e + "\n" + e.stack)
          }
          a && this._win.setSheetOffset(22), y.isWindows && v.default.win32AppUserModelId && "function" == typeof this._win.setAppDetails && this._win.setAppDetails({
            appId: v.default.win32AppUserModelId,
            relaunchCommand: '"' + process.execPath + '" -n',
            relaunchDisplayName: v.default.nameLong
          }), t && (this._win.maximize(), this.windowState.mode === k.Fullscreen && this._win.setFullScreen(!0), this._win.isVisible() || this._win.show()), this._lastFocusTime = Date.now()
        }, C.prototype.hasHiddenTitleBarStyle = function() {
          return this.hiddenTitleBarStyle
        }, Object.defineProperty(C.prototype, "isExtensionDevelopmentHost", {
          get: function() {
            return !!this.config.extensionDevelopmentPath
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(C.prototype, "isExtensionTestHost", {
          get: function() {
            return !!this.config.extensionTestsPath
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(C.prototype, "extensionDevelopmentPath", {
          get: function() {
            return this.config.extensionDevelopmentPath
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(C.prototype, "config", {
          get: function() {
            return this.currentConfig
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(C.prototype, "id", {
          get: function() {
            return this._id
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(C.prototype, "win", {
          get: function() {
            return this._win
          },
          enumerable: !0,
          configurable: !0
        }), C.prototype.setRepresentedFilename = function(e) {
          y.isMacintosh ? this.win.setRepresentedFilename(e) : this.representedFilename = e
        }, C.prototype.getRepresentedFilename = function() {
          return y.isMacintosh ? this.win.getRepresentedFilename() : this.representedFilename
        }, C.prototype.focus = function() {
          this._win && (this._win.isMinimized() && this._win.restore(), this._win.focus())
        }, Object.defineProperty(C.prototype, "lastFocusTime", {
          get: function() {
            return this._lastFocusTime
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(C.prototype, "backupPath", {
          get: function() {
            return this.currentConfig ? this.currentConfig.backupPath : void 0
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(C.prototype, "openedWorkspace", {
          get: function() {
            return this.currentConfig ? this.currentConfig.workspace : void 0
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(C.prototype, "openedFolderPath", {
          get: function() {
            return this.currentConfig ? this.currentConfig.folderPath : void 0
          },
          enumerable: !0,
          configurable: !0
        }), C.prototype.setReady = function() {
          for (this._readyState = g.ReadyState.READY; this.whenReadyCallbacks.length;) this.whenReadyCallbacks.pop()(this)
        }, C.prototype.ready = function() {
          var e = this;
          return new l.TPromise(function(t) {
            if (e._readyState === g.ReadyState.READY) return t(e);
            e.whenReadyCallbacks.push(t)
          })
        }, Object.defineProperty(C.prototype, "readyState", {
          get: function() {
            return this._readyState
          },
          enumerable: !0,
          configurable: !0
        }), C.prototype.handleMarketplaceRequests = function() {
          var e = this;
          this.marketplaceHeadersPromise = _.resolveMarketplaceHeaders(this.environmentService);
          this._win.webContents.session.webRequest.onBeforeSendHeaders({
            urls: ["https://marketplace.visualstudio.com/*", "https://*.vsassets.io/*"]
          }, function(t, n) {
            e.marketplaceHeadersPromise.done(function(e) {
              n({
                cancel: !1,
                requestHeaders: r.assign(t.requestHeaders, e)
              })
            })
          })
        }, C.prototype.registerListeners = function() {
          var e = this;
          this._win.webContents.session.webRequest.onBeforeRequest(null, function(e, t) {
              if (e.url.indexOf(".svg") > 0) {
                var n = s.default.parse(e.url);
                if (n && !n.scheme.match(/file/i) && n.path.endsWith(".svg")) return t({
                  cancel: !0
                })
              }
              return t({})
            }), this._win.webContents.session.webRequest.onHeadersReceived(null, function(e, t) {
              var n = e.responseHeaders["content-type"] || e.responseHeaders["Content-Type"];
              return t(n && Array.isArray(n) && n.some(function(e) {
                return e.toLowerCase().indexOf("image/svg") >= 0
              }) ? {
                cancel: !0
              } : {
                cancel: !1,
                responseHeaders: e.responseHeaders
              })
            }), this._win.webContents.on("did-finish-load", function() {
              e._readyState = g.ReadyState.LOADING, e.pendingLoadConfig && (e.currentConfig = e.pendingLoadConfig, e.pendingLoadConfig = null), e._win.isVisible() || (e.windowState.mode === k.Maximized && e._win.maximize(), e._win.isVisible() || e._win.show())
            }), this.registerNavigationListenerOn("app-command", "browser-backward", "browser-forward", !1), this._win.webContents.on("new-window", function(e, t) {
              e.preventDefault(), u.shell.openExternal(t)
            }),
            this._win.on("focus", function() {
              e._lastFocusTime = Date.now()
            }), this._win.on("enter-full-screen", function() {
              e.sendWhenReady("vscode:enterFullScreen")
            }), this._win.on("leave-full-screen", function() {
              e.sendWhenReady("vscode:leaveFullScreen")
            }), this._win.webContents.on("did-fail-load", function(t, n, r, i, o) {
              e.logService.warn("[electron event]: fail to load, ", r)
            }), this.environmentService.isBuilt && this._win.webContents.on("will-navigate", function(e) {
              e && e.preventDefault()
            }), this.toDispose.push(this.configurationService.onDidChangeConfiguration(function(t) {
              return e.onConfigurationUpdated()
            })), this.toDispose.push(this.workspacesMainService.onUntitledWorkspaceDeleted(function(t) {
              return e.onUntitledWorkspaceDeleted(t)
            }))
        }, C.prototype.onUntitledWorkspaceDeleted = function(e) {
          this.openedWorkspace && this.openedWorkspace.id === e.id && (this.currentConfig.workspace = void 0)
        }, C.prototype.onConfigurationUpdated = function() {
          var e = this.getMenuBarVisibility();
          if (e !== this.currentMenuBarVisibility && (this.currentMenuBarVisibility = e,
              this.setMenuBarVisibility(e)), y.isMacintosh) {
            var t = this.configurationService.getValue();
            t && t.workbench && t.workbench.editor && t.workbench.editor.swipeToNavigate ? this.registerNavigationListenerOn("swipe", "left", "right", !0) : this._win.removeAllListeners("swipe")
          }
        }, C.prototype.registerNavigationListenerOn = function(e, t, n, r) {
          var i = this;
          this._win.on(e, function(e, o) {
            i.readyState === g.ReadyState.READY && (o === t ? i.send("vscode:runAction", {
              id: r ? "workbench.action.openPreviousRecentlyUsedEditor" : "workbench.action.navigateBack",
              from: "mouse"
            }) : o === n && i.send("vscode:runAction", {
              id: r ? "workbench.action.openNextRecentlyUsedEditor" : "workbench.action.navigateForward",
              from: "mouse"
            }))
          })
        }, C.prototype.load = function(e, t) {
          var n = this;
          this.readyState === g.ReadyState.NONE ? this.currentConfig = e : (this.pendingLoadConfig = e, this._readyState = g.ReadyState.NAVIGATING), y.isMacintosh && this._win.isDocumentEdited() && (t && this.backupMainService.isHotExitEnabled() || this._win.setDocumentEdited(!1)),
            t || (this.getRepresentedFilename() && this.setRepresentedFilename(""), this._win.setTitle(v.default.nameLong)), S.mark("main:loadWindow"), this._win.loadURL(this.getUrl(e)), this.environmentService.isBuilt || this.environmentService.extensionTestsPath || (this.showTimeoutHandle = setTimeout(function() {
              !n._win || n._win.isVisible() || n._win.isMinimized() || (n._win.show(), n._win.focus(), n._win.webContents.openDevTools())
            }, 1e4))
        }, C.prototype.reload = function(e, t) {
          e || (e = r.mixin({}, this.currentConfig)), delete e.filesToOpen, delete e.filesToCreate, delete e.filesToDiff, delete e.filesToWait, this.isExtensionDevelopmentHost && t && (e.verbose = t.verbose, e.debugPluginHost = t.debugPluginHost, e.debugBrkPluginHost = t.debugBrkPluginHost, e.debugId = t.debugId, e["extensions-dir"] = t["extensions-dir"]), e.isInitialStartup = !1, this.load(e, !0)
        }, C.prototype.getUrl = function(t) {
          t.windowId = this._win.id;
          var n = this.configurationService.getValue("window"),
            i = n && n.zoomLevel;
          "number" == typeof i && (t.zoomLevel = i), t.fullscreen = this._win.isFullScreen(),
            t.highContrast = y.isWindows && u.systemPreferences.isInvertedColorScheme() && (!n || n.autoDetectHighContrast), t.accessibilitySupport = u.app.isAccessibilitySupportEnabled(), t.baseTheme = this.getBaseTheme(), t.backgroundColor = this.getBackgroundColor(), t.perfEntries = S.exportEntries(), t.perfStartTime = global.perfStartTime, t.perfWindowLoadTime = Date.now();
          var o = h.parseArgs(process.argv),
            s = r.assign(o, t);
          for (var a in s) s[a] || delete s[a];
          return e.toUrl("vs/workbench/electron-browser/bootstrap/index.html") + "?config=" + encodeURIComponent(JSON.stringify(s))
        }, C.prototype.getBaseTheme = function() {
          if (y.isWindows && u.systemPreferences.isInvertedColorScheme()) return "hc-black";
          return this.stateService.getItem(C.themeStorageKey, "vs-dark").split(" ")[0]
        }, C.prototype.getBackgroundColor = function() {
          if (y.isWindows && u.systemPreferences.isInvertedColorScheme()) return C.DEFAULT_BG_HC_BLACK;
          var e = this.stateService.getItem(C.themeBackgroundStorageKey, null);
          if (!e) {
            var t = this.getBaseTheme();
            return "hc-black" === t ? C.DEFAULT_BG_HC_BLACK : "vs" === t ? C.DEFAULT_BG_LIGHT : C.DEFAULT_BG_DARK
          }
          return e
        }, C.prototype.serializeWindowState = function() {
          if (!this._win) return t.defaultWindowState();
          if (this._win.isFullScreen()) {
            var e = u.screen.getDisplayMatching(this.getBounds());
            return {
              mode: k.Fullscreen,
              display: e ? e.id : void 0,
              width: this.windowState.width,
              height: this.windowState.height,
              x: this.windowState.x,
              y: this.windowState.y
            }
          }
          var n, r = Object.create(null);
          if (n = !y.isMacintosh && this._win.isMaximized() ? k.Maximized : k.Normal, r.mode = n === k.Maximized ? k.Maximized : k.Normal, n === k.Normal || n === k.Maximized) {
            var i = this.getBounds();
            r.x = i.x, r.y = i.y, r.width = i.width, r.height = i.height
          }
          return r
        }, C.prototype.restoreWindowState = function(e) {
          if (e) try {
            e = this.validateWindowState(e)
          } catch (e) {
            this.logService.warn("Unexpected error validating window state: " + e + "\n" + e.stack)
          }
          return e || (e = t.defaultWindowState()), e
        }, C.prototype.validateWindowState = function(e) {
          if (!e) return null;
          if ([e.x, e.y, e.width, e.height].some(function(e) {
              return "number" != typeof e
            })) return null;
          if (e.width <= 0 || e.height <= 0) return null;
          var n = u.screen.getAllDisplays();
          if (1 === n.length) {
            var r = n[0].bounds;
            return e.mode !== k.Maximized && r.width > 0 && r.height > 0 && (e.x < r.x && (e.x = r.x), e.y < r.y && (e.y = r.y), e.x > r.x + r.width && (e.x = r.x), e.y > r.y + r.height && (e.y = r.y), e.width > r.width && (e.width = r.width), e.height > r.height && (e.height = r.height)), e.mode === k.Maximized ? t.defaultWindowState(k.Maximized) : e
          }
          if (e.display && e.mode === k.Fullscreen) {
            var i = n.filter(function(t) {
              return t.id === e.display
            })[0];
            if (i && i.bounds && "number" == typeof i.bounds.x && "number" == typeof i.bounds.y) {
              return (a = t.defaultWindowState(k.Fullscreen)).x = i.bounds.x, a.y = i.bounds.y, a
            }
          }
          var o = {
              x: e.x,
              y: e.y,
              width: e.width,
              height: e.height
            },
            s = u.screen.getDisplayMatching(o);
          if (s && o.x < s.bounds.x + s.bounds.width && o.y < s.bounds.y + s.bounds.height && o.x + o.width > s.bounds.x && o.y + o.height > s.bounds.y) {
            if (e.mode === k.Maximized) {
              var a = t.defaultWindowState(k.Maximized);
              return a.x = e.x, a.y = e.y, a
            }
            return e
          }
          return null
        }, C.prototype.getBounds = function() {
          var e = this._win.getPosition(),
            t = this._win.getSize();
          return {
            x: e[0],
            y: e[1],
            width: t[0],
            height: t[1]
          }
        }, C.prototype.toggleFullScreen = function() {
          var e = !this._win.isFullScreen();
          this._win.setFullScreen(e), this.setMenuBarVisibility(this.currentMenuBarVisibility, !1)
        }, C.prototype.getMenuBarVisibility = function() {
          var e = this.configurationService.getValue("window");
          if (!e || !e.menuBarVisibility) return "default";
          var t = e.menuBarVisibility;
          return ["visible", "toggle", "hidden"].indexOf(t) < 0 && (t = "default"), t
        }, C.prototype.setMenuBarVisibility = function(e, t) {
          var n = this;
          if (void 0 === t && (t = !0), !y.isMacintosh) {
            var r = this._win.isFullScreen();
            switch (e) {
              case "default":
                this._win.setMenuBarVisibility(!r), this._win.setAutoHideMenuBar(r);
                break;
              case "visible":
                this._win.setMenuBarVisibility(!0), this._win.setAutoHideMenuBar(!1);
                break;
              case "toggle":
                this._win.setMenuBarVisibility(!1), this._win.setAutoHideMenuBar(!0), t && this.send("vscode:showInfoMessage", i.localize(0, null));
                break;
              case "hidden":
                setTimeout(function() {
                  n._win.setMenuBarVisibility(!1),
                    n._win.setAutoHideMenuBar(!1)
                })
            }
          }
        }, C.prototype.onWindowTitleDoubleClick = function() {
          if (y.isMacintosh) {
            switch (u.systemPreferences.getUserDefault("AppleActionOnDoubleClick", "string")) {
              case "Minimize":
                this.win.minimize();
                break;
              case "None":
                break;
              case "Maximize":
              default:
                this.win.maximize()
            }
          } else this.win.isMaximized() ? this.win.unmaximize() : this.win.maximize()
        }, C.prototype.close = function() {
          this._win && this._win.close()
        }, C.prototype.sendWhenReady = function(e) {
          for (var t = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
          this.ready().then(function() {
            t.send.apply(t, [e].concat(n))
          })
        }, C.prototype.send = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          (r = this._win.webContents).send.apply(r, [e].concat(t));
          var r
        }, C.prototype.updateTouchBar = function(e) {
          var t = this;
          y.isMacintosh && this.touchBarGroups.forEach(function(n, r) {
            var i = e[r];
            n.segments = t.createTouchBarGroupSegments(i)
          })
        }, C.prototype.createTouchBar = function() {
          if (y.isMacintosh) {
            for (var e = 0; e < 10; e++) {
              var t = this.createTouchBarGroup();
              this.touchBarGroups.push(t)
            }
            this._win._setEscapeTouchBarItem = function() {}, this._win.setTouchBar(new u.TouchBar({
              items: this.touchBarGroups
            }))
          }
        }, C.prototype.createTouchBarGroup = function(e) {
          var t = this;
          void 0 === e && (e = []);
          var n = this.createTouchBarGroupSegments(e),
            r = new u.TouchBar.TouchBarSegmentedControl({
              segments: n,
              mode: "buttons",
              segmentStyle: "automatic",
              change: function(e) {
                t.sendWhenReady("vscode:runAction", {
                  id: r.segments[e].id,
                  from: "touchbar"
                })
              }
            });
          return r
        }, C.prototype.createTouchBarGroupSegments = function(e) {
          void 0 === e && (e = []);
          return e.map(function(e) {
            var t;
            return e.iconPath && (t = u.nativeImage.createFromPath(e.iconPath)).isEmpty() && (t = void 0), {
              id: e.id,
              label: t ? void 0 : e.title,
              icon: t
            }
          })
        }, C.prototype.dispose = function() {
          this.showTimeoutHandle && clearTimeout(this.showTimeoutHandle), this.toDispose = m.dispose(this.toDispose), this._win = null
        }, C.themeStorageKey = "theme", C.themeBackgroundStorageKey = "themeBackground", C.DEFAULT_BG_LIGHT = "#FFFFFF", C.DEFAULT_BG_DARK = "#1E1E1E", C.DEFAULT_BG_HC_BLACK = "#000000", C.MIN_WIDTH = 200,
        C.MIN_HEIGHT = 120, C = o([a(1, d.ILogService), a(2, f.IEnvironmentService), a(3, p.IConfigurationService), a(4, c.IStateService), a(5, w.IWorkspacesMainService), a(6, b.IBackupMainService)], C)
    }();
    t.CodeWindow = C
  }), define(e[135], t([0, 1, 5, 48, 115, 21, 8, 47, 9, 28, 68, 12, 62, 38, 20, 11, 22, 125, 4, 16, 40, 14, 36, 3, 2, 19, 6, 33, 58, 17, 7, 26]), function(e, t, n, r, i, c, u, l, f, d, p, h, v, g, m, y, w, b, S, _, k, C, E, P, O, I, M, T, W, x, D, L) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var A;
    ! function(e) {
      e[e.UNRESPONSIVE = 0] = "UNRESPONSIVE", e[e.CRASHED = 1] = "CRASHED"
    }(A || (A = {}));
    var R = function() {
      function e(t, n, r, i, o, s, a, c, u, l, f) {
        this.machineId = t, this.logService = n, this.stateService = r, this.environmentService = i, this.lifecycleService = o, this.backupMainService = s, this.configurationService = c, this.historyMainService = u, this.workspacesMainService = l, this.instantiationService = f, this._onWindowReady = new S.Emitter, this.onWindowReady = this._onWindowReady.event, this._onWindowClose = new S.Emitter, this.onWindowClose = this._onWindowClose.event, this._onWindowLoad = new S.Emitter,
          this.onWindowLoad = this._onWindowLoad.event, this._onActiveWindowChanged = new S.Emitter, this.onActiveWindowChanged = this._onActiveWindowChanged.event, this._onWindowReload = new S.Emitter, this.onWindowReload = this._onWindowReload.event, this._onWindowsCountChanged = new S.Emitter, this.onWindowsCountChanged = this._onWindowsCountChanged.event, this.windowsState = this.stateService.getItem(e.windowsStateStorageKey) || {
            openedWindows: []
          }, Array.isArray(this.windowsState.openedWindows) || (this.windowsState.openedWindows = []), this.dialogs = new F(i, a, r, this, this.logService), this.workspacesManager = new N(l, s, i, this)
      }
      return e.prototype.ready = function(e) {
          this.initialUserEnv = e, this.registerListeners()
        }, e.prototype.registerListeners = function() {
          var e = this;
          h.app.on("browser-window-focus", function() {
            setTimeout(function() {
              e._onActiveWindowChanged.fire(e.getLastActiveWindow())
            })
          }), h.ipcMain.on("vscode:workbenchLoaded", function(t, n) {
            e.logService.trace("IPC#vscode-workbenchLoaded");
            var r = e.getWindowById(n);
            r && (r.setReady(), e._onWindowReady.fire(r))
          }), P.isWindows && h.systemPreferences.on("inverted-color-scheme-changed", function() {
            h.systemPreferences.isInvertedColorScheme() ? e.sendToAll("vscode:enterHighContrast") : e.sendToAll("vscode:leaveHighContrast")
          }), this.lifecycleService.onBeforeWindowUnload(function(t) {
            return e.onBeforeWindowUnload(t)
          }), this.lifecycleService.onBeforeWindowClose(function(t) {
            return e.onBeforeWindowClose(t)
          }), this.lifecycleService.onBeforeQuit(function() {
            return e.onBeforeQuit()
          }), this.onWindowsCountChanged(function(t) {
            t.newCount - t.oldCount > 0 && (e.lastClosedWindowState = void 0)
          })
        }, e.prototype.onBeforeQuit = function() {
          var t = this,
            n = {
              openedWindows: [],
              lastPluginDevelopmentHostWindow: this.windowsState.lastPluginDevelopmentHostWindow,
              lastActiveWindow: this.lastClosedWindowState
            };
          if (!n.lastActiveWindow) {
            var r = this.getLastActiveWindow();
            r && !r.isExtensionDevelopmentHost || (r = e.WINDOWS.filter(function(e) {
              return !e.isExtensionDevelopmentHost
            })[0]), r && (n.lastActiveWindow = this.toWindowState(r))
          }
          var i = e.WINDOWS.filter(function(e) {
            return e.isExtensionDevelopmentHost && !e.isExtensionTestHost
          })[0];
          i && (n.lastPluginDevelopmentHostWindow = this.toWindowState(i)), this.getWindowCount() > 1 && (n.openedWindows = e.WINDOWS.filter(function(e) {
            return !e.isExtensionDevelopmentHost
          }).map(function(e) {
            return t.toWindowState(e)
          })), this.stateService.setItem(e.windowsStateStorageKey, n)
        }, e.prototype.onBeforeWindowClose = function(e) {
          if (!this.lifecycleService.isQuitRequested()) {
            var t = this.toWindowState(e);
            e.isExtensionDevelopmentHost && !e.isExtensionTestHost ? this.windowsState.lastPluginDevelopmentHostWindow = t : e.isExtensionDevelopmentHost || !e.openedWorkspace && !e.openedFolderPath || this.windowsState.openedWindows.forEach(function(n) {
              var r = e.openedWorkspace && n.workspace && n.workspace.id === e.openedWorkspace.id,
                i = e.openedFolderPath && C.isEqual(n.folderPath, e.openedFolderPath, !P.isLinux);
              (r || i) && (n.uiState = t.uiState)
            }), 1 === this.getWindowCount() && (this.lastClosedWindowState = t)
          }
        }, e.prototype.toWindowState = function(e) {
          return {
            workspace: e.openedWorkspace,
            folderPath: e.openedFolderPath,
            backupPath: e.backupPath,
            uiState: e.serializeWindowState()
          }
        }, e.prototype.open = function(e) {
          var t = this;
          e = this.validateOpenConfig(e);
          var i = this.getPathsToOpen(e),
            o = [];
          e.addMode && (o = i.filter(function(e) {
            return !!e.folderPath
          }).map(function(e) {
            return {
              filePath: e.folderPath
            }
          }), i = i.filter(function(e) {
            return !e.folderPath
          }));
          var s = i.filter(function(e) {
              return !!e.filePath && !e.createFilePath
            }),
            a = i.filter(function(e) {
              return !!e.filePath && e.createFilePath
            }),
            u = [];
          e.diffMode && 2 === s.length && (u = s, s = [], a = []);
          var l;
          e.cli.wait && e.cli.waitMarkerFilePath && (l = {
            paths: u.concat(s, a),
            waitMarkerFilePath: e.cli.waitMarkerFilePath
          });
          var f = c.distinct(i.filter(function(e) {
              return !!e.workspace
            }).map(function(e) {
              return e.workspace
            }), function(e) {
              return e.id
            }),
            d = c.distinct(i.filter(function(e) {
              return e.folderPath && !e.filePath
            }).map(function(e) {
              return e.folderPath
            }), function(e) {
              return P.isLinux ? e : e.toLowerCase()
            }),
            p = [],
            h = [],
            v = [];
          e.initialStartup && !e.cli.extensionDevelopmentPath && (p = this.backupMainService.getFolderBackupPaths(), (h = this.backupMainService.getWorkspaceBackups()).push.apply(h, this.workspacesMainService.getUntitledWorkspacesSync()), (v = this.backupMainService.getEmptyWindowBackupPaths()).push.apply(v, i.filter(function(e) {
            return !e.workspace && !e.folderPath && e.backupPath
          }).map(function(e) {
            return n.basename(e.backupPath)
          })), v = c.distinct(v));
          var g = i.filter(function(e) {
              return !(e.workspace || e.folderPath || e.filePath || e.backupPath)
            }).length,
            m = this.doOpen(e, f, h, d, p, v, g, s, a, u, l, o);
          if (m.length > 1) {
            var y = !0,
              b = !0;
            if (this.windowsState.lastActiveWindow && !e.forceEmpty && !e.cli._.length && (!e.pathsToOpen || !e.pathsToOpen.length)) {
              var S = m.filter(function(e) {
                return e.backupPath === t.windowsState.lastActiveWindow.backupPath
              });
              S.length && (S[0].focus(), y = !1, b = !1)
            }
            if (y)
              for (var _ = function(e) {
                  var t = m[e];
                  return t.openedWorkspace && h.some(function(e) {
                    return e.id === t.openedWorkspace.id
                  }) || t.openedFolderPath && p.some(function(e) {
                    return e === t.openedFolderPath
                  }) || t.backupPath && v.some(function(e) {
                    return e === n.basename(t.backupPath)
                  }) ? "continue" : (t.focus(), b = !1, "break")
                }, k = m.length - 1; k >= 0; k--) {
                if ("break" === _(k)) break
              }
            b && m[m.length - 1].focus()
          }
          if (!m.some(function(e) {
              return e.isExtensionDevelopmentHost
            }) && !e.cli.diff) {
            var C = [],
              E = [];
            i.forEach(function(e) {
              e.workspace || e.folderPath ? C.push(e.workspace || e.folderPath) : e.filePath && E.push(e.filePath)
            }), this.environmentService.skipAddToRecentlyOpened || this.historyMainService.addRecentlyOpened(C, E)
          }
          return e.context === w.OpenContext.CLI && e.cli.wait && e.cli.waitMarkerFilePath && 1 === m.length && m[0] && this.waitForWindowCloseOrLoad(m[0].id).done(function() {
            return r.unlink(e.cli.waitMarkerFilePath, function(e) {})
          }), m
        }, e.prototype.validateOpenConfig = function(e) {
          return !e.addMode || !e.initialStartup && this.getLastActiveWindow() || (e.addMode = !1), e
        }, e.prototype.doOpen = function(t, n, r, i, o, s, a, u, l, f, d, h) {
          var v = this,
            g = [],
            m = this.shouldOpenNewWindow(t),
            y = m.openFolderInNewWindow,
            w = m.openFilesInNewWindow;
          if (!t.initialStartup && h.length > 0) {
            var S = this.getLastActiveWindow();
            S && g.push(this.doAddFoldersToExistingWidow(S, h)), h = []
          }
          if (0 === i.length + o.length + n.length + r.length + s.length && (u.length > 0 || l.length > 0 || f.length > 0)) {
            var _ = u[0] || l[0] || f[0],
              k = b.findBestWindowOrFolderForFile({
                windows: e.WINDOWS,
                newWindow: w,
                reuseWindow: t.forceReuseWindow,
                context: t.context,
                filePath: _ && _.filePath,
                userHome: this.environmentService.userHome,
                workspaceResolver: function(e) {
                  return v.workspacesMainService.resolveWorkspaceSync(e.configPath)
                }
              });
            "string" == typeof k && d && (k = w ? null : this.getLastActiveWindow()), k instanceof p.CodeWindow ? k.openedWorkspace ? n.push(k.openedWorkspace) : k.openedFolderPath ? i.push(k.openedFolderPath) : (g.push(this.doOpenFilesInExistingWindow(k, u, l, f, d)), u = [], l = [], f = [], d = void 0) : "string" == typeof k ? i.push(k) : (g.push(this.openInBrowserWindow({
              userEnv: t.userEnv,
              cli: t.cli,
              initialStartup: t.initialStartup,
              filesToOpen: u,
              filesToCreate: l,
              filesToDiff: f,
              filesToWait: d,
              forceNewWindow: !0
            })), u = [], l = [], f = [], d = void 0)
          }
          var E = c.distinct(r.concat(n), function(e) {
            return e.id
          });
          if (E.length > 0) {
            var O = c.coalesce(E.map(function(t) {
              return b.findWindowOnWorkspace(e.WINDOWS, t)
            }));
            if (O.length > 0) {
              var I = O[0];
              g.push(this.doOpenFilesInExistingWindow(I, u, l, f, d)), u = [], l = [], f = [], d = void 0, y = !0
            }
            E.forEach(function(e) {
              O.some(function(t) {
                return t.openedWorkspace.id === e.id
              }) || (g.push(v.doOpenFolderOrWorkspace(t, {
                workspace: e
              }, y, u, l, f, d)), u = [], l = [], f = [], d = void 0, y = !0)
            })
          }
          var M = c.distinct(o.concat(i), function(e) {
            return P.isLinux ? e : e.toLowerCase()
          });
          if (M.length > 0) {
            var T = c.coalesce(M.map(function(t) {
              return b.findWindowOnWorkspace(e.WINDOWS, t)
            }));
            if (T.length > 0) {
              var W = T[0];
              g.push(this.doOpenFilesInExistingWindow(W, u, l, f, d)), u = [], l = [], f = [], d = void 0, y = !0
            }
            M.forEach(function(e) {
              T.some(function(t) {
                return C.isEqual(t.openedFolderPath, e, !P.isLinux)
              }) || (g.push(v.doOpenFolderOrWorkspace(t, {
                folderPath: e
              }, y, u, l, f, d)), u = [], l = [], f = [], d = void 0, y = !0)
            })
          }
          if (s.length > 0 && s.forEach(function(e) {
              g.push(v.openInBrowserWindow({
                userEnv: t.userEnv,
                cli: t.cli,
                initialStartup: t.initialStartup,
                filesToOpen: u,
                filesToCreate: l,
                filesToDiff: f,
                filesToWait: d,
                forceNewWindow: !0,
                emptyWindowBackupFolder: e
              })), u = [], l = [], f = [], d = void 0, y = !0
            }), 0 === g.length)
            for (var x = 0; x < a; x++) g.push(this.openInBrowserWindow({
              userEnv: t.userEnv,
              cli: t.cli,
              initialStartup: t.initialStartup,
              forceNewWindow: y
            })), y = !0;
          return c.distinct(g)
        }, e.prototype.doOpenFilesInExistingWindow = function(e, t, n, r, i) {
          return e.focus(), e.ready().then(function(e) {
            e.send("vscode:openFiles", {
              filesToOpen: t,
              filesToCreate: n,
              filesToDiff: r,
              filesToWait: i
            })
          }), e
        }, e.prototype.doAddFoldersToExistingWidow = function(e, t) {
          return e.focus(), e.ready().then(function(e) {
            e.send("vscode:addFolders", {
              foldersToAdd: t
            })
          }), e
        }, e.prototype.doOpenFolderOrWorkspace = function(e, t, n, r, i, o, s, a) {
          return this.openInBrowserWindow({
            userEnv: e.userEnv,
            cli: e.cli,
            initialStartup: e.initialStartup,
            workspace: t.workspace,
            folderPath: t.folderPath,
            filesToOpen: r,
            filesToCreate: i,
            filesToDiff: o,
            filesToWait: s,
            forceNewWindow: n,
            windowToUse: a
          })
        }, e.prototype.getPathsToOpen = function(e) {
          var t, n = !1;
          if (e.pathsToOpen && e.pathsToOpen.length > 0 ? (t = this.doExtractPathsFromAPI(e), n = !0) : e.forceEmpty ? t = [Object.create(null)] : e.cli._.length > 0 ? (t = this.doExtractPathsFromCLI(e.cli), n = !0) : t = this.doGetWindowsFromLastSession(), !e.addMode && n) {
            var r = t.filter(function(e) {
              return !!e.folderPath
            });
            if (r.length > 1) {
              var i = this.workspacesMainService.createWorkspaceSync(r.map(function(e) {
                return {
                  uri: D.default.file(e.folderPath)
                }
              }));
              t.push({
                workspace: i
              }), t = t.filter(function(e) {
                return !e.folderPath
              })
            }
          }
          return t
        }, e.prototype.doExtractPathsFromAPI = function(e) {
          var t = this,
            n = e.pathsToOpen.map(function(n) {
              var r = t.parsePath(n, {
                gotoLineMode: e.cli && e.cli.goto,
                forceOpenWorkspaceAsFile: e.forceOpenWorkspaceAsFile
              });
              if (!r) {
                var o = {
                  title: _.default.nameLong,
                  type: "info",
                  buttons: [i.localize(0, null)],
                  message: i.localize(1, null),
                  detail: i.localize(2, null, n),
                  noLink: !0
                };
                t.dialogs.showMessageBox(o, t.getFocusedWindow())
              }
              return r
            });
          return n = c.coalesce(n)
        }, e.prototype.doExtractPathsFromCLI = function(e) {
          var t = this,
            n = c.coalesce(e._.map(function(n) {
              return t.parsePath(n, {
                ignoreFileNotFound: !0,
                gotoLineMode: e.goto
              })
            }));
          return n.length > 0 ? n : [Object.create(null)]
        }, e.prototype.doGetWindowsFromLastSession = function() {
          var e = this,
            t = this.getRestoreWindowsSetting(),
            n = this.windowsState.lastActiveWindow;
          switch (t) {
            case "none":
              return [Object.create(null)];
            case "one":
              if (n) {
                var r = n.workspace;
                if (r) {
                  var i = this.parsePath(r.configPath);
                  if (i && i.workspace) return [i]
                } else if (n.folderPath) {
                  var o = this.parsePath(n.folderPath);
                  if (o && o.folderPath) return [o]
                } else if (n.backupPath) return [{
                  backupPath: n.backupPath
                }]
              }
              break;
            case "all":
            case "folders":
              var s = [],
                a = this.windowsState.openedWindows.filter(function(e) {
                  return !!e.workspace
                }).map(function(e) {
                  return e.workspace
                });
              n && n.workspace && a.push(n.workspace), s.push.apply(s, a.map(function(t) {
                return e.parsePath(t.configPath)
              }).filter(function(e) {
                return e && e.workspace
              }));
              var c = this.windowsState.openedWindows.filter(function(e) {
                return !!e.folderPath
              }).map(function(e) {
                return e.folderPath
              });
              if (n && n.folderPath && c.push(n.folderPath),
                s.push.apply(s, c.map(function(t) {
                  return e.parsePath(t)
                }).filter(function(e) {
                  return e && e.folderPath
                })), "all" === t) {
                var u = this.windowsState.openedWindows.filter(function(e) {
                    return !e.workspace && !e.folderPath && e.backupPath
                  }).map(function(e) {
                    return e.backupPath
                  }),
                  l = n && !n.workspace && !n.folderPath && n.backupPath;
                l && u.push(l), s.push.apply(s, u.map(function(e) {
                  return {
                    backupPath: e
                  }
                }))
              }
              if (s.length > 0) return s
          }
          return [Object.create(null)]
        }, e.prototype.getRestoreWindowsSetting = function() {
          var e;
          if (this.lifecycleService.wasRestarted) e = "all";
          else {
            var t = this.configurationService.getValue("window");
            e = t && t.restoreWindows || "one", -1 === ["all", "folders", "one", "none"].indexOf(e) && (e = "one")
          }
          return e
        }, e.prototype.parsePath = function(e, t) {
          if (!e) return null;
          var i, o = t && t.gotoLineMode;
          t && t.gotoLineMode && (e = (i = v.parseLineAndColumnAware(e)).path);
          var s = n.normalize(e);
          try {
            var a = r.statSync(s);
            if (a) {
              if (a.isFile()) {
                if (!t || !t.forceOpenWorkspaceAsFile) {
                  var c = this.workspacesMainService.resolveWorkspaceSync(s);
                  if (c) return {
                    workspace: {
                      id: c.id,
                      configPath: c.configPath
                    }
                  }
                }
                return {
                  filePath: s,
                  lineNumber: o ? i.line : void 0,
                  columnNumber: o ? i.column : void 0
                }
              }
              return {
                folderPath: s
              }
            }
          } catch (e) {
            if (this.historyMainService.removeFromRecentlyOpened([s]), t && t.ignoreFileNotFound) return {
              filePath: s,
              createFilePath: !0
            }
          }
          return null
        }, e.prototype.shouldOpenNewWindow = function(e) {
          var t = this.configurationService.getValue("window"),
            n = t && t.openFoldersInNewWindow || "default",
            r = t && t.openFilesInNewWindow || "off",
            i = (e.preferNewWindow || e.forceNewWindow) && !e.forceReuseWindow;
          e.forceNewWindow || e.forceReuseWindow || "on" !== n && "off" !== n || (i = "on" === n);
          var o;
          return e.forceNewWindow || e.forceReuseWindow ? o = e.forceNewWindow && !e.forceReuseWindow : (e.context === w.OpenContext.DOCK && (o = !0), e.cli.extensionDevelopmentPath || "on" !== r && "off" !== r || (o = "on" === r)), {
            openFolderInNewWindow: i,
            openFilesInNewWindow: o
          }
        }, e.prototype.openExtensionDevelopmentHostWindow = function(t) {
          var n = b.findWindowOnExtensionDevelopmentPath(e.WINDOWS, t.cli.extensionDevelopmentPath);
          if (n) return this.reload(n, t.cli), void n.focus();
          if (0 === t.cli._.length && !t.cli.extensionTestsPath) {
            var r = this.windowsState.lastPluginDevelopmentHostWindow,
              i = r && (r.workspace || r.folderPath);
            i && (t.cli._ = [I.isSingleFolderWorkspaceIdentifier(i) ? i : i.configPath])
          }
          t.cli._.some(function(t) {
            return !!b.findWindowOnWorkspaceOrFolderPath(e.WINDOWS, t)
          }) && (t.cli._ = []), this.open({
            context: t.context,
            cli: t.cli,
            forceNewWindow: !0,
            forceEmpty: 0 === t.cli._.length,
            userEnv: t.userEnv
          })
        }, e.prototype.openInBrowserWindow = function(t) {
          var r = this,
            i = u.mixin({}, t.cli);
          i.appRoot = this.environmentService.appRoot, i.machineId = this.machineId, i.execPath = process.execPath, i.userEnv = u.assign({}, this.initialUserEnv, t.userEnv || {}), i.isInitialStartup = t.initialStartup, i.workspace = t.workspace, i.folderPath = t.folderPath, i.filesToOpen = t.filesToOpen, i.filesToCreate = t.filesToCreate, i.filesToDiff = t.filesToDiff, i.filesToWait = t.filesToWait, i.nodeCachedDataDir = this.environmentService.nodeCachedDataDir, t.emptyWindowBackupFolder && (i.backupPath = n.join(this.environmentService.backupHome, t.emptyWindowBackupFolder));
          var o;
          if (t.forceNewWindow || (o = t.windowToUse || this.getLastActiveWindow()) && o.focus(), o) {
            var s = o.config;
            !i.extensionDevelopmentPath && s && s.extensionDevelopmentPath && (i.extensionDevelopmentPath = s.extensionDevelopmentPath, i.verbose = s.verbose, i.debugBrkPluginHost = s.debugBrkPluginHost, i.debugId = s.debugId, i.debugPluginHost = s.debugPluginHost, i["extensions-dir"] = s["extensions-dir"])
          } else {
            var a = this.configurationService.getValue("window"),
              c = this.getNewWindowState(i),
              l = void 0;
            l = c.hasDefaultState ? a && a.newWindowDimensions && ["fullscreen", "inherit"].indexOf(a.newWindowDimensions) >= 0 : this.lifecycleService.wasRestarted || a && a.restoreFullscreen, c.mode !== p.WindowMode.Fullscreen || l || (c.mode = p.WindowMode.Normal), o = this.instantiationService.createInstance(p.CodeWindow, {
                state: c,
                extensionDevelopmentPath: i.extensionDevelopmentPath,
                isExtensionTestHost: !!i.extensionTestsPath
              }), e.WINDOWS.push(o), this._onWindowsCountChanged.fire({
                oldCount: e.WINDOWS.length - 1,
                newCount: e.WINDOWS.length
              }),
              o.win.webContents.removeAllListeners("devtools-reload-page"), o.win.webContents.on("devtools-reload-page", function() {
                return r.reload(o)
              }), o.win.webContents.on("crashed", function() {
                return r.onWindowError(o, A.CRASHED)
              }), o.win.on("unresponsive", function() {
                return r.onWindowError(o, A.UNRESPONSIVE)
              }), o.win.on("closed", function() {
                return r.onWindowClosed(o)
              }), this.lifecycleService.registerWindow(o)
          }
          return this.lifecycleService.unload(o, g.UnloadReason.LOAD).done(function(e) {
            e || (i.extensionDevelopmentPath || (i.workspace ? i.backupPath = r.backupMainService.registerWorkspaceBackupSync(i.workspace) : i.folderPath ? i.backupPath = r.backupMainService.registerFolderBackupSync(i.folderPath) : i.backupPath = r.backupMainService.registerEmptyWindowBackupSync(t.emptyWindowBackupFolder)), o.load(i), r._onWindowLoad.fire(o.id))
          }), o
        }, e.prototype.getNewWindowState = function(e) {
          var t = this.getLastActiveWindow();
          if (!e.extensionTestsPath) {
            if (e.extensionDevelopmentPath && this.windowsState.lastPluginDevelopmentHostWindow) return this.windowsState.lastPluginDevelopmentHostWindow.uiState;
            if (e.workspace) {
              var n = this.windowsState.openedWindows.filter(function(t) {
                return t.workspace && t.workspace.id === e.workspace.id
              }).map(function(e) {
                return e.uiState
              });
              if (n.length) return n[0]
            }
            if (e.folderPath) {
              var r = this.windowsState.openedWindows.filter(function(t) {
                return C.isEqual(t.folderPath, e.folderPath, !P.isLinux)
              }).map(function(e) {
                return e.uiState
              });
              if (r.length) return r[0]
            } else if (e.backupPath) {
              var i = this.windowsState.openedWindows.filter(function(t) {
                return t.backupPath === e.backupPath
              }).map(function(e) {
                return e.uiState
              });
              if (i.length) return i[0]
            }
            f = this.lastClosedWindowState || this.windowsState.lastActiveWindow;
            if (!t && f) return f.uiState
          }
          var o, s = h.screen.getAllDisplays();
          if (1 === s.length) o = s[0];
          else {
            if (P.isMacintosh) {
              var a = h.screen.getCursorScreenPoint();
              o = h.screen.getDisplayNearestPoint(a)
            }!o && t && (o = h.screen.getDisplayMatching(t.getBounds())),
              o || (o = h.screen.getPrimaryDisplay() || s[0])
          }
          var c = p.defaultWindowState();
          c.x = o.bounds.x + o.bounds.width / 2 - c.width / 2, c.y = o.bounds.y + o.bounds.height / 2 - c.height / 2;
          var u = this.configurationService.getValue("window"),
            l = !0;
          if (u && u.newWindowDimensions)
            if ("maximized" === u.newWindowDimensions) c.mode = p.WindowMode.Maximized, l = !1;
            else if ("fullscreen" === u.newWindowDimensions) c.mode = p.WindowMode.Fullscreen, l = !1;
          else if ("inherit" === u.newWindowDimensions && t) {
            var f;
            (f = t.serializeWindowState()).mode === p.WindowMode.Fullscreen ? c.mode = p.WindowMode.Fullscreen : c = f, l = !1
          }
          return l && (c = this.ensureNoOverlap(c)), c.hasDefaultState = !0, c
        }, e.prototype.ensureNoOverlap = function(t) {
          if (0 === e.WINDOWS.length) return t;
          for (var n = e.WINDOWS.map(function(e) {
              return e.getBounds()
            }); n.some(function(e) {
              return e.x === t.x || e.y === t.y
            });) t.x += 30, t.y += 30;
          return t
        }, e.prototype.reload = function(e, t) {
          var n = this;
          this.lifecycleService.unload(e, g.UnloadReason.RELOAD).done(function(r) {
            r || (e.reload(void 0, t), n._onWindowReload.fire(e.id))
          })
        },
        e.prototype.closeWorkspace = function(e) {
          this.openInBrowserWindow({
            cli: this.environmentService.args,
            windowToUse: e
          })
        }, e.prototype.saveAndEnterWorkspace = function(e, t) {
          var n = this;
          return this.workspacesManager.saveAndEnterWorkspace(e, t).then(function(t) {
            return n.doEnterWorkspace(e, t)
          })
        }, e.prototype.createAndEnterWorkspace = function(e, t, n) {
          var r = this;
          return this.workspacesManager.createAndEnterWorkspace(e, t, n).then(function(t) {
            return r.doEnterWorkspace(e, t)
          })
        }, e.prototype.doEnterWorkspace = function(e, t) {
          return this.historyMainService.addRecentlyOpened([t.workspace], []), this._onWindowReady.fire(e), t
        }, e.prototype.pickWorkspaceAndOpen = function(e) {
          this.workspacesManager.pickWorkspaceAndOpen(e)
        }, e.prototype.onBeforeWindowUnload = function(e) {
          var t = e.reason === g.UnloadReason.CLOSE,
            n = e.reason === g.UnloadReason.LOAD;
          if (t || n) {
            var r = e.window.openedWorkspace;
            r && this.workspacesMainService.isUntitledWorkspace(r) && (e.window.config && e.window.config.extensionDevelopmentPath || t && !P.isMacintosh && 1 === this.getWindowCount() || e.veto(this.workspacesManager.promptToSaveUntitledWorkspace(this.getWindowById(e.window.id), r)))
          }
        }, e.prototype.focusLastActive = function(e, t) {
          var n = this.getLastActiveWindow();
          return n ? (n.focus(), n) : this.open({
            context: t,
            cli: e,
            forceEmpty: !0
          })[0]
        }, e.prototype.getLastActiveWindow = function() {
          return b.getLastActiveWindow(e.WINDOWS)
        }, e.prototype.openNewWindow = function(e) {
          this.open({
            context: e,
            cli: this.environmentService.args,
            forceNewWindow: !0,
            forceEmpty: !0
          })
        }, e.prototype.waitForWindowCloseOrLoad = function(e) {
          var t = this;
          return new O.TPromise(function(n) {
            function r(t) {
              t === e && (i.dispose(), o.dispose(), n(null))
            }
            var i = t.onWindowClose(function(e) {
                return r(e)
              }),
              o = t.onWindowLoad(function(e) {
                return r(e)
              })
          })
        }, e.prototype.sendToFocused = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          var r = this.getFocusedWindow() || this.getLastActiveWindow();
          r && r.sendWhenReady.apply(r, [e].concat(t))
        }, e.prototype.sendToAll = function(t, n, r) {
          e.WINDOWS.forEach(function(e) {
            r && r.indexOf(e.id) >= 0 || e.sendWhenReady(t, n)
          })
        }, e.prototype.getFocusedWindow = function() {
          var e = h.BrowserWindow.getFocusedWindow();
          return e ? this.getWindowById(e.id) : null
        }, e.prototype.getWindowById = function(t) {
          var n = e.WINDOWS.filter(function(e) {
            return e.id === t
          });
          return n && 1 === n.length ? n[0] : null
        }, e.prototype.getWindows = function() {
          return e.WINDOWS
        }, e.prototype.getWindowCount = function() {
          return e.WINDOWS.length
        }, e.prototype.onWindowError = function(e, t) {
          var n = this;
          this.logService.error(t === A.CRASHED ? "[VS Code]: render process crashed!" : "[VS Code]: detected unresponsive"), t === A.UNRESPONSIVE ? this.dialogs.showMessageBox({
            title: _.default.nameLong,
            type: "warning",
            buttons: [T.mnemonicButtonLabel(i.localize(3, null)), T.mnemonicButtonLabel(i.localize(4, null)), T.mnemonicButtonLabel(i.localize(5, null))],
            message: i.localize(6, null),
            detail: i.localize(7, null),
            noLink: !0
          }, e).then(function(t) {
            e.win && (0 === t.button ? e.reload() : 2 === t.button && (n.onBeforeWindowClose(e), e.win.destroy()))
          }) : this.dialogs.showMessageBox({
            title: _.default.nameLong,
            type: "warning",
            buttons: [T.mnemonicButtonLabel(i.localize(8, null)), T.mnemonicButtonLabel(i.localize(9, null))],
            message: i.localize(10, null),
            detail: i.localize(11, null),
            noLink: !0
          }, e).then(function(t) {
            e.win && (0 === t.button ? e.reload() : 1 === t.button && (n.onBeforeWindowClose(e), e.win.destroy()))
          })
        }, e.prototype.onWindowClosed = function(t) {
          t.dispose();
          var n = e.WINDOWS.indexOf(t);
          e.WINDOWS.splice(n, 1), this._onWindowsCountChanged.fire({
            oldCount: e.WINDOWS.length + 1,
            newCount: e.WINDOWS.length
          }), this._onWindowClose.fire(t.id)
        }, e.prototype.pickFileFolderAndOpen = function(e) {
          this.doPickAndOpen(e, !0, !0)
        }, e.prototype.pickFolderAndOpen = function(e) {
          this.doPickAndOpen(e, !0, !1)
        }, e.prototype.pickFileAndOpen = function(e) {
          this.doPickAndOpen(e, !1, !0)
        }, e.prototype.doPickAndOpen = function(e, t, n) {
          var r = e;
          r.pickFolders = t, r.pickFiles = n, r.dialogOptions || (r.dialogOptions = Object.create(null)),
            r.dialogOptions.title || (r.dialogOptions.title = t && n ? i.localize(12, null) : t ? i.localize(13, null) : i.localize(14, null)), r.telemetryEventName || (r.telemetryEventName = t && n ? "openFileFolder" : t ? "openFolder" : "openFile"), this.dialogs.pickAndOpen(r)
        }, e.prototype.showMessageBox = function(e, t) {
          return this.dialogs.showMessageBox(e, t)
        }, e.prototype.showSaveDialog = function(e, t) {
          return this.dialogs.showSaveDialog(e, t)
        }, e.prototype.showOpenDialog = function(e, t) {
          return this.dialogs.showOpenDialog(e, t)
        }, e.prototype.quit = function() {
          var e = this,
            t = this.getFocusedWindow();
          t && t.isExtensionDevelopmentHost && this.getWindowCount() > 1 ? t.win.close() : setTimeout(function() {
            e.lifecycleService.quit()
          }, 10)
        }, e.windowsStateStorageKey = "windowsState", e.WINDOWS = [], e = o([a(1, y.ILogService), a(2, d.IStateService), a(3, f.IEnvironmentService), a(4, g.ILifecycleService), a(5, l.IBackupMainService), a(6, k.ITelemetryService), a(7, m.IConfigurationService), a(8, E.IHistoryMainService), a(9, I.IWorkspacesMainService), a(10, M.IInstantiationService)], e)
    }();
    t.WindowsManager = R;
    var F = function() {
        function e(e, t, n, r, i) {
          this.environmentService = e, this.telemetryService = t, this.stateService = n, this.windowsMainService = r, this.logService = i, this.mapWindowToDialogQueue = new Map, this.noWindowDialogQueue = new L.Queue
        }
        return e.prototype.pickAndOpen = function(e) {
          var t = this;
          this.getFileOrFolderPaths(e).then(function(n) {
            var r = n ? n.length : 0;
            e.telemetryEventName && t.telemetryService.publicLog(e.telemetryEventName, s({}, e.telemetryExtraData, {
              outcome: r ? "success" : "canceled",
              numberOfPaths: r
            })), r && t.windowsMainService.open({
              context: w.OpenContext.DIALOG,
              cli: t.environmentService.args,
              pathsToOpen: n,
              forceNewWindow: e.forceNewWindow,
              forceOpenWorkspaceAsFile: e.dialogOptions && !u.equals(e.dialogOptions.filters, I.WORKSPACE_FILTER)
            })
          })
        }, e.prototype.getFileOrFolderPaths = function(t) {
          var r = this;
          t.dialogOptions || (t.dialogOptions = Object.create(null)), t.dialogOptions.defaultPath || (t.dialogOptions.defaultPath = this.stateService.getItem(e.workingDirPickerStorageKey)),
            "boolean" != typeof t.pickFiles && "boolean" != typeof t.pickFolders || (t.dialogOptions.properties = void 0, t.pickFiles && t.pickFolders && (t.dialogOptions.properties = ["multiSelections", "openDirectory", "openFile", "createDirectory"])), t.dialogOptions.properties || (t.dialogOptions.properties = ["multiSelections", t.pickFolders ? "openDirectory" : "openFile", "createDirectory"]), P.isMacintosh && t.dialogOptions.properties.push("treatPackageAsDirectory");
          var i = this.windowsMainService.getWindowById(t.windowId) || this.windowsMainService.getFocusedWindow();
          return this.showOpenDialog(t.dialogOptions, i).then(function(t) {
            if (t && t.length > 0) return r.stateService.setItem(e.workingDirPickerStorageKey, n.dirname(t[0])), t
          })
        }, e.prototype.getDialogQueue = function(e) {
          if (!e) return this.logService.info("getDialogQueue: using NO WINDOW queue. size: ", this.noWindowDialogQueue.size), this.noWindowDialogQueue;
          var t = this.mapWindowToDialogQueue.get(e.id);
          return t ? this.logService.info("getDialogQueue: found existing window dialog queue for window:", e.id) : (this.logService.info("getDialogQueue: creating window dialog queue for window:", e.id), t = new L.Queue, this.mapWindowToDialogQueue.set(e.id, t)), this.logService.info("getDialogQueue: size: ", t.size), t
        }, e.prototype.showMessageBox = function(e, t) {
          var n = this;
          return this.logService.info("showMessageBox begin: ", e, t ? t.id : "No Window"), this.getDialogQueue(t).queue(function() {
            return new O.TPromise(function(r, i) {
              n.logService.info("showMessageBox opening"), h.dialog.showMessageBox(t ? t.win : void 0, e, function(e, t) {
                n.logService.info("showMessageBox closed, response: ", e, t), r({
                  button: e,
                  checkboxChecked: t
                })
              })
            })
          })
        }, e.prototype.showSaveDialog = function(e, t) {
          var n = this;
          return this.logService.info("showSaveDialog begin: ", e, t ? t.id : "No Window"), this.getDialogQueue(t).queue(function() {
            return new O.TPromise(function(r, i) {
              n.logService.info("showSaveDialog opening"), h.dialog.showSaveDialog(t ? t.win : void 0, e, function(e) {
                n.logService.info("showSaveDialog closed, response: ", e), r(function(e) {
                  return e && P.isMacintosh && (e = x.normalizeNFC(e)), e
                }(e))
              })
            })
          })
        }, e.prototype.showOpenDialog = function(e, t) {
          var n = this;
          return this.logService.info("showOpenDialog begin: ", e, t ? t.id : "No Window"), this.getDialogQueue(t).queue(function() {
            return new O.TPromise(function(r, i) {
              n.logService.info("showOpenDialog opening"), h.dialog.showOpenDialog(t ? t.win : void 0, e, function(e) {
                n.logService.info("showOpenDialog closed, response: ", e), r(function(e) {
                  return e && e.length > 0 && P.isMacintosh && (e = e.map(function(e) {
                    return x.normalizeNFC(e)
                  })), e
                }(e))
              })
            })
          })
        }, e.workingDirPickerStorageKey = "pickerWorkingDir", e
      }(),
      N = function() {
        function e(e, t, n, r) {
          this.workspacesService = e, this.backupService = t, this.environmentService = n, this.windowsMainService = r
        }
        return e.prototype.saveAndEnterWorkspace = function(e, t) {
          return e && e.win && e.readyState === w.ReadyState.READY && e.openedWorkspace && t && this.isValidTargetWorkspacePath(e, t) ? this.doSaveAndOpenWorkspace(e, e.openedWorkspace, t) : O.TPromise.as(null)
        }, e.prototype.createAndEnterWorkspace = function(e, t, n) {
          var r = this;
          return e && e.win && e.readyState === w.ReadyState.READY ? this.isValidTargetWorkspacePath(e, n).then(function(i) {
            return i ? r.workspacesService.createWorkspace(t).then(function(t) {
              return r.doSaveAndOpenWorkspace(e, t, n)
            }) : O.TPromise.as(null)
          }) : O.TPromise.as(null)
        }, e.prototype.isValidTargetWorkspacePath = function(e, t) {
          if (!t) return O.TPromise.wrap(!0);
          if (e.openedWorkspace && e.openedWorkspace.configPath === t) return O.TPromise.wrap(!1);
          if (b.findWindowOnWorkspace(this.windowsMainService.getWindows(), {
              id: this.workspacesService.getWorkspaceId(t),
              configPath: t
            })) {
            var r = {
              title: _.default.nameLong,
              type: "info",
              buttons: [i.localize(15, null)],
              message: i.localize(16, null, n.basename(t)),
              detail: i.localize(17, null),
              noLink: !0
            };
            return this.windowsMainService.showMessageBox(r, this.windowsMainService.getFocusedWindow()).then(function() {
              return !1
            })
          }
          return O.TPromise.wrap(!0)
        }, e.prototype.doSaveAndOpenWorkspace = function(e, t, n) {
          var r = this;
          return (n ? this.workspacesService.saveWorkspace(t, n) : O.TPromise.as(t)).then(function(t) {
            e.focus();
            var n;
            return e.config.extensionDevelopmentPath || (n = r.backupService.registerWorkspaceBackupSync(t, e.config.backupPath)), e.config.folderPath = void 0, e.config.workspace = t, e.config.backupPath = n, {
              workspace: t,
              backupPath: n
            }
          })
        }, e.prototype.pickWorkspaceAndOpen = function(e) {
          var t = this.windowsMainService.getWindowById(e.windowId) || this.windowsMainService.getFocusedWindow() || this.windowsMainService.getLastActiveWindow();
          this.windowsMainService.pickFileAndOpen({
            windowId: t ? t.id : void 0,
            dialogOptions: {
              buttonLabel: T.mnemonicButtonLabel(i.localize(18, null)),
              title: i.localize(19, null),
              filters: I.WORKSPACE_FILTER,
              properties: ["openFile"],
              defaultPath: e.dialogOptions && e.dialogOptions.defaultPath
            },
            forceNewWindow: e.forceNewWindow,
            telemetryEventName: e.telemetryEventName,
            telemetryExtraData: e.telemetryExtraData
          })
        }, e.prototype.promptToSaveUntitledWorkspace = function(e, t) {
          var n, r = this;
          ! function(e) {
            e[e.SAVE = 0] = "SAVE", e[e.DONT_SAVE = 1] = "DONT_SAVE",
              e[e.CANCEL = 2] = "CANCEL"
          }(n || (n = {}));
          var o = {
              label: T.mnemonicButtonLabel(i.localize(20, null)),
              result: n.SAVE
            },
            s = {
              label: T.mnemonicButtonLabel(i.localize(21, null)),
              result: n.DONT_SAVE
            },
            a = {
              label: i.localize(22, null),
              result: n.CANCEL
            },
            c = [];
          P.isWindows ? c.push(o, s, a) : P.isLinux ? c.push(s, a, o) : c.push(o, a, s);
          var u = {
            title: this.environmentService.appNameLong,
            message: i.localize(23, null),
            detail: i.localize(24, null),
            noLink: !0,
            type: "warning",
            buttons: c.map(function(e) {
              return e.label
            }),
            cancelId: c.indexOf(a)
          };
          return P.isLinux && (u.defaultId = 2), this.windowsMainService.showMessageBox(u, e).then(function(o) {
            switch (c[o.button].result) {
              case n.CANCEL:
                return !0;
              case n.DONT_SAVE:
                return r.workspacesService.deleteUntitledWorkspaceSync(t), !1;
              case n.SAVE:
                return r.windowsMainService.showSaveDialog({
                  buttonLabel: T.mnemonicButtonLabel(i.localize(25, null)),
                  title: i.localize(26, null),
                  filters: I.WORKSPACE_FILTER,
                  defaultPath: r.getUntitledWorkspaceSaveDialogDefaultPath(t)
                }, e).then(function(e) {
                  return !e || r.workspacesService.saveWorkspace(t, e).then(function() {
                    return !1
                  }, function() {
                    return !1
                  })
                })
            }
          })
        }, e.prototype.getUntitledWorkspaceSaveDialogDefaultPath = function(e) {
          if (e) {
            if (I.isSingleFolderWorkspaceIdentifier(e)) return n.dirname(e);
            var t = this.workspacesService.resolveWorkspaceSync(e.configPath);
            if (t && t.folders.length > 0)
              for (var r = 0, i = t.folders; r < i.length; r++) {
                var o = i[r];
                if (o.uri.scheme === W.Schemas.file) return n.dirname(o.uri.fsPath)
              }
          }
        }, e
      }()
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
  define(e[136], t([0, 1, 2, 8, 41, 78, 20]), function(e, t, n, s, c, u, l) {
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
          return void 0 === t && (t = c.request), r(this, void 0, n.TPromise, function() {
            var n, r, o, a, c;
            return i(this, function(i) {
              switch (i.label) {
                case 0:
                  return n = this, r = n.proxyUrl, o = n.strictSSL, a = e, (c = e.agent) ? [3, 2] : [4, u.getProxyAgent(e.url, {
                    proxyUrl: r,
                    strictSSL: o
                  })];
                case 1:
                  c = i.sent(), i.label = 2;
                case 2:
                  return a.agent = c, e.strictSSL = o, this.authorization && (e.headers = s.assign(e.headers || {}, {
                    "Proxy-Authorization": this.authorization
                  })), [2, t(e)]
              }
            })
          })
        }, e = o([a(0, l.IConfigurationService)], e)
      }();
      t.RequestService = f
    }), define(e[137], t([0, 1, 41, 136, 8, 12]), function(e, t, r, i, o, s) {
      "use strict";

      function a(e) {
        return s.net.request
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var c = function(e) {
        function t() {
          return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.request = function(t) {
          return e.prototype.request.call(this, t, function(e) {
            return r.request(o.assign({}, e || {}, {
              getRawRequest: a
            }))
          })
        }, t
      }(i.RequestService);
      t.RequestService = c
    }), define(e[138], t([0, 1, 139, 10, 41, 37, 16]), function(e, t, r, i, s, c, u) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return n.requestService = t, n.url = null, n.currentRequest = null, n
        }
        return n(t, e), t.prototype.setFeedURL = function(e) {
          this.url = e
        }, t.prototype.checkForUpdates = function() {
          var e = this;
          if (!this.url) throw new Error("No feed url set.");
          this.currentRequest || (this.emit("checking-for-update"), this.currentRequest = this.requestService.request({
            url: this.url
          }).then(s.asJson).then(function(t) {
            t && t.url && t.version && t.productVersion ? e.emit("update-available", null, u.default.downloadUrl, t.productVersion) : e.emit("update-not-available")
          }).then(null, function(t) {
            i.isString(t) && /^Server returned/.test(t) || (e.emit("update-not-available"), e.emit("error", t))
          }).then(function() {
            return e.currentRequest = null
          }))
        }, t.prototype.quitAndInstall = function() {}, t = o([a(0, c.IRequestService)], t)
      }(r.EventEmitter);
      t.LinuxAutoUpdaterImpl = l
    }), define(e[140], t([0, 1, 5, 25, 90, 139, 23, 54, 10, 2, 41, 37, 16]), function(e, t, r, i, s, c, u, l, f, d, p, h, v) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var g = function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return n.requestService = t, n.url = null, n.currentRequest = null, n.updatePackagePath = null, n
        }
        return n(t, e), Object.defineProperty(t.prototype, "cachePath", {
          get: function() {
            var e = r.join(u.tmpdir(), "vscode-update-" + process.arch);
            return i.mkdirp(e, null).then(function() {
              return e
            })
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.setFeedURL = function(e) {
          this.url = e
        }, t.prototype.checkForUpdates = function() {
          var e = this;
          if (!this.url) throw new Error("No feed url set.");
          this.currentRequest || (this.emit("checking-for-update"), this.currentRequest = this.requestService.request({
            url: this.url
          }).then(p.asJson).then(function(t) {
            return t && t.url && t.version ? (e.emit("update-available"), e.cleanup(t.version).then(function() {
              return e.getUpdatePackagePath(t.version).then(function(n) {
                return i.exists(n).then(function(r) {
                  if (r) return d.TPromise.as(n);
                  var o = t.url,
                    a = t.hash,
                    c = n + ".tmp";
                  return e.requestService.request({
                    url: o
                  }).then(function(e) {
                    return p.download(c, e)
                  }).then(a ? function() {
                    return s.checksum(c, t.hash)
                  } : function() {
                    return null
                  }).then(function() {
                    return i.rename(c, n)
                  }).then(function() {
                    return n
                  })
                })
              }).then(function(n) {
                e.updatePackagePath = n, e.emit("update-downloaded", {}, t.releaseNotes, t.productVersion, new Date, e.url)
              })
            })) : (e.emit("update-not-available"), e.cleanup())
          }).then(null, function(t) {
            f.isString(t) && /^Server returned/.test(t) || (e.emit("update-not-available"), e.emit("error", t))
          }).then(function() {
            return e.currentRequest = null
          }))
        }, t.prototype.getUpdatePackagePath = function(e) {
          return this.cachePath.then(function(t) {
            return r.join(t, "CodeSetup-" + v.default.quality + "-" + e + ".exe")
          })
        }, t.prototype.cleanup = function(e) {
          void 0 === e && (e = null);
          var t = e ? function(t) {
            return !new RegExp(v.default.quality + "-" + e + "\\.exe$").test(t)
          } : function() {
            return !0
          };
          return this.cachePath.then(function(e) {
            return i.readdir(e).then(function(n) {
              return d.Promise.join(n.filter(t).map(function(t) {
                return i.unlink(r.join(e, t)).then(null, function() {
                  return null
                })
              }))
            })
          })
        }, t.prototype.quitAndInstall = function() {
          this.updatePackagePath && l.spawn(this.updatePackagePath, ["/silent", "/mergetasks=runcode,!desktopicon,!quicklaunchicon"], {
            detached: !0,
            stdio: ["ignore", "ignore", "ignore"]
          })
        }, t = o([a(0, h.IRequestService)], t)
      }(c.EventEmitter);
      t.Win32AutoUpdaterImpl = g
    }), define(e[141], t([0, 1, 48, 5, 12, 13, 4, 26, 52, 20, 140, 138, 38, 37, 16, 2, 46, 40, 9, 11]), function(e, t, n, r, i, s, c, u, l, f, d, p, h, v, g, m, y, w, b, S) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var _ = function() {
        function e(e, t, n, r, o, s) {
          var a = this;
          if (this.lifecycleService = t, this.configurationService = n, this.telemetryService = r, this.environmentService = o, this.logService = s, this._state = y.State.Uninitialized, this._availableUpdate = null, this.throttler = new u.Throttler, this._onError = new c.Emitter, this._onCheckForUpdate = new c.Emitter, this._onUpdateAvailable = new c.Emitter, this._onUpdateNotAvailable = new c.Emitter, this._onUpdateReady = new c.Emitter, this._onStateChange = new c.Emitter,
            "win32" === process.platform) this.raw = new d.Win32AutoUpdaterImpl(e);
          else if ("linux" === process.platform) this.raw = new p.LinuxAutoUpdaterImpl(e);
          else {
            if ("darwin" !== process.platform) return;
            this.raw = i.autoUpdater
          }
          if (!this.environmentService.disableUpdates) {
            var l = this.getUpdateChannel(),
              f = this.getUpdateFeedUrl(l);
            if (f) {
              try {
                this.raw.setFeedURL(f)
              } catch (e) {
                return
              }
              this.state = y.State.Idle, this.scheduleCheckForUpdates(3e4).done(null, function(e) {
                return a.logService.error(e)
              })
            }
          }
        }
        return Object.defineProperty(e.prototype, "onError", {
            get: function() {
              return this._onError.event
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "onCheckForUpdate", {
            get: function() {
              return this._onCheckForUpdate.event
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "onUpdateAvailable", {
            get: function() {
              return this._onUpdateAvailable.event
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "onUpdateNotAvailable", {
            get: function() {
              return this._onUpdateNotAvailable.event
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "onUpdateReady", {
            get: function() {
              return this._onUpdateReady.event
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "onStateChange", {
            get: function() {
              return this._onStateChange.event
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "onRawError", {
            get: function() {
              return c.fromNodeEventEmitter(this.raw, "error", function(e, t) {
                return t
              })
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "onRawUpdateNotAvailable", {
            get: function() {
              return c.fromNodeEventEmitter(this.raw, "update-not-available")
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "onRawUpdateAvailable", {
            get: function() {
              return c.filterEvent(c.fromNodeEventEmitter(this.raw, "update-available", function(e, t, n) {
                return {
                  url: t,
                  version: n
                }
              }), function(e) {
                return !!e.url
              })
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "onRawUpdateDownloaded", {
            get: function() {
              return c.fromNodeEventEmitter(this.raw, "update-downloaded", function(e, t, n, r, i) {
                return {
                  releaseNotes: t,
                  version: n,
                  date: r
                }
              })
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "state", {
            get: function() {
              return this._state
            },
            set: function(e) {
              this._state = e, this._onStateChange.fire(e)
            },
            enumerable: !0,
            configurable: !0
          }), Object.defineProperty(e.prototype, "availableUpdate", {
            get: function() {
              return this._availableUpdate
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.scheduleCheckForUpdates = function(e) {
            var t = this;
            return void 0 === e && (e = 36e5), m.TPromise.timeout(e).then(function() {
              return t.checkForUpdates()
            }).then(function(e) {
              return e ? m.TPromise.as(null) : t.scheduleCheckForUpdates(36e5)
            })
          }, e.prototype.checkForUpdates = function(e) {
            var t = this;
            return void 0 === e && (e = !1), this.throttler.queue(function() {
              return t._checkForUpdates(e)
            }).then(null, function(n) {
              return e && t._onError.fire(n), null
            })
          }, e.prototype._checkForUpdates = function(e) {
            var t = this;
            if (this.state !== y.State.Idle) return m.TPromise.as(null);
            this._onCheckForUpdate.fire(), this.state = y.State.CheckingForUpdate;
            var n = [],
              r = new m.TPromise(function(e, r) {
                c.once(t.onRawError)(r, null, n), c.once(t.onRawUpdateNotAvailable)(function() {
                  return e(null)
                }, null, n), c.once(t.onRawUpdateAvailable)(function(t) {
                  var n = t.url,
                    r = t.version;
                  return n && e({
                    url: n,
                    version: r
                  })
                }, null, n), c.once(t.onRawUpdateDownloaded)(function(t) {
                  var n = t.version,
                    r = t.date,
                    i = t.releaseNotes;
                  return e({
                    version: n,
                    date: r,
                    releaseNotes: i
                  })
                }, null, n), t.raw.checkForUpdates()
              }).then(function(n) {
                if (n)
                  if (n.url) {
                    r = {
                      url: n.url,
                      releaseNotes: "",
                      version: n.version,
                      date: new Date
                    };
                    t._availableUpdate = r, t._onUpdateAvailable.fire({
                      url: n.url,
                      version: n.version
                    }), t.state = y.State.UpdateAvailable, t.telemetryService.publicLog("update:available", {
                      explicit: e,
                      version: n.version,
                      currentVersion: g.default.commit
                    })
                  } else {
                    var r = {
                      releaseNotes: n.releaseNotes,
                      version: n.version,
                      date: n.date
                    };
                    t._availableUpdate = r, t._onUpdateReady.fire(r), t.state = y.State.UpdateDownloaded, t.telemetryService.publicLog("update:downloaded", {
                      version: n.version
                    })
                  }
                else t._onUpdateNotAvailable.fire(e), t.state = y.State.Idle, t.telemetryService.publicLog("update:notAvailable", {
                  explicit: e
                });
                return n
              }, function(e) {
                return t.state = y.State.Idle, m.TPromise.wrapError(e)
              });
            return u.always(r, function() {
              return s.dispose(n)
            })
          }, e.prototype.getUpdateChannel = function() {
            return "none" === this.configurationService.getValue("update.channel") ? null : g.default.quality
          }, e.prototype.getUpdateFeedUrl = function(e) {
            if (!e) return null;
            if ("win32" === process.platform && !n.existsSync(r.join(r.dirname(process.execPath), "unins000.exe"))) return null;
            if (!g.default.updateUrl || !g.default.commit) return null;
            var t = this.getUpdatePlatform();
            return g.default.updateUrl + "/api/update/" + t + "/" + e + "/" + g.default.commit
          }, e.prototype.getUpdatePlatform = function() {
            return "linux" === process.platform ? "linux-" + process.arch : "win32" === process.platform && "x64" === process.arch ? "win32-x64" : process.platform
          }, e.prototype.quitAndInstall = function() {
            var e = this;
            return this._availableUpdate ? this._availableUpdate.url ? (i.shell.openExternal(this._availableUpdate.url), m.TPromise.as(null)) : (this.logService.trace("update#quitAndInstall(): before lifecycle quit()"),
              this.lifecycleService.quit(!0).done(function(t) {
                e.logService.trace("update#quitAndInstall(): after lifecycle quit() with veto: " + t), t || ("darwin" === process.platform && (e.logService.trace("update#quitAndInstall(): calling flushStorageData()"), i.session.defaultSession.flushStorageData()), e.logService.trace("update#quitAndInstall(): running raw#quitAndInstall()"), e.raw.quitAndInstall())
              }), m.TPromise.as(null)) : m.TPromise.as(null)
          }, o([l.memoize], e.prototype, "onRawError", null), o([l.memoize], e.prototype, "onRawUpdateNotAvailable", null), o([l.memoize], e.prototype, "onRawUpdateAvailable", null), o([l.memoize], e.prototype, "onRawUpdateDownloaded", null), e = o([a(0, v.IRequestService), a(1, h.ILifecycleService), a(2, f.IConfigurationService), a(3, w.ITelemetryService), a(4, b.IEnvironmentService), a(5, S.ILogService)], e)
      }();
      t.UpdateService = _
    }),
    define(e[104], t([0, 1, 12, 3, 135, 22, 117, 121, 38, 124, 97, 46, 111, 141, 89, 60, 94, 66, 6, 49, 50, 11, 28, 9, 20, 43, 116, 40, 108, 106, 107, 109, 31, 16, 44, 119, 13, 2, 30, 36, 10, 68, 64, 7, 129, 19, 5, 25, 55]), function(e, t, n, r, i, s, c, u, l, f, d, p, h, v, g, m, y, w, b, S, _, k, C, E, P, O, I, M, T, W, x, D, L, A, R, F, N, j, U, z, B, q, V, H, K, G, J, $, Q) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var X = function() {
        function t(e, t, n, r, i, o, s, a, c) {
          this.mainIpcServer = e, this.userEnv = t, this.instantiationService = n, this.logService = r, this.environmentService = i, this.lifecycleService = o, this.stateService = a, this.historyMainService = c, this.toDispose = [e, s], this.registerListeners()
        }
        return t.prototype.registerListeners = function() {
          var e = this;
          process.on("uncaughtException", function(t) {
            if (t) {
              var n = {
                message: t.message,
                stack: t.stack
              };
              e.windowsMainService && e.windowsMainService.sendToFocused("vscode:reportError", JSON.stringify(n))
            }
            e.logService.error("[uncaught exception in main]: " + t), t.stack && e.logService.error(t.stack)
          }), n.app.on("will-quit", function() {
            e.logService.trace("App#will-quit: disposing resources"), e.dispose()
          }), n.app.on("accessibility-support-changed", function(t, n) {
            e.windowsMainService && e.windowsMainService.sendToAll("vscode:accessibilitySupportChanged", n)
          }), n.app.on("activate", function(t, n) {
            e.logService.trace("App#activate"), !n && e.windowsMainService && e.windowsMainService.openNewWindow(s.OpenContext.DOCK)
          });
          var t = function(t) {
            return !t || H.default.parse(t.toLowerCase()).toString().startsWith(H.default.file(e.environmentService.appRoot.toLowerCase()).toString())
          };
          n.app.on("web-contents-created", function(n, r) {
            r.on("will-attach-webview", function(n, r, i) {
              delete r.preload, r.nodeIntegration = !1, t(i.src) && t(r.preloadURL) || (e.logService.error("webContents#web-contents-created: Prevented webview attach"), n.preventDefault())
            }), r.on("will-navigate", function(t) {
              e.logService.error("webContents#will-navigate: Prevented webcontent navigation"), t.preventDefault()
            })
          });
          var r = [],
            i = null;
          n.app.on("open-file", function(t, n) {
            e.logService.trace("App#open-file: ", n),
              t.preventDefault(), r.push(n), null !== i && (clearTimeout(i), i = null), i = setTimeout(function() {
                e.windowsMainService && (e.windowsMainService.open({
                  context: s.OpenContext.DOCK,
                  cli: e.environmentService.args,
                  pathsToOpen: r,
                  preferNewWindow: !0
                }), r = [], i = null)
              }, 100)
          }), n.app.on("new-window-for-tab", function() {
            e.windowsMainService.openNewWindow(s.OpenContext.DESKTOP)
          }), n.ipcMain.on("vscode:exit", function(t, n) {
            e.logService.trace("IPC#vscode:exit", n), e.dispose(), e.lifecycleService.kill(n)
          }), n.ipcMain.on("vscode:fetchShellEnv", function(t, r) {
            var i = n.BrowserWindow.fromId(r).webContents;
            d.getShellEnvironment().then(function(e) {
              i.isDestroyed() || i.send("vscode:acceptShellEnv", e)
            }, function(t) {
              i.isDestroyed() || i.send("vscode:acceptShellEnv", {}), e.logService.error("Error fetching shell env", t)
            })
          }), n.ipcMain.on("vscode:broadcast", function(t, n, r) {
            e.windowsMainService && r.channel && !B.isUndefinedOrNull(r.payload) && (e.logService.trace("IPC#vscode:broadcast", r.channel, r.payload), e.onBroadcast(r.channel, r.payload),
              e.windowsMainService.sendToAll("vscode:broadcast", r, [n]))
          }), V.KeyboardLayoutMonitor.INSTANCE.onDidChangeKeyboardLayout(function() {
            e.windowsMainService && e.windowsMainService.sendToAll("vscode:keyboardLayoutChanged", !1)
          })
        }, t.prototype.onBroadcast = function(e, t) {
          if ("vscode:changeColorTheme" === e && "string" == typeof t) {
            var n = JSON.parse(t);
            this.stateService.setItem(q.CodeWindow.themeStorageKey, n.id), this.stateService.setItem(q.CodeWindow.themeBackgroundStorageKey, n.background)
          }
        }, t.prototype.startup = function() {
          var e = this;
          return this.logService.debug("Starting VS Code"), this.logService.debug("from: " + this.environmentService.appRoot), this.logService.debug("args:", this.environmentService.args), r.isWindows && A.default.win32AppUserModelId && n.app.setAppUserModelId(A.default.win32AppUserModelId), this.electronIpcServer = new g.Server, this.logService.trace("Resolving machine identifier..."), this.resolveMachineId().then(function(t) {
            e.logService.trace("Resolved machine identifier: " + t),
              e.sharedProcess = new y.SharedProcess(e.environmentService, t, e.userEnv), e.toDispose.push(e.sharedProcess), e.sharedProcessClient = e.sharedProcess.whenReady().then(function() {
                return m.connect(e.environmentService.sharedIPCHandle, "main")
              });
            var n = e.initServices(t),
              r = n.createInstance(F.ProxyAuthHandler);
            e.toDispose.push(r), n.invokeFunction(function(t) {
              return e.openFirstWindow(t)
            }), n.invokeFunction(function(t) {
              return e.afterWindowOpen(t)
            })
          })
        }, t.prototype.resolveMachineId = function() {
          var e = this,
            n = this.stateService.getItem(t.MACHINE_ID_KEY);
          return n ? j.TPromise.wrap(n) : Q.getMachineId().then(function(n) {
            return e.stateService.setItem(t.MACHINE_ID_KEY, n), n
          })
        }, t.prototype.initServices = function(e) {
          var t = new S.ServiceCollection;
          if (t.set(p.IUpdateService, new _.SyncDescriptor(v.UpdateService)), t.set(U.IWindowsMainService, new _.SyncDescriptor(i.WindowsManager, e)), t.set(s.IWindowsService, new _.SyncDescriptor(u.WindowsService, this.sharedProcess)), t.set(w.ILaunchService, new _.SyncDescriptor(w.LaunchService)),
            this.environmentService.isBuilt && !this.environmentService.isExtensionDevelopment && !this.environmentService.args["disable-telemetry"] && A.default.enableTelemetry) {
            var n = L.getDelayedChannel(this.sharedProcessClient.then(function(e) {
                return e.getChannel("telemetryAppender")
              })),
              r = {
                appender: new W.TelemetryAppenderClient(n),
                commonProperties: D.resolveCommonProperties(A.default.commit, R.default.version, e, this.environmentService.installSourcePath),
                piiPaths: [this.environmentService.appRoot, this.environmentService.extensionsPath]
              };
            t.set(M.ITelemetryService, new _.SyncDescriptor(x.TelemetryService, r))
          } else t.set(M.ITelemetryService, T.NullTelemetryService);
          return this.instantiationService.createChild(t)
        }, t.prototype.openFirstWindow = function(e) {
          var t = this,
            n = e.get(b.IInstantiationService);
          this.windowsMainService = e.get(U.IWindowsMainService), this.windowsMainService.onWindowsCountChanged(function(e) {
            r.isMacintosh || 0 !== e.newCount || t.sharedProcess.dispose()
          });
          var i = e.get(w.ILaunchService),
            o = new w.LaunchChannel(i);
          this.mainIpcServer.registerChannel("launch", o);
          var a = e.get(p.IUpdateService),
            u = new h.UpdateChannel(a);
          this.electronIpcServer.registerChannel("update", u);
          var l = e.get(O.IURLService),
            f = n.createInstance(I.URLChannel, l);
          this.electronIpcServer.registerChannel("url", f);
          var d = e.get(G.IWorkspacesMainService),
            v = n.createInstance(K.WorkspacesChannel, d);
          this.electronIpcServer.registerChannel("workspaces", v);
          var g = e.get(s.IWindowsService),
            m = new c.WindowsChannel(g);
          this.electronIpcServer.registerChannel("windows", m), this.sharedProcessClient.done(function(e) {
            return e.registerChannel("windows", m)
          }), this.lifecycleService.ready(), this.windowsMainService.ready(this.userEnv);
          var y = this.environmentService.args,
            S = process.env.VSCODE_CLI ? s.OpenContext.CLI : s.OpenContext.DESKTOP;
          y["new-window"] && 0 === y._.length ? this.windowsMainService.open({
            context: S,
            cli: y,
            forceNewWindow: !0,
            forceEmpty: !0,
            initialStartup: !0
          }) : !global.macOpenFiles || !global.macOpenFiles.length || y._ && y._.length ? this.windowsMainService.open({
            context: S,
            cli: y,
            forceNewWindow: y["new-window"] || !y._.length && y["unity-launch"],
            diffMode: y.diff,
            initialStartup: !0
          }) : this.windowsMainService.open({
            context: s.OpenContext.DOCK,
            cli: y,
            pathsToOpen: global.macOpenFiles,
            initialStartup: !0
          })
        }, t.prototype.afterWindowOpen = function(i) {
          var o = this,
            s = i.get(b.IInstantiationService),
            a = i.get(U.IWindowsMainService),
            c = null;
          if (r.isWindows) {
            try {
              var u = e.__$__nodeRequire("windows-mutex").Mutex;
              c = new u(A.default.win32MutexName), this.toDispose.push({
                dispose: function() {
                  return c.release()
                }
              })
            } catch (e) {
              this.environmentService.isBuilt || a.showMessageBox({
                title: A.default.nameLong,
                type: "warning",
                message: "Failed to load windows-mutex!",
                detail: e.toString(),
                noLink: !0
              })
            }
            try {
              e.__$__nodeRequire("windows-foreground-love")
            } catch (e) {
              this.environmentService.isBuilt || a.showMessageBox({
                title: A.default.nameLong,
                type: "warning",
                message: "Failed to load windows-foreground-love!",
                detail: e.toString(),
                noLink: !0
              })
            }
          }
          if (s.createInstance(f.CodeMenu), this.historyMainService.updateWindowsJumpList(),
            this.historyMainService.onRecentlyOpenedChange(function() {
              return o.historyMainService.updateWindowsJumpList()
            }), this.sharedProcess.spawn(), r.isMacintosh && !this.stateService.getItem(t.APP_ICON_REFRESH_KEY)) {
            this.stateService.setItem(t.APP_ICON_REFRESH_KEY, !0);
            var l = J.dirname(J.dirname(J.dirname(n.app.getPath("exe")))),
              d = J.join(l, "Contents", "Info.plist");
            $.touch(l).done(null, function(e) {}), $.touch(d).done(null, function(e) {})
          }
        }, t.prototype.dispose = function() {
          this.toDispose = N.dispose(this.toDispose)
        }, t.APP_ICON_REFRESH_KEY = "macOSAppIconRefresh3", t.MACHINE_ID_KEY = "telemetry.machineId", t = o([a(2, b.IInstantiationService), a(3, k.ILogService), a(4, E.IEnvironmentService), a(5, l.ILifecycleService), a(6, P.IConfigurationService), a(7, C.IStateService), a(8, z.IHistoryMainService)], t)
      }();
      t.CodeApplication = X
    });
  i = this && this.__generator || function(e, t) {
    function n(n) {
      return function(s) {
        return function(n) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; a;) try {
            if (r = 1,
              i && (o = i[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(i, n[1])).done) return o;
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
  define(e[145], t([0, 1, 12, 8, 3, 16, 5, 61, 25, 62, 38, 60, 2, 66, 83, 49, 50, 11, 103, 28, 47, 126, 9, 93, 20, 100, 37, 137, 43, 113, 48, 104, 127, 36, 131, 19, 15, 33, 88, 91, 87]), function(e, t, o, s, a, c, u, l, f, d, p, h, v, g, m, y, w, b, S, _, k, C, E, P, O, I, M, T, W, x, D, L, A, R, F, N, j, U, z, B, q) {
    "use strict";

    function V(e, t) {
      var n = new y.ServiceCollection,
        o = new P.EnvironmentService(e, process.execPath),
        s = new b.ConsoleLogMainService(o),
        a = new b.MultiplexLogService([s, t]);
      return process.once("exit", function() {
          return a.dispose()
        }), setTimeout(function() {
          return function(e) {
            return r(this, void 0, v.TPromise, function() {
              var t, n, r, o, s, a;
              return i(this, function(i) {
                switch (i.label) {
                  case 0:
                    return t = u.basename(e.logsPath), n = u.dirname(e.logsPath), [4, f.readdir(n)];
                  case 1:
                    return r = i.sent(), o = r.filter(function(e) {
                      return /^\d{8}T\d{6}$/.test(e)
                    }), s = o.sort().filter(function(e, n) {
                      return e !== t
                    }), a = s.slice(0, Math.max(0, s.length - 9)), [4, v.TPromise.join(a.map(function(e) {
                      return f.rimraf(u.join(n, e))
                    }))];
                  case 2:
                    return i.sent(), [2]
                }
              })
            })
          }(o).then(null, function(e) {
            return console.error(e)
          })
        }, 1e4),
        n.set(E.IEnvironmentService, o), n.set(b.ILogService, a), n.set(N.IWorkspacesMainService, new w.SyncDescriptor(F.WorkspacesMainService)), n.set(R.IHistoryMainService, new w.SyncDescriptor(A.HistoryMainService)), n.set(p.ILifecycleService, new w.SyncDescriptor(p.LifecycleService)), n.set(_.IStateService, new w.SyncDescriptor(S.StateService)), n.set(O.IConfigurationService, new w.SyncDescriptor(I.ConfigurationService)), n.set(M.IRequestService, new w.SyncDescriptor(T.RequestService)), n.set(W.IURLService, new w.SyncDescriptor(x.URLService, e["open-url"] ? e._urls : [])), n.set(k.IBackupMainService, new w.SyncDescriptor(C.BackupMainService)), new m.InstantiationService(n, !0)
    }

    function H(t) {
      function n(t) {
        return h.serve(i.mainIPCHandle).then(function(e) {
          if (i.args.status) throw r.warn("Warning: The --status argument can only be used if Code is already running. Please run it again after Code has started."), new $("Terminating...");
          if (i.args["upload-logs"]) throw r.warn("Warning: The --upload-logs argument can only be used if Code is already running. Please run it again after Code has started."), new $("Terminating...");
          return a.isMacintosh && o.app.dock.show(), process.env.VSCODE_PID = String(process.pid), e
        }, function(u) {
          return "EADDRINUSE" !== u.code ? v.TPromise.wrapError(u) : (a.isMacintosh && o.app.dock.hide(), h.connect(i.mainIPCHandle, "main").then(function(t) {
            if (i.extensionTestsPath && !i.debugExtensionHost.break) {
              var n = "Running extension tests from the command line is currently only supported if no other instance of Code is running.";
              return r.error(n), t.dispose(), v.TPromise.wrapError(new Error(n))
            }
            var o;
            i.wait || i.status || i.args["upload-logs"] || (o = setTimeout(function() {
              K(j.localize(0, null, c.default.nameShort), j.localize(1, null))
            }, 1e4));
            var u = t.getChannel("launch"),
              l = new g.LaunchChannelClient(u);
            return i.args.status ? l.getMainProcessInfo().then(function(e) {
              return B.printDiagnostics(e).then(function() {
                return v.TPromise.wrapError(new $)
              })
            }) : i.args["upload-logs"] ? new Promise(function(t, n) {
              e(["vs/code/electron-main/logUploader"], t, n)
            }).then(function(e) {
              return e.uploadLogs(u, s)
            }).then(function() {
              return v.TPromise.wrapError(new $)
            }) : (r.trace("Sending env to running instance..."), function(t) {
              var n = v.TPromise.wrap(void 0);
              return a.isWindows && (n = t.getMainProcessId().then(function(t) {
                r.trace("Sending some foreground love to the running instance:", t);
                try {
                  (0, e.__$__nodeRequire("windows-foreground-love").allowSetForegroundWindow)(t)
                } catch (e) {}
              })), n
            }(l).then(function() {
              return l.start(i.args, process.env)
            }).then(function() {
              return t.dispose()
            }).then(function() {
              return o && clearTimeout(o), v.TPromise.wrapError(new $("Sent env to running instance. Terminating..."))
            }))
          }, function(e) {
            if (!t || a.isWindows || "ECONNREFUSED" !== e.code) return "EPERM" === e.code && K(j.localize(2, null, c.default.nameShort), j.localize(3, null)), v.TPromise.wrapError(e);
            try {
              D.unlinkSync(i.mainIPCHandle)
            } catch (e) {
              return r.warn("Could not delete obsolete instance handle", e), v.TPromise.wrapError(e)
            }
            return n(!1)
          }))
        })
      }
      var r = t.get(b.ILogService),
        i = t.get(E.IEnvironmentService),
        s = t.get(M.IRequestService);
      return n(!0)
    }

    function K(e, t) {
      o.dialog.showMessageBox({
        title: c.default.nameLong,
        type: "warning",
        buttons: [U.mnemonicButtonLabel(j.localize(4, null))],
        message: e,
        detail: t,
        noLink: !0
      })
    }

    function G(e, t) {
      var n = e.get(b.ILogService),
        r = e.get(p.ILifecycleService),
        i = 0;
      t && (t.isExpected ? t.message && n.trace(t.message) : (i = 1, t.stack ? n.error(t.stack) : n.error("Startup error: " + t.toString()))), r.kill(i)
    }

    function J() {
      var e;
      try {
        e = l.parseMainProcessArgv(process.argv), e = d.validatePaths(e)
      } catch (e) {
        return console.error(e.message), void o.app.exit(1)
      }
      var t = new q.BufferLogService,
        n = V(e, t);
      return n.invokeFunction(function(e) {
        var r = e.get(E.IEnvironmentService),
          i = {
            VSCODE_IPC_HOOK: r.mainIPCHandle,
            VSCODE_NLS_CONFIG: process.env.VSCODE_NLS_CONFIG,
            VSCODE_LOGS: process.env.VSCODE_LOGS
          };
        return s.assign(process.env, i), n.invokeFunction(function(e) {
          return function(e) {
            var t = [e.appSettingsHome, e.extensionsPath, e.nodeCachedDataDir, e.logsPath];
            return v.TPromise.join(t.map(function(e) {
              return e && f.mkdirp(e)
            }))
          }(e.get(E.IEnvironmentService))
        }).then(function() {
          return n.invokeFunction(H)
        }).then(function(e) {
          return t.logger = z.createSpdLogService("main", r), n.createInstance(L.CodeApplication, e, i).startup()
        })
      }).done(null, function(e) {
        return n.invokeFunction(G, e)
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var $ = function(e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.isExpected = !0, t
      }
      return n(t, e), t
    }(Error);
    J()
  })
}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\code\electron-main\main.js.map