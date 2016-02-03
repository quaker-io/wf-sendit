Migrations.add({
  version: 1,
  name: 'Remove base URL from settings.',
  up: function() {
    let settings = Settings.findOne();

    let settingsHasBaseUrl = _.has(settings, "baseUrl");

    if (settingsHasBaseUrl) {
      // Remove base url field
      Settings.update(settings._id, {$unset: {baseUrl: 1}});
    }
  }
});
