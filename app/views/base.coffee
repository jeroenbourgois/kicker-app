KickerApp.Views.Base = Backbone.View.extend
  remove: ->
    @undelegateEvents()
    @$el.empty()
    @
