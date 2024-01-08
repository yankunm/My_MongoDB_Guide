# Yankun's MongoDB Guide

## Installation

[MongoDB Docs Installation for MacOS](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)

[MongoDB Operators](https://www.mongodb.com/docs/manual/reference/operator/)

## Mongoose

**Mongoose** is an **Object Document Mapper (ODM)**, it maps data/document in Mongo to JavaScript objects for easy use in JS.

To connect with Node Apps, it is easier to work with Mongoose than a node.js driver. 

[Mongoose Documentation](https://mongoosejs.com/)

### Mongoose Quickstart

Connect to Mongoose:
```
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log("CONNECTION OPENED"))
    .catch(err => {
        console.log("OH NOO ERROR");
        console.log(err);
    })
```

## On JS side

Create a schema and using that schema, create a model:
```
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    school: String,
});

const Person = mongoose.model("Person", personSchema);
const bob = new Person({ name: "Bob", age: 21, email: "123@gmail.com", school: "Harvard" });

```

Now `bob` is a **model** object and it has [model methods](https://mongoosejs.com/docs/api/model.html).

In `node` REPL:
```
.load index.js
```
This will execute the JS file and allow you to continue interacting with it. Then you can test to see that `bob`, an instance (Model) of the `Person`` Schema, has been created.

### Connecting with Mongo

Now that you have `bob`, you can take it and save it to the database.
```
bob.save()
```