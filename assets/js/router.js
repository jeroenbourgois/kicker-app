(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
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
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new GameView.NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new GameView.ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
