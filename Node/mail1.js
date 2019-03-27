var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:'nodesourabh@gmail.com',
    pass:'node_sourabh123!'
  }
});
  var mailOptions = {
    from: 'nodesourabh@gmail.com',
    to: 'girishh143@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'hi,This is me.....'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });