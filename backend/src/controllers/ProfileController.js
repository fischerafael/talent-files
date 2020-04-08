const dbconnection = require('../database/dbconnection');

module.exports = {
    async index(req, res) {
        const user_id = req.headers.authorization;

        const skills = await dbconnection('skills')
            .where('user_id', user_id)
            .select('*');

        return res.json(skills);
    },
    // This method lists specific skills via URL params (user email)
    async indexFront(req, res) {
        const { user_id } = req.params;  
        
        const user = await dbconnection('users')
            .where('id', user_id)
            .select('*');

        const skills = await dbconnection('skills')
            .where('user_id', user_id)
            .select('*');

        return res.json({user, skills});
    }
}


    
