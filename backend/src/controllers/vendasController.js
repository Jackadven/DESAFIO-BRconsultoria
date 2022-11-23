//importando as funções do models de vendas e trabalhando com req e resp
const { request, response } = require('express');
const vendasModel = require('../models/vendasModel');


//MODELS FUNCTION OF TABLE VENDAS//
//-------------------------------------------------------//
//CREATE//
const newVenda = async (request,response) =>{
    const newVenda = await vendasModel.newVenda(request.body);
    return response.status(201).json(newVenda);
};

//GET FOR ID
const getVenda = async (request,response) =>{
    const {id} = request.params;
    const venda = await vendasModel.getVenda(id);
    return response.status(200).json(venda);
};

//GET FILTER DATE with PAGINATION//
const getVendaData = async (request,response) =>{
    const  {take,skip} = request.query;
    const {dataInicio,dataFim} = request.body;
    const vendas = await vendasModel.getVendaData(dataInicio,dataFim,take,skip);
    return response.status(200).json(vendas);
};

//GETALL with PAGINATION//
const getAll = async (request,response) =>{
    const  {take,skip} = request.query;
    const vendas = await vendasModel.getAll(take,skip);
    return response.status(200).json(vendas);
};

//UPDATE
const updateVenda = async (request, response) =>{
    const {id} = request.params;
    await vendasModel.updateVenda(id, request.body);
    return response.status(204).json();
};

//DELETE
const deleteVenda = async (request,response) =>{
    const {id} = request.params;
    await vendasModel.deleteVenda(id);
    return response.status(204).json({menssage: 'Venda deleted'});
};
//-------------------------------------------------------//

module.exports = {
    getAll,
    getVendaData,
    getVenda,
    newVenda,
    updateVenda,
    deleteVenda
};