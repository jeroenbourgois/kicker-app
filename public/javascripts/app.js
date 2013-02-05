(function() {

  window.KickerApp = {
    Models: {},
    Collections: {},
    Views: {},
    init: function() {
      KickerApp.router = new KickerApp.Router;
      return Backbone.history.start({
        pushState: true
      });
    }
  };

  $(document).ready(function() {
    $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + KickerApp.config.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
    return KickerApp.init();
  });

}).call(this);
;(function() {

  KickerApp.config = {
    root: '/'
  };

}).call(this);
;(function() {

  KickerApp.Router = Backbone.Router.extend({
    current_view: null,
    routes: {
      '': 'home',
      'game/new': 'new_game',
      'game/active': 'active_game'
    },
    initialize: function() {
      return this.bind('all', this.on_route, this);
    },
    on_route: function(ref) {
      if (!!this.current_view) {
        this.current_view.remove();
        return this.current_view = null;
      }
    },
    home: function() {
      this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
      return this.show(this.current_view);
    },
    new_game: function() {
      this.current_view = KickerApp.Views.new_game = new KickerApp.Views.NewGame();
      return this.show(this.current_view);
    },
    active_game: function() {
      this.current_view = KickerApp.Views.active_game = new KickerApp.Views.ActiveGame();
      return this.show(this.current_view);
    },
    show: function(view) {
      return $('#app').html(view.render().$el.html());
    }
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
