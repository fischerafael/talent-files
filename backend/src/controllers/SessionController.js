const dbconnection = require('../database/dbconnection');

module.exports = {
    async create(req, res) {
        const { id, password } = req.body;

        const user = await dbconnection('users')
            .where('id', id)
            .where('password', password)
            .select('firstName')
            .first();

        if (!user) {
            return res.status(400).json({ error: 'Usuário ou senha inválida' });
        }

        return res.json(user);
    }
}