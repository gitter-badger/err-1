"use strict";

const Builder = require("./error-builder");

class Errr {
  static newError(message, template) {
    return new Builder(message, template);
  }
}

module.exports = Errr;
