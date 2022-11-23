const express = require('express');
const lojaController = require('./controllers/lojaController');//Importando controllers LOJA 
const vendasController = require('./controllers/vendasController');//Importando controllers VENDAS
const lojaMiddlewares = require('./middlewares/lojaMiddlewares');//Tratamento de algumas exceptions para loja
const vedasMiddlewares = require('./middlewares/vendasMiddlewares');//Tratamento de algumas exceptions para vendas
const router = express.Router();

//TABLE LOJA//
//-----------------------------------------------------------------------------------------------//
/* 
[X] -Created
[X] -Read for id 
[x] -Read ALL
[X] -Update
[X] -Delete
*/

//CREATE//
router.post('/Loja/create', lojaMiddlewares.validateBody, lojaController.newLoja);

//READ FOR ID//
router.get('/lojaID/:id', lojaController.getLoja);

//READ ALL//
router.get('/lojas', lojaMiddlewares.validateQueryLoja,lojaController.getAll);

//UPDATE//
router.put('/loja/update/:id', lojaMiddlewares.validateBody, lojaController.updateLoja);

//DELETE//
router.delete('/loja/delete/:id', lojaController.deleteLoja);
//-----------------------------------------------------------------------------------------------//

//TABLE VENDAS//
/* 
[X] -Created
[X] -Read for id 
[x] -Read ALL
[x] -Update
[x] -Delete
*/
//CREATE NEW VENDA//
router.post('/venda/new',vedasMiddlewares.validateBodyVenda, vendasController.newVenda);
                                                
//READ FOR ID//
router.get('/vendaID/:id', vendasController.getVenda);

//READ FILTER DATE AND PAGINATION//
router.get('/vendas/date', vedasMiddlewares.validateDate,vedasMiddlewares.validateQuery, vendasController.getVendaData);

//READ ALL AND PAGINATION//
router.get('/vendas/', vedasMiddlewares.validateQuery, vendasController.getAll);

//UPDATE//
router.put('/vendas/:id',  vendasController.updateVenda);

//DELETE//
router.delete('/vendas/delete/:id', vendasController.deleteVenda);


module.exports = router;


