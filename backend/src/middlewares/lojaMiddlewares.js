const validateBody = (request,response,next) => {
    const {body} = request; 
    if(body.nome_loja == undefined){
       return response.status(400).json({menssage: 'The field "nome_loja" is required'});
    }
    if(body.nome_loja == ''){
       return response.status(400).json({menssage: '"nome_loja" cannot be empty'});
    }
    next();
};  

const validateQueryLoja = (request,response,next) => {
    const {take,skip} = request.query; 
    if(take == undefined){
       return response.status(400).json({menssage: 'The query "take" is required'});
    }
    if(take == ''){
       return response.status(400).json({menssage: 'The query "TAKE" cannot be empty'});
    }
    if(skip == undefined){
        return response.status(400).json({menssage: 'The query "Skip" is required'});
     }
     if(skip == ''){
        return response.status(400).json({menssage: 'The query "SKip" cannot be empty'});
     }
    next();
};  

module.exports = {
    validateBody,
    validateQueryLoja
}; 