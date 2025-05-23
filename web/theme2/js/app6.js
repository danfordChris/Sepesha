!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (e.document)
            return t(e);
        throw new Error("jQuery requires a window with a document")
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(_, z) {
    "use strict";
    function v(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
    function m(e) {
        return null != e && e === e.window
    }
    var t = []
      , H = Object.getPrototypeOf
      , a = t.slice
      , I = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , Y = t.push
      , R = t.indexOf
      , q = {}
      , W = q.toString
      , F = q.hasOwnProperty
      , V = F.toString
      , B = V.call(Object)
      , g = {}
      , k = _.document
      , U = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function $(e, t, n) {
        var i, r, o = (n = n || k).createElement("script");
        if (o.text = e,
        t)
            for (i in U)
                (r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function f(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? q[W.call(e)] || "object" : typeof e
    }
    var e = "3.6.3"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    };
    function G(e) {
        var t = !!e && "length"in e && e.length
          , n = f(e);
        return !v(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: e,
        constructor: S,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = S.merge(this.constructor(), e);
            return e.prevObject = this,
            e
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Y,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, i, r, o = arguments[0] || {}, s = 1, a = arguments.length, l = !1;
        for ("boolean" == typeof o && (l = o,
        o = arguments[s] || {},
        s++),
        "object" == typeof o || v(o) || (o = {}),
        s === a && (o = this,
        s--); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = e[t],
                    "__proto__" !== t && o !== n && (l && n && (S.isPlainObject(n) || (i = Array.isArray(n))) ? (r = o[t],
                    r = i && !Array.isArray(r) ? [] : i || S.isPlainObject(r) ? r : {},
                    i = !1,
                    o[t] = S.extend(l, r, n)) : void 0 !== n && (o[t] = n));
        return o
    }
    ,
    S.extend({
        expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== W.call(e) || (e = H(e)) && ("function" != typeof (e = F.call(e, "constructor") && e.constructor) || V.call(e) !== B))
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            $(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (G(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (G(Object(e)) ? S.merge(t, "string" == typeof e ? [e] : e) : Y.call(t, e)),
            t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : R.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                !t(e[r], r) != s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0, s = [];
            if (G(e))
                for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && s.push(r);
            else
                for (o in e)
                    null != (r = t(e[o], o, n)) && s.push(r);
            return I(s)
        },
        guid: 1,
        support: g
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        q["[object " + t + "]"] = t.toLowerCase()
    });
    function i(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && S(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
    function X(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var e = function(z) {
        function h(e, t) {
            return e = "0x" + e.slice(1) - 65536,
            t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        }
        function H(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }
        function I() {
            _()
        }
        var e, d, b, o, Y, p, R, q, w, l, c, _, k, n, S, f, i, r, m, T = "sizzle" + +new Date, u = z.document, M = 0, W = 0, F = D(), V = D(), B = D(), g = D(), U = function(e, t) {
            return e === t && (c = !0),
            0
        }, $ = {}.hasOwnProperty, t = [], G = t.pop, X = t.push, E = t.push, Z = t.slice, v = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, Q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", s = "[\\x20\\t\\r\\n\\f]", a = "(?:\\\\[\\da-fA-F]{1,6}" + s + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", K = "\\[" + s + "*(" + a + ")(?:" + s + "*([*^$|!~]?=)" + s + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + a + "))|)" + s + "*\\]", J = ":(" + a + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + K + ")*)|.*)\\)|)", ee = new RegExp(s + "+","g"), y = new RegExp("^" + s + "+|((?:^|[^\\\\])(?:\\\\.)*)" + s + "+$","g"), te = new RegExp("^" + s + "*," + s + "*"), ne = new RegExp("^" + s + "*([>+~]|" + s + ")" + s + "*"), ie = new RegExp(s + "|>"), re = new RegExp(J), oe = new RegExp("^" + a + "$"), x = {
            ID: new RegExp("^#(" + a + ")"),
            CLASS: new RegExp("^\\.(" + a + ")"),
            TAG: new RegExp("^(" + a + "|[*])"),
            ATTR: new RegExp("^" + K),
            PSEUDO: new RegExp("^" + J),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + s + "*(even|odd|(([+-]|)(\\d*)n|)" + s + "*(?:([+-]|)" + s + "*(\\d+)|))" + s + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Q + ")$","i"),
            needsContext: new RegExp("^" + s + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + s + "*((?:-\\d)?\\d*)" + s + "*\\)|)(?=[^-]|$)","i")
        }, se = /HTML$/i, ae = /^(?:input|select|textarea|button)$/i, le = /^h\d$/i, C = /^[^{]+\{\s*\[native \w/, ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ue = /[+~]/, A = new RegExp("\\\\[\\da-fA-F]{1,6}" + s + "?|\\\\([^\\r\\n\\f])","g"), he = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, de = ve(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            E.apply(t = Z.call(u.childNodes), u.childNodes),
            t[u.childNodes.length].nodeType
        } catch (e) {
            E = {
                apply: t.length ? function(e, t) {
                    X.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function O(e, t, n, i) {
            var r, o, s, a, l, c, u = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!i && (_(t),
            t = t || k,
            S)) {
                if (11 !== h && (a = ce.exec(e)))
                    if (r = a[1]) {
                        if (9 === h) {
                            if (!(c = t.getElementById(r)))
                                return n;
                            if (c.id === r)
                                return n.push(c),
                                n
                        } else if (u && (c = u.getElementById(r)) && m(t, c) && c.id === r)
                            return n.push(c),
                            n
                    } else {
                        if (a[2])
                            return E.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((r = a[3]) && d.getElementsByClassName && t.getElementsByClassName)
                            return E.apply(n, t.getElementsByClassName(r)),
                            n
                    }
                if (d.qsa && !g[e + " "] && (!f || !f.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                    if (c = e,
                    u = t,
                    1 === h && (ie.test(e) || ne.test(e))) {
                        for ((u = ue.test(e) && ge(t.parentNode) || t) === t && d.scope || ((s = t.getAttribute("id")) ? s = s.replace(he, H) : t.setAttribute("id", s = T)),
                        o = (l = p(e)).length; o--; )
                            l[o] = (s ? "#" + s : ":scope") + " " + j(l[o]);
                        c = l.join(",")
                    }
                    try {
                        if (d.cssSupportsSelector && !CSS.supports("selector(:is(" + c + "))"))
                            throw new Error;
                        return E.apply(n, u.querySelectorAll(c)),
                        n
                    } catch (t) {
                        g(e, !0)
                    } finally {
                        s === T && t.removeAttribute("id")
                    }
                }
            }
            return q(e.replace(y, "$1"), t, n, i)
        }
        function D() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > b.cacheLength && delete e[i.shift()],
                e[t + " "] = n
            }
        }
        function L(e) {
            return e[T] = !0,
            e
        }
        function N(e) {
            var t = k.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t)
            }
        }
        function pe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                b.attrHandle[n[i]] = t
        }
        function fe(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function me(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && de(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function P(s) {
            return L(function(o) {
                return o = +o,
                L(function(e, t) {
                    for (var n, i = s([], e.length, o), r = i.length; r--; )
                        e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in d = O.support = {},
        Y = O.isXML = function(e) {
            var t = e && e.namespaceURI
              , e = e && (e.ownerDocument || e).documentElement;
            return !se.test(t || e && e.nodeName || "HTML")
        }
        ,
        _ = O.setDocument = function(e) {
            var e = e ? e.ownerDocument || e : u;
            return e != k && 9 === e.nodeType && e.documentElement && (n = (k = e).documentElement,
            S = !Y(k),
            u != k && (e = k.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", I, !1) : e.attachEvent && e.attachEvent("onunload", I)),
            d.scope = N(function(e) {
                return n.appendChild(e).appendChild(k.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.cssSupportsSelector = N(function() {
                return CSS.supports("selector(*)") && k.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
            }),
            d.attributes = N(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = N(function(e) {
                return e.appendChild(k.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = C.test(k.getElementsByClassName),
            d.getById = N(function(e) {
                return n.appendChild(e).id = T,
                !k.getElementsByName || !k.getElementsByName(T).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(A, h);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && S)
                    return (t = t.getElementById(e)) ? [t] : []
            }
            ) : (b.filter.ID = function(e) {
                var t = e.replace(A, h);
                return function(e) {
                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && S) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (r = t.getElementsByName(e),
                        i = 0; o = r[i++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" !== e)
                    return o;
                for (; n = o[r++]; )
                    1 === n.nodeType && i.push(n);
                return i
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && S)
                    return t.getElementsByClassName(e)
            }
            ,
            i = [],
            f = [],
            (d.qsa = C.test(k.querySelectorAll)) && (N(function(e) {
                var t;
                n.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && f.push("[*^$]=" + s + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || f.push("\\[" + s + "*(?:value|" + Q + ")"),
                e.querySelectorAll("[id~=" + T + "-]").length || f.push("~="),
                (t = k.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || f.push("\\[" + s + "*name" + s + "*=" + s + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || f.push(":checked"),
                e.querySelectorAll("a#" + T + "+*").length || f.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                f.push("[\\r\\n\\f]")
            }),
            N(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = k.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && f.push("name" + s + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && f.push(":enabled", ":disabled"),
                n.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && f.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                f.push(",.*:")
            })),
            (d.matchesSelector = C.test(r = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && N(function(e) {
                d.disconnectedMatch = r.call(e, "*"),
                r.call(e, "[s!='']:x"),
                i.push("!=", J)
            }),
            d.cssSupportsSelector || f.push(":has"),
            f = f.length && new RegExp(f.join("|")),
            i = i.length && new RegExp(i.join("|")),
            e = C.test(n.compareDocumentPosition),
            m = e || C.test(n.contains) ? function(e, t) {
                var n = 9 === e.nodeType && e.documentElement || e
                  , t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            U = e ? function(e, t) {
                var n;
                return e === t ? (c = !0,
                0) : !e.compareDocumentPosition - !t.compareDocumentPosition || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == k || e.ownerDocument == u && m(u, e) ? -1 : t == k || t.ownerDocument == u && m(u, t) ? 1 : l ? v(l, e) - v(l, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], a = [t];
                if (!r || !o)
                    return e == k ? -1 : t == k ? 1 : r ? -1 : o ? 1 : l ? v(l, e) - v(l, t) : 0;
                if (r === o)
                    return fe(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? fe(s[i], a[i]) : s[i] == u ? -1 : a[i] == u ? 1 : 0
            }
            ),
            k
        }
        ,
        O.matches = function(e, t) {
            return O(e, null, null, t)
        }
        ,
        O.matchesSelector = function(e, t) {
            if (_(e),
            d.matchesSelector && S && !g[t + " "] && (!i || !i.test(t)) && (!f || !f.test(t)))
                try {
                    var n = r.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    g(t, !0)
                }
            return 0 < O(t, k, null, [e]).length
        }
        ,
        O.contains = function(e, t) {
            return (e.ownerDocument || e) != k && _(e),
            m(e, t)
        }
        ,
        O.attr = function(e, t) {
            (e.ownerDocument || e) != k && _(e);
            var n = b.attrHandle[t.toLowerCase()]
              , n = n && $.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
            return void 0 !== n ? n : d.attributes || !S ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        ,
        O.escape = function(e) {
            return (e + "").replace(he, H)
        }
        ,
        O.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        O.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (c = !d.detectDuplicates,
            l = !d.sortStable && e.slice(0),
            e.sort(U),
            c) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return l = null,
            e
        }
        ,
        o = O.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += o(t);
            return n
        }
        ,
        (b = O.selectors = {
            cacheLength: 50,
            createPseudo: L,
            match: x,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(A, h),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(A, h),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || O.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && O.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return x.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && re.test(n) && (t = (t = p(n, !0)) && n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(A, h).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = F[e + " "];
                    return t || (t = new RegExp("(^|" + s + ")" + e + "(" + s + "|$)")) && F(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(e) {
                        e = O.attr(e, t);
                        return null == e ? "!=" === n : !n || (e += "",
                        "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(ee, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(f, e, t, m, g) {
                    var y = "nth" !== f.slice(0, 3)
                      , v = "last" !== f.slice(-4)
                      , x = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var i, r, o, s, a, l, c = y != v ? "nextSibling" : "previousSibling", u = e.parentNode, h = x && e.nodeName.toLowerCase(), d = !n && !x, p = !1;
                        if (u) {
                            if (y) {
                                for (; c; ) {
                                    for (s = e; s = s[c]; )
                                        if (x ? s.nodeName.toLowerCase() === h : 1 === s.nodeType)
                                            return !1;
                                    l = c = "only" === f && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [v ? u.firstChild : u.lastChild],
                            v && d) {
                                for (p = (a = (i = (r = (o = (s = u)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[f] || [])[0] === M && i[1]) && i[2],
                                s = a && u.childNodes[a]; s = ++a && s && s[c] || (p = a = 0,
                                l.pop()); )
                                    if (1 === s.nodeType && ++p && s === e) {
                                        r[f] = [M, a, p];
                                        break
                                    }
                            } else if (!1 === (p = d ? a = (i = (r = (o = (s = e)[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[f] || [])[0] === M && i[1] : p))
                                for (; (s = ++a && s && s[c] || (p = a = 0,
                                l.pop())) && ((x ? s.nodeName.toLowerCase() !== h : 1 !== s.nodeType) || !++p || (d && ((r = (o = s[T] || (s[T] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[f] = [M, p]),
                                s !== e)); )
                                    ;
                            return (p -= g) === m || p % m == 0 && 0 <= p / m
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || O.error("unsupported pseudo: " + e);
                    return s[T] ? s(o) : 1 < s.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? L(function(e, t) {
                        for (var n, i = s(e, o), r = i.length; r--; )
                            e[n = v(e, i[r])] = !(t[n] = i[r])
                    }) : function(e) {
                        return s(e, 0, t)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: L(function(e) {
                    var i = []
                      , r = []
                      , a = R(e.replace(y, "$1"));
                    return a[T] ? L(function(e, t, n, i) {
                        for (var r, o = a(e, null, i, []), s = e.length; s--; )
                            (r = o[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, t, n) {
                        return i[0] = e,
                        a(i, null, n, r),
                        i[0] = null,
                        !r.pop()
                    }
                }),
                has: L(function(t) {
                    return function(e) {
                        return 0 < O(t, e).length
                    }
                }),
                contains: L(function(t) {
                    return t = t.replace(A, h),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: L(function(n) {
                    return oe.test(n || "") || O.error("unsupported lang: " + n),
                    n = n.replace(A, h).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = z.location && z.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === n
                },
                focus: function(e) {
                    return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return le.test(e.nodeName)
                },
                input: function(e) {
                    return ae.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: P(function() {
                    return [0]
                }),
                last: P(function(e, t) {
                    return [t - 1]
                }),
                eq: P(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: P(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: P(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: P(function(e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }),
                gt: P(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);
        function ye() {}
        function j(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function ve(s, e, t) {
            var a = e.dir
              , l = e.next
              , c = l || a
              , u = t && "parentNode" === c
              , h = W++;
            return e.first ? function(e, t, n) {
                for (; e = e[a]; )
                    if (1 === e.nodeType || u)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var i, r, o = [M, h];
                if (n) {
                    for (; e = e[a]; )
                        if ((1 === e.nodeType || u) && s(e, t, n))
                            return !0
                } else
                    for (; e = e[a]; )
                        if (1 === e.nodeType || u)
                            if (r = (r = e[T] || (e[T] = {}))[e.uniqueID] || (r[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[a] || e;
                            else {
                                if ((i = r[c]) && i[0] === M && i[1] === h)
                                    return o[2] = i[2];
                                if ((r[c] = o)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function xe(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--; )
                    if (!r[i](e, t, n))
                        return !1;
                return !0
            }
            : r[0]
        }
        function be(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                !(o = e[a]) || n && !n(o, i, r) || (s.push(o),
                c && t.push(a));
            return s
        }
        function we(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, l = ve(function(e) {
                return e === i
            }, s, !0), c = ve(function(e) {
                return -1 < v(i, e)
            }, s, !0), u = [function(e, t, n) {
                e = !o && (n || t !== w) || ((i = t).nodeType ? l : c)(e, t, n);
                return i = null,
                e
            }
            ]; a < r; a++)
                if (t = b.relative[e[a].type])
                    u = [ve(xe(u), t)];
                else {
                    if ((t = b.filter[e[a].type].apply(null, e[a].matches))[T]) {
                        for (n = ++a; n < r && !b.relative[e[n].type]; n++)
                            ;
                        return function e(p, f, m, g, y, t) {
                            return g && !g[T] && (g = e(g)),
                            y && !y[T] && (y = e(y, t)),
                            L(function(e, t, n, i) {
                                var r, o, s, a = [], l = [], c = t.length, u = e || function(e, t, n) {
                                    for (var i = 0, r = t.length; i < r; i++)
                                        O(e, t[i], n);
                                    return n
                                }(f || "*", n.nodeType ? [n] : n, []), h = !p || !e && f ? u : be(u, a, p, n, i), d = m ? y || (e ? p : c || g) ? [] : t : h;
                                if (m && m(h, d, n, i),
                                g)
                                    for (r = be(d, l),
                                    g(r, [], n, i),
                                    o = r.length; o--; )
                                        (s = r[o]) && (d[l[o]] = !(h[l[o]] = s));
                                if (e) {
                                    if (y || p) {
                                        if (y) {
                                            for (r = [],
                                            o = d.length; o--; )
                                                (s = d[o]) && r.push(h[o] = s);
                                            y(null, d = [], r, i)
                                        }
                                        for (o = d.length; o--; )
                                            (s = d[o]) && -1 < (r = y ? v(e, s) : a[o]) && (e[r] = !(t[r] = s))
                                    }
                                } else
                                    d = be(d === t ? d.splice(c, d.length) : d),
                                    y ? y(null, t, d, i) : E.apply(t, d)
                            })
                        }(1 < a && xe(u), 1 < a && j(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(y, "$1"), t, a < n && we(e.slice(a, n)), n < r && we(e = e.slice(n)), n < r && j(e))
                    }
                    u.push(t)
                }
            return xe(u)
        }
        return ye.prototype = b.filters = b.pseudos,
        b.setFilters = new ye,
        p = O.tokenize = function(e, t) {
            var n, i, r, o, s, a, l, c = V[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            a = [],
            l = b.preFilter; s; ) {
                for (o in n && !(i = te.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                a.push(r = [])),
                n = !1,
                (i = ne.exec(s)) && (n = i.shift(),
                r.push({
                    value: n,
                    type: i[0].replace(y, " ")
                }),
                s = s.slice(n.length)),
                b.filter)
                    !(i = x[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(),
                    r.push({
                        value: n,
                        type: o,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? O.error(e) : V(e, a).slice(0)
        }
        ,
        R = O.compile = function(e, t) {
            var n, g, y, v, x, i, r = [], o = [], s = B[e + " "];
            if (!s) {
                for (n = (t = t || p(e)).length; n--; )
                    ((s = we(t[n]))[T] ? r : o).push(s);
                (s = B(e, (v = 0 < (y = r).length,
                x = 0 < (g = o).length,
                i = function(e, t, n, i, r) {
                    var o, s, a, l = 0, c = "0", u = e && [], h = [], d = w, p = e || x && b.find.TAG("*", r), f = M += null == d ? 1 : Math.random() || .1, m = p.length;
                    for (r && (w = t == k || t || r); c !== m && null != (o = p[c]); c++) {
                        if (x && o) {
                            for (s = 0,
                            t || o.ownerDocument == k || (_(o),
                            n = !S); a = g[s++]; )
                                if (a(o, t || k, n)) {
                                    i.push(o);
                                    break
                                }
                            r && (M = f)
                        }
                        v && ((o = !a && o) && l--,
                        e) && u.push(o)
                    }
                    if (l += c,
                    v && c !== l) {
                        for (s = 0; a = y[s++]; )
                            a(u, h, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--; )
                                    u[c] || h[c] || (h[c] = G.call(i));
                            h = be(h)
                        }
                        E.apply(i, h),
                        r && !e && 0 < h.length && 1 < l + y.length && O.uniqueSort(i)
                    }
                    return r && (M = f,
                    w = d),
                    u
                }
                ,
                v ? L(i) : i))).selector = e
            }
            return s
        }
        ,
        q = O.select = function(e, t, n, i) {
            var r, o, s, a, l, c = "function" == typeof e && e, u = !i && p(e = c.selector || e);
            if (n = n || [],
            1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && S && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(A, h), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = x.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
                !b.relative[a = s.type]); )
                    if ((l = b.find[a]) && (i = l(s.matches[0].replace(A, h), ue.test(o[0].type) && ge(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        e = i.length && j(o))
                            break;
                        return E.apply(n, i),
                        n
                    }
            }
            return (c || R(e, u))(i, t, !S, n, !t || ue.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = T.split("").sort(U).join("") === T,
        d.detectDuplicates = !!c,
        _(),
        d.sortDetached = N(function(e) {
            return 1 & e.compareDocumentPosition(k.createElement("fieldset"))
        }),
        N(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || pe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && N(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || pe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        N(function(e) {
            return null == e.getAttribute("disabled")
        }) || pe(Q, function(e, t, n) {
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }),
        O
    }(_)
      , Z = (S.find = e,
    S.expr = e.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = e.uniqueSort,
    S.text = e.getText,
    S.isXMLDoc = e.isXML,
    S.contains = e.contains,
    S.escapeSelector = e.escape,
    S.expr.match.needsContext);
    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var Q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function K(e, n, i) {
        return v(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < R.call(n, e) !== i
        }) : S.filter(n, e, i)
    }
    S.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (S.contains(r[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                S.find(e, r[t], n);
            return 1 < i ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(K(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(K(this, e || [], !0))
        },
        is: function(e) {
            return !!K(this, "string" == typeof e && Z.test(e) ? S(e) : e || [], !1).length
        }
    });
    var J, ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, te = ((S.fn.init = function(e, t, n) {
        if (e) {
            if (n = n || J,
            "string" != typeof e)
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ee.exec(e)) || !i[1] && t)
                return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (i[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : k, !0)),
                Q.test(i[1]) && S.isPlainObject(t))
                    for (var i in t)
                        v(this[i]) ? this[i](t[i]) : this.attr(i, t[i])
            } else
                (n = k.getElementById(i[2])) && (this[0] = n,
                this.length = 1)
        }
        return this
    }
    ).prototype = S.fn,
    J = S(k),
    /^(?:parents|prev(?:Until|All))/), ne = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function ie(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && S(e);
            if (!Z.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? R.call(S(e), this[0]) : R.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return i(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return i(e, "parentNode", n)
        },
        next: function(e) {
            return ie(e, "nextSibling")
        },
        prev: function(e) {
            return ie(e, "previousSibling")
        },
        nextAll: function(e) {
            return i(e, "nextSibling")
        },
        prevAll: function(e) {
            return i(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return i(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return i(e, "previousSibling", n)
        },
        siblings: function(e) {
            return X((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return X(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && H(e.contentDocument) ? e.contentDocument : (l(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(i, r) {
        S.fn[i] = function(e, t) {
            var n = S.map(this, r, e);
            return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (ne[i] || S.uniqueSort(n),
            te.test(i)) && n.reverse(),
            this.pushStack(n)
        }
    });
    var T = /[^\x20\t\r\n\f]+/g;
    function u(e) {
        return e
    }
    function re(e) {
        throw e
    }
    function oe(e, t, n, i) {
        var r;
        try {
            e && v(r = e.promise) ? r.call(e).done(t).fail(n) : e && v(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i,
        n = {},
        S.each(e.match(T) || [], function(e, t) {
            n[t] = !0
        }),
        n) : S.extend({}, i);
        function r() {
            for (a = a || i.once,
            s = o = !0; c.length; u = -1)
                for (t = c.shift(); ++u < l.length; )
                    !1 === l[u].apply(t[0], t[1]) && i.stopOnFalse && (u = l.length,
                    t = !1);
            i.memory || (t = !1),
            o = !1,
            a && (l = t ? [] : "")
        }
        var o, t, s, a, l = [], c = [], u = -1, h = {
            add: function() {
                return l && (t && !o && (u = l.length - 1,
                c.push(t)),
                function n(e) {
                    S.each(e, function(e, t) {
                        v(t) ? i.unique && h.has(t) || l.push(t) : t && t.length && "string" !== f(t) && n(t)
                    })
                }(arguments),
                t) && !o && r(),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    for (var n; -1 < (n = S.inArray(t, l, n)); )
                        l.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, l) : 0 < l.length
            },
            empty: function() {
                return l = l && [],
                this
            },
            disable: function() {
                return a = c = [],
                l = t = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return a = c = [],
                t || o || (l = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                c.push(t),
                o) || r(),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!s
            }
        };
        return h
    }
    ,
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , s = {
                state: function() {
                    return r
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return s.then(null, e)
                },
                pipe: function() {
                    var r = arguments;
                    return S.Deferred(function(i) {
                        S.each(o, function(e, t) {
                            var n = v(r[t[4]]) && r[t[4]];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && v(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        r = null
                    }).promise()
                },
                then: function(t, n, i) {
                    var l = 0;
                    function c(r, o, s, a) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(r < l)) {
                                    if ((e = s.apply(n, i)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    v(t) ? a ? t.call(e, c(l, o, u, a), c(l, o, re, a)) : (l++,
                                    t.call(e, c(l, o, u, a), c(l, o, re, a), c(l, o, u, o.notifyWith))) : (s !== u && (n = void 0,
                                    i = [e]),
                                    (a || o.resolveWith)(n, i))
                                }
                            }
                            var n = this
                              , i = arguments
                              , t = a ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= r + 1 && (s !== re && (n = void 0,
                                    i = [e]),
                                    o.rejectWith(n, i))
                                }
                            }
                            ;
                            r ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            _.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        o[0][3].add(c(0, e, v(i) ? i : u, e.notifyWith)),
                        o[1][3].add(c(0, e, v(t) ? t : u)),
                        o[2][3].add(c(0, e, v(n) ? n : re))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, s) : s
                }
            }
              , a = {};
            return S.each(o, function(e, t) {
                var n = t[2]
                  , i = t[5];
                s[t[1]] = n.add,
                i && n.add(function() {
                    r = i
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                }
                ,
                a[t[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    r[t] = this,
                    o[t] = 1 < arguments.length ? a.call(arguments) : e,
                    --n || s.resolveWith(r, o)
                }
            }
            var n = arguments.length
              , i = n
              , r = Array(i)
              , o = a.call(arguments)
              , s = S.Deferred();
            if (n <= 1 && (oe(e, s.done(t(i)).resolve, s.reject, !n),
            "pending" === s.state() || v(o[i] && o[i].then)))
                return s.then();
            for (; i--; )
                oe(o[i], t(i), s.reject);
            return s.promise()
        }
    });
    var se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
      , ae = (S.Deferred.exceptionHook = function(e, t) {
        _.console && _.console.warn && e && se.test(e.name) && _.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        _.setTimeout(function() {
            throw e
        })
    }
    ,
    S.Deferred());
    function le() {
        k.removeEventListener("DOMContentLoaded", le),
        _.removeEventListener("load", le),
        S.ready()
    }
    S.fn.ready = function(e) {
        return ae.then(e).catch(function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || ae.resolveWith(k, [S])
        }
    }),
    S.ready.then = ae.then,
    "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? _.setTimeout(S.ready) : (k.addEventListener("DOMContentLoaded", le),
    _.addEventListener("load", le));
    function h(e, t, n, i, r, o, s) {
        var a = 0
          , l = e.length
          , c = null == n;
        if ("object" === f(n))
            for (a in r = !0,
            n)
                h(e, t, a, n[a], !0, o, s);
        else if (void 0 !== i && (r = !0,
        v(i) || (s = !0),
        t = c ? s ? (t.call(e, i),
        null) : (c = t,
        function(e, t, n) {
            return c.call(S(e), n)
        }
        ) : t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    }
    var ce = /^-ms-/
      , ue = /-([a-z])/g;
    function he(e, t) {
        return t.toUpperCase()
    }
    function x(e) {
        return e.replace(ce, "ms-").replace(ue, he)
    }
    function y(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function de() {
        this.expando = S.expando + de.uid++
    }
    de.uid = 1,
    de.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[x(t)] = n;
            else
                for (i in t)
                    r[x(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][x(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(x) : (t = x(t))in i ? [t] : t.match(T) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                void 0 !== t && !S.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !S.isEmptyObject(e)
        }
    };
    var b = new de
      , c = new de
      , pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , fe = /[A-Z]/g;
    function me(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(fe, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : pe.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                c.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return c.hasData(e) || b.hasData(e)
        },
        data: function(e, t, n) {
            return c.access(e, t, n)
        },
        removeData: function(e, t) {
            c.remove(e, t)
        },
        _data: function(e, t, n) {
            return b.access(e, t, n)
        },
        _removeData: function(e, t) {
            b.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0], s = o && o.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    c.set(this, n)
                }) : h(this, function(e) {
                    var t;
                    if (o && void 0 === e)
                        return void 0 !== (t = c.get(o, n)) || void 0 !== (t = me(o, n)) ? t : void 0;
                    this.each(function() {
                        c.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = c.get(o),
            1 === o.nodeType) && !b.get(o, "hasDataAttrs")) {
                for (t = s.length; t--; )
                    s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = x(i.slice(5)),
                    me(o, i, r[i]));
                b.set(o, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                c.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return i = b.get(e, t = (t || "fx") + "queue"),
                n && (!i || Array.isArray(n) ? i = b.access(e, t, S.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = S._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, function() {
                S.dequeue(e, t)
            }, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return b.get(e, n) || b.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    b.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --r || o.resolveWith(s, [s])
            }
            var i, r = 1, o = S.Deferred(), s = this, a = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (i = b.get(s[a], e + "queueHooks")) && i.empty && (r++,
                i.empty.add(n));
            return n(),
            o.promise(t)
        }
    });
    function ge(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && M(e) && "none" === S.css(e, "display")
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ye = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$","i")
      , d = ["Top", "Right", "Bottom", "Left"]
      , w = k.documentElement
      , M = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , ve = {
        composed: !0
    };
    w.getRootNode && (M = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(ve) === e.ownerDocument
    }
    );
    function xe(e, t, n, i) {
        var r, o, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , l = a(), c = n && n[3] || (S.cssNumber[t] ? "" : "px"), u = e.nodeType && (S.cssNumber[t] || "px" !== c && +l) && ye.exec(S.css(e, t));
        if (u && u[3] !== c) {
            for (c = c || u[3],
            u = +(l /= 2) || 1; s--; )
                S.style(e, t, u + c),
                (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
                u /= o;
            S.style(e, t, (u *= 2) + c),
            n = n || []
        }
        return n && (u = +u || +l || 0,
        r = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        i) && (i.unit = c,
        i.start = u,
        i.end = r),
        r
    }
    var be = {};
    function E(e, t) {
        for (var n, i, r, o, s, a, l = [], c = 0, u = e.length; c < u; c++)
            (i = e[c]).style && (n = i.style.display,
            t ? ("none" === n && (l[c] = b.get(i, "display") || null,
            l[c] || (i.style.display = "")),
            "" === i.style.display && ge(i) && (l[c] = (a = o = r = void 0,
            o = i.ownerDocument,
            s = i.nodeName,
            (a = be[s]) || (r = o.body.appendChild(o.createElement(s)),
            a = S.css(r, "display"),
            r.parentNode.removeChild(r),
            be[s] = a = "none" === a ? "block" : a)))) : "none" !== n && (l[c] = "none",
            b.set(i, "display", n)));
        for (c = 0; c < u; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ge(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var we = /^(?:checkbox|radio)$/i
      , _e = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , ke = /^$|^module$|\/(?:java|ecma)script/i
      , n = k.createDocumentFragment().appendChild(k.createElement("div"))
      , C = ((o = k.createElement("input")).setAttribute("type", "radio"),
    o.setAttribute("checked", "checked"),
    o.setAttribute("name", "t"),
    n.appendChild(o),
    g.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked,
    n.innerHTML = "<textarea>x</textarea>",
    g.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue,
    n.innerHTML = "<option></option>",
    g.option = !!n.lastChild,
    {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    });
    function A(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && l(e, t) ? S.merge([e], n) : n
    }
    function Se(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            b.set(e[n], "globalEval", !t || b.get(t[n], "globalEval"))
    }
    C.tbody = C.tfoot = C.colgroup = C.caption = C.thead,
    C.th = C.td,
    g.option || (C.optgroup = C.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Te = /<|&#?\w+;/;
    function Me(e, t, n, i, r) {
        for (var o, s, a, l, c, u = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === f(o))
                    S.merge(h, o.nodeType ? [o] : o);
                else if (Te.test(o)) {
                    for (s = s || u.appendChild(t.createElement("div")),
                    a = (_e.exec(o) || ["", ""])[1].toLowerCase(),
                    a = C[a] || C._default,
                    s.innerHTML = a[1] + S.htmlPrefilter(o) + a[2],
                    c = a[0]; c--; )
                        s = s.lastChild;
                    S.merge(h, s.childNodes),
                    (s = u.firstChild).textContent = ""
                } else
                    h.push(t.createTextNode(o));
        for (u.textContent = "",
        d = 0; o = h[d++]; )
            if (i && -1 < S.inArray(o, i))
                r && r.push(o);
            else if (l = M(o),
            s = A(u.appendChild(o), "script"),
            l && Se(s),
            n)
                for (c = 0; o = s[c++]; )
                    ke.test(o.type || "") && n.push(o);
        return u
    }
    var Ee = /^([^.]*)(?:\.(.+)|)/;
    function s() {
        return !0
    }
    function p() {
        return !1
    }
    function Ce(e, t) {
        return e === function() {
            try {
                return k.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ae(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Ae(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = p;
        else if (!r)
            return e;
        return 1 === o && (s = r,
        (r = function(e) {
            return S().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, r, i, n)
        })
    }
    function Oe(e, r, o) {
        o ? (b.set(e, r, !1),
        S.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = b.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (i.length)
                        (S.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (i = a.call(arguments),
                    b.set(this, r, i),
                    t = o(this, r),
                    this[r](),
                    i !== (n = b.get(this, r)) || t ? b.set(this, r, !1) : n = {},
                    i !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n && n.value
                } else
                    i.length && (b.set(this, r, {
                        value: S.event.trigger(S.extend(i[0], S.Event.prototype), i.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === b.get(e, r) && S.event.add(e, r, s)
    }
    S.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, c, u, h, d, p, f = b.get(t);
            if (y(t))
                for (n.handler && (n = (o = n).handler,
                r = o.selector),
                r && S.find.matchesSelector(w, r),
                n.guid || (n.guid = S.guid++),
                a = (a = f.events) || (f.events = Object.create(null)),
                s = (s = f.handle) || (f.handle = function(e) {
                    return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(T) || [""]).length; l--; )
                    h = p = (d = Ee.exec(e[l]) || [])[1],
                    d = (d[2] || "").split(".").sort(),
                    h && (c = S.event.special[h] || {},
                    h = (r ? c.delegateType : c.bindType) || h,
                    c = S.event.special[h] || {},
                    p = S.extend({
                        type: h,
                        origType: p,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && S.expr.match.needsContext.test(r),
                        namespace: d.join(".")
                    }, o),
                    (u = a[h]) || ((u = a[h] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(t, i, d, s)) || t.addEventListener && t.addEventListener(h, s),
                    c.add && (c.add.call(t, p),
                    p.handler.guid || (p.handler.guid = n.guid)),
                    r ? u.splice(u.delegateCount++, 0, p) : u.push(p),
                    S.event.global[h] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, h, d, p, f, m, g = b.hasData(e) && b.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(T) || [""]).length; c--; )
                    if (p = m = (a = Ee.exec(t[c]) || [])[1],
                    f = (a[2] || "").split(".").sort(),
                    p) {
                        for (h = S.event.special[p] || {},
                        d = l[p = (i ? h.delegateType : h.bindType) || p] || [],
                        a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = d.length; o--; )
                            u = d[o],
                            !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1),
                            u.selector && d.delegateCount--,
                            h.remove && h.remove.call(e, u));
                        s && !d.length && (h.teardown && !1 !== h.teardown.call(e, f, g.handle) || S.removeEvent(e, p, g.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            S.event.remove(e, p + t[c], n, i, !0);
                S.isEmptyObject(l) && b.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s = new Array(arguments.length), a = S.event.fix(e), e = (b.get(this, "events") || Object.create(null))[a.type] || [], l = S.event.special[a.type] || {};
            for (s[0] = a,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (a.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                for (o = S.event.handlers.call(this, a, e),
                t = 0; (i = o[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = i.elem,
                    n = 0; (r = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r,
                        a.data = r.data,
                        void 0 !== (r = ((S.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (a.result = r) && (a.preventDefault(),
                        a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < S(r, this).index(c) : S.find(r, this, null, [c]).length),
                            s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this,
            l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return we.test(e.type) && e.click && l(e, "input") && Oe(e, "click", s),
                    !1
                },
                trigger: function(e) {
                    e = this || e;
                    return we.test(e.type) && e.click && l(e, "input") && Oe(e, "click"),
                    !0
                },
                _default: function(e) {
                    e = e.target;
                    return we.test(e.type) && e.click && l(e, "input") && b.get(e, "click") || l(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? s : p,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = s,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = s,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = s,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        S.event.special[t] = {
            setup: function() {
                return Oe(this, t, Ce),
                !1
            },
            trigger: function() {
                return Oe(this, t),
                !0
            },
            _default: function(e) {
                return b.get(e.target, t)
            },
            delegateType: e
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        S.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = i.origType,
                t = i.handler.apply(this, arguments),
                e.type = r),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, i) {
            return Ae(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Ae(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                i = e.handleObj,
                S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
            else {
                if ("object" != typeof e)
                    return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = p),
                    this.each(function() {
                        S.event.remove(this, e, n, t)
                    });
                for (r in e)
                    this.off(r, t, e[r])
            }
            return this
        }
    });
    var De = /<script|<style|<link/i
      , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Pe(e, t) {
        return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function je(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function ze(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function He(e, t) {
        var n, i, r, o;
        if (1 === t.nodeType) {
            if (b.hasData(e) && (o = b.get(e).events))
                for (r in b.remove(t, "handle events"),
                o)
                    for (n = 0,
                    i = o[r].length; n < i; n++)
                        S.event.add(t, r, o[r][n]);
            c.hasData(e) && (e = c.access(e),
            e = S.extend({}, e),
            c.set(t, e))
        }
    }
    function O(n, i, r, o) {
        i = I(i);
        var e, t, s, a, l, c, u = 0, h = n.length, d = h - 1, p = i[0], f = v(p);
        if (f || 1 < h && "string" == typeof p && !g.checkClone && Le.test(p))
            return n.each(function(e) {
                var t = n.eq(e);
                f && (i[0] = p.call(this, e, t.html())),
                O(t, i, r, o)
            });
        if (h && (t = (e = Me(i, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (a = (s = S.map(A(e, "script"), je)).length; u < h; u++)
                l = e,
                u !== d && (l = S.clone(l, !0, !0),
                a) && S.merge(s, A(l, "script")),
                r.call(n[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument,
                S.map(s, ze),
                u = 0; u < a; u++)
                    l = s[u],
                    ke.test(l.type || "") && !b.access(l, "globalEval") && S.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && !l.noModule && S._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : $(l.textContent.replace(Ne, ""), l, c))
        }
        return n
    }
    function Ie(e, t, n) {
        for (var i, r = t ? S.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || S.cleanData(A(i)),
            i.parentNode && (n && M(i) && Se(A(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, c, u = e.cloneNode(!0), h = M(e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (s = A(u),
                i = 0,
                r = (o = A(e)).length; i < r; i++)
                    a = o[i],
                    "input" === (c = (l = s[i]).nodeName.toLowerCase()) && we.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || A(e),
                    s = s || A(u),
                    i = 0,
                    r = o.length; i < r; i++)
                        He(o[i], s[i]);
                else
                    He(e, u);
            return 0 < (s = A(u, "script")).length && Se(s, !h && A(e, "script")),
            u
        },
        cleanData: function(e) {
            for (var t, n, i, r = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (y(n)) {
                    if (t = n[b.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                        n[b.expando] = void 0
                    }
                    n[c.expando] && (n[c.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0)
        },
        remove: function(e) {
            return Ie(this, e)
        },
        text: function(e) {
            return h(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return O(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return O(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Pe(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return O(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return O(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(A(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return h(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !C[(_e.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(A(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return O(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(A(this)),
                t) && t.replaceChild(e, this)
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        S.fn[e] = function(e) {
            for (var t, n = [], i = S(e), r = i.length - 1, o = 0; o <= r; o++)
                t = o === r ? this : this.clone(!0),
                S(i[o])[s](t),
                Y.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    function Ye(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : _).getComputedStyle(e)
    }
    function Re(e, t, n) {
        var i, r = {};
        for (i in t)
            r[i] = e.style[i],
            e.style[i] = t[i];
        for (i in n = n.call(e),
        t)
            e.style[i] = r[i];
        return n
    }
    var qe, We, Fe, Ve, Be, Ue, $e, r, Ge = new RegExp("^(" + e + ")(?!px)[a-z%]+$","i"), Xe = /^--/, Ze = new RegExp(d.join("|"),"i"), o = "[\\x20\\t\\r\\n\\f]", Qe = new RegExp("^" + o + "+|((?:^|[^\\\\])(?:\\\\.)*)" + o + "+$","g");
    function Ke(e, t, n) {
        var i, r = Xe.test(t), o = e.style;
        return (n = n || Ye(e)) && (i = n.getPropertyValue(t) || n[t],
        "" !== (i = r ? i && (i.replace(Qe, "$1") || void 0) : i) || M(e) || (i = S.style(e, t)),
        !g.pixelBoxStyles()) && Ge.test(i) && Ze.test(t) && (r = o.width,
        e = o.minWidth,
        t = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = i,
        i = n.width,
        o.width = r,
        o.minWidth = e,
        o.maxWidth = t),
        void 0 !== i ? i + "" : i
    }
    function Je(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function et() {
        var e;
        r && ($e.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        r.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        w.appendChild($e).appendChild(r),
        e = _.getComputedStyle(r),
        qe = "1%" !== e.top,
        Ue = 12 === tt(e.marginLeft),
        r.style.right = "60%",
        Ve = 36 === tt(e.right),
        We = 36 === tt(e.width),
        r.style.position = "absolute",
        Fe = 12 === tt(r.offsetWidth / 3),
        w.removeChild($e),
        r = null)
    }
    function tt(e) {
        return Math.round(parseFloat(e))
    }
    $e = k.createElement("div"),
    (r = k.createElement("div")).style && (r.style.backgroundClip = "content-box",
    r.cloneNode(!0).style.backgroundClip = "",
    g.clearCloneStyle = "content-box" === r.style.backgroundClip,
    S.extend(g, {
        boxSizingReliable: function() {
            return et(),
            We
        },
        pixelBoxStyles: function() {
            return et(),
            Ve
        },
        pixelPosition: function() {
            return et(),
            qe
        },
        reliableMarginLeft: function() {
            return et(),
            Ue
        },
        scrollboxSize: function() {
            return et(),
            Fe
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == Be && (e = k.createElement("table"),
            t = k.createElement("tr"),
            n = k.createElement("div"),
            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
            t.style.cssText = "border:1px solid",
            t.style.height = "1px",
            n.style.height = "9px",
            n.style.display = "block",
            w.appendChild(e).appendChild(t).appendChild(n),
            n = _.getComputedStyle(t),
            Be = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight,
            w.removeChild(e)),
            Be
        }
    }));
    var nt = ["Webkit", "Moz", "ms"]
      , it = k.createElement("div").style
      , rt = {};
    function ot(e) {
        return S.cssProps[e] || rt[e] || (e in it ? e : rt[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--; )
                if ((e = nt[n] + t)in it)
                    return e
        }(e) || e)
    }
    var st = /^(none|table(?!-c[ea]).+)/
      , at = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , lt = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function ct(e, t, n) {
        var i = ye.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function ut(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += S.css(e, n + d[s], !0, r)),
            i ? ("content" === n && (l -= S.css(e, "padding" + d[s], !0, r)),
            "margin" !== n && (l -= S.css(e, "border" + d[s] + "Width", !0, r))) : (l += S.css(e, "padding" + d[s], !0, r),
            "padding" !== n ? l += S.css(e, "border" + d[s] + "Width", !0, r) : a += S.css(e, "border" + d[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0),
        l
    }
    function ht(e, t, n) {
        var i = Ye(e)
          , r = (!g.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, i)
          , o = r
          , s = Ke(e, t, i)
          , a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ge.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!g.boxSizingReliable() && r || !g.reliableTrDimensions() && l(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === S.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === S.css(e, "boxSizing", !1, i),
        o = a in e) && (s = e[a]),
        (s = parseFloat(s) || 0) + ut(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
    }
    function D(e, t, n, i, r) {
        return new D.prototype.init(e,t,n,i,r)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t)
                        return "" === (t = Ke(e, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = x(t), l = Xe.test(t), c = e.style;
                if (l || (t = ot(a)),
                s = S.cssHooks[t] || S.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = ye.exec(n)) && r[1] && (n = xe(e, t, r),
                o = "number"),
                null != n && n == n && ("number" !== o || l || (n += r && r[3] || (S.cssNumber[a] ? "" : "px")),
                g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o = x(t);
            return Xe.test(t) || (t = ot(o)),
            "normal" === (r = void 0 === (r = (o = S.cssHooks[t] || S.cssHooks[o]) && "get"in o ? o.get(e, !0, n) : r) ? Ke(e, t, i) : r) && t in lt && (r = lt[t]),
            ("" === n || n) && (o = parseFloat(r),
            !0 === n || isFinite(o)) ? o || 0 : r
        }
    }),
    S.each(["height", "width"], function(e, s) {
        S.cssHooks[s] = {
            get: function(e, t, n) {
                if (t)
                    return !st.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ht(e, s, n) : Re(e, at, function() {
                        return ht(e, s, n)
                    })
            },
            set: function(e, t, n) {
                var i = Ye(e)
                  , r = !g.scrollboxSize() && "absolute" === i.position
                  , o = (r || n) && "border-box" === S.css(e, "boxSizing", !1, i)
                  , n = n ? ut(e, s, n, o, i) : 0;
                return o && r && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - ut(e, s, "border", !1, i) - .5)),
                n && (o = ye.exec(t)) && "px" !== (o[3] || "px") && (e.style[s] = t,
                t = S.css(e, s)),
                ct(0, t, n)
            }
        }
    }),
    S.cssHooks.marginLeft = Je(g.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Ke(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        S.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[r + d[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        },
        "margin" !== r && (S.cssHooks[r + o].set = ct)
    }),
    S.fn.extend({
        css: function(e, t) {
            return h(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = Ye(e),
                    r = t.length; s < r; s++)
                        o[t[s]] = S.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = D).prototype = {
        constructor: D,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = D.propHooks[this.prop];
            return (e && e.get ? e : D.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : D.propHooks._default).set(this),
            this
        }
    }).init.prototype = D.prototype,
    (D.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = S.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = D.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = D.prototype.init,
    S.fx.step = {};
    var L, dt, pt = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
    function mt() {
        dt && (!1 === k.hidden && _.requestAnimationFrame ? _.requestAnimationFrame(mt) : _.setTimeout(mt, S.fx.interval),
        S.fx.tick())
    }
    function gt() {
        return _.setTimeout(function() {
            L = void 0
        }),
        L = Date.now()
    }
    function yt(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = d[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function vt(e, t, n) {
        for (var i, r = (N.tweeners[t] || []).concat(N.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function N(r, e, t) {
        var n, o, i, s, a, l, c, u = 0, h = N.prefilters.length, d = S.Deferred().always(function() {
            delete p.elem
        }), p = function() {
            if (o)
                return !1;
            for (var e = L || gt(), e = Math.max(0, f.startTime + f.duration - e), t = 1 - (e / f.duration || 0), n = 0, i = f.tweens.length; n < i; n++)
                f.tweens[n].run(t);
            return d.notifyWith(r, [f, t, e]),
            t < 1 && i ? e : (i || d.notifyWith(r, [f, 1, 0]),
            d.resolveWith(r, [f]),
            !1)
        }, f = d.promise({
            elem: r,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: L || gt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                t = S.Tween(r, f.opts, e, t, f.opts.specialEasing[e] || f.opts.easing);
                return f.tweens.push(t),
                t
            },
            stop: function(e) {
                var t = 0
                  , n = e ? f.tweens.length : 0;
                if (!o) {
                    for (o = !0; t < n; t++)
                        f.tweens[t].run(1);
                    e ? (d.notifyWith(r, [f, 1, 0]),
                    d.resolveWith(r, [f, e])) : d.rejectWith(r, [f, e])
                }
                return this
            }
        }), m = f.props, g = m, y = f.opts.specialEasing;
        for (i in g)
            if (a = y[s = x(i)],
            l = g[i],
            Array.isArray(l) && (a = l[1],
            l = g[i] = l[0]),
            i !== s && (g[s] = l,
            delete g[i]),
            (c = S.cssHooks[s]) && "expand"in c)
                for (i in l = c.expand(l),
                delete g[s],
                l)
                    i in g || (g[i] = l[i],
                    y[i] = a);
            else
                y[s] = a;
        for (; u < h; u++)
            if (n = N.prefilters[u].call(f, r, m, f.opts))
                return v(n.stop) && (S._queueHooks(f.elem, f.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(m, vt, f),
        v(f.opts.start) && f.opts.start.call(r, f),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always),
        S.fx.timer(S.extend(p, {
            elem: r,
            anim: f,
            queue: f.opts.queue
        })),
        f
    }
    S.Animation = S.extend(N, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return xe(n.elem, e, ye.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, i = 0, r = (e = v(e) ? (t = e,
            ["*"]) : e.match(T)).length; i < r; i++)
                n = e[i],
                N.tweeners[n] = N.tweeners[n] || [],
                N.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, s, a, l, c, u = "width"in t || "height"in t, h = this, d = {}, p = e.style, f = e.nodeType && ge(e), m = b.get(e, "fxshow");
            for (i in n.queue || (null == (s = S._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            h.always(function() {
                h.always(function() {
                    s.unqueued--,
                    S.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (r = t[i],
                pt.test(r)) {
                    if (delete t[i],
                    o = o || "toggle" === r,
                    r === (f ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i])
                            continue;
                        f = !0
                    }
                    d[i] = m && m[i] || S.style(e, i)
                }
            if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (i in u && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (c = m && m.display) && (c = b.get(e, "display")),
                "none" === (u = S.css(e, "display")) && (c ? u = c : (E([e], !0),
                c = e.style.display || c,
                u = S.css(e, "display"),
                E([e]))),
                "inline" === u || "inline-block" === u && null != c) && "none" === S.css(e, "float") && (l || (h.done(function() {
                    p.display = c
                }),
                null == c && (u = p.display,
                c = "none" === u ? "" : u)),
                p.display = "inline-block"),
                n.overflow && (p.overflow = "hidden",
                h.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })),
                l = !1,
                d)
                    l || (m ? "hidden"in m && (f = m.hidden) : m = b.access(e, "fxshow", {
                        display: c
                    }),
                    o && (m.hidden = !f),
                    f && E([e], !0),
                    h.done(function() {
                        for (i in f || E([e]),
                        b.remove(e, "fxshow"),
                        d)
                            S.style(e, i, d[i])
                    })),
                    l = vt(f ? m[i] : 0, i, h),
                    i in m || (m[i] = l.start,
                    f && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? N.prefilters.unshift(e) : N.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            v(i.old) && i.old.call(this),
            i.queue && S.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ge).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function r() {
                var e = N(this, S.extend({}, t), s);
                (o || b.get(this, "finish")) && e.stop(!0)
            }
            var o = S.isEmptyObject(t)
              , s = S.speed(e, n, i);
            return r.finish = r,
            o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(r, e, o) {
            function s(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            }
            return "string" != typeof r && (o = e,
            e = r,
            r = void 0),
            e && this.queue(r || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != r && r + "queueHooks"
                  , n = S.timers
                  , i = b.get(this);
                if (t)
                    i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i)
                        i[t] && i[t].stop && ft.test(t) && s(i[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || S.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var e, t = b.get(this), n = t[s + "queue"], i = t[s + "queueHooks"], r = S.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, s, []),
                i && i.stop && i.stop.call(this, !0),
                e = r.length; e--; )
                    r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0),
                    r.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, i) {
        var r = S.fn[i];
        S.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(yt(i, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: yt("show"),
        slideUp: yt("hide"),
        slideToggle: yt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        S.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (L = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        L = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        dt || (dt = !0,
        mt())
    }
    ,
    S.fx.stop = function() {
        dt = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(i, e) {
        return i = S.fx && S.fx.speeds[i] || i,
        this.queue(e = e || "fx", function(e, t) {
            var n = _.setTimeout(e, i);
            t.stop = function() {
                _.clearTimeout(n)
            }
        })
    }
    ,
    n = k.createElement("input"),
    e = k.createElement("select").appendChild(k.createElement("option")),
    n.type = "checkbox",
    g.checkOn = "" !== n.value,
    g.optSelected = e.selected,
    (n = k.createElement("input")).value = "t",
    n.type = "radio",
    g.radioValue = "t" === n.value;
    var xt, bt = S.expr.attrHandle, wt = (S.fn.extend({
        attr: function(e, t) {
            return h(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (r = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? xt : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : !(r && "get"in r && null !== (i = r.get(e, t))) && null == (i = S.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    var n;
                    if (!g.radioValue && "radio" === t && l(e, "input"))
                        return n = e.value,
                        e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(T);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    e.removeAttribute(n)
        }
    }),
    xt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = bt[t] || S.find.attr;
        bt[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = bt[o],
            bt[o] = i,
            i = null != s(e, t, n) ? o : null,
            bt[o] = r),
            i
        }
    }),
    /^(?:input|select|textarea|button)$/i), _t = /^(?:a|area)$/i;
    function P(e) {
        return (e.match(T) || []).join(" ")
    }
    function j(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(T) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return h(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                r = S.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    g.optSelected || (S.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex,
            e.parentNode) && e.parentNode.selectedIndex
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s;
            return v(t) ? this.each(function(e) {
                S(this).addClass(t.call(this, e, j(this)))
            }) : (e = kt(t)).length ? this.each(function() {
                if (i = j(this),
                n = 1 === this.nodeType && " " + P(i) + " ") {
                    for (o = 0; o < e.length; o++)
                        r = e[o],
                        n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                    s = P(n),
                    i !== s && this.setAttribute("class", s)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s;
            return v(t) ? this.each(function(e) {
                S(this).removeClass(t.call(this, e, j(this)))
            }) : arguments.length ? (e = kt(t)).length ? this.each(function() {
                if (i = j(this),
                n = 1 === this.nodeType && " " + P(i) + " ") {
                    for (o = 0; o < e.length; o++)
                        for (r = e[o]; -1 < n.indexOf(" " + r + " "); )
                            n = n.replace(" " + r + " ", " ");
                    s = P(n),
                    i !== s && this.setAttribute("class", s)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, i, r, o, s = typeof t, a = "string" == s || Array.isArray(t);
            return v(t) ? this.each(function(e) {
                S(this).toggleClass(t.call(this, e, j(this), n), n)
            }) : "boolean" == typeof n && a ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t),
            this.each(function() {
                if (a)
                    for (o = S(this),
                    r = 0; r < e.length; r++)
                        i = e[r],
                        o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                else
                    void 0 !== t && "boolean" != s || ((i = j(this)) && b.set(this, "__className__", i),
                    this.setAttribute && this.setAttribute("class", !i && !1 !== t && b.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++]; )
                if (1 === t.nodeType && -1 < (" " + P(j(t)) + " ").indexOf(i))
                    return !0;
            return !1
        }
    });
    function St(e) {
        e.stopPropagation()
    }
    var Tt = /\r/g
      , Mt = (S.fn.extend({
        val: function(t) {
            var n, e, i, r = this[0];
            return arguments.length ? (i = v(t),
            this.each(function(e) {
                1 === this.nodeType && (null == (e = i ? t.call(this, e, S(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = S.map(e, function(e) {
                    return null == e ? "" : e + ""
                })),
                (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : r ? (n = S.valHooks[r.type] || S.valHooks[r.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(r, "value")) ? e : "string" == typeof (e = r.value) ? e.replace(Tt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : P(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, i = e.selectedIndex, r = "select-one" === e.type, o = r ? null : [], s = r ? i + 1 : n.length, a = i < 0 ? s : r ? i : 0; a < s; a++)
                        if (((t = n[a]).selected || a === i) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                            if (t = S(t).val(),
                            r)
                                return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = S.makeArray(t), s = r.length; s--; )
                        ((i = r[s]).selected = -1 < S.inArray(S.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        g.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    g.focusin = "onfocusin"in _,
    /^(?:focusinfocus|focusoutblur)$/)
      , Et = (S.extend(S.event, {
        trigger: function(e, t, n, i) {
            var r, o, s, a, l, c, u, h = [n || k], d = F.call(e, "type") ? e.type : e, p = F.call(e, "namespace") ? e.namespace.split(".") : [], f = u = o = n = n || k;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(),
            p.sort()),
            a = d.indexOf(":") < 0 && "on" + d,
            (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
            e.namespace = p.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[d] || {},
            i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !m(n)) {
                    for (s = c.delegateType || d,
                    Mt.test(s + d) || (f = f.parentNode); f; f = f.parentNode)
                        h.push(f),
                        o = f;
                    o === (n.ownerDocument || k) && h.push(o.defaultView || o.parentWindow || _)
                }
                for (r = 0; (f = h[r++]) && !e.isPropagationStopped(); )
                    u = f,
                    e.type = 1 < r ? s : c.bindType || d,
                    (l = (b.get(f, "events") || Object.create(null))[e.type] && b.get(f, "handle")) && l.apply(f, t),
                    (l = a && f[a]) && l.apply && y(f) && (e.result = l.apply(f, t),
                    !1 === e.result) && e.preventDefault();
                return e.type = d,
                i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), t) || !y(n) || a && v(n[d]) && !m(n) && ((o = n[a]) && (n[a] = null),
                S.event.triggered = d,
                e.isPropagationStopped() && u.addEventListener(d, St),
                n[d](),
                e.isPropagationStopped() && u.removeEventListener(d, St),
                S.event.triggered = void 0,
                o) && (n[a] = o),
                e.result
            }
        },
        simulate: function(e, t, n) {
            n = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(n, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    g.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function r(e) {
            S.event.simulate(i, e.target, S.event.fix(e))
        }
        S.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = b.access(e, i);
                t || e.addEventListener(n, r, !0),
                b.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = b.access(e, i) - 1;
                t ? b.access(e, i, t) : (e.removeEventListener(n, r, !0),
                b.remove(e, i))
            }
        }
    }),
    _.location)
      , Ct = {
        guid: Date.now()
    }
      , At = /\?/
      , Ot = (S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new _.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ,
    /\[\]$/)
      , Dt = /\r?\n/g
      , Lt = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    S.param = function(e, t) {
        function n(e, t) {
            t = v(t) ? t() : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var i, r = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (i in e)
                !function n(i, e, r, o) {
                    if (Array.isArray(e))
                        S.each(e, function(e, t) {
                            r || Ot.test(i) ? o(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, o)
                        });
                    else if (r || "object" !== f(e))
                        o(i, e);
                    else
                        for (var t in e)
                            n(i + "[" + t + "]", e[t], r, o)
                }(i, e[i], t, n);
        return r.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !Lt.test(e) && (this.checked || !we.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var Pt = /%20/g
      , jt = /#.*$/
      , zt = /([?&])_=[^&]*/
      , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , It = /^(?:GET|HEAD)$/
      , Yt = /^\/\//
      , Rt = {}
      , qt = {}
      , Wt = "*/".concat("*")
      , Ft = k.createElement("a");
    function Vt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, i = 0, r = e.toLowerCase().match(T) || [];
            if (v(t))
                for (; n = r[i++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Bt(t, i, r, o) {
        var s = {}
          , a = t === qt;
        function l(e) {
            var n;
            return s[e] = !0,
            S.each(t[e] || [], function(e, t) {
                t = t(i, r, o);
                return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t),
                l(t),
                !1)
            }),
            n
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Ut(e, t) {
        var n, i, r = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
        return i && S.extend(!0, e, i),
        e
    }
    Ft.href = Et.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ut(Ut(e, S.ajaxSettings), t) : Ut(S.ajaxSettings, e)
        },
        ajaxPrefilter: Vt(Rt),
        ajaxTransport: Vt(qt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0);
            var l, c, u, n, h, d, p, i, r, f = S.ajaxSetup({}, t = t || {}), m = f.context || f, g = f.context && (m.nodeType || m.jquery) ? S(m) : S.event, y = S.Deferred(), v = S.Callbacks("once memory"), x = f.statusCode || {}, o = {}, s = {}, a = "canceled", b = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (d) {
                        if (!n)
                            for (n = {}; t = Ht.exec(u); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return d ? u : null
                },
                setRequestHeader: function(e, t) {
                    return null == d && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    o[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == d && (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    if (e)
                        if (d)
                            b.always(e[b.status]);
                        else
                            for (var t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    e = e || a;
                    return l && l.abort(e),
                    w(0, e),
                    this
                }
            };
            if (y.promise(b),
            f.url = ((e || f.url || Et.href) + "").replace(Yt, Et.protocol + "//"),
            f.type = t.method || t.type || f.method || f.type,
            f.dataTypes = (f.dataType || "*").toLowerCase().match(T) || [""],
            null == f.crossDomain) {
                r = k.createElement("a");
                try {
                    r.href = f.url,
                    r.href = r.href,
                    f.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = S.param(f.data, f.traditional)),
            Bt(Rt, f, t, b),
            !d) {
                for (i in (p = S.event && f.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !It.test(f.type),
                c = f.url.replace(jt, ""),
                f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Pt, "+")) : (r = f.url.slice(c.length),
                f.data && (f.processData || "string" == typeof f.data) && (c += (At.test(c) ? "&" : "?") + f.data,
                delete f.data),
                !1 === f.cache && (c = c.replace(zt, "$1"),
                r = (At.test(c) ? "&" : "?") + "_=" + Ct.guid++ + r),
                f.url = c + r),
                f.ifModified && (S.lastModified[c] && b.setRequestHeader("If-Modified-Since", S.lastModified[c]),
                S.etag[c]) && b.setRequestHeader("If-None-Match", S.etag[c]),
                (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && b.setRequestHeader("Content-Type", f.contentType),
                b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : f.accepts["*"]),
                f.headers)
                    b.setRequestHeader(i, f.headers[i]);
                if (f.beforeSend && (!1 === f.beforeSend.call(m, b, f) || d))
                    return b.abort();
                if (a = "abort",
                v.add(f.complete),
                b.done(f.success),
                b.fail(f.error),
                l = Bt(qt, f, t, b)) {
                    if (b.readyState = 1,
                    p && g.trigger("ajaxSend", [b, f]),
                    d)
                        return b;
                    f.async && 0 < f.timeout && (h = _.setTimeout(function() {
                        b.abort("timeout")
                    }, f.timeout));
                    try {
                        d = !1,
                        l.send(o, w)
                    } catch (e) {
                        if (d)
                            throw e;
                        w(-1, e)
                    }
                } else
                    w(-1, "No Transport")
            }
            return b;
            function w(e, t, n, i) {
                var r, o, s, a = t;
                d || (d = !0,
                h && _.clearTimeout(h),
                l = void 0,
                u = i || "",
                b.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0]in n)
                        o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s = s || r
                        }
                        o = o || s
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        n[o]
                }(f, b, n)),
                !i && -1 < S.inArray("script", f.dataTypes) && S.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}
                ),
                s = function(e, t, n, i) {
                    var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = u.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(s = c[l + " " + o] || c["* " + o]))
                                    for (r in c)
                                        if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0],
                                            u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, s, b, i),
                i ? (f.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (S.lastModified[c] = n),
                n = b.getResponseHeader("etag")) && (S.etag[c] = n),
                204 === e || "HEAD" === f.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state,
                r = s.data,
                i = !(o = s.error))) : (o = a,
                !e && a || (a = "error",
                e < 0 && (e = 0))),
                b.status = e,
                b.statusText = (t || a) + "",
                i ? y.resolveWith(m, [r, a, b]) : y.rejectWith(m, [b, a, o]),
                b.statusCode(x),
                x = void 0,
                p && g.trigger(i ? "ajaxSuccess" : "ajaxError", [b, f, i ? r : o]),
                v.fireWith(m, [b, a]),
                p && (g.trigger("ajaxComplete", [b, f]),
                --S.active || S.event.trigger("ajaxStop")))
            }
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, r) {
        S[r] = function(e, t, n, i) {
            return v(t) && (i = i || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        for (var t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            return this[0] && (v(e) && (e = e.call(this[0])),
            e = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return v(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = v(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new _.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var $t = {
        0: 200,
        1223: 204
    }
      , Gt = S.ajaxSettings.xhr();
    g.cors = !!Gt && "withCredentials"in Gt,
    g.ajax = Gt = !!Gt,
    S.ajaxTransport(function(r) {
        var o, s;
        if (g.cors || Gt && !r.crossDomain)
            return {
                send: function(e, t) {
                    var n, i = r.xhr();
                    if (i.open(r.type, r.url, r.async, r.username, r.password),
                    r.xhrFields)
                        for (n in r.xhrFields)
                            i[n] = r.xhrFields[n];
                    for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType),
                    r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        i.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null,
                            "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t($t[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }
                    ,
                    i.onload = o(),
                    s = i.onerror = i.ontimeout = o("error"),
                    void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                        4 === i.readyState && _.setTimeout(function() {
                            o && s()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        i.send(r.hasContent && r.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    i = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", r = function(e) {
                        i.remove(),
                        r = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    k.head.appendChild(i[0])
                },
                abort: function() {
                    r && r()
                }
            }
    });
    var Xt = []
      , Zt = /(=)\?(?=&|$)|\?\?/
      , Qt = (S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, s = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(Zt, "$1" + i) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            e.converters["script json"] = function() {
                return o || S.error(i + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            r = _[i],
            _[i] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === r ? S(_).removeProp(i) : _[i] = r,
                e[i] && (e.jsonpCallback = t.jsonpCallback,
                Xt.push(i)),
                o && v(r) && r(o[0]),
                o = r = void 0
            }),
            "script"
    }),
    g.createHTMLDocument = ((o = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === o.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (g.createHTMLDocument ? ((i = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href,
        t.head.appendChild(i)) : t = k),
        i = !n && [],
        (n = Q.exec(e)) ? [t.createElement(n[1])] : (n = Me([e], t, i),
        i && i.length && S(i).remove(),
        S.merge([], n.childNodes)));
        var i
    }
    ,
    S.fn.load = function(e, t, n) {
        var i, r, o, s = this, a = e.indexOf(" ");
        return -1 < a && (i = P(e.slice(a)),
        e = e.slice(0, a)),
        v(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        0 < s.length && S.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a = S.css(e, "position"), l = S(e), c = {};
            "static" === a && (e.style.position = "relative"),
            o = l.offset(),
            i = S.css(e, "top"),
            s = S.css(e, "left"),
            a = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (r = (a = l.position()).top,
            a.left) : (r = parseFloat(i) || 0,
            parseFloat(s) || 0),
            null != (t = v(t) ? t.call(e, n, S.extend({}, o)) : t).top && (c.top = t.top - o.top + r),
            null != t.left && (c.left = t.left - o.left + a),
            "using"in t ? t.using.call(e, c) : l.css(c)
        }
    },
    S.fn.extend({
        offset: function(t) {
            var e, n;
            return arguments.length ? void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            }) : (n = this[0]) ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
            n = n.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    r.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - S.css(i, "marginTop", !0),
                    left: t.left - r.left - S.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position"); )
                    e = e.offsetParent;
                return e || w
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        S.fn[t] = function(e) {
            return h(this, function(e, t, n) {
                var i;
                if (m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n)
                    return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = Je(g.pixelPosition, function(e, t) {
            if (t)
                return t = Ke(e, n),
                Ge.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        S.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e)
                  , r = i || (!0 === e || !0 === t ? "margin" : "border");
                return h(this, function(e, t, n) {
                    var i;
                    return m(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? S.css(e, t, r) : S.style(e, t, n, r)
                }, a, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g)
      , Kt = (S.proxy = function(e, t) {
        var n, i;
        if ("string" == typeof t && (i = e[t],
        t = e,
        e = i),
        v(e))
            return n = a.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, n.concat(a.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = l,
    S.isFunction = v,
    S.isWindow = m,
    S.camelCase = x,
    S.type = f,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Qt, "$1")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    }),
    _.jQuery)
      , Jt = _.$;
    return S.noConflict = function(e) {
        return _.$ === S && (_.$ = Jt),
        e && _.jQuery === S && (_.jQuery = Kt),
        S
    }
    ,
    void 0 === z && (_.jQuery = _.$ = S),
    S
}),
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {})
}(this, function(e) {
    "use strict";
    function h(e) {
        e = e.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }
    function v(e) {
        var t;
        return null == e ? window : "[object Window]" !== e.toString() ? (t = e.ownerDocument) && t.defaultView || window : e
    }
    function l(e) {
        e = v(e);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function m(e) {
        return e instanceof v(e).Element || e instanceof Element
    }
    function c(e) {
        return e instanceof v(e).HTMLElement || e instanceof HTMLElement
    }
    function r(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof v(e).ShadowRoot || e instanceof ShadowRoot)
    }
    function a(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }
    function x(e) {
        return ((m(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }
    function u(e) {
        return h(x(e)).left + l(e).scrollLeft
    }
    function b(e) {
        return v(e).getComputedStyle(e)
    }
    function d(e) {
        var e = b(e)
          , t = e.overflow
          , n = e.overflowX
          , e = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(t + e + n)
    }
    function q(e, t, n) {
        void 0 === n && (n = !1);
        var i = x(t)
          , e = h(e)
          , r = c(t)
          , o = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , s = {
            x: 0,
            y: 0
        };
        return !r && n || ("body" === a(t) && !d(i) || (o = (r = t) !== v(r) && c(r) ? {
            scrollLeft: r.scrollLeft,
            scrollTop: r.scrollTop
        } : l(r)),
        c(t) ? ((s = h(t)).x += t.clientLeft,
        s.y += t.clientTop) : i && (s.x = u(i))),
        {
            x: e.left + o.scrollLeft - s.x,
            y: e.top + o.scrollTop - s.y,
            width: e.width,
            height: e.height
        }
    }
    function S(e) {
        var t = h(e)
          , n = e.offsetWidth
          , i = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width),
        Math.abs(t.height - i) <= 1 && (i = t.height),
        {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: i
        }
    }
    function s(e) {
        return "html" === a(e) ? e : e.assignedSlot || e.parentNode || (r(e) ? e.host : null) || x(e)
    }
    function g(e, t) {
        void 0 === t && (t = []);
        var n = function e(t) {
            return 0 <= ["html", "body", "#document"].indexOf(a(t)) ? t.ownerDocument.body : c(t) && d(t) ? t : e(s(t))
        }(e)
          , e = n === (null == (e = e.ownerDocument) ? void 0 : e.body)
          , i = v(n)
          , i = e ? [i].concat(i.visualViewport || [], d(n) ? n : []) : n
          , n = t.concat(i);
        return e ? n : n.concat(g(s(i)))
    }
    function o(e) {
        return c(e) && "fixed" !== b(e).position ? e.offsetParent : null
    }
    function T(e) {
        for (var t, n = v(e), i = o(e); i && (t = i,
        0 <= ["table", "td", "th"].indexOf(a(t))) && "static" === b(i).position; )
            i = o(i);
        return (!i || "html" !== a(i) && ("body" !== a(i) || "static" !== b(i).position)) && (i || function(e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox")
              , n = -1 !== navigator.userAgent.indexOf("Trident");
            if (!n || !c(e) || "fixed" !== b(e).position)
                for (var i = s(e); c(i) && ["html", "body"].indexOf(a(i)) < 0; ) {
                    var r = b(i);
                    if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter)
                        return i;
                    i = i.parentNode
                }
            return null
        }(e)) || n
    }
    var E = "top"
      , C = "bottom"
      , A = "right"
      , O = "left"
      , D = "auto"
      , L = [E, C, A, O]
      , N = "start"
      , p = "end"
      , W = "clippingParents"
      , F = "viewport"
      , f = "popper"
      , V = "reference"
      , B = L.reduce(function(e, t) {
        return e.concat([t + "-" + N, t + "-" + p])
    }, [])
      , U = [].concat(L, [D]).reduce(function(e, t) {
        return e.concat([t, t + "-" + N, t + "-" + p])
    }, [])
      , y = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
    function $(e) {
        var n = new Map
          , i = new Set
          , r = [];
        return e.forEach(function(e) {
            n.set(e.name, e)
        }),
        e.forEach(function(e) {
            i.has(e.name) || !function t(e) {
                i.add(e.name),
                [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
                    i.has(e) || (e = n.get(e)) && t(e)
                }),
                r.push(e)
            }(e)
        }),
        r
    }
    function w(e) {
        for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++)
            n[i - 1] = arguments[i];
        return [].concat(n).reduce(function(e, t) {
            return e.replace(/%s/, t)
        }, e)
    }
    var _ = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s'
      , G = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available'
      , X = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
    function P(e) {
        return e.split("-")[0]
    }
    var M = Math.max
      , j = Math.min
      , k = Math.round;
    function Z(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t))
            return !0;
        if (n && r(n)) {
            var i = t;
            do {
                if (i && e.isSameNode(i))
                    return !0
            } while (i = i.parentNode || i.host)
        }
        return !1
    }
    function Q(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }
    function K(e, t) {
        return t === F ? Q((i = v(n = e),
        r = x(n),
        i = i.visualViewport,
        o = r.clientWidth,
        r = r.clientHeight,
        a = s = 0,
        i && (o = i.width,
        r = i.height,
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = i.offsetLeft,
        a = i.offsetTop)),
        {
            width: o,
            height: r,
            x: s + u(n),
            y: a
        })) : c(t) ? ((o = h(i = t)).top = o.top + i.clientTop,
        o.left = o.left + i.clientLeft,
        o.bottom = o.top + i.clientHeight,
        o.right = o.left + i.clientWidth,
        o.width = i.clientWidth,
        o.height = i.clientHeight,
        o.x = o.left,
        o.y = o.top,
        o) : Q((r = x(e),
        s = x(r),
        n = l(r),
        a = null == (a = r.ownerDocument) ? void 0 : a.body,
        t = M(s.scrollWidth, s.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
        e = M(s.scrollHeight, s.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
        r = -n.scrollLeft + u(r),
        n = -n.scrollTop,
        "rtl" === b(a || s).direction && (r += M(s.clientWidth, a ? a.clientWidth : 0) - t),
        {
            width: t,
            height: e,
            x: r,
            y: n
        }));
        var n, i, r, o, s, a
    }
    function J(n, e, t) {
        var i, r = "clippingParents" === e ? (o = g(s(r = n)),
        m(i = 0 <= ["absolute", "fixed"].indexOf(b(r).position) && c(r) ? T(r) : r) ? o.filter(function(e) {
            return m(e) && Z(e, i) && "body" !== a(e)
        }) : []) : [].concat(e), o = [].concat(r, [t]), e = o[0], t = o.reduce(function(e, t) {
            t = K(n, t);
            return e.top = M(t.top, e.top),
            e.right = j(t.right, e.right),
            e.bottom = j(t.bottom, e.bottom),
            e.left = M(t.left, e.left),
            e
        }, K(n, e));
        return t.width = t.right - t.left,
        t.height = t.bottom - t.top,
        t.x = t.left,
        t.y = t.top,
        t
    }
    function z(e) {
        return e.split("-")[1]
    }
    function ee(e) {
        return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
    }
    function te(e) {
        var t, n = e.reference, i = e.element, e = e.placement, r = e ? P(e) : null, e = e ? z(e) : null, o = n.x + n.width / 2 - i.width / 2, s = n.y + n.height / 2 - i.height / 2;
        switch (r) {
        case E:
            t = {
                x: o,
                y: n.y - i.height
            };
            break;
        case C:
            t = {
                x: o,
                y: n.y + n.height
            };
            break;
        case A:
            t = {
                x: n.x + n.width,
                y: s
            };
            break;
        case O:
            t = {
                x: n.x - i.width,
                y: s
            };
            break;
        default:
            t = {
                x: n.x,
                y: n.y
            }
        }
        var a = r ? ee(r) : null;
        if (null != a) {
            var l = "y" === a ? "height" : "width";
            switch (e) {
            case N:
                t[a] = t[a] - (n[l] / 2 - i[l] / 2);
                break;
            case p:
                t[a] = t[a] + (n[l] / 2 - i[l] / 2)
            }
        }
        return t
    }
    function ne() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }
    function ie(e) {
        return Object.assign({}, ne(), e)
    }
    function re(n, e) {
        return e.reduce(function(e, t) {
            return e[t] = n,
            e
        }, {})
    }
    function H(e, t) {
        var i, t = t = void 0 === t ? {} : t, n = t.placement, n = void 0 === n ? e.placement : n, r = t.boundary, r = void 0 === r ? W : r, o = t.rootBoundary, o = void 0 === o ? F : o, s = t.elementContext, s = void 0 === s ? f : s, a = t.altBoundary, a = void 0 !== a && a, t = t.padding, t = void 0 === t ? 0 : t, t = ie("number" != typeof t ? t : re(t, L)), l = e.elements.reference, c = e.rects.popper, a = e.elements[a ? s === f ? V : f : s], a = J(m(a) ? a : a.contextElement || x(e.elements.popper), r, o), r = h(l), o = te({
            reference: r,
            element: c,
            strategy: "absolute",
            placement: n
        }), l = Q(Object.assign({}, c, o)), c = s === f ? l : r, u = {
            top: a.top - c.top + t.top,
            bottom: c.bottom - a.bottom + t.bottom,
            left: a.left - c.left + t.left,
            right: c.right - a.right + t.right
        }, o = e.modifiersData.offset;
        return s === f && o && (i = o[n],
        Object.keys(u).forEach(function(e) {
            var t = 0 <= [A, C].indexOf(e) ? 1 : -1
              , n = 0 <= [E, C].indexOf(e) ? "y" : "x";
            u[e] += i[n] * t
        })),
        u
    }
    var oe = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element."
      , se = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function ae() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return !t.some(function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        })
    }
    function t(e) {
        var e = e = void 0 === e ? {} : e
          , t = e.defaultModifiers
          , p = void 0 === t ? [] : t
          , t = e.defaultOptions
          , f = void 0 === t ? se : t;
        return function(s, a, t) {
            void 0 === t && (t = f);
            var n, i, l = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, se, f),
                modifiersData: {},
                elements: {
                    reference: s,
                    popper: a
                },
                attributes: {},
                styles: {}
            }, c = [], u = !1, h = {
                state: l,
                setOptions: function(e) {
                    d(),
                    l.options = Object.assign({}, f, l.options, e),
                    l.scrollParents = {
                        reference: m(s) ? g(s) : s.contextElement ? g(s.contextElement) : [],
                        popper: g(a)
                    };
                    e = [].concat(p, l.options.modifiers),
                    t = e.reduce(function(e, t) {
                        var n = e[t.name];
                        return e[t.name] = n ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data)
                        }) : t,
                        e
                    }, {}),
                    e = Object.keys(t).map(function(e) {
                        return t[e]
                    }),
                    n = $(e);
                    var n, t, i, r, o, e = y.reduce(function(e, t) {
                        return e.concat(n.filter(function(e) {
                            return e.phase === t
                        }))
                    }, []), e = (l.orderedModifiers = e.filter(function(e) {
                        return e.enabled
                    }),
                    e = [].concat(e, l.options.modifiers),
                    r = function(e) {
                        return e.name
                    }
                    ,
                    o = new Set,
                    e.filter(function(e) {
                        e = r(e);
                        if (!o.has(e))
                            return o.add(e),
                            !0
                    })), e = ((i = e).forEach(function(n) {
                        Object.keys(n).forEach(function(e) {
                            switch (e) {
                            case "name":
                                "string" != typeof n.name && console.error(w(_, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
                                break;
                            case "enabled":
                                "boolean" != typeof n.enabled && console.error(w(_, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
                            case "phase":
                                y.indexOf(n.phase) < 0 && console.error(w(_, n.name, '"phase"', "either " + y.join(", "), '"' + String(n.phase) + '"'));
                                break;
                            case "fn":
                                "function" != typeof n.fn && console.error(w(_, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
                                break;
                            case "effect":
                                "function" != typeof n.effect && console.error(w(_, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
                                break;
                            case "requires":
                                Array.isArray(n.requires) || console.error(w(_, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
                                break;
                            case "requiresIfExists":
                                Array.isArray(n.requiresIfExists) || console.error(w(_, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
                                break;
                            case "options":
                            case "data":
                                break;
                            default:
                                console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + X.map(function(e) {
                                    return '"' + e + '"'
                                }).join(", ") + '; but "' + e + '" was provided.')
                            }
                            n.requires && n.requires.forEach(function(t) {
                                null == i.find(function(e) {
                                    return e.name === t
                                }) && console.error(w(G, String(n.name), t, t))
                            })
                        })
                    }),
                    P(l.options.placement) !== D || l.orderedModifiers.find(function(e) {
                        return "flip" === e.name
                    }) || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" ")),
                    b(a));
                    return [e.marginTop, e.marginRight, e.marginBottom, e.marginLeft].some(function(e) {
                        return parseFloat(e)
                    }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" ")),
                    l.orderedModifiers.forEach(function(e) {
                        var t = e.name
                          , n = e.options
                          , e = e.effect;
                        "function" == typeof e && (e = e({
                            state: l,
                            name: t,
                            instance: h,
                            options: void 0 === n ? {} : n
                        }),
                        c.push(e || function() {}
                        ))
                    }),
                    h.update()
                },
                forceUpdate: function() {
                    if (!u) {
                        var e = l.elements
                          , t = e.reference
                          , e = e.popper;
                        if (ae(t, e)) {
                            l.rects = {
                                reference: q(t, T(e), "fixed" === l.options.strategy),
                                popper: S(e)
                            },
                            l.reset = !1,
                            l.placement = l.options.placement,
                            l.orderedModifiers.forEach(function(e) {
                                return l.modifiersData[e.name] = Object.assign({}, e.data)
                            });
                            for (var n, i, r, o = 0, s = 0; s < l.orderedModifiers.length; s++) {
                                if (100 < (o += 1)) {
                                    console.error("Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.");
                                    break
                                }
                                !0 === l.reset ? (l.reset = !1,
                                s = -1) : (n = (r = l.orderedModifiers[s]).fn,
                                i = r.options,
                                r = r.name,
                                "function" == typeof n && (l = n({
                                    state: l,
                                    options: void 0 === i ? {} : i,
                                    name: r,
                                    instance: h
                                }) || l))
                            }
                        } else
                            console.error(oe)
                    }
                },
                update: (n = function() {
                    return new Promise(function(e) {
                        h.forceUpdate(),
                        e(l)
                    }
                    )
                }
                ,
                function() {
                    return i = i || new Promise(function(e) {
                        Promise.resolve().then(function() {
                            i = void 0,
                            e(n())
                        })
                    }
                    )
                }
                ),
                destroy: function() {
                    d(),
                    u = !0
                }
            };
            return ae(s, a) ? h.setOptions(t).then(function(e) {
                !u && t.onFirstUpdate && t.onFirstUpdate(e)
            }) : console.error(oe),
            h;
            function d() {
                c.forEach(function(e) {
                    return e()
                }),
                c = []
            }
        }
    }
    var I = {
        passive: !0
    };
    var n = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
            var t = e.state
              , n = e.instance
              , i = (e = e.options).scroll
              , r = void 0 === i || i
              , o = void 0 === (i = e.resize) || i
              , s = v(t.elements.popper)
              , a = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return r && a.forEach(function(e) {
                e.addEventListener("scroll", n.update, I)
            }),
            o && s.addEventListener("resize", n.update, I),
            function() {
                r && a.forEach(function(e) {
                    e.removeEventListener("scroll", n.update, I)
                }),
                o && s.removeEventListener("resize", n.update, I)
            }
        },
        data: {}
    };
    var i = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state
              , e = e.name;
            t.modifiersData[e] = te({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            })
        },
        data: {}
    }
      , le = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function ce(e) {
        var t, n, i, r = e.popper, o = e.popperRect, s = e.placement, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, e = e.roundOffsets, h = !0 === e ? (h = (d = a).x,
        d = a.y,
        p = window.devicePixelRatio || 1,
        {
            x: k(k(h * p) / p) || 0,
            y: k(k(d * p) / p) || 0
        }) : "function" == typeof e ? e(a) : a, d = h.x, p = void 0 === d ? 0 : d, e = h.y, e = void 0 === e ? 0 : e, f = a.hasOwnProperty("x"), a = a.hasOwnProperty("y"), m = O, g = E, y = window, r = (u && (i = "clientHeight",
        n = "clientWidth",
        (t = T(r)) === v(r) && "static" !== b(t = x(r)).position && (i = "scrollHeight",
        n = "scrollWidth"),
        s === E && (g = C,
        e = (e - (t[i] - o.height)) * (c ? 1 : -1)),
        s === O) && (m = A,
        p = (p - (t[n] - o.width)) * (c ? 1 : -1)),
        Object.assign({
            position: l
        }, u && le));
        return c ? Object.assign({}, r, ((i = {})[g] = a ? "0" : "",
        i[m] = f ? "0" : "",
        i.transform = (y.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + e + "px)" : "translate3d(" + p + "px, " + e + "px, 0)",
        i)) : Object.assign({}, r, ((s = {})[g] = a ? e + "px" : "",
        s[m] = f ? p + "px" : "",
        s.transform = "",
        s))
    }
    var ue = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e) {
            var t = e.state
              , e = e.options
              , n = void 0 === (n = e.gpuAcceleration) || n
              , i = void 0 === (i = e.adaptive) || i
              , e = void 0 === (e = e.roundOffsets) || e
              , r = b(t.elements.popper).transitionProperty || ""
              , n = (i && ["transform", "top", "right", "bottom", "left"].some(function(e) {
                return 0 <= r.indexOf(e)
            }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" ")),
            {
                placement: P(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: n
            });
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, ce(Object.assign({}, n, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: i,
                roundOffsets: e
            })))),
            null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, ce(Object.assign({}, n, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: e
            })))),
            t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
            })
        },
        data: {}
    };
    var he = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
            var r = e.state;
            Object.keys(r.elements).forEach(function(e) {
                var t = r.styles[e] || {}
                  , n = r.attributes[e] || {}
                  , i = r.elements[e];
                c(i) && a(i) && (Object.assign(i.style, t),
                Object.keys(n).forEach(function(e) {
                    var t = n[e];
                    !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                }))
            })
        },
        effect: function(e) {
            var i = e.state
              , r = {
                popper: {
                    position: i.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(i.elements.popper.style, r.popper),
            i.styles = r,
            i.elements.arrow && Object.assign(i.elements.arrow.style, r.arrow),
            function() {
                Object.keys(i.elements).forEach(function(e) {
                    var t = i.elements[e]
                      , n = i.attributes[e] || {}
                      , e = Object.keys((i.styles.hasOwnProperty(e) ? i.styles : r)[e]).reduce(function(e, t) {
                        return e[t] = "",
                        e
                    }, {});
                    c(t) && a(t) && (Object.assign(t.style, e),
                    Object.keys(n).forEach(function(e) {
                        t.removeAttribute(e)
                    }))
                })
            }
        },
        requires: ["computeStyles"]
    };
    var de = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(e) {
            var s = e.state
              , t = e.options
              , e = e.name
              , a = void 0 === (t = t.offset) ? [0, 0] : t
              , t = U.reduce(function(e, t) {
                var n, i, r, o;
                return e[t] = (t = t,
                n = s.rects,
                i = a,
                r = P(t),
                o = 0 <= [O, E].indexOf(r) ? -1 : 1,
                t = (n = "function" == typeof i ? i(Object.assign({}, n, {
                    placement: t
                })) : i)[0] || 0,
                i = (n[1] || 0) * o,
                0 <= [O, A].indexOf(r) ? {
                    x: i,
                    y: t
                } : {
                    x: t,
                    y: i
                }),
                e
            }, {})
              , n = (i = t[s.placement]).x
              , i = i.y;
            null != s.modifiersData.popperOffsets && (s.modifiersData.popperOffsets.x += n,
            s.modifiersData.popperOffsets.y += i),
            s.modifiersData[e] = t
        }
    }
      , pe = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Y(e) {
        return e.replace(/left|right|bottom|top/g, function(e) {
            return pe[e]
        })
    }
    var fe = {
        start: "end",
        end: "start"
    };
    function me(e) {
        return e.replace(/start|end/g, function(e) {
            return fe[e]
        })
    }
    var ge = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var h = e.state
              , t = e.options
              , e = e.name;
            if (!h.modifiersData[e]._skip) {
                for (var n = t.mainAxis, i = void 0 === n || n, n = t.altAxis, r = void 0 === n || n, n = t.fallbackPlacements, d = t.padding, p = t.boundary, f = t.rootBoundary, o = t.altBoundary, s = t.flipVariations, m = void 0 === s || s, g = t.allowedAutoPlacements, s = h.options.placement, t = P(s), n = n || (t === s || !m ? [Y(s)] : P(n = s) === D ? [] : (t = Y(n),
                [me(n), t, me(t)])), a = [s].concat(n).reduce(function(e, t) {
                    return e.concat(P(t) === D ? (n = h,
                    i = (e = e = void 0 === (e = {
                        placement: t,
                        boundary: p,
                        rootBoundary: f,
                        padding: d,
                        flipVariations: m,
                        allowedAutoPlacements: g
                    }) ? {} : e).placement,
                    r = e.boundary,
                    o = e.rootBoundary,
                    s = e.padding,
                    a = e.flipVariations,
                    l = void 0 === (e = e.allowedAutoPlacements) ? U : e,
                    c = z(i),
                    e = c ? a ? B : B.filter(function(e) {
                        return z(e) === c
                    }) : L,
                    0 === (i = e.filter(function(e) {
                        return 0 <= l.indexOf(e)
                    })).length && (i = e,
                    console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "))),
                    u = i.reduce(function(e, t) {
                        return e[t] = H(n, {
                            placement: t,
                            boundary: r,
                            rootBoundary: o,
                            padding: s
                        })[P(t)],
                        e
                    }, {}),
                    Object.keys(u).sort(function(e, t) {
                        return u[e] - u[t]
                    })) : t);
                    var n, i, r, o, s, a, l, c, u
                }, []), l = h.rects.reference, c = h.rects.popper, u = new Map, y = !0, v = a[0], x = 0; x < a.length; x++) {
                    var b = a[x]
                      , w = P(b)
                      , _ = z(b) === N
                      , k = 0 <= [E, C].indexOf(w)
                      , S = k ? "width" : "height"
                      , T = H(h, {
                        placement: b,
                        boundary: p,
                        rootBoundary: f,
                        altBoundary: o,
                        padding: d
                    })
                      , k = k ? _ ? A : O : _ ? C : E
                      , _ = (l[S] > c[S] && (k = Y(k)),
                    Y(k))
                      , S = [];
                    if (i && S.push(T[w] <= 0),
                    r && S.push(T[k] <= 0, T[_] <= 0),
                    S.every(function(e) {
                        return e
                    })) {
                        v = b,
                        y = !1;
                        break
                    }
                    u.set(b, S)
                }
                if (y)
                    for (var M = m ? 3 : 1; 0 < M; M--)
                        if ("break" === function(t) {
                            var e = a.find(function(e) {
                                e = u.get(e);
                                if (e)
                                    return e.slice(0, t).every(function(e) {
                                        return e
                                    })
                            });
                            if (e)
                                return v = e,
                                "break"
                        }(M))
                            break;
                h.placement !== v && (h.modifiersData[e]._skip = !0,
                h.placement = v,
                h.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function R(e, t, n) {
        return M(e, j(t, n))
    }
    var ye = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, n, i, r, o, s, a, l, c, u = e.state, h = e.options, e = e.name, d = void 0 === (d = h.mainAxis) || d, p = void 0 !== (p = h.altAxis) && p, f = h.boundary, m = h.rootBoundary, g = h.altBoundary, y = h.padding, v = void 0 === (v = h.tether) || v, h = void 0 === (h = h.tetherOffset) ? 0 : h, f = H(u, {
                boundary: f,
                rootBoundary: m,
                padding: y,
                altBoundary: g
            }), m = P(u.placement), g = !(y = z(u.placement)), x = "x" === (m = ee(m)) ? "y" : "x", b = u.modifiersData.popperOffsets, w = u.rects.reference, _ = u.rects.popper, h = "function" == typeof h ? h(Object.assign({}, u.rects, {
                placement: u.placement
            })) : h, k = {
                x: 0,
                y: 0
            };
            b && ((d || p) && (o = "y" === m ? "height" : "width",
            t = b[m],
            n = b[m] + f[c = "y" === m ? E : O],
            i = b[m] - f[a = "y" === m ? C : A],
            s = v ? -_[o] / 2 : 0,
            r = (y === N ? w : _)[o],
            y = y === N ? -_[o] : -w[o],
            _ = u.elements.arrow,
            _ = v && _ ? S(_) : {
                width: 0,
                height: 0
            },
            c = (l = u.modifiersData["arrow#persistent"] ? u.modifiersData["arrow#persistent"].padding : ne())[c],
            l = l[a],
            a = R(0, w[o], _[o]),
            _ = g ? w[o] / 2 - s - a - c - h : r - a - c - h,
            r = g ? -w[o] / 2 + s + a + l + h : y + a + l + h,
            g = (c = u.elements.arrow && T(u.elements.arrow)) ? "y" === m ? c.clientTop || 0 : c.clientLeft || 0 : 0,
            w = u.modifiersData.offset ? u.modifiersData.offset[u.placement][m] : 0,
            o = b[m] + _ - w - g,
            s = b[m] + r - w,
            d && (y = R(v ? j(n, o) : n, t, v ? M(i, s) : i),
            b[m] = y,
            k[m] = y - t),
            p) && (l = (a = b[x]) + f["x" === m ? E : O],
            h = a - f["x" === m ? C : A],
            c = R(v ? j(l, o) : l, a, v ? M(h, s) : h),
            b[x] = c,
            k[x] = c - a),
            u.modifiersData[e] = k)
        },
        requiresIfExists: ["offset"]
    };
    var ve = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, n, i, r, o = e.state, s = e.name, e = e.options, a = o.elements.arrow, l = o.modifiersData.popperOffsets, c = ee(u = P(o.placement)), u = 0 <= [O, A].indexOf(u) ? "height" : "width";
            a && l && (e = e.padding,
            n = o,
            n = ie("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, n.rects, {
                placement: n.placement
            })) : e) ? e : re(e, L)),
            e = S(a),
            r = "y" === c ? E : O,
            i = "y" === c ? C : A,
            t = o.rects.reference[u] + o.rects.reference[c] - l[c] - o.rects.popper[u],
            l = l[c] - o.rects.reference[c],
            a = (a = T(a)) ? "y" === c ? a.clientHeight || 0 : a.clientWidth || 0 : 0,
            r = n[r],
            n = a - e[u] - n[i],
            r = R(r, i = a / 2 - e[u] / 2 + (t / 2 - l / 2), n),
            o.modifiersData[s] = ((a = {})[c] = r,
            a.centerOffset = r - i,
            a))
        },
        effect: function(e) {
            var t = e.state;
            null == (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e) || "string" == typeof e && !(e = t.elements.popper.querySelector(e)) || (c(e) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" ")),
            Z(t.elements.popper, e) ? t.elements.arrow = e : console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" ")))
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };
    function xe(e, t, n) {
        return {
            top: e.top - t.height - (n = void 0 === n ? {
                x: 0,
                y: 0
            } : n).y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }
    function be(t) {
        return [E, A, C, O].some(function(e) {
            return 0 <= t[e]
        })
    }
    var we = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(e) {
            var t = e.state
              , e = e.name
              , n = t.rects.reference
              , i = t.rects.popper
              , r = t.modifiersData.preventOverflow
              , o = H(t, {
                elementContext: "reference"
            })
              , s = H(t, {
                altBoundary: !0
            })
              , o = xe(o, n)
              , n = xe(s, i, r)
              , s = be(o)
              , i = be(n);
            t.modifiersData[e] = {
                referenceClippingOffsets: o,
                popperEscapeOffsets: n,
                isReferenceHidden: s,
                hasPopperEscaped: i
            },
            t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": s,
                "data-popper-escaped": i
            })
        }
    }
      , _e = t({
        defaultModifiers: [n, i, ue, he]
    })
      , ke = [n, i, ue, he, de, ge, ye, ve, we]
      , Se = t({
        defaultModifiers: ke
    });
    e.applyStyles = he,
    e.arrow = ve,
    e.computeStyles = ue,
    e.createPopper = Se,
    e.createPopperLite = _e,
    e.defaultModifiers = ke,
    e.detectOverflow = H,
    e.eventListeners = n,
    e.flip = ge,
    e.hide = we,
    e.offset = de,
    e.popperGenerator = t,
    e.popperOffsets = i,
    e.preventOverflow = ye,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("popper.js")) : "function" == typeof define && define.amd ? define(["popper.js"], t) : e.Tooltip = t(e.Popper)
}(this, function(r) {
    "use strict";
    r = r && "default"in r ? r.default : r;
    var e = function(e, t, n) {
        return t && l(e.prototype, t),
        n && l(e, n),
        e
    }
      , o = Object.assign || function(e) {
        for (var t, n = 1; n < arguments.length; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }
      , i = {
        container: !1,
        delay: 0,
        html: !1,
        placement: "top",
        title: "",
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        offset: 0
    };
    e(a, [{
        key: "_create",
        value: function(e, t, n, i) {
            var r, o = window.document.createElement("div"), t = (o.innerHTML = t.trim(),
            o.childNodes[0]), o = (t.id = "tooltip_" + Math.random().toString(36).substr(2, 10),
            t.setAttribute("aria-hidden", "false"),
            o.querySelector(this.innerSelector));
            return 1 === n.nodeType || 11 === n.nodeType ? i && o.appendChild(n) : (r = n) && "[object Function]" === {}.toString.call(r) ? (r = n.call(e),
            i ? o.innerHTML = r : o.innerText = r) : i ? o.innerHTML = n : o.innerText = n,
            t
        }
    }, {
        key: "_show",
        value: function(e, t) {
            var n, i;
            return this._isOpen && !this._isOpening || (this._isOpen = !0,
            this._tooltipNode ? (this._tooltipNode.style.display = "",
            this._tooltipNode.setAttribute("aria-hidden", "false"),
            this.popperInstance.update()) : (n = e.getAttribute("title") || t.title) && (n = this._create(e, t.template, n, t.html),
            e.setAttribute("aria-describedby", n.id),
            i = this._findContainer(t.container, e),
            this._append(n, i),
            this._popperOptions = o({}, t.popperOptions, {
                placement: t.placement
            }),
            this._popperOptions.modifiers = o({}, this._popperOptions.modifiers, {
                arrow: {
                    element: this.arrowSelector
                },
                offset: {
                    offset: t.offset
                }
            }),
            t.boundariesElement && (this._popperOptions.modifiers.preventOverflow = {
                boundariesElement: t.boundariesElement
            }),
            this.popperInstance = new r(e,n,this._popperOptions),
            this._tooltipNode = n)),
            this
        }
    }, {
        key: "_hide",
        value: function() {
            return this._isOpen && (this._isOpen = !1,
            this._tooltipNode.style.display = "none",
            this._tooltipNode.setAttribute("aria-hidden", "true")),
            this
        }
    }, {
        key: "_dispose",
        value: function() {
            var n = this;
            return this._events.forEach(function(e) {
                var t = e.func
                  , e = e.event;
                n.reference.removeEventListener(e, t)
            }),
            this._events = [],
            this._tooltipNode && (this._hide(),
            this.popperInstance.destroy(),
            !this.popperInstance.options.removeOnDestroy) && (this._tooltipNode.parentNode.removeChild(this._tooltipNode),
            this._tooltipNode = null),
            this
        }
    }, {
        key: "_findContainer",
        value: function(e, t) {
            return "string" == typeof e ? e = window.document.querySelector(e) : !1 === e && (e = t.parentNode),
            e
        }
    }, {
        key: "_append",
        value: function(e, t) {
            t.appendChild(e)
        }
    }, {
        key: "_setEventListeners",
        value: function(n, e, i) {
            var r = this
              , t = []
              , o = [];
            e.forEach(function(e) {
                "hover" === e ? (t.push("mouseenter"),
                o.push("mouseleave")) : "focus" === e ? (t.push("focus"),
                o.push("blur")) : "click" === e && (t.push("click"),
                o.push("click"))
            }),
            t.forEach(function(e) {
                function t(e) {
                    !0 !== r._isOpening && (e.usedByTooltip = !0,
                    r._scheduleShow(n, i.delay, i, e))
                }
                r._events.push({
                    event: e,
                    func: t
                }),
                n.addEventListener(e, t)
            }),
            o.forEach(function(e) {
                function t(e) {
                    !0 !== e.usedByTooltip && r._scheduleHide(n, i.delay, i, e)
                }
                r._events.push({
                    event: e,
                    func: t
                }),
                n.addEventListener(e, t)
            })
        }
    }, {
        key: "_scheduleShow",
        value: function(e, t, n) {
            var i = this
              , t = (this._isOpening = !0,
            t && t.show || t || 0);
            this._showTimeout = window.setTimeout(function() {
                return i._show(e, n)
            }, t)
        }
    }, {
        key: "_scheduleHide",
        value: function(e, t, n, i) {
            var r = this
              , o = (this._isOpening = !1,
            t && t.hide || t || 0);
            window.setTimeout(function() {
                if (window.clearTimeout(r._showTimeout),
                !1 !== r._isOpen && document.body.contains(r._tooltipNode)) {
                    if ("mouseleave" === i.type)
                        if (r._setTooltipNodeEvent(i, e, t, n))
                            return;
                    r._hide(e, n)
                }
            }, o)
        }
    }]);
    var s = function() {
        var s = this;
        this.show = function() {
            return s._show(s.reference, s.options)
        }
        ,
        this.hide = function() {
            return s._hide()
        }
        ,
        this.dispose = function() {
            return s._dispose()
        }
        ,
        this.toggle = function() {
            return s._isOpen ? s.hide() : s.show()
        }
        ,
        this.arrowSelector = ".tooltip-arrow, .tooltip__arrow",
        this.innerSelector = ".tooltip-inner, .tooltip__inner",
        this._events = [],
        this._setTooltipNodeEvent = function(i, r, e, o) {
            var t = i.relatedreference || i.toElement || i.relatedTarget;
            return !!s._tooltipNode.contains(t) && (s._tooltipNode.addEventListener(i.type, function e(t) {
                var n = t.relatedreference || t.toElement || t.relatedTarget;
                s._tooltipNode.removeEventListener(i.type, e),
                r.contains(n) || s._scheduleHide(r, o.delay, o, t)
            }),
            !0)
        }
    };
    function a(e, t) {
        if (!(this instanceof a))
            throw new TypeError("Cannot call a class as a function");
        s.call(this),
        t = o({}, i, t),
        e.jquery && (e = e[0]),
        this.reference = e;
        var n = "string" == typeof (this.options = t).trigger ? t.trigger.split(" ").filter(function(e) {
            return -1 !== ["click", "hover", "focus"].indexOf(e)
        }) : [];
        this._isOpen = !1,
        this._popperOptions = {},
        this._setEventListeners(e, n, t)
    }
    function l(e, t) {
        for (var n, i = 0; i < t.length; i++)
            (n = t[i]).enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
    }
    return a
}),
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t(e.Popper)
}(this, function(e) {
    "use strict";
    const n = function(e) {
        if (e && e.__esModule)
            return e;
        var t, n = Object.create(null, {
            [Symbol.toStringTag]: {
                value: "Module"
            }
        });
        if (e)
            for (const i in e)
                "default" !== i && (t = Object.getOwnPropertyDescriptor(e, i),
                Object.defineProperty(n, i, t.get ? t : {
                    enumerable: !0,
                    get: ()=>e[i]
                }));
        return n.default = e,
        Object.freeze(n)
    }(e)
      , z = "transitionend"
      , H = t=>{
        let n = t.getAttribute("data-bs-target");
        if (!n || "#" === n) {
            let e = t.getAttribute("href");
            if (!e || !e.includes("#") && !e.startsWith("."))
                return null;
            e.includes("#") && !e.startsWith("#") && (e = "#" + e.split("#")[1]),
            n = e && "#" !== e ? e.trim() : null
        }
        return n
    }
      , I = e=>{
        e = H(e);
        return e && document.querySelector(e) ? e : null
    }
      , r = e=>{
        e = H(e);
        return e ? document.querySelector(e) : null
    }
      , Y = e=>{
        e.dispatchEvent(new Event(z))
    }
      , o = e=>!(!e || "object" != typeof e) && void 0 !== (e = void 0 !== e.jquery ? e[0] : e).nodeType
      , i = e=>o(e) ? e.jquery ? e[0] : e : "string" == typeof e && 0 < e.length ? document.querySelector(e) : null
      , s = e=>{
        if (!o(e) || 0 === e.getClientRects().length)
            return !1;
        const t = "visible" === getComputedStyle(e).getPropertyValue("visibility")
          , n = e.closest("details:not([open])");
        if (n && n !== e) {
            const t = e.closest("summary");
            if (t && t.parentNode !== n)
                return !1;
            if (null === t)
                return !1
        }
        return t
    }
      , a = e=>!e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"))
      , R = e=>{
        var t;
        return document.documentElement.attachShadow ? "function" == typeof e.getRootNode ? (t = e.getRootNode())instanceof ShadowRoot ? t : null : e instanceof ShadowRoot ? e : e.parentNode ? R(e.parentNode) : null : null
    }
      , l = ()=>{}
      , c = e=>{
        e.offsetHeight
    }
      , q = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
      , W = []
      , u = ()=>"rtl" === document.documentElement.dir
      , t = i=>{
        var e = ()=>{
            const e = q();
            if (e) {
                const t = i.NAME
                  , n = e.fn[t];
                e.fn[t] = i.jQueryInterface,
                e.fn[t].Constructor = i,
                e.fn[t].noConflict = ()=>(e.fn[t] = n,
                i.jQueryInterface)
            }
        }
        ;
        "loading" === document.readyState ? (W.length || document.addEventListener("DOMContentLoaded", ()=>{
            for (const e of W)
                e()
        }
        ),
        W.push(e)) : e()
    }
      , h = e=>{
        "function" == typeof e && e()
    }
      , F = (n,r,e=!0)=>{
        if (e) {
            e = (()=>{
                if (!r)
                    return 0;
                let {transitionDuration: e, transitionDelay: t} = window.getComputedStyle(r);
                var n = Number.parseFloat(e)
                  , i = Number.parseFloat(t);
                return n || i ? (e = e.split(",")[0],
                t = t.split(",")[0],
                1e3 * (Number.parseFloat(e) + Number.parseFloat(t))) : 0
            }
            )() + 5;
            let t = !1;
            const i = ({target: e})=>{
                e === r && (t = !0,
                r.removeEventListener(z, i),
                h(n))
            }
            ;
            r.addEventListener(z, i),
            setTimeout(()=>{
                t || Y(r)
            }
            , e)
        } else
            h(n)
    }
      , V = (e,t,n,i)=>{
        var r = e.length;
        let o = e.indexOf(t);
        return -1 === o ? !n && i ? e[r - 1] : e[0] : (o += n ? 1 : -1,
        i && (o = (o + r) % r),
        e[Math.max(0, Math.min(o, r - 1))])
    }
      , B = /[^.]*(?=\..*)\.|.*/
      , U = /\..*/
      , $ = /::\d+$/
      , G = {};
    let X = 1;
    const Z = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , Q = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function K(e, t) {
        return t && t + "::" + X++ || e.uidEvent || X++
    }
    function J(e) {
        var t = K(e);
        return e.uidEvent = t,
        G[t] = G[t] || {},
        G[t]
    }
    function ee(e, t, n=null) {
        return Object.values(e).find(e=>e.callable === t && e.delegationSelector === n)
    }
    function te(e, t, n) {
        var i = "string" == typeof t
          , t = !i && t || n;
        let r = re(e);
        return [i, t, r = Q.has(r) ? r : e]
    }
    function ne(i, r, o, s, a) {
        if ("string" == typeof r && i) {
            let[e,t,n] = te(r, o, s);
            if (r in Z) {
                const i = t=>function(e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                        return t.call(this, e)
                }
                ;
                t = i(t)
            }
            var s = J(i)
              , s = s[n] || (s[n] = {})
              , l = ee(s, t, e ? o : null);
            if (l)
                return l.oneOff = l.oneOff && a;
            var c, u, h, d, p, l = K(t, r.replace(B, "")), r = e ? (h = i,
            d = o,
            p = t,
            function t(n) {
                var i = h.querySelectorAll(d);
                for (let e = n["target"]; e && e !== this; e = e.parentNode)
                    for (const r of i)
                        if (r === e)
                            return oe(n, {
                                delegateTarget: e
                            }),
                            t.oneOff && f.off(h, n.type, d, p),
                            p.apply(e, [n])
            }
            ) : (c = i,
            u = t,
            function e(t) {
                return oe(t, {
                    delegateTarget: c
                }),
                e.oneOff && f.off(c, t.type, u),
                u.apply(c, [t])
            }
            );
            r.delegationSelector = e ? o : null,
            r.callable = t,
            r.oneOff = a,
            s[r.uidEvent = l] = r,
            i.addEventListener(n, r, e)
        }
    }
    function ie(e, t, n, i, r) {
        i = ee(t[n], i, r);
        i && (e.removeEventListener(n, i, Boolean(r)),
        delete t[n][i.uidEvent])
    }
    function re(e) {
        return e = e.replace(U, ""),
        Z[e] || e
    }
    const f = {
        on(e, t, n, i) {
            ne(e, t, n, i, !1)
        },
        one(e, t, n, i) {
            ne(e, t, n, i, !0)
        },
        off(e, t, n, i) {
            if ("string" == typeof t && e) {
                var [i,r,o] = te(t, n, i)
                  , s = o !== t
                  , a = J(e)
                  , l = a[o] || {}
                  , c = t.startsWith(".");
                if (void 0 === r) {
                    if (c)
                        for (const n of Object.keys(a)) {
                            u = void 0;
                            h = void 0;
                            d = void 0;
                            p = void 0;
                            f = void 0;
                            var u = e;
                            var h = a;
                            var d = n;
                            var p = t.slice(1);
                            var f = h[d] || {};
                            for (const m of Object.keys(f))
                                if (m.includes(p)) {
                                    const p = f[m];
                                    ie(u, h, d, p.callable, p.delegationSelector)
                                }
                        }
                    for (const n of Object.keys(l)) {
                        const i = n.replace($, "");
                        if (!s || t.includes(i)) {
                            const t = l[n];
                            ie(e, a, o, t.callable, t.delegationSelector)
                        }
                    }
                } else
                    Object.keys(l).length && ie(e, a, o, r, i ? n : null)
            }
        },
        trigger(e, t, n) {
            if ("string" != typeof t || !e)
                return null;
            var i = q();
            let r = null
              , o = !0
              , s = !0
              , a = !1;
            t !== re(t) && i && (r = i.Event(t, n),
            i(e).trigger(r),
            o = !r.isPropagationStopped(),
            s = !r.isImmediatePropagationStopped(),
            a = r.isDefaultPrevented());
            i = oe(i = new Event(t,{
                bubbles: o,
                cancelable: !0
            }), n);
            return a && i.preventDefault(),
            s && e.dispatchEvent(i),
            i.defaultPrevented && r && r.preventDefault(),
            i
        }
    };
    function oe(e, t) {
        for (const [n,i] of Object.entries(t || {}))
            try {
                e[n] = i
            } catch (t) {
                Object.defineProperty(e, n, {
                    configurable: !0,
                    get: ()=>i
                })
            }
        return e
    }
    const d = new Map
      , se = {
        set(e, t, n) {
            d.has(e) || d.set(e, new Map);
            e = d.get(e);
            e.has(t) || 0 === e.size ? e.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(e.keys())[0]}.`)
        },
        get: (e,t)=>d.has(e) && d.get(e).get(t) || null,
        remove(e, t) {
            var n;
            d.has(e) && ((n = d.get(e)).delete(t),
            0 === n.size) && d.delete(e)
        }
    };
    function ae(t) {
        if ("true" === t)
            return !0;
        if ("false" === t)
            return !1;
        if (t === Number(t).toString())
            return Number(t);
        if ("" === t || "null" === t)
            return null;
        if ("string" != typeof t)
            return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }
    function le(e) {
        return e.replace(/[A-Z]/g, e=>"-" + e.toLowerCase())
    }
    const p = {
        setDataAttribute(e, t, n) {
            e.setAttribute("data-bs-" + le(t), n)
        },
        removeDataAttribute(e, t) {
            e.removeAttribute("data-bs-" + le(t))
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            var n = {};
            for (const i of Object.keys(t.dataset).filter(e=>e.startsWith("bs") && !e.startsWith("bsConfig"))) {
                let e = i.replace(/^bs/, "");
                n[e = e.charAt(0).toLowerCase() + e.slice(1, e.length)] = ae(t.dataset[i])
            }
            return n
        },
        getDataAttribute: (e,t)=>ae(e.getAttribute("data-bs-" + le(t)))
    };
    class m {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(e) {
            return e = this._mergeConfigObj(e),
            e = this._configAfterMerge(e),
            this._typeCheckConfig(e),
            e
        }
        _configAfterMerge(e) {
            return e
        }
        _mergeConfigObj(e, t) {
            var n = o(t) ? p.getDataAttribute(t, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof n ? n : {},
                ...o(t) ? p.getDataAttributes(t) : {},
                ..."object" == typeof e ? e : {}
            }
        }
        _typeCheckConfig(e, t=this.constructor.DefaultType) {
            for (const r of Object.keys(t)) {
                var n = t[r]
                  , i = e[r]
                  , i = o(i) ? "element" : null == i ? "" + i : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(n).test(i))
                    throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${n}".`)
            }
        }
    }
    class g extends m {
        constructor(e, t) {
            super(),
            (e = i(e)) && (this._element = e,
            this._config = this._getConfig(t),
            se.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            se.remove(this._element, this.constructor.DATA_KEY),
            f.off(this._element, this.constructor.EVENT_KEY);
            for (const e of Object.getOwnPropertyNames(this))
                this[e] = null
        }
        _queueCallback(e, t, n=!0) {
            F(e, t, n)
        }
        _getConfig(e) {
            return e = this._mergeConfigObj(e, this._element),
            e = this._configAfterMerge(e),
            this._typeCheckConfig(e),
            e
        }
        static getInstance(e) {
            return se.get(i(e), this.DATA_KEY)
        }
        static getOrCreateInstance(e, t={}) {
            return this.getInstance(e) || new this(e,"object" == typeof t ? t : null)
        }
        static get VERSION() {
            return "5.2.3"
        }
        static get DATA_KEY() {
            return "bs." + this.NAME
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY
        }
        static eventName(e) {
            return "" + e + this.EVENT_KEY
        }
    }
    e = (t,n="hide")=>{
        const e = "click.dismiss" + t.EVENT_KEY
          , i = t.NAME;
        f.on(document, e, `[data-bs-dismiss="${i}"]`, function(e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            a(this) || (e = r(this) || this.closest("." + i),
            t.getOrCreateInstance(e)[n]())
        })
    }
    ;
    class y extends g {
        static get NAME() {
            return "alert"
        }
        close() {
            var e;
            f.trigger(this._element, "close.bs.alert").defaultPrevented || (this._element.classList.remove("show"),
            e = this._element.classList.contains("fade"),
            this._queueCallback(()=>this._destroyElement(), this._element, e))
        }
        _destroyElement() {
            this._element.remove(),
            f.trigger(this._element, "closed.bs.alert"),
            this.dispose()
        }
        static jQueryInterface(t) {
            return this.each(function() {
                var e = y.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    e(y, "close"),
    t(y);
    const ce = '[data-bs-toggle="button"]';
    class v extends g {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each(function() {
                var e = v.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            })
        }
    }
    f.on(document, "click.bs.button.data-api", ce, e=>{
        e.preventDefault();
        e = e.target.closest(ce);
        v.getOrCreateInstance(e).toggle()
    }
    ),
    t(v);
    const x = {
        find: (e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t, e)),
        findOne: (e,t=document.documentElement)=>Element.prototype.querySelector.call(t, e),
        children: (e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),
        parents(e, t) {
            var n = [];
            let i = e.parentNode.closest(t);
            for (; i; )
                n.push(i),
                i = i.parentNode.closest(t);
            return n
        },
        prev(e, t) {
            let n = e.previousElementSibling;
            for (; n; ) {
                if (n.matches(t))
                    return [n];
                n = n.previousElementSibling
            }
            return []
        },
        next(e, t) {
            let n = e.nextElementSibling;
            for (; n; ) {
                if (n.matches(t))
                    return [n];
                n = n.nextElementSibling
            }
            return []
        },
        focusableChildren(e) {
            var t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(e=>e + ':not([tabindex^="-"])').join(",");
            return this.find(t, e).filter(e=>!a(e) && s(e))
        }
    }
      , ue = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }
      , he = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class de extends m {
        constructor(e, t) {
            super(),
            (this._element = e) && de.isSupported() && (this._config = this._getConfig(t),
            this._deltaX = 0,
            this._supportPointerEvents = Boolean(window.PointerEvent),
            this._initEvents())
        }
        static get Default() {
            return ue
        }
        static get DefaultType() {
            return he
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            f.off(this._element, ".bs.swipe")
        }
        _start(e) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX
        }
        _end(e) {
            this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX),
            this._handleSwipe(),
            h(this._config.endCallback)
        }
        _move(e) {
            this._deltaX = e.touches && 1 < e.touches.length ? 0 : e.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            var e = Math.abs(this._deltaX);
            e <= 40 || (e = e / this._deltaX,
            this._deltaX = 0,
            e && h(0 < e ? this._config.rightCallback : this._config.leftCallback))
        }
        _initEvents() {
            this._supportPointerEvents ? (f.on(this._element, "pointerdown.bs.swipe", e=>this._start(e)),
            f.on(this._element, "pointerup.bs.swipe", e=>this._end(e)),
            this._element.classList.add("pointer-event")) : (f.on(this._element, "touchstart.bs.swipe", e=>this._start(e)),
            f.on(this._element, "touchmove.bs.swipe", e=>this._move(e)),
            f.on(this._element, "touchend.bs.swipe", e=>this._end(e)))
        }
        _eventIsPointerPenTouch(e) {
            return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType)
        }
        static isSupported() {
            return "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints
        }
    }
    const b = "next"
      , w = "prev"
      , _ = "left"
      , k = "right"
      , pe = "slid.bs.carousel"
      , fe = "carousel"
      , S = "active"
      , me = {
        ArrowLeft: k,
        ArrowRight: _
    }
      , ge = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }
      , ye = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class T extends g {
        constructor(e, t) {
            super(e, t),
            this._interval = null,
            this._activeElement = null,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._swipeHelper = null,
            this._indicatorsElement = x.findOne(".carousel-indicators", this._element),
            this._addEventListeners(),
            this._config.ride === fe && this.cycle()
        }
        static get Default() {
            return ge
        }
        static get DefaultType() {
            return ye
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(b)
        }
        nextWhenVisible() {
            !document.hidden && s(this._element) && this.next()
        }
        prev() {
            this._slide(w)
        }
        pause() {
            this._isSliding && Y(this._element),
            this._clearInterval()
        }
        cycle() {
            this._clearInterval(),
            this._updateInterval(),
            this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? f.one(this._element, pe, ()=>this.cycle()) : this.cycle())
        }
        to(e) {
            var t, n = this._getItems();
            e > n.length - 1 || e < 0 || (this._isSliding ? f.one(this._element, pe, ()=>this.to(e)) : (t = this._getItemIndex(this._getActive())) !== e && (t = t < e ? b : w,
            this._slide(t, n[e])))
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(),
            super.dispose()
        }
        _configAfterMerge(e) {
            return e.defaultInterval = e.interval,
            e
        }
        _addEventListeners() {
            this._config.keyboard && f.on(this._element, "keydown.bs.carousel", e=>this._keydown(e)),
            "hover" === this._config.pause && (f.on(this._element, "mouseenter.bs.carousel", ()=>this.pause()),
            f.on(this._element, "mouseleave.bs.carousel", ()=>this._maybeEnableCycle())),
            this._config.touch && de.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const e of x.find(".carousel-item img", this._element))
                f.on(e, "dragstart.bs.carousel", e=>e.preventDefault());
            const e = {
                leftCallback: ()=>this._slide(this._directionToOrder(_)),
                rightCallback: ()=>this._slide(this._directionToOrder(k)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new de(this._element,e)
        }
        _keydown(e) {
            var t;
            /input|textarea/i.test(e.target.tagName) || (t = me[e.key]) && (e.preventDefault(),
            this._slide(this._directionToOrder(t)))
        }
        _getItemIndex(e) {
            return this._getItems().indexOf(e)
        }
        _setActiveIndicatorElement(e) {
            var t;
            this._indicatorsElement && ((t = x.findOne(".active", this._indicatorsElement)).classList.remove(S),
            t.removeAttribute("aria-current"),
            t = x.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement)) && (t.classList.add(S),
            t.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            var e = this._activeElement || this._getActive();
            e && (e = Number.parseInt(e.getAttribute("data-bs-interval"), 10),
            this._config.interval = e || this._config.defaultInterval)
        }
        _slide(t, e=null) {
            if (!this._isSliding) {
                const n = this._getActive()
                  , i = t === b
                  , r = e || V(this._getItems(), n, i, this._config.wrap);
                if (r !== n) {
                    const o = this._getItemIndex(r)
                      , s = e=>f.trigger(this._element, e, {
                        relatedTarget: r,
                        direction: this._orderToDirection(t),
                        from: this._getItemIndex(n),
                        to: o
                    });
                    if (!s("slide.bs.carousel").defaultPrevented && n && r) {
                        e = Boolean(this._interval);
                        this.pause(),
                        this._isSliding = !0,
                        this._setActiveIndicatorElement(o),
                        this._activeElement = r;
                        const a = i ? "carousel-item-start" : "carousel-item-end"
                          , l = i ? "carousel-item-next" : "carousel-item-prev";
                        r.classList.add(l),
                        c(r),
                        n.classList.add(a),
                        r.classList.add(a),
                        this._queueCallback(()=>{
                            r.classList.remove(a, l),
                            r.classList.add(S),
                            n.classList.remove(S, l, a),
                            this._isSliding = !1,
                            s(pe)
                        }
                        , n, this._isAnimated()),
                        e && this.cycle()
                    }
                }
            }
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return x.findOne(".active.carousel-item", this._element)
        }
        _getItems() {
            return x.find(".carousel-item", this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval),
            this._interval = null)
        }
        _directionToOrder(e) {
            return u() ? e === _ ? w : b : e === _ ? b : w
        }
        _orderToDirection(e) {
            return u() ? e === w ? _ : k : e === w ? k : _
        }
        static jQueryInterface(t) {
            return this.each(function() {
                var e = T.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                            throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else
                    e.to(t)
            })
        }
    }
    f.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function(e) {
        var t = r(this);
        t && t.classList.contains(fe) && (e.preventDefault(),
        e = T.getOrCreateInstance(t),
        (t = this.getAttribute("data-bs-slide-to")) ? e.to(t) : "next" === p.getDataAttribute(this, "slide") ? e.next() : e.prev(),
        e._maybeEnableCycle())
    }),
    f.on(window, "load.bs.carousel.data-api", ()=>{
        for (const e of x.find('[data-bs-ride="carousel"]'))
            T.getOrCreateInstance(e)
    }
    ),
    t(T);
    const ve = "show"
      , M = "collapse"
      , xe = "collapsing"
      , be = '[data-bs-toggle="collapse"]'
      , we = {
        parent: null,
        toggle: !0
    }
      , _e = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class E extends g {
        constructor(e, t) {
            super(e, t),
            this._isTransitioning = !1,
            this._triggerArray = [];
            const n = x.find(be);
            for (const e of n) {
                const t = I(e)
                  , n = x.find(t).filter(e=>e === this._element);
                null !== t && n.length && this._triggerArray.push(e)
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return we
        }
        static get DefaultType() {
            return _e
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (!this._isTransitioning && !this._isShown()) {
                let e = [];
                if (!((e = this._config.parent ? this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(e=>e !== this._element).map(e=>E.getOrCreateInstance(e, {
                    toggle: !1
                })) : e).length && e[0]._isTransitioning || f.trigger(this._element, "show.bs.collapse").defaultPrevented)) {
                    for (const n of e)
                        n.hide();
                    const n = this._getDimension();
                    this._element.classList.remove(M),
                    this._element.classList.add(xe),
                    this._element.style[n] = 0,
                    this._addAriaAndCollapsedClass(this._triggerArray, !0),
                    this._isTransitioning = !0;
                    var t = "scroll" + (n[0].toUpperCase() + n.slice(1));
                    this._queueCallback(()=>{
                        this._isTransitioning = !1,
                        this._element.classList.remove(xe),
                        this._element.classList.add(M, ve),
                        this._element.style[n] = "",
                        f.trigger(this._element, "shown.bs.collapse")
                    }
                    , this._element, !0),
                    this._element.style[n] = this._element[t] + "px"
                }
            }
        }
        hide() {
            if (!this._isTransitioning && this._isShown() && !f.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
                const t = this._getDimension();
                this._element.style[t] = this._element.getBoundingClientRect()[t] + "px",
                c(this._element),
                this._element.classList.add(xe),
                this._element.classList.remove(M, ve);
                for (const t of this._triggerArray) {
                    var e = r(t);
                    e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
                }
                this._isTransitioning = !0,
                this._element.style[t] = "",
                this._queueCallback(()=>{
                    this._isTransitioning = !1,
                    this._element.classList.remove(xe),
                    this._element.classList.add(M),
                    f.trigger(this._element, "hidden.bs.collapse")
                }
                , this._element, !0)
            }
        }
        _isShown(e=this._element) {
            return e.classList.contains(ve)
        }
        _configAfterMerge(e) {
            return e.toggle = Boolean(e.toggle),
            e.parent = i(e.parent),
            e
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (this._config.parent) {
                const e = this._getFirstLevelChildren(be);
                for (const t of e) {
                    const e = r(t);
                    e && this._addAriaAndCollapsedClass([t], this._isShown(e))
                }
            }
        }
        _getFirstLevelChildren(e) {
            const t = x.find(":scope .collapse .collapse", this._config.parent);
            return x.find(e, this._config.parent).filter(e=>!t.includes(e))
        }
        _addAriaAndCollapsedClass(e, t) {
            if (e.length)
                for (const n of e)
                    n.classList.toggle("collapsed", !t),
                    n.setAttribute("aria-expanded", t)
        }
        static jQueryInterface(t) {
            const n = {};
            return "string" == typeof t && /show|hide/.test(t) && (n.toggle = !1),
            this.each(function() {
                var e = E.getOrCreateInstance(this, n);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    f.on(document, "click.bs.collapse.data-api", be, function(e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        var t = I(this);
        for (const e of x.find(t))
            E.getOrCreateInstance(e, {
                toggle: !1
            }).toggle()
    }),
    t(E);
    const ke = "dropdown"
      , Se = "ArrowDown"
      , Te = "click.bs.dropdown.data-api"
      , Me = "keydown.bs.dropdown.data-api"
      , C = "show"
      , A = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
      , Ee = (A,
    ".dropdown-menu")
      , Ce = u() ? "top-end" : "top-start"
      , Ae = u() ? "top-start" : "top-end"
      , Oe = u() ? "bottom-end" : "bottom-start"
      , De = u() ? "bottom-start" : "bottom-end"
      , Le = u() ? "left-start" : "right-start"
      , Ne = u() ? "right-start" : "left-start"
      , Pe = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
    }
      , je = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class O extends g {
        constructor(e, t) {
            super(e, t),
            this._popper = null,
            this._parent = this._element.parentNode,
            this._menu = x.next(this._element, Ee)[0] || x.prev(this._element, Ee)[0] || x.findOne(Ee, this._parent),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return Pe
        }
        static get DefaultType() {
            return je
        }
        static get NAME() {
            return ke
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (!a(this._element) && !this._isShown()) {
                const e = {
                    relatedTarget: this._element
                };
                if (!f.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                    if (this._createPopper(),
                    "ontouchstart"in document.documentElement && !this._parent.closest(".navbar-nav"))
                        for (const e of [].concat(...document.body.children))
                            f.on(e, "mouseover", l);
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.add(C),
                    this._element.classList.add(C),
                    f.trigger(this._element, "shown.bs.dropdown", e)
                }
            }
        }
        hide() {
            var e;
            !a(this._element) && this._isShown() && (e = {
                relatedTarget: this._element
            },
            this._completeHide(e))
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(e) {
            if (!f.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented) {
                if ("ontouchstart"in document.documentElement)
                    for (const e of [].concat(...document.body.children))
                        f.off(e, "mouseover", l);
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(C),
                this._element.classList.remove(C),
                this._element.setAttribute("aria-expanded", "false"),
                p.removeDataAttribute(this._menu, "popper"),
                f.trigger(this._element, "hidden.bs.dropdown", e)
            }
        }
        _getConfig(e) {
            if ("object" != typeof (e = super._getConfig(e)).reference || o(e.reference) || "function" == typeof e.reference.getBoundingClientRect)
                return e;
            throw new TypeError(ke.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.')
        }
        _createPopper() {
            if (void 0 === n)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = this._parent : o(this._config.reference) ? e = i(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            var t = this._getPopperConfig();
            this._popper = n.createPopper(e, this._menu, t)
        }
        _isShown() {
            return this._menu.classList.contains(C)
        }
        _getPlacement() {
            var e, t = this._parent;
            return t.classList.contains("dropend") ? Le : t.classList.contains("dropstart") ? Ne : t.classList.contains("dropup-center") ? "top" : t.classList.contains("dropdown-center") ? "bottom" : (e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(),
            t.classList.contains("dropup") ? e ? Ae : Ce : e ? De : Oe)
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const t = this._config["offset"];
            return "string" == typeof t ? t.split(",").map(e=>Number.parseInt(e, 10)) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _getPopperConfig() {
            var e = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return !this._inNavbar && "static" !== this._config.display || (p.setDataAttribute(this._menu, "popper", "static"),
            e.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _selectMenuItem({key: e, target: t}) {
            var n = x.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(e=>s(e));
            n.length && V(n, t, e === Se, !n.includes(t)).focus()
        }
        static jQueryInterface(t) {
            return this.each(function() {
                var e = O.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
        static clearMenus(e) {
            if (2 !== e.button && ("keyup" !== e.type || "Tab" === e.key)) {
                const i = x.find('[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled).show');
                for (const r of i) {
                    const i = O.getInstance(r);
                    var t, n;
                    i && !1 !== i._config.autoClose && (t = (n = e.composedPath()).includes(i._menu),
                    n.includes(i._element) || "inside" === i._config.autoClose && !t || "outside" === i._config.autoClose && t || i._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName)) || (n = {
                        relatedTarget: i._element
                    },
                    "click" === e.type && (n.clickEvent = e),
                    i._completeHide(n)))
                }
            }
        }
        static dataApiKeydownHandler(e) {
            var t = /input|textarea/i.test(e.target.tagName)
              , n = "Escape" === e.key
              , i = ["ArrowUp", Se].includes(e.key);
            !i && !n || t && !n || (e.preventDefault(),
            t = this.matches(A) ? this : x.prev(this, A)[0] || x.next(this, A)[0] || x.findOne(A, e.delegateTarget.parentNode),
            n = O.getOrCreateInstance(t),
            i ? (e.stopPropagation(),
            n.show(),
            n._selectMenuItem(e)) : n._isShown() && (e.stopPropagation(),
            n.hide(),
            t.focus()))
        }
    }
    f.on(document, Me, A, O.dataApiKeydownHandler),
    f.on(document, Me, Ee, O.dataApiKeydownHandler),
    f.on(document, Te, O.clearMenus),
    f.on(document, "keyup.bs.dropdown.data-api", O.clearMenus),
    f.on(document, Te, A, function(e) {
        e.preventDefault(),
        O.getOrCreateInstance(this).toggle()
    }),
    t(O);
    const ze = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , He = ".sticky-top"
      , Ie = "padding-right"
      , Ye = "margin-right";
    class Re {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            var e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, Ie, e=>e + t),
            this._setElementAttributes(ze, Ie, e=>e + t),
            this._setElementAttributes(He, Ye, e=>e - t)
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, Ie),
            this._resetElementAttributes(ze, Ie),
            this._resetElementAttributes(He, Ye)
        }
        isOverflowing() {
            return 0 < this.getWidth()
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(e, n, i) {
            const r = this.getWidth();
            this._applyManipulationCallback(e, e=>{
                var t;
                e !== this._element && window.innerWidth > e.clientWidth + r || (this._saveInitialAttribute(e, n),
                t = window.getComputedStyle(e).getPropertyValue(n),
                e.style.setProperty(n, i(Number.parseFloat(t)) + "px"))
            }
            )
        }
        _saveInitialAttribute(e, t) {
            var n = e.style.getPropertyValue(t);
            n && p.setDataAttribute(e, t, n)
        }
        _resetElementAttributes(e, n) {
            this._applyManipulationCallback(e, e=>{
                var t = p.getDataAttribute(e, n);
                null !== t ? (p.removeDataAttribute(e, n),
                e.style.setProperty(n, t)) : e.style.removeProperty(n)
            }
            )
        }
        _applyManipulationCallback(e, t) {
            if (o(e))
                t(e);
            else
                for (const n of x.find(e, this._element))
                    t(n)
        }
    }
    const qe = "mousedown.bs.backdrop"
      , We = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }
      , Fe = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class Ve extends m {
        constructor(e) {
            super(),
            this._config = this._getConfig(e),
            this._isAppended = !1,
            this._element = null
        }
        static get Default() {
            return We
        }
        static get DefaultType() {
            return Fe
        }
        static get NAME() {
            return "backdrop"
        }
        show(e) {
            var t;
            this._config.isVisible ? (this._append(),
            t = this._getElement(),
            this._config.isAnimated && c(t),
            t.classList.add("show"),
            this._emulateAnimation(()=>{
                h(e)
            }
            )) : h(e)
        }
        hide(e) {
            this._config.isVisible ? (this._getElement().classList.remove("show"),
            this._emulateAnimation(()=>{
                this.dispose(),
                h(e)
            }
            )) : h(e)
        }
        dispose() {
            this._isAppended && (f.off(this._element, qe),
            this._element.remove(),
            this._isAppended = !1)
        }
        _getElement() {
            var e;
            return this._element || ((e = document.createElement("div")).className = this._config.className,
            this._config.isAnimated && e.classList.add("fade"),
            this._element = e),
            this._element
        }
        _configAfterMerge(e) {
            return e.rootElement = i(e.rootElement),
            e
        }
        _append() {
            var e;
            this._isAppended || (e = this._getElement(),
            this._config.rootElement.append(e),
            f.on(e, qe, ()=>{
                h(this._config.clickCallback)
            }
            ),
            this._isAppended = !0)
        }
        _emulateAnimation(e) {
            F(e, this._getElement(), this._config.isAnimated)
        }
    }
    const Be = ".bs.focustrap"
      , Ue = "backward"
      , $e = {
        autofocus: !0,
        trapElement: null
    }
      , Ge = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class Xe extends m {
        constructor(e) {
            super(),
            this._config = this._getConfig(e),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        static get Default() {
            return $e
        }
        static get DefaultType() {
            return Ge
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
            f.off(document, Be),
            f.on(document, "focusin.bs.focustrap", e=>this._handleFocusin(e)),
            f.on(document, "keydown.tab.bs.focustrap", e=>this._handleKeydown(e)),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            f.off(document, Be))
        }
        _handleFocusin(e) {
            var t = this._config["trapElement"];
            e.target === document || e.target === t || t.contains(e.target) || (0 === (e = x.focusableChildren(t)).length ? t : this._lastTabNavDirection === Ue ? e[e.length - 1] : e[0]).focus()
        }
        _handleKeydown(e) {
            "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? Ue : "forward")
        }
    }
    const Ze = "hidden.bs.modal"
      , Qe = "show.bs.modal"
      , Ke = "modal-open"
      , Je = "modal-static"
      , et = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }
      , tt = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class D extends g {
        constructor(e, t) {
            super(e, t),
            this._dialog = x.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._isTransitioning = !1,
            this._scrollBar = new Re,
            this._addEventListeners()
        }
        static get Default() {
            return et
        }
        static get DefaultType() {
            return tt
        }
        static get NAME() {
            return "modal"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || this._isTransitioning || f.trigger(this._element, Qe, {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0,
            this._isTransitioning = !0,
            this._scrollBar.hide(),
            document.body.classList.add(Ke),
            this._adjustDialog(),
            this._backdrop.show(()=>this._showElement(e)))
        }
        hide() {
            !this._isShown || this._isTransitioning || f.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1,
            this._isTransitioning = !0,
            this._focustrap.deactivate(),
            this._element.classList.remove("show"),
            this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated()))
        }
        dispose() {
            for (const e of [window, this._dialog])
                f.off(e, ".bs.modal");
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Ve({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Xe({
                trapElement: this._element
            })
        }
        _showElement(e) {
            document.body.contains(this._element) || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0;
            var t = x.findOne(".modal-body", this._dialog);
            t && (t.scrollTop = 0),
            c(this._element),
            this._element.classList.add("show"),
            this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                f.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: e
                })
            }
            , this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            f.on(this._element, "keydown.dismiss.bs.modal", e=>{
                if ("Escape" === e.key)
                    return this._config.keyboard ? (e.preventDefault(),
                    void this.hide()) : void this._triggerBackdropTransition()
            }
            ),
            f.on(window, "resize.bs.modal", ()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }
            ),
            f.on(this._element, "mousedown.dismiss.bs.modal", t=>{
                f.one(this._element, "click.dismiss.bs.modal", e=>{
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }
                )
            }
            )
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide(()=>{
                document.body.classList.remove(Ke),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                f.trigger(this._element, Ze)
            }
            )
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (!f.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
                const e = this._element.scrollHeight > document.documentElement.clientHeight
                  , t = this._element.style.overflowY;
                "hidden" === t || this._element.classList.contains(Je) || (e || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(Je),
                this._queueCallback(()=>{
                    this._element.classList.remove(Je),
                    this._queueCallback(()=>{
                        this._element.style.overflowY = t
                    }
                    , this._dialog)
                }
                , this._dialog),
                this._element.focus())
            }
        }
        _adjustDialog() {
            const e = this._element.scrollHeight > document.documentElement.clientHeight
              , t = this._scrollBar.getWidth()
              , n = 0 < t;
            if (n && !e) {
                const e = u() ? "paddingLeft" : "paddingRight";
                this._element.style[e] = t + "px"
            }
            if (!n && e) {
                const e = u() ? "paddingRight" : "paddingLeft";
                this._element.style[e] = t + "px"
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, n) {
            return this.each(function() {
                var e = D.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](n)
                }
            })
        }
    }
    f.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(e) {
        const t = r(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        f.one(t, Qe, e=>{
            e.defaultPrevented || f.one(t, Ze, ()=>{
                s(this) && this.focus()
            }
            )
        }
        );
        e = x.findOne(".modal.show");
        e && D.getInstance(e).hide(),
        D.getOrCreateInstance(t).toggle(this)
    }),
    e(D),
    t(D);
    const nt = "showing"
      , it = ".offcanvas.show"
      , rt = "hidePrevented.bs.offcanvas"
      , ot = "hidden.bs.offcanvas"
      , st = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , at = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class L extends g {
        constructor(e, t) {
            super(e, t),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get Default() {
            return st
        }
        static get DefaultType() {
            return at
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || f.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0,
            this._backdrop.show(),
            this._config.scroll || (new Re).hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(nt),
            this._queueCallback(()=>{
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(),
                this._element.classList.add("show"),
                this._element.classList.remove(nt),
                f.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: e
                })
            }
            , this._element, !0))
        }
        hide() {
            !this._isShown || f.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.add("hiding"),
            this._backdrop.hide(),
            this._queueCallback(()=>{
                this._element.classList.remove("show", "hiding"),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || (new Re).reset(),
                f.trigger(this._element, ot)
            }
            , this._element, !0))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _initializeBackDrop() {
            var e = Boolean(this._config.backdrop);
            return new Ve({
                className: "offcanvas-backdrop",
                isVisible: e,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: e ? ()=>{
                    "static" !== this._config.backdrop ? this.hide() : f.trigger(this._element, rt)
                }
                : null
            })
        }
        _initializeFocusTrap() {
            return new Xe({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            f.on(this._element, "keydown.dismiss.bs.offcanvas", e=>{
                "Escape" === e.key && (this._config.keyboard ? this.hide() : f.trigger(this._element, rt))
            }
            )
        }
        static jQueryInterface(t) {
            return this.each(function() {
                var e = L.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    f.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(e) {
        var t = r(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        a(this) || (f.one(t, ot, ()=>{
            s(this) && this.focus()
        }
        ),
        (e = x.findOne(it)) && e !== t && L.getInstance(e).hide(),
        L.getOrCreateInstance(t).toggle(this))
    }),
    f.on(window, "load.bs.offcanvas.data-api", ()=>{
        for (const e of x.find(it))
            L.getOrCreateInstance(e).show()
    }
    ),
    f.on(window, "resize.bs.offcanvas", ()=>{
        for (const e of x.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(e).position && L.getOrCreateInstance(e).hide()
    }
    ),
    e(L),
    t(L);
    const lt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , ct = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , ut = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , ht = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , dt = {
        allowList: ht,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }
      , pt = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }
      , ft = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class mt extends m {
        constructor(e) {
            super(),
            this._config = this._getConfig(e)
        }
        static get Default() {
            return dt
        }
        static get DefaultType() {
            return pt
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)
        }
        hasContent() {
            return 0 < this.getContent().length
        }
        changeContent(e) {
            return this._checkContent(e),
            this._config.content = {
                ...this._config.content,
                ...e
            },
            this
        }
        toHtml() {
            var e = document.createElement("div");
            e.innerHTML = this._maybeSanitize(this._config.template);
            for (const [t,n] of Object.entries(this._config.content))
                this._setContent(e, n, t);
            const t = e.children[0]
              , n = this._resolvePossibleFunction(this._config.extraClass);
            return n && t.classList.add(...n.split(" ")),
            t
        }
        _typeCheckConfig(e) {
            super._typeCheckConfig(e),
            this._checkContent(e.content)
        }
        _checkContent(e) {
            for (var [t,n] of Object.entries(e))
                super._typeCheckConfig({
                    selector: t,
                    entry: n
                }, ft)
        }
        _setContent(e, t, n) {
            n = x.findOne(n, e);
            n && ((t = this._resolvePossibleFunction(t)) ? o(t) ? this._putElementInTemplate(i(t), n) : this._config.html ? n.innerHTML = this._maybeSanitize(t) : n.textContent = t : n.remove())
        }
        _maybeSanitize(e) {
            if (this._config.sanitize) {
                var t = e
                  , n = this._config.allowList
                  , i = this._config.sanitizeFn;
                if (!t.length)
                    return t;
                if (i && "function" == typeof i)
                    return i(t);
                const r = (new window.DOMParser).parseFromString(t, "text/html")
                  , o = [].concat(...r.body.querySelectorAll("*"));
                for (const t of o) {
                    const i = t.nodeName.toLowerCase();
                    if (Object.keys(n).includes(i)) {
                        const r = [].concat(...t.attributes)
                          , o = [].concat(n["*"] || [], n[i] || []);
                        for (const n of r)
                            ((e,t)=>{
                                const n = e.nodeName.toLowerCase();
                                return t.includes(n) ? !lt.has(n) || Boolean(ct.test(e.nodeValue) || ut.test(e.nodeValue)) : t.filter(e=>e instanceof RegExp).some(e=>e.test(n))
                            }
                            )(n, o) || t.removeAttribute(n.nodeName)
                    } else
                        t.remove()
                }
                return r.body.innerHTML
            }
            return e
        }
        _resolvePossibleFunction(e) {
            return "function" == typeof e ? e(this) : e
        }
        _putElementInTemplate(e, t) {
            this._config.html ? (t.innerHTML = "",
            t.append(e)) : t.textContent = e.textContent
        }
    }
    const gt = new Set(["sanitize", "allowList", "sanitizeFn"])
      , yt = "fade"
      , vt = "show"
      , xt = "hide.bs.modal"
      , bt = "hover"
      , wt = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: u() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: u() ? "right" : "left"
    }
      , _t = {
        allowList: ht,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 0],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }
      , kt = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class N extends g {
        constructor(e, t) {
            if (void 0 === n)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e, t),
            this._isEnabled = !0,
            this._timeout = 0,
            this._isHovered = null,
            this._activeTrigger = {},
            this._popper = null,
            this._templateFactory = null,
            this._newContent = null,
            this.tip = null,
            this._setListeners(),
            this._config.selector || this._fixTitle()
        }
        static get Default() {
            return _t
        }
        static get DefaultType() {
            return kt
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click,
            this._isShown() ? this._leave() : this._enter())
        }
        dispose() {
            clearTimeout(this._timeout),
            f.off(this._element.closest(".modal"), xt, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (this._isWithContent() && this._isEnabled) {
                const n = f.trigger(this._element, this.constructor.eventName("show"))
                  , i = (R(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                if (!n.defaultPrevented && i) {
                    this._disposePopper();
                    var e = this._getTipElement()
                      , t = (this._element.setAttribute("aria-describedby", e.getAttribute("id")),
                    this._config)["container"];
                    if (this._element.ownerDocument.documentElement.contains(this.tip) || (t.append(e),
                    f.trigger(this._element, this.constructor.eventName("inserted"))),
                    this._popper = this._createPopper(e),
                    e.classList.add(vt),
                    "ontouchstart"in document.documentElement)
                        for (const n of [].concat(...document.body.children))
                            f.on(n, "mouseover", l);
                    this._queueCallback(()=>{
                        f.trigger(this._element, this.constructor.eventName("shown")),
                        !1 === this._isHovered && this._leave(),
                        this._isHovered = !1
                    }
                    , this.tip, this._isAnimated())
                }
            }
        }
        hide() {
            if (this._isShown() && !f.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(vt),
                "ontouchstart"in document.documentElement)
                    for (const e of [].concat(...document.body.children))
                        f.off(e, "mouseover", l);
                this._activeTrigger.click = !1,
                this._activeTrigger.focus = !1,
                this._activeTrigger.hover = !1,
                this._isHovered = null,
                this._queueCallback(()=>{
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute("aria-describedby"),
                    f.trigger(this._element, this.constructor.eventName("hidden")))
                }
                , this.tip, this._isAnimated())
            }
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
            this.tip
        }
        _createTipElement(e) {
            e = this._getTemplateFactory(e).toHtml();
            if (!e)
                return null;
            e.classList.remove(yt, vt),
            e.classList.add(`bs-${this.constructor.NAME}-auto`);
            var t = (e=>{
                for (; e += Math.floor(1e6 * Math.random()),
                document.getElementById(e); )
                    ;
                return e
            }
            )(this.constructor.NAME).toString();
            return e.setAttribute("id", t),
            this._isAnimated() && e.classList.add(yt),
            e
        }
        setContent(e) {
            this._newContent = e,
            this._isShown() && (this._disposePopper(),
            this.show())
        }
        _getTemplateFactory(e) {
            return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new mt({
                ...this._config,
                content: e,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }),
            this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(e) {
            return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(yt)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(vt)
        }
        _createPopper(e) {
            var t = "function" == typeof this._config.placement ? this._config.placement.call(this, e, this._element) : this._config.placement
              , t = wt[t.toUpperCase()];
            return n.createPopper(this._element, e, this._getPopperConfig(t))
        }
        _getOffset() {
            const t = this._config["offset"];
            return "string" == typeof t ? t.split(",").map(e=>Number.parseInt(e, 10)) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _resolvePossibleFunction(e) {
            return "function" == typeof e ? e.call(this._element) : e
        }
        _getPopperConfig(e) {
            e = {
                placement: e,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: e=>{
                        this._getTipElement().setAttribute("data-popper-placement", e.state.placement)
                    }
                }]
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _setListeners() {
            const e = this._config.trigger.split(" ");
            for (const t of e)
                if ("click" === t)
                    f.on(this._element, this.constructor.eventName("click"), this._config.selector, e=>{
                        this._initializeOnDelegatedTarget(e).toggle()
                    }
                    );
                else if ("manual" !== t) {
                    const e = t === bt ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin")
                      , n = t === bt ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    f.on(this._element, e, this._config.selector, e=>{
                        var t = this._initializeOnDelegatedTarget(e);
                        t._activeTrigger["focusin" === e.type ? "focus" : bt] = !0,
                        t._enter()
                    }
                    ),
                    f.on(this._element, n, this._config.selector, e=>{
                        var t = this._initializeOnDelegatedTarget(e);
                        t._activeTrigger["focusout" === e.type ? "focus" : bt] = t._element.contains(e.relatedTarget),
                        t._leave()
                    }
                    )
                }
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            f.on(this._element.closest(".modal"), xt, this._hideModalHandler)
        }
        _fixTitle() {
            var e = this._element.getAttribute("title");
            e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e),
            this._element.setAttribute("data-bs-original-title", e),
            this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0,
            this._setTimeout(()=>{
                this._isHovered && this.show()
            }
            , this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1,
            this._setTimeout(()=>{
                this._isHovered || this.hide()
            }
            , this._config.delay.hide))
        }
        _setTimeout(e, t) {
            clearTimeout(this._timeout),
            this._timeout = setTimeout(e, t)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(e) {
            var t = p.getDataAttributes(this._element);
            for (const e of Object.keys(t))
                gt.has(e) && delete t[e];
            return e = {
                ...t,
                ..."object" == typeof e && e ? e : {}
            },
            e = this._mergeConfigObj(e),
            e = this._configAfterMerge(e),
            this._typeCheckConfig(e),
            e
        }
        _configAfterMerge(e) {
            return e.container = !1 === e.container ? document.body : i(e.container),
            "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            e
        }
        _getDelegateConfig() {
            var e = {};
            for (const t in this._config)
                this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
            return e.selector = !1,
            e.trigger = "manual",
            e
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null),
            this.tip && (this.tip.remove(),
            this.tip = null)
        }
        static jQueryInterface(t) {
            return this.each(function() {
                var e = N.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    t(N);
    const St = {
        ...N.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }
      , Tt = {
        ...N.DefaultType,
        content: "(null|string|element|function)"
    };
    class Mt extends N {
        static get Default() {
            return St
        }
        static get DefaultType() {
            return Tt
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(t) {
            return this.each(function() {
                var e = Mt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    t(Mt);
    const Et = "click.bs.scrollspy"
      , P = "active"
      , Ct = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [.1, .5, 1]
    }
      , At = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class Ot extends g {
        constructor(e, t) {
            super(e, t),
            this._targetLinks = new Map,
            this._observableSections = new Map,
            this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element,
            this._activeTarget = null,
            this._observer = null,
            this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            },
            this.refresh()
        }
        static get Default() {
            return Ct
        }
        static get DefaultType() {
            return At
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const e of this._observableSections.values())
                this._observer.observe(e)
        }
        dispose() {
            this._observer.disconnect(),
            super.dispose()
        }
        _configAfterMerge(e) {
            return e.target = i(e.target) || document.body,
            e.rootMargin = e.offset ? e.offset + "px 0px -30%" : e.rootMargin,
            "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map(e=>Number.parseFloat(e))),
            e
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (f.off(this._config.target, Et),
            f.on(this._config.target, Et, "[href]", e=>{
                var t = this._observableSections.get(e.target.hash);
                t && (e.preventDefault(),
                e = this._rootElement || window,
                t = t.offsetTop - this._element.offsetTop,
                e.scrollTo ? e.scrollTo({
                    top: t,
                    behavior: "smooth"
                }) : e.scrollTop = t)
            }
            ))
        }
        _getNewObserver() {
            var e = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver(e=>this._observerCallback(e),e)
        }
        _observerCallback(e) {
            const t = e=>this._targetLinks.get("#" + e.target.id)
              , n = e=>{
                this._previousScrollData.visibleEntryTop = e.target.offsetTop,
                this._process(t(e))
            }
              , i = (this._rootElement || document.documentElement).scrollTop
              , r = i >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = i;
            for (const o of e)
                if (o.isIntersecting) {
                    const e = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                    if (r && e) {
                        if (n(o),
                        !i)
                            return
                    } else
                        r || e || n(o)
                } else
                    this._activeTarget = null,
                    this._clearActiveClass(t(o))
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map,
            this._observableSections = new Map;
            const e = x.find("[href]", this._config.target);
            for (const t of e)
                if (t.hash && !a(t)) {
                    const e = x.findOne(t.hash, this._element);
                    s(e) && (this._targetLinks.set(t.hash, t),
                    this._observableSections.set(t.hash, e))
                }
        }
        _process(e) {
            this._activeTarget !== e && (this._clearActiveClass(this._config.target),
            (this._activeTarget = e).classList.add(P),
            this._activateParents(e),
            f.trigger(this._element, "activate.bs.scrollspy", {
                relatedTarget: e
            }))
        }
        _activateParents(e) {
            if (e.classList.contains("dropdown-item"))
                x.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(P);
            else
                for (const t of x.parents(e, ".nav, .list-group"))
                    for (const e of x.prev(t, ".nav-link, .nav-item > .nav-link, .list-group-item"))
                        e.classList.add(P)
        }
        _clearActiveClass(e) {
            e.classList.remove(P);
            var t = x.find("[href].active", e);
            for (const e of t)
                e.classList.remove(P)
        }
        static jQueryInterface(t) {
            return this.each(function() {
                var e = Ot.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    f.on(window, "load.bs.scrollspy.data-api", ()=>{
        for (const e of x.find('[data-bs-spy="scroll"]'))
            Ot.getOrCreateInstance(e)
    }
    ),
    t(Ot);
    const Dt = "ArrowRight"
      , Lt = "ArrowDown"
      , Nt = "active"
      , Pt = "show"
      , jt = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
      , zt = '.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ' + jt;
    class j extends g {
        constructor(e) {
            super(e),
            this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'),
            this._parent && (this._setInitialAttributes(this._parent, this._getChildren()),
            f.on(this._element, "keydown.bs.tab", e=>this._keydown(e)))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            var e, t, n = this._element;
            this._elemIsActive(n) || (t = (e = this._getActiveElem()) ? f.trigger(e, "hide.bs.tab", {
                relatedTarget: n
            }) : null,
            f.trigger(n, "show.bs.tab", {
                relatedTarget: e
            }).defaultPrevented) || t && t.defaultPrevented || (this._deactivate(e, n),
            this._activate(n, e))
        }
        _activate(e, t) {
            e && (e.classList.add(Nt),
            this._activate(r(e)),
            this._queueCallback(()=>{
                "tab" === e.getAttribute("role") ? (e.removeAttribute("tabindex"),
                e.setAttribute("aria-selected", !0),
                this._toggleDropDown(e, !0),
                f.trigger(e, "shown.bs.tab", {
                    relatedTarget: t
                })) : e.classList.add(Pt)
            }
            , e, e.classList.contains("fade")))
        }
        _deactivate(e, t) {
            e && (e.classList.remove(Nt),
            e.blur(),
            this._deactivate(r(e)),
            this._queueCallback(()=>{
                "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1),
                e.setAttribute("tabindex", "-1"),
                this._toggleDropDown(e, !1),
                f.trigger(e, "hidden.bs.tab", {
                    relatedTarget: t
                })) : e.classList.remove(Pt)
            }
            , e, e.classList.contains("fade")))
        }
        _keydown(e) {
            var t;
            ["ArrowLeft", Dt, "ArrowUp", Lt].includes(e.key) && (e.stopPropagation(),
            e.preventDefault(),
            t = [Dt, Lt].includes(e.key),
            e = V(this._getChildren().filter(e=>!a(e)), e.target, t, !0)) && (e.focus({
                preventScroll: !0
            }),
            j.getOrCreateInstance(e).show())
        }
        _getChildren() {
            return x.find(zt, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find(e=>this._elemIsActive(e)) || null
        }
        _setInitialAttributes(e, t) {
            this._setAttributeIfNotExists(e, "role", "tablist");
            for (const e of t)
                this._setInitialAttributesOnChild(e)
        }
        _setInitialAttributesOnChild(e) {
            e = this._getInnerElement(e);
            var t = this._elemIsActive(e)
              , n = this._getOuterElement(e);
            e.setAttribute("aria-selected", t),
            n !== e && this._setAttributeIfNotExists(n, "role", "presentation"),
            t || e.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(e, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(e)
        }
        _setInitialAttributesOnTargetPanel(e) {
            var t = r(e);
            t && (this._setAttributeIfNotExists(t, "role", "tabpanel"),
            e.id) && this._setAttributeIfNotExists(t, "aria-labelledby", "#" + e.id)
        }
        _toggleDropDown(e, n) {
            const i = this._getOuterElement(e);
            i.classList.contains("dropdown") && ((e = (e,t)=>{
                e = x.findOne(e, i);
                e && e.classList.toggle(t, n)
            }
            )(".dropdown-toggle", Nt),
            e(".dropdown-menu", Pt),
            i.setAttribute("aria-expanded", n))
        }
        _setAttributeIfNotExists(e, t, n) {
            e.hasAttribute(t) || e.setAttribute(t, n)
        }
        _elemIsActive(e) {
            return e.classList.contains(Nt)
        }
        _getInnerElement(e) {
            return e.matches(zt) ? e : x.findOne(zt, e)
        }
        _getOuterElement(e) {
            return e.closest(".nav-item, .list-group-item") || e
        }
        static jQueryInterface(t) {
            return this.each(function() {
                var e = j.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    f.on(document, "click.bs.tab", jt, function(e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        a(this) || j.getOrCreateInstance(this).show()
    }),
    f.on(window, "load.bs.tab", ()=>{
        for (const e of x.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))
            j.getOrCreateInstance(e)
    }
    ),
    t(j);
    const Ht = "show"
      , It = "showing"
      , Yt = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Rt = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class qt extends g {
        constructor(e, t) {
            super(e, t),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get Default() {
            return Rt
        }
        static get DefaultType() {
            return Yt
        }
        static get NAME() {
            return "toast"
        }
        show() {
            f.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove("hide"),
            c(this._element),
            this._element.classList.add(Ht, It),
            this._queueCallback(()=>{
                this._element.classList.remove(It),
                f.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide()
            }
            , this._element, this._config.animation))
        }
        hide() {
            !this.isShown() || f.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(It),
            this._queueCallback(()=>{
                this._element.classList.add("hide"),
                this._element.classList.remove(It, Ht),
                f.trigger(this._element, "hidden.bs.toast")
            }
            , this._element, this._config.animation))
        }
        dispose() {
            this._clearTimeout(),
            this.isShown() && this._element.classList.remove(Ht),
            super.dispose()
        }
        isShown() {
            return this._element.classList.contains(Ht)
        }
        _maybeScheduleHide() {
            !this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide()
            }
            , this._config.delay))
        }
        _onInteraction(e, t) {
            switch (e.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = t;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = t
            }
            t ? this._clearTimeout() : (e = e.relatedTarget,
            this._element === e || this._element.contains(e) || this._maybeScheduleHide())
        }
        _setListeners() {
            f.on(this._element, "mouseover.bs.toast", e=>this._onInteraction(e, !0)),
            f.on(this._element, "mouseout.bs.toast", e=>this._onInteraction(e, !1)),
            f.on(this._element, "focusin.bs.toast", e=>this._onInteraction(e, !0)),
            f.on(this._element, "focusout.bs.toast", e=>this._onInteraction(e, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each(function() {
                var e = qt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    return e(qt),
    t(qt),
    {
        Alert: y,
        Button: v,
        Carousel: T,
        Collapse: E,
        Dropdown: O,
        Modal: D,
        Offcanvas: L,
        Popover: Mt,
        ScrollSpy: Ot,
        Tab: j,
        Toast: qt,
        Tooltip: N
    }
}),
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    for (var o, t, n, C = !1, A = !1, O = 0, D = 2e3, L = 0, N = e, P = document, j = window, z = N(j), H = [], I = j.requestAnimationFrame || j.webkitRequestAnimationFrame || j.mozRequestAnimationFrame || !1, Y = j.cancelAnimationFrame || j.webkitCancelAnimationFrame || j.mozCancelAnimationFrame || !1, R = (I ? j.cancelAnimationFrame || (Y = function(e) {}
    ) : (o = 0,
    I = function(e, t) {
        var n = (new Date).getTime()
          , i = Math.max(0, 16 - (n - o))
          , r = j.setTimeout(function() {
            e(n + i)
        }, i);
        return o = n + i,
        r
    }
    ,
    Y = function(e) {
        j.clearTimeout(e)
    }
    ),
    j.MutationObserver || j.WebKitMutationObserver || !1), q = Date.now || function() {
        return (new Date).getTime()
    }
    , W = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "6px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 40,
        mousescrollstep: 27,
        touchbehavior: !1,
        emulatetouch: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        railhoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: .3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: (t = P.currentScript || !!(t = P.getElementsByTagName("script")).length && t[t.length - 1],
        0 < (n = t ? t.src.split("?")[0] : "").split("/").length ? n.split("/").slice(0, -1).join("/") + "/" : ""),
        preventmultitouchscrolling: !0,
        disablemutationobserver: !1,
        enableobserver: !0,
        scrollbarid: !1
    }, F = !1, s = function(e, t) {
        function n() {
            var e = g.doc.css(x.trstyle);
            return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
        }
        function r(e, t, n) {
            var e = e.css(t)
              , t = parseFloat(e);
            return !isNaN(t) || (e = 3 == (t = f[e] || 0) ? n ? g.win.outerHeight() - g.win.innerHeight() : g.win.outerWidth() - g.win.innerWidth() : 1,
            g.isie8 && t && (t += 1),
            e) ? t : 0
        }
        function o(n, i, r, e) {
            g._bind(n, i, function(e) {
                var t = {
                    original: e = e || j.event,
                    target: e.target || e.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == e.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function() {
                        return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                        !1
                    },
                    stopImmediatePropagation: function() {
                        e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.cancelBubble = !0
                    }
                };
                return "mousewheel" == i ? (e.wheelDeltaX && (t.deltaX = -.025 * e.wheelDeltaX),
                e.wheelDeltaY && (t.deltaY = -.025 * e.wheelDeltaY),
                t.deltaY || t.deltaX || (t.deltaY = -.025 * e.wheelDelta)) : t.deltaY = e.detail,
                r.call(n, t)
            }, e)
        }
        function s(e, t, n, i) {
            g.scrollrunning || (g.newscrolly = g.getScrollTop(),
            g.newscrollx = g.getScrollLeft(),
            T = q());
            var r = q() - T;
            if (T = q(),
            350 < r ? M = 1 : M += (2 - M) / 10,
            t = t * M | 0,
            e = e * M | 0) {
                if (i)
                    if (e < 0) {
                        if (g.getScrollLeft() >= g.page.maxw)
                            return 1
                    } else if (g.getScrollLeft() <= 0)
                        return 1;
                r = 0 < e ? 1 : -1;
                S !== r && (g.scrollmom && g.scrollmom.stop(),
                g.newscrollx = g.getScrollLeft(),
                S = r),
                g.lastdeltax -= e
            }
            if (t) {
                if (i = g.getScrollTop(),
                t < 0 ? i >= g.page.maxh : i <= 0) {
                    if (v.nativeparentscrolling && n && !g.ispage && !g.zoomactive)
                        return 1;
                    r = g.view.h >> 1;
                    t = g.newscrolly < -r ? (g.newscrolly = -r,
                    -1) : g.newscrolly > g.page.maxh + r ? (g.newscrolly = g.page.maxh + r,
                    1) : 0
                }
                i = 0 < t ? 1 : -1;
                k !== i && (g.scrollmom && g.scrollmom.stop(),
                g.newscrolly = g.getScrollTop(),
                k = i),
                g.lastdeltay -= t
            }
            (t || e) && g.synched("relativexy", function() {
                var e = g.lastdeltay + g.newscrolly
                  , t = (g.lastdeltay = 0,
                g.lastdeltax + g.newscrollx);
                g.lastdeltax = 0,
                g.rail.drag || g.doScrollPos(t, e)
            })
        }
        function i(e, t, n) {
            var i, r;
            return !(n || !E) || (0 === e.deltaMode ? (i = -e.deltaX * (v.mousescrollstep / 54) | 0,
            r = -e.deltaY * (v.mousescrollstep / 54) | 0) : 1 === e.deltaMode && (i = -e.deltaX * v.mousescrollstep * 50 / 80 | 0,
            r = -e.deltaY * v.mousescrollstep * 50 / 80 | 0),
            t && v.oneaxismousemode && 0 === i && r && (i = r,
            r = 0,
            n) && (i < 0 ? g.getScrollLeft() >= g.page.maxw : g.getScrollLeft() <= 0) && (r = i,
            i = 0),
            s(i = g.isrtlmode ? -i : i, r, n, !0) ? void (n && (E = !0)) : (E = !1,
            e.stopImmediatePropagation(),
            e.preventDefault()))
        }
        var a, l, c, u, g = this, y = (this.version = "3.7.6",
        this.name = "nicescroll",
        this.me = t,
        N("body")), v = this.opt = {
            doc: y,
            win: !1
        };
        if (N.extend(v, W),
        v.snapbackspeed = 80,
        e)
            for (var h in v)
                void 0 !== e[h] && (v[h] = e[h]);
        if (v.disablemutationobserver && (R = !1),
        this.doc = v.doc,
        this.iddoc = this.doc && this.doc[0] && this.doc[0].id || "",
        this.ispage = /^BODY|HTML/.test((v.win || this.doc)[0].nodeName),
        this.haswrapper = !1 !== v.win,
        this.win = v.win || (this.ispage ? z : this.doc),
        this.docscroll = this.ispage && !this.haswrapper ? z : this.win,
        this.body = y,
        this.viewport = !1,
        this.isfixed = !1,
        this.iframe = !1,
        this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName,
        this.istextarea = "TEXTAREA" == this.win[0].nodeName,
        this.forcescreen = !1,
        this.canshowonmouseevent = "scroll" != v.autohidemode,
        this.onmousedown = !1,
        this.onmouseup = !1,
        this.onmousemove = !1,
        this.onmousewheel = !1,
        this.onkeypress = !1,
        this.ongesturezoom = !1,
        this.onclick = !1,
        this.onscrollstart = !1,
        this.onscrollend = !1,
        this.onscrollcancel = !1,
        this.onzoomin = !1,
        this.onzoomout = !1,
        this.view = !1,
        this.page = !1,
        this.scroll = {
            x: 0,
            y: 0
        },
        this.scrollratio = {
            x: 0,
            y: 0
        },
        this.cursorheight = 20,
        this.scrollvaluemax = 0,
        "auto" == v.rtlmode ? "horizontal-tb" == (l = (t = this.win[0] == j ? this.body : this.win).css("writing-mode") || t.css("-webkit-writing-mode") || t.css("-ms-writing-mode") || t.css("-moz-writing-mode")) || "lr-tb" == l || "" === l ? (this.isrtlmode = "rtl" == t.css("direction"),
        this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == l || "tb" == l || "tb-rl" == l || "rl-tb" == l,
        this.isvertical = "vertical-rl" == l || "tb" == l || "tb-rl" == l) : (this.isrtlmode = !0 === v.rtlmode,
        this.isvertical = !1),
        this.scrollrunning = !1,
        this.scrollmom = !1,
        this.observer = !1,
        this.observerremover = !1,
        (this.observerbody = !1) !== v.scrollbarid)
            this.id = v.scrollbarid;
        else
            for (; this.id = "ascrail" + D++,
            P.getElementById(this.id); )
                ;
        this.rail = !1,
        this.cursor = !1,
        this.cursorfreezed = !1,
        this.selectiondrag = !1,
        this.zoom = !1,
        this.zoomactive = !1,
        this.hasfocus = !1,
        this.hasmousefocus = !1,
        this.railslocked = !1,
        this.locked = !1,
        this.hidden = !1,
        this.cursoractive = !0,
        this.wheelprevented = !1,
        this.overflowx = v.overflowx,
        this.overflowy = v.overflowy,
        this.nativescrollingarea = !1,
        this.checkarea = 0,
        this.events = [],
        this.saved = {},
        this.delaylist = {},
        this.synclist = {},
        this.lastdeltax = 0,
        this.lastdeltay = 0,
        this.detected = F || (t = P.createElement("DIV"),
        a = t.style,
        l = navigator.userAgent,
        c = navigator.platform,
        (u = {}).haspointerlock = "pointerLockElement"in P || "webkitPointerLockElement"in P || "mozPointerLockElement"in P,
        u.isopera = "opera"in j,
        u.isopera12 = u.isopera && "getUserMedia"in navigator,
        u.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(j.operamini),
        u.isie = "all"in P && "attachEvent"in t && !u.isopera,
        u.isieold = u.isie && !("msInterpolationMode"in a),
        u.isie7 = u.isie && !u.isieold && (!("documentMode"in P) || 7 === P.documentMode),
        u.isie8 = u.isie && "documentMode"in P && 8 === P.documentMode,
        u.isie9 = u.isie && "performance"in j && 9 === P.documentMode,
        u.isie10 = u.isie && "performance"in j && 10 === P.documentMode,
        u.isie11 = "msRequestFullscreen"in t && 11 <= P.documentMode,
        u.ismsedge = "msCredentials"in j,
        u.ismozilla = "MozAppearance"in a,
        u.iswebkit = !u.ismsedge && "WebkitAppearance"in a,
        u.ischrome = u.iswebkit && "chrome"in j,
        u.ischrome38 = u.ischrome && "touchAction"in a,
        u.ischrome22 = !u.ischrome38 && u.ischrome && u.haspointerlock,
        u.ischrome26 = !u.ischrome38 && u.ischrome && "transition"in a,
        u.cantouch = "ontouchstart"in P.documentElement || "ontouchstart"in j,
        u.hasw3ctouch = !!j.PointerEvent && (0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints),
        u.hasmstouch = !u.hasw3ctouch && (j.MSPointerEvent || !1),
        u.ismac = /^mac$/i.test(c),
        u.isios = u.cantouch && /iphone|ipad|ipod/i.test(c),
        u.isios4 = u.isios && !("seal"in Object),
        u.isios7 = u.isios && "webkitHidden"in P,
        u.isios8 = u.isios && "hidden"in P,
        u.isios10 = u.isios && j.Proxy,
        u.isandroid = /android/i.test(l),
        u.haseventlistener = "addEventListener"in t,
        u.trstyle = !1,
        u.hastransform = !1,
        u.hastranslate3d = !1,
        u.transitionstyle = !1,
        u.hastransition = !1,
        u.transitionend = !1,
        u.trstyle = "transform",
        u.hastransform = "transform"in a || function() {
            for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], t = 0, n = e.length; t < n; t++)
                if (void 0 !== a[e[t]]) {
                    u.trstyle = e[t];
                    break
                }
            u.hastransform = !!u.trstyle
        }(),
        u.hastransform && (a[u.trstyle] = "translate3d(1px,2px,3px)",
        u.hastranslate3d = /translate3d/.test(a[u.trstyle])),
        u.transitionstyle = "transition",
        u.prefixstyle = "",
        u.transitionend = "transitionend",
        u.hastransition = "transition"in a || function() {
            u.transitionend = !1;
            for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], n = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], i = 0, r = e.length; i < r; i++)
                if (e[i]in a) {
                    u.transitionstyle = e[i],
                    u.prefixstyle = t[i],
                    u.transitionend = n[i];
                    break
                }
            u.ischrome26 && (u.prefixstyle = t[1]),
            u.hastransition = u.transitionstyle
        }(),
        u.cursorgrabvalue = function() {
            for (var e = ["grab", "-webkit-grab", "-moz-grab"], t = 0, n = (e = u.ischrome && !u.ischrome38 || u.isie ? [] : e).length; t < n; t++) {
                var i = e[t];
                if (a.cursor = i,
                a.cursor == i)
                    return i
            }
            return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"
        }(),
        u.hasmousecapture = "setCapture"in t,
        u.hasMutationObserver = !1 !== R,
        t = null,
        F = u);
        function d(e, t, n, i, r, o, s) {
            this.st = e,
            this.ed = t,
            this.spd = n,
            this.p1 = i || 0,
            this.p2 = r || 1,
            this.p3 = o || 0,
            this.p4 = s || 1,
            this.ts = q(),
            this.df = t - e
        }
        var p, x = N.extend({}, this.detected), f = (this.canhwscroll = x.hastransform && v.hwacceleration,
        this.ishwscroll = this.canhwscroll && g.haswrapper,
        this.isrtlmode ? this.isvertical ? this.hasreversehr = !(x.iswebkit || x.isie || x.isie11) : this.hasreversehr = !(x.iswebkit || x.isie && !x.isie10 && !x.isie11) : this.hasreversehr = !1,
        this.istouchcapable = !1,
        (!x.cantouch && (x.hasw3ctouch || x.hasmstouch) || x.cantouch && !x.isios && !x.isandroid && (x.iswebkit || x.ismozilla)) && (this.istouchcapable = !0),
        v.enablemouselockapi || (x.hasmousecapture = !1,
        x.haspointerlock = !1),
        this.debounced = function(e, t, n) {
            g && (g.delaylist[e] || (g.delaylist[e] = {
                h: I(function() {
                    g.delaylist[e].fn.call(g),
                    g.delaylist[e] = !1
                }, n)
            },
            t.call(g)),
            g.delaylist[e].fn = t)
        }
        ,
        this.synched = function(e, t) {
            g.synclist[e] ? g.synclist[e] = t : (g.synclist[e] = t,
            I(function() {
                g && (g.synclist[e] && g.synclist[e].call(g),
                g.synclist[e] = null)
            }))
        }
        ,
        this.unsynched = function(e) {
            g.synclist[e] && (g.synclist[e] = !1)
        }
        ,
        this.css = function(e, t) {
            for (var n in t)
                g.saved.css.push([e, n, e.css(n)]),
                e.css(n, t[n])
        }
        ,
        this.scrollTop = function(e) {
            return void 0 === e ? g.getScrollTop() : g.setScrollTop(e)
        }
        ,
        this.scrollLeft = function(e) {
            return void 0 === e ? g.getScrollLeft() : g.setScrollLeft(e)
        }
        ,
        d.prototype = {
            B2: function(e) {
                return 3 * (1 - e) * (1 - e) * e
            },
            B3: function(e) {
                return 3 * (1 - e) * e * e
            },
            B4: function(e) {
                return e * e * e
            },
            getPos: function() {
                return (q() - this.ts) / this.spd
            },
            getNow: function() {
                var e = (q() - this.ts) / this.spd
                  , t = this.B2(e) + this.B3(e) + this.B4(e);
                return 1 <= e ? this.ed : this.st + this.df * t | 0
            },
            update: function(e, t) {
                return this.st = this.getNow(),
                this.ed = e,
                this.spd = t,
                this.ts = q(),
                this.df = this.ed - this.st,
                this
            }
        },
        this.ishwscroll ? (this.doc.translate = {
            x: 0,
            y: 0,
            tx: "0px",
            ty: "0px"
        },
        x.hastranslate3d && x.isios && this.doc.css("-webkit-backface-visibility", "hidden"),
        this.getScrollTop = function(e) {
            if (!e) {
                e = n();
                if (e)
                    return 16 == e.length ? -e[13] : -e[5];
                if (g.timerscroll && g.timerscroll.bz)
                    return g.timerscroll.bz.getNow()
            }
            return g.doc.translate.y
        }
        ,
        this.getScrollLeft = function(e) {
            if (!e) {
                e = n();
                if (e)
                    return 16 == e.length ? -e[12] : -e[4];
                if (g.timerscroll && g.timerscroll.bh)
                    return g.timerscroll.bh.getNow()
            }
            return g.doc.translate.x
        }
        ,
        this.notifyScrollEvent = function(e) {
            var t = P.createEvent("UIEvents");
            t.initUIEvent("scroll", !1, !1, j, 1),
            t.niceevent = !0,
            e.dispatchEvent(t)
        }
        ,
        p = this.isrtlmode ? 1 : -1,
        x.hastranslate3d && v.enabletranslate3d ? (this.setScrollTop = function(e, t) {
            g.doc.translate.y = e,
            g.doc.translate.ty = -1 * e + "px",
            g.doc.css(x.trstyle, "translate3d(" + g.doc.translate.tx + "," + g.doc.translate.ty + ",0)"),
            t || g.notifyScrollEvent(g.win[0])
        }
        ,
        this.setScrollLeft = function(e, t) {
            g.doc.translate.x = e,
            g.doc.translate.tx = e * p + "px",
            g.doc.css(x.trstyle, "translate3d(" + g.doc.translate.tx + "," + g.doc.translate.ty + ",0)"),
            t || g.notifyScrollEvent(g.win[0])
        }
        ) : (this.setScrollTop = function(e, t) {
            g.doc.translate.y = e,
            g.doc.translate.ty = -1 * e + "px",
            g.doc.css(x.trstyle, "translate(" + g.doc.translate.tx + "," + g.doc.translate.ty + ")"),
            t || g.notifyScrollEvent(g.win[0])
        }
        ,
        this.setScrollLeft = function(e, t) {
            g.doc.translate.x = e,
            g.doc.translate.tx = e * p + "px",
            g.doc.css(x.trstyle, "translate(" + g.doc.translate.tx + "," + g.doc.translate.ty + ")"),
            t || g.notifyScrollEvent(g.win[0])
        }
        )) : (this.getScrollTop = function() {
            return g.docscroll.scrollTop()
        }
        ,
        this.setScrollTop = function(e) {
            g.docscroll.scrollTop(e)
        }
        ,
        this.getScrollLeft = function() {
            return g.hasreversehr ? g.detected.ismozilla ? g.page.maxw - Math.abs(g.docscroll.scrollLeft()) : g.page.maxw - g.docscroll.scrollLeft() : g.docscroll.scrollLeft()
        }
        ,
        this.setScrollLeft = function(e) {
            return setTimeout(function() {
                if (g)
                    return g.hasreversehr && (e = g.detected.ismozilla ? -(g.page.maxw - e) : g.page.maxw - e),
                    g.docscroll.scrollLeft(e)
            }, 1)
        }
        ),
        this.getTarget = function(e) {
            return !!e && (e.target || !!e.srcElement && e.srcElement)
        }
        ,
        this.hasParent = function(e, t) {
            if (!e)
                return !1;
            for (var n = e.target || e.srcElement || e || !1; n && n.id != t; )
                n = n.parentNode || !1;
            return !1 !== n
        }
        ,
        {
            thin: 1,
            medium: 3,
            thick: 5
        }), m = (this.getDocumentScrollOffset = function() {
            return {
                top: j.pageYOffset || P.documentElement.scrollTop,
                left: j.pageXOffset || P.documentElement.scrollLeft
            }
        }
        ,
        this.getOffset = function() {
            var e, t;
            return g.isfixed ? (t = g.win.offset(),
            e = g.getDocumentScrollOffset(),
            t.top -= e.top,
            t.left -= e.left,
            t) : (e = g.win.offset(),
            g.viewport ? (t = g.viewport.offset(),
            {
                top: e.top - t.top,
                left: e.left - t.left
            }) : e)
        }
        ,
        this.updateScrollBar = function(e) {
            var t, n, i;
            g.ishwscroll ? (g.rail.css({
                height: g.win.innerHeight() - (v.railpadding.top + v.railpadding.bottom)
            }),
            g.railh && g.railh.css({
                width: g.win.innerWidth() - (v.railpadding.left + v.railpadding.right)
            })) : ((i = {
                top: (n = g.getOffset()).top,
                left: n.left - (v.railpadding.left + v.railpadding.right)
            }).top += r(g.win, "border-top-width", !0),
            i.left += g.rail.align ? g.win.outerWidth() - r(g.win, "border-right-width") - g.rail.width : r(g.win, "border-left-width"),
            (t = v.railoffset) && (t.top && (i.top += t.top),
            t.left) && (i.left += t.left),
            g.railslocked || g.rail.css({
                top: i.top,
                left: i.left,
                height: (e ? e.h : g.win.innerHeight()) - (v.railpadding.top + v.railpadding.bottom)
            }),
            g.zoom && g.zoom.css({
                top: i.top + 1,
                left: 1 == g.rail.align ? i.left - 20 : i.left + g.rail.width + 4
            }),
            g.railh && !g.railslocked && (i = {
                top: n.top,
                left: n.left
            },
            (t = v.railhoffset) && (t.top && (i.top += t.top),
            t.left) && (i.left += t.left),
            e = g.railh.align ? i.top + r(g.win, "border-top-width", !0) + g.win.innerHeight() - g.railh.height : i.top + r(g.win, "border-top-width", !0),
            n = i.left + r(g.win, "border-left-width"),
            g.railh.css({
                top: e - (v.railpadding.top + v.railpadding.bottom),
                left: n,
                width: g.railh.width
            })))
        }
        ,
        this.doRailClick = function(e, t, n) {
            var i, r;
            g.railslocked || (g.cancelEvent(e),
            "pageY"in e || (e.pageX = e.clientX + P.documentElement.scrollLeft,
            e.pageY = e.clientY + P.documentElement.scrollTop),
            t ? (i = n ? g.doScrollLeft : g.doScrollTop,
            r = n ? (e.pageX - g.railh.offset().left - g.cursorwidth / 2) * g.scrollratio.x : (e.pageY - g.rail.offset().top - g.cursorheight / 2) * g.scrollratio.y,
            g.unsynched("relativexy"),
            i(0 | r)) : (i = n ? g.doScrollLeftBy : g.doScrollBy,
            r = n ? g.scroll.x : g.scroll.y,
            t = n ? e.pageX - g.railh.offset().left : e.pageY - g.rail.offset().top,
            e = n ? g.view.w : g.view.h,
            i(t <= r ? e : -e)))
        }
        ,
        g.newscrolly = g.newscrollx = 0,
        g.hasanimationframe = "requestAnimationFrame"in j,
        g.hascancelanimationframe = "cancelAnimationFrame"in j,
        g.hasborderbox = !1,
        this.init = function() {
            if (g.saved.css = [],
            x.isoperamini)
                return !0;
            if (x.isandroid && !("hidden"in P))
                return !0;
            v.emulatetouch = v.emulatetouch || v.touchbehavior,
            g.hasborderbox = j.getComputedStyle && "border-box" === j.getComputedStyle(P.body)["box-sizing"];
            var e, n = {
                "overflow-y": "hidden"
            };
            if ((x.isie11 || x.isie10) && (n["-ms-overflow-style"] = "none"),
            g.ishwscroll && (this.doc.css(x.transitionstyle, x.prefixstyle + "transform 0ms ease-out"),
            x.transitionend) && g.bind(g.doc, x.transitionend, g.onScrollTransitionEnd, !1),
            g.zindex = "auto",
            g.ispage || "auto" != v.zindex ? g.zindex = v.zindex : g.zindex = function() {
                var e = g.win;
                if ("zIndex"in e)
                    return e.zIndex();
                for (; 0 < e.length; ) {
                    if (9 == e[0].nodeType)
                        return !1;
                    var t = e.css("zIndex");
                    if (!isNaN(t) && 0 !== t)
                        return parseInt(t);
                    e = e.parent()
                }
                return !1
            }() || "auto",
            !g.ispage && "auto" != g.zindex && g.zindex > L && (L = g.zindex),
            g.isie && 0 === g.zindex && "auto" == v.zindex && (g.zindex = "auto"),
            !g.ispage || !x.isieold) {
                var t = g.docscroll
                  , i = (g.ispage && (t = g.haswrapper ? g.win : g.doc),
                g.css(t, n),
                g.ispage && (x.isie11 || x.isie) && g.css(N("html"), n),
                !x.isios || g.ispage || g.haswrapper || g.css(y, {
                    "-webkit-overflow-scrolling": "touch"
                }),
                N(P.createElement("div")))
                  , r = (i.css({
                    position: "relative",
                    top: 0,
                    float: "right",
                    width: v.cursorwidth,
                    height: 0,
                    "background-color": v.cursorcolor,
                    border: v.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": v.cursorborderradius,
                    "-moz-border-radius": v.cursorborderradius,
                    "border-radius": v.cursorborderradius
                }),
                i.addClass("nicescroll-cursors"),
                g.cursor = i,
                N(P.createElement("div")));
                r.attr("id", g.id),
                r.addClass("nicescroll-rails nicescroll-rails-vr");
                var o, s, a, l = ["left", "right", "top", "bottom"];
                for (a in l)
                    s = l[a],
                    (o = v.railpadding[s] || 0) && r.css("padding-" + s, o + "px");
                r.append(i),
                r.width = Math.max(parseFloat(v.cursorwidth), i.outerWidth()),
                r.css({
                    width: r.width + "px",
                    zIndex: g.zindex,
                    background: v.background,
                    cursor: "default"
                }),
                r.visibility = !0,
                r.scrollable = !0,
                r.align = "left" == v.railalign ? 0 : 1,
                g.rail = r;
                var c, u, h, d, p, f, m;
                g.rail.drag = !1;
                !v.boxzoom || g.ispage || x.isieold || (u = P.createElement("div"),
                g.bind(u, "click", g.doZoom),
                g.bind(u, "mouseenter", function() {
                    g.zoom.css("opacity", v.cursoropacitymax)
                }),
                g.bind(u, "mouseleave", function() {
                    g.zoom.css("opacity", v.cursoropacitymin)
                }),
                g.zoom = N(u),
                g.zoom.css({
                    cursor: "pointer",
                    zIndex: g.zindex,
                    backgroundImage: "url(" + v.scriptpath + "zoomico.png)",
                    height: 18,
                    width: 18,
                    backgroundPosition: "0 0"
                }),
                v.dblclickzoom && g.bind(g.win, "dblclick", g.doZoom),
                x.cantouch && v.gesturezoom && (g.ongesturezoom = function(e) {
                    return 1.5 < e.scale && g.doZoomIn(e),
                    e.scale < .8 && g.doZoomOut(e),
                    g.cancelEvent(e)
                }
                ,
                g.bind(g.win, "gestureend", g.ongesturezoom))),
                g.railh = !1,
                v.horizrailenabled && (g.css(t, {
                    overflowX: "hidden"
                }),
                (i = N(P.createElement("div"))).css({
                    position: "absolute",
                    top: 0,
                    height: v.cursorwidth,
                    width: 0,
                    backgroundColor: v.cursorcolor,
                    border: v.cursorborder,
                    backgroundClip: "padding-box",
                    "-webkit-border-radius": v.cursorborderradius,
                    "-moz-border-radius": v.cursorborderradius,
                    "border-radius": v.cursorborderradius
                }),
                x.isieold && i.css("overflow", "hidden"),
                i.addClass("nicescroll-cursors"),
                g.cursorh = i,
                (c = N(P.createElement("div"))).attr("id", g.id + "-hr"),
                c.addClass("nicescroll-rails nicescroll-rails-hr"),
                c.height = Math.max(parseFloat(v.cursorwidth), i.outerHeight()),
                c.css({
                    height: c.height + "px",
                    zIndex: g.zindex,
                    background: v.background
                }),
                c.append(i),
                c.visibility = !0,
                c.scrollable = !0,
                c.align = "top" == v.railvalign ? 0 : 1,
                g.railh = c,
                g.railh.drag = !1),
                g.ispage ? (r.css({
                    position: "fixed",
                    top: 0,
                    height: "100%"
                }),
                r.css(r.align ? {
                    right: 0
                } : {
                    left: 0
                }),
                g.body.append(r),
                g.railh && (c.css({
                    position: "fixed",
                    left: 0,
                    width: "100%"
                }),
                c.css(c.align ? {
                    bottom: 0
                } : {
                    top: 0
                }),
                g.body.append(c))) : (g.ishwscroll ? ("static" == g.win.css("position") && g.css(g.win, {
                    position: "relative"
                }),
                u = "HTML" == g.win[0].nodeName ? g.body : g.win,
                N(u).scrollTop(0).scrollLeft(0),
                g.zoom && (g.zoom.css({
                    position: "absolute",
                    top: 1,
                    right: 0,
                    "margin-right": r.width + 4
                }),
                u.append(g.zoom)),
                r.css({
                    position: "absolute",
                    top: 0
                }),
                r.css(r.align ? {
                    right: 0
                } : {
                    left: 0
                }),
                u.append(r),
                c && (c.css({
                    position: "absolute",
                    left: 0,
                    bottom: 0
                }),
                c.css(c.align ? {
                    bottom: 0
                } : {
                    top: 0
                }),
                u.append(c))) : (g.isfixed = "fixed" == g.win.css("position"),
                t = g.isfixed ? "fixed" : "absolute",
                g.isfixed || (g.viewport = g.getViewport(g.win[0])),
                g.viewport && (g.body = g.viewport,
                /fixed|absolute/.test(g.viewport.css("position")) || g.css(g.viewport, {
                    position: "relative"
                })),
                r.css({
                    position: t
                }),
                g.zoom && g.zoom.css({
                    position: t
                }),
                g.updateScrollBar(),
                g.body.append(r),
                g.zoom && g.body.append(g.zoom),
                g.railh && (c.css({
                    position: t
                }),
                g.body.append(c))),
                x.isios && g.css(g.win, {
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                    "-webkit-touch-callout": "none"
                }),
                v.disableoutline && (x.isie && g.win.attr("hideFocus", "true"),
                x.iswebkit) && g.win.css("outline", "none")),
                !1 === v.autohidemode ? (g.autohidedom = !1,
                g.rail.css({
                    opacity: v.cursoropacitymax
                }),
                g.railh && g.railh.css({
                    opacity: v.cursoropacitymax
                })) : !0 === v.autohidemode || "leave" === v.autohidemode ? (g.autohidedom = N().add(g.rail),
                x.isie8 && (g.autohidedom = g.autohidedom.add(g.cursor)),
                g.railh && (g.autohidedom = g.autohidedom.add(g.railh)),
                g.railh && x.isie8 && (g.autohidedom = g.autohidedom.add(g.cursorh))) : "scroll" == v.autohidemode ? (g.autohidedom = N().add(g.rail),
                g.railh && (g.autohidedom = g.autohidedom.add(g.railh))) : "cursor" == v.autohidemode ? (g.autohidedom = N().add(g.cursor),
                g.railh && (g.autohidedom = g.autohidedom.add(g.cursorh))) : "hidden" == v.autohidemode && (g.autohidedom = !1,
                g.hide(),
                g.railslocked = !1),
                (x.cantouch || g.istouchcapable || v.emulatetouch || x.hasmstouch) && (g.scrollmom = new V(g),
                g.ontouchstart = function(e) {
                    if (g.locked)
                        return !1;
                    if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                        return !1;
                    if (g.hasmoving = !1,
                    g.scrollmom.timer && (g.triggerScrollEnd(),
                    g.scrollmom.stop()),
                    !g.railslocked) {
                        var t = g.getTarget(e);
                        if (t && /INPUT/i.test(t.nodeName) && /range/i.test(t.type))
                            return g.stopPropagation(e);
                        var n, i, r, o = "mousedown" === e.type;
                        if (!("clientX"in e) && "changedTouches"in e && (e.clientX = e.changedTouches[0].clientX,
                        e.clientY = e.changedTouches[0].clientY),
                        g.forcescreen && ((e = {
                            original: (r = e).original || e
                        }).clientX = r.screenX,
                        e.clientY = r.screenY),
                        g.rail.drag = {
                            x: e.clientX,
                            y: e.clientY,
                            sx: g.scroll.x,
                            sy: g.scroll.y,
                            st: g.getScrollTop(),
                            sl: g.getScrollLeft(),
                            pt: 2,
                            dl: !1,
                            tg: t
                        },
                        g.ispage || !v.directionlockdeadzone ? g.rail.drag.dl = "f" : (r = z.width(),
                        n = z.height(),
                        n = (i = g.getContentSize()).h - n,
                        i = i.w - r,
                        g.rail.scrollable && !g.railh.scrollable ? g.rail.drag.ck = 0 < n && "v" : !g.rail.scrollable && g.railh.scrollable ? g.rail.drag.ck = 0 < i && "h" : g.rail.drag.ck = !1),
                        v.emulatetouch && g.isiframe && x.isie && (r = g.win.position(),
                        g.rail.drag.x += r.left,
                        g.rail.drag.y += r.top),
                        g.hasmoving = !1,
                        g.lastmouseup = !1,
                        g.scrollmom.reset(e.clientX, e.clientY),
                        t && o) {
                            if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(t.nodeName))
                                return x.hasmousecapture && t.setCapture(),
                                v.emulatetouch ? (t.onclick && !t._onclick && (t._onclick = t.onclick,
                                t.onclick = function(e) {
                                    if (g.hasmoving)
                                        return !1;
                                    t._onclick.call(this, e)
                                }
                                ),
                                g.cancelEvent(e)) : g.stopPropagation(e);
                            /SUBMIT|CANCEL|BUTTON/i.test(N(t).attr("type")) && (g.preventclick = {
                                tg: t,
                                click: !1
                            })
                        }
                    }
                }
                ,
                g.ontouchend = function(e) {
                    if (!g.rail.drag)
                        return !0;
                    if (2 != g.rail.drag.pt)
                        return 1 == g.rail.drag.pt ? g.onmouseup(e) : void 0;
                    if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                        return !1;
                    g.rail.drag = !1;
                    var t = "mouseup" === e.type;
                    return g.hasmoving && (g.scrollmom.doMomentum(),
                    g.lastmouseup = !0,
                    g.hideCursor(),
                    x.hasmousecapture && P.releaseCapture(),
                    t) ? g.cancelEvent(e) : void 0
                }
                ,
                h = v.emulatetouch && g.isiframe && !x.hasmousecapture,
                d = .3 * v.directionlockdeadzone | 0,
                g.ontouchmove = function(e, t) {
                    if (!g.rail.drag)
                        return !0;
                    if (e.targetTouches && v.preventmultitouchscrolling && 1 < e.targetTouches.length)
                        return !0;
                    if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                        return !0;
                    if (2 != g.rail.drag.pt)
                        return 1 == g.rail.drag.pt ? g.onmousemove(e) : void 0;
                    "changedTouches"in e && (e.clientX = e.changedTouches[0].clientX,
                    e.clientY = e.changedTouches[0].clientY),
                    a = r = 0,
                    h && !t && (a = -(t = g.win.position()).left,
                    r = -t.top);
                    var n = e.clientY + r
                      , t = n - g.rail.drag.y
                      , i = e.clientX + a
                      , r = i - g.rail.drag.x
                      , o = g.rail.drag.st - t;
                    if (g.ishwscroll && v.bouncescroll)
                        o < 0 ? o = Math.round(o / 2) : o > g.page.maxh && (o = g.page.maxh + Math.round((o - g.page.maxh) / 2));
                    else if (o < 0 ? n = o = 0 : o > g.page.maxh && (o = g.page.maxh,
                    n = 0),
                    0 === n && !g.hasmoving)
                        return g.ispage || (g.rail.drag = !1),
                        !0;
                    var s = g.getScrollLeft();
                    if (g.railh && g.railh.scrollable && (s = g.isrtlmode ? r - g.rail.drag.sl : g.rail.drag.sl - r,
                    g.ishwscroll && v.bouncescroll ? s < 0 ? s = Math.round(s / 2) : s > g.page.maxw && (s = g.page.maxw + Math.round((s - g.page.maxw) / 2)) : (s < 0 && (i = s = 0),
                    s > g.page.maxw && (s = g.page.maxw,
                    i = 0))),
                    !g.hasmoving) {
                        if (g.rail.drag.y === e.clientY && g.rail.drag.x === e.clientX)
                            return g.cancelEvent(e);
                        var a = Math.abs(t)
                          , t = Math.abs(r)
                          , r = v.directionlockdeadzone;
                        if (g.rail.drag.ck ? "v" == g.rail.drag.ck ? r < t && a <= d ? g.rail.drag = !1 : r < a && (g.rail.drag.dl = "v") : "h" == g.rail.drag.ck && (r < a && t <= d ? g.rail.drag = !1 : r < t && (g.rail.drag.dl = "h")) : r < a && r < t ? g.rail.drag.dl = "f" : r < a ? g.rail.drag.dl = d < t ? "f" : "v" : r < t && (g.rail.drag.dl = d < a ? "f" : "h"),
                        !g.rail.drag.dl)
                            return g.cancelEvent(e);
                        g.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0),
                        g.hasmoving = !0
                    }
                    return g.preventclick && !g.preventclick.click && (g.preventclick.click = g.preventclick.tg.onclick || !1,
                    g.preventclick.tg.onclick = g.onpreventclick),
                    g.rail.drag.dl && ("v" == g.rail.drag.dl ? s = g.rail.drag.sl : "h" == g.rail.drag.dl && (o = g.rail.drag.st)),
                    g.synched("touchmove", function() {
                        g.rail.drag && 2 == g.rail.drag.pt && (g.prepareTransition && g.resetTransition(),
                        g.rail.scrollable && g.setScrollTop(o),
                        g.scrollmom.update(i, n),
                        g.railh && g.railh.scrollable ? (g.setScrollLeft(s),
                        g.showCursor(o, s)) : g.showCursor(o),
                        x.isie10) && P.selection.clear()
                    }),
                    g.cancelEvent(e)
                }
                ,
                g.ontouchstartCursor = function(e, t) {
                    if (!g.rail.drag || 3 == g.rail.drag.pt)
                        return g.locked || (g.cancelScroll(),
                        g.rail.drag = {
                            x: e.touches[0].clientX,
                            y: e.touches[0].clientY,
                            sx: g.scroll.x,
                            sy: g.scroll.y,
                            pt: 3,
                            hr: !!t
                        },
                        t = g.getTarget(e),
                        !g.ispage && x.hasmousecapture && t.setCapture(),
                        g.isiframe && !x.hasmousecapture && (g.saved.csspointerevents = g.doc.css("pointer-events"),
                        g.css(g.doc, {
                            "pointer-events": "none"
                        }))),
                        g.cancelEvent(e)
                }
                ,
                g.ontouchendCursor = function(e) {
                    if (g.rail.drag && (x.hasmousecapture && P.releaseCapture(),
                    g.isiframe && !x.hasmousecapture && g.doc.css("pointer-events", g.saved.csspointerevents),
                    3 == g.rail.drag.pt))
                        return g.rail.drag = !1,
                        g.cancelEvent(e)
                }
                ,
                g.ontouchmoveCursor = function(e) {
                    var t;
                    if (g.rail.drag && 3 == g.rail.drag.pt)
                        return g.cursorfreezed = !0,
                        g.rail.drag.hr ? (g.scroll.x = g.rail.drag.sx + (e.touches[0].clientX - g.rail.drag.x),
                        g.scroll.x < 0 && (g.scroll.x = 0),
                        t = g.scrollvaluemaxw,
                        g.scroll.x > t && (g.scroll.x = t)) : (g.scroll.y = g.rail.drag.sy + (e.touches[0].clientY - g.rail.drag.y),
                        g.scroll.y < 0 && (g.scroll.y = 0),
                        t = g.scrollvaluemax,
                        g.scroll.y > t && (g.scroll.y = t)),
                        g.synched("touchmove", function() {
                            g.rail.drag && 3 == g.rail.drag.pt && (g.showCursor(),
                            g.rail.drag.hr ? g.doScrollLeft(Math.round(g.scroll.x * g.scrollratio.x), v.cursordragspeed) : g.doScrollTop(Math.round(g.scroll.y * g.scrollratio.y), v.cursordragspeed))
                        }),
                        g.cancelEvent(e)
                }
                ),
                g.onmousedown = function(e, t) {
                    if (!g.rail.drag || 1 == g.rail.drag.pt)
                        return g.railslocked || (g.cancelScroll(),
                        g.rail.drag = {
                            x: e.clientX,
                            y: e.clientY,
                            sx: g.scroll.x,
                            sy: g.scroll.y,
                            pt: 1,
                            hr: t || !1
                        },
                        t = g.getTarget(e),
                        x.hasmousecapture && t.setCapture(),
                        g.isiframe && !x.hasmousecapture && (g.saved.csspointerevents = g.doc.css("pointer-events"),
                        g.css(g.doc, {
                            "pointer-events": "none"
                        })),
                        g.hasmoving = !1),
                        g.cancelEvent(e)
                }
                ,
                g.onmouseup = function(e) {
                    if (g.rail.drag)
                        return 1 != g.rail.drag.pt || (x.hasmousecapture && P.releaseCapture(),
                        g.isiframe && !x.hasmousecapture && g.doc.css("pointer-events", g.saved.csspointerevents),
                        g.rail.drag = !1,
                        g.cursorfreezed = !1,
                        g.hasmoving && g.triggerScrollEnd(),
                        g.cancelEvent(e))
                }
                ,
                g.onmousemove = function(e) {
                    var t;
                    if (g.rail.drag)
                        return 1 !== g.rail.drag.pt ? void 0 : x.ischrome && 0 === e.which ? g.onmouseup(e) : (g.cursorfreezed = !0,
                        g.hasmoving || g.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0),
                        g.hasmoving = !0,
                        g.rail.drag.hr ? (g.scroll.x = g.rail.drag.sx + (e.clientX - g.rail.drag.x),
                        g.scroll.x < 0 && (g.scroll.x = 0),
                        t = g.scrollvaluemaxw,
                        g.scroll.x > t && (g.scroll.x = t)) : (g.scroll.y = g.rail.drag.sy + (e.clientY - g.rail.drag.y),
                        g.scroll.y < 0 && (g.scroll.y = 0),
                        t = g.scrollvaluemax,
                        g.scroll.y > t && (g.scroll.y = t)),
                        g.synched("mousemove", function() {
                            g.cursorfreezed && (g.showCursor(),
                            g.rail.drag.hr ? g.scrollLeft(Math.round(g.scroll.x * g.scrollratio.x)) : g.scrollTop(Math.round(g.scroll.y * g.scrollratio.y)))
                        }),
                        g.cancelEvent(e));
                    g.checkarea = 0
                }
                ,
                x.cantouch || v.emulatetouch ? (g.onpreventclick = function(e) {
                    if (g.preventclick)
                        return g.preventclick.tg.onclick = g.preventclick.click,
                        g.preventclick = !1,
                        g.cancelEvent(e)
                }
                ,
                g.onclick = !x.isios && function(e) {
                    return !g.lastmouseup || (g.lastmouseup = !1,
                    g.cancelEvent(e))
                }
                ,
                v.grabcursorenabled && x.cursorgrabvalue && (g.css(g.ispage ? g.doc : g.win, {
                    cursor: x.cursorgrabvalue
                }),
                g.css(g.rail, {
                    cursor: x.cursorgrabvalue
                }))) : (p = function(e) {
                    var t;
                    g.selectiondrag && (e && ((t = g.win.outerHeight()) <= (e = 0 < (e = e.pageY - g.selectiondrag.top) && e < t ? 0 : e) && (e -= t),
                    g.selectiondrag.df = e),
                    0 !== g.selectiondrag.df) && (t = -2 * g.selectiondrag.df / 6 | 0,
                    g.doScrollBy(t),
                    g.debounced("doselectionscroll", function() {
                        p()
                    }, 50))
                }
                ,
                g.hasTextSelected = "getSelection"in P ? function() {
                    return 0 < P.getSelection().rangeCount
                }
                : "selection"in P ? function() {
                    return "None" != P.selection.type
                }
                : function() {
                    return !1
                }
                ,
                g.onselectionstart = function(e) {
                    g.ispage || (g.selectiondrag = g.win.offset())
                }
                ,
                g.onselectionend = function(e) {
                    g.selectiondrag = !1
                }
                ,
                g.onselectiondrag = function(e) {
                    g.selectiondrag && g.hasTextSelected() && g.debounced("selectionscroll", function() {
                        p(e)
                    }, 250)
                }
                ),
                x.hasw3ctouch ? (g.css(g.ispage ? N("html") : g.win, {
                    "touch-action": "none"
                }),
                g.css(g.rail, {
                    "touch-action": "none"
                }),
                g.css(g.cursor, {
                    "touch-action": "none"
                }),
                g.bind(g.win, "pointerdown", g.ontouchstart),
                g.bind(P, "pointerup", g.ontouchend),
                g.delegate(P, "pointermove", g.ontouchmove)) : x.hasmstouch ? (g.css(g.ispage ? N("html") : g.win, {
                    "-ms-touch-action": "none"
                }),
                g.css(g.rail, {
                    "-ms-touch-action": "none"
                }),
                g.css(g.cursor, {
                    "-ms-touch-action": "none"
                }),
                g.bind(g.win, "MSPointerDown", g.ontouchstart),
                g.bind(P, "MSPointerUp", g.ontouchend),
                g.delegate(P, "MSPointerMove", g.ontouchmove),
                g.bind(g.cursor, "MSGestureHold", function(e) {
                    e.preventDefault()
                }),
                g.bind(g.cursor, "contextmenu", function(e) {
                    e.preventDefault()
                })) : x.cantouch && (g.bind(g.win, "touchstart", g.ontouchstart, !1, !0),
                g.bind(P, "touchend", g.ontouchend, !1, !0),
                g.bind(P, "touchcancel", g.ontouchend, !1, !0),
                g.delegate(P, "touchmove", g.ontouchmove, !1, !0)),
                v.emulatetouch && (g.bind(g.win, "mousedown", g.ontouchstart, !1, !0),
                g.bind(P, "mouseup", g.ontouchend, !1, !0),
                g.bind(P, "mousemove", g.ontouchmove, !1, !0)),
                (v.cursordragontouch || !x.cantouch && !v.emulatetouch) && (g.rail.css({
                    cursor: "default"
                }),
                g.railh && g.railh.css({
                    cursor: "default"
                }),
                g.jqbind(g.rail, "mouseenter", function() {
                    if (!g.ispage && !g.win.is(":visible"))
                        return !1;
                    g.canshowonmouseevent && g.showCursor(),
                    g.rail.active = !0
                }),
                g.jqbind(g.rail, "mouseleave", function() {
                    g.rail.active = !1,
                    g.rail.drag || g.hideCursor()
                }),
                v.sensitiverail && (g.bind(g.rail, "click", function(e) {
                    g.doRailClick(e, !1, !1)
                }),
                g.bind(g.rail, "dblclick", function(e) {
                    g.doRailClick(e, !0, !1)
                }),
                g.bind(g.cursor, "click", function(e) {
                    g.cancelEvent(e)
                }),
                g.bind(g.cursor, "dblclick", function(e) {
                    g.cancelEvent(e)
                })),
                g.railh) && (g.jqbind(g.railh, "mouseenter", function() {
                    if (!g.ispage && !g.win.is(":visible"))
                        return !1;
                    g.canshowonmouseevent && g.showCursor(),
                    g.rail.active = !0
                }),
                g.jqbind(g.railh, "mouseleave", function() {
                    g.rail.active = !1,
                    g.rail.drag || g.hideCursor()
                }),
                v.sensitiverail) && (g.bind(g.railh, "click", function(e) {
                    g.doRailClick(e, !1, !0)
                }),
                g.bind(g.railh, "dblclick", function(e) {
                    g.doRailClick(e, !0, !0)
                }),
                g.bind(g.cursorh, "click", function(e) {
                    g.cancelEvent(e)
                }),
                g.bind(g.cursorh, "dblclick", function(e) {
                    g.cancelEvent(e)
                })),
                v.cursordragontouch && (this.istouchcapable || x.cantouch) && (g.bind(g.cursor, "touchstart", g.ontouchstartCursor),
                g.bind(g.cursor, "touchmove", g.ontouchmoveCursor),
                g.bind(g.cursor, "touchend", g.ontouchendCursor),
                g.cursorh && g.bind(g.cursorh, "touchstart", function(e) {
                    g.ontouchstartCursor(e, !0)
                }),
                g.cursorh && g.bind(g.cursorh, "touchmove", g.ontouchmoveCursor),
                g.cursorh) && g.bind(g.cursorh, "touchend", g.ontouchendCursor),
                v.emulatetouch || x.isandroid || x.isios ? (g.bind(x.hasmousecapture ? g.win : P, "mouseup", g.ontouchend),
                g.onclick && g.bind(P, "click", g.onclick),
                v.cursordragontouch ? (g.bind(g.cursor, "mousedown", g.onmousedown),
                g.bind(g.cursor, "mouseup", g.onmouseup),
                g.cursorh && g.bind(g.cursorh, "mousedown", function(e) {
                    g.onmousedown(e, !0)
                }),
                g.cursorh && g.bind(g.cursorh, "mouseup", g.onmouseup)) : (g.bind(g.rail, "mousedown", function(e) {
                    e.preventDefault()
                }),
                g.railh && g.bind(g.railh, "mousedown", function(e) {
                    e.preventDefault()
                }))) : (g.bind(x.hasmousecapture ? g.win : P, "mouseup", g.onmouseup),
                g.bind(P, "mousemove", g.onmousemove),
                g.onclick && g.bind(P, "click", g.onclick),
                g.bind(g.cursor, "mousedown", g.onmousedown),
                g.bind(g.cursor, "mouseup", g.onmouseup),
                g.railh && (g.bind(g.cursorh, "mousedown", function(e) {
                    g.onmousedown(e, !0)
                }),
                g.bind(g.cursorh, "mouseup", g.onmouseup)),
                !g.ispage && v.enablescrollonselection && (g.bind(g.win[0], "mousedown", g.onselectionstart),
                g.bind(P, "mouseup", g.onselectionend),
                g.bind(g.cursor, "mouseup", g.onselectionend),
                g.cursorh && g.bind(g.cursorh, "mouseup", g.onselectionend),
                g.bind(P, "mousemove", g.onselectiondrag)),
                g.zoom && (g.jqbind(g.zoom, "mouseenter", function() {
                    g.canshowonmouseevent && g.showCursor(),
                    g.rail.active = !0
                }),
                g.jqbind(g.zoom, "mouseleave", function() {
                    g.rail.active = !1,
                    g.rail.drag || g.hideCursor()
                }))),
                v.enablemousewheel && (g.isiframe || g.mousewheel(x.isie && g.ispage ? P : g.win, g.onmousewheel),
                g.mousewheel(g.rail, g.onmousewheel),
                g.railh) && g.mousewheel(g.railh, g.onmousewheelhr),
                g.ispage || x.cantouch || /HTML|^BODY/.test(g.win[0].nodeName) || (g.win.attr("tabindex") || g.win.attr({
                    tabindex: ++O
                }),
                g.bind(g.win, "focus", function(e) {
                    C = g.getTarget(e).id || g.getTarget(e) || !1,
                    g.hasfocus = !0,
                    g.canshowonmouseevent && g.noticeCursor()
                }),
                g.bind(g.win, "blur", function(e) {
                    C = !1,
                    g.hasfocus = !1
                }),
                g.bind(g.win, "mouseenter", function(e) {
                    A = g.getTarget(e).id || g.getTarget(e) || !1,
                    g.hasmousefocus = !0,
                    g.canshowonmouseevent && g.noticeCursor()
                }),
                g.bind(g.win, "mouseleave", function(e) {
                    A = !1,
                    g.hasmousefocus = !1,
                    g.rail.drag || g.hideCursor()
                })),
                g.onkeypress = function(e) {
                    if (g.railslocked && 0 === g.page.maxh)
                        return !0;
                    e = e || j.event;
                    var t = g.getTarget(e);
                    if (t && /INPUT|TEXTAREA|SELECT|OPTION/.test(t.nodeName) && (!t.getAttribute("type") && !t.type || !/submit|button|cancel/i.tp))
                        return !0;
                    if (N(t).attr("contenteditable"))
                        return !0;
                    if (g.hasfocus || g.hasmousefocus && !C || g.ispage && !C && !A) {
                        t = e.keyCode;
                        if (g.railslocked && 27 != t)
                            return g.cancelEvent(e);
                        var n = e.ctrlKey || !1
                          , i = e.shiftKey || !1
                          , r = !1;
                        switch (t) {
                        case 38:
                        case 63233:
                            g.doScrollBy(72),
                            r = !0;
                            break;
                        case 40:
                        case 63235:
                            g.doScrollBy(-72),
                            r = !0;
                            break;
                        case 37:
                        case 63232:
                            g.railh && (n ? g.doScrollLeft(0) : g.doScrollLeftBy(72),
                            r = !0);
                            break;
                        case 39:
                        case 63234:
                            g.railh && (n ? g.doScrollLeft(g.page.maxw) : g.doScrollLeftBy(-72),
                            r = !0);
                            break;
                        case 33:
                        case 63276:
                            g.doScrollBy(g.view.h),
                            r = !0;
                            break;
                        case 34:
                        case 63277:
                            g.doScrollBy(-g.view.h),
                            r = !0;
                            break;
                        case 36:
                        case 63273:
                            g.railh && n ? g.doScrollPos(0, 0) : g.doScrollTo(0),
                            r = !0;
                            break;
                        case 35:
                        case 63275:
                            g.railh && n ? g.doScrollPos(g.page.maxw, g.page.maxh) : g.doScrollTo(g.page.maxh),
                            r = !0;
                            break;
                        case 32:
                            v.spacebarenabled && (i ? g.doScrollBy(g.view.h) : g.doScrollBy(-g.view.h),
                            r = !0);
                            break;
                        case 27:
                            g.zoomactive && (g.doZoom(),
                            r = !0)
                        }
                        return r ? g.cancelEvent(e) : void 0
                    }
                }
                ,
                v.enablekeyboard && g.bind(P, x.isopera && !x.isopera12 ? "keypress" : "keydown", g.onkeypress),
                g.bind(P, "keydown", function(e) {
                    e.ctrlKey && (g.wheelprevented = !0)
                }),
                g.bind(P, "keyup", function(e) {
                    e.ctrlKey || (g.wheelprevented = !1)
                }),
                g.bind(j, "blur", function(e) {
                    g.wheelprevented = !1
                }),
                g.bind(j, "resize", g.onscreenresize),
                g.bind(j, "orientationchange", g.onscreenresize),
                g.bind(j, "load", g.lazyResize),
                !x.ischrome || g.ispage || g.haswrapper || (f = g.win.attr("style"),
                i = parseFloat(g.win.css("width")) + 1,
                g.win.css("width", i),
                g.synched("chromefix", function() {
                    g.win.attr("style", f)
                })),
                g.onAttributeChange = function(e) {
                    g.lazyResize(g.isieold ? 250 : 30)
                }
                ,
                !v.enableobserver || (g.isie11 || !1 === R || (g.observerbody = new R(function(e) {
                    if (e.forEach(function(e) {
                        if ("attributes" == e.type)
                            return y.hasClass("modal-open") && y.hasClass("modal-dialog") && !N.contains(N(".modal-dialog")[0], g.doc[0]) ? g.hide() : g.show()
                    }),
                    g.me.clientWidth != g.page.width || g.me.clientHeight != g.page.height)
                        return g.lazyResize(30)
                }
                ),
                g.observerbody.observe(P.body, {
                    childList: !0,
                    subtree: !0,
                    characterData: !1,
                    attributes: !0,
                    attributeFilter: ["class"]
                })),
                g.ispage) || g.haswrapper || (m = g.win[0],
                !1 !== R ? (g.observer = new R(function(e) {
                    e.forEach(g.onAttributeChange)
                }
                ),
                g.observer.observe(m, {
                    childList: !0,
                    characterData: !1,
                    attributes: !0,
                    subtree: !1
                }),
                g.observerremover = new R(function(e) {
                    e.forEach(function(e) {
                        if (0 < e.removedNodes.length)
                            for (var t in e.removedNodes)
                                if (g && e.removedNodes[t] === m)
                                    return g.remove()
                    })
                }
                ),
                g.observerremover.observe(m.parentNode, {
                    childList: !0,
                    characterData: !1,
                    attributes: !1,
                    subtree: !1
                })) : (g.bind(m, x.isie && !x.isie9 ? "propertychange" : "DOMAttrModified", g.onAttributeChange),
                x.isie9 && m.attachEvent("onpropertychange", g.onAttributeChange),
                g.bind(m, "DOMNodeRemoved", function(e) {
                    e.target === m && g.remove()
                }))),
                !g.ispage && v.boxzoom && g.bind(j, "resize", g.resizeZoom),
                g.istextarea && (g.bind(g.win, "keydown", g.lazyResize),
                g.bind(g.win, "mouseup", g.lazyResize)),
                g.lazyResize(30)
            }
            "IFRAME" == this.doc[0].nodeName && (e = function() {
                var t, e;
                g.iframexd = !1;
                try {
                    (t = "contentDocument"in this ? this.contentDocument : this.contentWindow._doc).domain
                } catch (e) {
                    t = !(g.iframexd = !0)
                }
                if (g.iframexd)
                    return "console"in j && console.log("NiceScroll error: policy restriced iframe"),
                    !0;
                g.forcescreen = !0,
                g.isiframe && (g.iframe = {
                    doc: N(t),
                    html: g.doc.contents().find("html")[0],
                    body: g.doc.contents().find("body")[0]
                },
                g.getContentSize = function() {
                    return {
                        w: Math.max(g.iframe.html.scrollWidth, g.iframe.body.scrollWidth),
                        h: Math.max(g.iframe.html.scrollHeight, g.iframe.body.scrollHeight)
                    }
                }
                ,
                g.docscroll = N(g.iframe.body)),
                x.isios || !v.iframeautoresize || g.isiframe || (g.win.scrollTop(0),
                g.doc.height(""),
                e = Math.max(t.getElementsByTagName("html")[0].scrollHeight, t.body.scrollHeight),
                g.doc.height(e)),
                g.lazyResize(30),
                g.css(N(g.iframe.body), n),
                x.isios && g.haswrapper && g.css(N(t.body), {
                    "-webkit-transform": "translate3d(0,0,0)"
                }),
                "contentWindow"in this ? g.bind(this.contentWindow, "scroll", g.onscroll) : g.bind(t, "scroll", g.onscroll),
                v.enablemousewheel && g.mousewheel(t, g.onmousewheel),
                v.enablekeyboard && g.bind(t, x.isopera ? "keypress" : "keydown", g.onkeypress),
                x.cantouch ? (g.bind(t, "touchstart", g.ontouchstart),
                g.bind(t, "touchmove", g.ontouchmove)) : v.emulatetouch && (g.bind(t, "mousedown", g.ontouchstart),
                g.bind(t, "mousemove", function(e) {
                    return g.ontouchmove(e, !0)
                }),
                v.grabcursorenabled) && x.cursorgrabvalue && g.css(N(t.body), {
                    cursor: x.cursorgrabvalue
                }),
                g.bind(t, "mouseup", g.ontouchend),
                g.zoom && (v.dblclickzoom && g.bind(t, "dblclick", g.doZoom),
                g.ongesturezoom) && g.bind(t, "gestureend", g.ongesturezoom)
            }
            ,
            this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function() {
                e.call(g.doc[0], !1)
            }, 500),
            g.bind(this.doc, "load", e))
        }
        ,
        this.showCursor = function(e, t) {
            g.cursortimeout && (clearTimeout(g.cursortimeout),
            g.cursortimeout = 0),
            g.rail && (g.autohidedom && (g.autohidedom.stop().css({
                opacity: v.cursoropacitymax
            }),
            g.cursoractive = !0),
            g.rail.drag && 1 == g.rail.drag.pt || (void 0 !== e && !1 !== e && (g.scroll.y = e / g.scrollratio.y | 0),
            void 0 !== t && (g.scroll.x = t / g.scrollratio.x | 0)),
            g.cursor.css({
                height: g.cursorheight,
                top: g.scroll.y
            }),
            g.cursorh && (e = g.hasreversehr ? g.scrollvaluemaxw - g.scroll.x : g.scroll.x,
            g.cursorh.css({
                width: g.cursorwidth,
                left: !g.rail.align && g.rail.visibility ? e + g.rail.width : e
            }),
            g.cursoractive = !0),
            g.zoom) && g.zoom.stop().css({
                opacity: v.cursoropacitymax
            })
        }
        ,
        this.hideCursor = function(e) {
            g.cursortimeout || g.rail && g.autohidedom && (g.hasmousefocus && "leave" === v.autohidemode || (g.cursortimeout = setTimeout(function() {
                g.rail.active && g.showonmouseevent || (g.autohidedom.stop().animate({
                    opacity: v.cursoropacitymin
                }),
                g.zoom && g.zoom.stop().animate({
                    opacity: v.cursoropacitymin
                }),
                g.cursoractive = !1),
                g.cursortimeout = 0
            }, e || v.hidecursordelay)))
        }
        ,
        this.noticeCursor = function(e, t, n) {
            g.showCursor(t, n),
            g.rail.active || g.hideCursor(e)
        }
        ,
        this.getContentSize = g.ispage ? function() {
            return {
                w: Math.max(P.body.scrollWidth, P.documentElement.scrollWidth),
                h: Math.max(P.body.scrollHeight, P.documentElement.scrollHeight)
            }
        }
        : g.haswrapper ? function() {
            return {
                w: g.doc[0].offsetWidth,
                h: g.doc[0].offsetHeight
            }
        }
        : function() {
            return {
                w: g.docscroll[0].scrollWidth,
                h: g.docscroll[0].scrollHeight
            }
        }
        ,
        this.onResize = function(e, t) {
            if (!g || !g.win)
                return !1;
            var n = g.page.maxh
              , i = g.page.maxw
              , r = g.view.h
              , o = g.view.w;
            if (g.view = {
                w: g.ispage ? g.win.width() : g.win[0].clientWidth,
                h: g.ispage ? g.win.height() : g.win[0].clientHeight
            },
            g.page = t || g.getContentSize(),
            g.page.maxh = Math.max(0, g.page.h - g.view.h),
            g.page.maxw = Math.max(0, g.page.w - g.view.w),
            g.page.maxh == n && g.page.maxw == i && g.view.w == o && g.view.h == r) {
                if (g.ispage)
                    return g;
                t = g.win.offset();
                if (g.lastposition) {
                    n = g.lastposition;
                    if (n.top == t.top && n.left == t.left)
                        return g
                }
                g.lastposition = t
            }
            return 0 === g.page.maxh ? (g.hideRail(),
            g.scrollvaluemax = 0,
            g.scroll.y = 0,
            g.scrollratio.y = 0,
            g.cursorheight = 0,
            g.setScrollTop(0),
            g.rail && (g.rail.scrollable = !1)) : (g.page.maxh -= v.railpadding.top + v.railpadding.bottom,
            g.rail.scrollable = !0),
            0 === g.page.maxw ? (g.hideRailHr(),
            g.scrollvaluemaxw = 0,
            g.scroll.x = 0,
            g.scrollratio.x = 0,
            g.cursorwidth = 0,
            g.setScrollLeft(0),
            g.railh && (g.railh.scrollable = !1)) : (g.page.maxw -= v.railpadding.left + v.railpadding.right,
            g.railh && (g.railh.scrollable = v.horizrailenabled)),
            g.railslocked = g.locked || 0 === g.page.maxh && 0 === g.page.maxw,
            g.railslocked ? (g.ispage || g.updateScrollBar(g.view),
            !1) : (g.hidden || (g.rail.visibility || g.showRail(),
            g.railh && !g.railh.visibility && g.showRailHr()),
            g.istextarea && g.win.css("resize") && "none" != g.win.css("resize") && (g.view.h -= 20),
            g.cursorheight = Math.min(g.view.h, Math.round(g.view.h * (g.view.h / g.page.h))),
            g.cursorheight = v.cursorfixedheight || Math.max(v.cursorminheight, g.cursorheight),
            g.cursorwidth = Math.min(g.view.w, Math.round(g.view.w * (g.view.w / g.page.w))),
            g.cursorwidth = v.cursorfixedheight || Math.max(v.cursorminheight, g.cursorwidth),
            g.scrollvaluemax = g.view.h - g.cursorheight - (v.railpadding.top + v.railpadding.bottom),
            g.hasborderbox || (g.scrollvaluemax -= g.cursor[0].offsetHeight - g.cursor[0].clientHeight),
            g.railh && (g.railh.width = 0 < g.page.maxh ? g.view.w - g.rail.width : g.view.w,
            g.scrollvaluemaxw = g.railh.width - g.cursorwidth - (v.railpadding.left + v.railpadding.right)),
            g.ispage || g.updateScrollBar(g.view),
            g.scrollratio = {
                x: g.page.maxw / g.scrollvaluemaxw,
                y: g.page.maxh / g.scrollvaluemax
            },
            g.getScrollTop() > g.page.maxh ? g.doScrollTop(g.page.maxh) : (g.scroll.y = g.getScrollTop() / g.scrollratio.y | 0,
            g.scroll.x = g.getScrollLeft() / g.scrollratio.x | 0,
            g.cursoractive && g.noticeCursor()),
            g.scroll.y && 0 === g.getScrollTop() && g.doScrollTo(g.scroll.y * g.scrollratio.y | 0),
            g)
        }
        ,
        this.resize = g.onResize,
        0), b = (this.onscreenresize = function(e) {
            clearTimeout(m);
            var t = !g.ispage && !g.haswrapper;
            t && g.hideRails(),
            m = setTimeout(function() {
                g && (t && g.showRails(),
                g.resize()),
                m = 0
            }, 120)
        }
        ,
        this.lazyResize = function(e) {
            return clearTimeout(m),
            e = isNaN(e) ? 240 : e,
            m = setTimeout(function() {
                g && g.resize(),
                m = 0
            }, e),
            g
        }
        ,
        this.jqbind = function(e, t, n) {
            g.events.push({
                e: e,
                n: t,
                f: n,
                q: !0
            }),
            N(e).on(t, n)
        }
        ,
        !(this.mousewheel = function(e, t, n) {
            var i, e = "jquery"in e ? e[0] : e;
            "onwheel"in P.createElement("div") ? g._bind(e, "wheel", t, n || !1) : (o(e, i = void 0 !== P.onmousewheel ? "mousewheel" : "DOMMouseScroll", t, n || !1),
            "DOMMouseScroll" == i && o(e, "MozMousePixelScroll", t, n || !1))
        }
        ));
        if (x.haseventlistener) {
            try {
                var w = Object.defineProperty({}, "passive", {
                    get: function() {
                        b = !0
                    }
                });
                j.addEventListener("test", null, w)
            } catch (e) {}
            this.stopPropagation = function(e) {
                return !!e && ((e = e.original || e).stopPropagation(),
                !1)
            }
            ,
            this.cancelEvent = function(e) {
                return e.cancelable && e.preventDefault(),
                e.stopImmediatePropagation(),
                e.preventManipulation && e.preventManipulation(),
                !1
            }
        } else
            Event.prototype.preventDefault = function() {
                this.returnValue = !1
            }
            ,
            Event.prototype.stopPropagation = function() {
                this.cancelBubble = !0
            }
            ,
            j.constructor.prototype.addEventListener = P.constructor.prototype.addEventListener = Element.prototype.addEventListener = function(e, t, n) {
                this.attachEvent("on" + e, t)
            }
            ,
            j.constructor.prototype.removeEventListener = P.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function(e, t, n) {
                this.detachEvent("on" + e, t)
            }
            ,
            this.cancelEvent = function(e) {
                return (e = e || j.event) && (e.cancelBubble = !0,
                e.cancel = !0,
                e.returnValue = !1),
                !1
            }
            ,
            this.stopPropagation = function(e) {
                return (e = e || j.event) && (e.cancelBubble = !0),
                !1
            }
            ;
        this.delegate = function(e, t, n, i, r) {
            var o = H[t] || !1;
            o || (o = {
                a: [],
                l: [],
                f: function(e) {
                    for (var t = o.l, n = !1, i = t.length - 1; 0 <= i; i--)
                        if (!1 === (n = t[i].call(e.target, e)))
                            return !1;
                    return n
                }
            },
            g.bind(e, t, o.f, i, r),
            H[t] = o),
            g.ispage ? (o.a = [g.id].concat(o.a),
            o.l = [n].concat(o.l)) : (o.a.push(g.id),
            o.l.push(n))
        }
        ,
        this.undelegate = function(e, t, n, i, r) {
            var o = H[t] || !1;
            if (o && o.l)
                for (var s = 0, a = o.l.length; s < a; s++)
                    o.a[s] === g.id && (o.a.splice(s),
                    o.l.splice(s),
                    0 === o.a.length) && (g._unbind(e, t, o.l.f),
                    H[t] = null)
        }
        ,
        this.bind = function(e, t, n, i, r) {
            e = "jquery"in e ? e[0] : e;
            g._bind(e, t, n, i || !1, r || !1)
        }
        ,
        this._bind = function(e, t, n, i, r) {
            g.events.push({
                e: e,
                n: t,
                f: n,
                b: i,
                q: !1
            }),
            b && r ? e.addEventListener(t, n, {
                passive: !1,
                capture: i
            }) : e.addEventListener(t, n, i || !1)
        }
        ,
        this._unbind = function(e, t, n, i) {
            H[t] ? g.undelegate(e, t, n, i) : e.removeEventListener(t, n, i)
        }
        ,
        this.unbindAll = function() {
            for (var e = 0; e < g.events.length; e++) {
                var t = g.events[e];
                t.q ? t.e.unbind(t.n, t.f) : g._unbind(t.e, t.n, t.f, t.b)
            }
        }
        ,
        this.showRails = function() {
            return g.showRail().showRailHr()
        }
        ,
        this.showRail = function() {
            return 0 === g.page.maxh || !g.ispage && "none" == g.win.css("display") || (g.rail.visibility = !0,
            g.rail.css("display", "block")),
            g
        }
        ,
        this.showRailHr = function() {
            return !g.railh || 0 === g.page.maxw || !g.ispage && "none" == g.win.css("display") || (g.railh.visibility = !0,
            g.railh.css("display", "block")),
            g
        }
        ,
        this.hideRails = function() {
            return g.hideRail().hideRailHr()
        }
        ,
        this.hideRail = function() {
            return g.rail.visibility = !1,
            g.rail.css("display", "none"),
            g
        }
        ,
        this.hideRailHr = function() {
            return g.railh && (g.railh.visibility = !1,
            g.railh.css("display", "none")),
            g
        }
        ,
        this.show = function() {
            return g.hidden = !1,
            g.railslocked = !1,
            g.showRails()
        }
        ,
        this.hide = function() {
            return g.hidden = !0,
            g.railslocked = !0,
            g.hideRails()
        }
        ,
        this.toggle = function() {
            return g.hidden ? g.show() : g.hide()
        }
        ,
        this.remove = function() {
            for (var e in g.stop(),
            g.cursortimeout && clearTimeout(g.cursortimeout),
            g.delaylist)
                g.delaylist[e] && Y(g.delaylist[e].h);
            g.doZoomOut(),
            g.unbindAll(),
            x.isie9 && g.win[0].detachEvent("onpropertychange", g.onAttributeChange),
            !1 !== g.observer && g.observer.disconnect(),
            !1 !== g.observerremover && g.observerremover.disconnect(),
            !1 !== g.observerbody && g.observerbody.disconnect(),
            g.events = null,
            g.cursor && g.cursor.remove(),
            g.cursorh && g.cursorh.remove(),
            g.rail && g.rail.remove(),
            g.railh && g.railh.remove(),
            g.zoom && g.zoom.remove();
            for (var t = 0; t < g.saved.css.length; t++) {
                var n = g.saved.css[t];
                n[0].css(n[1], void 0 === n[2] ? "" : n[2])
            }
            g.saved = !1,
            g.me.data("__nicescroll", "");
            var i, r = N.nicescroll;
            for (i in r.each(function(e) {
                if (this && this.id === g.id) {
                    delete r[e];
                    for (var t = ++e; t < r.length; t++,
                    e++)
                        r[e] = r[t];
                    --r.length && delete r[r.length]
                }
            }),
            g)
                g[i] = null,
                delete g[i];
            g = null
        }
        ,
        this.scrollstart = function(e) {
            return this.onscrollstart = e,
            g
        }
        ,
        this.scrollend = function(e) {
            return this.onscrollend = e,
            g
        }
        ,
        this.scrollcancel = function(e) {
            return this.onscrollcancel = e,
            g
        }
        ,
        this.zoomin = function(e) {
            return this.onzoomin = e,
            g
        }
        ,
        this.zoomout = function(e) {
            return this.onzoomout = e,
            g
        }
        ,
        this.isScrollable = function(e) {
            var t = e.target || e;
            if ("OPTION" == t.nodeName)
                return !0;
            for (; t && 1 == t.nodeType && t !== this.me[0] && !/^BODY|HTML/.test(t.nodeName); ) {
                var n = N(t)
                  , n = n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
                if (/scroll|auto/.test(n))
                    return t.clientHeight != t.scrollHeight;
                t = !!t.parentNode && t.parentNode
            }
            return !1
        }
        ,
        this.getViewport = function(e) {
            for (var t = !(!e || !e.parentNode) && e.parentNode; t && 1 == t.nodeType && !/^BODY|HTML/.test(t.nodeName); ) {
                var n = N(t);
                if (/fixed|absolute/.test(n.css("position")))
                    return n;
                var i = n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
                if (/scroll|auto/.test(i) && t.clientHeight != t.scrollHeight)
                    return n;
                if (0 < n.getNiceScroll().length)
                    return n;
                t = !!t.parentNode && t.parentNode
            }
            return !1
        }
        ,
        this.triggerScrollStart = function(e, t, n, i, r) {
            g.onscrollstart && (e = {
                type: "scrollstart",
                current: {
                    x: e,
                    y: t
                },
                request: {
                    x: n,
                    y: i
                },
                end: {
                    x: g.newscrollx,
                    y: g.newscrolly
                },
                speed: r
            },
            g.onscrollstart.call(g, e))
        }
        ,
        this.triggerScrollEnd = function() {
            var e, t;
            g.onscrollend && (e = g.getScrollLeft(),
            t = g.getScrollTop(),
            g.onscrollend.call(g, {
                type: "scrollend",
                current: {
                    x: e,
                    y: t
                },
                end: {
                    x: e,
                    y: t
                }
            }))
        }
        ;
        var _, k = 0, S = 0, T = 0, M = 1, E = !1;
        this.onmousewheel = function(e) {
            var t, n;
            return !g.wheelprevented && !g.locked && (g.railslocked ? (g.debounced("checkunlock", g.resize, 250),
            !1) : g.rail.drag ? g.cancelEvent(e) : ("auto" === v.oneaxismousemode && 0 !== e.deltaX && (v.oneaxismousemode = !1),
            v.oneaxismousemode && 0 === e.deltaX && !g.rail.scrollable ? !g.railh || !g.railh.scrollable || g.onmousewheelhr(e) : (n = q(),
            t = !1,
            v.preservenativescrolling && g.checkarea + 600 < n && (g.nativescrollingarea = g.isScrollable(e),
            t = !0),
            g.checkarea = n,
            !!g.nativescrollingarea || ((n = i(e, !1, t)) && (g.checkarea = 0),
            n))))
        }
        ,
        this.onmousewheelhr = function(e) {
            var t, n;
            if (!g.wheelprevented)
                return !(!g.railslocked && g.railh.scrollable) || (g.rail.drag ? g.cancelEvent(e) : (t = q(),
                n = !1,
                v.preservenativescrolling && g.checkarea + 600 < t && (g.nativescrollingarea = g.isScrollable(e),
                n = !0),
                g.checkarea = t,
                !!g.nativescrollingarea || (g.railslocked ? g.cancelEvent(e) : i(e, !0, n))))
        }
        ,
        this.stop = function() {
            return g.cancelScroll(),
            g.scrollmon && g.scrollmon.stop(),
            g.cursorfreezed = !1,
            g.scroll.y = Math.round(g.getScrollTop() * (1 / g.scrollratio.y)),
            g.noticeCursor(),
            g
        }
        ,
        this.getTransitionSpeed = function(e) {
            return 80 + e / 72 * v.scrollspeed | 0
        }
        ,
        v.smoothscroll ? g.ishwscroll && x.hastransition && v.usetransition && v.smoothscroll ? (_ = "",
        this.resetTransition = function() {
            _ = "",
            g.doc.css(x.prefixstyle + "transition-duration", "0ms")
        }
        ,
        this.prepareTransition = function(e, t) {
            t = t ? e : g.getTransitionSpeed(e),
            e = t + "ms";
            return _ !== e && (_ = e,
            g.doc.css(x.prefixstyle + "transition-duration", e)),
            t
        }
        ,
        this.doScrollLeft = function(e, t) {
            var n = g.scrollrunning ? g.newscrolly : g.getScrollTop();
            g.doScrollPos(e, n, t)
        }
        ,
        this.doScrollTop = function(e, t) {
            var n = g.scrollrunning ? g.newscrollx : g.getScrollLeft();
            g.doScrollPos(n, e, t)
        }
        ,
        this.cursorupdate = {
            running: !1,
            start: function() {
                var e, t = this;
                t.running || (t.running = !0,
                I(e = function() {
                    t.running && I(e),
                    g.showCursor(g.getScrollTop(), g.getScrollLeft()),
                    g.notifyScrollEvent(g.win[0])
                }
                ))
            },
            stop: function() {
                this.running = !1
            }
        },
        this.doScrollPos = function(e, t, n) {
            var i = g.getScrollTop()
              , r = g.getScrollLeft();
            if (((g.newscrolly - i) * (t - i) < 0 || (g.newscrollx - r) * (e - r) < 0) && g.cancelScroll(),
            v.bouncescroll ? (t < 0 ? t = t / 2 | 0 : t > g.page.maxh && (t = g.page.maxh + (t - g.page.maxh) / 2 | 0),
            e < 0 ? e = e / 2 | 0 : e > g.page.maxw && (e = g.page.maxw + (e - g.page.maxw) / 2 | 0)) : (t < 0 ? t = 0 : t > g.page.maxh && (t = g.page.maxh),
            e < 0 ? e = 0 : e > g.page.maxw && (e = g.page.maxw)),
            g.scrollrunning && e == g.newscrollx && t == g.newscrolly)
                return !1;
            g.newscrolly = t,
            g.newscrollx = e;
            var i = g.getScrollTop()
              , r = g.getScrollLeft()
              , o = {}
              , o = (o.x = e - r,
            o.y = t - i,
            0 | Math.sqrt(o.x * o.x + o.y * o.y))
              , o = g.prepareTransition(o);
            g.scrollrunning || (g.scrollrunning = !0,
            g.triggerScrollStart(r, i, e, t, o),
            g.cursorupdate.start()),
            g.scrollendtrapped = !0,
            x.transitionend || (g.scrollendtrapped && clearTimeout(g.scrollendtrapped),
            g.scrollendtrapped = setTimeout(g.onScrollTransitionEnd, o)),
            g.setScrollTop(g.newscrolly),
            g.setScrollLeft(g.newscrollx)
        }
        ,
        this.cancelScroll = function() {
            var e, t;
            return !g.scrollendtrapped || (e = g.getScrollTop(),
            t = g.getScrollLeft(),
            g.scrollrunning = !1,
            x.transitionend || clearTimeout(x.transitionend),
            g.scrollendtrapped = !1,
            g.resetTransition(),
            g.setScrollTop(e),
            g.railh && g.setScrollLeft(t),
            g.timerscroll && g.timerscroll.tm && clearInterval(g.timerscroll.tm),
            g.timerscroll = !1,
            g.cursorfreezed = !1,
            g.cursorupdate.stop(),
            g.showCursor(e, t),
            g)
        }
        ,
        this.onScrollTransitionEnd = function() {
            if (g.scrollendtrapped) {
                var e = g.getScrollTop()
                  , t = g.getScrollLeft();
                if (e < 0 ? e = 0 : e > g.page.maxh && (e = g.page.maxh),
                t < 0 ? t = 0 : t > g.page.maxw && (t = g.page.maxw),
                e != g.newscrolly || t != g.newscrollx)
                    return g.doScrollPos(t, e, v.snapbackspeed);
                g.scrollrunning && g.triggerScrollEnd(),
                g.scrollrunning = !1,
                g.scrollendtrapped = !1,
                g.resetTransition(),
                g.timerscroll = !1,
                g.setScrollTop(e),
                g.railh && g.setScrollLeft(t),
                g.cursorupdate.stop(),
                g.noticeCursor(!1, e, t),
                g.cursorfreezed = !1
            }
        }
        ) : (this.doScrollLeft = function(e, t) {
            var n = g.scrollrunning ? g.newscrolly : g.getScrollTop();
            g.doScrollPos(e, n, t)
        }
        ,
        this.doScrollTop = function(e, t) {
            var n = g.scrollrunning ? g.newscrollx : g.getScrollLeft();
            g.doScrollPos(n, e, t)
        }
        ,
        this.doScrollPos = function(e, t, n) {
            var i = g.getScrollTop()
              , r = g.getScrollLeft()
              , o = (((g.newscrolly - i) * (t - i) < 0 || (g.newscrollx - r) * (e - r) < 0) && g.cancelScroll(),
            !1);
            if (g.bouncescroll && g.rail.visibility || (t < 0 ? o = !(t = 0) : t > g.page.maxh && (t = g.page.maxh,
            o = !0)),
            g.bouncescroll && g.railh.visibility || (e < 0 ? o = !(e = 0) : e > g.page.maxw && (e = g.page.maxw,
            o = !0)),
            g.scrollrunning && g.newscrolly === t && g.newscrollx === e)
                return !0;
            g.newscrolly = t,
            g.newscrollx = e,
            g.dst = {},
            g.dst.x = e - r,
            g.dst.y = t - i,
            g.dst.px = r,
            g.dst.py = i;
            var s = 0 | Math.sqrt(g.dst.x * g.dst.x + g.dst.y * g.dst.y)
              , s = g.getTransitionSpeed(s)
              , o = (g.bzscroll = {},
            o ? 1 : .58)
              , a = (g.bzscroll.x = new d(r,g.newscrollx,s,0,0,o,1),
            g.bzscroll.y = new d(i,g.newscrolly,s,0,0,o,1),
            q(),
            function() {
                var e;
                g.scrollrunning && (e = g.bzscroll.y.getPos(),
                g.setScrollLeft(g.bzscroll.x.getNow()),
                g.setScrollTop(g.bzscroll.y.getNow()),
                e <= 1 ? g.timer = I(a) : (g.scrollrunning = !1,
                g.timer = 0,
                g.triggerScrollEnd()))
            }
            );
            g.scrollrunning || (g.triggerScrollStart(r, i, e, t, s),
            g.scrollrunning = !0,
            g.timer = I(a))
        }
        ,
        this.cancelScroll = function() {
            return g.timer && Y(g.timer),
            g.timer = 0,
            g.bzscroll = !1,
            g.scrollrunning = !1,
            g
        }
        ) : (this.doScrollLeft = function(e, t) {
            var n = g.getScrollTop();
            g.doScrollPos(e, n, t)
        }
        ,
        this.doScrollTop = function(e, t) {
            var n = g.getScrollLeft();
            g.doScrollPos(n, e, t)
        }
        ,
        this.doScrollPos = function(e, t, n) {
            var i = e > g.page.maxw ? g.page.maxw : e
              , r = (i < 0 && (i = 0),
            t > g.page.maxh ? g.page.maxh : t);
            r < 0 && (r = 0),
            g.synched("scroll", function() {
                g.setScrollTop(r),
                g.setScrollLeft(i)
            })
        }
        ,
        this.cancelScroll = function() {}
        ),
        this.doScrollBy = function(e, t) {
            s(0, e)
        }
        ,
        this.doScrollLeftBy = function(e, t) {
            s(e, 0)
        }
        ,
        this.doScrollTo = function(e, t) {
            t = t ? Math.round(e * g.scrollratio.y) : e;
            t < 0 ? t = 0 : t > g.page.maxh && (t = g.page.maxh),
            g.cursorfreezed = !1,
            g.doScrollTop(e)
        }
        ,
        this.checkContentSize = function() {
            var e = g.getContentSize();
            e.h == g.page.h && e.w == g.page.w || g.resize(!1, e)
        }
        ,
        g.onscroll = function(e) {
            g.rail.drag || g.cursorfreezed || g.synched("scroll", function() {
                g.scroll.y = Math.round(g.getScrollTop() / g.scrollratio.y),
                g.railh && (g.scroll.x = Math.round(g.getScrollLeft() / g.scrollratio.x)),
                g.noticeCursor()
            })
        }
        ,
        g.bind(g.docscroll, "scroll", g.onscroll),
        this.doZoomIn = function(e) {
            if (!g.zoomactive) {
                g.zoomactive = !0,
                g.zoomrestore = {
                    style: {}
                };
                var t, n = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"], i = g.win[0].style;
                for (t in n) {
                    var r = n[t];
                    g.zoomrestore.style[r] = void 0 !== i[r] ? i[r] : ""
                }
                g.zoomrestore.style.width = g.win.css("width"),
                g.zoomrestore.style.height = g.win.css("height"),
                g.zoomrestore.padding = {
                    w: g.win.outerWidth() - g.win.width(),
                    h: g.win.outerHeight() - g.win.height()
                },
                x.isios4 && (g.zoomrestore.scrollTop = z.scrollTop(),
                z.scrollTop(0)),
                g.win.css({
                    position: x.isios4 ? "absolute" : "fixed",
                    top: 0,
                    left: 0,
                    zIndex: L + 100,
                    margin: 0
                });
                var o = g.win.css("backgroundColor");
                return "" !== o && !/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(o) || g.win.css("backgroundColor", "#fff"),
                g.rail.css({
                    zIndex: L + 101
                }),
                g.zoom.css({
                    zIndex: L + 102
                }),
                g.zoom.css("backgroundPosition", "0 -18px"),
                g.resizeZoom(),
                g.onzoomin && g.onzoomin.call(g),
                g.cancelEvent(e)
            }
        }
        ,
        this.doZoomOut = function(e) {
            if (g.zoomactive)
                return g.zoomactive = !1,
                g.win.css("margin", ""),
                g.win.css(g.zoomrestore.style),
                x.isios4 && z.scrollTop(g.zoomrestore.scrollTop),
                g.rail.css({
                    "z-index": g.zindex
                }),
                g.zoom.css({
                    "z-index": g.zindex
                }),
                g.zoomrestore = !1,
                g.zoom.css("backgroundPosition", "0 0"),
                g.onResize(),
                g.onzoomout && g.onzoomout.call(g),
                g.cancelEvent(e)
        }
        ,
        this.doZoom = function(e) {
            return g.zoomactive ? g.doZoomOut(e) : g.doZoomIn(e)
        }
        ,
        this.resizeZoom = function() {
            var e;
            g.zoomactive && (e = g.getScrollTop(),
            g.win.css({
                width: z.width() - g.zoomrestore.padding.w + "px",
                height: z.height() - g.zoomrestore.padding.h + "px"
            }),
            g.onResize(),
            g.setScrollTop(Math.min(g.page.maxh, e)))
        }
        ,
        this.init(),
        N.nicescroll.push(this)
    }, V = function(e) {
        var u = this;
        this.nc = e,
        this.lastx = 0,
        this.lasty = 0,
        this.speedx = 0,
        this.speedy = 0,
        this.lasttime = 0,
        this.steptime = 0,
        this.snapx = !1,
        this.snapy = !1,
        this.demulx = 0,
        this.demuly = 0,
        this.lastscrollx = -1,
        this.lastscrolly = -1,
        this.chkx = 0,
        this.chky = 0,
        this.timer = 0,
        this.reset = function(e, t) {
            u.stop(),
            u.steptime = 0,
            u.lasttime = q(),
            u.speedx = 0,
            u.speedy = 0,
            u.lastx = e,
            u.lasty = t,
            u.lastscrollx = -1,
            u.lastscrolly = -1
        }
        ,
        this.update = function(e, t) {
            var n = q()
              , n = (u.steptime = n - u.lasttime,
            u.lasttime = n,
            t - u.lasty)
              , i = e - u.lastx
              , r = u.nc.getScrollTop() + n
              , o = u.nc.getScrollLeft() + i;
            u.snapx = o < 0 || o > u.nc.page.maxw,
            u.snapy = r < 0 || r > u.nc.page.maxh,
            u.speedx = i,
            u.speedy = n,
            u.lastx = e,
            u.lasty = t
        }
        ,
        this.stop = function() {
            u.nc.unsynched("domomentum2d"),
            u.timer && clearTimeout(u.timer),
            u.timer = 0,
            u.lastscrollx = -1,
            u.lastscrolly = -1
        }
        ,
        this.doSnapy = function(e, t) {
            var n = !1;
            t < 0 ? n = !(t = 0) : t > u.nc.page.maxh && (t = u.nc.page.maxh,
            n = !0),
            e < 0 ? n = !(e = 0) : e > u.nc.page.maxw && (e = u.nc.page.maxw,
            n = !0),
            n ? u.nc.doScrollPos(e, t, u.nc.opt.snapbackspeed) : u.nc.triggerScrollEnd()
        }
        ,
        this.doMomentum = function(e) {
            var t, n, i, r, o = q(), e = e ? o + e : u.lasttime, s = u.nc.getScrollLeft(), a = u.nc.getScrollTop(), l = u.nc.page.maxh, c = u.nc.page.maxw, e = (u.speedx = 0 < c ? Math.min(60, u.speedx) : 0,
            u.speedy = 0 < l ? Math.min(60, u.speedy) : 0,
            e && o - e <= 60), a = ((a < 0 || l < a || s < 0 || c < s) && (e = !1),
            !(!u.speedy || !e) && u.speedy), s = !(!u.speedx || !e) && u.speedx;
            a || s ? (50 < (t = Math.max(16, u.steptime)) && (e = t / 50,
            u.speedx *= e,
            u.speedy *= e,
            t = 50),
            u.demulxy = 0,
            u.lastscrollx = u.nc.getScrollLeft(),
            u.chkx = u.lastscrollx,
            u.lastscrolly = u.nc.getScrollTop(),
            u.chky = u.lastscrolly,
            n = u.lastscrollx,
            i = u.lastscrolly,
            (r = function() {
                var e = 600 < q() - o ? .04 : .02;
                u.speedx && (n = Math.floor(u.lastscrollx - u.speedx * (1 - u.demulxy)),
                (u.lastscrollx = n) < 0 || c < n) && (e = .1),
                u.speedy && (i = Math.floor(u.lastscrolly - u.speedy * (1 - u.demulxy)),
                (u.lastscrolly = i) < 0 || l < i) && (e = .1),
                u.demulxy = Math.min(1, u.demulxy + e),
                u.nc.synched("domomentum2d", function() {
                    u.speedx && (u.nc.getScrollLeft(),
                    u.chkx = n,
                    u.nc.setScrollLeft(n)),
                    u.speedy && (u.nc.getScrollTop(),
                    u.chky = i,
                    u.nc.setScrollTop(i)),
                    u.timer || (u.nc.hideCursor(),
                    u.doSnapy(n, i))
                }),
                u.demulxy < 1 ? u.timer = setTimeout(r, t) : (u.stop(),
                u.nc.hideCursor(),
                u.doSnapy(n, i))
            }
            )()) : u.doSnapy(u.nc.getScrollLeft(), u.nc.getScrollTop())
        }
    }, r = e.fn.scrollTop, a = (e.cssHooks.pageYOffset = {
        get: function(e, t, n) {
            var i = N.data(e, "__nicescroll") || !1;
            return i && i.ishwscroll ? i.getScrollTop() : r.call(e)
        },
        set: function(e, t) {
            var n = N.data(e, "__nicescroll") || !1;
            return n && n.ishwscroll ? n.setScrollTop(parseInt(t)) : r.call(e, t),
            this
        }
    },
    e.fn.scrollTop = function(t) {
        var e;
        return void 0 === t ? (e = !!this[0] && (N.data(this[0], "__nicescroll") || !1)) && e.ishwscroll ? e.getScrollTop() : r.call(this) : this.each(function() {
            var e = N.data(this, "__nicescroll") || !1;
            e && e.ishwscroll ? e.setScrollTop(parseInt(t)) : r.call(N(this), t)
        })
    }
    ,
    e.fn.scrollLeft), l = (N.cssHooks.pageXOffset = {
        get: function(e, t, n) {
            var i = N.data(e, "__nicescroll") || !1;
            return i && i.ishwscroll ? i.getScrollLeft() : a.call(e)
        },
        set: function(e, t) {
            var n = N.data(e, "__nicescroll") || !1;
            return n && n.ishwscroll ? n.setScrollLeft(parseInt(t)) : a.call(e, t),
            this
        }
    },
    e.fn.scrollLeft = function(t) {
        var e;
        return void 0 === t ? (e = !!this[0] && (N.data(this[0], "__nicescroll") || !1)) && e.ishwscroll ? e.getScrollLeft() : a.call(this) : this.each(function() {
            var e = N.data(this, "__nicescroll") || !1;
            e && e.ishwscroll ? e.setScrollLeft(parseInt(t)) : a.call(N(this), t)
        })
    }
    ,
    function(e) {
        var t = this;
        if (this.length = 0,
        this.name = "nicescrollarray",
        this.each = function(e) {
            return N.each(t, e),
            t
        }
        ,
        this.push = function(e) {
            t[t.length] = e,
            t.length++
        }
        ,
        this.eq = function(e) {
            return t[e]
        }
        ,
        e)
            for (var n = 0; n < e.length; n++) {
                var i = N.data(e[n], "__nicescroll") || !1;
                i && (this[this.length] = i,
                this.length++)
            }
        return this
    }
    ), i = l.prototype, c = ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], u = 0, h = c.length; u < h; u++)
        !function(e, t) {
            e[t] = function() {
                var e = arguments;
                return this.each(function() {
                    this[t].apply(this, e)
                })
            }
        }(i, c[u]);
    e.fn.getNiceScroll = function(e) {
        return void 0 === e ? new l(this) : this[e] && N.data(this[e], "__nicescroll") || !1
    }
    ,
    (e.expr.pseudos || e.expr[":"]).nicescroll = function(e) {
        return void 0 !== N.data(e, "__nicescroll")
    }
    ,
    N.fn.niceScroll = function(i, r) {
        void 0 !== r || "object" != typeof i || "jquery"in i || (r = i,
        i = !1);
        var o = new l;
        return this.each(function() {
            var e = N(this)
              , t = N.extend({}, r)
              , n = (i && (n = N(i),
            t.doc = 1 < n.length ? N(i, e) : n,
            t.win = e),
            "doc"in t && !("win"in t) && (t.win = e),
            e.data("__nicescroll") || !1);
            n || (t.doc = t.doc || e,
            n = new s(t,e),
            e.data("__nicescroll", n)),
            o.push(n)
        }),
        1 === o.length ? o[0] : o
    }
    ,
    j.NiceScroll = {
        getjQuery: function() {
            return e
        }
    },
    N.nicescroll || (N.nicescroll = new l,
    N.nicescroll.options = W)
}),
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
    "use strict";
    function p() {
        return at.apply(null, arguments)
    }
    function l(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function z(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function o(e) {
        return void 0 === e
    }
    function H(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function I(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function Y(e, t) {
        for (var n = [], i = 0; i < e.length; ++i)
            n.push(t(e[i], i));
        return n
    }
    function f(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function a(e, t) {
        for (var n in t)
            f(t, n) && (e[n] = t[n]);
        return f(t, "toString") && (e.toString = t.toString),
        f(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function c(e, t, n, i) {
        return Ae(e, t, n, i, !0).utc()
    }
    function m(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }),
        e._pf
    }
    function R(e) {
        if (null == e._isValid) {
            var t = m(e)
              , n = ct.call(t.parsedDateParts, function(e) {
                return null != e
            })
              , n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
            null != Object.isFrozen && Object.isFrozen(e))
                return n;
            e._isValid = n
        }
        return e._isValid
    }
    function q(e) {
        var t = c(NaN);
        return null != e ? a(m(t), e) : m(t).userInvalidated = !0,
        t
    }
    function W(e, t) {
        var n, i, r;
        if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        o(t._i) || (e._i = t._i),
        o(t._f) || (e._f = t._f),
        o(t._l) || (e._l = t._l),
        o(t._strict) || (e._strict = t._strict),
        o(t._tzm) || (e._tzm = t._tzm),
        o(t._isUTC) || (e._isUTC = t._isUTC),
        o(t._offset) || (e._offset = t._offset),
        o(t._pf) || (e._pf = m(t)),
        o(t._locale) || (e._locale = t._locale),
        0 < ut.length)
            for (n = 0; n < ut.length; n++)
                o(r = t[i = ut[n]]) || (e[i] = r);
        return e
    }
    function F(e) {
        W(this, e),
        this._d = new Date(null != e._d ? e._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === ht && (ht = !0,
        p.updateOffset(this),
        ht = !1)
    }
    function s(e) {
        return e instanceof F || null != e && null != e._isAMomentObject
    }
    function u(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function h(e) {
        var e = +e
          , t = 0;
        return t = 0 != e && isFinite(e) ? u(e) : t
    }
    function V(e, t, n) {
        for (var i = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), o = 0, s = 0; s < i; s++)
            (n && e[s] !== t[s] || !n && h(e[s]) !== h(t[s])) && o++;
        return o + r
    }
    function B(e) {
        !1 === p.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }
    function e(r, o) {
        var s = !0;
        return a(function() {
            if (null != p.deprecationHandler && p.deprecationHandler(null, r),
            s) {
                for (var e, t = [], n = 0; n < arguments.length; n++) {
                    if (e = "",
                    "object" == typeof arguments[n]) {
                        for (var i in e += "\n[" + n + "] ",
                        arguments[0])
                            e += i + ": " + arguments[0][i] + ", ";
                        e = e.slice(0, -2)
                    } else
                        e = arguments[n];
                    t.push(e)
                }
                B(r + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack),
                s = !1
            }
            return o.apply(this, arguments)
        }, o)
    }
    function U(e, t) {
        null != p.deprecationHandler && p.deprecationHandler(e, t),
        dt[e] || (B(t),
        dt[e] = !0)
    }
    function d(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function $(e, t) {
        var n, i = a({}, e);
        for (n in t)
            f(t, n) && (z(e[n]) && z(t[n]) ? (i[n] = {},
            a(i[n], e[n]),
            a(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
        for (n in e)
            f(e, n) && !f(t, n) && z(e[n]) && (i[n] = a({}, i[n]));
        return i
    }
    function G(e) {
        null != e && this.set(e)
    }
    function t(e, t) {
        var n = e.toLowerCase();
        pt[n] = pt[n + "s"] = pt[t] = e
    }
    function g(e) {
        return "string" == typeof e ? pt[e] || pt[e.toLowerCase()] : void 0
    }
    function X(e) {
        var t, n, i = {};
        for (n in e)
            f(e, n) && (t = g(n)) && (i[t] = e[n]);
        return i
    }
    function n(e, t) {
        ft[e] = t
    }
    function y(e, t, n) {
        var i = "" + Math.abs(e);
        return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - i.length)).toString().substr(1) + i
    }
    function i(e, t, n, i) {
        var r = "string" == typeof i ? function() {
            return this[i]()
        }
        : i;
        e && (vt[e] = r),
        t && (vt[t[0]] = function() {
            return y(r.apply(this, arguments), t[1], t[2])
        }
        ),
        n && (vt[n] = function() {
            return this.localeData().ordinal(r.apply(this, arguments), e)
        }
        )
    }
    function Z(e, t) {
        return e.isValid() ? (t = Q(t, e.localeData()),
        yt[t] = yt[t] || function(i) {
            for (var e, r = i.match(mt), t = 0, o = r.length; t < o; t++)
                vt[r[t]] ? r[t] = vt[r[t]] : r[t] = (e = r[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
            return function(e) {
                for (var t = "", n = 0; n < o; n++)
                    t += d(r[n]) ? r[n].call(e, i) : r[n];
                return t
            }
        }(t),
        yt[t](e)) : e.localeData().invalidDate()
    }
    function Q(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var i = 5;
        for (gt.lastIndex = 0; 0 <= i && gt.test(e); )
            e = e.replace(gt, n),
            gt.lastIndex = 0,
            --i;
        return e
    }
    function r(e, n, i) {
        Lt[e] = d(n) ? n : function(e, t) {
            return e && i ? i : n
        }
    }
    function K(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function v(e, n) {
        var t, i = n;
        for ("string" == typeof e && (e = [e]),
        H(n) && (i = function(e, t) {
            t[n] = h(e)
        }
        ),
        t = 0; t < e.length; t++)
            Nt[e[t]] = i
    }
    function J(e, r) {
        v(e, function(e, t, n, i) {
            n._w = n._w || {},
            r(e, n._w, n, i)
        })
    }
    function ee(e) {
        return te(e) ? 366 : 365
    }
    function te(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    function ne(t, n) {
        return function(e) {
            return null != e ? (re(this, t, e),
            p.updateOffset(this, n),
            this) : ie(this, t)
        }
    }
    function ie(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }
    function re(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && te(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), oe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
    }
    function oe(e, t) {
        return isNaN(e) || isNaN(t) ? NaN : (e += (t - (t = (t % 12 + 12) % 12)) / 12,
        1 == t ? te(e) ? 29 : 28 : 31 - t % 7 % 2)
    }
    function se(e, t) {
        var n;
        if (e.isValid()) {
            if ("string" == typeof t)
                if (/^\d+$/.test(t))
                    t = h(t);
                else if (!H(t = e.localeData().monthsParse(t)))
                    return;
            n = Math.min(e.date(), oe(e.year(), t)),
            e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n)
        }
    }
    function ae(e) {
        return null != e ? (se(this, e),
        p.updateOffset(this, !0),
        this) : ie(this, "Month")
    }
    function le() {
        function e(e, t) {
            return t.length - e.length
        }
        for (var t, n = [], i = [], r = [], o = 0; o < 12; o++)
            t = c([2e3, o]),
            n.push(this.monthsShort(t, "")),
            i.push(this.months(t, "")),
            r.push(this.months(t, "")),
            r.push(this.monthsShort(t, ""));
        for (n.sort(e),
        i.sort(e),
        r.sort(e),
        o = 0; o < 12; o++)
            n[o] = K(n[o]),
            i[o] = K(i[o]);
        for (o = 0; o < 24; o++)
            r[o] = K(r[o]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")","i")
    }
    function ce(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
        t
    }
    function ue(e, t, n) {
        n = 7 + t - n;
        return -(7 + ce(e, 0, n).getUTCDay() - t) % 7 + n - 1
    }
    function he(e, t, n, i, r) {
        var o, t = 1 + 7 * (t - 1) + (7 + n - i) % 7 + ue(e, i, r), n = t <= 0 ? ee(o = e - 1) + t : t > ee(e) ? (o = e + 1,
        t - ee(e)) : (o = e,
        t);
        return {
            year: o,
            dayOfYear: n
        }
    }
    function de(e, t, n) {
        var i, r, o = ue(e.year(), t, n), o = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
        return o < 1 ? i = o + pe(r = e.year() - 1, t, n) : o > pe(e.year(), t, n) ? (i = o - pe(e.year(), t, n),
        r = e.year() + 1) : (r = e.year(),
        i = o),
        {
            week: i,
            year: r
        }
    }
    function pe(e, t, n) {
        var i = ue(e, t, n)
          , t = ue(e + 1, t, n);
        return (ee(e) - i + t) / 7
    }
    function fe() {
        function e(e, t) {
            return t.length - e.length
        }
        for (var t, n, i, r = [], o = [], s = [], a = [], l = 0; l < 7; l++)
            i = c([2e3, 1]).day(l),
            t = this.weekdaysMin(i, ""),
            n = this.weekdaysShort(i, ""),
            i = this.weekdays(i, ""),
            r.push(t),
            o.push(n),
            s.push(i),
            a.push(t),
            a.push(n),
            a.push(i);
        for (r.sort(e),
        o.sort(e),
        s.sort(e),
        a.sort(e),
        l = 0; l < 7; l++)
            o[l] = K(o[l]),
            s[l] = K(s[l]),
            a[l] = K(a[l]);
        this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")","i")
    }
    function me() {
        return this.hours() % 12 || 12
    }
    function ge(e, t) {
        i(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    function ye(e, t) {
        return t._meridiemParse
    }
    function ve(e) {
        return e && e.toLowerCase().replace("_", "-")
    }
    function xe(e) {
        var t;
        if (!L[e] && "undefined" != typeof module && module && module.exports)
            try {
                t = Xt._abbr,
                require("./locale/" + e),
                be(t)
            } catch (e) {}
        return L[e]
    }
    function be(e, t) {
        return (Xt = e && (e = o(t) ? x(e) : we(e, t)) ? e : Xt)._abbr
    }
    function we(e, t) {
        if (null === t)
            return delete L[e],
            null;
        var n = Qt;
        if (t.abbr = e,
        null != L[e])
            U("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
            n = L[e]._config;
        else if (null != t.parentLocale) {
            if (null == L[t.parentLocale])
                return Kt[t.parentLocale] || (Kt[t.parentLocale] = []),
                Kt[t.parentLocale].push({
                    name: e,
                    config: t
                }),
                null;
            n = L[t.parentLocale]._config
        }
        return L[e] = new G($(n, t)),
        Kt[e] && Kt[e].forEach(function(e) {
            we(e.name, e.config)
        }),
        be(e),
        L[e]
    }
    function x(e) {
        var t;
        if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e))
            return Xt;
        if (!l(e)) {
            if (t = xe(e))
                return t;
            e = [e]
        }
        for (var n, i, r, o, s = e, a = 0; a < s.length; ) {
            for (n = (o = ve(s[a]).split("-")).length,
            i = (i = ve(s[a + 1])) ? i.split("-") : null; 0 < n; ) {
                if (r = xe(o.slice(0, n).join("-")))
                    return r;
                if (i && i.length >= n && V(o, i, !0) >= n - 1)
                    break;
                n--
            }
            a++
        }
        return null
    }
    function _e(e) {
        var t = e._a;
        return t && -2 === m(e).overflow && (t = t[M] < 0 || 11 < t[M] ? M : t[E] < 1 || t[E] > oe(t[T], t[M]) ? E : t[C] < 0 || 24 < t[C] || 24 === t[C] && (0 !== t[A] || 0 !== t[O] || 0 !== t[Pt]) ? C : t[A] < 0 || 59 < t[A] ? A : t[O] < 0 || 59 < t[O] ? O : t[Pt] < 0 || 999 < t[Pt] ? Pt : -1,
        m(e)._overflowDayOfYear && (t < T || E < t) && (t = E),
        m(e)._overflowWeeks && -1 === t && (t = jt),
        m(e)._overflowWeekday && -1 === t && (t = zt),
        m(e).overflow = t),
        e
    }
    function ke(e, t, n) {
        return null != e ? e : null != t ? t : n
    }
    function Se(e) {
        var t, n, i, r, o, s, a, l, c, u, h, d = [];
        if (!e._d) {
            for (u = e,
            h = new Date(p.now()),
            n = u._useUTC ? [h.getUTCFullYear(), h.getUTCMonth(), h.getUTCDate()] : [h.getFullYear(), h.getMonth(), h.getDate()],
            e._w && null == e._a[E] && null == e._a[M] && (null != (h = (u = e)._w).GG || null != h.W || null != h.E ? (o = 1,
            s = 4,
            l = ke(h.GG, u._a[T], de(b(), 1, 4).year),
            c = ke(h.W, 1),
            ((i = ke(h.E, 1)) < 1 || 7 < i) && (r = !0)) : (o = u._locale._week.dow,
            s = u._locale._week.doy,
            a = de(b(), o, s),
            l = ke(h.gg, u._a[T], a.year),
            c = ke(h.w, a.week),
            null != h.d ? ((i = h.d) < 0 || 6 < i) && (r = !0) : null != h.e ? (i = h.e + o,
            (h.e < 0 || 6 < h.e) && (r = !0)) : i = o),
            c < 1 || c > pe(l, o, s) ? m(u)._overflowWeeks = !0 : null != r ? m(u)._overflowWeekday = !0 : (a = he(l, c, i, o, s),
            u._a[T] = a.year,
            u._dayOfYear = a.dayOfYear)),
            null != e._dayOfYear && (h = ke(e._a[T], n[T]),
            (e._dayOfYear > ee(h) || 0 === e._dayOfYear) && (m(e)._overflowDayOfYear = !0),
            r = ce(h, 0, e._dayOfYear),
            e._a[M] = r.getUTCMonth(),
            e._a[E] = r.getUTCDate()),
            t = 0; t < 3 && null == e._a[t]; ++t)
                e._a[t] = d[t] = n[t];
            for (; t < 7; t++)
                e._a[t] = d[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[C] && 0 === e._a[A] && 0 === e._a[O] && 0 === e._a[Pt] && (e._nextDay = !0,
            e._a[C] = 0),
            e._d = (e._useUTC ? ce : function(e, t, n, i, r, o, s) {
                t = new Date(e,t,n,i,r,o,s);
                return e < 100 && 0 <= e && isFinite(t.getFullYear()) && t.setFullYear(e),
                t
            }
            ).apply(null, d),
            l = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[C] = 24),
            e._w && void 0 !== e._w.d && e._w.d !== l && (m(e).weekdayMismatch = !0)
        }
    }
    function Te(e) {
        var t, n, i, r, o, s, a = e._i, l = Jt.exec(a) || en.exec(a);
        if (l) {
            for (m(e).iso = !0,
            t = 0,
            n = nn.length; t < n; t++)
                if (nn[t][1].exec(l[1])) {
                    r = nn[t][0],
                    i = !1 !== nn[t][2];
                    break
                }
            if (null == r)
                return e._isValid = !1;
            if (l[3]) {
                for (t = 0,
                n = rn.length; t < n; t++)
                    if (rn[t][1].exec(l[3])) {
                        o = (l[2] || " ") + rn[t][0];
                        break
                    }
                if (null == o)
                    return e._isValid = !1
            }
            if (!i && null != o)
                return e._isValid = !1;
            if (l[4]) {
                if (!tn.exec(l[4]))
                    return e._isValid = !1;
                s = "Z"
            }
            e._f = r + (o || "") + (s || ""),
            Ee(e)
        } else
            e._isValid = !1
    }
    function Me(e) {
        var t, n, i, r, o, s, a = sn.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());
        a ? (t = a[4],
        n = a[3],
        i = a[2],
        r = a[5],
        o = a[6],
        s = a[7],
        t = [(t = parseInt(t, 10)) <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t, Rt.indexOf(n), parseInt(i, 10), parseInt(r, 10), parseInt(o, 10)],
        s && t.push(parseInt(s, 10)),
        n = t,
        i = a[1],
        r = n,
        o = e,
        i && Vt.indexOf(i) !== new Date(r[0],r[1],r[2]).getDay() ? (m(o).weekdayMismatch = !0,
        o._isValid = !1) : (e._a = n,
        e._tzm = (s = a[8],
        t = a[9],
        i = a[10],
        s ? an[s] : t ? 0 : ((s = parseInt(i, 10)) - (t = s % 100)) / 100 * 60 + t),
        e._d = ce.apply(null, e._a),
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        m(e).rfc2822 = !0)) : e._isValid = !1
    }
    function Ee(e) {
        if (e._f !== p.ISO_8601)
            if (e._f !== p.RFC_2822) {
                e._a = [],
                m(e).empty = !0;
                for (var t, n = "" + e._i, i = n.length, r = 0, o = Q(e._f, e._locale).match(mt) || [], s = 0; s < o.length; s++)
                    t = o[s],
                    (d = (n.match((d = e,
                    f(Lt, h = t) ? Lt[h](d._strict, d._locale) : new RegExp(K(h.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, r) {
                        return t || n || i || r
                    }))))) || [])[0]) && (0 < (h = n.substr(0, n.indexOf(d))).length && m(e).unusedInput.push(h),
                    n = n.slice(n.indexOf(d) + d.length),
                    r += d.length),
                    vt[t] ? (d ? m(e).empty = !1 : m(e).unusedTokens.push(t),
                    h = t,
                    u = e,
                    null != (c = d) && f(Nt, h) && Nt[h](c, u._a, u, h)) : e._strict && !d && m(e).unusedTokens.push(t);
                m(e).charsLeftOver = i - r,
                0 < n.length && m(e).unusedInput.push(n),
                e._a[C] <= 12 && !0 === m(e).bigHour && 0 < e._a[C] && (m(e).bigHour = void 0),
                m(e).parsedDateParts = e._a.slice(0),
                m(e).meridiem = e._meridiem,
                e._a[C] = (i = e._locale,
                a = e._a[C],
                null == (l = e._meridiem) ? a : null != i.meridiemHour ? i.meridiemHour(a, l) : (null != i.isPM && ((i = i.isPM(l)) && a < 12 && (a += 12),
                i || 12 !== a || (a = 0)),
                a)),
                Se(e),
                _e(e)
            } else
                Me(e);
        else
            Te(e);
        var a, l, c, u, h, d
    }
    function Ce(e) {
        var t, n, i = e._i, r = e._f;
        return e._locale = e._locale || x(e._l),
        null === i || void 0 === r && "" === i ? q({
            nullInput: !0
        }) : ("string" == typeof i && (e._i = i = e._locale.preparse(i)),
        s(i) ? new F(_e(i)) : (I(i) ? e._d = i : l(r) ? function(e) {
            var t, n, i, r, o;
            if (0 === e._f.length)
                return m(e).invalidFormat = !0,
                e._d = new Date(NaN);
            for (r = 0; r < e._f.length; r++)
                o = 0,
                t = W({}, e),
                null != e._useUTC && (t._useUTC = e._useUTC),
                t._f = e._f[r],
                Ee(t),
                R(t) && (o = (o += m(t).charsLeftOver) + 10 * m(t).unusedTokens.length,
                m(t).score = o,
                null == i || o < i) && (i = o,
                n = t);
            a(e, n || t)
        }(e) : r ? Ee(e) : o(r = (i = e)._i) ? i._d = new Date(p.now()) : I(r) ? i._d = new Date(r.valueOf()) : "string" == typeof r ? (t = i,
        null === (n = on.exec(t._i)) ? (Te(t),
        !1 === t._isValid && (delete t._isValid,
        Me(t),
        !1 === t._isValid) && (delete t._isValid,
        p.createFromInputFallback(t))) : t._d = new Date(+n[1])) : l(r) ? (i._a = Y(r.slice(0), function(e) {
            return parseInt(e, 10)
        }),
        Se(i)) : z(r) ? (t = i)._d || (n = X(t._i),
        t._a = Y([n.year, n.month, n.day || n.date, n.hour, n.minute, n.second, n.millisecond], function(e) {
            return e && parseInt(e, 10)
        }),
        Se(t)) : H(r) ? i._d = new Date(r) : p.createFromInputFallback(i),
        R(e) || (e._d = null),
        e))
    }
    function Ae(e, t, n, i, r) {
        var o = {};
        return !0 !== n && !1 !== n || (i = n,
        n = void 0),
        (z(e) && function(e) {
            if (Object.getOwnPropertyNames)
                return 0 === Object.getOwnPropertyNames(e).length;
            for (var t in e)
                if (e.hasOwnProperty(t))
                    return;
            return 1
        }(e) || l(e) && 0 === e.length) && (e = void 0),
        o._isAMomentObject = !0,
        o._useUTC = o._isUTC = r,
        o._l = n,
        o._i = e,
        o._f = t,
        o._strict = i,
        (r = new F(_e(Ce(o))))._nextDay && (r.add(1, "d"),
        r._nextDay = void 0),
        r
    }
    function b(e, t, n, i) {
        return Ae(e, t, n, i, !1)
    }
    function Oe(e, t) {
        var n, i;
        if (!(t = 1 === t.length && l(t[0]) ? t[0] : t).length)
            return b();
        for (n = t[0],
        i = 1; i < t.length; ++i)
            t[i].isValid() && !t[i][e](n) || (n = t[i]);
        return n
    }
    function De(e) {
        var e = X(e)
          , t = e.year || 0
          , n = e.quarter || 0
          , i = e.month || 0
          , r = e.week || 0
          , o = e.day || 0
          , s = e.hour || 0
          , a = e.minute || 0
          , l = e.second || 0
          , c = e.millisecond || 0;
        this._isValid = function(e) {
            for (var t in e)
                if (-1 === D.call(ln, t) || null != e[t] && isNaN(e[t]))
                    return !1;
            for (var n = !1, i = 0; i < ln.length; ++i)
                if (e[ln[i]]) {
                    if (n)
                        return !1;
                    parseFloat(e[ln[i]]) !== h(e[ln[i]]) && (n = !0)
                }
            return !0
        }(e),
        this._milliseconds = +c + 1e3 * l + 6e4 * a + 1e3 * s * 60 * 60,
        this._days = +o + 7 * r,
        this._months = +i + 3 * n + 12 * t,
        this._data = {},
        this._locale = x(),
        this._bubble()
    }
    function Le(e) {
        return e instanceof De
    }
    function Ne(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }
    function Pe(e, n) {
        i(e, 0, 0, function() {
            var e = this.utcOffset()
              , t = "+";
            return e < 0 && (e = -e,
            t = "-"),
            t + y(~~(e / 60), 2) + n + y(~~e % 60, 2)
        })
    }
    function je(e, t) {
        var t = (t || "").match(e);
        return null === t ? null : 0 === (t = 60 * (e = ((t[t.length - 1] || []) + "").match(cn) || ["-", 0, 0])[1] + h(e[2])) ? 0 : "+" === e[0] ? t : -t
    }
    function ze(e, t) {
        var n;
        return t._isUTC ? (t = t.clone(),
        n = (s(e) || I(e) ? e : b(e)).valueOf() - t.valueOf(),
        t._d.setTime(t._d.valueOf() + n),
        p.updateOffset(t, !1),
        t) : b(e).local()
    }
    function He(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }
    function Ie() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }
    function w(e, t) {
        var n, i, r = e;
        return Le(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : H(e) ? (r = {},
        t ? r[t] = e : r.milliseconds = e) : (t = un.exec(e)) ? (n = "-" === t[1] ? -1 : 1,
        r = {
            y: 0,
            d: h(t[E]) * n,
            h: h(t[C]) * n,
            m: h(t[A]) * n,
            s: h(t[O]) * n,
            ms: h(Ne(1e3 * t[Pt])) * n
        }) : (t = hn.exec(e)) ? (n = "-" === t[1] ? -1 : (t[1],
        1),
        r = {
            y: Ye(t[2], n),
            M: Ye(t[3], n),
            w: Ye(t[4], n),
            d: Ye(t[5], n),
            h: Ye(t[6], n),
            m: Ye(t[7], n),
            s: Ye(t[8], n)
        }) : null == r ? r = {} : "object" == typeof r && ("from"in r || "to"in r) && (t = b(r.from),
        n = b(r.to),
        t = t.isValid() && n.isValid() ? (n = ze(n, t),
        t.isBefore(n) ? i = Re(t, n) : ((i = Re(n, t)).milliseconds = -i.milliseconds,
        i.months = -i.months),
        i) : {
            milliseconds: 0,
            months: 0
        },
        (r = {}).ms = t.milliseconds,
        r.M = t.months),
        i = new De(r),
        Le(e) && f(e, "_locale") && (i._locale = e._locale),
        i
    }
    function Ye(e, t) {
        e = e && parseFloat(e.replace(",", "."));
        return (isNaN(e) ? 0 : e) * t
    }
    function Re(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = +t - +e.clone().add(n.months, "M"),
        n
    }
    function qe(i, r) {
        return function(e, t) {
            var n;
            return null === t || isNaN(+t) || (U(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            n = e,
            e = t,
            t = n),
            We(this, w(e = "string" == typeof e ? +e : e, t), i),
            this
        }
    }
    function We(e, t, n, i) {
        var r = t._milliseconds
          , o = Ne(t._days)
          , t = Ne(t._months);
        e.isValid() && (i = null == i || i,
        t && se(e, ie(e, "Month") + t * n),
        o && re(e, "Date", ie(e, "Date") + o * n),
        r && e._d.setTime(e._d.valueOf() + r * n),
        i) && p.updateOffset(e, o || t)
    }
    function Fe(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month())
          , i = e.clone().add(n, "months");
        return -(n + (t - i < 0 ? (t - i) / (i - e.clone().add(n - 1, "months")) : (t - i) / (e.clone().add(1 + n, "months") - i))) || 0
    }
    function Ve(e) {
        return void 0 === e ? this._locale._abbr : (null != (e = x(e)) && (this._locale = e),
        this)
    }
    function Be() {
        return this._locale
    }
    function Ue(e, t) {
        i(0, [e, e.length], 0, t)
    }
    function $e(e, t, n, i, r) {
        var o;
        return null == e ? de(this, i, r).year : (o = pe(e, i, r),
        function(e, t, n, i, r) {
            e = he(e, t, n, i, r),
            t = ce(e.year, 0, e.dayOfYear);
            return this.year(t.getUTCFullYear()),
            this.month(t.getUTCMonth()),
            this.date(t.getUTCDate()),
            this
        }
        .call(this, e, t = o < t ? o : t, n, i, r))
    }
    function Ge(e, t) {
        t[Pt] = h(1e3 * ("0." + e))
    }
    function Xe(e) {
        return e
    }
    function Ze(e, t, n, i) {
        var r = x()
          , i = c().set(i, t);
        return r[n](i, e)
    }
    function Qe(e, t, n) {
        if (H(e) && (t = e,
        e = void 0),
        e = e || "",
        null != t)
            return Ze(e, t, n, "month");
        for (var i = [], r = 0; r < 12; r++)
            i[r] = Ze(e, r, n, "month");
        return i
    }
    function Ke(e, t, n, i) {
        t = ("boolean" == typeof e || (n = t = e,
        e = !1),
        H(t) && (n = t,
        t = void 0),
        t || "");
        var r = x()
          , o = e ? r._week.dow : 0;
        if (null != n)
            return Ze(t, (n + o) % 7, i, "day");
        for (var s = [], a = 0; a < 7; a++)
            s[a] = Ze(t, (a + o) % 7, i, "day");
        return s
    }
    function Je(e, t, n, i) {
        t = w(t, n);
        return e._milliseconds += i * t._milliseconds,
        e._days += i * t._days,
        e._months += i * t._months,
        e._bubble()
    }
    function et(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function tt(e) {
        return 4800 * e / 146097
    }
    function nt(e) {
        return 146097 * e / 4800
    }
    function it(e) {
        return function() {
            return this.as(e)
        }
    }
    function rt(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    function ot(e) {
        return (0 < e) - (e < 0) || +e
    }
    function st() {
        var e, t, n, i, r, o, s, a, l, c;
        return this.isValid() ? (o = mn(this._milliseconds) / 1e3,
        n = mn(this._days),
        t = mn(this._months),
        i = u((r = u(o / 60)) / 60),
        o %= 60,
        r %= 60,
        e = u(t / 12),
        t = t %= 12,
        n = n,
        i = i,
        r = r,
        o = o ? o.toFixed(3).replace(/\.?0+$/, "") : "",
        (s = this.asSeconds()) ? (a = ot(this._months) !== ot(s) ? "-" : "",
        l = ot(this._days) !== ot(s) ? "-" : "",
        c = ot(this._milliseconds) !== ot(s) ? "-" : "",
        (s < 0 ? "-" : "") + "P" + (e ? a + e + "Y" : "") + (t ? a + t + "M" : "") + (n ? l + n + "D" : "") + (i || r || o ? "T" : "") + (i ? c + i + "H" : "") + (r ? c + r + "M" : "") + (o ? c + o + "S" : "")) : "P0D") : this.localeData().invalidDate()
    }
    var at, lt, ct = Array.prototype.some || function(e) {
        for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
            if (i in t && e.call(this, t[i], i, t))
                return !0;
        return !1
    }
    , ut = p.momentProperties = [], ht = !1, dt = {}, pt = (p.suppressDeprecationWarnings = !1,
    p.deprecationHandler = null,
    lt = Object.keys || function(e) {
        var t, n = [];
        for (t in e)
            f(e, t) && n.push(t);
        return n
    }
    ,
    {}), ft = {}, mt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, gt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, yt = {}, vt = {}, _ = /\d/, k = /\d\d/, xt = /\d{3}/, bt = /\d{4}/, wt = /[+-]?\d{6}/, S = /\d\d?/, _t = /\d\d\d\d?/, kt = /\d\d\d\d\d\d?/, St = /\d{1,3}/, Tt = /\d{1,4}/, Mt = /[+-]?\d{1,6}/, Et = /\d+/, Ct = /[+-]?\d+/, At = /Z|[+-]\d\d:?\d\d/gi, Ot = /Z|[+-]\d\d(?::?\d\d)?/gi, Dt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Lt = {}, Nt = {}, T = 0, M = 1, E = 2, C = 3, A = 4, O = 5, Pt = 6, jt = 7, zt = 8;
    i("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }),
    i(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }),
    i(0, ["YYYY", 4], 0, "year"),
    i(0, ["YYYYY", 5], 0, "year"),
    i(0, ["YYYYYY", 6, !0], 0, "year"),
    t("year", "y"),
    n("year", 1),
    r("Y", Ct),
    r("YY", S, k),
    r("YYYY", Tt, bt),
    r("YYYYY", Mt, wt),
    r("YYYYYY", Mt, wt),
    v(["YYYYY", "YYYYYY"], T),
    v("YYYY", function(e, t) {
        t[T] = 2 === e.length ? p.parseTwoDigitYear(e) : h(e)
    }),
    v("YY", function(e, t) {
        t[T] = p.parseTwoDigitYear(e)
    }),
    v("Y", function(e, t) {
        t[T] = parseInt(e, 10)
    }),
    p.parseTwoDigitYear = function(e) {
        return h(e) + (68 < h(e) ? 1900 : 2e3)
    }
    ;
    var Ht = ne("FullYear", !0)
      , D = Array.prototype.indexOf || function(e) {
        for (var t = 0; t < this.length; ++t)
            if (this[t] === e)
                return t;
        return -1
    }
      , It = (i("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }),
    i("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }),
    i("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }),
    t("month", "M"),
    n("month", 8),
    r("M", S),
    r("MM", S, k),
    r("MMM", function(e, t) {
        return t.monthsShortRegex(e)
    }),
    r("MMMM", function(e, t) {
        return t.monthsRegex(e)
    }),
    v(["M", "MM"], function(e, t) {
        t[M] = h(e) - 1
    }),
    v(["MMM", "MMMM"], function(e, t, n, i) {
        i = n._locale.monthsParse(e, i, n._strict);
        null != i ? t[M] = i : m(n).invalidMonth = e
    }),
    /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/)
      , Yt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , Rt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
      , qt = Dt
      , Wt = Dt
      , Ft = (i("w", ["ww", 2], "wo", "week"),
    i("W", ["WW", 2], "Wo", "isoWeek"),
    t("week", "w"),
    t("isoWeek", "W"),
    n("week", 5),
    n("isoWeek", 5),
    r("w", S),
    r("ww", S, k),
    r("W", S),
    r("WW", S, k),
    J(["w", "ww", "W", "WW"], function(e, t, n, i) {
        t[i.substr(0, 1)] = h(e)
    }),
    i("d", 0, "do", "day"),
    i("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }),
    i("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }),
    i("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }),
    i("e", 0, 0, "weekday"),
    i("E", 0, 0, "isoWeekday"),
    t("day", "d"),
    t("weekday", "e"),
    t("isoWeekday", "E"),
    n("day", 11),
    n("weekday", 11),
    n("isoWeekday", 11),
    r("d", S),
    r("e", S),
    r("E", S),
    r("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
    }),
    r("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
    }),
    r("dddd", function(e, t) {
        return t.weekdaysRegex(e)
    }),
    J(["dd", "ddd", "dddd"], function(e, t, n, i) {
        i = n._locale.weekdaysParse(e, i, n._strict);
        null != i ? t.d = i : m(n).invalidWeekday = e
    }),
    J(["d", "e", "E"], function(e, t, n, i) {
        t[i] = h(e)
    }),
    "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"))
      , Vt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
      , Bt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
      , Ut = Dt
      , $t = Dt
      , Gt = Dt;
    i("H", ["HH", 2], 0, "hour"),
    i("h", ["hh", 2], 0, me),
    i("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    }),
    i("hmm", 0, 0, function() {
        return "" + me.apply(this) + y(this.minutes(), 2)
    }),
    i("hmmss", 0, 0, function() {
        return "" + me.apply(this) + y(this.minutes(), 2) + y(this.seconds(), 2)
    }),
    i("Hmm", 0, 0, function() {
        return "" + this.hours() + y(this.minutes(), 2)
    }),
    i("Hmmss", 0, 0, function() {
        return "" + this.hours() + y(this.minutes(), 2) + y(this.seconds(), 2)
    }),
    ge("a", !0),
    ge("A", !1),
    t("hour", "h"),
    n("hour", 13),
    r("a", ye),
    r("A", ye),
    r("H", S),
    r("h", S),
    r("k", S),
    r("HH", S, k),
    r("hh", S, k),
    r("kk", S, k),
    r("hmm", _t),
    r("hmmss", kt),
    r("Hmm", _t),
    r("Hmmss", kt),
    v(["H", "HH"], C),
    v(["k", "kk"], function(e, t, n) {
        e = h(e);
        t[C] = 24 === e ? 0 : e
    }),
    v(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    }),
    v(["h", "hh"], function(e, t, n) {
        t[C] = h(e),
        m(n).bigHour = !0
    }),
    v("hmm", function(e, t, n) {
        var i = e.length - 2;
        t[C] = h(e.substr(0, i)),
        t[A] = h(e.substr(i)),
        m(n).bigHour = !0
    }),
    v("hmmss", function(e, t, n) {
        var i = e.length - 4
          , r = e.length - 2;
        t[C] = h(e.substr(0, i)),
        t[A] = h(e.substr(i, 2)),
        t[O] = h(e.substr(r)),
        m(n).bigHour = !0
    }),
    v("Hmm", function(e, t, n) {
        var i = e.length - 2;
        t[C] = h(e.substr(0, i)),
        t[A] = h(e.substr(i))
    }),
    v("Hmmss", function(e, t, n) {
        var i = e.length - 4
          , r = e.length - 2;
        t[C] = h(e.substr(0, i)),
        t[A] = h(e.substr(i, 2)),
        t[O] = h(e.substr(r))
    });
    var Xt, Zt, Dt = ne("Hours", !0), Qt = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Yt,
        monthsShort: Rt,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: Ft,
        weekdaysMin: Bt,
        weekdaysShort: Vt,
        meridiemParse: /[ap]\.?m?\.?/i
    }, L = {}, Kt = {}, Jt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, en = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tn = /Z|[+-]\d\d(?::?\d\d)?/, nn = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], rn = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], on = /^\/?Date\((\-?\d+)/i, sn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, an = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    }, _t = (p.createFromInputFallback = e("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }),
    p.ISO_8601 = function() {}
    ,
    p.RFC_2822 = function() {}
    ,
    e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = b.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : q()
    })), kt = e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = b.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this : e : q()
    }), ln = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"], cn = (Pe("Z", ":"),
    Pe("ZZ", ""),
    r("Z", Ot),
    r("ZZ", Ot),
    v(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0,
        n._tzm = je(Ot, e)
    }),
    /([\+\-]|\d\d)/gi), un = (p.updateOffset = function() {}
    ,
    /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/), hn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, Yt = (w.fn = De.prototype,
    w.invalid = function() {
        return w(NaN)
    }
    ,
    qe(1, "add")), Ft = qe(-1, "subtract"), Bt = (p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    p.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]",
    e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    })), Tt = (i(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }),
    i(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }),
    Ue("gggg", "weekYear"),
    Ue("ggggg", "weekYear"),
    Ue("GGGG", "isoWeekYear"),
    Ue("GGGGG", "isoWeekYear"),
    t("weekYear", "gg"),
    t("isoWeekYear", "GG"),
    n("weekYear", 1),
    n("isoWeekYear", 1),
    r("G", Ct),
    r("g", Ct),
    r("GG", S, k),
    r("gg", S, k),
    r("GGGG", Tt, bt),
    r("gggg", Tt, bt),
    r("GGGGG", Mt, wt),
    r("ggggg", Mt, wt),
    J(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
        t[i.substr(0, 2)] = h(e)
    }),
    J(["gg", "GG"], function(e, t, n, i) {
        t[i] = p.parseTwoDigitYear(e)
    }),
    i("Q", 0, "Qo", "quarter"),
    t("quarter", "Q"),
    n("quarter", 7),
    r("Q", _),
    v("Q", function(e, t) {
        t[M] = 3 * (h(e) - 1)
    }),
    i("D", ["DD", 2], "Do", "date"),
    t("date", "D"),
    n("date", 9),
    r("D", S),
    r("DD", S, k),
    r("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }),
    v(["D", "DD"], E),
    v("Do", function(e, t) {
        t[E] = h(e.match(S)[0])
    }),
    ne("Date", !0)), bt = (i("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    t("dayOfYear", "DDD"),
    n("dayOfYear", 4),
    r("DDD", St),
    r("DDDD", xt),
    v(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = h(e)
    }),
    i("m", ["mm", 2], 0, "minute"),
    t("minute", "m"),
    n("minute", 14),
    r("m", S),
    r("mm", S, k),
    v(["m", "mm"], A),
    ne("Minutes", !1)), Mt = (i("s", ["ss", 2], 0, "second"),
    t("second", "s"),
    n("second", 15),
    r("s", S),
    r("ss", S, k),
    v(["s", "ss"], O),
    ne("Seconds", !1));
    for (i("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }),
    i(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }),
    i(0, ["SSS", 3], 0, "millisecond"),
    i(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }),
    i(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }),
    i(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }),
    i(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }),
    i(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }),
    i(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }),
    t("millisecond", "ms"),
    n("millisecond", 16),
    r("S", St, _),
    r("SS", St, k),
    r("SSS", St, xt),
    Zt = "SSSS"; Zt.length <= 9; Zt += "S")
        r(Zt, Et);
    for (Zt = "S"; Zt.length <= 9; Zt += "S")
        v(Zt, Ge);
    var wt = ne("Milliseconds", !1)
      , _ = (i("z", 0, 0, "zoneAbbr"),
    i("zz", 0, 0, "zoneName"),
    F.prototype)
      , k = (_.add = Yt,
    _.calendar = function(e, t) {
        var e = e || b()
          , n = ze(e, this).startOf("day")
          , n = p.calendarFormat(this, n) || "sameElse"
          , t = t && (d(t[n]) ? t[n].call(this, e) : t[n]);
        return this.format(t || this.localeData().calendar(n, this, b(e)))
    }
    ,
    _.clone = function() {
        return new F(this)
    }
    ,
    _.diff = function(e, t, n) {
        var i, r, o;
        if (!this.isValid())
            return NaN;
        if (!(i = ze(e, this)).isValid())
            return NaN;
        switch (r = 6e4 * (i.utcOffset() - this.utcOffset()),
        t = g(t)) {
        case "year":
            o = Fe(this, i) / 12;
            break;
        case "month":
            o = Fe(this, i);
            break;
        case "quarter":
            o = Fe(this, i) / 3;
            break;
        case "second":
            o = (this - i) / 1e3;
            break;
        case "minute":
            o = (this - i) / 6e4;
            break;
        case "hour":
            o = (this - i) / 36e5;
            break;
        case "day":
            o = (this - i - r) / 864e5;
            break;
        case "week":
            o = (this - i - r) / 6048e5;
            break;
        default:
            o = this - i
        }
        return n ? o : u(o)
    }
    ,
    _.endOf = function(e) {
        return void 0 === (e = g(e)) || "millisecond" === e ? this : this.startOf(e = "date" === e ? "day" : e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
    }
    ,
    _.format = function(e) {
        e = e || (this.isUtc() ? p.defaultFormatUtc : p.defaultFormat);
        e = Z(this, e);
        return this.localeData().postformat(e)
    }
    ,
    _.from = function(e, t) {
        return this.isValid() && (s(e) && e.isValid() || b(e).isValid()) ? w({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    _.fromNow = function(e) {
        return this.from(b(), e)
    }
    ,
    _.to = function(e, t) {
        return this.isValid() && (s(e) && e.isValid() || b(e).isValid()) ? w({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    _.toNow = function(e) {
        return this.to(b(), e)
    }
    ,
    _.get = function(e) {
        return d(this[e = g(e)]) ? this[e]() : this
    }
    ,
    _.invalidAt = function() {
        return m(this).overflow
    }
    ,
    _.isAfter = function(e, t) {
        e = s(e) ? e : b(e);
        return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = g(o(t) ? "millisecond" : t)) ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(t).valueOf())
    }
    ,
    _.isBefore = function(e, t) {
        e = s(e) ? e : b(e);
        return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = g(o(t) ? "millisecond" : t)) ? this.valueOf() < e.valueOf() : this.clone().endOf(t).valueOf() < e.valueOf())
    }
    ,
    _.isBetween = function(e, t, n, i) {
        return ("(" === (i = i || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
    }
    ,
    _.isSame = function(e, t) {
        var e = s(e) ? e : b(e);
        return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = g(t || "millisecond")) ? this.valueOf() === e.valueOf() : (e = e.valueOf(),
        this.clone().startOf(t).valueOf() <= e && e <= this.clone().endOf(t).valueOf()))
    }
    ,
    _.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }
    ,
    _.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }
    ,
    _.isValid = function() {
        return R(this)
    }
    ,
    _.lang = Bt,
    _.locale = Ve,
    _.localeData = Be,
    _.max = kt,
    _.min = _t,
    _.parsingFlags = function() {
        return a({}, m(this))
    }
    ,
    _.set = function(n, e) {
        if ("object" == typeof n)
            for (var t = function() {
                var e, t = [];
                for (e in n)
                    t.push({
                        unit: e,
                        priority: ft[e]
                    });
                return t.sort(function(e, t) {
                    return e.priority - t.priority
                }),
                t
            }(n = X(n)), i = 0; i < t.length; i++)
                this[t[i].unit](n[t[i].unit]);
        else if (d(this[n = g(n)]))
            return this[n](e);
        return this
    }
    ,
    _.startOf = function(e) {
        switch (e = g(e)) {
        case "year":
            this.month(0);
        case "quarter":
        case "month":
            this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
            this.hours(0);
        case "hour":
            this.minutes(0);
        case "minute":
            this.seconds(0);
        case "second":
            this.milliseconds(0)
        }
        return "week" === e && this.weekday(0),
        "isoWeek" === e && this.isoWeekday(1),
        "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
        this
    }
    ,
    _.subtract = Ft,
    _.toArray = function() {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
    }
    ,
    _.toObject = function() {
        return {
            years: this.year(),
            months: this.month(),
            date: this.date(),
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        }
    }
    ,
    _.toDate = function() {
        return new Date(this.valueOf())
    }
    ,
    _.toISOString = function(e) {
        var t;
        return this.isValid() ? (t = (e = !0 !== e) ? this.clone().utc() : this).year() < 0 || 9999 < t.year() ? Z(t, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : d(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", Z(t, "Z")) : Z(t, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") : null
    }
    ,
    _.inspect = function() {
        var e, t, n;
        return this.isValid() ? (t = "moment",
        e = "",
        this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
        e = "Z"),
        t = "[" + t + '("]',
        n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        this.format(t + n + "-MM-DD[T]HH:mm:ss.SSS" + (e + '[")]'))) : "moment.invalid(/* " + this._i + " */)"
    }
    ,
    _.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }
    ,
    _.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    ,
    _.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }
    ,
    _.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    ,
    _.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    ,
    _.year = Ht,
    _.isLeapYear = function() {
        return te(this.year())
    }
    ,
    _.weekYear = function(e) {
        return $e.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }
    ,
    _.isoWeekYear = function(e) {
        return $e.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    ,
    _.quarter = _.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }
    ,
    _.month = ae,
    _.daysInMonth = function() {
        return oe(this.year(), this.month())
    }
    ,
    _.week = _.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    _.isoWeek = _.isoWeeks = function(e) {
        var t = de(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    _.weeksInYear = function() {
        var e = this.localeData()._week;
        return pe(this.year(), e.dow, e.doy)
    }
    ,
    _.isoWeeksInYear = function() {
        return pe(this.year(), 1, 4)
    }
    ,
    _.date = Tt,
    _.day = _.days = function(e) {
        var t, n, i;
        return this.isValid() ? (t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(),
        null != e ? (n = e,
        i = this.localeData(),
        e = "string" != typeof n ? n : isNaN(n) ? "number" == typeof (n = i.weekdaysParse(n)) ? n : null : parseInt(n, 10),
        this.add(e - t, "d")) : t) : null != e ? this : NaN
    }
    ,
    _.weekday = function(e) {
        var t;
        return this.isValid() ? (t = (this.day() + 7 - this.localeData()._week.dow) % 7,
        null == e ? t : this.add(e - t, "d")) : null != e ? this : NaN
    }
    ,
    _.isoWeekday = function(e) {
        var t, n;
        return this.isValid() ? null != e ? (t = e,
        n = this.localeData(),
        n = "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t,
        this.day(this.day() % 7 ? n : n - 7)) : this.day() || 7 : null != e ? this : NaN
    }
    ,
    _.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }
    ,
    _.hour = _.hours = Dt,
    _.minute = _.minutes = bt,
    _.second = _.seconds = Mt,
    _.millisecond = _.milliseconds = wt,
    _.utcOffset = function(e, t, n) {
        var i, r = this._offset || 0;
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null == e)
            return this._isUTC ? r : He(this);
        if ("string" == typeof e) {
            if (null === (e = je(Ot, e)))
                return this
        } else
            Math.abs(e) < 16 && !n && (e *= 60);
        return !this._isUTC && t && (i = He(this)),
        this._offset = e,
        this._isUTC = !0,
        null != i && this.add(i, "m"),
        r !== e && (!t || this._changeInProgress ? We(this, w(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
        p.updateOffset(this, !0),
        this._changeInProgress = null)),
        this
    }
    ,
    _.utc = function(e) {
        return this.utcOffset(0, e)
    }
    ,
    _.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e),
        this._isUTC = !1,
        e) && this.subtract(He(this), "m"),
        this
    }
    ,
    _.parseZone = function() {
        var e;
        return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (e = je(At, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)),
        this
    }
    ,
    _.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? b(e).utcOffset() : 0,
        (this.utcOffset() - e) % 60 == 0)
    }
    ,
    _.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    ,
    _.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    }
    ,
    _.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    }
    ,
    _.isUtc = Ie,
    _.isUTC = Ie,
    _.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    }
    ,
    _.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    ,
    _.dates = e("dates accessor is deprecated. Use date instead.", Tt),
    _.months = e("months accessor is deprecated. Use month instead", ae),
    _.years = e("years accessor is deprecated. Use year instead", Ht),
    _.zone = e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        return null != e ? (this.utcOffset(e = "string" != typeof e ? -e : e, t),
        this) : -this.utcOffset()
    }),
    _.isDSTShifted = e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        var e, t;
        return o(this._isDSTShifted) && (W(e = {}, this),
        (e = Ce(e))._a ? (t = (e._isUTC ? c : b)(e._a),
        this._isDSTShifted = this.isValid() && 0 < V(e._a, t.toArray())) : this._isDSTShifted = !1),
        this._isDSTShifted
    }),
    G.prototype)
      , N = (k.calendar = function(e, t, n) {
        e = this._calendar[e] || this._calendar.sameElse;
        return d(e) ? e.call(t, n) : e
    }
    ,
    k.longDateFormat = function(e) {
        var t = this._longDateFormat[e]
          , n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
        }),
        this._longDateFormat[e])
    }
    ,
    k.invalidDate = function() {
        return this._invalidDate
    }
    ,
    k.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
    }
    ,
    k.preparse = Xe,
    k.postformat = Xe,
    k.relativeTime = function(e, t, n, i) {
        var r = this._relativeTime[n];
        return d(r) ? r(e, t, n, i) : r.replace(/%d/i, e)
    }
    ,
    k.pastFuture = function(e, t) {
        e = this._relativeTime[0 < e ? "future" : "past"];
        return d(e) ? e(t) : e.replace(/%s/i, t)
    }
    ,
    k.set = function(e) {
        var t, n;
        for (n in e)
            d(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }
    ,
    k.months = function(e, t) {
        return e ? (l(this._months) ? this._months : this._months[(this._months.isFormat || It).test(t) ? "format" : "standalone"])[e.month()] : l(this._months) ? this._months : this._months.standalone
    }
    ,
    k.monthsShort = function(e, t) {
        return e ? (l(this._monthsShort) ? this._monthsShort : this._monthsShort[It.test(t) ? "format" : "standalone"])[e.month()] : l(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }
    ,
    k.monthsParse = function(e, t, n) {
        var i, r;
        if (this._monthsParseExact)
            return function(e, t, n) {
                var i, r, o, e = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    i = 0; i < 12; ++i)
                        o = c([2e3, i]),
                        this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(),
                        this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (r = D.call(this._shortMonthsParse, e)) ? r : null : -1 !== (r = D.call(this._longMonthsParse, e)) ? r : null : "MMM" === t ? -1 !== (r = D.call(this._shortMonthsParse, e)) || -1 !== (r = D.call(this._longMonthsParse, e)) ? r : null : -1 !== (r = D.call(this._longMonthsParse, e)) || -1 !== (r = D.call(this._shortMonthsParse, e)) ? r : null
            }
            .call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        i = 0; i < 12; i++) {
            if (r = c([2e3, i]),
            n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$","i")),
            n || this._monthsParse[i] || (r = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""),
            this._monthsParse[i] = new RegExp(r.replace(".", ""),"i")),
            n && "MMMM" === t && this._longMonthsParse[i].test(e))
                return i;
            if (n && "MMM" === t && this._shortMonthsParse[i].test(e))
                return i;
            if (!n && this._monthsParse[i].test(e))
                return i
        }
    }
    ,
    k.monthsRegex = function(e) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || le.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex) : (f(this, "_monthsRegex") || (this._monthsRegex = Wt),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }
    ,
    k.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || le.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (f(this, "_monthsShortRegex") || (this._monthsShortRegex = qt),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    ,
    k.week = function(e) {
        return de(e, this._week.dow, this._week.doy).week
    }
    ,
    k.firstDayOfYear = function() {
        return this._week.doy
    }
    ,
    k.firstDayOfWeek = function() {
        return this._week.dow
    }
    ,
    k.weekdays = function(e, t) {
        return e ? (l(this._weekdays) ? this._weekdays : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"])[e.day()] : l(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }
    ,
    k.weekdaysMin = function(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }
    ,
    k.weekdaysShort = function(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }
    ,
    k.weekdaysParse = function(e, t, n) {
        var i, r;
        if (this._weekdaysParseExact)
            return function(e, t, n) {
                var i, r, o, e = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    i = 0; i < 7; ++i)
                        o = c([2e3, 1]).day(i),
                        this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(),
                        this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (r = D.call(this._weekdaysParse, e)) ? r : null : "ddd" === t ? -1 !== (r = D.call(this._shortWeekdaysParse, e)) ? r : null : -1 !== (r = D.call(this._minWeekdaysParse, e)) ? r : null : "dddd" === t ? -1 !== (r = D.call(this._weekdaysParse, e)) || -1 !== (r = D.call(this._shortWeekdaysParse, e)) || -1 !== (r = D.call(this._minWeekdaysParse, e)) ? r : null : "ddd" === t ? -1 !== (r = D.call(this._shortWeekdaysParse, e)) || -1 !== (r = D.call(this._weekdaysParse, e)) || -1 !== (r = D.call(this._minWeekdaysParse, e)) ? r : null : -1 !== (r = D.call(this._minWeekdaysParse, e)) || -1 !== (r = D.call(this._weekdaysParse, e)) || -1 !== (r = D.call(this._shortWeekdaysParse, e)) ? r : null
            }
            .call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        i = 0; i < 7; i++) {
            if (r = c([2e3, 1]).day(i),
            n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$","i"),
            this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$","i"),
            this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$","i")),
            this._weekdaysParse[i] || (r = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""),
            this._weekdaysParse[i] = new RegExp(r.replace(".", ""),"i")),
            n && "dddd" === t && this._fullWeekdaysParse[i].test(e))
                return i;
            if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e))
                return i;
            if (n && "dd" === t && this._minWeekdaysParse[i].test(e))
                return i;
            if (!n && this._weekdaysParse[i].test(e))
                return i
        }
    }
    ,
    k.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || fe.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (f(this, "_weekdaysRegex") || (this._weekdaysRegex = Ut),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    ,
    k.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || fe.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = $t),
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    ,
    k.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || fe.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Gt),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    ,
    k.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }
    ,
    k.meridiem = function(e, t, n) {
        return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    ,
    be("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === h(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        }
    }),
    p.lang = e("moment.lang is deprecated. Use moment.locale instead.", be),
    p.langData = e("moment.langData is deprecated. Use moment.localeData instead.", x),
    Math.abs)
      , St = it("ms")
      , xt = it("s")
      , Yt = it("m")
      , kt = it("h")
      , _t = it("d")
      , Ft = it("w")
      , Dt = it("M")
      , bt = it("y")
      , Mt = rt("milliseconds")
      , wt = rt("seconds")
      , Tt = rt("minutes")
      , Ht = rt("hours")
      , k = rt("days")
      , dn = rt("months")
      , pn = rt("years")
      , fn = Math.round
      , P = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }
      , mn = Math.abs
      , j = De.prototype;
    return j.isValid = function() {
        return this._isValid
    }
    ,
    j.abs = function() {
        var e = this._data;
        return this._milliseconds = N(this._milliseconds),
        this._days = N(this._days),
        this._months = N(this._months),
        e.milliseconds = N(e.milliseconds),
        e.seconds = N(e.seconds),
        e.minutes = N(e.minutes),
        e.hours = N(e.hours),
        e.months = N(e.months),
        e.years = N(e.years),
        this
    }
    ,
    j.add = function(e, t) {
        return Je(this, e, t, 1)
    }
    ,
    j.subtract = function(e, t) {
        return Je(this, e, t, -1)
    }
    ,
    j.as = function(e) {
        if (!this.isValid())
            return NaN;
        var t, n, i = this._milliseconds;
        if ("month" === (e = g(e)) || "year" === e)
            return t = this._days + i / 864e5,
            n = this._months + tt(t),
            "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(nt(this._months)),
        e) {
        case "week":
            return t / 7 + i / 6048e5;
        case "day":
            return t + i / 864e5;
        case "hour":
            return 24 * t + i / 36e5;
        case "minute":
            return 1440 * t + i / 6e4;
        case "second":
            return 86400 * t + i / 1e3;
        case "millisecond":
            return Math.floor(864e5 * t) + i;
        default:
            throw new Error("Unknown unit " + e)
        }
    }
    ,
    j.asMilliseconds = St,
    j.asSeconds = xt,
    j.asMinutes = Yt,
    j.asHours = kt,
    j.asDays = _t,
    j.asWeeks = Ft,
    j.asMonths = Dt,
    j.asYears = bt,
    j.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * h(this._months / 12) : NaN
    }
    ,
    j._bubble = function() {
        var e = this._milliseconds
          , t = this._days
          , n = this._months
          , i = this._data;
        return 0 <= e && 0 <= t && 0 <= n || e <= 0 && t <= 0 && n <= 0 || (e += 864e5 * et(nt(n) + t),
        n = t = 0),
        i.milliseconds = e % 1e3,
        e = u(e / 1e3),
        i.seconds = e % 60,
        e = u(e / 60),
        i.minutes = e % 60,
        e = u(e / 60),
        i.hours = e % 24,
        t += u(e / 24),
        n += e = u(tt(t)),
        t -= et(nt(e)),
        e = u(n / 12),
        n %= 12,
        i.days = t,
        i.months = n,
        i.years = e,
        this
    }
    ,
    j.clone = function() {
        return w(this)
    }
    ,
    j.get = function(e) {
        return e = g(e),
        this.isValid() ? this[e + "s"]() : NaN
    }
    ,
    j.milliseconds = Mt,
    j.seconds = wt,
    j.minutes = Tt,
    j.hours = Ht,
    j.days = k,
    j.weeks = function() {
        return u(this.days() / 7)
    }
    ,
    j.months = dn,
    j.years = pn,
    j.humanize = function(e) {
        var t, n, i, r, o, s, a, l, c, u;
        return this.isValid() ? (t = this.localeData(),
        i = !e,
        r = t,
        o = w(n = this).abs(),
        s = fn(o.as("s")),
        a = fn(o.as("m")),
        l = fn(o.as("h")),
        c = fn(o.as("d")),
        u = fn(o.as("M")),
        o = fn(o.as("y")),
        (s = (s <= P.ss ? ["s", s] : s < P.s && ["ss", s]) || (a <= 1 ? ["m"] : a < P.m && ["mm", a]) || (l <= 1 ? ["h"] : l < P.h && ["hh", l]) || (c <= 1 ? ["d"] : c < P.d && ["dd", c]) || (u <= 1 ? ["M"] : u < P.M && ["MM", u]) || (o <= 1 ? ["y"] : ["yy", o]))[2] = i,
        s[3] = 0 < +n,
        s[4] = r,
        a = function(e, t, n, i, r) {
            return r.relativeTime(t || 1, !!n, e, i)
        }
        .apply(null, s),
        e && (a = t.pastFuture(+this, a)),
        t.postformat(a)) : this.localeData().invalidDate()
    }
    ,
    j.toISOString = st,
    j.toString = st,
    j.toJSON = st,
    j.locale = Ve,
    j.localeData = Be,
    j.toIsoString = e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", st),
    j.lang = Bt,
    i("X", 0, 0, "unix"),
    i("x", 0, 0, "valueOf"),
    r("x", Ct),
    r("X", /[+-]?\d+(\.\d{1,3})?/),
    v("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }),
    v("x", function(e, t, n) {
        n._d = new Date(h(e))
    }),
    p.version = "2.20.1",
    at = b,
    p.fn = _,
    p.min = function() {
        return Oe("isBefore", [].slice.call(arguments, 0))
    }
    ,
    p.max = function() {
        return Oe("isAfter", [].slice.call(arguments, 0))
    }
    ,
    p.now = function() {
        return Date.now ? Date.now() : +new Date
    }
    ,
    p.utc = c,
    p.unix = function(e) {
        return b(1e3 * e)
    }
    ,
    p.months = function(e, t) {
        return Qe(e, t, "months")
    }
    ,
    p.isDate = I,
    p.locale = be,
    p.invalid = q,
    p.duration = w,
    p.isMoment = s,
    p.weekdays = function(e, t, n) {
        return Ke(e, t, n, "weekdays")
    }
    ,
    p.parseZone = function() {
        return b.apply(null, arguments).parseZone()
    }
    ,
    p.localeData = x,
    p.isDuration = Le,
    p.monthsShort = function(e, t) {
        return Qe(e, t, "monthsShort")
    }
    ,
    p.weekdaysMin = function(e, t, n) {
        return Ke(e, t, n, "weekdaysMin")
    }
    ,
    p.defineLocale = we,
    p.updateLocale = function(e, t) {
        var n, i;
        return null != t ? (i = Qt,
        (n = new G(t = $(i = null != (n = xe(e)) ? n._config : i, t))).parentLocale = L[e],
        L[e] = n,
        be(e)) : null != L[e] && (null != L[e].parentLocale ? L[e] = L[e].parentLocale : null != L[e] && delete L[e]),
        L[e]
    }
    ,
    p.locales = function() {
        return lt(L)
    }
    ,
    p.weekdaysShort = function(e, t, n) {
        return Ke(e, t, n, "weekdaysShort")
    }
    ,
    p.normalizeUnits = g,
    p.relativeTimeRounding = function(e) {
        return void 0 === e ? fn : "function" == typeof e && (fn = e,
        !0)
    }
    ,
    p.relativeTimeThreshold = function(e, t) {
        return void 0 !== P[e] && (void 0 === t ? P[e] : (P[e] = t,
        "s" === e && (P.ss = t - 1),
        !0))
    }
    ,
    p.calendarFormat = function(e, t) {
        e = e.diff(t, "days", !0);
        return e < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse"
    }
    ,
    p.prototype = _,
    p.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "YYYY-[W]WW",
        MONTH: "YYYY-MM"
    },
    p
}),
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.feather = t() : e.feather = t()
}("undefined" != typeof self ? self : this, function() {
    return n = [function(i, e, t) {
        !function(e) {
            function t(e) {
                return e && e.Math == Math && e
            }
            var n = "object";
            i.exports = t(typeof globalThis == n && globalThis) || t(typeof window == n && window) || t(typeof self == n && self) || t(typeof e == n && e) || Function("return this")()
        }
        .call(this, t(75))
    }
    , function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    }
    , function(e, t, n) {
        var i = n(0)
          , r = n(11)
          , o = n(33)
          , s = n(62)
          , a = i.Symbol
          , l = r("wks");
        e.exports = function(e) {
            return l[e] || (l[e] = s && a[e] || (s ? a : o)("Symbol." + e))
        }
    }
    , function(e, t, n) {
        var i = n(6);
        e.exports = function(e) {
            if (i(e))
                return e;
            throw TypeError(String(e) + " is not an object")
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }
    , function(e, t, n) {
        var i = n(8)
          , r = n(7)
          , o = n(10);
        e.exports = i ? function(e, t, n) {
            return r.f(e, t, o(1, n))
        }
        : function(e, t, n) {
            return e[t] = n,
            e
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }
    , function(e, t, n) {
        var i = n(8)
          , r = n(35)
          , o = n(3)
          , s = n(18)
          , a = Object.defineProperty;
        t.f = i ? a : function(e, t, n) {
            if (o(e),
            t = s(t, !0),
            o(n),
            r)
                try {
                    return a(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
    , function(e, t, n) {
        n = n(4);
        e.exports = !n(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , function(e, t) {
        e.exports = {}
    }
    , function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }
    , function(e, t, n) {
        var i = n(0)
          , r = n(19)
          , n = n(17)
          , o = i["__core-js_shared__"] || r("__core-js_shared__", {});
        (e.exports = function(e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.1.3",
            mode: n ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = s(n(43))
          , r = s(n(41))
          , o = s(n(40));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = Object.keys(r.default).map(function(e) {
            return new i.default(e,r.default[e],o.default[e])
        }).reduce(function(e, t) {
            return e[t.name] = t,
            e
        }, {})
    }
    , function(e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    , function(e, t, n) {
        var i = n(72)
          , r = n(20);
        e.exports = function(e) {
            return i(r(e))
        }
    }
    , function(e, t) {
        e.exports = {}
    }
    , function(e, t, n) {
        var i = n(11)
          , r = n(33)
          , o = i("keys");
        e.exports = function(e) {
            return o[e] || (o[e] = r(e))
        }
    }
    , function(e, t) {
        e.exports = !1
    }
    , function(e, t, n) {
        var r = n(6);
        e.exports = function(e, t) {
            if (!r(e))
                return e;
            var n, i;
            if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e)) || "function" == typeof (n = e.valueOf) && !r(i = n.call(e)) || !t && "function" == typeof (n = e.toString) && !r(i = n.call(e)))
                return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    , function(e, t, n) {
        var i = n(0)
          , r = n(5);
        e.exports = function(t, n) {
            try {
                r(i, t, n)
            } catch (e) {
                i[t] = n
            }
            return n
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            if (null == e)
                throw TypeError("Can't call method on " + e);
            return e
        }
    }
    , function(e, t) {
        var n = Math.ceil
          , i = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? i : n)(e)
        }
    }
    , function(t, n, e) {
        var i;
        !function() {
            "use strict";
            function e() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var i, r = new s, o = (c(r, t),
                []);
                for (i in r)
                    r[i] && o.push(i);
                return o.join(" ")
            }
            var a, l;
            s.prototype = Object.create(null),
            a = {}.hasOwnProperty,
            l = /\s+/;
            function s() {}
            function c(e, t) {
                for (var n, i = t.length, r = 0; r < i; ++r) {
                    o = void 0;
                    s = void 0;
                    n = void 0;
                    var o = e;
                    var s = t[r];
                    s && ("string" == (n = typeof s) ? function(e) {
                        for (var t = s.split(l), n = t.length, i = 0; i < n; ++i)
                            e[t[i]] = !0
                    }(o) : Array.isArray(s) ? c(o, s) : "object" == n ? function(e, t) {
                        for (var n in t)
                            a.call(t, n) && (e[n] = !!t[n])
                    }(o, s) : "number" == n && (o[s] = !0))
                }
            }
            void 0 !== t && t.exports ? t.exports = e : void 0 !== (i = function() {
                return e
            }
            .apply(n, [])) && (t.exports = i)
        }()
    }
    , function(e, t, n) {
        var i = n(7).f
          , r = n(1)
          , o = n(2)("toStringTag");
        e.exports = function(e, t, n) {
            e && !r(e = n ? e : e.prototype, o) && i(e, o, {
                configurable: !0,
                value: t
            })
        }
    }
    , function(e, t, n) {
        var i = n(20);
        e.exports = function(e) {
            return Object(i(e))
        }
    }
    , function(e, t, n) {
        var i = n(1)
          , r = n(24)
          , o = n(16)
          , n = n(63)
          , s = o("IE_PROTO")
          , a = Object.prototype;
        e.exports = n ? Object.getPrototypeOf : function(e) {
            return e = r(e),
            i(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    }
    , function(e, t, n) {
        "use strict";
        var i, r, o = n(25), s = n(5), a = n(1), l = n(2), n = n(17), l = l("iterator"), c = !1;
        [].keys && ("next"in (r = [].keys()) ? (o = o(o(r))) !== Object.prototype && (i = o) : c = !0),
        null == i && (i = {}),
        n || a(i, l) || s(i, l, function() {
            return this
        }),
        e.exports = {
            IteratorPrototype: i,
            BUGGY_SAFARI_ITERATORS: c
        }
    }
    , function(e, t, n) {
        var i = n(21)
          , r = Math.min;
        e.exports = function(e) {
            return 0 < e ? r(i(e), 9007199254740991) : 0
        }
    }
    , function(e, t, n) {
        var s = n(1)
          , a = n(14)
          , i = n(68)
          , l = n(15)
          , c = i(!1);
        e.exports = function(e, t) {
            var n, i = a(e), r = 0, o = [];
            for (n in i)
                !s(l, n) && s(i, n) && o.push(n);
            for (; t.length > r; )
                !s(i, n = t[r++]) || ~c(o, n) || o.push(n);
            return o
        }
    }
    , function(e, t, n) {
        var s = n(0)
          , i = n(11)
          , a = n(5)
          , l = n(1)
          , c = n(19)
          , r = n(36)
          , n = n(37)
          , o = n.get
          , u = n.enforce
          , h = String(r).split("toString");
        i("inspectSource", function(e) {
            return r.call(e)
        }),
        (e.exports = function(e, t, n, i) {
            var r = !!i && !!i.unsafe
              , o = !!i && !!i.enumerable
              , i = !!i && !!i.noTargetGet;
            "function" == typeof n && ("string" != typeof t || l(n, "name") || a(n, "name", t),
            u(n).source = h.join("string" == typeof t ? t : "")),
            e !== s ? (r ? !i && e[t] && (o = !0) : delete e[t],
            o ? e[t] = n : a(e, t, n)) : o ? e[t] = n : c(t, n)
        }
        )(Function.prototype, "toString", function() {
            return "function" == typeof this && o(this).source || r.call(this)
        })
    }
    , function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    }
    , function(e, t, n) {
        var i = n(8)
          , r = n(73)
          , o = n(10)
          , s = n(14)
          , a = n(18)
          , l = n(1)
          , c = n(35)
          , u = Object.getOwnPropertyDescriptor;
        t.f = i ? u : function(e, t) {
            if (e = s(e),
            t = a(t, !0),
            c)
                try {
                    return u(e, t)
                } catch (e) {}
            if (l(e, t))
                return o(!r.f.call(e, t), e[t])
        }
    }
    , function(e, t, n) {
        var c = n(0)
          , u = n(31).f
          , h = n(5)
          , d = n(29)
          , p = n(19)
          , f = n(71)
          , m = n(65);
        e.exports = function(e, t) {
            var n, i, r, o, s = e.target, a = e.global, l = e.stat;
            if (n = a ? c : l ? c[s] || p(s, {}) : (c[s] || {}).prototype)
                for (i in t) {
                    if (r = t[i],
                    o = e.noTargetGet ? (o = u(n, i)) && o.value : n[i],
                    !m(a ? i : s + (l ? "." : "#") + i, e.forced) && void 0 !== o) {
                        if (typeof r == typeof o)
                            continue;
                        f(r, o)
                    }
                    (e.sham || o && o.sham) && h(r, "sham", !0),
                    d(n, i, r, e)
                }
        }
    }
    , function(e, t) {
        var n = 0
          , i = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
        }
    }
    , function(e, t, n) {
        var i = n(0)
          , n = n(6)
          , r = i.document
          , o = n(r) && n(r.createElement);
        e.exports = function(e) {
            return o ? r.createElement(e) : {}
        }
    }
    , function(e, t, n) {
        var i = n(8)
          , r = n(4)
          , o = n(34);
        e.exports = !i && !r(function() {
            return 7 != Object.defineProperty(o("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , function(e, t, n) {
        n = n(11);
        e.exports = n("native-function-to-string", Function.toString)
    }
    , function(e, t, n) {
        var i, r, o, s, a, l, c, u, h = n(76), d = n(0), p = n(6), f = n(5), m = n(1), g = n(16), n = n(15), d = d.WeakMap;
        c = h ? (i = new d,
        r = i.get,
        o = i.has,
        s = i.set,
        a = function(e, t) {
            return s.call(i, e, t),
            t
        }
        ,
        l = function(e) {
            return r.call(i, e) || {}
        }
        ,
        function(e) {
            return o.call(i, e)
        }
        ) : (n[u = g("state")] = !0,
        a = function(e, t) {
            return f(e, u, t),
            t
        }
        ,
        l = function(e) {
            return m(e, u) ? e[u] : {}
        }
        ,
        function(e) {
            return m(e, u)
        }
        ),
        e.exports = {
            set: a,
            get: l,
            has: c,
            enforce: function(e) {
                return c(e) ? l(e) : a(e, {})
            },
            getterFor: function(t) {
                return function(e) {
                    if (p(e) && (e = l(e)).type === t)
                        return e;
                    throw TypeError("Incompatible receiver, " + t + " required")
                }
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, i = arguments[t];
                for (n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }
          , o = i(n(22))
          , s = i(n(12));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            if ("undefined" == typeof document)
                throw new Error("`feather.replace()` only works in a browser environment.");
            var e = document.querySelectorAll("[data-feather]");
            Array.from(e).forEach(function(e) {
                return function(e, t) {
                    var t = 1 < arguments.length && void 0 !== t ? t : {}
                      , n = Array.from(e.attributes).reduce(function(e, t) {
                        return e[t.name] = t.value,
                        e
                    }, {})
                      , i = n["data-feather"]
                      , i = (delete n["data-feather"],
                    s.default[i].toSvg(r({}, t, n, {
                        class: (0,
                        o.default)(t.class, n.class)
                    })))
                      , t = (new DOMParser).parseFromString(i, "image/svg+xml").querySelector("svg");
                    e.parentNode.replaceChild(t, e)
                }(e, t)
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = n(12)
          , i = n && n.__esModule ? n : {
            default: n
        };
        t.default = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),
            !e)
                throw new Error("The required `key` (icon name) parameter is missing.");
            if (i.default[e])
                return i.default[e].toSvg(t);
            throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com")
        }
    }
    , function(e) {
        e.exports = {
            activity: ["pulse", "health", "action", "motion"],
            airplay: ["stream", "cast", "mirroring"],
            "alert-circle": ["warning"],
            "alert-octagon": ["warning"],
            "alert-triangle": ["warning"],
            "at-sign": ["mention"],
            award: ["achievement", "badge"],
            aperture: ["camera", "photo"],
            bell: ["alarm", "notification"],
            "bell-off": ["alarm", "notification", "silent"],
            bluetooth: ["wireless"],
            "book-open": ["read"],
            book: ["read", "dictionary", "booklet", "magazine"],
            bookmark: ["read", "clip", "marker", "tag"],
            briefcase: ["work", "bag", "baggage", "folder"],
            clipboard: ["copy"],
            clock: ["time", "watch", "alarm"],
            "cloud-drizzle": ["weather", "shower"],
            "cloud-lightning": ["weather", "bolt"],
            "cloud-rain": ["weather"],
            "cloud-snow": ["weather", "blizzard"],
            cloud: ["weather"],
            codepen: ["logo"],
            codesandbox: ["logo"],
            coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
            command: ["keyboard", "cmd"],
            compass: ["navigation", "safari", "travel"],
            copy: ["clone", "duplicate"],
            "corner-down-left": ["arrow"],
            "corner-down-right": ["arrow"],
            "corner-left-down": ["arrow"],
            "corner-left-up": ["arrow"],
            "corner-right-down": ["arrow"],
            "corner-right-up": ["arrow"],
            "corner-up-left": ["arrow"],
            "corner-up-right": ["arrow"],
            "credit-card": ["purchase", "payment", "cc"],
            crop: ["photo", "image"],
            crosshair: ["aim", "target"],
            database: ["storage"],
            delete: ["remove"],
            disc: ["album", "cd", "dvd", "music"],
            "dollar-sign": ["currency", "money", "payment"],
            droplet: ["water"],
            edit: ["pencil", "change"],
            "edit-2": ["pencil", "change"],
            "edit-3": ["pencil", "change"],
            eye: ["view", "watch"],
            "eye-off": ["view", "watch"],
            "external-link": ["outbound"],
            facebook: ["logo"],
            "fast-forward": ["music"],
            figma: ["logo", "design", "tool"],
            film: ["movie", "video"],
            "folder-minus": ["directory"],
            "folder-plus": ["directory"],
            folder: ["directory"],
            framer: ["logo", "design", "tool"],
            frown: ["emoji", "face", "bad", "sad", "emotion"],
            gift: ["present", "box", "birthday", "party"],
            "git-branch": ["code", "version control"],
            "git-commit": ["code", "version control"],
            "git-merge": ["code", "version control"],
            "git-pull-request": ["code", "version control"],
            github: ["logo", "version control"],
            gitlab: ["logo", "version control"],
            global: ["world", "browser", "language", "translate"],
            "hard-drive": ["computer", "server"],
            hash: ["hashtag", "number", "pound"],
            headphones: ["music", "audio"],
            heart: ["like", "love"],
            "help-circle": ["question mark"],
            hexagon: ["shape", "node.js", "logo"],
            home: ["house"],
            image: ["picture"],
            inbox: ["email"],
            instagram: ["logo", "camera"],
            key: ["password", "login", "authentication"],
            "life-bouy": ["help", "life ring", "support"],
            linkedin: ["logo"],
            lock: ["security", "password"],
            "log-in": ["sign in", "arrow"],
            "log-out": ["sign out", "arrow"],
            mail: ["email"],
            "map-pin": ["location", "navigation", "travel", "marker"],
            map: ["location", "navigation", "travel"],
            maximize: ["fullscreen"],
            "maximize-2": ["fullscreen", "arrows"],
            meh: ["emoji", "face", "neutral", "emotion"],
            menu: ["bars", "navigation", "hamburger"],
            "message-circle": ["comment", "chat"],
            "message-square": ["comment", "chat"],
            "mic-off": ["record"],
            mic: ["record"],
            minimize: ["exit fullscreen"],
            "minimize-2": ["exit fullscreen", "arrows"],
            monitor: ["tv"],
            moon: ["dark", "night"],
            "more-horizontal": ["ellipsis"],
            "more-vertical": ["ellipsis"],
            "mouse-pointer": ["arrow", "cursor"],
            move: ["arrows"],
            navigation: ["location", "travel"],
            "navigation-2": ["location", "travel"],
            octagon: ["stop"],
            package: ["box"],
            paperclip: ["attachment"],
            pause: ["music", "stop"],
            "pause-circle": ["music", "stop"],
            "pen-tool": ["vector", "drawing"],
            play: ["music", "start"],
            "play-circle": ["music", "start"],
            plus: ["add", "new"],
            "plus-circle": ["add", "new"],
            "plus-square": ["add", "new"],
            pocket: ["logo", "save"],
            power: ["on", "off"],
            radio: ["signal"],
            rewind: ["music"],
            rss: ["feed", "subscribe"],
            save: ["floppy disk"],
            search: ["find", "magnifier", "magnifying glass"],
            send: ["message", "mail", "paper airplane"],
            settings: ["cog", "edit", "gear", "preferences"],
            shield: ["security"],
            "shield-off": ["security"],
            "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
            "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
            shuffle: ["music"],
            "skip-back": ["music"],
            "skip-forward": ["music"],
            slash: ["ban", "no"],
            sliders: ["settings", "controls"],
            smile: ["emoji", "face", "happy", "good", "emotion"],
            speaker: ["music"],
            star: ["bookmark", "favorite", "like"],
            sun: ["brightness", "weather", "light"],
            sunrise: ["weather"],
            sunset: ["weather"],
            tag: ["label"],
            target: ["bullseye"],
            terminal: ["code", "command line"],
            "thumbs-down": ["dislike", "bad"],
            "thumbs-up": ["like", "good"],
            "toggle-left": ["on", "off", "switch"],
            "toggle-right": ["on", "off", "switch"],
            trash: ["garbage", "delete", "remove"],
            "trash-2": ["garbage", "delete", "remove"],
            triangle: ["delta"],
            truck: ["delivery", "van", "shipping"],
            twitter: ["logo"],
            umbrella: ["rain", "weather"],
            "video-off": ["camera", "movie", "film"],
            video: ["camera", "movie", "film"],
            voicemail: ["phone"],
            volume: ["music", "sound", "mute"],
            "volume-1": ["music", "sound"],
            "volume-2": ["music", "sound"],
            "volume-x": ["music", "sound", "mute"],
            watch: ["clock", "time"],
            wind: ["weather", "air"],
            "x-circle": ["cancel", "close", "delete", "remove", "times"],
            "x-octagon": ["delete", "stop", "alert", "warning", "times"],
            "x-square": ["cancel", "close", "delete", "remove", "times"],
            x: ["cancel", "close", "delete", "remove", "times"],
            youtube: ["logo", "video", "play"],
            "zap-off": ["flash", "camera", "lightning"],
            zap: ["flash", "camera", "lightning"]
        }
    }
    , function(e) {
        e.exports = {
            activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
            airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
            "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
            "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
            "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line>',
            "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
            "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
            "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
            "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
            anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
            aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
            archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
            "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
            "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
            "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
            "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
            "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
            "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
            "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
            "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
            "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
            "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
            "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
            "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
            "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
            award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
            "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
            "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
            "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
            battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
            "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
            bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
            bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
            "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
            book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
            bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
            box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
            briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
            calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
            "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
            camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
            cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line>',
            "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
            "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
            check: '<polyline points="20 6 9 17 4 12"></polyline>',
            "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
            "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
            "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
            "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
            "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
            "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
            "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
            "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
            chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
            circle: '<circle cx="12" cy="12" r="10"></circle>',
            clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
            clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
            "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
            "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
            "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
            "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="8" y1="20" x2="8" y2="20"></line><line x1="12" y1="18" x2="12" y2="18"></line><line x1="12" y1="22" x2="12" y2="22"></line><line x1="16" y1="16" x2="16" y2="16"></line><line x1="16" y1="20" x2="16" y2="20"></line>',
            cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
            code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
            codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
            codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
            coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
            columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
            command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
            compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
            copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
            "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
            "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
            "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
            "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
            "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
            "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
            "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
            "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
            cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
            "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
            crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
            crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
            database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
            delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
            disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
            "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
            "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
            download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
            droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
            "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
            "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
            edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
            "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
            "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
            facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
            "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
            feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
            figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
            "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
            "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
            "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
            file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
            film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
            filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
            flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
            "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
            "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
            folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
            framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
            frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
            gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
            "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
            "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
            "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
            "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
            github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
            gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
            globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
            grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
            "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6" y2="16"></line><line x1="10" y1="16" x2="10" y2="16"></line>',
            hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
            headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
            heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
            "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line>',
            hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
            home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
            image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
            inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
            info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
            instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>',
            italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
            key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
            layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
            layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
            "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
            "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
            link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
            linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
            list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>',
            loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
            lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
            "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
            "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
            mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
            "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
            map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
            "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
            maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
            meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
            menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
            "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
            "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
            "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
            mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
            "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
            minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
            "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
            "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
            minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
            monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
            moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
            "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
            "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
            "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
            move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
            music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
            "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
            navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
            octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
            package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
            paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
            "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
            pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
            "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
            percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
            "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
            "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
            "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
            play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
            "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
            "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
            plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
            pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
            power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
            printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
            radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
            "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
            "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
            repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
            rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
            "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
            "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
            rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
            save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
            scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
            search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
            send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
            server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line>',
            settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
            "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
            share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
            "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
            "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
            "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
            shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
            sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
            "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
            "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
            slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
            slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
            sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
            smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
            smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
            speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12" y2="6"></line>',
            square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
            star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
            "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
            sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
            sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
            sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
            tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
            tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line>',
            target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
            terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
            thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
            "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
            "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
            "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
            "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
            "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
            trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
            trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
            "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
            "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
            triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
            truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
            tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
            twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
            type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
            umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
            underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
            unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
            "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
            upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
            "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
            "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
            "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
            "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
            user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
            users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
            "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
            voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
            "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
            "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
            "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
            volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
            watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
            "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
            wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
            wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
            "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
            "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
            "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
            x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
            youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
            "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
            zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
            "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
            "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
        }
    }
    , function(e) {
        e.exports = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": 2,
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, i = arguments[t];
                for (n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }
          , i = function(e, t, n) {
            return t && a(e.prototype, t),
            n && a(e, n),
            e
        }
          , o = l(n(22))
          , s = l(n(42));
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function c(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : []
              , i = this;
            if (!(i instanceof c))
                throw new TypeError("Cannot call a class as a function");
            this.name = e,
            this.contents = t,
            this.tags = n,
            this.attrs = r({}, s.default, {
                class: "feather feather-" + e
            })
        }
        i(c, [{
            key: "toSvg",
            value: function() {
                var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return "<svg " + (t = r({}, this.attrs, e, {
                    class: (0,
                    o.default)(this.attrs.class, e.class)
                }),
                Object.keys(t).map(function(e) {
                    return e + '="' + t[e] + '"'
                }).join(" ")) + ">" + this.contents + "</svg>"
            }
        }, {
            key: "toString",
            value: function() {
                return this.contents
            }
        }]),
        t.default = c
    }
    , function(e, t, n) {
        "use strict";
        var i = o(n(12))
          , r = o(n(39))
          , n = o(n(38));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = {
            icons: i.default,
            toSvg: r.default,
            replace: n.default
        }
    }
    , function(e, t, n) {
        e.exports = n(0)
    }
    , function(e, t, n) {
        var r = n(2)("iterator")
          , o = !1;
        try {
            var i = 0
              , s = {
                next: function() {
                    return {
                        done: !!i++
                    }
                },
                return: function() {
                    o = !0
                }
            };
            s[r] = function() {
                return this
            }
            ,
            Array.from(s, function() {
                throw 2
            })
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !o)
                return !1;
            var n = !1;
            try {
                var i = {};
                i[r] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }
                ,
                e(i)
            } catch (e) {}
            return n
        }
    }
    , function(e, t, n) {
        var i = n(30)
          , r = n(2)("toStringTag")
          , o = "Arguments" == i(function() {
            return arguments
        }());
        e.exports = function(e) {
            var t;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (t = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(e = Object(e), r)) ? t : o ? i(e) : "Object" == (t = i(e)) && "function" == typeof e.callee ? "Arguments" : t
        }
    }
    , function(e, t, n) {
        var i = n(47)
          , r = n(9)
          , o = n(2)("iterator");
        e.exports = function(e) {
            if (null != e)
                return e[o] || e["@@iterator"] || r[i(e)]
        }
    }
    , function(e, t, n) {
        "use strict";
        var i = n(18)
          , r = n(7)
          , o = n(10);
        e.exports = function(e, t, n) {
            t = i(t);
            t in e ? r.f(e, t, o(0, n)) : e[t] = n
        }
    }
    , function(e, t, n) {
        var i = n(2)
          , r = n(9)
          , o = i("iterator")
          , s = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || s[o] === e)
        }
    }
    , function(e, t, n) {
        var r = n(3);
        e.exports = function(e, t, n, i) {
            try {
                return i ? t(r(n)[0], n[1]) : t(n)
            } catch (t) {
                i = e.return;
                throw void 0 !== i && r(i.call(e)),
                t
            }
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e)
                throw TypeError(String(e) + " is not a function");
            return e
        }
    }
    , function(e, t, n) {
        var o = n(52);
        e.exports = function(i, r, e) {
            if (o(i),
            void 0 === r)
                return i;
            switch (e) {
            case 0:
                return function() {
                    return i.call(r)
                }
                ;
            case 1:
                return function(e) {
                    return i.call(r, e)
                }
                ;
            case 2:
                return function(e, t) {
                    return i.call(r, e, t)
                }
                ;
            case 3:
                return function(e, t, n) {
                    return i.call(r, e, t, n)
                }
            }
            return function() {
                return i.apply(r, arguments)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var h = n(53)
          , d = n(24)
          , p = n(51)
          , f = n(50)
          , m = n(27)
          , g = n(49)
          , y = n(48);
        e.exports = function(e) {
            var t, n, i, r, o = d(e), e = "function" == typeof this ? this : Array, s = arguments.length, a = 1 < s ? arguments[1] : void 0, l = void 0 !== a, c = 0, u = y(o);
            if (l && (a = h(a, 2 < s ? arguments[2] : void 0, 2)),
            null == u || e == Array && f(u))
                for (n = new e(t = m(o.length)); c < t; c++)
                    g(n, c, l ? a(o[c], c) : o[c]);
            else
                for (r = u.call(o),
                n = new e; !(i = r.next()).done; c++)
                    g(n, c, l ? p(r, a, [i.value, c], !0) : i.value);
            return n.length = c,
            n
        }
    }
    , function(e, t, n) {
        var i = n(32)
          , r = n(54);
        i({
            target: "Array",
            stat: !0,
            forced: !n(46)(function(e) {
                Array.from(e)
            })
        }, {
            from: r
        })
    }
    , function(e, t, n) {
        var i = n(6)
          , r = n(3);
        e.exports = function(e, t) {
            if (r(e),
            !i(t) && null !== t)
                throw TypeError("Can't set " + String(t) + " as a prototype")
        }
    }
    , function(e, t, n) {
        var r = n(56);
        e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
            var n, i = !1, e = {};
            try {
                (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []),
                i = e instanceof Array
            } catch (n) {}
            return function(e, t) {
                return r(e, t),
                i ? n.call(e, t) : e.__proto__ = t,
                e
            }
        }() : void 0)
    }
    , function(e, t, n) {
        n = n(0).document;
        e.exports = n && n.documentElement
    }
    , function(e, t, n) {
        var i = n(28)
          , r = n(13);
        e.exports = Object.keys || function(e) {
            return i(e, r)
        }
    }
    , function(e, t, n) {
        var i = n(8)
          , s = n(7)
          , a = n(3)
          , l = n(59);
        e.exports = i ? Object.defineProperties : function(e, t) {
            a(e);
            for (var n, i = l(t), r = i.length, o = 0; o < r; )
                s.f(e, n = i[o++], t[n]);
            return e
        }
    }
    , function(e, t, n) {
        function i() {}
        var r = n(3)
          , o = n(60)
          , s = n(13)
          , a = n(15)
          , l = n(58)
          , c = n(34)
          , u = n(16)("IE_PROTO")
          , h = function() {
            var e = c("iframe")
              , t = s.length;
            for (e.style.display = "none",
            l.appendChild(e),
            e.src = String("javascript:"),
            (e = e.contentWindow.document).open(),
            e.write("<script>document.F=Object<\/script>"),
            e.close(),
            h = e.F; t--; )
                delete h.prototype[s[t]];
            return h()
        };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (i.prototype = r(e),
            n = new i,
            i.prototype = null,
            n[u] = e) : n = h(),
            void 0 === t ? n : o(n, t)
        }
        ,
        a[u] = !0
    }
    , function(e, t, n) {
        n = n(4);
        e.exports = !!Object.getOwnPropertySymbols && !n(function() {
            return !String(Symbol())
        })
    }
    , function(e, t, n) {
        n = n(4);
        e.exports = !n(function() {
            function e() {}
            return e.prototype.constructor = null,
            Object.getPrototypeOf(new e) !== e.prototype
        })
    }
    , function(e, t, n) {
        "use strict";
        function i() {
            return this
        }
        var r = n(26).IteratorPrototype
          , o = n(61)
          , s = n(10)
          , a = n(23)
          , l = n(9);
        e.exports = function(e, t, n) {
            t += " Iterator";
            return e.prototype = o(r, {
                next: s(1, n)
            }),
            a(e, t, !1, !0),
            l[t] = i,
            e
        }
    }
    , function(e, t, n) {
        function i(e, t) {
            return (e = a[s(e)]) == c || e != l && ("function" == typeof t ? r(t) : !!t)
        }
        var r = n(4)
          , o = /#|\.prototype\./
          , s = i.normalize = function(e) {
            return String(e).replace(o, ".").toLowerCase()
        }
          , a = i.data = {}
          , l = i.NATIVE = "N"
          , c = i.POLYFILL = "P";
        e.exports = i
    }
    , function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }
    , function(e, t, n) {
        var i = n(21)
          , r = Math.max
          , o = Math.min;
        e.exports = function(e, t) {
            e = i(e);
            return e < 0 ? r(e + t, 0) : o(e, t)
        }
    }
    , function(e, t, n) {
        var l = n(14)
          , c = n(27)
          , u = n(67);
        e.exports = function(a) {
            return function(e, t, n) {
                var i, r = l(e), o = c(r.length), s = u(n, o);
                if (a && t != t) {
                    for (; s < o; )
                        if ((i = r[s++]) != i)
                            return !0
                } else
                    for (; s < o; s++)
                        if ((a || s in r) && r[s] === t)
                            return a || s || 0;
                return !a && -1
            }
        }
    }
    , function(e, t, n) {
        var i = n(28)
          , r = n(13).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) {
            return i(e, r)
        }
    }
    , function(e, t, n) {
        var i = n(0)
          , r = n(69)
          , o = n(66)
          , s = n(3)
          , n = i.Reflect;
        e.exports = n && n.ownKeys || function(e) {
            var t = r.f(s(e))
              , n = o.f;
            return n ? t.concat(n(e)) : t
        }
    }
    , function(e, t, n) {
        var a = n(1)
          , l = n(70)
          , c = n(31)
          , u = n(7);
        e.exports = function(e, t) {
            for (var n = l(t), i = u.f, r = c.f, o = 0; o < n.length; o++) {
                var s = n[o];
                a(e, s) || i(e, s, r(t, s))
            }
        }
    }
    , function(e, t, n) {
        var i = n(4)
          , r = n(30)
          , o = "".split;
        e.exports = i(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return "String" == r(e) ? o.call(e, "") : Object(e)
        }
        : Object
    }
    , function(e, t, n) {
        "use strict";
        var i = {}.propertyIsEnumerable
          , r = Object.getOwnPropertyDescriptor
          , o = r && !i.call({
            1: 2
        }, 1);
        t.f = o ? function(e) {
            e = r(this, e);
            return !!e && e.enumerable
        }
        : i
    }
    , function(e, t, n) {
        "use strict";
        function m() {
            return this
        }
        var g = n(32)
          , y = n(64)
          , v = n(25)
          , x = n(57)
          , b = n(23)
          , w = n(5)
          , _ = n(29)
          , i = n(2)
          , k = n(17)
          , S = n(9)
          , n = n(26)
          , T = n.IteratorPrototype
          , M = n.BUGGY_SAFARI_ITERATORS
          , E = i("iterator");
        e.exports = function(e, t, n, i, r, o, s) {
            y(n, t, i);
            function a(e) {
                if (e === r && p)
                    return p;
                if (!M && e in h)
                    return h[e];
                switch (e) {
                case "keys":
                case "values":
                case "entries":
                    return function() {
                        return new n(this,e)
                    }
                }
                return function() {
                    return new n(this)
                }
            }
            var l, c, i = t + " Iterator", u = !1, h = e.prototype, d = h[E] || h["@@iterator"] || r && h[r], p = !M && d || a(r), f = "Array" == t && h.entries || d;
            if (f && (f = v(f.call(new e)),
            T !== Object.prototype) && f.next && (k || v(f) === T || (x ? x(f, T) : "function" != typeof f[E] && w(f, E, m)),
            b(f, i, !0, !0),
            k) && (S[i] = m),
            "values" == r && d && "values" !== d.name && (u = !0,
            p = function() {
                return d.call(this)
            }
            ),
            k && !s || h[E] === p || w(h, E, p),
            S[t] = p,
            r)
                if (l = {
                    values: a("values"),
                    keys: o ? p : a("keys"),
                    entries: a("entries")
                },
                s)
                    for (c in l)
                        !M && !u && c in h || _(h, c, l[c]);
                else
                    g({
                        target: t,
                        proto: !0,
                        forced: M || u
                    }, l);
            return l
        }
    }
    , function(e, t) {
        var n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0,
            eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }
    , function(e, t, n) {
        var i = n(0)
          , n = n(36)
          , i = i.WeakMap;
        e.exports = "function" == typeof i && /native code/.test(n.call(i))
    }
    , function(e, t, n) {
        var o = n(21)
          , s = n(20);
        e.exports = function(e, t, n) {
            var i, e = String(s(e)), t = o(t), r = e.length;
            return t < 0 || r <= t ? n ? "" : void 0 : (i = e.charCodeAt(t)) < 55296 || 56319 < i || t + 1 === r || (r = e.charCodeAt(t + 1)) < 56320 || 57343 < r ? n ? e.charAt(t) : i : n ? e.slice(t, t + 2) : r - 56320 + (i - 55296 << 10) + 65536
        }
    }
    , function(e, t, n) {
        "use strict";
        var i = n(77)
          , r = n(37)
          , n = n(74)
          , o = r.set
          , s = r.getterFor("String Iterator");
        n(String, "String", function(e) {
            o(this, {
                type: "String Iterator",
                string: String(e),
                index: 0
            })
        }, function() {
            var e = s(this)
              , t = e.string
              , n = e.index;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (t = i(t, n, !0),
            e.index += t.length,
            {
                value: t,
                done: !1
            })
        })
    }
    , function(e, t, n) {
        n(78),
        n(55);
        n = n(45);
        e.exports = n.Array.from
    }
    , function(e, t, n) {
        n(79),
        e.exports = n(44)
    }
    ],
    r = {},
    i.m = n,
    i.c = r,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i(i.s = 80);
    function i(e) {
        var t;
        return (r[e] || (t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        },
        n[e].call(t.exports, t, t.exports, i),
        t.l = !0,
        t)).exports
    }
    var n, r
});
