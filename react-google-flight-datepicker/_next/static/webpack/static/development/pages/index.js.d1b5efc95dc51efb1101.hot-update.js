webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./pages/Props.module.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./pages/Props.module.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Props_container__1FwGb {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n\n.Props_container__1FwGb tr {\n  color: black;\n  background-color: white;\n  border-top: 1px solid #c6cbd1;\n}\n\n.Props_container__1FwGb tr:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n\n.Props_container__1FwGb td, .Props_container__1FwGb th {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n", "",{"version":3,"sources":["Props.module.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;AAC3B","file":"Props.module.css","sourcesContent":[".container {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n\n.container tr {\n  color: black;\n  background-color: white;\n  border-top: 1px solid #c6cbd1;\n}\n\n.container tr:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n\n.container td, .container th {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n"]}]);
// Exports
exports.locals = {
	"container": "Props_container__1FwGb"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/prism-react-renderer/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/prism-react-renderer/dist/index.js ***!
  \*********************************************************/
/*! exports provided: Prism, default, defaultProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony import */ var _prism_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prism/index.js */ "./node_modules/prism-react-renderer/prism/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prism", function() { return _prism_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes/duotoneDark */ "./node_modules/prism-react-renderer/themes/duotoneDark/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);





var defaultProps = {
  // $FlowFixMe
  Prism: _prism_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  theme: _themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1__["default"]
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight =
/*@__PURE__*/
function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? Prism.tokenize(code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Highlight);



/***/ }),

/***/ "./node_modules/prism-react-renderer/prism/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/prism-react-renderer/prism/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

/**
 * prism-react-renderer:
 * This file has been modified to remove:
 * - globals and window dependency
 * - worker support
 * - highlightAll and other element dependent methods
 * - _.hooks helpers
 * - UMD/node-specific hacks
 * It has also been run through prettier
 */
var Prism = function () {
  var uniqueId = 0;
  var _ = {
    util: {
      encode: function (tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
        } else if (_.util.type(tokens) === "Array") {
          return tokens.map(_.util.encode);
        } else {
          return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }
      },
      type: function (o) {
        return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
      },
      objId: function (obj) {
        if (!obj["__id"]) {
          Object.defineProperty(obj, "__id", {
            value: ++uniqueId
          });
        }

        return obj["__id"];
      },
      // Deep clone a language definition (e.g. to extend it)
      clone: function (o, visited) {
        var type = _.util.type(o);

        visited = visited || {};

        switch (type) {
          case "Object":
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = {};
            visited[_.util.objId(o)] = clone;

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = _.util.clone(o[key], visited);
              }
            }

            return clone;

          case "Array":
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = [];
            visited[_.util.objId(o)] = clone;
            o.forEach(function (v, i) {
              clone[i] = _.util.clone(v, visited);
            });
            return clone;
        }

        return o;
      }
    },
    languages: {
      extend: function (id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need anobject and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before. If not provided, the function appends instead.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */
      insertBefore: function (inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];

        if (arguments.length == 2) {
          insert = arguments[1];

          for (var newToken in insert) {
            if (insert.hasOwnProperty(newToken)) {
              grammar[newToken] = insert[newToken];
            }
          }

          return grammar;
        }

        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }

            ret[token] = grammar[token];
          }
        } // Update references in other language definitions


        _.languages.DFS(_.languages, function (key, value) {
          if (value === root[inside] && key != inside) {
            this[key] = ret;
          }
        });

        return root[inside] = ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function (o, callback, type, visited) {
        visited = visited || {};

        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);

            if (_.util.type(o[i]) === "Object" && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, null, visited);
            } else if (_.util.type(o[i]) === "Array" && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlight: function (text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };
      env.tokens = _.tokenize(env.code, env.grammar);
      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
      var Token = _.Token;

      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }

        if (token == target) {
          return;
        }

        var patterns = grammar[token];
        patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

        for (var j = 0; j < patterns.length; ++j) {
          var pattern = patterns[j],
              inside = pattern.inside,
              lookbehind = !!pattern.lookbehind,
              greedy = !!pattern.greedy,
              lookbehindLength = 0,
              alias = pattern.alias;

          if (greedy && !pattern.pattern.global) {
            // Without the global flag, lastIndex won't work
            var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
            pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
          }

          pattern = pattern.pattern || pattern; // Don’t cache length as it changes during the loop

          for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
            var str = strarr[i];

            if (strarr.length > text.length) {
              // Something went terribly wrong, ABORT, ABORT!
              return;
            }

            if (str instanceof Token) {
              continue;
            }

            if (greedy && i != strarr.length - 1) {
              pattern.lastIndex = pos;
              var match = pattern.exec(text);

              if (!match) {
                break;
              }

              var from = match.index + (lookbehind ? match[1].length : 0),
                  to = match.index + match[0].length,
                  k = i,
                  p = pos;

              for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                p += strarr[k].length; // Move the index i to the element in strarr that is closest to from

                if (from >= p) {
                  ++i;
                  pos = p;
                }
              } // If strarr[i] is a Token, then the match starts inside another Token, which is invalid


              if (strarr[i] instanceof Token) {
                continue;
              } // Number of tokens to delete and replace with the new match


              delNum = k - i;
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              pattern.lastIndex = 0;
              var match = pattern.exec(str),
                  delNum = 1;
            }

            if (!match) {
              if (oneshot) {
                break;
              }

              continue;
            }

            if (lookbehind) {
              lookbehindLength = match[1] ? match[1].length : 0;
            }

            var from = match.index + lookbehindLength,
                match = match[0].slice(lookbehindLength),
                to = from + match.length,
                before = str.slice(0, from),
                after = str.slice(to);
            var args = [i, delNum];

            if (before) {
              ++i;
              pos += before.length;
              args.push(before);
            }

            var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
            args.push(wrapped);

            if (after) {
              args.push(after);
            }

            Array.prototype.splice.apply(strarr, args);

            if (delNum != 1) {
              _.matchGrammar(text, strarr, grammar, i, pos, true, token);
            }

            if (oneshot) {
              break;
            }
          }
        }
      }
    },
    hooks: {
      add: function () {}
    },
    tokenize: function (text, grammar, language) {
      var strarr = [text];
      var rest = grammar.rest;

      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      _.matchGrammar(text, strarr, grammar, 0, 0, false);

      return strarr;
    }
  };

  var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
    this.type = type;
    this.content = content;
    this.alias = alias; // Copy of the full string this token was created from

    this.length = (matchedStr || "").length | 0;
    this.greedy = !!greedy;
  };

  Token.stringify = function (o, language, parent) {
    if (typeof o == "string") {
      return o;
    }

    if (_.util.type(o) === "Array") {
      return o.map(function (element) {
        return Token.stringify(element, language, o);
      }).join("");
    }

    var env = {
      type: o.type,
      content: Token.stringify(o.content, language, parent),
      tag: "span",
      classes: ["token", o.type],
      attributes: {},
      language: language,
      parent: parent
    };

    if (o.alias) {
      var aliases = _.util.type(o.alias) === "Array" ? o.alias : [o.alias];
      Array.prototype.push.apply(env.classes, aliases);
    }

    var attributes = Object.keys(env.attributes).map(function (name) {
      return name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");
    return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + (attributes ? " " + attributes : "") + ">" + env.content + "</" + env.tag + ">";
  };

  return _;
}();

/* This content is auto-generated to include some prismjs language components: */

/* "prismjs/components/prism-markup" */

Prism.languages.markup = {
  'comment': /<!--[\s\S]*?-->/,
  'prolog': /<\?[\s\S]+?\?>/,
  'doctype': /<!DOCTYPE[\s\S]+?>/i,
  'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          'punctuation': [/^=/, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: true
          }]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': /&#?[\da-z]{1,8};/i
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    Prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
/* "prismjs/components/prism-bash" */

(function (Prism) {
  // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
  // + LC_ALL, RANDOM, REPLY, SECONDS.
  // + make sure PS1..4 are here as they are not always set,
  // - some useless things.
  var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
  var insideString = {
    'environment': {
      pattern: RegExp("\\$" + envVars),
      alias: 'constant'
    },
    'variable': [// [0]: Arithmetic Environment
    {
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        'variable': [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        'operator': /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        'punctuation': /\(\(?|\)\)?|,|;/
      }
    }, // [1]: Command Substitution
    {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        'variable': /^\$\(|^`|\)$|`$/
      }
    }, // [2]: Brace expansion
    {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        'punctuation': /[\[\]]/,
        'environment': {
          pattern: RegExp("(\\{)" + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
  };
  Prism.languages.bash = {
    'shebang': {
      pattern: /^#!\s*\/.*/,
      alias: 'important'
    },
    'comment': {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    'function-name': [// a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not “foo {”
    {
      // a) and c)
      pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: 'function'
    }, {
      // b)
      pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
      alias: 'function'
    }],
    // Highlight variable names as variables in for and select beginnings.
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: true
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        'environment': {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      },
      alias: 'variable',
      lookbehind: true
    },
    'string': [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, // Here-document with quotes around the tag
    // → No expansion (so no “inside”).
    {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true
    }, // “Normal” string
    {
      pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
      greedy: true,
      inside: insideString
    }],
    'environment': {
      pattern: RegExp("\\$?" + envVars),
      alias: 'constant'
    },
    'variable': insideString.variable,
    'function': {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'keyword': {
      pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    'builtin': {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
      lookbehind: true,
      // Alias added to make those easier to distinguish from strings.
      alias: 'class-name'
    },
    'boolean': {
      pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'file-descriptor': {
      pattern: /\B&\d\b/,
      alias: 'important'
    },
    'operator': {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
      inside: {
        'file-descriptor': {
          pattern: /^\d/,
          alias: 'important'
        }
      }
    },
    'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    'number': {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  /* Patterns in command substitution. */

  var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
  var inside = insideString.variable[1].inside;

  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
  }

  Prism.languages.shell = Prism.languages.bash;
})(Prism);
/* "prismjs/components/prism-clike" */


Prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: true,
    inside: {
      punctuation: /[.\\]/
    }
  },
  'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(?:true|false)\b/,
  'function': /\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  'punctuation': /[{}[\];(),.:]/
};
/* "prismjs/components/prism-c" */

Prism.languages.c = Prism.languages.extend('clike', {
  'class-name': {
    pattern: /(\b(?:enum|struct)\s+)\w+/,
    lookbehind: true
  },
  'keyword': /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
  'number': /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
});
Prism.languages.insertBefore('c', 'string', {
  'macro': {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    alias: 'property',
    inside: {
      // highlight the path of the include statement as a string
      'string': {
        pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
        lookbehind: true
      },
      // highlight macro directives as keywords
      'directive': {
        pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
        lookbehind: true,
        alias: 'keyword'
      }
    }
  },
  // highlight predefined macros as constants
  'constant': /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
});
delete Prism.languages.c['boolean'];
/* "prismjs/components/prism-cpp" */

Prism.languages.cpp = Prism.languages.extend('c', {
  'class-name': {
    pattern: /(\b(?:class|enum|struct)\s+)\w+/,
    lookbehind: true
  },
  'keyword': /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
  'number': {
    pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
    greedy: true
  },
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
  'boolean': /\b(?:true|false)\b/
});
Prism.languages.insertBefore('cpp', 'string', {
  'raw-string': {
    pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
    alias: 'string',
    greedy: true
  }
});
/* "prismjs/components/prism-css" */

(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        'rule': /@[\w-]+/ // See rest below

      }
    },
    'url': {
      pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/
      }
    },
    'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
    'string': {
      pattern: string,
      greedy: true
    },
    'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    'important': /!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    Prism.languages.insertBefore('inside', 'attr-value', {
      'style-attr': {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
          'attr-name': {
            pattern: /^\s*style/i,
            inside: markup.tag.inside
          },
          'punctuation': /^\s*=\s*['"]|['"]\s*$/,
          'attr-value': {
            pattern: /.+/i,
            inside: Prism.languages.css
          }
        },
        alias: 'language-css'
      }
    }, markup.tag);
  }
})(Prism);
/* "prismjs/components/prism-css-extras" */


Prism.languages.css.selector = {
  pattern: Prism.languages.css.selector,
  inside: {
    'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
    'pseudo-class': /:[-\w]+/,
    'class': /\.[-:.\w]+/,
    'id': /#[-:.\w]+/,
    'attribute': {
      pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
      greedy: true,
      inside: {
        'punctuation': /^\[|\]$/,
        'case-sensitivity': {
          pattern: /(\s)[si]$/i,
          lookbehind: true,
          alias: 'keyword'
        },
        'namespace': {
          pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
          lookbehind: true,
          inside: {
            'punctuation': /\|$/
          }
        },
        'attribute': {
          pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
          lookbehind: true
        },
        'value': [/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, {
          pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
          lookbehind: true
        }],
        'operator': /[|~*^$]?=/
      }
    },
    'n-th': [{
      pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
      lookbehind: true,
      inside: {
        'number': /[\dn]+/,
        'operator': /[+-]/
      }
    }, {
      pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
      lookbehind: true
    }],
    'punctuation': /[()]/
  }
};
Prism.languages.insertBefore('css', 'property', {
  'variable': {
    pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
    lookbehind: true
  }
});
Prism.languages.insertBefore('css', 'function', {
  'operator': {
    pattern: /(\s)[+\-*\/](?=\s)/,
    lookbehind: true
  },
  'hexcode': /#[\da-f]{3,8}/i,
  'entity': /\\[\da-f]{1,8}/i,
  'unit': {
    pattern: /(\d)(?:%|[a-z]+)/,
    lookbehind: true
  },
  'number': /-?[\d.]+/
});
/* "prismjs/components/prism-javascript" */

Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [Prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});
Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: true,
    greedy: true
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\${|}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  }
});

if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;
/* "prismjs/components/prism-jsx" */

(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i;
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;
  Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
      inside: {
        'punctuation': /\.{3}|[{}.]/,
        'attr-value': /\w+/
      }
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'attr-value', {
    'script': {
      // Allow for two levels of nesting
      pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
      inside: {
        'script-punctuation': {
          pattern: /^=(?={)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      },
      'alias': 'language-javascript'
    }
  }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

  var stringifyToken = function (token) {
    if (!token) {
      return '';
    }

    if (typeof token === 'string') {
      return token;
    }

    if (typeof token.content === 'string') {
      return token.content;
    }

    return token.content.map(stringifyToken).join('');
  };

  var walkTokens = function (tokens) {
    var openedTags = [];

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;

      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind
          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') ; else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }

      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token); // And merge text with adjacent text

          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }

          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }

          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }

      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }

    walkTokens(env.tokens);
  });
})(Prism);
/* "prismjs/components/prism-javadoclike" */


(function (Prism) {
  var javaDocLike = Prism.languages.javadoclike = {
    'parameter': {
      pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
      lookbehind: true
    },
    'keyword': {
      // keywords are the first word in a line preceded be an `@` or surrounded by curly braces.
      // @word, {@word}
      pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
      lookbehind: true
    },
    'punctuation': /[{}]/
  };
  /**
   * Adds doc comment support to the given language and calls a given callback on each doc comment pattern.
   *
   * @param {string} lang the language add doc comment support to.
   * @param {(pattern: {inside: {rest: undefined}}) => void} callback the function called with each doc comment pattern as argument.
   */

  function docCommentSupport(lang, callback) {
    var tokenName = 'doc-comment';
    var grammar = Prism.languages[lang];

    if (!grammar) {
      return;
    }

    var token = grammar[tokenName];

    if (!token) {
      // add doc comment: /** */
      var definition = {};
      definition[tokenName] = {
        pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
        alias: 'comment'
      };
      grammar = Prism.languages.insertBefore(lang, 'comment', definition);
      token = grammar[tokenName];
    }

    if (token instanceof RegExp) {
      // convert regex to object
      token = grammar[tokenName] = {
        pattern: token
      };
    }

    if (Array.isArray(token)) {
      for (var i = 0, l = token.length; i < l; i++) {
        if (token[i] instanceof RegExp) {
          token[i] = {
            pattern: token[i]
          };
        }

        callback(token[i]);
      }
    } else {
      callback(token);
    }
  }
  /**
   * Adds doc-comment support to the given languages for the given documentation language.
   *
   * @param {string[]|string} languages
   * @param {Object} docLanguage
   */


  function addSupport(languages, docLanguage) {
    if (typeof languages === 'string') {
      languages = [languages];
    }

    languages.forEach(function (lang) {
      docCommentSupport(lang, function (pattern) {
        if (!pattern.inside) {
          pattern.inside = {};
        }

        pattern.inside.rest = docLanguage;
      });
    });
  }

  Object.defineProperty(javaDocLike, 'addSupport', {
    value: addSupport
  });
  javaDocLike.addSupport(['java', 'javascript', 'php'], javaDocLike);
})(Prism);
/* "prismjs/components/prism-java" */


(function (Prism) {
  var keywords = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/; // based on the java naming conventions

  var className = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
  Prism.languages.java = Prism.languages.extend('clike', {
    'class-name': [className, // variables and parameters
    // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
    /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
    'keyword': keywords,
    'function': [Prism.languages.clike.function, {
      pattern: /(\:\:)[a-z_]\w*/,
      lookbehind: true
    }],
    'number': /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    'operator': {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('java', 'class-name', {
    'annotation': {
      alias: 'punctuation',
      pattern: /(^|[^.])@\w+/,
      lookbehind: true
    },
    'namespace': {
      pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
      lookbehind: true,
      inside: {
        'punctuation': /\./
      }
    },
    'generics': {
      pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
      inside: {
        'class-name': className,
        'keyword': keywords,
        'punctuation': /[<>(),.:]/,
        'operator': /[?&|]/
      }
    }
  });
})(Prism);
/* "prismjs/components/prism-markup-templating" */


(function (Prism) {
  /**
   * Returns the placeholder for the given language id and index.
   *
   * @param {string} language
   * @param {string|number} index
   * @returns {string}
   */
  function getPlaceholder(language, index) {
    return '___' + language.toUpperCase() + index + '___';
  }

  Object.defineProperties(Prism.languages['markup-templating'] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function (env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }

        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
            return match;
          }

          var i = tokenStack.length;
          var placeholder; // Check for existing strings

          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          } // Create a sparse array


          tokenStack[i] = match;
          return placeholder;
        }); // Switch the grammar to markup

        env.grammar = Prism.languages.markup;
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function (env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        } // Switch the grammar back


        env.grammar = Prism.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);

        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            // all placeholders are replaced already
            if (j >= keys.length) {
              break;
            }

            var token = tokens[i];

            if (typeof token === 'string' || token.content && typeof token.content === 'string') {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === 'string' ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);

              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];

                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }

                replacement.push(middle);

                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }

                if (typeof token === 'string') {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content
            /* && typeof token.content !== 'string' */
            ) {
                walkTokens(token.content);
              }
          }

          return tokens;
        }

        walkTokens(env.tokens);
      }
    }
  });
})(Prism);
/* "prismjs/components/prism-php" */

/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 *
 * Supports the following:
 * 		- Extends clike syntax
 * 		- Support for PHP 5.3+ (namespaces, traits, generators, etc)
 * 		- Smarter constant and function matching
 *
 * Adds the following new token classes:
 * 		constant, delimiter, variable, function, package
 */


(function (Prism) {
  Prism.languages.php = Prism.languages.extend('clike', {
    'keyword': /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
    'boolean': {
      pattern: /\b(?:false|true)\b/i,
      alias: 'constant'
    },
    'constant': [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('php', 'string', {
    'shell-comment': {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true,
      alias: 'comment'
    }
  });
  Prism.languages.insertBefore('php', 'comment', {
    'delimiter': {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: 'important'
    }
  });
  Prism.languages.insertBefore('php', 'keyword', {
    'variable': /\$+(?:\w+\b|(?={))/i,
    'package': {
      pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
      lookbehind: true,
      inside: {
        punctuation: /\\/
      }
    }
  }); // Must be defined after the function pattern

  Prism.languages.insertBefore('php', 'operator', {
    'property': {
      pattern: /(->)[\w]+/,
      lookbehind: true
    }
  });
  var string_interpolation = {
    pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
    lookbehind: true,
    inside: {
      rest: Prism.languages.php
    }
  };
  Prism.languages.insertBefore('php', 'string', {
    'nowdoc-string': {
      pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
      greedy: true,
      alias: 'string',
      inside: {
        'delimiter': {
          pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
          alias: 'symbol',
          inside: {
            'punctuation': /^<<<'?|[';]$/
          }
        }
      }
    },
    'heredoc-string': {
      pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
      greedy: true,
      alias: 'string',
      inside: {
        'delimiter': {
          pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
          alias: 'symbol',
          inside: {
            'punctuation': /^<<<"?|[";]$/
          }
        },
        'interpolation': string_interpolation // See below

      }
    },
    'single-quoted-string': {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true,
      alias: 'string'
    },
    'double-quoted-string': {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      alias: 'string',
      inside: {
        'interpolation': string_interpolation // See below

      }
    }
  }); // The different types of PHP strings "replace" the C-like standard string

  delete Prism.languages.php['string'];
  Prism.hooks.add('before-tokenize', function (env) {
    if (!/<\?/.test(env.code)) {
      return;
    }

    var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/ig;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
  });
})(Prism);
/* "prismjs/components/prism-jsdoc" */


(function (Prism) {
  var javascript = Prism.languages.javascript;
  var type = /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}/.source;
  var parameterPrefix = '(@(?:param|arg|argument|property)\\s+(?:' + type + '\\s+)?)';
  Prism.languages.jsdoc = Prism.languages.extend('javadoclike', {
    'parameter': {
      // @param {string} foo - foo bar
      pattern: RegExp(parameterPrefix + /[$\w\xA0-\uFFFF.]+(?=\s|$)/.source),
      lookbehind: true,
      inside: {
        'punctuation': /\./
      }
    }
  });
  Prism.languages.insertBefore('jsdoc', 'keyword', {
    'optional-parameter': {
      // @param {string} [baz.foo="bar"] foo bar
      pattern: RegExp(parameterPrefix + /\[[$\w\xA0-\uFFFF.]+(?:=[^[\]]+)?\](?=\s|$)/.source),
      lookbehind: true,
      inside: {
        'parameter': {
          pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
          lookbehind: true,
          inside: {
            'punctuation': /\./
          }
        },
        'code': {
          pattern: /(=)[\s\S]*(?=\]$)/,
          lookbehind: true,
          inside: javascript,
          alias: 'language-javascript'
        },
        'punctuation': /[=[\]]/
      }
    },
    'class-name': [{
      pattern: RegExp('(@[a-z]+\\s+)' + type),
      lookbehind: true,
      inside: {
        'punctuation': /[.,:?=<>|{}()[\]]/
      }
    }, {
      pattern: /(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,
      lookbehind: true,
      inside: {
        'punctuation': /\./
      }
    }],
    'example': {
      pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
      lookbehind: true,
      inside: {
        'code': {
          pattern: /^(\s*(?:\*\s*)?).+$/m,
          lookbehind: true,
          inside: javascript,
          alias: 'language-javascript'
        }
      }
    }
  });
  Prism.languages.javadoclike.addSupport('javascript', Prism.languages.jsdoc);
})(Prism);
/* "prismjs/components/prism-actionscript" */


Prism.languages.actionscript = Prism.languages.extend('javascript', {
  'keyword': /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
  'operator': /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
});
Prism.languages.actionscript['class-name'].alias = 'function';

if (Prism.languages.markup) {
  Prism.languages.insertBefore('actionscript', 'string', {
    'xml': {
      pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
      lookbehind: true,
      inside: {
        rest: Prism.languages.markup
      }
    }
  });
}
/* "prismjs/components/prism-coffeescript" */


(function (Prism) {
  // Ignore comments starting with { to privilege string interpolation highlighting
  var comment = /#(?!\{).+/,
      interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: 'variable'
  };
  Prism.languages.coffeescript = Prism.languages.extend('javascript', {
    'comment': comment,
    'string': [// Strings are multiline
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      // Strings are multiline
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }],
    'keyword': /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': {
      pattern: /@(?!\d)\w+/,
      alias: 'variable'
    }
  });
  Prism.languages.insertBefore('coffeescript', 'comment', {
    'multiline-comment': {
      pattern: /###[\s\S]+?###/,
      alias: 'comment'
    },
    // Block regexp can contain comments and interpolation
    'block-regex': {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: 'regex',
      inside: {
        'comment': comment,
        'interpolation': interpolation
      }
    }
  });
  Prism.languages.insertBefore('coffeescript', 'string', {
    'inline-javascript': {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        'delimiter': {
          pattern: /^`|`$/,
          alias: 'punctuation'
        },
        rest: Prism.languages.javascript
      }
    },
    // Block strings
    'multiline-string': [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: 'string'
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        interpolation: interpolation
      }
    }]
  });
  Prism.languages.insertBefore('coffeescript', 'keyword', {
    // Object property
    'property': /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism.languages.coffeescript['template-string'];
  Prism.languages.coffee = Prism.languages.coffeescript;
})(Prism);
/* "prismjs/components/prism-js-extras" */


(function (Prism) {
  Prism.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function-variable'].pattern.source),
      lookbehind: true,
      alias: ['function-variable', 'method', 'function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'function', {
    'method': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function'].source),
      lookbehind: true,
      alias: ['function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'constant', {
    'known-class-name': [{
      // standard built-ins
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
      pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
      alias: 'class-name'
    }, {
      // errors
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: 'class-name'
    }]
  });
  Prism.languages.javascript['keyword'].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: 'module'
  }, {
    pattern: /\bnull\b/,
    alias: ['null', 'nil']
  }, {
    pattern: /\bundefined\b/,
    alias: 'nil'
  });
  Prism.languages.insertBefore('javascript', 'operator', {
    'spread': {
      pattern: /\.{3}/,
      alias: 'operator'
    },
    'arrow': {
      pattern: /=>/,
      alias: 'operator'
    }
  });
  Prism.languages.insertBefore('javascript', 'punctuation', {
    'property-access': {
      pattern: /(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
      lookbehind: true
    },
    'maybe-class-name': {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    'dom': {
      // this contains only a few commonly used DOM variables
      pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
      alias: 'variable'
    },
    'console': {
      pattern: /\bconsole(?=\s*\.)/,
      alias: 'class-name'
    }
  }); // add 'maybe-class-name' to tokens which might be a class name

  var maybeClassNameTokens = ['function', 'function-variable', 'method', 'method-variable', 'property-access'];

  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism.languages.javascript[token]; // convert regex to object

    if (Prism.util.type(value) === 'RegExp') {
      value = Prism.languages.javascript[token] = {
        pattern: value
      };
    } // keep in mind that we don't support arrays


    var inside = value.inside || {};
    value.inside = inside;
    inside['maybe-class-name'] = /^[A-Z][\s\S]*/;
  }
})(Prism);
/* "prismjs/components/prism-flow" */


(function (Prism) {
  Prism.languages.flow = Prism.languages.extend('javascript', {});
  Prism.languages.insertBefore('flow', 'keyword', {
    'type': [{
      pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
      alias: 'tag'
    }]
  });
  Prism.languages.flow['function-variable'].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i;
  delete Prism.languages.flow['parameter'];
  Prism.languages.insertBefore('flow', 'operator', {
    'flow-punctuation': {
      pattern: /\{\||\|\}/,
      alias: 'punctuation'
    }
  });

  if (!Array.isArray(Prism.languages.flow.keyword)) {
    Prism.languages.flow.keyword = [Prism.languages.flow.keyword];
  }

  Prism.languages.flow.keyword.unshift({
    pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
    lookbehind: true
  }, {
    pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
    lookbehind: true
  });
})(Prism);
/* "prismjs/components/prism-n4js" */


Prism.languages.n4js = Prism.languages.extend('javascript', {
  // Keywords from N4JS language spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html
  'keyword': /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
});
Prism.languages.insertBefore('n4js', 'constant', {
  // Annotations in N4JS spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html#_annotations
  'annotation': {
    pattern: /@+\w+/,
    alias: 'operator'
  }
});
Prism.languages.n4jsd = Prism.languages.n4js;
/* "prismjs/components/prism-typescript" */

Prism.languages.typescript = Prism.languages.extend('javascript', {
  // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
  'keyword': /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
});
Prism.languages.ts = Prism.languages.typescript;
/* "prismjs/components/prism-js-templates" */

(function (Prism) {
  var templateString = Prism.languages.javascript['template-string']; // see the pattern in prism-javascript.js

  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside['interpolation'];
  var interpolationPunctuationObject = interpolationObject.inside['interpolation-punctuation'];
  var interpolationPattern = interpolationObject.pattern.source;
  /**
   * Creates a new pattern to match a template string with a special tag.
   *
   * This will return `undefined` if there is no grammar with the given language id.
   *
   * @param {string} language The language id of the embedded language. E.g. `markdown`.
   * @param {string} tag The regex pattern to match the tag.
   * @returns {object | undefined}
   * @example
   * createTemplate('css', /\bcss/.source);
   */

  function createTemplate(language, tag) {
    if (!Prism.languages[language]) {
      return undefined;
    }

    return {
      pattern: RegExp('((?:' + tag + ')\\s*)' + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        'embedded-code': {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }

  Prism.languages.javascript['template-string'] = [// styled-jsx:
  //   css`a { color: #25F; }`
  // styled-components:
  //   styled.h1`color: red;`
  createTemplate('css', /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), // html`<p></p>`
  // div.innerHTML = `<p></p>`
  createTemplate('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), // svg`<path fill="#fff" d="M55.37 ..."/>`
  createTemplate('svg', /\bsvg/.source), // md`# h1`, markdown`## h2`
  createTemplate('markdown', /\b(?:md|markdown)/.source), // gql`...`, graphql`...`, graphql.experimental`...`
  createTemplate('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), // vanilla template string
  templateString].filter(Boolean);
  /**
   * Returns a specific placeholder literal for the given language.
   *
   * @param {number} counter
   * @param {string} language
   * @returns {string}
   */

  function getPlaceholder(counter, language) {
    return '___' + language.toUpperCase() + '_' + counter + '___';
  }
  /**
   * Returns the tokens of `Prism.tokenize` but also runs the `before-tokenize` and `after-tokenize` hooks.
   *
   * @param {string} code
   * @param {any} grammar
   * @param {string} language
   * @returns {(string|Token)[]}
   */


  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code: code,
      grammar: grammar,
      language: language
    };
    Prism.hooks.run('before-tokenize', env);
    env.tokens = Prism.tokenize(env.code, env.grammar);
    Prism.hooks.run('after-tokenize', env);
    return env.tokens;
  }
  /**
   * Returns the token of the given JavaScript interpolation expression.
   *
   * @param {string} expression The code of the expression. E.g. `"${42}"`
   * @returns {Token}
   */


  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar['interpolation-punctuation'] = interpolationPunctuationObject;
    /** @type {Array} */

    var tokens = Prism.tokenize(expression, tempGrammar);

    if (tokens.length === 3) {
      /**
       * The token array will look like this
       * [
       *     ["interpolation-punctuation", "${"]
       *     "..." // JavaScript expression of the interpolation
       *     ["interpolation-punctuation", "}"]
       * ]
       */
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism.languages.javascript, 'javascript'));
      tokens.splice.apply(tokens, args);
    }

    return new Prism.Token('interpolation', tokens, interpolationObject.alias, expression);
  }
  /**
   * Tokenizes the given code with support for JavaScript interpolation expressions mixed in.
   *
   * This function has 3 phases:
   *
   * 1. Replace all JavaScript interpolation expression with a placeholder.
   *    The placeholder will have the syntax of a identify of the target language.
   * 2. Tokenize the code with placeholders.
   * 3. Tokenize the interpolation expressions and re-insert them into the tokenize code.
   *    The insertion only works if a placeholder hasn't been "ripped apart" meaning that the placeholder has been
   *    tokenized as two tokens by the grammar of the embedded language.
   *
   * @param {string} code
   * @param {object} grammar
   * @param {string} language
   * @returns {Token}
   */


  function tokenizeEmbedded(code, grammar, language) {
    // 1. First filter out all interpolations
    // because they might be escaped, we need a lookbehind, so we use Prism

    /** @type {(Token|string)[]} */
    var _tokens = Prism.tokenize(code, {
      'interpolation': {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    }); // replace all interpolations with a placeholder which is not in the code already


    var placeholderCounter = 0;
    /** @type {Object<string, string>} */

    var placeholderMap = {};

    var embeddedCode = _tokens.map(function (token) {
      if (typeof token === 'string') {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;

        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {}

        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join(''); // 2. Tokenize the embedded code


    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language); // 3. Re-insert the interpolation

    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    /**
     *
     * @param {(Token|string)[]} tokens
     * @returns {void}
     */

    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }

        var token = tokens[i];

        if (typeof token === 'string' || typeof token.content === 'string') {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === 'string' ? token :
          /** @type {string} */
          token.content;
          var index = s.indexOf(placeholder);

          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];

            if (before) {
              replacement.push(before);
            }

            replacement.push(middle);

            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }

            if (typeof token === 'string') {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;

          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }

    walkTokens(embeddedTokens);
    return new Prism.Token(language, embeddedTokens, 'language-' + language, code);
  }
  /**
   * The languages for which JS templating will handle tagged template literals.
   *
   * JS templating isn't active for only JavaScript but also related languages like TypeScript, JSX, and TSX.
   */


  var supportedLanguages = {
    'javascript': true,
    'js': true,
    'typescript': true,
    'ts': true,
    'jsx': true,
    'tsx': true
  };
  Prism.hooks.add('after-tokenize', function (env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    /**
     * Finds and tokenizes all template strings with an embedded languages.
     *
     * @param {(Token | string)[]} tokens
     * @returns {void}
     */


    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          continue;
        }

        var content = token.content;

        if (!Array.isArray(content)) {
          if (typeof content !== 'string') {
            findTemplateStrings([content]);
          }

          continue;
        }

        if (token.type === 'template-string') {
          /**
           * A JavaScript template-string token will look like this:
           *
           * ["template-string", [
           *     ["template-punctuation", "`"],
           *     (
           *         An array of "string" and "interpolation" tokens. This is the simple string case.
           *         or
           *         ["embedded-code", "..."] This is the token containing the embedded code.
           *                                  It also has an alias which is the language of the embedded code.
           *     ),
           *     ["template-punctuation", "`"]
           * ]]
           */
          var embedded = content[1];

          if (content.length === 3 && typeof embedded !== 'string' && embedded.type === 'embedded-code') {
            // get string content
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism.languages[language];

            if (!grammar) {
              // the embedded language isn't registered.
              continue;
            }

            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }

    findTemplateStrings(env.tokens);
  });
  /**
   * Returns the string content of a token or token stream.
   *
   * @param {string | Token | (string | Token)[]} value
   * @returns {string}
   */

  function stringContent(value) {
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join('');
    } else {
      return stringContent(value.content);
    }
  }
})(Prism);
/* "prismjs/components/prism-graphql" */


Prism.languages.graphql = {
  'comment': /#.*/,
  'string': {
    pattern: /"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'boolean': /\b(?:true|false)\b/,
  'variable': /\$[a-z_]\w*/i,
  'directive': {
    pattern: /@[a-z_]\w*/i,
    alias: 'function'
  },
  'attr-name': {
    pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
    lookbehind: true
  },
  'fragment': {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'keyword': /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
  'operator': /[!=|]|\.{3}/,
  'punctuation': /[!(){}\[\]:=,]/,
  'constant': /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
};
/* "prismjs/components/prism-markdown" */

(function (Prism) {
  // Allow only one line break
  var inner = /(?:\\.|[^\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))/.source;
  /**
   * This function is intended for the creation of the bold or italic pattern.
   *
   * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
   *
   * _Note:_ Keep in mind that this adds a capturing group.
   *
   * @param {string} pattern
   * @param {boolean} starAlternative Whether to also add an alternative where all `_`s are replaced with `*`s.
   * @returns {RegExp}
   */

  function createInline(pattern, starAlternative) {
    pattern = pattern.replace(/<inner>/g, inner);

    if (starAlternative) {
      pattern = pattern + '|' + pattern.replace(/_/g, '\\*');
    }

    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
  }

  var tableCell = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\r?\n|\r)|$)/.source.replace(/__/g, tableCell);
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\r?\n|\r)/.source;
  Prism.languages.markdown = Prism.languages.extend('markup', {});
  Prism.languages.insertBefore('markdown', 'prolog', {
    'blockquote': {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: 'punctuation'
    },
    'table': {
      pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
      inside: {
        'table-data-rows': {
          pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
          lookbehind: true,
          inside: {
            'table-data': {
              pattern: RegExp(tableCell),
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        },
        'table-line': {
          pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
          lookbehind: true,
          inside: {
            'punctuation': /\||:?-{3,}:?/
          }
        },
        'table-header-row': {
          pattern: RegExp('^' + tableRow + '$'),
          inside: {
            'table-header': {
              pattern: RegExp(tableCell),
              alias: 'important',
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        }
      }
    },
    'code': [{
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
      lookbehind: true,
      alias: 'keyword'
    }, {
      // `code`
      // ``code``
      pattern: /``.+?``|`[^`\r\n]+`/,
      alias: 'keyword'
    }, {
      // ```optional language
      // code block
      // ```
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        'code-block': {
          pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
          lookbehind: true
        },
        'code-language': {
          pattern: /^(```).+/,
          lookbehind: true
        },
        'punctuation': /```/
      }
    }],
    'title': [{
      // title 1
      // =======
      // title 2
      // -------
      pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
      alias: 'important',
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      // # title 1
      // ###### title 6
      pattern: /(^\s*)#+.+/m,
      lookbehind: true,
      alias: 'important',
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    'hr': {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'list': {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'url-reference': {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        'variable': {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        'punctuation': /^[\[\]!:]|[<>]/
      },
      alias: 'url'
    },
    'bold': {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: createInline(/__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source, true),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /\*\*|__/
      }
    },
    'italic': {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: createInline(/_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source, true),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /[*_]/
      }
    },
    'strike': {
      // ~~strike through~~
      // ~strike~
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+?\2/.source, false),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /~~?/
      }
    },
    'url': {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/.source, false),
      lookbehind: true,
      greedy: true,
      inside: {
        'variable': {
          pattern: /(\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        'content': {
          pattern: /(^!?\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {} // see below

        },
        'string': {
          pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
        }
      }
    }
  });
  ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
    ['url', 'bold', 'italic', 'strike'].forEach(function (inside) {
      if (token !== inside) {
        Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
      }
    });
  });
  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'markdown' && env.language !== 'md') {
      return;
    }

    function walkTokens(tokens) {
      if (!tokens || typeof tokens === 'string') {
        return;
      }

      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (token.type !== 'code') {
          walkTokens(token.content);
          continue;
        }
        /*
         * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
         * is optional. But the grammar is defined so that there is only one case we have to handle:
         *
         * token.content = [
         *     <span class="punctuation">```</span>,
         *     <span class="code-language">xxxx</span>,
         *     '\n', // exactly one new lines (\r or \n or \r\n)
         *     <span class="code-block">...</span>,
         *     '\n', // exactly one new lines again
         *     <span class="punctuation">```</span>
         * ];
         */


        var codeLang = token.content[1];
        var codeBlock = token.content[3];

        if (codeLang && codeBlock && codeLang.type === 'code-language' && codeBlock.type === 'code-block' && typeof codeLang.content === 'string') {
          // this might be a language that Prism does not support
          var alias = 'language-' + codeLang.content.trim().split(/\s+/)[0].toLowerCase(); // add alias

          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === 'string') {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }

    walkTokens(env.tokens);
  });
  Prism.hooks.add('wrap', function (env) {
    if (env.type !== 'code-block') {
      return;
    }

    var codeLang = '';

    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);

      if (match) {
        codeLang = match[1];
        break;
      }
    }

    var grammar = Prism.languages[codeLang];

    if (!grammar) {
      if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
        var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
        env.attributes['id'] = id;
        Prism.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);

          if (ele) {
            ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      // reverse Prism.util.encode
      var code = env.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
      env.content = Prism.highlight(code, grammar, codeLang);
    }
  });
  Prism.languages.md = Prism.languages.markdown;
})(Prism);
/* "prismjs/components/prism-diff" */


(function (Prism) {
  Prism.languages.diff = {
    'coord': [// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
    /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
    /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
    /^\d+.*$/m] // deleted, inserted, unchanged, diff

  };
  /**
   * A map from the name of a block to its line prefix.
   *
   * @type {Object<string, string>}
   */

  var PREFIXES = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    'unchanged': ' ',
    'diff': '!'
  }; // add a token for each prefix

  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];

    if (!/^\w+$/.test(name)) {
      // "deleted-sign" -> "deleted"
      alias.push(/\w+/.exec(name)[0]);
    }

    if (name === "diff") {
      alias.push("bold");
    }

    Prism.languages.diff[name] = {
      // pattern: /^(?:[_].*(?:\r\n?|\n|(?![\s\S])))+/m
      pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
      alias: alias
    };
  }); // make prefixes available to Diff plugin

  Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
    value: PREFIXES
  });
})(Prism);
/* "prismjs/components/prism-git" */


Prism.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  'comment': /^#.*/m,

  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  'deleted': /^[-–].*/m,
  'inserted': /^\+.*/m,

  /*
   * a string (double and simple quote)
   */
  'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,

  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  'command': {
    pattern: /^.*\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      'parameter': /\s--?\w+/m
    }
  },

  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  'coord': /^@@.*@@$/m,

  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  'commit_sha1': /^commit \w{40}$/m
};
/* "prismjs/components/prism-go" */

Prism.languages.go = Prism.languages.extend('clike', {
  'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  'builtin': /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
  'boolean': /\b(?:_|iota|nil|true|false)\b/,
  'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  'number': /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  'string': {
    pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: true
  }
});
delete Prism.languages.go['class-name'];
/* "prismjs/components/prism-handlebars" */

(function (Prism) {
  Prism.languages.handlebars = {
    'comment': /\{\{![\s\S]*?\}\}/,
    'delimiter': {
      pattern: /^\{\{\{?|\}\}\}?$/i,
      alias: 'punctuation'
    },
    'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    'boolean': /\b(?:true|false)\b/,
    'block': {
      pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
      lookbehind: true,
      alias: 'keyword'
    },
    'brackets': {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    'punctuation': /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
    'variable': /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism.hooks.add('before-tokenize', function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');
  });
})(Prism);
/* "prismjs/components/prism-json" */


Prism.languages.json = {
  'property': {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    greedy: true
  },
  'string': {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    greedy: true
  },
  'comment': /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
  'number': /-?\d+\.?\d*(e[+-]?\d+)?/i,
  'punctuation': /[{}[\],]/,
  'operator': /:/,
  'boolean': /\b(?:true|false)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  }
};
/* "prismjs/components/prism-less" */

/* FIXME :
 :extend() is not handled specifically : its highlighting is buggy.
 Mixin usage must be inside a ruleset to be highlighted.
 At-rules (e.g. import) containing interpolations are buggy.
 Detached rulesets are highlighted as at-rules.
 A comment before a mixin usage prevents the latter to be properly highlighted.
 */

Prism.languages.less = Prism.languages.extend('css', {
  'comment': [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  'atrule': {
    pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
    inside: {
      'punctuation': /[:()]/
    }
  },
  // selectors and mixins are considered the same
  'selector': {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
    inside: {
      // mixin parameters
      'variable': /@+[\w-]+/
    }
  },
  'property': /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
  'operator': /[+\-*\/]/
});
Prism.languages.insertBefore('less', 'property', {
  'variable': [// Variable declaration (the colon must be consumed!)
  {
    pattern: /@[\w-]+\s*:/,
    inside: {
      "punctuation": /:/
    }
  }, // Variable usage
  /@@?[\w-]+/],
  'mixin-usage': {
    pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
    lookbehind: true,
    alias: 'function'
  }
});
/* "prismjs/components/prism-makefile" */

Prism.languages.makefile = {
  'comment': {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  // Built-in target names
  'builtin': /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
  // Targets
  'symbol': {
    pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
    inside: {
      'variable': /\$+(?:[^(){}:#=\s]+|(?=[({]))/
    }
  },
  'variable': /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  'keyword': [// Directives
  /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, // Functions
  {
    pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
    lookbehind: true
  }],
  'operator': /(?:::|[?:+!])?=|[|@]/,
  'punctuation': /[:;(){}]/
};
/* "prismjs/components/prism-objectivec" */

Prism.languages.objectivec = Prism.languages.extend('c', {
  'keyword': /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  'string': /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
  'operator': /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec['class-name'];
/* "prismjs/components/prism-ocaml" */

Prism.languages.ocaml = {
  'comment': /\(\*[\s\S]*?\*\)/,
  'string': [{
    pattern: /"(?:\\.|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
    greedy: true
  }],
  'number': /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
  'type': {
    pattern: /\B['`]\w*/,
    alias: 'variable'
  },
  'directive': {
    pattern: /\B#\w+/,
    alias: 'function'
  },
  'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
  'boolean': /\b(?:false|true)\b/,
  // Custom operators are allowed
  'operator': /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
  'punctuation': /[(){}\[\]|_.,:;]/
};
/* "prismjs/components/prism-python" */

Prism.languages.python = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true
  },
  'string-interpolation': {
    pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      'interpolation': {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
        lookbehind: true,
        inside: {
          'format-spec': {
            pattern: /(:)[^:(){}]+(?=}$)/,
            lookbehind: true
          },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation'
          },
          rest: null
        }
      },
      'string': /[\s\S]+/
    }
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
    greedy: true,
    alias: 'string'
  },
  'string': {
    pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  'function': {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  'class-name': {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  'decorator': {
    pattern: /(^\s*)@\w+(?:\.\w+)*/i,
    lookbehind: true,
    alias: ['annotation', 'punctuation'],
    inside: {
      'punctuation': /\./
    }
  },
  'keyword': /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  'boolean': /\b(?:True|False|None)\b/,
  'number': /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  'punctuation': /[{}[\];(),.:]/
};
Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
/* "prismjs/components/prism-reason" */

Prism.languages.reason = Prism.languages.extend('clike', {
  'comment': {
    pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
    lookbehind: true
  },
  'string': {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  // 'class-name' must be matched *after* 'constructor' defined below
  'class-name': /\b[A-Z]\w*/,
  'keyword': /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  'operator': /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
});
Prism.languages.insertBefore('reason', 'class-name', {
  'character': {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    alias: 'string'
  },
  'constructor': {
    // Negative look-ahead prevents from matching things like String.capitalize
    pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
    alias: 'variable'
  },
  'label': {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: 'symbol'
  }
}); // We can't match functions property, so let's not even try.

delete Prism.languages.reason.function;
/* "prismjs/components/prism-sass" */

(function (Prism) {
  Prism.languages.sass = Prism.languages.extend('css', {
    // Sass comments don't need to be closed, only indented
    'comment': {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('sass', 'atrule', {
    // We want to consume the whole line
    'atrule-line': {
      // Includes support for = and + shortcuts
      pattern: /^(?:[ \t]*)[@+=].+/m,
      inside: {
        'atrule': /(?:@[\w-]+|[+=])/m
      }
    }
  });
  delete Prism.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
    pattern: /(\s+)-(?=\s)/,
    lookbehind: true
  }];
  Prism.languages.insertBefore('sass', 'property', {
    // We want to consume the whole line
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      inside: {
        'punctuation': /:/,
        'variable': variable,
        'operator': operator
      }
    },
    // We want to consume the whole line
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
      inside: {
        'property': [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        'punctuation': /:/,
        'variable': variable,
        'operator': operator,
        'important': Prism.languages.sass.important
      }
    }
  });
  delete Prism.languages.sass.property;
  delete Prism.languages.sass.important; // Now that whole lines for other patterns are consumed,
  // what's left should be selectors

  Prism.languages.insertBefore('sass', 'punctuation', {
    'selector': {
      pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
      lookbehind: true
    }
  });
})(Prism);
/* "prismjs/components/prism-scss" */


Prism.languages.scss = Prism.languages.extend('css', {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  'atrule': {
    pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  // url, compassified
  'url': /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  'selector': {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
    inside: {
      'parent': {
        pattern: /&/,
        alias: 'important'
      },
      'placeholder': /%[-\w]+/,
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  'property': {
    pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
Prism.languages.insertBefore('scss', 'atrule', {
  'keyword': [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
    pattern: /( +)(?:from|through)(?= )/,
    lookbehind: true
  }]
});
Prism.languages.insertBefore('scss', 'important', {
  // var and interpolated vars
  'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});
Prism.languages.insertBefore('scss', 'function', {
  'placeholder': {
    pattern: /%[-\w]+/,
    alias: 'selector'
  },
  'statement': {
    pattern: /\B!(?:default|optional)\b/i,
    alias: 'keyword'
  },
  'boolean': /\b(?:true|false)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  },
  'operator': {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
    lookbehind: true
  }
});
Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;
/* "prismjs/components/prism-sql" */

Prism.languages.sql = {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  'variable': [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  'string': {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  'function': /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  'boolean': /\b(?:TRUE|FALSE|NULL)\b/i,
  'number': /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
  'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  'punctuation': /[;[\]()`,.]/
};
/* "prismjs/components/prism-stylus" */

(function (Prism) {
  var inside = {
    'url': /url\((["']?).*?\1\)/i,
    'string': {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    'interpolation': null,
    // See below
    'func': null,
    // See below
    'important': /\B!(?:important|optional)\b/i,
    'keyword': {
      pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
      lookbehind: true
    },
    'hexcode': /#[\da-f]{3,6}/i,
    'number': /\b\d+(?:\.\d+)?%?/,
    'boolean': /\b(?:true|false)\b/,
    'operator': [// We want non-word chars around "-" because it is
    // accepted in property names.
    /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    'punctuation': /[{}()\[\];:,]/
  };
  inside['interpolation'] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: {
      'delimiter': {
        pattern: /^{|}$/,
        alias: 'punctuation'
      },
      rest: inside
    }
  };
  inside['func'] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      'function': /^[^(]+/,
      rest: inside
    }
  };
  Prism.languages.stylus = {
    'comment': {
      pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    'atrule-declaration': {
      pattern: /(^\s*)@.+/m,
      lookbehind: true,
      inside: {
        'atrule': /^@[\w-]+/,
        rest: inside
      }
    },
    'variable-declaration': {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
      lookbehind: true,
      inside: {
        'variable': /^\S+/,
        rest: inside
      }
    },
    'statement': {
      pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
      lookbehind: true,
      inside: {
        keyword: /^\S+/,
        rest: inside
      }
    },
    // A property/value pair cannot end with a comma or a brace
    // It cannot have indented content unless it ended with a semicolon
    'property-declaration': {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
      lookbehind: true,
      inside: {
        'property': {
          pattern: /^[^\s:]+/,
          inside: {
            'interpolation': inside.interpolation
          }
        },
        rest: inside
      }
    },
    // A selector can contain parentheses only as part of a pseudo-element
    // It can span multiple lines.
    // It must end with a comma or an accolade or have indented content.
    'selector': {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
      lookbehind: true,
      inside: {
        'interpolation': inside.interpolation,
        'punctuation': /[{},]/
      }
    },
    'func': inside.func,
    'string': inside.string,
    'interpolation': inside.interpolation,
    'punctuation': /[{}()\[\];:.]/
  };
})(Prism);
/* "prismjs/components/prism-tsx" */


var typescript = Prism.util.clone(Prism.languages.typescript);
Prism.languages.tsx = Prism.languages.extend('jsx', typescript);
/* "prismjs/components/prism-wasm" */

Prism.languages.wasm = {
  'comment': [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  'string': {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  'keyword': [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      'operator': /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      'punctuation': /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  'variable': /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
  'number': /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  'punctuation': /[()]/
};
/* "prismjs/components/prism-yaml" */

Prism.languages.yaml = {
  'scalar': {
    pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
    lookbehind: true,
    alias: 'string'
  },
  'comment': /#.*/,
  'key': {
    pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
    lookbehind: true,
    alias: 'atrule'
  },
  'directive': {
    pattern: /(^[ \t]*)%.+/m,
    lookbehind: true,
    alias: 'important'
  },
  'datetime': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
    lookbehind: true,
    alias: 'number'
  },
  'boolean': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
    lookbehind: true,
    alias: 'important'
  },
  'null': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
    lookbehind: true,
    alias: 'important'
  },
  'string': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
    lookbehind: true,
    greedy: true
  },
  'number': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
    lookbehind: true
  },
  'tag': /![^\s]+/,
  'important': /[&*][\w]+/,
  'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
};
Prism.languages.yml = Prism.languages.yaml;

/* harmony default export */ __webpack_exports__["default"] = (Prism);


/***/ }),

/***/ "./node_modules/prism-react-renderer/themes/duotoneDark/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/prism-react-renderer/themes/duotoneDark/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ __webpack_exports__["default"] = (theme);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/CodeHighlight.js":
/*!********************************!*\
  !*** ./pages/CodeHighlight.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.js");

var _jsxFileName = "/Users/davidtranwd/Projects/landing/pages/CodeHighlight.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var CodeHighLight = function CodeHighLight(_ref) {
  var language = _ref.language,
      children = _ref.children;
  return __jsx(prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__["defaultProps"], {
    language: language,
    code: children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return __jsx("pre", {
      className: className,
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, tokens.map(function (line, i) {
      return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getLineProps({
        line: line,
        key: i
      }), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }), line.map(function (token, key) {
        return __jsx("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTokenProps({
          token: token,
          key: key
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }));
      }));
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CodeHighLight);

/***/ }),

/***/ "./pages/Props.js":
/*!************************!*\
  !*** ./pages/Props.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Props_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Props.module.css */ "./pages/Props.module.css");
/* harmony import */ var _Props_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Props_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/davidtranwd/Projects/landing/pages/Props.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Props = function Props(_ref) {
  var props = _ref.props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("table", {
    className: "jsx-2901241553" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-2901241553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-2901241553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-2901241553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Prop name"), __jsx("th", {
    className: "jsx-2901241553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Type"), __jsx("th", {
    className: "jsx-2901241553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Default value"), __jsx("th", {
    className: "jsx-2901241553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Description"))), __jsx("tbody", {
    className: "jsx-2901241553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.map(function (prop) {
    return __jsx("tr", {
      key: prop.name,
      className: "jsx-2901241553",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-2901241553",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, prop.name), __jsx("td", {
      className: "jsx-2901241553",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, prop.type), __jsx("td", {
      className: "jsx-2901241553",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, prop.defaultValue), __jsx("td", {
      className: "jsx-2901241553",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, prop.description));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2901241553",
    __self: this
  }, ".container.jsx-2901241553{display:block;width:100%;overflow:auto;}.container.jsx-2901241553 tr.jsx-2901241553{color:black;background-color:white;border-top:1px solid #c6cbd1;}.container.jsx-2901241553 tr.jsx-2901241553:nth-child(2n){background-color:#f6f8fa;}.container.jsx-2901241553 td.jsx-2901241553,.container.jsx-2901241553 th.jsx-2901241553{padding:6px 13px;border:1px solid #dfe2e5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL1Byb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCYyxBQUdxQixBQU1GLEFBTWEsQUFJUixZQVRNLEVBTlosR0FnQmMsUUFmWCxBQVdoQixVQUwrQixJQUwvQixHQWVBLHNCQVRBIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL1Byb3BzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qcm9wcy5tb2R1bGUuY3NzJztcblxuY29uc3QgUHJvcHMgPSAoeyBwcm9wcyB9KSA9PiAoXG4gIDw+XG4gIDx0YWJsZSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8dGhlYWQ+XG4gICAgICA8dHI+XG4gICAgICAgIDx0aD5Qcm9wIG5hbWU8L3RoPlxuICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgIDx0aD5EZWZhdWx0IHZhbHVlPC90aD5cbiAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cbiAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgICA8dGJvZHk+XG4gICAgICB7cHJvcHMubWFwKHByb3AgPT4gKFxuICAgICAgICA8dHIga2V5PXtwcm9wLm5hbWV9PlxuICAgICAgICAgIDx0ZD57cHJvcC5uYW1lfTwvdGQ+XG4gICAgICAgICAgPHRkPntwcm9wLnR5cGV9PC90ZD5cbiAgICAgICAgICA8dGQ+e3Byb3AuZGVmYXVsdFZhbHVlfTwvdGQ+XG4gICAgICAgICAgPHRkPntwcm9wLmRlc2NyaXB0aW9ufTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICApKX1cbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuICA8c3R5bGUganN4PntgXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciB0ciB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzZjYmQxO1xuICAgIH1cblxuICAgIC5jb250YWluZXIgdHI6bnRoLWNoaWxkKDJuKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZhO1xuICAgIH1cblxuICAgIC5jb250YWluZXIgdGQsIC5jb250YWluZXIgdGgge1xuICAgICAgcGFkZGluZzogNnB4IDEzcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmU1O1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BzO1xuIl19 */\n/*@ sourceURL=/Users/davidtranwd/Projects/landing/pages/Props.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Props);

/***/ }),

/***/ "./pages/Props.module.css":
/*!********************************!*\
  !*** ./pages/Props.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/postcss-loader/src??__nextjs_postcss!./Props.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./pages/Props.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/postcss-loader/src??__nextjs_postcss!./Props.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./pages/Props.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/postcss-loader/src??__nextjs_postcss!./Props.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./pages/Props.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_flight_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-flight-datepicker */ "./node_modules/react-google-flight-datepicker/dist/index.js");
/* harmony import */ var react_google_flight_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_flight_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CodeHighlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CodeHighlight */ "./pages/CodeHighlight.js");
/* harmony import */ var _Props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Props */ "./pages/Props.js");
var _jsxFileName = "/Users/davidtranwd/Projects/landing/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Home = function Home() {
  return __jsx("div", {
    className: "jsx-3760520155" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3760520155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3760520155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), __jsx("main", {
    className: "jsx-3760520155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3760520155" + " " + "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3760520155" + " " + "nav-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3760520155" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "react-google-flight-datepicker"), __jsx("div", {
    className: "jsx-3760520155" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/JSLancerTeam/react-google-flight-datepicker",
    className: "jsx-3760520155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "GitHub")))), __jsx("div", {
    className: "jsx-3760520155" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("img", {
    src: "/plane.png",
    className: "jsx-3760520155" + " " + "hero__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3760520155" + " " + "hero__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "react-google-flight-datepicker"), __jsx("div", {
    className: "jsx-3760520155" + " " + "hero__subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "google flight date-picker implemented in ReactJS"), __jsx("div", {
    className: "jsx-3760520155" + " " + "hero__demo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(react_google_flight_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))), __jsx("h2", {
    className: "jsx-3760520155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Installation"), __jsx(_CodeHighlight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    language: "bash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "npm install react-google-flight-datepicker"), __jsx("br", {
    className: "jsx-3760520155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("h2", {
    className: "jsx-3760520155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Usage"), __jsx(_CodeHighlight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    language: "jsx",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, demoCode), __jsx("br", {
    className: "jsx-3760520155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("footer", {
    className: "jsx-3760520155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("a", {
    href: "https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3760520155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Powered by ", __jsx("img", {
    src: "/zeit.svg",
    alt: "ZEIT Logo",
    className: "jsx-3760520155",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "438172382",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');html.jsx-3760520155,body.jsx-3760520155{font-size:18px;}.datepickerContainer.jsx-3760520155{width:400px;margin:0 auto;font-family:'Roboto',sans-serif;}.container.jsx-3760520155{min-height:100vh;padding:0;}main.jsx-3760520155{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}footer.jsx-3760520155{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-3760520155 img.jsx-3760520155{margin-left:0.5rem;}footer.jsx-3760520155 a.jsx-3760520155{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-3760520155{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.nav.jsx-3760520155{position:fixed;top:0;left:0;right:0;z-index:1000;}.nav.jsx-3760520155 .nav-content.jsx-3760520155{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px 20px;background:white;}.nav.jsx-3760520155 .title.jsx-3760520155{color:black;font-weight:bold;font-size:1rempx;}.hero.jsx-3760520155{background:#25c2a0;padding:4rem;width:100%;color:white;text-align:center;}.hero__image.jsx-3760520155{width:250px;}.hero__title.jsx-3760520155{font-size:3rem;margin-bottom:20px;}.hero__subtitle.jsx-3760520155{font-size:1.5rem;}.hero__demo.jsx-3760520155{width:400px;margin:25px auto;}@media screen and (max-width:500px){.datepickerContainer.jsx-3760520155{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEZ0IsQUFFaUYsQUFHekQsQUFJSCxBQU1LLEFBS0YsQUFVSixBQVNRLEFBSU4sQUFNQyxBQUtDLEFBUUYsQUFRRCxBQU1PLEFBUVAsQUFJRyxBQUtFLEFBSUwsQUFNQyxXQXhFQSxBQXlFYixDQTlGYyxBQTZERyxBQWNuQixBQWFtQixFQWhESSxDQTVDdkIsQUFlUyxBQWtDRCxBQWtDYSxFQXpFVCxBQThFWixFQXREQSxBQXFDZSxFQXJCTixHQXhCc0IsRUFyQkksQ0FNbkMsQ0F3Q1UsQ0FlUyxBQTJCbkIsR0FyQmEsRUFZYixFQWhDZSxPQXFCRCxHQU5kLEVBbkRlLENBcUNmLElBMUJlLEVBK0NLLEdBcEVwQixNQXVDQSxTQThCQSxDQXJDeUIsQUFtQk8sZ0RBeENSLEtBV0MsOENBV0osZ0JBbUJBLFdBeENJLDBCQVdKLHdDQVdyQixnQkFtQm9CLGlCQXhDQyxDQXlDRixpQkFDbkIsRUEvQkEseUVBVmEsV0FDYiIsImZpbGUiOiIvVXNlcnMvZGF2aWR0cmFud2QvUHJvamVjdHMvbGFuZGluZy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJ3JlYWN0LWdvb2dsZS1mbGlnaHQtZGF0ZXBpY2tlcic7XG5pbXBvcnQgQ29kZUhpZ2hMaWdodCBmcm9tICcuL0NvZGVIaWdobGlnaHQnO1xuaW1wb3J0IFByb3BzIGZyb20gJy4vUHJvcHMnO1xuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgIDwvSGVhZD5cblxuICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5yZWFjdC1nb29nbGUtZmxpZ2h0LWRhdGVwaWNrZXI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0pTTGFuY2VyVGVhbS9yZWFjdC1nb29nbGUtZmxpZ2h0LWRhdGVwaWNrZXJcIj5HaXRIdWI8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8aW1nIHNyYz1cIi9wbGFuZS5wbmdcIiBjbGFzc05hbWU9XCJoZXJvX19pbWFnZVwiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX190aXRsZVwiPlxuICAgICAgICAgIHJlYWN0LWdvb2dsZS1mbGlnaHQtZGF0ZXBpY2tlclxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX19zdWJ0aXRsZVwiPlxuICAgICAgICAgIGdvb2dsZSBmbGlnaHQgZGF0ZS1waWNrZXIgaW1wbGVtZW50ZWQgaW4gUmVhY3RKU1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX19kZW1vXCI+XG4gICAgICAgICAgPERhdGVwaWNrZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGgyPkluc3RhbGxhdGlvbjwvaDI+XG4gICAgICA8Q29kZUhpZ2hMaWdodCBsYW5ndWFnZT1cImJhc2hcIj5cbiAgICAgICAgbnBtIGluc3RhbGwgcmVhY3QtZ29vZ2xlLWZsaWdodC1kYXRlcGlja2VyXG4gICAgICA8L0NvZGVIaWdoTGlnaHQ+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMj5Vc2FnZTwvaDI+XG4gICAgICA8Q29kZUhpZ2hMaWdodCBsYW5ndWFnZT1cImpzeFwiPntkZW1vQ29kZX08L0NvZGVIaWdoTGlnaHQ+XG4gICAgICA8YnIgLz5cbiAgICA8L21haW4+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vemVpdC5jbz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgPlxuICAgICAgICBQb3dlcmVkIGJ5IDxpbWcgc3JjPVwiL3plaXQuc3ZnXCIgYWx0PVwiWkVJVCBMb2dvXCIgLz5cbiAgICAgIDwvYT5cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuXG4gICAgICAuZGF0ZXBpY2tlckNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIgYSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLm5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIH1cblxuICAgICAgLm5hdiAubmF2LWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC5uYXYgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtcHg7XG4gICAgICB9XG5cbiAgICAgIC5oZXJvIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzI1YzJhMDtcbiAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuaGVyb19faW1hZ2Uge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICB9XG5cbiAgICAgIC5oZXJvX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cblxuICAgICAgLmhlcm9fX3N1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5oZXJvX19kZW1vIHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgLmRhdGVwaWNrZXJDb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/Users/davidtranwd/Projects/landing/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1908709516",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:'Roboto',Helvetica Neue,sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1LdUIsQUFJbUIsQUFNWSxVQUxiLFNBQ3dDLEdBS25ELDRDQUpBIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAncmVhY3QtZ29vZ2xlLWZsaWdodC1kYXRlcGlja2VyJztcbmltcG9ydCBDb2RlSGlnaExpZ2h0IGZyb20gJy4vQ29kZUhpZ2hsaWdodCc7XG5pbXBvcnQgUHJvcHMgZnJvbSAnLi9Qcm9wcyc7XG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgPC9IZWFkPlxuXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnJlYWN0LWdvb2dsZS1mbGlnaHQtZGF0ZXBpY2tlcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSlNMYW5jZXJUZWFtL3JlYWN0LWdvb2dsZS1mbGlnaHQtZGF0ZXBpY2tlclwiPkdpdEh1YjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3BsYW5lLnBuZ1wiIGNsYXNzTmFtZT1cImhlcm9fX2ltYWdlXCIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9fX3RpdGxlXCI+XG4gICAgICAgICAgcmVhY3QtZ29vZ2xlLWZsaWdodC1kYXRlcGlja2VyXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9fX3N1YnRpdGxlXCI+XG4gICAgICAgICAgZ29vZ2xlIGZsaWdodCBkYXRlLXBpY2tlciBpbXBsZW1lbnRlZCBpbiBSZWFjdEpTXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9fX2RlbW9cIj5cbiAgICAgICAgICA8RGF0ZXBpY2tlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDI+SW5zdGFsbGF0aW9uPC9oMj5cbiAgICAgIDxDb2RlSGlnaExpZ2h0IGxhbmd1YWdlPVwiYmFzaFwiPlxuICAgICAgICBucG0gaW5zdGFsbCByZWFjdC1nb29nbGUtZmxpZ2h0LWRhdGVwaWNrZXJcbiAgICAgIDwvQ29kZUhpZ2hMaWdodD5cbiAgICAgIDxiciAvPlxuICAgICAgPGgyPlVzYWdlPC9oMj5cbiAgICAgIDxDb2RlSGlnaExpZ2h0IGxhbmd1YWdlPVwianN4XCI+e2RlbW9Db2RlfTwvQ29kZUhpZ2hMaWdodD5cbiAgICAgIDxiciAvPlxuICAgIDwvbWFpbj5cblxuICAgIDxmb290ZXI+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly96ZWl0LmNvP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICA+XG4gICAgICAgIFBvd2VyZWQgYnkgPGltZyBzcmM9XCIvemVpdC5zdmdcIiBhbHQ9XCJaRUlUIExvZ29cIiAvPlxuICAgICAgPC9hPlxuICAgIDwvZm9vdGVyPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIC5kYXRlcGlja2VyQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIG1haW4ge1xuICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAubmF2IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgfVxuXG4gICAgICAubmF2IC5uYXYtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgLm5hdiAudGl0bGUge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDFyZW1weDtcbiAgICAgIH1cblxuICAgICAgLmhlcm8ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjVjMmEwO1xuICAgICAgICBwYWRkaW5nOiA0cmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZXJvX19pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIH1cblxuICAgICAgLmhlcm9fX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAuaGVyb19fc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLmhlcm9fX2RlbW8ge1xuICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAuZGF0ZXBpY2tlckNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/davidtranwd/Projects/landing/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d1b5efc95dc51efb1101.hot-update.js.map