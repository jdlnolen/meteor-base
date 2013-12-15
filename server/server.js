Meteor.startup(function () {
    process.env.MAIL_URL = process.env.MAILGUN_TOTAL;});


Meteor.methods({
    sendEmail: function(email) {
      Email.send({to:email, from:'test@mail.com', subject:'Thank you for signing up!', text: 'We will let you know when we have some news.'});
    }
});