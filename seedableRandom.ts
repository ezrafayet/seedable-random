'use strict'

import pearsonHash from "./dependencies/pearsonHash";

function seedableRandom(phrase = null) {
  if(phrase && typeof phrase !== "string") throw new Error('The phrase must be a string');
  const p = phrase ? phrase : (new Date().getTime()).toString();
  return pearsonHash(p) / 256;
}

export default seedableRandom;