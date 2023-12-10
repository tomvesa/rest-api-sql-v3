const {User} = require('../models/');

console.log({User})
module.exports = {
    register: async (req,res) => {
      try { 
        let {firstName, lastName, emailAddress, password} = req.body;
        console.log({firstName})

        let user = await User.create({
            firstName,
            lastName,
            emailAddress: emailAddress.toLowerCase(),
            password
        });

        return res.status(201).json({
            message: 'User created successfully',
            user,
        })
    } catch (err){
        return res.status(400).json({
            error: err.message,
        })
    }
},

getAllUsers: async (req, res) =>{
    try {
        const users = await User.findAll({
                    attributes: ['id', 'firstName', 'lastName', 'emailAddress' ],
                    order: [['id', 'DESC']]
                    });
        return res.status(200).json({ users });
} catch (err) {
    res.status(400).json({err})}
},

}