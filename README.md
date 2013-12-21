<h1>Meteor Base</h1>  [![Build Status](https://travis-ci.org/jdlnolen/meteor-base.png)](https://travis-ci.org/jdlnolen/meteor-base)

Base meteor app 

Basic CRUD stuff. 

Sending emails uses Mailgun. To send external emails, set the MAILGUN_TOTAL environment variable to this:

MAILGUN_TOTAL = 'smtp://postmaster%40YOURDOMAIN.mailgun.org:YOURPASSWORD@smtp.mailgun.org:587'

where YOURDOMAIN and YOURPASSWORD come from your mailgun settings. 

Email functionality taken from here:

http://blog.mailgun.com/post/create-a-web-app-from-scratch-in-under-5-minutes-with/
