Router.route('/', function () {
  this.layout('mainLayout');
  this.render('createInvitation');
});

Router.route('/view', function () {
  this.layout('mainLayout');
  this.render('viewAllInvitations');
});

Router.route('/invitation/:_id', function () {
  this.layout('mainLayout');
  this.render('viewSingleInvitation');
},
{
  name: 'viewSingleInvitation'
});
