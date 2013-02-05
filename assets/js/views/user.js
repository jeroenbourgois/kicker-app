(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base'], function(Backbone, $, module, Handlebars, BaseView) {
    var GameUserView;
    GameUserView = (function(_super) {

      __extends(GameUserView, _super);

      function GameUserView() {
        return GameUserView.__super__.constructor.apply(this, arguments);
      }

      GameUserView.prototype.initialize = function() {
        return this;
      };

      GameUserView.prototype.render = function() {
        var tpl;
        tpl = Handlebars.getTemplate('game/partials/user');
        console.log(tpl(this.options.model.toJSON()));
        this.$el.html(tpl(this.options.model));
        this.$el.html(tpl(this.options.model));
        return this;
      };

      return GameUserView;

    })(BaseView);
    return module.exports = GameUserView;
  });

}).call(this);
