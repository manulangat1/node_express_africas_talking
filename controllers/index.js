const menu = require('./menu')

exports.Index = async (req,res) => {
    await menu(req).run(req.body,ussdResult => {
        res.send(ussdResult)
    })
}