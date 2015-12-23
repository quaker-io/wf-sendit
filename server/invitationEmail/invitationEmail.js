Meteor.startup(function () {
  var emailTemplate = `
  <img src="{{ logoUrl }}" />
  <h2>{{ title }}</h2>
  <p>{{ message }}</p>
  <p>{{ linkText }}</p>
  <a href="{{ url }}">{{ url }}</a>
  `

  SSR.compileTemplate('invitationEmail', emailTemplate);
});
