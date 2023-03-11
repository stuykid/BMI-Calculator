const express = require("express");
const bodyParser = require("body-parser"); // npm install body-parser  ..

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // code everytime you need body parser (req.body)

const port = 3000;


                  /* Calculator(addition) */

// app.get("/", function(request, response){ 
//     //console.log(__dirname);  // will tell you your current path
//     response.sendFile(__dirname + "/index.html"); // will get the path of directory + file name
// } );

// app.post("/", function(req, res){
//     //console.log(req.body.num1);
//     let num1 = Number(req.body.num1); // need to change from text to number
//     let num2 = Number(req.body.num2);
//     let result = num1 + num2;
//     res.send("The result of the addition is " + result);
// } );



// app.listen(port, function(){
//     console.log("Server started on port 3000");
// });


                    /* BMI calculator */

app.get("/bmicalculator", function(req, res){        
    res.sendFile(__dirname + "/bmicalculator.html"); // get the path of directory + file name
    console.log(__dirname);                          // log current path
});

app.post("/bmicalculator", function(req, res){

    let weight = parseFloat(req.body.weight);        // change text to decimal(float)
    let height = parseFloat(req.body.height); 
    let bmi = weight/ (height* height) * 703;        // US BMI calculator
    bmi = Math.round(bmi);                           // round to nearest whole number       

    res.send("Your BMI is " + bmi);                  // post response
});

app.listen(port, function(){
    console.log("Server started on port 3000");
});