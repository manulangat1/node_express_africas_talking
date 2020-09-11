const menu = require('./menu')

exports.Index = async (req,res) => {
    try {
        console.log('Hitting it')
        menu.run(req.body,function(ussdResult) {
            res.send(ussdResult)
        })
    } catch (err){
        console.log(`ERROR:${err}`)
        // res.status(500).json({
        //     success:false,
        //     message:"Eror"
        // })
    }
}