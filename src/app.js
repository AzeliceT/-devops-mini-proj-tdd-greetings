export class Main {
  greet(name) {
    if (this.isNullUndefinedOrEmpty(name)) {
      return "Hello, my friend.";
    }

    if (this.lengthEqualsToTwo(name)) {
      if (this.isInFrench(name)) {
        return "Bonjour, " + name[0] + ".";
      }

      if (this.isInDutch(name)) {
        return "Dag, " + name[0] + ".";
      }

      if (this.isInEnglish(name)) {
        return "Hello, " + name[0] + ".";
      }

      return "Hello, " + name[0] + " and " + name[1] + ".";
    }

    if (this.lengthSuperiorThanTwo(name)) {
      if (this.isInFrench(name)) {
        return "Bonjour, " + name[0] + " et " + name[1] + ".";
      }

      if (this.isInDutch(name)) {
        return "Dag, " + name[0] + " en " + name[1] + ".";
      }

      if (this.isInEnglish(name)) {
        return "Hello, " + name[0] + " and " + name[1] + ".";
      }

      const lowerNames = [];
      const upperNames = [];
      let message = "Hello, ";

      for (const nom of name) {
        if (this.upperCase(nom)) {
          upperNames.push(nom);
        } else {
          lowerNames.push(nom);
        }
      }

      message +=
        lowerNames.slice(0, name.length - 1).join(" and ") +
        lowerNames.slice(name.length - 1) +
        ". ";
      message += "AND HELLO " + upperNames[0] + " !";

      if (upperNames.length > 0) {
        return message;
      }

      let toutSaufDernier = name.slice(0, name.length - 1).join(", ");
      let dernier = name.slice(name.length - 1);
      return `Hello, ${toutSaufDernier} and ${dernier}.`;
    }

    if (this.upperCase(name)) {
      return "HELLO, " + name + "!";
    }

    return "Hello, " + name + ".";
  }

  isNullUndefinedOrEmpty(name) {
    return name === null || name === undefined || name === "";
  }

  upperCase(name) {
    return name === name.toUpperCase();
  }

  lengthEqualsToTwo(name) {
    return Array.isArray(name) && name.length === 2;
  }

  lengthSuperiorThanTwo(name) {
    return Array.isArray(name) && name.length >= 3;
  }

  isInFrench(name) {
    return name[name.length - 1] === "fr";
  }

  isInDutch(name) {
    return name[name.length - 1] === "nl";
  }

  isInEnglish(name) {
    return name[name.length - 1] === "en";
  }
}
