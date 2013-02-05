KickerApp.Views.GameUser = KickerApp.Views.Base.extend
  initialize: ->
    @

  render: ->
    tpl = Handlebars.getTemplate 'game/partials/user'
    console.log tpl(@options.model.toJSON())
    @$el.html(tpl(@options.model))
    @$el.html (tpl(@options.model))
    j
    @

    $(this.el).html(Handlebars.getTemplate('naam'))
