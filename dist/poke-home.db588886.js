// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/js/poke-home.js":[function(require,module,exports) {
var pokemonList,
  numb = 0,
  limit = 12;
var pokedex = function pokedex() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(limit, "&offset=0")).then(function (i) {
    return i.json();
  }).then(function (i) {
    var v = 200;
    i.results.forEach(function (s, a) {
      setTimeout(function () {
        var v = i.results[numb].name;
        numb++, fetch("https://pokeapi.co/api/v2/pokemon/".concat(v)).then(function (i) {
          return i.json();
        }).then(function (i) {
          var s = i.sprites.front_default,
            a = "";
          if (i.types[0]) {
            var d = i.types[0].type.name;
            if ("normal" == d) var a = "<div class='normal'>" + d + "</div>";
            if ("fire" == d) var a = "<div class='fire'>" + d + "</div>";
            if ("grass" == d) var a = "<div class='grass'>" + d + "</div>";
            if ("water" == d) var a = "<div class='water'>" + d + "</div>";
            if ("ice" == d) var a = "<div class='ice'>" + d + "</div>";
            if ("electric" == d) var a = "<div class='electric'>" + d + "</div>";
            if ("fighting" == d) var a = "<div class='fighting'>" + d + "</div>";
            if ("flying" == d) var a = "<div class='flying'>" + d + "</div>";
            if ("bug" == d) var a = "<div class='bug'>" + d + "</div>";
            if ("ghost" == d) var a = "<div class='ghost'>" + d + "</div>";
            if ("rock" == d) var a = "<div class='rock'>" + d + "</div>";
            if ("ground" == d) var a = "<div class='ground'>" + d + "</div>";
            if ("steel" == d) var a = "<div class='steel'>" + d + "</div>";
            if ("dark" == d) var a = "<div class='dark'>" + d + "</div>";
            if ("psychic" == d) var a = "<div class='psychic'>" + d + "</div>";
            if ("fairy" == d) var a = "<div class='fairy'>" + d + "</div>";
            if ("dragon" == d) var a = "<div class='dragon'>" + d + "</div>";
            if ("poison" == d) var a = "<div class='poison'>" + d + "</div>";
          }
          var r = "";
          if (i.types[1]) {
            var c = i.types[1].type.name;
            if ("normal" == c) var r = "<div class='normal'>" + c + "</div>";
            if ("fire" == c) var r = "<div class='fire'>" + c + "</div>";
            if ("grass" == c) var r = "<div class='grass'>" + c + "</div>";
            if ("water" == c) var r = "<div class='water'>" + c + "</div>";
            if ("ice" == c) var r = "<div class='ice'>" + c + "</div>";
            if ("electric" == c) var r = "<div class='electric'>" + c + "</div>";
            if ("fighting" == c) var r = "<div class='fighting'>" + c + "</div>";
            if ("flying" == c) var r = "<div class='flying'>" + c + "</div>";
            if ("bug" == c) var r = "<div class='bug'>" + c + "</div>";
            if ("ghost" == c) var r = "<div class='ghost'>" + c + "</div>";
            if ("rock" == c) var r = "<div class='rock'>" + c + "</div>";
            if ("ground" == c) var r = "<div class='ground'>" + c + "</div>";
            if ("steel" == c) var r = "<div class='steel'>" + c + "</div>";
            if ("dark" == c) var r = "<div class='dark'>" + c + "</div>";
            if ("psychic" == c) var r = "<div class='psychic'>" + c + "</div>";
            if ("fairy" == c) var r = "<div class='fairy'>" + c + "</div>";
            if ("dragon" == c) var r = "<div class='dragon'>" + c + "</div>";
            if ("poison" == c) var r = "<div class='poison'>" + c + "</div>";
            if ("" == c) var r = "<div></div>";
          }
          Form.innerHTML += "\n          <div class=\"card poke-card ".concat(d, " ").concat(c, " visible\" id=\"").concat(v, "\" onclick=\"updatGIF()\">\n          <img  class=\"p-img\" src=\"").concat(s, "\" alt=\"\" style=\"width: 128px; height: 128px;\"><div class=\"p-name\">").concat(v, "</div><div class=\"row type\">").concat(a).concat(r, "</div></div>");
        });
      }, a * v);
    });
  });
};
pokedex();

//

fetch("https://pokeapi.co/api/v2/pokemon/1").then(function (pokeInfo) {
  return pokeInfo.json();
}).then(function (pokeInfo) {
  var icon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif";
  var ability0 = pokeInfo.abilities[0].ability.name;
  var ability1 = pokeInfo.abilities[1].ability.name;
  var id = pokeInfo.id;
  var stat0 = pokeInfo.stats[0].stat.name;
  var stat1 = pokeInfo.stats[1].stat.name;
  var stat2 = pokeInfo.stats[2].stat.name;
  var stat3 = pokeInfo.stats[3].stat.name;
  var stat4 = pokeInfo.stats[4].stat.name;
  var stat5 = pokeInfo.stats[5].stat.name;
  var _stat0 = pokeInfo.stats[0].base_stat;
  var _stat1 = pokeInfo.stats[1].base_stat;
  var _stat2 = pokeInfo.stats[2].base_stat;
  var _stat3 = pokeInfo.stats[3].base_stat;
  var _stat4 = pokeInfo.stats[4].base_stat;
  var _stat5 = pokeInfo.stats[5].base_stat;
  var type1 = '';
  var type0 = pokeInfo.types[0].type.name;
  if (pokeInfo.types[1]) {
    var type1 = pokeInfo.types[1].type.name;
  }

  // type 1
  if ("normal" == type0) var _type0 = "<div class='normal'>" + type0 + "</div>";
  if ("fire" == type0) var _type0 = "<div class='fire'>" + type0 + "</div>";
  if ("grass" == type0) var _type0 = "<div class='grass'>" + type0 + "</div>";
  if ("water" == type0) var _type0 = "<div class='water'>" + type0 + "</div>";
  if ("ice" == type0) var _type0 = "<div class='ice'>" + type0 + "</div>";
  if ("electric" == type0) var _type0 = "<div class='electric'>" + type0 + "</div>";
  if ("fighting" == type0) var _type0 = "<div class='fighting'>" + type0 + "</div>";
  if ("flying" == type0) var _type0 = "<div class='flying'>" + type0 + "</div>";
  if ("bug" == type0) var _type0 = "<div class='bug'>" + type0 + "</div>";
  if ("ghost" == type0) var _type0 = "<div class='ghost'>" + type0 + "</div>";
  if ("rock" == type0) var _type0 = "<div class='rock'>" + type0 + "</div>";
  if ("ground" == type0) var _type0 = "<div class='ground'>" + type0 + "</div>";
  if ("steel" == type0) var _type0 = "<div class='steel'>" + type0 + "</div>";
  if ("dark" == type0) var _type0 = "<div class='dark'>" + type0 + "</div>";
  if ("psychic" == type0) var _type0 = "<div class='psychic'>" + type0 + "</div>";
  if ("fairy" == type0) var _type0 = "<div class='fairy'>" + type0 + "</div>";
  if ("dragon" == type0) var _type0 = "<div class='dragon'>" + type0 + "</div>";
  if ("poison" == type0) var _type0 = "<div class='poison'>" + type0 + "</div>";

  // type 2
  if ("normal" == type1) var _type1 = "<div class='normal'>" + type1 + "</div>";
  if ("fire" == type1) var _type1 = "<div class='fire'>" + type1 + "</div>";
  if ("grass" == type1) var _type1 = "<div class='grass'>" + type1 + "</div>";
  if ("water" == type1) var _type1 = "<div class='water'>" + type1 + "</div>";
  if ("ice" == type1) var _type1 = "<div class='ice'>" + type1 + "</div>";
  if ("electric" == type1) var _type1 = "<div class='electric'>" + type1 + "</div>";
  if ("fighting" == type1) var _type1 = "<div class='fighting'>" + type1 + "</div>";
  if ("flying" == type1) var _type1 = "<div class='flying'>" + type1 + "</div>";
  if ("bug" == type1) var _type1 = "<div class='bug'>" + type1 + "</div>";
  if ("ghost" == type1) var _type1 = "<div class='ghost'>" + type1 + "</div>";
  if ("rock" == type1) var _type1 = "<div class='rock'>" + type1 + "</div>";
  if ("ground" == type1) var _type1 = "<div class='ground'>" + type1 + "</div>";
  if ("steel" == type1) var _type1 = "<div class='steel'>" + type1 + "</div>";
  if ("dark" == type1) var _type1 = "<div class='dark'>" + type1 + "</div>";
  if ("psychic" == type1) var _type1 = "<div class='psychic'>" + type1 + "</div>";
  if ("fairy" == type1) var _type1 = "<div class='fairy'>" + type1 + "</div>";
  if ("dragon" == type1) var _type1 = "<div class='dragon'>" + type1 + "</div>";
  if ("poison" == type1) var _type1 = "<div class='poison'>" + type1 + "</div>";
  if ("" == type1) var _type1 = "<div></div>";
  infoCard.innerHTML += "\n        <img class=\"p-img-info\" src=\"".concat(icon, "\" alt=\"\" style=\"width: 192px; height: 192px;\">\n        \n        <div class=\"row type type-info\">\n        ").concat(_type0).concat(_type1, "\n        </div>\n        <h2></h2>\n        <div class=\"row\"><h3>Pok\xE9mon id:</h3>  <h3 class=\"stat\">").concat(id, "</h3></div>\n        <div class=\"row\"><h3>Abilities:</h3>\n        <div class=\"column\">\n            <div><h3 class=\"stat\">").concat(ability0, "</h3></div>\n            <div><h3 class=\"stat\">").concat(ability1, "</h3></div>\n        </div>\n        </div>\n\n        <div class=\"row\"><h3>Stats:</h3></div>\n        \n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat0, "</h3><h3 class=\"stat\">").concat(_stat0, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat1, "</h3><h3 class=\"stat\">").concat(_stat1, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat2, "</h3><h3 class=\"stat\">").concat(_stat2, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat3, "</h3><h3 class=\"stat\">").concat(_stat3, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat4, "</h3><h3 class=\"stat\">").concat(_stat4, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat5, "</h3><h3 class=\"stat\">").concat(_stat5, "</h3></div>\n        ");
});
function updatGIF() {
  var divId;
  document.addEventListener('click', function (e) {
    // Retrieve id from clicked element
    divId = e.target.id;
    // If element has id
    if (divId !== '') {
      var icon = "https://projectpokemon.org/images/normal-sprite/" + divId + ".gif";
      infoCard.innerHTML = "\n              <img class=\"p-img-info\" src=\"".concat(icon, "\" alt=\"\" style=\"width: 192px; height: 192px;\">\n              ");
      fetch("https://pokeapi.co/api/v2/pokemon/".concat(divId)).then(function (pokeInfo) {
        return pokeInfo.json();
      }).then(function (pokeInfo) {
        var ability0 = pokeInfo.abilities[0].ability.name;
        var ability1 = pokeInfo.abilities[1].ability.name;
        var id = pokeInfo.id;
        var stat0 = pokeInfo.stats[0].stat.name;
        var stat1 = pokeInfo.stats[1].stat.name;
        var stat2 = pokeInfo.stats[2].stat.name;
        var stat3 = pokeInfo.stats[3].stat.name;
        var stat4 = pokeInfo.stats[4].stat.name;
        var stat5 = pokeInfo.stats[5].stat.name;
        var _stat0 = pokeInfo.stats[0].base_stat;
        var _stat1 = pokeInfo.stats[1].base_stat;
        var _stat2 = pokeInfo.stats[2].base_stat;
        var _stat3 = pokeInfo.stats[3].base_stat;
        var _stat4 = pokeInfo.stats[4].base_stat;
        var _stat5 = pokeInfo.stats[5].base_stat;
        var type1 = '';
        var type0 = pokeInfo.types[0].type.name;
        if (pokeInfo.types[1]) {
          var type1 = pokeInfo.types[1].type.name;
        }

        // type 1
        if ("normal" == type0) var _type0 = "<div class='normal'>" + type0 + "</div>";
        if ("fire" == type0) var _type0 = "<div class='fire'>" + type0 + "</div>";
        if ("grass" == type0) var _type0 = "<div class='grass'>" + type0 + "</div>";
        if ("water" == type0) var _type0 = "<div class='water'>" + type0 + "</div>";
        if ("ice" == type0) var _type0 = "<div class='ice'>" + type0 + "</div>";
        if ("electric" == type0) var _type0 = "<div class='electric'>" + type0 + "</div>";
        if ("fighting" == type0) var _type0 = "<div class='fighting'>" + type0 + "</div>";
        if ("flying" == type0) var _type0 = "<div class='flying'>" + type0 + "</div>";
        if ("bug" == type0) var _type0 = "<div class='bug'>" + type0 + "</div>";
        if ("ghost" == type0) var _type0 = "<div class='ghost'>" + type0 + "</div>";
        if ("rock" == type0) var _type0 = "<div class='rock'>" + type0 + "</div>";
        if ("ground" == type0) var _type0 = "<div class='ground'>" + type0 + "</div>";
        if ("steel" == type0) var _type0 = "<div class='steel'>" + type0 + "</div>";
        if ("dark" == type0) var _type0 = "<div class='dark'>" + type0 + "</div>";
        if ("psychic" == type0) var _type0 = "<div class='psychic'>" + type0 + "</div>";
        if ("fairy" == type0) var _type0 = "<div class='fairy'>" + type0 + "</div>";
        if ("dragon" == type0) var _type0 = "<div class='dragon'>" + type0 + "</div>";
        if ("poison" == type0) var _type0 = "<div class='poison'>" + type0 + "</div>";

        // type 2
        if ("normal" == type1) var _type1 = "<div class='normal'>" + type1 + "</div>";
        if ("fire" == type1) var _type1 = "<div class='fire'>" + type1 + "</div>";
        if ("grass" == type1) var _type1 = "<div class='grass'>" + type1 + "</div>";
        if ("water" == type1) var _type1 = "<div class='water'>" + type1 + "</div>";
        if ("ice" == type1) var _type1 = "<div class='ice'>" + type1 + "</div>";
        if ("electric" == type1) var _type1 = "<div class='electric'>" + type1 + "</div>";
        if ("fighting" == type1) var _type1 = "<div class='fighting'>" + type1 + "</div>";
        if ("flying" == type1) var _type1 = "<div class='flying'>" + type1 + "</div>";
        if ("bug" == type1) var _type1 = "<div class='bug'>" + type1 + "</div>";
        if ("ghost" == type1) var _type1 = "<div class='ghost'>" + type1 + "</div>";
        if ("rock" == type1) var _type1 = "<div class='rock'>" + type1 + "</div>";
        if ("ground" == type1) var _type1 = "<div class='ground'>" + type1 + "</div>";
        if ("steel" == type1) var _type1 = "<div class='steel'>" + type1 + "</div>";
        if ("dark" == type1) var _type1 = "<div class='dark'>" + type1 + "</div>";
        if ("psychic" == type1) var _type1 = "<div class='psychic'>" + type1 + "</div>";
        if ("fairy" == type1) var _type1 = "<div class='fairy'>" + type1 + "</div>";
        if ("dragon" == type1) var _type1 = "<div class='dragon'>" + type1 + "</div>";
        if ("poison" == type1) var _type1 = "<div class='poison'>" + type1 + "</div>";
        if ("" == type1) var _type1 = "<div></div>";
        infoCard.innerHTML = "\n        <img class=\"p-img-info\" src=\"".concat(icon, "\" alt=\"\" style=\"width: 192px; height: 192px;\">\n        \n        <div class=\"row type type-info\">\n        ").concat(_type0).concat(_type1, "\n        </div>\n        <h2></h2>\n        <div class=\"row\"><h3>Pok\xE9mon id:</h3>  <h3 class=\"stat\">").concat(id, "</h3></div>\n        <div class=\"row\"><h3>Abilities:</h3>\n        <div class=\"column\">\n            <div><h3 class=\"stat\">").concat(ability0, "</h3></div>\n            <div><h3 class=\"stat\">").concat(ability1, "</h3></div>\n        </div>\n        </div>\n\n        <div class=\"row\"><h3>Stats:</h3></div>\n        \n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat0, "</h3><h3 class=\"stat\">").concat(_stat0, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat1, "</h3><h3 class=\"stat\">").concat(_stat1, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat2, "</h3><h3 class=\"stat\">").concat(_stat2, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat3, "</h3><h3 class=\"stat\">").concat(_stat3, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat4, "</h3><h3 class=\"stat\">").concat(_stat4, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat5, "</h3><h3 class=\"stat\">").concat(_stat5, "</h3></div>\n        ");
      });
    }
  });
}
},{}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51659" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/poke-home.js"], null)
//# sourceMappingURL=/poke-home.db588886.js.map