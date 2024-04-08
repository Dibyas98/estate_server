import mongoose from 'mongoose'
function dbConnect (url){

    mongoose.connect(url)
    .then(() =>{
        console.log('Database connect Successfully');
    })
    .catch((error) =>{
        console.log(error);
    })
}

export default dbConnect;