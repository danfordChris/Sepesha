/* 
 CanvasJS Chart - v3.10.12 GA - https://canvasjs.com/ 
 Copyright 2024 fenopix

 --------------------- License Information --------------------
 CanvasJS Chart is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
 https://canvasjs.com/license/


 ---------------------Free for Non-Commercial Use--------------------
 
 For non-commercial purposes you can use the software for free under Creative Commons Attribution-NonCommercial 3.0 License.
 A credit Link is added to the chart which should be preserved. Refer to the following link for further details on the same.
 https://creativecommons.org/licenses/by-nc/3.0/deed.en_US
 */

/*tslint:disable*/
/*eslint-disable*/
/*jshint ignore:start*/
(function () {
  function qa(d, l) {
    d.prototype = eb(l.prototype);
    d.prototype.constructor = d;
    d.base = l.prototype;
  }
  function eb(d) {
    function l() {}
    l.prototype = d;
    return new l();
  }
  function Za(d, l, U) {
    "millisecond" === U
      ? d.setMilliseconds(d.getMilliseconds() + 1 * l)
      : "second" === U
      ? d.setSeconds(d.getSeconds() + 1 * l)
      : "minute" === U
      ? d.setMinutes(d.getMinutes() + 1 * l)
      : "hour" === U
      ? d.setHours(d.getHours() + 1 * l)
      : "day" === U
      ? d.setDate(d.getDate() + 1 * l)
      : "week" === U
      ? d.setDate(d.getDate() + 7 * l)
      : "month" === U
      ? d.setMonth(d.getMonth() + 1 * l)
      : "year" === U && d.setFullYear(d.getFullYear() + 1 * l);
    return d;
  }
  function ea(d, l) {
    var U = !1;
    0 > d && ((U = !0), (d *= -1));
    d = "" + d;
    for (l = l ? l : 1; d.length < l; ) d = "0" + d;
    return U ? "-" + d : d;
  }
  function Ha(d) {
    if (!d) return d;
    d = d.replace(/^\s\s*/, "");
    for (var l = /\s/, U = d.length; l.test(d.charAt(--U)); );
    return d.slice(0, U + 1);
  }
  function Aa(d) {
    d.roundRect = function (d, U, p, t, sa, B, u, A) {
      u && (this.fillStyle = u);
      A && (this.strokeStyle = A);
      "undefined" === typeof sa && (sa = 5);
      this.lineWidth = B;
      this.beginPath();
      this.moveTo(d + sa, U);
      this.lineTo(d + p - sa, U);
      this.quadraticCurveTo(d + p, U, d + p, U + sa);
      this.lineTo(d + p, U + t - sa);
      this.quadraticCurveTo(d + p, U + t, d + p - sa, U + t);
      this.lineTo(d + sa, U + t);
      this.quadraticCurveTo(d, U + t, d, U + t - sa);
      this.lineTo(d, U + sa);
      this.quadraticCurveTo(d, U, d + sa, U);
      this.closePath();
      u && this.fill();
      A && 0 < B && this.stroke();
    };
  }
  function Ta(d, l) {
    return d - l;
  }
  function V(d) {
    var l = ((d & 16711680) >> 16).toString(16),
      p = ((d & 65280) >> 8).toString(16);
    d = ((d & 255) >> 0).toString(16);
    l = 2 > l.length ? "0" + l : l;
    p = 2 > p.length ? "0" + p : p;
    d = 2 > d.length ? "0" + d : d;
    return "#" + l + p + d;
  }
  function fb(d, l) {
    var p = this.length >>> 0,
      t = Number(l) || 0,
      t = 0 > t ? Math.ceil(t) : Math.floor(t);
    for (0 > t && (t += p); t < p; t++)
      if (t in this && this[t] === d) return t;
    return -1;
  }
  function p(d) {
    return null === d || "undefined" === typeof d;
  }
  function Ea(d) {
    d.indexOf || (d.indexOf = fb);
    return d;
  }
  function gb(d) {
    if (wa.fSDec)
      d[ja("`eeDwdouMhrudods")](ja("e`u`@ohl`uhnoHuds`uhnoDoe"), function () {
        wa._fTWm && wa._fTWm(d);
      });
  }
  function $a(d, l, p) {
    p = p || "normal";
    var t = d + "_" + l + "_" + p,
      $ = ab[t];
    if (isNaN($)) {
      try {
        if (!ya) {
          var sa = document.body;
          ya = document.createElement("span");
          ya.innerHTML = "";
          var B = document.createTextNode("Mpgyi");
          ya.appendChild(B);
          sa.appendChild(ya);
        }
        ya.style.display = "";
        Q(ya, {
          position: "absolute",
          left: "0px",
          top: "-20000px",
          padding: "0px",
          margin: "0px",
          border: "none",
          whiteSpace: "pre",
          lineHeight: "normal",
          fontFamily: d,
          fontSize: l + "px",
          fontWeight: p,
        });
        $ = Math.round(ya.offsetHeight);
        ya.style.display = "none";
      } catch (u) {
        $ = Math.ceil(1.1 * l);
      }
      $ = Math.max($, l);
      ab[t] = $;
    }
    return $;
  }
  function I(d, l) {
    var p = [];
    if (
      (p = {
        solid: [],
        shortDash: [3, 1],
        shortDot: [1, 1],
        shortDashDot: [3, 1, 1, 1],
        shortDashDotDot: [3, 1, 1, 1, 1, 1],
        dot: [1, 2],
        dash: [4, 2],
        dashDot: [4, 2, 1, 2],
        longDash: [8, 2],
        longDashDot: [8, 2, 1, 2],
        longDashDotDot: [8, 2, 1, 2, 1, 2],
      }[d || "solid"])
    )
      for (var t = 0; t < p.length; t++) p[t] *= l;
    else p = [];
    return p;
  }
  function G(d, l, U, t, $) {
    t = t || [];
    $ = p($) ? (hb ? { passive: !1, capture: !1 } : !1) : $;
    t.push([d, l, U, $]);
    return d.addEventListener
      ? (d.addEventListener(l, U, $), U)
      : d.attachEvent
      ? ((t = function (l) {
          l = l || window.event;
          l.preventDefault =
            l.preventDefault ||
            function () {
              l.returnValue = !1;
            };
          l.stopPropagation =
            l.stopPropagation ||
            function () {
              l.cancelBubble = !0;
            };
          U.call(d, l);
        }),
        d.attachEvent("on" + l, t),
        t)
      : !1;
  }
  function ib(d) {
    if (d._menuButton)
      d.exportEnabled
        ? (Q(d._menuButton, {
            backgroundColor: d.toolbar.itemBackgroundColor,
            color: d.toolbar.fontColor,
          }),
          Ma(d._menuButton),
          ua(d, d._menuButton, "menu"),
          0 >= navigator.userAgent.search("MSIE") &&
            d._menuButton.childNodes[0] &&
            Q(d._menuButton.childNodes[0], {
              WebkitFilter: "invert(0%)",
              filter: "invert(0%)",
            }))
        : xa(d._menuButton);
    else if (d.exportEnabled && t) {
      var l = !1;
      d._menuButton = document.createElement("button");
      ua(d, d._menuButton, "menu");
      d._toolBar.appendChild(d._menuButton);
      G(
        d._menuButton,
        "touchstart",
        function (d) {
          l = !0;
        },
        d.allDOMEventHandlers
      );
      G(
        d._menuButton,
        "click",
        function () {
          "none" !== d._dropdownMenu.style.display ||
            (d._dropDownCloseTime &&
              500 >= new Date().getTime() - d._dropDownCloseTime.getTime()) ||
            ((d._dropdownMenu.style.display = "block"),
            d._menuButton.blur(),
            d._dropdownMenu.focus());
        },
        d.allDOMEventHandlers,
        !0
      );
      G(
        d._menuButton,
        "mousemove",
        function () {
          l ||
            (Q(d._menuButton, {
              backgroundColor: d.toolbar.itemBackgroundColorOnHover,
              color: d.toolbar.fontColorOnHover,
            }),
            0 >= navigator.userAgent.search("MSIE") &&
              Q(d._menuButton.childNodes[0], {
                WebkitFilter: "invert(100%)",
                filter: "invert(100%)",
              }));
        },
        d.allDOMEventHandlers,
        !0
      );
      G(
        d._menuButton,
        "mouseout",
        function () {
          l ||
            (Q(d._menuButton, {
              backgroundColor: d.toolbar.itemBackgroundColor,
              color: d.toolbar.fontColor,
            }),
            0 >= navigator.userAgent.search("MSIE") &&
              Q(d._menuButton.childNodes[0], {
                WebkitFilter: "invert(0%)",
                filter: "invert(0%)",
              }));
        },
        d.allDOMEventHandlers,
        !0
      );
    }
    if (d.exportEnabled && d._dropdownMenu) {
      var p = d.theme && -1 !== d.theme.indexOf("dark") ? "black" : "#888888";
      Q(d._dropdownMenu, {
        backgroundColor: d.toolbar.itemBackgroundColor,
        color: d.toolbar.fontColor,
        boxShadow: "2px 2px 10px " + p,
      });
      for (
        var p = d._dropdownMenu.childNodes,
          N = [
            d._cultureInfo.printText,
            d._cultureInfo.saveJPGText,
            d._cultureInfo.savePNGText,
          ],
          $ = 0;
        $ < N.length;
        $++
      )
        Q(p[$], {
          backgroundColor: d.toolbar.itemBackgroundColor,
          color: d.toolbar.fontColor,
        }),
          (p[$].innerHTML = N[$]);
    } else
      !d._dropdownMenu &&
        d.exportEnabled &&
        t &&
        ((l = !1),
        (d._dropdownMenu = document.createElement("div")),
        d._dropdownMenu.setAttribute("tabindex", -1),
        (p = d.theme && -1 !== d.theme.indexOf("dark") ? "black" : "#888888"),
        Q(d._dropdownMenu, {
          position: "absolute",
          zIndex: 1,
          userSelect: "none",
          MozUserSeelct: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none",
          cursor: "pointer",
          right: "0px",
          top: "25px",
          minWidth: "120px",
          outline: 0,
          fontSize: "14px",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "5px 0px 5px 0px",
          textAlign: "left",
          lineHeight: "10px",
          backgroundColor: d.toolbar.itemBackgroundColor,
          boxShadow: "2px 2px 10px " + p,
        }),
        (d._dropdownMenu.style.display = "none"),
        d._toolBar.appendChild(d._dropdownMenu),
        G(
          d._dropdownMenu,
          "blur",
          function () {
            xa(d._dropdownMenu);
            d._dropDownCloseTime = new Date();
          },
          d.allDOMEventHandlers,
          !0
        ),
        (p = document.createElement("div")),
        Q(p, { padding: "12px 8px 12px 8px" }),
        (p.innerHTML = d._cultureInfo.printText),
        (p.style.backgroundColor = d.toolbar.itemBackgroundColor),
        (p.style.color = d.toolbar.fontColor),
        d._dropdownMenu.appendChild(p),
        G(
          p,
          "touchstart",
          function (d) {
            l = !0;
          },
          d.allDOMEventHandlers
        ),
        G(
          p,
          "mousemove",
          function () {
            l ||
              ((this.style.backgroundColor =
                d.toolbar.itemBackgroundColorOnHover),
              (this.style.color = d.toolbar.fontColorOnHover));
          },
          d.allDOMEventHandlers,
          !0
        ),
        G(
          p,
          "mouseout",
          function () {
            l ||
              ((this.style.backgroundColor = d.toolbar.itemBackgroundColor),
              (this.style.color = d.toolbar.fontColor));
          },
          d.allDOMEventHandlers,
          !0
        ),
        G(
          p,
          "click",
          function () {
            d.print();
            xa(d._dropdownMenu);
          },
          d.allDOMEventHandlers,
          !0
        ),
        (p = document.createElement("div")),
        Q(p, { padding: "12px 8px 12px 8px" }),
        (p.innerHTML = d._cultureInfo.saveJPGText),
        (p.style.backgroundColor = d.toolbar.itemBackgroundColor),
        (p.style.color = d.toolbar.fontColor),
        d._dropdownMenu.appendChild(p),
        G(
          p,
          "touchstart",
          function (d) {
            l = !0;
          },
          d.allDOMEventHandlers
        ),
        G(
          p,
          "mousemove",
          function () {
            l ||
              ((this.style.backgroundColor =
                d.toolbar.itemBackgroundColorOnHover),
              (this.style.color = d.toolbar.fontColorOnHover));
          },
          d.allDOMEventHandlers,
          !0
        ),
        G(
          p,
          "mouseout",
          function () {
            l ||
              ((this.style.backgroundColor = d.toolbar.itemBackgroundColor),
              (this.style.color = d.toolbar.fontColor));
          },
          d.allDOMEventHandlers,
          !0
        ),
        G(
          p,
          "click",
          function () {
            d.exportChart({ format: "jpeg", fileName: d.exportFileName });
            xa(d._dropdownMenu);
          },
          d.allDOMEventHandlers,
          !0
        ),
        (p = document.createElement("div")),
        Q(p, { padding: "12px 8px 12px 8px" }),
        (p.innerHTML = d._cultureInfo.savePNGText),
        (p.style.backgroundColor = d.toolbar.itemBackgroundColor),
        (p.style.color = d.toolbar.fontColor),
        d._dropdownMenu.appendChild(p),
        G(
          p,
          "touchstart",
          function (d) {
            l = !0;
          },
          d.allDOMEventHandlers
        ),
        G(
          p,
          "mousemove",
          function () {
            l ||
              ((this.style.backgroundColor =
                d.toolbar.itemBackgroundColorOnHover),
              (this.style.color = d.toolbar.fontColorOnHover));
          },
          d.allDOMEventHandlers,
          !0
        ),
        G(
          p,
          "mouseout",
          function () {
            l ||
              ((this.style.backgroundColor = d.toolbar.itemBackgroundColor),
              (this.style.color = d.toolbar.fontColor));
          },
          d.allDOMEventHandlers,
          !0
        ),
        G(
          p,
          "click",
          function () {
            d.exportChart({ format: "png", fileName: d.exportFileName });
            xa(d._dropdownMenu);
          },
          d.allDOMEventHandlers,
          !0
        ));
  }
  function bb(d, l, p) {
    d *= ma;
    l *= ma;
    d = p.getImageData(d, l, 2, 2).data;
    l = !0;
    for (p = 0; 4 > p; p++)
      if ((d[p] !== d[p + 4]) | (d[p] !== d[p + 8]) | (d[p] !== d[p + 12])) {
        l = !1;
        break;
      }
    return l ? (d[0] << 16) | (d[1] << 8) | d[2] : 0;
  }
  function na(d, l, p) {
    return d in l ? l[d] : p[d];
  }
  function Na(d, l, U, N) {
    t && cb
      ? ((N =
          !p(N) && N
            ? d.getContext("2d", { willReadFrequently: !0 })
            : d.getContext("2d")),
        (Oa =
          N.webkitBackingStorePixelRatio ||
          N.mozBackingStorePixelRatio ||
          N.msBackingStorePixelRatio ||
          N.oBackingStorePixelRatio ||
          N.backingStorePixelRatio ||
          1),
        (ma = Ua / Oa),
        (d.width = l * ma),
        (d.height = U * ma),
        Ua !== Oa &&
          ((d.style.width = l + "px"),
          (d.style.height = U + "px"),
          N.scale(ma, ma)))
      : ((d.width = l), (d.height = U));
  }
  function jb(d) {
    if (!kb) {
      var l = !1,
        p = !1;
      "undefined" === typeof ra.Chart.creditHref
        ? ((d.creditHref = ja("iuuqr;..b`ow`rkr/bnl.")),
          (d.creditText = ja("B`ow`rKR/bnl")))
        : ((l = d.updateOption("creditText")),
          (p = d.updateOption("creditHref")));
      if (d.creditHref && d.creditText) {
        d._creditLink ||
          ((d._creditLink = document.createElement("a")),
          d._creditLink.setAttribute("class", "canvasjs-chart-credit"),
          d._creditLink.setAttribute("title", "JavaScript Charts"),
          Q(d._creditLink, {
            outline: "none",
            margin: "0px",
            position: "absolute",
            right: "2px",
            top: d.height - 14 + "px",
            color: "dimgrey",
            textDecoration: "none",
            fontSize: "11px",
            fontFamily:
              "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif",
          }),
          d._creditLink.setAttribute("tabIndex", -1),
          d._creditLink.setAttribute("target", "_blank"));
        if (0 === d.renderCount || l || p)
          d._creditLink.setAttribute("href", d.creditHref),
            (d._creditLink.innerHTML = d.creditText);
        d._creditLink && d.creditHref && d.creditText
          ? (d._creditLink.parentElement ||
              d._canvasJSContainer.appendChild(d._creditLink),
            (d._creditLink.style.top = d.height - 14 + "px"))
          : d._creditLink.parentElement &&
            d._canvasJSContainer.removeChild(d._creditLink);
      }
    }
  }
  function va(d, l, p) {
    Ia && ((this.canvasCount |= 0), window.console.log(++this.canvasCount));
    var N = document.createElement("canvas");
    N.setAttribute("class", "canvasjs-chart-canvas");
    Na(N, d, l, p);
    t ||
      "undefined" === typeof G_vmlCanvasManager ||
      G_vmlCanvasManager.initElement(N);
    return N;
  }
  function Q(d, l) {
    for (var p in l) d.style[p] = l[p];
  }
  function ua(d, l, p) {
    l.getAttribute("state") ||
      ((l.style.backgroundColor = d.toolbar.itemBackgroundColor),
      (l.style.color = d.toolbar.fontColor),
      (l.style.border = "none"),
      Q(l, {
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
      }));
    l.getAttribute("state") !== p &&
      (l.setAttribute("state", p),
      l.setAttribute("type", "button"),
      Q(l, {
        padding: "5px 12px",
        cursor: "pointer",
        float: "left",
        width: "40px",
        height: "25px",
        outline: "0px",
        verticalAlign: "baseline",
        lineHeight: "0",
      }),
      (l.innerHTML =
        "<img src='" +
        lb[p].image +
        "' alt='" +
        d._cultureInfo[p + "Text"] +
        "' />"),
      Q(l.childNodes[0], { height: "95%", pointerEvents: "none" }));
    l.setAttribute("title", d._cultureInfo[p + "Text"]);
  }
  function Ma() {
    for (var d = null, l = 0; l < arguments.length; l++)
      (d = arguments[l]), d.style && (d.style.display = "inline");
  }
  function xa() {
    for (var d = null, l = 0; l < arguments.length; l++)
      (d = arguments[l]) && d.style && (d.style.display = "none");
  }
  function Va(d, l, p, t, $) {
    if (null === d || "undefined" === typeof d)
      return "undefined" === typeof p ? l : p;
    d =
      parseFloat(d.toString()) * (0 <= d.toString().indexOf("%") ? l / 100 : 1);
    "undefined" !== typeof t &&
      ((d = Math.min(t, d)), "undefined" !== typeof $ && (d = Math.max($, d)));
    return !isNaN(d) && d <= l && 0 <= d ? d : "undefined" === typeof p ? l : p;
  }
  function Z(d, l, t, N, $) {
    this._defaultsKey = d;
    this._themeOptionsKey = l;
    this._index = N;
    this.parent = $;
    this._eventListeners = [];
    d = {};
    this.theme && p(this.parent) && p(l) && p(N)
      ? (d = p(this.predefinedThemes[this.theme])
          ? this.predefinedThemes.light1
          : this.predefinedThemes[this.theme])
      : this.parent &&
        this.parent.themeOptions &&
        this.parent.themeOptions[l] &&
        (null === N
          ? (d = this.parent.themeOptions[l])
          : 0 < this.parent.themeOptions[l].length &&
            ((N = Math.min(this.parent.themeOptions[l].length - 1, N)),
            (d = this.parent.themeOptions[l][N])));
    this.themeOptions = d;
    this.options = t ? t : { _isPlaceholder: !0 };
    this.setOptions(this.options, d);
  }
  function Fa(d, l, p, t, $) {
    "undefined" === typeof $ && ($ = 0);
    this._padding = $;
    this._x1 = d;
    this._y1 = l;
    this._x2 = p;
    this._y2 = t;
    this._rightOccupied =
      this._leftOccupied =
      this._bottomOccupied =
      this._topOccupied =
        this._padding;
  }
  function ka(d, l) {
    ka.base.constructor.call(this, "TextBlock", null, l, null, null);
    this.ctx = d;
    this._isDirty = !0;
    this._wrappedText = null;
    this._initialize();
  }
  function Wa(d, l) {
    Wa.base.constructor.call(this, "Toolbar", "toolbar", l, null, d);
    this.chart = d;
    this.canvas = d.canvas;
    this.ctx = this.chart.ctx;
    this.optionsName = "toolbar";
  }
  function Ba(d, l) {
    Ba.base.constructor.call(this, "Title", "title", l, null, d);
    this.chart = d;
    this.canvas = d.canvas;
    this.ctx = this.chart.ctx;
    this.optionsName = "title";
    if (p(this.options.margin) && d.options.subtitles)
      for (var t = d.options.subtitles, N = 0; N < t.length; N++)
        if (
          ((p(t[N].horizontalAlign) && "center" === this.horizontalAlign) ||
            t[N].horizontalAlign === this.horizontalAlign) &&
          ((p(t[N].verticalAlign) && "top" === this.verticalAlign) ||
            t[N].verticalAlign === this.verticalAlign) &&
          !t[N].dockInsidePlotArea === !this.dockInsidePlotArea
        ) {
          this.margin = 0;
          break;
        }
    "undefined" === typeof this.options.fontSize &&
      (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
    this.height = this.width = null;
    this.bounds = { x1: null, y1: null, x2: null, y2: null };
  }
  function Ja(d, l, p) {
    Ja.base.constructor.call(this, "Subtitle", "subtitles", l, p, d);
    this.chart = d;
    this.canvas = d.canvas;
    this.ctx = this.chart.ctx;
    this.optionsName = "subtitles";
    this.isOptionsInArray = !0;
    "undefined" === typeof this.options.fontSize &&
      (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
    this.height = this.width = null;
    this.bounds = { x1: null, y1: null, x2: null, y2: null };
  }
  function Xa() {
    this.pool = [];
  }
  function Ka(d) {
    var l;
    d && La[d] && (l = La[d]);
    Ka.base.constructor.call(this, "CultureInfo", null, l, null, null);
  }
  var Ia = !1,
    wa = {},
    t = !!document.createElement("canvas").getContext,
    ra = {
      Chart: {
        width: 500,
        height: 400,
        zoomEnabled: !1,
        zoomType: "x",
        backgroundColor: "white",
        theme: "light1",
        animationEnabled: !1,
        animationDuration: 1200,
        dataPointWidth: null,
        dataPointMinWidth: null,
        dataPointMaxWidth: null,
        colorSet: "colorSet1",
        culture: "en",
        creditText: "CanvasJS",
        interactivityEnabled: !0,
        exportEnabled: !1,
        exportFileName: "Chart",
        rangeChanging: null,
        rangeChanged: null,
        publicProperties: {
          title: "readWrite",
          subtitles: "readWrite",
          toolbar: "readWrite",
          toolTip: "readWrite",
          legend: "readWrite",
          axisX: "readWrite",
          axisY: "readWrite",
          axisX2: "readWrite",
          axisY2: "readWrite",
          data: "readWrite",
          options: "readWrite",
          bounds: "readOnly",
          container: "readOnly",
          selectedColorSet: "readOnly",
        },
      },
      Title: {
        padding: 0,
        text: null,
        verticalAlign: "top",
        horizontalAlign: "center",
        fontSize: 20,
        fontFamily: "Calibri",
        fontWeight: "normal",
        fontColor: "black",
        fontStyle: "normal",
        borderThickness: 0,
        borderColor: "black",
        cornerRadius: 0,
        backgroundColor: t ? "transparent" : null,
        margin: 5,
        wrap: !0,
        maxWidth: null,
        textAlign: "center",
        dockInsidePlotArea: !1,
        publicProperties: {
          options: "readWrite",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      Subtitle: {
        padding: 0,
        text: null,
        verticalAlign: "top",
        horizontalAlign: "center",
        fontSize: 14,
        fontFamily: "Calibri",
        fontWeight: "normal",
        fontColor: "black",
        fontStyle: "normal",
        borderThickness: 0,
        borderColor: "black",
        cornerRadius: 0,
        backgroundColor: null,
        margin: 2,
        wrap: !0,
        maxWidth: null,
        textAlign: "center",
        dockInsidePlotArea: !1,
        publicProperties: {
          options: "readWrite",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      Toolbar: {
        itemBackgroundColor: "white",
        itemBackgroundColorOnHover: "#2196f3",
        buttonBorderColor: "#2196f3",
        buttonBorderThickness: 1,
        fontColor: "black",
        fontColorOnHover: "white",
        publicProperties: { options: "readWrite", chart: "readOnly" },
      },
      Legend: {
        name: null,
        verticalAlign: "center",
        horizontalAlign: "right",
        fontSize: 14,
        fontFamily: "calibri",
        fontWeight: "normal",
        fontColor: "black",
        fontStyle: "normal",
        cursor: null,
        itemmouseover: null,
        itemmouseout: null,
        itemmousemove: null,
        itemclick: null,
        dockInsidePlotArea: !1,
        reversed: !1,
        backgroundColor: t ? "transparent" : null,
        borderColor: t ? "transparent" : null,
        borderThickness: 0,
        cornerRadius: 0,
        maxWidth: null,
        maxHeight: null,
        markerMargin: null,
        itemMaxWidth: null,
        itemWidth: null,
        itemWrap: !0,
        itemTextFormatter: null,
        publicProperties: {
          options: "readWrite",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      ToolTip: {
        enabled: !0,
        shared: !1,
        animationEnabled: !0,
        content: null,
        contentFormatter: null,
        reversed: !1,
        backgroundColor: t ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
        borderColor: null,
        borderThickness: 2,
        cornerRadius: 5,
        fontSize: 14,
        fontColor: "black",
        fontFamily: "Calibri, Arial, Georgia, serif;",
        fontWeight: "normal",
        fontStyle: "italic",
        updated: null,
        hidden: null,
        publicProperties: { options: "readWrite", chart: "readOnly" },
      },
      Axis: {
        minimum: null,
        maximum: null,
        viewportMinimum: null,
        viewportMaximum: null,
        interval: null,
        intervalType: null,
        reversed: !1,
        logarithmic: !1,
        logarithmBase: 10,
        title: null,
        titleFontColor: "black",
        titleFontSize: 20,
        titleFontFamily: "arial",
        titleFontWeight: "normal",
        titleFontStyle: "normal",
        titleWrap: !0,
        titleMaxWidth: null,
        titleBackgroundColor: t ? "transparent" : null,
        titleBorderColor: t ? "transparent" : null,
        titleBorderThickness: 0,
        titleCornerRadius: 0,
        titleTextAlign: "left",
        labelAngle: 0,
        labelFontFamily: "arial",
        labelFontColor: "black",
        labelFontSize: 12,
        labelFontWeight: "normal",
        labelFontStyle: "normal",
        labelAutoFit: !0,
        labelWrap: !0,
        labelMaxWidth: null,
        labelFormatter: null,
        labelBackgroundColor: t ? "transparent" : null,
        labelBorderColor: t ? "transparent" : null,
        labelBorderThickness: 0,
        labelCornerRadius: 0,
        labelPlacement: "outside",
        labelTextAlign: "left",
        prefix: "",
        suffix: "",
        includeZero: !1,
        tickLength: 5,
        tickColor: "black",
        tickThickness: 1,
        tickPlacement: "outside",
        lineColor: "black",
        lineThickness: 1,
        lineDashType: "solid",
        gridColor: "#A0A0A0",
        gridThickness: 0,
        gridDashType: "solid",
        interlacedColor: t ? "transparent" : null,
        valueFormatString: null,
        margin: 2,
        publicProperties: {
          options: "readWrite",
          stripLines: "readWrite",
          scaleBreaks: "readWrite",
          crosshair: "readWrite",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      StripLine: {
        value: null,
        startValue: null,
        endValue: null,
        color: "orange",
        opacity: null,
        thickness: 2,
        lineDashType: "solid",
        label: "",
        labelPlacement: "inside",
        labelAlign: "far",
        labelWrap: !0,
        labelMaxWidth: null,
        labelBackgroundColor: null,
        labelBorderColor: t ? "transparent" : null,
        labelBorderThickness: 0,
        labelCornerRadius: 0,
        labelFontFamily: "arial",
        labelFontColor: "orange",
        labelFontSize: 12,
        labelFontWeight: "normal",
        labelFontStyle: "normal",
        labelFormatter: null,
        labelTextAlign: "left",
        showOnTop: !1,
        publicProperties: {
          options: "readWrite",
          axis: "readOnly",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      ScaleBreaks: {
        autoCalculate: !1,
        collapsibleThreshold: "25%",
        maxNumberOfAutoBreaks: 2,
        spacing: 8,
        type: "straight",
        color: "#FFFFFF",
        fillOpacity: 0.9,
        lineThickness: 2,
        lineColor: "#E16E6E",
        lineDashType: "solid",
        publicProperties: {
          options: "readWrite",
          customBreaks: "readWrite",
          axis: "readOnly",
          autoBreaks: "readOnly",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      Break: {
        startValue: null,
        endValue: null,
        spacing: 8,
        type: "straight",
        color: "#FFFFFF",
        fillOpacity: 0.9,
        lineThickness: 2,
        lineColor: "#E16E6E",
        lineDashType: "solid",
        publicProperties: {
          options: "readWrite",
          scaleBreaks: "readOnly",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      Crosshair: {
        enabled: !1,
        snapToDataPoint: !1,
        color: "grey",
        opacity: null,
        thickness: 2,
        lineDashType: "solid",
        label: "",
        labelWrap: !0,
        labelMaxWidth: null,
        labelTextAlign: "left",
        labelBackgroundColor: t ? "grey" : null,
        labelBorderColor: t ? "grey" : null,
        labelBorderThickness: 0,
        labelCornerRadius: 0,
        labelFontFamily: t
          ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif"
          : "calibri",
        labelFontSize: 12,
        labelFontColor: "#fff",
        labelFontWeight: "normal",
        labelFontStyle: "normal",
        labelFormatter: null,
        valueFormatString: null,
        updated: null,
        hidden: null,
        publicProperties: {
          options: "readWrite",
          axis: "readOnly",
          bounds: "readOnly",
          chart: "readOnly",
        },
      },
      DataSeries: {
        name: null,
        dataPoints: null,
        label: "",
        bevelEnabled: !1,
        highlightEnabled: !0,
        cursor: "default",
        indexLabel: "",
        indexLabelPlacement: "auto",
        indexLabelOrientation: "horizontal",
        indexLabelTextAlign: "left",
        indexLabelFontColor: "black",
        indexLabelFontSize: 12,
        indexLabelFontStyle: "normal",
        indexLabelFontFamily: "Arial",
        indexLabelFontWeight: "normal",
        indexLabelBackgroundColor: null,
        indexLabelBorderColor: null,
        indexLabelBorderThickness: 0,
        indexLabelLineColor: "gray",
        indexLabelLineThickness: 1,
        indexLabelLineDashType: "solid",
        indexLabelMaxWidth: null,
        indexLabelWrap: !0,
        indexLabelFormatter: null,
        lineThickness: 2,
        lineDashType: "solid",
        connectNullData: !1,
        nullDataLineDashType: "dash",
        color: null,
        lineColor: null,
        risingColor: "white",
        fallingColor: "red",
        fillOpacity: null,
        startAngle: 0,
        radius: null,
        innerRadius: null,
        explodeOnClick: !0,
        neckHeight: null,
        neckWidth: null,
        reversed: !1,
        valueRepresents: null,
        linkedDataSeriesIndex: null,
        whiskerThickness: 2,
        whiskerDashType: "solid",
        whiskerColor: null,
        whiskerLength: null,
        stemThickness: 2,
        stemColor: null,
        stemDashType: "solid",
        upperBoxColor: "white",
        lowerBoxColor: "white",
        type: "column",
        xValueType: "number",
        axisXType: "primary",
        axisYType: "primary",
        axisXIndex: 0,
        axisYIndex: 0,
        xValueFormatString: null,
        yValueFormatString: null,
        zValueFormatString: null,
        percentFormatString: null,
        showInLegend: !1,
        legendMarkerType: null,
        legendMarkerColor: null,
        legendText: null,
        legendMarkerBorderColor: t ? "transparent" : null,
        legendMarkerBorderThickness: 0,
        markerType: "circle",
        markerColor: null,
        markerSize: null,
        markerBorderColor: t ? "transparent" : null,
        markerBorderThickness: 0,
        mouseover: null,
        mouseout: null,
        mousemove: null,
        click: null,
        toolTipContent: null,
        visible: !0,
        publicProperties: {
          options: "readWrite",
          axisX: "readWrite",
          axisY: "readWrite",
          chart: "readOnly",
        },
      },
      TextBlock: {
        x: 0,
        y: 0,
        width: null,
        height: null,
        maxWidth: null,
        maxHeight: null,
        padding: 0,
        angle: 0,
        text: "",
        horizontalAlign: "center",
        textAlign: "left",
        fontSize: 12,
        fontFamily: "calibri",
        fontWeight: "normal",
        fontColor: "black",
        fontStyle: "normal",
        borderThickness: 0,
        borderColor: "black",
        cornerRadius: 0,
        backgroundColor: null,
        textBaseline: "top",
      },
      CultureInfo: {
        decimalSeparator: ".",
        digitGroupSeparator: ",",
        zoomText: "Zoom",
        panText: "Pan",
        resetText: "Reset",
        menuText: "More Options",
        saveJPGText: "Save as JPEG",
        savePNGText: "Save as PNG",
        printText: "Print",
        days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
          " "
        ),
        shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        months:
          "January February March April May June July August September October November December".split(
            " "
          ),
        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(
          " "
        ),
      },
    },
    La = { en: {} },
    u = t ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
    Ga = t ? "Impact, Charcoal, sans-serif" : "Arial",
    Ca = {
      colorSet1:
        "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(
          " "
        ),
      colorSet2:
        "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(
          " "
        ),
      colorSet3:
        "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(
          " "
        ),
    },
    T,
    ca,
    W,
    ia,
    X;
  ca = "#333333";
  W = "#000000";
  T = "#666666";
  X = ia = "#000000";
  var fa = 20,
    A = 14,
    Ya = {
      colorSet: "colorSet1",
      backgroundColor: "#FFFFFF",
      title: {
        fontFamily: Ga,
        fontSize: 32,
        fontColor: ca,
        fontWeight: "normal",
        verticalAlign: "top",
        margin: 5,
      },
      subtitles: [
        {
          fontFamily: Ga,
          fontSize: A,
          fontColor: ca,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5,
        },
      ],
      data: [
        {
          indexLabelFontFamily: u,
          indexLabelFontSize: A,
          indexLabelFontColor: ca,
          indexLabelFontWeight: "normal",
          indexLabelLineThickness: 1,
        },
      ],
      axisX: [
        {
          titleFontFamily: u,
          titleFontSize: fa,
          titleFontColor: ca,
          titleFontWeight: "normal",
          labelFontFamily: u,
          labelFontSize: A,
          labelFontColor: W,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: T,
          tickThickness: 1,
          tickColor: T,
          gridThickness: 0,
          gridColor: T,
          stripLines: [
            {
              labelFontFamily: u,
              labelFontSize: A,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: X,
            color: ia,
            thickness: 1,
            lineDashType: "dash",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      axisX2: [
        {
          titleFontFamily: u,
          titleFontSize: fa,
          titleFontColor: ca,
          titleFontWeight: "normal",
          labelFontFamily: u,
          labelFontSize: A,
          labelFontColor: W,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: T,
          tickThickness: 1,
          tickColor: T,
          gridThickness: 0,
          gridColor: T,
          stripLines: [
            {
              labelFontFamily: u,
              labelFontSize: A,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: X,
            color: ia,
            thickness: 1,
            lineDashType: "dash",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      axisY: [
        {
          titleFontFamily: u,
          titleFontSize: fa,
          titleFontColor: ca,
          titleFontWeight: "normal",
          labelFontFamily: u,
          labelFontSize: A,
          labelFontColor: W,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: T,
          tickThickness: 1,
          tickColor: T,
          gridThickness: 1,
          gridColor: T,
          stripLines: [
            {
              labelFontFamily: u,
              labelFontSize: A,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: X,
            color: ia,
            thickness: 1,
            lineDashType: "dash",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      axisY2: [
        {
          titleFontFamily: u,
          titleFontSize: fa,
          titleFontColor: ca,
          titleFontWeight: "normal",
          labelFontFamily: u,
          labelFontSize: A,
          labelFontColor: W,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: T,
          tickThickness: 1,
          tickColor: T,
          gridThickness: 1,
          gridColor: T,
          stripLines: [
            {
              labelFontFamily: u,
              labelFontSize: A,
              labelFontColor: "#FF7300",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FF7300",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: X,
            color: ia,
            thickness: 1,
            lineDashType: "dash",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      legend: {
        fontFamily: u,
        fontSize: 14,
        fontColor: ca,
        fontWeight: "bold",
        verticalAlign: "bottom",
        horizontalAlign: "center",
      },
      toolTip: {
        fontFamily: u,
        fontSize: 14,
        fontStyle: "normal",
        cornerRadius: 0,
        borderThickness: 1,
      },
      toolbar: {
        itemBackgroundColor: "white",
        itemBackgroundColorOnHover: "#2196f3",
        buttonBorderColor: "#2196f3",
        buttonBorderThickness: 1,
        fontColor: "black",
        fontColorOnHover: "white",
      },
    };
  W = ca = "#F5F5F5";
  T = "#FFFFFF";
  ia = "#40BAF1";
  X = "#F5F5F5";
  var fa = 20,
    A = 14,
    db = {
      colorSet: "colorSet2",
      title: {
        fontFamily: u,
        fontSize: 33,
        fontColor: "#3A3A3A",
        fontWeight: "bold",
        verticalAlign: "top",
        margin: 5,
      },
      subtitles: [
        {
          fontFamily: u,
          fontSize: A,
          fontColor: "#3A3A3A",
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5,
        },
      ],
      data: [
        {
          indexLabelFontFamily: u,
          indexLabelFontSize: A,
          indexLabelFontColor: "#666666",
          indexLabelFontWeight: "normal",
          indexLabelLineThickness: 1,
        },
      ],
      axisX: [
        {
          titleFontFamily: u,
          titleFontSize: fa,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: u,
          labelFontSize: A,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: "#BBBBBB",
          tickThickness: 1,
          tickColor: "#BBBBBB",
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [
            {
              labelFontFamily: u,
              labelFontSize: A,
              labelFontColor: "#FFA500",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FFA500",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      axisX2: [
        {
          titleFontFamily: u,
          titleFontSize: fa,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: u,
          labelFontSize: A,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: "#BBBBBB",
          tickColor: "#BBBBBB",
          tickThickness: 1,
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [
            {
              labelFontFamily: u,
              labelFontSize: A,
              labelFontColor: "#FFA500",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FFA500",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      axisY: [
        {
          titleFontFamily: u,
          titleFontSize: fa,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: u,
          labelFontSize: A,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 0,
          lineColor: "#BBBBBB",
          tickColor: "#BBBBBB",
          tickThickness: 1,
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [
            {
              labelFontFamily: u,
              labelFontSize: A,
              labelFontColor: "#FFA500",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FFA500",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      axisY2: [
        {
          titleFontFamily: u,
          titleFontSize: fa,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: u,
          labelFontSize: A,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 0,
          lineColor: "#BBBBBB",
          tickColor: "#BBBBBB",
          tickThickness: 1,
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [
            {
              labelFontFamily: u,
              labelFontSize: A,
              labelFontColor: "#FFA500",
              labelFontWeight: "normal",
              labelBackgroundColor: null,
              color: "#FFA500",
              thickness: 1,
            },
          ],
          crosshair: {
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot",
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid",
          },
        },
      ],
      legend: {
        fontFamily: u,
        fontSize: 14,
        fontColor: "#3A3A3A",
        fontWeight: "bold",
        verticalAlign: "bottom",
        horizontalAlign: "center",
      },
      toolTip: {
        fontFamily: u,
        fontSize: 14,
        fontStyle: "normal",
        cornerRadius: 0,
        borderThickness: 1,
      },
      toolbar: {
        itemBackgroundColor: "white",
        itemBackgroundColorOnHover: "#2196f3",
        buttonBorderColor: "#2196f3",
        buttonBorderThickness: 1,
        fontColor: "black",
        fontColorOnHover: "white",
      },
    };
  W = ca = "#F5F5F5";
  T = "#FFFFFF";
  ia = "#40BAF1";
  X = "#F5F5F5";
  fa = 20;
  A = 14;
  Ga = {
    colorSet: "colorSet1",
    backgroundColor: "#2A2A2A",
    title: {
      fontFamily: Ga,
      fontSize: 32,
      fontColor: ca,
      fontWeight: "normal",
      verticalAlign: "top",
      margin: 5,
    },
    subtitles: [
      {
        fontFamily: Ga,
        fontSize: A,
        fontColor: ca,
        fontWeight: "normal",
        verticalAlign: "top",
        margin: 5,
      },
    ],
    toolbar: {
      itemBackgroundColor: "#666666",
      itemBackgroundColorOnHover: "#FF7372",
      buttonBorderColor: "#FF7372",
      buttonBorderThickness: 1,
      fontColor: "#F5F5F5",
      fontColorOnHover: "#F5F5F5",
    },
    data: [
      {
        indexLabelFontFamily: u,
        indexLabelFontSize: A,
        indexLabelFontColor: W,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1,
      },
    ],
    axisX: [
      {
        titleFontFamily: u,
        titleFontSize: fa,
        titleFontColor: W,
        titleFontWeight: "normal",
        labelFontFamily: u,
        labelFontSize: A,
        labelFontColor: W,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: T,
        tickThickness: 1,
        tickColor: T,
        gridThickness: 0,
        gridColor: T,
        stripLines: [
          {
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1,
          },
        ],
        crosshair: {
          labelFontFamily: u,
          labelFontSize: A,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: X,
          color: ia,
          thickness: 1,
          lineDashType: "dash",
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111",
        },
      },
    ],
    axisX2: [
      {
        titleFontFamily: u,
        titleFontSize: fa,
        titleFontColor: W,
        titleFontWeight: "normal",
        labelFontFamily: u,
        labelFontSize: A,
        labelFontColor: W,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: T,
        tickThickness: 1,
        tickColor: T,
        gridThickness: 0,
        gridColor: T,
        stripLines: [
          {
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1,
          },
        ],
        crosshair: {
          labelFontFamily: u,
          labelFontSize: A,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: X,
          color: ia,
          thickness: 1,
          lineDashType: "dash",
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111",
        },
      },
    ],
    axisY: [
      {
        titleFontFamily: u,
        titleFontSize: fa,
        titleFontColor: W,
        titleFontWeight: "normal",
        labelFontFamily: u,
        labelFontSize: A,
        labelFontColor: W,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: T,
        tickThickness: 1,
        tickColor: T,
        gridThickness: 1,
        gridColor: T,
        stripLines: [
          {
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1,
          },
        ],
        crosshair: {
          labelFontFamily: u,
          labelFontSize: A,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: X,
          color: ia,
          thickness: 1,
          lineDashType: "dash",
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111",
        },
      },
    ],
    axisY2: [
      {
        titleFontFamily: u,
        titleFontSize: fa,
        titleFontColor: W,
        titleFontWeight: "normal",
        labelFontFamily: u,
        labelFontSize: A,
        labelFontColor: W,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: T,
        tickThickness: 1,
        tickColor: T,
        gridThickness: 1,
        gridColor: T,
        stripLines: [
          {
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1,
          },
        ],
        crosshair: {
          labelFontFamily: u,
          labelFontSize: A,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: X,
          color: ia,
          thickness: 1,
          lineDashType: "dash",
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111",
        },
      },
    ],
    legend: {
      fontFamily: u,
      fontSize: 14,
      fontColor: ca,
      fontWeight: "bold",
      verticalAlign: "bottom",
      horizontalAlign: "center",
    },
    toolTip: {
      fontFamily: u,
      fontSize: 14,
      fontStyle: "normal",
      cornerRadius: 0,
      borderThickness: 1,
      fontColor: W,
      backgroundColor: "rgba(0, 0, 0, .7)",
    },
  };
  T = "#FFFFFF";
  W = ca = "#FAFAFA";
  ia = "#40BAF1";
  X = "#F5F5F5";
  var fa = 20,
    A = 14,
    Pa = {
      light1: Ya,
      light2: db,
      dark1: Ga,
      dark2: {
        colorSet: "colorSet2",
        backgroundColor: "#32373A",
        title: {
          fontFamily: u,
          fontSize: 32,
          fontColor: ca,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5,
        },
        subtitles: [
          {
            fontFamily: u,
            fontSize: A,
            fontColor: ca,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5,
          },
        ],
        toolbar: {
          itemBackgroundColor: "#666666",
          itemBackgroundColorOnHover: "#FF7372",
          buttonBorderColor: "#FF7372",
          buttonBorderThickness: 1,
          fontColor: "#F5F5F5",
          fontColorOnHover: "#F5F5F5",
        },
        data: [
          {
            indexLabelFontFamily: u,
            indexLabelFontSize: A,
            indexLabelFontColor: W,
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1,
          },
        ],
        axisX: [
          {
            titleFontFamily: u,
            titleFontSize: fa,
            titleFontColor: W,
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: W,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: T,
            tickThickness: 1,
            tickColor: T,
            gridThickness: 0,
            gridColor: T,
            stripLines: [
              {
                labelFontFamily: u,
                labelFontSize: A,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1,
              },
            ],
            crosshair: {
              labelFontFamily: u,
              labelFontSize: A,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: X,
              color: ia,
              thickness: 1,
              lineDashType: "dash",
            },
            scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111",
            },
          },
        ],
        axisX2: [
          {
            titleFontFamily: u,
            titleFontSize: fa,
            titleFontColor: W,
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: W,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: T,
            tickThickness: 1,
            tickColor: T,
            gridThickness: 0,
            gridColor: T,
            stripLines: [
              {
                labelFontFamily: u,
                labelFontSize: A,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1,
              },
            ],
            crosshair: {
              labelFontFamily: u,
              labelFontSize: A,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: X,
              color: ia,
              thickness: 1,
              lineDashType: "dash",
            },
            scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111",
            },
          },
        ],
        axisY: [
          {
            titleFontFamily: u,
            titleFontSize: fa,
            titleFontColor: W,
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: W,
            labelFontWeight: "normal",
            lineThickness: 0,
            lineColor: T,
            tickThickness: 1,
            tickColor: T,
            gridThickness: 1,
            gridColor: T,
            stripLines: [
              {
                labelFontFamily: u,
                labelFontSize: A,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1,
              },
            ],
            crosshair: {
              labelFontFamily: u,
              labelFontSize: A,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: X,
              color: ia,
              thickness: 1,
              lineDashType: "dash",
            },
            scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111",
            },
          },
        ],
        axisY2: [
          {
            titleFontFamily: u,
            titleFontSize: fa,
            titleFontColor: W,
            titleFontWeight: "normal",
            labelFontFamily: u,
            labelFontSize: A,
            labelFontColor: W,
            labelFontWeight: "normal",
            lineThickness: 0,
            lineColor: T,
            tickThickness: 1,
            tickColor: T,
            gridThickness: 1,
            gridColor: T,
            stripLines: [
              {
                labelFontFamily: u,
                labelFontSize: A,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1,
              },
            ],
            crosshair: {
              labelFontFamily: u,
              labelFontSize: A,
              labelFontColor: "#000000",
              labelFontWeight: "normal",
              labelBackgroundColor: X,
              color: ia,
              thickness: 1,
              lineDashType: "dash",
            },
            scaleBreaks: {
              type: "zigzag",
              spacing: "2%",
              lineColor: "#777777",
              lineThickness: 1,
              lineDashType: "solid",
              color: "#111111",
            },
          },
        ],
        legend: {
          fontFamily: u,
          fontSize: 14,
          fontColor: ca,
          fontWeight: "bold",
          verticalAlign: "bottom",
          horizontalAlign: "center",
        },
        toolTip: {
          fontFamily: u,
          fontSize: 14,
          fontStyle: "normal",
          cornerRadius: 0,
          borderThickness: 1,
          fontColor: W,
          backgroundColor: "rgba(0, 0, 0, .7)",
        },
      },
      theme1: Ya,
      theme2: db,
      theme3: Ya,
    },
    M = {
      numberDuration: 1,
      yearDuration: 314496e5,
      monthDuration: 2592e6,
      weekDuration: 6048e5,
      dayDuration: 864e5,
      hourDuration: 36e5,
      minuteDuration: 6e4,
      secondDuration: 1e3,
      millisecondDuration: 1,
      dayOfWeekFromInt:
        "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    };
  (function () {
    wa.fSDec = function (d) {
      for (var l = "", p = 0; p < d.length; p++)
        l += String.fromCharCode(
          Math.ceil(d.length / 57 / 5) ^ d.charCodeAt(p)
        );
      return l;
    };
    delete ra[wa.fSDec("Bi`su")][wa.fSDec("bsdehuIsdg")];
    wa.pro = { sCH: ra[wa.fSDec("Bi`su")][wa.fSDec("bsdehuIsdg")] };
  })();
  var hb = (function () {
      var d = !1;
      try {
        var l =
          Object.defineProperty &&
          Object.defineProperty({}, "passive", {
            get: function () {
              d = !0;
              return !1;
            },
          });
        window.addEventListener &&
          (window.addEventListener("test", null, l),
          window.removeEventListener("test", null, l));
      } catch (p) {
        d = !1;
      }
      return d;
    })(),
    ab = {},
    ya = null,
    mb = function () {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.backgroundColor &&
        ((this.ctx.fillStyle = this.backgroundColor),
        this.ctx.fillRect(0, 0, this.width, this.height));
    },
    za = function (d) {
      d.width = 1;
      d.height = 1;
      d.getContext("2d") && d.getContext("2d").clearRect(0, 0, 1, 1);
    },
    nb = function (d, l, p) {
      l = Math.min(this.width, this.height);
      return Math.max(
        "theme4" === this.theme ? 0 : 300 <= l ? 12 : 11,
        Math.round(l * (d / 400))
      );
    },
    Da = (function () {
      var d =
          /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
        l = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
          " "
        ),
        p = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        t =
          "January February March April May June July August September October November December".split(
            " "
          ),
        $ = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        u =
          /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        B = /[^-+\dA-Z]/g;
      return function (A, I, P) {
        var T = P ? P.days : l,
          V = P ? P.months : t,
          G = P ? P.shortDays : p,
          M = P ? P.shortMonths : $;
        P = "";
        var Q = !1;
        A = A && A.getTime ? A : A ? new Date(A) : new Date();
        if (isNaN(A)) throw SyntaxError("invalid date");
        "UTC:" === I.slice(0, 4) && ((I = I.slice(4)), (Q = !0));
        P = Q ? "getUTC" : "get";
        var Z = A[P + "Date"](),
          O = A[P + "Day"](),
          Y = A[P + "Month"](),
          a = A[P + "FullYear"](),
          f = A[P + "Hours"](),
          c = A[P + "Minutes"](),
          b = A[P + "Seconds"](),
          g = A[P + "Milliseconds"](),
          h = Q ? 0 : A.getTimezoneOffset();
        return (P = I.replace(d, function (r) {
          switch (r) {
            case "D":
              return Z;
            case "DD":
              return ea(Z, 2);
            case "DDD":
              return G[O];
            case "DDDD":
              return T[O];
            case "M":
              return Y + 1;
            case "MM":
              return ea(Y + 1, 2);
            case "MMM":
              return M[Y];
            case "MMMM":
              return V[Y];
            case "Y":
              return parseInt(String(a).slice(-2));
            case "YY":
              return ea(String(a).slice(-2), 2);
            case "YYY":
              return ea(String(a).slice(-3), 3);
            case "YYYY":
              return ea(a, 4);
            case "h":
              return f % 12 || 12;
            case "hh":
              return ea(f % 12 || 12, 2);
            case "H":
              return f;
            case "HH":
              return ea(f, 2);
            case "m":
              return c;
            case "mm":
              return ea(c, 2);
            case "s":
              return b;
            case "ss":
              return ea(b, 2);
            case "f":
              return ea(String(g), 3).slice(0, 1);
            case "ff":
              return ea(String(g), 3).slice(0, 2);
            case "fff":
              return ea(String(g), 3).slice(0, 3);
            case "t":
              return 12 > f ? "a" : "p";
            case "tt":
              return 12 > f ? "am" : "pm";
            case "T":
              return 12 > f ? "A" : "P";
            case "TT":
              return 12 > f ? "AM" : "PM";
            case "K":
              return Q
                ? "UTC"
                : (String(A).match(u) || [""]).pop().replace(B, "");
            case "z":
              return (0 < h ? "-" : "+") + Math.floor(Math.abs(h) / 60);
            case "zz":
              return (0 < h ? "-" : "+") + ea(Math.floor(Math.abs(h) / 60), 2);
            case "zzz":
              return (
                (0 < h ? "-" : "+") +
                ea(Math.floor(Math.abs(h) / 60), 2) +
                ea(Math.abs(h) % 60, 2)
              );
            default:
              return r.slice(1, r.length - 1);
          }
        }));
      };
    })(),
    ob = function (d) {
      var l = 0 > d;
      if (1 > Math.abs(d)) {
        var p = parseInt(d.toString().split("e-")[1]);
        p &&
          ((d = (l ? -1 * d : d) * Math.pow(10, p - 1)),
          (d = "0." + Array(p).join("0") + d.toString().substring(2)),
          (d = l ? "-" + d : d));
      } else
        (p = parseInt(d.toString().split("+")[1])),
          20 < p &&
            ((p -= 20),
            (d /= Math.pow(10, p)),
            (d = d.toString() + Array(p + 1).join("0")));
      return String(d);
    },
    ga = function (d, l, p) {
      if (null === d) return "";
      if (!isFinite(d)) return d;
      d = Number(d);
      var t = 0 > d ? !0 : !1;
      t && (d *= -1);
      var $ = p ? p.decimalSeparator : ".",
        u = p ? p.digitGroupSeparator : ",",
        B = "";
      l = String(l);
      var B = 1,
        A = (p = ""),
        I = -1,
        P = [],
        T = [],
        V = 0,
        Q = 0,
        G = 0,
        M = !1,
        Z = 0,
        A = l.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
      l = null;
      for (var O = 0; A && O < A.length; O++)
        if (((l = A[O]), "." === l && 0 > I)) I = O;
        else {
          if ("%" === l) B *= 100;
          else if ("\u2030" === l) {
            B *= 1e3;
            continue;
          } else if ("," === l[0] && "." === l[l.length - 1]) {
            B /= Math.pow(1e3, l.length - 1);
            I = O + l.length - 1;
            continue;
          } else
            ("E" !== l[0] && "e" !== l[0]) ||
              "0" !== l[l.length - 1] ||
              (M = !0);
          0 > I
            ? (P.push(l), "#" === l || "0" === l ? V++ : "," === l && G++)
            : (T.push(l), ("#" !== l && "0" !== l) || Q++);
        }
      M &&
        ((l = Math.floor(d)),
        (A = -Math.floor(Math.log(d) / Math.LN10 + 1)),
        (Z = 0 === d ? 0 : 0 === l ? -(V + A) : ob(l).length - V),
        (B /= Math.pow(10, Z)));
      0 > I && (I = O);
      B = (d * B).toFixed(Q);
      l = B.split(".");
      B = (l[0] + "").split("");
      d = (l[1] + "").split("");
      B && "0" === B[0] && B.shift();
      for (M = A = O = Q = I = 0; 0 < P.length; )
        if (((l = P.pop()), "#" === l || "0" === l))
          if ((I++, I === V)) {
            var Y = B,
              B = [];
            if ("0" === l)
              for (l = V - Q - (Y ? Y.length : 0); 0 < l; ) Y.unshift("0"), l--;
            for (; 0 < Y.length; )
              (p = Y.pop() + p),
                M++,
                0 === M % A && O === G && 0 < Y.length && (p = u + p);
          } else
            0 < B.length
              ? ((p = B.pop() + p), Q++, M++)
              : "0" === l && ((p = "0" + p), Q++, M++),
              0 === M % A && O === G && 0 < B.length && (p = u + p);
        else
          ("E" !== l[0] && "e" !== l[0]) ||
          "0" !== l[l.length - 1] ||
          !/[eE][+-]*[0]+/.test(l)
            ? "," === l
              ? (O++, (A = M), (M = 0), 0 < B.length && (p = u + p))
              : (p =
                  1 < l.length &&
                  (('"' === l[0] && '"' === l[l.length - 1]) ||
                    ("'" === l[0] && "'" === l[l.length - 1]))
                    ? l.slice(1, l.length - 1) + p
                    : l + p)
            : ((l =
                0 > Z
                  ? l.replace("+", "").replace("-", "")
                  : l.replace("-", "")),
              (p += l.replace(/[0]+/, function (a) {
                return ea(Z, a.length);
              })));
      u = "";
      for (P = !1; 0 < T.length; )
        (l = T.shift()),
          "#" === l || "0" === l
            ? 0 < d.length && 0 !== Number(d.join(""))
              ? ((u += d.shift()), (P = !0))
              : "0" === l && ((u += "0"), (P = !0))
            : 1 < l.length &&
              (('"' === l[0] && '"' === l[l.length - 1]) ||
                ("'" === l[0] && "'" === l[l.length - 1]))
            ? (u += l.slice(1, l.length - 1))
            : ("E" !== l[0] && "e" !== l[0]) ||
              "0" !== l[l.length - 1] ||
              !/[eE][+-]*[0]+/.test(l)
            ? (u += l)
            : ((l =
                0 > Z
                  ? l.replace("+", "").replace("-", "")
                  : l.replace("-", "")),
              (u += l.replace(/[0]+/, function (a) {
                return ea(Z, a.length);
              })));
      p += (P ? $ : "") + u;
      return t ? "-" + p : p;
    },
    Qa = function (d) {
      var p = 0,
        t = 0;
      d = d || window.event;
      d.offsetX || 0 === d.offsetX
        ? ((p = d.offsetX), (t = d.offsetY))
        : d.layerX || 0 == d.layerX
        ? ((p = d.layerX), (t = d.layerY))
        : ((p = d.pageX - d.target.offsetLeft),
          (t = d.pageY - d.target.offsetTop));
      return { x: p, y: t };
    },
    cb = !0,
    Ua = window.devicePixelRatio || 1,
    Oa = 1,
    ma = cb ? Ua / Oa : 1,
    ba = function (d, p, t, N, u, A, B, I, M, P, V, T, Q) {
      "undefined" === typeof Q && (Q = 1);
      B = B || 0;
      I = I || "black";
      var G = 15 < N - p && 15 < u - t ? 8 : 0.35 * Math.min(N - p, u - t);
      d.beginPath();
      d.moveTo(p, t);
      d.save();
      d.fillStyle = A;
      d.globalAlpha = Q;
      d.fillRect(p, t, N - p, u - t);
      d.globalAlpha = 1;
      0 < B &&
        ((Q = 0 === B % 2 ? 0 : 0.5),
        d.beginPath(),
        (d.lineWidth = B),
        (d.strokeStyle = I),
        d.moveTo(p, t),
        d.rect(p - Q, t - Q, N - p + 2 * Q, u - t + 2 * Q),
        d.stroke());
      d.restore();
      !0 === M &&
        (d.save(),
        d.beginPath(),
        d.moveTo(p, t),
        d.lineTo(p + G, t + G),
        d.lineTo(N - G, t + G),
        d.lineTo(N, t),
        d.closePath(),
        (B = d.createLinearGradient((N + p) / 2, t + G, (N + p) / 2, t)),
        B.addColorStop(0, A),
        B.addColorStop(1, "rgba(255, 255, 255, .4)"),
        (d.fillStyle = B),
        d.fill(),
        d.restore());
      !0 === P &&
        (d.save(),
        d.beginPath(),
        d.moveTo(p, u),
        d.lineTo(p + G, u - G),
        d.lineTo(N - G, u - G),
        d.lineTo(N, u),
        d.closePath(),
        (B = d.createLinearGradient((N + p) / 2, u - G, (N + p) / 2, u)),
        B.addColorStop(0, A),
        B.addColorStop(1, "rgba(255, 255, 255, .4)"),
        (d.fillStyle = B),
        d.fill(),
        d.restore());
      !0 === V &&
        (d.save(),
        d.beginPath(),
        d.moveTo(p, t),
        d.lineTo(p + G, t + G),
        d.lineTo(p + G, u - G),
        d.lineTo(p, u),
        d.closePath(),
        (B = d.createLinearGradient(p + G, (u + t) / 2, p, (u + t) / 2)),
        B.addColorStop(0, A),
        B.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
        (d.fillStyle = B),
        d.fill(),
        d.restore());
      !0 === T &&
        (d.save(),
        d.beginPath(),
        d.moveTo(N, t),
        d.lineTo(N - G, t + G),
        d.lineTo(N - G, u - G),
        d.lineTo(N, u),
        (B = d.createLinearGradient(N - G, (u + t) / 2, N, (u + t) / 2)),
        B.addColorStop(0, A),
        B.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
        (d.fillStyle = B),
        B.addColorStop(0, A),
        B.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
        (d.fillStyle = B),
        d.fill(),
        d.closePath(),
        d.restore());
    },
    ja = function (d) {
      for (var p = "", t = 0; t < d.length; t++)
        p += String.fromCharCode(
          Math.ceil(d.length / 57 / 5) ^ d.charCodeAt(t)
        );
      return p;
    },
    kb =
      window &&
      window[ja("mnb`uhno")] &&
      window[ja("mnb`uhno")].href &&
      window[ja("mnb`uhno")].href.indexOf &&
      (-1 !== window[ja("mnb`uhno")].href.indexOf(ja("b`ow`rkr/bnl")) ||
        -1 !== window[ja("mnb`uhno")].href.indexOf(ja("gdonqhy/bnl")) ||
        -1 !== window[ja("mnb`uhno")].href.indexOf(ja("gheemd"))) &&
      -1 === window[ja("mnb`uhno")].href.indexOf(ja("gheemd")),
    lb = {
      reset: {
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==",
      },
      pan: {
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC",
      },
      zoom: {
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=",
      },
      menu: {
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC",
      },
    };
  Z.prototype.setOptions = function (d, p) {
    if (ra[this._defaultsKey]) {
      var t = ra[this._defaultsKey],
        u;
      for (u in t)
        "publicProperties" !== u &&
          t.hasOwnProperty(u) &&
          (this[u] = d && u in d ? d[u] : p && u in p ? p[u] : t[u]);
    } else Ia && window.console && console.log("defaults not set");
  };
  Z.prototype.get = function (d) {
    var p = ra[this._defaultsKey];
    if ("options" === d)
      return this.options && this.options._isPlaceholder ? null : this.options;
    if (
      p.hasOwnProperty(d) ||
      (p.publicProperties && p.publicProperties.hasOwnProperty(d))
    )
      return this[d];
    window.console &&
      window.console.log(
        'Property "' + d + "\" doesn't exist. Please check for typo."
      );
  };
  Z.prototype.set = function (d, p, t) {
    t = "undefined" === typeof t ? !0 : t;
    var u = ra[this._defaultsKey];
    if ("options" === d) this.createUserOptions(p);
    else if (
      u.hasOwnProperty(d) ||
      (u.publicProperties &&
        u.publicProperties.hasOwnProperty(d) &&
        "readWrite" === u.publicProperties[d])
    )
      this.options._isPlaceholder && this.createUserOptions(),
        (this.options[d] = p);
    else {
      window.console &&
        (u.publicProperties &&
        u.publicProperties.hasOwnProperty(d) &&
        "readOnly" === u.publicProperties[d]
          ? window.console.log('Property "' + d + '" is read-only.')
          : window.console.log(
              'Property "' + d + "\" doesn't exist. Please check for typo."
            ));
      return;
    }
    t && (this.stockChart || this.chart || this).render();
  };
  Z.prototype.addTo = function (d, p, t, u) {
    u = "undefined" === typeof u ? !0 : u;
    var A = ra[this._defaultsKey];
    A.hasOwnProperty(d) ||
    (A.publicProperties &&
      A.publicProperties.hasOwnProperty(d) &&
      "readWrite" === A.publicProperties[d])
      ? (this.options._isPlaceholder && this.createUserOptions(),
        "undefined" === typeof this.options[d] && (this.options[d] = []),
        (d = this.options[d]),
        (t = "undefined" === typeof t || null === t ? d.length : t),
        d.splice(t, 0, p),
        u && (this.stockChart || this.chart || this).render())
      : window.console &&
        (A.publicProperties &&
        A.publicProperties.hasOwnProperty(d) &&
        "readOnly" === A.publicProperties[d]
          ? window.console.log('Property "' + d + '" is read-only.')
          : window.console.log(
              'Property "' + d + "\" doesn't exist. Please check for typo."
            ));
  };
  Z.prototype.createUserOptions = function (d) {
    if ("undefined" !== typeof d || this.options._isPlaceholder)
      if (
        (this.parent &&
          this.parent.options._isPlaceholder &&
          this.parent.createUserOptions(),
        this.isOptionsInArray)
      ) {
        this.parent.options[this.optionsName] ||
          (this.parent.options[this.optionsName] = []);
        var p = this.parent.options[this.optionsName],
          t = p.length;
        this.options._isPlaceholder || (Ea(p), (t = p.indexOf(this.options)));
        this.options = "undefined" === typeof d ? {} : d;
        p[t] = this.options;
      } else
        (this.options = "undefined" === typeof d ? {} : d),
          this.parent &&
            ((d = this.parent.options),
            this.optionsName
              ? (p = this.optionsName)
              : (p = this._defaultsKey) && 0 !== p.length
              ? ((t = p.charAt(0).toLowerCase()),
                1 < p.length && (t = t.concat(p.slice(1))),
                (p = t))
              : (p = void 0),
            (d[p] = this.options));
  };
  Z.prototype.remove = function (d) {
    d = "undefined" === typeof d ? !0 : d;
    if (this.isOptionsInArray) {
      var p = this.parent.options[this.optionsName];
      Ea(p);
      var t = p.indexOf(this.options);
      0 <= t && p.splice(t, 1);
    } else delete this.parent.options[this.optionsName];
    d && (this.stockChart || this.chart || this).render();
  };
  Z.prototype.updateOption = function (d) {
    !ra[this._defaultsKey] &&
      Ia &&
      window.console &&
      console.log("defaults not set");
    var l = ra[this._defaultsKey],
      t = {},
      u = this[d],
      A = this._themeOptionsKey,
      I = this._index;
    this.theme && p(this.parent) && p(A) && p(I)
      ? (t = p(this.predefinedThemes[this.theme])
          ? this.predefinedThemes.light1
          : this.predefinedThemes[this.theme])
      : this.parent &&
        this.parent.themeOptions &&
        (this.options.theme
          ? "Chart" === this._defaultsKey && Pa[this.options.theme]
            ? (t = Pa[this.options.theme])
            : stockThemes[this.options.theme] &&
              (t = stockThemes[this.options.theme][A])
          : this.parent.themeOptions[A] &&
            (null === I
              ? (t = this.parent.themeOptions[A])
              : 0 < this.parent.themeOptions[A].length &&
                ((t = Math.min(this.parent.themeOptions[A].length - 1, I)),
                (t = this.parent.themeOptions[A][t]))));
    this.themeOptions = t;
    d in l &&
      (u = d in this.options ? this.options[d] : t && d in t ? t[d] : l[d]);
    if (u === this[d]) return !1;
    this[d] = u;
    return !0;
  };
  Z.prototype.trackChanges = function (d) {
    if (!this.sessionVariables) throw "Session Variable Store not set";
    this.sessionVariables[d] = this.options[d];
  };
  Z.prototype.isBeingTracked = function (d) {
    this.options._oldOptions || (this.options._oldOptions = {});
    return this.options._oldOptions[d] ? !0 : !1;
  };
  Z.prototype.hasOptionChanged = function (d) {
    if (!this.sessionVariables) throw "Session Variable Store not set";
    return this.sessionVariables[d] !== this.options[d];
  };
  Z.prototype.addEventListener = function (d, p, t) {
    d &&
      p &&
      ((this._eventListeners[d] = this._eventListeners[d] || []),
      this._eventListeners[d].push({ context: t || this, eventHandler: p }));
  };
  Z.prototype.removeEventListener = function (d, p) {
    if (d && p && this._eventListeners[d])
      for (var t = this._eventListeners[d], u = 0; u < t.length; u++)
        if (t[u].eventHandler === p) {
          t[u].splice(u, 1);
          break;
        }
  };
  Z.prototype.removeAllEventListeners = function () {
    this._eventListeners = [];
  };
  Z.prototype.dispatchEvent = function (d, p, t) {
    if (d && this._eventListeners[d]) {
      p = p || {};
      for (var u = this._eventListeners[d], A = 0; A < u.length; A++)
        u[A].eventHandler.call(u[A].context, p);
    }
    "function" === typeof this[d] && this[d].call(t || this.chart, p);
  };
  Fa.prototype.registerSpace = function (d, p) {
    "top" === d
      ? (this._topOccupied += p.height)
      : "bottom" === d
      ? (this._bottomOccupied += p.height)
      : "left" === d
      ? (this._leftOccupied += p.width)
      : "right" === d && (this._rightOccupied += p.width);
  };
  Fa.prototype.unRegisterSpace = function (d, p) {
    "top" === d
      ? (this._topOccupied -= p.height)
      : "bottom" === d
      ? (this._bottomOccupied -= p.height)
      : "left" === d
      ? (this._leftOccupied -= p.width)
      : "right" === d && (this._rightOccupied -= p.width);
  };
  Fa.prototype.getFreeSpace = function () {
    return {
      x1: this._x1 + this._leftOccupied,
      y1: this._y1 + this._topOccupied,
      x2: this._x2 - this._rightOccupied,
      y2: this._y2 - this._bottomOccupied,
      width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
      height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied,
    };
  };
  Fa.prototype.reset = function () {
    this._rightOccupied =
      this._leftOccupied =
      this._bottomOccupied =
      this._topOccupied =
        this._padding;
  };
  qa(ka, Z);
  ka.prototype._initialize = function () {
    p(this.padding) || "object" !== typeof this.padding
      ? (this.topPadding =
          this.rightPadding =
          this.bottomPadding =
          this.leftPadding =
            Number(this.padding) | 0)
      : ((this.topPadding = p(this.padding.top)
          ? 0
          : Number(this.padding.top) | 0),
        (this.rightPadding = p(this.padding.right)
          ? 0
          : Number(this.padding.right) | 0),
        (this.bottomPadding = p(this.padding.bottom)
          ? 0
          : Number(this.padding.bottom) | 0),
        (this.leftPadding = p(this.padding.left)
          ? 0
          : Number(this.padding.left) | 0));
  };
  ka.prototype.render = function (d) {
    if (0 !== this.fontSize) {
      d && this.ctx.save();
      var p = this.ctx.font;
      this.ctx.textBaseline = this.textBaseline;
      var t = 0;
      this._isDirty && this.measureText(this.ctx);
      this.ctx.translate(this.x, this.y + t);
      "middle" === this.textBaseline && (t = -this._lineHeight / 2);
      this.ctx.font = this._getFontString();
      this.ctx.rotate((Math.PI / 180) * this.angle);
      var u = 0,
        A = this.topPadding,
        I = null;
      this.ctx.roundRect || Aa(this.ctx);
      ((0 < this.borderThickness && this.borderColor) ||
        this.backgroundColor) &&
        this.ctx.roundRect(
          0,
          t,
          this.width,
          this.height,
          this.cornerRadius,
          this.borderThickness,
          this.backgroundColor,
          this.borderColor
        );
      this.ctx.fillStyle = this.fontColor;
      for (t = 0; t < this._wrappedText.lines.length; t++)
        (I = this._wrappedText.lines[t]),
          "right" === this.textAlign
            ? (u = this.width - I.width - this.rightPadding)
            : "left" === this.textAlign
            ? (u = this.leftPadding)
            : "center" === this.textAlign &&
              (u =
                (this.width - (this.leftPadding + this.rightPadding)) / 2 -
                I.width / 2 +
                this.leftPadding),
          this.ctx.fillText(I.text, u, A),
          (A += I.height);
      this.ctx.font = p;
      d && this.ctx.restore();
    }
  };
  ka.prototype.setText = function (d) {
    this.text = d;
    this._isDirty = !0;
    this._wrappedText = null;
  };
  ka.prototype.measureText = function () {
    this._lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
    if (null === this.maxWidth)
      throw "Please set maxWidth and height for TextBlock";
    this._wrapText(this.ctx);
    this._isDirty = !1;
    return { width: this.width, height: this.height };
  };
  ka.prototype._getLineWithWidth = function (d, p, t) {
    d = String(d);
    if (!d) return { text: "", width: 0 };
    var u = (t = 0),
      A = d.length - 1,
      I = Infinity;
    for (this.ctx.font = this._getFontString(); u <= A; ) {
      var I = Math.floor((u + A) / 2),
        B = d.substr(0, I + 1);
      t = this.ctx.measureText(B).width;
      if (t < p) u = I + 1;
      else if (t > p) A = I - 1;
      else break;
    }
    t > p &&
      1 < B.length &&
      ((B = B.substr(0, B.length - 1)), (t = this.ctx.measureText(B).width));
    p = !0;
    if (B.length === d.length || " " === d[B.length]) p = !1;
    p &&
      ((d = B.split(" ")),
      1 < d.length && d.pop(),
      (B = d.join(" ")),
      (t = this.ctx.measureText(B).width));
    return { text: B, width: t };
  };
  ka.prototype._wrapText = function () {
    var d = new String(Ha(String(this.text))),
      p = [],
      t = this.ctx.font,
      u = 0,
      A = 0;
    this.ctx.font = this._getFontString();
    if (0 === this.frontSize) A = u = 0;
    else
      for (; 0 < d.length; ) {
        var I = this.maxHeight - (this.topPadding + this.bottomPadding),
          B = this._getLineWithWidth(
            d,
            this.maxWidth - (this.leftPadding + this.rightPadding),
            !1
          );
        B.height = this._lineHeight;
        p.push(B);
        var G = A,
          A = Math.max(A, B.width),
          u = u + B.height,
          d = Ha(d.slice(B.text.length, d.length));
        I && u > I && ((B = p.pop()), (u -= B.height), (A = G));
      }
    this._wrappedText = { lines: p, width: A, height: u };
    this.width = A + (this.leftPadding + this.rightPadding);
    this.height = u + (this.topPadding + this.bottomPadding);
    this.ctx.font = t;
  };
  ka.prototype._getFontString = function () {
    var d;
    d = "" + (this.fontStyle ? this.fontStyle + " " : "");
    d += this.fontWeight ? this.fontWeight + " " : "";
    d += this.fontSize ? this.fontSize + "px " : "";
    var p = this.fontFamily ? this.fontFamily + "" : "";
    !t &&
      p &&
      ((p = p.split(",")[0]),
      "'" !== p[0] && '"' !== p[0] && (p = "'" + p + "'"));
    return (d += p);
  };
  qa(Wa, Z);
  qa(Ba, Z);
  Ba.prototype.setLayout = function () {
    if (this.text) {
      var d = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
        t = d.layoutManager.getFreeSpace(),
        u = t.x1,
        A = t.y1,
        I = 0,
        G = 0,
        B =
          this.chart._menuButton &&
          this.chart.exportEnabled &&
          "top" === this.verticalAlign
            ? 40
            : 0,
        Q,
        M;
      this.textAlign = p(this.options.textAlign)
        ? this.horizontalAlign
        : this.textAlign;
      "top" === this.verticalAlign || "bottom" === this.verticalAlign
        ? (null === this.maxWidth &&
            (this.maxWidth =
              t.width - 4 - B * ("center" === this.horizontalAlign ? 2 : 1)),
          (G = 0.5 * t.height - this.margin - 2),
          (I = 0))
        : "center" === this.verticalAlign &&
          ("left" === this.horizontalAlign || "right" === this.horizontalAlign
            ? (null === this.maxWidth && (this.maxWidth = t.height - 4),
              (G = 0.5 * t.width - this.margin - 2))
            : "center" === this.horizontalAlign &&
              (null === this.maxWidth && (this.maxWidth = t.width - 4),
              (G = 0.5 * t.height - 4)));
      var P;
      p(this.padding) || "number" !== typeof this.padding
        ? p(this.padding) ||
          "object" !== typeof this.padding ||
          ((P = this.padding.top
            ? this.padding.top
            : this.padding.bottom
            ? this.padding.bottom
            : 0),
          (P += this.padding.bottom
            ? this.padding.bottom
            : this.padding.top
            ? this.padding.top
            : 0))
        : (P = 2 * this.padding);
      this.wrap || (G = Math.min(G, 1.5 * this.fontSize + P));
      G = new ka(this.ctx, {
        fontSize: this.fontSize,
        fontFamily: this.fontFamily,
        fontColor: this.fontColor,
        fontStyle: this.fontStyle,
        fontWeight: this.fontWeight,
        textAlign: this.textAlign,
        verticalAlign: this.verticalAlign,
        borderColor: this.borderColor,
        borderThickness: this.borderThickness,
        backgroundColor: this.backgroundColor,
        maxWidth: this.maxWidth,
        maxHeight: G,
        cornerRadius: this.cornerRadius,
        text: this.text,
        padding: this.padding,
        textBaseline: "middle",
      });
      P = G.measureText();
      "top" === this.verticalAlign || "bottom" === this.verticalAlign
        ? ("top" === this.verticalAlign
            ? ((A = t.y1 + 2 + this.fontSize / 2 + 4), (M = "top"))
            : "bottom" === this.verticalAlign &&
              ((A = t.y2 - 2 - P.height + this.fontSize / 2 + 4),
              (M = "bottom")),
          "left" === this.horizontalAlign
            ? (u = t.x1 + 2)
            : "center" === this.horizontalAlign
            ? (u = t.x1 + t.width / 2 - P.width / 2)
            : "right" === this.horizontalAlign && (u = t.x2 - 2 - P.width - B),
          (Q = this.horizontalAlign),
          (this.width = P.width),
          (this.height = P.height))
        : "center" === this.verticalAlign &&
          ("left" === this.horizontalAlign
            ? ((u = t.x1 + 2 + (this.fontSize / 2 + 4)),
              (A = t.y2 - 2 - (this.maxWidth / 2 - P.width / 2)),
              (I = -90),
              (M = "left"),
              (this.width = P.height),
              (this.height = P.width))
            : "right" === this.horizontalAlign
            ? ((u = t.x2 - 2 - (this.fontSize / 2 + 4)),
              (A = t.y1 + 2 + (this.maxWidth / 2 - P.width / 2)),
              (I = 90),
              (M = "right"),
              (this.width = P.height),
              (this.height = P.width))
            : "center" === this.horizontalAlign &&
              ((A =
                d.y1 + (d.height / 2 - P.height / 2) + this.fontSize / 2 + 4),
              (u = d.x1 + (d.width / 2 - P.width / 2)),
              (M = "center"),
              (this.width = P.width),
              (this.height = P.height)),
          (Q = "center"));
      G.x = u;
      G.y = A;
      G.angle = I;
      G.horizontalAlign = Q;
      this._textBlock = G;
      d.layoutManager.registerSpace(M, {
        width:
          this.width + ("left" === M || "right" === M ? this.margin + 2 : 0),
        height:
          this.height + ("top" === M || "bottom" === M ? this.margin + 2 : 0),
      });
      this.bounds = { x1: u, y1: A, x2: u + this.width, y2: A + this.height };
      this.ctx.textBaseline = "top";
    }
  };
  Ba.prototype.render = function () {
    this._textBlock && this._textBlock.render(!0);
  };
  qa(Ja, Z);
  Ja.prototype.setLayout = Ba.prototype.setLayout;
  Ja.prototype.render = Ba.prototype.render;
  Xa.prototype.get = function (d, p) {
    var t = null;
    0 < this.pool.length
      ? ((t = this.pool.pop()), Na(t, d, p))
      : (t = va(d, p));
    return t;
  };
  Xa.prototype.release = function (d) {
    this.pool.push(d);
  };
  qa(Ka, Z);
  var Ra = {
    addTheme: function (d, p) {
      Pa[d] = p;
    },
    addColorSet: function (d, p) {
      Ca[d] = p;
    },
    addCultureInfo: function (d, p) {
      La[d] = p;
    },
    formatNumber: function (d, p, t) {
      t = t || "en";
      if (La[t]) return ga(d, p || "#,##0.##", new Ka(t));
      throw "Unknown Culture Name";
    },
    formatDate: function (d, p, t) {
      t = t || "en";
      if (La[t]) return Da(d, p || "DD MMM YYYY", new Ka(t));
      throw "Unknown Culture Name";
    },
  };
  "undefined" !== typeof module && "undefined" !== typeof module.exports
    ? (module.exports = Ra)
    : "function" === typeof define && define.amd
    ? define([], function () {
        return Ra;
      })
    : (window.CanvasJS &&
        window.console &&
        window.console.log(
          "CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."
        ),
      (window.CanvasJS = window.CanvasJS ? window.CanvasJS : Ra));
  u = Ra.Chart = (function () {
    function d(a, f) {
      return a.x - f.x;
    }
    function l(a, f, c) {
      f = f || {};
      p(c)
        ? ((this.predefinedThemes = Pa),
          (this.optionsName = this.parent = this.index = null))
        : ((this.parent = c.parent),
          (this.index = c.index),
          (this.predefinedThemes = c.predefinedThemes),
          (this.optionsName = c.optionsName),
          (this.stockChart = c.stockChart),
          (this.panel = a),
          (this.isOptionsInArray = c.isOptionsInArray));
      this.theme =
        p(f.theme) || p(this.predefinedThemes[f.theme]) ? "light1" : f.theme;
      l.base.constructor.call(
        this,
        "Chart",
        this.optionsName,
        f,
        this.index,
        this.parent
      );
      var b = this;
      this._containerId = a;
      this._objectsInitialized = !1;
      this.overlaidCanvasCtx = this.ctx = null;
      this._indexLabels = [];
      this._panTimerId = 0;
      this._lastTouchEventType = "";
      this._lastTouchData = null;
      this.isAnimating = !1;
      this.renderCount = 0;
      this.disableToolTip = this.animatedRender = !1;
      this.canvasPool = new Xa();
      this.allDOMEventHandlers = [];
      this.panEnabled = !1;
      this._defaultCursor = "default";
      this.plotArea = {
        canvas: null,
        ctx: null,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        width: 0,
        height: 0,
      };
      this._dataInRenderedOrder = [];
      (this.container =
        "string" === typeof this._containerId
          ? document.getElementById(this._containerId)
          : this._containerId)
        ? ((this.container.innerHTML = ""),
          (f = a = 0),
          (a = this.options.width
            ? this.width
            : 0 < this.container.clientWidth
            ? this.container.clientWidth
            : this.width),
          (f =
            c && c.height
              ? c.height
              : this.options.height
              ? this.height
              : 0 < this.container.clientHeight
              ? this.container.clientHeight
              : this.height),
          (this.width = a),
          (this.height = f),
          (this.x1 = this.y1 = 0),
          (this.x2 = this.width),
          (this.y2 = this.height),
          (this.selectedColorSet =
            "undefined" !== typeof Ca[this.colorSet]
              ? Ca[this.colorSet]
              : Ca.colorSet1),
          (this._canvasJSContainer = document.createElement("div")),
          this._canvasJSContainer.setAttribute(
            "class",
            "canvasjs-chart-container"
          ),
          (this._canvasJSContainer.style.position = "relative"),
          (this._canvasJSContainer.style.textAlign = "left"),
          (this._canvasJSContainer.style.cursor = "auto"),
          (this._canvasJSContainer.style.direction = "ltr"),
          t || (this._canvasJSContainer.style.height = "0px"),
          this.container.appendChild(this._canvasJSContainer),
          (this.canvas = va(a, f)),
          (this._preRenderCanvas = va(a, f)),
          (this.canvas.style.position = "absolute"),
          (this.canvas.style.WebkitUserSelect = "none"),
          (this.canvas.style.MozUserSelect = "none"),
          (this.canvas.style.msUserSelect = "none"),
          (this.canvas.style.userSelect = "none"),
          this.canvas.getContext &&
            (this._canvasJSContainer.appendChild(this.canvas),
            (this.ctx = this.canvas.getContext("2d")),
            (this.ctx.textBaseline = "top"),
            Aa(this.ctx),
            (this._preRenderCtx = this._preRenderCanvas.getContext("2d")),
            (this._preRenderCtx.textBaseline = "top"),
            Aa(this._preRenderCtx),
            t
              ? (this.plotArea.ctx = this.ctx)
              : ((this.plotArea.canvas = va(a, f)),
                (this.plotArea.canvas.style.position = "absolute"),
                this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"),
                this._canvasJSContainer.appendChild(this.plotArea.canvas),
                (this.plotArea.ctx = this.plotArea.canvas.getContext("2d"))),
            (this.overlaidCanvas = va(a, f)),
            (this.overlaidCanvas.style.position = "absolute"),
            (this.overlaidCanvas.style.webkitTapHighlightColor = "transparent"),
            (this.overlaidCanvas.style.WebkitUserSelect = "none"),
            (this.overlaidCanvas.style.MozUserSelect = "none"),
            (this.overlaidCanvas.style.msUserSelect = "none"),
            (this.overlaidCanvas.style.userSelect = "none"),
            this.overlaidCanvas.getContext &&
              (this._canvasJSContainer.appendChild(this.overlaidCanvas),
              (this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d")),
              (this.overlaidCanvasCtx.textBaseline = "top"),
              Aa(this.overlaidCanvasCtx)),
            (this._eventManager = new ia(this)),
            (this.windowResizeHandler = G(
              window,
              "resize",
              function () {
                b._updateSize() &&
                  (b.render(),
                  b.isNavigator &&
                    b.stockChart &&
                    b.stockChart.navigator &&
                    b.stockChart.navigator.enabled &&
                    b.stockChart.navigator._updateSlider(
                      b.stockChart._axisXMin,
                      b.stockChart._axisXMax
                    ));
              },
              this.allDOMEventHandlers
            )),
            (this._toolBar = document.createElement("div")),
            this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"),
            Q(this._toolBar, {
              position: "absolute",
              right: "1px",
              top: "1px",
            }),
            this._canvasJSContainer.appendChild(this._toolBar),
            (this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }),
            G(
              this.overlaidCanvas,
              "click",
              function (a) {
                b._mouseEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            G(
              this.overlaidCanvas,
              "mousemove",
              function (a) {
                b._mouseEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            G(
              this.overlaidCanvas,
              "mouseup",
              function (a) {
                b._mouseEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            G(
              this.overlaidCanvas,
              "mousedown",
              function (a) {
                b._mouseEventHandler(a);
                xa(b._dropdownMenu);
              },
              this.allDOMEventHandlers
            ),
            G(
              this.overlaidCanvas,
              "mouseout",
              function (a) {
                b._mouseEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            G(
              this.overlaidCanvas,
              window.navigator.msPointerEnabled
                ? "MSPointerDown"
                : "touchstart",
              function (a) {
                b._touchEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            G(
              this.overlaidCanvas,
              window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove",
              function (a) {
                b._touchEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            G(
              this.overlaidCanvas,
              window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend",
              function (a) {
                b._touchEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            G(
              this.overlaidCanvas,
              window.navigator.msPointerEnabled
                ? "MSPointerCancel"
                : "touchcancel",
              function (a) {
                b._touchEventHandler(a);
              },
              this.allDOMEventHandlers
            ),
            (this.toolTip = new oa(this, this.options.toolTip)),
            (this.data = null),
            (this.axisX = []),
            (this.axisX2 = []),
            (this.axisY = []),
            (this.axisY2 = []),
            (this.sessionVariables = {
              axisX: [],
              axisX2: [],
              axisY: [],
              axisY2: [],
            })))
        : window.console &&
          window.console.log(
            'CanvasJS Error: Chart Container with id "' +
              this._containerId +
              '" was not found'
          );
    }
    function u(a, f) {
      for (var c = [], b, g = 0; g < a.length; g++)
        if (0 == g) c.push(a[0]);
        else {
          var h, r, y;
          y = g - 1;
          h = 0 === y ? 0 : y - 1;
          r = y === a.length - 1 ? y : y + 1;
          b =
            (Math.abs(
              (a[r].x - a[h].x) /
                (0 === a[r].x - a[y].x ? 0.01 : a[r].x - a[y].x)
            ) *
              (f - 1)) /
              2 +
            1;
          var J = (a[r].x - a[h].x) / b;
          b = (a[r].y - a[h].y) / b;
          c[c.length] =
            (a[y].x > a[h].x && 0 < J) || (a[y].x < a[h].x && 0 > J)
              ? { x: a[y].x + J / 3, y: a[y].y + b / 3 }
              : { x: a[y].x, y: a[y].y + (1 === c.length ? 0 : b / 9) };
          y = g;
          h = 0 === y ? 0 : y - 1;
          r = y === a.length - 1 ? y : y + 1;
          b =
            (Math.abs(
              (a[r].x - a[h].x) /
                (0 === a[y].x - a[h].x ? 0.01 : a[y].x - a[h].x)
            ) *
              (f - 1)) /
              2 +
            1;
          J = (a[r].x - a[h].x) / b;
          b = (a[r].y - a[h].y) / b;
          c[c.length] =
            (a[y].x > a[h].x && 0 < J) || (a[y].x < a[h].x && 0 > J)
              ? { x: a[y].x - J / 3, y: a[y].y - b / 3 }
              : { x: a[y].x, y: a[y].y - b / 9 };
          c[c.length] = a[g];
        }
      return c;
    }
    function A(a, f, c, b, g, h, r, y, J, k) {
      var m = 0;
      k ? ((r.color = h), (y.color = h)) : (k = 1);
      m = J ? Math.abs(g - c) : Math.abs(b - f);
      m =
        0 < r.trimLength
          ? Math.abs((m * r.trimLength) / 100)
          : Math.abs(m - r.length);
      J ? ((c += m / 2), (g -= m / 2)) : ((f += m / 2), (b -= m / 2));
      var m = 1 === Math.round(r.thickness) % 2 ? 0.5 : 0,
        n = 1 === Math.round(y.thickness) % 2 ? 0.5 : 0;
      a.save();
      a.globalAlpha = k;
      a.strokeStyle = y.color || h;
      a.lineWidth = y.thickness || 2;
      a.setLineDash && a.setLineDash(I(y.dashType, y.thickness));
      a.beginPath();
      J && 0 < y.thickness
        ? (a.moveTo(b - r.thickness / 2, Math.round((c + g) / 2) - n),
          a.lineTo(f + r.thickness / 2, Math.round((c + g) / 2) - n))
        : 0 < y.thickness &&
          (a.moveTo(Math.round((f + b) / 2) - n, c + r.thickness / 2),
          a.lineTo(Math.round((f + b) / 2) - n, g - r.thickness / 2));
      a.stroke();
      a.strokeStyle = r.color || h;
      a.lineWidth = r.thickness || 2;
      a.setLineDash && a.setLineDash(I(r.dashType, r.thickness));
      a.beginPath();
      J && 0 < r.thickness
        ? (a.moveTo(b - m, c),
          a.lineTo(b - m, g),
          a.moveTo(f + m, c),
          a.lineTo(f + m, g))
        : 0 < r.thickness &&
          (a.moveTo(f, c + m),
          a.lineTo(b, c + m),
          a.moveTo(f, g - m),
          a.lineTo(b, g - m));
      a.stroke();
      a.restore();
    }
    function T(a, f) {
      T.base.constructor.call(this, "Legend", "legend", f, null, a);
      this.chart = a;
      this.canvas = a.canvas;
      this.ctx = this.chart.ctx;
      this.ghostCtx = this.chart._eventManager.ghostCtx;
      this.items = [];
      this.optionsName = "legend";
      this.height = this.width = 0;
      this.orientation = null;
      this.dataSeries = [];
      this.bounds = { x1: null, y1: null, x2: null, y2: null };
      "undefined" === typeof this.options.fontSize &&
        (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
      this.lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
      this.horizontalSpacing = this.fontSize;
    }
    function W(a, f, c, b) {
      W.base.constructor.call(this, "DataSeries", "data", f, c, a);
      this.chart = a;
      this.canvas = a.canvas;
      this._ctx = a.canvas.ctx;
      this.index = c;
      this.noDataPointsInPlotArea = 0;
      this.id = b;
      this.chart._eventManager.objectMap[b] = {
        id: b,
        objectType: "dataSeries",
        dataSeriesIndex: c,
      };
      a = f.dataPoints ? f.dataPoints.length : 0;
      this.dataPointEOs = [];
      for (f = 0; f < a; f++) this.dataPointEOs[f] = {};
      this.dataPointIds = [];
      this.plotUnit = [];
      this.axisY = this.axisX = null;
      this.optionsName = "data";
      this.isOptionsInArray = !0;
      null === this.fillOpacity &&
        (this.type.match(/area/i)
          ? (this.fillOpacity = 0.7)
          : (this.fillOpacity = 1));
      this.axisPlacement = this.getDefaultAxisPlacement();
      "undefined" === typeof this.options.indexLabelFontSize &&
        (this.indexLabelFontSize = this.chart.getAutoFontSize(
          this.indexLabelFontSize
        ));
    }
    function B(a, f, c, b, g, h) {
      B.base.constructor.call(this, "Axis", f, c, b, a);
      this.chart = a;
      this.canvas = a.canvas;
      this.ctx = a.ctx;
      this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
      this.labels = [];
      this.dataSeries = [];
      this._stripLineLabels = this._ticks = this._labels = null;
      this.dataInfo = {
        min: Infinity,
        max: -Infinity,
        viewPortMin: Infinity,
        viewPortMax: -Infinity,
        minDiff: Infinity,
      };
      this.isOptionsInArray = !0;
      "axisX" === g
        ? ("left" === h || "bottom" === h
            ? ((this.optionsName = "axisX"),
              p(this.chart.sessionVariables.axisX[b]) &&
                (this.chart.sessionVariables.axisX[b] = {}),
              (this.sessionVariables = this.chart.sessionVariables.axisX[b]))
            : ((this.optionsName = "axisX2"),
              p(this.chart.sessionVariables.axisX2[b]) &&
                (this.chart.sessionVariables.axisX2[b] = {}),
              (this.sessionVariables = this.chart.sessionVariables.axisX2[b])),
          this.options.interval || (this.intervalType = null))
        : "left" === h || "bottom" === h
        ? ((this.optionsName = "axisY"),
          p(this.chart.sessionVariables.axisY[b]) &&
            (this.chart.sessionVariables.axisY[b] = {}),
          (this.sessionVariables = this.chart.sessionVariables.axisY[b]))
        : ((this.optionsName = "axisY2"),
          p(this.chart.sessionVariables.axisY2[b]) &&
            (this.chart.sessionVariables.axisY2[b] = {}),
          (this.sessionVariables = this.chart.sessionVariables.axisY2[b]));
      "undefined" === typeof this.options.titleFontSize &&
        (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
      "undefined" === typeof this.options.labelFontSize &&
        (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
      this.type = g;
      "axisX" !== g ||
        (c && "undefined" !== typeof c.gridThickness) ||
        (this.gridThickness = 0);
      this._position = h;
      this.lineCoordinates = {
        x1: null,
        y1: null,
        x2: null,
        y2: null,
        width: null,
      };
      this.labelAngle = ((this.labelAngle % 360) + 360) % 360;
      90 < this.labelAngle && 270 > this.labelAngle
        ? (this.labelAngle -= 180)
        : 270 <= this.labelAngle &&
          360 >= this.labelAngle &&
          (this.labelAngle -= 360);
      this.options.scaleBreaks &&
        (this.scaleBreaks = new fa(
          this.chart,
          this.options.scaleBreaks,
          ++this.chart._eventManager.lastObjectId,
          this
        ));
      this.stripLines = [];
      if (this.options.stripLines && 0 < this.options.stripLines.length)
        for (a = 0; a < this.options.stripLines.length; a++)
          this.stripLines.push(
            new P(
              this.chart,
              this.options.stripLines[a],
              a,
              ++this.chart._eventManager.lastObjectId,
              this
            )
          );
      this.options.crosshair &&
        ((this.crosshair = new ea(this.chart, this.options.crosshair, this)),
        (this.crosshair._updatedValue = p(this.sessionVariables.crosshairValue)
          ? null
          : this.sessionVariables.crosshairValue));
      this._titleTextBlock = null;
      this.hasOptionChanged("viewportMinimum") &&
        null === this.viewportMinimum &&
        ((this.options.viewportMinimum = void 0),
        (this.sessionVariables.viewportMinimum = null));
      this.hasOptionChanged("viewportMinimum") ||
      isNaN(this.sessionVariables.newViewportMinimum) ||
      null === this.sessionVariables.newViewportMinimum
        ? (this.sessionVariables.newViewportMinimum = null)
        : (this.viewportMinimum = this.sessionVariables.newViewportMinimum);
      this.hasOptionChanged("viewportMaximum") &&
        null === this.viewportMaximum &&
        ((this.options.viewportMaximum = void 0),
        (this.sessionVariables.viewportMaximum = null));
      this.hasOptionChanged("viewportMaximum") ||
      isNaN(this.sessionVariables.newViewportMaximum) ||
      null === this.sessionVariables.newViewportMaximum
        ? (this.sessionVariables.newViewportMaximum = null)
        : (this.viewportMaximum = this.sessionVariables.newViewportMaximum);
      null !== this.minimum &&
        null !== this.viewportMinimum &&
        (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
      null !== this.maximum &&
        null !== this.viewportMaximum &&
        (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
      this.trackChanges("viewportMinimum");
      this.trackChanges("viewportMaximum");
    }
    function fa(a, f, c, b) {
      fa.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", f, null, b);
      this.id = c;
      this.chart = a;
      this.ctx = this.chart.ctx;
      this.axis = b;
      this.optionsName = "scaleBreaks";
      this.isOptionsInArray = !1;
      this._appliedBreaks = [];
      this.customBreaks = [];
      this.autoBreaks = [];
      "string" === typeof this.spacing
        ? ((this.spacing = parseFloat(this.spacing)),
          (this.spacing = isNaN(this.spacing)
            ? 8
            : (10 < this.spacing ? 10 : this.spacing) + "%"))
        : "number" !== typeof this.spacing && (this.spacing = 8);
      this.autoCalculate &&
        (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
      if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
        for (a = 0; a < this.options.customBreaks.length; a++)
          this.customBreaks.push(
            new ca(
              this.chart,
              "customBreaks",
              this.options.customBreaks[a],
              a,
              ++this.chart._eventManager.lastObjectId,
              this
            )
          ),
            "number" === typeof this.customBreaks[a].startValue &&
              "number" === typeof this.customBreaks[a].endValue &&
              this.customBreaks[a].endValue !==
                this.customBreaks[a].startValue &&
              this._appliedBreaks.push(this.customBreaks[a]);
        this._appliedBreaks.sort(function (a, b) {
          return a.startValue - b.startValue;
        });
        for (a = 0; a < this._appliedBreaks.length - 1; a++)
          this._appliedBreaks[a].endValue >=
            this._appliedBreaks[a + 1].startValue &&
            ((this._appliedBreaks[a].endValue = Math.max(
              this._appliedBreaks[a].endValue,
              this._appliedBreaks[a + 1].endValue
            )),
            window.console &&
              window.console.log(
                "CanvasJS Error: Breaks " +
                  a +
                  " and " +
                  (a + 1) +
                  " are overlapping."
              ),
            this._appliedBreaks.splice(a, 2),
            a--);
      }
    }
    function ca(a, f, c, b, g, h) {
      ca.base.constructor.call(this, "Break", f, c, b, h);
      this.id = g;
      this.chart = a;
      this.ctx = this.chart.ctx;
      this.scaleBreaks = h;
      this.optionsName = f;
      this.isOptionsInArray = !0;
      this.type = c.type ? this.type : h.type;
      this.fillOpacity = p(c.fillOpacity) ? h.fillOpacity : this.fillOpacity;
      this.lineThickness = p(c.lineThickness)
        ? h.lineThickness
        : this.lineThickness;
      this.color = c.color ? this.color : h.color;
      this.lineColor = c.lineColor ? this.lineColor : h.lineColor;
      this.lineDashType = c.lineDashType ? this.lineDashType : h.lineDashType;
      !p(this.startValue) &&
        this.startValue.getTime &&
        (this.startValue = this.startValue.getTime());
      !p(this.endValue) &&
        this.endValue.getTime &&
        (this.endValue = this.endValue.getTime());
      "number" === typeof this.startValue &&
        "number" === typeof this.endValue &&
        this.endValue < this.startValue &&
        ((a = this.startValue),
        (this.startValue = this.endValue),
        (this.endValue = a));
      this.spacing = "undefined" === typeof c.spacing ? h.spacing : c.spacing;
      "string" === typeof this.options.spacing
        ? ((this.spacing = parseFloat(this.spacing)),
          (this.spacing = isNaN(this.spacing)
            ? 0
            : (10 < this.spacing ? 10 : this.spacing) + "%"))
        : "number" !== typeof this.options.spacing &&
          (this.spacing = h.spacing);
      this.size = h.parent.logarithmic ? 1 : 0;
    }
    function P(a, f, c, b, g) {
      P.base.constructor.call(this, "StripLine", "stripLines", f, c, g);
      this.id = b;
      this.chart = a;
      this.ctx = this.chart.ctx;
      this.label = this.label;
      this.axis = g;
      this.optionsName = "stripLines";
      this.isOptionsInArray = !0;
      this._thicknessType = "pixel";
      null !== this.startValue &&
        null !== this.endValue &&
        ((this.value = g.logarithmic
          ? Math.sqrt(
              (this.startValue.getTime
                ? this.startValue.getTime()
                : this.startValue) *
                (this.endValue.getTime
                  ? this.endValue.getTime()
                  : this.endValue)
            )
          : ((this.startValue.getTime
              ? this.startValue.getTime()
              : this.startValue) +
              (this.endValue.getTime
                ? this.endValue.getTime()
                : this.endValue)) /
            2),
        (this._thicknessType = null));
    }
    function ea(a, f, c) {
      ea.base.constructor.call(this, "Crosshair", "crosshair", f, null, c);
      this.chart = a;
      this.ctx = this.chart.ctx;
      this.axis = c;
      this.optionsName = "crosshair";
      this._thicknessType = "pixel";
    }
    function oa(a, f) {
      oa.base.constructor.call(this, "ToolTip", "toolTip", f, null, a);
      this.chart = a;
      this.canvas = a.canvas;
      this.ctx = this.chart.ctx;
      this.currentDataPointIndex = this.currentSeriesIndex = -1;
      this._prevY = this._prevX = NaN;
      this.containerTransitionDuration = 0.1;
      this.mozContainerTransition = this.getContainerTransition(
        this.containerTransitionDuration
      );
      this.optionsName = "toolTip";
      this._initialize();
    }
    function ia(a) {
      this.chart = a;
      this.lastObjectId = 0;
      this.objectMap = [];
      this.rectangularRegionEventSubscriptions = [];
      this.previousDataPointEventObject = null;
      this.ghostCanvas = va(this.chart.width, this.chart.height, !0);
      this.ghostCtx = this.ghostCanvas.getContext("2d");
      this.mouseoveredObjectMaps = [];
    }
    function X(a) {
      this.chart = a;
      this.ctx = this.chart.plotArea.ctx;
      this.animations = [];
      this.animationRequestId = null;
    }
    qa(l, Z);
    l.prototype.destroy = function () {
      var a = this.allDOMEventHandlers;
      this._animator && this._animator.cancelAllAnimations();
      this._panTimerId && clearTimeout(this._panTimerId);
      for (var f = 0; f < a.length; f++) {
        var c = a[f][0],
          b = a[f][1],
          g = a[f][2],
          h = a[f][3],
          h = h || !1;
        c.removeEventListener
          ? c.removeEventListener(b, g, h)
          : c.detachEvent && c.detachEvent("on" + b, g);
      }
      this.allDOMEventHandlers = [];
      for (
        this.removeAllEventListeners();
        this._canvasJSContainer && this._canvasJSContainer.hasChildNodes();

      )
        this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
      for (; this.container && this.container.hasChildNodes(); )
        this.container.removeChild(this.container.lastChild);
      for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); )
        this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
      this.container = this._canvasJSContainer = null;
      this.toolTip.container = null;
      this.canvas && za(this.canvas);
      this.overlaidCanvas && za(this.overlaidCanvas);
      this._preRenderCanvas && za(this._preRenderCanvas);
      this._breaksCanvas && za(this._breaksCanvas);
      this._eventManager &&
        this._eventManager.ghostCanvas &&
        za(this._eventManager.ghostCanvas);
      this._toolBar =
        this._dropdownMenu =
        this._menuButton =
        this._resetButton =
        this._zoomButton =
          null;
    };
    l.prototype._updateOptions = function () {
      var a = this;
      this.updateOption("width");
      this.updateOption("height");
      this.updateOption("dataPointWidth");
      this.updateOption("dataPointMinWidth");
      this.updateOption("dataPointMaxWidth");
      this.updateOption("interactivityEnabled");
      this.updateOption("theme");
      this.stockChart &&
        this.stockChart.options &&
        "undefined" !== typeof this.stockChart.options.theme &&
        p(this.options.theme) &&
        (this.theme = this.stockChart.theme);
      this.updateOption("colorSet") &&
        (this.selectedColorSet =
          "undefined" !== typeof Ca[this.colorSet]
            ? Ca[this.colorSet]
            : Ca.colorSet1);
      this.updateOption("backgroundColor");
      this.stockChart &&
        this.stockChart.options &&
        "undefined" !== typeof this.stockChart.options.backgroundColor &&
        p(this.options.backgroundColor) &&
        (this.backgroundColor = this.stockChart.backgroundColor);
      this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
      this.updateOption("culture");
      this.stockChart &&
        p(this.options.culture) &&
        (this.culture = this.stockChart.culture);
      this._cultureInfo = new Ka(this.culture);
      this.updateOption("animationEnabled");
      this.animationEnabled = this.animationEnabled && t;
      this.updateOption("animationDuration");
      this.updateOption("rangeChanging");
      this.updateOption("rangeChanged");
      this.updateOption("exportEnabled");
      this.updateOption("exportFileName");
      this.updateOption("zoomType");
      this.toolbar = new Wa(this, this.options.toolbar);
      if (
        this.stockChart &&
        this.stockChart.options &&
        this.stockChart.options.toolbar &&
        !this.options.toolbar
      )
        for (var f in this.stockChart.options.toolbar)
          this.toolbar[f] = this.stockChart.options.toolbar[f];
      if (this.options.zoomEnabled || this.panEnabled) {
        if (this._zoomButton)
          Q(this._zoomButton, {
            borderRight:
              this.toolbar.buttonBorderThickness +
              "px solid " +
              this.toolbar.buttonBorderColor,
            backgroundColor: a.toolbar.itemBackgroundColor,
            color: a.toolbar.fontColor,
          }),
            0 >= navigator.userAgent.search("MSIE") &&
              this._zoomButton.childNodes[0] &&
              Q(this._zoomButton.childNodes[0], {
                WebkitFilter: "invert(0%)",
                filter: "invert(0%)",
              });
        else {
          var c = !1;
          xa((this._zoomButton = document.createElement("button")));
          ua(this, this._zoomButton, "pan");
          this._toolBar.appendChild(this._zoomButton);
          this._zoomButton.style.borderRight =
            this.toolbar.buttonBorderThickness +
            "px solid " +
            this.toolbar.buttonBorderColor;
          G(
            this._zoomButton,
            "touchstart",
            function (a) {
              c = !0;
            },
            this.allDOMEventHandlers
          );
          G(
            this._zoomButton,
            "click",
            function () {
              a.zoomEnabled
                ? ((a.zoomEnabled = !1),
                  (a.panEnabled = !0),
                  ua(a, a._zoomButton, "zoom"))
                : ((a.zoomEnabled = !0),
                  (a.panEnabled = !1),
                  ua(a, a._zoomButton, "pan"));
              a.render();
            },
            this.allDOMEventHandlers
          );
          G(
            this._zoomButton,
            "mousemove",
            function () {
              c
                ? (c = !1)
                : (Q(a._zoomButton, {
                    backgroundColor: a.toolbar.itemBackgroundColorOnHover,
                    color: a.toolbar.fontColorOnHover,
                    transition: "0.4s",
                    WebkitTransition: "0.4s",
                  }),
                  0 >= navigator.userAgent.search("MSIE") &&
                    Q(a._zoomButton.childNodes[0], {
                      WebkitFilter: "invert(100%)",
                      filter: "invert(100%)",
                    }));
            },
            this.allDOMEventHandlers
          );
          G(
            this._zoomButton,
            "mouseout",
            function () {
              c ||
                (Q(a._zoomButton, {
                  backgroundColor: a.toolbar.itemBackgroundColor,
                  color: a.toolbar.fontColor,
                  transition: "0.4s",
                  WebkitTransition: "0.4s",
                }),
                0 >= navigator.userAgent.search("MSIE") &&
                  Q(a._zoomButton.childNodes[0], {
                    WebkitFilter: "invert(0%)",
                    filter: "invert(0%)",
                  }));
            },
            this.allDOMEventHandlers
          );
        }
        this._resetButton
          ? (Q(this._resetButton, {
              borderRight:
                this.toolbar.buttonBorderThickness +
                "px solid " +
                this.toolbar.buttonBorderColor,
              backgroundColor: a.toolbar.itemBackgroundColor,
              color: a.toolbar.fontColor,
            }),
            0 >= navigator.userAgent.search("MSIE") &&
              this._resetButton.childNodes[0] &&
              Q(this._resetButton.childNodes[0], {
                WebkitFilter: "invert(0%)",
                filter: "invert(0%)",
              }),
            (this._resetButton.title = this._cultureInfo.resetText))
          : ((c = !1),
            xa((this._resetButton = document.createElement("button"))),
            ua(this, this._resetButton, "reset"),
            (this._resetButton.style.borderRight =
              (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) +
              "px solid " +
              this.toolbar.buttonBorderColor),
            this._toolBar.appendChild(this._resetButton),
            G(
              this._resetButton,
              "touchstart",
              function (a) {
                c = !0;
              },
              this.allDOMEventHandlers
            ),
            G(
              this._resetButton,
              "click",
              function () {
                a.toolTip.hide();
                a.toolTip &&
                  a.toolTip.enabled &&
                  a.toolTip.dispatchEvent(
                    "hidden",
                    { chart: a, toolTip: a.toolTip },
                    a.toolTip
                  );
                a.zoomEnabled || a.panEnabled
                  ? ((a.zoomEnabled = !0),
                    (a.panEnabled = !1),
                    ua(a, a._zoomButton, "pan"),
                    (a._defaultCursor = "default"),
                    (a.overlaidCanvas.style.cursor = a._defaultCursor))
                  : ((a.zoomEnabled = !1), (a.panEnabled = !1));
                if (a.sessionVariables.axisX)
                  for (var b = 0; b < a.sessionVariables.axisX.length; b++)
                    (a.sessionVariables.axisX[b].newViewportMinimum = null),
                      (a.sessionVariables.axisX[b].newViewportMaximum = null);
                if (a.sessionVariables.axisX2)
                  for (b = 0; b < a.sessionVariables.axisX2.length; b++)
                    (a.sessionVariables.axisX2[b].newViewportMinimum = null),
                      (a.sessionVariables.axisX2[b].newViewportMaximum = null);
                if (a.sessionVariables.axisY)
                  for (b = 0; b < a.sessionVariables.axisY.length; b++)
                    (a.sessionVariables.axisY[b].newViewportMinimum = null),
                      (a.sessionVariables.axisY[b].newViewportMaximum = null);
                if (a.sessionVariables.axisY2)
                  for (b = 0; b < a.sessionVariables.axisY2.length; b++)
                    (a.sessionVariables.axisY2[b].newViewportMinimum = null),
                      (a.sessionVariables.axisY2[b].newViewportMaximum = null);
                a.resetOverlayedCanvas();
                0 >= navigator.userAgent.search("MSIE") &&
                  Q(a._resetButton.childNodes[0], {
                    WebkitFilter: "invert(0%)",
                    filter: "invert(0%)",
                  });
                xa(a._zoomButton, a._resetButton);
                a.stockChart &&
                  (a.stockChart._rangeEventParameter = {
                    stockChart: a.stockChart,
                    source: "chart",
                    index: a.stockChart.charts.indexOf(a),
                    minimum: null,
                    maximum: null,
                  });
                a._dispatchRangeEvent("rangeChanging", "reset");
                a.stockChart &&
                  ((a.stockChart._rangeEventParameter.type = "rangeChanging"),
                  a.stockChart.dispatchEvent(
                    "rangeChanging",
                    a.stockChart._rangeEventParameter,
                    a.stockChart
                  ));
                a.render();
                a.syncCharts &&
                  a.stockChart &&
                  ((a.stockChart.rangeUpdatedBy =
                    !a.stockChart.navigator.slider ||
                    (p(a.stockChart.navigator.slider.options.minimum) &&
                      p(a.stockChart.navigator.slider.options.maximum))
                      ? !a.stockChart.rangeSelector.enabled ||
                        !a.stockChart.rangeSelector.inputFields.enabled ||
                        (p(
                          a.stockChart.rangeSelector.inputFields.options
                            .startValue
                        ) &&
                          p(
                            a.stockChart.rangeSelector.inputFields.options
                              .endValue
                          ))
                        ? null
                        : "inputFields"
                      : "navigator"),
                  p(a.stockChart._selectedRangeButtonIndex) ||
                    (a.stockChart.rangeUpdatedBy = "rangeButton"),
                  a.syncCharts(null, null),
                  "rangeButton" === a.stockChart.rangeUpdatedBy &&
                    a.stockChart.rangeSelector.selectedRangeButtonIndex <
                      a.stockChart.rangeSelector.buttons.length &&
                    ((b =
                      a.stockChart.rangeSelector.buttons[
                        a.stockChart.rangeSelector.selectedRangeButtonIndex
                      ]),
                    b.enabled &&
                      ((b.state = "on"),
                      (b.textBlock.fontWeight = "bold"),
                      (b.textBlock.fontColor =
                        a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover),
                      (b.textBlock.backgroundColor =
                        a.stockChart.rangeSelector.buttonStyle.backgroundColorOnSelect),
                      (a.stockChart.rangeSelector.sessionVariables._clickedRangeButtonIndex =
                        null),
                      b.render())));
                a._dispatchRangeEvent("rangeChanged", "reset");
                a.stockChart &&
                  ((a.stockChart._rangeEventParameter.type = "rangeChanged"),
                  a.stockChart.dispatchEvent(
                    "rangeChanged",
                    a.stockChart._rangeEventParameter,
                    a.stockChart
                  ));
              },
              this.allDOMEventHandlers
            ),
            G(
              this._resetButton,
              "mousemove",
              function () {
                c ||
                  (Q(a._resetButton, {
                    backgroundColor: a.toolbar.itemBackgroundColorOnHover,
                    color: a.toolbar.fontColorOnHover,
                    transition: "0.4s",
                    WebkitTransition: "0.4s",
                  }),
                  0 >= navigator.userAgent.search("MSIE") &&
                    Q(a._resetButton.childNodes[0], {
                      WebkitFilter: "invert(100%)",
                      filter: "invert(100%)",
                    }));
              },
              this.allDOMEventHandlers
            ),
            G(
              this._resetButton,
              "mouseout",
              function () {
                c ||
                  (Q(a._resetButton, {
                    backgroundColor: a.toolbar.itemBackgroundColor,
                    color: a.toolbar.fontColor,
                    transition: "0.4s",
                    WebkitTransition: "0.4s",
                  }),
                  0 >= navigator.userAgent.search("MSIE") &&
                    Q(a._resetButton.childNodes[0], {
                      WebkitFilter: "invert(0%)",
                      filter: "invert(0%)",
                    }));
              },
              this.allDOMEventHandlers
            ),
            (this.overlaidCanvas.style.cursor = a._defaultCursor));
        this.zoomEnabled ||
          this.panEnabled ||
          (this._zoomButton
            ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText
                ? ((this.panEnabled = !0), (this.zoomEnabled = !1))
                : ((this.zoomEnabled = !0), (this.panEnabled = !1)),
              Ma(a._zoomButton, a._resetButton))
            : ((this.zoomEnabled = !0), (this.panEnabled = !1)));
      } else this.panEnabled = this.zoomEnabled = !1;
      ib(this);
      "none" !== this._toolBar.style.display &&
        this._zoomButton &&
        (this.panEnabled
          ? ua(a, a._zoomButton, "zoom")
          : ua(a, a._zoomButton, "pan"),
        a._resetButton.getAttribute("state") !== a._cultureInfo.resetText &&
          ua(a, a._resetButton, "reset"));
      this.options.toolTip &&
        this.toolTip.options !== this.options.toolTip &&
        (this.toolTip.options = this.options.toolTip);
      for (f in this.toolTip.options)
        this.toolTip.options.hasOwnProperty(f) && this.toolTip.updateOption(f);
    };
    l.prototype._updateSize = function () {
      var a;
      a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
      var f = 0,
        c = 0;
      this.options.width
        ? (f = this.width)
        : (this.width = f =
            0 < this.container.clientWidth
              ? this.container.clientWidth
              : this.width);
      p(this.stockChart) || p(this.index)
        ? this.options.height
          ? (c = this.height)
          : (this.height = c =
              0 < this.container.clientHeight
                ? this.container.clientHeight
                : this.height)
        : (c = this.height = this.stockChart._chartsHeight[this.index]);
      if (this.canvas.width !== f * ma || this.canvas.height !== c * ma) {
        for (var b = 0; b < a.length; b++) Na(a[b], f, c);
        this.bounds = {
          x1: 0,
          y1: 0,
          x2: this.width,
          y2: this.height,
          width: this.width,
          height: this.height,
        };
        a = !0;
      } else a = !1;
      return a;
    };
    l.prototype._initialize = function () {
      this.isNavigator =
        p(this.parent) ||
        p(this.parent._defaultsKey) ||
        "Navigator" !== this.parent._defaultsKey
          ? !1
          : !0;
      this._animator
        ? this._animator.cancelAllAnimations()
        : (this._animator = new X(this));
      this.removeAllEventListeners();
      this.disableToolTip = !1;
      this._axes = [];
      this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
      this._updateOptions();
      this.animatedRender =
        t && this.animationEnabled && 0 === this.renderCount;
      this._updateSize();
      this.clearCanvas();
      this.ctx.beginPath();
      this.axisX = [];
      this.axisX2 = [];
      this.axisY = [];
      this.axisY2 = [];
      this._indexLabels = [];
      this._dataInRenderedOrder = [];
      this._events = [];
      this._eventManager && this._eventManager.reset();
      this.plotInfo = { axisPlacement: null, plotTypes: [] };
      this.layoutManager = new Fa(
        0,
        0,
        this.width,
        this.height,
        this.isNavigator ? 0 : 2
      );
      this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
      this.data = [];
      this.title = null;
      this.subtitles = [];
      var a = 0,
        f = null;
      if (this.options.data) {
        for (var c = 0; c < this.options.data.length; c++)
          if (
            (a++,
            !this.options.data[c].type ||
              0 <= l._supportedChartTypes.indexOf(this.options.data[c].type))
          ) {
            var b = new W(
              this,
              this.options.data[c],
              a - 1,
              ++this._eventManager.lastObjectId
            );
            if (!p(b) && b.dataPoints)
              for (var g = 0; g < b.dataPoints.length; g++)
                if (b.dataPoints[g].x && b.dataPoints[g].x.getTime) {
                  b.xValueType = "dateTime";
                  break;
                }
            "error" === b.type &&
              ((b.linkedDataSeriesIndex = p(
                this.options.data[c].linkedDataSeriesIndex
              )
                ? c - 1
                : this.options.data[c].linkedDataSeriesIndex),
              0 > b.linkedDataSeriesIndex ||
                b.linkedDataSeriesIndex >= this.options.data.length ||
                "number" !== typeof b.linkedDataSeriesIndex ||
                "error" === this.options.data[b.linkedDataSeriesIndex].type) &&
              (b.linkedDataSeriesIndex = null);
            null === b.name && (b.name = "DataSeries " + a);
            null === b.color
              ? 1 < this.options.data.length
                ? ((b._colorSet = [
                    this.selectedColorSet[
                      b.index % this.selectedColorSet.length
                    ],
                  ]),
                  (b.color =
                    this.selectedColorSet[
                      b.index % this.selectedColorSet.length
                    ]))
                : (b._colorSet =
                    "line" === b.type ||
                    "stepLine" === b.type ||
                    "spline" === b.type ||
                    "area" === b.type ||
                    "stepArea" === b.type ||
                    "splineArea" === b.type ||
                    "stackedArea" === b.type ||
                    "stackedArea100" === b.type ||
                    "rangeArea" === b.type ||
                    "rangeSplineArea" === b.type ||
                    "candlestick" === b.type ||
                    "ohlc" === b.type ||
                    "waterfall" === b.type ||
                    "boxAndWhisker" === b.type
                      ? [this.selectedColorSet[0]]
                      : this.selectedColorSet)
              : (b._colorSet = [b.color]);
            null === b.markerSize &&
              ((("line" === b.type ||
                "stepLine" === b.type ||
                "spline" === b.type ||
                0 <= b.type.toLowerCase().indexOf("area")) &&
                b.dataPoints &&
                b.dataPoints.length < this.width / 16) ||
                "scatter" === b.type) &&
              (b.markerSize = 8);
            ("bubble" !== b.type && "scatter" !== b.type) ||
              !b.dataPoints ||
              (b.dataPoints.some
                ? b.dataPoints.some(function (a) {
                    return a.x;
                  }) && b.dataPoints.sort(d)
                : b.dataPoints.sort(d));
            this.data.push(b);
            var g = b.axisPlacement,
              f = f || g,
              h;
            "normal" === g
              ? "xySwapped" === this.plotInfo.axisPlacement
                ? (h = 'You cannot combine "' + b.type + '" with bar chart')
                : "none" === this.plotInfo.axisPlacement
                ? (h = 'You cannot combine "' + b.type + '" with pie chart')
                : null === this.plotInfo.axisPlacement &&
                  (this.plotInfo.axisPlacement = "normal")
              : "xySwapped" === g
              ? "normal" === this.plotInfo.axisPlacement
                ? (h =
                    'You cannot combine "' +
                    b.type +
                    '" with line, area, column or pie chart')
                : "none" === this.plotInfo.axisPlacement
                ? (h = 'You cannot combine "' + b.type + '" with pie chart')
                : null === this.plotInfo.axisPlacement &&
                  (this.plotInfo.axisPlacement = "xySwapped")
              : "none" === g
              ? "normal" === this.plotInfo.axisPlacement
                ? (h =
                    'You cannot combine "' +
                    b.type +
                    '" with line, area, column or bar chart')
                : "xySwapped" === this.plotInfo.axisPlacement
                ? (h = 'You cannot combine "' + b.type + '" with bar chart')
                : null === this.plotInfo.axisPlacement &&
                  (this.plotInfo.axisPlacement = "none")
              : null === g &&
                "none" === this.plotInfo.axisPlacement &&
                (h = 'You cannot combine "' + b.type + '" with pie chart');
            if (h && window.console) {
              window.console.log(h);
              return;
            }
          }
        for (c = 0; c < this.data.length; c++) {
          if ("none" == f && "error" === this.data[c].type && window.console) {
            window.console.log(
              'You cannot combine "' + b.type + '" with error chart'
            );
            return;
          }
          "error" === this.data[c].type &&
            ((this.data[c].axisPlacement = this.plotInfo.axisPlacement =
              f || "normal"),
            (this.data[c]._linkedSeries =
              null === this.data[c].linkedDataSeriesIndex
                ? null
                : this.data[this.data[c].linkedDataSeriesIndex]));
        }
      }
      this._objectsInitialized = !0;
      this._plotAreaElements = [];
    };
    l._supportedChartTypes = Ea(
      "line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(
        " "
      )
    );
    l.prototype.setLayout = function () {
      for (var a = this._plotAreaElements, f = 0; f < this.data.length; f++)
        if (
          "normal" === this.plotInfo.axisPlacement ||
          "xySwapped" === this.plotInfo.axisPlacement
        ) {
          if (!this.data[f].axisYType || "primary" === this.data[f].axisYType)
            if (this.options.axisY && 0 < this.options.axisY.length) {
              if (!this.axisY.length)
                for (var c = 0; c < this.options.axisY.length; c++)
                  "normal" === this.plotInfo.axisPlacement
                    ? this._axes.push(
                        (this.axisY[c] = new B(
                          this,
                          "axisY",
                          this.options.axisY[c],
                          c,
                          "axisY",
                          "left"
                        ))
                      )
                    : "xySwapped" === this.plotInfo.axisPlacement &&
                      this._axes.push(
                        (this.axisY[c] = new B(
                          this,
                          "axisY",
                          this.options.axisY[c],
                          c,
                          "axisY",
                          "bottom"
                        ))
                      );
              this.data[f].axisY =
                this.axisY[
                  0 <= this.data[f].axisYIndex &&
                  this.data[f].axisYIndex < this.axisY.length
                    ? this.data[f].axisYIndex
                    : 0
                ];
              this.axisY[
                0 <= this.data[f].axisYIndex &&
                this.data[f].axisYIndex < this.axisY.length
                  ? this.data[f].axisYIndex
                  : 0
              ].dataSeries.push(this.data[f]);
            } else
              this.axisY.length ||
                ("normal" === this.plotInfo.axisPlacement
                  ? this._axes.push(
                      (this.axisY[0] = new B(
                        this,
                        "axisY",
                        this.options.axisY,
                        0,
                        "axisY",
                        "left"
                      ))
                    )
                  : "xySwapped" === this.plotInfo.axisPlacement &&
                    this._axes.push(
                      (this.axisY[0] = new B(
                        this,
                        "axisY",
                        this.options.axisY,
                        0,
                        "axisY",
                        "bottom"
                      ))
                    )),
                (this.data[f].axisY = this.axisY[0]),
                this.axisY[0].dataSeries.push(this.data[f]);
          if ("secondary" === this.data[f].axisYType)
            if (this.options.axisY2 && 0 < this.options.axisY2.length) {
              if (!this.axisY2.length)
                for (c = 0; c < this.options.axisY2.length; c++)
                  "normal" === this.plotInfo.axisPlacement
                    ? this._axes.push(
                        (this.axisY2[c] = new B(
                          this,
                          "axisY2",
                          this.options.axisY2[c],
                          c,
                          "axisY",
                          "right"
                        ))
                      )
                    : "xySwapped" === this.plotInfo.axisPlacement &&
                      this._axes.push(
                        (this.axisY2[c] = new B(
                          this,
                          "axisY2",
                          this.options.axisY2[c],
                          c,
                          "axisY",
                          "top"
                        ))
                      );
              this.data[f].axisY =
                this.axisY2[
                  0 <= this.data[f].axisYIndex &&
                  this.data[f].axisYIndex < this.axisY2.length
                    ? this.data[f].axisYIndex
                    : 0
                ];
              this.axisY2[
                0 <= this.data[f].axisYIndex &&
                this.data[f].axisYIndex < this.axisY2.length
                  ? this.data[f].axisYIndex
                  : 0
              ].dataSeries.push(this.data[f]);
            } else
              this.axisY2.length ||
                ("normal" === this.plotInfo.axisPlacement
                  ? this._axes.push(
                      (this.axisY2[0] = new B(
                        this,
                        "axisY2",
                        this.options.axisY2,
                        0,
                        "axisY",
                        "right"
                      ))
                    )
                  : "xySwapped" === this.plotInfo.axisPlacement &&
                    this._axes.push(
                      (this.axisY2[0] = new B(
                        this,
                        "axisY2",
                        this.options.axisY2,
                        0,
                        "axisY",
                        "top"
                      ))
                    )),
                (this.data[f].axisY = this.axisY2[0]),
                this.axisY2[0].dataSeries.push(this.data[f]);
          if (!this.data[f].axisXType || "primary" === this.data[f].axisXType)
            if (this.options.axisX && 0 < this.options.axisX.length) {
              if (!this.axisX.length)
                for (c = 0; c < this.options.axisX.length; c++)
                  "normal" === this.plotInfo.axisPlacement
                    ? this._axes.push(
                        (this.axisX[c] = new B(
                          this,
                          "axisX",
                          this.options.axisX[c],
                          c,
                          "axisX",
                          "bottom"
                        ))
                      )
                    : "xySwapped" === this.plotInfo.axisPlacement &&
                      this._axes.push(
                        (this.axisX[c] = new B(
                          this,
                          "axisX",
                          this.options.axisX[c],
                          c,
                          "axisX",
                          "left"
                        ))
                      );
              this.data[f].axisX =
                this.axisX[
                  0 <= this.data[f].axisXIndex &&
                  this.data[f].axisXIndex < this.axisX.length
                    ? this.data[f].axisXIndex
                    : 0
                ];
              this.axisX[
                0 <= this.data[f].axisXIndex &&
                this.data[f].axisXIndex < this.axisX.length
                  ? this.data[f].axisXIndex
                  : 0
              ].dataSeries.push(this.data[f]);
            } else
              this.axisX.length ||
                ("normal" === this.plotInfo.axisPlacement
                  ? this._axes.push(
                      (this.axisX[0] = new B(
                        this,
                        "axisX",
                        this.options.axisX,
                        0,
                        "axisX",
                        "bottom"
                      ))
                    )
                  : "xySwapped" === this.plotInfo.axisPlacement &&
                    this._axes.push(
                      (this.axisX[0] = new B(
                        this,
                        "axisX",
                        this.options.axisX,
                        0,
                        "axisX",
                        "left"
                      ))
                    )),
                (this.data[f].axisX = this.axisX[0]),
                this.axisX[0].dataSeries.push(this.data[f]);
          if ("secondary" === this.data[f].axisXType)
            if (this.options.axisX2 && 0 < this.options.axisX2.length) {
              if (!this.axisX2.length)
                for (c = 0; c < this.options.axisX2.length; c++)
                  "normal" === this.plotInfo.axisPlacement
                    ? this._axes.push(
                        (this.axisX2[c] = new B(
                          this,
                          "axisX2",
                          this.options.axisX2[c],
                          c,
                          "axisX",
                          "top"
                        ))
                      )
                    : "xySwapped" === this.plotInfo.axisPlacement &&
                      this._axes.push(
                        (this.axisX2[c] = new B(
                          this,
                          "axisX2",
                          this.options.axisX2[c],
                          c,
                          "axisX",
                          "right"
                        ))
                      );
              this.data[f].axisX =
                this.axisX2[
                  0 <= this.data[f].axisXIndex &&
                  this.data[f].axisXIndex < this.axisX2.length
                    ? this.data[f].axisXIndex
                    : 0
                ];
              this.axisX2[
                0 <= this.data[f].axisXIndex &&
                this.data[f].axisXIndex < this.axisX2.length
                  ? this.data[f].axisXIndex
                  : 0
              ].dataSeries.push(this.data[f]);
            } else
              this.axisX2.length ||
                ("normal" === this.plotInfo.axisPlacement
                  ? this._axes.push(
                      (this.axisX2[0] = new B(
                        this,
                        "axisX2",
                        this.options.axisX2,
                        0,
                        "axisX",
                        "top"
                      ))
                    )
                  : "xySwapped" === this.plotInfo.axisPlacement &&
                    this._axes.push(
                      (this.axisX2[0] = new B(
                        this,
                        "axisX2",
                        this.options.axisX2,
                        0,
                        "axisX",
                        "right"
                      ))
                    )),
                (this.data[f].axisX = this.axisX2[0]),
                this.axisX2[0].dataSeries.push(this.data[f]);
        }
      if (this.axisY) {
        for (c = 1; c < this.axisY.length; c++)
          "undefined" === typeof this.axisY[c].options.gridThickness &&
            (this.axisY[c].gridThickness = 0);
        for (c = 0; c < this.axisY.length - 1; c++)
          "undefined" === typeof this.axisY[c].options.margin &&
            (this.axisY[c].margin = 10);
      }
      if (this.axisY2) {
        for (c = 1; c < this.axisY2.length; c++)
          "undefined" === typeof this.axisY2[c].options.gridThickness &&
            (this.axisY2[c].gridThickness = 0);
        for (c = 0; c < this.axisY2.length - 1; c++)
          "undefined" === typeof this.axisY2[c].options.margin &&
            (this.axisY2[c].margin = 10);
      }
      this.axisY &&
        0 < this.axisY.length &&
        this.axisY2 &&
        0 < this.axisY2.length &&
        (0 < this.axisY[0].gridThickness &&
        "undefined" === typeof this.axisY2[0].options.gridThickness
          ? (this.axisY2[0].gridThickness = 0)
          : 0 < this.axisY2[0].gridThickness &&
            "undefined" === typeof this.axisY[0].options.gridThickness &&
            (this.axisY[0].gridThickness = 0));
      if (this.axisX)
        for (c = 0; c < this.axisX.length; c++)
          "undefined" === typeof this.axisX[c].options.gridThickness &&
            (this.axisX[c].gridThickness = 0);
      if (this.axisX2)
        for (c = 0; c < this.axisX2.length; c++)
          "undefined" === typeof this.axisX2[c].options.gridThickness &&
            (this.axisX2[c].gridThickness = 0);
      this.axisX &&
        0 < this.axisX.length &&
        this.axisX2 &&
        0 < this.axisX2.length &&
        (0 < this.axisX[0].gridThickness &&
        "undefined" === typeof this.axisX2[0].options.gridThickness
          ? (this.axisX2[0].gridThickness = 0)
          : 0 < this.axisX2[0].gridThickness &&
            "undefined" === typeof this.axisX[0].options.gridThickness &&
            (this.axisX[0].gridThickness = 0));
      c = !1;
      if (
        0 < this._axes.length &&
        this.options.zoomEnabled &&
        (this.zoomEnabled || this.panEnabled)
      )
        for (f = 0; f < this._axes.length; f++)
          if (
            !p(this._axes[f].viewportMinimum) ||
            !p(this._axes[f].viewportMaximum)
          ) {
            c = !0;
            break;
          }
      c
        ? (Ma(this._zoomButton, this._resetButton),
          (this._toolBar.style.border =
            this.toolbar.buttonBorderThickness +
            "px solid " +
            this.toolbar.buttonBorderColor),
          (this._zoomButton.style.borderRight =
            this.toolbar.buttonBorderThickness +
            "px solid " +
            this.toolbar.buttonBorderColor),
          (this._resetButton.style.borderRight =
            (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) +
            "px solid " +
            this.toolbar.buttonBorderColor))
        : (xa(this._zoomButton, this._resetButton),
          (this._toolBar.style.border =
            this.toolbar.buttonBorderThickness + "px solid transparent"),
          this.options.zoomEnabled &&
            ((this.zoomEnabled = !0), (this.panEnabled = !1)));
      gb(this);
      this._processData();
      this.options.title &&
        ((this.title = new Ba(this, this.options.title)),
        this.title.dockInsidePlotArea
          ? a.push(this.title)
          : this.title.setLayout());
      if (this.options.subtitles)
        for (f = 0; f < this.options.subtitles.length; f++)
          (c = new Ja(this, this.options.subtitles[f], f)),
            this.subtitles.push(c),
            c.dockInsidePlotArea ? a.push(c) : c.setLayout();
      this.legend = new T(this, this.options.legend);
      for (f = 0; f < this.data.length; f++)
        (this.data[f].showInLegend ||
          "pie" === this.data[f].type ||
          "doughnut" === this.data[f].type ||
          "funnel" === this.data[f].type ||
          "pyramid" === this.data[f].type) &&
          this.legend.dataSeries.push(this.data[f]);
      this.legend.dockInsidePlotArea
        ? a.push(this.legend)
        : this.legend.setLayout();
      for (f = 0; f < this._axes.length; f++)
        if (
          this._axes[f].scaleBreaks &&
          this._axes[f].scaleBreaks._appliedBreaks.length
        ) {
          t
            ? ((this._breaksCanvas = va(this.width, this.height, !0)),
              (this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")))
            : ((this._breaksCanvas = this.canvas),
              (this._breaksCanvasCtx = this.ctx));
          break;
        }
      this._preRenderCanvas = va(this.width, this.height);
      this._preRenderCtx = this._preRenderCanvas.getContext("2d");
      ("normal" !== this.plotInfo.axisPlacement &&
        "xySwapped" !== this.plotInfo.axisPlacement) ||
        B.setLayout(
          this.axisX,
          this.axisX2,
          this.axisY,
          this.axisY2,
          this.plotInfo.axisPlacement,
          this.layoutManager.getFreeSpace()
        );
    };
    l.prototype.renderElements = function () {
      if (this.height && this.width) {
        var a = this._plotAreaElements;
        this.title && !this.title.dockInsidePlotArea && this.title.render();
        for (var f = 0; f < this.subtitles.length; f++)
          this.subtitles[f].dockInsidePlotArea || this.subtitles[f].render();
        this.legend.dockInsidePlotArea || this.legend.render();
        if (
          "normal" === this.plotInfo.axisPlacement ||
          "xySwapped" === this.plotInfo.axisPlacement
        )
          B.render(
            this.axisX,
            this.axisX2,
            this.axisY,
            this.axisY2,
            this.plotInfo.axisPlacement
          );
        else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
        else return;
        for (f = 0; f < a.length; f++) a[f].setLayout(), a[f].render();
        var c = [];
        if (this.animatedRender) {
          var b = va(this.width, this.height);
          b.getContext("2d").drawImage(
            this.canvas,
            0,
            0,
            this.width,
            this.height
          );
        }
        jb(this);
        var a = this.ctx.miterLimit,
          g;
        this.ctx.miterLimit = 3;
        t &&
          this._breaksCanvas &&
          (this._preRenderCtx.drawImage(
            this.canvas,
            0,
            0,
            this.width,
            this.height
          ),
          this._preRenderCtx.drawImage(
            this._breaksCanvas,
            0,
            0,
            this.width,
            this.height
          ),
          (this._breaksCanvasCtx.globalCompositeOperation = "source-atop"),
          this._breaksCanvasCtx.drawImage(
            this._preRenderCanvas,
            0,
            0,
            this.width,
            this.height
          ),
          this._preRenderCtx.clearRect(0, 0, this.width, this.height));
        for (f = 0; f < this.plotInfo.plotTypes.length; f++)
          for (
            var h = this.plotInfo.plotTypes[f], r = 0;
            r < h.plotUnits.length;
            r++
          ) {
            var y = h.plotUnits[r],
              J = null;
            y.targetCanvas && za(y.targetCanvas);
            y.targetCanvas = null;
            this.animatedRender &&
              ((y.targetCanvas = va(this.width, this.height)),
              (y.targetCanvasCtx = y.targetCanvas.getContext("2d")),
              (g = y.targetCanvasCtx.miterLimit),
              (y.targetCanvasCtx.miterLimit = 3));
            "line" === y.type
              ? (J = this.renderLine(y))
              : "stepLine" === y.type
              ? (J = this.renderStepLine(y))
              : "spline" === y.type
              ? (J = this.renderSpline(y))
              : "column" === y.type
              ? (J = this.renderColumn(y))
              : "bar" === y.type
              ? (J = this.renderBar(y))
              : "area" === y.type
              ? (J = this.renderArea(y))
              : "stepArea" === y.type
              ? (J = this.renderStepArea(y))
              : "splineArea" === y.type
              ? (J = this.renderSplineArea(y))
              : "stackedColumn" === y.type
              ? (J = this.renderStackedColumn(y))
              : "stackedColumn100" === y.type
              ? (J = this.renderStackedColumn100(y))
              : "stackedBar" === y.type
              ? (J = this.renderStackedBar(y))
              : "stackedBar100" === y.type
              ? (J = this.renderStackedBar100(y))
              : "stackedArea" === y.type
              ? (J = this.renderStackedArea(y))
              : "stackedArea100" === y.type
              ? (J = this.renderStackedArea100(y))
              : "bubble" === y.type
              ? (J = J = this.renderBubble(y))
              : "scatter" === y.type
              ? (J = this.renderScatter(y))
              : "pie" === y.type
              ? this.renderPie(y)
              : "doughnut" === y.type
              ? this.renderPie(y)
              : "funnel" === y.type
              ? (J = this.renderFunnel(y))
              : "pyramid" === y.type
              ? (J = this.renderFunnel(y))
              : "candlestick" === y.type
              ? (J = this.renderCandlestick(y))
              : "ohlc" === y.type
              ? (J = this.renderCandlestick(y))
              : "rangeColumn" === y.type
              ? (J = this.renderRangeColumn(y))
              : "error" === y.type
              ? (J = this.renderError(y))
              : "rangeBar" === y.type
              ? (J = this.renderRangeBar(y))
              : "rangeArea" === y.type
              ? (J = this.renderRangeArea(y))
              : "rangeSplineArea" === y.type
              ? (J = this.renderRangeSplineArea(y))
              : "waterfall" === y.type
              ? (J = this.renderWaterfall(y))
              : "boxAndWhisker" === y.type && (J = this.renderBoxAndWhisker(y));
            for (var k = 0; k < y.dataSeriesIndexes.length; k++)
              this._dataInRenderedOrder.push(this.data[y.dataSeriesIndexes[k]]);
            this.animatedRender &&
              ((y.targetCanvasCtx.miterLimit = g), J && c.push(J));
          }
        this.ctx.miterLimit = a;
        this.animatedRender &&
          this._breaksCanvasCtx &&
          c.push({
            source: this._breaksCanvasCtx,
            dest: this.plotArea.ctx,
            animationCallback: O.fadeInAnimation,
            easingFunction: O.easing.easeInQuad,
            animationBase: 0,
            startTimePercent: 0.7,
          });
        this.animatedRender &&
          0 < this._indexLabels.length &&
          ((g = va(this.width, this.height).getContext("2d")),
          Aa(g),
          c.push(this.renderIndexLabels(g)));
        var m = this;
        if (0 < c.length)
          (m.disableToolTip = !0),
            m._animator.animate(
              200,
              m.animationDuration,
              function (a) {
                m.ctx.clearRect(0, 0, m.width, m.height);
                m.ctx.drawImage(
                  b,
                  0,
                  0,
                  Math.floor(m.width * ma),
                  Math.floor(m.height * ma),
                  0,
                  0,
                  m.width,
                  m.height
                );
                for (var g = 0; g < c.length; g++)
                  (J = c[g]),
                    1 > a && "undefined" !== typeof J.startTimePercent
                      ? a >= J.startTimePercent &&
                        J.animationCallback(
                          J.easingFunction(
                            a - J.startTimePercent,
                            0,
                            1,
                            1 - J.startTimePercent
                          ),
                          J
                        )
                      : J.animationCallback(J.easingFunction(a, 0, 1, 1), J);
                m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
              },
              function () {
                c = [];
                for (var a = 0; a < m.plotInfo.plotTypes.length; a++)
                  for (
                    var g = m.plotInfo.plotTypes[a], e = 0;
                    e < g.plotUnits.length;
                    e++
                  ) {
                    var f = g.plotUnits[e];
                    f.targetCanvas && za(f.targetCanvas);
                    f.targetCanvas = null;
                  }
                b = null;
                m.disableToolTip = !1;
                m.dispatchEvent("dataAnimationEnd", { chart: m });
              }
            );
        else {
          if (m._breaksCanvas)
            if (t)
              m.plotArea.ctx.drawImage(
                m._breaksCanvas,
                0,
                0,
                this.width,
                this.height
              );
            else for (k = 0; k < m._axes.length; k++) m._axes[k].createMask();
          0 < m._indexLabels.length && m.renderIndexLabels();
          m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
          m.dispatchEvent("dataAnimationEnd", { chart: m });
        }
        this.attachPlotAreaEventHandlers();
        this.zoomEnabled ||
          this.panEnabled ||
          !this._zoomButton ||
          "none" === this._zoomButton.style.display ||
          xa(this._zoomButton, this._resetButton);
        p(this.toolTip._xValue) ||
          p(this.toolTip._dataSeriesIndex) ||
          this.toolTip.showAtX(
            this.toolTip._xValue,
            this.toolTip._dataSeriesIndex
          );
        this.toolTip._updateToolTip();
        this.renderCount++;
        Ia &&
          ((m = this),
          setTimeout(function () {
            var a = document.getElementById("ghostCanvasCopy");
            a &&
              (Na(a, m.width, m.height),
              a.getContext("2d").drawImage(m._eventManager.ghostCanvas, 0, 0));
          }, 2e3));
        this._breaksCanvas &&
          (delete this._breaksCanvas, delete this._breaksCanvasCtx);
        for (k = 0; k < this._axes.length; k++)
          this._axes[k].maskCanvas &&
            (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx);
      }
    };
    l.prototype.render = function (a) {
      a && (this.options = a);
      this._initialize();
      this.setLayout();
      this.renderElements();
      this._preRenderCanvas && za(this._preRenderCanvas);
    };
    l.prototype.attachPlotAreaEventHandlers = function () {
      this.attachEvent({
        context: this,
        chart: this,
        mousedown: this._plotAreaMouseDown,
        mouseup: this._plotAreaMouseUp,
        mousemove: this._plotAreaMouseMove,
        cursor: this.panEnabled ? "move" : "default",
        capture: !0,
        bounds: this.plotArea,
      });
    };
    l.prototype.categoriseDataSeries = function () {
      for (var a = "", f = 0; f < this.data.length; f++)
        if (
          ((a = this.data[f]),
          a.dataPoints &&
            0 !== a.dataPoints.length &&
            a.visible &&
            0 <= l._supportedChartTypes.indexOf(a.type))
        ) {
          for (
            var c = null, b = !1, g = null, h = !1, r = 0;
            r < this.plotInfo.plotTypes.length;
            r++
          )
            if (this.plotInfo.plotTypes[r].type === a.type) {
              b = !0;
              c = this.plotInfo.plotTypes[r];
              break;
            }
          b ||
            ((c = { type: a.type, totalDataSeries: 0, plotUnits: [] }),
            this.plotInfo.plotTypes.push(c));
          for (r = 0; r < c.plotUnits.length; r++)
            if (
              c.plotUnits[r].axisYType === a.axisYType &&
              c.plotUnits[r].axisXType === a.axisXType &&
              c.plotUnits[r].axisYIndex === a.axisYIndex &&
              c.plotUnits[r].axisXIndex === a.axisXIndex
            ) {
              h = !0;
              g = c.plotUnits[r];
              break;
            }
          h ||
            ((g = {
              type: a.type,
              previousDataSeriesCount: 0,
              index: c.plotUnits.length,
              plotType: c,
              axisXType: a.axisXType,
              axisYType: a.axisYType,
              axisYIndex: a.axisYIndex,
              axisXIndex: a.axisXIndex,
              axisY:
                "primary" === a.axisYType
                  ? this.axisY[
                      0 <= a.axisYIndex && a.axisYIndex < this.axisY.length
                        ? a.axisYIndex
                        : 0
                    ]
                  : this.axisY2[
                      0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length
                        ? a.axisYIndex
                        : 0
                    ],
              axisX:
                "primary" === a.axisXType
                  ? this.axisX[
                      0 <= a.axisXIndex && a.axisXIndex < this.axisX.length
                        ? a.axisXIndex
                        : 0
                    ]
                  : this.axisX2[
                      0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length
                        ? a.axisXIndex
                        : 0
                    ],
              dataSeriesIndexes: [],
              yTotals: [],
              yAbsTotals: [],
            }),
            c.plotUnits.push(g));
          c.totalDataSeries++;
          g.dataSeriesIndexes.push(f);
          a.plotUnit = g;
        }
      for (f = 0; f < this.plotInfo.plotTypes.length; f++)
        for (
          c = this.plotInfo.plotTypes[f], r = a = 0;
          r < c.plotUnits.length;
          r++
        )
          (c.plotUnits[r].previousDataSeriesCount = a),
            (a += c.plotUnits[r].dataSeriesIndexes.length);
    };
    l.prototype.assignIdToDataPoints = function () {
      for (var a = 0; a < this.data.length; a++) {
        var f = this.data[a];
        if (f.dataPoints)
          for (var c = f.dataPoints.length, b = 0; b < c; b++)
            f.dataPointIds[b] = ++this._eventManager.lastObjectId;
      }
    };
    l.prototype._processData = function () {
      this.assignIdToDataPoints();
      this.categoriseDataSeries();
      for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
        for (
          var f = this.plotInfo.plotTypes[a], c = 0;
          c < f.plotUnits.length;
          c++
        ) {
          var b = f.plotUnits[c];
          "line" === b.type ||
          "stepLine" === b.type ||
          "spline" === b.type ||
          "column" === b.type ||
          "area" === b.type ||
          "stepArea" === b.type ||
          "splineArea" === b.type ||
          "bar" === b.type ||
          "bubble" === b.type ||
          "scatter" === b.type
            ? this._processMultiseriesPlotUnit(b)
            : "stackedColumn" === b.type ||
              "stackedBar" === b.type ||
              "stackedArea" === b.type
            ? this._processStackedPlotUnit(b)
            : "stackedColumn100" === b.type ||
              "stackedBar100" === b.type ||
              "stackedArea100" === b.type
            ? this._processStacked100PlotUnit(b)
            : "candlestick" === b.type ||
              "ohlc" === b.type ||
              "rangeColumn" === b.type ||
              "rangeBar" === b.type ||
              "rangeArea" === b.type ||
              "rangeSplineArea" === b.type ||
              "error" === b.type ||
              "boxAndWhisker" === b.type
            ? this._processMultiYPlotUnit(b)
            : "waterfall" === b.type && this._processSpecificPlotUnit(b);
        }
      this.calculateAutoBreaks();
    };
    l.prototype._processMultiseriesPlotUnit = function (a) {
      if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
        for (
          var f = a.axisY.dataInfo, c = a.axisX.dataInfo, b, g, h = !1, r = 0;
          r < a.dataSeriesIndexes.length;
          r++
        ) {
          var y = this.data[a.dataSeriesIndexes[r]],
            J = 0,
            k = !1,
            m = !1,
            n;
          if ("normal" === y.axisPlacement || "xySwapped" === y.axisPlacement)
            var q = a.axisX.sessionVariables.newViewportMinimum
                ? a.axisX.sessionVariables.newViewportMinimum
                : a.axisX.options && a.axisX.options.viewportMinimum
                ? a.axisX.options.viewportMinimum
                : a.axisX.options && a.axisX.options.minimum
                ? a.axisX.options.minimum
                : a.axisX.logarithmic
                ? 0
                : -Infinity,
              e = a.axisX.sessionVariables.newViewportMaximum
                ? a.axisX.sessionVariables.newViewportMaximum
                : a.axisX.options && a.axisX.options.viewportMaximum
                ? a.axisX.options.viewportMaximum
                : a.axisX.options && a.axisX.options.maximum
                ? a.axisX.options.maximum
                : Infinity;
          if (
            (y.dataPoints[J].x && y.dataPoints[J].x.getTime) ||
            "dateTime" === y.xValueType
          )
            h = !0;
          for (J = 0; J < y.dataPoints.length; J++) {
            "undefined" === typeof y.dataPoints[J].x &&
              (y.dataPoints[J].x = J + (a.axisX.logarithmic ? 1 : 0));
            y.dataPoints[J].x.getTime
              ? ((h = !0), (b = y.dataPoints[J].x.getTime()))
              : (b = y.dataPoints[J].x);
            g = y.dataPoints[J].y;
            b < c.min && (c.min = b);
            b > c.max && (c.max = b);
            g < f.min && "number" === typeof g && (f.min = g);
            g > f.max && "number" === typeof g && (f.max = g);
            if (0 < J) {
              if (a.axisX.logarithmic) {
                var d = b / y.dataPoints[J - 1].x;
                1 > d && (d = 1 / d);
                c.minDiff > d && 1 !== d && (c.minDiff = d);
              } else
                (d = b - y.dataPoints[J - 1].x),
                  0 > d && (d *= -1),
                  c.minDiff > d && 0 !== d && (c.minDiff = d);
              null !== g &&
                null !== y.dataPoints[J - 1].y &&
                (a.axisY.logarithmic
                  ? ((d = g / y.dataPoints[J - 1].y),
                    1 > d && (d = 1 / d),
                    f.minDiff > d && 1 !== d && (f.minDiff = d))
                  : ((d = g - y.dataPoints[J - 1].y),
                    0 > d && (d *= -1),
                    f.minDiff > d && 0 !== d && (f.minDiff = d)));
            }
            if (b < q && !k) null !== g && (n = b);
            else {
              if (!k && ((k = !0), 0 < J)) {
                J -= 2;
                continue;
              }
              if (b > e && !m) m = !0;
              else if (b > e && m) continue;
              y.dataPoints[J].label &&
                (a.axisX.labels[b] = y.dataPoints[J].label);
              b < c.viewPortMin && (c.viewPortMin = b);
              b > c.viewPortMax && (c.viewPortMax = b);
              null === g
                ? c.viewPortMin === b && n < b && (c.viewPortMin = n)
                : (g < f.viewPortMin &&
                    "number" === typeof g &&
                    (f.viewPortMin = g),
                  g > f.viewPortMax &&
                    "number" === typeof g &&
                    (f.viewPortMax = g));
            }
          }
          y.axisX.valueType = y.xValueType = h ? "dateTime" : "number";
        }
    };
    l.prototype._processStackedPlotUnit = function (a) {
      if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
        for (
          var f = a.axisY.dataInfo,
            c = a.axisX.dataInfo,
            b,
            g,
            h = !1,
            r = [],
            y = [],
            J = Infinity,
            k = -Infinity,
            m = {},
            n = 0;
          n < a.dataSeriesIndexes.length;
          n++
        ) {
          var q = this.data[a.dataSeriesIndexes[n]],
            e = 0,
            d = !1,
            w = !1,
            x;
          if ("normal" === q.axisPlacement || "xySwapped" === q.axisPlacement)
            var s = a.axisX.sessionVariables.newViewportMinimum
                ? a.axisX.sessionVariables.newViewportMinimum
                : a.axisX.options && a.axisX.options.viewportMinimum
                ? a.axisX.options.viewportMinimum
                : a.axisX.options && a.axisX.options.minimum
                ? a.axisX.options.minimum
                : -Infinity,
              t = a.axisX.sessionVariables.newViewportMaximum
                ? a.axisX.sessionVariables.newViewportMaximum
                : a.axisX.options && a.axisX.options.viewportMaximum
                ? a.axisX.options.viewportMaximum
                : a.axisX.options && a.axisX.options.maximum
                ? a.axisX.options.maximum
                : Infinity;
          if (
            (q.dataPoints[e].x && q.dataPoints[e].x.getTime) ||
            "dateTime" === q.xValueType
          )
            h = !0;
          for (e = 0; e < q.dataPoints.length; e++) {
            "undefined" === typeof q.dataPoints[e].x &&
              (q.dataPoints[e].x = e + (a.axisX.logarithmic ? 1 : 0));
            q.dataPoints[e].x.getTime
              ? ((h = !0), (b = q.dataPoints[e].x.getTime()))
              : (b = q.dataPoints[e].x);
            g = p(q.dataPoints[e].y) ? 0 : q.dataPoints[e].y;
            b < c.min && (c.min = b);
            b > c.max && (c.max = b);
            if (0 < e) {
              if (a.axisX.logarithmic) {
                var v = b / q.dataPoints[e - 1].x;
                1 > v && (v = 1 / v);
                c.minDiff > v && 1 !== v && (c.minDiff = v);
              } else
                (v = b - q.dataPoints[e - 1].x),
                  0 > v && (v *= -1),
                  c.minDiff > v && 0 !== v && (c.minDiff = v);
              null !== g &&
                null !== q.dataPoints[e - 1].y &&
                (a.axisY.logarithmic
                  ? 0 < g &&
                    ((v = g / q.dataPoints[e - 1].y),
                    1 > v && (v = 1 / v),
                    f.minDiff > v && 1 !== v && (f.minDiff = v))
                  : ((v = g - q.dataPoints[e - 1].y),
                    0 > v && (v *= -1),
                    f.minDiff > v && 0 !== v && (f.minDiff = v)));
            }
            if (b < s && !d) null !== q.dataPoints[e].y && (x = b);
            else {
              if (!d && ((d = !0), 0 < e)) {
                e -= 2;
                continue;
              }
              if (b > t && !w) w = !0;
              else if (b > t && w) continue;
              q.dataPoints[e].label &&
                (a.axisX.labels[b] = q.dataPoints[e].label);
              b < c.viewPortMin && (c.viewPortMin = b);
              b > c.viewPortMax && (c.viewPortMax = b);
              null === q.dataPoints[e].y
                ? c.viewPortMin === b && x < b && (c.viewPortMin = x)
                : ((m[b] = (m[b] || 0) + q.dataPoints[e].y),
                  (q.dataPointEOs[e].cumulativeY = m[b]),
                  (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + g),
                  (a.yAbsTotals[b] =
                    (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(g)),
                  0 <= g
                    ? r[b]
                      ? (r[b] += g)
                      : ((r[b] = g), (J = Math.min(g, J)))
                    : y[b]
                    ? (y[b] += g)
                    : ((y[b] = g), (k = Math.max(g, k))));
            }
          }
          a.axisY.scaleBreaks &&
            a.axisY.scaleBreaks.autoCalculate &&
            1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks &&
            (f.dataPointYPositiveSums
              ? (f.dataPointYPositiveSums.push.apply(
                  f.dataPointYPositiveSums,
                  r
                ),
                f.dataPointYNegativeSums.push.apply(
                  f.dataPointYPositiveSums,
                  y
                ))
              : ((f.dataPointYPositiveSums = r),
                (f.dataPointYNegativeSums = y)));
          q.axisX.valueType = q.xValueType = h ? "dateTime" : "number";
        }
        for (e in r)
          r.hasOwnProperty(e) &&
            !isNaN(e) &&
            ((a = r[e]),
            a < f.min && (f.min = Math.min(a, J)),
            a > f.max && (f.max = a),
            e < c.viewPortMin ||
              e > c.viewPortMax ||
              (a < f.viewPortMin && (f.viewPortMin = Math.min(a, J)),
              a > f.viewPortMax && (f.viewPortMax = a)));
        for (e in y)
          y.hasOwnProperty(e) &&
            !isNaN(e) &&
            ((a = y[e]),
            a < f.min && (f.min = a),
            a > f.max && (f.max = Math.max(a, k)),
            e < c.viewPortMin ||
              e > c.viewPortMax ||
              (a < f.viewPortMin && (f.viewPortMin = a),
              a > f.viewPortMax && (f.viewPortMax = Math.max(a, k))));
      }
    };
    l.prototype._processStacked100PlotUnit = function (a) {
      if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
        for (
          var f = a.axisY.dataInfo,
            c = a.axisX.dataInfo,
            b,
            g,
            h = !1,
            r = !1,
            y = !1,
            J = {},
            k = [],
            m = 0;
          m < a.dataSeriesIndexes.length;
          m++
        ) {
          var n = this.data[a.dataSeriesIndexes[m]],
            q = 0,
            e = !1,
            d = !1,
            w;
          if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement)
            var x = a.axisX.sessionVariables.newViewportMinimum
                ? a.axisX.sessionVariables.newViewportMinimum
                : a.axisX.options && a.axisX.options.viewportMinimum
                ? a.axisX.options.viewportMinimum
                : a.axisX.options && a.axisX.options.minimum
                ? a.axisX.options.minimum
                : -Infinity,
              s = a.axisX.sessionVariables.newViewportMaximum
                ? a.axisX.sessionVariables.newViewportMaximum
                : a.axisX.options && a.axisX.options.viewportMaximum
                ? a.axisX.options.viewportMaximum
                : a.axisX.options && a.axisX.options.maximum
                ? a.axisX.options.maximum
                : Infinity;
          if (
            (n.dataPoints[q].x && n.dataPoints[q].x.getTime) ||
            "dateTime" === n.xValueType
          )
            h = !0;
          for (q = 0; q < n.dataPoints.length; q++) {
            "undefined" === typeof n.dataPoints[q].x &&
              (n.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
            n.dataPoints[q].x.getTime
              ? ((h = !0), (b = n.dataPoints[q].x.getTime()))
              : (b = n.dataPoints[q].x);
            g = p(n.dataPoints[q].y) ? null : n.dataPoints[q].y;
            b < c.min && (c.min = b);
            b > c.max && (c.max = b);
            if (0 < q) {
              if (a.axisX.logarithmic) {
                var t = b / n.dataPoints[q - 1].x;
                1 > t && (t = 1 / t);
                c.minDiff > t && 1 !== t && (c.minDiff = t);
              } else
                (t = b - n.dataPoints[q - 1].x),
                  0 > t && (t *= -1),
                  c.minDiff > t && 0 !== t && (c.minDiff = t);
              p(g) ||
                null === n.dataPoints[q - 1].y ||
                (a.axisY.logarithmic
                  ? 0 < g &&
                    ((t = g / n.dataPoints[q - 1].y),
                    1 > t && (t = 1 / t),
                    f.minDiff > t && 1 !== t && (f.minDiff = t))
                  : ((t = g - n.dataPoints[q - 1].y),
                    0 > t && (t *= -1),
                    f.minDiff > t && 0 !== t && (f.minDiff = t)));
            }
            if (b < x && !e) null !== g && (w = b);
            else {
              if (!e && ((e = !0), 0 < q)) {
                q -= 2;
                continue;
              }
              if (b > s && !d) d = !0;
              else if (b > s && d) continue;
              n.dataPoints[q].label &&
                (a.axisX.labels[b] = n.dataPoints[q].label);
              b < c.viewPortMin && (c.viewPortMin = b);
              b > c.viewPortMax && (c.viewPortMax = b);
              null === g
                ? c.viewPortMin === b && w < b && (c.viewPortMin = w)
                : ((J[b] = (J[b] || 0) + n.dataPoints[q].y),
                  (n.dataPointEOs[q].cumulativeY = J[b]),
                  (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + g),
                  (a.yAbsTotals[b] =
                    (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(g)),
                  0 <= g ? (r = !0) : 0 > g && (y = !0),
                  (k[b] = k[b] ? k[b] + Math.abs(g) : Math.abs(g)));
            }
          }
          n.axisX.valueType = n.xValueType = h ? "dateTime" : "number";
        }
        a.axisY.logarithmic
          ? ((f.max = p(f.viewPortMax)
              ? 99 * Math.pow(a.axisY.logarithmBase, -0.05)
              : Math.max(
                  f.viewPortMax,
                  99 * Math.pow(a.axisY.logarithmBase, -0.05)
                )),
            (f.min = p(f.viewPortMin) ? 1 : Math.min(f.viewPortMin, 1)))
          : r && !y
          ? ((f.max = p(f.viewPortMax) ? 99 : Math.max(f.viewPortMax, 99)),
            (f.min = p(f.viewPortMin) ? 1 : Math.min(f.viewPortMin, 1)))
          : r && y
          ? ((f.max = p(f.viewPortMax) ? 99 : Math.max(f.viewPortMax, 99)),
            (f.min = p(f.viewPortMin) ? -99 : Math.min(f.viewPortMin, -99)))
          : !r &&
            y &&
            ((f.max = p(f.viewPortMax) ? -1 : Math.max(f.viewPortMax, -1)),
            (f.min = p(f.viewPortMin) ? -99 : Math.min(f.viewPortMin, -99)));
        f.viewPortMin = f.min;
        f.viewPortMax = f.max;
        a.dataPointYSums = k;
      }
    };
    l.prototype._processMultiYPlotUnit = function (a) {
      if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
        for (
          var f = a.axisY.dataInfo,
            c = a.axisX.dataInfo,
            b,
            g,
            h,
            r,
            y = !1,
            J = 0;
          J < a.dataSeriesIndexes.length;
          J++
        ) {
          var k = this.data[a.dataSeriesIndexes[J]],
            m = 0,
            n = !1,
            q = !1,
            e,
            d,
            p;
          if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement)
            var t = a.axisX.sessionVariables.newViewportMinimum
                ? a.axisX.sessionVariables.newViewportMinimum
                : a.axisX.options && a.axisX.options.viewportMinimum
                ? a.axisX.options.viewportMinimum
                : a.axisX.options && a.axisX.options.minimum
                ? a.axisX.options.minimum
                : a.axisX.logarithmic
                ? 0
                : -Infinity,
              s = a.axisX.sessionVariables.newViewportMaximum
                ? a.axisX.sessionVariables.newViewportMaximum
                : a.axisX.options && a.axisX.options.viewportMaximum
                ? a.axisX.options.viewportMaximum
                : a.axisX.options && a.axisX.options.maximum
                ? a.axisX.options.maximum
                : Infinity;
          if (
            (k.dataPoints[m].x && k.dataPoints[m].x.getTime) ||
            "dateTime" === k.xValueType
          )
            y = !0;
          for (m = 0; m < k.dataPoints.length; m++) {
            "undefined" === typeof k.dataPoints[m].x &&
              (k.dataPoints[m].x = m + (a.axisX.logarithmic ? 1 : 0));
            k.dataPoints[m].x.getTime
              ? ((y = !0), (b = k.dataPoints[m].x.getTime()))
              : (b = k.dataPoints[m].x);
            if ((g = k.dataPoints[m].y) && g.length) {
              h = Math.min.apply(null, g);
              r = Math.max.apply(null, g);
              d = !0;
              for (var z = 0; z < g.length; z++) null === g.k && (d = !1);
              d && (n || (p = e), (e = b));
            }
            b < c.min && (c.min = b);
            b > c.max && (c.max = b);
            h < f.min && (f.min = h);
            r > f.max && (f.max = r);
            0 < m &&
              (a.axisX.logarithmic
                ? ((d = b / k.dataPoints[m - 1].x),
                  1 > d && (d = 1 / d),
                  c.minDiff > d && 1 !== d && (c.minDiff = d))
                : ((d = b - k.dataPoints[m - 1].x),
                  0 > d && (d *= -1),
                  c.minDiff > d && 0 !== d && (c.minDiff = d)),
              g &&
                null !== g[0] &&
                k.dataPoints[m - 1].y &&
                null !== k.dataPoints[m - 1].y[0] &&
                (a.axisY.logarithmic
                  ? ((d = g[0] / k.dataPoints[m - 1].y[0]),
                    1 > d && (d = 1 / d),
                    f.minDiff > d && 1 !== d && (f.minDiff = d))
                  : ((d = g[0] - k.dataPoints[m - 1].y[0]),
                    0 > d && (d *= -1),
                    f.minDiff > d && 0 !== d && (f.minDiff = d))));
            if (!(b < t) || n) {
              if (!n && ((n = !0), 0 < m)) {
                m -= 2;
                e = p;
                continue;
              }
              if (b > s && !q) q = !0;
              else if (b > s && q) continue;
              k.dataPoints[m].label &&
                (a.axisX.labels[b] = k.dataPoints[m].label);
              b < c.viewPortMin && (c.viewPortMin = b);
              b > c.viewPortMax && (c.viewPortMax = b);
              if (c.viewPortMin === b && g)
                for (z = 0; z < g.length; z++)
                  if (null === g[z] && e < b) {
                    c.viewPortMin = e;
                    break;
                  }
              null === g
                ? c.viewPortMin === b && e < b && (c.viewPortMin = e)
                : (h < f.viewPortMin && (f.viewPortMin = h),
                  r > f.viewPortMax && (f.viewPortMax = r));
            }
          }
          k.axisX.valueType = k.xValueType = y ? "dateTime" : "number";
        }
    };
    l.prototype._processSpecificPlotUnit = function (a) {
      if (
        "waterfall" === a.type &&
        a.dataSeriesIndexes &&
        !(1 > a.dataSeriesIndexes.length)
      )
        for (
          var f = a.axisY.dataInfo, c = a.axisX.dataInfo, b, g, h = !1, r = 0;
          r < a.dataSeriesIndexes.length;
          r++
        ) {
          var y = this.data[a.dataSeriesIndexes[r]],
            d = 0,
            k = !1,
            m = !1,
            n = (b = 0);
          if ("normal" === y.axisPlacement || "xySwapped" === y.axisPlacement)
            var q = a.axisX.sessionVariables.newViewportMinimum
                ? a.axisX.sessionVariables.newViewportMinimum
                : a.axisX.options && a.axisX.options.viewportMinimum
                ? a.axisX.options.viewportMinimum
                : a.axisX.options && a.axisX.options.minimum
                ? a.axisX.options.minimum
                : a.axisX.logarithmic
                ? 0
                : -Infinity,
              e = a.axisX.sessionVariables.newViewportMaximum
                ? a.axisX.sessionVariables.newViewportMaximum
                : a.axisX.options && a.axisX.options.viewportMaximum
                ? a.axisX.options.viewportMaximum
                : a.axisX.options && a.axisX.options.maximum
                ? a.axisX.options.maximum
                : Infinity;
          if (
            (y.dataPoints[d].x && y.dataPoints[d].x.getTime) ||
            "dateTime" === y.xValueType
          )
            h = !0;
          for (d = 0; d < y.dataPoints.length; d++)
            "undefined" !== typeof y.dataPoints[d].isCumulativeSum &&
            !0 === y.dataPoints[d].isCumulativeSum
              ? ((y.dataPointEOs[d].cumulativeSumYStartValue = 0),
                (y.dataPointEOs[d].cumulativeSum =
                  0 === d ? 0 : y.dataPointEOs[d - 1].cumulativeSum),
                (y.dataPoints[d].y =
                  0 === d ? 0 : y.dataPointEOs[d - 1].cumulativeSum))
              : "undefined" !== typeof y.dataPoints[d].isIntermediateSum &&
                !0 === y.dataPoints[d].isIntermediateSum
              ? ((y.dataPointEOs[d].cumulativeSumYStartValue = n),
                (y.dataPointEOs[d].cumulativeSum =
                  0 === d ? 0 : y.dataPointEOs[d - 1].cumulativeSum),
                (y.dataPoints[d].y = 0 === d ? 0 : b),
                (n = 0 === d ? 0 : y.dataPointEOs[d - 1].cumulativeSum),
                (b = 0))
              : ((g =
                  "number" !== typeof y.dataPoints[d].y
                    ? 0
                    : y.dataPoints[d].y),
                (y.dataPointEOs[d].cumulativeSumYStartValue =
                  0 === d ? 0 : y.dataPointEOs[d - 1].cumulativeSum),
                (y.dataPointEOs[d].cumulativeSum =
                  0 === d ? g : y.dataPointEOs[d - 1].cumulativeSum + g),
                (b += g));
          for (d = 0; d < y.dataPoints.length; d++)
            if (
              ("undefined" === typeof y.dataPoints[d].x &&
                (y.dataPoints[d].x = d + (a.axisX.logarithmic ? 1 : 0)),
              y.dataPoints[d].x.getTime
                ? ((h = !0), (b = y.dataPoints[d].x.getTime()))
                : (b = y.dataPoints[d].x),
              (g = y.dataPoints[d].y),
              b < c.min && (c.min = b),
              b > c.max && (c.max = b),
              y.dataPointEOs[d].cumulativeSum < f.min &&
                (f.min = y.dataPointEOs[d].cumulativeSum),
              y.dataPointEOs[d].cumulativeSum > f.max &&
                (f.max = y.dataPointEOs[d].cumulativeSum),
              0 < d &&
                (a.axisX.logarithmic
                  ? ((n = b / y.dataPoints[d - 1].x),
                    1 > n && (n = 1 / n),
                    c.minDiff > n && 1 !== n && (c.minDiff = n))
                  : ((n = b - y.dataPoints[d - 1].x),
                    0 > n && (n *= -1),
                    c.minDiff > n && 0 !== n && (c.minDiff = n)),
                null !== g &&
                  null !== y.dataPoints[d - 1].y &&
                  (a.axisY.logarithmic
                    ? ((g =
                        y.dataPointEOs[d].cumulativeSum /
                        y.dataPointEOs[d - 1].cumulativeSum),
                      1 > g && (g = 1 / g),
                      f.minDiff > g && 1 !== g && (f.minDiff = g))
                    : ((g =
                        y.dataPointEOs[d].cumulativeSum -
                        y.dataPointEOs[d - 1].cumulativeSum),
                      0 > g && (g *= -1),
                      f.minDiff > g && 0 !== g && (f.minDiff = g)))),
              !(b < q) || k)
            ) {
              if (!k && ((k = !0), 0 < d)) {
                d -= 2;
                continue;
              }
              if (b > e && !m) m = !0;
              else if (b > e && m) continue;
              y.dataPoints[d].label &&
                (a.axisX.labels[b] = y.dataPoints[d].label);
              b < c.viewPortMin && (c.viewPortMin = b);
              b > c.viewPortMax && (c.viewPortMax = b);
              0 < d &&
                (y.dataPointEOs[d - 1].cumulativeSum < f.viewPortMin &&
                  (f.viewPortMin = y.dataPointEOs[d - 1].cumulativeSum),
                y.dataPointEOs[d - 1].cumulativeSum > f.viewPortMax &&
                  (f.viewPortMax = y.dataPointEOs[d - 1].cumulativeSum));
              y.dataPointEOs[d].cumulativeSum < f.viewPortMin &&
                (f.viewPortMin = y.dataPointEOs[d].cumulativeSum);
              y.dataPointEOs[d].cumulativeSum > f.viewPortMax &&
                (f.viewPortMax = y.dataPointEOs[d].cumulativeSum);
            }
          y.axisX.valueType = y.xValueType = h ? "dateTime" : "number";
        }
    };
    l.prototype.calculateAutoBreaks = function () {
      function a(a, b, c, g) {
        if (g)
          return (
            (c = Math.pow(Math.min((c * a) / b, b / a), 0.2)),
            1 >= c && (c = Math.pow(1 > a ? 1 / a : Math.min(b / a, a), 0.25)),
            { startValue: a * c, endValue: b / c }
          );
        c = 0.2 * Math.min(c - b + a, b - a);
        0 >= c && (c = 0.25 * Math.min(b - a, Math.abs(a)));
        return { startValue: a + c, endValue: b - c };
      }
      function f(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
          var b =
              a.axisX.scaleBreaks &&
              a.axisX.scaleBreaks.autoCalculate &&
              1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks,
            c =
              a.axisY.scaleBreaks &&
              a.axisY.scaleBreaks.autoCalculate &&
              1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
          if (b || c)
            for (
              var e = a.axisY.dataInfo,
                f = a.axisX.dataInfo,
                h,
                r = f.min,
                k = f.max,
                m = e.min,
                n = e.max,
                f = f._dataRanges,
                e = e._dataRanges,
                q,
                y = 0,
                d = 0;
              d < a.dataSeriesIndexes.length;
              d++
            ) {
              var J = g.data[a.dataSeriesIndexes[d]];
              if (!(4 > J.dataPoints.length))
                for (y = 0; y < J.dataPoints.length; y++)
                  if (
                    (b &&
                      ((q =
                        ((k + 1 - r) *
                          Math.max(
                            parseFloat(
                              a.axisX.scaleBreaks.collapsibleThreshold
                            ) || 10,
                            10
                          )) /
                        100),
                      (h = J.dataPoints[y].x.getTime
                        ? J.dataPoints[y].x.getTime()
                        : J.dataPoints[y].x),
                      (q = Math.floor((h - r) / q)),
                      h < f[q].min && (f[q].min = h),
                      h > f[q].max && (f[q].max = h)),
                    c)
                  ) {
                    var t =
                      ((n + 1 - m) *
                        Math.max(
                          parseFloat(
                            a.axisY.scaleBreaks.collapsibleThreshold
                          ) || 10,
                          10
                        )) /
                      100;
                    if (
                      (h =
                        "waterfall" === a.type
                          ? J.dataPointEOs[y].cumulativeSum
                          : J.dataPoints[y].y) &&
                      h.length
                    )
                      for (var l = 0; l < h.length; l++)
                        (q = Math.floor((h[l] - m) / t)),
                          h[l] < e[q].min && (e[q].min = h[l]),
                          h[l] > e[q].max && (e[q].max = h[l]);
                    else
                      p(h) ||
                        ((q = Math.floor((h - m) / t)),
                        h < e[q].min && (e[q].min = h),
                        h > e[q].max && (e[q].max = h));
                  }
            }
        }
      }
      function c(a) {
        if (
          a.dataSeriesIndexes &&
          !(1 > a.dataSeriesIndexes.length) &&
          a.axisX.scaleBreaks &&
          a.axisX.scaleBreaks.autoCalculate &&
          1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks
        )
          for (
            var b = a.axisX.dataInfo,
              c = b.min,
              e = b.max,
              f = b._dataRanges,
              h,
              r = 0,
              k = 0;
            k < a.dataSeriesIndexes.length;
            k++
          ) {
            var m = g.data[a.dataSeriesIndexes[k]];
            if (!(4 > m.dataPoints.length))
              for (r = 0; r < m.dataPoints.length; r++)
                (h =
                  ((e + 1 - c) *
                    Math.max(
                      parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) ||
                        10,
                      10
                    )) /
                  100),
                  (b = m.dataPoints[r].x.getTime
                    ? m.dataPoints[r].x.getTime()
                    : m.dataPoints[r].x),
                  (h = Math.floor((b - c) / h)),
                  b < f[h].min && (f[h].min = b),
                  b > f[h].max && (f[h].max = b);
          }
      }
      for (var b, g = this, h = !1, r = 0; r < this._axes.length; r++)
        if (
          this._axes[r].scaleBreaks &&
          this._axes[r].scaleBreaks.autoCalculate &&
          1 <= this._axes[r].scaleBreaks.maxNumberOfAutoBreaks
        ) {
          h = !0;
          this._axes[r].dataInfo._dataRanges = [];
          for (
            var y = 0;
            y <
            100 /
              Math.max(
                parseFloat(this._axes[r].scaleBreaks.collapsibleThreshold) ||
                  10,
                10
              );
            y++
          )
            this._axes[r].dataInfo._dataRanges.push({
              min: Infinity,
              max: -Infinity,
            });
        }
      if (h) {
        for (r = 0; r < this.plotInfo.plotTypes.length; r++)
          for (
            h = this.plotInfo.plotTypes[r], y = 0;
            y < h.plotUnits.length;
            y++
          )
            (b = h.plotUnits[y]),
              "line" === b.type ||
              "stepLine" === b.type ||
              "spline" === b.type ||
              "column" === b.type ||
              "area" === b.type ||
              "stepArea" === b.type ||
              "splineArea" === b.type ||
              "bar" === b.type ||
              "bubble" === b.type ||
              "scatter" === b.type ||
              "candlestick" === b.type ||
              "ohlc" === b.type ||
              "rangeColumn" === b.type ||
              "rangeBar" === b.type ||
              "rangeArea" === b.type ||
              "rangeSplineArea" === b.type ||
              "waterfall" === b.type ||
              "error" === b.type ||
              "boxAndWhisker" === b.type
                ? f(b)
                : 0 <= b.type.indexOf("stacked") && c(b);
        for (r = 0; r < this._axes.length; r++)
          if (this._axes[r].dataInfo._dataRanges) {
            var d = this._axes[r].dataInfo.min;
            b =
              ((this._axes[r].dataInfo.max + 1 - d) *
                Math.max(
                  parseFloat(this._axes[r].scaleBreaks.collapsibleThreshold) ||
                    10,
                  10
                )) /
              100;
            var k = this._axes[r].dataInfo._dataRanges,
              m,
              n,
              h = [];
            if (this._axes[r].dataInfo.dataPointYPositiveSums) {
              var q = this._axes[r].dataInfo.dataPointYPositiveSums;
              m = k;
              for (y in q)
                if (q.hasOwnProperty(y) && !isNaN(y) && ((n = q[y]), !p(n))) {
                  var e = Math.floor((n - d) / b);
                  n < m[e].min && (m[e].min = n);
                  n > m[e].max && (m[e].max = n);
                }
              delete this._axes[r].dataInfo.dataPointYPositiveSums;
            }
            if (this._axes[r].dataInfo.dataPointYNegativeSums) {
              q = this._axes[r].dataInfo.dataPointYNegativeSums;
              m = k;
              for (y in q)
                q.hasOwnProperty(y) &&
                  !isNaN(y) &&
                  ((n = -1 * q[y]),
                  p(n) ||
                    ((e = Math.floor((n - d) / b)),
                    n < m[e].min && (m[e].min = n),
                    n > m[e].max && (m[e].max = n)));
              delete this._axes[r].dataInfo.dataPointYNegativeSums;
            }
            for (y = 0; y < k.length - 1; y++)
              if (((m = k[y].max), isFinite(m)))
                for (; y < k.length - 1; )
                  if (((d = k[y + 1].min), isFinite(d))) {
                    n = d - m;
                    n > b && h.push({ diff: n, start: m, end: d });
                    break;
                  } else y++;
            if (this._axes[r].scaleBreaks.customBreaks)
              for (
                y = 0;
                y < this._axes[r].scaleBreaks.customBreaks.length;
                y++
              )
                for (b = 0; b < h.length; b++)
                  if (
                    (this._axes[r].scaleBreaks.customBreaks[y].startValue <=
                      h[b].start &&
                      h[b].start <=
                        this._axes[r].scaleBreaks.customBreaks[y].endValue) ||
                    (this._axes[r].scaleBreaks.customBreaks[y].startValue <=
                      h[b].start &&
                      h[b].start <=
                        this._axes[r].scaleBreaks.customBreaks[y].endValue) ||
                    (h[b].start <=
                      this._axes[r].scaleBreaks.customBreaks[y].startValue &&
                      this._axes[r].scaleBreaks.customBreaks[y].startValue <=
                        h[b].end) ||
                    (h[b].start <=
                      this._axes[r].scaleBreaks.customBreaks[y].endValue &&
                      this._axes[r].scaleBreaks.customBreaks[y].endValue <=
                        h[b].end)
                  )
                    h.splice(b, 1), b--;
            h.sort(function (a, b) {
              return b.diff - a.diff;
            });
            for (
              y = 0;
              y <
              Math.min(
                h.length,
                this._axes[r].scaleBreaks.maxNumberOfAutoBreaks
              );
              y++
            )
              (b = a(
                h[y].start,
                h[y].end,
                this._axes[r].logarithmic
                  ? this._axes[r].dataInfo.max / this._axes[r].dataInfo.min
                  : this._axes[r].dataInfo.max - this._axes[r].dataInfo.min,
                this._axes[r].logarithmic
              )),
                this._axes[r].scaleBreaks.autoBreaks.push(
                  new ca(
                    this,
                    "autoBreaks",
                    b,
                    y,
                    ++this._eventManager.lastObjectId,
                    this._axes[r].scaleBreaks
                  )
                ),
                this._axes[r].scaleBreaks._appliedBreaks.push(
                  this._axes[r].scaleBreaks.autoBreaks[
                    this._axes[r].scaleBreaks.autoBreaks.length - 1
                  ]
                );
            this._axes[r].scaleBreaks._appliedBreaks.sort(function (a, b) {
              return a.startValue - b.startValue;
            });
          }
      }
    };
    l.prototype.renderCrosshairs = function (a, f) {
      for (var c = 0; c < this.axisX.length; c++)
        this.axisX[c] != a &&
          this.axisX[c].crosshair &&
          this.axisX[c].crosshair.enabled &&
          !this.axisX[c].crosshair._hidden &&
          (f &&
          this.sessionVariables.mouseX > this.plotArea.x1 &&
          this.sessionVariables.mouseX < this.plotArea.x2 &&
          this.sessionVariables.mouseY > this.plotArea.y1 &&
          this.sessionVariables.mouseY < this.plotArea.y2
            ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement
              ? this.axisX[c].crosshair.render(
                  null,
                  this.sessionVariables.mouseY,
                  this.axisX[c].convertPixelToValue(
                    this.sessionVariables.mouseY
                  )
                )
              : this.axisX[c].crosshair.render(
                  this.sessionVariables.mouseX,
                  null,
                  this.axisX[c].convertPixelToValue(
                    this.sessionVariables.mouseX
                  )
                )
            : f ||
              this.axisX[c].showCrosshair(
                this.axisX[c].crosshair._updatedValue
              ));
      for (c = 0; c < this.axisX2.length; c++)
        this.axisX2[c] != a &&
          this.axisX2[c].crosshair &&
          this.axisX2[c].crosshair.enabled &&
          !this.axisX2[c].crosshair._hidden &&
          (f &&
          this.sessionVariables.mouseX > this.plotArea.x1 &&
          this.sessionVariables.mouseX < this.plotArea.x2 &&
          this.sessionVariables.mouseY > this.plotArea.y1 &&
          this.sessionVariables.mouseY < this.plotArea.y2
            ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement
              ? this.axisX2[c].crosshair.render(
                  null,
                  this.sessionVariables.mouseY,
                  this.axisX2[c].convertPixelToValue(
                    this.sessionVariables.mouseY
                  )
                )
              : this.axisX2[c].crosshair.render(
                  this.sessionVariables.mouseX,
                  null,
                  this.axisX2[c].convertPixelToValue(
                    this.sessionVariables.mouseX
                  )
                )
            : f ||
              this.axisX2[c].showCrosshair(
                this.axisX2[c].crosshair._updatedValue
              ));
      for (c = 0; c < this.axisY.length; c++)
        this.axisY[c] != a &&
          this.axisY[c].crosshair &&
          this.axisY[c].crosshair.enabled &&
          !this.axisY[c].crosshair._hidden &&
          (f &&
          this.sessionVariables.mouseX > this.plotArea.x1 &&
          this.sessionVariables.mouseX < this.plotArea.x2 &&
          this.sessionVariables.mouseY > this.plotArea.y1 &&
          this.sessionVariables.mouseY < this.plotArea.y2
            ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement
              ? this.axisY[c].crosshair.render(
                  this.sessionVariables.mouseX,
                  null,
                  this.axisY[c].convertPixelToValue(
                    this.sessionVariables.mouseX
                  )
                )
              : this.axisY[c].crosshair.render(
                  null,
                  this.sessionVariables.mouseY,
                  this.axisY[c].convertPixelToValue(
                    this.sessionVariables.mouseY
                  )
                )
            : f ||
              this.axisY[c].showCrosshair(
                this.axisY[c].crosshair._updatedValue
              ));
      for (c = 0; c < this.axisY2.length; c++)
        this.axisY2[c] != a &&
          this.axisY2[c].crosshair &&
          this.axisY2[c].crosshair.enabled &&
          !this.axisY2[c].crosshair._hidden &&
          (f &&
          this.sessionVariables.mouseX > this.plotArea.x1 &&
          this.sessionVariables.mouseX < this.plotArea.x2 &&
          this.sessionVariables.mouseY > this.plotArea.y1 &&
          this.sessionVariables.mouseY < this.plotArea.y2
            ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement
              ? this.axisY2[c].crosshair.render(
                  this.sessionVariables.mouseX,
                  null,
                  this.axisY2[c].convertPixelToValue(
                    this.sessionVariables.mouseX
                  )
                )
              : this.axisY2[c].crosshair.render(
                  null,
                  this.sessionVariables.mouseY,
                  this.axisY2[c].convertPixelToValue(
                    this.sessionVariables.mouseY
                  )
                )
            : f ||
              this.axisY2[c].showCrosshair(
                this.axisY2[c].crosshair._updatedValue
              ));
    };
    l.prototype.getDataPointAtXY = function (a, f, c) {
      c = c || !1;
      for (var b = [], g = this._dataInRenderedOrder.length - 1; 0 <= g; g--) {
        var h = null;
        (h = this._dataInRenderedOrder[g].getDataPointAtXY(a, f, c)) &&
          b.push(h);
      }
      a = null;
      f = !1;
      for (c = 0; c < b.length; c++)
        if (
          "line" === b[c].dataSeries.type ||
          "stepLine" === b[c].dataSeries.type ||
          "area" === b[c].dataSeries.type ||
          "stepArea" === b[c].dataSeries.type
        )
          if (
            ((g = na("markerSize", b[c].dataPoint, b[c].dataSeries) || 8),
            b[c].distance <= g / 2)
          ) {
            f = !0;
            break;
          }
      for (c = 0; c < b.length; c++)
        (f &&
          "line" !== b[c].dataSeries.type &&
          "stepLine" !== b[c].dataSeries.type &&
          "area" !== b[c].dataSeries.type &&
          "stepArea" !== b[c].dataSeries.type) ||
          (a ? b[c].distance <= a.distance && (a = b[c]) : (a = b[c]));
      return a;
    };
    l.prototype.getObjectAtXY = function (a, f, c) {
      var b = null;
      if ((c = this.getDataPointAtXY(a, f, c || !1)))
        b = c.dataSeries.dataPointIds[c.dataPointIndex];
      else if (t) b = bb(a, f, this._eventManager.ghostCtx);
      else
        for (c = 0; c < this.legend.items.length; c++) {
          var g = this.legend.items[c];
          a >= g.x1 && a <= g.x2 && f >= g.y1 && f <= g.y2 && (b = g.id);
        }
      return b;
    };
    l.prototype.getAutoFontSize = nb;
    l.prototype.resetOverlayedCanvas = function () {
      this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
    };
    l.prototype.clearCanvas = mb;
    l.prototype.attachEvent = function (a) {
      this._events.push(a);
    };
    l.prototype._touchEventHandler = function (a) {
      if (a.changedTouches && this.interactivityEnabled) {
        var f = [],
          c = a.changedTouches,
          b = c ? c[0] : a,
          g = null;
        switch (a.type) {
          case "touchstart":
          case "MSPointerDown":
            f = ["mousemove", "mousedown"];
            this._lastTouchData = Qa(b);
            this._lastTouchData.time = new Date();
            break;
          case "touchmove":
          case "MSPointerMove":
            f = ["mousemove"];
            break;
          case "touchend":
          case "MSPointerUp":
            var h =
                this._lastTouchData && this._lastTouchData.time
                  ? new Date() - this._lastTouchData.time
                  : 0,
              f =
                "touchstart" === this._lastTouchEventType ||
                "MSPointerDown" === this._lastTouchEventType ||
                300 > h
                  ? ["mouseup", "click"]
                  : ["mouseup"];
            break;
          default:
            return;
        }
        if (!(c && 1 < c.length)) {
          g = Qa(b);
          g.time = new Date();
          try {
            var r = g.y - this._lastTouchData.y,
              h = g.time - this._lastTouchData.time;
            if (
              (1 < Math.abs(r) && this._lastTouchData.scroll) ||
              (5 < Math.abs(r) && 250 > h)
            )
              this._lastTouchData.scroll = !0;
          } catch (y) {}
          this._lastTouchEventType = a.type;
          if (this._lastTouchData.scroll && this.zoomEnabled)
            this.isDrag && this.resetOverlayedCanvas(), (this.isDrag = !1);
          else
            for (c = 0; c < f.length; c++)
              if (
                ((g = f[c]),
                (r = document.createEvent("MouseEvent")),
                r.initMouseEvent(
                  g,
                  !0,
                  !0,
                  window,
                  1,
                  b.screenX,
                  b.screenY,
                  b.clientX,
                  b.clientY,
                  !1,
                  !1,
                  !1,
                  !1,
                  0,
                  null
                ),
                b.target.dispatchEvent(r),
                (!p(this._lastTouchData.scroll) &&
                  !this._lastTouchData.scroll) ||
                  (!this._lastTouchData.scroll && 250 < h) ||
                  "click" === g)
              )
                a.preventManipulation && a.preventManipulation(),
                  a.preventDefault && a.cancelable && a.preventDefault();
        }
      }
    };
    l.prototype._dispatchRangeEvent = function (a, f) {
      var c = { chart: this };
      c.type = a;
      c.trigger = f;
      var b = [];
      this.axisX && 0 < this.axisX.length && b.push("axisX");
      this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
      this.axisY && 0 < this.axisY.length && b.push("axisY");
      this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
      for (var g = 0; g < b.length; g++)
        if ((p(c[b[g]]) && (c[b[g]] = []), "axisY" === b[g]))
          for (var h = 0; h < this.axisY.length; h++)
            c[b[g]].push({
              viewportMinimum:
                this[b[g]][h].sessionVariables.newViewportMinimum,
              viewportMaximum:
                this[b[g]][h].sessionVariables.newViewportMaximum,
            });
        else if ("axisY2" === b[g])
          for (h = 0; h < this.axisY2.length; h++)
            c[b[g]].push({
              viewportMinimum:
                this[b[g]][h].sessionVariables.newViewportMinimum,
              viewportMaximum:
                this[b[g]][h].sessionVariables.newViewportMaximum,
            });
        else if ("axisX" === b[g])
          for (h = 0; h < this.axisX.length; h++)
            c[b[g]].push({
              viewportMinimum:
                this[b[g]][h].sessionVariables.newViewportMinimum,
              viewportMaximum:
                this[b[g]][h].sessionVariables.newViewportMaximum,
            });
        else if ("axisX2" === b[g])
          for (h = 0; h < this.axisX2.length; h++)
            c[b[g]].push({
              viewportMinimum:
                this[b[g]][h].sessionVariables.newViewportMinimum,
              viewportMaximum:
                this[b[g]][h].sessionVariables.newViewportMaximum,
            });
      this.dispatchEvent(a, c, this);
    };
    l.prototype._mouseEventHandler = function (a) {
      function f() {
        l.capturedEventParam &&
          ((g = l.capturedEventParam),
          (r = g.bounds),
          "mouseup" === b &&
            ((l.capturedEventParam = null),
            g.chart.overlaidCanvas.releaseCapture
              ? g.chart.overlaidCanvas.releaseCapture()
              : document.documentElement.removeEventListener(
                  "mouseup",
                  g.chart._mouseEventHandler,
                  !1
                )),
          g.hasOwnProperty(b) &&
            ("mouseup" !== b || g.chart.overlaidCanvas.releaseCapture
              ? (a.target !== g.chart.overlaidCanvas && t) ||
                g[b].call(g.context, c.x, c.y)
              : a.target !== g.chart.overlaidCanvas && (g.chart.isDrag = !1)));
      }
      "undefined" === typeof a.target &&
        a.srcElement &&
        (a.target = a.srcElement);
      var c = Qa(a),
        b = a.type,
        g,
        h;
      a.which ? (h = 3 == a.which) : a.button && (h = 2 == a.button);
      if (this._ignoreNextEvent) f(), (this._ignoreNextEvent = !1);
      else if ((f(), this.interactivityEnabled)) {
        a.preventManipulation && a.preventManipulation();
        a.preventDefault && a.preventDefault();
        var r;
        Ia &&
          window.console &&
          (window.console.log(b + " --\x3e x: " + c.x + "; y:" + c.y),
          h && window.console.log(a.which),
          "mouseup" === b && window.console.log("mouseup"));
        if (!h) {
          if (!l.capturedEventParam && this._events) {
            for (h = 0; h < this._events.length; h++)
              if (this._events[h].hasOwnProperty(b))
                if (
                  ((g = this._events[h]),
                  (r = g.bounds),
                  c.x >= r.x1 && c.x <= r.x2 && c.y >= r.y1 && c.y <= r.y2)
                ) {
                  g[b].call(g.context, c.x, c.y);
                  "mousedown" === b && !0 === g.capture
                    ? ((l.capturedEventParam = g),
                      this.overlaidCanvas.setCapture
                        ? this.overlaidCanvas.setCapture()
                        : document.documentElement.addEventListener(
                            "mouseup",
                            this._mouseEventHandler,
                            !1
                          ))
                    : "mouseup" === b &&
                      (g.chart.overlaidCanvas.releaseCapture
                        ? g.chart.overlaidCanvas.releaseCapture()
                        : document.documentElement.removeEventListener(
                            "mouseup",
                            this._mouseEventHandler,
                            !1
                          ));
                  break;
                } else g = null;
            a.target.style.cursor =
              g && g.cursor ? g.cursor : this._defaultCursor;
          }
          h = this.plotArea;
          if (c.x < h.x1 || c.x > h.x2 || c.y < h.y1 || c.y > h.y2) {
            this.toolTip && this.toolTip.enabled
              ? (this.toolTip.hide(),
                this.toolTip.dispatchEvent(
                  "hidden",
                  { chart: this, toolTip: this.toolTip },
                  this.toolTip
                ))
              : this.resetOverlayedCanvas();
            for (h = 0; h < this.axisX.length; h++)
              this.axisX[h].crosshair &&
                this.axisX[h].crosshair.enabled &&
                (this.axisX[h].crosshair.hide(),
                this.axisX[h].crosshair.dispatchEvent(
                  "hidden",
                  { chart: this, axis: this.axisX[h].options },
                  this.axisX[h].crosshair
                ));
            for (h = 0; h < this.axisX2.length; h++)
              this.axisX2[h].crosshair &&
                this.axisX2[h].crosshair.enabled &&
                (this.axisX2[h].crosshair.hide(),
                this.axisX2[h].crosshair.dispatchEvent(
                  "hidden",
                  { chart: this, axis: this.axisX2[h].options },
                  this.axisX2[h].crosshair
                ));
            for (h = 0; h < this.axisY.length; h++)
              this.axisY[h].crosshair &&
                this.axisY[h].crosshair.enabled &&
                (this.axisY[h].crosshair.hide(),
                this.axisY[h].crosshair.dispatchEvent(
                  "hidden",
                  { chart: this, axis: this.axisY[h].options },
                  this.axisY[h].crosshair
                ));
            for (h = 0; h < this.axisY2.length; h++)
              this.axisY2[h].crosshair &&
                this.axisY2[h].crosshair.enabled &&
                (this.axisY2[h].crosshair.hide(),
                this.axisY2[h].crosshair.dispatchEvent(
                  "hidden",
                  { chart: this, axis: this.axisY2[h].options },
                  this.axisY2[h].crosshair
                ));
          }
          this.sessionVariables.mouseX = c.x;
          this.sessionVariables.mouseY = c.y;
          (this.isDrag && this.zoomEnabled) ||
            !this._eventManager ||
            this._eventManager.mouseEventHandler(a);
        }
      }
    };
    l.prototype._plotAreaMouseDown = function (a, f) {
      this.isDrag = !0;
      this.dragStartPoint = { x: a, y: f };
    };
    l.prototype._plotAreaMouseUp = function (a, f) {
      if (
        ("normal" === this.plotInfo.axisPlacement ||
          "xySwapped" === this.plotInfo.axisPlacement) &&
        this.isDrag
      ) {
        var c = f - this.dragStartPoint.y,
          b = a - this.dragStartPoint.x,
          g = 0 <= this.zoomType.indexOf("x"),
          h = 0 <= this.zoomType.indexOf("y"),
          r = !1;
        this.resetOverlayedCanvas();
        if ("xySwapped" === this.plotInfo.axisPlacement)
          var y = h,
            h = g,
            g = y;
        if (this.panEnabled || this.zoomEnabled) {
          if (this.panEnabled)
            for (g = h = 0; g < this._axes.length; g++)
              (c = this._axes[g]),
                c.logarithmic
                  ? c.viewportMinimum < c.minimum
                    ? ((h = c.minimum / c.viewportMinimum),
                      (c.sessionVariables.newViewportMinimum =
                        c.viewportMinimum * h),
                      (c.sessionVariables.newViewportMaximum =
                        c.viewportMaximum * h),
                      (r = !0))
                    : c.viewportMaximum > c.maximum &&
                      ((h = c.viewportMaximum / c.maximum),
                      (c.sessionVariables.newViewportMinimum =
                        c.viewportMinimum / h),
                      (c.sessionVariables.newViewportMaximum =
                        c.viewportMaximum / h),
                      (r = !0))
                  : c.viewportMinimum < c.minimum
                  ? ((h = c.minimum - c.viewportMinimum),
                    (c.sessionVariables.newViewportMinimum =
                      c.viewportMinimum + h),
                    (c.sessionVariables.newViewportMaximum =
                      c.viewportMaximum + h),
                    (r = !0))
                  : c.viewportMaximum > c.maximum &&
                    ((h = c.viewportMaximum - c.maximum),
                    (c.sessionVariables.newViewportMinimum =
                      c.viewportMinimum - h),
                    (c.sessionVariables.newViewportMaximum =
                      c.viewportMaximum - h),
                    (r = !0));
          else if (
            (!g || 2 < Math.abs(b)) &&
            (!h || 2 < Math.abs(c)) &&
            this.zoomEnabled
          ) {
            if (!this.dragStartPoint) return;
            c = g ? this.dragStartPoint.x : this.plotArea.x1;
            b = h ? this.dragStartPoint.y : this.plotArea.y1;
            g = g ? a : this.plotArea.x2;
            h = h ? f : this.plotArea.y2;
            2 < Math.abs(c - g) &&
              2 < Math.abs(b - h) &&
              this._zoomPanToSelectedRegion(c, b, g, h) &&
              (r = !0);
          }
          r &&
            ((this._ignoreNextEvent = !0),
            this._dispatchRangeEvent("rangeChanging", "zoom"),
            this.stockChart &&
              (this.stockChart._rangeEventParameter ||
                (this.stockChart._rangeEventParameter = {
                  stockChart: this.stockChart,
                  source: "chart",
                  index: this.stockChart.charts.indexOf(this),
                  minimum: this.stockChart.sessionVariables._axisXMin,
                  maximum: this.stockChart.sessionVariables._axisXMax,
                }),
              (this.stockChart._rangeEventParameter.type = "rangeChanging"),
              this.stockChart.dispatchEvent(
                "rangeChanging",
                this.stockChart._rangeEventParameter,
                this.stockChart
              )),
            this.render(),
            this._dispatchRangeEvent("rangeChanged", "zoom"),
            this.stockChart &&
              ((this.stockChart.rangeUpdatedBy = "chart"),
              (this.stockChart._rangeEventParameter.type = "rangeChanged"),
              this.stockChart.dispatchEvent(
                "rangeChanged",
                this.stockChart._rangeEventParameter,
                this.stockChart
              )),
            r &&
              this.zoomEnabled &&
              "none" === this._zoomButton.style.display &&
              (Ma(this._zoomButton, this._resetButton),
              ua(this, this._zoomButton, "pan"),
              ua(this, this._resetButton, "reset")));
        }
      }
      this.isDrag = !1;
      if ("none" !== this.plotInfo.axisPlacement) {
        this.resetOverlayedCanvas();
        if (this.axisX && 0 < this.axisX.length)
          for (r = 0; r < this.axisX.length; r++)
            this.axisX[r].crosshair &&
              this.axisX[r].crosshair.enabled &&
              this.axisX[r].renderCrosshair(a, f);
        if (this.axisX2 && 0 < this.axisX2.length)
          for (r = 0; r < this.axisX2.length; r++)
            this.axisX2[r].crosshair &&
              this.axisX2[r].crosshair.enabled &&
              this.axisX2[r].renderCrosshair(a, f);
        if (this.axisY && 0 < this.axisY.length)
          for (r = 0; r < this.axisY.length; r++)
            this.axisY[r].crosshair &&
              this.axisY[r].crosshair.enabled &&
              this.axisY[r].renderCrosshair(a, f);
        if (this.axisY2 && 0 < this.axisY2.length)
          for (r = 0; r < this.axisY2.length; r++)
            this.axisY2[r].crosshair &&
              this.axisY2[r].crosshair.enabled &&
              this.axisY2[r].renderCrosshair(a, f);
        if (this.axisX && 0 < this.axisX.length)
          for (r = 0; r < this.axisX.length; r++)
            this.axisX[r].crosshair &&
              this.axisX[r].crosshair.enabled &&
              this.axisX[r].crosshair.renderLabel();
        if (this.axisX2 && 0 < this.axisX2.length)
          for (r = 0; r < this.axisX2.length; r++)
            this.axisX2[r].crosshair &&
              this.axisX2[r].crosshair.enabled &&
              this.axisX2[r].crosshair.renderLabel();
        if (this.axisY && 0 < this.axisY.length)
          for (r = 0; r < this.axisY.length; r++)
            this.axisY[r].crosshair &&
              this.axisY[r].crosshair.enabled &&
              this.axisY[r].crosshair.renderLabel();
        if (this.axisY2 && 0 < this.axisY2.length)
          for (r = 0; r < this.axisY2.length; r++)
            this.axisY2[r].crosshair &&
              this.axisY2[r].crosshair.enabled &&
              this.axisY2[r].crosshair.renderLabel();
      }
    };
    l.prototype._plotAreaMouseMove = function (a, f) {
      if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
        var c = 0,
          b = 0,
          g = (c = null),
          g = 0 <= this.zoomType.indexOf("x"),
          h = 0 <= this.zoomType.indexOf("y"),
          r = this;
        "xySwapped" === this.plotInfo.axisPlacement &&
          ((c = h), (h = g), (g = c));
        c = this.dragStartPoint.x - a;
        b = this.dragStartPoint.y - f;
        if (
          2 < Math.abs(c) &&
          8 > Math.abs(c) &&
          (this.panEnabled || this.zoomEnabled)
        ) {
          this.toolTip.hide();
          this.toolTip &&
            this.toolTip.enabled &&
            this.toolTip.dispatchEvent(
              "hidden",
              { chart: this, toolTip: this.toolTip },
              this.toolTip
            );
          for (var y = 0; y < this.axisX.length; y++)
            this.axisX[y].crosshair &&
              this.axisX[y].crosshair.enabled &&
              (this.axisX[y].crosshair.hide(),
              this.axisX[y].crosshair.dispatchEvent(
                "hidden",
                { chart: this, axis: this.axisX[y].options },
                this.axisX[y].crosshair
              ));
          for (y = 0; y < this.axisX2.length; y++)
            this.axisX2[y].crosshair &&
              this.axisX2[y].crosshair.enabled &&
              (this.axisX2[y].crosshair.hide(),
              this.axisX2[y].crosshair.dispatchEvent(
                "hidden",
                { chart: this, axis: this.axisX2[y].options },
                this.axisX2[y].crosshair
              ));
          for (y = 0; y < this.axisY.length; y++)
            this.axisY[y].crosshair &&
              this.axisY[y].crosshair.enabled &&
              (this.axisY[y].crosshair.hide(),
              this.axisY[y].crosshair.dispatchEvent(
                "hidden",
                { chart: this, axis: this.axisY[y].options },
                this.axisY[y].crosshair
              ));
          for (y = 0; y < this.axisY2.length; y++)
            this.axisY2[y].crosshair &&
              this.axisY2[y].crosshair.enabled &&
              (this.axisY2[y].crosshair.hide(),
              this.axisY2[y].crosshair.dispatchEvent(
                "hidden",
                { chart: this, axis: this.axisY2[y].options },
                this.axisY2[y].crosshair
              ));
        } else
          this.panEnabled ||
            this.zoomEnabled ||
            this.toolTip.mouseMoveHandler(a, f);
        if (
          (!g || 2 < Math.abs(c) || !h || 2 < Math.abs(b)) &&
          (this.panEnabled || this.zoomEnabled)
        )
          if (this.panEnabled)
            (g = {
              x1: g ? this.plotArea.x1 + c : this.plotArea.x1,
              y1: h ? this.plotArea.y1 + b : this.plotArea.y1,
              x2: g ? this.plotArea.x2 + c : this.plotArea.x2,
              y2: h ? this.plotArea.y2 + b : this.plotArea.y2,
            }),
              clearTimeout(r._panTimerId),
              (r._panTimerId = setTimeout(
                (function (b, c, g, e) {
                  return function () {
                    r._zoomPanToSelectedRegion(b, c, g, e, !0) &&
                      (r._dispatchRangeEvent("rangeChanging", "pan"),
                      r.stockChart &&
                        ((r.stockChart._rangeEventParameter.type =
                          "rangeChanging"),
                        r.stockChart.dispatchEvent(
                          "rangeChanging",
                          r.stockChart._rangeEventParameter,
                          r.stockChart
                        )),
                      r.render(),
                      r._dispatchRangeEvent("rangeChanged", "pan"),
                      r.stockChart &&
                        ((r.stockChart._rangeEventParameter.type =
                          "rangeChanged"),
                        r.stockChart.dispatchEvent(
                          "rangeChanged",
                          r.stockChart._rangeEventParameter,
                          r.stockChart
                        )),
                      (r.dragStartPoint.x = a),
                      (r.dragStartPoint.y = f));
                  };
                })(g.x1, g.y1, g.x2, g.y2),
                0
              ));
          else if (this.zoomEnabled) {
            this.resetOverlayedCanvas();
            c = this.overlaidCanvasCtx.globalAlpha;
            this.overlaidCanvasCtx.fillStyle = "#A89896";
            var b = g ? this.dragStartPoint.x : this.plotArea.x1,
              y = h ? this.dragStartPoint.y : this.plotArea.y1,
              d = g
                ? a - this.dragStartPoint.x
                : this.plotArea.x2 - this.plotArea.x1,
              k = h
                ? f - this.dragStartPoint.y
                : this.plotArea.y2 - this.plotArea.y1;
            this.validateRegion(
              b,
              y,
              g ? a : this.plotArea.x2 - this.plotArea.x1,
              h ? f : this.plotArea.y2 - this.plotArea.y1,
              "xy" !== this.zoomType
            ).isValid &&
              (this.resetOverlayedCanvas(),
              (this.overlaidCanvasCtx.fillStyle = "#99B2B5"));
            this.overlaidCanvasCtx.globalAlpha = 0.7;
            this.overlaidCanvasCtx.fillRect(b, y, d, k);
            this.overlaidCanvasCtx.globalAlpha = c;
          }
      } else if (
        (this.toolTip.mouseMoveHandler(a, f),
        "none" !== this.plotInfo.axisPlacement)
      ) {
        this.sessionVariables.crosshairShownByPixel = !0;
        if (this.axisX && 0 < this.axisX.length)
          for (g = 0; g < this.axisX.length; g++)
            this.axisX[g].crosshair &&
              this.axisX[g].crosshair.enabled &&
              this.axisX[g].renderCrosshair(a, f);
        if (this.axisX2 && 0 < this.axisX2.length)
          for (g = 0; g < this.axisX2.length; g++)
            this.axisX2[g].crosshair &&
              this.axisX2[g].crosshair.enabled &&
              this.axisX2[g].renderCrosshair(a, f);
        if (this.axisY && 0 < this.axisY.length)
          for (g = 0; g < this.axisY.length; g++)
            this.axisY[g].crosshair &&
              this.axisY[g].crosshair.enabled &&
              this.axisY[g].renderCrosshair(a, f);
        if (this.axisY2 && 0 < this.axisY2.length)
          for (g = 0; g < this.axisY2.length; g++)
            this.axisY2[g].crosshair &&
              this.axisY2[g].crosshair.enabled &&
              this.axisY2[g].renderCrosshair(a, f);
        if (this.axisX && 0 < this.axisX.length)
          for (g = 0; g < this.axisX.length; g++)
            this.axisX[g].crosshair &&
              this.axisX[g].crosshair.enabled &&
              this.axisX[g].crosshair.renderLabel();
        if (this.axisX2 && 0 < this.axisX2.length)
          for (g = 0; g < this.axisX2.length; g++)
            this.axisX2[g].crosshair &&
              this.axisX2[g].crosshair.enabled &&
              this.axisX2[g].crosshair.renderLabel();
        if (this.axisY && 0 < this.axisY.length)
          for (g = 0; g < this.axisY.length; g++)
            this.axisY[g].crosshair &&
              this.axisY[g].crosshair.enabled &&
              this.axisY[g].crosshair.renderLabel();
        if (this.axisY2 && 0 < this.axisY2.length)
          for (g = 0; g < this.axisY2.length; g++)
            this.axisY2[g].crosshair &&
              this.axisY2[g].crosshair.enabled &&
              this.axisY2[g].crosshair.renderLabel();
      }
    };
    l.prototype._zoomPanToSelectedRegion = function (a, f, c, b, g) {
      a = this.validateRegion(a, f, c, b, g);
      f = a.axesWithValidRange;
      c = a.axesRanges;
      if (a.isValid)
        for (b = 0; b < f.length; b++)
          (g = c[b]),
            f[b].setViewPortRange(g.val1, g.val2),
            this.syncCharts &&
              "y" != this.zoomType &&
              this.syncCharts(g.val1, g.val2),
            this.stockChart &&
              (this.stockChart._rangeEventParameter = {
                stockChart: this.stockChart,
                source: "chart",
                index: this.stockChart.charts.indexOf(this),
                minimum: g.val1,
                maximum: g.val2,
              });
      return a.isValid;
    };
    l.prototype.validateRegion = function (a, f, c, b, g) {
      g = g || !1;
      for (
        var h = 0 <= this.zoomType.indexOf("x"),
          r = 0 <= this.zoomType.indexOf("y"),
          y = !1,
          d = [],
          k = [],
          m = [],
          n = 0;
        n < this._axes.length;
        n++
      )
        (("axisX" === this._axes[n].type && h) ||
          ("axisY" === this._axes[n].type && r)) &&
          k.push(this._axes[n]);
      for (r = 0; r < k.length; r++) {
        var n = k[r],
          h = !1,
          q = n.convertPixelToValue({ x: a, y: f }),
          e = n.convertPixelToValue({ x: c, y: b });
        if (q > e)
          var p = e,
            e = q,
            q = p;
        if (n.scaleBreaks)
          for (p = 0; !h && p < n.scaleBreaks._appliedBreaks.length; p++)
            h =
              n.scaleBreaks._appliedBreaks[p].startValue <= q &&
              n.scaleBreaks._appliedBreaks[p].endValue >= e;
        if (isFinite(n.dataInfo.minDiff))
          if (
            ((p = n.getApparentDifference(q, e, null, !0)),
            !(
              h ||
              (!(
                this.panEnabled &&
                n.scaleBreaks &&
                n.scaleBreaks._appliedBreaks.length
              ) &&
                ((n.logarithmic && p < Math.pow(n.dataInfo.minDiff, 3)) ||
                  (!n.logarithmic && p < 3 * Math.abs(n.dataInfo.minDiff)))) ||
              q < n.minimum ||
              e > n.maximum
            ))
          )
            d.push(n), m.push({ val1: q, val2: e }), (y = !0);
          else if (!g) {
            y = !1;
            break;
          }
      }
      return { isValid: y, axesWithValidRange: d, axesRanges: m };
    };
    l.prototype.preparePlotArea = function () {
      var a = this.plotArea;
      !t && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
      if (
        (this.axisX[0] || this.axisX2[0]) &&
        (this.axisY[0] || this.axisY2[0])
      ) {
        var f = this.axisX[0]
          ? this.axisX[0].lineCoordinates
          : this.axisX2[0].lineCoordinates;
        if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
          var c = this.axisY[0];
          a.x1 = f.x1 < f.x2 ? f.x1 : c.lineCoordinates.x1;
          a.y1 = f.y1 < c.lineCoordinates.y1 ? f.y1 : c.lineCoordinates.y1;
          a.x2 = f.x2 > c.lineCoordinates.x2 ? f.x2 : c.lineCoordinates.x2;
          a.y2 = f.y1 > c.lineCoordinates.y2 ? f.y1 : c.lineCoordinates.y2;
          a.width = a.x2 - a.x1;
          a.height = a.y2 - a.y1;
        }
        this.axisY2 &&
          0 < this.axisY2.length &&
          this.axisY2[0] &&
          ((c = this.axisY2[0]),
          (a.x1 = f.x1 < f.x2 ? f.x1 : c.lineCoordinates.x1),
          (a.y1 = f.y1 < c.lineCoordinates.y1 ? f.y1 : c.lineCoordinates.y1),
          (a.x2 = f.x2 > c.lineCoordinates.x2 ? f.x2 : c.lineCoordinates.x2),
          (a.y2 = f.y2 > c.lineCoordinates.y2 ? f.y2 : c.lineCoordinates.y2),
          (a.width = a.x2 - a.x1),
          (a.height = a.y2 - a.y1));
      } else
        (f = this.layoutManager.getFreeSpace()),
          (a.x1 = f.x1),
          (a.x2 = f.x2),
          (a.y1 = f.y1),
          (a.y2 = f.y2),
          (a.width = f.width),
          (a.height = f.height);
      t ||
        ((a.canvas.width = a.width),
        (a.canvas.height = a.height),
        (a.canvas.style.left = a.x1 + "px"),
        (a.canvas.style.top = a.y1 + "px"),
        (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
      a.layoutManager = new Fa(a.x1, a.y1, a.x2, a.y2, 2);
    };
    l.prototype.renderIndexLabels = function (a) {
      var f = a || this.plotArea.ctx,
        c = this.plotArea,
        b = 0,
        g = 0,
        h = 0,
        r = (g = h = 0),
        y = 0,
        d = (b = 0),
        k = 0;
      for (a = 0; a < this._indexLabels.length; a++) {
        var m = this._indexLabels[a],
          n = m.chartType.toLowerCase(),
          q,
          e,
          y = na("indexLabelFontColor", m.dataPoint, m.dataSeries),
          Sa = na("indexLabelFontSize", m.dataPoint, m.dataSeries),
          d = na("indexLabelFontFamily", m.dataPoint, m.dataSeries),
          k = na("indexLabelFontStyle", m.dataPoint, m.dataSeries);
        q = na("indexLabelFontWeight", m.dataPoint, m.dataSeries);
        var w = na("indexLabelBackgroundColor", m.dataPoint, m.dataSeries);
        e = na("indexLabelBorderColor", m.dataPoint, m.dataSeries);
        var h = na("indexLabelBorderThickness", m.dataPoint, m.dataSeries),
          g = na("indexLabelMaxWidth", m.dataPoint, m.dataSeries),
          r = na("indexLabelWrap", m.dataPoint, m.dataSeries),
          x = na("indexLabelLineDashType", m.dataPoint, m.dataSeries),
          s = na("indexLabelLineColor", m.dataPoint, m.dataSeries),
          z = p(m.dataPoint.indexLabelLineThickness)
            ? p(m.dataSeries.options.indexLabelLineThickness)
              ? 0
              : m.dataSeries.options.indexLabelLineThickness
            : m.dataPoint.indexLabelLineThickness,
          b =
            0 < z
              ? Math.min(
                  10,
                  ("normal" === this.plotInfo.axisPlacement
                    ? this.plotArea.height
                    : this.plotArea.width) << 0
                )
              : 0,
          v = { percent: null, total: null },
          l = null;
        if (
          0 <= m.dataSeries.type.indexOf("stacked") ||
          "pie" === m.dataSeries.type ||
          "doughnut" === m.dataSeries.type
        )
          v = this.getPercentAndTotal(m.dataSeries, m.dataPoint);
        if (m.dataSeries.indexLabelFormatter || m.dataPoint.indexLabelFormatter)
          l = {
            chart: this,
            dataSeries: m.dataSeries,
            dataPoint: m.dataPoint,
            index: m.indexKeyword,
            total: v.total,
            percent: v.percent,
          };
        var C = m.dataPoint.indexLabelFormatter
          ? m.dataPoint.indexLabelFormatter(l)
          : m.dataPoint.indexLabel
          ? this.replaceKeywordsWithValue(
              m.dataPoint.indexLabel,
              m.dataPoint,
              m.dataSeries,
              null,
              m.indexKeyword
            )
          : m.dataSeries.indexLabelFormatter
          ? m.dataSeries.indexLabelFormatter(l)
          : m.dataSeries.indexLabel
          ? this.replaceKeywordsWithValue(
              m.dataSeries.indexLabel,
              m.dataPoint,
              m.dataSeries,
              null,
              m.indexKeyword
            )
          : null;
        if (null !== C && "" !== C) {
          var v = na("indexLabelPlacement", m.dataPoint, m.dataSeries),
            l = na("indexLabelOrientation", m.dataPoint, m.dataSeries),
            D = na("indexLabelTextAlign", m.dataPoint, m.dataSeries),
            u = m.direction,
            A = m.dataSeries.axisX,
            K = m.dataSeries.axisY,
            L = !1,
            w = new ka(f, {
              x: 0,
              y: 0,
              maxWidth: g ? g : 0.5 * this.width,
              maxHeight: r ? 5 * Sa : 1.5 * Sa,
              angle: "horizontal" === l ? 0 : -90,
              text: C,
              padding: 0,
              backgroundColor: w,
              borderColor: e,
              borderThickness: h,
              textAlign: D,
              fontSize: Sa,
              fontFamily: d,
              fontWeight: q,
              fontColor: y,
              fontStyle: k,
              textBaseline: "middle",
            });
          w.measureText();
          m.dataSeries.indexLabelMaxWidth = w.maxWidth;
          if ("stackedarea100" === n) {
            if (
              m.point.x < c.x1 ||
              m.point.x > c.x2 ||
              m.point.y < c.y1 - 1 ||
              m.point.y > c.y2 + 1
            )
              continue;
          } else if ("rangearea" === n || "rangesplinearea" === n) {
            if (
              m.dataPoint.x < A.viewportMinimum ||
              m.dataPoint.x > A.viewportMaximum ||
              Math.max.apply(null, m.dataPoint.y) < K.viewportMinimum ||
              Math.min.apply(null, m.dataPoint.y) > K.viewportMaximum
            )
              continue;
          } else if (
            0 <= n.indexOf("line") ||
            0 <= n.indexOf("area") ||
            0 <= n.indexOf("bubble") ||
            0 <= n.indexOf("scatter")
          ) {
            if (
              m.dataPoint.x < A.viewportMinimum ||
              m.dataPoint.x > A.viewportMaximum ||
              m.dataPoint.y < K.viewportMinimum ||
              m.dataPoint.y > K.viewportMaximum
            )
              continue;
          } else if (0 <= n.indexOf("column")) {
            if (
              m.dataPoint.x < A.viewportMinimum ||
              m.dataPoint.x > A.viewportMaximum ||
              (0 < m.dataPoint.y.length
                ? Math.max.apply(null, m.dataPoint.y)
                : m.dataPoint.y) < K.viewportMinimum ||
              (0 < m.dataPoint.y.length
                ? Math.max.apply(null, m.dataPoint.y)
                : m.dataPoint.y) > K.viewportMaximum
            )
              continue;
          } else if ("waterfall" === n || ("error" === n && !m.axisSwapped)) {
            if (
              m.dataPoint.x < A.viewportMinimum ||
              m.dataPoint.x > A.viewportMaximum ||
              m.bounds.y1 > c.y2 ||
              m.bounds.y2 < c.y1
            )
              continue;
          } else if (0 <= n.indexOf("bar") || "error" === n) {
            if (
              m.dataPoint.x < A.viewportMinimum ||
              m.dataPoint.x > A.viewportMaximum ||
              m.bounds.x1 > c.x2 ||
              m.bounds.x2 < c.x1
            )
              continue;
          } else if ("candlestick" === n || "ohlc" === n) {
            if (
              m.dataPoint.x < A.viewportMinimum ||
              m.dataPoint.x > A.viewportMaximum ||
              Math.max.apply(null, m.dataPoint.y) < K.viewportMinimum ||
              Math.min.apply(null, m.dataPoint.y) > K.viewportMaximum
            )
              continue;
          } else if (
            m.dataPoint.x < A.viewportMinimum ||
            m.dataPoint.x > A.viewportMaximum
          )
            continue;
          r = y = 2;
          "horizontal" === l
            ? ((d = w.width), (k = w.height))
            : ((k = w.width), (d = w.height));
          if ("normal" === this.plotInfo.axisPlacement) {
            if (0 <= n.indexOf("line") || 0 <= n.indexOf("area"))
              (v = "auto"), (y = 4);
            else if (0 <= n.indexOf("stacked")) "auto" === v && (v = "inside");
            else if ("bubble" === n || "scatter" === n) v = "inside";
            q =
              m.point.x - d / 2 + ("horizontal" === l ? 0 : w._lineHeight / 2);
            if ("inside" !== v)
              (g = c.y1),
                (h = c.y2),
                0 < u
                  ? ((e = m.point.y + w._lineHeight / 2 - k - y - b),
                    e < g &&
                      ((e =
                        "auto" === v
                          ? Math.max(m.point.y, g) + w._lineHeight / 2 + y + b
                          : g + w._lineHeight / 2 + y + b),
                      (L =
                        e + ("horizontal" === l ? k - w._lineHeight / 2 : 0) >
                        m.point.y),
                      !L ||
                        0 <= n.indexOf("line") ||
                        0 <= n.indexOf("area") ||
                        (e -= b)))
                  : ((e = m.point.y + w._lineHeight / 2 + y + b),
                    e > h - k + w._lineHeight / 2 - y &&
                      ((e =
                        "auto" === v
                          ? Math.min(m.point.y, h) +
                            w._lineHeight / 2 -
                            k -
                            y -
                            b
                          : h + w._lineHeight / 2 - k - y - b),
                      (L =
                        e - ("horizontal" === l ? w._lineHeight / 2 : k) <
                        m.point.y),
                      !L ||
                        0 <= n.indexOf("line") ||
                        0 <= n.indexOf("area") ||
                        (e += b)));
            else {
              Math.max(m.bounds.y1, c.y1);
              h = Math.min(m.bounds.y2, c.y2) - k + w._lineHeight / 2;
              b =
                0 <= n.indexOf("range") || "error" === n
                  ? 0 < u
                    ? Math.max(m.bounds.y1, c.y1) + w._lineHeight / 2 + y
                    : Math.min(m.bounds.y2, c.y2) + w._lineHeight / 2 - k - y
                  : (Math.max(m.bounds.y1, c.y1) +
                      Math.min(m.bounds.y2, c.y2)) /
                      2 -
                    k / 2 +
                    w._lineHeight / 2;
              if (0 < u) {
                if (((e = b), "bubble" === n || "scatter" === n))
                  (e = m.point.y - k / 2 + w._lineHeight / 2),
                    k > m.bounds.y2 - m.bounds.y1 && (e -= k / 2 + y),
                    0 > e - w._lineHeight / 2 &&
                      (e +=
                        Math.abs(e - w._lineHeight / 2) <=
                        (m.bounds.y2 - m.bounds.y1) / 2 + y
                          ? Math.abs(e - w._lineHeight / 2)
                          : (m.bounds.y2 - m.bounds.y1) / 2 + y);
              } else
                (e = Math.min(m.point.y, b)),
                  e > h - k - y &&
                    ("bubble" === n || "scatter" === n) &&
                    (e = Math.min(m.point.y + y, c.y2 - k - y));
              e = Math.min(e, h);
            }
          } else
            0 <= n.indexOf("line") ||
            0 <= n.indexOf("area") ||
            0 <= n.indexOf("scatter")
              ? ((v = "auto"), (r = 4))
              : 0 <= n.indexOf("stacked")
              ? "auto" === v && (v = "inside")
              : "bubble" === n && (v = "inside"),
              (e = m.point.y + w._lineHeight / 2 - k / 2),
              "inside" !== v
                ? ((h = c.x1),
                  (g = c.x2),
                  0 > u
                    ? ((q =
                        m.point.x -
                        d +
                        ("horizontal" === l ? 0 : w._lineHeight / 2) -
                        r -
                        b),
                      ("horizontal" === l ? q : q - w._lineHeight / 2) < h &&
                        ((q =
                          "auto" === v
                            ? Math.max(m.point.x, h) +
                              ("horizontal" === l ? 0 : w._lineHeight / 2) +
                              y +
                              b
                            : h +
                              ("horizontal" === l ? 0 : w._lineHeight / 2) +
                              r),
                        (L =
                          q + d - ("horizontal" === l ? 0 : w._lineHeight / 2) >
                          m.point.x) && (q -= b)))
                    : ((q =
                        m.point.x +
                        ("horizontal" === l ? 0 : w._lineHeight / 2) +
                        r +
                        b),
                      ("horizontal" === l ? q : q - w._lineHeight / 2) >
                        g - d - r - b &&
                        ((q =
                          "auto" === v
                            ? Math.min(m.point.x, g) -
                              ("horizontal" === l ? d : d - w._lineHeight / 2) -
                              r -
                              b
                            : g -
                              d -
                              r +
                              ("horizontal" === l ? 0 : w._lineHeight / 2)),
                        (L =
                          q - ("horizontal" === l ? 0 : w._lineHeight / 2) <
                          m.point.x) && (q += b))))
                : ((h = Math.max(m.bounds.x1, c.x1)),
                  Math.min(m.bounds.x2, c.x2),
                  (b =
                    0 <= n.indexOf("range") || "error" === n
                      ? 0 > u
                        ? Math.max(m.bounds.x1, c.x1)
                        : Math.min(m.bounds.x2, c.x2) -
                          d -
                          r +
                          ("horizontal" === l ? 0 : w._lineHeight / 2)
                      : (Math.max(m.bounds.x1, c.x1) +
                          Math.min(m.bounds.x2, c.x2)) /
                          2 -
                        d / 2 +
                        ("horizontal" === l ? 0 : w._lineHeight / 2)),
                  (q = 0 > u ? b : Math.min(m.point.x, b)),
                  (q = Math.max(
                    q,
                    h + ("horizontal" === l ? 0 : w._lineHeight / 2 + y)
                  )));
          "vertical" === l &&
            ((e += k - w._lineHeight / 2),
            0 <=
              "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error"
                .split(" ")
                .indexOf(n) &&
              (L =
                0 < u
                  ? e + ("horizontal" === l ? k - w._lineHeight / 2 : 0) >
                    m.point.y
                  : e - ("horizontal" === l ? w._lineHeight / 2 : k) <
                    m.point.y),
            "bubble" === n || "scatter" === n) &&
            (q += w._lineHeight / 2 - Sa / 2);
          w.x = q;
          w.y = e;
          w.render(!0);
          z &&
            "inside" !== v &&
            ((0 > n.indexOf("bar") &&
              ("error" !== n || !m.axisSwapped) &&
              m.point.x > c.x1 &&
              m.point.x < c.x2) ||
              !L) &&
            ((-1 ===
              "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error"
                .split(" ")
                .indexOf(n) &&
              ("error" !== n || m.axisSwapped) &&
              m.point.y > c.y1 &&
              m.point.y < c.y2) ||
              !L) &&
            ((f.lineWidth = z),
            (f.strokeStyle = s ? s : "gray"),
            f.setLineDash && f.setLineDash(I(x, z)),
            f.beginPath(),
            f.moveTo(m.point.x, m.point.y),
            0 <= n.indexOf("bar") || ("error" === n && m.axisSwapped)
              ? f.lineTo(
                  q +
                    (0 < m.direction ? 0 : d) +
                    ("vertical" === l ? -w._lineHeight / 2 : 0),
                  e + ("vertical" === l ? -k / 2 : k / 2 - w._lineHeight / 2)
                )
              : 0 <= n.indexOf("column") || ("error" === n && !m.axisSwapped)
              ? f.lineTo(
                  q + d / 2 - ("horizontal" === l ? 0 : w._lineHeight / 2),
                  e +
                    ("vertical" === l
                      ? e - k < m.point.y
                        ? 0
                        : -k
                      : (e - w._lineHeight / 2 < m.point.y ? k : 0) -
                        w._lineHeight / 2)
                )
              : 0 <= n.indexOf("waterfall")
              ? f.lineTo(
                  q + d / 2 - ("horizontal" === l ? 0 : w._lineHeight / 2),
                  "vertical" === l
                    ? 0 < u && e < m.point.y
                      ? e
                      : 0 > u && e - k > m.point.y
                      ? e - k
                      : m.point.y
                    : 0 < u && e + k - w._lineHeight / 2 < m.point.y
                    ? e + k - w._lineHeight / 2
                    : 0 > u && e - w._lineHeight / 2 > m.point.y
                    ? e - w._lineHeight / 2
                    : m.point.y
                )
              : f.lineTo(
                  q + d / 2 - ("horizontal" === l ? 0 : w._lineHeight / 2),
                  e +
                    ("vertical" === l
                      ? e - k < m.point.y
                        ? 0
                        : -k
                      : (e + k - w._lineHeight / 2 < m.point.y ? k : 0) -
                        w._lineHeight / 2)
                ),
            f.stroke());
        }
      }
      f = {
        source: f,
        dest: this.plotArea.ctx,
        animationCallback: O.fadeInAnimation,
        easingFunction: O.easing.easeInQuad,
        animationBase: 0,
        startTimePercent: 0.7,
      };
      for (a = 0; a < this._indexLabels.length; a++)
        (m = this._indexLabels[a]),
          (w = na("indexLabelBackgroundColor", m.dataPoint, m.dataSeries)),
          (m.dataSeries.indexLabelBackgroundColor = p(w)
            ? t
              ? "transparent"
              : null
            : w);
      return f;
    };
    l.prototype.renderLine = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = this._eventManager.ghostCtx;
        c.save();
        var g = this.plotArea;
        c.beginPath();
        c.rect(g.x1, g.y1, g.width, g.height);
        c.clip();
        for (var h = [], r, y = 0; y < a.dataSeriesIndexes.length; y++) {
          var d = a.dataSeriesIndexes[y],
            k = this.data[d];
          c.lineWidth = k.lineThickness;
          var m = k.dataPoints,
            n = "solid";
          if (c.setLineDash) {
            var q = I(k.nullDataLineDashType, k.lineThickness),
              n = k.lineDashType,
              e = I(n, k.lineThickness);
            c.setLineDash(e);
          }
          var p = k.id;
          this._eventManager.objectMap[p] = {
            objectType: "dataSeries",
            dataSeriesIndex: d,
          };
          p = V(p);
          b.strokeStyle = p;
          b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
          var p = k._colorSet,
            w =
              (p =
              k.lineColor =
                k.options.lineColor ? k.options.lineColor : p[0]);
          c.strokeStyle = p;
          var x = !0,
            s = 0,
            z,
            v;
          c.beginPath();
          if (0 < m.length) {
            for (var l = !1, s = 0; s < m.length; s++)
              if (
                ((z = m[s].x.getTime ? m[s].x.getTime() : m[s].x),
                !(
                  z < a.axisX.dataInfo.viewPortMin ||
                  (z > a.axisX.dataInfo.viewPortMax &&
                    (!k.connectNullData || !l))
                ))
              )
                if ("number" !== typeof m[s].y)
                  0 < s &&
                    !(k.connectNullData || l || x) &&
                    (c.stroke(), t && b.stroke()),
                    (l = !0);
                else {
                  z = a.axisX.convertValueToPixel(z);
                  v = a.axisY.convertValueToPixel(m[s].y);
                  var C = k.dataPointIds[s];
                  this._eventManager.objectMap[C] = {
                    id: C,
                    objectType: "dataPoint",
                    dataSeriesIndex: d,
                    dataPointIndex: s,
                    x1: z,
                    y1: v,
                  };
                  x || l
                    ? (!x && k.connectNullData
                        ? (c.setLineDash &&
                            (k.options.nullDataLineDashType ||
                              (n === k.lineDashType &&
                                k.lineDashType !== k.nullDataLineDashType)) &&
                            (c.stroke(),
                            c.beginPath(),
                            c.moveTo(r.x, r.y),
                            (n = k.nullDataLineDashType),
                            c.setLineDash(q)),
                          c.lineTo(z, v),
                          t && b.lineTo(z, v))
                        : (c.beginPath(),
                          c.moveTo(z, v),
                          t && (b.beginPath(), b.moveTo(z, v))),
                      (l = x = !1))
                    : (c.lineTo(z, v),
                      t && b.lineTo(z, v),
                      0 == s % 500 &&
                        (c.stroke(),
                        c.beginPath(),
                        c.moveTo(z, v),
                        t && (b.stroke(), b.beginPath(), b.moveTo(z, v))));
                  r = { x: z, y: v };
                  s < m.length - 1 &&
                    (w !== (m[s].lineColor || p) ||
                      n !== (m[s].lineDashType || k.lineDashType)) &&
                    (c.stroke(),
                    c.beginPath(),
                    c.moveTo(z, v),
                    (w = m[s].lineColor || p),
                    (c.strokeStyle = w),
                    c.setLineDash &&
                      (m[s].lineDashType
                        ? ((n = m[s].lineDashType),
                          c.setLineDash(I(n, k.lineThickness)))
                        : ((n = k.lineDashType), c.setLineDash(e))));
                  if (
                    0 !== m[s].markerSize &&
                    (0 < m[s].markerSize || 0 < k.markerSize)
                  ) {
                    var D = k.getMarkerProperties(s, z, v, c);
                    h.push(D);
                    C = V(C);
                    t &&
                      h.push({
                        x: z,
                        y: v,
                        ctx: b,
                        type: D.type,
                        size: D.size,
                        color: C,
                        borderColor: C,
                        borderThickness: D.borderThickness,
                      });
                  }
                  (m[s].indexLabel ||
                    k.indexLabel ||
                    m[s].indexLabelFormatter ||
                    k.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "line",
                      dataPoint: m[s],
                      dataSeries: k,
                      point: { x: z, y: v },
                      direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1,
                      color: p,
                    });
                }
            c.stroke();
            t && b.stroke();
          }
        }
        Y.drawMarkers(h);
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(g.x1, g.y1, g.width, g.height),
          b.beginPath());
        c.restore();
        c.beginPath();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.xClipAnimation,
          easingFunction: O.easing.linear,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderStepLine = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = this._eventManager.ghostCtx;
        c.save();
        var g = this.plotArea;
        c.beginPath();
        c.rect(g.x1, g.y1, g.width, g.height);
        c.clip();
        for (var h = [], r, y = 0; y < a.dataSeriesIndexes.length; y++) {
          var d = a.dataSeriesIndexes[y],
            k = this.data[d];
          c.lineWidth = k.lineThickness;
          var m = k.dataPoints,
            n = "solid";
          if (c.setLineDash) {
            var q = I(k.nullDataLineDashType, k.lineThickness),
              n = k.lineDashType,
              e = I(n, k.lineThickness);
            c.setLineDash(e);
          }
          var p = k.id;
          this._eventManager.objectMap[p] = {
            objectType: "dataSeries",
            dataSeriesIndex: d,
          };
          p = V(p);
          b.strokeStyle = p;
          b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
          var p = k._colorSet,
            w =
              (p =
              k.lineColor =
                k.options.lineColor ? k.options.lineColor : p[0]);
          c.strokeStyle = p;
          var x = !0,
            s = 0,
            z,
            v;
          c.beginPath();
          if (0 < m.length) {
            for (var l = !1, s = 0; s < m.length; s++)
              if (
                ((z = m[s].getTime ? m[s].x.getTime() : m[s].x),
                !(
                  z < a.axisX.dataInfo.viewPortMin ||
                  (z > a.axisX.dataInfo.viewPortMax &&
                    (!k.connectNullData || !l))
                ))
              )
                if ("number" !== typeof m[s].y)
                  0 < s &&
                    !(k.connectNullData || l || x) &&
                    (c.stroke(), t && b.stroke()),
                    (l = !0);
                else {
                  var C = v;
                  z = a.axisX.convertValueToPixel(z);
                  v = a.axisY.convertValueToPixel(m[s].y);
                  var D = k.dataPointIds[s];
                  this._eventManager.objectMap[D] = {
                    id: D,
                    objectType: "dataPoint",
                    dataSeriesIndex: d,
                    dataPointIndex: s,
                    x1: z,
                    y1: v,
                  };
                  x || l
                    ? (!x && k.connectNullData
                        ? (c.setLineDash &&
                            (k.options.nullDataLineDashType ||
                              (n === k.lineDashType &&
                                k.lineDashType !== k.nullDataLineDashType)) &&
                            (c.stroke(),
                            c.beginPath(),
                            c.moveTo(r.x, r.y),
                            (n = k.nullDataLineDashType),
                            c.setLineDash(q)),
                          c.lineTo(z, C),
                          c.lineTo(z, v),
                          t && (b.lineTo(z, C), b.lineTo(z, v)))
                        : (c.beginPath(),
                          c.moveTo(z, v),
                          t && (b.beginPath(), b.moveTo(z, v))),
                      (l = x = !1))
                    : (c.lineTo(z, C),
                      t && b.lineTo(z, C),
                      c.lineTo(z, v),
                      t && b.lineTo(z, v),
                      0 == s % 500 &&
                        (c.stroke(),
                        c.beginPath(),
                        c.moveTo(z, v),
                        t && (b.stroke(), b.beginPath(), b.moveTo(z, v))));
                  r = { x: z, y: v };
                  s < m.length - 1 &&
                    (w !== (m[s].lineColor || p) ||
                      n !== (m[s].lineDashType || k.lineDashType)) &&
                    (c.stroke(),
                    c.beginPath(),
                    c.moveTo(z, v),
                    (w = m[s].lineColor || p),
                    (c.strokeStyle = w),
                    c.setLineDash &&
                      (m[s].lineDashType
                        ? ((n = m[s].lineDashType),
                          c.setLineDash(I(n, k.lineThickness)))
                        : ((n = k.lineDashType), c.setLineDash(e))));
                  0 !== m[s].markerSize &&
                    (0 < m[s].markerSize || 0 < k.markerSize) &&
                    ((C = k.getMarkerProperties(s, z, v, c)),
                    h.push(C),
                    (D = V(D)),
                    t &&
                      h.push({
                        x: z,
                        y: v,
                        ctx: b,
                        type: C.type,
                        size: C.size,
                        color: D,
                        borderColor: D,
                        borderThickness: C.borderThickness,
                      }));
                  (m[s].indexLabel ||
                    k.indexLabel ||
                    m[s].indexLabelFormatter ||
                    k.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "stepLine",
                      dataPoint: m[s],
                      dataSeries: k,
                      point: { x: z, y: v },
                      direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1,
                      color: p,
                    });
                }
            c.stroke();
            t && b.stroke();
          }
        }
        Y.drawMarkers(h);
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(g.x1, g.y1, g.width, g.height),
          b.beginPath());
        c.restore();
        c.beginPath();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.xClipAnimation,
          easingFunction: O.easing.linear,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderSpline = function (a) {
      function f(a) {
        a = u(a, 2);
        if (0 < a.length) {
          b.beginPath();
          t && g.beginPath();
          b.moveTo(a[0].x, a[0].y);
          a[0].newStrokeStyle && (b.strokeStyle = a[0].newStrokeStyle);
          a[0].newLineDashArray && b.setLineDash(a[0].newLineDashArray);
          t && g.moveTo(a[0].x, a[0].y);
          for (var c = 0; c < a.length - 3; c += 3)
            if (
              (b.bezierCurveTo(
                a[c + 1].x,
                a[c + 1].y,
                a[c + 2].x,
                a[c + 2].y,
                a[c + 3].x,
                a[c + 3].y
              ),
              t &&
                g.bezierCurveTo(
                  a[c + 1].x,
                  a[c + 1].y,
                  a[c + 2].x,
                  a[c + 2].y,
                  a[c + 3].x,
                  a[c + 3].y
                ),
              (0 < c && 0 === c % 3e3) ||
                a[c + 3].newStrokeStyle ||
                a[c + 3].newLineDashArray)
            )
              b.stroke(),
                b.beginPath(),
                b.moveTo(a[c + 3].x, a[c + 3].y),
                a[c + 3].newStrokeStyle &&
                  (b.strokeStyle = a[c + 3].newStrokeStyle),
                a[c + 3].newLineDashArray &&
                  b.setLineDash(a[c + 3].newLineDashArray),
                t &&
                  (g.stroke(), g.beginPath(), g.moveTo(a[c + 3].x, a[c + 3].y));
          b.stroke();
          t && g.stroke();
        }
      }
      var c = a.targetCanvasCtx || this.plotArea.ctx,
        b = t ? this._preRenderCtx : c;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = this._eventManager.ghostCtx;
        b.save();
        var h = this.plotArea;
        b.beginPath();
        b.rect(h.x1, h.y1, h.width, h.height);
        b.clip();
        for (var r = [], y = 0; y < a.dataSeriesIndexes.length; y++) {
          var d = a.dataSeriesIndexes[y],
            k = this.data[d];
          b.lineWidth = k.lineThickness;
          var m = k.dataPoints,
            n = "solid";
          if (b.setLineDash) {
            var q = I(k.nullDataLineDashType, k.lineThickness),
              n = k.lineDashType,
              e = I(n, k.lineThickness);
            b.setLineDash(e);
          }
          var p = k.id;
          this._eventManager.objectMap[p] = {
            objectType: "dataSeries",
            dataSeriesIndex: d,
          };
          p = V(p);
          g.strokeStyle = p;
          g.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
          var p = k._colorSet,
            w =
              (p =
              k.lineColor =
                k.options.lineColor ? k.options.lineColor : p[0]);
          b.strokeStyle = p;
          var x = 0,
            s,
            l,
            v = [];
          b.beginPath();
          if (0 < m.length)
            for (l = !1, x = 0; x < m.length; x++)
              if (
                ((s = m[x].getTime ? m[x].x.getTime() : m[x].x),
                !(
                  s < a.axisX.dataInfo.viewPortMin ||
                  (s > a.axisX.dataInfo.viewPortMax &&
                    (!k.connectNullData || !l))
                ))
              )
                if ("number" !== typeof m[x].y)
                  0 < x &&
                    !l &&
                    (k.connectNullData
                      ? b.setLineDash &&
                        0 < v.length &&
                        (k.options.nullDataLineDashType ||
                          !m[x - 1].lineDashType) &&
                        ((v[v.length - 1].newLineDashArray = q),
                        (n = k.nullDataLineDashType))
                      : (f(v), (v = []))),
                    (l = !0);
                else {
                  s = a.axisX.convertValueToPixel(s);
                  l = a.axisY.convertValueToPixel(m[x].y);
                  var F = k.dataPointIds[x];
                  this._eventManager.objectMap[F] = {
                    id: F,
                    objectType: "dataPoint",
                    dataSeriesIndex: d,
                    dataPointIndex: x,
                    x1: s,
                    y1: l,
                  };
                  v[v.length] = { x: s, y: l };
                  x < m.length - 1 &&
                    (w !== (m[x].lineColor || p) ||
                      n !== (m[x].lineDashType || k.lineDashType)) &&
                    ((w = m[x].lineColor || p),
                    (v[v.length - 1].newStrokeStyle = w),
                    b.setLineDash &&
                      (m[x].lineDashType
                        ? ((n = m[x].lineDashType),
                          (v[v.length - 1].newLineDashArray = I(
                            n,
                            k.lineThickness
                          )))
                        : ((n = k.lineDashType),
                          (v[v.length - 1].newLineDashArray = e))));
                  if (
                    0 !== m[x].markerSize &&
                    (0 < m[x].markerSize || 0 < k.markerSize)
                  ) {
                    var C = k.getMarkerProperties(x, s, l, b);
                    r.push(C);
                    F = V(F);
                    t &&
                      r.push({
                        x: s,
                        y: l,
                        ctx: g,
                        type: C.type,
                        size: C.size,
                        color: F,
                        borderColor: F,
                        borderThickness: C.borderThickness,
                      });
                  }
                  (m[x].indexLabel ||
                    k.indexLabel ||
                    m[x].indexLabelFormatter ||
                    k.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "spline",
                      dataPoint: m[x],
                      dataSeries: k,
                      point: { x: s, y: l },
                      direction: 0 > m[x].y === a.axisY.reversed ? 1 : -1,
                      color: p,
                    });
                  l = !1;
                }
          f(v);
        }
        Y.drawMarkers(r);
        t &&
          (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (b.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          b.clearRect(h.x1, h.y1, h.width, h.height),
          g.beginPath());
        b.restore();
        b.beginPath();
        return {
          source: c,
          dest: this.plotArea.ctx,
          animationCallback: O.xClipAnimation,
          easingFunction: O.easing.linear,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderColumn = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          g = this.plotArea,
          h = 0,
          r,
          y,
          d,
          k = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          h = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          m = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : Math.min(
                0.15 * this.width,
                0.9 * (this.plotArea.width / a.plotType.totalDataSeries)
              ) << 0,
          n = a.axisX.dataInfo.minDiff;
        isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
        n = this.dataPointWidth = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((g.width *
                (a.axisX.logarithmic
                  ? Math.log(n) / Math.log(a.axisX.range)
                  : Math.abs(n) / Math.abs(a.axisX.range))) /
                a.plotType.totalDataSeries)) <<
            0;
        this.dataPointMaxWidth &&
          h > m &&
          (h = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            m
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          m < h &&
          (m = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            h
          ));
        n < h && (n = h);
        n > m && (n = m);
        c.save();
        t && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(g.x1, g.y1, g.width, g.height);
        c.clip();
        t &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.clip());
        for (m = 0; m < a.dataSeriesIndexes.length; m++) {
          var q = a.dataSeriesIndexes[m],
            e = this.data[q],
            p = e.dataPoints;
          if (0 < p.length)
            for (
              var w = 5 < n && e.bevelEnabled ? !0 : !1, h = 0;
              h < p.length;
              h++
            )
              if (
                (p[h].getTime ? (d = p[h].x.getTime()) : (d = p[h].x),
                !(
                  d < a.axisX.dataInfo.viewPortMin ||
                  d > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof p[h].y)
              ) {
                r = a.axisX.convertValueToPixel(d);
                y = a.axisY.convertValueToPixel(p[h].y);
                r = a.axisX.reversed
                  ? (r +
                      (a.plotType.totalDataSeries * n) / 2 -
                      (a.previousDataSeriesCount + m) * n) <<
                    0
                  : (r -
                      (a.plotType.totalDataSeries * n) / 2 +
                      (a.previousDataSeriesCount + m) * n) <<
                    0;
                var x = a.axisX.reversed ? (r - n) << 0 : (r + n) << 0,
                  s;
                0 <= p[h].y ? (s = k) : ((s = y), (y = k));
                y > s && ((b = y), (y = s), (s = b));
                b = p[h].color
                  ? p[h].color
                  : e._colorSet[h % e._colorSet.length];
                ba(
                  c,
                  a.axisX.reversed ? x : r,
                  y,
                  a.axisX.reversed ? r : x,
                  s,
                  b,
                  0,
                  null,
                  w && (a.axisY.reversed ? 0 > p[h].y : 0 <= p[h].y),
                  (a.axisY.reversed ? 0 <= p[h].y : 0 > p[h].y) && w,
                  !1,
                  !1,
                  e.fillOpacity
                );
                b = e.dataPointIds[h];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: q,
                  dataPointIndex: h,
                  x1: r,
                  y1: y,
                  x2: x,
                  y2: s,
                };
                b = V(b);
                t &&
                  ba(
                    this._eventManager.ghostCtx,
                    a.axisX.reversed ? x : r,
                    y,
                    a.axisX.reversed ? r : x,
                    s,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                (p[h].indexLabel ||
                  e.indexLabel ||
                  p[h].indexLabelFormatter ||
                  e.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "column",
                    dataPoint: p[h],
                    dataSeries: e,
                    point: {
                      x: r + (x - r) / 2,
                      y: 0 > p[h].y === a.axisY.reversed ? y : s,
                    },
                    direction: 0 > p[h].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: r,
                      y1: Math.min(y, s),
                      x2: x,
                      y2: Math.max(y, s),
                    },
                    color: b,
                  });
              }
        }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.yScaleAnimation,
          easingFunction: O.easing.easeOutQuart,
          animationBase:
            k < a.axisY.bounds.y1
              ? a.axisY.bounds.y1
              : k > a.axisY.bounds.y2
              ? a.axisY.bounds.y2
              : k,
        };
      }
    };
    l.prototype.renderStackedColumn = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          g = this.plotArea,
          h = [],
          r = [],
          y = [],
          d = [],
          k = 0,
          m,
          n,
          q = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          k = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          e = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : (0.15 * this.width) << 0,
          p = a.axisX.dataInfo.minDiff;
        isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
        p = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((g.width *
                (a.axisX.logarithmic
                  ? Math.log(p) / Math.log(a.axisX.range)
                  : Math.abs(p) / Math.abs(a.axisX.range))) /
                a.plotType.plotUnits.length)) <<
            0;
        this.dataPointMaxWidth &&
          k > e &&
          (k = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            e
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          e < k &&
          (e = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            k
          ));
        p < k && (p = k);
        p > e && (p = e);
        c.save();
        t && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(g.x1, g.y1, g.width, g.height);
        c.clip();
        t &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.clip());
        for (e = 0; e < a.dataSeriesIndexes.length; e++) {
          var w = a.dataSeriesIndexes[e],
            x = this.data[w],
            s = x.dataPoints;
          if (0 < s.length) {
            var l = 5 < p && x.bevelEnabled ? !0 : !1;
            c.strokeStyle = "#4572A7 ";
            for (k = 0; k < s.length; k++)
              if (
                ((b = s[k].x.getTime ? s[k].x.getTime() : s[k].x),
                !(
                  b < a.axisX.dataInfo.viewPortMin ||
                  b > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof s[k].y)
              ) {
                m = a.axisX.convertValueToPixel(b);
                m =
                  (m - (a.plotType.plotUnits.length * p) / 2 + a.index * p) <<
                  0;
                var v = (m + p) << 0,
                  F;
                if (
                  a.axisY.logarithmic ||
                  (a.axisY.scaleBreaks &&
                    0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                    0 < s[k].y)
                )
                  (y[b] = s[k].y + (y[b] ? y[b] : 0)),
                    0 < y[b] &&
                      ((n = a.axisY.convertValueToPixel(y[b])),
                      (F = "undefined" !== typeof h[b] ? h[b] : q),
                      (h[b] = n));
                else if (
                  a.axisY.scaleBreaks &&
                  0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                  0 >= s[k].y
                )
                  (d[b] = s[k].y + (d[b] ? d[b] : 0)),
                    (F = a.axisY.convertValueToPixel(d[b])),
                    (n = "undefined" !== typeof r[b] ? r[b] : q),
                    (r[b] = F);
                else if (
                  ((n = a.axisY.convertValueToPixel(s[k].y)), 0 <= s[k].y)
                ) {
                  var C = "undefined" !== typeof h[b] ? h[b] : 0;
                  n -= C;
                  F = q - C;
                  h[b] = C + (F - n);
                } else
                  (C = r[b] ? r[b] : 0),
                    (F = n + C),
                    (n = q + C),
                    (r[b] = C + (F - n));
                b = s[k].color
                  ? s[k].color
                  : x._colorSet[k % x._colorSet.length];
                ba(
                  c,
                  m,
                  a.axisY.reversed ? F : n,
                  v,
                  a.axisY.reversed ? n : F,
                  b,
                  0,
                  null,
                  l && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y),
                  (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && l,
                  !1,
                  !1,
                  x.fillOpacity
                );
                b = x.dataPointIds[k];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: w,
                  dataPointIndex: k,
                  x1: m,
                  y1: n,
                  x2: v,
                  y2: F,
                };
                b = V(b);
                t &&
                  ba(
                    this._eventManager.ghostCtx,
                    m,
                    n,
                    v,
                    F,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                (s[k].indexLabel ||
                  x.indexLabel ||
                  s[k].indexLabelFormatter ||
                  x.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "stackedColumn",
                    dataPoint: s[k],
                    dataSeries: x,
                    point: { x: m + (v - m) / 2, y: 0 <= s[k].y ? n : F },
                    direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: m,
                      y1: Math.min(n, F),
                      x2: v,
                      y2: Math.max(n, F),
                    },
                    color: b,
                  });
              }
          }
        }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.yScaleAnimation,
          easingFunction: O.easing.easeOutQuart,
          animationBase:
            q < a.axisY.bounds.y1
              ? a.axisY.bounds.y1
              : q > a.axisY.bounds.y2
              ? a.axisY.bounds.y2
              : q,
        };
      }
    };
    l.prototype.renderStackedColumn100 = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          g = this.plotArea,
          h = [],
          r = [],
          y = [],
          d = [],
          k = 0,
          m,
          n,
          q = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          k = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          e = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : (0.15 * this.width) << 0,
          p = a.axisX.dataInfo.minDiff;
        isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
        p = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((g.width *
                (a.axisX.logarithmic
                  ? Math.log(p) / Math.log(a.axisX.range)
                  : Math.abs(p) / Math.abs(a.axisX.range))) /
                a.plotType.plotUnits.length)) <<
            0;
        this.dataPointMaxWidth &&
          k > e &&
          (k = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            e
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          e < k &&
          (e = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            k
          ));
        p < k && (p = k);
        p > e && (p = e);
        c.save();
        t && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(g.x1, g.y1, g.width, g.height);
        c.clip();
        t &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.clip());
        for (e = 0; e < a.dataSeriesIndexes.length; e++) {
          var w = a.dataSeriesIndexes[e],
            x = this.data[w],
            s = x.dataPoints;
          if (0 < s.length)
            for (
              var l = 5 < p && x.bevelEnabled ? !0 : !1, k = 0;
              k < s.length;
              k++
            )
              if (
                ((b = s[k].x.getTime ? s[k].x.getTime() : s[k].x),
                !(
                  b < a.axisX.dataInfo.viewPortMin ||
                  b > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof s[k].y)
              ) {
                m = a.axisX.convertValueToPixel(b);
                n =
                  0 !== a.dataPointYSums[b]
                    ? 100 * (s[k].y / a.dataPointYSums[b])
                    : 0;
                m =
                  (m - (a.plotType.plotUnits.length * p) / 2 + a.index * p) <<
                  0;
                var v = (m + p) << 0,
                  F;
                if (
                  a.axisY.logarithmic ||
                  (a.axisY.scaleBreaks &&
                    0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                    0 < s[k].y)
                ) {
                  y[b] = n + ("undefined" !== typeof y[b] ? y[b] : 0);
                  if (0 >= y[b]) continue;
                  n = a.axisY.convertValueToPixel(y[b]);
                  F = h[b] ? h[b] : q;
                  h[b] = n;
                } else if (
                  a.axisY.scaleBreaks &&
                  0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                  0 >= s[k].y
                )
                  (d[b] = n + ("undefined" !== typeof d[b] ? d[b] : 0)),
                    (F = a.axisY.convertValueToPixel(d[b])),
                    (n = r[b] ? r[b] : q),
                    (r[b] = F);
                else if (((n = a.axisY.convertValueToPixel(n)), 0 <= s[k].y)) {
                  var C = "undefined" !== typeof h[b] ? h[b] : 0;
                  n -= C;
                  F = q - C;
                  a.dataSeriesIndexes.length - 1 === e &&
                    1 >= Math.abs(g.y1 - n) &&
                    (n = g.y1);
                  h[b] = C + (F - n);
                } else
                  (C = "undefined" !== typeof r[b] ? r[b] : 0),
                    (F = n + C),
                    (n = q + C),
                    a.dataSeriesIndexes.length - 1 === e &&
                      1 >= Math.abs(g.y2 - F) &&
                      (F = g.y2),
                    (r[b] = C + (F - n));
                b = s[k].color
                  ? s[k].color
                  : x._colorSet[k % x._colorSet.length];
                ba(
                  c,
                  m,
                  a.axisY.reversed ? F : n,
                  v,
                  a.axisY.reversed ? n : F,
                  b,
                  0,
                  null,
                  l && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y),
                  (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && l,
                  !1,
                  !1,
                  x.fillOpacity
                );
                b = x.dataPointIds[k];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: w,
                  dataPointIndex: k,
                  x1: m,
                  y1: n,
                  x2: v,
                  y2: F,
                };
                b = V(b);
                t &&
                  ba(
                    this._eventManager.ghostCtx,
                    m,
                    n,
                    v,
                    F,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                (s[k].indexLabel ||
                  x.indexLabel ||
                  s[k].indexLabelFormatter ||
                  x.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "stackedColumn100",
                    dataPoint: s[k],
                    dataSeries: x,
                    point: { x: m + (v - m) / 2, y: 0 <= s[k].y ? n : F },
                    direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: m,
                      y1: Math.min(n, F),
                      x2: v,
                      y2: Math.max(n, F),
                    },
                    color: b,
                  });
              }
        }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.yScaleAnimation,
          easingFunction: O.easing.easeOutQuart,
          animationBase:
            q < a.axisY.bounds.y1
              ? a.axisY.bounds.y1
              : q > a.axisY.bounds.y2
              ? a.axisY.bounds.y2
              : q,
        };
      }
    };
    l.prototype.renderBar = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          g = this.plotArea,
          h = 0,
          r,
          d,
          p,
          k = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          h = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          m = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : Math.min(
                0.15 * this.height,
                0.9 * (this.plotArea.height / a.plotType.totalDataSeries)
              ) << 0,
          n = a.axisX.dataInfo.minDiff;
        isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
        n = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((g.height *
                (a.axisX.logarithmic
                  ? Math.log(n) / Math.log(a.axisX.range)
                  : Math.abs(n) / Math.abs(a.axisX.range))) /
                a.plotType.totalDataSeries)) <<
            0;
        this.dataPointMaxWidth &&
          h > m &&
          (h = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            m
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          m < h &&
          (m = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            h
          ));
        n < h && (n = h);
        n > m && (n = m);
        c.save();
        t && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(g.x1, g.y1, g.width, g.height);
        c.clip();
        t &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.clip());
        for (m = 0; m < a.dataSeriesIndexes.length; m++) {
          var q = a.dataSeriesIndexes[m],
            e = this.data[q],
            l = e.dataPoints;
          if (0 < l.length) {
            var w = 5 < n && e.bevelEnabled ? !0 : !1;
            c.strokeStyle = "#4572A7 ";
            for (h = 0; h < l.length; h++)
              if (
                (l[h].getTime ? (p = l[h].x.getTime()) : (p = l[h].x),
                !(
                  p < a.axisX.dataInfo.viewPortMin ||
                  p > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof l[h].y)
              ) {
                d = a.axisX.convertValueToPixel(p);
                r = a.axisY.convertValueToPixel(l[h].y);
                d = a.axisX.reversed
                  ? (d +
                      (a.plotType.totalDataSeries * n) / 2 -
                      (a.previousDataSeriesCount + m) * n) <<
                    0
                  : (d -
                      (a.plotType.totalDataSeries * n) / 2 +
                      (a.previousDataSeriesCount + m) * n) <<
                    0;
                var x = a.axisX.reversed ? (d - n) << 0 : (d + n) << 0,
                  s;
                0 <= l[h].y ? (s = k) : ((s = r), (r = k));
                b = l[h].color
                  ? l[h].color
                  : e._colorSet[h % e._colorSet.length];
                ba(
                  c,
                  a.axisY.reversed ? r : s,
                  a.axisX.reversed ? x : d,
                  a.axisY.reversed ? s : r,
                  a.axisX.reversed ? d : x,
                  b,
                  0,
                  null,
                  w,
                  !1,
                  !1,
                  !1,
                  e.fillOpacity
                );
                b = e.dataPointIds[h];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: q,
                  dataPointIndex: h,
                  x1: s,
                  y1: d,
                  x2: r,
                  y2: x,
                };
                b = V(b);
                t &&
                  ba(
                    this._eventManager.ghostCtx,
                    s,
                    a.axisX.reversed ? x : d,
                    r,
                    a.axisX.reversed ? d : x,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                (l[h].indexLabel ||
                  e.indexLabel ||
                  l[h].indexLabelFormatter ||
                  e.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "bar",
                    dataPoint: l[h],
                    dataSeries: e,
                    point: { x: 0 <= l[h].y ? r : s, y: d + (x - d) / 2 },
                    direction: 0 > l[h].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: Math.min(s, r),
                      y1: d,
                      x2: Math.max(s, r),
                      y2: x,
                    },
                    color: b,
                  });
              }
          }
        }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.xScaleAnimation,
          easingFunction: O.easing.easeOutQuart,
          animationBase:
            k < a.axisY.bounds.x1
              ? a.axisY.bounds.x1
              : k > a.axisY.bounds.x2
              ? a.axisY.bounds.x2
              : k,
        };
      }
    };
    l.prototype.renderStackedBar = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          g = this.plotArea,
          h = [],
          r = [],
          d = [],
          p = [],
          k = 0,
          m,
          n,
          q = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          k = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          e = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : (0.15 * this.height) << 0,
          l = a.axisX.dataInfo.minDiff;
        isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
        l = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((g.height *
                (a.axisX.logarithmic
                  ? Math.log(l) / Math.log(a.axisX.range)
                  : Math.abs(l) / Math.abs(a.axisX.range))) /
                a.plotType.plotUnits.length)) <<
            0;
        this.dataPointMaxWidth &&
          k > e &&
          (k = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            e
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          e < k &&
          (e = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            k
          ));
        l < k && (l = k);
        l > e && (l = e);
        c.save();
        t && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(g.x1, g.y1, g.width, g.height);
        c.clip();
        t &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.clip());
        for (e = 0; e < a.dataSeriesIndexes.length; e++) {
          var w = a.dataSeriesIndexes[e],
            x = this.data[w],
            s = x.dataPoints;
          if (0 < s.length) {
            var z = 5 < l && x.bevelEnabled ? !0 : !1;
            c.strokeStyle = "#4572A7 ";
            for (k = 0; k < s.length; k++)
              if (
                ((b = s[k].x.getTime ? s[k].x.getTime() : s[k].x),
                !(
                  b < a.axisX.dataInfo.viewPortMin ||
                  b > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof s[k].y)
              ) {
                n = a.axisX.convertValueToPixel(b);
                n =
                  (n - (a.plotType.plotUnits.length * l) / 2 + a.index * l) <<
                  0;
                var v = (n + l) << 0,
                  F;
                if (
                  a.axisY.logarithmic ||
                  (a.axisY.scaleBreaks &&
                    0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                    0 < s[k].y)
                )
                  (d[b] = s[k].y + (d[b] ? d[b] : 0)),
                    0 < d[b] &&
                      ((F = h[b] ? h[b] : q),
                      (h[b] = m = a.axisY.convertValueToPixel(d[b])));
                else if (
                  a.axisY.scaleBreaks &&
                  0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                  0 >= s[k].y
                )
                  (p[b] = s[k].y + (p[b] ? p[b] : 0)),
                    (m = r[b] ? r[b] : q),
                    (r[b] = F = a.axisY.convertValueToPixel(p[b]));
                else if (
                  ((m = a.axisY.convertValueToPixel(s[k].y)), 0 <= s[k].y)
                ) {
                  var C = h[b] ? h[b] : 0;
                  F = q + C;
                  m += C;
                  h[b] = C + (m - F);
                } else
                  (C = r[b] ? r[b] : 0),
                    (F = m - C),
                    (m = q - C),
                    (r[b] = C + (m - F));
                b = s[k].color
                  ? s[k].color
                  : x._colorSet[k % x._colorSet.length];
                ba(
                  c,
                  a.axisY.reversed ? m : F,
                  n,
                  a.axisY.reversed ? F : m,
                  v,
                  b,
                  0,
                  null,
                  z,
                  !1,
                  !1,
                  !1,
                  x.fillOpacity
                );
                b = x.dataPointIds[k];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: w,
                  dataPointIndex: k,
                  x1: F,
                  y1: n,
                  x2: m,
                  y2: v,
                };
                b = V(b);
                t &&
                  ba(
                    this._eventManager.ghostCtx,
                    F,
                    n,
                    m,
                    v,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                (s[k].indexLabel ||
                  x.indexLabel ||
                  s[k].indexLabelFormatter ||
                  x.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "stackedBar",
                    dataPoint: s[k],
                    dataSeries: x,
                    point: { x: 0 <= s[k].y ? m : F, y: n + (v - n) / 2 },
                    direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: Math.min(F, m),
                      y1: n,
                      x2: Math.max(F, m),
                      y2: v,
                    },
                    color: b,
                  });
              }
          }
        }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.xScaleAnimation,
          easingFunction: O.easing.easeOutQuart,
          animationBase:
            q < a.axisY.bounds.x1
              ? a.axisY.bounds.x1
              : q > a.axisY.bounds.x2
              ? a.axisY.bounds.x2
              : q,
        };
      }
    };
    l.prototype.renderStackedBar100 = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          g = this.plotArea,
          h = [],
          r = [],
          d = [],
          p = [],
          k = 0,
          m,
          n,
          q = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          k = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          e = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : (0.15 * this.height) << 0,
          l = a.axisX.dataInfo.minDiff;
        isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
        l = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((g.height *
                (a.axisX.logarithmic
                  ? Math.log(l) / Math.log(a.axisX.range)
                  : Math.abs(l) / Math.abs(a.axisX.range))) /
                a.plotType.plotUnits.length)) <<
            0;
        this.dataPointMaxWidth &&
          k > e &&
          (k = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            e
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          e < k &&
          (e = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            k
          ));
        l < k && (l = k);
        l > e && (l = e);
        c.save();
        t && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(g.x1, g.y1, g.width, g.height);
        c.clip();
        t &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.clip());
        for (e = 0; e < a.dataSeriesIndexes.length; e++) {
          var w = a.dataSeriesIndexes[e],
            x = this.data[w],
            s = x.dataPoints;
          if (0 < s.length) {
            var z = 5 < l && x.bevelEnabled ? !0 : !1;
            c.strokeStyle = "#4572A7 ";
            for (k = 0; k < s.length; k++)
              if (
                ((b = s[k].x.getTime ? s[k].x.getTime() : s[k].x),
                !(
                  b < a.axisX.dataInfo.viewPortMin ||
                  b > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof s[k].y)
              ) {
                n = a.axisX.convertValueToPixel(b);
                var v;
                v =
                  0 !== a.dataPointYSums[b]
                    ? 100 * (s[k].y / a.dataPointYSums[b])
                    : 0;
                n =
                  (n - (a.plotType.plotUnits.length * l) / 2 + a.index * l) <<
                  0;
                var F = (n + l) << 0;
                if (
                  a.axisY.logarithmic ||
                  (a.axisY.scaleBreaks &&
                    0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                    0 < s[k].y)
                ) {
                  d[b] = v + (d[b] ? d[b] : 0);
                  if (0 >= d[b]) continue;
                  v = h[b] ? h[b] : q;
                  h[b] = m = a.axisY.convertValueToPixel(d[b]);
                } else if (
                  a.axisY.scaleBreaks &&
                  0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                  0 >= s[k].y
                )
                  (p[b] = v + (p[b] ? p[b] : 0)),
                    (m = r[b] ? r[b] : q),
                    (r[b] = v = a.axisY.convertValueToPixel(p[b]));
                else if (((m = a.axisY.convertValueToPixel(v)), 0 <= s[k].y)) {
                  var C = h[b] ? h[b] : 0;
                  v = q + C;
                  m += C;
                  a.dataSeriesIndexes.length - 1 === e &&
                    1 >= Math.abs(g.x2 - m) &&
                    (m = g.x2);
                  h[b] = C + (m - v);
                } else
                  (C = r[b] ? r[b] : 0),
                    (v = m - C),
                    (m = q - C),
                    a.dataSeriesIndexes.length - 1 === e &&
                      1 >= Math.abs(g.x1 - v) &&
                      (v = g.x1),
                    (r[b] = C + (m - v));
                b = s[k].color
                  ? s[k].color
                  : x._colorSet[k % x._colorSet.length];
                ba(
                  c,
                  a.axisY.reversed ? m : v,
                  n,
                  a.axisY.reversed ? v : m,
                  F,
                  b,
                  0,
                  null,
                  z,
                  !1,
                  !1,
                  !1,
                  x.fillOpacity
                );
                b = x.dataPointIds[k];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: w,
                  dataPointIndex: k,
                  x1: v,
                  y1: n,
                  x2: m,
                  y2: F,
                };
                b = V(b);
                t &&
                  ba(
                    this._eventManager.ghostCtx,
                    v,
                    n,
                    m,
                    F,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                (s[k].indexLabel ||
                  x.indexLabel ||
                  s[k].indexLabelFormatter ||
                  x.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "stackedBar100",
                    dataPoint: s[k],
                    dataSeries: x,
                    point: { x: 0 <= s[k].y ? m : v, y: n + (F - n) / 2 },
                    direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: Math.min(v, m),
                      y1: n,
                      x2: Math.max(v, m),
                      y2: F,
                    },
                    color: b,
                  });
              }
          }
        }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.xScaleAnimation,
          easingFunction: O.easing.easeOutQuart,
          animationBase:
            q < a.axisY.bounds.x1
              ? a.axisY.bounds.x1
              : q > a.axisY.bounds.x2
              ? a.axisY.bounds.x2
              : q,
        };
      }
    };
    l.prototype.renderArea = function (a) {
      var f, c;
      function b() {
        C &&
          (0 < e.lineThickness && h.stroke(),
          a.axisY.logarithmic ||
          (0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum)
            ? (F = v)
            : 0 > a.axisY.viewportMaximum
            ? (F = d.y1)
            : 0 < a.axisY.viewportMinimum && (F = v),
          h.lineTo(x, F),
          h.lineTo(C.x, F),
          h.closePath(),
          (h.globalAlpha = e.fillOpacity),
          h.fill(),
          (h.globalAlpha = 1),
          t && (r.lineTo(x, F), r.lineTo(C.x, F), r.closePath(), r.fill()),
          h.beginPath(),
          h.moveTo(x, s),
          r.beginPath(),
          r.moveTo(x, s),
          (C = { x: x, y: s }));
      }
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        h = t ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var r = this._eventManager.ghostCtx,
          d = a.axisY.lineCoordinates,
          p = [],
          k = this.plotArea,
          m;
        h.save();
        t && r.save();
        h.beginPath();
        h.rect(k.x1, k.y1, k.width, k.height);
        h.clip();
        t && (r.beginPath(), r.rect(k.x1, k.y1, k.width, k.height), r.clip());
        for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
          var q = a.dataSeriesIndexes[n],
            e = this.data[q],
            l = e.dataPoints,
            p = e.id;
          this._eventManager.objectMap[p] = {
            objectType: "dataSeries",
            dataSeriesIndex: q,
          };
          p = V(p);
          r.fillStyle = p;
          p = [];
          f = !0;
          var w = 0,
            x,
            s,
            z,
            v = a.axisY.convertValueToPixel(
              a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
            ),
            F,
            C = null;
          if (0 < l.length) {
            var D = e._colorSet[w % e._colorSet.length],
              u = (e.lineColor = e.options.lineColor || D),
              A = u;
            h.fillStyle = D;
            h.strokeStyle = u;
            h.lineWidth = e.lineThickness;
            c = "solid";
            if (h.setLineDash) {
              var K = I(e.nullDataLineDashType, e.lineThickness);
              c = e.lineDashType;
              var L = I(c, e.lineThickness);
              h.setLineDash(L);
            }
            for (var da = !0; w < l.length; w++)
              if (
                ((z = l[w].x.getTime ? l[w].x.getTime() : l[w].x),
                !(
                  z < a.axisX.dataInfo.viewPortMin ||
                  (z > a.axisX.dataInfo.viewPortMax &&
                    (!e.connectNullData || !da))
                ))
              )
                if ("number" !== typeof l[w].y)
                  e.connectNullData || da || f || b(), (da = !0);
                else {
                  x = a.axisX.convertValueToPixel(z);
                  s = a.axisY.convertValueToPixel(l[w].y);
                  f || da
                    ? (!f && e.connectNullData
                        ? (h.setLineDash &&
                            (e.options.nullDataLineDashType ||
                              (c === e.lineDashType &&
                                e.lineDashType !== e.nullDataLineDashType)) &&
                            ((f = x),
                            (c = s),
                            (x = m.x),
                            (s = m.y),
                            b(),
                            h.moveTo(m.x, m.y),
                            (x = f),
                            (s = c),
                            (C = m),
                            (c = e.nullDataLineDashType),
                            h.setLineDash(K)),
                          h.lineTo(x, s),
                          t && r.lineTo(x, s))
                        : (h.beginPath(),
                          h.moveTo(x, s),
                          t && (r.beginPath(), r.moveTo(x, s)),
                          (C = { x: x, y: s })),
                      (da = f = !1))
                    : (h.lineTo(x, s),
                      t && r.lineTo(x, s),
                      0 == w % 250 && b());
                  m = { x: x, y: s };
                  w < l.length - 1 &&
                    (A !== (l[w].lineColor || u) ||
                      c !== (l[w].lineDashType || e.lineDashType)) &&
                    (b(),
                    (A = l[w].lineColor || u),
                    (h.strokeStyle = A),
                    h.setLineDash &&
                      (l[w].lineDashType
                        ? ((c = l[w].lineDashType),
                          h.setLineDash(I(c, e.lineThickness)))
                        : ((c = e.lineDashType), h.setLineDash(L))));
                  var aa = e.dataPointIds[w];
                  this._eventManager.objectMap[aa] = {
                    id: aa,
                    objectType: "dataPoint",
                    dataSeriesIndex: q,
                    dataPointIndex: w,
                    x1: x,
                    y1: s,
                  };
                  0 !== l[w].markerSize &&
                    (0 < l[w].markerSize || 0 < e.markerSize) &&
                    ((z = e.getMarkerProperties(w, x, s, h)),
                    p.push(z),
                    (aa = V(aa)),
                    t &&
                      p.push({
                        x: x,
                        y: s,
                        ctx: r,
                        type: z.type,
                        size: z.size,
                        color: aa,
                        borderColor: aa,
                        borderThickness: z.borderThickness,
                      }));
                  (l[w].indexLabel ||
                    e.indexLabel ||
                    l[w].indexLabelFormatter ||
                    e.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "area",
                      dataPoint: l[w],
                      dataSeries: e,
                      point: { x: x, y: s },
                      direction: 0 > l[w].y === a.axisY.reversed ? 1 : -1,
                      color: D,
                    });
                }
            b();
            Y.drawMarkers(p);
          }
        }
        t &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (h.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          h.clearRect(k.x1, k.y1, k.width, k.height),
          this._eventManager.ghostCtx.restore());
        h.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: O.xClipAnimation,
          easingFunction: O.easing.linear,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderSplineArea = function (a) {
      function f() {
        var c = u(z, 2);
        if (0 < c.length) {
          if (0 < m.lineThickness) {
            b.beginPath();
            b.moveTo(c[0].x, c[0].y);
            c[0].newStrokeStyle && (b.strokeStyle = c[0].newStrokeStyle);
            c[0].newLineDashArray && b.setLineDash(c[0].newLineDashArray);
            for (var e = 0; e < c.length - 3; e += 3)
              if (
                (b.bezierCurveTo(
                  c[e + 1].x,
                  c[e + 1].y,
                  c[e + 2].x,
                  c[e + 2].y,
                  c[e + 3].x,
                  c[e + 3].y
                ),
                t &&
                  g.bezierCurveTo(
                    c[e + 1].x,
                    c[e + 1].y,
                    c[e + 2].x,
                    c[e + 2].y,
                    c[e + 3].x,
                    c[e + 3].y
                  ),
                c[e + 3].newStrokeStyle || c[e + 3].newLineDashArray)
              )
                b.stroke(),
                  b.beginPath(),
                  b.moveTo(c[e + 3].x, c[e + 3].y),
                  c[e + 3].newStrokeStyle &&
                    (b.strokeStyle = c[e + 3].newStrokeStyle),
                  c[e + 3].newLineDashArray &&
                    b.setLineDash(c[e + 3].newLineDashArray);
            b.stroke();
          }
          b.beginPath();
          b.moveTo(c[0].x, c[0].y);
          t && (g.beginPath(), g.moveTo(c[0].x, c[0].y));
          for (e = 0; e < c.length - 3; e += 3)
            b.bezierCurveTo(
              c[e + 1].x,
              c[e + 1].y,
              c[e + 2].x,
              c[e + 2].y,
              c[e + 3].x,
              c[e + 3].y
            ),
              t &&
                g.bezierCurveTo(
                  c[e + 1].x,
                  c[e + 1].y,
                  c[e + 2].x,
                  c[e + 2].y,
                  c[e + 3].x,
                  c[e + 3].y
                );
          a.axisY.logarithmic ||
          (0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum)
            ? (x = w)
            : 0 > a.axisY.viewportMaximum
            ? (x = h.y1)
            : 0 < a.axisY.viewportMinimum && (x = w);
          s = { x: c[0].x, y: c[0].y };
          b.lineTo(c[c.length - 1].x, x);
          b.lineTo(s.x, x);
          b.closePath();
          b.globalAlpha = m.fillOpacity;
          b.fill();
          b.globalAlpha = 1;
          t &&
            (g.lineTo(c[c.length - 1].x, x),
            g.lineTo(s.x, x),
            g.closePath(),
            g.fill());
        }
      }
      var c = a.targetCanvasCtx || this.plotArea.ctx,
        b = t ? this._preRenderCtx : c;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = this._eventManager.ghostCtx,
          h = a.axisY.lineCoordinates,
          r = [],
          d = this.plotArea;
        b.save();
        t && g.save();
        b.beginPath();
        b.rect(d.x1, d.y1, d.width, d.height);
        b.clip();
        t && (g.beginPath(), g.rect(d.x1, d.y1, d.width, d.height), g.clip());
        for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
          var k = a.dataSeriesIndexes[p],
            m = this.data[k],
            n = m.dataPoints,
            r = m.id;
          this._eventManager.objectMap[r] = {
            objectType: "dataSeries",
            dataSeriesIndex: k,
          };
          r = V(r);
          g.fillStyle = r;
          var r = [],
            q = 0,
            e,
            l,
            w = a.axisY.convertValueToPixel(
              a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
            ),
            x,
            s = null,
            z = [];
          if (0 < n.length) {
            var v = m._colorSet[q % m._colorSet.length],
              F = (m.lineColor = m.options.lineColor || v),
              C = F;
            b.fillStyle = v;
            b.strokeStyle = F;
            b.lineWidth = m.lineThickness;
            var D = "solid";
            if (b.setLineDash) {
              var A = I(m.nullDataLineDashType, m.lineThickness),
                D = m.lineDashType,
                B = I(D, m.lineThickness);
              b.setLineDash(B);
            }
            for (l = !1; q < n.length; q++)
              if (
                ((e = n[q].x.getTime ? n[q].x.getTime() : n[q].x),
                !(
                  e < a.axisX.dataInfo.viewPortMin ||
                  (e > a.axisX.dataInfo.viewPortMax &&
                    (!m.connectNullData || !l))
                ))
              )
                if ("number" !== typeof n[q].y)
                  0 < q &&
                    !l &&
                    (m.connectNullData
                      ? b.setLineDash &&
                        0 < z.length &&
                        (m.options.nullDataLineDashType ||
                          !n[q - 1].lineDashType) &&
                        ((z[z.length - 1].newLineDashArray = A),
                        (D = m.nullDataLineDashType))
                      : (f(), (z = []))),
                    (l = !0);
                else {
                  e = a.axisX.convertValueToPixel(e);
                  l = a.axisY.convertValueToPixel(n[q].y);
                  var K = m.dataPointIds[q];
                  this._eventManager.objectMap[K] = {
                    id: K,
                    objectType: "dataPoint",
                    dataSeriesIndex: k,
                    dataPointIndex: q,
                    x1: e,
                    y1: l,
                  };
                  z[z.length] = { x: e, y: l };
                  q < n.length - 1 &&
                    (C !== (n[q].lineColor || F) ||
                      D !== (n[q].lineDashType || m.lineDashType)) &&
                    ((C = n[q].lineColor || F),
                    (z[z.length - 1].newStrokeStyle = C),
                    b.setLineDash &&
                      (n[q].lineDashType
                        ? ((D = n[q].lineDashType),
                          (z[z.length - 1].newLineDashArray = I(
                            D,
                            m.lineThickness
                          )))
                        : ((D = m.lineDashType),
                          (z[z.length - 1].newLineDashArray = B))));
                  if (
                    0 !== n[q].markerSize &&
                    (0 < n[q].markerSize || 0 < m.markerSize)
                  ) {
                    var L = m.getMarkerProperties(q, e, l, b);
                    r.push(L);
                    K = V(K);
                    t &&
                      r.push({
                        x: e,
                        y: l,
                        ctx: g,
                        type: L.type,
                        size: L.size,
                        color: K,
                        borderColor: K,
                        borderThickness: L.borderThickness,
                      });
                  }
                  (n[q].indexLabel ||
                    m.indexLabel ||
                    n[q].indexLabelFormatter ||
                    m.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "splineArea",
                      dataPoint: n[q],
                      dataSeries: m,
                      point: { x: e, y: l },
                      direction: 0 > n[q].y === a.axisY.reversed ? 1 : -1,
                      color: v,
                    });
                  l = !1;
                }
            f();
            Y.drawMarkers(r);
          }
        }
        t &&
          (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (b.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          b.clearRect(d.x1, d.y1, d.width, d.height),
          this._eventManager.ghostCtx.restore());
        b.restore();
        return {
          source: c,
          dest: this.plotArea.ctx,
          animationCallback: O.xClipAnimation,
          easingFunction: O.easing.linear,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderStepArea = function (a) {
      var f, c;
      function b() {
        C &&
          (0 < e.lineThickness && h.stroke(),
          a.axisY.logarithmic ||
          (0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum)
            ? (F = v)
            : 0 > a.axisY.viewportMaximum
            ? (F = d.y1)
            : 0 < a.axisY.viewportMinimum && (F = v),
          h.lineTo(x, F),
          h.lineTo(C.x, F),
          h.closePath(),
          (h.globalAlpha = e.fillOpacity),
          h.fill(),
          (h.globalAlpha = 1),
          t && (r.lineTo(x, F), r.lineTo(C.x, F), r.closePath(), r.fill()),
          h.beginPath(),
          h.moveTo(x, s),
          r.beginPath(),
          r.moveTo(x, s),
          (C = { x: x, y: s }));
      }
      var g = a.targetCanvasCtx || this.plotArea.ctx,
        h = t ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var r = this._eventManager.ghostCtx,
          d = a.axisY.lineCoordinates,
          p = [],
          k = this.plotArea,
          m;
        h.save();
        t && r.save();
        h.beginPath();
        h.rect(k.x1, k.y1, k.width, k.height);
        h.clip();
        t && (r.beginPath(), r.rect(k.x1, k.y1, k.width, k.height), r.clip());
        for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
          var q = a.dataSeriesIndexes[n],
            e = this.data[q],
            l = e.dataPoints,
            p = e.id;
          this._eventManager.objectMap[p] = {
            objectType: "dataSeries",
            dataSeriesIndex: q,
          };
          p = V(p);
          r.fillStyle = p;
          p = [];
          f = !0;
          var w = 0,
            x,
            s,
            z,
            v = a.axisY.convertValueToPixel(
              a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
            ),
            F,
            C = null;
          c = !1;
          if (0 < l.length) {
            var D = e._colorSet[w % e._colorSet.length],
              u = (e.lineColor = e.options.lineColor || D),
              A = u;
            h.fillStyle = D;
            h.strokeStyle = u;
            h.lineWidth = e.lineThickness;
            var K = "solid";
            if (h.setLineDash) {
              var L = I(e.nullDataLineDashType, e.lineThickness),
                K = e.lineDashType,
                B = I(K, e.lineThickness);
              h.setLineDash(B);
            }
            for (; w < l.length; w++)
              if (
                ((z = l[w].x.getTime ? l[w].x.getTime() : l[w].x),
                !(
                  z < a.axisX.dataInfo.viewPortMin ||
                  (z > a.axisX.dataInfo.viewPortMax &&
                    (!e.connectNullData || !c))
                ))
              ) {
                var aa = s;
                "number" !== typeof l[w].y
                  ? (e.connectNullData || c || f || b(), (c = !0))
                  : ((x = a.axisX.convertValueToPixel(z)),
                    (s = a.axisY.convertValueToPixel(l[w].y)),
                    f || c
                      ? (!f && e.connectNullData
                          ? (h.setLineDash &&
                              (e.options.nullDataLineDashType ||
                                (K === e.lineDashType &&
                                  e.lineDashType !== e.nullDataLineDashType)) &&
                              ((f = x),
                              (c = s),
                              (x = m.x),
                              (s = m.y),
                              b(),
                              h.moveTo(m.x, m.y),
                              (x = f),
                              (s = c),
                              (C = m),
                              (K = e.nullDataLineDashType),
                              h.setLineDash(L)),
                            h.lineTo(x, aa),
                            h.lineTo(x, s),
                            t && (r.lineTo(x, aa), r.lineTo(x, s)))
                          : (h.beginPath(),
                            h.moveTo(x, s),
                            t && (r.beginPath(), r.moveTo(x, s)),
                            (C = { x: x, y: s })),
                        (c = f = !1))
                      : (h.lineTo(x, aa),
                        t && r.lineTo(x, aa),
                        h.lineTo(x, s),
                        t && r.lineTo(x, s),
                        0 == w % 250 && b()),
                    (m = { x: x, y: s }),
                    w < l.length - 1 &&
                      (A !== (l[w].lineColor || u) ||
                        K !== (l[w].lineDashType || e.lineDashType)) &&
                      (b(),
                      (A = l[w].lineColor || u),
                      (h.strokeStyle = A),
                      h.setLineDash &&
                        (l[w].lineDashType
                          ? ((K = l[w].lineDashType),
                            h.setLineDash(I(K, e.lineThickness)))
                          : ((K = e.lineDashType), h.setLineDash(B)))),
                    (z = e.dataPointIds[w]),
                    (this._eventManager.objectMap[z] = {
                      id: z,
                      objectType: "dataPoint",
                      dataSeriesIndex: q,
                      dataPointIndex: w,
                      x1: x,
                      y1: s,
                    }),
                    0 !== l[w].markerSize &&
                      (0 < l[w].markerSize || 0 < e.markerSize) &&
                      ((aa = e.getMarkerProperties(w, x, s, h)),
                      p.push(aa),
                      (z = V(z)),
                      t &&
                        p.push({
                          x: x,
                          y: s,
                          ctx: r,
                          type: aa.type,
                          size: aa.size,
                          color: z,
                          borderColor: z,
                          borderThickness: aa.borderThickness,
                        })),
                    (l[w].indexLabel ||
                      e.indexLabel ||
                      l[w].indexLabelFormatter ||
                      e.indexLabelFormatter) &&
                      this._indexLabels.push({
                        chartType: "stepArea",
                        dataPoint: l[w],
                        dataSeries: e,
                        point: { x: x, y: s },
                        direction: 0 > l[w].y === a.axisY.reversed ? 1 : -1,
                        color: D,
                      }));
              }
            b();
            Y.drawMarkers(p);
          }
        }
        t &&
          (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (h.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          h.clearRect(k.x1, k.y1, k.width, k.height),
          this._eventManager.ghostCtx.restore());
        h.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: O.xClipAnimation,
          easingFunction: O.easing.linear,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderStackedArea = function (a) {
      function f() {
        if (!(1 > k.length)) {
          for (0 < D.lineThickness && b.stroke(); 0 < k.length; ) {
            var a = k.pop();
            b.lineTo(a.x, a.y);
            t && x.lineTo(a.x, a.y);
          }
          b.closePath();
          b.globalAlpha = D.fillOpacity;
          b.fill();
          b.globalAlpha = 1;
          b.beginPath();
          t && (x.closePath(), x.fill(), x.beginPath());
          k = [];
        }
      }
      var c = a.targetCanvasCtx || this.plotArea.ctx,
        b = t ? this._preRenderCtx : c;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = null,
          h = null,
          r = [],
          d = this.plotArea,
          p = [],
          k = [],
          m = [],
          n = [],
          q = 0,
          e,
          l,
          w = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          x = this._eventManager.ghostCtx,
          s,
          z,
          v;
        t && x.beginPath();
        b.save();
        t && x.save();
        b.beginPath();
        b.rect(d.x1, d.y1, d.width, d.height);
        b.clip();
        t && (x.beginPath(), x.rect(d.x1, d.y1, d.width, d.height), x.clip());
        for (var g = [], u = 0; u < a.dataSeriesIndexes.length; u++) {
          var C = a.dataSeriesIndexes[u],
            D = this.data[C],
            A = D.dataPoints;
          D.dataPointIndexes = [];
          for (q = 0; q < A.length; q++)
            (C = A[q].x.getTime ? A[q].x.getTime() : A[q].x),
              (D.dataPointIndexes[C] = q),
              g[C] || (m.push(C), (g[C] = !0));
          m.sort(Ta);
        }
        for (u = 0; u < a.dataSeriesIndexes.length; u++) {
          C = a.dataSeriesIndexes[u];
          D = this.data[C];
          A = D.dataPoints;
          z = !0;
          k = [];
          q = D.id;
          this._eventManager.objectMap[q] = {
            objectType: "dataSeries",
            dataSeriesIndex: C,
          };
          q = V(q);
          x.fillStyle = q;
          if (0 < m.length) {
            var g = D._colorSet[0],
              B = (D.lineColor = D.options.lineColor || g),
              K = B;
            b.fillStyle = g;
            b.strokeStyle = B;
            b.lineWidth = D.lineThickness;
            v = "solid";
            if (b.setLineDash) {
              var L = I(D.nullDataLineDashType, D.lineThickness);
              v = D.lineDashType;
              var da = I(v, D.lineThickness);
              b.setLineDash(da);
            }
            for (var aa = !0, q = 0; q < m.length; q++) {
              var h = m[q],
                ha = null,
                ha =
                  0 <= D.dataPointIndexes[h]
                    ? A[D.dataPointIndexes[h]]
                    : { x: h, y: null };
              if (
                !(
                  h < a.axisX.dataInfo.viewPortMin ||
                  (h > a.axisX.dataInfo.viewPortMax &&
                    (!D.connectNullData || !aa))
                )
              )
                if ("number" !== typeof ha.y)
                  D.connectNullData || aa || z || f(), (aa = !0);
                else {
                  e = a.axisX.convertValueToPixel(h);
                  var pa = p[h] ? p[h] : 0;
                  if (
                    a.axisY.logarithmic ||
                    (a.axisY.scaleBreaks &&
                      0 < a.axisY.scaleBreaks._appliedBreaks.length)
                  ) {
                    n[h] = ha.y + (n[h] ? n[h] : 0);
                    if (0 >= n[h] && a.axisY.logarithmic) continue;
                    l = a.axisY.convertValueToPixel(n[h]);
                  } else (l = a.axisY.convertValueToPixel(ha.y)), (l -= pa);
                  k.push({ x: e, y: w - pa });
                  p[h] = w - l;
                  z || aa
                    ? (!z && D.connectNullData
                        ? (b.setLineDash &&
                            (D.options.nullDataLineDashType ||
                              (v === D.lineDashType &&
                                D.lineDashType !== D.nullDataLineDashType)) &&
                            ((z = k.pop()),
                            (v = k[k.length - 1]),
                            f(),
                            b.moveTo(s.x, s.y),
                            k.push(v),
                            k.push(z),
                            (v = D.nullDataLineDashType),
                            b.setLineDash(L)),
                          b.lineTo(e, l),
                          t && x.lineTo(e, l))
                        : (b.beginPath(),
                          b.moveTo(e, l),
                          t && (x.beginPath(), x.moveTo(e, l))),
                      (aa = z = !1))
                    : (b.lineTo(e, l),
                      t && x.lineTo(e, l),
                      0 == q % 250 &&
                        (f(),
                        b.moveTo(e, l),
                        t && x.moveTo(e, l),
                        k.push({ x: e, y: w - pa })));
                  s = { x: e, y: l };
                  q < A.length - 1 &&
                    (K !== (A[q].lineColor || B) ||
                      v !== (A[q].lineDashType || D.lineDashType)) &&
                    (f(),
                    b.beginPath(),
                    b.moveTo(e, l),
                    k.push({ x: e, y: w - pa }),
                    (K = A[q].lineColor || B),
                    (b.strokeStyle = K),
                    b.setLineDash &&
                      (A[q].lineDashType
                        ? ((v = A[q].lineDashType),
                          b.setLineDash(I(v, D.lineThickness)))
                        : ((v = D.lineDashType), b.setLineDash(da))));
                  if (0 <= D.dataPointIndexes[h]) {
                    var la = D.dataPointIds[D.dataPointIndexes[h]];
                    this._eventManager.objectMap[la] = {
                      id: la,
                      objectType: "dataPoint",
                      dataSeriesIndex: C,
                      dataPointIndex: D.dataPointIndexes[h],
                      x1: e,
                      y1: l,
                    };
                  }
                  0 <= D.dataPointIndexes[h] &&
                    0 !== ha.markerSize &&
                    (0 < ha.markerSize || 0 < D.markerSize) &&
                    ((pa = D.getMarkerProperties(
                      D.dataPointIndexes[h],
                      e,
                      l,
                      b
                    )),
                    r.push(pa),
                    (h = V(la)),
                    t &&
                      r.push({
                        x: e,
                        y: l,
                        ctx: x,
                        type: pa.type,
                        size: pa.size,
                        color: h,
                        borderColor: h,
                        borderThickness: pa.borderThickness,
                      }));
                  (ha.indexLabel ||
                    D.indexLabel ||
                    ha.indexLabelFormatter ||
                    D.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "stackedArea",
                      dataPoint: ha,
                      dataSeries: D,
                      point: { x: e, y: l },
                      direction: 0 > ha.y === a.axisY.reversed ? 1 : -1,
                      color: g,
                    });
                }
            }
            f();
            b.moveTo(e, l);
            t && x.moveTo(e, l);
          }
          delete D.dataPointIndexes;
        }
        Y.drawMarkers(r);
        t &&
          (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (b.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          b.clearRect(d.x1, d.y1, d.width, d.height),
          x.restore());
        b.restore();
        return {
          source: c,
          dest: this.plotArea.ctx,
          animationCallback: O.xClipAnimation,
          easingFunction: O.easing.linear,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderStackedArea100 = function (a) {
      function f() {
        for (0 < D.lineThickness && b.stroke(); 0 < k.length; ) {
          var a = k.pop();
          b.lineTo(a.x, a.y);
          t && v.lineTo(a.x, a.y);
        }
        b.closePath();
        b.globalAlpha = D.fillOpacity;
        b.fill();
        b.globalAlpha = 1;
        b.beginPath();
        t && (v.closePath(), v.fill(), v.beginPath());
        k = [];
      }
      var c = a.targetCanvasCtx || this.plotArea.ctx,
        b = t ? this._preRenderCtx : c;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = null,
          h = null,
          r = this.plotArea,
          d = [],
          p = [],
          k = [],
          m = [],
          n = [],
          q = 0,
          e,
          l,
          w,
          x,
          s,
          z = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          v = this._eventManager.ghostCtx;
        b.save();
        t && v.save();
        b.beginPath();
        b.rect(r.x1, r.y1, r.width, r.height);
        b.clip();
        t && (v.beginPath(), v.rect(r.x1, r.y1, r.width, r.height), v.clip());
        for (var g = [], u = 0; u < a.dataSeriesIndexes.length; u++) {
          var C = a.dataSeriesIndexes[u],
            D = this.data[C],
            A = D.dataPoints;
          D.dataPointIndexes = [];
          for (q = 0; q < A.length; q++)
            (C = A[q].x.getTime ? A[q].x.getTime() : A[q].x),
              (D.dataPointIndexes[C] = q),
              g[C] || (m.push(C), (g[C] = !0));
          m.sort(Ta);
        }
        for (u = 0; u < a.dataSeriesIndexes.length; u++) {
          C = a.dataSeriesIndexes[u];
          D = this.data[C];
          A = D.dataPoints;
          x = !0;
          g = D.id;
          this._eventManager.objectMap[g] = {
            objectType: "dataSeries",
            dataSeriesIndex: C,
          };
          g = V(g);
          v.fillStyle = g;
          k = [];
          if (0 < m.length) {
            var g = D._colorSet[q % D._colorSet.length],
              B = (D.lineColor = D.options.lineColor || g),
              K = B;
            b.fillStyle = g;
            b.strokeStyle = B;
            b.lineWidth = D.lineThickness;
            s = "solid";
            if (b.setLineDash) {
              var L = I(D.nullDataLineDashType, D.lineThickness);
              s = D.lineDashType;
              var da = I(s, D.lineThickness);
              b.setLineDash(da);
            }
            for (var aa = !0, q = 0; q < m.length; q++) {
              var h = m[q],
                ha = null,
                ha =
                  0 <= D.dataPointIndexes[h]
                    ? A[D.dataPointIndexes[h]]
                    : { x: h, y: null };
              if (
                !(
                  h < a.axisX.dataInfo.viewPortMin ||
                  (h > a.axisX.dataInfo.viewPortMax &&
                    (!D.connectNullData || !aa))
                )
              )
                if ("number" !== typeof ha.y)
                  D.connectNullData || aa || x || f(), (aa = !0);
                else {
                  var pa;
                  pa =
                    0 !== a.dataPointYSums[h]
                      ? 100 * (ha.y / a.dataPointYSums[h])
                      : 0;
                  e = a.axisX.convertValueToPixel(h);
                  var la = p[h] ? p[h] : 0;
                  if (
                    a.axisY.logarithmic ||
                    (a.axisY.scaleBreaks &&
                      0 < a.axisY.scaleBreaks._appliedBreaks.length)
                  ) {
                    n[h] = pa + (n[h] ? n[h] : 0);
                    if (0 >= n[h] && a.axisY.logarithmic) continue;
                    l = a.axisY.convertValueToPixel(n[h]);
                  } else (l = a.axisY.convertValueToPixel(pa)), (l -= la);
                  k.push({ x: e, y: z - la });
                  p[h] = z - l;
                  x || aa
                    ? (!x && D.connectNullData
                        ? (b.setLineDash &&
                            (D.options.nullDataLineDashType ||
                              (s === D.lineDashType &&
                                D.lineDashType !== D.nullDataLineDashType)) &&
                            ((x = k.pop()),
                            (s = k[k.length - 1]),
                            f(),
                            b.moveTo(w.x, w.y),
                            k.push(s),
                            k.push(x),
                            (s = D.nullDataLineDashType),
                            b.setLineDash(L)),
                          b.lineTo(e, l),
                          t && v.lineTo(e, l))
                        : (b.beginPath(),
                          b.moveTo(e, l),
                          t && (v.beginPath(), v.moveTo(e, l))),
                      (aa = x = !1))
                    : (b.lineTo(e, l),
                      t && v.lineTo(e, l),
                      0 == q % 250 &&
                        (f(),
                        b.moveTo(e, l),
                        t && v.moveTo(e, l),
                        k.push({ x: e, y: z - la })));
                  w = { x: e, y: l };
                  q < A.length - 1 &&
                    (K !== (A[q].lineColor || B) ||
                      s !== (A[q].lineDashType || D.lineDashType)) &&
                    (f(),
                    b.beginPath(),
                    b.moveTo(e, l),
                    k.push({ x: e, y: z - la }),
                    (K = A[q].lineColor || B),
                    (b.strokeStyle = K),
                    b.setLineDash &&
                      (A[q].lineDashType
                        ? ((s = A[q].lineDashType),
                          b.setLineDash(I(s, D.lineThickness)))
                        : ((s = D.lineDashType), b.setLineDash(da))));
                  if (0 <= D.dataPointIndexes[h]) {
                    var E = D.dataPointIds[D.dataPointIndexes[h]];
                    this._eventManager.objectMap[E] = {
                      id: E,
                      objectType: "dataPoint",
                      dataSeriesIndex: C,
                      dataPointIndex: D.dataPointIndexes[h],
                      x1: e,
                      y1: l,
                    };
                  }
                  0 <= D.dataPointIndexes[h] &&
                    0 !== ha.markerSize &&
                    (0 < ha.markerSize || 0 < D.markerSize) &&
                    ((la = D.getMarkerProperties(
                      D.dataPointIndexes[h],
                      e,
                      l,
                      b
                    )),
                    d.push(la),
                    (h = V(E)),
                    t &&
                      d.push({
                        x: e,
                        y: l,
                        ctx: v,
                        type: la.type,
                        size: la.size,
                        color: h,
                        borderColor: h,
                        borderThickness: la.borderThickness,
                      }));
                  (ha.indexLabel ||
                    D.indexLabel ||
                    ha.indexLabelFormatter ||
                    D.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "stackedArea100",
                      dataPoint: ha,
                      dataSeries: D,
                      point: { x: e, y: l },
                      direction: 0 > ha.y === a.axisY.reversed ? 1 : -1,
                      color: g,
                    });
                }
            }
            f();
            b.moveTo(e, l);
            t && v.moveTo(e, l);
          }
          delete D.dataPointIndexes;
        }
        Y.drawMarkers(d);
        t &&
          (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (b.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          b.clearRect(r.x1, r.y1, r.width, r.height),
          v.restore());
        b.restore();
        return {
          source: c,
          dest: this.plotArea.ctx,
          animationCallback: O.xClipAnimation,
          easingFunction: O.easing.linear,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderBubble = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = this.plotArea,
          g = 0,
          h,
          r;
        c.save();
        t && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(b.x1, b.y1, b.width, b.height);
        c.clip();
        t &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height),
          this._eventManager.ghostCtx.clip());
        for (
          var d = -Infinity, p = Infinity, k = 0;
          k < a.dataSeriesIndexes.length;
          k++
        )
          for (
            var m = a.dataSeriesIndexes[k],
              n = this.data[m],
              q = n.dataPoints,
              e = 0,
              g = 0;
            g < q.length;
            g++
          )
            (h = q[g].getTime ? (h = q[g].x.getTime()) : (h = q[g].x)),
              h < a.axisX.dataInfo.viewPortMin ||
                h > a.axisX.dataInfo.viewPortMax ||
                "undefined" === typeof q[g].z ||
                ((e = q[g].z), e > d && (d = e), e < p && (p = e));
        for (
          var l = 25 * Math.PI,
            w = Math.max(
              Math.pow((0.25 * Math.min(b.height, b.width)) / 2, 2) * Math.PI,
              l
            ),
            k = 0;
          k < a.dataSeriesIndexes.length;
          k++
        )
          if (
            ((m = a.dataSeriesIndexes[k]),
            (n = this.data[m]),
            (q = n.dataPoints),
            0 < q.length)
          )
            for (c.strokeStyle = "#4572A7 ", g = 0; g < q.length; g++)
              if (
                ((h = q[g].getTime ? (h = q[g].x.getTime()) : (h = q[g].x)),
                !(
                  h < a.axisX.dataInfo.viewPortMin ||
                  h > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof q[g].y)
              ) {
                h = a.axisX.convertValueToPixel(h);
                r = a.axisY.convertValueToPixel(q[g].y);
                var e = q[g].z,
                  x =
                    2 *
                    Math.max(
                      Math.sqrt(
                        (d === p ? w / 2 : l + ((w - l) / (d - p)) * (e - p)) /
                          Math.PI
                      ) << 0,
                      1
                    ),
                  e = n.getMarkerProperties(g, c);
                e.size = x;
                c.globalAlpha = n.fillOpacity;
                Y.drawMarker(
                  h,
                  r,
                  c,
                  e.type,
                  e.size,
                  e.color,
                  e.borderColor,
                  e.borderThickness
                );
                c.globalAlpha = 1;
                var s = n.dataPointIds[g];
                this._eventManager.objectMap[s] = {
                  id: s,
                  objectType: "dataPoint",
                  dataSeriesIndex: m,
                  dataPointIndex: g,
                  x1: h,
                  y1: r,
                  size: x,
                };
                x = V(s);
                t &&
                  Y.drawMarker(
                    h,
                    r,
                    this._eventManager.ghostCtx,
                    e.type,
                    e.size,
                    x,
                    x,
                    e.borderThickness
                  );
                (q[g].indexLabel ||
                  n.indexLabel ||
                  q[g].indexLabelFormatter ||
                  n.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "bubble",
                    dataPoint: q[g],
                    dataSeries: n,
                    point: { x: h, y: r },
                    direction: 1,
                    bounds: {
                      x1: h - e.size / 2,
                      y1: r - e.size / 2,
                      x2: h + e.size / 2,
                      y2: r + e.size / 2,
                    },
                    color: null,
                  });
              }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(b.x1, b.y1, b.width, b.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.fadeInAnimation,
          easingFunction: O.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderScatter = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = this.plotArea,
          g = 0,
          h,
          r;
        c.save();
        t && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(b.x1, b.y1, b.width, b.height);
        c.clip();
        t &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height),
          this._eventManager.ghostCtx.clip());
        for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
          var p = a.dataSeriesIndexes[d],
            k = this.data[p],
            m = k.dataPoints;
          if (0 < m.length) {
            c.strokeStyle = "#4572A7 ";
            Math.pow((0.3 * Math.min(b.height, b.width)) / 2, 2);
            for (var n = 0, q = 0, g = 0; g < m.length; g++)
              if (
                ((h = m[g].getTime ? (h = m[g].x.getTime()) : (h = m[g].x)),
                !(
                  h < a.axisX.dataInfo.viewPortMin ||
                  h > a.axisX.dataInfo.viewPortMax
                ) && "number" === typeof m[g].y)
              ) {
                h = a.axisX.convertValueToPixel(h);
                r = a.axisY.convertValueToPixel(m[g].y);
                var e = k.getMarkerProperties(g, h, r, c);
                c.globalAlpha = k.fillOpacity;
                Y.drawMarker(
                  e.x,
                  e.y,
                  e.ctx,
                  e.type,
                  e.size,
                  e.color,
                  e.borderColor,
                  e.borderThickness
                );
                c.globalAlpha = 1;
                (Math.sqrt((n - h) * (n - h) + (q - r) * (q - r)) <
                  Math.min(e.size, 5) &&
                  m.length >
                    Math.min(this.plotArea.width, this.plotArea.height)) ||
                  ((n = k.dataPointIds[g]),
                  (this._eventManager.objectMap[n] = {
                    id: n,
                    objectType: "dataPoint",
                    dataSeriesIndex: p,
                    dataPointIndex: g,
                    x1: h,
                    y1: r,
                  }),
                  (n = V(n)),
                  t &&
                    Y.drawMarker(
                      e.x,
                      e.y,
                      this._eventManager.ghostCtx,
                      e.type,
                      e.size,
                      n,
                      n,
                      e.borderThickness
                    ),
                  (m[g].indexLabel ||
                    k.indexLabel ||
                    m[g].indexLabelFormatter ||
                    k.indexLabelFormatter) &&
                    this._indexLabels.push({
                      chartType: "scatter",
                      dataPoint: m[g],
                      dataSeries: k,
                      point: { x: h, y: r },
                      direction: 1,
                      bounds: {
                        x1: h - e.size / 2,
                        y1: r - e.size / 2,
                        x2: h + e.size / 2,
                        y2: r + e.size / 2,
                      },
                      color: null,
                    }),
                  (n = h),
                  (q = r));
              }
          }
        }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(b.x1, b.y1, b.width, b.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.fadeInAnimation,
          easingFunction: O.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderCandlestick = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f,
        b = this._eventManager.ghostCtx;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = null,
          h = null,
          r = this.plotArea,
          d = 0,
          l,
          k,
          m,
          n,
          q,
          e,
          g = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          h = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 0.015 * this.width,
          u = a.axisX.dataInfo.minDiff;
        isFinite(u) || (u = 0.3 * Math.abs(a.axisX.range));
        u = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.7 *
              r.width *
              (a.axisX.logarithmic
                ? Math.log(u) / Math.log(a.axisX.range)
                : Math.abs(u) / Math.abs(a.axisX.range))) <<
            0;
        this.dataPointMaxWidth &&
          g > h &&
          (g = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            h
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          h < g &&
          (h = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            g
          ));
        u < g && (u = g);
        u > h && (u = h);
        c.save();
        t && b.save();
        c.beginPath();
        c.rect(r.x1, r.y1, r.width, r.height);
        c.clip();
        t && (b.beginPath(), b.rect(r.x1, r.y1, r.width, r.height), b.clip());
        for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
          var x = a.dataSeriesIndexes[w],
            s = this.data[x],
            z = s.dataPoints;
          if (0 < z.length)
            for (
              var v = 5 < u && s.bevelEnabled ? !0 : !1, d = 0;
              d < z.length;
              d++
            )
              if (
                (z[d].getTime ? (e = z[d].x.getTime()) : (e = z[d].x),
                !(
                  e < a.axisX.dataInfo.viewPortMin ||
                  e > a.axisX.dataInfo.viewPortMax
                ) &&
                  !p(z[d].y) &&
                  z[d].y.length &&
                  "number" === typeof z[d].y[0] &&
                  "number" === typeof z[d].y[1] &&
                  "number" === typeof z[d].y[2] &&
                  "number" === typeof z[d].y[3])
              ) {
                l = a.axisX.convertValueToPixel(e);
                k = a.axisY.convertValueToPixel(z[d].y[0]);
                m = a.axisY.convertValueToPixel(z[d].y[1]);
                n = a.axisY.convertValueToPixel(z[d].y[2]);
                q = a.axisY.convertValueToPixel(z[d].y[3]);
                var A = (l - u / 2) << 0,
                  C = (A + u) << 0,
                  h = s.options.fallingColor ? s.fallingColor : s._colorSet[0],
                  g = z[d].color ? z[d].color : s._colorSet[0],
                  D = Math.round(Math.max(1, 0.15 * u)),
                  B = 0 === D % 2 ? 0 : 0.5,
                  I = s.dataPointIds[d];
                this._eventManager.objectMap[I] = {
                  id: I,
                  objectType: "dataPoint",
                  dataSeriesIndex: x,
                  dataPointIndex: d,
                  x1: A,
                  y1: k,
                  x2: C,
                  y2: m,
                  x3: l,
                  y3: n,
                  x4: l,
                  y4: q,
                  borderThickness: D,
                  color: g,
                };
                c.strokeStyle = g;
                c.beginPath();
                c.lineWidth = D;
                b.lineWidth = Math.max(D, 4);
                "candlestick" === s.type
                  ? (c.moveTo(l - B, m),
                    c.lineTo(l - B, Math.min(k, q)),
                    c.stroke(),
                    c.moveTo(l - B, Math.max(k, q)),
                    c.lineTo(l - B, n),
                    c.stroke(),
                    ba(
                      c,
                      A,
                      Math.min(k, q),
                      C,
                      Math.max(k, q),
                      z[d].y[0] <= z[d].y[3] ? s.risingColor : h,
                      D,
                      g,
                      v,
                      v,
                      !1,
                      !1,
                      s.fillOpacity
                    ),
                    t &&
                      ((g = V(I)),
                      (b.strokeStyle = g),
                      b.moveTo(l - B, m),
                      b.lineTo(l - B, Math.min(k, q)),
                      b.stroke(),
                      b.moveTo(l - B, Math.max(k, q)),
                      b.lineTo(l - B, n),
                      b.stroke(),
                      ba(
                        b,
                        A,
                        Math.min(k, q),
                        C,
                        Math.max(k, q),
                        g,
                        0,
                        null,
                        !1,
                        !1,
                        !1,
                        !1
                      )))
                  : "ohlc" === s.type &&
                    (c.moveTo(l - B, m),
                    c.lineTo(l - B, n),
                    c.stroke(),
                    c.beginPath(),
                    c.moveTo(l, k),
                    c.lineTo(A, k),
                    c.stroke(),
                    c.beginPath(),
                    c.moveTo(l, q),
                    c.lineTo(C, q),
                    c.stroke(),
                    t &&
                      ((g = V(I)),
                      (b.strokeStyle = g),
                      b.moveTo(l - B, m),
                      b.lineTo(l - B, n),
                      b.stroke(),
                      b.beginPath(),
                      b.moveTo(l, k),
                      b.lineTo(A, k),
                      b.stroke(),
                      b.beginPath(),
                      b.moveTo(l, q),
                      b.lineTo(C, q),
                      b.stroke()));
                (z[d].indexLabel ||
                  s.indexLabel ||
                  z[d].indexLabelFormatter ||
                  s.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: s.type,
                    dataPoint: z[d],
                    dataSeries: s,
                    point: { x: A + (C - A) / 2, y: a.axisY.reversed ? n : m },
                    direction: 1,
                    bounds: {
                      x1: A,
                      y1: Math.min(m, n),
                      x2: C,
                      y2: Math.max(m, n),
                    },
                    color: g,
                  });
              }
        }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(r.x1, r.y1, r.width, r.height),
          b.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.fadeInAnimation,
          easingFunction: O.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderBoxAndWhisker = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f,
        b = this._eventManager.ghostCtx;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = null,
          h = this.plotArea,
          r = 0,
          d,
          l,
          k,
          m,
          n,
          q,
          e,
          g = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1,
          r = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 0.015 * this.width,
          u = a.axisX.dataInfo.minDiff;
        isFinite(u) || (u = 0.3 * Math.abs(a.axisX.range));
        u = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.7 *
              h.width *
              (a.axisX.logarithmic
                ? Math.log(u) / Math.log(a.axisX.range)
                : Math.abs(u) / Math.abs(a.axisX.range))) <<
            0;
        this.dataPointMaxWidth &&
          g > r &&
          (g = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            r
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          r < g &&
          (r = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            g
          ));
        u < g && (u = g);
        u > r && (u = r);
        c.save();
        t && b.save();
        c.beginPath();
        c.rect(h.x1, h.y1, h.width, h.height);
        c.clip();
        t && (b.beginPath(), b.rect(h.x1, h.y1, h.width, h.height), b.clip());
        for (
          var w = !1, w = !!a.axisY.reversed, x = 0;
          x < a.dataSeriesIndexes.length;
          x++
        ) {
          var s = a.dataSeriesIndexes[x],
            z = this.data[s],
            v = z.dataPoints;
          if (0 < v.length)
            for (
              var A = 5 < u && z.bevelEnabled ? !0 : !1, r = 0;
              r < v.length;
              r++
            )
              if (
                (v[r].getTime ? (e = v[r].x.getTime()) : (e = v[r].x),
                !(
                  e < a.axisX.dataInfo.viewPortMin ||
                  e > a.axisX.dataInfo.viewPortMax
                ) &&
                  !p(v[r].y) &&
                  v[r].y.length &&
                  "number" === typeof v[r].y[0] &&
                  "number" === typeof v[r].y[1] &&
                  "number" === typeof v[r].y[2] &&
                  "number" === typeof v[r].y[3] &&
                  "number" === typeof v[r].y[4] &&
                  5 === v[r].y.length)
              ) {
                d = a.axisX.convertValueToPixel(e);
                l = a.axisY.convertValueToPixel(v[r].y[0]);
                k = a.axisY.convertValueToPixel(v[r].y[1]);
                m = a.axisY.convertValueToPixel(v[r].y[2]);
                n = a.axisY.convertValueToPixel(v[r].y[3]);
                q = a.axisY.convertValueToPixel(v[r].y[4]);
                var C = (d - u / 2) << 0,
                  D = (d + u / 2) << 0,
                  g = v[r].color ? v[r].color : z._colorSet[0],
                  B = Math.round(Math.max(1, 0.15 * u)),
                  G = 0 === B % 2 ? 0 : 0.5,
                  K = v[r].whiskerColor
                    ? v[r].whiskerColor
                    : v[r].color
                    ? z.whiskerColor
                      ? z.whiskerColor
                      : v[r].color
                    : z.whiskerColor
                    ? z.whiskerColor
                    : g,
                  L =
                    "number" === typeof v[r].whiskerThickness
                      ? v[r].whiskerThickness
                      : "number" === typeof z.options.whiskerThickness
                      ? z.whiskerThickness
                      : B,
                  da = v[r].whiskerDashType
                    ? v[r].whiskerDashType
                    : z.whiskerDashType,
                  aa = p(v[r].whiskerLength)
                    ? p(z.options.whiskerLength)
                      ? u
                      : z.whiskerLength
                    : v[r].whiskerLength,
                  aa =
                    "number" === typeof aa
                      ? 0 >= aa
                        ? 0
                        : aa >= u
                        ? u
                        : aa
                      : "string" === typeof aa
                      ? (parseInt(aa) * u) / 100 > u
                        ? u
                        : (parseInt(aa) * u) / 100
                      : u,
                  ha = 1 === Math.round(L) % 2 ? 0.5 : 0,
                  pa = v[r].stemColor
                    ? v[r].stemColor
                    : v[r].color
                    ? z.stemColor
                      ? z.stemColor
                      : v[r].color
                    : z.stemColor
                    ? z.stemColor
                    : g,
                  la =
                    "number" === typeof v[r].stemThickness
                      ? v[r].stemThickness
                      : "number" === typeof z.options.stemThickness
                      ? z.stemThickness
                      : B,
                  E = 1 === Math.round(la) % 2 ? 0.5 : 0,
                  M = v[r].stemDashType ? v[r].stemDashType : z.stemDashType,
                  Q = v[r].lineColor
                    ? v[r].lineColor
                    : v[r].color
                    ? z.lineColor
                      ? z.lineColor
                      : v[r].color
                    : z.lineColor
                    ? z.lineColor
                    : g,
                  P =
                    "number" === typeof v[r].lineThickness
                      ? v[r].lineThickness
                      : "number" === typeof z.options.lineThickness
                      ? z.lineThickness
                      : B,
                  T = v[r].lineDashType ? v[r].lineDashType : z.lineDashType,
                  R = 1 === Math.round(P) % 2 ? 0.5 : 0,
                  N = z.upperBoxColor,
                  pb = z.lowerBoxColor,
                  ta = p(z.options.fillOpacity) ? 1 : z.fillOpacity,
                  S = z.dataPointIds[r];
                this._eventManager.objectMap[S] = {
                  id: S,
                  objectType: "dataPoint",
                  dataSeriesIndex: s,
                  dataPointIndex: r,
                  x1: C,
                  y1: l,
                  x2: D,
                  y2: k,
                  x3: d,
                  y3: m,
                  x4: d,
                  y4: n,
                  y5: q,
                  borderThickness: B,
                  color: g,
                  stemThickness: la,
                  stemColor: pa,
                  whiskerThickness: L,
                  whiskerLength: aa,
                  whiskerColor: K,
                  lineThickness: P,
                  lineColor: Q,
                };
                c.save();
                0 < la &&
                  (c.beginPath(),
                  (c.strokeStyle = pa),
                  (c.lineWidth = la),
                  c.setLineDash && c.setLineDash(I(M, la)),
                  c.moveTo(d - E, k),
                  c.lineTo(d - E, l),
                  c.stroke(),
                  c.moveTo(d - E, n),
                  c.lineTo(d - E, m),
                  c.stroke());
                c.restore();
                b.lineWidth = Math.max(B, 4);
                c.beginPath();
                ba(
                  c,
                  C,
                  Math.min(q, k),
                  D,
                  Math.max(k, q),
                  pb,
                  0,
                  g,
                  w ? A : !1,
                  w ? !1 : A,
                  !1,
                  !1,
                  ta
                );
                c.beginPath();
                ba(
                  c,
                  C,
                  Math.min(m, q),
                  D,
                  Math.max(q, m),
                  N,
                  0,
                  g,
                  w ? !1 : A,
                  w ? A : !1,
                  !1,
                  !1,
                  ta
                );
                c.beginPath();
                c.lineWidth = B;
                c.strokeStyle = g;
                c.rect(
                  C - G,
                  Math.min(k, m) - G,
                  D - C + 2 * G,
                  Math.max(k, m) - Math.min(k, m) + 2 * G
                );
                c.stroke();
                c.save();
                0 < P &&
                  (c.beginPath(),
                  (c.globalAlpha = 1),
                  c.setLineDash && c.setLineDash(I(T, P)),
                  (c.strokeStyle = Q),
                  (c.lineWidth = P),
                  c.moveTo(C, q - R),
                  c.lineTo(D, q - R),
                  c.stroke());
                c.restore();
                c.save();
                0 < L &&
                  (c.beginPath(),
                  c.setLineDash && c.setLineDash(I(da, L)),
                  (c.strokeStyle = K),
                  (c.lineWidth = L),
                  c.moveTo((d - aa / 2) << 0, n - ha),
                  c.lineTo((d + aa / 2) << 0, n - ha),
                  c.stroke(),
                  c.moveTo((d - aa / 2) << 0, l + ha),
                  c.lineTo((d + aa / 2) << 0, l + ha),
                  c.stroke());
                c.restore();
                t &&
                  ((g = V(S)),
                  (b.strokeStyle = g),
                  (b.lineWidth = la),
                  0 < la &&
                    (b.moveTo(d - G - E, k),
                    b.lineTo(d - G - E, Math.max(l, n)),
                    b.stroke(),
                    b.moveTo(d - G - E, Math.min(l, n)),
                    b.lineTo(d - G - E, m),
                    b.stroke()),
                  ba(
                    b,
                    C,
                    Math.max(k, m),
                    D,
                    Math.min(k, m),
                    g,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  ),
                  0 < L &&
                    (b.beginPath(),
                    (b.lineWidth = L),
                    b.moveTo(d + aa / 2, n - ha),
                    b.lineTo(d - aa / 2, n - ha),
                    b.stroke(),
                    b.moveTo(d + aa / 2, l + ha),
                    b.lineTo(d - aa / 2, l + ha),
                    b.stroke()));
                (v[r].indexLabel ||
                  z.indexLabel ||
                  v[r].indexLabelFormatter ||
                  z.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: z.type,
                    dataPoint: v[r],
                    dataSeries: z,
                    point: { x: C + (D - C) / 2, y: a.axisY.reversed ? l : n },
                    direction: 1,
                    bounds: {
                      x1: C,
                      y1: Math.min(l, n),
                      x2: D,
                      y2: Math.max(l, n),
                    },
                    color: g,
                  });
              }
        }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(h.x1, h.y1, h.width, h.height),
          b.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.fadeInAnimation,
          easingFunction: O.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderRangeColumn = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          g = this.plotArea,
          h = 0,
          r,
          d,
          l,
          h = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1;
        r = this.options.dataPointMaxWidth
          ? this.dataPointMaxWidth
          : this.options.dataPointWidth
          ? this.dataPointWidth
          : 0.03 * this.width;
        var k = a.axisX.dataInfo.minDiff;
        isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
        k = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((g.width *
                (a.axisX.logarithmic
                  ? Math.log(k) / Math.log(a.axisX.range)
                  : Math.abs(k) / Math.abs(a.axisX.range))) /
                a.plotType.totalDataSeries)) <<
            0;
        this.dataPointMaxWidth &&
          h > r &&
          (h = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            r
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          r < h &&
          (r = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            h
          ));
        k < h && (k = h);
        k > r && (k = r);
        c.save();
        t && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(g.x1, g.y1, g.width, g.height);
        c.clip();
        t &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.clip());
        for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
          var n = a.dataSeriesIndexes[m],
            q = this.data[n],
            e = q.dataPoints;
          if (0 < e.length)
            for (
              var u = 5 < k && q.bevelEnabled ? !0 : !1, h = 0;
              h < e.length;
              h++
            )
              if (
                (e[h].getTime ? (l = e[h].x.getTime()) : (l = e[h].x),
                !(
                  l < a.axisX.dataInfo.viewPortMin ||
                  l > a.axisX.dataInfo.viewPortMax
                ) &&
                  !p(e[h].y) &&
                  e[h].y.length &&
                  "number" === typeof e[h].y[0] &&
                  "number" === typeof e[h].y[1])
              ) {
                b = a.axisX.convertValueToPixel(l);
                r = a.axisY.convertValueToPixel(e[h].y[0]);
                d = a.axisY.convertValueToPixel(e[h].y[1]);
                var w = a.axisX.reversed
                    ? (b +
                        (a.plotType.totalDataSeries * k) / 2 -
                        (a.previousDataSeriesCount + m) * k) <<
                      0
                    : (b -
                        (a.plotType.totalDataSeries * k) / 2 +
                        (a.previousDataSeriesCount + m) * k) <<
                      0,
                  x = a.axisX.reversed ? (w - k) << 0 : (w + k) << 0,
                  b = e[h].color
                    ? e[h].color
                    : q._colorSet[h % q._colorSet.length];
                if (r > d) {
                  var s = r;
                  r = d;
                  d = s;
                }
                s = q.dataPointIds[h];
                this._eventManager.objectMap[s] = {
                  id: s,
                  objectType: "dataPoint",
                  dataSeriesIndex: n,
                  dataPointIndex: h,
                  x1: w,
                  y1: r,
                  x2: x,
                  y2: d,
                };
                ba(
                  c,
                  a.axisX.reversed ? x : w,
                  r,
                  a.axisX.reversed ? w : x,
                  d,
                  b,
                  0,
                  b,
                  u,
                  u,
                  !1,
                  !1,
                  q.fillOpacity
                );
                b = V(s);
                t &&
                  ba(
                    this._eventManager.ghostCtx,
                    a.axisX.reversed ? x : w,
                    r,
                    a.axisX.reversed ? w : x,
                    d,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                if (
                  e[h].indexLabel ||
                  q.indexLabel ||
                  e[h].indexLabelFormatter ||
                  q.indexLabelFormatter
                )
                  this._indexLabels.push({
                    chartType: "rangeColumn",
                    dataPoint: e[h],
                    dataSeries: q,
                    indexKeyword: 0,
                    point: {
                      x: w + (x - w) / 2,
                      y: e[h].y[1] >= e[h].y[0] ? d : r,
                    },
                    direction: e[h].y[1] >= e[h].y[0] ? -1 : 1,
                    bounds: {
                      x1: w,
                      y1: Math.min(r, d),
                      x2: x,
                      y2: Math.max(r, d),
                    },
                    color: b,
                  }),
                    this._indexLabels.push({
                      chartType: "rangeColumn",
                      dataPoint: e[h],
                      dataSeries: q,
                      indexKeyword: 1,
                      point: {
                        x: w + (x - w) / 2,
                        y: e[h].y[1] >= e[h].y[0] ? r : d,
                      },
                      direction: e[h].y[1] >= e[h].y[0] ? 1 : -1,
                      bounds: {
                        x1: w,
                        y1: Math.min(r, d),
                        x2: x,
                        y2: Math.max(r, d),
                      },
                      color: b,
                    });
              }
        }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.fadeInAnimation,
          easingFunction: O.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderError = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f,
        b = a.axisY._position
          ? "left" === a.axisY._position || "right" === a.axisY._position
            ? !1
            : !0
          : !1;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = null,
          h = !1,
          r = this.plotArea,
          d = 0,
          l,
          k,
          m,
          n,
          q,
          e,
          u,
          w = a.axisX.dataInfo.minDiff;
        isFinite(w) || (w = 0.3 * Math.abs(a.axisX.range));
        c.save();
        t && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(r.x1, r.y1, r.width, r.height);
        c.clip();
        t &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(r.x1, r.y1, r.width, r.height),
          this._eventManager.ghostCtx.clip());
        for (var x = 0, s = 0; s < this.data.length; s++)
          !this.data[s].type.match(/(bar|column)/gi) ||
            !this.data[s].visible ||
            (this.data[s].type.match(/(stacked)/gi) && x) ||
            x++;
        for (var z = 0; z < a.dataSeriesIndexes.length; z++) {
          var v = a.dataSeriesIndexes[z],
            F = this.data[v],
            C = F.dataPoints,
            D = p(F._linkedSeries)
              ? !1
              : F._linkedSeries.type.match(/(bar|column)/gi) &&
                F._linkedSeries.visible
              ? !0
              : !1,
            B = 0;
          if (D)
            for (g = F._linkedSeries.id, s = 0; s < g; s++)
              !this.data[s].type.match(/(bar|column)/gi) ||
                !this.data[s].visible ||
                (this.data[s].type.match(/(stacked)/gi) && B) ||
                (this.data[s].type.match(/(range)/gi) && (h = !0), B++);
          g = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1;
          d = this.options.dataPointMaxWidth
            ? this.dataPointMaxWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : b
            ? Math.min(
                0.15 * this.height,
                0.9 * (this.plotArea.height / (D ? x : 1))
              ) << 0
            : 0.3 * this.width;
          h &&
            (d = this.options.dataPointMaxWidth
              ? this.dataPointMaxWidth
              : this.options.dataPointWidth
              ? this.dataPointWidth
              : b
              ? Math.min(
                  0.15 * this.height,
                  0.9 * (this.plotArea.height / (D ? x : 1))
                ) << 0
              : 0.03 * this.width);
          s = this.options.dataPointWidth
            ? this.dataPointWidth
            : (0.9 *
                (((b ? r.height : r.width) *
                  (a.axisX.logarithmic
                    ? Math.log(w) / Math.log(a.axisX.range)
                    : Math.abs(w) / Math.abs(a.axisX.range))) /
                  (D ? x : 1))) <<
              0;
          this.dataPointMaxWidth &&
            g > d &&
            (g = Math.min(
              this.options.dataPointWidth ? this.dataPointWidth : Infinity,
              d
            ));
          !this.dataPointMaxWidth &&
            this.dataPointMinWidth &&
            d < g &&
            (d = Math.max(
              this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
              g
            ));
          s < g && (s = g);
          s > d && (s = d);
          if (0 < C.length)
            for (var I = F._colorSet, d = 0; d < C.length; d++) {
              var g = (F.lineColor = F.options.color ? F.options.color : I[0]),
                K = {
                  color: C[d].whiskerColor
                    ? C[d].whiskerColor
                    : C[d].color
                    ? F.whiskerColor
                      ? F.whiskerColor
                      : C[d].color
                    : F.whiskerColor
                    ? F.whiskerColor
                    : g,
                  thickness: p(C[d].whiskerThickness)
                    ? F.whiskerThickness
                    : C[d].whiskerThickness,
                  dashType: C[d].whiskerDashType
                    ? C[d].whiskerDashType
                    : F.whiskerDashType,
                  length: p(C[d].whiskerLength)
                    ? p(F.options.whiskerLength)
                      ? s
                      : F.options.whiskerLength
                    : C[d].whiskerLength,
                  trimLength: p(C[d].whiskerLength)
                    ? p(F.options.whiskerLength)
                      ? 50
                      : 0
                    : 0,
                };
              K.length =
                "number" === typeof K.length
                  ? 0 >= K.length
                    ? 0
                    : K.length >= s
                    ? s
                    : K.length
                  : "string" === typeof K.length
                  ? (parseInt(K.length) * s) / 100 > s
                    ? s
                    : (parseInt(K.length) * s) / 100 > s
                  : s;
              K.thickness =
                "number" === typeof K.thickness
                  ? 0 > K.thickness
                    ? 0
                    : Math.round(K.thickness)
                  : 2;
              var L = {
                color: C[d].stemColor
                  ? C[d].stemColor
                  : C[d].color
                  ? F.stemColor
                    ? F.stemColor
                    : C[d].color
                  : F.stemColor
                  ? F.stemColor
                  : g,
                thickness: C[d].stemThickness
                  ? C[d].stemThickness
                  : F.stemThickness,
                dashType: C[d].stemDashType
                  ? C[d].stemDashType
                  : F.stemDashType,
              };
              L.thickness =
                "number" === typeof L.thickness
                  ? 0 > L.thickness
                    ? 0
                    : Math.round(L.thickness)
                  : 2;
              C[d].getTime ? (u = C[d].x.getTime()) : (u = C[d].x);
              if (
                !(
                  u < a.axisX.dataInfo.viewPortMin ||
                  u > a.axisX.dataInfo.viewPortMax
                ) &&
                !p(C[d].y) &&
                C[d].y.length &&
                "number" === typeof C[d].y[0] &&
                "number" === typeof C[d].y[1]
              ) {
                var da = a.axisX.convertValueToPixel(u);
                b ? (k = da) : (l = da);
                da = a.axisY.convertValueToPixel(C[d].y[0]);
                b ? (m = da) : (q = da);
                da = a.axisY.convertValueToPixel(C[d].y[1]);
                b ? (n = da) : (e = da);
                b
                  ? ((q = a.axisX.reversed
                      ? (k + ((D ? x : 1) * s) / 2 - (D ? B - 1 : 0) * s) << 0
                      : (k - ((D ? x : 1) * s) / 2 + (D ? B - 1 : 0) * s) << 0),
                    (e = a.axisX.reversed ? (q - s) << 0 : (q + s) << 0))
                  : ((m = a.axisX.reversed
                      ? (l + ((D ? x : 1) * s) / 2 - (D ? B - 1 : 0) * s) << 0
                      : (l - ((D ? x : 1) * s) / 2 + (D ? B - 1 : 0) * s) << 0),
                    (n = a.axisX.reversed ? (m - s) << 0 : (m + s) << 0));
                !b && q > e && ((da = q), (q = e), (e = da));
                b && m > n && ((da = m), (m = n), (n = da));
                da = F.dataPointIds[d];
                this._eventManager.objectMap[da] = {
                  id: da,
                  objectType: "dataPoint",
                  dataSeriesIndex: v,
                  dataPointIndex: d,
                  x1: Math.min(m, n),
                  y1: Math.min(q, e),
                  x2: Math.max(n, m),
                  y2: Math.max(e, q),
                  isXYSwapped: b,
                  stemProperties: L,
                  whiskerProperties: K,
                };
                A(
                  c,
                  Math.min(m, n),
                  Math.min(q, e),
                  Math.max(n, m),
                  Math.max(e, q),
                  g,
                  K,
                  L,
                  b
                );
                t && A(this._eventManager.ghostCtx, m, q, n, e, g, K, L, b);
                if (
                  C[d].indexLabel ||
                  F.indexLabel ||
                  C[d].indexLabelFormatter ||
                  F.indexLabelFormatter
                )
                  this._indexLabels.push({
                    chartType: "error",
                    dataPoint: C[d],
                    dataSeries: F,
                    indexKeyword: 0,
                    point: {
                      x: b ? (C[d].y[1] >= C[d].y[0] ? m : n) : m + (n - m) / 2,
                      y: b ? q + (e - q) / 2 : C[d].y[1] >= C[d].y[0] ? e : q,
                    },
                    direction: C[d].y[1] >= C[d].y[0] ? -1 : 1,
                    bounds: {
                      x1: b ? Math.min(m, n) : m,
                      y1: b ? q : Math.min(q, e),
                      x2: b ? Math.max(m, n) : n,
                      y2: b ? e : Math.max(q, e),
                    },
                    color: g,
                    axisSwapped: b,
                  }),
                    this._indexLabels.push({
                      chartType: "error",
                      dataPoint: C[d],
                      dataSeries: F,
                      indexKeyword: 1,
                      point: {
                        x: b
                          ? C[d].y[1] >= C[d].y[0]
                            ? n
                            : m
                          : m + (n - m) / 2,
                        y: b ? q + (e - q) / 2 : C[d].y[1] >= C[d].y[0] ? q : e,
                      },
                      direction: C[d].y[1] >= C[d].y[0] ? 1 : -1,
                      bounds: {
                        x1: b ? Math.min(m, n) : m,
                        y1: b ? q : Math.min(q, e),
                        x2: b ? Math.max(m, n) : n,
                        y2: b ? e : Math.max(q, e),
                      },
                      color: g,
                      axisSwapped: b,
                    });
              }
            }
        }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(r.x1, r.y1, r.width, r.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.fadeInAnimation,
          easingFunction: O.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderRangeBar = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = null,
          g = this.plotArea,
          h = 0,
          r,
          d,
          l,
          k,
          h = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1;
        r = this.options.dataPointMaxWidth
          ? this.dataPointMaxWidth
          : this.options.dataPointWidth
          ? this.dataPointWidth
          : Math.min(
              0.15 * this.height,
              0.9 * (this.plotArea.height / a.plotType.totalDataSeries)
            ) << 0;
        var m = a.axisX.dataInfo.minDiff;
        isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
        m = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.9 *
              ((g.height *
                (a.axisX.logarithmic
                  ? Math.log(m) / Math.log(a.axisX.range)
                  : Math.abs(m) / Math.abs(a.axisX.range))) /
                a.plotType.totalDataSeries)) <<
            0;
        this.dataPointMaxWidth &&
          h > r &&
          (h = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            r
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          r < h &&
          (r = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            h
          ));
        m < h && (m = h);
        m > r && (m = r);
        c.save();
        t && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(g.x1, g.y1, g.width, g.height);
        c.clip();
        t &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.clip());
        for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
          var q = a.dataSeriesIndexes[n],
            e = this.data[q],
            u = e.dataPoints;
          if (0 < u.length) {
            var w = 5 < m && e.bevelEnabled ? !0 : !1;
            c.strokeStyle = "#4572A7 ";
            for (h = 0; h < u.length; h++)
              if (
                (u[h].getTime ? (k = u[h].x.getTime()) : (k = u[h].x),
                !(
                  k < a.axisX.dataInfo.viewPortMin ||
                  k > a.axisX.dataInfo.viewPortMax
                ) &&
                  !p(u[h].y) &&
                  u[h].y.length &&
                  "number" === typeof u[h].y[0] &&
                  "number" === typeof u[h].y[1])
              ) {
                r = a.axisY.convertValueToPixel(u[h].y[0]);
                d = a.axisY.convertValueToPixel(u[h].y[1]);
                l = a.axisX.convertValueToPixel(k);
                l = a.axisX.reversed
                  ? (l +
                      (a.plotType.totalDataSeries * m) / 2 -
                      (a.previousDataSeriesCount + n) * m) <<
                    0
                  : (l -
                      (a.plotType.totalDataSeries * m) / 2 +
                      (a.previousDataSeriesCount + n) * m) <<
                    0;
                var x = a.axisX.reversed ? (l - m) << 0 : (l + m) << 0;
                r > d && ((b = r), (r = d), (d = b));
                b = u[h].color
                  ? u[h].color
                  : e._colorSet[h % e._colorSet.length];
                ba(
                  c,
                  r,
                  a.axisX.reversed ? x : l,
                  d,
                  a.axisX.reversed ? l : x,
                  b,
                  0,
                  null,
                  w,
                  !1,
                  !1,
                  !1,
                  e.fillOpacity
                );
                b = e.dataPointIds[h];
                this._eventManager.objectMap[b] = {
                  id: b,
                  objectType: "dataPoint",
                  dataSeriesIndex: q,
                  dataPointIndex: h,
                  x1: r,
                  y1: l,
                  x2: d,
                  y2: x,
                };
                b = V(b);
                t &&
                  ba(
                    this._eventManager.ghostCtx,
                    r,
                    a.axisX.reversed ? x : l,
                    d,
                    a.axisX.reversed ? l : x,
                    b,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                if (
                  u[h].indexLabel ||
                  e.indexLabel ||
                  u[h].indexLabelFormatter ||
                  e.indexLabelFormatter
                )
                  this._indexLabels.push({
                    chartType: "rangeBar",
                    dataPoint: u[h],
                    dataSeries: e,
                    indexKeyword: 0,
                    point: {
                      x: u[h].y[1] >= u[h].y[0] ? r : d,
                      y: l + (x - l) / 2,
                    },
                    direction: u[h].y[1] >= u[h].y[0] ? -1 : 1,
                    bounds: {
                      x1: Math.min(r, d),
                      y1: l,
                      x2: Math.max(r, d),
                      y2: x,
                    },
                    color: b,
                  }),
                    this._indexLabels.push({
                      chartType: "rangeBar",
                      dataPoint: u[h],
                      dataSeries: e,
                      indexKeyword: 1,
                      point: {
                        x: u[h].y[1] >= u[h].y[0] ? d : r,
                        y: l + (x - l) / 2,
                      },
                      direction: u[h].y[1] >= u[h].y[0] ? 1 : -1,
                      bounds: {
                        x1: Math.min(r, d),
                        y1: l,
                        x2: Math.max(r, d),
                        y2: x,
                      },
                      color: b,
                    });
              }
          }
        }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(g.x1, g.y1, g.width, g.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.fadeInAnimation,
          easingFunction: O.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderRangeArea = function (a) {
      function f() {
        if (z) {
          for (var a = null, c = p.length - 1; 0 <= c; c--)
            (a = p[c]), b.lineTo(a.x, a.y2), g.lineTo(a.x, a.y2);
          b.closePath();
          b.globalAlpha = m.fillOpacity;
          b.fill();
          b.globalAlpha = 1;
          g.fill();
          if (0 < m.lineThickness) {
            b.beginPath();
            b.moveTo(a.x, a.y2);
            for (c = 0; c < p.length; c++) (a = p[c]), b.lineTo(a.x, a.y2);
            b.moveTo(p[0].x, p[0].y1);
            for (c = 0; c < p.length; c++) (a = p[c]), b.lineTo(a.x, a.y1);
            b.stroke();
          }
          b.beginPath();
          b.moveTo(l, w);
          g.beginPath();
          g.moveTo(l, w);
          z = { x: l, y: w };
          p = [];
          p.push({ x: l, y1: w, y2: x });
        }
      }
      var c = a.targetCanvasCtx || this.plotArea.ctx,
        b = t ? this._preRenderCtx : c;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = this._eventManager.ghostCtx,
          h = [],
          r = this.plotArea;
        b.save();
        t && g.save();
        b.beginPath();
        b.rect(r.x1, r.y1, r.width, r.height);
        b.clip();
        t && (g.beginPath(), g.rect(r.x1, r.y1, r.width, r.height), g.clip());
        for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
          var p = [],
            k = a.dataSeriesIndexes[d],
            m = this.data[k],
            n = m.dataPoints,
            h = m.id;
          this._eventManager.objectMap[h] = {
            objectType: "dataSeries",
            dataSeriesIndex: k,
          };
          h = V(h);
          g.fillStyle = h;
          var h = [],
            q = !0,
            e = 0,
            l,
            w,
            x,
            s,
            z = null;
          if (0 < n.length) {
            var v = m._colorSet[e % m._colorSet.length],
              u = (m.lineColor = m.options.lineColor || v),
              C = u;
            b.fillStyle = v;
            b.strokeStyle = u;
            b.lineWidth = m.lineThickness;
            var D = "solid";
            if (b.setLineDash) {
              var A = I(m.nullDataLineDashType, m.lineThickness),
                D = m.lineDashType,
                B = I(D, m.lineThickness);
              b.setLineDash(B);
            }
            for (var K = !0; e < n.length; e++)
              if (
                ((s = n[e].x.getTime ? n[e].x.getTime() : n[e].x),
                !(
                  s < a.axisX.dataInfo.viewPortMin ||
                  (s > a.axisX.dataInfo.viewPortMax &&
                    (!m.connectNullData || !K))
                ))
              )
                if (
                  null !== n[e].y &&
                  n[e].y.length &&
                  "number" === typeof n[e].y[0] &&
                  "number" === typeof n[e].y[1]
                ) {
                  l = a.axisX.convertValueToPixel(s);
                  w = a.axisY.convertValueToPixel(n[e].y[0]);
                  x = a.axisY.convertValueToPixel(n[e].y[1]);
                  q || K
                    ? (m.connectNullData && !q
                        ? (b.setLineDash &&
                            (m.options.nullDataLineDashType ||
                              (D === m.lineDashType &&
                                m.lineDashType !== m.nullDataLineDashType)) &&
                            ((p[p.length - 1].newLineDashArray = B),
                            (D = m.nullDataLineDashType),
                            b.setLineDash(A)),
                          b.lineTo(l, w),
                          t && g.lineTo(l, w),
                          p.push({ x: l, y1: w, y2: x }))
                        : (b.beginPath(),
                          b.moveTo(l, w),
                          (z = { x: l, y: w }),
                          (p = []),
                          p.push({ x: l, y1: w, y2: x }),
                          t && (g.beginPath(), g.moveTo(l, w))),
                      (K = q = !1))
                    : (b.lineTo(l, w),
                      p.push({ x: l, y1: w, y2: x }),
                      t && g.lineTo(l, w),
                      0 == e % 250 && f());
                  s = m.dataPointIds[e];
                  this._eventManager.objectMap[s] = {
                    id: s,
                    objectType: "dataPoint",
                    dataSeriesIndex: k,
                    dataPointIndex: e,
                    x1: l,
                    y1: w,
                    y2: x,
                  };
                  e < n.length - 1 &&
                    (C !== (n[e].lineColor || u) ||
                      D !== (n[e].lineDashType || m.lineDashType)) &&
                    (f(),
                    (C = n[e].lineColor || u),
                    (p[p.length - 1].newStrokeStyle = C),
                    (b.strokeStyle = C),
                    b.setLineDash &&
                      (n[e].lineDashType
                        ? ((D = n[e].lineDashType),
                          (p[p.length - 1].newLineDashArray = I(
                            D,
                            m.lineThickness
                          )),
                          b.setLineDash(p[p.length - 1].newLineDashArray))
                        : ((D = m.lineDashType),
                          (p[p.length - 1].newLineDashArray = B),
                          b.setLineDash(B))));
                  if (
                    0 !== n[e].markerSize &&
                    (0 < n[e].markerSize || 0 < m.markerSize)
                  ) {
                    var L = m.getMarkerProperties(e, l, x, b);
                    h.push(L);
                    var da = V(s);
                    t &&
                      h.push({
                        x: l,
                        y: x,
                        ctx: g,
                        type: L.type,
                        size: L.size,
                        color: da,
                        borderColor: da,
                        borderThickness: L.borderThickness,
                      });
                    L = m.getMarkerProperties(e, l, w, b);
                    h.push(L);
                    da = V(s);
                    t &&
                      h.push({
                        x: l,
                        y: w,
                        ctx: g,
                        type: L.type,
                        size: L.size,
                        color: da,
                        borderColor: da,
                        borderThickness: L.borderThickness,
                      });
                  }
                  if (
                    n[e].indexLabel ||
                    m.indexLabel ||
                    n[e].indexLabelFormatter ||
                    m.indexLabelFormatter
                  )
                    this._indexLabels.push({
                      chartType: "rangeArea",
                      dataPoint: n[e],
                      dataSeries: m,
                      indexKeyword: 0,
                      point: { x: l, y: w },
                      direction:
                        n[e].y[0] > n[e].y[1] === a.axisY.reversed ? -1 : 1,
                      color: v,
                    }),
                      this._indexLabels.push({
                        chartType: "rangeArea",
                        dataPoint: n[e],
                        dataSeries: m,
                        indexKeyword: 1,
                        point: { x: l, y: x },
                        direction:
                          n[e].y[0] > n[e].y[1] === a.axisY.reversed ? 1 : -1,
                        color: v,
                      });
                } else K || q || f(), (K = !0);
            f();
            Y.drawMarkers(h);
          }
        }
        t &&
          (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (b.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          b.clearRect(r.x1, r.y1, r.width, r.height),
          this._eventManager.ghostCtx.restore());
        b.restore();
        return {
          source: c,
          dest: this.plotArea.ctx,
          animationCallback: O.xClipAnimation,
          easingFunction: O.easing.linear,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderRangeSplineArea = function (a) {
      function f(a, c) {
        var e = u(w, 2);
        if (0 < e.length) {
          if (0 < k.lineThickness) {
            b.strokeStyle = c;
            b.setLineDash && b.setLineDash(a);
            b.beginPath();
            b.moveTo(e[0].x, e[0].y);
            for (var f = 0; f < e.length - 3; f += 3) {
              if (e[f].newStrokeStyle || e[f].newLineDashArray)
                b.stroke(),
                  b.beginPath(),
                  b.moveTo(e[f].x, e[f].y),
                  e[f].newStrokeStyle && (b.strokeStyle = e[f].newStrokeStyle),
                  e[f].newLineDashArray && b.setLineDash(e[f].newLineDashArray);
              b.bezierCurveTo(
                e[f + 1].x,
                e[f + 1].y,
                e[f + 2].x,
                e[f + 2].y,
                e[f + 3].x,
                e[f + 3].y
              );
            }
          }
          b.beginPath();
          b.moveTo(e[0].x, e[0].y);
          t && (g.beginPath(), g.moveTo(e[0].x, e[0].y));
          for (f = 0; f < e.length - 3; f += 3)
            b.bezierCurveTo(
              e[f + 1].x,
              e[f + 1].y,
              e[f + 2].x,
              e[f + 2].y,
              e[f + 3].x,
              e[f + 3].y
            ),
              t &&
                g.bezierCurveTo(
                  e[f + 1].x,
                  e[f + 1].y,
                  e[f + 2].x,
                  e[f + 2].y,
                  e[f + 3].x,
                  e[f + 3].y
                );
          e = u(x, 2);
          b.lineTo(x[x.length - 1].x, x[x.length - 1].y);
          for (f = e.length - 1; 2 < f; f -= 3)
            b.bezierCurveTo(
              e[f - 1].x,
              e[f - 1].y,
              e[f - 2].x,
              e[f - 2].y,
              e[f - 3].x,
              e[f - 3].y
            ),
              t &&
                g.bezierCurveTo(
                  e[f - 1].x,
                  e[f - 1].y,
                  e[f - 2].x,
                  e[f - 2].y,
                  e[f - 3].x,
                  e[f - 3].y
                );
          b.closePath();
          b.globalAlpha = k.fillOpacity;
          b.fill();
          t && (g.closePath(), g.fill());
          b.globalAlpha = 1;
          if (0 < k.lineThickness) {
            b.strokeStyle = c;
            b.setLineDash && b.setLineDash(a);
            b.beginPath();
            b.moveTo(e[0].x, e[0].y);
            for (var h = (f = 0); f < e.length - 3; f += 3, h++) {
              if (w[h].newStrokeStyle || w[h].newLineDashArray)
                b.stroke(),
                  b.beginPath(),
                  b.moveTo(e[f].x, e[f].y),
                  w[h].newStrokeStyle && (b.strokeStyle = w[h].newStrokeStyle),
                  w[h].newLineDashArray && b.setLineDash(w[h].newLineDashArray);
              b.bezierCurveTo(
                e[f + 1].x,
                e[f + 1].y,
                e[f + 2].x,
                e[f + 2].y,
                e[f + 3].x,
                e[f + 3].y
              );
            }
            e = u(w, 2);
            b.moveTo(e[0].x, e[0].y);
            for (h = f = 0; f < e.length - 3; f += 3, h++) {
              if (w[h].newStrokeStyle || w[h].newLineDashArray)
                b.stroke(),
                  b.beginPath(),
                  b.moveTo(e[f].x, e[f].y),
                  w[h].newStrokeStyle && (b.strokeStyle = w[h].newStrokeStyle),
                  w[h].newLineDashArray && b.setLineDash(w[h].newLineDashArray);
              b.bezierCurveTo(
                e[f + 1].x,
                e[f + 1].y,
                e[f + 2].x,
                e[f + 2].y,
                e[f + 3].x,
                e[f + 3].y
              );
            }
            b.stroke();
          }
          b.beginPath();
        }
      }
      var c = a.targetCanvasCtx || this.plotArea.ctx,
        b = t ? this._preRenderCtx : c;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = this._eventManager.ghostCtx,
          h = [],
          r = this.plotArea;
        b.save();
        t && g.save();
        b.beginPath();
        b.rect(r.x1, r.y1, r.width, r.height);
        b.clip();
        t && (g.beginPath(), g.rect(r.x1, r.y1, r.width, r.height), g.clip());
        for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
          var p = a.dataSeriesIndexes[d],
            k = this.data[p],
            m = k.dataPoints,
            h = k.id;
          this._eventManager.objectMap[h] = {
            objectType: "dataSeries",
            dataSeriesIndex: p,
          };
          h = V(h);
          g.fillStyle = h;
          var h = [],
            n = 0,
            q,
            e,
            l,
            w = [],
            x = [];
          if (0 < m.length) {
            var s = k._colorSet[n % k._colorSet.length],
              z = (k.lineColor = k.options.lineColor || s),
              v = z;
            b.fillStyle = s;
            b.lineWidth = k.lineThickness;
            var A = "solid",
              C;
            if (b.setLineDash) {
              var D = I(k.nullDataLineDashType, k.lineThickness),
                A = k.lineDashType;
              C = I(A, k.lineThickness);
            }
            for (e = !1; n < m.length; n++)
              if (
                ((q = m[n].x.getTime ? m[n].x.getTime() : m[n].x),
                !(
                  q < a.axisX.dataInfo.viewPortMin ||
                  (q > a.axisX.dataInfo.viewPortMax &&
                    (!k.connectNullData || !e))
                ))
              )
                if (
                  null !== m[n].y &&
                  m[n].y.length &&
                  "number" === typeof m[n].y[0] &&
                  "number" === typeof m[n].y[1]
                ) {
                  q = a.axisX.convertValueToPixel(q);
                  e = a.axisY.convertValueToPixel(m[n].y[0]);
                  l = a.axisY.convertValueToPixel(m[n].y[1]);
                  var B = k.dataPointIds[n];
                  this._eventManager.objectMap[B] = {
                    id: B,
                    objectType: "dataPoint",
                    dataSeriesIndex: p,
                    dataPointIndex: n,
                    x1: q,
                    y1: e,
                    y2: l,
                  };
                  w[w.length] = { x: q, y: e };
                  x[x.length] = { x: q, y: l };
                  n < m.length - 1 &&
                    (v !== (m[n].lineColor || z) ||
                      A !== (m[n].lineDashType || k.lineDashType)) &&
                    ((v = m[n].lineColor || z),
                    (w[w.length - 1].newStrokeStyle = v),
                    b.setLineDash &&
                      (m[n].lineDashType
                        ? ((A = m[n].lineDashType),
                          (w[w.length - 1].newLineDashArray = I(
                            A,
                            k.lineThickness
                          )))
                        : ((A = k.lineDashType),
                          (w[w.length - 1].newLineDashArray = C))));
                  if (
                    0 !== m[n].markerSize &&
                    (0 < m[n].markerSize || 0 < k.markerSize)
                  ) {
                    var G = k.getMarkerProperties(n, q, e, b);
                    h.push(G);
                    var K = V(B);
                    t &&
                      h.push({
                        x: q,
                        y: e,
                        ctx: g,
                        type: G.type,
                        size: G.size,
                        color: K,
                        borderColor: K,
                        borderThickness: G.borderThickness,
                      });
                    G = k.getMarkerProperties(n, q, l, b);
                    h.push(G);
                    K = V(B);
                    t &&
                      h.push({
                        x: q,
                        y: l,
                        ctx: g,
                        type: G.type,
                        size: G.size,
                        color: K,
                        borderColor: K,
                        borderThickness: G.borderThickness,
                      });
                  }
                  if (
                    m[n].indexLabel ||
                    k.indexLabel ||
                    m[n].indexLabelFormatter ||
                    k.indexLabelFormatter
                  )
                    this._indexLabels.push({
                      chartType: "rangeSplineArea",
                      dataPoint: m[n],
                      dataSeries: k,
                      indexKeyword: 0,
                      point: { x: q, y: e },
                      direction: m[n].y[0] <= m[n].y[1] ? -1 : 1,
                      color: s,
                    }),
                      this._indexLabels.push({
                        chartType: "rangeSplineArea",
                        dataPoint: m[n],
                        dataSeries: k,
                        indexKeyword: 1,
                        point: { x: q, y: l },
                        direction: m[n].y[0] <= m[n].y[1] ? 1 : -1,
                        color: s,
                      });
                  e = !1;
                } else
                  0 < n &&
                    !e &&
                    (k.connectNullData
                      ? b.setLineDash &&
                        0 < w.length &&
                        (k.options.nullDataLineDashType ||
                          !m[n - 1].lineDashType) &&
                        ((w[w.length - 1].newLineDashArray = D),
                        (A = k.nullDataLineDashType))
                      : (f(C, z), (w = []), (x = []))),
                    (e = !0);
            f(C, z);
            Y.drawMarkers(h);
          }
        }
        t &&
          (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (b.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          b.clearRect(r.x1, r.y1, r.width, r.height),
          this._eventManager.ghostCtx.restore());
        b.restore();
        return {
          source: c,
          dest: this.plotArea.ctx,
          animationCallback: O.xClipAnimation,
          easingFunction: O.easing.linear,
          animationBase: 0,
        };
      }
    };
    l.prototype.renderWaterfall = function (a) {
      var f = a.targetCanvasCtx || this.plotArea.ctx,
        c = t ? this._preRenderCtx : f;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var b = this._eventManager.ghostCtx,
          g = null,
          h = this.plotArea,
          r = 0,
          d,
          p,
          k,
          m,
          n = a.axisY.convertValueToPixel(
            a.axisY.logarithmic ? a.axisY.viewportMinimum : 0
          ),
          r = this.options.dataPointMinWidth
            ? this.dataPointMinWidth
            : this.options.dataPointWidth
            ? this.dataPointWidth
            : 1;
        p = this.options.dataPointMaxWidth
          ? this.dataPointMaxWidth
          : this.options.dataPointWidth
          ? this.dataPointWidth
          : Math.min(
              0.15 * this.width,
              0.9 * (this.plotArea.width / a.plotType.totalDataSeries)
            ) << 0;
        var q = a.axisX.dataInfo.minDiff;
        isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
        q = this.options.dataPointWidth
          ? this.dataPointWidth
          : (0.6 *
              ((h.width *
                (a.axisX.logarithmic
                  ? Math.log(q) / Math.log(a.axisX.range)
                  : Math.abs(q) / Math.abs(a.axisX.range))) /
                a.plotType.totalDataSeries)) <<
            0;
        this.dataPointMaxWidth &&
          r > p &&
          (r = Math.min(
            this.options.dataPointWidth ? this.dataPointWidth : Infinity,
            p
          ));
        !this.dataPointMaxWidth &&
          this.dataPointMinWidth &&
          p < r &&
          (p = Math.max(
            this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
            r
          ));
        q < r && (q = r);
        q > p && (q = p);
        c.save();
        t && this._eventManager.ghostCtx.save();
        c.beginPath();
        c.rect(h.x1, h.y1, h.width, h.height);
        c.clip();
        t &&
          (this._eventManager.ghostCtx.beginPath(),
          this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height),
          this._eventManager.ghostCtx.clip());
        for (var e = 0; e < a.dataSeriesIndexes.length; e++) {
          var l = a.dataSeriesIndexes[e],
            w = this.data[l],
            x = w.dataPoints,
            g = w._colorSet[0];
          w.risingColor = w.options.risingColor ? w.options.risingColor : g;
          w.fallingColor = w.options.fallingColor
            ? w.options.fallingColor
            : "#e40a0a";
          var s =
              "number" === typeof w.options.lineThickness
                ? Math.round(w.lineThickness)
                : 1,
            z = 1 === Math.round(s) % 2 ? -0.5 : 0;
          if (0 < x.length)
            for (
              var v = 5 < q && w.bevelEnabled ? !0 : !1,
                u = !1,
                C = null,
                D = null,
                r = 0;
              r < x.length;
              r++
            )
              if (
                (x[r].getTime ? (m = x[r].x.getTime()) : (m = x[r].x),
                "number" !== typeof x[r].y)
              ) {
                if (0 < r && !u && w.connectNullData)
                  var A =
                    w.options.nullDataLineDashType || !x[r - 1].lineDashType
                      ? w.nullDataLineDashType
                      : x[r - 1].lineDashType;
                u = !0;
              } else {
                d = a.axisX.convertValueToPixel(m);
                p =
                  0 === w.dataPointEOs[r].cumulativeSum
                    ? n
                    : a.axisY.convertValueToPixel(
                        w.dataPointEOs[r].cumulativeSum
                      );
                k =
                  0 === w.dataPointEOs[r].cumulativeSumYStartValue
                    ? n
                    : a.axisY.convertValueToPixel(
                        w.dataPointEOs[r].cumulativeSumYStartValue
                      );
                d = a.axisX.reversed
                  ? (d +
                      (a.plotType.totalDataSeries * q) / 2 -
                      (a.previousDataSeriesCount + e) * q) <<
                    0
                  : (d -
                      (a.plotType.totalDataSeries * q) / 2 +
                      (a.previousDataSeriesCount + e) * q) <<
                    0;
                var B = a.axisX.reversed ? (d - q) << 0 : (d + q) << 0;
                p > k && ((g = p), (p = k), (k = g));
                a.axisY.reversed && ((g = p), (p = k), (k = g));
                g = w.dataPointIds[r];
                this._eventManager.objectMap[g] = {
                  id: g,
                  objectType: "dataPoint",
                  dataSeriesIndex: l,
                  dataPointIndex: r,
                  x1: d,
                  y1: p,
                  x2: B,
                  y2: k,
                };
                var K = x[r].color
                  ? x[r].color
                  : 0 < x[r].y
                  ? w.risingColor
                  : w.fallingColor;
                ba(
                  c,
                  a.axisX.reversed ? B : d,
                  a.axisY.reversed ? k : p,
                  a.axisX.reversed ? d : B,
                  a.axisY.reversed ? p : k,
                  K,
                  0,
                  K,
                  v,
                  v,
                  !1,
                  !1,
                  w.fillOpacity
                );
                g = V(g);
                t &&
                  ba(
                    this._eventManager.ghostCtx,
                    a.axisX.reversed ? B : d,
                    p,
                    a.axisX.reversed ? d : B,
                    k,
                    g,
                    0,
                    null,
                    !1,
                    !1,
                    !1,
                    !1
                  );
                var L,
                  K = d;
                L =
                  ("undefined" !== typeof x[r].isIntermediateSum &&
                    !0 === x[r].isIntermediateSum) ||
                  ("undefined" !== typeof x[r].isCumulativeSum &&
                    !0 === x[r].isCumulativeSum)
                    ? 0 < x[r].y
                      ? p
                      : k
                    : 0 < x[r].y
                    ? k
                    : p;
                0 < r &&
                  C &&
                  (!u || w.connectNullData) &&
                  (u && c.setLineDash && c.setLineDash(I(A, s)),
                  c.beginPath(),
                  c.moveTo(C, D - z),
                  c.lineTo(K, L - z),
                  0 < s && c.stroke(),
                  t &&
                    (b.beginPath(),
                    b.moveTo(C, D - z),
                    b.lineTo(K, L - z),
                    0 < s && b.stroke()));
                u = !1;
                C = B;
                D = 0 < x[r].y ? p : k;
                K = x[r].lineDashType
                  ? x[r].lineDashType
                  : w.options.lineDashType
                  ? w.options.lineDashType
                  : "shortDash";
                c.strokeStyle = x[r].lineColor
                  ? x[r].lineColor
                  : w.options.lineColor
                  ? w.options.lineColor
                  : "#9e9e9e";
                c.lineWidth = s;
                c.setLineDash && ((K = I(K, s)), c.setLineDash(K));
                (x[r].indexLabel ||
                  w.indexLabel ||
                  x[r].indexLabelFormatter ||
                  w.indexLabelFormatter) &&
                  this._indexLabels.push({
                    chartType: "waterfall",
                    dataPoint: x[r],
                    dataSeries: w,
                    point: { x: d + (B - d) / 2, y: 0 <= x[r].y ? p : k },
                    direction: 0 > x[r].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: d,
                      y1: Math.min(p, k),
                      x2: B,
                      y2: Math.max(p, k),
                    },
                    color: g,
                  });
              }
        }
        t &&
          (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
          (c.globalCompositeOperation = "source-atop"),
          a.axisX.maskCanvas &&
            c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
          a.axisY.maskCanvas &&
            c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
          this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ),
          c.clearRect(h.x1, h.y1, h.width, h.height),
          this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: O.fadeInAnimation,
          easingFunction: O.easing.easeInQuad,
          animationBase: 0,
        };
      }
    };
    var ja = function (a, f, c, b, g, h, r, d, p) {
      if (!(0 > c)) {
        "undefined" === typeof d && (d = 1);
        if (!t) {
          var k = Number((r % (2 * Math.PI)).toFixed(8));
          Number((h % (2 * Math.PI)).toFixed(8)) === k && (r -= 1e-4);
        }
        a.save();
        a.globalAlpha = d;
        "pie" === g
          ? (a.beginPath(),
            a.moveTo(f.x, f.y),
            a.arc(f.x, f.y, c, h, r, !1),
            (a.fillStyle = b),
            (a.strokeStyle = "white"),
            (a.lineWidth = 2),
            a.closePath(),
            a.fill())
          : "doughnut" === g &&
            (a.beginPath(),
            a.arc(f.x, f.y, c, h, r, !1),
            0 <= p && a.arc(f.x, f.y, p * c, r, h, !0),
            a.closePath(),
            (a.fillStyle = b),
            (a.strokeStyle = "white"),
            (a.lineWidth = 2),
            a.fill());
        a.globalAlpha = 1;
        a.restore();
      }
    };
    l.prototype.renderPie = function (a) {
      function f() {
        if (k && m) {
          var a = 0,
            b = 0,
            c = 0,
            g = 0;
          p(k.options.indexLabelMaxWidth) &&
            (k.indexLabelMaxWidth = 0.33 * q.width);
          for (var f = 0; f < m.length; f++) {
            var h = m[f],
              r = k.dataPointIds[f];
            e[f].id = r;
            e[f].objectType = "dataPoint";
            e[f].dataPointIndex = f;
            e[f].dataSeriesIndex = 0;
            var d = e[f],
              n = { percent: null, total: null },
              y = null,
              n = l.getPercentAndTotal(k, h);
            if (k.indexLabelFormatter || h.indexLabelFormatter)
              y = {
                chart: l.options,
                dataSeries: k,
                dataPoint: h,
                total: n.total,
                percent: n.percent,
              };
            n = h.indexLabelFormatter
              ? h.indexLabelFormatter(y)
              : h.indexLabel
              ? l.replaceKeywordsWithValue(h.indexLabel, h, k, f)
              : k.indexLabelFormatter
              ? k.indexLabelFormatter(y)
              : k.indexLabel
              ? l.replaceKeywordsWithValue(k.indexLabel, h, k, f)
              : h.label
              ? h.label
              : "";
            l._eventManager.objectMap[r] = d;
            d.center = { x: v.x, y: v.y };
            d.y = h.y;
            d.radius = D;
            d.percentInnerRadius = B;
            d.indexLabelText = n;
            d.indexLabelPlacement = k.indexLabelPlacement;
            d.indexLabelLineColor = h.indexLabelLineColor
              ? h.indexLabelLineColor
              : k.options.indexLabelLineColor
              ? k.options.indexLabelLineColor
              : h.color
              ? h.color
              : k._colorSet[f % k._colorSet.length];
            d.indexLabelLineThickness = p(h.indexLabelLineThickness)
              ? k.indexLabelLineThickness
              : h.indexLabelLineThickness;
            d.indexLabelLineDashType = h.indexLabelLineDashType
              ? h.indexLabelLineDashType
              : k.indexLabelLineDashType;
            d.indexLabelFontColor = h.indexLabelFontColor
              ? h.indexLabelFontColor
              : k.indexLabelFontColor;
            d.indexLabelFontStyle = h.indexLabelFontStyle
              ? h.indexLabelFontStyle
              : k.indexLabelFontStyle;
            d.indexLabelFontWeight = h.indexLabelFontWeight
              ? h.indexLabelFontWeight
              : k.indexLabelFontWeight;
            d.indexLabelFontSize = p(h.indexLabelFontSize)
              ? k.indexLabelFontSize
              : h.indexLabelFontSize;
            d.indexLabelFontFamily = h.indexLabelFontFamily
              ? h.indexLabelFontFamily
              : k.indexLabelFontFamily;
            d.indexLabelBackgroundColor = h.indexLabelBackgroundColor
              ? h.indexLabelBackgroundColor
              : k.options.indexLabelBackgroundColor
              ? k.options.indexLabelBackgroundColor
              : k.indexLabelBackgroundColor;
            d.indexLabelBorderColor = h.indexLabelBorderColor
              ? h.indexLabelBorderColor
              : k.options.indexLabelBorderColor
              ? k.options.indexLabelBorderColor
              : k.indexLabelBorderColor;
            d.indexLabelBorderThickness = h.indexLabelBorderThickness
              ? h.indexLabelBorderThickness
              : k.options.indexLabelBorderThickness
              ? k.options.indexLabelBorderThickness
              : k.indexLabelBorderThickness;
            d.indexLabelMaxWidth = h.indexLabelMaxWidth
              ? h.indexLabelMaxWidth
              : k.indexLabelMaxWidth;
            d.indexLabelWrap =
              "undefined" !== typeof h.indexLabelWrap
                ? h.indexLabelWrap
                : k.indexLabelWrap;
            d.indexLabelTextAlign = h.indexLabelTextAlign
              ? h.indexLabelTextAlign
              : k.indexLabelTextAlign
              ? k.indexLabelTextAlign
              : "left";
            d.startAngle =
              0 === f
                ? k.startAngle
                  ? (k.startAngle / 180) * Math.PI
                  : 0
                : e[f - 1].endAngle;
            d.startAngle = (d.startAngle + 2 * Math.PI) % (2 * Math.PI);
            d.endAngle = d.startAngle + ((2 * Math.PI) / u) * Math.abs(h.y);
            h = (d.endAngle + d.startAngle) / 2;
            h = (h + 2 * Math.PI) % (2 * Math.PI);
            d.midAngle = h;
            if (d.midAngle > Math.PI / 2 - s && d.midAngle < Math.PI / 2 + s) {
              if (0 === a || e[c].midAngle > d.midAngle) c = f;
              a++;
            } else if (
              d.midAngle > (3 * Math.PI) / 2 - s &&
              d.midAngle < (3 * Math.PI) / 2 + s
            ) {
              if (0 === b || e[g].midAngle > d.midAngle) g = f;
              b++;
            }
            d.hemisphere =
              h > Math.PI / 2 && h <= (3 * Math.PI) / 2 ? "left" : "right";
            d.indexLabelTextBlock = new ka(l.plotArea.ctx, {
              fontSize: d.indexLabelFontSize,
              fontFamily: d.indexLabelFontFamily,
              fontColor: d.indexLabelFontColor,
              fontStyle: d.indexLabelFontStyle,
              fontWeight: d.indexLabelFontWeight,
              textAlign: d.indexLabelTextAlign,
              backgroundColor: d.indexLabelBackgroundColor,
              borderColor: d.indexLabelBorderColor,
              borderThickness: d.indexLabelBorderThickness,
              maxWidth: d.indexLabelMaxWidth,
              maxHeight: d.indexLabelWrap
                ? 5 * d.indexLabelFontSize
                : 1.5 * d.indexLabelFontSize,
              text: d.indexLabelText,
              padding: 0,
              textBaseline: "middle",
            });
            d.indexLabelTextBlock.measureText();
          }
          r = h = 0;
          n = !1;
          for (f = 0; f < m.length; f++)
            (d = e[(c + f) % m.length]),
              1 < a &&
                d.midAngle > Math.PI / 2 - s &&
                d.midAngle < Math.PI / 2 + s &&
                (h <= a / 2 && !n
                  ? ((d.hemisphere = "right"), h++)
                  : ((d.hemisphere = "left"), (n = !0)));
          n = !1;
          for (f = 0; f < m.length; f++)
            (d = e[(g + f) % m.length]),
              1 < b &&
                d.midAngle > (3 * Math.PI) / 2 - s &&
                d.midAngle < (3 * Math.PI) / 2 + s &&
                (r <= b / 2 && !n
                  ? ((d.hemisphere = "left"), r++)
                  : ((d.hemisphere = "right"), (n = !0)));
        }
      }
      function c(a, b) {
        var c = l.plotArea.ctx;
        c.clearRect(q.x1, q.y1, q.width, q.height);
        c.fillStyle = l.backgroundColor;
        c.fillRect(q.x1, q.y1, q.width, q.height);
        for (c = 0; c < m.length; c++) {
          var f = e[c].startAngle,
            g = e[c].endAngle;
          if (g > f) {
            var h = 0.07 * D * Math.cos(e[c].midAngle),
              d = 0.07 * D * Math.sin(e[c].midAngle),
              r = !1;
            if (m[c].exploded) {
              if (
                1e-9 < Math.abs(e[c].center.x - (v.x + h)) ||
                1e-9 < Math.abs(e[c].center.y - (v.y + d))
              )
                (e[c].center.x = v.x + h * a),
                  (e[c].center.y = v.y + d * a),
                  (r = !0);
            } else if (
              0 < Math.abs(e[c].center.x - v.x) ||
              0 < Math.abs(e[c].center.y - v.y)
            )
              (e[c].center.x = v.x + h * (1 - a)),
                (e[c].center.y = v.y + d * (1 - a)),
                (r = !0);
            r &&
              b &&
              ((h = {}),
              (h.dataSeries = k),
              (h.dataPoint = k.dataPoints[c]),
              (h.index = c),
              l.toolTip.highlightObjects([h]));
            ja(
              l.plotArea.ctx,
              e[c].center,
              e[c].radius,
              m[c].color ? m[c].color : k._colorSet[c % k._colorSet.length],
              k.type,
              f,
              g,
              k.fillOpacity,
              e[c].percentInnerRadius
            );
          }
        }
        c = l.plotArea.ctx;
        c.save();
        c.fillStyle = "black";
        c.strokeStyle = "grey";
        c.textBaseline = "middle";
        c.lineJoin = "round";
        for (f = f = 0; f < m.length; f++)
          (g = e[f]),
            g.indexLabelText &&
              ((g.indexLabelTextBlock.y -=
                g.indexLabelTextBlock.height / 2 -
                g.indexLabelTextBlock.fontSize / 2),
              (h = 0),
              (h =
                "left" === g.hemisphere
                  ? "inside" !== k.indexLabelPlacement
                    ? -(g.indexLabelTextBlock.width + n)
                    : -g.indexLabelTextBlock.width / 2
                  : "inside" !== k.indexLabelPlacement
                  ? n
                  : -g.indexLabelTextBlock.width / 2),
              (g.indexLabelTextBlock.x += h),
              g.indexLabelTextBlock.render(!0),
              (g.indexLabelTextBlock.x -= h),
              (g.indexLabelTextBlock.y +=
                g.indexLabelTextBlock.height / 2 -
                g.indexLabelTextBlock.fontSize / 2),
              "inside" !== g.indexLabelPlacement &&
                0 < g.indexLabelLineThickness &&
                ((h = g.center.x + D * Math.cos(g.midAngle)),
                (d = g.center.y + D * Math.sin(g.midAngle)),
                (c.strokeStyle = g.indexLabelLineColor),
                (c.lineWidth = g.indexLabelLineThickness),
                c.setLineDash &&
                  c.setLineDash(
                    I(g.indexLabelLineDashType, g.indexLabelLineThickness)
                  ),
                c.beginPath(),
                c.moveTo(h, d),
                c.lineTo(g.indexLabelTextBlock.x, g.indexLabelTextBlock.y),
                c.lineTo(
                  g.indexLabelTextBlock.x + ("left" === g.hemisphere ? -n : n),
                  g.indexLabelTextBlock.y
                ),
                c.stroke()),
              (c.lineJoin = "miter"));
        c.save();
      }
      function b(a, b) {
        var c = 0,
          c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
          e = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
          g = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
          f = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
        return (c =
          b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? g - e : c - f);
      }
      function g(a) {
        for (var c = null, g = 1; g < m.length; g++)
          if (
            ((c = (a + g + e.length) % e.length),
            e[c].hemisphere !== e[a].hemisphere)
          ) {
            c = null;
            break;
          } else if (
            e[c].indexLabelText &&
            c !== a &&
            (0 > b(e[c], e[a]) ||
              ("right" === e[a].hemisphere
                ? e[c].indexLabelTextBlock.y >= e[a].indexLabelTextBlock.y
                : e[c].indexLabelTextBlock.y <= e[a].indexLabelTextBlock.y))
          )
            break;
          else c = null;
        return c;
      }
      function h(a, c, f) {
        f = (f || 0) + 1;
        if (1e3 < f) return 0;
        c = c || 0;
        var d = 0,
          r = v.y - 1 * w,
          k = v.y + 1 * w;
        if (0 <= a && a < m.length) {
          var n = e[a];
          if (
            (0 > c && n.indexLabelTextBlock.y < r) ||
            (0 < c && n.indexLabelTextBlock.y > k)
          )
            return 0;
          var q = 0,
            p = 0,
            p = (q = q = 0);
          0 > c
            ? n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2 > r &&
              n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2 + c <
                r &&
              (c = -(
                r -
                (n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2 + c)
              ))
            : n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2 < r &&
              n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2 + c >
                k &&
              (c =
                n.indexLabelTextBlock.y +
                n.indexLabelTextBlock.height / 2 +
                c -
                k);
          c = n.indexLabelTextBlock.y + c;
          r = 0;
          r =
            "right" === n.hemisphere
              ? v.x + Math.sqrt(Math.pow(w, 2) - Math.pow(c - v.y, 2))
              : v.x - Math.sqrt(Math.pow(w, 2) - Math.pow(c - v.y, 2));
          p = v.x + D * Math.cos(n.midAngle);
          q = v.y + D * Math.sin(n.midAngle);
          q = Math.sqrt(Math.pow(r - p, 2) + Math.pow(c - q, 2));
          p = Math.acos(D / w);
          q = Math.acos((w * w + D * D - q * q) / (2 * D * w));
          c = q < p ? c - n.indexLabelTextBlock.y : 0;
          r = null;
          for (k = 1; k < m.length; k++)
            if (
              ((r = (a - k + e.length) % e.length),
              e[r].hemisphere !== e[a].hemisphere)
            ) {
              r = null;
              break;
            } else if (
              e[r].indexLabelText &&
              e[r].hemisphere === e[a].hemisphere &&
              r !== a &&
              (0 > b(e[r], e[a]) ||
                ("right" === e[a].hemisphere
                  ? e[r].indexLabelTextBlock.y <= e[a].indexLabelTextBlock.y
                  : e[r].indexLabelTextBlock.y >= e[a].indexLabelTextBlock.y))
            )
              break;
            else r = null;
          p = r;
          q = g(a);
          k = r = 0;
          0 > c
            ? ((k = "right" === n.hemisphere ? p : q),
              (d = c),
              null !== k &&
                ((p = -c),
                (c =
                  n.indexLabelTextBlock.y -
                  n.indexLabelTextBlock.height / 2 -
                  (e[k].indexLabelTextBlock.y +
                    e[k].indexLabelTextBlock.height / 2)),
                c - p < t &&
                  ((r = -p),
                  (k = h(k, r, f + 1)),
                  +k.toFixed(z) > +r.toFixed(z) &&
                    (d = c > t ? -(c - t) : -(p - (k - r))))))
            : 0 < c &&
              ((k = "right" === n.hemisphere ? q : p),
              (d = c),
              null !== k &&
                ((p = c),
                (c =
                  e[k].indexLabelTextBlock.y -
                  e[k].indexLabelTextBlock.height / 2 -
                  (n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2)),
                c - p < t &&
                  ((r = p),
                  (k = h(k, r, f + 1)),
                  +k.toFixed(z) < +r.toFixed(z) &&
                    (d = c > t ? c - t : p - (r - k)))));
          d &&
            ((f = n.indexLabelTextBlock.y + d),
            (c = 0),
            (c =
              "right" === n.hemisphere
                ? v.x + Math.sqrt(Math.pow(w, 2) - Math.pow(f - v.y, 2))
                : v.x - Math.sqrt(Math.pow(w, 2) - Math.pow(f - v.y, 2))),
            n.midAngle > Math.PI / 2 - s && n.midAngle < Math.PI / 2 + s
              ? ((r = (a - 1 + e.length) % e.length),
                (r = e[r]),
                (a = e[(a + 1 + e.length) % e.length]),
                "left" === n.hemisphere &&
                "right" === r.hemisphere &&
                c > r.indexLabelTextBlock.x
                  ? (c = r.indexLabelTextBlock.x - 15)
                  : "right" === n.hemisphere &&
                    "left" === a.hemisphere &&
                    c < a.indexLabelTextBlock.x &&
                    (c = a.indexLabelTextBlock.x + 15))
              : n.midAngle > (3 * Math.PI) / 2 - s &&
                n.midAngle < (3 * Math.PI) / 2 + s &&
                ((r = (a - 1 + e.length) % e.length),
                (r = e[r]),
                (a = e[(a + 1 + e.length) % e.length]),
                "right" === n.hemisphere &&
                "left" === r.hemisphere &&
                c < r.indexLabelTextBlock.x
                  ? (c = r.indexLabelTextBlock.x + 15)
                  : "left" === n.hemisphere &&
                    "right" === a.hemisphere &&
                    c > a.indexLabelTextBlock.x &&
                    (c = a.indexLabelTextBlock.x - 15)),
            (n.indexLabelTextBlock.y = f),
            (n.indexLabelTextBlock.x = c),
            (n.indexLabelAngle = Math.atan2(
              n.indexLabelTextBlock.y - v.y,
              n.indexLabelTextBlock.x - v.x
            )));
        }
        return d;
      }
      function r() {
        var a = l.plotArea.ctx;
        a.fillStyle = "grey";
        a.strokeStyle = "grey";
        a.font = "16px Arial";
        a.textBaseline = "middle";
        for (
          var c = (a = 0), f = 0, d = !0, c = 0;
          10 > c && (1 > c || 0 < f);
          c++
        ) {
          if (
            k.radius ||
            (!k.radius &&
              "undefined" !== typeof k.innerRadius &&
              null !== k.innerRadius &&
              D - f <= A)
          )
            d = !1;
          d && (D -= f);
          f = 0;
          if ("inside" !== k.indexLabelPlacement) {
            w = D * x;
            for (a = 0; a < m.length; a++) {
              var r = e[a];
              r.indexLabelTextBlock.x = v.x + w * Math.cos(r.midAngle);
              r.indexLabelTextBlock.y = v.y + w * Math.sin(r.midAngle);
              r.indexLabelAngle = r.midAngle;
              r.radius = D;
              r.percentInnerRadius = B;
            }
            for (var p, s, a = 0; a < m.length; a++) {
              var r = e[a],
                y = g(a);
              if (null !== y) {
                p = e[a];
                s = e[y];
                var u = 0,
                  u = b(p, s) - t;
                if (0 > u) {
                  for (var C = (s = 0), F = 0; F < m.length; F++)
                    F !== a &&
                      e[F].hemisphere === r.hemisphere &&
                      (e[F].indexLabelTextBlock.y < r.indexLabelTextBlock.y
                        ? s++
                        : C++);
                  s = (u / (s + C || 1)) * C;
                  var C = -1 * (u - s),
                    G = (F = 0);
                  "right" === r.hemisphere
                    ? ((F = h(a, s)),
                      (C = -1 * (u - F)),
                      (G = h(y, C)),
                      +G.toFixed(z) < +C.toFixed(z) &&
                        +F.toFixed(z) <= +s.toFixed(z) &&
                        h(a, -(C - G)))
                    : ((F = h(y, s)),
                      (C = -1 * (u - F)),
                      (G = h(a, C)),
                      +G.toFixed(z) < +C.toFixed(z) &&
                        +F.toFixed(z) <= +s.toFixed(z) &&
                        h(y, -(C - G)));
                }
              }
            }
          } else
            for (a = 0; a < m.length; a++)
              (r = e[a]),
                (w = "pie" === k.type ? 0.7 * D : 0.85 * D),
                (y = v.x + w * Math.cos(r.midAngle)),
                (s = v.y + w * Math.sin(r.midAngle)),
                (r.indexLabelTextBlock.x = y),
                (r.indexLabelTextBlock.y = s);
          for (a = 0; a < m.length; a++)
            if (
              ((r = e[a]),
              (y = r.indexLabelTextBlock.measureText()),
              0 !== y.height && 0 !== y.width)
            )
              (y = y = 0),
                "right" === r.hemisphere
                  ? ((y =
                      q.x2 -
                      (r.indexLabelTextBlock.x +
                        r.indexLabelTextBlock.width +
                        n)),
                    (y *= -1))
                  : (y =
                      q.x1 -
                      (r.indexLabelTextBlock.x -
                        r.indexLabelTextBlock.width -
                        n)),
                0 < y &&
                  (!d &&
                    r.indexLabelText &&
                    ((s =
                      "right" === r.hemisphere
                        ? q.x2 - r.indexLabelTextBlock.x
                        : r.indexLabelTextBlock.x - q.x1),
                    0.3 * r.indexLabelTextBlock.maxWidth > s
                      ? (r.indexLabelText = "")
                      : (r.indexLabelTextBlock.maxWidth = 0.85 * s),
                    0.3 * r.indexLabelTextBlock.maxWidth < s &&
                      (r.indexLabelTextBlock.x -=
                        "right" === r.hemisphere ? 2 : -2)),
                  Math.abs(
                    r.indexLabelTextBlock.y -
                      r.indexLabelTextBlock.height / 2 -
                      v.y
                  ) < D ||
                    Math.abs(
                      r.indexLabelTextBlock.y +
                        r.indexLabelTextBlock.height / 2 -
                        v.y
                    ) < D) &&
                  ((y /= Math.abs(Math.cos(r.indexLabelAngle))),
                  9 < y && (y *= 0.3),
                  y > f && (f = y)),
                (y = y = 0),
                0 < r.indexLabelAngle && r.indexLabelAngle < Math.PI
                  ? ((y =
                      q.y2 -
                      (r.indexLabelTextBlock.y +
                        r.indexLabelTextBlock.height / 2 +
                        5)),
                    (y *= -1))
                  : (y =
                      q.y1 -
                      (r.indexLabelTextBlock.y -
                        r.indexLabelTextBlock.height / 2 -
                        5)),
                0 < y &&
                  (!d &&
                    r.indexLabelText &&
                    ((s =
                      0 < r.indexLabelAngle && r.indexLabelAngle < Math.PI
                        ? -1
                        : 1),
                    0 === h(a, y * s) && h(a, 2 * s)),
                  Math.abs(r.indexLabelTextBlock.x - v.x) < D &&
                    ((y /= Math.abs(Math.sin(r.indexLabelAngle))),
                    9 < y && (y *= 0.3),
                    y > f && (f = y)));
          var I = function (a, b, c) {
            for (
              var g = [], f = 0;
              g.push(e[b]), b !== c;
              b = (b + 1 + m.length) % m.length
            );
            g.sort(function (a, b) {
              return a.y - b.y;
            });
            for (b = 0; b < g.length; b++)
              if (((c = g[b]), f < 0.7 * a))
                (f += c.indexLabelTextBlock.height),
                  (c.indexLabelTextBlock.text = ""),
                  (c.indexLabelText = ""),
                  c.indexLabelTextBlock.measureText();
              else break;
          };
          (function () {
            for (var a = -1, c = -1, f = 0, h = !1, r = 0; r < m.length; r++)
              if (((h = !1), (p = e[r]), p.indexLabelText)) {
                var d = g(r);
                if (null !== d) {
                  var k = e[d];
                  u = 0;
                  u = b(p, k);
                  var q;
                  if ((q = 0 > u)) {
                    q = p.indexLabelTextBlock.x;
                    var l =
                        p.indexLabelTextBlock.y -
                        p.indexLabelTextBlock.height / 2,
                      s =
                        p.indexLabelTextBlock.y +
                        p.indexLabelTextBlock.height / 2,
                      y =
                        k.indexLabelTextBlock.y -
                        k.indexLabelTextBlock.height / 2,
                      v = k.indexLabelTextBlock.x + k.indexLabelTextBlock.width,
                      t =
                        k.indexLabelTextBlock.y +
                        k.indexLabelTextBlock.height / 2;
                    q =
                      p.indexLabelTextBlock.x + p.indexLabelTextBlock.width <
                        k.indexLabelTextBlock.x - n ||
                      q > v + n ||
                      l > t + n ||
                      s < y - n
                        ? !1
                        : !0;
                  }
                  q
                    ? (0 > a && (a = r),
                      d !== a && ((c = d), (f += -u)),
                      0 === r % Math.max(m.length / 10, 3) && (h = !0))
                    : (h = !0);
                  h &&
                    0 < f &&
                    0 <= a &&
                    0 <= c &&
                    (I(f, a, c), (c = a = -1), (f = 0));
                }
              }
            0 < f && I(f, a, c);
          })();
        }
      }
      function d() {
        l.plotArea.layoutManager.reset();
        l.title &&
          (l.title.dockInsidePlotArea ||
            ("center" === l.title.horizontalAlign &&
              "center" === l.title.verticalAlign)) &&
          l.title.render();
        if (l.subtitles)
          for (var a = 0; a < l.subtitles.length; a++) {
            var b = l.subtitles[a];
            (b.dockInsidePlotArea ||
              ("center" === b.horizontalAlign &&
                "center" === b.verticalAlign)) &&
              b.render();
          }
        l.legend &&
          (l.legend.dockInsidePlotArea ||
            ("center" === l.legend.horizontalAlign &&
              "center" === l.legend.verticalAlign)) &&
          (l.legend.setLayout(), l.legend.render());
      }
      var l = this;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var k = this.data[a.dataSeriesIndexes[0]],
          m = k.dataPoints,
          n = 10,
          q = this.plotArea,
          e = k.dataPointEOs,
          t = 2,
          w,
          x = 1.3,
          s = (20 / 180) * Math.PI,
          z = 6,
          v = { x: (q.x2 + q.x1) / 2, y: (q.y2 + q.y1) / 2 },
          u = 0;
        a = !1;
        for (var C = 0; C < m.length; C++)
          (u += Math.abs(m[C].y)),
            !a &&
              "undefined" !== typeof m[C].indexLabel &&
              null !== m[C].indexLabel &&
              0 < m[C].indexLabel.toString().length &&
              (a = !0),
            !a &&
              "undefined" !== typeof m[C].label &&
              null !== m[C].label &&
              0 < m[C].label.toString().length &&
              (a = !0);
        if (0 !== u) {
          a =
            a ||
            ("undefined" !== typeof k.indexLabel &&
              null !== k.indexLabel &&
              0 < k.indexLabel.toString().length);
          var D =
            "inside" !== k.indexLabelPlacement && a
              ? (0.75 * Math.min(q.width, q.height)) / 2
              : (0.92 * Math.min(q.width, q.height)) / 2;
          k.radius && (D = Va(k.radius, D));
          var A =
              "undefined" !== typeof k.innerRadius && null !== k.innerRadius
                ? Va(k.innerRadius, D)
                : 0.7 * D,
            B = Math.min(A / D, (D - 1) / D);
          this.pieDoughnutClickHandler = function (a) {
            l.isAnimating ||
              (!p(this.explodeOnClick) && !this.explodeOnClick) ||
              ((a = a.dataPoint),
              (a.exploded = a.exploded ? !1 : !0),
              1 < this.dataPoints.length &&
                l._animator.animate(0, 500, function (a) {
                  c(a, !0);
                  d();
                  l.dispatchEvent("dataAnimationIterationEnd", { chart: l });
                  l.dispatchEvent("dataAnimationEnd", { chart: l });
                }));
          };
          f();
          r();
          r();
          r();
          r();
          this.disableToolTip = !0;
          this._animator.animate(
            0,
            this.animatedRender ? this.animationDuration : 0,
            function (a) {
              var b = l.plotArea.ctx;
              b.clearRect(q.x1, q.y1, q.width, q.height);
              b.fillStyle = l.backgroundColor;
              b.fillRect(q.x1, q.y1, q.width, q.height);
              for (
                var b = e[0].startAngle + 2 * Math.PI * a, c = 0;
                c < m.length;
                c++
              ) {
                var g = 0 === c ? e[c].startAngle : f,
                  f = g + (e[c].endAngle - e[c].startAngle),
                  h = !1;
                f > b && ((f = b), (h = !0));
                var r = m[c].color
                  ? m[c].color
                  : k._colorSet[c % k._colorSet.length];
                f > g &&
                  ja(
                    l.plotArea.ctx,
                    e[c].center,
                    e[c].radius,
                    r,
                    k.type,
                    g,
                    f,
                    k.fillOpacity,
                    e[c].percentInnerRadius
                  );
                if (h) break;
              }
              d();
              l.dispatchEvent("dataAnimationIterationEnd", { chart: l });
              1 <= a && l.dispatchEvent("dataAnimationEnd", { chart: l });
            },
            function () {
              l.disableToolTip = !1;
              l._animator.animate(0, l.animatedRender ? 500 : 0, function (a) {
                c(a, !1);
                d();
                l.dispatchEvent("dataAnimationIterationEnd", { chart: l });
              });
              l.dispatchEvent("dataAnimationEnd", { chart: l });
            }
          );
          k.radius = D;
          "doughnut" === k.type && (k.innerRadius = A);
        }
      }
    };
    var ra = function (a, f, c, b) {
      "undefined" === typeof c && (c = 1);
      0 >= Math.round(f.y4 - f.y1) ||
        (a.save(),
        (a.globalAlpha = c),
        a.beginPath(),
        a.moveTo(Math.round(f.x1), Math.round(f.y1)),
        a.lineTo(Math.round(f.x2), Math.round(f.y2)),
        a.lineTo(Math.round(f.x3), Math.round(f.y3)),
        a.lineTo(Math.round(f.x4), Math.round(f.y4)),
        "undefined" !== f.x5 &&
          (a.lineTo(Math.round(f.x5), Math.round(f.y5)),
          a.lineTo(Math.round(f.x6), Math.round(f.y6))),
        a.closePath(),
        (a.fillStyle = b ? b : f.color),
        a.fill(),
        (a.globalAplha = 1),
        a.restore());
    };
    l.prototype.renderFunnel = function (a) {
      function f() {
        for (var a = 0, b = [], c = 0; c < z.length; c++) {
          if ("undefined" === typeof z[c].y) return -1;
          z[c].y = "number" === typeof z[c].y ? z[c].y : 0;
          a += Math.abs(z[c].y);
        }
        if (0 === a) return -1;
        for (c = b[0] = 0; c < z.length; c++)
          b.push((Math.abs(z[c].y) * B) / a);
        return b;
      }
      function c() {
        var a = W,
          b = Z,
          c = R,
          e = $,
          g,
          f;
        g = P;
        f = Q - N;
        e = Math.abs(((f - g) * (b - a + (e - c))) / 2);
        c = $ - R;
        g = f - g;
        f = c * (f - Q);
        f = Math.abs(f);
        f = e + f;
        for (var e = [], h = 0, r = 0; r < z.length; r++) {
          if ("undefined" === typeof z[r].y) return -1;
          z[r].y = "number" === typeof z[r].y ? z[r].y : 0;
          h += Math.abs(z[r].y);
        }
        if (0 === h) return -1;
        for (
          var d = (e[0] = 0), k = 0, m, n, b = b - a, d = !1, r = 0;
          r < z.length;
          r++
        )
          (a = (Math.abs(z[r].y) * f) / h),
            d
              ? (m = 0 == Number(c.toFixed(3)) ? 0 : a / c)
              : ((n = ca * ca * b * b - 4 * Math.abs(ca) * a),
                0 > n
                  ? ((n = c),
                    (d = ((b + n) * (g - k)) / 2),
                    (a -= d),
                    (m = g - k),
                    (k += g - k),
                    (m += 0 == n ? 0 : a / n),
                    (k += a / n),
                    (d = !0))
                  : ((m = (Math.abs(ca) * b - Math.sqrt(n)) / 2),
                    (n = b - (2 * m) / Math.abs(ca)),
                    (k += m),
                    k > g &&
                      ((k -= m),
                      (n = c),
                      (d = ((b + n) * (g - k)) / 2),
                      (a -= d),
                      (m = g - k),
                      (k += g - k),
                      (m += a / n),
                      (k += a / n),
                      (d = !0)),
                    (b = n))),
            e.push(m);
        return e;
      }
      function b() {
        if (s && z) {
          for (
            var a,
              b,
              c,
              g,
              f,
              h,
              r,
              d,
              k,
              m,
              n,
              q,
              l,
              y,
              v,
              w,
              u,
              J = [],
              A = [],
              C = { percent: null, total: null },
              D = null,
              B = 0;
            B < z.length;
            B++
          )
            (u = S[B]),
              (u =
                "undefined" !== typeof u.x5
                  ? (u.y2 + u.y4) / 2
                  : (u.y2 + u.y3) / 2),
              (u = e(u).x2 + 1),
              (J[B] = M - u - V);
          u = 0.5 * V;
          for (var B = 0, F = z.length - 1; B < z.length || 0 <= F; B++, F--) {
            b = s.reversed ? z[F] : z[B];
            a = b.color
              ? b.color
              : s.reversed
              ? s._colorSet[(z.length - 1 - B) % s._colorSet.length]
              : s._colorSet[B % s._colorSet.length];
            c = b.indexLabelPlacement || s.indexLabelPlacement || "outside";
            w = b.indexLabelTextAlign || s.indexLabelTextAlign || "left";
            g =
              b.indexLabelBackgroundColor ||
              s.indexLabelBackgroundColor ||
              (t ? "transparent" : null);
            f =
              b.indexLabelBorderColor ||
              s.indexLabelBorderColor ||
              (t ? "transparent" : null);
            h = p(b.indexLabelBorderThickness)
              ? s.indexLabelBorderThickness
              : b.indexLabelBorderThickness;
            r = b.indexLabelFontColor || s.indexLabelFontColor || "#979797";
            d = p(b.indexLabelFontSize)
              ? s.indexLabelFontSize
              : b.indexLabelFontSize;
            k = b.indexLabelFontStyle || s.indexLabelFontStyle || "normal";
            m = b.indexLabelFontFamily || s.indexLabelFontFamily || "arial";
            n = b.indexLabelFontWeight || s.indexLabelFontWeight || "normal";
            a = b.indexLabelLineColor || s.options.indexLabelLineColor || a;
            q =
              "number" === typeof b.indexLabelLineThickness
                ? b.indexLabelLineThickness
                : "number" === typeof s.indexLabelLineThickness
                ? s.indexLabelLineThickness
                : 2;
            l = b.indexLabelLineDashType || s.indexLabelLineDashType || "solid";
            y =
              "undefined" !== typeof b.indexLabelWrap
                ? b.indexLabelWrap
                : "undefined" !== typeof s.indexLabelWrap
                ? s.indexLabelWrap
                : !0;
            v = s.dataPointIds[B];
            x._eventManager.objectMap[v] = {
              id: v,
              objectType: "dataPoint",
              dataPointIndex: B,
              dataSeriesIndex: 0,
              funnelSection: S[s.reversed ? z.length - 1 - B : B],
            };
            "inside" === s.indexLabelPlacement &&
              ((J[B] =
                B !== ea
                  ? s.reversed
                    ? S[B].x2 - S[B].x1
                    : S[B].x3 - S[B].x4
                  : S[B].x3 - S[B].x6),
              20 > J[B] &&
                ((J[B] =
                  B !== ea
                    ? s.reversed
                      ? S[B].x3 - S[B].x4
                      : S[B].x2 - S[B].x1
                    : S[B].x2 - S[B].x1),
                (J[B] /= 2)));
            v = b.indexLabelMaxWidth
              ? b.indexLabelMaxWidth
              : s.options.indexLabelMaxWidth
              ? s.indexLabelMaxWidth
              : J[B];
            if (v > J[B] || 0 > v) v = J[B];
            A[B] =
              "inside" === s.indexLabelPlacement
                ? y
                  ? Math.max(S[B].height, d)
                  : 1.5 * d
                : !1;
            C = x.getPercentAndTotal(s, b);
            if (s.indexLabelFormatter || b.indexLabelFormatter)
              D = {
                chart: x.options,
                dataSeries: s,
                dataPoint: b,
                total: C.total,
                percent: C.percent,
              };
            b = b.indexLabelFormatter
              ? b.indexLabelFormatter(D)
              : b.indexLabel
              ? x.replaceKeywordsWithValue(b.indexLabel, b, s, B)
              : s.indexLabelFormatter
              ? s.indexLabelFormatter(D)
              : s.indexLabel
              ? x.replaceKeywordsWithValue(s.indexLabel, b, s, B)
              : b.label
              ? b.label
              : "";
            0 >= q && (q = 0);
            1e3 > v && 1e3 - v < u && (v += 1e3 - v);
            p(s.options.indexLabelMaxWidth) &&
              (s.indexLabelMaxWidth = p(s.indexLabelMaxWidth)
                ? v
                : Math.max(v, s.indexLabelMaxWidth));
            T.roundRect || Aa(T);
            c = new ka(T, {
              fontSize: d,
              fontFamily: m,
              fontColor: r,
              fontStyle: k,
              fontWeight: n,
              horizontalAlign: c,
              textAlign: w,
              backgroundColor: g,
              borderColor: f,
              borderThickness: h,
              maxWidth: v,
              maxHeight: !1 === A[B] ? (y ? 4.28571429 * d : 1.5 * d) : A[B],
              text: b,
              padding: fa,
              textBaseline: "middle",
            });
            c.measureText();
            c.height = c.height === 2 * c.padding ? 0 : c.height;
            c.width = c.width === 2 * c.padding ? 0 : c.width;
            H.push({
              textBlock: c,
              id: s.reversed ? F : B,
              isDirty: !1,
              lineColor: a,
              lineThickness: q,
              lineDashType: l,
              height: c.height < c.maxHeight ? c.height : c.maxHeight,
              width: c.width < c.maxWidth ? c.width : c.maxWidth,
            });
          }
        }
      }
      function g() {
        var a,
          b,
          c,
          g,
          e,
          f = [];
        e = !1;
        c = 0;
        for (
          var h,
            r = M - Z - V / 2,
            r = s.options.indexLabelMaxWidth
              ? s.indexLabelMaxWidth > r
                ? r
                : s.indexLabelMaxWidth
              : r,
            d = H.length - 1;
          0 <= d;
          d--
        ) {
          h = z[H[d].id];
          c = H[d];
          g = c.textBlock;
          b = (a = q(d) < S.length ? H[q(d)] : null) ? a.textBlock : null;
          c = c.height;
          a && g.y + c + fa > b.y && (e = !0);
          c = h.indexLabelMaxWidth || r;
          if (c > r || 0 > c) c = r;
          f.push(c);
        }
        if (e)
          for (d = H.length - 1; 0 <= d; d--)
            (a = S[d]),
              (H[d].textBlock.maxWidth = f[f.length - (d + 1)]),
              H[d].textBlock.measureText(),
              (H[d].textBlock.height =
                H[d].textBlock.height === 2 * H[d].textBlock.padding
                  ? 0
                  : H[d].textBlock.height),
              (H[d].textBlock.width =
                H[d].textBlock.width === 2 * H[d].textBlock.padding
                  ? 0
                  : H[d].textBlock.width),
              (H[d].textBlock.x = M - r),
              (c =
                H[d].textBlock.height < H[d].textBlock.maxHeight
                  ? H[d].textBlock.height
                  : H[d].textBlock.maxHeight),
              (e =
                H[d].textBlock.width < H[d].textBlock.maxWidth
                  ? H[d].textBlock.width
                  : H[d].textBlock.maxWidth),
              (H[d].height = c),
              (H[d].width = e),
              (c =
                "undefined" !== typeof a.x5
                  ? (a.y2 + a.y4) / 2
                  : (a.y2 + a.y3) / 2),
              (H[d].textBlock.y = c - H[d].height / 2),
              s.reversed
                ? (H[d].textBlock.y + H[d].height > U + A &&
                    (H[d].textBlock.y = U + A - H[d].height),
                  H[d].textBlock.y < ta - A && (H[d].textBlock.y = ta - A))
                : (H[d].textBlock.y < U - A && (H[d].textBlock.y = U - A),
                  H[d].textBlock.y + H[d].height > ta + A &&
                    (H[d].textBlock.y = ta + A - H[d].height));
      }
      function h() {
        var a, b, c, g;
        if ("inside" !== s.indexLabelPlacement)
          for (var f = 0; f < S.length; f++)
            0 == H[f].textBlock.text.length
              ? (H[f].isDirty = !0)
              : ((a = S[f]),
                (c =
                  "undefined" !== typeof a.x5
                    ? (a.y2 + a.y4) / 2
                    : (a.y2 + a.y3) / 2),
                (b = s.reversed
                  ? "undefined" !== typeof a.x5
                    ? c > Y
                      ? e(c).x2 + 1
                      : (a.x2 + a.x3) / 2 + 1
                    : (a.x2 + a.x3) / 2 + 1
                  : "undefined" !== typeof a.x5
                  ? c < Y
                    ? e(c).x2 + 1
                    : (a.x4 + a.x3) / 2 + 1
                  : (a.x2 + a.x3) / 2 + 1),
                (H[f].textBlock.x = b + V),
                (H[f].textBlock.y = c - H[f].height / 2),
                s.reversed
                  ? (H[f].textBlock.y + H[f].height > U + A &&
                      (H[f].textBlock.y = U + A - H[f].height),
                    H[f].textBlock.y < ta - A && (H[f].textBlock.y = ta - A))
                  : (H[f].textBlock.y < U - A && (H[f].textBlock.y = U - A),
                    H[f].textBlock.y + H[f].height > ta + A &&
                      (H[f].textBlock.y = ta + A - H[f].height)));
        else
          for (f = 0; f < S.length; f++)
            0 == H[f].textBlock.text.length
              ? (H[f].isDirty = !0)
              : ((a = S[f]),
                (b = a.height),
                (c = H[f].height),
                (g = H[f].width),
                b >= c
                  ? ((b =
                      f != ea
                        ? (a.x4 + a.x3) / 2 - g / 2
                        : (a.x5 + a.x4) / 2 - g / 2),
                    (c =
                      f != ea
                        ? (a.y1 + a.y3) / 2 - c / 2
                        : (a.y1 + a.y4) / 2 - c / 2),
                    (H[f].textBlock.x = b),
                    (H[f].textBlock.y = c))
                  : (H[f].isDirty = !0));
      }
      function r() {
        function a(b, c) {
          var f;
          if (0 > b || b >= H.length) return 0;
          var g,
            e = H[b].textBlock;
          if (0 > c) {
            c *= -1;
            g = n(b);
            f = d(g, b);
            if (f >= c) return (e.y -= c), c;
            if (0 == b) return 0 < f && (e.y -= f), f;
            f += a(g, -(c - f));
            0 < f && (e.y -= f);
            return f;
          }
          g = q(b);
          f = d(b, g);
          if (f >= c) return (e.y += c), c;
          if (b == S.length - 1) return 0 < f && (e.y += f), f;
          f += a(g, c - f);
          0 < f && (e.y += f);
          return f;
        }
        function b() {
          var a,
            f,
            g,
            e,
            h = 0,
            r;
          e = (Q - P + 2 * A) / m;
          r = m;
          for (var d, k = 1; k < r; k++) {
            g = k * e;
            for (var p = H.length - 1; 0 <= p; p--)
              !H[p].isDirty &&
                H[p].textBlock.y < g &&
                H[p].textBlock.y + H[p].height > g &&
                ((d = q(p)),
                !(d >= H.length - 1) &&
                  H[p].textBlock.y + H[p].height + fa > H[d].textBlock.y &&
                  (H[p].textBlock.y =
                    H[p].textBlock.y + H[p].height - g > g - H[p].textBlock.y
                      ? g + 1
                      : g - H[p].height - 1));
          }
          for (d = S.length - 1; 0 < d; d--)
            if (!H[d].isDirty) {
              g = n(d);
              if (0 > g && ((g = 0), H[g].isDirty)) break;
              if (H[d].textBlock.y < H[g].textBlock.y + H[g].height) {
                f = f || d;
                e = d;
                for (
                  r = 0;
                  H[e].textBlock.y < H[g].textBlock.y + H[g].height + fa;

                ) {
                  a = a || H[e].textBlock.y + H[e].height;
                  r += H[e].height;
                  r += fa;
                  e = g;
                  if (0 >= e) {
                    e = 0;
                    r += H[e].height;
                    break;
                  }
                  g = n(e);
                  if (0 > g) {
                    e = 0;
                    r += H[e].height;
                    break;
                  }
                }
                if (e != d) {
                  h = H[e].textBlock.y;
                  a -= h;
                  a = r - a;
                  h = c(a, f, e);
                  break;
                }
              }
            }
          return h;
        }
        function c(a, b, f) {
          var g = [],
            e = 0,
            h = 0;
          for (a = Math.abs(a); f <= b; f++) g.push(S[f]);
          g.sort(function (a, b) {
            return a.height - b.height;
          });
          for (f = 0; f < g.length; f++)
            if (((b = g[f]), e < a))
              h++,
                (e += H[b.id].height + fa),
                (H[b.id].textBlock.text = ""),
                (H[b.id].indexLabelText = ""),
                (H[b.id].isDirty = !0),
                H[b.id].textBlock.measureText();
            else break;
          return h;
        }
        for (var f, g, e, h, r, k, m = 1, p = 0; p < 2 * m; p++) {
          for (
            var l = H.length - 1;
            0 <= l &&
            !(0 <= n(l) && n(l),
            (e = H[l]),
            (h = e.textBlock),
            (k = (r = q(l) < S.length ? H[q(l)] : null) ? r.textBlock : null),
            (f = +e.height.toFixed(6)),
            (g = +h.y.toFixed(6)),
            !e.isDirty &&
              r &&
              g + f + fa > +k.y.toFixed(6) &&
              ((f = h.y + f + fa - k.y),
              (g = a(l, -f)),
              g < f && (0 < g && (f -= g), (g = a(q(l), f)), g != f)));
            l--
          );
          b();
        }
      }
      function d(a, b) {
        return (
          (b < S.length ? H[b].textBlock.y : s.reversed ? U + A : ta + A) -
          (0 > a
            ? s.reversed
              ? ta - A
              : U - A
            : H[a].textBlock.y + H[a].height + fa)
        );
      }
      function l(a, b, c) {
        var f,
          g,
          e,
          r = [],
          d = A,
          n = [];
        -1 !== b &&
          (0 <= X.indexOf(b)
            ? ((g = X.indexOf(b)), X.splice(g, 1))
            : (X.push(b),
              (X = X.sort(function (a, b) {
                return a - b;
              }))));
        if (0 === X.length) r = ja;
        else {
          g =
            (A *
              (1 != X.length || (0 != X[0] && X[0] != S.length - 1) ? 2 : 1)) /
            k();
          for (var q = 0; q < S.length; q++) {
            if (1 == X.length && 0 == X[0]) {
              if (0 === q) {
                r.push(ja[q]);
                f = d;
                continue;
              }
            } else 0 === q && (f = -1 * d);
            r.push(ja[q] + f);
            if (0 <= X.indexOf(q) || (q < S.length && 0 <= X.indexOf(q + 1)))
              f += g;
          }
        }
        e = (function () {
          for (var a = [], b = 0; b < S.length; b++) a.push(r[b] - S[b].y1);
          return a;
        })();
        var p = {
          startTime: new Date().getTime(),
          duration: c || 500,
          easingFunction: function (a, b, c, f) {
            return O.easing.easeOutQuart(a, b, c, f);
          },
          changeSection: function (a) {
            for (var b, c, f = 0; f < S.length; f++)
              (b = e[f]),
                (c = S[f]),
                (b *= a),
                "undefined" === typeof n[f] && (n[f] = 0),
                0 > n && (n *= -1),
                (c.y1 += b - n[f]),
                (c.y2 += b - n[f]),
                (c.y3 += b - n[f]),
                (c.y4 += b - n[f]),
                c.y5 && ((c.y5 += b - n[f]), (c.y6 += b - n[f])),
                (n[f] = b);
          },
        };
        a._animator.animate(
          0,
          c,
          function (c) {
            var f = a.plotArea.ctx || a.ctx;
            ia = !0;
            f.clearRect(v.x1, v.y1, v.x2 - v.x1, v.y2 - v.y1);
            f.fillStyle = a.backgroundColor;
            f.fillRect(v.x1, v.y1, v.width, v.height);
            p.changeSection(c, b);
            var g = {};
            g.dataSeries = s;
            g.dataPoint = s.reversed
              ? s.dataPoints[z.length - 1 - b]
              : s.dataPoints[b];
            g.index = s.reversed ? z.length - 1 - b : b;
            a.toolTip.highlightObjects([g]);
            for (g = 0; g < S.length; g++) ra(f, S[g], s.fillOpacity);
            w(f);
            K && ("inside" !== s.indexLabelPlacement ? m(f) : h(), u(f));
            1 <= c && (ia = !1);
          },
          null,
          O.easing.easeOutQuart
        );
      }
      function k() {
        for (var a = 0, b = 0; b < S.length - 1; b++)
          (0 <= X.indexOf(b) || 0 <= X.indexOf(b + 1)) && a++;
        return a;
      }
      function m(a) {
        for (var b, c, f, g, h = 0; h < S.length; h++)
          (g = 1 === H[h].lineThickness % 2 ? 0.5 : 0),
            (c = (((S[h].y2 + S[h].y4) / 2) << 0) + g),
            (b = e(c).x2 - 1),
            (f = H[h].textBlock.x),
            (g = ((H[h].textBlock.y + H[h].height / 2) << 0) + g),
            H[h].isDirty ||
              0 == H[h].lineThickness ||
              ((a.strokeStyle = H[h].lineColor),
              (a.lineWidth = H[h].lineThickness),
              a.setLineDash &&
                a.setLineDash(I(H[h].lineDashType, H[h].lineThickness)),
              a.beginPath(),
              a.moveTo(b, c),
              a.lineTo(f, g),
              a.stroke());
      }
      function n(a) {
        for (a -= 1; -1 <= a && -1 != a && H[a].isDirty; a--);
        return a;
      }
      function q(a) {
        for (a += 1; a <= S.length && a != S.length && H[a].isDirty; a++);
        return a;
      }
      function e(a) {
        for (var b, c = 0; c < z.length; c++)
          if (S[c].y1 < a && S[c].y4 > a) {
            b = S[c];
            break;
          }
        return b
          ? ((a = b.y6
              ? a > b.y6
                ? b.x3 + ((b.x4 - b.x3) / (b.y4 - b.y3)) * (a - b.y3)
                : b.x2 + ((b.x3 - b.x2) / (b.y3 - b.y2)) * (a - b.y2)
              : b.x2 + ((b.x3 - b.x2) / (b.y3 - b.y2)) * (a - b.y2)),
            { x1: a, x2: a })
          : -1;
      }
      function u(a) {
        for (var b = 0; b < S.length; b++)
          H[b].isDirty ||
            (a && (H[b].textBlock.ctx = a),
            (H[b].textBlock.y += H[b].textBlock._lineHeight / 2),
            H[b].textBlock.render(!0),
            (H[b].textBlock.y -= H[b].textBlock._lineHeight / 2));
      }
      function w(a) {
        x.plotArea.layoutManager.reset();
        a.roundRect || Aa(a);
        x.title &&
          (x.title.dockInsidePlotArea ||
            ("center" === x.title.horizontalAlign &&
              "center" === x.title.verticalAlign)) &&
          ((x.title.ctx = a), x.title.render());
        if (x.subtitles)
          for (var b = 0; b < x.subtitles.length; b++) {
            var c = x.subtitles[b];
            if (
              c.dockInsidePlotArea ||
              ("center" === c.horizontalAlign && "center" === c.verticalAlign)
            )
              (x.subtitles.ctx = a), c.render();
          }
        x.legend &&
          (x.legend.dockInsidePlotArea ||
            ("center" === x.legend.horizontalAlign &&
              "center" === x.legend.verticalAlign)) &&
          ((x.legend.ctx = a), x.legend.setLayout(), x.legend.render());
        wa.fNg && wa.fNg(x);
      }
      var x = this;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        for (
          var s = this.data[a.dataSeriesIndexes[0]],
            z = s.dataPoints,
            v = this.plotArea,
            A = 0.025 * v.width,
            C = 0.01 * v.width,
            D = 0,
            B = v.height - 2 * A,
            G = Math.min(v.width - 2 * C, 2.8 * v.height),
            K = !1,
            L = 0;
          L < z.length;
          L++
        )
          if (
            (!K &&
              "undefined" !== typeof z[L].indexLabel &&
              null !== z[L].indexLabel &&
              0 < z[L].indexLabel.toString().length &&
              (K = !0),
            !K &&
              "undefined" !== typeof z[L].label &&
              null !== z[L].label &&
              0 < z[L].label.toString().length &&
              (K = !0),
            (!K && "function" === typeof s.indexLabelFormatter) ||
              "function" === typeof z[L].indexLabelFormatter)
          )
            K = !0;
        K =
          K ||
          ("undefined" !== typeof s.indexLabel &&
            null !== s.indexLabel &&
            0 < s.indexLabel.toString().length);
        ("inside" !== s.indexLabelPlacement && K) ||
          (C = (v.width - 0.75 * G) / 2);
        var L = v.x1 + C,
          M = v.x2 - C,
          P = v.y1 + A,
          Q = v.y2 - A,
          T = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
        if (0 != s.length && s.dataPoints && s.visible && 0 !== z.length) {
          var N, E;
          a = (75 * G) / 100;
          var V = (30 * (M - a)) / 100;
          "funnel" === s.type
            ? ((N = p(s.options.neckHeight) ? 0.35 * B : s.neckHeight),
              (E = p(s.options.neckWidth) ? 0.25 * a : s.neckWidth),
              "string" === typeof N && N.match(/%$/)
                ? ((N = parseInt(N)), (N = (N * B) / 100))
                : (N = parseInt(N)),
              "string" === typeof E && E.match(/%$/)
                ? ((E = parseInt(E)), (E = (E * a) / 100))
                : (E = parseInt(E)),
              N > B ? (N = B) : 0 >= N && (N = 0),
              E > a ? (E = a - 0.5) : 0 >= E && (E = 0))
            : "pyramid" === s.type &&
              ((E = N = 0), (s.reversed = s.reversed ? !1 : !0));
          var C = L + a / 2,
            W = L,
            Z = L + a,
            U = s.reversed ? Q : P,
            R = C - E / 2,
            $ = C + E / 2,
            Y = s.reversed ? P + N : Q - N,
            ta = s.reversed ? P : Q;
          E = s.valueRepresents = s.valueRepresents
            ? s.valueRepresents
            : "height";
          L = [];
          a = [];
          var S = [],
            C = [],
            ba = P,
            ea,
            ca = (Y - U) / (R - W),
            ga = -ca,
            G = "area" === E ? c() : f();
          if (-1 !== G) {
            if (s.reversed)
              for (C.push(ba), E = G.length - 1; 0 < E; E--)
                (ba += G[E]), C.push(ba);
            else for (E = 0; E < G.length; E++) (ba += G[E]), C.push(ba);
            if (s.reversed)
              for (E = 0; E < G.length; E++)
                C[E] < Y
                  ? (L.push(R), a.push($), (ea = E))
                  : (L.push((C[E] - U + ca * W) / ca),
                    a.push((C[E] - U + ga * Z) / ga));
            else
              for (E = 0; E < G.length; E++)
                C[E] < Y
                  ? (L.push((C[E] - U + ca * W) / ca),
                    a.push((C[E] - U + ga * Z) / ga),
                    (ea = E))
                  : (L.push(R), a.push($));
            for (E = 0; E < G.length - 1; E++)
              (ba = s.reversed
                ? z[z.length - 1 - E].color
                  ? z[z.length - 1 - E].color
                  : s._colorSet[(z.length - 1 - E) % s._colorSet.length]
                : z[E].color
                ? z[E].color
                : s._colorSet[E % s._colorSet.length]),
                E === ea
                  ? S.push({
                      x1: L[E],
                      y1: C[E],
                      x2: a[E],
                      y2: C[E],
                      x3: $,
                      y3: Y,
                      x4: a[E + 1],
                      y4: C[E + 1],
                      x5: L[E + 1],
                      y5: C[E + 1],
                      x6: R,
                      y6: Y,
                      id: E,
                      height: C[E + 1] - C[E],
                      color: ba,
                    })
                  : S.push({
                      x1: L[E],
                      y1: C[E],
                      x2: a[E],
                      y2: C[E],
                      x3: a[E + 1],
                      y3: C[E + 1],
                      x4: L[E + 1],
                      y4: C[E + 1],
                      id: E,
                      height: C[E + 1] - C[E],
                      color: ba,
                    }),
                s.dataPointEOs[E] &&
                  S[E] &&
                  (s.dataPointEOs[E].sectionsofFunnel = S[E]);
            var fa = 2,
              H = [],
              ia = !1,
              X = [],
              ja = [],
              L = !1;
            a = a = 0;
            Ea(X);
            for (E = 0; E < z.length; E++)
              z[E].exploded &&
                ((L = !0), s.reversed ? X.push(z.length - 1 - E) : X.push(E));
            T.clearRect(v.x1, v.y1, v.width, v.height);
            T.fillStyle = x.backgroundColor;
            T.fillRect(v.x1, v.y1, v.width, v.height);
            if (
              K &&
              s.visible &&
              (b(), h(), "inside" !== s.indexLabelPlacement)
            ) {
              g();
              r();
              for (E = 0; E < z.length; E++)
                H[E].isDirty ||
                  ((a = H[E].textBlock.x + H[E].width),
                  (a = (M - a) / 2),
                  0 == E && (D = a),
                  D > a && (D = a));
              for (E = 0; E < S.length; E++)
                (S[E].x1 += D),
                  (S[E].x2 += D),
                  (S[E].x3 += D),
                  (S[E].x4 += D),
                  S[E].x5 && ((S[E].x5 += D), (S[E].x6 += D)),
                  (H[E].textBlock.x += D);
            }
            for (E = 0; E < S.length; E++)
              (D = S[E]), ra(T, D, s.fillOpacity), ja.push(D.y1);
            w(T);
            K &&
              s.visible &&
              ("inside" === s.indexLabelPlacement || x.animationEnabled || m(T),
              x.animationEnabled || u());
            if (!K)
              for (E = 0; E < z.length; E++)
                (D = s.dataPointIds[E]),
                  (a = {
                    id: D,
                    objectType: "dataPoint",
                    dataPointIndex: E,
                    dataSeriesIndex: 0,
                    funnelSection: S[s.reversed ? z.length - 1 - E : E],
                  }),
                  (x._eventManager.objectMap[D] = a);
            !x.animationEnabled && L
              ? l(x, -1, 0)
              : x.animationEnabled && !x.animatedRender && l(x, -1, 0);
            this.funnelPyramidClickHandler = function (a) {
              var b = -1;
              if (
                !ia &&
                !x.isAnimating &&
                (p(a.dataSeries.explodeOnClick) ||
                  a.dataSeries.explodeOnClick) &&
                ((b = s.reversed
                  ? z.length - 1 - a.dataPointIndex
                  : a.dataPointIndex),
                0 <= b)
              ) {
                a = b;
                if ("funnel" === s.type || "pyramid" === s.type)
                  s.reversed
                    ? (z[z.length - 1 - a].exploded = z[z.length - 1 - a]
                        .exploded
                        ? !1
                        : !0)
                    : (z[a].exploded = z[a].exploded ? !1 : !0);
                l(x, b, 500);
              }
            };
            return {
              source: T,
              dest: this.plotArea.ctx,
              animationCallback: function (a, b) {
                O.fadeInAnimation(a, b);
                1 <= a && (l(x, -1, 500), w(x.plotArea.ctx || x.ctx));
              },
              easingFunction: O.easing.easeInQuad,
              animationBase: 0,
            };
          }
        }
      }
    };
    l.prototype.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (a) {
          window.setTimeout(a, 1e3 / 60);
        }
      );
    })();
    l.prototype.cancelRequestAnimFrame =
      window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout;
    l.prototype.set = function (a, f, c) {
      c = "undefined" === typeof c ? !0 : c;
      "options" === a
        ? ((this.options = f), c && this.render())
        : l.base.set.call(this, a, f, c);
    };
    l.prototype.exportChart = function (a) {
      a = "undefined" === typeof a ? {} : a;
      var f = a.format ? a.format : "png",
        c = a.fileName ? a.fileName : this.exportFileName;
      if (a.toDataURL) return this.canvas.toDataURL("image/" + f);
      var b = this.canvas;
      if (b && f && c) {
        c = c + "." + f;
        a = "image/" + f;
        var b = b.toDataURL(a),
          g = !1,
          h = document.createElement("a");
        h.download = c;
        h.href = b;
        if ("undefined" !== typeof Blob && new Blob()) {
          for (
            var r = b.replace(/^data:[a-z\/]*;base64,/, ""),
              r = atob(r),
              d = new ArrayBuffer(r.length),
              d = new Uint8Array(d),
              p = 0;
            p < r.length;
            p++
          )
            d[p] = r.charCodeAt(p);
          f = new Blob([d.buffer], { type: "image/" + f });
          try {
            window.navigator.msSaveBlob(f, c), (g = !0);
          } catch (k) {
            (h.dataset.downloadurl = [a, h.download, h.href].join(":")),
              (h.href = window.URL.createObjectURL(f));
          }
        }
        if (!g)
          try {
            (event = document.createEvent("MouseEvents")),
              event.initMouseEvent(
                "click",
                !0,
                !1,
                window,
                0,
                0,
                0,
                0,
                0,
                !1,
                !1,
                !1,
                !1,
                0,
                null
              ),
              h.dispatchEvent
                ? h.dispatchEvent(event)
                : h.fireEvent && h.fireEvent("onclick");
          } catch (m) {
            (f = window.open()),
              f.document.write(
                "<img src='" +
                  b +
                  "'></img><div>Please right click on the image and save it to your device</div>"
              ),
              f.document.close();
          }
      }
    };
    l.prototype.print = function () {
      var a = this.exportChart({ toDataURL: !0 }),
        f = document.createElement("iframe");
      f.setAttribute("class", "canvasjs-chart-print-frame");
      Q(f, {
        position: "absolute",
        width: "100%",
        border: "0px",
        margin: "0px 0px 0px 0px",
        padding: "0px 0px 0px 0px",
      });
      f.style.height = this.height + "px";
      this._canvasJSContainer.appendChild(f);
      var c = this,
        b = f.contentWindow || f.contentDocument.document || f.contentDocument;
      b.document.open();
      b.document.write(
        '<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>'
      );
      b.document.body &&
        b.document.body.style &&
        ((b.document.body.style.margin = "0px 0px 0px 0px"),
        (b.document.body.style.padding = "0px 0px 0px 0px"));
      b.document.close();
      setTimeout(function () {
        b.focus();
        b.print();
        setTimeout(function () {
          c._canvasJSContainer.removeChild(f);
        }, 1e3);
      }, 500);
    };
    l.prototype.getPercentAndTotal = function (a, f) {
      var c = null,
        b = null,
        g = (c = null);
      if (0 <= a.type.indexOf("stacked"))
        (b = 0),
          (c = f.x.getTime ? f.x.getTime() : f.x),
          c in a.plotUnit.yTotals &&
            ((b = a.plotUnit.yTotals[c]),
            (c = a.plotUnit.yAbsTotals[c]),
            (g = isNaN(f.y) ? 0 : 0 === c ? 0 : 100 * (f.y / c)));
      else if (
        "pie" === a.type ||
        "doughnut" === a.type ||
        "funnel" === a.type ||
        "pyramid" === a.type
      ) {
        for (c = b = 0; c < a.dataPoints.length; c++)
          isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
        g = isNaN(f.y) ? 0 : 100 * (f.y / b);
      }
      return { percent: g, total: b };
    };
    l.prototype.replaceKeywordsWithValue = function (a, f, c, b, g) {
      var h = this;
      g = "undefined" === typeof g ? 0 : g;
      if (
        (0 <= c.type.indexOf("stacked") ||
          "pie" === c.type ||
          "doughnut" === c.type ||
          "funnel" === c.type ||
          "pyramid" === c.type) &&
        (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
      ) {
        var r = "#percent",
          d = "#total",
          p = this.getPercentAndTotal(c, f),
          d = isNaN(p.total) ? d : p.total,
          r = isNaN(p.percent) ? r : p.percent;
        do {
          p = "";
          if (c.percentFormatString) p = c.percentFormatString;
          else {
            var p = "#,##0.",
              k = Math.max(Math.ceil(Math.log(1 / Math.abs(r)) / Math.LN10), 2);
            if (isNaN(k) || !isFinite(k)) k = 2;
            for (var m = 0; m < k; m++) p += "#";
            c.percentFormatString = p;
          }
          a = a.replace("#percent", ga(r, p, h._cultureInfo));
          a = a.replace(
            "#total",
            ga(
              d,
              c.yValueFormatString ? c.yValueFormatString : "#,##0.########",
              h._cultureInfo
            )
          );
        } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
      }
      return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function (a) {
        if (
          ('"' === a[0] && '"' === a[a.length - 1]) ||
          ("'" === a[0] && "'" === a[a.length - 1])
        )
          return a.slice(1, a.length - 1);
        a = Ha(a.slice(1, a.length - 1));
        a = a.replace("#index", g);
        var r = null;
        try {
          var e = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
          e && 0 < e.length && ((r = Ha(e[2])), (a = Ha(e[1])));
        } catch (d) {}
        e = null;
        if ("color" === a)
          return "waterfall" === c.type
            ? f.color
              ? f.color
              : 0 < f.y
              ? c.risingColor
              : c.fallingColor
            : "error" === c.type
            ? c.color
              ? c.color
              : c._colorSet[r % c._colorSet.length]
            : f.color
            ? f.color
            : c.color
            ? c.color
            : c._colorSet[b % c._colorSet.length];
        if (f.hasOwnProperty(a)) e = f;
        else if (c.hasOwnProperty(a)) e = c;
        else return "";
        e = e[a];
        null !== r && (e = e[r]);
        return "x" === a
          ? ((c.axisX && "dateTime" === c.axisX.valueType) ||
              "dateTime" === c.xValueType ||
              (f.x && f.x.getTime)) &&
            !c.axisX.logarithmic
            ? Da(
                e,
                f.xValueFormatString
                  ? f.xValueFormatString
                  : c.xValueFormatString
                  ? c.xValueFormatString
                  : (c.xValueFormatString =
                      h.axisX && h.axisX.autoValueFormatString
                        ? h.axisX.autoValueFormatString
                        : "DD MMM YY"),
                h._cultureInfo
              )
            : ga(
                e,
                f.xValueFormatString
                  ? f.xValueFormatString
                  : c.xValueFormatString
                  ? c.xValueFormatString
                  : (c.xValueFormatString = "#,##0.########"),
                h._cultureInfo
              )
          : "y" === a
          ? ga(
              e,
              f.yValueFormatString
                ? f.yValueFormatString
                : c.yValueFormatString
                ? c.yValueFormatString
                : (c.yValueFormatString = "#,##0.########"),
              h._cultureInfo
            )
          : "z" === a
          ? ga(
              e,
              f.zValueFormatString
                ? f.zValueFormatString
                : c.zValueFormatString
                ? c.zValueFormatString
                : (c.zValueFormatString = "#,##0.########"),
              h._cultureInfo
            )
          : e;
      });
    };
    qa(T, Z);
    T.prototype.setLayout = function () {
      var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
        f = a.layoutManager.getFreeSpace(),
        c = null,
        b = 0,
        g = 0,
        h = 0,
        r = 0,
        d = (this.markerMargin =
          this.chart.options.legend &&
          !p(this.chart.options.legend.markerMargin)
            ? this.chart.options.legend.markerMargin
            : 0.3 * this.fontSize);
      this.height = 0;
      var l = [],
        k = [];
      if ("top" === this.verticalAlign || "bottom" === this.verticalAlign)
        (this.orientation = "horizontal"),
          (c = this.verticalAlign),
          (h = this.maxWidth =
            null !== this.maxWidth ? this.maxWidth : f.width),
          (r = this.maxHeight =
            null !== this.maxHeight ? this.maxHeight : 0.5 * f.height);
      else if ("center" === this.verticalAlign) {
        this.orientation = "vertical";
        if (
          "left" === this.horizontalAlign ||
          "center" === this.horizontalAlign ||
          "right" === this.horizontalAlign
        )
          c = this.horizontalAlign;
        h = this.maxWidth =
          null !== this.maxWidth ? this.maxWidth : 0.5 * f.width;
        r = this.maxHeight =
          null !== this.maxHeight ? this.maxHeight : f.height;
      }
      this.errorMarkerColor = [];
      for (var m = 0; m < this.dataSeries.length; m++) {
        var n = this.dataSeries[m];
        if (n.dataPoints && n.dataPoints.length) {
          if (
            "pie" !== n.type &&
            "doughnut" !== n.type &&
            "funnel" !== n.type &&
            "pyramid" !== n.type
          ) {
            var q = (n.legendMarkerType = n.legendMarkerType
                ? n.legendMarkerType
                : ("line" !== n.type &&
                    "stepLine" !== n.type &&
                    "spline" !== n.type &&
                    "scatter" !== n.type &&
                    "bubble" !== n.type) ||
                  !n.markerType
                ? "error" === n.type && n._linkedSeries
                  ? n._linkedSeries.legendMarkerType
                    ? n._linkedSeries.legendMarkerType
                    : W.getDefaultLegendMarker(n._linkedSeries.type)
                  : W.getDefaultLegendMarker(n.type)
                : n.markerType),
              e = n.legendText
                ? n.legendText
                : this.itemTextFormatter
                ? this.itemTextFormatter({
                    chart: this.chart,
                    legend: this.options,
                    dataSeries: n,
                    dataPoint: null,
                  })
                : n.name,
              t = (n.legendMarkerColor = n.legendMarkerColor
                ? n.legendMarkerColor
                : n.markerColor
                ? n.markerColor
                : "error" === n.type
                ? p(n.whiskerColor)
                  ? n._colorSet[0]
                  : n.whiskerColor
                : n._colorSet[0]),
              w =
                n.markerSize ||
                ("line" !== n.type &&
                  "stepLine" !== n.type &&
                  "spline" !== n.type)
                  ? 0.75 * this.lineHeight
                  : 0,
              x = n.legendMarkerBorderColor
                ? n.legendMarkerBorderColor
                : n.markerBorderColor,
              s = n.legendMarkerBorderThickness
                ? n.legendMarkerBorderThickness
                : n.markerBorderThickness
                ? Math.max(1, Math.round(0.2 * w))
                : 0;
            "error" === n.type && this.errorMarkerColor.push(t);
            e = n.legendText = this.chart.replaceKeywordsWithValue(
              e,
              n.dataPoints[0],
              n,
              m
            );
            q = {
              markerType: q,
              markerColor: t,
              text: e,
              textBlock: null,
              chartType: n.type,
              markerSize: w,
              lineColor: n._colorSet[0],
              dataSeriesIndex: n.index,
              dataPointIndex: null,
              markerBorderColor: x,
              markerBorderThickness: s,
            };
            l.push(q);
          } else
            for (var u = 0; u < n.dataPoints.length; u++) {
              var v = n.dataPoints[u],
                q = v.legendMarkerType
                  ? v.legendMarkerType
                  : n.legendMarkerType
                  ? n.legendMarkerType
                  : W.getDefaultLegendMarker(n.type),
                e = v.legendText
                  ? v.legendText
                  : n.legendText
                  ? n.legendText
                  : this.itemTextFormatter
                  ? this.itemTextFormatter({
                      chart: this.chart,
                      legend: this.options,
                      dataSeries: n,
                      dataPoint: v,
                    })
                  : v.name
                  ? v.name
                  : "DataPoint: " + (u + 1),
                t = v.legendMarkerColor
                  ? v.legendMarkerColor
                  : n.legendMarkerColor
                  ? n.legendMarkerColor
                  : v.color
                  ? v.color
                  : n.color
                  ? n.color
                  : n._colorSet[u % n._colorSet.length],
                w = 0.75 * this.lineHeight,
                x = v.legendMarkerBorderColor
                  ? v.legendMarkerBorderColor
                  : n.legendMarkerBorderColor
                  ? n.legendMarkerBorderColor
                  : v.markerBorderColor
                  ? v.markerBorderColor
                  : n.markerBorderColor,
                s = v.legendMarkerBorderThickness
                  ? v.legendMarkerBorderThickness
                  : n.legendMarkerBorderThickness
                  ? n.legendMarkerBorderThickness
                  : v.markerBorderThickness || n.markerBorderThickness
                  ? Math.max(1, Math.round(0.2 * w))
                  : 0,
                e = this.chart.replaceKeywordsWithValue(e, v, n, u),
                q = {
                  markerType: q,
                  markerColor: t,
                  text: e,
                  textBlock: null,
                  chartType: n.type,
                  markerSize: w,
                  dataSeriesIndex: m,
                  dataPointIndex: u,
                  markerBorderColor: x,
                  markerBorderThickness: s,
                };
              (v.showInLegend || (n.showInLegend && !1 !== v.showInLegend)) &&
                l.push(q);
            }
          p(n.legendText) && (n.legendText = n.name);
        }
      }
      !0 === this.reversed && l.reverse();
      if (0 < l.length) {
        n = null;
        e = v = u = 0;
        v =
          null !== this.itemWidth
            ? null !== this.itemMaxWidth
              ? Math.min(this.itemWidth, this.itemMaxWidth, h)
              : (this.itemMaxWidth = Math.min(this.itemWidth, h))
            : null !== this.itemMaxWidth
            ? Math.min(this.itemMaxWidth, h)
            : (this.itemMaxWidth = h);
        w = 0 === w ? 0.75 * this.lineHeight : w;
        v = (this.itemMaxWidth ? this.itemMaxWidth : v) - (w + d);
        for (m = 0; m < l.length; m++) {
          q = l[m];
          t = v;
          if (
            "line" === q.chartType ||
            "spline" === q.chartType ||
            "stepLine" === q.chartType
          )
            t -= 2 * 0.1 * this.lineHeight;
          if (
            !(
              0 >= r ||
              "undefined" === typeof r ||
              0 >= t ||
              "undefined" === typeof t
            )
          )
            if ("horizontal" === this.orientation) {
              q.textBlock = new ka(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: t,
                maxHeight: this.itemWrap ? r : this.lineHeight,
                angle: 0,
                text: q.text,
                textAlign: "left",
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                textBaseline: "middle",
              });
              q.textBlock.measureText();
              null !== this.itemWidth &&
                (q.textBlock.width =
                  this.itemWidth -
                  (w +
                    d +
                    ("line" === q.chartType ||
                    "spline" === q.chartType ||
                    "stepLine" === q.chartType
                      ? 2 * 0.1 * this.lineHeight
                      : 0)));
              if (
                !n ||
                n.width +
                  Math.round(
                    q.textBlock.width +
                      w +
                      d +
                      (0 === n.width ? 0 : this.horizontalSpacing) +
                      ("line" === q.chartType ||
                      "spline" === q.chartType ||
                      "stepLine" === q.chartType
                        ? 2 * 0.1 * this.lineHeight
                        : 0)
                  ) >
                  h
              )
                (n = { items: [], width: 0 }),
                  k.push(n),
                  (this.height += e),
                  (e = 0);
              e = Math.max(
                e,
                q.textBlock.height ? q.textBlock.height : this.lineHeight
              );
              q.textBlock.x = n.width;
              q.textBlock.y = 0;
              n.width += Math.round(
                q.textBlock.width +
                  w +
                  d +
                  (0 === n.width ? 0 : this.horizontalSpacing) +
                  ("line" === q.chartType ||
                  "spline" === q.chartType ||
                  "stepLine" === q.chartType
                    ? 2 * 0.1 * this.lineHeight
                    : 0)
              );
              n.items.push(q);
              this.width = Math.max(n.width, this.width);
            } else
              (q.textBlock = new ka(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: v,
                maxHeight: !0 === this.itemWrap ? r : 1.5 * this.fontSize,
                angle: 0,
                text: q.text,
                textAlign: "left",
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                textBaseline: "middle",
              })),
                q.textBlock.measureText(),
                null !== this.itemWidth &&
                  (q.textBlock.width =
                    this.itemWidth -
                    (w +
                      d +
                      ("line" === q.chartType ||
                      "spline" === q.chartType ||
                      "stepLine" === q.chartType
                        ? 2 * 0.1 * this.lineHeight
                        : 0))),
                this.height < r - this.lineHeight
                  ? ((n = { items: [], width: 0 }), k.push(n))
                  : ((n = k[u]), (u = (u + 1) % k.length)),
                n &&
                  ((this.height += q.textBlock.height
                    ? q.textBlock.height
                    : this.lineHeight),
                  (q.textBlock.x = n.width),
                  (q.textBlock.y = 0),
                  (n.width += Math.round(
                    q.textBlock.width +
                      w +
                      d +
                      (0 === n.width ? 0 : this.horizontalSpacing) +
                      ("line" === q.chartType ||
                      "spline" === q.chartType ||
                      "stepLine" === q.chartType
                        ? 2 * 0.1 * this.lineHeight
                        : 0)
                  )),
                  n.items.push(q),
                  (this.width = Math.max(n.width, this.width)));
        }
        this.height =
          !1 === this.itemWrap ? k.length * this.lineHeight : this.height + e;
        this.height = Math.min(r, this.height);
        this.width = Math.min(h, this.width);
      }
      "top" === this.verticalAlign
        ? ((g =
            "left" === this.horizontalAlign
              ? f.x1
              : "right" === this.horizontalAlign
              ? f.x2 - this.width
              : f.x1 + f.width / 2 - this.width / 2),
          (b = f.y1))
        : "center" === this.verticalAlign
        ? ((g =
            "left" === this.horizontalAlign
              ? f.x1
              : "right" === this.horizontalAlign
              ? f.x2 - this.width
              : f.x1 + f.width / 2 - this.width / 2),
          (b = f.y1 + f.height / 2 - this.height / 2))
        : "bottom" === this.verticalAlign &&
          ((g =
            "left" === this.horizontalAlign
              ? f.x1
              : "right" === this.horizontalAlign
              ? f.x2 - this.width
              : f.x1 + f.width / 2 - this.width / 2),
          (b = f.y2 - this.height));
      this.items = l;
      for (m = 0; m < this.items.length; m++)
        (q = l[m]),
          (q.id = ++this.chart._eventManager.lastObjectId),
          (this.chart._eventManager.objectMap[q.id] = {
            id: q.id,
            objectType: "legendItem",
            legendItemIndex: m,
            dataSeriesIndex: q.dataSeriesIndex,
            dataPointIndex: q.dataPointIndex,
          });
      this.markerSize = w;
      this.rows = k;
      0 < l.length &&
        a.layoutManager.registerSpace(c, {
          width: this.width + 2 + 2,
          height: this.height + 5 + 5,
        });
      this.bounds = { x1: g, y1: b, x2: g + this.width, y2: b + this.height };
    };
    T.prototype.render = function () {
      var a = this.bounds.x1,
        f = this.bounds.y1,
        c = this.markerMargin,
        b = this.maxWidth,
        g = this.maxHeight,
        h = this.markerSize,
        r = this.rows;
      ((0 < this.borderThickness && this.borderColor) ||
        this.backgroundColor) &&
        this.ctx.roundRect(
          a,
          f,
          this.width,
          this.height,
          this.cornerRadius,
          this.borderThickness,
          this.backgroundColor,
          this.borderColor
        );
      for (var d = 0, p = 0; p < r.length; p++) {
        for (var k = r[p], m = 0, n = 0; n < k.items.length; n++) {
          var q = k.items[n],
            e =
              q.textBlock.x + a + (0 === n ? 0.2 * h : this.horizontalSpacing),
            l = f + d,
            t = e;
          this.chart.data[q.dataSeriesIndex].visible ||
            (this.ctx.globalAlpha = 0.5);
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.rect(a, f, b, Math.max(g - (g % this.lineHeight), 0));
          this.ctx.clip();
          if (
            "line" === q.chartType ||
            "stepLine" === q.chartType ||
            "spline" === q.chartType
          )
            (this.ctx.strokeStyle = q.lineColor),
              (this.ctx.lineWidth = Math.ceil(this.lineHeight / 8)),
              this.ctx.beginPath(),
              this.ctx.moveTo(
                e - 0.1 * this.lineHeight,
                l + this.lineHeight / 2
              ),
              this.ctx.lineTo(
                e + 0.85 * this.lineHeight,
                l + this.lineHeight / 2
              ),
              this.ctx.stroke(),
              (t -= 0.1 * this.lineHeight);
          if ("error" === q.chartType) {
            this.ctx.strokeStyle = this.errorMarkerColor[0];
            this.ctx.lineWidth = h / 8;
            this.ctx.beginPath();
            var x = e - 0.08 * this.lineHeight + 0.1 * this.lineHeight,
              s = l + 0.15 * this.lineHeight,
              u = 0.7 * this.lineHeight,
              v = u + 0.02 * this.lineHeight;
            this.ctx.moveTo(x, s);
            this.ctx.lineTo(x + u, s);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(x + u / 2, s);
            this.ctx.lineTo(x + u / 2, s + v);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(x, s + v);
            this.ctx.lineTo(x + u, s + v);
            this.ctx.stroke();
            this.errorMarkerColor.shift();
          }
          Y.drawMarker(
            e + h / 2,
            l + this.lineHeight / 2,
            this.ctx,
            q.markerType,
            "error" === q.chartType ||
              "line" === q.chartType ||
              "spline" === q.chartType
              ? q.markerSize / 2
              : q.markerSize,
            q.markerColor,
            q.markerBorderColor,
            q.markerBorderThickness
          );
          q.textBlock.x = e + c + h;
          if (
            "line" === q.chartType ||
            "stepLine" === q.chartType ||
            "spline" === q.chartType
          )
            q.textBlock.x += 0.1 * this.lineHeight;
          q.textBlock.y = Math.round(l + this.lineHeight / 2);
          q.textBlock.render(!0);
          this.ctx.restore();
          m =
            0 < n
              ? Math.max(
                  m,
                  q.textBlock.height ? q.textBlock.height : this.lineHeight
                )
              : q.textBlock.height
              ? q.textBlock.height
              : this.lineHeight;
          this.chart.data[q.dataSeriesIndex].visible ||
            (this.ctx.globalAlpha = 1);
          e = V(q.id);
          this.ghostCtx.fillStyle = e;
          this.ghostCtx.beginPath();
          this.ghostCtx.fillRect(
            t,
            q.textBlock.y - this.lineHeight / 2,
            q.textBlock.x + q.textBlock.width - t,
            q.textBlock.height ? q.textBlock.height : this.lineHeight
          );
          q.x1 = this.chart._eventManager.objectMap[q.id].x1 = t;
          q.y1 = this.chart._eventManager.objectMap[q.id].y1 =
            q.textBlock.y - this.lineHeight / 2;
          q.x2 = this.chart._eventManager.objectMap[q.id].x2 =
            q.textBlock.x + q.textBlock.width;
          q.y2 = this.chart._eventManager.objectMap[q.id].y2 =
            q.textBlock.y +
            (q.textBlock.height ? q.textBlock.height : this.lineHeight) -
            this.lineHeight / 2;
        }
        d += m;
      }
    };
    qa(W, Z);
    W.prototype.getDefaultAxisPlacement = function () {
      var a = this.type;
      if (
        "column" === a ||
        "line" === a ||
        "stepLine" === a ||
        "spline" === a ||
        "area" === a ||
        "stepArea" === a ||
        "splineArea" === a ||
        "stackedColumn" === a ||
        "stackedLine" === a ||
        "bubble" === a ||
        "scatter" === a ||
        "stackedArea" === a ||
        "stackedColumn100" === a ||
        "stackedLine100" === a ||
        "stackedArea100" === a ||
        "candlestick" === a ||
        "ohlc" === a ||
        "rangeColumn" === a ||
        "rangeArea" === a ||
        "rangeSplineArea" === a ||
        "boxAndWhisker" === a ||
        "waterfall" === a
      )
        return "normal";
      if (
        "bar" === a ||
        "stackedBar" === a ||
        "stackedBar100" === a ||
        "rangeBar" === a
      )
        return "xySwapped";
      if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a)
        return "none";
      "error" !== a && window.console.log("Unknown Chart Type: " + a);
      return null;
    };
    W.getDefaultLegendMarker = function (a) {
      if (
        "column" === a ||
        "stackedColumn" === a ||
        "stackedLine" === a ||
        "bar" === a ||
        "stackedBar" === a ||
        "stackedBar100" === a ||
        "bubble" === a ||
        "scatter" === a ||
        "stackedColumn100" === a ||
        "stackedLine100" === a ||
        "stepArea" === a ||
        "candlestick" === a ||
        "ohlc" === a ||
        "rangeColumn" === a ||
        "rangeBar" === a ||
        "rangeArea" === a ||
        "rangeSplineArea" === a ||
        "boxAndWhisker" === a ||
        "waterfall" === a
      )
        return "square";
      if (
        "line" === a ||
        "stepLine" === a ||
        "spline" === a ||
        "pie" === a ||
        "doughnut" === a
      )
        return "circle";
      if (
        "area" === a ||
        "splineArea" === a ||
        "stackedArea" === a ||
        "stackedArea100" === a ||
        "funnel" === a ||
        "pyramid" === a
      )
        return "triangle";
      if ("error" === a) return "none";
      window.console.log("Unknown Chart Type: " + a);
      return null;
    };
    W.prototype.getDataPointAtX = function (a, f) {
      if (!this.dataPoints || 0 === this.dataPoints.length) return null;
      var c = { dataPoint: null, distance: Infinity, index: NaN },
        b = null,
        g = 0,
        h = 0,
        d = 1,
        p = Infinity,
        l = 0,
        k = 0,
        m = 0;
      "none" !== this.chart.plotInfo.axisPlacement &&
        (this.axisX.logarithmic
          ? ((m = Math.log(
              this.dataPoints[this.dataPoints.length - 1].x /
                this.dataPoints[0].x
            )),
            (m =
              1 < m
                ? Math.min(
                    Math.max(
                      (((this.dataPoints.length - 1) / m) *
                        Math.log(a / this.dataPoints[0].x)) >>
                        0,
                      0
                    ),
                    this.dataPoints.length
                  )
                : 0))
          : ((m =
              this.dataPoints[this.dataPoints.length - 1].x -
              this.dataPoints[0].x),
            (m =
              0 < m
                ? Math.min(
                    Math.max(
                      (((this.dataPoints.length - 1) / m) *
                        (a - this.dataPoints[0].x)) >>
                        0,
                      0
                    ),
                    this.dataPoints.length
                  )
                : 0)));
      for (;;) {
        h = 0 < d ? m + g : m - g;
        if (0 <= h && h < this.dataPoints.length) {
          var b = this.dataPoints[h],
            n =
              this.axisX && this.axisX.logarithmic
                ? b.x > a
                  ? b.x / a
                  : a / b.x
                : Math.abs(b.x - a);
          n < c.distance &&
            ((c.dataPoint = b), (c.distance = n), (c.index = h));
          b = n;
          b <= p ? (p = b) : 0 < d ? l++ : k++;
          if (1e3 < l && 1e3 < k) break;
        } else if (0 > m - g && m + g >= this.dataPoints.length) break;
        -1 === d ? (g++, (d = 1)) : (d = -1);
      }
      return f ||
        (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !==
          (a.getTime ? a.getTime() : a)
        ? f && null !== c.dataPoint
          ? c
          : null
        : c;
    };
    W.prototype.getDataPointAtXY = function (a, f, c) {
      if (
        !this.dataPoints ||
        0 === this.dataPoints.length ||
        a < this.chart.plotArea.x1 ||
        a > this.chart.plotArea.x2 ||
        f < this.chart.plotArea.y1 ||
        f > this.chart.plotArea.y2
      )
        return null;
      c = c || !1;
      var b = [],
        g = 0,
        h = 0,
        d = 1,
        l = !1,
        t = Infinity,
        k = 0,
        m = 0,
        n = 0;
      if ("none" !== this.chart.plotInfo.axisPlacement)
        if (
          ((n = (
            this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]
          ).getXValueAt({ x: a, y: f })),
          this.axisX.logarithmic)
        )
          var q = Math.log(
              this.dataPoints[this.dataPoints.length - 1].x /
                this.dataPoints[0].x
            ),
            n =
              1 < q
                ? Math.min(
                    Math.max(
                      (((this.dataPoints.length - 1) / q) *
                        Math.log(n / this.dataPoints[0].x)) >>
                        0,
                      0
                    ),
                    this.dataPoints.length
                  )
                : 0;
        else
          (q =
            this.dataPoints[this.dataPoints.length - 1].x -
            this.dataPoints[0].x),
            (n =
              0 < q
                ? Math.min(
                    Math.max(
                      (((this.dataPoints.length - 1) / q) *
                        (n - this.dataPoints[0].x)) >>
                        0,
                      0
                    ),
                    this.dataPoints.length
                  )
                : 0);
      for (;;) {
        h = 0 < d ? n + g : n - g;
        if (0 <= h && h < this.dataPoints.length) {
          var q = this.chart._eventManager.objectMap[this.dataPointIds[h]],
            e = this.dataPoints[h],
            u = null;
          if (q) {
            switch (this.type) {
              case "column":
              case "stackedColumn":
              case "stackedColumn100":
              case "bar":
              case "stackedBar":
              case "stackedBar100":
              case "rangeColumn":
              case "rangeBar":
              case "waterfall":
              case "error":
                a >= q.x1 &&
                  a <= q.x2 &&
                  f >= q.y1 &&
                  f <= q.y2 &&
                  (b.push({
                    dataPoint: e,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: Math.min(
                      Math.abs(q.x1 - a),
                      Math.abs(q.x2 - a),
                      Math.abs(q.y1 - f),
                      Math.abs(q.y2 - f)
                    ),
                  }),
                  (l = !0));
                break;
              case "line":
              case "stepLine":
              case "spline":
              case "area":
              case "stepArea":
              case "stackedArea":
              case "stackedArea100":
              case "splineArea":
              case "scatter":
                var w = na("markerSize", e, this) || 4,
                  x = c ? 20 : w,
                  u = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - f, 2));
                u <= x &&
                  b.push({
                    dataPoint: e,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: u,
                  });
                q = Math.abs(q.x1 - a);
                q <= t ? (t = q) : 0 < d ? k++ : m++;
                u <= w / 2 && (l = !0);
                break;
              case "rangeArea":
              case "rangeSplineArea":
                w = na("markerSize", e, this) || 4;
                x = c ? 20 : w;
                u = Math.min(
                  Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - f, 2)),
                  Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - f, 2))
                );
                u <= x &&
                  b.push({
                    dataPoint: e,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: u,
                  });
                q = Math.abs(q.x1 - a);
                q <= t ? (t = q) : 0 < d ? k++ : m++;
                u <= w / 2 && (l = !0);
                break;
              case "bubble":
                w = q.size;
                u = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - f, 2));
                u <= w / 2 &&
                  (b.push({
                    dataPoint: e,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: u,
                  }),
                  (l = !0));
                break;
              case "pie":
              case "doughnut":
                w = q.center;
                x =
                  "doughnut" === this.type
                    ? q.percentInnerRadius * q.radius
                    : 0;
                u = Math.sqrt(Math.pow(w.x - a, 2) + Math.pow(w.y - f, 2));
                u < q.radius &&
                  u > x &&
                  ((u = Math.atan2(f - w.y, a - w.x)),
                  0 > u && (u += 2 * Math.PI),
                  (u = Number(
                    ((((180 * (u / Math.PI)) % 360) + 360) % 360).toFixed(12)
                  )),
                  (w = Number(
                    (
                      (((180 * (q.startAngle / Math.PI)) % 360) + 360) %
                      360
                    ).toFixed(12)
                  )),
                  (x = Number(
                    (
                      (((180 * (q.endAngle / Math.PI)) % 360) + 360) %
                      360
                    ).toFixed(12)
                  )),
                  0 === x && 1 < q.endAngle && (x = 360),
                  w >= x &&
                    0 !== e.y &&
                    !p(e.y) &&
                    ((x += 360), u < w && (u += 360)),
                  u > w &&
                    u < x &&
                    (b.push({
                      dataPoint: e,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: 0,
                    }),
                    (l = !0)));
                break;
              case "funnel":
              case "pyramid":
                u = q.funnelSection;
                f > u.y1 &&
                  f < u.y4 &&
                  (u.y6
                    ? f > u.y6
                      ? ((h =
                          u.x6 + ((u.x5 - u.x6) / (u.y5 - u.y6)) * (f - u.y6)),
                        (u =
                          u.x3 + ((u.x4 - u.x3) / (u.y4 - u.y3)) * (f - u.y3)))
                      : ((h =
                          u.x1 + ((u.x6 - u.x1) / (u.y6 - u.y1)) * (f - u.y1)),
                        (u =
                          u.x2 + ((u.x3 - u.x2) / (u.y3 - u.y2)) * (f - u.y2)))
                    : ((h =
                        u.x1 + ((u.x4 - u.x1) / (u.y4 - u.y1)) * (f - u.y1)),
                      (u =
                        u.x2 + ((u.x3 - u.x2) / (u.y3 - u.y2)) * (f - u.y2))),
                  a > h &&
                    a < u &&
                    (b.push({
                      dataPoint: e,
                      dataPointIndex: q.dataPointIndex,
                      dataSeries: this,
                      distance: 0,
                    }),
                    (l = !0)));
                break;
              case "boxAndWhisker":
                if (
                  (a >= q.x1 - q.borderThickness / 2 &&
                    a <= q.x2 + q.borderThickness / 2 &&
                    f >= q.y4 - q.borderThickness / 2 &&
                    f <= q.y1 + q.borderThickness / 2) ||
                  (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness &&
                    f >= q.y1 &&
                    f <= q.y4)
                )
                  b.push({
                    dataPoint: e,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: Math.min(
                      Math.abs(q.x1 - a),
                      Math.abs(q.x2 - a),
                      Math.abs(q.y2 - f),
                      Math.abs(q.y3 - f)
                    ),
                  }),
                    (l = !0);
                break;
              case "candlestick":
                if (
                  (a >= q.x1 - q.borderThickness / 2 &&
                    a <= q.x2 + q.borderThickness / 2 &&
                    f >= q.y2 - q.borderThickness / 2 &&
                    f <= q.y3 + q.borderThickness / 2) ||
                  (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness &&
                    f >= q.y1 &&
                    f <= q.y4)
                )
                  b.push({
                    dataPoint: e,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: Math.min(
                      Math.abs(q.x1 - a),
                      Math.abs(q.x2 - a),
                      Math.abs(q.y2 - f),
                      Math.abs(q.y3 - f)
                    ),
                  }),
                    (l = !0);
                break;
              case "ohlc":
                if (
                  (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness &&
                    f >= q.y2 &&
                    f <= q.y3) ||
                  (a >= q.x1 &&
                    a <= (q.x2 + q.x1) / 2 &&
                    f >= q.y1 - q.borderThickness / 2 &&
                    f <= q.y1 + q.borderThickness / 2) ||
                  (a >= (q.x1 + q.x2) / 2 &&
                    a <= q.x2 &&
                    f >= q.y4 - q.borderThickness / 2 &&
                    f <= q.y4 + q.borderThickness / 2)
                )
                  b.push({
                    dataPoint: e,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: Math.min(
                      Math.abs(q.x1 - a),
                      Math.abs(q.x2 - a),
                      Math.abs(q.y2 - f),
                      Math.abs(q.y3 - f)
                    ),
                  }),
                    (l = !0);
            }
            if (l || (1e3 < k && 1e3 < m)) break;
          }
        } else if (0 > n - g && n + g >= this.dataPoints.length) break;
        -1 === d ? (g++, (d = 1)) : (d = -1);
      }
      a = null;
      for (f = 0; f < b.length; f++)
        a ? b[f].distance <= a.distance && (a = b[f]) : (a = b[f]);
      return a;
    };
    W.prototype.getMarkerProperties = function (a, f, c, b) {
      var g = this.dataPoints,
        h = g[a].markerColor
          ? g[a].markerColor
          : this.markerColor
          ? this.markerColor
          : g[a].color
          ? g[a].color
          : this.color
          ? this.color
          : this._colorSet[a % this._colorSet.length],
        d = g[a].markerBorderColor
          ? g[a].markerBorderColor
          : this.markerBorderColor
          ? this.markerBorderColor
          : null,
        l = p(g[a].markerBorderThickness)
          ? this.markerBorderThickness
            ? this.markerBorderThickness
            : null
          : g[a].markerBorderThickness,
        t = g[a].markerType ? g[a].markerType : this.markerType;
      a = p(g[a].markerSize) ? this.markerSize : g[a].markerSize;
      return {
        x: f,
        y: c,
        ctx: b,
        type: t,
        size: a,
        color: h,
        borderColor: d,
        borderThickness: l,
      };
    };
    qa(B, Z);
    B.prototype.createExtraLabelsForLog = function (a) {
      a = (a || 0) + 1;
      if (!(5 < a)) {
        var f = this.logLabelValues[0] || this.intervalStartPosition;
        if (
          Math.log(this.range) / Math.log(f / this.viewportMinimum) <
          this.noTicks - 1
        ) {
          for (
            var c = B.getNiceNumber(
                (f - this.viewportMinimum) /
                  Math.min(
                    Math.max(2, this.noTicks - this.logLabelValues.length),
                    3
                  ),
                !0
              ),
              b = Math.ceil(this.viewportMinimum / c) * c;
            b < f;
            b += c
          )
            b < this.viewportMinimum || this.logLabelValues.push(b);
          this.logLabelValues.sort(Ta);
          this.createExtraLabelsForLog(a);
        }
      }
    };
    B.prototype.createLabels = function () {
      var a,
        f,
        c = 0,
        b = 0,
        g,
        h = 0,
        d = 0,
        b = 0,
        b = this.interval,
        l = 0,
        u,
        k = 0.6 * this.chart.height,
        m;
      a = !1;
      var n = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
        q = n.length
          ? p(this.scaleBreaks.firstBreakIndex)
            ? 0
            : this.scaleBreaks.firstBreakIndex
          : 0;
      if (
        "axisX" !== this.type ||
        "dateTime" !== this.valueType ||
        this.logarithmic
      ) {
        g = this.viewportMaximum;
        if (this.labels) {
          a = Math.ceil(b);
          for (
            var b = Math.ceil(this.intervalStartPosition), e = !1, c = b;
            c < this.viewportMaximum;
            c += a
          )
            if (this.labels[c]) e = !0;
            else {
              e = !1;
              break;
            }
          e && ((this.interval = a), (this.intervalStartPosition = b));
        }
        if (this.logarithmic && !this.equidistantInterval)
          for (
            this.logLabelValues ||
              ((this.logLabelValues = []), this.createExtraLabelsForLog()),
              b = 0,
              e = q;
            b < this.logLabelValues.length;
            b++
          )
            if (((c = this.logLabelValues[b]), c < this.viewportMinimum)) b++;
            else {
              for (; e < n.length && c > n[e].endValue; e++);
              a = e < n.length && c >= n[e].startValue && c <= n[e].endValue;
              m = c;
              a ||
                ((a = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.options,
                      value: m,
                      label: this.labels[m] ? this.labels[m] : null,
                    })
                  : "axisX" === this.type && this.labels[m]
                  ? this.labels[m]
                  : ga(m, this.valueFormatString, this.chart._cultureInfo)),
                (a = new ka(this.ctx, {
                  x: 0,
                  y: 0,
                  maxWidth: h,
                  maxHeight: d,
                  angle: this.labelAngle,
                  text: this.prefix + a + this.suffix,
                  backgroundColor: this.labelBackgroundColor,
                  borderColor: this.labelBorderColor,
                  cornerRadius: this.labelCornerRadius,
                  textAlign: this.labelTextAlign,
                  fontSize: this.labelFontSize,
                  fontFamily: this.labelFontFamily,
                  fontWeight: this.labelFontWeight,
                  fontColor: this.labelFontColor,
                  fontStyle: this.labelFontStyle,
                  textBaseline: "middle",
                  borderThickness: this.labelBorderThickness,
                })),
                this._labels.push({
                  position: m,
                  textBlock: a,
                  effectiveHeight: null,
                }));
            }
        e = q;
        for (
          c = this.intervalStartPosition;
          c <= g;
          c = parseFloat(
            1e-12 > this.interval
              ? this.logarithmic && this.equidistantInterval
                ? c * Math.pow(this.logarithmBase, this.interval)
                : c + this.interval
              : (this.logarithmic && this.equidistantInterval
                  ? c * Math.pow(this.logarithmBase, this.interval)
                  : c + this.interval
                ).toFixed(12)
          )
        ) {
          for (; e < n.length && c > n[e].endValue; e++);
          a = e < n.length && c >= n[e].startValue && c <= n[e].endValue;
          m = c;
          a ||
            ((a = this.labelFormatter
              ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.options,
                  value: m,
                  label: this.labels[m] ? this.labels[m] : null,
                })
              : "axisX" === this.type && this.labels[m]
              ? this.labels[m]
              : ga(m, this.valueFormatString, this.chart._cultureInfo)),
            (a = new ka(this.ctx, {
              x: 0,
              y: 0,
              maxWidth: h,
              maxHeight: d,
              angle: this.labelAngle,
              text: this.prefix + a + this.suffix,
              textAlign: this.labelTextAlign,
              backgroundColor: this.labelBackgroundColor,
              borderColor: this.labelBorderColor,
              borderThickness: this.labelBorderThickness,
              cornerRadius: this.labelCornerRadius,
              fontSize: this.labelFontSize,
              fontFamily: this.labelFontFamily,
              fontWeight: this.labelFontWeight,
              fontColor: this.labelFontColor,
              fontStyle: this.labelFontStyle,
              textBaseline: "middle",
            })),
            this._labels.push({
              position: m,
              textBlock: a,
              effectiveHeight: null,
            }));
        }
      } else
        for (
          this.intervalStartPosition = this.getLabelStartPoint(
            new Date(this.viewportMinimum),
            this.intervalType,
            this.interval
          ),
            g = Za(
              new Date(this.viewportMaximum),
              this.interval,
              this.intervalType
            ),
            e = q,
            c = this.intervalStartPosition;
          c < g;
          Za(c, b, this.intervalType)
        ) {
          for (a = c.getTime(); e < n.length && a > n[e].endValue; e++);
          m = a;
          a = e < n.length && a >= n[e].startValue && a <= n[e].endValue;
          a ||
            ((a = this.labelFormatter
              ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.options,
                  value: new Date(m),
                  label: this.labels[m] ? this.labels[m] : null,
                })
              : "axisX" === this.type && this.labels[m]
              ? this.labels[m]
              : Da(m, this.valueFormatString, this.chart._cultureInfo)),
            (a = new ka(this.ctx, {
              x: 0,
              y: 0,
              maxWidth: h,
              backgroundColor: this.labelBackgroundColor,
              borderColor: this.labelBorderColor,
              borderThickness: this.labelBorderThickness,
              cornerRadius: this.labelCornerRadius,
              maxHeight: d,
              angle: this.labelAngle,
              text: this.prefix + a + this.suffix,
              textAlign: this.labelTextAlign,
              fontSize: this.labelFontSize,
              fontFamily: this.labelFontFamily,
              fontWeight: this.labelFontWeight,
              fontColor: this.labelFontColor,
              fontStyle: this.labelFontStyle,
              textBaseline: "middle",
            })),
            this._labels.push({
              position: m,
              textBlock: a,
              effectiveHeight: null,
              breaksLabelType: void 0,
            }));
        }
      if ("bottom" === this._position || "top" === this._position)
        (l =
          this.logarithmic &&
          !this.equidistantInterval &&
          2 <= this._labels.length
            ? (this.lineCoordinates.width *
                Math.log(
                  Math.min(
                    this._labels[this._labels.length - 1].position /
                      this._labels[this._labels.length - 2].position,
                    this._labels[1].position / this._labels[0].position
                  )
                )) /
              Math.log(this.range)
            : (this.lineCoordinates.width /
                (this.logarithmic && this.equidistantInterval
                  ? Math.log(this.range) / Math.log(this.logarithmBase)
                  : Math.abs(this.range))) *
              M[this.intervalType + "Duration"] *
              this.interval),
          (h =
            "undefined" === typeof this.options.labelMaxWidth
              ? (0.5 * this.chart.width) >> 0
              : this.options.labelMaxWidth),
          this.chart.panEnabled ||
            (d =
              "undefined" === typeof this.options.labelWrap || this.labelWrap
                ? (0.8 * this.chart.height) >> 0
                : 1.5 * this.labelFontSize);
      else if ("left" === this._position || "right" === this._position)
        (l =
          this.logarithmic &&
          !this.equidistantInterval &&
          2 <= this._labels.length
            ? (this.lineCoordinates.height *
                Math.log(
                  Math.min(
                    this._labels[this._labels.length - 1].position /
                      this._labels[this._labels.length - 2].position,
                    this._labels[1].position / this._labels[0].position
                  )
                )) /
              Math.log(this.range)
            : (this.lineCoordinates.height /
                (this.logarithmic && this.equidistantInterval
                  ? Math.log(this.range) / Math.log(this.logarithmBase)
                  : Math.abs(this.range))) *
              M[this.intervalType + "Duration"] *
              this.interval),
          this.chart.panEnabled ||
            (h =
              "undefined" === typeof this.options.labelMaxWidth
                ? (0.3 * this.chart.width) >> 0
                : this.options.labelMaxWidth),
          (d =
            "undefined" === typeof this.options.labelWrap || this.labelWrap
              ? (0.3 * this.chart.height) >> 0
              : 1.5 * this.labelFontSize);
      for (b = 0; b < this._labels.length; b++) {
        a = this._labels[b].textBlock;
        a.maxWidth = h;
        a.maxHeight = d;
        var A = a.measureText();
        u = A.height;
      }
      g = [];
      q = n = 0;
      if (this.labelAutoFit || this.options.labelAutoFit)
        if (
          (p(this.labelAngle) ||
            ((this.labelAngle = ((this.labelAngle % 360) + 360) % 360),
            90 < this.labelAngle && 270 > this.labelAngle
              ? (this.labelAngle -= 180)
              : 270 <= this.labelAngle &&
                360 >= this.labelAngle &&
                (this.labelAngle -= 360)),
          "bottom" === this._position || "top" === this._position)
        )
          if (
            ((h = Math.floor(0.9 * l)),
            (q = 0),
            !this.chart.panEnabled && 1 <= this._labels.length)
          ) {
            this.sessionVariables.labelFontSize = this.labelFontSize;
            this.sessionVariables.labelMaxWidth = h;
            this.sessionVariables.labelMaxHeight = d;
            this.sessionVariables.labelAngle = this.labelAngle;
            this.sessionVariables.labelWrap = this.labelWrap;
            for (c = 0; c < this._labels.length; c++)
              if (!this._labels[c].breaksLabelType) {
                a = this._labels[c].textBlock;
                for (var w, e = a.text.split(" "), b = 0; b < e.length; b++)
                  (m = e[b]),
                    (this.ctx.font =
                      a.fontStyle +
                      " " +
                      a.fontWeight +
                      " " +
                      a.fontSize +
                      "px " +
                      a.fontFamily),
                    (m = this.ctx.measureText(m)),
                    m.width > q && ((w = c), (q = m.width));
              }
            c = 0;
            for (
              c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0;
              c < this._labels.length;
              c++
            )
              if (!this._labels[c].breaksLabelType) {
                a = this._labels[c].textBlock;
                A = a.measureText();
                for (e = c + 1; e < this._labels.length; e++)
                  if (!this._labels[e].breaksLabelType) {
                    f = this._labels[e].textBlock;
                    f = f.measureText();
                    break;
                  }
                g.push(a.height);
                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, g);
                Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                Math.sin((Math.PI / 180) * Math.abs(this.labelAngle));
                b =
                  h * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) +
                  (d - a.fontSize / 2) *
                    Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                if (
                  p(this.options.labelAngle) &&
                  isNaN(this.options.labelAngle) &&
                  0 !== this.options.labelAngle
                )
                  if (
                    ((this.sessionVariables.labelMaxHeight =
                      0 === this.labelAngle
                        ? d
                        : Math.min(
                            (b -
                              h *
                                Math.cos(
                                  (Math.PI / 180) * Math.abs(this.labelAngle)
                                )) /
                              Math.sin(
                                (Math.PI / 180) * Math.abs(this.labelAngle)
                              ),
                            b
                          )),
                    (m =
                      (k -
                        (u + a.fontSize / 2) *
                          Math.cos((Math.PI / 180) * Math.abs(-25))) /
                      Math.sin((Math.PI / 180) * Math.abs(-25))),
                    !p(this.options.labelWrap))
                  )
                    this.labelWrap
                      ? p(this.options.labelMaxWidth)
                        ? ((this.sessionVariables.labelMaxWidth = Math.min(
                            Math.max(h, q),
                            m
                          )),
                          (this.sessionVariables.labelWrap = this.labelWrap),
                          f &&
                            (A.width + f.width) >> 0 > 2 * h &&
                            (this.sessionVariables.labelAngle = -25))
                        : ((this.sessionVariables.labelWrap = this.labelWrap),
                          (this.sessionVariables.labelMaxWidth =
                            this.options.labelMaxWidth),
                          (this.sessionVariables.labelAngle =
                            this.sessionVariables.labelMaxWidth > h
                              ? -25
                              : this.sessionVariables.labelAngle))
                      : p(this.options.labelMaxWidth)
                      ? ((this.sessionVariables.labelWrap = this.labelWrap),
                        (this.sessionVariables.labelMaxHeight = d),
                        (this.sessionVariables.labelMaxWidth = h),
                        f &&
                          (A.width + f.width) >> 0 > 2 * h &&
                          ((this.sessionVariables.labelAngle = -25),
                          (this.sessionVariables.labelMaxWidth = m)))
                      : ((this.sessionVariables.labelAngle =
                          this.sessionVariables.labelMaxWidth > h
                            ? -25
                            : this.sessionVariables.labelAngle),
                        (this.sessionVariables.labelMaxWidth =
                          this.options.labelMaxWidth),
                        (this.sessionVariables.labelMaxHeight = d),
                        (this.sessionVariables.labelWrap = this.labelWrap));
                  else {
                    if (p(this.options.labelWrap))
                      if (!p(this.options.labelMaxWidth))
                        this.options.labelMaxWidth < h
                          ? ((this.sessionVariables.labelMaxWidth =
                              this.options.labelMaxWidth),
                            (this.sessionVariables.labelMaxHeight = b))
                          : ((this.sessionVariables.labelAngle = -25),
                            (this.sessionVariables.labelMaxWidth =
                              this.options.labelMaxWidth),
                            (this.sessionVariables.labelMaxHeight = d));
                      else if (!p(f))
                        if (
                          ((b = (A.width + f.width) >> 0),
                          (e = this.labelFontSize),
                          q < h)
                        )
                          b - 2 * h > n &&
                            ((n = b - 2 * h),
                            b >= 2 * h && b < 2.2 * h
                              ? ((this.sessionVariables.labelMaxWidth = h),
                                p(this.options.labelFontSize) &&
                                  12 < e &&
                                  ((e = Math.floor((12 / 13) * e)),
                                  a.measureText()),
                                (this.sessionVariables.labelFontSize = p(
                                  this.options.labelFontSize
                                )
                                  ? e
                                  : this.options.labelFontSize),
                                (this.sessionVariables.labelAngle =
                                  this.labelAngle))
                              : b >= 2.2 * h && b < 2.8 * h
                              ? ((this.sessionVariables.labelAngle = -25),
                                (this.sessionVariables.labelMaxWidth = m),
                                (this.sessionVariables.labelFontSize = e))
                              : b >= 2.8 * h && b < 3.2 * h
                              ? ((this.sessionVariables.labelMaxWidth =
                                  Math.max(h, q)),
                                (this.sessionVariables.labelWrap = !0),
                                p(this.options.labelFontSize) &&
                                  12 < this.labelFontSize &&
                                  ((this.labelFontSize = Math.floor(
                                    (12 / 13) * this.labelFontSize
                                  )),
                                  a.measureText()),
                                (this.sessionVariables.labelFontSize = p(
                                  this.options.labelFontSize
                                )
                                  ? e
                                  : this.options.labelFontSize),
                                (this.sessionVariables.labelAngle =
                                  this.labelAngle))
                              : b >= 3.2 * h && b < 3.6 * h
                              ? ((this.sessionVariables.labelAngle = -25),
                                (this.sessionVariables.labelWrap = !0),
                                (this.sessionVariables.labelMaxWidth = m),
                                (this.sessionVariables.labelFontSize =
                                  this.labelFontSize))
                              : b > 3.6 * h && b < 5 * h
                              ? (p(this.options.labelFontSize) &&
                                  12 < e &&
                                  ((e = Math.floor((12 / 13) * e)),
                                  a.measureText()),
                                (this.sessionVariables.labelFontSize = p(
                                  this.options.labelFontSize
                                )
                                  ? e
                                  : this.options.labelFontSize),
                                (this.sessionVariables.labelWrap = !0),
                                (this.sessionVariables.labelAngle = -25),
                                (this.sessionVariables.labelMaxWidth = m))
                              : b > 5 * h &&
                                ((this.sessionVariables.labelWrap = !0),
                                (this.sessionVariables.labelMaxWidth = h),
                                (this.sessionVariables.labelFontSize = e),
                                (this.sessionVariables.labelMaxHeight = d),
                                (this.sessionVariables.labelAngle =
                                  this.labelAngle)));
                        else if (
                          w === c &&
                          ((0 === w &&
                            q +
                              this._labels[w + 1].textBlock.measureText()
                                .width -
                              2 * h >
                              n) ||
                            (w === this._labels.length - 1 &&
                              q +
                                this._labels[w - 1].textBlock.measureText()
                                  .width -
                                2 * h >
                                n) ||
                            (0 < w &&
                              w < this._labels.length - 1 &&
                              q +
                                this._labels[w + 1].textBlock.measureText()
                                  .width -
                                2 * h >
                                n &&
                              q +
                                this._labels[w - 1].textBlock.measureText()
                                  .width -
                                2 * h >
                                n))
                        )
                          (n =
                            0 === w
                              ? q +
                                this._labels[w + 1].textBlock.measureText()
                                  .width -
                                2 * h
                              : q +
                                this._labels[w - 1].textBlock.measureText()
                                  .width -
                                2 * h),
                            (this.sessionVariables.labelFontSize = p(
                              this.options.labelFontSize
                            )
                              ? e
                              : this.options.labelFontSize),
                            (this.sessionVariables.labelWrap = !0),
                            (this.sessionVariables.labelAngle = -25),
                            (this.sessionVariables.labelMaxWidth = m);
                        else if (0 === n)
                          for (
                            this.sessionVariables.labelFontSize = p(
                              this.options.labelFontSize
                            )
                              ? e
                              : this.options.labelFontSize,
                              this.sessionVariables.labelWrap = !0,
                              b = 0;
                            b < this._labels.length;
                            b++
                          )
                            (a = this._labels[b].textBlock),
                              (a.maxWidth =
                                this.sessionVariables.labelMaxWidth =
                                  Math.min(Math.max(h, q), m)),
                              (A = a.measureText()),
                              b < this._labels.length - 1 &&
                                ((e = b + 1),
                                (f = this._labels[e].textBlock),
                                (f.maxWidth =
                                  this.sessionVariables.labelMaxWidth =
                                    Math.min(Math.max(h, q), m)),
                                (f = f.measureText()),
                                (A.width + f.width) >> 0 > 2 * h &&
                                  (this.sessionVariables.labelAngle = -25));
                  }
                else
                  ((this.sessionVariables.labelAngle = this.labelAngle),
                  (this.sessionVariables.labelMaxHeight =
                    0 === this.labelAngle
                      ? d
                      : Math.min(
                          (b -
                            h *
                              Math.cos(
                                (Math.PI / 180) * Math.abs(this.labelAngle)
                              )) /
                            Math.sin(
                              (Math.PI / 180) * Math.abs(this.labelAngle)
                            ),
                          b
                        )),
                  (m =
                    0 != this.labelAngle
                      ? (k -
                          (u + a.fontSize / 2) *
                            Math.cos(
                              (Math.PI / 180) * Math.abs(this.labelAngle)
                            )) /
                        Math.sin((Math.PI / 180) * Math.abs(this.labelAngle))
                      : h),
                  (this.sessionVariables.labelMaxHeight = this.labelWrap
                    ? (k -
                        m *
                          Math.sin(
                            (Math.PI / 180) * Math.abs(this.labelAngle)
                          )) /
                      Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))
                    : 1.5 * this.labelFontSize),
                  p(this.options.labelWrap))
                    ? p(this.options.labelWrap) &&
                      (this.labelWrap && !p(this.options.labelMaxWidth)
                        ? ((this.sessionVariables.labelWrap = this.labelWrap),
                          (this.sessionVariables.labelMaxWidth = this.options
                            .labelMaxWidth
                            ? this.options.labelMaxWidth
                            : m),
                          (this.sessionVariables.labelMaxHeight = d))
                        : ((this.sessionVariables.labelAngle = this.labelAngle),
                          (this.sessionVariables.labelMaxWidth = m),
                          (this.sessionVariables.labelMaxHeight =
                            b < 0.9 * l ? 0.9 * l : b),
                          (this.sessionVariables.labelWrap = this.labelWrap)))
                    : (this.options.labelWrap
                        ? ((this.sessionVariables.labelWrap = this.labelWrap),
                          (this.sessionVariables.labelMaxWidth = this.options
                            .labelMaxWidth
                            ? this.options.labelMaxWidth
                            : m))
                        : (p(this.options.labelMaxWidth),
                          (this.sessionVariables.labelMaxWidth = this.options
                            .labelMaxWidth
                            ? this.options.labelMaxWidth
                            : m),
                          (this.sessionVariables.labelWrap = this.labelWrap)),
                      (this.sessionVariables.labelMaxHeight = d));
              }
            for (b = 0; b < this._labels.length; b++)
              (a = this._labels[b].textBlock),
                (a.maxWidth = this.labelMaxWidth =
                  this.sessionVariables.labelMaxWidth),
                (a.fontSize = this.sessionVariables.labelFontSize),
                (a.angle = this.labelAngle = this.sessionVariables.labelAngle),
                (a.wrap = this.labelWrap = this.sessionVariables.labelWrap),
                (a.maxHeight = this.sessionVariables.labelMaxHeight),
                a.measureText();
          } else
            for (c = 0; c < this._labels.length; c++)
              (a = this._labels[c].textBlock),
                (a.maxWidth = this.labelMaxWidth =
                  p(this.options.labelMaxWidth)
                    ? p(this.sessionVariables.labelMaxWidth)
                      ? (this.sessionVariables.labelMaxWidth = h)
                      : this.sessionVariables.labelMaxWidth
                    : this.options.labelMaxWidth),
                (a.fontSize = this.labelFontSize =
                  p(this.options.labelFontSize)
                    ? p(this.sessionVariables.labelFontSize)
                      ? (this.sessionVariables.labelFontSize =
                          this.labelFontSize)
                      : this.sessionVariables.labelFontSize
                    : this.options.labelFontSize),
                (a.angle = this.labelAngle =
                  p(this.options.labelAngle)
                    ? p(this.sessionVariables.labelAngle)
                      ? (this.sessionVariables.labelAngle = this.labelAngle)
                      : this.sessionVariables.labelAngle
                    : this.labelAngle),
                (a.wrap = this.labelWrap =
                  p(this.options.labelWrap)
                    ? p(this.sessionVariables.labelWrap)
                      ? (this.sessionVariables.labelWrap = this.labelWrap)
                      : this.sessionVariables.labelWrap
                    : this.options.labelWrap),
                (a.maxHeight = p(this.sessionVariables.labelMaxHeight)
                  ? (this.sessionVariables.labelMaxHeight = d)
                  : this.sessionVariables.labelMaxHeight),
                a.measureText();
        else if ("left" === this._position || "right" === this._position)
          if (
            ((h = p(this.options.labelMaxWidth)
              ? (0.3 * this.chart.width) >> 0
              : this.options.labelMaxWidth),
            (d =
              "undefined" === typeof this.options.labelWrap || this.labelWrap
                ? (0.3 * this.chart.height) >> 0
                : 1.5 * this.labelFontSize),
            !this.chart.panEnabled && 1 <= this._labels.length)
          ) {
            this.sessionVariables.labelFontSize = this.labelFontSize;
            this.sessionVariables.labelMaxWidth = h;
            this.sessionVariables.labelMaxHeight = d;
            this.sessionVariables.labelAngle = p(
              this.sessionVariables.labelAngle
            )
              ? 0
              : this.sessionVariables.labelAngle;
            this.sessionVariables.labelWrap = this.labelWrap;
            for (c = 0; c < this._labels.length; c++)
              if (!this._labels[c].breaksLabelType) {
                a = this._labels[c].textBlock;
                A = a.measureText();
                for (e = c + 1; e < this._labels.length; e++)
                  if (!this._labels[e].breaksLabelType) {
                    f = this._labels[e].textBlock;
                    f = f.measureText();
                    break;
                  }
                g.push(a.height);
                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, g);
                b =
                  h * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) +
                  (d - a.fontSize / 2) *
                    Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                Math.sin((Math.PI / 180) * Math.abs(this.labelAngle));
                p(this.options.labelAngle) &&
                isNaN(this.options.labelAngle) &&
                0 !== this.options.labelAngle
                  ? p(this.options.labelWrap)
                    ? p(this.options.labelWrap) &&
                      (p(this.options.labelMaxWidth)
                        ? p(f) ||
                          ((l = (A.height + f.height) >> 0),
                          l - 2 * d > q &&
                            ((q = l - 2 * d),
                            l >= 2 * d && l < 2.4 * d
                              ? (p(this.options.labelFontSize) &&
                                  12 < this.labelFontSize &&
                                  ((this.labelFontSize = Math.floor(
                                    (12 / 13) * this.labelFontSize
                                  )),
                                  a.measureText()),
                                (this.sessionVariables.labelMaxHeight = d),
                                (this.sessionVariables.labelFontSize = p(
                                  this.options.labelFontSize
                                )
                                  ? this.labelFontSize
                                  : this.options.labelFontSize))
                              : l >= 2.4 * d && l < 2.8 * d
                              ? ((this.sessionVariables.labelMaxHeight = b),
                                (this.sessionVariables.labelFontSize =
                                  this.labelFontSize),
                                (this.sessionVariables.labelWrap = !0))
                              : l >= 2.8 * d && l < 3.2 * d
                              ? ((this.sessionVariables.labelMaxHeight = d),
                                (this.sessionVariables.labelWrap = !0),
                                p(this.options.labelFontSize) &&
                                  12 < this.labelFontSize &&
                                  ((this.labelFontSize = Math.floor(
                                    (12 / 13) * this.labelFontSize
                                  )),
                                  a.measureText()),
                                (this.sessionVariables.labelFontSize = p(
                                  this.options.labelFontSize
                                )
                                  ? this.labelFontSize
                                  : this.options.labelFontSize),
                                (this.sessionVariables.labelAngle = p(
                                  this.sessionVariables.labelAngle
                                )
                                  ? 0
                                  : this.sessionVariables.labelAngle))
                              : l >= 3.2 * d && l < 3.6 * d
                              ? ((this.sessionVariables.labelMaxHeight = b),
                                (this.sessionVariables.labelWrap = !0),
                                (this.sessionVariables.labelFontSize =
                                  this.labelFontSize))
                              : l > 3.6 * d && l < 10 * d
                              ? (p(this.options.labelFontSize) &&
                                  12 < this.labelFontSize &&
                                  ((this.labelFontSize = Math.floor(
                                    (12 / 13) * this.labelFontSize
                                  )),
                                  a.measureText()),
                                (this.sessionVariables.labelFontSize = p(
                                  this.options.labelFontSize
                                )
                                  ? this.labelFontSize
                                  : this.options.labelFontSize),
                                (this.sessionVariables.labelMaxWidth = h),
                                (this.sessionVariables.labelMaxHeight = d),
                                (this.sessionVariables.labelAngle = p(
                                  this.sessionVariables.labelAngle
                                )
                                  ? 0
                                  : this.sessionVariables.labelAngle))
                              : l > 10 * d &&
                                l < 50 * d &&
                                (p(this.options.labelFontSize) &&
                                  12 < this.labelFontSize &&
                                  ((this.labelFontSize = Math.floor(
                                    (12 / 13) * this.labelFontSize
                                  )),
                                  a.measureText()),
                                (this.sessionVariables.labelFontSize = p(
                                  this.options.labelFontSize
                                )
                                  ? this.labelFontSize
                                  : this.options.labelFontSize),
                                (this.sessionVariables.labelMaxHeight = d),
                                (this.sessionVariables.labelMaxWidth = h),
                                (this.sessionVariables.labelAngle = p(
                                  this.sessionVariables.labelAngle
                                )
                                  ? 0
                                  : this.sessionVariables.labelAngle))))
                        : ((this.sessionVariables.labelMaxHeight = d),
                          (this.sessionVariables.labelMaxWidth = this.options
                            .labelMaxWidth
                            ? this.options.labelMaxWidth
                            : this.sessionVariables.labelMaxWidth)))
                    : ((this.sessionVariables.labelMaxWidth = this.labelWrap
                        ? this.options.labelMaxWidth
                          ? this.options.labelMaxWidth
                          : this.sessionVariables.labelMaxWidth
                        : this.labelMaxWidth
                        ? this.options.labelMaxWidth
                          ? this.options.labelMaxWidth
                          : this.sessionVariables.labelMaxWidth
                        : h),
                      (this.sessionVariables.labelMaxHeight = d))
                  : ((this.sessionVariables.labelAngle = this.labelAngle),
                    (this.sessionVariables.labelMaxWidth =
                      0 === this.labelAngle
                        ? h
                        : Math.min(
                            (b -
                              d *
                                Math.sin(
                                  (Math.PI / 180) * Math.abs(this.labelAngle)
                                )) /
                              Math.cos(
                                (Math.PI / 180) * Math.abs(this.labelAngle)
                              ),
                            d
                          )),
                    p(this.options.labelWrap))
                  ? p(this.options.labelWrap) &&
                    (this.labelWrap && !p(this.options.labelMaxWidth)
                      ? ((this.sessionVariables.labelMaxWidth = this.options
                          .labelMaxWidth
                          ? this.options.labelMaxWidth
                          : this.sessionVariables.labelMaxWidth),
                        (this.sessionVariables.labelWrap = this.labelWrap),
                        (this.sessionVariables.labelMaxHeight = b))
                      : ((this.sessionVariables.labelMaxWidth = this.options
                          .labelMaxWidth
                          ? this.options.labelMaxWidth
                          : h),
                        (this.sessionVariables.labelMaxHeight =
                          0 === this.labelAngle ? d : b),
                        p(this.options.labelMaxWidth) &&
                          (this.sessionVariables.labelAngle = this.labelAngle)))
                  : this.options.labelWrap
                  ? ((this.sessionVariables.labelMaxHeight =
                      0 === this.labelAngle ? d : b),
                    (this.sessionVariables.labelWrap = this.labelWrap),
                    (this.sessionVariables.labelMaxWidth = h))
                  : ((this.sessionVariables.labelMaxHeight = d),
                    p(this.options.labelMaxWidth),
                    (this.sessionVariables.labelMaxWidth = this.options
                      .labelMaxWidth
                      ? this.options.labelMaxWidth
                      : this.sessionVariables.labelMaxWidth),
                    (this.sessionVariables.labelWrap = this.labelWrap));
              }
            for (b = 0; b < this._labels.length; b++)
              (a = this._labels[b].textBlock),
                (a.maxWidth = this.labelMaxWidth =
                  this.sessionVariables.labelMaxWidth),
                (a.fontSize = this.labelFontSize =
                  this.sessionVariables.labelFontSize),
                (a.angle = this.labelAngle = this.sessionVariables.labelAngle),
                (a.wrap = this.labelWrap = this.sessionVariables.labelWrap),
                (a.maxHeight = this.sessionVariables.labelMaxHeight),
                a.measureText();
          } else
            for (
              p(this.chart.stockChart) ||
                this.chart.isNavigator ||
                (this.sessionVariables.labelMaxHeight = d),
                c = 0;
              c < this._labels.length;
              c++
            )
              (a = this._labels[c].textBlock),
                (a.maxWidth = this.labelMaxWidth =
                  p(this.options.labelMaxWidth)
                    ? p(this.sessionVariables.labelMaxWidth)
                      ? (this.sessionVariables.labelMaxWidth = h)
                      : this.sessionVariables.labelMaxWidth
                    : this.options.labelMaxWidth),
                (a.fontSize = this.labelFontSize =
                  p(this.options.labelFontSize)
                    ? p(this.sessionVariables.labelFontSize)
                      ? (this.sessionVariables.labelFontSize =
                          this.labelFontSize)
                      : this.sessionVariables.labelFontSize
                    : this.options.labelFontSize),
                (a.angle = this.labelAngle =
                  p(this.options.labelAngle)
                    ? p(this.sessionVariables.labelAngle)
                      ? (this.sessionVariables.labelAngle = this.labelAngle)
                      : this.sessionVariables.labelAngle
                    : this.labelAngle),
                (a.wrap = this.labelWrap =
                  p(this.options.labelWrap)
                    ? p(this.sessionVariables.labelWrap)
                      ? (this.sessionVariables.labelWrap = this.labelWrap)
                      : this.sessionVariables.labelWrap
                    : this.options.labelWrap),
                (a.maxHeight = p(this.sessionVariables.labelMaxHeight)
                  ? (this.sessionVariables.labelMaxHeight = d)
                  : this.sessionVariables.labelMaxHeight),
                a.measureText();
      for (c = 0; c < this.stripLines.length; c++) {
        var h = this.stripLines[c],
          x;
        if ("outside" === h.labelPlacement) {
          d = this.sessionVariables.labelMaxWidth;
          if ("bottom" === this._position || "top" === this._position)
            p(h.options.labelWrap) &&
            !p(this.sessionVariables.stripLineLabelMaxHeight)
              ? (x = this.sessionVariables.stripLineLabelMaxHeight)
              : (this.sessionVariables.stripLineLabelMaxHeight = x =
                  h.labelWrap
                    ? (0.8 * this.chart.height) >> 0
                    : 1.5 * this.labelFontSize);
          if ("left" === this._position || "right" === this._position)
            p(h.options.labelWrap) &&
            !p(this.sessionVariables.stripLineLabelMaxHeight)
              ? (x = this.sessionVariables.stripLineLabelMaxHeight)
              : (this.sessionVariables.stripLineLabelMaxHeight = x =
                  h.labelWrap
                    ? (0.8 * this.chart.width) >> 0
                    : 1.5 * this.labelFontSize);
          p(h.labelBackgroundColor) && (h.labelBackgroundColor = "#EEEEEE");
        } else
          (d =
            "bottom" === this._position || "top" === this._position
              ? (0.9 * this.chart.width) >> 0
              : (0.9 * this.chart.height) >> 0),
            (x =
              p(h.options.labelWrap) || h.labelWrap
                ? "bottom" === this._position || "top" === this._position
                  ? (0.8 * this.chart.width) >> 0
                  : (0.8 * this.chart.height) >> 0
                : 1.5 * this.labelFontSize),
            p(h.labelBackgroundColor) &&
              (p(h.startValue) && 0 !== h.startValue
                ? (h.labelBackgroundColor = t ? "transparent" : null)
                : (h.labelBackgroundColor = "#EEEEEE"));
        h.labelFontSize =
          "outside" === h.labelPlacement && p(h.options.labelFontSize)
            ? this.labelFontSize
            : h.labelFontSize;
        h.labelFontFamily =
          "outside" === h.labelPlacement && p(h.options.labelFontFamily)
            ? this.labelFontFamily
            : h.labelFontFamily;
        h.labelFontWeight =
          "outside" === h.labelPlacement && p(h.options.labelFontWeight)
            ? this.labelFontWeight
            : h.labelFontWeight;
        h.labelFontStyle =
          "outside" === h.labelPlacement && p(h.options.labelFontStyle)
            ? this.labelFontStyle
            : h.labelFontStyle;
        a = new ka(this.ctx, {
          x: 0,
          y: 0,
          backgroundColor: h.labelBackgroundColor,
          borderColor: h.labelBorderColor,
          borderThickness: h.labelBorderThickness,
          cornerRadius: h.labelCornerRadius,
          maxWidth: h.options.labelMaxWidth ? h.options.labelMaxWidth : d,
          maxHeight: x,
          angle: this.labelAngle,
          text: h.labelFormatter
            ? h.labelFormatter({ chart: this.chart, axis: this, stripLine: h })
            : h.label,
          textAlign: h.labelTextAlign,
          fontSize: h.labelFontSize,
          fontFamily: h.labelFontFamily,
          fontWeight: h.labelFontWeight,
          fontColor: h.labelFontColor || h.color,
          fontStyle: h.labelFontStyle,
          textBaseline: "middle",
        });
        this._stripLineLabels.push({
          position: h.value,
          textBlock: a,
          effectiveHeight: null,
          stripLine: h,
        });
      }
    };
    B.prototype.createLabelsAndCalculateWidth = function () {
      var a = 0,
        f = 0;
      this._labels = [];
      this._stripLineLabels = [];
      var c = this.chart.isNavigator ? 0 : 5;
      if ("left" === this._position || "right" === this._position) {
        this.createLabels();
        if (
          "inside" != this.labelPlacement ||
          ("inside" === this.labelPlacement && 0 < this._index)
        )
          for (f = 0; f < this._labels.length; f++) {
            var b = this._labels[f].textBlock,
              b = b.measureText(),
              g = 0,
              g =
                0 === this.labelAngle
                  ? b.width
                  : b.width *
                      Math.cos((Math.PI / 180) * Math.abs(this.labelAngle)) +
                    b.height *
                      Math.sin((Math.PI / 180) * Math.abs(this.labelAngle));
            a < g && (this.labelEffectiveWidth = a = g);
            this._labels[f].effectiveWidth = g;
          }
        for (f = 0; f < this._stripLineLabels.length; f++)
          "outside" === this._stripLineLabels[f].stripLine.labelPlacement &&
            this._stripLineLabels[f].stripLine.value >= this.viewportMinimum &&
            this._stripLineLabels[f].stripLine.value <= this.viewportMaximum &&
            ((b = this._stripLineLabels[f].textBlock),
            (b = b.measureText()),
            (g =
              0 === this.labelAngle
                ? b.width
                : b.width *
                    Math.cos((Math.PI / 180) * Math.abs(this.labelAngle)) +
                  b.height *
                    Math.sin((Math.PI / 180) * Math.abs(this.labelAngle))),
            "inside" === this.tickPlacement && (g += this.tickLength),
            "inside" === this.labelPlacement && (a += 0 < this._index ? g : 0),
            a < g && (a = g),
            (this.stripLineLabelEffectiveWidth = this._stripLineLabels[
              f
            ].effectiveWidth =
              g));
      }
      return (
        (this.title ? this._titleTextBlock.measureText().height + 2 : 0) +
        a +
        ("inside" === this.tickPlacement
          ? 0 < this._index
            ? this.tickLength
            : 0
          : this.tickLength) +
        c
      );
    };
    B.prototype.createLabelsAndCalculateHeight = function () {
      var a = 0;
      this._labels = [];
      this._stripLineLabels = [];
      var f,
        c = 0,
        b = this.chart.isNavigator ? 0 : 5;
      if ("bottom" === this._position || "top" === this._position) {
        this.createLabels();
        if (
          "inside" != this.labelPlacement ||
          ("inside" === this.labelPlacement && 0 < this._index)
        )
          for (c = 0; c < this._labels.length; c++) {
            f = this._labels[c].textBlock;
            f = f.measureText();
            var g = 0,
              g =
                0 === this.labelAngle
                  ? f.height
                  : f.width *
                      Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) +
                    f.height *
                      Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
            a < g && (this.labelEffectiveHeight = a = g);
            this._labels[c].effectiveHeight = g;
          }
        for (c = 0; c < this._stripLineLabels.length; c++)
          "outside" === this._stripLineLabels[c].stripLine.labelPlacement &&
            this._stripLineLabels[c].stripLine.value >= this.viewportMinimum &&
            this._stripLineLabels[c].stripLine.value <= this.viewportMaximum &&
            ((f = this._stripLineLabels[c].textBlock),
            (f = f.measureText()),
            (g =
              0 === this.labelAngle
                ? f.height
                : f.width *
                    Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) +
                  f.height *
                    Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))),
            "inside" === this.tickPlacement && (g += this.tickLength),
            "inside" === this.labelPlacement && (a += 0 < this._index ? g : 0),
            a < g && (a = g),
            (this.stripLineLabelEffectiveHeight = this._stripLineLabels[
              c
            ].effectiveHeight =
              g));
      }
      return (
        (this.title ? this._titleTextBlock.measureText().height + 2 : 0) +
        a +
        ("inside" === this.tickPlacement
          ? 0 < this._index
            ? this.tickLength
            : 0
          : this.tickLength) +
        b
      );
    };
    B.setLayout = function (a, f, c, b, g, h) {
      var d,
        l,
        t,
        k,
        m = a[0] ? a[0].chart : f[0].chart,
        n = m.isNavigator ? 0 : 10,
        q = m._axes;
      if (a && 0 < a.length)
        for (var e = 0; e < a.length; e++)
          a[e] && a[e].calculateAxisParameters();
      if (f && 0 < f.length)
        for (e = 0; e < f.length; e++) f[e].calculateAxisParameters();
      if (c && 0 < c.length)
        for (e = 0; e < c.length; e++) c[e].calculateAxisParameters();
      if (b && 0 < b.length)
        for (e = 0; e < b.length; e++) b[e].calculateAxisParameters();
      for (e = 0; e < q.length; e++)
        if (q[e] && q[e].scaleBreaks && q[e].scaleBreaks._appliedBreaks.length)
          for (
            var u = q[e].scaleBreaks._appliedBreaks, w = 0;
            w < u.length && !(u[w].startValue > q[e].viewportMaximum);
            w++
          )
            u[w].endValue < q[e].viewportMinimum ||
              (p(q[e].scaleBreaks.firstBreakIndex) &&
                (q[e].scaleBreaks.firstBreakIndex = w),
              u[w].startValue >= q[e].viewPortMinimum &&
                (q[e].scaleBreaks.lastBreakIndex = w));
      for (
        var x = (w = 0),
          s = 0,
          z = 0,
          v = 0,
          A = 0,
          B = 0,
          D,
          G,
          I = (l = 0),
          K,
          L,
          N,
          u = (K = L = N = !1),
          e = 0;
        e < q.length;
        e++
      )
        q[e] &&
          q[e].title &&
          (q[e]._titleTextBlock = new ka(q[e].ctx, {
            text: q[e].title,
            fontSize: q[e].titleFontSize,
            fontFamily: q[e].titleFontFamily,
            fontWeight: q[e].titleFontWeight,
            fontColor: q[e].titleFontColor,
            fontStyle: q[e].titleFontStyle,
            borderColor: q[e].titleBorderColor,
            borderThickness: q[e].titleBorderThickness,
            backgroundColor: q[e].titleBackgroundColor,
            cornerRadius: q[e].titleCornerRadius,
            textBaseline: "middle",
            textAlign: q[e].titleTextAlign,
          }));
      for (e = 0; e < q.length; e++)
        if (q[e].title)
          switch (q[e]._position) {
            case "left":
              q[e]._titleTextBlock.maxWidth = q[e].titleMaxWidth || h.height;
              q[e]._titleTextBlock.maxHeight = q[e].titleWrap
                ? 0.8 * h.width
                : 1.5 * q[e].titleFontSize;
              q[e]._titleTextBlock.angle = -90;
              break;
            case "right":
              q[e]._titleTextBlock.maxWidth = q[e].titleMaxWidth || h.height;
              q[e]._titleTextBlock.maxHeight = q[e].titleWrap
                ? 0.8 * h.width
                : 1.5 * q[e].titleFontSize;
              q[e]._titleTextBlock.angle = 90;
              break;
            default:
              (q[e]._titleTextBlock.maxWidth = q[e].titleMaxWidth || h.width),
                (q[e]._titleTextBlock.maxHeight = q[e].titleWrap
                  ? 0.8 * h.height
                  : 1.5 * q[e].titleFontSize),
                (q[e]._titleTextBlock.angle = 0);
          }
      if ("normal" === g) {
        for (
          var z = [], v = [], A = [], B = [], O = [], P = [], M = [], Q = [];
          4 > w;

        ) {
          var E = 0,
            T = 0,
            V = 0,
            U = 0,
            W = (g = 0),
            R = 0,
            Z = 0,
            X = 0,
            Y = 0,
            S = 0,
            $ = 0;
          if (c && 0 < c.length)
            for (A = [], e = S = 0; e < c.length; e++)
              A.push(
                Math.ceil(c[e] ? c[e].createLabelsAndCalculateWidth() : 0)
              ),
                (S += A[e]),
                (R += c[e] && !m.isNavigator ? c[e].margin : 0);
          else
            A.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
          M.push(A);
          if (b && 0 < b.length)
            for (B = [], e = $ = 0; e < b.length; e++)
              B.push(
                Math.ceil(b[e] ? b[e].createLabelsAndCalculateWidth() : 0)
              ),
                ($ += B[e]),
                (Z += b[e] ? b[e].margin : 0);
          else
            B.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
          Q.push(B);
          d = Math.round(h.x1 + S + R);
          t = Math.round(
            h.x2 - $ - Z > m.width - n ? m.width - n : h.x2 - $ - Z
          );
          if (a && 0 < a.length)
            for (z = [], e = X = 0; e < a.length; e++)
              a[e] && (a[e].lineCoordinates = {}),
                (a[e].lineCoordinates.width = Math.abs(t - d)),
                a[e].title &&
                  (a[e]._titleTextBlock.maxWidth =
                    0 < a[e].titleMaxWidth &&
                    a[e].titleMaxWidth < a[e].lineCoordinates.width
                      ? a[e].titleMaxWidth
                      : a[e].lineCoordinates.width),
                z.push(
                  Math.ceil(a[e] ? a[e].createLabelsAndCalculateHeight() : 0)
                ),
                (X += z[e]),
                (g += a[e] && !m.isNavigator ? a[e].margin : 0);
          else
            z.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
          O.push(z);
          if (f && 0 < f.length)
            for (v = [], e = Y = 0; e < f.length; e++)
              f[e] && (f[e].lineCoordinates = {}),
                (f[e].lineCoordinates.width = Math.abs(t - d)),
                f[e].title &&
                  (f[e]._titleTextBlock.maxWidth =
                    0 < f[e].titleMaxWidth &&
                    f[e].titleMaxWidth < f[e].lineCoordinates.width
                      ? f[e].titleMaxWidth
                      : f[e].lineCoordinates.width),
                v.push(
                  Math.ceil(f[e] ? f[e].createLabelsAndCalculateHeight() : 0)
                ),
                (Y += v[e]),
                (W += f[e] && !m.isNavigator ? f[e].margin : 0);
          else
            v.push(Math.ceil(f[0] ? f[0].createLabelsAndCalculateHeight() : 0));
          P.push(v);
          if (a && 0 < a.length)
            for (e = 0; e < a.length; e++)
              a[e] &&
                ((a[e].lineCoordinates.x1 = d),
                (t = Math.round(
                  h.x2 - $ - Z > m.width - n ? m.width - n : h.x2 - $ - Z
                )),
                a[e]._labels &&
                  1 < a[e]._labels.length &&
                  ((l = k = 0),
                  (k = a[e]._labels[1]),
                  (l =
                    "dateTime" === a[e].valueType
                      ? a[e]._labels[a[e]._labels.length - 2]
                      : a[e]._labels[a[e]._labels.length - 1]),
                  (x =
                    k.textBlock.width *
                      Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) +
                    (k.textBlock.height - l.textBlock.fontSize / 2) *
                      Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                  (s =
                    l.textBlock.width *
                      Math.cos((Math.PI / 180) * Math.abs(l.textBlock.angle)) +
                    (l.textBlock.height - l.textBlock.fontSize / 2) *
                      Math.sin((Math.PI / 180) * Math.abs(l.textBlock.angle)))),
                !a[e] ||
                  !a[e].labelAutoFit ||
                  p(D) ||
                  p(G) ||
                  m.isNavigator ||
                  m.stockChart ||
                  ((l = 0),
                  0 < a[e].labelAngle
                    ? G + s > t &&
                      a[e].convertPixelToValue(G) >= a[e].viewportMinimum &&
                      a[e].convertPixelToValue(G) <= a[e].viewportMaximum &&
                      (l += 0 < a[e].labelAngle ? G + s - t - $ : 0)
                    : 0 > a[e].labelAngle
                    ? D - x < d &&
                      D - x < a[e].viewportMinimum &&
                      (I =
                        d -
                        (R +
                          a[e].tickLength +
                          A +
                          D -
                          x +
                          a[e].labelFontSize / 2))
                    : 0 === a[e].labelAngle &&
                      (G + s > t &&
                        a[e].convertPixelToValue(G) >= a[e].viewportMinimum &&
                        a[e].convertPixelToValue(G) <= a[e].viewportMaximum &&
                        (l = G + s / 2 - t - $),
                      D - x < d &&
                        D - x < a[e].viewportMinimum &&
                        (I = d - R - a[e].tickLength - A - D + x / 2)),
                  a[e].viewportMaximum === a[e].maximum &&
                  a[e].viewportMinimum === a[e].minimum &&
                  0 < a[e].labelAngle &&
                  0 < l
                    ? (t -= l)
                    : a[e].viewportMaximum === a[e].maximum &&
                      a[e].viewportMinimum === a[e].minimum &&
                      0 > a[e].labelAngle &&
                      0 < I
                    ? (d += I)
                    : a[e].viewportMaximum === a[e].maximum &&
                      a[e].viewportMinimum === a[e].minimum &&
                      0 === a[e].labelAngle &&
                      (0 < I && (d += I), 0 < l && (t -= l))),
                m.panEnabled
                  ? (X =
                      p(m.sessionVariables.axisX.height) || m.stockChart
                        ? (m.sessionVariables.axisX.height = X)
                        : m.sessionVariables.axisX.height)
                  : (m.sessionVariables.axisX.height = X),
                (l = Math.round(h.y2 - X - g + E)),
                (k = Math.round(h.y2)),
                (a[e].lineCoordinates.x2 = t),
                (a[e].lineCoordinates.width = t - d),
                (a[e].lineCoordinates.y1 = l),
                (a[e].lineCoordinates.y2 = l),
                "inside" === a[e].labelPlacement &&
                  0 < e &&
                  ((a[e].lineCoordinates.y1 =
                    a[0].lineCoordinates.y2 +
                    E +
                    (a[e].labelEffectiveHeight || 0)),
                  (a[e].lineCoordinates.y2 =
                    a[e].lineCoordinates.y1 + a[e].lineThickness / 2)),
                "inside" === a[e].tickPlacement &&
                  0 < e &&
                  ((a[e].lineCoordinates.y1 += a[e].tickLength),
                  (a[e].lineCoordinates.y2 =
                    a[e].lineCoordinates.y1 + a[e].lineThickness / 2)),
                (a[e].bounds = {
                  x1: d,
                  y1: l,
                  x2: t,
                  y2: k - (X + g - z[e] - E),
                  width: t - d,
                }),
                (a[e].bounds.height = a[e].bounds.y2 - a[e].bounds.y1)),
                (E += z[e] + a[e].margin);
          if (f && 0 < f.length)
            for (e = 0; e < f.length; e++)
              (f[e].lineCoordinates.x1 = Math.round(h.x1 + S + R)),
                (f[e].lineCoordinates.x2 = Math.round(
                  h.x2 - $ - Z > m.width - n ? m.width - n : h.x2 - $ - Z
                )),
                (f[e].lineCoordinates.width = Math.abs(t - d)),
                f[e]._labels &&
                  1 < f[e]._labels.length &&
                  ((k = f[e]._labels[1]),
                  (l =
                    "dateTime" === f[e].valueType
                      ? f[e]._labels[f[e]._labels.length - 2]
                      : f[e]._labels[f[e]._labels.length - 1]),
                  (x =
                    k.textBlock.width *
                      Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) +
                    (k.textBlock.height - l.textBlock.fontSize / 2) *
                      Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                  (s =
                    l.textBlock.width *
                      Math.cos((Math.PI / 180) * Math.abs(l.textBlock.angle)) +
                    (l.textBlock.height - l.textBlock.fontSize / 2) *
                      Math.sin((Math.PI / 180) * Math.abs(l.textBlock.angle)))),
                m.panEnabled
                  ? (Y =
                      p(m.sessionVariables.axisX2.height) || m.stockChart
                        ? (m.sessionVariables.axisX2.height = Y)
                        : m.sessionVariables.axisX2.height)
                  : (m.sessionVariables.axisX2.height = Y),
                (l = Math.round(h.y1)),
                (k = f[e].lineCoordinates.y1 = l + Y + W - T),
                (f[e].lineCoordinates.y2 = l),
                "inside" === f[e].labelPlacement &&
                  0 < e &&
                  (f[e].lineCoordinates.y1 =
                    f[0].lineCoordinates.y1 -
                    T -
                    (f[e].labelEffectiveHeight || 0) -
                    5),
                "inside" === f[e].tickPlacement &&
                  0 < e &&
                  (f[e].lineCoordinates.y1 -= f[e].tickLength),
                (f[e].bounds = {
                  x1: d,
                  y1:
                    l +
                    (Y +
                      W -
                      ("inside" === f[e].labelPlacement && 0 === e
                        ? v[e] - 5
                        : v[e]) -
                      T),
                  x2: t,
                  y2: k,
                  width: t - d,
                }),
                (f[e].bounds.height = f[e].bounds.y2 - f[e].bounds.y1),
                (T +=
                  ("inside" === f[e].labelPlacement && 0 === e
                    ? v[e] - 5
                    : v[e]) + f[e].margin);
          if (c && 0 < c.length)
            for (e = 0; e < c.length; e++)
              (R = m.isNavigator ? 0 : 10),
                c[e] &&
                  ((d = Math.round(
                    a[0] ? a[0].lineCoordinates.x1 : f[0].lineCoordinates.x1
                  )),
                  (R =
                    c[e]._labels && 0 < c[e]._labels.length
                      ? c[e]._labels[c[e]._labels.length - 1].textBlock.height /
                        2
                      : n),
                  (l = Math.round(
                    h.y1 + Y + W < Math.max(R, n)
                      ? Math.max(R, n)
                      : h.y1 + Y + W
                  )),
                  (t = Math.round(
                    a[0] ? a[0].lineCoordinates.x1 : f[0].lineCoordinates.x1
                  )),
                  (R =
                    0 < a.length
                      ? 0
                      : c[e]._labels && 0 < c[e]._labels.length
                      ? c[e]._labels[0].textBlock.height / 2
                      : n),
                  (k = Math.round(h.y2 - X - g - R)),
                  (c[e].lineCoordinates = {
                    x1: d - V,
                    y1: l,
                    x2: t - V,
                    y2: k,
                    height: Math.abs(k - l),
                  }),
                  "inside" === c[e].labelPlacement &&
                    0 < e &&
                    ((c[e].lineCoordinates.x1 =
                      c[0].lineCoordinates.x1 -
                      V -
                      (c[e].labelEffectiveWidth || 0) -
                      5),
                    (c[e].lineCoordinates.x2 =
                      c[e].lineCoordinates.x1 + c[e].lineThickness / 2)),
                  "inside" === c[e].tickPlacement &&
                    0 < e &&
                    ((c[e].lineCoordinates.x1 -= c[e].tickLength),
                    (c[e].lineCoordinates.x2 =
                      c[e].lineCoordinates.x1 + c[e].lineThickness / 2)),
                  (c[e].bounds = {
                    x1:
                      d -
                      (("inside" === c[e].labelPlacement && 0 === e
                        ? A[e] - 5
                        : A[e]) +
                        V),
                    y1: l,
                    x2: t - V,
                    y2: k,
                    height: k - l,
                  }),
                  (c[e].bounds.width = c[e].bounds.x2 - c[e].bounds.x1),
                  c[e].title &&
                    (c[e]._titleTextBlock.maxWidth =
                      0 < c[e].titleMaxWidth &&
                      c[e].titleMaxWidth < c[e].lineCoordinates.height
                        ? c[e].titleMaxWidth
                        : c[e].lineCoordinates.height),
                  (V +=
                    ("inside" === c[e].labelPlacement && 0 === e
                      ? A[e] - 5
                      : A[e]) + c[e].margin));
          if (b && 0 < b.length)
            for (e = 0; e < b.length; e++)
              b[e] &&
                ((d = Math.round(
                  a[0] ? a[0].lineCoordinates.x2 : f[0].lineCoordinates.x2
                )),
                (t = Math.round(d)),
                (R =
                  b[e]._labels && 0 < b[e]._labels.length
                    ? b[e]._labels[b[e]._labels.length - 1].textBlock.height / 2
                    : 0),
                (l = Math.round(
                  h.y1 + Y + W < Math.max(R, n) ? Math.max(R, n) : h.y1 + Y + W
                )),
                (R =
                  0 < a.length
                    ? 0
                    : b[e]._labels && 0 < b[e]._labels.length
                    ? b[e]._labels[0].textBlock.height / 2
                    : 0),
                (k = Math.round(h.y2 - (X + g + R))),
                (b[e].lineCoordinates = {
                  x1: d + U,
                  y1: l,
                  x2: d + U,
                  y2: k,
                  height: Math.abs(k - l),
                }),
                "inside" === b[e].labelPlacement &&
                  0 < e &&
                  ((b[e].lineCoordinates.x1 =
                    b[0].lineCoordinates.x2 +
                    U +
                    (b[e].labelEffectiveWidth || 0) +
                    5),
                  (b[e].lineCoordinates.x2 =
                    b[e].lineCoordinates.x1 + b[e].lineThickness / 2)),
                "inside" === b[e].tickPlacement &&
                  0 < e &&
                  ((b[e].lineCoordinates.x1 += b[e].tickLength),
                  (b[e].lineCoordinates.x2 =
                    b[e].lineCoordinates.x1 + b[e].lineThickness / 2)),
                (b[e].bounds = {
                  x1: d + U,
                  y1: l,
                  x2:
                    t +
                    (("inside" === b[e].labelPlacement && 0 === e
                      ? B[e] - 5
                      : B[e]) +
                      U),
                  y2: k,
                  height: k - l,
                }),
                (b[e].bounds.width = b[e].bounds.x2 - b[e].bounds.x1),
                b[e].title &&
                  (b[e]._titleTextBlock.maxWidth =
                    0 < b[e].titleMaxWidth &&
                    b[e].titleMaxWidth < b[e].lineCoordinates.height
                      ? b[e].titleMaxWidth
                      : b[e].lineCoordinates.height),
                (U +=
                  ("inside" === b[e].labelPlacement && 0 === e
                    ? B[e] - 5
                    : B[e]) + b[e].margin));
          if (a && 0 < a.length)
            for (e = 0; e < a.length; e++)
              a[e] &&
                (a[e].calculateValueToPixelConversionParameters(),
                a[e].calculateBreaksSizeInValues(),
                a[e]._labels &&
                  1 < a[e]._labels.length &&
                  ((D =
                    (a[e].logarithmic
                      ? Math.log(
                          a[e]._labels[1].position / a[e].viewportMinimum
                        ) / a[e].conversionParameters.lnLogarithmBase
                      : a[e]._labels[1].position - a[e].viewportMinimum) *
                      Math.abs(a[e].conversionParameters.pixelPerUnit) +
                    a[e].lineCoordinates.x1),
                  (d =
                    a[e]._labels[
                      a[e]._labels.length -
                        ("dateTime" === a[e].valueType ? 2 : 1)
                    ].position),
                  (d = a[e].getApparentDifference(a[e].viewportMinimum, d)),
                  (G = a[e].logarithmic
                    ? (1 < d
                        ? (Math.log(d) /
                            a[e].conversionParameters.lnLogarithmBase) *
                          Math.abs(a[e].conversionParameters.pixelPerUnit)
                        : 0) + a[e].lineCoordinates.x1
                    : (0 < d
                        ? d * Math.abs(a[e].conversionParameters.pixelPerUnit)
                        : 0) + a[e].lineCoordinates.x1)));
          if (f && 0 < f.length)
            for (e = 0; e < f.length; e++)
              f[e].calculateValueToPixelConversionParameters(),
                f[e].calculateBreaksSizeInValues(),
                f[e]._labels &&
                  1 < f[e]._labels.length &&
                  ((D =
                    (f[e].logarithmic
                      ? Math.log(
                          f[e]._labels[1].position / f[e].viewportMinimum
                        ) / f[e].conversionParameters.lnLogarithmBase
                      : f[e]._labels[1].position - f[e].viewportMinimum) *
                      Math.abs(f[e].conversionParameters.pixelPerUnit) +
                    f[e].lineCoordinates.x1),
                  (d =
                    f[e]._labels[
                      f[e]._labels.length -
                        ("dateTime" === f[e].valueType ? 2 : 1)
                    ].position),
                  (d = f[e].getApparentDifference(f[e].viewportMinimum, d)),
                  (G = f[e].logarithmic
                    ? (1 < d
                        ? (Math.log(d) /
                            f[e].conversionParameters.lnLogarithmBase) *
                          Math.abs(f[e].conversionParameters.pixelPerUnit)
                        : 0) + f[e].lineCoordinates.x1
                    : (0 < d
                        ? d * Math.abs(f[e].conversionParameters.pixelPerUnit)
                        : 0) + f[e].lineCoordinates.x1));
          for (e = 0; e < q.length; e++)
            "axisY" === q[e].type &&
              (q[e].calculateValueToPixelConversionParameters(),
              q[e].calculateBreaksSizeInValues());
          if (0 < w) {
            if (a && 0 < a.length)
              for (e = 0; e < a.length; e++)
                u = O[w - 1][e] === O[w][e] ? !0 : !1;
            else u = !0;
            if (f && 0 < f.length)
              for (e = 0; e < f.length; e++)
                K = P[w - 1][e] === P[w][e] ? !0 : !1;
            else K = !0;
            if (c && 0 < c.length)
              for (e = 0; e < c.length; e++)
                L = M[w - 1][e] === M[w][e] ? !0 : !1;
            else L = !0;
            if (b && 0 < b.length)
              for (e = 0; e < b.length; e++)
                N = Q[w - 1][e] === Q[w][e] ? !0 : !1;
            else N = !0;
          }
          if (u && K && L && N) break;
          w++;
        }
        if (a && 0 < a.length)
          for (e = 0; e < a.length; e++)
            a[e].calculateStripLinesThicknessInValues(),
              a[e].calculateBreaksInPixels();
        if (f && 0 < f.length)
          for (e = 0; e < f.length; e++)
            f[e].calculateStripLinesThicknessInValues(),
              f[e].calculateBreaksInPixels();
        if (c && 0 < c.length)
          for (e = 0; e < c.length; e++)
            c[e].calculateStripLinesThicknessInValues(),
              c[e].calculateBreaksInPixels();
        if (b && 0 < b.length)
          for (e = 0; e < b.length; e++)
            b[e].calculateStripLinesThicknessInValues(),
              b[e].calculateBreaksInPixels();
      } else {
        n = [];
        D = [];
        I = [];
        x = [];
        G = [];
        s = [];
        O = [];
        for (P = []; 4 > w; ) {
          X = U = V = Z = R = W = g = Q = M = E = Y = 0;
          if (a && 0 < a.length)
            for (I = [], e = U = 0; e < a.length; e++)
              I.push(
                Math.ceil(a[e] ? a[e].createLabelsAndCalculateWidth() : 0)
              ),
                (U += I[e]),
                (g += a[e] && !m.isNavigator ? a[e].margin : 0);
          else
            I.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
          O.push(I);
          if (f && 0 < f.length)
            for (x = [], e = X = 0; e < f.length; e++)
              x.push(
                Math.ceil(f[e] ? f[e].createLabelsAndCalculateWidth() : 0)
              ),
                (X += x[e]),
                (W += f[e] ? f[e].margin : 0);
          else
            x.push(Math.ceil(f[0] ? f[0].createLabelsAndCalculateWidth() : 0));
          P.push(x);
          if (c && 0 < c.length)
            for (e = 0; e < c.length; e++)
              (c[e].lineCoordinates = {}),
                (d = Math.round(h.x1 + U + g)),
                (t = Math.round(
                  h.x2 - X - W > m.width - 10 ? m.width - 10 : h.x2 - X - W
                )),
                c[e].labelAutoFit &&
                  !p(z) &&
                  (0 < !a.length &&
                    (d =
                      0 > c[e].labelAngle
                        ? Math.max(d, z)
                        : 0 === c[e].labelAngle
                        ? Math.max(d, z / 2)
                        : d),
                  0 < !f.length &&
                    (t =
                      0 < c[e].labelAngle
                        ? t - v / 2
                        : 0 === c[e].labelAngle
                        ? t - v / 2
                        : t)),
                (c[e].lineCoordinates.x1 = d),
                (c[e].lineCoordinates.x2 = t),
                (c[e].lineCoordinates.width = Math.abs(t - d)),
                c[e].title &&
                  (c[e]._titleTextBlock.maxWidth =
                    0 < c[e].titleMaxWidth &&
                    c[e].titleMaxWidth < c[e].lineCoordinates.width
                      ? c[e].titleMaxWidth
                      : c[e].lineCoordinates.width);
          if (b && 0 < b.length)
            for (e = 0; e < b.length; e++)
              (b[e].lineCoordinates = {}),
                (d = Math.round(h.x1 + U + g)),
                (t = Math.round(
                  h.x2 - X - W > b[e].chart.width - 10
                    ? b[e].chart.width - 10
                    : h.x2 - X - W
                )),
                b[e] &&
                  b[e].labelAutoFit &&
                  !p(A) &&
                  (0 < !a.length &&
                    (d =
                      0 < b[e].labelAngle
                        ? Math.max(d, A)
                        : 0 === b[e].labelAngle
                        ? Math.max(d, A / 2)
                        : d),
                  0 < !f.length && (t -= B / 2)),
                (b[e].lineCoordinates.x1 = d),
                (b[e].lineCoordinates.x2 = t),
                (b[e].lineCoordinates.width = Math.abs(t - d)),
                b[e].title &&
                  (b[e]._titleTextBlock.maxWidth =
                    0 < b[e].titleMaxWidth &&
                    b[e].titleMaxWidth < b[e].lineCoordinates.width
                      ? b[e].titleMaxWidth
                      : b[e].lineCoordinates.width);
          if (c && 0 < c.length)
            for (n = [], e = V = 0; e < c.length; e++)
              n.push(
                Math.ceil(c[e] ? c[e].createLabelsAndCalculateHeight() : 0)
              ),
                (V += n[e] + c[e].margin),
                (R += c[e].margin);
          else
            n.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
          G.push(n);
          if (b && 0 < b.length)
            for (D = [], e = 0; e < b.length; e++)
              D.push(
                Math.ceil(b[e] ? b[e].createLabelsAndCalculateHeight() : 0)
              ),
                (Z += b[e].margin);
          else
            D.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
          s.push(D);
          if (c && 0 < c.length)
            for (e = 0; e < c.length; e++)
              0 < c[e]._labels.length &&
                ((k = c[e]._labels[0]),
                (l = c[e]._labels[c[e]._labels.length - 1]),
                (z =
                  k.textBlock.width *
                    Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) +
                  (k.textBlock.height - l.textBlock.fontSize / 2) *
                    Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                (v =
                  l.textBlock.width *
                    Math.cos((Math.PI / 180) * Math.abs(l.textBlock.angle)) +
                  (l.textBlock.height - l.textBlock.fontSize / 2) *
                    Math.sin((Math.PI / 180) * Math.abs(l.textBlock.angle))));
          if (b && 0 < b.length)
            for (e = 0; e < b.length; e++)
              b[e] &&
                0 < b[e]._labels.length &&
                ((k = b[e]._labels[0]),
                (l = b[e]._labels[b[e]._labels.length - 1]),
                (A =
                  k.textBlock.width *
                    Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) +
                  (k.textBlock.height - l.textBlock.fontSize / 2) *
                    Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                (B =
                  l.textBlock.width *
                    Math.cos((Math.PI / 180) * Math.abs(l.textBlock.angle)) +
                  (l.textBlock.height - l.textBlock.fontSize / 2) *
                    Math.sin((Math.PI / 180) * Math.abs(l.textBlock.angle))));
          if (m.panEnabled)
            for (e = 0; e < c.length; e++)
              n[e] = p(m.sessionVariables.axisY[e].height)
                ? (m.sessionVariables.axisY[e].height = n[e])
                : m.sessionVariables.axisY[e].height;
          else
            for (e = 0; e < c.length; e++)
              m.sessionVariables.axisY[e].height = n[e];
          if (c && 0 < c.length)
            for (e = c.length - 1; 0 <= e; e--)
              (l = Math.round(h.y2)),
                (k = Math.round(
                  h.y2 > c[e].chart.height ? c[e].chart.height : h.y2
                )),
                (c[e].lineCoordinates.y1 = l - (n[e] + c[e].margin + Y)),
                (c[e].lineCoordinates.y2 = l - (n[e] + c[e].margin + Y)),
                "inside" === c[e].labelPlacement &&
                  0 < e &&
                  ((c[e].lineCoordinates.y1 =
                    c[e].lineCoordinates.y1 +
                    n[e] -
                    (c[e]._titleTextBlock ? c[e]._titleTextBlock.height : 0) -
                    c[e].tickLength -
                    (c[e].stripLineLabelEffectiveHeight || 0) -
                    5),
                  (c[e].lineCoordinates.y2 =
                    c[e].lineCoordinates.y1 + c[e].lineThickness / 2)),
                "inside" === c[e].tickPlacement &&
                  0 < e &&
                  ((c[e].lineCoordinates.y1 += c[e].tickLength),
                  (c[e].lineCoordinates.y2 =
                    c[e].lineCoordinates.y1 + c[e].lineThickness / 2)),
                (c[e].bounds = {
                  x1: d,
                  y1: l - (n[e] + Y + c[e].margin),
                  x2: t,
                  y2: k - (Y + c[e].margin),
                  width: t - d,
                  height: n[e],
                }),
                c[e].title &&
                  (c[e]._titleTextBlock.maxWidth =
                    0 < c[e].titleMaxWidth &&
                    c[e].titleMaxWidth < c[e].lineCoordinates.width
                      ? c[e].titleMaxWidth
                      : c[e].lineCoordinates.width),
                (Y += n[e] + c[e].margin);
          if (b && 0 < b.length)
            for (e = b.length - 1; 0 <= e; e--)
              b[e] &&
                ((l = Math.round(h.y1)),
                (k = Math.round(h.y1 + (D[e] + b[e].margin + E))),
                (b[e].lineCoordinates.y1 = k),
                (b[e].lineCoordinates.y2 = k),
                "inside" === b[e].labelPlacement &&
                  0 < e &&
                  ((b[e].lineCoordinates.y1 =
                    k -
                    D[e] +
                    (b[e]._titleTextBlock ? b[e]._titleTextBlock.height : 0) +
                    b[e].tickLength +
                    (b[e].stripLineLabelEffectiveHeight || 0)),
                  (b[e].lineCoordinates.y2 =
                    b[e].lineCoordinates.y1 - b[e].lineThickness / 2)),
                "inside" === b[e].tickPlacement &&
                  0 < e &&
                  ((b[e].lineCoordinates.y1 -= b[e].tickLength),
                  (b[e].lineCoordinates.y2 =
                    b[e].lineCoordinates.y1 - b[e].lineThickness / 2)),
                (b[e].bounds = {
                  x1: d,
                  y1: l + (b[e].margin + E),
                  x2: t,
                  y2: k,
                  width: t - d,
                }),
                (b[e].bounds.height = b[e].bounds.y2 - b[e].bounds.y1),
                b[e].title &&
                  (b[e]._titleTextBlock.maxWidth =
                    0 < b[e].titleMaxWidth &&
                    b[e].titleMaxWidth < b[e].lineCoordinates.width
                      ? b[e].titleMaxWidth
                      : b[e].lineCoordinates.width),
                (E += D[e] + b[e].margin));
          if (a && 0 < a.length)
            for (e = 0; e < a.length; e++) {
              R =
                a[e]._labels && 0 < a[e]._labels.length
                  ? a[e]._labels[0].textBlock.fontSize / 2
                  : 0;
              d = Math.round(h.x1 + g);
              l =
                b && 0 < b.length
                  ? Math.round(
                      b[0]
                        ? b[0].lineCoordinates.y2
                        : h.y1 < Math.max(R, 10)
                        ? Math.max(R, 10)
                        : h.y1
                    )
                  : h.y1 < Math.max(R, 10)
                  ? Math.max(R, 10)
                  : h.y1;
              t = Math.round(h.x1 + U + g);
              k =
                c && 0 < c.length
                  ? Math.round(
                      c[0]
                        ? c[0].lineCoordinates.y1
                        : h.y2 - V > m.height - Math.max(R, 10)
                        ? m.height - Math.max(R, 10)
                        : h.y2 - V
                    )
                  : h.y2 > m.height - Math.max(R, 10)
                  ? m.height - Math.max(R, 10)
                  : h.y2;
              if (c && 0 < c.length)
                for (R = 0; R < c.length; R++)
                  c[R] &&
                    c[R].labelAutoFit &&
                    ((t = c[R].lineCoordinates.x1),
                    (d =
                      0 > c[R].labelAngle || 0 === c[R].labelAngle
                        ? t - U
                        : d));
              if (b && 0 < b.length)
                for (R = 0; R < b.length; R++)
                  b[R] &&
                    b[R].labelAutoFit &&
                    ((t = b[R].lineCoordinates.x1), (d = t - U));
              a[e].lineCoordinates = {
                x1: t - M,
                y1: l,
                x2: t - M,
                y2: k,
                height: Math.abs(k - l),
              };
              "inside" === a[e].labelPlacement &&
                0 < e &&
                ((a[e].lineCoordinates.x1 =
                  a[e].lineCoordinates.x1 -
                  (I[e] -
                    (a[e]._titleTextBlock ? a[e]._titleTextBlock.height : 0)) +
                  a[e].tickLength +
                  (a[e].stripLineLabelEffectiveWidth || 0)),
                (a[e].lineCoordinates.x2 =
                  a[e].lineCoordinates.x1 + a[e].lineThickness / 2));
              "inside" === a[e].tickPlacement &&
                0 < e &&
                ((a[e].lineCoordinates.x1 -= a[e].tickLength),
                (a[e].lineCoordinates.x2 =
                  a[e].lineCoordinates.x1 + a[e].lineThickness / 2));
              a[e].bounds = {
                x1: t - (I[e] + M),
                y1: l,
                x2: t - M,
                y2: k,
                height: k - l,
              };
              a[e].bounds.width = a[e].bounds.x2 - a[e].bounds.x1;
              a[e].title &&
                (a[e]._titleTextBlock.maxWidth =
                  0 < a[e].titleMaxWidth &&
                  a[e].titleMaxWidth < a[e].lineCoordinates.height
                    ? a[e].titleMaxWidth
                    : a[e].lineCoordinates.height);
              a[e].calculateValueToPixelConversionParameters();
              a[e].calculateBreaksSizeInValues();
              M += I[e] + a[e].margin;
            }
          if (f && 0 < f.length)
            for (e = 0; e < f.length; e++) {
              R =
                f[e]._labels && 0 < f[e]._labels.length
                  ? f[e]._labels[0].textBlock.fontSize / 2
                  : 0;
              d = Math.round(h.x1 - g);
              l =
                b && 0 < b.length
                  ? Math.round(
                      b[0]
                        ? b[0].lineCoordinates.y2
                        : h.y1 < Math.max(R, 10)
                        ? Math.max(R, 10)
                        : h.y1
                    )
                  : h.y1 < Math.max(R, 10)
                  ? Math.max(R, 10)
                  : h.y1;
              t = Math.round(h.x2 - X - W);
              k =
                c && 0 < c.length
                  ? Math.round(
                      c[0]
                        ? c[0].lineCoordinates.y1
                        : h.y2 - V > m.height - Math.max(R, 10)
                        ? m.height - Math.max(R, 10)
                        : h.y2 - V
                    )
                  : h.y2 > m.height - Math.max(R, 10)
                  ? m.height - Math.max(R, 10)
                  : h.y2;
              if (c && 0 < c.length)
                for (R = 0; R < c.length; R++)
                  c[R] &&
                    c[R].labelAutoFit &&
                    ((t =
                      0 > c[R].labelAngle
                        ? Math.max(t, z)
                        : 0 === c[R].labelAngle
                        ? Math.max(t, z / 2)
                        : t),
                    (d =
                      0 > c[R].labelAngle || 0 === c[R].labelAngle
                        ? t - X
                        : d));
              if (b && 0 < b.length)
                for (R = 0; R < b.length; R++)
                  b[R] &&
                    b[R].labelAutoFit &&
                    ((t = b[R].lineCoordinates.x2), (d = t - X));
              f[e].lineCoordinates = {
                x1: t + Q,
                y1: l,
                x2: t + Q,
                y2: k,
                height: Math.abs(k - l),
              };
              "inside" === f[e].labelPlacement &&
                0 < e &&
                ((f[e].lineCoordinates.x1 =
                  f[e].lineCoordinates.x1 +
                  (x[e] -
                    (f[e]._titleTextBlock ? f[e]._titleTextBlock.height : 0) -
                    2) -
                  f[e].tickLength -
                  (f[e].stripLineLabelEffectiveWidth || 0)),
                (f[e].lineCoordinates.x2 =
                  f[e].lineCoordinates.x1 + f[e].lineThickness / 2));
              "inside" === f[e].tickPlacement &&
                0 < e &&
                ((f[e].lineCoordinates.x1 += f[e].tickLength),
                (f[e].lineCoordinates.x2 =
                  f[e].lineCoordinates.x1 + f[e].lineThickness / 2));
              f[e].bounds = {
                x1: f[e].lineCoordinates.x1,
                y1: l,
                x2: t + x[e] + Q,
                y2: k,
                width: t - d,
                height: k - l,
              };
              f[e].bounds.width = f[e].bounds.x2 - f[e].bounds.x1;
              f[e].title &&
                (f[e]._titleTextBlock.maxWidth =
                  0 < f[e].titleMaxWidth &&
                  f[e].titleMaxWidth < f[e].lineCoordinates.height
                    ? f[e].titleMaxWidth
                    : f[e].lineCoordinates.height);
              f[e].calculateValueToPixelConversionParameters();
              f[e].calculateBreaksSizeInValues();
              Q += x[e] + f[e].margin;
            }
          for (e = 0; e < q.length; e++)
            "axisY" === q[e].type &&
              (q[e].calculateValueToPixelConversionParameters(),
              q[e].calculateBreaksSizeInValues());
          if (0 < w) {
            if (a && 0 < a.length)
              for (e = 0; e < a.length; e++)
                u = O[w - 1][e] === O[w][e] ? !0 : !1;
            else u = !0;
            if (f && 0 < f.length)
              for (e = 0; e < f.length; e++)
                K = P[w - 1][e] === P[w][e] ? !0 : !1;
            else K = !0;
            if (c && 0 < c.length)
              for (e = 0; e < c.length; e++)
                L = G[w - 1][e] === G[w][e] ? !0 : !1;
            else L = !0;
            if (b && 0 < b.length)
              for (e = 0; e < b.length; e++)
                N = s[w - 1][e] === s[w][e] ? !0 : !1;
            else N = !0;
          }
          if (u && K && L && N) break;
          w++;
        }
        if (c && 0 < c.length)
          for (e = 0; e < c.length; e++)
            c[e].calculateStripLinesThicknessInValues(),
              c[e].calculateBreaksInPixels();
        if (b && 0 < b.length)
          for (e = 0; e < b.length; e++)
            b[e].calculateStripLinesThicknessInValues(),
              b[e].calculateBreaksInPixels();
        if (a && 0 < a.length)
          for (e = 0; e < a.length; e++)
            a[e].calculateStripLinesThicknessInValues(),
              a[e].calculateBreaksInPixels();
        if (f && 0 < f.length)
          for (e = 0; e < f.length; e++)
            f[e].calculateStripLinesThicknessInValues(),
              f[e].calculateBreaksInPixels();
      }
    };
    B.render = function (a, f, c, b, g) {
      g = a[0] ? a[0].chart : f[0].chart;
      var h = g.ctx;
      g.alignVerticalAxes && g.alignVerticalAxes();
      h.save();
      h.beginPath();
      a &&
        a.length &&
        h.rect(
          2,
          a[0].bounds.y1,
          a[0].chart.width - 4,
          a[a.length - 1].bounds.y2
        );
      f &&
        f.length &&
        h.rect(
          2,
          f[f.length - 1].bounds.y1,
          f[0].chart.width - 4,
          f[0].bounds.y2
        );
      h.clip();
      if (a && 0 < a.length)
        for (var d = 0; d < a.length; d++) a[d].renderLabelsTicksAndTitle();
      if (f && 0 < f.length)
        for (d = 0; d < f.length; d++) f[d].renderLabelsTicksAndTitle();
      h.restore();
      if (c && 0 < c.length)
        for (d = 0; d < c.length; d++) c[d].renderLabelsTicksAndTitle();
      if (b && 0 < b.length)
        for (d = 0; d < b.length; d++) b[d].renderLabelsTicksAndTitle();
      g.preparePlotArea();
      d = g.plotArea;
      h.save();
      h.beginPath();
      h.rect(d.x1, d.y1, Math.abs(d.x2 - d.x1), Math.abs(d.y2 - d.y1));
      h.clip();
      if (a && 0 < a.length)
        for (d = 0; d < a.length; d++)
          a[d].renderStripLinesOfThicknessType("value");
      if (f && 0 < f.length)
        for (d = 0; d < f.length; d++)
          f[d].renderStripLinesOfThicknessType("value");
      if (c && 0 < c.length)
        for (d = 0; d < c.length; d++)
          c[d].renderStripLinesOfThicknessType("value");
      if (b && 0 < b.length)
        for (d = 0; d < b.length; d++)
          b[d].renderStripLinesOfThicknessType("value");
      if (a && 0 < a.length)
        for (d = 0; d < a.length; d++) a[d].renderInterlacedColors();
      if (f && 0 < f.length)
        for (d = 0; d < f.length; d++) f[d].renderInterlacedColors();
      if (c && 0 < c.length)
        for (d = 0; d < c.length; d++) c[d].renderInterlacedColors();
      if (b && 0 < b.length)
        for (d = 0; d < b.length; d++) b[d].renderInterlacedColors();
      h.restore();
      if (a && 0 < a.length)
        for (d = 0; d < a.length; d++)
          a[d].renderGrid(),
            t && (a[d].createMask(), a[d].renderBreaksBackground());
      if (f && 0 < f.length)
        for (d = 0; d < f.length; d++)
          f[d].renderGrid(),
            t && (f[d].createMask(), f[d].renderBreaksBackground());
      if (c && 0 < c.length)
        for (d = 0; d < c.length; d++)
          c[d].renderGrid(),
            t && (c[d].createMask(), c[d].renderBreaksBackground());
      if (b && 0 < b.length)
        for (d = 0; d < b.length; d++)
          b[d].renderGrid(),
            t && (b[d].createMask(), b[d].renderBreaksBackground());
      if (a && 0 < a.length)
        for (d = 0; d < a.length; d++) a[d].renderAxisLine();
      if (f && 0 < f.length)
        for (d = 0; d < f.length; d++) f[d].renderAxisLine();
      if (c && 0 < c.length)
        for (d = 0; d < c.length; d++) c[d].renderAxisLine();
      if (b && 0 < b.length)
        for (d = 0; d < b.length; d++) b[d].renderAxisLine();
      h = !1;
      if (a && 0 < a.length)
        for (d = 0; d < a.length; d++)
          a[d].renderStripLinesOfThicknessType("pixel"),
            a[d].crosshair &&
              a[d].crosshair.enabled &&
              ((h = !0), (g.clearedOverlayedCanvas = a[d].type));
      if (f && 0 < f.length)
        for (d = 0; d < f.length; d++)
          f[d].renderStripLinesOfThicknessType("pixel"),
            f[d].crosshair &&
              f[d].crosshair.enabled &&
              ((h = !0), (g.clearedOverlayedCanvas = f[d].type));
      if (c && 0 < c.length)
        for (d = 0; d < c.length; d++)
          c[d].renderStripLinesOfThicknessType("pixel"),
            c[d].crosshair &&
              c[d].crosshair.enabled &&
              ((h = !0), (g.clearedOverlayedCanvas = c[d].type));
      if (b && 0 < b.length)
        for (d = 0; d < b.length; d++)
          b[d].renderStripLinesOfThicknessType("pixel"),
            b[d].crosshair &&
              b[d].crosshair.enabled &&
              ((h = !0), (g.clearedOverlayedCanvas = b[d].type));
      if (
        h ||
        (!h &&
          g.clearedOverlayedCanvas &&
          0 <= g.clearedOverlayedCanvas.indexOf("axis"))
      )
        g.resetOverlayedCanvas(),
          g.renderCrosshairs(
            null,
            p(g.sessionVariables.crosshairShownByPixel) ||
              g.sessionVariables.crosshairShownByPixel
              ? !0
              : g.sessionVariables.crosshairShownByPixel
          );
    };
    B.prototype.calculateStripLinesThicknessInValues = function () {
      for (var a = 0; a < this.stripLines.length; a++)
        if (
          null !== this.stripLines[a].startValue &&
          null !== this.stripLines[a].endValue
        ) {
          var f = Math.min(
              this.stripLines[a].startValue,
              this.stripLines[a].endValue
            ),
            c = Math.max(
              this.stripLines[a].startValue,
              this.stripLines[a].endValue
            ),
            b = this.getApparentDifference(f, c);
          this.stripLines[a].value = this.convertPixelToValue(
            (this.convertValueToPixel(f) + this.convertValueToPixel(c)) / 2
          );
          this.stripLines[a].thickness = b;
          this.stripLines[a]._thicknessType = "value";
        }
    };
    B.prototype.calculateBreaksSizeInValues = function () {
      for (
        var a =
            "left" === this._position || "right" === this._position
              ? this.lineCoordinates.height || this.chart.height
              : this.lineCoordinates.width || this.chart.width,
          f = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
          c =
            this.conversionParameters.pixelPerUnit ||
            a /
              (this.logarithmic
                ? this.conversionParameters.maximum /
                  this.conversionParameters.minimum
                : this.conversionParameters.maximum -
                  this.conversionParameters.minimum),
          b = this.scaleBreaks && !p(this.scaleBreaks.options.spacing),
          g,
          h = 0;
        h < f.length;
        h++
      )
        (g = b || !p(f[h].options.spacing)),
          (f[h].spacing =
            Va(f[h].spacing, a, 8, g ? 0.1 * a : 8, g ? 0 : 3) << 0),
          (f[h].size = 0 > f[h].spacing ? 0 : Math.abs(f[h].spacing / c)),
          this.logarithmic &&
            (f[h].size = Math.pow(this.logarithmBase, f[h].size));
    };
    B.prototype.calculateBreaksInPixels = function () {
      if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
        var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
        a.length &&
          (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex =
            null);
        for (
          var f = 0;
          f < a.length &&
          !(a[f].startValue > this.conversionParameters.maximum);
          f++
        )
          a[f].endValue < this.conversionParameters.minimum ||
            (p(this.scaleBreaks.firstBreakIndex) &&
              (this.scaleBreaks.firstBreakIndex = f),
            a[f].startValue >= this.conversionParameters.minimum &&
              ((a[f].startPixel = this.convertValueToPixel(a[f].startValue)),
              (this.scaleBreaks.lastBreakIndex = f)),
            a[f].endValue <= this.conversionParameters.maximum &&
              (a[f].endPixel = this.convertValueToPixel(a[f].endValue)));
      }
    };
    B.prototype.renderLabelsTicksAndTitle = function () {
      var a = this,
        f = !1,
        c = 0,
        b = 0,
        g = 1,
        h = 0;
      0 !== this.labelAngle && 360 !== this.labelAngle && (g = 1.2);
      if ("undefined" === typeof this.options.interval) {
        if ("bottom" === this._position || "top" === this._position)
          if (
            this.logarithmic &&
            !this.equidistantInterval &&
            this.labelAutoFit
          ) {
            for (
              var c = [],
                g = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2,
                d,
                p = this.viewportMaximum,
                l = this.lineCoordinates.width / Math.log(this.range),
                k = this._labels.length - 1;
              0 <= k;
              k--
            ) {
              n = this._labels[k];
              if (n.position < this.viewportMinimum) break;
              n.position > this.viewportMaximum ||
                !(
                  k === this._labels.length - 1 ||
                  d < (Math.log(p / n.position) * l) / g
                ) ||
                (c.push(n),
                (p = n.position),
                (d =
                  n.textBlock.width *
                    Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) +
                  n.textBlock.height *
                    Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))));
            }
            this._labels = c;
          } else {
            for (k = 0; k < this._labels.length; k++)
              (n = this._labels[k]),
                n.position < this.viewportMinimum ||
                  ((d =
                    n.textBlock.width *
                      Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) +
                    n.textBlock.height *
                      Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))),
                  (c += d));
            c > this.lineCoordinates.width * g && this.labelAutoFit && (f = !0);
          }
        if ("left" === this._position || "right" === this._position)
          if (
            this.logarithmic &&
            !this.equidistantInterval &&
            this.labelAutoFit
          ) {
            for (
              var c = [],
                m,
                p = this.viewportMaximum,
                l = this.lineCoordinates.height / Math.log(this.range),
                k = this._labels.length - 1;
              0 <= k;
              k--
            ) {
              n = this._labels[k];
              if (n.position < this.viewportMinimum) break;
              n.position > this.viewportMaximum ||
                !(
                  k === this._labels.length - 1 ||
                  m < Math.log(p / n.position) * l
                ) ||
                (c.push(n),
                (p = n.position),
                (m =
                  n.textBlock.height *
                    Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) +
                  n.textBlock.width *
                    Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))));
            }
            this._labels = c;
          } else {
            for (k = 0; k < this._labels.length; k++)
              (n = this._labels[k]),
                n.position < this.viewportMinimum ||
                  ((m =
                    n.textBlock.height *
                      Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) +
                    n.textBlock.width *
                      Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))),
                  (b += m));
            b > this.lineCoordinates.height * g &&
              this.labelAutoFit &&
              (f = !0);
          }
      }
      this.logarithmic &&
        !this.equidistantInterval &&
        this.labelAutoFit &&
        this._labels.sort(function (a, b) {
          return a.position - b.position;
        });
      var k = 0,
        n,
        q;
      if ("bottom" === this._position) {
        for (k = 0; k < this._labels.length; k++)
          (n = this._labels[k]),
            n.position < this.viewportMinimum ||
              n.position > this.viewportMaximum ||
              ((q = this.getPixelCoordinatesOnAxis(n.position)),
              this.tickThickness &&
                "inside" != this.tickPlacement &&
                ((this.ctx.lineWidth = this.tickThickness),
                (this.ctx.strokeStyle = this.tickColor),
                (b =
                  1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0),
                this.ctx.beginPath(),
                this.ctx.moveTo(b, q.y << 0),
                this.ctx.lineTo(b, (q.y + this.tickLength) << 0),
                this.ctx.stroke()),
              (f && 0 !== h++ % 2 && this.labelAutoFit) ||
                (0 === n.textBlock.angle
                  ? ((q.x -= n.textBlock.width / 2),
                    (q.y =
                      "inside" === this.labelPlacement
                        ? q.y -
                          (("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                            n.textBlock.height -
                            n.textBlock.fontSize / 2)
                        : q.y +
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                          n.textBlock.fontSize / 2 +
                          5))
                  : 0 > this.labelAngle
                  ? ((q.x -=
                      "inside" === this.labelPlacement
                        ? 0
                        : n.textBlock.width *
                          Math.cos((Math.PI / 180) * this.labelAngle)),
                    (q.y =
                      "inside" === this.labelPlacement
                        ? q.y -
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) -
                          (n.textBlock.height - n.textBlock.fontSize / 2) *
                            Math.cos((Math.PI / 180) * this.labelAngle)
                        : q.y +
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                          5 +
                          Math.abs(
                            n.textBlock.width *
                              Math.sin((Math.PI / 180) * this.labelAngle) -
                              (n.textBlock.fontSize / 2) *
                                Math.cos((Math.PI / 180) * this.labelAngle)
                          )))
                  : ((q.x -=
                      "inside" === this.labelPlacement
                        ? n.textBlock.width *
                          Math.cos((Math.PI / 180) * this.labelAngle)
                        : 0),
                    (q.y =
                      "inside" === this.labelPlacement
                        ? q.y -
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) -
                          n.textBlock.width *
                            Math.sin((Math.PI / 180) * this.labelAngle) -
                          (n.textBlock.height - n.textBlock.fontSize / 2) *
                            Math.cos((Math.PI / 180) * this.labelAngle)
                        : q.y +
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                          5 +
                          Math.abs(
                            (n.textBlock.fontSize / 2) *
                              Math.cos((Math.PI / 180) * this.labelAngle)
                          ))),
                (n.textBlock.x = q.x),
                (n.textBlock.y = q.y)));
        "inside" === this.tickPlacement &&
          this.chart.addEventListener(
            "dataAnimationIterationEnd",
            function () {
              for (k = 0; k < a._labels.length; k++)
                if (
                  ((n = a._labels[k]),
                  !(
                    n.position < a.viewportMinimum ||
                    n.position > a.viewportMaximum
                  ) &&
                    ((q = a.getPixelCoordinatesOnAxis(n.position)),
                    a.tickThickness))
                ) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b =
                    1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b, q.y << 0);
                  a.ctx.lineTo(b, (q.y - a.tickLength) << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            },
            this
          );
        this.title &&
          (this._titleTextBlock.measureText(),
          (this._titleTextBlock.x =
            this.lineCoordinates.x1 +
            this.lineCoordinates.width / 2 -
            this._titleTextBlock.width / 2),
          (this._titleTextBlock.y =
            this.bounds.y2 -
            this._titleTextBlock.height +
            this._titleTextBlock._lineHeight / 2 -
            1),
          (this.titleMaxWidth = this._titleTextBlock.maxWidth),
          this._titleTextBlock.render(!0));
      } else if ("top" === this._position) {
        for (k = 0; k < this._labels.length; k++)
          (n = this._labels[k]),
            n.position < this.viewportMinimum ||
              n.position > this.viewportMaximum ||
              ((q = this.getPixelCoordinatesOnAxis(n.position)),
              this.tickThickness &&
                "inside" != this.tickPlacement &&
                ((this.ctx.lineWidth = this.tickThickness),
                (this.ctx.strokeStyle = this.tickColor),
                (b =
                  1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0),
                this.ctx.beginPath(),
                this.ctx.moveTo(b, q.y << 0),
                this.ctx.lineTo(b, (q.y - this.tickLength) << 0),
                this.ctx.stroke()),
              (f && 0 !== h++ % 2 && this.labelAutoFit) ||
                (0 === n.textBlock.angle
                  ? ((q.x -= n.textBlock.width / 2),
                    (q.y =
                      "inside" === this.labelPlacement
                        ? q.y +
                          this.labelFontSize / 2 +
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                          5
                        : q.y -
                          (("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                            n.textBlock.height -
                            n.textBlock.fontSize / 2)))
                  : 0 > this.labelAngle
                  ? ((q.x -=
                      "inside" === this.labelPlacement
                        ? n.textBlock.width *
                          Math.cos((Math.PI / 180) * this.labelAngle)
                        : 0),
                    (q.y =
                      "inside" === this.labelPlacement
                        ? q.y +
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                          5 -
                          n.textBlock.width *
                            Math.sin((Math.PI / 180) * this.labelAngle) +
                          (n.textBlock.fontSize / 2) *
                            Math.cos((Math.PI / 180) * this.labelAngle)
                        : q.y -
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) -
                          2 -
                          (n.textBlock.height - n.textBlock.fontSize / 2) *
                            Math.cos((Math.PI / 180) * this.labelAngle)))
                  : ((q.x -=
                      "inside" === this.labelPlacement
                        ? 0
                        : n.textBlock.width *
                          Math.cos((Math.PI / 180) * this.labelAngle)),
                    (q.y =
                      "inside" === this.labelPlacement
                        ? q.y +
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                          5 +
                          (n.textBlock.fontSize / 2) *
                            Math.cos((Math.PI / 180) * this.labelAngle)
                        : q.y -
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) -
                          2 -
                          ((n.textBlock.height - n.textBlock.fontSize / 2) *
                            Math.cos((Math.PI / 180) * this.labelAngle) +
                            n.textBlock.width *
                              Math.sin((Math.PI / 180) * this.labelAngle)))),
                (n.textBlock.x = q.x),
                (n.textBlock.y = q.y)));
        "inside" === this.tickPlacement &&
          this.chart.addEventListener(
            "dataAnimationIterationEnd",
            function () {
              for (k = 0; k < a._labels.length; k++)
                if (
                  ((n = a._labels[k]),
                  !(
                    n.position < a.viewportMinimum ||
                    n.position > a.viewportMaximum
                  ) &&
                    ((q = a.getPixelCoordinatesOnAxis(n.position)),
                    a.tickThickness))
                ) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b =
                    1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b, q.y << 0);
                  a.ctx.lineTo(b, (q.y + a.tickLength) << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            },
            this
          );
        this.title &&
          (this._titleTextBlock.measureText(),
          (this._titleTextBlock.x =
            this.lineCoordinates.x1 +
            this.lineCoordinates.width / 2 -
            this._titleTextBlock.width / 2),
          (this._titleTextBlock.y =
            this.bounds.y1 + this._titleTextBlock._lineHeight / 2 + 1),
          (this.titleMaxWidth = this._titleTextBlock.maxWidth),
          this._titleTextBlock.render(!0));
      } else if ("left" === this._position) {
        for (k = 0; k < this._labels.length; k++)
          (n = this._labels[k]),
            n.position < this.viewportMinimum ||
              n.position > this.viewportMaximum ||
              ((q = this.getPixelCoordinatesOnAxis(n.position)),
              this.tickThickness &&
                "inside" != this.tickPlacement &&
                ((this.ctx.lineWidth = this.tickThickness),
                (this.ctx.strokeStyle = this.tickColor),
                (b =
                  1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0),
                this.ctx.beginPath(),
                this.ctx.moveTo(q.x << 0, b),
                this.ctx.lineTo((q.x - this.tickLength) << 0, b),
                this.ctx.stroke()),
              (f && 0 !== h++ % 2 && this.labelAutoFit) ||
                (0 === this.labelAngle
                  ? ((n.textBlock.y = q.y),
                    (n.textBlock.x =
                      "inside" === this.labelPlacement
                        ? q.x +
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                          5
                        : q.x -
                          n.textBlock.width *
                            Math.cos((Math.PI / 180) * this.labelAngle) -
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) -
                          5))
                  : 0 > this.labelAngle
                  ? ((n.textBlock.y =
                      "inside" === this.labelPlacement
                        ? q.y
                        : q.y -
                          n.textBlock.width *
                            Math.sin((Math.PI / 180) * this.labelAngle)),
                    (n.textBlock.x =
                      "inside" === this.labelPlacement
                        ? q.x -
                          (n.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) +
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                          5
                        : q.x -
                          n.textBlock.width *
                            Math.cos((Math.PI / 180) * this.labelAngle) +
                          (n.textBlock.height - n.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) -
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) -
                          5))
                  : ((n.textBlock.y =
                      "inside" === this.labelPlacement
                        ? q.y
                        : q.y -
                          n.textBlock.width *
                            Math.sin((Math.PI / 180) * this.labelAngle)),
                    (n.textBlock.x =
                      "inside" === this.labelPlacement
                        ? q.x +
                          (n.textBlock.height - n.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) +
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) +
                          5
                        : q.x -
                          n.textBlock.width *
                            Math.cos((Math.PI / 180) * this.labelAngle) -
                          (n.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) -
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) -
                          5))));
        "inside" === this.tickPlacement &&
          this.chart.addEventListener(
            "dataAnimationIterationEnd",
            function () {
              for (k = 0; k < a._labels.length; k++)
                if (
                  ((n = a._labels[k]),
                  !(
                    n.position < a.viewportMinimum ||
                    n.position > a.viewportMaximum
                  ) &&
                    ((q = a.getPixelCoordinatesOnAxis(n.position)),
                    a.tickThickness))
                ) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b =
                    1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(q.x << 0, b);
                  a.ctx.lineTo((q.x + a.tickLength) << 0, b);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            },
            this
          );
        this.title &&
          (this._titleTextBlock.measureText(),
          (this._titleTextBlock.x =
            this.bounds.x1 + this._titleTextBlock._lineHeight / 2),
          (this._titleTextBlock.y =
            this.lineCoordinates.height / 2 +
            this._titleTextBlock.width / 2 +
            this.lineCoordinates.y1),
          (this.titleMaxWidth = this._titleTextBlock.maxWidth),
          this._titleTextBlock.render(!0));
      } else if ("right" === this._position) {
        for (k = 0; k < this._labels.length; k++)
          (n = this._labels[k]),
            n.position < this.viewportMinimum ||
              n.position > this.viewportMaximum ||
              ((q = this.getPixelCoordinatesOnAxis(n.position)),
              this.tickThickness &&
                "inside" != this.tickPlacement &&
                ((this.ctx.lineWidth = this.tickThickness),
                (this.ctx.strokeStyle = this.tickColor),
                (b =
                  1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0),
                this.ctx.beginPath(),
                this.ctx.moveTo(q.x << 0, b),
                this.ctx.lineTo((q.x + this.tickLength) << 0, b),
                this.ctx.stroke()),
              (f && 0 !== h++ % 2 && this.labelAutoFit) ||
                (0 === this.labelAngle
                  ? ((n.textBlock.y = q.y),
                    (n.textBlock.x =
                      "inside" === this.labelPlacement
                        ? q.x -
                          n.textBlock.width -
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) -
                          5
                        : q.x +
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                          5))
                  : 0 > this.labelAngle
                  ? ((n.textBlock.y =
                      "inside" === this.labelPlacement
                        ? q.y -
                          n.textBlock.width *
                            Math.sin((Math.PI / 180) * this.labelAngle)
                        : q.y),
                    (n.textBlock.x =
                      "inside" === this.labelPlacement
                        ? q.x -
                          n.textBlock.width *
                            Math.cos((Math.PI / 180) * this.labelAngle) +
                          (n.textBlock.height - n.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) -
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) -
                          5
                        : q.x -
                          (n.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) +
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                          5))
                  : ((n.textBlock.y =
                      "inside" === this.labelPlacement
                        ? q.y -
                          n.textBlock.width *
                            Math.sin((Math.PI / 180) * this.labelAngle)
                        : q.y),
                    (n.textBlock.x =
                      "inside" === this.labelPlacement
                        ? q.x -
                          n.textBlock.width *
                            Math.cos((Math.PI / 180) * this.labelAngle) -
                          (n.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) -
                          ("inside" === this.tickPlacement
                            ? this.tickLength
                            : 0) -
                          5
                        : q.x +
                          (n.textBlock.height - n.textBlock.fontSize / 2) *
                            Math.sin((Math.PI / 180) * this.labelAngle) +
                          ("inside" === this.tickPlacement
                            ? 0
                            : this.tickLength) +
                          5))));
        "inside" === this.tickPlacement &&
          this.chart.addEventListener(
            "dataAnimationIterationEnd",
            function () {
              for (k = 0; k < a._labels.length; k++)
                if (
                  ((n = a._labels[k]),
                  !(
                    n.position < a.viewportMinimum ||
                    n.position > a.viewportMaximum
                  ) &&
                    ((q = a.getPixelCoordinatesOnAxis(n.position)),
                    a.tickThickness))
                ) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b =
                    1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(q.x << 0, b);
                  a.ctx.lineTo((q.x - a.tickLength) << 0, b);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            },
            this
          );
        this.title &&
          (this._titleTextBlock.measureText(),
          (this._titleTextBlock.x =
            this.bounds.x2 - this._titleTextBlock._lineHeight / 2),
          (this._titleTextBlock.y =
            this.lineCoordinates.height / 2 -
            this._titleTextBlock.width / 2 +
            this.lineCoordinates.y1),
          (this.titleMaxWidth = this._titleTextBlock.maxWidth),
          this._titleTextBlock.render(!0));
      }
      h = 0;
      if ("inside" === this.labelPlacement)
        this.chart.addEventListener(
          "dataAnimationIterationEnd",
          function () {
            for (k = 0; k < a._labels.length; k++)
              (n = a._labels[k]),
                n.position < a.viewportMinimum ||
                  n.position > a.viewportMaximum ||
                  (f && 0 !== h++ % 2 && a.labelAutoFit) ||
                  (a.ctx.save(),
                  a.ctx.beginPath(),
                  n.textBlock.render(!0),
                  a.ctx.restore());
          },
          this
        );
      else
        for (k = 0; k < this._labels.length; k++)
          (n = this._labels[k]),
            n.position < this.viewportMinimum ||
              n.position > this.viewportMaximum ||
              (f && 0 !== h++ % 2 && this.labelAutoFit) ||
              n.textBlock.render(!0);
    };
    B.prototype.renderInterlacedColors = function () {
      var a = this.chart.plotArea.ctx,
        f,
        c,
        b = this.chart.plotArea,
        g = 0;
      f = !0;
      if (
        ("bottom" === this._position || "top" === this._position) &&
        this.interlacedColor
      )
        for (
          a.fillStyle = this.interlacedColor, g = 0;
          g < this._labels.length;
          g++
        )
          f
            ? ((f = this.getPixelCoordinatesOnAxis(this._labels[g].position)),
              (c =
                g + 1 > this._labels.length - 1
                  ? this.getPixelCoordinatesOnAxis(this.viewportMaximum)
                  : this.getPixelCoordinatesOnAxis(
                      this._labels[g + 1].position
                    )),
              a.fillRect(
                Math.min(c.x, f.x),
                b.y1,
                Math.abs(c.x - f.x),
                Math.abs(b.y1 - b.y2)
              ),
              (f = !1))
            : (f = !0);
      else if (
        ("left" === this._position || "right" === this._position) &&
        this.interlacedColor
      )
        for (
          a.fillStyle = this.interlacedColor, g = 0;
          g < this._labels.length;
          g++
        )
          f
            ? ((c = this.getPixelCoordinatesOnAxis(this._labels[g].position)),
              (f =
                g + 1 > this._labels.length - 1
                  ? this.getPixelCoordinatesOnAxis(this.viewportMaximum)
                  : this.getPixelCoordinatesOnAxis(
                      this._labels[g + 1].position
                    )),
              a.fillRect(
                b.x1,
                Math.min(c.y, f.y),
                Math.abs(b.x1 - b.x2),
                Math.abs(f.y - c.y)
              ),
              (f = !1))
            : (f = !0);
      a.beginPath();
    };
    B.prototype.renderStripLinesOfThicknessType = function (a) {
      if (this.stripLines && 0 < this.stripLines.length && a) {
        var f = this,
          c,
          b,
          g = 0,
          h = 0,
          d = !1;
        b = !1;
        for (
          var l = [], t = [], k = !1, m, g = 0;
          g < this.stripLines.length;
          g++
        ) {
          var n = this.stripLines[g];
          n._thicknessType === a &&
            (("pixel" === a &&
              (n.value < this.viewportMinimum ||
                n.value > this.viewportMaximum ||
                p(n.value) ||
                isNaN(this.range))) ||
              ("value" === a &&
                ((n.startValue <= this.viewportMinimum &&
                  n.endValue <= this.viewportMinimum) ||
                  (n.startValue >= this.viewportMaximum &&
                    n.endValue >= this.viewportMaximum) ||
                  p(n.startValue) ||
                  p(n.endValue) ||
                  isNaN(this.range))) ||
              l.push(n));
        }
        for (g = 0; g < this._stripLineLabels.length; g++)
          if (
            ((n = this.stripLines[g]),
            (c = this._stripLineLabels[g]),
            !(
              c.position < this.viewportMinimum ||
              c.position > this.viewportMaximum ||
              isNaN(this.range)
            ))
          )
            if (
              ((b = this.getPixelCoordinatesOnAxis(c.position)),
              "outside" === c.stripLine.labelPlacement)
            ) {
              n &&
                ((this.ctx.strokeStyle = n.color),
                (this.ctx.lineWidth =
                  "pixel" === n._thicknessType
                    ? n.thickness
                    : this.tickThickness),
                p(n.opacity) ||
                  "pixel" !== n._thicknessType ||
                  ((m = n.ctx.globalAlpha), (n.ctx.globalAlpha = n.opacity)));
              if ("bottom" === this._position) {
                var q =
                  1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0;
                this.ctx.beginPath();
                this.ctx.moveTo(q, b.y << 0);
                this.ctx.lineTo(q, (b.y + this.tickLength) << 0);
                this.ctx.stroke();
                0 === this.labelAngle
                  ? ((b.x -= c.textBlock.width / 2),
                    (b.y += this.tickLength + c.textBlock.fontSize / 2 + 5))
                  : ((b.x -=
                      0 > this.labelAngle
                        ? c.textBlock.width *
                          Math.cos((Math.PI / 180) * this.labelAngle)
                        : 0),
                    (b.y +=
                      this.tickLength +
                      5 +
                      (0 > this.labelAngle
                        ? Math.abs(
                            c.textBlock.width *
                              Math.sin((Math.PI / 180) * this.labelAngle) -
                              (c.textBlock.fontSize / 2) *
                                Math.cos((Math.PI / 180) * this.labelAngle)
                          )
                        : Math.abs(
                            (c.textBlock.fontSize / 2) *
                              Math.cos((Math.PI / 180) * this.labelAngle)
                          ))));
              } else
                "top" === this._position
                  ? ((q =
                      1 === this.ctx.lineWidth % 2
                        ? (b.x << 0) + 0.5
                        : b.x << 0),
                    this.ctx.beginPath(),
                    this.ctx.moveTo(q, b.y << 0),
                    this.ctx.lineTo(q, (b.y - this.tickLength) << 0),
                    this.ctx.stroke(),
                    0 === this.labelAngle
                      ? ((b.x -= c.textBlock.width / 2),
                        (b.y -=
                          this.tickLength +
                          c.textBlock.height -
                          c.textBlock.fontSize / 2))
                      : ((b.x -=
                          0 < this.labelAngle
                            ? c.textBlock.width *
                              Math.cos((Math.PI / 180) * this.labelAngle)
                            : 0),
                        (b.y -=
                          this.tickLength +
                          2 +
                          (0 < this.labelAngle
                            ? (c.textBlock.height - c.textBlock.fontSize / 2) *
                                Math.cos((Math.PI / 180) * this.labelAngle) +
                              c.textBlock.width *
                                Math.sin((Math.PI / 180) * this.labelAngle)
                            : (c.textBlock.height - c.textBlock.fontSize / 2) *
                              Math.cos((Math.PI / 180) * this.labelAngle)))))
                  : "left" === this._position
                  ? ((q =
                      1 === this.ctx.lineWidth % 2
                        ? (b.y << 0) + 0.5
                        : b.y << 0),
                    this.ctx.beginPath(),
                    this.ctx.moveTo(b.x << 0, q),
                    this.ctx.lineTo((b.x - this.tickLength) << 0, q),
                    this.ctx.stroke(),
                    0 === this.labelAngle
                      ? (b.x =
                          b.x -
                          c.textBlock.width *
                            Math.cos((Math.PI / 180) * this.labelAngle) -
                          this.tickLength -
                          5)
                      : ((b.y -=
                          c.textBlock.width *
                          Math.sin((Math.PI / 180) * this.labelAngle)),
                        (b.x -=
                          this.tickLength +
                          5 +
                          (0 < this.labelAngle
                            ? c.textBlock.width *
                                Math.cos((Math.PI / 180) * this.labelAngle) +
                              (c.textBlock.fontSize / 2) *
                                Math.sin((Math.PI / 180) * this.labelAngle)
                            : c.textBlock.width *
                                Math.cos((Math.PI / 180) * this.labelAngle) -
                              (c.textBlock.height - c.textBlock.fontSize / 2) *
                                Math.sin((Math.PI / 180) * this.labelAngle)))))
                  : "right" === this._position &&
                    ((q =
                      1 === this.ctx.lineWidth % 2
                        ? (b.y << 0) + 0.5
                        : b.y << 0),
                    this.ctx.beginPath(),
                    this.ctx.moveTo(b.x << 0, q),
                    this.ctx.lineTo((b.x + this.tickLength) << 0, q),
                    this.ctx.stroke(),
                    (b.x =
                      0 === this.labelAngle
                        ? b.x + this.tickLength + 5
                        : this.tickLength +
                          5 +
                          (0 < this.labelAngle
                            ? b.x +
                              (c.textBlock.height - c.textBlock.fontSize / 2) *
                                Math.sin((Math.PI / 180) * this.labelAngle)
                            : b.x -
                              (c.textBlock.fontSize / 2) *
                                Math.sin((Math.PI / 180) * this.labelAngle))));
              m && (n.ctx.globalAlpha = m);
              c.textBlock.x = b.x;
              c.textBlock.y = b.y;
              t.push(c);
            } else
              n._thicknessType === a &&
                ((c.textBlock.angle = -90),
                "bottom" === this._position
                  ? ((c.textBlock.maxWidth = this.options.stripLines[g]
                      .labelMaxWidth
                      ? this.options.stripLines[g].labelMaxWidth
                      : this.chart.plotArea.height - 3),
                    c.textBlock.measureText(),
                    b.x - c.textBlock.height - n.thickness / 2 >
                    this.chart.plotArea.x1
                      ? p(n.startValue)
                        ? (b.x -=
                            c.textBlock.height -
                            c.textBlock.fontSize / 2 +
                            n.thickness / 2)
                        : (b.x -=
                            c.textBlock.height / 2 - c.textBlock.fontSize / 2)
                      : ((c.textBlock.angle = 90),
                        p(n.startValue)
                          ? (b.x +=
                              c.textBlock.height -
                              c.textBlock.fontSize / 2 +
                              n.thickness / 2)
                          : (b.x +=
                              c.textBlock.height / 2 -
                              c.textBlock.fontSize / 2)),
                    (b.y =
                      -90 === c.textBlock.angle
                        ? "near" === c.stripLine.labelAlign
                          ? this.chart.plotArea.y2 - 3
                          : "center" === c.stripLine.labelAlign
                          ? (this.chart.plotArea.y2 +
                              this.chart.plotArea.y1 +
                              c.textBlock.width) /
                            2
                          : this.chart.plotArea.y1 + c.textBlock.width + 3
                        : "near" === c.stripLine.labelAlign
                        ? this.chart.plotArea.y2 - c.textBlock.width - 3
                        : "center" === c.stripLine.labelAlign
                        ? (this.chart.plotArea.y2 +
                            this.chart.plotArea.y1 -
                            c.textBlock.width) /
                          2
                        : this.chart.plotArea.y1 + 3))
                  : "top" === this._position
                  ? ((c.textBlock.maxWidth = this.options.stripLines[g]
                      .labelMaxWidth
                      ? this.options.stripLines[g].labelMaxWidth
                      : this.chart.plotArea.height - 3),
                    c.textBlock.measureText(),
                    b.x - c.textBlock.height - n.thickness / 2 >
                    this.chart.plotArea.x1
                      ? p(n.startValue)
                        ? (b.x -=
                            c.textBlock.height -
                            c.textBlock.fontSize / 2 +
                            n.thickness / 2)
                        : (b.x -=
                            c.textBlock.height / 2 - c.textBlock.fontSize / 2)
                      : ((c.textBlock.angle = 90),
                        p(n.startValue)
                          ? (b.x +=
                              c.textBlock.height -
                              c.textBlock.fontSize / 2 +
                              n.thickness / 2)
                          : (b.x +=
                              c.textBlock.height / 2 -
                              c.textBlock.fontSize / 2)),
                    (b.y =
                      -90 === c.textBlock.angle
                        ? "near" === c.stripLine.labelAlign
                          ? this.chart.plotArea.y1 + c.textBlock.width + 3
                          : "center" === c.stripLine.labelAlign
                          ? (this.chart.plotArea.y2 +
                              this.chart.plotArea.y1 +
                              c.textBlock.width) /
                            2
                          : this.chart.plotArea.y2 - 3
                        : "near" === c.stripLine.labelAlign
                        ? this.chart.plotArea.y1 + 3
                        : "center" === c.stripLine.labelAlign
                        ? (this.chart.plotArea.y2 +
                            this.chart.plotArea.y1 -
                            c.textBlock.width) /
                          2
                        : this.chart.plotArea.y2 - c.textBlock.width - 3))
                  : "left" === this._position
                  ? ((c.textBlock.maxWidth = this.options.stripLines[g]
                      .labelMaxWidth
                      ? this.options.stripLines[g].labelMaxWidth
                      : this.chart.plotArea.width - 3),
                    (c.textBlock.angle = 0),
                    c.textBlock.measureText(),
                    b.y - c.textBlock.height - n.thickness / 2 >
                    this.chart.plotArea.y1
                      ? p(n.startValue)
                        ? (b.y -=
                            c.textBlock.height -
                            c.textBlock.fontSize / 2 +
                            n.thickness / 2)
                        : (b.y -=
                            c.textBlock.height / 2 - c.textBlock.fontSize / 2)
                      : p(n.startValue)
                      ? (b.y +=
                          c.textBlock.height -
                          c.textBlock.fontSize / 2 +
                          n.thickness / 2)
                      : (b.y +=
                          c.textBlock.height / 2 - c.textBlock.fontSize + 3),
                    (b.x =
                      "near" === c.stripLine.labelAlign
                        ? this.chart.plotArea.x1 + 3
                        : "center" === c.stripLine.labelAlign
                        ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) /
                            2 -
                          c.textBlock.width / 2
                        : this.chart.plotArea.x2 - c.textBlock.width - 3))
                  : "right" === this._position &&
                    ((c.textBlock.maxWidth = this.options.stripLines[g]
                      .labelMaxWidth
                      ? this.options.stripLines[g].labelMaxWidth
                      : this.chart.plotArea.width - 3),
                    (c.textBlock.angle = 0),
                    c.textBlock.measureText(),
                    b.y - c.textBlock.height - n.thickness / 2 >
                    this.chart.plotArea.y1
                      ? p(n.startValue)
                        ? (b.y -=
                            c.textBlock.height -
                            c.textBlock.fontSize / 2 +
                            n.thickness / 2)
                        : (b.y -=
                            c.textBlock.height / 2 - c.textBlock.fontSize / 2)
                      : p(n.startValue)
                      ? (b.y +=
                          c.textBlock.height -
                          c.textBlock.fontSize / 2 +
                          n.thickness / 2)
                      : (b.y -=
                          c.textBlock.height / 2 -
                          c.textBlock.fontSize / 2 +
                          3),
                    (b.x =
                      "near" === c.stripLine.labelAlign
                        ? this.chart.plotArea.x2 - c.textBlock.width - 3
                        : "center" === c.stripLine.labelAlign
                        ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) /
                            2 -
                          c.textBlock.width / 2
                        : this.chart.plotArea.x1 + 3)),
                (c.textBlock.x = b.x),
                (c.textBlock.y = b.y),
                t.push(c));
        if (!k) {
          b = !1;
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.rect(
            this.chart.plotArea.x1,
            this.chart.plotArea.y1,
            this.chart.plotArea.width,
            this.chart.plotArea.height
          );
          this.ctx.clip();
          for (g = 0; g < l.length; g++)
            (n = l[g]),
              n.showOnTop
                ? d ||
                  ((d = !0),
                  this.chart.addEventListener(
                    "dataAnimationIterationEnd",
                    function () {
                      this.ctx.save();
                      this.ctx.beginPath();
                      this.ctx.rect(
                        this.chart.plotArea.x1,
                        this.chart.plotArea.y1,
                        this.chart.plotArea.width,
                        this.chart.plotArea.height
                      );
                      this.ctx.clip();
                      for (h = 0; h < l.length; h++)
                        (n = l[h]), n.showOnTop && n.render();
                      this.ctx.restore();
                    },
                    n
                  ))
                : n.render();
          for (g = 0; g < t.length; g++)
            (c = t[g]),
              c.stripLine.showOnTop
                ? b ||
                  ((b = !0),
                  this.chart.addEventListener(
                    "dataAnimationIterationEnd",
                    function () {
                      for (h = 0; h < t.length; h++)
                        (c = t[h]),
                          "inside" === c.stripLine.labelPlacement &&
                            c.stripLine.showOnTop &&
                            (f.ctx.save(),
                            f.ctx.beginPath(),
                            f.ctx.rect(
                              f.chart.plotArea.x1,
                              f.chart.plotArea.y1,
                              f.chart.plotArea.width,
                              f.chart.plotArea.height
                            ),
                            f.ctx.clip(),
                            c.textBlock.render(!0),
                            f.ctx.restore());
                    },
                    c.textBlock
                  ))
                : "inside" === c.stripLine.labelPlacement &&
                  c.textBlock.render(!0);
          this.ctx.restore();
          k = !0;
        }
        if (k)
          for (b = !1, g = 0; g < t.length; g++)
            (c = t[g]),
              "outside" === c.stripLine.labelPlacement &&
                c.textBlock.render(!0);
      }
    };
    B.prototype.renderBreaksBackground = function () {
      this.chart._breaksCanvas &&
        this.scaleBreaks &&
        0 < this.scaleBreaks._appliedBreaks.length &&
        this.maskCanvas &&
        (this.chart._breaksCanvasCtx.save(),
        this.chart._breaksCanvasCtx.beginPath(),
        this.chart._breaksCanvasCtx.rect(
          this.chart.plotArea.x1,
          this.chart.plotArea.y1,
          this.chart.plotArea.width,
          this.chart.plotArea.height
        ),
        this.chart._breaksCanvasCtx.clip(),
        this.chart._breaksCanvasCtx.drawImage(
          this.maskCanvas,
          0,
          0,
          this.chart.width,
          this.chart.height
        ),
        this.chart._breaksCanvasCtx.restore());
    };
    B.prototype.createMask = function () {
      if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
        var a = this.scaleBreaks._appliedBreaks;
        t
          ? ((this.maskCanvas = va(this.chart.width, this.chart.height)),
            (this.maskCtx = this.maskCanvas.getContext("2d")))
          : ((this.maskCanvas = this.chart.plotArea.canvas),
            (this.maskCtx = this.chart.plotArea.ctx));
        this.maskCtx.save();
        this.maskCtx.beginPath();
        this.maskCtx.rect(
          this.chart.plotArea.x1,
          this.chart.plotArea.y1,
          this.chart.plotArea.width,
          this.chart.plotArea.height
        );
        this.maskCtx.clip();
        for (var f = 0; f < a.length; f++)
          a[f].endValue < this.viewportMinimum ||
            a[f].startValue > this.viewportMaximum ||
            isNaN(this.range) ||
            a[f].render(this.maskCtx);
        this.maskCtx.restore();
      }
    };
    B.prototype.renderCrosshair = function (a, f) {
      isFinite(this.minimum) &&
        isFinite(this.maximum) &&
        this.crosshair.render(a, f);
    };
    B.prototype.showCrosshair = function (a) {
      p(a) ||
        a < this.viewportMinimum ||
        a > this.viewportMaximum ||
        ("top" === this._position || "bottom" === this._position
          ? this.crosshair.render(this.convertValueToPixel(a), null, a)
          : this.crosshair.render(null, this.convertValueToPixel(a), a));
    };
    B.prototype.renderGrid = function () {
      if (this.gridThickness && 0 < this.gridThickness) {
        var a = this.chart.ctx;
        a.save();
        var f,
          c = this.chart.plotArea;
        a.lineWidth = this.gridThickness;
        a.strokeStyle = this.gridColor;
        a.setLineDash &&
          a.setLineDash(I(this.gridDashType, this.gridThickness));
        if ("bottom" === this._position || "top" === this._position)
          for (b = 0; b < this._labels.length; b++)
            this._labels[b].position < this.viewportMinimum ||
              this._labels[b].position > this.viewportMaximum ||
              this._labels[b].breaksLabelType ||
              (a.beginPath(),
              (f = this.getPixelCoordinatesOnAxis(this._labels[b].position)),
              (f = 1 === a.lineWidth % 2 ? (f.x << 0) + 0.5 : f.x << 0),
              a.moveTo(f, c.y1 << 0),
              a.lineTo(f, c.y2 << 0),
              a.stroke());
        else if ("left" === this._position || "right" === this._position)
          for (var b = 0; b < this._labels.length; b++)
            this._labels[b].position < this.viewportMinimum ||
              this._labels[b].position > this.viewportMaximum ||
              this._labels[b].breaksLabelType ||
              (a.beginPath(),
              (f = this.getPixelCoordinatesOnAxis(this._labels[b].position)),
              (f = 1 === a.lineWidth % 2 ? (f.y << 0) + 0.5 : f.y << 0),
              a.moveTo(c.x1 << 0, f),
              a.lineTo(c.x2 << 0, f),
              a.stroke());
        a.restore();
      }
    };
    B.prototype.renderAxisLine = function () {
      var a = this.chart.ctx,
        f = t ? this.chart._preRenderCtx : a,
        c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)),
        b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)),
        g,
        h;
      f.save();
      if ("bottom" === this._position || "top" === this._position) {
        if (this.lineThickness) {
          this.reversed
            ? ((g = this.lineCoordinates.x2), (h = this.lineCoordinates.x1))
            : ((g = this.lineCoordinates.x1), (h = this.lineCoordinates.x2));
          f.lineWidth = this.lineThickness;
          f.strokeStyle = this.lineColor ? this.lineColor : "black";
          f.setLineDash &&
            f.setLineDash(I(this.lineDashType, this.lineThickness));
          var d =
            1 === this.lineThickness % 2
              ? (this.lineCoordinates.y1 << 0) + 0.5
              : this.lineCoordinates.y1 << 0;
          f.beginPath();
          if (this.scaleBreaks && !p(this.scaleBreaks.firstBreakIndex))
            if (p(this.scaleBreaks.lastBreakIndex))
              g =
                this.scaleBreaks._appliedBreaks[
                  this.scaleBreaks.firstBreakIndex
                ].endPixel + b;
            else
              for (
                var l = this.scaleBreaks.firstBreakIndex;
                l <= this.scaleBreaks.lastBreakIndex;
                l++
              )
                f.moveTo(g, d),
                  f.lineTo(
                    this.scaleBreaks._appliedBreaks[l].startPixel + c,
                    d
                  ),
                  (g = this.scaleBreaks._appliedBreaks[l].endPixel + b);
          g && (f.moveTo(g, d), f.lineTo(h, d));
          f.stroke();
        }
      } else if (
        ("left" === this._position || "right" === this._position) &&
        this.lineThickness
      ) {
        this.reversed
          ? ((g = this.lineCoordinates.y1), (h = this.lineCoordinates.y2))
          : ((g = this.lineCoordinates.y2), (h = this.lineCoordinates.y1));
        f.lineWidth = this.lineThickness;
        f.strokeStyle = this.lineColor;
        f.setLineDash &&
          f.setLineDash(I(this.lineDashType, this.lineThickness));
        d =
          1 === this.lineThickness % 2
            ? (this.lineCoordinates.x1 << 0) + 0.5
            : this.lineCoordinates.x1 << 0;
        f.beginPath();
        if (this.scaleBreaks && !p(this.scaleBreaks.firstBreakIndex))
          if (p(this.scaleBreaks.lastBreakIndex))
            g =
              this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex]
                .endPixel + c;
          else
            for (
              l = this.scaleBreaks.firstBreakIndex;
              l <= this.scaleBreaks.lastBreakIndex;
              l++
            )
              f.moveTo(d, g),
                f.lineTo(d, this.scaleBreaks._appliedBreaks[l].startPixel + b),
                (g = this.scaleBreaks._appliedBreaks[l].endPixel + c);
        g && (f.moveTo(d, g), f.lineTo(d, h));
        f.stroke();
      }
      t &&
        (a.drawImage(
          this.chart._preRenderCanvas,
          0,
          0,
          this.chart.width,
          this.chart.height
        ),
        this.chart._breaksCanvasCtx &&
          this.chart._breaksCanvasCtx.drawImage(
            this.chart._preRenderCanvas,
            0,
            0,
            this.chart.width,
            this.chart.height
          ),
        f.clearRect(0, 0, this.chart.width, this.chart.height));
      f.restore();
    };
    B.prototype.getPixelCoordinatesOnAxis = function (a) {
      var f = {};
      if ("bottom" === this._position || "top" === this._position)
        (f.x = this.convertValueToPixel(a)), (f.y = this.lineCoordinates.y1);
      if ("left" === this._position || "right" === this._position)
        (f.y = this.convertValueToPixel(a)), (f.x = this.lineCoordinates.x2);
      return f;
    };
    B.prototype.convertPixelToValue = function (a) {
      if ("undefined" === typeof a) return null;
      var f = 0,
        c = 0,
        b,
        f = !0,
        g = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
        c =
          "number" === typeof a
            ? a
            : "left" === this._position || "right" === this._position
            ? a.y
            : a.x;
      if (this.logarithmic) {
        a = b = Math.pow(
          this.logarithmBase,
          (c - this.conversionParameters.reference) /
            this.conversionParameters.pixelPerUnit
        );
        if (
          (c <= this.conversionParameters.reference ===
            ("left" === this._position || "right" === this._position)) !==
          this.reversed
        )
          for (c = 0; c < g.length; c++) {
            if (!(g[c].endValue < this.conversionParameters.minimum))
              if (f)
                if (g[c].startValue < this.conversionParameters.minimum) {
                  if (
                    1 < g[c].size &&
                    this.conversionParameters.minimum *
                      Math.pow(
                        g[c].endValue / g[c].startValue,
                        Math.log(b) / Math.log(g[c].size)
                      ) <
                      g[c].endValue
                  ) {
                    a = Math.pow(
                      g[c].endValue / g[c].startValue,
                      Math.log(b) / Math.log(g[c].size)
                    );
                    break;
                  } else
                    (a *=
                      g[c].endValue /
                      this.conversionParameters.minimum /
                      Math.pow(
                        g[c].size,
                        Math.log(
                          g[c].endValue / this.conversionParameters.minimum
                        ) / Math.log(g[c].endValue / g[c].startValue)
                      )),
                      (b /= Math.pow(
                        g[c].size,
                        Math.log(
                          g[c].endValue / this.conversionParameters.minimum
                        ) / Math.log(g[c].endValue / g[c].startValue)
                      ));
                  f = !1;
                } else if (
                  b >
                  g[c].startValue / this.conversionParameters.minimum
                ) {
                  b /= g[c].startValue / this.conversionParameters.minimum;
                  if (b < g[c].size) {
                    a *=
                      Math.pow(
                        g[c].endValue / g[c].startValue,
                        1 === g[c].size ? 1 : Math.log(b) / Math.log(g[c].size)
                      ) / b;
                    break;
                  } else a *= g[c].endValue / g[c].startValue / g[c].size;
                  b /= g[c].size;
                  f = !1;
                } else break;
              else if (b > g[c].startValue / g[c - 1].endValue) {
                b /= g[c].startValue / g[c - 1].endValue;
                if (b < g[c].size) {
                  a *=
                    Math.pow(
                      g[c].endValue / g[c].startValue,
                      1 === g[c].size ? 1 : Math.log(b) / Math.log(g[c].size)
                    ) / b;
                  break;
                } else a *= g[c].endValue / g[c].startValue / g[c].size;
                b /= g[c].size;
              } else break;
          }
        else
          for (c = g.length - 1; 0 <= c; c--)
            if (!(g[c].startValue > this.conversionParameters.minimum))
              if (f)
                if (g[c].endValue > this.conversionParameters.minimum) {
                  if (
                    1 < g[c].size &&
                    this.conversionParameters.minimum *
                      Math.pow(
                        g[c].endValue / g[c].startValue,
                        Math.log(b) / Math.log(g[c].size)
                      ) >
                      g[c].startValue
                  ) {
                    a = Math.pow(
                      g[c].endValue / g[c].startValue,
                      Math.log(b) / Math.log(g[c].size)
                    );
                    break;
                  } else
                    (a *=
                      (g[c].startValue / this.conversionParameters.minimum) *
                      Math.pow(
                        g[c].size,
                        Math.log(
                          g[c].startValue / this.conversionParameters.minimum
                        ) / Math.log(g[c].endValue / g[c].startValue)
                      ) *
                      b),
                      (b *= Math.pow(
                        g[c].size,
                        Math.log(
                          this.conversionParameters.minimum / g[c].startValue
                        ) / Math.log(g[c].endValue / g[c].startValue)
                      ));
                  f = !1;
                } else if (
                  b <
                  g[c].endValue / this.conversionParameters.minimum
                ) {
                  b /= g[c].endValue / this.conversionParameters.minimum;
                  if (b > 1 / g[c].size) {
                    a *=
                      Math.pow(
                        g[c].endValue / g[c].startValue,
                        1 >= g[c].size ? 1 : Math.log(b) / Math.log(g[c].size)
                      ) * b;
                    break;
                  } else a /= g[c].endValue / g[c].startValue / g[c].size;
                  b *= g[c].size;
                  f = !1;
                } else break;
              else if (b < g[c].endValue / g[c + 1].startValue) {
                b /= g[c].endValue / g[c + 1].startValue;
                if (b > 1 / g[c].size) {
                  a *=
                    Math.pow(
                      g[c].endValue / g[c].startValue,
                      1 >= g[c].size ? 1 : Math.log(b) / Math.log(g[c].size)
                    ) * b;
                  break;
                } else a /= g[c].endValue / g[c].startValue / g[c].size;
                b *= g[c].size;
              } else break;
        f = a * this.viewportMinimum;
      } else {
        a = b =
          (c - this.conversionParameters.reference) /
          this.conversionParameters.pixelPerUnit;
        if (
          (c <= this.conversionParameters.reference ===
            ("left" === this._position || "right" === this._position)) !==
          this.reversed
        )
          for (c = 0; c < g.length; c++) {
            if (!(g[c].endValue < this.conversionParameters.minimum))
              if (f)
                if (g[c].startValue < this.conversionParameters.minimum) {
                  if (
                    g[c].size &&
                    this.conversionParameters.minimum +
                      (b * (g[c].endValue - g[c].startValue)) / g[c].size <
                      g[c].endValue
                  ) {
                    a =
                      0 >= g[c].size
                        ? 0
                        : (b * (g[c].endValue - g[c].startValue)) / g[c].size;
                    break;
                  } else
                    (a +=
                      g[c].endValue -
                      this.conversionParameters.minimum -
                      (g[c].size *
                        (g[c].endValue - this.conversionParameters.minimum)) /
                        (g[c].endValue - g[c].startValue)),
                      (b -=
                        (g[c].size *
                          (g[c].endValue - this.conversionParameters.minimum)) /
                        (g[c].endValue - g[c].startValue));
                  f = !1;
                } else if (
                  b >
                  g[c].startValue - this.conversionParameters.minimum
                ) {
                  b -= g[c].startValue - this.conversionParameters.minimum;
                  if (b < g[c].size) {
                    a +=
                      (g[c].endValue - g[c].startValue) *
                        (0 === g[c].size ? 1 : b / g[c].size) -
                      b;
                    break;
                  } else a += g[c].endValue - g[c].startValue - g[c].size;
                  b -= g[c].size;
                  f = !1;
                } else break;
              else if (b > g[c].startValue - g[c - 1].endValue) {
                b -= g[c].startValue - g[c - 1].endValue;
                if (b < g[c].size) {
                  a +=
                    (g[c].endValue - g[c].startValue) *
                      (0 === g[c].size ? 1 : b / g[c].size) -
                    b;
                  break;
                } else a += g[c].endValue - g[c].startValue - g[c].size;
                b -= g[c].size;
              } else break;
          }
        else
          for (c = g.length - 1; 0 <= c; c--)
            if (!(g[c].startValue > this.conversionParameters.minimum))
              if (f)
                if (g[c].endValue > this.conversionParameters.minimum)
                  if (
                    g[c].size &&
                    this.conversionParameters.minimum +
                      (b * (g[c].endValue - g[c].startValue)) / g[c].size >
                      g[c].startValue
                  ) {
                    a =
                      0 >= g[c].size
                        ? 0
                        : (b * (g[c].endValue - g[c].startValue)) / g[c].size;
                    break;
                  } else
                    (a +=
                      g[c].startValue -
                      this.conversionParameters.minimum +
                      (g[c].size *
                        (this.conversionParameters.minimum - g[c].startValue)) /
                        (g[c].endValue - g[c].startValue)),
                      (b +=
                        (g[c].size *
                          (this.conversionParameters.minimum -
                            g[c].startValue)) /
                        (g[c].endValue - g[c].startValue)),
                      (f = !1);
                else if (
                  b <
                  g[c].endValue - this.conversionParameters.minimum
                ) {
                  b -= g[c].endValue - this.conversionParameters.minimum;
                  if (b > -1 * g[c].size) {
                    a +=
                      (g[c].endValue - g[c].startValue) *
                        (0 === g[c].size ? 1 : b / g[c].size) +
                      b;
                    break;
                  } else a -= g[c].endValue - g[c].startValue - g[c].size;
                  b += g[c].size;
                  f = !1;
                } else break;
              else if (b < g[c].endValue - g[c + 1].startValue) {
                b -= g[c].endValue - g[c + 1].startValue;
                if (b > -1 * g[c].size) {
                  a +=
                    (g[c].endValue - g[c].startValue) *
                      (0 === g[c].size ? 1 : b / g[c].size) +
                    b;
                  break;
                } else a -= g[c].endValue - g[c].startValue - g[c].size;
                b += g[c].size;
              } else break;
        f = this.conversionParameters.minimum + a;
      }
      return f;
    };
    B.prototype.convertValueToPixel = function (a) {
      a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
      return this.logarithmic
        ? (this.conversionParameters.reference +
            (this.conversionParameters.pixelPerUnit *
              Math.log(a / this.conversionParameters.minimum)) /
              this.conversionParameters.lnLogarithmBase +
            0.5) <<
            0
        : "axisX" === this.type
        ? (this.conversionParameters.reference +
            this.conversionParameters.pixelPerUnit *
              (a - this.conversionParameters.minimum) +
            0.5) <<
          0
        : this.conversionParameters.reference +
          this.conversionParameters.pixelPerUnit *
            (a - this.conversionParameters.minimum) +
          0.5;
    };
    B.prototype.getApparentDifference = function (a, f, c, b) {
      var g = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
      if (this.logarithmic) {
        c = p(c) ? f / a : c;
        for (var h = 0; h < g.length && !(f < g[h].startValue); h++)
          a > g[h].endValue ||
            (a <= g[h].startValue && f >= g[h].endValue
              ? (c = (c / g[h].endValue) * g[h].startValue * g[h].size)
              : a >= g[h].startValue && f >= g[h].endValue
              ? (c =
                  (c / g[h].endValue) *
                  a *
                  Math.pow(
                    g[h].size,
                    Math.log(g[h].endValue / a) /
                      Math.log(g[h].endValue / g[h].startValue)
                  ))
              : a <= g[h].startValue && f <= g[h].endValue
              ? (c =
                  (c / f) *
                  g[h].startValue *
                  Math.pow(
                    g[h].size,
                    Math.log(f / g[h].startValue) /
                      Math.log(g[h].endValue / g[h].startValue)
                  ))
              : !b &&
                a > g[h].startValue &&
                f < g[h].endValue &&
                (c =
                  a *
                  Math.pow(
                    g[h].size,
                    Math.log(f / a) / Math.log(g[h].endValue / g[h].startValue)
                  )));
      } else
        for (
          c = p(c) ? Math.abs(f - a) : c, h = 0;
          h < g.length && !(f < g[h].startValue);
          h++
        )
          a > g[h].endValue ||
            (a <= g[h].startValue && f >= g[h].endValue
              ? (c = c - g[h].endValue + g[h].startValue + g[h].size)
              : a > g[h].startValue && f >= g[h].endValue
              ? (c =
                  c -
                  g[h].endValue +
                  a +
                  (g[h].size * (g[h].endValue - a)) /
                    (g[h].endValue - g[h].startValue))
              : a <= g[h].startValue && f < g[h].endValue
              ? (c =
                  c -
                  f +
                  g[h].startValue +
                  (g[h].size * (f - g[h].startValue)) /
                    (g[h].endValue - g[h].startValue))
              : !b &&
                a > g[h].startValue &&
                f < g[h].endValue &&
                (c =
                  a +
                  (g[h].size * (f - a)) / (g[h].endValue - g[h].startValue)));
      return c;
    };
    B.prototype.setViewPortRange = function (a, f) {
      this.sessionVariables.newViewportMinimum = this.viewportMinimum =
        Math.min(a, f);
      this.sessionVariables.newViewportMaximum = this.viewportMaximum =
        Math.max(a, f);
    };
    B.prototype.getXValueAt = function (a) {
      if (!a) return null;
      var f = null;
      "left" === this._position
        ? (f = this.convertPixelToValue(a.y))
        : "bottom" === this._position && (f = this.convertPixelToValue(a.x));
      return f;
    };
    B.prototype.calculateValueToPixelConversionParameters = function (a) {
      a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
      var f = { pixelPerUnit: null, minimum: null, reference: null },
        c = this.lineCoordinates.width,
        b = this.lineCoordinates.height,
        c = "bottom" === this._position || "top" === this._position ? c : b,
        b = Math.abs(this.range);
      if (this.logarithmic)
        for (
          var g = 0;
          g < a.length && !(this.viewportMaximum < a[g].startValue);
          g++
        )
          this.viewportMinimum > a[g].endValue ||
            (this.viewportMinimum >= a[g].startValue &&
            this.viewportMaximum <= a[g].endValue
              ? (c = 0)
              : this.viewportMinimum <= a[g].startValue &&
                this.viewportMaximum >= a[g].endValue
              ? ((b = (b / a[g].endValue) * a[g].startValue),
                (c =
                  0 < a[g].spacing.toString().indexOf("%")
                    ? c * (1 - parseFloat(a[g].spacing) / 100)
                    : c - Math.min(a[g].spacing, 0.1 * c)))
              : this.viewportMinimum > a[g].startValue &&
                this.viewportMaximum >= a[g].endValue
              ? ((b = (b / a[g].endValue) * this.viewportMinimum),
                (c =
                  0 < a[g].spacing.toString().indexOf("%")
                    ? c *
                      (1 -
                        ((parseFloat(a[g].spacing) / 100) *
                          Math.log(a[g].endValue / this.viewportMinimum)) /
                          Math.log(a[g].endValue / a[g].startValue))
                    : c -
                      (Math.min(a[g].spacing, 0.1 * c) *
                        Math.log(a[g].endValue / this.viewportMinimum)) /
                        Math.log(a[g].endValue / a[g].startValue)))
              : this.viewportMinimum <= a[g].startValue &&
                this.viewportMaximum < a[g].endValue &&
                ((b = (b / this.viewportMaximum) * a[g].startValue),
                (c =
                  0 < a[g].spacing.toString().indexOf("%")
                    ? c *
                      (1 -
                        ((parseFloat(a[g].spacing) / 100) *
                          Math.log(this.viewportMaximum / a[g].startValue)) /
                          Math.log(a[g].endValue / a[g].startValue))
                    : c -
                      (Math.min(a[g].spacing, 0.1 * c) *
                        Math.log(this.viewportMaximum / a[g].startValue)) /
                        Math.log(a[g].endValue / a[g].startValue))));
      else
        for (
          g = 0;
          g < a.length && !(this.viewportMaximum < a[g].startValue);
          g++
        )
          this.viewportMinimum > a[g].endValue ||
            (this.viewportMinimum >= a[g].startValue &&
            this.viewportMaximum <= a[g].endValue
              ? (c = 0)
              : this.viewportMinimum <= a[g].startValue &&
                this.viewportMaximum >= a[g].endValue
              ? ((b = b - a[g].endValue + a[g].startValue),
                (c =
                  0 < a[g].spacing.toString().indexOf("%")
                    ? c * (1 - parseFloat(a[g].spacing) / 100)
                    : c - Math.min(a[g].spacing, 0.1 * c)))
              : this.viewportMinimum > a[g].startValue &&
                this.viewportMaximum >= a[g].endValue
              ? ((b = b - a[g].endValue + this.viewportMinimum),
                (c =
                  0 < a[g].spacing.toString().indexOf("%")
                    ? c *
                      (1 -
                        ((parseFloat(a[g].spacing) / 100) *
                          (a[g].endValue - this.viewportMinimum)) /
                          (a[g].endValue - a[g].startValue))
                    : c -
                      (Math.min(a[g].spacing, 0.1 * c) *
                        (a[g].endValue - this.viewportMinimum)) /
                        (a[g].endValue - a[g].startValue)))
              : this.viewportMinimum <= a[g].startValue &&
                this.viewportMaximum < a[g].endValue &&
                ((b = b - this.viewportMaximum + a[g].startValue),
                (c =
                  0 < a[g].spacing.toString().indexOf("%")
                    ? c *
                      (1 -
                        ((parseFloat(a[g].spacing) / 100) *
                          (this.viewportMaximum - a[g].startValue)) /
                          (a[g].endValue - a[g].startValue))
                    : c -
                      (Math.min(a[g].spacing, 0.1 * c) *
                        (this.viewportMaximum - a[g].startValue)) /
                        (a[g].endValue - a[g].startValue))));
      f.minimum = this.viewportMinimum;
      f.maximum = this.viewportMaximum;
      f.range = b;
      if ("bottom" === this._position || "top" === this._position)
        this.logarithmic
          ? ((f.lnLogarithmBase = Math.log(this.logarithmBase)),
            (f.pixelPerUnit =
              ((this.reversed ? -1 : 1) * c * f.lnLogarithmBase) /
              Math.log(Math.abs(b))))
          : (f.pixelPerUnit = ((this.reversed ? -1 : 1) * c) / Math.abs(b)),
          (f.reference = this.reversed
            ? this.lineCoordinates.x2
            : this.lineCoordinates.x1);
      if ("left" === this._position || "right" === this._position)
        this.logarithmic
          ? ((f.lnLogarithmBase = Math.log(this.logarithmBase)),
            (f.pixelPerUnit =
              ((this.reversed ? 1 : -1) * c * f.lnLogarithmBase) /
              Math.log(Math.abs(b))))
          : (f.pixelPerUnit = ((this.reversed ? 1 : -1) * c) / Math.abs(b)),
          (f.reference = this.reversed
            ? this.lineCoordinates.y1
            : this.lineCoordinates.y2);
      this.conversionParameters = f;
    };
    B.prototype.calculateAxisParameters = function () {
      if (this.logarithmic) this.calculateLogarithmicAxisParameters();
      else {
        var a = this.chart.layoutManager.getFreeSpace(),
          f = !1,
          c = !1;
        "bottom" === this._position || "top" === this._position
          ? ((this.maxWidth = a.width), (this.maxHeight = a.height))
          : ((this.maxWidth = a.height), (this.maxHeight = a.width));
        var a =
            "axisX" === this.type
              ? "xySwapped" === this.chart.plotInfo.axisPlacement
                ? 62
                : 70
              : "xySwapped" === this.chart.plotInfo.axisPlacement
              ? 50
              : 40,
          b = 4;
        "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
        var a = Math.max(b, Math.floor(this.maxWidth / a)),
          g,
          h,
          d,
          b = 0;
        !p(this.options.viewportMinimum) &&
          !p(this.options.viewportMaximum) &&
          this.options.viewportMinimum >= this.options.viewportMaximum &&
          (this.viewportMinimum = this.viewportMaximum = null);
        if (
          p(this.options.viewportMinimum) &&
          !p(this.sessionVariables.newViewportMinimum) &&
          !isNaN(this.sessionVariables.newViewportMinimum)
        )
          this.viewportMinimum = this.sessionVariables.newViewportMinimum;
        else if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
          this.viewportMinimum = this.minimum;
        if (
          p(this.options.viewportMaximum) &&
          !p(this.sessionVariables.newViewportMaximum) &&
          !isNaN(this.sessionVariables.newViewportMaximum)
        )
          this.viewportMaximum = this.sessionVariables.newViewportMaximum;
        else if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
          this.viewportMaximum = this.maximum;
        if (this.scaleBreaks)
          for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
            if (
              ((!p(this.sessionVariables.newViewportMinimum) &&
                this.sessionVariables.newViewportMinimum >=
                  this.scaleBreaks._appliedBreaks[b].startValue) ||
                (!p(this.options.minimum) &&
                  this.options.minimum >=
                    this.scaleBreaks._appliedBreaks[b].startValue) ||
                (!p(this.options.viewportMinimum) &&
                  this.viewportMinimum >=
                    this.scaleBreaks._appliedBreaks[b].startValue)) &&
              ((!p(this.sessionVariables.newViewportMaximum) &&
                this.sessionVariables.newViewportMaximum <=
                  this.scaleBreaks._appliedBreaks[b].endValue) ||
                (!p(this.options.maximum) &&
                  this.options.maximum <=
                    this.scaleBreaks._appliedBreaks[b].endValue) ||
                (!p(this.options.viewportMaximum) &&
                  this.viewportMaximum <=
                    this.scaleBreaks._appliedBreaks[b].endValue))
            ) {
              this.scaleBreaks._appliedBreaks.splice(b, 1);
              break;
            }
        if ("axisX" === this.type) {
          if (this.dataSeries && 0 < this.dataSeries.length)
            for (g = 0; g < this.dataSeries.length; g++)
              "dateTime" === this.dataSeries[g].xValueType && (c = !0);
          g =
            null !== this.viewportMinimum
              ? this.viewportMinimum
              : this.dataInfo.viewPortMin;
          h =
            null !== this.viewportMaximum
              ? this.viewportMaximum
              : this.dataInfo.viewPortMax;
          0 === h - g &&
            ((b =
              "undefined" === typeof this.options.interval
                ? 0.4
                : this.options.interval),
            (h += b),
            (g -= b));
          Infinity !== this.dataInfo.minDiff
            ? (d = this.dataInfo.minDiff)
            : 1 < h - g
            ? (d = 0.5 * Math.abs(h - g))
            : ((d = 1), c && (f = !0));
        } else
          "axisY" === this.type &&
            ((g =
              null !== this.viewportMinimum
                ? this.viewportMinimum
                : this.dataInfo.viewPortMin),
            (h =
              null !== this.viewportMaximum
                ? this.viewportMaximum
                : this.dataInfo.viewPortMax),
            isFinite(g) || isFinite(h)
              ? isFinite(g)
                ? isFinite(h) || (h = g)
                : (g = h)
              : ((h =
                  "undefined" === typeof this.options.interval
                    ? -Infinity
                    : this.options.interval),
                (g =
                  "undefined" !== typeof this.options.interval ||
                  isFinite(this.dataInfo.minDiff)
                    ? 0
                    : Infinity)),
            0 === g && 0 === h
              ? ((h += 9), (g = 0))
              : 0 === h - g
              ? ((b = Math.min(Math.abs(0.01 * Math.abs(h)), 5)),
                (h += b),
                (g -= b))
              : g > h
              ? ((b = Math.min(
                  0.01 * Math.abs(this.getApparentDifference(h, g, null, !0)),
                  5
                )),
                0 <= h ? (g = h - b) : (h = isFinite(g) ? g + b : 0))
              : ((b = Math.min(
                  0.01 * Math.abs(this.getApparentDifference(g, h, null, !0)),
                  0.05
                )),
                0 !== h && (h += b),
                0 !== g && (g -= b)),
            (d =
              Infinity !== this.dataInfo.minDiff
                ? this.dataInfo.minDiff
                : 1 < h - g
                ? 0.5 * Math.abs(h - g)
                : 1),
            this.includeZero &&
              (null === this.viewportMinimum || isNaN(this.viewportMinimum)) &&
              0 < g &&
              (g = 0),
            this.includeZero &&
              (null === this.viewportMaximum || isNaN(this.viewportMaximum)) &&
              0 > h &&
              (h = 0));
        b = this.getApparentDifference(
          isNaN(this.viewportMinimum) || null === this.viewportMinimum
            ? g
            : this.viewportMinimum,
          isNaN(this.viewportMaximum) || null === this.viewportMaximum
            ? h
            : this.viewportMaximum,
          null,
          !0
        );
        if ("axisX" === this.type && c) {
          this.valueType = "dateTime";
          this.intervalType ||
            (b / 1 <= a
              ? ((this.interval = 1), (this.intervalType = "millisecond"))
              : b / 2 <= a
              ? ((this.interval = 2), (this.intervalType = "millisecond"))
              : b / 5 <= a
              ? ((this.interval = 5), (this.intervalType = "millisecond"))
              : b / 10 <= a
              ? ((this.interval = 10), (this.intervalType = "millisecond"))
              : b / 20 <= a
              ? ((this.interval = 20), (this.intervalType = "millisecond"))
              : b / 50 <= a
              ? ((this.interval = 50), (this.intervalType = "millisecond"))
              : b / 100 <= a
              ? ((this.interval = 100), (this.intervalType = "millisecond"))
              : b / 200 <= a
              ? ((this.interval = 200), (this.intervalType = "millisecond"))
              : b / 250 <= a
              ? ((this.interval = 250), (this.intervalType = "millisecond"))
              : b / 300 <= a
              ? ((this.interval = 300), (this.intervalType = "millisecond"))
              : b / 400 <= a
              ? ((this.interval = 400), (this.intervalType = "millisecond"))
              : b / 500 <= a
              ? ((this.interval = 500), (this.intervalType = "millisecond"))
              : b / (1 * M.secondDuration) <= a
              ? ((this.interval = 1), (this.intervalType = "second"))
              : b / (2 * M.secondDuration) <= a
              ? ((this.interval = 2), (this.intervalType = "second"))
              : b / (5 * M.secondDuration) <= a
              ? ((this.interval = 5), (this.intervalType = "second"))
              : b / (10 * M.secondDuration) <= a
              ? ((this.interval = 10), (this.intervalType = "second"))
              : b / (15 * M.secondDuration) <= a
              ? ((this.interval = 15), (this.intervalType = "second"))
              : b / (20 * M.secondDuration) <= a
              ? ((this.interval = 20), (this.intervalType = "second"))
              : b / (30 * M.secondDuration) <= a
              ? ((this.interval = 30), (this.intervalType = "second"))
              : b / (1 * M.minuteDuration) <= a
              ? ((this.interval = 1), (this.intervalType = "minute"))
              : b / (2 * M.minuteDuration) <= a
              ? ((this.interval = 2), (this.intervalType = "minute"))
              : b / (5 * M.minuteDuration) <= a
              ? ((this.interval = 5), (this.intervalType = "minute"))
              : b / (10 * M.minuteDuration) <= a
              ? ((this.interval = 10), (this.intervalType = "minute"))
              : b / (15 * M.minuteDuration) <= a
              ? ((this.interval = 15), (this.intervalType = "minute"))
              : b / (20 * M.minuteDuration) <= a
              ? ((this.interval = 20), (this.intervalType = "minute"))
              : b / (30 * M.minuteDuration) <= a
              ? ((this.interval = 30), (this.intervalType = "minute"))
              : b / (1 * M.hourDuration) <= a
              ? ((this.interval = 1), (this.intervalType = "hour"))
              : b / (2 * M.hourDuration) <= a
              ? ((this.interval = 2), (this.intervalType = "hour"))
              : b / (3 * M.hourDuration) <= a
              ? ((this.interval = 3), (this.intervalType = "hour"))
              : b / (6 * M.hourDuration) <= a
              ? ((this.interval = 6), (this.intervalType = "hour"))
              : b / (1 * M.dayDuration) <= a
              ? ((this.interval = 1), (this.intervalType = "day"))
              : b / (2 * M.dayDuration) <= a
              ? ((this.interval = 2), (this.intervalType = "day"))
              : b / (4 * M.dayDuration) <= a
              ? ((this.interval = 4), (this.intervalType = "day"))
              : b / (1 * M.weekDuration) <= a
              ? ((this.interval = 1), (this.intervalType = "week"))
              : b / (2 * M.weekDuration) <= a
              ? ((this.interval = 2), (this.intervalType = "week"))
              : b / (3 * M.weekDuration) <= a
              ? ((this.interval = 3), (this.intervalType = "week"))
              : b / (1 * M.monthDuration) <= a
              ? ((this.interval = 1), (this.intervalType = "month"))
              : b / (2 * M.monthDuration) <= a
              ? ((this.interval = 2), (this.intervalType = "month"))
              : b / (3 * M.monthDuration) <= a
              ? ((this.interval = 3), (this.intervalType = "month"))
              : b / (6 * M.monthDuration) <= a
              ? ((this.interval = 6), (this.intervalType = "month"))
              : ((this.interval =
                  b / (1 * M.yearDuration) <= a
                    ? 1
                    : b / (2 * M.yearDuration) <= a
                    ? 2
                    : b / (4 * M.yearDuration) <= a
                    ? 4
                    : Math.floor(
                        B.getNiceNumber(b / (a - 1), !0) / M.yearDuration
                      )),
                (this.intervalType = "year")));
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = g - d / 2;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = h + d / 2;
          f
            ? (this.autoValueFormatString = "MMM DD YYYY HH:mm")
            : "year" === this.intervalType
            ? (this.autoValueFormatString = "YYYY")
            : "month" === this.intervalType
            ? (this.autoValueFormatString = "MMM YYYY")
            : "week" === this.intervalType
            ? (this.autoValueFormatString = "MMM DD YYYY")
            : "day" === this.intervalType
            ? (this.autoValueFormatString = "MMM DD YYYY")
            : "hour" === this.intervalType
            ? (this.autoValueFormatString = "hh:mm TT")
            : "minute" === this.intervalType
            ? (this.autoValueFormatString = "hh:mm TT")
            : "second" === this.intervalType
            ? (this.autoValueFormatString = "hh:mm:ss TT")
            : "millisecond" === this.intervalType &&
              (this.autoValueFormatString = "fff'ms'");
          this.valueFormatString ||
            (this.valueFormatString = this.autoValueFormatString);
        } else {
          this.intervalType = "number";
          b = B.getNiceNumber(b, !1);
          this.interval =
            this.options && 0 < this.options.interval
              ? this.options.interval
              : B.getNiceNumber(b / (a - 1), !0);
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum =
              "axisX" === this.type
                ? g - d / 2
                : Math.floor(g / this.interval) * this.interval;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum =
              "axisX" === this.type
                ? h + d / 2
                : Math.ceil(h / this.interval) * this.interval;
          0 === this.viewportMaximum &&
            0 === this.viewportMinimum &&
            (0 === this.options.viewportMinimum
              ? (this.viewportMaximum += 10)
              : 0 === this.options.viewportMaximum &&
                (this.viewportMinimum -= 10),
            this.options &&
              "undefined" === typeof this.options.interval &&
              (this.interval = B.getNiceNumber(
                (this.viewportMaximum - this.viewportMinimum) / (a - 1),
                !0
              )));
        }
        if (null === this.minimum || null === this.maximum)
          if (
            ("axisX" === this.type
              ? ((g = null !== this.minimum ? this.minimum : this.dataInfo.min),
                (h = null !== this.maximum ? this.maximum : this.dataInfo.max),
                0 === h - g &&
                  ((b =
                    "undefined" === typeof this.options.interval
                      ? 0.4
                      : this.options.interval),
                  (h += b),
                  (g -= b)),
                (d =
                  Infinity !== this.dataInfo.minDiff
                    ? this.dataInfo.minDiff
                    : 1 < h - g
                    ? 0.5 * Math.abs(h - g)
                    : 1))
              : "axisY" === this.type &&
                ((g = null !== this.minimum ? this.minimum : this.dataInfo.min),
                (h = null !== this.maximum ? this.maximum : this.dataInfo.max),
                isFinite(g) || isFinite(h)
                  ? 0 === g && 0 === h
                    ? ((h += 9), (g = 0))
                    : 0 === h - g
                    ? ((b = Math.min(Math.abs(0.01 * Math.abs(h)), 5)),
                      (h += b),
                      (g -= b))
                    : g > h
                    ? ((b = Math.min(
                        0.01 *
                          Math.abs(this.getApparentDifference(h, g, null, !0)),
                        5
                      )),
                      0 <= h ? (g = h - b) : (h = isFinite(g) ? g + b : 0))
                    : ((b = Math.min(
                        0.01 *
                          Math.abs(this.getApparentDifference(g, h, null, !0)),
                        0.05
                      )),
                      0 !== h && (h += b),
                      0 !== g && (g -= b))
                  : ((h =
                      "undefined" === typeof this.options.interval
                        ? -Infinity
                        : this.options.interval),
                    (g =
                      "undefined" !== typeof this.options.interval ||
                      isFinite(this.dataInfo.minDiff)
                        ? 0
                        : Infinity)),
                (d =
                  Infinity !== this.dataInfo.minDiff
                    ? this.dataInfo.minDiff
                    : 1 < h - g
                    ? 0.5 * Math.abs(h - g)
                    : 1),
                this.includeZero &&
                  (null === this.minimum || isNaN(this.minimum)) &&
                  0 < g &&
                  (g = 0),
                this.includeZero &&
                  (null === this.maximum || isNaN(this.maximum)) &&
                  0 > h &&
                  (h = 0)),
            Math.abs(this.getApparentDifference(g, h, null, !0)),
            "axisX" === this.type && c)
          ) {
            this.valueType = "dateTime";
            if (null === this.minimum || isNaN(this.minimum))
              (this.minimum = g - d / 2),
                (this.minimum = Math.min(
                  this.minimum,
                  null === this.sessionVariables.viewportMinimum ||
                    isNaN(this.sessionVariables.viewportMinimum)
                    ? Infinity
                    : this.sessionVariables.viewportMinimum
                ));
            if (null === this.maximum || isNaN(this.maximum))
              (this.maximum = h + d / 2),
                (this.maximum = Math.max(
                  this.maximum,
                  null === this.sessionVariables.viewportMaximum ||
                    isNaN(this.sessionVariables.viewportMaximum)
                    ? -Infinity
                    : this.sessionVariables.viewportMaximum
                ));
          } else
            (this.intervalType = this.valueType = "number"),
              null === this.minimum &&
                ((this.minimum =
                  "axisX" === this.type
                    ? g - d / 2
                    : Math.floor(g / this.interval) * this.interval),
                (this.minimum = Math.min(
                  this.minimum,
                  null === this.sessionVariables.viewportMinimum ||
                    isNaN(this.sessionVariables.viewportMinimum)
                    ? Infinity
                    : this.sessionVariables.viewportMinimum
                ))),
              null === this.maximum &&
                ((this.maximum =
                  "axisX" === this.type
                    ? h + d / 2
                    : Math.ceil(h / this.interval) * this.interval),
                (this.maximum = Math.max(
                  this.maximum,
                  null === this.sessionVariables.viewportMaximum ||
                    isNaN(this.sessionVariables.viewportMaximum)
                    ? -Infinity
                    : this.sessionVariables.viewportMaximum
                ))),
              0 === this.maximum &&
                0 === this.minimum &&
                (0 === this.options.minimum
                  ? (this.maximum += 10)
                  : 0 === this.options.maximum && (this.minimum -= 10));
        p(this.sessionVariables.newViewportMinimum) &&
          (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
        p(this.sessionVariables.newViewportMaximum) &&
          (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
        this.range = this.viewportMaximum - this.viewportMinimum;
        this.intervalStartPosition =
          "axisX" === this.type && c
            ? this.getLabelStartPoint(
                new Date(this.viewportMinimum),
                this.intervalType,
                this.interval
              )
            : Math.floor(
                (this.viewportMinimum + 0.2 * this.interval) / this.interval
              ) * this.interval;
        this.valueFormatString ||
          (this.valueFormatString = B.generateValueFormatString(this.range, 2));
      }
    };
    B.prototype.calculateLogarithmicAxisParameters = function () {
      var a = this.chart.layoutManager.getFreeSpace(),
        f = Math.log(this.logarithmBase),
        c;
      "bottom" === this._position || "top" === this._position
        ? ((this.maxWidth = a.width), (this.maxHeight = a.height))
        : ((this.maxWidth = a.height), (this.maxHeight = a.width));
      var a =
          "axisX" === this.type
            ? 500 > this.maxWidth
              ? 7
              : Math.max(7, Math.floor(this.maxWidth / 100))
            : Math.max(Math.floor(this.maxWidth / 50), 3),
        b,
        g,
        h,
        d;
      d = 1;
      if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
        this.viewportMinimum = this.minimum;
      if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
        this.viewportMaximum = this.maximum;
      if (this.scaleBreaks)
        for (d = 0; d < this.scaleBreaks._appliedBreaks.length; d++)
          if (
            ((!p(this.sessionVariables.newViewportMinimum) &&
              this.sessionVariables.newViewportMinimum >=
                this.scaleBreaks._appliedBreaks[d].startValue) ||
              (!p(this.options.minimum) &&
                this.options.minimum >=
                  this.scaleBreaks._appliedBreaks[d].startValue) ||
              (!p(this.options.viewportMinimum) &&
                this.viewportMinimum >=
                  this.scaleBreaks._appliedBreaks[d].startValue)) &&
            ((!p(this.sessionVariables.newViewportMaximum) &&
              this.sessionVariables.newViewportMaximum <=
                this.scaleBreaks._appliedBreaks[d].endValue) ||
              (!p(this.options.maximum) &&
                this.options.maximum <=
                  this.scaleBreaks._appliedBreaks[d].endValue) ||
              (!p(this.options.viewportMaximum) &&
                this.viewportMaximum <=
                  this.scaleBreaks._appliedBreaks[d].endValue))
          ) {
            this.scaleBreaks._appliedBreaks.splice(d, 1);
            break;
          }
      "axisX" === this.type
        ? ((b =
            null !== this.viewportMinimum
              ? this.viewportMinimum
              : this.dataInfo.viewPortMin),
          (g =
            null !== this.viewportMaximum
              ? this.viewportMaximum
              : this.dataInfo.viewPortMax),
          1 === g / b &&
            ((d = Math.pow(
              this.logarithmBase,
              "undefined" === typeof this.options.interval
                ? 0.4
                : this.options.interval
            )),
            (g *= d),
            (b /= d)),
          (h =
            Infinity !== this.dataInfo.minDiff
              ? this.dataInfo.minDiff
              : g / b > this.logarithmBase
              ? (g / b) * Math.pow(this.logarithmBase, 0.5)
              : this.logarithmBase))
        : "axisY" === this.type &&
          ((b =
            null !== this.viewportMinimum
              ? this.viewportMinimum
              : this.dataInfo.viewPortMin),
          (g =
            null !== this.viewportMaximum
              ? this.viewportMaximum
              : this.dataInfo.viewPortMax),
          0 >= b && !isFinite(g)
            ? ((g =
                "undefined" === typeof this.options.interval
                  ? 0
                  : this.options.interval),
              (b = 1))
            : 0 >= b
            ? (b = g)
            : isFinite(g) || (g = b),
          1 === b && 1 === g
            ? ((g *= this.logarithmBase - 1 / this.logarithmBase), (b = 1))
            : 1 === g / b
            ? ((d = Math.min(
                g * Math.pow(this.logarithmBase, 0.01),
                Math.pow(this.logarithmBase, 5)
              )),
              (g *= d),
              (b /= d))
            : b > g
            ? ((d = Math.min(
                (b / g) * Math.pow(this.logarithmBase, 0.01),
                Math.pow(this.logarithmBase, 5)
              )),
              1 <= g ? (b = g / d) : (g = b * d))
            : ((d = Math.min(
                (g / b) * Math.pow(this.logarithmBase, 0.01),
                Math.pow(this.logarithmBase, 0.04)
              )),
              1 !== g && (g *= d),
              1 !== b && (b /= d)),
          (h =
            Infinity !== this.dataInfo.minDiff
              ? this.dataInfo.minDiff
              : g / b > this.logarithmBase
              ? (g / b) * Math.pow(this.logarithmBase, 0.5)
              : this.logarithmBase),
          this.includeZero &&
            (null === this.viewportMinimum || isNaN(this.viewportMinimum)) &&
            1 < b &&
            (b = 1),
          this.includeZero &&
            (null === this.viewportMaximum || isNaN(this.viewportMaximum)) &&
            1 > g &&
            (g = 1));
      d =
        (isNaN(this.viewportMaximum) || null === this.viewportMaximum
          ? g
          : this.viewportMaximum) /
        (isNaN(this.viewportMinimum) || null === this.viewportMinimum
          ? b
          : this.viewportMinimum);
      var l =
        (isNaN(this.viewportMaximum) || null === this.viewportMaximum
          ? g
          : this.viewportMaximum) -
        (isNaN(this.viewportMinimum) || null === this.viewportMinimum
          ? b
          : this.viewportMinimum);
      this.intervalType = "number";
      d = Math.pow(
        this.logarithmBase,
        B.getNiceNumber(Math.abs(Math.log(d) / f), !1)
      );
      this.options && 0 < this.options.interval
        ? (this.interval = this.options.interval)
        : ((this.interval = B.getNiceExponent(Math.log(d) / f / (a - 1), !0)),
          (c = B.getNiceNumber(l / (a - 1), !0)));
      if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
        this.viewportMinimum =
          "axisX" === this.type
            ? b / Math.sqrt(h)
            : Math.pow(
                this.logarithmBase,
                this.interval * Math.floor(Math.log(b) / f / this.interval)
              );
      if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
        this.viewportMaximum =
          "axisX" === this.type
            ? g * Math.sqrt(h)
            : Math.pow(
                this.logarithmBase,
                this.interval * Math.ceil(Math.log(g) / f / this.interval)
              );
      1 === this.viewportMaximum &&
        1 === this.viewportMinimum &&
        (1 === this.options.viewportMinimum
          ? (this.viewportMaximum *=
              this.logarithmBase - 1 / this.logarithmBase)
          : 1 === this.options.viewportMaximum &&
            (this.viewportMinimum /=
              this.logarithmBase - 1 / this.logarithmBase),
        this.options &&
          "undefined" === typeof this.options.interval &&
          ((this.interval = B.getNiceExponent(
            Math.ceil(Math.log(d) / f) / (a - 1)
          )),
          (c = B.getNiceNumber(
            (this.viewportMaximum - this.viewportMinimum) / (a - 1),
            !0
          ))));
      if (null === this.minimum || null === this.maximum)
        "axisX" === this.type
          ? ((b = null !== this.minimum ? this.minimum : this.dataInfo.min),
            (g = null !== this.maximum ? this.maximum : this.dataInfo.max),
            1 === g / b &&
              ((d = Math.pow(
                this.logarithmBase,
                "undefined" === typeof this.options.interval
                  ? 0.4
                  : this.options.interval
              )),
              (g *= d),
              (b /= d)),
            (h =
              Infinity !== this.dataInfo.minDiff
                ? this.dataInfo.minDiff
                : g / b > this.logarithmBase
                ? (g / b) * Math.pow(this.logarithmBase, 0.5)
                : this.logarithmBase))
          : "axisY" === this.type &&
            ((b = null !== this.minimum ? this.minimum : this.dataInfo.min),
            (g = null !== this.maximum ? this.maximum : this.dataInfo.max),
            isFinite(b) || isFinite(g)
              ? 1 === b && 1 === g
                ? ((g *= this.logarithmBase), (b /= this.logarithmBase))
                : 1 === g / b
                ? ((d = Math.pow(this.logarithmBase, this.interval)),
                  (g *= d),
                  (b /= d))
                : b > g
                ? ((d = Math.min(0.01 * (b / g), 5)),
                  1 <= g ? (b = g / d) : (g = b * d))
                : ((d = Math.min(
                    (g / b) * Math.pow(this.logarithmBase, 0.01),
                    Math.pow(this.logarithmBase, 0.04)
                  )),
                  1 !== g && (g *= d),
                  1 !== b && (b /= d))
              : ((g =
                  "undefined" === typeof this.options.interval
                    ? 0
                    : this.options.interval),
                (b = 1)),
            (h =
              Infinity !== this.dataInfo.minDiff
                ? this.dataInfo.minDiff
                : g / b > this.logarithmBase
                ? (g / b) * Math.pow(this.logarithmBase, 0.5)
                : this.logarithmBase),
            this.includeZero &&
              (null === this.minimum || isNaN(this.minimum)) &&
              1 < b &&
              (b = 1),
            this.includeZero &&
              (null === this.maximum || isNaN(this.maximum)) &&
              1 > g &&
              (g = 1)),
          (this.intervalType = "number"),
          null === this.minimum &&
            ((this.minimum =
              "axisX" === this.type
                ? b / Math.sqrt(h)
                : Math.pow(
                    this.logarithmBase,
                    this.interval * Math.floor(Math.log(b) / f / this.interval)
                  )),
            p(
              null === this.sessionVariables.viewportMinimum ||
                isNaN(this.sessionVariables.viewportMinimum)
                ? "undefined" ===
                  typeof this.sessionVariables.newViewportMinimum
                  ? Infinity
                  : this.sessionVariables.newViewportMinimum
                : this.sessionVariables.viewportMinimum
            ) ||
              (this.minimum = Math.min(
                this.minimum,
                null === this.sessionVariables.viewportMinimum ||
                  isNaN(this.sessionVariables.viewportMinimum)
                  ? "undefined" ===
                    typeof this.sessionVariables.newViewportMinimum
                    ? Infinity
                    : this.sessionVariables.newViewportMinimum
                  : this.sessionVariables.viewportMinimum
              ))),
          null === this.maximum &&
            ((this.maximum =
              "axisX" === this.type
                ? g * Math.sqrt(h)
                : Math.pow(
                    this.logarithmBase,
                    this.interval * Math.ceil(Math.log(g) / f / this.interval)
                  )),
            p(
              null === this.sessionVariables.viewportMaximum ||
                isNaN(this.sessionVariables.viewportMaximum)
                ? "undefined" ===
                  typeof this.sessionVariables.newViewportMaximum
                  ? 0
                  : this.sessionVariables.newViewportMaximum
                : this.sessionVariables.viewportMaximum
            ) ||
              (this.maximum = Math.max(
                this.maximum,
                null === this.sessionVariables.viewportMaximum ||
                  isNaN(this.sessionVariables.viewportMaximum)
                  ? "undefined" ===
                    typeof this.sessionVariables.newViewportMaximum
                    ? 0
                    : this.sessionVariables.newViewportMaximum
                  : this.sessionVariables.viewportMaximum
              ))),
          1 === this.maximum &&
            1 === this.minimum &&
            (1 === this.options.minimum
              ? (this.maximum *= this.logarithmBase - 1 / this.logarithmBase)
              : 1 === this.options.maximum &&
                (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
      this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
      this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
      this.viewportMinimum > this.viewportMaximum &&
        ((!this.options.viewportMinimum && !this.options.minimum) ||
        this.options.viewportMaximum ||
        this.options.maximum
          ? this.options.viewportMinimum ||
            this.options.minimum ||
            (!this.options.viewportMaximum && !this.options.maximum) ||
            (this.viewportMinimum = this.minimum =
              (this.options.viewportMaximum || this.options.maximum) /
              Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval)))
          : (this.viewportMaximum = this.maximum =
              this.options.viewportMinimum || this.options.minimum));
      b = Math.pow(
        this.logarithmBase,
        Math.floor(Math.log(this.viewportMinimum) / (f * this.interval) + 0.2) *
          this.interval
      );
      this.range = this.viewportMaximum / this.viewportMinimum;
      this.noTicks = a;
      if (
        !this.options.interval &&
        this.range <
          Math.pow(
            this.logarithmBase,
            8 > this.viewportMaximum || 3 > a ? 2 : 3
          )
      ) {
        for (
          f = Math.floor(this.viewportMinimum / c + 0.5) * c;
          f < this.viewportMinimum;

        )
          f += c;
        this.equidistantInterval = !1;
        this.intervalStartPosition = f;
        this.interval = c;
      } else
        this.options.interval ||
          ((c = Math.ceil(this.interval)),
          this.range > this.interval &&
            ((this.interval = c),
            (b = Math.pow(
              this.logarithmBase,
              Math.floor(
                Math.log(this.viewportMinimum) / (f * this.interval) + 0.2
              ) * this.interval
            )))),
          (this.equidistantInterval = !0),
          (this.intervalStartPosition = b);
      if (
        !this.valueFormatString &&
        ((this.valueFormatString = "#,##0.##"), 1 > this.viewportMinimum)
      ) {
        f =
          Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
        if (isNaN(f) || !isFinite(f)) f = 2;
        if (2 < f) for (d = 0; d < f - 2; d++) this.valueFormatString += "#";
      }
    };
    B.generateValueFormatString = function (a, f) {
      var c = "#,##0.",
        b = f;
      1 > a &&
        ((b += Math.floor(Math.abs(Math.log(a) / Math.LN10))),
        isNaN(b) || !isFinite(b)) &&
        (b = f);
      for (var g = 0; g < b; g++) c += "#";
      return c;
    };
    B.getNiceExponent = function (a, f) {
      var c = Math.floor(Math.log(a) / Math.LN10),
        b = a / Math.pow(10, c),
        b = 0 > c ? (1 >= b ? 1 : 5 >= b ? 5 : 10) : Math.max(Math.floor(b), 1);
      return -20 > c
        ? Number(b * Math.pow(10, c))
        : Number((b * Math.pow(10, c)).toFixed(20));
    };
    B.getNiceNumber = function (a, f) {
      var c = Math.floor(Math.log(a) / Math.LN10),
        b = a / Math.pow(10, c),
        b = f
          ? 1.5 > b
            ? 1
            : 3 > b
            ? 2
            : 7 > b
            ? 5
            : 10
          : 1 >= b
          ? 1
          : 2 >= b
          ? 2
          : 5 >= b
          ? 5
          : 10;
      return -20 > c
        ? Number(b * Math.pow(10, c))
        : Number((b * Math.pow(10, c)).toFixed(20));
    };
    B.prototype.getLabelStartPoint = function () {
      var a = M[this.intervalType + "Duration"] * this.interval,
        a = new Date(Math.floor(this.viewportMinimum / a) * a);
      if ("millisecond" !== this.intervalType)
        if ("second" === this.intervalType)
          0 < a.getMilliseconds() &&
            (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
        else if ("minute" === this.intervalType) {
          if (0 < a.getSeconds() || 0 < a.getMilliseconds())
            a.setMinutes(a.getMinutes() + 1),
              a.setSeconds(0),
              a.setMilliseconds(0);
        } else if ("hour" === this.intervalType) {
          if (
            0 < a.getMinutes() ||
            0 < a.getSeconds() ||
            0 < a.getMilliseconds()
          )
            a.setHours(a.getHours() + 1),
              a.setMinutes(0),
              a.setSeconds(0),
              a.setMilliseconds(0);
        } else if ("day" === this.intervalType) {
          if (
            0 < a.getHours() ||
            0 < a.getMinutes() ||
            0 < a.getSeconds() ||
            0 < a.getMilliseconds()
          )
            a.setDate(a.getDate() + 1),
              a.setHours(0),
              a.setMinutes(0),
              a.setSeconds(0),
              a.setMilliseconds(0);
        } else if ("week" === this.intervalType) {
          if (
            0 < a.getDay() ||
            0 < a.getHours() ||
            0 < a.getMinutes() ||
            0 < a.getSeconds() ||
            0 < a.getMilliseconds()
          )
            a.setDate(a.getDate() + (7 - a.getDay())),
              a.setHours(0),
              a.setMinutes(0),
              a.setSeconds(0),
              a.setMilliseconds(0);
        } else if ("month" === this.intervalType) {
          if (
            1 < a.getDate() ||
            0 < a.getHours() ||
            0 < a.getMinutes() ||
            0 < a.getSeconds() ||
            0 < a.getMilliseconds()
          )
            a.setMonth(a.getMonth() + 1),
              a.setDate(1),
              a.setHours(0),
              a.setMinutes(0),
              a.setSeconds(0),
              a.setMilliseconds(0);
        } else
          "year" === this.intervalType &&
            (0 < a.getMonth() ||
              1 < a.getDate() ||
              0 < a.getHours() ||
              0 < a.getMinutes() ||
              0 < a.getSeconds() ||
              0 < a.getMilliseconds()) &&
            (a.setFullYear(a.getFullYear() + 1),
            a.setMonth(0),
            a.setDate(1),
            a.setHours(0),
            a.setMinutes(0),
            a.setSeconds(0),
            a.setMilliseconds(0));
      return a;
    };
    qa(fa, Z);
    qa(ca, Z);
    ca.prototype.createUserOptions = function (a) {
      if ("undefined" !== typeof a || this.options._isPlaceholder) {
        var f = 0;
        this.parent.options._isPlaceholder && this.parent.createUserOptions();
        this.options._isPlaceholder ||
          (Ea(this.parent[this.optionsName]),
          (f = this.parent.options[this.optionsName].indexOf(this.options)));
        this.options = "undefined" === typeof a ? {} : a;
        this.parent.options[this.optionsName][f] = this.options;
      }
    };
    ca.prototype.render = function (a) {
      if (
        0 !== this.spacing ||
        (0 !== this.options.lineThickness &&
          ("undefined" !== typeof this.options.lineThickness ||
            0 !== this.parent.lineThickness))
      ) {
        var f = this.ctx,
          c = this.ctx.globalAlpha;
        this.ctx = a || this.ctx;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.rect(
          this.chart.plotArea.x1,
          this.chart.plotArea.y1,
          this.chart.plotArea.width,
          this.chart.plotArea.height
        );
        this.ctx.clip();
        var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(
            this.startValue
          ),
          g = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
        this.ctx.strokeStyle = this.lineColor;
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.globalAlpha = 1;
        V(this.id);
        var d, r, p, l, k, m;
        a = Math.max(this.spacing, 3);
        var n = Math.max(0, this.lineThickness);
        this.ctx.lineWidth = n;
        this.ctx.setLineDash && this.ctx.setLineDash(I(this.lineDashType, n));
        if (
          "bottom" === this.scaleBreaks.parent._position ||
          "top" === this.scaleBreaks.parent._position
        )
          if (
            ((b = 1 === n % 2 ? (b.x << 0) + 0.5 : b.x << 0),
            (r = 1 === n % 2 ? (g.x << 0) + 0.5 : g.x << 0),
            "top" === this.scaleBreaks.parent._position
              ? ((g = this.chart.plotArea.y1),
                (p = (this.chart.plotArea.y2 + n / 2 + 0.5) << 0))
              : ((g = this.chart.plotArea.y2),
                (p = (this.chart.plotArea.y1 - n / 2 + 0.5) << 0),
                (a *= -1)),
            (this.bounds = { x1: b - n / 2, y1: g, x2: r + n / 2, y2: p }),
            this.ctx.moveTo(b, g),
            "straight" === this.type ||
              ("top" === this.scaleBreaks.parent._position && 0 >= a) ||
              ("bottom" === this.scaleBreaks.parent._position && 0 <= a))
          )
            this.ctx.lineTo(b, p), this.ctx.lineTo(r, p), this.ctx.lineTo(r, g);
          else if ("wavy" === this.type) {
            l = b;
            k = g;
            d = 0.5;
            m = (p - k) / a / 3;
            for (var q = 0; q < m; q++)
              this.ctx.bezierCurveTo(
                l + d * a,
                k + a,
                l + d * a,
                k + 2 * a,
                l,
                k + 3 * a
              ),
                (k += 3 * a),
                (d *= -1);
            this.ctx.bezierCurveTo(
              l + d * a,
              k + a,
              l + d * a,
              k + 2 * a,
              l,
              k + 3 * a
            );
            l = r;
            d *= -1;
            this.ctx.lineTo(l, k);
            for (q = 0; q < m; q++)
              this.ctx.bezierCurveTo(
                l + d * a,
                k - a,
                l + d * a,
                k - 2 * a,
                l,
                k - 3 * a
              ),
                (k -= 3 * a),
                (d *= -1);
          } else {
            if ("zigzag" === this.type) {
              d = -1;
              k = g + a;
              l = b + a;
              m = (p - k) / a / 2;
              for (q = 0; q < m; q++)
                this.ctx.lineTo(l, k),
                  (l += 2 * d * a),
                  (k += 2 * a),
                  (d *= -1);
              this.ctx.lineTo(l, k);
              l += r - b;
              for (q = 0; q < m + 1; q++)
                this.ctx.lineTo(l, k),
                  (l += 2 * d * a),
                  (k -= 2 * a),
                  (d *= -1);
              this.ctx.lineTo(l + d * a, k + a);
            }
          }
        else if (
          "left" === this.scaleBreaks.parent._position ||
          "right" === this.scaleBreaks.parent._position
        )
          if (
            ((g = 1 === n % 2 ? (g.y << 0) + 0.5 : g.y << 0),
            (p = 1 === n % 2 ? (b.y << 0) + 0.5 : b.y << 0),
            "left" === this.scaleBreaks.parent._position
              ? ((b = this.chart.plotArea.x1),
                (r = (this.chart.plotArea.x2 + n / 2 + 0.5) << 0))
              : ((b = this.chart.plotArea.x2),
                (r = (this.chart.plotArea.x1 - n / 2 + 0.5) << 0),
                (a *= -1)),
            (this.bounds = { x1: b, y1: g - n / 2, x2: r, y2: p + n / 2 }),
            this.ctx.moveTo(b, g),
            "straight" === this.type ||
              ("left" === this.scaleBreaks.parent._position && 0 >= a) ||
              ("right" === this.scaleBreaks.parent._position && 0 <= a))
          )
            this.ctx.lineTo(r, g), this.ctx.lineTo(r, p), this.ctx.lineTo(b, p);
          else if ("wavy" === this.type) {
            l = b;
            k = g;
            d = 0.5;
            m = (r - l) / a / 3;
            for (q = 0; q < m; q++)
              this.ctx.bezierCurveTo(
                l + a,
                k + d * a,
                l + 2 * a,
                k + d * a,
                l + 3 * a,
                k
              ),
                (l += 3 * a),
                (d *= -1);
            this.ctx.bezierCurveTo(
              l + a,
              k + d * a,
              l + 2 * a,
              k + d * a,
              l + 3 * a,
              k
            );
            k = p;
            d *= -1;
            this.ctx.lineTo(l, k);
            for (q = 0; q < m; q++)
              this.ctx.bezierCurveTo(
                l - a,
                k + d * a,
                l - 2 * a,
                k + d * a,
                l - 3 * a,
                k
              ),
                (l -= 3 * a),
                (d *= -1);
          } else if ("zigzag" === this.type) {
            d = 1;
            k = g - a;
            l = b + a;
            m = (r - l) / a / 2;
            for (q = 0; q < m; q++)
              this.ctx.lineTo(l, k), (k += 2 * d * a), (l += 2 * a), (d *= -1);
            this.ctx.lineTo(l, k);
            k += p - g;
            for (q = 0; q < m + 1; q++)
              this.ctx.lineTo(l, k), (k += 2 * d * a), (l -= 2 * a), (d *= -1);
            this.ctx.lineTo(l + a, k + d * a);
          }
        0 < n && this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.globalAlpha = this.fillOpacity;
        this.ctx.globalCompositeOperation = "destination-over";
        this.ctx.fill();
        this.ctx.restore();
        this.ctx.globalAlpha = c;
        this.ctx = f;
      }
    };
    qa(P, Z);
    P.prototype.createUserOptions = function (a) {
      if ("undefined" !== typeof a || this.options._isPlaceholder) {
        var f = 0;
        this.parent.options._isPlaceholder && this.parent.createUserOptions();
        this.options._isPlaceholder ||
          (Ea(this.parent.stripLines),
          (f = this.parent.options.stripLines.indexOf(this.options)));
        this.options = "undefined" === typeof a ? {} : a;
        this.parent.options.stripLines[f] = this.options;
      }
    };
    P.prototype.render = function () {
      this.ctx.save();
      var a = this.parent.getPixelCoordinatesOnAxis(this.value),
        f = Math.abs(
          "pixel" === this._thicknessType
            ? this.thickness
            : Math.abs(
                this.parent.convertValueToPixel(this.endValue) -
                  this.parent.convertValueToPixel(this.startValue)
              )
        );
      if (0 < f) {
        var c = null === this.opacity ? 1 : this.opacity;
        this.ctx.strokeStyle = this.color;
        this.ctx.beginPath();
        var b = this.ctx.globalAlpha;
        this.ctx.globalAlpha = c;
        V(this.id);
        var g, d, r, l;
        this.ctx.lineWidth = f;
        this.ctx.setLineDash && this.ctx.setLineDash(I(this.lineDashType, f));
        if (
          "bottom" === this.parent._position ||
          "top" === this.parent._position
        )
          (g = d = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0),
            (r = this.chart.plotArea.y1),
            (l = this.chart.plotArea.y2),
            (this.bounds = { x1: g - f / 2, y1: r, x2: d + f / 2, y2: l });
        else if (
          "left" === this.parent._position ||
          "right" === this.parent._position
        )
          (r = l = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0),
            (g = this.chart.plotArea.x1),
            (d = this.chart.plotArea.x2),
            (this.bounds = { x1: g, y1: r - f / 2, x2: d, y2: l + f / 2 });
        this.ctx.moveTo(g, r);
        this.ctx.lineTo(d, l);
        this.ctx.stroke();
        this.ctx.globalAlpha = b;
      }
      this.ctx.restore();
    };
    qa(ea, Z);
    ea.prototype.showAt = function (a) {
      if (!this.enabled) return !1;
      var f = this.chart,
        c = !1;
      f.resetOverlayedCanvas();
      f.clearedOverlayedCanvas = this.parent.type;
      this.chart.renderCrosshairs(this.parent);
      if ("xySwapped" === f.plotInfo.axisPlacement)
        if ("bottom" === this.parent._position)
          for (var b = 0; b < f.axisY.length; b++)
            this.parent === f.axisY[b] &&
              (f.axisY[b]._crosshairValue =
                a >= f.axisY[b].viewportMinimum &&
                a <= f.axisY[b].viewportMaximum
                  ? a
                  : null);
        else if ("top" === this.parent._position)
          for (b = 0; b < f.axisY2.length; b++)
            this.parent === f.axisY2[b] &&
              (f.axisY2[b]._crosshairValue =
                a >= f.axisY2[b].viewportMinimum &&
                a <= f.axisY2[b].viewportMaximum
                  ? a
                  : null);
        else if ("left" === this.parent._position)
          for (b = 0; b < f.axisX.length; b++)
            this.parent === f.axisX[b] &&
              (f.axisX[b]._crosshairValue =
                a >= f.axisX[b].viewportMinimum &&
                a <= f.axisX[b].viewportMaximum
                  ? a
                  : null);
        else {
          if ("right" === this.parent._position)
            for (b = 0; b < f.axisX2.length; b++)
              this.parent === f.axisX2[b] &&
                (f.axisX2[b]._crosshairValue =
                  a >= f.axisX2[b].viewportMinimum &&
                  a <= f.axisX2[b].viewportMaximum
                    ? a
                    : null);
        }
      else if ("bottom" === this.parent._position)
        for (b = 0; b < f.axisX.length; b++)
          this.parent === f.axisX[b] &&
            (f.axisX[b]._crosshairValue =
              a >= f.axisX[b].viewportMinimum && a <= f.axisX[b].viewportMaximum
                ? a
                : null);
      else if ("top" === this.parent._position)
        for (b = 0; b < f.axisX2.length; b++)
          this.parent === f.axisX2[b] &&
            (f.axisX2[b]._crosshairValue =
              a >= f.axisX2[b].viewportMinimum &&
              a <= f.axisX2[b].viewportMaximum
                ? a
                : null);
      else if ("left" === this.parent._position)
        for (b = 0; b < f.axisY.length; b++)
          this.parent === f.axisY[b] &&
            (f.axisY[b]._crosshairValue =
              a >= f.axisY[b].viewportMinimum && a <= f.axisY[b].viewportMaximum
                ? a
                : null);
      else if ("right" === this.parent._position)
        for (b = 0; b < f.axisY2.length; b++)
          this.parent === f.axisY2[b] &&
            (f.axisY2[b]._crosshairValue =
              a >= f.axisY2[b].viewportMinimum &&
              a <= f.axisY2[b].viewportMaximum
                ? a
                : null);
      for (b = 0; b < f.axisX.length; b++)
        (a = f.axisX[b]._crosshairValue),
          f.axisX[b].crosshair &&
            f.axisX[b].crosshair.enabled &&
            (!p(a) &&
            a >= f.axisX[b].viewportMinimum &&
            a <= f.axisX[b].viewportMaximum
              ? (f.axisX[b].showCrosshair(a),
                (f.axisX[b].sessionVariables.crosshairValue = f.axisX[
                  b
                ].crosshair._updatedValue =
                  a),
                this === f.axisX[b].crosshair && (c = !0))
              : void 0 !== a &&
                (f.axisX[b].sessionVariables.crosshairValue = f.axisX[
                  b
                ].crosshair._updatedValue =
                  null));
      for (b = 0; b < f.axisX2.length; b++)
        (a = f.axisX2[b]._crosshairValue),
          f.axisX2[b].crosshair &&
            f.axisX2[b].crosshair.enabled &&
            (!p(a) &&
            a >= f.axisX2[b].viewportMinimum &&
            a <= f.axisX2[b].viewportMaximum
              ? (f.axisX2[b].showCrosshair(a),
                (f.axisX2[b].sessionVariables.crosshairValue = f.axisX2[
                  b
                ].crosshair._updatedValue =
                  a),
                this === f.axisX2[b].crosshair && (c = !0))
              : void 0 !== a &&
                (f.axisX2[b].sessionVariables.crosshairValue = f.axisX2[
                  b
                ].crosshair._updatedValue =
                  null));
      for (b = 0; b < f.axisY.length; b++)
        (a = f.axisY[b]._crosshairValue),
          f.axisY[b].crosshair &&
            f.axisY[b].crosshair.enabled &&
            (!p(a) &&
            a >= f.axisY[b].viewportMinimum &&
            a <= f.axisY[b].viewportMaximum
              ? (f.axisY[b].showCrosshair(a),
                (f.axisY[b].sessionVariables.crosshairValue = f.axisY[
                  b
                ].crosshair._updatedValue =
                  a),
                this === f.axisY[b].crosshair && (c = !0))
              : void 0 !== a &&
                (f.axisY[b].sessionVariables.crosshairValue = f.axisY[
                  b
                ].crosshair._updatedValue =
                  null));
      for (b = 0; b < f.axisY2.length; b++)
        (a = f.axisY2[b]._crosshairValue),
          f.axisY2[b].crosshair &&
            f.axisY2[b].crosshair.enabled &&
            (!p(a) &&
            a >= f.axisY2[b].viewportMinimum &&
            a <= f.axisY2[b].viewportMaximum
              ? (f.axisY2[b].showCrosshair(a),
                (f.axisY2[b].sessionVariables.crosshairValue = f.axisY2[
                  b
                ].crosshair._updatedValue =
                  a),
                this === f.axisY2[b].crosshair && (c = !0))
              : void 0 !== a &&
                (f.axisY2[b].sessionVariables.crosshairValue = f.axisY2[
                  b
                ].crosshair._updatedValue =
                  null));
      this.chart.toolTip &&
        this.chart.toolTip._entries &&
        this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
      f.sessionVariables.crosshairShownByPixel = !1;
      return c;
    };
    ea.prototype.hide = function () {
      this.chart.resetOverlayedCanvas();
      this.chart.renderCrosshairs(this.parent);
      this._hidden = !0;
    };
    ea.prototype.render = function (a, f, c) {
      var b,
        g,
        d,
        l,
        t = null,
        u = null,
        k = null,
        m = "";
      this.valueFormatString ||
        ("dateTime" === this.parent.valueType
          ? (this.valueFormatString = this.parent.valueFormatString)
          : ((k = 0),
            (k =
              "xySwapped" === this.chart.plotInfo.axisPlacement
                ? 50 < this.parent.range
                  ? 0
                  : 500 < this.chart.width && 25 > this.parent.range
                  ? 2
                  : Math.floor(
                      Math.abs(Math.log(this.parent.range) / Math.LN10)
                    ) +
                    (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0)
                : 50 < this.parent.range
                ? 0
                : Math.floor(
                    Math.abs(Math.log(this.parent.range) / Math.LN10)
                  ) +
                  (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0)),
            (this.valueFormatString = B.generateValueFormatString(
              this.parent.range,
              k
            ))));
      var n = null === this.opacity ? 1 : this.opacity,
        q = Math.abs(
          "pixel" === this._thicknessType
            ? this.thickness
            : this.parent.conversionParameters.pixelPerUnit * this.thickness
        ),
        e = this.chart.overlaidCanvasCtx,
        A = e.globalAlpha;
      e.beginPath();
      e.strokeStyle = this.color;
      e.lineWidth = q;
      e.save();
      this.labelFontSize = Math.abs(
        p(this.options.labelFontSize)
          ? this.parent.labelFontSize
          : this.labelFontSize
      );
      this.labelMaxWidth = p(this.options.labelMaxWidth)
        ? 0.3 * this.chart.width
        : this.labelMaxWidth;
      this.labelMaxHeight =
        p(this.options.labelWrap) || this.labelWrap
          ? 0.3 * this.chart.height
          : 2 * this.labelFontSize;
      0 < q && e.setLineDash && e.setLineDash(I(this.lineDashType, q));
      k = new ka(e, {
        x: 0,
        y: 0,
        padding: { top: 2, right: 3, bottom: 2, left: 4 },
        backgroundColor: this.labelBackgroundColor,
        borderColor: this.labelBorderColor,
        borderThickness: this.labelBorderThickness,
        cornerRadius: this.labelCornerRadius,
        maxWidth: this.labelMaxWidth,
        maxHeight: this.labelMaxHeight,
        angle: this.labelAngle,
        text: m,
        textAlign: this.labelTextAlign,
        fontSize: this.labelFontSize,
        fontFamily: this.labelFontFamily,
        fontWeight: this.labelFontWeight,
        fontColor: this.labelFontColor,
        fontStyle: this.labelFontStyle,
        textBaseline: "middle",
      });
      if (this.snapToDataPoint) {
        var w = 0,
          m = [];
        if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
          var x = null;
          if (
            "bottom" === this.parent._position ||
            "top" === this.parent._position
          )
            w = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: f });
          else if (
            "left" === this.parent._position ||
            "right" === this.parent._position
          )
            w = this.parent.convertPixelToValue({ y: f });
          for (var s = 0; s < this.parent.dataSeries.length; s++)
            (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
              0 <= x.index &&
              ((x.dataSeries = this.parent.dataSeries[s]),
              null !== x.dataPoint.y && x.dataSeries.visible && m.push(x));
          x = null;
          if (0 === m.length) return;
          m.sort(function (a, b) {
            return a.distance - b.distance;
          });
          var z = (x = 0);
          yPercent = cumulativeY = 0;
          for (var w = Infinity, v, s = 0; s < m.length; s++) {
            if (
              "rangeBar" === m[s].dataSeries.type ||
              "error" === m[s].dataSeries.type
            ) {
              if (m[s].dataPoint.y)
                for (var F = 0; F < m[s].dataPoint.y.length; F++)
                  (z = Math.abs(
                    a - this.parent.convertValueToPixel(m[s].dataPoint.y[F])
                  )),
                    z <= w && ((w = z), (x = s));
            } else
              "stackedBar" === m[s].dataSeries.type
                ? ((cumulativeY =
                    m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY),
                  (z = Math.abs(
                    a - this.parent.convertValueToPixel(cumulativeY)
                  )),
                  z <= w && ((w = z), (x = s)))
                : "stackedBar100" === m[s].dataSeries.type
                ? ((z = m[0].dataPoint.x.getTime
                    ? m[0].dataPoint.x.getTime()
                    : m[0].dataPoint.x),
                  p(v) &&
                    (v = Math.abs(
                      a -
                        this.parent.convertValueToPixel(
                          100 *
                            (m[0].dataSeries.dataPointEOs[m[0].index]
                              .cumulativeY /
                              m[0].dataSeries.plotUnit.dataPointYSums[z])
                        )
                    )),
                  (cumulativeY =
                    m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY),
                  (z = m[s].dataPoint.x.getTime
                    ? m[s].dataPoint.x.getTime()
                    : m[s].dataPoint.x),
                  (yPercent =
                    100 *
                    (cumulativeY / m[s].dataSeries.plotUnit.dataPointYSums[z])),
                  (z = Math.abs(a - this.parent.convertValueToPixel(yPercent))),
                  z <= v && ((v = z), (x = s)))
                : ((z = Math.abs(
                    a - this.parent.convertValueToPixel(m[s].dataPoint.y)
                  )),
                  z <= w && ((w = z), (x = s)));
            p(v) || (w = Math.min(w, v));
          }
          v = m[x];
          s = 0;
          if (
            "bottom" === this.parent._position ||
            "top" === this.parent._position
          ) {
            if (
              "rangeBar" === v.dataSeries.type ||
              "error" === v.dataSeries.type
            ) {
              w = Math.abs(
                a - this.parent.convertValueToPixel(v.dataPoint.y[0])
              );
              for (m = 0; m < v.dataPoint.y.length; m++)
                (z = Math.abs(
                  a - this.parent.convertValueToPixel(v.dataPoint.y[m])
                )),
                  z < w && ((w = z), (s = m));
              t =
                1 === e.lineWidth % 2
                  ? (this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0) +
                    0.5
                  : this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0;
              this.value = v.dataPoint.y[s];
              k.text = this.labelFormatter
                ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: v.dataPoint.y[s],
                  })
                : p(this.options.label)
                ? ga(
                    p(c) ? v.dataPoint.y[s] : c,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  )
                : this.label;
            } else
              "stackedBar" === v.dataSeries.type
                ? ((w = Math.abs(
                    a - this.parent.convertValueToPixel(m[0].dataPoint.y)
                  )),
                  (cumulativeY =
                    v.dataSeries.dataPointEOs[v.index].cumulativeY),
                  (t =
                    1 === e.lineWidth % 2
                      ? (this.parent.convertValueToPixel(cumulativeY) << 0) +
                        0.5
                      : this.parent.convertValueToPixel(cumulativeY) << 0),
                  (this.value = cumulativeY),
                  (k.text = this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: cumulativeY,
                      })
                    : p(this.options.label)
                    ? ga(
                        p(c) ? cumulativeY : c,
                        this.valueFormatString,
                        this.chart._cultureInfo
                      )
                    : this.label))
                : "stackedBar100" === v.dataSeries.type
                ? ((w = Math.abs(
                    a - this.parent.convertValueToPixel(m[0].dataPoint.y)
                  )),
                  (cumulativeY =
                    v.dataSeries.dataPointEOs[v.index].cumulativeY),
                  (z = v.dataPoint.x.getTime
                    ? v.dataPoint.x.getTime()
                    : v.dataPoint.x),
                  (yPercent =
                    100 *
                    (cumulativeY / v.dataSeries.plotUnit.dataPointYSums[z])),
                  (t =
                    1 === e.lineWidth % 2
                      ? (this.parent.convertValueToPixel(yPercent) << 0) + 0.5
                      : this.parent.convertValueToPixel(yPercent) << 0),
                  (this.value = yPercent),
                  (k.text = this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: yPercent,
                      })
                    : p(this.options.label)
                    ? ga(
                        p(c) ? yPercent : c,
                        this.valueFormatString,
                        this.chart._cultureInfo
                      )
                    : this.label))
                : ((t =
                    1 === e.lineWidth % 2
                      ? (this.parent.convertValueToPixel(v.dataPoint.y) << 0) +
                        0.5
                      : this.parent.convertValueToPixel(v.dataPoint.y) << 0),
                  (this.value = v.dataPoint.y),
                  (k.text = this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: v.dataPoint.y,
                      })
                    : p(this.options.label)
                    ? ga(
                        p(c) ? v.dataPoint.y : c,
                        this.valueFormatString,
                        this.chart._cultureInfo
                      )
                    : this.label));
            b = g = t;
            d = this.chart.plotArea.y1;
            l = this.chart.plotArea.y2;
            this.bounds = { x1: b - q / 2, y1: d, x2: g + q / 2, y2: l };
            k.x = b - k.measureText().width / 2;
            k.x + k.width > this.chart.bounds.x2
              ? (k.x = this.chart.bounds.x2 - k.width)
              : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
            k.y =
              this.parent.lineCoordinates.y2 +
              ("top" === this.parent._position
                ? -k.height + this.parent.tickLength
                : k.fontSize / 2) +
              2;
            k.y + k.height > this.chart.bounds.y2
              ? (k.y = this.chart.bounds.y2 - k.height)
              : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1);
          } else if (
            "left" === this.parent._position ||
            "right" === this.parent._position
          ) {
            d =
              l =
              u =
                1 === e.lineWidth % 2
                  ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5
                  : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
            b = this.chart.plotArea.x1;
            g = this.chart.plotArea.x2;
            this.bounds = { x1: b, y1: d - q / 2, x2: g, y2: l + q / 2 };
            s = !1;
            if (this.parent.labels)
              for (
                w = Math.ceil(this.parent.interval), m = 0;
                m < this.parent.viewportMaximum;
                m += w
              )
                if (this.parent.labels[m]) s = !0;
                else {
                  s = !1;
                  break;
                }
            if (s) {
              if ("axisX" === this.parent.type)
                for (
                  w = this.parent.convertPixelToValue({ y: f }),
                    x = null,
                    s = 0;
                  s < this.parent.dataSeries.length;
                  s++
                )
                  (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
                    0 <= x.index &&
                    (k.text = this.labelFormatter
                      ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: v.dataPoint.x,
                        })
                      : p(this.options.label)
                      ? x.dataPoint.label
                      : this.label);
            } else
              k.text =
                "dateTime" !== this.parent.valueType || this.parent.logarithmic
                  ? this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: v.dataPoint.x,
                      })
                    : p(this.options.label)
                    ? ga(
                        v.dataPoint.x,
                        this.valueFormatString,
                        this.chart._cultureInfo
                      )
                    : this.label
                  : this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: v.dataPoint.x,
                    })
                  : p(this.options.label)
                  ? Da(
                      v.dataPoint.x,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label;
            this.value = v.dataPoint.x;
            k.y = l + k.fontSize / 2 - k.measureText().height / 2 + 2;
            k.y - k.fontSize / 2 < this.chart.bounds.y1
              ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
              : k.y + k.measureText().height - k.fontSize / 2 >
                  this.chart.bounds.y2 &&
                (k.y =
                  this.chart.bounds.y2 -
                  k.measureText().height +
                  k.fontSize / 2);
            "left" === this.parent._position
              ? (k.x = this.parent.lineCoordinates.x2 - k.measureText().width)
              : "right" === this.parent._position &&
                (k.x = this.parent.lineCoordinates.x2);
          }
        } else if (
          "bottom" === this.parent._position ||
          "top" === this.parent._position
        ) {
          w = this.parent.convertPixelToValue({ x: a });
          for (s = 0; s < this.parent.dataSeries.length; s++)
            (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
              0 <= x.index &&
              ((x.dataSeries = this.parent.dataSeries[s]),
              null !== x.dataPoint.y && x.dataSeries.visible && m.push(x));
          if (0 === m.length) return;
          m.sort(function (a, b) {
            return a.distance - b.distance;
          });
          v = m[0];
          b =
            g =
            t =
              1 === e.lineWidth % 2
                ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5
                : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
          d = this.chart.plotArea.y1;
          l = this.chart.plotArea.y2;
          this.bounds = { x1: b - q / 2, y1: d, x2: g + q / 2, y2: l };
          s = !1;
          if (this.parent.labels)
            for (
              w = Math.ceil(this.parent.interval), m = 0;
              m < this.parent.viewportMaximum;
              m += w
            )
              if (this.parent.labels[m]) s = !0;
              else {
                s = !1;
                break;
              }
          if (s) {
            if ("axisX" === this.parent.type)
              for (
                w = this.parent.convertPixelToValue({ x: a }), x = null, s = 0;
                s < this.parent.dataSeries.length;
                s++
              )
                (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
                  0 <= x.index &&
                  (k.text = this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: v.dataPoint.x,
                      })
                    : p(this.options.label)
                    ? x.dataPoint.label
                    : this.label);
          } else
            k.text =
              "dateTime" !== this.parent.valueType || this.parent.logarithmic
                ? this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: v.dataPoint.x,
                    })
                  : p(this.options.label)
                  ? ga(
                      v.dataPoint.x,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label
                : this.labelFormatter
                ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: v.dataPoint.x,
                  })
                : p(this.options.label)
                ? Da(
                    v.dataPoint.x,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  )
                : this.label;
          this.value = v.dataPoint.x;
          k.x = b - k.measureText().width / 2;
          k.x + k.width > this.chart.bounds.x2 &&
            (k.x = this.chart.bounds.x2 - k.width);
          k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
          "bottom" === this.parent._position
            ? (k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2)
            : "top" === this.parent._position &&
              (k.y =
                this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
        } else if (
          "left" === this.parent._position ||
          "right" === this.parent._position
        ) {
          !p(this.parent.dataSeries) &&
            0 < this.parent.dataSeries.length &&
            (w = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: a }));
          for (s = 0; s < this.parent.dataSeries.length; s++)
            (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
              0 <= x.index &&
              ((x.dataSeries = this.parent.dataSeries[s]),
              null !== x.dataPoint.y && x.dataSeries.visible && m.push(x));
          if (0 === m.length) return;
          m.sort(function (a, b) {
            return a.distance - b.distance;
          });
          z = x = 0;
          w = Infinity;
          for (s = 0; s < m.length; s++) {
            if (
              "rangeColumn" === m[s].dataSeries.type ||
              "rangeArea" === m[s].dataSeries.type ||
              "error" === m[s].dataSeries.type ||
              "rangeSplineArea" === m[s].dataSeries.type ||
              "candlestick" === m[s].dataSeries.type ||
              "ohlc" === m[s].dataSeries.type ||
              "boxAndWhisker" === m[s].dataSeries.type
            ) {
              if (m[s].dataPoint.y)
                for (F = 0; F < m[s].dataPoint.y.length; F++)
                  (z = Math.abs(
                    f - this.parent.convertValueToPixel(m[s].dataPoint.y[F])
                  )),
                    z <= w && ((w = z), (x = s));
            } else
              "stackedColumn" === m[s].dataSeries.type
                ? ((b = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY),
                  (z = Math.abs(f - this.parent.convertValueToPixel(b))),
                  z <= w && ((w = z), (x = s)))
                : "stackedArea" === m[s].dataSeries.type
                ? ((b = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY),
                  (z = Math.abs(f - this.parent.convertValueToPixel(b))),
                  z <= w && ((w = z), (x = s)))
                : "stackedColumn100" === m[s].dataSeries.type ||
                  "stackedArea100" === m[s].dataSeries.type
                ? ((z = m[0].dataPoint.x.getTime
                    ? m[0].dataPoint.x.getTime()
                    : m[0].dataPoint.x),
                  p(v) &&
                    (v = Math.abs(
                      f -
                        this.parent.convertValueToPixel(
                          100 *
                            (m[0].dataSeries.dataPointEOs[m[0].index]
                              .cumulativeY /
                              m[0].dataSeries.plotUnit.dataPointYSums[z])
                        )
                    )),
                  "stackedColumn100" === m[s].dataSeries.type
                    ? ((u =
                        m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY),
                      (z = m[s].dataPoint.x.getTime
                        ? m[s].dataPoint.x.getTime()
                        : m[s].dataPoint.x),
                      (b =
                        100 * (u / m[s].dataSeries.plotUnit.dataPointYSums[z])),
                      (z = Math.abs(f - this.parent.convertValueToPixel(b))),
                      z <= v && ((v = z), (x = s)))
                    : "stackedArea100" === m[s].dataSeries.type &&
                      ((u =
                        m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY),
                      (z = m[s].dataPoint.x.getTime
                        ? m[s].dataPoint.x.getTime()
                        : m[s].dataPoint.x),
                      (b =
                        100 * (u / m[s].dataSeries.plotUnit.dataPointYSums[z])),
                      (z = Math.abs(f - this.parent.convertValueToPixel(b))),
                      z <= v && ((v = z), (x = s))))
                : "waterfall" === m[s].dataSeries.type
                ? ((z = Math.abs(
                    f -
                      this.parent.convertValueToPixel(
                        m[s].dataSeries.dataPointEOs[m[s].index].cumulativeSum
                      )
                  )),
                  z <= w && ((v = w = z), (x = s)))
                : ((z = Math.abs(
                    f - this.parent.convertValueToPixel(m[s].dataPoint.y)
                  )),
                  z <= w && ((w = z), (x = s)));
            p(v) || (w = Math.min(w, v));
          }
          v = m[x];
          s = 0;
          if (
            "rangeColumn" === v.dataSeries.type ||
            "rangeArea" === v.dataSeries.type ||
            "error" === v.dataSeries.type ||
            "rangeSplineArea" === v.dataSeries.type ||
            "candlestick" === v.dataSeries.type ||
            "ohlc" === v.dataSeries.type ||
            "boxAndWhisker" === v.dataSeries.type
          ) {
            w = Math.abs(f - this.parent.convertValueToPixel(v.dataPoint.y[0]));
            for (m = 0; m < v.dataPoint.y.length; m++)
              (z = Math.abs(
                f - this.parent.convertValueToPixel(v.dataPoint.y[m])
              )),
                z < w && ((w = z), (s = m));
            u =
              1 === e.lineWidth % 2
                ? (this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0) + 0.5
                : this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0;
            k.text = this.labelFormatter
              ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: v.dataPoint.y[s],
                })
              : p(this.options.label)
              ? ga(
                  p(c) ? v.dataPoint.y[s] : c,
                  this.valueFormatString,
                  this.chart._cultureInfo
                )
              : this.label;
            this.value = v.dataPoint.y[s];
          } else
            "stackedColumn" === v.dataSeries.type
              ? ((b = v.dataSeries.dataPointEOs[v.index].cumulativeY),
                (u =
                  1 === e.lineWidth % 2
                    ? (this.parent.convertValueToPixel(b) << 0) + 0.5
                    : this.parent.convertValueToPixel(b) << 0),
                (k.text = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: b,
                    })
                  : p(this.options.label)
                  ? ga(
                      p(c) ? b : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label),
                (this.value = b))
              : "stackedArea" === v.dataSeries.type
              ? ((b = v.dataSeries.dataPointEOs[v.index].cumulativeY),
                (u =
                  1 === e.lineWidth % 2
                    ? (this.parent.convertValueToPixel(b) << 0) + 0.5
                    : this.parent.convertValueToPixel(b) << 0),
                (k.text = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: b,
                    })
                  : p(this.options.label)
                  ? ga(
                      p(c) ? b : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label),
                (this.value = b))
              : "stackedColumn100" === v.dataSeries.type
              ? ((u = v.dataSeries.dataPointEOs[v.index].cumulativeY),
                (z = v.dataPoint.x.getTime
                  ? v.dataPoint.x.getTime()
                  : v.dataPoint.x),
                (b = 100 * (u / v.dataSeries.plotUnit.dataPointYSums[z])),
                (u =
                  1 === e.lineWidth % 2
                    ? (this.parent.convertValueToPixel(b) << 0) + 0.5
                    : this.parent.convertValueToPixel(b) << 0),
                (k.text = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: b,
                    })
                  : p(this.options.label)
                  ? ga(
                      p(c) ? b : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label),
                (this.value = b))
              : "stackedArea100" === v.dataSeries.type
              ? ((u = v.dataSeries.dataPointEOs[v.index].cumulativeY),
                (z = v.dataPoint.x.getTime
                  ? v.dataPoint.x.getTime()
                  : v.dataPoint.x),
                (b = 100 * (u / v.dataSeries.plotUnit.dataPointYSums[z])),
                (u =
                  1 === e.lineWidth % 2
                    ? (this.parent.convertValueToPixel(b) << 0) + 0.5
                    : this.parent.convertValueToPixel(b) << 0),
                (k.text = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: b,
                    })
                  : p(this.options.label)
                  ? ga(
                      p(c) ? b : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label),
                (this.value = b))
              : "waterfall" === v.dataSeries.type
              ? ((u =
                  1 === e.lineWidth % 2
                    ? (this.parent.convertValueToPixel(
                        v.dataSeries.dataPointEOs[v.index].cumulativeSum
                      ) <<
                        0) +
                      0.5
                    : this.parent.convertValueToPixel(
                        v.dataSeries.dataPointEOs[v.index].cumulativeSum
                      ) << 0),
                (k.text = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: v.dataSeries.dataPointEOs[v.index].cumulativeSum,
                    })
                  : p(this.options.label)
                  ? ga(
                      p(c)
                        ? v.dataSeries.dataPointEOs[v.index].cumulativeSum
                        : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label),
                (this.value = v.dataSeries.dataPointEOs[v.index].cumulativeSum))
              : ((u =
                  1 === e.lineWidth % 2
                    ? (p(a)
                        ? f
                        : this.parent.convertValueToPixel(v.dataPoint.y) << 0) +
                      0.5
                    : p(a)
                    ? f
                    : this.parent.convertValueToPixel(v.dataPoint.y) << 0),
                (k.text = this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: p(c) ? v.dataPoint.y : c,
                    })
                  : p(this.options.label)
                  ? ga(
                      p(c) ? v.dataPoint.y : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label),
                (this.value = v.dataPoint.y));
          d = l = u;
          b = this.chart.plotArea.x1;
          g = this.chart.plotArea.x2;
          this.bounds = { x1: b, y1: d - q / 2, x2: g, y2: l + q / 2 };
          k.y = l + k.fontSize / 2 - k.measureText().height / 2 + 2;
          k.y - k.fontSize / 2 < this.chart.bounds.y1
            ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
            : k.y + k.measureText().height - k.fontSize / 2 >
                this.chart.bounds.y2 &&
              (k.y =
                this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
          "left" === this.parent._position
            ? (k.x = this.parent.lineCoordinates.x2 - k.measureText().width)
            : "right" === this.parent._position &&
              (k.x = this.parent.lineCoordinates.x2);
        }
        m = null;
        e.globalAlpha = n;
        if (
          "bottom" === this.parent._position ||
          "top" === this.parent._position
        )
          "top" === this.parent._position &&
            k.y - k.fontSize / 2 < this.chart.bounds.y1 &&
            (k.y = this.chart.bounds.y1 + k.fontSize / 2),
            "bottom" === this.parent._position &&
              this.parent.lineCoordinates.y2 -
                k.fontSize / 2 +
                k.measureText().height >
                this.chart.bounds.y2 &&
              (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2),
            this.value >=
              Math.min(
                this.parent.viewportMinimum,
                this.parent.viewportMaximum
              ) &&
              this.value <=
                Math.max(
                  this.parent.viewportMinimum,
                  this.parent.viewportMaximum
                ) &&
              0 < q &&
              (e.moveTo(b, d), e.lineTo(g, l), e.stroke(), (this._hidden = !1));
        if (
          "left" === this.parent._position ||
          "right" === this.parent._position
        )
          "left" === this.parent._position &&
            k.x < this.chart.bounds.x1 &&
            (k.x = this.chart.bounds.x1),
            "right" === this.parent._position &&
              k.x + k.measureText().width > this.chart.bounds.x2 &&
              (k.x = this.chart.bounds.x2 - k.measureText().width),
            this.value >=
              Math.min(
                this.parent.viewportMinimum,
                this.parent.viewportMaximum
              ) &&
              this.value <=
                Math.max(
                  this.parent.viewportMinimum,
                  this.parent.viewportMaximum
                ) &&
              0 < q &&
              (e.moveTo(b, d), e.lineTo(g, l), e.stroke(), (this._hidden = !1));
      } else {
        if (
          "bottom" === this.parent._position ||
          "top" === this.parent._position
        )
          (b = g = t = 1 === e.lineWidth % 2 ? (a << 0) + 0.5 : a << 0),
            (d = this.chart.plotArea.y1),
            (l = this.chart.plotArea.y2),
            (this.bounds = { x1: b - q / 2, y1: d, x2: g + q / 2, y2: l });
        else if (
          "left" === this.parent._position ||
          "right" === this.parent._position
        )
          (d = l = u = 1 === e.lineWidth % 2 ? (f << 0) + 0.5 : f << 0),
            (b = this.chart.plotArea.x1),
            (g = this.chart.plotArea.x2),
            (this.bounds = { x1: b, y1: d - q / 2, x2: g, y2: l + q / 2 });
        if ("xySwapped" === this.chart.plotInfo.axisPlacement)
          if (
            "left" === this.parent._position ||
            "right" === this.parent._position
          ) {
            s = !1;
            if (this.parent.labels)
              for (
                w = Math.ceil(this.parent.interval), m = 0;
                m < this.parent.viewportMaximum;
                m += w
              )
                if (this.parent.labels[m]) s = !0;
                else {
                  s = !1;
                  break;
                }
            if (s) {
              if ("axisX" === this.parent.type)
                for (
                  w = this.parent.convertPixelToValue({ y: f }),
                    x = null,
                    s = 0;
                  s < this.parent.dataSeries.length;
                  s++
                )
                  (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
                    0 <= x.index &&
                    (k.text = this.labelFormatter
                      ? this.labelFormatter({
                          chart: this.chart,
                          axis: this.parent.options,
                          crosshair: this.options,
                          value: p(c) ? this.parent.convertPixelToValue(a) : c,
                        })
                      : p(this.options.label)
                      ? x.dataPoint.label
                      : this.label);
            } else
              k.text =
                "dateTime" !== this.parent.valueType || this.parent.logarithmic
                  ? this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: p(c) ? this.parent.convertPixelToValue(f) : c,
                      })
                    : p(this.options.label)
                    ? ga(
                        p(c) ? this.parent.convertPixelToValue(f) : c,
                        this.valueFormatString,
                        this.chart._cultureInfo
                      )
                    : this.label
                  : this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: p(c) ? this.parent.convertPixelToValue(f) : c,
                    })
                  : p(this.options.label)
                  ? Da(
                      p(c) ? this.parent.convertPixelToValue(f) : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label;
            k.y = f + k.fontSize / 2 - k.measureText().height / 2 + 2;
            k.y - k.fontSize / 2 < this.chart.bounds.y1
              ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
              : k.y + k.measureText().height - k.fontSize / 2 >
                  this.chart.bounds.y2 &&
                (k.y =
                  this.chart.bounds.y2 -
                  k.measureText().height +
                  k.fontSize / 2);
            "left" === this.parent._position
              ? (k.x = this.parent.lineCoordinates.x1 - k.measureText().width)
              : "right" === this.parent._position &&
                (k.x = this.parent.lineCoordinates.x2);
          } else {
            if (
              "bottom" === this.parent._position ||
              "top" === this.parent._position
            )
              (k.text = this.labelFormatter
                ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: p(c) ? this.parent.convertPixelToValue(a) : c,
                  })
                : p(this.options.label)
                ? ga(
                    p(c) ? this.parent.convertPixelToValue(a) : c,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  )
                : this.label),
                (k.x = b - k.measureText().width / 2),
                k.x + k.width > this.chart.bounds.x2 &&
                  (k.x = this.chart.bounds.x2 - k.width),
                k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1),
                "bottom" === this.parent._position
                  ? (k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2)
                  : "top" === this.parent._position &&
                    (k.y =
                      this.parent.lineCoordinates.y1 -
                      k.height +
                      k.fontSize / 2 +
                      2);
          }
        else if (
          "bottom" === this.parent._position ||
          "top" === this.parent._position
        ) {
          s = !1;
          m = "";
          if (this.parent.labels)
            for (
              w = Math.ceil(this.parent.interval), m = 0;
              m < this.parent.viewportMaximum;
              m += w
            )
              if (this.parent.labels[m]) s = !0;
              else {
                s = !1;
                break;
              }
          if (s) {
            if ("axisX" === this.parent.type)
              for (
                w = this.parent.convertPixelToValue({ x: a }), x = null, s = 0;
                s < this.parent.dataSeries.length;
                s++
              )
                (x = this.parent.dataSeries[s].getDataPointAtX(w, !0)) &&
                  0 <= x.index &&
                  (k.text = this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: p(c) ? this.parent.convertPixelToValue(a) : c,
                      })
                    : p(this.options.label)
                    ? p(c)
                      ? x.dataPoint.label
                      : c
                    : this.label);
          } else
            k.text =
              "dateTime" !== this.parent.valueType || this.parent.logarithmic
                ? this.labelFormatter
                  ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: p(c)
                        ? 0 < this.parent.dataSeries.length
                          ? this.parent.convertPixelToValue(a)
                          : ""
                        : c,
                    })
                  : p(this.options.label)
                  ? ga(
                      p(c) ? this.parent.convertPixelToValue(a) : c,
                      this.valueFormatString,
                      this.chart._cultureInfo
                    )
                  : this.label
                : this.labelFormatter
                ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: p(c) ? this.parent.convertPixelToValue(a) : c,
                  })
                : p(this.options.label)
                ? Da(
                    p(c) ? this.parent.convertPixelToValue(a) : c,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  )
                : this.label;
          k.x = b - k.measureText().width / 2;
          k.x + k.width > this.chart.bounds.x2 &&
            (k.x = this.chart.bounds.x2 - k.width);
          k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
          "bottom" === this.parent._position
            ? (k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2)
            : "top" === this.parent._position &&
              (k.y =
                this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
        } else if (
          "left" === this.parent._position ||
          "right" === this.parent._position
        )
          (k.text = this.labelFormatter
            ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: p(c) ? this.parent.convertPixelToValue(f) : c,
              })
            : p(this.options.label)
            ? ga(
                p(c) ? this.parent.convertPixelToValue(f) : c,
                this.valueFormatString,
                this.chart._cultureInfo
              )
            : this.label),
            (k.y = f + k.fontSize / 2 - k.measureText().height / 2 + 2),
            k.y - k.fontSize / 2 < this.chart.bounds.y1
              ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
              : k.y + k.measureText().height - k.fontSize / 2 >
                  this.chart.bounds.y2 &&
                (k.y =
                  this.chart.bounds.y2 -
                  k.measureText().height +
                  k.fontSize / 2),
            "left" === this.parent._position
              ? (k.x = this.parent.lineCoordinates.x2 - k.measureText().width)
              : "right" === this.parent._position &&
                (k.x = this.parent.lineCoordinates.x2);
        "left" === this.parent._position && k.x < this.chart.bounds.x1
          ? (k.x = this.chart.bounds.x1)
          : "right" === this.parent._position &&
            k.x + k.measureText().width > this.chart.bounds.x2
          ? (k.x = this.chart.bounds.x2 - k.measureText().width)
          : "top" === this.parent._position &&
            k.y - k.fontSize / 2 < this.chart.bounds.y1
          ? (k.y = this.chart.bounds.y1 + k.fontSize / 2)
          : "bottom" === this.parent._position &&
            this.parent.lineCoordinates.y2 -
              k.fontSize / 2 +
              k.measureText().height >
              this.chart.bounds.y2 &&
            (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
        e.globalAlpha = n;
        0 < q &&
          (e.moveTo(b, d), e.lineTo(g, l), e.stroke(), (this._hidden = !1));
        this.value =
          "bottom" === this.parent._position || "top" === this.parent._position
            ? this.parent.convertPixelToValue(a)
            : this.parent.convertPixelToValue(f);
      }
      if ("bottom" === this.parent._position || "top" === this.parent._position)
        this.parent.sessionVariables.crosshairValue = this._updatedValue =
          this.parent.convertPixelToValue(t);
      if ("left" === this.parent._position || "right" === this.parent._position)
        this.parent.sessionVariables.crosshairValue = this._updatedValue =
          this.parent.convertPixelToValue(u);
      this._textBlock = k;
      this._label = c;
      p(c) || this.renderLabel();
      e.restore();
      e.globalAlpha = A;
    };
    ea.prototype.renderLabel = function () {
      this.value >=
        Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) &&
        this.value <=
          Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) &&
        (p(this._textBlock) ||
          p(this._textBlock.text) ||
          !(
            "number" === typeof this._textBlock.text.valueOf() ||
            0 < this._textBlock.text.length
          ) ||
          this._hidden ||
          this._textBlock.render(!0),
        p(this._label) &&
          this.dispatchEvent(
            "updated",
            {
              chart: this.chart,
              crosshair: this.options,
              axis: this.parent,
              value: this.value,
            },
            this.parent
          ));
    };
    qa(oa, Z);
    oa.prototype._updateOptions = function () {
      this.updateOption("enabled");
      this.updateOption("shared");
      this.updateOption("animationEnabled");
      this.updateOption("content");
      this.updateOption("contentFormatter");
      this.updateOption("reversed");
      this.updateOption("backgroundColor");
      this.updateOption("borderColor");
      this.updateOption("borderThickness");
      this.updateOption("cornerRadius");
      this.updateOption("fontSize");
      this.updateOption("fontColor");
      this.updateOption("fontFamily");
      this.updateOption("fontWeight");
      this.updateOption("fontStyle");
    };
    oa.prototype._initialize = function () {
      this.updateOption("updated");
      this.updateOption("hidden");
      if (this.enabled) {
        this.container = document.createElement("div");
        this.container.setAttribute("class", "canvasjs-chart-tooltip");
        this.container.style.position = "absolute";
        this.container.style.height = "auto";
        this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
        this.container.style.zIndex = "1000";
        this.container.style.pointerEvents = "none";
        this.container.style.display = "none";
        var a = document.createElement("div");
        a.style.width = "auto";
        a.style.height = "auto";
        a.style.minWidth = "50px";
        a.style.lineHeight = "normal";
        a.style.margin = "0px 0px 0px 0px";
        a.style.padding = "5px";
        a.style.fontFamily = "Calibri, Arial, Georgia, serif";
        a.style.fontWeight = "normal";
        a.style.fontStyle = t ? "italic" : "normal";
        a.style.fontSize = "14px";
        a.style.color = "#000000";
        a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
        a.style.textAlign = "left";
        a.style.border = "2px solid gray";
        a.style.background = t ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
        a.style.textIndent = "0px";
        a.style.whiteSpace = "nowrap";
        a.style.borderRadius = "5px";
        a.style.MozUserSelect = "none";
        a.style.WebkitUserSelect = "none";
        a.style.msUserSelect = "none";
        a.style.userSelect = "none";
        t ||
          ((a.style.filter = "alpha(opacity = 90)"),
          (a.style.filter =
            "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')"));
        a.innerText = "Sample Tooltip";
        this.container.appendChild(a);
        this.contentDiv = this.container.firstChild;
        this.container.style.borderRadius = this.contentDiv.style.borderRadius;
        this.chart._canvasJSContainer.appendChild(this.container);
      }
    };
    oa.prototype.mouseMoveHandler = function (a, f) {
      (this._lastUpdated && 4 > new Date().getTime() - this._lastUpdated) ||
        ((this._lastUpdated = new Date().getTime()),
        this.chart.resetOverlayedCanvas(),
        this._updateToolTip(a, f),
        this.enabled &&
          this._updatedEventParameters &&
          !isNaN(this._prevX) &&
          !isNaN(this._prevY) &&
          this.container &&
          this.container.style &&
          this.dispatchEvent(
            "none" === this.container.style.display ? "hidden" : "updated",
            this._updatedEventParameters,
            this
          ));
    };
    oa.prototype._updateToolTip = function (a, f, c) {
      c = "undefined" === typeof c ? !0 : c;
      this._updateOptions();
      this.container || this._initialize();
      this.enabled || this.hide();
      if (!this.chart.disableToolTip) {
        if ("undefined" === typeof a || "undefined" === typeof f) {
          if (isNaN(this._prevX) || isNaN(this._prevY)) return;
          a = this._prevX;
          f = this._prevY;
        } else (this._prevX = a), (this._prevY = f);
        var b = null,
          g = null,
          d = [],
          l = 0;
        if (
          this.shared &&
          this.enabled &&
          "none" !== this.chart.plotInfo.axisPlacement
        ) {
          var u = [];
          if (this.chart.axisX)
            for (var A = 0; A < this.chart.axisX.length; A++) {
              for (
                var l =
                    "xySwapped" === this.chart.plotInfo.axisPlacement
                      ? this.chart.axisX[A].convertPixelToValue({ y: f })
                      : this.chart.axisX[A].convertPixelToValue({ x: a }),
                  k = null,
                  b = 0;
                b < this.chart.axisX[A].dataSeries.length;
                b++
              )
                (k = this.chart.axisX[A].dataSeries[b].getDataPointAtX(l, c)) &&
                  0 <= k.index &&
                  ((k.dataSeries = this.chart.axisX[A].dataSeries[b]),
                  null !== k.dataPoint.y && k.dataSeries.visible && u.push(k));
              k = null;
            }
          if (this.chart.axisX2)
            for (A = 0; A < this.chart.axisX2.length; A++) {
              l =
                "xySwapped" === this.chart.plotInfo.axisPlacement
                  ? this.chart.axisX2[A].convertPixelToValue({ y: f })
                  : this.chart.axisX2[A].convertPixelToValue({ x: a });
              k = null;
              for (b = 0; b < this.chart.axisX2[A].dataSeries.length; b++)
                (k = this.chart.axisX2[A].dataSeries[b].getDataPointAtX(
                  l,
                  c
                )) &&
                  0 <= k.index &&
                  ((k.dataSeries = this.chart.axisX2[A].dataSeries[b]),
                  null !== k.dataPoint.y && k.dataSeries.visible && u.push(k));
              k = null;
            }
          if (0 === u.length) return;
          u.sort(function (a, b) {
            return a.dataSeries.axisX.logarithmic ||
              b.dataSeries.axisX.logarithmic
              ? a.distance - b.distance
              : a.distance / a.dataSeries.axisX.range -
                  b.distance / b.dataSeries.axisX.range;
          });
          c = u[0];
          for (b = 0; b < u.length; b++)
            u[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() &&
              d.push(u[b]);
          u = null;
        } else {
          if ((b = this.chart.getDataPointAtXY(a, f, c)))
            (this.currentDataPointIndex = b.dataPointIndex),
              (this.currentSeriesIndex = b.dataSeries.index);
          else if (t)
            if (
              ((b = bb(a, f, this.chart._eventManager.ghostCtx)),
              0 < b &&
                "undefined" !== typeof this.chart._eventManager.objectMap[b])
            ) {
              b = this.chart._eventManager.objectMap[b];
              if ("legendItem" === b.objectType) return;
              this.currentSeriesIndex = b.dataSeriesIndex;
              this.currentDataPointIndex =
                0 <= b.dataPointIndex ? b.dataPointIndex : -1;
            } else this.currentDataPointIndex = -1;
          else this.currentDataPointIndex = -1;
          if (0 <= this.currentSeriesIndex) {
            g = this.chart.data[this.currentSeriesIndex];
            k = {};
            if (0 <= this.currentDataPointIndex)
              (b = g.dataPoints[this.currentDataPointIndex]),
                (k.dataSeries = g),
                (k.dataPoint = b),
                (k.index = this.currentDataPointIndex),
                (k.distance = Math.abs(b.x - l)),
                "waterfall" === g.type &&
                  ((k.cumulativeSumYStartValue =
                    g.dataPointEOs[
                      this.currentDataPointIndex
                    ].cumulativeSumYStartValue),
                  (k.cumulativeSum =
                    g.dataPointEOs[this.currentDataPointIndex].cumulativeSum));
            else if (
              this.enabled &&
              g &&
              ("line" === g.type ||
                "stepLine" === g.type ||
                "spline" === g.type ||
                "area" === g.type ||
                "stepArea" === g.type ||
                "splineArea" === g.type ||
                "stackedArea" === g.type ||
                "stackedArea100" === g.type ||
                "rangeArea" === g.type ||
                "rangeSplineArea" === g.type ||
                "candlestick" === g.type ||
                "ohlc" === g.type ||
                "boxAndWhisker" === g.type)
            )
              (l = g.axisX.convertPixelToValue({ x: a })),
                (k = g.getDataPointAtX(l, c)),
                p(k) ||
                  ((k.dataSeries = g),
                  (this.currentDataPointIndex = k.index),
                  (b = k.dataPoint));
            else {
              "toolTip" === this.chart.clearedOverlayedCanvas &&
                (this.chart.resetOverlayedCanvas(),
                (this.chart.clearedOverlayedCanvas = null),
                this.container && (this.container.style.display = "none"));
              return;
            }
            if (!p(k) && !p(k.dataPoint) && !p(k.dataPoint.y))
              if (k.dataSeries.axisY)
                if (0 < k.dataPoint.y.length) {
                  for (b = c = 0; b < k.dataPoint.y.length; b++)
                    k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum
                      ? c--
                      : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum &&
                        c++;
                  c < k.dataPoint.y.length &&
                    c > -k.dataPoint.y.length &&
                    d.push(k);
                } else
                  "column" === g.type || "bar" === g.type
                    ? 0 > k.dataPoint.y
                      ? 0 > k.dataSeries.axisY.viewportMinimum &&
                        k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y &&
                        d.push(k)
                      : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y &&
                        0 <= k.dataSeries.axisY.viewportMaximum &&
                        d.push(k)
                    : "bubble" === g.type
                    ? ((c =
                        this.chart._eventManager.objectMap[
                          g.dataPointIds[k.index]
                        ].size / 2),
                      k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - c &&
                        k.dataPoint.y <=
                          k.dataSeries.axisY.viewportMaximum + c &&
                        d.push(k))
                    : "waterfall" === g.type
                    ? ((c = 0),
                      k.cumulativeSumYStartValue <
                      k.dataSeries.axisY.viewportMinimum
                        ? c--
                        : k.cumulativeSumYStartValue >
                            k.dataSeries.axisY.viewportMaximum && c++,
                      k.cumulativeSum < k.dataSeries.axisY.viewportMinimum
                        ? c--
                        : k.cumulativeSum >
                            k.dataSeries.axisY.viewportMaximum && c++,
                      2 > c && -2 < c && d.push(k))
                    : (0 <= k.dataSeries.type.indexOf("100") ||
                        "stackedColumn" === g.type ||
                        "stackedBar" === g.type ||
                        "stackedArea" === g.type ||
                        (k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum &&
                          k.dataPoint.y <=
                            k.dataSeries.axisY.viewportMaximum)) &&
                      d.push(k);
              else d.push(k);
          }
        }
        if (0 < d.length) {
          if ((this.highlightObjects(d), this.enabled)) {
            c = "";
            c = this.getToolTipInnerHTML({ entries: d });
            if (null !== c) {
              this.contentDiv.innerHTML = c;
              if (
                this.isToolTipDefinedInData &&
                p(this.options.content) &&
                p(this.options.contentFormatter)
              )
                for (
                  l = this.contentDiv.getElementsByTagName("span"), b = 0;
                  b < l.length;
                  b++
                )
                  l[b] && (l[b].style.color = l[b].getAttribute("data-color"));
              l = !1;
              "none" === this.container.style.display &&
                ((l = !0), (this.container.style.display = "block"));
              try {
                (this.contentDiv.style.background = this.backgroundColor
                  ? this.backgroundColor
                  : t
                  ? "rgba(255,255,255,.9)"
                  : "rgb(255,255,255)"),
                  (this.borderColor =
                    "waterfall" === d[0].dataSeries.type
                      ? (this.contentDiv.style.borderRightColor =
                          this.contentDiv.style.borderLeftColor =
                          this.contentDiv.style.borderColor =
                            this.options.borderColor
                              ? this.options.borderColor
                              : d[0].dataPoint.color
                              ? d[0].dataPoint.color
                              : 0 < d[0].dataPoint.y
                              ? d[0].dataSeries.risingColor
                              : d[0].dataSeries.fallingColor)
                      : "error" === d[0].dataSeries.type
                      ? (this.contentDiv.style.borderRightColor =
                          this.contentDiv.style.borderLeftColor =
                          this.contentDiv.style.borderColor =
                            this.options.borderColor
                              ? this.options.borderColor
                              : d[0].dataSeries.color
                              ? d[0].dataSeries.color
                              : d[0].dataSeries._colorSet[
                                  g.index % d[0].dataSeries._colorSet.length
                                ])
                      : (this.contentDiv.style.borderRightColor =
                          this.contentDiv.style.borderLeftColor =
                          this.contentDiv.style.borderColor =
                            this.options.borderColor
                              ? this.options.borderColor
                              : d[0].dataPoint.color
                              ? d[0].dataPoint.color
                              : d[0].dataSeries.color
                              ? d[0].dataSeries.color
                              : d[0].dataSeries._colorSet[
                                  d[0].index % d[0].dataSeries._colorSet.length
                                ])),
                  (this.contentDiv.style.borderWidth =
                    this.borderThickness || 0 === this.borderThickness
                      ? this.borderThickness + "px"
                      : "2px"),
                  (this.contentDiv.style.borderRadius =
                    this.cornerRadius || 0 === this.cornerRadius
                      ? this.cornerRadius + "px"
                      : "5px"),
                  (this.container.style.borderRadius =
                    this.contentDiv.style.borderRadius),
                  (this.contentDiv.style.fontSize =
                    this.fontSize || 0 === this.fontSize
                      ? this.fontSize + "px"
                      : "14px"),
                  (this.contentDiv.style.color = this.fontColor
                    ? this.fontColor
                    : "#000000"),
                  (this.contentDiv.style.fontFamily = this.fontFamily
                    ? this.fontFamily
                    : "Calibri, Arial, Georgia, serif;"),
                  (this.contentDiv.style.fontWeight = this.fontWeight
                    ? this.fontWeight
                    : "normal"),
                  (this.contentDiv.style.fontStyle = this.fontStyle
                    ? this.fontStyle
                    : t
                    ? "italic"
                    : "normal");
              } catch (m) {}
              "pie" === d[0].dataSeries.type ||
              "doughnut" === d[0].dataSeries.type ||
              "funnel" === d[0].dataSeries.type ||
              "pyramid" === d[0].dataSeries.type ||
              "bar" === d[0].dataSeries.type ||
              "rangeBar" === d[0].dataSeries.type ||
              "stackedBar" === d[0].dataSeries.type ||
              "stackedBar100" === d[0].dataSeries.type
                ? (a = a - 10 - this.container.clientWidth)
                : ((a =
                    (d[0].dataSeries.axisX.convertValueToPixel(
                      d[0].dataPoint.x
                    ) -
                      this.container.clientWidth) <<
                    0),
                  (a -= 10));
              0 > a && (a = Math.max(0, a + this.container.clientWidth + 20));
              a + this.container.clientWidth >
                Math.max(this.chart.container.clientWidth, this.chart.width) &&
                (a = Math.max(
                  0,
                  Math.max(this.chart.container.clientWidth, this.chart.width) -
                    this.container.clientWidth
                ));
              f =
                1 !== d.length ||
                this.shared ||
                ("line" !== d[0].dataSeries.type &&
                  "stepLine" !== d[0].dataSeries.type &&
                  "spline" !== d[0].dataSeries.type &&
                  "area" !== d[0].dataSeries.type &&
                  "stepArea" !== d[0].dataSeries.type &&
                  "splineArea" !== d[0].dataSeries.type)
                  ? "bar" === d[0].dataSeries.type ||
                    "rangeBar" === d[0].dataSeries.type ||
                    "stackedBar" === d[0].dataSeries.type ||
                    "stackedBar100" === d[0].dataSeries.type
                    ? d[0].dataSeries.axisX.convertValueToPixel(
                        d[0].dataPoint.x
                      )
                    : f
                  : d[0].dataSeries.axisY.convertValueToPixel(d[0].dataPoint.y);
              f = -f + 10;
              0 < f + this.container.clientHeight + 5 &&
                (f -= f + this.container.clientHeight + 5 - 0);
              this.fixMozTransitionDelay(a, f);
              !this.animationEnabled || l
                ? this.disableAnimation()
                : (this.enableAnimation(),
                  (this.container.style.MozTransition =
                    this.mozContainerTransition));
              this.positionLeft = a;
              this.positionBottom = f;
              this.container.style.left = a + "px";
              this.container.style.bottom = f + "px";
            } else
              this.hide(!1),
                this.enabled &&
                  this.dispatchEvent(
                    "hidden",
                    { chart: this.chart, toolTip: this },
                    this
                  );
            f = [];
            for (b = 0; b < d.length; b++)
              f.push({
                xValue: d[b].dataPoint.x,
                dataPoint: d[b].dataPoint,
                dataSeries: d[b].dataSeries,
                dataPointIndex: d[b].index,
                dataSeriesIndex: d[b].dataSeries._index,
              });
            this._updatedEventParameters = {
              chart: this.chart,
              toolTip: this.options,
              content: c,
              entries: f,
            };
            this._entries = d;
          }
        } else
          this.hide(),
            this.enabled &&
              this.dispatchEvent(
                "hidden",
                { chart: this.chart, toolTip: this },
                this
              );
        this._dataSeriesIndex = this._xValue = null;
      }
    };
    oa.prototype.highlightObjects = function (a) {
      var f = this.chart.overlaidCanvasCtx;
      p(this.chart.clearedOverlayedCanvas) ||
      "toolTip" === this.chart.clearedOverlayedCanvas
        ? (this.chart.resetOverlayedCanvas(),
          f.clearRect(0, 0, this.chart.width, this.chart.height),
          (this.chart.clearedOverlayedCanvas = "toolTip"))
        : (this.chart.clearedOverlayedCanvas = null);
      f.save();
      var c = this.chart.plotArea,
        b = 0;
      f.beginPath();
      f.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
      f.clip();
      for (c = 0; c < a.length; c++) {
        var d = a[c];
        if (
          (d =
            this.chart._eventManager.objectMap[
              d.dataSeries.dataPointIds[d.index]
            ]) &&
          d.objectType &&
          "dataPoint" === d.objectType
        ) {
          var b = this.chart.data[d.dataSeriesIndex],
            h = b.dataPoints[d.dataPointIndex],
            l = d.dataPointIndex;
          !1 === h.highlightEnabled ||
            (!0 !== b.highlightEnabled && !0 !== h.highlightEnabled) ||
            ("line" === b.type ||
            "stepLine" === b.type ||
            "spline" === b.type ||
            "scatter" === b.type ||
            "area" === b.type ||
            "stepArea" === b.type ||
            "splineArea" === b.type ||
            "stackedArea" === b.type ||
            "stackedArea100" === b.type ||
            "rangeArea" === b.type ||
            "rangeSplineArea" === b.type
              ? ((h = b.getMarkerProperties(
                  l,
                  d.x1,
                  d.y1,
                  this.chart.overlaidCanvasCtx
                )),
                (h.size = Math.max((1.5 * h.size) << 0, 10)),
                (h.borderColor = h.borderColor || "#FFFFFF"),
                (h.borderThickness =
                  h.borderThickness || Math.ceil(0.1 * h.size)),
                Y.drawMarkers([h]),
                "undefined" !== typeof d.y2 &&
                  ((h = b.getMarkerProperties(
                    l,
                    d.x1,
                    d.y2,
                    this.chart.overlaidCanvasCtx
                  )),
                  (h.size = Math.max((1.5 * h.size) << 0, 10)),
                  (h.borderColor = h.borderColor || "#FFFFFF"),
                  (h.borderThickness =
                    h.borderThickness || Math.ceil(0.1 * h.size)),
                  Y.drawMarkers([h])))
              : "bubble" === b.type
              ? ((h = b.getMarkerProperties(
                  l,
                  d.x1,
                  d.y1,
                  this.chart.overlaidCanvasCtx
                )),
                (h.size = d.size),
                (h.color = "white"),
                (h.borderColor = "white"),
                (f.globalAlpha = 0.3),
                Y.drawMarkers([h]),
                (f.globalAlpha = 1))
              : "column" === b.type ||
                "stackedColumn" === b.type ||
                "stackedColumn100" === b.type ||
                "bar" === b.type ||
                "rangeBar" === b.type ||
                "stackedBar" === b.type ||
                "stackedBar100" === b.type ||
                "rangeColumn" === b.type ||
                "waterfall" === b.type
              ? ba(
                  f,
                  d.x1,
                  d.y1,
                  d.x2,
                  d.y2,
                  "white",
                  0,
                  null,
                  !1,
                  !1,
                  !1,
                  !1,
                  0.3
                )
              : "pie" === b.type || "doughnut" === b.type
              ? ja(
                  f,
                  d.center,
                  d.radius,
                  "white",
                  b.type,
                  d.startAngle,
                  d.endAngle,
                  0.3,
                  d.percentInnerRadius
                )
              : "funnel" === b.type || "pyramid" === b.type
              ? ra(f, d.funnelSection, 0.3, "white")
              : "candlestick" === b.type
              ? ((f.globalAlpha = 1),
                (f.strokeStyle = d.color),
                (f.lineWidth = 2 * d.borderThickness),
                (b = 0 === f.lineWidth % 2 ? 0 : 0.5),
                f.beginPath(),
                f.moveTo(d.x3 - b, Math.min(d.y2, d.y3)),
                f.lineTo(d.x3 - b, Math.min(d.y1, d.y4)),
                f.stroke(),
                f.beginPath(),
                f.moveTo(d.x3 - b, Math.max(d.y1, d.y4)),
                f.lineTo(d.x3 - b, Math.max(d.y2, d.y3)),
                f.stroke(),
                ba(
                  f,
                  d.x1,
                  Math.min(d.y1, d.y4),
                  d.x2,
                  Math.max(d.y1, d.y4),
                  "transparent",
                  2 * d.borderThickness,
                  d.color,
                  !1,
                  !1,
                  !1,
                  !1
                ),
                (f.globalAlpha = 1))
              : "ohlc" === b.type
              ? ((f.globalAlpha = 1),
                (f.strokeStyle = d.color),
                (f.lineWidth = 2 * d.borderThickness),
                (b = 0 === f.lineWidth % 2 ? 0 : 0.5),
                f.beginPath(),
                f.moveTo(d.x3 - b, d.y2),
                f.lineTo(d.x3 - b, d.y3),
                f.stroke(),
                f.beginPath(),
                f.moveTo(d.x3, d.y1),
                f.lineTo(d.x1, d.y1),
                f.stroke(),
                f.beginPath(),
                f.moveTo(d.x3, d.y4),
                f.lineTo(d.x2, d.y4),
                f.stroke(),
                (f.globalAlpha = 1))
              : "boxAndWhisker" === b.type
              ? (f.save(),
                (f.globalAlpha = 1),
                (f.strokeStyle = d.stemColor),
                (f.lineWidth = 2 * d.stemThickness),
                0 < d.stemThickness &&
                  (f.beginPath(),
                  f.moveTo(d.x3, d.y2 + d.borderThickness / 2),
                  f.lineTo(d.x3, d.y1 + d.whiskerThickness / 2),
                  f.stroke(),
                  f.beginPath(),
                  f.moveTo(d.x3, d.y4 - d.whiskerThickness / 2),
                  f.lineTo(d.x3, d.y3 - d.borderThickness / 2),
                  f.stroke()),
                f.beginPath(),
                ba(
                  f,
                  d.x1,
                  Math.max(d.y2, d.y3),
                  d.x2,
                  Math.min(d.y2, d.y3),
                  "transparent",
                  2 * d.borderThickness,
                  d.color,
                  !1,
                  !1,
                  !1,
                  !1
                ),
                (f.globalAlpha = 1),
                (f.strokeStyle = d.whiskerColor),
                (f.lineWidth = 2 * d.whiskerThickness),
                0 < d.whiskerThickness &&
                  (f.beginPath(),
                  f.moveTo(Math.floor(d.x3 - d.whiskerLength / 2), d.y4),
                  f.lineTo(Math.ceil(d.x3 + d.whiskerLength / 2), d.y4),
                  f.stroke(),
                  f.beginPath(),
                  f.moveTo(Math.floor(d.x3 - d.whiskerLength / 2), d.y1),
                  f.lineTo(Math.ceil(d.x3 + d.whiskerLength / 2), d.y1),
                  f.stroke()),
                (f.globalAlpha = 1),
                (f.strokeStyle = d.lineColor),
                (f.lineWidth = 2 * d.lineThickness),
                0 < d.lineThickness &&
                  (f.beginPath(),
                  f.moveTo(d.x1, d.y5),
                  f.lineTo(d.x2, d.y5),
                  f.stroke()),
                f.restore(),
                (f.globalAlpha = 1))
              : "error" === b.type &&
                A(
                  f,
                  d.x1,
                  d.y1,
                  d.x2,
                  d.y2,
                  "white",
                  d.whiskerProperties,
                  d.stemProperties,
                  d.isXYSwapped,
                  0.3
                ));
        }
      }
      f.restore();
      f.globalAlpha = 1;
      f.beginPath();
    };
    oa.prototype.getToolTipInnerHTML = function (a) {
      a = a.entries;
      var d = null,
        c = null,
        b = null,
        g = 0,
        h = "";
      this.isToolTipDefinedInData = !0;
      for (var l = 0; l < a.length; l++)
        if (a[l].dataSeries.toolTipContent || a[l].dataPoint.toolTipContent) {
          this.isToolTipDefinedInData = !1;
          break;
        }
      if (
        this.isToolTipDefinedInData &&
        ((this.content && "function" === typeof this.content) ||
          this.contentFormatter)
      )
        (a = { chart: this.chart, toolTip: this.options, entries: a }),
          (d = this.contentFormatter
            ? this.contentFormatter(a)
            : this.content(a));
      else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
        for (var p = null, t = "", l = 0; l < a.length; l++) {
          c = a[l].dataSeries;
          b = a[l].dataPoint;
          g = a[l].index;
          h = "";
          if (0 === l && this.isToolTipDefinedInData && !this.content) {
            this.chart.axisX && 0 < this.chart.axisX.length
              ? (t +=
                  "undefined" !== typeof this.chart.axisX[0].labels[b.x]
                    ? this.chart.axisX[0].labels[b.x]
                    : "{x}")
              : this.chart.axisX2 &&
                0 < this.chart.axisX2.length &&
                (t +=
                  "undefined" !== typeof this.chart.axisX2[0].labels[b.x]
                    ? this.chart.axisX2[0].labels[b.x]
                    : "{x}");
            t += "</br>";
            if (!c.visible) continue;
            t = this.chart.replaceKeywordsWithValue(t, b, c, g);
          }
          null === b.toolTipContent ||
            ("undefined" === typeof b.toolTipContent &&
              null === c.options.toolTipContent) ||
            ("line" === c.type ||
            "stepLine" === c.type ||
            "spline" === c.type ||
            "area" === c.type ||
            "stepArea" === c.type ||
            "splineArea" === c.type ||
            "column" === c.type ||
            "bar" === c.type ||
            "scatter" === c.type ||
            "stackedColumn" === c.type ||
            "stackedColumn100" === c.type ||
            "stackedBar" === c.type ||
            "stackedBar100" === c.type ||
            "stackedArea" === c.type ||
            "stackedArea100" === c.type ||
            "waterfall" === c.type
              ? (this.chart.axisX &&
                  1 < this.chart.axisX.length &&
                  (h +=
                    p != c.axisXIndex
                      ? c.axisX.title
                        ? c.axisX.title + "<br/>"
                        : "X:{axisXIndex}<br/>"
                      : ""),
                (h += b.toolTipContent
                  ? b.toolTipContent
                  : c.toolTipContent
                  ? c.toolTipContent
                  : this.content && "function" !== typeof this.content
                  ? this.content
                  : "<span data-color='\"" +
                    (this.options.fontColor ? "" : "'{color}'") +
                    "\"'>{name}:</span>&nbsp;&nbsp;{y}"),
                (p = c.axisXIndex))
              : "bubble" === c.type
              ? (this.chart.axisX &&
                  1 < this.chart.axisX.length &&
                  (h +=
                    p != c.axisXIndex
                      ? c.axisX.title
                        ? c.axisX.title + "<br/>"
                        : "X:{axisXIndex}<br/>"
                      : ""),
                (h += b.toolTipContent
                  ? b.toolTipContent
                  : c.toolTipContent
                  ? c.toolTipContent
                  : this.content && "function" !== typeof this.content
                  ? this.content
                  : "<span data-color='\"" +
                    (this.options.fontColor ? "" : "'{color}'") +
                    "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}"))
              : "rangeColumn" === c.type ||
                "rangeBar" === c.type ||
                "rangeArea" === c.type ||
                "rangeSplineArea" === c.type ||
                "error" === c.type
              ? (this.chart.axisX &&
                  1 < this.chart.axisX.length &&
                  (h +=
                    p != c.axisXIndex
                      ? c.axisX.title
                        ? c.axisX.title + "<br/>"
                        : "X:{axisXIndex}<br/>"
                      : ""),
                (h += b.toolTipContent
                  ? b.toolTipContent
                  : c.toolTipContent
                  ? c.toolTipContent
                  : this.content && "function" !== typeof this.content
                  ? this.content
                  : "<span data-color='\"" +
                    (this.options.fontColor ? "" : "'{color}'") +
                    "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}"))
              : "candlestick" === c.type || "ohlc" === c.type
              ? (this.chart.axisX &&
                  1 < this.chart.axisX.length &&
                  (h +=
                    p != c.axisXIndex
                      ? c.axisX.title
                        ? c.axisX.title + "<br/>"
                        : "X:{axisXIndex}<br/>"
                      : ""),
                (h += b.toolTipContent
                  ? b.toolTipContent
                  : c.toolTipContent
                  ? c.toolTipContent
                  : this.content && "function" !== typeof this.content
                  ? this.content
                  : "<span data-color='\"" +
                    (this.options.fontColor ? "" : "'{color}'") +
                    "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}"))
              : "boxAndWhisker" === c.type &&
                (this.chart.axisX &&
                  1 < this.chart.axisX.length &&
                  (h +=
                    p != c.axisXIndex
                      ? c.axisX.title
                        ? c.axisX.title + "<br/>"
                        : "X:{axisXIndex}<br/>"
                      : ""),
                (h += b.toolTipContent
                  ? b.toolTipContent
                  : c.toolTipContent
                  ? c.toolTipContent
                  : this.content && "function" !== typeof this.content
                  ? this.content
                  : "<span data-color='\"" +
                    (this.options.fontColor ? "" : "'{color}'") +
                    "\"'>{name}:</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}")),
            null === d && (d = ""),
            c.visible &&
              (!0 === this.reversed
                ? ((d = this.chart.replaceKeywordsWithValue(h, b, c, g) + d),
                  l < a.length - 1 && (d = "</br>" + d))
                : ((d += this.chart.replaceKeywordsWithValue(h, b, c, g)),
                  l < a.length - 1 && (d += "</br>"))));
        }
        null !== d && (d = t + d);
      } else {
        c = a[0].dataSeries;
        b = a[0].dataPoint;
        g = a[0].index;
        if (
          null === b.toolTipContent ||
          ("undefined" === typeof b.toolTipContent &&
            null === c.options.toolTipContent)
        )
          return null;
        "line" === c.type ||
        "stepLine" === c.type ||
        "spline" === c.type ||
        "area" === c.type ||
        "stepArea" === c.type ||
        "splineArea" === c.type ||
        "column" === c.type ||
        "bar" === c.type ||
        "scatter" === c.type ||
        "stackedColumn" === c.type ||
        "stackedColumn100" === c.type ||
        "stackedBar" === c.type ||
        "stackedBar100" === c.type ||
        "stackedArea" === c.type ||
        "stackedArea100" === c.type ||
        "waterfall" === c.type
          ? (h = b.toolTipContent
              ? b.toolTipContent
              : c.toolTipContent
              ? c.toolTipContent
              : this.content && "function" !== typeof this.content
              ? this.content
              : "<span data-color='\"" +
                (this.options.fontColor ? "" : "'{color}'") +
                "\"'>" +
                (b.label ? "{label}" : "{x}") +
                ":</span>&nbsp;&nbsp;{y}")
          : "bubble" === c.type
          ? (h = b.toolTipContent
              ? b.toolTipContent
              : c.toolTipContent
              ? c.toolTipContent
              : this.content && "function" !== typeof this.content
              ? this.content
              : "<span data-color='\"" +
                (this.options.fontColor ? "" : "'{color}'") +
                "\"'>" +
                (b.label ? "{label}" : "{x}") +
                ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}")
          : "pie" === c.type ||
            "doughnut" === c.type ||
            "funnel" === c.type ||
            "pyramid" === c.type
          ? (h = b.toolTipContent
              ? b.toolTipContent
              : c.toolTipContent
              ? c.toolTipContent
              : this.content && "function" !== typeof this.content
              ? this.content
              : "<span data-color='\"" +
                (this.options.fontColor ? "" : "'{color}'") +
                "\"'>" +
                (b.name
                  ? "{name}:</span>&nbsp;&nbsp;"
                  : b.label
                  ? "{label}:</span>&nbsp;&nbsp;"
                  : "</span>") +
                "{y}")
          : "rangeColumn" === c.type ||
            "rangeBar" === c.type ||
            "rangeArea" === c.type ||
            "rangeSplineArea" === c.type ||
            "error" === c.type
          ? (h = b.toolTipContent
              ? b.toolTipContent
              : c.toolTipContent
              ? c.toolTipContent
              : this.content && "function" !== typeof this.content
              ? this.content
              : "<span data-color='\"" +
                (this.options.fontColor ? "" : "'{color}'") +
                "\"'>" +
                (b.label ? "{label}" : "{x}") +
                " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}")
          : "candlestick" === c.type || "ohlc" === c.type
          ? (h = b.toolTipContent
              ? b.toolTipContent
              : c.toolTipContent
              ? c.toolTipContent
              : this.content && "function" !== typeof this.content
              ? this.content
              : "<span data-color='\"" +
                (this.options.fontColor ? "" : "'{color}'") +
                "\"'>" +
                (b.label ? "{label}" : "{x}") +
                "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}")
          : "boxAndWhisker" === c.type &&
            (h = b.toolTipContent
              ? b.toolTipContent
              : c.toolTipContent
              ? c.toolTipContent
              : this.content && "function" !== typeof this.content
              ? this.content
              : "<span data-color='\"" +
                (this.options.fontColor ? "" : "'{color}'") +
                "\"'>" +
                (b.label ? "{label}" : "{x}") +
                "</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
        null === d && (d = "");
        d += this.chart.replaceKeywordsWithValue(h, b, c, g);
      }
      return d;
    };
    oa.prototype.enableAnimation = function () {
      if (!this.container.style.WebkitTransition) {
        var a = this.getContainerTransition(this.containerTransitionDuration);
        this.container.style.WebkitTransition = a;
        this.container.style.MsTransition = a;
        this.container.style.transition = a;
        this.container.style.MozTransition = this.mozContainerTransition;
      }
    };
    oa.prototype.disableAnimation = function () {
      this.container.style.WebkitTransition &&
        ((this.container.style.WebkitTransition = ""),
        (this.container.style.MozTransition = ""),
        (this.container.style.MsTransition = ""),
        (this.container.style.transition = ""));
    };
    oa.prototype.hide = function (a) {
      this.container &&
        ((this.container.style.display = "none"),
        (this.currentSeriesIndex = -1),
        (this._entries = this._dataSeriesIndex = this._xValue = null),
        (this._prevY = this._prevX = NaN),
        (this._updatedEventParameters = null),
        ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas());
    };
    oa.prototype.show = function (a, d, c) {
      this._updateToolTip(a, d, "undefined" === typeof c ? !1 : c);
    };
    oa.prototype.showAtIndex = function (a, d) {};
    oa.prototype.showAtX = function (a, d) {
      if (!this.enabled) return !1;
      this.chart.clearedOverlayedCanvas = null;
      this._updateOptions();
      var c,
        b,
        g,
        h = [];
      g = !1;
      d = !p(d) && 0 <= d && d < this.chart.data.length ? d : 0;
      if (this.shared)
        for (var l = 0; l < this.chart.data.length; l++)
          (c = this.chart.data[l]),
            (b = c.getDataPointAtX(a, !1)) &&
              b.dataPoint &&
              !p(b.dataPoint.y) &&
              c.visible &&
              ((b.dataSeries = c),
              this.chart.data[d].axisX.convertValueToPixel(a) ===
                c.axisX.convertValueToPixel(b.dataPoint.x) && h.push(b));
      else
        (c = this.chart.data[d]),
          (b = c.getDataPointAtX(a, !1)) &&
            b.dataPoint &&
            !p(b.dataPoint.y) &&
            c.visible &&
            ((b.dataSeries = c), h.push(b));
      if (0 < h.length) {
        for (l = 0; l < h.length; l++)
          if (
            ((b = h[l]),
            (this.shared || 0 <= b.dataSeries.type.indexOf("100")) &&
              b.dataSeries.axisX &&
              b.dataPoint.x >= b.dataSeries.axisX.viewportMinimum &&
              b.dataPoint.x <= b.dataSeries.axisX.viewportMaximum)
          ) {
            g = !1;
            break;
          } else if (
            b.dataSeries.axisX &&
            b.dataSeries.axisY &&
            (b.dataPoint.x < b.dataSeries.axisX.viewportMinimum ||
              b.dataPoint.x > b.dataSeries.axisX.viewportMaximum ||
              b.dataPoint.y < b.dataSeries.axisY.viewportMinimum ||
              b.dataPoint.y > b.dataSeries.axisY.viewportMaximum)
          )
            g = !0;
          else {
            g = !1;
            break;
          }
        if (g) return this.hide(), !1;
        this.highlightObjects(h);
        this._entries = h;
        l = "";
        l = this.getToolTipInnerHTML({ entries: h });
        if (null !== l) {
          this.contentDiv.innerHTML = l;
          if (
            this.isToolTipDefinedInData &&
            p(this.options.content) &&
            p(this.options.contentFormatter)
          )
            for (
              b = this.contentDiv.getElementsByTagName("span"), l = 0;
              l < b.length;
              l++
            )
              b[l] && (b[l].style.color = b[l].getAttribute("data-color"));
          l = !1;
          "none" === this.container.style.display &&
            ((l = !0), (this.container.style.display = "block"));
          try {
            (this.contentDiv.style.background = this.backgroundColor
              ? this.backgroundColor
              : t
              ? "rgba(255,255,255,.9)"
              : "rgb(255,255,255)"),
              (this.borderColor =
                "waterfall" === h[0].dataSeries.type
                  ? (this.contentDiv.style.borderRightColor =
                      this.contentDiv.style.borderLeftColor =
                      this.contentDiv.style.borderColor =
                        this.options.borderColor
                          ? this.options.borderColor
                          : h[0].dataPoint.color
                          ? h[0].dataPoint.color
                          : 0 < h[0].dataPoint.y
                          ? h[0].dataSeries.risingColor
                          : h[0].dataSeries.fallingColor)
                  : "error" === h[0].dataSeries.type
                  ? (this.contentDiv.style.borderRightColor =
                      this.contentDiv.style.borderLeftColor =
                      this.contentDiv.style.borderColor =
                        this.options.borderColor
                          ? this.options.borderColor
                          : h[0].dataSeries.color
                          ? h[0].dataSeries.color
                          : h[0].dataSeries._colorSet[
                              c.index % h[0].dataSeries._colorSet.length
                            ])
                  : (this.contentDiv.style.borderRightColor =
                      this.contentDiv.style.borderLeftColor =
                      this.contentDiv.style.borderColor =
                        this.options.borderColor
                          ? this.options.borderColor
                          : h[0].dataPoint.color
                          ? h[0].dataPoint.color
                          : h[0].dataSeries.color
                          ? h[0].dataSeries.color
                          : h[0].dataSeries._colorSet[
                              h[0].index % h[0].dataSeries._colorSet.length
                            ])),
              (this.contentDiv.style.borderWidth =
                this.borderThickness || 0 === this.borderThickness
                  ? this.borderThickness + "px"
                  : "2px"),
              (this.contentDiv.style.borderRadius =
                this.cornerRadius || 0 === this.cornerRadius
                  ? this.cornerRadius + "px"
                  : "5px"),
              (this.container.style.borderRadius =
                this.contentDiv.style.borderRadius),
              (this.contentDiv.style.fontSize =
                this.fontSize || 0 === this.fontSize
                  ? this.fontSize + "px"
                  : "14px"),
              (this.contentDiv.style.color = this.fontColor
                ? this.fontColor
                : "#000000"),
              (this.contentDiv.style.fontFamily = this.fontFamily
                ? this.fontFamily
                : "Calibri, Arial, Georgia, serif;"),
              (this.contentDiv.style.fontWeight = this.fontWeight
                ? this.fontWeight
                : "normal"),
              (this.contentDiv.style.fontStyle = this.fontStyle
                ? this.fontStyle
                : t
                ? "italic"
                : "normal");
          } catch (u) {}
          "pie" === h[0].dataSeries.type || "doughnut" === h[0].dataSeries.type
            ? (c =
                h[0].dataSeries.dataPointEOs[h[0].index].center.x +
                h[0].dataSeries.radius *
                  Math.cos(h[0].dataSeries.dataPointEOs[h[0].index].midAngle) +
                -("left" === h[0].dataSeries.dataPointEOs[h[0].index].hemisphere
                  ? 0
                  : this.container.clientWidth))
            : "funnel" === h[0].dataSeries.type ||
              "pyramid" === h[0].dataSeries.type
            ? ((b = h[0].dataSeries.dataPointEOs[h[0].index].sectionsofFunnel),
              (c = (b.x1 + b.x2 - this.container.clientWidth) / 2))
            : ((c =
                "bar" === h[0].dataSeries.type ||
                "rangeBar" === h[0].dataSeries.type ||
                "stackedBar" === h[0].dataSeries.type ||
                "stackedBar100" === h[0].dataSeries.type
                  ? (h[0].dataSeries.axisY.convertValueToPixel(
                      h[0].dataPoint.y.length
                        ? h[0].dataPoint.y[h[0].dataPoint.y.length - 1]
                        : h[0].dataPoint.y
                    ) -
                      this.container.clientWidth) <<
                    0
                  : (h[0].dataSeries.axisX.convertValueToPixel(
                      h[0].dataPoint.x
                    ) -
                      this.container.clientWidth) <<
                    0),
              (c -= 10));
          0 > c && (c += this.container.clientWidth + 20);
          c + this.container.clientWidth >
            Math.max(this.chart.container.clientWidth, this.chart.width) &&
            (c = Math.max(
              0,
              Math.max(this.chart.container.clientWidth, this.chart.width) -
                this.container.clientWidth
            ));
          1 !== h.length ||
          this.shared ||
          ("line" !== h[0].dataSeries.type &&
            "stepLine" !== h[0].dataSeries.type &&
            "spline" !== h[0].dataSeries.type &&
            "area" !== h[0].dataSeries.type &&
            "stepArea" !== h[0].dataSeries.type &&
            "splineArea" !== h[0].dataSeries.type)
            ? "pie" === h[0].dataSeries.type ||
              "doughnut" === h[0].dataSeries.type
              ? ((b =
                  h[0].dataSeries.dataPointEOs[h[0].index].center.y +
                  h[0].dataSeries.radius *
                    Math.sin(
                      h[0].dataSeries.dataPointEOs[h[0].index].midAngle
                    )),
                b < h[0].dataSeries.dataPointEOs[h[0].index].center.y &&
                  (b += this.container.clientHeight))
              : "funnel" === h[0].dataSeries.type ||
                "pyramid" === h[0].dataSeries.type
              ? ((b =
                  h[0].dataSeries.dataPointEOs[
                    h[0].dataSeries.reversed
                      ? h[0].dataSeries.dataPointEOs.length - 1 - h[0].index
                      : h[0].index
                  ].sectionsofFunnel),
                (b =
                  "undefined" !== typeof b.x5
                    ? (b.y2 + b.y4) / 2
                    : (b.y2 + b.y3) / 2 + this.container.clientHeight / 2))
              : (b =
                  "bar" === h[0].dataSeries.type ||
                  "rangeBar" === h[0].dataSeries.type ||
                  "stackedBar" === h[0].dataSeries.type ||
                  "stackedBar100" === h[0].dataSeries.type
                    ? h[0].dataSeries.axisX.convertValueToPixel(
                        h[0].dataPoint.x
                      )
                    : h[0].dataSeries.axisY.convertValueToPixel(
                        h[0].dataPoint.y.length
                          ? h[0].dataPoint.y[h[0].dataPoint.y.length - 1]
                          : h[0].dataPoint.y
                      ))
            : (b = h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y));
          b = -b + 10;
          0 < b + this.container.clientHeight + 5 &&
            (b -= b + this.container.clientHeight + 5 - 0);
          this.fixMozTransitionDelay(c, b);
          !this.animationEnabled || l
            ? this.disableAnimation()
            : (this.enableAnimation(),
              (this.container.style.MozTransition =
                this.mozContainerTransition));
          this.container.style.left = c + "px";
          this.container.style.bottom = b + "px";
        } else return this.hide(!1), !1;
      } else return this.hide(), !1;
      this._xValue = a;
      this._dataSeriesIndex = d;
      this._prevY = this._prevX = NaN;
      return !0;
    };
    oa.prototype.fixMozTransitionDelay = function (a, d) {
      if (20 < this.chart._eventManager.lastObjectId)
        this.mozContainerTransition = this.getContainerTransition(0);
      else {
        var c = parseFloat(this.container.style.left),
          c = isNaN(c) ? 0 : c,
          b = parseFloat(this.container.style.bottom),
          b = isNaN(b) ? 0 : b;
        10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d, 2))
          ? (this.mozContainerTransition = this.getContainerTransition(0.1))
          : (this.mozContainerTransition = this.getContainerTransition(0));
      }
    };
    oa.prototype.getContainerTransition = function (a) {
      return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
    };
    ia.prototype.reset = function () {
      this.lastObjectId = 0;
      this.objectMap = [];
      this.rectangularRegionEventSubscriptions = [];
      this.previousDataPointEventObject = null;
      this.eventObjects = [];
      t &&
        (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height),
        this.ghostCtx.beginPath());
    };
    ia.prototype.getNewObjectTrackingId = function () {
      return ++this.lastObjectId;
    };
    ia.prototype.mouseEventHandler = function (a) {
      if ("mousemove" === a.type || "click" === a.type) {
        var d = [],
          c = Qa(a),
          b = null;
        if (
          (b = this.chart.getObjectAtXY(c.x, c.y, !1)) &&
          "undefined" !== typeof this.objectMap[b]
        )
          if (((b = this.objectMap[b]), "dataPoint" === b.objectType)) {
            var g = this.chart.data[b.dataSeriesIndex],
              h = g.dataPoints[b.dataPointIndex],
              l = b.dataPointIndex;
            b.eventParameter = {
              x: c.x,
              y: c.y,
              dataPoint: h,
              dataSeries: g.options,
              dataPointIndex: l,
              dataSeriesIndex: g.index,
              chart: this.chart,
            };
            b.eventContext = {
              context: h,
              userContext: h,
              mouseover: "mouseover",
              mousemove: "mousemove",
              mouseout: "mouseout",
              click: "click",
            };
            d.push(b);
            b = this.objectMap[g.id];
            b.eventParameter = {
              x: c.x,
              y: c.y,
              dataPoint: h,
              dataSeries: g.options,
              dataPointIndex: l,
              dataSeriesIndex: g.index,
              chart: this.chart,
            };
            b.eventContext = {
              context: g,
              userContext: g.options,
              mouseover: "mouseover",
              mousemove: "mousemove",
              mouseout: "mouseout",
              click: "click",
            };
            d.push(this.objectMap[g.id]);
          } else
            "legendItem" === b.objectType &&
              ((g = this.chart.data[b.dataSeriesIndex]),
              (h =
                null !== b.dataPointIndex
                  ? g.dataPoints[b.dataPointIndex]
                  : null),
              (b.eventParameter = {
                x: c.x,
                y: c.y,
                dataSeries: g.options,
                dataPoint: h,
                dataPointIndex: b.dataPointIndex,
                dataSeriesIndex: b.dataSeriesIndex,
                chart: this.chart,
              }),
              (b.eventContext = {
                context: this.chart.legend,
                userContext: this.chart.legend.options,
                mouseover: "itemmouseover",
                mousemove: "itemmousemove",
                mouseout: "itemmouseout",
                click: "itemclick",
              }),
              d.push(b));
        g = [];
        for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
          h = !0;
          for (b = 0; b < d.length; b++)
            if (d[b].id === this.mouseoveredObjectMaps[c].id) {
              h = !1;
              break;
            }
          h
            ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a)
            : g.push(this.mouseoveredObjectMaps[c]);
        }
        this.mouseoveredObjectMaps = g;
        for (c = 0; c < d.length; c++) {
          g = !1;
          for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
            if (d[c].id === this.mouseoveredObjectMaps[b].id) {
              g = !0;
              break;
            }
          g ||
            (this.fireEvent(d[c], "mouseover", a),
            this.mouseoveredObjectMaps.push(d[c]));
          "click" === a.type
            ? this.fireEvent(d[c], "click", a)
            : "mousemove" === a.type && this.fireEvent(d[c], "mousemove", a);
        }
      }
    };
    ia.prototype.fireEvent = function (a, d, c) {
      if (a && d) {
        var b = a.eventParameter,
          g = a.eventContext,
          h = a.eventContext.userContext;
        h && g && h[g[d]] && h[g[d]].call(h, b);
        "mouseout" !== d
          ? h.cursor &&
            h.cursor !== c.target.style.cursor &&
            (c.target.style.cursor = h.cursor)
          : ((c.target.style.cursor = this.chart.panEnabled
              ? "itemmouseout" !== g.mouseout || h.dockInsidePlotArea
                ? "move"
                : this.chart._defaultCursor
              : this.chart._defaultCursor),
            delete a.eventParameter,
            delete a.eventContext);
        "click" === d &&
          "dataPoint" === a.objectType &&
          this.chart.pieDoughnutClickHandler &&
          this.chart.pieDoughnutClickHandler.call(
            this.chart.data[a.dataSeriesIndex],
            b
          );
        "click" === d &&
          "dataPoint" === a.objectType &&
          this.chart.funnelPyramidClickHandler &&
          this.chart.funnelPyramidClickHandler.call(
            this.chart.data[a.dataSeriesIndex],
            b
          );
      }
    };
    X.prototype.animate = function (a, d, c, b, g) {
      var h = this;
      this.chart.isAnimating = !0;
      g = g || O.easing.linear;
      c &&
        this.animations.push({
          startTime: new Date().getTime() + (a ? a : 0),
          duration: d,
          animationCallback: c,
          onComplete: b,
        });
      for (a = []; 0 < this.animations.length; )
        if (
          ((d = this.animations.shift()),
          (c = new Date().getTime()),
          (b = 0),
          d.startTime <= c &&
            ((b = g(Math.min(c - d.startTime, d.duration), 0, 1, d.duration)),
            (b = Math.min(b, 1)),
            isNaN(b) || !isFinite(b)) &&
            (b = 1),
          1 > b && a.push(d),
          d.animationCallback(b),
          1 <= b && d.onComplete)
        )
          d.onComplete();
      this.animations = a;
      0 < this.animations.length
        ? (this.animationRequestId = this.chart.requestAnimFrame.call(
            window,
            function () {
              h.animate.call(h);
            }
          ))
        : (this.chart.isAnimating = !1);
    };
    X.prototype.cancelAllAnimations = function () {
      this.animations = [];
      this.animationRequestId &&
        this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
      this.animationRequestId = null;
      this.chart.isAnimating = !1;
    };
    var O = {
        yScaleAnimation: function (a, d) {
          if (0 !== a) {
            var c = d.dest,
              b = d.source.canvas,
              g = d.animationBase;
            c.drawImage(
              b,
              0,
              0,
              b.width,
              b.height,
              0,
              g - g * a,
              c.canvas.width / ma,
              (a * c.canvas.height) / ma
            );
          }
        },
        xScaleAnimation: function (a, d) {
          if (0 !== a) {
            var c = d.dest,
              b = d.source.canvas,
              g = d.animationBase;
            c.drawImage(
              b,
              0,
              0,
              b.width,
              b.height,
              g - g * a,
              0,
              (a * c.canvas.width) / ma,
              c.canvas.height / ma
            );
          }
        },
        xClipAnimation: function (a, d) {
          if (0 !== a) {
            var c = d.dest,
              b = d.source.canvas;
            c.save();
            0 < a &&
              c.drawImage(
                b,
                0,
                0,
                b.width * a,
                b.height,
                0,
                0,
                (b.width * a) / ma,
                b.height / ma
              );
            c.restore();
          }
        },
        fadeInAnimation: function (a, d) {
          if (0 !== a) {
            var c = d.dest,
              b = d.source.canvas;
            c.save();
            c.globalAlpha = a;
            c.drawImage(
              b,
              0,
              0,
              b.width,
              b.height,
              0,
              0,
              c.canvas.width / ma,
              c.canvas.height / ma
            );
            c.restore();
          }
        },
        easing: {
          linear: function (a, d, c, b) {
            return (c * a) / b + d;
          },
          easeOutQuad: function (a, d, c, b) {
            return -c * (a /= b) * (a - 2) + d;
          },
          easeOutQuart: function (a, d, c, b) {
            return -c * ((a = a / b - 1) * a * a * a - 1) + d;
          },
          easeInQuad: function (a, d, c, b) {
            return c * (a /= b) * a + d;
          },
          easeInQuart: function (a, d, c, b) {
            return c * (a /= b) * a * a * a + d;
          },
        },
      },
      Y = {
        drawMarker: function (a, d, c, b, g, h, l, p) {
          if (c) {
            var t = 1;
            c.fillStyle = h ? h : "#000000";
            c.strokeStyle = l ? l : "#000000";
            c.lineWidth = p ? p : 0;
            c.setLineDash && c.setLineDash(I("solid", p));
            "circle" === b
              ? (c.moveTo(a, d),
                c.beginPath(),
                c.arc(a, d, g / 2, 0, 2 * Math.PI, !1),
                h && c.fill(),
                p &&
                  (l
                    ? c.stroke()
                    : ((t = c.globalAlpha),
                      (c.globalAlpha = 0.15),
                      (c.strokeStyle = "black"),
                      c.stroke(),
                      (c.globalAlpha = t))))
              : "square" === b
              ? (c.beginPath(),
                c.rect(a - g / 2, d - g / 2, g, g),
                h && c.fill(),
                p &&
                  (l
                    ? c.stroke()
                    : ((t = c.globalAlpha),
                      (c.globalAlpha = 0.15),
                      (c.strokeStyle = "black"),
                      c.stroke(),
                      (c.globalAlpha = t))))
              : "triangle" === b
              ? (c.beginPath(),
                c.moveTo(a - g / 2, d + g / 2),
                c.lineTo(a + g / 2, d + g / 2),
                c.lineTo(a, d - g / 2),
                c.closePath(),
                h && c.fill(),
                p &&
                  (l
                    ? c.stroke()
                    : ((t = c.globalAlpha),
                      (c.globalAlpha = 0.15),
                      (c.strokeStyle = "black"),
                      c.stroke(),
                      (c.globalAlpha = t))),
                c.beginPath())
              : "cross" === b &&
                ((c.strokeStyle = h),
                (c.lineWidth = g / 4),
                c.beginPath(),
                c.moveTo(a - g / 2, d - g / 2),
                c.lineTo(a + g / 2, d + g / 2),
                c.stroke(),
                c.moveTo(a + g / 2, d - g / 2),
                c.lineTo(a - g / 2, d + g / 2),
                c.stroke());
          }
        },
        drawMarkers: function (a) {
          for (var d = 0; d < a.length; d++) {
            var c = a[d];
            Y.drawMarker(
              c.x,
              c.y,
              c.ctx,
              c.type,
              c.size,
              c.color,
              c.borderColor,
              c.borderThickness
            );
          }
        },
      };
    return l;
  })();
  u.version = "v3.10.12 GA";
  window.CanvasJS && u && !window.CanvasJS.Chart && (window.CanvasJS.Chart = u);
})();

/*
      excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.
    
      Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
      Licensed under the Apache License, Version 2.0
    */
document.createElement("canvas").getContext ||
  (function () {
    function V() {
      return this.context_ || (this.context_ = new C(this));
    }
    function W(a, b, c) {
      var g = M.call(arguments, 2);
      return function () {
        return a.apply(b, g.concat(M.call(arguments)));
      };
    }
    function N(a) {
      return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
    }
    function O(a) {
      a.namespaces.g_vml_ ||
        a.namespaces.add(
          "g_vml_",
          "urn:schemas-microsoft-com:vml",
          "#default#VML"
        );
      a.namespaces.g_o_ ||
        a.namespaces.add(
          "g_o_",
          "urn:schemas-microsoft-com:office:office",
          "#default#VML"
        );
      a.styleSheets.ex_canvas_ ||
        ((a = a.createStyleSheet()),
        (a.owningElement.id = "ex_canvas_"),
        (a.cssText =
          "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"));
    }
    function X(a) {
      var b = a.srcElement;
      switch (a.propertyName) {
        case "width":
          b.getContext().clearRect();
          b.style.width = b.attributes.width.nodeValue + "px";
          b.firstChild.style.width = b.clientWidth + "px";
          break;
        case "height":
          b.getContext().clearRect(),
            (b.style.height = b.attributes.height.nodeValue + "px"),
            (b.firstChild.style.height = b.clientHeight + "px");
      }
    }
    function Y(a) {
      a = a.srcElement;
      a.firstChild &&
        ((a.firstChild.style.width = a.clientWidth + "px"),
        (a.firstChild.style.height = a.clientHeight + "px"));
    }
    function D() {
      return [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ];
    }
    function t(a, b) {
      for (var c = D(), g = 0; 3 > g; g++)
        for (var e = 0; 3 > e; e++) {
          for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
          c[g][e] = f;
        }
      return c;
    }
    function P(a, b) {
      b.fillStyle = a.fillStyle;
      b.lineCap = a.lineCap;
      b.lineJoin = a.lineJoin;
      b.lineWidth = a.lineWidth;
      b.miterLimit = a.miterLimit;
      b.shadowBlur = a.shadowBlur;
      b.shadowColor = a.shadowColor;
      b.shadowOffsetX = a.shadowOffsetX;
      b.shadowOffsetY = a.shadowOffsetY;
      b.strokeStyle = a.strokeStyle;
      b.globalAlpha = a.globalAlpha;
      b.font = a.font;
      b.textAlign = a.textAlign;
      b.textBaseline = a.textBaseline;
      b.arcScaleX_ = a.arcScaleX_;
      b.arcScaleY_ = a.arcScaleY_;
      b.lineScale_ = a.lineScale_;
    }
    function Q(a) {
      var b = a.indexOf("(", 3),
        c = a.indexOf(")", b + 1),
        b = a.substring(b + 1, c).split(",");
      if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
      return b;
    }
    function E(a, b, c) {
      return Math.min(c, Math.max(b, a));
    }
    function F(a, b, c) {
      0 > c && c++;
      1 < c && c--;
      return 1 > 6 * c
        ? a + 6 * (b - a) * c
        : 1 > 2 * c
        ? b
        : 2 > 3 * c
        ? a + 6 * (b - a) * (2 / 3 - c)
        : a;
    }
    function G(a) {
      if (a in H) return H[a];
      var b,
        c = 1;
      a = String(a);
      if ("#" == a.charAt(0)) b = a;
      else if (/^rgb/.test(a)) {
        c = Q(a);
        b = "#";
        for (var g, e = 0; 3 > e; e++)
          (g =
            -1 != c[e].indexOf("%")
              ? Math.floor(255 * (parseFloat(c[e]) / 100))
              : +c[e]),
            (b += v[E(g, 0, 255)]);
        c = +c[3];
      } else if (/^hsl/.test(a)) {
        e = c = Q(a);
        b = (parseFloat(e[0]) / 360) % 360;
        0 > b && b++;
        g = E(parseFloat(e[1]) / 100, 0, 1);
        e = E(parseFloat(e[2]) / 100, 0, 1);
        if (0 == g) g = e = b = e;
        else {
          var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
            d = 2 * e - f;
          g = F(d, f, b + 1 / 3);
          e = F(d, f, b);
          b = F(d, f, b - 1 / 3);
        }
        b =
          "#" +
          v[Math.floor(255 * g)] +
          v[Math.floor(255 * e)] +
          v[Math.floor(255 * b)];
        c = c[3];
      } else b = Z[a] || a;
      return (H[a] = { color: b, alpha: c });
    }
    function C(a) {
      this.m_ = D();
      this.mStack_ = [];
      this.aStack_ = [];
      this.currentPath_ = [];
      this.fillStyle = this.strokeStyle = "#000";
      this.lineWidth = 1;
      this.lineJoin = "miter";
      this.lineCap = "butt";
      this.miterLimit = 1 * q;
      this.globalAlpha = 1;
      this.font = "10px sans-serif";
      this.textAlign = "left";
      this.textBaseline = "alphabetic";
      this.canvas = a;
      var b =
          "width:" +
          a.clientWidth +
          "px;height:" +
          a.clientHeight +
          "px;overflow:hidden;position:absolute",
        c = a.ownerDocument.createElement("div");
      c.style.cssText = b;
      a.appendChild(c);
      b = c.cloneNode(!1);
      b.style.backgroundColor = "red";
      b.style.filter = "alpha(opacity=0)";
      a.appendChild(b);
      this.element_ = c;
      this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
    }
    function R(a, b, c, g) {
      a.currentPath_.push({
        type: "bezierCurveTo",
        cp1x: b.x,
        cp1y: b.y,
        cp2x: c.x,
        cp2y: c.y,
        x: g.x,
        y: g.y,
      });
      a.currentX_ = g.x;
      a.currentY_ = g.y;
    }
    function S(a, b) {
      var c = G(a.strokeStyle),
        g = c.color,
        c = c.alpha * a.globalAlpha,
        e = a.lineScale_ * a.lineWidth;
      1 > e && (c *= e);
      b.push(
        "<g_vml_:stroke",
        ' opacity="',
        c,
        '"',
        ' joinstyle="',
        a.lineJoin,
        '"',
        ' miterlimit="',
        a.miterLimit,
        '"',
        ' endcap="',
        $[a.lineCap] || "square",
        '"',
        ' weight="',
        e,
        'px"',
        ' color="',
        g,
        '" />'
      );
    }
    function T(a, b, c, g) {
      var e = a.fillStyle,
        f = a.arcScaleX_,
        d = a.arcScaleY_,
        k = g.x - c.x,
        n = g.y - c.y;
      if (e instanceof w) {
        var h = 0,
          l = (g = 0),
          u = 0,
          m = 1;
        if ("gradient" == e.type_) {
          h = e.x1_ / f;
          c = e.y1_ / d;
          var p = s(a, e.x0_ / f, e.y0_ / d),
            h = s(a, h, c),
            h = (180 * Math.atan2(h.x - p.x, h.y - p.y)) / Math.PI;
          0 > h && (h += 360);
          1e-6 > h && (h = 0);
        } else
          (p = s(a, e.x0_, e.y0_)),
            (g = (p.x - c.x) / k),
            (l = (p.y - c.y) / n),
            (k /= f * q),
            (n /= d * q),
            (m = x.max(k, n)),
            (u = (2 * e.r0_) / m),
            (m = (2 * e.r1_) / m - u);
        f = e.colors_;
        f.sort(function (a, b) {
          return a.offset - b.offset;
        });
        d = f.length;
        p = f[0].color;
        c = f[d - 1].color;
        k = f[0].alpha * a.globalAlpha;
        a = f[d - 1].alpha * a.globalAlpha;
        for (var n = [], r = 0; r < d; r++) {
          var t = f[r];
          n.push(t.offset * m + u + " " + t.color);
        }
        b.push(
          '<g_vml_:fill type="',
          e.type_,
          '"',
          ' method="none" focus="100%"',
          ' color="',
          p,
          '"',
          ' color2="',
          c,
          '"',
          ' colors="',
          n.join(","),
          '"',
          ' opacity="',
          a,
          '"',
          ' g_o_:opacity2="',
          k,
          '"',
          ' angle="',
          h,
          '"',
          ' focusposition="',
          g,
          ",",
          l,
          '" />'
        );
      } else
        e instanceof I
          ? k &&
            n &&
            b.push(
              "<g_vml_:fill",
              ' position="',
              (-c.x / k) * f * f,
              ",",
              (-c.y / n) * d * d,
              '"',
              ' type="tile"',
              ' src="',
              e.src_,
              '" />'
            )
          : ((e = G(a.fillStyle)),
            b.push(
              '<g_vml_:fill color="',
              e.color,
              '" opacity="',
              e.alpha * a.globalAlpha,
              '" />'
            ));
    }
    function s(a, b, c) {
      a = a.m_;
      return {
        x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
        y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r,
      };
    }
    function z(a, b, c) {
      isFinite(b[0][0]) &&
        isFinite(b[0][1]) &&
        isFinite(b[1][0]) &&
        isFinite(b[1][1]) &&
        isFinite(b[2][0]) &&
        isFinite(b[2][1]) &&
        ((a.m_ = b),
        c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
    }
    function w(a) {
      this.type_ = a;
      this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
      this.colors_ = [];
    }
    function I(a, b) {
      if (!a || 1 != a.nodeType || "IMG" != a.tagName)
        throw new A("TYPE_MISMATCH_ERR");
      if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
      switch (b) {
        case "repeat":
        case null:
        case "":
          this.repetition_ = "repeat";
          break;
        case "repeat-x":
        case "repeat-y":
        case "no-repeat":
          this.repetition_ = b;
          break;
        default:
          throw new A("SYNTAX_ERR");
      }
      this.src_ = a.src;
      this.width_ = a.width;
      this.height_ = a.height;
    }
    function A(a) {
      this.code = this[a];
      this.message = a + ": DOM Exception " + this.code;
    }
    var x = Math,
      k = x.round,
      J = x.sin,
      K = x.cos,
      ba = x.abs,
      aa = x.sqrt,
      q = 10,
      r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
      init: function (a) {
        a = a || document;
        a.createElement("canvas");
        a.attachEvent("onreadystatechange", W(this.init_, this, a));
      },
      init_: function (a) {
        a = a.getElementsByTagName("canvas");
        for (var b = 0; b < a.length; b++) this.initElement(a[b]);
      },
      initElement: function (a) {
        if (!a.getContext) {
          a.getContext = V;
          O(a.ownerDocument);
          a.innerHTML = "";
          a.attachEvent("onpropertychange", X);
          a.attachEvent("onresize", Y);
          var b = a.attributes;
          b.width && b.width.specified
            ? (a.style.width = b.width.nodeValue + "px")
            : (a.width = a.clientWidth);
          b.height && b.height.specified
            ? (a.style.height = b.height.nodeValue + "px")
            : (a.height = a.clientHeight);
        }
        return a;
      },
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
      for (var B = 0; 16 > B; B++)
        v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32",
      },
      H = {},
      L = {},
      $ = { butt: "flat", round: "round" },
      d = C.prototype;
    d.clearRect = function () {
      this.textMeasureEl_ &&
        (this.textMeasureEl_.removeNode(!0), (this.textMeasureEl_ = null));
      this.element_.innerHTML = "";
    };
    d.beginPath = function () {
      this.currentPath_ = [];
    };
    d.moveTo = function (a, b) {
      var c = s(this, a, b);
      this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
      this.currentX_ = c.x;
      this.currentY_ = c.y;
    };
    d.lineTo = function (a, b) {
      var c = s(this, a, b);
      this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
      this.currentX_ = c.x;
      this.currentY_ = c.y;
    };
    d.bezierCurveTo = function (a, b, c, g, e, f) {
      e = s(this, e, f);
      a = s(this, a, b);
      c = s(this, c, g);
      R(this, a, c, e);
    };
    d.quadraticCurveTo = function (a, b, c, g) {
      a = s(this, a, b);
      c = s(this, c, g);
      g = {
        x: this.currentX_ + (2 / 3) * (a.x - this.currentX_),
        y: this.currentY_ + (2 / 3) * (a.y - this.currentY_),
      };
      R(
        this,
        g,
        {
          x: g.x + (c.x - this.currentX_) / 3,
          y: g.y + (c.y - this.currentY_) / 3,
        },
        c
      );
    };
    d.arc = function (a, b, c, g, e, f) {
      c *= q;
      var d = f ? "at" : "wa",
        k = a + K(g) * c - r,
        n = b + J(g) * c - r;
      g = a + K(e) * c - r;
      e = b + J(e) * c - r;
      k != g || f || (k += 0.125);
      a = s(this, a, b);
      k = s(this, k, n);
      g = s(this, g, e);
      this.currentPath_.push({
        type: d,
        x: a.x,
        y: a.y,
        radius: c,
        xStart: k.x,
        yStart: k.y,
        xEnd: g.x,
        yEnd: g.y,
      });
    };
    d.rect = function (a, b, c, g) {
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a + c, b + g);
      this.lineTo(a, b + g);
      this.closePath();
    };
    d.strokeRect = function (a, b, c, g) {
      var e = this.currentPath_;
      this.beginPath();
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a + c, b + g);
      this.lineTo(a, b + g);
      this.closePath();
      this.stroke();
      this.currentPath_ = e;
    };
    d.fillRect = function (a, b, c, g) {
      var e = this.currentPath_;
      this.beginPath();
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a + c, b + g);
      this.lineTo(a, b + g);
      this.closePath();
      this.fill();
      this.currentPath_ = e;
    };
    d.createLinearGradient = function (a, b, c, g) {
      var e = new w("gradient");
      e.x0_ = a;
      e.y0_ = b;
      e.x1_ = c;
      e.y1_ = g;
      return e;
    };
    d.createRadialGradient = function (a, b, c, g, e, f) {
      var d = new w("gradientradial");
      d.x0_ = a;
      d.y0_ = b;
      d.r0_ = c;
      d.x1_ = g;
      d.y1_ = e;
      d.r1_ = f;
      return d;
    };
    d.drawImage = function (a, b) {
      var c, g, e, d, r, y, n, h;
      e = a.runtimeStyle.width;
      d = a.runtimeStyle.height;
      a.runtimeStyle.width = "auto";
      a.runtimeStyle.height = "auto";
      var l = a.width,
        u = a.height;
      a.runtimeStyle.width = e;
      a.runtimeStyle.height = d;
      if (3 == arguments.length)
        (c = arguments[1]),
          (g = arguments[2]),
          (r = y = 0),
          (n = e = l),
          (h = d = u);
      else if (5 == arguments.length)
        (c = arguments[1]),
          (g = arguments[2]),
          (e = arguments[3]),
          (d = arguments[4]),
          (r = y = 0),
          (n = l),
          (h = u);
      else if (9 == arguments.length)
        (r = arguments[1]),
          (y = arguments[2]),
          (n = arguments[3]),
          (h = arguments[4]),
          (c = arguments[5]),
          (g = arguments[6]),
          (e = arguments[7]),
          (d = arguments[8]);
      else throw Error("Invalid number of arguments");
      var m = s(this, c, g),
        p = [];
      p.push(
        " <g_vml_:group",
        ' coordsize="',
        10 * q,
        ",",
        10 * q,
        '"',
        ' coordorigin="0,0"',
        ' style="width:',
        10,
        "px;height:",
        10,
        "px;position:absolute;"
      );
      if (
        1 != this.m_[0][0] ||
        this.m_[0][1] ||
        1 != this.m_[1][1] ||
        this.m_[1][0]
      ) {
        var t = [];
        t.push(
          "M11=",
          this.m_[0][0],
          ",",
          "M12=",
          this.m_[1][0],
          ",",
          "M21=",
          this.m_[0][1],
          ",",
          "M22=",
          this.m_[1][1],
          ",",
          "Dx=",
          k(m.x / q),
          ",",
          "Dy=",
          k(m.y / q),
          ""
        );
        var v = s(this, c + e, g),
          w = s(this, c, g + d);
        c = s(this, c + e, g + d);
        m.x = x.max(m.x, v.x, w.x, c.x);
        m.y = x.max(m.y, v.y, w.y, c.y);
        p.push(
          "padding:0 ",
          k(m.x / q),
          "px ",
          k(m.y / q),
          "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",
          t.join(""),
          ", sizingmethod='clip');"
        );
      } else p.push("top:", k(m.y / q), "px;left:", k(m.x / q), "px;");
      p.push(
        ' ">',
        '<g_vml_:image src="',
        a.src,
        '"',
        ' style="width:',
        q * e,
        "px;",
        " height:",
        q * d,
        'px"',
        ' cropleft="',
        r / l,
        '"',
        ' croptop="',
        y / u,
        '"',
        ' cropright="',
        (l - r - n) / l,
        '"',
        ' cropbottom="',
        (u - y - h) / u,
        '"',
        " />",
        "</g_vml_:group>"
      );
      this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
    };
    d.stroke = function (a) {
      var b = [];
      b.push(
        "<g_vml_:shape",
        ' filled="',
        !!a,
        '"',
        ' style="position:absolute;width:',
        10,
        "px;height:",
        10,
        'px;"',
        ' coordorigin="0,0"',
        ' coordsize="',
        10 * q,
        ",",
        10 * q,
        '"',
        ' stroked="',
        !a,
        '"',
        ' path="'
      );
      for (
        var c = { x: null, y: null }, d = { x: null, y: null }, e = 0;
        e < this.currentPath_.length;
        e++
      ) {
        var f = this.currentPath_[e];
        switch (f.type) {
          case "moveTo":
            b.push(" m ", k(f.x), ",", k(f.y));
            break;
          case "lineTo":
            b.push(" l ", k(f.x), ",", k(f.y));
            break;
          case "close":
            b.push(" x ");
            f = null;
            break;
          case "bezierCurveTo":
            b.push(
              " c ",
              k(f.cp1x),
              ",",
              k(f.cp1y),
              ",",
              k(f.cp2x),
              ",",
              k(f.cp2y),
              ",",
              k(f.x),
              ",",
              k(f.y)
            );
            break;
          case "at":
          case "wa":
            b.push(
              " ",
              f.type,
              " ",
              k(f.x - this.arcScaleX_ * f.radius),
              ",",
              k(f.y - this.arcScaleY_ * f.radius),
              " ",
              k(f.x + this.arcScaleX_ * f.radius),
              ",",
              k(f.y + this.arcScaleY_ * f.radius),
              " ",
              k(f.xStart),
              ",",
              k(f.yStart),
              " ",
              k(f.xEnd),
              ",",
              k(f.yEnd)
            );
        }
        if (f) {
          if (null == c.x || f.x < c.x) c.x = f.x;
          if (null == d.x || f.x > d.x) d.x = f.x;
          if (null == c.y || f.y < c.y) c.y = f.y;
          if (null == d.y || f.y > d.y) d.y = f.y;
        }
      }
      b.push(' ">');
      a ? T(this, b, c, d) : S(this, b);
      b.push("</g_vml_:shape>");
      this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
    };
    d.fill = function () {
      this.stroke(!0);
    };
    d.closePath = function () {
      this.currentPath_.push({ type: "close" });
    };
    d.save = function () {
      var a = {};
      P(this, a);
      this.aStack_.push(a);
      this.mStack_.push(this.m_);
      this.m_ = t(D(), this.m_);
    };
    d.restore = function () {
      this.aStack_.length &&
        (P(this.aStack_.pop(), this), (this.m_ = this.mStack_.pop()));
    };
    d.translate = function (a, b) {
      z(
        this,
        t(
          [
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1],
          ],
          this.m_
        ),
        !1
      );
    };
    d.rotate = function (a) {
      var b = K(a);
      a = J(a);
      z(
        this,
        t(
          [
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1],
          ],
          this.m_
        ),
        !1
      );
    };
    d.scale = function (a, b) {
      this.arcScaleX_ *= a;
      this.arcScaleY_ *= b;
      z(
        this,
        t(
          [
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1],
          ],
          this.m_
        ),
        !0
      );
    };
    d.transform = function (a, b, c, d, e, f) {
      z(
        this,
        t(
          [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1],
          ],
          this.m_
        ),
        !0
      );
    };
    d.setTransform = function (a, b, c, d, e, f) {
      z(
        this,
        [
          [a, b, 0],
          [c, d, 0],
          [e, f, 1],
        ],
        !0
      );
    };
    d.drawText_ = function (a, b, c, d, e) {
      var f = this.m_;
      d = 0;
      var r = 1e3,
        t = 0,
        n = [],
        h;
      h = this.font;
      if (L[h]) h = L[h];
      else {
        var l = document.createElement("div").style;
        try {
          l.font = h;
        } catch (u) {}
        h = L[h] = {
          style: l.fontStyle || "normal",
          variant: l.fontVariant || "normal",
          weight: l.fontWeight || "normal",
          size: l.fontSize || 10,
          family: l.fontFamily || "sans-serif",
        };
      }
      var l = h,
        m = this.element_;
      h = {};
      for (var p in l) h[p] = l[p];
      p = parseFloat(m.currentStyle.fontSize);
      m = parseFloat(l.size);
      "number" == typeof l.size
        ? (h.size = l.size)
        : -1 != l.size.indexOf("px")
        ? (h.size = m)
        : -1 != l.size.indexOf("em")
        ? (h.size = p * m)
        : -1 != l.size.indexOf("%")
        ? (h.size = (p / 100) * m)
        : -1 != l.size.indexOf("pt")
        ? (h.size = m / 0.75)
        : (h.size = p);
      h.size *= 0.981;
      p =
        h.style +
        " " +
        h.variant +
        " " +
        h.weight +
        " " +
        h.size +
        "px " +
        h.family;
      m = this.element_.currentStyle;
      l = this.textAlign.toLowerCase();
      switch (l) {
        case "left":
        case "center":
        case "right":
          break;
        case "end":
          l = "ltr" == m.direction ? "right" : "left";
          break;
        case "start":
          l = "rtl" == m.direction ? "right" : "left";
          break;
        default:
          l = "left";
      }
      switch (this.textBaseline) {
        case "hanging":
        case "top":
          t = h.size / 1.75;
          break;
        case "middle":
          break;
        default:
        case null:
        case "alphabetic":
        case "ideographic":
        case "bottom":
          t = -h.size / 2.25;
      }
      switch (l) {
        case "right":
          d = 1e3;
          r = 0.05;
          break;
        case "center":
          d = r = 500;
      }
      b = s(this, b + 0, c + t);
      n.push(
        '<g_vml_:line from="',
        -d,
        ' 0" to="',
        r,
        ' 0.05" ',
        ' coordsize="100 100" coordorigin="0 0"',
        ' filled="',
        !e,
        '" stroked="',
        !!e,
        '" style="position:absolute;width:1px;height:1px;">'
      );
      e ? S(this, n) : T(this, n, { x: -d, y: 0 }, { x: r, y: h.size });
      e =
        f[0][0].toFixed(3) +
        "," +
        f[1][0].toFixed(3) +
        "," +
        f[0][1].toFixed(3) +
        "," +
        f[1][1].toFixed(3) +
        ",0,0";
      b = k(b.x / q) + "," + k(b.y / q);
      n.push(
        '<g_vml_:skew on="t" matrix="',
        e,
        '" ',
        ' offset="',
        b,
        '" origin="',
        d,
        ' 0" />',
        '<g_vml_:path textpathok="true" />',
        '<g_vml_:textpath on="true" string="',
        N(a),
        '" style="v-text-align:',
        l,
        ";font:",
        N(p),
        '" /></g_vml_:line>'
      );
      this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
    };
    d.fillText = function (a, b, c, d) {
      this.drawText_(a, b, c, d, !1);
    };
    d.strokeText = function (a, b, c, d) {
      this.drawText_(a, b, c, d, !0);
    };
    d.measureText = function (a) {
      this.textMeasureEl_ ||
        (this.element_.insertAdjacentHTML(
          "beforeEnd",
          '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'
        ),
        (this.textMeasureEl_ = this.element_.lastChild));
      var b = this.element_.ownerDocument;
      this.textMeasureEl_.innerHTML = "";
      this.textMeasureEl_.style.font = this.font;
      this.textMeasureEl_.appendChild(b.createTextNode(a));
      return { width: this.textMeasureEl_.offsetWidth };
    };
    d.clip = function () {};
    d.arcTo = function () {};
    d.createPattern = function (a, b) {
      return new I(a, b);
    };
    w.prototype.addColorStop = function (a, b) {
      b = G(b);
      this.colors_.push({ offset: a, color: b.color, alpha: b.alpha });
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR = 13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A;
  })();
/*tslint:enable*/
/*eslint-enable*/
/*jshint ignore:end*/
