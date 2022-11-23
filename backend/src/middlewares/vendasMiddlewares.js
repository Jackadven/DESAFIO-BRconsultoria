const validateQuery = (request,response,next) => {
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

const validateDate = (request,response,next) => {
    const {dataInicio,dataFim} = request.body; 
    if(dataInicio == undefined){
       return response.status(400).json({menssage: 'The field "dataInicio" is required'});
    }
    if(dataInicio == ''){
       return response.status(400).json({menssage: '"dataInicio" cannot be empty'});
    }
    if(dataFim == undefined){
       return response.status(400).json({menssage: 'The field "dataFim" is required'});
    }
    if(dataFim == ''){
       return response.status(400).json({menssage: '"dataFim" cannot be empty'});
    }
    next();
};  

//Verifica se os dados obrigadorios para cria a venda foram inseridos
const validateBodyVenda = (request,response,next) => {
    const {n_cartao,valor_bruto,valor_liquido,parcelas,modalidade,bandeira,loja_id} = request.body; 
    if(n_cartao == undefined){
       return response.status(400).json({menssage: 'The field "n_cartao" is required'});
    }
    if(n_cartao == ''){
       return response.status(400).json({menssage: '"n_cartao" cannot be empty'});
    }
    if( valor_bruto== undefined){
        return response.status(400).json({menssage: 'The field "valor_bruto" is required'});
     }
     if(valor_bruto == ''){
        return response.status(400).json({menssage: '"valor_bruto" cannot be empty'});
     }
     if(valor_liquido == undefined){
        return response.status(400).json({menssage: 'The field "valor_liquido" is required'});
     }
     if(valor_liquido == ''){
        return response.status(400).json({menssage: '"valor_liquido" cannot be empty'});
     }
     if(parcelas == undefined){
        return response.status(400).json({menssage: 'The field "parcelas" is required'});
     }
     if(parcelas == ''){
        return response.status(400).json({menssage: '"parcelas" cannot be empty'});
     }
     if(modalidade == undefined){
        return response.status(400).json({menssage: 'The field "modalidade" is required'});
     }
     if(modalidade == ''){
        return response.status(400).json({menssage: '"modalidade" cannot be empty'});
     }
     if(bandeira == undefined){
        return response.status(400).json({menssage: 'The field "bandeira" is required'});
     }
     if(bandeira == ''){
        return response.status(400).json({menssage: '"bandeira" cannot be empty'});
     }
     if(loja_id == undefined){
        return response.status(400).json({menssage: 'The field "loja_id" is required'});
     }
     if(loja_id == ''){
        return response.status(400).json({menssage: '"loja_id" cannot be empty'});
     }
    next();
};  

module.exports = {
    validateQuery,
    validateBodyVenda,
    validateDate,
    //validateIDvenda
}; 