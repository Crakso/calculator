const exp = require("express");
const bodyparser = require("body-parser");// allows you to access request.

const app = exp();
app.use(bodyparser.urlencoded({ extended: true })) // .urlencoded read all data coming from url like index.html

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/about", function (req, res) {
    res.send("This is good calculator");
});
app.get("/bmi_calculator", function(req, res){
    res.sendFile(__dirname + "/bmi_Calculator.html");
});
app.post("/", function (req, res) { //GET requests are meant to fetch data from specified resources and POST requests are meant to submit data to a specified resource.
    // console.log(req.body);
    var num1 = Number(req.body.num1);   // fetch the 1st no. from the url. 
    var num2 = Number(req.body.num2);   // fetch the 2nd no. from the url.
    var result = num1+num2;
    res.send("The addition of the two number is "+ result);
});
app.post("/bmi_Calculator", function(req, res){
    var wgt = Number(req.body.wgt);
    var hgt = Number(req.body.hgt);
    var result = (wgt/(hgt*hgt))*10000;
    res.send("Your bmi is "+result);
});
app.listen(3000, function () {
    console.log("Server are live now");
});