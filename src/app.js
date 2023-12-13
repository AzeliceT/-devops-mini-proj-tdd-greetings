function greet(name) {
    if (isNullUndefinedOrEmpty(name)) {
        return "Hello, my friend."
    }

    if (lengthEqualsToTwo(name)) {
        if (isInFrench(name)) {
            return "Bonjour, " + name[0] + "."
        }

        if (isInDutch(name)) {
            return "Dag, " + name[0] + "."
        }

        if (isInEnglish(name)) {
            return "Hello, " + name[0] + "."
        }

        return "Hello, " + name[0] + " and " + name[1] + "."
    }

    if (lengthSuperiorThanTwo(name)) {
        if (isInFrench(name)) {
            return "Bonjour, " + name[0] + " et " + name[1] + "."
        }

        if (isInDutch(name)) {
            return "Dag, " + name[0] + " en " + name[1] + "."
        }

        if (isInEnglish(name)) {
            return "Hello, " + name[0] + " and " + name[1] + "."
        }

        const lowerNames = []
        const upperNames = []
        let message = "Hello, "

        for (const nom of name) {
            if (upperCase(nom)) {
                upperNames.push(nom)
            } else {
                lowerNames.push(nom)
            }
        }

        message +=
            lowerNames.slice(0, name.length - 1).join(" and ") +
            lowerNames.slice(name.length - 1) +
            ". "
        message += "AND HELLO " + upperNames[0] + " !"

        if (upperNames.length > 0) {
            return message
        }

        const toutSaufDernier = name.slice(0, name.length - 1).join(", ")
        const dernier = name.slice(name.length - 1)
        return `Hello, ${toutSaufDernier} and ${dernier}.`
    }

    if (upperCase(name)) {
        return "HELLO, " + name + "!"
    }

    return "Hello, " + name + "."
}

function isNullUndefinedOrEmpty(name) {
    return name === null || name === undefined || name === ""
}

function upperCase(name) {
    return name === name.toUpperCase()
}

function lengthEqualsToTwo(name) {
    return Array.isArray(name) && name.length === 2
}

function lengthSuperiorThanTwo(name) {
    return Array.isArray(name) && name.length >= 3
}

function isInFrench(name) {
    return name[name.length - 1] === "fr"
}

function isInDutch(name) {
    return name[name.length - 1] === "nl"
}

function isInEnglish(name) {
    return name[name.length - 1] === "en"
}

module.exports = greet
