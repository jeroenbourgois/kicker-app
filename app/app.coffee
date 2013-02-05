window.KickerApp =
  Models: {}
  Collections: {}
  Views: {}
  # Routers: {} // for now: 1 router
  init: ->
    KickerApp.router = new KickerApp.Router

    # kickoff backbone
    Backbone.history.start({pushState: true})

$(document).ready ->

  # All navigation that is relative should be passed through the navigate
  # method, to be processed by the router. If the link has a `data-bypass`
  # attribute, bypass the delegation completely.
  $(document).on "click", "a[href]:not([data-bypass])", (e) ->
    # Get the absolute anchor href.
    href = { prop: $(this).prop("href"), attr: $(this).attr("href") }
    root = location.protocol + "//" + location.host + KickerApp.config.root

    # Ensure the root is part of the anchor href, meaning it's relative.
    if (href.prop.slice(0, root.length) == root)
      e.preventDefault()

      Backbone.history.navigate href.attr, true

  KickerApp.init()
