Template.settings.helpers({
  settings: function () {
    var settings = Settings.findOne();

    return settings;
  }
});
