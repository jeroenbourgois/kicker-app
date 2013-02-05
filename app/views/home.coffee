KickerApp.Views.Home = KickerApp.Views.Base.extend
  initialize: ->
    @

  render: ->
    @$el.html Handlebars.getTemplate 'home'
    @
