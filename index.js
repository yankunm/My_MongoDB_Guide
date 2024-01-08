const mongoose = require("mongoose");

// connect to tabletennis database or 
// creates tabletennis database if there isn't one on localhost port 27017
mongoose.connect('mongodb://127.0.0.1:27017/tabletennis')
    .then(() => console.log("CONNECTION OPENED"))
    .catch(err => {
        console.log("OH NOO ERROR");
        console.log(err);
    })

// person Schema, a template needed to create models
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    school: String,
});

// A model: A JS class that represents data could be stored in mongo and allows us to interact with it 
// through model methods

// A JS Class called Person that is a MODEL
const Person = mongoose.model("Person", personSchema);

// sammy is an instance of the class Person
const sammy = new Person({ name: "Sammy", age: 21, email: "123@gmail.com", school: "Roslyn" }); 
