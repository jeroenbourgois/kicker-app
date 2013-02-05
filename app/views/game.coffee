KickerApp.Views.NewGame = KickerApp.Views.Base.extend
  render: ->
    @$el.html Handlebars.getTemplate 'game/new'
    @

KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend
  time_start: 0
  time_end: 0

  user_view: null

  initialize: ->
    @time_start = new Date()
    @user_view = new KickerApp.Views.GameUser {model: new KickerApp.Models.User()}

  render: ->
    @$el.html Handlebars.getTemplate 'game/active'

    # $('#user', @$el).append @user_view.render().$el.html()
    console.log @user_view.render().$el.html()

    @
