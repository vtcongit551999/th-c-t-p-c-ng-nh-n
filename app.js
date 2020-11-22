const express  = require('express');


const app = express();
const mongoose  = require('mongoose');




//routes
app.get('/',function(req,res) {
	res.send('home on mic');
});

app.get('/post',function(req,res) {
	res.send('school on mic');
});


//connect to db 
mongoose.connect('mongodb://localhost:27017/projectcong', {useNewUrlParser: true, useNewUrlParser: true,  useUnifiedTopology: true});
var db = mongoose.connection;
//Bắt sự kiện error
db.on('error', function(err) {
  if (err) console.log(err)
});
//Bắt sự kiện open
db.once('open', function() {
  console.log("Kết nối thành công !");
});
//how to we start listening to the server?retryWrites=true&w=majority
app.listen(3000);