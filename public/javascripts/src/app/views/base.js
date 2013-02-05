(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
