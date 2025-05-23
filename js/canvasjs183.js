!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var t;
    (t =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this),
      (t.CanvasJS = e());
  }
})(function () {
  return (function () {
    function e(t, i, a) {
      function n(r, o) {
        if (!i[r]) {
          if (!t[r]) {
            var l = "function" == typeof require && require;
            if (!o && l) return l(r, !0);
            if (s) return s(r, !0);
            var h = new Error("Cannot find module '" + r + "'");
            throw ((h.code = "MODULE_NOT_FOUND"), h);
          }
          var d = (i[r] = { exports: {} });
          t[r][0].call(
            d.exports,
            function (e) {
              return n(t[r][1][e] || e);
            },
            d,
            d.exports,
            e,
            t,
            i,
            a
          );
        }
        return i[r].exports;
      }
      for (
        var s = "function" == typeof require && require, r = 0;
        r < a.length;
        r++
      )
        n(a[r]);
      return n;
    }
    return e;
  })()(
    {
      1: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              function t() {
                T &&
                  (x.lineThickness > 0 && i.stroke(),
                  e.axisY.viewportMinimum <= 0 && e.axisY.viewportMaximum >= 0
                    ? (b = S)
                    : e.axisY.viewportMaximum < 0
                    ? (b = r.y1)
                    : e.axisY.viewportMinimum > 0 && (b = n.y2),
                  i.lineTo(g, b),
                  i.lineTo(T.x, b),
                  i.closePath(),
                  (i.globalAlpha = x.fillOpacity),
                  i.fill(),
                  (i.globalAlpha = 1),
                  l.isCanvasSupported &&
                    (a.lineTo(g, b), a.lineTo(T.x, b), a.closePath(), a.fill()),
                  i.beginPath(),
                  i.moveTo(g, y),
                  a.beginPath(),
                  a.moveTo(g, y),
                  (T = { x: g, y: y }));
              }
              var i = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var a = this._eventManager.ghostCtx,
                  n = e.axisX.lineCoordinates,
                  r = e.axisY.lineCoordinates,
                  h = [],
                  d = this.plotArea;
                i.save(),
                  l.isCanvasSupported && a.save(),
                  i.beginPath(),
                  i.rect(d.x1, d.y1, d.width, d.height),
                  i.clip(),
                  l.isCanvasSupported &&
                    (a.beginPath(),
                    a.rect(d.x1, d.y1, d.width, d.height),
                    a.clip());
                for (var c = 0; c < e.dataSeriesIndexes.length; c++) {
                  var p = e.dataSeriesIndexes[c],
                    x = this.data[p],
                    u = x.dataPoints,
                    m = x.id;
                  this._eventManager.objectMap[m] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: p,
                  };
                  var v = (0, l.intToHexColorString)(m);
                  (a.fillStyle = v), (h = []);
                  var g,
                    y,
                    f,
                    b,
                    M = !0,
                    P = 0,
                    S =
                      (e.axisY.conversionParameters.reference +
                        e.axisY.conversionParameters.pixelPerUnit *
                          (0 - e.axisY.conversionParameters.minimum) +
                        0.5) <<
                      0,
                    T = null;
                  if (u.length > 0) {
                    var C = x._colorSet[P % x._colorSet.length];
                    (i.fillStyle = C),
                      (i.strokeStyle = C),
                      (i.lineWidth = x.lineThickness),
                      i.setLineDash &&
                        i.setLineDash(
                          (0, l.getLineDashArray)(
                            x.lineDashType,
                            x.lineThickness
                          )
                        );
                    for (var k = !0; P < u.length; P++)
                      if (
                        !(
                          (f = u[P].x.getTime ? u[P].x.getTime() : u[P].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          f > e.axisX.dataInfo.viewPortMax
                        )
                      )
                        if ("number" == typeof u[P].y) {
                          (g =
                            (e.axisX.conversionParameters.reference +
                              e.axisX.conversionParameters.pixelPerUnit *
                                (f - e.axisX.conversionParameters.minimum) +
                              0.5) <<
                            0),
                            (y =
                              (e.axisY.conversionParameters.reference +
                                e.axisY.conversionParameters.pixelPerUnit *
                                  (u[P].y -
                                    e.axisY.conversionParameters.minimum) +
                                0.5) <<
                              0),
                            M || k
                              ? (i.beginPath(),
                                i.moveTo(g, y),
                                (T = { x: g, y: y }),
                                l.isCanvasSupported &&
                                  (a.beginPath(), a.moveTo(g, y)),
                                (M = !1),
                                (k = !1))
                              : (i.lineTo(g, y),
                                l.isCanvasSupported && a.lineTo(g, y),
                                P % 250 == 0 && t());
                          var w = x.dataPointIds[P];
                          if (
                            ((this._eventManager.objectMap[w] = {
                              id: w,
                              objectType: "dataPoint",
                              dataSeriesIndex: p,
                              dataPointIndex: P,
                              x1: g,
                              y1: y,
                            }),
                            0 !== u[P].markerSize &&
                              (u[P].markerSize > 0 || x.markerSize > 0))
                          ) {
                            var _ = x.getMarkerProperties(P, g, y, i);
                            h.push(_);
                            var A = (0, l.intToHexColorString)(w);
                            l.isCanvasSupported &&
                              h.push({
                                x: g,
                                y: y,
                                ctx: a,
                                type: _.type,
                                size: _.size,
                                color: A,
                                borderColor: A,
                                borderThickness: _.borderThickness,
                              });
                          }
                          (u[P].indexLabel ||
                            x.indexLabel ||
                            u[P].indexLabelFormatter ||
                            x.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: "area",
                              dataPoint: u[P],
                              dataSeries: x,
                              point: { x: g, y: y },
                              direction: u[P].y >= 0 ? 1 : -1,
                              color: C,
                            });
                        } else t(), (k = !0);
                    t(), s.default.drawMarkers(h);
                  }
                }
                return (
                  i.restore(),
                  l.isCanvasSupported && this._eventManager.ghostCtx.restore(),
                  {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: o.default.xClipAnimation,
                    easingFunction: o.default.easing.linear,
                    animationBase: 0,
                  }
                );
              }
            });
          var n = e("../helpers/render"),
            s = a(n),
            r = e("../helpers/animator"),
            o = a(r),
            l = e("../helpers/utils");
        },
        {
          "../helpers/animator": 37,
          "../helpers/render": 38,
          "../helpers/utils": 39,
        },
      ],
      2: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var i,
                  a,
                  r,
                  o = null,
                  l = this.plotArea,
                  h = 0,
                  d =
                    (e.axisY.conversionParameters.reference +
                      e.axisY.conversionParameters.pixelPerUnit *
                        (0 - e.axisY.conversionParameters.minimum)) <<
                    0,
                  c = this.dataPointMaxWidth
                    ? this.dataPointMaxWidth
                    : Math.min(
                        0.15 * this.height,
                        (this.plotArea.height / e.plotType.totalDataSeries) *
                          0.9
                      ) << 0,
                  p = e.axisX.dataInfo.minDiff,
                  x =
                    ((((l.height /
                      Math.abs(
                        e.axisX.viewportMaximum - e.axisX.viewportMinimum
                      )) *
                      Math.abs(p)) /
                      e.plotType.totalDataSeries) *
                      0.9) <<
                    0;
                x > c
                  ? (x = c)
                  : p === 1 / 0
                  ? (x = (c / e.plotType.totalDataSeries) * 0.9)
                  : x < 1 && (x = 1),
                  t.save(),
                  s.isCanvasSupported && this._eventManager.ghostCtx.save(),
                  t.beginPath(),
                  t.rect(l.x1, l.y1, l.width, l.height),
                  t.clip(),
                  s.isCanvasSupported &&
                    (this._eventManager.ghostCtx.rect(
                      l.x1,
                      l.y1,
                      l.width,
                      l.height
                    ),
                    this._eventManager.ghostCtx.clip());
                for (var u = 0; u < e.dataSeriesIndexes.length; u++) {
                  var m = e.dataSeriesIndexes[u],
                    v = this.data[m],
                    g = v.dataPoints;
                  if (g.length > 0) {
                    var y = !!(x > 5 && v.bevelEnabled);
                    for (t.strokeStyle = "#4572A7 ", h = 0; h < g.length; h++)
                      if (
                        !(
                          (r = g[h].getTime ? g[h].x.getTime() : g[h].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          r > e.axisX.dataInfo.viewPortMax
                        ) &&
                        "number" == typeof g[h].y
                      ) {
                        (a =
                          (e.axisX.conversionParameters.reference +
                            e.axisX.conversionParameters.pixelPerUnit *
                              (r - e.axisX.conversionParameters.minimum) +
                            0.5) <<
                          0),
                          (i =
                            (e.axisY.conversionParameters.reference +
                              e.axisY.conversionParameters.pixelPerUnit *
                                (g[h].y -
                                  e.axisY.conversionParameters.minimum) +
                              0.5) <<
                            0);
                        var f,
                          b,
                          M =
                            (a -
                              (e.plotType.totalDataSeries * x) / 2 +
                              (e.previousDataSeriesCount + u) * x) <<
                            0,
                          P = (M + x) << 0;
                        g[h].y >= 0 ? ((f = d), (b = i)) : ((f = i), (b = d)),
                          (o = g[h].color
                            ? g[h].color
                            : v._colorSet[h % v._colorSet.length]),
                          (0, s.drawRect)(
                            t,
                            f,
                            M,
                            b,
                            P,
                            o,
                            0,
                            null,
                            y,
                            !1,
                            !1,
                            !1,
                            v.fillOpacity
                          );
                        var S = v.dataPointIds[h];
                        (this._eventManager.objectMap[S] = {
                          id: S,
                          objectType: "dataPoint",
                          dataSeriesIndex: m,
                          dataPointIndex: h,
                          x1: f,
                          y1: M,
                          x2: b,
                          y2: P,
                        }),
                          (o = (0, s.intToHexColorString)(S)),
                          s.isCanvasSupported &&
                            (0, s.drawRect)(
                              this._eventManager.ghostCtx,
                              f,
                              M,
                              b,
                              P,
                              o,
                              0,
                              null,
                              !1,
                              !1,
                              !1,
                              !1
                            ),
                          (g[h].indexLabel ||
                            v.indexLabel ||
                            g[h].indexLabelFormatter ||
                            v.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: "bar",
                              dataPoint: g[h],
                              dataSeries: v,
                              point: {
                                x: g[h].y >= 0 ? b : f,
                                y: M + (P - M) / 2,
                              },
                              direction: g[h].y >= 0 ? 1 : -1,
                              bounds: {
                                x1: Math.min(f, b),
                                y1: M,
                                x2: Math.max(f, b),
                                y2: P,
                              },
                              color: o,
                            });
                      }
                  }
                }
                t.restore(),
                  s.isCanvasSupported && this._eventManager.ghostCtx.restore();
                var T = Math.max(d, e.axisX.boundingRect.x2);
                return {
                  source: t,
                  dest: this.plotArea.ctx,
                  animationCallback: n.default.xScaleAnimation,
                  easingFunction: n.default.easing.easeOutQuart,
                  animationBase: T,
                };
              }
            });
          var a = e("../helpers/animator"),
            n = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(a),
            s = e("../helpers/utils");
        },
        { "../helpers/animator": 37, "../helpers/utils": 39 },
      ],
      3: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx,
                i = e.dataSeriesIndexes.length;
              if (!(i <= 0)) {
                var a,
                  n,
                  r,
                  h = this.plotArea,
                  d = 0,
                  c =
                    (e.axisY.conversionParameters.reference,
                    e.axisY.conversionParameters.pixelPerUnit,
                    e.axisY.conversionParameters.minimum,
                    this.dataPointMaxWidth
                      ? this.dataPointMaxWidth
                      : (0.15 * this.width) << 0),
                  p = e.axisX.dataInfo.minDiff,
                  x =
                    ((((h.width /
                      Math.abs(
                        e.axisX.viewportMaximum - e.axisX.viewportMinimum
                      )) *
                      Math.abs(p)) /
                      i) *
                      0.9) <<
                    0;
                t.save(),
                  l.isCanvasSupported && this._eventManager.ghostCtx.save(),
                  t.beginPath(),
                  t.rect(h.x1, h.y1, h.width, h.height),
                  t.clip(),
                  l.isCanvasSupported &&
                    (this._eventManager.ghostCtx.rect(
                      h.x1,
                      h.y1,
                      h.width,
                      h.height
                    ),
                    this._eventManager.ghostCtx.clip());
                for (
                  var u = -1 / 0, m = 1 / 0, v = 0;
                  v < e.dataSeriesIndexes.length;
                  v++
                )
                  for (
                    var g = e.dataSeriesIndexes[v],
                      y = this.data[g],
                      f = y.dataPoints,
                      b = 0,
                      d = 0;
                    d < f.length;
                    d++
                  )
                    (r = r = f[d].getTime ? f[d].x.getTime() : f[d].x) <
                      e.axisX.dataInfo.viewPortMin ||
                      r > e.axisX.dataInfo.viewPortMax ||
                      (void 0 !== f[d].z &&
                        ((b = f[d].z), b > u && (u = b), b < m && (m = b)));
                for (
                  var M = 5 * Math.PI * 5,
                    P = Math.max(
                      Math.pow((0.25 * Math.min(h.height, h.width)) / 2, 2) *
                        Math.PI,
                      M
                    ),
                    v = 0;
                  v < e.dataSeriesIndexes.length;
                  v++
                ) {
                  var g = e.dataSeriesIndexes[v],
                    y = this.data[g],
                    f = y.dataPoints;
                  if (
                    (1 == f.length && (x = c),
                    x < 1 ? (x = 1) : x > c && (x = c),
                    f.length > 0)
                  ) {
                    t.strokeStyle = "#4572A7 ";
                    for (var d = 0; d < f.length; d++)
                      if (
                        !(
                          (r = r = f[d].getTime ? f[d].x.getTime() : f[d].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          r > e.axisX.dataInfo.viewPortMax
                        ) &&
                        "number" == typeof f[d].y
                      ) {
                        (a =
                          (e.axisX.conversionParameters.reference +
                            e.axisX.conversionParameters.pixelPerUnit *
                              (r - e.axisX.conversionParameters.minimum) +
                            0.5) <<
                          0),
                          (n =
                            (e.axisY.conversionParameters.reference +
                              e.axisY.conversionParameters.pixelPerUnit *
                                (f[d].y -
                                  e.axisY.conversionParameters.minimum) +
                              0.5) <<
                            0);
                        var b = f[d].z,
                          S =
                            u === m ? P / 2 : M + ((P - M) / (u - m)) * (b - m),
                          T = Math.max(Math.sqrt(S / Math.PI) << 0, 1),
                          C = 2 * T,
                          k = y.getMarkerProperties(d, t);
                        (k.size = C),
                          (t.globalAlpha = y.fillOpacity),
                          s.default.drawMarker(
                            a,
                            n,
                            t,
                            k.type,
                            k.size,
                            k.color,
                            k.borderColor,
                            k.borderThickness
                          ),
                          (t.globalAlpha = 1);
                        var w = y.dataPointIds[d];
                        this._eventManager.objectMap[w] = {
                          id: w,
                          objectType: "dataPoint",
                          dataSeriesIndex: g,
                          dataPointIndex: d,
                          x1: a,
                          y1: n,
                          size: C,
                        };
                        var _ = (0, l.intToHexColorString)(w);
                        l.isCanvasSupported &&
                          s.default.drawMarker(
                            a,
                            n,
                            this._eventManager.ghostCtx,
                            k.type,
                            k.size,
                            _,
                            _,
                            k.borderThickness
                          ),
                          (f[d].indexLabel ||
                            y.indexLabel ||
                            f[d].indexLabelFormatter ||
                            y.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: "bubble",
                              dataPoint: f[d],
                              dataSeries: y,
                              point: { x: a, y: n },
                              direction: 1,
                              bounds: {
                                x1: a - k.size / 2,
                                y1: n - k.size / 2,
                                x2: a + k.size / 2,
                                y2: n + k.size / 2,
                              },
                              color: null,
                            });
                      }
                  }
                }
                t.restore(),
                  l.isCanvasSupported && this._eventManager.ghostCtx.restore();
                return {
                  source: t,
                  dest: this.plotArea.ctx,
                  animationCallback: o.default.fadeInAnimation,
                  easingFunction: o.default.easing.easeInQuad,
                  animationBase: 0,
                };
              }
            });
          var n = e("../helpers/render"),
            s = a(n),
            r = e("../helpers/animator"),
            o = a(r),
            l = e("../helpers/utils");
        },
        {
          "../helpers/animator": 37,
          "../helpers/render": 38,
          "../helpers/utils": 39,
        },
      ],
      4: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx,
                i = this._eventManager.ghostCtx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var n,
                  s,
                  r,
                  o,
                  l,
                  h,
                  d = null,
                  c = this.plotArea,
                  p = 0,
                  x =
                    (e.axisY.conversionParameters.reference,
                    e.axisY.conversionParameters.pixelPerUnit,
                    e.axisY.conversionParameters.minimum,
                    this.dataPointMaxWidth
                      ? this.dataPointMaxWidth
                      : 0.015 * this.width),
                  u = e.axisX.dataInfo.minDiff,
                  m =
                    ((c.width /
                      Math.abs(
                        e.axisX.viewportMaximum - e.axisX.viewportMinimum
                      )) *
                      Math.abs(u) *
                      0.7) <<
                    0;
                m > x ? (m = x) : u === 1 / 0 ? (m = x) : m < 1 && (m = 1),
                  t.save(),
                  a.isCanvasSupported && i.save(),
                  t.beginPath(),
                  t.rect(c.x1, c.y1, c.width, c.height),
                  t.clip(),
                  a.isCanvasSupported &&
                    (i.rect(c.x1, c.y1, c.width, c.height), i.clip());
                for (var v = 0; v < e.dataSeriesIndexes.length; v++) {
                  var g = e.dataSeriesIndexes[v],
                    y = this.data[g],
                    f = y.dataPoints;
                  if (f.length > 0) {
                    var b = !!(m > 5 && y.bevelEnabled);
                    for (p = 0; p < f.length; p++)
                      if (
                        !(
                          (h = f[p].getTime ? f[p].x.getTime() : f[p].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          h > e.axisX.dataInfo.viewPortMax
                        ) &&
                        null !== f[p].y &&
                        f[p].y.length &&
                        "number" == typeof f[p].y[0] &&
                        "number" == typeof f[p].y[1] &&
                        "number" == typeof f[p].y[2] &&
                        "number" == typeof f[p].y[3]
                      ) {
                        (n =
                          (e.axisX.conversionParameters.reference +
                            e.axisX.conversionParameters.pixelPerUnit *
                              (h - e.axisX.conversionParameters.minimum) +
                            0.5) <<
                          0),
                          (s =
                            (e.axisY.conversionParameters.reference +
                              e.axisY.conversionParameters.pixelPerUnit *
                                (f[p].y[0] -
                                  e.axisY.conversionParameters.minimum) +
                              0.5) <<
                            0),
                          (r =
                            (e.axisY.conversionParameters.reference +
                              e.axisY.conversionParameters.pixelPerUnit *
                                (f[p].y[1] -
                                  e.axisY.conversionParameters.minimum) +
                              0.5) <<
                            0),
                          (o =
                            (e.axisY.conversionParameters.reference +
                              e.axisY.conversionParameters.pixelPerUnit *
                                (f[p].y[2] -
                                  e.axisY.conversionParameters.minimum) +
                              0.5) <<
                            0),
                          (l =
                            (e.axisY.conversionParameters.reference +
                              e.axisY.conversionParameters.pixelPerUnit *
                                (f[p].y[3] -
                                  e.axisY.conversionParameters.minimum) +
                              0.5) <<
                            0);
                        var M = (n - m / 2) << 0,
                          P = (M + m) << 0;
                        d = f[p].color ? f[p].color : y._colorSet[0];
                        var S = Math.round(Math.max(1, 0.15 * m)),
                          T = S % 2 == 0 ? 0 : 0.5,
                          C = y.dataPointIds[p];
                        (this._eventManager.objectMap[C] = {
                          id: C,
                          objectType: "dataPoint",
                          dataSeriesIndex: g,
                          dataPointIndex: p,
                          x1: M,
                          y1: s,
                          x2: P,
                          y2: r,
                          x3: n,
                          y3: o,
                          x4: n,
                          y4: l,
                          borderThickness: S,
                          color: d,
                        }),
                          (t.strokeStyle = d),
                          t.beginPath(),
                          (t.lineWidth = S),
                          (i.lineWidth = Math.max(S, 4)),
                          "candlestick" === y.type
                            ? (t.moveTo(n - T, r),
                              t.lineTo(n - T, Math.min(s, l)),
                              t.stroke(),
                              t.moveTo(n - T, Math.max(s, l)),
                              t.lineTo(n - T, o),
                              t.stroke(),
                              drawRect(
                                t,
                                M,
                                Math.min(s, l),
                                P,
                                Math.max(s, l),
                                f[p].y[0] <= f[p].y[3] ? y.risingColor : d,
                                S,
                                d,
                                b,
                                b,
                                !1,
                                !1,
                                y.fillOpacity
                              ),
                              a.isCanvasSupported &&
                                ((d = intToHexColorString(C)),
                                (i.strokeStyle = d),
                                i.moveTo(n - T, r),
                                i.lineTo(n - T, Math.min(s, l)),
                                i.stroke(),
                                i.moveTo(n - T, Math.max(s, l)),
                                i.lineTo(n - T, o),
                                i.stroke(),
                                drawRect(
                                  i,
                                  M,
                                  Math.min(s, l),
                                  P,
                                  Math.max(s, l),
                                  d,
                                  0,
                                  null,
                                  !1,
                                  !1,
                                  !1,
                                  !1
                                )))
                            : "ohlc" === y.type &&
                              (t.moveTo(n - T, r),
                              t.lineTo(n - T, o),
                              t.stroke(),
                              t.beginPath(),
                              t.moveTo(n, s),
                              t.lineTo(M, s),
                              t.stroke(),
                              t.beginPath(),
                              t.moveTo(n, l),
                              t.lineTo(P, l),
                              t.stroke(),
                              a.isCanvasSupported &&
                                ((d = intToHexColorString(C)),
                                (i.strokeStyle = d),
                                i.moveTo(n - T, r),
                                i.lineTo(n - T, o),
                                i.stroke(),
                                i.beginPath(),
                                i.moveTo(n, s),
                                i.lineTo(M, s),
                                i.stroke(),
                                i.beginPath(),
                                i.moveTo(n, l),
                                i.lineTo(P, l),
                                i.stroke())),
                          (f[p].indexLabel ||
                            y.indexLabel ||
                            f[p].indexLabelFormatter ||
                            y.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: y.type,
                              dataPoint: f[p],
                              dataSeries: y,
                              point: { x: M + (P - M) / 2, y: r },
                              direction: 1,
                              bounds: {
                                x1: M,
                                y1: Math.min(r, o),
                                x2: P,
                                y2: Math.max(r, o),
                              },
                              color: d,
                            });
                      }
                  }
                }
                return (
                  t.restore(),
                  a.isCanvasSupported && i.restore(),
                  {
                    source: t,
                    dest: this.plotArea.ctx,
                    animationCallback: AnimationHelper.fadeInAnimation,
                    easingFunction: AnimationHelper.easing.easeInQuad,
                    animationBase: 0,
                  }
                );
              }
            });
          var a = e("../helpers/utils");
        },
        { "../helpers/utils": 39 },
      ],
      5: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var i,
                  a,
                  r,
                  o = null,
                  l = this.plotArea,
                  h = 0,
                  d =
                    (e.axisY.conversionParameters.reference +
                      e.axisY.conversionParameters.pixelPerUnit *
                        (0 - e.axisY.conversionParameters.minimum)) <<
                    0,
                  c = this.dataPointMaxWidth
                    ? this.dataPointMaxWidth
                    : Math.min(
                        0.15 * this.width,
                        (this.plotArea.width / e.plotType.totalDataSeries) * 0.9
                      ) << 0,
                  p = e.axisX.dataInfo.minDiff,
                  x =
                    ((((l.width /
                      Math.abs(
                        e.axisX.viewportMaximum - e.axisX.viewportMinimum
                      )) *
                      Math.abs(p)) /
                      e.plotType.totalDataSeries) *
                      0.9) <<
                    0;
                x > c
                  ? (x = c)
                  : p === 1 / 0
                  ? (x = (c / e.plotType.totalDataSeries) * 0.9)
                  : x < 1 && (x = 1),
                  t.save(),
                  s.isCanvasSupported && this._eventManager.ghostCtx.save(),
                  t.beginPath(),
                  t.rect(l.x1, l.y1, l.width, l.height),
                  t.clip(),
                  s.isCanvasSupported &&
                    (this._eventManager.ghostCtx.rect(
                      l.x1,
                      l.y1,
                      l.width,
                      l.height
                    ),
                    this._eventManager.ghostCtx.clip());
                for (var u = 0; u < e.dataSeriesIndexes.length; u++) {
                  var m = e.dataSeriesIndexes[u],
                    v = this.data[m],
                    g = v.dataPoints;
                  if (g.length > 0) {
                    var y = !!(x > 5 && v.bevelEnabled);
                    for (h = 0; h < g.length; h++)
                      if (
                        !(
                          (r = g[h].getTime ? g[h].x.getTime() : g[h].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          r > e.axisX.dataInfo.viewPortMax
                        ) &&
                        "number" == typeof g[h].y
                      ) {
                        (i =
                          (e.axisX.conversionParameters.reference +
                            e.axisX.conversionParameters.pixelPerUnit *
                              (r - e.axisX.conversionParameters.minimum) +
                            0.5) <<
                          0),
                          (a =
                            (e.axisY.conversionParameters.reference +
                              e.axisY.conversionParameters.pixelPerUnit *
                                (g[h].y -
                                  e.axisY.conversionParameters.minimum) +
                              0.5) <<
                            0);
                        var f,
                          b,
                          M =
                            (i -
                              (e.plotType.totalDataSeries * x) / 2 +
                              (e.previousDataSeriesCount + u) * x) <<
                            0,
                          P = (M + x) << 0;
                        g[h].y >= 0
                          ? ((f = a), (b = d), f > b && ((f = b), (b = f)))
                          : ((b = a), (f = d) > b && ((f = b), (b = f))),
                          (o = g[h].color
                            ? g[h].color
                            : v._colorSet[h % v._colorSet.length]),
                          (0, s.drawRect)(
                            t,
                            M,
                            f,
                            P,
                            b,
                            o,
                            0,
                            null,
                            y && g[h].y >= 0,
                            g[h].y < 0 && y,
                            !1,
                            !1,
                            v.fillOpacity
                          );
                        var S = v.dataPointIds[h];
                        (this._eventManager.objectMap[S] = {
                          id: S,
                          objectType: "dataPoint",
                          dataSeriesIndex: m,
                          dataPointIndex: h,
                          x1: M,
                          y1: f,
                          x2: P,
                          y2: b,
                        }),
                          (o = (0, s.intToHexColorString)(S)),
                          s.isCanvasSupported &&
                            (0, s.drawRect)(
                              this._eventManager.ghostCtx,
                              M,
                              f,
                              P,
                              b,
                              o,
                              0,
                              null,
                              !1,
                              !1,
                              !1,
                              !1
                            ),
                          (g[h].indexLabel ||
                            v.indexLabel ||
                            g[h].indexLabelFormatter ||
                            v.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: "column",
                              dataPoint: g[h],
                              dataSeries: v,
                              point: {
                                x: M + (P - M) / 2,
                                y: g[h].y >= 0 ? f : b,
                              },
                              direction: g[h].y >= 0 ? 1 : -1,
                              bounds: {
                                x1: M,
                                y1: Math.min(f, b),
                                x2: P,
                                y2: Math.max(f, b),
                              },
                              color: o,
                            });
                      }
                  }
                }
                t.restore(),
                  s.isCanvasSupported && this._eventManager.ghostCtx.restore();
                var T = Math.min(d, e.axisY.boundingRect.y2);
                return {
                  source: t,
                  dest: this.plotArea.ctx,
                  animationCallback: n.default.yScaleAnimation,
                  easingFunction: n.default.easing.easeOutQuart,
                  animationBase: T,
                };
              }
            });
          var a = e("../helpers/animator"),
            n = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(a),
            s = e("../helpers/utils");
        },
        { "../helpers/animator": 37, "../helpers/utils": 39 },
      ],
      6: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.PieChart =
              i.RangeSplineAreaChart =
              i.RangeAreaChart =
              i.RangeBarChart =
              i.RangeColumnChart =
              i.CandlestickChart =
              i.ScatterChart =
              i.BubbleChart =
              i.StackedArea100Chart =
              i.StackedAreaChart =
              i.StepAreaChart =
              i.SplineAreaChart =
              i.AreaChart =
              i.StackedBar100Chart =
              i.StackedBarChart =
              i.BarChart =
              i.StackedColumn100Chart =
              i.StackedColumnChart =
              i.ColumnChart =
              i.SplineChart =
                void 0);
          var n = e("../charts/spline"),
            s = a(n),
            r = e("../charts/column"),
            o = a(r),
            l = e("../charts/stacked_column"),
            h = a(l),
            d = e("../charts/stacked_column_100"),
            c = a(d),
            p = e("../charts/bar"),
            x = a(p),
            u = e("../charts/stacked_bar"),
            m = a(u),
            v = e("../charts/stacked_bar_100"),
            g = a(v),
            y = e("../charts/area"),
            f = a(y),
            b = e("../charts/spline_area"),
            M = a(b),
            P = e("../charts/step_area"),
            S = a(P),
            T = e("../charts/stacked_area"),
            C = a(T),
            k = e("../charts/stacked_area_100"),
            w = a(k),
            _ = e("../charts/bubble"),
            A = a(_),
            L = e("../charts/scatter"),
            I = a(L),
            B = e("../charts/candlestick"),
            F = a(B),
            z = e("../charts/range_column"),
            D = a(z),
            X = e("../charts/range_bar"),
            Y = a(X),
            O = e("../charts/range_area"),
            E = a(O),
            W = e("../charts/range_spline_area"),
            R = a(W),
            H = e("../charts/pie"),
            V = a(H);
          (i.SplineChart = s.default),
            (i.ColumnChart = o.default),
            (i.StackedColumnChart = h.default),
            (i.StackedColumn100Chart = c.default),
            (i.BarChart = x.default),
            (i.StackedBarChart = m.default),
            (i.StackedBar100Chart = g.default),
            (i.AreaChart = f.default),
            (i.SplineAreaChart = M.default),
            (i.StepAreaChart = S.default),
            (i.StackedAreaChart = C.default),
            (i.StackedArea100Chart = w.default),
            (i.BubbleChart = A.default),
            (i.ScatterChart = I.default),
            (i.CandlestickChart = F.default),
            (i.RangeColumnChart = D.default),
            (i.RangeBarChart = Y.default),
            (i.RangeAreaChart = E.default),
            (i.RangeSplineAreaChart = R.default),
            (i.PieChart = V.default);
        },
        {
          "../charts/area": 1,
          "../charts/bar": 2,
          "../charts/bubble": 3,
          "../charts/candlestick": 4,
          "../charts/column": 5,
          "../charts/pie": 7,
          "../charts/range_area": 8,
          "../charts/range_bar": 9,
          "../charts/range_column": 10,
          "../charts/range_spline_area": 11,
          "../charts/scatter": 12,
          "../charts/spline": 13,
          "../charts/spline_area": 14,
          "../charts/stacked_area": 15,
          "../charts/stacked_area_100": 16,
          "../charts/stacked_bar": 17,
          "../charts/stacked_bar_100": 18,
          "../charts/stacked_column": 19,
          "../charts/stacked_column_100": 20,
          "../charts/step_area": 21,
        },
      ],
      7: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              function t() {
                var e = x.plotArea.ctx;
                (e.fillStyle = "black"), (e.strokeStyle = "grey");
                (e.textBaseline = "middle"), (e.lineJoin = "round");
                var t = 0;
                for (t = 0; t < v.length; t++) {
                  var i = f[t];
                  if (i.indexLabelText) {
                    i.indexLabelTextBlock.y -= i.indexLabelTextBlock.height / 2;
                    var a = 0;
                    if ("left" === i.hemisphere)
                      var a =
                        "inside" !== m.indexLabelPlacement
                          ? -(i.indexLabelTextBlock.width + g)
                          : -i.indexLabelTextBlock.width / 2;
                    else
                      var a =
                        "inside" !== m.indexLabelPlacement
                          ? g
                          : -i.indexLabelTextBlock.width / 2;
                    if (
                      ((i.indexLabelTextBlock.x += a),
                      i.indexLabelTextBlock.render(!0),
                      (i.indexLabelTextBlock.x -= a),
                      (i.indexLabelTextBlock.y +=
                        i.indexLabelTextBlock.height / 2),
                      "inside" !== i.indexLabelPlacement)
                    ) {
                      var n = i.center.x + _ * Math.cos(i.midAngle),
                        r = i.center.y + _ * Math.sin(i.midAngle);
                      (e.strokeStyle = i.indexLabelLineColor),
                        (e.lineWidth = i.indexLabelLineThickness),
                        e.setLineDash &&
                          e.setLineDash(
                            (0, s.getLineDashArray)(
                              i.indexLabelLineDashType,
                              i.indexLabelLineThickness
                            )
                          ),
                        e.beginPath(),
                        e.moveTo(n, r),
                        e.lineTo(
                          i.indexLabelTextBlock.x,
                          i.indexLabelTextBlock.y
                        ),
                        e.lineTo(
                          i.indexLabelTextBlock.x +
                            ("left" === i.hemisphere ? -g : g),
                          i.indexLabelTextBlock.y
                        ),
                        e.stroke();
                    }
                    e.lineJoin = "miter";
                  }
                }
              }
              function i(e) {
                var t = x.plotArea.ctx;
                t.clearRect(y.x1, y.y1, y.width, y.height),
                  (t.fillStyle = x.backgroundColor),
                  t.fillRect(y.x1, y.y1, y.width, y.height);
                for (
                  var i = f[0].startAngle + 2 * Math.PI * e, a = 0;
                  a < v.length;
                  a++
                ) {
                  var n = 0 === a ? f[a].startAngle : r,
                    r = n + (f[a].endAngle - f[a].startAngle),
                    o = !1;
                  r > i && ((r = i), (o = !0));
                  var l = v[a].color
                    ? v[a].color
                    : m._colorSet[a % m._colorSet.length];
                  if (
                    (r > n &&
                      (0, s.drawSegment)(
                        x.plotArea.ctx,
                        f[a].center,
                        f[a].radius,
                        l,
                        m.type,
                        n,
                        r,
                        m.fillOpacity,
                        f[a].percentInnerRadius
                      ),
                    o)
                  )
                    break;
                }
              }
              function a(e) {
                var i = x.plotArea.ctx;
                i.clearRect(y.x1, y.y1, y.width, y.height),
                  (i.fillStyle = x.backgroundColor),
                  i.fillRect(y.x1, y.y1, y.width, y.height);
                for (var a = 0; a < v.length; a++) {
                  var n = f[a].startAngle,
                    r = f[a].endAngle;
                  if (r > n) {
                    var o = 0.07 * _ * Math.cos(f[a].midAngle),
                      l = 0.07 * _ * Math.sin(f[a].midAngle),
                      h = !1;
                    if (
                      (v[a].exploded
                        ? (Math.abs(f[a].center.x - (T.x + o)) > 1e-9 ||
                            Math.abs(f[a].center.y - (T.y + l)) > 1e-9) &&
                          ((f[a].center.x = T.x + o * e),
                          (f[a].center.y = T.y + l * e),
                          (h = !0))
                        : (Math.abs(f[a].center.x - T.x) > 0 ||
                            Math.abs(f[a].center.y - T.y) > 0) &&
                          ((f[a].center.x = T.x + o * (1 - e)),
                          (f[a].center.y = T.y + l * (1 - e)),
                          (h = !0)),
                      h)
                    ) {
                      var d = {};
                      (d.dataSeries = m),
                        (d.dataPoint = m.dataPoints[a]),
                        (d.index = a),
                        x._toolTip.highlightObjects([d]);
                    }
                    var c = v[a].color
                      ? v[a].color
                      : m._colorSet[a % m._colorSet.length];
                    (0, s.drawSegment)(
                      x.plotArea.ctx,
                      f[a].center,
                      f[a].radius,
                      c,
                      m.type,
                      n,
                      r,
                      m.fillOpacity,
                      f[a].percentInnerRadius
                    );
                  }
                }
                t();
              }
              function r(e, t) {
                var i = {
                    x1: e.indexLabelTextBlock.x,
                    y1:
                      e.indexLabelTextBlock.y -
                      e.indexLabelTextBlock.height / 2,
                    x2: e.indexLabelTextBlock.x + e.indexLabelTextBlock.width,
                    y2:
                      e.indexLabelTextBlock.y +
                      e.indexLabelTextBlock.height / 2,
                  },
                  a = {
                    x1: t.indexLabelTextBlock.x,
                    y1:
                      t.indexLabelTextBlock.y -
                      t.indexLabelTextBlock.height / 2,
                    x2: t.indexLabelTextBlock.x + t.indexLabelTextBlock.width,
                    y2:
                      t.indexLabelTextBlock.y +
                      t.indexLabelTextBlock.height / 2,
                  };
                return !(
                  i.x2 < a.x1 - g ||
                  i.x1 > a.x2 + g ||
                  i.y1 > a.y2 + g ||
                  i.y2 < a.y1 - g
                );
              }
              function o(e, t) {
                var i = {
                    y: e.indexLabelTextBlock.y,
                    y1:
                      e.indexLabelTextBlock.y -
                      e.indexLabelTextBlock.height / 2,
                    y2:
                      e.indexLabelTextBlock.y +
                      e.indexLabelTextBlock.height / 2,
                  },
                  a = {
                    y: t.indexLabelTextBlock.y,
                    y1:
                      t.indexLabelTextBlock.y -
                      t.indexLabelTextBlock.height / 2,
                    y2:
                      t.indexLabelTextBlock.y +
                      t.indexLabelTextBlock.height / 2,
                  };
                return a.y > i.y ? a.y1 - i.y2 : i.y1 - a.y2;
              }
              function l(e) {
                for (var t = null, i = 1; i < v.length; i++) {
                  if (
                    ((t = (e + i + f.length) % f.length),
                    f[t].hemisphere !== f[e].hemisphere)
                  ) {
                    t = null;
                    break;
                  }
                  if (
                    f[t].indexLabelText &&
                    t !== e &&
                    (o(f[t], f[e]) < 0 ||
                      ("right" === f[e].hemisphere
                        ? f[t].indexLabelTextBlock.y >=
                          f[e].indexLabelTextBlock.y
                        : f[t].indexLabelTextBlock.y <=
                          f[e].indexLabelTextBlock.y))
                  )
                    break;
                  t = null;
                }
                return t;
              }
              function h(e) {
                for (var t = null, i = 1; i < v.length; i++) {
                  if (
                    ((t = (e - i + f.length) % f.length),
                    f[t].hemisphere !== f[e].hemisphere)
                  ) {
                    t = null;
                    break;
                  }
                  if (
                    f[t].indexLabelText &&
                    f[t].hemisphere === f[e].hemisphere &&
                    t !== e &&
                    (o(f[t], f[e]) < 0 ||
                      ("right" === f[e].hemisphere
                        ? f[t].indexLabelTextBlock.y <=
                          f[e].indexLabelTextBlock.y
                        : f[t].indexLabelTextBlock.y >=
                          f[e].indexLabelTextBlock.y))
                  )
                    break;
                  t = null;
                }
                return t;
              }
              function d(e, t) {
                t = t || 0;
                var i = 0,
                  a = T.y - 1 * indexLabelRadius,
                  n = T.y + 1 * indexLabelRadius;
                if (e >= 0 && e < v.length) {
                  var s = f[e];
                  if (
                    (t < 0 && s.indexLabelTextBlock.y < a) ||
                    (t > 0 && s.indexLabelTextBlock.y > n)
                  )
                    return 0;
                  var r = t,
                    o = 0,
                    c = 0,
                    p = 0,
                    x = 0,
                    u = 0;
                  r < 0
                    ? s.indexLabelTextBlock.y -
                        s.indexLabelTextBlock.height / 2 >
                        a &&
                      s.indexLabelTextBlock.y -
                        s.indexLabelTextBlock.height / 2 +
                        r <
                        a &&
                      (r = -(
                        a -
                        (s.indexLabelTextBlock.y -
                          s.indexLabelTextBlock.height / 2 +
                          r)
                      ))
                    : s.indexLabelTextBlock.y +
                        s.indexLabelTextBlock.height / 2 <
                        a &&
                      s.indexLabelTextBlock.y +
                        s.indexLabelTextBlock.height / 2 +
                        r >
                        n &&
                      (r =
                        s.indexLabelTextBlock.y +
                        s.indexLabelTextBlock.height / 2 +
                        r -
                        n);
                  var m = s.indexLabelTextBlock.y + r,
                    g = 0;
                  (g =
                    "right" === s.hemisphere
                      ? T.x +
                        Math.sqrt(
                          Math.pow(indexLabelRadius, 2) - Math.pow(m - T.y, 2)
                        )
                      : T.x -
                        Math.sqrt(
                          Math.pow(indexLabelRadius, 2) - Math.pow(m - T.y, 2)
                        )),
                    (c = T.x + _ * Math.cos(s.midAngle)),
                    (p = T.y + _ * Math.sin(s.midAngle)),
                    (o = Math.sqrt(Math.pow(g - c, 2) + Math.pow(m - p, 2))),
                    (u = Math.acos(_ / indexLabelRadius)),
                    (x = Math.acos(
                      (indexLabelRadius * indexLabelRadius + _ * _ - o * o) /
                        (2 * _ * indexLabelRadius)
                    )),
                    (r = x < u ? m - s.indexLabelTextBlock.y : 0);
                  var y,
                    M,
                    C = h(e),
                    k = l(e),
                    w = 0,
                    A = 0;
                  if (r < 0) {
                    if (
                      ((y = "right" === s.hemisphere ? C : k),
                      (i = r),
                      null !== y)
                    ) {
                      var L = -r,
                        M =
                          s.indexLabelTextBlock.y -
                          s.indexLabelTextBlock.height / 2 -
                          (f[y].indexLabelTextBlock.y +
                            f[y].indexLabelTextBlock.height / 2);
                      M - L < b &&
                        ((w = -L),
                        (A = d(y, w, recursionCount + 1)),
                        +A.toFixed(S) > +w.toFixed(S) &&
                          (i = M > b ? -(M - b) : -(L - (A - w))));
                    }
                  } else if (
                    r > 0 &&
                    ((y = "right" === s.hemisphere ? k : C),
                    (i = r),
                    null !== y)
                  ) {
                    var L = r,
                      M =
                        f[y].indexLabelTextBlock.y -
                        f[y].indexLabelTextBlock.height / 2 -
                        (s.indexLabelTextBlock.y +
                          s.indexLabelTextBlock.height / 2);
                    M - L < b &&
                      ((w = L),
                      (A = d(y, w, recursionCount + 1)),
                      +A.toFixed(S) < +w.toFixed(S) &&
                        (i = M > b ? M - b : L - (w - A)));
                  }
                  if (i) {
                    var I = s.indexLabelTextBlock.y + i,
                      B = 0;
                    if (
                      ((B =
                        "right" === s.hemisphere
                          ? T.x +
                            Math.sqrt(
                              Math.pow(indexLabelRadius, 2) -
                                Math.pow(I - T.y, 2)
                            )
                          : T.x -
                            Math.sqrt(
                              Math.pow(indexLabelRadius, 2) -
                                Math.pow(I - T.y, 2)
                            )),
                      s.midAngle > Math.PI / 2 - P &&
                        s.midAngle < Math.PI / 2 + P)
                    ) {
                      var F = (e - 1 + f.length) % f.length,
                        z = f[F],
                        D = f[(e + 1 + f.length) % f.length];
                      "left" === s.hemisphere &&
                      "right" === z.hemisphere &&
                      B > z.indexLabelTextBlock.x
                        ? (B = z.indexLabelTextBlock.x - 15)
                        : "right" === s.hemisphere &&
                          "left" === D.hemisphere &&
                          B < D.indexLabelTextBlock.x &&
                          (B = D.indexLabelTextBlock.x + 15);
                    } else if (
                      s.midAngle > (3 * Math.PI) / 2 - P &&
                      s.midAngle < (3 * Math.PI) / 2 + P
                    ) {
                      var F = (e - 1 + f.length) % f.length,
                        z = f[F],
                        D = f[(e + 1 + f.length) % f.length];
                      "right" === s.hemisphere &&
                      "left" === z.hemisphere &&
                      B < z.indexLabelTextBlock.x
                        ? (B = z.indexLabelTextBlock.x + 15)
                        : "left" === s.hemisphere &&
                          "right" === D.hemisphere &&
                          B > D.indexLabelTextBlock.x &&
                          (B = D.indexLabelTextBlock.x - 15);
                    }
                    (s.indexLabelTextBlock.y = I),
                      (s.indexLabelTextBlock.x = B),
                      (s.indexLabelAngle = Math.atan2(
                        s.indexLabelTextBlock.y - T.y,
                        s.indexLabelTextBlock.x - T.x
                      ));
                  }
                }
                return i;
              }
              function c() {
                var e = x.plotArea.ctx;
                (e.fillStyle = "grey"), (e.strokeStyle = "grey");
                (e.font = "16px Arial"), (e.textBaseline = "middle");
                var t = 0,
                  i = 0,
                  a = 0,
                  n = !0;
                for (i = 0; i < 10 && (i < 1 || a > 0); i++) {
                  var s,
                    h,
                    c,
                    p,
                    h,
                    u,
                    P,
                    C,
                    k,
                    w,
                    I,
                    B,
                    F,
                    z,
                    h,
                    D,
                    X,
                    Y,
                    O,
                    E,
                    W,
                    R,
                    H,
                    V;
                  !(function () {
                    function e(e, t, i) {
                      for (
                        var a = [], n = 0, s = t;
                        !0 && (a.push(f[s]), s !== i);
                        s = (s + 1 + v.length) % v.length
                      );
                      for (
                        a.sort(function (e, t) {
                          return e.y - t.y;
                        }),
                          s = 0;
                        s < a.length;
                        s++
                      ) {
                        var r = a[s];
                        if (!(n < 0.7 * e)) break;
                        (n += r.indexLabelTextBlock.height),
                          (r.indexLabelTextBlock.text = ""),
                          (r.indexLabelText = ""),
                          r.indexLabelTextBlock.measureText();
                      }
                    }
                    if (
                      ((m.radius ||
                        (!m.radius &&
                          void 0 !== m.innerRadius &&
                          null !== m.innerRadius &&
                          _ - a <= A)) &&
                        (n = !1),
                      n && (_ -= a),
                      (a = 0),
                      "inside" !== m.indexLabelPlacement)
                    ) {
                      for (s = _ * M, t = 0; t < v.length; t++)
                        (h = f[t]),
                          (h.indexLabelTextBlock.x =
                            T.x + s * Math.cos(h.midAngle)),
                          (h.indexLabelTextBlock.y =
                            T.y + s * Math.sin(h.midAngle)),
                          (h.indexLabelAngle = h.midAngle),
                          (h.radius = _),
                          (h.percentInnerRadius = L);
                      for (t = 0; t < v.length; t++)
                        if (
                          ((h = f[t]),
                          null !== (u = l(t)) &&
                            ((c = f[t]),
                            (p = f[u]),
                            (P = 0),
                            (P = o(c, p) - b) < 0))
                        ) {
                          for (C = 0, k = 0, w = 0; w < v.length; w++)
                            w !== t &&
                              f[w].hemisphere === h.hemisphere &&
                              (f[w].indexLabelTextBlock.y <
                              h.indexLabelTextBlock.y
                                ? C++
                                : k++);
                          (I = (P / (C + k || 1)) * k),
                            (B = -1 * (P - I)),
                            (F = 0),
                            (z = 0),
                            "right" === h.hemisphere
                              ? ((F = d(t, I)),
                                (B = -1 * (P - F)),
                                (z = d(u, B)),
                                +z.toFixed(S) < +B.toFixed(S) &&
                                  +F.toFixed(S) <= +I.toFixed(S) &&
                                  d(t, -(B - z)))
                              : ((F = d(u, I)),
                                (B = -1 * (P - F)),
                                (z = d(t, B)),
                                +z.toFixed(S) < +B.toFixed(S) &&
                                  +F.toFixed(S) <= +I.toFixed(S) &&
                                  d(u, -(B - z)));
                        }
                    } else
                      for (t = 0; t < v.length; t++)
                        (h = f[t]),
                          (s = "pie" === m.type ? 0.7 * _ : 0.8 * _),
                          (D = T.x + s * Math.cos(h.midAngle)),
                          (X = T.y + s * Math.sin(h.midAngle)),
                          (h.indexLabelTextBlock.x = D),
                          (h.indexLabelTextBlock.y = X);
                    for (t = 0; t < v.length; t++)
                      (h = f[t]),
                        (Y = h.indexLabelTextBlock.measureText()),
                        0 !== Y.height &&
                          0 !== Y.width &&
                          ((O = 0),
                          (E = 0),
                          "right" === h.hemisphere
                            ? ((O =
                                y.x2 -
                                (h.indexLabelTextBlock.x +
                                  h.indexLabelTextBlock.width +
                                  g)),
                              (O *= -1))
                            : (O =
                                y.x1 -
                                (h.indexLabelTextBlock.x -
                                  h.indexLabelTextBlock.width -
                                  g)),
                          O > 0 &&
                            (!n &&
                              h.indexLabelText &&
                              ((W =
                                "right" === h.hemisphere
                                  ? y.x2 - h.indexLabelTextBlock.x
                                  : h.indexLabelTextBlock.x - y.x1),
                              0.3 * h.indexLabelTextBlock.maxWidth > W
                                ? (h.indexLabelText = "")
                                : (h.indexLabelTextBlock.maxWidth = 0.85 * W),
                              0.3 * h.indexLabelTextBlock.maxWidth < W &&
                                (h.indexLabelTextBlock.x -=
                                  "right" === h.hemisphere ? 2 : -2)),
                            (Math.abs(
                              h.indexLabelTextBlock.y -
                                h.indexLabelTextBlock.height / 2 -
                                T.y
                            ) < _ ||
                              Math.abs(
                                h.indexLabelTextBlock.y +
                                  h.indexLabelTextBlock.height / 2 -
                                  T.y
                              ) < _) &&
                              ((E = O / Math.abs(Math.cos(h.indexLabelAngle))),
                              E > 9 && (E *= 0.3),
                              E > a && (a = E))),
                          (R = 0),
                          (H = 0),
                          h.indexLabelAngle > 0 && h.indexLabelAngle < Math.PI
                            ? ((R =
                                y.y2 -
                                (h.indexLabelTextBlock.y +
                                  h.indexLabelTextBlock.height / 2 +
                                  5)),
                              (R *= -1))
                            : (R =
                                y.y1 -
                                (h.indexLabelTextBlock.y -
                                  h.indexLabelTextBlock.height / 2 -
                                  5)),
                          R > 0 &&
                            (!n &&
                              h.indexLabelText &&
                              ((V =
                                h.indexLabelAngle > 0 &&
                                h.indexLabelAngle < Math.PI
                                  ? -1
                                  : 1),
                              0 === d(t, R * V) && d(t, 2 * V)),
                            Math.abs(h.indexLabelTextBlock.x - T.x) < _ &&
                              ((H = R / Math.abs(Math.sin(h.indexLabelAngle))),
                              H > 9 && (H *= 0.3),
                              H > a && (a = H))));
                    !(function () {
                      for (
                        var t = -1, i = -1, a = 0, n = !1, s = 0;
                        s < v.length;
                        s++
                      )
                        if (((n = !1), (c = f[s]), c.indexLabelText)) {
                          var h = l(s);
                          if (null !== h) {
                            var d = f[h];
                            (P = 0),
                              (P = o(c, d)),
                              P < 0 && r(c, d)
                                ? (t < 0 && (t = s),
                                  h !== t && ((i = h), (a += -P)),
                                  s % Math.max(v.length / 10, 3) == 0 &&
                                    (n = !0))
                                : (n = !0),
                              n &&
                                a > 0 &&
                                t >= 0 &&
                                i >= 0 &&
                                (e(a, t, i), (t = -1), (i = -1), (a = 0));
                          }
                        }
                      a > 0 && e(a, t, i);
                    })();
                  })();
                }
              }
              function p() {
                if (
                  (x.plotArea.layoutManager.reset(),
                  x._title &&
                    (x._title.dockInsidePlotArea ||
                      ("center" === x._title.horizontalAlign &&
                        "center" === x._title.verticalAlign)) &&
                    x._title.render(),
                  x.subtitles)
                )
                  for (var e = 0; e < x.subtitles.length; e++) {
                    var t = x.subtitles[e];
                    (t.dockInsidePlotArea ||
                      ("center" === t.horizontalAlign &&
                        "center" === t.verticalAlign)) &&
                      t.render();
                  }
                x.legend &&
                  (x.legend.dockInsidePlotArea ||
                    ("center" === x.legend.horizontalAlign &&
                      "center" === x.legend.verticalAlign)) &&
                  x.legend.render();
              }
              var x = this;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                for (
                  var u = e.dataSeriesIndexes[0],
                    m = this.data[u],
                    v = m.dataPoints,
                    g = 10,
                    y = this.plotArea,
                    f = [],
                    b = 2,
                    M = 1.3,
                    P = (20 / 180) * Math.PI,
                    S = 6,
                    T = { x: (y.x2 + y.x1) / 2, y: (y.y2 + y.y1) / 2 },
                    C = 0,
                    k = !1,
                    w = 0;
                  w < v.length;
                  w++
                )
                  (C += Math.abs(v[w].y)),
                    !k &&
                      void 0 !== v[w].indexLabel &&
                      null !== v[w].indexLabel &&
                      v[w].indexLabel.toString().length > 0 &&
                      (k = !0),
                    !k &&
                      void 0 !== v[w].label &&
                      null !== v[w].label &&
                      v[w].label.toString().length > 0 &&
                      (k = !0);
                if (0 !== C) {
                  k =
                    k ||
                    (void 0 !== m.indexLabel &&
                      null !== m.indexLabel &&
                      m.indexLabel.toString().length > 0);
                  var _ =
                    "inside" !== m.indexLabelPlacement && k
                      ? (0.75 * Math.min(y.width, y.height)) / 2
                      : (0.92 * Math.min(y.width, y.height)) / 2;
                  m.radius && (_ = (0, s.convertPercentToValue)(m.radius, _));
                  var A =
                      void 0 !== m.innerRadius && null !== m.innerRadius
                        ? (0, s.convertPercentToValue)(m.innerRadius, _)
                        : 0.7 * _,
                    L = Math.min(A / _, (_ - 1) / _);
                  (this.pieDoughnutClickHandler = function (e) {
                    if (!x.isAnimating) {
                      var t = e.dataPointIndex,
                        i = e.dataPoint,
                        n = this;
                      n.dataPointIds[t],
                        i.exploded ? (i.exploded = !1) : (i.exploded = !0),
                        n.dataPoints.length > 1 &&
                          x._animator.animate(0, 500, function (e) {
                            a(e), p();
                          });
                    }
                  }),
                    (function () {
                      if (m && v) {
                        var e = 0,
                          t = 0,
                          i = 0,
                          a = 0;
                        for (w = 0; w < v.length; w++) {
                          var s = v[w],
                            r = m.dataPointIds[w],
                            o = {
                              id: r,
                              objectType: "dataPoint",
                              dataPointIndex: w,
                              dataSeriesIndex: 0,
                            };
                          f.push(o);
                          var l = { percent: null, total: null },
                            h = null;
                          (l = x.getPercentAndTotal(m, s)),
                            (m.indexLabelFormatter || s.indexLabelFormatter) &&
                              (h = {
                                chart: x._options,
                                dataSeries: m,
                                dataPoint: s,
                                total: l.total,
                                percent: l.percent,
                              });
                          var d = s.indexLabelFormatter
                            ? s.indexLabelFormatter(h)
                            : s.indexLabel
                            ? x.replaceKeywordsWithValue(s.indexLabel, s, m, w)
                            : m.indexLabelFormatter
                            ? m.indexLabelFormatter(h)
                            : m.indexLabel
                            ? x.replaceKeywordsWithValue(m.indexLabel, s, m, w)
                            : s.label
                            ? s.label
                            : "";
                          (x._eventManager.objectMap[r] = o),
                            (o.center = { x: T.x, y: T.y }),
                            (o.y = s.y),
                            (o.radius = _),
                            (o.percentInnerRadius = L),
                            (o.indexLabelText = d),
                            (o.indexLabelPlacement = m.indexLabelPlacement),
                            (o.indexLabelLineColor = s.indexLabelLineColor
                              ? s.indexLabelLineColor
                              : m.indexLabelLineColor
                              ? m.indexLabelLineColor
                              : s.color
                              ? s.color
                              : m._colorSet[w % m._colorSet.length]),
                            (o.indexLabelLineThickness =
                              s.indexLabelLineThickness
                                ? s.indexLabelLineThickness
                                : m.indexLabelLineThickness),
                            (o.indexLabelLineDashType = s.indexLabelLineDashType
                              ? s.indexLabelLineDashType
                              : m.indexLabelLineDashType),
                            (o.indexLabelFontColor = s.indexLabelFontColor
                              ? s.indexLabelFontColor
                              : m.indexLabelFontColor),
                            (o.indexLabelFontStyle = s.indexLabelFontStyle
                              ? s.indexLabelFontStyle
                              : m.indexLabelFontStyle),
                            (o.indexLabelFontWeight = s.indexLabelFontWeight
                              ? s.indexLabelFontWeight
                              : m.indexLabelFontWeight),
                            (o.indexLabelFontSize = s.indexLabelFontSize
                              ? s.indexLabelFontSize
                              : m.indexLabelFontSize),
                            (o.indexLabelFontFamily = s.indexLabelFontFamily
                              ? s.indexLabelFontFamily
                              : m.indexLabelFontFamily),
                            (o.indexLabelBackgroundColor =
                              s.indexLabelBackgroundColor
                                ? s.indexLabelBackgroundColor
                                : m.indexLabelBackgroundColor
                                ? m.indexLabelBackgroundColor
                                : null),
                            (o.indexLabelMaxWidth = s.indexLabelMaxWidth
                              ? s.indexLabelMaxWidth
                              : m.indexLabelMaxWidth
                              ? m.indexLabelMaxWidth
                              : 0.33 * y.width),
                            (o.indexLabelWrap =
                              void 0 !== s.indexLabelWrap
                                ? s.indexLabelWrap
                                : m.indexLabelWrap),
                            (o.startAngle =
                              0 === w
                                ? m.startAngle
                                  ? (m.startAngle / 180) * Math.PI
                                  : 0
                                : f[w - 1].endAngle),
                            (o.startAngle =
                              (o.startAngle + 2 * Math.PI) % (2 * Math.PI)),
                            (o.endAngle =
                              o.startAngle +
                              ((2 * Math.PI) / C) * Math.abs(s.y));
                          var c = (o.endAngle + o.startAngle) / 2;
                          (c = (c + 2 * Math.PI) % (2 * Math.PI)),
                            (o.midAngle = c),
                            o.midAngle > Math.PI / 2 - P &&
                            o.midAngle < Math.PI / 2 + P
                              ? ((0 === e || f[i].midAngle > o.midAngle) &&
                                  (i = w),
                                e++)
                              : o.midAngle > (3 * Math.PI) / 2 - P &&
                                o.midAngle < (3 * Math.PI) / 2 + P &&
                                ((0 === t || f[a].midAngle > o.midAngle) &&
                                  (a = w),
                                t++),
                            c > Math.PI / 2 && c <= (3 * Math.PI) / 2
                              ? (o.hemisphere = "left")
                              : (o.hemisphere = "right"),
                            (o.indexLabelTextBlock = new n.default(
                              x.plotArea.ctx,
                              {
                                fontSize: o.indexLabelFontSize,
                                fontFamily: o.indexLabelFontFamily,
                                fontColor: o.indexLabelFontColor,
                                fontStyle: o.indexLabelFontStyle,
                                fontWeight: o.indexLabelFontWeight,
                                horizontalAlign: "left",
                                backgroundColor: o.indexLabelBackgroundColor,
                                maxWidth: o.indexLabelMaxWidth,
                                maxHeight: o.indexLabelWrap
                                  ? 5 * o.indexLabelFontSize
                                  : 1.5 * o.indexLabelFontSize,
                                text: o.indexLabelText,
                                padding: 0,
                                textBaseline: "top",
                              }
                            )),
                            o.indexLabelTextBlock.measureText();
                        }
                        var p = 0,
                          u = 0,
                          g = !1;
                        for (w = 0; w < v.length; w++) {
                          var o = f[(i + w) % v.length];
                          e > 1 &&
                            o.midAngle > Math.PI / 2 - P &&
                            o.midAngle < Math.PI / 2 + P &&
                            (p <= e / 2 && !g
                              ? ((o.hemisphere = "right"), p++)
                              : ((o.hemisphere = "left"), (g = !0)));
                        }
                        for (g = !1, w = 0; w < v.length; w++) {
                          var o = f[(a + w) % v.length];
                          t > 1 &&
                            o.midAngle > (3 * Math.PI) / 2 - P &&
                            o.midAngle < (3 * Math.PI) / 2 + P &&
                            (u <= t / 2 && !g
                              ? ((o.hemisphere = "left"), u++)
                              : ((o.hemisphere = "right"), (g = !0)));
                        }
                      }
                    })(),
                    c(),
                    c(),
                    c(),
                    c(),
                    (this.disableToolTip = !0),
                    this._animator.animate(
                      0,
                      this.animatedRender ? this.animationDuration : 0,
                      function (e) {
                        i(e), p();
                      },
                      function () {
                        (x.disableToolTip = !1),
                          x._animator.animate(
                            0,
                            x.animatedRender ? 500 : 0,
                            function (e) {
                              a(e), p();
                            }
                          );
                      }
                    );
                }
              }
            });
          var a = e("../core/text_block"),
            n = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(a),
            s = e("../helpers/utils");
        },
        { "../core/text_block": 34, "../helpers/utils": 39 },
      ],
      8: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              function t() {
                if (b) {
                  var e = null;
                  d.lineThickness > 0 && i.stroke();
                  for (var t = l.length - 1; t >= 0; t--)
                    (e = l[t]), i.lineTo(e.x, e.y), n.lineTo(e.x, e.y);
                  if (
                    (i.closePath(),
                    (i.globalAlpha = d.fillOpacity),
                    i.fill(),
                    (i.globalAlpha = 1),
                    n.fill(),
                    d.lineThickness > 0)
                  ) {
                    i.beginPath(), i.moveTo(e.x, e.y);
                    for (var t = 0; t < l.length; t++)
                      (e = l[t]), i.lineTo(e.x, e.y);
                    i.stroke();
                  }
                  i.beginPath(),
                    i.moveTo(u, m),
                    n.beginPath(),
                    n.moveTo(u, m),
                    (b = { x: u, y: m }),
                    (l = []),
                    l.push({ x: u, y: v });
                }
              }
              var i = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var n = this._eventManager.ghostCtx,
                  s = (e.axisX.lineCoordinates, e.axisY.lineCoordinates, []),
                  r = this.plotArea;
                i.save(),
                  a.isCanvasSupported && n.save(),
                  i.beginPath(),
                  i.rect(r.x1, r.y1, r.width, r.height),
                  i.clip(),
                  a.isCanvasSupported &&
                    (n.beginPath(),
                    n.rect(r.x1, r.y1, r.width, r.height),
                    n.clip());
                for (var o = 0; o < e.dataSeriesIndexes.length; o++) {
                  var l = [],
                    h = e.dataSeriesIndexes[o],
                    d = this.data[h],
                    c = d.dataPoints,
                    p = d.id;
                  this._eventManager.objectMap[p] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: h,
                  };
                  var x = intToHexColorString(p);
                  (n.fillStyle = x), (s = []);
                  var u,
                    m,
                    v,
                    g,
                    y = !0,
                    f = 0,
                    b =
                      (e.axisY.conversionParameters.reference,
                      e.axisY.conversionParameters.pixelPerUnit,
                      e.axisY.conversionParameters.minimum,
                      null);
                  if (c.length > 0) {
                    var M = d._colorSet[f % d._colorSet.length];
                    (i.fillStyle = M),
                      (i.strokeStyle = M),
                      (i.lineWidth = d.lineThickness),
                      i.setLineDash &&
                        i.setLineDash(
                          getLineDashArray(d.lineDashType, d.lineThickness)
                        );
                    for (var P = !0; f < c.length; f++)
                      if (
                        !(
                          (g = c[f].x.getTime ? c[f].x.getTime() : c[f].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          g > e.axisX.dataInfo.viewPortMax
                        )
                      )
                        if (
                          null !== c[f].y &&
                          c[f].y.length &&
                          "number" == typeof c[f].y[0] &&
                          "number" == typeof c[f].y[1]
                        ) {
                          (u =
                            (e.axisX.conversionParameters.reference +
                              e.axisX.conversionParameters.pixelPerUnit *
                                (g - e.axisX.conversionParameters.minimum) +
                              0.5) <<
                            0),
                            (m =
                              (e.axisY.conversionParameters.reference +
                                e.axisY.conversionParameters.pixelPerUnit *
                                  (c[f].y[0] -
                                    e.axisY.conversionParameters.minimum) +
                                0.5) <<
                              0),
                            (v =
                              (e.axisY.conversionParameters.reference +
                                e.axisY.conversionParameters.pixelPerUnit *
                                  (c[f].y[1] -
                                    e.axisY.conversionParameters.minimum) +
                                0.5) <<
                              0),
                            y || P
                              ? (i.beginPath(),
                                i.moveTo(u, m),
                                (b = { x: u, y: m }),
                                (l = []),
                                l.push({ x: u, y: v }),
                                a.isCanvasSupported &&
                                  (n.beginPath(), n.moveTo(u, m)),
                                (y = !1),
                                (P = !1))
                              : (i.lineTo(u, m),
                                l.push({ x: u, y: v }),
                                a.isCanvasSupported && n.lineTo(u, m),
                                f % 250 == 0 && t());
                          var S = d.dataPointIds[f];
                          if (
                            ((this._eventManager.objectMap[S] = {
                              id: S,
                              objectType: "dataPoint",
                              dataSeriesIndex: h,
                              dataPointIndex: f,
                              x1: u,
                              y1: m,
                              y2: v,
                            }),
                            0 !== c[f].markerSize &&
                              (c[f].markerSize > 0 || d.markerSize > 0))
                          ) {
                            var T = d.getMarkerProperties(f, u, v, i);
                            s.push(T);
                            var C = intToHexColorString(S);
                            a.isCanvasSupported &&
                              s.push({
                                x: u,
                                y: v,
                                ctx: n,
                                type: T.type,
                                size: T.size,
                                color: C,
                                borderColor: C,
                                borderThickness: T.borderThickness,
                              }),
                              (T = d.getMarkerProperties(f, u, m, i)),
                              s.push(T);
                            var C = intToHexColorString(S);
                            a.isCanvasSupported &&
                              s.push({
                                x: u,
                                y: m,
                                ctx: n,
                                type: T.type,
                                size: T.size,
                                color: C,
                                borderColor: C,
                                borderThickness: T.borderThickness,
                              });
                          }
                          (c[f].indexLabel ||
                            d.indexLabel ||
                            c[f].indexLabelFormatter ||
                            d.indexLabelFormatter) &&
                            (this._indexLabels.push({
                              chartType: "rangeArea",
                              dataPoint: c[f],
                              dataSeries: d,
                              indexKeyword: 0,
                              point: { x: u, y: m },
                              direction: c[f].y[0] <= c[f].y[1] ? -1 : 1,
                              color: M,
                            }),
                            this._indexLabels.push({
                              chartType: "rangeArea",
                              dataPoint: c[f],
                              dataSeries: d,
                              indexKeyword: 1,
                              point: { x: u, y: v },
                              direction: c[f].y[0] <= c[f].y[1] ? 1 : -1,
                              color: M,
                            }));
                        } else t(), (P = !0);
                    t(), RenderHelper.drawMarkers(s);
                  }
                }
                return (
                  i.restore(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.restore(),
                  {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: AnimationHelper.xClipAnimation,
                    easingFunction: AnimationHelper.easing.linear,
                    animationBase: 0,
                  }
                );
              }
            });
          var a = e("../helpers/utils");
        },
        { "../helpers/utils": 39 },
      ],
      9: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var i,
                  n,
                  s,
                  r,
                  o = null,
                  l = this.plotArea,
                  h = 0,
                  d =
                    (e.axisY.conversionParameters.reference,
                    e.axisY.conversionParameters.pixelPerUnit,
                    e.axisY.conversionParameters.minimum,
                    this.dataPointMaxWidth
                      ? this.dataPointMaxWidth
                      : Math.min(
                          0.15 * this.height,
                          (this.plotArea.height / e.plotType.totalDataSeries) *
                            0.9
                        ) << 0),
                  c = e.axisX.dataInfo.minDiff,
                  p =
                    ((((l.height /
                      Math.abs(
                        e.axisX.viewportMaximum - e.axisX.viewportMinimum
                      )) *
                      Math.abs(c)) /
                      e.plotType.totalDataSeries) *
                      0.9) <<
                    0;
                p > d
                  ? (p = d)
                  : c === 1 / 0
                  ? (p = (d / e.plotType.totalDataSeries) * 0.9)
                  : p < 1 && (p = 1),
                  t.save(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.save(),
                  t.beginPath(),
                  t.rect(l.x1, l.y1, l.width, l.height),
                  t.clip(),
                  a.isCanvasSupported &&
                    (this._eventManager.ghostCtx.rect(
                      l.x1,
                      l.y1,
                      l.width,
                      l.height
                    ),
                    this._eventManager.ghostCtx.clip());
                for (var x = 0; x < e.dataSeriesIndexes.length; x++) {
                  var u = e.dataSeriesIndexes[x],
                    m = this.data[u],
                    v = m.dataPoints;
                  if (v.length > 0) {
                    var g = !!(p > 5 && m.bevelEnabled);
                    for (t.strokeStyle = "#4572A7 ", h = 0; h < v.length; h++)
                      if (
                        !(
                          (r = v[h].getTime ? v[h].x.getTime() : v[h].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          r > e.axisX.dataInfo.viewPortMax
                        ) &&
                        null !== v[h].y &&
                        v[h].y.length &&
                        "number" == typeof v[h].y[0] &&
                        "number" == typeof v[h].y[1]
                      ) {
                        (i =
                          (e.axisY.conversionParameters.reference +
                            e.axisY.conversionParameters.pixelPerUnit *
                              (v[h].y[0] -
                                e.axisY.conversionParameters.minimum) +
                            0.5) <<
                          0),
                          (n =
                            (e.axisY.conversionParameters.reference +
                              e.axisY.conversionParameters.pixelPerUnit *
                                (v[h].y[1] -
                                  e.axisY.conversionParameters.minimum) +
                              0.5) <<
                            0),
                          (s =
                            (e.axisX.conversionParameters.reference +
                              e.axisX.conversionParameters.pixelPerUnit *
                                (r - e.axisX.conversionParameters.minimum) +
                              0.5) <<
                            0);
                        var y =
                            (s -
                              (e.plotType.totalDataSeries * p) / 2 +
                              (e.previousDataSeriesCount + x) * p) <<
                            0,
                          f = (y + p) << 0;
                        if (i > n) {
                          var b = i;
                          (i = n), (n = b);
                        }
                        (o = v[h].color
                          ? v[h].color
                          : m._colorSet[h % m._colorSet.length]),
                          drawRect(
                            t,
                            i,
                            y,
                            n,
                            f,
                            o,
                            0,
                            null,
                            g,
                            !1,
                            !1,
                            !1,
                            m.fillOpacity
                          );
                        var M = m.dataPointIds[h];
                        (this._eventManager.objectMap[M] = {
                          id: M,
                          objectType: "dataPoint",
                          dataSeriesIndex: u,
                          dataPointIndex: h,
                          x1: i,
                          y1: y,
                          x2: n,
                          y2: f,
                        }),
                          (o = intToHexColorString(M)),
                          a.isCanvasSupported &&
                            drawRect(
                              this._eventManager.ghostCtx,
                              i,
                              y,
                              n,
                              f,
                              o,
                              0,
                              null,
                              !1,
                              !1,
                              !1,
                              !1
                            ),
                          (v[h].indexLabel ||
                            m.indexLabel ||
                            v[h].indexLabelFormatter ||
                            m.indexLabelFormatter) &&
                            (this._indexLabels.push({
                              chartType: "rangeBar",
                              dataPoint: v[h],
                              dataSeries: m,
                              indexKeyword: 0,
                              point: {
                                x: v[h].y[1] >= v[h].y[0] ? i : n,
                                y: y + (f - y) / 2,
                              },
                              direction: v[h].y[1] >= v[h].y[0] ? -1 : 1,
                              bounds: {
                                x1: Math.min(i, n),
                                y1: y,
                                x2: Math.max(i, n),
                                y2: f,
                              },
                              color: o,
                            }),
                            this._indexLabels.push({
                              chartType: "rangeBar",
                              dataPoint: v[h],
                              dataSeries: m,
                              indexKeyword: 1,
                              point: {
                                x: v[h].y[1] >= v[h].y[0] ? n : i,
                                y: y + (f - y) / 2,
                              },
                              direction: v[h].y[1] >= v[h].y[0] ? 1 : -1,
                              bounds: {
                                x1: Math.min(i, n),
                                y1: y,
                                x2: Math.max(i, n),
                                y2: f,
                              },
                              color: o,
                            }));
                      }
                  }
                }
                return (
                  t.restore(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.restore(),
                  {
                    source: t,
                    dest: this.plotArea.ctx,
                    animationCallback: AnimationHelper.fadeInAnimation,
                    easingFunction: AnimationHelper.easing.easeInQuad,
                    animationBase: 0,
                  }
                );
              }
            });
          var a = e("../helpers/utils");
        },
        { "../helpers/utils": 39 },
      ],
      10: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var i,
                  n,
                  s,
                  r,
                  o = null,
                  l = this.plotArea,
                  h = 0,
                  d =
                    (e.axisY.conversionParameters.reference,
                    e.axisY.conversionParameters.pixelPerUnit,
                    e.axisY.conversionParameters.minimum,
                    this.dataPointMaxWidth
                      ? this.dataPointMaxWidth
                      : 0.03 * this.width),
                  c = e.axisX.dataInfo.minDiff,
                  p =
                    ((((l.width /
                      Math.abs(
                        e.axisX.viewportMaximum - e.axisX.viewportMinimum
                      )) *
                      Math.abs(c)) /
                      e.plotType.totalDataSeries) *
                      0.9) <<
                    0;
                p > d
                  ? (p = d)
                  : c === 1 / 0
                  ? (p = (d / e.plotType.totalDataSeries) * 0.9)
                  : p < 1 && (p = 1),
                  t.save(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.save(),
                  t.beginPath(),
                  t.rect(l.x1, l.y1, l.width, l.height),
                  t.clip(),
                  a.isCanvasSupported &&
                    (this._eventManager.ghostCtx.rect(
                      l.x1,
                      l.y1,
                      l.width,
                      l.height
                    ),
                    this._eventManager.ghostCtx.clip());
                for (var x = 0; x < e.dataSeriesIndexes.length; x++) {
                  var u = e.dataSeriesIndexes[x],
                    m = this.data[u],
                    v = m.dataPoints;
                  if (v.length > 0) {
                    var g = !!(p > 5 && m.bevelEnabled);
                    for (h = 0; h < v.length; h++)
                      if (
                        !(
                          (r = v[h].getTime ? v[h].x.getTime() : v[h].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          r > e.axisX.dataInfo.viewPortMax
                        ) &&
                        null !== v[h].y &&
                        v[h].y.length &&
                        "number" == typeof v[h].y[0] &&
                        "number" == typeof v[h].y[1]
                      ) {
                        (i =
                          (e.axisX.conversionParameters.reference +
                            e.axisX.conversionParameters.pixelPerUnit *
                              (r - e.axisX.conversionParameters.minimum) +
                            0.5) <<
                          0),
                          (n =
                            (e.axisY.conversionParameters.reference +
                              e.axisY.conversionParameters.pixelPerUnit *
                                (v[h].y[0] -
                                  e.axisY.conversionParameters.minimum) +
                              0.5) <<
                            0),
                          (s =
                            (e.axisY.conversionParameters.reference +
                              e.axisY.conversionParameters.pixelPerUnit *
                                (v[h].y[1] -
                                  e.axisY.conversionParameters.minimum) +
                              0.5) <<
                            0);
                        var n,
                          s,
                          y =
                            (i -
                              (e.plotType.totalDataSeries * p) / 2 +
                              (e.previousDataSeriesCount + x) * p) <<
                            0,
                          f = (y + p) << 0;
                        if (
                          ((o = v[h].color
                            ? v[h].color
                            : m._colorSet[h % m._colorSet.length]),
                          n > s)
                        ) {
                          var b = n;
                          (n = s), (s = b);
                        }
                        var M = m.dataPointIds[h];
                        (this._eventManager.objectMap[M] = {
                          id: M,
                          objectType: "dataPoint",
                          dataSeriesIndex: u,
                          dataPointIndex: h,
                          x1: y,
                          y1: n,
                          x2: f,
                          y2: s,
                        }),
                          drawRect(
                            t,
                            y,
                            n,
                            f,
                            s,
                            o,
                            0,
                            o,
                            g,
                            g,
                            !1,
                            !1,
                            m.fillOpacity
                          ),
                          (o = intToHexColorString(M)),
                          a.isCanvasSupported &&
                            drawRect(
                              this._eventManager.ghostCtx,
                              y,
                              n,
                              f,
                              s,
                              o,
                              0,
                              null,
                              !1,
                              !1,
                              !1,
                              !1
                            ),
                          (v[h].indexLabel ||
                            m.indexLabel ||
                            v[h].indexLabelFormatter ||
                            m.indexLabelFormatter) &&
                            (this._indexLabels.push({
                              chartType: "rangeColumn",
                              dataPoint: v[h],
                              dataSeries: m,
                              indexKeyword: 0,
                              point: {
                                x: y + (f - y) / 2,
                                y: v[h].y[1] >= v[h].y[0] ? s : n,
                              },
                              direction: v[h].y[1] >= v[h].y[0] ? -1 : 1,
                              bounds: {
                                x1: y,
                                y1: Math.min(n, s),
                                x2: f,
                                y2: Math.max(n, s),
                              },
                              color: o,
                            }),
                            this._indexLabels.push({
                              chartType: "rangeColumn",
                              dataPoint: v[h],
                              dataSeries: m,
                              indexKeyword: 1,
                              point: {
                                x: y + (f - y) / 2,
                                y: v[h].y[1] >= v[h].y[0] ? n : s,
                              },
                              direction: v[h].y[1] >= v[h].y[0] ? 1 : -1,
                              bounds: {
                                x1: y,
                                y1: Math.min(n, s),
                                x2: f,
                                y2: Math.max(n, s),
                              },
                              color: o,
                            }));
                      }
                  }
                }
                return (
                  t.restore(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.restore(),
                  {
                    source: t,
                    dest: this.plotArea.ctx,
                    animationCallback: AnimationHelper.fadeInAnimation,
                    easingFunction: AnimationHelper.easing.easeInQuad,
                    animationBase: 0,
                  }
                );
              }
            });
          var a = e("../helpers/utils");
        },
        { "../helpers/utils": 39 },
      ],
      11: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              function t() {
                var e = getBezierPoints(y, 2);
                if (e.length > 0) {
                  i.beginPath(),
                    i.moveTo(e[0].x, e[0].y),
                    a.isCanvasSupported &&
                      (n.beginPath(), n.moveTo(e[0].x, e[0].y));
                  for (var t = 0; t < e.length - 3; t += 3)
                    i.bezierCurveTo(
                      e[t + 1].x,
                      e[t + 1].y,
                      e[t + 2].x,
                      e[t + 2].y,
                      e[t + 3].x,
                      e[t + 3].y
                    ),
                      a.isCanvasSupported &&
                        n.bezierCurveTo(
                          e[t + 1].x,
                          e[t + 1].y,
                          e[t + 2].x,
                          e[t + 2].y,
                          e[t + 3].x,
                          e[t + 3].y
                        );
                  h.lineThickness > 0 && i.stroke(),
                    (e = getBezierPoints(f, 2)),
                    i.lineTo(f[f.length - 1].x, f[f.length - 1].y);
                  for (var t = e.length - 1; t > 2; t -= 3)
                    i.bezierCurveTo(
                      e[t - 1].x,
                      e[t - 1].y,
                      e[t - 2].x,
                      e[t - 2].y,
                      e[t - 3].x,
                      e[t - 3].y
                    ),
                      a.isCanvasSupported &&
                        n.bezierCurveTo(
                          e[t - 1].x,
                          e[t - 1].y,
                          e[t - 2].x,
                          e[t - 2].y,
                          e[t - 3].x,
                          e[t - 3].y
                        );
                  if (
                    (i.closePath(),
                    (i.globalAlpha = h.fillOpacity),
                    i.fill(),
                    (i.globalAlpha = 1),
                    h.lineThickness > 0)
                  ) {
                    i.beginPath(),
                      i.moveTo(f[f.length - 1].x, f[f.length - 1].y);
                    for (var t = e.length - 1; t > 2; t -= 3)
                      i.bezierCurveTo(
                        e[t - 1].x,
                        e[t - 1].y,
                        e[t - 2].x,
                        e[t - 2].y,
                        e[t - 3].x,
                        e[t - 3].y
                      ),
                        a.isCanvasSupported &&
                          n.bezierCurveTo(
                            e[t - 1].x,
                            e[t - 1].y,
                            e[t - 2].x,
                            e[t - 2].y,
                            e[t - 3].x,
                            e[t - 3].y
                          );
                    i.stroke();
                  }
                  i.beginPath(),
                    a.isCanvasSupported && (n.closePath(), n.fill());
                }
              }
              var i = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var n = this._eventManager.ghostCtx,
                  s = (e.axisX.lineCoordinates, e.axisY.lineCoordinates, []),
                  r = this.plotArea;
                i.save(),
                  a.isCanvasSupported && n.save(),
                  i.beginPath(),
                  i.rect(r.x1, r.y1, r.width, r.height),
                  i.clip(),
                  a.isCanvasSupported &&
                    (n.beginPath(),
                    n.rect(r.x1, r.y1, r.width, r.height),
                    n.clip());
                for (var o = 0; o < e.dataSeriesIndexes.length; o++) {
                  var l = e.dataSeriesIndexes[o],
                    h = this.data[l],
                    d = h.dataPoints,
                    c = h.id;
                  this._eventManager.objectMap[c] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: l,
                  };
                  var p = intToHexColorString(c);
                  (n.fillStyle = p), (s = []);
                  var x,
                    u,
                    m,
                    v,
                    g = 0,
                    y =
                      (e.axisY.conversionParameters.reference,
                      e.axisY.conversionParameters.pixelPerUnit,
                      e.axisY.conversionParameters.minimum,
                      []),
                    f = [];
                  if (d.length > 0) {
                    for (
                      color = h._colorSet[g % h._colorSet.length],
                        i.fillStyle = color,
                        i.strokeStyle = color,
                        i.lineWidth = h.lineThickness,
                        i.setLineDash &&
                          i.setLineDash(
                            getLineDashArray(h.lineDashType, h.lineThickness)
                          );
                      g < d.length;
                      g++
                    )
                      if (
                        !(
                          (v = d[g].x.getTime ? d[g].x.getTime() : d[g].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          v > e.axisX.dataInfo.viewPortMax
                        )
                      )
                        if (
                          null !== d[g].y &&
                          d[g].y.length &&
                          "number" == typeof d[g].y[0] &&
                          "number" == typeof d[g].y[1]
                        ) {
                          (x =
                            (e.axisX.conversionParameters.reference +
                              e.axisX.conversionParameters.pixelPerUnit *
                                (v - e.axisX.conversionParameters.minimum) +
                              0.5) <<
                            0),
                            (u =
                              (e.axisY.conversionParameters.reference +
                                e.axisY.conversionParameters.pixelPerUnit *
                                  (d[g].y[0] -
                                    e.axisY.conversionParameters.minimum) +
                                0.5) <<
                              0),
                            (m =
                              (e.axisY.conversionParameters.reference +
                                e.axisY.conversionParameters.pixelPerUnit *
                                  (d[g].y[1] -
                                    e.axisY.conversionParameters.minimum) +
                                0.5) <<
                              0);
                          var b = h.dataPointIds[g];
                          if (
                            ((this._eventManager.objectMap[b] = {
                              id: b,
                              objectType: "dataPoint",
                              dataSeriesIndex: l,
                              dataPointIndex: g,
                              x1: x,
                              y1: u,
                              y2: m,
                            }),
                            (y[y.length] = { x: x, y: u }),
                            (f[f.length] = { x: x, y: m }),
                            0 !== d[g].markerSize &&
                              (d[g].markerSize > 0 || h.markerSize > 0))
                          ) {
                            var M = h.getMarkerProperties(g, x, u, i);
                            s.push(M);
                            var P = intToHexColorString(b);
                            a.isCanvasSupported &&
                              s.push({
                                x: x,
                                y: u,
                                ctx: n,
                                type: M.type,
                                size: M.size,
                                color: P,
                                borderColor: P,
                                borderThickness: M.borderThickness,
                              });
                            var M = h.getMarkerProperties(g, x, m, i);
                            s.push(M);
                            var P = intToHexColorString(b);
                            a.isCanvasSupported &&
                              s.push({
                                x: x,
                                y: m,
                                ctx: n,
                                type: M.type,
                                size: M.size,
                                color: P,
                                borderColor: P,
                                borderThickness: M.borderThickness,
                              });
                          }
                          (d[g].indexLabel ||
                            h.indexLabel ||
                            d[g].indexLabelFormatter ||
                            h.indexLabelFormatter) &&
                            (this._indexLabels.push({
                              chartType: "splineArea",
                              dataPoint: d[g],
                              dataSeries: h,
                              indexKeyword: 0,
                              point: { x: x, y: u },
                              direction: d[g].y[0] <= d[g].y[1] ? -1 : 1,
                              color: color,
                            }),
                            this._indexLabels.push({
                              chartType: "splineArea",
                              dataPoint: d[g],
                              dataSeries: h,
                              indexKeyword: 1,
                              point: { x: x, y: m },
                              direction: d[g].y[0] <= d[g].y[1] ? 1 : -1,
                              color: color,
                            }));
                        } else g > 0 && (t(), (y = []), (f = []));
                    t(), RenderHelper.drawMarkers(s);
                  }
                }
                return (
                  i.restore(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.restore(),
                  {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: AnimationHelper.xClipAnimation,
                    easingFunction: AnimationHelper.easing.linear,
                    animationBase: 0,
                  }
                );
              }
            });
          var a = e("../helpers/utils");
        },
        { "../helpers/utils": 39 },
      ],
      12: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx,
                i = e.dataSeriesIndexes.length;
              if (!(i <= 0)) {
                var a,
                  n,
                  r,
                  h = this.plotArea,
                  d = 0,
                  c =
                    (e.axisY.conversionParameters.reference,
                    e.axisY.conversionParameters.pixelPerUnit,
                    e.axisY.conversionParameters.minimum,
                    this.dataPointMaxWidth
                      ? this.dataPointMaxWidth
                      : (0.15 * this.width) << 0),
                  p = e.axisX.dataInfo.minDiff,
                  x =
                    ((((h.width /
                      Math.abs(
                        e.axisX.viewportMaximum - e.axisX.viewportMinimum
                      )) *
                      Math.abs(p)) /
                      i) *
                      0.9) <<
                    0;
                t.save(),
                  l.isCanvasSupported && this._eventManager.ghostCtx.save(),
                  t.beginPath(),
                  t.rect(h.x1, h.y1, h.width, h.height),
                  t.clip(),
                  l.isCanvasSupported &&
                    (this._eventManager.ghostCtx.rect(
                      h.x1,
                      h.y1,
                      h.width,
                      h.height
                    ),
                    this._eventManager.ghostCtx.clip());
                for (var u = 0; u < e.dataSeriesIndexes.length; u++) {
                  var m = e.dataSeriesIndexes[u],
                    v = this.data[m],
                    g = v.dataPoints;
                  if (
                    (1 == g.length && (x = c),
                    x < 1 ? (x = 1) : x > c && (x = c),
                    g.length > 0)
                  ) {
                    t.strokeStyle = "#4572A7 ";
                    for (
                      var y =
                          (Math.pow((0.3 * Math.min(h.height, h.width)) / 2, 2),
                          Math.PI,
                          0),
                        f = 0,
                        d = 0;
                      d < g.length;
                      d++
                    )
                      if (
                        !(
                          (r = r = g[d].getTime ? g[d].x.getTime() : g[d].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          r > e.axisX.dataInfo.viewPortMax
                        ) &&
                        "number" == typeof g[d].y
                      ) {
                        (a =
                          (e.axisX.conversionParameters.reference +
                            e.axisX.conversionParameters.pixelPerUnit *
                              (r - e.axisX.conversionParameters.minimum) +
                            0.5) <<
                          0),
                          (n =
                            (e.axisY.conversionParameters.reference +
                              e.axisY.conversionParameters.pixelPerUnit *
                                (g[d].y -
                                  e.axisY.conversionParameters.minimum) +
                              0.5) <<
                            0);
                        var b = v.getMarkerProperties(d, a, n, t);
                        if (
                          ((t.globalAlpha = v.fillOpacity),
                          s.default.drawMarker(
                            b.x,
                            b.y,
                            b.ctx,
                            b.type,
                            b.size,
                            b.color,
                            b.borderColor,
                            b.borderThickness
                          ),
                          (t.globalAlpha = 1),
                          !(
                            Math.sqrt((y - a) * (y - a) + (f - n) * (f - n)) <
                              Math.min(b.size, 5) &&
                            g.length >
                              Math.min(
                                this.plotArea.width,
                                this.plotArea.height
                              )
                          ))
                        ) {
                          var M = v.dataPointIds[d];
                          this._eventManager.objectMap[M] = {
                            id: M,
                            objectType: "dataPoint",
                            dataSeriesIndex: m,
                            dataPointIndex: d,
                            x1: a,
                            y1: n,
                          };
                          var P = (0, l.intToHexColorString)(M);
                          l.isCanvasSupported &&
                            s.default.drawMarker(
                              b.x,
                              b.y,
                              this._eventManager.ghostCtx,
                              b.type,
                              b.size,
                              P,
                              P,
                              b.borderThickness
                            ),
                            (g[d].indexLabel ||
                              v.indexLabel ||
                              g[d].indexLabelFormatter ||
                              v.indexLabelFormatter) &&
                              this._indexLabels.push({
                                chartType: "scatter",
                                dataPoint: g[d],
                                dataSeries: v,
                                point: { x: a, y: n },
                                direction: 1,
                                bounds: {
                                  x1: a - b.size / 2,
                                  y1: n - b.size / 2,
                                  x2: a + b.size / 2,
                                  y2: n + b.size / 2,
                                },
                                color: null,
                              }),
                            (y = a),
                            (f = n);
                        }
                      }
                  }
                }
                t.restore(),
                  l.isCanvasSupported && this._eventManager.ghostCtx.restore();
                return {
                  source: t,
                  dest: this.plotArea.ctx,
                  animationCallback: o.default.fadeInAnimation,
                  easingFunction: o.default.easing.easeInQuad,
                  animationBase: 0,
                };
              }
            });
          var n = e("../helpers/render"),
            s = a(n),
            r = e("../helpers/animator"),
            o = a(r),
            l = e("../helpers/utils");
        },
        {
          "../helpers/animator": 37,
          "../helpers/render": 38,
          "../helpers/utils": 39,
        },
      ],
      13: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              function t(e) {
                var t = getBezierPoints(e, 2);
                if (t.length > 0) {
                  i.beginPath(),
                    a.isCanvasSupported && n.beginPath(),
                    i.moveTo(t[0].x, t[0].y),
                    a.isCanvasSupported && n.moveTo(t[0].x, t[0].y);
                  for (var s = 0; s < t.length - 3; s += 3)
                    i.bezierCurveTo(
                      t[s + 1].x,
                      t[s + 1].y,
                      t[s + 2].x,
                      t[s + 2].y,
                      t[s + 3].x,
                      t[s + 3].y
                    ),
                      a.isCanvasSupported &&
                        n.bezierCurveTo(
                          t[s + 1].x,
                          t[s + 1].y,
                          t[s + 2].x,
                          t[s + 2].y,
                          t[s + 3].x,
                          t[s + 3].y
                        ),
                      s > 0 &&
                        s % 3e3 == 0 &&
                        (i.stroke(),
                        i.beginPath(),
                        i.moveTo(t[s + 3].x, t[s + 3].y),
                        a.isCanvasSupported &&
                          (n.stroke(),
                          n.beginPath(),
                          n.moveTo(t[s + 3].x, t[s + 3].y)));
                  i.stroke(), a.isCanvasSupported && n.stroke();
                }
              }
              var i = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var n = this._eventManager.ghostCtx;
                i.save();
                var s = this.plotArea;
                i.beginPath(), i.rect(s.x1, s.y1, s.width, s.height), i.clip();
                for (var r = [], o = 0; o < e.dataSeriesIndexes.length; o++) {
                  var l = e.dataSeriesIndexes[o],
                    h = this.data[l];
                  i.lineWidth = h.lineThickness;
                  var d = h.dataPoints;
                  i.setLineDash &&
                    i.setLineDash(
                      getLineDashArray(h.lineDashType, h.lineThickness)
                    );
                  var c = h.id;
                  this._eventManager.objectMap[c] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: l,
                  };
                  var p = intToHexColorString(c);
                  (n.strokeStyle = p),
                    (n.lineWidth =
                      h.lineThickness > 0 ? Math.max(h.lineThickness, 4) : 0);
                  var x = h._colorSet,
                    u = x[0];
                  i.strokeStyle = u;
                  var m,
                    v,
                    g,
                    y = 0,
                    f = [];
                  if ((i.beginPath(), d.length > 0))
                    for (y = 0; y < d.length; y++)
                      if (
                        !(
                          (g = d[y].getTime ? d[y].x.getTime() : d[y].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          g > e.axisX.dataInfo.viewPortMax
                        )
                      )
                        if ("number" == typeof d[y].y) {
                          (m =
                            (e.axisX.conversionParameters.reference +
                              e.axisX.conversionParameters.pixelPerUnit *
                                (g - e.axisX.conversionParameters.minimum) +
                              0.5) <<
                            0),
                            (v =
                              (e.axisY.conversionParameters.reference +
                                e.axisY.conversionParameters.pixelPerUnit *
                                  (d[y].y -
                                    e.axisY.conversionParameters.minimum) +
                                0.5) <<
                              0);
                          var b = h.dataPointIds[y];
                          if (
                            ((this._eventManager.objectMap[b] = {
                              id: b,
                              objectType: "dataPoint",
                              dataSeriesIndex: l,
                              dataPointIndex: y,
                              x1: m,
                              y1: v,
                            }),
                            (f[f.length] = { x: m, y: v }),
                            d[y].markerSize > 0 || h.markerSize > 0)
                          ) {
                            var M = h.getMarkerProperties(y, m, v, i);
                            r.push(M);
                            var P = intToHexColorString(b);
                            a.isCanvasSupported &&
                              r.push({
                                x: m,
                                y: v,
                                ctx: n,
                                type: M.type,
                                size: M.size,
                                color: P,
                                borderColor: P,
                                borderThickness: M.borderThickness,
                              });
                          }
                          (d[y].indexLabel ||
                            h.indexLabel ||
                            d[y].indexLabelFormatter ||
                            h.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: "spline",
                              dataPoint: d[y],
                              dataSeries: h,
                              point: { x: m, y: v },
                              direction: d[y].y >= 0 ? 1 : -1,
                              color: u,
                            });
                        } else y > 0 && (t(f), (f = []));
                  t(f);
                }
                return (
                  RenderHelper.drawMarkers(r),
                  i.restore(),
                  i.beginPath(),
                  a.isCanvasSupported && n.beginPath(),
                  {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: AnimationHelper.xClipAnimation,
                    easingFunction: AnimationHelper.easing.linear,
                    animationBase: 0,
                  }
                );
              }
            });
          var a = e("../helpers/utils");
        },
        { "../helpers/utils": 39 },
      ],
      14: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              function t() {
                var t = getBezierPoints(P, 2);
                if (t.length > 0) {
                  i.beginPath(),
                    i.moveTo(t[0].x, t[0].y),
                    a.isCanvasSupported &&
                      (n.beginPath(), n.moveTo(t[0].x, t[0].y));
                  for (var o = 0; o < t.length - 3; o += 3)
                    i.bezierCurveTo(
                      t[o + 1].x,
                      t[o + 1].y,
                      t[o + 2].x,
                      t[o + 2].y,
                      t[o + 3].x,
                      t[o + 3].y
                    ),
                      a.isCanvasSupported &&
                        n.bezierCurveTo(
                          t[o + 1].x,
                          t[o + 1].y,
                          t[o + 2].x,
                          t[o + 2].y,
                          t[o + 3].x,
                          t[o + 3].y
                        );
                  c.lineThickness > 0 && i.stroke(),
                    e.axisY.viewportMinimum <= 0 && e.axisY.viewportMaximum >= 0
                      ? (y = b)
                      : e.axisY.viewportMaximum < 0
                      ? (y = r.y1)
                      : e.axisY.viewportMinimum > 0 && (y = s.y2),
                    (M = { x: t[0].x, y: t[0].y }),
                    i.lineTo(t[t.length - 1].x, y),
                    i.lineTo(M.x, y),
                    i.closePath(),
                    (i.globalAlpha = c.fillOpacity),
                    i.fill(),
                    (i.globalAlpha = 1),
                    a.isCanvasSupported &&
                      (n.lineTo(t[t.length - 1].x, y),
                      n.lineTo(M.x, y),
                      n.closePath(),
                      n.fill());
                }
              }
              var i = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var n = this._eventManager.ghostCtx,
                  s = e.axisX.lineCoordinates,
                  r = e.axisY.lineCoordinates,
                  o = [],
                  l = this.plotArea;
                i.save(),
                  a.isCanvasSupported && n.save(),
                  i.beginPath(),
                  i.rect(l.x1, l.y1, l.width, l.height),
                  i.clip(),
                  a.isCanvasSupported &&
                    (n.beginPath(),
                    n.rect(l.x1, l.y1, l.width, l.height),
                    n.clip());
                for (var h = 0; h < e.dataSeriesIndexes.length; h++) {
                  var d = e.dataSeriesIndexes[h],
                    c = this.data[d],
                    p = c.dataPoints,
                    x = c.id;
                  this._eventManager.objectMap[x] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: d,
                  };
                  var u = intToHexColorString(x);
                  (n.fillStyle = u), (o = []);
                  var m,
                    v,
                    g,
                    y,
                    f = 0,
                    b =
                      (e.axisY.conversionParameters.reference +
                        e.axisY.conversionParameters.pixelPerUnit *
                          (0 - e.axisY.conversionParameters.minimum) +
                        0.5) <<
                      0,
                    M = null,
                    P = [];
                  if (p.length > 0) {
                    for (
                      color = c._colorSet[f % c._colorSet.length],
                        i.fillStyle = color,
                        i.strokeStyle = color,
                        i.lineWidth = c.lineThickness,
                        i.setLineDash &&
                          i.setLineDash(
                            getLineDashArray(c.lineDashType, c.lineThickness)
                          );
                      f < p.length;
                      f++
                    )
                      if (
                        !(
                          (g = p[f].x.getTime ? p[f].x.getTime() : p[f].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          g > e.axisX.dataInfo.viewPortMax
                        )
                      )
                        if ("number" == typeof p[f].y) {
                          (m =
                            (e.axisX.conversionParameters.reference +
                              e.axisX.conversionParameters.pixelPerUnit *
                                (g - e.axisX.conversionParameters.minimum) +
                              0.5) <<
                            0),
                            (v =
                              (e.axisY.conversionParameters.reference +
                                e.axisY.conversionParameters.pixelPerUnit *
                                  (p[f].y -
                                    e.axisY.conversionParameters.minimum) +
                                0.5) <<
                              0);
                          var S = c.dataPointIds[f];
                          if (
                            ((this._eventManager.objectMap[S] = {
                              id: S,
                              objectType: "dataPoint",
                              dataSeriesIndex: d,
                              dataPointIndex: f,
                              x1: m,
                              y1: v,
                            }),
                            (P[P.length] = { x: m, y: v }),
                            0 !== p[f].markerSize &&
                              (p[f].markerSize > 0 || c.markerSize > 0))
                          ) {
                            var T = c.getMarkerProperties(f, m, v, i);
                            o.push(T);
                            var C = intToHexColorString(S);
                            a.isCanvasSupported &&
                              o.push({
                                x: m,
                                y: v,
                                ctx: n,
                                type: T.type,
                                size: T.size,
                                color: C,
                                borderColor: C,
                                borderThickness: T.borderThickness,
                              });
                          }
                          (p[f].indexLabel ||
                            c.indexLabel ||
                            p[f].indexLabelFormatter ||
                            c.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: "splineArea",
                              dataPoint: p[f],
                              dataSeries: c,
                              point: { x: m, y: v },
                              direction: p[f].y >= 0 ? 1 : -1,
                              color: color,
                            });
                        } else f > 0 && (t(), (P = []));
                    t(), RenderHelper.drawMarkers(o);
                  }
                }
                return (
                  i.restore(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.restore(),
                  {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: AnimationHelper.xClipAnimation,
                    easingFunction: AnimationHelper.easing.linear,
                    animationBase: 0,
                  }
                );
              }
            });
          var a = e("../helpers/utils");
        },
        { "../helpers/utils": 39 },
      ],
      15: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var i,
                  a,
                  n,
                  r = null,
                  h = [],
                  d = this.plotArea,
                  c = [],
                  p = [],
                  x = 0,
                  u =
                    (e.axisY.conversionParameters.reference +
                      e.axisY.conversionParameters.pixelPerUnit *
                        (0 - e.axisY.conversionParameters.minimum)) <<
                    0,
                  m = (e.axisX.dataInfo.minDiff, this._eventManager.ghostCtx);
                l.isCanvasSupported && m.beginPath(),
                  t.save(),
                  l.isCanvasSupported && m.save(),
                  t.beginPath(),
                  t.rect(d.x1, d.y1, d.width, d.height),
                  t.clip(),
                  l.isCanvasSupported &&
                    (m.beginPath(),
                    m.rect(d.x1, d.y1, d.width, d.height),
                    m.clip());
                for (var v = [], g = 0; g < e.dataSeriesIndexes.length; g++) {
                  var y,
                    f = e.dataSeriesIndexes[g],
                    b = this.data[f],
                    M = b.dataPoints;
                  for (b.dataPointIndexes = [], x = 0; x < M.length; x++)
                    (y = M[x].x.getTime ? M[x].x.getTime() : M[x].x),
                      (b.dataPointIndexes[y] = x),
                      v[y] || (p.push(y), (v[y] = !0));
                  p.sort(l.compareNumbers);
                }
                for (var g = 0; g < e.dataSeriesIndexes.length; g++) {
                  var f = e.dataSeriesIndexes[g],
                    b = this.data[f],
                    M = b.dataPoints,
                    P = !0,
                    S = [],
                    T = b.id;
                  this._eventManager.objectMap[T] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: f,
                  };
                  var C = (0, l.intToHexColorString)(T);
                  if (((m.fillStyle = C), p.length > 0)) {
                    for (
                      r = b._colorSet[0],
                        t.fillStyle = r,
                        t.strokeStyle = r,
                        t.lineWidth = b.lineThickness,
                        t.setLineDash &&
                          t.setLineDash(
                            (0, l.getLineDashArray)(
                              b.lineDashType,
                              b.lineThickness
                            )
                          ),
                        x = 0;
                      x < p.length;
                      x++
                    ) {
                      n = p[x];
                      var k = null;
                      if (
                        ((k =
                          b.dataPointIndexes[n] >= 0
                            ? M[b.dataPointIndexes[n]]
                            : { x: n, y: 0 }),
                        !(
                          n < e.axisX.dataInfo.viewPortMin ||
                          n > e.axisX.dataInfo.viewPortMax
                        ) && "number" == typeof k.y)
                      ) {
                        var i =
                            (e.axisX.conversionParameters.reference +
                              e.axisX.conversionParameters.pixelPerUnit *
                                (n - e.axisX.conversionParameters.minimum) +
                              0.5) <<
                            0,
                          a =
                            e.axisY.conversionParameters.reference +
                            e.axisY.conversionParameters.pixelPerUnit *
                              (k.y - e.axisY.conversionParameters.minimum),
                          w = c[n] ? c[n] : 0;
                        if (
                          ((a -= w),
                          S.push({ x: i, y: u - w }),
                          (c[n] = u - a),
                          P)
                        )
                          t.beginPath(),
                            t.moveTo(i, a),
                            l.isCanvasSupported &&
                              (m.beginPath(), m.moveTo(i, a)),
                            (P = !1);
                        else if (
                          (t.lineTo(i, a),
                          l.isCanvasSupported && m.lineTo(i, a),
                          x % 250 == 0)
                        ) {
                          for (
                            b.lineThickness > 0 && t.stroke();
                            S.length > 0;

                          ) {
                            var _ = S.pop();
                            t.lineTo(_.x, _.y),
                              l.isCanvasSupported && m.lineTo(_.x, _.y);
                          }
                          t.closePath(),
                            (t.globalAlpha = b.fillOpacity),
                            t.fill(),
                            (t.globalAlpha = 1),
                            t.beginPath(),
                            t.moveTo(i, a),
                            l.isCanvasSupported &&
                              (m.closePath(),
                              m.fill(),
                              m.beginPath(),
                              m.moveTo(i, a)),
                            S.push({ x: i, y: u - w });
                        }
                        if (b.dataPointIndexes[n] >= 0) {
                          var A = b.dataPointIds[b.dataPointIndexes[n]];
                          this._eventManager.objectMap[A] = {
                            id: A,
                            objectType: "dataPoint",
                            dataSeriesIndex: f,
                            dataPointIndex: b.dataPointIndexes[n],
                            x1: i,
                            y1: a,
                          };
                        }
                        if (
                          b.dataPointIndexes[n] >= 0 &&
                          0 !== k.markerSize &&
                          (k.markerSize > 0 || b.markerSize > 0)
                        ) {
                          var L = b.getMarkerProperties(x, i, a, t);
                          h.push(L),
                            (markerColor = (0, l.intToHexColorString)(A)),
                            l.isCanvasSupported &&
                              h.push({
                                x: i,
                                y: a,
                                ctx: m,
                                type: L.type,
                                size: L.size,
                                color: markerColor,
                                borderColor: markerColor,
                                borderThickness: L.borderThickness,
                              });
                        }
                        (k.indexLabel ||
                          b.indexLabel ||
                          k.indexLabelFormatter ||
                          b.indexLabelFormatter) &&
                          this._indexLabels.push({
                            chartType: "stackedArea",
                            dataPoint: k,
                            dataSeries: b,
                            point: { x: i, y: a },
                            direction: M[x].y >= 0 ? 1 : -1,
                            color: r,
                          });
                      }
                    }
                    for (b.lineThickness > 0 && t.stroke(); S.length > 0; ) {
                      var _ = S.pop();
                      t.lineTo(_.x, _.y),
                        l.isCanvasSupported && m.lineTo(_.x, _.y);
                    }
                    t.closePath(),
                      (t.globalAlpha = b.fillOpacity),
                      t.fill(),
                      (t.globalAlpha = 1),
                      t.beginPath(),
                      t.moveTo(i, a),
                      l.isCanvasSupported &&
                        (m.closePath(),
                        m.fill(),
                        m.beginPath(),
                        m.moveTo(i, a));
                  }
                  delete b.dataPointIndexes;
                }
                return (
                  s.default.drawMarkers(h),
                  t.restore(),
                  l.isCanvasSupported && m.restore(),
                  {
                    source: t,
                    dest: this.plotArea.ctx,
                    animationCallback: o.default.xClipAnimation,
                    easingFunction: o.default.easing.linear,
                    animationBase: 0,
                  }
                );
              }
            });
          var n = e("../helpers/render"),
            s = a(n),
            r = e("../helpers/animator"),
            o = a(r),
            l = e("../helpers/utils");
        },
        {
          "../helpers/animator": 37,
          "../helpers/render": 38,
          "../helpers/utils": 39,
        },
      ],
      16: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var i,
                  a,
                  n,
                  r = null,
                  h = this.plotArea,
                  d = [],
                  c = [],
                  p = [],
                  x = 0,
                  u =
                    (e.axisY.conversionParameters.reference +
                      e.axisY.conversionParameters.pixelPerUnit *
                        (0 - e.axisY.conversionParameters.minimum)) <<
                    0,
                  m = this.dataPointMaxWidth
                    ? this.dataPointMaxWidth
                    : (0.15 * this.width) << 0,
                  v = e.axisX.dataInfo.minDiff,
                  g =
                    ((h.width /
                      Math.abs(
                        e.axisX.viewportMaximum - e.axisX.viewportMinimum
                      )) *
                      Math.abs(v) *
                      0.9) <<
                    0,
                  y = this._eventManager.ghostCtx;
                t.save(),
                  l.isCanvasSupported && y.save(),
                  t.beginPath(),
                  t.rect(h.x1, h.y1, h.width, h.height),
                  t.clip(),
                  l.isCanvasSupported &&
                    (y.beginPath(),
                    y.rect(h.x1, h.y1, h.width, h.height),
                    y.clip());
                for (var f = [], b = 0; b < e.dataSeriesIndexes.length; b++) {
                  var M,
                    P = e.dataSeriesIndexes[b],
                    S = this.data[P],
                    T = S.dataPoints;
                  for (S.dataPointIndexes = [], x = 0; x < T.length; x++)
                    (M = T[x].x.getTime ? T[x].x.getTime() : T[x].x),
                      (S.dataPointIndexes[M] = x),
                      f[M] || (p.push(M), (f[M] = !0));
                  p.sort(l.compareNumbers);
                }
                for (var b = 0; b < e.dataSeriesIndexes.length; b++) {
                  var P = e.dataSeriesIndexes[b],
                    S = this.data[P],
                    T = S.dataPoints,
                    C = !0,
                    k = S.id;
                  this._eventManager.objectMap[k] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: P,
                  };
                  var w = (0, l.intToHexColorString)(k);
                  (y.fillStyle = w),
                    1 == T.length && (g = m),
                    g < 1 ? (g = 1) : g > m && (g = m);
                  var _ = [];
                  if (p.length > 0) {
                    for (
                      r = S._colorSet[x % S._colorSet.length],
                        t.fillStyle = r,
                        t.strokeStyle = r,
                        t.lineWidth = S.lineThickness,
                        t.setLineDash &&
                          t.setLineDash(
                            (0, l.getLineDashArray)(
                              S.lineDashType,
                              S.lineThickness
                            )
                          ),
                        x = 0;
                      x < p.length;
                      x++
                    ) {
                      n = p[x];
                      var A = null;
                      if (
                        ((A =
                          S.dataPointIndexes[n] >= 0
                            ? T[S.dataPointIndexes[n]]
                            : { x: n, y: 0 }),
                        !(
                          n < e.axisX.dataInfo.viewPortMin ||
                          n > e.axisX.dataInfo.viewPortMax
                        ) && "number" == typeof A.y)
                      ) {
                        var L;
                        L =
                          0 !== e.dataPointYSums[n]
                            ? (A.y / e.dataPointYSums[n]) * 100
                            : 0;
                        var i =
                            (e.axisX.conversionParameters.reference +
                              e.axisX.conversionParameters.pixelPerUnit *
                                (n - e.axisX.conversionParameters.minimum) +
                              0.5) <<
                            0,
                          a =
                            e.axisY.conversionParameters.reference +
                            e.axisY.conversionParameters.pixelPerUnit *
                              (L - e.axisY.conversionParameters.minimum),
                          I = c[n] ? c[n] : 0;
                        if (
                          ((a -= I),
                          _.push({ x: i, y: u - I }),
                          (c[n] = u - a),
                          C)
                        )
                          t.beginPath(),
                            t.moveTo(i, a),
                            l.isCanvasSupported &&
                              (y.beginPath(), y.moveTo(i, a)),
                            (C = !1);
                        else if (
                          (t.lineTo(i, a),
                          l.isCanvasSupported && y.lineTo(i, a),
                          x % 250 == 0)
                        ) {
                          for (
                            S.lineThickness > 0 && t.stroke();
                            _.length > 0;

                          ) {
                            var B = _.pop();
                            t.lineTo(B.x, B.y),
                              l.isCanvasSupported && y.lineTo(B.x, B.y);
                          }
                          t.closePath(),
                            (t.globalAlpha = S.fillOpacity),
                            t.fill(),
                            (t.globalAlpha = 1),
                            t.beginPath(),
                            t.moveTo(i, a),
                            l.isCanvasSupported &&
                              (y.closePath(),
                              y.fill(),
                              y.beginPath(),
                              y.moveTo(i, a)),
                            _.push({ x: i, y: u - I });
                        }
                        if (S.dataPointIndexes[n] >= 0) {
                          var F = S.dataPointIds[S.dataPointIndexes[n]];
                          this._eventManager.objectMap[F] = {
                            id: F,
                            objectType: "dataPoint",
                            dataSeriesIndex: P,
                            dataPointIndex: S.dataPointIndexes[n],
                            x1: i,
                            y1: a,
                          };
                        }
                        if (
                          S.dataPointIndexes[n] >= 0 &&
                          0 !== A.markerSize &&
                          (A.markerSize > 0 || S.markerSize > 0)
                        ) {
                          var z = S.getMarkerProperties(x, i, a, t);
                          d.push(z),
                            (markerColor = (0, l.intToHexColorString)(F)),
                            l.isCanvasSupported &&
                              d.push({
                                x: i,
                                y: a,
                                ctx: y,
                                type: z.type,
                                size: z.size,
                                color: markerColor,
                                borderColor: markerColor,
                                borderThickness: z.borderThickness,
                              });
                        }
                        (A.indexLabel ||
                          S.indexLabel ||
                          A.indexLabelFormatter ||
                          S.indexLabelFormatter) &&
                          this._indexLabels.push({
                            chartType: "stackedArea100",
                            dataPoint: A,
                            dataSeries: S,
                            point: { x: i, y: a },
                            direction: T[x].y >= 0 ? 1 : -1,
                            color: r,
                          });
                      }
                    }
                    for (S.lineThickness > 0 && t.stroke(); _.length > 0; ) {
                      var B = _.pop();
                      t.lineTo(B.x, B.y),
                        l.isCanvasSupported && y.lineTo(B.x, B.y);
                    }
                    t.closePath(),
                      (t.globalAlpha = S.fillOpacity),
                      t.fill(),
                      (t.globalAlpha = 1),
                      t.beginPath(),
                      t.moveTo(i, a),
                      l.isCanvasSupported &&
                        (y.closePath(),
                        y.fill(),
                        y.beginPath(),
                        y.moveTo(i, a));
                  }
                  delete S.dataPointIndexes;
                }
                return (
                  s.default.drawMarkers(d),
                  t.restore(),
                  l.isCanvasSupported && y.restore(),
                  {
                    source: t,
                    dest: this.plotArea.ctx,
                    animationCallback: o.default.xClipAnimation,
                    easingFunction: o.default.easing.linear,
                    animationBase: 0,
                  }
                );
              }
            });
          var n = e("../helpers/render"),
            s = a(n),
            r = e("../helpers/animator"),
            o = a(r),
            l = e("../helpers/utils");
        },
        {
          "../helpers/animator": 37,
          "../helpers/render": 38,
          "../helpers/utils": 39,
        },
      ],
      17: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var i,
                  n,
                  s,
                  r = null,
                  o = this.plotArea,
                  l = [],
                  h = [],
                  d = 0,
                  c =
                    (e.axisY.conversionParameters.reference +
                      e.axisY.conversionParameters.pixelPerUnit *
                        (0 - e.axisY.conversionParameters.minimum)) <<
                    0,
                  p = this.dataPointMaxWidth
                    ? this.dataPointMaxWidth
                    : (0.15 * this.height) << 0,
                  x = e.axisX.dataInfo.minDiff,
                  u =
                    ((((o.height /
                      Math.abs(
                        e.axisX.viewportMaximum - e.axisX.viewportMinimum
                      )) *
                      Math.abs(x)) /
                      e.plotType.plotUnits.length) *
                      0.9) <<
                    0;
                u > p ? (u = p) : x === 1 / 0 ? (u = p) : u < 1 && (u = 1),
                  t.save(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.save(),
                  t.beginPath(),
                  t.rect(o.x1, o.y1, o.width, o.height),
                  t.clip(),
                  a.isCanvasSupported &&
                    (this._eventManager.ghostCtx.rect(
                      o.x1,
                      o.y1,
                      o.width,
                      o.height
                    ),
                    this._eventManager.ghostCtx.clip());
                for (var m = 0; m < e.dataSeriesIndexes.length; m++) {
                  var v = e.dataSeriesIndexes[m],
                    g = this.data[v],
                    y = g.dataPoints;
                  if (y.length > 0) {
                    var f = !!(u > 5 && g.bevelEnabled);
                    for (t.strokeStyle = "#4572A7 ", d = 0; d < y.length; d++)
                      if (
                        !(
                          (s = y[d].x.getTime ? y[d].x.getTime() : y[d].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          s > e.axisX.dataInfo.viewPortMax
                        ) &&
                        "number" == typeof y[d].y
                      ) {
                        (n =
                          (e.axisX.conversionParameters.reference +
                            e.axisX.conversionParameters.pixelPerUnit *
                              (s - e.axisX.conversionParameters.minimum) +
                            0.5) <<
                          0),
                          (i =
                            e.axisY.conversionParameters.reference +
                            e.axisY.conversionParameters.pixelPerUnit *
                              (y[d].y - e.axisY.conversionParameters.minimum));
                        var b,
                          M,
                          P =
                            (n -
                              (e.plotType.plotUnits.length * u) / 2 +
                              e.index * u) <<
                            0,
                          S = (P + u) << 0;
                        if (y[d].y >= 0) {
                          var T = l[s] ? l[s] : 0;
                          (b = c + T), (M = i + T), (l[s] = T + (M - b));
                        } else {
                          var T = h[s] ? h[s] : 0;
                          (b = i - T), (M = c - T), (h[s] = T + (M - b));
                        }
                        (r = y[d].color
                          ? y[d].color
                          : g._colorSet[d % g._colorSet.length]),
                          drawRect(
                            t,
                            b,
                            P,
                            M,
                            S,
                            r,
                            0,
                            null,
                            f,
                            !1,
                            !1,
                            !1,
                            g.fillOpacity
                          );
                        var C = g.dataPointIds[d];
                        (this._eventManager.objectMap[C] = {
                          id: C,
                          objectType: "dataPoint",
                          dataSeriesIndex: v,
                          dataPointIndex: d,
                          x1: b,
                          y1: P,
                          x2: M,
                          y2: S,
                        }),
                          (r = intToHexColorString(C)),
                          a.isCanvasSupported &&
                            drawRect(
                              this._eventManager.ghostCtx,
                              b,
                              P,
                              M,
                              S,
                              r,
                              0,
                              null,
                              !1,
                              !1,
                              !1,
                              !1
                            ),
                          (y[d].indexLabel ||
                            g.indexLabel ||
                            y[d].indexLabelFormatter ||
                            g.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: "stackedBar",
                              dataPoint: y[d],
                              dataSeries: g,
                              point: { x: y[d].y >= 0 ? M : b, y: n },
                              direction: y[d].y >= 0 ? 1 : -1,
                              bounds: {
                                x1: Math.min(b, M),
                                y1: P,
                                x2: Math.max(b, M),
                                y2: S,
                              },
                              color: r,
                            });
                      }
                  }
                }
                t.restore(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.restore();
                var k = Math.max(c, e.axisX.boundingRect.x2);
                return {
                  source: t,
                  dest: this.plotArea.ctx,
                  animationCallback: AnimationHelper.xScaleAnimation,
                  easingFunction: AnimationHelper.easing.easeOutQuart,
                  animationBase: k,
                };
              }
            });
          var a = e("../helpers/utils");
        },
        { "../helpers/utils": 39 },
      ],
      18: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var i,
                  n,
                  s,
                  r = null,
                  o = this.plotArea,
                  l = [],
                  h = [],
                  d = 0,
                  c =
                    (e.axisY.conversionParameters.reference +
                      e.axisY.conversionParameters.pixelPerUnit *
                        (0 - e.axisY.conversionParameters.minimum)) <<
                    0,
                  p = this.dataPointMaxWidth
                    ? this.dataPointMaxWidth
                    : (0.15 * this.height) << 0,
                  x = e.axisX.dataInfo.minDiff,
                  u =
                    ((((o.height /
                      Math.abs(
                        e.axisX.viewportMaximum - e.axisX.viewportMinimum
                      )) *
                      Math.abs(x)) /
                      e.plotType.plotUnits.length) *
                      0.9) <<
                    0;
                u > p ? (u = p) : x === 1 / 0 ? (u = p) : u < 1 && (u = 1),
                  t.save(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.save(),
                  t.beginPath(),
                  t.rect(o.x1, o.y1, o.width, o.height),
                  t.clip(),
                  a.isCanvasSupported &&
                    (this._eventManager.ghostCtx.rect(
                      o.x1,
                      o.y1,
                      o.width,
                      o.height
                    ),
                    this._eventManager.ghostCtx.clip());
                for (var m = 0; m < e.dataSeriesIndexes.length; m++) {
                  var v = e.dataSeriesIndexes[m],
                    g = this.data[v],
                    y = g.dataPoints;
                  if (y.length > 0) {
                    var f = !!(u > 5 && g.bevelEnabled);
                    for (t.strokeStyle = "#4572A7 ", d = 0; d < y.length; d++)
                      if (
                        !(
                          (s = y[d].x.getTime ? y[d].x.getTime() : y[d].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          s > e.axisX.dataInfo.viewPortMax
                        ) &&
                        "number" == typeof y[d].y
                      ) {
                        n =
                          (e.axisX.conversionParameters.reference +
                            e.axisX.conversionParameters.pixelPerUnit *
                              (s - e.axisX.conversionParameters.minimum) +
                            0.5) <<
                          0;
                        var b;
                        (b =
                          0 !== e.dataPointYSums[s]
                            ? (y[d].y / e.dataPointYSums[s]) * 100
                            : 0),
                          (i =
                            e.axisY.conversionParameters.reference +
                            e.axisY.conversionParameters.pixelPerUnit *
                              (b - e.axisY.conversionParameters.minimum));
                        var M,
                          P,
                          S =
                            (n -
                              (e.plotType.plotUnits.length * u) / 2 +
                              e.index * u) <<
                            0,
                          T = (S + u) << 0;
                        if (y[d].y >= 0) {
                          var C = l[s] ? l[s] : 0;
                          (M = c + C), (P = i + C), (l[s] = C + (P - M));
                        } else {
                          var C = h[s] ? h[s] : 0;
                          (M = i - C), (P = c - C), (h[s] = C + (P - M));
                        }
                        (r = y[d].color
                          ? y[d].color
                          : g._colorSet[d % g._colorSet.length]),
                          drawRect(
                            t,
                            M,
                            S,
                            P,
                            T,
                            r,
                            0,
                            null,
                            f,
                            !1,
                            !1,
                            !1,
                            g.fillOpacity
                          );
                        var k = g.dataPointIds[d];
                        (this._eventManager.objectMap[k] = {
                          id: k,
                          objectType: "dataPoint",
                          dataSeriesIndex: v,
                          dataPointIndex: d,
                          x1: M,
                          y1: S,
                          x2: P,
                          y2: T,
                        }),
                          (r = intToHexColorString(k)),
                          a.isCanvasSupported &&
                            drawRect(
                              this._eventManager.ghostCtx,
                              M,
                              S,
                              P,
                              T,
                              r,
                              0,
                              null,
                              !1,
                              !1,
                              !1,
                              !1
                            ),
                          (y[d].indexLabel ||
                            g.indexLabel ||
                            y[d].indexLabelFormatter ||
                            g.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: "stackedBar100",
                              dataPoint: y[d],
                              dataSeries: g,
                              point: { x: y[d].y >= 0 ? P : M, y: n },
                              direction: y[d].y >= 0 ? 1 : -1,
                              bounds: {
                                x1: Math.min(M, P),
                                y1: S,
                                x2: Math.max(M, P),
                                y2: T,
                              },
                              color: r,
                            });
                      }
                  }
                }
                t.restore(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.restore();
                var w = Math.max(c, e.axisX.boundingRect.x2);
                return {
                  source: t,
                  dest: this.plotArea.ctx,
                  animationCallback: AnimationHelper.xScaleAnimation,
                  easingFunction: AnimationHelper.easing.easeOutQuart,
                  animationBase: w,
                };
              }
            });
          var a = e("../helpers/utils");
        },
        { "../helpers/utils": 39 },
      ],
      19: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var i,
                  n,
                  s,
                  r = null,
                  o = this.plotArea,
                  l = [],
                  h = [],
                  d = 0,
                  c =
                    (e.axisY.conversionParameters.reference +
                      e.axisY.conversionParameters.pixelPerUnit *
                        (0 - e.axisY.conversionParameters.minimum)) <<
                    0,
                  p = this.dataPointMaxWidth
                    ? this.dataPointMaxWidth
                    : (0.15 * this.width) << 0,
                  x = e.axisX.dataInfo.minDiff,
                  u =
                    ((((o.width /
                      Math.abs(
                        e.axisX.viewportMaximum - e.axisX.viewportMinimum
                      )) *
                      Math.abs(x)) /
                      e.plotType.plotUnits.length) *
                      0.9) <<
                    0;
                u > p ? (u = p) : x === 1 / 0 ? (u = p) : u < 1 && (u = 1),
                  t.save(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.save(),
                  t.beginPath(),
                  t.rect(o.x1, o.y1, o.width, o.height),
                  t.clip(),
                  a.isCanvasSupported &&
                    (this._eventManager.ghostCtx.rect(
                      o.x1,
                      o.y1,
                      o.width,
                      o.height
                    ),
                    this._eventManager.ghostCtx.clip());
                for (var m = 0; m < e.dataSeriesIndexes.length; m++) {
                  var v = e.dataSeriesIndexes[m],
                    g = this.data[v],
                    y = g.dataPoints;
                  if (y.length > 0) {
                    var f = !!(u > 5 && g.bevelEnabled);
                    for (t.strokeStyle = "#4572A7 ", d = 0; d < y.length; d++)
                      if (
                        !(
                          (s = y[d].x.getTime ? y[d].x.getTime() : y[d].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          s > e.axisX.dataInfo.viewPortMax
                        ) &&
                        "number" == typeof y[d].y
                      ) {
                        (i =
                          (e.axisX.conversionParameters.reference +
                            e.axisX.conversionParameters.pixelPerUnit *
                              (s - e.axisX.conversionParameters.minimum) +
                            0.5) <<
                          0),
                          (n =
                            e.axisY.conversionParameters.reference +
                            e.axisY.conversionParameters.pixelPerUnit *
                              (y[d].y - e.axisY.conversionParameters.minimum));
                        var b,
                          M,
                          P =
                            (i -
                              (e.plotType.plotUnits.length * u) / 2 +
                              e.index * u) <<
                            0,
                          S = (P + u) << 0;
                        if (y[d].y >= 0) {
                          var T = l[s] ? l[s] : 0;
                          (b = n - T), (M = c - T), (l[s] = T + (M - b));
                        } else {
                          var T = h[s] ? h[s] : 0;
                          (M = n + T), (b = c + T), (h[s] = T + (M - b));
                        }
                        (r = y[d].color
                          ? y[d].color
                          : g._colorSet[d % g._colorSet.length]),
                          drawRect(
                            t,
                            P,
                            b,
                            S,
                            M,
                            r,
                            0,
                            null,
                            f && y[d].y >= 0,
                            y[d].y < 0 && f,
                            !1,
                            !1,
                            g.fillOpacity
                          );
                        var C = g.dataPointIds[d];
                        (this._eventManager.objectMap[C] = {
                          id: C,
                          objectType: "dataPoint",
                          dataSeriesIndex: v,
                          dataPointIndex: d,
                          x1: P,
                          y1: b,
                          x2: S,
                          y2: M,
                        }),
                          (r = intToHexColorString(C)),
                          a.isCanvasSupported &&
                            drawRect(
                              this._eventManager.ghostCtx,
                              P,
                              b,
                              S,
                              M,
                              r,
                              0,
                              null,
                              !1,
                              !1,
                              !1,
                              !1
                            ),
                          (y[d].indexLabel ||
                            g.indexLabel ||
                            y[d].indexLabelFormatter ||
                            g.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: "stackedColumn",
                              dataPoint: y[d],
                              dataSeries: g,
                              point: { x: i, y: y[d].y >= 0 ? b : M },
                              direction: y[d].y >= 0 ? 1 : -1,
                              bounds: {
                                x1: P,
                                y1: Math.min(b, M),
                                x2: S,
                                y2: Math.max(b, M),
                              },
                              color: r,
                            });
                      }
                  }
                }
                t.restore(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.restore();
                var k = Math.min(c, e.axisY.boundingRect.y2);
                return {
                  source: t,
                  dest: this.plotArea.ctx,
                  animationCallback: AnimationHelper.yScaleAnimation,
                  easingFunction: AnimationHelper.easing.easeOutQuart,
                  animationBase: k,
                };
              }
            });
          var a = e("../helpers/utils");
        },
        { "../helpers/utils": 39 },
      ],
      20: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var i,
                  n,
                  s,
                  r = null,
                  o = this.plotArea,
                  l = [],
                  h = [],
                  d = 0,
                  c =
                    (e.axisY.conversionParameters.reference +
                      e.axisY.conversionParameters.pixelPerUnit *
                        (0 - e.axisY.conversionParameters.minimum)) <<
                    0,
                  p = this.dataPointMaxWidth
                    ? this.dataPointMaxWidth
                    : (0.15 * this.width) << 0,
                  x = e.axisX.dataInfo.minDiff,
                  u =
                    ((((o.width /
                      Math.abs(
                        e.axisX.viewportMaximum - e.axisX.viewportMinimum
                      )) *
                      Math.abs(x)) /
                      e.plotType.plotUnits.length) *
                      0.9) <<
                    0;
                u > p ? (u = p) : x === 1 / 0 ? (u = p) : u < 1 && (u = 1),
                  t.save(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.save(),
                  t.beginPath(),
                  t.rect(o.x1, o.y1, o.width, o.height),
                  t.clip(),
                  a.isCanvasSupported &&
                    (this._eventManager.ghostCtx.rect(
                      o.x1,
                      o.y1,
                      o.width,
                      o.height
                    ),
                    this._eventManager.ghostCtx.clip());
                for (var m = 0; m < e.dataSeriesIndexes.length; m++) {
                  var v = e.dataSeriesIndexes[m],
                    g = this.data[v],
                    y = g.dataPoints;
                  if (y.length > 0) {
                    var f = !!(u > 5 && g.bevelEnabled);
                    for (d = 0; d < y.length; d++)
                      if (
                        !(
                          (s = y[d].x.getTime ? y[d].x.getTime() : y[d].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          s > e.axisX.dataInfo.viewPortMax
                        ) &&
                        "number" == typeof y[d].y
                      ) {
                        i =
                          (e.axisX.conversionParameters.reference +
                            e.axisX.conversionParameters.pixelPerUnit *
                              (s - e.axisX.conversionParameters.minimum) +
                            0.5) <<
                          0;
                        var b;
                        (b =
                          0 !== e.dataPointYSums[s]
                            ? (y[d].y / e.dataPointYSums[s]) * 100
                            : 0),
                          (n =
                            e.axisY.conversionParameters.reference +
                            e.axisY.conversionParameters.pixelPerUnit *
                              (b - e.axisY.conversionParameters.minimum));
                        var M,
                          P,
                          S =
                            (i -
                              (e.plotType.plotUnits.length * u) / 2 +
                              e.index * u) <<
                            0,
                          T = (S + u) << 0;
                        if (y[d].y >= 0) {
                          var C = l[s] ? l[s] : 0;
                          (M = n - C), (P = c - C), (l[s] = C + (P - M));
                        } else {
                          var C = h[s] ? h[s] : 0;
                          (P = n + C), (M = c + C), (h[s] = C + (P - M));
                        }
                        (r = y[d].color
                          ? y[d].color
                          : g._colorSet[d % g._colorSet.length]),
                          drawRect(
                            t,
                            S,
                            M,
                            T,
                            P,
                            r,
                            0,
                            null,
                            f && y[d].y >= 0,
                            y[d].y < 0 && f,
                            !1,
                            !1,
                            g.fillOpacity
                          );
                        var k = g.dataPointIds[d];
                        (this._eventManager.objectMap[k] = {
                          id: k,
                          objectType: "dataPoint",
                          dataSeriesIndex: v,
                          dataPointIndex: d,
                          x1: S,
                          y1: M,
                          x2: T,
                          y2: P,
                        }),
                          (r = intToHexColorString(k)),
                          a.isCanvasSupported &&
                            drawRect(
                              this._eventManager.ghostCtx,
                              S,
                              M,
                              T,
                              P,
                              r,
                              0,
                              null,
                              !1,
                              !1,
                              !1,
                              !1
                            ),
                          (y[d].indexLabel ||
                            g.indexLabel ||
                            y[d].indexLabelFormatter ||
                            g.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: "stackedColumn100",
                              dataPoint: y[d],
                              dataSeries: g,
                              point: { x: i, y: y[d].y >= 0 ? M : P },
                              direction: y[d].y >= 0 ? 1 : -1,
                              bounds: {
                                x1: S,
                                y1: Math.min(M, P),
                                x2: T,
                                y2: Math.max(M, P),
                              },
                              color: r,
                            });
                      }
                  }
                }
                t.restore(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.restore();
                var w = Math.min(c, e.axisY.boundingRect.y2);
                return {
                  source: t,
                  dest: this.plotArea.ctx,
                  animationCallback: AnimationHelper.yScaleAnimation,
                  easingFunction: AnimationHelper.easing.easeOutQuart,
                  animationBase: w,
                };
              }
            });
          var a = e("../helpers/utils");
        },
        { "../helpers/utils": 39 },
      ],
      21: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.default = function (e) {
              function t() {
                P &&
                  (c.lineThickness > 0 && i.stroke(),
                  e.axisY.viewportMinimum <= 0 && e.axisY.viewportMaximum >= 0
                    ? (y = M)
                    : e.axisY.viewportMaximum < 0
                    ? (y = r.y1)
                    : e.axisY.viewportMinimum > 0 && (y = s.y2),
                  i.lineTo(m, y),
                  i.lineTo(P.x, y),
                  i.closePath(),
                  (i.globalAlpha = c.fillOpacity),
                  i.fill(),
                  (i.globalAlpha = 1),
                  a.isCanvasSupported &&
                    (n.lineTo(m, y), n.lineTo(P.x, y), n.closePath(), n.fill()),
                  i.beginPath(),
                  i.moveTo(m, v),
                  n.beginPath(),
                  n.moveTo(m, v),
                  (P = { x: m, y: v }));
              }
              var i = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var n = this._eventManager.ghostCtx,
                  s = e.axisX.lineCoordinates,
                  r = e.axisY.lineCoordinates,
                  o = [],
                  l = this.plotArea;
                i.save(),
                  a.isCanvasSupported && n.save(),
                  i.beginPath(),
                  i.rect(l.x1, l.y1, l.width, l.height),
                  i.clip(),
                  a.isCanvasSupported &&
                    (n.beginPath(),
                    n.rect(l.x1, l.y1, l.width, l.height),
                    n.clip());
                for (var h = 0; h < e.dataSeriesIndexes.length; h++) {
                  var d = e.dataSeriesIndexes[h],
                    c = this.data[d],
                    p = c.dataPoints,
                    x = c.id;
                  this._eventManager.objectMap[x] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: d,
                  };
                  var u = intToHexColorString(x);
                  (n.fillStyle = u), (o = []);
                  var m,
                    v,
                    g,
                    y,
                    f = !0,
                    b = 0,
                    M =
                      (e.axisY.conversionParameters.reference +
                        e.axisY.conversionParameters.pixelPerUnit *
                          (0 - e.axisY.conversionParameters.minimum) +
                        0.5) <<
                      0,
                    P = null,
                    S = !1;
                  if (p.length > 0) {
                    var T = c._colorSet[b % c._colorSet.length];
                    for (
                      i.fillStyle = T,
                        i.strokeStyle = T,
                        i.lineWidth = c.lineThickness,
                        i.setLineDash &&
                          i.setLineDash(
                            getLineDashArray(c.lineDashType, c.lineThickness)
                          );
                      b < p.length;
                      b++
                    )
                      if (
                        !(
                          (g = p[b].x.getTime ? p[b].x.getTime() : p[b].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          g > e.axisX.dataInfo.viewPortMax
                        )
                      ) {
                        var C = v;
                        if ("number" == typeof p[b].y) {
                          (m =
                            (e.axisX.conversionParameters.reference +
                              e.axisX.conversionParameters.pixelPerUnit *
                                (g - e.axisX.conversionParameters.minimum) +
                              0.5) <<
                            0),
                            (v =
                              (e.axisY.conversionParameters.reference +
                                e.axisY.conversionParameters.pixelPerUnit *
                                  (p[b].y -
                                    e.axisY.conversionParameters.minimum) +
                                0.5) <<
                              0),
                            f || S
                              ? (i.beginPath(),
                                i.moveTo(m, v),
                                (P = { x: m, y: v }),
                                a.isCanvasSupported &&
                                  (n.beginPath(), n.moveTo(m, v)),
                                (f = !1),
                                (S = !1))
                              : (i.lineTo(m, C),
                                a.isCanvasSupported && n.lineTo(m, C),
                                i.lineTo(m, v),
                                a.isCanvasSupported && n.lineTo(m, v),
                                b % 250 == 0 && t());
                          var k = c.dataPointIds[b];
                          if (
                            ((this._eventManager.objectMap[k] = {
                              id: k,
                              objectType: "dataPoint",
                              dataSeriesIndex: d,
                              dataPointIndex: b,
                              x1: m,
                              y1: v,
                            }),
                            0 !== p[b].markerSize &&
                              (p[b].markerSize > 0 || c.markerSize > 0))
                          ) {
                            var w = c.getMarkerProperties(b, m, v, i);
                            o.push(w);
                            var _ = intToHexColorString(k);
                            a.isCanvasSupported &&
                              o.push({
                                x: m,
                                y: v,
                                ctx: n,
                                type: w.type,
                                size: w.size,
                                color: _,
                                borderColor: _,
                                borderThickness: w.borderThickness,
                              });
                          }
                          (p[b].indexLabel ||
                            c.indexLabel ||
                            p[b].indexLabelFormatter ||
                            c.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: "stepArea",
                              dataPoint: p[b],
                              dataSeries: c,
                              point: { x: m, y: v },
                              direction: p[b].y >= 0 ? 1 : -1,
                              color: T,
                            });
                        } else t(), (S = !0);
                      }
                    t(), RenderHelper.drawMarkers(o);
                  }
                }
                return (
                  i.restore(),
                  a.isCanvasSupported && this._eventManager.ghostCtx.restore(),
                  {
                    source: i,
                    dest: this.plotArea.ctx,
                    animationCallback: AnimationHelper.xClipAnimation,
                    easingFunction: AnimationHelper.easing.linear,
                    animationBase: 0,
                  }
                );
              }
            });
          var a = e("../helpers/utils");
        },
        { "../helpers/utils": 39 },
      ],
      22: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 });
          (i.cultures = { en: {} }),
            (i.constants = {
              numberDuration: 1,
              yearDuration: 314496e5,
              monthDuration: 2592e6,
              weekDuration: 6048e5,
              dayDuration: 864e5,
              hourDuration: 36e5,
              minuteDuration: 6e4,
              secondDuration: 1e3,
              millisecondDuration: 1,
              dayOfWeekFromInt: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
            });
        },
        {},
      ],
      23: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 });
          (i.isDebugMode = !1),
            (i.isCanvasSupported =
              !!document.createElement("canvas").getContext),
            (i.defaultOptions = {
              Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                zoomType: "x",
                backgroundColor: "white",
                theme: "theme1",
                animationEnabled: !1,
                animationDuration: 1200,
                dataPointMaxWidth: null,
                colorSet: "colorSet1",
                culture: "en",
                creditText: "CanvasJS.com",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart",
                rangeChanging: null,
                rangeChanged: null,
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
                backgroundColor: null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
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
                dockInsidePlotArea: !1,
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
                maxWidth: null,
                maxHeight: null,
                itemMaxWidth: null,
                itemWidth: null,
                itemWrap: !0,
                itemTextFormatter: null,
              },
              ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: null,
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: "#000000",
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic",
              },
              Axis: {
                minimum: null,
                maximum: null,
                viewportMinimum: null,
                viewportMaximum: null,
                interval: null,
                intervalType: null,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !1,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                prefix: "",
                suffix: "",
                includeZero: !0,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: null,
                valueFormatString: null,
                margin: 2,
                stripLines: [],
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
                labelBackgroundColor: "#EEEEEE",
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                showOnTop: !1,
              },
              DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: null,
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: null,
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 2,
                lineDashType: "solid",
                color: null,
                risingColor: "white",
                fillOpacity: null,
                startAngle: 0,
                radius: null,
                innerRadius: null,
                type: "column",
                xValueType: "number",
                axisYType: "primary",
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: null,
                legendMarkerBorderThickness: null,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: null,
                markerBorderThickness: null,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0,
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
                saveJPGText: "Save as JPG",
                savePNGText: "Save as PNG",
                days: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                shortMonths: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
              },
            });
        },
        {},
      ],
      24: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.themes = i.colorSets = void 0);
          var a = e("../helpers/utils");
          (i.colorSets = {
            colorSet1: [
              "#369EAD",
              "#C24642",
              "#7F6084",
              "#86B402",
              "#A2D1CF",
              "#C8B631",
              "#6DBCEB",
              "#52514E",
              "#4F81BC",
              "#A064A1",
              "#F79647",
            ],
            colorSet2: [
              "#4F81BC",
              "#C0504E",
              "#9BBB58",
              "#23BFAA",
              "#8064A1",
              "#4AACC5",
              "#F79647",
              "#33558B",
            ],
            colorSet3: [
              "#8CA1BC",
              "#36845C",
              "#017E82",
              "#8CB9D0",
              "#708C98",
              "#94838D",
              "#F08891",
              "#0366A7",
              "#008276",
              "#EE7757",
              "#E5BA3A",
              "#F2990B",
              "#03557B",
              "#782970",
            ],
          }),
            (i.themes = {
              theme1: {
                Chart: { colorSet: "colorSet1" },
                Title: {
                  fontFamily: a.isCanvasSupported
                    ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif"
                    : "calibri",
                  fontSize: 33,
                  fontColor: "#3A3A3A",
                  fontWeight: "bold",
                  verticalAlign: "top",
                  margin: 5,
                },
                Subtitle: {
                  fontFamily: a.isCanvasSupported
                    ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif"
                    : "calibri",
                  fontSize: 16,
                  fontColor: "#3A3A3A",
                  fontWeight: "bold",
                  verticalAlign: "top",
                  margin: 5,
                },
                Axis: {
                  titleFontSize: 26,
                  titleFontColor: "#666666",
                  titleFontFamily: a.isCanvasSupported
                    ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif"
                    : "calibri",
                  labelFontFamily: a.isCanvasSupported
                    ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif"
                    : "calibri",
                  labelFontSize: 18,
                  labelFontColor: "grey",
                  tickColor: "#BBBBBB",
                  tickThickness: 2,
                  gridThickness: 2,
                  gridColor: "#BBBBBB",
                  lineThickness: 2,
                  lineColor: "#BBBBBB",
                },
                Legend: {
                  verticalAlign: "bottom",
                  horizontalAlign: "center",
                  fontFamily: a.isCanvasSupported
                    ? "monospace, sans-serif,arial black"
                    : "calibri",
                },
                DataSeries: {
                  indexLabelFontColor: "grey",
                  indexLabelFontFamily: a.isCanvasSupported
                    ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif"
                    : "calibri",
                  indexLabelFontSize: 18,
                  indexLabelLineThickness: 1,
                },
              },
              theme2: {
                Chart: { colorSet: "colorSet2" },
                Title: {
                  fontFamily: "impact, charcoal, arial black, sans-serif",
                  fontSize: 32,
                  fontColor: "#333333",
                  verticalAlign: "top",
                  margin: 5,
                },
                Subtitle: {
                  fontFamily: "impact, charcoal, arial black, sans-serif",
                  fontSize: 14,
                  fontColor: "#333333",
                  verticalAlign: "top",
                  margin: 5,
                },
                Axis: {
                  titleFontSize: 22,
                  titleFontColor: "rgb(98,98,98)",
                  titleFontFamily: a.isCanvasSupported
                    ? "monospace, sans-serif,arial black"
                    : "arial",
                  titleFontWeight: "bold",
                  labelFontFamily: a.isCanvasSupported
                    ? "monospace, Courier New, Courier"
                    : "arial",
                  labelFontSize: 16,
                  labelFontColor: "grey",
                  labelFontWeight: "bold",
                  tickColor: "grey",
                  tickThickness: 2,
                  gridThickness: 2,
                  gridColor: "grey",
                  lineColor: "grey",
                  lineThickness: 0,
                },
                Legend: {
                  verticalAlign: "bottom",
                  horizontalAlign: "center",
                  fontFamily: a.isCanvasSupported
                    ? "monospace, sans-serif,arial black"
                    : "arial",
                },
                DataSeries: {
                  indexLabelFontColor: "grey",
                  indexLabelFontFamily: a.isCanvasSupported
                    ? "Courier New, Courier, monospace"
                    : "arial",
                  indexLabelFontWeight: "bold",
                  indexLabelFontSize: 18,
                  indexLabelLineThickness: 1,
                },
              },
              theme3: {
                Chart: { colorSet: "colorSet1" },
                Title: {
                  fontFamily: a.isCanvasSupported
                    ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif"
                    : "calibri",
                  fontSize: 32,
                  fontColor: "#3A3A3A",
                  fontWeight: "bold",
                  verticalAlign: "top",
                  margin: 5,
                },
                Subtitle: {
                  fontFamily: a.isCanvasSupported
                    ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif"
                    : "calibri",
                  fontSize: 16,
                  fontColor: "#3A3A3A",
                  fontWeight: "bold",
                  verticalAlign: "top",
                  margin: 5,
                },
                Axis: {
                  titleFontSize: 22,
                  titleFontColor: "rgb(98,98,98)",
                  titleFontFamily: a.isCanvasSupported
                    ? "Verdana, Geneva, Calibri, sans-serif"
                    : "calibri",
                  labelFontFamily: a.isCanvasSupported
                    ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif"
                    : "calibri",
                  labelFontSize: 18,
                  labelFontColor: "grey",
                  tickColor: "grey",
                  tickThickness: 2,
                  gridThickness: 2,
                  gridColor: "grey",
                  lineThickness: 2,
                  lineColor: "grey",
                },
                Legend: {
                  verticalAlign: "bottom",
                  horizontalAlign: "center",
                  fontFamily: a.isCanvasSupported
                    ? "monospace, sans-serif,arial black"
                    : "calibri",
                },
                DataSeries: {
                  bevelEnabled: !0,
                  indexLabelFontColor: "grey",
                  indexLabelFontFamily: a.isCanvasSupported
                    ? "Candara, Optima, Calibri, Verdana, Geneva, sans-serif"
                    : "calibri",
                  indexLabelFontSize: 18,
                  indexLabelLineColor: "lightgrey",
                  indexLabelLineThickness: 2,
                },
              },
            });
        },
        { "../helpers/utils": 39 },
      ],
      25: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            (this.chart = e),
              (this.ctx = this.chart.plotArea.ctx),
              (this.animations = []),
              (this.animationRequestId = null);
          }
          Object.defineProperty(i, "__esModule", { value: !0 });
          var n = e("../helpers/animator"),
            s = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(n);
          (a.prototype.animate = function (e, t, i, a, n) {
            var r = this;
            (this.chart.isAnimating = !0),
              (n = n || s.default.easing.linear),
              i &&
                this.animations.push({
                  startTime: new Date().getTime() + (e || 0),
                  duration: t,
                  animationCallback: i,
                  onComplete: a,
                });
            for (var o = []; this.animations.length > 0; ) {
              var l = this.animations.shift(),
                h = new Date().getTime(),
                d = 0;
              l.startTime <= h &&
                ((d = n(
                  Math.min(h - l.startTime, l.duration),
                  0,
                  1,
                  l.duration
                )),
                (d = Math.min(d, 1)),
                (!isNaN(d) && isFinite(d)) || (d = 1)),
                d < 1 && o.push(l),
                l.animationCallback(d),
                d >= 1 && l.onComplete && l.onComplete();
            }
            (this.animations = o),
              this.animations.length > 0
                ? (this.animationRequestId = this.chart.requestAnimFrame.call(
                    window,
                    function () {
                      r.animate.call(r);
                    }
                  ))
                : (this.chart.isAnimating = !1);
          }),
            (a.prototype.cancelAllAnimations = function () {
              (this.animations = []),
                this.animationRequestId &&
                  this.chart.cancelRequestAnimFrame.call(
                    window,
                    this.animationRequestId
                  ),
                (this.animationRequestId = null),
                (this.chart.isAnimating = !1);
            }),
            (i.default = a);
        },
        { "../helpers/animator": 37 },
      ],
      26: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function n(e, t, i, a) {
            if (
              (n.base.constructor.call(this, "Axis", t, e.theme),
              (this.chart = e),
              (this.canvas = e.canvas),
              (this.ctx = e.ctx),
              (this.maxWidth = 0),
              (this.maxHeight = 0),
              (this.intervalStartPosition = 0),
              (this.labels = []),
              (this._labels = null),
              (this.dataInfo = {
                min: 1 / 0,
                max: -1 / 0,
                viewPortMin: 1 / 0,
                viewPortMax: -1 / 0,
                minDiff: 1 / 0,
              }),
              "axisX" === i
                ? ((this.sessionVariables = this.chart.sessionVariables[i]),
                  this._options.interval || (this.intervalType = null))
                : (this.sessionVariables =
                    "left" === a || "top" === a
                      ? this.chart.sessionVariables.axisY
                      : this.chart.sessionVariables.axisY2),
              void 0 === this._options.titleFontSize &&
                (this.titleFontSize = this.chart.getAutoFontSize(
                  this.titleFontSize
                )),
              void 0 === this._options.labelFontSize &&
                (this.labelFontSize = this.chart.getAutoFontSize(
                  this.labelFontSize
                )),
              (this.type = i),
              "axisX" !== i ||
                (t && void 0 !== t.gridThickness) ||
                (this.gridThickness = 0),
              (this._position = a),
              (this.lineCoordinates = {
                x1: null,
                y1: null,
                x2: null,
                y2: null,
                width: null,
              }),
              (this.labelAngle = ((this.labelAngle % 360) + 360) % 360),
              this.labelAngle > 90 && this.labelAngle <= 270
                ? (this.labelAngle -= 180)
                : this.labelAngle > 180 && this.labelAngle <= 270
                ? (this.labelAngle -= 180)
                : this.labelAngle > 270 &&
                  this.labelAngle <= 360 &&
                  (this.labelAngle -= 360),
              this._options.stripLines && this._options.stripLines.length > 0)
            ) {
              this.stripLines = [];
              for (var s = 0; s < this._options.stripLines.length; s++)
                this.stripLines.push(
                  new StripLine(
                    this.chart,
                    this._options.stripLines[s],
                    e.theme,
                    ++this.chart._eventManager.lastObjectId,
                    this
                  )
                );
            }
            (this._titleTextBlock = null),
              this.hasOptionChanged("viewportMinimum") ||
              isNaN(this.sessionVariables.newViewportMinimum) ||
              null === this.sessionVariables.newViewportMinimum
                ? (this.sessionVariables.newViewportMinimum = null)
                : (this.viewportMinimum =
                    this.sessionVariables.newViewportMinimum),
              this.hasOptionChanged("viewportMaximum") ||
              isNaN(this.sessionVariables.newViewportMaximum) ||
              null === this.sessionVariables.newViewportMaximum
                ? (this.sessionVariables.newViewportMaximum = null)
                : (this.viewportMaximum =
                    this.sessionVariables.newViewportMaximum),
              null !== this.minimum &&
                null !== this.viewportMinimum &&
                (this.viewportMinimum = Math.max(
                  this.viewportMinimum,
                  this.minimum
                )),
              null !== this.maximum &&
                null !== this.viewportMaximum &&
                (this.viewportMaximum = Math.min(
                  this.viewportMaximum,
                  this.maximum
                )),
              this.trackChanges("viewportMinimum"),
              this.trackChanges("viewportMaximum");
          }
          Object.defineProperty(i, "__esModule", { value: !0 });
          var s = e("./canvasjs"),
            r = a(s),
            o = e("./text_block"),
            l = a(o),
            h = e("../helpers/utils");
          (0, h.extend)(n, r.default),
            (n.prototype.createLabels = function () {
              var e,
                t,
                i = 0,
                a = 0,
                n = 0,
                s = 0;
              if (
                ("bottom" === this._position || "top" === this._position
                  ? ((s =
                      (this.lineCoordinates.width /
                        Math.abs(this.viewportMaximum - this.viewportMinimum)) *
                      this.interval),
                    (a = this.labelAutoFit
                      ? void 0 === this._options.labelMaxWidth
                        ? (0.9 * s) >> 0
                        : this.labelMaxWidth
                      : void 0 === this._options.labelMaxWidth
                      ? (0.7 * this.chart.width) >> 0
                      : this.labelMaxWidth),
                    (n =
                      void 0 === this._options.labelWrap || this.labelWrap
                        ? (0.5 * this.chart.height) >> 0
                        : 1.5 * this.labelFontSize))
                  : ("left" !== this._position && "right" !== this._position) ||
                    ((s =
                      (this.lineCoordinates.height /
                        Math.abs(this.viewportMaximum - this.viewportMinimum)) *
                      this.interval),
                    (a = this.labelAutoFit
                      ? void 0 === this._options.labelMaxWidth
                        ? (0.3 * this.chart.width) >> 0
                        : this.labelMaxWidth
                      : void 0 === this._options.labelMaxWidth
                      ? (0.5 * this.chart.width) >> 0
                      : this.labelMaxWidth),
                    (n =
                      void 0 === this._options.labelWrap || this.labelWrap
                        ? (2 * s) >> 0
                        : 1.5 * this.labelFontSize)),
                "axisX" === this.type &&
                  "dateTime" === this.chart.plotInfo.axisXValueType)
              )
                for (
                  t = addToDateTime(
                    new Date(this.viewportMaximum),
                    this.interval,
                    this.intervalType
                  ),
                    i = this.intervalStartPosition;
                  i < t;
                  addToDateTime(i, this.interval, this.intervalType)
                ) {
                  var r = i.getTime(),
                    o = this.labelFormatter
                      ? this.labelFormatter({
                          chart: this.chart,
                          axis: this._options,
                          value: i,
                          label: this.labels[i] ? this.labels[i] : null,
                        })
                      : "axisX" === this.type && this.labels[r]
                      ? this.labels[r]
                      : dateFormat(
                          i,
                          this.valueFormatString,
                          this.chart._cultureInfo
                        );
                  (e = new l.default(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: a,
                    maxHeight: n,
                    angle: this.labelAngle,
                    text: this.prefix + o + this.suffix,
                    horizontalAlign: "left",
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle",
                  })),
                    this._labels.push({
                      position: i.getTime(),
                      textBlock: e,
                      effectiveHeight: null,
                    });
                }
              else {
                if (
                  ((t = this.viewportMaximum),
                  this.labels && this.labels.length)
                ) {
                  var d = Math.ceil(this.interval),
                    c = Math.ceil(this.intervalStartPosition),
                    p = !1;
                  for (i = c; i < this.viewportMaximum; i += d) {
                    if (!this.labels[i]) {
                      p = !1;
                      break;
                    }
                    p = !0;
                  }
                  p && ((this.interval = d), (this.intervalStartPosition = c));
                }
                for (
                  i = this.intervalStartPosition;
                  i <= t;
                  i = parseFloat((i + this.interval).toFixed(14))
                ) {
                  var o = this.labelFormatter
                    ? this.labelFormatter({
                        chart: this.chart,
                        axis: this._options,
                        value: i,
                        label: this.labels[i] ? this.labels[i] : null,
                      })
                    : "axisX" === this.type && this.labels[i]
                    ? this.labels[i]
                    : (0, h.numberFormat)(
                        i,
                        this.valueFormatString,
                        this.chart._cultureInfo
                      );
                  (e = new l.default(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: a,
                    maxHeight: n,
                    angle: this.labelAngle,
                    text: this.prefix + o + this.suffix,
                    horizontalAlign: "left",
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle",
                    borderThickness: 0,
                  })),
                    this._labels.push({
                      position: i,
                      textBlock: e,
                      effectiveHeight: null,
                    });
                }
              }
              for (var i = 0; i < this.stripLines.length; i++) {
                var x = this.stripLines[i];
                (e = new l.default(this.ctx, {
                  x: 0,
                  y: 0,
                  backgroundColor: x.labelBackgroundColor,
                  maxWidth: a,
                  maxHeight: n,
                  angle: this.labelAngle,
                  text: x.labelFormatter
                    ? x.labelFormatter({
                        chart: this.chart,
                        axis: this,
                        stripLine: x,
                      })
                    : x.label,
                  horizontalAlign: "left",
                  fontSize: x.labelFontSize,
                  fontFamily: x.labelFontFamily,
                  fontWeight: x.labelFontWeight,
                  fontColor: x._options.labelFontColor || x.color,
                  fontStyle: x.labelFontStyle,
                  textBaseline: "middle",
                  borderThickness: 0,
                })),
                  this._labels.push({
                    position: x.value,
                    textBlock: e,
                    effectiveHeight: null,
                    stripLine: x,
                  });
              }
            }),
            (n.prototype.createLabelsAndCalculateWidth = function () {
              var e = 0;
              if (
                ((this._labels = []),
                "left" === this._position || "right" === this._position)
              ) {
                this.createLabels();
                for (var t = 0; t < this._labels.length; t++) {
                  var i = this._labels[t].textBlock,
                    a = i.measureText(),
                    n = 0;
                  (n =
                    0 === this.labelAngle
                      ? a.width
                      : a.width *
                          Math.cos(
                            (Math.PI / 180) * Math.abs(this.labelAngle)
                          ) +
                        (a.height / 2) *
                          Math.sin(
                            (Math.PI / 180) * Math.abs(this.labelAngle)
                          )),
                    e < n && (e = n),
                    (this._labels[t].effectiveWidth = n);
                }
              }
              return (
                (this.title
                  ? getFontHeightInPixels(
                      this.titleFontFamily,
                      this.titleFontSize,
                      this.titleFontWeight
                    ) + 2
                  : 0) +
                e +
                this.tickLength +
                5
              );
            }),
            (n.prototype.createLabelsAndCalculateHeight = function () {
              var e = 0;
              this._labels = [];
              var t,
                i = 0;
              if (
                (this.createLabels(),
                "bottom" === this._position || "top" === this._position)
              )
                for (i = 0; i < this._labels.length; i++) {
                  t = this._labels[i].textBlock;
                  var a = t.measureText(),
                    n = 0;
                  (n =
                    0 === this.labelAngle
                      ? a.height
                      : a.width *
                          Math.sin(
                            (Math.PI / 180) * Math.abs(this.labelAngle)
                          ) +
                        (a.height / 2) *
                          Math.cos(
                            (Math.PI / 180) * Math.abs(this.labelAngle)
                          )),
                    e < n && (e = n),
                    (this._labels[i].effectiveHeight = n);
                }
              return (
                (this.title
                  ? getFontHeightInPixels(
                      this.titleFontFamily,
                      this.titleFontSize,
                      this.titleFontWeight
                    ) + 2
                  : 0) +
                e +
                this.tickLength +
                5
              );
            }),
            (n.setLayoutAndRender = function (e, t, i, a, n) {
              var s,
                r,
                o,
                l,
                h = e.chart,
                d = h.ctx;
              e.calculateAxisParameters(),
                t && t.calculateAxisParameters(),
                i && i.calculateAxisParameters();
              var c =
                (t && t.lineThickness && t.lineThickness,
                i && i.lineThickness && i.lineThickness,
                t && t.gridThickness && t.gridThickness,
                i && i.gridThickness && i.gridThickness,
                t ? t.margin : 0);
              t && t.margin;
              if ("normal" === a) {
                e.lineCoordinates = {};
                var p = Math.ceil(t ? t.createLabelsAndCalculateWidth() : 0);
                (s = Math.round(n.x1 + p + c)), (e.lineCoordinates.x1 = s);
                var x = Math.ceil(i ? i.createLabelsAndCalculateWidth() : 0);
                (o = Math.round(
                  n.x2 - x > e.chart.width - 10 ? e.chart.width - 10 : n.x2 - x
                )),
                  (e.lineCoordinates.x2 = o),
                  (e.lineCoordinates.width = Math.abs(o - s));
                var u = Math.ceil(e.createLabelsAndCalculateHeight());
                (r = Math.round(n.y2 - u - e.margin)),
                  (l = Math.round(n.y2 - e.margin)),
                  (e.lineCoordinates.y1 = r),
                  (e.lineCoordinates.y2 = r),
                  (e.boundingRect = {
                    x1: s,
                    y1: r,
                    x2: o,
                    y2: l,
                    width: o - s,
                    height: l - r,
                  }),
                  t &&
                    ((s = Math.round(n.x1 + t.margin)),
                    (r = Math.round(n.y1 < 10 ? 10 : n.y1)),
                    (o = Math.round(n.x1 + p + t.margin)),
                    (l = Math.round(n.y2 - u - e.margin)),
                    (t.lineCoordinates = {
                      x1: o,
                      y1: r,
                      x2: o,
                      y2: l,
                      height: Math.abs(l - r),
                    }),
                    (t.boundingRect = {
                      x1: s,
                      y1: r,
                      x2: o,
                      y2: l,
                      width: o - s,
                      height: l - r,
                    })),
                  i &&
                    ((s = Math.round(e.lineCoordinates.x2)),
                    (r = Math.round(n.y1 < 10 ? 10 : n.y1)),
                    (o = Math.round(s + x + i.margin)),
                    (l = Math.round(n.y2 - u - e.margin)),
                    (i.lineCoordinates = {
                      x1: s,
                      y1: r,
                      x2: s,
                      y2: l,
                      height: Math.abs(l - r),
                    }),
                    (i.boundingRect = {
                      x1: s,
                      y1: r,
                      x2: o,
                      y2: l,
                      width: o - s,
                      height: l - r,
                    })),
                  e.calculateValueToPixelConversionParameters(),
                  t && t.calculateValueToPixelConversionParameters(),
                  i && i.calculateValueToPixelConversionParameters(),
                  d.save(),
                  d.rect(
                    5,
                    e.boundingRect.y1,
                    e.chart.width - 10,
                    e.boundingRect.height
                  ),
                  d.clip(),
                  e.renderLabelsTicksAndTitle(),
                  d.restore(),
                  t && t.renderLabelsTicksAndTitle(),
                  i && i.renderLabelsTicksAndTitle(),
                  h.preparePlotArea();
                var m = e.chart.plotArea;
                d.save(),
                  d.rect(
                    m.x1,
                    m.y1,
                    Math.abs(m.x2 - m.x1),
                    Math.abs(m.y2 - m.y1)
                  ),
                  d.clip(),
                  e.renderStripLinesOfThicknessType("value"),
                  t && t.renderStripLinesOfThicknessType("value"),
                  i && i.renderStripLinesOfThicknessType("value"),
                  e.renderInterlacedColors(),
                  t && t.renderInterlacedColors(),
                  i && i.renderInterlacedColors(),
                  d.restore(),
                  e.renderGrid(),
                  t && t.renderGrid(),
                  i && i.renderGrid(),
                  e.renderAxisLine(),
                  t && t.renderAxisLine(),
                  i && i.renderAxisLine(),
                  e.renderStripLinesOfThicknessType("pixel"),
                  t && t.renderStripLinesOfThicknessType("pixel"),
                  i && i.renderStripLinesOfThicknessType("pixel");
              } else {
                var v = Math.ceil(e.createLabelsAndCalculateWidth());
                t &&
                  ((t.lineCoordinates = {}),
                  (s = Math.round(n.x1 + v + e.margin)),
                  (o = Math.round(
                    n.x2 > t.chart.width - 10 ? t.chart.width - 10 : n.x2
                  )),
                  (t.lineCoordinates.x1 = s),
                  (t.lineCoordinates.x2 = o),
                  (t.lineCoordinates.width = Math.abs(o - s))),
                  i &&
                    ((i.lineCoordinates = {}),
                    (s = Math.round(n.x1 + v + e.margin)),
                    (o = Math.round(
                      n.x2 > i.chart.width - 10 ? i.chart.width - 10 : n.x2
                    )),
                    (i.lineCoordinates.x1 = s),
                    (i.lineCoordinates.x2 = o),
                    (i.lineCoordinates.width = Math.abs(o - s)));
                var g = Math.ceil(t ? t.createLabelsAndCalculateHeight() : 0),
                  y = Math.ceil(i ? i.createLabelsAndCalculateHeight() : 0);
                t &&
                  ((r = Math.round(n.y2 - g - t.margin)),
                  (l = Math.round(
                    n.y2 - c > t.chart.height - 10
                      ? t.chart.height - 10
                      : n.y2 - c
                  )),
                  (t.lineCoordinates.y1 = r),
                  (t.lineCoordinates.y2 = r),
                  (t.boundingRect = {
                    x1: s,
                    y1: r,
                    x2: o,
                    y2: l,
                    width: o - s,
                    height: g,
                  })),
                  i &&
                    ((r = Math.round(n.y1 + i.margin)),
                    (l = n.y1 + i.margin + y),
                    (i.lineCoordinates.y1 = l),
                    (i.lineCoordinates.y2 = l),
                    (i.boundingRect = {
                      x1: s,
                      y1: r,
                      x2: o,
                      y2: l,
                      width: o - s,
                      height: y,
                    })),
                  (s = Math.round(n.x1 + e.margin)),
                  (r = Math.round(
                    i ? i.lineCoordinates.y2 : n.y1 < 10 ? 10 : n.y1
                  )),
                  (o = Math.round(n.x1 + v + e.margin)),
                  (l = Math.round(
                    t
                      ? t.lineCoordinates.y1
                      : n.y2 - c > e.chart.height - 10
                      ? e.chart.height - 10
                      : n.y2 - c
                  )),
                  (e.lineCoordinates = {
                    x1: o,
                    y1: r,
                    x2: o,
                    y2: l,
                    height: Math.abs(l - r),
                  }),
                  (e.boundingRect = {
                    x1: s,
                    y1: r,
                    x2: o,
                    y2: l,
                    width: o - s,
                    height: l - r,
                  }),
                  e.calculateValueToPixelConversionParameters(),
                  t && t.calculateValueToPixelConversionParameters(),
                  i && i.calculateValueToPixelConversionParameters(),
                  t && t.renderLabelsTicksAndTitle(),
                  i && i.renderLabelsTicksAndTitle(),
                  e.renderLabelsTicksAndTitle(),
                  h.preparePlotArea();
                var m = e.chart.plotArea;
                d.save(),
                  d.rect(
                    m.x1,
                    m.y1,
                    Math.abs(m.x2 - m.x1),
                    Math.abs(m.y2 - m.y1)
                  ),
                  d.clip(),
                  e.renderStripLinesOfThicknessType("value"),
                  t && t.renderStripLinesOfThicknessType("value"),
                  i && i.renderStripLinesOfThicknessType("value"),
                  e.renderInterlacedColors(),
                  t && t.renderInterlacedColors(),
                  i && i.renderInterlacedColors(),
                  d.restore(),
                  e.renderGrid(),
                  t && t.renderGrid(),
                  i && i.renderGrid(),
                  e.renderAxisLine(),
                  t && t.renderAxisLine(),
                  i && i.renderAxisLine(),
                  e.renderStripLinesOfThicknessType("pixel"),
                  t && t.renderStripLinesOfThicknessType("pixel"),
                  i && i.renderStripLinesOfThicknessType("pixel");
              }
            }),
            (n.prototype.renderLabelsTicksAndTitle = function () {
              var e = !1,
                t = 0,
                i = 1,
                a = 0;
              this.conversionParameters.pixelPerUnit, this.interval;
              if (
                (0 !== this.labelAngle && 360 !== this.labelAngle && (i = 1.2),
                void 0 === this._options.interval)
              ) {
                if ("bottom" === this._position || "top" === this._position) {
                  for (o = 0; o < this._labels.length; o++)
                    if (
                      ((s = this._labels[o]),
                      !(s.position < this.viewportMinimum || s.stripLine))
                    ) {
                      var n =
                        s.textBlock.width *
                          Math.cos((Math.PI / 180) * this.labelAngle) +
                        s.textBlock.height *
                          Math.sin((Math.PI / 180) * this.labelAngle);
                      t += n;
                    }
                  t > this.lineCoordinates.width * i && (e = !0);
                }
                if ("left" === this._position || "right" === this._position) {
                  for (o = 0; o < this._labels.length; o++)
                    if (
                      ((s = this._labels[o]),
                      !(s.position < this.viewportMinimum || s.stripLine))
                    ) {
                      var n =
                        s.textBlock.height *
                          Math.cos((Math.PI / 180) * this.labelAngle) +
                        s.textBlock.width *
                          Math.sin((Math.PI / 180) * this.labelAngle);
                      t += n;
                    }
                  t > this.lineCoordinates.height * i && (e = !0);
                }
              }
              if ("bottom" === this._position) {
                var s,
                  r,
                  o = 0;
                for (o = 0; o < this._labels.length; o++)
                  if (
                    ((s = this._labels[o]),
                    !(
                      s.position < this.viewportMinimum ||
                      s.position > this.viewportMaximum
                    ))
                  ) {
                    if (
                      ((r = this.getPixelCoordinatesOnAxis(s.position)),
                      (this.tickThickness && !this._labels[o].stripLine) ||
                        (this._labels[o].stripLine &&
                          "pixel" === this._labels[o].stripLine._thicknessType))
                    ) {
                      this._labels[o].stripLine
                        ? ((d = this._labels[o].stripLine),
                          (this.ctx.lineWidth = d.thickness),
                          (this.ctx.strokeStyle = d.color))
                        : ((this.ctx.lineWidth = this.tickThickness),
                          (this.ctx.strokeStyle = this.tickColor));
                      var h =
                        this.ctx.lineWidth % 2 == 1
                          ? 0.5 + (r.x << 0)
                          : r.x << 0;
                      this.ctx.beginPath(),
                        this.ctx.moveTo(h, r.y << 0),
                        this.ctx.lineTo(h, (r.y + this.tickLength) << 0),
                        this.ctx.stroke();
                    }
                    (e && a++ % 2 != 0 && !this._labels[o].stripLine) ||
                      (0 === s.textBlock.angle
                        ? ((r.x -= s.textBlock.width / 2),
                          (r.y += this.tickLength + s.textBlock.fontSize / 2))
                        : ((r.x -=
                            this.labelAngle < 0
                              ? s.textBlock.width *
                                Math.cos((Math.PI / 180) * this.labelAngle)
                              : 0),
                          (r.y +=
                            this.tickLength +
                            Math.abs(
                              this.labelAngle < 0
                                ? s.textBlock.width *
                                    Math.sin(
                                      (Math.PI / 180) * this.labelAngle
                                    ) -
                                    5
                                : 5
                            ))),
                      (s.textBlock.x = r.x),
                      (s.textBlock.y = r.y),
                      s.textBlock.render(!0));
                  }
                this.title &&
                  ((this._titleTextBlock = new l.default(this.ctx, {
                    x: this.lineCoordinates.x1,
                    y: this.boundingRect.y2 - this.titleFontSize - 5,
                    maxWidth: this.lineCoordinates.width,
                    maxHeight: 1.5 * this.titleFontSize,
                    angle: 0,
                    text: this.title,
                    horizontalAlign: "center",
                    fontSize: this.titleFontSize,
                    fontFamily: this.titleFontFamily,
                    fontWeight: this.titleFontWeight,
                    fontColor: this.titleFontColor,
                    fontStyle: this.titleFontStyle,
                    textBaseline: "top",
                  })),
                  this._titleTextBlock.measureText(),
                  (this._titleTextBlock.x =
                    this.lineCoordinates.x1 +
                    this.lineCoordinates.width / 2 -
                    this._titleTextBlock.width / 2),
                  (this._titleTextBlock.y =
                    this.boundingRect.y2 - this._titleTextBlock.height - 3),
                  this._titleTextBlock.render(!0));
              } else if ("top" === this._position) {
                var s,
                  r,
                  d,
                  o = 0;
                for (o = 0; o < this._labels.length; o++)
                  if (
                    ((s = this._labels[o]),
                    !(
                      s.position < this.viewportMinimum ||
                      s.position > this.viewportMaximum
                    ))
                  ) {
                    if (
                      ((r = this.getPixelCoordinatesOnAxis(s.position)),
                      (this.tickThickness && !this._labels[o].stripLine) ||
                        (this._labels[o].stripLine &&
                          "pixel" === this._labels[o].stripLine._thicknessType))
                    ) {
                      this._labels[o].stripLine
                        ? ((d = this._labels[o].stripLine),
                          (this.ctx.lineWidth = d.thickness),
                          (this.ctx.strokeStyle = d.color))
                        : ((this.ctx.lineWidth = this.tickThickness),
                          (this.ctx.strokeStyle = this.tickColor));
                      var h =
                        this.ctx.lineWidth % 2 == 1
                          ? 0.5 + (r.x << 0)
                          : r.x << 0;
                      this.ctx.beginPath(),
                        this.ctx.moveTo(h, r.y << 0),
                        this.ctx.lineTo(h, (r.y - this.tickLength) << 0),
                        this.ctx.stroke();
                    }
                    (e && a++ % 2 != 0 && !this._labels[o].stripLine) ||
                      (0 === s.textBlock.angle
                        ? ((r.x -= s.textBlock.width / 2),
                          (r.y -= this.tickLength + s.textBlock.height / 2))
                        : ((r.x -=
                            this.labelAngle > 0
                              ? s.textBlock.width *
                                Math.cos((Math.PI / 180) * this.labelAngle)
                              : 0),
                          (r.y -=
                            this.tickLength +
                            Math.abs(
                              this.labelAngle > 0
                                ? s.textBlock.width *
                                    Math.sin(
                                      (Math.PI / 180) * this.labelAngle
                                    ) +
                                    5
                                : 5
                            ))),
                      (s.textBlock.x = r.x),
                      (s.textBlock.y = r.y),
                      s.textBlock.render(!0));
                  }
                this.title &&
                  ((this._titleTextBlock = new l.default(this.ctx, {
                    x: this.lineCoordinates.x1,
                    y: this.boundingRect.y1 + 1,
                    maxWidth: this.lineCoordinates.width,
                    maxHeight: 1.5 * this.titleFontSize,
                    angle: 0,
                    text: this.title,
                    horizontalAlign: "center",
                    fontSize: this.titleFontSize,
                    fontFamily: this.titleFontFamily,
                    fontWeight: this.titleFontWeight,
                    fontColor: this.titleFontColor,
                    fontStyle: this.titleFontStyle,
                    textBaseline: "top",
                  })),
                  this._titleTextBlock.measureText(),
                  (this._titleTextBlock.x =
                    this.lineCoordinates.x1 +
                    this.lineCoordinates.width / 2 -
                    this._titleTextBlock.width / 2),
                  this._titleTextBlock.render(!0));
              } else if ("left" === this._position) {
                for (var s, r, o = 0; o < this._labels.length; o++)
                  if (
                    ((s = this._labels[o]),
                    !(
                      s.position < this.viewportMinimum ||
                      s.position > this.viewportMaximum
                    ))
                  ) {
                    if (
                      ((r = this.getPixelCoordinatesOnAxis(s.position)),
                      (this.tickThickness && !this._labels[o].stripLine) ||
                        (this._labels[o].stripLine &&
                          "pixel" === this._labels[o].stripLine._thicknessType))
                    ) {
                      this._labels[o].stripLine
                        ? ((d = this._labels[o].stripLine),
                          (this.ctx.lineWidth = d.thickness),
                          (this.ctx.strokeStyle = d.color))
                        : ((this.ctx.lineWidth = this.tickThickness),
                          (this.ctx.strokeStyle = this.tickColor));
                      var c =
                        this.ctx.lineWidth % 2 == 1
                          ? 0.5 + (r.y << 0)
                          : r.y << 0;
                      this.ctx.beginPath(),
                        this.ctx.moveTo(r.x << 0, c),
                        this.ctx.lineTo((r.x - this.tickLength) << 0, c),
                        this.ctx.stroke();
                    }
                    (e && a++ % 2 != 0 && !this._labels[o].stripLine) ||
                      ((s.textBlock.x =
                        r.x -
                        s.textBlock.width *
                          Math.cos((Math.PI / 180) * this.labelAngle) -
                        this.tickLength -
                        5),
                      0 === this.labelAngle
                        ? (s.textBlock.y = r.y)
                        : (s.textBlock.y =
                            r.y -
                            s.textBlock.width *
                              Math.sin((Math.PI / 180) * this.labelAngle)),
                      s.textBlock.render(!0));
                  }
                if (this.title) {
                  this._titleTextBlock = new l.default(this.ctx, {
                    x: this.boundingRect.x1 + 1,
                    y: this.lineCoordinates.y2,
                    maxWidth: this.lineCoordinates.height,
                    maxHeight: 1.5 * this.titleFontSize,
                    angle: -90,
                    text: this.title,
                    horizontalAlign: "center",
                    fontSize: this.titleFontSize,
                    fontFamily: this.titleFontFamily,
                    fontWeight: this.titleFontWeight,
                    fontColor: this.titleFontColor,
                    fontStyle: this.titleFontStyle,
                    textBaseline: "top",
                  });
                  this._titleTextBlock.measureText();
                  (this._titleTextBlock.y =
                    this.lineCoordinates.height / 2 +
                    this._titleTextBlock.width / 2 +
                    this.lineCoordinates.y1),
                    this._titleTextBlock.render(!0);
                }
              } else if ("right" === this._position) {
                for (var s, r, o = 0; o < this._labels.length; o++)
                  if (
                    ((s = this._labels[o]),
                    !(
                      s.position < this.viewportMinimum ||
                      s.position > this.viewportMaximum
                    ))
                  ) {
                    if (
                      ((r = this.getPixelCoordinatesOnAxis(s.position)),
                      (this.tickThickness && !this._labels[o].stripLine) ||
                        (this._labels[o].stripLine &&
                          "pixel" === this._labels[o].stripLine._thicknessType))
                    ) {
                      this._labels[o].stripLine
                        ? ((d = this._labels[o].stripLine),
                          (this.ctx.lineWidth = d.thickness),
                          (this.ctx.strokeStyle = d.color))
                        : ((this.ctx.lineWidth = this.tickThickness),
                          (this.ctx.strokeStyle = this.tickColor));
                      var c =
                        this.ctx.lineWidth % 2 == 1
                          ? 0.5 + (r.y << 0)
                          : r.y << 0;
                      this.ctx.beginPath(),
                        this.ctx.moveTo(r.x << 0, c),
                        this.ctx.lineTo((r.x + this.tickLength) << 0, c),
                        this.ctx.stroke();
                    }
                    (e && a++ % 2 != 0 && !this._labels[o].stripLine) ||
                      ((s.textBlock.x = r.x + this.tickLength + 5),
                      this.labelAngle,
                      (s.textBlock.y = r.y),
                      s.textBlock.render(!0));
                  }
                this.title &&
                  ((this._titleTextBlock = new l.default(this.ctx, {
                    x: this.boundingRect.x2 - 1,
                    y: this.lineCoordinates.y2,
                    maxWidth: this.lineCoordinates.height,
                    maxHeight: 1.5 * this.titleFontSize,
                    angle: 90,
                    text: this.title,
                    horizontalAlign: "center",
                    fontSize: this.titleFontSize,
                    fontFamily: this.titleFontFamily,
                    fontWeight: this.titleFontWeight,
                    fontColor: this.titleFontColor,
                    fontStyle: this.titleFontStyle,
                    textBaseline: "top",
                  })),
                  this._titleTextBlock.measureText(),
                  (this._titleTextBlock.y =
                    this.lineCoordinates.height / 2 -
                    this._titleTextBlock.width / 2 +
                    this.lineCoordinates.y1),
                  this._titleTextBlock.render(!0));
              }
            }),
            (n.prototype.renderInterlacedColors = function () {
              var e,
                t,
                i = this.chart.plotArea.ctx,
                a = this.chart.plotArea,
                n = 0,
                s = !0;
              if (
                ("bottom" !== this._position && "top" !== this._position) ||
                !this.interlacedColor
              ) {
                if (
                  ("left" === this._position || "right" === this._position) &&
                  this.interlacedColor
                )
                  for (
                    i.fillStyle = this.interlacedColor, n = 0;
                    n < this._labels.length;
                    n++
                  )
                    this._labels[n].stripLine ||
                      (s
                        ? ((t = this.getPixelCoordinatesOnAxis(
                            this._labels[n].position
                          )),
                          (e =
                            n + 1 >= this._labels.length - 1
                              ? this.getPixelCoordinatesOnAxis(
                                  this.viewportMaximum
                                )
                              : this.getPixelCoordinatesOnAxis(
                                  this._labels[n + 1].position
                                )),
                          i.fillRect(
                            a.x1,
                            e.y,
                            Math.abs(a.x1 - a.x2),
                            Math.abs(e.y - t.y)
                          ),
                          (s = !1))
                        : (s = !0));
              } else
                for (
                  i.fillStyle = this.interlacedColor, n = 0;
                  n < this._labels.length;
                  n++
                )
                  this._labels[n].stripLine ||
                    (s
                      ? ((e = this.getPixelCoordinatesOnAxis(
                          this._labels[n].position
                        )),
                        (t =
                          n + 1 >= this._labels.length - 1
                            ? this.getPixelCoordinatesOnAxis(
                                this.viewportMaximum
                              )
                            : this.getPixelCoordinatesOnAxis(
                                this._labels[n + 1].position
                              )),
                        i.fillRect(
                          e.x,
                          a.y1,
                          Math.abs(t.x - e.x),
                          Math.abs(a.y1 - a.y2)
                        ),
                        (s = !1))
                      : (s = !0));
              i.beginPath();
            }),
            (n.prototype.renderStripLinesOfThicknessType = function (e) {
              if (this.stripLines && this.stripLines.length > 0 && e) {
                var t = 0;
                for (t = 0; t < this.stripLines.length; t++) {
                  var i = this.stripLines[t];
                  i._thicknessType === e &&
                    (("pixel" === e &&
                      (i.value < this.viewportMinimum ||
                        i.value > this.viewportMaximum)) ||
                      (i.showOnTop
                        ? this.chart.addEventListener(
                            "dataAnimationIterationEnd",
                            i.render,
                            i
                          )
                        : i.render()));
                }
              }
            }),
            (n.prototype.renderGrid = function () {
              if (this.gridThickness && this.gridThickness > 0) {
                var e,
                  t = this.chart.ctx,
                  i = this.chart.plotArea;
                if (
                  ((t.lineWidth = this.gridThickness),
                  (t.strokeStyle = this.gridColor),
                  t.setLineDash &&
                    t.setLineDash(
                      (0, h.getLineDashArray)(
                        this.gridDashType,
                        this.gridThickness
                      )
                    ),
                  "bottom" === this._position || "top" === this._position)
                ) {
                  for (
                    n = 0;
                    n < this._labels.length && !this._labels[n].stripLine;
                    n++
                  )
                    if (
                      !(
                        this._labels[n].position < this.viewportMinimum ||
                        this._labels[n].position > this.viewportMaximum
                      )
                    ) {
                      t.beginPath(),
                        (e = this.getPixelCoordinatesOnAxis(
                          this._labels[n].position
                        ));
                      var a =
                        t.lineWidth % 2 == 1 ? 0.5 + (e.x << 0) : e.x << 0;
                      t.moveTo(a, i.y1 << 0),
                        t.lineTo(a, i.y2 << 0),
                        t.stroke();
                    }
                } else if (
                  "left" === this._position ||
                  "right" === this._position
                )
                  for (
                    var n = 0;
                    n < this._labels.length && !this._labels[n].stripLine;
                    n++
                  )
                    if (
                      !(
                        (0 === n &&
                          "axisY" === this.type &&
                          this.chart.axisX &&
                          this.chart.axisX.lineThickness) ||
                        this._labels[n].position < this.viewportMinimum ||
                        this._labels[n].position > this.viewportMaximum
                      )
                    ) {
                      t.beginPath(),
                        (e = this.getPixelCoordinatesOnAxis(
                          this._labels[n].position
                        ));
                      var s =
                        t.lineWidth % 2 == 1 ? 0.5 + (e.y << 0) : e.y << 0;
                      t.moveTo(i.x1 << 0, s),
                        t.lineTo(i.x2 << 0, s),
                        t.stroke();
                    }
              }
            }),
            (n.prototype.renderAxisLine = function () {
              var e = this.chart.ctx;
              if ("bottom" === this._position || "top" === this._position) {
                if (this.lineThickness) {
                  (e.lineWidth = this.lineThickness),
                    (e.strokeStyle = this.lineColor ? this.lineColor : "black"),
                    e.setLineDash &&
                      e.setLineDash(
                        (0, h.getLineDashArray)(
                          this.lineDashType,
                          this.lineThickness
                        )
                      );
                  var t =
                    this.lineThickness % 2 == 1
                      ? 0.5 + (this.lineCoordinates.y1 << 0)
                      : this.lineCoordinates.y1 << 0;
                  e.beginPath(),
                    e.moveTo(this.lineCoordinates.x1, t),
                    e.lineTo(this.lineCoordinates.x2, t),
                    e.stroke();
                }
              } else if (
                ("left" === this._position || "right" === this._position) &&
                this.lineThickness
              ) {
                (e.lineWidth = this.lineThickness),
                  (e.strokeStyle = this.lineColor),
                  e.setLineDash &&
                    e.setLineDash(
                      (0, h.getLineDashArray)(
                        this.lineDashType,
                        this.lineThickness
                      )
                    );
                var i =
                  this.lineThickness % 2 == 1
                    ? 0.5 + (this.lineCoordinates.x1 << 0)
                    : this.lineCoordinates.x1 << 0;
                e.beginPath(),
                  e.moveTo(i, this.lineCoordinates.y1),
                  e.lineTo(i, this.lineCoordinates.y2),
                  e.stroke();
              }
            }),
            (n.prototype.getPixelCoordinatesOnAxis = function (e) {
              var t = {};
              this.lineCoordinates.width, this.lineCoordinates.height;
              if ("bottom" === this._position || "top" === this._position) {
                var i = this.conversionParameters.pixelPerUnit;
                (t.x =
                  this.conversionParameters.reference +
                  i * (e - this.viewportMinimum)),
                  (t.y = this.lineCoordinates.y1);
              }
              if ("left" === this._position || "right" === this._position) {
                var i = -this.conversionParameters.pixelPerUnit;
                (t.y =
                  this.conversionParameters.reference -
                  i * (e - this.viewportMinimum)),
                  (t.x = this.lineCoordinates.x2);
              }
              return t;
            }),
            (n.prototype.convertPixelToValue = function (e) {
              if (!e) return null;
              var t =
                "left" === this._position || "right" === this._position
                  ? e.y
                  : e.x;
              return (
                this.conversionParameters.minimum +
                (t - this.conversionParameters.reference) /
                  this.conversionParameters.pixelPerUnit
              );
            }),
            (n.prototype.setViewPortRange = function (e, t) {
              (this.sessionVariables.newViewportMinimum = this.viewportMinimum =
                Math.min(e, t)),
                (this.sessionVariables.newViewportMaximum =
                  this.viewportMaximum =
                    Math.max(e, t));
            }),
            (n.prototype.getXValueAt = function (e) {
              if (!e) return null;
              var t = null;
              return (
                "left" === this._position
                  ? (t =
                      ((this.chart.axisX.viewportMaximum -
                        this.chart.axisX.viewportMinimum) /
                        this.chart.axisX.lineCoordinates.height) *
                        (this.chart.axisX.lineCoordinates.y2 - e.y) +
                      this.chart.axisX.viewportMinimum)
                  : "bottom" === this._position &&
                    (t =
                      ((this.chart.axisX.viewportMaximum -
                        this.chart.axisX.viewportMinimum) /
                        this.chart.axisX.lineCoordinates.width) *
                        (e.x - this.chart.axisX.lineCoordinates.x1) +
                      this.chart.axisX.viewportMinimum),
                t
              );
            }),
            (n.prototype.calculateValueToPixelConversionParameters = function (
              e
            ) {
              this.reversed = !1;
              var t = { pixelPerUnit: null, minimum: null, reference: null },
                i = this.lineCoordinates.width,
                a = this.lineCoordinates.height;
              (t.minimum = this.viewportMinimum),
                ("bottom" !== this._position && "top" !== this._position) ||
                  ((t.pixelPerUnit =
                    ((this.reversed ? -1 : 1) * i) /
                    Math.abs(this.viewportMaximum - this.viewportMinimum)),
                  (t.reference = this.reversed
                    ? this.lineCoordinates.x2
                    : this.lineCoordinates.x1)),
                ("left" !== this._position && "right" !== this._position) ||
                  ((t.pixelPerUnit =
                    ((this.reversed ? 1 : -1) * a) /
                    Math.abs(this.viewportMaximum - this.viewportMinimum)),
                  (t.reference = this.reversed
                    ? this.lineCoordinates.y1
                    : this.lineCoordinates.y2)),
                (this.conversionParameters = t);
            }),
            (n.prototype.calculateAxisParameters = function () {
              var e = this.chart.layoutManager.getFreeSpace(),
                t = !1;
              "bottom" === this._position || "top" === this._position
                ? ((this.maxWidth = e.width), (this.maxHeight = e.height))
                : ((this.maxWidth = e.height), (this.maxHeight = e.width));
              var i,
                a,
                s,
                r,
                o =
                  "axisX" === this.type
                    ? this.maxWidth < 500
                      ? 8
                      : Math.max(6, Math.floor(this.maxWidth / 62))
                    : Math.max(Math.floor(this.maxWidth / 40), 2),
                l = 0;
              if (
                ((null === this.viewportMinimum ||
                  isNaN(this.viewportMinimum)) &&
                  (this.viewportMinimum = this.minimum),
                (null === this.viewportMaximum ||
                  isNaN(this.viewportMaximum)) &&
                  (this.viewportMaximum = this.maximum),
                "axisX" === this.type
                  ? ((i =
                      null !== this.viewportMinimum
                        ? this.viewportMinimum
                        : this.dataInfo.viewPortMin),
                    (a =
                      null !== this.viewportMaximum
                        ? this.viewportMaximum
                        : this.dataInfo.viewPortMax),
                    a - i == 0 &&
                      ((l =
                        void 0 === this._options.interval
                          ? 0.4
                          : this._options.interval),
                      (a += l),
                      (i -= l)),
                    this.dataInfo.minDiff !== 1 / 0
                      ? (s = this.dataInfo.minDiff)
                      : a - i > 1
                      ? (s = 0.5 * Math.abs(a - i))
                      : ((s = 1),
                        "dateTime" === this.chart.plotInfo.axisXValueType &&
                          (t = !0)))
                  : "axisY" === this.type &&
                    ((i =
                      null !== this.viewportMinimum
                        ? this.viewportMinimum
                        : this.dataInfo.viewPortMin),
                    (a =
                      null !== this.viewportMaximum
                        ? this.viewportMaximum
                        : this.dataInfo.viewPortMax),
                    isFinite(i) || isFinite(a)
                      ? isFinite(i)
                        ? isFinite(a) || (a = i)
                        : (i = a)
                      : ((a =
                          void 0 === this._options.interval
                            ? -1 / 0
                            : this._options.interval),
                        (i = 0)),
                    0 === i && 0 === a
                      ? ((a += 9), (i = 0))
                      : a - i == 0
                      ? ((l = Math.min(Math.abs(0.01 * Math.abs(a)), 5)),
                        (a += l),
                        (i -= l))
                      : i > a
                      ? ((l = Math.min(Math.abs(0.01 * Math.abs(a - i)), 5)),
                        a >= 0 ? (i = a - l) : (a = i + l))
                      : ((l = Math.min(Math.abs(0.01 * Math.abs(a - i)), 0.05)),
                        0 !== a && (a += l),
                        0 !== i && (i -= l)),
                    (s =
                      this.dataInfo.minDiff !== 1 / 0
                        ? this.dataInfo.minDiff
                        : a - i > 1
                        ? 0.5 * Math.abs(a - i)
                        : 1),
                    this.includeZero &&
                      (null === this.viewportMinimum ||
                        isNaN(this.viewportMinimum)) &&
                      i > 0 &&
                      (i = 0),
                    this.includeZero &&
                      (null === this.viewportMaximum ||
                        isNaN(this.viewportMaximum)) &&
                      a < 0 &&
                      (a = 0)),
                (r =
                  (isNaN(this.viewportMaximum) || null === this.viewportMaximum
                    ? a
                    : this.viewportMaximum) -
                  (isNaN(this.viewportMinimum) || null === this.viewportMinimum
                    ? i
                    : this.viewportMinimum)),
                "axisX" === this.type &&
                "dateTime" === this.chart.plotInfo.axisXValueType
                  ? (this.intervalType ||
                      (r / 1 <= o
                        ? ((this.interval = 1),
                          (this.intervalType = "millisecond"))
                        : r / 2 <= o
                        ? ((this.interval = 2),
                          (this.intervalType = "millisecond"))
                        : r / 5 <= o
                        ? ((this.interval = 5),
                          (this.intervalType = "millisecond"))
                        : r / 10 <= o
                        ? ((this.interval = 10),
                          (this.intervalType = "millisecond"))
                        : r / 20 <= o
                        ? ((this.interval = 20),
                          (this.intervalType = "millisecond"))
                        : r / 50 <= o
                        ? ((this.interval = 50),
                          (this.intervalType = "millisecond"))
                        : r / 100 <= o
                        ? ((this.interval = 100),
                          (this.intervalType = "millisecond"))
                        : r / 200 <= o
                        ? ((this.interval = 200),
                          (this.intervalType = "millisecond"))
                        : r / 250 <= o
                        ? ((this.interval = 250),
                          (this.intervalType = "millisecond"))
                        : r / 300 <= o
                        ? ((this.interval = 300),
                          (this.intervalType = "millisecond"))
                        : r / 400 <= o
                        ? ((this.interval = 400),
                          (this.intervalType = "millisecond"))
                        : r / 500 <= o
                        ? ((this.interval = 500),
                          (this.intervalType = "millisecond"))
                        : r / (1 * constants.secondDuration) <= o
                        ? ((this.interval = 1), (this.intervalType = "second"))
                        : r / (2 * constants.secondDuration) <= o
                        ? ((this.interval = 2), (this.intervalType = "second"))
                        : r / (5 * constants.secondDuration) <= o
                        ? ((this.interval = 5), (this.intervalType = "second"))
                        : r / (10 * constants.secondDuration) <= o
                        ? ((this.interval = 10), (this.intervalType = "second"))
                        : r / (15 * constants.secondDuration) <= o
                        ? ((this.interval = 15), (this.intervalType = "second"))
                        : r / (20 * constants.secondDuration) <= o
                        ? ((this.interval = 20), (this.intervalType = "second"))
                        : r / (30 * constants.secondDuration) <= o
                        ? ((this.interval = 30), (this.intervalType = "second"))
                        : r / (1 * constants.minuteDuration) <= o
                        ? ((this.interval = 1), (this.intervalType = "minute"))
                        : r / (2 * constants.minuteDuration) <= o
                        ? ((this.interval = 2), (this.intervalType = "minute"))
                        : r / (5 * constants.minuteDuration) <= o
                        ? ((this.interval = 5), (this.intervalType = "minute"))
                        : r / (10 * constants.minuteDuration) <= o
                        ? ((this.interval = 10), (this.intervalType = "minute"))
                        : r / (15 * constants.minuteDuration) <= o
                        ? ((this.interval = 15), (this.intervalType = "minute"))
                        : r / (20 * constants.minuteDuration) <= o
                        ? ((this.interval = 20), (this.intervalType = "minute"))
                        : r / (30 * constants.minuteDuration) <= o
                        ? ((this.interval = 30), (this.intervalType = "minute"))
                        : r / (1 * constants.hourDuration) <= o
                        ? ((this.interval = 1), (this.intervalType = "hour"))
                        : r / (2 * constants.hourDuration) <= o
                        ? ((this.interval = 2), (this.intervalType = "hour"))
                        : r / (3 * constants.hourDuration) <= o
                        ? ((this.interval = 3), (this.intervalType = "hour"))
                        : r / (6 * constants.hourDuration) <= o
                        ? ((this.interval = 6), (this.intervalType = "hour"))
                        : r / (1 * constants.dayDuration) <= o
                        ? ((this.interval = 1), (this.intervalType = "day"))
                        : r / (2 * constants.dayDuration) <= o
                        ? ((this.interval = 2), (this.intervalType = "day"))
                        : r / (4 * constants.dayDuration) <= o
                        ? ((this.interval = 4), (this.intervalType = "day"))
                        : r / (1 * constants.weekDuration) <= o
                        ? ((this.interval = 1), (this.intervalType = "week"))
                        : r / (2 * constants.weekDuration) <= o
                        ? ((this.interval = 2), (this.intervalType = "week"))
                        : r / (3 * constants.weekDuration) <= o
                        ? ((this.interval = 3), (this.intervalType = "week"))
                        : r / (1 * constants.monthDuration) <= o
                        ? ((this.interval = 1), (this.intervalType = "month"))
                        : r / (2 * constants.monthDuration) <= o
                        ? ((this.interval = 2), (this.intervalType = "month"))
                        : r / (3 * constants.monthDuration) <= o
                        ? ((this.interval = 3), (this.intervalType = "month"))
                        : r / (6 * constants.monthDuration) <= o
                        ? ((this.interval = 6), (this.intervalType = "month"))
                        : r / (1 * constants.yearDuration) <= o
                        ? ((this.interval = 1), (this.intervalType = "year"))
                        : r / (2 * constants.yearDuration) <= o
                        ? ((this.interval = 2), (this.intervalType = "year"))
                        : r / (4 * constants.yearDuration) <= o
                        ? ((this.interval = 4), (this.intervalType = "year"))
                        : ((this.interval = Math.floor(
                            n.getNiceNumber(r / (o - 1), !0) /
                              constants.yearDuration
                          )),
                          (this.intervalType = "year"))),
                    (null === this.viewportMinimum ||
                      isNaN(this.viewportMinimum)) &&
                      (this.viewportMinimum = i - s / 2),
                    (null === this.viewportMaximum ||
                      isNaN(this.viewportMaximum)) &&
                      (this.viewportMaximum = a + s / 2),
                    this.valueFormatString ||
                      (t
                        ? (this.valueFormatString = "MMM DD YYYY HH:mm")
                        : "year" === this.intervalType
                        ? (this.valueFormatString = "YYYY")
                        : "month" === this.intervalType
                        ? (this.valueFormatString = "MMM YYYY")
                        : "week" === this.intervalType
                        ? (this.valueFormatString = "MMM DD YYYY")
                        : "day" === this.intervalType
                        ? (this.valueFormatString = "MMM DD YYYY")
                        : "hour" === this.intervalType
                        ? (this.valueFormatString = "hh:mm TT")
                        : "minute" === this.intervalType
                        ? (this.valueFormatString = "hh:mm TT")
                        : "second" === this.intervalType
                        ? (this.valueFormatString = "hh:mm:ss TT")
                        : "millisecond" === this.intervalType &&
                          (this.valueFormatString = "fff'ms'")))
                  : ((this.intervalType = "number"),
                    (r = n.getNiceNumber(r, !1)),
                    this._options && this._options.interval
                      ? (this.interval = this._options.interval)
                      : (this.interval = n.getNiceNumber(r / (o - 1), !0)),
                    (null === this.viewportMinimum ||
                      isNaN(this.viewportMinimum)) &&
                      ("axisX" === this.type
                        ? (this.viewportMinimum = i - s / 2)
                        : (this.viewportMinimum =
                            Math.floor(i / this.interval) * this.interval)),
                    (null === this.viewportMaximum ||
                      isNaN(this.viewportMaximum)) &&
                      ("axisX" === this.type
                        ? (this.viewportMaximum = a + s / 2)
                        : (this.viewportMaximum =
                            Math.ceil(a / this.interval) * this.interval)),
                    0 === this.viewportMaximum &&
                      0 === this.viewportMinimum &&
                      (0 === this._options.viewportMinimum
                        ? (this.viewportMaximum += 10)
                        : 0 === this._options.viewportMaximum &&
                          (this.viewportMinimum -= 10),
                      this._options &&
                        void 0 === this._options.interval &&
                        (this.interval = n.getNiceNumber(
                          (this.viewportMaximum - this.viewportMinimum) /
                            (o - 1),
                          !0
                        )))),
                (null !== this.minimum && null !== this.maximum) ||
                  ("axisX" === this.type
                    ? ((i =
                        null !== this.minimum
                          ? this.minimum
                          : this.dataInfo.min),
                      (a =
                        null !== this.maximum
                          ? this.maximum
                          : this.dataInfo.max),
                      a - i == 0 &&
                        ((l =
                          void 0 === this._options.interval
                            ? 0.4
                            : this._options.interval),
                        (a += l),
                        (i -= l)),
                      (s =
                        this.dataInfo.minDiff !== 1 / 0
                          ? this.dataInfo.minDiff
                          : a - i > 1
                          ? 0.5 * Math.abs(a - i)
                          : 1))
                    : "axisY" === this.type &&
                      ((i =
                        null !== this.minimum
                          ? this.minimum
                          : this.dataInfo.min),
                      (a =
                        null !== this.maximum
                          ? this.maximum
                          : this.dataInfo.max),
                      isFinite(i) || isFinite(a)
                        ? 0 === i && 0 === a
                          ? ((a += 9), (i = 0))
                          : a - i == 0
                          ? ((l = Math.min(Math.abs(0.01 * Math.abs(a)), 5)),
                            (a += l),
                            (i -= l))
                          : i > a
                          ? ((l = Math.min(
                              Math.abs(0.01 * Math.abs(a - i)),
                              5
                            )),
                            a >= 0 ? (i = a - l) : (a = i + l))
                          : ((l = Math.min(
                              Math.abs(0.01 * Math.abs(a - i)),
                              0.05
                            )),
                            0 !== a && (a += l),
                            0 !== i && (i -= l))
                        : ((a =
                            void 0 === this._options.interval
                              ? -1 / 0
                              : this._options.interval),
                          (i = 0)),
                      (s =
                        this.dataInfo.minDiff !== 1 / 0
                          ? this.dataInfo.minDiff
                          : a - i > 1
                          ? 0.5 * Math.abs(a - i)
                          : 1),
                      this.includeZero &&
                        (null === this.minimum || isNaN(this.minimum)) &&
                        i > 0 &&
                        (i = 0),
                      this.includeZero &&
                        (null === this.maximum || isNaN(this.maximum)) &&
                        a < 0 &&
                        (a = 0)),
                  (r = a - i),
                  "axisX" === this.type &&
                  "dateTime" === this.chart.plotInfo.axisXValueType
                    ? ((null === this.minimum || isNaN(this.minimum)) &&
                        (this.minimum = i - s / 2),
                      (null === this.maximum || isNaN(this.maximum)) &&
                        (this.maximum = a + s / 2))
                    : ((this.intervalType = "number"),
                      null === this.minimum &&
                        ("axisX" === this.type
                          ? (this.minimum = i - s / 2)
                          : (this.minimum =
                              Math.floor(i / this.interval) * this.interval),
                        (this.minimum = Math.min(
                          this.minimum,
                          null === this.sessionVariables.viewportMinimum ||
                            isNaN(this.sessionVariables.viewportMinimum)
                            ? 1 / 0
                            : this.sessionVariables.viewportMinimum
                        ))),
                      null === this.maximum &&
                        ("axisX" === this.type
                          ? (this.maximum = a + s / 2)
                          : (this.maximum =
                              Math.ceil(a / this.interval) * this.interval),
                        (this.maximum = Math.max(
                          this.maximum,
                          null === this.sessionVariables.viewportMaximum ||
                            isNaN(this.sessionVariables.viewportMaximum)
                            ? -1 / 0
                            : this.sessionVariables.viewportMaximum
                        ))),
                      0 === this.maximum &&
                        0 === this.minimum &&
                        (0 === this._options.minimum
                          ? (this.maximum += 10)
                          : 0 === this._options.maximum &&
                            (this.minimum -= 10)))),
                (this.viewportMinimum = Math.max(
                  this.viewportMinimum,
                  this.minimum
                )),
                (this.viewportMaximum = Math.min(
                  this.viewportMaximum,
                  this.maximum
                )),
                "axisX" === this.type &&
                "dateTime" === this.chart.plotInfo.axisXValueType
                  ? (this.intervalStartPosition = this.getLabelStartPoint(
                      new Date(this.viewportMinimum),
                      this.intervalType,
                      this.interval
                    ))
                  : (this.intervalStartPosition =
                      Math.floor(
                        (this.viewportMinimum + 0.2 * this.interval) /
                          this.interval
                      ) * this.interval),
                !this.valueFormatString &&
                  ((this.valueFormatString = "#,##0.##"),
                  (r = Math.abs(this.viewportMaximum - this.viewportMinimum)) <
                    1))
              ) {
                var h = Math.floor(Math.abs(Math.log(r) / Math.LN10)) + 2;
                if (((!isNaN(h) && isFinite(h)) || (h = 2), h > 2))
                  for (var d = 0; d < h - 2; d++) this.valueFormatString += "#";
              }
            }),
            (n.getNiceNumber = function (e, t) {
              var i,
                a = Math.floor(Math.log(e) / Math.LN10),
                n = e / Math.pow(10, a);
              return (
                (i = t
                  ? n < 1.5
                    ? 1
                    : n < 3
                    ? 2
                    : n < 7
                    ? 5
                    : 10
                  : n <= 1
                  ? 1
                  : n <= 2
                  ? 2
                  : n <= 5
                  ? 5
                  : 10),
                Number((i * Math.pow(10, a)).toFixed(20))
              );
            }),
            (n.prototype.getLabelStartPoint = function () {
              var e = convertToNumber(this.interval, this.intervalType),
                t = Math.floor(this.viewportMinimum / e) * e,
                i = new Date(t);
              return (
                "millisecond" === this.intervalType ||
                  ("second" === this.intervalType
                    ? i.getMilliseconds() > 0 &&
                      (i.setSeconds(i.getSeconds() + 1), i.setMilliseconds(0))
                    : "minute" === this.intervalType
                    ? (i.getSeconds() > 0 || i.getMilliseconds() > 0) &&
                      (i.setMinutes(i.getMinutes() + 1),
                      i.setSeconds(0),
                      i.setMilliseconds(0))
                    : "hour" === this.intervalType
                    ? (i.getMinutes() > 0 ||
                        i.getSeconds() > 0 ||
                        i.getMilliseconds() > 0) &&
                      (i.setHours(i.getHours() + 1),
                      i.setMinutes(0),
                      i.setSeconds(0),
                      i.setMilliseconds(0))
                    : "day" === this.intervalType
                    ? (i.getHours() > 0 ||
                        i.getMinutes() > 0 ||
                        i.getSeconds() > 0 ||
                        i.getMilliseconds() > 0) &&
                      (i.setDate(i.getDate() + 1),
                      i.setHours(0),
                      i.setMinutes(0),
                      i.setSeconds(0),
                      i.setMilliseconds(0))
                    : "week" === this.intervalType
                    ? (i.getDay() > 0 ||
                        i.getHours() > 0 ||
                        i.getMinutes() > 0 ||
                        i.getSeconds() > 0 ||
                        i.getMilliseconds() > 0) &&
                      (i.setDate(i.getDate() + (7 - i.getDay())),
                      i.setHours(0),
                      i.setMinutes(0),
                      i.setSeconds(0),
                      i.setMilliseconds(0))
                    : "month" === this.intervalType
                    ? (i.getDate() > 1 ||
                        i.getHours() > 0 ||
                        i.getMinutes() > 0 ||
                        i.getSeconds() > 0 ||
                        i.getMilliseconds() > 0) &&
                      (i.setMonth(i.getMonth() + 1),
                      i.setDate(1),
                      i.setHours(0),
                      i.setMinutes(0),
                      i.setSeconds(0),
                      i.setMilliseconds(0))
                    : "year" === this.intervalType &&
                      (i.getMonth() > 0 ||
                        i.getDate() > 1 ||
                        i.getHours() > 0 ||
                        i.getMinutes() > 0 ||
                        i.getSeconds() > 0 ||
                        i.getMilliseconds() > 0) &&
                      (i.setFullYear(i.getFullYear() + 1),
                      i.setMonth(0),
                      i.setDate(1),
                      i.setHours(0),
                      i.setMinutes(0),
                      i.setSeconds(0),
                      i.setMilliseconds(0))),
                i
              );
            }),
            (i.default = n);
        },
        { "../helpers/utils": 39, "./canvasjs": 27, "./text_block": 34 },
      ],
      27: [
        function (e, t, i) {
          "use strict";
          function a(e, t, i, a) {
            (this._defaultsKey = e),
              (this.parent = a),
              (this._eventListeners = []);
            var s = {};
            i && n.themes[i] && n.themes[i][e] && (s = n.themes[i][e]),
              (this._options = t || {}),
              this.setOptions(this._options, s);
          }
          Object.defineProperty(i, "__esModule", { value: !0 });
          var n = e("../constants/themes"),
            s = e("../constants/options");
          (a.prototype.setOptions = function (e, t) {
            if (s.defaultOptions[this._defaultsKey]) {
              var i = s.defaultOptions[this._defaultsKey];
              for (var a in i)
                i.hasOwnProperty(a) &&
                  (this[a] = e && a in e ? e[a] : t && a in t ? t[a] : i[a]);
            } else
              s.isDebugMode &&
                window.console &&
                console.log("defaults not set");
          }),
            (a.prototype.updateOption = function (e) {
              !s.defaultOptions[this._defaultsKey] &&
                s.isDebugMode &&
                window.console &&
                console.log("defaults not set");
              var t = s.defaultOptions[this._defaultsKey],
                i = this._options.theme
                  ? this._options.theme
                  : this.chart && this.chart._options.theme
                  ? this.chart._options.theme
                  : "theme1",
                a = {},
                r = this[e];
              return (
                i &&
                  n.themes[i] &&
                  n.themes[i][this._defaultsKey] &&
                  (a = n.themes[i][this._defaultsKey]),
                e in t &&
                  (r =
                    e in this._options
                      ? this._options[e]
                      : a && e in a
                      ? a[e]
                      : t[e]),
                r !== this[e] && ((this[e] = r), !0)
              );
            }),
            (a.prototype.trackChanges = function (e) {
              if (!this.sessionVariables)
                throw "Session Variable Store not set";
              this.sessionVariables[e] = this._options[e];
            }),
            (a.prototype.isBeingTracked = function (e) {
              return (
                this._options._oldOptions || (this._options._oldOptions = {}),
                !!this._options._oldOptions[e]
              );
            }),
            (a.prototype.hasOptionChanged = function (e) {
              if (!this.sessionVariables)
                throw "Session Variable Store not set";
              return !(this.sessionVariables[e] === this._options[e]);
            }),
            (a.prototype.addEventListener = function (e, t, i) {
              e &&
                t &&
                ((i = i || this),
                (this._eventListeners[e] = this._eventListeners[e] || []),
                this._eventListeners[e].push({ context: i, eventHandler: t }));
            }),
            (a.prototype.removeEventListener = function (e, t) {
              if (e && t && this._eventListeners[e])
                for (var i = this._eventListeners[e], a = 0; a < i.length; a++)
                  if (i[a].eventHandler === t) {
                    i[a].splice(a, 1);
                    break;
                  }
            }),
            (a.prototype.removeAllEventListeners = function () {
              this._eventListeners = [];
            }),
            (a.prototype.dispatchEvent = function (e, t, i) {
              if (e && this._eventListeners[e]) {
                t = t || {};
                for (var a = this._eventListeners[e], n = 0; n < a.length; n++)
                  a[n].eventHandler.call(a[n].context, t);
              }
              "function" == typeof this[e] &&
                this[e].call(i || this.chart._publicChartReference, t);
            }),
            (i.default = a);
        },
        { "../constants/options": 23, "../constants/themes": 24 },
      ],
      28: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function n(e, t, i) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = i),
              e
            );
          }
          function s(e, t, i) {
            (this._publicChartReference = i),
              (t = t || {}),
              s.base.constructor.call(
                this,
                "Chart",
                t,
                t.theme ? t.theme : "theme1"
              );
            var a = this;
            if (
              ((this._containerId = e),
              (this._objectsInitialized = !1),
              (this.ctx = null),
              (this.overlaidCanvasCtx = null),
              (this._indexLabels = []),
              (this._panTimerId = 0),
              (this._lastTouchEventType = ""),
              (this._lastTouchData = null),
              (this.isAnimating = !1),
              (this.renderCount = 0),
              (this.animatedRender = !1),
              (this.disableToolTip = !1),
              (this.panEnabled = !1),
              (this._defaultCursor = "default"),
              (this.plotArea = {
                canvas: null,
                ctx: null,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                width: 0,
                height: 0,
              }),
              (this._dataInRenderedOrder = []),
              (this._container =
                "string" == typeof this._containerId
                  ? document.getElementById(this._containerId)
                  : this._containerId),
              !this._container)
            )
              return void (
                window.console &&
                window.console.log(
                  'CanvasJS Error: Chart Container with id "' +
                    this._containerId +
                    '" was not found'
                )
              );
            this._container.innerHTML = "";
            var n = 0,
              r = 0;
            (n = this._options.width
              ? this.width
              : this._container.clientWidth > 0
              ? this._container.clientWidth
              : this.width),
              (r = this._options.height
                ? this.height
                : this._container.clientHeight > 0
                ? this._container.clientHeight
                : this.height),
              (this.width = n),
              (this.height = r),
              (this.x1 = this.y1 = 0),
              (this.x2 = this.width),
              (this.y2 = this.height),
              (this._selectedColorSet =
                void 0 !== B.colorSets[this.colorSet]
                  ? B.colorSets[this.colorSet]
                  : B.colorSets.colorSet1),
              (this._canvasJSContainer = document.createElement("div")),
              this._canvasJSContainer.setAttribute(
                "class",
                "canvasjs-chart-container"
              ),
              (this._canvasJSContainer.style.position = "relative"),
              (this._canvasJSContainer.style.textAlign = "left"),
              (this._canvasJSContainer.style.cursor = "auto"),
              z.isCanvasSupported ||
                (this._canvasJSContainer.style.height = "0px"),
              this._container.appendChild(this._canvasJSContainer),
              (this.canvas = (0, z.createCanvas)(n, r)),
              (this.canvas.style.position = "absolute"),
              this.canvas.getContext &&
                (this._canvasJSContainer.appendChild(this.canvas),
                (this.ctx = this.canvas.getContext("2d")),
                (this.ctx.textBaseline = "top"),
                (0, z.extendCtx)(this.ctx),
                z.isCanvasSupported
                  ? (this.plotArea.ctx = this.ctx)
                  : ((this.plotArea.canvas = (0, z.createCanvas)(n, r)),
                    (this.plotArea.canvas.style.position = "absolute"),
                    this.plotArea.canvas.setAttribute(
                      "class",
                      "plotAreaCanvas"
                    ),
                    this._canvasJSContainer.appendChild(this.plotArea.canvas),
                    (this.plotArea.ctx =
                      this.plotArea.canvas.getContext("2d"))),
                (this.overlaidCanvas = (0, z.createCanvas)(n, r)),
                (this.overlaidCanvas.style.position = "absolute"),
                this._canvasJSContainer.appendChild(this.overlaidCanvas),
                (this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d")),
                (this.overlaidCanvasCtx.textBaseline = "top"),
                (this._eventManager = new f.default(this)),
                (0, z.addEvent)(window, "resize", function () {
                  a._updateSize() && a.render();
                }),
                (this._toolBar = document.createElement("div")),
                this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"),
                (this._toolBar.style.cssText =
                  "position: absolute; right: 1px; top: 1px;"),
                this._canvasJSContainer.appendChild(this._toolBar),
                (this.bounds = {
                  x1: 0,
                  y1: 0,
                  x2: this.width,
                  y2: this.height,
                }),
                (0, z.addEvent)(this.overlaidCanvas, "click", function (e) {
                  a._mouseEventHandler(e);
                }),
                (0, z.addEvent)(this.overlaidCanvas, "mousemove", function (e) {
                  a._mouseEventHandler(e);
                }),
                (0, z.addEvent)(this.overlaidCanvas, "mouseup", function (e) {
                  a._mouseEventHandler(e);
                }),
                (0, z.addEvent)(this.overlaidCanvas, "mousedown", function (e) {
                  a._mouseEventHandler(e), (0, z.hide)(a._dropdownMenu);
                }),
                (0, z.addEvent)(this.overlaidCanvas, "mouseout", function (e) {
                  a._mouseEventHandler(e);
                }),
                (0, z.addEvent)(
                  this.overlaidCanvas,
                  window.navigator.msPointerEnabled
                    ? "MSPointerDown"
                    : "touchstart",
                  function (e) {
                    a._touchEventHandler(e);
                  }
                ),
                (0, z.addEvent)(
                  this.overlaidCanvas,
                  window.navigator.msPointerEnabled
                    ? "MSPointerMove"
                    : "touchmove",
                  function (e) {
                    a._touchEventHandler(e);
                  }
                ),
                (0, z.addEvent)(
                  this.overlaidCanvas,
                  window.navigator.msPointerEnabled
                    ? "MSPointerUp"
                    : "touchend",
                  function (e) {
                    a._touchEventHandler(e);
                  }
                ),
                (0, z.addEvent)(
                  this.overlaidCanvas,
                  window.navigator.msPointerEnabled
                    ? "MSPointerCancel"
                    : "touchcancel",
                  function (e) {
                    a._touchEventHandler(e);
                  }
                ),
                this._creditLink ||
                  ((this._creditLink = document.createElement("a")),
                  this._creditLink.setAttribute(
                    "class",
                    "canvasjs-chart-credit"
                  ),
                  this._creditLink.setAttribute(
                    "style",
                    "outline:none;margin:0px;position:absolute;right:3px;top:" +
                      (this.height - 14) +
                      "px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"
                  ),
                  this._creditLink.setAttribute("tabIndex", -1),
                  this._creditLink.setAttribute("target", "_blank")),
                (this._toolTip = new M.default(
                  this,
                  this._options.toolTip,
                  this.theme
                )),
                (this.data = null),
                (this.axisX = null),
                (this.axisY = null),
                (this.axisY2 = null),
                (this.sessionVariables = { axisX: {}, axisY: {}, axisY2: {} }));
          }
          Object.defineProperty(i, "__esModule", { value: !0 });
          var r = e("./canvasjs"),
            o = a(r),
            l = e("./animator"),
            h = a(l),
            d = e("./data_series"),
            c = a(d),
            p = e("./text_block"),
            x = a(p),
            u = e("../helpers/render"),
            m = a(u),
            v = e("./layout_manager"),
            g = a(v),
            y = e("./event_manager"),
            f = a(y),
            b = e("./tooltip"),
            M = a(b),
            P = e("../core/culture_info"),
            S = a(P),
            T = e("../core/axis"),
            C = a(T),
            k = e("../core/title"),
            w = a(k),
            _ = e("../core/legend"),
            A = a(_),
            L = e("../helpers/animator"),
            I = a(L),
            B = e("../constants/themes"),
            F = e("../constants/options"),
            z = e("../helpers/utils"),
            D = e("../charts/index"),
            X = (0, z.getDevicePixelBackingStoreRatio)();
          (0, z.extend)(s, o.default),
            (s.prototype._updateOptions = function () {
              var e = this;
              if (
                (this.updateOption("width"),
                this.updateOption("height"),
                this.updateOption("dataPointMaxWidth"),
                this.updateOption("interactivityEnabled"),
                this.updateOption("theme"),
                this.updateOption("colorSet") &&
                  (this._selectedColorSet =
                    void 0 !== B.colorSets[this.colorSet]
                      ? B.colorSets[this.colorSet]
                      : B.colorSets.colorSet1),
                this.updateOption("backgroundColor"),
                this.backgroundColor ||
                  (this.backgroundColor = "rgba(0,0,0,0)"),
                this.updateOption("culture"),
                (this._cultureInfo = new S.default(this._options.culture)),
                this.updateOption("animationEnabled"),
                (this.animationEnabled =
                  this.animationEnabled && z.isCanvasSupported),
                this.updateOption("animationDuration"),
                this.updateOption("rangeChanging"),
                this.updateOption("rangeChanged"),
                this._options.zoomEnabled
                  ? (this._zoomButton ||
                      ((0, z.hide)(
                        (this._zoomButton = document.createElement("button"))
                      ),
                      setButtonState(this, this._zoomButton, "pan"),
                      this._toolBar.appendChild(this._zoomButton),
                      (0, z.addEvent)(this._zoomButton, "click", function () {
                        e.zoomEnabled
                          ? ((e.zoomEnabled = !1),
                            (e.panEnabled = !0),
                            setButtonState(e, e._zoomButton, "zoom"))
                          : ((e.zoomEnabled = !0),
                            (e.panEnabled = !1),
                            setButtonState(e, e._zoomButton, "pan")),
                          e.render();
                      })),
                    this._resetButton ||
                      ((0, z.hide)(
                        (this._resetButton = document.createElement("button"))
                      ),
                      setButtonState(this, this._resetButton, "reset"),
                      this._toolBar.appendChild(this._resetButton),
                      (0, z.addEvent)(this._resetButton, "click", function () {
                        e._toolTip.hide(),
                          e.zoomEnabled || e.panEnabled
                            ? ((e.zoomEnabled = !0),
                              (e.panEnabled = !1),
                              setButtonState(e, e._zoomButton, "pan"),
                              (e._defaultCursor = "default"),
                              (e.overlaidCanvas.style.cursor =
                                e._defaultCursor))
                            : ((e.zoomEnabled = !1), (e.panEnabled = !1)),
                          e.sessionVariables.axisX &&
                            ((e.sessionVariables.axisX.newViewportMinimum =
                              null),
                            (e.sessionVariables.axisX.newViewportMaximum =
                              null)),
                          e.sessionVariables.axisY &&
                            ((e.sessionVariables.axisY.newViewportMinimum =
                              null),
                            (e.sessionVariables.axisY.newViewportMaximum =
                              null)),
                          e.sessionVariables.axisY2 &&
                            ((e.sessionVariables.axisY2.newViewportMinimum =
                              null),
                            (e.sessionVariables.axisY2.newViewportMaximum =
                              null)),
                          e.resetOverlayedCanvas(),
                          (0, z.hide)(e._zoomButton, e._resetButton),
                          e._dispatchRangeEvent("rangeChanging", "reset"),
                          e.render(),
                          e._dispatchRangeEvent("rangeChanged", "reset");
                      }),
                      (this.overlaidCanvas.style.cursor = e._defaultCursor)),
                    this.zoomEnabled ||
                      this.panEnabled ||
                      (this._zoomButton
                        ? (e._zoomButton.getAttribute("state") ===
                          e._cultureInfo.zoomText
                            ? ((this.panEnabled = !0), (this.zoomEnabled = !1))
                            : ((this.zoomEnabled = !0), (this.panEnabled = !1)),
                          (0, z.show)(e._zoomButton, e._resetButton))
                        : ((this.zoomEnabled = !0), (this.panEnabled = !1))))
                  : ((this.zoomEnabled = !1), (this.panEnabled = !1)),
                this._menuButton
                  ? this.exportEnabled
                    ? (0, z.show)(this._menuButton)
                    : (0, z.hide)(this._menuButton)
                  : this.exportEnabled &&
                    z.isCanvasSupported &&
                    ((this._menuButton = document.createElement("button")),
                    setButtonState(this, this._menuButton, "menu"),
                    this._toolBar.appendChild(this._menuButton),
                    (0, z.addEvent)(
                      this._menuButton,
                      "click",
                      function () {
                        if ("none" === e._dropdownMenu.style.display) {
                          if (
                            e._dropDownCloseTime &&
                            new Date().getTime() -
                              e._dropDownCloseTime.getTime() <=
                              500
                          )
                            return;
                          (e._dropdownMenu.style.display = "block"),
                            e._menuButton.blur(),
                            e._dropdownMenu.focus();
                        }
                      },
                      !0
                    )),
                !this._dropdownMenu &&
                  this.exportEnabled &&
                  z.isCanvasSupported)
              ) {
                (this._dropdownMenu = document.createElement("div")),
                  this._dropdownMenu.setAttribute("tabindex", -1),
                  (this._dropdownMenu.style.cssText =
                    "position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;"),
                  (e._dropdownMenu.style.display = "none"),
                  this._toolBar.appendChild(this._dropdownMenu),
                  (0, z.addEvent)(
                    this._dropdownMenu,
                    "blur",
                    function () {
                      (0, z.hide)(e._dropdownMenu),
                        (e._dropDownCloseTime = new Date());
                    },
                    !0
                  );
                var t = document.createElement("div");
                (t.style.cssText = "padding: 2px 15px 2px 10px"),
                  (t.innerHTML = this._cultureInfo.saveJPGText),
                  this._dropdownMenu.appendChild(t),
                  (0, z.addEvent)(
                    t,
                    "mouseover",
                    function () {
                      this.style.backgroundColor = "#EEEEEE";
                    },
                    !0
                  ),
                  (0, z.addEvent)(
                    t,
                    "mouseout",
                    function () {
                      this.style.backgroundColor = "transparent";
                    },
                    !0
                  ),
                  (0, z.addEvent)(
                    t,
                    "click",
                    function () {
                      exportCanvas(e.canvas, "jpg", e.exportFileName),
                        (0, z.hide)(e._dropdownMenu);
                    },
                    !0
                  );
                var t = document.createElement("div");
                (t.style.cssText = "padding: 2px 15px 2px 10px"),
                  (t.innerHTML = this._cultureInfo.savePNGText),
                  this._dropdownMenu.appendChild(t),
                  (0, z.addEvent)(
                    t,
                    "mouseover",
                    function () {
                      this.style.backgroundColor = "#EEEEEE";
                    },
                    !0
                  ),
                  (0, z.addEvent)(
                    t,
                    "mouseout",
                    function () {
                      this.style.backgroundColor = "transparent";
                    },
                    !0
                  ),
                  (0, z.addEvent)(
                    t,
                    "click",
                    function () {
                      exportCanvas(e.canvas, "png", e.exportFileName),
                        (0, z.hide)(e._dropdownMenu);
                    },
                    !0
                  );
              }
              if (
                ("none" !== this._toolBar.style.display &&
                  this._zoomButton &&
                  (this.panEnabled
                    ? setButtonState(e, e._zoomButton, "zoom")
                    : setButtonState(e, e._zoomButton, "pan"),
                  e._resetButton.getAttribute("state") !==
                    e._cultureInfo.resetText &&
                    setButtonState(e, e._resetButton, "reset")),
                void 0 === F.defaultOptions.Chart.creditHref)
              )
                (this.creditHref = "http://canvasjs.com/"),
                  (this.creditText = "CanvasJS.com");
              else
                var i = this.updateOption("creditText"),
                  a = this.updateOption("creditHref");
              (0 === this.renderCount || i || a) &&
                (this._creditLink.setAttribute("href", this.creditHref),
                (this._creditLink.innerHTML = this.creditText)),
                this.creditHref && this.creditText
                  ? this._creditLink.parentElement ||
                    this._canvasJSContainer.appendChild(this._creditLink)
                  : this._creditLink.parentElement &&
                    this._canvasJSContainer.removeChild(this._creditLink),
                this._options.toolTip &&
                  this._toolTip._options !== this._options.toolTip &&
                  (this._toolTip._options = this._options.toolTip);
              for (var n in this._toolTip._options)
                this._toolTip._options.hasOwnProperty(n) &&
                  this._toolTip.updateOption(n);
            }),
            (s.prototype._updateSize = function () {
              var e = 0,
                t = 0;
              return (
                this._options.width
                  ? (e = this.width)
                  : (this.width = e =
                      this._container.clientWidth > 0
                        ? this._container.clientWidth
                        : this.width),
                this._options.height
                  ? (t = this.height)
                  : (this.height = t =
                      this._container.clientHeight > 0
                        ? this._container.clientHeight
                        : this.height),
                (this.canvas.width !== e * X || this.canvas.height !== t * X) &&
                  ((0, z.setCanvasSize)(this.canvas, e, t),
                  (0, z.setCanvasSize)(this.overlaidCanvas, e, t),
                  (0, z.setCanvasSize)(this._eventManager.ghostCanvas, e, t),
                  !0)
              );
            }),
            (s.prototype._initialize = function () {
              this._animator
                ? this._animator.cancelAllAnimations()
                : (this._animator = new h.default(this)),
                this.removeAllEventListeners(),
                (this.disableToolTip = !1),
                (this._axes = []),
                (this.pieDoughnutClickHandler = null),
                this.animationRequestId &&
                  this.cancelRequestAnimFrame.call(
                    window,
                    this.animationRequestId
                  ),
                this._updateOptions(),
                (this.animatedRender =
                  z.isCanvasSupported &&
                  this.animationEnabled &&
                  0 === this.renderCount),
                this._updateSize(),
                this.clearCanvas(),
                this.ctx.beginPath(),
                (this.axisX = null),
                (this.axisY = null),
                (this.axisY2 = null),
                (this._indexLabels = []),
                (this._dataInRenderedOrder = []),
                (this._events = []),
                this._eventManager && this._eventManager.reset(),
                (this.plotInfo = {
                  axisPlacement: null,
                  axisXValueType: null,
                  plotTypes: [],
                }),
                (this.layoutManager = new g.default(
                  0,
                  0,
                  this.width,
                  this.height,
                  2
                )),
                this.plotArea.layoutManager &&
                  this.plotArea.layoutManager.reset(),
                (this.data = []);
              for (var e = 0, t = 0; t < this._options.data.length; t++)
                if (
                  (e++,
                  !this._options.data[t].type ||
                    s._supportedChartTypes.indexOf(
                      this._options.data[t].type
                    ) >= 0)
                ) {
                  var i = new c.default(
                    this,
                    this._options.data[t],
                    this.theme,
                    e - 1,
                    ++this._eventManager.lastObjectId
                  );
                  null === i.name && (i.name = "DataSeries " + e),
                    null === i.color
                      ? this._options.data.length > 1
                        ? ((i._colorSet = [
                            this._selectedColorSet[
                              i.index % this._selectedColorSet.length
                            ],
                          ]),
                          (i.color =
                            this._selectedColorSet[
                              i.index % this._selectedColorSet.length
                            ]))
                        : "line" === i.type ||
                          "stepLine" === i.type ||
                          "spline" === i.type ||
                          "area" === i.type ||
                          "stepArea" === i.type ||
                          "splineArea" === i.type ||
                          "stackedArea" === i.type ||
                          "stackedArea100" === i.type ||
                          "rangeArea" === i.type ||
                          "rangeSplineArea" === i.type ||
                          "candlestick" === i.type ||
                          "ohlc" === i.type
                        ? (i._colorSet = [this._selectedColorSet[0]])
                        : (i._colorSet = this._selectedColorSet)
                      : (i._colorSet = [i.color]),
                    null === i.markerSize &&
                      ((("line" === i.type ||
                        "stepLine" === i.type ||
                        "spline" === i.type) &&
                        i.dataPoints &&
                        i.dataPoints.length < this.width / 16) ||
                        "scatter" === i.type) &&
                      (i.markerSize = 8),
                    ("bubble" !== i.type && "scatter" !== i.type) ||
                      !i.dataPoints ||
                      i.dataPoints.sort(z.compareDataPointX),
                    this.data.push(i);
                  var a,
                    n = i.axisPlacement;
                  if (
                    ("normal" === n
                      ? "xySwapped" === this.plotInfo.axisPlacement
                        ? (a =
                            'You cannot combine "' +
                            i.type +
                            '" with bar chart')
                        : "none" === this.plotInfo.axisPlacement
                        ? (a =
                            'You cannot combine "' +
                            i.type +
                            '" with pie chart')
                        : null === this.plotInfo.axisPlacement &&
                          (this.plotInfo.axisPlacement = "normal")
                      : "xySwapped" === n
                      ? "normal" === this.plotInfo.axisPlacement
                        ? (a =
                            'You cannot combine "' +
                            i.type +
                            '" with line, area, column or pie chart')
                        : "none" === this.plotInfo.axisPlacement
                        ? (a =
                            'You cannot combine "' +
                            i.type +
                            '" with pie chart')
                        : null === this.plotInfo.axisPlacement &&
                          (this.plotInfo.axisPlacement = "xySwapped")
                      : "none" == n &&
                        ("normal" === this.plotInfo.axisPlacement
                          ? (a =
                              'You cannot combine "' +
                              i.type +
                              '" with line, area, column or bar chart')
                          : "xySwapped" === this.plotInfo.axisPlacement
                          ? (a =
                              'You cannot combine "' +
                              i.type +
                              '" with bar chart')
                          : null === this.plotInfo.axisPlacement &&
                            (this.plotInfo.axisPlacement = "none")),
                    a && window.console)
                  )
                    return void window.console.log(a);
                }
              this._objectsInitialized = !0;
            }),
            (s._supportedChartTypes = (0, z.addArrayIndexOf)([
              "line",
              "stepLine",
              "spline",
              "column",
              "area",
              "stepArea",
              "splineArea",
              "bar",
              "bubble",
              "scatter",
              "stackedColumn",
              "stackedColumn100",
              "stackedBar",
              "stackedBar100",
              "stackedArea",
              "stackedArea100",
              "candlestick",
              "ohlc",
              "rangeColumn",
              "rangeBar",
              "rangeArea",
              "rangeSplineArea",
              "pie",
              "doughnut",
              "funnel",
            ])),
            (s.prototype.render = function (e) {
              e && (this._options = e), this._initialize();
              for (var t = [], i = 0; i < this.data.length; i++)
                ("normal" !== this.plotInfo.axisPlacement &&
                  "xySwapped" !== this.plotInfo.axisPlacement) ||
                  (this.data[i].axisYType &&
                  "primary" !== this.data[i].axisYType
                    ? "secondary" === this.data[i].axisYType &&
                      (this.axisY2 ||
                        ("normal" === this.plotInfo.axisPlacement
                          ? this._axes.push(
                              (this.axisY2 = new C.default(
                                this,
                                this._options.axisY2,
                                "axisY",
                                "right"
                              ))
                            )
                          : "xySwapped" === this.plotInfo.axisPlacement &&
                            this._axes.push(
                              (this.axisY2 = new C.default(
                                this,
                                this._options.axisY2,
                                "axisY",
                                "top"
                              ))
                            )),
                      (this.data[i].axisY = this.axisY2))
                    : (this.axisY ||
                        ("normal" === this.plotInfo.axisPlacement
                          ? this._axes.push(
                              (this.axisY = new C.default(
                                this,
                                this._options.axisY,
                                "axisY",
                                "left"
                              ))
                            )
                          : "xySwapped" === this.plotInfo.axisPlacement &&
                            this._axes.push(
                              (this.axisY = new C.default(
                                this,
                                this._options.axisY,
                                "axisY",
                                "bottom"
                              ))
                            )),
                      (this.data[i].axisY = this.axisY)),
                  this.axisX ||
                    ("normal" === this.plotInfo.axisPlacement
                      ? this._axes.push(
                          (this.axisX = new C.default(
                            this,
                            this._options.axisX,
                            "axisX",
                            "bottom"
                          ))
                        )
                      : "xySwapped" === this.plotInfo.axisPlacement &&
                        this._axes.push(
                          (this.axisX = new C.default(
                            this,
                            this._options.axisX,
                            "axisX",
                            "left"
                          ))
                        )),
                  (this.data[i].axisX = this.axisX));
              this.axisY &&
                this.axisY2 &&
                (this.axisY.gridThickness > 0 &&
                void 0 === this.axisY2._options.gridThickness
                  ? (this.axisY2.gridThickness = 0)
                  : this.axisY2.gridThickness > 0 &&
                    void 0 === this.axisY._options.gridThickness &&
                    (this.axisY.gridThickness = 0));
              var a = !1;
              if (
                this._axes.length > 0 &&
                (this.zoomEnabled || this.panEnabled)
              )
                for (var i = 0; i < this._axes.length; i++)
                  if (
                    null !== this._axes[i].viewportMinimum ||
                    null !== this._axes[i].viewportMaximum
                  ) {
                    a = !0;
                    break;
                  }
              if (
                (a
                  ? (0, z.show)(this._zoomButton, this._resetButton)
                  : (0, z.hide)(this._zoomButton, this._resetButton),
                this._processData(),
                this._options.title &&
                  ((this._title = new w.default(this, this._options.title)),
                  this._title.dockInsidePlotArea
                    ? t.push(this._title)
                    : this._title.render()),
                this._options.subtitles)
              )
                for (var i = 0; i < this._options.subtitles.length; i++) {
                  this.subtitles = [];
                  var n = new Subtitle(this, this._options.subtitles[i]);
                  this.subtitles.push(n),
                    n.dockInsidePlotArea ? t.push(n) : n.render();
                }
              this.legend = new A.default(
                this,
                this._options.legend,
                this.theme
              );
              for (var i = 0; i < this.data.length; i++)
                (this.data[i].showInLegend ||
                  "pie" === this.data[i].type ||
                  "doughnut" === this.data[i].type) &&
                  this.legend.dataSeries.push(this.data[i]);
              if (
                (this.legend.dockInsidePlotArea
                  ? t.push(this.legend)
                  : this.legend.render(),
                "normal" === this.plotInfo.axisPlacement ||
                  "xySwapped" === this.plotInfo.axisPlacement)
              )
                C.default.setLayoutAndRender(
                  this.axisX,
                  this.axisY,
                  this.axisY2,
                  this.plotInfo.axisPlacement,
                  this.layoutManager.getFreeSpace()
                );
              else {
                if ("none" !== this.plotInfo.axisPlacement) return;
                this.preparePlotArea();
              }
              var s = 0;
              for (s in t) t.hasOwnProperty(s) && t[s].render();
              var r = [];
              if (this.animatedRender) {
                var o = (0, z.createCanvas)(this.width, this.height);
                o.getContext("2d").drawImage(
                  this.canvas,
                  0,
                  0,
                  this.width,
                  this.height
                );
              }
              for (var i = 0; i < this.plotInfo.plotTypes.length; i++)
                for (
                  var l = this.plotInfo.plotTypes[i], h = 0;
                  h < l.plotUnits.length;
                  h++
                ) {
                  var d = l.plotUnits[h],
                    c = null;
                  (d.targetCanvas = null),
                    this.animatedRender &&
                      ((d.targetCanvas = (0, z.createCanvas)(
                        this.width,
                        this.height
                      )),
                      (d.targetCanvasCtx = d.targetCanvas.getContext("2d"))),
                    "line" === d.type
                      ? (c = this.renderLine(d))
                      : "stepLine" === d.type
                      ? (c = this.renderStepLine(d))
                      : "spline" === d.type
                      ? (c = this.renderSpline(d))
                      : "column" === d.type
                      ? (c = this.renderColumn(d))
                      : "bar" === d.type
                      ? (c = this.renderBar(d))
                      : "area" === d.type
                      ? (c = this.renderArea(d))
                      : "stepArea" === d.type
                      ? (c = this.renderStepArea(d))
                      : "splineArea" === d.type
                      ? (c = this.renderSplineArea(d))
                      : "stackedColumn" === d.type
                      ? (c = this.renderStackedColumn(d))
                      : "stackedColumn100" === d.type
                      ? (c = this.renderStackedColumn100(d))
                      : "stackedBar" === d.type
                      ? (c = this.renderStackedBar(d))
                      : "stackedBar100" === d.type
                      ? (c = this.renderStackedBar100(d))
                      : "stackedArea" === d.type
                      ? (c = this.renderStackedArea(d))
                      : "stackedArea100" === d.type
                      ? (c = this.renderStackedArea100(d))
                      : "bubble" === d.type
                      ? (c = c = this.renderBubble(d))
                      : "scatter" === d.type
                      ? (c = this.renderScatter(d))
                      : "pie" === d.type
                      ? this.renderPie(d)
                      : "doughnut" === d.type
                      ? this.renderPie(d)
                      : "candlestick" === d.type
                      ? (c = this.renderCandlestick(d))
                      : "ohlc" === d.type
                      ? (c = this.renderCandlestick(d))
                      : "rangeColumn" === d.type
                      ? (c = this.renderRangeColumn(d))
                      : "rangeBar" === d.type
                      ? (c = this.renderRangeBar(d))
                      : "rangeArea" === d.type
                      ? (c = this.renderRangeArea(d))
                      : "rangeSplineArea" === d.type &&
                        (c = this.renderRangeSplineArea(d));
                  for (var p = 0; p < d.dataSeriesIndexes.length; p++)
                    this._dataInRenderedOrder.push(
                      this.data[d.dataSeriesIndexes[p]]
                    );
                  this.animatedRender && c && r.push(c);
                }
              if (this.animatedRender && this._indexLabels.length > 0) {
                var x = (0, z.createCanvas)(this.width, this.height),
                  u = x.getContext("2d");
                r.push(this.renderIndexLabels(u));
              }
              var m = this;
              if (
                (r.length > 0
                  ? ((m.disableToolTip = !0),
                    m._animator.animate(
                      200,
                      m.animationDuration,
                      function (e) {
                        m.ctx.clearRect(0, 0, m.width, m.height),
                          m.ctx.drawImage(
                            o,
                            0,
                            0,
                            Math.floor(m.width * X),
                            Math.floor(m.height * X),
                            0,
                            0,
                            m.width,
                            m.height
                          );
                        for (var t = 0; t < r.length; t++)
                          (c = r[t]),
                            e < 1 && void 0 !== c.startTimePercent
                              ? e >= c.startTimePercent &&
                                c.animationCallback(
                                  c.easingFunction(
                                    e - c.startTimePercent,
                                    0,
                                    1,
                                    1 - c.startTimePercent
                                  ),
                                  c
                                )
                              : c.animationCallback(
                                  c.easingFunction(e, 0, 1, 1),
                                  c
                                );
                        m.dispatchEvent("dataAnimationIterationEnd", {
                          chart: m,
                        });
                      },
                      function () {
                        r = [];
                        for (var e = 0; e < m.plotInfo.plotTypes.length; e++)
                          for (
                            var t = m.plotInfo.plotTypes[e], i = 0;
                            i < t.plotUnits.length;
                            i++
                          ) {
                            var a = t.plotUnits[i];
                            a.targetCanvas = null;
                          }
                        (o = null), (m.disableToolTip = !1);
                      }
                    ))
                  : (m._indexLabels.length > 0 && m.renderIndexLabels(),
                    m.dispatchEvent("dataAnimationIterationEnd", { chart: m })),
                this.attachPlotAreaEventHandlers(),
                this.zoomEnabled ||
                  this.panEnabled ||
                  !this._zoomButton ||
                  "none" === this._zoomButton.style.display ||
                  (0, z.hide)(this._zoomButton, this._resetButton),
                this._toolTip._updateToolTip(),
                this.renderCount++,
                F.isDebugMode)
              ) {
                var m = this;
                setTimeout(function () {
                  var e = document.getElementById("ghostCanvasCopy");
                  if (e) {
                    (0, z.setCanvasSize)(e, m.width, m.height);
                    e.getContext("2d").drawImage(
                      m._eventManager.ghostCanvas,
                      0,
                      0
                    );
                  }
                }, 2e3);
              }
            }),
            (s.prototype.attachPlotAreaEventHandlers = function () {
              var e;
              this.attachEvent(
                ((e = {
                  context: this,
                  chart: this,
                  mousedown: this._plotAreaMouseDown,
                  mouseup: this._plotAreaMouseUp,
                  mousemove: this._plotAreaMouseMove,
                  cursor: this.zoomEnabled ? "col-resize" : "move",
                }),
                n(e, "cursor", this.panEnabled ? "move" : "default"),
                n(e, "capture", !0),
                n(e, "bounds", this.plotArea),
                e)
              );
            }),
            (s.prototype.categoriseDataSeries = function () {
              for (var e = "", t = 0; t < this.data.length; t++)
                if (
                  ((e = this.data[t]),
                  e.dataPoints &&
                    0 !== e.dataPoints.length &&
                    e.visible &&
                    s._supportedChartTypes.indexOf(e.type) >= 0)
                ) {
                  for (
                    var i = null, a = !1, n = null, r = !1, o = 0;
                    o < this.plotInfo.plotTypes.length;
                    o++
                  )
                    if (this.plotInfo.plotTypes[o].type === e.type) {
                      a = !0;
                      var i = this.plotInfo.plotTypes[o];
                      break;
                    }
                  a ||
                    ((i = { type: e.type, totalDataSeries: 0, plotUnits: [] }),
                    this.plotInfo.plotTypes.push(i));
                  for (var o = 0; o < i.plotUnits.length; o++)
                    if (i.plotUnits[o].axisYType === e.axisYType) {
                      r = !0;
                      var n = i.plotUnits[o];
                      break;
                    }
                  r ||
                    ((n = {
                      type: e.type,
                      previousDataSeriesCount: 0,
                      index: i.plotUnits.length,
                      plotType: i,
                      axisYType: e.axisYType,
                      axisY:
                        "primary" === e.axisYType ? this.axisY : this.axisY2,
                      axisX: this.axisX,
                      dataSeriesIndexes: [],
                      yTotals: [],
                    }),
                    i.plotUnits.push(n)),
                    i.totalDataSeries++,
                    n.dataSeriesIndexes.push(t),
                    (e.plotUnit = n);
                }
              for (var t = 0; t < this.plotInfo.plotTypes.length; t++)
                for (
                  var i = this.plotInfo.plotTypes[t], l = 0, o = 0;
                  o < i.plotUnits.length;
                  o++
                )
                  (i.plotUnits[o].previousDataSeriesCount = l),
                    (l += i.plotUnits[o].dataSeriesIndexes.length);
            }),
            (s.prototype.assignIdToDataPoints = function () {
              for (var e = 0; e < this.data.length; e++) {
                var t = this.data[e];
                if (t.dataPoints)
                  for (var i = t.dataPoints.length, a = 0; a < i; a++)
                    t.dataPointIds[a] = ++this._eventManager.lastObjectId;
              }
            }),
            (s.prototype._processData = function () {
              this.assignIdToDataPoints(), this.categoriseDataSeries();
              for (var e = 0; e < this.plotInfo.plotTypes.length; e++)
                for (
                  var t = this.plotInfo.plotTypes[e], i = 0;
                  i < t.plotUnits.length;
                  i++
                ) {
                  var a = t.plotUnits[i];
                  "line" === a.type ||
                  "stepLine" === a.type ||
                  "spline" === a.type ||
                  "column" === a.type ||
                  "area" === a.type ||
                  "stepArea" === a.type ||
                  "splineArea" === a.type ||
                  "bar" === a.type ||
                  "bubble" === a.type ||
                  "scatter" === a.type
                    ? this._processMultiseriesPlotUnit(a)
                    : "stackedColumn" === a.type ||
                      "stackedBar" === a.type ||
                      "stackedArea" === a.type
                    ? this._processStackedPlotUnit(a)
                    : "stackedColumn100" === a.type ||
                      "stackedBar100" === a.type ||
                      "stackedArea100" === a.type
                    ? this._processStacked100PlotUnit(a)
                    : ("candlestick" !== a.type &&
                        "ohlc" !== a.type &&
                        "rangeColumn" !== a.type &&
                        "rangeBar" !== a.type &&
                        "rangeArea" !== a.type &&
                        "rangeSplineArea" !== a.type) ||
                      this._processMultiYPlotUnit(a);
                }
            }),
            (s.prototype._processMultiseriesPlotUnit = function (e) {
              if (e.dataSeriesIndexes && !(e.dataSeriesIndexes.length < 1))
                for (
                  var t,
                    i,
                    a = e.axisY.dataInfo,
                    n = e.axisX.dataInfo,
                    s = !1,
                    r = 0;
                  r < e.dataSeriesIndexes.length;
                  r++
                ) {
                  var o = this.data[e.dataSeriesIndexes[r]],
                    l = 0,
                    h = !1,
                    d = !1;
                  if (
                    "normal" === o.axisPlacement ||
                    "xySwapped" === o.axisPlacement
                  )
                    var c = this.sessionVariables.axisX.newViewportMinimum
                        ? this.sessionVariables.axisX.newViewportMinimum
                        : this._options.axisX &&
                          this._options.axisX.viewportMinimum
                        ? this._options.axisX.viewportMinimum
                        : this._options.axisX && this._options.axisX.minimum
                        ? this._options.axisX.minimum
                        : -1 / 0,
                      p = this.sessionVariables.axisX.newViewportMaximum
                        ? this.sessionVariables.axisX.newViewportMaximum
                        : this._options.axisX &&
                          this._options.axisX.viewportMaximum
                        ? this._options.axisX.viewportMaximum
                        : this._options.axisX && this._options.axisX.maximum
                        ? this._options.axisX.maximum
                        : 1 / 0;
                  for (
                    ((o.dataPoints[l].x && o.dataPoints[l].x.getTime) ||
                      "dateTime" === o.xValueType) &&
                      (s = !0),
                      l = 0;
                    l < o.dataPoints.length;
                    l++
                  ) {
                    if (
                      (void 0 === o.dataPoints[l].x && (o.dataPoints[l].x = l),
                      o.dataPoints[l].x.getTime
                        ? ((s = !0), (t = o.dataPoints[l].x.getTime()))
                        : (t = o.dataPoints[l].x),
                      (i = o.dataPoints[l].y),
                      t < n.min && (n.min = t),
                      t > n.max && (n.max = t),
                      i < a.min && (a.min = i),
                      i > a.max && (a.max = i),
                      l > 0)
                    ) {
                      var x = t - o.dataPoints[l - 1].x;
                      if (
                        (x < 0 && (x *= -1),
                        n.minDiff > x && 0 !== x && (n.minDiff = x),
                        null !== i && null !== o.dataPoints[l - 1].y)
                      ) {
                        var u = i - o.dataPoints[l - 1].y;
                        u < 0 && (u *= -1),
                          a.minDiff > u && 0 !== u && (a.minDiff = u);
                      }
                    }
                    if (!(t < c) || h)
                      if (!h && ((h = !0), l > 0)) l -= 2;
                      else {
                        if (t > p && !d) d = !0;
                        else if (t > p && d) continue;
                        o.dataPoints[l].label &&
                          (e.axisX.labels[t] = o.dataPoints[l].label),
                          t < n.viewPortMin && (n.viewPortMin = t),
                          t > n.viewPortMax && (n.viewPortMax = t),
                          null !== i &&
                            (i < a.viewPortMin && (a.viewPortMin = i),
                            i > a.viewPortMax && (a.viewPortMax = i));
                      }
                  }
                  this.plotInfo.axisXValueType = o.xValueType = s
                    ? "dateTime"
                    : "number";
                }
            }),
            (s.prototype._processStackedPlotUnit = function (e) {
              if (e.dataSeriesIndexes && !(e.dataSeriesIndexes.length < 1)) {
                for (
                  var t,
                    i,
                    a = e.axisY.dataInfo,
                    n = e.axisX.dataInfo,
                    s = !1,
                    r = [],
                    o = [],
                    l = 0;
                  l < e.dataSeriesIndexes.length;
                  l++
                ) {
                  var h = this.data[e.dataSeriesIndexes[l]],
                    d = 0,
                    c = !1,
                    p = !1;
                  if (
                    "normal" === h.axisPlacement ||
                    "xySwapped" === h.axisPlacement
                  )
                    var x = this.sessionVariables.axisX.newViewportMinimum
                        ? this.sessionVariables.axisX.newViewportMinimum
                        : this._options.axisX &&
                          this._options.axisX.viewportMinimum
                        ? this._options.axisX.viewportMinimum
                        : this._options.axisX && this._options.axisX.minimum
                        ? this._options.axisX.minimum
                        : -1 / 0,
                      u = this.sessionVariables.axisX.newViewportMaximum
                        ? this.sessionVariables.axisX.newViewportMaximum
                        : this._options.axisX &&
                          this._options.axisX.viewportMaximum
                        ? this._options.axisX.viewportMaximum
                        : this._options.axisX && this._options.axisX.maximum
                        ? this._options.axisX.maximum
                        : 1 / 0;
                  for (
                    ((h.dataPoints[d].x && h.dataPoints[d].x.getTime) ||
                      "dateTime" === h.xValueType) &&
                      (s = !0),
                      d = 0;
                    d < h.dataPoints.length;
                    d++
                  ) {
                    if (
                      (void 0 === h.dataPoints[d].x && (h.dataPoints[d].x = d),
                      h.dataPoints[d].x.getTime
                        ? ((s = !0), (t = h.dataPoints[d].x.getTime()))
                        : (t = h.dataPoints[d].x),
                      (i = h.dataPoints[d].y),
                      t < n.min && (n.min = t),
                      t > n.max && (n.max = t),
                      d > 0)
                    ) {
                      var m = t - h.dataPoints[d - 1].x;
                      if (
                        (m < 0 && (m *= -1),
                        n.minDiff > m && 0 !== m && (n.minDiff = m),
                        null !== i && null !== h.dataPoints[d - 1].y)
                      ) {
                        var v = i - h.dataPoints[d - 1].y;
                        v < 0 && (v *= -1),
                          a.minDiff > v && 0 !== v && (a.minDiff = v);
                      }
                    }
                    if (!(t < x) || c)
                      if (!c && ((c = !0), d > 0)) d -= 2;
                      else {
                        if (t > u && !p) p = !0;
                        else if (t > u && p) continue;
                        h.dataPoints[d].label &&
                          (e.axisX.labels[t] = h.dataPoints[d].label),
                          t < n.viewPortMin && (n.viewPortMin = t),
                          t > n.viewPortMax && (n.viewPortMax = t),
                          null !== i &&
                            ((e.yTotals[t] =
                              (e.yTotals[t] ? e.yTotals[t] : 0) + Math.abs(i)),
                            i >= 0
                              ? r[t]
                                ? (r[t] += i)
                                : (r[t] = i)
                              : o[t]
                              ? (o[t] += i)
                              : (o[t] = i));
                      }
                  }
                  this.plotInfo.axisXValueType = h.xValueType = s
                    ? "dateTime"
                    : "number";
                }
                for (d in r)
                  if (r.hasOwnProperty(d)) {
                    if (isNaN(d)) continue;
                    var g = r[d];
                    if (
                      (g < a.min && (a.min = g),
                      g > a.max && (a.max = g),
                      d < n.viewPortMin || d > n.viewPortMax)
                    )
                      continue;
                    g < a.viewPortMin && (a.viewPortMin = g),
                      g > a.viewPortMax && (a.viewPortMax = g);
                  }
                for (d in o)
                  if (o.hasOwnProperty(d)) {
                    if (isNaN(d)) continue;
                    var g = o[d];
                    if (
                      (g < a.min && (a.min = g),
                      g > a.max && (a.max = g),
                      d < n.viewPortMin || d > n.viewPortMax)
                    )
                      continue;
                    g < a.viewPortMin && (a.viewPortMin = g),
                      g > a.viewPortMax && (a.viewPortMax = g);
                  }
              }
            }),
            (s.prototype._processStacked100PlotUnit = function (e) {
              if (e.dataSeriesIndexes && !(e.dataSeriesIndexes.length < 1)) {
                for (
                  var t,
                    i,
                    a = e.axisY.dataInfo,
                    n = e.axisX.dataInfo,
                    s = !1,
                    r = !1,
                    o = !1,
                    l = [],
                    h = 0;
                  h < e.dataSeriesIndexes.length;
                  h++
                ) {
                  var d = this.data[e.dataSeriesIndexes[h]],
                    c = 0,
                    p = !1,
                    x = !1;
                  if (
                    "normal" === d.axisPlacement ||
                    "xySwapped" === d.axisPlacement
                  )
                    var u = this.sessionVariables.axisX.newViewportMinimum
                        ? this.sessionVariables.axisX.newViewportMinimum
                        : this._options.axisX &&
                          this._options.axisX.viewportMinimum
                        ? this._options.axisX.viewportMinimum
                        : this._options.axisX && this._options.axisX.minimum
                        ? this._options.axisX.minimum
                        : -1 / 0,
                      m = this.sessionVariables.axisX.newViewportMaximum
                        ? this.sessionVariables.axisX.newViewportMaximum
                        : this._options.axisX &&
                          this._options.axisX.viewportMaximum
                        ? this._options.axisX.viewportMaximum
                        : this._options.axisX && this._options.axisX.maximum
                        ? this._options.axisX.maximum
                        : 1 / 0;
                  for (
                    ((d.dataPoints[c].x && d.dataPoints[c].x.getTime) ||
                      "dateTime" === d.xValueType) &&
                      (s = !0),
                      c = 0;
                    c < d.dataPoints.length;
                    c++
                  ) {
                    if (
                      (void 0 === d.dataPoints[c].x && (d.dataPoints[c].x = c),
                      d.dataPoints[c].x.getTime
                        ? ((s = !0), (t = d.dataPoints[c].x.getTime()))
                        : (t = d.dataPoints[c].x),
                      (i = d.dataPoints[c].y),
                      t < n.min && (n.min = t),
                      t > n.max && (n.max = t),
                      c > 0)
                    ) {
                      var v = t - d.dataPoints[c - 1].x;
                      if (
                        (v < 0 && (v *= -1),
                        n.minDiff > v && 0 !== v && (n.minDiff = v),
                        null !== i && null !== d.dataPoints[c - 1].y)
                      ) {
                        var g = i - d.dataPoints[c - 1].y;
                        g < 0 && (g *= -1),
                          a.minDiff > g && 0 !== g && (a.minDiff = g);
                      }
                    }
                    if (!(t < u) || p)
                      if (!p && ((p = !0), c > 0)) c -= 2;
                      else {
                        if (t > m && !x) x = !0;
                        else if (t > m && x) continue;
                        d.dataPoints[c].label &&
                          (e.axisX.labels[t] = d.dataPoints[c].label),
                          t < n.viewPortMin && (n.viewPortMin = t),
                          t > n.viewPortMax && (n.viewPortMax = t),
                          null !== i &&
                            ((e.yTotals[t] =
                              (e.yTotals[t] ? e.yTotals[t] : 0) + Math.abs(i)),
                            i >= 0 ? (r = !0) : (o = !0),
                            l[t]
                              ? (l[t] += Math.abs(i))
                              : (l[t] = Math.abs(i)));
                      }
                  }
                  this.plotInfo.axisXValueType = d.xValueType = s
                    ? "dateTime"
                    : "number";
                }
                r && !o
                  ? ((a.max = 99), (a.min = 1))
                  : r && o
                  ? ((a.max = 99), (a.min = -99))
                  : !r && o && ((a.max = -1), (a.min = -99)),
                  (a.viewPortMin = a.min),
                  (a.viewPortMax = a.max),
                  (e.dataPointYSums = l);
              }
            }),
            (s.prototype._processMultiYPlotUnit = function (e) {
              if (e.dataSeriesIndexes && !(e.dataSeriesIndexes.length < 1))
                for (
                  var t,
                    i,
                    a,
                    n,
                    s = e.axisY.dataInfo,
                    r = e.axisX.dataInfo,
                    o = !1,
                    l = 0;
                  l < e.dataSeriesIndexes.length;
                  l++
                ) {
                  var h = this.data[e.dataSeriesIndexes[l]],
                    d = 0,
                    c = !1,
                    p = !1;
                  if (
                    "normal" === h.axisPlacement ||
                    "xySwapped" === h.axisPlacement
                  )
                    var x = this.sessionVariables.axisX.newViewportMinimum
                        ? this.sessionVariables.axisX.newViewportMinimum
                        : this._options.axisX &&
                          this._options.axisX.viewportMinimum
                        ? this._options.axisX.viewportMinimum
                        : this._options.axisX && this._options.axisX.minimum
                        ? this._options.axisX.minimum
                        : -1 / 0,
                      u = this.sessionVariables.axisX.newViewportMaximum
                        ? this.sessionVariables.axisX.newViewportMaximum
                        : this._options.axisX &&
                          this._options.axisX.viewportMaximum
                        ? this._options.axisX.viewportMaximum
                        : this._options.axisX && this._options.axisX.maximum
                        ? this._options.axisX.maximum
                        : 1 / 0;
                  for (
                    ((h.dataPoints[d].x && h.dataPoints[d].x.getTime) ||
                      "dateTime" === h.xValueType) &&
                      (o = !0),
                      d = 0;
                    d < h.dataPoints.length;
                    d++
                  ) {
                    if (
                      (void 0 === h.dataPoints[d].x && (h.dataPoints[d].x = d),
                      h.dataPoints[d].x.getTime
                        ? ((o = !0), (t = h.dataPoints[d].x.getTime()))
                        : (t = h.dataPoints[d].x),
                      (i = h.dataPoints[d].y),
                      i &&
                        i.length &&
                        ((a = Math.min.apply(null, i)),
                        (n = Math.max.apply(null, i))),
                      t < r.min && (r.min = t),
                      t > r.max && (r.max = t),
                      a < s.min && (s.min = a),
                      n > s.max && (s.max = n),
                      d > 0)
                    ) {
                      var m = t - h.dataPoints[d - 1].x;
                      if (
                        (m < 0 && (m *= -1),
                        r.minDiff > m && 0 !== m && (r.minDiff = m),
                        null !== i[0] && null !== h.dataPoints[d - 1].y[0])
                      ) {
                        var v = i[0] - h.dataPoints[d - 1].y[0];
                        v < 0 && (v *= -1),
                          s.minDiff > v && 0 !== v && (s.minDiff = v);
                      }
                    }
                    if (!(t < x) || c)
                      if (!c && ((c = !0), d > 0)) d -= 2;
                      else {
                        if (t > u && !p) p = !0;
                        else if (t > u && p) continue;
                        h.dataPoints[d].label &&
                          (e.axisX.labels[t] = h.dataPoints[d].label),
                          t < r.viewPortMin && (r.viewPortMin = t),
                          t > r.viewPortMax && (r.viewPortMax = t),
                          null !== i &&
                            (a < s.viewPortMin && (s.viewPortMin = a),
                            n > s.viewPortMax && (s.viewPortMax = n));
                      }
                  }
                  this.plotInfo.axisXValueType = h.xValueType = o
                    ? "dateTime"
                    : "number";
                }
            }),
            (s.prototype.getDataPointAtXY = function (e, t, i) {
              i = i || !1;
              for (
                var a = [], n = this._dataInRenderedOrder.length - 1;
                n >= 0;
                n--
              ) {
                var s = this._dataInRenderedOrder[n],
                  r = null;
                (r = s.getDataPointAtXY(e, t, i)), r && a.push(r);
              }
              for (var o = null, l = !1, h = 0; h < a.length; h++)
                if (
                  "line" === a[h].dataSeries.type ||
                  "stepLine" === a[h].dataSeries.type ||
                  "area" === a[h].dataSeries.type ||
                  "stepArea" === a[h].dataSeries.type
                ) {
                  var d =
                    (0, z.getProperty)(
                      "markerSize",
                      a[h].dataPoint,
                      a[h].dataSeries
                    ) || 8;
                  if (a[h].distance <= d / 2) {
                    l = !0;
                    break;
                  }
                }
              for (h = 0; h < a.length; h++)
                (l &&
                  "line" !== a[h].dataSeries.type &&
                  "stepLine" !== a[h].dataSeries.type &&
                  "area" !== a[h].dataSeries.type &&
                  "stepArea" !== a[h].dataSeries.type) ||
                  (o ? a[h].distance <= o.distance && (o = a[h]) : (o = a[h]));
              return o;
            }),
            (s.prototype.getObjectAtXY = function (e, t, i) {
              i = i || !1;
              var a = null,
                n = this.getDataPointAtXY(e, t, i);
              if (n) a = n.dataSeries.dataPointIds[n.dataPointIndex];
              else if (z.isCanvasSupported)
                a = (0, z.getObjectId)(e, t, this._eventManager.ghostCtx);
              else
                for (var s = 0; s < this.legend.items.length; s++) {
                  var r = this.legend.items[s];
                  e >= r.x1 &&
                    e <= r.x2 &&
                    t >= r.y1 &&
                    t <= r.y2 &&
                    (a = r.id);
                }
              return a;
            }),
            (s.prototype.getAutoFontSize = function (e, t, i) {
              (t = t || this.width), (i = i || this.height);
              var a = e / 400;
              return Math.round(Math.min(this.width, this.height) * a);
            }),
            (s.prototype.resetOverlayedCanvas = function () {
              this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
            }),
            (s.prototype.clearCanvas = function () {
              this.ctx.clearRect(0, 0, this.width, this.height),
                this.backgroundColor &&
                  ((this.ctx.fillStyle = this.backgroundColor),
                  this.ctx.fillRect(0, 0, this.width, this.height));
            }),
            (s.prototype.attachEvent = function (e) {
              this._events.push(e);
            }),
            (s.prototype._touchEventHandler = function (e) {
              if (e.changedTouches && this.interactivityEnabled) {
                var t = [],
                  i = e.changedTouches,
                  a = i ? i[0] : e,
                  n = null;
                switch (e.type) {
                  case "touchstart":
                  case "MSPointerDown":
                    (t = ["mousemove", "mousedown"]),
                      (this._lastTouchData = (0, z.getMouseCoordinates)(a)),
                      (this._lastTouchData.time = new Date());
                    break;
                  case "touchmove":
                  case "MSPointerMove":
                    t = ["mousemove"];
                    break;
                  case "touchend":
                  case "MSPointerUp":
                    t =
                      "touchstart" === this._lastTouchEventType ||
                      "MSPointerDown" === this._lastTouchEventType
                        ? ["mouseup", "click"]
                        : ["mouseup"];
                    break;
                  default:
                    return;
                }
                if (!(i && i.length > 1)) {
                  (n = (0, z.getMouseCoordinates)(a)), (n.time = new Date());
                  try {
                    var s = n.y - this._lastTouchData.y,
                      r =
                        (n.x,
                        this._lastTouchData.x,
                        n.time - this._lastTouchData.time);
                    if (
                      Math.abs(s) > 15 &&
                      (this._lastTouchData.scroll || r < 200)
                    ) {
                      this._lastTouchData.scroll = !0;
                      var o = window.parent || window;
                      o && o.scrollBy && o.scrollBy(0, -s);
                    }
                  } catch (e) {}
                  if (
                    ((this._lastTouchEventType = e.type),
                    this._lastTouchData.scroll && this.zoomEnabled)
                  )
                    return (
                      this.isDrag && this.resetOverlayedCanvas(),
                      void (this.isDrag = !1)
                    );
                  for (var l = 0; l < t.length; l++) {
                    var h = t[l],
                      d = document.createEvent("MouseEvent");
                    d.initMouseEvent(
                      h,
                      !0,
                      !0,
                      window,
                      1,
                      a.screenX,
                      a.screenY,
                      a.clientX,
                      a.clientY,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null
                    ),
                      a.target.dispatchEvent(d),
                      e.preventManipulation && e.preventManipulation(),
                      e.preventDefault && e.preventDefault();
                  }
                }
              }
            }),
            (s.prototype._dispatchRangeEvent = function (e, t) {
              var i = {};
              (i.chart = this._publicChartReference),
                (i.type = e),
                (i.trigger = t);
              var a = [];
              this.axisX && a.push("axisX"),
                this.axisY && a.push("axisY"),
                this.axisY2 && a.push("axisY2");
              for (var n = 0; n < a.length; n++)
                i[a[n]] = {
                  viewportMinimum:
                    this[a[n]].sessionVariables.newViewportMinimum,
                  viewportMaximum:
                    this[a[n]].sessionVariables.newViewportMaximum,
                };
              this.dispatchEvent(e, i, this._publicChartReference);
            }),
            (s.prototype._mouseEventHandler = function (e) {
              if (this.interactivityEnabled) {
                if (this._ignoreNextEvent)
                  return void (this._ignoreNextEvent = !1);
                e.preventManipulation && e.preventManipulation(),
                  e.preventDefault && e.preventDefault(),
                  void 0 === e.target &&
                    e.srcElement &&
                    (e.target = e.srcElement);
                var t,
                  i,
                  a = (0, z.getMouseCoordinates)(e),
                  n = e.type;
                if (!e) {
                  window.event;
                }
                if (
                  (e.which
                    ? (i = 3 == e.which)
                    : e.button && (i = 2 == e.button),
                  F.isDebugMode &&
                    window.console &&
                    (window.console.log(n + " --\x3e x: " + a.x + "; y:" + a.y),
                    i && window.console.log(e.which),
                    "mouseup" === n && window.console.log("mouseup")),
                  !i)
                ) {
                  if (s.capturedEventParam)
                    (t = s.capturedEventParam),
                      "mouseup" === n &&
                        ((s.capturedEventParam = null),
                        t.chart.overlaidCanvas.releaseCapture
                          ? t.chart.overlaidCanvas.releaseCapture()
                          : document.body.removeEventListener(
                              "mouseup",
                              t.chart._mouseEventHandler,
                              !1
                            )),
                      t.hasOwnProperty(n) && t[n].call(t.context, a.x, a.y);
                  else if (this._events) {
                    for (var r = 0; r < this._events.length; r++)
                      if (this._events[r].hasOwnProperty(n)) {
                        t = this._events[r];
                        var o = t.bounds;
                        if (
                          a.x >= o.x1 &&
                          a.x <= o.x2 &&
                          a.y >= o.y1 &&
                          a.y <= o.y2
                        ) {
                          t[n].call(t.context, a.x, a.y),
                            "mousedown" === n && !0 === t.capture
                              ? ((s.capturedEventParam = t),
                                this.overlaidCanvas.setCapture
                                  ? this.overlaidCanvas.setCapture()
                                  : document.body.addEventListener(
                                      "mouseup",
                                      this._mouseEventHandler,
                                      !1
                                    ))
                              : "mouseup" === n &&
                                (t.chart.overlaidCanvas.releaseCapture
                                  ? t.chart.overlaidCanvas.releaseCapture()
                                  : document.body.removeEventListener(
                                      "mouseup",
                                      this._mouseEventHandler,
                                      !1
                                    ));
                          break;
                        }
                        t = null;
                      }
                    t && t.cursor
                      ? (e.target.style.cursor = t.cursor)
                      : (e.target.style.cursor = this._defaultCursor);
                  }
                  if (this._toolTip && this._toolTip.enabled) {
                    var l = this.plotArea;
                    (a.x < l.x1 || a.x > l.x2 || a.y < l.y1 || a.y > l.y2) &&
                      this._toolTip.hide();
                  }
                  (this.isDrag && this.zoomEnabled) ||
                    !this._eventManager ||
                    this._eventManager.mouseEventHandler(e);
                }
              }
            }),
            (s.prototype._plotAreaMouseDown = function (e, t) {
              (this.isDrag = !0),
                this.plotInfo.axisPlacement,
                (this.dragStartPoint = { x: e, y: t });
            }),
            (s.prototype._plotAreaMouseUp = function (e, t) {
              if (
                ("normal" === this.plotInfo.axisPlacement ||
                  "xySwapped" === this.plotInfo.axisPlacement) &&
                this.isDrag
              ) {
                var i = t - this.dragStartPoint.y,
                  a = e - this.dragStartPoint.x,
                  n = this.zoomType.indexOf("x") >= 0,
                  s = this.zoomType.indexOf("y") >= 0,
                  r = !1;
                if (
                  (this.resetOverlayedCanvas(),
                  "xySwapped" === this.plotInfo.axisPlacement)
                ) {
                  var o = s;
                  (s = n), (n = o);
                }
                if (this.panEnabled || this.zoomEnabled) {
                  if (this.panEnabled)
                    for (var l = 0, h = 0; h < this._axes.length; h++) {
                      var d = this._axes[h];
                      d.viewportMinimum < d.minimum
                        ? ((l = d.minimum - d.viewportMinimum),
                          (d.sessionVariables.newViewportMinimum =
                            d.viewportMinimum + l),
                          (d.sessionVariables.newViewportMaximum =
                            d.viewportMaximum + l),
                          (r = !0))
                        : d.viewportMaximum > d.maximum &&
                          ((l = d.viewportMaximum - d.maximum),
                          (d.sessionVariables.newViewportMinimum =
                            d.viewportMinimum - l),
                          (d.sessionVariables.newViewportMaximum =
                            d.viewportMaximum - l),
                          (r = !0));
                    }
                  else if (
                    (!n || Math.abs(a) > 2) &&
                    (!s || Math.abs(i) > 2) &&
                    this.zoomEnabled
                  ) {
                    if (!this.dragStartPoint) return;
                    var c = {
                      x1: n ? this.dragStartPoint.x : this.plotArea.x1,
                      y1: s ? this.dragStartPoint.y : this.plotArea.y1,
                      x2: n ? e : this.plotArea.x2,
                      y2: s ? t : this.plotArea.y2,
                    };
                    Math.abs(c.x1 - c.x2) > 2 &&
                      Math.abs(c.y1 - c.y2) > 2 &&
                      this._zoomPanToSelectedRegion(c.x1, c.y1, c.x2, c.y2) &&
                      (r = !0);
                  }
                  r &&
                    ((this._ignoreNextEvent = !0),
                    this._dispatchRangeEvent("rangeChanging", "zoom"),
                    this.render(),
                    this._dispatchRangeEvent("rangeChanged", "zoom"),
                    r &&
                      this.zoomEnabled &&
                      "none" === this._zoomButton.style.display &&
                      ((0, z.show)(this._zoomButton, this._resetButton),
                      setButtonState(this, this._zoomButton, "pan"),
                      setButtonState(this, this._resetButton, "reset")));
                }
              }
              this.isDrag = !1;
            }),
            (s.prototype._plotAreaMouseMove = function (e, t) {
              if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
                var i = 0,
                  a = 0,
                  n = null,
                  s = null,
                  r = this.zoomType.indexOf("x") >= 0,
                  o = this.zoomType.indexOf("y") >= 0;
                if ("xySwapped" === this.plotInfo.axisPlacement) {
                  var l = o;
                  (o = r), (r = l);
                }
                if (
                  ((i = this.dragStartPoint.x - e),
                  (a = this.dragStartPoint.y - t),
                  Math.abs(i) > 2 &&
                  Math.abs(i) < 8 &&
                  (this.panEnabled || this.zoomEnabled)
                    ? this._toolTip.hide()
                    : this.panEnabled ||
                      this.zoomEnabled ||
                      this._toolTip.mouseMoveHandler(e, t),
                  (!r || Math.abs(i) > 2 || !o || Math.abs(a) > 2) &&
                    (this.panEnabled || this.zoomEnabled))
                )
                  if (this.panEnabled)
                    (s = {
                      x1: r ? this.plotArea.x1 + i : this.plotArea.x1,
                      y1: o ? this.plotArea.y1 + a : this.plotArea.y1,
                      x2: r ? this.plotArea.x2 + i : this.plotArea.x2,
                      y2: o ? this.plotArea.y2 + a : this.plotArea.y2,
                    }),
                      this._zoomPanToSelectedRegion(
                        s.x1,
                        s.y1,
                        s.x2,
                        s.y2,
                        !0
                      ) &&
                        (this._dispatchRangeEvent("rangeChanging", "pan"),
                        this.render(),
                        this._dispatchRangeEvent("rangeChanged", "pan"),
                        (this.dragStartPoint.x = e),
                        (this.dragStartPoint.y = t));
                  else if (this.zoomEnabled) {
                    this.resetOverlayedCanvas(),
                      (n = this.overlaidCanvasCtx.globalAlpha),
                      (this.overlaidCanvasCtx.globalAlpha = 0.7),
                      (this.overlaidCanvasCtx.fillStyle = "#A0ABB8");
                    var h = {
                      x1: r ? this.dragStartPoint.x : this.plotArea.x1,
                      y1: o ? this.dragStartPoint.y : this.plotArea.y1,
                      x2: r
                        ? e - this.dragStartPoint.x
                        : this.plotArea.x2 - this.plotArea.x1,
                      y2: o
                        ? t - this.dragStartPoint.y
                        : this.plotArea.y2 - this.plotArea.y1,
                    };
                    this.overlaidCanvasCtx.fillRect(h.x1, h.y1, h.x2, h.y2),
                      (this.overlaidCanvasCtx.globalAlpha = n);
                  }
              } else this._toolTip.mouseMoveHandler(e, t);
            }),
            (s.prototype._zoomPanToSelectedRegion = function (e, t, i, a, n) {
              n = n || !1;
              var s = this.zoomType.indexOf("x") >= 0,
                r = this.zoomType.indexOf("y") >= 0,
                o = !1,
                l = [],
                h = [];
              this.axisX && s && l.push(this.axisX),
                this.axisY && r && l.push(this.axisY),
                this.axisY2 && r && l.push(this.axisY2);
              for (var d = [], c = 0; c < l.length; c++) {
                var p = l[c],
                  x = p.convertPixelToValue({ x: e, y: t }),
                  u = p.convertPixelToValue({ x: i, y: a });
                if (x > u) {
                  var m = u;
                  (u = x), (x = m);
                }
                if (isFinite(p.dataInfo.minDiff))
                  if (
                    Math.abs(u - x) < 3 * Math.abs(p.dataInfo.minDiff) ||
                    x < p.minimum ||
                    u > p.maximum
                  ) {
                    if (!n) {
                      o = !1;
                      break;
                    }
                  } else h.push(p), d.push({ val1: x, val2: u }), (o = !0);
              }
              if (o)
                for (var c = 0; c < h.length; c++) {
                  var p = h[c],
                    v = d[c];
                  p.setViewPortRange(v.val1, v.val2);
                }
              return o;
            }),
            (s.prototype.preparePlotArea = function () {
              var e = this.plotArea,
                t = this.axisY ? this.axisY : this.axisY2;
              if (
                (!z.isCanvasSupported &&
                  (e.x1 > 0 || e.y1 > 0) &&
                  e.ctx.translate(e.x1, e.y1),
                this.axisX && t)
              )
                (e.x1 =
                  this.axisX.lineCoordinates.x1 < this.axisX.lineCoordinates.x2
                    ? this.axisX.lineCoordinates.x1
                    : t.lineCoordinates.x1),
                  (e.y1 =
                    this.axisX.lineCoordinates.y1 < t.lineCoordinates.y1
                      ? this.axisX.lineCoordinates.y1
                      : t.lineCoordinates.y1),
                  (e.x2 =
                    this.axisX.lineCoordinates.x2 > t.lineCoordinates.x2
                      ? this.axisX.lineCoordinates.x2
                      : t.lineCoordinates.x2),
                  (e.y2 =
                    this.axisX.lineCoordinates.y2 >
                    this.axisX.lineCoordinates.y1
                      ? this.axisX.lineCoordinates.y2
                      : t.lineCoordinates.y2),
                  (e.width = e.x2 - e.x1),
                  (e.height = e.y2 - e.y1);
              else {
                var i = this.layoutManager.getFreeSpace();
                (e.x1 = i.x1),
                  (e.x2 = i.x2),
                  (e.y1 = i.y1),
                  (e.y2 = i.y2),
                  (e.width = i.width),
                  (e.height = i.height);
              }
              z.isCanvasSupported ||
                ((e.canvas.width = e.width),
                (e.canvas.height = e.height),
                (e.canvas.style.left = e.x1 + "px"),
                (e.canvas.style.top = e.y1 + "px"),
                (e.x1 > 0 || e.y1 > 0) && e.ctx.translate(-e.x1, -e.y1)),
                (e.layoutManager = new g.default(e.x1, e.y1, e.x2, e.y2, 2));
            }),
            (s.prototype.getPixelCoordinatesOnPlotArea = function (e, t) {
              return {
                x: this.axisX.getPixelCoordinatesOnAxis(e).x,
                y: this.axisY.getPixelCoordinatesOnAxis(t).y,
              };
            }),
            (s.prototype.renderIndexLabels = function (e) {
              for (
                var t = e || this.plotArea.ctx,
                  i = this.plotArea,
                  a = 0,
                  n = 0,
                  s = 0,
                  r = 0,
                  o = 0,
                  l = 0,
                  h = 0,
                  d = 0,
                  c = 0,
                  p = 0;
                p < this._indexLabels.length;
                p++
              ) {
                var u,
                  m,
                  v = this._indexLabels[p],
                  g = v.chartType.toLowerCase(),
                  y = (0, z.getProperty)(
                    "indexLabelFontColor",
                    v.dataPoint,
                    v.dataSeries
                  ),
                  f = (0, z.getProperty)(
                    "indexLabelFontSize",
                    v.dataPoint,
                    v.dataSeries
                  ),
                  b = (0, z.getProperty)(
                    "indexLabelFontFamily",
                    v.dataPoint,
                    v.dataSeries
                  ),
                  M = (0, z.getProperty)(
                    "indexLabelFontStyle",
                    v.dataPoint,
                    v.dataSeries
                  ),
                  P = (0, z.getProperty)(
                    "indexLabelFontWeight",
                    v.dataPoint,
                    v.dataSeries
                  ),
                  S = (0, z.getProperty)(
                    "indexLabelBackgroundColor",
                    v.dataPoint,
                    v.dataSeries
                  ),
                  T = (0, z.getProperty)(
                    "indexLabelMaxWidth",
                    v.dataPoint,
                    v.dataSeries
                  ),
                  C = (0, z.getProperty)(
                    "indexLabelWrap",
                    v.dataPoint,
                    v.dataSeries
                  ),
                  k = { percent: null, total: null },
                  w = null;
                (v.dataSeries.type.indexOf("stacked") >= 0 ||
                  "pie" === v.dataSeries.type ||
                  "doughnut" === v.dataSeries.type) &&
                  (k = this.getPercentAndTotal(v.dataSeries, v.dataPoint)),
                  (v.dataSeries.indexLabelFormatter ||
                    v.dataPoint.indexLabelFormatter) &&
                    (w = {
                      chart: this._options,
                      dataSeries: v.dataSeries,
                      dataPoint: v.dataPoint,
                      index: v.indexKeyword,
                      total: k.total,
                      percent: k.percent,
                    });
                var _ = v.dataPoint.indexLabelFormatter
                  ? v.dataPoint.indexLabelFormatter(w)
                  : v.dataPoint.indexLabel
                  ? this.replaceKeywordsWithValue(
                      v.dataPoint.indexLabel,
                      v.dataPoint,
                      v.dataSeries,
                      null,
                      v.indexKeyword
                    )
                  : v.dataSeries.indexLabelFormatter
                  ? v.dataSeries.indexLabelFormatter(w)
                  : v.dataSeries.indexLabel
                  ? this.replaceKeywordsWithValue(
                      v.dataSeries.indexLabel,
                      v.dataPoint,
                      v.dataSeries,
                      null,
                      v.indexKeyword
                    )
                  : null;
                if (null !== _ && "" !== _) {
                  var A = (0, z.getProperty)(
                      "indexLabelPlacement",
                      v.dataPoint,
                      v.dataSeries
                    ),
                    L = (0, z.getProperty)(
                      "indexLabelOrientation",
                      v.dataPoint,
                      v.dataSeries
                    ),
                    B = v.direction,
                    F = v.dataSeries.axisX,
                    D = v.dataSeries.axisY,
                    X = new x.default(t, {
                      x: 0,
                      y: 0,
                      maxWidth: T || 0.5 * this.width,
                      maxHeight: C ? 5 * f : 1.5 * f,
                      angle: "horizontal" === L ? 0 : -90,
                      text: _,
                      padding: 0,
                      backgroundColor: S,
                      horizontalAlign: "left",
                      fontSize: f,
                      fontFamily: b,
                      fontWeight: P,
                      fontColor: y,
                      fontStyle: M,
                      textBaseline: "top",
                    });
                  X.measureText();
                  if (
                    g.indexOf("line") >= 0 ||
                    g.indexOf("area") >= 0 ||
                    g.indexOf("bubble") >= 0 ||
                    g.indexOf("scatter") >= 0
                  ) {
                    if (
                      v.dataPoint.x < F.viewportMinimum ||
                      v.dataPoint.x > F.viewportMaximum ||
                      v.dataPoint.y < D.viewportMinimum ||
                      v.dataPoint.y > D.viewportMaximum
                    )
                      continue;
                  } else if (
                    v.dataPoint.x < F.viewportMinimum ||
                    v.dataPoint.x > F.viewportMaximum
                  )
                    continue;
                  if (
                    ((h = 2),
                    (l = 2),
                    "horizontal" === L
                      ? ((d = X.width), (c = X.height))
                      : ((c = X.width), (d = X.height)),
                    "normal" === this.plotInfo.axisPlacement)
                  )
                    g.indexOf("line") >= 0 || g.indexOf("area") >= 0
                      ? ((A = "auto"), (h = 4))
                      : g.indexOf("stacked") >= 0
                      ? "auto" === A && (A = "inside")
                      : ("bubble" !== g && "scatter" !== g) || (A = "inside"),
                      (u = v.point.x - d / 2),
                      "inside" !== A
                        ? ((n = i.y1),
                          (s = i.y2),
                          B > 0
                            ? (m = v.point.y - c - h) < n &&
                              (m =
                                "auto" === A
                                  ? Math.max(v.point.y, n) + h
                                  : n + h)
                            : (m = v.point.y + h) > s - c - h &&
                              (m =
                                "auto" === A
                                  ? Math.min(v.point.y, s) - c - h
                                  : s - c - h))
                        : ((n = Math.max(v.bounds.y1, i.y1)),
                          (s = Math.min(v.bounds.y2, i.y2)),
                          (a =
                            g.indexOf("range") >= 0
                              ? B > 0
                                ? Math.max(v.bounds.y1, i.y1) + c / 2 + h
                                : Math.min(v.bounds.y2, i.y2) - c / 2 - h
                              : (Math.max(v.bounds.y1, i.y1) +
                                  Math.min(v.bounds.y2, i.y2)) /
                                2),
                          B > 0
                            ? (m = Math.max(v.point.y, a) - c / 2) < n &&
                              ("bubble" === g || "scatter" === g) &&
                              (m = Math.max(v.point.y - c - h, i.y1 + h))
                            : (m = Math.min(v.point.y, a) - c / 2) >
                                s - c - h &&
                              ("bubble" === g || "scatter" === g) &&
                              (m = Math.min(v.point.y + h, i.y2 - c - h)),
                          (m = Math.min(m, s - c)));
                  else if (
                    (g.indexOf("line") >= 0 ||
                    g.indexOf("area") >= 0 ||
                    g.indexOf("scatter") >= 0
                      ? ((A = "auto"), (l = 4))
                      : g.indexOf("stacked") >= 0
                      ? "auto" === A && (A = "inside")
                      : "bubble" === g && (A = "inside"),
                    (m = v.point.y - c / 2),
                    "inside" !== A)
                  )
                    (r = i.x1),
                      (o = i.x2),
                      B < 0
                        ? (u = v.point.x - d - l) < r &&
                          (u =
                            "auto" === A ? Math.max(v.point.x, r) + l : r + l)
                        : (u = v.point.x + l) > o - d - l &&
                          (u =
                            "auto" === A
                              ? Math.min(v.point.x, o) - d - l
                              : o - d - l);
                  else {
                    if (
                      ((r = Math.max(v.bounds.x1, i.x1)),
                      (o = Math.min(v.bounds.x2, i.x2)),
                      g.indexOf("range") >= 0)
                    )
                      a =
                        B < 0
                          ? Math.max(v.bounds.x1, i.x1) + d / 2 + l
                          : Math.min(v.bounds.x2, i.x2) - d / 2 - l;
                    else
                      var a =
                        (Math.max(v.bounds.x1, i.x1) +
                          Math.min(v.bounds.x2, i.x2)) /
                        2;
                    (u =
                      B < 0
                        ? Math.max(v.point.x, a) - d / 2
                        : Math.min(v.point.x, a) - d / 2),
                      (u = Math.max(u, r));
                  }
                  "vertical" === L && (m += c),
                    (X.x = u),
                    (X.y = m),
                    X.render(!0);
                }
              }
              return {
                source: t,
                dest: this.plotArea.ctx,
                animationCallback: I.default.fadeInAnimation,
                easingFunction: I.default.easing.easeInQuad,
                animationBase: 0,
                startTimePercent: 0.7,
              };
            }),
            (s.prototype.renderLine = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var i = this._eventManager.ghostCtx;
                t.save();
                var a = this.plotArea;
                t.beginPath(), t.rect(a.x1, a.y1, a.width, a.height), t.clip();
                for (var n = [], s = 0; s < e.dataSeriesIndexes.length; s++) {
                  var r = e.dataSeriesIndexes[s],
                    o = this.data[r];
                  t.lineWidth = o.lineThickness;
                  var l = o.dataPoints;
                  t.setLineDash &&
                    t.setLineDash(
                      (0, z.getLineDashArray)(o.lineDashType, o.lineThickness)
                    );
                  var h = o.id;
                  this._eventManager.objectMap[h] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: r,
                  };
                  var d = (0, z.intToHexColorString)(h);
                  (i.strokeStyle = d),
                    (i.lineWidth =
                      o.lineThickness > 0 ? Math.max(o.lineThickness, 4) : 0);
                  var c = o._colorSet,
                    p = c[0];
                  t.strokeStyle = p;
                  var x,
                    u,
                    v,
                    g = !0,
                    y = 0;
                  if ((t.beginPath(), l.length > 0)) {
                    var f = !1;
                    for (y = 0; y < l.length; y++)
                      if (
                        !(
                          (v = l[y].x.getTime ? l[y].x.getTime() : l[y].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          v > e.axisX.dataInfo.viewPortMax
                        )
                      )
                        if ("number" == typeof l[y].y) {
                          (x =
                            (e.axisX.conversionParameters.reference +
                              e.axisX.conversionParameters.pixelPerUnit *
                                (v - e.axisX.conversionParameters.minimum) +
                              0.5) <<
                            0),
                            (u =
                              (e.axisY.conversionParameters.reference +
                                e.axisY.conversionParameters.pixelPerUnit *
                                  (l[y].y -
                                    e.axisY.conversionParameters.minimum) +
                                0.5) <<
                              0);
                          var b = o.dataPointIds[y];
                          if (
                            ((this._eventManager.objectMap[b] = {
                              id: b,
                              objectType: "dataPoint",
                              dataSeriesIndex: r,
                              dataPointIndex: y,
                              x1: x,
                              y1: u,
                            }),
                            g || f
                              ? (t.beginPath(),
                                t.moveTo(x, u),
                                z.isCanvasSupported &&
                                  (i.beginPath(), i.moveTo(x, u)),
                                (g = !1),
                                (f = !1))
                              : (t.lineTo(x, u),
                                z.isCanvasSupported && i.lineTo(x, u),
                                y % 500 == 0 &&
                                  (t.stroke(),
                                  t.beginPath(),
                                  t.moveTo(x, u),
                                  z.isCanvasSupported &&
                                    (i.stroke(),
                                    i.beginPath(),
                                    i.moveTo(x, u)))),
                            l[y].markerSize > 0 || o.markerSize > 0)
                          ) {
                            var M = o.getMarkerProperties(y, x, u, t);
                            n.push(M);
                            var P = (0, z.intToHexColorString)(b);
                            z.isCanvasSupported &&
                              n.push({
                                x: x,
                                y: u,
                                ctx: i,
                                type: M.type,
                                size: M.size,
                                color: P,
                                borderColor: P,
                                borderThickness: M.borderThickness,
                              });
                          }
                          (l[y].indexLabel ||
                            o.indexLabel ||
                            l[y].indexLabelFormatter ||
                            o.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: "line",
                              dataPoint: l[y],
                              dataSeries: o,
                              point: { x: x, y: u },
                              direction: l[y].y >= 0 ? 1 : -1,
                              color: p,
                            });
                        } else
                          y > 0 &&
                            (t.stroke(), z.isCanvasSupported && i.stroke()),
                            (f = !0);
                    t.stroke(), z.isCanvasSupported && i.stroke();
                  }
                }
                return (
                  m.default.drawMarkers(n),
                  t.restore(),
                  t.beginPath(),
                  z.isCanvasSupported && i.beginPath(),
                  {
                    source: t,
                    dest: this.plotArea.ctx,
                    animationCallback: I.default.xClipAnimation,
                    easingFunction: I.default.easing.linear,
                    animationBase: 0,
                  }
                );
              }
            }),
            (s.prototype.renderStepLine = function (e) {
              var t = e.targetCanvasCtx || this.plotArea.ctx;
              if (!(e.dataSeriesIndexes.length <= 0)) {
                var i = this._eventManager.ghostCtx;
                t.save();
                var a = this.plotArea;
                t.beginPath(), t.rect(a.x1, a.y1, a.width, a.height), t.clip();
                for (var n = [], s = 0; s < e.dataSeriesIndexes.length; s++) {
                  var r = e.dataSeriesIndexes[s],
                    o = this.data[r];
                  t.lineWidth = o.lineThickness;
                  var l = o.dataPoints;
                  t.setLineDash &&
                    t.setLineDash(
                      (0, z.getLineDashArray)(o.lineDashType, o.lineThickness)
                    );
                  var h = o.id;
                  this._eventManager.objectMap[h] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: r,
                  };
                  var d = (0, z.intToHexColorString)(h);
                  (i.strokeStyle = d),
                    (i.lineWidth =
                      o.lineThickness > 0 ? Math.max(o.lineThickness, 4) : 0);
                  var c = o._colorSet,
                    p = c[0];
                  t.strokeStyle = p;
                  var x,
                    u,
                    v,
                    g = !0,
                    y = 0;
                  if ((t.beginPath(), l.length > 0)) {
                    var f = !1;
                    for (y = 0; y < l.length; y++)
                      if (
                        !(
                          (v = l[y].getTime ? l[y].x.getTime() : l[y].x) <
                            e.axisX.dataInfo.viewPortMin ||
                          v > e.axisX.dataInfo.viewPortMax
                        )
                      )
                        if ("number" == typeof l[y].y) {
                          var b = u;
                          (x =
                            (e.axisX.conversionParameters.reference +
                              e.axisX.conversionParameters.pixelPerUnit *
                                (v - e.axisX.conversionParameters.minimum) +
                              0.5) <<
                            0),
                            (u =
                              (e.axisY.conversionParameters.reference +
                                e.axisY.conversionParameters.pixelPerUnit *
                                  (l[y].y -
                                    e.axisY.conversionParameters.minimum) +
                                0.5) <<
                              0);
                          var M = o.dataPointIds[y];
                          if (
                            ((this._eventManager.objectMap[M] = {
                              id: M,
                              objectType: "dataPoint",
                              dataSeriesIndex: r,
                              dataPointIndex: y,
                              x1: x,
                              y1: u,
                            }),
                            g || f
                              ? (t.beginPath(),
                                t.moveTo(x, u),
                                z.isCanvasSupported &&
                                  (i.beginPath(), i.moveTo(x, u)),
                                (g = !1),
                                (f = !1))
                              : (t.lineTo(x, b),
                                z.isCanvasSupported && i.lineTo(x, b),
                                t.lineTo(x, u),
                                z.isCanvasSupported && i.lineTo(x, u),
                                y % 500 == 0 &&
                                  (t.stroke(),
                                  t.beginPath(),
                                  t.moveTo(x, u),
                                  z.isCanvasSupported &&
                                    (i.stroke(),
                                    i.beginPath(),
                                    i.moveTo(x, u)))),
                            l[y].markerSize > 0 || o.markerSize > 0)
                          ) {
                            var P = o.getMarkerProperties(y, x, u, t);
                            n.push(P);
                            var S = (0, z.intToHexColorString)(M);
                            z.isCanvasSupported &&
                              n.push({
                                x: x,
                                y: u,
                                ctx: i,
                                type: P.type,
                                size: P.size,
                                color: S,
                                borderColor: S,
                                borderThickness: P.borderThickness,
                              });
                          }
                          (l[y].indexLabel ||
                            o.indexLabel ||
                            l[y].indexLabelFormatter ||
                            o.indexLabelFormatter) &&
                            this._indexLabels.push({
                              chartType: "stepLine",
                              dataPoint: l[y],
                              dataSeries: o,
                              point: { x: x, y: u },
                              direction: l[y].y >= 0 ? 1 : -1,
                              color: p,
                            });
                        } else
                          y > 0 &&
                            (t.stroke(), z.isCanvasSupported && i.stroke()),
                            (f = !0);
                    t.stroke(), z.isCanvasSupported && i.stroke();
                  }
                }
                return (
                  m.default.drawMarkers(n),
                  t.restore(),
                  t.beginPath(),
                  z.isCanvasSupported && i.beginPath(),
                  {
                    source: t,
                    dest: this.plotArea.ctx,
                    animationCallback: I.default.xClipAnimation,
                    easingFunction: I.default.easing.linear,
                    animationBase: 0,
                  }
                );
              }
            }),
            (s.prototype.animationRequestId = null),
            (s.prototype.requestAnimFrame = (function () {
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (e) {
                  window.setTimeout(e, 1e3 / 60);
                }
              );
            })()),
            (s.prototype.cancelRequestAnimFrame = (function () {
              return (
                window.cancelAnimationFrame ||
                window.webkitCancelRequestAnimationFrame ||
                window.mozCancelRequestAnimationFrame ||
                window.oCancelRequestAnimationFrame ||
                window.msCancelRequestAnimationFrame ||
                clearTimeout
              );
            })()),
            (s.prototype.getPercentAndTotal = function (e, t) {
              var i = null,
                a = null,
                n = null;
              if (e.type.indexOf("stacked") >= 0)
                (a = 0),
                  (i = t.x.getTime ? t.x.getTime() : t.x) in
                    e.plotUnit.yTotals &&
                    ((a = e.plotUnit.yTotals[i]),
                    (n = isNaN(t.y) ? 0 : 0 === a ? 0 : (t.y / a) * 100));
              else if ("pie" === e.type || "doughnut" === e.type) {
                a = 0;
                for (var s = 0; s < e.dataPoints.length; s++)
                  isNaN(e.dataPoints[s].y) || (a += e.dataPoints[s].y);
                n = isNaN(t.y) ? 0 : (t.y / a) * 100;
              }
              return { percent: n, total: a };
            }),
            (s.prototype.replaceKeywordsWithValue = function (e, t, i, a, n) {
              var s = /\{.*?\}|"[^"]*"|'[^']*'/g,
                r = this;
              if (
                ((n = void 0 === n ? 0 : n),
                (i.type.indexOf("stacked") >= 0 ||
                  "pie" === i.type ||
                  "doughnut" === i.type) &&
                  (e.indexOf("#percent") >= 0 || e.indexOf("#total") >= 0))
              ) {
                var o = "#percent",
                  l = "#total",
                  h = this.getPercentAndTotal(i, t);
                (l = isNaN(h.total) ? l : h.total),
                  (o = isNaN(h.percent) ? o : h.percent);
                do {
                  var d = "";
                  if (i.percentFormatString) d = i.percentFormatString;
                  else {
                    d = "#,##0.";
                    var c = Math.max(
                      Math.ceil(Math.log(1 / Math.abs(o)) / Math.LN10),
                      2
                    );
                    (!isNaN(c) && isFinite(c)) || (c = 2);
                    for (var p = 0; p < c; p++) d += "#";
                  }
                  (e = e.replace(
                    "#percent",
                    (0, z.numberFormat)(o, d, r._cultureInfo)
                  )),
                    (e = e.replace(
                      "#total",
                      (0, z.numberFormat)(
                        l,
                        i.yValueFormatString
                          ? i.yValueFormatString
                          : "#,##0.########"
                      )
                    ));
                } while (
                  e.indexOf("#percent") >= 0 ||
                  e.indexOf("#total") >= 0
                );
              }
              var x = function (e) {
                if (
                  ('"' === e[0] && '"' === e[e.length - 1]) ||
                  ("'" === e[0] && "'" === e[e.length - 1])
                )
                  return e.slice(1, e.length - 1);
                var s = (0, z.trimString)(e.slice(1, e.length - 1));
                s = s.replace("#index", n);
                var o = null;
                try {
                  var l = s.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                  l &&
                    l.length > 0 &&
                    ((o = (0, z.trimString)(l[2])),
                    (s = (0, z.trimString)(l[1])));
                } catch (e) {}
                var h = null;
                if ("color" === s)
                  return t.color
                    ? t.color
                    : i.color
                    ? i.color
                    : i._colorSet[a % i._colorSet.length];
                if (t.hasOwnProperty(s)) h = t;
                else {
                  if (!i.hasOwnProperty(s)) return "";
                  h = i;
                }
                var d = h[s];
                return (
                  null !== o && (d = d[o]),
                  "x" === s
                    ? r.axisX && "dateTime" === r.plotInfo.axisXValueType
                      ? dateFormat(
                          d,
                          t.xValueFormatString
                            ? t.xValueFormatString
                            : i.xValueFormatString
                            ? i.xValueFormatString
                            : r.axisX && r.axisX.valueFormatString
                            ? r.axisX.valueFormatString
                            : "DD MMM YY",
                          r._cultureInfo
                        )
                      : (0, z.numberFormat)(
                          d,
                          t.xValueFormatString
                            ? t.xValueFormatString
                            : i.xValueFormatString
                            ? i.xValueFormatString
                            : "#,##0.########",
                          r._cultureInfo
                        )
                    : "y" === s
                    ? (0, z.numberFormat)(
                        d,
                        t.yValueFormatString
                          ? t.yValueFormatString
                          : i.yValueFormatString
                          ? i.yValueFormatString
                          : "#,##0.########",
                        r._cultureInfo
                      )
                    : "z" === s
                    ? (0, z.numberFormat)(
                        d,
                        t.zValueFormatString
                          ? t.zValueFormatString
                          : i.zValueFormatString
                          ? i.zValueFormatString
                          : "#,##0.########",
                        r._cultureInfo
                      )
                    : d
                );
              };
              return e.replace(s, x);
            }),
            (s.prototype.renderSpline = D.SplineChart),
            (s.prototype.renderColumn = D.ColumnChart),
            (s.prototype.renderStackedColumn = D.StackedColumnChart),
            (s.prototype.renderStackedColumn100 = D.StackedColumn100Chart),
            (s.prototype.renderBar = D.BarChart),
            (s.prototype.renderStackedBar = D.StackedBarChart),
            (s.prototype.renderStackedBar100 = D.StackedBar100Chart),
            (s.prototype.renderArea = D.AreaChart),
            (s.prototype.renderSplineArea = D.SplineAreaChart),
            (s.prototype.renderStepArea = D.StepAreaChart),
            (s.prototype.renderStackedArea = D.StackedAreaChart),
            (s.prototype.renderStackedArea100 = D.StackedArea100Chart),
            (s.prototype.renderBubble = D.BubbleChart),
            (s.prototype.renderScatter = D.ScatterChart),
            (s.prototype.renderCandlestick = D.CandlestickChart),
            (s.prototype.renderRangeColumn = D.RangeColumnChart),
            (s.prototype.renderRangeBar = D.RangeBarChart),
            (s.prototype.renderRangeArea = D.RangeAreaChart),
            (s.prototype.renderRangeSplineArea = D.RangeSplineAreaChart),
            (s.prototype.renderPie = D.PieChart),
            (i.default = s);
        },
        {
          "../charts/index": 6,
          "../constants/options": 23,
          "../constants/themes": 24,
          "../core/axis": 26,
          "../core/culture_info": 29,
          "../core/legend": 33,
          "../core/title": 35,
          "../helpers/animator": 37,
          "../helpers/render": 38,
          "../helpers/utils": 39,
          "./animator": 25,
          "./canvasjs": 27,
          "./data_series": 30,
          "./event_manager": 31,
          "./layout_manager": 32,
          "./text_block": 34,
          "./tooltip": 36,
        },
      ],
      29: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            var t;
            e && o.cultures[e] && (t = o.cultures[e]),
              a.base.constructor.call(this, "CultureInfo", t);
          }
          Object.defineProperty(i, "__esModule", { value: !0 });
          var n = e("./canvasjs"),
            s = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(n),
            r = e("../helpers/utils"),
            o = e("../constants/culture");
          (0, r.extend)(a, s.default), (i.default = a);
        },
        {
          "../constants/culture": 22,
          "../helpers/utils": 39,
          "./canvasjs": 27,
        },
      ],
      30: [
        function (e, t, i) {
          "use strict";
          function a(e, t, i, n, s) {
            a.base.constructor.call(this, "DataSeries", t, i),
              (this.chart = e),
              (this.canvas = e.canvas),
              (this._ctx = e.canvas.ctx),
              (this.index = n),
              (this.noDataPointsInPlotArea = 0),
              (this.id = s),
              (this.chart._eventManager.objectMap[s] = {
                id: s,
                objectType: "dataSeries",
                dataSeriesIndex: n,
              }),
              (this.dataPointIds = []),
              (this.plotUnit = []),
              (this.axisX = null),
              (this.axisY = null),
              null === this.fillOpacity &&
                (this.type.match(/area/i)
                  ? (this.fillOpacity = 0.7)
                  : (this.fillOpacity = 1)),
              (this.axisPlacement = this.getDefaultAxisPlacement()),
              void 0 === this._options.indexLabelFontSize &&
                (this.indexLabelFontSize = this.chart.getAutoFontSize(
                  this.indexLabelFontSize
                ));
          }
          Object.defineProperty(i, "__esModule", { value: !0 });
          var n = e("./canvasjs"),
            s = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(n),
            r = e("../helpers/utils");
          (0, r.extend)(a, s.default),
            (a.prototype.getDefaultAxisPlacement = function () {
              var e = this.type;
              return "column" === e ||
                "line" === e ||
                "stepLine" === e ||
                "spline" === e ||
                "area" === e ||
                "stepArea" === e ||
                "splineArea" === e ||
                "stackedColumn" === e ||
                "stackedLine" === e ||
                "bubble" === e ||
                "scatter" === e ||
                "stackedArea" === e ||
                "stackedColumn100" === e ||
                "stackedLine100" === e ||
                "stackedArea100" === e ||
                "candlestick" === e ||
                "ohlc" === e ||
                "rangeColumn" === e ||
                "rangeArea" === e ||
                "rangeSplineArea" === e
                ? "normal"
                : "bar" === e ||
                  "stackedBar" === e ||
                  "stackedBar100" === e ||
                  "rangeBar" === e
                ? "xySwapped"
                : "pie" === e || "doughnut" === e || "funnel" === e
                ? "none"
                : (window.console.log("Unknown Chart Type: " + e), null);
            }),
            (a.getDefaultLegendMarker = function (e) {
              return "column" === e ||
                "stackedColumn" === e ||
                "stackedLine" === e ||
                "bar" === e ||
                "stackedBar" === e ||
                "stackedBar100" === e ||
                "bubble" === e ||
                "scatter" === e ||
                "stackedColumn100" === e ||
                "stackedLine100" === e ||
                "stepArea" === e ||
                "candlestick" === e ||
                "ohlc" === e ||
                "rangeColumn" === e ||
                "rangeBar" === e ||
                "rangeArea" === e ||
                "rangeSplineArea" === e
                ? "square"
                : "line" === e ||
                  "stepLine" === e ||
                  "spline" === e ||
                  "pie" === e ||
                  "doughnut" === e ||
                  "funnel" === e
                ? "circle"
                : "area" === e ||
                  "splineArea" === e ||
                  "stackedArea" === e ||
                  "stackedArea100" === e
                ? "triangle"
                : (window.console.log("Unknown Chart Type: " + e), null);
            }),
            (a.prototype.getDataPointAtX = function (e, t) {
              if (!this.dataPoints || 0 === this.dataPoints.length) return null;
              var i = { dataPoint: null, distance: 1 / 0, index: NaN },
                a = null,
                n = 0,
                s = 0,
                r = 1,
                o = 1 / 0,
                l = 0,
                h = 0,
                d = 0;
              if ("none" !== this.chart.plotInfo.axisPlacement) {
                var c =
                  this.dataPoints[this.dataPoints.length - 1].x -
                  this.dataPoints[0].x;
                d =
                  c > 0
                    ? Math.min(
                        Math.max(
                          (((this.dataPoints.length - 1) / c) *
                            (e - this.dataPoints[0].x)) >>
                            0,
                          0
                        ),
                        this.dataPoints.length
                      )
                    : 0;
              }
              for (;;) {
                if (
                  (s = r > 0 ? d + n : d - n) >= 0 &&
                  s < this.dataPoints.length
                ) {
                  a = this.dataPoints[s];
                  var p = Math.abs(a.x - e);
                  p < i.distance &&
                    ((i.dataPoint = a), (i.distance = p), (i.index = s));
                  var x = Math.abs(a.x - e);
                  if (
                    (x <= o ? (o = x) : r > 0 ? l++ : h++, l > 1e3 && h > 1e3)
                  )
                    break;
                } else if (d - n < 0 && d + n >= this.dataPoints.length) break;
                -1 === r ? (n++, (r = 1)) : (r = -1);
              }
              return t || i.dataPoint.x !== e
                ? t && null !== i.dataPoint
                  ? i
                  : null
                : i;
            }),
            (a.prototype.getDataPointAtXY = function (e, t, i) {
              if (!this.dataPoints || 0 === this.dataPoints.length) return null;
              i = i || !1;
              var a = [],
                n = 0,
                s = 0,
                o = 1,
                l = !1,
                h = 1 / 0,
                d = 0,
                c = 0,
                p = 0;
              if ("none" !== this.chart.plotInfo.axisPlacement) {
                var x = this.chart.axisX.getXValueAt({ x: e, y: t }),
                  u =
                    this.dataPoints[this.dataPoints.length - 1].x -
                    this.dataPoints[0].x;
                p =
                  u > 0
                    ? Math.min(
                        Math.max(
                          (((this.dataPoints.length - 1) / u) *
                            (x - this.dataPoints[0].x)) >>
                            0,
                          0
                        ),
                        this.dataPoints.length
                      )
                    : 0;
              }
              for (;;) {
                if (
                  (s = o > 0 ? p + n : p - n) >= 0 &&
                  s < this.dataPoints.length
                ) {
                  var m = this.dataPointIds[s],
                    v = this.chart._eventManager.objectMap[m],
                    g = this.dataPoints[s],
                    y = null;
                  if (v) {
                    switch (this.type) {
                      case "column":
                      case "stackedColumn":
                      case "stackedColumn100":
                      case "bar":
                      case "stackedBar":
                      case "stackedBar100":
                      case "rangeColumn":
                      case "rangeBar":
                        e >= v.x1 &&
                          e <= v.x2 &&
                          t >= v.y1 &&
                          t <= v.y2 &&
                          (a.push({
                            dataPoint: g,
                            dataPointIndex: s,
                            dataSeries: this,
                            distance: Math.min(
                              Math.abs(v.x1 - e),
                              Math.abs(v.x2 - e),
                              Math.abs(v.y1 - t),
                              Math.abs(v.y2 - t)
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
                        var f = (0, r.getProperty)("markerSize", g, this) || 4,
                          b = i ? 20 : f;
                        (y = Math.sqrt(
                          Math.pow(v.x1 - e, 2) + Math.pow(v.y1 - t, 2)
                        )),
                          y <= b &&
                            a.push({
                              dataPoint: g,
                              dataPointIndex: s,
                              dataSeries: this,
                              distance: y,
                            });
                        var M = Math.abs(v.x1 - e);
                        M <= h ? (h = M) : o > 0 ? d++ : c++,
                          y <= f / 2 && (l = !0);
                        break;
                      case "rangeArea":
                      case "rangeSplineArea":
                        var f = (0, r.getProperty)("markerSize", g, this) || 4,
                          b = i ? 20 : f;
                        (y = Math.min(
                          Math.sqrt(
                            Math.pow(v.x1 - e, 2) + Math.pow(v.y1 - t, 2)
                          ),
                          Math.sqrt(
                            Math.pow(v.x1 - e, 2) + Math.pow(v.y2 - t, 2)
                          )
                        )),
                          y <= b &&
                            a.push({
                              dataPoint: g,
                              dataPointIndex: s,
                              dataSeries: this,
                              distance: y,
                            });
                        var M = Math.abs(v.x1 - e);
                        M <= h ? (h = M) : o > 0 ? d++ : c++,
                          y <= f / 2 && (l = !0);
                        break;
                      case "bubble":
                        var f = v.size;
                        (y = Math.sqrt(
                          Math.pow(v.x1 - e, 2) + Math.pow(v.y1 - t, 2)
                        )),
                          y <= f / 2 &&
                            (a.push({
                              dataPoint: g,
                              dataPointIndex: s,
                              dataSeries: this,
                              distance: y,
                            }),
                            (l = !0));
                        break;
                      case "pie":
                      case "doughnut":
                        var P = v.center,
                          S =
                            "doughnut" === this.type
                              ? v.percentInnerRadius * v.radius
                              : 0;
                        if (
                          (y = Math.sqrt(
                            Math.pow(P.x - e, 2) + Math.pow(P.y - t, 2)
                          )) < v.radius &&
                          y > S
                        ) {
                          var T = t - P.y,
                            C = e - P.x,
                            k = Math.atan2(T, C);
                          k < 0 && (k += 2 * Math.PI),
                            (k = Number(
                              (
                                ((((k / Math.PI) * 180) % 360) + 360) %
                                360
                              ).toFixed(12)
                            ));
                          var w = Number(
                              (
                                ((((v.startAngle / Math.PI) * 180) % 360) +
                                  360) %
                                360
                              ).toFixed(12)
                            ),
                            _ = Number(
                              (
                                ((((v.endAngle / Math.PI) * 180) % 360) + 360) %
                                360
                              ).toFixed(12)
                            );
                          0 === _ && v.endAngle > 1 && (_ = 360),
                            w >= _ &&
                              0 !== g.y &&
                              ((_ += 360), k < w && (k += 360)),
                            k > w &&
                              k < _ &&
                              (a.push({
                                dataPoint: g,
                                dataPointIndex: s,
                                dataSeries: this,
                                distance: 0,
                              }),
                              (l = !0));
                        }
                        break;
                      case "candlestick":
                        ((e >= v.x1 - v.borderThickness / 2 &&
                          e <= v.x2 + v.borderThickness / 2 &&
                          t >= v.y2 - v.borderThickness / 2 &&
                          t <= v.y3 + v.borderThickness / 2) ||
                          (Math.abs(v.x2 - e + v.x1 - e) < v.borderThickness &&
                            t >= v.y1 &&
                            t <= v.y4)) &&
                          (a.push({
                            dataPoint: g,
                            dataPointIndex: s,
                            dataSeries: this,
                            distance: Math.min(
                              Math.abs(v.x1 - e),
                              Math.abs(v.x2 - e),
                              Math.abs(v.y2 - t),
                              Math.abs(v.y3 - t)
                            ),
                          }),
                          (l = !0));
                        break;
                      case "ohlc":
                        ((Math.abs(v.x2 - e + v.x1 - e) < v.borderThickness &&
                          t >= v.y2 &&
                          t <= v.y3) ||
                          (e >= v.x1 &&
                            e <= (v.x2 + v.x1) / 2 &&
                            t >= v.y1 - v.borderThickness / 2 &&
                            t <= v.y1 + v.borderThickness / 2) ||
                          (e >= (v.x1 + v.x2) / 2 &&
                            e <= v.x2 &&
                            t >= v.y4 - v.borderThickness / 2 &&
                            t <= v.y4 + v.borderThickness / 2)) &&
                          (a.push({
                            dataPoint: g,
                            dataPointIndex: s,
                            dataSeries: this,
                            distance: Math.min(
                              Math.abs(v.x1 - e),
                              Math.abs(v.x2 - e),
                              Math.abs(v.y2 - t),
                              Math.abs(v.y3 - t)
                            ),
                          }),
                          (l = !0));
                    }
                    if (l || (d > 1e3 && c > 1e3)) break;
                  }
                } else if (p - n < 0 && p + n >= this.dataPoints.length) break;
                -1 === o ? (n++, (o = 1)) : (o = -1);
              }
              for (var A = null, L = 0; L < a.length; L++)
                A ? a[L].distance <= A.distance && (A = a[L]) : (A = a[L]);
              return A;
            }),
            (a.prototype.getMarkerProperties = function (e, t, i, a) {
              var n = this.dataPoints,
                s = this,
                r = n[e].markerColor
                  ? n[e].markerColor
                  : s.markerColor
                  ? s.markerColor
                  : n[e].color
                  ? n[e].color
                  : s.color
                  ? s.color
                  : s._colorSet[e % s._colorSet.length],
                o = n[e].markerBorderColor
                  ? n[e].markerBorderColor
                  : s.markerBorderColor
                  ? s.markerBorderColor
                  : null,
                l = n[e].markerBorderThickness
                  ? n[e].markerBorderThickness
                  : s.markerBorderThickness
                  ? s.markerBorderThickness
                  : null;
              return {
                x: t,
                y: i,
                ctx: a,
                type: n[e].markerType ? n[e].markerType : s.markerType,
                size: n[e].markerSize ? n[e].markerSize : s.markerSize,
                color: r,
                borderColor: o,
                borderThickness: l,
              };
            }),
            (i.default = a);
        },
        { "../helpers/utils": 39, "./canvasjs": 27 },
      ],
      31: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            (this.chart = e), (this.lastObjectId = 0);
            (this.objectMap = []),
              (this.rectangularRegionEventSubscriptions = []),
              (this.previousDataPointEventObject = null),
              (this.ghostCanvas = (0, n.createCanvas)(
                this.chart.width,
                this.chart.height
              )),
              (this.ghostCtx = this.ghostCanvas.getContext("2d"));
            this.mouseoveredObjectMaps = [];
          }
          Object.defineProperty(i, "__esModule", { value: !0 });
          var n = e("../helpers/utils");
          (a.prototype.reset = function () {
            (this.lastObjectId = 0),
              (this.objectMap = []),
              (this.rectangularRegionEventSubscriptions = []),
              (this.previousDataPointEventObject = null),
              (this.eventObjects = []),
              n.isCanvasSupported &&
                (this.ghostCtx.clearRect(
                  0,
                  0,
                  this.chart.width,
                  this.chart.height
                ),
                this.ghostCtx.beginPath());
          }),
            (a.prototype.getNewObjectTrackingId = function () {
              return ++this.lastObjectId;
            }),
            (a.prototype.mouseEventHandler = function (e) {
              if ("mousemove" === e.type || "click" === e.type) {
                var t = [],
                  i = (0, n.getMouseCoordinates)(e),
                  a = null;
                if (
                  (a = this.chart.getObjectAtXY(i.x, i.y, !1)) &&
                  void 0 !== this.objectMap[a]
                ) {
                  var s = this.objectMap[a];
                  if ("dataPoint" === s.objectType) {
                    var r = this.chart.data[s.dataSeriesIndex],
                      o = r.dataPoints[s.dataPointIndex],
                      l = s.dataPointIndex;
                    (s.eventParameter = {
                      x: i.x,
                      y: i.y,
                      dataPoint: o,
                      dataSeries: r._options,
                      dataPointIndex: l,
                      dataSeriesIndex: r.index,
                      chart: this.chart._publicChartReference,
                    }),
                      (s.eventContext = {
                        context: o,
                        userContext: o,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click",
                      }),
                      t.push(s),
                      (s = this.objectMap[r.id]),
                      (s.eventParameter = {
                        x: i.x,
                        y: i.y,
                        dataPoint: o,
                        dataSeries: r._options,
                        dataPointIndex: l,
                        dataSeriesIndex: r.index,
                        chart: this.chart._publicChartReference,
                      }),
                      (s.eventContext = {
                        context: r,
                        userContext: r._options,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click",
                      }),
                      t.push(this.objectMap[r.id]);
                  } else if ("legendItem" === s.objectType) {
                    var r = this.chart.data[s.dataSeriesIndex],
                      o =
                        null !== s.dataPointIndex
                          ? r.dataPoints[s.dataPointIndex]
                          : null;
                    (s.eventParameter = {
                      x: i.x,
                      y: i.y,
                      dataSeries: r._options,
                      dataPoint: o,
                      dataPointIndex: s.dataPointIndex,
                      dataSeriesIndex: s.dataSeriesIndex,
                      chart: this.chart._publicChartReference,
                    }),
                      (s.eventContext = {
                        context: this.chart.legend,
                        userContext: this.chart.legend._options,
                        mouseover: "itemmouseover",
                        mousemove: "itemmousemove",
                        mouseout: "itemmouseout",
                        click: "itemclick",
                      }),
                      t.push(s);
                  }
                }
                for (
                  var h = [], d = 0;
                  d < this.mouseoveredObjectMaps.length;
                  d++
                ) {
                  for (var c = !0, p = 0; p < t.length; p++)
                    if (t[p].id === this.mouseoveredObjectMaps[d].id) {
                      c = !1;
                      break;
                    }
                  c
                    ? this.fireEvent(
                        this.mouseoveredObjectMaps[d],
                        "mouseout",
                        e
                      )
                    : h.push(this.mouseoveredObjectMaps[d]);
                }
                this.mouseoveredObjectMaps = h;
                for (var d = 0; d < t.length; d++) {
                  for (
                    var x = !1, p = 0;
                    p < this.mouseoveredObjectMaps.length;
                    p++
                  )
                    if (t[d].id === this.mouseoveredObjectMaps[p].id) {
                      x = !0;
                      break;
                    }
                  x ||
                    (this.fireEvent(t[d], "mouseover", e),
                    this.mouseoveredObjectMaps.push(t[d])),
                    "click" === e.type
                      ? this.fireEvent(t[d], "click", e)
                      : "mousemove" === e.type &&
                        this.fireEvent(t[d], "mousemove", e);
                }
              }
            }),
            (a.prototype.fireEvent = function (e, t, i) {
              if (e && t) {
                var a = e.eventParameter,
                  n = e.eventContext,
                  s = e.eventContext.userContext;
                s && n && s[n[t]] && s[n[t]].call(s, a),
                  "mouseout" !== t
                    ? s.cursor &&
                      s.cursor !== i.target.style.cursor &&
                      (i.target.style.cursor = s.cursor)
                    : ((i.target.style.cursor = this.chart._defaultCursor),
                      delete e.eventParameter,
                      delete e.eventContext),
                  "click" === t &&
                    "dataPoint" === e.objectType &&
                    this.chart.pieDoughnutClickHandler &&
                    this.chart.pieDoughnutClickHandler.call(
                      this.chart.data[e.dataSeriesIndex],
                      a
                    );
              }
            }),
            (i.default = a);
        },
        { "../helpers/utils": 39 },
      ],
      32: [
        function (e, t, i) {
          "use strict";
          function a(e, t, i, a, n) {
            void 0 === n && (n = 0),
              (this._padding = n),
              (this._x1 = e),
              (this._y1 = t),
              (this._x2 = i),
              (this._y2 = a),
              (this._topOccupied = this._padding),
              (this._bottomOccupied = this._padding),
              (this._leftOccupied = this._padding),
              (this._rightOccupied = this._padding);
          }
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (a.prototype.registerSpace = function (e, t) {
              "top" === e
                ? (this._topOccupied += t.height)
                : "bottom" === e
                ? (this._bottomOccupied += t.height)
                : "left" === e
                ? (this._leftOccupied += t.width)
                : "right" === e && (this._rightOccupied += t.width);
            }),
            (a.prototype.unRegisterSpace = function (e, t) {
              "top" === e
                ? (this._topOccupied -= t.height)
                : "bottom" === e
                ? (this._bottomOccupied -= t.height)
                : "left" === e
                ? (this._leftOccupied -= t.width)
                : "right" === e && (this._rightOccupied -= t.width);
            }),
            (a.prototype.getFreeSpace = function () {
              return {
                x1: this._x1 + this._leftOccupied,
                y1: this._y1 + this._topOccupied,
                x2: this._x2 - this._rightOccupied,
                y2: this._y2 - this._bottomOccupied,
                width:
                  this._x2 -
                  this._x1 -
                  this._rightOccupied -
                  this._leftOccupied,
                height:
                  this._y2 -
                  this._y1 -
                  this._bottomOccupied -
                  this._topOccupied,
              };
            }),
            (a.prototype.reset = function () {
              (this._topOccupied = this._padding),
                (this._bottomOccupied = this._padding),
                (this._leftOccupied = this._padding),
                (this._rightOccupied = this._padding);
            }),
            (i.default = a);
        },
        {},
      ],
      33: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function n(e, t, i) {
            n.base.constructor.call(this, "Legend", t, i),
              (this.chart = e),
              (this.canvas = e.canvas),
              (this.ctx = this.chart.ctx),
              (this.ghostCtx = this.chart._eventManager.ghostCtx),
              (this.items = []),
              (this.width = 0),
              (this.height = 0),
              (this.orientation = null),
              (this.dataSeries = []),
              (this.bounds = { x1: null, y1: null, x2: null, y2: null }),
              void 0 === this._options.fontSize &&
                (this.fontSize = this.chart.getAutoFontSize(this.fontSize)),
              (this.lineHeight = (0, x.getFontHeightInPixels)(
                this.fontFamily,
                this.fontSize,
                this.fontWeight
              )),
              (this.horizontalSpacing = this.fontSize);
          }
          Object.defineProperty(i, "__esModule", { value: !0 });
          var s = e("./data_series"),
            r = a(s),
            o = e("./canvasjs"),
            l = a(o),
            h = e("./text_block"),
            d = a(h),
            c = e("../helpers/render"),
            p = a(c),
            x = e("../helpers/utils");
          (0, x.extend)(n, l.default),
            (n.prototype.render = function () {
              var e = this.dockInsidePlotArea
                  ? this.chart.plotArea
                  : this.chart,
                t = e.layoutManager.getFreeSpace(),
                i = null,
                a = 0,
                n = 0,
                s = 0,
                o = 0,
                l = [],
                h = [];
              "top" === this.verticalAlign || "bottom" === this.verticalAlign
                ? ((this.orientation = "horizontal"),
                  (i = this.verticalAlign),
                  (s = null !== this.maxWidth ? this.maxWidth : 0.7 * t.width),
                  (o =
                    null !== this.maxHeight ? this.maxHeight : 0.5 * t.height))
                : "center" === this.verticalAlign &&
                  ((this.orientation = "vertical"),
                  (i = this.horizontalAlign),
                  (s = null !== this.maxWidth ? this.maxWidth : 0.5 * t.width),
                  (o =
                    null !== this.maxHeight ? this.maxHeight : 0.7 * t.height));
              for (var c = 0; c < this.dataSeries.length; c++) {
                var x = this.dataSeries[c];
                if (
                  "pie" !== x.type &&
                  "doughnut" !== x.type &&
                  "funnel" !== x.type
                ) {
                  var u = x.legendMarkerType
                      ? x.legendMarkerType
                      : ("line" !== x.type &&
                          "stepLine" !== x.type &&
                          "spline" !== x.type &&
                          "scatter" !== x.type &&
                          "bubble" !== x.type) ||
                        !x.markerType
                      ? r.default.getDefaultLegendMarker(x.type)
                      : x.markerType,
                    m = x.legendText
                      ? x.legendText
                      : this.itemTextFormatter
                      ? this.itemTextFormatter({
                          chart: this.chart,
                          legend: this._options,
                          dataSeries: x,
                          dataPoint: null,
                        })
                      : x.name,
                    v = x.legendMarkerColor
                      ? x.legendMarkerColor
                      : x.markerColor
                      ? x.markerColor
                      : x._colorSet[0],
                    g =
                      x.markerSize ||
                      ("line" !== x.type &&
                        "stepLine" !== x.type &&
                        "spline" !== x.type)
                        ? 0.6 * this.lineHeight
                        : 0,
                    y = x.legendMarkerBorderColor
                      ? x.legendMarkerBorderColor
                      : x.markerBorderColor,
                    f = x.legendMarkerBorderThickness
                      ? x.legendMarkerBorderThickness
                      : x.markerBorderThickness
                      ? Math.max(1, Math.round(0.2 * g))
                      : 0;
                  x._colorSet[0];
                  m = this.chart.replaceKeywordsWithValue(
                    m,
                    x.dataPoints[0],
                    x,
                    c
                  );
                  var b = {
                    markerType: u,
                    markerColor: v,
                    text: m,
                    textBlock: null,
                    chartType: x.type,
                    markerSize: g,
                    lineColor: x._colorSet[0],
                    dataSeriesIndex: x.index,
                    dataPointIndex: null,
                    markerBorderColor: y,
                    markerBorderThickness: f,
                  };
                  l.push(b);
                } else
                  for (var M = 0; M < x.dataPoints.length; M++) {
                    var P = x.dataPoints[M],
                      u = P.legendMarkerType
                        ? P.legendMarkerType
                        : x.legendMarkerType
                        ? x.legendMarkerType
                        : r.default.getDefaultLegendMarker(x.type),
                      m = P.legendText
                        ? P.legendText
                        : x.legendText
                        ? x.legendText
                        : this.itemTextFormatter
                        ? this.itemTextFormatter({
                            chart: this.chart,
                            legend: this._options,
                            dataSeries: x,
                            dataPoint: P,
                          })
                        : P.name
                        ? P.name
                        : "DataPoint: " + (M + 1),
                      v = P.legendMarkerColor
                        ? P.legendMarkerColor
                        : x.legendMarkerColor
                        ? x.legendMarkerColor
                        : P.color
                        ? P.color
                        : x.color
                        ? x.color
                        : x._colorSet[M % x._colorSet.length],
                      g = 0.6 * this.lineHeight,
                      y = P.legendMarkerBorderColor
                        ? P.legendMarkerBorderColor
                        : x.legendMarkerBorderColor
                        ? x.legendMarkerBorderColor
                        : P.markerBorderColor
                        ? P.markerBorderColor
                        : x.markerBorderColor,
                      f = P.legendMarkerBorderThickness
                        ? P.legendMarkerBorderThickness
                        : x.legendMarkerBorderThickness
                        ? x.legendMarkerBorderThickness
                        : P.markerBorderThickness || x.markerBorderThickness
                        ? Math.max(1, Math.round(0.2 * g))
                        : 0;
                    m = this.chart.replaceKeywordsWithValue(m, P, x, M);
                    var b = {
                      markerType: u,
                      markerColor: v,
                      text: m,
                      textBlock: null,
                      chartType: x.type,
                      markerSize: g,
                      dataSeriesIndex: c,
                      dataPointIndex: M,
                      markerBorderColor: y,
                      markerBorderThickness: f,
                    };
                    (P.showInLegend ||
                      (x.showInLegend && !1 !== P.showInLegend)) &&
                      l.push(b);
                  }
                b = null;
              }
              if ((!0 === this.reversed && l.reverse(), l.length > 0)) {
                var S = null,
                  T = 0,
                  C = 0,
                  k = 0;
                (C =
                  null !== this.itemWidth
                    ? null !== this.itemMaxWidth
                      ? Math.min(this.itemWidth, this.itemMaxWidth, s)
                      : Math.min(this.itemWidth, s)
                    : null !== this.itemMaxWidth
                    ? Math.min(this.itemMaxWidth, s)
                    : s),
                  (g = 0 === g ? 0.6 * this.lineHeight : g),
                  (C -= g + 0.1 * this.horizontalSpacing);
                for (var c = 0; c < l.length; c++) {
                  var b = l[c];
                  ("line" !== b.chartType &&
                    "spline" !== b.chartType &&
                    "stepLine" !== b.chartType) ||
                    (C -= 0.1 * this.lineHeight * 2),
                    o <= 0 ||
                      void 0 === o ||
                      C <= 0 ||
                      void 0 === C ||
                      ("horizontal" === this.orientation
                        ? ((b.textBlock = new d.default(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: C,
                            maxHeight: this.itemWrap ? o : this.lineHeight,
                            angle: 0,
                            text: b.text,
                            horizontalAlign: "left",
                            fontSize: this.fontSize,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontColor: this.fontColor,
                            fontStyle: this.fontStyle,
                            textBaseline: "top",
                          })),
                          b.textBlock.measureText(),
                          null !== this.itemWidth &&
                            (b.textBlock.width =
                              this.itemWidth -
                              (g +
                                0.1 * this.horizontalSpacing +
                                ("line" === b.chartType ||
                                "spline" === b.chartType ||
                                "stepLine" === b.chartType
                                  ? 0.1 * this.lineHeight * 2
                                  : 0))),
                          (!S ||
                            S.width +
                              Math.round(
                                b.textBlock.width +
                                  0.1 * this.horizontalSpacing +
                                  g +
                                  (0 === S.width ? 0 : this.horizontalSpacing) +
                                  ("line" === b.chartType ||
                                  "spline" === b.chartType ||
                                  "stepLine" === b.chartType
                                    ? 0.1 * this.lineHeight * 2
                                    : 0)
                              ) >
                              s) &&
                            ((S = { items: [], width: 0 }),
                            h.push(S),
                            (this.height += k),
                            (k = 0)),
                          (k = Math.max(k, b.textBlock.height)),
                          (b.textBlock.x = S.width),
                          (b.textBlock.y = 0),
                          (S.width += Math.round(
                            b.textBlock.width +
                              0.1 * this.horizontalSpacing +
                              g +
                              (0 === S.width ? 0 : this.horizontalSpacing) +
                              ("line" === b.chartType ||
                              "spline" === b.chartType ||
                              "stepLine" === b.chartType
                                ? 0.1 * this.lineHeight * 2
                                : 0)
                          )),
                          S.items.push(b),
                          (this.width = Math.max(S.width, this.width)))
                        : ((b.textBlock = new d.default(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: C,
                            maxHeight:
                              !0 === this.itemWrap ? o : 1.5 * this.fontSize,
                            angle: 0,
                            text: b.text,
                            horizontalAlign: "left",
                            fontSize: this.fontSize,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontColor: this.fontColor,
                            fontStyle: this.fontStyle,
                            textBaseline: "top",
                          })),
                          b.textBlock.measureText(),
                          null !== this.itemWidth &&
                            (b.textBlock.width =
                              this.itemWidth -
                              (g +
                                0.1 * this.horizontalSpacing +
                                ("line" === b.chartType ||
                                "spline" === b.chartType ||
                                "stepLine" === b.chartType
                                  ? 0.1 * this.lineHeight * 2
                                  : 0))),
                          this.height <= o
                            ? ((S = { items: [], width: 0 }), h.push(S))
                            : ((S = h[T]), (T = (T + 1) % h.length)),
                          (this.height += b.textBlock.height),
                          (b.textBlock.x = S.width),
                          (b.textBlock.y = 0),
                          (S.width += Math.round(
                            b.textBlock.width +
                              0.1 * this.horizontalSpacing +
                              g +
                              (0 === S.width ? 0 : this.horizontalSpacing) +
                              ("line" === b.chartType ||
                              "spline" === b.chartType ||
                              "stepLine" === b.chartType
                                ? 0.1 * this.lineHeight * 2
                                : 0)
                          )),
                          S.items.push(b),
                          (this.width = Math.max(S.width, this.width))));
                }
                !1 === this.itemWrap
                  ? (this.height = h.length * this.lineHeight)
                  : (this.height += k),
                  (this.height = Math.min(o, this.height)),
                  (this.width = Math.min(s, this.width));
              }
              "top" === this.verticalAlign
                ? ((n =
                    "left" === this.horizontalAlign
                      ? t.x1
                      : "right" === this.horizontalAlign
                      ? t.x2 - this.width
                      : t.x1 + t.width / 2 - this.width / 2),
                  (a = t.y1))
                : "center" === this.verticalAlign
                ? ((n =
                    "left" === this.horizontalAlign
                      ? t.x1
                      : "right" === this.horizontalAlign
                      ? t.x2 - this.width
                      : t.x1 + t.width / 2 - this.width / 2),
                  (a = t.y1 + t.height / 2 - this.height / 2))
                : "bottom" === this.verticalAlign &&
                  ((n =
                    "left" === this.horizontalAlign
                      ? t.x1
                      : "right" === this.horizontalAlign
                      ? t.x2 - this.width
                      : t.x1 + t.width / 2 - this.width / 2),
                  (a = t.y2 - this.height)),
                (this.items = l);
              for (var c = 0; c < this.items.length; c++) {
                var b = l[c];
                (b.id = ++this.chart._eventManager.lastObjectId),
                  (this.chart._eventManager.objectMap[b.id] = {
                    id: b.id,
                    objectType: "legendItem",
                    legendItemIndex: c,
                    dataSeriesIndex: b.dataSeriesIndex,
                    dataPointIndex: b.dataPointIndex,
                  });
              }
              for (var w = 0, c = 0; c < h.length; c++) {
                for (var S = h[c], k = 0, _ = 0; _ < S.items.length; _++) {
                  var b = S.items[_],
                    A =
                      b.textBlock.x +
                      n +
                      (0 === _ ? 0.2 * g : this.horizontalSpacing),
                    L = a + w,
                    I = A;
                  this.chart.data[b.dataSeriesIndex].visible ||
                    (this.ctx.globalAlpha = 0.5),
                    this.ctx.save(),
                    this.ctx.rect(n, a, s, o),
                    this.ctx.clip(),
                    ("line" !== b.chartType &&
                      "stepLine" !== b.chartType &&
                      "spline" !== b.chartType) ||
                      ((this.ctx.strokeStyle = b.lineColor),
                      (this.ctx.lineWidth = Math.ceil(this.lineHeight / 8)),
                      this.ctx.beginPath(),
                      this.ctx.moveTo(
                        A - 0.1 * this.lineHeight,
                        L + this.lineHeight / 2
                      ),
                      this.ctx.lineTo(
                        A + 0.7 * this.lineHeight,
                        L + this.lineHeight / 2
                      ),
                      this.ctx.stroke(),
                      (I -= 0.1 * this.lineHeight)),
                    p.default.drawMarker(
                      A + g / 2,
                      L + this.lineHeight / 2,
                      this.ctx,
                      b.markerType,
                      b.markerSize,
                      b.markerColor,
                      b.markerBorderColor,
                      b.markerBorderThickness
                    ),
                    (b.textBlock.x = A + 0.1 * this.horizontalSpacing + g),
                    ("line" !== b.chartType &&
                      "stepLine" !== b.chartType &&
                      "spline" !== b.chartType) ||
                      (b.textBlock.x = b.textBlock.x + 0.1 * this.lineHeight),
                    (b.textBlock.y = L),
                    b.textBlock.render(!0),
                    this.ctx.restore(),
                    (k =
                      _ > 0
                        ? Math.max(k, b.textBlock.height)
                        : b.textBlock.height),
                    this.chart.data[b.dataSeriesIndex].visible ||
                      (this.ctx.globalAlpha = 1);
                  var B = intToHexColorString(b.id);
                  (this.ghostCtx.fillStyle = B),
                    this.ghostCtx.beginPath(),
                    this.ghostCtx.fillRect(
                      I,
                      b.textBlock.y,
                      b.textBlock.x + b.textBlock.width - I,
                      b.textBlock.height
                    ),
                    (b.x1 = this.chart._eventManager.objectMap[b.id].x1 = I),
                    (b.y1 = this.chart._eventManager.objectMap[b.id].y1 =
                      b.textBlock.y),
                    (b.x2 = this.chart._eventManager.objectMap[b.id].x2 =
                      b.textBlock.x + b.textBlock.width),
                    (b.y2 = this.chart._eventManager.objectMap[b.id].y2 =
                      b.textBlock.y + b.textBlock.height);
                }
                w += k;
              }
              e.layoutManager.registerSpace(i, {
                width: this.width + 2 + 2,
                height: this.height + 5 + 5,
              }),
                (this.bounds = {
                  x1: n,
                  y1: a,
                  x2: n + this.width,
                  y2: a + this.height,
                });
            }),
            (i.default = n);
        },
        {
          "../helpers/render": 38,
          "../helpers/utils": 39,
          "./canvasjs": 27,
          "./data_series": 30,
          "./text_block": 34,
        },
      ],
      34: [
        function (e, t, i) {
          "use strict";
          function a(e, t) {
            a.base.constructor.call(this, "TextBlock", t),
              (this.ctx = e),
              (this._isDirty = !0),
              (this._wrappedText = null),
              (this._lineHeight = (0, r.getFontHeightInPixels)(
                this.fontFamily,
                this.fontSize,
                this.fontWeight
              ));
          }
          Object.defineProperty(i, "__esModule", { value: !0 });
          var n = e("./canvasjs"),
            s = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(n),
            r = e("../helpers/utils");
          (0, r.extend)(a, s.default),
            (a.prototype.render = function (e) {
              e && this.ctx.save();
              var t = this.ctx.font;
              this.ctx.textBaseline = this.textBaseline;
              var i = 0;
              this._isDirty && this.measureText(this.ctx),
                this.ctx.translate(this.x, this.y + i),
                "middle" === this.textBaseline && (i = -this._lineHeight / 2),
                (this.ctx.font = this._getFontString()),
                this.ctx.rotate((Math.PI / 180) * this.angle);
              var a = 0,
                n = this.padding,
                s = null;
              ((this.borderThickness > 0 && this.borderColor) ||
                this.backgroundColor) &&
                this.ctx.roundRect(
                  0,
                  i,
                  this.width,
                  this.height,
                  this.cornerRadius,
                  this.borderThickness,
                  this.backgroundColor,
                  this.borderColor
                ),
                (this.ctx.fillStyle = this.fontColor);
              for (var r = 0; r < this._wrappedText.lines.length; r++)
                (s = this._wrappedText.lines[r]),
                  "right" === this.horizontalAlign
                    ? (a = this.width - s.width - this.padding)
                    : "left" === this.horizontalAlign
                    ? (a = this.padding)
                    : "center" === this.horizontalAlign &&
                      (a =
                        (this.width - 2 * this.padding) / 2 -
                        s.width / 2 +
                        this.padding),
                  this.ctx.fillText(s.text, a, n),
                  (n += s.height);
              (this.ctx.font = t), e && this.ctx.restore();
            }),
            (a.prototype.setText = function (e) {
              (this.text = e), (this._isDirty = !0), (this._wrappedText = null);
            }),
            (a.prototype.measureText = function () {
              if (null === this.maxWidth)
                throw "Please set maxWidth and height for TextBlock";
              return (
                this._wrapText(this.ctx),
                (this._isDirty = !1),
                { width: this.width, height: this.height }
              );
            }),
            (a.prototype._getLineWithWidth = function (e, t, i) {
              if (((e = String(e)), (i = i || !1), !e))
                return { text: "", width: 0 };
              var a = 0,
                n = 0,
                s = e.length - 1,
                r = 1 / 0;
              for (this.ctx.font = this._getFontString(); n <= s; ) {
                r = Math.floor((n + s) / 2);
                var o = e.substr(0, r + 1);
                if ((a = this.ctx.measureText(o).width) < t) n = r + 1;
                else {
                  if (!(a > t)) break;
                  s = r - 1;
                }
              }
              a > t &&
                o.length > 1 &&
                ((o = o.substr(0, o.length - 1)),
                (a = this.ctx.measureText(o).width));
              var l = !0;
              if (
                ((o.length !== e.length && " " !== e[o.length]) || (l = !1), l)
              ) {
                var h = o.split(" ");
                h.length > 1 && h.pop(),
                  (o = h.join(" ")),
                  (a = this.ctx.measureText(o).width);
              }
              return { text: o, width: a };
            }),
            (a.prototype._wrapText = function () {
              var e = new String((0, r.trimString)(String(this.text))),
                t = [],
                i = this.ctx.font,
                a = 0,
                n = 0;
              for (this.ctx.font = this._getFontString(); e.length > 0; ) {
                var s = this.maxWidth - 2 * this.padding,
                  o = this.maxHeight - 2 * this.padding,
                  l = this._getLineWithWidth(e, s, !1);
                if (
                  ((l.height = this._lineHeight),
                  t.push(l),
                  (n = Math.max(n, l.width)),
                  (a += l.height),
                  (e = (0, r.trimString)(e.slice(l.text.length, e.length))),
                  o && a > o)
                ) {
                  var l = t.pop();
                  a -= l.height;
                }
              }
              (this._wrappedText = { lines: t, width: n, height: a }),
                (this.width = n + 2 * this.padding),
                (this.height = a + 2 * this.padding),
                (this.ctx.font = i);
            }),
            (a.prototype._getFontString = function () {
              return (0, r.getFontString)("", this, null);
            }),
            (i.default = a);
        },
        { "../helpers/utils": 39, "./canvasjs": 27 },
      ],
      35: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function n(e, t) {
            n.base.constructor.call(this, "Title", t, e.theme),
              (this.chart = e),
              (this.canvas = e.canvas),
              (this.ctx = this.chart.ctx),
              void 0 === this._options.fontSize &&
                (this.fontSize = this.chart.getAutoFontSize(this.fontSize)),
              (this.width = null),
              (this.height = null),
              (this.bounds = { x1: null, y1: null, x2: null, y2: null });
          }
          Object.defineProperty(i, "__esModule", { value: !0 });
          var s = e("./canvasjs"),
            r = a(s),
            o = e("./text_block"),
            l = a(o);
          (0, e("../helpers/utils").extend)(n, r.default),
            (n.prototype.render = function () {
              if (this.text) {
                var e,
                  t,
                  i = this.dockInsidePlotArea
                    ? this.chart.plotArea
                    : this.chart,
                  a = i.layoutManager.getFreeSpace(),
                  n = a.x1,
                  s = a.y1,
                  r = 0,
                  o = 0,
                  h =
                    this.chart._menuButton &&
                    this.chart.exportEnabled &&
                    "top" === this.verticalAlign
                      ? 22
                      : 0;
                "top" === this.verticalAlign || "bottom" === this.verticalAlign
                  ? (null === this.maxWidth &&
                      (this.maxWidth =
                        a.width -
                        4 -
                        h * ("center" === this.horizontalAlign ? 2 : 1)),
                    (o = 0.5 * a.height - this.margin - 2),
                    (r = 0))
                  : "center" === this.verticalAlign &&
                    ("left" === this.horizontalAlign ||
                    "right" === this.horizontalAlign
                      ? (null === this.maxWidth &&
                          (this.maxWidth = a.height - 4),
                        (o = 0.5 * a.width - this.margin - 2))
                      : "center" === this.horizontalAlign &&
                        (null === this.maxWidth &&
                          (this.maxWidth = a.width - 4),
                        (o = 0.5 * a.height - 4))),
                  this.wrap ||
                    (o = Math.min(
                      o,
                      Math.max(
                        1.5 * this.fontSize,
                        this.fontSize + 2.5 * this.padding
                      )
                    ));
                var d = new l.default(this.ctx, {
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    fontWeight: this.fontWeight,
                    horizontalAlign: this.horizontalAlign,
                    verticalAlign: this.verticalAlign,
                    borderColor: this.borderColor,
                    borderThickness: this.borderThickness,
                    backgroundColor: this.backgroundColor,
                    maxWidth: this.maxWidth,
                    maxHeight: o,
                    cornerRadius: this.cornerRadius,
                    text: this.text,
                    padding: this.padding,
                    textBaseline: "top",
                  }),
                  c = d.measureText();
                "top" === this.verticalAlign || "bottom" === this.verticalAlign
                  ? ("top" === this.verticalAlign
                      ? ((s = a.y1 + 2), (t = "top"))
                      : "bottom" === this.verticalAlign &&
                        ((s = a.y2 - 2 - c.height), (t = "bottom")),
                    "left" === this.horizontalAlign
                      ? (n = a.x1 + 2)
                      : "center" === this.horizontalAlign
                      ? (n = a.x1 + a.width / 2 - c.width / 2)
                      : "right" === this.horizontalAlign &&
                        (n = a.x2 - 2 - c.width - h),
                    (e = this.horizontalAlign),
                    (this.width = c.width),
                    (this.height = c.height))
                  : "center" === this.verticalAlign &&
                    ("left" === this.horizontalAlign
                      ? ((n = a.x1 + 2),
                        (s = a.y2 - 2 - (this.maxWidth / 2 - c.width / 2)),
                        (r = -90),
                        (t = "left"),
                        (this.width = c.height),
                        (this.height = c.width))
                      : "right" === this.horizontalAlign
                      ? ((n = a.x2 - 2),
                        (s = a.y1 + 2 + (this.maxWidth / 2 - c.width / 2)),
                        (r = 90),
                        (t = "right"),
                        (this.width = c.height),
                        (this.height = c.width))
                      : "center" === this.horizontalAlign &&
                        ((s = i.y1 + (i.height / 2 - c.height / 2)),
                        (n = i.x1 + (i.width / 2 - c.width / 2)),
                        (t = "center"),
                        (this.width = c.width),
                        (this.height = c.height)),
                    (e = "center")),
                  (d.x = n),
                  (d.y = s),
                  (d.angle = r),
                  (d.horizontalAlign = e),
                  d.render(!0),
                  i.layoutManager.registerSpace(t, {
                    width:
                      this.width +
                      ("left" === t || "right" === t ? this.margin + 2 : 0),
                    height:
                      this.height +
                      ("top" === t || "bottom" === t ? this.margin + 2 : 0),
                  }),
                  (this.bounds = {
                    x1: n,
                    y1: s,
                    x2: n + this.width,
                    y2: s + this.height,
                  }),
                  (this.ctx.textBaseline = "top");
              }
            }),
            (i.default = n);
        },
        { "../helpers/utils": 39, "./canvasjs": 27, "./text_block": 34 },
      ],
      36: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function n(e, t, i) {
            n.base.constructor.call(this, "ToolTip", t, i),
              (this.chart = e),
              (this.canvas = e.canvas),
              (this.ctx = this.chart.ctx),
              (this.currentSeriesIndex = -1),
              (this.currentDataPointIndex = -1),
              (this._timerId = 0),
              (this._prevX = NaN),
              (this._prevY = NaN),
              this._initialize();
          }
          Object.defineProperty(i, "__esModule", { value: !0 });
          var s = e("../helpers/animator"),
            r = (a(s), e("../helpers/render")),
            o = a(r),
            l = e("./canvasjs"),
            h = a(l),
            d = e("../helpers/utils");
          (0, d.extend)(n, h.default),
            (n.prototype._initialize = function () {
              if (this.enabled) {
                (this.container = document.createElement("div")),
                  this.container.setAttribute(
                    "class",
                    "canvasjs-chart-tooltip"
                  ),
                  (this.container.style.position = "absolute"),
                  (this.container.style.height = "auto"),
                  (this.container.style.boxShadow =
                    "1px 1px 2px 2px rgba(0,0,0,0.1)"),
                  (this.container.style.zIndex = "1000"),
                  (this.container.style.display = "none");
                var e = '<div style=" width: auto;';
                (e += "height: auto;"),
                  (e += "min-width: 50px;"),
                  (e += "line-height: auto;"),
                  (e += "margin: 0px 0px 0px 0px;"),
                  (e += "padding: 5px;"),
                  (e += "font-family: Calibri, Arial, Georgia, serif;"),
                  (e += "font-weight: normal;"),
                  (e +=
                    "font-style: " +
                    (d.isCanvasSupported ? "italic;" : "normal;")),
                  (e += "font-size: 14px;"),
                  (e += "color: #000000;"),
                  (e += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);"),
                  (e += "text-align: left;"),
                  (e += "border: 2px solid gray;"),
                  (e += d.isCanvasSupported
                    ? "background: rgba(255,255,255,.9);"
                    : "background: rgb(255,255,255);"),
                  (e += "text-indent: 0px;"),
                  (e += "white-space: nowrap;"),
                  (e += "border-radius: 5px;"),
                  (e += "-moz-user-select:none;"),
                  (e += "-khtml-user-select: none;"),
                  (e += "-webkit-user-select: none;"),
                  (e += "-ms-user-select: none;"),
                  (e += "user-select: none;"),
                  d.isCanvasSupported ||
                    ((e += "filter: alpha(opacity = 90);"),
                    (e +=
                      "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');")),
                  (e += '} "> Sample Tooltip</div>'),
                  (this.container.innerHTML = e),
                  (this.contentDiv = this.container.firstChild),
                  (this.container.style.borderRadius =
                    this.contentDiv.style.borderRadius),
                  this.chart._canvasJSContainer.appendChild(this.container);
              }
            }),
            (n.prototype.mouseMoveHandler = function (e, t) {
              (this._lastUpdated &&
                new Date().getTime() - this._lastUpdated < 40) ||
                ((this._lastUpdated = new Date().getTime()),
                this._updateToolTip(e, t));
            }),
            (n.prototype._updateToolTip = function (e, t) {
              if (!this.chart.disableToolTip) {
                if (void 0 === e || void 0 === t) {
                  if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                  (e = this._prevX), (t = this._prevY);
                } else (this._prevX = e), (this._prevY = t);
                var i,
                  a = null,
                  n = null,
                  s = [],
                  r = 0;
                if (
                  this.shared &&
                  this.enabled &&
                  "none" !== this.chart.plotInfo.axisPlacement
                ) {
                  r =
                    "xySwapped" === this.chart.plotInfo.axisPlacement
                      ? ((this.chart.axisX.viewportMaximum -
                          this.chart.axisX.viewportMinimum) /
                          this.chart.axisX.lineCoordinates.height) *
                          (this.chart.axisX.lineCoordinates.y2 - t) +
                        this.chart.axisX.viewportMinimum
                      : ((this.chart.axisX.viewportMaximum -
                          this.chart.axisX.viewportMinimum) /
                          this.chart.axisX.lineCoordinates.width) *
                          (e - this.chart.axisX.lineCoordinates.x1) +
                        this.chart.axisX.viewportMinimum;
                  for (var o = [], l = 0; l < this.chart.data.length; l++) {
                    var h = this.chart.data[l].getDataPointAtX(r, !0);
                    h &&
                      h.index >= 0 &&
                      ((h.dataSeries = this.chart.data[l]),
                      null !== h.dataPoint.y && o.push(h));
                  }
                  if (0 === o.length) return;
                  o.sort(function (e, t) {
                    return e.distance - t.distance;
                  });
                  var c = o[0];
                  for (l = 0; l < o.length; l++)
                    o[l].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() &&
                      s.push(o[l]);
                  o = null;
                } else {
                  var p = this.chart.getDataPointAtXY(e, t, !0);
                  if (p)
                    (this.currentDataPointIndex = p.dataPointIndex),
                      (this.currentSeriesIndex = p.dataSeries.index);
                  else if (d.isCanvasSupported) {
                    var x = (0, d.getObjectId)(
                      e,
                      t,
                      this.chart._eventManager.ghostCtx
                    );
                    if (
                      x > 0 &&
                      void 0 !== this.chart._eventManager.objectMap[x]
                    ) {
                      var u = this.chart._eventManager.objectMap[x];
                      if ("legendItem" === u.objectType) return;
                      (this.currentSeriesIndex = u.dataSeriesIndex),
                        (this.currentDataPointIndex =
                          u.dataPointIndex >= 0 ? u.dataPointIndex : -1);
                    } else this.currentDataPointIndex = -1;
                  } else this.currentDataPointIndex = -1;
                  if (this.currentSeriesIndex >= 0) {
                    n = this.chart.data[this.currentSeriesIndex];
                    var h = {};
                    if (this.currentDataPointIndex >= 0)
                      (a = n.dataPoints[this.currentDataPointIndex]),
                        (h.dataSeries = n),
                        (h.dataPoint = a),
                        (h.index = this.currentDataPointIndex),
                        (h.distance = Math.abs(a.x - r));
                    else {
                      if (
                        !this.enabled ||
                        ("line" !== n.type &&
                          "stepLine" !== n.type &&
                          "spline" !== n.type &&
                          "area" !== n.type &&
                          "stepArea" !== n.type &&
                          "splineArea" !== n.type &&
                          "stackedArea" !== n.type &&
                          "stackedArea100" !== n.type &&
                          "rangeArea" !== n.type &&
                          "rangeSplineArea" !== n.type &&
                          "candlestick" !== n.type &&
                          "ohlc" !== n.type)
                      )
                        return;
                      var r =
                        n.axisX.conversionParameters.minimum +
                        (e - n.axisX.conversionParameters.reference) /
                          n.axisX.conversionParameters.pixelPerUnit;
                      (h = n.getDataPointAtX(r, !0)),
                        (h.dataSeries = n),
                        (this.currentDataPointIndex = h.index),
                        (a = h.dataPoint);
                    }
                    if (null !== h.dataPoint.y)
                      if (h.dataSeries.axisY)
                        if (h.dataPoint.y.length > 0) {
                          for (var m = 0, l = 0; l < h.dataPoint.y.length; l++)
                            h.dataPoint.y[l] <
                            h.dataSeries.axisY.viewportMinimum
                              ? m--
                              : h.dataPoint.y[l] >
                                  h.dataSeries.axisY.viewportMaximum && m++;
                          m < h.dataPoint.y.length &&
                            m > -h.dataPoint.y.length &&
                            s.push(h);
                        } else
                          h.dataPoint.y >= h.dataSeries.axisY.viewportMinimum &&
                            h.dataPoint.y <=
                              h.dataSeries.axisY.viewportMaximum &&
                            s.push(h);
                      else s.push(h);
                  }
                }
                if (s.length > 0 && (this.highlightObjects(s), this.enabled)) {
                  var v = "";
                  if (null !== (v = this.getToolTipInnerHTML({ entries: s }))) {
                    (this.contentDiv.innerHTML = v),
                      (this.contentDiv.innerHTML = v);
                    var g = !1;
                    "none" === this.container.style.display &&
                      ((g = !0), (this.container.style.display = "block"));
                    try {
                      (this.contentDiv.style.background = this.backgroundColor
                        ? this.backgroundColor
                        : d.isCanvasSupported
                        ? "rgba(255,255,255,.9)"
                        : "rgb(255,255,255)"),
                        (this.contentDiv.style.borderRightColor =
                          this.contentDiv.style.borderLeftColor =
                          this.contentDiv.style.borderColor =
                            this.borderColor
                              ? this.borderColor
                              : s[0].dataPoint.color
                              ? s[0].dataPoint.color
                              : s[0].dataSeries.color
                              ? s[0].dataSeries.color
                              : s[0].dataSeries._colorSet[
                                  s[0].index % s[0].dataSeries._colorSet.length
                                ]),
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
                          : d.isCanvasSupported
                          ? "italic"
                          : "normal");
                    } catch (e) {}
                    var y;
                    "pie" === s[0].dataSeries.type ||
                    "doughnut" === s[0].dataSeries.type ||
                    "funnel" === s[0].dataSeries.type ||
                    "bar" === s[0].dataSeries.type ||
                    "rangeBar" === s[0].dataSeries.type ||
                    "stackedBar" === s[0].dataSeries.type ||
                    "stackedBar100" === s[0].dataSeries.type
                      ? (y = e - 10 - this.container.clientWidth)
                      : ((y =
                          (s[0].dataSeries.axisX.conversionParameters
                            .reference +
                            s[0].dataSeries.axisX.conversionParameters
                              .pixelPerUnit *
                              (s[0].dataPoint.x -
                                s[0].dataSeries.axisX.conversionParameters
                                  .minimum) -
                            this.container.clientWidth) <<
                          0),
                        (y -= 10)),
                      y < 0 && (y += this.container.clientWidth + 20),
                      y + this.container.clientWidth >
                        this.chart._container.clientWidth &&
                        (y = Math.max(
                          0,
                          this.chart._container.clientWidth -
                            this.container.clientWidth
                        )),
                      (y += "px"),
                      (i =
                        1 !== s.length ||
                        this.shared ||
                        ("line" !== s[0].dataSeries.type &&
                          "stepLine" !== s[0].dataSeries.type &&
                          "spline" !== s[0].dataSeries.type &&
                          "area" !== s[0].dataSeries.type &&
                          "stepArea" !== s[0].dataSeries.type &&
                          "splineArea" !== s[0].dataSeries.type &&
                          "stackedArea" !== s[0].dataSeries.type &&
                          "stackedArea100" !== s[0].dataSeries.type)
                          ? "bar" === s[0].dataSeries.type ||
                            "rangeBar" === s[0].dataSeries.type ||
                            "stackedBar" === s[0].dataSeries.type ||
                            "stackedBar100" === s[0].dataSeries.type
                            ? (s[0].dataSeries.axisX.conversionParameters
                                .reference +
                                s[0].dataSeries.axisX.conversionParameters
                                  .pixelPerUnit *
                                  (s[0].dataPoint.x -
                                    s[0].dataSeries.axisX.viewportMinimum) +
                                0.5) <<
                              0
                            : t
                          : (s[0].dataSeries.axisY.conversionParameters
                              .reference +
                              s[0].dataSeries.axisY.conversionParameters
                                .pixelPerUnit *
                                (s[0].dataPoint.y -
                                  s[0].dataSeries.axisY.viewportMinimum) +
                              0.5) <<
                            0),
                      (i = 10 - i),
                      i + this.container.clientHeight + 5 > 0 &&
                        (i -= i + this.container.clientHeight + 5 - 0),
                      (i += "px"),
                      (this.container.style.left = y),
                      (this.container.style.bottom = i),
                      !this.animationEnabled || g
                        ? this.disableAnimation()
                        : this.enableAnimation();
                  } else this.hide(!1);
                }
              }
            }),
            (n.prototype.highlightObjects = function (e) {
              var t = this.chart.overlaidCanvasCtx;
              this.chart.resetOverlayedCanvas(),
                t.clearRect(0, 0, this.chart.width, this.chart.height),
                t.save();
              var i = this.chart.plotArea,
                a = 0;
              t.rect(i.x1, i.y1, i.x2 - i.x1, i.y2 - i.y1), t.clip();
              for (var n = 0; n < e.length; n++) {
                var s = e[n],
                  r =
                    this.chart._eventManager.objectMap[
                      s.dataSeries.dataPointIds[s.index]
                    ];
                if (r && r.objectType && "dataPoint" === r.objectType) {
                  var l = this.chart.data[r.dataSeriesIndex],
                    h = l.dataPoints[r.dataPointIndex],
                    c = r.dataPointIndex;
                  if (
                    !1 !== h.highlightEnabled &&
                    (!0 === l.highlightEnabled || !0 === h.highlightEnabled)
                  )
                    if (
                      "line" === l.type ||
                      "stepLine" === l.type ||
                      "spline" === l.type ||
                      "scatter" === l.type ||
                      "area" === l.type ||
                      "stepArea" === l.type ||
                      "splineArea" === l.type ||
                      "stackedArea" === l.type ||
                      "stackedArea100" === l.type ||
                      "rangeArea" === l.type ||
                      "rangeSplineArea" === l.type
                    ) {
                      var p = l.getMarkerProperties(
                        c,
                        r.x1,
                        r.y1,
                        this.chart.overlaidCanvasCtx
                      );
                      if (
                        ((p.size = Math.max((1.5 * p.size) << 0, 10)),
                        (p.borderColor = p.borderColor || "#FFFFFF"),
                        (p.borderThickness =
                          p.borderThickness || Math.ceil(0.1 * p.size)),
                        o.default.drawMarkers([p]),
                        void 0 !== r.y2)
                      ) {
                        var p = l.getMarkerProperties(
                          c,
                          r.x1,
                          r.y2,
                          this.chart.overlaidCanvasCtx
                        );
                        (p.size = Math.max((1.5 * p.size) << 0, 10)),
                          (p.borderColor = p.borderColor || "#FFFFFF"),
                          (p.borderThickness =
                            p.borderThickness || Math.ceil(0.1 * p.size)),
                          o.default.drawMarkers([p]);
                      }
                    } else if ("bubble" === l.type) {
                      var p = l.getMarkerProperties(
                        c,
                        r.x1,
                        r.y1,
                        this.chart.overlaidCanvasCtx
                      );
                      (p.size = r.size),
                        (p.color = "white"),
                        (p.borderColor = "white"),
                        (t.globalAlpha = 0.3),
                        o.default.drawMarkers([p]),
                        (t.globalAlpha = 1);
                    } else
                      "column" === l.type ||
                      "stackedColumn" === l.type ||
                      "stackedColumn100" === l.type ||
                      "bar" === l.type ||
                      "rangeBar" === l.type ||
                      "stackedBar" === l.type ||
                      "stackedBar100" === l.type ||
                      "rangeColumn" === l.type
                        ? (0, d.drawRect)(
                            t,
                            r.x1,
                            r.y1,
                            r.x2,
                            r.y2,
                            "white",
                            0,
                            null,
                            !1,
                            !1,
                            !1,
                            !1,
                            0.3
                          )
                        : "pie" === l.type || "doughnut" === l.type
                        ? (0, d.drawSegment)(
                            t,
                            r.center,
                            r.radius,
                            "white",
                            l.type,
                            r.startAngle,
                            r.endAngle,
                            0.3,
                            r.percentInnerRadius
                          )
                        : "candlestick" === l.type
                        ? ((t.globalAlpha = 1),
                          (t.strokeStyle = r.color),
                          (t.lineWidth = 2 * r.borderThickness),
                          (a = t.lineWidth % 2 == 0 ? 0 : 0.5),
                          t.beginPath(),
                          t.moveTo(r.x3 - a, r.y2),
                          t.lineTo(r.x3 - a, Math.min(r.y1, r.y4)),
                          t.stroke(),
                          t.beginPath(),
                          t.moveTo(r.x3 - a, Math.max(r.y1, r.y4)),
                          t.lineTo(r.x3 - a, r.y3),
                          t.stroke(),
                          (0, d.drawRect)(
                            t,
                            r.x1,
                            Math.min(r.y1, r.y4),
                            r.x2,
                            Math.max(r.y1, r.y4),
                            "transparent",
                            2 * r.borderThickness,
                            r.color,
                            !1,
                            !1,
                            !1,
                            !1
                          ),
                          (t.globalAlpha = 1))
                        : "ohlc" === l.type &&
                          ((t.globalAlpha = 1),
                          (t.strokeStyle = r.color),
                          (t.lineWidth = 2 * r.borderThickness),
                          (a = t.lineWidth % 2 == 0 ? 0 : 0.5),
                          t.beginPath(),
                          t.moveTo(r.x3 - a, r.y2),
                          t.lineTo(r.x3 - a, r.y3),
                          t.stroke(),
                          t.beginPath(),
                          t.moveTo(r.x3, r.y1),
                          t.lineTo(r.x1, r.y1),
                          t.stroke(),
                          t.beginPath(),
                          t.moveTo(r.x3, r.y4),
                          t.lineTo(r.x2, r.y4),
                          t.stroke(),
                          (t.globalAlpha = 1));
                }
              }
              t.restore(), (t.globalAlpha = 1), t.beginPath();
            }),
            (n.prototype.getToolTipInnerHTML = function (e) {
              for (
                var t = e.entries,
                  i = null,
                  a = null,
                  n = null,
                  s = 0,
                  r = "",
                  o = !0,
                  l = 0;
                l < t.length;
                l++
              )
                if (
                  t[l].dataSeries.toolTipContent ||
                  t[l].dataPoint.toolTipContent
                ) {
                  o = !1;
                  break;
                }
              if (
                o &&
                ((this.content && "function" == typeof this.content) ||
                  this.contentFormatter)
              ) {
                var h = {
                  chart: this.chart,
                  toolTip: this._options,
                  entries: t,
                };
                i = this.contentFormatter
                  ? this.contentFormatter(h)
                  : this.content(h);
              } else if (
                this.shared &&
                "none" !== this.chart.plotInfo.axisPlacement
              ) {
                for (var d = "", l = 0; l < t.length; l++)
                  (a = t[l].dataSeries),
                    (n = t[l].dataPoint),
                    (s = t[l].index),
                    (r = ""),
                    0 === l &&
                      o &&
                      !this.content &&
                      ((d +=
                        void 0 !== this.chart.axisX.labels[n.x]
                          ? this.chart.axisX.labels[n.x]
                          : "{x}"),
                      (d += "</br>"),
                      (d = this.chart.replaceKeywordsWithValue(d, n, a, s))),
                    null === n.toolTipContent ||
                      (void 0 === n.toolTipContent &&
                        null === a._options.toolTipContent) ||
                      ("line" === a.type ||
                      "stepLine" === a.type ||
                      "spline" === a.type ||
                      "area" === a.type ||
                      "stepArea" === a.type ||
                      "splineArea" === a.type ||
                      "column" === a.type ||
                      "bar" === a.type ||
                      "scatter" === a.type ||
                      "stackedColumn" === a.type ||
                      "stackedColumn100" === a.type ||
                      "stackedBar" === a.type ||
                      "stackedBar100" === a.type ||
                      "stackedArea" === a.type ||
                      "stackedArea100" === a.type
                        ? (r += n.toolTipContent
                            ? n.toolTipContent
                            : a.toolTipContent
                            ? a.toolTipContent
                            : this.content && "function" != typeof this.content
                            ? this.content
                            : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}")
                        : "bubble" === a.type
                        ? (r += n.toolTipContent
                            ? n.toolTipContent
                            : a.toolTipContent
                            ? a.toolTipContent
                            : this.content && "function" != typeof this.content
                            ? this.content
                            : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}")
                        : "pie" === a.type ||
                          "doughnut" === a.type ||
                          "funnel" === a.type
                        ? (r += n.toolTipContent
                            ? n.toolTipContent
                            : a.toolTipContent
                            ? a.toolTipContent
                            : this.content && "function" != typeof this.content
                            ? this.content
                            : "&nbsp;&nbsp;{y}")
                        : "rangeColumn" === a.type ||
                          "rangeBar" === a.type ||
                          "rangeArea" === a.type ||
                          "rangeSplineArea" === a.type
                        ? (r += n.toolTipContent
                            ? n.toolTipContent
                            : a.toolTipContent
                            ? a.toolTipContent
                            : this.content && "function" != typeof this.content
                            ? this.content
                            : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}")
                        : ("candlestick" !== a.type && "ohlc" !== a.type) ||
                          (r += n.toolTipContent
                            ? n.toolTipContent
                            : a.toolTipContent
                            ? a.toolTipContent
                            : this.content && "function" != typeof this.content
                            ? this.content
                            : "<span style='\"'color:{color};'\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}"),
                      null === i && (i = ""),
                      !0 === this.reversed
                        ? ((i =
                            this.chart.replaceKeywordsWithValue(r, n, a, s) +
                            i),
                          l < t.length - 1 && (i = "</br>" + i))
                        : ((i += this.chart.replaceKeywordsWithValue(
                            r,
                            n,
                            a,
                            s
                          )),
                          l < t.length - 1 && (i += "</br>")));
                null !== i && (i = d + i);
              } else {
                if (
                  ((a = t[0].dataSeries),
                  (n = t[0].dataPoint),
                  (s = t[0].index),
                  null === n.toolTipContent ||
                    (void 0 === n.toolTipContent &&
                      null === a._options.toolTipContent))
                )
                  return null;
                "line" === a.type ||
                "stepLine" === a.type ||
                "spline" === a.type ||
                "area" === a.type ||
                "stepArea" === a.type ||
                "splineArea" === a.type ||
                "column" === a.type ||
                "bar" === a.type ||
                "scatter" === a.type ||
                "stackedColumn" === a.type ||
                "stackedColumn100" === a.type ||
                "stackedBar" === a.type ||
                "stackedBar100" === a.type ||
                "stackedArea" === a.type ||
                "stackedArea100" === a.type
                  ? (r = n.toolTipContent
                      ? n.toolTipContent
                      : a.toolTipContent
                      ? a.toolTipContent
                      : this.content && "function" != typeof this.content
                      ? this.content
                      : "<span style='\"'color:{color};'\"'>" +
                        (n.label ? "{label}" : "{x}") +
                        " :</span>&nbsp;&nbsp;{y}")
                  : "bubble" === a.type
                  ? (r = n.toolTipContent
                      ? n.toolTipContent
                      : a.toolTipContent
                      ? a.toolTipContent
                      : this.content && "function" != typeof this.content
                      ? this.content
                      : "<span style='\"'color:{color};'\"'>" +
                        (n.label ? "{label}" : "{x}") +
                        ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}")
                  : "pie" === a.type ||
                    "doughnut" === a.type ||
                    "funnel" === a.type
                  ? (r = n.toolTipContent
                      ? n.toolTipContent
                      : a.toolTipContent
                      ? a.toolTipContent
                      : this.content && "function" != typeof this.content
                      ? this.content
                      : (n.name
                          ? "{name}:&nbsp;&nbsp;"
                          : n.label
                          ? "{label}:&nbsp;&nbsp;"
                          : "") + "{y}")
                  : "rangeColumn" === a.type ||
                    "rangeBar" === a.type ||
                    "rangeArea" === a.type ||
                    "rangeSplineArea" === a.type
                  ? (r = n.toolTipContent
                      ? n.toolTipContent
                      : a.toolTipContent
                      ? a.toolTipContent
                      : this.content && "function" != typeof this.content
                      ? this.content
                      : "<span style='\"'color:{color};'\"'>" +
                        (n.label ? "{label}" : "{x}") +
                        " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}")
                  : ("candlestick" !== a.type && "ohlc" !== a.type) ||
                    (r = n.toolTipContent
                      ? n.toolTipContent
                      : a.toolTipContent
                      ? a.toolTipContent
                      : this.content && "function" != typeof this.content
                      ? this.content
                      : "<span style='\"'color:{color};'\"'>" +
                        (n.label ? "{label}" : "{x}") +
                        "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}"),
                  null === i && (i = ""),
                  (i += this.chart.replaceKeywordsWithValue(r, n, a, s));
              }
              return i;
            }),
            (n.prototype.enableAnimation = function () {
              this.container.style.WebkitTransition ||
                ((this.container.style.WebkitTransition =
                  "left .2s ease-out, bottom .2s ease-out"),
                (this.container.style.MozTransition =
                  "left .2s ease-out, bottom .2s ease-out"),
                (this.container.style.MsTransition =
                  "left .2s ease-out, bottom .2s ease-out"),
                (this.container.style.transition =
                  "left .2s ease-out, bottom .2s ease-out"));
            }),
            (n.prototype.disableAnimation = function () {
              this.container.style.WebkitTransition &&
                ((this.container.style.WebkitTransition = ""),
                (this.container.style.MozTransition = ""),
                (this.container.style.MsTransition = ""),
                (this.container.style.transition = ""));
            }),
            (n.prototype.hide = function (e) {
              this.enabled &&
                ((e = void 0 === e || e),
                (this.container.style.display = "none"),
                (this.currentSeriesIndex = -1),
                (this._prevX = NaN),
                (this._prevY = NaN),
                e && this.chart.resetOverlayedCanvas());
            }),
            (i.default = n);
        },
        {
          "../helpers/animator": 37,
          "../helpers/render": 38,
          "../helpers/utils": 39,
          "./canvasjs": 27,
        },
      ],
      37: [
        function (e, t, i) {
          "use strict";
          function a(e, t) {
            if (0 !== e) {
              var i = t.dest,
                a = t.source.canvas,
                n = t.animationBase,
                s = n - n * e;
              i.drawImage(
                a,
                0,
                0,
                a.width,
                a.height,
                0,
                s,
                i.canvas.width / devicePixelBackingStoreRatio,
                (e * i.canvas.height) / devicePixelBackingStoreRatio
              );
            }
          }
          function n(e, t) {
            if (0 !== e) {
              var i = t.dest,
                a = t.source.canvas,
                n = t.animationBase,
                s = n - n * e;
              i.drawImage(
                a,
                0,
                0,
                a.width,
                a.height,
                s,
                0,
                (e * i.canvas.width) / devicePixelBackingStoreRatio,
                i.canvas.height / devicePixelBackingStoreRatio
              );
            }
          }
          function s(e, t) {
            if (0 !== e) {
              var i = t.dest,
                a = t.source.canvas;
              i.save(),
                e > 0 &&
                  i.drawImage(
                    a,
                    0,
                    0,
                    a.width * e,
                    a.height,
                    0,
                    0,
                    (a.width * e) / devicePixelBackingStoreRatio,
                    a.height / devicePixelBackingStoreRatio
                  ),
                i.restore();
            }
          }
          function r(e, t) {
            if (0 !== e) {
              var i = t.dest,
                a = t.source.canvas;
              i.save(),
                (i.globalAlpha = e),
                i.drawImage(
                  a,
                  0,
                  0,
                  a.width,
                  a.height,
                  0,
                  0,
                  i.canvas.width / devicePixelBackingStoreRatio,
                  i.canvas.height / devicePixelBackingStoreRatio
                ),
                i.restore();
            }
          }
          Object.defineProperty(i, "__esModule", { value: !0 });
          var o = {
            linear: function (e, t, i, a) {
              return (i * e) / a + t;
            },
            easeOutQuad: function (e, t, i, a) {
              return -i * (e /= a) * (e - 2) + t;
            },
            easeOutQuart: function (e, t, i, a) {
              return -i * ((e = e / a - 1) * e * e * e - 1) + t;
            },
            easeInQuad: function (e, t, i, a) {
              return i * (e /= a) * e + t;
            },
            easeInQuart: function (e, t, i, a) {
              return i * (e /= a) * e * e * e + t;
            },
          };
          i.default = {
            yScaleAnimation: a,
            xScaleAnimation: n,
            xClipAnimation: s,
            fadeInAnimation: r,
            easing: o,
          };
        },
        {},
      ],
      38: [
        function (e, t, i) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 });
          var a = {
            drawMarker: function (e, t, i, a, n, s, r, o) {
              if (i) {
                var l = 1;
                (i.fillStyle = s || "#000000"),
                  (i.strokeStyle = r || "#000000"),
                  (i.lineWidth = o || 0),
                  "circle" === a
                    ? (i.moveTo(e, t),
                      i.beginPath(),
                      i.arc(e, t, n / 2, 0, 2 * Math.PI, !1),
                      s && i.fill(),
                      o &&
                        (r
                          ? i.stroke()
                          : ((l = i.globalAlpha),
                            (i.globalAlpha = 0.15),
                            (i.strokeStyle = "black"),
                            i.stroke(),
                            (i.globalAlpha = l))))
                    : "square" === a
                    ? (i.beginPath(),
                      i.rect(e - n / 2, t - n / 2, n, n),
                      s && i.fill(),
                      o &&
                        (r
                          ? i.stroke()
                          : ((l = i.globalAlpha),
                            (i.globalAlpha = 0.15),
                            (i.strokeStyle = "black"),
                            i.stroke(),
                            (i.globalAlpha = l))))
                    : "triangle" === a
                    ? (i.beginPath(),
                      i.moveTo(e - n / 2, t + n / 2),
                      i.lineTo(e + n / 2, t + n / 2),
                      i.lineTo(e, t - n / 2),
                      i.closePath(),
                      s && i.fill(),
                      o &&
                        (r
                          ? i.stroke()
                          : ((l = i.globalAlpha),
                            (i.globalAlpha = 0.15),
                            (i.strokeStyle = "black"),
                            i.stroke(),
                            (i.globalAlpha = l))),
                      i.beginPath())
                    : "cross" === a &&
                      ((i.strokeStyle = s),
                      (o = n / 4),
                      (i.lineWidth = o),
                      i.beginPath(),
                      i.moveTo(e - n / 2, t - n / 2),
                      i.lineTo(e + n / 2, t + n / 2),
                      i.stroke(),
                      i.moveTo(e + n / 2, t - n / 2),
                      i.lineTo(e - n / 2, t + n / 2),
                      i.stroke());
              }
            },
            drawMarkers: function (e) {
              for (var t = 0; t < e.length; t++) {
                var i = e[t];
                a.drawMarker(
                  i.x,
                  i.y,
                  i.ctx,
                  i.type,
                  i.size,
                  i.color,
                  i.borderColor,
                  i.borderThickness
                );
              }
            },
          };
          i.default = a;
        },
        {},
      ],
      39: [
        function (e, t, i) {
          "use strict";
          function a(e, t) {
            (e.prototype = n(t.prototype)),
              (e.prototype.constructor = e),
              (e.base = t.prototype);
          }
          function n(e) {
            function t() {}
            return (t.prototype = e), new t();
          }
          function s(e, t, i) {
            return (
              "millisecond" === i
                ? e.setMilliseconds(e.getMilliseconds() + 1 * t)
                : "second" === i
                ? e.setSeconds(e.getSeconds() + 1 * t)
                : "minute" === i
                ? e.setMinutes(e.getMinutes() + 1 * t)
                : "hour" === i
                ? e.setHours(e.getHours() + 1 * t)
                : "day" === i
                ? e.setDate(e.getDate() + 1 * t)
                : "week" === i
                ? e.setDate(e.getDate() + 7 * t)
                : "month" === i
                ? e.setMonth(e.getMonth() + 1 * t)
                : "year" === i && e.setFullYear(e.getFullYear() + 1 * t),
              e
            );
          }
          function r(e, t) {
            return constants[t + "Duration"] * e;
          }
          function o(e, t) {
            var i = !1;
            for (
              e < 0 && ((i = !0), (e *= -1)), e = "" + e, t = t || 1;
              e.length < t;

            )
              e = "0" + e;
            return i ? "-" + e : e;
          }
          function l(e) {
            if (!e) return e;
            e = e.replace(/^\s\s*/, "");
            for (var t = /\s/, i = e.length; t.test(e.charAt(--i)); );
            return e.slice(0, i + 1);
          }
          function h(e) {
            e.roundRect = function (e, t, i, a, n, s, r, o) {
              r && (this.fillStyle = r),
                o && (this.strokeStyle = o),
                void 0 === n && (n = 5),
                (this.lineWidth = s),
                this.beginPath(),
                this.moveTo(e + n, t),
                this.lineTo(e + i - n, t),
                this.quadraticCurveTo(e + i, t, e + i, t + n),
                this.lineTo(e + i, t + a - n),
                this.quadraticCurveTo(e + i, t + a, e + i - n, t + a),
                this.lineTo(e + n, t + a),
                this.quadraticCurveTo(e, t + a, e, t + a - n),
                this.lineTo(e, t + n),
                this.quadraticCurveTo(e, t, e + n, t),
                this.closePath(),
                r && this.fill(),
                o && s > 0 && this.stroke();
            };
          }
          function d(e, t) {
            return e - t;
          }
          function c(e, t) {
            return e.x - t.x;
          }
          function p(e) {
            var t = ((16711680 & e) >> 16).toString(16),
              i = ((65280 & e) >> 8).toString(16),
              a = ((255 & e) >> 0).toString(16);
            return (
              (t = t.length < 2 ? "0" + t : t),
              (i = i.length < 2 ? "0" + i : i),
              (a = a.length < 2 ? "0" + a : a),
              "#" + t + i + a
            );
          }
          function x(e, t, i) {
            return (e << 16) | (t << 8) | i;
          }
          function u(e) {
            var t = [],
              i = (16711680 & e) >> 16,
              a = (65280 & e) >> 8,
              n = (255 & e) >> 0;
            return (t[0] = i), (t[1] = a), (t[2] = n), t;
          }
          function m(e) {
            var t = this.length >>> 0,
              i = Number(arguments[1]) || 0;
            for (
              i = i < 0 ? Math.ceil(i) : Math.floor(i), i < 0 && (i += t);
              i < t;
              i++
            )
              if (i in this && this[i] === e) return i;
            return -1;
          }
          function v(e) {
            return e.indexOf || (e.indexOf = m), e;
          }
          function g(e, t, i) {
            i = i || "normal";
            var a = e + "_" + t + "_" + i,
              n = Y[a];
            if (isNaN(n)) {
              try {
                var s =
                  "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" +
                  e +
                  "; font-size:" +
                  t +
                  "px; font-weight:" +
                  i +
                  ";";
                if (!O) {
                  var r = document.body;
                  (O = document.createElement("span")), (O.innerHTML = "");
                  var o = document.createTextNode("Mpgyi");
                  O.appendChild(o), r.appendChild(O);
                }
                (O.style.display = ""),
                  O.setAttribute("style", s),
                  (n = Math.round(O.offsetHeight)),
                  (O.style.display = "none");
              } catch (e) {
                n = Math.ceil(1.1 * t);
              }
              (n = Math.max(n, t)), (Y[a] = n);
            }
            return n;
          }
          function y(e, t) {
            e = e || "solid";
            var i = [];
            if (
              (i = {
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
              }[e])
            )
              for (var a = 0; a < i.length; a++) i[a] *= t;
            else i = [];
            return i;
          }
          function f(e, t, i, a) {
            if (e.addEventListener) e.addEventListener(t, i, a || !1);
            else {
              if (!e.attachEvent) return !1;
              e.attachEvent("on" + t, function (t) {
                (t = t || window.event),
                  (t.preventDefault =
                    t.preventDefault ||
                    function () {
                      t.returnValue = !1;
                    }),
                  (t.stopPropagation =
                    t.stopPropagation ||
                    function () {
                      t.cancelBubble = !0;
                    }),
                  i.call(e, t);
              });
            }
          }
          function b() {
            var e =
                /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
              t = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              i = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              a = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              n = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              s =
                /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
              r = /[^-+\dA-Z]/g;
            return function (l, h, d) {
              var c = d ? d.days : t,
                p = d ? d.months : a,
                x = d ? d.shortDays : i,
                u = d ? d.shortMonths : n,
                m = !1;
              if (
                ((l = l && l.getTime ? l : l ? new Date(l) : new Date()),
                isNaN(l))
              )
                throw SyntaxError("invalid date");
              "UTC:" === h.slice(0, 4) && ((h = h.slice(4)), (m = !0));
              var v = m ? "getUTC" : "get",
                g = l[v + "Date"](),
                y = l[v + "Day"](),
                f = l[v + "Month"](),
                b = l[v + "FullYear"](),
                M = l[v + "Hours"](),
                P = l[v + "Minutes"](),
                S = l[v + "Seconds"](),
                T = l[v + "Milliseconds"](),
                C = m ? 0 : l.getTimezoneOffset();
              return h.replace(e, function (e) {
                switch (e) {
                  case "D":
                    return g;
                  case "DD":
                    return o(g, 2);
                  case "DDD":
                    return x[y];
                  case "DDDD":
                    return c[y];
                  case "M":
                    return f + 1;
                  case "MM":
                    return o(f + 1, 2);
                  case "MMM":
                    return u[f];
                  case "MMMM":
                    return p[f];
                  case "Y":
                    return parseInt(String(b).slice(-2));
                  case "YY":
                    return o(String(b).slice(-2), 2);
                  case "YYY":
                    return o(String(b).slice(-3), 3);
                  case "YYYY":
                    return o(b, 4);
                  case "h":
                    return M % 12 || 12;
                  case "hh":
                    return o(M % 12 || 12, 2);
                  case "H":
                    return M;
                  case "HH":
                    return o(M, 2);
                  case "m":
                    return P;
                  case "mm":
                    return o(P, 2);
                  case "s":
                    return S;
                  case "ss":
                    return o(S, 2);
                  case "f":
                    return String(T).slice(0, 1);
                  case "ff":
                    return o(String(T).slice(0, 2), 2);
                  case "fff":
                    return o(String(T).slice(0, 3), 3);
                  case "t":
                    return M < 12 ? "a" : "p";
                  case "tt":
                    return M < 12 ? "am" : "pm";
                  case "T":
                    return M < 12 ? "A" : "P";
                  case "TT":
                    return M < 12 ? "AM" : "PM";
                  case "K":
                    return m
                      ? "UTC"
                      : (String(l).match(s) || [""]).pop().replace(r, "");
                  case "z":
                    return (C > 0 ? "-" : "+") + Math.floor(Math.abs(C) / 60);
                  case "zz":
                    return (
                      (C > 0 ? "-" : "+") + o(Math.floor(Math.abs(C) / 60), 2)
                    );
                  case "zzz":
                    return (
                      (C > 0 ? "-" : "+") +
                      o(Math.floor(Math.abs(C) / 60), 2) +
                      o(Math.abs(C) % 60, 2)
                    );
                  default:
                    return e.slice(1, e.length - 1);
                }
              });
            };
          }
          function M(e, t, i) {
            if (null === e) return "";
            e = Number(e);
            var a = e < 0;
            a && (e *= -1);
            var n = i ? i.decimalSeparator : ".",
              s = i ? i.digitGroupSeparator : ",",
              r = "";
            t = String(t);
            var l = 1,
              h = "",
              d = "",
              c = -1,
              p = [],
              x = [],
              u = 0,
              m = 0,
              v = 0,
              g = !1,
              y = 0;
            d = t.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|‰|./g);
            for (var f = null, b = 0; d && b < d.length; b++)
              if ("." === (f = d[b]) && c < 0) c = b;
              else {
                if ("%" === f) l *= 100;
                else {
                  if ("‰" === f) {
                    l *= 1e3;
                    continue;
                  }
                  if ("," === f[0] && "." === f[f.length - 1]) {
                    (l /= Math.pow(1e3, f.length - 1)), (c = b + f.length - 1);
                    continue;
                  }
                  ("E" !== f[0] && "e" !== f[0]) ||
                    "0" !== f[f.length - 1] ||
                    (g = !0);
                }
                c < 0
                  ? (p.push(f), "#" === f || "0" === f ? u++ : "," === f && v++)
                  : (x.push(f), ("#" !== f && "0" !== f) || m++);
              }
            if (g) {
              var M = Math.floor(e);
              (y = (0 === M ? "" : String(M)).length - u),
                (l /= Math.pow(10, y));
            }
            (e *= l), c < 0 && (c = b), (r = e.toFixed(m));
            var P = r.split("."),
              S = (P[0] + "").split(""),
              T = (P[1] + "").split("");
            S && "0" === S[0] && S.shift();
            for (var C = 0, k = 0, w = 0, _ = 0, A = 0; p.length > 0; )
              if ("#" === (f = p.pop()) || "0" === f)
                if (++C === u) {
                  var L = S;
                  if (((S = []), "0" === f))
                    for (var I = u - k - (L ? L.length : 0); I > 0; )
                      L.unshift("0"), I--;
                  for (; L.length > 0; )
                    (h = L.pop() + h),
                      ++A % _ == 0 && w === v && L.length > 0 && (h = s + h);
                  a && (h = "-" + h);
                } else
                  S.length > 0
                    ? ((h = S.pop() + h), k++, A++)
                    : "0" === f && ((h = "0" + h), k++, A++),
                    A % _ == 0 && w === v && S.length > 0 && (h = s + h);
              else
                ("E" !== f[0] && "e" !== f[0]) ||
                "0" !== f[f.length - 1] ||
                !/[eE][+-]*[0]+/.test(f)
                  ? "," === f
                    ? (w++, (_ = A), (A = 0), S.length > 0 && (h = s + h))
                    : (h =
                        f.length > 1 &&
                        (('"' === f[0] && '"' === f[f.length - 1]) ||
                          ("'" === f[0] && "'" === f[f.length - 1]))
                          ? f.slice(1, f.length - 1) + h
                          : f + h)
                  : ((f =
                      y < 0
                        ? f.replace("+", "").replace("-", "")
                        : f.replace("-", "")),
                    (h += f.replace(/[0]+/, function (e) {
                      return o(y, e.length);
                    })));
            for (var B = "", F = !1; x.length > 0; )
              (f = x.shift()),
                "#" === f || "0" === f
                  ? T.length > 0 && 0 !== Number(T.join(""))
                    ? ((B += T.shift()), (F = !0))
                    : "0" === f && ((B += "0"), (F = !0))
                  : f.length > 1 &&
                    (('"' === f[0] && '"' === f[f.length - 1]) ||
                      ("'" === f[0] && "'" === f[f.length - 1]))
                  ? (B += f.slice(1, f.length - 1))
                  : ("E" !== f[0] && "e" !== f[0]) ||
                    "0" !== f[f.length - 1] ||
                    !/[eE][+-]*[0]+/.test(f)
                  ? (B += f)
                  : ((f =
                      y < 0
                        ? f.replace("+", "").replace("-", "")
                        : f.replace("-", "")),
                    (B += f.replace(/[0]+/, function (e) {
                      return o(y, e.length);
                    })));
            return (h += (F ? n : "") + B);
          }
          function P(e, t, i) {
            (e *= H), (t *= H);
            for (
              var a = i.getImageData(e, t, 2, 2).data, n = !0, s = 0;
              s < 4;
              s++
            )
              if (
                (a[s] !== a[s + 4]) |
                (a[s] !== a[s + 8]) |
                (a[s] !== a[s + 12])
              ) {
                n = !1;
                break;
              }
            return n ? x(a[0], a[1], a[2]) : 0;
          }
          function S(e) {
            var t = 0,
              i = 0;
            return (
              (e = e || window.event),
              e.offsetX || 0 === e.offsetX
                ? ((t = e.offsetX), (i = e.offsetY))
                : e.layerX || 0 == e.layerX
                ? ((t = e.layerX), (i = e.layerY))
                : ((t = e.pageX - e.target.offsetLeft),
                  (i = e.pageY - e.target.offsetTop)),
              { x: t, y: i }
            );
          }
          function T(e, t, i) {
            var a = "",
              n = e ? e + "FontStyle" : "fontStyle",
              s = e ? e + "FontWeight" : "fontWeight",
              r = e ? e + "FontSize" : "fontSize",
              o = e ? e + "FontFamily" : "fontFamily";
            (a += t[n] ? t[n] + " " : i && i[n] ? i[n] + " " : ""),
              (a += t[s] ? t[s] + " " : i && i[s] ? i[s] + " " : ""),
              (a += t[r] ? t[r] + "px " : i && i[r] ? i[r] + "px " : "");
            var l = t[o] ? t[o] + "" : i && i[o] ? i[o] + "" : "";
            if (!j && l) {
              var h = l.split(",")[0];
              "'" !== h[0] && '"' !== h[0] && (h = "'" + h + "'"), (a += h);
            } else a += l;
            return a;
          }
          function C(e, t, i) {
            return e in t ? t[e] : i[e];
          }
          function k() {
            return E ? W / R : 1;
          }
          function w(e, t, i) {
            if (j && E) {
              var a = e.getContext("2d");
              (R =
                a.webkitBackingStorePixelRatio ||
                a.mozBackingStorePixelRatio ||
                a.msBackingStorePixelRatio ||
                a.oBackingStorePixelRatio ||
                a.backingStorePixelRatio ||
                1),
                (H = k()),
                (e.width = t * H),
                (e.height = i * H),
                W !== R &&
                  ((e.style.width = t + "px"),
                  (e.style.height = i + "px"),
                  a.scale(H, H));
            } else (e.width = t), (e.height = i);
          }
          function _(e, t) {
            var i = document.createElement("canvas");
            return (
              i.setAttribute("class", "canvasjs-chart-canvas"),
              w(i, e, t),
              j ||
                "undefined" == typeof G_vmlCanvasManager ||
                G_vmlCanvasManager.initElement(i),
              i
            );
          }
          function A(e, t, i) {
            if (e && t && i) {
              var a = i + "." + ("jpeg" === t ? "jpg" : t),
                n = "image/" + t,
                s = e.toDataURL(n),
                r = !1,
                o = document.createElement("a");
              (o.download = a), (o.href = s), (o.target = "_blank");
              if ("undefined" != typeof Blob && new Blob()) {
                for (
                  var l = s.replace(/^data:[a-z/]*;base64,/, ""),
                    h = atob(l),
                    d = new ArrayBuffer(h.length),
                    c = new Uint8Array(d),
                    p = 0;
                  p < h.length;
                  p++
                )
                  c[p] = h.charCodeAt(p);
                var x = new Blob([d], { type: "image/" + t });
                try {
                  window.navigator.msSaveBlob(x, a), (r = !0);
                } catch (e) {
                  (o.dataset.downloadurl = [n, o.download, o.href].join(":")),
                    (o.href = window.URL.createObjectURL(x));
                }
              }
              if (!r)
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
                    o.dispatchEvent
                      ? o.dispatchEvent(event)
                      : o.fireEvent && o.fireEvent("onclick");
                } catch (e) {
                  var u = window.open();
                  u.document.write(
                    "<img src='" +
                      s +
                      "'></img><div>Please right click on the image and save it to your device</div>"
                  ),
                    u.document.close();
                }
            }
          }
          function L(e, t, i) {
            t.getAttribute("state") !== i &&
              (t.setAttribute("state", i),
              t.setAttribute("type", "button"),
              (t.style.position = "relative"),
              (t.style.margin = "0px 0px 0px 0px"),
              (t.style.padding = "3px 4px 0px 4px"),
              (t.style.cssFloat = "left"),
              t.setAttribute("title", e._cultureInfo[i + "Text"]),
              (t.innerHTML =
                "<img style='height:16px;' src='" +
                V[i].image +
                "' alt='" +
                e._cultureInfo[i + "Text"] +
                "' />"));
          }
          function I() {
            for (var e = null, t = 0; t < arguments.length; t++)
              (e = arguments[t]), e.style && (e.style.display = "inline");
          }
          function B() {
            for (var e = null, t = 0; t < arguments.length; t++)
              (e = arguments[t]) && e.style && (e.style.display = "none");
          }
          function F(e, t) {
            for (var i = [], a = 0; a < e.length; a++)
              if (0 != a) {
                var n, s, r;
                (r = a - 1),
                  (n = 0 === r ? 0 : r - 1),
                  (s = r === e.length - 1 ? r : r + 1);
                var o = { x: (e[s].x - e[n].x) / t, y: (e[s].y - e[n].y) / t },
                  l = { x: e[r].x + o.x / 3, y: e[r].y + o.y / 3 };
                (i[i.length] = l),
                  (r = a),
                  (n = 0 === r ? 0 : r - 1),
                  (s = r === e.length - 1 ? r : r + 1);
                var h = { x: (e[s].x - e[n].x) / t, y: (e[s].y - e[n].y) / t },
                  d = { x: e[r].x - h.x / 3, y: e[r].y - h.y / 3 };
                (i[i.length] = d), (i[i.length] = e[a]);
              } else i.push(e[0]);
            return i;
          }
          function z(e, t) {
            if (null === e || void 0 === e) return t;
            var i =
              parseFloat(e.toString()) *
              (e.toString().indexOf("%") >= 0 ? t / 100 : 1);
            return !isNaN(i) && i <= t && i >= 0 ? i : t;
          }
          function D(e, t, i, a, n, s, r, o, l, h, d, c, p) {
            void 0 === p && (p = 1), (r = r || 0), (o = o || "black");
            var x = t,
              u = a,
              m = i,
              v = n;
            if (a - t > 15 && n - i > 15) var g = 8;
            else var g = 0.35 * Math.min(a - t, n - i);
            var y = "rgba(255, 255, 255, .4)",
              f = "rgba(255, 255, 255, 0.1)",
              b = s;
            if (
              (e.beginPath(),
              e.moveTo(t, i),
              e.save(),
              (e.fillStyle = b),
              (e.globalAlpha = p),
              e.fillRect(t, i, a - t, n - i),
              (e.globalAlpha = 1),
              r > 0)
            ) {
              var M = r % 2 == 0 ? 0 : 0.5;
              e.beginPath(),
                (e.lineWidth = r),
                (e.strokeStyle = o),
                e.moveTo(t, i),
                e.rect(t - M, i - M, a - t + 2 * M, n - i + 2 * M),
                e.stroke();
            }
            if ((e.restore(), !0 === l)) {
              e.save(),
                e.beginPath(),
                e.moveTo(t, i),
                e.lineTo(t + g, i + g),
                e.lineTo(a - g, i + g),
                e.lineTo(a, i),
                e.closePath();
              var P = e.createLinearGradient(
                (a + t) / 2,
                m + g,
                (a + t) / 2,
                m
              );
              P.addColorStop(0, b),
                P.addColorStop(1, y),
                (e.fillStyle = P),
                e.fill(),
                e.restore();
            }
            if (!0 === h) {
              e.save(),
                e.beginPath(),
                e.moveTo(t, n),
                e.lineTo(t + g, n - g),
                e.lineTo(a - g, n - g),
                e.lineTo(a, n),
                e.closePath();
              var P = e.createLinearGradient(
                (a + t) / 2,
                v - g,
                (a + t) / 2,
                v
              );
              P.addColorStop(0, b),
                P.addColorStop(1, y),
                (e.fillStyle = P),
                e.fill(),
                e.restore();
            }
            if (!0 === d) {
              e.save(),
                e.beginPath(),
                e.moveTo(t, i),
                e.lineTo(t + g, i + g),
                e.lineTo(t + g, n - g),
                e.lineTo(t, n),
                e.closePath();
              var P = e.createLinearGradient(
                x + g,
                (n + i) / 2,
                x,
                (n + i) / 2
              );
              P.addColorStop(0, b),
                P.addColorStop(1, f),
                (e.fillStyle = P),
                e.fill(),
                e.restore();
            }
            if (!0 === c) {
              e.save(),
                e.beginPath(),
                e.moveTo(a, i),
                e.lineTo(a - g, i + g),
                e.lineTo(a - g, n - g),
                e.lineTo(a, n);
              var P = e.createLinearGradient(
                u - g,
                (n + i) / 2,
                u,
                (n + i) / 2
              );
              P.addColorStop(0, b),
                P.addColorStop(1, f),
                (e.fillStyle = P),
                P.addColorStop(0, b),
                P.addColorStop(1, f),
                (e.fillStyle = P),
                e.fill(),
                e.closePath(),
                e.restore();
            }
          }
          function X(e, t, i, a, n, s, r, o, l) {
            if ((void 0 === o && (o = 1), !j)) {
              var h = Number((r % (2 * Math.PI)).toFixed(8));
              Number((s % (2 * Math.PI)).toFixed(8)) === h && (r -= 1e-4);
            }
            e.save(),
              (e.globalAlpha = o),
              "pie" === n
                ? (e.beginPath(),
                  e.moveTo(t.x, t.y),
                  e.arc(t.x, t.y, i, s, r, !1),
                  (e.fillStyle = a),
                  (e.strokeStyle = "white"),
                  (e.lineWidth = 2),
                  e.closePath(),
                  e.fill())
                : "doughnut" === n &&
                  (e.beginPath(),
                  e.arc(t.x, t.y, i, s, r, !1),
                  e.arc(t.x, t.y, l * i, r, s, !0),
                  e.closePath(),
                  (e.fillStyle = a),
                  (e.strokeStyle = "white"),
                  (e.lineWidth = 2),
                  e.fill()),
              (e.globalAlpha = 1),
              e.restore();
          }
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.extend = a),
            (i.inherit = n),
            (i.addToDateTime = s),
            (i.convertToNumber = r),
            (i.pad = o),
            (i.trimString = l),
            (i.extendCtx = h),
            (i.compareNumbers = d),
            (i.compareDataPointX = c),
            (i.intToHexColorString = p),
            (i.RGBToInt = x),
            (i.intToRGB = u),
            (i.arrayIndexOf = m),
            (i.addArrayIndexOf = v),
            (i.getFontHeightInPixels = g),
            (i.getLineDashArray = y),
            (i.addEvent = f),
            (i.dateFormat = b),
            (i.numberFormat = M),
            (i.getObjectId = P),
            (i.getMouseCoordinates = S),
            (i.getFontString = T),
            (i.getProperty = C),
            (i.getDevicePixelBackingStoreRatio = k),
            (i.setCanvasSize = w),
            (i.createCanvas = _),
            (i.exportCanvas = A),
            (i.setButtonState = L),
            (i.show = I),
            (i.hide = B),
            (i.getBezierPoints = F),
            (i.convertPercentToValue = z),
            (i.drawRect = D),
            (i.drawSegment = X);
          var Y = {},
            O = null,
            E = !0,
            W = window.devicePixelRatio || 1,
            R = 1,
            H = k(),
            V = {
              reset: {
                image:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII=",
              },
              pan: {
                image:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII=",
              },
              zoom: {
                image:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII=",
              },
              menu: {
                image:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC",
              },
            },
            j = (i.isCanvasSupported =
              !!document.createElement("canvas").getContext);
        },
        {},
      ],
      40: [
        function (e, t, i) {
          "use strict";
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function n(e, t) {
            var i = this,
              a = new r.default(e, t, this);
            (this.render = function () {
              return a.render(i.options);
            }),
              (this.options = a._options);
          }
          Object.defineProperty(i, "__esModule", { value: !0 }),
            (i.formatDate =
              i.formatNumber =
              i.addCultureInfo =
              i.addColorSet =
                void 0),
            (i.Chart = n);
          var s = e("../core/charts"),
            r = a(s),
            o = e("../core/culture_info"),
            l = a(o),
            h = e("../constants/themes"),
            d = e("../constants/culture"),
            c = e("../helpers/utils");
          (i.addColorSet = function (e, t) {
            h.colorSets[e] = t;
          }),
            (i.addCultureInfo = function (e, t) {
              d.cultures[e] = t;
            }),
            (i.formatNumber = function (e, t, i) {
              if (((i = i || "en"), (t = t || "#,##0.##"), !d.cultures[i]))
                throw "Unknown Culture Name";
              (0, c.numberFormat)(e, t, new l.default(i));
            }),
            (i.formatDate = function (e, t, i) {
              if (((i = i || "en"), (t = t || "DD MMM YYYY"), !d.cultures[i]))
                throw "Unknown Culture Name";
              (0, c.dateFormat)(e, t, new l.default(i));
            });
          n.version = "v1.8.2";
        },
        {
          "../constants/culture": 22,
          "../constants/themes": 24,
          "../core/charts": 28,
          "../core/culture_info": 29,
          "../helpers/utils": 39,
        },
      ],
    },
    {},
    [40]
  )(40);
});
