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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// Display index
_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var t;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return fetch("https://raw.githubusercontent.com/Tijl-Pleuger-Vista/project-5/main/app/assets/js/data.txt");
      case 2:
        _context.next = 4;
        return _context.sent.text();
      case 4:
        t = _context.sent;
        Form.innerHTML = t;
      case 6:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();
var ID;
var itemList;
var pokemonList,
  numb = 0,
  limit = 12;
var v = 100;
// OG Display index
// let pokedex = () => {  
//     fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`).then(i => i.json()).then(i => {
//     i.results.forEach(function(s, a) {
//         setTimeout(function() {
//             var v = i.results[numb].name;
//             numb++, fetch(`https://pokeapi.co/api/v2/pokemon/${v}`).then(i => i.json()).then(i => {
//                 console.log(i)
//             var s = i.sprites.front_default,
//             a = "";
//                 if (i.types[0]) {
//                 var d = i.types[0].type.name;
//                 if ("normal" == d) var a = "<div class='normal'>" + d + "</div>";
//                 if ("fire" == d) var a = "<div class='fire'>" + d + "</div>";
//                 if ("grass" == d) var a = "<div class='grass'>" + d + "</div>";
//                 if ("water" == d) var a = "<div class='water'>" + d + "</div>";
//                 if ("ice" == d) var a = "<div class='ice'>" + d + "</div>";
//                 if ("electric" == d) var a = "<div class='electric'>" + d + "</div>";
//                 if ("fighting" == d) var a = "<div class='fighting'>" + d + "</div>";
//                 if ("flying" == d) var a = "<div class='flying'>" + d + "</div>";
//                 if ("bug" == d) var a = "<div class='bug'>" + d + "</div>";
//                 if ("ghost" == d) var a = "<div class='ghost'>" + d + "</div>";
//                 if ("rock" == d) var a = "<div class='rock'>" + d + "</div>";
//                 if ("ground" == d) var a = "<div class='ground'>" + d + "</div>";
//                 if ("steel" == d) var a = "<div class='steel'>" + d + "</div>";
//                 if ("dark" == d) var a = "<div class='dark'>" + d + "</div>";
//                 if ("psychic" == d) var a = "<div class='psychic'>" + d + "</div>";
//                 if ("fairy" == d) var a = "<div class='fairy'>" + d + "</div>";
//                 if ("dragon" == d) var a = "<div class='dragon'>" + d + "</div>";
//                 if ("poison" == d) var a = "<div class='poison'>" + d + "</div>"
//             }
//         var r = "";
//             if (i.types[1]) {
//                 var c = i.types[1].type.name;
//                 if ("normal" == c) var r = "<div class='normal'>" + c + "</div>";
//                 if ("fire" == c) var r = "<div class='fire'>" + c + "</div>";
//                 if ("grass" == c) var r = "<div class='grass'>" + c + "</div>";
//                 if ("water" == c) var r = "<div class='water'>" + c + "</div>";
//                 if ("ice" == c) var r = "<div class='ice'>" + c + "</div>";
//                 if ("electric" == c) var r = "<div class='electric'>" + c + "</div>";
//                 if ("fighting" == c) var r = "<div class='fighting'>" + c + "</div>";
//                 if ("flying" == c) var r = "<div class='flying'>" + c + "</div>";
//                 if ("bug" == c) var r = "<div class='bug'>" + c + "</div>";
//                 if ("ghost" == c) var r = "<div class='ghost'>" + c + "</div>";
//                 if ("rock" == c) var r = "<div class='rock'>" + c + "</div>";
//                 if ("ground" == c) var r = "<div class='ground'>" + c + "</div>";
//                 if ("steel" == c) var r = "<div class='steel'>" + c + "</div>";
//                 if ("dark" == c) var r = "<div class='dark'>" + c + "</div>";
//                 if ("psychic" == c) var r = "<div class='psychic'>" + c + "</div>";
//                 if ("fairy" == c) var r = "<div class='fairy'>" + c + "</div>";
//                 if ("dragon" == c) var r = "<div class='dragon'>" + c + "</div>";
//                 if ("poison" == c) var r = "<div class='poison'>" + c + "</div>";
//                 if ("" == c) var r = "<div></div>"
//             }
//                 Form.innerHTML += 
//                     `
//                     <div id="${v}" class="card poke-card ${d} ${c} visible" onclick="updatGIF()">
//                     <img id="${v}" class="p-img" src="${s}" alt="" style="width: 128px; height: 128px;"><div class="p-name">${v}</div><div class="row type">${a}${r}</div>
//                     </div>
//                     `
//                 })
//             }, a * v)
//         })
//     })
// };
// pokedex();

fetch("https://pokeapi.co/api/v2/pokemon/1").then(function (pokeInfo) {
  return pokeInfo.json();
}).then(function (pokeInfo) {
  var icon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif";
  var shadow = "https://raw.githubusercontent.com/Tijl-Pleuger-Vista/project-5/main/app/assets/content/shadow.png";
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
  infoCard.innerHTML += "\n        <img class=\"p-img-info\" src=\"".concat(icon, "\" alt=\"\" style=\"width: 192px; height: 192px;\">\n        <img class=\"p-img-shadow\" src=\"").concat(shadow, "\">\n        <div class=\"row type type-info\">").concat(_type0).concat(_type1, "</div>\n        <div class=\"row\"><h3>Pok\xE9mon id:</h3>  <h3 class=\"stat\">").concat(id, "</h3></div>\n        <div class=\"row\"><h3>Abilities:</h3>\n            <div class=\"column\">\n                <div><h3 class=\"stat\">").concat(ability0, "</h3></div>\n                <div><h3 class=\"stat\">").concat(ability1, "</h3></div>\n            </div>\n        </div>\n        <div class=\"row\"><h3>Stats:</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat0, "</h3><h3 class=\"stat\">").concat(_stat0, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat1, "</h3><h3 class=\"stat\">").concat(_stat1, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat2, "</h3><h3 class=\"stat\">").concat(_stat2, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat3, "</h3><h3 class=\"stat\">").concat(_stat3, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat4, "</h3><h3 class=\"stat\">").concat(_stat4, "</h3></div>\n        <div class=\"row\"><h3 style=\"margin-left: 75px;\">").concat(stat5, "</h3><h3 class=\"stat\">").concat(_stat5, "</h3></div>\n        ");
});
var pokemarket = function pokemarket() {
  fetch("https://pokeapi.co/api/v2/item/poke-ball").then(function (itemList) {
    return itemList.json();
  }).then(function (itemList) {
    console.log(itemList);
    var name = itemList.name;
    var cost = itemList.cost;
    var sprite = itemList.sprites.default;
    marketplace.innerHTML += "\n        <div class=\"card poke-card-plus\">\n            <img  class=\"p-img\" src=\"".concat(sprite, "\" alt=\"\" style=\"width: 128px; height: 128px;\">\n            <div class=\"p-name\">").concat(name, "</div>\n            <div class=\"p-name\">").concat(cost, " Pok\xE9-yen</div>\n            <button class=\"button button-buy\" onclick=\"\"><div class=\"row\"><h1>Buy    </h1></div></button>\n        </div>\n        ");
  });
};
pokemarket();
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63747" + '/');
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