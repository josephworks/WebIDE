/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
"use strict";
var _amdLoaderGlobal = this;
! function(e) {
  e.global = _amdLoaderGlobal;
  var t = function() {
    function t(e) {
      this.isWindows = e.isWindows, this.isNode = e.isNode, this.isElectronRenderer = e.isElectronRenderer, this.isWebWorker = e.isWebWorker
    }
    return t.detect = function() {
      return new t({
        isWindows: this._isWindows(),
        isNode: "undefined" != typeof module && !!module.exports,
        isElectronRenderer: "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.electron && "renderer" === process.type,
        isWebWorker: "function" == typeof e.global.importScripts
      })
    }, t._isWindows = function() {
      return !!("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.indexOf("Windows") >= 0) || "undefined" != typeof process && "win32" === process.platform
    }, t
  }();
  e.Environment = t
}(AMDLoader || (AMDLoader = {}));
! function(e) {
  var t;
  ! function(e) {
    e[e.LoaderAvailable = 1] = "LoaderAvailable", e[e.BeginLoadingScript = 10] = "BeginLoadingScript", e[e.EndLoadingScriptOK = 11] = "EndLoadingScriptOK", e[e.EndLoadingScriptError = 12] = "EndLoadingScriptError",
      e[e.BeginInvokeFactory = 21] = "BeginInvokeFactory", e[e.EndInvokeFactory = 22] = "EndInvokeFactory", e[e.NodeBeginEvaluatingScript = 31] = "NodeBeginEvaluatingScript", e[e.NodeEndEvaluatingScript = 32] = "NodeEndEvaluatingScript", e[e.NodeBeginNativeRequire = 33] = "NodeBeginNativeRequire", e[e.NodeEndNativeRequire = 34] = "NodeEndNativeRequire"
  }(t = e.LoaderEventType || (e.LoaderEventType = {}));
  var n = function() {
    return function(e, t, n) {
      this.type = e, this.detail = t, this.timestamp = n
    }
  }();
  e.LoaderEvent = n;
  var r = function() {
    function r(e) {
      this._events = [new n(t.LoaderAvailable, "", e)]
    }
    return r.prototype.record = function(t, r) {
      this._events.push(new n(t, r, e.Utilities.getHighPerformanceTimestamp()))
    }, r.prototype.getEvents = function() {
      return this._events
    }, r
  }();
  e.LoaderEventRecorder = r;
  var o = function() {
    function e() {}
    return e.prototype.record = function(e, t) {}, e.prototype.getEvents = function() {
      return []
    }, e
  }();
  o.INSTANCE = new o, e.NullLoaderEventRecorder = o
}(AMDLoader || (AMDLoader = {}));
! function(e) {
  var t = function() {
    function t() {}
    return t.fileUriToFilePath = function(e, t) {
        if (t = decodeURI(t), e) {
          if (/^file:\/\/\//.test(t)) return t.substr(8);
          if (/^file:\/\//.test(t)) return t.substr(5)
        } else if (/^file:\/\//.test(t)) return t.substr(7);
        return t
      }, t.startsWith = function(e, t) {
        return e.length >= t.length && e.substr(0, t.length) === t
      }, t.endsWith = function(e, t) {
        return e.length >= t.length && e.substr(e.length - t.length) === t
      }, t.containsQueryString = function(e) {
        return /^[^\#]*\?/gi.test(e)
      }, t.isAbsolutePath = function(e) {
        return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(e)
      }, t.forEachProperty = function(e, t) {
        if (e) {
          var n = void 0;
          for (n in e) e.hasOwnProperty(n) && t(n, e[n])
        }
      }, t.isEmpty = function(e) {
        var n = !0;
        return t.forEachProperty(e, function() {
          n = !1
        }), n
      }, t.recursiveClone = function(e) {
        if (!e || "object" != typeof e) return e;
        var n = Array.isArray(e) ? [] : {};
        return t.forEachProperty(e, function(e, r) {
          n[e] = r && "object" == typeof r ? t.recursiveClone(r) : r
        }), n
      }, t.generateAnonymousModule = function() {
        return "===anonymous" + t.NEXT_ANONYMOUS_ID++ + "==="
      }, t.isAnonymousModule = function(e) {
        return /^===anonymous/.test(e)
      },
      t.getHighPerformanceTimestamp = function() {
        return this.PERFORMANCE_NOW_PROBED || (this.PERFORMANCE_NOW_PROBED = !0, this.HAS_PERFORMANCE_NOW = e.global.performance && "function" == typeof e.global.performance.now), this.HAS_PERFORMANCE_NOW ? e.global.performance.now() : Date.now()
      }, t
  }();
  t.NEXT_ANONYMOUS_ID = 1, t.PERFORMANCE_NOW_PROBED = !1, t.HAS_PERFORMANCE_NOW = !1, e.Utilities = t
}(AMDLoader || (AMDLoader = {}));
! function(e) {
  var t = function() {
    function t() {}
    return t.validateConfigurationOptions = function(t, n) {
      function r(e) {
        return "load" === e.errorCode ? (console.error('Loading "' + e.moduleId + '" failed'), console.error("Detail: ", e.detail), e.detail && e.detail.stack && console.error(e.detail.stack), console.error("Here are the modules that depend on it:"), void console.error(e.neededBy)) : "factory" === e.errorCode ? (console.error('The factory method of "' + e.moduleId + '" has thrown an exception'), console.error(e.detail), void(e.detail && e.detail.stack && console.error(e.detail.stack))) : void 0
      }
      return "string" != typeof(n = n || {}).baseUrl && (n.baseUrl = ""),
        "boolean" != typeof n.isBuild && (n.isBuild = !1), "object" != typeof n.paths && (n.paths = {}), "object" != typeof n.config && (n.config = {}), void 0 === n.catchError && (n.catchError = t), "string" != typeof n.urlArgs && (n.urlArgs = ""), "function" != typeof n.onError && (n.onError = r), "object" == typeof n.ignoreDuplicateModules && Array.isArray(n.ignoreDuplicateModules) || (n.ignoreDuplicateModules = []), n.baseUrl.length > 0 && (e.Utilities.endsWith(n.baseUrl, "/") || (n.baseUrl += "/")), Array.isArray(n.nodeModules) || (n.nodeModules = []), ("number" != typeof n.nodeCachedDataWriteDelay || n.nodeCachedDataWriteDelay < 0) && (n.nodeCachedDataWriteDelay = 7e3), "function" != typeof n.onNodeCachedData && (n.onNodeCachedData = function(e, t) {
          e && ("cachedDataRejected" === e.errorCode ? console.warn("Rejected cached data from file: " + e.path) : "unlink" === e.errorCode || "writeFile" === e.errorCode ? (console.error("Problems writing cached data file: " + e.path), console.error(e.detail)) : console.error(e))
        }), n
    }, t.mergeConfigurationOptions = function(n, r, o) {
      void 0 === r && (r = null), void 0 === o && (o = null);
      var i = e.Utilities.recursiveClone(o || {});
      return e.Utilities.forEachProperty(r, function(t, n) {
        "ignoreDuplicateModules" === t && void 0 !== i.ignoreDuplicateModules ? i.ignoreDuplicateModules = i.ignoreDuplicateModules.concat(n) : "paths" === t && void 0 !== i.paths ? e.Utilities.forEachProperty(n, function(e, t) {
          return i.paths[e] = t
        }) : "config" === t && void 0 !== i.config ? e.Utilities.forEachProperty(n, function(e, t) {
          return i.config[e] = t
        }) : i[t] = e.Utilities.recursiveClone(n)
      }), t.validateConfigurationOptions(n, i)
    }, t
  }();
  e.ConfigurationOptionsUtil = t;
  var n = function() {
    function n(e, n) {
      if (this._env = e, this.options = t.mergeConfigurationOptions(this._env.isWebWorker, n), this._createIgnoreDuplicateModulesMap(), this._createNodeModulesMap(), this._createSortedPathsRules(), "" === this.options.baseUrl) {
        if (this._env.isNode && this.options.nodeRequire && this.options.nodeRequire.main && this.options.nodeRequire.main.filename) {
          var r = this.options.nodeRequire.main.filename,
            o = Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\"));
          this.options.baseUrl = r.substring(0, o + 1)
        }
        if (this._env.isNode && this.options.nodeMain) {
          var r = this.options.nodeMain,
            o = Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\"));
          this.options.baseUrl = r.substring(0, o + 1)
        }
      }
    }
    return n.prototype._createIgnoreDuplicateModulesMap = function() {
        this.ignoreDuplicateModulesMap = {};
        for (var e = 0; e < this.options.ignoreDuplicateModules.length; e++) this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[e]] = !0
      }, n.prototype._createNodeModulesMap = function() {
        this.nodeModulesMap = Object.create(null);
        for (var e = 0, t = this.options.nodeModules; e < t.length; e++) {
          var n = t[e];
          this.nodeModulesMap[n] = !0
        }
      }, n.prototype._createSortedPathsRules = function() {
        var t = this;
        this.sortedPathsRules = [], e.Utilities.forEachProperty(this.options.paths, function(e, n) {
          Array.isArray(n) ? t.sortedPathsRules.push({
            from: e,
            to: n
          }) : t.sortedPathsRules.push({
            from: e,
            to: [n]
          })
        }), this.sortedPathsRules.sort(function(e, t) {
          return t.from.length - e.from.length
        })
      }, n.prototype.cloneAndMerge = function(e) {
        return new n(this._env, t.mergeConfigurationOptions(this._env.isWebWorker, e, this.options))
      }, n.prototype.getOptionsLiteral = function() {
        return this.options
      }, n.prototype._applyPaths = function(t) {
        for (var n, r = 0, o = this.sortedPathsRules.length; r < o; r++)
          if (n = this.sortedPathsRules[r], e.Utilities.startsWith(t, n.from)) {
            for (var i = [], s = 0, a = n.to.length; s < a; s++) i.push(n.to[s] + t.substr(n.from.length));
            return i
          }
        return [t]
      }, n.prototype._addUrlArgsToUrl = function(t) {
        return e.Utilities.containsQueryString(t) ? t + "&" + this.options.urlArgs : t + "?" + this.options.urlArgs
      }, n.prototype._addUrlArgsIfNecessaryToUrl = function(e) {
        return this.options.urlArgs ? this._addUrlArgsToUrl(e) : e
      }, n.prototype._addUrlArgsIfNecessaryToUrls = function(e) {
        if (this.options.urlArgs)
          for (var t = 0, n = e.length; t < n; t++) e[t] = this._addUrlArgsToUrl(e[t]);
        return e
      }, n.prototype.moduleIdToPaths = function(t) {
        if (!0 === this.nodeModulesMap[t]) return this.isBuild() ? ["empty:"] : ["node|" + t];
        var n, r = t;
        if (e.Utilities.endsWith(r, ".js") || e.Utilities.isAbsolutePath(r)) e.Utilities.endsWith(r, ".js") || e.Utilities.containsQueryString(r) || (r += ".js"), n = [r];
        else
          for (var o = 0, i = (n = this._applyPaths(r)).length; o < i; o++) this.isBuild() && "empty:" === n[o] || (e.Utilities.isAbsolutePath(n[o]) || (n[o] = this.options.baseUrl + n[o]), e.Utilities.endsWith(n[o], ".js") || e.Utilities.containsQueryString(n[o]) || (n[o] = n[o] + ".js"));
        return this._addUrlArgsIfNecessaryToUrls(n)
      }, n.prototype.requireToUrl = function(t) {
        var n = t;
        return e.Utilities.isAbsolutePath(n) || (n = this._applyPaths(n)[0], e.Utilities.isAbsolutePath(n) || (n = this.options.baseUrl + n)), this._addUrlArgsIfNecessaryToUrl(n)
      }, n.prototype.isBuild = function() {
        return this.options.isBuild
      }, n.prototype.isDuplicateMessageIgnoredFor = function(e) {
        return this.ignoreDuplicateModulesMap.hasOwnProperty(e)
      }, n.prototype.getConfigForModule = function(e) {
        if (this.options.config) return this.options.config[e]
      }, n.prototype.shouldCatchError = function() {
        return this.options.catchError
      },
      n.prototype.shouldRecordStats = function() {
        return this.options.recordStats
      }, n.prototype.onError = function(e) {
        this.options.onError(e)
      }, n
  }();
  e.Configuration = n
}(AMDLoader || (AMDLoader = {}));
! function(e) {
  var t = function() {
      function e(e) {
        this.actualScriptLoader = e, this.callbackMap = {}
      }
      return e.prototype.load = function(e, t, n, r) {
        var o = this,
          i = {
            callback: n,
            errorback: r
          };
        this.callbackMap.hasOwnProperty(t) ? this.callbackMap[t].push(i) : (this.callbackMap[t] = [i], this.actualScriptLoader.load(e, t, function() {
          return o.triggerCallback(t)
        }, function(e) {
          return o.triggerErrorback(t, e)
        }))
      }, e.prototype.triggerCallback = function(e) {
        var t = this.callbackMap[e];
        delete this.callbackMap[e];
        for (var n = 0; n < t.length; n++) t[n].callback()
      }, e.prototype.triggerErrorback = function(e, t) {
        var n = this.callbackMap[e];
        delete this.callbackMap[e];
        for (var r = 0; r < n.length; r++) n[r].errorback(t)
      }, e
    }(),
    n = function() {
      function e() {}
      return e.prototype.attachListeners = function(e, t, n) {
        var r = function() {
            e.removeEventListener("load", o), e.removeEventListener("error", i)
          },
          o = function(e) {
            r(),
              t()
          },
          i = function(e) {
            r(), n(e)
          };
        e.addEventListener("load", o), e.addEventListener("error", i)
      }, e.prototype.load = function(e, t, n, r) {
        var o = document.createElement("script");
        o.setAttribute("async", "async"), o.setAttribute("type", "text/javascript"), this.attachListeners(o, n, r), o.setAttribute("src", t), document.getElementsByTagName("head")[0].appendChild(o)
      }, e
    }(),
    r = function() {
      function e() {}
      return e.prototype.load = function(e, t, n, r) {
        try {
          importScripts(t), n()
        } catch (e) {
          r(e)
        }
      }, e
    }(),
    o = function() {
      function t(e) {
        this._env = e, this._didInitialize = !1, this._didPatchNodeRequire = !1
      }
      return t.prototype._init = function(e) {
          if (!this._didInitialize) {
            this._didInitialize = !0, this._fs = e("fs"), this._vm = e("vm"), this._path = e("path"), this._crypto = e("crypto"), this._jsflags = "";
            for (var t = 0, n = process.argv; t < n.length; t++) {
              var r = n[t];
              if (0 === r.indexOf("--js-flags=")) {
                this._jsflags = r;
                break
              }
            }
          }
        }, t.prototype._initNodeRequire = function(t, n) {
          var r = n.getConfig().getOptionsLiteral().nodeCachedDataDir;
          if (r && !this._didPatchNodeRequire) {
            this._didPatchNodeRequire = !0;
            var o = this,
              i = t("module");
            i.prototype._compile = function(t, s) {
              t = t.replace(/^#!.*/, "");
              var a = i.wrap(t),
                d = o._getCachedDataPath(r, s),
                u = {
                  filename: s
                };
              try {
                u.cachedData = o._fs.readFileSync(d)
              } catch (e) {
                u.produceCachedData = !0
              }
              var l = new o._vm.Script(a, u),
                c = l.runInThisContext(u),
                f = o._path.dirname(s),
                h = function(e) {
                  var t = e.constructor,
                    n = function(t) {
                      try {
                        return e.require(t)
                      } finally {}
                    };
                  return n.resolve = function(n) {
                    return t._resolveFilename(n, e)
                  }, n.main = process.mainModule, n.extensions = t._extensions, n.cache = t._cache, n
                }(this),
                p = [this.exports, h, this, s, f, process, e.global, Buffer],
                g = c.apply(this.exports, p);
              return o._processCachedData(n, l, d), g
            }
          }
        }, t.prototype.load = function(n, r, o, i) {
          var s = this,
            a = n.getConfig().getOptionsLiteral(),
            d = a.nodeRequire || e.global.nodeRequire,
            u = a.nodeInstrumenter || function(e) {
              return e
            };
          this._init(d), this._initNodeRequire(d, n);
          var l = n.getRecorder();
          if (/^node\|/.test(r)) {
            var c = r.split("|"),
              f = null;
            try {
              f = d(c[1])
            } catch (e) {
              return void i(e)
            }
            n.enqueueDefineAnonymousModule([], function() {
              return f
            }), o()
          } else r = e.Utilities.fileUriToFilePath(this._env.isWindows, r), this._fs.readFile(r, {
            encoding: "utf8"
          }, function(e, d) {
            if (e) i(e);
            else {
              var c = s._path.normalize(r),
                f = c;
              if (s._env.isElectronRenderer) {
                var h = f.match(/^([a-z])\:(.*)/i);
                f = h ? "file:///" + (h[1].toUpperCase() + ":" + h[2]).replace(/\\/g, "/") : "file://" + f
              }
              var p, g = "(function (require, define, __filename, __dirname) { ";
              if (p = d.charCodeAt(0) === t._BOM ? g + d.substring(1) + "\n});" : g + d + "\n});", p = u(p, c), a.nodeCachedDataDir) {
                var v = s._getCachedDataPath(a.nodeCachedDataDir, r);
                s._fs.readFile(v, function(e, t) {
                  var i = {
                      filename: f,
                      produceCachedData: void 0 === t,
                      cachedData: t
                    },
                    a = s._loadAndEvalScript(n, r, f, p, i, l);
                  o(), s._processCachedData(n, a, v)
                })
              } else s._loadAndEvalScript(n, r, f, p, {
                filename: f
              }, l), o()
            }
          })
        }, t.prototype._loadAndEvalScript = function(t, n, r, o, i, s) {
          s.record(e.LoaderEventType.NodeBeginEvaluatingScript, n);
          var a = new this._vm.Script(o, i);
          return a.runInThisContext(i).call(e.global, t.getGlobalAMDRequireFunc(), t.getGlobalAMDDefineFunc(), r, this._path.dirname(n)),
            s.record(e.LoaderEventType.NodeEndEvaluatingScript, n), a
        }, t.prototype._getCachedDataPath = function(e, t) {
          var n = this._crypto.createHash("md5").update(t, "utf8").update(this._jsflags, "utf8").digest("hex"),
            r = this._path.basename(t).replace(/\.js$/, "");
          return this._path.join(e, r + "-" + n + ".code")
        }, t.prototype._processCachedData = function(e, n, r) {
          var o = this;
          n.cachedDataRejected ? (e.getConfig().getOptionsLiteral().onNodeCachedData({
            errorCode: "cachedDataRejected",
            path: r
          }), t._runSoon(function() {
            return o._fs.unlink(r, function(t) {
              t && e.getConfig().getOptionsLiteral().onNodeCachedData({
                errorCode: "unlink",
                path: r,
                detail: t
              })
            })
          }, e.getConfig().getOptionsLiteral().nodeCachedDataWriteDelay)) : n.cachedDataProduced && (e.getConfig().getOptionsLiteral().onNodeCachedData(void 0, {
            path: r,
            length: n.cachedData.length
          }), t._runSoon(function() {
            return o._fs.writeFile(r, n.cachedData, function(t) {
              t && e.getConfig().getOptionsLiteral().onNodeCachedData({
                errorCode: "writeFile",
                path: r,
                detail: t
              })
            })
          }, e.getConfig().getOptionsLiteral().nodeCachedDataWriteDelay))
        },
        t._runSoon = function(e, t) {
          var n = t + Math.ceil(Math.random() * t);
          setTimeout(e, n)
        }, t
    }();
  o._BOM = 65279, e.createScriptLoader = function(e) {
    return new t(e.isWebWorker ? new r : e.isNode ? new o(e) : new n)
  }
}(AMDLoader || (AMDLoader = {}));
! function(e) {
  var t = function() {
    function t(e) {
      var t = e.lastIndexOf("/");
      this.fromModulePath = -1 !== t ? e.substr(0, t + 1) : ""
    }
    return t._normalizeModuleId = function(e) {
      var t, n = e;
      for (t = /\/\.\//; t.test(n);) n = n.replace(t, "/");
      for (n = n.replace(/^\.\//g, ""), t = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//; t.test(n);) n = n.replace(t, "/");
      return n = n.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//, "")
    }, t.prototype.resolveModule = function(n) {
      var r = n;
      return e.Utilities.isAbsolutePath(r) || (e.Utilities.startsWith(r, "./") || e.Utilities.startsWith(r, "../")) && (r = t._normalizeModuleId(this.fromModulePath + r)), r
    }, t
  }();
  t.ROOT = new t(""), e.ModuleIdResolver = t;
  var n = function() {
    function t(e, t, n, r, o, i) {
      this.id = e, this.strId = t, this.dependencies = n, this._callback = r, this._errorback = o,
        this.moduleIdResolver = i, this.exports = {}, this.exportsPassedIn = !1, this.unresolvedDependenciesCount = this.dependencies.length, this._isComplete = !1
    }
    return t._safeInvokeFunction = function(t, n) {
      try {
        return {
          returnedValue: t.apply(e.global, n),
          producedError: null
        }
      } catch (e) {
        return {
          returnedValue: null,
          producedError: e
        }
      }
    }, t._invokeFactory = function(t, n, r, o) {
      return t.isBuild() && !e.Utilities.isAnonymousModule(n) ? {
        returnedValue: null,
        producedError: null
      } : t.shouldCatchError() ? this._safeInvokeFunction(r, o) : {
        returnedValue: r.apply(e.global, o),
        producedError: null
      }
    }, t.prototype.complete = function(n, r, o) {
      this._isComplete = !0;
      var i = null;
      if (this._callback)
        if ("function" == typeof this._callback) {
          n.record(e.LoaderEventType.BeginInvokeFactory, this.strId);
          var s = t._invokeFactory(r, this.strId, this._callback, o);
          i = s.producedError, n.record(e.LoaderEventType.EndInvokeFactory, this.strId), i || void 0 === s.returnedValue || this.exportsPassedIn && !e.Utilities.isEmpty(this.exports) || (this.exports = s.returnedValue)
        } else this.exports = this._callback;
      i && r.onError({
        errorCode: "factory",
        moduleId: this.strId,
        detail: i
      }), this.dependencies = null, this._callback = null, this._errorback = null, this.moduleIdResolver = null
    }, t.prototype.onDependencyError = function(e) {
      return !!this._errorback && (this._errorback(e), !0)
    }, t.prototype.isComplete = function() {
      return this._isComplete
    }, t
  }();
  e.Module = n;
  var r = function() {
      function e() {
        this._nextId = 0, this._strModuleIdToIntModuleId = new Map, this._intModuleIdToStrModuleId = [], this.getModuleId("exports"), this.getModuleId("module"), this.getModuleId("require")
      }
      return e.prototype.getMaxModuleId = function() {
        return this._nextId
      }, e.prototype.getModuleId = function(e) {
        var t = this._strModuleIdToIntModuleId.get(e);
        return void 0 === t && (t = this._nextId++, this._strModuleIdToIntModuleId.set(e, t), this._intModuleIdToStrModuleId[t] = e), t
      }, e.prototype.getStrModuleId = function(e) {
        return this._intModuleIdToStrModuleId[e]
      }, e
    }(),
    o = function() {
      return function(e) {
        this.id = e
      }
    }();
  o.EXPORTS = new o(0), o.MODULE = new o(1), o.REQUIRE = new o(2), e.RegularDependency = o;
  var i = function() {
    return function(e, t, n) {
      this.id = e, this.pluginId = t, this.pluginParam = n
    }
  }();
  e.PluginDependency = i;
  var s = function() {
    function s(t, n, o, i, s) {
      void 0 === s && (s = 0), this._env = t, this._scriptLoader = n, this._loaderAvailableTimestamp = s, this._defineFunc = o, this._requireFunc = i, this._moduleIdProvider = new r, this._config = new e.Configuration(this._env), this._modules2 = [], this._knownModules2 = [], this._inverseDependencies2 = [], this._inversePluginDependencies2 = new Map, this._currentAnnonymousDefineCall = null, this._recorder = null, this._buildInfoPath = [], this._buildInfoDefineStack = [], this._buildInfoDependencies = []
    }
    return s.prototype.reset = function() {
        return new s(this._env, this._scriptLoader, this._defineFunc, this._requireFunc, this._loaderAvailableTimestamp)
      }, s.prototype.getGlobalAMDDefineFunc = function() {
        return this._defineFunc
      }, s.prototype.getGlobalAMDRequireFunc = function() {
        return this._requireFunc
      }, s._findRelevantLocationInStack = function(e, t) {
        for (var n = function(e) {
            return e.replace(/\\/g, "/")
          }, r = n(e), o = t.split(/\n/), i = 0; i < o.length; i++) {
          var s = o[i].match(/(.*):(\d+):(\d+)\)?$/);
          if (s) {
            var a = s[1],
              d = s[2],
              u = s[3],
              l = Math.max(a.lastIndexOf(" ") + 1, a.lastIndexOf("(") + 1);
            if (a = a.substr(l), (a = n(a)) === r) {
              var c = {
                line: parseInt(d, 10),
                col: parseInt(u, 10)
              };
              return 1 === c.line && (c.col -= "(function (require, define, __filename, __dirname) { ".length), c
            }
          }
        }
        throw new Error("Could not correlate define call site for needle " + e)
      }, s.prototype.getBuildInfo = function() {
        if (!this._config.isBuild()) return null;
        for (var e = [], t = 0, n = 0, r = this._modules2.length; n < r; n++) {
          var o = this._modules2[n];
          if (o) {
            var i = this._buildInfoPath[o.id] || null,
              a = this._buildInfoDefineStack[o.id] || null,
              d = this._buildInfoDependencies[o.id];
            e[t++] = {
              id: o.strId,
              path: i,
              defineLocation: i && a ? s._findRelevantLocationInStack(i, a) : null,
              dependencies: d,
              shim: null,
              exports: o.exports
            }
          }
        }
        return e
      }, s.prototype.getRecorder = function() {
        return this._recorder || (this._config.shouldRecordStats() ? this._recorder = new e.LoaderEventRecorder(this._loaderAvailableTimestamp) : this._recorder = e.NullLoaderEventRecorder.INSTANCE), this._recorder
      },
      s.prototype.getLoaderEvents = function() {
        return this.getRecorder().getEvents()
      }, s.prototype.enqueueDefineAnonymousModule = function(e, t) {
        if (null !== this._currentAnnonymousDefineCall) throw new Error("Can only have one anonymous define call per script file");
        var n = null;
        this._config.isBuild() && (n = new Error("StackLocation").stack), this._currentAnnonymousDefineCall = {
          stack: n,
          dependencies: e,
          callback: t
        }
      }, s.prototype.defineModule = function(e, r, o, i, s, a) {
        var d = this;
        void 0 === a && (a = new t(e));
        var u = this._moduleIdProvider.getModuleId(e);
        if (this._modules2[u]) this._config.isDuplicateMessageIgnoredFor(e) || console.warn("Duplicate definition of module '" + e + "'");
        else {
          var l = new n(u, e, this._normalizeDependencies(r, a), o, i, a);
          this._modules2[u] = l, this._config.isBuild() && (this._buildInfoDefineStack[u] = s, this._buildInfoDependencies[u] = l.dependencies.map(function(e) {
            return d._moduleIdProvider.getStrModuleId(e.id)
          })), this._resolve(l)
        }
      }, s.prototype._normalizeDependency = function(e, t) {
        if ("exports" === e) return o.EXPORTS;
        if ("module" === e) return o.MODULE;
        if ("require" === e) return o.REQUIRE;
        var n = e.indexOf("!");
        if (n >= 0) {
          var r = t.resolveModule(e.substr(0, n)),
            s = t.resolveModule(e.substr(n + 1)),
            a = this._moduleIdProvider.getModuleId(r + "!" + s),
            d = this._moduleIdProvider.getModuleId(r);
          return new i(a, d, s)
        }
        return new o(this._moduleIdProvider.getModuleId(t.resolveModule(e)))
      }, s.prototype._normalizeDependencies = function(e, t) {
        for (var n = [], r = 0, o = 0, i = e.length; o < i; o++) n[r++] = this._normalizeDependency(e[o], t);
        return n
      }, s.prototype._relativeRequire = function(t, n, r, o) {
        if ("string" == typeof n) return this.synchronousRequire(n, t);
        this.defineModule(e.Utilities.generateAnonymousModule(), n, r, o, null, t)
      }, s.prototype.synchronousRequire = function(e, n) {
        void 0 === n && (n = new t(e));
        var r = this._normalizeDependency(e, n),
          o = this._modules2[r.id];
        if (!o) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + e + "'. This is the first mention of this module!");
        if (!o.isComplete()) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + e + "'. This module has not been resolved completely yet.");
        return o.exports
      }, s.prototype.configure = function(t, n) {
        var r = this._config.shouldRecordStats();
        this._config = n ? new e.Configuration(this._env, t) : this._config.cloneAndMerge(t), this._config.shouldRecordStats() && !r && (this._recorder = null)
      }, s.prototype.getConfig = function() {
        return this._config
      }, s.prototype._onLoad = function(e) {
        if (null !== this._currentAnnonymousDefineCall) {
          var t = this._currentAnnonymousDefineCall;
          this._currentAnnonymousDefineCall = null, this.defineModule(this._moduleIdProvider.getStrModuleId(e), t.dependencies, t.callback, null, t.stack)
        }
      }, s.prototype._createLoadError = function(e, t) {
        var n = this;
        return {
          errorCode: "load",
          moduleId: this._moduleIdProvider.getStrModuleId(e),
          neededBy: (this._inverseDependencies2[e] || []).map(function(e) {
            return n._moduleIdProvider.getStrModuleId(e)
          }),
          detail: t
        }
      }, s.prototype._onLoadError = function(e, t) {
        for (var n = this._createLoadError(e, t), r = [], o = 0, i = this._moduleIdProvider.getMaxModuleId(); o < i; o++) r[o] = !1;
        var s = !1,
          a = [];
        for (a.push(e), r[e] = !0; a.length > 0;) {
          var d = a.shift(),
            u = this._modules2[d];
          u && (s = u.onDependencyError(n) || s);
          var l = this._inverseDependencies2[d];
          if (l)
            for (var o = 0, i = l.length; o < i; o++) {
              var c = l[o];
              r[c] || (a.push(c), r[c] = !0)
            }
        }
        s || this._config.onError(n)
      }, s.prototype._hasDependencyPath = function(e, t) {
        var n = this._modules2[e];
        if (!n) return !1;
        for (var r = [], o = 0, i = this._moduleIdProvider.getMaxModuleId(); o < i; o++) r[o] = !1;
        var s = [];
        for (s.push(n), r[e] = !0; s.length > 0;) {
          var a = s.shift().dependencies;
          if (a)
            for (var o = 0, i = a.length; o < i; o++) {
              var d = a[o];
              if (d.id === t) return !0;
              var u = this._modules2[d.id];
              u && !r[d.id] && (r[d.id] = !0, s.push(u))
            }
        }
        return !1
      }, s.prototype._findCyclePath = function(e, t, n) {
        if (e === t || 50 === n) return [e];
        var r = this._modules2[e];
        if (!r) return null;
        for (var o = r.dependencies, i = 0, s = o.length; i < s; i++) {
          var a = this._findCyclePath(o[i].id, t, n + 1);
          if (null !== a) return a.push(e), a
        }
        return null
      }, s.prototype._createRequire = function(t) {
        var n = this,
          r = function(e, r, o) {
            return n._relativeRequire(t, e, r, o)
          };
        return r.toUrl = function(e) {
          return n._config.requireToUrl(t.resolveModule(e))
        }, r.getStats = function() {
          return n.getLoaderEvents()
        }, r.__$__nodeRequire = e.global.nodeRequire, r
      }, s.prototype._loadModule = function(t) {
        var n = this;
        if (!this._modules2[t] && !this._knownModules2[t]) {
          this._knownModules2[t] = !0;
          var r = this._moduleIdProvider.getStrModuleId(t),
            o = this._config.moduleIdToPaths(r);
          this._env.isNode && -1 === r.indexOf("/") && o.push("node|" + r);
          var i = -1,
            s = function(r) {
              if (++i >= o.length) n._onLoadError(t, r);
              else {
                var a = o[i],
                  d = n.getRecorder();
                if (n._config.isBuild() && "empty:" === a) return n._buildInfoPath[t] = a, n.defineModule(n._moduleIdProvider.getStrModuleId(t), [], null, null, null), void n._onLoad(t);
                d.record(e.LoaderEventType.BeginLoadingScript, a), n._scriptLoader.load(n, a, function() {
                  n._config.isBuild() && (n._buildInfoPath[t] = a), d.record(e.LoaderEventType.EndLoadingScriptOK, a), n._onLoad(t)
                }, function(t) {
                  d.record(e.LoaderEventType.EndLoadingScriptError, a), s(t)
                })
              }
            };
          s(null)
        }
      },
      s.prototype._loadPluginDependency = function(e, n) {
        var r = this;
        if (!this._modules2[n.id] && !this._knownModules2[n.id]) {
          this._knownModules2[n.id] = !0;
          var o = function(e) {
            r.defineModule(r._moduleIdProvider.getStrModuleId(n.id), [], e, null, null)
          };
          o.error = function(e) {
            r._config.onError(r._createLoadError(n.id, e))
          }, e.load(n.pluginParam, this._createRequire(t.ROOT), o, this._config.getOptionsLiteral())
        }
      }, s.prototype._resolve = function(e) {
        for (var t = this, n = e.dependencies, r = 0, s = n.length; r < s; r++) {
          var a = n[r];
          if (a !== o.EXPORTS)
            if (a !== o.MODULE)
              if (a !== o.REQUIRE) {
                var d = this._modules2[a.id];
                if (d && d.isComplete()) e.unresolvedDependenciesCount--;
                else if (this._hasDependencyPath(a.id, e.id)) {
                  console.warn("There is a dependency cycle between '" + this._moduleIdProvider.getStrModuleId(a.id) + "' and '" + this._moduleIdProvider.getStrModuleId(e.id) + "'. The cyclic path follows:");
                  var u = this._findCyclePath(a.id, e.id, 0);
                  u.reverse(), u.push(a.id), console.warn(u.map(function(e) {
                      return t._moduleIdProvider.getStrModuleId(e)
                    }).join(" => \n")),
                    e.unresolvedDependenciesCount--
                } else if (this._inverseDependencies2[a.id] = this._inverseDependencies2[a.id] || [], this._inverseDependencies2[a.id].push(e.id), a instanceof i) {
                  var l = this._modules2[a.pluginId];
                  if (l && l.isComplete()) {
                    this._loadPluginDependency(l.exports, a);
                    continue
                  }
                  var c = this._inversePluginDependencies2.get(a.pluginId);
                  c || (c = [], this._inversePluginDependencies2.set(a.pluginId, c)), c.push(a), this._loadModule(a.pluginId)
                } else this._loadModule(a.id)
              } else e.unresolvedDependenciesCount--;
          else e.unresolvedDependenciesCount--;
          else e.exportsPassedIn = !0, e.unresolvedDependenciesCount--
        }
        0 === e.unresolvedDependenciesCount && this._onModuleComplete(e)
      }, s.prototype._onModuleComplete = function(e) {
        var t = this,
          n = this.getRecorder();
        if (!e.isComplete()) {
          for (var r = e.dependencies, i = [], s = 0, a = r.length; s < a; s++) {
            var d = r[s];
            if (d !== o.EXPORTS)
              if (d !== o.MODULE)
                if (d !== o.REQUIRE) {
                  var u = this._modules2[d.id];
                  i[s] = u ? u.exports : null
                } else i[s] = this._createRequire(e.moduleIdResolver);
            else i[s] = {
              id: e.strId,
              config: function() {
                return t._config.getConfigForModule(e.strId)
              }
            };
            else i[s] = e.exports
          }
          e.complete(n, this._config, i);
          var l = this._inverseDependencies2[e.id];
          if (this._inverseDependencies2[e.id] = null, l)
            for (var s = 0, a = l.length; s < a; s++) {
              var c = l[s],
                f = this._modules2[c];
              f.unresolvedDependenciesCount--, 0 === f.unresolvedDependenciesCount && this._onModuleComplete(f)
            }
          var h = this._inversePluginDependencies2.get(e.id);
          if (h) {
            this._inversePluginDependencies2.delete(e.id);
            for (var s = 0, a = h.length; s < a; s++) this._loadPluginDependency(e.exports, h[s])
          }
        }
      }, s
  }();
  e.ModuleManager = s
}(AMDLoader || (AMDLoader = {}));
var define, AMDLoader;
! function(e) {
  function t() {
    ! function() {
      (r = function(e, t, r) {
        "string" != typeof e && (r = t, t = e, e = null), "object" == typeof t && Array.isArray(t) || (r = t, t = null), t || (t = ["require", "exports", "module"]), e ? n.defineModule(e, t, r, null, null) : n.enqueueDefineAnonymousModule(t, r)
      }).amd = {
        jQuery: !0
      };
      var t = function(e, t) {
        void 0 === t && (t = !1), n.configure(e, t)
      };
      (o = function() {
        if (1 === arguments.length) {
          if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) return void t(arguments[0]);
          if ("string" == typeof arguments[0]) return n.synchronousRequire(arguments[0])
        }
        if (2 !== arguments.length && 3 !== arguments.length || !Array.isArray(arguments[0])) throw new Error("Unrecognized require call");
        n.defineModule(e.Utilities.generateAnonymousModule(), arguments[0], arguments[1], arguments[2], null)
      }).config = t, o.getConfig = function() {
        return n.getConfig().getOptionsLiteral()
      }, o.reset = function() {
        n = n.reset()
      }, o.getBuildInfo = function() {
        return n.getBuildInfo()
      }, o.getStats = function() {
        return n.getLoaderEvents()
      }
    }();
    var t = e.Environment.detect(),
      i = e.createScriptLoader(t);
    if (n = new e.ModuleManager(t, i, r, o, e.Utilities.getHighPerformanceTimestamp()), t.isNode) {
      var s = e.global.require || require,
        a = function(t) {
          n.getRecorder().record(e.LoaderEventType.NodeBeginNativeRequire, t);
          try {
            return s(t)
          } finally {
            n.getRecorder().record(e.LoaderEventType.NodeEndNativeRequire, t)
          }
        };
      e.global.nodeRequire = a, o.nodeRequire = a
    }
    t.isNode && !t.isElectronRenderer ? (module.exports = o, define = function() {
      r.apply(null, arguments)
    }, require = o) : (void 0 !== e.global.require && "function" != typeof e.global.require && o.config(e.global.require), t.isElectronRenderer ? define = function() {
      r.apply(null, arguments)
    } : e.global.define = define = r, e.global.require = o, e.global.require.__$__nodeRequire = a)
  }
  var n = null,
    r = null,
    o = null;
  e.init = t, "undefined" != typeof doNotInitLoader || "function" == typeof e.global.define && e.global.define.amd || t()
}(AMDLoader || (AMDLoader = {}));
var CSSLoaderPlugin;
! function(e) {
  function t() {
    define("vs/css", new r)
  }
  var n = function() {
      function e() {
        this._pendingLoads = 0
      }
      return e.prototype.attachListeners = function(e, t, n, r) {
          var o = function() {
              t.removeEventListener("load", i), t.removeEventListener("error", s)
            },
            i = function(e) {
              o(), n()
            },
            s = function(e) {
              o(), r(e)
            };
          t.addEventListener("load", i), t.addEventListener("error", s)
        }, e.prototype._onLoad = function(e, t) {
          this._pendingLoads--, t()
        }, e.prototype._onLoadError = function(e, t, n) {
          this._pendingLoads--, t(n)
        },
        e.prototype._insertLinkNode = function(e) {
          this._pendingLoads++;
          var t = document.head || document.getElementsByTagName("head")[0],
            n = t.getElementsByTagName("link") || document.head.getElementsByTagName("script");
          n.length > 0 ? t.insertBefore(e, n[n.length - 1]) : t.appendChild(e)
        }, e.prototype.createLinkTag = function(e, t, n, r) {
          var o = this,
            i = document.createElement("link");
          i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("data-name", e);
          return this.attachListeners(e, i, function() {
            return o._onLoad(e, n)
          }, function(t) {
            return o._onLoadError(e, r, t)
          }), i.setAttribute("href", t), i
        }, e.prototype._linkTagExists = function(e, t) {
          var n, r, o, i, s = document.getElementsByTagName("link");
          for (n = 0, r = s.length; n < r; n++)
            if (o = s[n].getAttribute("data-name"), i = s[n].getAttribute("href"), o === e || i === t) return !0;
          return !1
        }, e.prototype.load = function(e, t, n, r) {
          if (this._linkTagExists(e, t)) n();
          else {
            var o = this.createLinkTag(e, t, n, r);
            this._insertLinkNode(o)
          }
        }, e
    }(),
    r = function() {
      function e() {
        this._cssLoader = new n
      }
      return e.prototype.load = function(e, t, n) {
        var r = t.toUrl(e + ".css");
        this._cssLoader.load(e, r, function(e) {
          n({})
        }, function(e) {
          "function" == typeof n.error && n.error("Could not find " + r + " or it was empty")
        })
      }, e
    }();
  e.CSSPlugin = r, e.init = t, "undefined" == typeof doNotInitLoader && t()
}(CSSLoaderPlugin || (CSSLoaderPlugin = {}));
var NLSLoaderPlugin;
! function(e) {
  function t(e, t, n) {
    var r;
    return r = 0 === t.length ? e : e.replace(/\{(\d+)\}/g, function(e, n) {
      var r = n[0];
      return void 0 !== t[r] ? t[r] : e
    }), n.isPseudo && (r = "［" + r.replace(/[aouei]/g, "$&$&") + "］"), r
  }

  function n(e, n) {
    return function(r, o) {
      var i = Array.prototype.slice.call(arguments, 2);
      return t(e[r], i, n)
    }
  }

  function r() {
    define("vs/nls", new i(o.detect()))
  }
  var o = function() {
      function e(e) {
        this.isPseudo = e
      }
      return e.detect = function() {
        return new e("undefined" != typeof document && document.location && document.location.hash.indexOf("pseudo=true") >= 0)
      }, e
    }(),
    i = function() {
      function e(e) {
        var n = this;
        this._env = e, this.localize = function(e, r) {
          for (var o = [], i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
          return function(e, n, r) {
            for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
            return t(r, o, e)
          }.apply(void 0, [n._env, e, r].concat(o))
        }
      }
      return e.prototype.setPseudoTranslation = function(e) {
        this._env = new o(e)
      }, e.prototype.create = function(e, t) {
        return {
          localize: n(t[e], this._env)
        }
      }, e.prototype.load = function(t, r, o, i) {
        var s = this;
        if (i = i || {}, t && 0 !== t.length) {
          var a = i["vs/nls"] || {},
            d = a.availableLanguages ? function(e, t) {
              var n = e[t];
              return n || (n = e["*"]) || null
            }(a.availableLanguages, t) : null,
            u = ".nls";
          null !== d && d !== e.DEFAULT_TAG && (u = u + "." + d), r([t + u], function(e) {
            Array.isArray(e) ? e.localize = n(e, s._env) : e.localize = n(e[t], s._env), o(e)
          })
        } else o({
          localize: this.localize
        })
      }, e
    }();
  i.DEFAULT_TAG = "i-default", e.NLSPlugin = i, e.init = r, "undefined" == typeof doNotInitLoader && r()
}(NLSLoaderPlugin || (NLSLoaderPlugin = {}));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ca023a700f35212071dfe9544272719cbbf80e4c/core/vs\loader.js.map