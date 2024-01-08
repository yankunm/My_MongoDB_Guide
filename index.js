const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/tabletennis')
    .then(() => console.log("CONNECTION OPENED"))
    .catch(err => {
        console.log("OH NOO ERROR");
        console.log(err);
    })

// person object
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    school: String,
});

const Person = mongoose.model("Person", personSchema);
const sammy = new Person({ name: "Sammy", age: 21, email: "123@gmail.com", school: "Roslyn" });
