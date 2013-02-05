Handlebars.getTemplate = (name) ->
  if not Handlebars.templates? or not Handlebars.templates[name]?
    $.ajax({
      url: '/public/templates/' + name + '.handlebars',
      success: (data) ->
        if not Handlebars.templates?
          Handlebars.templates = {}
        Handlebars.templates[name] = Handlebars.compile data
      async: false
    })
  Handlebars.templates[name]

Handlebars.registerHelper 'agree_button', ->
  return new Handlebars.SafeString("<button>I agree.</button>")
