const mongoose = require('mongoose')
function dbConnect (url){

    mongoose.connect(url)
    .then(() =>{
        console.log('Database connect Successfully');
    })
    .catch((error) =>{
        console.log(error);
    })
}

module.exports = dbConnect;