! function (n) {
    var e = {};

    function t(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return n[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = n, t.c = e, t.d = function (n, e, o) {
        t.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: o
        })
    }, t.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, t.t = function (n, e) {
        if (1 & e && (n = t(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: n
            }), 2 & e && "string" != typeof n)
            for (var r in n) t.d(o, r, function (e) {
                return n[e]
            }.bind(null, r));
        return o
    }, t.n = function (n) {
        var e = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return t.d(e, "a", e), e
    }, t.o = function (n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, t.p = "", t(t.s = 0)
}([function (n, e, t) {
    "use strict";
    t.r(e);

    function o(n, e) {
        for (var t = 0; t < e.length; t++) {
            var o = e[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
        }
    }
    var r = function () {
        function n(e) {
            ! function (n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, n), this.name = e
        }
        return function (n, e, t) {
            e && o(n.prototype, e), t && o(n, t)
        }(n, [{
            key: "speak",
            value: function () {
                console.log("Brains!")
            }
        }]), n
    }();
    console.log(function (n, e) {
        return Math.floor(Math.random() * (e - n + 1)) + n
    }(50, 100)), console.log(0 == Math.round(Math.random()) ? "heads" : "tails"), console.log("PI: ", 3.14159265359), console.log(function (n, e) {
        return n + e
    }(3, 4)), console.log(function (n, e) {
        return n - e
    }(7, 1)), new r("Bob").speak();
    fetch("https://opentdb.com/api.php?amount=10").then(function (n) {
        return n.json()
    }).then(function (n) {
        console.log(n)
    }).catch(function (n) {
        return console.log(n)
    })
}]);