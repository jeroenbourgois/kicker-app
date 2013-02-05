(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
