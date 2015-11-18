Template.settings.created = function () {
  // Get reference to template instance
  var instance = this;

  // Subscribe to setings
  instance.subscribe("settings");
};

Template.settings.helpers({
  settings: function () {
    var settings = Settings.findOne();

    return settings;
  }
});
