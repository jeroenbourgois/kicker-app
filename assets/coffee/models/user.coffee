define ['backbone', 'module'], (Backbone, module) ->
  class User extends Backbone.Model
    defaults:
      username: 'JeroenB'
      goals: 1

  module.exports = User
