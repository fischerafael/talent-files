const dbconnection = require('../database/dbconnection');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const [counter] = await dbconnection('users')
            .count();

        const users = await dbconnection('users')                    
            .limit(10)
            .offset((page - 1) * 10)
            .select('users.firstName', 'users.lastName', 'users.profession', 'users.city', 'users.uf','users.id', 'users.whatsapp');

        res.header('X-Total-Count', counter['count(*)']);        

        return res.json(users);
    },

    async create(req, res) {
        
        const { id,password,firstName,lastName,profession,whatsapp,city,uf } = req.body;

        await dbconnection('users').insert({
            id,
            password,
            firstName,
            lastName,
            profession,
            whatsapp,
            city,
            uf
        })
    
        return res.json({ id });
    },

    async delete(req, res) {        
        const user_id = req.headers.authorization;

        const user = await dbconnection('users')
            .where('id', user_id)
            .select('id')
            .first();

        if (user.id !== user_id) {
            return res.status(401).json({ error:'Operação não permitida'});
        }

        await dbconnection('users')
            .where('id', user_id)
            .delete();

        return res.status(204).send();
    }
}