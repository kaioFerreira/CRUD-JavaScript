const express = require('express');
const RegistroControler = require('./controllers/RegistroController');

const routes = express.Router();

/**
 * Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Busca/listar um informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Altera uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

/**
 * Tipos de parâmentros
 * 
 * Query Params, Route Params, Request Body
 */

/**
 *  Query: Parámetros nomeados e enviados na rota após "?" (Filtros, paginação)
 * 
 *  /users?nome=Kaio&idade=55
 *  const { nome , idade } = request.query;
 */

/**
 * Route: Parametros utilizados para identificar recursos
 * 
 * /users/50
 * const { id } = request.params;
*/

/**
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * const { nome, idade } = request.body;
*/

routes.get('/registros', RegistroControler.index);
routes.post('/registros', RegistroControler.store);
routes.delete('/registro/:id', RegistroControler.delete);

module.exports = routes;