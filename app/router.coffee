KickerApp.Router = Backbone.Router.extend
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
    @current_view = KickerApp.Views.home = new KickerApp.Views.Home()
    @show @current_view

  new_game: ->
    @current_view = KickerApp.Views.new_game = new KickerApp.Views.NewGame()
    @show @current_view

  active_game: ->
    @current_view = KickerApp.Views.active_game = new KickerApp.Views.ActiveGame()
    @show @current_view

  show: (view) ->
    # $('#app').append view.el
    $('#app').html view.render().$el.html()
