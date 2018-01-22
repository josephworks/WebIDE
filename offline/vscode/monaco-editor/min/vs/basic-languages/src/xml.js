/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.9.0(e162b4ba29044167bc7181c42b3270fa8a467424)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/src/xml", ["require", "exports"], function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.conf = {
    comments: {
      blockComment: ["\x3c!--", "--\x3e"]
    },
    brackets: [
      ["<", ">"]
    ],
    autoClosingPairs: [{
      open: "<",
      close: ">"
    }, {
      open: "'",
      close: "'"
    }, {
      open: '"',
      close: '"'
    }],
    surroundingPairs: [{
      open: "<",
      close: ">"
    }, {
      open: "'",
      close: "'"
    }, {
      open: '"',
      close: '"'
    }]
  }, t.language = {
    defaultToken: "",
    tokenPostfix: ".xml",
    ignoreCase: !0,
    qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
    tokenizer: {
      root: [
        [/[^<&]+/, ""], {
          include: "@whitespace"
        },
        [/(<)(@qualifiedName)/, [{
          token: "delimiter"
        }, {
          token: "tag",
          next: "@tag"
        }]],
        [/(<\/)(@qualifiedName)(\s*)(>)/, [{
          token: "delimiter"
        }, {
          token: "tag"
        }, "", {
          token: "delimiter"
        }]],
        [/(<\?)(@qualifiedName)/, [{
          token: "delimiter"
        }, {
          token: "metatag",
          next: "@tag"
        }]],
        [/(<\!)(@qualifiedName)/, [{
          token: "delimiter"
        }, {
          token: "metatag",
          next: "@tag"
        }]],
        [/<\!\[CDATA\[/, {
          token: "delimiter.cdata",
          next: "@cdata"
        }],
        [/&\w+;/, "string.escape"]
      ],
      cdata: [
        [/[^\]]+/, ""],
        [/\]\]>/, {
          token: "delimiter.cdata",
          next: "@pop"
        }],
        [/\]/, ""]
      ],
      tag: [
        [/[ \t\r\n]+/, ""],
        [/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/, ["attribute.name", "", "attribute.value"]],
        [/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/, ["attribute.name", "", "attribute.value"]],
        [/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/, ["attribute.name", "", "attribute.value"]],
        [/@qualifiedName/, "attribute.name"],
        [/\?>/, {
          token: "delimiter",
          next: "@pop"
        }],
        [/(\/)(>)/, [{
          token: "tag"
        }, {
          token: "delimiter",
          next: "@pop"
        }]],
        [/>/, {
          token: "delimiter",
          next: "@pop"
        }]
      ],
      whitespace: [
        [/[ \t\r\n]+/, ""],
        [/<!--/, {
          token: "comment",
          next: "@comment"
        }]
      ],
      comment: [
        [/[^<\-]+/, "comment.content"],
        [/-->/, {
          token: "comment",
          next: "@pop"
        }],
        [/<!--/, "comment.content.invalid"],
        [/[<\-]/, "comment.content"]
      ]
    }
  }
});
