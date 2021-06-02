!(function (t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var r = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            i,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (t, e, n) {
    t.exports = n(1);
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = [
        "166ShYngJ",
        "dragonbones/Icon_All_backup_tex.json",
        "start",
        "lobbyScreen",
        "enumerable",
        "img",
        "cache",
        "atlas/spin/spin.png",
        "dragonbones/Effect_ALL_Copy_tex.json",
        "length",
        "emoEffectAtlas",
        "preload",
        "64364Xyywlr",
        "checkJSONKey",
        "4435048dWZXBb",
        "path",
        "atlas",
        "value",
        "isGameReady",
        "push",
        "videoPopup",
        "addBitmapFont",
        "atlas/lobbyScreen/lobbyScreen.png",
        "25467AGMMok",
        "spinAtlas",
        "dragonbones/Icon_All_backup_ske.json",
        "atlas/lobbyScreen/lobbyScreen.json",
        "23yTagiz",
        "defineProperty",
        "prototype",
        "1082264UqehGb",
        "3055WAdTdj",
        "checkBitmapFontKey",
        "62809PkUAyW",
        "bigImage/invite_popup_bg.png",
        "bigImage/share_image.jpg",
        "image",
        "invite_popup_bg",
        "isDragonBonesReady",
        "configurable",
        "addJSON",
        "Cannot call a class as a function",
        "emoEffectSke",
        "hasLoaded",
        "writable",
        "67EFpEkg",
        "allEffectSke",
        "type",
        "bitmapFont",
        "46591wguTOD",
        "atlas/spin/spin.json",
        "emoEffectImage",
        "allEffectAtlas",
        "allEffectImage",
        "key",
        "dragonbones/Effect_ALL_Copy_ske.json",
        "atlas/videopopup/videopopup.png",
        "25jpzoPL",
        "load",
        "json",
        "checkImageKey",
      ],
      r = function (t, e) {
        return i[(t -= 303)];
      };
    function a(t, e) {
      for (var n = r, i = 0; i < e[n(331)]; i++) {
        var a = e[i];
        (a[n(326)] = a[n(326)] || !1),
          (a[n(361)] = !0),
          n(339) in a && (a[n(305)] = !0),
          Object[n(350)](t, a[n(315)], a);
      }
    }
    !(function (t, e) {
      for (var n = r; ; )
        try {
          if (
            923897 ===
            -parseInt(n(306)) * parseInt(n(345)) +
              -parseInt(n(318)) * -parseInt(n(310)) +
              -parseInt(n(322)) * parseInt(n(353)) +
              -parseInt(n(349)) * parseInt(n(355)) +
              parseInt(n(334)) +
              -parseInt(n(352)) +
              parseInt(n(336))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(i);
    var o = 0,
      s = [],
      u = (function () {
        var t,
          e,
          n,
          i = r;
        function u() {
          !(function (t, e) {
            if (!(t instanceof e)) throw new TypeError(r(363));
          })(this, u);
        }
        return (
          (t = u),
          (e = null),
          (n = [
            {
              key: "addImage",
              value: function (t, e) {
                s.push({ type: 1, key: t, path: e });
              },
            },
            {
              key: i(362),
              value: function (t, e) {
                s.push({ type: 2, key: t, path: e });
              },
            },
            {
              key: "addAtlas",
              value: function (t, e, n) {
                s.push({ type: 3, key: t, img: e, json: n });
              },
            },
            {
              key: i(343),
              value: function (t, e, n) {
                s[i(341)]({ type: 4, key: t, img: e, xmlPath: n });
              },
            },
            {
              key: i(333),
              value: function (t) {
                var e = i;
                if (
                  ((o = 0),
                  u[e(338)](e(342), e(317), "atlas/videopopup/videopopup.json"),
                  u.image("shareImage", e(357)),
                  u[e(358)](e(359), e(356)),
                  u[e(338)](e(325), e(344), e(348)),
                  u[e(338)](e(346), e(329), e(311)),
                  s[e(331)] > 0)
                )
                  for (var n = 0; n < s[e(331)]; n++) {
                    var r = s[n];
                    1 == r[e(308)]
                      ? u.image(r[e(315)], r[e(337)])
                      : 2 == r[e(308)]
                      ? u[e(320)](r.key, r.path)
                      : 3 == r[e(308)]
                      ? u[e(338)](r[e(315)], r.img, r[e(320)])
                      : 4 == r[e(308)] &&
                        u[e(309)](r.key, r[e(327)], r.xmlPath);
                  }
                u[e(320)](e(313), e(330)),
                  u[e(320)]("allEffectSke", e(316)),
                  u[e(358)](e(314), "dragonbones/Effect_ALL_Copy_tex.png"),
                  u[e(320)](e(332), e(323)),
                  u[e(320)](e(303), e(347)),
                  u.image(e(312), "dragonbones/Icon_All_backup_tex.png"),
                  o > 0 &&
                    (!0 === t
                      ? game[e(319)][e(304)] && game[e(319)][e(324)]()
                      : game.load.start());
              },
            },
            {
              key: i(358),
              value: function (t, e) {
                var n = i;
                !game.cache[n(321)](t) &&
                  (game.load[n(358)](t, assetUrl + "/" + e), o++);
              },
            },
            {
              key: i(338),
              value: function (t, e, n) {
                var r = i;
                !game[r(328)][r(321)](t) &&
                  (game[r(319)][r(338)](
                    t,
                    assetUrl + "/" + e,
                    assetUrl + "/" + n
                  ),
                  o++);
              },
            },
            {
              key: i(320),
              value: function (t, e) {
                var n = i;
                !game[n(328)][n(335)](t) &&
                  (game[n(319)].json(t, assetUrl + "/" + e), o++);
              },
            },
            {
              key: i(309),
              value: function (t, e, n) {
                var r = i;
                !game[r(328)][r(354)](t) &&
                  (game[r(319)][r(309)](t, e, n), o++);
              },
            },
            {
              key: i(340),
              value: function () {
                for (var t = i, e = 0; e < s[t(331)]; e++) {
                  var n = s[e];
                  if (1 == n[t(308)] || 3 == n[t(308)]) {
                    if (!game[t(328)][t(321)](n[t(315)])) return !1;
                  } else if (2 == n[t(308)]) {
                    if (!game[t(328)][t(335)](n[t(315)])) return !1;
                  } else if (4 == n[t(308)] && !game[t(328)][t(354)](n.key))
                    return !1;
                }
                return !!u[t(360)]();
              },
            },
            {
              key: i(360),
              value: function () {
                var t = i;
                return !!(
                  game.cache[t(321)](t(314)) &&
                  game[t(328)][t(321)](t(312)) &&
                  game[t(328)][t(335)](t(313)) &&
                  game[t(328)][t(335)](t(307)) &&
                  game[t(328)][t(335)](t(332)) &&
                  game.cache.checkJSONKey(t(303))
                );
              },
            },
          ]),
          e && a(t[r(351)], e),
          n && a(t, n),
          u
        );
      })(),
      c = [
        "value",
        "formatCoinWithCommas",
        "872537pbOmDS",
        "toString",
        "addDOMClass",
        "Cannot call a class as a function",
        "substring",
        "559664LHhvAn",
        "pow",
        "button",
        "createDOMDiv",
        "add",
        "classList",
        "DIV",
        "542678JQiRDI",
        "replace",
        "maxLength",
        "createElement",
        "getTimezoneOffset",
        "6FpbQqQ",
        "createDOMItalicText",
        "toFixed",
        "1zqAusP",
        "setAttribute",
        "type",
        "configurable",
        "convertExpToPercent",
        "text",
        "2zDtBlE",
        "trim",
        "createTextNode",
        "63857ZiJYSv",
        "158518AwjyCp",
        "abs",
        "42710ilvKwy",
        "enumerable",
        "removeChild",
        "length",
        "INPUT",
        "1YOwHii",
        "appendChild",
        "getElementById",
        "579017BcKuQd",
        "18mFKEBC",
        "writable",
        "BUTTON",
        "removeDOMElement",
      ],
      h = function (t, e) {
        return c[(t -= 162)];
      };
    function l(t, e) {
      for (var n = h, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(202)] = r.enumerable || !1),
          (r[n(192)] = !0),
          n(167) in r && (r[n(164)] = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    !(function (t, e) {
      for (var n = h; ; )
        try {
          if (
            498780 ===
            parseInt(n(201)) * parseInt(n(163)) +
              -parseInt(n(162)) * -parseInt(n(206)) +
              parseInt(n(174)) +
              parseInt(n(199)) * -parseInt(n(186)) +
              -parseInt(n(198)) * parseInt(n(195)) +
              -parseInt(n(189)) * -parseInt(n(181)) +
              -parseInt(n(169))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(c);
    var f = (function () {
        var t,
          e,
          n,
          i = h;
        function r() {
          !(function (t, e) {
            if (!(t instanceof e)) throw new TypeError(h(172));
          })(this, r);
        }
        return (
          (t = r),
          (e = null),
          (n = [
            {
              key: "formatName",
              value: function (t, e, n) {
                var i = h;
                if (t[i(204)] > e) {
                  var r = t[i(173)](0, e);
                  return !1 === n ? r : r[i(196)]();
                }
                return t;
              },
            },
            {
              key: "shortenLargeNumber",
              value: function (t, e) {
                for (
                  var n, i = h, r = ["K", "M"], a = r.length - 1;
                  a >= 0;
                  a--
                )
                  if (t <= -(n = Math[i(175)](1e3, a + 1)) || t >= n)
                    return +(t / n)[i(188)](e) + r[a];
                return t;
              },
            },
            {
              key: i(168),
              value: function (t) {
                var e = i;
                return t[e(170)]()[e(182)](/\B(?=(\d{3})+(?!\d))/g, ",");
              },
            },
            {
              key: i(193),
              value: function (t, e) {
                t || (t = 0), e || (e = 1);
                var n = 10 * (e * (e + 1) * (e + 2) + 5 * e);
                return (
                  1 === e && (n = 0),
                  e++,
                  parseInt(
                    ((t - n) / (10 * (e * (e + 1) * (e + 2) + 5 * e) - n)) * 100
                  )
                );
              },
            },
            {
              key: "getTimezoneOffset",
              value: function () {
                var t = i,
                  e = new Date()[t(185)](),
                  n = e < 0 ? "+" : "-",
                  r = ((e = Math[t(200)](e)) / 60) | 0;
                return "+" == n ? r : -r;
              },
            },
            {
              key: "createDOMText",
              value: function (t, e, n) {
                var r = i,
                  a = document.createElement(r(205));
                return (
                  a.setAttribute(r(191), r(194)),
                  a[r(190)]("id", t),
                  a[r(190)]("placeholder", e),
                  a[r(190)](r(183), n),
                  a
                );
              },
            },
            {
              key: "createDOMButton",
              value: function (t, e) {
                var n = i,
                  r = document[n(184)](n(165));
                return (
                  r[n(190)]("type", n(176)),
                  r[n(190)]("id", t),
                  e && r[n(207)](document[n(197)](e)),
                  r
                );
              },
            },
            {
              key: i(177),
              value: function (t, e) {
                var n = i,
                  r = document[n(184)](n(180));
                return t && r[n(190)]("id", t), e && r[n(179)][n(178)](e), r;
              },
            },
            {
              key: i(187),
              value: function (t) {
                var e = i,
                  n = document[e(184)]("I");
                return n[e(207)](document.createTextNode(t)), n;
              },
            },
            {
              key: i(166),
              value: function (t) {
                var e = i,
                  n = document[e(208)](t);
                n && n.parentNode[e(203)](n);
              },
            },
            {
              key: i(171),
              value: function (t, e) {
                var n = i;
                document[n(208)](t)[n(179)][n(178)](e);
              },
            },
          ]),
          e && l(t.prototype, e),
          n && l(t, n),
          r
        );
      })(),
      p = [
        "length",
        "959167GSJGqe",
        "toString",
        "defineProperty",
        "writable",
        "79291VwfBkg",
        "205176NGvOxz",
        "prototype",
        "753442VgHkSW",
        "596818wCVjmV",
        "123187lEcpcb",
        "apply",
        "1jQhXle",
        "enumerable",
        "2qhAhAm",
        "value",
        "Cannot call a class as a function",
        "422323eOXImm",
        "2ACmkWj",
        "3YpKnrX",
      ],
      d = function (t, e) {
        return p[(t -= 110)];
      };
    function y(t, e) {
      for (var n = d, i = 0; i < e[n(124)]; i++) {
        var r = e[i];
        (r[n(117)] = r[n(117)] || !1),
          (r.configurable = !0),
          n(119) in r && (r[n(128)] = !0),
          Object[n(127)](t, r.key, r);
      }
    }
    !(function (t, e) {
      for (var n = d; ; )
        try {
          if (
            517630 ===
            -parseInt(n(113)) +
              parseInt(n(112)) +
              parseInt(n(125)) * parseInt(n(116)) +
              parseInt(n(129)) * -parseInt(n(122)) +
              -parseInt(n(110)) * parseInt(n(123)) +
              parseInt(n(121)) +
              -parseInt(n(118)) * parseInt(n(114))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(p);
    var v = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e)) throw new TypeError(d(120));
          })(this, t);
        }
        return (
          (e = t),
          (n = null),
          (i = [
            {
              key: "dispatchEvent",
              value: (function (t) {
                var e = d;
                function n(e) {
                  return t[d(115)](this, arguments);
                }
                return (
                  (n[e(126)] = function () {
                    return t[e(126)]();
                  }),
                  n
                );
              })(function (t) {
                var e = d,
                  n =
                    arguments[e(124)] > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                if (n) {
                  var i = new CustomEvent(t, { detail: { value: n } });
                  dispatchEvent(i);
                } else dispatchEvent(new CustomEvent(t));
              }),
            },
          ]),
          n && y(e[d(111)], n),
          i && y(e, i),
          t
        );
        var e, n, i;
      })(),
      b = [
        "game",
        "enumerable",
        "connector",
        "disconnectTime",
        "key",
        "139gHAwPL",
        "3401472BCaoXX",
        "log",
        "996899MkPyUH",
        "1whWbEV",
        "sprite",
        "inputEnabled",
        "events",
        "height",
        "configurable",
        "defineProperty",
        "499IcDXCr",
        "prototype",
        "1czvWgC",
        "centerX",
        "angle",
        "overlay",
        "rotatorTimer",
        "790420VVUQuX",
        "alpha",
        "world",
        "open",
        "add",
        "1406803SbfjRI",
        "value",
        "2179wFeCnU",
        "centerY",
        "destroy",
        "image",
        "time",
        "remove",
        "anchor",
        "closeTimer",
        "Cannot call a class as a function",
        "186265wxqxbe",
        "preloadIcon",
        "1KVyuoK",
        "1454uNrvGk",
        "overlayTexture",
        "disconnect",
      ],
      g = function (t, e) {
        return b[(t -= 323)];
      };
    function m(t, e) {
      for (var n = g, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(337)] = r[n(337)] || !1),
          (r[n(350)] = !0),
          n(365) in r && (r.writable = !0),
          Object[n(351)](t, r[n(340)], r);
      }
    }
    !(function (t, e) {
      for (var n = g; ; )
        try {
          if (
            725456 ===
            parseInt(n(345)) * -parseInt(n(359)) +
              parseInt(n(332)) * -parseInt(n(330)) +
              parseInt(n(366)) * -parseInt(n(352)) +
              parseInt(n(333)) * -parseInt(n(341)) +
              -parseInt(n(354)) * parseInt(n(364)) +
              parseInt(n(344)) +
              parseInt(n(342))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(b);
    var I = (function () {
        var t,
          e,
          n,
          i = g;
        function r(t, e) {
          var n = g,
            i = this;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(g(329));
          })(this, r),
            (this[n(336)] = t),
            e &&
              e[n(328)] &&
              (this[n(328)] = this[n(336)][n(325)][n(348)][n(363)](
                e[n(328)],
                function () {
                  return i.close();
                }
              )),
            e &&
              e[n(339)] &&
              (this[n(328)] = this.game[n(325)][n(348)][n(363)](
                e[n(339)],
                function () {
                  return i[n(335)]();
                }
              ));
        }
        return (
          (t = r),
          (e = [
            {
              key: "disconnect",
              value: function () {
                var t = g;
                try {
                  CyberInstance[t(338)][t(335)]();
                } catch (e) {
                  console[t(343)](e);
                }
              },
            },
            {
              key: i(362),
              value: function () {
                var t = i,
                  e = this;
                (this.overlay = this[t(336)][t(363)][t(346)](
                  0,
                  0,
                  CyberGlobalData[t(334)]
                )),
                  (this[t(357)].width = this[t(336)].width),
                  (this[t(357)][t(349)] = this[t(336)][t(349)]),
                  (this[t(357)][t(360)] = 0.5),
                  (this[t(357)][t(347)] = !0),
                  (this.preloadIcon = this[t(336)][t(363)][t(324)](
                    this[t(336)][t(361)][t(355)],
                    this.game[t(361)][t(367)],
                    "preloadBg"
                  )),
                  this[t(331)][t(327)].setTo(0.5),
                  (this[t(358)] = this[t(336)][t(325)][t(348)].loop(
                    30,
                    function () {
                      var n = t;
                      return (e[n(331)][n(356)] += 10);
                    }
                  ));
              },
            },
            {
              key: "close",
              value: function () {
                var t = i;
                this.closeTimer &&
                  (this[t(336)][t(325)][t(348)][t(326)](this[t(328)]),
                  (this[t(328)] = null)),
                  this[t(358)] &&
                    (this[t(336)].time.events[t(326)](this[t(358)]),
                    (this[t(358)] = null)),
                  this.overlay &&
                    (this[t(357)][t(323)](), (this.overlay = null)),
                  this[t(331)] &&
                    (this[t(331)][t(323)](), (this.preloadIcon = null));
              },
            },
          ]) && m(t[g(353)], e),
          n && m(t, n),
          r
        );
      })(),
      w = [
        "function",
        "removeAutoDestroyTask",
        "overlay",
        "height",
        "width",
        "54577RJclob",
        "loop",
        "undefined",
        "onAssetReady",
        "removeAssetTask",
        "addOverlay",
        "homeScreen",
        "closeButton",
        "2wlaWnX",
        "events",
        "key",
        "alpha",
        "Group",
        "create",
        "326188zElDNN",
        "enumerable",
        "onDestroy",
        "addBackground",
        "button_close",
        "close",
        "isAssetReady",
        "tween",
        "createTransition",
        "3ZmEIaQ",
        "closeLoadingPopup",
        "options",
        "remove",
        "openLoadingPopup",
        "278051kgLQRM",
        "330942AnZbGC",
        "1192086ryRxoM",
        "addCloseButton",
        "95LFcZbA",
        "background",
        "setPrototypeOf",
        "createView",
        "open",
        "sound",
        "Super expression must either be null or a function",
        "351101uXOyHH",
        "loadingPopup",
        "prototype",
        "overlayTexture",
        "1092595DCpqJN",
        "constructor",
        "__proto__",
        "Back",
        "getPrototypeOf",
        "addOnce",
        "call",
        "this hasn't been initialised - super() hasn't been called",
        "add",
        "checkAssetTask",
        "1gDxnIM",
        "inputEnabled",
        "onInputDown",
        "autoDestroyTask",
        "time",
        "writable",
        "game",
      ],
      S = function (t, e) {
        return w[(t -= 316)];
      },
      k = S;
    function C(t) {
      var e = S;
      return (C =
        typeof Symbol === e(353) && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                "function" == typeof Symbol &&
                t[n(337)] === Symbol &&
                t !== Symbol[n(334)]
                ? "symbol"
                : typeof t;
            })(t);
    }
    function O(t, e) {
      for (var n = S, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(373)] = r[n(373)] || !1),
          (r.configurable = !0),
          "value" in r && (r[n(351)] = !0),
          Object.defineProperty(t, r[n(368)], r);
      }
    }
    function P(t) {
      var e = S;
      return (P = Object[e(327)]
        ? Object[e(340)]
        : function (t) {
            var n = e;
            return t.__proto__ || Object[n(340)](t);
          })(t);
    }
    function T(t) {
      if (void 0 === t) throw new ReferenceError(S(343));
      return t;
    }
    function _(t, e) {
      var n = S;
      return (_ =
        Object[n(327)] ||
        function (t, e) {
          return (t[n(338)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = S; ; )
        try {
          if (
            683425 ===
            -parseInt(n(336)) +
              -parseInt(n(316)) * parseInt(n(372)) +
              parseInt(n(332)) * -parseInt(n(346)) -
              parseInt(n(323)) +
              -parseInt(n(366)) * parseInt(n(321)) -
              parseInt(n(322)) +
              -parseInt(n(358)) * -parseInt(n(325))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(w);
    var x = (function (t) {
        var e,
          n,
          i,
          r = S;
        function a(t, e) {
          var n,
            i,
            r,
            o,
            s = S;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            (i = this),
            (r = P(a)[s(342)](this, t)),
            (o = S),
            ((n = !r || ("object" !== C(r) && typeof r !== o(353)) ? T(i) : r)[
              s(318)
            ] = e),
            (n[s(345)] = null),
            (n[s(349)] = null),
            n.isAssetReady()
              ? n[s(328)]()
              : (n[s(320)](),
                (n[s(345)] = n[s(352)][s(350)][s(367)][s(359)](
                  150,
                  function () {
                    var t = s;
                    n[t(378)]() && n[t(361)]();
                  },
                  T(n)
                )),
                (n[s(349)] = n.game.time.events[s(344)](15e3, function () {
                  var t = s;
                  n[t(362)](), n.closeLoadingPopup(), n[t(377)]();
                })),
                n[s(374)][s(341)](function () {
                  n[s(317)](), n.removeAssetTask(), n.removeAutoDestroyTask();
                })),
            n
          );
        }
        return (
          (function (t, e) {
            var n = S;
            if (typeof e !== n(353) && null !== e) throw new TypeError(n(331));
            (t[n(334)] = Object[n(371)](e && e[n(334)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && _(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: "onAssetReady",
              value: function () {
                var t = S;
                this.removeAssetTask(),
                  this.removeAutoDestroyTask(),
                  this[t(317)](),
                  this.createView();
              },
            },
            {
              key: r(362),
              value: function () {
                var t = r;
                this[t(345)] &&
                  (this[t(352)].time[t(367)].remove(this[t(345)]),
                  (this.checkAssetTask = null));
              },
            },
            {
              key: r(354),
              value: function () {
                var t = r;
                this[t(349)] &&
                  (this[t(352)].time[t(367)][t(319)](this[t(349)]),
                  (this[t(349)] = null));
              },
            },
            { key: r(328), value: function () {} },
            {
              key: r(378),
              value: function () {
                return !0;
              },
            },
            {
              key: r(380),
              value: function () {
                var t = r;
                if (this[t(326)]) {
                  var e = this[t(326)].y;
                  (this[t(326)].y = this[t(326)].y - 100),
                    this[t(352)][t(344)]
                      [t(379)](this[t(326)])
                      .to({ y: e }, 500, Phaser.Easing[t(339)].Out, !0);
                }
              },
            },
            {
              key: r(375),
              value: function (t, e) {
                var n = r;
                (this[n(326)] = this[n(371)](0, 0, t, e)),
                  (this[n(326)].x =
                    this[n(352)].width / 2 - this[n(326)][n(357)] / 2),
                  (this.background.y =
                    this[n(352)][n(356)] / 2 - this[n(326)].height / 2);
              },
            },
            {
              key: r(363),
              value: function (t) {
                var e = r;
                (this[e(355)] = this[e(371)](0, 0, CyberGlobalData[e(335)])),
                  (this[e(355)][e(369)] = typeof t != e(360) ? t : 0.5),
                  (this.overlay[e(347)] = !0);
              },
            },
            {
              key: r(324),
              value: function () {
                var t = r,
                  e = this,
                  n = this[t(371)](0, 0, t(364), t(376));
                (n.x =
                  this[t(326)].x + this[t(326)][t(357)] - n[t(357)] / 2 - 10),
                  (n.y = this[t(326)].y - 12),
                  (n[t(347)] = !0),
                  n[t(367)][t(348)][t(341)](function () {
                    var n = t;
                    CyberInstance[n(330)].playButtonSound(), e[n(377)]();
                  }, this),
                  (this[t(365)] = n);
              },
            },
            {
              key: "openLoadingPopup",
              value: function (t) {
                var e = r;
                (this[e(333)] = new I(game, t)), this[e(333)][e(329)]();
              },
            },
            {
              key: r(317),
              value: function () {
                var t = r;
                this[t(333)] && (this[t(333)].close(), (this[t(333)] = null));
              },
            },
            {
              key: "close",
              value: function () {
                this.destroy(!0);
              },
            },
          ]) && O(e[S(334)], n),
          i && O(e, i),
          a
        );
      })(Phaser[k(370)]),
      E = [
        "562472KTaZSv",
        "234712LJEYzh",
        "503453fvfUKg",
        "971774MEFBDs",
        "2jVUBCf",
        "1KLvdEJ",
        "1432619zzSdng",
        "774488vFDvUS",
        "2NOsCAy",
        "420206psIyXu",
      ],
      j = function (t, e) {
        return E[(t -= 340)];
      };
    !(function (t, e) {
      for (var n = j; ; )
        try {
          if (
            864616 ===
            parseInt(n(349)) * -parseInt(n(342)) -
              parseInt(n(347)) +
              parseInt(n(344)) * parseInt(n(343)) +
              parseInt(n(348)) +
              parseInt(n(341)) * parseInt(n(340)) +
              parseInt(n(346)) +
              -parseInt(n(345))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(E);
    var B = Object.freeze({ GIFT_TIME: 10800, MIN_BET: 5e3 }),
      A = [
        "height",
        "openIAP",
        "this hasn't been initialised - super() hasn't been called",
        "136919RBfRIZ",
        "call",
        "addButton",
        "homeScreen",
        "anchor",
        "configurable",
        "replace",
        "button_orange",
        "#ffffff",
        "1649859PaqSDn",
        "onAction",
        "showNotEnoughMoneyToJoin",
        "function",
        "object",
        "enumerable",
        "__proto__",
        "button_close",
        "sound",
        "closeButton",
        "miniumMoneyCondition",
        "shortenLargeNumber",
        "setPrototypeOf",
        "showNotEnoughMoneyToPlay",
        "hideCloseButton",
        "getPrototypeOf",
        "addColorStop",
        "1DMmlEM",
        "background",
        "addOverlay",
        "center",
        "Super expression must either be null or a function",
        "23508VDJCnN",
        "state",
        "MIN_BET",
        "Popup.onAction: ",
        "createLinearGradient",
        "hideTransition",
        "middle",
        "value",
        "lang",
        "writable",
        "#c78f34",
        "addBackground",
        "NOT_ENOUGH_CHIP_TO_PLAY",
        "key",
        "179647aHxJiR",
        "bold",
        "createTransition",
        "addChild",
        "setTo",
        "context",
        "addOnce",
        "events",
        "inputEnabled",
        "game",
        "disconnect",
        "iterator",
        "addContent",
        "NOT_ENOUGH_CHIP_TO_JOIN",
        "text",
        "actionId",
        "setTextBounds",
        "width",
        "create",
        "1075375BeQnLl",
        "symbol",
        "prototype",
        "onInputDown",
        "#fffdb6",
        "sprite",
        "#9ecbe2",
        "callback",
        "add",
        "length",
        "getCurrentState",
        "addTitle",
        "736538Zrnbgn",
        "connector",
        "log",
        "constructor",
        "31UuJNXb",
        "Cannot call a class as a function",
        "close",
        "make",
        "314336kyzoth",
      ],
      R = function (t, e) {
        return A[(t -= 231)];
      };
    function F(t) {
      var e = R;
      return (F =
        typeof Symbol === e(287) && typeof Symbol[e(243)] === e(252)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(287) &&
                t[n(266)] === Symbol &&
                t !== Symbol[n(253)]
                ? n(252)
                : typeof t;
            })(t);
    }
    function N(t, e) {
      for (var n = R, i = 0; i < e[n(260)]; i++) {
        var r = e[i];
        (r[n(289)] = r[n(289)] || !1),
          (r[n(280)] = !0),
          n(313) in r && (r[n(315)] = !0),
          Object.defineProperty(t, r[n(231)], r);
      }
    }
    function D(t, e) {
      var n = R;
      return !e || (F(e) !== n(288) && "function" != typeof e)
        ? (function (t) {
            var e = R;
            if (void 0 === t) throw new ReferenceError(e(274));
            return t;
          })(t)
        : e;
    }
    function L(t) {
      var e = R;
      return (L = Object.setPrototypeOf
        ? Object[e(299)]
        : function (t) {
            var n = e;
            return t[n(290)] || Object[n(299)](t);
          })(t);
    }
    function M(t, e) {
      var n = R;
      return (M =
        Object[n(296)] ||
        function (t, e) {
          return (t[n(290)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = R; ; )
        try {
          if (
            893898 ===
            -parseInt(n(306)) -
              parseInt(n(232)) +
              parseInt(n(251)) * -parseInt(n(301)) -
              parseInt(n(284)) -
              parseInt(n(263)) +
              parseInt(n(271)) +
              parseInt(n(267)) * parseInt(n(275))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(A);
    var G = (function (t) {
        var e,
          n,
          i,
          r = R;
        function a(t, e) {
          var n,
            i = R;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(R(268));
            })(this, a),
            (n = D(this, L(a)[i(276)](this, t, e)))[i(303)](),
            n[i(317)](i(278), "bg_popup_medium_484x292"),
            n[i(262)](),
            n[i(244)](e.text),
            n[i(277)](e),
            e[i(298)] || n.addCloseButton(),
            !0 !== e[i(311)] && n[i(234)](),
            n
          );
        }
        return (
          (function (t, e) {
            var n = R;
            if (typeof e !== n(287) && null !== e) throw new TypeError(n(305));
            (t[n(253)] = Object[n(250)](e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && M(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: "addButton",
              value: function (t) {
                var e = R,
                  n = this[e(241)][e(270)][e(256)](0, 0, e(278), e(282));
                (n.x = this[e(302)][e(249)] / 2 - n.width / 2),
                  (n.y = this[e(302)].height - n[e(272)] - 30),
                  this.background[e(235)](n);
                var i = this.game[e(259)][e(246)](
                    n.width / 2,
                    n[e(272)] / 2,
                    t.buttonText,
                    {
                      font: APP_FONT,
                      fontSize: 28,
                      fill: e(283),
                      fontWeight: 700,
                      stroke: e(316),
                      strokeThickness: 4,
                    }
                  ),
                  r = i[e(237)][e(310)](0, 0, 0, i[e(272)]);
                r[e(300)](0, e(283)),
                  r[e(300)](1, e(255)),
                  (i.fill = r),
                  i[e(279)][e(236)](0.5),
                  n[e(235)](i),
                  t[e(247)] && (n[e(247)] = t[e(247)]),
                  (n.inputEnabled = !0),
                  t[e(258)] &&
                    n[e(239)].onInputDown.addOnce(t[e(258)], t[e(237)]),
                  n[e(239)][e(254)][e(238)](this.onAction, this);
              },
            },
            {
              key: r(285),
              value: function (t) {
                var e = r;
                CyberInstance[e(292)].playButtonSound();
                try {
                  1 === t[e(247)]
                    ? this.game[e(307)][e(261)]()[e(273)]()
                    : 2 === t[e(247)]
                    ? this.game[e(307)][e(261)]().openCreateGamePopup()
                    : 3 === t[e(247)] && CyberInstance[e(264)][e(242)]();
                } catch (t) {
                  console[e(265)](e(309), t);
                }
                this.close();
              },
            },
            {
              key: r(244),
              value: function (t) {
                var e = r,
                  n = this.game[e(259)][e(246)](52, 94, t, {
                    font: APP_FONT,
                    fontSize: 26,
                    fill: e(257),
                    fontWeight: 400,
                    wordWrap: !0,
                    wordWrapWidth: 598,
                    align: e(304),
                    boundsAlignH: e(304),
                    boundsAlignV: e(312),
                  });
                n[e(248)](0, 0, 598, 210), this.background[e(235)](n);
              },
            },
            {
              key: "addTitle",
              value: function () {
                var t = r,
                  e = this[t(241)][t(259)][t(246)](
                    this.background[t(249)] / 2,
                    15,
                    CyberInstance[t(314)].THONG_BAO.toUpperCase(),
                    {
                      font: APP_FONT,
                      fontSize: 30,
                      fill: t(283),
                      fontWeight: t(233),
                    }
                  );
                e[t(279)][t(236)](0.5, 0), this[t(302)].addChild(e);
              },
            },
            {
              key: "addCloseButton",
              value: function () {
                var t = r,
                  e = this,
                  n = this[t(241)][t(270)][t(256)](0, 0, "homeScreen", t(291));
                (n.x = this[t(302)][t(249)] - n.width / 2 - 10),
                  (n.y = -12),
                  (n[t(240)] = !0),
                  n[t(239)].onInputDown.addOnce(function () {
                    var n = t;
                    CyberInstance[n(292)].playButtonSound(), e[n(269)]();
                  }, this),
                  (this[t(293)] = n),
                  this[t(302)].addChild(this.closeButton);
              },
            },
          ]),
          (i = [
            {
              key: r(297),
              value: function () {
                var t = r,
                  e = CyberInstance[t(314)][t(318)].replace(
                    "%s",
                    f[t(295)](CyberInstance[t(294)] * B[t(308)])
                  );
                new a(game, {
                  actionId: 1,
                  text: e,
                  buttonText: CyberInstance[t(314)].ADD_CHIP,
                });
              },
            },
            {
              key: r(286),
              value: function (t) {
                var e = r,
                  n = CyberInstance.lang[e(245)][e(281)](
                    "%s",
                    f[e(295)](CyberInstance[e(294)] * t)
                  );
                new a(game, {
                  actionId: 1,
                  text: n,
                  buttonText: CyberInstance.lang.ADD_CHIP,
                });
              },
            },
          ]),
          n && N(e[R(253)], n),
          i && N(e, i),
          a
        );
      })(x),
      W = [
        "sound",
        "addOverlay",
        "inited",
        "instance",
        "CLOSE",
        "value",
        "body",
        "onExtensionResponse",
        "containsKey",
        "appendChild",
        "15BxVmza",
        "157GxEZVN",
        "sfs",
        "_instance",
        "ExtensionRequest",
        "key",
        "createDOMText",
        "2579zOJdte",
        "getCurrentState",
        "52454FjiPEY",
        "2WapnfP",
        "19066hnpBTs",
        "Enter Code",
        "codeInput",
        "lang",
        "getUtfString",
        "Mã code không hợp lệ",
        "writable",
        "code",
        "closeOverlay",
        "toUpperCase",
        "EXTENSION_RESPONSE",
        "70465XrDMhz",
        "20757wCqgch",
        "defineProperty",
        "close",
        "Chúng tôi tạm khóa tính năng nạp Code tài khoản của bạn vì nạp sai quá 5 lần liên tiếp. Tính năng này sẽ được mở lại vào ngày mai.",
        "prototype",
        "1103742YtFLIM",
        "playButtonSound",
        "configurable",
        "send",
        "createDOMButton",
        "params",
        "11nbzvAV",
        "gift.code",
        "NHAP",
        "state",
        "96367jPLHKt",
        "length",
        "codeButton",
        "focus",
        "removeDOMElement",
        "getInt",
        "cmd",
        "Cannot call a class as a function",
        "errorCode",
        "getElementById",
        "msg",
        "onclick",
        "SFSObject",
      ],
      V = function (t, e) {
        return W[(t -= 244)];
      };
    function U(t, e) {
      for (var n = V, i = 0; i < e[n(246)]; i++) {
        var r = e[i];
        (r.enumerable = r.enumerable || !1),
          (r[n(298)] = !0),
          n(263) in r && (r[n(285)] = !0),
          Object[n(292)](t, r[n(273)], r);
      }
    }
    !(function (t, e) {
      for (var n = V; ; )
        try {
          if (
            359245 ===
            -parseInt(n(302)) * parseInt(n(291)) +
              parseInt(n(268)) * -parseInt(n(279)) -
              parseInt(n(290)) +
              parseInt(n(269)) * -parseInt(n(275)) +
              parseInt(n(277)) +
              -parseInt(n(245)) * -parseInt(n(278)) +
              parseInt(n(296))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(W);
    var z = (function () {
        var t,
          e,
          n,
          i = V;
        function r() {
          var t = V;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(V(252));
          })(this, r),
            (this[t(260)] = !1);
        }
        return (
          (t = r),
          (e = [
            {
              key: "initialize",
              value: function (t) {
                var e = V;
                !this[e(260)] &&
                  ((this.inited = !0),
                  (this[e(270)] = t),
                  this.sfs.addEventListener(
                    SFS2X.SFSEvent[e(289)],
                    this[e(265)],
                    this
                  ));
              },
            },
            {
              key: "onExtensionResponse",
              value: function (t) {
                var e = V;
                if (t[e(251)] == e(303)) {
                  var n = t[e(301)][e(266)](e(255))
                    ? t[e(301)][e(283)](e(255))
                    : null;
                  if (null == n && t[e(301)].containsKey("errorCode")) {
                    var i = t[e(301)][e(250)](e(253));
                    1 == i
                      ? (n = e(294))
                      : 2 == i
                      ? (n = e(284))
                      : 5 == i
                      ? (n =
                          "Mã code đã hết hiệu lực vì vượt quá số lượt sử dụng")
                      : 6 == i
                      ? (n =
                          "Mã code đã quá hạn sử dụng hoặc chưa được kích hoạt")
                      : 7 == i
                      ? (n = "Tài khoản này đã sử dụng mã code trước đó")
                      : 8 == i &&
                        (n = "IP của bạn đã sử dụng mã code trước đó");
                  }
                  n &&
                    new G(game, {
                      text: n,
                      buttonText: CyberInstance[e(282)][e(262)],
                      hideCloseButton: !0,
                    });
                }
              },
            },
            {
              key: "open",
              value: function () {
                var t = V;
                if (this[t(260)]) {
                  game.state[t(276)]()[t(259)](this[t(293)], this);
                  var e = f[t(274)](t(281), t(280), 12);
                  document.body[t(267)](e);
                  var n = f[t(300)](
                    t(247),
                    CyberInstance[t(282)][t(304)][t(288)]()
                  );
                  (n[t(256)] = function () {
                    var e = t;
                    CyberInstance[e(258)][e(297)](), r[e(261)][e(299)]();
                  }),
                    document[t(264)].appendChild(n),
                    document.getElementById(t(281))[t(248)]();
                }
              },
            },
            {
              key: i(299),
              value: function () {
                var t = i,
                  e = document[t(254)](t(281))[t(263)];
                if (e && e[t(246)] > 0) {
                  if (e.length < 8) return;
                  var n = new SFS2X[t(257)]();
                  n.putUtfString(t(286), e),
                    this[t(270)][t(299)](new SFS2X[t(272)](t(303), n));
                }
                this[t(293)]();
              },
            },
            {
              key: i(293),
              value: function () {
                var t = i;
                f[t(249)](t(281)),
                  f.removeDOMElement(t(247)),
                  game[t(244)].getCurrentState()[t(287)]();
              },
            },
          ]),
          (n = [
            {
              key: "instance",
              get: function () {
                return r[i(271)] || (r._instance = new r()), r._instance;
              },
            },
          ]),
          e && U(t[V(295)], e),
          n && U(t, n),
          r
        );
      })(),
      H = [
        "timezone",
        "onConnectionSuccess",
        "onLogin",
        "onConnectionSuccess_5_6",
        "onConnectionSuccess_6_7",
        "enableLagMonitor",
        "putLong",
        "onConnectionSuccess_10plus",
        "EXTENSION_RESPONSE",
        "SFSObject",
        "getName",
        "log",
        "addEventListener",
        "connectionErrorCount",
        "199nZPnfg",
        "prototype",
        "5syREri",
        "profile.update",
        "MAINTENANCE",
        "indexOf",
        "avatar",
        "putInt",
        "onConnectionSuccess_8_9",
        "\nGame ID: ",
        "10924VqVHsm",
        "multiGroupDisabled",
        "user",
        "platform",
        "params",
        "ExtensionRequest",
        "refreshSpinTime",
        "getUtfString",
        "initHeartBeat",
        "onConnectionSuccess_4_5",
        "connected",
        "GIFT_TIME",
        "host",
        "setDataAsync",
        "onConnection",
        "dispatchEvent",
        "defineProperty",
        "UNDEF",
        "changedVars",
        "getVariable",
        "onConnectionSuccess_1_2",
        "enumerable",
        "LoginRequest",
        "assets/images/no_avatar.png",
        "fbinstant.invite",
        "getPlatform",
        "close",
        "variableUpdated",
        "872709JOKXUL",
        "onConnectionSuccess_7_8",
        "player",
        "LOGIN_ERROR",
        "43uWfIOh",
        "signature",
        "getTimezoneOffset",
        "maintenance",
        "267887gwuYLT",
        "onUserVariablesUpdate",
        "onExtensionResponse exception: ",
        "zone",
        "69325AVcaHb",
        "onConnectionSuccess_2_3",
        "501MaDuVw",
        "\nFB Player ID: ",
        "getTime",
        "onConnectionLost",
        "inviter",
        "2021kSPcbs",
        "appId",
        "getID",
        "1GZizmY",
        "maintenanceMsg",
        "guserid",
        "logConnectTime",
        "249768EWIXbW",
        "start",
        "1CDFbZM",
        "onExtensionResponse",
        "getEntryPointData",
        "length",
        "call",
        "containsKey",
        "cmd",
        "value",
        "configurable",
        "22gDJkRT",
        "CONNECTION",
        "getInt",
        "undefined",
        "heartBeat",
        "onLoginError",
        "logged",
        "putUtfString",
        "onConnectionSuccess_3_4",
        "instance",
        "startTime",
        "writable",
        "disconnect",
        "CONNECTION_LOST",
        "BẢO TRÌ MÁY CHỦ!",
        "send",
        "removeHearBeat",
        "appName",
        "sfs",
        "port",
        "collectTime",
        "errorMessage",
        "username",
        "success",
        "isHomeScreenStarted",
        "entryPointDataHandled",
        "connect",
        "token",
        "handleEntryPointData",
        "data",
        "name",
        "isNewUser",
        "state",
        "SFSEvent",
      ],
      X = function (t, e) {
        return H[(t -= 148)];
      };
    function J(t, e) {
      for (var n = X, i = 0; i < e[n(221)]; i++) {
        var r = e[i];
        (r[n(183)] = r.enumerable || !1),
          (r[n(226)] = !0),
          "value" in r && (r[n(238)] = !0),
          Object[n(178)](t, r.key, r);
      }
    }
    !(function (t, e) {
      for (var n = X; ; )
        try {
          if (
            235961 ===
            parseInt(n(227)) * parseInt(n(162)) +
              -parseInt(n(154)) * parseInt(n(202)) -
              parseInt(n(216)) +
              -parseInt(n(152)) * parseInt(n(204)) +
              -parseInt(n(198)) * parseInt(n(212)) +
              parseInt(n(194)) * parseInt(n(209)) +
              -parseInt(n(190)) * -parseInt(n(218))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(H);
    var q = (function () {
        var t,
          e,
          n,
          i = X;
        function r(t) {
          var e = X;
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, r),
            (this[e(245)] = t),
            this[e(245)][e(150)](SFS2X[e(260)][e(228)], this[e(176)], this),
            this[e(245)][e(150)](SFS2X[e(260)][e(240)], this[e(207)], this),
            this[e(245)].addEventListener(
              SFS2X[e(260)].LOGIN,
              this[e(263)],
              this
            ),
            this[e(245)].addEventListener(
              SFS2X[e(260)][e(193)],
              this[e(232)],
              this
            ),
            this.sfs[e(150)](
              SFS2X[e(260)].USER_VARIABLES_UPDATE,
              this[e(199)],
              this
            ),
            this[e(245)].addEventListener(
              SFS2X[e(260)][e(269)],
              this[e(219)],
              this
            ),
            (this[e(233)] = !1),
            (this[e(189)] = !1),
            (this[e(252)] = !1),
            (this[e(151)] = 0);
        }
        return (
          (t = r),
          (e = [
            {
              key: i(253),
              value: function () {
                var t = i;
                (this[t(237)] = new Date().getTime()),
                  (this.connected = void 0),
                  this[t(245)][t(253)](
                    CyberInstance[t(174)],
                    CyberInstance[t(246)]
                  );
              },
            },
            {
              key: i(176),
              value: function (t) {
                var e = i,
                  n = this;
                if (((this[e(172)] = t[e(250)]), this.connected)) {
                  var r = new SFS2X.SFSObject();
                  r.putLong("guserid", parseInt(CyberInstance[e(214)])),
                    CyberInstance.devEnabled && r[e(267)]("guserid", 0),
                    r[e(234)](e(254), CyberInstance[e(195)]),
                    r[e(234)](e(165), this[e(187)]()),
                    r.putBool("v5", !0),
                    typeof FB_APP_ID != e(230) && r[e(267)](e(210), FB_APP_ID),
                    this.sfs[e(242)](
                      new SFS2X[e(184)](
                        CyberInstance.playerId,
                        "",
                        r,
                        CyberInstance[e(201)]
                      )
                    );
                } else {
                  var a = 0 == this[e(151)] ? 100 : 1e3;
                  setTimeout(function () {
                    n[e(253)]();
                  }, a),
                    this[e(151)]++;
                }
              },
            },
            {
              key: i(207),
              value: function () {
                var t = i,
                  e = this;
                if (
                  ((this.connected = !1),
                  (this[t(233)] = !1),
                  (this[t(189)] = !1),
                  this[t(243)](),
                  CyberInstance[t(251)])
                ) {
                  try {
                    (CyberGlobalData.spinWatched = !1), z[t(236)][t(188)]();
                  } catch (e) {
                    console[t(149)](e);
                  }
                  game[t(259)][t(217)]("DisconnectScreen", !0, !1);
                } else {
                  if (1 === this[t(197)]) return;
                  setTimeout(function () {
                    e[t(253)]();
                  }, 100);
                }
              },
            },
            {
              key: i(263),
              value: function (t) {
                var e = i;
                (this[e(233)] = !0),
                  t[e(164)] &&
                    t[e(164)][e(257)] &&
                    (CyberInstance[e(214)] = parseInt(t.user[e(257)])),
                  (CyberGlobalData[e(247)] = t[e(256)][e(229)](e(247))),
                  (CyberGlobalData[e(163)] =
                    !!t[e(256)][e(223)]("multiGroupDisabled")),
                  this[e(170)](),
                  t[e(256)][e(223)](e(258)) && this[e(255)](),
                  this.sfs[e(266)](!0, 2),
                  (this.connectionErrorCount = 0);
              },
            },
            {
              key: i(199),
              value: function (t) {
                var e = i;
                t.user.isItMe &&
                  -1 != t[e(180)][e(157)](e(214)) &&
                  ((CyberInstance[e(214)] = t[e(164)][e(181)](e(214))[e(225)]),
                  FBInstant[e(192)][e(175)]({ guserid: CyberInstance[e(214)] }),
                  this.updateProfileInTheFirstLogin(),
                  (this[e(189)] = !0));
              },
            },
            {
              key: "updateProfileInTheFirstLogin",
              value: function () {
                var t = i,
                  e = this,
                  n = function () {
                    var t,
                      n = X,
                      i = e[n(245)].mySelf.getVariable(n(249))[n(225)];
                    i == FBInstant[n(192)][n(211)]()
                      ? ((t = new SFS2X[n(270)]()).putUtfString(
                          n(249),
                          FBInstant[n(192)][n(148)]()
                        ),
                        t[n(159)](n(261), f[n(196)]()),
                        e[n(245)].send(new SFS2X[n(167)](n(155), t)))
                      : i != FBInstant[n(192)].getName() &&
                        ((t = new SFS2X[n(270)]())[n(234)](
                          n(249),
                          FBInstant[n(192)][n(148)]()
                        ),
                        e[n(245)][n(242)](
                          new SFS2X.ExtensionRequest(n(155), t)
                        )),
                      CyberInstance[n(158)] != n(185) &&
                        ((t = new SFS2X.SFSObject())[n(234)](
                          n(158),
                          CyberInstance[n(158)]
                        ),
                        e.sfs.send(
                          new SFS2X[n(167)]("profile.updateAvatar", t)
                        ));
                  };
                if (globalStartGameAsyncResolved) n[t(222)](this);
                else
                  var r = setInterval(function () {
                    var i = t;
                    globalStartGameAsyncResolved &&
                      (clearInterval(r), n[i(222)](e));
                  }, 10);
              },
            },
            {
              key: i(255),
              value: function () {
                var t = i;
                try {
                  if (!this[t(252)]) {
                    var e = FBInstant[t(220)]();
                    if (e && e[t(214)]) {
                      var n = new SFS2X[t(270)]();
                      n[t(234)](t(208), e[t(214)] + ""),
                        this[t(245)][t(242)](new SFS2X[t(167)](t(186), n)) &&
                          (this[t(252)] = !0);
                    }
                  }
                } catch (t) {
                  console.log("handleEntryPointData error", t);
                }
              },
            },
            {
              key: i(219),
              value: function (t) {
                var e = i;
                try {
                  t[e(224)] == e(197) &&
                    ((this[e(197)] = 1),
                    t[e(166)][e(223)]("msg")
                      ? (this[e(213)] = t[e(166)][e(169)]("msg"))
                      : (this[e(213)] = e(241)));
                } catch (t) {
                  console[e(149)](e(200), t);
                }
              },
            },
            {
              key: "onLoginError",
              value: function (t) {
                var e = i;
                if (t[e(248)] && t[e(248)] === e(156))
                  return (this.maintenance = 1), void (this[e(213)] = e(241));
                if (4 === t.errorCode) {
                  (this.maintenance = 1),
                    (this[e(213)] = "Tài khoản của bạn đã bị khóa");
                  var n = parseInt(CyberInstance[e(214)]);
                  return (
                    n > 0 && (this[e(213)] += e(161) + n),
                    void (this[e(213)] += e(205) + CyberInstance.playerId)
                  );
                }
              },
            },
            {
              key: "getPlatform",
              value: function () {
                var t = i,
                  e = FBInstant.getPlatform();
                if (null == e || typeof e == t(230))
                  try {
                    e = navigator ? navigator[t(244)] : t(179);
                  } catch (n) {
                    e = t(179);
                  }
                return e + "";
              },
            },
            {
              key: i(239),
              value: function () {
                var t = i;
                this[t(245)][t(239)]();
              },
            },
            {
              key: i(215),
              value: function () {
                var t = i,
                  e = new Date()[t(206)]() - this[t(237)];
                t(262),
                  e > 1e3 && e <= 2e3
                    ? t(182)
                    : e > 2e3 && e <= 3e3
                    ? t(203)
                    : e > 3e3 && e <= 4e3
                    ? t(235)
                    : e > 4e3 && e <= 5e3
                    ? t(171)
                    : e > 5e3 && e <= 6e3
                    ? t(264)
                    : e > 6e3 && e <= 7e3
                    ? t(265)
                    : e > 7e3 && e <= 8e3
                    ? t(191)
                    : e > 8e3 && e <= 9e3
                    ? t(160)
                    : (e > 9e3 && e <= 1e4) || (e > 1e4 && t(268));
              },
            },
            {
              key: i(170),
              value: function () {
                var t = i,
                  e = this;
                this.removeHearBeat(),
                  CyberGlobalData[t(247)] > B.GIFT_TIME - 60 &&
                    CyberGlobalData[t(247)] < B[t(173)] &&
                    (CyberGlobalData.collectTime = B[t(173)] - 60),
                  CyberGlobalData[t(247)] < B[t(173)] &&
                    (this[t(231)] = setInterval(function () {
                      var n = t;
                      try {
                        CyberGlobalData[n(247)] < B.GIFT_TIME
                          ? (CyberGlobalData.collectTime =
                              CyberGlobalData.collectTime + 60)
                          : e[n(243)](),
                          v[n(177)](n(168), CyberGlobalData[n(247)]);
                      } catch (t) {
                        console[n(149)](t);
                      }
                    }, 6e4));
              },
            },
            {
              key: i(243),
              value: function () {
                this[i(231)] &&
                  (clearInterval(this.heartBeat), (this.heartBeat = null));
              },
            },
          ]) && J(t[X(153)], e),
          n && J(t, n),
          r
        );
      })(),
      K = [
        "constructor",
        "onClick",
        "click",
        "events",
        "Sprite",
        "writable",
        "addChild",
        "433VNNZll",
        "#ffffff",
        "973839dcvpQg",
        "enableButton",
        "key",
        "isClickOnce",
        "inputEnabled",
        "48613eowfJA",
        "__proto__",
        "symbol",
        "configurable",
        "alpha",
        "setText",
        "setStyle",
        "height",
        "661Icmnay",
        "removeAll",
        "tween",
        "onButtonClick",
        "anchor",
        "length",
        "Cannot call a class as a function",
        "visible",
        "disableButton",
        "7SzEcJL",
        "Text",
        "clickOnce",
        "sound",
        "defineProperty",
        "soundEnabled",
        "add",
        "setTo",
        "Super expression must either be null or a function",
        "width",
        "dispatchAllowed",
        "alphaButton",
        "1599685TgLaee",
        "enumerable",
        "setPrototypeOf",
        "prototype",
        "create",
        "function",
        "652803fxoFPl",
        "addIcon",
        "buttonText",
        "Linear",
        "1666754fEaEjx",
        "scale",
        "1yEEZKb",
        "game",
        "getPrototypeOf",
        "onInputDown",
        "playButtonSound",
        "effectEnabled",
        "1KvfRTk",
        "iterator",
        "undefined",
        "1202190Gxwtyq",
      ],
      Y = function (t, e) {
        return K[(t -= 124)];
      },
      Z = Y;
    function Q(t) {
      var e = Y;
      return (Q =
        "function" == typeof Symbol && typeof Symbol[e(133)] === e(152)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(184) &&
                t[n(136)] === Symbol &&
                t !== Symbol.prototype
                ? n(152)
                : typeof t;
            })(t);
    }
    function $(t, e) {
      for (var n = Y, i = 0; i < e[n(163)]; i++) {
        var r = e[i];
        (r[n(180)] = r[n(180)] || !1),
          (r[n(153)] = !0),
          "value" in r && (r[n(141)] = !0),
          Object[n(171)](t, r[n(147)], r);
      }
    }
    function tt(t, e) {
      var n = Y;
      return !e || ("object" !== Q(e) && typeof e !== n(184))
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function et(t) {
      var e = Y;
      return (et = Object[e(181)]
        ? Object.getPrototypeOf
        : function (t) {
            var n = e;
            return t[n(151)] || Object[n(128)](t);
          })(t);
    }
    function nt(t, e) {
      var n = Y;
      return (nt =
        Object[n(181)] ||
        function (t, e) {
          return (t[n(151)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Y; ; )
        try {
          if (
            894145 ===
            -parseInt(n(126)) * parseInt(n(179)) +
              parseInt(n(143)) * parseInt(n(158)) +
              parseInt(n(124)) +
              parseInt(n(135)) +
              -parseInt(n(167)) * parseInt(n(150)) +
              -parseInt(n(145)) +
              parseInt(n(185)) * parseInt(n(132))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(K);
    var it = (function (t) {
        var e,
          n,
          i,
          r = Y;
        function a(t, e, n, i, r) {
          var o,
            s = Y;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(Y(164));
            })(this, a),
            ((o = tt(this, et(a).call(this, t, e, n, i, r)))[s(172)] = !0),
            (o[s(148)] = !1),
            (o[s(131)] = !1),
            o
          );
        }
        return (
          (function (t, e) {
            var n = Y;
            if (typeof e !== n(184) && null !== e) throw new TypeError(n(175));
            (t[n(182)] = Object[n(183)](e && e[n(182)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && nt(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: "addText",
              value: function (t, e) {
                var n = Y;
                if (this.buttonText)
                  e && this[n(187)][n(156)](e), this[n(187)][n(155)](t);
                else {
                  var i = new Phaser[n(168)](
                    this.game,
                    this[n(176)] / 2,
                    this[n(157)] / 2 + 2,
                    t,
                    typeof e != n(134)
                      ? e
                      : {
                          font: APP_FONT,
                          fill: n(144),
                          fontWeight: 400,
                          fontSize: 24,
                        }
                  );
                  i[n(162)].setTo(0.5), this.addChild(i), (this.buttonText = i);
                }
              },
            },
            {
              key: r(186),
              value: function (t, e) {
                var n = r,
                  i = this[n(127)].make.sprite(
                    this[n(176)] / 2,
                    this[n(157)] / 2,
                    t,
                    e
                  );
                i[n(162)][n(174)](0.5),
                  i[n(125)][n(174)](0.85),
                  this[n(142)](i);
              },
            },
            {
              key: r(161),
              value: function () {
                var t = r,
                  e = this;
                this[t(172)] && CyberInstance[t(170)][t(130)](),
                  this[t(177)] &&
                    ((this[t(177)] = !1),
                    this.onClick.dispatch(this),
                    this[t(148)]
                      ? ((this.inputEnabled = !1),
                        this[t(137)][t(159)](),
                        (this[t(137)] = null),
                        this[t(139)][t(129)][t(159)]())
                      : setTimeout(function () {
                          e[t(177)] = !0;
                        }, 300));
              },
            },
            {
              key: r(138),
              value: function (t, e) {
                var n = r;
                !this.onClick &&
                  ((this[n(149)] = !0),
                  (this[n(177)] = !0),
                  (this[n(137)] = new Phaser.Signal()),
                  this.onClick.add(t, e),
                  this[n(139)][n(129)][n(173)](this[n(161)], this));
              },
            },
            {
              key: r(169),
              value: function (t, e) {
                var n = r;
                this[n(138)](t, e), (this[n(148)] = !0);
              },
            },
            {
              key: r(178),
              value: function () {
                var t = r;
                this[t(131)] &&
                  0.5 != this[t(154)] &&
                  this[t(127)][t(173)]
                    [t(160)](this)
                    .to({ alpha: 0.5 }, 400, t(188), !0),
                  (this.inputEnabled = !1),
                  (this[t(165)] = !0);
              },
            },
            {
              key: r(166),
              value: function () {
                var t = r;
                this.effectEnabled &&
                  0 != this.alpha &&
                  this[t(127)][t(173)]
                    .tween(this)
                    .to({ alpha: 0 }, 400, t(188), !0),
                  (this[t(149)] = !1),
                  (this[t(165)] = !1);
              },
            },
            {
              key: r(146),
              value: function () {
                var t = r;
                this.effectEnabled &&
                  this[t(154)] < 1 &&
                  this.game[t(173)]
                    [t(160)](this)
                    .to({ alpha: 1 }, 400, "Linear", !0),
                  (this[t(149)] = !0),
                  (this[t(165)] = !0);
              },
            },
          ]) && $(e[Y(182)], n),
          i && $(e, i),
          a
        );
      })(Phaser[Z(140)]),
      rt = [
        "showAsync",
        "Cannot call a class as a function",
        "315593stMqrc",
        "blocked",
        "defineProperty",
        "handleLoadError",
        "16793gVijbD",
        "55hcFFPJ",
        "1VsVaWf",
        "Signal",
        "getRewardedVideoAsync",
        "CLOSE",
        "length",
        "key",
        "value",
        "prototype",
        "1355sUlSnj",
        "handleAdsNoFill",
        "onLoadError",
        "enumerable",
        "14CSzCzd",
        "adInstance",
        "onShow",
        "loadAsync",
        "isAnyPrice",
        "915811ZXteGw",
        "show",
        "onLoad",
        "293948JGWXAI",
        "adLoaded",
        "preload",
        "99109PRduee",
        "catch",
        "90OymdtL",
        "dispatch",
        "1582MJTGRp",
        "then",
        "handleLoadSuccess",
      ],
      at = function (t, e) {
        return rt[(t -= 496)];
      };
    function ot(t, e) {
      for (var n = at, i = 0; i < e[n(525)]; i++) {
        var r = e[i];
        (r[n(532)] = r[n(532)] || !1),
          (r.configurable = !0),
          n(527) in r && (r.writable = !0),
          Object[n(517)](t, r[n(526)], r);
      }
    }
    !(function (t, e) {
      for (var n = at; ; )
        try {
          if (
            641646 ===
            parseInt(n(503)) +
              -parseInt(n(510)) * -parseInt(n(508)) +
              -parseInt(n(519)) * -parseInt(n(520)) +
              -parseInt(n(500)) +
              parseInt(n(533)) * -parseInt(n(529)) +
              -parseInt(n(506)) +
              -parseInt(n(515)) * -parseInt(n(521))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(rt);
    var st = (function () {
        var t,
          e,
          n,
          i = at;
        function r(t, e) {
          var n = at;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(at(514));
          })(this, r),
            (this.id = t),
            (this[n(516)] = !1),
            (this[n(504)] = !1),
            (this[n(496)] = null),
            (this[n(499)] = e),
            (this[n(531)] = new Phaser[n(522)]()),
            (this.onLoad = new Phaser[n(522)]()),
            (this[n(497)] = new Phaser[n(522)]());
        }
        return (
          (t = r),
          (e = [
            {
              key: "preload",
              value: function () {
                var t = at,
                  e = this;
                null !== this[t(496)]
                  ? this[t(496)]
                      [t(498)]()
                      .then(function () {
                        e.handleLoadSuccess();
                      })
                      .catch(function (n) {
                        e[t(518)](n, 2);
                      })
                  : FBInstant[t(523)](this.id)
                      [t(511)](function (n) {
                        var i = t;
                        return (e[i(496)] = n), e[i(496)][i(498)]();
                      })
                      .then(function () {
                        e[t(512)]();
                      })
                      .catch(function (n) {
                        e[t(518)](n, 2);
                      });
              },
            },
            {
              key: i(512),
              value: function () {
                var t = i;
                (this.adLoaded = !0), this[t(502)][t(509)](this);
              },
            },
            {
              key: i(518),
              value: function (t, e) {
                var n = i,
                  r = this;
                this[n(499)]
                  ? setTimeout(function () {
                      var t = n;
                      null != r[t(496)] && r[t(530)](e);
                    }, 3e4)
                  : (this.blocked = !0),
                  this[n(531)].dispatch(this, t);
              },
            },
            {
              key: "handleAdsNoFill",
              value: function (t) {
                var e = i,
                  n = this;
                t > 3
                  ? (this[e(516)] = !0)
                  : this[e(496)]
                      [e(498)]()
                      [e(511)](function () {
                        n.handleLoadSuccess();
                      })
                      [e(507)](function (i) {
                        n[e(518)](i, t + 1);
                      });
              },
            },
            {
              key: i(501),
              value: function () {
                var t = i,
                  e = this;
                this[t(496)]
                  [t(513)]()
                  [t(511)](function () {
                    var n = t;
                    (e.adInstance = null),
                      (e[n(504)] = !1),
                      e[n(497)].dispatch(e.id),
                      setTimeout(function () {
                        e.preload();
                      }, 1e3);
                  })
                  .catch(function (n) {
                    var i = t;
                    (e[i(496)] = null),
                      (e[i(504)] = !1),
                      e.showErrorPopup(n),
                      setTimeout(function () {
                        e[i(505)]();
                      }, 1e3);
                  });
              },
            },
            {
              key: "showErrorPopup",
              value: function (t) {
                var e = i;
                t &&
                  new G(game, {
                    text: t.message,
                    buttonText: CyberInstance.lang[e(524)],
                  });
              },
            },
          ]) && ot(t[at(528)], e),
          n && ot(t, n),
          r
        );
      })(),
      ut = [
        "addChild",
        "enumerable",
        "game",
        "6htQxCg",
        "getRewardedVideoAsync",
        "300326YEKZTn",
        "player",
        "init",
        "then",
        "onLoadError",
        "anyPriceInstance",
        "toISOString",
        "Signal",
        "Cannot call a class as a function",
        "3wjknRi",
        "getDataAsync",
        "writable",
        "adTestModeScreen",
        "value",
        "prototype",
        "508ToPWts",
        "262VNtmFM",
        "RV2Instance",
        "increaseSpinCounter",
        "RV3Instance",
        "onShow",
        "ads",
        "add",
        "OUT_OFF_MONEY_POSITION",
        "285910HqjusS",
        "spinCounter",
        "185747jmzfiG",
        "onReward",
        "REWARDED_POPUP_POSITION",
        "setDataAsync",
        "extraCounter",
        "ready",
        "71932rbiVnm",
        "currentDate",
        "catch",
        "make",
        "text",
        "dispatch",
        "watchCounter",
        "type",
        "75967Eicqiv",
        "rvids",
        "world",
        "instance",
        "inited",
        "onLoad",
        "preload",
        "1lJQBwr",
        "show",
        "key",
        "50159VKCjzS",
        "#ffffff",
        "SPIN_POSITION",
        "fakeid",
        "overlayTexture",
        "indexOf",
        "destroy",
        "testMode",
        "adEnabled",
        "setTo",
        "REWARD_ARRAY",
        "getTimezoneOffset",
        "blocked",
        "enableTestMode",
        "onReady",
        "length",
        "4gMgdpR",
      ],
      ct = function (t, e) {
        return ut[(t -= 468)];
      };
    function ht(t, e) {
      for (var n = ct, i = 0; i < e[n(487)]; i++) {
        var r = e[i];
        (r[n(490)] = r[n(490)] || !1),
          (r.configurable = !0),
          n(507) in r && (r[n(505)] = !0),
          Object.defineProperty(t, r[n(471)], r);
      }
    }
    !(function (t, e) {
      for (var n = ct; ; )
        try {
          if (
            160873 ===
            -parseInt(n(534)) * parseInt(n(503)) +
              parseInt(n(509)) * parseInt(n(510)) -
              parseInt(n(494)) -
              parseInt(n(526)) +
              -parseInt(n(518)) * parseInt(n(469)) +
              -parseInt(n(472)) * parseInt(n(488)) +
              parseInt(n(492)) * parseInt(n(520))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(ut);
    var lt = Object.freeze([5e4, 1e5, 2e5, 3e5, 5e5]),
      ft = null,
      pt = (function () {
        var t,
          e,
          n,
          i = ct;
        function r() {
          var t = ct;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(ct(502));
          })(this, r),
            (this[t(538)] = !1),
            (this[t(525)] = !1),
            (this[t(479)] = !1),
            (this[t(532)] = 0),
            (this.extraCounter = 0),
            (this.spinCounter = 0),
            (this.maxVideos = 10),
            (this[t(486)] = new Phaser[t(501)]()),
            (this.onReward = new Phaser[t(501)]()),
            (this.ads = []);
          for (var e = 0; e < CyberInstance[t(535)].length; e++) {
            var n = new st(CyberInstance[t(535)][e], 0 == e);
            n[t(498)].add(this[t(498)], this),
              n[t(539)][t(516)](this[t(539)], this),
              n[t(514)].add(this.onShow, this),
              this[t(515)].push(n);
          }
        }
        return (
          (t = r),
          (e = [
            {
              key: i(496),
              value: function () {
                var t = i,
                  e = this;
                !this.inited &&
                  -1 != FBInstant.getSupportedAPIs()[t(477)](t(493)) &&
                  CyberInstance[t(480)] &&
                  0 != CyberInstance.rvids.length &&
                  this[t(504)](function () {
                    var n = t;
                    CyberInstance[n(535)][n(487)] > 1
                      ? e.RV3Instance.blocked
                        ? e[n(511)][n(484)]
                          ? e[n(499)][n(468)]()
                          : e[n(511)][n(468)]()
                        : e[n(513)][n(468)]()
                      : e[n(499)][n(468)]();
                  });
              },
            },
            {
              key: i(485),
              value: function () {
                var t = i,
                  e = this;
                !this[t(538)] &&
                  this.getDataAsync(function () {
                    (e[t(479)] = !0),
                      setTimeout(function () {
                        e.onLoad();
                      }, 3e3);
                  });
              },
            },
            {
              key: i(504),
              value: function (t) {
                var e = i,
                  n = this;
                FBInstant[e(495)]
                  [e(504)]([e(527), e(532), e(519), e(524)])
                  [e(497)](function (i) {
                    var r,
                      a,
                      o = e;
                    (n[o(527)] =
                      ((r = ct),
                      (a = new Date()),
                      new Date(a.getTime() - 6e4 * a[r(483)]())
                        [r(500)]()
                        .split("T")[0])),
                      i[o(532)] && (n.watchCounter = parseInt(i[o(532)])),
                      i[o(524)] && (n[o(524)] = parseInt(i[o(524)])),
                      i[o(519)] != n[o(527)] &&
                        (n[o(519)] = parseInt(i[o(519)])),
                      i[o(527)] !== n[o(527)] &&
                        ((n.watchCounter = 0),
                        (n[o(519)] = 0),
                        (n.extraCounter = 0)),
                      FBInstant[o(495)][o(523)]({
                        currentDate: n[o(527)],
                        watchCounter: n[o(532)],
                        spinCounter: n[o(519)],
                        extraCounter: n[o(524)],
                      }),
                      (n.inited = !0),
                      t();
                  })
                  [e(528)](function (e) {
                    setTimeout(function () {
                      n.getDataAsync(t);
                    }, 5e3);
                  });
              },
            },
            {
              key: i(539),
              value: function () {
                var t = i;
                !this[t(525)] && ((this.ready = !0), this[t(486)][t(531)]());
              },
            },
            {
              key: i(498),
              value: function (t) {
                var e = i;
                CyberInstance[e(535)][e(487)] > 1 &&
                  (t.id == this[e(513)].id
                    ? this.RV2Instance[e(468)]()
                    : t.id == this[e(511)].id && this[e(499)][e(468)]());
              },
            },
            {
              key: i(470),
              value: function (t) {
                var e = i,
                  n = this;
                if (this.ready)
                  if (((this.type = t), this[e(479)])) {
                    this[e(506)] = CyberInstance[e(491)][e(516)].image(
                      0,
                      0,
                      CyberGlobalData[e(476)]
                    );
                    var r = CyberInstance.game[e(529)][e(530)](
                      CyberInstance[e(491)][e(536)].centerX,
                      CyberInstance[e(491)][e(536)].centerY,
                      "FAKE AD IS SHOWING ON CENTER OF SCREEN...",
                      {
                        font: APP_FONT,
                        fill: e(473),
                        fontWeight: 500,
                        fontSize: 40,
                      }
                    );
                    r.anchor[e(481)](0.5),
                      this[e(506)][e(489)](r),
                      setTimeout(function () {
                        var t = e;
                        n.adTestModeScreen[t(478)](), n[t(514)](t(475));
                      }, 5e3);
                  } else
                    for (var a = 0; a < CyberInstance[e(535)][e(487)]; a++)
                      if (this[e(515)][a].adLoaded) {
                        this[e(515)][a][e(470)]();
                        break;
                      }
              },
            },
            {
              key: i(514),
              value: function (t) {
                var e = i,
                  n = this;
                if (
                  ((this.ready = !1),
                  this[e(486)][e(531)](),
                  this[e(533)] == r[e(522)])
                ) {
                  (this[e(532)] = this[e(532)] + 1),
                    FBInstant.player[e(523)]({ watchCounter: this[e(532)] });
                  var a = this[e(532)] <= 5 ? lt[this[e(532)] - 1] : lt[4];
                  this[e(521)][e(531)]({
                    id: t,
                    type: this[e(533)],
                    coin: a,
                    currentDate: this[e(527)],
                    watchCounter: this[e(532)],
                  });
                } else
                  this.type == r[e(474)]
                    ? this[e(521)].dispatch({ id: t, type: this[e(533)] })
                    : this[e(533)] == r.OUT_OFF_MONEY_POSITION &&
                      ((this.extraCounter = this.extraCounter + 1),
                      FBInstant.player[e(523)]({ extraCounter: this[e(524)] }),
                      this[e(521)].dispatch({ id: t, type: this[e(533)] }));
                this[e(479)] &&
                  setTimeout(function () {
                    n[e(539)]();
                  }, 3e3);
              },
            },
            {
              key: i(512),
              value: function () {
                var t = i;
                (this[t(519)] = this.spinCounter + 1),
                  FBInstant[t(495)][t(523)]({ spinCounter: this[t(519)] });
              },
            },
            {
              key: "anyPriceInstance",
              get: function () {
                return this.ads[0];
              },
            },
            {
              key: i(511),
              get: function () {
                return this.ads[1];
              },
            },
            {
              key: "RV3Instance",
              get: function () {
                return this[i(515)][2];
              },
            },
          ]),
          (n = [
            {
              key: i(537),
              get: function () {
                return ft || (ft = new r()), ft;
              },
            },
            {
              key: i(522),
              get: function () {
                return 1;
              },
            },
            {
              key: i(517),
              get: function () {
                return 3;
              },
            },
            {
              key: i(474),
              get: function () {
                return 4;
              },
            },
            {
              key: i(482),
              get: function () {
                return lt;
              },
            },
          ]),
          e && ht(t[ct(508)], e),
          n && ht(t, n),
          r
        );
      })(),
      dt = [
        "lang",
        "addBackground",
        "185800yaFNwZ",
        "closeButton",
        "addCloseButton",
        "Super expression must either be null or a function",
        "THONG_BAO",
        "prototype",
        "OUT_OFF_MONEY_POSITION",
        "width",
        "constructor",
        "function",
        "show",
        "game",
        "center",
        "addButton",
        "360981sabozH",
        "NOT_ENOUGH_CHIP_TO_CONTINUE",
        "make",
        "addContent",
        "button_close",
        "#ffffff",
        "writable",
        "symbol",
        "value",
        "addChild",
        "defineProperty",
        "addText",
        "add",
        "387364ABLezq",
        "__proto__",
        "background",
        "ADS_NOT_READY",
        "configurable",
        "video_popop_watch_button",
        "this hasn't been initialised - super() hasn't been called",
        "addTitle",
        "187619zUKdry",
        "height",
        "241394cPXKQf",
        "key",
        "sprite",
        "object",
        "onWatchClick",
        "Cannot call a class as a function",
        "close",
        "events",
        "buttonText",
        "createTransition",
        "click",
        "bg_popup_medium_484x292",
        "377133KbRkHh",
        "NHAN_QUA",
        "iterator",
        "#9ecbe2",
        "getPrototypeOf",
        "text",
        "enumerable",
        "setPrototypeOf",
        "call",
        "toUpperCase",
        "create",
        "375277ilzNeY",
        "anchor",
        "ready",
        "homeScreen",
        "addOverlay",
      ],
      yt = function (t, e) {
        return dt[(t -= 405)];
      };
    function vt(t) {
      var e = yt;
      return (vt =
        typeof Symbol === e(457) && typeof Symbol[e(432)] === e(469)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(457) &&
                t[n(456)] === Symbol &&
                t !== Symbol[n(453)]
                ? n(469)
                : typeof t;
            })(t);
    }
    function bt(t, e) {
      for (var n = yt, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(436)] = r[n(436)] || !1),
          (r[n(412)] = !0),
          n(470) in r && (r[n(468)] = !0),
          Object[n(405)](t, r[n(419)], r);
      }
    }
    function gt(t, e) {
      var n = yt;
      return !e || (vt(e) !== n(421) && "function" != typeof e)
        ? (function (t) {
            var e = yt;
            if (void 0 === t) throw new ReferenceError(e(414));
            return t;
          })(t)
        : e;
    }
    function mt(t) {
      var e = yt;
      return (mt = Object[e(437)]
        ? Object[e(434)]
        : function (t) {
            var n = e;
            return t[n(409)] || Object[n(434)](t);
          })(t);
    }
    function It(t, e) {
      return (It =
        Object[yt(437)] ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = yt; ; )
        try {
          if (
            264102 ===
            -parseInt(n(462)) -
              parseInt(n(430)) +
              parseInt(n(408)) +
              parseInt(n(448)) +
              parseInt(n(441)) +
              -parseInt(n(416)) +
              parseInt(n(418))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(dt);
    var wt = (function (t) {
        var e,
          n,
          i,
          r = yt;
        function a(t, e) {
          var n,
            i = yt;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(yt(423));
            })(this, a),
            (n = gt(this, mt(a)[i(438)](this, t, e)))[i(445)](),
            n[i(447)](i(444), i(429)),
            n[i(415)](),
            n[i(465)](CyberInstance.lang[i(463)]),
            n[i(461)](e),
            n.addCloseButton(),
            n[i(427)](),
            n
          );
        }
        return (
          (function (t, e) {
            var n = yt;
            if ("function" != typeof e && null !== e)
              throw new TypeError(n(451));
            (t.prototype = Object[n(440)](e && e[n(453)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && It(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: "addButton",
              value: function () {
                var t = yt,
                  e = new it(this[t(459)], 0, 0, "homeScreen", t(413));
                (e.x = this[t(410)][t(455)] / 2 - e.width / 2),
                  (e.y = this.background[t(417)] - e[t(417)] - 30),
                  e[t(406)](CyberInstance[t(446)][t(431)]),
                  this.background[t(471)](e),
                  e.buttonText.anchor.setTo(0, 0.5);
                var n = this[t(459)][t(464)].sprite(
                  55,
                  12,
                  "homeScreen",
                  "rw_icon"
                );
                e[t(471)](n),
                  (e[t(426)].x = n.x + n.width + 10),
                  e[t(428)](this.onWatchClick, this);
              },
            },
            {
              key: r(422),
              value: function () {
                var t = r;
                pt.instance[t(443)]
                  ? pt.instance[t(458)](pt[t(454)])
                  : new G(game, {
                      text: CyberInstance.lang[t(411)],
                      buttonText: CyberInstance[t(446)].CLOSE,
                      hideCloseButton: !0,
                    }),
                  this[t(424)]();
              },
            },
            {
              key: r(465),
              value: function (t) {
                var e = r,
                  n = this[e(459)][e(464)][e(435)](52, 94, t, {
                    font: APP_FONT,
                    fontSize: 26,
                    fill: e(433),
                    fontWeight: 400,
                    wordWrap: !0,
                    wordWrapWidth: 598,
                    align: e(460),
                    boundsAlignH: e(460),
                    boundsAlignV: "middle",
                  });
                n.setTextBounds(0, 0, 598, 210), this[e(410)].addChild(n);
              },
            },
            {
              key: r(415),
              value: function () {
                var t = r,
                  e = this.game[t(407)][t(435)](
                    this[t(410)].width / 2,
                    15,
                    CyberInstance[t(446)][t(452)][t(439)](),
                    {
                      font: APP_FONT,
                      fontSize: 30,
                      fill: t(467),
                      fontWeight: "bold",
                    }
                  );
                e[t(442)].setTo(0.5, 0), this.background[t(471)](e);
              },
            },
            {
              key: r(450),
              value: function () {
                var t = r,
                  e = this,
                  n = this[t(459)][t(464)][t(420)](0, 0, t(444), t(466));
                (n.x = this[t(410)][t(455)] - n.width / 2 - 10),
                  (n.y = -12),
                  (n.inputEnabled = !0),
                  n[t(425)].onInputDown.addOnce(function () {
                    var n = t;
                    CyberInstance.sound.playButtonSound(), e[n(424)]();
                  }, this),
                  (this[t(449)] = n),
                  this[t(410)].addChild(this.closeButton);
              },
            },
          ]) && bt(e[yt(453)], n),
          i && bt(e, i),
          a
        );
      })(x),
      St = [
        "defineProperty",
        "3auUIOz",
        "485093SKRzpM",
        "handleAdsNoFill",
        "adInstance",
        "instance",
        "1EiYPxk",
        "getDataAsync",
        "loading",
        "init",
        "493169JXdVUI",
        "154768CQrBzr",
        "interstitialDate",
        "getTimezoneOffset",
        "player",
        "configurable",
        "1XVPhIa",
        "blocked",
        "getTime",
        "toISOString",
        "writable",
        "543773SRSZrI",
        "handleLoadError",
        "maxShow",
        "catch",
        "length",
        "16247quZloB",
        "load",
        "ready",
        "value",
        "inited",
        "split",
        "then",
        "Cannot call a class as a function",
        "getHours",
        "show",
        "setDataAsync",
        "showAsync",
        "interstitialCounter",
        "interids",
        "enumerable",
        "key",
        "87562CeDloI",
        "4nAbiIQ",
        "7elCbAF",
        "lastShowingTime",
        "loadAsync",
        "53903ZqMaGO",
      ],
      kt = function (t, e) {
        return St[(t -= 439)];
      };
    function Ct(t, e) {
      for (var n = kt, i = 0; i < e[n(478)]; i++) {
        var r = e[i];
        (r[n(445)] = r.enumerable || !1),
          (r[n(468)] = !0),
          n(482) in r && (r[n(473)] = !0),
          Object[n(453)](t, r[n(446)], r);
      }
    }
    !(function (t, e) {
      for (var n = kt; ; )
        try {
          if (
            295777 ===
            -parseInt(n(469)) * parseInt(n(455)) +
              parseInt(n(474)) +
              -parseInt(n(452)) * -parseInt(n(454)) +
              parseInt(n(449)) * parseInt(n(479)) +
              parseInt(n(463)) +
              -parseInt(n(459)) * -parseInt(n(447)) +
              parseInt(n(464)) * -parseInt(n(448))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(St);
    var Ot = null,
      Pt = (function () {
        var t,
          e,
          n,
          i = kt;
        function r() {
          var t = kt;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(kt(486));
          })(this, r),
            (this.inited = !1),
            (this[t(457)] = null),
            (this[t(481)] = !1),
            (this[t(461)] = !1),
            (this.blocked = !1),
            (this.interstitialCounter = 0),
            (this[t(450)] = 0),
            (this[t(476)] = CyberInstance.maxInterShowAsyncAllowed),
            new Date()[t(439)]() >= 20 && (this.maxShow = this[t(476)] + 1),
            new Date()[t(439)]() >= 22 && (this[t(476)] = this[t(476)] + 2);
        }
        return (
          (t = r),
          (e = [
            {
              key: i(462),
              value: function () {
                var t = i,
                  e = this;
                0 != CyberInstance[t(444)][t(478)] &&
                  0 != CyberInstance.adEnabled &&
                  (this[t(483)]
                    ? this[t(480)]()
                    : FBInstant[t(467)]
                        [t(460)]([t(465), t(443), t(450)])
                        [t(485)](function (n) {
                          var i,
                            r,
                            a = t;
                          if (!e[a(483)]) {
                            (e.inited = !0),
                              (e[a(465)] =
                                ((i = kt),
                                (r = new Date()),
                                new Date(r[i(471)]() - 6e4 * r[i(466)]())
                                  [i(472)]()
                                  [i(484)]("T")[0]));
                            var o = !1;
                            n[a(450)] && (e[a(450)] = parseInt(n[a(450)])),
                              n[a(465)]
                                ? (n[a(443)] &&
                                    (e[a(443)] = parseInt(n[a(443)])),
                                  n[a(465)] != e[a(465)] &&
                                    ((e[a(443)] = 0), (o = !0)))
                                : (o = !0),
                              o &&
                                FBInstant.player[a(441)]({
                                  interstitialDate: e[a(465)],
                                  interstitialCounter: e.interstitialCounter,
                                }),
                              e[a(480)]();
                          }
                        })
                        [t(477)](function () {
                          setTimeout(function () {
                            var t = kt;
                            r[t(458)][t(462)]();
                          }, 5e3);
                        }));
              },
            },
            {
              key: i(480),
              value: function () {
                var t = i,
                  e = this;
                this.interstitialCounter >= this[t(476)] ||
                  (!this[t(481)] &&
                    !this.loading &&
                    ((this[t(461)] = !0),
                    FBInstant.getInterstitialAdAsync(CyberInstance[t(444)][0])
                      .then(function (n) {
                        var i = t;
                        return (e[i(457)] = n), e[i(457)][i(451)]();
                      })
                      [t(485)](function () {
                        var n = t;
                        (e[n(461)] = !1), (e[n(481)] = !0);
                      })
                      [t(477)](function (n) {
                        e[t(475)](n, 2);
                      })));
              },
            },
            {
              key: i(475),
              value: function (t, e) {
                var n = this;
                setTimeout(function () {
                  var t = kt;
                  null != n[t(457)] && n[t(456)](e);
                }, 3e4);
              },
            },
            {
              key: i(456),
              value: function (t) {
                var e = i,
                  n = this;
                t > 3
                  ? (this[e(470)] = !0)
                  : this.adInstance[e(451)]()
                      .then(function () {
                        var t = e;
                        (n[t(461)] = !1), (n[t(481)] = !0);
                      })
                      [e(477)](function (e) {
                        n.handleLoadError(e, t + 1);
                      });
              },
            },
            {
              key: i(440),
              value: function () {
                var t = i,
                  e = this;
                this.interstitialCounter >= this[t(476)] ||
                  new Date()[t(471)]() - this.lastShowingTime < 15e5 ||
                  (this[t(481)] &&
                    this[t(457)]
                      [t(442)]()
                      [t(485)](function () {
                        var n = t;
                        (e[n(457)] = null),
                          (e[n(481)] = !1),
                          (e.interstitialCounter = e.interstitialCounter + 1),
                          (e[n(450)] = new Date()[n(471)]()),
                          FBInstant.player.setDataAsync({
                            interstitialCounter: e[n(443)],
                            lastShowingTime: e.lastShowingTime,
                          });
                      })
                      [t(477)](function (n) {
                        var i = t;
                        (e.adInstance = null), (e[i(481)] = !1);
                      }));
              },
            },
          ]),
          (n = [
            {
              key: i(458),
              get: function () {
                return Ot || (Ot = new r()), Ot;
              },
            },
          ]),
          e && Ct(t.prototype, e),
          n && Ct(t, n),
          r
        );
      })(),
      Tt = [
        "configurable",
        "554294chweTL",
        "onRoomJoin",
        "joinRoom",
        "_sfs",
        "1zZxdTD",
        "MIN_BET",
        "writable",
        "ExtensionRequest",
        "initialize",
        "guserid",
        "user",
        "13319aSomrH",
        "gift.outOfMoney",
        "send",
        "isItMe",
        "level",
        "30078GQiQDw",
        "enumerable",
        "joinPrivateRoom",
        "ROOM_JOIN",
        "283ZxNIJK",
        "destroy",
        "isGameReady",
        "getCoin",
        "defineProperty",
        "SFSObject",
        "username",
        "key",
        "collectFreeChip",
        "create",
        "onUserExitRoom",
        "USER_EXIT_ROOM",
        "instance",
        "init",
        "findGame",
        "putInt",
        "getDisplayName",
        "1gyDbyK",
        "47ySNVre",
        "5RbcmBh",
        "start",
        "164389KtDgJS",
        "log",
        "mySelf",
        "7BKeFHB",
        "583778YMEcUl",
        "undefined",
        "roomId",
        "value",
        "GameController.joinRoom",
        "1498OIkfRK",
        "getExp",
        "slient",
        "getLevel",
        "sfs",
        "getVariable",
        "getGuserid",
        "putBool",
        "97484CQqyBx",
        "stop",
        "addEventListener",
        "exp",
        "joinGame",
        "SFSEvent",
        "sendRequest",
      ],
      _t = function (t, e) {
        return Tt[(t -= 365)];
      };
    function xt(t, e) {
      for (var n = _t, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(376)] = r[n(376)] || !1),
          (r[n(424)] = !0),
          n(407) in r && (r[n(365)] = !0),
          Object[n(383)](t, r[n(386)], r);
      }
    }
    !(function (t, e) {
      for (var n = _t; ; )
        try {
          if (
            327062 ===
            -parseInt(n(425)) * -parseInt(n(429)) -
              parseInt(n(375)) +
              parseInt(n(370)) * parseInt(n(397)) +
              parseInt(n(417)) * parseInt(n(398)) +
              parseInt(n(409)) * parseInt(n(379)) +
              parseInt(n(404)) * -parseInt(n(396)) +
              -parseInt(n(400)) * parseInt(n(403))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Tt);
    var Et = null,
      jt = (function () {
        var t,
          e,
          n,
          i = _t;
        function r() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, r);
        }
        return (
          (t = r),
          (e = [
            {
              key: i(367),
              value: function (t) {
                var e = i;
                !this.sfs &&
                  ((this[e(413)] = t),
                  this[e(413)].addEventListener(
                    SFS2X[e(422)][e(378)],
                    this.onRoomJoin,
                    this
                  ),
                  this.sfs[e(419)](SFS2X.SFSEvent[e(390)], this[e(389)], this));
              },
            },
            {
              key: i(426),
              value: function () {
                var t = i;
                Pt.instance[t(392)]();
              },
            },
            {
              key: "onUserExitRoom",
              value: function (t) {
                var e = i;
                t[e(369)][e(373)] && Pt[e(391)].show();
              },
            },
            {
              key: "canPlay",
              value: function (t) {
                var e = i,
                  n = typeof t == e(405) || null == t ? B[e(430)] : t;
                return this.getCoin() >= n * CyberInstance.miniumMoneyCondition;
              },
            },
            {
              key: "sendFindGameRequest",
              value: function () {
                var t = i,
                  e = this;
                r[t(423)](function () {
                  var n = t;
                  e[n(413)][n(372)](new SFS2X.ExtensionRequest(n(393)));
                });
              },
            },
            {
              key: i(427),
              value: function (t) {
                var e = this;
                r.sendRequest(function () {
                  var n = _t;
                  try {
                    var i = new SFS2X[n(384)]();
                    i[n(394)](n(406), parseInt(t)),
                      e[n(413)][n(372)](new SFS2X[n(366)](n(421), i));
                  } catch (t) {
                    console[n(401)](n(408), t);
                  }
                });
              },
            },
            {
              key: i(377),
              value: function (t, e) {
                var n = i,
                  a = this;
                r[n(423)](function () {
                  var i = n,
                    r = new SFS2X[i(384)]();
                  r[i(394)](i(406), t),
                    r[i(416)]("friendMode", !0),
                    r[i(416)](i(411), e),
                    a[i(413)].send(new SFS2X[i(366)]("joinGame", r));
                });
              },
            },
            {
              key: i(387),
              value: function () {
                var t = i;
                this[t(413)][t(372)](new SFS2X[t(366)](t(371)));
              },
            },
            {
              key: i(382),
              value: function () {
                var t = i;
                try {
                  return this[t(413)][t(402)][t(414)]("coin")[t(407)];
                } catch (t) {
                  return 0;
                }
              },
            },
            {
              key: i(415),
              value: function () {
                var t = i;
                try {
                  return this[t(413)][t(402)].name;
                } catch (e) {
                  return CyberInstance[t(368)] + "";
                }
              },
            },
            {
              key: i(410),
              value: function () {
                var t = i;
                try {
                  return this[t(413)][t(402)][t(414)](t(420))[t(407)];
                } catch (t) {
                  return 0;
                }
              },
            },
            {
              key: i(412),
              value: function () {
                var t = i;
                try {
                  return this[t(413)][t(402)][t(414)](t(374))[t(407)];
                } catch (t) {
                  return 1;
                }
              },
            },
            {
              key: i(395),
              value: function () {
                var t = i;
                try {
                  return this.sfs[t(402)].getVariable(t(385))[t(407)];
                } catch (t) {
                  return "";
                }
              },
            },
            {
              key: i(413),
              set: function (t) {
                this._sfs = t;
              },
              get: function () {
                return this[i(428)];
              },
            },
          ]),
          (n = [
            {
              key: i(423),
              value: function (t) {
                var e = i;
                if (u[e(381)]()) t();
                else {
                  var n = game.time[e(388)](!0);
                  n.loop(
                    100,
                    function () {
                      var i = e;
                      u[i(381)]() && (n[i(418)](), n[i(380)](), t());
                    },
                    this
                  ),
                    n[e(399)]();
                }
              },
            },
            {
              key: i(391),
              get: function () {
                return Et || (Et = new r()), Et;
              },
            },
          ]),
          e && xt(t.prototype, e),
          n && xt(t, n),
          r
        );
      })(),
      Bt = [
        "writable",
        "3eCqBjH",
        "loadingPopup",
        "Super expression must either be null or a function",
        "614119BhUAXK",
        "outOfMoney",
        "addOnce",
        "screenReady",
        "configurable",
        "addOverlay",
        "events",
        "image",
        "constructor",
        "handleOutOfMoney",
        "1LQCvyB",
        "symbol",
        "min",
        "Cannot call a class as a function",
        "time",
        "prototype",
        "width",
        "shutdown",
        "296251ZWiHCH",
        "langCode",
        "1723wHeHTZ",
        "_controller",
        "setPrototypeOf",
        "tween",
        "innerHeight",
        "add",
        "State",
        "closeLoadingPopup",
        "20HqWFvt",
        "notEnoughMoneyPopup",
        "1hOsJyV",
        "defineProperty",
        "close",
        "render",
        "43678tGCUHj",
        "advancedTiming",
        "renderer",
        "instance",
        "__proto__",
        "inputEnabled",
        "528783hcyAhi",
        "showOverlayAlphaEffect",
        "extraCounter",
        "setGameSize",
        "game",
        "enumerable",
        "getPrototypeOf",
        "7xthtQz",
        "text",
        "223319PsdXUu",
        "showContainer",
        "overlay",
        "overlayTexture",
        "onInputDown",
        "579zawiNk",
        "128806vRtGIj",
        "scale",
        "destroy",
        "ready",
        "function",
        "height",
        "#FFFFFF",
        "key",
        "openLoadingPopup",
        "canPlay",
        "renderSession",
        "debug",
        "innerWidth",
        "ceil",
        "hideContainer",
        "_screenReady",
      ],
      At = function (t, e) {
        return Bt[(t -= 280)];
      },
      Rt = At;
    function Ft(t) {
      var e = At;
      return (Ft =
        typeof Symbol === e(282) && typeof Symbol.iterator === e(309)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(282) &&
                t[n(306)] === Symbol &&
                t !== Symbol[n(313)]
                ? n(309)
                : typeof t;
            })(t);
    }
    function Nt(t, e) {
      for (var n = At, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(343)] = r[n(343)] || !1),
          (r[n(302)] = !0),
          "value" in r && (r[n(294)] = !0),
          Object[n(329)](t, r[n(285)], r);
      }
    }
    function Dt(t, e) {
      var n = At;
      return !e || ("object" !== Ft(e) && typeof e !== n(282))
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Lt(t) {
      var e = At;
      return (Lt = Object[e(320)]
        ? Object[e(344)]
        : function (t) {
            var n = e;
            return t[n(336)] || Object[n(344)](t);
          })(t);
    }
    function Mt(t, e) {
      var n = At;
      return (Mt =
        Object[n(320)] ||
        function (t, e) {
          return (t[n(336)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = At; ; )
        try {
          if (
            645283 ===
            parseInt(n(326)) * parseInt(n(332)) +
              parseInt(n(298)) * -parseInt(n(328)) +
              -parseInt(n(353)) * -parseInt(n(345)) +
              parseInt(n(308)) * -parseInt(n(347)) +
              parseInt(n(316)) +
              -parseInt(n(352)) * -parseInt(n(318)) +
              parseInt(n(338)) * -parseInt(n(295))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Bt);
    var Gt = (function (t) {
        var e,
          n,
          i,
          r = At;
        function a() {
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(At(311));
            })(this, a),
            Dt(this, Lt(a).call(this))
          );
        }
        return (
          (function (t, e) {
            var n = At;
            if (typeof e !== n(282) && null !== e) throw new TypeError(n(297));
            (t[n(313)] = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Mt(t, e);
          })(a, t),
          (e = a),
          (n = [
            { key: r(292), value: function () {} },
            { key: r(348), value: function () {} },
            {
              key: "init",
              value: function () {
                var t = r;
                (this[t(342)][t(334)][t(288)].roundPixels = !0),
                  (this[t(301)] = !1),
                  CyberInstance.devEnabled &&
                    (this[t(342)][t(312)][t(333)] = !0);
              },
            },
            {
              key: r(331),
              value: function () {
                var t = r;
                CyberInstance.devEnabled &&
                  this.game[t(289)][t(346)](
                    this[t(342)][t(312)].fps || "--",
                    this[t(342)][t(314)] - 50,
                    100,
                    t(284)
                  );
              },
            },
            {
              key: r(315),
              value: function () {
                var t = r;
                (this[t(301)] = !1), this[t(349)] && (this[t(349)] = null);
              },
            },
            {
              key: "layout",
              value: function () {
                var t = r,
                  e = window[t(290)] / window[t(322)];
                if (e > 1.775) {
                  var n = Math[t(310)](1920, Math[t(291)](640 * e));
                  this[t(342)][t(354)][t(341)](n, 640);
                } else if (e < 1.775) {
                  var i = Math[t(310)](1080, Math[t(291)](1136 / e));
                  this[t(342)][t(354)].setGameSize(1136, i);
                } else this[t(342)][t(354)][t(341)](1136, 640);
              },
            },
            {
              key: r(339),
              value: function () {
                var t = r,
                  e = this[t(342)][t(323)][t(305)](
                    0,
                    0,
                    CyberGlobalData.overlayTexture
                  );
                (e[t(337)] = !0),
                  (e.width = this.game[t(314)]),
                  (e[t(283)] = this[t(342)][t(283)]),
                  (e.alpha = 0.5),
                  this[t(342)].add[t(321)](e)
                    .to({ alpha: 0 }, 700, "Linear", !0)
                    .onComplete[t(323)](function () {
                      e[t(280)]();
                    });
              },
            },
            {
              key: r(307),
              value: function () {
                var t = r;
                if (!0 === CyberInstance[t(299)]) {
                  CyberInstance.setOutOfMoney(!1);
                  var e = !1;
                  jt.instance[t(287)]()
                    ? (e = !0)
                    : "vn" == CyberInstance[t(317)]
                    ? (this[t(286)]({ closeTimer: 1e4 }),
                      jt[t(335)].collectFreeChip())
                    : (e = !0),
                    e &&
                      pt[t(335)][t(281)] &&
                      pt[t(335)][t(340)] < 5 &&
                      (this[t(327)] = new wt(this.game));
                }
              },
            },
            {
              key: r(286),
              value: function (t) {
                var e = r;
                this[e(296)] && this[e(325)](),
                  (this[e(296)] = new I(this[e(342)], t)),
                  this[e(296)].open();
              },
            },
            {
              key: "closeLoadingPopup",
              value: function () {
                var t = r;
                this[t(296)] &&
                  (this.loadingPopup[t(330)](), (this[t(296)] = null));
              },
            },
            {
              key: r(303),
              value: function (t, e) {
                var n = r;
                if (!this.overlay) {
                  var i = this[n(342)][n(323)].image(
                    0,
                    0,
                    CyberGlobalData[n(350)]
                  );
                  (i[n(337)] = !0),
                    i[n(304)][n(351)][n(300)](t, e),
                    (i.width = this[n(342)][n(314)]),
                    (i[n(283)] = this[n(342)].height),
                    (i.alpha = 0.5),
                    (this.overlay = i);
                }
              },
            },
            {
              key: "closeOverlay",
              value: function () {
                var t = r;
                this.overlay && (this[t(349)][t(280)](), (this.overlay = null));
              },
            },
            {
              key: "controller",
              set: function (t) {
                this._controller = t;
              },
              get: function () {
                return this[r(319)];
              },
            },
            {
              key: r(301),
              set: function (t) {
                this[r(293)] = t;
              },
              get: function () {
                return this._screenReady;
              },
            },
          ]) && Nt(e[At(313)], n),
          i && Nt(e, i),
          a
        );
      })(Phaser[Rt(324)]),
      Wt = [
        "text",
        "19nzIAlU",
        "width",
        "click",
        "THONG_BAO",
        "NHAN_QUA",
        "NOT_ENOUGH_CHIP_TO_CONTINUE2",
        "createTransition",
        "prototype",
        "addContent",
        "close",
        "lang",
        "58047IStbjH",
        "homeScreen",
        "iterator",
        "5SARlwo",
        "background",
        "addTitle",
        "writable",
        "Super expression must either be null or a function",
        "playButtonSound",
        "symbol",
        "this hasn't been initialised - super() hasn't been called",
        "__proto__",
        "#9ecbe2",
        "bg_popup_medium_484x292",
        "setPrototypeOf",
        "key",
        "enumerable",
        "middle",
        "object",
        "OUT_OFF_MONEY_POSITION",
        "buttonText",
        "game",
        "add",
        "closeButton",
        "sprite",
        "anchor",
        "events",
        "onWatchClick",
        "1gMdNeN",
        "function",
        "make",
        "instance",
        "addText",
        "7xFaWFH",
        "addCloseButton",
        "rw_icon",
        "bold",
        "setTextBounds",
        "1018926NnsWju",
        "setTo",
        "35879HdMeld",
        "17588UXqPKF",
        "1111705CVWjoU",
        "inputEnabled",
        "363725MbhOtr",
        "defineProperty",
        "266298ztstvQ",
        "ADS_NOT_READY",
        "getPrototypeOf",
        "configurable",
        "Cannot call a class as a function",
        "toUpperCase",
        "addOverlay",
        "center",
        "addBackground",
        "addChild",
        "addOnce",
        "value",
        "addButton",
      ],
      Vt = function (t, e) {
        return Wt[(t -= 366)];
      };
    function Ut(t) {
      var e = Vt;
      return (Ut =
        "function" == typeof Symbol && typeof Symbol[e(391)] === e(398)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol[n(385)]
                ? n(398)
                : typeof t;
            })(t);
    }
    function zt(t, e) {
      for (var n = Vt, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(405)] = r[n(405)] || !1),
          (r[n(367)] = !0),
          n(375) in r && (r[n(395)] = !0),
          Object[n(434)](t, r[n(404)], r);
      }
    }
    function Ht(t, e) {
      var n = Vt;
      return !e || (Ut(e) !== n(407) && typeof e !== n(418))
        ? (function (t) {
            var e = Vt;
            if (void 0 === t) throw new ReferenceError(e(399));
            return t;
          })(t)
        : e;
    }
    function Xt(t) {
      var e = Vt;
      return (Xt = Object[e(403)]
        ? Object.getPrototypeOf
        : function (t) {
            var n = e;
            return t.__proto__ || Object[n(366)](t);
          })(t);
    }
    function Jt(t, e) {
      var n = Vt;
      return (Jt =
        Object[n(403)] ||
        function (t, e) {
          return (t[n(400)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Vt; ; )
        try {
          if (
            614582 ===
            parseInt(n(431)) +
              parseInt(n(435)) +
              -parseInt(n(429)) * parseInt(n(417)) +
              -parseInt(n(430)) * parseInt(n(378)) +
              parseInt(n(422)) * parseInt(n(389)) +
              parseInt(n(427)) +
              -parseInt(n(433)) * parseInt(n(392))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Wt);
    var qt = (function (t) {
        var e,
          n,
          i,
          r = Vt;
        function a(t, e) {
          var n,
            i = Vt;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(Vt(368));
            })(this, a),
            (n = Ht(this, Xt(a).call(this, t, e)))[i(370)](),
            n[i(372)](i(390), i(402)),
            n[i(394)](),
            n[i(386)](CyberInstance[i(388)][i(383)]),
            n[i(376)](e),
            n[i(423)](),
            n[i(384)](),
            n
          );
        }
        return (
          (function (t, e) {
            var n = Vt;
            if ("function" != typeof e && null !== e)
              throw new TypeError(n(396));
            (t[n(385)] = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Jt(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(376),
              value: function () {
                var t = r,
                  e = new it(
                    this[t(410)],
                    0,
                    0,
                    t(390),
                    "video_popop_watch_button"
                  );
                (e.x = this[t(393)][t(379)] / 2 - e[t(379)] / 2),
                  (e.y = this[t(393)].height - e.height - 30),
                  e[t(421)](CyberInstance[t(388)][t(382)]),
                  this[t(393)][t(373)](e),
                  e[t(409)][t(414)][t(428)](0, 0.5);
                var n = this[t(410)][t(419)][t(413)](55, 10, t(390), t(424));
                e.addChild(n),
                  (e[t(409)].x = n.x + n.width + 10),
                  e[t(380)](this[t(416)], this);
              },
            },
            {
              key: "onWatchClick",
              value: function () {
                var t = r;
                pt[t(420)].ready
                  ? pt[t(420)].show(pt[t(408)])
                  : new G(game, {
                      text: CyberInstance.lang[t(436)],
                      buttonText: CyberInstance.lang.CLOSE,
                      hideCloseButton: !0,
                    }),
                  this[t(387)]();
              },
            },
            {
              key: r(386),
              value: function (t) {
                var e = r,
                  n = this[e(410)][e(419)].text(52, 94, t, {
                    font: APP_FONT,
                    fontSize: 26,
                    fill: e(401),
                    fontWeight: 400,
                    wordWrap: !0,
                    wordWrapWidth: 598,
                    align: "center",
                    boundsAlignH: e(371),
                    boundsAlignV: e(406),
                  });
                n[e(426)](0, 0, 598, 210), this.background[e(373)](n);
              },
            },
            {
              key: "addTitle",
              value: function () {
                var t = r,
                  e = this[t(410)][t(411)][t(377)](
                    this[t(393)][t(379)] / 2,
                    15,
                    CyberInstance[t(388)][t(381)][t(369)](),
                    {
                      font: APP_FONT,
                      fontSize: 30,
                      fill: "#ffffff",
                      fontWeight: t(425),
                    }
                  );
                e.anchor.setTo(0.5, 0), this[t(393)][t(373)](e);
              },
            },
            {
              key: "addCloseButton",
              value: function () {
                var t = r,
                  e = this,
                  n = this[t(410)][t(419)][t(413)](
                    0,
                    0,
                    t(390),
                    "button_close"
                  );
                (n.x = this[t(393)][t(379)] - n[t(379)] / 2 - 10),
                  (n.y = -12),
                  (n[t(432)] = !0),
                  n[t(415)].onInputDown[t(374)](function () {
                    var n = t;
                    CyberInstance.sound[n(397)](), e.close();
                  }, this),
                  (this[t(412)] = n),
                  this[t(393)][t(373)](this.closeButton);
              },
            },
          ]) && zt(e[Vt(385)], n),
          i && zt(e, i),
          a
        );
      })(x),
      Kt = [
        "YOU_GOT_FREE_CHIP",
        "326wjDtsM",
        "sound",
        "anchor",
        "coin",
        "1344321PZvDWi",
        "length",
        "width",
        "sprite",
        "#9ecbe2",
        "sentCount",
        "key",
        "iterator",
        "background",
        "addBackground",
        "1007jiJrrC",
        "#ffffff",
        "make",
        "formatCoinWithCommas",
        "addTitle",
        "function",
        "object",
        "getPrototypeOf",
        "events",
        "game",
        "bg_popup_medium_484x292",
        "1511709eRnpsb",
        "click",
        "homeScreen",
        "1vhGMTI",
        "closeButton",
        "34457EcjMVf",
        "onInputDown",
        "button_close",
        "lang",
        "addCloseButton",
        "addButton",
        "text",
        "center",
        " Chip",
        "createTransition",
        "Super expression must either be null or a function",
        "5937aJPPMt",
        "prototype",
        "addChild",
        "addOverlay",
        "ADS_NOT_READY",
        "video_popop_watch_button",
        "instance",
        "create",
        "setPrototypeOf",
        "replace",
        "addContent",
        "Cannot call a class as a function",
        "91OfdVBE",
        "onWatchClick",
        "close",
        "THONG_BAO",
        "playButtonSound",
        "buttonText",
        "setTextBounds",
        "1541150yBwxNL",
        "configurable",
        "19exgGlJ",
        "height",
        "symbol",
        "236568sJfmFV",
        "enumerable",
        "1UADkZp",
      ],
      Yt = function (t, e) {
        return Kt[(t -= 357)];
      };
    function Zt(t) {
      var e = Yt;
      return (Zt =
        typeof Symbol === e(411) && typeof Symbol[e(403)] === e(387)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(411) &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? n(387)
                : typeof t;
            })(t);
    }
    function Qt(t, e) {
      for (var n = Yt, i = 0; i < e[n(397)]; i++) {
        var r = e[i];
        (r[n(389)] = r[n(389)] || !1),
          (r[n(384)] = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r[n(402)], r);
      }
    }
    function $t(t, e) {
      var n = Yt;
      return !e || (Zt(e) !== n(412) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function te(t) {
      var e = Yt;
      return (te = Object.setPrototypeOf
        ? Object[e(413)]
        : function (t) {
            var n = e;
            return t.__proto__ || Object[n(413)](t);
          })(t);
    }
    function ee(t, e) {
      return (ee =
        Object[Yt(372)] ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Yt; ; )
        try {
          if (
            923328 ===
            -parseInt(n(388)) +
              -parseInt(n(364)) * parseInt(n(376)) +
              parseInt(n(383)) +
              parseInt(n(406)) * -parseInt(n(392)) +
              -parseInt(n(396)) * -parseInt(n(420)) +
              -parseInt(n(385)) * -parseInt(n(422)) +
              parseInt(n(417)) * -parseInt(n(390))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Kt);
    var ne = (function (t) {
        var e,
          n,
          i,
          r = Yt;
        function a(t, e) {
          var n,
            i = Yt;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(Yt(375));
          })(this, a),
            (n = $t(this, te(a).call(this, t, e)))[i(367)](),
            n[i(405)](i(419), i(416)),
            n[i(410)]();
          var r = CyberInstance[i(425)][i(391)][i(373)](
            "%s",
            f[i(409)](e[i(395)]) + i(361)
          );
          return (
            n[i(374)](r[i(373)]("%s", 5 - e[i(401)])),
            n[i(358)](),
            n[i(357)](),
            n[i(362)](),
            n
          );
        }
        return (
          (function (t, e) {
            var n = Yt;
            if (typeof e !== n(411) && null !== e) throw new TypeError(n(363));
            (t[n(365)] = Object[n(371)](e && e[n(365)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && ee(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(358),
              value: function () {
                var t = r,
                  e = new it(this[t(415)], 0, 0, t(419), t(369));
                (e.x = this[t(404)][t(398)] / 2 - e[t(398)] / 2),
                  (e.y = this[t(404)][t(386)] - e[t(386)] - 30),
                  e.addText(CyberInstance[t(425)].NHAN_QUA),
                  (e[t(381)].y = e[t(386)] / 2),
                  e[t(418)](this[t(377)], this),
                  this[t(404)].addChild(e);
              },
            },
            {
              key: r(377),
              value: function () {
                var t = r;
                pt[t(370)].ready
                  ? new qt(game)
                  : new G(game, {
                      text: CyberInstance[t(425)][t(368)],
                      buttonText: CyberInstance.lang.CLOSE,
                      hideCloseButton: !0,
                    }),
                  this[t(378)]();
              },
            },
            {
              key: r(374),
              value: function (t) {
                var e = r,
                  n = this[e(415)][e(408)][e(359)](52, 94, t, {
                    font: APP_FONT,
                    fontSize: 26,
                    fill: e(400),
                    fontWeight: 400,
                    wordWrap: !0,
                    wordWrapWidth: 598,
                    align: e(360),
                    boundsAlignH: e(360),
                    boundsAlignV: "middle",
                  });
                n[e(382)](0, 0, 598, 210), this.background.addChild(n);
              },
            },
            {
              key: r(410),
              value: function () {
                var t = r,
                  e = this.game.add[t(359)](
                    this[t(404)][t(398)] / 2,
                    15,
                    CyberInstance[t(425)][t(379)].toUpperCase(),
                    {
                      font: APP_FONT,
                      fontSize: 30,
                      fill: t(407),
                      fontWeight: "bold",
                    }
                  );
                e[t(394)].setTo(0.5, 0), this[t(404)][t(366)](e);
              },
            },
            {
              key: "addCloseButton",
              value: function () {
                var t = r,
                  e = this,
                  n = this.game[t(408)][t(399)](0, 0, t(419), t(424));
                (n.x = this[t(404)][t(398)] - n[t(398)] / 2 - 10),
                  (n.y = -12),
                  (n.inputEnabled = !0),
                  n[t(414)][t(423)].addOnce(function () {
                    var n = t;
                    CyberInstance[n(393)][n(380)](), e[n(378)]();
                  }, this),
                  (this[t(421)] = n),
                  this.background[t(366)](this[t(421)]);
              },
            },
          ]) && Qt(e[Yt(365)], n),
          i && Qt(e, i),
          a
        );
      })(x),
      ie = [
        "isItMe",
        "updateSpinTimer",
        "luckywheels.spin",
        "configurable",
        "prototype",
        "replace",
        "getInt",
        "CLOSE",
        "OUT_OFF_MONEY_POSITION",
        "Homescreencontroller.handleUpdateChip",
        "type",
        "level",
        "ExtensionRequest",
        "openIAP",
        "freeChip",
        "controllerName",
        "coin",
        "ROOM_NOT_FOUND",
        "noplay1day",
        "handleScreenReady",
        "updateCoin",
        "spin",
        "joinGame",
        "onAdReady",
        "value",
        "bind",
        "97kLmOcL",
        "iapView",
        "canPlay",
        "lang",
        "closeLoadingPopup",
        "EXTENSION_RESPONSE",
        "handleOutOfMoney",
        "bottomMenuView",
        "cmd",
        "writable",
        "send",
        "formatCoinWithCommas",
        "getVariable",
        "instance",
        "ads.rewarded",
        "detail",
        "gift.code",
        "success",
        "putBool",
        "handleJoinGameError",
        "screen",
        "getLong",
        "YOU_GOT_CHIP",
        "onReward",
        "shortenLargeNumber",
        "HomeScreenController",
        "connector",
        "user",
        "gift.freeChip",
        "378421qWnWlW",
        "spinWatched",
        "joinPrivateRoom",
        "sentCount",
        "Cannot call a class as a function",
        "roomId",
        "onUserVariablesUpdate",
        "showNotEnoughMoneyToJoin",
        "11574eGLDrc",
        "profileView",
        "getCoin",
        "updateLevel",
        "getEntryPointData",
        "getBool",
        "380339ZhbGhj",
        "putLong",
        "collectTime",
        "USER_VARIABLES_UPDATE",
        "handleSpin",
        "refreshSpinTime",
        "bet",
        "params",
        "indexOf",
        "findGame",
        "containsKey",
        "openSpinPopup",
        "SFSEvent",
        "code",
        "giftcode",
        "enumerable",
        "onAdReward",
        "Homescreencontroller.addProfileCoin",
        "putUtfString",
        "errorCode",
        "addEventListener",
        "days",
        "ads.rewardedExtra",
        "length",
        "gift.outOfMoney",
        "sfs",
        "WATCH_VIDEO_SUCCESS",
        "handleUpdateChip",
        "add",
        "log",
        "onExtensionResponse",
        "SFSObject",
        "changedVars",
        "1AEsWVE",
        "slient",
        "initHeartBeat",
        "screenReady",
        "59747QQoCMv",
        "50838VtUnSg",
        "addProfileCoin",
        "60343hpLKml",
        "421894AZzpPD",
        "exp",
        "updateVideoBadge",
      ],
      re = function (t, e) {
        return ie[(t -= 371)];
      };
    function ae(t, e) {
      for (var n = re, i = 0; i < e[n(391)]; i++) {
        var r = e[i];
        (r[n(383)] = r.enumerable || !1),
          (r[n(415)] = !0),
          n(436) in r && (r[n(447)] = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    !(function (t, e) {
      for (var n = re; ; )
        try {
          if (
            531774 ===
            -parseInt(n(406)) -
              parseInt(n(409)) -
              parseInt(n(408)) +
              -parseInt(n(467)) * parseInt(n(401)) -
              parseInt(n(405)) +
              parseInt(n(481)) +
              parseInt(n(438)) * parseInt(n(475))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(ie);
    var oe = (function () {
        var t,
          e,
          n,
          i = re;
        function r(t) {
          var e = re;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(re(471));
          })(this, r),
            (this[e(427)] = e(463)),
            (this[e(458)] = t),
            (this.sfs = CyberInstance.socket),
            this[e(393)][e(388)](SFS2X[e(380)][e(443)], this[e(398)], this),
            this.sfs[e(388)](SFS2X[e(380)][e(371)], this[e(473)], this),
            pt[e(451)][e(461)].add(this.onAdReward, this),
            pt[e(451)].onReady[e(396)](this[e(435)], this),
            addEventListener(e(373), this[e(373)][e(437)](this)),
            addEventListener(e(407), this[e(407)][e(437)](this));
        }
        return (
          (t = r),
          (e = [
            {
              key: i(398),
              value: function (t) {
                var e = i;
                this.screenReady() &&
                  (t[e(446)] == e(414)
                    ? this[e(372)](t.params)
                    : t[e(446)] == e(434)
                    ? 0 == t.params.getBool(e(455)) && this[e(457)](t[e(375)])
                    : t[e(446)] == e(377)
                    ? (this.screen.closeLoadingPopup(),
                      1 === t.params[e(418)](e(387)) && this.screen[e(425)]())
                    : t.cmd == e(426)
                    ? this.handleUpdateChip(t.params)
                    : t.cmd == e(392) && this[e(444)](t.params));
              },
            },
            {
              key: i(372),
              value: function (t) {
                var e = i;
                t[e(378)]("ad")
                  ? ((CyberGlobalData.spinWatched = !1),
                    pt.instance.increaseSpinCounter())
                  : ((CyberGlobalData[e(483)] = 0),
                    CyberInstance[e(464)][e(403)]()),
                  v.dispatchEvent(e(373), CyberGlobalData[e(483)]),
                  this[e(458)][e(445)][e(433)]({
                    value: t[e(418)](e(436)),
                    coin: t[e(459)](e(428)),
                    days: t.getInt(e(389)),
                  });
              },
            },
            {
              key: i(457),
              value: function (t) {
                var e = i;
                this.screen.closeLoadingPopup();
                var n = t.getInt(e(387));
                if (t[e(378)](e(374)))
                  0 == n
                    ? G[e(474)](t[e(459)]("bet"))
                    : 2 == n &&
                      new G(game, {
                        text: CyberInstance[e(441)].ROOM_FULL,
                        buttonText: CyberInstance.lang[e(419)],
                      });
                else {
                  var r = !!t[e(378)]("slient") && t[e(480)](e(402));
                  15 == n &&
                    !r &&
                    new G(game, {
                      text: CyberInstance.lang[e(429)],
                      buttonText: CyberInstance.lang[e(419)],
                    });
                }
              },
            },
            {
              key: i(473),
              value: function (t) {
                var e = i;
                this.screenReady() &&
                  t.user[e(412)] &&
                  (-1 != t[e(400)][e(376)]("exp") &&
                    this[e(458)][e(476)].updateProgressBar(
                      t[e(465)][e(450)](e(410))[e(436)],
                      t.user[e(450)]("level").value
                    ),
                  -1 != t.changedVars.indexOf("level") &&
                    this[e(458)][e(476)][e(478)](
                      t.user[e(450)](e(423))[e(436)]
                    ),
                  -1 != t[e(400)][e(376)](e(428)) &&
                    this.screen[e(439)][e(432)](
                      t.user[e(450)](e(428))[e(436)]
                    ));
              },
            },
            {
              key: i(373),
              value: function (t) {
                var e = i;
                this[e(404)]() &&
                  (t[e(453)] && t[e(453)].value
                    ? this[e(458)][e(445)][e(413)](t.detail.value)
                    : this.screen[e(445)].updateSpinTimer(0));
              },
            },
            {
              key: i(407),
              value: function (t) {
                var e = i;
                if (this.screenReady() && t[e(453)] && t.detail[e(436)])
                  try {
                    this[e(458)][e(439)][e(432)](
                      jt.instance[e(477)]() + t.detail[e(436)]
                    ),
                      new G(game, {
                        text: CyberInstance.lang[e(460)][e(417)](
                          "%s",
                          f.shortenLargeNumber(t[e(453)][e(436)])
                        ),
                        buttonText: CyberInstance[e(441)].CLOSE,
                        hideCloseButton: !0,
                      });
                  } catch (t) {
                    console[e(397)](e(385), t);
                  }
              },
            },
            {
              key: i(431),
              value: function () {
                var t = i;
                if (!this.entryPointDataProcessed) {
                  var e = FBInstant[t(479)]();
                  if (e)
                    if (e.friendMode && e[t(472)] && e[t(374)]) {
                      var n = parseInt(e[t(374)]),
                        r = parseInt(e[t(472)]);
                      jt[t(451)][t(440)](n) && jt[t(451)][t(469)](r, !0);
                    } else if (e.type === t(430)) {
                      var a = new SFS2X[t(399)]();
                      e[t(428)]
                        ? a[t(482)]("coin", parseInt(e[t(428)]))
                        : a[t(482)](t(428), 1e6),
                        this[t(393)][t(448)](
                          new SFS2X.ExtensionRequest(t(466), a)
                        );
                    } else if (e.giftcode)
                      try {
                        var o = e[t(382)] + "";
                        o.length >= 8 &&
                          ((a = new SFS2X[t(399)]())[t(386)](t(381), o),
                          a[t(456)]("isEntryPointData", !0),
                          this[t(393)][t(448)](
                            new SFS2X.ExtensionRequest(t(454), a)
                          ));
                      } catch (t) {}
                  this.entryPointDataProcessed = !0;
                }
              },
            },
            {
              key: i(395),
              value: function (t) {
                var e = i;
                if (t[e(378)](e(428)))
                  try {
                    this[e(458)][e(442)](),
                      this[e(458)].iapView[e(432)](t[e(459)]("total")),
                      new G(game, {
                        text: CyberInstance[e(441)].YOU_GOT_CHIP.replace(
                          "%s",
                          f[e(462)](t[e(459)](e(428)))
                        ),
                        buttonText: CyberInstance[e(441)].CLOSE,
                        hideCloseButton: !0,
                      });
                  } catch (t) {
                    console[e(397)](e(421), t);
                  }
                else t[e(378)](e(455)) && this[e(458)][e(442)]();
              },
            },
            {
              key: i(444),
              value: function (t) {
                var e = i;
                this[e(458)].closeLoadingPopup(),
                  t[e(378)](e(428)) && t[e(378)](e(470))
                    ? new ne(game, {
                        coin: t[e(418)](e(428)),
                        sentCount: t[e(418)]("sentCount"),
                      })
                    : pt[e(451)].ready &&
                      pt[e(451)].extraCounter < 5 &&
                      (this.screen.notEnoughMoneyPopup = new wt(game));
              },
            },
            {
              key: i(384),
              value: function (t) {
                var e = i;
                t[e(428)]
                  ? (this[e(393)][e(448)](new SFS2X[e(424)](e(452))),
                    new G(game, {
                      text: CyberInstance[e(441)][e(394)].replace(
                        "%s",
                        f[e(449)](t[e(428)])
                      ),
                      buttonText: CyberInstance[e(441)].CLOSE,
                      hideCloseButton: !0,
                    }))
                  : t[e(422)] == pt.SPIN_POSITION
                  ? ((CyberGlobalData[e(468)] = !0),
                    this[e(404)]() && this[e(458)][e(445)][e(379)]())
                  : t[e(422)] == pt[e(420)] &&
                    (this[e(393)].send(new SFS2X[e(424)](e(390))),
                    new G(game, {
                      text: CyberInstance[e(441)][e(394)].replace(
                        "%s",
                        f[e(449)](1e5)
                      ),
                      buttonText: CyberInstance.lang[e(419)],
                      hideCloseButton: !0,
                    }));
              },
            },
            {
              key: i(435),
              value: function () {
                var t = i;
                this[t(404)]() && this[t(458)][t(445)][t(411)]();
              },
            },
            {
              key: "screenReady",
              value: function () {
                return this[i(458)].screenReady;
              },
            },
          ]) && ae(t[re(416)], e),
          n && ae(t, n),
          r
        );
      })(),
      se = [
        "loadTexture",
        "avatarSize",
        "writable",
        "21922PdHllR",
        "getExp",
        "level_bar_bg",
        "add",
        "getLevel",
        "9697CuqCdr",
        "Rectangle",
        "create",
        "image",
        "alphaMask",
        "prototype",
        "width",
        "enumerable",
        "height",
        "checkImageKey",
        "container",
        "length",
        "state",
        "114aKLiCe",
        "onFileComplete",
        "level_bar_inner",
        "defineProperty",
        "maskWidth",
        "hasLoaded",
        "no_avatar",
        "load",
        "text",
        "crop",
        "destroy",
        "progressBar",
        "Cannot call a class as a function",
        "getName",
        "bitmapData",
        "homeScreen",
        "game",
        "remove",
        "instance",
        "3929TaHCzZ",
        "5482JFuOhu",
        "icon_star",
        "setText",
        "64453WLZQAD",
        "26883VLUlen",
        "level",
        "make",
        "start",
        "value",
        "avatarKey",
        "updateLevel",
        "cache",
        "321918yGMrXo",
        "34xOWKom",
        "3vSCmCZ",
        "avatar",
        "maskHeight",
        "updateProgressBar",
        "configurable",
        "applyTexture",
      ],
      ue = function (t, e) {
        return se[(t -= 299)];
      };
    function ce(t, e) {
      for (var n = ue, i = 0; i < e[n(300)]; i++) {
        var r = e[i];
        (r[n(357)] = r.enumerable || !1),
          (r[n(340)] = !0),
          n(330) in r && (r[n(344)] = !0),
          Object[n(305)](t, r.key, r);
      }
    }
    !(function (t, e) {
      for (var n = ue; ; )
        try {
          if (
            180996 ===
            parseInt(n(322)) +
              -parseInt(n(326)) +
              parseInt(n(325)) +
              parseInt(n(335)) * parseInt(n(350)) +
              parseInt(n(334)) +
              -parseInt(n(336)) * parseInt(n(345)) +
              -parseInt(n(321)) * parseInt(n(302))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(se);
    var he = (function () {
        var t,
          e,
          n,
          i = ue;
        function r(t) {
          var e = ue;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(ue(314));
          })(this, r),
            (this[e(301)] = t),
            (this[e(318)] = t[e(318)]),
            (this[e(299)] = t[e(299)]),
            (this[e(343)] = 86);
          var n = this[e(299)][e(352)](15, 12, e(317), "profile_avatar_bg");
          (this[e(331)] = "avatar" + jt.instance.getGuserid()),
            this[e(318)][e(333)][e(359)](this[e(331)])
              ? ((this[e(337)] = this[e(318)][e(328)][e(353)](
                  n.x + 4,
                  n.y + 2,
                  this[e(331)]
                )),
                this[e(341)]())
              : ((this[e(337)] = this[e(318)][e(328)][e(353)](
                  n.x + 4,
                  n.y + 2,
                  e(317),
                  e(308)
                )),
                (this[e(337)].width = this[e(343)]),
                (this[e(337)][e(358)] = this.avatarSize),
                globalStartGameAsyncResolved &&
                  ((this.hasLoaded = !0),
                  this.game[e(309)][e(303)][e(348)](this[e(303)], this),
                  this[e(318)][e(309)][e(353)](
                    this[e(331)],
                    CyberInstance[e(337)]
                  ),
                  this[e(318)].load[e(329)]())),
            this.container[e(348)](this.avatar);
          var i = this.game.add[e(310)](
            this[e(337)].x + this[e(337)].width + 25,
            n.y + 2,
            FBInstant.player[e(315)](),
            { font: APP_FONT, fontSize: 21, fill: "#79ecff", fontWeight: 500 }
          );
          this.container.add(i);
          var a = this.container.create(i.x, 49, e(317), e(323)),
            o = this[e(318)][e(348)][e(310)](
              a.x + a[e(356)] + 5,
              a.y - 4,
              jt[e(320)][e(349)](),
              { font: APP_FONT, fontSize: 21, fill: "#79ecff", fontWeight: 500 }
            );
          this.container[e(348)](o), (this.level = o);
          var s = this[e(299)].create(
            o.x + o.canvas[e(356)] + 10,
            a.y + 3,
            e(317),
            e(347)
          );
          (this[e(313)] = this[e(299)].create(
            s.x + 1,
            s.y + 1,
            e(317),
            e(304)
          )),
            (this[e(306)] = this[e(313)][e(356)]),
            (this[e(338)] = this[e(313)][e(358)]),
            (this.endLayerWidth = s.x + s[e(356)]),
            this[e(339)](jt[e(320)][e(346)](), jt[e(320)][e(349)]());
        }
        return (
          (t = r),
          (e = [
            {
              key: i(339),
              value: function (t, e) {
                var n = i,
                  r = f.convertExpToPercent(t, e),
                  a = new Phaser[n(351)](
                    0,
                    0,
                    (this[n(306)] / 100) * r,
                    this.maskHeight
                  );
                this.progressBar[n(311)](a);
              },
            },
            {
              key: i(332),
              value: function (t) {
                var e = i;
                this[e(327)][e(324)](t);
              },
            },
            {
              key: "onFileComplete",
              value: function (t, e, n) {
                var r = i;
                n && e == this[r(331)] && this[r(341)]();
              },
            },
            {
              key: "applyTexture",
              value: function () {
                var t = i,
                  e = new Phaser[t(351)](0, 0, this[t(343)], this[t(343)]),
                  n = game[t(328)][t(353)](0, 0, t(317), t(308));
                (n[t(356)] = this.avatarSize), (n[t(358)] = this[t(343)]);
                var r = game[t(328)].bitmapData();
                r[t(309)](n), n.destroy();
                var a = this.game[t(328)][t(316)](
                  this.avatarSize,
                  this[t(343)]
                );
                a[t(354)](this[t(331)], r, e),
                  this[t(337)][t(342)](a),
                  (this[t(337)].width = this[t(343)]),
                  (this[t(337)][t(358)] = this[t(343)]);
              },
            },
            {
              key: i(312),
              value: function () {
                var t = i;
                !0 === this[t(307)] &&
                  this.game[t(309)].onFileComplete[t(319)](this[t(303)], this),
                  (this[t(337)] = null),
                  (this[t(313)] = null),
                  (this[t(327)] = null);
              },
            },
          ]) && ce(t[ue(355)], e),
          n && ce(t, n),
          r
        );
      })(),
      le = [
        "icon_chip5",
        "927198oolKQg",
        "products",
        "message",
        "inited",
        "writable",
        "$ 24.99",
        "send",
        "99_99",
        "addEventListener",
        "catch",
        "success",
        "dispatch",
        "Signal",
        "1809SikEAj",
        "chip",
        "value",
        "$ 4.99",
        "sfs",
        "EXTENSION_RESPONSE",
        "payments",
        "cmd",
        "getInt",
        "price",
        "addProducts",
        "coin",
        "onPurchaseProduct",
        "instance",
        "key",
        "fbinstant.verifyPayment",
        "hasOwnProperty",
        "length",
        "369OYXbHs",
        "24_99",
        "$ 1.99",
        "1nSImYG",
        "initialize",
        "containsKey",
        "purchaseAsync",
        "_instance",
        "142567mXwhdB",
        "1106600oyfndC",
        "purchase",
        "2PhvLGS",
        "params",
        "view",
        "icon_chip1",
        "308438lZrSYW",
        "_products",
        "_inited",
        "isConsumed",
        "$ 49.99",
        "defineProperty",
        "_view",
        "$ 0.99",
        "errorCode",
        "$ 99.99",
        "0_99",
        "icon_chip3",
        "ExtensionRequest",
        "enumerable",
        "prototype",
        "configurable",
        "103626lewSKQ",
        "consumePurchaseAsync",
        "getCatalogAsync",
        "getUtfString",
        "1662391rXNSdk",
        "Cyber",
        "getBool",
        "icon_chip2",
        "code",
        "icon_chip6",
        "verifyPayment",
        "4_99",
        "productID",
        "signedRequest",
        "Tính năng này không hỗ trợ trên thiết bị của bạn!",
        "$ 9.99",
        "then",
        "isConnected",
        "1_99",
      ],
      fe = function (t, e) {
        return le[(t -= 457)];
      },
      pe = fe;
    function de(t, e) {
      for (var n = fe, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(510)] = r[n(510)] || !1),
          (r[n(512)] = !0),
          n(466) in r && (r[n(537)] = !0),
          Object[n(502)](t, r[n(478)], r);
      }
    }
    !(function (t, e) {
      for (var n = fe; ; )
        try {
          if (
            596337 ===
            -parseInt(n(513)) +
              parseInt(n(493)) * -parseInt(n(497)) +
              parseInt(n(490)) +
              parseInt(n(491)) +
              -parseInt(n(533)) +
              parseInt(n(482)) * -parseInt(n(464)) +
              -parseInt(n(485)) * -parseInt(n(517))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(le);
    var ye = {
        "0_99": {
          chip: 15e5,
          price: pe(504),
          icon: pe(496),
          productID: pe(507),
        },
        "1_99": {
          chip: 45e5,
          price: pe(484),
          icon: pe(520),
          productID: pe(531),
        },
        "2_99": {
          chip: 69e5,
          price: "$ 2.99",
          icon: pe(508),
          productID: "2_99",
        },
        "4_99": {
          chip: 12e6,
          price: pe(467),
          icon: "icon_chip4",
          productID: pe(524),
        },
        "9_99": {
          chip: 25e6,
          price: pe(528),
          icon: pe(532),
          productID: "9_99",
        },
        "24_99": {
          chip: 65e6,
          price: pe(538),
          icon: pe(522),
          productID: pe(483),
        },
        "49_99": {
          chip: 14e7,
          price: pe(501),
          icon: "icon_chip6",
          productID: "49_99",
        },
        "99_99": {
          chip: 3e8,
          price: pe(506),
          icon: pe(522),
          productID: pe(458),
        },
      },
      ve = (function () {
        var t,
          e,
          n,
          i = pe;
        function r() {
          var t = fe;
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, r),
            (this.inited = !1),
            (this[t(534)] = null),
            (this.onPurchaseProduct = new Phaser[t(463)]());
        }
        return (
          (t = r),
          (e = [
            {
              key: i(486),
              value: function (t) {
                var e = i,
                  n = this;
                !this.inited &&
                  ((this[e(536)] = !0),
                  (this[e(468)] = t),
                  this[e(468)][e(459)](
                    SFS2X.SFSEvent[e(469)],
                    this.onExtensionResponse,
                    this
                  ),
                  FBInstant.payments[e(515)]()[e(529)](function (t) {
                    var i = e;
                    if (t[i(481)] > 0)
                      for (var r = 0; r < t[i(481)]; r++) {
                        var a = t[r][i(525)];
                        n[i(534)][i(480)](a) &&
                          (n[i(534)][a][i(473)] = t[r][i(473)]);
                      }
                  }));
              },
            },
            {
              key: "onExtensionResponse",
              value: function (t) {
                var e = i;
                if (t[e(471)] == e(479)) {
                  var n = t[e(494)][e(519)](e(461));
                  n
                    ? this[e(476)][e(462)]({ coin: t[e(494)][e(472)](e(475)) })
                    : this[e(476)][e(462)]({
                        error: !0,
                        errorMsg: t[e(494)][e(516)]("errorMsg"),
                      }),
                    (n ||
                      (t[e(494)][e(487)](e(505)) &&
                        6 == t[e(494)][e(472)](e(505)))) &&
                      FBInstant[e(470)][e(514)](
                        t[e(494)][e(516)]("purchaseToken")
                      );
                }
              },
            },
            {
              key: i(492),
              value: function (t, e) {
                var n = i;
                this[n(536)]
                  ? FBInstant[n(470)]
                      [n(488)]({ productID: t, developerPayload: e || n(518) })
                      [n(529)](function (t) {
                        r[n(477)].verifyPayment(t);
                      })
                      [n(460)](function (t) {
                        var e = n;
                        r[e(477)][e(476)].dispatch({
                          error: !0,
                          errorMsg: t.message,
                        });
                      })
                  : this[n(476)][n(462)]({ error: !0, errorMsg: n(527) });
              },
            },
            {
              key: "restore",
              value: function (t) {
                var e = i;
                FBInstant[e(470)]
                  .getPurchasesAsync()
                  [e(529)](function (n) {
                    var i = e;
                    if (n && n[i(481)])
                      for (var a in n) {
                        var o = n[a];
                        if (o[i(525)] == t && 0 == o[i(500)]) {
                          r[i(477)][i(523)](o);
                          break;
                        }
                      }
                  })
                  [e(460)](function (t) {
                    var n = e;
                    r.instance[n(476)][n(462)]({
                      error: !0,
                      errorMsg: t[n(535)] + " " + t[n(521)],
                    });
                  });
              },
            },
            {
              key: i(523),
              value: function (t) {
                var e = i;
                if (this.sfs[e(530)]) {
                  var n = new SFS2X.SFSObject();
                  n.putUtfString("signedRequest", t[e(526)]),
                    this[e(468)][e(457)](
                      new SFS2X[e(509)]("fbinstant.verifyPayment", n)
                    );
                }
              },
            },
            {
              key: i(474),
              value: function (t) {
                var e = i;
                if (null == this[e(534)])
                  if (((this[e(534)] = {}), t))
                    for (var n = Object.keys(t), r = 0; r < n[e(481)]; r++) {
                      var a = n[r];
                      (this[e(534)][a] = ye[a]),
                        (this[e(534)][a][e(465)] = t[a]);
                    }
                  else this[e(534)] = ye;
              },
            },
            {
              key: "products",
              set: function (t) {
                this[i(498)] = t;
              },
              get: function () {
                return this[i(498)];
              },
            },
            {
              key: i(536),
              set: function (t) {
                this[i(499)] = t;
              },
              get: function () {
                return this[i(499)];
              },
            },
            {
              key: i(495),
              set: function (t) {
                this[i(503)] = t;
              },
              get: function () {
                return this[i(503)];
              },
            },
          ]),
          (n = [
            {
              key: i(477),
              get: function () {
                var t = i;
                return r[t(489)] || (r[t(489)] = new r()), r[t(489)];
              },
            },
          ]),
          e && de(t[fe(511)], e),
          n && de(t, n),
          r
        );
      })(),
      be = [
        "leftDistance",
        "columnNumber",
        "187485RrtfAd",
        "enumerable",
        "prototype",
        "1EbeOSl",
        "configurable",
        "51lrmsNx",
        "length",
        "iterator",
        "floor",
        "this hasn't been initialised - super() hasn't been called",
        "29936osqYNL",
        "object",
        "Super expression must either be null or a function",
        "Cannot call a class as a function",
        "Sprite",
        "columnWidth",
        "setPrototypeOf",
        "defineProperty",
        "height",
        "4212Dnacka",
        "width",
        "key",
        "161965zXvkbt",
        "__proto__",
        "147755MHDgzV",
        "call",
        "constructor",
        "create",
        "setViewList",
        "229839mFiKtb",
        "getPrototypeOf",
        "writable",
        "function",
        "358429GEQgXU",
        "symbol",
        "1rIHMuo",
        "viewWidth",
        "viewHeight",
      ],
      ge = function (t, e) {
        return be[(t -= 290)];
      },
      me = ge;
    function Ie(t) {
      var e = ge;
      return (Ie =
        typeof Symbol === e(308) && typeof Symbol[e(323)] === e(310)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(308) &&
                t[n(302)] === Symbol &&
                t !== Symbol.prototype
                ? n(310)
                : typeof t;
            })(t);
    }
    function we(t, e) {
      for (var n = ge, i = 0; i < e[n(322)]; i++) {
        var r = e[i];
        (r.enumerable = r[n(317)] || !1),
          (r[n(320)] = !0),
          "value" in r && (r[n(307)] = !0),
          Object[n(293)](t, r[n(297)], r);
      }
    }
    function Se(t, e) {
      var n = ge;
      return !e || (Ie(e) !== n(327) && typeof e !== n(308))
        ? (function (t) {
            var e = ge;
            if (void 0 === t) throw new ReferenceError(e(325));
            return t;
          })(t)
        : e;
    }
    function ke(t) {
      var e = ge;
      return (ke = Object.setPrototypeOf
        ? Object[e(306)]
        : function (t) {
            var n = e;
            return t[n(299)] || Object[n(306)](t);
          })(t);
    }
    function Ce(t, e) {
      var n = ge;
      return (Ce =
        Object[n(292)] ||
        function (t, e) {
          return (t[n(299)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = ge; ; )
        try {
          if (
            140191 ===
            -parseInt(n(300)) +
              -parseInt(n(305)) * parseInt(n(319)) +
              parseInt(n(298)) +
              -parseInt(n(295)) * -parseInt(n(321)) +
              -parseInt(n(326)) +
              -parseInt(n(316)) +
              -parseInt(n(311)) * -parseInt(n(309))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(be);
    var Oe = (function (t) {
        var e,
          n,
          i,
          r = ge;
        function a(t, e, n, i, r) {
          var o = ge;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(ge(329));
            })(this, a),
            Se(this, ke(a)[o(301)](this, t, e, n, i, r))
          );
        }
        return (
          (function (t, e) {
            var n = ge;
            if (typeof e !== n(308) && null !== e) throw new TypeError(n(328));
            (t[n(318)] = Object[n(303)](e && e[n(318)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Ce(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(304),
              value: function (t) {
                for (var e = r, n = 0; n < t[e(322)]; n++) {
                  n % this[e(315)] == 0
                    ? (t[n].x = this[e(314)])
                    : this[e(291)]
                    ? (t[n].x =
                        t[n - 1].x + this[e(291)] + this.distanceBetweenColumns)
                    : (t[n].x =
                        t[n - 1].x +
                        t[n - 1][e(296)] +
                        this.distanceBetweenColumns);
                  var i = Math[e(324)](n / this[e(315)]);
                  (t[n].y =
                    0 === i
                      ? 0
                      : t[n - this[e(315)]].y +
                        t[n - this.columnNumber][e(294)] +
                        this.distanceBetweenRows),
                    this.addChild(t[n]);
                }
              },
            },
            {
              key: r(294),
              get: function () {
                return this[r(313)];
              },
            },
            {
              key: "width",
              get: function () {
                return this[r(312)];
              },
            },
          ]) && we(e[ge(318)], n),
          i && we(e, i),
          a
        );
      })(Phaser[me(290)]),
      Pe = [
        "137551GUpBjT",
        "192901EMFTIs",
        "2OvSdNm",
        "40124YcOYcr",
        "1arfyke",
        "7CvmnTS",
        "103488zYUJya",
        "191281tSuDNo",
        "425620cbDeGq",
        "79047QFimSF",
      ],
      Te = function (t, e) {
        return Pe[(t -= 363)];
      };
    !(function (t, e) {
      for (var n = Te; ; )
        try {
          if (
            229739 ===
            parseInt(n(366)) +
              parseInt(n(363)) * parseInt(n(371)) +
              parseInt(n(367)) +
              parseInt(n(369)) * -parseInt(n(372)) +
              -parseInt(n(365)) +
              parseInt(n(364)) +
              parseInt(n(368)) * -parseInt(n(370))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Pe);
    var _e = { AUTO_DETECT_THRESHOLD: 8 },
      xe = [
        "12IChaVm",
        "dispatch",
        "12ndGtsa",
        "nominal",
        "timeUp",
        "length",
        "events",
        "20367wRaJMl",
        "AUTO_DETECT_THRESHOLD",
        "21943GIwRSI",
        "PhaserListView: bounds.height <= 0",
        "15937BDniVt",
        "timeDown",
        "6dLLxpB",
        "children",
        "11031BPsJLJ",
        "height",
        "pivot",
        "82021cRehBI",
        "scale",
        "positionUp",
        "2605pnZCQr",
        "warn",
        "25737CUZAti",
        "worldPosition",
        "concat",
        "3NIgmhS",
        "43OxwRCx",
        "onInputUp",
        "PhaserListView: bounds.width <= 0",
        "slice",
        "anchor",
        "abs",
        "width",
        "9NBAive",
        "toUpperCase",
        "positionDown",
        "Rectangle",
      ],
      Ee = function (t, e) {
        return xe[(t -= 187)];
      };
    function je(t, e) {
      var n,
        i,
        r = Ee;
      return (
        t[
          r(221)[r(205)](
            ((n = e), (i = Ee), n.charAt(0)[i(215)]() + n[i(210)](1))
          )
        ] || t[e]
      );
    }
    function Be(t, e, n) {
      var i = Ee;
      if (
        !(
          n == i(208) &&
          ((r = t),
          (a = Ee),
          (o = Math.abs(r[a(216)].x - r[a(200)].x)),
          (s = Math[a(212)](r[a(216)].y - r[a(200)].y)),
          r[a(222)],
          r[a(192)],
          o > _e[a(188)] || s > _e[a(188)])
        )
      ) {
        var r,
          a,
          o,
          s,
          u = (function t(e, n) {
            var i = Ee,
              r =
                arguments[i(223)] > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            if (!e) return !1;
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              if (o) {
                if (n.call(r, o)) return o;
                var s = t(o[i(194)], n, r);
                if (s) return s;
              }
            }
            return !1;
          })(e, function (e) {
            var n = i,
              r = e[n(204)],
              a = e[n(211)],
              o = e[n(197)],
              s = e[n(213)],
              u = e.height,
              c = e[n(199)],
              h = r.x - (a ? a.x * s : 0) - o.x * c.x,
              l = r.y - (a ? a.y * u : 0) - o.y * c.y;
            return (
              e.inputEnabled &&
              new Phaser[n(217)](h, l, e[n(213)], e[n(196)]).contains(t.x, t.y)
            );
          });
        return (
          u &&
            u[i(224)] &&
            u.events[n] &&
            u[i(224)][n][i(219)] &&
            u[i(224)][n].dispatch(u, t, !0),
          u
        );
      }
    }
    !(function (t, e) {
      for (var n = Ee; ; )
        try {
          if (
            134138 ===
            parseInt(n(191)) +
              parseInt(n(214)) * -parseInt(n(189)) +
              parseInt(n(203)) * -parseInt(n(193)) +
              -parseInt(n(195)) * parseInt(n(218)) +
              -parseInt(n(201)) * -parseInt(n(207)) +
              -parseInt(n(206)) * -parseInt(n(198)) +
              -parseInt(n(187)) * -parseInt(n(220))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(xe);
    var Ae = [
        "kill",
        "value",
        "_setPosition",
        "forEach",
        "removeChild",
        "removeLast",
        "890366kpidDq",
        "dispose",
        "7779hHoDON",
        "add",
        "addMultiple",
        "onAdded",
        "7SolRlf",
        "tweenTo",
        "prototype",
        "push",
        "setTo",
        "graphics",
        "padding",
        "position",
        "beginFill",
        "defineProperty",
        "Cannot call a class as a function",
        "cull",
        "grp",
        "117383WMprJP",
        "dispatch",
        "getChildAt",
        "17075UcrGeB",
        "destroy",
        "group",
        "registerClickables",
        "drawRect",
        "Signal",
        "463509KhhBQT",
        "scroller",
        "set",
        "disableMask",
        "tweenToItem",
        "328135wwqWFP",
        "remove",
        "7WrqWPO",
        "options",
        "autocull",
        "moveToPosition",
        "mask",
        "getCurrentIndex",
        "revive",
        "writable",
        "indexOf",
        "bounds",
        "length",
        "alpha",
        "enumerable",
        "1043574JOrDpH",
        "items",
        "removeAll",
        "children",
        "getPositionByItemIndex",
        "game",
        "events",
        "height",
        "addChild",
        "1STCANV",
        "assign",
      ],
      Re = function (t, e) {
        return Ae[(t -= 141)];
      };
    function Fe(t, e) {
      for (var n = Re, i = 0; i < e[n(145)]; i++) {
        var r = e[i];
        (r[n(147)] = r[n(147)] || !1),
          (r.configurable = !0),
          n(160) in r && (r[n(142)] = !0),
          Object[n(180)](t, r.key, r);
      }
    }
    !(function (t, e) {
      for (var n = Re; ; )
        try {
          if (
            570477 ===
            -parseInt(n(187)) +
              parseInt(n(198)) +
              parseInt(n(200)) * parseInt(n(167)) +
              -parseInt(n(148)) +
              parseInt(n(184)) * parseInt(n(171)) +
              -parseInt(n(193)) +
              -parseInt(n(157)) * -parseInt(n(165))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Ae);
    var Ne = { direction: "y", autocull: !0, padding: 10 },
      De = (function () {
        var t,
          e,
          n,
          i = Re;
        function r(t, e, n) {
          var i = Re,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(Re(181));
          })(this, r),
            (this[i(153)] = t),
            (this.parent = e),
            (this[i(144)] = n),
            (this.o = this[i(201)] = Object[i(158)]({}, Ne, a)),
            (this[i(149)] = []),
            "y" == this.o.direction
              ? (this.p = { xy: "y", wh: i(155) })
              : (this.p = { xy: "x", wh: "width" }),
            (this.grp = this[i(153)][i(168)][i(189)](e)),
            this[i(183)][i(178)][i(195)](n.x, n.y),
            (this[i(154)] = { onAdded: new Phaser[i(192)]() }),
            (this[i(178)] = 0),
            a[i(196)] || (this[i(183)][i(204)] = this._addMask(n));
        }
        return (
          (t = r),
          (e = [
            {
              key: "add",
              value: function (t) {
                var e = Re;
                this.items[e(174)](t);
                var n = 0;
                if (this[e(183)][e(151)][e(145)] > 0) {
                  var i = this[e(183)][e(186)](this.grp.children[e(145)] - 1);
                  n = i[this.p.xy] + je(i, this.p.wh) + this.o.padding;
                }
                return (
                  (t[this.p.xy] = n),
                  this[e(183)][e(156)](t),
                  (this[e(145)] = n + je(t, this.p.wh)),
                  this[e(154)].onAdded[e(185)](
                    this[e(145)] - this.bounds[this.p.wh]
                  ),
                  t
                );
              },
            },
            {
              key: i(169),
              value: function () {
                for (
                  var t = i, e = arguments[t(145)], n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                n[t(162)](this[t(168)], this);
              },
            },
            {
              key: "remove",
              value: function (t) {
                var e = i,
                  n = 0,
                  r = 0;
                if (this[e(183)][e(151)].length > 0) {
                  var a = this[e(183)].getChildAt(
                    this[e(183)][e(151)].length - 1
                  );
                  (r = je(a, this.p.wh)),
                    (n = a[this.p.xy] + r + this.o[e(177)]);
                }
                t[e(188)](), this[e(183)][e(163)](t);
                var o = this[e(149)][e(143)](t);
                if (-1 != o)
                  return (
                    this[e(149)].splice(o, 1),
                    (this[e(145)] = n - r),
                    this[e(154)][e(170)][e(185)](
                      this.length - this[e(144)][this.p.wh]
                    ),
                    t
                  );
              },
            },
            {
              key: i(164),
              value: function () {
                var t = i;
                if (this[t(183)].children[t(145)] > 0) {
                  var e = this[t(183)].getChildAt(
                    this[t(183)][t(151)][t(145)] - 1
                  );
                  this.remove(e);
                }
              },
            },
            {
              key: i(188),
              value: function () {
                var t = i;
                null != this[t(154)] &&
                  (this[t(154)][t(170)][t(166)](), (this[t(154)] = null)),
                  null !== this[t(183)] &&
                    (this[t(183)].destroy(), (this[t(183)] = null)),
                  (this[t(153)] = null),
                  (this.parent = null),
                  (this[t(149)] = null);
              },
            },
            {
              key: i(150),
              value: function () {
                var t = i;
                if (null !== this[t(183)]) {
                  for (; this.grp.children[t(145)] > 0; )
                    this[t(199)](this[t(183)][t(151)][0]);
                  this[t(183)][t(150)]();
                }
                this[t(149)] = [];
              },
            },
            {
              key: i(182),
              value: function () {
                for (var t = i, e = [], n = 0; n < this[t(149)][t(145)]; n++) {
                  var r = this[t(149)][n];
                  r[this.p.xy] + je(r, this.p.wh) + this[t(183)][this.p.xy] <
                  this[t(144)][this.p.xy]
                    ? r.kill()
                    : r[this.p.xy] + this[t(183)][this.p.xy] >
                      this[t(144)][this.p.xy] + this[t(144)][this.p.wh]
                    ? r[t(159)]()
                    : (r[t(141)](), e[t(174)](r));
                }
                this.scroller[t(190)](e);
              },
            },
            {
              key: i(205),
              value: function () {
                for (var t = i, e = 0, n = 0; n < this[t(149)][t(145)]; n++) {
                  var r = this[t(149)][n];
                  if (
                    r[this.p.xy] + je(r, this.p.wh) + this.grp[this.p.xy] <
                    this[t(144)][this.p.xy]
                  );
                  else if (
                    !(
                      r[this.p.xy] + this[t(183)][this.p.xy] >
                      this[t(144)][this.p.xy] + this.bounds[this.p.wh]
                    )
                  ) {
                    e = n;
                    break;
                  }
                }
                return e;
              },
            },
            {
              key: i(152),
              value: function (t) {
                return -this[i(149)][t][this.p.xy];
              },
            },
            {
              key: "setPosition",
              value: function (t) {
                this.moveToPosition(t);
              },
            },
            {
              key: i(203),
              value: function (t) {
                var e = i;
                this.scroller[e(175)](t);
              },
            },
            {
              key: "moveToItem",
              value: function (t) {
                this[i(194)].setTo(this.getPositionByItemIndex(t));
              },
            },
            {
              key: "tweenToPosition",
              value: function (t) {
                var e = i,
                  n =
                    arguments[e(145)] > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1;
                this[e(194)][e(172)](n, t);
              },
            },
            {
              key: i(197),
              value: function (t) {
                var e = i,
                  n =
                    arguments[e(145)] > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1;
                this[e(194)][e(172)](n, this[e(152)](t));
              },
            },
            {
              key: i(161),
              value: function (t) {
                var e = i;
                (this.position = t),
                  (this[e(183)][this.p.xy] = this[e(144)][this.p.xy] + t),
                  this.o[e(202)] && this[e(182)]();
              },
            },
            {
              key: "_addMask",
              value: function (t) {
                var e = i,
                  n = this.game[e(168)][e(176)](0, 0, this.parent);
                return (
                  n[e(179)](16711680)[e(191)](t.x, t.y, t.width, t[e(155)]),
                  (n[e(146)] = 0),
                  n
                );
              },
            },
          ]) && Fe(t[Re(173)], e),
          n && Fe(t, n),
          r
        );
      })(),
      Le = [
        "56647mCnbGW",
        "4814416VTnwBQ",
        "869675sZhbft",
        "149182PTKnAD",
        "1016783RNjDsg",
        "round",
        "2oGFnEX",
        "117605Vbjoeq",
        "106073ZluRik",
        "1DaTRCp",
        "14BRJNNB",
        "5rMGvuw",
      ],
      Me = function (t, e) {
        return Le[(t -= 269)];
      };
    !(function (t, e) {
      for (var n = Me; ; )
        try {
          if (
            992840 ===
            -parseInt(n(269)) +
              -parseInt(n(273)) * -parseInt(n(270)) +
              -parseInt(n(277)) * parseInt(n(274)) +
              -parseInt(n(279)) * parseInt(n(276)) -
              parseInt(n(271)) +
              -parseInt(n(278)) * parseInt(n(275)) +
              parseInt(n(280))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Le);
    var Ge = {
        nearestMultiple: function (t, e) {
          return Math[Me(272)](t / e) * e;
        },
        scaleBetween: function (t, e, n) {
          return t + (e - t) * n;
        },
        percentageBetween2: function (t, e, n) {
          return (t - e) / (n - e);
        },
      },
      We = [
        "handleDown",
        "tweenTo",
        "160232uWXUbK",
        "handleUp",
        "percent",
        "handleUpdate",
        "step",
        "min",
        "forward",
        "move",
        "Quartic",
        "momentum",
        "setFromTo",
        "prototype",
        "scrollObject",
        "handleComplete",
        "nearestMultiple",
        "destroy",
        "stop",
        "maskLimits",
        "709IkWMev",
        "previousTotal",
        "_updateMinMax",
        "configurable",
        "target",
        "_addSnapping",
        "backward",
        "dispose",
        "timeDown",
        "from",
        "max",
        "current",
        "onUpdateCallback",
        "requested",
        "defineProperty",
        "options",
        "remove",
        "enabled",
        "reset",
        "onInputUp",
        "setTo",
        "assign",
        "value",
        "swipeEnabled",
        "tween",
        "_requestDiff",
        "17mHypfn",
        "flickTimeThreshold",
        "Signal",
        "Easing",
        "down",
        "Cannot call a class as a function",
        "onInputDown",
        "onComplete",
        "time",
        "isTweening",
        "Out",
        "2XORjLY",
        "minDuration",
        "enable",
        "infinite",
        "destroyed",
        "_addLimits",
        "inputEnabled",
        "swipeThreshold",
        "maxAcceleration",
        "1eStdeV",
        "onSwipe",
        "accelerationT",
        "deleteMoveCallback",
        "snapStep",
        "duration",
        "361833VBkKng",
        "_addMomentum",
        "disable",
        "_calculateDuration",
        "hasOwnProperty",
        "195ONnVWq",
        "743111QgYODm",
        "bouncing",
        "35331lcRQuw",
        "tweens",
        "clickObject",
        "direction",
        "dispatchValues",
        "writable",
        "diff",
        "onUpdate",
        "Point",
        "game",
        "init",
        "handleMove",
        "tweenToSnap",
        "isRunning",
        "Math",
        "pow",
        "old",
        "enumerable",
        "input",
        "length",
        "registerClickables",
        "timeUp",
        "dispatch",
        "overflow",
        "speedLimit",
        "events",
        "swipeTimeThreshold",
        "47095SfhnPj",
        "add",
        "abs",
        "cancel",
        "maxOffset",
        "tweenScroll",
        "addListeners",
        "pendingDelete",
        "clickables",
        "total",
        "removeListeners",
        "multiplier",
        "acc",
        "isDown",
        "_addSwiping",
        "pause",
        "acceleration",
        "start",
        "427045rhUhOG",
        "12jOLRoo",
      ],
      Ve = function (t, e) {
        return We[(t -= 128)];
      },
      Ue = Ve;
    function ze(t, e, n) {
      return (
        e in t
          ? Object[Ve(132)](t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function He(t, e) {
      for (var n = Ve, i = 0; i < e[n(197)]; i++) {
        var r = e[i];
        (r[n(195)] = r[n(195)] || !1),
          (r[n(248)] = !0),
          n(140) in r && (r[n(183)] = !0),
          Object[n(132)](t, r.key, r);
      }
    }
    !(function (t, e) {
      for (var n = Ve; ; )
        try {
          if (
            486322 ===
            parseInt(n(170)) +
              -parseInt(n(224)) * parseInt(n(205)) +
              -parseInt(n(245)) * -parseInt(n(175)) +
              parseInt(n(144)) * parseInt(n(178)) +
              -parseInt(n(227)) +
              -parseInt(n(155)) * -parseInt(n(223)) +
              parseInt(n(176)) * -parseInt(n(164))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(We);
    var Xe = new Phaser[Ue(186)](),
      Je = {
        from: 0,
        to: 200,
        direction: "y",
        momentum: !1,
        snapping: !1,
        bouncing: !1,
        deceleration: 0.5,
        overflow: 20,
        snapStep: 10,
        emitMoving: !1,
        duration: 2,
        speedLimit: 3,
        flickTimeThreshold: 100,
        offsetThreshold: 30,
        acceleration: 0.5,
        accelerationT: 250,
        maxAcceleration: 4,
        time: {},
        multiplier: 1,
        swipeEnabled: !1,
        swipeThreshold: 5,
        swipeTimeThreshold: 250,
        minDuration: 0.5,
        addListeners: !0,
      },
      qe = (function () {
        var t,
          e,
          n,
          i = Ue;
        function r(t, e) {
          var n = Ve,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            a =
              arguments[n(197)] > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(Ve(149));
          })(this, r),
            (this[n(187)] = t),
            (this[n(180)] = e),
            (this.maskLimits = i),
            (this.o = this.options = Object[n(139)]({}, Je, a)),
            this[n(247)](),
            (this[n(182)] = { step: 0, total: 0, percent: 0 }),
            this[n(211)](),
            (this.clickables = []),
            (this[n(218)] = !1),
            (this.isScrolling = !1),
            (this[n(239)] = {}),
            this[n(188)](),
            (this[n(210)] = this.game[n(206)]
              [n(142)](this[n(239)])
              .to({}, 0, Phaser[n(147)][n(235)][n(154)])),
            this.tweenScroll[n(130)](this[n(230)], this),
            this[n(210)][n(151)][n(206)](this[n(240)], this);
        }
        return (
          (t = r),
          (e = [
            {
              key: i(242),
              value: function () {
                var t = i;
                this.tweenScroll.stop(),
                  this[t(215)](),
                  this[t(180)][t(242)](),
                  (this[t(213)] = null),
                  (this[t(133)] = this.o = null),
                  (this[t(244)] = null),
                  (this.enabled = !1),
                  (this[t(187)] = null),
                  (this.dispatchValues = null),
                  (this[t(218)] = null),
                  (this[t(249)] = null),
                  (this[t(159)] = !0);
              },
            },
            {
              key: i(211),
              value: function () {
                var t = i;
                (this[t(203)] = {
                  onUpdate: new Phaser[t(146)](),
                  onInputUp: new Phaser[t(146)](),
                  onInputDown: new Phaser.Signal(),
                  onInputMove: new Phaser[t(146)](),
                  onComplete: new Phaser.Signal(),
                  onSwipe: new Phaser.Signal(),
                }),
                  this.o.addListeners &&
                    ((this[t(180)][t(161)] = !0),
                    this[t(180)][t(203)].onInputDown[t(206)](
                      this[t(225)],
                      this
                    ),
                    this[t(180)].events[t(137)][t(206)](this[t(228)], this));
              },
            },
            {
              key: i(215),
              value: function () {
                var t = i;
                for (var e in (this.o.addListeners &&
                  (this[t(180)][t(203)][t(150)][t(134)](this[t(225)], this),
                  this[t(180)][t(203)][t(137)][t(134)](this.handleUp, this)),
                this.events))
                  this[t(203)][t(174)](e) && this[t(203)][e][t(252)]();
              },
            },
            {
              key: i(157),
              value: function () {
                this.enabled = !0;
              },
            },
            {
              key: i(172),
              value: function () {
                this.enabled = !1;
              },
            },
            {
              key: i(188),
              value: function () {
                var t = i;
                (this[t(239)][this.o.direction] = this.o[t(254)]),
                  (this[t(209)] =
                    this.maskLimits[this.o[t(181)]] * this.o[t(202)]),
                  this[t(157)]();
              },
            },
            {
              key: i(136),
              value: function () {
                var t = i;
                this.tweenScroll[t(220)](),
                  (this.o.multiplier = 1),
                  this[t(188)]();
              },
            },
            {
              key: i(237),
              value: function (t, e) {
                var n = i;
                (this.o[n(254)] = t), (this.o.to = e), this[n(247)]();
              },
            },
            {
              key: i(153),
              value: function () {
                var t = i;
                return this[t(210)][t(191)];
              },
            },
            {
              key: i(198),
              value: function (t) {
                this.clickables = t;
              },
            },
            {
              key: i(225),
              value: function (t, e) {
                var n = i;
                this[n(135)] &&
                  ((this.isDown = !0),
                  (this.target = this[n(131)] = this[n(239)][this.o[n(181)]]),
                  (this.o.time[n(148)] = e[n(253)]),
                  this.o[n(211)] &&
                    this[n(187)][n(196)].addMoveCallback(this[n(189)], this),
                  this[n(153)]() &&
                  this.o[n(152)][n(148)] - this.o[n(152)].up <
                    this.o.accelerationT
                    ? (this.o[n(216)] += this.o[n(221)])
                    : (this.o[n(216)] = 1),
                  this[n(210)].stop(),
                  (this[n(210)][n(212)] = !1),
                  Be(e, this[n(213)], n(150)),
                  this[n(203)].onInputDown[n(200)](t, e));
              },
            },
            {
              key: i(189),
              value: function (t, e, n) {
                var r = i;
                this[r(135)] &&
                  ((this.isScrolling = !0),
                  Xe.set(e, n),
                  (this[r(184)] = this[r(194)] - Xe[this.o[r(181)]]),
                  (this[r(184)] = this._requestDiff(
                    this[r(184)],
                    this[r(249)],
                    this[r(232)],
                    this[r(128)],
                    this.o[r(201)]
                  )),
                  (this[r(249)] -= this[r(184)]),
                  (this[r(194)] = Xe[this.o.direction]),
                  (this.o.time[r(234)] = this[r(187)][r(152)][r(152)]),
                  (this[r(217)] = Math[r(232)](
                    Math[r(207)](this.diff / 30),
                    this.o[r(163)]
                  )),
                  (this[r(239)][this.o[r(181)]] = this[r(249)]),
                  this[r(230)](),
                  this.o.emitMoving &&
                    this[r(203)].onInputMove[r(200)](t, e, n));
              },
            },
            {
              key: i(228),
              value: function (t, e) {
                var n = i;
                (this[n(218)] = !1),
                  this.o[n(211)] &&
                    this.game[n(196)][n(167)](this[n(189)], this),
                  (this.o[n(152)].up = e[n(199)]),
                  this.o[n(152)].up - this.o.time[n(148)] > this.o[n(166)] &&
                    (this.o[n(216)] = 1);
                var r = { duration: 0.5, target: this[n(249)] };
                this.o[n(177)] || (r[n(169)] = 0.01),
                  !this.o[n(158)] &&
                  this[n(239)][this.o.direction] > this[n(128)]
                    ? ((this[n(249)] = this[n(128)]),
                      this.tweenTo(r.duration, this.target))
                    : !this.o.infinite &&
                      this[n(239)][this.o[n(181)]] < this[n(232)]
                    ? ((this[n(249)] = this[n(232)]),
                      this.tweenTo(r.duration, this.target))
                    : (this._addMomentum(r),
                      this[n(219)](r, e),
                      this[n(250)](r),
                      this[n(160)](r),
                      this._calculateDuration(r),
                      this[n(226)](r[n(169)], r[n(249)])),
                  Be(e, this.clickables, n(137)),
                  this[n(203)][n(137)][n(200)](t, e, Be);
              },
            },
            {
              key: i(171),
              value: function (t) {
                var e = i;
                if (!this.o[e(236)]) return t.target;
                var n =
                  Math[e(193)](this.acc, 2) * this[e(244)][this.o[e(181)]];
                return (
                  (n = Math[e(232)](this[e(209)], n)),
                  (n =
                    this[e(184)] > 0
                      ? -this.o[e(216)] * n
                      : this.o[e(216)] * n),
                  this.o.time.up - this.o.time[e(234)] < this.o[e(145)] &&
                    0 !== n &&
                    Math[e(207)](n) > this.o.offsetThreshold &&
                    (t[e(249)] += n),
                  t
                );
              },
            },
            {
              key: i(219),
              value: function (t, e) {
                var n = i,
                  r = Math.abs(this.down - this[n(129)]);
                if (
                  this.o[n(141)] &&
                  this.o[n(152)].up - this.o[n(152)][n(148)] < this.o[n(204)] &&
                  r > this.o[n(162)]
                ) {
                  var a = e[this.o.direction] < this.down ? n(233) : n(251);
                  a == n(233)
                    ? (t[n(249)] -= this.o[n(168)] / 2)
                    : (t[n(249)] += this.o[n(168)] / 2),
                    this[n(203)][n(165)][n(200)](a);
                }
                return t;
              },
            },
            {
              key: i(250),
              value: function (t) {
                var e = i;
                return this.o.snapping
                  ? ((t[e(249)] = Ge[e(241)](t[e(249)], this.o[e(168)])), t)
                  : t;
              },
            },
            {
              key: i(160),
              value: function (t) {
                var e = i;
                return this.o.infinite
                  ? t
                  : ((t.target = Math[e(128)](t[e(249)], this[e(232)])),
                    (t[e(249)] = Math[e(232)](t[e(249)], this.max)),
                    t);
              },
            },
            {
              key: i(173),
              value: function (t) {
                var e = i,
                  n = Math[e(207)](t[e(249)] - this[e(239)][this.o.direction]);
                return (
                  (t.duration = (this.o[e(169)] * n) / this[e(209)]),
                  (t[e(169)] = Math.max(this.o[e(156)], t[e(169)])),
                  t
                );
              },
            },
            {
              key: i(143),
              value: function (t, e, n, r, a) {
                var o = i;
                return this.o[o(158)]
                  ? t
                  : (e > r
                      ? (t *= (r + a - e) / a)
                      : e < n && (t *= -(n - a - e) / a),
                    t);
              },
            },
            {
              key: i(190),
              value: function (t, e) {
                var n = i,
                  r = this.o[n(254)] - this.o[n(168)] * e;
                this[n(226)](t, r);
              },
            },
            {
              key: "tweenTo",
              value: function (t, e) {
                var n = i;
                if (0 === t) return this[n(138)](e);
                ze({}, this.o[n(181)], e),
                  e > this.max && (e = this[n(128)]),
                  e < this[n(232)] && (e = this[n(232)]),
                  this[n(210)][n(243)](),
                  this.game[n(179)][n(134)](this[n(210)]),
                  (this[n(210)] = this.game[n(206)]
                    [n(142)](this[n(239)])
                    .to(
                      ze({}, this.o[n(181)], e),
                      1e3 * t,
                      Phaser.Easing[n(235)][n(154)]
                    )),
                  this.tweenScroll[n(130)](this[n(230)], this),
                  this[n(210)][n(151)][n(206)](this[n(240)], this),
                  this[n(210)][n(222)]();
              },
            },
            {
              key: i(208),
              value: function () {
                this[i(218)] = !1;
              },
            },
            {
              key: i(138),
              value: function (t) {
                var e = i;
                t > this.max && (t = this[e(128)]),
                  t < this[e(232)] && (t = this[e(232)]),
                  (this[e(239)][this.o[e(181)]] = t),
                  this[e(210)][e(243)](),
                  this[e(230)](),
                  this[e(240)]();
              },
            },
            {
              key: "handleUpdate",
              value: function () {
                var t = i;
                if (this[t(135)]) {
                  this.o[t(158)]
                    ? (this.dispatchValues[t(214)] = Phaser[t(192)].wrap(
                        this[t(239)][this.o[t(181)]],
                        this.min,
                        this.max
                      ))
                    : (this[t(182)].total = this[t(239)][this.o[t(181)]]);
                  var e = this[t(182)].total - this[t(246)];
                  e < -this[t(197)] / 2
                    ? (e += this[t(197)])
                    : e > this[t(197)] / 2 && (e -= this.length),
                    (this[t(182)][t(231)] = e),
                    (this.dispatchValues[t(229)] = Ge.percentageBetween2(
                      this[t(182)].total,
                      this.o[t(254)],
                      this.o.to
                    )),
                    this[t(203)][t(185)][t(200)](this[t(182)]),
                    (this[t(246)] = this.dispatchValues.total);
                }
              },
            },
            {
              key: "handleComplete",
              value: function () {
                var t = i;
                this[t(135)] &&
                  ((this.isScrolling = !1),
                  (this.o[t(216)] = 1),
                  this[t(203)][t(151)][t(200)]());
              },
            },
            {
              key: i(247),
              value: function () {
                var t = i;
                (this[t(232)] = Math[t(232)](this.o[t(254)], this.o.to)),
                  (this.max = Math[t(128)](this.o.from, this.o.to)),
                  (this[t(197)] = Math.abs(this[t(128)] - this[t(232)])),
                  (this[t(246)] = this.o[t(254)]);
              },
            },
          ]) && He(t[Ve(238)], e),
          n && He(t, n),
          r
        );
      })(),
      Ke = [
        "Super expression must either be null or a function",
        "prototype",
        "2219368IoQxcQ",
        "463366OvAPpz",
        "create",
        "object",
        "symbol",
        "11sjWfqz",
        "value",
        "33662MDCQpA",
        "handleUp",
        "__proto__",
        "59765dJzpfJ",
        "iterator",
        "enumerable",
        "current",
        "undefined",
        "length",
        "get",
        "function",
        "call",
        "41ImmuIs",
        "key",
        "Cannot call a class as a function",
        "height",
        "this hasn't been initialised - super() hasn't been called",
        "writable",
        "842006yatLCB",
        "210991RTKCvy",
        "constructor",
        "handleDown",
        "getOwnPropertyDescriptor",
        "down",
        "getPrototypeOf",
        "1ZQeBZB",
        "old",
        "width",
        "1ipnVnl",
        "setPrototypeOf",
        "direction",
        "514371FKzTlU",
      ],
      Ye = function (t, e) {
        return Ke[(t -= 328)];
      };
    function Ze(t) {
      var e = Ye;
      return (Ze =
        "function" == typeof Symbol && typeof Symbol[e(337)] === e(330)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                "function" == typeof Symbol &&
                t[n(353)] === Symbol &&
                t !== Symbol.prototype
                ? n(330)
                : typeof t;
            })(t);
    }
    function Qe(t, e) {
      for (var n = Ye, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(338)] = r[n(338)] || !1),
          (r.configurable = !0),
          n(332) in r && (r[n(350)] = !0),
          Object.defineProperty(t, r[n(346)], r);
      }
    }
    function $e(t, e) {
      var n = Ye;
      return !e || (Ze(e) !== n(329) && typeof e !== n(343))
        ? (function (t) {
            var e = Ye;
            if (void 0 === t) throw new ReferenceError(e(349));
            return t;
          })(t)
        : e;
    }
    function tn(t, e, n) {
      var i = Ye;
      return (tn =
        typeof Reflect !== i(340) && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = i,
                a = (function (t, e) {
                  var n = Ye;
                  for (
                    ;
                    !Object[n(366)].hasOwnProperty[n(344)](t, e) &&
                    null !== (t = en(t));

                  );
                  return t;
                })(t, e);
              if (a) {
                var o = Object[r(355)](a, e);
                return o[r(342)] ? o[r(342)][r(344)](n) : o[r(332)];
              }
            })(t, e, n || t);
    }
    function en(t) {
      var e = Ye;
      return (en = Object[e(362)]
        ? Object.getPrototypeOf
        : function (t) {
            var n = e;
            return t[n(335)] || Object[n(357)](t);
          })(t);
    }
    function nn(t, e) {
      var n = Ye;
      return (nn =
        Object[n(362)] ||
        function (t, e) {
          return (t[n(335)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Ye; ; )
        try {
          if (
            820181 ===
            -parseInt(n(333)) * -parseInt(n(345)) +
              parseInt(n(351)) +
              parseInt(n(331)) * parseInt(n(336)) +
              parseInt(n(368)) * parseInt(n(361)) +
              -parseInt(n(364)) +
              parseInt(n(352)) * parseInt(n(358)) +
              -parseInt(n(367))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Ke);
    var rn = (function (t) {
        var e,
          n,
          i,
          r = Ye;
        function a(t, e) {
          var n = Ye,
            i =
              arguments[n(341)] > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(Ye(347));
            })(this, a),
            $e(
              this,
              en(a)[n(344)](this, t, e, { x: e[n(360)], y: e[n(348)] }, i)
            )
          );
        }
        return (
          (function (t, e) {
            var n = Ye;
            if ("function" != typeof e && null !== e)
              throw new TypeError(n(365));
            (t[n(366)] = Object[n(328)](e && e[n(366)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && nn(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(354),
              value: function (t, e) {
                var n = r;
                (this[n(359)] = this[n(356)] = e[this.o[n(363)]]),
                  tn(en(a[n(366)]), n(354), this)[n(344)](this, t, e);
              },
            },
            {
              key: r(334),
              value: function (t, e) {
                var n = r;
                (this[n(339)] = e[this.o[n(363)]]),
                  tn(en(a[n(366)]), n(334), this)[n(344)](this, t, e);
              },
            },
          ]) && Qe(e[Ye(366)], n),
          i && Qe(e, i),
          a
        );
      })(qe),
      an = [
        "_setPosition",
        "_addMask",
        "6073biSySB",
        "writable",
        "game",
        "8DrOWfy",
        "function",
        "557449xbwvNr",
        "getPrototypeOf",
        "77gnPZrs",
        "call",
        "677789Zhoiwf",
        "getOwnPropertyDescriptor",
        "onUpdate",
        "setPrototypeOf",
        "scroller",
        "min",
        "prototype",
        "2qEsfCX",
        "setFromTo",
        "Super expression must either be null or a function",
        "length",
        "2GzTtIK",
        "420811ujVOov",
        "108WHSdAx",
        "destroy",
        "338MyCVHz",
        "158921SWdBNk",
        "15149JAsSZf",
        "items",
        "constructor",
        "events",
        "get",
        "iterator",
        "reset",
        "value",
        "Cannot call a class as a function",
        "symbol",
        "assign",
        "add",
        "key",
        "searchForClicks",
        "__proto__",
        "enumerable",
        "11741hANPQD",
        "configurable",
        "2sIouhL",
        "object",
        "defineProperty",
        "options",
      ],
      on = function (t, e) {
        return an[(t -= 134)];
      };
    function sn(t) {
      var e = on;
      return (sn =
        typeof Symbol === e(146) && typeof Symbol[e(173)] === e(177)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(146) &&
                t[n(170)] === Symbol &&
                t !== Symbol[n(157)]
                ? n(177)
                : typeof t;
            })(t);
    }
    function un(t, e) {
      for (var n = on, i = 0; i < e[n(161)]; i++) {
        var r = e[i];
        (r[n(183)] = r[n(183)] || !1),
          (r[n(135)] = !0),
          n(175) in r && (r[n(143)] = !0),
          Object[n(138)](t, r[n(180)], r);
      }
    }
    function cn(t, e) {
      var n = on;
      return !e || (sn(e) !== n(137) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function hn(t, e, n) {
      var i = on;
      return (hn =
        "undefined" != typeof Reflect && Reflect[i(172)]
          ? Reflect[i(172)]
          : function (t, e, n) {
              var r = i,
                a = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = ln(t));

                  );
                  return t;
                })(t, e);
              if (a) {
                var o = Object[r(152)](a, e);
                return o[r(172)] ? o[r(172)][r(150)](n) : o[r(175)];
              }
            })(t, e, n || t);
    }
    function ln(t) {
      var e = on;
      return (ln = Object[e(154)]
        ? Object[e(148)]
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function fn(t, e) {
      var n = on;
      return (fn =
        Object[n(154)] ||
        function (t, e) {
          return (t[n(182)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = on; ; )
        try {
          if (
            844961 ===
            parseInt(n(163)) * -parseInt(n(136)) +
              parseInt(n(167)) * -parseInt(n(145)) +
              -parseInt(n(147)) * -parseInt(n(162)) +
              parseInt(n(149)) * parseInt(n(134)) +
              -parseInt(n(151)) * -parseInt(n(158)) +
              -parseInt(n(164)) * -parseInt(n(168)) +
              parseInt(n(166)) * -parseInt(n(142))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(an);
    var pn = {
        direction: "y",
        autocull: !0,
        momentum: !0,
        bouncing: !0,
        snapping: !1,
        overflow: 100,
        padding: 10,
        searchForClicks: !1,
      },
      dn = (function (t) {
        var e,
          n,
          i,
          r = on;
        function a(t, e, n) {
          var i,
            r,
            o,
            s = on,
            u =
              arguments[s(161)] > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(on(176));
            })(this, a),
            ((i = cn(
              this,
              ln(a).call(
                this,
                t,
                e,
                ((o = Ee),
                ((r = n).x = r.x ? r.x : 0),
                (r.y = r.y ? r.y : 0),
                r[o(213)] <= 0
                  ? console[o(202)](o(209))
                  : r[o(196)] <= 0 && console[o(202)](o(190)),
                r),
                Object[s(178)]({}, pn, u)
              )
            )).scroller = new rn(
              i[s(144)],
              i[s(141)](n),
              Object[s(178)]({ from: 0, to: 0 }, i[s(139)])
            )),
            i[s(155)][s(171)][s(153)][s(179)](function (t) {
              i[s(140)](t.total);
            }),
            i.events.onAdded[s(179)](function (t) {
              var e = s,
                n = Math[e(156)](-t, 0);
              i[e(155)][e(159)](0, n),
                i[e(139)][e(181)] && i[e(155)].registerClickables(i[e(169)]);
            }),
            i
          );
        }
        return (
          (function (t, e) {
            var n = on;
            if (typeof e !== n(146) && null !== e) throw new TypeError(n(160));
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && fn(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(165),
              value: function () {
                var t = r;
                null !== this[t(155)] &&
                  (this.scroller.destroy(), (this[t(155)] = null)),
                  hn(ln(a[t(157)]), t(165), this)[t(150)](this);
              },
            },
            {
              key: r(174),
              value: function () {
                var t = r;
                this[t(140)](0), this.scroller[t(174)]();
              },
            },
          ]) && un(e[on(157)], n),
          i && un(e, i),
          a
        );
      })(De),
      yn = [
        "prototype",
        "Rectangle",
        "addChild",
        "symbol",
        "height",
        "function",
        "distanceBetweenRows",
        "columnNumber",
        "68794cDYtAZ",
        "add",
        "viewList",
        "width",
        "configurable",
        "writable",
        "call",
        "list",
        "20567suYifs",
        "constructor",
        "value",
        "429094RIZUIu",
        "608476EijXWF",
        "359129CfhWnE",
        "distanceBetweenColumns",
        "rowNumber",
        "enumerable",
        "push",
        "game",
        "rowHeight",
        "Cannot call a class as a function",
        "defineProperty",
        "key",
        "columnWidth",
        "setPrototypeOf",
        "removeAll",
        "__proto__",
        "scroll",
        "Sprite",
        "206852icFyFc",
        "setViewList",
        "viewWidth",
        "758532qxXktr",
        "direction",
        "getPrototypeOf",
        "1oJRZdh",
        "create",
        "39kDVZEW",
        "length",
        "leftDistance",
        "viewHeight",
      ],
      vn = function (t, e) {
        return yn[(t -= 245)];
      },
      bn = vn;
    function gn(t) {
      var e = vn;
      return (gn =
        typeof Symbol === e(279) && typeof Symbol.iterator === e(277)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                "function" == typeof Symbol &&
                t[n(291)] === Symbol &&
                t !== Symbol[n(274)]
                ? n(277)
                : typeof t;
            })(t);
    }
    function mn(t, e) {
      for (var n = vn, i = 0; i < e[n(271)]; i++) {
        var r = e[i];
        (r.enumerable = r[n(249)] || !1),
          (r[n(286)] = !0),
          n(292) in r && (r[n(287)] = !0),
          Object[n(254)](t, r[n(255)], r);
      }
    }
    function In(t, e) {
      var n = vn;
      return !e || ("object" !== gn(e) && typeof e !== n(279))
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function wn(t) {
      var e = vn;
      return (wn = Object[e(257)]
        ? Object.getPrototypeOf
        : function (t) {
            var n = e;
            return t.__proto__ || Object[n(267)](t);
          })(t);
    }
    function Sn(t, e) {
      var n = vn;
      return (Sn =
        Object[n(257)] ||
        function (t, e) {
          return (t[n(259)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = vn; ; )
        try {
          if (
            439592 ===
            -parseInt(n(245)) -
              parseInt(n(246)) +
              parseInt(n(265)) +
              -parseInt(n(282)) * -parseInt(n(268)) +
              parseInt(n(270)) * parseInt(n(290)) +
              parseInt(n(262)) +
              -parseInt(n(293))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(yn);
    var kn = (function (t) {
        var e,
          n,
          i,
          r = vn;
        function a(t, e) {
          var n,
            i = vn,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            o =
              arguments[i(271)] > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            s =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : null,
            u =
              arguments[i(271)] > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : null;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(vn(253));
          })(this, a),
            (n = In(this, wn(a)[i(288)](this, e, r, o, s, u))),
            t &&
              ((n.x = t.x),
              (n.y = t.y),
              (n[i(281)] = t.column),
              (n[i(264)] = t[i(285)]),
              (n[i(273)] = t[i(278)]),
              (n.rowHeight = t[i(252)]),
              (n[i(256)] = t[i(256)]),
              (n[i(272)] = t[i(272)]),
              (n.direction = t.direction),
              (n.distanceBetweenColumns = t[i(247)]),
              (n.distanceBetweenRows = t[i(280)]));
          var c = new Phaser.Group(game),
            h = new Phaser[i(275)](0, 0, n[i(264)], n[i(273)]);
          return (
            "x" === n[i(266)]
              ? (n[i(260)] = new dn(n[i(251)], c, h, {
                  direction: n[i(266)],
                  searchForClicks: !0,
                  padding: n[i(247)],
                }))
              : (n[i(260)] = new dn(n.game, c, h, {
                  direction: n[i(266)],
                  searchForClicks: !0,
                  padding: n.distanceBetweenRows,
                })),
            n[i(276)](c),
            n
          );
        }
        return (
          (function (t, e) {
            var n = vn;
            if (typeof e !== n(279) && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t[n(274)] = Object[n(269)](e && e[n(274)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Sn(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(283),
              value: function (t) {
                this.scroll.add(t);
              },
            },
            {
              key: "removeAll",
              value: function () {
                var t = r;
                this.scroll[t(258)]();
              },
            },
            {
              key: r(284),
              set: function (t) {
                var e,
                  n = r;
                if ((this.removeAll(), this[n(289)]))
                  for (var i = 0; i < this[n(289)][n(271)]; i++)
                    this.list[i].destroy();
                for (this[n(289)] = t, i = 0; i < t[n(271)]; i++)
                  if (
                    (i % this.columnNumber == 0 && (e = []),
                    e[n(250)](t[i]),
                    e[n(271)] === this.columnNumber || i === t[n(271)] - 1)
                  ) {
                    var a = new Oe(this.game);
                    (a[n(281)] = this[n(281)]),
                      (a[n(248)] = 1),
                      (a[n(264)] = this.viewWidth),
                      1 === this.columnNumber &&
                        "x" === this[n(266)] &&
                        (a[n(264)] = this[n(256)]),
                      (a[n(256)] = this[n(256)]),
                      (a.viewHeight = this[n(252)]),
                      (a[n(272)] = this[n(272)]),
                      (a[n(247)] = this[n(247)]),
                      (a.distanceBetweenRows = this[n(280)]),
                      a[n(263)](e),
                      this.scroll[n(283)](a);
                  }
              },
            },
          ]) && mn(e[vn(274)], n),
          i && mn(e, i),
          a
        );
      })(Phaser[bn(261)]),
      Cn = [
        "events",
        "addItemToList",
        "call",
        "1xXhMPn",
        "listView",
        "closeLoadingPopup",
        "lang",
        "getPurchasesAsync",
        "1jeWyFZ",
        "addText",
        "button_green",
        "getPrototypeOf",
        "verifyPayment",
        "products",
        "width",
        "defineProperty",
        "writable",
        "function",
        "replace",
        "this hasn't been initialised - super() hasn't been called",
        "homeScreenBG2",
        "inputEnabled",
        "object",
        "1103035ufmcao",
        "anchor",
        "restore",
        "#ffffff",
        "addProducts",
        "homeScreen",
        "PAYMENT_SUCCESS",
        "productID",
        "onInputDown",
        "remove",
        "openLoadingPopup",
        "text_iap",
        "iterator",
        "onAdReward",
        "add",
        "1OxWCft",
        "back_button",
        "__proto__",
        "inited",
        "isConsumed",
        "popup_header_bg",
        "prototype",
        "createView",
        "close",
        "addOnce",
        "group",
        "CLOSE",
        "enumerable",
        "#ffed99",
        "7673ivNoAn",
        "push",
        "sound",
        "errorMsg",
        "chip",
        "onBuyClick",
        "isAssetReady",
        "144004ayRzpT",
        "price",
        "productList",
        "1111574UpWVCK",
        "icon",
        "Super expression must either be null or a function",
        "updateCoin",
        "key",
        "height",
        "symbol",
        "click",
        "560505OVSALU",
        "getDeveloperPayload",
        "809916cpKgbB",
        "setTo",
        "coin",
        "onPurchaseProduct",
        "cache",
        "payments",
        "create",
        "error",
        "game",
        "629704PRgDSR",
        "length",
        "formatCoinWithCommas",
        "text",
        "instance",
        "setPrototypeOf",
      ],
      On = function (t, e) {
        return Cn[(t -= 429)];
      };
    function Pn(t) {
      var e = On;
      return (Pn =
        typeof Symbol === e(444) && typeof Symbol[e(462)] === e(495)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol[n(471)]
                ? n(495)
                : typeof t;
            })(t);
    }
    function Tn(t, e) {
      for (var n = On, i = 0; i < e[n(509)]; i++) {
        var r = e[i];
        (r[n(477)] = r[n(477)] || !1),
          (r.configurable = !0),
          "value" in r && (r[n(443)] = !0),
          Object[n(442)](t, r[n(493)], r);
      }
    }
    function _n(t, e) {
      var n = On;
      return !e || (Pn(e) !== n(449) && typeof e !== n(444))
        ? (function (t) {
            var e = On;
            if (void 0 === t) throw new ReferenceError(e(446));
            return t;
          })(t)
        : e;
    }
    function xn(t) {
      var e = On;
      return (xn = Object[e(513)]
        ? Object[e(438)]
        : function (t) {
            var n = e;
            return t[n(467)] || Object[n(438)](t);
          })(t);
    }
    function En(t, e) {
      return (En =
        Object[On(513)] ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = On; ; )
        try {
          if (
            612925 ===
            -parseInt(n(486)) +
              parseInt(n(497)) +
              parseInt(n(499)) +
              -parseInt(n(479)) * -parseInt(n(465)) +
              parseInt(n(430)) * parseInt(n(489)) +
              -parseInt(n(450)) +
              -parseInt(n(435)) * parseInt(n(508))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Cn);
    var jn = (function (t) {
        var e,
          n,
          i,
          r = On;
        function a(t) {
          var e = On;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            _n(this, xn(a)[e(429)](this, t))
          );
        }
        return (
          (function (t, e) {
            var n = On;
            if ("function" != typeof e && null !== e)
              throw new TypeError(n(491));
            (t[n(471)] = Object[n(505)](e && e[n(471)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && En(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(485),
              value: function () {
                var t = r;
                return this[t(507)][t(503)].checkImageKey(t(447));
              },
            },
            {
              key: "onBuyClick",
              value: function (t) {
                var e = r;
                this[e(460)](),
                  ve.instance.purchase(
                    t.productID + "",
                    CyberInstance[e(498)]()
                  );
              },
            },
            {
              key: "onPurchaseProduct",
              value: function (t) {
                var e = r;
                if ((this.closeLoadingPopup(), t[e(506)]))
                  new G(game, {
                    text: t[e(482)],
                    buttonText: CyberInstance.lang.CLOSE,
                    hideCloseButton: !0,
                  });
                else {
                  var n = CyberInstance[e(433)][e(456)][e(445)](
                    "%s",
                    f.formatCoinWithCommas(t[e(501)])
                  );
                  new G(game, {
                    text: n,
                    buttonText: CyberInstance[e(433)][e(476)],
                    hideCloseButton: !0,
                  });
                }
              },
            },
            {
              key: "restore",
              value: function (t) {
                var e = r;
                this.openLoadingPopup(), ve[e(512)][e(439)](t);
              },
            },
            {
              key: r(472),
              value: function () {
                var t = r,
                  e = this,
                  n = this[t(505)](0, 0, t(447));
                (n[t(441)] = this[t(507)][t(441)]),
                  (n[t(494)] = this[t(507)][t(494)]),
                  (n[t(448)] = !0);
                var i = this.create(0, 0, "homeScreen", t(470));
                (i[t(441)] = this[t(507)].width),
                  this[t(505)](220, 10, t(455), t(461));
                var a = this[t(505)](50, 0, "homeScreen", t(466));
                (a.y = i[t(494)] / 2 - a[t(494)] / 2 - 5),
                  (a[t(448)] = !0),
                  a[t(514)][t(458)].addOnce(
                    CyberInstance[t(481)].playButtonSound,
                    CyberInstance.sound
                  ),
                  a.events[t(458)][t(474)](this[t(473)], this),
                  ve[t(512)].onPurchaseProduct.add(this[t(502)], this),
                  this[t(454)](ve[t(512)][t(440)]),
                  ve[t(512)][t(468)] &&
                    FBInstant[t(504)][t(434)]().then(function (n) {
                      var i = t;
                      if (n.length > 0)
                        for (var r = 0; r < n[i(509)]; r++)
                          if (0 == n[r][i(469)]) {
                            e[i(452)](n[r]);
                            break;
                          }
                    });
              },
            },
            {
              key: r(454),
              value: function (t) {
                var e = r;
                if (
                  ((this[e(431)] = new kn(
                    {
                      x: this[e(507)].width / 2 - 475,
                      y: 110,
                      column: 4,
                      width: 950,
                      height: this[e(507)][e(494)] - 140,
                      rowHeight: 232,
                      columnWidth: 200,
                      row: 1,
                      leftDistance: 0,
                      rightDistance: 0,
                      distanceBetweenColumns: 50,
                      distanceBetweenRows: 30,
                      direction: "y",
                    },
                    this[e(507)]
                  )),
                  this[e(464)](this[e(431)]),
                  (this[e(488)] = []),
                  ve[e(512)].inited)
                )
                  for (var n in t)
                    this[e(488)][e(480)](this.addItemToList(t[n]));
                this.listView.viewList = this[e(488)];
              },
            },
            {
              key: r(515),
              value: function (t) {
                var e = r,
                  n = this[e(507)].make[e(475)]();
                n.create(0, 0, "homeScreen", "iap_box"),
                  n[e(505)](100, 106, "homeScreen", t[e(490)])[e(451)].setTo(
                    0.5
                  );
                var i = this[e(507)].make[e(511)](
                  100,
                  12,
                  f[e(510)](t[e(483)]),
                  {
                    font: APP_FONT,
                    fontWeight: 700,
                    fontSize: 24,
                    fill: e(478),
                  }
                );
                i[e(451)][e(500)](0.5, 0), n.add(i);
                var a = new it(this.game, 0, 0, e(455), e(437));
                return (
                  a[e(436)](t[e(487)], {
                    font: APP_FONT,
                    fontWeight: 700,
                    fontSize: 22,
                    fill: e(453),
                  }),
                  (a.x = 100 - a.width / 2),
                  (a.y = 232 - a[e(494)] - 13),
                  (a[e(448)] = !0),
                  (a[e(457)] = t[e(457)]),
                  a[e(496)](this[e(484)], this),
                  n.add(a),
                  n
                );
              },
            },
            {
              key: r(473),
              value: function () {
                var t = r;
                ve[t(512)].onPurchaseProduct[t(459)](this[t(502)], this),
                  this[t(432)](),
                  this.destroy();
              },
            },
            { key: r(463), value: function () {} },
            { key: r(492), value: function () {} },
          ]) && Tn(e[On(471)], n),
          i && Tn(e, i),
          a
        );
      })(x),
      Bn = [
        "onAdReward",
        "addColorStop",
        "updateCoin",
        "formatCoinWithCommas",
        "getVariable",
        "139337VpzgiB",
        "instance",
        "coin",
        "socket",
        "2FgeLOT",
        "key",
        "59779NxHapb",
        "13811MhowIQ",
        "3347igTEyB",
        "game",
        "66MaxuoY",
        "writable",
        "defineProperty",
        "119433yCjETq",
        "homeScreen",
        "add",
        "prototype",
        "chip",
        "profileView",
        "mySelf",
        "length",
        "2959DYfYzb",
        "iap_bg",
        "text",
        "openIAPPopup",
        "click",
        "setTo",
        "icon_chip_large",
        "container",
        "154128RnLylq",
        "addChild",
        "#f4eed3",
        "context",
        "#ffed99",
        "buyButton",
        "create",
        "value",
        "1iUZbNI",
        "scale",
        "enumerable",
      ],
      An = function (t, e) {
        return Bn[(t -= 256)];
      };
    function Rn(t, e) {
      for (var n = An, i = 0; i < e[n(257)]; i++) {
        var r = e[i];
        (r[n(276)] = r[n(276)] || !1),
          (r.configurable = !0),
          n(273) in r && (r[n(293)] = !0),
          Object[n(294)](t, r[n(287)], r);
      }
    }
    !(function (t, e) {
      for (var n = An; ; )
        try {
          if (
            163220 ===
            -parseInt(n(289)) +
              parseInt(n(282)) +
              -parseInt(n(266)) +
              parseInt(n(290)) * -parseInt(n(274)) +
              -parseInt(n(258)) * -parseInt(n(292)) +
              parseInt(n(295)) +
              -parseInt(n(286)) * parseInt(n(288))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Bn);
    var Fn = (function () {
        var t,
          e,
          n,
          i = An;
        function r(t) {
          var e = An;
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, r),
            (this.screen = t),
            (this.container = t.container);
          var n = this.container[e(272)](
            t[e(300)].endLayerWidth + 50,
            10,
            e(296),
            e(264)
          );
          n[e(275)][e(263)](0.9),
            (this[e(271)] = new it(
              this.screen[e(291)],
              n.x + n.width + 15,
              0,
              e(296),
              e(259)
            )),
            (this[e(271)].y = n.y + n.height / 2 - this[e(271)].height / 2),
            this[e(265)][e(297)](this.buyButton),
            ve[e(283)].inited && this[e(271)][e(262)](this[e(261)], this),
            (this.chip = this.screen[e(291)].make[e(260)](20, 5, "", {
              font: APP_FONT,
              fontSize: 24,
              fill: e(270),
              fontWeight: 500,
            })),
            this.buyButton[e(267)](this[e(299)]);
          var i = this[e(299)][e(269)].createLinearGradient(
            0,
            0,
            0,
            this[e(299)].height
          );
          i.addColorStop(0, e(268)),
            i[e(278)](1, e(270)),
            (this[e(299)].fill = i),
            this[e(279)](
              f[e(280)](CyberInstance[e(285)][e(256)][e(281)](e(284))[e(273)])
            );
        }
        return (
          (t = r),
          (e = [
            {
              key: i(261),
              value: function () {
                var t = i;
                new jn(this.screen[t(291)]);
              },
            },
            {
              key: i(279),
              value: function (t) {
                var e = i;
                this[e(299)].setText(f[e(280)](t));
              },
            },
            { key: i(277), value: function () {} },
          ]) && Rn(t[An(298)], e),
          n && Rn(t, n),
          r
        );
      })(),
      Nn = [
        "iterator",
        "checkIMg",
        "create",
        "allowClick",
        "playButtonSound",
        "value",
        "removeAll",
        "frameName",
        "6zwujoW",
        "writable",
        "sound",
        "764743bzjNmt",
        "28988ODpLot",
        "__proto__",
        "dispatch",
        "550789clptnu",
        "1531741AcHlrP",
        "setPrototypeOf",
        "symbol",
        "atlas",
        "uncheckImg",
        "function",
        "enumerable",
        "213ZqMhUG",
        "1uSZToK",
        "Sprite",
        "271ajzSDS",
        "Cannot call a class as a function",
        "object",
        "6649cZGxXS",
        "33uvHkYc",
        "loadTexture",
        "checked",
        "onInputDown",
        "22513iGyqLb",
        "length",
        "defineProperty",
        "prototype",
        "onCheck",
        "Super expression must either be null or a function",
        "key",
        "events",
        "inputEnabled",
        "configurable",
        "this hasn't been initialised - super() hasn't been called",
        "Signal",
        "5787gmZjeZ",
      ],
      Dn = function (t, e) {
        return Nn[(t -= 226)];
      },
      Ln = Dn;
    function Mn(t) {
      var e = Dn;
      return (Mn =
        typeof Symbol === e(266) && typeof Symbol[e(245)] === e(263)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol[n(235)]
                ? n(263)
                : typeof t;
            })(t);
    }
    function Gn(t, e) {
      for (var n = Dn, i = 0; i < e[n(233)]; i++) {
        var r = e[i];
        (r[n(267)] = r[n(267)] || !1),
          (r[n(241)] = !0),
          n(250) in r && (r[n(254)] = !0),
          Object[n(234)](t, r[n(238)], r);
      }
    }
    function Wn(t) {
      var e = Dn;
      return (Wn = Object[e(262)]
        ? Object.getPrototypeOf
        : function (t) {
            return t[e(258)] || Object.getPrototypeOf(t);
          })(t);
    }
    function Vn(t) {
      if (void 0 === t) throw new ReferenceError(Dn(242));
      return t;
    }
    function Un(t, e) {
      return (Un =
        Object[Dn(262)] ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Dn; ; )
        try {
          if (
            772129 ===
            -parseInt(n(260)) +
              parseInt(n(232)) * parseInt(n(253)) +
              -parseInt(n(257)) * parseInt(n(228)) +
              -parseInt(n(256)) * -parseInt(n(269)) +
              parseInt(n(261)) +
              -parseInt(n(227)) * -parseInt(n(268)) +
              parseInt(n(271)) * -parseInt(n(244))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Nn);
    var zn = (function (t) {
        var e,
          n,
          i,
          r = Dn;
        function a(t, e, n, i, r, o) {
          var s,
            u,
            c,
            h,
            l = Dn;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(Dn(272));
            })(this, a),
            (u = this),
            (c = Wn(a).call(this, t, e, n, i, r)),
            (h = Dn),
            ((s =
              !c || (Mn(c) !== h(226) && "function" != typeof c) ? Vn(u) : c)[
              l(264)
            ] = i),
            (s[l(246)] = r),
            (s.uncheckImg = o),
            (s.inputEnabled = !0),
            s[l(239)].onInputDown.add(s[l(236)], Vn(s)),
            (s.onChange = new Phaser[l(243)]()),
            (s[l(248)] = !1),
            s
          );
        }
        return (
          (function (t, e) {
            var n = Dn;
            if ("function" != typeof e && null !== e)
              throw new TypeError(n(237));
            (t[n(235)] = Object[n(247)](e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Un(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: "disableClick",
              value: function () {
                var t = Dn;
                (this[t(240)] = !1), this.events[t(231)][t(251)]();
              },
            },
            {
              key: r(236),
              value: function () {
                var t = r,
                  e = this;
                !this[t(248)] &&
                  ((this[t(248)] = !0),
                  this.frameName == this[t(246)]
                    ? (this[t(229)](this[t(264)], this[t(265)]),
                      this.onChange[t(259)](!1, this))
                    : (this[t(229)](this[t(264)], this.checkIMg),
                      this.onChange[t(259)](!0, this)),
                  CyberInstance[t(255)][t(249)](),
                  setTimeout(function () {
                    e.allowClick = !1;
                  }, 300));
              },
            },
            {
              key: r(230),
              set: function (t) {
                var e = r;
                t
                  ? this.loadTexture(this[e(264)], this[e(246)])
                  : this.loadTexture(this[e(264)], this.uncheckImg);
              },
              get: function () {
                var t = r;
                return this[t(252)] === this[t(246)];
              },
            },
          ]) && Gn(e[Dn(235)], n),
          i && Gn(e, i),
          a
        );
      })(Phaser[Ln(270)]),
      Hn = [
        "Tiếng Việt",
        "showCloseButton",
        "sprite",
        "CONFIRM",
        "enumerable",
        "addOverlay",
        "sound",
        "257620yufPpi",
        "77897UfoKcL",
        "checkbox",
        "1263692eyLgJM",
        "addText",
        "addOnce",
        "close",
        "setDefaultLanguage",
        "vnFlag",
        "Super expression must either be null or a function",
        "value",
        "en_US",
        "symbol",
        "this hasn't been initialised - super() hasn't been called",
        "homeScreen",
        "onConfirm",
        "setTo",
        "iterator",
        "game",
        "inputEnabled",
        "languageCode",
        "addFlag",
        "key",
        "English",
        "langCode",
        "height",
        "getPrototypeOf",
        "vi_VN",
        "setPrototypeOf",
        "addCloseButton",
        "text",
        "createTransition",
        "player",
        "addChild",
        "lang",
        "6197XpzwMr",
        "prototype",
        "create",
        "width",
        "LANGUAGE",
        "enFlag",
        "9777pIimSb",
        "scale",
        "5dTmAfA",
        "click",
        "onInputDown",
        "5PSZAZF",
        "background",
        "anchor",
        "__proto__",
        "48uuiQWO",
        "make",
        "31507ULsnFc",
        "toUpperCase",
        "closeButton",
        "565971kYqVPP",
        "defineProperty",
        "buttonText",
        "setDataAsync",
        "call",
        "constructor",
        "Cannot call a class as a function",
        "onLanguageChange",
        "square_check",
        "function",
      ],
      Xn = function (t, e) {
        return Hn[(t -= 236)];
      };
    function Jn(t) {
      var e = Xn;
      return (Jn =
        typeof Symbol === e(287) && "symbol" == typeof Symbol[e(240)]
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(287) &&
                t[n(283)] === Symbol &&
                t !== Symbol[n(259)]
                ? n(307)
                : typeof t;
            })(t);
    }
    function qn(t, e) {
      for (var n = Xn, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(292)] = r[n(292)] || !1),
          (r.configurable = !0),
          n(305) in r && (r.writable = !0),
          Object[n(279)](t, r[n(245)], r);
      }
    }
    function Kn(t) {
      var e = Xn;
      return (Kn = Object[e(251)]
        ? Object[e(249)]
        : function (t) {
            var n = e;
            return t.__proto__ || Object[n(249)](t);
          })(t);
    }
    function Yn(t) {
      if (void 0 === t) throw new ReferenceError(Xn(236));
      return t;
    }
    function Zn(t, e) {
      var n = Xn;
      return (Zn =
        Object[n(251)] ||
        function (t, e) {
          return (t[n(272)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Xn; ; )
        try {
          if (
            418158 ===
            -parseInt(n(269)) * -parseInt(n(296)) +
              parseInt(n(278)) +
              parseInt(n(295)) +
              -parseInt(n(275)) +
              parseInt(n(264)) * parseInt(n(273)) +
              -parseInt(n(266)) * -parseInt(n(258)) +
              -parseInt(n(298))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Hn);
    var Qn = (function (t) {
        var e,
          n,
          i,
          r = Xn;
        function a(t, e) {
          var n,
            i,
            r,
            o = Xn;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(Xn(284));
          })(this, a),
            (i = this),
            ((n =
              !(r = Kn(a)[o(282)](this, t)) ||
              ("object" !== Jn(r) && "function" != typeof r)
                ? Yn(i)
                : r).languageCode = CyberInstance.langCode),
            (n.onLanguageChange = new Phaser.Signal()),
            n[o(293)](),
            (n[o(270)] = n.create(
              0,
              0,
              "homeScreen",
              "bg_popup_medium_484x292"
            )),
            (n[o(270)].x = n[o(241)][o(261)] / 2 - n[o(270)][o(261)] / 2),
            (n[o(270)].y = n[o(241)].height / 2 - n[o(270)][o(248)] / 2);
          var s = n[o(241)].add[o(253)](
            n.background[o(261)] / 2,
            12,
            CyberInstance[o(257)][o(262)],
            { font: APP_FONT, fontWeight: 700, fontSize: 30, fill: "#ffffff" }
          );
          s[o(271)][o(239)](0.5, 0), n[o(270)][o(256)](s);
          var u = n[o(244)]("en", o(246)),
            c = n[o(244)]("vn", o(288));
          (u.x = n[o(270)][o(261)] / 2 - (2 * u[o(261)] + 50) / 2),
            (c.x = u.x + u[o(261)] + 50),
            (n[o(263)] = u),
            (n[o(303)] = c),
            (n.checkbox = n[o(241)][o(274)][o(290)](
              0,
              u.y + u[o(248)] + 10,
              o(237),
              o(286)
            )),
            n[o(297)][o(265)].setTo(0.5),
            (n[o(297)].x =
              "en" == CyberInstance.langCode ? n[o(263)].x : n[o(303)].x),
            n[o(270)].addChild(n.checkbox);
          var h = new it(n[o(241)], 0, 0, "homeScreen", "button_invite");
          return (
            (h.x = n.background.width / 2 - h.width / 2),
            (h.y = n.background[o(248)] - h[o(248)] - 25),
            h[o(299)](CyberInstance[o(257)][o(291)][o(276)]()),
            h.click(n[o(238)], Yn(n)),
            n[o(270)][o(256)](h),
            e && !0 === e[o(289)] && n[o(252)](),
            n[o(254)](),
            n
          );
        }
        return (
          (function (t, e) {
            var n = Xn;
            if (typeof e !== n(287) && null !== e) throw new TypeError(n(304));
            (t[n(259)] = Object[n(260)](e && e[n(259)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Zn(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(244),
              value: function (t, e) {
                var n = r,
                  i = this,
                  a = new it(this[n(241)], 0, 120, n(237), t);
                return (
                  (a[n(261)] = 165),
                  (a[n(248)] = 100),
                  (a.languageCode = t),
                  a[n(267)](function (t) {
                    var e = n;
                    (i[e(243)] = t[e(243)]),
                      (i[e(297)].x =
                        "en" == i[e(243)] ? i[e(263)].x : i[e(303)].x);
                  }),
                  a.addText(e),
                  (a[n(280)].y = "en" == t ? a[n(248)] + 27 : a.height + 31),
                  (a[n(280)].x = a.buttonText.x + 10),
                  this[n(270)][n(256)](a),
                  a
                );
              },
            },
            {
              key: r(238),
              value: function () {
                var t = r;
                if (
                  !gameLocaleInited ||
                  CyberInstance[t(247)] != this.languageCode
                ) {
                  var e = "en" == this[t(243)] ? t(306) : t(250);
                  CyberInstance[t(302)](e),
                    this[t(285)].dispatch(),
                    FBInstant[t(255)][t(281)]({ gameLocale: e });
                }
                this[t(301)]();
              },
            },
            {
              key: r(252),
              value: function () {
                var t = r,
                  e = this,
                  n = this[t(260)](0, 0, t(237), "button_close");
                (n.x = this[t(270)].width - n[t(261)] / 2 - 10),
                  (n.y = -12),
                  (n[t(242)] = !0),
                  n.events[t(268)][t(300)](function () {
                    var n = t;
                    CyberInstance[n(294)].playButtonSound(), e[n(301)]();
                  }),
                  this[t(270)].addChild(n),
                  (this[t(277)] = n);
              },
            },
          ]) && qn(e.prototype, n),
          i && qn(e, i),
          a
        );
      })(x),
      $n = [
        "lang",
        "Text",
        "addChild",
        "addCheckBox",
        "createOutTransition",
        "close",
        "SETTING",
        "#39bbe0",
        "button_nhap",
        "disableClick",
        "311942OrJpgp",
        "checkbox",
        "overlay",
        "setPrototypeOf",
        "addEntry",
        "icon_language",
        "overlayTexture",
        "Cannot call a class as a function",
        "anchor",
        "iterator",
        "Super expression must either be null or a function",
        "1860416koReDq",
        "make",
        "onLanguageChange",
        "giftcode",
        "257250pLVsUR",
        "value",
        "icon_code",
        "icon_sound",
        "1HdYxVr",
        "square_uncheck",
        "events",
        "getPrototypeOf",
        "addOverlay",
        "constructor",
        "Out",
        "setting_entry",
        "GIFT_CODE",
        "length",
        "background",
        "alpha",
        "onChange",
        "hasChanged",
        "click",
        "revive",
        "call",
        "LANG",
        "854319zrgzzN",
        "game",
        "kill",
        "function",
        "isSoundOn",
        "height",
        "state",
        "bg_popup_setting",
        "onComplete",
        "add",
        "language",
        "2pHlhfb",
        "callAll",
        "setTo",
        "checked",
        "Back",
        "Easing",
        "SOUND",
        "createInTransition",
        "en_button_nhap",
        "create",
        "prototype",
        "symbol",
        "onInputDown",
        "#ffffff",
        "997087IYFIBB",
        "open",
        "visible",
        "383096rCrzfk",
        "text",
        "enumerable",
        "1XIiBiT",
        "restart",
        "key",
        "langCode",
        "454863pkinoi",
        "sound",
        "buttonIcon",
        "guserid",
        "homeScreen",
        "inputEnabled",
        "width",
        "tween",
        "setting_en_button",
        "__proto__",
      ],
      ti = function (t, e) {
        return $n[(t -= 138)];
      };
    function ei(t) {
      var e = ti;
      return (ei =
        typeof Symbol === e(218) && "symbol" == typeof Symbol[e(187)]
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                "function" == typeof Symbol &&
                t[n(202)] === Symbol &&
                t !== Symbol[n(144)]
                ? n(145)
                : typeof t;
            })(t);
    }
    function ni(t, e) {
      for (var n = ti, i = 0; i < e[n(206)]; i++) {
        var r = e[i];
        (r[n(153)] = r.enumerable || !1),
          (r.configurable = !0),
          n(194) in r && (r.writable = !0),
          Object.defineProperty(t, r[n(156)], r);
      }
    }
    function ii(t, e) {
      var n = ti;
      return !e || ("object" !== ei(e) && typeof e !== n(218))
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function ri(t) {
      var e = ti;
      return (ri = Object.setPrototypeOf
        ? Object[e(200)]
        : function (t) {
            return t[e(167)] || Object.getPrototypeOf(t);
          })(t);
    }
    function ai(t, e) {
      var n = ti;
      return (ai =
        Object[n(181)] ||
        function (t, e) {
          return (t[n(167)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = ti; ; )
        try {
          if (
            660873 ===
            -parseInt(n(178)) * parseInt(n(197)) +
              parseInt(n(158)) +
              -parseInt(n(193)) +
              -parseInt(n(215)) +
              -parseInt(n(151)) * -parseInt(n(226)) +
              parseInt(n(154)) * -parseInt(n(148)) +
              parseInt(n(189))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })($n);
    var oi = (function (t) {
        var e,
          n,
          i,
          r = ti;
        function a(t) {
          var e,
            n = ti;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(ti(185));
          })(this, a),
            ((e = ii(this, ri(a)[n(213)](this, t)))[n(180)] = e[n(201)]());
          var i = e.create(0, 0, n(162), n(222));
          (i[n(163)] = !0),
            (i.x = e.game[n(164)] - i[n(164)] - 15),
            (i.y = e[n(216)].height / 2 - i.height / 2);
          var r = e[n(216)][n(190)][n(152)](
            i[n(164)] / 2,
            15,
            CyberInstance[n(168)][n(174)],
            { font: APP_FONT, fill: n(147), fontWeight: 700, fontSize: 26 }
          );
          r[n(186)][n(228)](0.5, 0),
            i.addChild(r),
            (e[n(159)] = e[n(182)](CyberInstance.lang[n(140)], n(196))),
            (e[n(159)].y = 70),
            e[n(171)](e[n(159)], CyberInstance[n(219)], function (t) {
              (e.hasChanged = !0), (CyberInstance.isSoundOn = t);
            }),
            i[n(170)](e[n(159)]),
            (e.giftcode = e[n(182)](CyberInstance.lang[n(205)], n(195))),
            (e[n(192)].y = e[n(159)].y + e[n(159)].height + 20),
            i.addChild(e[n(192)]);
          var o = new it(
            e.game,
            0,
            0,
            n(162),
            "vn" == CyberInstance.langCode ? n(176) : n(142)
          );
          (o.x = e[n(192)][n(164)] - o[n(164)] - 10),
            (o.y = e[n(192)].height / 2 - o[n(220)] / 2),
            o[n(211)](function () {
              e[n(173)](), z.instance.open();
            }),
            e[n(192)].addChild(o),
            (e[n(225)] = e[n(182)](CyberInstance[n(168)][n(214)], n(183))),
            (e[n(225)].y = e[n(192)].y + e[n(192)][n(220)] + 20),
            i[n(170)](e[n(225)]);
          var s = new it(
            e.game,
            0,
            0,
            n(162),
            "en" == CyberInstance[n(157)] ? n(166) : "setting_vn_button"
          );
          (s.x = e.language[n(164)] - s[n(164)] - 10),
            (s.y = e.language.height / 2 - s.height / 2),
            s[n(211)](function () {
              var i = n;
              e[i(173)](),
                new Qn(t, { showCloseButton: !0 })[i(191)][i(224)](function () {
                  var e = i;
                  t[e(221)][e(155)]();
                });
            }),
            e.language.addChild(s);
          var u = e[n(216)][n(224)][n(152)](
            i[n(164)] / 2,
            i[n(220)] - 65,
            "ID: " + CyberInstance[n(161)],
            { font: APP_FONT, fontSize: 20, fill: n(147), fontWeight: 400 }
          );
          u.anchor[n(228)](0.5), i[n(170)](u);
          var c = e.game[n(224)][n(152)](
            i[n(164)] / 2,
            i[n(220)] - 33,
            "Version: " + CyberInstance.version,
            { font: APP_FONT, fontSize: 15, fill: n(175), fontWeight: 400 }
          );
          return (
            c[n(186)][n(228)](0.5, 0),
            i.addChild(c),
            (e.background = i),
            e.createInTransition(),
            e
          );
        }
        return (
          (function (t, e) {
            var n = ti;
            if (typeof e !== n(218) && null !== e) throw new TypeError(n(188));
            (t[n(144)] = Object[n(143)](e && e[n(144)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && ai(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: "addEntry",
              value: function (t, e) {
                var n = ti,
                  i = this[n(143)](0, 0, n(162), n(204)),
                  r = this[n(143)](20, i.height / 2, n(162), e);
                e == n(195) && (r.x = 10),
                  r[n(186)].setTo(0, 0.5),
                  i[n(170)](r),
                  (i[n(160)] = r);
                var a = new Phaser[n(169)](
                  this[n(216)],
                  85,
                  i.height / 2 + 2,
                  t,
                  {
                    font: APP_FONT,
                    fill: "#39bbe0",
                    fontWeight: 400,
                    fontSize: 22,
                  }
                );
                return a[n(186)][n(228)](0, 0.5), i[n(170)](a), i;
              },
            },
            {
              key: r(171),
              value: function (t, e, n) {
                var i = r,
                  a = new zn(
                    this[i(216)],
                    0,
                    t[i(220)] / 2,
                    i(162),
                    "square_check",
                    i(198)
                  );
                (a.x = t[i(164)] - a[i(164)] - 10),
                  a.anchor[i(228)](0, 0.5),
                  (a[i(229)] = e),
                  a[i(177)](),
                  t.addChild(a),
                  (t[i(179)] = a),
                  (t.inputEnabled = !0),
                  t[i(199)][i(146)][i(224)](function (t) {
                    t[i(179)].onCheck();
                  }, this),
                  a[i(209)][i(224)](n, this);
              },
            },
            {
              key: r(201),
              value: function () {
                var t = r,
                  e = this.create(0, 0, CyberGlobalData[t(184)]);
                return (
                  (e[t(208)] = 0.5),
                  (e.inputEnabled = !0),
                  e[t(199)].onInputDown[t(224)](this.close, this),
                  e
                );
              },
            },
            {
              key: r(141),
              value: function () {
                var t = r;
                if (this.background) {
                  var e = this[t(216)][t(164)] - this[t(207)][t(164)] - 15;
                  (this[t(207)].x = this[t(216)][t(164)] - 15),
                    this.game[t(224)]
                      [t(165)](this.background)
                      .to({ x: e }, 500, Phaser[t(139)].Back[t(203)], !0);
                }
              },
            },
            {
              key: r(172),
              value: function () {
                var t = r,
                  e = this;
                if (this[t(207)]) {
                  var n = this[t(216)][t(164)];
                  this[t(216)][t(224)]
                    [t(165)](this[t(207)])
                    .to({ x: n }, 500, Phaser[t(139)][t(138)][t(203)], !0)
                    [t(223)][t(224)](function () {
                      var n = t;
                      e[n(227)](n(217)), (e.visible = !1);
                    });
                }
              },
            },
            {
              key: r(149),
              value: function () {
                var t = r;
                0 == this[t(150)] &&
                  ((this[t(210)] = !1),
                  (this[t(150)] = !0),
                  this[t(227)](t(212)),
                  this[t(141)]());
              },
            },
            {
              key: r(173),
              value: function () {
                var t = r;
                1 == this[t(150)] && (this[t(180)][t(217)](), this[t(172)]());
              },
            },
          ]) && ni(e[ti(144)], n),
          i && ni(e, i),
          a
        );
      })(Phaser.Group),
      si = [
        "toDataURL",
        "length",
        "key",
        "2dwdBQs",
        "enumerable",
        "create",
        "setPrototypeOf",
        "symbol",
        "27PZDjiv",
        "25087WvwfSJ",
        "542818fOXLOv",
        "getPrototypeOf",
        "179XnXASN",
        "updateTransform",
        "object",
        "this hasn't been initialised - super() hasn't been called",
        "231521KxgxGU",
        "5078ATfnTg",
        "game",
        "Super expression must either be null or a function",
        "make",
        "stage",
        "14848jmUjYG",
        "14682tmMtJA",
        "function",
        "constructor",
        "753lJQEzg",
        "Cannot call a class as a function",
        "90gTFFhz",
        "value",
        "__proto__",
        "writable",
        "prototype",
        "shareImage",
        "drawShareImage",
        "base64Image",
        "image/png",
        "configurable",
      ],
      ui = function (t, e) {
        return si[(t -= 313)];
      };
    function ci(t) {
      var e = ui;
      return (ci =
        typeof Symbol === e(346) && typeof Symbol.iterator === e(329)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                "function" == typeof Symbol &&
                t[n(347)] === Symbol &&
                t !== Symbol[n(316)]
                ? n(329)
                : typeof t;
            })(t);
    }
    function hi(t, e) {
      for (var n = ui, i = 0; i < e[n(323)]; i++) {
        var r = e[i];
        (r[n(326)] = r.enumerable || !1),
          (r[n(321)] = !0),
          n(313) in r && (r[n(315)] = !0),
          Object.defineProperty(t, r[n(324)], r);
      }
    }
    function li(t, e) {
      var n = ui;
      return !e || (ci(e) !== n(336) && typeof e !== n(346))
        ? (function (t) {
            var e = ui;
            if (void 0 === t) throw new ReferenceError(e(337));
            return t;
          })(t)
        : e;
    }
    function fi(t) {
      var e = ui;
      return (fi = Object[e(328)]
        ? Object.getPrototypeOf
        : function (t) {
            var n = e;
            return t.__proto__ || Object[n(333)](t);
          })(t);
    }
    function pi(t, e) {
      return (pi =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t[ui(314)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = ui; ; )
        try {
          if (
            566284 ===
            -parseInt(n(331)) * -parseInt(n(330)) +
              parseInt(n(332)) +
              -parseInt(n(344)) +
              parseInt(n(350)) * parseInt(n(348)) +
              parseInt(n(325)) * -parseInt(n(345)) +
              parseInt(n(339)) * -parseInt(n(334)) +
              parseInt(n(338))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(si);
    var di = (function (t) {
        var e,
          n,
          i,
          r = ui;
        function a(t) {
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(ui(349));
            })(this, a),
            li(this, fi(a).call(this, t))
          );
        }
        return (
          (function (t, e) {
            var n = ui;
            if (typeof e !== n(346) && null !== e) throw new TypeError(n(341));
            (t[n(316)] = Object.create(e && e[n(316)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && pi(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(318),
              value: function () {
                var t = r;
                this[t(327)](0, 0, t(317)), this[t(340)][t(343)][t(335)]();
                var e = this[t(340)][t(342)].bitmapData(800, 436);
                return (
                  e.drawGroup(this),
                  (this[t(319)] = e.canvas[t(322)](t(320), 1)),
                  this.base64Image
                );
              },
            },
          ]) && hi(e.prototype, n),
          i && hi(e, i),
          a
        );
      })(Phaser.Group),
      yi = [
        "inviteButton",
        "getID",
        "close",
        "1AQQeTy",
        "getPhoto",
        "inputEnabled",
        "width",
        "length",
        "Super expression must either be null or a function",
        "canPlay",
        "drawShareImage",
        "share",
        "getName",
        "582967WtOJYJ",
        "Image",
        "playerId",
        "roomBet",
        "homeScreenBG2",
        "cache",
        "constructor",
        "no_avatar",
        "createView",
        "height",
        "1OUwiYt",
        "addChild",
        "defineProperty",
        "en_inviteFriend",
        "function",
        "roomId",
        "createAsync",
        "back_button",
        "626721rLYhyS",
        "guserid",
        "prototype",
        "name",
        "bringToTop",
        "game",
        "text",
        "Play",
        "checkImageKey",
        "photo",
        "isArray",
        "#ffffff",
        "addText",
        "instance",
        "14555QhiMic",
        "avatar",
        "229rDNEZu",
        "INVITED_TO_PLAY",
        "popup_header_bg",
        "onFriendAction",
        "SHARE",
        "destroy",
        "load",
        "inviteFriend",
        "addOnce",
        "getPrototypeOf",
        "createTransition",
        "langCode",
        "#76e5fb",
        "showContainer",
        "push",
        "showNotEnoughMoneyToJoin",
        "key",
        "#000000",
        "click",
        "iterator",
        "Back",
        "events",
        "connectedFriends",
        "getCurrentState",
        "lobbyScreen",
        "add",
        "__proto__",
        "FRIENDS",
        "avt",
        "value",
        "avatarKey",
        "setPrototypeOf",
        "1071211tHorvZ",
        "playButtonSound",
        "object",
        "then",
        "updateAsync",
        "233wsYVfh",
        "call",
        "IMMEDIATE",
        "NO_PUSH",
        "Easing",
        "homeScreen",
        "openLoadingPopup",
        "friendList",
        "this hasn't been initialised - super() hasn't been called",
        "Text",
        "listView",
        "state",
        "50hcJLID",
        "getConnectedPlayersAsync",
        "CUSTOM",
        "loadTexture",
        "joinRoom",
        "Out",
        "shareAsync",
        "tween",
        "toString",
        "onFileComplete",
        "paused",
        "onInviteClick",
        "772171mFSKFe",
        "onInputDown",
        "lang",
        "writable",
        "player",
        "closeLoadingPopup",
        "enumerable",
        "427931ytEcaS",
        "create",
        "addFriendToList",
        "catch",
      ],
      vi = function (t, e) {
        return yi[(t -= 496)];
      };
    function bi(t) {
      var e = vi;
      return (bi =
        typeof Symbol === e(580) && "symbol" == typeof Symbol[e(500)]
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(580) &&
                t[n(572)] === Symbol &&
                t !== Symbol[n(586)]
                ? "symbol"
                : typeof t;
            })(t);
    }
    function gi(t, e) {
      for (var n = vi, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(548)] = r[n(548)] || !1),
          (r.configurable = !0),
          n(510) in r && (r[n(545)] = !0),
          Object[n(578)](t, r[n(497)], r);
      }
    }
    function mi(t, e) {
      var n = vi;
      return !e || (bi(e) !== n(515) && typeof e !== n(580))
        ? (function (t) {
            var e = vi;
            if (void 0 === t) throw new ReferenceError(e(526));
            return t;
          })(t)
        : e;
    }
    function Ii(t) {
      var e = vi;
      return (Ii = Object[e(512)]
        ? Object[e(609)]
        : function (t) {
            return t[e(507)] || Object.getPrototypeOf(t);
          })(t);
    }
    function wi(t, e) {
      return (wi =
        Object[vi(512)] ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = vi; ; )
        try {
          if (
            387232 ===
            parseInt(n(542)) +
              -parseInt(n(600)) * -parseInt(n(518)) +
              -parseInt(n(566)) +
              -parseInt(n(584)) +
              parseInt(n(549)) * parseInt(n(576)) +
              -parseInt(n(598)) * parseInt(n(530)) +
              parseInt(n(513)) * parseInt(n(556))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(yi);
    var Si = (function (t) {
        var e,
          n,
          i,
          r = vi;
        function a(t) {
          var e,
            n = vi;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            (e = mi(this, Ii(a)[n(519)](this, t))),
            FBInstant[n(546)][n(531)]()[n(516)](function (t) {
              var i = n;
              (e[i(503)] = t), Array[i(594)](e[i(503)]) || (e[i(503)] = []);
            }),
            e
          );
        }
        return (
          (function (t, e) {
            var n = vi;
            if (typeof e !== n(580) && null !== e) throw new TypeError(n(561));
            (t[n(586)] = Object[n(550)](e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && wi(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: "isAssetReady",
              value: function () {
                var t = vi;
                return (
                  this[t(589)][t(571)].checkImageKey(t(505)) &&
                  Array.isArray(this[t(503)])
                );
              },
            },
            {
              key: r(574),
              value: function () {
                var t = r,
                  e = this[t(550)](0, 0, t(570));
                (e[t(559)] = this[t(589)][t(559)]),
                  (e[t(575)] = this[t(589)].height),
                  (e[t(558)] = !0);
                var n = this[t(550)](0, 0, t(505), t(602));
                n[t(559)] = this.game[t(559)];
                var i = this[t(589)][t(506)][t(590)](
                  220,
                  9,
                  CyberInstance.lang[t(508)].toUpperCase(),
                  {
                    font: APP_FONT,
                    fontWeight: 700,
                    fontSize: 30,
                    fill: t(595),
                  }
                );
                if (
                  (this[t(506)](i),
                  (this[t(553)] = new it(
                    this[t(589)],
                    0,
                    15,
                    t(505),
                    "vn" == CyberInstance[t(611)] ? t(607) : t(579)
                  )),
                  (this[t(553)].x =
                    this[t(589)][t(559)] / 2 - this.inviteButton[t(559)] / 2),
                  (this[t(553)].y =
                    this.game[t(575)] - this.inviteButton[t(575)] - 15),
                  this[t(553)][t(499)](this[t(541)], this),
                  this.add(this[t(553)]),
                  this[t(503)][t(560)] > 0)
                ) {
                  var a =
                      this[t(589)][t(575)] -
                      n[t(575)] -
                      this[t(553)][t(575)] -
                      30,
                    o = this[t(589)].width / 2 - 465;
                  for (var s in ((this[t(528)] = new kn(
                    {
                      x: o,
                      y: n[t(575)],
                      column: 3,
                      width: 930,
                      height: a,
                      rowHeight: 176,
                      columnWidth: 290,
                      row: 1,
                      leftDistance: 0,
                      rightDistance: 0,
                      distanceBetweenColumns: 30,
                      distanceBetweenRows: 10,
                      direction: "y",
                    },
                    this[t(589)]
                  )),
                  this[t(506)](this[t(528)]),
                  (this[t(525)] = []),
                  this[t(503)])) {
                    var u = this[t(503)][s];
                    this[t(525)][t(614)](
                      this.addFriendToList({
                        playerId: u[t(554)](),
                        isOnline: !1,
                        name: u.getName(),
                        avatar: u[t(557)](),
                        coin: -1,
                      })
                    );
                  }
                  (this[t(528)].viewList = this.friendList),
                    this.game[t(606)][t(539)][t(506)](this[t(539)], this),
                    this.game[t(606)].start();
                }
                this[t(588)](this.inviteButton);
                var c = this[t(550)](50, 0, t(523), t(583));
                (c.y = n.height / 2 - c[t(575)] / 2 - 5),
                  (c[t(558)] = !0),
                  c[t(502)][t(543)][t(608)](this[t(555)], this),
                  this[t(610)]();
              },
            },
            {
              key: r(610),
              value: function () {
                var t = r;
                (this.y = -100),
                  this[t(589)].add[t(537)](this).to(
                    { y: 0 },
                    500,
                    Phaser[t(522)][t(501)][t(535)],
                    !0
                  );
              },
            },
            {
              key: r(551),
              value: function (t) {
                var e = r,
                  n = new Phaser[e(567)](
                    this[e(589)],
                    10,
                    10,
                    e(505),
                    "friend_rounded"
                  );
                n.avatarKey = e(509) + t[e(568)];
                var i = new Phaser[e(567)](
                  this[e(589)],
                  20,
                  20,
                  e(523),
                  e(573)
                );
                n[e(577)](i),
                  t[e(599)] &&
                    ((n[e(593)] = i),
                    this[e(589)][e(571)][e(592)](n[e(511)])
                      ? i[e(533)](n.avatarKey)
                      : this.game[e(606)].image(n.avatarKey, t[e(599)])),
                  (i.width = 60),
                  (i[e(575)] = 60);
                var a = new Phaser[e(527)](
                  this.game,
                  i.x + i.width + 15,
                  i.y,
                  t[e(587)],
                  {
                    font: APP_FONT,
                    fill: e(612),
                    fontSize: 20,
                    fontWeight: 500,
                  }
                );
                n[e(577)](a);
                var o = new it(this[e(589)], 0, 15, e(523), "button_goiban");
                return (
                  o[e(596)](
                    t[e(581)]
                      ? CyberInstance.lang.JOIN
                      : CyberInstance[e(544)].CALL_FRIEND,
                    {
                      font: APP_FONT,
                      fill: t[e(581)] ? e(498) : e(595),
                      fontWeight: 500,
                      fontSize: 22,
                    }
                  ),
                  o[e(499)](this[e(603)], this),
                  (o.x = 290 - o[e(559)] - 15),
                  (o.y = 176 - o[e(575)] - 15),
                  (o[e(568)] = t[e(568)]),
                  n[e(577)](o),
                  n
                );
              },
            },
            {
              key: r(603),
              value: function (t) {
                var e = r,
                  n = this;
                CyberInstance[e(540)] && (CyberInstance[e(540)] = !1),
                  t[e(581)] && t[e(569)]
                    ? jt[e(597)][e(562)](t.roomBet)
                      ? (this[e(589)][e(606)][e(539)].remove(
                          this.onFileComplete,
                          this
                        ),
                        this[e(589)][e(529)]
                          .getCurrentState()
                          .openLoadingPopup(),
                        jt[e(597)][e(534)](parseInt(t[e(581)])))
                      : G[e(496)](t.roomBet)
                    : FBInstant.context[e(582)](t[e(568)][e(538)]()).then(
                        function () {
                          n[e(517)]();
                        }
                      );
              },
            },
            {
              key: r(517),
              value: function () {
                var t = r,
                  e = new di(this[t(589)]),
                  n = e[t(563)]();
                e[t(605)]();
                var i = {
                  action: t(532),
                  cta: t(591),
                  image: n,
                  text:
                    '"' +
                    FBInstant[t(546)][t(565)]() +
                    '" ' +
                    CyberInstance[t(544)][t(601)],
                  template: "challenge",
                  data: { guserid: CyberInstance.guserid },
                  strategy: t(520),
                  notification: t(521),
                };
                FBInstant[t(517)](i)[t(516)](function () {});
              },
            },
            {
              key: r(541),
              value: function () {
                var t = r,
                  e = this;
                if (
                  (CyberInstance[t(540)] && (CyberInstance[t(540)] = !1),
                  CyberInstance.sound[t(514)](),
                  this[t(524)]({ closeTimer: 15e3 }),
                  this[t(589)][t(571)][t(592)]("shareImage"))
                ) {
                  var n = new di(this.game),
                    i = n[t(563)]();
                  n.destroy(),
                    FBInstant[t(536)]({
                      intent: t(604),
                      image: i,
                      text: "",
                      data: {
                        dataType: t(564),
                        guserId: CyberInstance[t(585)],
                      },
                    })
                      [t(516)](function () {
                        e[t(547)]();
                      })
                      [t(552)](function () {
                        e[t(547)]();
                      });
                }
              },
            },
            {
              key: "onFileComplete",
              value: function (t, e, n) {
                var i = r;
                if (n)
                  for (var a in this[i(525)]) {
                    var o = this[i(525)][a];
                    if (o[i(511)] == e) {
                      o[i(593)][i(533)](e),
                        (o[i(593)][i(559)] = 60),
                        (o.photo[i(575)] = 60);
                      break;
                    }
                  }
              },
            },
            {
              key: r(555),
              value: function () {
                var t = r;
                this[t(589)][t(529)][t(504)]()[t(613)](),
                  CyberInstance.sound[t(514)](),
                  this.game[t(606)][t(539)].remove(this.onFileComplete, this),
                  this[t(605)](!0),
                  (this[t(503)] = null);
              },
            },
          ]) && gi(e[vi(586)], n),
          i && gi(e, i),
          a
        );
      })(x),
      ki = [
        "icon_help",
        "hideContainer",
        "screen",
        "134591itYMTm",
        "game",
        "width",
        "container",
        "click",
        "openPhomGame",
        "writable",
        "defineProperty",
        "configurable",
        "icon_friend",
        "2618675498204375",
        "openSettingPopup",
        "58527TbWjZL",
        "phom_icon",
        "add",
        "220ltaePo",
        "dispatch",
        "onHelpClick",
        "84jCfBFA",
        "4063yInFWG",
        "settingPopup",
        "3svQylm",
        "homeScreen",
        "openFriendPopup",
        "openHelpPopup",
        "catch",
        "93716KpgAUA",
        "11IHpeIc",
        "773xmFxZh",
        "length",
        "298vubZxq",
        "enumerable",
        "friendPopup",
        "prototype",
        "open",
        "value",
        "key",
        "89028HoRZuk",
      ],
      Ci = function (t, e) {
        return ki[(t -= 413)];
      };
    function Oi(t, e) {
      for (var n = Ci, i = 0; i < e[n(446)]; i++) {
        var r = e[i];
        (r.enumerable = r[n(448)] || !1),
          (r[n(425)] = !0),
          n(452) in r && (r[n(423)] = !0),
          Object[n(424)](t, r[n(453)], r);
      }
    }
    !(function (t, e) {
      for (var n = Ci; ; )
        try {
          if (
            100495 ===
            -parseInt(n(417)) +
              -parseInt(n(444)) * -parseInt(n(445)) +
              parseInt(n(432)) * parseInt(n(447)) +
              parseInt(n(429)) * -parseInt(n(438)) -
              parseInt(n(443)) +
              parseInt(n(413)) +
              -parseInt(n(436)) * -parseInt(n(435))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(ki);
    var Pi = (function () {
        var t,
          e,
          n,
          i = Ci;
        function r(t) {
          var e = Ci;
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, r),
            (this[e(416)] = t);
          var n = new it(this[e(416)][e(418)], 0, 15, e(439), "icon_setting");
          (n.x = this[e(416)][e(418)].width - n[e(419)] - 15),
            n[e(421)](this[e(428)], this),
            this[e(416)][e(420)].add(n);
          var i = new it(this[e(416)][e(418)], 0, 15, e(439), e(414));
          (i.x = n.x - i[e(419)] - 15),
            i[e(421)](this.openHelpPopup, this),
            this.screen.container[e(431)](i);
          var a = new it(this[e(416)].game, 0, 15, e(439), e(426));
          if (
            ((a.x = i.x - a.width - 15),
            a[e(421)](this[e(440)], this),
            this[e(416)][e(420)][e(431)](a),
            !0 === CyberInstance.switchGameEnabled &&
              game.cache.checkImageKey(e(430)))
          ) {
            var o = new it(this[e(416)][e(418)], 0, 15, "phom_icon");
            (o.x = a.x - a.width - 15),
              o[e(421)](this.openPhomGame, this),
              this[e(416)][e(420)].add(o);
          }
        }
        return (
          (t = r),
          (e = [
            {
              key: i(428),
              value: function () {
                var t = i;
                this[t(437)]
                  ? this[t(437)][t(451)]()
                  : (this[t(437)] = new oi(this[t(416)][t(418)]));
              },
            },
            {
              key: i(440),
              value: function () {
                var t = i;
                this.screen[t(415)](),
                  (this[t(449)] = new Si(this[t(416)][t(418)]));
              },
            },
            {
              key: i(441),
              value: function () {
                var t = i;
                CyberInstance[t(434)][t(433)]();
              },
            },
            {
              key: i(422),
              value: function () {
                var t = i;
                FBInstant.switchGameAsync(t(427))[t(442)](function (t) {
                  console.log(t);
                });
              },
            },
            {
              key: "destroy",
              value: function () {
                var t = i;
                (this[t(416)] = null),
                  (this[t(449)] = null),
                  (this.settingPopup = null);
              },
            },
          ]) && Oi(t[Ci(450)], e),
          n && Oi(t, n),
          r
        );
      })(),
      Ti = [
        "tween",
        "events",
        "closeButton",
        "Elastic",
        "maxTextHeight",
        "clickOnce",
        "9MUpKcH",
        "centerX",
        "Easing",
        "createView",
        "1SVMSkR",
        "game",
        "colorAnim",
        "profile.refreshCoin",
        "animations",
        "send",
        "this hasn't been initialised - super() hasn't been called",
        "world",
        "onSpinBtnClick",
        "close",
        "winPrize",
        "sound",
        "object",
        "__proto__",
        "luckywheels.spin",
        "1535zJnJir",
        "destroy",
        "1014514GeTpdh",
        "spinMain",
        "coin",
        "inputtext",
        "5fUsnpS",
        "function",
        "centerY",
        "spinAtlas",
        "37025JpPBSP",
        "anchor",
        "call",
        "randomDirection",
        "enumerable",
        "310kQAope",
        "SPIN",
        "spin_bg",
        "constructor",
        "spin_bg_2",
        "indexOf",
        "iterator",
        "onSpinWheelResponse",
        "start",
        "isConnected",
        "Cannot call a class as a function",
        "#FFFFFF",
        "highLightEffect",
        "spin_main",
        "socket",
        "inputEnabled",
        "create",
        "key",
        "1742752xFmHYb",
        "spinBtn",
        "getPrototypeOf",
        "visible",
        "addProfileCoin",
        "prize",
        "#ffffff",
        "button_spin2",
        "prototype",
        "addOnce",
        "ExtensionRequest",
        "log",
        "500",
        "angle",
        "symbol",
        "homeScreen",
        "addText",
        "height",
        "Linear",
        "addOverlay",
        "spinPointer",
        "okbutton",
        "isAssetReady",
        "spinWatched",
        "button_close",
        "spin_bg_1",
        "add",
        "spinHighLight",
        "lang",
        "spin_highlight",
        "SFSObject",
        "toUpperCase",
        "LUCKY_WHEEL",
        "NHAN",
        "playButtonSound",
        "days",
        "length",
        "spinAnim",
        "1256138kIroZn",
        "configurable",
        "set",
        "formatCoinWithCommas",
        "width",
        "Out",
        "addTextField",
        "scale",
        "setTo",
        "text",
        "cache",
        "openSpinPrizeMenu",
        "80929VuvoOQ",
        "addChild",
        "rePositionSpinHighLight",
        "play",
        "value",
        "1451327wbohAi",
        "setPrototypeOf",
        "putBool",
      ],
      _i = function (t, e) {
        return Ti[(t -= 197)];
      };
    function xi(t) {
      var e = _i;
      return (xi =
        typeof Symbol === e(241) && "symbol" == typeof Symbol[e(255)]
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(241) &&
                t[n(252)] === Symbol &&
                t !== Symbol[n(275)]
                ? n(281)
                : typeof t;
            })(t);
    }
    function Ei(t, e) {
      for (var n = _i, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(248)] = r[n(248)] || !1),
          (r[n(306)] = !0),
          n(205) in r && (r.writable = !0),
          Object.defineProperty(t, r[n(266)], r);
      }
    }
    function ji(t, e) {
      var n = _i;
      return !e || (xi(e) !== n(231) && "function" != typeof e)
        ? (function (t) {
            var e = _i;
            if (void 0 === t) throw new ReferenceError(e(225));
            return t;
          })(t)
        : e;
    }
    function Bi(t) {
      var e = _i;
      return (Bi = Object[e(207)]
        ? Object[e(269)]
        : function (t) {
            var n = e;
            return t[n(232)] || Object[n(269)](t);
          })(t);
    }
    function Ai(t, e) {
      var n = _i;
      return (Ai =
        Object[n(207)] ||
        function (t, e) {
          return (t[n(232)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = _i; ; )
        try {
          if (
            990813 ===
            -parseInt(n(215)) * -parseInt(n(201)) +
              parseInt(n(206)) +
              -parseInt(n(236)) +
              -parseInt(n(244)) * parseInt(n(240)) +
              parseInt(n(249)) * -parseInt(n(234)) +
              parseInt(n(305)) * -parseInt(n(219)) +
              parseInt(n(267))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Ti);
    var Ri = (function (t) {
        var e,
          n,
          i,
          r = _i;
        function a(t) {
          var e = _i;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(_i(259));
            })(this, a),
            ji(this, Bi(a)[e(246)](this, t))
          );
        }
        return (
          (function (t, e) {
            var n = _i;
            if (typeof e !== n(241) && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t[n(275)] = Object.create(e && e[n(275)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Ai(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(289),
              value: function () {
                var t = r;
                return game[t(199)].checkImageKey(t(243));
              },
            },
            {
              key: r(218),
              value: function () {
                var t = r,
                  e = this;
                this[t(286)](0.8),
                  (this.bg = this[t(265)](
                    this.game[t(226)].centerX,
                    this.game[t(226)][t(242)],
                    t(243),
                    t(251)
                  )),
                  this.bg[t(245)][t(197)](0.5),
                  this.bg[t(223)][t(293)](t(304), [t(292), t(253)]),
                  (this[t(237)] = this[t(265)](0, 0, t(243), t(262))),
                  this.spinMain[t(245)][t(307)](0.5),
                  this.bg[t(202)](this.spinMain),
                  (this.spinHighLight = this.create(0, 0, t(243), t(296))),
                  this[t(294)].anchor[t(307)](0.5, 0),
                  (this[t(294)].y = 8 - this[t(294)][t(284)]),
                  this[t(294)][t(223)].add("colorAnim", [
                    "spin_highlight",
                    "spin_highlight_1",
                  ]),
                  (this[t(294)][t(270)] = !1),
                  this.bg[t(202)](this[t(294)]),
                  (this[t(268)] = this.create(0, 0, t(243), t(274))),
                  this[t(268)][t(245)].setTo(0.5),
                  (this.spinBtn[t(264)] = !0),
                  this.spinBtn[t(210)].onInputDown[t(276)](this[t(227)], this),
                  this.bg[t(202)](this[t(268)]);
                var n = this[t(220)][t(293)][t(198)](
                  0,
                  0,
                  CyberInstance[t(295)][t(250)],
                  {
                    font: APP_FONT,
                    fontSize: 35,
                    fill: t(273),
                    fontWeight: 900,
                  }
                );
                n[t(245)][t(197)](0.5),
                  this[t(268)][t(202)](n),
                  (this[t(287)] = this[t(265)](0, 0, t(243), "pin_pointer")),
                  (this[t(287)].y = -this.bg[t(284)] / 2 - 2),
                  this.spinPointer[t(245)][t(197)](0.5, 0),
                  this.bg[t(202)](this.spinPointer),
                  (this[t(211)] = new it(this[t(220)], 0, 15, t(282), t(291))),
                  (this[t(211)].x =
                    this[t(220)][t(309)] / 2 + this[t(237)][t(309)] / 2),
                  this[t(211)].click(function () {
                    e[t(235)]();
                  }),
                  this[t(293)](this[t(211)]),
                  (this.randomDirection = 0),
                  (this[t(213)] = 290),
                  this.bg[t(312)][t(197)](0.6),
                  this[t(220)][t(293)]
                    .tween(this.bg[t(312)])
                    .to(
                      { x: 1, y: 1 },
                      1e3,
                      Phaser[t(217)][t(212)][t(310)],
                      !0
                    );
              },
            },
            {
              key: "onSpinBtnClick",
              value: function () {
                var t = r;
                if (
                  ((this.closeButton[t(270)] = !1),
                  CyberInstance[t(230)][t(301)](),
                  !0 === CyberGlobalData[t(290)])
                ) {
                  var e = new SFS2X[t(297)]();
                  e[t(208)]("ad", !0),
                    CyberInstance[t(263)][t(224)](
                      new SFS2X[t(277)]("luckywheels.spin", e)
                    );
                } else
                  CyberInstance[t(263)][t(224)](
                    new SFS2X.ExtensionRequest(t(233))
                  );
              },
            },
            {
              key: r(256),
              value: function (t) {
                var e = r;
                (this[e(272)] = t), (this[e(247)] = 0);
                var n =
                    24 *
                      -[
                        2e4, 1e5, 5e4, 2e4, 2e5, 5e4, 2e4, 5e5, 1e5, 2e4, 5e4,
                        1e5, 2e4, 5e4, 3e5,
                      ][e(254)](t[e(205)]) +
                    2 * this[e(247)],
                  i = game.add[e(209)](this.spinMain).to(
                    { angle: 1440 + n },
                    1300,
                    Phaser[e(217)].Quadratic[e(310)],
                    !1
                  ),
                  a = game[e(293)]
                    [e(209)](i)
                    .to({ timeScale: 0.1 }, 1950, e(285), !1);
                i.onComplete[e(293)](this.winPrize, this),
                  i[e(257)](),
                  a[e(257)](),
                  this.bg.animations[e(204)](e(304), 4, !0);
              },
            },
            {
              key: r(229),
              value: function () {
                var t = r,
                  e = this;
                this.bg[t(223)].stop(),
                  this[t(203)](),
                  setTimeout(function () {
                    var n = t;
                    try {
                      e.openSpinPrizeMenu();
                    } catch (t) {
                      console[n(278)](t), e[n(228)]();
                    }
                  }, 600);
              },
            },
            {
              key: r(200),
              value: function () {
                var t = r,
                  e = this,
                  n = this[t(265)](0, 0, t(243), "bg_claim");
                (n.x = this[t(220)][t(226)][t(216)] - n.width / 2),
                  (n.y = this[t(220)][t(284)] - n.height);
                var i = n.x + 100;
                this[t(311)](
                  f[t(308)](this[t(272)][t(205)]),
                  CyberInstance[t(295)][t(299)],
                  i,
                  n.y + 25
                );
                var a = [0, 10, 20, 30, 40, 50];
                i += 200;
                var o =
                  this[t(272)][t(302)] > a[t(303)]
                    ? a[a.length - 1]
                    : a[this.prize[t(302)] - 1];
                this[t(311)](
                  "+" + o + "%",
                  this[t(272)][t(302)] +
                    " " +
                    CyberInstance[t(295)].NGAY_LIEN_TIEP,
                  i,
                  n.y + 25
                ),
                  (i += 200),
                  this.addTextField(
                    "= " + f[t(308)](this[t(272)][t(238)]),
                    null,
                    i,
                    n.y + 25
                  );
                var s = new it(this[t(220)], 0, 15, t(243), t(288));
                s[t(283)](CyberInstance[t(295)][t(300)][t(298)]()),
                  (s.x = n.x + n.width / 2 - s[t(309)] / 2),
                  (s.y = n.y + n[t(284)] - s[t(284)] - 15),
                  s[t(214)](function () {
                    var n = t;
                    v.dispatchEvent(n(271), e[n(272)][n(238)]),
                      CyberInstance[n(263)][n(258)] &&
                        CyberInstance[n(263)][n(224)](
                          new SFS2X[n(277)](n(222))
                        ),
                      e[n(228)]();
                  }),
                  this[t(293)](s);
              },
            },
            {
              key: "addTextField",
              value: function (t, e, n, i) {
                var a = r,
                  o = this[a(265)](n, i, a(243), a(239)),
                  s = this[a(220)][a(293)][a(198)](
                    o[a(309)] / 2,
                    o[a(284)] / 2,
                    t,
                    {
                      font: APP_FONT,
                      fontSize: 22,
                      fill: a(260),
                      fontWeight: a(279),
                    }
                  );
                if ((s[a(245)][a(197)](0.5), o[a(202)](s), e)) {
                  var u = this[a(220)].add.text(
                    o.x + o.width / 2,
                    o.y + o.height + 10,
                    e,
                    {
                      font: APP_FONT,
                      fontSize: 16,
                      fill: "#93cce5",
                      fontWeight: a(279),
                    }
                  );
                  u[a(245)].setTo(0.5, 0), this[a(293)](u);
                }
              },
            },
            {
              key: r(203),
              value: function () {
                var t = r;
                0 !== this[t(247)] &&
                  ((this.spinHighLight[t(280)] = 5 * this[t(247)]),
                  (this[t(294)].x =
                    this.spinHighLight.x + 19.261 * this[t(247)]),
                  (this[t(294)].y += 0.159)),
                  this[t(261)]();
              },
            },
            {
              key: r(261),
              value: function () {
                var t = r;
                (this.spinHighLight[t(270)] = !0),
                  this[t(294)].play(t(221), 4, !0);
              },
            },
          ]) && Ei(e[_i(275)], n),
          i && Ei(e, i),
          a
        );
      })(x),
      Fi = [
        "NO_PUSH",
        "createTransition",
        "key",
        "homeScreen",
        "sound",
        "player",
        "294572JpZuEr",
        "__proto__",
        "inviteButton",
        "onInputDown",
        "anchor",
        "enumerable",
        "INVITED_TO_PLAY",
        "addCloseButton",
        "make",
        "isAssetReady",
        "16171PMaXcz",
        "getName",
        "destroy",
        "Cannot call a class as a function",
        "addOverlay",
        "317944wdWgFG",
        "615016GomvXB",
        "symbol",
        "checkImageKey",
        "closeLoadingPopup",
        "prototype",
        "CUSTOM",
        "challenge",
        "configurable",
        "function",
        "3kklliI",
        "openLoadingPopup",
        "20552xSubws",
        "call",
        "FB_INVITE_DESC",
        "updateAsync",
        "Text",
        "button_invite",
        "this hasn't been initialised - super() hasn't been called",
        "events",
        "width",
        "game",
        "value",
        "106uEZoQX",
        "setTo",
        "addOnce",
        "shareImage",
        "605183WSuYJD",
        "chooseAsync",
        "invite_popup_bg",
        "guserid",
        "drawShareImage",
        "IMMEDIATE",
        "inputEnabled",
        "onInvite",
        "createView",
        "Super expression must either be null or a function",
        "addText",
        "writable",
        "cache",
        "create",
        "close",
        "closeButton",
        "lang",
        "button_close",
        "INVITE_BUTTON",
        "catch",
        "toUpperCase",
        "constructor",
        "context",
        "addChild",
        "height",
        "getPrototypeOf",
        "background",
        "157199Rjmgfl",
      ],
      Ni = function (t, e) {
        return Fi[(t -= 175)];
      };
    function Di(t) {
      var e = Ni;
      return (Di =
        typeof Symbol === e(213) && typeof Symbol.iterator === e(206)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(213) &&
                t[n(176)] === Symbol &&
                t !== Symbol.prototype
                ? n(206)
                : typeof t;
            })(t);
    }
    function Li(t, e) {
      for (var n = Ni, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(194)] = r[n(194)] || !1),
          (r[n(212)] = !0),
          n(226) in r && (r[n(242)] = !0),
          Object.defineProperty(t, r[n(185)], r);
      }
    }
    function Mi(t, e) {
      var n = Ni;
      return !e || ("object" !== Di(e) && typeof e !== n(213))
        ? (function (t) {
            var e = Ni;
            if (void 0 === t) throw new ReferenceError(e(222));
            return t;
          })(t)
        : e;
    }
    function Gi(t) {
      var e = Ni;
      return (Gi = Object.setPrototypeOf
        ? Object[e(180)]
        : function (t) {
            var n = e;
            return t[n(190)] || Object[n(180)](t);
          })(t);
    }
    function Wi(t, e) {
      return (Wi =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t[Ni(190)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Ni; ; )
        try {
          if (
            332456 ===
            -parseInt(n(204)) -
              parseInt(n(189)) +
              -parseInt(n(214)) * -parseInt(n(182)) -
              parseInt(n(216)) -
              parseInt(n(231)) -
              parseInt(n(205)) +
              -parseInt(n(199)) * -parseInt(n(227))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Fi);
    var Vi = (function (t) {
        var e,
          n,
          i,
          r = Ni;
        function a(t) {
          var e = Ni;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(Ni(202));
            })(this, a),
            Mi(this, Gi(a)[e(217)](this, t))
          );
        }
        return (
          (function (t, e) {
            var n = Ni;
            if (typeof e !== n(213) && null !== e) throw new TypeError(n(240));
            (t.prototype = Object[n(244)](e && e[n(209)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Wi(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(198),
              value: function () {
                var t = r;
                return (
                  this[t(225)].cache[t(207)](t(233)) &&
                  this[t(225)][t(243)][t(207)](t(230))
                );
              },
            },
            {
              key: r(239),
              value: function () {
                var t = r;
                this[t(203)](0.8),
                  (this.background = this[t(244)](0, 0, t(233))),
                  (this[t(181)].x =
                    this[t(225)].width / 2 - this.background[t(224)] / 2),
                  (this[t(181)].y =
                    this.game.height / 2 - this[t(181)][t(179)] / 2),
                  (this[t(191)] = new it(this.game, 0, 0, t(186), t(221))),
                  this[t(191)][t(241)](
                    CyberInstance[t(247)][t(249)][t(175)](),
                    {
                      font: APP_FONT,
                      fill: "#ffffff",
                      fontWeight: 500,
                      fontSize: 26,
                    }
                  ),
                  (this[t(191)].x =
                    this[t(181)].width / 2 - this[t(191)][t(224)] / 2),
                  (this[t(191)].y =
                    this[t(181)][t(179)] - this[t(191)][t(179)] - 30),
                  this.inviteButton.click(this[t(238)], this),
                  this[t(181)][t(178)](this[t(191)]);
                var e = new Phaser[t(220)](
                  this[t(225)],
                  this[t(181)][t(224)] / 2,
                  135,
                  CyberInstance[t(247)][t(218)],
                  {
                    font: APP_FONT,
                    fontWeight: 500,
                    fontSize: 30,
                    fill: "#ffffff",
                    align: "center",
                  }
                );
                e[t(193)][t(228)](0.5, 0),
                  this[t(181)][t(178)](e),
                  this[t(196)](),
                  this[t(184)]();
              },
            },
            {
              key: r(238),
              value: function () {
                var t = r,
                  e = this;
                this.close(),
                  this[t(215)]({ closeTimer: 15e3 }),
                  FBInstant[t(177)]
                    [t(232)]()
                    .then(function () {
                      var n = t;
                      e[n(208)](), e[n(219)]();
                    })
                    [t(250)](function (n) {
                      e[t(208)]();
                    });
              },
            },
            {
              key: "updateAsync",
              value: function () {
                var t = r,
                  e = new di(game),
                  n = e[t(235)]();
                e[t(201)](),
                  FBInstant[t(219)]({
                    action: t(210),
                    cta: "Play",
                    image: n,
                    text:
                      '"' +
                      FBInstant[t(188)][t(200)]() +
                      '" ' +
                      CyberInstance[t(247)][t(195)],
                    template: t(211),
                    data: { guserid: CyberInstance[t(234)] },
                    strategy: t(236),
                    notification: t(183),
                  })[t(250)](function (t) {
                    console.log(t);
                  });
              },
            },
            {
              key: r(196),
              value: function () {
                var t = r,
                  e = this,
                  n = this.game[t(197)].sprite(0, 30, t(186), t(248));
                (n.x = this[t(181)].width - 101 - n[t(224)] / 2),
                  (n[t(237)] = !0),
                  n[t(223)][t(192)][t(229)](function () {
                    var n = t;
                    CyberInstance[n(187)].playButtonSound(), e[n(245)]();
                  }, this),
                  (this[t(246)] = n),
                  this[t(181)][t(178)](this[t(246)]);
              },
            },
          ]) && Li(e[Ni(209)], n),
          i && Li(e, i),
          a
        );
      })(x),
      Ui = [
        "vid_item",
        "height",
        "symbol",
        "instance",
        "vn_get_rewards",
        "kill",
        "make",
        "setText",
        "79615zCKoAB",
        "push",
        "icon_chip4",
        "ready",
        "550885kGbpGf",
        "icon_chip2",
        "prototype",
        "game",
        "buttonText",
        "anchor",
        "Daily ads limit reached. Come back later for more!",
        "updateData",
        "__proto__",
        "homeScreen",
        "chip",
        "WATCH_AD",
        "defineProperty",
        "lang",
        "70033kkEusr",
        "getPrototypeOf",
        "toUpperCase",
        "object",
        "checkImageKey",
        "addOverlay",
        "4IAicbH",
        "Super expression must either be null or a function",
        "constructor",
        "entries",
        "createView",
        "#e6ce3f",
        "REWARDED_POPUP_POSITION",
        "ADS_LEFT",
        "icon_chip1",
        "video_popop_watch_button",
        "addText",
        "en_get_rewards",
        "video_popop_watch_button_alpha",
        "onWatchClick",
        "826725PzORgR",
        "image",
        "visible",
        "setPrototypeOf",
        "vid_lock",
        "configurable",
        "setTo",
        "click",
        "switchToCurrentStyle",
        "addChild",
        "create",
        "sprite",
        "watchButton",
        "close",
        "301628PkyjPf",
        "text",
        "CLOSE",
        "length",
        "switchToCompleteStyle",
        "value",
        "loadTexture",
        "function",
        "icon_chip3",
        "callAll",
        "209156xAAKwB",
        "NHAN_THUONG_DESC",
        "isAssetReady",
        "enumerable",
        "video_button_close",
        "ADS_NOT_READY",
        "background",
        "watchCounter",
        "icon",
        "icon_chip5",
        "addEntry",
        "REWARD_ARRAY",
        "1LQrzuj",
        "adsLeft",
        "createTransition",
        "iterator",
        "videoPopup",
        "maxVideos",
        "width",
        "19341HAVITI",
        "cache",
        "updateEntry",
      ],
      zi = function (t, e) {
        return Ui[(t -= 228)];
      };
    function Hi(t) {
      var e = zi;
      return (Hi =
        typeof Symbol === e(296) && typeof Symbol[e(314)] === e(231)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(296) &&
                t[n(263)] === Symbol &&
                t !== Symbol[n(243)]
                ? n(231)
                : typeof t;
            })(t);
    }
    function Xi(t, e) {
      for (var n = zi, i = 0; i < e[n(292)]; i++) {
        var r = e[i];
        (r[n(302)] = r[n(302)] || !1),
          (r[n(280)] = !0),
          n(294) in r && (r.writable = !0),
          Object[n(253)](t, r.key, r);
      }
    }
    function Ji(t, e) {
      var n = zi;
      return !e || (Hi(e) !== n(258) && typeof e !== n(296))
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function qi(t) {
      var e = zi;
      return (qi = Object[e(278)]
        ? Object[e(256)]
        : function (t) {
            var n = e;
            return t[n(249)] || Object[n(256)](t);
          })(t);
    }
    function Ki(t, e) {
      return (Ki =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t[zi(249)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = zi; ; )
        try {
          if (
            296028 ===
            -parseInt(n(255)) +
              -parseInt(n(318)) * -parseInt(n(261)) +
              parseInt(n(289)) +
              -parseInt(n(237)) +
              -parseInt(n(311)) * parseInt(n(299)) +
              -parseInt(n(241)) +
              parseInt(n(275))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Ui);
    var Yi = (function (t) {
        var e,
          n,
          i,
          r = zi;
        function a(t) {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            Ji(this, qi(a).call(this, t))
          );
        }
        return (
          (function (t, e) {
            var n = zi;
            if (typeof e !== n(296) && null !== e) throw new TypeError(n(262));
            (t[n(243)] = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Ki(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(301),
              value: function () {
                var t = r;
                return this.game[t(319)][t(259)](t(315));
              },
            },
            {
              key: r(265),
              value: function () {
                var t = r;
                if (
                  (this[t(260)](0.8),
                  (this.background = this[t(285)](
                    0,
                    0,
                    t(315),
                    "video_popup_bg"
                  )),
                  (this[t(305)].x =
                    this.game[t(317)] / 2 - this[t(305)].width / 2),
                  (this[t(305)].y =
                    this[t(244)][t(230)] / 2 - this[t(305)][t(230)] / 2),
                  "vn" == CyberInstance.langCode)
                ) {
                  var e = this[t(244)].make[t(276)](325, 68, t(315), t(233));
                  this.background.addChild(e);
                } else {
                  var n = this.game[t(235)].image(325, 73, t(315), t(272));
                  this[t(305)][t(284)](n);
                }
                var i = this[t(244)][t(235)][t(290)](
                  this.background.width / 2,
                  137,
                  CyberInstance[t(254)][t(300)],
                  {
                    font: APP_FONT,
                    fill: "#98d2ff",
                    fontWeight: 400,
                    fontSize: 18,
                  }
                );
                i.anchor[t(281)](0.5, 0), this[t(305)][t(284)](i);
                var a = this[t(244)][t(235)][t(276)](
                  0,
                  172,
                  t(315),
                  "video_amount_bg"
                );
                (a.x = this[t(305)].width / 2 - a[t(317)] / 2),
                  (this[t(312)] = this.game.make[t(290)](
                    a.width / 2,
                    a[t(230)] / 2,
                    CyberInstance[t(254)][t(268)] + pt[t(232)][t(316)],
                    {
                      font: APP_FONT,
                      fill: t(266),
                      fontWeight: 500,
                      fontSize: 24,
                    }
                  )),
                  this[t(312)][t(246)][t(281)](0.5),
                  a[t(284)](this[t(312)]),
                  this.background[t(284)](a);
                var o = new it(this.game, 0, 95, t(250), t(303));
                (o.x = this.background[t(317)] - o[t(317)] - 15),
                  o[t(282)](this.close, this),
                  this[t(305)][t(284)](o);
                var s = new it(
                  this.game,
                  0,
                  0,
                  t(250),
                  "video_popop_watch_button_alpha"
                );
                (s.x = this[t(305)].width / 2 - s[t(317)] / 2),
                  (s.y = this[t(305)][t(230)] - s[t(230)] - 15),
                  s[t(271)](CyberInstance.lang[t(252)][t(257)](), {
                    font: APP_FONT,
                    fill: "#ffffff",
                    fontWeight: 500,
                    fontSize: 26,
                  }),
                  (s.buttonText.y = s[t(230)] / 2),
                  s.buttonText[t(246)][t(281)](0, 0.5);
                var u = this.game[t(235)].sprite(
                  60,
                  12,
                  "homeScreen",
                  "rw_icon"
                );
                s[t(284)](u),
                  (s[t(245)].x = u.x + u.width + 20),
                  s[t(282)](this[t(274)], this),
                  this[t(305)][t(284)](s),
                  (this[t(287)] = s),
                  (this[t(264)] = []);
                for (var c = 0; c < 5; c++) {
                  var h = this[t(309)]();
                  this.entries[t(238)](h);
                }
                for (
                  var l = this[t(305)][t(317)] / 2 - 425 - 25, f = 0;
                  f < 5;
                  f++
                )
                  (this[t(264)][f].x = l), (l += 175);
                this[t(248)](), this[t(313)]();
              },
            },
            {
              key: r(274),
              value: function () {
                var t = r;
                pt[t(232)][t(240)]
                  ? this[t(306)] < pt[t(232)][t(316)]
                    ? (pt[t(232)].show(pt[t(267)]), this[t(288)]())
                    : new G(game, {
                        text: t(247),
                        buttonText: CyberInstance.lang[t(291)],
                        hideCloseButton: !0,
                      })
                  : (new G(game, {
                      text: CyberInstance[t(254)][t(304)],
                      buttonText: CyberInstance[t(254)][t(291)],
                      hideCloseButton: !0,
                    }),
                    this[t(288)]());
              },
            },
            {
              key: "updateData",
              value: function () {
                var t = r;
                (this[t(306)] = pt[t(232)][t(306)]),
                  this[t(306)] > pt[t(232)].maxVideos &&
                    (this[t(306)] = pt[t(232)][t(316)]);
                var e = this[t(306)] < 5 ? 0 : this.watchCounter - 4;
                this.watchCounter == pt[t(232)][t(316)] &&
                  (e = this[t(306)] - 5);
                for (var n = 0, i = -1; n < 5; ) {
                  var a = e < 5 ? pt[t(310)][e] : pt[t(310)][4];
                  this[t(228)](n, a),
                    e <= this[t(306)] - 1
                      ? this[t(293)](n)
                      : -1 == i && (i = n),
                    n++,
                    e++;
                }
                this[t(306)] < 10 && this[t(283)](i),
                  this[t(312)][t(236)](
                    CyberInstance.lang.ADS_LEFT +
                      (pt[t(232)][t(316)] - this[t(306)])
                  ),
                  this.watchButton[t(295)](
                    t(250),
                    pt[t(232)][t(240)] ? t(270) : t(273)
                  );
              },
            },
            {
              key: "updateEntry",
              value: function (t, e) {
                var n = r;
                if (t < 5) {
                  var i = n(269);
                  switch (e) {
                    case 5e4:
                      i = n(269);
                      break;
                    case 1e5:
                      i = n(242);
                      break;
                    case 2e5:
                      i = n(297);
                      break;
                    case 3e5:
                      i = n(239);
                      break;
                    case 5e5:
                      i = n(308);
                  }
                  this[n(264)][t][n(251)].loadTexture("videoPopup", i),
                    this[n(264)][t][n(290)][n(236)](f.formatCoinWithCommas(e));
                }
              },
            },
            {
              key: r(293),
              value: function (t) {
                var e = r;
                this[e(264)][t][e(307)][e(295)]("videoPopup", "vid_complete");
              },
            },
            {
              key: r(283),
              value: function (t) {
                var e = r;
                this[e(264)][t].icon.loadTexture(e(315), "vid_current");
              },
            },
            {
              key: r(309),
              value: function () {
                var t = r,
                  e = this[t(244)][t(235)][t(286)](0, 225, t(315), t(229));
                this.background.addChild(e);
                var n = this[t(244)].make[t(286)](
                  e[t(317)] / 2,
                  e[t(230)] / 2 - 10,
                  "videoPopup",
                  t(269)
                );
                n[t(246)].setTo(0.5), e[t(284)](n), (e[t(251)] = n);
                var i = this[t(244)][t(235)][t(290)](
                  e[t(317)] / 2,
                  e[t(230)] - 40,
                  "",
                  {
                    font: APP_FONT,
                    fill: t(266),
                    fontWeight: 500,
                    fontSize: 24,
                  }
                );
                i.anchor.setTo(0.5, 0), e.addChild(i), (e[t(290)] = i);
                var a = this.game[t(235)][t(286)](0, 0, "videoPopup", t(279));
                return e.addChild(a), (e.icon = a), e;
              },
            },
            {
              key: "open",
              value: function () {
                var t = r;
                0 == this[t(277)] &&
                  ((this.visible = !0),
                  this[t(298)]("revive"),
                  this[t(248)](),
                  this[t(313)]());
              },
            },
            {
              key: r(288),
              value: function () {
                var t = r;
                1 == this.visible &&
                  (this[t(298)](t(234)), (this[t(277)] = !1));
              },
            },
          ]) && Xi(e[zi(243)], n),
          i && Xi(e, i),
          a
        );
      })(x),
      Zi = [
        "addText",
        "10141hQfJWE",
        "length",
        "click",
        "playButtonSound",
        "isAssetReady",
        "defineProperty",
        "233nxtmjH",
        "bg_popup_medium_484x292",
        "CLOSE",
        "key",
        "sprite",
        "290014SJMfDi",
        "events",
        "#9ecbe2",
        "closeButton",
        "make",
        "constructor",
        "function",
        "getPrototypeOf",
        "1tNGUjf",
        "setTo",
        "addOnce",
        "center",
        "anchor",
        "middle",
        "3707imbKfL",
        "enumerable",
        "homeScreen",
        "9281OFrWzY",
        "toUpperCase",
        "314081FcXZOr",
        "background",
        "112txLUqW",
        "create",
        "ADS_NOT_READY",
        "NHAN_QUA",
        "addOverlay",
        "object",
        "prototype",
        "call",
        "THONG_BAO",
        "button_close",
        "instance",
        "setPrototypeOf",
        "buttonText",
        "Super expression must either be null or a function",
        "Cannot call a class as a function",
        "5RDWoZc",
        "text",
        "onWatchClick",
        "onInputDown",
        "rw_icon",
        "__proto__",
        "configurable",
        "52fheMXl",
        "lang",
        "video_popop_watch_button",
        "createTransition",
        "game",
        "value",
        "1077284GHxDwV",
        "symbol",
        "#ffffff",
        "558921scJsOn",
        "width",
        "close",
        "addBackground",
        "addChild",
        "height",
      ],
      Qi = function (t, e) {
        return Zi[(t -= 197)];
      };
    function $i(t) {
      var e = Qi;
      return ($i =
        typeof Symbol === e(253) && typeof Symbol.iterator === e(227)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(253) &&
                t[n(252)] === Symbol &&
                t !== Symbol.prototype
                ? n(227)
                : typeof t;
            })(t);
    }
    function tr(t, e) {
      for (var n = Qi, i = 0; i < e[n(237)]; i++) {
        var r = e[i];
        (r[n(262)] = r[n(262)] || !1),
          (r[n(219)] = !0),
          n(225) in r && (r.writable = !0),
          Object[n(241)](t, r[n(245)], r);
      }
    }
    function er(t, e) {
      var n = Qi;
      return !e || ($i(e) !== n(203) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function nr(t) {
      var e = Qi;
      return (nr = Object[e(209)]
        ? Object[e(254)]
        : function (t) {
            return t[e(218)] || Object.getPrototypeOf(t);
          })(t);
    }
    function ir(t, e) {
      return (ir =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t[Qi(218)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Qi; ; )
        try {
          if (
            927287 ===
            parseInt(n(198)) * parseInt(n(264)) +
              parseInt(n(213)) * parseInt(n(266)) -
              parseInt(n(229)) +
              parseInt(n(220)) * parseInt(n(236)) +
              parseInt(n(261)) * -parseInt(n(242)) +
              -parseInt(n(255)) * parseInt(n(226)) +
              parseInt(n(247))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Zi);
    var rr = (function (t) {
        var e,
          n,
          i,
          r = Qi;
        function a(t) {
          var e = Qi;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(Qi(212));
            })(this, a),
            er(this, nr(a)[e(205)](this, t))
          );
        }
        return (
          (function (t, e) {
            var n = Qi;
            if (typeof e !== n(253) && null !== e) throw new TypeError(n(211));
            (t[n(204)] = Object[n(199)](e && e[n(204)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && ir(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: "createView",
              value: function () {
                var t = Qi,
                  e = this;
                this[t(202)](0.7), this[t(232)]("homeScreen", t(243));
                var n = this[t(224)][t(251)][t(214)](
                  this[t(197)][t(230)] / 2,
                  15,
                  CyberInstance[t(221)][t(206)][t(265)](),
                  {
                    font: APP_FONT,
                    fontSize: 30,
                    fill: t(228),
                    fontWeight: "bold",
                  }
                );
                n[t(259)][t(256)](0.5, 0), this.background[t(233)](n);
                var i = this[t(224)][t(251)][t(214)](
                  52,
                  94,
                  CyberInstance[t(221)].FREE_SPIN,
                  {
                    font: APP_FONT,
                    fontSize: 26,
                    fill: t(249),
                    fontWeight: 400,
                    wordWrap: !0,
                    wordWrapWidth: 598,
                    align: t(258),
                    boundsAlignH: t(258),
                    boundsAlignV: t(260),
                  }
                );
                i.setTextBounds(0, 0, 598, 210), this[t(197)].addChild(i);
                var r = new it(this.game, 0, 0, t(263), t(222));
                (r.x = this.background[t(230)] / 2 - r[t(230)] / 2),
                  (r.y = this[t(197)][t(234)] - r[t(234)] - 30),
                  r[t(235)](CyberInstance[t(221)][t(201)]),
                  this.background.addChild(r),
                  r[t(210)][t(259)][t(256)](0, 0.5);
                var a = this[t(224)][t(251)].sprite(55, 12, t(263), t(217));
                r[t(233)](a),
                  (r[t(210)].x = a.x + a[t(230)] + 10),
                  r[t(238)](this[t(215)], this),
                  (this[t(250)] = this.game[t(251)][t(246)](
                    0,
                    0,
                    t(263),
                    t(207)
                  )),
                  (this[t(250)].x =
                    this.background[t(230)] - this[t(250)][t(230)] / 2 - 10),
                  (this[t(250)].y = -12),
                  (this.closeButton.inputEnabled = !0),
                  this.closeButton[t(248)][t(216)][t(257)](function () {
                    var n = t;
                    CyberInstance.sound[n(239)](), e[n(231)]();
                  }, this),
                  this[t(197)][t(233)](this.closeButton),
                  this[t(223)]();
              },
            },
            {
              key: r(215),
              value: function () {
                var t = r;
                pt.instance.ready
                  ? pt[t(208)].show(pt.SPIN_POSITION)
                  : new G(game, {
                      text: CyberInstance[t(221)][t(200)],
                      buttonText: CyberInstance[t(221)][t(244)],
                      hideCloseButton: !0,
                    }),
                  this[t(231)]();
              },
            },
            {
              key: r(240),
              value: function () {
                return !0;
              },
            },
          ]) && tr(e.prototype, n),
          i && tr(e, i),
          a
        );
      })(x),
      ar = [
        "showChatBadge",
        "12503VSoxwU",
        "2PzWazZ",
        "state",
        "text",
        "prototype",
        "_icon_leaderboard",
        "2hTDMCI",
        "185562vrrAle",
        "anchor",
        "GIFT_TIME",
        "collectTime",
        "width",
        "screen",
        "onSpinWheelResponse",
        "SPIN",
        "spin",
        "closeVideoLoading",
        "spinWatched",
        "openLoaderboardPopup",
        "175639GWoMte",
        "setText",
        "lang",
        "add",
        "openLobbyScreen",
        "current",
        "LeaderboardScreen",
        "_icon_gift",
        "start",
        "spinBtn",
        "#8c3610",
        "spinText",
        "height",
        "maxVideos",
        "substr",
        "open",
        "floor",
        "spinCounter",
        "openSpinPopup",
        "alpha",
        "hideChatBadge",
        "click",
        " : ",
        "27599uSDgnG",
        "51JwSFcy",
        "configurable",
        "sprite",
        "enumerable",
        "597799kyWfgP",
        "bottomBg",
        "videoPopup",
        "7354EtxEaq",
        "spin_bg",
        "closeLoadingPopup",
        "rewardVideoBadge",
        "setTo",
        "visible",
        "8yAQpem",
        "homeScreen",
        "instance",
        "writable",
        "1qhFRzy",
        "WATCH AD",
        "ready",
        "openRewardVideoPopup",
        "rewardVideoButton",
        "updateSpinTimer",
        "container",
        "spinPopup",
        "game",
        "LobbyScreen",
        "defineProperty",
        "openPublicChat",
        "formatTime",
        "updateVideoBadge",
        "57052uCQVgW",
        "langCode",
      ],
      or = function (t, e) {
        return ar[(t -= 261)];
      };
    function sr(t, e) {
      for (var n = or, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(292)] = r[n(292)] || !1),
          (r[n(290)] = !0),
          "value" in r && (r[n(305)] = !0),
          Object[n(316)](t, r.key, r);
      }
    }
    !(function (t, e) {
      for (var n = or; ; )
        try {
          if (
            350119 ===
            parseInt(n(265)) +
              parseInt(n(288)) * parseInt(n(302)) +
              -parseInt(n(306)) * parseInt(n(293)) +
              -parseInt(n(323)) * -parseInt(n(289)) +
              -parseInt(n(330)) +
              -parseInt(n(329)) * parseInt(n(296)) +
              -parseInt(n(320)) * -parseInt(n(324))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(ar);
    var ur = (function () {
        var t,
          e,
          n,
          i = or;
        function r(t) {
          var e = or;
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, r),
            (this[e(335)] = t),
            (this.game = t.game),
            (this[e(312)] = t.container);
          var n = new it(
            this[e(314)],
            this.screen[e(294)].x + 40,
            0,
            e(303),
            CyberInstance[e(321)] + "_icon_invite"
          );
          (n.y = this[e(314)].height - n.height - 10),
            n[e(286)](this.openInvitePopup, this),
            this[e(312)].add(n);
          var i = new it(
            this[e(314)],
            n.x + n[e(334)] + 40,
            0,
            "homeScreen",
            CyberInstance.langCode + e(328)
          );
          (i.y =
            "vn" == CyberInstance[e(321)]
              ? this[e(314)][e(277)] - i[e(277)] - 15
              : this[e(314)][e(277)] - i[e(277)] - 11),
            i[e(286)](this[e(264)], this),
            this[e(312)][e(268)](i);
          var a = new it(
            this[e(314)],
            i.x + i.width + 40,
            0,
            e(303),
            CyberInstance[e(321)] + e(272)
          );
          (a.y = this[e(314)][e(277)] - a.height - 12),
            a[e(286)](this.openRewardVideoPopup, this),
            this[e(312)][e(268)](a),
            (this[e(310)] = a),
            (this[e(310)][e(284)] = 0.5),
            (this[e(299)] = this[e(314)].make[e(291)](
              0,
              0,
              e(303),
              "icon_chat_count"
            )),
            (this[e(299)].x =
              "vn" == CyberInstance[e(321)]
                ? a.x + a.width - this[e(299)].width / 2 - 17
                : a.x + a.width - this[e(299)].width / 2 - 5),
            (this.rewardVideoBadge.y = a.y - this[e(299)].height / 2 + 6),
            this.container[e(268)](this.rewardVideoBadge),
            (this[e(299)].visible = !1);
          var o = new it(
            this.game,
            0,
            0,
            e(303),
            CyberInstance[e(321)] + "_lobby_button"
          );
          if (
            ((o.x =
              this.screen[e(294)].x +
              this[e(335)][e(294)][e(334)] -
              o[e(334)] -
              40),
            (o.y = this.game.height - o[e(277)] - 10),
            o[e(286)](this[e(269)], this),
            this[e(312)][e(268)](o),
            (this[e(274)] = new it(this[e(314)], 0, 0, e(303), e(297))),
            (this[e(274)].x =
              this[e(314)][e(334)] / 2 - this[e(274)][e(334)] / 2),
            (this[e(274)].y = this.game[e(277)] - this[e(274)][e(277)]),
            this[e(274)].click(this.openSpinPopup, this),
            this.container[e(268)](this[e(274)]),
            (this[e(276)] = this.game[e(268)][e(326)](
              this[e(314)].width / 2,
              this[e(314)][e(277)] - 40,
              CyberInstance[e(267)].SPIN,
              { font: APP_FONT, fontSize: 22, fill: e(275), fontWeight: 700 }
            )),
            this[e(276)][e(331)][e(300)](0.5, 0),
            this.container[e(268)](this[e(276)]),
            CyberGlobalData[e(333)] < B.GIFT_TIME)
          ) {
            var s = B.GIFT_TIME - CyberGlobalData.collectTime;
            this[e(276)][e(266)](this[e(318)](s));
          }
          pt[e(304)][e(308)] &&
            pt.instance[e(282)] < 2 &&
            B[e(332)] - CyberGlobalData[e(333)] > 500 &&
            this[e(276)].setText(e(307)),
            this.updateVideoBadge();
        }
        return (
          (t = r),
          (e = [
            {
              key: i(311),
              value: function (t) {
                var e = i;
                t < B.GIFT_TIME
                  ? this.spinText[e(266)](this[e(318)](B.GIFT_TIME - t))
                  : this.spinText.setText(CyberInstance.lang[e(337)]);
              },
            },
            {
              key: i(283),
              value: function () {
                var t = i;
                CyberGlobalData[t(333)] < B.GIFT_TIME &&
                  this.spinText[t(266)](
                    this[t(318)](B[t(332)] - CyberGlobalData.collectTime)
                  ),
                  !0 === CyberGlobalData[t(263)]
                    ? (this[t(313)] = new Ri(this[t(314)]))
                    : CyberGlobalData[t(333)] >= B[t(332)]
                    ? (this.spinPopup = new Ri(this[t(314)]))
                    : pt[t(304)].ready &&
                      pt[t(304)][t(282)] < 2 &&
                      B[t(332)] - CyberGlobalData[t(333)] > 500 &&
                      new rr(game);
              },
            },
            {
              key: i(261),
              value: function (t) {
                var e = i;
                this[e(313)] && this[e(313)][e(336)](t);
              },
            },
            { key: i(322), value: function () {} },
            { key: i(285), value: function () {} },
            { key: i(317), value: function () {} },
            {
              key: i(269),
              value: function () {
                var t = i;
                this.game[t(325)].current != t(315) &&
                  this[t(314)].state[t(273)](t(315), !0, !1);
              },
            },
            {
              key: "openInvitePopup",
              value: function () {
                new Vi(this[i(314)]);
              },
            },
            {
              key: "openLoaderboardPopup",
              value: function () {
                var t = i;
                this[t(314)][t(325)][t(270)] != t(271) &&
                  this[t(314)][t(325)][t(273)](t(271), !0, !1);
              },
            },
            {
              key: i(309),
              value: function () {
                var t = i;
                this[t(295)]
                  ? this.videoPopup[t(280)]()
                  : (this.videoPopup = new Yi(this[t(314)]));
              },
            },
            {
              key: i(319),
              value: function () {
                var t = i;
                pt[t(304)][t(308)]
                  ? pt.instance[t(278)] - pt.instance.watchCounter > 0
                    ? 0 == this[t(299)][t(301)] &&
                      ((this[t(299)].visible = !0), (this[t(310)][t(284)] = 1))
                    : ((this.rewardVideoBadge[t(301)] = !1),
                      (this.rewardVideoButton.alpha = 0.5))
                  : ((this[t(299)][t(301)] = !1), (this[t(310)][t(284)] = 0.5));
              },
            },
            {
              key: i(262),
              value: function () {
                var t = i;
                this[t(295)] && this[t(295)][t(298)]();
              },
            },
            {
              key: "formatTime",
              value: function (t) {
                var e = i,
                  n = "0" + Math[e(281)](t / 60 / 60),
                  r = "0" + Math[e(281)]((t - 60 * n * 60) / 60);
                return n[e(279)](-2) + e(287) + r[e(279)](-2);
              },
            },
          ]) && sr(t[or(327)], e),
          n && sr(t, n),
          r
        );
      })(),
      cr = [
        "onClick",
        "Super expression must either be null or a function",
        "create",
        "destroy",
        "get",
        "setPrototypeOf",
        "1387119PkVmCK",
        "symbol",
        "getPrototypeOf",
        "prototype",
        "homeScreen",
        "game",
        "removeAll",
        "function",
        "2705yzMlqk",
        "key",
        "object",
        "dispatchAllowed",
        "setTo",
        "enableTimeout",
        "call",
        "configurable",
        "211sEobKh",
        "inputEnabled",
        "undefined",
        "570gWPXOq",
        "131737LUKbEX",
        "writable",
        "anchor",
        "221253peuESE",
        "239OpNoDk",
        "addChild",
        "getOwnPropertyDescriptor",
        "events",
        "663438jOVmVi",
        "length",
        "1lVfsbe",
        "width",
        "constructor",
        "Sprite",
        "value",
        "play_now",
        "Cannot call a class as a function",
        "541700cKGJmw",
        "enumerable",
        "click",
        "__proto__",
        "add",
        "image",
      ],
      hr = function (t, e) {
        return cr[(t -= 309)];
      },
      lr = hr;
    function fr(t) {
      var e = hr;
      return (fr =
        typeof Symbol === e(343) && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(343) &&
                t[n(319)] === Symbol &&
                t !== Symbol.prototype
                ? n(337)
                : typeof t;
            })(t);
    }
    function pr(t, e) {
      for (var n = hr, i = 0; i < e[n(316)]; i++) {
        var r = e[i];
        (r[n(325)] = r.enumerable || !1),
          (r[n(351)] = !0),
          n(321) in r && (r[n(357)] = !0),
          Object.defineProperty(t, r[n(345)], r);
      }
    }
    function dr(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function yr(t, e, n) {
      var i = hr;
      return (yr =
        typeof Reflect !== i(354) && Reflect[i(334)]
          ? Reflect[i(334)]
          : function (t, e, n) {
              var r = i,
                a = (function (t, e) {
                  var n = hr;
                  for (
                    ;
                    !Object.prototype.hasOwnProperty[n(350)](t, e) &&
                    null !== (t = vr(t));

                  );
                  return t;
                })(t, e);
              if (a) {
                var o = Object[r(313)](a, e);
                return o[r(334)] ? o[r(334)][r(350)](n) : o[r(321)];
              }
            })(t, e, n || t);
    }
    function vr(t) {
      var e = hr;
      return (vr = Object[e(335)]
        ? Object[e(338)]
        : function (t) {
            return t[e(327)] || Object.getPrototypeOf(t);
          })(t);
    }
    function br(t, e) {
      return (br =
        Object[hr(335)] ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = hr; ; )
        try {
          if (
            342060 ===
            parseInt(n(355)) * -parseInt(n(311)) +
              -parseInt(n(317)) * parseInt(n(356)) +
              parseInt(n(315)) +
              parseInt(n(310)) +
              parseInt(n(324)) +
              parseInt(n(352)) * parseInt(n(344)) +
              -parseInt(n(336))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(cr);
    var gr = (function (t) {
        var e,
          n,
          i,
          r = hr;
        function a(t, e, n, i, r) {
          var o,
            s,
            u,
            c,
            h = hr;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(hr(323));
          })(this, a),
            (s = this),
            (u = vr(a)[h(350)](this, t, e, n, h(340), i)),
            (c = hr),
            ((o = !u || (fr(u) !== c(346) && typeof u !== c(343)) ? dr(s) : u)[
              h(347)
            ] = !0),
            (o[h(353)] = !0),
            (o[h(330)] = new Phaser.Signal()),
            (o[h(349)] = null),
            o[h(314)].onInputDown[h(328)](function () {
              var t = h;
              o[t(347)] &&
                ((o[t(347)] = !1),
                o[t(330)].dispatch(dr(o)),
                (o.enableTimeout = setTimeout(function () {
                  var e = t;
                  (o.enableTimeout = null), (o[e(347)] = !0);
                }, 1e3)));
            });
          var l = o[h(341)].make[h(329)](
            o[h(318)] / 2,
            "vn" == CyberInstance.langCode ? 320 : 335,
            h(340),
            CyberInstance.langCode + "_" + r
          );
          return (
            r == h(322) && (l.x = l.x + 13),
            l[h(309)][h(348)](0.5, 0),
            o[h(312)](l),
            o
          );
        }
        return (
          (function (t, e) {
            var n = hr;
            if (typeof e !== n(343) && null !== e) throw new TypeError(n(331));
            (t.prototype = Object[n(332)](e && e[n(339)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && br(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(326),
              value: function (t, e) {
                var n = r;
                this[n(330)][n(342)](), this[n(330)].add(t, e);
              },
            },
            {
              key: r(333),
              value: function () {
                var t = r;
                yr(vr(a[t(339)]), t(333), this)[t(350)](this, !0),
                  this[t(330)][t(342)](),
                  (this.onClick = null),
                  null != this[t(349)] &&
                    (clearTimeout(this[t(349)]), (this[t(349)] = null));
              },
            },
          ]) && pr(e[hr(339)], n),
          i && pr(e, i),
          a
        );
      })(Phaser[lr(320)]),
      mr = [
        "isArray",
        "85hftbiy",
        "key",
        "1CfLrHj",
        "updateScoreSlider",
        "push",
        "object",
        "atlasName",
        "prototype",
        "setPrototypeOf",
        "Signal",
        "length",
        "dispatch",
        "max",
        "680931wwyVOq",
        "enableDrag",
        "sliderControl",
        "createUI",
        "enumerable",
        "sliderSprite",
        "maxValue",
        "allowVerticalDrag",
        "writable",
        "112527eFXiYm",
        "add",
        "ratioMap",
        "sliderSpriteBar",
        "currentIndex",
        "fullWidth",
        "floor",
        "minValue",
        "events",
        "input",
        "call",
        "Group",
        "120947qpeUoC",
        "getCurrentDragX",
        "801725ulzQrD",
        "Super expression must either be null or a function",
        "this hasn't been initialised - super() hasn't been called",
        "onDragStop",
        "boundsRect",
        "1718KPATau",
        "constructor",
        "height",
        "getPrototypeOf",
        "iterator",
        "338RNwEjo",
        "width",
        "value",
        "ratioPoints",
        "__proto__",
        "crop",
        "sliderRectangle",
        "priorityID",
        "1114051wnbYcC",
        "addRatioInfo",
        "Cannot call a class as a function",
        "slideParams",
        "5BxQprn",
        "Rectangle",
        "onSlideChange",
        "function",
        "create",
        "7964BGdSPj",
        "onDragUpdate",
      ],
      Ir = function (t, e) {
        return mr[(t -= 498)];
      },
      wr = Ir;
    function Sr(t) {
      var e = Ir;
      return (Sr =
        typeof Symbol === e(562) && "symbol" == typeof Symbol[e(546)]
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t[e(543)] === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function kr(t, e) {
      for (var n = Ir, i = 0; i < e[n(511)]; i++) {
        var r = e[i];
        (r[n(518)] = r[n(518)] || !1),
          (r.configurable = !0),
          n(549) in r && (r[n(522)] = !0),
          Object.defineProperty(t, r[n(502)], r);
      }
    }
    function Cr(t, e) {
      var n = Ir;
      return !e || (Sr(e) !== n(506) && "function" != typeof e)
        ? (function (t) {
            var e = Ir;
            if (void 0 === t) throw new ReferenceError(e(539));
            return t;
          })(t)
        : e;
    }
    function Or(t) {
      var e = Ir;
      return (Or = Object[e(509)]
        ? Object[e(545)]
        : function (t) {
            var n = e;
            return t[n(551)] || Object[n(545)](t);
          })(t);
    }
    function Pr(t, e) {
      var n = Ir;
      return (Pr =
        Object[n(509)] ||
        function (t, e) {
          return (t[n(551)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Ir; ; )
        try {
          if (
            444913 ===
            parseInt(n(559)) * parseInt(n(535)) +
              -parseInt(n(542)) * parseInt(n(547)) +
              -parseInt(n(498)) * -parseInt(n(501)) -
              parseInt(n(514)) +
              parseInt(n(523)) +
              -parseInt(n(537)) * parseInt(n(503)) +
              parseInt(n(555))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(mr);
    var Tr = (function (t) {
        var e,
          n,
          i,
          r = Ir;
        function a(t, e, n, i) {
          var r,
            o = Ir;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(Ir(557));
            })(this, a),
            ((r = Cr(this, Or(a)[o(533)](this, t))).x = e),
            (r.y = n),
            (r[o(558)] = i),
            (r[o(530)] = i.minValue || 5),
            (r.maxValue = i[o(520)] || 500),
            (r[o(561)] = new Phaser[o(510)]()),
            r[o(517)](),
            (r[o(527)] = 0),
            (r[o(507)] = i[o(507)]),
            r
          );
        }
        return (
          (function (t, e) {
            var n = Ir;
            if (typeof e !== n(562) && null !== e) throw new TypeError(n(538));
            (t[n(508)] = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Pr(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(517),
              value: function () {
                var t = r;
                (this[t(519)] = this.create(
                  0,
                  0,
                  this[t(558)][t(502)],
                  this[t(558)][t(519)]
                )),
                  (this.sliderSpriteBar = this[t(563)](
                    this[t(519)].x,
                    this[t(519)].y,
                    this[t(558)].key,
                    this[t(558)][t(526)]
                  )),
                  (this[t(528)] = this.sliderSpriteBar[t(548)]),
                  (this[t(553)] = new Phaser[t(560)](
                    0,
                    0,
                    20,
                    this[t(526)][t(544)]
                  )),
                  this.sliderSpriteBar[t(552)](this[t(553)]),
                  (this[t(516)] = this[t(563)](
                    0,
                    -22,
                    this[t(558)][t(502)],
                    this[t(558)][t(516)]
                  )),
                  (this[t(516)].inputEnabled = !0),
                  this[t(516)].input[t(515)](!1),
                  (this[t(516)].input[t(521)] = !1),
                  (this[t(516)][t(532)][t(554)] = 1);
                var e = new Phaser[t(560)](
                  this[t(516)].x,
                  this[t(516)].y,
                  this[t(528)],
                  this[t(516)][t(544)]
                );
                (this[t(516)][t(532)][t(541)] = e),
                  this[t(516)][t(531)][t(499)][t(524)](this[t(499)], this),
                  this.sliderControl[t(531)][t(540)][t(524)](
                    this[t(540)],
                    this
                  ),
                  this[t(556)]();
              },
            },
            {
              key: "addRatioInfo",
              value: function () {
                var t = r,
                  e = this[t(558)][t(525)],
                  n = 0,
                  i = Math[t(529)](
                    (this[t(528)] - this[t(516)].width) / (e[t(511)] - 1)
                  );
                this[t(550)] = [];
                for (var a = 0; a < e.length; a++) {
                  var o = { value: e[a] };
                  0 == a
                    ? ((o.x = 0), (n = n + this.sliderControl[t(548)] / 2 + i))
                    : a == e[t(511)] - 1
                    ? (o.x = this.fullWidth - this.sliderControl[t(548)])
                    : ((o.x = n - this[t(516)][t(548)] / 2), (n += i)),
                    this[t(550)][t(505)](o);
                }
              },
            },
            {
              key: "addRatioInfov",
              value: function () {
                var t = r,
                  e = this.slideParams[t(525)],
                  n = e.length - 1,
                  i = 0,
                  a = Math[t(529)]((this[t(528)] + this[t(516)][t(548)]) / n);
                this[t(550)] = [];
                for (var o = 0; o < e[t(511)]; o++) {
                  var s = { value: e[o] };
                  o == n
                    ? ((s.x = i - this[t(516)][t(548)] + 3), (i -= 20))
                    : (s.x = o > 0 ? i - this.sliderControl.width / 2 : i),
                    this[t(550)][t(505)](s),
                    (i += a);
                }
              },
            },
            {
              key: r(504),
              value: function (t) {
                var e = r;
                if (
                  Array[e(500)](this.ratioPoints) &&
                  this[e(550)].length > 0
                ) {
                  for (var n = null, i = 0; i < this.ratioPoints[e(511)]; i++) {
                    if (
                      t >= this.ratioPoints[i].x &&
                      this[e(550)][i + 1] &&
                      t < this[e(550)][i + 1].x
                    ) {
                      t - this[e(550)][i].x < this[e(550)][i + 1].x - t
                        ? ((this[e(516)].x = this[e(550)][i].x),
                          (n = this[e(550)][i]),
                          (this.currentIndex = i))
                        : ((this[e(516)].x = this[e(550)][i + 1].x),
                          (n = this[e(550)][i + 1]),
                          (this[e(527)] = i + 1));
                      break;
                    }
                    t < 12 &&
                      ((this[e(516)].x = this[e(550)][0].x),
                      (n = this[e(550)][0]),
                      (this[e(527)] = 0));
                  }
                  var a = Math.max(0, this[e(516)].x) + 20;
                  this[e(553)][e(548)] != a &&
                    ((this[e(553)].width = a),
                    this[e(526)][e(552)](this[e(553)]),
                    this[e(561)][e(512)](n));
                }
              },
            },
            {
              key: "updateSlider",
              value: function (t) {
                var e = r;
                if (
                  Array[e(500)](this.ratioPoints) &&
                  this[e(550)][e(511)] > 0
                ) {
                  var n,
                    i = this[e(550)].length - 1;
                  (this[e(527)] += 1 * t),
                    (this[e(527)] = Math[e(513)](0, this[e(527)])),
                    (this.currentIndex = Math.min(i, this.currentIndex)),
                    (this[e(516)].x = this[e(550)][this[e(527)]].x),
                    (n = this[e(550)][this[e(527)]]),
                    (this[e(553)][e(548)] =
                      Math[e(513)](0, this[e(516)].x) + 20),
                    this.sliderSpriteBar[e(552)](this.sliderRectangle),
                    this[e(561)][e(512)](n);
                }
              },
            },
            {
              key: r(536),
              value: function () {
                return this[r(516)].x;
              },
            },
            {
              key: r(499),
              value: function (t, e, n, i, a) {
                this[r(504)](n);
              },
            },
            {
              key: r(540),
              value: function () {
                var t = r;
                this[t(504)](this[t(516)].x);
              },
            },
          ]) && kr(e[Ir(508)], n),
          i && kr(e, i),
          a
        );
      })(Phaser[wr(534)]),
      _r = [
        "frameName",
        "width",
        "__proto__",
        "radio_check",
        "330406elEgJT",
        "context",
        "#fdd043",
        "98707gxvPgX",
        "game",
        "14TayvhR",
        "value",
        "constructor",
        "26829EtHvVF",
        "create",
        "height",
        "existing",
        "onCheck",
        "text",
        "192343KRhwOx",
        "fill",
        "Cannot call a class as a function",
        "writable",
        "#7f7f7f",
        "key",
        "checked",
        "createLinearGradient",
        "157JodlCE",
        "#fef38a",
        "3ckfoki",
        "isChecked",
        "useHandCursor",
        "input",
        "this hasn't been initialised - super() hasn't been called",
        "check",
        "symbol",
        "addColorStop",
        "disable",
        "add",
        "1811hPMbYc",
        "configurable",
        "getPrototypeOf",
        "createGradient",
        "#b4bee2",
        "addChild",
        "75PYSYiP",
        "radioValue",
        "events",
        "radioGroup",
        "label",
        "radio_uncheck",
        "function",
        "394180wCqiwC",
        "setPrototypeOf",
        "inputEnabled",
        "undefined",
        "iterator",
        "2694oZBkFI",
        "prototype",
      ],
      xr = function (t, e) {
        return _r[(t -= 130)];
      };
    function Er(t) {
      var e = xr;
      return (Er =
        typeof Symbol === e(183) && typeof Symbol[e(130)] === e(167)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                "function" == typeof Symbol &&
                t[n(144)] === Symbol &&
                t !== Symbol[n(132)]
                ? n(167)
                : typeof t;
            })(t);
    }
    function jr(t, e) {
      for (var n = xr, i = 0; i < e.length; i++) {
        var r = e[i];
        (r.enumerable = r.enumerable || !1),
          (r[n(172)] = !0),
          n(143) in r && (r[n(154)] = !0),
          Object.defineProperty(t, r[n(156)], r);
      }
    }
    function Br(t) {
      var e = xr;
      return (Br = Object[e(185)]
        ? Object[e(173)]
        : function (t) {
            var n = e;
            return t[n(135)] || Object[n(173)](t);
          })(t);
    }
    function Ar(t) {
      if (void 0 === t) throw new ReferenceError(xr(165));
      return t;
    }
    function Rr(t, e) {
      var n = xr;
      return (Rr =
        Object[n(185)] ||
        function (t, e) {
          return (t[n(135)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = xr; ; )
        try {
          if (
            210073 ===
            parseInt(n(140)) +
              parseInt(n(171)) * parseInt(n(159)) +
              parseInt(n(145)) * -parseInt(n(142)) +
              -parseInt(n(131)) * parseInt(n(177)) +
              -parseInt(n(184)) +
              -parseInt(n(151)) +
              parseInt(n(137)) * parseInt(n(161))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(_r);
    var Fr = (function (t) {
        var e,
          n,
          i,
          r = xr;
        function a(t, e, n, i, r, o, s, u) {
          var c,
            h,
            l,
            f,
            p = xr;
          if (
            ((function (t, e) {
              if (!(t instanceof e)) throw new TypeError(xr(153));
            })(this, a),
            (h = this),
            (l = Br(a).call(this, t, e, n, i, p(182))),
            (f = xr),
            ((c =
              !l || ("object" !== Er(l) && typeof l !== f(183))
                ? Ar(h)
                : l).atlasName = i),
            c[p(141)][p(170)][p(148)](Ar(c)),
            typeof r != p(187))
          ) {
            c[p(178)] = r;
            e = c[p(134)] + 20;
            (c[p(181)] = c[p(141)][p(170)][p(150)](e, 12, o, {
              font: APP_FONT,
              fontSize: 36,
              fontWeight: "bold",
              fill: p(175),
            })),
              c[p(176)](c.label);
          }
          return (
            (c.inputEnabled = !0),
            (c[p(164)][p(163)] = !0),
            c[p(179)].onInputDown[p(170)](c[p(149)], Ar(c)),
            (c.radioGroup = s),
            c
          );
        }
        return (
          (function (t, e) {
            var n = xr;
            if (typeof e !== n(183) && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t[n(132)] = Object[n(146)](e && e[n(132)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Rr(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(149),
              value: function () {
                var t = r;
                if (!this[t(157)]) {
                  if (typeof this[t(180)] != t(187))
                    for (var e in this[t(180)]) this[t(180)][e].uncheck();
                  this.check();
                }
              },
            },
            {
              key: r(162),
              value: function () {
                return this[r(157)];
              },
            },
            {
              key: "uncheck",
              value: function () {
                var t = r;
                (this[t(157)] = !1), (this[t(133)] = "radio_uncheck");
              },
            },
            {
              key: r(166),
              value: function () {
                var t = r;
                (this.checked = !0), (this.frameName = t(136));
              },
            },
            {
              key: "getValue",
              value: function () {
                return this[r(178)];
              },
            },
            {
              key: r(174),
              value: function (t, e) {
                var n = r,
                  i = this[n(181)][n(138)][n(158)](
                    0,
                    0,
                    0,
                    this[n(181)][n(147)]
                  );
                i[n(168)](0, t || n(160)),
                  i.addColorStop(1, e || n(139)),
                  (this[n(181)][n(152)] = i);
              },
            },
            {
              key: r(169),
              value: function () {
                var t = r;
                (this[t(186)] = !1),
                  (this[t(133)] = t(182)),
                  (this[t(181)][t(152)] = t(155));
              },
            },
          ]) && jr(e[xr(132)], n),
          i && jr(e, i),
          a
        );
      })(Phaser.Sprite),
      Nr = [
        "create",
        "856245JCkVkf",
        "check",
        "lang",
        "#b4bee2",
        "672039EJDjqW",
        "increaseBet",
        "sound",
        "height",
        "push",
        "width",
        "721387JBcMNS",
        "function",
        "btnIncreaseBet",
        "maxUsers",
        "key",
        "1073VSNgPO",
        "game",
        "symbol",
        "onRadioCheck",
        "604191dGaqgs",
        "btnDecreaseBet",
        "betValue",
        "playerCounts",
        "btn_minus",
        "iterator",
        "text",
        "betTitle",
        "betValueText",
        "playerCountData",
        "add",
        "slider_bar",
        "Text",
        "addChild",
        "15653cJLyLz",
        "betSlider",
        "lobbyScreen",
        "Super expression must either be null or a function",
        "slider_control",
        "atlasName",
        "setText",
        "prototype",
        "decreaseBet",
        "playerCount",
        "set",
        "BET",
        "length",
        "parentWidth",
        "slider_trail",
        "betValueBg",
        "anchor",
        "events",
        "onInputDown",
        "87oCUaZF",
        "getPrototypeOf",
        "Group",
        "call",
        "updateSlider",
        "720414XEVSvh",
        "232tLMiCY",
        "playerCountTitle",
        "setPrototypeOf",
        "PLAYER_COUNT",
        "btn_plus",
        "value",
        "enumerable",
        "Cannot call a class as a function",
        "__proto__",
        "playButtonSound",
        "onSlideChange",
      ],
      Dr = function (t, e) {
        return Nr[(t -= 324)];
      },
      Lr = Dr;
    function Mr(t) {
      var e = Dr;
      return (Mr =
        typeof Symbol === e(376) && typeof Symbol[e(389)] === e(382)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(376) &&
                t.constructor === Symbol &&
                t !== Symbol[n(335)]
                ? "symbol"
                : typeof t;
            })(t);
    }
    function Gr(t, e) {
      for (var n = Dr, i = 0; i < e[n(340)]; i++) {
        var r = e[i];
        (r[n(359)] = r[n(359)] || !1),
          (r.configurable = !0),
          n(358) in r && (r.writable = !0),
          Object.defineProperty(t, r[n(379)], r);
      }
    }
    function Wr(t) {
      var e = Dr;
      return (Wr = Object[e(355)]
        ? Object[e(348)]
        : function (t) {
            var n = e;
            return t[n(361)] || Object[n(348)](t);
          })(t);
    }
    function Vr(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function Ur(t, e) {
      var n = Dr;
      return (Ur =
        Object[n(355)] ||
        function (t, e) {
          return (t[n(361)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Dr; ; )
        try {
          if (
            588931 ===
            parseInt(n(369)) +
              -parseInt(n(375)) +
              -parseInt(n(365)) +
              -parseInt(n(352)) +
              -parseInt(n(353)) * -parseInt(n(380)) +
              parseInt(n(384)) +
              parseInt(n(328)) * parseInt(n(347))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Nr);
    var zr = (function (t) {
        var e,
          n,
          i,
          r = Dr;
        function a(t, e) {
          var n,
            i,
            r,
            o,
            s = Dr;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(Dr(360));
          })(this, a),
            (i = this),
            (r = Wr(a)[s(350)](this, t)),
            (o = Dr),
            ((n =
              !r || ("object" !== Mr(r) && typeof r !== o(376)) ? Vr(i) : r)[
              s(341)
            ] = e),
            (n[s(333)] = s(330)),
            (n[s(386)] = 5e3),
            (n[s(337)] = CyberInstance[s(378)]),
            (n[s(391)] = new Phaser[s(326)](
              n[s(381)],
              80,
              13,
              CyberInstance[s(367)][s(339)] + ":",
              { font: APP_FONT, fontWeight: 500, fontSize: 26, fill: s(368) }
            )),
            n[s(324)](n[s(391)]),
            (n[s(343)] = n[s(364)](300, 0, n[s(333)], "value_bg")),
            (n[s(343)].x = e / 2 - n[s(343)][s(374)] / 2),
            (n[s(392)] = n[s(381)].add[s(390)](
              n[s(343)][s(374)] / 2,
              n[s(343)][s(372)] / 2 + 2,
              f.shortenLargeNumber(5e3),
              { font: APP_FONT, fontWeight: 500, fontSize: 30, fill: "#e2d290" }
            )),
            n[s(392)][s(344)][s(338)](0.5),
            n[s(343)][s(327)](n[s(392)]),
            (n[s(329)] = new Tr(
              n[s(381)],
              e / 2 - 330,
              n[s(343)].y + n.betValueBg[s(372)] + 40,
              {
                key: n.atlasName,
                sliderSprite: s(342),
                sliderSpriteBar: s(325),
                sliderControl: s(332),
                minValue: 5e3,
                maxValue: 1e6,
                slideType: 2,
                ratioMap: [
                  5e3, 1e4, 2e4, 5e4, 1e5, 2e5, 3e5, 5e5, 1e6, 2e6, 5e6,
                ],
              }
            )),
            n.add(n[s(329)]),
            n[s(329)][s(363)][s(324)](function (t) {
              var e = s;
              t &&
                t[e(358)] &&
                (n[e(392)][e(334)](f.shortenLargeNumber(t.value)),
                (n[e(386)] = t.value));
            }),
            (n.btnDecreaseBet = n.create(
              n[s(329)].x + 22,
              n[s(329)].y - 24,
              n.atlasName,
              s(388)
            )),
            (n[s(385)].x = n.betSlider.x - n[s(385)][s(374)] - 15),
            (n[s(385)].inputEnabled = !0),
            n[s(385)][s(345)].onInputDown.add(n[s(336)], Vr(n)),
            (n.btnIncreaseBet = n[s(364)](0, n[s(385)].y, n[s(333)], s(357))),
            (n[s(377)].x = e - n[s(377)][s(374)] - 15),
            (n[s(377)].inputEnabled = !0),
            n[s(377)][s(345)].onInputDown[s(324)](n[s(370)], Vr(n)),
            (n[s(354)] = n[s(381)][s(324)][s(390)](
              80,
              n[s(343)].y + n[s(343)][s(372)] + 160,
              CyberInstance[s(367)][s(356)] + ":",
              { font: APP_FONT, fontWeight: 500, fontSize: 26, fill: s(368) }
            )),
            n[s(324)](n[s(354)]),
            (n.playerCounts = []),
            (n[s(393)] = []);
          for (var u = 2; u <= CyberInstance.maxUsers; u++)
            n[s(393)][s(373)](u);
          for (
            var c = 220, h = n[s(343)].height + 140, l = 0;
            l < n[s(393)][s(340)];
            l++
          ) {
            var p = new Fr(
              n[s(381)],
              c,
              h,
              n.atlasName,
              n[s(393)][l],
              n[s(393)][l],
              n[s(387)],
              35
            );
            p[s(345)][s(346)][s(324)](n.onRadioCheck, Vr(n)),
              n[s(324)](p),
              n[s(387)][s(373)](p),
              n.playerCountData[l] == CyberInstance.maxUsers && p[s(366)](),
              (c += 190);
          }
          return n;
        }
        return (
          (function (t, e) {
            var n = Dr;
            if (typeof e !== n(376) && null !== e) throw new TypeError(n(331));
            (t[n(335)] = Object[n(364)](e && e[n(335)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Ur(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(336),
              value: function () {
                var t = r;
                CyberInstance[t(371)][t(362)](), this.betSlider[t(351)](-1);
              },
            },
            {
              key: r(370),
              value: function () {
                var t = r;
                CyberInstance[t(371)][t(362)](), this[t(329)][t(351)](1);
              },
            },
            {
              key: r(383),
              value: function (t) {
                var e = r;
                CyberInstance[e(371)][e(362)](), (this[e(337)] = t.getValue());
              },
            },
          ]) && Gr(e[Dr(335)], n),
          i && Gr(e, i),
          a
        );
      })(Phaser[Lr(349)]),
      Hr = [
        "toUpperCase",
        "408535EdxKgZ",
        "1134557JoTBUg",
        "click",
        "373654cPjqCD",
        "width",
        "call",
        "text",
        "homeScreen",
        "state",
        "add",
        "VAO_PHONG",
        "submitButton",
        "alpha",
        "setText",
        "events",
        "button_close",
        "slice",
        "#1b38b1",
        "closeLoadingPopup",
        "sound",
        "lobbyScreen",
        "NHAP_MA_PHONG",
        "addText",
        "Super expression must either be null or a function",
        "showNotEnoughMoneyToPlay",
        "setTo",
        "button_number",
        "Group",
        "object",
        "onInputDown",
        "height",
        "getCurrentState",
        "symbol",
        "clearButton",
        "length",
        "joinPrivateRoom",
        "visible",
        "popup_join_buton",
        "game",
        "setPrototypeOf",
        "117mVinpr",
        "lang",
        "canPlay",
        "playButtonSound",
        "1DYQVBg",
        "1631sQQLIf",
        "make",
        "419981ahkROI",
        "Cannot call a class as a function",
        "scale",
        "101ETsGOx",
        "find_room_input",
        "create",
        "__proto__",
        "number",
        "1385xaZvZR",
        "value",
        "inputText",
        "sprite",
        "instance",
        "openLoadingPopup",
        "function",
        "anchor",
        "prototype",
        "this hasn't been initialised - super() hasn't been called",
        "enumerable",
        "writable",
        "inputTextValue",
        "53VahjJu",
        "457OJuLxy",
        "getPrototypeOf",
        "joinRoom",
        "createButton",
        "configurable",
        "defineProperty",
      ],
      Xr = function (t, e) {
        return Hr[(t -= 314)];
      },
      Jr = Xr;
    function qr(t) {
      var e = Xr;
      return (qr =
        typeof Symbol === e(380) && typeof Symbol.iterator === e(351)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(380) &&
                t.constructor === Symbol &&
                t !== Symbol[n(382)]
                ? n(351)
                : typeof t;
            })(t);
    }
    function Kr(t, e) {
      for (var n = Xr, i = 0; i < e[n(353)]; i++) {
        var r = e[i];
        (r[n(384)] = r[n(384)] || !1),
          (r[n(316)] = !0),
          n(375) in r && (r[n(385)] = !0),
          Object[n(317)](t, r.key, r);
      }
    }
    function Yr(t) {
      var e = Xr;
      return (Yr = Object[e(358)]
        ? Object[e(389)]
        : function (t) {
            var n = e;
            return t[n(372)] || Object[n(389)](t);
          })(t);
    }
    function Zr(t) {
      if (void 0 === t) throw new ReferenceError(Xr(383));
      return t;
    }
    function Qr(t, e) {
      return (Qr =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t[Xr(372)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Xr; ; )
        try {
          if (
            676654 ===
            parseInt(n(364)) * -parseInt(n(388)) -
              parseInt(n(322)) +
              parseInt(n(319)) +
              parseInt(n(320)) +
              parseInt(n(369)) * -parseInt(n(387)) +
              -parseInt(n(374)) * parseInt(n(359)) +
              -parseInt(n(363)) * -parseInt(n(366))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Hr);
    var $r = (function (t) {
        var e,
          n,
          i,
          r = Xr;
        function a(t, e) {
          var n,
            i,
            r,
            o,
            s = Xr;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(Xr(367));
          })(this, a),
            (i = this),
            (r = Yr(a)[s(324)](this, t)),
            (o = Xr);
          var u = (n =
            !r || (qr(r) !== o(347) && "function" != typeof r) ? Zr(i) : r)[
            s(371)
          ](0, 0, s(339), s(370));
          (u.x = e / 2 - u[s(323)] / 2),
            (n[s(386)] = ""),
            (n[s(376)] = n.game[s(365)][s(325)](
              u.x + u[s(323)] / 2,
              u[s(349)] / 2 + 2,
              CyberInstance[s(360)].NHAP_MA_PHONG,
              { font: APP_FONT, fontWeight: 500, fontSize: 26, fill: "#7eadf5" }
            )),
            n.inputText[s(381)].setTo(0.5),
            n.add(n[s(376)]),
            (n.clearButton = new it(n[s(357)], 0, 0, s(326), s(334))),
            n.clearButton[s(368)][s(344)](0.7),
            (n[s(352)].x = u.x + u.width - n[s(352)][s(323)] - 10),
            (n[s(352)].y = u[s(349)] / 2 - n[s(352)][s(349)] / 2),
            n[s(352)].click(function () {
              var t = s;
              n[t(386)][t(353)] > 0 &&
                ((n[t(386)] = n.inputTextValue[t(335)](
                  0,
                  n[t(386)].length - 1
                )),
                0 == n[t(386)][t(353)]
                  ? (n[t(376)][t(332)](CyberInstance[t(360)][t(340)]),
                    (n[t(352)][t(355)] = !1),
                    (n[t(330)][t(331)] = 0.5))
                  : n[t(376)][t(332)](n[t(386)]));
            }, Zr(n)),
            n.add(n.clearButton),
            (n[s(352)][s(355)] = !1);
          for (
            var c = e / 2 - 352, h = c, l = u.y + u[s(349)] + 6, f = 1;
            f <= 12;
            f++
          ) {
            var p = void 0;
            f < 10
              ? (p = n.createButton(f))
              : 10 == f
              ? (p = n[s(315)]("*"))
              : 11 == f
              ? (p = n[s(315)]("0"))
              : 12 == f && (p = n.createButton("#")),
              (p.x = h),
              (p.y = l),
              3 == f || 6 == f || 9 == f ? ((h = c), (l += 64)) : (h += 238);
          }
          return (
            (l += 64),
            (n.submitButton = new it(
              n[s(357)],
              0,
              l + 10,
              "lobbyScreen",
              s(356)
            )),
            (n.submitButton.x = e / 2 - n[s(330)][s(323)] / 2),
            n[s(330)][s(341)](CyberInstance.lang[s(329)][s(318)]()),
            n.submitButton[s(321)](n[s(314)], Zr(n)),
            (n[s(330)][s(331)] = 0.5),
            n.add(n[s(330)]),
            n
          );
        }
        return (
          (function (t, e) {
            var n = Xr;
            if (typeof e !== n(380) && null !== e) throw new TypeError(n(342));
            (t.prototype = Object[n(371)](e && e[n(382)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Qr(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(314),
              value: function () {
                var t = r;
                if (this.inputTextValue[t(353)] > 0)
                  try {
                    if (jt[t(378)][t(361)]()) {
                      this.game[t(327)][t(350)]()[t(379)]();
                      var e = parseInt(this[t(386)]);
                      jt[t(378)][t(354)](e, !1);
                    } else G[t(343)]();
                  } catch (e) {
                    this[t(357)].state[t(350)]()[t(337)](), console.log(e);
                  }
              },
            },
            {
              key: r(315),
              value: function (t) {
                var e = r,
                  n = this,
                  i = this[e(357)][e(365)][e(377)](0, 0, "lobbyScreen", e(345));
                i[e(373)] = t;
                var a = this[e(357)][e(365)].text(
                  i.width / 2,
                  i[e(349)] / 2 + 2,
                  t,
                  {
                    font: APP_FONT,
                    fontWeight: 900,
                    fontSize: 34,
                    fill: e(336),
                  }
                );
                return (
                  a[e(381)].setTo(0.5),
                  i.addChild(a),
                  (i.inputEnabled = !0),
                  i[e(333)][e(348)][e(328)](function (t) {
                    var i = e;
                    CyberInstance[i(338)][i(362)](),
                      n[i(386)].length < 20 &&
                        (0 == n[i(386)][i(353)] &&
                          ((n[i(352)].visible = !0),
                          (n.submitButton[i(331)] = 1)),
                        (n[i(386)] += t[i(373)]),
                        n[i(376)][i(332)](n[i(386)]));
                  }),
                  this[e(328)](i),
                  i
                );
              },
            },
          ]) && Kr(e[Xr(382)], n),
          i && Kr(e, i),
          a
        );
      })(Phaser[Jr(346)]),
      ta = [
        "bet",
        "create",
        "popup_bg",
        "key",
        "object",
        "#ffffff",
        "lobbyScreen",
        "anchor",
        "onInputDown",
        "SEARCH_ROOM",
        "updateTabTextStyle",
        "this hasn't been initialised - super() hasn't been called",
        "betValue",
        "findGameForm",
        "createGame",
        "maxUsers",
        "value",
        "instance",
        "options",
        "Text",
        "prototype",
        "__proto__",
        "constructor",
        "addText",
        "528827rxGXky",
        "length",
        "addTabs",
        "#97b6ed",
        "addTextForTab",
        "1365311npQprR",
        "add",
        "cg_tab_bg",
        "iterator",
        "width",
        "make",
        "click",
        "writable",
        "close",
        "enumerable",
        "checkImageKey",
        "CREATE_GAME_TITLE",
        "isAssetReady",
        "3BqGWyZ",
        "cache",
        "sfs",
        "onCreate",
        "height",
        "paused",
        "setStyle",
        "loadTexture",
        "SFSObject",
        "canPlay",
        "game",
        "addOverlay",
        "createView",
        "visible",
        "defineProperty",
        "setPrototypeOf",
        "searchRoomTab",
        "closeButton",
        "cg_tab_tran",
        "197641SopHTr",
        "friendMode",
        "getPrototypeOf",
        "openLoadingPopup",
        "putLong",
        "toUpperCase",
        "5MznBMw",
        "state",
        "frameName",
        "inputEnabled",
        "setTo",
        "function",
        "1YvBJgL",
        "557537YciKIl",
        "getCurrentState",
        "Cannot call a class as a function",
        "ExtensionRequest",
        "playButtonSound",
        "createRoomTab",
        "219137HPlGQW",
        "buttonText",
        "call",
        "image",
        "events",
        "background",
        "addChild",
        "lang",
        "489954KKGwsg",
        "configurable",
        "sound",
        "5WRQlOX",
        "createGameForm",
        "Super expression must either be null or a function",
        "text",
        "269867CjxDhC",
        "sendRequest",
        "cg_tab",
        "btnCreate",
        "putBool",
      ],
      ea = function (t, e) {
        return ta[(t -= 489)];
      };
    function na(t) {
      var e = ea;
      return (na =
        "function" == typeof Symbol && "symbol" == typeof Symbol[e(547)]
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(587) &&
                t[n(537)] === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function ia(t, e) {
      for (var n = ea, i = 0; i < e[n(540)]; i++) {
        var r = e[i];
        (r.enumerable = r[n(553)] || !1),
          (r[n(504)] = !0),
          n(531) in r && (r[n(551)] = !0),
          Object[n(571)](t, r[n(518)], r);
      }
    }
    function ra(t, e) {
      var n = ea;
      return !e || (na(e) !== n(519) && typeof e !== n(587))
        ? (function (t) {
            var e = ea;
            if (void 0 === t) throw new ReferenceError(e(526));
            return t;
          })(t)
        : e;
    }
    function aa(t) {
      var e = ea;
      return (aa = Object.setPrototypeOf
        ? Object[e(578)]
        : function (t) {
            var n = e;
            return t[n(536)] || Object[n(578)](t);
          })(t);
    }
    function oa(t, e) {
      var n = ea;
      return (oa =
        Object[n(572)] ||
        function (t, e) {
          return (t[n(536)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = ea; ; )
        try {
          if (
            845306 ===
            parseInt(n(539)) +
              -parseInt(n(557)) * -parseInt(n(576)) +
              parseInt(n(495)) * parseInt(n(506)) +
              parseInt(n(489)) * -parseInt(n(588)) +
              parseInt(n(544)) +
              parseInt(n(510)) +
              parseInt(n(582)) * -parseInt(n(503))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(ta);
    var sa = (function (t) {
        var e,
          n,
          i,
          r = ea;
        function a(t, e) {
          var n = ea;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(ea(491));
            })(this, a),
            ra(this, aa(a)[n(497)](this, t, e))
          );
        }
        return (
          (function (t, e) {
            var n = ea;
            if (typeof e !== n(587) && null !== e) throw new TypeError(n(508));
            (t[n(535)] = Object.create(e && e[n(535)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && oa(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(556),
              value: function () {
                var t = r;
                return this[t(567)][t(558)][t(554)](t(521));
              },
            },
            {
              key: r(569),
              value: function () {
                var t = r;
                this[t(568)](0.8),
                  (this.background = this[t(516)](0, 0, t(521), t(517))),
                  (this.background.x =
                    this[t(567)].width / 2 - this.background[t(548)] / 2),
                  (this[t(500)].y =
                    this[t(567)][t(561)] / 2 - this.background[t(561)] / 2);
                var e = this[t(567)][t(545)][t(509)](
                  this[t(567)][t(548)] / 2,
                  this[t(500)].y + 45,
                  CyberInstance.lang[t(555)][t(581)](),
                  {
                    font: APP_FONT,
                    fontWeight: 500,
                    fontSize: 36,
                    fill: t(520),
                  }
                );
                e[t(522)][t(586)](0.5), this[t(545)](e);
                var n = 140;
                this.options &&
                  !0 === this.options[t(577)] &&
                  ((n = 120), this[t(541)](n), (n += 85)),
                  (this[t(507)] = new zr(
                    this[t(567)],
                    this.background[t(548)]
                  )),
                  (this[t(507)].y = n),
                  (this.createGameForm.x = this[t(500)].x),
                  this[t(545)](this[t(507)]),
                  (this[t(528)] = new $r(this[t(567)], this[t(500)][t(548)])),
                  (this[t(528)].y = n - 12),
                  (this.findGameForm.x = this[t(500)].x),
                  this.add(this[t(528)]),
                  (this[t(528)][t(570)] = !1),
                  (this[t(513)] = new it(
                    this[t(567)],
                    0,
                    0,
                    t(521),
                    "popup_create_buton"
                  )),
                  (this[t(513)].y =
                    this.background.y +
                    this[t(500)][t(561)] -
                    this[t(513)][t(561)] -
                    25),
                  this.btnCreate[t(538)](
                    CyberInstance[t(502)].CREATE_ROOM[t(581)]()
                  ),
                  (this[t(513)].x =
                    this.game[t(548)] / 2 - this[t(513)].width / 2),
                  this.btnCreate[t(550)](this[t(560)], this),
                  this.add(this[t(513)]),
                  (this.closeButton = new it(
                    this[t(567)],
                    0,
                    42,
                    "homeScreen",
                    "video_button_close"
                  )),
                  (this[t(574)].x =
                    this.background.x +
                    this[t(500)][t(548)] -
                    this.closeButton[t(548)] -
                    15),
                  this[t(574)][t(550)](this.close, this),
                  this.add(this[t(574)]);
              },
            },
            {
              key: "onCreate",
              value: function () {
                var t = r,
                  e = this;
                CyberInstance[t(562)] && (CyberInstance.paused = !1);
                var n = parseInt(this[t(507)][t(527)]);
                jt.instance[t(566)](n)
                  ? (this.game[t(583)]
                      [t(490)]()
                      [t(579)]({ disconnectTime: 15e3 }),
                    jt[t(511)](function () {
                      var n = t,
                        i = new SFS2X[n(565)]();
                      i[n(580)](n(515), parseInt(e[n(507)][n(527)])),
                        i.putInt(n(530), e.createGameForm.playerCount),
                        i[n(514)]("n", !0),
                        e[n(533)] &&
                          !0 === e[n(533)].friendMode &&
                          i[n(514)](n(577), !0),
                        jt[n(532)][n(559)].send(new SFS2X[n(492)](n(529), i));
                    }))
                  : G.showNotEnoughMoneyToJoin(n);
              },
            },
            {
              key: r(541),
              value: function (t) {
                var e = r,
                  n = this,
                  i = this[e(516)](0, t, "lobbyScreen", e(546));
                (i.x = this[e(567)].width / 2 - i[e(548)] / 2),
                  (this[e(494)] = this[e(567)].make.image(
                    0,
                    0,
                    e(521),
                    e(512)
                  )),
                  i[e(501)](this[e(494)]),
                  (this[e(573)] = this.game[e(549)][e(498)](
                    i.width / 2,
                    0,
                    e(521),
                    e(575)
                  )),
                  i.addChild(this.searchRoomTab),
                  this[e(543)](this[e(494)], CyberInstance[e(502)].CREATE_ROOM),
                  (this[e(494)][e(585)] = !0),
                  this[e(494)][e(499)][e(523)][e(545)](function () {
                    var t = e;
                    "cg_tab_tran" == n[t(494)][t(584)] &&
                      (CyberInstance[t(505)][t(493)](),
                      n.createRoomTab[t(564)]("lobbyScreen", "cg_tab"),
                      n[t(573)][t(564)](t(521), t(575)),
                      (n[t(507)][t(570)] = !0),
                      (n[t(513)][t(570)] = !0),
                      (n.findGameForm[t(570)] = !1),
                      n[t(525)]());
                  }),
                  this[e(543)](this.searchRoomTab, CyberInstance.lang[e(524)]),
                  (this[e(573)][e(585)] = !0),
                  this[e(573)][e(499)][e(523)][e(545)](function () {
                    var t = e;
                    n[t(573)].frameName == t(575) &&
                      (CyberInstance[t(505)].playButtonSound(),
                      n[t(494)][t(564)](t(521), t(575)),
                      n[t(573)][t(564)]("lobbyScreen", t(512)),
                      (n.createGameForm[t(570)] = !1),
                      (n[t(513)][t(570)] = !1),
                      (n.findGameForm[t(570)] = !0),
                      n.updateTabTextStyle());
                  }),
                  this.updateTabTextStyle();
              },
            },
            {
              key: r(543),
              value: function (t, e) {
                var n = r,
                  i = new Phaser[n(534)](
                    this.game,
                    t.width / 2,
                    t.height / 2 + 2,
                    e,
                    {
                      font: APP_FONT,
                      fontWeight: 500,
                      fontSize: 24,
                      fill: n(520),
                    }
                  );
                i[n(522)].setTo(0.5), t[n(501)](i), (t.buttonText = i);
              },
            },
            {
              key: "updateTabTextStyle",
              value: function () {
                var t = r;
                this[t(494)][t(496)][t(563)]({
                  font: APP_FONT,
                  fontWeight: 500,
                  fontSize: 24,
                  fill: this[t(494)].frameName == t(512) ? t(520) : t(542),
                }),
                  this.searchRoomTab[t(496)][t(563)]({
                    font: APP_FONT,
                    fontWeight: 500,
                    fontSize: 24,
                    fill: this[t(573)][t(584)] == t(512) ? t(520) : t(542),
                  });
              },
            },
            {
              key: "open",
              value: function () {
                var t = r;
                this[t(570)] || (this[t(570)] = !0);
              },
            },
            {
              key: r(552),
              value: function () {
                var t = r;
                this.visible && (this[t(570)] = !1);
              },
            },
          ]) && ia(e[ea(535)], n),
          i && ia(e, i),
          a
        );
      })(x),
      ua = [
        "HomeScreen",
        "5653ozrUza",
        "closeLoadingPopup",
        "271KLJAyi",
        "onPlayWithFriend",
        "openLoadingPopup",
        "play_now_button",
        "Cannot call a class as a function",
        "home_top_bg",
        "symbol",
        "container",
        "6uAVyBp",
        "iterator",
        "profileView",
        "instance",
        "enumerable",
        "onPlayNowClick",
        "get",
        "time",
        "object",
        "play_friend",
        "friendPopup",
        "dispatch",
        "checkImageKey",
        "createGamePopup",
        "controller",
        "height",
        "width",
        "294599sWbaZw",
        "atlasJSONHash",
        "destroy",
        "onScreenReady",
        "3BwdSua",
        "prototype",
        "/atlas/homeScreen/homeScreen.png",
        "showNotEnoughMoneyToPlay",
        "535046CJuDxL",
        "paused",
        "hideContainer",
        "Signal",
        "shutdown",
        "home_bottom_bg",
        "handleOutOfMoney",
        "configurable",
        "defineProperty",
        "assetUrl",
        "getPrototypeOf",
        "add",
        "value",
        "call",
        "playFriendButton",
        "161jjAxlK",
        "bottomMenuView",
        "iapView",
        "preload",
        "function",
        "key",
        "bottomBg",
        "handleScreenReady",
        "__proto__",
        "click",
        "setPrototypeOf",
        "hasOwnProperty",
        "1308066LGJWKn",
        "sendFindGameRequest",
        "length",
        "writable",
        "background",
        "playNowButton",
        "getOwnPropertyDescriptor",
        "visible",
        "createPlayButtons",
        "4550iGJqUW",
        "191052gifgvx",
        "image",
        "play_with_friend_button",
        "this hasn't been initialised - super() hasn't been called",
        "openIAPPopup",
        "undefined",
        "2TBrDAJ",
        "236vgcMDl",
        "rightMenuView",
        "homeScreen",
        "lobbyScreen",
        "openRewardVideoPopup",
        "openIAP",
        "open",
        "showContainer",
        "create",
        "game",
      ],
      ca = function (t, e) {
        return ua[(t -= 454)];
      };
    function ha(t) {
      var e = ca;
      return (ha =
        typeof Symbol === e(527) && "symbol" == typeof Symbol[e(484)]
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol[n(505)]
                ? n(481)
                : typeof t;
            })(t);
    }
    function la(t, e) {
      for (var n = ca, i = 0; i < e[n(537)]; i++) {
        var r = e[i];
        (r[n(487)] = r.enumerable || !1),
          (r[n(515)] = !0),
          n(520) in r && (r[n(538)] = !0),
          Object[n(516)](t, r[n(528)], r);
      }
    }
    function fa(t, e) {
      var n = ca;
      return !e || (ha(e) !== n(491) && typeof e !== n(527))
        ? (function (t) {
            var e = ca;
            if (void 0 === t) throw new ReferenceError(e(458));
            return t;
          })(t)
        : e;
    }
    function pa(t, e, n) {
      var i = ca;
      return (pa =
        typeof Reflect !== i(460) && Reflect.get
          ? Reflect[i(489)]
          : function (t, e, n) {
              var r = i,
                a = (function (t, e) {
                  var n = ca;
                  for (
                    ;
                    !Object[n(505)][n(534)][n(521)](t, e) &&
                    null !== (t = da(t));

                  );
                  return t;
                })(t, e);
              if (a) {
                var o = Object[r(541)](a, e);
                return o[r(489)] ? o[r(489)][r(521)](n) : o[r(520)];
              }
            })(t, e, n || t);
    }
    function da(t) {
      var e = ca;
      return (da = Object.setPrototypeOf
        ? Object[e(518)]
        : function (t) {
            var n = e;
            return t[n(531)] || Object[n(518)](t);
          })(t);
    }
    function ya(t, e) {
      var n = ca;
      return (ya =
        Object[n(533)] ||
        function (t, e) {
          return (t[n(531)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = ca; ; )
        try {
          if (
            755461 ===
            -parseInt(n(535)) +
              parseInt(n(473)) * parseInt(n(462)) +
              parseInt(n(508)) * parseInt(n(461)) +
              parseInt(n(504)) * -parseInt(n(500)) +
              parseInt(n(454)) * parseInt(n(523)) +
              parseInt(n(475)) * parseInt(n(483)) -
              parseInt(n(455))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(ua);
    var va = (function (t) {
        var e,
          n,
          i,
          r = ca;
        function a() {
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(ca(479));
            })(this, a),
            fa(this, da(a).call(this))
          );
        }
        return (
          (function (t, e) {
            var n = ca;
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t[n(505)] = Object[n(470)](e && e[n(505)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && ya(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: "init",
              value: function () {
                var t = ca;
                pa(da(a[t(505)]), "init", this)[t(521)](this),
                  CyberInstance.isHomeScreenStarted ||
                    (CyberInstance.isHomeScreenStarted = !0),
                  this[t(503)] || (this.onScreenReady = new Phaser[t(511)]()),
                  !this[t(497)] &&
                    ((this[t(497)] = new oe(this)),
                    this.onScreenReady[t(519)](
                      this[t(497)][t(530)],
                      this[t(497)]
                    )),
                  (CyberGlobalData[t(465)] = t(472)),
                  (this[t(539)] = this[t(519)][t(456)](0, 0, "homeScreenBG1")),
                  (this.background[t(499)] = this[t(471)][t(499)]),
                  (this[t(539)][t(498)] = this.game[t(498)]),
                  (this[t(482)] = this[t(519)].group());
              },
            },
            {
              key: r(526),
              value: function () {
                var t = r;
                this.game.cache[t(495)](t(464)) ||
                  this.load[t(501)](
                    "homeScreen",
                    window.assetUrl + t(506),
                    window[t(517)] + "/atlas/homeScreen/homeScreen.json"
                  );
              },
            },
            {
              key: r(470),
              value: function () {
                var t = r;
                this[t(482)][t(470)](0, 0, t(464), t(480)),
                  (this.bottomBg = this[t(471)].make[t(456)](
                    0,
                    0,
                    t(464),
                    t(513)
                  )),
                  (this.bottomBg.x =
                    this[t(471)].width / 2 - this[t(529)][t(499)] / 2),
                  (this.bottomBg.y = this.game[t(498)] - this[t(529)][t(498)]),
                  this[t(482)][t(519)](this[t(529)]),
                  (this[t(485)] = new he(this)),
                  (this.iapView = new Fn(this)),
                  (this[t(463)] = new Pi(this)),
                  (this[t(524)] = new ur(this)),
                  this.createPlayButtons(),
                  this[t(514)](),
                  this[t(471)][t(490)].events[t(519)](100, function () {
                    u.preload();
                  }),
                  (this.screenReady = !0),
                  this[t(503)][t(494)]();
              },
            },
            {
              key: r(488),
              value: function () {
                var t = r;
                CyberInstance[t(509)] && (CyberInstance[t(509)] = !1),
                  jt[t(486)].canPlay()
                    ? (this[t(477)]({ disconnectTime: 15e3 }),
                      jt.instance[t(536)]())
                    : G[t(507)]();
              },
            },
            {
              key: r(476),
              value: function () {
                var t = r;
                CyberInstance[t(509)] && (CyberInstance[t(509)] = !1),
                  this[t(496)]
                    ? this[t(496)][t(468)]()
                    : (this[t(496)] = new sa(this[t(471)], { friendMode: !0 }));
              },
            },
            {
              key: r(467),
              value: function () {
                var t = r;
                ve[t(486)].inited ? this[t(525)][t(459)]() : this[t(466)]();
              },
            },
            {
              key: r(466),
              value: function () {
                var t = r;
                this.screenReady && this[t(524)][t(466)]();
              },
            },
            {
              key: r(510),
              value: function () {
                var t = r;
                this[t(482)][t(542)] = !1;
              },
            },
            {
              key: r(469),
              value: function () {
                var t = r;
                this.container[t(542)] = !0;
              },
            },
            {
              key: "closeLoadingPopup",
              value: function () {
                var t = r;
                pa(da(a.prototype), t(474), this)[t(521)](this),
                  this.rightMenuView[t(493)] && this[t(463)][t(493)][t(474)]();
              },
            },
            {
              key: r(543),
              value: function () {
                var t = r;
                (this[t(540)] = new gr(this.game, 0, 0, t(478), "play_now")),
                  this.container[t(519)](this[t(540)]),
                  (this[t(522)] = new gr(this[t(471)], 0, 0, t(457), t(492))),
                  this[t(482)][t(519)](this[t(522)]),
                  (this[t(540)].y =
                    this[t(471)][t(498)] / 2 - this[t(540)].height / 2),
                  (this[t(522)].y = this[t(540)].y),
                  (this[t(540)].x =
                    this.game[t(499)] / 2 -
                    (2 * this.playNowButton[t(499)] + 100) / 2),
                  (this[t(522)].x =
                    this.playNowButton.x + this.playNowButton[t(499)] + 100),
                  this[t(540)][t(532)](this.onPlayNowClick, this),
                  this[t(522)].click(this.onPlayWithFriend, this);
              },
            },
            {
              key: r(512),
              value: function () {
                var t = r;
                pa(da(a[t(505)]), t(512), this)[t(521)](this),
                  this[t(485)][t(502)](),
                  this[t(463)][t(502)](),
                  (this[t(496)] = null),
                  (this[t(525)] = null),
                  (this[t(485)] = null),
                  (this[t(463)] = null),
                  (this.bottomMenuView = null),
                  (this.playNowButton = null),
                  this[t(522)],
                  (this[t(482)] = null),
                  (this[t(539)] = null);
              },
            },
          ]) && la(e[ca(505)], n),
          i && la(e, i),
          a
        );
      })(Gt),
      ba = [
        "symbol",
        "graphics",
        "iterator",
        "destroy",
        "load",
        "endFill",
        "getPrototypeOf",
        "1CCmcSA",
        "setDefaultLanguage",
        "setTo",
        "anchor",
        "state",
        "setPrototypeOf",
        "add",
        "1Casqdn",
        "onDestroy",
        "authenticateTimer",
        "time",
        "2053066gLoZLW",
        "game",
        "desc",
        "maintenance",
        "getOwnPropertyDescriptor",
        "defineProperty",
        "DisconnectScreen",
        "key",
        "logged",
        "homeScreenBG2",
        "instance",
        "quit",
        "undefined",
        "init",
        "setText",
        "264931uEHmfR",
        "configurable",
        "__proto__",
        "getPhoto",
        "then",
        "canSubscribeBotAsync",
        "height",
        "lang",
        "call",
        "154084ObxtzH",
        "605bEyvWt",
        "enableTestMode",
        "centerX",
        "/atlas/homeScreen/homeScreen.png",
        "overlayTexture",
        "remove",
        "get",
        "preload",
        "events",
        "isGameAssetPreloaded",
        "subscribeBotAsync",
        "log",
        "generateTexture",
        "apply",
        "/atlas/homeScreen/homeScreen.json",
        "loadSounds",
        "object",
        "addOnce",
        "connector",
        "value",
        "percent",
        "width",
        "start",
        "catch",
        "#ffffff",
        "LOADING_DATA",
        "HomeScreen",
        "startGameAsync",
        "world",
        "centerY",
        "prototype",
        "text",
        "2437MyGcgU",
        "devEnabled",
        "/bigImage/homeScreenBG2.jpg",
        "preloadBg",
        "player",
        "this hasn't been initialised - super() hasn't been called",
        "onFileComplete",
        "beginFill",
        "3rrHScJ",
        "1897248zaNepS",
        "drawRect",
        "loop",
        "homeScreenBG1",
        "569479Xfisno",
        "failedCount",
        "500",
        "enumerable",
        "function",
        "length",
        "preloadIcon",
        "image",
        "homeScreen",
        "create",
        "hasOwnProperty",
        "718161FLeLDB",
      ],
      ga = function (t, e) {
        return ba[(t -= 429)];
      };
    function ma(t) {
      var e = ga;
      return (ma =
        "function" == typeof Symbol && typeof Symbol[e(507)] === e(505)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(497) &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? n(505)
                : typeof t;
            })(t);
    }
    function Ia(t, e) {
      for (var n = ga, i = 0; i < e[n(498)]; i++) {
        var r = e[i];
        (r[n(496)] = r.enumerable || !1),
          (r[n(439)] = !0),
          n(467) in r && (r.writable = !0),
          Object[n(528)](t, r[n(430)], r);
      }
    }
    function wa(t, e) {
      var n = ga;
      return !e || (ma(e) !== n(464) && typeof e !== n(497))
        ? (function (t) {
            var e = ga;
            if (void 0 === t) throw new ReferenceError(e(485));
            return t;
          })(t)
        : e;
    }
    function Sa(t, e, n) {
      var i = ga;
      return (Sa =
        typeof Reflect !== i(435) && Reflect[i(454)]
          ? Reflect.get
          : function (t, e, n) {
              var r = i,
                a = (function (t, e) {
                  var n = ga;
                  for (
                    ;
                    !Object[n(478)][n(503)][n(446)](t, e) &&
                    null !== (t = ka(t));

                  );
                  return t;
                })(t, e);
              if (a) {
                var o = Object[r(527)](a, e);
                return o[r(454)] ? o[r(454)][r(446)](n) : o[r(467)];
              }
            })(t, e, n || t);
    }
    function ka(t) {
      var e = ga;
      return (ka = Object[e(517)]
        ? Object[e(511)]
        : function (t) {
            return t[e(440)] || Object.getPrototypeOf(t);
          })(t);
    }
    function Ca(t, e) {
      var n = ga;
      return (Ca =
        Object[n(517)] ||
        function (t, e) {
          return (t[n(440)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = ga; ; )
        try {
          if (
            997184 ===
            parseInt(n(448)) * -parseInt(n(480)) +
              parseInt(n(447)) +
              -parseInt(n(489)) +
              -parseInt(n(438)) +
              parseInt(n(493)) * parseInt(n(488)) +
              -parseInt(n(504)) * -parseInt(n(512)) +
              -parseInt(n(523)) * -parseInt(n(519))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(ba);
    var Oa = (function (t) {
        var e,
          n,
          i,
          r = ga;
        function a() {
          var t = ga;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            wa(this, ka(a)[t(461)](this, arguments))
          );
        }
        return (
          (function (t, e) {
            var n = ga;
            if (typeof e !== n(497) && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t[n(478)] = Object[n(502)](e && e[n(478)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Ca(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(436),
              value: function () {
                var t = r;
                Sa(ka(a.prototype), t(436), this)[t(446)](this),
                  this.layout(),
                  this[t(475)](),
                  CyberInstance[t(513)](gameLocale);
              },
            },
            {
              key: r(455),
              value: function () {
                var t = r,
                  e = this,
                  n = this.add[t(500)](0, 0, t(492));
                (n[t(469)] = this[t(524)][t(469)]),
                  (n.height = this[t(524)][t(444)]),
                  (this[t(499)] = this[t(518)][t(500)](
                    this[t(524)][t(476)][t(450)],
                    this[t(524)].world.centerY,
                    t(483)
                  )),
                  this[t(499)][t(515)][t(514)](0.5),
                  (this[t(525)] = this.game[t(518)][t(479)](
                    this[t(524)][t(476)][t(450)],
                    this[t(524)][t(476)][t(477)] + 80,
                    CyberInstance[t(445)][t(473)],
                    { fontSize: 18, fill: t(472), fontWeight: "500" }
                  )),
                  this[t(525)][t(515)][t(514)](0.5),
                  (this[t(468)] = this[t(524)][t(518)][t(479)](
                    this.game[t(476)].centerX,
                    this[t(524)][t(476)][t(477)] + 2,
                    "0%",
                    { fontSize: 16, fill: t(472), fontWeight: t(495) }
                  )),
                  this[t(468)][t(515)][t(514)](0.5);
                var i = this[t(524)][t(522)].create(!0);
                i[t(491)](30, function () {
                  e[t(499)].angle += 10;
                }),
                  i[t(470)](),
                  this[t(509)].onFileComplete[t(518)](this[t(486)], this),
                  this[t(509)].atlasJSONHash(
                    t(501),
                    assetUrl + t(451),
                    assetUrl + t(462)
                  ),
                  this[t(509)].image(t(432), assetUrl + t(482));
                var a = game.make[t(506)](0, 0);
                a[t(487)](0),
                  a[t(490)](0, 0, this[t(524)].width, this[t(524)][t(444)]),
                  a[t(510)](),
                  (CyberGlobalData[t(452)] = a[t(460)]()),
                  a[t(508)]();
              },
            },
            {
              key: r(502),
              value: function () {
                var t = r,
                  e = this;
                this.desc.setText(CyberInstance[t(445)].CONNECTING_TO_SERVER),
                  this[t(509)].onFileComplete[t(453)](this[t(486)], this),
                  CyberInstance.adEnabled
                    ? pt[t(433)][t(436)]()
                    : pt[t(433)][t(449)](),
                  (this.isGameAssetPreloaded = !1),
                  (this[t(521)] = this[t(524)][t(522)][t(456)][t(491)](
                    30,
                    function () {
                      var n = t;
                      if (
                        CyberInstance[n(466)][n(431)] &&
                        CyberInstance[n(466)].variableUpdated &&
                        globalStartGameAsyncResolved
                      )
                        e[n(522)][n(456)][n(453)](e[n(521)]), e[n(470)]();
                      else {
                        if (1 === CyberInstance[n(466)][n(526)])
                          return (
                            e[n(522)].events[n(453)](e[n(521)]),
                            void e.state[n(470)](n(429), !0, !1)
                          );
                        !e[n(457)] && ((e[n(457)] = !0), u[n(455)]());
                      }
                    }
                  ));
              },
            },
            {
              key: r(470),
              value: function () {
                var t = r,
                  e = this;
                CyberInstance.sound[t(463)](),
                  gameLocaleInited
                    ? this[t(516)].start("HomeScreen", !0, !1)
                    : new Qn(this.game)[t(520)][t(465)](function () {
                        var n = t;
                        e[n(516)][n(470)](n(474), !0, !1);
                      });
              },
            },
            {
              key: r(486),
              value: function (t, e, n) {
                var i = r;
                n ? this[i(468)][i(437)](t + "%") : console[i(459)](e);
              },
            },
            {
              key: r(475),
              value: function () {
                var t = r,
                  e = this;
                globalStartGameAsyncResolved ||
                  (5 === this.failedCount && FBInstant[t(434)](),
                  FBInstant[t(475)]()
                    .then(function () {
                      var e = t;
                      if (!globalStartGameAsyncResolved) {
                        (globalStartGameAsyncResolved = !0),
                          clearInterval(globalProgressLoop);
                        var n = FBInstant.player[e(441)]();
                        n && (CyberInstance.avatar = n),
                          !CyberInstance[e(481)] &&
                            FBInstant[e(484)]
                              [e(443)]()
                              [e(442)](function () {
                                var t = e;
                                FBInstant[t(484)][t(458)]();
                              })
                              [e(471)](function (t) {});
                      }
                    })
                    .catch(function () {
                      var n = t;
                      e[n(494)] ? e[n(494)]++ : (e[n(494)] = 1),
                        setTimeout(function () {
                          e[n(475)]();
                        }, 1e3);
                    }));
              },
            },
          ]) && Ia(e[ga(478)], n),
          i && Ia(e, i),
          a
        );
      })(Gt),
      Pa = [
        "middle",
        "getPrototypeOf",
        "45049HduXOB",
        "length",
        "setPrototypeOf",
        "homeScreenBG1",
        "paused",
        "maintenance",
        "connector",
        "lang",
        "add",
        "centerY",
        "homeScreen",
        "call",
        "RECONNECTING",
        "create",
        "object",
        "game",
        "text",
        "world",
        "normal",
        "sprite",
        "toUpperCase",
        "configurable",
        "value",
        "518841jnkROZ",
        "function",
        "centerX",
        "CONNECTION_LOST",
        "__proto__",
        "HomeScreen",
        "2qYXPAq",
        "preloadIcon",
        "17fgVMWJ",
        "455509XskVEM",
        "variableUpdated",
        "prototype",
        "124495YtbohV",
        "stop",
        "constructor",
        "setTo",
        "bold",
        "height",
        "maintenanceMsg",
        "anchor",
        "345679KpEFFz",
        "symbol",
        "width",
        "quit",
        "angle",
        "21xdpXij",
        "84172pXzNtL",
        "43478cHeYLw",
        "addOnce",
        "image",
        "background",
        "showMaintenance",
        "start",
        "logged",
        "Cannot call a class as a function",
        "inputEnabled",
        "loop",
        "writable",
        "onInputDown",
        "1Iynwwn",
        "setTextBounds",
        "connect",
        "#ffffff",
        "events",
        "center",
      ],
      Ta = function (t, e) {
        return Pa[(t -= 400)];
      };
    function _a(t) {
      var e = Ta;
      return (_a =
        typeof Symbol === e(425) && typeof Symbol.iterator === e(445)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(425) &&
                t[n(438)] === Symbol &&
                t !== Symbol[n(435)]
                ? "symbol"
                : typeof t;
            })(t);
    }
    function xa(t, e) {
      for (var n = Ta, i = 0; i < e[n(402)]; i++) {
        var r = e[i];
        (r.enumerable = r.enumerable || !1),
          (r[n(422)] = !0),
          n(423) in r && (r[n(461)] = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ea(t, e) {
      var n = Ta;
      return !e || (_a(e) !== n(415) && typeof e !== n(425))
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function ja(t) {
      var e = Ta;
      return (ja = Object[e(403)]
        ? Object[e(400)]
        : function (t) {
            var n = e;
            return t[n(428)] || Object[n(400)](t);
          })(t);
    }
    function Ba(t, e) {
      var n = Ta;
      return (Ba =
        Object[n(403)] ||
        function (t, e) {
          return (t[n(428)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Ta; ; )
        try {
          if (
            415062 ===
            parseInt(n(433)) +
              -parseInt(n(430)) * parseInt(n(444)) +
              parseInt(n(436)) +
              parseInt(n(401)) * -parseInt(n(432)) +
              -parseInt(n(424)) +
              -parseInt(n(463)) * -parseInt(n(451)) +
              parseInt(n(450)) * parseInt(n(449))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Pa);
    var Aa = (function (t) {
        var e,
          n,
          i,
          r = Ta;
        function a() {
          var t = Ta;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(Ta(458));
            })(this, a),
            Ea(this, ja(a)[t(412)](this))
          );
        }
        return (
          (function (t, e) {
            var n = Ta;
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t[n(435)] = Object[n(414)](e && e[n(435)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Ba(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: "create",
              value: function () {
                var t = Ta;
                (this.background = this[t(409)][t(453)](0, 0, t(404))),
                  (this[t(454)][t(446)] = this[t(416)][t(446)]),
                  (this[t(454)][t(441)] = this[t(416)][t(441)]),
                  1 === CyberInstance[t(407)][t(406)]
                    ? this[t(455)](CyberInstance.connector[t(442)])
                    : new G(this[t(416)], {
                        text: CyberInstance[t(408)][t(427)],
                        buttonText: CyberInstance[t(408)].CONNECT,
                        hideCloseButton: !0,
                        callback: this[t(465)],
                        context: this,
                      });
              },
            },
            {
              key: r(465),
              value: function () {
                var t = r;
                (CyberInstance[t(405)] = !1),
                  CyberInstance[t(407)][t(465)](),
                  (this[t(431)] = this.add[t(453)](
                    this[t(416)][t(418)][t(426)],
                    this[t(416)][t(418)][t(410)],
                    "preloadBg"
                  )),
                  this[t(431)][t(443)].setTo(0.5),
                  this[t(416)].add[t(417)](
                    this[t(416)][t(418)][t(426)],
                    this[t(416)][t(418)][t(410)] + 80,
                    CyberInstance[t(408)][t(413)],
                    { fontSize: 18, fill: t(466), fontWeight: "500" }
                  )[t(443)][t(439)](0.5);
                var e = this[t(416)].time.create(!0);
                e[t(460)](
                  30,
                  function () {
                    var n = t;
                    (this[n(431)][n(448)] += 10),
                      CyberInstance.connector[n(457)] &&
                        CyberInstance[n(407)][n(434)] &&
                        (e[n(437)](),
                        e.destroy(),
                        this[n(416)].state[n(456)](n(429), !0, !1));
                  },
                  this
                ),
                  e[t(456)]();
              },
            },
            {
              key: r(455),
              value: function (t) {
                var e = r;
                this[e(416)].add
                  .text(
                    this.game[e(446)] / 2,
                    30,
                    CyberInstance[e(408)].THONG_BAO[e(421)](),
                    {
                      font: APP_FONT,
                      fontSize: 40,
                      fill: e(466),
                      fontWeight: e(440),
                    }
                  )
                  [e(443)].setTo(0.5, 0),
                  this[e(416)][e(409)]
                    [e(417)](100, 100, t, {
                      font: APP_FONT,
                      fontSize: 24,
                      fill: "#ffffff",
                      fontWeight: e(419),
                      wordWrap: !0,
                      wordWrapWidth: this[e(416)].width - 200,
                      boundsAlignH: e(468),
                      boundsAlignV: e(469),
                    })
                    [e(464)](
                      0,
                      0,
                      this[e(416)].width - 200,
                      this[e(416)].height - 200
                    );
                var n = this[e(416)][e(409)][e(420)](
                  0,
                  0,
                  e(411),
                  "button_close"
                );
                (n.x = this[e(454)][e(446)] - n[e(446)] - 15),
                  (n.y = 15),
                  (n[e(459)] = !0),
                  n[e(467)][e(462)][e(452)](function () {
                    FBInstant[e(447)]();
                  }, this);
              },
            },
          ]) && xa(e[Ta(435)], n),
          i && xa(e, i),
          a
        );
      })(Phaser.State),
      Ra = [
        "iterator",
        "815248hjEgCN",
        "c48",
        "#ffffff",
        "width",
        "83hOesgP",
        "image",
        "revive",
        "setTo",
        "135106lrzQZI",
        "Cannot call a class as a function",
        "function",
        "setPrototypeOf",
        "game",
        "loadTexture",
        "1PzRXZk",
        "prototype",
        "#f8eda3",
        "#93cce5",
        "destroy",
        "this hasn't been initialised - super() hasn't been called",
        "writable",
        "13mLuaYG",
        "callAll",
        "call",
        "leaderboardScreen",
        "Rectangle",
        "symbol",
        "kill",
        "3523SsOJnc",
        "coin_icon",
        "339003mAhwcg",
        "rank",
        "create",
        "28853yZnbGq",
        "anchor",
        "make",
        "enumerable",
        "bitmapData",
        "height",
        "canvas",
        "add",
        "name",
        "avatarSize",
        "918595TJsgyN",
        "Super expression must either be null or a function",
        "applyTexture",
        "score",
        "load",
        "key",
        "getPrototypeOf",
        "916485tLcsCb",
        "text",
        "avatar",
        "formatCoinWithCommas",
        "row",
        "__proto__",
      ],
      Fa = function (t, e) {
        return Ra[(t -= 360)];
      };
    function Na(t) {
      var e = Fa;
      return (Na =
        "function" == typeof Symbol && typeof Symbol[e(391)] === e(361)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(402) &&
                t.constructor === Symbol &&
                t !== Symbol[n(407)]
                ? n(361)
                : typeof t;
            })(t);
    }
    function Da(t, e) {
      for (var n = Fa, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(371)] = r[n(371)] || !1),
          (r.configurable = !0),
          "value" in r && (r[n(412)] = !0),
          Object.defineProperty(t, r[n(383)], r);
      }
    }
    function La(t, e) {
      var n = Fa;
      return !e || ("object" !== Na(e) && typeof e !== n(402))
        ? (function (t) {
            var e = Fa;
            if (void 0 === t) throw new ReferenceError(e(411));
            return t;
          })(t)
        : e;
    }
    function Ma(t) {
      var e = Fa;
      return (Ma = Object[e(403)]
        ? Object[e(384)]
        : function (t) {
            var n = e;
            return t[n(390)] || Object[n(384)](t);
          })(t);
    }
    function Ga(t, e) {
      var n = Fa;
      return (Ga =
        Object[n(403)] ||
        function (t, e) {
          return (t[n(390)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Fa; ; )
        try {
          if (
            463043 ===
            parseInt(n(385)) +
              parseInt(n(396)) * parseInt(n(363)) +
              parseInt(n(378)) * parseInt(n(406)) +
              -parseInt(n(365)) +
              -parseInt(n(400)) +
              -parseInt(n(392)) +
              parseInt(n(368)) * -parseInt(n(413))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Ra);
    var Wa = (function (t) {
        var e,
          n,
          i,
          r = Fa;
        function a(t, e, n, i) {
          var r,
            o = Fa;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(Fa(401));
          })(this, a),
            ((r = La(this, Ma(a)[o(415)](this, t, 0, 0)))[o(376)] =
              "a" + e.guserid);
          var s,
            u = r[o(367)](0, 0, o(416), o(389));
          (s =
            e[o(366)] > 3
              ? r[o(404)].add[o(386)](60, r[o(373)] / 2, e.rank, {
                  font: APP_FONT,
                  fontSize: 28,
                  fill: o(394),
                  fontWeight: 500,
                })
              : r[o(367)](60, u[o(373)] / 2 - 2, o(416), "r" + e.rank))[o(369)][
            o(399)
          ](0.5),
            r[o(375)](s),
            (r[o(387)] = r.create(114, 0, "homeScreen", "no_avatar")),
            (r.avatar[o(395)] = r[o(377)]),
            (r[o(387)][o(373)] = r[o(377)]),
            (r[o(387)].y = u[o(373)] / 2 - r[o(387)][o(373)] / 2 - 2),
            r[o(404)].cache.checkImageKey(r[o(376)])
              ? r[o(380)](r.name)
              : r[o(404)][o(382)][o(397)](r[o(376)], e[o(387)]);
          var c = r.game[o(375)][o(386)](
            r[o(387)].x + r.avatarSize + 20,
            u[o(373)] / 2 + 2,
            e.name,
            { font: APP_FONT, fontSize: 22, fill: o(409), fontWeight: 400 }
          );
          c[o(369)][o(399)](0, 0.5), r[o(375)](c);
          var h = r[o(367)](2, 0, "leaderboardScreen", i);
          (h.x = u.x + u[o(395)] - h[o(395)] - 20),
            (h.y = u.height / 2 - h[o(373)] / 2),
            i == o(364) && (h.y = h.y - 2);
          var l = r.game[o(375)][o(386)](
            0,
            r[o(373)] / 2,
            CyberHelper[o(388)](e[o(381)]),
            { font: APP_FONT, fontSize: 22, fill: o(408), fontWeight: 400 }
          );
          return (
            l[o(369)].setTo(0, 0.5),
            r[o(375)](l),
            (l.x = h.x - 15 - l[o(374)].width),
            r
          );
        }
        return (
          (function (t, e) {
            var n = Fa;
            if ("function" != typeof e && null !== e)
              throw new TypeError(n(379));
            (t.prototype = Object.create(e && e[n(407)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Ga(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: "updateAvatar",
              value: function (t) {
                var e = Fa;
                this[e(387)].loadTexture(t),
                  (this[e(387)][e(395)] = this[e(377)]),
                  (this[e(387)][e(373)] = this[e(377)]);
              },
            },
            {
              key: "applyTexture",
              value: function (t) {
                var e = Fa;
                try {
                  var n = new Phaser[e(360)](0, 0, this[e(377)], this[e(377)]),
                    i = game[e(370)].image(0, 0, e(416), e(393));
                  (i[e(395)] = this[e(377)]), (i[e(373)] = this.avatarSize);
                  var r = game[e(370)][e(372)]();
                  r[e(382)](i), i[e(410)]();
                  var a = this.game[e(370)][e(372)](this[e(377)], this[e(377)]);
                  a.alphaMask(t, r, n), this[e(387)][e(405)](a);
                } catch (n) {
                  this[e(387)].loadTexture(t);
                }
                (this[e(387)][e(395)] = this[e(377)]),
                  (this[e(387)][e(373)] = this[e(377)]);
              },
            },
            {
              key: r(362),
              value: function () {
                var t = r;
                this[t(414)](t(362));
              },
            },
            {
              key: r(398),
              value: function () {
                var t = r;
                this.callAll(t(398));
              },
            },
            {
              key: r(373),
              get: function () {
                return 89;
              },
            },
            {
              key: "avatarSize",
              get: function () {
                return 48;
              },
            },
          ]) && Da(e[Fa(407)], n),
          i && Da(e, i),
          a
        );
      })(Phaser.Group),
      Va = [
        "HomeScreen",
        "ExtensionRequest",
        "TOP_INCOME",
        "topWinButtonText",
        "725996gmLnSJ",
        "destroy",
        "closeLoadingPopup",
        "cmd",
        "back_button",
        "size",
        "create",
        "getOwnPropertyDescriptor",
        "viewport",
        "inputEnabled",
        "total",
        "TOP_WON",
        "container",
        "socket",
        "assetUrl",
        "232571OwRcuN",
        "call",
        "events",
        "params",
        "632308pPSSbM",
        "leaderboard.getTopWinner",
        "background",
        "removeEventListener",
        "symbol",
        "shutdown",
        "/atlas/leaderboardScreenV2/leaderboardScreen.png",
        "removeAll",
        "height",
        "topWinButton",
        "#ffffff",
        "checkImageKey",
        "init",
        "Cannot call a class as a function",
        "TopWin",
        "bringToTop",
        "loadTexture",
        "cao_thu",
        "toUpperCase",
        "__proto__",
        "getSFSObject",
        "homeScreenBG1",
        "TopIncome",
        "leaderboard.getTopIncome",
        "width",
        "constructor",
        "onLeaderboardChange",
        "showEntries",
        "onScrollerComplete",
        "add",
        "lobbyScreen",
        "entries",
        "anchor",
        "state",
        "screenReady",
        "text",
        "listRanking",
        "666392IejVXf",
        "1sVqXNC",
        "configurable",
        "prototype",
        "value",
        "addChild",
        "topIncomeButtonText",
        "image",
        "setPrototypeOf",
        "getByName",
        "putInt",
        "Super expression must either be null or a function",
        "load",
        "name",
        "setStyle",
        "group",
        "click",
        "length",
        "87401SnTOoa",
        "cache",
        "listViewGroup",
        "send",
        "guserid",
        "atlasJSONHash",
        "iterator",
        "undefined",
        "defineProperty",
        "left_bar_bg",
        "enumerable",
        "preload",
        "onFileComplete",
        "dispatchValues",
        "leftbar_active",
        "lang",
        "hasOwnProperty",
        "/atlas/leaderboardScreenV2/leaderboardScreen.json",
        "setTo",
        "472580GxdIOu",
        "leaderboardScreen",
        "getLeaderboardAsync",
        "1623091nIiLGT",
        "leftbar_button",
        "object",
        "log",
        "game_win",
        "getLong",
        "topIncomeButton",
        "sound",
        "scroller",
        "#4865d3",
        "start",
        "get",
        "1mIvjMC",
        "getPrototypeOf",
        "LEADERBOARD",
        "playButtonSound",
        "make",
        "leaderboardName",
        "function",
        "addOnce",
        "game",
        "containsKey",
        "getTime",
        "onInputDown",
        "onComplete",
        "avatar",
        "addEventListener",
        "coin_win",
        "getInt",
        "onExtensionResponse",
      ],
      Ua = function (t, e) {
        return Va[(t -= 242)];
      };
    function za(t) {
      var e = Ua;
      return (za =
        typeof Symbol === e(252) && typeof Symbol[e(348)] === e(291)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(252) &&
                t[n(312)] === Symbol &&
                t !== Symbol[n(327)]
                ? "symbol"
                : typeof t;
            })(t);
    }
    function Ha(t, e) {
      for (var n = Ua, i = 0; i < e[n(341)]; i++) {
        var r = e[i];
        (r[n(352)] = r.enumerable || !1),
          (r[n(326)] = !0),
          n(328) in r && (r.writable = !0),
          Object[n(350)](t, r.key, r);
      }
    }
    function Xa(t, e) {
      var n = Ua;
      return !e || (za(e) !== n(366) && typeof e !== n(252))
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Ja(t, e, n) {
      var i = Ua;
      return (Ja =
        typeof Reflect !== i(349) && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var r = i,
                a = (function (t, e) {
                  var n = Ua;
                  for (
                    ;
                    !Object.prototype[n(358)][n(284)](t, e) &&
                    null !== (t = qa(t));

                  );
                  return t;
                })(t, e);
              if (a) {
                var o = Object[r(275)](a, e);
                return o[r(245)] ? o[r(245)][r(284)](n) : o[r(328)];
              }
            })(t, e, n || t);
    }
    function qa(t) {
      var e = Ua;
      return (qa = Object[e(332)]
        ? Object[e(247)]
        : function (t) {
            var n = e;
            return t[n(306)] || Object[n(247)](t);
          })(t);
    }
    function Ka(t, e) {
      return (Ka =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t[Ua(306)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Ua; ; )
        try {
          if (
            554213 ===
            parseInt(n(361)) +
              parseInt(n(342)) * -parseInt(n(246)) +
              parseInt(n(287)) +
              -parseInt(n(283)) +
              parseInt(n(268)) * parseInt(n(325)) +
              parseInt(n(324)) +
              -parseInt(n(364))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Va);
    var Ya = null,
      Za = "TopIncome",
      Qa = 0,
      $a = 0,
      to = !1,
      eo = function (t) {
        var e = Ua;
        return new Date()[e(256)]() - t >= 12e4;
      },
      no = (function (t) {
        var e,
          n,
          i,
          r = Ua;
        function a() {
          var t = Ua;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(Ua(300));
            })(this, a),
            Xa(this, qa(a)[t(284)](this))
          );
        }
        return (
          (function (t, e) {
            var n = Ua;
            if (typeof e !== n(252) && null !== e) throw new TypeError(n(335));
            (t.prototype = Object[n(274)](e && e[n(327)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Ka(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(299),
              value: function () {
                var t = r;
                Ja(qa(a[t(327)]), t(299), this)[t(284)](this),
                  null == Ya
                    ? (Ya = { TopWin: [], TopIncome: [] })
                    : (Qa > 0 && eo(Qa) && (Ya[t(301)][t(341)] = 0),
                      $a > 0 && eo($a) && (Ya.TopIncome[t(341)] = 0)),
                  (to = !1),
                  (this[t(280)] = this[t(316)][t(339)]()),
                  (this[t(289)] = this.add[t(331)](0, 0, t(308))),
                  (this.background[t(311)] = this[t(254)][t(311)]),
                  (this[t(289)][t(295)] = this[t(254)][t(295)]),
                  this[t(280)][t(316)](this[t(289)]),
                  CyberInstance.socket[t(260)](
                    SFS2X.SFSEvent.EXTENSION_RESPONSE,
                    this.onExtensionResponse,
                    this
                  );
              },
            },
            {
              key: r(353),
              value: function () {
                var t = r;
                this.openLoadingPopup(),
                  u[t(353)](),
                  this[t(254)][t(343)][t(298)](t(362)) ||
                    this[t(336)][t(347)](
                      t(362),
                      window[t(282)] + t(293),
                      window[t(282)] + t(359)
                    );
              },
            },
            {
              key: r(274),
              value: function () {
                var t = r;
                this.load[t(354)][t(316)](this[t(354)], this),
                  this.background[t(303)]("homeScreenBG2"),
                  (this.background.width = this[t(254)][t(311)]),
                  (this.background.height = this[t(254)].height);
                var e = this[t(280)].create(0, 0, t(317), "popup_header_bg");
                e[t(311)] = this.game[t(311)];
                var n = this[t(280)][t(274)](0, e.height - 10, t(362), t(351));
                n.y + n.height < this[t(254)][t(295)] &&
                  (n.height =
                    n[t(295)] + (this[t(254)][t(295)] - n.y - n[t(295)])),
                  this[t(280)][t(302)](e);
                var i = this[t(254)][t(316)][t(322)](
                  220,
                  9,
                  CyberInstance[t(357)][t(248)][t(305)](),
                  {
                    font: APP_FONT,
                    fontWeight: 700,
                    fontSize: 30,
                    fill: "#ffffff",
                  }
                );
                this.container.add(i);
                var a = this[t(280)][t(274)](50, 0, "homeScreen", t(272));
                (a.y = e[t(295)] / 2 - a[t(295)] / 2 - 5),
                  (a[t(277)] = !0),
                  a[t(285)][t(257)][t(253)](function () {
                    var e = t;
                    CyberInstance[e(371)][e(249)](),
                      this[e(254)][e(320)][e(244)](e(264), !0, !1);
                  }, this);
                var o = new it(
                    this[t(254)],
                    0,
                    2,
                    t(362),
                    Za == t(301) ? "leftbar_active" : t(365)
                  ),
                  s = this[t(254)][t(316)].image(
                    o.width / 2,
                    10,
                    t(362),
                    t(304)
                  );
                s.anchor.setTo(0.5, 0), o[t(329)](s);
                var u = this[t(254)].make.text(
                  o[t(311)] / 2,
                  s.y + s[t(295)] + 5,
                  CyberInstance[t(357)][t(279)],
                  {
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 22,
                    fill: Za == t(301) ? "#ffffff" : t(243),
                  }
                );
                u[t(319)][t(360)](0.5, 0),
                  o[t(329)](u),
                  (this[t(267)] = u),
                  this[t(280)][t(316)](o);
                var c = new it(
                    this.game,
                    0,
                    2,
                    t(362),
                    Za == t(309) ? t(356) : t(365)
                  ),
                  h = this[t(254)].add.image(
                    c[t(311)] / 2,
                    10,
                    t(362),
                    "thu_nhap"
                  );
                h.anchor[t(360)](0.5, 0), c.addChild(h);
                var l = this[t(254)][t(250)].text(
                  c.width / 2,
                  h.y + h[t(295)] + 5,
                  CyberInstance[t(357)][t(266)],
                  {
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 22,
                    fill: Za == t(309) ? "#ffffff" : t(243),
                  }
                );
                l[t(319)][t(360)](0.5, 0),
                  c[t(329)](l),
                  (this[t(330)] = l),
                  this[t(280)][t(316)](c),
                  (o[t(251)] = t(301)),
                  o[t(340)](this.onLeaderboardChange, this),
                  (this[t(296)] = o),
                  (c[t(251)] = t(309)),
                  c[t(340)](this[t(313)], this),
                  (this[t(370)] = c),
                  (c.y = e.y + e[t(295)] + 10),
                  (o.y = c.y + c[t(295)] + 15),
                  (this[t(276)] = {
                    width: 943,
                    height: this[t(254)][t(295)] - e[t(295)] - 10,
                  }),
                  (this[t(344)] = this[t(254)][t(316)][t(339)]()),
                  (this[t(344)].x =
                    n[t(311)] +
                    (this[t(254)][t(311)] - n.width) / 2 -
                    this[t(276)][t(311)] / 2),
                  (this[t(344)].y = e.height - 10),
                  (this[t(323)] = new dn(
                    this[t(254)],
                    this[t(344)],
                    new Phaser.Rectangle(
                      0,
                      0,
                      this[t(276)][t(311)],
                      this[t(276)][t(295)]
                    ),
                    { direction: "y", padding: 5, searchForClicks: !0 }
                  )),
                  this[t(323)][t(242)].events[t(258)].add(this[t(315)], this),
                  (this[t(321)] = !0),
                  this[t(363)](Za, !0);
              },
            },
            {
              key: r(263),
              value: function (t) {
                var e = r;
                if (this.screenReady && t[e(286)][e(255)](e(318))) {
                  var n = t[e(286)].getSFSArray("entries");
                  if (n[e(273)]() > 0) {
                    for (
                      var i = t.cmd == e(310) ? e(309) : "TopWin",
                        a = Ya[i][e(341)],
                        o = 0;
                      o < n[e(273)]();
                      o++
                    ) {
                      var s = n[e(307)](o);
                      Ya[i].push({
                        guserid: s[e(369)](e(346)),
                        name: s.getUtfString(e(337)),
                        avatar: s[e(255)](e(259))
                          ? s.getUtfString("avatar")
                          : "assets/images/no_avatar.png",
                        rank: a + o + 1,
                        score: s[e(255)]("game_win")
                          ? s[e(262)](e(368))
                          : s[e(369)](e(261)),
                      });
                    }
                    i == Za && this[e(314)](a),
                      "leaderboard.getTopWinner" == t[e(271)]
                        ? (Qa = new Date().getTime())
                        : t[e(271)] == e(310) && ($a = new Date()[e(256)]()),
                      (to = !1);
                  }
                  this[e(270)]();
                }
              },
            },
            {
              key: r(363),
              value: function (t, e) {
                var n = r;
                if (0 != Ya[t][n(341)] && e) this[n(314)](0), this[n(270)]();
                else if (!to && Ya[t][n(341)] < 50) {
                  to = !0;
                  var i = new SFS2X.SFSObject();
                  i[n(334)]("idx", Ya[t][n(341)]),
                    t == n(301)
                      ? CyberInstance[n(281)][n(345)](
                          new SFS2X[n(265)](n(288), i)
                        )
                      : t == n(309) &&
                        CyberInstance[n(281)].send(
                          new SFS2X.ExtensionRequest(
                            "leaderboard.getTopIncome",
                            i
                          )
                        );
                }
              },
            },
            {
              key: r(314),
              value: function (t) {
                var e = r,
                  n = Ya[Za];
                if (n && n[e(341)] > 0) {
                  for (var i = t; i < n.length; i++)
                    this[e(323)].add(
                      new Wa(
                        this[e(254)],
                        n[i],
                        this.viewport,
                        Za == e(301) ? "won_icon" : "coin_icon"
                      )
                    );
                  this[e(336)][e(244)]();
                }
              },
            },
            {
              key: r(313),
              value: function (t) {
                var e = r,
                  n = this;
                t.leaderboardName &&
                  t.leaderboardName != Za &&
                  ((Za = t[e(251)]),
                  t[e(303)](e(362), "leftbar_active"),
                  this[e(330)][e(338)]({
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 22,
                    fill: e("TopIncome" == Za ? 297 : 243),
                  }),
                  this[e(267)][e(338)]({
                    font: APP_FONT,
                    fontWeight: 400,
                    fontSize: 22,
                    fill: Za == e(301) ? e(297) : e(243),
                  }),
                  Za == e(301)
                    ? this[e(370)].loadTexture(e(362), e(365))
                    : this[e(296)][e(303)](e(362), e(365)),
                  this[e(323)][e(294)](),
                  this[e(323)].reset(),
                  this.openLoadingPopup({ closeTimer: 1e4 }),
                  setTimeout(function () {
                    to && (to = !1), n.getLeaderboardAsync(Za, !0);
                  }, 300));
              },
            },
            {
              key: r(315),
              value: function () {
                var t = r;
                if (this[t(323)])
                  try {
                    if (!to && Ya[Za][t(341)] > 0 && Ya[Za].length < 50) {
                      var e = parseInt(
                        this.listRanking[t(242)][t(355)][t(278)]
                      );
                      if (e < 0) {
                        var n = Ya[Za][t(341)],
                          i = 89 * n + 5 * (n - 1) - this[t(276)][t(295)];
                        (e = -e) >= i - 70 && this.getLeaderboardAsync(Za, !1);
                      }
                    }
                  } catch (e) {
                    console[t(367)](e);
                  }
              },
            },
            {
              key: r(354),
              value: function (t, e, n) {
                var i = r;
                if (this[i(321)] && n) {
                  var a = this.listRanking.grp[i(333)](e);
                  a && a.applyTexture(e);
                }
              },
            },
            {
              key: r(292),
              value: function () {
                var t = r;
                Ja(qa(a[t(327)]), "shutdown", this)[t(284)](this),
                  CyberInstance[t(281)][t(290)](
                    SFS2X.SFSEvent.EXTENSION_RESPONSE,
                    this[t(263)]
                  ),
                  this[t(336)][t(354)].remove(this[t(354)], this),
                  this[t(280)][t(269)](),
                  this[t(344)].destroy(),
                  (this[t(344)] = null),
                  (this[t(280)] = null),
                  (this[t(276)] = null);
              },
            },
          ]) && Ha(e.prototype, n),
          i && Ha(e, i),
          a
        );
      })(Gt),
      io = [
        "EXTENSION_RESPONSE",
        "params",
        "coin",
        "maxUsers",
        "285POXOXV",
        "CREATE_ROOM",
        "isFull",
        "userCount",
        "ExtensionRequest",
        "indexOf",
        "getSFSObject",
        "sfs",
        "onExtensionResponse",
        "4003163qDlXwJ",
        "ROOM_FULL",
        "key",
        "send",
        "screenReady",
        "ROOM_JOIN_ERROR",
        "bet",
        "140413upHAKX",
        "user",
        "closeLoadingPopup",
        "onJoinRoomError",
        "SFSEvent",
        "success",
        "ready",
        "535303vtAvTm",
        "USER_VARIABLES_UPDATE",
        "3935IiIpYN",
        "onRoomCreationError",
        "addEventListener",
        "prototype",
        "1XAYivS",
        "joinGame",
        "errorMessage",
        "1198867NdnXll",
        "getLong",
        "28RCmvJb",
        "gift.outOfMoney",
        "updateRoomList",
        "Cannot call a class as a function",
        "isConnected",
        "handleOutOfMoney",
        "containsKey",
        "42254meLBVZ",
        "extraCounter",
        "putUtfString",
        "roomList",
        "lang",
        "sendSubscribeRequest",
        "enumerable",
        "createGame",
        "errorCode",
        "1038297KrrkzW",
        "getVariable",
        "ROOM_NOT_FOUND",
        "gameGroup",
        "value",
        "getBool",
        "writable",
        "handleJoinRoomError",
        "isItMe",
        "screen",
        "CLOSE",
        "getInt",
        "socket",
        "2OGVlip",
        "SFSObject",
        "cmd",
        "configurable",
        "sentCount",
        "defineProperty",
        "1IfYuGs",
        "changedVars",
        "length",
      ],
      ro = function (t, e) {
        return io[(t -= 150)];
      };
    function ao(t, e) {
      for (var n = ro, i = 0; i < e[n(195)]; i++) {
        var r = e[i];
        (r[n(171)] = r[n(171)] || !1),
          (r[n(190)] = !0),
          n(178) in r && (r[n(180)] = !0),
          Object[n(192)](t, r[n(211)], r);
      }
    }
    !(function (t, e) {
      for (var n = ro; ; )
        try {
          if (
            774169 ===
            -parseInt(n(165)) * parseInt(n(158)) +
              -parseInt(n(156)) * parseInt(n(153)) +
              -parseInt(n(193)) * -parseInt(n(216)) -
              parseInt(n(174)) +
              parseInt(n(187)) * -parseInt(n(223)) +
              -parseInt(n(225)) * -parseInt(n(200)) +
              parseInt(n(209))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(io);
    var oo = (function () {
        var t,
          e,
          n,
          i = ro;
        function r(t) {
          var e = ro;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(ro(161));
          })(this, r),
            (this.screen = t),
            (this[e(207)] = CyberInstance[e(186)]),
            this[e(207)][e(151)](
              SFS2X[e(220)][e(214)],
              this.onJoinRoomError,
              this
            ),
            this.sfs.addEventListener(
              SFS2X[e(220)].ROOM_CREATION_ERROR,
              this[e(150)],
              this
            ),
            this.sfs.addEventListener(
              SFS2X[e(220)][e(196)],
              this[e(208)],
              this
            ),
            this.sfs[e(151)](
              SFS2X[e(220)][e(224)],
              this.onUserVariablesUpdate,
              this
            );
        }
        return (
          (t = r),
          (e = [
            {
              key: "onExtensionResponse",
              value: function (t) {
                var e = ro;
                if (this[e(213)]())
                  if (t[e(189)] == e(154)) this.handleJoinRoomError(t);
                  else if (t[e(189)] == e(172)) {
                    if (!t[e(197)][e(164)]("n")) return;
                    try {
                      this[e(183)][e(218)]();
                      var n = t.params[e(185)](e(173));
                      1 == n
                        ? this[e(183)].openIAP()
                        : 16 == n &&
                          new G(game, {
                            actionId: 2,
                            text: CyberInstance[e(169)][e(176)],
                            buttonText: CyberInstance[e(169)][e(201)],
                          });
                    } catch (t) {
                      console.error(t);
                    }
                  } else
                    t[e(189)] == e(159)
                      ? this[e(163)](t.params)
                      : "getRoomList" == t.cmd && this[e(160)](t[e(197)]);
              },
            },
            {
              key: i(160),
              value: function (t) {
                var e = i;
                if (this.screenReady()) {
                  var n = [];
                  if (t[e(164)](e(168))) {
                    var r = t.getSFSArray("roomList");
                    if (r.size() > 0)
                      for (var a = 0; a < r.size(); a++) {
                        var o = r[e(206)](a),
                          s = {
                            id: o[e(185)]("id"),
                            userCount: o[e(185)]("userCount"),
                            maxUsers: o[e(185)]("maxUsers"),
                            bet: o[e(157)](e(215)),
                          };
                        0 == s[e(203)] && (s[e(203)] = 1),
                          (s[e(202)] = s[e(203)] == s[e(199)] ? 1 : 0),
                          n.push(s);
                      }
                  }
                  this[e(183)][e(160)](n);
                }
              },
            },
            {
              key: "onUserVariablesUpdate",
              value: function (t) {
                var e = i;
                t.user[e(182)] &&
                  this[e(213)]() &&
                  -1 != t[e(194)][e(205)](e(198)) &&
                  this[e(183)].updateProfileCoin(
                    t[e(217)][e(175)](e(198))[e(178)]
                  );
              },
            },
            {
              key: i(181),
              value: function (t) {
                var e = i;
                if (
                  !1 === t[e(197)][e(179)](e(221)) &&
                  (this.screen[e(218)](), t[e(197)][e(164)](e(215)))
                ) {
                  var n = t[e(197)].getInt(e(173));
                  0 == n
                    ? G.showNotEnoughMoneyToJoin(params[e(157)](e(215)))
                    : 2 == n &&
                      new G(game, {
                        text: CyberInstance[e(169)][e(210)],
                        buttonText: CyberInstance[e(169)].CLOSE,
                      });
                }
              },
            },
            {
              key: i(163),
              value: function (t) {
                var e = i;
                this[e(183)].closeLoadingPopup(),
                  t[e(164)]("coin") && t[e(164)](e(191))
                    ? new ne(game, {
                        coin: t.getInt(e(198)),
                        sentCount: t[e(185)]("sentCount"),
                      })
                    : FacebookAds.instance[e(222)] &&
                      FacebookAds.instance[e(166)] < 5 &&
                      (this[e(183)].notEnoughMoneyPopup = new wt(game));
              },
            },
            {
              key: i(219),
              value: function (t) {
                var e = i;
                this[e(213)]() &&
                  (this[e(183)][e(218)](),
                  new G(game, {
                    text: t.errorMessage,
                    buttonText: CyberInstance[e(169)][e(184)],
                  }));
              },
            },
            {
              key: "onRoomCreationError",
              value: function (t) {
                var e = i;
                this.screenReady() &&
                  (this[e(183)][e(218)](),
                  new G(game, {
                    text: t[e(155)],
                    buttonText: CyberInstance[e(169)][e(184)],
                  }));
              },
            },
            {
              key: i(170),
              value: function (t) {
                var e = i;
                if (this.screenReady() && this[e(207)][e(162)]) {
                  var n = new SFS2X[e(188)]();
                  n[e(167)](e(177), t),
                    this.sfs[e(212)](new SFS2X[e(204)]("getRoomList", n));
                }
              },
            },
            {
              key: i(213),
              value: function () {
                return this[i(183)].screenReady;
              },
            },
          ]) && ao(t[ro(152)], e),
          n && ao(t, n),
          r
        );
      })(),
      so = [
        "addText",
        "length",
        "lang",
        "callAll",
        "row",
        "setPrototypeOf",
        "updateUserCount",
        "click",
        "#ffffff",
        "setText",
        "499290fmiThK",
        "833519dMTARc",
        "kill",
        "visible",
        "object",
        "1289MhOYvB",
        "openLoadingPopup",
        "451216OSFxJP",
        "symbol",
        "state",
        "sound",
        "call",
        "759036yooPqC",
        "betValue",
        "this hasn't been initialised - super() hasn't been called",
        "Image",
        "joinButton",
        "hearts",
        "1iXcjLS",
        "alpha",
        "FULL",
        "prototype",
        "joinRoom",
        "#98d2ff",
        "function",
        "betCondition",
        "userCount",
        "getPrototypeOf",
        "enumerable",
        "key",
        "setTo",
        "miniumMoneyCondition",
        "229699QjBpYY",
        "betX",
        "width",
        "name",
        "log",
        "canPlay",
        "bet",
        "JOIN",
        "shortenLargeNumber",
        "showNotEnoughMoneyToJoin",
        "full",
        "onJoinRequest",
        "lobbyScreen",
        "create",
        "700",
        "#fddb77",
        "instance",
        "maxUser",
        "text",
        "__proto__",
        "409741uOeues",
        "1mSemZj",
        "heart",
        "maxUsers",
        "anchor",
        "loadTexture",
        "height",
        "add",
        "112XyXfPH",
        "revive",
        "paused",
        "join",
        "writable",
        "game",
        "roomId",
        "inputEnabled",
        "heart_active",
      ],
      uo = function (t, e) {
        return so[(t -= 310)];
      };
    function co(t) {
      var e = uo;
      return (co =
        "function" == typeof Symbol && typeof Symbol.iterator === e(377)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol === e(314) &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function ho(t, e) {
      for (var n = uo, i = 0; i < e[n(360)]; i++) {
        var r = e[i];
        (r[n(318)] = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r[n(354)] = !0),
          Object.defineProperty(t, r[n(319)], r);
      }
    }
    function lo(t) {
      var e = uo;
      return (lo = Object.setPrototypeOf
        ? Object[e(317)]
        : function (t) {
            return t[e(341)] || Object.getPrototypeOf(t);
          })(t);
    }
    function fo(t) {
      if (void 0 === t) throw new ReferenceError(uo(383));
      return t;
    }
    function po(t, e) {
      return (po =
        Object[uo(364)] ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = uo; ; )
        try {
          if (
            446967 ===
            parseInt(n(370)) +
              -parseInt(n(387)) * -parseInt(n(369)) +
              -parseInt(n(343)) * parseInt(n(322)) +
              -parseInt(n(376)) +
              -parseInt(n(374)) * -parseInt(n(350)) +
              parseInt(n(342)) +
              -parseInt(n(381))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(so);
    var yo = (function (t) {
        var e,
          n,
          i,
          r = uo;
        function a(t) {
          var e,
            n,
            i,
            r,
            o = uo,
            s =
              arguments[o(360)] > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            u =
              arguments[o(360)] > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            c = arguments[o(360)] > 3 ? arguments[3] : void 0;
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a),
            (n = this),
            (i = lo(a)[o(380)](this, t.game, s, u)),
            (r = uo),
            ((e =
              !i || (co(i) !== r(373) && "function" != typeof i) ? fo(n) : i)[
              o(325)
            ] = c.id);
          var h = e[o(335)](0, 0, o(334), o(363));
          return (
            (h[o(324)] = e[o(355)][o(324)] - 60),
            (h[o(348)] = e[o(348)]),
            (e.x = e[o(355)][o(324)] / 2 - h[o(324)] / 2),
            (e[o(356)] = e.game.add[o(340)](20, e.height / 2 + 2, c.id, {
              font: APP_FONT,
              fontSize: 24,
              fill: o(313),
              fontWeight: "500",
            })),
            e[o(356)][o(346)][o(320)](0, 0.5),
            e[o(349)](e[o(356)]),
            (e.betValue = c[o(328)]),
            (e[o(328)] = e.game[o(349)][o(340)](
              t[o(323)] - 25,
              e[o(348)] / 2 + 2,
              f[o(330)](c[o(328)]),
              { font: APP_FONT, fontSize: 30, fill: o(337), fontWeight: o(336) }
            )),
            e[o(328)][o(346)][o(320)](0, 0.5),
            e.add(e[o(328)]),
            (e[o(315)] = e[o(355)][o(349)][o(340)](
              t.betConditionX - 30,
              e[o(348)] / 2 + 2,
              f[o(330)](c[o(328)] * CyberInstance[o(321)]),
              { font: APP_FONT, fontSize: 30, fill: o(337), fontWeight: "700" }
            )),
            e.betCondition[o(346)].setTo(0, 0.5),
            e[o(349)](e[o(315)]),
            (e[o(345)] = c[o(345)]),
            e.addHearts(c[o(316)], t.userCountX),
            (e.joinButton = new it(
              e.game,
              0,
              0,
              o(334),
              c[o(316)] != c[o(345)] ? "join" : o(332)
            )),
            (e.joinButton.x = h[o(324)] - e[o(385)][o(324)] - 12),
            (e.joinButton.y = e.height / 2 - e[o(385)][o(348)] / 2),
            e.joinButton[o(359)](
              c[o(316)] != c[o(345)]
                ? CyberInstance.lang[o(329)]
                : CyberInstance[o(361)][o(310)],
              { font: APP_FONT, fontSize: 21, fill: o(367), fontWeight: 500 }
            ),
            e[o(385)][o(366)](e[o(333)], fo(e)),
            (e[o(385)][o(357)] = c.userCount < e.maxUsers),
            (e[o(385)][o(388)] = c.userCount < e[o(345)] ? 1 : 0.5),
            e[o(349)](e[o(385)]),
            e
          );
        }
        return (
          (function (t, e) {
            if (typeof e !== uo(314) && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && po(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: "addHearts",
              value: function (t, e) {
                var n = uo;
                this.hearts = [];
                for (var i = e - 78, r = 0; r < CyberInstance.maxUsers; r++)
                  (this[n(386)][r] = new Phaser[n(384)](
                    this[n(355)],
                    i,
                    0,
                    n(334),
                    n(r <= t - 1 ? 358 : 344)
                  )),
                    (this[n(386)][r].y =
                      this.height / 2 - this[n(386)][r][n(348)] / 2),
                    (i += this.hearts[r][n(324)] + 20),
                    r <= this.maxUsers - 1 && this[n(349)](this.hearts[r]);
              },
            },
            {
              key: "updateUserCount",
              value: function (t) {
                for (var e = uo, n = 0; n < this[e(386)][e(360)]; n++)
                  this.hearts[n].loadTexture(e(334), e(n <= t - 1 ? 358 : 344));
                this[e(385)] &&
                  (this[e(385)][e(347)](
                    e(334),
                    t < this[e(345)] ? e(353) : "full"
                  ),
                  this.joinButton[e(359)](
                    t < this[e(345)]
                      ? CyberInstance.lang[e(329)]
                      : CyberInstance[e(361)].FULL
                  ),
                  (this[e(385)].inputEnabled = t < this.maxUsers),
                  (this.joinButton.alpha = t < this[e(345)] ? 1 : 0.5));
              },
            },
            {
              key: "refreshData",
              value: function (t) {
                var e = uo;
                (this[e(325)] = t.id),
                  this[e(356)].setText(this.name),
                  (this[e(382)] = t[e(328)]),
                  this.bet[e(368)](f.shortenLargeNumber(t.bet)),
                  this[e(315)][e(368)](
                    f[e(330)](t[e(328)] * CyberInstance[e(321)])
                  ),
                  (this[e(345)] = t[e(339)]);
                for (var n = 0; n < CyberInstance[e(345)]; n++)
                  n > 1 &&
                    (this.removeChild(this.hearts[n]),
                    n <= this[e(345)] - 1 && this[e(349)](this[e(386)][n]));
                this[e(365)](t[e(316)]);
              },
            },
            {
              key: "onJoinRequest",
              value: function () {
                var t = uo;
                CyberInstance[t(352)] && (CyberInstance[t(352)] = !1),
                  CyberInstance[t(379)].playButtonSound();
                try {
                  jt[t(338)][t(327)](this[t(382)])
                    ? (this.game[t(378)].getCurrentState()[t(375)](),
                      jt[t(338)][t(312)](this[t(325)]))
                    : G[t(331)](this[t(382)]);
                } catch (e) {
                  console[t(326)](e);
                }
              },
            },
            {
              key: r(371),
              value: function () {
                var t = r;
                1 == this[t(372)] &&
                  (this.callAll(t(371)), (this.visible = !1));
              },
            },
            {
              key: "revive",
              value: function () {
                var t = r;
                0 == this[t(372)] &&
                  (this[t(362)](t(351)), (this.visible = !0));
              },
            },
            {
              key: r(348),
              get: function () {
                return 89;
              },
            },
          ]) && ho(e[uo(311)], n),
          i && ho(e, i),
          a
        );
      })(Phaser.Group),
      vo = [
        "PLAY_NOW",
        "profileCoin",
        "bringToTop",
        "CREATE_ROOM",
        "openLoadingPopup",
        "image",
        "value",
        "34623PBvVOB",
        "bottom_bg",
        "homeScreen",
        "make",
        "configurable",
        "loadingText",
        "lang",
        "amateurButton",
        "no_avatar",
        "init",
        "videoPopup",
        "showNotEnoughMoneyToPlay",
        "getPrototypeOf",
        "LOADING_LOBBY_DATA",
        "setTo",
        "openIAP",
        "defineProperty",
        "setPrototypeOf",
        "group",
        "width",
        "inputEnabled",
        "roomGroupActive",
        "getGuserid",
        "listView",
        "anchor",
        "homeBtn",
        "onGroupChangeClick",
        "multiGroupDisabled",
        "events",
        "1qXldkc",
        "enumerable",
        "cache",
        "avatar",
        "getCoin",
        "preloadIcon",
        "this hasn't been initialised - super() hasn't been called",
        "beginnerButton",
        "userCountX",
        "setText",
        "preloadBg",
        "bitmapData",
        "CHUYEN_NGHIEP",
        "BET",
        "quickJoinBtn",
        "#98d2ff",
        "professionalButton",
        "shutdown",
        "updateRoomList",
        "iterator",
        "inited",
        "world",
        "addText",
        "screenReady",
        "applyTexture",
        "add",
        "betConditionX",
        "5083bbgAgf",
        "#ffffff",
        "onInputDown",
        "visible",
        "betX",
        "quickplay",
        "formatCoinWithCommas",
        "closeLoadingPopup",
        "loadTexture",
        "preload",
        "text",
        "floor",
        "object",
        "atlas/lobbyScreen/lobbyScreen.png",
        "updateProfileCoin",
        "game",
        "paused",
        "lobbyScreen",
        "constructor",
        "click",
        "create",
        "createGameBtn",
        "length",
        "load",
        "atlas/lobbyScreen/lobbyScreen.json",
        "checkImageKey",
        "header",
        "47254YLFvNq",
        "Rectangle",
        "function",
        "amateur",
        "createGamePopup",
        "HomeScreen",
        "hasOwnProperty",
        "handleOutOfMoney",
        "sendSubscribeRequest",
        "masterButton",
        "symbol",
        "undefined",
        "toUpperCase",
        "getOwnPropertyDescriptor",
        "Cannot call a class as a function",
        "profileGroup",
        "playButtonSound",
        "107WrQalU",
        "gameGroup",
        "instance",
        "addOnce",
        "get",
        "destroy",
        "22007oJnGBe",
        "TAP_SU",
        "#f4e269",
        "height",
        "476494dReecU",
        "loop",
        "master",
        "listHeader",
        "centerX",
        "angle",
        "13jtaGxJ",
        "atlas",
        "getDisplayName",
        "open",
        "time",
        "28cDpXVo",
        "stop",
        "writable",
        "close",
        "roomGroup",
        "1643179nuPxpm",
        "TOI_THIEU",
        "sendFindGameRequest",
        "key",
        "professional",
        "openCreateGamePopup",
        "PLAYER_COUNT",
        "start",
        "__proto__",
        "controller",
        "currentRoomGroup",
        "prototype",
        "onQuickPlayRequest",
        "avatarKey",
        "58131yHptYQ",
        "alphaMask",
        "call",
      ],
      bo = function (t, e) {
        return vo[(t -= 404)];
      };
    function go(t) {
      var e = bo;
      return (go =
        typeof Symbol === e(478) && typeof Symbol[e(441)] === e(486)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(478) &&
                t[n(467)] === Symbol &&
                t !== Symbol[n(530)]
                ? n(486)
                : typeof t;
            })(t);
    }
    function mo(t, e) {
      for (var n = bo, i = 0; i < e[n(471)]; i++) {
        var r = e[i];
        (r[n(423)] = r[n(423)] || !1),
          (r[n(547)] = !0),
          n(542) in r && (r[n(516)] = !0),
          Object[n(409)](t, r[n(522)], r);
      }
    }
    function Io(t, e) {
      var n = bo;
      return !e || (go(e) !== n(461) && typeof e !== n(478))
        ? (function (t) {
            var e = bo;
            if (void 0 === t) throw new ReferenceError(e(428));
            return t;
          })(t)
        : e;
    }
    function wo(t, e, n) {
      var i = bo;
      return (wo =
        typeof Reflect !== i(487) && Reflect[i(497)]
          ? Reflect[i(497)]
          : function (t, e, n) {
              var r = i,
                a = (function (t, e) {
                  var n = bo;
                  for (
                    ;
                    !Object[n(530)][n(482)].call(t, e) && null !== (t = So(t));

                  );
                  return t;
                })(t, e);
              if (a) {
                var o = Object[r(489)](a, e);
                return o[r(497)] ? o.get[r(535)](n) : o[r(542)];
              }
            })(t, e, n || t);
    }
    function So(t) {
      var e = bo;
      return (So = Object[e(410)]
        ? Object[e(405)]
        : function (t) {
            var n = e;
            return t[n(527)] || Object[n(405)](t);
          })(t);
    }
    function ko(t, e) {
      var n = bo;
      return (ko =
        Object[n(410)] ||
        function (t, e) {
          return (t[n(527)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = bo; ; )
        try {
          if (
            338106 ===
            -parseInt(n(476)) +
              parseInt(n(493)) * parseInt(n(449)) +
              parseInt(n(422)) * parseInt(n(503)) -
              parseInt(n(533)) +
              -parseInt(n(543)) * -parseInt(n(509)) +
              -parseInt(n(514)) * -parseInt(n(499)) -
              parseInt(n(519))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(vo);
    var Co = (function (t) {
        var e,
          n,
          i,
          r = bo;
        function a() {
          var t = bo;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(bo(490));
            })(this, a),
            Io(this, So(a)[t(535)](this))
          );
        }
        return (
          (function (t, e) {
            var n = bo;
            if (typeof e !== n(478) && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t[n(530)] = Object[n(469)](e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && ko(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(552),
              value: function () {
                var t = r;
                wo(So(a[t(530)]), t(552), this).call(this),
                  this[t(528)] || (this[t(528)] = new oo(this)),
                  this.currentRoomGroup || (this[t(529)] = "beginner"),
                  (CyberGlobalData[t(466)] = "LobbyScreen");
              },
            },
            {
              key: r(458),
              value: function () {
                var t = r,
                  e = this,
                  n = this[t(447)][t(541)](0, 0, "homeScreenBG2");
                if (
                  ((n[t(412)] = this[t(464)][t(412)]),
                  (n[t(502)] = this[t(464)][t(502)]),
                  !this.game.cache[t(474)]("lobbyScreen"))
                ) {
                  u[t(510)](t(466), t(462), t(473)),
                    (this[t(427)] = this[t(447)].image(
                      this[t(464)][t(443)][t(507)],
                      this.game.world.centerY,
                      t(432)
                    )),
                    this[t(427)].anchor[t(407)](0.5);
                  var i = this[t(464)][t(513)][t(469)](!0);
                  i[t(504)](30, function () {
                    var n = t;
                    (e[n(427)][n(508)] += 10),
                      1 == e.screenReady &&
                        (e.preloadIcon.destroy(), i[n(515)](!0), i.destroy());
                  }),
                    i.start();
                }
              },
            },
            {
              key: r(469),
              value: function () {
                var t = r,
                  e = this,
                  n = this[t(464)][t(447)][t(411)]();
                (this[t(418)] = n.create(0, 0, t(466), "home")),
                  (this[t(418)][t(413)] = !0),
                  this[t(418)][t(421)][t(451)][t(496)](function () {
                    var e = t;
                    CyberInstance.sound[e(492)](),
                      this.game.state.start(e(481), !0, !1);
                  }, this),
                  (this[t(436)] = new it(this[t(464)], 0, 17, t(466), t(454))),
                  this.quickJoinBtn[t(444)](CyberInstance[t(549)][t(536)], {
                    font: APP_FONT,
                    fontSize: 22,
                    fill: t(450),
                    fontWeight: 700,
                  }),
                  this[t(436)][t(468)](this[t(531)], this),
                  n[t(447)](this.quickJoinBtn),
                  (this.createGameBtn = new it(
                    this.game,
                    0,
                    this[t(436)].y,
                    t(466),
                    "creategame"
                  )),
                  this[t(470)][t(444)](
                    CyberInstance[t(549)][t(539)].toUpperCase(),
                    {
                      font: APP_FONT,
                      fontSize: 22,
                      fill: "#ffffff",
                      fontWeight: 700,
                    }
                  ),
                  this[t(470)][t(468)](this[t(524)], this),
                  n.add(this[t(470)]),
                  (this[t(436)].x =
                    this[t(464)].width / 2 -
                    (this[t(436)].width + this.createGameBtn.width + 12) / 2),
                  (this[t(470)].x =
                    this[t(436)].x + this.quickJoinBtn[t(412)] + 12);
                var i = n[t(469)](
                  0,
                  this[t(418)].y + this.homeBtn[t(502)],
                  "lobbyScreen",
                  t(475)
                );
                (i.width = this[t(464)].width - 60),
                  (i.x = this[t(464)][t(412)] / 2 - i[t(412)] / 2);
                var a = {
                    font: APP_FONT,
                    fontSize: 22,
                    fill: t(437),
                    fontWeight: 400,
                  },
                  o = this.game.add[t(459)](
                    i.x + 65,
                    i.y + i[t(502)] / 2 - 2,
                    CyberInstance.lang.ROOM,
                    a
                  );
                o[t(417)][t(407)](0.5), n[t(447)](o);
                var s = this[t(464)][t(447)][t(459)](
                  i.x + 200,
                  o.y,
                  CyberInstance.lang[t(435)],
                  a
                );
                s[t(417)].setTo(0.5), n[t(447)](s);
                var c = this.game.add[t(459)](
                  i.x + 414,
                  o.y,
                  CyberInstance[t(549)][t(525)],
                  a
                );
                c[t(417)][t(407)](0.5), n.add(c);
                var h = this[t(464)][t(447)][t(459)](
                  i.x + 705,
                  o.y,
                  CyberInstance[t(549)][t(520)],
                  a
                );
                h[t(417)][t(407)](0.5), n[t(447)](h);
                var l = this[t(464)][t(447)].text(
                  i.x + i[t(412)] - 135,
                  o.y,
                  CyberInstance[t(549)].STATUS,
                  a
                );
                l[t(417)][t(407)](0, 0.5), n[t(447)](l);
                var p = i.width - 336;
                (this[t(453)] = 150 + Math[t(460)]((30 * p) / 100) / 2),
                  (s.x = i.x + this[t(453)]),
                  (this.userCountX =
                    150 +
                    Math[t(460)]((30 * p) / 100) +
                    Math[t(460)]((40 * p) / 100) / 2),
                  (c.x = i.x + this[t(430)]),
                  (this[t(448)] =
                    150 +
                    Math[t(460)]((30 * p) / 100) +
                    Math.floor((40 * p) / 100) +
                    Math[t(460)]((30 * p) / 100) / 2),
                  (h.x = i.x + this[t(448)]);
                var d = CyberGlobalData[t(420)] ? 5 : 4,
                  y = 89 * d + 2 * (d - 1),
                  v = this[t(464)][t(447)][t(411)]();
                if (
                  ((this.listView = new dn(
                    this[t(464)],
                    v,
                    new Phaser[t(477)](0, 0, this[t(464)].width, y),
                    { direction: "y", padding: 2, searchForClicks: !0 }
                  )),
                  (v.x = 0),
                  (v.y = i.y + i[t(502)] + 5),
                  !CyberGlobalData[t(420)])
                ) {
                  this[t(491)] = this[t(464)][t(447)][t(411)]();
                  var b = this[t(491)][t(469)](0, 0, t(466), t(544));
                  (b.width = this[t(464)][t(412)]),
                    (b.y = this.game.height - b[t(502)]);
                  var g = {
                    font: APP_FONT,
                    fontSize: 22,
                    fill: t(437),
                    fontWeight: 500,
                  };
                  (this[t(429)] = new it(
                    this[t(464)],
                    600,
                    12,
                    t(466),
                    "beginner" == this[t(529)] ? t(414) : "roomGroup"
                  )),
                    (this.beginnerButton.gameGroup = "beginner"),
                    (this[t(429)].x =
                      this[t(464)][t(412)] - 4 * this.beginnerButton.width),
                    (this[t(429)].y =
                      this[t(464)][t(502)] - this[t(429)][t(502)] + 1),
                    this[t(429)][t(444)](CyberInstance[t(549)][t(500)], g),
                    this.beginnerButton.click(this.onGroupChangeClick, this),
                    this[t(491)][t(447)](this.beginnerButton),
                    (this.amateurButton = new it(
                      this[t(464)],
                      600,
                      this.beginnerButton.y,
                      t(466),
                      this[t(529)] == t(479) ? "roomGroupActive" : "roomGroup"
                    )),
                    (this.amateurButton[t(494)] = t(479)),
                    (this[t(550)].x =
                      this[t(429)].x + this.beginnerButton.width),
                    this[t(550)][t(444)](CyberInstance[t(549)].NGHIEP_DU, g),
                    this.amateurButton[t(468)](this[t(419)], this),
                    this[t(491)][t(447)](this.amateurButton),
                    (this[t(438)] = new it(
                      this[t(464)],
                      600,
                      this[t(550)].y,
                      t(466),
                      this.currentRoomGroup == t(523) ? t(414) : t(518)
                    )),
                    (this[t(438)][t(494)] = t(523)),
                    (this[t(438)].x =
                      this[t(550)].x + this[t(550)][t(412)] - 1),
                    this[t(438)][t(444)](CyberInstance[t(549)][t(434)], g),
                    this.professionalButton[t(468)](this[t(419)], this),
                    this[t(491)][t(447)](this[t(438)]),
                    (this[t(485)] = new it(
                      this[t(464)],
                      600,
                      this.professionalButton.y,
                      t(466),
                      this[t(529)] == t(505) ? t(414) : t(518)
                    )),
                    (this.masterButton[t(494)] = t(505)),
                    (this[t(485)].x =
                      this[t(438)].x + this[t(438)][t(412)] - 1),
                    this[t(485)][t(444)](CyberInstance[t(549)].MASTER, g),
                    this[t(485)][t(468)](this[t(419)], this),
                    this[t(491)][t(447)](this[t(485)]);
                  var m = this[t(491)].create(
                    15,
                    12,
                    t(545),
                    "profile_avatar_bg"
                  );
                  m.y = this[t(464)][t(502)] - m[t(502)] - 5;
                  var I = this.game[t(447)][t(459)](
                    m.x + m.width + 15,
                    m.y + 23,
                    jt[t(495)][t(511)](),
                    {
                      font: APP_FONT,
                      fontSize: 24,
                      fill: t(450),
                      fontWeight: 400,
                    }
                  );
                  this[t(491)][t(447)](I),
                    (this[t(537)] = this.game.add[t(459)](
                      I.x,
                      I.y + 36,
                      f.formatCoinWithCommas(jt[t(495)][t(426)]()),
                      {
                        font: APP_FONT,
                        fontSize: 24,
                        fill: t(501),
                        fontWeight: 400,
                      }
                    )),
                    this[t(491)][t(447)](this.profileCoin),
                    (this[t(532)] = t(425) + jt[t(495)][t(415)]()),
                    this[t(464)][t(424)][t(474)](this[t(532)])
                      ? ((this[t(425)] = this[t(464)][t(546)].image(
                          15,
                          15,
                          this[t(532)]
                        )),
                        this.applyTexture(86))
                      : ((this[t(425)] = this[t(464)][t(546)][t(541)](
                          15,
                          15,
                          t(545),
                          t(551)
                        )),
                        (this[t(425)][t(412)] = 86),
                        (this.avatar[t(502)] = 86)),
                    (this[t(425)].x = m.x + 4),
                    (this[t(425)].y = m.y + 2),
                    this[t(491)][t(447)](this[t(425)]);
                }
                this[t(464)].world[t(538)](n),
                  (this.listHeader = n),
                  (this[t(480)] = new sa(this[t(464)], { friendMode: !1 })),
                  this.createGamePopup.close(),
                  this.game[t(513)][t(421)].add(100, function () {
                    u[t(458)]();
                  }),
                  (this.loadingText = this[t(464)].add[t(459)](
                    this[t(464)].width / 2,
                    this[t(464)].height / 2,
                    CyberInstance[t(549)][t(406)][t(488)](),
                    {
                      font: APP_FONT,
                      fontSize: 30,
                      fill: "#FFFFFF",
                      fontWeight: 500,
                    }
                  )),
                  this.loadingText.anchor[t(407)](0.5),
                  (this[t(506)].visible = !1),
                  (this.quickJoinBtn[t(452)] = !1),
                  (this[t(470)].visible = !1),
                  (this[t(418)][t(452)] = !1),
                  CyberGlobalData[t(420)] || (this[t(491)][t(452)] = !1),
                  this.game[t(513)][t(421)][t(447)](300, function () {
                    var n = t;
                    (e[n(445)] = !0),
                      e.controller[n(484)](e[n(529)]),
                      !e[n(464)][n(424)][n(474)](e[n(532)]) &&
                        (e[n(464)][n(472)][n(541)](
                          e[n(532)],
                          CyberInstance[n(425)]
                        ),
                        e[n(464)][n(472)][n(526)]());
                  }),
                  this.game.time[t(421)].add(600, function () {
                    e[t(483)]();
                  });
              },
            },
            {
              key: r(440),
              value: function (t) {
                var e = r;
                if (
                  (0 == this[e(506)].visible &&
                    ((this[e(506)].visible = !0),
                    (this[e(436)][e(452)] = !0),
                    (this[e(470)][e(452)] = !0),
                    (this.homeBtn[e(452)] = !0),
                    this[e(548)][e(498)](),
                    (this[e(491)][e(452)] = !0)),
                  this[e(456)](),
                  t[e(471)] > 0)
                )
                  for (var n = 0; n < t.length; n++)
                    this[e(416)][e(447)](new yo(this, 0, 0, t[n]));
              },
            },
            {
              key: r(531),
              value: function () {
                var t = r;
                CyberInstance[t(465)] && (CyberInstance[t(465)] = !1),
                  jt[t(495)].canPlay()
                    ? (this[t(540)](), jt.instance[t(521)]())
                    : G[t(404)]();
              },
            },
            {
              key: r(524),
              value: function () {
                this[r(480)].open();
              },
            },
            {
              key: r(408),
              value: function () {
                var t = r;
                this[t(480)] && this.createGamePopup[t(517)](),
                  ve[t(495)][t(442)]
                    ? new jn(this[t(464)])
                    : pt[t(495)].inited &&
                      (this[t(553)]
                        ? this[t(553)][t(512)]()
                        : (this.videoPopup = new Yi(game)));
              },
            },
            {
              key: r(419),
              value: function (t) {
                var e = r,
                  n = this;
                t.gameGroup != this[e(529)] &&
                  (this[e(416)].removeAll(),
                  this[e(416)].reset(),
                  this.openLoadingPopup({ closeTimer: 15e3 }),
                  (this.currentRoomGroup = t.gameGroup),
                  "beginner" == t[e(494)]
                    ? (this[e(429)][e(457)](e(466), "roomGroupActive"),
                      this[e(550)].loadTexture(e(466), e(518)),
                      this[e(438)].loadTexture(e(466), e(518)),
                      this[e(485)][e(457)](e(466), e(518)))
                    : t[e(494)] == e(479)
                    ? (this.beginnerButton[e(457)](e(466), e(518)),
                      this[e(550)][e(457)](e(466), e(414)),
                      this[e(438)][e(457)]("lobbyScreen", e(518)),
                      this[e(485)][e(457)](e(466), e(518)))
                    : t[e(494)] == e(523)
                    ? (this.beginnerButton.loadTexture(e(466), e(518)),
                      this[e(550)][e(457)](e(466), e(518)),
                      this[e(438)].loadTexture("lobbyScreen", e(414)),
                      this.masterButton[e(457)](e(466), e(518)))
                    : t.gameGroup == e(505) &&
                      (this[e(429)][e(457)](e(466), e(518)),
                      this[e(550)][e(457)](e(466), e(518)),
                      this[e(438)][e(457)]("lobbyScreen", e(518)),
                      this[e(485)][e(457)](e(466), e(414))),
                  this[e(464)][e(513)][e(421)].add(300, function () {
                    var i = e;
                    n[i(528)][i(484)](t[i(494)]);
                  }));
              },
            },
            {
              key: r(446),
              value: function (t) {
                var e = r,
                  n = new Phaser.Rectangle(0, 0, t, t),
                  i = game.make[e(541)](0, 0, e(545), e(551));
                (i[e(412)] = t), (i.height = t);
                var a = game[e(546)][e(433)]();
                a[e(472)](i), i[e(498)]();
                var o = this[e(464)].make[e(433)](t, t);
                o[e(534)](this.avatarKey, a, n),
                  this.avatar[e(457)](o),
                  (this[e(425)].width = t),
                  (this[e(425)][e(502)] = t);
              },
            },
            {
              key: r(463),
              value: function (t) {
                var e = r;
                this[e(537)] && this[e(537)][e(431)](f[e(455)](t));
              },
            },
            {
              key: "shutdown",
              value: function () {
                var t = r;
                wo(So(a[t(530)]), t(439), this)[t(535)](this),
                  this[t(416)].destroy(),
                  (this[t(553)] = null),
                  (this[t(416)] = null);
              },
            },
          ]) && mo(e[bo(530)], n),
          i && mo(e, i),
          a
        );
      })(Gt),
      Oo = [
        "__proto__",
        "5949ZtRNGF",
        "call",
        "getPlatform",
        "length",
        "instance",
        "scale",
        "constructor",
        "assets/images",
        "9383kQgMni",
        "9AvhjqL",
        "state",
        "preload",
        "iterator",
        "SHOW_ALL",
        "HomeScreen",
        "game",
        "26742sCjGau",
        "getPrototypeOf",
        "function",
        "lobbyScreen",
        "symbol",
        "149359TKhWqs",
        "LeaderboardScreen",
        "initialize",
        "purchaseAsync",
        "LobbyScreen",
        "pageAlignHorizontally",
        "crossOrigin",
        "pageAlignVertically",
        "add",
        "153343rWgucr",
        "key",
        "assetUrl",
        "Cannot call a class as a function",
        "ScaleManager",
        "stage",
        "APP_FONT",
        "WEB",
        "preloadBg",
        "/bigImage/homeScreenBG1.jpg",
        "isGameAssetPreloaded",
        "DisconnectScreen",
        "prototype",
        "enableVisibilityChange",
        "setPrototypeOf",
        "startPreloader",
        "init",
        "image",
        "socket",
        "26226vtIWpt",
        "1UiquHa",
        "/bigImage/preload.png",
        "object",
        "Super expression must either be null or a function",
        "PreloaderScreen",
        "353590TgcRWK",
        "homeScreenBG1",
        "disableVisibilityChange",
        "enumerable",
        "create",
        "layout",
        "start",
        "scaleMode",
        "1EZHGQQ",
        "13VcPgca",
        "payments",
        "load",
        "defineProperty",
      ],
      Po = function (t, e) {
        return Oo[(t -= 194)];
      };
    function To(t) {
      var e = Po;
      return (To =
        typeof Symbol === e(261) && "symbol" == typeof Symbol[e(255)]
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                "function" == typeof Symbol &&
                t[n(249)] === Symbol &&
                t !== Symbol.prototype
                ? n(194)
                : typeof t;
            })(t);
    }
    function _o(t, e) {
      for (var n = Po, i = 0; i < e[n(246)]; i++) {
        var r = e[i];
        (r[n(232)] = r[n(232)] || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object[n(241)](t, r[n(205)], r);
      }
    }
    function xo(t, e) {
      var n = Po;
      return !e || (To(e) !== n(226) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function Eo(t) {
      var e = Po;
      return (Eo = Object[e(218)]
        ? Object[e(260)]
        : function (t) {
            var n = e;
            return t[n(242)] || Object[n(260)](t);
          })(t);
    }
    function jo(t, e) {
      var n = Po;
      return (jo =
        Object[n(218)] ||
        function (t, e) {
          return (t[n(242)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = Po; ; )
        try {
          if (
            178620 ===
            parseInt(n(243)) * -parseInt(n(238)) -
              parseInt(n(223)) +
              -parseInt(n(237)) * parseInt(n(195)) +
              parseInt(n(252)) * parseInt(n(259)) +
              parseInt(n(229)) +
              -parseInt(n(204)) * parseInt(n(224)) +
              -parseInt(n(251))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Oo);
    var Bo = (function (t) {
        var e,
          n,
          i,
          r = Po;
        function a() {
          var t = Po;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(Po(207));
            })(this, a),
            xo(this, Eo(a)[t(244)](this))
          );
        }
        return (
          (function (t, e) {
            var n = Po;
            if (typeof e !== n(261) && null !== e) throw new TypeError(n(227));
            (t.prototype = Object[n(233)](e && e[n(216)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && jo(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(220),
              value: function () {
                var t = r;
                (this[t(248)][t(236)] = Phaser[t(208)][t(256)]),
                  (this.scale[t(200)] = !0),
                  (this.scale[t(202)] = !0),
                  (this[t(209)][t(231)] = !0),
                  (this[t(240)][t(201)] = "anonymous"),
                  (window[t(210)] = "Roboto"),
                  (window[t(206)] = t(250)),
                  (CyberGlobalData[t(262)] = t(257)),
                  this.game[t(253)][t(203)](t(228), Oa),
                  this.game[t(253)][t(203)](t(257), va),
                  this[t(258)][t(253)].add(t(199), Co),
                  this[t(258)][t(253)].add(t(215), Aa),
                  this[t(258)].state[t(203)](t(196), no),
                  CyberInstance[t(217)]();
              },
            },
            {
              key: "preload",
              value: function () {
                var t = r;
                this[t(240)][t(221)](t(230), assetUrl + t(213)),
                  this[t(240)][t(221)](t(212), assetUrl + t(225));
              },
            },
            {
              key: "create",
              value: function () {
                var t = r,
                  e = this;
                if (fbInitializeAsyncResolved && null != gameLocale)
                  this[t(219)]();
                else {
                  this[t(214)] = !1;
                  var n = setInterval(function () {
                    var i = t;
                    if (fbInitializeAsyncResolved && null != gameLocale)
                      return clearInterval(n), void e[i(219)]();
                    !e.isGameAssetPreloaded &&
                      ((e.isGameAssetPreloaded = !0), u[i(254)]());
                  }, 60);
                }
              },
            },
            {
              key: r(219),
              value: function () {
                var t = r,
                  e = this;
                this[t(234)](),
                  setTimeout(function () {
                    var n = t;
                    e[n(258)][n(253)][n(235)]("PreloaderScreen", !0, !1);
                  }, 20);
              },
            },
            {
              key: "initIAP",
              value: function () {
                var t = r;
                FBInstant[t(245)]() != t(211) && "IOS" != FBInstant[t(245)]()
                  ? FBInstant[t(239)].onReady(function () {
                      var e = t;
                      IAPControl[e(247)][e(197)](CyberInstance[e(222)]);
                    })
                  : (FBInstant[t(239)][t(198)] = {});
              },
            },
          ]) && _o(e[Po(216)], n),
          i && _o(e, i),
          a
        );
      })(Gt),
      Ao = [
        "enumerable",
        "win",
        "sounds",
        "writable",
        "joinRoom",
        "next",
        "prototype",
        "value",
        "gift4",
        "Invalid attempt to destructure non-iterable instance",
        "loadSounds",
        "playClockSound",
        "button",
        "2qZgSPz",
        "gift5",
        "clock",
        "playJoinRoomSound",
        "709Lvnezb",
        "assets/sound/gift/brick.mp3",
        "723709XcAwKW",
        "playYourTurn",
        "playWinSound",
        "gift3",
        "gift6",
        "50771GzOCTD",
        "iterator",
        "call",
        "clear",
        "assets/sound/gift/water.mp3",
        "add",
        "Cannot call a class as a function",
        "playSound",
        "playDiscard",
        "playButtonSound",
        "assets/sound/gift/kiss_flowers.mp3",
        "set",
        "undefined",
        "has",
        "playSound error",
        "gift8",
        "configurable",
        "277044HVRKcI",
        "assets/sound/gift/eggs.mp3",
        "1375YcSnoX",
        "push",
        "length",
        "assets",
        "done",
        "key",
        "233007oKoDsi",
        "return",
        "playLoseSound",
        "isSoundOn",
        "get",
        "1123113sFkZzY",
        "danhbai",
        "806959ItQTTv",
        "assets/sound/button/button1.mp3",
        "denluot",
        "gift7",
        "assets/sound/gift/kiss.mp3",
      ],
      Ro = function (t, e) {
        return Ao[(t -= 214)];
      };
    function Fo(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n = Ro;
          if (
            !(
              Symbol[n(245)] in Object(t) ||
              "[object Arguments]" === Object[n(226)].toString[n(246)](t)
            )
          )
            return;
          var i = [],
            r = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var s, u = t[Symbol.iterator]();
              !(r = (s = u.next())[n(267)]) &&
              (i[n(264)](s.value), !e || i[n(265)] !== e);
              r = !0
            );
          } catch (t) {
            (a = !0), (o = t);
          } finally {
            try {
              r || null == u[n(270)] || u[n(270)]();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        })(t, e) ||
        (function () {
          throw new TypeError(Ro(229));
        })()
      );
    }
    function No(t, e) {
      for (var n = Ro, i = 0; i < e[n(265)]; i++) {
        var r = e[i];
        (r[n(220)] = r[n(220)] || !1),
          (r[n(260)] = !0),
          "value" in r && (r[n(223)] = !0),
          Object.defineProperty(t, r[n(268)], r);
      }
    }
    !(function (t, e) {
      for (var n = Ro; ; )
        try {
          if (
            588601 ===
            -parseInt(n(261)) +
              -parseInt(n(263)) * -parseInt(n(237)) +
              parseInt(n(239)) +
              parseInt(n(215)) +
              -parseInt(n(244)) +
              -parseInt(n(274)) +
              -parseInt(n(233)) * parseInt(n(269))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Ao);
    var Do = (function () {
        var t,
          e,
          n,
          i = Ro;
        function r() {
          var t = Ro;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(Ro(250));
          })(this, r),
            (this[t(222)] = new Map()),
            (this[t(266)] = new Map()),
            this[t(249)](t(232), t(216)),
            this[t(249)]("gift1", t(248)),
            this.add("gift2", t(254)),
            this.add(t(242), t(238)),
            this[t(249)](t(228), t(219)),
            this.add(t(234), "assets/sound/gift/tomato.mp3"),
            this[t(249)](t(243), "assets/sound/gift/Bom.mp3"),
            this[t(249)](t(218), "assets/sound/gift/beer1.mp3"),
            this.add(t(259), t(262));
        }
        return (
          (t = r),
          (e = [
            {
              key: "add",
              value: function (t, e) {
                this[Ro(266)].set(t, e);
              },
            },
            {
              key: i(230),
              value: function () {
                var t = i;
                if (typeof Howl != t(256) && null !== this[t(266)]) {
                  var e = !0,
                    n = !1,
                    r = void 0;
                  try {
                    for (
                      var a, o = this[t(266)][Symbol[t(245)]]();
                      !(e = (a = o[t(225)]()).done);
                      e = !0
                    ) {
                      var s = Fo(a[t(227)], 2),
                        u = s[0],
                        c = s[1];
                      if (!this[t(222)][t(257)](u)) {
                        var h = new Howl({
                          src: c,
                          volume: u != t(221) ? 1 : 0.5,
                        });
                        this[t(222)][t(255)](u, h);
                      }
                    }
                  } catch (t) {
                    (n = !0), (r = t);
                  } finally {
                    try {
                      !e && null != o[t(270)] && o[t(270)]();
                    } finally {
                      if (n) throw r;
                    }
                  }
                  this[t(266)][t(247)](), (this.assets = null);
                }
              },
            },
            {
              key: i(251),
              value: function (t) {
                var e = i;
                try {
                  CyberInstance[e(272)] &&
                    this[e(222)].has(t) &&
                    this[e(222)][e(273)](t).play();
                } catch (t) {
                  console.log(e(258), t);
                }
              },
            },
            {
              key: i(231),
              value: function () {
                var t = i;
                this[t(251)](t(235));
              },
            },
            {
              key: i(236),
              value: function () {
                var t = i;
                this.playSound(t(224));
              },
            },
            {
              key: i(271),
              value: function () {
                this[i(251)]("lose");
              },
            },
            {
              key: i(241),
              value: function () {
                var t = i;
                this[t(251)](t(221));
              },
            },
            {
              key: i(253),
              value: function () {
                var t = i;
                this[t(251)](t(232));
              },
            },
            {
              key: i(240),
              value: function () {
                var t = i;
                this.playSound(t(217));
              },
            },
            {
              key: i(252),
              value: function () {
                var t = i;
                this[t(251)](t(214));
              },
            },
          ]) && No(t[Ro(226)], e),
          n && No(t, n),
          r
        );
      })(),
      Lo = [
        "createQuickButton",
        "chat-game-messages",
        "HISTORY",
        "key",
        "Nhanh lên má!",
        "name",
        "createDOMItalicText",
        "chat-buttons",
        "1cxFRhh",
        "keyCode",
        "Ahihi Đồ Ngốc!",
        "gameMessages",
        "addDEvents",
        "trim",
        "chat",
        "layout",
        "1600HChHpR",
        "sender-avatar",
        "addEventListener",
        "hide",
        "bottom",
        "Đánh thế ai chơi!",
        "gameSendButton",
        "src",
        "Hay không bằng hên!",
        "countMessage",
        "sendImg",
        "lastSent",
        "getElementById",
        "onSendMessage",
        "data-tabid",
        "writable",
        "1207430NrPHCY",
        "body",
        "chatGameHeader",
        "text",
        "style",
        "gameChatInputText",
        "scrollToLatestMessage",
        "replace",
        "_controller",
        "noAvatar",
        "632557JmozXu",
        "IMG",
        "showChat",
        "getTime",
        "chat-history",
        "createDOMText",
        "Thua đi cưng!",
        "msg",
        "createDOMButton",
        "contains",
        "click",
        "Chơi hay nghỉ đây",
        "createElement",
        "Send",
        "keyup",
        "defineProperty",
        "length",
        "455977UJgXqj",
        "appendChild",
        "remove",
        "controller",
        "chatGameWrapper",
        "alt",
        "width",
        "removeChild",
        "avatar",
        "height",
        "WRITE_A_MESSAGE",
        "layoured",
        "SPAN",
        "button-text",
        "parentNode",
        "data-msg",
        "createButtons",
        "lang",
        "assets/css/images/send.png",
        "enumerable",
        "DIV",
        "dataset",
        "chatHistory",
        "1FVrMFk",
        "cloneNode",
        "footer-button",
        "chat-input",
        "my-message",
        "insertBefore",
        "offsetHeight",
        "add",
        "class",
        "history",
        "createDOMDiv",
        "1093lTpWgt",
        "chatButtons",
        "949318EJopGb",
        "sendGameMessage",
        "firstChild",
        "397149JFvdAI",
        "327193Chbuxu",
        "their-message",
        "footer-button-active",
        "last-consecutive",
        "Bình tĩnh nào, không nóng!",
        "Tưởng thế nào :v",
        "overlay",
        "querySelectorAll",
        "chat-game-header",
        "appendMessage",
        "createTextNode",
        ".button-text",
        "setAttribute",
        "wrapper",
        "1EORcje",
        "show",
        "preventDefault",
        "showHistory",
        "classList",
        "configurable",
        "chat-game-footer",
        ".footer-button",
        "chat-page-message-content",
        "Chat",
        "Cannot call a class as a function",
        "create",
        "clear-fix",
      ],
      Mo = function (t, e) {
        return Lo[(t -= 409)];
      };
    function Go(t, e) {
      for (var n = Mo, i = 0; i < e[n(505)]; i++) {
        var r = e[i];
        (r[n(525)] = r[n(525)] || !1),
          (r[n(439)] = !0),
          "value" in r && (r[n(478)] = !0),
          Object[n(504)](t, r[n(450)], r);
      }
    }
    !(function (t, e) {
      for (var n = Mo; ; )
        try {
          if (
            750542 ===
            -parseInt(n(416)) -
              parseInt(n(479)) +
              parseInt(n(455)) * parseInt(n(506)) +
              parseInt(n(489)) * parseInt(n(529)) -
              parseInt(n(420)) +
              parseInt(n(419)) * parseInt(n(434)) +
              parseInt(n(463)) * parseInt(n(414))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Lo);
    var Wo = null,
      Vo = (function () {
        var t,
          e,
          n,
          i = Mo;
        function r(t) {
          var e = Mo;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(Mo(444));
          })(this, r),
            (this[e(509)] = t),
            (this[e(472)] = 0),
            this.create(),
            this[e(459)](),
            (this.lastSent = new Date()[e(492)]()),
            (Wo = this);
        }
        return (
          (t = r),
          (e = [
            {
              key: i(445),
              value: function () {
                var t = i;
                document[t(480)][t(507)](
                  f[t(413)]("chatGameWrapper", "chat-game-wrapper")
                ),
                  (this[t(433)].style[t(512)] = window.innerWidth + "px"),
                  this.wrapper[t(507)](f[t(413)](t(426)));
                var e = f[t(413)](null, t(532)),
                  n = f[t(413)](t(481), t(428));
                n[t(438)][t(410)](t(446)),
                  n.appendChild(e),
                  this[t(433)].appendChild(n);
                var r = f[t(494)](t(484), CyberInstance[t(523)][t(516)], 100);
                r[t(438)][t(410)]("input"),
                  r[t(438)].add("text-area-type"),
                  e[t(507)](r);
                var a = f[t(497)](t(469), null);
                a.classList[t(410)]("send-button");
                var o = document[t(501)](t(490));
                o[t(432)](t(470), t(524)),
                  o[t(432)](t(511), t(502)),
                  o[t(438)][t(410)](t(473)),
                  a[t(507)](o),
                  e[t(507)](a);
                var s = f[t(413)](t(415), t(454));
                s.appendChild(this[t(522)]([t(495), t(457), t(468)])),
                  s[t(507)](this[t(522)]([t(451), t(471), t(425)])),
                  s[t(507)](
                    this.createButtons([t(500), t(424), "Cao thủ !!!"])
                  ),
                  this.wrapper[t(507)](s);
                var u = f[t(413)](t(528), t(493));
                u[t(438)][t(410)](t(466));
                var c = f[t(413)](t(458), t(448));
                c[t(438)][t(410)](t(442)),
                  u[t(507)](c),
                  this[t(433)][t(507)](u);
                var h = f[t(413)]("footerWrapper", t(440));
                h[t(438)][t(410)](t(446));
                var l = document[t(501)]("DIV");
                l[t(438)][t(410)](t(531)),
                  l[t(438)][t(410)](t(422)),
                  l.setAttribute("data-tabid", t(461)),
                  l[t(507)](document[t(430)](t(443))),
                  h.appendChild(l);
                var p = document[t(501)](t(526));
                p[t(438)].add(t(531)),
                  p[t(432)](t(477), t(412)),
                  p[t(507)](document[t(430)](CyberInstance.lang[t(449)])),
                  h[t(507)](p),
                  this[t(433)][t(507)](h);
              },
            },
            {
              key: "layout",
              value: function () {
                var t = i;
                if (!this[t(517)]) {
                  var e =
                    document[t(475)](t(481)).offsetHeight +
                    document[t(475)]("chatButtons")[t(409)];
                  document[t(475)](t(458))[t(483)][t(515)] = e + "px";
                  for (
                    var n =
                        (parseFloat(
                          getComputedStyle(this.wrapper, null).width[t(486)](
                            "px",
                            ""
                          )
                        ) -
                          40) /
                          3 -
                        30,
                      r = document[t(427)](t(431)),
                      a = 0;
                    a < r[t(505)];
                    a++
                  )
                    r[a].style.width = n + "px";
                  var o = document[t(475)]("footerWrapper")[t(409)];
                  (document[t(475)](t(528)).style.bottom = o + "px"),
                    (document[t(475)](t(415))[t(483)][t(467)] = o + "px"),
                    (this[t(517)] = !0);
                }
              },
            },
            {
              key: i(435),
              value: function () {
                var t = i;
                !this[t(433)][t(438)][t(498)](t(435)) &&
                  (this.overlay[t(438)][t(410)](t(435)),
                  this[t(433)][t(438)][t(410)](t(435)),
                  this[t(491)](),
                  Wo[t(462)]());
              },
            },
            {
              key: "hide",
              value: function () {
                var t = i;
                this[t(433)][t(438)].remove("show"),
                  this[t(426)][t(438)][t(508)](t(435));
              },
            },
            {
              key: "destroy",
              value: function () {
                var t = i;
                this[t(433)][t(520)][t(513)](this[t(433)]), (Wo = null);
              },
            },
            {
              key: "showChat",
              value: function () {
                var t = i;
                document.getElementById(t(528)).classList[t(410)](t(466)),
                  document[t(475)](t(415))[t(438)][t(508)]("hide");
              },
            },
            {
              key: "showHistory",
              value: function () {
                var t = i;
                document[t(475)](t(528))[t(438)][t(508)](t(466)),
                  document[t(475)](t(415))[t(438)][t(410)](t(466)),
                  this[t(485)]();
              },
            },
            {
              key: "addDEvents",
              value: function () {
                var t = i;
                document[t(475)](t(469))[t(465)](t(499), function () {
                  var e = t;
                  Wo[e(476)](), Wo[e(466)]();
                }),
                  document
                    .getElementById("gameChatInputText")
                    [t(465)](t(503), function (e) {
                      var n = t;
                      13 === e[n(456)] &&
                        (e[n(436)](), document[n(475)](n(469))[n(499)]());
                    }),
                  this[t(426)][t(465)]("click", function () {
                    Wo.hide();
                  });
                for (
                  var e = document[t(427)](t(431)), n = 0;
                  n < e[t(505)];
                  n++
                )
                  e[n][t(465)](t(499), function () {
                    var e = t,
                      n = this[e(527)][e(496)];
                    Wo.controller[e(417)](n), Wo.hide();
                  });
                var r = document[t(427)](".footer-button");
                for (n = 0; n < r[t(505)]; n++)
                  r[n][t(465)](t(499), function () {
                    var e = t;
                    this[e(527)].tabid === e(461) ? Wo[e(491)]() : Wo[e(437)]();
                    for (
                      var n = document[e(427)](e(441)), i = 0;
                      i < n[e(505)];
                      i++
                    )
                      n[i].classList[e(498)]("footer-button-active") &&
                        n[i][e(438)].remove(e(422));
                    this[e(438)].add(e(422));
                  });
              },
            },
            {
              key: i(476),
              value: function () {
                var t = i;
                if (!(new Date()[t(492)]() - this[t(474)] < 2e3)) {
                  var e = document[t(475)](t(484)).value;
                  if (!e || 0 == e[t(460)]()[t(505)]) return !1;
                  (document[t(475)](t(484)).value = ""),
                    Wo[t(509)][t(417)](e),
                    (this[t(474)] = new Date()[t(492)]());
                }
              },
            },
            {
              key: i(429),
              value: function (t, e, n) {
                var r = i,
                  a = document[r(501)](r(526)),
                  o = document[r(501)](r(518));
                if (
                  ((o.innerHTML = e),
                  a.appendChild(o),
                  a.classList[r(410)](r(482)),
                  n)
                )
                  a[r(438)].add(r(533));
                else if (
                  (a.classList.add(r(421)),
                  a.classList.add(r(423)),
                  a[r(534)](f[r(453)](t[r(452)]), a[r(418)]),
                  t[r(514)])
                ) {
                  var s = document[r(501)]("img");
                  (s[r(470)] = t[r(514)]),
                    s[r(432)](r(411), r(464)),
                    a[r(507)](s[r(530)](!0));
                } else a[r(438)][r(410)](r(488));
                document[r(475)]("gameMessages")[r(507)](a),
                  this[r(472)] >= 200 &&
                    document.getElementById(r(458)).firstElementChild[r(508)](),
                  this[r(485)](),
                  this.countMessage++;
              },
            },
            {
              key: i(485),
              value: function () {
                var t = i;
                document.getElementById(t(458)).scrollTop = document[t(475)](
                  t(458)
                ).scrollHeight;
              },
            },
            {
              key: i(522),
              value: function (t) {
                var e = i,
                  n = document[e(501)]("DIV");
                n.classList[e(410)](e(446)), n[e(438)].add("chat-button-row");
                for (var r = 0; r < t[e(505)]; r++) {
                  var a = this[e(447)](t[r]);
                  n.appendChild(a);
                }
                return n;
              },
            },
            {
              key: i(447),
              value: function (t) {
                var e = i,
                  n = document[e(501)](e(526));
                return (
                  n.classList.add(e(519)),
                  n[e(432)](e(521), t),
                  n[e(507)](document[e(430)](t)),
                  n
                );
              },
            },
            {
              key: i(433),
              get: function () {
                var t = i;
                return document[t(475)](t(510));
              },
            },
            {
              key: i(426),
              get: function () {
                var t = i;
                return document[t(475)](t(426));
              },
            },
            {
              key: i(509),
              set: function (t) {
                this[i(487)] = t;
              },
              get: function () {
                return this._controller;
              },
            },
          ]) && Go(t.prototype, e),
          n && Go(t, n),
          r
        );
      })(),
      Uo = [
        "avatar",
        "PublicMessageRequest",
        "1193cCaZtC",
        "ROOM_JOIN",
        "assets/images/no_avatar.png",
        "guserid",
        "ĐỊt",
        "555073DQRoru",
        "lồn",
        "onGameRoomMsg",
        "buồi",
        "mySelf",
        "Signal",
        "942Juiwae",
        "SFSEvent",
        "116903zedSNK",
        "show",
        "3XXocZW",
        "226741GkhRNl",
        "addEventListener",
        "Cặc",
        "message",
        "configurable",
        "USER_EXIT_ROOM",
        "room",
        "prototype",
        "Lồn",
        "5105PaskYn",
        "1gRhrpG",
        "***",
        "onJoinRoom",
        "onPublicMessage",
        "sfs",
        "địt",
        "dispatch",
        "key",
        "join",
        "isGame",
        "lastJoinedRoom",
        "removeAll",
        "sendGameMessage",
        "PUBLIC_MESSAGE",
        "enumerable",
        "getVariable",
        "value",
        "Buồi",
        "closeChatScreen",
        "4XKiZvk",
        "296038KrxwLq",
        "destroy",
        "length",
        "username",
        "defineProperty",
        "send",
        "1272720OjARBo",
        "hide",
        "sender",
        "openChatScreen",
        "writable",
        "split",
        "Cannot call a class as a function",
        "19zYzAWz",
        "cặc",
        "chatScreen",
        "containsVariable",
        "Địt",
      ],
      zo = function (t, e) {
        return Uo[(t -= 156)];
      };
    function Ho(t, e) {
      for (var n = zo, i = 0; i < e.length; i++) {
        var r = e[i];
        (r[n(163)] = r[n(163)] || !1),
          (r[n(209)] = !0),
          "value" in r && (r[n(179)] = !0),
          Object[n(173)](t, r[n(156)], r);
      }
    }
    !(function (t, e) {
      for (var n = zo; ; )
        try {
          if (
            892165 ===
            parseInt(n(175)) +
              -parseInt(n(168)) * parseInt(n(205)) +
              -parseInt(n(194)) * parseInt(n(215)) +
              -parseInt(n(169)) +
              -parseInt(n(202)) * -parseInt(n(204)) +
              -parseInt(n(200)) * -parseInt(n(189)) +
              -parseInt(n(182)) * parseInt(n(214))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Uo);
    var Xo = (function () {
        var t,
          e,
          n,
          i = zo;
        function r(t) {
          var e = zo;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(zo(181));
          })(this, r),
            (this.sfs = t),
            this[e(219)][e(206)](
              SFS2X[e(201)][e(162)],
              this.onPublicMessage,
              this
            ),
            this.sfs[e(206)](SFS2X[e(201)][e(190)], this[e(217)], this),
            this[e(219)][e(206)](
              SFS2X.SFSEvent[e(210)],
              this.onUserExitRoom,
              this
            ),
            (this[e(184)] = null),
            (this[e(196)] = new Phaser[e(199)]());
        }
        return (
          (t = r),
          (e = [
            {
              key: i(178),
              value: function () {
                var t = i;
                this[t(184)] && this[t(184)][t(203)]();
              },
            },
            {
              key: i(167),
              value: function () {
                var t = i;
                this[t(184)] && this[t(184)][t(176)]();
              },
            },
            {
              key: i(217),
              value: function (t) {
                var e = i;
                t[e(211)][e(158)] && (this.chatScreen = new Vo(this));
              },
            },
            {
              key: "onUserExitRoom",
              value: function (t) {
                var e = i;
                t.user.isItMe &&
                  t[e(211)][e(158)] &&
                  (null != this[e(184)] &&
                    (this[e(184)][e(170)](), (this[e(184)] = null)),
                  this[e(196)][e(160)]());
              },
            },
            {
              key: i(218),
              value: function (t) {
                var e = i,
                  n = this[e(219)][e(198)][e(164)](e(192)).value,
                  r = t[e(177)][e(164)]("guserid")[e(165)];
                t[e(211)][e(158)] &&
                  this[e(184)] &&
                  (this[e(184)].appendMessage(
                    {
                      guserid: r,
                      avatar: t[e(177)].containsVariable("avatar")
                        ? t.sender.getVariable(e(187))[e(165)]
                        : e(191),
                      name: t.sender[e(185)](e(172))
                        ? t[e(177)][e(164)](e(172))[e(165)]
                        : "",
                    },
                    t[e(208)],
                    r === n
                  ),
                  this[e(196)][e(221)](t));
              },
            },
            {
              key: i(161),
              value: function (t) {
                for (
                  var e = i,
                    n = [
                      e(195),
                      e(213),
                      "LỒn",
                      e(220),
                      e(186),
                      e(193),
                      e(197),
                      e(166),
                      e(183),
                      e(207),
                    ],
                    r = 0;
                  r < n[e(171)];
                  r++
                )
                  t = (t = t[e(180)](n[r]).join(e(216)))
                    [e(180)](n[r].toUpperCase())
                    [e(157)](e(216));
                this[e(219)][e(174)](
                  new SFS2X[e(188)](t),
                  null,
                  this[e(219)][e(159)]
                );
              },
            },
          ]) && Ho(t[zo(212)], e),
          n && Ho(t, n),
          r
        );
      })(),
      Jo = [
        "enumerable",
        "defineProperty",
        "addChild",
        "symbol",
        "Cannot call a class as a function",
        "game",
        "dispatch",
        "1rElSST",
        "prototype",
        "width",
        "85886YqqPWU",
        "writable",
        "__proto__",
        "getPrototypeOf",
        "addOnce",
        "overlayTexture",
        "add",
        "523rgHzFf",
        "create",
        "constructor",
        "paused",
        "398459omHrbi",
        "configurable",
        "436gYdiUF",
        "443331adIJxC",
        "263331rALIKA",
        "lang",
        "alpha",
        "1gZszEA",
        "value",
        "this hasn't been initialised - super() hasn't been called",
        "object",
        "inputEnabled",
        "setPrototypeOf",
        "395117lAcfaJ",
        "destroy",
        "onInputDown",
        "278689lsAftZ",
        "height",
        "#ffffff",
        "TAP_TO_RESUME",
        "6opShpJ",
        "onResume",
        "length",
        "function",
      ],
      qo = function (t, e) {
        return Jo[(t -= 335)];
      };
    function Ko(t) {
      var e = qo;
      return (Ko =
        typeof Symbol === e(373) && typeof Symbol.iterator === e(377)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(373) &&
                t[n(348)] === Symbol &&
                t !== Symbol[n(337)]
                ? "symbol"
                : typeof t;
            })(t);
    }
    function Yo(t, e) {
      for (var n = qo, i = 0; i < e[n(372)]; i++) {
        var r = e[i];
        (r[n(374)] = r[n(374)] || !1),
          (r[n(351)] = !0),
          n(358) in r && (r[n(340)] = !0),
          Object[n(375)](t, r.key, r);
      }
    }
    function Zo(t) {
      var e = qo;
      return (Zo = Object[e(362)]
        ? Object[e(342)]
        : function (t) {
            var n = e;
            return t[n(341)] || Object[n(342)](t);
          })(t);
    }
    function Qo(t) {
      if (void 0 === t) throw new ReferenceError(qo(359));
      return t;
    }
    function $o(t, e) {
      return ($o =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t[qo(341)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = qo; ; )
        try {
          if (
            281313 ===
            -parseInt(n(366)) * parseInt(n(336)) +
              -parseInt(n(346)) * -parseInt(n(352)) +
              -parseInt(n(370)) * -parseInt(n(339)) +
              parseInt(n(354)) +
              parseInt(n(363)) +
              -parseInt(n(353)) +
              -parseInt(n(350)) * parseInt(n(357))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Jo);
    var ts = (function (t) {
        var e,
          n,
          i,
          r = qo;
        function a(t) {
          var e,
            n,
            i,
            r,
            o = qo;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(qo(378));
          })(this, a),
            (n = this),
            (i = Zo(a).call(this, t, 0, 0, CyberGlobalData[o(344)])),
            (r = qo),
            ((e = !i || (Ko(i) !== r(360) && typeof i !== r(373)) ? Qo(n) : i)[
              o(338)
            ] = e[o(379)].width),
            (e.height = e[o(379)][o(367)]),
            (e[o(356)] = 0.85),
            (e[o(361)] = !0);
          var s = new Phaser.Text(
            e.game,
            e[o(338)] / 2,
            e.height / 2,
            CyberInstance[o(355)][o(369)].toUpperCase(),
            { font: APP_FONT, fill: o(368), fontWeight: 400, fontSize: 60 }
          );
          return (
            s.anchor.setTo(0.5),
            e[o(376)](s),
            e.events[o(365)][o(343)](e.onResume, Qo(e)),
            e[o(379)][o(345)].existing(Qo(e)),
            e
          );
        }
        return (
          (function (t, e) {
            var n = qo;
            if (typeof e !== n(373) && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t[n(337)] = Object[n(347)](e && e[n(337)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && $o(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(371),
              value: function () {
                var t = r;
                (CyberInstance[t(349)] = !1),
                  CyberInstance[t(371)][t(335)](),
                  this[t(364)](!0);
              },
            },
          ]) && Yo(e.prototype, n),
          i && Yo(e, i),
          a
        );
      })(Phaser.Sprite),
      es = [
        "create",
        "call",
        "armature",
        "animation",
        "game",
        "Super expression must either be null or a function",
        "addDBEventListener",
        "anim",
        "getPrototypeOf",
        "constructor",
        "787544tXpFgb",
        "addChild",
        "Cannot call a class as a function",
        "length",
        "11EkiyWz",
        "getJSON",
        "symbol",
        "setPrototypeOf",
        "defineProperty",
        "animName",
        "3823359nHfRQh",
        "prototype",
        "object",
        "getOwnPropertyDescriptor",
        "parseTextureAtlasData",
        "function",
        "getImage",
        "EventObject",
        "destroy",
        "enumerable",
        "img",
        "writable",
        "467754SYbxhV",
        "get",
        "LOOP_COMPLETE",
        "1eFpHVo",
        "setTo",
        "buildArmatureDisplay",
        "__proto__",
        "299634tFWUwD",
        "base",
        "options",
        "iterator",
        "play",
        "1537362IPUcqX",
        "this hasn't been initialised - super() hasn't been called",
        "155698tCAWdt",
        "PhaserFactory",
        "undefined",
        "anchor",
        "value",
        "atlas",
        "1585285HXcgXI",
        "stop",
      ],
      ns = function (t, e) {
        return es[(t -= 284)];
      };
    function is(t) {
      var e = ns;
      return (is =
        typeof Symbol === e(332) && typeof Symbol[e(295)] === e(323)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                "function" == typeof Symbol &&
                t[n(316)] === Symbol &&
                t !== Symbol[n(328)]
                ? "symbol"
                : typeof t;
            })(t);
    }
    function rs(t, e) {
      for (var n = ns, i = 0; i < e[n(320)]; i++) {
        var r = e[i];
        (r[n(336)] = r.enumerable || !1),
          (r.configurable = !0),
          n(303) in r && (r[n(284)] = !0),
          Object[n(325)](t, r.key, r);
      }
    }
    function as(t, e) {
      var n = ns;
      return !e || (is(e) !== n(329) && typeof e !== n(332))
        ? (function (t) {
            var e = ns;
            if (void 0 === t) throw new ReferenceError(e(298));
            return t;
          })(t)
        : e;
    }
    function os(t, e, n) {
      var i = ns;
      return (os =
        typeof Reflect !== i(301) && Reflect[i(286)]
          ? Reflect[i(286)]
          : function (t, e, n) {
              var r = i,
                a = (function (t, e) {
                  var n = ns;
                  for (
                    ;
                    !Object[n(328)].hasOwnProperty[n(308)](t, e) &&
                    null !== (t = ss(t));

                  );
                  return t;
                })(t, e);
              if (a) {
                var o = Object[r(330)](a, e);
                return o.get ? o.get[r(308)](n) : o[r(303)];
              }
            })(t, e, n || t);
    }
    function ss(t) {
      var e = ns;
      return (ss = Object[e(324)]
        ? Object[e(315)]
        : function (t) {
            var n = e;
            return t[n(291)] || Object[n(315)](t);
          })(t);
    }
    function us(t, e) {
      return (us =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t[ns(291)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = ns; ; )
        try {
          if (
            991810 ===
            parseInt(n(292)) +
              parseInt(n(305)) +
              parseInt(n(285)) +
              -parseInt(n(317)) +
              parseInt(n(299)) * parseInt(n(321)) +
              parseInt(n(297)) +
              parseInt(n(288)) * -parseInt(n(327))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(es);
    var cs = {},
      hs = (function (t) {
        var e,
          n,
          i,
          r = ns;
        function a(t, e) {
          var n,
            i = ns,
            r =
              arguments[i(320)] > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            s =
              arguments[i(320)] > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : null,
            u =
              arguments[i(320)] > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : null;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(ns(319));
          })(this, a),
            ((n = as(this, ss(a)[i(308)](this, e, r, o, s, u)))[i(294)] = t);
          var c = dragonBones[i(300)].factory;
          return (
            !cs[n[i(294)].armature] &&
              (c.parseDragonBonesData(n[i(311)].cache[i(322)](n.options.ske)),
              c[i(331)](
                n[i(311)].cache[i(322)](n.options[i(304)]),
                n[i(311)].cache[i(333)](n[i(294)][i(337)], !0)[i(293)]
              ),
              (cs[n[i(294)][i(309)]] = n[i(294)].armature)),
            (n[i(314)] = c[i(290)](n[i(294)][i(309)])),
            (n[i(314)].x = n.options.x),
            (n.anim.y = n[i(294)].y),
            n[i(314)][i(302)][i(289)](0.5),
            n[i(318)](n[i(314)]),
            n
          );
        }
        return (
          (function (t, e) {
            var n = ns;
            if (typeof e !== n(332) && null !== e) throw new TypeError(n(312));
            (t[n(328)] = Object[n(307)](e && e[n(328)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && us(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(296),
              value: function () {
                var t = r,
                  e =
                    arguments[t(320)] > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  n =
                    arguments[t(320)] > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                this.anim[t(310)][t(296)](this[t(294)].animName),
                  e || this[t(314)][t(313)](dragonBones[t(334)][t(287)], n);
              },
            },
            {
              key: r(306),
              value: function () {
                var t = r;
                this[t(314)][t(310)][t(306)](this[t(294)][t(326)]);
              },
            },
            {
              key: "destroy",
              value: function () {
                var t = r;
                os(ss(a[t(328)]), t(335), this)[t(308)](this, !0);
              },
            },
          ]) && rs(e.prototype, n),
          i && rs(e, i),
          a
        );
      })(Phaser.Sprite),
      ls = [
        "constructor",
        "function",
        "prototype",
        "17MRwnAh",
        "langCode",
        "length",
        "Sprite",
        "getPrototypeOf",
        "__proto__",
        "doGetFrame",
        "6LiHMhZ",
        "this hasn't been initialised - super() hasn't been called",
        "setPrototypeOf",
        "enumerable",
        "199720ZtCAOS",
        "12417SRPVfd",
        "14TiphhL",
        "value",
        "8776FgqzHG",
        "symbol",
        "Super expression must either be null or a function",
        "iterator",
        "key",
        "Cannot call a class as a function",
        "defineProperty",
        "152257TZwzSi",
        "object",
        "9001pVIZXp",
        "336184mGnEvu",
        "698600pgWbBc",
      ],
      fs = function (t, e) {
        return ls[(t -= 407)];
      },
      ps = fs;
    function ds(t) {
      var e = fs;
      return (ds =
        "function" == typeof Symbol && typeof Symbol[e(431)] === e(429)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(411) &&
                t[n(410)] === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function ys(t, e) {
      for (var n = fs, i = 0; i < e[n(415)]; i++) {
        var r = e[i];
        (r[n(423)] = r[n(423)] || !1),
          (r.configurable = !0),
          n(427) in r && (r.writable = !0),
          Object[n(434)](t, r[n(432)], r);
      }
    }
    function vs(t, e) {
      var n = fs;
      return !e || (ds(e) !== n(436) && typeof e !== n(411))
        ? (function (t) {
            var e = fs;
            if (void 0 === t) throw new ReferenceError(e(421));
            return t;
          })(t)
        : e;
    }
    function bs(t) {
      var e = fs;
      return (bs = Object.setPrototypeOf
        ? Object[e(417)]
        : function (t) {
            var n = e;
            return t.__proto__ || Object[n(417)](t);
          })(t);
    }
    function gs(t, e) {
      var n = fs;
      return (gs =
        Object[n(422)] ||
        function (t, e) {
          return (t[n(418)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = fs; ; )
        try {
          if (
            488531 ===
            parseInt(n(424)) +
              -parseInt(n(408)) +
              parseInt(n(409)) +
              -parseInt(n(426)) * -parseInt(n(425)) +
              parseInt(n(420)) * parseInt(n(407)) +
              -parseInt(n(435)) +
              -parseInt(n(413)) * parseInt(n(428))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(ls);
    var ms = (function (t) {
        var e,
          n,
          i,
          r = fs;
        function a(t, e, n, i, r) {
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError(fs(433));
            })(this, a),
            vs(this, bs(a).call(this, t, e, n, i, r))
          );
        }
        return (
          (function (t, e) {
            var n = fs;
            if (typeof e !== n(411) && null !== e) throw new TypeError(n(430));
            (t[n(412)] = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && gs(t, e);
          })(a, t),
          (e = a),
          (n = [
            {
              key: r(419),
              value: function (t) {
                return CyberInstance[r(414)] + "_" + t;
              },
            },
          ]) && ys(e[fs(412)], n),
          i && ys(e, i),
          a
        );
      })(Phaser[ps(416)]),
      Is = [
        "Super expression must either be null or a function",
        "2796075IyNTEC",
        "Cannot call a class as a function",
        "enumerable",
        "undefined",
        "2xrQNro",
        "game",
        "defineProperty",
        "__proto__",
        "prototype",
        "1164793ikjEFV",
        "alpha",
        "474892Mtuzvl",
        "5KOBBGE",
        "make",
        "width",
        "Text",
        "this hasn't been initialised - super() hasn't been called",
        "call",
        "207541cawmyG",
        "configurable",
        "tween",
        "symbol",
        "object",
        "159BmwyMI",
        "anchor",
        "writable",
        "getPrototypeOf",
        "beginFill",
        "create",
        "graphics",
        "constructor",
        "1WBBVjK",
        "384061OrlnlD",
        "function",
        "add",
        "setTo",
        "time",
        "Group",
        "1VjhVWE",
        "length",
        "destroy",
        "value",
        "key",
        "iterator",
        "7477xdzKDB",
        "603631PaXuTw",
        "endFill",
        "events",
      ],
      ws = function (t, e) {
        return Is[(t -= 475)];
      },
      Ss = ws;
    function ks(t) {
      var e = ws;
      return (ks =
        typeof Symbol === e(485) && typeof Symbol[e(495)] === e(522)
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              var n = e;
              return t &&
                typeof Symbol === n(485) &&
                t[n(482)] === Symbol &&
                t !== Symbol[n(509)]
                ? n(522)
                : typeof t;
            })(t);
    }
    function Cs(t, e) {
      for (var n = ws, i = 0; i < e[n(491)]; i++) {
        var r = e[i];
        (r[n(503)] = r[n(503)] || !1),
          (r[n(520)] = !0),
          n(493) in r && (r[n(477)] = !0),
          Object[n(507)](t, r[n(494)], r);
      }
    }
    function Os(t) {
      var e = ws;
      return (Os = Object.setPrototypeOf
        ? Object[e(478)]
        : function (t) {
            var n = e;
            return t.__proto__ || Object[n(478)](t);
          })(t);
    }
    function Ps(t) {
      if (void 0 === t) throw new ReferenceError(ws(517));
      return t;
    }
    function Ts(t, e) {
      return (Ts =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t[ws(508)] = e), t;
        })(t, e);
    }
    !(function (t, e) {
      for (var n = ws; ; )
        try {
          if (
            633174 ===
            parseInt(n(497)) +
              -parseInt(n(490)) * -parseInt(n(484)) +
              -parseInt(n(475)) * -parseInt(n(496)) +
              parseInt(n(512)) * -parseInt(n(505)) +
              parseInt(n(513)) * parseInt(n(519)) +
              -parseInt(n(510)) * -parseInt(n(483)) +
              -parseInt(n(501))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Is);
    var _s = null,
      xs = (function (t) {
        function e(t, n, i) {
          var r,
            a,
            o,
            s,
            u = ws;
          (function (t, e) {
            if (!(t instanceof e)) throw new TypeError(ws(502));
          })(this, e),
            (a = this),
            (o = Os(e)[u(518)](this, t)),
            (s = ws),
            ((r =
              !o || (ks(o) !== s(523) && typeof o !== s(485)) ? Ps(a) : o).y =
              -75),
            (r[u(480)](0, 0, e.createTexture(t))[u(511)] = 0.65);
          var c = new Phaser[u(516)](
            r[u(506)],
            r[u(506)][u(515)] / 2,
            37.5,
            n,
            { font: APP_FONT, fill: "#FFFFFF", fontWeight: 400, fontSize: 26 }
          );
          return (
            c[u(476)][u(487)](0.5),
            r[u(486)](c),
            r.game[u(486)][u(521)](Ps(r)).to({ y: 0 }, 200, "Linear", !0),
            typeof i != u(504)
              ? r[u(506)][u(488)][u(499)][u(486)](i, r[u(492)], Ps(r))
              : r[u(506)][u(488)].events[u(486)](2e3, r.destroy, Ps(r)),
            r
          );
        }
        return (
          (function (t, e) {
            var n = ws;
            if ("function" != typeof e && null !== e)
              throw new TypeError(n(500));
            (t[n(509)] = Object[n(480)](e && e[n(509)], {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Ts(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "createTexture",
              value: function (t) {
                var e = ws;
                if (!_s) {
                  var n = t[e(514)][e(481)](0, 0);
                  n[e(479)](0),
                    n.drawRect(0, 0, t[e(515)], 75),
                    n[e(498)](),
                    (_s = n.generateTexture()),
                    n[e(492)]();
                }
                return _s;
              },
            },
          ]),
          (i = null) && Cs(n[ws(509)], i),
          r && Cs(n, r),
          e
        );
        var n, i, r;
      })(Phaser[Ss(489)]),
      Es = [
        "sound",
        "setOutOfMoney",
        "instance",
        "enableVisibilityChange",
        "lang",
        "miniumMoneyCondition",
        "paused",
        "start",
        "BootScreen",
        "addJSON",
        "rvids",
        "configurable",
        "adEnabled",
        "getDeveloperPayload",
        "current",
        "connectAsyncV2",
        "BasePopup",
        "LoadingPopup",
        "BotImage",
        "canPlay",
        "switchGameEnabled",
        "enableDev",
        "lobbyScreen",
        "guserid",
        "maxUsers",
        "port",
        "addImage",
        "initPhaser",
        "setDefaultLanguage",
        "disableAd",
        "languageMap",
        "version",
        "enumerable",
        "prototype",
        "outOfMoney",
        "socket",
        "Signal",
        "get",
        "master",
        "add",
        "CyberInstance",
        "key",
        "undefined",
        "setHost",
        "addLanguage",
        "game",
        "defineProperty",
        "Notification",
        "has",
        "avatar",
        "langCode",
        "addBitmapFont",
        "assets/images/no_avatar.png",
        "connector",
        "setMiniumMoneyCondition",
        "CyberGlobalData",
        "interids",
        "isDragonBonesReady",
        "CANVAS",
        "switchToGameScreen",
        "1ZNIxVx",
        "initialize",
        "maxInterShowAsyncAllowed",
        "devEnabled",
        "BaseCheckBox",
        "state",
        "AUTO",
        "WEB",
        "7099JkVhnx",
        "signature",
        "setDeveloperPayload",
        "amateur",
        "set",
        "BaseScreen",
        "ListView",
        "zone",
        "professional",
        "addSound",
        "freeze",
        "developerPayload",
        "856663zaIpIA",
        "playerId",
        "switchToLobbyScreen",
        "271417VqqtTK",
        "length",
        "addAtlas",
        "enableSwitchGameAsync",
        "onHelpClick",
        "503524YzOMar",
        "BaseSprite",
        "5VccSTc",
        "onPause",
        "onResume",
        "899857KBQXbp",
        "startGame",
        "host",
        "sectionMap",
        "languageEnabled",
        "getPlatform",
        "gameScreenKey",
        "addProducts",
        "0.9.1",
        "beginner",
        "11PwQczp",
        "dispatch",
        "_isHomeScreenStarted",
        "setInterstitialIDs",
        "inited",
        "2vhnDzh",
        "value",
        "214391CKsJJY",
        "isSoundOn",
        "1465638BvnGif",
        "isHomeScreenStarted",
      ],
      js = function (t, e) {
        return Es[(t -= 328)];
      },
      Bs = js;
    function As(t, e) {
      for (var n = js, i = 0; i < e[n(422)]; i++) {
        var r = e[i];
        (r[n(370)] = r[n(370)] || !1),
          (r[n(349)] = !0),
          n(333) in r && (r.writable = !0),
          Object[n(384)](t, r[n(379)], r);
      }
    }
    !(function (t, e) {
      for (var n = js; ; )
        try {
          if (
            702470 ===
            -parseInt(n(334)) * -parseInt(n(332)) +
              parseInt(n(426)) +
              parseInt(n(418)) +
              parseInt(n(441)) * -parseInt(n(406)) +
              -parseInt(n(431)) * parseInt(n(398)) +
              parseInt(n(421)) * parseInt(n(428)) +
              -parseInt(n(336))
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(Es);
    var Rs = null,
      Fs = (function () {
        var t,
          e,
          n,
          i = js;
        function r() {
          var t = js;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
            !Rs &&
              ((this[t(331)] = !1),
              (this[t(401)] = !1),
              (this[t(350)] = !0),
              (this[t(335)] = !0),
              (this[t(400)] = 3),
              (this[t(435)] = !1),
              (this[t(387)] = t(390)),
              (this[t(369)] = t(439)),
              (this[t(433)] = null),
              (this[t(363)] = null),
              (this.zone = null),
              (Rs = this)),
            Rs
          );
        }
        return (
          (t = r),
          (e = [
            {
              key: i(399),
              value: function () {
                var t = i;
                this[t(331)] ||
                  (this[t(365)](),
                  (this[t(373)] = new SFS2X.SmartFox({
                    useSSL: !0,
                    debug: !1,
                  })),
                  (this[t(391)] = new q(this.socket)),
                  z[t(340)].initialize(this[t(373)]),
                  jt.instance[t(399)](this[t(373)]),
                  (this[t(338)] = new Do()),
                  (this.chat = new Xo(this.socket)),
                  (this[t(434)] = new Map()),
                  this[t(434)][t(410)](t(440), []),
                  this[t(434)].set(t(409), []),
                  this[t(434)][t(410)](t(414), []),
                  this[t(434)][t(410)](t(376), []),
                  (this[t(425)] = new Phaser[t(374)]()),
                  (this.languageMap = new Map()),
                  (this[t(331)] = !0));
              },
            },
            {
              key: "initPhaser",
              value: function () {
                var t = i;
                (this[t(383)] = new Phaser.Game(
                  1136,
                  640,
                  FBInstant[t(436)]() === t(405)
                    ? Phaser[t(396)]
                    : Phaser[t(404)]
                )),
                  this[t(383)].state[t(377)](t(346), Bo),
                  (this[t(337)] = !1),
                  (window[t(383)] = this.game);
              },
            },
            {
              key: i(353),
              value: function () {
                var t = this,
                  e = setInterval(function () {
                    var n = js;
                    signedPlayerInfo.signature &&
                      signedPlayerInfo[n(419)] &&
                      typeof signedPlayerInfo.guserid != n(380) &&
                      t.zone &&
                      t[n(363)] &&
                      t[n(433)] &&
                      (clearInterval(e),
                      (t[n(419)] = signedPlayerInfo[n(419)]),
                      (t[n(407)] = signedPlayerInfo.signature),
                      (t[n(361)] = signedPlayerInfo.guserid),
                      (signedPlayerInfo = null),
                      t[n(391)].connect());
                  }, 60);
              },
            },
            {
              key: i(341),
              value: function () {
                var t = i,
                  e = this;
                (this[t(344)] = !1),
                  (this[t(430)] = new Phaser[t(374)]()),
                  (this[t(429)] = new Phaser[t(374)]()),
                  FBInstant[t(429)](function () {
                    var n = t;
                    e.paused ||
                      typeof CyberGlobalData.overlayTexture == n(380) ||
                      ((e.paused = !0),
                      e[n(429)][n(328)](),
                      e[n(383)].state[n(352)] === e[n(437)] &&
                        new ts(e[n(383)]));
                  });
              },
            },
            {
              key: "canPlay",
              value: function (t) {
                var e = i;
                return jt[e(340)][e(357)](t);
              },
            },
            {
              key: i(432),
              value: function () {
                var t = i;
                this[t(383)].state[t(345)](t(346));
              },
            },
            {
              key: i(420),
              value: function () {
                var t = i;
                this.game[t(403)][t(345)](CyberGlobalData[t(360)], !0, !1);
              },
            },
            {
              key: i(397),
              value: function () {
                var t = i;
                this.game[t(403)][t(345)](this[t(437)], !0, !1);
              },
            },
            {
              key: i(424),
              value: function () {
                this[i(358)] = !0;
              },
            },
            {
              key: "setZone",
              value: function (t) {
                return (this[i(413)] = t), this;
              },
            },
            {
              key: i(381),
              value: function (t) {
                return (this.host = t), this;
              },
            },
            {
              key: "setPort",
              value: function (t) {
                return (this[i(363)] = t), this;
              },
            },
            {
              key: "setMaxUsers",
              value: function (t) {
                return (this[i(362)] = t), this;
              },
            },
            {
              key: i(392),
              value: function (t) {
                return (this[i(343)] = t), this;
              },
            },
            {
              key: "setGameScreen",
              value: function (t, e) {
                var n = i;
                !this[n(437)] &&
                  ((this.gameScreenKey = t),
                  Object[n(416)](this[n(437)]),
                  game[n(403)][n(377)](t, e));
              },
            },
            {
              key: "initIAP",
              value: function (t) {
                var e = i;
                ve.instance[e(438)](t);
              },
            },
            {
              key: "setRVPlacementIDs",
              value: function (t) {
                var e = i;
                return (this[e(348)] = t), Object.freeze(this[e(348)]), this;
              },
            },
            {
              key: i(330),
              value: function (t, e) {
                var n = i;
                return (
                  (this[n(394)] = t),
                  Object[n(416)](this[n(394)]),
                  void 0 !== e && (this.maxInterShowAsyncAllowed = e),
                  this
                );
              },
            },
            {
              key: i(408),
              value: function (t) {
                return (this[i(417)] = t), this;
              },
            },
            {
              key: i(351),
              value: function () {
                return this[i(417)];
              },
            },
            {
              key: "setChatURL",
              value: function (t) {
                return this;
              },
            },
            {
              key: "addLobbySection",
              value: function (t, e) {
                var n = i;
                this[n(434)][n(386)](t) && this[n(434)][n(375)](t).push(e);
              },
            },
            {
              key: "addImage",
              value: function (t, e) {
                return u[i(364)](t, e), this;
              },
            },
            {
              key: i(347),
              value: function (t, e) {
                return u[i(347)](t, e), this;
              },
            },
            {
              key: i(423),
              value: function (t, e, n) {
                return u[i(423)](t, e, n), this;
              },
            },
            {
              key: i(389),
              value: function (t, e, n) {
                return u[i(389)](t, e, n), this;
              },
            },
            {
              key: i(415),
              value: function (t, e) {
                return this[i(338)].add(t, e), this;
              },
            },
            {
              key: i(395),
              value: function () {
                return u[i(395)]();
              },
            },
            {
              key: i(339),
              value: function (t) {
                this[i(372)] = t;
              },
            },
            {
              key: i(382),
              value: function (t, e) {
                return this[i(368)].set(t, e), this;
              },
            },
            {
              key: i(366),
              value: function (t) {
                var e = i;
                this[e(368)].has(t) &&
                  ((this[e(342)] = this.languageMap[e(375)](t)),
                  (this[e(388)] = "vi_VN" == t ? "vn" : "en"));
              },
            },
            {
              key: "enableLanguage",
              value: function () {
                return (this[i(435)] = !0), this;
              },
            },
            {
              key: i(359),
              value: function () {
                this.devEnabled = !0;
              },
            },
            {
              key: i(367),
              value: function () {
                this[i(350)] = !1;
              },
            },
            {
              key: "setVersion",
              value: function (t) {
                this[i(369)] = t;
              },
            },
            {
              key: "isHomeScreenStarted",
              set: function (t) {
                this[i(329)] = t;
              },
              get: function () {
                return this[i(329)];
              },
            },
          ]) && As(t[js(371)], e),
          n && As(t, n),
          r
        );
      })();
    (window[Bs(378)] = new Fs()),
      (window.CyberHelper = f),
      (window[Bs(393)] = {}),
      (CyberInstance[Bs(354)] = x),
      (CyberInstance.Popup = G),
      (CyberInstance[Bs(355)] = I),
      (CyberInstance[Bs(412)] = dn),
      (CyberInstance[Bs(411)] = Gt),
      (CyberInstance[Bs(356)] = di),
      (CyberInstance.BaseButton = it),
      (CyberInstance[Bs(402)] = zn),
      (CyberInstance[Bs(427)] = ms),
      (CyberInstance[Bs(385)] = xs),
      (CyberInstance.BaseDragonBonesAnim = hs),
      CyberInstance[Bs(399)](),
      CyberInstance[Bs(353)]();
  },
]);
