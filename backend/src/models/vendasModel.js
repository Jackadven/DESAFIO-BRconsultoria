//todas as funções de vendas que interagem com o DB
const connection = require('./connection');

/* 
[X] -Created
[X] -Read for id 
[x] -Read ALL
[x] -Update
[x] -Delete
*/

//Create//
const newVenda = async (venda) =>{
    await connection.connect();
    const {n_cartao} = venda;
    const {valor_bruto} = venda;
    const {valor_liquido} = venda;
    const {parcelas} = venda;
    const {modalidade} = venda;
    const {bandeira} = venda;
    const {loja_id} = venda;
     
    const query = 'INSERT INTO vendas(n_cartao,valor_bruto,valor_liquido,parcelas,modalidade,bandeira,loja_id) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING id'; 
    const newVenda = await connection.query(query, [n_cartao,valor_bruto,valor_liquido,parcelas,modalidade,bandeira,loja_id]); 
    return newVenda.rows;
};
//---------------------------------------------//


//READ VENDAS//
const getVendaData = async(dataInicio,dataFim,take,skip) => {
    await connection.connect();
    const query = 'SELECT * FROM vendas WHERE data::date BETWEEN $1 AND $2 ORDER BY data ASC LIMIT $3  OFFSET $4';
    const vendas = await connection.query(query,[dataInicio,dataFim,take,skip]);
    return vendas.rows;
};

//READ VENDAS with PAGINATION//
const getAll = async(take,skip) => {
    await connection.connect();
    const query = 'SELECT * FROM vendas ORDER BY data ASC LIMIT $1  OFFSET $2';
    const vendas = await connection.query(query,[take,skip]);
    return vendas.rows;
};

//READ for id:
const getVenda = async(id) => {
    await connection.connect();
    const venda = await connection.query('SELECT * FROM vendas WHERE id = $1',[id]);
    return venda.rows;
};

//Update//
const updateVenda = async (id, venda) => {
    await connection.connect();
    const {n_cartao} = venda;
    const {valor_bruto} = venda;
    const {valor_liquido} = venda;
    const {parcelas} = venda;
    const {modalidade} = venda;
    const {bandeira} = venda;
    const {loja_id} = venda;

    const query = 'UPDATE vendas SET n_cartao=$1, valor_bruto=$2, valor_liquido=$3, parcelas=$4, modalidade=$5, bandeira=$6, loja_id=$7 WHERE id = $8';
    const updateVenda = await connection.query(query,[n_cartao,valor_bruto,valor_liquido,parcelas,modalidade,bandeira,loja_id,id]);
    return updateVenda;
};


//delete//
const deleteVenda = async (id) => {
    await connection.connect();
    const query = 'DELETE FROM vendas WHERE id = $1';
    const removedVenda = await connection.query(query,[id]);
    return removedVenda;
};


//objeto das funções//
module.exports = {
    getAll,
    getVendaData,
    getVenda,
    newVenda,
    updateVenda,
    deleteVenda
};