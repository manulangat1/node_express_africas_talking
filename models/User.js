const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    tel:{type:String,required:true}
})
UserSchema.pre('save',  async function(next){
    const user = this 
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
})

const User = mongoose.model('User',UserSchema)
module.exports = User