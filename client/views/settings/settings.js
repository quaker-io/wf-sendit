Template.settings.created = function () {
  // Get reference to template instance
  var instance = this;

  // Subscribe to setings
  instance.settingsSubscription = instance.subscribe("settings");

  instance.autorun(function () {
    if (instance.settingsSubscription.ready()) {
      // Get Settings
      var settings = Settings.findOne();

      // Get logo ID
      var logoId = settings.brandingImageId;

      // Subscribe to logo file document
      instance.logoSubscription = instance.subscribe("singleFile", logoId);
    }
  });
};

Template.settings.helpers({
  settings: function () {
    var instance = Template.instance();

    if (instance.settingsSubscription.ready()) {
      var settings = Settings.findOne();

      return settings;
    };
  },
  logo: function () {
    var instance = Template.instance();
    if (
        instance.settingsSubscription.ready()
        &&
        instance.logoSubscription.ready()
       ) {
      // Get Settings
      var settings = Settings.findOne();

      // Get logo ID
      var logoId = settings.brandingImageId;

      // Get logo
      var logo = Files.findOne(logoId);

      return logo;
    }
  }
});
