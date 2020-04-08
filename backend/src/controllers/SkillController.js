const dbconnection = require('../database/dbconnection');

module.exports = {
    async index(req, res) {
        const skills = await dbconnection('skills').select('*');

        return res.json(skills);
    },    

    async create(req, res) {
        const { type, period, title, description } = req.body;
        const user_id = req.headers.authorization;

        const [id] = await dbconnection('skills').insert({
            type,
            period,
            title,
            description,
            user_id,
        });

        return res.json({ id });
    },

    async delete(req, res) {
        const { id } = req.params;
        const user_id = req.headers.authorization;

        const skill = await dbconnection('skills')
            .where('id', id)
            .select('user_id')
            .first();

        if (skill.user_id !== user_id) {
            return res.status(401).json({ error:'Operação não permitida'});
        }

        await dbconnection('skills')
            .where('id', id)
            .delete();

        return res.status(204).send();
    }
}