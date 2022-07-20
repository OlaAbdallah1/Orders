    const mongoose = require('mongoose')
    const validator = require('validator')

    mongoose.connect('mongodb://localhost:27017/books', {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
      }).catch(err => {
        console.error("Connection error", err);
        process.exit();
      });
