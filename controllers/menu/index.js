const User = require('../../models/User')
const UssdMenu = require('ussd-menu-builder')
// var menu = new  UssdMenu()
exports.Indexs = async(req,res) => {
    const menu = new UssdMenu()
    // const user = await User.findOne({tel:phoneNumber})
    menu.startState({
        run: () => {
            // use menu.con() to send response without terminating session      
            menu.con('Welcome. Choose option:' +
                '\n1. Show Balance' +
                '\n2. Buy Airtime');
        },
        // next object links to next state based on user input
        next: {
            '1': 'showBalance',
            '2': 'buyAirtime'
        }
    });
    // menu.()
    return menu.run(req.body, ussdResult => {
        res.status(200).send(ussdResult);
    });
}