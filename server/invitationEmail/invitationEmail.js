Meteor.startup(function () {
  var emailTemplate = `
  <h2>{{ title }}</h2>
  <p>{{ message }}</p>
  `

  SSR.compileTemplate('invitationEmail', emailTemplate);
});
