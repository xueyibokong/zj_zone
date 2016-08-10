function FastClick(a) {
    "use strict";
    var b, c = this;
    if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = a, !a || !a.nodeType)
        throw new TypeError("Layer must be a document node");
    this.onClick = function() {
        return FastClick.prototype.onClick.apply(c, arguments)
    }, this.onMouse = function() {
        return FastClick.prototype.onMouse.apply(c, arguments)
    }, this.onTouchStart = function() {
        return FastClick.prototype.onTouchStart.apply(c, arguments)
    }, this.onTouchEnd = function() {
        return FastClick.prototype.onTouchEnd.apply(c, arguments)
    }, this.onTouchCancel = function() {
        return FastClick.prototype.onTouchCancel.apply(c, arguments)
    }, FastClick.notNeeded(a) || (this.deviceIsAndroid && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0)), a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), a.addEventListener("touchend", this.onTouchEnd, !1), a.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, d) {
        var e = Node.prototype.removeEventListener;
        "click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d)
    }, a.addEventListener = function(b, c, d) {
        var e = Node.prototype.addEventListener;
        "click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function(a) {
            a.propagationStopped || c(a)
        }), d) : e.call(a, b, c, d)
    }), "function" == typeof a.onclick && (b = a.onclick, a.addEventListener("click", function(a) {
        b(a)
    }, !1), a.onclick = null))
}
console.log("def:core_const"), define("cbui_const", [], function() {
    var a, b, c;
    return b = window.ActiveXObject ? 7 : void 0, b = b && !window.XMLHttpRequest ? 6 : b, b = b && document.documentMode ? 8 : b, c = "v20151111", a = {VERSION: c,FW_VERSION: "2.0",APPCLIENT: void 0,IE_FLAG: b,REQUIRE_WAIT: 30,REQUIRE_URL_ARGS: c,BRIDGE_WAIT: 1,KEY_PARAM: "fw_param",KEY_ON_RESULT: "fw_on_result",DEFAULT_REQUEST: {data: {},timeout: 12e4,waiting: !1,cancelable: !0,crossPage: !1}}, a
}), function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length" in a && a.length, c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    function d(a, b, c) {
        if (_.isFunction(b))
            return _.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return _.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (ha.test(b))
                return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }
    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; )
            ;
        return a
    }
    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {get: function() {
                return {}
            }}), this.expando = _.expando + h.uid++
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                } catch (e) {
                }
                sa.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    function j() {
        return !0
    }
    function k() {
        return !1
    }
    function l() {
        try {
            return Z.activeElement
        } catch (a) {
        }
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }
    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events, j)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        _.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }
    function u(a) {
        var b = Z, c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }
    function w(a, b) {
        return {get: function() {
                return a() ? (delete this.get, void 0) : (this.get = b).apply(this, arguments)
            }}
    }
    function x(a, b) {
        if (b in a)
            return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--; )
            if (b = Xa[e] + c, b in a)
                return b;
        return d
    }
    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g
    }
    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ra(a), g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e))
                return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }
    function D() {
        return setTimeout(function() {
            Ya = void 0
        }), Ya = _.now()
    }
    function E(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }
    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xa(a), p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $a.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])
                        continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else
                j = void 0;
        if (_.isEmptyObject(m))
            "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                ra.remove(a, "fxshow");
                for (b in m)
                    _.style(a, b, m[b])
            });
            for (d in m)
                g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else
                b[d] = e
    }
    function I(a, b, c) {
        var d, e, f = 0, g = bb.length, h = _.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({elem: a,props: _.extend({}, b),opts: _.extend(!0, {specialEasing: {}}, c),originalProperties: b,originalOptions: c,startTime: Ya || D(),duration: c.duration,tweens: [],createTween: function(b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }}), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bb[f].call(j, a, k, j.opts), d)
                return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {elem: a,anim: j,queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {}, g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift(), f)
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]], g)) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {state: "parsererror",error: g ? l : "No conversion from " + i + " to " + f}
                            }
                }
        return {state: "success",data: b}
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b))
            _.each(b, function(b, e) {
                c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== _.type(b))
            d(a, b);
        else
            for (e in b)
                O(a + "[" + e + "]", b[e], c, d)
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty, Y = {}, Z = a.document, $ = "2.1.4", _ = function(a, b) {
        return new _.fn.init(a, b)
    }, aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ba = /^-ms-/, ca = /-([\da-z])/gi, da = function(a, b) {
        return b.toUpperCase()
    };
    _.fn = _.prototype = {jquery: $,constructor: _,selector: "",length: 0,toArray: function() {
            return R.call(this)
        },get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },each: function(a, b) {
            return _.each(this, a, b)
        },map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },first: function() {
            return this.eq(0)
        },last: function() {
            return this.eq(-1)
        },eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },end: function() {
            return this.prevObject || this.constructor(null)
        },push: T,sort: Q.sort,splice: Q.splice}, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),isReady: !0,error: function(a) {
            throw new Error(a)
        },noop: function() {
        },isFunction: function(a) {
            return "function" === _.type(a)
        },isArray: Array.isArray,isWindow: function(a) {
            return null != a && a === a.window
        },isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        },isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },camelCase: function(a) {
            return a.replace(ba, "ms-").replace(ca, da)
        },nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++)
                        ;
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1)
                            break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++)
                    ;
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1)
                        break;
            return a
        },trim: function(a) {
            return null == a ? "" : (a + "").replace(aa, "")
        },makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e, a
        },grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)
                for (; g > f; f++)
                    e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a)
                    e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },guid: 1,proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },now: Date.now,support: Y}), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var ea = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h)
                return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                            return c.push(f), c
                    } else {
                        if (e[2])
                            return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName)
                            return $.apply(c, b.getElementsByClassName(g)), c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--; )
                            j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p)
                        try {
                            return $.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {
                        }finally {
                            l || b.removeAttribute("id")
                        }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0, a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            }finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; )
                w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        function l() {
        }
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d]; )
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            } : a[0]
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++)
                b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--; )
                        (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--; )
                                (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--; )
                            (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else
                    t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            }, g, !0), j = n(function(a) {
                return aa(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                if (c = w.relative[a[h].type])
                    k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++)
                            ;
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; )
                            if (m(k, g, h)) {
                                i.push(k);
                                break
                            }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--, d && p.push(k))
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; )
                        m(p, r, g, h);
                    if (d) {
                        if (n > 0)
                            for (; o--; )
                                p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u, C = s), p
            };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0), 0
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = da.replace("w", "w#"), fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]", ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)", ha = new RegExp(ca + "+", "g"), ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"), ja = new RegExp("^" + ca + "*," + ca + "*"), ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), ma = new RegExp(ga), na = new RegExp("^" + ea + "$"), oa = {ID: new RegExp("^#(" + da + ")"),CLASS: new RegExp("^\\.(" + da + ")"),TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),ATTR: new RegExp("^" + fa),PSEUDO: new RegExp("^" + ga),CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),bool: new RegExp("^(?:" + ba + ")$", "i"),needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")}, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g, va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), wa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, xa = function() {
            F()
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
                        ;
                    a.length = c - 1
                }}
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++]; )
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b)
                    return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b)
                    return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h)
                    return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h)
                    return g(a, b);
                for (c = a; c = c.parentNode; )
                    i.unshift(c);
                for (c = b; c = c.parentNode; )
                    j.unshift(c);
                for (; i[e] === j[e]; )
                    e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c)))
                try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {
                }
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++]; )
                    b === a[e] && (d = c.push(e));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += x(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d++]; )
                    c += x(b);
            return c
        }, w = b.selectors = {cacheLength: 50,createPseudo: d,match: oa,attrHandle: {},find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }},filter: {TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p; ) {
                                    for (l = b; l = l[p]; )
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                m = j[1];
                            else
                                for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)); )
                                    ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; )
                            d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }},pseudos: {not: d(function(a) {
                    var b = [], c = [], e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; )
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),contains: d(function(a) {
                    return a = a.replace(va, wa), function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(), function(b) {
                        var c;
                        do
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },root: function(a) {
                    return a === H
                },focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },enabled: function(a) {
                    return a.disabled === !1
                },disabled: function(a) {
                    return a.disabled === !0
                },checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },parent: function(a) {
                    return !w.pseudos.empty(a)
                },header: function(a) {
                    return qa.test(a.nodeName)
                },input: function(a) {
                    return pa.test(a.nodeName)
                },button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },first: j(function() {
                    return [0]
                }),last: j(function(a, b) {
                    return [b - 1]
                }),eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })}}, w.pseudos.nth = w.pseudos.eq;
        for (u in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
            w.pseudos[u] = h(u);
        for (u in {submit: !0,reset: !0})
            w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k)
                return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({value: d,type: e[0].replace(ia, " ")}), h = h.slice(d.length));
                for (g in w.filter)
                    !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({value: d,type: g,matches: e}), h = h.slice(d.length));
                if (!d)
                    break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--; )
                    f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b)
                        return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); )
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a)
                            return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext, ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ha = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(_(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (_.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },is: function(a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
        }});
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ka = _.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b)
                return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                    for (c in b)
                        _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
    };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/, ma = {children: !0,contents: !0,next: !0,prev: !0};
    _.extend({dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                if (1 === a.nodeType) {
                    if (e && _(a).is(c))
                        break;
                    d.push(a)
                }
            return d
        },sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }}), _.fn.extend({has: function(a) {
            var b = _(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a]))
                        return !0
            })
        },closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }}), _.each({parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },parents: function(a) {
            return _.dir(a, "parentNode")
        },parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },next: function(a) {
            return e(a, "nextSibling")
        },prev: function(a) {
            return e(a, "previousSibling")
        },nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },children: function(a) {
            return _.sibling(a.firstChild)
        },contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }}, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var na = /\S+/g, oa = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
            d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
        }, l = {add: function() {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        _.each(b, function(b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), d ? g = i.length : b && (e = c, k(b))
                }
                return this
            },remove: function() {
                return i && _.each(arguments, function(a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1; )
                        i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                }), this
            },has: function(a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
            },empty: function() {
                return i = [], g = 0, this
            },disable: function() {
                return i = j = b = void 0, this
            },disabled: function() {
                return !i
            },lock: function() {
                return j = void 0, b || l.disable(), this
            },locked: function() {
                return !j
            },fireWith: function(a, b) {
                return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
            },fire: function() {
                return l.fireWith(this, arguments), this
            },fired: function() {
                return !!c
            }};
        return l
    }, _.extend({Deferred: function(a) {
            var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]], c = "pending", d = {state: function() {
                    return c
                },always: function() {
                    return e.done(arguments).fail(arguments), this
                },then: function() {
                    var a = arguments;
                    return _.Deferred(function(c) {
                        _.each(b, function(b, f) {
                            var g = _.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                },promise: function(a) {
                    return null != a ? _.extend(a, d) : d
                }}, e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },when: function(a) {
            var b = 0, c = R.call(arguments), d = c.length, e = 1 !== d || a && _.isFunction(a.promise) ? d : 0, f = 1 === e ? a : _.Deferred(), g = function(a, b, c) {
                return function(d) {
                    b[a] = this, c[a] = arguments.length > 1 ? R.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                }
            }, h, i, j;
            if (d > 1)
                for (h = new Array(d), i = new Array(d), j = new Array(d); d > b; b++)
                    c[b] && _.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e;
            return e || f.resolveWith(j, c), f.promise()
        }});
    var pa;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({isReady: !1,readyWait: 1,holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }}), _.ready.promise = function(b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
    }, _.ready.promise();
    var qa = _.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c)
                _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c)
        })), b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {key: function(a) {
            if (!h.accepts(a))
                return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (_.isEmptyObject(f))
                _.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f
        },get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                for (; c--; )
                    delete g[d[c]]
            }
        },hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }};
    var ra = new h, sa = new h, ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ua = /([A-Z])/g;
    _.extend({hasData: function(a) {
            return sa.hasData(a) || ra.hasData(a)
        },data: function(a, b, c) {
            return sa.access(a, b, c)
        },removeData: function(a, b) {
            sa.remove(a, b)
        },_data: function(a, b, c) {
            return ra.access(a, b, c)
        },_removeData: function(a, b) {
            ra.remove(a, b)
        }}), _.fn.extend({data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; )
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sa.set(this, a)
            }) : qa(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c)
                        return c;
                    if (c = sa.get(f, d), void 0 !== c)
                        return c;
                    if (c = i(f, d, void 0), void 0 !== c)
                        return c
                } else
                    this.each(function() {
                        var c = sa.get(this, d);
                        sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },removeData: function(a) {
            return this.each(function() {
                sa.remove(this, a)
            })
        }}), _.extend({queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function() {
                _.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },_queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {empty: _.Callbacks("once memory").add(function() {
                    ra.remove(a, [b + "queue", c])
                })})
        }}), _.fn.extend({queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },promise: function(a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; )
                c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }});
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wa = ["Top", "Right", "Bottom", "Left"], xa = function(a, b) {
        return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
    }, ya = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/, Ba = /^(?:mouse|pointer|contextmenu)|click/, Ca = /^(?:focusinfocus|focusoutblur)$/, Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {global: {},add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(na) || [""], j = b.length; j--; )
                    h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({type: n,origType: p,data: d,handler: c,guid: c.guid,selector: e,needsContext: e && _.expr.match.needsContext.test(e),namespace: o.join(".")}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [""], j = b.length; j--; )
                    if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; )
                            k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i)
                            _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
            }
        },trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode)
                        m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
                    b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (ra.get(this, "events") || {})[a.type] || [], j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                        (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++)
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({elem: i,handlers: d})
                    }
            return h < b.length && g.push({elem: this,handlers: b.slice(h)}), g
        },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }},mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }},fix: function(a) {
            if (a[_.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--; )
                c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },special: {load: {noBubble: !0},focus: {trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },delegateType: "focusin"},blur: {trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },delegateType: "focusout"},click: {trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },_default: function(a) {
                    return _.nodeName(a.target, "a")
                }},beforeunload: {postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }}},simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {type: a,isSimulated: !0,originalEvent: {}});
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }}, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), this[_.expando] = !0, void 0) : new _.Event(a, b)
    }, _.Event.prototype = {isDefaultPrevented: k,isPropagationStopped: k,isImmediatePropagationStopped: k,preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }}, _.each({mouseenter: "mouseover",mouseleave: "mouseout",pointerenter: "pointerover",pointerleave: "pointerout"}, function(a, b) {
        _.event.special[a] = {delegateType: b,bindType: b,handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }}
    }), Y.focusinBubbles || _.each({focus: "focusin",blur: "focusout"}, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {setup: function() {
                var d = this.ownerDocument || this, e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
            },teardown: function() {
                var d = this.ownerDocument || this, e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
            }}
    }), _.fn.extend({on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
                d = k;
            else if (!d)
                return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }});
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fa = /<([\w:]+)/, Ga = /<|&#?\w+;/, Ha = /<(?:script|style|link)/i, Ia = /checked\s*(?:[^=]|=\s*.checked.)/i, Ja = /^$|\/(?:java|ecma)script/i, Ka = /^true\/(.*)/, La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ma = {option: [1, "<select multiple='multiple'>", "</select>"],thead: [1, "<table>", "</table>"],col: [2, "<table><colgroup>", "</colgroup></table>"],tr: [2, "<table><tbody>", "</tbody></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: [0, "", ""]};
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++)
                    s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++)
                        q(f[d], g[d]);
                else
                    q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === _.type(e))
                        _.merge(l, e.nodeType ? [e] : e);
                    else if (Ga.test(e)) {
                        for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--; )
                            f = f.lastChild;
                        _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else
                        l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++]; )
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++]; )
                        Ja.test(e.type || "") && c.push(e);
            return k
        },cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e]
                }
                delete sa.cache[c[sa.expando]]
            }
        }}), _.fn.extend({text: function(a) {
            return qa(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b)
            })
        },html: function(a) {
            return qa(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },detach: function(a) {
            return this.remove(a, !0)
        },domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m))
                return this.each(function(c) {
                    var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++)
                    g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++)
                        g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
            }
            return this
        }}), _.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++)
                c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Na, Oa = {}, Pa = /^margin/, Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"), Ra = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };
    !function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {pixelPosition: function() {
                return b(), c
            },boxSizingReliable: function() {
                return null == d && b(), d
            },reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }}))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/, Ta = new RegExp("^(" + va + ")(.*)$", "i"), Ua = new RegExp("^([+-])=(" + va + ")", "i"), Va = {position: "absolute",visibility: "hidden",display: "block"}, Wa = {letterSpacing: "0",fontWeight: "400"}, Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({cssHooks: {opacity: {get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }}},cssNumber: {columnCount: !0,fillOpacity: !0,flexGrow: !0,flexShrink: !0,fontWeight: !0,lineHeight: !0,opacity: !0,order: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": "cssFloat"},style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }}), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {get: function(a, c, d) {
                return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },set: function(a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }}
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {display: "inline-block"}, v, [a, "marginRight"]) : void 0
    }), _.each({margin: "",padding: "",border: "Width"}, function(a, b) {
        _.cssHooks[a + b] = {expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }}, Pa.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({css: function(a, b) {
            return qa(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++)
                        f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },show: function() {
            return B(this, !0)
        },hide: function() {
            return B(this)
        },toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xa(this) ? _(this).show() : _(this).hide()
            })
        }}), _.Tween = C, C.prototype = {constructor: C,init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }}, C.prototype.init.prototype = C.prototype, C.propHooks = {_default: {get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }}}, C.propHooks.scrollTop = C.propHooks.scrollLeft = {set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }}, _.easing = {linear: function(a) {
            return a
        },swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }}, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/, _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"), ab = /queueHooks$/, bb = [G], cb = {
        "*": [function(a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = _a.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"), g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do
                        h = h || ".5", g /= h, _.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]};
    _.Animation = _.extend(I, {tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
        },prefilter: function(a, b) {
            b ? bb.unshift(a) : bb.push(a)
        }}), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {complete: c || !c && b || _.isFunction(a) && a,duration: a,easing: c && b || b && !_.isFunction(b) && b};
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
    }, _.fn.extend({fadeTo: function(a, b, c, d) {
            return this.filter(xa).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        },animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function() {
                var b = I(this, _.extend({}, a), f);
                (e || ra.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = ra.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a)
            })
        },finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = ra.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers, g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }}), _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }), _.each({slideDown: E("show"),slideUp: E("hide"),slideToggle: E("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.timers = [], _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (Ya = _.now(); b < c.length; b++)
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Ya = void 0
    }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function() {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function() {
        clearInterval(Za), Za = null
    }, _.fx.speeds = {slow: 600,fast: 200,_default: 400}, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }, function() {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
    }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({attr: function(a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1)
        },removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }}), _.extend({attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : (_.removeAttr(a, b), void 0))
        },removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(na);
            if (f && 1 === a.nodeType)
                for (; c = f[e++]; )
                    d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },attrHooks: {type: {set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }}}}), eb = {set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }}, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function(a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
        }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({prop: function(a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1)
        },removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }}), _.extend({propFix: {"for": "htmlFor","class": "className"},prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },propHooks: {tabIndex: {get: function(a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }}}}), Y.optSelected || (_.propHooks.selected = {get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }}), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))
                return this.each(function(b) {
                    _(this).addClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " "), d) {
                        for (f = 0; e = b[f++]; )
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a))
                return this.each(function(b) {
                    _(this).removeClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : ""), d) {
                        for (f = 0; e = b[f++]; )
                            for (; d.indexOf(" " + e + " ") >= 0; )
                                d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : _.isFunction(a) ? this.each(function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++]; )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else
                    (c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
            })
        },hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }});
    var ib = /\r/g;
    _.fn.extend({val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = _.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
            }
        }}), _.extend({valHooks: {option: {get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }},select: {get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !_.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f)
                                return b;
                            g.push(b)
                        }
                    return g
                },set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; )
                        d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }}}}), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }}, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },unbind: function(a, b) {
            return this.off(a, null, b)
        },delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }});
    var jb = _.now(), kb = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lb = /#.*$/, mb = /([?&])_=[^&]*/, nb = /^(.*?):[ \t]*([^\r\n]*)$/gm, ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pb = /^(?:GET|HEAD)$/, qb = /^\/\//, rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, sb = {}, tb = {}, ub = "*/".concat("*"), vb = a.location.href, wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: vb,type: "GET",isLocal: ob.test(wb[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": ub,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},converters: {"* text": String,"text html": !0,"text json": _.parseJSON,"text xml": _.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },ajaxPrefilter: J(sb),ajaxTransport: J(tb),ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {readyState: 0,getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!g)
                            for (g = {}; b = nb.exec(f); )
                                g[b[1].toLowerCase()] = b[2];
                        b = g[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },overrideMimeType: function(a) {
                    return t || (l.mimeType = a), this
                },statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },abort: function(a) {
                    var b = a || u;
                    return d && d.abort(b), c(0, b), this
                }};
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t)
                return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers)
                v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (k in {success: 1,error: 1,complete: 1})
                v[k](l[k]);
            if (d = K(tb, l, b, v), d) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    c(-1, w)
                }
            } else
                c(-1, "No Transport");
            return v
        },getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }}), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({url: a,type: b,dataType: e,data: c,success: d})
        }
    }), _._evalUrl = function(a) {
        return _.ajax({url: a,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0})
    }, _.fn.extend({wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                return a
            }).append(this)), this)
        },wrapInner: function(a) {
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = _(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }}), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    };
    var xb = /%20/g, yb = /\[\]$/, zb = /\r?\n/g, Ab = /^(?:submit|button|image|reset|file)$/i, Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a))
            _.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                O(c, a[c], b, e);
        return d.join("&").replace(xb, "+")
    }, _.fn.extend({serialize: function() {
            return _.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {name: b.name,value: a.replace(zb, "\r\n")}
                }) : {name: b.name,value: c.replace(zb, "\r\n")}
            }).get()
        }}), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Cb = 0, Db = {}, Eb = {0: 200,1223: 204}, Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Db)
            Db[a]()
    }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {send: function(c, d) {
                var e, f = a.xhr(), g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)
                        throw h
                }
            },abort: function() {
                b && b()
            }} : void 0
    }), _.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(a) {
                return _.globalEval(a), a
            }}}), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {send: function(d, e) {
                    b = _("<script>").prop({async: !0,charset: a.scriptCharset,src: a.url}).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },abort: function() {
                    c && c()
                }}
        }
    });
    var Gb = [], Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a
        }}), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ib = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ib)
            return Ib.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({url: a,type: e,dataType: "html",data: b}).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jb = a.document.documentElement;
    _.offset = {setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }}, _.fn.extend({offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    _.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {top: 0,left: 0}, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {top: e.top + c.pageYOffset - b.clientTop,left: e.left + c.pageXOffset - b.clientLeft}) : e
        },position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0,left: 0};
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {top: b.top - d.top - _.css(c, "marginTop", !0),left: b.left - d.left - _.css(c, "marginLeft", !0)}
            }
        },offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); )
                    a = a.offsetParent;
                return a || Jb
            })
        }}), _.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qa(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f, void 0)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({Height: "height",Width: "width"}, function(a, b) {
        _.each({padding: "inner" + a,content: b,"": "outer" + a}, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kb = a.jQuery, Lb = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
    }, typeof b === za && (a.jQuery = a.$ = _), _
}), function() {
    function a(a) {
        function b(b, c, d, e, f, g) {
            for (; f >= 0 && g > f; f += a) {
                var h = e ? e[f] : f;
                d = c(d, b[h], h, b)
            }
            return d
        }
        return function(c, d, e, f) {
            d = s(d, f, 4);
            var g = !x(c) && r.keys(c), h = (g || c).length, i = a > 0 ? 0 : h - 1;
            return arguments.length < 3 && (e = c[g ? g[i] : i], i += a), b(c, d, e, g, i, h)
        }
    }
    function b(a) {
        return function(b, c, d) {
            c = t(c, d);
            for (var e = null != b && b.length, f = a > 0 ? 0 : e - 1; f >= 0 && e > f; f += a)
                if (c(b[f], f, b))
                    return f;
            return -1
        }
    }
    function c(a, b) {
        var c = C.length, d = a.constructor, e = r.isFunction(d) && d.prototype || g, f = "constructor";
        for (r.has(a, f) && !r.contains(b, f) && b.push(f); c--; )
            f = C[c], f in a && a[f] !== e[f] && !r.contains(b, f) && b.push(f)
    }
    var d = this, e = d._, f = Array.prototype, g = Object.prototype, h = Function.prototype, i = f.push, j = f.slice, k = g.toString, l = g.hasOwnProperty, m = Array.isArray, n = Object.keys, o = h.bind, p = Object.create, q = function() {
    }, r = function(a) {
        return a instanceof r ? a : this instanceof r ? (this._wrapped = a, void 0) : new r(a)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = r), exports._ = r) : d._ = r, r.VERSION = "1.8.2";
    var s = function(a, b, c) {
        if (void 0 === b)
            return a;
        switch (null == c ? 3 : c) {
            case 1:
                return function(c) {
                    return a.call(b, c)
                };
            case 2:
                return function(c, d) {
                    return a.call(b, c, d)
                };
            case 3:
                return function(c, d, e) {
                    return a.call(b, c, d, e)
                };
            case 4:
                return function(c, d, e, f) {
                    return a.call(b, c, d, e, f)
                }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }, t = function(a, b, c) {
        return null == a ? r.identity : r.isFunction(a) ? s(a, b, c) : r.isObject(a) ? r.matcher(a) : r.property(a)
    };
    r.iteratee = function(a, b) {
        return t(a, b, 1 / 0)
    };
    var u = function(a, b) {
        return function(c) {
            var d = arguments.length;
            if (2 > d || null == c)
                return c;
            for (var e = 1; d > e; e++)
                for (var f = arguments[e], g = a(f), h = g.length, i = 0; h > i; i++) {
                    var j = g[i];
                    b && void 0 !== c[j] || (c[j] = f[j])
                }
            return c
        }
    }, v = function(a) {
        if (!r.isObject(a))
            return {};
        if (p)
            return p(a);
        q.prototype = a;
        var b = new q;
        return q.prototype = null, b
    }, w = Math.pow(2, 53) - 1, x = function(a) {
        var b = a && a.length;
        return "number" == typeof b && b >= 0 && w >= b
    };
    r.each = r.forEach = function(a, b, c) {
        b = s(b, c);
        var d, e;
        if (x(a))
            for (d = 0, e = a.length; e > d; d++)
                b(a[d], d, a);
        else {
            var f = r.keys(a);
            for (d = 0, e = f.length; e > d; d++)
                b(a[f[d]], f[d], a)
        }
        return a
    }, r.map = r.collect = function(a, b, c) {
        b = t(b, c);
        for (var d = !x(a) && r.keys(a), e = (d || a).length, f = Array(e), g = 0; e > g; g++) {
            var h = d ? d[g] : g;
            f[g] = b(a[h], h, a)
        }
        return f
    }, r.reduce = r.foldl = r.inject = a(1), r.reduceRight = r.foldr = a(-1), r.find = r.detect = function(a, b, c) {
        var d;
        return d = x(a) ? r.findIndex(a, b, c) : r.findKey(a, b, c), void 0 !== d && -1 !== d ? a[d] : void 0
    }, r.filter = r.select = function(a, b, c) {
        var d = [];
        return b = t(b, c), r.each(a, function(a, c, e) {
            b(a, c, e) && d.push(a)
        }), d
    }, r.reject = function(a, b, c) {
        return r.filter(a, r.negate(t(b)), c)
    }, r.every = r.all = function(a, b, c) {
        b = t(b, c);
        for (var d = !x(a) && r.keys(a), e = (d || a).length, f = 0; e > f; f++) {
            var g = d ? d[f] : f;
            if (!b(a[g], g, a))
                return !1
        }
        return !0
    }, r.some = r.any = function(a, b, c) {
        b = t(b, c);
        for (var d = !x(a) && r.keys(a), e = (d || a).length, f = 0; e > f; f++) {
            var g = d ? d[f] : f;
            if (b(a[g], g, a))
                return !0
        }
        return !1
    }, r.contains = r.includes = r.include = function(a, b, c) {
        return x(a) || (a = r.values(a)), r.indexOf(a, b, "number" == typeof c && c) >= 0
    }, r.invoke = function(a, b) {
        var c = j.call(arguments, 2), d = r.isFunction(b);
        return r.map(a, function(a) {
            var e = d ? b : a[b];
            return null == e ? e : e.apply(a, c)
        })
    }, r.pluck = function(a, b) {
        return r.map(a, r.property(b))
    }, r.where = function(a, b) {
        return r.filter(a, r.matcher(b))
    }, r.findWhere = function(a, b) {
        return r.find(a, r.matcher(b))
    }, r.max = function(a, b, c) {
        var d = -(1 / 0), e = -(1 / 0), f, g;
        if (null == b && null != a) {
            a = x(a) ? a : r.values(a);
            for (var h = 0, i = a.length; i > h; h++)
                f = a[h], f > d && (d = f)
        } else
            b = t(b, c), r.each(a, function(a, c, f) {
                g = b(a, c, f), (g > e || g === -(1 / 0) && d === -(1 / 0)) && (d = a, e = g)
            });
        return d
    }, r.min = function(a, b, c) {
        var d = 1 / 0, e = 1 / 0, f, g;
        if (null == b && null != a) {
            a = x(a) ? a : r.values(a);
            for (var h = 0, i = a.length; i > h; h++)
                f = a[h], d > f && (d = f)
        } else
            b = t(b, c), r.each(a, function(a, c, f) {
                g = b(a, c, f), (e > g || g === 1 / 0 && d === 1 / 0) && (d = a, e = g)
            });
        return d
    }, r.shuffle = function(a) {
        for (var b = x(a) ? a : r.values(a), c = b.length, d = Array(c), e = 0, f; c > e; e++)
            f = r.random(0, e), f !== e && (d[e] = d[f]), d[f] = b[e];
        return d
    }, r.sample = function(a, b, c) {
        return null == b || c ? (x(a) || (a = r.values(a)), a[r.random(a.length - 1)]) : r.shuffle(a).slice(0, Math.max(0, b))
    }, r.sortBy = function(a, b, c) {
        return b = t(b, c), r.pluck(r.map(a, function(a, c, d) {
            return {value: a,index: c,criteria: b(a, c, d)}
        }).sort(function(a, b) {
            var c = a.criteria, d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c)
                    return 1;
                if (d > c || void 0 === d)
                    return -1
            }
            return a.index - b.index
        }), "value")
    };
    var y = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = t(c, d), r.each(b, function(d, f) {
                var g = c(d, f, b);
                a(e, d, g)
            }), e
        }
    };
    r.groupBy = y(function(a, b, c) {
        r.has(a, c) ? a[c].push(b) : a[c] = [b]
    }), r.indexBy = y(function(a, b, c) {
        a[c] = b
    }), r.countBy = y(function(a, b, c) {
        r.has(a, c) ? a[c]++ : a[c] = 1
    }), r.toArray = function(a) {
        return a ? r.isArray(a) ? j.call(a) : x(a) ? r.map(a, r.identity) : r.values(a) : []
    }, r.size = function(a) {
        return null == a ? 0 : x(a) ? a.length : r.keys(a).length
    }, r.partition = function(a, b, c) {
        b = t(b, c);
        var d = [], e = [];
        return r.each(a, function(a, c, f) {
            (b(a, c, f) ? d : e).push(a)
        }), [d, e]
    }, r.first = r.head = r.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : r.initial(a, a.length - b)
    }, r.initial = function(a, b, c) {
        return j.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
    }, r.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : r.rest(a, Math.max(0, a.length - b))
    }, r.rest = r.tail = r.drop = function(a, b, c) {
        return j.call(a, null == b || c ? 1 : b)
    }, r.compact = function(a) {
        return r.filter(a, r.identity)
    };
    var z = function(a, b, c, d) {
        for (var e = [], f = 0, g = d || 0, h = a && a.length; h > g; g++) {
            var i = a[g];
            if (x(i) && (r.isArray(i) || r.isArguments(i))) {
                b || (i = z(i, b, c));
                var j = 0, k = i.length;
                for (e.length += k; k > j; )
                    e[f++] = i[j++]
            } else
                c || (e[f++] = i)
        }
        return e
    };
    r.flatten = function(a, b) {
        return z(a, b, !1)
    }, r.without = function(a) {
        return r.difference(a, j.call(arguments, 1))
    }, r.uniq = r.unique = function(a, b, c, d) {
        if (null == a)
            return [];
        r.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = t(c, d));
        for (var e = [], f = [], g = 0, h = a.length; h > g; g++) {
            var i = a[g], j = c ? c(i, g, a) : i;
            b ? (g && f === j || e.push(i), f = j) : c ? r.contains(f, j) || (f.push(j), e.push(i)) : r.contains(e, i) || e.push(i)
        }
        return e
    }, r.union = function() {
        return r.uniq(z(arguments, !0, !0))
    }, r.intersection = function(a) {
        if (null == a)
            return [];
        for (var b = [], c = arguments.length, d = 0, e = a.length; e > d; d++) {
            var f = a[d];
            if (!r.contains(b, f)) {
                for (var g = 1; c > g && r.contains(arguments[g], f); g++)
                    ;
                g === c && b.push(f)
            }
        }
        return b
    }, r.difference = function(a) {
        var b = z(arguments, !0, !0, 1);
        return r.filter(a, function(a) {
            return !r.contains(b, a)
        })
    }, r.zip = function() {
        return r.unzip(arguments)
    }, r.unzip = function(a) {
        for (var b = a && r.max(a, "length").length || 0, c = Array(b), d = 0; b > d; d++)
            c[d] = r.pluck(a, d);
        return c
    }, r.object = function(a, b) {
        for (var c = {}, d = 0, e = a && a.length; e > d; d++)
            b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, r.indexOf = function(a, b, c) {
        var d = 0, e = a && a.length;
        if ("number" == typeof c)
            d = 0 > c ? Math.max(0, e + c) : c;
        else if (c && e)
            return d = r.sortedIndex(a, b), a[d] === b ? d : -1;
        if (b !== b)
            return r.findIndex(j.call(a, d), r.isNaN);
        for (; e > d; d++)
            if (a[d] === b)
                return d;
        return -1
    }, r.lastIndexOf = function(a, b, c) {
        var d = a ? a.length : 0;
        if ("number" == typeof c && (d = 0 > c ? d + c + 1 : Math.min(d, c + 1)), b !== b)
            return r.findLastIndex(j.call(a, 0, d), r.isNaN);
        for (; --d >= 0; )
            if (a[d] === b)
                return d;
        return -1
    }, r.findIndex = b(1), r.findLastIndex = b(-1), r.sortedIndex = function(a, b, c, d) {
        c = t(c, d, 1);
        for (var e = c(b), f = 0, g = a.length; g > f; ) {
            var h = Math.floor((f + g) / 2);
            c(a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }, r.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = c || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, a += c)
            e[f] = a;
        return e
    };
    var A = function(a, b, c, d, e) {
        if (!(d instanceof b))
            return a.apply(c, e);
        var f = v(a.prototype), g = a.apply(f, e);
        return r.isObject(g) ? g : f
    };
    r.bind = function(a, b) {
        if (o && a.bind === o)
            return o.apply(a, j.call(arguments, 1));
        if (!r.isFunction(a))
            throw new TypeError("Bind must be called on a function");
        var c = j.call(arguments, 2), d = function() {
            return A(a, d, b, this, c.concat(j.call(arguments)))
        };
        return d
    }, r.partial = function(a) {
        var b = j.call(arguments, 1), c = function() {
            for (var d = 0, e = b.length, f = Array(e), g = 0; e > g; g++)
                f[g] = b[g] === r ? arguments[d++] : b[g];
            for (; d < arguments.length; )
                f.push(arguments[d++]);
            return A(a, c, this, this, f)
        };
        return c
    }, r.bindAll = function(a) {
        var b, c = arguments.length, d;
        if (1 >= c)
            throw new Error("bindAll must be passed function names");
        for (b = 1; c > b; b++)
            d = arguments[b], a[d] = r.bind(a[d], a);
        return a
    }, r.memoize = function(a, b) {
        var c = function(d) {
            var e = c.cache, f = "" + (b ? b.apply(this, arguments) : d);
            return r.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
        };
        return c.cache = {}, c
    }, r.delay = function(a, b) {
        var c = j.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    }, r.defer = r.partial(r.delay, r, 1), r.throttle = function(a, b, c) {
        var d, e, f, g = null, h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : r.now(), g = null, f = a.apply(d, e), g || (d = e = null)
        };
        return function() {
            var j = r.now();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k || k > b ? (g && (clearTimeout(g), g = null), h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
        }
    }, r.debounce = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = r.now() - g;
            b > j && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
        };
        return function() {
            f = this, e = arguments, g = r.now();
            var j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
        }
    }, r.wrap = function(a, b) {
        return r.partial(b, a)
    }, r.negate = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }, r.compose = function() {
        var a = arguments, b = a.length - 1;
        return function() {
            for (var c = b, d = a[b].apply(this, arguments); c--; )
                d = a[c].call(this, d);
            return d
        }
    }, r.after = function(a, b) {
        return function() {
            return --a < 1 ? b.apply(this, arguments) : void 0
        }
    }, r.before = function(a, b) {
        var c;
        return function() {
            return --a > 0 && (c = b.apply(this, arguments)), 1 >= a && (b = null), c
        }
    }, r.once = r.partial(r.before, 2);
    var B = !{toString: null}.propertyIsEnumerable("toString"), C = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    r.keys = function(a) {
        if (!r.isObject(a))
            return [];
        if (n)
            return n(a);
        var b = [];
        for (var d in a)
            r.has(a, d) && b.push(d);
        return B && c(a, b), 
        b
    }, r.allKeys = function(a) {
        if (!r.isObject(a))
            return [];
        var b = [];
        for (var d in a)
            b.push(d);
        return B && c(a, b), b
    }, r.values = function(a) {
        for (var b = r.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++)
            d[e] = a[b[e]];
        return d
    }, r.mapObject = function(a, b, c) {
        b = t(b, c);
        for (var d = r.keys(a), e = d.length, f = {}, g, h = 0; e > h; h++)
            g = d[h], f[g] = b(a[g], g, a);
        return f
    }, r.pairs = function(a) {
        for (var b = r.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++)
            d[e] = [b[e], a[b[e]]];
        return d
    }, r.invert = function(a) {
        for (var b = {}, c = r.keys(a), d = 0, e = c.length; e > d; d++)
            b[a[c[d]]] = c[d];
        return b
    }, r.functions = r.methods = function(a) {
        var b = [];
        for (var c in a)
            r.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, r.extend = u(r.allKeys), r.extendOwn = r.assign = u(r.keys), r.findKey = function(a, b, c) {
        b = t(b, c);
        for (var d = r.keys(a), e, f = 0, g = d.length; g > f; f++)
            if (e = d[f], b(a[e], e, a))
                return e
    }, r.pick = function(a, b, c) {
        var d = {}, e = a, f, g;
        if (null == e)
            return d;
        r.isFunction(b) ? (g = r.allKeys(e), f = s(b, c)) : (g = z(arguments, !1, !1, 1), f = function(a, b, c) {
            return b in c
        }, e = Object(e));
        for (var h = 0, i = g.length; i > h; h++) {
            var j = g[h], k = e[j];
            f(k, j, e) && (d[j] = k)
        }
        return d
    }, r.omit = function(a, b, c) {
        if (r.isFunction(b))
            b = r.negate(b);
        else {
            var d = r.map(z(arguments, !1, !1, 1), String);
            b = function(a, b) {
                return !r.contains(d, b)
            }
        }
        return r.pick(a, b, c)
    }, r.defaults = u(r.allKeys, !0), r.clone = function(a) {
        return r.isObject(a) ? r.isArray(a) ? a.slice() : r.extend({}, a) : a
    }, r.tap = function(a, b) {
        return b(a), a
    }, r.isMatch = function(a, b) {
        var c = r.keys(b), d = c.length;
        if (null == a)
            return !d;
        for (var e = Object(a), f = 0; d > f; f++) {
            var g = c[f];
            if (b[g] !== e[g] || !(g in e))
                return !1
        }
        return !0
    };
    var D = function(a, b, c, d) {
        if (a === b)
            return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b)
            return a === b;
        a instanceof r && (a = a._wrapped), b instanceof r && (b = b._wrapped);
        var e = k.call(a);
        if (e !== k.call(b))
            return !1;
        switch (e) {
            case "[object RegExp]":
            case "[object String]":
                return "" + a == "" + b;
            case "[object Number]":
                return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a === +b
        }
        var f = "[object Array]" === e;
        if (!f) {
            if ("object" != typeof a || "object" != typeof b)
                return !1;
            var g = a.constructor, h = b.constructor;
            if (g !== h && !(r.isFunction(g) && g instanceof g && r.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b)
                return !1
        }
        c = c || [], d = d || [];
        for (var i = c.length; i--; )
            if (c[i] === a)
                return d[i] === b;
        if (c.push(a), d.push(b), f) {
            if (i = a.length, i !== b.length)
                return !1;
            for (; i--; )
                if (!D(a[i], b[i], c, d))
                    return !1
        } else {
            var j = r.keys(a), l;
            if (i = j.length, r.keys(b).length !== i)
                return !1;
            for (; i--; )
                if (l = j[i], !r.has(b, l) || !D(a[l], b[l], c, d))
                    return !1
        }
        return c.pop(), d.pop(), !0
    };
    r.isEqual = function(a, b) {
        return D(a, b)
    }, r.isEmpty = function(a) {
        return null == a ? !0 : x(a) && (r.isArray(a) || r.isString(a) || r.isArguments(a)) ? 0 === a.length : 0 === r.keys(a).length
    }, r.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    }, r.isArray = m || function(a) {
        return "[object Array]" === k.call(a)
    }, r.isObject = function(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    }, r.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(a) {
        r["is" + a] = function(b) {
            return k.call(b) === "[object " + a + "]"
        }
    }), r.isArguments(arguments) || (r.isArguments = function(a) {
        return r.has(a, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (r.isFunction = function(a) {
        return "function" == typeof a || !1
    }), r.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, r.isNaN = function(a) {
        return r.isNumber(a) && a !== +a
    }, r.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" === k.call(a)
    }, r.isNull = function(a) {
        return null === a
    }, r.isUndefined = function(a) {
        return void 0 === a
    }, r.has = function(a, b) {
        return null != a && l.call(a, b)
    }, r.noConflict = function() {
        return d._ = e, this
    }, r.identity = function(a) {
        return a
    }, r.constant = function(a) {
        return function() {
            return a
        }
    }, r.noop = function() {
    }, r.property = function(a) {
        return function(b) {
            return null == b ? void 0 : b[a]
        }
    }, r.propertyOf = function(a) {
        return null == a ? function() {
        } : function(b) {
            return a[b]
        }
    }, r.matcher = r.matches = function(a) {
        return a = r.extendOwn({}, a), function(b) {
            return r.isMatch(b, a)
        }
    }, r.times = function(a, b, c) {
        var d = Array(Math.max(0, a));
        b = s(b, c, 1);
        for (var e = 0; a > e; e++)
            d[e] = b(e);
        return d
    }, r.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
    }, r.now = Date.now || function() {
        return (new Date).getTime()
    };
    var E = {"&": "&amp;","<": "&lt;",">": "&gt;",'"': "&quot;","'": "&#x27;","`": "&#x60;"}, F = r.invert(E), G = function(a) {
        var b = function(b) {
            return a[b]
        }, c = "(?:" + r.keys(a).join("|") + ")", d = RegExp(c), e = RegExp(c, "g");
        return function(a) {
            return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
        }
    };
    r.escape = G(E), r.unescape = G(F), r.result = function(a, b, c) {
        var d = null == a ? void 0 : a[b];
        return void 0 === d && (d = c), r.isFunction(d) ? d.call(a) : d
    };
    var H = 0;
    r.uniqueId = function(a) {
        var b = ++H + "";
        return a ? a + b : b
    }, r.templateSettings = {evaluate: /<%([\s\S]+?)%>/g,interpolate: /<%=([\s\S]+?)%>/g,escape: /<%-([\s\S]+?)%>/g};
    var I = /(.)^/, J = {"'": "'","\\": "\\","\r": "r","\n": "n","\u2028": "u2028","\u2029": "u2029"}, K = /\\|'|\r|\n|\u2028|\u2029/g, L = function(a) {
        return "\\" + J[a]
    };
    r.template = function(a, b, c) {
        !b && c && (b = c), b = r.defaults({}, b, r.templateSettings);
        var d = RegExp([(b.escape || I).source, (b.interpolate || I).source, (b.evaluate || I).source].join("|") + "|$", "g"), e = 0, f = "__p+='";
        a.replace(d, function(b, c, d, g, h) {
            return f += a.slice(e, h).replace(K, L), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
        }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = new Function(b.variable || "obj", "_", f)
        } catch (h) {
            throw h.source = f, h
        }
        var i = function(a) {
            return g.call(this, a, r)
        }, j = b.variable || "obj";
        return i.source = "function(" + j + "){\n" + f + "}", i
    }, r.chain = function(a) {
        var b = r(a);
        return b._chain = !0, b
    };
    var M = function(a, b) {
        return a._chain ? r(b).chain() : b
    };
    r.mixin = function(a) {
        r.each(r.functions(a), function(b) {
            var c = r[b] = a[b];
            r.prototype[b] = function() {
                var a = [this._wrapped];
                return i.apply(a, arguments), M(this, c.apply(r, a))
            }
        })
    }, r.mixin(r), r.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
        var b = f[a];
        r.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], M(this, c)
        }
    }), r.each(["concat", "join", "slice"], function(a) {
        var b = f[a];
        r.prototype[a] = function() {
            return M(this, b.apply(this._wrapped, arguments))
        }
    }), r.prototype.value = function() {
        return this._wrapped
    }, r.prototype.valueOf = r.prototype.toJSON = r.prototype.value, r.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return r
    })
}.call(this), function(a, b) {
    if ("function" == typeof define && define.amd)
        define("backbone", ["underscore", "jquery", "exports"], function(c, d, e) {
            a.Backbone = b(a, e, c, d)
        });
    else if ("undefined" != typeof exports) {
        var c = require("underscore");
        b(a, exports, c)
    } else
        a.Backbone = b(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$)
}(this, function(a, b, c, d) {
    var e = a.Backbone, f = [], g = f.push, h = f.slice, i = f.splice;
    b.VERSION = "1.1.2", b.$ = d, b.noConflict = function() {
        return a.Backbone = e, this
    }, b.emulateHTTP = !1, b.emulateJSON = !1;
    var j = b.Events = {on: function(a, b, c) {
            if (!l(this, "on", a, [b, c]) || !b)
                return this;
            this._events || (this._events = {});
            var d = this._events[a] || (this._events[a] = []);
            return d.push({callback: b,context: c,ctx: c || this}), this
        },once: function(a, b, d) {
            if (!l(this, "once", a, [b, d]) || !b)
                return this;
            var e = this, f = c.once(function() {
                e.off(a, f), b.apply(this, arguments)
            });
            return f._callback = b, this.on(a, f, d)
        },off: function(a, b, d) {
            var e, f, g, h, i, j, k, m;
            if (!this._events || !l(this, "off", a, [b, d]))
                return this;
            if (!a && !b && !d)
                return this._events = void 0, this;
            for (h = a ? [a] : c.keys(this._events), i = 0, j = h.length; j > i; i++)
                if (a = h[i], g = this._events[a]) {
                    if (this._events[a] = e = [], b || d)
                        for (k = 0, m = g.length; m > k; k++)
                            f = g[k], (b && b !== f.callback && b !== f.callback._callback || d && d !== f.context) && e.push(f);
                    e.length || delete this._events[a]
                }
            return this
        },trigger: function(a) {
            if (!this._events)
                return this;
            var b = h.call(arguments, 1);
            if (!l(this, "trigger", a, b))
                return this;
            var c = this._events[a], d = this._events.all;
            return c && m(c, b), d && m(d, arguments), this
        },stopListening: function(a, b, d) {
            var e = this._listeningTo;
            if (!e)
                return this;
            var f = !b && !d;
            d || "object" != typeof b || (d = this), a && ((e = {})[a._listenId] = a);
            for (var g in e)
                a = e[g], a.off(b, d, this), (f || c.isEmpty(a._events)) && delete this._listeningTo[g];
            return this
        }}, k = /\s+/, l = function(a, b, c, d) {
        if (!c)
            return !0;
        if ("object" == typeof c) {
            for (var e in c)
                a[b].apply(a, [e, c[e]].concat(d));
            return !1
        }
        if (k.test(c)) {
            for (var f = c.split(k), g = 0, h = f.length; h > g; g++)
                a[b].apply(a, [f[g]].concat(d));
            return !1
        }
        return !0
    }, m = function(a, b) {
        var c, d = -1, e = a.length, f = b[0], g = b[1], h = b[2];
        switch (b.length) {
            case 0:
                for (; ++d < e; )
                    (c = a[d]).callback.call(c.ctx);
                return;
            case 1:
                for (; ++d < e; )
                    (c = a[d]).callback.call(c.ctx, f);
                return;
            case 2:
                for (; ++d < e; )
                    (c = a[d]).callback.call(c.ctx, f, g);
                return;
            case 3:
                for (; ++d < e; )
                    (c = a[d]).callback.call(c.ctx, f, g, h);
                return;
            default:
                for (; ++d < e; )
                    (c = a[d]).callback.apply(c.ctx, b);
                return
        }
    }, n = {listenTo: "on",listenToOnce: "once"};
    c.each(n, function(a, b) {
        j[b] = function(b, d, e) {
            var f = this._listeningTo || (this._listeningTo = {}), g = b._listenId || (b._listenId = c.uniqueId("l"));
            return f[g] = b, e || "object" != typeof d || (e = this), b[a](d, e, this), this
        }
    }), j.bind = j.on, j.unbind = j.off, c.extend(b, j);
    var o = b.Model = function(a, b) {
        var d = a || {};
        b || (b = {}), this.cid = c.uniqueId("c"), this.attributes = {}, b.collection && (this.collection = b.collection), b.parse && (d = this.parse(d, b) || {}), d = c.defaults({}, d, c.result(this, "defaults")), this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments)
    };
    c.extend(o.prototype, j, {changed: null,validationError: null,idAttribute: "id",initialize: function() {
        },toJSON: function(a) {
            return c.clone(this.attributes)
        },sync: function() {
            return b.sync.apply(this, arguments)
        },get: function(a) {
            return this.attributes[a]
        },escape: function(a) {
            return c.escape(this.get(a))
        },has: function(a) {
            return null != this.get(a)
        },set: function(a, b, d) {
            var e, f, g, h, i, j, k, l;
            if (null == a)
                return this;
            if ("object" == typeof a ? (f = a, d = b) : (f = {})[a] = b, d || (d = {}), !this._validate(f, d))
                return !1;
            g = d.unset, i = d.silent, h = [], j = this._changing, this._changing = !0, j || (this._previousAttributes = c.clone(this.attributes), this.changed = {}), l = this.attributes, k = this._previousAttributes, this.idAttribute in f && (this.id = f[this.idAttribute]);
            for (e in f)
                b = f[e], c.isEqual(l[e], b) || h.push(e), c.isEqual(k[e], b) ? delete this.changed[e] : this.changed[e] = b, g ? delete l[e] : l[e] = b;
            if (!i) {
                h.length && (this._pending = d);
                for (var m = 0, n = h.length; n > m; m++)
                    this.trigger("change:" + h[m], this, l[h[m]], d)
            }
            if (j)
                return this;
            if (!i)
                for (; this._pending; )
                    d = this._pending, this._pending = !1, this.trigger("change", this, d);
            return this._pending = !1, this._changing = !1, this
        },unset: function(a, b) {
            return this.set(a, void 0, c.extend({}, b, {unset: !0}))
        },clear: function(a) {
            var b = {};
            for (var d in this.attributes)
                b[d] = void 0;
            return this.set(b, c.extend({}, a, {unset: !0}))
        },hasChanged: function(a) {
            return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a)
        },changedAttributes: function(a) {
            if (!a)
                return this.hasChanged() ? c.clone(this.changed) : !1;
            var b, d = !1, e = this._changing ? this._previousAttributes : this.attributes;
            for (var f in a)
                c.isEqual(e[f], b = a[f]) || ((d || (d = {}))[f] = b);
            return d
        },previous: function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        },previousAttributes: function() {
            return c.clone(this._previousAttributes)
        },fetch: function(a) {
            a = a ? c.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
            var b = this, d = a.success;
            return a.success = function(c) {
                return b.set(b.parse(c, a), a) ? (d && d(b, c, a), b.trigger("sync", b, c, a), void 0) : !1
            }, N(this, a), this.sync("read", this, a)
        },save: function(a, b, d) {
            var e, f, g, h = this.attributes;
            if (null == a || "object" == typeof a ? (e = a, d = b) : (e = {})[a] = b, d = c.extend({validate: !0}, d), e && !d.wait) {
                if (!this.set(e, d))
                    return !1
            } else if (!this._validate(e, d))
                return !1;
            e && d.wait && (this.attributes = c.extend({}, h, e)), void 0 === d.parse && (d.parse = !0);
            var i = this, j = d.success;
            return d.success = function(a) {
                i.attributes = h;
                var b = i.parse(a, d);
                return d.wait && (b = c.extend(e || {}, b)), c.isObject(b) && !i.set(b, d) ? !1 : (j && j(i, a, d), i.trigger("sync", i, a, d), void 0)
            }, N(this, d), f = this.isNew() ? "create" : d.patch ? "patch" : "update", "patch" === f && (d.attrs = e), g = this.sync(f, this, d), e && d.wait && (this.attributes = h), g
        },destroy: function(a) {
            a = a ? c.clone(a) : {};
            var b = this, d = a.success, e = function() {
                b.trigger("destroy", b, b.collection, a)
            };
            if (a.success = function(c) {
                (a.wait || b.isNew()) && e(), d && d(b, c, a), b.isNew() || b.trigger("sync", b, c, a)
            }, this.isNew())
                return a.success(), !1;
            N(this, a);
            var f = this.sync("delete", this, a);
            return a.wait || e(), f
        },url: function() {
            var a = c.result(this, "urlRoot") || c.result(this.collection, "url") || M();
            return this.isNew() ? a : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },parse: function(a, b) {
            return a
        },clone: function() {
            return new this.constructor(this.attributes)
        },isNew: function() {
            return !this.has(this.idAttribute)
        },isValid: function(a) {
            return this._validate({}, c.extend(a || {}, {validate: !0}))
        },_validate: function(a, b) {
            if (!b.validate || !this.validate)
                return !0;
            a = c.extend({}, this.attributes, a);
            var d = this.validationError = this.validate(a, b) || null;
            return d ? (this.trigger("invalid", this, d, c.extend(b, {validationError: d})), !1) : !0
        }});
    var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
    c.each(p, function(a) {
        o.prototype[a] = function() {
            var b = h.call(arguments);
            return b.unshift(this.attributes), c[a].apply(c, b)
        }
    });
    var q = b.Collection = function(a, b) {
        b || (b = {}), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, c.extend({silent: !0}, b))
    }, r = {add: !0,remove: !0,merge: !0}, s = {add: !0,remove: !1};
    c.extend(q.prototype, j, {model: o,initialize: function() {
        },toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },sync: function() {
            return b.sync.apply(this, arguments)
        },add: function(a, b) {
            return this.set(a, c.extend({merge: !1}, b, s))
        },remove: function(a, b) {
            var d = !c.isArray(a);
            a = d ? [a] : c.clone(a), b || (b = {});
            var e, f, g, h;
            for (e = 0, f = a.length; f > e; e++)
                h = a[e] = this.get(a[e]), h && (delete this._byId[h.id], delete this._byId[h.cid], g = this.indexOf(h), this.models.splice(g, 1), this.length--, b.silent || (b.index = g, h.trigger("remove", h, this, b)), this._removeReference(h, b));
            return d ? a[0] : a
        },set: function(a, b) {
            b = c.defaults({}, b, r), b.parse && (a = this.parse(a, b));
            var d = !c.isArray(a);
            a = d ? a ? [a] : [] : c.clone(a);
            var e, f, g, h, i, j, k, l = b.at, m = this.model, n = this.comparator && null == l && b.sort !== !1, p = c.isString(this.comparator) ? this.comparator : null, q = [], s = [], t = {}, u = b.add, v = b.merge, w = b.remove, x = !n && u && w ? [] : !1;
            for (e = 0, f = a.length; f > e; e++) {
                if (i = a[e] || {}, g = i instanceof o ? h = i : i[m.prototype.idAttribute || "id"], j = this.get(g))
                    w && (t[j.cid] = !0), v && (i = i === h ? h.attributes : i, b.parse && (i = j.parse(i, b)), j.set(i, b), n && !k && j.hasChanged(p) && (k = !0)), a[e] = j;
                else if (u) {
                    if (h = a[e] = this._prepareModel(i, b), !h)
                        continue;
                    q.push(h), this._addReference(h, b)
                }
                h = j || h, !x || !h.isNew() && t[h.id] || x.push(h), t[h.id] = !0
            }
            if (w) {
                for (e = 0, f = this.length; f > e; ++e)
                    t[(h = this.models[e]).cid] || s.push(h);
                s.length && this.remove(s, b)
            }
            if (q.length || x && x.length)
                if (n && (k = !0), this.length += q.length, null != l)
                    for (e = 0, f = q.length; f > e; e++)
                        this.models.splice(l + e, 0, q[e]);
                else {
                    x && (this.models.length = 0);
                    var y = x || q;
                    for (e = 0, f = y.length; f > e; e++)
                        this.models.push(y[e])
                }
            if (k && this.sort({silent: !0}), !b.silent) {
                for (e = 0, f = q.length; f > e; e++)
                    (h = q[e]).trigger("add", h, this, b);
                (k || x && x.length) && this.trigger("sort", this, b)
            }
            return d ? a[0] : a
        },reset: function(a, b) {
            b || (b = {});
            for (var d = 0, e = this.models.length; e > d; d++)
                this._removeReference(this.models[d], b);
            return b.previousModels = this.models, this._reset(), a = this.add(a, c.extend({silent: !0}, b)), b.silent || this.trigger("reset", this, b), a
        },push: function(a, b) {
            return this.add(a, c.extend({at: this.length}, b))
        },pop: function(a) {
            var b = this.at(this.length - 1);
            return this.remove(b, a), b
        },unshift: function(a, b) {
            return this.add(a, c.extend({at: 0}, b))
        },shift: function(a) {
            var b = this.at(0);
            return this.remove(b, a), b
        },slice: function() {
            return h.apply(this.models, arguments)
        },get: function(a) {
            return null == a ? void 0 : this._byId[a] || this._byId[a.id] || this._byId[a.cid]
        },at: function(a) {
            return this.models[a]
        },where: function(a, b) {
            return c.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
                for (var c in a)
                    if (a[c] !== b.get(c))
                        return !1;
                return !0
            })
        },findWhere: function(a) {
            return this.where(a, !0)
        },sort: function(a) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return a || (a = {}), c.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(c.bind(this.comparator, this)), a.silent || this.trigger("sort", this, a), this
        },pluck: function(a) {
            return c.invoke(this.models, "get", a)
        },fetch: function(a) {
            a = a ? c.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
            var b = a.success, d = this;
            return a.success = function(c) {
                var e = a.reset ? "reset" : "set";
                d[e](c, a), b && b(d, c, a), d.trigger("sync", d, c, a)
            }, N(this, a), this.sync("read", this, a)
        },create: function(a, b) {
            if (b = b ? c.clone(b) : {}, !(a = this._prepareModel(a, b)))
                return !1;
            b.wait || this.add(a, b);
            var d = this, e = b.success;
            return b.success = function(a, c) {
                b.wait && d.add(a, b), e && e(a, c, b)
            }, a.save(null, b), a
        },parse: function(a, b) {
            return a
        },clone: function() {
            return new this.constructor(this.models)
        },_reset: function() {
            this.length = 0, this.models = [], this._byId = {}
        },_prepareModel: function(a, b) {
            if (a instanceof o)
                return a;
            b = b ? c.clone(b) : {}, b.collection = this;
            var d = new this.model(a, b);
            return d.validationError ? (this.trigger("invalid", this, d.validationError, b), !1) : d
        },_addReference: function(a, b) {
            this._byId[a.cid] = a, null != a.id && (this._byId[a.id] = a), a.collection || (a.collection = this), a.on("all", this._onModelEvent, this)
        },_removeReference: function(a, b) {
            this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this)
        },_onModelEvent: function(a, b, c, d) {
            ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments))
        }});
    var t = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    c.each(t, function(a) {
        q.prototype[a] = function() {
            var b = h.call(arguments);
            return b.unshift(this.models), c[a].apply(c, b)
        }
    });
    var u = ["groupBy", "countBy", "sortBy", "indexBy"];
    c.each(u, function(a) {
        q.prototype[a] = function(b, d) {
            var e = c.isFunction(b) ? b : function(a) {
                return a.get(b)
            };
            return c[a](this.models, e, d)
        }
    });
    var v = b.View = function(a) {
        this.cid = c.uniqueId("view"), a || (a = {}), c.extend(this, c.pick(a, x)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, w = /^(\S+)\s*(.*)$/, x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    c.extend(v.prototype, j, {tagName: "div",$: function(a) {
            return this.$el.find(a)
        },initialize: function() {
        },render: function() {
            return this
        },remove: function() {
            return this.$el.remove(), this.stopListening(), this
        },setElement: function(a, c) {
            return this.$el && this.undelegateEvents(), this.$el = a instanceof b.$ ? a : b.$(a), this.el = this.$el[0], c !== !1 && this.delegateEvents(), this
        },delegateEvents: function(a) {
            if (!a && !(a = c.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var b in a) {
                var d = a[b];
                if (c.isFunction(d) || (d = this[a[b]]), d) {
                    var e = b.match(w), f = e[1], g = e[2];
                    d = c.bind(d, this), f += ".delegateEvents" + this.cid, "" === g ? this.$el.on(f, d) : this.$el.on(f, g, d)
                }
            }
            return this
        },undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this
        },_ensureElement: function() {
            if (this.el)
                this.setElement(c.result(this, "el"), !1);
            else {
                var a = c.extend({}, c.result(this, "attributes"));
                this.id && (a.id = c.result(this, "id")), this.className && (a["class"] = c.result(this, "className"));
                var d = b.$("<" + c.result(this, "tagName") + ">").attr(a);
                this.setElement(d, !1)
            }
        }}), b.sync = function(a, d, e) {
        var f = z[a];
        c.defaults(e || (e = {}), {emulateHTTP: b.emulateHTTP,emulateJSON: b.emulateJSON});
        var g = {type: f,dataType: "json"};
        if (e.url || (g.url = c.result(d, "url") || M()), null != e.data || !d || "create" !== a && "update" !== a && "patch" !== a || (g.contentType = "application/json", g.data = JSON.stringify(e.attrs || d.toJSON(e))), e.emulateJSON && (g.contentType = "application/x-www-form-urlencoded", g.data = g.data ? {model: g.data} : {}), e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f)) {
            g.type = "POST", e.emulateJSON && (g.data._method = f);
            var h = e.beforeSend;
            e.beforeSend = function(a) {
                return a.setRequestHeader("X-HTTP-Method-Override", f), h ? h.apply(this, arguments) : void 0
            }
        }
        "GET" === g.type || e.emulateJSON || (g.processData = !1), "PATCH" === g.type && y && (g.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var i = e.xhr = b.ajax(c.extend(g, e));
        return d.trigger("request", d, i, e), i
    };
    var y = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent), z = {create: "POST",update: "PUT",patch: "PATCH","delete": "DELETE",read: "GET"};
    b.ajax = function() {
        return b.$.ajax.apply(b.$, arguments)
    };
    var A = b.Router = function(a) {
        a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, B = /\((.*?)\)/g, C = /(\(\?)?:\w+/g, D = /\*\w+/g, E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    c.extend(A.prototype, j, {initialize: function() {
        },route: function(a, d, e) {
            c.isRegExp(a) || (a = this._routeToRegExp(a)), c.isFunction(d) && (e = d, d = ""), e || (e = this[d]);
            var f = this;
            return b.history.route(a, function(c) {
                var g = f._extractParameters(a, c);
                f.execute(e, g), f.trigger.apply(f, ["route:" + d].concat(g)), f.trigger("route", d, g), b.history.trigger("route", f, d, g)
            }), this
        },execute: function(a, b) {
            a && a.apply(this, b)
        },navigate: function(a, c) {
            return b.history.navigate(a, c), this
        },_bindRoutes: function() {
            if (this.routes) {
                this.routes = c.result(this, "routes");
                for (var a, b = c.keys(this.routes); null != (a = b.pop()); )
                    this.route(a, this.routes[a])
            }
        },_routeToRegExp: function(a) {
            return a = a.replace(E, "\\$&").replace(B, "(?:$1)?").replace(C, function(a, b) {
                return b ? a : "([^/?]+)"
            }).replace(D, "([^?]*?)"), new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
        },_extractParameters: function(a, b) {
            var d = a.exec(b).slice(1);
            return c.map(d, function(a, b) {
                return b === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null
            })
        }});
    var F = b.History = function() {
        this.handlers = [], c.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    }, G = /^[#\/]|\s+$/g, H = /^\/+|\/+$/g, I = /msie [\w.]+/, J = /\/$/, K = /#.*$/;
    F.started = !1, c.extend(F.prototype, j, {interval: 50,atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },getHash: function(a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : ""
        },getFragment: function(a, b) {
            if (null == a)
                if (this._hasPushState || !this._wantsHashChange || b) {
                    a = decodeURI(this.location.pathname + this.location.search);
                    var c = this.root.replace(J, "");
                    a.indexOf(c) || (a = a.slice(c.length))
                } else
                    a = this.getHash();
            return a.replace(G, "")
        },start: function(a) {
            if (F.started)
                throw new Error("Backbone.history has already been started");
            F.started = !0, this.options = c.extend({root: "/"}, this.options, a), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var d = this.getFragment(), e = document.documentMode, f = I.exec(navigator.userAgent.toLowerCase()) && (!e || 7 >= e);
            if (this.root = ("/" + this.root + "/").replace(H, "/"), f && this._wantsHashChange) {
                var g = b.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = g.hide().appendTo("body")[0].contentWindow, this.navigate(d)
            }
            this._hasPushState ? b.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !f ? b.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = d;
            var h = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot())
                    return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                this._hasPushState && this.atRoot() && h.hash && (this.fragment = this.getHash().replace(G, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
            }
            return this.options.silent ? void 0 : this.loadUrl()
        },stop: function() {
            b.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), F.started = !1
        },route: function(a, b) {
            this.handlers.unshift({route: a,callback: b})
        },checkUrl: function(a) {
            var b = this.getFragment();
            return b === this.fragment && this.iframe && (b = this.getFragment(this.getHash(this.iframe))), b === this.fragment ? !1 : (this.iframe && this.navigate(b), this.loadUrl(), void 0)
        },loadUrl: function(a) {
            return a = this.fragment = this.getFragment(a), c.any(this.handlers, function(b) {
                return b.route.test(a) ? (b.callback(a), !0) : void 0
            })
        },navigate: function(a, b) {
            if (!F.started)
                return !1;
            b && b !== !0 || (b = {trigger: !!b});
            var c = this.root + (a = this.getFragment(a || ""));
            if (a = a.replace(K, ""), this.fragment !== a) {
                if (this.fragment = a, "" === a && "/" !== c && (c = c.slice(0, -1)), this._hasPushState)
                    this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(c);
                    this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace))
                }
                return b.trigger ? this.loadUrl(a) : void 0
            }
        },_updateHash: function(a, b, c) {
            if (c) {
                var d = a.href.replace(/(javascript:|#).*$/, "");
                a.replace(d + "#" + b)
            } else
                a.hash = "#" + b
        }}), b.history = new F;
    var L = function(a, b) {
        var d = this, e;
        e = a && c.has(a, "constructor") ? a.constructor : function() {
            return d.apply(this, arguments)
        }, c.extend(e, d, b);
        var f = function() {
            this.constructor = e
        };
        return f.prototype = d.prototype, e.prototype = new f, a && c.extend(e.prototype, a), e.__super__ = d.prototype, e
    };
    o.extend = q.extend = A.extend = v.extend = F.extend = L;
    var M = function() {
        throw new Error('A "url" property or function must be specified')
    }, N = function(a, b) {
        var c = b.error;
        b.error = function(d) {
            c && c(a, d, b), a.trigger("error", a, d, b)
        }
    };
    return b
}), !function(a, b) {
    "use strict";
    var c = b.prototype.trim, d = b.prototype.trimRight, e = b.prototype.trimLeft, f = function(a) {
        return 1 * a || 0
    }, g = function(a, b) {
        if (1 > b)
            return "";
        for (var c = ""; b > 0; )
            1 & b && (c += a), b >>= 1, a += a;
        return c
    }, h = [].slice, i = function(a) {
        return null == a ? "\\s" : a.source ? a.source : "[" + n.escapeRegExp(a) + "]"
    }, j = {lt: "<",gt: ">",quot: '"',amp: "&",apos: "'"}, k = {};
    for (var l in j)
        k[j[l]] = l;
    k["'"] = "#39";
    var m = function() {
        function a(a) {
            return Object.prototype.toString.call(a).slice(8, -1).toLowerCase()
        }
        var c = g, d = function() {
            return d.cache.hasOwnProperty(arguments[0]) || (d.cache[arguments[0]] = d.parse(arguments[0])), d.format.call(null, d.cache[arguments[0]], arguments)
        };
        return d.format = function(d, e) {
            var f = 1, g = d.length, h = "", i, j = [], k, l, n, o, p, q;
            for (k = 0; g > k; k++)
                if (h = a(d[k]), "string" === h)
                    j.push(d[k]);
                else if ("array" === h) {
                    if (n = d[k], n[2])
                        for (i = e[f], l = 0; l < n[2].length; l++) {
                            if (!i.hasOwnProperty(n[2][l]))
                                throw new Error(m('[_.sprintf] property "%s" does not exist', n[2][l]));
                            i = i[n[2][l]]
                        }
                    else
                        i = n[1] ? e[n[1]] : e[f++];
                    if (/[^s]/.test(n[8]) && "number" != a(i))
                        throw new Error(m("[_.sprintf] expecting number but found %s", a(i)));
                    switch (n[8]) {
                        case "b":
                            i = i.toString(2);
                            break;
                        case "c":
                            i = b.fromCharCode(i);
                            break;
                        case "d":
                            i = parseInt(i, 10);
                            break;
                        case "e":
                            i = n[7] ? i.toExponential(n[7]) : i.toExponential();
                            break;
                        case "f":
                            i = n[7] ? parseFloat(i).toFixed(n[7]) : parseFloat(i);
                            break;
                        case "o":
                            i = i.toString(8);
                            break;
                        case "s":
                            i = (i = b(i)) && n[7] ? i.substring(0, n[7]) : i;
                            break;
                        case "u":
                            i = Math.abs(i);
                            break;
                        case "x":
                            i = i.toString(16);
                            break;
                        case "X":
                            i = i.toString(16).toUpperCase()
                    }
                    i = /[def]/.test(n[8]) && n[3] && i >= 0 ? "+" + i : i, p = n[4] ? "0" == n[4] ? "0" : n[4].charAt(1) : " ", q = n[6] - b(i).length, o = n[6] ? c(p, q) : "", j.push(n[5] ? i + o : o + i)
                }
            return j.join("")
        }, d.cache = {}, d.parse = function(a) {
            for (var b = a, c = [], d = [], e = 0; b; ) {
                if (null !== (c = /^[^\x25]+/.exec(b)))
                    d.push(c[0]);
                else if (null !== (c = /^\x25{2}/.exec(b)))
                    d.push("%");
                else {
                    if (null === (c = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b)))
                        throw new Error("[_.sprintf] huh?");
                    if (c[2]) {
                        e |= 1;
                        var f = [], g = c[2], h = [];
                        if (null === (h = /^([a-z_][a-z_\d]*)/i.exec(g)))
                            throw new Error("[_.sprintf] huh?");
                        for (f.push(h[1]); "" !== (g = g.substring(h[0].length)); )
                            if (null !== (h = /^\.([a-z_][a-z_\d]*)/i.exec(g)))
                                f.push(h[1]);
                            else {
                                if (null === (h = /^\[(\d+)\]/.exec(g)))
                                    throw new Error("[_.sprintf] huh?");
                                f.push(h[1])
                            }
                        c[2] = f
                    } else
                        e |= 2;
                    if (3 === e)
                        throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                    d.push(c)
                }
                b = b.substring(c[0].length)
            }
            return d
        }, d
    }(), n = {VERSION: "2.3.0",isBlank: function(a) {
            return null == a && (a = ""), /^\s*$/.test(a)
        },stripTags: function(a) {
            return null == a ? "" : b(a).replace(/<\/?[^>]+>/g, "")
        },capitalize: function(a) {
            return a = null == a ? "" : b(a), a.charAt(0).toUpperCase() + a.slice(1)
        },chop: function(a, c) {
            return null == a ? [] : (a = b(a), c = ~~c, c > 0 ? a.match(new RegExp(".{1," + c + "}", "g")) : [a])
        },clean: function(a) {
            return n.strip(a).replace(/\s+/g, " ")
        },count: function(a, c) {
            if (null == a || null == c)
                return 0;
            a = b(a), c = b(c);
            for (var d = 0, e = 0, f = c.length; ; ) {
                if (e = a.indexOf(c, e), -1 === e)
                    break;
                d++, e += f
            }
            return d
        },chars: function(a) {
            return null == a ? [] : b(a).split("")
        },swapCase: function(a) {
            return null == a ? "" : b(a).replace(/\S/g, function(a) {
                return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()
            })
        },escapeHTML: function(a) {
            return null == a ? "" : b(a).replace(/[&<>"']/g, function(a) {
                return "&" + k[a] + ";"
            })
        },unescapeHTML: function(a) {
            return null == a ? "" : b(a).replace(/\&([^;]+);/g, function(a, c) {
                var d;
                return c in j ? j[c] : (d = c.match(/^#x([\da-fA-F]+)$/)) ? b.fromCharCode(parseInt(d[1], 16)) : (d = c.match(/^#(\d+)$/)) ? b.fromCharCode(~~d[1]) : a
            })
        },escapeRegExp: function(a) {
            return null == a ? "" : b(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
        },splice: function(a, b, c, d) {
            var e = n.chars(a);
            return e.splice(~~b, ~~c, d), e.join("")
        },insert: function(a, b, c) {
            return n.splice(a, b, 0, c)
        },include: function(a, c) {
            return "" === c ? !0 : null == a ? !1 : -1 !== b(a).indexOf(c)
        },join: function() {
            var a = h.call(arguments), b = a.shift();
            return null == b && (b = ""), a.join(b)
        },lines: function(a) {
            return null == a ? [] : b(a).split("\n")
        },reverse: function(a) {
            return n.chars(a).reverse().join("")
        },startsWith: function(a, c) {
            return "" === c ? !0 : null == a || null == c ? !1 : (a = b(a), c = b(c), a.length >= c.length && a.slice(0, c.length) === c)
        },endsWith: function(a, c) {
            return "" === c ? !0 : null == a || null == c ? !1 : (a = b(a), c = b(c), a.length >= c.length && a.slice(a.length - c.length) === c)
        },succ: function(a) {
            return null == a ? "" : (a = b(a), a.slice(0, -1) + b.fromCharCode(a.charCodeAt(a.length - 1) + 1))
        },titleize: function(a) {
            return null == a ? "" : b(a).replace(/(?:^|\s)\S/g, function(a) {
                return a.toUpperCase()
            })
        },camelize: function(a) {
            return n.trim(a).replace(/[-_\s]+(.)?/g, function(a, b) {
                return b ? b.toUpperCase() : ""
            })
        },underscored: function(a) {
            return n.trim(a).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()
        },dasherize: function(a) {
            return n.trim(a).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
        },classify: function(a) {
            return n.titleize(b(a).replace(/[\W_]/g, " ")).replace(/\s/g, "")
        },humanize: function(a) {
            return n.capitalize(n.underscored(a).replace(/_id$/, "").replace(/_/g, " "))
        },trim: function(a, d) {
            return null == a ? "" : !d && c ? c.call(a) : (d = i(d), b(a).replace(new RegExp("^" + d + "+|" + d + "+$", "g"), ""))
        },ltrim: function(a, c) {
            return null == a ? "" : !c && e ? e.call(a) : (c = i(c), b(a).replace(new RegExp("^" + c + "+"), ""))
        },rtrim: function(a, c) {
            return null == a ? "" : !c && d ? d.call(a) : (c = i(c), b(a).replace(new RegExp(c + "+$"), ""))
        },truncate: function(a, c, d) {
            return null == a ? "" : (a = b(a), d = d || "...", c = ~~c, a.length > c ? a.slice(0, c) + d : a)
        },prune: function(a, c, d) {
            if (null == a)
                return "";
            if (a = b(a), c = ~~c, d = null != d ? b(d) : "...", a.length <= c)
                return a;
            var e = function(a) {
                return a.toUpperCase() !== a.toLowerCase() ? "A" : " "
            }, f = a.slice(0, c + 1).replace(/.(?=\W*\w*$)/g, e);
            return f = f.slice(f.length - 2).match(/\w\w/) ? f.replace(/\s*\S+$/, "") : n.rtrim(f.slice(0, f.length - 1)), (f + d).length > a.length ? a : a.slice(0, f.length) + d
        },words: function(a, b) {
            return n.isBlank(a) ? [] : n.trim(a, b).split(b || /\s+/)
        },pad: function(a, c, d, e) {
            a = null == a ? "" : b(a), c = ~~c;
            var f = 0;
            switch (d ? d.length > 1 && (d = d.charAt(0)) : d = " ", e) {
                case "right":
                    return f = c - a.length, a + g(d, f);
                case "both":
                    return f = c - a.length, g(d, Math.ceil(f / 2)) + a + g(d, Math.floor(f / 2));
                default:
                    return f = c - a.length, g(d, f) + a
            }
        },lpad: function(a, b, c) {
            return n.pad(a, b, c)
        },rpad: function(a, b, c) {
            return n.pad(a, b, c, "right")
        },lrpad: function(a, b, c) {
            return n.pad(a, b, c, "both");
        },sprintf: m,vsprintf: function(a, b) {
            return b.unshift(a), m.apply(null, b)
        },toNumber: function(a, b) {
            return a ? (a = n.trim(a), a.match(/^-?\d+(?:\.\d+)?$/) ? f(f(a).toFixed(~~b)) : NaN) : 0
        },numberFormat: function(a, b, c, d) {
            if (isNaN(a) || null == a)
                return "";
            a = a.toFixed(~~b), d = "string" == typeof d ? d : ",";
            var e = a.split("."), f = e[0], g = e[1] ? (c || ".") + e[1] : "";
            return f.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + d) + g
        },strRight: function(a, c) {
            if (null == a)
                return "";
            a = b(a), c = null != c ? b(c) : c;
            var d = c ? a.indexOf(c) : -1;
            return ~d ? a.slice(d + c.length, a.length) : a
        },strRightBack: function(a, c) {
            if (null == a)
                return "";
            a = b(a), c = null != c ? b(c) : c;
            var d = c ? a.lastIndexOf(c) : -1;
            return ~d ? a.slice(d + c.length, a.length) : a
        },strLeft: function(a, c) {
            if (null == a)
                return "";
            a = b(a), c = null != c ? b(c) : c;
            var d = c ? a.indexOf(c) : -1;
            return ~d ? a.slice(0, d) : a
        },strLeftBack: function(a, b) {
            if (null == a)
                return "";
            a += "", b = null != b ? "" + b : b;
            var c = a.lastIndexOf(b);
            return ~c ? a.slice(0, c) : a
        },toSentence: function(a, b, c, d) {
            b = b || ", ", c = c || " and ";
            var e = a.slice(), f = e.pop();
            return a.length > 2 && d && (c = n.rtrim(b) + c), e.length ? e.join(b) + c + f : f
        },toSentenceSerial: function() {
            var a = h.call(arguments);
            return a[3] = !0, n.toSentence.apply(n, a)
        },slugify: function(a) {
            if (null == a)
                return "";
            var c = "ąàáäâãåæćęèéëêìíïîłńòóöôõøśùúüûñçżź", d = "aaaaaaaaceeeeeiiiilnoooooosuuuunczz", e = new RegExp(i(c), "g");
            return a = b(a).toLowerCase().replace(e, function(a) {
                var b = c.indexOf(a);
                return d.charAt(b) || "-"
            }), n.dasherize(a.replace(/[^\w\s-]/g, ""))
        },surround: function(a, b) {
            return [b, a, b].join("")
        },quote: function(a) {
            return n.surround(a, '"')
        },exports: function() {
            var a = {};
            for (var b in this)
                this.hasOwnProperty(b) && !b.match(/^(?:include|contains|reverse)$/) && (a[b] = this[b]);
            return a
        },repeat: function(a, c, d) {
            if (null == a)
                return "";
            if (c = ~~c, null == d)
                return g(b(a), c);
            for (var e = []; c > 0; e[--c] = a)
                ;
            return e.join(d)
        },naturalCmp: function(a, c) {
            if (a == c)
                return 0;
            if (!a)
                return -1;
            if (!c)
                return 1;
            for (var d = /(\.\d+)|(\d+)|(\D+)/g, e = b(a).toLowerCase().match(d), f = b(c).toLowerCase().match(d), g = Math.min(e.length, f.length), h = 0; g > h; h++) {
                var i = e[h], j = f[h];
                if (i !== j) {
                    var k = parseInt(i, 10);
                    if (!isNaN(k)) {
                        var l = parseInt(j, 10);
                        if (!isNaN(l) && k - l)
                            return k - l
                    }
                    return j > i ? -1 : 1
                }
            }
            return e.length === f.length ? e.length - f.length : c > a ? -1 : 1
        },levenshtein: function(a, c) {
            if (null == a && null == c)
                return 0;
            if (null == a)
                return b(c).length;
            if (null == c)
                return b(a).length;
            a = b(a), c = b(c);
            for (var d = [], e, f, g = 0; g <= c.length; g++)
                for (var h = 0; h <= a.length; h++)
                    f = g && h ? a.charAt(h - 1) === c.charAt(g - 1) ? e : Math.min(d[h], d[h - 1], e) + 1 : g + h, e = d[h], d[h] = f;
            return d.pop()
        }};
    n.strip = n.trim, n.lstrip = n.ltrim, n.rstrip = n.rtrim, n.center = n.lrpad, n.rjust = n.lpad, n.ljust = n.rpad, n.contains = n.include, n.q = n.quote, "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (module.exports = n), exports._s = n), "function" == typeof define && define.amd && define("underscore.string", [], function() {
        return n
    }), a._ = a._ || {}, a._.string = a._.str = n
}(this, String), define("backbone-super", ["backbone"], function(a) {
    a.Model.extend = a.Collection.extend = a.Router.extend = a.View.extend = function(a, b) {
        var c = d(this, a, b);
        return c.extend = this.extend, c
    };
    var b = function(a) {
        throw "Super does not implement this method: " + a
    }, c = function() {
    }, d = function(a, d, e) {
        var f, g = a.prototype, h = /xyz/.test(function() {
            xyz
        }) ? /\b_super\b/ : /.*/;
        if (f = d && d.hasOwnProperty("constructor") ? d.constructor : function() {
            a.apply(this, arguments)
        }, _.extend(f, a), c.prototype = a.prototype, f.prototype = new c, d) {
            _.extend(f.prototype, d);
            for (var i in d)
                "function" == typeof d[i] && h.test(d[i]) && (f.prototype[i] = function(a, c) {
                    var d = function() {
                        var d = this._super;
                        this._super = g[a] || b(a);
                        var e;
                        try {
                            e = c.apply(this, arguments)
                        }finally {
                            this._super = d
                        }
                        return e
                    };
                    for (var e in c)
                        d[e] = c[e], delete c[e];
                    return d
                }(i, d[i]))
        }
        return e && _.extend(f, e), f.prototype.constructor = f, f.__super__ = a.prototype, f
    }
}), "object" != typeof JSON && (JSON = {}), function() {
    "use strict";
    function f(a) {
        return 10 > a ? "0" + a : a
    }
    function quote(a) {
        return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
            var b = meta[a];
            return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }
    function str(a, b) {
        var c, d, e, f, g = gap, h, i = b[a];
        switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
            case "string":
                return quote(i);
            case "number":
                return isFinite(i) ? String(i) : "null";
            case "boolean":
            case "null":
                return String(i);
            case "object":
                if (!i)
                    return "null";
                if (gap += indent, h = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                    for (f = i.length, c = 0; f > c; c += 1)
                        h[c] = str(c, i) || "null";
                    return e = 0 === h.length ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
                }
                if (rep && "object" == typeof rep)
                    for (f = rep.length, c = 0; f > c; c += 1)
                        "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
                else
                    for (d in i)
                        Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
                return e = 0 === h.length ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var cx, escapable, gap, indent, meta, rep;
    "function" != typeof JSON.stringify && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {"\b": "\\b","	": "\\t","\n": "\\n","\f": "\\f","\r": "\\r",'"': '\\"',"\\": "\\\\"}, JSON.stringify = function(a, b, c) {
        var d;
        if (gap = "", indent = "", "number" == typeof c)
            for (d = 0; c > d; d += 1)
                indent += " ";
        else
            "string" == typeof c && (indent = c);
        if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length))
            throw new Error("JSON.stringify");
        return str("", {"": a})
    }), "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function(text, reviver) {
        function walk(a, b) {
            var c, d, e = a[b];
            if (e && "object" == typeof e)
                for (c in e)
                    Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
            return reviver.call(a, b, e)
        }
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), define("lib/json2", function() {
});
var slice = [].slice, hasProp = {}.hasOwnProperty;
console.log("def:core_api"), define("cbui_api", ["cbui_const", "jquery", "underscore", "backbone", "underscore.string", "backbone-super", "lib/json2"], function(a, b, c, d) {
    var e, f, g, h, i, j;
    return c.extend(document, d.Events), d.$ = b, c.mixin(c.string.exports()), c.isUndefined(document.hasOwnProperty) && (document.hasOwnProperty = function(a) {
        return Object.hasOwnProperty.call(document, a)
    }), c.isUndefined(window.hasOwnProperty) && (window.hasOwnProperty = function(a) {
        return Object.hasOwnProperty.call(window, a)
    }), Array && c.isUndefined(Array.prototype.forEach) && (Array.prototype.forEach = function(a) {
        var b, c, d;
        for (c = 0, d = this.length; d > c; c++)
            b = this[c], a(b)()
    }), String && c.isUndefined(String.prototype.trim) && (String.prototype.trim = function() {
        return c.trim(this)
    }), Date && c.isUndefined(Date.prototype.format) && (Date.prototype.format = function(a) {
        var b, c, d;
        c = {"M+": this.getMonth() + 1,"d+": this.getDate(),"h+": this.getHours(),"m+": this.getMinutes(),"s+": this.getSeconds(),"q+": Math.floor((this.getMonth() + 3) / 3),S: this.getMilliseconds()}, /(y+)/.test(a) && (a = a.replace(RegExp.$1, ("" + this.getFullYear()).substr(4 - RegExp.$1.length)));
        for (b in c)
            d = c[b], new RegExp("(" + b + ")").test(a) && (a = a.replace(RegExp.$1, 1 === RegExp.$1.length ? d : ("00" + d).substr(("" + d).length)));
        return a
    }), j = c.debounce(function(a, b, d, e) {
        var f;
        f = a.height(), c.isFinite(b) && (b = Math.abs(b) < 1 ? f * b : b, a.animate({scrollTop: b}, d, void 0, e))
    }, 200), i = this, e = {}, f = {}, h = {}, g = {CONST: a,$: b,_: c,Backbone: d,"typeof": function(a) {
            return c.isNull(a) ? "null" : typeof a
        },safeCall: function() {
            var a, b;
            return a = arguments[0], b = 2 <= arguments.length ? slice.call(arguments, 1) : [], c.isFunction(a) ? a.apply(this, b) : a
        },getLocalStorage: function() {
            var b, d;
            try {
                return d = window.localStorage, c.isUndefined(d) ? d = {getItem: function() {
                        return ""
                    },setItem: function() {
                    }} : a.IE_FLAG < 9 && (d = {getItem: function(a) {
                        return window.localStorage[a]
                    },setItem: function(a, b) {
                        window.localStorage[a] = b
                    }}), d
            } catch (e) {
                return b = e, d = {getItem: function() {
                        return ""
                    },setItem: function() {
                    }}, d
            }
        },getTypeVal: function() {
            var a, b, d, e, f, g, h, i;
            for (g = arguments[0], i = 2 <= arguments.length ? slice.call(arguments, 1) : [], g = g.split(","), a = 0, d = i.length; d > a; a++)
                for (h = i[a], b = 0, e = g.length; e > b; b++)
                    if (f = g[b], c["is" + f](h))
                        return h;
            return void 0
        },getNonEmptyVal: function() {
            var a, b, d, e;
            for (e = 1 <= arguments.length ? slice.call(arguments, 0) : [], a = 0, b = e.length; b > a; a++)
                if (d = e[a], !c.isUndefined(d) || !c.isNull(d))
                    return d
        },getDefinedVal: function() {
            var a, b, d, e;
            for (e = 1 <= arguments.length ? slice.call(arguments, 0) : [], a = 0, b = e.length; b > a; a++)
                if (d = e[a], !c.isUndefined(d))
                    return d
        },getTrueVal: function(a) {
            var b, c, d;
            for (b = 0, c = a.length; c > b; b++)
                if (d = a[b], d)
                    return d
        },json2QueryString: function(a) {
            var b, d, e;
            d = "";
            for (b in a)
                e = a[b], d += b, c.isNull(e) || (d += "=" + window.encodeURIComponent(e)), d += "&";
            return d.length > 0 && (d = d.slice(0, -1)), d
        },queryString2Json: function(a) {
            var b, d, e, f, g, h;
            if (!c.isString(a) || "" === a)
                return null;
            for ("?" === a.substring(0, 1) && (a = a.substring(1)), e = {}, g = a.split("&"), b = 0, d = g.length; d > b; b++)
                f = g[b], h = f.split("="), e[h[0]] = c.isUndefined(h[1]) ? void 0 : decodeURIComponent(h[1]);
            return e
        },bindFunctions: function() {
            var a, b, d, e, f, g;
            for (g = arguments[0], d = 2 <= arguments.length ? slice.call(arguments, 1) : [], a = [g], e = 0, f = d.length; f > e; e++)
                b = d[e], c.isString(b) && c.isFunction(g[b]) && a.push(b);
            return a.length > 1 ? c.bindAll.apply(c, a) : g
        },getOs: function() {
            var a;
            return a = navigator.userAgent, /iPhone|iPad|iOS/i.test(a) ? "iOS" : /Android/i.test(a) ? "Android" : /Win/i.test(a) ? "Windows" : /Mac/i.test(a) ? "Mac" : "Unknown"
        },getClassFromName: function(a, b) {
            var d, e, f, g, h;
            if (c.isString(a) && (b = a, a = i), d = b.split("."), 1 === d.length)
                return a[b];
            for (g = a[d[0]], e = 0, f = d.length; f > e; e++)
                h = d[e], g = g[h];
            return g
        },getValue: function(a) {
            return this.getSplitValue(a, 0)
        },getText: function(a) {
            return this.getSplitValue(a, 1)
        },getSplitValue: function(a, b, d) {
            return d = this.getTypeVal("String", d, "|"), c.isString(a) || (a += ""), a = a.split(d), b < a.length ? a[b] : a[0]
        },cacheComponent: function(a) {
            var b;
            return b = null != a ? a.id : void 0, c.isString(b) && (e[b.toLowerCase()] = a), a
        },clearComponent: function() {
            e = {}
        },clearModel: function() {
            var a, b;
            for (a in f)
                b = f[a], b.clear({silent: !0})
        },getComponent: function(a) {
            return e[this.trimTpPrefix(a)]
        },getNewComponent: function(a, b, d, e) {
            var f;
            return e = c.extend(this.getTypeVal("Object", e, {}), {el: a,parent: b}), f = new d(e), this.cacheComponent(f)
        },refreshComponentById: function(a, b) {
            var d, e;
            d = this.getComponent(a), c.isObject(d) ? d.refresh(b) : e = this.getModel(a), c.isObject(e) && e.refresh(b)
        },getModel: function(a) {
            var b;
            return a = this.trimTpPrefix(a), b = this.getComponent(a), c.isObject(b) ? b.model : f[a]
        },addTpPrefix: function(a) {
            return a = a.toLowerCase(), c.startsWith(a, "tp_") || (a = "tp_" + a), a
        },trimTpPrefix: function(a) {
            return a = a.toLowerCase(), c.startsWith(a, "tp_") && (a = a.substring("tp_".length)), a
        },setModels: function(a) {
            var b, c, d, e;
            f = {}, d = this;
            for (c in a)
                hasProp.call(a, c) && (e = a[c], b = d.trimTpPrefix(c), f[b] = e, f[b].id = b)
        },watchWindowResize: function(a, d, e) {
            var f, g, h, i;
            f = {w: b(window).innerWidth(),h: b(window).innerHeight()}, d = this.getTypeVal("Finite", d, 1500), e = e || 40, g = 0, h = d / e, a = c.debounce(a, 100), i = setInterval(function() {
                (f.w !== b(window).innerWidth() || f.h !== b(window).innerHeight()) && (f.w = b(window).innerWidth(), f.h = b(window).innerHeight(), a(f)), (f.stopWatch || d > 0 && g++ > h) && clearInterval(i)
            }, e)
        },parseDate: function(a) {
            return /^\d{8}$/.test(a) ? new Date(a.substr(0, 4) + "-" + a.substr(4, 2) + "-" + a.substr(6, 2)) : null
        },parseTime: function(a) {
            return /^\d{6}$/.test(a) ? new Date("1900-01-01 " + a.substr(0, 2) + ":" + a.substr(2, 2) + ":" + a.substr(4, 2)) : null
        },getAbsoluteOffset: function(a, b) {
            var c;
            for (c = 0; a; )
                c += a["offset" + b], a = a.offsetParent;
            return c
        },scrollToVisualArea: function(a, d, e, f) {
            var h;
            null == d && (d = b(".fw-page-current:eq(0)")), null == e && (e = "center"), h = g.getAbsoluteOffset(a[0], "Top"), h += function() {
                switch (e) {
                    case "top":
                        return 0;
                    case "center":
                        return (a.height() - d.height()) / 2;
                    case "bottom":
                        return a.height() - d.height();
                    default:
                        return c.isFinite(e) ? e : 0
                }
            }(), j(d, h, 150, f)
        },scrollBy: function(a, d, e) {
            var f;
            null == a && (a = b(".fw-page-current:eq(0)")), f = a.height(), d = c.isFinite(d) ? Math.abs(d) < 1 ? f * d : d : 0, j(a, a.scrollTop() + d, 150, e)
        },scrollTo: function(a, c, d) {
            null == a && (a = b(".fw-page-current:eq(0)")), c = function() {
                switch (c) {
                    case "top":
                        return -9999;
                    case "center":
                        return .5;
                    case "bottom":
                        return 9999;
                    default:
                        return c
                }
            }(), j(a, c, 150, d)
        },setPreProcess: function(a) {
            h = a
        },preProcess: function(a, b) {
            return g.safeCall(h, a, b)
        }}, c.extend(g, d.Events)
}), define("libex/libex", ["cbui_api"], function(a) {
    return a.ex = {}, a.ex
}), define("libex/bigint", ["libex/libex"], function(a) {
    function b(a) {
        var b, c, d, e;
        for (c = new Array(a), b = 0; a > b; b++)
            c[b] = 0;
        for (c[0] = 2, d = 0; c[d] < a; ) {
            for (b = c[d] * c[d]; a > b; b += c[d])
                c[b] = 1;
            for (d++, c[d] = c[d - 1] + 1; c[d] < a && c[c[d]]; c[d]++)
                ;
        }
        for (e = new Array(d), b = 0; d > b; b++)
            e[b] = c[b];
        return e
    }
    function c(a, b) {
        return ta.length !== a.length && (ta = K(a), ua = K(a), va = K(a)), M(va, b), d(a, va)
    }
    function d(a, b) {
        var c, d, e, f;
        for (ta.length !== a.length && (ta = K(a), ua = K(a), va = K(a)), L(va, b), L(ua, a), L(ta, a), N(ua, -1), N(ta, -1), e = 0, c = 0; c < ua.length; c++)
            for (d = 1; fa > d; d <<= 1)
                a[c] & d ? (f = e < ua.length + ea ? e : 0, c = ua.length, d = fa) : e++;
        if (f && O(ua, f), ca(va, ua, a), !G(va, 1) && !H(va, ta)) {
            for (d = 1; f - 1 >= d && !H(va, ta); ) {
                if (aa(va, a), G(va, 1))
                    return 0;
                d++
            }
            if (!H(va, ta))
                return 0
        }
        return 1
    }
    function e(a) {
        var b, c, d;
        for (b = a.length - 1; 0 === a[b] && b > 0; b--)
            ;
        for (c = 0, d = a[b]; d; d >>= 1, c++)
            ;
        return c += ea * b, c
    }
    function f(a, b) {
        var c = E(0, (a.length > b ? a.length : b) * ea, 0);
        return L(c, a), c
    }
    function g(a) {
        var b = E(0, a, 0);
        return r(b, a), ba(b, 1)
    }
    function h(a) {
        return a >= 600 ? i(a, 2) : a >= 550 ? i(a, 4) : a >= 500 ? i(a, 5) : a >= 400 ? i(a, 6) : a >= 350 ? i(a, 7) : a >= 300 ? i(a, 9) : a >= 250 ? i(a, 12) : a >= 200 ? i(a, 15) : a >= 150 ? i(a, 18) : a >= 100 ? i(a, 27) : i(a, 40)
    }
    function i(a, c) {
        var e, f, g, h;
        for (h = 3e4, e = E(0, a, 0), 0 === Ca.length && (Ca = b(3e4)), Sa.length !== e.length && (Sa = K(e)); ; ) {
            for (t(e, a, 0), e[0] |= 1, g = 0, f = 0; f < Ca.length && Ca[f] <= h; f++)
                if (0 === D(e, Ca[f]) && !G(e, Ca[f])) {
                    g = 1;
                    break
                }
            for (f = 0; c > f && !g; f++) {
                for (t(Sa, a, 0); !A(e, Sa); )
                    t(Sa, a, 0);
                d(e, Sa) || (g = 1)
            }
            if (!g)
                return e
        }
    }
    function j(a, b) {
        var c = K(a);
        return $(c, b), ba(c, 1)
    }
    function k(a, b) {
        var c = f(a, a.length + 1);
        return N(c, b), ba(c, 1)
    }
    function l(a, b) {
        var c = f(a, a.length + b.length);
        return Z(c, b), ba(c, 1)
    }
    function m(a, b, c) {
        var d = f(a, c.length);
        return ca(d, ba(b, 2), ba(c, 2), 0), ba(d, 1)
    }
    function n(a, b) {
        var c = f(a, a.length > b.length ? a.length + 1 : b.length + 1);
        return X(c, b), ba(c, 1)
    }
    function o(a, b) {
        var c = f(a, a.length > b.length ? a.length + 1 : b.length + 1);
        return Y(c, b), ba(c, 1)
    }
    function p(a, b) {
        var c = f(a, b.length), d;
        return d = w(c, b), d ? ba(c, 1) : null
    }
    function q(a, b, c) {
        var d = f(a, c.length);
        return _(d, b, c), ba(d, 1)
    }
    function r(a, d) {
        var f, g, h, i, j, k, l, m, n, o, p;
        if (0 === Ca.length && (Ca = b(3e4)), 0 === Da.length)
            for (Da = new Array(512), j = 0; 512 > j; j++)
                Da[j] = Math.pow(2, j / 511 - 1);
        f = .1, g = 20;
        var q = 20;
        if (Fa.length !== a.length && (Fa = K(a), Ga = K(a), Ja = K(a), La = K(a), Oa = K(a), Pa = K(a), Qa = K(a), Na = K(a), Ma = K(a), Ea = K(a), Ha = K(a), Ia = K(a), Ka = K(a), Ra = K(a)), q >= d) {
            for (h = (1 << (d + 2 >> 1)) - 1, M(a, 0), i = 1; i; )
                for (i = 0, a[0] = 1 | 1 << d - 1 | Math.floor(Math.random() * (1 << d)), j = 1; j < Ca.length && (Ca[j] & h) === Ca[j]; j++)
                    if (0 === a[0] % Ca[j]) {
                        i = 1;
                        break
                    }
            return C(a), void 0
        }
        if (l = f * d * d, d > 2 * g)
            for (k = 1; g >= d - d * k; )
                k = Da[Math.floor(512 * Math.random())];
        else
            k = .5;
        for (p = Math.floor(k * d) + 1, r(Ia, p), M(Fa, 0), Fa[Math.floor((d - 2) / ea)] |= 1 << (d - 2) % ea, B(Fa, Ia, Ea, Ha), n = e(Ea); ; ) {
            for (; t(Ga, n, 0), !A(Ea, Ga); )
                ;
            for (N(Ga, 1), Y(Ga, Ea), L(Ma, Ia), Z(Ma, Ga), R(Ma, 2), N(Ma, 1), L(La, Ga), R(La, 2), m = 0, j = 0; j < Ca.length && Ca[j] < l; j++)
                if (0 === D(Ma, Ca[j]) && !G(Ma, Ca[j])) {
                    m = 1;
                    break
                }
            if (m || c(Ma, 2) || (m = 1), !m) {
                for (N(Ma, -3), j = Ma.length - 1; 0 === Ma[j] && j > 0; j--)
                    ;
                var s;
                for (o = 0, s = Ma[j]; s; s >>= 1, o++)
                    ;
                for (o += ea * j; t(Ka, o, 0), !A(Ma, Ka); )
                    ;
                if (N(Ma, 3), N(Ka, 2), L(Na, Ka), L(Ja, Ma), N(Ja, -1), ca(Na, Ja, Ma), N(Na, -1), I(Na) && (L(Na, Ka), ca(Na, La, Ma), N(Na, -1), L(Ra, Ma), L(Oa, Na), v(Oa, Ma), G(Oa, 1)))
                    return L(a, Ra), void 0
            }
        }
    }
    function s(a, b) {
        var c, d;
        return c = Math.floor((a - 1) / ea) + 2, d = E(0, 0, c), t(d, a, b), d
    }
    function t(a, b, c) {
        var d, e;
        for (d = 0; d < a.length; d++)
            a[d] = 0;
        for (e = Math.floor((b - 1) / ea) + 1, d = 0; e > d; d++)
            a[d] = Math.floor(Math.random() * (1 << ea - 1));
        a[e - 1] &= (2 << (b - 1) % ea) - 1, 1 === c && (a[e - 1] |= 1 << (b - 1) % ea)
    }
    function u(a, b) {
        var c, d;
        return c = K(a), d = K(b), v(c, d), c
    }
    function v(a, b) {
        var c, d, e, f, g, h, i, j, k;
        for (ra.length !== a.length && (ra = K(a)), k = 1; k; ) {
            for (k = 0, c = 1; c < b.length; c++)
                if (b[c]) {
                    k = 1;
                    break
                }
            if (!k)
                break;
            for (c = a.length; !a[c] && c >= 0; c--)
                ;
            for (d = a[c], e = b[c], f = 1, g = 0, h = 0, i = 1; e + h && e + i; ) {
                j = Math.floor((d + f) / (e + h));
                var l = Math.floor((d + g) / (e + i));
                if (j !== l)
                    break;
                ja = f - j * h, f = h, h = ja, ja = g - j * i, g = i, i = ja, ja = d - j * e, d = e, e = ja
            }
            g ? (L(ra, a), T(a, b, f, g), T(b, ra, i, h)) : ($(a, b), L(ra, a), L(a, b), L(b, ra))
        }
        if (0 !== b[0])
            for (ja = D(a, b[0]), M(a, b[0]), b[0] = ja; b[0]; )
                a[0] %= b[0], ja = a[0], a[0] = b[0], b[0] = ja
    }
    function w(a, b) {
        var c = 1 + 2 * Math.max(a.length, b.length);
        if (!(1 & a[0] || 1 & b[0]))
            return M(a, 0), 0;
        for (xa.length !== c && (xa = new Array(c), wa = new Array(c), ya = new Array(c), za = new Array(c), Aa = new Array(c), Ba = new Array(c)), L(xa, a), L(wa, b), M(ya, 1), M(za, 0), M(Aa, 0), M(Ba, 1); ; ) {
            for (; !(1 & xa[0]); )
                P(xa), 1 & ya[0] || 1 & za[0] ? (Y(ya, b), P(ya), X(za, a), P(za)) : (P(ya), P(za));
            for (; !(1 & wa[0]); )
                P(wa), 1 & Aa[0] || 1 & Ba[0] ? (Y(Aa, b), P(Aa), X(Ba, a), P(Ba)) : (P(Aa), P(Ba));
            if (A(wa, xa) ? (X(wa, xa), X(Aa, ya), X(Ba, za)) : (X(xa, wa), X(ya, Aa), X(za, Ba)), G(xa, 0)) {
                for (; y(Aa); )
                    Y(Aa, b);
                return L(a, Aa), G(wa, 1) ? 1 : (M(a, 0), 0)
            }
        }
    }
    function x(a, b) {
        for (var c = 1, d = 0; ; ) {
            if (1 === a)
                return c;
            if (0 === a)
                return 0;
            if (d -= c * Math.floor(b / a), b %= a, 1 === b)
                return d;
            if (0 === b)
                return 0;
            c -= d * Math.floor(a / b), a %= b
        }
    }
    function y(a) {
        return a[a.length - 1] >> ea - 1 & 1
    }
    function z(a, b, c) {
        var d, e = a.length, f = b.length, g = f > e + c ? e + c : f;
        for (d = f - 1 - c; e > d && d >= 0; d++)
            if (a[d] > 0)
                return 1;
        for (d = e - 1 + c; f > d; d++)
            if (b[d] > 0)
                return 0;
        for (d = g - 1; d >= c; d--) {
            if (a[d - c] > b[d])
                return 1;
            if (a[d - c] < b[d])
                return 0
        }
        return 0
    }
    function A(a, b) {
        var c, d = a.length < b.length ? a.length : b.length;
        for (c = a.length; c < b.length; c++)
            if (b[c])
                return 0;
        for (c = b.length; c < a.length; c++)
            if (a[c])
                return 1;
        for (c = d - 1; c >= 0; c--) {
            if (a[c] > b[c])
                return 1;
            if (a[c] < b[c])
                return 0
        }
        return 0
    }
    function B(a, b, c, d) {
        var e, f, g, h, i, j, k, l;
        for (L(d, a), f = b.length; 0 === b[f - 1]; f--)
            ;
        for (l = b[f - 1], k = 0; l; k++)
            l >>= 1;
        for (k = ea - k, Q(b, k), Q(d, k), e = d.length; 0 === d[e - 1] && e > f; e--)
            ;
        for (M(c, 0); !z(b, d, e - f); )
            W(d, b, e - f), c[e - f]++;
        for (g = e - 1; g >= f; g--) {
            for (d[g] === b[f - 1] ? c[g - f] = fa : c[g - f] = Math.floor((d[g] * ga + d[g - 1]) / b[f - 1]); i = (f > 1 ? b[f - 2] : 0) * c[g - f], j = i >> ea, i &= fa, h = j + c[g - f] * b[f - 1], j = h >> ea, h &= fa, j === d[g] ? h === d[g - 1] ? i > (g > 1 ? d[g - 2] : 0) : h > d[g - 1] : j > d[g]; )
                c[g - f]--;
            U(d, b, -c[g - f], g - f), y(d) && (V(d, b, g - f), c[g - f]--)
        }
        O(b, k), O(d, k)
    }
    function C(a) {
        var b, c, d, e;
        for (c = a.length, d = 0, b = 0; c > b; b++)
            d += a[b], e = 0, 0 > d && (e = -(d >> ea), d += e * ga), a[b] = d & fa, d = (d >> ea) - e
    }
    function D(a, b) {
        var c, d = 0;
        for (c = a.length - 1; c >= 0; c--)
            d = (d * ga + a[c]) % b;
        return d
    }
    function E(a, b, c) {
        var d;
        d = Math.ceil(b / ea) + 1, d = c > d ? c : d;
        var e = new Array(d);
        return M(e, a), e
    }
    function F(a, b, c) {
        var d, e, f, g, h, i = a.length;
        if (-1 === b) {
            for (f = new Array(0); ; ) {
                for (g = new Array(f.length + 1), e = 0; e < f.length; e++)
                    g[e + 1] = f[e];
                if (g[0] = parseInt(a, 10), f = g, d = a.indexOf(",", 0), 1 > d)
                    break;
                if (a = a.substring(d + 1), 0 === a.length)
                    break
            }
            return f.length < c ? (g = new Array(c), L(g, f), g) : f
        }
        for (f = E(0, b * i, 0), e = 0; i > e && (d = ha.indexOf(a.substring(e, e + 1), 0), 36 >= b && d >= 36 && (d -= 26), !(d >= b || 0 > d)); e++)
            R(f, b), N(f, d);
        for (i = f.length; i > 0 && !f[i - 1]; i--)
            ;
        for (i = c > i + 1 ? c : i + 1, g = new Array(i), h = i < f.length ? i : f.length, e = 0; h > e; e++)
            g[e] = f[e];
        for (; i > e; e++)
            g[e] = 0;
        return g
    }
    function G(a, b) {
        var c;
        if (a[0] !== b)
            return 0;
        for (c = 1; c < a.length; c++)
            if (a[c])
                return 0;
        return 1
    }
    function H(a, b) {
        var c, d = a.length < b.length ? a.length : b.length;
        for (c = 0; d > c; c++)
            if (a[c] !== b[c])
                return 0;
        if (a.length > b.length) {
            for (; c < a.length; c++)
                if (a[c])
                    return 0
        } else
            for (; c < b.length; c++)
                if (b[c])
                    return 0;
        return 1
    }
    function I(a) {
        var b;
        for (b = 0; b < a.length; b++)
            if (a[b])
                return 0;
        return 1
    }
    function J(a, b) {
        var c, d, e = "";
        if (pa.length !== a.length ? pa = K(a) : L(pa, a), -1 === b) {
            for (c = a.length - 1; c > 0; c--)
                e += a[c] + ",";
            e += a[0]
        } else
            for (; !I(pa); )
                d = S(pa, b), e = ha.substring(d, d + 1) + e;
        return 0 === e.length && (e = "0"), e
    }
    function K(a) {
        var b = new Array(a.length);
        return L(b, a), b
    }
    function L(a, b) {
        var c, d = a.length < b.length ? a.length : b.length;
        for (c = 0; d > c; c++)
            a[c] = b[c];
        for (c = d; c < a.length; c++)
            a[c] = 0
    }
    function M(a, b) {
        var c, d;
        for (d = b, c = 0; c < a.length; c++)
            a[c] = d & fa, d >>= ea
    }
    function N(a, b) {
        var c, d, e, f;
        for (a[0] += b, d = a.length, e = 0, c = 0; d > c; c++)
            if (e += a[c], f = 0, 0 > e && (f = -(e >> ea), e += f * ga), a[c] = e & fa, e = (e >> ea) - f, !e)
                return
    }
    function O(a, b) {
        var c, d = Math.floor(b / ea);
        if (d) {
            for (c = 0; c < a.length - d; c++)
                a[c] = a[c + d];
            for (; c < a.length; c++)
                a[c] = 0;
            b %= ea
        }
        for (c = 0; c < a.length - 1; c++)
            a[c] = fa & (a[c + 1] << ea - b | a[c] >> b);
        a[c] >>= b
    }
    function P(a) {
        var b;
        for (b = 0; b < a.length - 1; b++)
            a[b] = fa & (a[b + 1] << ea - 1 | a[b] >> 1);
        a[b] = a[b] >> 1 | a[b] & ga >> 1
    }
    function Q(a, b) {
        var c, d = Math.floor(b / ea);
        if (d) {
            for (c = a.length; c >= d; c--)
                a[c] = a[c - d];
            for (; c >= 0; c--)
                a[c] = 0;
            b %= ea
        }
        if (b) {
            for (c = a.length - 1; c > 0; c--)
                a[c] = fa & (a[c] << b | a[c - 1] >> ea - b);
            a[c] = fa & a[c] << b
        }
    }
    function R(a, b) {
        var c, d, e, f;
        if (b)
            for (d = a.length, e = 0, c = 0; d > c; c++)
                e += a[c] * b, f = 0, 0 > e && (f = -(e >> ea), e += f * ga), a[c] = e & fa, e = (e >> ea) - f
    }
    function S(a, b) {
        var c, d = 0, e;
        for (c = a.length - 1; c >= 0; c--)
            e = d * ga + a[c], a[c] = Math.floor(e / b), d = e % b;
        return d
    }
    function T(a, b, c, d) {
        var e, f, g, h;
        for (g = a.length < b.length ? a.length : b.length, h = a.length, f = 0, e = 0; g > e; e++)
            f += c * a[e] + d * b[e], a[e] = f & fa, f >>= ea;
        for (e = g; h > e; e++)
            f += c * a[e], a[e] = f & fa, f >>= ea
    }
    function U(a, b, c, d) {
        var e, f, g, h;
        for (g = a.length < d + b.length ? a.length : d + b.length, h = a.length, f = 0, e = d; g > e; e++)
            f += a[e] + c * b[e - d], a[e] = f & fa, f >>= ea;
        for (e = g; f && h > e; e++)
            f += a[e], a[e] = f & fa, f >>= ea
    }
    function V(a, b, c) {
        var d, e, f, g;
        for (f = a.length < c + b.length ? a.length : c + b.length, g = a.length, e = 0, d = c; f > d; d++)
            e += a[d] + b[d - c], a[d] = e & fa, e >>= ea;
        for (d = f; e && g > d; d++)
            e += a[d], a[d] = e & fa, e >>= ea
    }
    function W(a, b, c) {
        var d, e, f, g;
        for (f = a.length < c + b.length ? a.length : c + b.length, g = a.length, e = 0, d = c; f > d; d++)
            e += a[d] - b[d - c], a[d] = e & fa, e >>= ea;
        for (d = f; e && g > d; d++)
            e += a[d], a[d] = e & fa, e >>= ea
    }
    function X(a, b) {
        var c, d, e;
        for (e = a.length < b.length ? a.length : b.length, d = 0, c = 0; e > c; c++)
            d += a[c] - b[c], a[c] = d & fa, d >>= ea;
        for (c = e; d && c < a.length; c++)
            d += a[c], a[c] = d & fa, d >>= ea
    }
    function Y(a, b) {
        var c, d, e;
        for (e = a.length < b.length ? a.length : b.length, d = 0, c = 0; e > c; c++)
            d += a[c] + b[c], a[c] = d & fa, d >>= ea;
        for (c = e; d && c < a.length; c++)
            d += a[c], a[c] = d & fa, d >>= ea
    }
    function Z(a, b) {
        var c;
        for (ka.length !== 2 * a.length && (ka = new Array(2 * a.length)), M(ka, 0), c = 0; c < b.length; c++)
            b[c] && U(ka, a, b[c], c);
        L(a, ka)
    }
    function $(a, b) {
        na.length !== a.length ? na = K(a) : (L(na, a), oa.length !== a.length, oa = K(a)), B(na, b, oa, a)
    }
    function _(a, b, c) {
        var d;
        for (la.length !== 2 * a.length && (la = new Array(2 * a.length)), M(la, 0), d = 0; d < b.length; d++)
            b[d] && U(la, a, b[d], d);
        $(la, c), L(a, la)
    }
    function aa(a, b) {
        var c, d, e, f, g;
        for (f = a.length; f > 0 && !a[f - 1]; f--)
            ;
        for (g = f > b.length ? 2 * f : 2 * b.length, la.length !== g && (la = new Array(g)), M(la, 0), c = 0; f > c; c++) {
            for (e = la[2 * c] + a[c] * a[c], la[2 * c] = e & fa, e >>= ea, d = c + 1; f > d; d++)
                e = la[c + d] + 2 * a[c] * a[d] + e, la[c + d] = e & fa, e >>= ea;
            la[c + f] = e
        }
        $(la, b), L(a, la)
    }
    function ba(a, b) {
        var c, d;
        for (c = a.length; c > 0 && !a[c - 1]; c--)
            ;
        return d = new Array(c + b), L(d, a), d
    }
    function ca(a, b, c) {
        var d, e, f, g;
        if (qa.length !== c.length && (qa = K(c)), 0 !== (1 & c[0])) {
            for (M(qa, 0), f = c.length; f > 0 && !c[f - 1]; f--)
                ;
            for (g = ga - x(D(c, ga), ga), qa[f] = 1, _(a, qa, c), ma.length !== a.length ? ma = K(a) : L(ma, a), d = b.length - 1; d > 0 & !b[d]; d--)
                ;
            if (0 === b[d])
                return M(a, 1), void 0;
            for (e = 1 << ea - 1; e && !(b[d] & e); e >>= 1)
                ;
            for (; ; ) {
                if (!(e >>= 1)) {
                    if (d--, 0 > d)
                        return da(a, ia, c, g), void 0;
                    e = 1 << ea - 1
                }
                da(a, a, c, g), e & b[d] && da(a, ma, c, g)
            }
        } else
            for (L(qa, a), M(a, 1); !G(b, 0); )
                1 & b[0] && _(a, qa, c), S(b, 2), aa(qa, c)
    }
    function da(a, b, c, d) {
        var e, f, g, h, i, j, k = c.length, l = b.length;
        for (sa.length !== k && (sa = new Array(k)), M(sa, 0); k > 0 && 0 === c[k - 1]; k--)
            ;
        for (; l > 0 && 0 === b[l - 1]; l--)
            ;
        for (j = sa.length - 1, e = 0; k > e; e++) {
            for (i = sa[0] + a[e] * b[0], h = (i & fa) * d & fa, g = i + h * c[0] >> ea, i = a[e], f = 1; l - 4 > f; )
                g += sa[f] + h * c[f] + i * b[f], sa[f - 1] = g & fa, g >>= ea, f++, g += sa[f] + h * c[f] + i * b[f], sa[f - 1] = g & fa, g >>= ea, f++, g += sa[f] + h * c[f] + i * b[f], sa[f - 1] = g & fa, g >>= ea, f++, g += sa[f] + h * c[f] + i * b[f], sa[f - 1] = g & fa, g >>= ea, f++, g += sa[f] + h * c[f] + i * b[f], sa[f - 1] = g & fa, g >>= ea, f++;
            for (; l > f; )
                g += sa[f] + h * c[f] + i * b[f], sa[f - 1] = g & fa, g >>= ea, f++;
            for (; k - 4 > f; )
                g += sa[f] + h * c[f], sa[f - 1] = g & fa, g >>= ea, f++, g += sa[f] + h * c[f], sa[f - 1] = g & fa, g >>= ea, f++, g += sa[f] + h * c[f], sa[f - 1] = g & fa, g >>= ea, f++, g += sa[f] + h * c[f], sa[f - 1] = g & fa, g >>= ea, f++, g += sa[f] + h * c[f], sa[f - 1] = g & fa, g >>= ea, f++;
            for (; k > f; )
                g += sa[f] + h * c[f], sa[f - 1] = g & fa, g >>= ea, f++;
            for (; j > f; )
                g += sa[f], sa[f - 1] = g & fa, g >>= ea, f++;
            sa[f - 1] = g & fa
        }
        A(c, sa) || X(sa, c), L(a, sa)
    }
    var ea = 0, fa = 0, ga = fa + 1, ha = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_=!@#$%^&*()[]{}|;:,.<>/?`~ \\'\"+-";
    for (ea = 0; 1 << ea + 1 > 1 << ea; ea++)
        ;
    ea >>= 1, fa = (1 << ea) - 1, ga = fa + 1;
    var ia = E(1, 1, 1), ja = new Array(0), ka = ja, la = ja, ma = ja, na = ja, oa = ja, pa = ja, qa = ja, ra = ja, sa = ja, ta = ja, ua = ja, va = ja, wa = ja, xa = ja, ya = ja, za = ja, Aa = ja, Ba = ja, Ca = ja, Da = ja, Ea = ja, Fa = ja, Ga = ja, Ha = ja, Ia = ja, Ja = ja, Ka = ja, La = ja, Ma = ja, Na = ja, Oa = ja, Pa = ja, Qa = ja, Ra = ja, Sa = ja;
    return a.BigInt = {getBitSize: e,isNegative: y,copy: K,equals: H,equalsInt: G,isGreater: A,isZero: I,leftShift: Q,rightShift: O,add: o,addInt: k,sub: n,mult: l,divide: B,inverseMod: p,inverseModInt: x,mod: j,modInt: D,powMod: m,multMod: q,randProbPrime: h,randTruePrime: g,randBigInt: s,int2bigInt: function(a, b, c) {
            return b = b || 64, c = c || 16, E(a, b, c)
        },bigInt2str: function(a, b) {
            return b = b || 10, J(a, b)
        },str2bigInt: function(a, b, c) {
            return b = b || 10, c = c || 16, F(a, b, c)
        },GCD: u}, a.BigInt
}), define("libex/byteArray", ["libex/libex"], function(a) {
    return a.string2Bytes = function(b, c) {
        var d, e, f = [];
        if (c && "unicode" !== c.toLowerCase()) {
            if ("utf8" === c.toLowerCase())
                b = a.unicode2Utf8(b);
            else {
                if ("gbk" !== c.toLowerCase())
                    return null;
                b = a.unicode2Ansi(b)
            }
            for (d = 0, e = b.length; e > d; d++)
                f.push(b.charCodeAt(d))
        } else
            for (d = 0, e = b.length; e > d; d++)
                f.push(b.charCodeAt(d) >> 8), f.push(255 & b.charCodeAt(d));
        return f
    }, a.bytes2String = function(b, c) {
        var d, e, f = "";
        if (c && "unicode" !== c.toLowerCase()) {
            for (d = 0, e = b.length; e > d; d++)
                f += String.fromCharCode(b[d]);
            return "utf8" === c.toLowerCase() ? a.utf82Unicode(f) : "gbk" === c.toLowerCase() ? a.ansi2Unicode(f) : null
        }
        for (d = 0, e = b.length; e > d; d += 2)
            f += String.fromCharCode((b[d] << 8) + b[d + 1]);
        return f
    }, a
}), define("libex/md5", ["libex/byteArray"], function(a) {
    function b(a) {
        for (var b = "", c = 0; 3 >= c; c++)
            b += l.charAt(a >> 8 * c + 4 & 15) + l.charAt(a >> 8 * c & 15);
        return b
    }
    function c(a) {
        var b, c = (a.length + 8 >> 6) + 1, d = new Array(16 * c);
        for (b = 0; 16 * c > b; b++)
            d[b] = 0;
        for (b = 0; b < a.length; b++)
            d[b >> 2] |= a[b] << b % 4 * 8;
        return d[b >> 2] |= 128 << b % 4 * 8, d[16 * c - 2] = 8 * a.length, d
    }
    function d(a, b) {
        var c = (65535 & a) + (65535 & b), d = (a >> 16) + (b >> 16) + (c >> 16);
        return d << 16 | 65535 & c
    }
    function e(a, b) {
        return a << b | a >>> 32 - b
    }
    function f(a, b, c, f, g, h) {
        return d(e(d(d(b, a), d(f, h)), g), c)
    }
    function g(a, b, c, d, e, g, h) {
        return f(b & c | ~b & d, a, b, e, g, h)
    }
    function h(a, b, c, d, e, g, h) {
        return f(b & d | c & ~d, a, b, e, g, h)
    }
    function i(a, b, c, d, e, g, h) {
        return f(b ^ c ^ d, a, b, e, g, h)
    }
    function j(a, b, c, d, e, g, h) {
        return f(c ^ (b | ~d), a, b, e, g, h)
    }
    function k(a) {
        for (var e = c(a), f = 1732584193, k = -271733879, l = -1732584194, m = 271733878, n, o, p, q, r = 0; r < e.length; r += 16)
            n = f, o = k, p = l, q = m, f = g(f, k, l, m, e[r + 0], 7, -680876936), m = g(m, f, k, l, e[r + 1], 12, -389564586), l = g(l, m, f, k, e[r + 2], 17, 606105819), k = g(k, l, m, f, e[r + 3], 22, -1044525330), f = g(f, k, l, m, e[r + 4], 7, -176418897), m = g(m, f, k, l, e[r + 5], 12, 1200080426), l = g(l, m, f, k, e[r + 6], 17, -1473231341), k = g(k, l, m, f, e[r + 7], 22, -45705983), f = g(f, k, l, m, e[r + 8], 7, 1770035416), m = g(m, f, k, l, e[r + 9], 12, -1958414417), l = g(l, m, f, k, e[r + 10], 17, -42063), k = g(k, l, m, f, e[r + 11], 22, -1990404162), f = g(f, k, l, m, e[r + 12], 7, 1804603682), m = g(m, f, k, l, e[r + 13], 12, -40341101), l = g(l, m, f, k, e[r + 14], 17, -1502002290), k = g(k, l, m, f, e[r + 15], 22, 1236535329), f = h(f, k, l, m, e[r + 1], 5, -165796510), m = h(m, f, k, l, e[r + 6], 9, -1069501632), l = h(l, m, f, k, e[r + 11], 14, 643717713), k = h(k, l, m, f, e[r + 0], 20, -373897302), f = h(f, k, l, m, e[r + 5], 5, -701558691), m = h(m, f, k, l, e[r + 10], 9, 38016083), l = h(l, m, f, k, e[r + 15], 14, -660478335), k = h(k, l, m, f, e[r + 4], 20, -405537848), f = h(f, k, l, m, e[r + 9], 5, 568446438), m = h(m, f, k, l, e[r + 14], 9, -1019803690), l = h(l, m, f, k, e[r + 3], 14, -187363961), k = h(k, l, m, f, e[r + 8], 20, 1163531501), f = h(f, k, l, m, e[r + 13], 5, -1444681467), m = h(m, f, k, l, e[r + 2], 9, -51403784), l = h(l, m, f, k, e[r + 7], 14, 1735328473), k = h(k, l, m, f, e[r + 12], 20, -1926607734), f = i(f, k, l, m, e[r + 5], 4, -378558), m = i(m, f, k, l, e[r + 8], 11, -2022574463), l = i(l, m, f, k, e[r + 11], 16, 1839030562), k = i(k, l, m, f, e[r + 14], 23, -35309556), f = i(f, k, l, m, e[r + 1], 4, -1530992060), m = i(m, f, k, l, e[r + 4], 11, 1272893353), l = i(l, m, f, k, e[r + 7], 16, -155497632), k = i(k, l, m, f, e[r + 10], 23, -1094730640), f = i(f, k, l, m, e[r + 13], 4, 681279174), m = i(m, f, k, l, e[r + 0], 11, -358537222), l = i(l, m, f, k, e[r + 3], 16, -722521979), k = i(k, l, m, f, e[r + 6], 23, 76029189), f = i(f, k, l, m, e[r + 9], 4, -640364487), m = i(m, f, k, l, e[r + 12], 11, -421815835), l = i(l, m, f, k, e[r + 15], 16, 530742520), k = i(k, l, m, f, e[r + 2], 23, -995338651), f = j(f, k, l, m, e[r + 0], 6, -198630844), m = j(m, f, k, l, e[r + 7], 10, 1126891415), l = j(l, m, f, k, e[r + 14], 15, -1416354905), k = j(k, l, m, f, e[r + 5], 21, -57434055), f = j(f, k, l, m, e[r + 12], 6, 1700485571), m = j(m, f, k, l, e[r + 3], 10, -1894986606), l = j(l, m, f, k, e[r + 10], 15, -1051523), k = j(k, l, m, f, e[r + 1], 21, -2054922799), f = j(f, k, l, m, e[r + 8], 6, 1873313359), m = j(m, f, k, l, e[r + 15], 10, -30611744), l = j(l, m, f, k, e[r + 6], 15, -1560198380), k = j(k, l, m, f, e[r + 13], 21, 1309151649), f = j(f, k, l, m, e[r + 4], 6, -145523070), m = j(m, f, k, l, e[r + 11], 10, -1120210379), l = j(l, m, f, k, e[r + 2], 15, 718787259), k = j(k, l, m, f, e[r + 9], 21, -343485551), f = d(f, n), k = d(k, o), l = d(l, p), m = d(m, q);
        return b(f) + b(k) + b(l) + b(m)
    }
    var l = "0123456789ABCDEF";
    return a.Md5 = {getHashByBytes: k,getHashByString: function(b, c) {
            return c || (c = "utf8"), this.getHashByBytes(a.string2Bytes(b, c))
        }}, a.Md5
}), define("libex/sha1", ["libex/byteArray"], function(a) {
    function b(a) {
        for (var b = "", c = 7; c >= 0; c--)
            b += i.charAt(a >> 4 * c & 15);
        return b
    }
    function c(a) {
        for (var b = (a.length + 8 >> 6) + 1, c = new Array(16 * b), d = 0; 16 * b > d; d++)
            c[d] = 0;
        for (d = 0; d < a.length; d++)
            c[d >> 2] |= a[d] << 24 - d % 4 * 8;
        return c[d >> 2] |= 128 << 24 - d % 4 * 8, c[16 * b - 1] = 8 * a.length, c
    }
    function d(a, b) {
        var c = (65535 & a) + (65535 & b), d = (a >> 16) + (b >> 16) + (c >> 16);
        return d << 16 | 65535 & c
    }
    function e(a, b) {
        return a << b | a >>> 32 - b
    }
    function f(a, b, c, d) {
        return 20 > a ? b & c | ~b & d : 40 > a ? b ^ c ^ d : 60 > a ? b & c | b & d | c & d : b ^ c ^ d
    }
    function g(a) {
        return 20 > a ? 1518500249 : 40 > a ? 1859775393 : 60 > a ? -1894007588 : -899497514
    }
    function h(a) {
        for (var h = c(a), i = new Array(80), j = 1732584193, k = -271733879, l = -1732584194, m = 271733878, n = -1009589776, o = 0; o < h.length; o += 16) {
            for (var p = j, q = k, r = l, s = m, t = n, u, v = 0; 80 > v; v++)
                16 > v ? i[v] = h[o + v] : i[v] = e(i[v - 3] ^ i[v - 8] ^ i[v - 14] ^ i[v - 16], 1), u = d(d(e(j, 5), f(v, k, l, m)), d(d(n, i[v]), g(v))), n = m, m = l, l = e(k, 30), k = j, j = u;
            j = d(j, p), k = d(k, q), l = d(l, r), m = d(m, s), n = d(n, t)
        }
        return b(j) + b(k) + b(l) + b(m) + b(n)
    }
    var i = "0123456789ABCDEF";
    return a.Sha1 = {getHashByBytes: h,getHashByString: function(b, c) {
            return c || (c = "utf8"), this.getHashByBytes(a.string2Bytes(b, c))
        }}, a.Sha1
}), define("libex/rsa", ["libex/libex", "libex/bigint", "libex/md5", "libex/sha1"], function(a, b, c, d) {
    function e(a, c, d) {
        var e, f, g = b.str2bigInt("65537", 10), h = parseInt(a, 10);
        5 > h && (h = 5), (b.equalsInt(g, 2) || b.equalsInt(g, 1) || b.equalsInt(g, 0)) && (g = b.str2bigInt("3", 10));
        for (var i; ; ) {
            for (; ; )
                if (e = b.randTruePrime(h / 2), !b.equalsInt(b.mod(e, g), 1))
                    break;
            for (; ; )
                if (f = b.randTruePrime(h / 2), !b.equals(e, f) && !b.equalsInt(b.mod(f, g), 1))
                    break;
            if (i = b.mult(e, f), b.getBitSize(i) === h)
                break
        }
        var j = b.mult(b.addInt(e, -1), b.addInt(f, -1)), k = b.inverseMod(g, j);
        c.modulus = i, c.exponent = k, c.isPrivateKey = !0, d.modulus = i, d.exponent = g
    }
    function f(a, b, c) {
        if ("PKCS1Padding" === j) {
            for (var d = 2 * b - a.length - 6, e = c ? "01" : "02", f = "", g = 0; d > g; g++)
                f += c ? i[15] : i[Math.floor(15 * Math.random()) + 1];
            return "00" + e + f + "00" + a
        }
        return a
    }
    function g(a) {
        if ("PKCS1Padding" === j) {
            for (var b = 0, c = 0, d = a.length; d > c; c += 2)
                if ("00" === a.substring(c, c + 2)) {
                    b = c;
                    break
                }
            return a.substring(b + 2)
        }
        return a
    }
    function h(c, d, e, h, i) {
        var k = b.getBitSize(e) / 8, l;
        h ? "PKCS1Padding" === j ? l = k - 11 : (j = null, l = k) : l = k;
        for (var m = [], n, o = 0, p = c.length; p > o; o += l)
            n = a.bytes2Hex(c.slice(o, o + l)), j || "00" !== n.substring(0, 2) || (n = "00", o -= l - 1), h && j && (n = f(n, k, i)), n = b.powMod(b.str2bigInt(n, 16), d, e), n = b.bigInt2str(n, 16), n.length % 2 !== 0 && (n = "0" + n), !h && j && (n = g(n)), m = m.concat(a.hex2Bytes(n));
        return m
    }
    var i = "0123456789ABCDEF".split(""), j = "PKCS1Padding";
    return a.Rsa = {setPaddingMode: function(a) {
            j = a
        },genKeyPair: e,encrypt: function(a, b) {
            return h(b, a.exponent, a.modulus, !0, a.isPrivateKey)
        },decrypt: function(a, b) {
            return h(b, a.exponent, a.modulus, !1, a.isPrivateKey)
        },sign: function(b, e, f) {
            f || (f = "sha1");
            var g;
            return g = "md5" === f.toLowerCase() ? c.getHashByBytes(e) : d.getHashByBytes(e), this.encrypt(b, a.hex2Bytes(g))
        },verify: function(b, e, f, g) {
            g || (g = "sha1");
            var h;
            return h = "md5" === g.toLowerCase() ? c.getHashByBytes(e) : d.getHashByBytes(e), 
            f = this.decrypt(b, f), a.bytes2Hex(f) === h
        }}, a.Rsa
}), define("libex/des", ["libex/libex"], function(a) {
    function b(a, b, l, m, n) {
        var o = c(a), p = 0, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E = b.length, F = 0, G = 32 === o.length ? 3 : 9;
        if (x = 3 === G ? l ? new Array(0, 32, 2) : new Array(30, -2, -2) : l ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2), l) {
            var H = 8 - E % 8;
            for (E += H, q = 0; 8 > q; q++)
                b.push(H)
        }
        var I = [], J = [];
        for (1 === m && (y = n[p++] << 24 | n[p++] << 16 | n[p++] << 8 | n[p++], A = n[p++] << 24 | n[p++] << 16 | n[p++] << 8 | n[p], p = 0); E > p; ) {
            for (v = b[p++] << 24 | b[p++] << 16 | b[p++] << 8 | b[p++], w = b[p++] << 24 | b[p++] << 16 | b[p++] << 8 | b[p++], 1 === m && (l ? (v ^= y, w ^= A) : (z = y, B = A, y = v, A = w)), s = 252645135 & (v >>> 4 ^ w), w ^= s, v ^= s << 4, s = 65535 & (v >>> 16 ^ w), w ^= s, v ^= s << 16, s = 858993459 & (w >>> 2 ^ v), v ^= s, w ^= s << 2, s = 16711935 & (w >>> 8 ^ v), v ^= s, w ^= s << 8, s = 1431655765 & (v >>> 1 ^ w), w ^= s, v ^= s << 1, v = v << 1 | v >>> 31, w = w << 1 | w >>> 31, r = 0; G > r; r += 3) {
                for (C = x[r + 1], D = x[r + 2], q = x[r]; q !== C; q += D)
                    t = w ^ o[q], u = (w >>> 4 | w << 28) ^ o[q + 1], s = v, v = w, w = s ^ (e[t >>> 24 & 63] | g[t >>> 16 & 63] | i[t >>> 8 & 63] | k[63 & t] | d[u >>> 24 & 63] | f[u >>> 16 & 63] | h[u >>> 8 & 63] | j[63 & u]);
                s = v, v = w, w = s
            }
            v = v >>> 1 | v << 31, w = w >>> 1 | w << 31, s = 1431655765 & (v >>> 1 ^ w), w ^= s, v ^= s << 1, s = 16711935 & (w >>> 8 ^ v), v ^= s, w ^= s << 8, s = 858993459 & (w >>> 2 ^ v), v ^= s, w ^= s << 2, s = 65535 & (v >>> 16 ^ w), w ^= s, v ^= s << 16, s = 252645135 & (v >>> 4 ^ w), w ^= s, v ^= s << 4, 1 === m && (l ? (y = v, A = w) : (v ^= z, w ^= B)), J.push(v >>> 24, v >>> 16 & 255, v >>> 8 & 255, 255 & v, w >>> 24, w >>> 16 & 255, w >>> 8 & 255, 255 & w), F = l ? F + 16 : F + 8, 512 === F && (I = I.concat(J), J = [], F = 0)
        }
        return I = I.concat(J), l || (I.length -= I[I.length - 1]), I
    }
    function c(a) {
        for (var b = a.length >= 24 ? 3 : 1, c = new Array(32 * b), d = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0), e, f, g = 0, h = 0, i, j = 0; b > j; j++) {
            var k = a.charCodeAt(g++) << 24 | a.charCodeAt(g++) << 16 | a.charCodeAt(g++) << 8 | a.charCodeAt(g++), z = a.charCodeAt(g++) << 24 | a.charCodeAt(g++) << 16 | a.charCodeAt(g++) << 8 | a.charCodeAt(g++);
            i = 252645135 & (k >>> 4 ^ z), z ^= i, k ^= i << 4, i = 65535 & (z >>> -16 ^ k), k ^= i, z ^= i << -16, i = 858993459 & (k >>> 2 ^ z), z ^= i, k ^= i << 2, i = 65535 & (z >>> -16 ^ k), k ^= i, z ^= i << -16, i = 1431655765 & (k >>> 1 ^ z), z ^= i, k ^= i << 1, i = 16711935 & (z >>> 8 ^ k), k ^= i, z ^= i << 8, i = 1431655765 & (k >>> 1 ^ z), z ^= i, k ^= i << 1, i = k << 8 | z >>> 20 & 240, k = z << 24 | z << 8 & 16711680 | z >>> 8 & 65280 | z >>> 24 & 240, z = i;
            for (var A = 0; A < d.length; A++)
                d[A] ? (k = k << 2 | k >>> 26, z = z << 2 | z >>> 26) : (k = k << 1 | k >>> 27, z = z << 1 | z >>> 27), k &= -15, z &= -15, e = l[k >>> 28] | m[k >>> 24 & 15] | n[k >>> 20 & 15] | o[k >>> 16 & 15] | p[k >>> 12 & 15] | q[k >>> 8 & 15] | r[k >>> 4 & 15], f = s[z >>> 28] | t[z >>> 24 & 15] | u[z >>> 20 & 15] | v[z >>> 16 & 15] | w[z >>> 12 & 15] | x[z >>> 8 & 15] | y[z >>> 4 & 15], i = 65535 & (f >>> 16 ^ e), c[h++] = e ^ i, c[h++] = f ^ i << 16
        }
        return c
    }
    var d = new Array(16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756), e = new Array(-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344), f = new Array(520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584), g = new Array(8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928), h = new Array(256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080), i = new Array(536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312), j = new Array(2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154), k = new Array(268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696), l = new Array(0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964), m = new Array(0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697), n = new Array(0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272), o = new Array(0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144), p = new Array(0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256), q = new Array(0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488), r = new Array(0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746), s = new Array(0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568), t = new Array(0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578), u = new Array(0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488), v = new Array(0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800), w = new Array(0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744), x = new Array(0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128), y = new Array(0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261);
    return a.Des = {encrypt: function(a, c, d) {
            return b(a, c, 1, 0, d)
        },decrypt: function(a, c, d) {
            return b(a, c, 0, 0, d)
        }}, a.Des
}), define("libex/unicode.utf8", ["libex/libex"], function(a) {
    return a.unicode2Utf8 = function(a) {
        var b, c, d, e = "";
        for (c = a.length, b = 0; c > b; b++)
            d = a.charCodeAt(b), d >= 0 && 127 >= d ? e += a.charAt(b) : d >= 128 && 2047 >= d ? (e += String.fromCharCode(192 | d >> 6 & 31), e += String.fromCharCode(128 | 63 & d)) : d >= 2048 && 65535 >= d ? (e += String.fromCharCode(224 | d >> 12 & 15), e += String.fromCharCode(128 | d >> 6 & 63), e += String.fromCharCode(128 | 63 & d)) : d >= 65536 && 2097151 >= d ? (e += String.fromCharCode(240 | d >> 18 & 7), e += String.fromCharCode(128 | d >> 12 & 63), e += String.fromCharCode(128 | d >> 6 & 63), e += String.fromCharCode(128 | 63 & d)) : d >= 2097152 && 67108863 >= d ? (e += String.fromCharCode(248 | d >> 24 & 3), e += String.fromCharCode(128 | d >> 18 & 63), e += String.fromCharCode(128 | d >> 12 & 63), e += String.fromCharCode(128 | d >> 6 & 63), e += String.fromCharCode(128 | 63 & d)) : d >= 67108864 && 2147483647 >= d && (e += String.fromCharCode(252 | d >> 30 & 1), e += String.fromCharCode(128 | d >> 24 & 63), e += String.fromCharCode(128 | d >> 18 & 63), e += String.fromCharCode(128 | d >> 12 & 63), e += String.fromCharCode(128 | d >> 6 & 63), e += String.fromCharCode(128 | 63 & d));
        return e
    }, a.utf82Unicode = function(a) {
        for (var b = "", c = a.length, d = 0, e = c, f, g, h; c > d; )
            if (f = a.charCodeAt(d), 0 === (128 & f)) {
                if (1 > e)
                    break;
                b += String.fromCharCode(127 & f), d++, e -= 1
            } else if (192 === (224 & f)) {
                if (g = a.charCodeAt(d + 1), 2 > e || 128 !== (192 & g))
                    break;
                b += String.fromCharCode((63 & f) << 6 | 63 & g), d += 2, e -= 2
            } else {
                if (224 !== (240 & f))
                    break;
                if (g = a.charCodeAt(d + 1), h = a.charCodeAt(d + 2), 3 > e || 128 !== (192 & g) || 128 !== (192 & h))
                    break;
                b += String.fromCharCode((15 & f) << 12 | (63 & g) << 6 | 63 & h), d += 3, e -= 3
            }
        return 0 !== e ? "" : b
    }, a
}), define("libex/hex", ["libex/libex"], function(a) {
    var b = "0123456789ABCDEF".split("");
    return a.bytes2Hex = function(a) {
        for (var c = "", d, e = 0, f = a.length; f > e; e++)
            d = 255 & a[e], c += b[d >> 4] + b[15 & d];
        return c
    }, a.hex2Bytes = function(a) {
        a.length % 2 !== 0 && (a = 0 + a);
        for (var b = [], c = 0, d = a.length; d > c; c += 2)
            b.push(parseInt(a.substring(c, c + 2), 16));
        return b
    }, a.string2Hex = function(a) {
        for (var c = "", d = 0; d < a.length; d++)
            c += b[a.charCodeAt(d) >> 4] + b[15 & a.charCodeAt(d)];
        return c
    }, a.hex2String = function(a) {
        for (var b = "", c = 0; c < a.length; c += 2) {
            var d = parseInt(a.substring(c, c + 2), 16);
            b += String.fromCharCode(d)
        }
        return b
    }, a
});
var hasProp = {}.hasOwnProperty;
console.log("def:core_dependency"), define("cbui_dependency", ["cbui_api"], function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n;
    return b = a.$, c = a._, k = void 0, l = void 0, d = void 0, m = void 0, h = void 0, j = void 0, g = function(a, b) {
        var d, e, f, g, h, i, j, k, l;
        for (g = c.uniq(b.concat(a)), e = 0, j = []; e < g.length; ) {
            for (l = [], d = e, i = g.length; i > d; )
                -1 === c.indexOf(b, g[d]) && (d !== e && (k = [g[e], g[d]], g[d] = k[0], g[e] = k[1]), l.push(g[e]), e++), d++;
            if (0 === l.length) {
                console.error("发现循环依赖..."), j = [];
                break
            }
            for (j.push(l), d = 0, i = l.length; i > d; ) {
                for (f = 0, h = a.length; h > f; )
                    a[f] === l[d] && (a[f] = null, b[f] = null), f++;
                d++
            }
        }
        return j
    }, i = function(a) {
        var b, e, f, g;
        if (g = d[a], c.isUndefined(g)) {
            if (console.log("check ready: " + a), g = !0, e = k[a].i, c.isUndefined(e))
                g = j(a);
            else
                for (b = 0, f = e.length; f > b; ) {
                    if (!i(e[b]) || !j(e[b])) {
                        g = !1;
                        break
                    }
                    b++
                }
            d[a] = g
        } else
            console.log("check ready: " + a + " (cache)");
        return g
    }, e = function(a, b) {
        var f, g, h, j, n, o, p;
        if (c.isString(a)) {
            if (console.group("update dependency: " + a), c.isUndefined(k[a]))
                console.log("not in dependency map: " + a);
            else if (delete d[a], b = b || {}, b[a])
                console.log("skip update: " + a);
            else {
                if (g = k[a].i, c.isUndefined(g) || m(a, i(a)), p = k[a].o, !c.isUndefined(p))
                    for (f = 0, o = p.length; o > f; )
                        e(p[f], b), f++;
                b[a] = !0
            }
            console.groupEnd()
        } else {
            if (console.log("init dependency"), 0 === l.length)
                return;
            for (d = {}, f = 0, o = l[0].length; o > f; )
                a = l[0][f], m(a, !0), f++;
            for (f = 1, o = l.length; o > f; ) {
                for (j = l[f], h = 0, n = j.length; n > h; )
                    a = j[h], m(a, i(j[h])), h++;
                f++
            }
        }
    }, n = function() {
        var a, e, f, h, i, j, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A;
        for (console.group("update dependency map"), t = {}, d = {}, e = b(".fw-page-current").find("[data-dependency]"), h = 0, q = e.length; q > h; )
            a = e[h].id, a || (a = c.uniqueId("dpm_"), e[h].id = a), t[a] = e[h].getAttribute("data-dependency").toLowerCase(), h++;
        r = [], p = [];
        for (m in t)
            if (hasProp.call(t, m) && t[m])
                for (i = c.indexOf(r, m), -1 === i && (r.push(m), p.push([]), i = r.length - 1), n = t[m].split(","), h = 0, q = n.length; q > h; )
                    j = c.indexOf(r, n[h]), -1 === j && (r.push(n[h]), p.push([]), j = r.length - 1), p[i][j] = 1, h++;
        for (f = !0, q = r.length, z = 0; q > z && f; ) {
            for (y = 0; q > y && f; ) {
                for (1 === p[z][y] && (A = 0); q > A; ) {
                    if (1 === p[A][z]) {
                        if (A === z) {
                            f = !1;
                            break
                        }
                        p[A][y] = 1
                    }
                    A++
                }
                y++
            }
            z++
        }
        if (f) {
            for (z = 0; q > z; ) {
                for (y = 0; q > y; ) {
                    if (1 === p[z][y]) {
                        for (w = [], A = 0; q > A; )
                            1 === p[A][y] && w.push(A), A++;
                        for (A = 0; A < w.length; ) {
                            for (f = !0, h = 0; h < w.length; ) {
                                if (1 === p[w[A]][w[h]]) {
                                    f = !1;
                                    break
                                }
                                h++
                            }
                            f || (p[w[A]][y] = 0), A++
                        }
                    }
                    y++
                }
                z++
            }
            for (k = {}, u = [], v = [], z = 0; q > z; ) {
                for (y = 0; q > y; )
                    1 === p[z][y] && (o = r[z], s = r[y], x = k[o] = k[o] || {}, x = x.i = x.i || [], x.push(s), u.push(s), x = k[s] = k[s] || {}, x = x.o = x.o || [], x.push(o), v.push(o)), y++;
                z++
            }
            l = g(u, v)
        } else
            console.error("发现循环依赖"), k = {}, l = [];
        console.groupEnd()
    }, f = {config: function(a) {
            m = a.setEnable, this.isEnable = h = a.isEnable, this.isReady = j = a.isReady
        },updateDependencyMap: n,calcDependency: c.debounce(function(b) {
            var d, f;
            for (console.group("calcDependency: " + b), f = 1, c.isArray(b) ? f = b.length : b = [b], d = 0; f > d && l; )
                e(b[d]), a.safeCall(this.afterCalc, k, l), d++;
            console.groupEnd()
        }, 200)}, f
}), console.log("def:core_template"), define("cbui_template", ["cbui_api"], function(a) {
    var b, c, d, e, f;
    return b = a.$, b('script[type="text/template"][id]').map(function(b, c) {
        c.id = a.addTpPrefix(c.id)
    }), e = {variable: "data",evaluate: /<%([\s\S]+?)%>/g,interpolate: /<%=([\s\S]+?)%>/g,escape: /<%-([\s\S]+?)%>/g}, d = {variable: "data",evaluate: /\[%(\[\s\S]+?)%]/g,interpolate: /\[%=([\s\S]+?)%]/g,escape: /\[%-([\s\S]+?)%]/g}, f = {variable: "data",evaluate: "",interpolate: "",escape: ""}, c = {outerSettings: e,innerSettings: d,textSettings: f,obtainTemplate: function(c, g, h) {
            var i;
            switch (h = a.getTypeVal("Object", h, e), a["typeof"](c)) {
                case "function":
                    return c;
                case "number":
                case "string":
                    return c += "", /#[0-9a-zA-Z_-]+$/.test(c) ? (i = b("#" + a.addTpPrefix(c.substring(1))), i.length > 0 ? this.obtainTemplate(i, g, h) : this.obtainTemplate(g)) : h === f ? c : (h = d, _.template(c.trim(), h));
                case "object":
                    return _.template(c.html().trim(), h);
                default:
                    return _.isUndefined(g) || _.isNull(g) ? void 0 : this.obtainTemplate(g)
            }
        },loading: _.template('<%=data.msg%><img class="fw-loading-img" src="data:image;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOwis">', e),empty: _.template("<%=data.msg%>", e),error: _.template("error:<%=data.msg%>", e)}, c.List = {loading: c.loading,empty: c.empty,error: c.error,content: function(a, b) {
            var d;
            return d = "", -1 === b.indexOf("data-list-item") && (d = 'data-list-item="<%=i%>"'), b = b.replace(/\[%/g, "<%").replace(/%]/g, "%>"), _.template('<div data-refresh-button="down" data-more-template="" data-loading-template="" data-refresh-template="" data-no-more-data-template="">下拉看更多</div><table class="list_table"><%for(var i=0,len=data.' + a.data + ".length;i<len;i++){%><%var item=data." + a.data + "[i]%><tr " + d + ">" + b + '</tr><%}%></table><div data-refresh-button="up">上拉看更多</div>', c.outerSettings)
        }}, c.Select = {content: function(a) {
            return _.template("<% for(var i=0,len=data." + a.data + '.length;i<len;i++){%><option value="<%=i%>" <% if(i===data.' + a.value + "){%> selected <%}%> ><%=" + ALIAS_UI + ".Fn.getText(data." + a.data + "[i]." + a.option + ")%></option><%}%>", c.outerSettings)
        }}, c
});
var slice = [].slice;
if (console.log("def:core_model"), define("cbui_model", ["cbui_api", "cbui_dependency"], function(a, b) {
    var c, d;
    return c = a.CONST, d = {}, a.getModelClass = function(a) {
        return this.getClassFromName(d, a)
    }, d.Base = a.Backbone.Model.extend({initialize: function(b, c) {
            _.defaults(this, {mapping: {error: "errorCode"},ready: !0}), _.isEqual(this.attributes, {}) && !_.isUndefined(this.defVal) ? this.attributes = this.defVal : this.defVal = b, this._pickConfig(c, "initVal", "url", "type", "method", "param", "autoFetch", "timeout", "waiting", "cancelable", "crossPage", "mapping", "filter", "dispatcher", "forwarder", "onSuccess", "onError", "onComplete", "isDataLoading", "isDataEmpty", "isDataReady", "isDataError", "proxy", "component", "preProcess"), a.bindFunctions(this, "onSuccess", "onError", "onComplete", "filter", "dispatcher", "forwarder", "beforeProcess")
        },fetch: function(b) {
            this.proxy || (b = a.getTypeVal("Object", b, {}), this.ready = !1, this.refreshType = a.getTypeVal("String", b.type), _.startsWith(this.url, "model:") || (_.defaults(b, {url: this.url,method: a.getTypeVal("String", b.method, this.method, "POST"),type: a.getTypeVal("String", b.type, this.type),data: a.getTypeVal("Object", b.param, this.param),timeout: a.getTypeVal("Finite", this.timeout),waiting: a.getTypeVal("Boolean", this.waiting),cancelable: a.getTypeVal("Boolean", this.cancelable),crossPage: a.getTypeVal("Boolean", this.crossPage),success: this.onSuccess,error: this.onError,complete: this.onComplete,beforeProcess: this.beforeProcess}), _.defaults(b, c.DEFAULT_REQUEST), delete b.param, _.isString(b.url) && "" !== b.url && a.fetch(b)))
        },refresh: function(b) {
            var c, d, e, f, g, h, i;
            if (!this.proxy) {
                if (b = a.getTypeVal("Object", b, {}), g = this.toJSON(), i = {silent: !0}, h = b.removeVal, _.isString(h))
                    for (h = h.split(","), d = 0, f = h.length; f > d; )
                        this.has(h[d]) && this.unset(h[d], i), d++;
                e = b.initVal, _.isNull(e) ? this.clear(i) : _.isObject(e) && (a.safeCall.call(this, this.dispatcher, e, "init"), b.keepOldVal || this.clear(i), this.set(e, i)), c = !_.isEqual(g, this.toJSON()), !c || _.isUndefined(e) && _.isUndefined(h) || this.trigger("change"), this.fetch(b)
            }
        },onSuccess: function(b, c) {
            console.log("%cfetch success:\n%s", "color:blue", JSON.stringify(c, null, "  ")), a.safeCall.call(this, this.dispatcher, c, this.refreshType), _.isFunction(this.filter) && (c = this.filter(c, this.refreshType), console.log("filter data:" + JSON.stringify(c, null, " "))), _.isNull(c) || _.isUndefined(c) || this.set(c), a.safeCall.call(this, this.forwarder, c, this.refreshType)
        },onError: function(b, c) {
            var d;
            console.error("fetch error:" + b), console.error(c), d = this.component, a.safeCall.call(d, _.isObject(d) ? d.onError : void 0, b, c)
        },onComplete: function(a, c) {
            var d, e;
            console.log("%cfetch complete: %s %o", "color:blue", a, c), this.type = void 0, this.ready = "success" === a, d = this.component, e = _.isObject(d) && _.isString(d.id) ? d.id : this.id, b.calcDependency(e)
        },isReady: function() {
            return this.proxy ? this.proxy.ready : this.ready
        },dispatch: function(b, c) {
            var d, e, f, g, h;
            if (!this.proxy)
                for (f = _.keys(b), e = 0, h = f.length; h > e; )
                    d = b[f[e]], _.isObject(d) && (g = a.getModel(f[e]), _.isObject(g) && g.set(d, c)), e++
        },forward: function(b) {
            var c, d, e, f, g;
            if (!this.proxy)
                for (e = _.keys(b), d = 0, g = e.length; g > d; )
                    c = b[e[d]], _.isObject(c) && (f = a.getModel(e[d]), _.isObject(f) && f.refresh(c)), d++
        },_pickConfig: function() {
            var a, b, c, d, e;
            if (a = arguments[0], e = 2 <= arguments.length ? slice.call(arguments, 1) : [], !_.isUndefined(a))
                for (b = 0, c = e.length; c > b; b++)
                    d = e[b], _.isUndefined(a[d]) || (this[d] = a[d])
        },isDataLoading: function() {
            return _.isUndefined(this.getData())
        },isDataEmpty: function() {
            var a;
            return a = this.getData(), _.isFinite(a) ? !1 : _.isEmpty(a)
        },isDataError: function() {
            return !_.isUndefined(this.get(this.mapping.error))
        },isDataReady: function() {
            return !0
        },getStatus: function() {
            var a;
            return a = _.isString(this.mapping.data), this.isDataError() ? "error" : a && this.isDataLoading() ? "loading" : a && this.isDataEmpty() ? "empty" : this.isDataReady() ? "ready" : "unknown"
        },setValue: function(a, b) {
            var c, d;
            d = this.mapping, this.proxy ? (b = _.extend(b || {}, {silent: !0}), _.isString(d.name) ? (c = this.get(d.name), _.isObject(c) ? c[d.value] = a : this.set(d.name, a, b)) : this.proxy.set(d.value, a, b)) : this.set(d.value, a, b)
        },getValue: function() {
            var a, b;
            return b = this.mapping, this.proxy ? _.isString(b.name) ? (a = this.get(b.name), _.isObject(a) ? a[b.value] : a) : this.proxy.get(b.value) : this.get(b.value)
        },getData: function() {
            var a, b;
            return b = this.mapping, this.proxy ? _.isString(b.name) ? (a = this.get(b.name), _.isObject(a) ? a[b.data] : a) : this.proxy.get(b.data) : this.get(b.data)
        },get: function(a) {
            return this.proxy ? this.proxy.get(a) : this._super(a)
        },set: function(a, b, c) {
            return this.proxy ? this.proxy.set(a, b, c) : this._super(a, b, c)
        },toJSON: function() {
            var a, b, c;
            return b = this.mapping, this.proxy ? _.isString(b.name) ? (a = this.get(b.name), _.isObject(a) ? a : (c = {}, c[b.value] = a, c)) : this.proxy.toJSON() : this._super()
        },beforeProcess: function(b, c) {
            return _.isFunction(this.preProcess) ? this.preProcess(b, c) : a.preProcess(b, c)
        }}), d.Simple = d.Base.extend({fetch: function() {
        }}), d.CBJSON = d.Base.extend({}), d.Input = d.Simple.extend({validate: function(a) {
            var b, c, d, e, f;
            if (b = this.component.$el, f = a[this.mapping.value], c = "v-required", d = b.data(c), d && d === !0 && (e = b.data(c + "-msg"), _.isUndefined(f) || _.isNull(f) || "" === f))
                return e ? e : "输入不能为空！";
            if (_.isString(f)) {
                if (c = "v-min-len", d = b.data(c), d && f.length < d)
                    return e = b.data(c + "-msg"), e ? e : "输入数据长度应大于等于" + d + "！";
                if (c = "v-max-len", d = b.data(c), d && f.length > d)
                    return e = b.data(c + "-msg"), e ? e : "输入数据长度应小于等于" + d + "！";
                if (c = "v-regex", d = b.data(c), d && !f.match(d))
                    return e = b.data(c + "-msg"), e ? e : "数据格式不正确！";
                if (c = "v-neq", d = b.data(c), d && f === d)
                    return e = b.data(c + "-msg"), e ? e : "输入数据不应等于" + d + "！";
                if (c = "v-eq", d = b.data(c), d && f !== d)
                    return e = b.data(c + "-msg"), e ? e : "输入数据应等于" + d + "！"
            }
            return null
        }}), d.Amount = d.Input.extend({validate: function(a) {
            var b, c, d, e, f, g;
            return e = this._super(a), e ? this._super(a) : (b = this.component.$el, g = a[this.mapping.value], c = "v-min", d = b.data(c), d && 0 > g - d ? (f = b.data(c + "-msg"), f ? f : "输入数据不应小于" + d + "！") : (c = "v-max", d = b.data(c), d && g - d > 0 ? (f = b.data(c + "-msg"), f ? f : "输入数据不应大于" + d + "！") : null))
        }}), d
}), console.log("def:core_component"), define("cbui_component", ["cbui_api", "cbui_dependency", "cbui_model", "cbui_template"], function(a, b, c, d) {
    var e, f, g, h;
    return e = a.$, f = {}, a.getComponentClass = function(a) {
        return this.getClassFromName(f, a)
    }, f.Base = Backbone.View.extend({initialize: function(b) {
            var e, f, g, h, i, j, k, l;
            if (_.defaults(this, {dependencySelf: !0,defMod: "Simple",defParam: void 0,cacheable: !0,enable: !0}), this.$el.off(), a.bindFunctions(this, "render", "getValue", "setValue", "onDragRefresh"), this.parent = b.parent || this.parent, this.loadingTemplate = d.obtainTemplate(this.$el.attr("data-loading-template"), d.loading), this.emptyTemplate = d.obtainTemplate(this.$el.attr("data-empty-template"), d.empty), this.errorTemplate = d.obtainTemplate(this.$el.attr("data-error-template"), d.error), this.template = d.obtainTemplate(a.getTypeVal("String,Function,Object", b.template, this.$el.attr("data-template"), this.template)), h = a.getTypeVal("String", b.id, this.$el.attr("id")), _.isString(h) && "" !== h ? this.id = h.toLowerCase() : this.id = _.uniqueId("#"), this.autoId = _.startsWith(this.id, "#"), this.$el.attr("id") !== this.id && this.$el.attr("id", this.id), i = void 0, this.autoId) {
                if (i = a.getTypeVal("Object", b.model, this.model), !_.isObject(i)) {
                    for (j = this.parent; _.isObject(j) && (i = j.model, !_.isObject(i)); )
                        j = this.parent;
                    i = new c.Base(null, {proxy: i})
                }
            } else
                this.cacheable && (i = a.getModel(h)), _.isObject(i) || (f = a.getTypeVal("String,Object", this.$el.attr("data-model"), this.defMod), _.isObject(f) || (e = a.getModelClass(f), _.isFunction(e) || (e = c.Simple), g = a.getTypeVal("String,Object", this.$el.attr("data-model-param"), this.defParam), _.isString(g) && (g = JSON.parse(g)), i = _.isObject(g) ? new e(g) : new e));
            i.mapping.name = a.getTypeVal("String", i.mapping.name, this.$el.attr("data-name")), i.off(), i.on("change", this.render), i.component = this, i.url && i.autoFetch && i.fetch(), this.model = i, _.isFunction(this.$el.tooltip) && (l = d.obtainTemplate(this.$el.data("tooltip-text")), _.isFunction(l) && (k = d.obtainTemplate(this.$el.data("tooltip-template")), k = a.safeCall(k, {}), _.isString(k) && (k = k.trim()), this.$el.tooltip({title: l({}),placement: this.$el.data("tooltip-placement") || "right",template: k})))
        },render: function() {
            console.group("render: id=" + this.id), console.group("beforeRender"), this.beforeRender() === !0 && (console.group("doRender"), this.doRender() === !0 && (console.group("afterRender"), this.afterRender(), console.groupEnd()), console.groupEnd()), console.groupEnd(), console.group("finalRender"), this.finalRender(), console.groupEnd(), console.groupEnd()
        },beforeRender: function() {
            return !0
        },doRender: function() {
            var b, c, d, e;
            return c = this.model, _.isUndefined(c) ? !1 : (d = c.getStatus(), e = "ready" === d ? this.template : this[d + "Template"], b = a.safeCall(e, _.extend(this.getExData(d), c.toJSON())), _.isString(b) && this.$el.html(b), !0)
        },afterRender: function() {
        },finalRender: function() {
        },getExData: function(a) {
            return {}
        },refresh: function() {
            console.group("refresh " + this.id), console.group("beforeRefresh"), this.beforeRefresh.apply(this, arguments) === !0 && (console.group("doRrefresh"), this.doRefresh.apply(this, arguments) === !0 && (console.group("afterRefresh"), this.afterRefresh.apply(this, arguments), console.groupEnd()), console.groupEnd()), console.groupEnd(), console.group("finalRefresh"), this.finalRefresh.apply(this, arguments), console.groupEnd()
        },beforeRefresh: function() {
            return !0
        },doRefresh: function() {
            return _.isUndefined(this.model) ? !1 : (this.model.refresh.apply(this.model, arguments), !0)
        },afterRefresh: function() {
            b.calcDependency(this.id)
        },finalRefresh: function() {
        },bindEvent: function(a, b) {
            this.events || (this.events = {}), this.events[a] = b
        },setValue: function(a, b) {
            _.isObject(this.model) && this.model.setValue(a, b)
        },getValue: function() {
            return _.isObject(this.model) ? this.model.getValue() : void 0
        },setEnable: function(a) {
            this.enable = a, a === !0 ? this.$el.removeAttr("disabled") : this.$el.attr("disabled", "true")
        },isEnable: function() {
            return this.enable
        },setVisibility: function(a) {
        },reset: function() {
            _.isObject(this.model) && this.model.clear()
        },isReady: function() {
            return _.isObject(this.model) ? this.model.isReady() : !0
        },isBadClick: function() {
            var a;
            return a = this._lastClick || 0, this._lastClick = new Date, new Date - a < 500
        }}), f.Container = f.Base.extend({afterRender: function() {
            var b, c, d, f, g, h, i, j;
            for (this._super(), d = this.$("[data-component]"), g = 0, h = d.length; h > g; g++)
                if (f = d[g], j = f.parentNode, i = !0, j) {
                    for (; j !== this.el; ) {
                        if (!j || j.getAttribute("data-component")) {
                            i = !1;
                            break
                        }
                        j = j.parentNode
                    }
                    i && (c = f.getAttribute("data-component"), b = a.getComponentClass(c), b ? (c = a.getNewComponent(e(f), this, b), c.render()) : console.error(c + " is undefined!"))
                }
        }}), f.Form = f.Container.extend({initialize: function(b) {
            this._super(b), !_.isFunction(this.doSubmit) && this.parent && _.isFunction(this.parent.doSubmit) && (this.doSubmit = this.parent.doSubmit), a.bindFunctions(this, "onSubmit", "doSubmit"), this.bindEvent("click [data-submit-button]", this._onSubmit)
        },_onSubmit: function(b) {
            var c, d, e, f, g, h, i, j, k;
            if (_.isFunction(this.onSubmit) || _.isFunction(this.doSubmit)) {
                if (b.stopPropagation(), this.isBadClick())
                    return;
                for (e = {}, c = this.$("*"), g = 0, h = c.length; h > g; )
                    f = c[g], i = f.getAttribute("data-name"), i && (d = a.getComponent(f.id), d && _.isFunction(d.getValue) && (k = d.getValue(), _.isUndefined(k) || (d.isValueGroup ? (_.isUndefined(e[i]) && (e[i] = []), e[i].push(k)) : e[i] = k))), g++;
                j = b.currentTarget.getAttribute("data-submit-button"), _.isFunction(this.onSubmit) && (e = this.onSubmit(_.extend(this.model.toJSON(), e), j, b)), a.safeCall.call(this, _.isObject(e) ? this.doSubmit : void 0, e)
            }
        }}), f.Button = f.Container.extend({initialize: function(a) {
            this._super(a), this.bindEvent("click", this._onClick)
        },setEnable: function(a) {
            a === !0 ? this.$el.removeAttr("disabled") : this.$el.attr("disabled", "disabled")
        },_onClick: function(b) {
            this.isBadClick() || b.currentTarget.disabled || a.safeCall.call(this, this.onClick, b)
        }}), f.Label = f.Base.extend({initialize: function(a) {
            var b;
            this._super(a), b = this.model, b.mapping.data = b.mapping.name, b.mapping.value = b.mapping.name, _.isUndefined(this.template) && (this.template = d.obtainTemplate("[%=data." + b.mapping.value + "%]")), _.isUndefined(b.getValue()) && b.setValue(this.$el.attr("data-value"), {silent: !0})
        }}), h = function(a) {
        var b, c;
        return b = "", c = a.types, c ? /text\/plain/.test(c) ? b = a.getData("text/plain") : /text\/html/.test(c) && (b = a.getData("text/html")) : b = a.getData("Text"), b
    }, g = function(a) {
        var b, c, d, e, f, g, h;
        return "selectionStart" in a ? (b = a.selectionEnd - a.selectionStart, {start: a.selectionStart,end: a.selectionEnd,length: b,text: a.value.substr(a.selectionStart, b)}) : document.selection ? (a.focus(), c = document.selection.createRange(), g = a.createTextRange(), h = g.duplicate(), h.moveToBookmark(c.getBookmark()), g.setEndPoint("EndToStart", h), null === c || null === g ? {start: a.value.length,end: a.value.length,length: 0,text: ""} : (d = c.text.replace(/[\r\n]/g, "."), e = a.value.replace(/[\r\n]/g, "."), f = e.indexOf(d, g.text.length), {start: f,end: f + d.length,length: d.length,text: d})) : void 0
    }, f.Input = f.Base.extend({initialize: function(b) {
            var c, d, f;
            _.defaults(this, {dependencySelf: !1,defMod: "Input"}), this._super(b), d = this.model, d.mapping.value = a.getTypeVal("String", d.mapping.name, "value"), this.infoTemplate || (this.infoTemplate = '<div class="bubble-box arrow-bottom"><div class="wrap"><%=msg%></div></div>'), f = this, c = this.$el, this.isKeyup = !0, c.on("keydown", function(a) {
                var b, c, d, e, h;
                if (b = a.currentTarget, e = f._oldVal = b.value, 8 === a.keyCode) {
                    if (c = void 0, h = g(b), d = e.substring(0, h.start) + e.substring(h.end, e.length), -1 === a.keyCode && h.start === h.end)
                        return a.preventDefault(), !1;
                    d = h.start === h.end ? e.substring(0, h.start - 1) + e.substring(h.start, e.length) : e.substring(0, h.start) + e.substring(h.end, e.length), f.onInput(a, c, e, d)
                }
            }), c.on("keypress", function(a) {
                var b, c, d, e, h;
                f.isKeyup = !1, c = String.fromCharCode(a.which), b = a.currentTarget, e = b.value, h = g(b), d = e.substring(0, h.start) + c + e.substring(h.end, e.length), f.onInput(a, c, e, d)
            }), c.on("input propertychange", function(a) {
                var b, d, h, i, j;
                return f.isKeyup && (b = a.currentTarget, h = b.value, j = g(b), d = h.slice(j.start - 1, j.end), i = f._oldVal, f.onInput(a, d, i, h) || "" === e.trim(h) || (h = h.substring(0, h.length - 1), c.val(h).trigger("input"))), f.isKeyup = !0
            }), c.on("paste", function(a) {
                var b, c, d, e, i;
                b = a.currentTarget, c = void 0, c = a.originalEvent.clipboardData ? h(a.originalEvent.clipboardData) : window.clipboardData && window.clipboardData.getData ? window.clipboardData.getData("Text") : null, e = b.value, i = g(b), d = e.substring(0, i.start) + c + e.substring(i.end, e.length), f.onInput(a, c, e, d)
            }), c.on("drop", function() {
                return !1
            }), d.on("change", function() {
                f._onInputChange(f.getValue())
            }), _.isUndefined(this.getValue()) && this.setValue(a.getTypeVal("String", c.val()))
        },onInput: function(a, b, c, d) {
            return _.isNull(b) || this.checkInput(b, c, d) === !1 ? (a.currentTarget.value = c, a.preventDefault(), a.returnValue = !1, !1) : (this._onInputChange(d, a), !0)
        },checkInput: function(a, b, c) {
            return !0
        },_onInputChange: function(c, e) {
            var f, g, h, i;
            this.model.setValue(c, {silent: !0,validate: !0}), i = this, this.model.validationError ? (h = d.obtainTemplate(i.$el.data("err-tip-template")), h = a.safeCall(h, {}), _.isString(h) && (h = h.trim()), "function" == typeof (f = i.$el).tooltip && f.tooltip("destroy").tooltip({title: this.model.validationError,placement: i.$el.data("err-tip-placement") || "right",template: h,trigger: "manual"}).tooltip("show"), this.model.setValue(c, {silent: !0})) : "function" == typeof (g = i.$el).tooltip && g.tooltip("destroy"), b.calcDependency(this.id), a.safeCall.call(this, this.onInputChange, c, e)
        },doRender: function() {
            var a;
            return a = this.getValue(), this.$el.val() !== a && this.$el.val(a), !0
        },isReady: function() {
            var a, b;
            return a = {}, a[this.model.mapping.value] = this.getValue(), b = this.model.validate(a), null === b
        }}), f.Amount = f.Input.extend({initialize: function(a) {
            _.defaults(this, {defMod: "Amount"}), this._super(a)
        }}), f.Password = f.Base.extend({initialize: function(c) {
            var d, f, g, h, i;
            _.defaults(this, {defMod: "Input",dependencySelf: !1,cacheable: !1}), this._super(c), h = this.model, h.mapping.value = a.getTypeVal("String", h.mapping.name, "value"), d = this.$el, d.attr("readonly", "true"), d.off(), h.component = this, i = this, g = d.data("keyboard-type"), "number" === g && (g = 2), f = {mask: d.data("mask"),random: d.data("random") || !1,encryptor: d.data("encryptor"),keyboardType: g,maxLength: d.data("v-max-len") || 64,onInput: function(c) {
                    h.setValue(c.value, {validate: !0,silent: !0}), d.val(c.text), a.safeCall.call(i, i.onInputChange, c), b.calcDependency(d.id)
                },onDelete: function(c) {
                    h.setValue(c.value, {validate: !0,silent: !0}), d.val(c.text), a.safeCall.call(i, i.onInputChange, c), b.calcDependency(d.id)
                },onSubmit: function(a) {
                },onKeyboardPopup: function() {
                }}, this.bindEvent("click", function() {
                var b, c, g, h;
                i.reset(), d.off("blur"), d.blur(), d.focus(), b = 0, c = e(".fw-page-current")[0], h = c.scrollTop, g = function() {
                    h === c.scrollTop ? b++ : (b = 0, h = c.scrollTop), b > 5 ? (d.focus(), d.on("blur", function() {
                        a.trigger("bridge:hideKeyboard")
                    })) : setTimeout(g, 100)
                }, setTimeout(g, 100), a.trigger("bridge:showKeyboard", f)
            })
        },doRender: function() {
            var a;
            return a = this.getValue(), this.$el.val() !== a && this.$el.val(a), !0
        },isReady: function() {
            return null === this.model.validationError
        }}), f.Password = f.Base.extend({initialize: function(c) {
            var d, f, g, h, i, j, k, l;
            _.defaults(this, {defMod: "Input",dependencySelf: !1,cacheable: !1}), this._super(c), k = this.model, 
            k.mapping.value = a.getTypeVal("String", k.mapping.name, "value"), f = this.$el, f.css({overflow: "hidden"}), g = e("<span></span>"), f.append(g), this.$input = g, d = e('<img class="fw-i-img" src="data:image;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOwis">'), f.append(d), d.hide(), f.off(), k.component = this, l = this, i = f.data("keyboard-type"), "number" === i && (i = 2), j = f.data("mask") === !0, h = {mask: j,random: f.data("random") || !1,encryptor: f.data("encryptor"),keyboardType: i,maxLength: f.data("v-max-len") || 64,$el: f,onInput: function(c) {
                    k.setValue(c.value, {validate: !0,silent: !0}), g.html(j ? c.text.replace(/./g, "*") : c.text), a.safeCall.call(l, l.onInputChange, c), b.calcDependency(f.id)
                },onDelete: function(c) {
                    k.setValue(c.value, {validate: !0,silent: !0}), g.html(c.text), a.safeCall.call(l, l.onInputChange, c), b.calcDependency(f.id)
                },onSubmit: function() {
                    f.blur()
                },onKeyboardPopup: function() {
                }}, this.bindEvent("click", function() {
                var b, c, g, i;
                l.reset(), f.off("blur"), f.blur(), f.focus(), d.show(), b = 0, c = e(".fw-page-current")[0], i = c.scrollTop, g = function() {
                    i === c.scrollTop ? b++ : (b = 0, i = c.scrollTop), b > 5 ? (f.focus(), f.on("blur", function() {
                        d.hide()
                    })) : setTimeout(g, 100)
                }, setTimeout(g, 100), a.trigger("bridge:showKeyboard", h)
            })
        },doRender: function() {
            var a;
            return a = this.getValue(), this.$input.html() !== a && this.$input.html(_.isUndefined(a) ? "" : a), !0
        },isReady: function() {
            return null === this.model.validationError
        }}), f.Select = f.Base.extend({initialize: function(b) {
            var c, e;
            this._super(b), e = this.model, this.bindEvent("change", function() {
                e.setValue(parseInt(this.$el.val()))
            }), c = a.getTypeVal("Object", e.mapping, {}), c.value = a.getTypeVal("String", c.value, "selected"), c.data = a.getTypeVal("String", c.data, "select"), c.option = a.getTypeVal("String", c.option, "option"), c.select = c.data, a.bindFunctions(this, "_onSelectChange"), e.on("change", this._onSelectChange), _.isUndefined(this.template) && (this.template = d.Select.content(c)), this.model.trigger("change")
        },_onSelectChange: function(b) {
            var c, d, e;
            e = this.model, c = e.getValue(), d = e.getData(), _.isArray(d) && d[c] && a.safeCall.call(this, this.onSelectChange, d[c], c, b)
        },getValue: function() {
            var b, c, d;
            return c = this.model, d = parseInt(c.getValue()), b = c.getData(), b && b[d] ? a.getValue(b[d][c.mapping.option]) : -1
        },reset: function() {
            var a;
            a = this.model, _.isObject(a) && a.unset(a.mapping.value)
        }}), f.List = f.Container.extend({initialize: function(b) {
            var c, e, f;
            this._super(b), this.bindEvent("click [data-list-item]", this._onListItemClick), f = this.model, _.isUndefined(f) || (e = f.mapping = a.getTypeVal("Object", f.mapping, {}), e.data = a.getTypeVal("String", e.data, "list"), e.list = e.data, _.isUndefined(this.template) && (c = d.obtainTemplate(this.$el.attr("data-item-template"), "", d.textSettings), this.template = d.List.content(e, a.safeCall(c))))
        },_onListItemClick: function(a) {
            var b, c, d;
            this.isBadClick() || (d = this.model.getData(), c = a.currentTarget.getAttribute("data-list-item"), _.isArray(d) && _.isObject(d[c]) && (b = a.target.getAttribute("data-item-action"), this.onListItemClick && this.onListItemClick(d[c], c, b, a)))
        },getValue: function() {
            return null
        }}), f
}), FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), FastClick.prototype.needsClick = function(a) {
    "use strict";
    switch (a.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (a.disabled)
                return !0;
            break;
        case "input":
            if (this.deviceIsIOS && "file" === a.type || a.disabled)
                return !0;
            break;
        case "label":
        case "video":
            return !0
    }
    return /\bneedsclick\b/.test(a.className)
}, FastClick.prototype.needsFocus = function(a) {
    "use strict";
    switch (a.nodeName.toLowerCase()) {
        case "textarea":
        case "select":
            return !0;
        case "input":
            switch (a.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
            }
            return !a.disabled && !a.readOnly;
        default:
            return /\bneedsfocus\b/.test(a.className)
    }
}, FastClick.prototype.sendClick = function(a, b) {
    "use strict";
    var c, d;
    document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent("click", !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
}, FastClick.prototype.focus = function(a) {
    "use strict";
    var b;
    this.deviceIsIOS && a.setSelectionRange ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
}, FastClick.prototype.updateScrollParent = function(a) {
    "use strict";
    var b, c;
    if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
        c = a;
        do {
            if (c.scrollHeight > c.offsetHeight) {
                b = c, a.fastClickScrollParent = c;
                break
            }
            c = c.parentElement
        } while (c)
    }
    b && (b.fastClickLastScrollTop = b.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function(a) {
    "use strict";
    return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
}, FastClick.prototype.onTouchStart = function(a) {
    "use strict";
    var b, c, d;
    if (a.targetTouches.length > 1)
        return !0;
    if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], this.deviceIsIOS) {
        if (d = window.getSelection(), d.rangeCount && !d.isCollapsed)
            return !0;
        if (!this.deviceIsIOS4) {
            if (c.identifier === this.lastTouchIdentifier)
                return a.preventDefault(), !1;
            this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
        }
    }
    return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < 200 && a.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function(a) {
    "use strict";
    var b = a.changedTouches[0], c = this.touchBoundary;
    return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1
}, FastClick.prototype.findControl = function(a) {
    "use strict";
    return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function(a) {
    "use strict";
    var b, c, d, e, f, g = this.targetElement;
    if ((this.touchHasMoved(a) || a.timeStamp - this.trackingClickStart > 300) && (this.trackingClick = !1, this.targetElement = null), !this.trackingClick)
        return !0;
    if (a.timeStamp - this.lastClickTime < 200)
        return this.cancelNextClick = !0, !0;
    if (this.lastClickTime = a.timeStamp, c = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (f = a.changedTouches[0], g = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset)), d = g.tagName.toLowerCase(), "label" === d) {
        if (b = this.findControl(g), b) {
            if (this.focus(g), this.deviceIsAndroid)
                return !1;
            g = b
        }
    } else if (this.needsFocus(g))
        return a.timeStamp - c > 100 || this.deviceIsIOS && window.top !== window && "input" === d ? (this.targetElement = null, !1) : (this.focus(g), this.deviceIsIOS4 && "select" === d || (this.targetElement = null, a.preventDefault()), !1);
    return this.deviceIsIOS && !this.deviceIsIOS4 && (e = g.fastClickScrollParent, e && e.fastClickLastScrollTop !== e.scrollTop) ? !0 : (this.needsClick(g) || (a.preventDefault(), this.sendClick(g, a)), !1)
}, FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick = !1, this.targetElement = null
}, FastClick.prototype.onMouse = function(a) {
    "use strict";
    return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
}, FastClick.prototype.onClick = function(a) {
    "use strict";
    var b;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
}, FastClick.prototype.destroy = function() {
    "use strict";
    var a = this.layer;
    this.deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function(a) {
    "use strict";
    var b;
    if ("undefined" == typeof window.ontouchstart)
        return !0;
    if (/Chrome\/[0-9]+/.test(navigator.userAgent)) {
        if (!FastClick.prototype.deviceIsAndroid)
            return !0;
        if (b = document.querySelector("meta[name=viewport]"), b && -1 !== b.content.indexOf("user-scalable=no"))
            return !0
    }
    return "none" === a.style.msTouchAction ? !0 : !1
}, FastClick.attach = function(a) {
    "use strict";
    return new FastClick(a)
}, "undefined" != typeof define && define.amd ? define("fastclick", [], function() {
    "use strict";
    return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick, console.log("def:core_browser"), define("cbui_browser", ["cbui_api", "cbui_dependency", "cbui_template", "cbui_component", "fastclick"], function(a, b, c, d, e) {
    var f, g, h, i, j, k, l, m;
    return i = a.CONST, f = a.$, d.Page = d.Form.extend({initialize: function(a) {
            this._super(a), this.title = a.title
        },doRender: function() {
            return this._super() === !0 ? (k.setTitle(this.title), !0) : !1
        }}), d.BrowserHeader = d.Form.extend({initialize: function(a) {
            var b;
            this._super(a), b = this, this.bindEvent("click [data-back-button]", function() {
                b.onBack()
            }), this.bindEvent("click [data-menu-button]", function() {
                b.onMenu()
            })
        },onBack: function() {
            k.history_back()
        },onMenu: function() {
            k.showMenu()
        },setTitle: function(a) {
            this.$("[data-title]").html(a)
        }}), d.BrowserFooter = d.Form.extend({}), m = [], g = f("body"), l = void 0, j = [], h = f('<div style="z-index: 9999;position: absolute;top: 0;bottom:0;left: 0;right: 0;display: none;"><div>'), g.append(h), k = {flag: !0,initRouter: function() {
            var b, c, d;
            i.APPCLIENT || (d = this, c = 0, b = Backbone.Router.extend({routes: {"*actions": "defaultRoute"},defaultRoute: function(a) {
                    null == a && (a = 0), d.flag && parseInt(a) < parseInt(c) && (d.flag = !1, d.history_back()), c = a
                }}), new b, Backbone.history.start(), f(window).on("unload", function() {
                a.safeCall.call(d, d.onClose), setTimeout(function() {
                    d.close()
                }, 0)
            }))
        },init: _.once(function() {
            var b, c, d, e, h, j, k;
            this.isHome = !0, f("[data-page-loading]").remove(), k = this, j = function(b, c) {
                var d, e, h, i, j;
                return d = f("[data-browser-" + b + "]"), d && 1 === d.length && (e = d, i = d.attr("id"), c = a.getTypeVal("String", d.attr("data-component") || c), d = f("<div></div>"), d.addClass("fw-browser-" + b), d.attr("id", a.trimTpPrefix(i)), h = a.getComponentClass(c), h) ? (j = {template: e}, c = a.getNewComponent(d, null, h, j), c.render(), g.append(d), k[b] = c, c) : void 0
            }, d = j("header", "BrowserHeader"), c = j("footer", "BrowserFooter"), e = _.isObject(d) ? d.$el.height() : 0, b = _.isObject(c) ? c.$el.height() : 0, h = f(window).innerHeight(), a.watchWindowResize(function() {
                var c, d, g;
                0 === f("body")[0].scrollTop && (g = f(window).innerHeight() - e - b, f(".fw-page-content").css({height: g}), d = f(".fw-page-current"), c = d.find(":focus"), c.length > 0 && h > g && a.scrollToVisualArea(c, d), h = g)
            }, 0, 50), this.getContent = function() {
                var a, c;
                return a = f('<div class="fw-page-current fw-page-content"></div>'), c = {}, c[i.IE_FLAG <= 8 ? "padding-top" : "top"] = e, c[i.IE_FLAG <= 8 ? "padding-bottom" : "margin-bottom"] = b, c.height = f(window).innerHeight() - e - b, a.css(c), a
            }
        }),trans: function(b, c, d, e, g) {
            var h, i, j, k;
            return k = this, e = e || 1, g = g || 500, h = e * f(window).innerWidth(), i = -1 === e ? 8 : 1, j = -1 === e ? 1 : 8, this.showMask(), d.css({visibility: "visible",left: h / i}), c.animate({left: -h / j}, g, null, function() {
                return -1 === e ? c.remove() : void 0
            }), d.animate({left: 0}, g, null, function() {
                return a.safeCall(b), k.hideMask()
            })
        },setTitle: function(b) {
            console.log("setTitle:" + b), a.safeCall.call(this.header, _.isObject(this.header) ? this.header.setTitle : void 0, b), document.title = b
        },showMenu: function() {
        },history_back: function(b) {
            var c, d, e, f, g;
            if (d = this.flag, g = this, this.flag = !1, d && window.history.back(), 0 === m.length)
                return this.close(), void 0;
            if (!this.busy) {
                if (j.length > 0 && (e = j.pop(), a.safeCall(e) === !0))
                    return this.busy = !1, void 0;
                if (c = this.getLastPage(), a.safeCall.call(this, c.onClose) === !1)
                    return this.busy = !1, void 0;
                c.$el.find(":focus").blur(), 1 === m.length ? this.close() : (m.pop(), f = this.getLastPage(), f.$el.addClass("fw-page-current"), 1 === m.length && (this.isHome = !0, this.markHome()), this.setTitle(f.title), g = this, b === !1 ? c.$el.remove() : (this.busy = !0, this.trans(function() {
                    g.flag = !0, g.busy = !1, a.safeCall.call(f, f.onResume)
                }, c.$el, f.$el, -1, null)))
            }
        },history_goto: function(c, d) {
            var e, h, j, k, l, n, o, p, q, r, s, t, u, v, w, x;
            if (!this.busy) {
                if (c = a.trimTpPrefix(c), this.normal ? i.APPCLIENT || (location.hash = _.uniqueId("")) : this.normal = !0, this.init(), 0 === m.length ? (this.isHome = !0, this.markHome()) : this.isHome = !1, q = this.getLastPage(), e = this.getContent(), e.attr("id", c), _.isUndefined(q) ? g.append(e) : (q.$el.find(":focus").blur(), q.$el.removeClass("fw-page-current"), a.safeCall.call(q, q.onPause), e.insertAfter(q.$el)), d = a.getTypeVal("Object", d, {}), h = f("#" + a.addTpPrefix(c)), 0 === h.length)
                    return console.error("Can not find Page Template: " + h.selector), void 0;
                if (j = a.getTypeVal("String", h.attr("data-component"), "Page"), k = a.getComponentClass(j), k ? (d.clearHistory === !0 && (a.clearModel(), a.clearComponent()), v = {template: h,title: h.data("title")}, u = a.getNewComponent(e, null, k, v), u.render()) : console.error("component {" + j + "} is undefined!"), x = this, t = function() {
                    x.busy = !1, d.clearHistory === !0 && x.history_clear(), a.safeCall.call(u, u.onOpen)
                }, m.length > 0 ? (this.busy = !0, i.APPCLIENT ? (a.once("bridge:DoNextPage", function() {
                    x.trans(t, q.$el, e)
                }), a.trigger("bridge:PreNextPage")) : this.trans(t, q.$el, e)) : (e.css("visibility", "visible"), t()), d.resetInput = a.getTypeVal("Boolean", d.resetInput, !1), d.resetInput === !0)
                    for (n = u.$("[data-component][id]"), o = 0, r = n.length; r > o; )
                        l = a.getComponent(n[o].id), _.isObject(l) && l.reset(), o++;
                if (p = void 0, w = d.refresh, _.isArray(w))
                    for (s = void 0, o = 0, r = w.length; r > o; )
                        s = w[o], p = s.id, delete s.id, a.refreshComponentById(p, s), o++;
                else
                    _.isObject(w) && (p = w.id, _.isUndefined(p) ? p = c : delete w.id, a.refreshComponentById(p, w));
                b.updateDependencyMap(), b.calcDependency(null), d.history = a.getTypeVal("Boolean", d.history, !0), d.history === !0 && m.push(u)
            }
        },currentPageCloseable: function() {
            var b;
            return b = this.getLastPage(), _.isObject(b) ? (b.$el.find(":focus").blur(), a.safeCall.call(b, b.onPause), a.safeCall.call(b, b.onClose) !== !1) : !0
        },getLastPage: function() {
            return _.last(m)
        },loadUrl: function(a, b) {
            var c;
            this.currentPageCloseable() && (_.startsWith(a, "/") && _.isString(this.baseUrl) && (a = this.baseUrl + a), window.close(), c = window.open(a), c[i.KEY_PARAM] = b)
        },openUrl: function(b, c, d) {
            var e, f;
            this.currentPageCloseable() && (_.startsWith(b, "/") && _.isString(this.baseUrl) && (b = this.baseUrl + b), e = this.getLastPage(), f = window.open(b), f[i.KEY_PARAM] = c, f[i.KEY_ON_RESULT] = function(b) {
                a.safeCall.call(e, _.isObject(e) ? e.onResume : void 0), a.safeCall(d, b)
            })
        },history_clear: function() {
            var a;
            for (a = this, this.flag = !1, window.history.go(1 - window.history.length), setTimeout(function() {
                return a.flag = !0
            }, 100); m.length > 1; )
                m.shift().$el.remove();
            this.isHome = !0, this.markHome()
        },setResult: function(a) {
            l = a
        },getResult: function() {
            return l
        },close: function() {
            window[i.KEY_ON_RESULT] && window[i.KEY_ON_RESULT](l), this.flag = !0, window.close()
        },bindGoBack: function(a) {
            j.push(a)
        },unbindGoBack: function(a) {
            j = _.without(j, a)
        },markHome: function() {
        },showMask: function(a, b) {
            h.css({background: a || "#ffffff",opacity: b || 0}), h.show()
        },hideMask: function() {
            h.hide()
        },onScrollUp: function(b) {
            var c;
            c = parseFloat(b.height) || .2, a.scrollBy(-c)
        },onScrollDown: function(b) {
            var c;
            c = parseFloat(b.height) || .2, a.scrollBy(c)
        }}, e.attach(document.body), k
}), console.log("def:core_request"), define("cbui_request", ["cbui_api"], function(a) {
    var b, c, d, e;
    return e = a._, b = a.$, d = {}, c = function() {
        function c(a) {
            var c;
            this.request = a, c = e.uniqueId("req_"), a.requestId = c, a.pageId = b(".fw-page-current").attr("id"), d[c] = this
        }
        return c.get = function(a) {
            return d[a]
        }, c.prototype.complete = function(a) {
            this.timeout = 0, this.completeTask(a)
        }, c.prototype.completeTask = function(c) {
            var f, g, h, i;
            if ("done" !== this.state) {
                if (!this.request.crossPage && this.request.pageId !== b(".fw-page-current").attr("id"))
                    return this.state = "done", delete d[this.request.requestId], void 0;
                c = a.getTypeVal("Object", c, {}), c.data = a.getTypeVal("Object", c.data, {}), c["continue"] !== !0 && "true" !== c["continue"] && (this.state = "done", delete d[this.request.requestId]), h = c.result, this.timeout > 0 ? i = "timeout" : (clearTimeout(this.timerId), i = 0 === h || "0" === h ? "success" : "error"), g = "success" === i ? this.request.success : this.request.error, f = this.request.beforeProcess, e.isFunction(g) && (e.isFunction(f) ? f(i, c.data) && g(i, c.data) : g(i, c.data)), g = this.request.complete, a.safeCall.call(this.request, g, i, c.data)
            }
        }, c.prototype.exec = function() {
            var a;
            return this.state || (this.state = "doing", console.log("%crequest: [%s] %s %o", "color:green", this.request.requestId, this.request.url, this.request), this.timeout = this.request.timeout, this.timeout > 0 && (a = this, this.timerId = setTimeout(function() {
                a.completeTask()
            }, this.timeout)), this.fetch()), this.id
        }, c.prototype.fetch = function() {
        }, c
    }(), a.fetch = function(a) {
        return new c(a).exec()
    }, c
}), define("normalize", [], function() {
    function a(a, d, h) {
        if (a.match(g) || a.match(f))
            return a;
        a = e(a);
        var i = h.match(f), j = d.match(f);
        return !j || i && i[1] == j[1] && i[2] == j[2] ? c(b(a, d), h) : b(a, d)
    }
    function b(a, b) {
        if ("./" == a.substr(0, 2) && (a = a.substr(2)), a.match(g) || a.match(f))
            return a;
        var c = b.split("/"), d = a.split("/");
        for (c.pop(); curPart = d.shift(); )
            ".." == curPart ? c.pop() : c.push(curPart);
        return c.join("/")
    }
    function c(a, b) {
        var c = b.split("/");
        for (c.pop(), b = c.join("/") + "/", i = 0; b.substr(i, 1) == a.substr(i, 1); )
            i++;
        for (; "/" != b.substr(i, 1); )
            i--;
        b = b.substr(i + 1), a = a.substr(i + 1), c = b.split("/");
        var d = a.split("/");
        for (out = ""; c.shift(); )
            out += "../";
        for (; curPart = d.shift(); )
            out += curPart + "/";
        return out.substr(0, out.length - 1)
    }
    var d = /([^:])\/+/g, e = function(a) {
        return a.replace(d, "$1/")
    }, f = /[^\:\/]*:\/\/([^\/])*/, g = /^(\/|data:)/, h = function(b, c, d) {
        c = e(c), d = e(d);
        for (var f = /@import\s*("([^"]*)"|'([^']*)')|url\s*\((?!#)\s*(\s*"([^"]*)"|'([^']*)'|[^\)]*\s*)\s*\)/gi, g, h, b; g = f.exec(b); ) {
            h = g[3] || g[2] || g[5] || g[6] || g[4];
            var i;
            i = a(h, c, d);
            var j = g[5] || g[6] ? 1 : 0;
            b = b.substr(0, f.lastIndex - h.length - j - 1) + i + b.substr(f.lastIndex - j - 1), f.lastIndex = f.lastIndex + (i.length - h.length)
        }
        return b
    };
    return h.convertURIBase = a, h.absoluteURI = b, h.relativeURI = c, h
}), define("css", [], function() {
    if ("undefined" == typeof window)
        return {load: function(a, b, c) {
                c()
            }};
    var a = document.getElementsByTagName("head")[0], b = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)/i) || 0, c = !1, d = !0;
    b[1] || b[7] ? c = parseInt(b[1]) < 6 || parseInt(b[7]) <= 9 : b[2] ? d = !1 : b[4] && (c = parseInt(b[4]) < 18);
    var e = {};
    e.pluginBuilder = "./css-builder";
    var f, g, h = function() {
        f = document.createElement("style"), a.appendChild(f), g = f.styleSheet || f.sheet
    }, i = 0, j = [], k, l = function(a) {
        i++, 32 == i && (h(), i = 0), g.addImport(a), f.onload = function() {
            m()
        }
    }, m = function() {
        k();
        var a = j.shift();
        return a ? (k = a[1], l(a[0]), void 0) : (k = null, void 0)
    }, n = function(a, b) {
        if (g && g.addImport || h(), g && g.addImport)
            k ? j.push([a, b]) : (l(a), k = b);
        else {
            f.textContent = '@import "' + a + '";';
            var c = setInterval(function() {
                try {
                    f.sheet.cssRules, clearInterval(c), b()
                } catch (a) {
                }
            }, 10)
        }
    }, o = function(b, c) {
        var e = document.createElement("link");
        if (e.type = "text/css", e.rel = "stylesheet", d)
            e.onload = function() {
                e.onload = function() {
                }, setTimeout(c, 7)
            };
        else
            var f = setInterval(function() {
                for (var a = 0; a < document.styleSheets.length; a++) {
                    var b = document.styleSheets[a];
                    if (b.href == e.href)
                        return clearInterval(f), c()
                }
            }, 10);
        e.href = b, a.appendChild(e)
    };
    return e.normalize = function(a, b) {
        return ".css" == a.substr(a.length - 4, 4) && (a = a.substr(0, a.length - 4)), b(a)
    }, e.load = function(a, b, d, e) {
        (c ? n : o)(b.toUrl(a + ".css"), d)
    }, e
}), console.log("def:core_core"), define("cbui_core", ["cbui_api", "cbui_dependency", "cbui_template", "cbui_model", "cbui_component", "cbui_browser", "cbui_request", "css!@/../../css/cb"], function(a, b, c, d, e, f) {
    var g;
    return b.config({isReady: function(b) {
            var c, d;
            return c = a.getComponent(b), _.isObject(c) ? c.isReady() : (d = a.getModel(b), _.isObject(d) ? d.isReady() : !0)
        },setEnable: function(b, c) {
            var d;
            d = a.getComponent(b), _.isObject(d) ? a.safeCall.call(d, d.setEnable, c) : (d = $("#" + b), c ? d.removeAttr("disabled") : d.attr("disabled", "disabled"))
        },isEnable: function(b) {
            var c;
            return c = a.getComponent(b), _.isObject(c) ? c.isEnable() : (c = $("#" + b), "disabled" !== c.attr("disabled"))
        }}), g = a.CONST, _.extend(a.$.Deferred(), {CONST: g,Fn: a,Template: c,Component: e,Model: d,Browser: f,DependencyManager: b})
}), "undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {backdrop: !0,keyboard: !0,show: !0}, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {relatedTarget: b});
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                return this.ignoreBackdropClick ? (this.ignoreBackdropClick = !1, void 0) : (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()), void 0)
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)
                return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else
            b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""})
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({paddingLeft: "",paddingRight: ""})
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {animation: !0,placement: "top",selector: !1,template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger: "hover focus",title: "",delay: 0,html: !1,container: !1,viewport: {selector: "body",padding: 0}}, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {click: !1,hover: !1,focus: !1}, this.$element[0] instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g)
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {trigger: "manual",selector: ""}) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {show: b.delay,hide: b.delay}), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? (c.hoverState = "in", void 0) : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show), void 0) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a])
                return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide), void 0) : c.hide())
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)
                return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({top: 0,left: 0,display: "block"}).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({using: function(a) {
                d.css({top: Math.round(a.top),left: Math.round(a.left)})
            }}, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {width: e.right - e.left,height: e.bottom - e.top}));
        var f = d ? {top: 0,left: 0} : b.offset(), g = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()}, h = d ? {width: a(window).width(),height: a(window).height()} : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {top: b.top + b.height,left: b.left + b.width / 2 - c / 2} : "top" == a ? {top: b.top - d,left: b.left + b.width / 2 - c / 2} : "left" == a ? {top: b.top + b.height / 2 - d / 2,left: b.left - c} : {top: b.top + b.height / 2 - d / 2,left: b.left + b.width}
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {top: 0,left: 0};
        if (!this.$viewport)
            return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title), a
    }, c.prototype.getUID = function(a) {
        do
            a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), define("@/../../../../../grunt/wx/cbjs/js/lib/bootstrap", function() {
}), console.log("def:core_bootstrap"), define("cbui_bootstrap", ["cbui_api", "@/../../../../../grunt/wx/cbjs/js/lib/bootstrap", "css!@/../../css/bootstrap"], function(a) {
    var b, c;
    return b = a.$, c = b.Deferred(), c.resolve(), c.promise()
}), window.ALIAS_UI = "CBUI", requirejs.config({urlArgs : "v=20151111",paths: {cbui_const: "core/cbui_const",underscore: "lib/underscore"}})(["cbui_const", "underscore"], function(a, b) {
    var c, d, e;
    c = b.noop, b.logOff = function() {
        return window.console = {dir: c,log: c,warn: c,error: c,info: c,trace: c,group: c,groupEnd: c}
    }, window.console ? window.console.group || (window.console.group = window.console.groupEnd = c) : b.logOff(), requirejs.config({urlArgs: a.REQUIRE_URL_ARGS,paths: {jquery: "lib/jquery",underscore: "lib/underscore","underscore.string": "lib/underscore.string",backbone: "lib/backbone","backbone-super": "lib/backbone-super",fastclick: "lib/fastclick",cbui_const: "core/cbui_const",cbui_api: "core/cbui_api",cbui_dependency: "core/cbui_dependency",cbui_template: "core/cbui_template",cbui_component: "core/cbui_component",cbui_model: "core/cbui_model",cbui_browser: "core/cbui_browser",cbui_request: "core/cbui_request",cbui_core: "core/cbui_core",cbui_bootstrap: "core/cbui_bootstrap"},shim: {cbui_bootstrap: {deps: ["jquery"]}},waitSeconds: a.REQUIRE_WAIT}), d = b.now(), e = setInterval(function() {
        var c;
        b.now() - d > a.BRIDGE_WAIT || b.isObject(window.WebViewJavascriptBridge) ? (clearInterval(e), c = a.APPCLIENT = b.isObject(window.WebViewJavascriptBridge), requirejs(["cbui_core", "cbui_bootstrap", c ? "core/cbui_bridge" : void 0], function(d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
            if (h = d.Fn, window[window.ALIAS_UI] = d, d.Bridge = f || {}, c || (q = window[a.KEY_PARAM], window[a.KEY_PARAM] = void 0, d.then(function() {
                var c;
                d.Browser.initRouter();
                try {
                    b.isUndefined(q) && (q = h.queryString2Json(location.search), null !== q ? (q = q[a.KEY_PARAM] || "{}", q = JSON.parse(q)) : q = {})
                } catch (e) {
                    c = e, console.error(c), q = {}
                }
                h.safeCall.call(d, window.framework_ready, q)
            })), t = [], u = h.$("script[data-main]"), u.length > 0)
                for (r = ["data-lib:libex/", "data-component:component/cbui_", "data-libex:../../js/libex/", "data-componentex:../../js/componentex/cbui_", "data-cssex:css!@/../../../css/"], i = 0, k = r.length; k > i; i++)
                    if (o = r[i], s = o.split(":"), p = s[0], g = s[1], n = u.attr(p), b.isString(n))
                        for (n = n.trim().split(","), j = 0, l = n.length; l > j; j++)
                            m = n[j], m = m.trim(), "" !== m && t.push(g + m);
            e.then(function() {
                requirejs(t, function() {
                    b.isString(u.attr("data-debug")) ? requirejs(["../debug/main"], function(a) {
                        a.then(function() {
                            d.resolve()
                        })
                    }) : (b.logOff(), d.resolve())
                })
            })
        })) : console.log("waiting bridge ...")
    }, 50)
}), define("main", function() {
});
