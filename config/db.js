const mongoose = require('mongoose')


const connectDB  = async () =>  {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useCreateIndex:true,
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
    } catch (err) {
        console.log(`ERROR:${err}`)
        process.exit(1)
    }
}

module.exports = connectDB