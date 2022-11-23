//importando as funções do models
const lojaModel = require('../models/lojaModel');


//MODELS FUNCTIONS OF TABLE LOJA//
//-------------------------------------------------------//
//CREATE//
const newLoja = async (request,response) =>{
    const newLoja = await lojaModel.newLoja(request.body);
    return response.status(201).json(newLoja);
};

//GET FOR ID
const getLoja = async (request,response) =>{
    const {id} = request.params;
    const loja = await lojaModel.getLoja(id);
    return response.status(200).json(loja);
};

//GET ALL//
const getAll = async (request,response) =>{
    const {take,skip} = request.query;
    const loja = await lojaModel.getAll(take,skip);
    return response.status(200).json(loja);
};

//DELETE//
const deleteLoja = async (request,response) =>{
    const {id} = request.params;
    await lojaModel.deleteLoja(id);
    return response.status(204).json();
};

//UPDATE
const updateLoja = async (request, response) =>{
    const {id} = request.params;
    await lojaModel.updateLoja(id, request.body);
    return response.status(204).json();
};
//-------------------------------------------------------//

module.exports = {
    getAll,
    getLoja,
    newLoja,
    updateLoja,
    deleteLoja, 

};