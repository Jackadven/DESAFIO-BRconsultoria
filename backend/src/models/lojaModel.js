//Todas as funções que interagem com o DB
const connection = require('./connection');

/* 
[x] -Created
[X] -Read for id 
[x] -Read
[x] -Update
[x] -Delete
*/

//CREATE//
const newLoja = async (loja) =>{
    await connection.connect();
    const {nome_loja} = loja;
    const query = 'INSERT INTO loja(nome_loja) VALUES($1) RETURNING id';  
    const newLoja = await connection.query(query, [nome_loja]); 
    return newLoja.rows;
};

//READ FOR ID//
const getLoja = async(id) => {
    await connection.connect();
    const loja = await connection.query('SELECT * FROM loja WHERE id = $1',[id]);
    return loja.rows;
};

//READ ALL//
const getAll = async(take,skip) => {
    await connection.connect();
    const query = 'SELECT * FROM loja ORDER by id ASC LIMIT $1  OFFSET $2';
    const loja = await connection.query(query,[take,skip]);
    return loja.rows;
};  


//UPDATE//
const updateLoja = async (id, loja) => {
    await connection.connect();
    const {nome_loja} = loja;
    const query = 'UPDATE loja SET nome_loja = $1 WHERE id = $2';
    const updateLoja = await connection.query(query,[nome_loja,id]);
    return updateLoja;
};


//DELETE//
const deleteLoja = async (id) => {
    await connection.connect();
    const query = 'DELETE FROM loja WHERE id = $1';
    const removedLoja = await connection.query(query,[id]);
    return removedLoja;
};


//objeto das funções//
module.exports = {
    getAll,
    getLoja,
    newLoja,
    updateLoja,
    deleteLoja
};