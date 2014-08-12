define ['backbone', 'jquery', 'module',
  'views/home',
  'views/game',
], (Backbone, $, module,
  HomeView
  GameView
) ->
  AppRouter = Backbone.Router.extend
    current_view: null

    routes:
      '': 'home'
      'game/new': 'new_game'
      'game/active': 'active_game'

    initialize: ->
      @.bind 'all', @on_route, @

    on_route: (ref) ->
      if !!@current_view
        @current_view.remove()
        @current_view = null

    home: ->
      console.log 'home'

      @current_view = new HomeView()

      @show @current_view

    new_game: ->
      @current_view = new GameView.NewGameView()
      
      @show @current_view

    active_game: ->
      @current_view = new GameView.ActiveGameView()

      @show @current_view

    show: (view) ->
      # $('#app').append view.el
      $('#app').html view.render().$el.html()

  module.exports = AppRouter
