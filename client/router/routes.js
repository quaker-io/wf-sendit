Router.route('/', function () {
  this.layout('mainLayout');
  this.render('createInvitation');
});

Router.route('/view', function () {
  this.layout('mainLayout');
  this.render('viewAllInvitations');
});
