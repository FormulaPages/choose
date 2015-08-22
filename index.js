(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.CHOOSE = mod.exports;
  }
})(this, function (exports, module) {
  // MORE LISPY Fucking shit in here...haha
  "use strict";

  module.exports = CHOOSE;

  function CHOOSE(index) {
    if (arguments.length < 2) {
      return error.value;
    }

    var values = [];
    for (var i = 1; i < arguments.length; i++) {
      var item = arguments[i];
        values.push(item);
    }

    var retVal = values[index - 1];

    return retVal;
  }
});
