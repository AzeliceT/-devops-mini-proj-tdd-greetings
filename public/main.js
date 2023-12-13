(() => {
    "use strict"
    function n(n) {
        return n === n.toUpperCase()
    }
    function e(n) {
        return "fr" === n[n.length - 1]
    }
    function r(n) {
        return "nl" === n[n.length - 1]
    }
    function t(n) {
        return "en" === n[n.length - 1]
    }
    module.exports = function (l) {
        if (
            (function (n) {
                return null == n || "" === n
            })(l)
        )
            return "Hello, my friend."
        if (
            (function (n) {
                return Array.isArray(n) && 2 === n.length
            })(l)
        )
            return e(l)
                ? "Bonjour, " + l[0] + "."
                : r(l)
                  ? "Dag, " + l[0] + "."
                  : t(l)
                    ? "Hello, " + l[0] + "."
                    : "Hello, " + l[0] + " and " + l[1] + "."
        if (
            (function (n) {
                return Array.isArray(n) && n.length >= 3
            })(l)
        ) {
            if (e(l)) return "Bonjour, " + l[0] + " et " + l[1] + "."
            if (r(l)) return "Dag, " + l[0] + " en " + l[1] + "."
            if (t(l)) return "Hello, " + l[0] + " and " + l[1] + "."
            const u = [],
                o = []
            let i = "Hello, "
            for (const e of l) n(e) ? o.push(e) : u.push(e)
            return (
                (i +=
                    u.slice(0, l.length - 1).join(" and ") +
                    u.slice(l.length - 1) +
                    ". "),
                (i += "AND HELLO " + o[0] + " !"),
                o.length > 0
                    ? i
                    : `Hello, ${l
                          .slice(0, l.length - 1)
                          .join(", ")} and ${l.slice(l.length - 1)}.`
            )
        }
        return n(l) ? "HELLO, " + l + "!" : "Hello, " + l + "."
    }
})()
