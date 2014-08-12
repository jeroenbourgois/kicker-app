define ['backbone', 'jquery', 'module', 'handlebars',
  'views/base',
  'views/user'
  'models/user'
], (Backbone, $, module, Handlebars,
  BaseView,
  GameUserView,
  User
) ->
  class NewGameView extends BaseView
    render: ->
      @$el.html Handlebars.getTemplate 'game/new'
      @

  class ActiveGameView extends BaseView
    time_start: 0
    time_end: 0

    user_view: null

    initialize: ->
      @time_start = new Date()
      @user_view = new GameUserView {model: new User()}

    render: ->
      @$el.html Handlebars.getTemplate 'game/active'

      # $('#user', @$el).append @user_view.render().$el.html()
      # console.log @user_view.render().$el.html()

      @

  module.exports = {NewGameView: NewGameView, ActiveGameView: ActiveGameView}
