/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-html version: 1.3.2(5ec45016d73d25ccf42bc1626de18d4329aabe34)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-html/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
! function(e) {
  if ("object" == typeof module && "object" == typeof module.exports) {
    var t = e(require, exports);
    void 0 !== t && (module.exports = t)
  } else "function" == typeof define && define.amd && define("vscode-nls/vscode-nls", ["require", "exports"], e)
}(function(e, t) {
  function n(e, t) {
    var n;
    return n = 0 === t.length ? e : e.replace(/\{(\d+)\}/g, function(e, n) {
      var i = n[0];
      return "undefined" != typeof t[i] ? t[i] : e
    })
  }

  function i(e, t) {
    for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
    return n(t, i)
  }

  function r(e) {
    return i
  }

  function a(e) {
    return r
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.loadMessageBundle = r, t.config = a
}), define("vscode-nls", ["vscode-nls/vscode-nls"], function(e) {
    return e
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/parser/htmlScanner", ["require", "exports", "vscode-nls"], e)
  }(function(e, t) {
    function n(e, t, n) {
      function r() {
        return C.advanceIfRegExp(/^[_:\w][_:\w-.\d]*/).toLowerCase()
      }

      function m() {
        return C.advanceIfRegExp(/^[^\s"'>\/=\x00-\x0F\x7F\x80-\x9F]*/).toLowerCase()
      }

      function v(e, t, n) {
        return O = t, E = e, T = n, t
      }

      function b() {
        var e = C.pos(),
          t = A,
          n = y();
        return n !== i.EOS && e === C.pos() ? (console.log("Scanner.scan has not advanced at offset " + e + ", state before: " + t + " after: " + A), C.advance(1), v(e, i.Unknown)) : n
      }

      function y() {
        var e = C.pos();
        if (C.eos()) return v(e, i.EOS);
        var t;
        switch (A) {
          case o.WithinComment:
            return C.advanceIfChars([c, c, h]) ? (A = o.WithinContent, v(e, i.EndCommentTag)) : (C.advanceUntilChars([c, c, h]), v(e, i.Comment));
          case o.WithinDoctype:
            return C.advanceIfChar(h) ? (A = o.WithinContent, v(e, i.EndDoctypeTag)) : (C.advanceUntilChar(h), v(e, i.Doctype));
          case o.WithinContent:
            if (C.advanceIfChar(u)) {
              if (!C.eos() && C.peekChar() === l) {
                if (C.advanceIfChars([l, c, c])) return A = o.WithinComment, v(e, i.StartCommentTag);
                if (C.advanceIfRegExp(/^!doctype/i)) return A = o.WithinDoctype, v(e, i.StartDoctypeTag)
              }
              return C.advanceIfChar(d) ? (A = o.AfterOpeningEndTag, v(e, i.EndTagOpen)) : (A = o.AfterOpeningStartTag, v(e, i.StartTagOpen))
            }
            return C.advanceUntilChar(u), v(e, i.Content);
          case o.AfterOpeningEndTag:
            var n = r();
            return n.length > 0 ? (A = o.WithinEndTag, v(e, i.EndTag)) : C.skipWhitespace() ? v(e, i.Whitespace, a("error.unexpectedWhitespace", "Tag name must directly follow the open bracket.")) : (A = o.WithinEndTag, C.advanceUntilChar(h), e < C.pos() ? v(e, i.Unknown, a("error.endTagNameExpected", "End tag name expected.")) : y());
          case o.WithinEndTag:
            if (C.skipWhitespace()) return v(e, i.Whitespace);
            if (C.advanceIfChar(h)) return A = o.WithinContent, v(e, i.EndTagClose);
            t = a("error.tagNameExpected", "Closing bracket expected.");
            break;
          case o.AfterOpeningStartTag:
            return x = r(), S = null, k = null, x.length > 0 ? (_ = !1, A = o.WithinTag, v(e, i.StartTag)) : C.skipWhitespace() ? v(e, i.Whitespace, a("error.unexpectedWhitespace", "Tag name must directly follow the open bracket.")) : (A = o.WithinTag, C.advanceUntilChar(h), e < C.pos() ? v(e, i.Unknown, a("error.startTagNameExpected", "Start tag name expected.")) : y());
          case o.WithinTag:
            return C.skipWhitespace() ? (_ = !0, v(e, i.Whitespace)) : _ && (k = m(), k.length > 0) ? (A = o.AfterAttributeName, _ = !1, v(e, i.AttributeName)) : C.advanceIfChars([d, h]) ? (A = o.WithinContent, v(e, i.StartTagSelfClose)) : C.advanceIfChar(h) ? (A = "script" === x ? S && w[S] ? o.WithinContent : o.WithinScriptContent : "style" === x ? o.WithinStyleContent : o.WithinContent, v(e, i.StartTagClose)) : (C.advance(1), v(e, i.Unknown, a("error.unexpectedCharacterInTag", "Unexpected character in tag.")));
          case o.AfterAttributeName:
            return C.skipWhitespace() ? (_ = !0, v(e, i.Whitespace)) : C.advanceIfChar(p) ? (A = o.BeforeAttributeValue, v(e, i.DelimiterAssign)) : (A = o.WithinTag, y());
          case o.BeforeAttributeValue:
            if (C.skipWhitespace()) return v(e, i.Whitespace);
            var s = C.advanceIfRegExp(/^[^\s"'`=<>\/]+/);
            if (s.length > 0) return "type" === k && (S = s), A = o.WithinTag, _ = !1, v(e, i.AttributeValue);
            var b = C.peekChar();
            return b === g || b === f ? (C.advance(1), C.advanceUntilChar(b) && C.advance(1), "type" === k && (S = C.getSource().substring(e + 1, C.pos() - 1)), A = o.WithinTag, _ = !1, v(e, i.AttributeValue)) : (A = o.WithinTag, _ = !1, y());
          case o.WithinScriptContent:
            for (var T = 1; !C.eos();) {
              var E = C.advanceIfRegExp(/<!--|-->|<\/?script\s*\/?>?/i);
              if (0 === E.length) return C.goToEnd(), v(e, i.Script);
              if ("<!--" === E) 1 === T && (T = 2);
              else if ("-->" === E) T = 1;
              else if ("/" !== E[1]) 2 === T && (T = 3);
              else {
                if (3 !== T) {
                  C.goBack(E.length);
                  break
                }
                T = 2
              }
            }
            return A = o.WithinContent, e < C.pos() ? v(e, i.Script) : y();
          case o.WithinStyleContent:
            return C.advanceUntilRegExp(/<\/style/i), A = o.WithinContent, e < C.pos() ? v(e, i.Styles) : y()
        }
        return C.advance(1), A = o.WithinContent, v(e, i.Unknown, t)
      }
      void 0 === t && (t = 0), void 0 === n && (n = o.WithinContent);
      var T, _, x, k, S, C = new s(e, t),
        A = n,
        E = 0,
        O = void 0;
      return {
        scan: b,
        getTokenType: function() {
          return O
        },
        getTokenOffset: function() {
          return E
        },
        getTokenLength: function() {
          return C.pos() - E
        },
        getTokenEnd: function() {
          return C.pos()
        },
        getTokenText: function() {
          return C.getSource().substring(E, C.pos())
        },
        getScannerState: function() {
          return A
        },
        getTokenError: function() {
          return T
        }
      }
    }
    var i, r = e("vscode-nls"),
      a = r.loadMessageBundle();
    ! function(e) {
      e[e.StartCommentTag = 0] = "StartCommentTag", e[e.Comment = 1] = "Comment", e[e.EndCommentTag = 2] = "EndCommentTag", e[e.StartTagOpen = 3] = "StartTagOpen", e[e.StartTagClose = 4] = "StartTagClose", e[e.StartTagSelfClose = 5] = "StartTagSelfClose", e[e.StartTag = 6] = "StartTag", e[e.EndTagOpen = 7] = "EndTagOpen", e[e.EndTagClose = 8] = "EndTagClose", e[e.EndTag = 9] = "EndTag", e[e.DelimiterAssign = 10] = "DelimiterAssign", e[e.AttributeName = 11] = "AttributeName", e[e.AttributeValue = 12] = "AttributeValue", e[e.StartDoctypeTag = 13] = "StartDoctypeTag", e[e.Doctype = 14] = "Doctype", e[e.EndDoctypeTag = 15] = "EndDoctypeTag", e[e.Content = 16] = "Content", e[e.Whitespace = 17] = "Whitespace", e[e.Unknown = 18] = "Unknown", e[e.Script = 19] = "Script", e[e.Styles = 20] = "Styles", e[e.EOS = 21] = "EOS"
    }(i = t.TokenType || (t.TokenType = {}));
    var o, s = function() {
        function e(e, t) {
          this.source = e, this.len = e.length, this.position = t
        }
        return e.prototype.eos = function() {
          return this.len <= this.position
        }, e.prototype.getSource = function() {
          return this.source
        }, e.prototype.pos = function() {
          return this.position
        }, e.prototype.goBackTo = function(e) {
          this.position = e
        }, e.prototype.goBack = function(e) {
          this.position -= e
        }, e.prototype.advance = function(e) {
          this.position += e
        }, e.prototype.goToEnd = function() {
          this.position = this.source.length
        }, e.prototype.nextChar = function() {
          return this.source.charCodeAt(this.position++) || 0
        }, e.prototype.peekChar = function(e) {
          return void 0 === e && (e = 0), this.source.charCodeAt(this.position + e) || 0
        }, e.prototype.advanceIfChar = function(e) {
          return e === this.source.charCodeAt(this.position) && (this.position++, !0)
        }, e.prototype.advanceIfChars = function(e) {
          var t;
          if (this.position + e.length > this.source.length) return !1;
          for (t = 0; t < e.length; t++)
            if (this.source.charCodeAt(this.position + t) !== e[t]) return !1;
          return this.advance(t), !0
        }, e.prototype.advanceIfRegExp = function(e) {
          var t = this.source.substr(this.position),
            n = t.match(e);
          return n ? (this.position = this.position + n.index + n[0].length, n[0]) : ""
        }, e.prototype.advanceUntilRegExp = function(e) {
          var t = this.source.substr(this.position),
            n = t.match(e);
          return n ? (this.position = this.position + n.index, n[0]) : (this.goToEnd(), "")
        }, e.prototype.advanceUntilChar = function(e) {
          for (; this.position < this.source.length;) {
            if (this.source.charCodeAt(this.position) === e) return !0;
            this.advance(1)
          }
          return !1
        }, e.prototype.advanceUntilChars = function(e) {
          for (; this.position + e.length <= this.source.length;) {
            for (var t = 0; t < e.length && this.source.charCodeAt(this.position + t) === e[t]; t++);
            if (t === e.length) return !0;
            this.advance(1)
          }
          return this.goToEnd(), !1
        }, e.prototype.skipWhitespace = function() {
          var e = this.advanceWhileChar(function(e) {
            return e === y || e === T || e === m || e === b || e === v
          });
          return e > 0
        }, e.prototype.advanceWhileChar = function(e) {
          for (var t = this.position; this.position < this.len && e(this.source.charCodeAt(this.position));) this.position++;
          return this.position - t
        }, e
      }(),
      l = "!".charCodeAt(0),
      c = "-".charCodeAt(0),
      u = "<".charCodeAt(0),
      h = ">".charCodeAt(0),
      d = "/".charCodeAt(0),
      p = "=".charCodeAt(0),
      f = '"'.charCodeAt(0),
      g = "'".charCodeAt(0),
      m = "\n".charCodeAt(0),
      v = "\r".charCodeAt(0),
      b = "\f".charCodeAt(0),
      y = " ".charCodeAt(0),
      T = "\t".charCodeAt(0);
    ! function(e) {
      e[e.WithinContent = 0] = "WithinContent", e[e.AfterOpeningStartTag = 1] = "AfterOpeningStartTag", e[e.AfterOpeningEndTag = 2] = "AfterOpeningEndTag", e[e.WithinDoctype = 3] = "WithinDoctype", e[e.WithinTag = 4] = "WithinTag", e[e.WithinEndTag = 5] = "WithinEndTag", e[e.WithinComment = 6] = "WithinComment", e[e.WithinScriptContent = 7] = "WithinScriptContent", e[e.WithinStyleContent = 8] = "WithinStyleContent", e[e.AfterAttributeName = 9] = "AfterAttributeName", e[e.BeforeAttributeValue = 10] = "BeforeAttributeValue"
    }(o = t.ScannerState || (t.ScannerState = {}));
    var w = {
      "text/x-handlebars-template": !0
    };
    t.createScanner = n
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/utils/arrays", ["require", "exports"], e)
  }(function(e, t) {
    function n(e, t) {
      var n = 0,
        i = e.length;
      if (0 === i) return 0;
      for (; n < i;) {
        var r = Math.floor((n + i) / 2);
        t(e[r]) ? i = r : n = r + 1
      }
      return n
    }

    function i(e, t, n) {
      for (var i = 0, r = e.length - 1; i <= r;) {
        var a = (i + r) / 2 | 0,
          o = n(e[a], t);
        if (o < 0) i = a + 1;
        else {
          if (!(o > 0)) return a;
          r = a - 1
        }
      }
      return -(i + 1)
    }
    t.findFirst = n, t.binarySearch = i
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/utils/strings", ["require", "exports"], e)
  }(function(e, t) {
    function n(e, t) {
      if (e.length < t.length) return !1;
      for (var n = 0; n < t.length; n++)
        if (e[n] !== t[n]) return !1;
      return !0
    }

    function i(e, t) {
      var n = e.length - t.length;
      return n > 0 ? e.lastIndexOf(t) === n : 0 === n && e === t
    }

    function r(e, t) {
      var n, i = Math.min(e.length, t.length);
      for (n = 0; n < i; n++)
        if (e.charCodeAt(n) !== t.charCodeAt(n)) return n;
      return i
    }

    function a(e, t) {
      for (var n = ""; t > 0;) 1 === (1 & t) && (n += e), e += e, t >>>= 1;
      return n
    }
    t.startsWith = n, t.endsWith = i, t.commonPrefixLength = r, t.repeat = a
  }),
  /*--------------------------------------------------------------------------------------------
   *  This file is based on or incorporates material from the projects listed below (Third Party IP).
   *  The original copyright notice and the license under which Microsoft received such Third Party IP,
   *  are set forth below. Such licenses and notices are provided for informational purposes only.
   *  Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product.
   *  Microsoft reserves all other rights not expressly granted under this agreement, whether by implication,
   *  estoppel or otherwise.
   *--------------------------------------------------------------------------------------------*/
  /*---------------------------------------------------------------------------------------------
   *  Copyright © 2015 W3C® (MIT, ERCIM, Keio, Beihang). This software or document includes includes material copied
   *  from or derived from HTML 5.1 W3C Working Draft (http://www.w3.org/TR/2015/WD-html51-20151008/.)"
   *--------------------------------------------------------------------------------------------*/
  /*---------------------------------------------------------------------------------------------
   *  Ionic Main Site (https://github.com/driftyco/ionic-site).
   *  Copyright Drifty Co. http://drifty.com/.
   *
   *  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file
   *  except in compliance with the License. You may obtain a copy of the License at
   *  http://www.apache.org/licenses/LICENSE-2.0
   *
   *  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   *  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
   *  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
   *  MERCHANTABLITY OR NON-INFRINGEMENT.
   *
   *  See the Apache Version 2.0 License for specific language governing permissions
   *  and limitations under the License.
   *--------------------------------------------------------------------------------------------*/
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/parser/htmlTags", ["require", "exports", "../utils/strings", "../utils/arrays", "vscode-nls"], e)
  }(function(e, t) {
    function n(e) {
      return e && u.binarySearch(t.EMPTY_ELEMENTS, e.toLowerCase(), function(e, t) {
        return e.localeCompare(t)
      }) >= 0
    }

    function i() {
      var e = ["aria-activedescendant", "aria-atomic:b", "aria-autocomplete:autocomplete", "aria-busy:b", "aria-checked:tristate", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current:current", "aria-describedat", "aria-describedby", "aria-disabled:b", "aria-dropeffect:dropeffect", "aria-errormessage", "aria-expanded:u", "aria-flowto", "aria-grabbed:u", "aria-haspopup:b", "aria-hidden:b", "aria-invalid:invalid", "aria-kbdshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live:live", "aria-modal:b", "aria-multiline:b", "aria-multiselectable:b", "aria-orientation:orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed:tristate", "aria-readonly:b", "aria-relevant:relevant", "aria-required:b", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected:u", "aria-setsize", "aria-sort:sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "accesskey", "class", "contenteditable:b", "contextmenu", "dir:d", "draggable:b", "dropzone", "hidden:v", "id", "itemid", "itemprop", "itemref", "itemscope:v", "itemtype", "lang", "role:roles", "spellcheck:b", "style", "tabindex", "title", "translate:y"],
        n = ["onabort", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformchange", "onforminput", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onreadystatechange", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting"],
        i = {
          b: ["true", "false"],
          u: ["true", "false", "undefined"],
          o: ["on", "off"],
          y: ["yes", "no"],
          w: ["soft", "hard"],
          d: ["ltr", "rtl", "auto"],
          m: ["GET", "POST", "dialog"],
          fm: ["GET", "POST"],
          s: ["row", "col", "rowgroup", "colgroup"],
          t: ["hidden", "text", "search", "tel", "url", "email", "password", "datetime", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"],
          im: ["verbatim", "latin", "latin-name", "latin-prose", "full-width-latin", "kana", "kana-name", "katakana", "numeric", "tel", "email", "url"],
          bt: ["button", "submit", "reset", "menu"],
          lt: ["1", "a", "A", "i", "I"],
          mt: ["context", "toolbar"],
          mit: ["command", "checkbox", "radio"],
          et: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
          tk: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
          pl: ["none", "metadata", "auto"],
          sh: ["circle", "default", "poly", "rect"],
          xo: ["anonymous", "use-credentials"],
          sb: ["allow-forms", "allow-modals", "allow-pointer-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-same-origin", "allow-scripts", "allow-top-navigation"],
          tristate: ["true", "false", "mixed", "undefined"],
          inputautocomplete: ["additional-name", "address-level1", "address-level2", "address-level3", "address-level4", "address-line1", "address-line2", "address-line3", "bday", "bday-year", "bday-day", "bday-month", "billing", "cc-additional-name", "cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-family-name", "cc-given-name", "cc-name", "cc-number", "cc-type", "country", "country-name", "current-password", "email", "family-name", "fax", "given-name", "home", "honorific-prefix", "honorific-suffix", "impp", "language", "mobile", "name", "new-password", "nickname", "organization", "organization-title", "pager", "photo", "postal-code", "sex", "shipping", "street-address", "tel-area-code", "tel", "tel-country-code", "tel-extension", "tel-local", "tel-local-prefix", "tel-local-suffix", "tel-national", "transaction-amount", "transaction-currency", "url", "username", "work"],
          autocomplete: ["inline", "list", "both", "none"],
          current: ["page", "step", "location", "date", "time", "true", "false"],
          dropeffect: ["copy", "move", "link", "execute", "popup", "none"],
          invalid: ["grammar", "false", "spelling", "true"],
          live: ["off", "polite", "assertive"],
          orientation: ["vertical", "horizontal", "undefined"],
          relevant: ["additions", "removals", "text", "all", "additions text"],
          sort: ["ascending", "descending", "none", "other"],
          roles: ["alert", "alertdialog", "button", "checkbox", "dialog", "gridcell", "link", "log", "marquee", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "radio", "scrollbar", "searchbox", "slider", "spinbutton", "status", "switch", "tab", "tabpanel", "textbox", "timer", "tooltip", "treeitem", "combobox", "grid", "listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid", "application", "article", "cell", "columnheader", "definition", "directory", "document", "feed", "figure", "group", "heading", "img", "list", "listitem", "math", "none", "note", "presentation", "region", "row", "rowgroup", "rowheader", "separator", "table", "term", "text", "toolbar", "banner", "complementary", "contentinfo", "form", "main", "navigation", "region", "search"]
        };
      return {
        getId: function() {
          return "html5"
        },
        isApplicable: function() {
          return !0
        },
        collectTags: function(e) {
          return o(e, t.HTML_TAGS)
        },
        collectAttributes: function(i, r) {
          s(i, r, t.HTML_TAGS, e), n.forEach(function(e) {
            r(e, "event")
          })
        },
        collectValues: function(n, r, a) {
          return l(n, r, a, t.HTML_TAGS, e, i)
        }
      }
    }

    function r() {
      var e = {
          input: ["ng-model", "ng-required", "ng-minlength", "ng-maxlength", "ng-pattern", "ng-trim"],
          select: ["ng-model"],
          textarea: ["ng-model", "ng-required", "ng-minlength", "ng-maxlength", "ng-pattern", "ng-trim"]
        },
        t = ["ng-app", "ng-bind", "ng-bind-html", "ng-bind-template", "ng-blur", "ng-change", "ng-checked", "ng-class", "ng-class-even", "ng-class-odd", "ng-click", "ng-cloak", "ng-controller", "ng-copy", "ng-csp", "ng-cut", "ng-dblclick", "ng-disabled", "ng-focus", "ng-form", "ng-hide", "ng-href", "ng-if", "ng-include", "ng-init", "ng-jq", "ng-keydown", "ng-keypress", "ng-keyup", "ng-list", "ng-model-options", "ng-mousedown", "ng-mouseenter", "ng-mouseleave", "ng-mousemove", "ng-mouseover", "ng-mouseup", "ng-non-bindable", "ng-open", "ng-options", "ng-paste", "ng-pluralize", "ng-readonly", "ng-repeat", "ng-selected", "ng-show", "ng-src", "ng-srcset", "ng-style", "ng-submit", "ng-switch", "ng-transclude", "ng-value"];
      return {
        getId: function() {
          return "angular1"
        },
        isApplicable: function(e) {
          return "html" === e
        },
        collectTags: function(e) {},
        collectAttributes: function(n, i) {
          if (n) {
            var r = e[n];
            r && r.forEach(function(e) {
              i(e, null), i("data-" + e, null)
            })
          }
          t.forEach(function(e) {
            i(e, null), i("data-" + e, null)
          })
        },
        collectValues: function(e, t, n) {}
      }
    }

    function a() {
      var e = {
          a: ["nav-direction:navdir", "nav-transition:trans"],
          button: ["menu-toggle:menusides"]
        },
        n = ["collection-repeat", "force-refresh-images:b", "ion-stop-event", "item-height", "item-render-buffer", "item-width", "menu-close:v", "on-double-tap", "on-drag", "on-drag-down", "on-drag-left", "on-drag-right", "on-drag-up", "on-hold", "on-release", "on-swipe", "on-swipe-down", "on-swipe-left", "on-swipe-right", "on-swipe-up", "on-tap", "on-touch"],
        i = {
          align: ["center", "left", "right"],
          b: ["true", "false"],
          inputtype: ["email", "number", "password", "search", "tel", "text", "url"],
          listtype: ["card", "list-inset"],
          menusides: ["left", "right"],
          navdir: ["back", "enter", "exit", "forward", "swap"],
          navsides: ["left", "primary", "right", "secondary"],
          scrolldir: ["x", "xy", "y"],
          trans: ["android", "ios", "none"]
        };
      return {
        getId: function() {
          return "ionic"
        },
        isApplicable: function(e) {
          return "html" === e
        },
        collectTags: function(e) {
          return o(e, t.IONIC_TAGS)
        },
        collectAttributes: function(i, r) {
          if (s(i, r, t.IONIC_TAGS, n), i) {
            var a = e[i];
            a && a.forEach(function(e) {
              var t = e.split(":");
              r(t[0], t[1])
            })
          }
        },
        collectValues: function(r, a, o) {
          return l(r, a, o, t.IONIC_TAGS, n, i, e)
        }
      }
    }

    function o(e, t) {
      for (var n in t) e(n, t[n].label)
    }

    function s(e, t, n, i) {
      if (i.forEach(function(e) {
          var n = e.split(":");
          t(n[0], n[1])
        }), e) {
        var r = n[e];
        if (r) {
          var a = r.attributes;
          a && a.forEach(function(e) {
            var n = e.split(":");
            t(n[0], n[1])
          })
        }
      }
    }

    function l(e, t, n, i, r, a, o) {
      var s = t + ":",
        l = function(e) {
          e.forEach(function(e) {
            if (e.length > s.length && c.startsWith(e, s)) {
              var i = e.substr(s.length);
              if ("v" === i) n(t);
              else {
                var r = a[i];
                r && r.forEach(n)
              }
            }
          })
        };
      if (e) {
        var u = i[e];
        if (u) {
          var h = u.attributes;
          h && l(h)
        }
      }
      if (l(r), o) {
        var d = o[e];
        d && l(d)
      }
    }
    var c = e("../utils/strings"),
      u = e("../utils/arrays"),
      h = e("vscode-nls"),
      d = h.loadMessageBundle();
    t.EMPTY_ELEMENTS = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"], t.isEmptyElement = n;
    var p = function() {
      function e(e, t) {
        void 0 === t && (t = []), this.label = e, this.attributes = t
      }
      return e
    }();
    t.HTMLTagSpecification = p, t.HTML_TAGS = {
      html: new p(d("tags.html", "The html element represents the root of an HTML document."), ["manifest"]),
      head: new p(d("tags.head", "The head element represents a collection of metadata for the Document.")),
      title: new p(d("tags.title", "The title element represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.")),
      base: new p(d("tags.base", "The base element allows authors to specify the document base URL for the purposes of resolving relative URLs, and the name of the default browsing context for the purposes of following hyperlinks. The element does not represent any content beyond this information."), ["href", "target"]),
      link: new p(d("tags.link", "The link element allows authors to link their document to other resources."), ["href", "crossorigin:xo", "rel", "media", "hreflang", "type", "sizes"]),
      meta: new p(d("tags.meta", "The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements."), ["name", "http-equiv", "content", "charset"]),
      style: new p(d("tags.style", "The style element allows authors to embed style information in their documents. The style element is one of several inputs to the styling processing model. The element does not represent content for the user."), ["media", "nonce", "type", "scoped:v"]),
      body: new p(d("tags.body", "The body element represents the content of the document."), ["onafterprint", "onbeforeprint", "onbeforeunload", "onhashchange", "onlanguagechange", "onmessage", "onoffline", "ononline", "onpagehide", "onpageshow", "onpopstate", "onstorage", "onunload"]),
      article: new p(d("tags.article", "The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1–h6 element) as a child of the article element.")),
      section: new p(d("tags.section", "The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.")),
      nav: new p(d("tags.nav", "The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.")),
      aside: new p(d("tags.aside", "The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.")),
      h1: new p(d("tags.h1", "The h1 element represents a section heading.")),
      h2: new p(d("tags.h2", "The h2 element represents a section heading.")),
      h3: new p(d("tags.h3", "The h3 element represents a section heading.")),
      h4: new p(d("tags.h4", "The h4 element represents a section heading.")),
      h5: new p(d("tags.h5", "The h5 element represents a section heading.")),
      h6: new p(d("tags.h6", "The h6 element represents a section heading.")),
      header: new p(d("tags.header", "The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids. When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page.")),
      footer: new p(d("tags.footer", "The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.")),
      address: new p(d("tags.address", "The address element represents the contact information for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole.")),
      p: new p(d("tags.p", "The p element represents a paragraph.")),
      hr: new p(d("tags.hr", "The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.")),
      pre: new p(d("tags.pre", "The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.")),
      blockquote: new p(d("tags.blockquote", "The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations."), ["cite"]),
      ol: new p(d("tags.ol", "The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document."), ["reversed:v", "start", "type:lt"]),
      ul: new p(d("tags.ul", "The ul element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document.")),
      li: new p(d("tags.li", "The li element represents a list item. If its parent element is an ol, ul, or menu element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element."), ["value"]),
      dl: new p(d("tags.dl", "The dl element represents an association list consisting of zero or more name-value groups (a description list). A name-value group consists of one or more names (dt elements) followed by one or more values (dd elements), ignoring any nodes other than dt and dd elements. Within a single dl element, there should not be more than one dt element for each name.")),
      dt: new p(d("tags.dt", "The dt element represents the term, or name, part of a term-description group in a description list (dl element).")),
      dd: new p(d("tags.dd", "The dd element represents the description, definition, or value, part of a term-description group in a description list (dl element).")),
      figure: new p(d("tags.figure", "The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.")),
      figcaption: new p(d("tags.figcaption", "The figcaption element represents a caption or legend for the rest of the contents of the figcaption element's parent figure element, if any.")),
      main: new p(d("tags.main", "The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.")),
      div: new p(d("tags.div", "The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.")),
      a: new p(d("tags.a", "If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents."), ["href", "target", "download", "ping", "rel", "hreflang", "type"]),
      em: new p(d("tags.em", "The em element represents stress emphasis of its contents.")),
      strong: new p(d("tags.strong", "The strong element represents strong importance, seriousness, or urgency for its contents.")),
      small: new p(d("tags.small", "The small element represents side comments such as small print.")),
      s: new p(d("tags.s", "The s element represents contents that are no longer accurate or no longer relevant.")),
      cite: new p(d("tags.cite", "The cite element represents a reference to a creative work. It must include the title of the work or the name of the author(person, people or organization) or an URL reference, or a reference in abbreviated form as per the conventions used for the addition of citation metadata.")),
      q: new p(d("tags.q", "The q element represents some phrasing content quoted from another source."), ["cite"]),
      dfn: new p(d("tags.dfn", "The dfn element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the dfn element must also contain the definition(s) for the term given by the dfn element.")),
      abbr: new p(d("tags.abbr", "The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.")),
      ruby: new p(d("tags.ruby", "The ruby element allows one or more spans of phrasing content to be marked with ruby annotations. Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations. In Japanese, this form of typography is also known as furigana. Ruby text can appear on either side, and sometimes both sides, of the base text, and it is possible to control its position using CSS. A more complete introduction to ruby can be found in the Use Cases & Exploratory Approaches for Ruby Markup document as well as in CSS Ruby Module Level 1. [RUBY-UC] [CSSRUBY]")),
      rb: new p(d("tags.rb", "The rb element marks the base text component of a ruby annotation. When it is the child of a ruby element, it doesn't represent anything itself, but its parent ruby element uses it as part of determining what it represents.")),
      rt: new p(d("tags.rt", "The rt element marks the ruby text component of a ruby annotation. When it is the child of a ruby element or of an rtc element that is itself the child of a ruby element, it doesn't represent anything itself, but its ancestor ruby element uses it as part of determining what it represents.")),
      rp: new p(d("tags.rp", "The rp element is used to provide fallback text to be shown by user agents that don't support ruby annotations. One widespread convention is to provide parentheses around the ruby text component of a ruby annotation.")),
      time: new p(d("tags.time", "The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below."), ["datetime"]),
      code: new p(d("tags.code", "The code element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize.")),
      "var": new p(d("tags.var", "The var element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose.")),
      samp: new p(d("tags.samp", "The samp element represents sample or quoted output from another program or computing system.")),
      kbd: new p(d("tags.kbd", "The kbd element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).")),
      sub: new p(d("tags.sub", "The sub element represents a subscript.")),
      sup: new p(d("tags.sup", "The sup element represents a superscript.")),
      i: new p(d("tags.i", "The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.")),
      b: new p(d("tags.b", "The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.")),
      u: new p(d("tags.u", "The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt.")),
      mark: new p(d("tags.mark", "The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity.")),
      bdi: new p(d("tags.bdi", "The bdi element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting. [BIDI]")),
      bdo: new p(d("tags.dbo", "The bdo element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override. [BIDI]")),
      span: new p(d("tags.span", "The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children.")),
      br: new p(d("tags.br", "The br element represents a line break.")),
      wbr: new p(d("tags.wbr", "The wbr element represents a line break opportunity.")),
      ins: new p(d("tags.ins", "The ins element represents an addition to the document.")),
      del: new p(d("tags.del", "The del element represents a removal from the document."), ["cite", "datetime"]),
      picture: new p(d("tags.picture", "The picture element is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.")),
      img: new p(d("tags.img", "An img element represents an image."), ["alt", "src", "srcset", "crossorigin:xo", "usemap", "ismap:v", "width", "height"]),
      iframe: new p(d("tags.iframe", "The iframe element represents a nested browsing context."), ["src", "srcdoc", "name", "sandbox:sb", "seamless:v", "allowfullscreen:v", "width", "height"]),
      embed: new p(d("tags.embed", "The embed element provides an integration point for an external (typically non-HTML) application or interactive content."), ["src", "type", "width", "height"]),
      object: new p(d("tags.object", "The object element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin."), ["data", "type", "typemustmatch:v", "name", "usemap", "form", "width", "height"]),
      param: new p(d("tags.param", "The param element defines parameters for plugins invoked by object elements. It does not represent anything on its own."), ["name", "value"]),
      video: new p(d("tags.video", "A video element is used for playing videos or movies, and audio files with captions."), ["src", "crossorigin:xo", "poster", "preload:pl", "autoplay:v", "mediagroup", "loop:v", "muted:v", "controls:v", "width", "height"]),
      audio: new p(d("tags.audio", "An audio element represents a sound or audio stream."), ["src", "crossorigin:xo", "preload:pl", "autoplay:v", "mediagroup", "loop:v", "muted:v", "controls:v"]),
      source: new p(d("tags.source", "The source element allows authors to specify multiple alternative media resources for media elements. It does not represent anything on its own."), ["src", "type"]),
      track: new p(d("tags.track", "The track element allows authors to specify explicit external timed text tracks for media elements. It does not represent anything on its own."), ["default:v", "kind:tk", "label", "src", "srclang"]),
      map: new p(d("tags.map", "The map element, in conjunction with an img element and any area element descendants, defines an image map. The element represents its children."), ["name"]),
      area: new p(d("tags.area", "The area element represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an image map."), ["alt", "coords", "shape:sh", "href", "target", "download", "ping", "rel", "hreflang", "type"]),
      table: new p(d("tags.table", "The table element represents data with more than one dimension, in the form of a table."), ["sortable:v", "border"]),
      caption: new p(d("tags.caption", "The caption element represents the title of the table that is its parent, if it has a parent and that is a table element.")),
      colgroup: new p(d("tags.colgroup", "The colgroup element represents a group of one or more columns in the table that is its parent, if it has a parent and that is a table element."), ["span"]),
      col: new p(d("tags.col", "If a col element has a parent and that is a colgroup element that itself has a parent that is a table element, then the col element represents one or more columns in the column group represented by that colgroup."), ["span"]),
      tbody: new p(d("tags.tbody", "The tbody element represents a block of rows that consist of a body of data for the parent table element, if the tbody element has a parent and it is a table.")),
      thead: new p(d("tags.thead", "The thead element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table.")),
      tfoot: new p(d("tags.tfoot", "The tfoot element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the tfoot element has a parent and it is a table.")),
      tr: new p(d("tags.tr", "The tr element represents a row of cells in a table.")),
      td: new p(d("tags.td", "The td element represents a data cell in a table."), ["colspan", "rowspan", "headers"]),
      th: new p(d("tags.th", "The th element represents a header cell in a table."), ["colspan", "rowspan", "headers", "scope:s", "sorted", "abbr"]),
      form: new p(d("tags.form", "The form element represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing."), ["accept-charset", "action", "autocomplete:o", "enctype:et", "method:m", "name", "novalidate:v", "target"]),
      label: new p(d("tags.label", "The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself."), ["form", "for"]),
      input: new p(d("tags.input", "The input element represents a typed data field, usually with a form control to allow the user to edit the data."), ["accept", "alt", "autocomplete:inputautocomplete", "autofocus:v", "checked:v", "dirname", "disabled:v", "form", "formaction", "formenctype:et", "formmethod:fm", "formnovalidate:v", "formtarget", "height", "inputmode:im", "list", "max", "maxlength", "min", "minlength", "multiple:v", "name", "pattern", "placeholder", "readonly:v", "required:v", "size", "src", "step", "type:t", "value", "width"]),
      button: new p(d("tags.button", "The button element represents a button labeled by its contents."), ["autofocus:v", "disabled:v", "form", "formaction", "formenctype:et", "formmethod:fm", "formnovalidate:v", "formtarget", "name", "type:bt", "value"]),
      select: new p(d("tags.select", "The select element represents a control for selecting amongst a set of options."), ["autocomplete:inputautocomplete", "autofocus:v", "disabled:v", "form", "multiple:v", "name", "required:v", "size"]),
      datalist: new p(d("tags.datalist", "The datalist element represents a set of option elements that represent predefined options for other controls. In the rendering, the datalist element represents nothing and it, along with its children, should be hidden.")),
      optgroup: new p(d("tags.optgroup", "The optgroup element represents a group of option elements with a common label."), ["disabled:v", "label"]),
      option: new p(d("tags.option", "The option element represents an option in a select element or as part of a list of suggestions in a datalist element."), ["disabled:v", "label", "selected:v", "value"]),
      textarea: new p(d("tags.textarea", "The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value."), ["autocomplete:inputautocomplete", "autofocus:v", "cols", "dirname", "disabled:v", "form", "inputmode:im", "maxlength", "minlength", "name", "placeholder", "readonly:v", "required:v", "rows", "wrap:w"]),
      output: new p(d("tags.output", "The output element represents the result of a calculation performed by the application, or the result of a user action."), ["for", "form", "name"]),
      progress: new p(d("tags.progress", "The progress element represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed."), ["value", "max"]),
      meter: new p(d("tags.meter", "The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate."), ["value", "min", "max", "low", "high", "optimum"]),
      fieldset: new p(d("tags.fieldset", "The fieldset element represents a set of form controls optionally grouped under a common name."), ["disabled:v", "form", "name"]),
      legend: new p(d("tags.legend", "The legend element represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.")),
      details: new p(d("tags.details", "The details element represents a disclosure widget from which the user can obtain additional information or controls."), ["open:v"]),
      summary: new p(d("tags.summary", "The summary element represents a summary, caption, or legend for the rest of the contents of the summary element's parent details element, if any.")),
      dialog: new p(d("tags.dialog", "The dialog element represents a part of an application that a user interacts with to perform a task, for example a dialog box, inspector, or window.")),
      script: new p(d("tags.script", "The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user."), ["src", "type", "charset", "async:v", "defer:v", "crossorigin:xo", "nonce"]),
      noscript: new p(d("tags.noscript", "The noscript element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed.")),
      template: new p(d("tags.template", "The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.")),
      canvas: new p(d("tags.canvas", "The canvas element provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly."), ["width", "height"])
    }, t.IONIC_TAGS = {
      "ion-checkbox": new p(d("tags.ion.checkbox", "The checkbox is no different than the HTML checkbox input, except it's styled differently. The checkbox behaves like any AngularJS checkbox."), ["name", "ng-false-value", "ng-model", "ng-true-value"]),
      "ion-content": new p(d("tags.ion.content", "The ionContent directive provides an easy to use content area that can be configured to use Ionic's custom Scroll View, or the built-in overflow scrolling of the browser."), ["delegate-handle", "direction:scrolldir", "has-bouncing:b", "locking:b", "on-scroll", "on-scroll-complete", "overflow-scroll:b", "padding:b", "scroll:b", "scrollbar-x:b", "scrollbar-y:b", "start-x", "start-y"]),
      "ion-delete-button": new p(d("tags.ion.deletebutton", "Child of ionItem"), []),
      "ion-footer-bar": new p(d("tags.ion.footerbar", 'Adds a fixed footer bar below some content. Can also be a subfooter (higher up) if the "bar-subfooter" class is applied.'), ["align-title:align", "keyboard-attach:v"]),
      "ion-header-bar": new p(d("tags.ion.headerbar", 'Adds a fixed header bar above some content. Can also be a subheader (lower down) if the "bar-subheader" class is applied.'), ["align-title:align", "no-tap-scroll:b"]),
      "ion-infinite-scroll": new p(d("tags.ion.infinitescroll", "Child of ionContent or ionScroll. The ionInfiniteScroll directive allows you to call a function whenever the user gets to the bottom of the page or near the bottom of the page."), ["distance", "icon", "immediate-check:b", "on-infinite", "spinner"]),
      "ion-input": new p(d("tags.ion.input", 'ionInput is meant for text type inputs only. Ionic uses an actual <input type="text"> HTML element within the component, with Ionic wrapping to better handle the user experience and interactivity.'), ["type:inputtype", "clearInput:v"]),
      "ion-item": new p(d("tags.ion.item", "Child of ionList."), []),
      "ion-list": new p(d("tags.ion.list", "The List is a widely used interface element in almost any mobile app, and can include content ranging from basic text all the way to buttons, toggles, icons, and thumbnails."), ["can-swipe:b", "delegate-handle", "show-delete:b", "show-reorder:b", "type:listtype"]),
      "ion-modal-view": new p(d("tags.ion.modalview", "The Modal is a content pane that can go over the user's main view temporarily. Usually used for making a choice or editing an item."), []),
      "ion-nav-back-button": new p(d("tags.ion.navbackbutton", "Child of ionNavBar. Creates a back button inside an ionNavBar. The back button will appear when the user is able to go back in the current navigation stack."), []),
      "ion-nav-bar": new p(d("tags.ion.navbar", "If you have an ionNavView directive, you can also create an <ion-nav-bar>, which will create a topbar that updates as the application state changes."), ["align-title:align", "delegate-handle", "no-tap-scroll:b"]),
      "ion-nav-buttons": new p(d("tags.ion.navbuttons", "Child of ionNavView. Use ionNavButtons to set the buttons on your ionNavBar from within an ionView."), ["side:navsides"]),
      "ion-nav-title": new p(d("tags.ion.navtitle", "Child of ionNavView. The ionNavTitle directive replaces an ionNavBar title text with custom HTML from within an ionView template."), []),
      "ion-nav-view": new p(d("tags.ion.navview", "The ionNavView directive is used to render templates in your application. Each template is part of a state. States are usually mapped to a url, and are defined programatically using angular-ui-router."), ["name"]),
      "ion-option-button": new p(d("tags.ion.optionbutton", "Child of ionItem. Creates an option button inside a list item, that is visible when the item is swiped to the left by the user."), []),
      "ion-pane": new p(d("tags.ion.pane", 'A simple container that fits content, with no side effects. Adds the "pane" class to the element.'), []),
      "ion-popover-view": new p(d("tags.ion.popoverview", "The Popover is a view that floats above an app's content. Popovers provide an easy way to present or gather information from the user."), []),
      "ion-radio": new p(d("tags.ion.radio", "The radio ionRirective is no different than the HTML radio input, except it's styled differently. The ionRadio behaves like AngularJS radio input."), ["disabled:b", "icon", "name", "ng-disabled:b", "ng-model", "ng-value", "value"]),
      "ion-refresher": new p(d("tags.ion.refresher", "Child of ionContent or ionScroll. Allows you to add pull-to-refresh to a scrollView. Place it as the first child of your ionContent or ionScroll element."), ["disable-pulling-rotation:b", "on-pulling", "on-refresh", "pulling-icon", "pulling-text", "refreshing-icon", "spinner"]),
      "ion-reorder-button": new p(d("tags.ion.reorderbutton", "Child of ionItem."), ["on-reorder"]),
      "ion-scroll": new p(d("tags.ion.scroll", "Creates a scrollable container for all content inside."), ["delegate-handle", "direction:scrolldir", "has-bouncing:b", "locking:b", "max-zoom", "min-zoom", "on-refresh", "on-scroll", "paging:b", "scrollbar-x:b", "scrollbar-y:b", "zooming:b"]),
      "ion-side-menu": new p(d("tags.ion.sidemenu", "Child of ionSideMenus. A container for a side menu, sibling to an ionSideMenuContent directive."), ["is-enabled:b", "expose-aside-when", "side:navsides", "width"]),
      "ion-side-menu-content": new p(d("tags.ion.sidemenucontent", "Child of ionSideMenus. A container for the main visible content, sibling to one or more ionSideMenu directives."), ["drag-content:b", "edge-drag-threshold"]),
      "ion-side-menus": new p(d("tags.ion.sidemenus", "A container element for side menu(s) and the main content. Allows the left and/or right side menu to be toggled by dragging the main content area side to side."), ["delegate-handle", "enable-menu-with-back-views:b"]),
      "ion-slide": new p(d("tags.ion.slide", "Child of ionSlideBox. Displays a slide inside of a slidebox."), []),
      "ion-slide-box": new p(d("tags.ion.slidebox", "The Slide Box is a multi-page container where each page can be swiped or dragged between."), ["active-slide", "auto-play:b", "delegate-handle", "does-continue:b", "on-slide-changed", "pager-click", "show-pager:b", "slide-interval"]),
      "ion-spinner": new p(d("tags.ion.spinner", "The ionSpinner directive provides a variety of animated spinners."), ["icon"]),
      "ion-tab": new p(d("tags.ion.tab", "Child of ionTabs. Contains a tab's content. The content only exists while the given tab is selected."), ["badge", "badge-style", "disabled", "hidden", "href", "icon", "icon-off", "icon-on", "ng-click", "on-deselect", "on-select", "title"]),
      "ion-tabs": new p(d("tags.ion.tabs", 'Powers a multi-tabbed interface with a tab bar and a set of "pages" that can be tabbed through.'), ["delegate-handle"]),
      "ion-title": new p(d("tags.ion.title", "ion-title is a component that sets the title of the ionNavbar"), []),
      "ion-toggle": new p(d("tags.ion.toggle", "A toggle is an animated switch which binds a given model to a boolean. Allows dragging of the switch's nub. The toggle behaves like any AngularJS checkbox otherwise."), ["name", "ng-false-value", "ng-model", "ng-true-value", "toggle-class"]),
      "ion-view ": new p(d("tags.ion.view", "Child of ionNavView. A container for view content and any navigational and header bar information."), ["cache-view:b", "can-swipe-back:b", "hide-back-button:b", "hide-nav-bar:b", "view-title"])
    }, t.getHTML5TagProvider = i, t.getAngularTagProvider = r, t.getIonicTagProvider = a
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/parser/htmlParser", ["require", "exports", "./htmlScanner", "../utils/arrays", "./htmlTags"], e)
  }(function(e, t) {
    function n(e) {
      for (var t = i.createScanner(e), n = new o(0, e.length, [], null), r = n, s = -1, l = null, c = t.scan(); c !== i.TokenType.EOS;) {
        switch (c) {
          case i.TokenType.StartTagOpen:
            var u = new o(t.getTokenOffset(), e.length, [], r);
            r.children.push(u), r = u;
            break;
          case i.TokenType.StartTag:
            r.tag = t.getTokenText();
            break;
          case i.TokenType.StartTagClose:
            r.end = t.getTokenEnd(), a.isEmptyElement(r.tag) && r !== n && (r.closed = !0, r = r.parent);
            break;
          case i.TokenType.EndTagOpen:
            s = t.getTokenOffset();
            break;
          case i.TokenType.EndTag:
            for (var h = t.getTokenText().toLowerCase(); !r.isSameTag(h) && r !== n;) r.end = s, r.closed = !1, r = r.parent;
            r !== n && (r.closed = !0, r.endTagStart = s);
            break;
          case i.TokenType.StartTagSelfClose:
            r !== n && (r.closed = !0, r.end = t.getTokenEnd(), r = r.parent);
            break;
          case i.TokenType.EndTagClose:
            r !== n && (r.end = t.getTokenEnd(), r = r.parent);
            break;
          case i.TokenType.AttributeName:
            var d = (l = t.getTokenText(), r.attributes);
            d || (r.attributes = d = {}), d[l] = null;
            break;
          case i.TokenType.AttributeValue:
            var p = t.getTokenText();
            d && l && (d[l] = p, l = null)
        }
        c = t.scan()
      }
      for (; r !== n;) r.end = e.length, r.closed = !1, r = r.parent;
      return {
        roots: n.children,
        findNodeBefore: n.findNodeBefore.bind(n),
        findNodeAt: n.findNodeAt.bind(n)
      }
    }
    var i = e("./htmlScanner"),
      r = e("../utils/arrays"),
      a = e("./htmlTags"),
      o = function() {
        function e(e, t, n, i) {
          this.start = e, this.end = t, this.children = n, this.parent = i
        }
        return Object.defineProperty(e.prototype, "attributeNames", {
          get: function() {
            return Object.keys(this.attributes)
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.isSameTag = function(e) {
          return this.tag && e && this.tag.length === e.length && this.tag.toLowerCase() === e
        }, Object.defineProperty(e.prototype, "firstChild", {
          get: function() {
            return this.children[0]
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "lastChild", {
          get: function() {
            return this.children.length ? this.children[this.children.length - 1] : void 0
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.findNodeBefore = function(e) {
          var t = r.findFirst(this.children, function(t) {
            return e <= t.start
          }) - 1;
          if (t >= 0) {
            var n = this.children[t];
            if (e > n.start) {
              if (e < n.end) return n.findNodeBefore(e);
              var i = n.lastChild;
              return i && i.end === n.end ? n.findNodeBefore(e) : n
            }
          }
          return this
        }, e.prototype.findNodeAt = function(e) {
          var t = r.findFirst(this.children, function(t) {
            return e <= t.start
          }) - 1;
          if (t >= 0) {
            var n = this.children[t];
            if (e > n.start && e <= n.end) return n.findNodeAt(e)
          }
          return this
        }, e
      }();
    t.Node = o, t.parse = n
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-languageserver-types/main", ["require", "exports"], e)
  }(function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n;
    ! function(e) {
      function t(e, t) {
        return {
          line: e,
          character: t
        }
      }

      function n(e) {
        var t = e;
        return D.defined(t) && D.number(t.line) && D.number(t.character)
      }
      e.create = t, e.is = n
    }(n = t.Position || (t.Position = {}));
    var i;
    ! function(e) {
      function t(e, t, i, r) {
        if (D.number(e) && D.number(t) && D.number(i) && D.number(r)) return {
          start: n.create(e, t),
          end: n.create(i, r)
        };
        if (n.is(e) && n.is(t)) return {
          start: e,
          end: t
        };
        throw new Error("Range#create called with invalid arguments[" + e + ", " + t + ", " + i + ", " + r + "]")
      }

      function i(e) {
        var t = e;
        return D.defined(t) && n.is(t.start) && n.is(t.end)
      }
      e.create = t, e.is = i
    }(i = t.Range || (t.Range = {}));
    var r;
    ! function(e) {
      function t(e, t) {
        return {
          uri: e,
          range: t
        }
      }

      function n(e) {
        var t = e;
        return D.defined(t) && i.is(t.range) && (D.string(t.uri) || D.undefined(t.uri))
      }
      e.create = t, e.is = n
    }(r = t.Location || (t.Location = {}));
    var a;
    ! function(e) {
      e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4
    }(a = t.DiagnosticSeverity || (t.DiagnosticSeverity = {}));
    var o;
    ! function(e) {
      function t(e, t, n, i, r) {
        var a = {
          range: e,
          message: t
        };
        return D.defined(n) && (a.severity = n), D.defined(i) && (a.code = i), D.defined(r) && (a.source = r), a
      }

      function n(e) {
        var t = e;
        return D.defined(t) && i.is(t.range) && D.string(t.message) && (D.number(t.severity) || D.undefined(t.severity)) && (D.number(t.code) || D.string(t.code) || D.undefined(t.code)) && (D.string(t.source) || D.undefined(t.source))
      }
      e.create = t, e.is = n
    }(o = t.Diagnostic || (t.Diagnostic = {}));
    var s;
    ! function(e) {
      function t(e, t) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        var r = {
          title: e,
          command: t
        };
        return D.defined(n) && n.length > 0 && (r.arguments = n), r
      }

      function n(e) {
        var t = e;
        return D.defined(t) && D.string(t.title) && D.string(t.title)
      }
      e.create = t, e.is = n
    }(s = t.Command || (t.Command = {}));
    var l;
    ! function(e) {
      function t(e, t) {
        return {
          range: e,
          newText: t
        }
      }

      function n(e, t) {
        return {
          range: {
            start: e,
            end: e
          },
          newText: t
        }
      }

      function i(e) {
        return {
          range: e,
          newText: ""
        }
      }
      e.replace = t, e.insert = n, e.del = i
    }(l = t.TextEdit || (t.TextEdit = {}));
    var c;
    ! function(e) {
      function t(e, t) {
        return {
          textDocument: e,
          edits: t
        }
      }

      function n(e) {
        var t = e;
        return D.defined(t) && p.is(t.textDocument) && Array.isArray(t.edits)
      }
      e.create = t, e.is = n
    }(c = t.TextDocumentEdit || (t.TextDocumentEdit = {}));
    var u = function() {
        function e(e) {
          this.edits = e
        }
        return e.prototype.insert = function(e, t) {
          this.edits.push(l.insert(e, t))
        }, e.prototype.replace = function(e, t) {
          this.edits.push(l.replace(e, t))
        }, e.prototype["delete"] = function(e) {
          this.edits.push(l.del(e))
        }, e.prototype.add = function(e) {
          this.edits.push(e)
        }, e.prototype.all = function() {
          return this.edits
        }, e.prototype.clear = function() {
          this.edits.splice(0, this.edits.length)
        }, e
      }(),
      h = function() {
        function e(e) {
          var t = this;
          this._textEditChanges = Object.create(null), e && (this._workspaceEdit = e, e.documentChanges ? e.documentChanges.forEach(function(e) {
            var n = new u(e.edits);
            t._textEditChanges[e.textDocument.uri] = n
          }) : e.changes && Object.keys(e.changes).forEach(function(n) {
            var i = new u(e.changes[n]);
            t._textEditChanges[n] = i
          }))
        }
        return Object.defineProperty(e.prototype, "edit", {
          get: function() {
            return this._workspaceEdit
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.getTextEditChange = function(e) {
          if (p.is(e)) {
            if (this._workspaceEdit || (this._workspaceEdit = {
                documentChanges: []
              }), !this._workspaceEdit.documentChanges) throw new Error("Workspace edit is not configured for versioned document changes.");
            var t = e,
              n = this._textEditChanges[t.uri];
            if (!n) {
              var i = [],
                r = {
                  textDocument: t,
                  edits: i
                };
              this._workspaceEdit.documentChanges.push(r), n = new u(i), this._textEditChanges[t.uri] = n
            }
            return n
          }
          if (this._workspaceEdit || (this._workspaceEdit = {
              changes: Object.create(null)
            }), !this._workspaceEdit.changes) throw new Error("Workspace edit is not configured for normal text edit changes.");
          var n = this._textEditChanges[e];
          if (!n) {
            var i = [];
            this._workspaceEdit.changes[e] = i, n = new u(i), this._textEditChanges[e] = n
          }
          return n
        }, e
      }();
    t.WorkspaceChange = h;
    var d;
    ! function(e) {
      function t(e) {
        return {
          uri: e
        }
      }

      function n(e) {
        var t = e;
        return D.defined(t) && D.string(t.uri)
      }
      e.create = t, e.is = n
    }(d = t.TextDocumentIdentifier || (t.TextDocumentIdentifier = {}));
    var p;
    ! function(e) {
      function t(e, t) {
        return {
          uri: e,
          version: t
        }
      }

      function n(e) {
        var t = e;
        return D.defined(t) && D.string(t.uri) && D.number(t.version)
      }
      e.create = t, e.is = n
    }(p = t.VersionedTextDocumentIdentifier || (t.VersionedTextDocumentIdentifier = {}));
    var f;
    ! function(e) {
      function t(e, t, n, i) {
        return {
          uri: e,
          languageId: t,
          version: n,
          text: i
        }
      }

      function n(e) {
        var t = e;
        return D.defined(t) && D.string(t.uri) && D.string(t.languageId) && D.number(t.version) && D.string(t.text)
      }
      e.create = t, e.is = n
    }(f = t.TextDocumentItem || (t.TextDocumentItem = {}));
    var g;
    ! function(e) {
      e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18
    }(g = t.CompletionItemKind || (t.CompletionItemKind = {}));
    var m;
    ! function(e) {
      e.PlainText = 1, e.Snippet = 2
    }(m = t.InsertTextFormat || (t.InsertTextFormat = {}));
    var v;
    ! function(e) {
      function t(e) {
        return {
          label: e
        }
      }
      e.create = t
    }(v = t.CompletionItem || (t.CompletionItem = {}));
    var b;
    ! function(e) {
      function t(e, t) {
        return {
          items: e ? e : [],
          isIncomplete: !!t
        }
      }
      e.create = t
    }(b = t.CompletionList || (t.CompletionList = {}));
    var y;
    ! function(e) {
      function t(e) {
        return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&")
      }
      e.fromPlainText = t
    }(y = t.MarkedString || (t.MarkedString = {}));
    var T;
    ! function(e) {
      function t(e, t) {
        return t ? {
          label: e,
          documentation: t
        } : {
          label: e
        }
      }
      e.create = t
    }(T = t.ParameterInformation || (t.ParameterInformation = {}));
    var w;
    ! function(e) {
      function t(e, t) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        var r = {
          label: e
        };
        return D.defined(t) && (r.documentation = t), D.defined(n) ? r.parameters = n : r.parameters = [], r
      }
      e.create = t
    }(w = t.SignatureInformation || (t.SignatureInformation = {}));
    var _;
    ! function(e) {
      e.Text = 1, e.Read = 2, e.Write = 3
    }(_ = t.DocumentHighlightKind || (t.DocumentHighlightKind = {}));
    var x;
    ! function(e) {
      function t(e, t) {
        var n = {
          range: e
        };
        return D.number(t) && (n.kind = t), n
      }
      e.create = t
    }(x = t.DocumentHighlight || (t.DocumentHighlight = {}));
    var k;
    ! function(e) {
      e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18
    }(k = t.SymbolKind || (t.SymbolKind = {}));
    var S;
    ! function(e) {
      function t(e, t, n, i, r) {
        var a = {
          name: e,
          kind: t,
          location: {
            uri: i,
            range: n
          }
        };
        return r && (a.containerName = r), a
      }
      e.create = t
    }(S = t.SymbolInformation || (t.SymbolInformation = {}));
    var C;
    ! function(e) {
      function t(e) {
        return {
          diagnostics: e
        }
      }

      function n(e) {
        var t = e;
        return D.defined(t) && D.typedArray(t.diagnostics, o.is)
      }
      e.create = t, e.is = n
    }(C = t.CodeActionContext || (t.CodeActionContext = {}));
    var A;
    ! function(e) {
      function t(e, t) {
        var n = {
          range: e
        };
        return D.defined(t) && (n.data = t), n
      }

      function n(e) {
        var t = e;
        return D.defined(t) && i.is(t.range) && (D.undefined(t.command) || s.is(t.command))
      }
      e.create = t, e.is = n
    }(A = t.CodeLens || (t.CodeLens = {}));
    var E;
    ! function(e) {
      function t(e, t) {
        return {
          tabSize: e,
          insertSpaces: t
        }
      }

      function n(e) {
        var t = e;
        return D.defined(t) && D.number(t.tabSize) && D["boolean"](t.insertSpaces)
      }
      e.create = t, e.is = n
    }(E = t.FormattingOptions || (t.FormattingOptions = {}));
    var O = function() {
      function e() {}
      return e
    }();
    t.DocumentLink = O,
      function(e) {
        function t(e, t) {
          return {
            range: e,
            target: t
          }
        }

        function n(e) {
          var t = e;
          return D.defined(t) && i.is(t.range) && (D.undefined(t.target) || D.string(t.target))
        }
        e.create = t, e.is = n
      }(O = t.DocumentLink || (t.DocumentLink = {})), t.DocumentLink = O, t.EOL = ["\n", "\r\n", "\r"];
    var I;
    ! function(e) {
      function t(e, t, n, i) {
        return new N(e, t, n, i)
      }

      function n(e) {
        var t = e;
        return !!(D.defined(t) && D.string(t.uri) && (D.undefined(t.languageId) || D.string(t.languageId)) && D.number(t.lineCount) && D.func(t.getText) && D.func(t.positionAt) && D.func(t.offsetAt))
      }
      e.create = t, e.is = n
    }(I = t.TextDocument || (t.TextDocument = {}));
    var L;
    ! function(e) {
      e.Manual = 1, e.AfterDelay = 2, e.FocusOut = 3
    }(L = t.TextDocumentSaveReason || (t.TextDocumentSaveReason = {}));
    var D, N = function() {
      function e(e, t, n, i) {
        this._uri = e, this._languageId = t, this._version = n, this._content = i, this._lineOffsets = null
      }
      return Object.defineProperty(e.prototype, "uri", {
        get: function() {
          return this._uri
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "languageId", {
        get: function() {
          return this._languageId
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "version", {
        get: function() {
          return this._version
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.getText = function() {
        return this._content
      }, e.prototype.update = function(e, t) {
        this._content = e.text, this._version = t, this._lineOffsets = null
      }, e.prototype.getLineOffsets = function() {
        if (null === this._lineOffsets) {
          for (var e = [], t = this._content, n = !0, i = 0; i < t.length; i++) {
            n && (e.push(i), n = !1);
            var r = t.charAt(i);
            n = "\r" === r || "\n" === r, "\r" === r && i + 1 < t.length && "\n" === t.charAt(i + 1) && i++
          }
          n && t.length > 0 && e.push(t.length), this._lineOffsets = e
        }
        return this._lineOffsets
      }, e.prototype.positionAt = function(e) {
        e = Math.max(Math.min(e, this._content.length), 0);
        var t = this.getLineOffsets(),
          i = 0,
          r = t.length;
        if (0 === r) return n.create(0, e);
        for (; i < r;) {
          var a = Math.floor((i + r) / 2);
          t[a] > e ? r = a : i = a + 1
        }
        var o = i - 1;
        return n.create(o, e - t[o])
      }, e.prototype.offsetAt = function(e) {
        var t = this.getLineOffsets();
        if (e.line >= t.length) return this._content.length;
        if (e.line < 0) return 0;
        var n = t[e.line],
          i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
        return Math.max(Math.min(n + e.character, i), n)
      }, Object.defineProperty(e.prototype, "lineCount", {
        get: function() {
          return this.getLineOffsets().length
        },
        enumerable: !0,
        configurable: !0
      }), e
    }();
    ! function(e) {
      function t(e) {
        return "undefined" != typeof e
      }

      function n(e) {
        return "undefined" == typeof e
      }

      function i(e) {
        return e === !0 || e === !1
      }

      function r(e) {
        return "[object String]" === l.call(e)
      }

      function a(e) {
        return "[object Number]" === l.call(e)
      }

      function o(e) {
        return "[object Function]" === l.call(e)
      }

      function s(e, t) {
        return Array.isArray(e) && e.every(t)
      }
      var l = Object.prototype.toString;
      e.defined = t, e.undefined = n, e["boolean"] = i, e.string = r, e.number = a, e.func = o, e.typedArray = s
    }(D || (D = {}))
  }), define("vscode-languageserver-types", ["vscode-languageserver-types/main"], function(e) {
    return e
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/parser/razorTags", ["require", "exports"], e)
  }(function(e, t) {
    function n() {
      var e = {
        a: ["asp-action", "asp-controller", "asp-fragment", "asp-host", "asp-protocol", "asp-route"],
        div: ["asp-validation-summary"],
        form: ["asp-action", "asp-controller", "asp-anti-forgery"],
        input: ["asp-for", "asp-format"],
        label: ["asp-for"],
        select: ["asp-for", "asp-items"],
        span: ["asp-validation-for"]
      };
      return {
        getId: function() {
          return "razor"
        },
        isApplicable: function(e) {
          return "razor" === e
        },
        collectTags: function(e) {},
        collectAttributes: function(t, n) {
          if (t) {
            var i = e[t];
            i && i.forEach(function(e) {
              return n(e, null)
            })
          }
        },
        collectValues: function(e, t, n) {}
      }
    }
    t.getRazorTagProvider = n
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/services/tagProviders", ["require", "exports", "../parser/htmlTags", "../parser/razorTags"], e)
  }(function(e, t) {
    var n = e("../parser/htmlTags"),
      i = e("../parser/razorTags");
    t.allTagProviders = [n.getHTML5TagProvider(), n.getAngularTagProvider(), n.getIonicTagProvider(), i.getRazorTagProvider()]
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/services/htmlCompletion", ["require", "exports", "vscode-languageserver-types", "../parser/htmlScanner", "./tagProviders"], e)
  }(function(e, t) {
    function n(e, t, n, u) {
      function h(t, n) {
        return void 0 === n && (n = w), t > w && (t = w), {
          start: e.positionAt(t),
          end: e.positionAt(n)
        }
      }

      function d(e, t) {
        var n = h(e, t);
        return T.forEach(function(e) {
          e.collectTags(function(e, t) {
            y.items.push({
              label: e,
              kind: s.CompletionItemKind.Property,
              documentation: t,
              textEdit: s.TextEdit.replace(n, e),
              insertTextFormat: s.InsertTextFormat.PlainText
            })
          })
        }), y
      }

      function p(e) {
        for (var t = e; t > 0;) {
          var n = S.charAt(t - 1);
          if ("\n\r".indexOf(n) >= 0) return S.substring(t, e);
          if (!i(n)) return null;
          t--
        }
        return S.substring(0, e)
      }

      function f(e, t, n) {
        void 0 === n && (n = w);
        var i = h(e, n),
          a = r(S, n, l.ScannerState.WithinEndTag, l.TokenType.EndTagClose) ? "" : ">",
          o = _;
        for (t && (o = o.parent); o;) {
          var c = o.tag;
          if (c && (!o.closed || o.endTagStart > w)) {
            var u = {
                label: "/" + c,
                kind: s.CompletionItemKind.Property,
                filterText: "/" + c + a,
                textEdit: s.TextEdit.replace(i, "/" + c + a),
                insertTextFormat: s.InsertTextFormat.PlainText
              },
              d = p(o.start),
              f = p(e - 1);
            if (null !== d && null !== f && d !== f) {
              var g = d + "</" + c + a;
              u.textEdit = s.TextEdit.replace(h(e - 1 - f.length), g), u.filterText = f + "</" + c + a
            }
            return y.items.push(u), y
          }
          o = o.parent
        }
        return t ? y : (T.forEach(function(e) {
          e.collectTags(function(e, t) {
            y.items.push({
              label: "/" + e,
              kind: s.CompletionItemKind.Property,
              documentation: t,
              filterText: "/" + e + a,
              textEdit: s.TextEdit.replace(i, "/" + e + a),
              insertTextFormat: s.InsertTextFormat.PlainText
            })
          })
        }), y)
      }

      function g(e, t) {
        return d(e, t), f(e, !0, t), y
      }

      function m(e, t) {
        void 0 === t && (t = w);
        for (var n = w; n < t && "<" !== S[n];) n++;
        var i = h(e, n),
          a = r(S, t, l.ScannerState.AfterAttributeName, l.TokenType.DelimiterAssign) ? "" : '="$1"',
          o = x.toLowerCase();
        return T.forEach(function(e) {
          e.collectAttributes(o, function(e, t) {
            var n = e;
            "v" !== t && a.length && (n += a), y.items.push({
              label: e,
              kind: "handler" === t ? s.CompletionItemKind.Function : s.CompletionItemKind.Value,
              textEdit: s.TextEdit.replace(i, n),
              insertTextFormat: s.InsertTextFormat.Snippet
            })
          })
        }), y
      }

      function v(e, t) {
        var n, i;
        if (w > e && w <= t && '"' === S[e]) {
          t > w && '"' === S[t - 1] && t--;
          var r = a(S, w, e + 1),
            l = o(S, w, t);
          n = h(r, l), i = !1
        } else n = h(e, t), i = !0;
        var c = x.toLowerCase(),
          u = k.toLowerCase();
        return T.forEach(function(e) {
          e.collectValues(c, u, function(e) {
            var t = i ? '"' + e + '"' : e;
            y.items.push({
              label: e,
              filterText: t,
              kind: s.CompletionItemKind.Unit,
              textEdit: s.TextEdit.replace(n, t),
              insertTextFormat: s.InsertTextFormat.PlainText
            })
          })
        }), y
      }

      function b(e) {
        return w === C.getTokenEnd() && (A = C.scan(), A === e && C.getTokenOffset() === w) ? C.getTokenEnd() : w
      }
      var y = {
          isIncomplete: !1,
          items: []
        },
        T = c.allTagProviders.filter(function(t) {
          return t.isApplicable(e.languageId) && (!u || u[t.getId()] !== !1)
        }),
        w = e.offsetAt(t),
        _ = n.findNodeBefore(w);
      if (!_) return y;
      for (var x, k, S = e.getText(), C = l.createScanner(S, _.start), A = C.scan(); A !== l.TokenType.EOS && C.getTokenOffset() <= w;) {
        switch (A) {
          case l.TokenType.StartTagOpen:
            if (C.getTokenEnd() === w) {
              var E = b(l.TokenType.StartTag);
              return g(w, E)
            }
            break;
          case l.TokenType.StartTag:
            if (C.getTokenOffset() <= w && w <= C.getTokenEnd()) return d(C.getTokenOffset(), C.getTokenEnd());
            x = C.getTokenText();
            break;
          case l.TokenType.AttributeName:
            if (C.getTokenOffset() <= w && w <= C.getTokenEnd()) return m(C.getTokenOffset(), C.getTokenEnd());
            k = C.getTokenText();
            break;
          case l.TokenType.DelimiterAssign:
            if (C.getTokenEnd() === w) return v(C.getTokenEnd());
            break;
          case l.TokenType.AttributeValue:
            if (C.getTokenOffset() <= w && w <= C.getTokenEnd()) return v(C.getTokenOffset(), C.getTokenEnd());
            break;
          case l.TokenType.Whitespace:
            if (w <= C.getTokenEnd()) switch (C.getScannerState()) {
              case l.ScannerState.AfterOpeningStartTag:
                var O = C.getTokenOffset(),
                  I = b(l.TokenType.StartTag);
                return g(O, I);
              case l.ScannerState.WithinTag:
              case l.ScannerState.AfterAttributeName:
                return m(C.getTokenEnd());
              case l.ScannerState.BeforeAttributeValue:
                return v(C.getTokenEnd());
              case l.ScannerState.AfterOpeningEndTag:
                return f(C.getTokenOffset() - 1, !1)
            }
            break;
          case l.TokenType.EndTagOpen:
            if (w <= C.getTokenEnd()) {
              var L = C.getTokenOffset() + 1,
                D = b(l.TokenType.EndTag);
              return f(L, !1, D)
            }
            break;
          case l.TokenType.EndTag:
            if (w <= C.getTokenEnd())
              for (var N = C.getTokenOffset() - 1; N >= 0;) {
                var W = S.charAt(N);
                if ("/" === W) return f(N, !1, C.getTokenEnd());
                if (!i(W)) break;
                N--
              }
            break;
          default:
            if (w <= C.getTokenEnd()) return y
        }
        A = C.scan()
      }
      return y
    }

    function i(e) {
      return /^\s*$/.test(e)
    }

    function r(e, t, n, i) {
      for (var r = l.createScanner(e, t, n), a = r.scan(); a === l.TokenType.Whitespace;) a = r.scan();
      return a === i
    }

    function a(e, t, n) {
      for (; t > n && !i(e[t - 1]);) t--;
      return t
    }

    function o(e, t, n) {
      for (; t < n && !i(e[t]);) t++;
      return t
    }
    var s = e("vscode-languageserver-types"),
      l = e("../parser/htmlScanner"),
      c = e("./tagProviders");
    t.doComplete = n
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/services/htmlHover", ["require", "exports", "../parser/htmlScanner", "vscode-languageserver-types", "./tagProviders"], e)
  }(function(e, t) {
    function n(e, t, n) {
      function o(e, t, n) {
        e = e.toLowerCase();
        for (var i = function(i) {
            var a;
            if (i.collectTags(function(i, o) {
                if (i === e) {
                  var s = n ? "<" + e + ">" : "</" + e + ">";
                  a = {
                    contents: [{
                      language: "html",
                      value: s
                    }, r.MarkedString.fromPlainText(o)],
                    range: t
                  }
                }
              }), a) return {
              value: a
            }
          }, a = 0, o = u; a < o.length; a++) {
          var s = o[a],
            l = i(s);
          if ("object" == typeof l) return l.value
        }
      }

      function s(t, n) {
        for (var r = i.createScanner(e.getText(), n), a = r.scan(); a !== i.TokenType.EOS && (r.getTokenEnd() < l || r.getTokenEnd() === l && a !== t);) a = r.scan();
        return a === t && l <= r.getTokenEnd() ? {
          start: e.positionAt(r.getTokenOffset()),
          end: e.positionAt(r.getTokenEnd())
        } : null
      }
      var l = e.offsetAt(t),
        c = n.findNodeAt(l);
      if (c && c.tag) {
        var u = a.allTagProviders.filter(function(t) {
          return t.isApplicable(e.languageId)
        });
        if (!(c.endTagStart && l >= c.endTagStart)) {
          var h = s(i.TokenType.StartTag, c.start);
          return h ? o(c.tag, h, !0) : void 0
        }
        var d = s(i.TokenType.EndTag, c.endTagStart);
        if (d) return o(c.tag, d, !1)
      }
    }
    var i = e("../parser/htmlScanner"),
      r = e("vscode-languageserver-types"),
      a = e("./tagProviders");
    t.doHover = n
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/beautify/beautify", ["require", "exports"], e)
  }(function(e, t) {
    function n(e, t) {
      return e
    }
    t.js_beautify = n
  }),
  /*

    The MIT License (MIT)

    Copyright (c) 2007-2017 Einar Lielmanis, Liam Newman, and contributors.

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation files
    (the "Software"), to deal in the Software without restriction,
    including without limitation the rights to use, copy, modify, merge,
    publish, distribute, sublicense, and/or sell copies of the Software,
    and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.


   CSS Beautifier
  ---------------

      Written by Harutyun Amirjanyan, (amirjanyan@gmail.com)

      Based on code initially developed by: Einar Lielmanis, <einar@jsbeautifier.org>
          http://jsbeautifier.org/

      Usage:
          css_beautify(source_text);
          css_beautify(source_text, options);

      The options are (default in brackets):
          indent_size (4)                         — indentation size,
          indent_char (space)                     — character to indent with,
          preserve_newlines (default false)       - whether existing line breaks should be preserved,
          selector_separator_newline (true)       - separate selectors with newline or
                                                    not (e.g. "a,\nbr" or "a, br")
          end_with_newline (false)                - end with a newline
          newline_between_rules (true)            - add a new line after every css rule
          space_around_selector_separator (false) - ensure space around selector separators:
                                                    '>', '+', '~' (e.g. "a>b" -> "a > b")
      e.g

      css_beautify(css_source_text, {
        'indent_size': 1,
        'indent_char': '\t',
        'selector_separator': ' ',
        'end_with_newline': false,
        'newline_between_rules': true,
        'space_around_selector_separator': true
      });
  */
  function() {
    function e(e, t) {
      var n, i = {};
      for (n in e) n !== t && (i[n] = e[n]);
      if (t in e)
        for (n in e[t]) i[n] = e[t][n];
      return i
    }

    function t(r, a) {
      function o() {
        return C = r.charAt(++E), C || ""
      }

      function s(e) {
        var t = "",
          n = E;
        return e && u(), t = r.charAt(E + 1) || "", E = n - 1, o(), t
      }

      function l(e) {
        for (var t = E; o();)
          if ("\\" === C) o();
          else {
            if (e.indexOf(C) !== -1) break;
            if ("\n" === C) break
          }
        return r.substring(t, E + 1)
      }

      function c(e) {
        var t = E,
          n = l(e);
        return E = t - 1, o(), n
      }

      function u(e) {
        for (var t = 0; A.test(s());) o(), "\n" === C && e && T && (W.newLine(!0), t++);
        return v = t, t
      }

      function h() {
        var e = "";
        for (C && A.test(C) && (e = C); A.test(o());) e += C;
        return e
      }

      function d(e) {
        var t = E;
        for (e = "/" === s(), o(); o();) {
          if (!e && "*" === C && "/" === s()) {
            o();
            break
          }
          if (e && "\n" === C) return r.substring(t, E)
        }
        return r.substring(t, E) + C
      }

      function p(e) {
        return r.substring(E - e.length, E).toLowerCase() === e
      }

      function f() {
        for (var e = 0, t = E + 1; t < r.length; t++) {
          var n = r.charAt(t);
          if ("{" === n) return !0;
          if ("(" === n) e += 1;
          else if (")" === n) {
            if (0 === e) return !1;
            e -= 1
          } else if (";" === n || "}" === n) return !1
        }
        return !1
      }

      function g() {
        D++, I += L
      }

      function m() {
        D--, I = I.slice(0, -b)
      }
      a = a || {}, a = e(a, "css"), r = r || "";
      var v = 0,
        b = a.indent_size ? parseInt(a.indent_size, 10) : 4,
        y = a.indent_char || " ",
        T = void 0 !== a.preserve_newlines && a.preserve_newlines,
        w = void 0 === a.selector_separator_newline || a.selector_separator_newline,
        _ = void 0 !== a.end_with_newline && a.end_with_newline,
        x = void 0 === a.newline_between_rules || a.newline_between_rules,
        k = void 0 !== a.space_around_combinator && a.space_around_combinator;
      k = k || void 0 !== a.space_around_selector_separator && a.space_around_selector_separator;
      var S = a.eol ? a.eol : "auto";
      a.indent_with_tabs && (y = "\t", b = 1), "auto" === S && (S = "\n", r && n.test(r || "") && (S = r.match(n)[0])), S = S.replace(/\\r/, "\r").replace(/\\n/, "\n"), r = r.replace(i, "\n");
      var C, A = /^\s+$/,
        E = -1,
        O = 0,
        I = r.match(/^[\t ]*/)[0],
        L = new Array(b + 1).join(y),
        D = 0,
        N = 0,
        W = {};
      W["{"] = function(e) {
        W.singleSpace(), j.push(e), u(!0) || W.newLine()
      }, W["}"] = function(e) {
        e && W.newLine(), j.push("}"), u(!0) || W.newLine()
      }, W._lastCharWhitespace = function() {
        return A.test(j[j.length - 1])
      }, W.newLine = function(e) {
        j.length && (e || "\n" === j[j.length - 1] ? j[j.length - 1] === I && j.pop() : W.trim(), j.push("\n"), I && j.push(I))
      }, W.singleSpace = function() {
        j.length && !W._lastCharWhitespace() && j.push(" ")
      }, W.preserveSingleSpace = function() {
        z && W.singleSpace()
      }, W.trim = function() {
        for (; W._lastCharWhitespace();) j.pop()
      };
      for (var j = [], P = !1, q = !1, U = !1, R = "", M = "";;) {
        var H = h(),
          z = "" !== H,
          F = H.indexOf("\n") !== -1;
        if (M = R, R = C, !C) break;
        if ("/" === C && "*" === s()) {
          var K = 0 === D;
          (F || K) && W.newLine(), j.push(d()), W.newLine(), K && W.newLine(!0)
        } else if ("/" === C && "/" === s()) F || "{" === M || W.trim(), W.singleSpace(), j.push(d()), W.newLine();
        else if ("@" === C)
          if (W.preserveSingleSpace(), "{" === s()) j.push(l("}"));
          else {
            j.push(C);
            var V = c(": ,;{}()[]/='\"");
            V.match(/[ :]$/) && (o(), V = l(": ").replace(/\s$/, ""), j.push(V), W.singleSpace()), V = V.replace(/\s$/, ""), V in t.NESTED_AT_RULE && (N += 1, V in t.CONDITIONAL_GROUP_RULE && (U = !0))
          }
        else "#" === C && "{" === s() ? (W.preserveSingleSpace(), j.push(l("}"))) : "{" === C ? "}" === s(!0) ? (u(), o(), W.singleSpace(), j.push("{"), W["}"](!1), v < 2 && x && 0 === D && W.newLine(!0)) : (g(), W["{"](C), U ? (U = !1, P = D > N) : P = D >= N) : "}" === C ? (m(), W["}"](!0), P = !1, q = !1, N && N--, v < 2 && x && 0 === D && W.newLine(!0)) : ":" === C ? (u(), !P && !U || p("&") || f() || p("(") ? (p(" ") && " " !== j[j.length - 1] && j.push(" "), ":" === s() ? (o(), j.push("::")) : j.push(":")) : (j.push(":"), q || (q = !0, W.singleSpace()))) : '"' === C || "'" === C ? (W.preserveSingleSpace(), j.push(l(C))) : ";" === C ? (q = !1, j.push(C), u(!0) || W.newLine()) : "(" === C ? p("url") ? (j.push(C), u(), o() && (")" !== C && '"' !== C && "'" !== C ? j.push(l(")")) : E--)) : (O++, W.preserveSingleSpace(), j.push(C), u()) : ")" === C ? (j.push(C), O--) : "," === C ? (j.push(C), !u(!0) && w && !q && O < 1 ? W.newLine() : W.singleSpace()) : (">" === C || "+" === C || "~" === C) && !q && O < 1 ? k ? (W.singleSpace(), j.push(C), W.singleSpace()) : (j.push(C), u(), C && A.test(C) && (C = "")) : "]" === C ? j.push(C) : "[" === C ? (W.preserveSingleSpace(), j.push(C)) : "=" === C ? (u(), j.push("="), A.test(C) && (C = "")) : (W.preserveSingleSpace(), j.push(C))
      }
      var B = "";
      return I && (B += I), B += j.join("").replace(/[\r\n\t ]+$/, ""), _ && (B += "\n"), "\n" !== S && (B = B.replace(/[\n]/g, S)), B
    }
    var n = /\r\n|[\n\r\u2028\u2029]/,
      i = new RegExp(n.source, "g");
    t.NESTED_AT_RULE = {
      "@page": !0,
      "@font-face": !0,
      "@keyframes": !0,
      "@media": !0,
      "@supports": !0,
      "@document": !0
    }, t.CONDITIONAL_GROUP_RULE = {
      "@media": !0,
      "@supports": !0,
      "@document": !0
    }, "function" == typeof define && define.amd ? define("vscode-html-languageservice/beautify/beautify-css", [], function() {
      return {
        css_beautify: t
      }
    }) : "undefined" != typeof exports ? exports.css_beautify = t : "undefined" != typeof window ? window.css_beautify = t : "undefined" != typeof global && (global.css_beautify = t)
  }(),
  /*

    The MIT License (MIT)

    Copyright (c) 2007-2017 Einar Lielmanis, Liam Newman, and contributors.

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation files
    (the "Software"), to deal in the Software without restriction,
    including without limitation the rights to use, copy, modify, merge,
    publish, distribute, sublicense, and/or sell copies of the Software,
    and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
    ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.


   Style HTML
  ---------------

    Written by Nochum Sossonko, (nsossonko@hotmail.com)

    Based on code initially developed by: Einar Lielmanis, <einar@jsbeautifier.org>
      http://jsbeautifier.org/

    Usage:
      style_html(html_source);

      style_html(html_source, options);

    The options are:
      indent_inner_html (default false)  — indent <head> and <body> sections,
      indent_size (default 4)          — indentation size,
      indent_char (default space)      — character to indent with,
      wrap_line_length (default 250)            -  maximum amount of characters per line (0 = disable)
      brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none"
              put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
      unformatted (defaults to inline tags) - list of tags, that shouldn't be reformatted
      content_unformatted (defaults to pre tag) - list of tags, that its content shouldn't be reformatted
      indent_scripts (default normal)  - "keep"|"separate"|"normal"
      preserve_newlines (default true) - whether existing line breaks before elements should be preserved
                                          Only works before elements, not inside tags or for text.
      max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk
      indent_handlebars (default false) - format and indent {{#foo}} and {{/foo}}
      end_with_newline (false)          - end with a newline
      extra_liners (default [head,body,/html]) -List of tags that should have an extra newline before them.

      e.g.

      style_html(html_source, {
        'indent_inner_html': false,
        'indent_size': 2,
        'indent_char': ' ',
        'wrap_line_length': 78,
        'brace_style': 'expand',
        'preserve_newlines': true,
        'max_preserve_newlines': 5,
        'indent_handlebars': false,
        'extra_liners': ['/html']
      });
  */
  function() {
    function e(e) {
      return e.replace(/^\s+/g, "")
    }

    function t(e) {
      return e.replace(/\s+$/g, "")
    }

    function n(e, t) {
      var n, i = {};
      for (n in e) n !== t && (i[n] = e[n]);
      if (t in e)
        for (n in e[t]) i[n] = e[t][n];
      return i
    }

    function i(i, o, s, l) {
      function c() {
        function n(e) {
          var t = "",
            n = function(n) {
              var i = t + n.toLowerCase();
              t = i.length <= e.length ? i : i.substr(i.length - e.length, e.length)
            },
            i = function() {
              return t.indexOf(e) === -1
            };
          return {
            add: n,
            doesNotMatch: i
          }
        }
        return this.pos = 0, this.token = "", this.current_mode = "CONTENT", this.tags = {
          parent: "parent1",
          parentcount: 1,
          parent1: ""
        }, this.tag_type = "", this.token_text = this.last_token = this.last_text = this.token_type = "", this.newlines = 0, this.indent_content = h, this.indent_body_inner_html = d, this.indent_head_inner_html = p, this.Utils = {
          whitespace: "\n\r\t ".split(""),
          single_token: ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr", "!doctype", "?xml", "?php", "basefont", "isindex"],
          extra_liners: O,
          in_array: function(e, t) {
            for (var n = 0; n < t.length; n++)
              if (e === t[n]) return !0;
            return !1
          }
        }, this.is_whitespace = function(e) {
          for (var t = 0; t < e.length; t++)
            if (!this.Utils.in_array(e.charAt(t), this.Utils.whitespace)) return !1;
          return !0
        }, this.traverse_whitespace = function() {
          var e = "";
          if (e = this.input.charAt(this.pos), this.Utils.in_array(e, this.Utils.whitespace)) {
            for (this.newlines = 0; this.Utils.in_array(e, this.Utils.whitespace);) T && "\n" === e && this.newlines <= w && (this.newlines += 1), this.pos++, e = this.input.charAt(this.pos);
            return !0
          }
          return !1
        }, this.space_or_wrap = function(e) {
          return this.line_char_count >= this.wrap_line_length ? (this.print_newline(!1, e), this.print_indentation(e), !0) : (this.line_char_count++, e.push(" "), !1)
        }, this.get_content = function() {
          for (var e = "", t = [], n = 0;
            "<" !== this.input.charAt(this.pos) || 2 === n;) {
            if (this.pos >= this.input.length) return t.length ? t.join("") : ["", "TK_EOF"];
            if (n < 2 && this.traverse_whitespace()) this.space_or_wrap(t);
            else {
              if (e = this.input.charAt(this.pos), _) {
                if ("{" === e ? n += 1 : n < 2 && (n = 0), "}" === e && n > 0 && 0 === n--) break;
                var i = this.input.substr(this.pos, 3);
                if ("{{#" === i || "{{/" === i) break;
                if ("{{!" === i) return [this.get_tag(), "TK_TAG_HANDLEBARS_COMMENT"];
                if ("{{" === this.input.substr(this.pos, 2) && "{{else}}" === this.get_tag(!0)) break
              }
              this.pos++, this.line_char_count++, t.push(e)
            }
          }
          return t.length ? t.join("") : ""
        }, this.get_contents_to = function(e) {
          if (this.pos === this.input.length) return ["", "TK_EOF"];
          var t = "",
            n = new RegExp("</" + e + "\\s*>", "igm");
          n.lastIndex = this.pos;
          var i = n.exec(this.input),
            r = i ? i.index : this.input.length;
          return this.pos < r && (t = this.input.substring(this.pos, r), this.pos = r), t
        }, this.record_tag = function(e) {
          this.tags[e + "count"] ? (this.tags[e + "count"]++, this.tags[e + this.tags[e + "count"]] = this.indent_level) : (this.tags[e + "count"] = 1, this.tags[e + this.tags[e + "count"]] = this.indent_level), this.tags[e + this.tags[e + "count"] + "parent"] = this.tags.parent, this.tags.parent = e + this.tags[e + "count"]
        }, this.retrieve_tag = function(e) {
          if (this.tags[e + "count"]) {
            for (var t = this.tags.parent; t && e + this.tags[e + "count"] !== t;) t = this.tags[t + "parent"];
            t && (this.indent_level = this.tags[e + this.tags[e + "count"]], this.tags.parent = this.tags[t + "parent"]), delete this.tags[e + this.tags[e + "count"] + "parent"], delete this.tags[e + this.tags[e + "count"]], 1 === this.tags[e + "count"] ? delete this.tags[e + "count"] : this.tags[e + "count"]--
          }
        }, this.indent_to_tag = function(e) {
          if (this.tags[e + "count"]) {
            for (var t = this.tags.parent; t && e + this.tags[e + "count"] !== t;) t = this.tags[t + "parent"];
            t && (this.indent_level = this.tags[e + this.tags[e + "count"]])
          }
        }, this.get_tag = function(e) {
          var t, n, i, r, a = "",
            o = [],
            s = "",
            l = !1,
            c = !0,
            u = !1,
            h = this.pos,
            d = this.line_char_count,
            p = !1;
          e = void 0 !== e && e;
          do {
            if (this.pos >= this.input.length) return e && (this.pos = h, this.line_char_count = d), o.length ? o.join("") : ["", "TK_EOF"];
            if (a = this.input.charAt(this.pos), this.pos++, this.Utils.in_array(a, this.Utils.whitespace)) l = !0;
            else {
              if ("'" !== a && '"' !== a || (a += this.get_unformatted(a), l = !0), "=" === a && (l = !1), r = this.input.substr(this.pos - 1), !C || !u || p || ">" !== a && "/" !== a || r.match(/^\/?\s*>/) && (l = !1, p = !0, this.print_newline(!1, o), this.print_indentation(o)), o.length && "=" !== o[o.length - 1] && ">" !== a && l) {
                var f = this.space_or_wrap(o),
                  g = f && "/" !== a && !S;
                if (l = !1, S && "/" !== a) {
                  var m = !1;
                  if (C && c) {
                    var v = null !== r.match(/^\S*(="([^"]|\\")*")?\s*\/?\s*>/);
                    m = !v
                  }
                  c && !m || (this.print_newline(!1, o), this.print_indentation(o), g = !0)
                }
                if (g) {
                  u = !0;
                  var T = k;
                  A && (T = o.indexOf(" ") + 1);
                  for (var w = 0; w < T; w++) o.push(" ")
                }
                if (c)
                  for (var x = 0; x < o.length; x++)
                    if (" " === o[x]) {
                      c = !1;
                      break
                    }
              }
              if (_ && "<" === i && a + this.input.charAt(this.pos) === "{{" && (a += this.get_unformatted("}}"), o.length && " " !== o[o.length - 1] && "<" !== o[o.length - 1] && (a = " " + a), l = !0), "<" !== a || i || (t = this.pos - 1, i = "<"), _ && !i && o.length >= 2 && "{" === o[o.length - 1] && "{" === o[o.length - 2] && (t = "#" === a || "/" === a || "!" === a ? this.pos - 3 : this.pos - 2, i = "{"), this.line_char_count++, o.push(a), o[1] && ("!" === o[1] || "?" === o[1] || "%" === o[1])) {
                o = [this.get_comment(t)];
                break
              }
              if (_ && o[1] && "{" === o[1] && o[2] && "!" === o[2]) {
                o = [this.get_comment(t)];
                break
              }
              if (_ && "{" === i && o.length > 2 && "}" === o[o.length - 2] && "}" === o[o.length - 1]) break
            }
          } while (">" !== a);
          var E, O, I = o.join("");
          E = I.indexOf(" ") !== -1 ? I.indexOf(" ") : I.indexOf("\n") !== -1 ? I.indexOf("\n") : "{" === I.charAt(0) ? I.indexOf("}") : I.indexOf(">"), O = "<" !== I.charAt(0) && _ ? "#" === I.charAt(2) ? 3 : 2 : 1;
          var L = I.substring(O, E).toLowerCase();
          return "/" === I.charAt(I.length - 2) || this.Utils.in_array(L, this.Utils.single_token) ? e || (this.tag_type = "SINGLE") : _ && "{" === I.charAt(0) && "else" === L ? e || (this.indent_to_tag("if"), this.tag_type = "HANDLEBARS_ELSE", this.indent_content = !0, this.traverse_whitespace()) : this.is_unformatted(L, b) || this.is_unformatted(L, y) ? (s = this.get_unformatted("</" + L + ">", I), o.push(s), n = this.pos - 1, this.tag_type = "SINGLE") : "script" === L && (I.search("type") === -1 || I.search("type") > -1 && I.search(/\b(text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect)/) > -1) ? e || (this.record_tag(L), this.tag_type = "SCRIPT") : "style" === L && (I.search("type") === -1 || I.search("type") > -1 && I.search("text/css") > -1) ? e || (this.record_tag(L), this.tag_type = "STYLE") : "!" === L.charAt(0) ? e || (this.tag_type = "SINGLE", this.traverse_whitespace()) : e || ("/" === L.charAt(0) ? (this.retrieve_tag(L.substring(1)), this.tag_type = "END") : (this.record_tag(L), "html" !== L.toLowerCase() && (this.indent_content = !0), this.tag_type = "START"), this.traverse_whitespace() && this.space_or_wrap(o), this.Utils.in_array(L, this.Utils.extra_liners) && (this.print_newline(!1, this.output), this.output.length && "\n" !== this.output[this.output.length - 2] && this.print_newline(!0, this.output))), e && (this.pos = h, this.line_char_count = d), o.join("")
        }, this.get_comment = function(e) {
          var t = "",
            n = ">",
            i = !1;
          this.pos = e;
          var r = this.input.charAt(this.pos);
          for (this.pos++; this.pos <= this.input.length && (t += r, t.charAt(t.length - 1) !== n.charAt(n.length - 1) || t.indexOf(n) === -1);) !i && t.length < 10 && (0 === t.indexOf("<![if") ? (n = "<![endif]>", i = !0) : 0 === t.indexOf("<![cdata[") ? (n = "]]>", i = !0) : 0 === t.indexOf("<![") ? (n = "]>", i = !0) : 0 === t.indexOf("<!--") ? (n = "-->", i = !0) : 0 === t.indexOf("{{!--") ? (n = "--}}", i = !0) : 0 === t.indexOf("{{!") ? 5 === t.length && t.indexOf("{{!--") === -1 && (n = "}}", i = !0) : 0 === t.indexOf("<?") ? (n = "?>", i = !0) : 0 === t.indexOf("<%") && (n = "%>", i = !0)), r = this.input.charAt(this.pos), this.pos++;
          return t
        }, this.get_unformatted = function(e, t) {
          if (t && t.toLowerCase().indexOf(e) !== -1) return "";
          var i = "",
            r = "",
            a = !0,
            o = n(e);
          do {
            if (this.pos >= this.input.length) return r;
            if (i = this.input.charAt(this.pos), this.pos++, this.Utils.in_array(i, this.Utils.whitespace)) {
              if (!a) {
                this.line_char_count--;
                continue
              }
              if ("\n" === i || "\r" === i) {
                r += "\n", this.line_char_count = 0;
                continue
              }
            }
            r += i, o.add(i), this.line_char_count++, a = !0, _ && "{" === i && r.length && "{" === r.charAt(r.length - 2) && (r += this.get_unformatted("}}"))
          } while (o.doesNotMatch());
          return r
        }, this.get_token = function() {
          var e;
          if ("TK_TAG_SCRIPT" === this.last_token || "TK_TAG_STYLE" === this.last_token) {
            var t = this.last_token.substr(7);
            return e = this.get_contents_to(t), "string" != typeof e ? e : [e, "TK_" + t]
          }
          if ("CONTENT" === this.current_mode) return e = this.get_content(), "string" != typeof e ? e : [e, "TK_CONTENT"];
          if ("TAG" === this.current_mode) {
            if (e = this.get_tag(), "string" != typeof e) return e;
            var n = "TK_TAG_" + this.tag_type;
            return [e, n]
          }
        }, this.get_full_indent = function(e) {
          return e = this.indent_level + e || 0, e < 1 ? "" : Array(e + 1).join(this.indent_string)
        }, this.is_unformatted = function(e, t) {
          if (!this.Utils.in_array(e, t)) return !1;
          if ("a" !== e.toLowerCase() || !this.Utils.in_array("a", t)) return !0;
          var n = this.get_tag(!0),
            i = (n || "").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);
          return !(i && !this.Utils.in_array(i[1], t))
        }, this.printer = function(n, i, r, a, s) {
          this.input = n || "", this.input = this.input.replace(/\r\n|[\r\u2028\u2029]/g, "\n"), this.output = [], this.indent_character = i, this.indent_string = "", this.indent_size = r, this.brace_style = s, this.indent_level = void 0 === o.indent_level ? 0 : parseInt(o.indent_level, 10), this.wrap_line_length = a, this.line_char_count = 0;
          for (var l = 0; l < this.indent_size; l++) this.indent_string += this.indent_character;
          this.print_newline = function(e, n) {
            this.line_char_count = 0, n && n.length && (e || "\n" !== n[n.length - 1]) && ("\n" !== n[n.length - 1] && (n[n.length - 1] = t(n[n.length - 1])), n.push("\n"))
          }, this.print_indentation = function(e) {
            for (var t = 0; t < this.indent_level; t++) e.push(this.indent_string), this.line_char_count += this.indent_string.length
          }, this.print_token = function(t) {
            this.is_whitespace(t) && !this.output.length || ((t || "" !== t) && this.output.length && "\n" === this.output[this.output.length - 1] && (this.print_indentation(this.output), t = e(t)), this.print_token_raw(t))
          }, this.print_token_raw = function(e) {
            this.newlines > 0 && (e = t(e)), e && "" !== e && (e.length > 1 && "\n" === e.charAt(e.length - 1) ? (this.output.push(e.slice(0, -1)), this.print_newline(!1, this.output)) : this.output.push(e));
            for (var n = 0; n < this.newlines; n++) this.print_newline(n > 0, this.output);
            this.newlines = 0
          }, this.indent = function() {
            this.indent_level++
          }, this.unindent = function() {
            this.indent_level > 0 && this.indent_level--
          }
        }, this
      }
      var u, h, d, p, f, g, m, v, b, y, T, w, _, x, k, S, C, A, E, O, I;
      for (o = o || {}, o = n(o, "html"), void 0 !== o.wrap_line_length && 0 !== parseInt(o.wrap_line_length, 10) || void 0 === o.max_char || 0 === parseInt(o.max_char, 10) || (o.wrap_line_length = o.max_char), h = void 0 !== o.indent_inner_html && o.indent_inner_html, d = void 0 === o.indent_body_inner_html || o.indent_body_inner_html, p = void 0 === o.indent_head_inner_html || o.indent_head_inner_html, f = void 0 === o.indent_size ? 4 : parseInt(o.indent_size, 10), g = void 0 === o.indent_char ? " " : o.indent_char, v = void 0 === o.brace_style ? "collapse" : o.brace_style, m = 0 === parseInt(o.wrap_line_length, 10) ? 32786 : parseInt(o.wrap_line_length || 250, 10), b = o.unformatted || ["a", "abbr", "area", "audio", "b", "bdi", "bdo", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "map", "mark", "math", "meter", "noscript", "object", "output", "progress", "q", "ruby", "s", "samp", "select", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "var", "video", "wbr", "text", "acronym", "address", "big", "dt", "ins", "strike", "tt"], y = o.content_unformatted || ["pre"], T = void 0 === o.preserve_newlines || o.preserve_newlines, w = T ? isNaN(parseInt(o.max_preserve_newlines, 10)) ? 32786 : parseInt(o.max_preserve_newlines, 10) : 0, _ = void 0 !== o.indent_handlebars && o.indent_handlebars, x = void 0 === o.wrap_attributes ? "auto" : o.wrap_attributes, k = isNaN(parseInt(o.wrap_attributes_indent_size, 10)) ? f : parseInt(o.wrap_attributes_indent_size, 10), S = "force" === x.substr(0, "force".length), C = "force-expand-multiline" === x, A = "force-aligned" === x, E = void 0 !== o.end_with_newline && o.end_with_newline, O = "object" == typeof o.extra_liners && o.extra_liners ? o.extra_liners.concat() : "string" == typeof o.extra_liners ? o.extra_liners.split(",") : "head,body,/html".split(","), I = o.eol ? o.eol : "auto", o.indent_with_tabs && (g = "\t", f = 1), "auto" === I && (I = "\n", i && r.test(i || "") && (I = i.match(r)[0])), I = I.replace(/\\r/, "\r").replace(/\\n/, "\n"), i = i.replace(a, "\n"), u = new c, u.printer(i, g, f, m, v);;) {
        var L = u.get_token();
        if (u.token_text = L[0], u.token_type = L[1], "TK_EOF" === u.token_type) break;
        switch (u.token_type) {
          case "TK_TAG_START":
            u.print_newline(!1, u.output), u.print_token(u.token_text), u.indent_content && (!u.indent_body_inner_html && u.token_text.match(/<body(?:.*)>/) || !u.indent_head_inner_html && u.token_text.match(/<head(?:.*)>/) || u.indent(), u.indent_content = !1), u.current_mode = "CONTENT";
            break;
          case "TK_TAG_STYLE":
          case "TK_TAG_SCRIPT":
            u.print_newline(!1, u.output), u.print_token(u.token_text), u.current_mode = "CONTENT";
            break;
          case "TK_TAG_END":
            if ("TK_CONTENT" === u.last_token && "" === u.last_text) {
              var D = (u.token_text.match(/\w+/) || [])[0],
                N = null;
              u.output.length && (N = u.output[u.output.length - 1].match(/(?:<|{{#)\s*(\w+)/)), (null === N || N[1] !== D && !u.Utils.in_array(N[1], b)) && u.print_newline(!1, u.output)
            }
            u.print_token(u.token_text), u.current_mode = "CONTENT";
            break;
          case "TK_TAG_SINGLE":
            var W = u.token_text.match(/^\s*<([a-z-]+)/i);
            W && u.Utils.in_array(W[1], b) || u.print_newline(!1, u.output), u.print_token(u.token_text), u.current_mode = "CONTENT";
            break;
          case "TK_TAG_HANDLEBARS_ELSE":
            for (var j = !1, P = u.output.length - 1; P >= 0 && "\n" !== u.output[P]; P--)
              if (u.output[P].match(/{{#if/)) {
                j = !0;
                break
              }
            j || u.print_newline(!1, u.output), u.print_token(u.token_text), u.indent_content && (u.indent(), u.indent_content = !1), u.current_mode = "CONTENT";
            break;
          case "TK_TAG_HANDLEBARS_COMMENT":
            u.print_token(u.token_text), u.current_mode = "TAG";
            break;
          case "TK_CONTENT":
            u.print_token(u.token_text), u.current_mode = "TAG";
            break;
          case "TK_STYLE":
          case "TK_SCRIPT":
            if ("" !== u.token_text) {
              u.print_newline(!1, u.output);
              var q, U = u.token_text,
                R = 1;
              "TK_SCRIPT" === u.token_type ? q = "function" == typeof s && s : "TK_STYLE" === u.token_type && (q = "function" == typeof l && l), "keep" === o.indent_scripts ? R = 0 : "separate" === o.indent_scripts && (R = -u.indent_level);
              var M = u.get_full_indent(R);
              if (q) {
                var H = function() {
                  this.eol = "\n"
                };
                H.prototype = o;
                var z = new H;
                U = q(U.replace(/^\s*/, M), z)
              } else {
                var F = U.match(/^\s*/)[0],
                  K = F.match(/[^\n\r]*$/)[0].split(u.indent_string).length - 1,
                  V = u.get_full_indent(R - K);
                U = U.replace(/^\s*/, M).replace(/\r\n|\r|\n/g, "\n" + V).replace(/\s+$/, "")
              }
              U && (u.print_token_raw(U), u.print_newline(!0, u.output))
            }
            u.current_mode = "TAG";
            break;
          default:
            "" !== u.token_text && u.print_token(u.token_text)
        }
        u.last_token = u.token_type, u.last_text = u.token_text
      }
      var B = u.output.join("").replace(/[\r\n\t ]+$/, "");
      return E && (B += "\n"), "\n" !== I && (B = B.replace(/[\n]/g, I)), B
    }
    var r = /\r\n|[\n\r\u2028\u2029]/,
      a = new RegExp(r.source, "g");
    if ("function" == typeof define && define.amd) define("vscode-html-languageservice/beautify/beautify-html", ["require", "./beautify", "./beautify-css"], function(e) {
      var t = e("./beautify"),
        n = e("./beautify-css");
      return {
        html_beautify: function(e, r) {
          return i(e, r, t.js_beautify, n.css_beautify)
        }
      }
    });
    else if ("undefined" != typeof exports) {
      var o = require("./beautify.js"),
        s = require("./beautify-css.js");
      exports.html_beautify = function(e, t) {
        return i(e, t, o.js_beautify, s.css_beautify)
      }
    } else "undefined" != typeof window ? window.html_beautify = function(e, t) {
      return i(e, t, window.js_beautify, window.css_beautify)
    } : "undefined" != typeof global && (global.html_beautify = function(e, t) {
      return i(e, t, global.js_beautify, global.css_beautify)
    })
  }(),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/services/htmlFormatter", ["require", "exports", "vscode-languageserver-types", "../beautify/beautify-html", "../utils/strings"], e)
  }(function(e, t) {
    function n(e, t, n) {
      var h = e.getText(),
        d = !0,
        p = 0;
      if (t) {
        for (var f = e.offsetAt(t.start), g = f; g > 0 && s(h, g - 1);) g--;
        0 === g || o(h, g - 1) ? f = g : g < f && (f = g + 1);
        for (var m = e.offsetAt(t.end), v = m; v < h.length && s(h, v);) v++;
        if ((v === h.length || o(h, v)) && (m = v), t = l.Range.create(e.positionAt(f), e.positionAt(m)), d = m === h.length, h = h.substring(f, m), 0 !== f) {
          var b = e.offsetAt(l.Position.create(t.start.line, 0));
          p = a(e.getText(), b, n)
        }
      } else t = l.Range.create(l.Position.create(0, 0), e.positionAt(h.length));
      var y = {
          indent_size: n.insertSpaces ? n.tabSize : 1,
          indent_char: n.insertSpaces ? " " : "\t",
          indent_level: p,
          wrap_line_length: i(n, "wrapLineLength", 120),
          unformatted: r(n, "unformatted", void 0),
          content_unformatted: r(n, "contentUnformatted", void 0),
          indent_inner_html: i(n, "indentInnerHtml", !1),
          preserve_newlines: i(n, "preserveNewLines", !0),
          max_preserve_newlines: i(n, "maxPreserveNewLines", 32786),
          indent_handlebars: i(n, "indentHandlebars", !1),
          end_with_newline: d && i(n, "endWithNewline", !1),
          extra_liners: r(n, "extraLiners", void 0),
          wrap_attributes: i(n, "wrapAttributes", "auto"),
          eol: "\n"
        },
        T = c.html_beautify(h, y);
      if (p > 0 && 0 === t.start.character) {
        var w = n.insertSpaces ? u.repeat(" ", n.tabSize * p) : u.repeat("\t", p);
        T = w + T
      }
      return [{
        range: t,
        newText: T
      }]
    }

    function i(e, t, n) {
      if (e && e.hasOwnProperty(t)) {
        var i = e[t];
        if (null !== i) return i
      }
      return n
    }

    function r(e, t, n) {
      var r = i(e, t, null);
      return "string" == typeof r ? r.length > 0 ? r.split(",").map(function(e) {
        return e.trim().toLowerCase()
      }) : [] : n
    }

    function a(e, t, n) {
      for (var i = t, r = 0, a = n.tabSize || 4; i < e.length;) {
        var o = e.charAt(i);
        if (" " === o) r++;
        else {
          if ("\t" !== o) break;
          r += a
        }
        i++
      }
      return Math.floor(r / a)
    }

    function o(e, t) {
      return "\r\n".indexOf(e.charAt(t)) !== -1
    }

    function s(e, t) {
      return " \t".indexOf(e.charAt(t)) !== -1
    }
    var l = e("vscode-languageserver-types"),
      c = e("../beautify/beautify-html"),
      u = e("../utils/strings");
    t.format = n
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-uri/index", ["require", "exports"], e)
  }(function(e, t) {
    function n(e) {
      return "%" + e.charCodeAt(0).toString(16).toUpperCase()
    }

    function i(e) {
      return encodeURIComponent(e).replace(/[!'()*]/g, n)
    }

    function r(e) {
      return e.replace(/[#?]/, n)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = function() {
      function e() {
        this._scheme = e._empty, this._authority = e._empty, this._path = e._empty, this._query = e._empty, this._fragment = e._empty, this._formatted = null, this._fsPath = null
      }
      return e.isUri = function(t) {
        return t instanceof e || !!t && ("string" == typeof t.authority && "string" == typeof t.fragment && "string" == typeof t.path && "string" == typeof t.query && "string" == typeof t.scheme)
      }, Object.defineProperty(e.prototype, "scheme", {
        get: function() {
          return this._scheme
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "authority", {
        get: function() {
          return this._authority
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "path", {
        get: function() {
          return this._path
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "query", {
        get: function() {
          return this._query
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "fragment", {
        get: function() {
          return this._fragment
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "fsPath", {
        get: function() {
          if (!this._fsPath) {
            var t;
            t = this._authority && this._path && "file" === this.scheme ? "//" + this._authority + this._path : e._driveLetterPath.test(this._path) ? this._path[1].toLowerCase() + this._path.substr(2) : this._path, o && (t = t.replace(/\//g, "\\")), this._fsPath = t
          }
          return this._fsPath
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype["with"] = function(t) {
        if (!t) return this;
        var n = t.scheme,
          i = t.authority,
          r = t.path,
          a = t.query,
          o = t.fragment;
        if (void 0 === n ? n = this.scheme : null === n && (n = ""), void 0 === i ? i = this.authority : null === i && (i = ""), void 0 === r ? r = this.path : null === r && (r = ""), void 0 === a ? a = this.query : null === a && (a = ""), void 0 === o ? o = this.fragment : null === o && (o = ""), n === this.scheme && i === this.authority && r === this.path && a === this.query && o === this.fragment) return this;
        var s = new e;
        return s._scheme = n, s._authority = i, s._path = r, s._query = a, s._fragment = o, e._validate(s), s
      }, e.parse = function(t) {
        var n = new e,
          i = e._parseComponents(t);
        return n._scheme = i.scheme, n._authority = decodeURIComponent(i.authority), n._path = decodeURIComponent(i.path), n._query = decodeURIComponent(i.query), n._fragment = decodeURIComponent(i.fragment), e._validate(n), n
      }, e.file = function(t) {
        var n = new e;
        if (n._scheme = "file", o && (t = t.replace(/\\/g, e._slash)), t[0] === e._slash && t[0] === t[1]) {
          var i = t.indexOf(e._slash, 2);
          i === -1 ? n._authority = t.substring(2) : (n._authority = t.substring(2, i), n._path = t.substring(i))
        } else n._path = t;
        return n._path[0] !== e._slash && (n._path = e._slash + n._path), e._validate(n), n
      }, e._parseComponents = function(t) {
        var n = {
            scheme: e._empty,
            authority: e._empty,
            path: e._empty,
            query: e._empty,
            fragment: e._empty
          },
          i = e._regexp.exec(t);
        return i && (n.scheme = i[2] || n.scheme, n.authority = i[4] || n.authority, n.path = i[5] || n.path, n.query = i[7] || n.query, n.fragment = i[9] || n.fragment), n
      }, e.from = function(t) {
        return (new e)["with"](t)
      }, e._validate = function(t) {
        if (t.scheme && !e._schemePattern.test(t.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
        if (t.path)
          if (t.authority) {
            if (!e._singleSlashStart.test(t.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
          } else if (e._doubleSlashStart.test(t.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
      }, e.prototype.toString = function(t) {
        return void 0 === t && (t = !1), t ? e._asFormatted(this, !0) : (this._formatted || (this._formatted = e._asFormatted(this, !1)), this._formatted)
      }, e._asFormatted = function(t, n) {
        var a = n ? r : i,
          o = [],
          s = t.scheme,
          l = t.authority,
          c = t.path,
          u = t.query,
          h = t.fragment;
        if (s && o.push(s, ":"), (l || "file" === s) && o.push("//"), l) {
          l = l.toLowerCase();
          var d = l.indexOf(":");
          d === -1 ? o.push(a(l)) : o.push(a(l.substr(0, d)), l.substr(d))
        }
        if (c) {
          var p = e._upperCaseDrive.exec(c);
          p && (c = p[1] ? "/" + p[2].toLowerCase() + c.substr(3) : p[2].toLowerCase() + c.substr(2));
          for (var f = 0;;) {
            var d = c.indexOf(e._slash, f);
            if (d === -1) {
              o.push(a(c.substring(f)));
              break
            }
            o.push(a(c.substring(f, d)), e._slash), f = d + 1
          }
        }
        return u && o.push("?", a(u)), h && o.push("#", a(h)), o.join(e._empty)
      }, e.prototype.toJSON = function() {
        var e = {
          fsPath: this.fsPath,
          external: this.toString(),
          $mid: 1
        };
        return this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e
      }, e.revive = function(t) {
        var n = new e;
        return n._scheme = t.scheme || e._empty, n._authority = t.authority || e._empty, n._path = t.path || e._empty, n._query = t.query || e._empty, n._fragment = t.fragment || e._empty, n._fsPath = t.fsPath, n._formatted = t.external, e._validate(n), n
      }, e
    }();
    a._empty = "", a._slash = "/", a._regexp = /^(([^:\/?#]+?):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, a._driveLetterPath = /^\/[a-zA-z]:/, a._upperCaseDrive = /^(\/)?([A-Z]:)/, a._schemePattern = /^\w[\w\d+.-]*$/, a._singleSlashStart = /^\//, a._doubleSlashStart = /^\/\//, t["default"] = a;
    var o;
    if ("object" == typeof process) o = "win32" === process.platform;
    else if ("object" == typeof navigator) {
      var s = navigator.userAgent;
      o = s.indexOf("Windows") >= 0
    }
  }), define("vscode-uri", ["vscode-uri/index"], function(e) {
    return e
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/services/htmlLinks", ["require", "exports", "../parser/htmlScanner", "vscode-languageserver-types", "vscode-uri"], e)
  }(function(e, t) {
    function n(e) {
      return e.replace(/^'([^']*)'$/, function(e, t) {
        return t
      }).replace(/^"([^"]*)"$/, function(e, t) {
        return t
      })
    }

    function i(e, t, n, i) {
      if (/^\s*javascript\:/i.test(t) || /^\s*\#/i.test(t) || /[\n\r]/.test(t)) return null;
      if (t = t.replace(/^\s*/g, ""), /^https?:\/\//i.test(t) || /^file:\/\//i.test(t)) return t;
      if (/^\/\//i.test(t)) {
        var r = "http";
        return "https" === e.scheme && (r = "https"), r + ":" + t.replace(/^\s*/g, "")
      }
      return n ? n.resolveReference(t, i) : t
    }

    function r(e, t, r, o, s, u) {
      var h = c["default"].parse(e.uri),
        d = n(r);
      if (0 === d.length) return null;
      d.length < r.length && (o++, s--);
      var p = i(h, d, t, u);
      return p && a(p) ? {
        range: l.Range.create(e.positionAt(o), e.positionAt(s)),
        target: p
      } : null
    }

    function a(e) {
      try {
        return c["default"].parse(e), !0
      } catch (t) {
        return !1
      }
    }

    function o(e, t) {
      for (var i = [], a = s.createScanner(e.getText(), 0), o = a.scan(), l = !1, c = !1, u = void 0; o !== s.TokenType.EOS;) {
        switch (o) {
          case s.TokenType.StartTag:
            if (!u) {
              var h = a.getTokenText().toLowerCase();
              c = "base" === h
            }
            break;
          case s.TokenType.AttributeName:
            var d = a.getTokenText().toLowerCase();
            l = "src" === d || "href" === d;
            break;
          case s.TokenType.AttributeValue:
            if (l) {
              var p = a.getTokenText(),
                f = r(e, t, p, a.getTokenOffset(), a.getTokenEnd(), u);
              f && i.push(f), c && "undefined" == typeof u && (u = n(p)), c = !1, l = !1
            }
        }
        o = a.scan()
      }
      return i
    }
    var s = e("../parser/htmlScanner"),
      l = e("vscode-languageserver-types"),
      c = e("vscode-uri");
    t.findDocumentLinks = o
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/services/htmlHighlighting", ["require", "exports", "../parser/htmlScanner", "vscode-languageserver-types"], e)
  }(function(e, t) {
    function n(e, t, n) {
      var i = e.offsetAt(t),
        l = n.findNodeAt(i);
      if (!l.tag) return [];
      var c = [],
        u = a(o.TokenType.StartTag, e, l.start),
        h = "number" == typeof l.endTagStart && a(o.TokenType.EndTag, e, l.endTagStart);
      return (u && r(u, t) || h && r(h, t)) && (u && c.push({
        kind: s.DocumentHighlightKind.Read,
        range: u
      }), h && c.push({
        kind: s.DocumentHighlightKind.Read,
        range: h
      })), c
    }

    function i(e, t) {
      return e.line < t.line || e.line === t.line && e.character <= t.character
    }

    function r(e, t) {
      return i(e.start, t) && i(t, e.end)
    }

    function a(e, t, n) {
      for (var i = o.createScanner(t.getText(), n), r = i.scan(); r !== o.TokenType.EOS && r !== e;) r = i.scan();
      return r !== o.TokenType.EOS ? {
        start: t.positionAt(i.getTokenOffset()),
        end: t.positionAt(i.getTokenEnd())
      } : null
    }
    var o = e("../parser/htmlScanner"),
      s = e("vscode-languageserver-types");
    t.findDocumentHighlights = n
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/services/htmlSymbolsProvider", ["require", "exports", "vscode-languageserver-types"], e)
  }(function(e, t) {
    function n(e, t) {
      var n = [];
      return t.roots.forEach(function(t) {
        i(e, t, "", n)
      }), n
    }

    function i(e, t, n, o) {
      var s = r(t),
        l = a.Location.create(e.uri, a.Range.create(e.positionAt(t.start), e.positionAt(t.end))),
        c = {
          name: s,
          location: l,
          containerName: n,
          kind: a.SymbolKind.Field
        };
      o.push(c), t.children.forEach(function(t) {
        i(e, t, s, o)
      })
    }

    function r(e) {
      var t = e.tag;
      if (e.attributes) {
        var n = e.attributes.id,
          i = e.attributes["class"];
        n && (t += "#" + n.replace(/[\"\']/g, "")), i && (t += i.replace(/[\"\']/g, "").split(/\s+/).map(function(e) {
          return "." + e
        }).join(""))
      }
      return t
    }
    var a = e("vscode-languageserver-types");
    t.findDocumentSymbols = n
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vscode-html-languageservice/htmlLanguageService", ["require", "exports", "./parser/htmlScanner", "./parser/htmlParser", "./services/htmlCompletion", "./services/htmlHover", "./services/htmlFormatter", "./services/htmlLinks", "./services/htmlHighlighting", "./services/htmlSymbolsProvider", "vscode-languageserver-types"], e)
  }(function(e, t) {
    function n() {
      return {
        createScanner: i.createScanner,
        parseHTMLDocument: function(e) {
          return r.parse(e.getText())
        },
        doComplete: a.doComplete,
        doHover: o.doHover,
        format: s.format,
        findDocumentHighlights: c.findDocumentHighlights,
        findDocumentLinks: l.findDocumentLinks,
        findDocumentSymbols: u.findDocumentSymbols
      }
    }
    var i = e("./parser/htmlScanner"),
      r = e("./parser/htmlParser"),
      a = e("./services/htmlCompletion"),
      o = e("./services/htmlHover"),
      s = e("./services/htmlFormatter"),
      l = e("./services/htmlLinks"),
      c = e("./services/htmlHighlighting"),
      u = e("./services/htmlSymbolsProvider"),
      h = e("vscode-languageserver-types");
    t.TextDocument = h.TextDocument, t.Position = h.Position, t.CompletionItem = h.CompletionItem, t.CompletionList = h.CompletionList, t.Range = h.Range, t.SymbolInformation = h.SymbolInformation, t.Diagnostic = h.Diagnostic, t.TextEdit = h.TextEdit, t.DocumentHighlight = h.DocumentHighlight, t.FormattingOptions = h.FormattingOptions, t.MarkedString = h.MarkedString, t.DocumentLink = h.DocumentLink;
    var d;
    ! function(e) {
      e[e.StartCommentTag = 0] = "StartCommentTag", e[e.Comment = 1] = "Comment", e[e.EndCommentTag = 2] = "EndCommentTag", e[e.StartTagOpen = 3] = "StartTagOpen", e[e.StartTagClose = 4] = "StartTagClose", e[e.StartTagSelfClose = 5] = "StartTagSelfClose", e[e.StartTag = 6] = "StartTag", e[e.EndTagOpen = 7] = "EndTagOpen", e[e.EndTagClose = 8] = "EndTagClose", e[e.EndTag = 9] = "EndTag", e[e.DelimiterAssign = 10] = "DelimiterAssign", e[e.AttributeName = 11] = "AttributeName", e[e.AttributeValue = 12] = "AttributeValue", e[e.StartDoctypeTag = 13] = "StartDoctypeTag", e[e.Doctype = 14] = "Doctype", e[e.EndDoctypeTag = 15] = "EndDoctypeTag", e[e.Content = 16] = "Content", e[e.Whitespace = 17] = "Whitespace", e[e.Unknown = 18] = "Unknown", e[e.Script = 19] = "Script", e[e.Styles = 20] = "Styles", e[e.EOS = 21] = "EOS"
    }(d = t.TokenType || (t.TokenType = {}));
    var p;
    ! function(e) {
      e[e.WithinContent = 0] = "WithinContent", e[e.AfterOpeningStartTag = 1] = "AfterOpeningStartTag", e[e.AfterOpeningEndTag = 2] = "AfterOpeningEndTag", e[e.WithinDoctype = 3] = "WithinDoctype", e[e.WithinTag = 4] = "WithinTag", e[e.WithinEndTag = 5] = "WithinEndTag", e[e.WithinComment = 6] = "WithinComment", e[e.WithinScriptContent = 7] = "WithinScriptContent", e[e.WithinStyleContent = 8] = "WithinStyleContent", e[e.AfterAttributeName = 9] = "AfterAttributeName", e[e.BeforeAttributeValue = 10] = "BeforeAttributeValue"
    }(p = t.ScannerState || (t.ScannerState = {})), t.getLanguageService = n
  }), define("vscode-html-languageservice", ["vscode-html-languageservice/htmlLanguageService"], function(e) {
    return e
  }),
  function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t)
    } else "function" == typeof define && define.amd && define("vs/language/html/htmlWorker", ["require", "exports", "vscode-html-languageservice", "vscode-languageserver-types"], e)
  }(function(e, t) {
    function n(e, t) {
      return new o(e, t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = monaco.Promise,
      r = e("vscode-html-languageservice"),
      a = e("vscode-languageserver-types"),
      o = function() {
        function e(e, t) {
          this._ctx = e, this._languageSettings = t.languageSettings, this._languageId = t.languageId, this._languageService = r.getLanguageService()
        }
        return e.prototype.doValidation = function(e) {
          return i.as([])
        }, e.prototype.doComplete = function(e, t) {
          var n = this._getTextDocument(e),
            r = this._languageService.parseHTMLDocument(n);
          return i.as(this._languageService.doComplete(n, t, r, this._languageSettings && this._languageSettings.suggest))
        }, e.prototype.format = function(e, t, n) {
          var r = this._getTextDocument(e),
            a = this._languageService.format(r, t, this._languageSettings && this._languageSettings.format);
          return i.as(a)
        }, e.prototype.findDocumentHighlights = function(e, t) {
          var n = this._getTextDocument(e),
            r = this._languageService.parseHTMLDocument(n),
            a = this._languageService.findDocumentHighlights(n, t, r);
          return i.as(a)
        }, e.prototype.findDocumentLinks = function(e) {
          var t = this._getTextDocument(e),
            n = this._languageService.findDocumentLinks(t, null);
          return i.as(n)
        }, e.prototype._getTextDocument = function(e) {
          for (var t = this._ctx.getMirrorModels(), n = 0, i = t; n < i.length; n++) {
            var r = i[n];
            if (r.uri.toString() === e) return a.TextDocument.create(e, this._languageId, r.version, r.getValue())
          }
          return null
        }, e
      }();
    t.HTMLWorker = o, t.create = n
  });