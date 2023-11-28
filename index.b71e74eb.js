// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gmPuC":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RaycasterCanvasComponent", ()=>RaycasterCanvasComponent);
var _src = require("@rafjack/typescript-raytracer/src");
class RaycasterCanvasComponent {
    constructor(){
        this.size = 600;
        this.sectorSize = this.size < 100 ? Math.round(this.size / 100 * 10) : this.size / 100 * 10;
        this.counterFrom_X = 0;
        this.counterTo_X = this.sectorSize;
        this.counterFrom_Y = 0;
        this.counterTo_Y = this.sectorSize;
        this.canvasId = "raycasterCanvas";
        this.canvas = document.getElementById(this.canvasId);
        this.cancelRendering = false;
        this.canvasImageData = null;
        this.rawImageData = null;
        this.ctx = null;
    }
    initializeCanvasAndSizes() {
        this.canvas = document.getElementById(this.canvasId);
        this.canvas.width = this.size;
        this.canvas.height = this.size;
        this.ctx = this.canvas.getContext("2d");
        if (!this.canvas || !this.ctx) throw new Error(`There is no canvas with id ${this.canvasId} on this page.`);
        this.canvasImageData = this.ctx.createImageData(this.size, this.size);
        this.rawImageData = this.canvasImageData.data;
        // initialize canvas with black color
        this.fillCanvasWithBlack();
        this.ctx.putImageData(this.canvasImageData, 0, 0);
        this.sectorSize = this.size < 100 ? Math.round(this.size / 100 * 10) : this.size / 100 * 10;
        let uid = (0, _src.RayCasterBuilder).uuid();
        const canvasParent = this.canvas.parentNode;
        window.history.pushState({}, uid, `?uid=${uid}`);
        const resizableContainer = canvasParent;
        var self = this;
        // bind the mouse down event to startResize function
        if (resizableContainer) {
            resizableContainer.addEventListener("mousedown", (e)=>{
                startResizing(e);
            });
            // Function to start resizing
            function startResizing(e) {
                e.preventDefault();
                // Initial mouse position
                const initialX = e.clientX;
                const initialY = e.clientY;
                // Initial dimensions of the resizable container
                // @ts-ignore
                const initialWidth = resizableContainer.offsetWidth;
                // @ts-ignore
                const initialHeight = resizableContainer.offsetHeight;
                // Aspect ratio of the resizable container
                const aspectRatio = initialWidth / initialHeight;
                // Function to handle mouse move
                function handleMouseMove(e) {
                    const deltaX = e.clientX - initialX;
                    const deltaY = e.clientY - initialY;
                    // Calculate the new width and height while maintaining the aspect ratio
                    const newWidth = initialWidth + deltaX;
                    const newHeight = newWidth / aspectRatio;
                    // Apply the new dimensions to the resizable container
                    // @ts-ignore
                    resizableContainer.style.width = `${newWidth}px`;
                    // @ts-ignore
                    resizableContainer.style.height = `${newHeight}px`;
                }
                // Function to handle mouse up
                function handleMouseUp() {
                    // Remove event listeners on mouse up
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseup", handleMouseUp);
                }
                // Add event listeners for mouse move and mouse up
                window.addEventListener("mousemove", handleMouseMove);
                window.addEventListener("mouseup", handleMouseUp);
                // Add event listener for mouse release
                window.addEventListener("mouseup", handleMouseRelease);
                // function to handle mouse release
                function handleMouseRelease(e) {
                    e.preventDefault();
                    // Remove event listeners on mouse release
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseup", handleMouseUp);
                    window.removeEventListener("mouseup", handleMouseRelease);
                    // call the resize canvas function
                    self.reset();
                }
            }
        }
    }
    reset() {}
    fillCanvasWithBlack() {
        if (this.ctx && this.rawImageData && this.canvasImageData) {
            (0, _src.RayCasterImager).fillWithBlack(this.rawImageData, this.size, this.size);
            this.ctx.putImageData(this.canvasImageData, 0, 0);
        }
    }
    draw(from_x, to_x, from_y, to_y) {
        const plane = (0, _src.RayCasterBuilder).createPlane();
        plane.setTransform((0, _src.RayCasterBuilder).getTranslationMatrix(0, 0.01, 0));
        const floorMaterial = plane.getMaterial();
        floorMaterial.setColor(new (0, _src.Color)(1, 0.9, 0.9));
        floorMaterial.setSpecular(0);
        floorMaterial.setReflective(0.4);
        floorMaterial.pattern = (0, _src.RayCasterBuilder).createBlendedGradientAndRingPattern(new (0, _src.Color)(1, 0, 0), new (0, _src.Color)(0, 0, 1));
        plane.setMaterial(floorMaterial);
        const middleSphere = (0, _src.RayCasterBuilder).createSphere();
        middleSphere.setTransform((0, _src.RayCasterBuilder).getTranslationMatrix(-0.5, 1, 0.5));
        const middleSphereMaterial = middleSphere.getMaterial();
        middleSphereMaterial.setDiffuse(0.0);
        middleSphereMaterial.setSpecular(1.0);
        middleSphereMaterial.setShininess(300);
        middleSphereMaterial.setReflective(4);
        middleSphereMaterial.setTransparency(0.9);
        middleSphereMaterial.setRefractiveIndex(1.5);
        //middleSphereMaterial.pattern = RayCasterBuilder.buildStripePattern(WHITE, BLACK);
        middleSphere.setMaterial(middleSphereMaterial);
        const rightSphere = (0, _src.RayCasterBuilder).createSphere();
        rightSphere.setTransform((0, _src.RayCasterArithmetic).multiplyMatrix((0, _src.RayCasterBuilder).getTranslationMatrix(1.5, 0.5, -0.5), (0, _src.RayCasterBuilder).getScalingMatrix(0.5, 0.5, 0.5)));
        const rightSphereMaterial = rightSphere.getMaterial();
        const rightSpherePattern = (0, _src.RayCasterBuilder).createGradientPattern(new (0, _src.Color)(1, 0, 0), new (0, _src.Color)(1, 1, 0));
        rightSpherePattern.setTransform((0, _src.RayCasterBuilder).getScalingMatrix(2, 2, 2));
        rightSphereMaterial.setDiffuse(0.7);
        rightSphereMaterial.setSpecular(0.3);
        rightSphereMaterial.setReflective(0.4);
        rightSphereMaterial.setReflective(0.4);
        rightSphereMaterial.setTransparency(0.7);
        rightSphereMaterial.pattern = rightSpherePattern;
        rightSphere.setMaterial(rightSphereMaterial);
        const leftSphere = (0, _src.RayCasterBuilder).createSphere();
        leftSphere.setTransform((0, _src.RayCasterArithmetic).multiplyMatrix((0, _src.RayCasterBuilder).getTranslationMatrix(-1.5, 0.33, -0.75), (0, _src.RayCasterBuilder).getScalingMatrix(0.33, 0.33, 0.33)));
        const leftSphereMaterial = leftSphere.getMaterial();
        leftSphereMaterial.setDiffuse(0.7);
        leftSphereMaterial.setSpecular(0.3);
        leftSphereMaterial.setReflective(0.4);
        leftSphereMaterial.pattern = (0, _src.RayCasterBuilder).createNestedStripeAndGradientPattern(new (0, _src.Color)(1, 1, 0), new (0, _src.Color)(1, 0, 1));
        leftSphereMaterial.pattern.setTransform((0, _src.RayCasterBuilder).getScalingMatrix(0.5, 0.5, 0.5));
        leftSphere.setMaterial(leftSphereMaterial);
        const world = (0, _src.RayCasterBuilder).createDefaultWorld();
        const lightSource = (0, _src.RayCasterBuilder).createPointLight(new (0, _src.Point)(-10, 10, -10), new (0, _src.Color)(1, 1, 1));
        world.setLightSource(lightSource);
        world.setShapes([
            plane,
            leftSphere,
            middleSphere,
            rightSphere
        ]);
        // only add the plane and middleSphere to the world
        // world.setShapes([plane, middleSphere]);
        const camera = (0, _src.RayCasterBuilder).createCamera(this.size, this.size, Math.PI / 3);
        camera.setTranform((0, _src.RayCasterArithmetic).viewTransform(new (0, _src.Point)(0, 1.5, -5), new (0, _src.Point)(0, 1, 0), new (0, _src.Vector)(0, 1, 0)));
        // WHEN
        if (this.rawImageData && this.ctx && this.canvasImageData) {
            (0, _src.RayCasterImager).renderOnRawImageDataSector(camera, world, this.rawImageData, from_x, to_x, from_y, to_y);
            this.ctx.putImageData(this.canvasImageData, 0, 0);
        }
    }
    callBack() {
        this.draw(this.counterFrom_X, this.counterTo_X, this.counterFrom_Y, this.counterTo_Y);
        const rowFinished = this.counterTo_X === this.size;
        const colFinished = this.counterTo_Y === this.size;
        this.counterFrom_X = this.counterTo_X;
        this.counterTo_X += this.sectorSize;
        if (!rowFinished) {
            if (!this.cancelRendering) window.requestAnimationFrame(this.callBack.bind(this));
            else this.initializeCanvasAndSizes();
        } else if (rowFinished && !colFinished) {
            this.counterFrom_X = 0;
            this.counterTo_X = this.sectorSize;
            this.counterFrom_Y = this.counterTo_Y;
            this.counterTo_Y += this.sectorSize;
            if (!this.cancelRendering) window.requestAnimationFrame(this.callBack.bind(this));
            else this.initializeCanvasAndSizes();
        }
    }
}
let rayCasterCanvasComponent = new RaycasterCanvasComponent();
rayCasterCanvasComponent.initializeCanvasAndSizes();
rayCasterCanvasComponent.callBack();

},{"@rafjack/typescript-raytracer/src":"gU1FB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gU1FB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _raycasterBuilder = require("./lib/builder/raycaster.builder");
parcelHelpers.exportAll(_raycasterBuilder, exports);
var _raycasterMath = require("./lib/math/raycaster.math");
parcelHelpers.exportAll(_raycasterMath, exports);
var _raycasterModel = require("./lib/model/raycaster.model");
parcelHelpers.exportAll(_raycasterModel, exports);
var _raycasterImaging = require("./lib/imaging/raycaster.imaging");
parcelHelpers.exportAll(_raycasterImaging, exports);
var _raycasterPattern = require("./lib/feature/raycaster.pattern");
parcelHelpers.exportAll(_raycasterPattern, exports);
var _raycasterConstants = require("./lib/constants/raycaster.constants");
parcelHelpers.exportAll(_raycasterConstants, exports);

},{"./lib/builder/raycaster.builder":"57AvR","./lib/math/raycaster.math":"h4JqA","./lib/model/raycaster.model":"4CQgY","./lib/imaging/raycaster.imaging":"ls6A6","./lib/feature/raycaster.pattern":"1rOmQ","./lib/constants/raycaster.constants":"5HuXn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"57AvR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RayCasterBuilder", ()=>RayCasterBuilder);
var _raycasterMath = require("../math/raycaster.math");
var _raycasterModel = require("../model/raycaster.model");
var _raycasterPattern = require("../feature/raycaster.pattern");
class RayCasterBuilder {
    static createMatrix(matrixNumbers, rows, columns) {
        return new (0, _raycasterModel.Matrix)(matrixNumbers, rows, columns);
    }
    static getTranslationMatrix(x, y, z) {
        const translationMatrix = this.createIdentityMatrix(4);
        translationMatrix.setNumber(0, 3, x);
        translationMatrix.setNumber(1, 3, y);
        translationMatrix.setNumber(2, 3, z);
        return translationMatrix;
    }
    static getScalingMatrix(x, y, z) {
        const scalingMatrix = this.createIdentityMatrix(4);
        scalingMatrix.setNumber(0, 0, x);
        scalingMatrix.setNumber(1, 1, y);
        scalingMatrix.setNumber(2, 2, z);
        return scalingMatrix;
    }
    static getRotationMatrixX(radians) {
        const rotationX = this.createIdentityMatrix(4);
        rotationX.setNumber(1, 1, Math.cos(radians));
        rotationX.setNumber(1, 2, -Math.sin(radians));
        rotationX.setNumber(2, 1, Math.sin(radians));
        rotationX.setNumber(2, 2, Math.cos(radians));
        return rotationX;
    }
    static getRotationMatrixY(radians) {
        const rotationY = this.createIdentityMatrix(4);
        rotationY.setNumber(0, 0, Math.cos(radians));
        rotationY.setNumber(0, 2, Math.sin(radians));
        rotationY.setNumber(2, 0, -Math.sin(radians));
        rotationY.setNumber(2, 2, Math.cos(radians));
        return rotationY;
    }
    static getRotationMatrixZ(radians) {
        const rotationZ = this.createIdentityMatrix(4);
        rotationZ.setNumber(0, 0, Math.cos(radians));
        rotationZ.setNumber(0, 1, -Math.sin(radians));
        rotationZ.setNumber(1, 0, Math.sin(radians));
        rotationZ.setNumber(1, 1, Math.cos(radians));
        return rotationZ;
    }
    static getShearingMatrix(xy, xz, yx, yz, zx, zy) {
        const shearingMatrix = this.createIdentityMatrix(4);
        shearingMatrix.setNumber(0, 1, xy);
        shearingMatrix.setNumber(0, 2, xz);
        shearingMatrix.setNumber(1, 0, yx);
        shearingMatrix.setNumber(1, 2, yz);
        shearingMatrix.setNumber(2, 0, zx);
        shearingMatrix.setNumber(2, 1, zy);
        return shearingMatrix;
    }
    static createIdentityMatrix(size) {
        if (size < 0) throw new Error(`Size must be positive`);
        const matrixNumbers = [];
        for(let i = 0; i < size; i++){
            for(let j = 0; j < size; j++)if (i === j) matrixNumbers.push(1);
            else matrixNumbers.push(0);
        }
        return new (0, _raycasterModel.Matrix)(matrixNumbers, size, size);
    }
    static createTuple(x, y, z, w) {
        if ((0, _raycasterMath.RayCasterArithmetic).numberEquals(w, 1.0)) return new (0, _raycasterModel.Point)(x, y, z);
        else if ((0, _raycasterMath.RayCasterArithmetic).numberEquals(w, 0.0)) return new (0, _raycasterModel.Vector)(x, y, z);
        return new (0, _raycasterModel.Tuple)(x, y, z, w);
    }
    static createPoint(x, y, z) {
        return new (0, _raycasterModel.Point)(x, y, z);
    }
    static createVector(x, y, z) {
        return new (0, _raycasterModel.Vector)(x, y, z);
    }
    static createColor(r, g, b) {
        return new (0, _raycasterModel.Color)(r, g, b);
    }
    static createCanvas(w, h) {
        return new (0, _raycasterModel.Canvas)(w, h);
    }
    static createRay(origin, direction) {
        return new (0, _raycasterModel.Ray)(origin, direction);
    }
    static createIntersection(t, shape) {
        return new (0, _raycasterModel.Intersection)(t, shape);
    }
    static createSphere() {
        return new (0, _raycasterModel.Sphere)();
    }
    static createPlane() {
        return new (0, _raycasterModel.Plane)();
    }
    static createTestShape() {
        return new (0, _raycasterModel.TestShape)();
    }
    static uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c == "x" ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    }
    static createPointLight(position, intensity) {
        return new (0, _raycasterModel.Light)(position, intensity);
    }
    static createDefaultMaterial() {
        return new (0, _raycasterModel.Material)();
    }
    static createMaterial(ambient, diffuse, specular, shininess, color, reflective, transparency, refractiveIndex) {
        return new (0, _raycasterModel.Material)(ambient, diffuse, specular, shininess, color, reflective, transparency, refractiveIndex);
    }
    static createWorld() {
        return new (0, _raycasterModel.World)();
    }
    static createDefaultWorld() {
        const defaultLight = RayCasterBuilder.createPointLight(new (0, _raycasterModel.Point)(-10, 10, -10), new (0, _raycasterModel.Color)(1, 1, 1));
        const defaultOuterSphere = new (0, _raycasterModel.Sphere)();
        defaultOuterSphere.setMaterial(new (0, _raycasterModel.Material)(0.1, 0.7, 0.2, 200, new (0, _raycasterModel.Color)(0.8, 1.0, 0.6)));
        const defaultInnerSphere = new (0, _raycasterModel.Sphere)();
        defaultInnerSphere.setTransform(RayCasterBuilder.getScalingMatrix(0.5, 0.5, 0.5));
        return new (0, _raycasterModel.World)(defaultLight, [
            defaultOuterSphere,
            defaultInnerSphere
        ]);
    }
    static createCamera(hsize, vsize, fieldOfView) {
        return new (0, _raycasterModel.Camera)(hsize, vsize, fieldOfView);
    }
    static buildStripePattern(WHITE, BLACK) {
        return new (0, _raycasterPattern.StripePattern)(WHITE, BLACK);
    }
    static createGradientPattern(WHITE, BLACK) {
        return new (0, _raycasterPattern.GradientPattern)(WHITE, BLACK);
    }
    static createRingPattern(WHITE, BLACK) {
        return new (0, _raycasterPattern.RingPattern)(WHITE, BLACK);
    }
    static createCheckersPattern(WHITE, BLACK) {
        return new (0, _raycasterPattern.CheckerPattern)(WHITE, BLACK);
    }
    static createNestedStripeAndGradientPattern(a, b) {
        const stripePattern = this.buildStripePattern(a, b);
        const gradientPattern = this.createGradientPattern(a, b);
        return new (0, _raycasterPattern.NestedPattern)(stripePattern, gradientPattern);
    }
    static createBlendedGradientAndRingPattern(a, b) {
        const gradientPattern = this.createGradientPattern(a, b);
        const ringPattern = this.createRingPattern(a, b);
        return new (0, _raycasterPattern.BlendedPattern)(gradientPattern, ringPattern);
    }
    static createPerturbedGradientAndRingPattern(a, b) {
        const gradientPattern = this.createGradientPattern(a, b);
        return this.createPerturbedPattern(gradientPattern);
    }
    static createNestedPattern(a, b) {
        return new (0, _raycasterPattern.NestedPattern)(a, b);
    }
    static createTestPattern() {
        return new (0, _raycasterPattern.TestPattern)();
    }
    static createGlassSphere() {
        const sphere = this.createSphere();
        sphere.setTransform(this.getScalingMatrix(0.5, 0.5, 0.5));
        sphere.getMaterial().setTransparency(1.0);
        sphere.getMaterial().setRefractiveIndex(1.5);
        return sphere;
    }
    static createPerturbedPattern(pattern) {
        return new (0, _raycasterPattern.PerturbedPattern)(pattern);
    }
}

},{"../math/raycaster.math":"h4JqA","../model/raycaster.model":"4CQgY","../feature/raycaster.pattern":"1rOmQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h4JqA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RayCasterArithmetic", ()=>RayCasterArithmetic);
var _raycasterBuilder = require("../builder/raycaster.builder");
var _raycasterModel = require("../model/raycaster.model");
var _raycasterConstants = require("../constants/raycaster.constants");
class RayCasterArithmetic {
    static addPoints(a, b) {
        return (0, _raycasterBuilder.RayCasterBuilder).createPoint(a.x + b.x, a.y + b.y, a.z + b.z);
    }
    static substractPoints(a, b) {
        return (0, _raycasterBuilder.RayCasterBuilder).createTuple(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
    }
    static substractVectors(a, b) {
        return (0, _raycasterBuilder.RayCasterBuilder).createTuple(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
    }
    static substractVectorFromPoint(a, b) {
        return (0, _raycasterBuilder.RayCasterBuilder).createTuple(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
    }
    static addTuples(a, b) {
        return (0, _raycasterBuilder.RayCasterBuilder).createTuple(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
    }
    static substractTuples(a, b) {
        return (0, _raycasterBuilder.RayCasterBuilder).createPoint(a.x - b.x, a.y - b.y, a.z - b.z);
    }
    static addVectors(a, b) {
        return (0, _raycasterBuilder.RayCasterBuilder).createTuple(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
    }
    static addColors(a, b) {
        return (0, _raycasterBuilder.RayCasterBuilder).createColor(a.r + b.r, a.g + b.g, a.b + b.b);
    }
    static substractColors(a, b) {
        return (0, _raycasterBuilder.RayCasterBuilder).createColor(a.r - b.r, a.g - b.g, a.b - b.b);
    }
    static multiplyColor(a, n) {
        return (0, _raycasterBuilder.RayCasterBuilder).createColor(a.r * n, a.g * n, a.b * n);
    }
    static multiplyColors(a, b) {
        return (0, _raycasterBuilder.RayCasterBuilder).createColor(a.r * b.r, a.g * b.g, a.b * b.b);
    }
    static inverseVector(a) {
        return (0, _raycasterBuilder.RayCasterBuilder).createTuple(0 - a.x, 0 - a.y, 0 - a.z, 0 - a.w);
    }
    static inverseTuple(a) {
        return (0, _raycasterBuilder.RayCasterBuilder).createTuple(0 - a.x, 0 - a.y, 0 - a.z, 0 - a.w);
    }
    static multiplyTuple(a, n) {
        return (0, _raycasterBuilder.RayCasterBuilder).createTuple(a.x * n, a.y * n, a.z * n, a.w * n);
    }
    static multiplyPoint(a, n) {
        return (0, _raycasterBuilder.RayCasterBuilder).createPoint(a.x * n, a.y * n, a.z * n);
    }
    static multiplyVector(a, n) {
        return (0, _raycasterBuilder.RayCasterBuilder).createVector(a.x * n, a.y * n, a.z * n);
    }
    static divideTuple(a, n) {
        return (0, _raycasterBuilder.RayCasterBuilder).createTuple(a.x / n, a.y / n, a.z / n, a.w / n);
    }
    static magnitudeOf(a) {
        return Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2) + Math.pow(a.z, 2) + Math.pow(a.w, 2));
    }
    static normalize(a) {
        return this.divideTuple(a, this.magnitudeOf(a));
    }
    static dotProduct(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
    }
    static crossProduct(a, b) {
        return new (0, _raycasterModel.Vector)(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
    }
    static multiplyMatrix(a, b) {
        const multiplicationResultNumbers = [];
        for(let r = 0; r < a.getRows(); r++)for(let c = 0; c < b.getColumns(); c++){
            let result = 0;
            for(let i = 0; i < a.getColumns(); i++)result += a.getNumber(r, i) * b.getNumber(i, c);
            multiplicationResultNumbers.push(result);
        }
        return (0, _raycasterBuilder.RayCasterBuilder).createMatrix(multiplicationResultNumbers, a.getRows(), b.getColumns());
    }
    static transpose(a) {
        const numbers = [];
        for(let r = 0; r < a.getRows(); r++)for(let c = 0; c < a.getColumns(); c++)numbers.push(a.getNumber(c, r));
        return (0, _raycasterBuilder.RayCasterBuilder).createMatrix(numbers, a.getColumns(), a.getRows());
    }
    static getDeterminant(m) {
        if (m.getRows() === 2 && m.getColumns() === 2) return m.getNumber(0, 0) * m.getNumber(1, 1) - m.getNumber(0, 1) * m.getNumber(1, 0);
        let determinant = 0;
        for(let c = 0; c < m.getColumns(); c++)determinant += m.getNumber(0, c) * this.getCofactor(m, 0, c);
        return determinant;
    }
    static isInvertible(m) {
        return this.getDeterminant(m) !== 0;
    }
    static inverse(m) {
        if (!this.isInvertible(m)) throw new Error(`This matrix is not invertible`);
        const inverse = this.nullMatrix(m);
        const determinant = this.getDeterminant(m);
        for(let r = 0; r < m.getRows(); r++)for(let c = 0; c < m.getColumns(); c++){
            const cofactor = this.getCofactor(m, r, c);
            inverse.setNumber(c, r, cofactor / determinant);
        }
        return inverse;
    }
    static getCofactor(m, row, column) {
        const minor = this.getMinor(m, row, column);
        if (this.isOdd(row + column)) return 0 - minor;
        return minor;
    }
    static isOdd(n) {
        return n % 2 === 1;
    }
    static getMinor(m, row, column) {
        const submatrix = this.getSubmatrix(m, row, column);
        return this.getDeterminant(submatrix);
    }
    static getSubmatrix(m, skipRow, skipColumn) {
        const numbers = [];
        for(let r = 0; r < m.getRows(); r++)if (r !== skipRow) {
            for(let c = 0; c < m.getColumns(); c++)if (c !== skipColumn) numbers.push(m.getNumber(r, c));
        }
        return (0, _raycasterBuilder.RayCasterBuilder).createMatrix(numbers, m.getRows() - 1, m.getColumns() - 1);
    }
    static cloneMatrix(m) {
        const numbers = [];
        for(let r = 0; r < m.getRows(); r++)for(let c = 0; c < m.getColumns(); c++)numbers.push(m.getNumber(r, c));
        return (0, _raycasterBuilder.RayCasterBuilder).createMatrix(numbers, m.getRows(), m.getColumns());
    }
    static multiplyMatrixWithPoint(transM, point) {
        const pM = (0, _raycasterBuilder.RayCasterBuilder).createMatrix([
            point.x,
            point.y,
            point.z,
            point.w
        ], 4, 1);
        const resultM = this.multiplyMatrix(transM, pM);
        return new (0, _raycasterModel.Point)(resultM.getNumber(0, 0), resultM.getNumber(1, 0), resultM.getNumber(2, 0));
    }
    static multiplyMatrixWithVector(transM, vector) {
        const vM = (0, _raycasterBuilder.RayCasterBuilder).createMatrix([
            vector.x,
            vector.y,
            vector.z,
            vector.w
        ], 4, 1);
        const resultM = this.multiplyMatrix(transM, vM);
        return new (0, _raycasterModel.Vector)(resultM.getNumber(0, 0), resultM.getNumber(1, 0), resultM.getNumber(2, 0));
    }
    static nullMatrix(m) {
        const numbers = [];
        for(let r = 0; r < m.getRows(); r++)for(let c = 0; c < m.getColumns(); c++)numbers.push(0);
        return (0, _raycasterBuilder.RayCasterBuilder).createMatrix(numbers, m.getRows(), m.getColumns());
    }
    static tick(environment, projectile) {
        const newPosition = this.addTuples(projectile.position, projectile.velocity);
        const newVelocity = this.addVectors(projectile.velocity, this.addVectors(environment.gravity, environment.wind));
        return new (0, _raycasterModel.Projectile)(newPosition, newVelocity);
    }
    static getRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    static getRayPosition(ray, t) {
        return this.addTuples(ray.getOrigin(), this.multiplyVector(ray.getDirection(), t));
    }
    static numberEquals(x, y) {
        return Math.abs(x - y) < (0, _raycasterConstants.RAYCASTER_EPSILON);
    }
    static getHit(intersections) {
        const candidates = [];
        for (const intersection of intersections.getIntersections())if (intersection.getT() >= 0) candidates.push(intersection);
        candidates.sort((a, b)=>a.getT() - b.getT());
        if (candidates.length === 0) return null;
        return candidates[0];
    }
    static transform(ray, translationMatrix) {
        const resultRay = (0, _raycasterBuilder.RayCasterBuilder).createRay(this.multiplyMatrixWithPoint(translationMatrix, ray.getOrigin()), this.multiplyMatrixWithVector(translationMatrix, ray.getDirection()));
        return resultRay;
    }
    static normalAtPlane(worldObject, world_point) {
        const object_point = RayCasterArithmetic.multiplyMatrixWithPoint(RayCasterArithmetic.inverse(worldObject.getTransform()), world_point);
        const object_normal = worldObject.normalAt(object_point);
        const world_normal = RayCasterArithmetic.multiplyMatrixWithVector(RayCasterArithmetic.transpose(RayCasterArithmetic.inverse(worldObject.getTransform())), object_normal);
        world_normal.w = 0;
        return RayCasterArithmetic.normalize(world_normal);
    }
    static normalAt(worldObject, world_point) {
        if (worldObject instanceof (0, _raycasterModel.Plane)) return this.normalAtPlane(worldObject, world_point);
        const worldObjectOrigin = (0, _raycasterBuilder.RayCasterBuilder).createPoint(0, 0, 0);
        const object_point = RayCasterArithmetic.multiplyMatrixWithPoint(RayCasterArithmetic.inverse(worldObject.getTransform()), world_point);
        const object_normal = RayCasterArithmetic.substractPoints(object_point, worldObjectOrigin);
        const world_normal = RayCasterArithmetic.multiplyMatrixWithVector(RayCasterArithmetic.transpose(RayCasterArithmetic.inverse(worldObject.getTransform())), object_normal);
        world_normal.w = 0;
        return RayCasterArithmetic.normalize(world_normal);
    }
    static reflect(input, normal) {
        const dotProduct = RayCasterArithmetic.dotProduct(input, normal) * 2;
        const a = RayCasterArithmetic.multiplyVector(normal, dotProduct);
        return RayCasterArithmetic.substractVectors(input, a);
    }
    static lighting(material, shape, light, point, eyeVector, normalVector, inShadow = false) {
        let color;
        if (material.pattern) color = material.pattern.colorAtShape(shape, point);
        else color = material.getColor();
        // find the direction to the light source
        const lightVector = RayCasterArithmetic.normalize(RayCasterArithmetic.substractPoints(light.getPosition(), point));
        // compute the ambient contribution
        const ambient = RayCasterArithmetic.multiplyColor(color, material.getAmbient());
        // lightDotNormal represents the cosine of the angle between the
        // light vector and the normal vector. A negative number means the
        // light is on the other side of the surface.
        const lightDotNormal = RayCasterArithmetic.dotProduct(lightVector, normalVector);
        if (lightDotNormal < 0 || inShadow) color = ambient;
        else {
            // compute the diffuse contribution
            const diffuse = RayCasterArithmetic.multiplyColor(color, material.getDiffuse() * lightDotNormal);
            // reflectDotEye represents the cosine of the angle between the
            // reflection vector and the eye vector. A negative number means the
            // light reflects away from the eye.
            const reflectVector = RayCasterArithmetic.reflect(RayCasterArithmetic.inverseVector(lightVector), normalVector);
            const reflectDotEye = RayCasterArithmetic.dotProduct(reflectVector, eyeVector);
            if (reflectDotEye <= 0) color = RayCasterArithmetic.addColors(ambient, diffuse);
            else {
                // compute the specular contribution
                const factor = Math.pow(reflectDotEye, material.getShininess());
                const specular = RayCasterArithmetic.multiplyColor(light.getIntensity(), material.getSpecular() * factor);
                color = RayCasterArithmetic.addColors(RayCasterArithmetic.addColors(ambient, diffuse), specular);
            }
        }
        if (inShadow) return ambient;
        return color;
    }
    static prepareComputations(intersection, ray, intersections = new (0, _raycasterModel.Intersections)()) {
        // precompute some useful values
        const point = RayCasterArithmetic.getRayPosition(ray, intersection.getT());
        const eyeV = RayCasterArithmetic.multiplyVector(ray.getDirection(), -1);
        let normalV = RayCasterArithmetic.normalAt(intersection.getShape(), point);
        let inside = false;
        if (RayCasterArithmetic.dotProduct(normalV, eyeV) < 0) {
            inside = true;
            normalV = RayCasterArithmetic.multiplyVector(normalV, -1);
        }
        const overPoint = RayCasterArithmetic.addTuples(point, RayCasterArithmetic.multiplyPoint(normalV, (0, _raycasterConstants.RAYCASTER_EPSILON)));
        const underPoint = RayCasterArithmetic.substractTuples(point, RayCasterArithmetic.multiplyPoint(normalV, (0, _raycasterConstants.RAYCASTER_EPSILON)));
        let reflectV = RayCasterArithmetic.reflect(ray.getDirection(), normalV);
        let n1 = 1;
        let n2 = 1;
        const containers = [];
        for (const i of intersections.getIntersections()){
            if (i === intersection) {
                if (containers.length === 0) n1 = 1;
                else n1 = containers[containers.length - 1].getMaterial().getRefractiveIndex();
            }
            if (containers.includes(i.getShape())) containers.splice(containers.indexOf(i.getShape()), 1);
            else containers.push(i.getShape());
            if (i === intersection) {
                if (containers.length === 0) n2 = 1;
                else n2 = containers[containers.length - 1].getMaterial().getRefractiveIndex();
                break;
            }
        }
        return new (0, _raycasterModel.Computations)(intersection.getT(), intersection.getShape(), point, overPoint, underPoint, eyeV, normalV, inside, reflectV, n1, n2);
    }
    static shadeHit(world, computations, remaining = (0, _raycasterConstants.RECURSION_DEPTH)) {
        // NOTE: at the moment there is only support for one light source
        // to support multiple light source iterate over all the light
        // sources and add the colors together
        // this will increase the calculation time, especially when shadow are present
        const lightSource = world.getLightSource();
        if (lightSource) {
            const isShadowed = RayCasterArithmetic.isShadowed(world, computations.getOverPoint());
            let surfaceColor = RayCasterArithmetic.lighting(computations.getObject().getMaterial(), computations.getObject(), lightSource, computations.getOverPoint(), computations.getEyeV(), computations.getNormalV(), isShadowed);
            let reflectedColor = RayCasterArithmetic.reflectedColor(world, computations, remaining);
            let refractedColor = RayCasterArithmetic.refractedColor(world, computations, remaining);
            const material = computations.getObject().getMaterial();
            if (material.getReflective() > 0 && material.getTransparency() > 0) {
                const reflectance = RayCasterArithmetic.schlick(computations);
                reflectedColor = RayCasterArithmetic.multiplyColor(reflectedColor, reflectance);
                refractedColor = RayCasterArithmetic.multiplyColor(refractedColor, 1 - reflectance);
                return RayCasterArithmetic.addColors(RayCasterArithmetic.addColors(surfaceColor, reflectedColor), refractedColor);
            } else return RayCasterArithmetic.addColors(RayCasterArithmetic.addColors(surfaceColor, reflectedColor), refractedColor);
        }
        throw new Error("Unable to calculate shade without lightSource in world");
    }
    static colorAt(world, ray, remaining = (0, _raycasterConstants.RECURSION_DEPTH)) {
        const intersections = world.intersect(ray);
        const intersectionResult = RayCasterArithmetic.getHit(intersections);
        if (intersectionResult) {
            const preparedComputations = RayCasterArithmetic.prepareComputations(intersectionResult, ray);
            return RayCasterArithmetic.shadeHit(world, preparedComputations, remaining);
        } else return new (0, _raycasterModel.Color)(0, 0, 0);
    }
    static viewTransform(from, to, up) {
        const forward = RayCasterArithmetic.normalize(RayCasterArithmetic.substractPoints(to, from));
        const upN = RayCasterArithmetic.normalize(up);
        const left = RayCasterArithmetic.crossProduct(forward, upN);
        const trueUp = RayCasterArithmetic.crossProduct(left, forward);
        const orientationNumbers = [
            left.x,
            left.y,
            left.z,
            0,
            trueUp.x,
            trueUp.y,
            trueUp.z,
            0,
            -forward.x,
            -forward.y,
            -forward.z,
            0,
            0,
            0,
            0,
            1
        ];
        const orientationMatrix = (0, _raycasterBuilder.RayCasterBuilder).createMatrix(orientationNumbers, 4, 4);
        const result = RayCasterArithmetic.multiplyMatrix(orientationMatrix, (0, _raycasterBuilder.RayCasterBuilder).getTranslationMatrix(-from.x, -from.y, -from.z));
        return result;
    }
    static rayForPixel(camera, px, py) {
        // the offset from the edge of the canvas to the pixels center
        const xoffset = (px + 0.5) * camera.getPixelSize();
        const yoffset = (py + 0.5) * camera.getPixelSize();
        // the untransformed coordinates of the pixel in world space.
        // (remember that the camera looks toward -z, so +x is to the "left")
        const worldX = camera.getHalfWidth() - xoffset;
        const worldY = camera.getHalfHeight() - yoffset;
        // using the camera matrix, transform the canvas point and the origin,
        // and then compute the rays direction vector.
        // (remember that the canvas is at z=-1)
        const pixel = RayCasterArithmetic.multiplyMatrixWithPoint(RayCasterArithmetic.inverse(camera.getTransform()), new (0, _raycasterModel.Point)(worldX, worldY, -1));
        const origin = RayCasterArithmetic.multiplyMatrixWithPoint(RayCasterArithmetic.inverse(camera.getTransform()), new (0, _raycasterModel.Point)(0, 0, 0));
        const direction = RayCasterArithmetic.normalize(RayCasterArithmetic.substractPoints(pixel, origin));
        return (0, _raycasterBuilder.RayCasterBuilder).createRay(origin, direction);
    }
    static isShadowed(world, point) {
        const lightSource = world.getLightSource();
        if (lightSource) {
            // measure distance from point to light source
            const v = RayCasterArithmetic.substractPoints(lightSource.getPosition(), point);
            const vDistance = RayCasterArithmetic.magnitudeOf(v);
            const vDirection = RayCasterArithmetic.normalize(v);
            // create a ray from point twoards light source
            const shadowRay = (0, _raycasterBuilder.RayCasterBuilder).createRay(point, vDirection);
            // intersect the world with the array
            const interSections = world.intersect(shadowRay);
            // check if there was a hit
            const hit = RayCasterArithmetic.getHit(interSections);
            // when the hit is smaller then the distance point is shadowed
            if (hit && hit.getT() < vDistance) return true;
            return false;
        }
        throw new Error("Error there is no light source is present in this world");
    }
    static reflectedColor(world, comps, remaining) {
        if (remaining <= 0) return new (0, _raycasterModel.Color)(0, 0, 0);
        if (comps.getObject().getMaterial().getReflective() === 0) return new (0, _raycasterModel.Color)(0, 0, 0);
        const reflectRay = (0, _raycasterBuilder.RayCasterBuilder).createRay(comps.getOverPoint(), comps.getReflectV());
        const color = RayCasterArithmetic.colorAt(world, reflectRay, remaining - 1);
        return RayCasterArithmetic.multiplyColor(color, comps.getObject().getMaterial().getReflective());
    }
    static refractedColor(world, comps, remaining) {
        // return black if the recursion limit has been reached
        if (remaining <= 0) return new (0, _raycasterModel.Color)(0, 0, 0);
        // return black if the material is not transparent
        if (comps.getObject().getMaterial().getTransparency() === 0) return new (0, _raycasterModel.Color)(0, 0, 0);
        // find the ratio of first index of refraction to the second
        // and the angle of incidence
        const nRatio = comps.getN1() / comps.getN2();
        const cosI = RayCasterArithmetic.dotProduct(comps.getEyeV(), comps.getNormalV());
        // sin2_t is the "sine squared" of the angle of refraction
        const sin2_t = Math.pow(nRatio, 2) * (1 - Math.pow(cosI, 2));
        // return black if the angle of refraction is greater than 1
        if (sin2_t > 1) return new (0, _raycasterModel.Color)(0, 0, 0);
        // find the cosine of theta_t using trigonometric identity
        const cosT = Math.sqrt(1.0 - sin2_t);
        // compute the direction of the refracted ray
        const direction = RayCasterArithmetic.substractVectors(RayCasterArithmetic.multiplyVector(comps.getNormalV(), nRatio * cosI - cosT), RayCasterArithmetic.multiplyVector(comps.getEyeV(), nRatio));
        // create the refracted ray
        const refractRay = (0, _raycasterBuilder.RayCasterBuilder).createRay(comps.getUnderPoint(), direction);
        // find the color of the refracted ray, making sure to multiply
        // by the transparency value to account for any opacity
        const color = RayCasterArithmetic.colorAt(world, refractRay, remaining - 1);
        return RayCasterArithmetic.multiplyColor(color, comps.getObject().getMaterial().getTransparency());
    }
    static schlick(comps) {
        // find the cosine of the angle between the eye and normal vectors
        let cos = RayCasterArithmetic.dotProduct(comps.getEyeV(), comps.getNormalV());
        // total internal reflection can only occur if n1 > n2
        if (comps.getN1() > comps.getN2()) {
            const n = comps.getN1() / comps.getN2();
            const sin2_t = Math.pow(n, 2) * (1 - Math.pow(cos, 2));
            if (sin2_t > 1) return 1;
            // compute cosine of theta_t using trigonometric identity
            const cos_t = Math.sqrt(1.0 - sin2_t);
            // when n1 > n2, use cos(theta_t) instead
            cos = cos_t;
        }
        const r0 = Math.pow((comps.getN1() - comps.getN2()) / (comps.getN1() + comps.getN2()), 2);
        return r0 + (1 - r0) * Math.pow(1 - cos, 5);
    }
}

},{"../builder/raycaster.builder":"57AvR","../model/raycaster.model":"4CQgY","../constants/raycaster.constants":"5HuXn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4CQgY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tuple", ()=>Tuple);
parcelHelpers.export(exports, "Point", ()=>Point);
parcelHelpers.export(exports, "Vector", ()=>Vector);
parcelHelpers.export(exports, "Color", ()=>Color);
parcelHelpers.export(exports, "Projectile", ()=>Projectile);
parcelHelpers.export(exports, "Environment", ()=>Environment);
parcelHelpers.export(exports, "Canvas", ()=>Canvas);
parcelHelpers.export(exports, "Matrix", ()=>Matrix);
parcelHelpers.export(exports, "Ray", ()=>Ray);
parcelHelpers.export(exports, "Shape", ()=>Shape);
parcelHelpers.export(exports, "TestShape", ()=>TestShape);
parcelHelpers.export(exports, "Plane", ()=>Plane);
parcelHelpers.export(exports, "Sphere", ()=>Sphere);
parcelHelpers.export(exports, "Intersection", ()=>Intersection);
parcelHelpers.export(exports, "Intersections", ()=>Intersections);
parcelHelpers.export(exports, "Light", ()=>Light);
parcelHelpers.export(exports, "Material", ()=>Material);
parcelHelpers.export(exports, "World", ()=>World);
parcelHelpers.export(exports, "Computations", ()=>Computations);
parcelHelpers.export(exports, "Camera", ()=>Camera);
var _raycasterBuilder = require("../builder/raycaster.builder");
var _raycasterMath = require("../math/raycaster.math");
class Tuple {
    constructor(x, y, z, w){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    equals(t) {
        return (0, _raycasterMath.RayCasterArithmetic).numberEquals(t.x, this.x) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(t.y, this.y) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(t.z, this.z) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(t.w, this.w);
    }
}
class Point {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = 1.0;
    }
    equals(t) {
        return (0, _raycasterMath.RayCasterArithmetic).numberEquals(t.x, this.x) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(t.y, this.y) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(t.z, this.z) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(t.w, this.w);
    }
}
class Vector {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = 0.0;
    }
    equals(t) {
        return (0, _raycasterMath.RayCasterArithmetic).numberEquals(t.x, this.x) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(t.y, this.y) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(t.z, this.z) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(t.w, this.w);
    }
}
class Color {
    constructor(r, g, b){
        this.r = r;
        this.g = g;
        this.b = b;
    }
    equals(c) {
        return (0, _raycasterMath.RayCasterArithmetic).numberEquals(c.r, this.r) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(c.g, this.g) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(c.b, this.b);
    }
}
class Projectile {
    constructor(position, velocity){
        this.position = position;
        this.velocity = velocity;
    }
}
class Environment {
    constructor(gravity, wind){
        this.gravity = gravity;
        this.wind = wind;
    }
}
class Canvas {
    constructor(w, h){
        this.w = w;
        this.h = h;
        this.plane = new Array(h);
        for(let i = 0; i < this.plane.length; i++)this.plane[i] = new Array(w);
        // rows => y
        for(let y = 0; y < h; y++)// columns => x
        for(let x = 0; x < w; x++)this.plane[y][x] = new Color(0, 0, 0);
    }
    fill(c) {
        // rows => y
        for(let y = 0; y < this.plane.length; y++)// columns => x
        for(let x = 0; x < this.plane[y].length; x++)this.plane[y][x] = c;
    }
    setPixel(c, x, y) {
        this.plane[y][x] = new Color(c.r, c.g, c.b);
    }
    getPixel(x, y) {
        if (this.plane[y][x]) return new Color(this.plane[y][x].r, this.plane[y][x].g, this.plane[y][x].b);
        return this.plane[y][x];
    }
}
class Matrix {
    constructor(numbers, rows, columns){
        this.rows = rows;
        this.columns = columns;
        this.matrix = new Array(rows);
        for(let i = 0; i < rows; i++)this.matrix[i] = new Array(columns);
        let counter = 0;
        for(let r = 0; r < rows; r++)for(let c = 0; c < columns; c++){
            this.matrix[r][c] = numbers[counter];
            counter += 1;
        }
    }
    getNumber(i, j) {
        if (this.matrix[i][j] != undefined || this.matrix[i][j] != null) return this.matrix[i][j];
        return NaN;
    }
    setNumber(r, c, value) {
        this.matrix[r][c] = value;
    }
    getRows() {
        return this.rows;
    }
    getColumns() {
        return this.columns;
    }
    getSize() {
        return this.rows * this.columns;
    }
    equals(m) {
        if (this.rows !== m.getRows() && this.columns !== m.getColumns()) return false;
        for(let r = 0; r < this.rows; r++)for(let c = 0; c < this.columns; c++){
            if (!(0, _raycasterMath.RayCasterArithmetic).numberEquals(this.matrix[r][c], m.getNumber(r, c))) return false;
        }
        return true;
    }
}
class Ray {
    constructor(origin, direction){
        this.origin = origin;
        this.direction = direction;
    }
    getOrigin() {
        return new Point(this.origin.x, this.origin.y, this.origin.z);
    }
    getDirection() {
        return new Vector(this.direction.x, this.direction.y, this.direction.z);
    }
    equals(r) {
        if (!r) return false;
        return this.origin.equals(r.getOrigin()) && this.direction.equals(r.getDirection());
    }
}
class Shape {
    constructor(){
        this.matrix = (0, _raycasterBuilder.RayCasterBuilder).createIdentityMatrix(4);
        this.material = (0, _raycasterBuilder.RayCasterBuilder).createDefaultMaterial();
        this.id = (0, _raycasterBuilder.RayCasterBuilder).uuid();
    }
    getId() {
        return this.id;
    }
    getTransform() {
        return this.matrix;
    }
    setTransform(m) {
        this.matrix = m;
    }
    getMaterial() {
        /*
        const temp = RayCasterBuilder.createMaterial(
            this.material.getAmbient(),
            this.material.getDiffuse(),
            this.material.getSpecular(),
            this.material.getShininess(),
            this.material.getColor(),
            this.material.getReflective(),
        );
        temp.pattern = this.material.pattern;
        return temp;
        */ return this.material;
    }
    setMaterial(material) {
        this.material = (0, _raycasterBuilder.RayCasterBuilder).createMaterial(material.getAmbient(), material.getDiffuse(), material.getSpecular(), material.getShininess(), material.getColor(), material.getReflective(), material.getTransparency(), material.getRefractiveIndex());
        this.material.pattern = material.pattern;
    }
    normalAt(point) {
        const local_point = this.world_to_object(point);
        const local_normal = this.local_normal_at(local_point);
        return this.normal_to_world(local_normal);
    }
    intersect(ray) {
        const transformedRay = (0, _raycasterMath.RayCasterArithmetic).transform(ray, (0, _raycasterMath.RayCasterArithmetic).inverse(this.getTransform()));
        const result = this.local_intersect(transformedRay);
        return result;
    }
    world_to_object(point) {
        return (0, _raycasterMath.RayCasterArithmetic).multiplyMatrixWithPoint((0, _raycasterMath.RayCasterArithmetic).inverse(this.getTransform()), point);
    }
    normal_to_world(normal) {
        normal = (0, _raycasterMath.RayCasterArithmetic).multiplyMatrixWithVector((0, _raycasterMath.RayCasterArithmetic).transpose((0, _raycasterMath.RayCasterArithmetic).inverse(this.getTransform())), normal);
        normal = (0, _raycasterMath.RayCasterArithmetic).normalize(normal);
        return normal;
    }
    equals(otherSphere) {
        return this.material.equals(otherSphere.getMaterial()) && this.matrix.equals(otherSphere.getTransform());
    }
}
class TestShape extends Shape {
    constructor(origin = new Point(0, 0, 0)){
        super();
        this.savedRay = null;
    }
    local_normal_at(point) {
        return new Vector(point.x, point.y, point.z);
    }
    local_intersect(ray) {
        this.savedRay = ray;
        return new Intersections();
    }
}
class Plane extends Shape {
    constructor(origin = new Point(0, 0, 0)){
        super();
    }
    local_normal_at(point) {
        return new Vector(0, 1, 0);
    }
    local_intersect(ray) {
        if (Math.abs(ray.getDirection().y) < 0.00000000000000000000000000000000000001) return new Intersections();
        const t = -ray.getOrigin().y / ray.getDirection().y;
        return new Intersections(new Intersection(t, this));
    }
}
class Sphere extends Shape {
    constructor(origin = new Point(0, 0, 0)){
        super();
        this.origin = origin;
    }
    local_normal_at(point) {
        return (0, _raycasterMath.RayCasterArithmetic).substractPoints(point, this.origin);
    }
    local_intersect(transformedRay) {
        const shapeToRay = (0, _raycasterMath.RayCasterArithmetic).substractVectors(new Vector(transformedRay.getOrigin().x, transformedRay.getOrigin().y, transformedRay.getOrigin().z), new Vector(0, 0, 0));
        const a = (0, _raycasterMath.RayCasterArithmetic).dotProduct(transformedRay.getDirection(), transformedRay.getDirection());
        const b = 2 * (0, _raycasterMath.RayCasterArithmetic).dotProduct(transformedRay.getDirection(), shapeToRay);
        const c = (0, _raycasterMath.RayCasterArithmetic).dotProduct(shapeToRay, shapeToRay) - 1;
        const discriminant = Math.pow(b, 2) - 4 * a * c;
        if (discriminant < 0) return new Intersections();
        const t1 = (-b - Math.sqrt(discriminant)) / (2 * a);
        const t2 = (-b + Math.sqrt(discriminant)) / (2 * a);
        return new Intersections(new Intersection(t1, this), new Intersection(t2, this));
    }
}
class Intersection {
    constructor(t, shape){
        this.t = t;
        this.shape = shape;
    }
    getT() {
        return this.t;
    }
    getShape() {
        return this.shape;
    }
    equals(o) {
        return o.getT() === this.t && o.getShape().equals(this.shape);
    }
}
class Intersections {
    constructor(...args){
        this.intersections = args;
    }
    getCount() {
        return this.intersections.length;
    }
    getIntersections() {
        return this.intersections;
    }
    getIntersectionAt(i) {
        return this.intersections[i];
    }
}
class Light {
    constructor(position, intensity){
        this.position = position;
        this.intensity = intensity;
    }
    getIntensity() {
        return (0, _raycasterBuilder.RayCasterBuilder).createColor(this.intensity.r, this.intensity.g, this.intensity.b);
    }
    getPosition() {
        return (0, _raycasterBuilder.RayCasterBuilder).createPoint(this.position.x, this.position.y, this.position.z);
    }
    equals(o) {
        return this.position.equals(o.position) && this.intensity.equals(o.intensity);
    }
}
class Material {
    constructor(ambient = 0.1, diffuse = 0.9, specular = 0.9, shininess = 200.0, color = new Color(1, 1, 1), reflective = 0.0, transparency = 0.0, refractiveIndex = 1.0){
        this.ambient = ambient;
        this.diffuse = diffuse;
        this.specular = specular;
        this.shininess = shininess;
        this.color = color;
        this.reflective = reflective;
        this.transparency = transparency;
        this.refractiveIndex = refractiveIndex;
        if (ambient < 0 || diffuse < 0 || specular < 0 || shininess < 0) throw new Error("Material value < 0 is invalid");
    }
    getAmbient() {
        return this.ambient;
    }
    setAmbient(ambient) {
        this.ambient = ambient;
    }
    getDiffuse() {
        return this.diffuse;
    }
    setDiffuse(diffuse) {
        this.diffuse = diffuse;
    }
    getSpecular() {
        return this.specular;
    }
    setSpecular(specular) {
        this.specular = specular;
    }
    getShininess() {
        return this.shininess;
    }
    setShininess(shininess) {
        this.shininess = shininess;
    }
    getColor() {
        return (0, _raycasterBuilder.RayCasterBuilder).createColor(this.color.r, this.color.g, this.color.b);
    }
    setColor(color) {
        this.color = color;
    }
    getReflective() {
        return this.reflective;
    }
    setReflective(reflective) {
        this.reflective = reflective;
    }
    getTransparency() {
        return this.transparency;
    }
    setTransparency(transparency) {
        this.transparency = transparency;
    }
    getRefractiveIndex() {
        return this.refractiveIndex;
    }
    setRefractiveIndex(refractiveIndex) {
        this.refractiveIndex = refractiveIndex;
    }
    equals(o) {
        return (0, _raycasterMath.RayCasterArithmetic).numberEquals(o.ambient, this.ambient) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(o.diffuse, this.diffuse) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(o.specular, this.specular) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(o.shininess, this.shininess) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(o.reflective, this.reflective) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(o.transparency, this.transparency) && (0, _raycasterMath.RayCasterArithmetic).numberEquals(o.refractiveIndex, this.refractiveIndex) && o.color.equals(this.color);
    }
}
class World {
    constructor(lightSource = null, shapes = []){
        this.lightSource = lightSource;
        this.shapes = shapes;
    }
    getShapeAt(index) {
        return this.shapes[index];
    }
    getShapes() {
        return this.shapes;
    }
    getLightSource() {
        return this.lightSource;
    }
    setLightSource(lightSource) {
        this.lightSource = lightSource;
    }
    setShapes(shapes) {
        this.shapes = shapes;
    }
    intersect(ray) {
        const allShapeIntersections = [];
        this.shapes.forEach((shape)=>{
            const shapeIntersections = shape.intersect(ray);
            allShapeIntersections.push(...shapeIntersections.getIntersections());
        });
        allShapeIntersections.sort((a, b)=>{
            return a.getT() - b.getT();
        });
        return new Intersections(...allShapeIntersections);
    }
    contains(shape) {
        let result = false;
        this.shapes.forEach((x)=>{
            if (x.equals(shape)) {
                result = true;
                return;
            }
        });
        return result;
    }
}
class Computations {
    constructor(t, object, point, overPoint, underPoint, eyeV, normalV, inside, reflectV, n1, n2){
        this.t = t;
        this.object = object;
        this.point = point;
        this.overPoint = overPoint;
        this.underPoint = underPoint;
        this.eyeV = eyeV;
        this.normalV = normalV;
        this.inside = inside;
        this.reflectV = reflectV;
        this.n1 = n1;
        this.n2 = n2;
    }
    getT() {
        return this.t;
    }
    getObject() {
        return this.object;
    }
    getPoint() {
        return this.point;
    }
    getEyeV() {
        return this.eyeV;
    }
    getNormalV() {
        return this.normalV;
    }
    isInside() {
        return this.inside;
    }
    getOverPoint() {
        return this.overPoint;
    }
    getUnderPoint() {
        return this.underPoint;
    }
    getReflectV() {
        return this.reflectV;
    }
    getN1() {
        return this.n1;
    }
    getN2() {
        return this.n2;
    }
}
class Camera {
    constructor(hsize, vsize, fieldOfView, transform = (0, _raycasterBuilder.RayCasterBuilder).createIdentityMatrix(4)){
        this.hsize = hsize;
        this.vsize = vsize;
        this.fieldOfView = fieldOfView;
        this.transform = transform;
        this.pixelSize = -1;
        this.halfWidth = -1;
        this.halfHeight = -1;
        this.calculatePixelSize();
    }
    getHSize() {
        return this.hsize;
    }
    getVSize() {
        return this.vsize;
    }
    getFieldOfView() {
        return this.fieldOfView;
    }
    getTransform() {
        return this.transform;
    }
    setTranform(transform) {
        this.transform = transform;
    }
    getPixelSize() {
        return this.pixelSize;
    }
    getHalfWidth() {
        return this.halfWidth;
    }
    getHalfHeight() {
        return this.halfHeight;
    }
    calculatePixelSize() {
        const halfView = Math.tan(this.fieldOfView / 2);
        const aspect = this.hsize / this.vsize;
        if (aspect >= 1) {
            this.halfWidth = halfView;
            this.halfHeight = halfView / aspect;
        } else {
            this.halfWidth = halfView * aspect;
            this.halfHeight = halfView;
        }
        this.pixelSize = this.halfWidth * 2 / this.hsize;
    }
}

},{"../builder/raycaster.builder":"57AvR","../math/raycaster.math":"h4JqA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5HuXn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RAYCASTER_EPSILON", ()=>RAYCASTER_EPSILON);
parcelHelpers.export(exports, "BLACK", ()=>BLACK);
parcelHelpers.export(exports, "WHITE", ()=>WHITE);
parcelHelpers.export(exports, "RECURSION_DEPTH", ()=>RECURSION_DEPTH);
var _raycasterModel = require("../model/raycaster.model");
const RAYCASTER_EPSILON = 0.0001;
const BLACK = new (0, _raycasterModel.Color)(0, 0, 0);
const WHITE = new (0, _raycasterModel.Color)(1, 1, 1);
const RECURSION_DEPTH = 5;

},{"../model/raycaster.model":"4CQgY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1rOmQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Pattern", ()=>Pattern);
parcelHelpers.export(exports, "TestPattern", ()=>TestPattern);
parcelHelpers.export(exports, "StripePattern", ()=>StripePattern);
parcelHelpers.export(exports, "GradientPattern", ()=>GradientPattern);
parcelHelpers.export(exports, "RingPattern", ()=>RingPattern);
parcelHelpers.export(exports, "CheckerPattern", ()=>CheckerPattern);
parcelHelpers.export(exports, "NestedPattern", ()=>NestedPattern);
parcelHelpers.export(exports, "BlendedPattern", ()=>BlendedPattern);
parcelHelpers.export(exports, "PerturbedPattern", ()=>PerturbedPattern);
var _raycasterModel = require("../model/raycaster.model");
var _raycasterMath = require("../math/raycaster.math");
var _raycasterBuilder = require("../builder/raycaster.builder");
class Pattern {
    constructor(){
        this.matrix = (0, _raycasterBuilder.RayCasterBuilder).createIdentityMatrix(4);
    }
    setTransform(matrix) {
        this.matrix = matrix;
    }
    colorAtShape(shape, worldPoint) {
        // what  could be the problem when the gradient is not covering the whole shape
        const objectPoint = (0, _raycasterMath.RayCasterArithmetic).multiplyMatrixWithPoint((0, _raycasterMath.RayCasterArithmetic).inverse(shape.getTransform()), worldPoint);
        const patternPoint = (0, _raycasterMath.RayCasterArithmetic).multiplyMatrixWithPoint((0, _raycasterMath.RayCasterArithmetic).inverse(this.matrix), objectPoint);
        return this.colorAt(patternPoint);
    }
}
class TestPattern extends Pattern {
    constructor(){
        super();
    }
    colorAt(point) {
        return new (0, _raycasterModel.Color)(point.x, point.y, point.z);
    }
}
class StripePattern extends Pattern {
    constructor(a, b){
        super();
        this.a = a;
        this.b = b;
    }
    colorAt(point) {
        if (Math.floor(point.x) % 2 === 0) return this.a;
        return this.b;
    }
}
class GradientPattern extends Pattern {
    constructor(a, b){
        super();
        this.a = a;
        this.b = b;
    }
    colorAt(point) {
        const distance = (0, _raycasterMath.RayCasterArithmetic).substractColors(this.b, this.a);
        const fraction = point.x - Math.floor(point.x);
        return (0, _raycasterMath.RayCasterArithmetic).addColors(this.a, (0, _raycasterMath.RayCasterArithmetic).multiplyColor(distance, fraction));
    }
    colorAtShape(shape, worldPoint) {
        const objectPoint = (0, _raycasterMath.RayCasterArithmetic).multiplyMatrixWithPoint((0, _raycasterMath.RayCasterArithmetic).inverse(shape.getTransform()), worldPoint);
        const patternPoint = (0, _raycasterMath.RayCasterArithmetic).multiplyMatrixWithPoint((0, _raycasterMath.RayCasterArithmetic).inverse(this.matrix), objectPoint);
        return this.colorAt(patternPoint);
    }
}
class RingPattern extends Pattern {
    constructor(a, b){
        super();
        this.a = a;
        this.b = b;
    }
    colorAt(point) {
        if (Math.floor(Math.sqrt(point.x * point.x + point.z * point.z)) % 2 === 0) return this.a;
        return this.b;
    }
}
class CheckerPattern extends Pattern {
    constructor(a, b){
        super();
        this.a = a;
        this.b = b;
    }
    colorAt(point) {
        if ((Math.floor(point.x) + Math.floor(point.y) + Math.floor(point.z)) % 2 === 0) return this.a;
        return this.b;
    }
}
class NestedPattern extends Pattern {
    constructor(a, b){
        super();
        this.a = a;
        this.b = b;
    }
    colorAt(point) {
        if ((Math.floor(point.x) + Math.floor(point.y) + Math.floor(point.z)) % 2 === 0) return this.a.colorAt(point);
        return this.b.colorAt(point);
    }
}
class BlendedPattern extends Pattern {
    constructor(a, b){
        super();
        this.a = a;
        this.b = b;
    }
    colorAt(point) {
        const colorA = this.a.colorAt(point);
        const colorB = this.b.colorAt(point);
        return (0, _raycasterMath.RayCasterArithmetic).addColors(colorA, colorB);
    }
}
class PerturbedPattern extends Pattern {
    constructor(pattern){
        super();
        this.pattern = pattern;
    }
    colorAt(point) {
        const perturbedPoint = new (0, _raycasterModel.Point)(point.x + Math.sin(point.x * point.y * point.z), point.y + Math.sin(point.x * point.y * point.z), point.z + Math.sin(point.x * point.y * point.z));
        return this.pattern.colorAt(perturbedPoint);
    }
}

},{"../model/raycaster.model":"4CQgY","../math/raycaster.math":"h4JqA","../builder/raycaster.builder":"57AvR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ls6A6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RayCasterImager", ()=>RayCasterImager);
var _raycasterBuilder = require("../builder/raycaster.builder");
var _raycasterMath = require("../math/raycaster.math");
class RayCasterImager {
    static getPpmString(canvas) {
        return this.getPpmHeader(canvas) + "\n" + this.getPpmBody(canvas);
    }
    static getPpmHeader(canvas) {
        return `P3\n${canvas.w} ${canvas.h}\n255`;
    }
    static getPpmBody(canvas) {
        let result = "";
        // rows => y
        for(let y = 0; y < canvas.h; y++){
            // columns => x
            let line = "";
            let singleLineLengthCounter = 0;
            for(let x = 0; x < canvas.w; x++){
                const colorCodeRED = this.getRED(canvas.getPixel(x, y));
                if (singleLineLengthCounter + colorCodeRED.length > 70) {
                    line = line.trim() + "\n";
                    singleLineLengthCounter = 0;
                }
                line += colorCodeRED + " ";
                singleLineLengthCounter += (colorCodeRED + " ").length;
                const colorCodeGREEN = this.getGREEN(canvas.getPixel(x, y));
                if (singleLineLengthCounter + colorCodeGREEN.length > 70) {
                    line = line.trim() + "\n";
                    singleLineLengthCounter = 0;
                }
                line += colorCodeGREEN + " ";
                singleLineLengthCounter += (colorCodeGREEN + " ").length;
                const colorCodeBLUE = this.getBLUE(canvas.getPixel(x, y));
                if (singleLineLengthCounter + colorCodeBLUE.length > 70) {
                    line = line.trim() + "\n";
                    singleLineLengthCounter = 0;
                }
                line += colorCodeBLUE + " ";
                singleLineLengthCounter += (colorCodeBLUE + " ").length;
            }
            result += line.trim();
            result += "\n";
        }
        return result.trim() + "\n";
    }
    static getRED(color) {
        let red = 0;
        if (color) red = Math.round(color.r * 255) > 255 ? 255 : Math.round(color.r * 255);
        return `${red}`;
    }
    static getGREEN(color) {
        let green = 0;
        if (color) green = Math.round(color.g * 255) > 255 ? 255 : Math.round(color.g * 255);
        return `${green}`;
    }
    static getBLUE(color) {
        let blue = 0;
        if (color) blue = Math.round(color.b * 255) > 255 ? 255 : Math.round(color.b * 255);
        return `${blue}`;
    }
    static render(camera, world) {
        const image = (0, _raycasterBuilder.RayCasterBuilder).createCanvas(camera.getHSize(), camera.getVSize());
        for(let y = 0; y < camera.getVSize(); y++)for(let x = 0; x < camera.getHSize(); x++){
            const ray = (0, _raycasterMath.RayCasterArithmetic).rayForPixel(camera, x, y);
            const color = (0, _raycasterMath.RayCasterArithmetic).colorAt(world, ray);
            image.setPixel(color, x, y);
        }
        return image;
    }
    static renderOnRawImageData(camera, world, rawImageData) {
        for(let y = 0; y < camera.getVSize(); y++)for(let x = 0; x < camera.getHSize(); x++){
            const ray = (0, _raycasterMath.RayCasterArithmetic).rayForPixel(camera, x, y);
            const color = (0, _raycasterMath.RayCasterArithmetic).colorAt(world, ray);
            this.drawPixel(camera.getVSize(), x, y, color, rawImageData);
        }
    }
    static renderOnRawImageDataSector(camera, world, rawImageData, from_x, to_x, from_y, to_y) {
        for(let y = from_y; y < to_y; y++)for(let x = from_x; x < to_x; x++){
            const ray = (0, _raycasterMath.RayCasterArithmetic).rayForPixel(camera, x, y);
            const color = (0, _raycasterMath.RayCasterArithmetic).colorAt(world, ray);
            this.drawPixel(camera.getVSize(), x, y, color, rawImageData);
        }
    }
    static fillWithBlack(rawImageData, width, height) {
        for(let y = 0; y < height; y++)// for each pixel in the row
        for(let x = 0; x < width; x++){
            const index = 4 * (height * y + x);
            rawImageData[index + 0] = 30;
            rawImageData[index + 1] = 30;
            rawImageData[index + 2] = 30;
            rawImageData[index + 3] = 255;
        }
    }
    static drawPixel(width, x, y, color, rawImageData) {
        const index = 4 * (width * y + x);
        rawImageData[index + 0] = Math.round(color.r * 255);
        rawImageData[index + 1] = Math.round(color.g * 255);
        rawImageData[index + 2] = Math.round(color.b * 255);
        rawImageData[index + 3] = 255;
    }
}

},{"../builder/raycaster.builder":"57AvR","../math/raycaster.math":"h4JqA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gmPuC","h7u1C"], "h7u1C", "parcelRequire501f")

//# sourceMappingURL=index.b71e74eb.js.map
