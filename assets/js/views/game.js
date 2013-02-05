(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base', 'views/user', 'models/user'], function(Backbone, $, module, Handlebars, BaseView, GameUserView, User) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new GameUserView({
          model: new User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        return this;
      };

      return ActiveGameView;

    })(BaseView);
    return module.exports = {
      NewGameView: NewGameView,
      ActiveGameView: ActiveGameView
    };
  });

}).call(this);
