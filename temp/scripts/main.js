(function() {

  window.yeoman = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function() {
      return console.log('Hello from Backbone!');
    }
  };

  $(document).ready(function() {
    return yeoman.init();
  });

}).call(this);
