(function() {

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
