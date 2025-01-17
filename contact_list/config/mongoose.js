// // we require the library
// const mongoose = require('mongoose');

// //connect to the database
// mongoose.connect('mongodb//localhost/contact_list_db');

// //acquire the connection (to check if it is successful)
// const db = mongoose.connection;

// //error
// db.on('error', console.error.bind(console, 'error connecting to db'));

// // up and running then print the message
// db.once('open', function(){
//     console.log('Successfully connect to the database');
// });

// we require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/contact_list_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//acquire the connection (to check if it is successful)
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'Error connecting to db'));

// up and running then print the message
db.once('open', function () {
    console.log('Successfully connected to the database');
});
