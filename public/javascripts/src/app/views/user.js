(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
