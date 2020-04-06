const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async store(request,response) {

        const { servidor, descricao } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        var data = new Date();
        data = data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
        await connection('registros').insert({
            id,
            servidor,
            descricao,
            data,
        });

        return response.json({ id });
    },

    async index(request,response) {
        const registros = await connection('registros').select('*');

        return response.json(registros);
    },

    async delete(request,response) {
        const { id } = request.params;

        await connection('registros').where('id',id).delete();
    }
};