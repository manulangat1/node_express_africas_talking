const User = require('../../models/User')
const UssdMenu = require('ussd-menu-builder')
var menu = new  UssdMenu()
exports.Index = async(req,res) => {
    menu.startState({
        run: function(state)  {
            // const {phoneNumber} = menu.args
            // const user = User.findOne({tel:phoneNumber})
            const registerInstruction = `Welcome to mSACCO \nEnter your first name to register:`;
            if (user){
                menu.con(
                    `Welcome back, ! \nEnter your 4-digit PIN to continue`
                ) 
            }    else {
                menu.con(registerInstruction)
            }
        },
        next: {
			'*\\d{4}': 'dashboard',
			'*\\w+': 'register'
		}
    })
    menu.state('invalidOption', {
		run: () => {
			menu.end(`Invalid option`);
		}
	});
    return  menu
}