Meteor.methods({
  getLogoUrl: function () {
    var settings = Settings.findOne();

    // Get logo ID
    var logoId = settings.brandingImageId;

    // Get logo
    var logo = Files.findOne(logoId);

    // Get relative URL for logo
    var logoUrl = logo.url();

    return logoUrl;
  }
});
