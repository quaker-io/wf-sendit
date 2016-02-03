Migrations.add({
  version: 1,
  name: 'Remove base URL from settings.',
  up: function() {
    let settings = Settings.findOne();

    let settingsId = settings._id;

    let settingsHasBaseUrl = _.has(settings, "baseUrl");

    if (settingsHasBaseUrl) {
      // Delete existing settings object
      Settings.remove(settingsId);

      // Remove base url and _id fields
      delete settings["baseUrl"];
      delete settings["_id"];

      // Insert modified settings object
      Settings.insert(settings);
    }
  }
});
