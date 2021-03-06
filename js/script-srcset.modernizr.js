!(function (i, d, c) {
    var a = [],
      e = {
        _version: "3.8.0",
        _config: {
          classPrefix: "",
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0,
        },
        _q: [],
        on: function (e, t) {
          var n = this;
          setTimeout(function () {
            t(n[e]);
          }, 0);
        },
        addTest: function (e, t, n) {
          a.push({ name: e, fn: t, options: n });
        },
        addAsyncTest: function (e) {
          a.push({ name: null, fn: e });
        },
      },
      l = function () {};
    (l.prototype = e), (l = new l());
    var u = [];
    function p(e, t) {
      return typeof e === t;
    }
    var m = d.documentElement,
      h = "svg" === m.nodeName.toLowerCase();
    function s(e) {
      var t = m.className,
        n = l._config.classPrefix || "";
      if ((h && (t = t.baseVal), l._config.enableJSClass)) {
        var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
        t = t.replace(r, "$1" + n + "js$2");
      }
      l._config.enableClasses &&
        (0 < e.length && (t += " " + n + e.join(" " + n)),
        h ? (m.className.baseVal = t) : (m.className = t));
    }
    var t = "Moz O ms Webkit",
      f = e._config.usePrefixes ? t.toLowerCase().split(" ") : [];
    e._domPrefixes = f;
    var A,
      n,
      r = e._config.usePrefixes
        ? " -webkit- -moz- -o- -ms- ".split(" ")
        : ["", ""];
    function v(e, t) {
      if ("object" == typeof e) for (var n in e) A(e, n) && v(n, e[n]);
      else {
        var r = (e = e.toLowerCase()).split("."),
          o = l[r[0]];
        if ((2 === r.length && (o = o[r[1]]), void 0 !== o)) return l;
        (t = "function" == typeof t ? t() : t),
          1 === r.length
            ? (l[r[0]] = t)
            : (!l[r[0]] ||
                l[r[0]] instanceof Boolean ||
                (l[r[0]] = new Boolean(l[r[0]])),
              (l[r[0]][r[1]] = t)),
          s([(t && !1 !== t ? "" : "no-") + r.join("-")]),
          l._trigger(e, t);
      }
      return l;
    }
    function g() {
      return "function" != typeof d.createElement
        ? d.createElement(arguments[0])
        : h
        ? d.createElementNS.call(d, "http://www.w3.org/2000/svg", arguments[0])
        : d.createElement.apply(d, arguments);
    }
    (e._prefixes = r),
      (A =
        p((n = {}.hasOwnProperty), "undefined") || p(n.call, "undefined")
          ? function (e, t) {
              return t in e && p(e.constructor.prototype[t], "undefined");
            }
          : function (e, t) {
              return n.call(e, t);
            }),
      (e._l = {}),
      (e.on = function (e, t) {
        this._l[e] || (this._l[e] = []),
          this._l[e].push(t),
          l.hasOwnProperty(e) &&
            setTimeout(function () {
              l._trigger(e, l[e]);
            }, 0);
      }),
      (e._trigger = function (e, t) {
        if (this._l[e]) {
          var n = this._l[e];
          setTimeout(function () {
            var e;
            for (e = 0; e < n.length; e++) (0, n[e])(t);
          }, 0),
            delete this._l[e];
        }
      }),
      l._q.push(function () {
        e.addTest = v;
      });
    var o,
      y =
        ((o = !("onblur" in m)),
        function (e, t) {
          var n;
          return (
            !!e &&
            ((t && "string" != typeof t) || (t = g(t || "div")),
            !(n = (e = "on" + e) in t) &&
              o &&
              (t.setAttribute || (t = g("div")),
              t.setAttribute(e, ""),
              (n = "function" == typeof t[e]),
              t[e] !== c && (t[e] = c),
              t.removeAttribute(e)),
            n)
          );
        });
    function C(e, t, n, r) {
      var o,
        i,
        s,
        a,
        l = "modernizr",
        u = g("div"),
        f = (function () {
          var e = d.body;
          return e || ((e = g(h ? "svg" : "body")).fake = !0), e;
        })();
      if (parseInt(n, 10))
        for (; n--; )
          ((s = g("div")).id = r ? r[n] : l + (n + 1)), u.appendChild(s);
      return (
        ((o = g("style")).type = "text/css"),
        (o.id = "s" + l),
        (f.fake ? f : u).appendChild(o),
        f.appendChild(u),
        o.styleSheet
          ? (o.styleSheet.cssText = e)
          : o.appendChild(d.createTextNode(e)),
        (u.id = l),
        f.fake &&
          ((f.style.background = ""),
          (f.style.overflow = "hidden"),
          (a = m.style.overflow),
          (m.style.overflow = "hidden"),
          m.appendChild(f)),
        (i = t(u, e)),
        f.fake
          ? (f.parentNode.removeChild(f), (m.style.overflow = a), m.offsetHeight)
          : u.parentNode.removeChild(u),
        !!i
      );
    }
    e.hasEvent = y;
    var w,
      b = (w = i.matchMedia || i.msMatchMedia)
        ? function (e) {
            var t = w(e);
            return (t && t.matches) || !1;
          }
        : function (e) {
            var t = !1;
            return (
              C(
                "@media " + e + " { #modernizr { position: absolute; } }",
                function (e) {
                  t =
                    "absolute" ===
                    (i.getComputedStyle
                      ? i.getComputedStyle(e, null)
                      : e.currentStyle
                    ).position;
                }
              ),
              t
            );
          };
    e.mq = b;
    e.prefixedCSSValue = function (e, t) {
      var n = !1,
        r = g("div").style;
      if (e in r) {
        var o = f.length;
        for (r[e] = t, n = r[e]; o-- && !n; )
          (r[e] = "-" + f[o] + "-" + t), (n = r[e]);
      }
      return "" === n && (n = !1), n;
    };
    var S = e._config.usePrefixes ? t.split(" ") : [];
    e._cssomPrefixes = S;
    var x = { elem: g("modernizr") };
    l._q.push(function () {
      delete x.elem;
    });
    var _ = { style: x.elem.style };
    function T(e) {
      return e
        .replace(/([A-Z])/g, function (e, t) {
          return "-" + t.toLowerCase();
        })
        .replace(/^ms-/, "-ms-");
    }
    function P(e, t) {
      var n = e.length;
      if ("CSS" in i && "supports" in i.CSS) {
        for (; n--; ) if (i.CSS.supports(T(e[n]), t)) return !0;
        return !1;
      }
      if ("CSSSupportsRule" in i) {
        for (var r = []; n--; ) r.push("(" + T(e[n]) + ":" + t + ")");
        return C(
          "@supports (" +
            (r = r.join(" or ")) +
            ") { #modernizr { position: absolute; } }",
          function (e) {
            return (
              "absolute" ===
              (function (e, t, n) {
                var r;
                if ("getComputedStyle" in i) {
                  r = getComputedStyle.call(i, e, t);
                  var o = i.console;
                  null !== r
                    ? n && (r = r.getPropertyValue(n))
                    : o &&
                      o[o.error ? "error" : "log"].call(
                        o,
                        "getComputedStyle returning null, its possible modernizr test results are inaccurate"
                      );
                } else r = !t && e.currentStyle && e.currentStyle[n];
                return r;
              })(e, null, "position")
            );
          }
        );
      }
      return c;
    }
    function k(e, t, n, r) {
      if (((r = !p(r, "undefined") && r), !p(n, "undefined"))) {
        var o = P(e, n);
        if (!p(o, "undefined")) return o;
      }
      for (
        var i, s, a, l, u, f = ["modernizr", "tspan", "samp"];
        !_.style && f.length;
  
      )
        (i = !0), (_.modElem = g(f.shift())), (_.style = _.modElem.style);
      function d() {
        i && (delete _.style, delete _.modElem);
      }
      for (a = e.length, s = 0; s < a; s++)
        if (
          ((l = e[s]),
          (u = _.style[l]),
          ~("" + l).indexOf("-") &&
            (l = l
              .replace(/([a-z])-([a-z])/g, function (e, t, n) {
                return t + n.toUpperCase();
              })
              .replace(/^-/, "")),
          _.style[l] !== c)
        ) {
          if (r || p(n, "undefined")) return d(), "pfx" !== t || l;
          try {
            _.style[l] = n;
          } catch (e) {}
          if (_.style[l] !== u) return d(), "pfx" !== t || l;
        }
      return d(), !1;
    }
    function B(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }
    function E(e, t, n, r, o) {
      var i = e.charAt(0).toUpperCase() + e.slice(1),
        s = (e + " " + S.join(i + " ") + i).split(" ");
      return p(t, "string") || p(t, "undefined")
        ? k(s, t, r, o)
        : (function (e, t, n) {
            var r;
            for (var o in e)
              if (e[o] in t)
                return !1 === n
                  ? e[o]
                  : p((r = t[e[o]]), "function")
                  ? B(r, n || t)
                  : r;
            return !1;
          })((s = (e + " " + f.join(i + " ") + i).split(" ")), t, n);
    }
    function z(e, t, n) {
      return E(e, c, c, t, n);
    }
    l._q.unshift(function () {
      delete _.style;
    }),
      (e.testAllProps = E),
      (e.testAllProps = z);
    (e.testProp = function (e, t, n) {
      return k([e], c, t, n);
    }),
      (e.testStyles = C);
    l.addTest("customelements", "customElements" in i),
      l.addTest("history", function () {
        var e = navigator.userAgent;
        return (
          !!e &&
          ((-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0")) ||
            -1 === e.indexOf("Mobile Safari") ||
            -1 !== e.indexOf("Chrome") ||
            -1 !== e.indexOf("Windows Phone") ||
            "file:" === location.protocol) &&
          i.history &&
          "pushState" in i.history
        );
      });
    var O = [""].concat(f);
    (e._domPrefixesAll = O),
      l.addTest("pointerevents", function () {
        for (var e = 0, t = O.length; e < t; e++)
          if (y(O[e] + "pointerdown")) return !0;
        return !1;
      });
    var L = !0;
    try {
      i.postMessage(
        {
          toString: function () {
            L = !1;
          },
        },
        "*"
      );
    } catch (e) {}
    l.addTest("postmessage", new Boolean("postMessage" in i)),
      l.addTest("postmessage.structuredclones", L),
      l.addTest("webgl", function () {
        return "WebGLRenderingContext" in i;
      });
    var N = !1;
    try {
      N = "WebSocket" in i && 2 === i.WebSocket.CLOSING;
    } catch (e) {}
    l.addTest("websockets", N),
      l.addTest("cssanimations", z("animationName", "a", !0)),
      (function () {
        l.addTest("csscolumns", function () {
          var e = !1,
            t = z("columnCount");
          try {
            (e = !!t) && (e = new Boolean(e));
          } catch (e) {}
          return e;
        });
        for (
          var e,
            t,
            n = [
              "Width",
              "Span",
              "Fill",
              "Gap",
              "Rule",
              "RuleColor",
              "RuleStyle",
              "RuleWidth",
              "BreakBefore",
              "BreakAfter",
              "BreakInside",
            ],
            r = 0;
          r < n.length;
          r++
        )
          (e = n[r].toLowerCase()),
            (t = z("column" + n[r])),
            ("breakbefore" !== e && "breakafter" !== e && "breakinside" !== e) ||
              (t = t || z(n[r])),
            l.addTest("csscolumns." + e, t);
      })(),
      l.addTest("flexbox", z("flexBasis", "1px", !0)),
      l.addTest("picture", "HTMLPictureElement" in i),
      l.addAsyncTest(function () {
        var e,
          t,
          n = g("img"),
          r = "sizes" in n;
        !r && "srcset" in n
          ? ((e =
              "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
            (t = function () {
              v("sizes", 2 === n.width);
            }),
            (n.onload = t),
            (n.onerror = t),
            n.setAttribute("sizes", "9px"),
            (n.srcset =
              e +
              " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w"),
            (n.src = e))
          : v("sizes", r);
      }),
      l.addTest("srcset", "srcset" in g("img")),
      l.addTest("webworkers", "Worker" in i),
      (function () {
        var e, t, n, r, o, i;
        for (var s in a)
          if (a.hasOwnProperty(s)) {
            if (
              ((e = []),
              (t = a[s]).name &&
                (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
            )
              for (n = 0; n < t.options.aliases.length; n++)
                e.push(t.options.aliases[n].toLowerCase());
            for (
              r = p(t.fn, "function") ? t.fn() : t.fn, o = 0;
              o < e.length;
              o++
            )
              1 === (i = e[o].split(".")).length
                ? (l[i[0]] = r)
                : ((l[i[0]] && (!l[i[0]] || l[i[0]] instanceof Boolean)) ||
                    (l[i[0]] = new Boolean(l[i[0]])),
                  (l[i[0]][i[1]] = r)),
                u.push((r ? "" : "no-") + i.join("-"));
          }
      })(),
      s(u),
      delete e.addTest,
      delete e.addAsyncTest;
    for (var j = 0; j < l._q.length; j++) l._q[j]();
    i.Modernizr = l;
  })(window, document);
  