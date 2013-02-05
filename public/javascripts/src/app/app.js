(function() {

  window.KickerApp = {
    Models: {},
    Collections: {},
    Views: {},
    init: function() {
      KickerApp.router = new KickerApp.Router;
      return Backbone.history.start({
        pushState: true
      });
    }
  };

  $(document).ready(function() {
    $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + KickerApp.config.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
    return KickerApp.init();
  });

}).call(this);
