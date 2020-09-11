const User = require('../models/User')


exports.Index = async (req,res) => {
    menu.startState({
        run:() => {
            const {phoneNumber} = menu.args
            const user = await User.findOne({tel:phoneNumber})
            const registerInstruction = `Welcome to mSACCO \nEnter your first name to register:`;
            if (user){
                menu.con(
                    `Welcome back, ${user.username}! \nEnter your 4-digit PIN to continue`
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
    return await menu
}