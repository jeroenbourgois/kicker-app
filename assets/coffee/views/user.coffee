define ['backbone', 'jquery', 'module', 'handlebars',
  'views/base',
], (Backbone, $, module, Handlebars,
  BaseView,
) ->
  class GameUserView extends BaseView
    initialize: ->
      @

    render: ->
      tpl = Handlebars.getTemplate 'game/partials/user'

      console.log tpl(@options.model.toJSON())

      @$el.html(tpl(@options.model))
      @$el.html (tpl(@options.model))
      
      @

      # $(this.el).html(Handlebars.getTemplate('naam'))

  module.exports = GameUserView
