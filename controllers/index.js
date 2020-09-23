const {  Indexs } = require('./menu')
const UssdMenu = require('ussd-menu-builder')
const User = require('../models/User')
exports.entryIndexs = async (req,res) => {
    try {

        const { sessionId,serviceCode,phoneNumber,text } = req.body
    const textValue = text.split('*').length
    // const user = await User.findOne({tel:phoneNumber})
    console.log(user)
     await  Indexs(req,res)
    } catch (err) {
        console.log(`ERROR:${err}`)
        res.contentType('text/plain')
        res.status(500).send("Invalid")
    }
}