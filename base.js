if (Meteor.isClient) {
  
  Session.setDefault('done', false);  

  Template.email.events({
    'click #btn': function () {
      Meteor.call('sendEmail', $('#email').val());
      Session.set('done', true);
    }
  });

  Template.email.done = function () { return Session.equals('done', true); }

//  Template.email.done = function () { 
 //     if (Session.get('done')) return Session.equal('done', true);
 //   }

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.methods({
    sendEmail: function(email) {
      Email.send({to:email, from:'test@mail.com', subject:'Thank you for signing up!', text: 'We will let you know when we have some news.'});
    }
  });
}