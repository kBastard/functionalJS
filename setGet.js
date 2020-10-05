const _ = {};


/* ==========================================================================
    _.set:
    Sets the value at property of object. If the property doesn't exist, it's created.
    This method mutates the original object.

    Example Usage:
    const who = {name: "Colonel Mustard"};

    _.set(who, "name", "Miss Scarlett");

    console.log(who);
    // => {name: "Miss Scarlett"}

  ========================================================================== */

_.set = function(object, path, value) {
  object[path] = value;
  return object;
};

// TEST CASES
const who = { name: "Colonel Mustard" };
_.set(who, "name", "Colonel Ketchup");

// We should be able to set a property to a value.
console.log("1. We should be able to set a property to a value.", who.name === "Colonel Ketchup");

/* ========================================================================
  _.get:
  Gets the value at property of object. If the value is undefined, the defaultValue is returned in its place.

  Definition: _.get(object, prop, [defaultValue])

  Example Usage:
  const who = {name: "Colonel Mustard"};

  _.get(who, "name");
  // => "Colonel Mustard"

  _.get(who, "story", "We don't know yet.");
  // => "We don’t know yet";

  ======================================================================== */

_.get = function(object, prop, defaultValue) {
  return object[prop] === undefined ?
    defaultValue === undefined ? undefined : defaultValue
    : object[prop]
};

// TEST CASES
const mysteriousEnvelope = { clue: "It wasn't in the Billiard Room." };

// We should be able to get the value for a given property.
console.log(
  "1. We should be able to get the value for a given property.",
  _.get(mysteriousEnvelope, "clue") === "It wasn't in the Billiard Room."
);

// We should get undefined if nothing exists for a given property.
console.log(
  "2: We should get undefined if nothing exists for a given property.",
  _.get(mysteriousEnvelope, "more clues") === undefined
);

// We should get the default value if nothing exists for a given property.
console.log(
  "3: We should get the default value if nothing exists for a given property.",
  _.get(mysteriousEnvelope, "room", "nothing found") === "nothing found"
);
