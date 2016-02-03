Meteor.startup(function () {
  // Run migration script
  Migrations.migrateTo('latest');
});
