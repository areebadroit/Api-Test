const mongoose = require('mongoose'),
    express = require('express'),
    app = express();



//Mongoose URL
const database =  'mongodb+srv://areeb:zNntxsYsd8yhmYev@test-icewh.mongodb.net/test?retryWrites=true&w=majority';
//Mongo CONNECTION
mongoose.connect(database, { useNewUrlParser: true,useUnifiedTopology: true}, (err) => {
    if(err)
        console.log('Unable to connect to mongoDB servers');
    else 
        console.log('Connected to MongoDB servers');
});

//==================================================================================================

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  var v1 = "EAN";
  
app.get("/data", (req, res) => { 
    var v2 = between(111111, 9999999).toString();
    res.send(v1.concat(v2));
 });

 app.get("/", (req, res) => { 
    var v3 = between(111111, 9999999).toString();
    var v4 = v1.concat(v3);
    res.render("home.ejs", {data:v4});
 });




app.listen(process.env.PORT || 4000, () => {
    console.log(`The API Server has started`);
});