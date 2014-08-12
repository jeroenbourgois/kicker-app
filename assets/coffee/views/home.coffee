define ['backbone', 'module', 'handlebars', 'views/base'], (Backbone, module, Handlebars, BaseView) ->
  class HomeView extends BaseView
    initialize: ->
      @

    render: ->
      @$el.html Handlebars.getTemplate 'home'
      @

  module.exports = HomeView
