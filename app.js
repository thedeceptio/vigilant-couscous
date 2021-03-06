// Dotenv helps us read from the environment files
require("dotenv").config();

//Import basic building blocks of the Express 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const {Response} = require("./utilities")
const app = express();
//To handle cross origin requests 
app.use(cors());
// This will allow nested objects in the request fields
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(Response)
const port = process.env.PORT || 3006;

// Import all the routes from our Routes folder 
// Too bad there is only one file to import here :P
const {DataRoutes} = require('./routes');
app.use("/data", DataRoutes);

//Basic Health Check
app.get("/", (req, res) => {
  res.json({message: "Welcome to Vigilant Couscous"});
});

// In case we get a request for the route that we have not specified
app.get("*", (req, res) => {
    //TODO import the code and error from a constant file
  res.status(404).json({error: `Couldn't find the route.`});
});
const readDataFromFiles = async function(){
    let files = ['./datasets/salary_survey-1.json', './datasets/salary_survey-2.json', './datasets/salary_survey-3.json']
    let salary_data = []
    for (file of files){
        let data = require(file)
        salary_data = [...salary_data,...data]
    }
    return salary_data
}

readDataFromFiles().then((data)=>{
    salary_data = data 
    app.listen(port, () => {
        // At this point your app has started listening to requests
        console.log("running on ", port);
    });
}).catch(error=>{
    console.error(error)
})



