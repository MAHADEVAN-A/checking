const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer'); 
// const bodyParser = require('body-parser');


const app = express()
app.use(cors())
app.set('view engine','ejs')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/mail',(req,res)=>{
	const formdata = req.body
	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'mahadeva14420@gmail.com',
	    pass: 'mikhailnaimy@1'
	  }
	});

	var mailOptions = {
	  from: 'mahadevan21csc@gmail.com',
	  to: 'mahadevan@student.tce.edu',
	  subject: 'User Form submission',
	  html: `User name: ${formdata.name}<br>

	         Mail ID  : ${formdata.email}<br>
	         
	         Message  : ${formdata.message}`
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	}); 
	res.send('success')
})



const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})