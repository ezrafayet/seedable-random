'use strict'

const pearsonHash = require("./dependencies/pearsonHash");

function seedableRandom(phrase = null) {
  if(phrase && typeof phrase !== "string") throw new Error('The phrase must be a string');
  const p = phrase ? phrase : (new Date().getTime()).toString();
  return pearsonHash(p) / 256;
}

module.exports = seedableRandom;