// this will allow you to access everything from the file that we downloaded.(nodemailer ofcourse.)
var nodemailer = require('nodemailer'); //this will allow this code to get access to the node mailer library/package 

var transporter = nodemailer.createTransport({// Sign in to ur email address
    service: 'gmail',
    auth: {
        user: 'email',
        pass: 'password'
    }
});

var mailOptions = {
    from: 'email or name in gmail',// ur format, subject, text and stuff
    to: 'some other email',
    subject: "no reply",
    text: ''
};

transporter.sendMail(mailOptions, function(error, info){//will connect to the server and send the email.
    if (error) {
    console.log(error);
    } else {
    console.log('Email sent: ' + info.response);
    }
});



//type in this code.
//code will be in the description dont worry.

//:)
