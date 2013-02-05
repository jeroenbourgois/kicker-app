(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
