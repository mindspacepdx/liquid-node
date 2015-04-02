// Generated by CoffeeScript 1.7.1
(function() {
  var Capture, Liquid,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Liquid = require("../../liquid");

  module.exports = Capture = (function(_super) {
    var Syntax, SyntaxHelp;

    __extends(Capture, _super);

    Syntax = /(\w+)/;

    SyntaxHelp = "Syntax Error in 'capture' - Valid syntax: capture [var]";

    function Capture(template, tagName, markup) {
      var match;
      match = Syntax.exec(markup);
      if (match) {
        this.to = match[1];
      } else {
        throw new Liquid.SyntaxError(SyntaxHelp);
      }
      Capture.__super__.constructor.apply(this, arguments);
    }

    Capture.prototype.render = function(context) {
      return Capture.__super__.render.apply(this, arguments).then((function(_this) {
        return function(chunks) {
          var output;
          output = Liquid.Helpers.toFlatString(chunks);
          context.lastScope()[_this.to] = output;
          return "";
        };
      })(this));
    };

    return Capture;

  })(Liquid.Block);

}).call(this);

//# sourceMappingURL=capture.map