const express = require('express');
const server = express();

server.use(express.json());

//Tipos de animais
const animais_tipo = ['Gato', 'Cachorro', 'Roedor', 'Aves', 'Outros'];

//Retornar um tipo de animal
server.get('/animais_tipo/:index', (req, res) => {
    const { index } = req.params;
    return res.json(animais_tipo[index]);
});

//Retornar todos os tipos de animais
server.get('/animais_tipo', (req, res) => {
    return res.json(animais_tipo);
});

//Animais
const animais = ['Rex', 'Nina', 'Mel'];

//Listar todos os animais
server.get('/animais', (req, res) => {
    return res.json(animais);
});

//Retornar um animal específico
server.get('/animais/:index', (req, res) => {
    const { index } = req.params;
    return res.json(animais[index]);
});


//Criar um novo animal
server.post('/animais', (req, res) => {
    const { name } = req.body;
    animais.push(name);

    return res.json(animais);
});

//Alterar dados de animal
server.put('/animais/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    animais[index] = name;

    return res.json(animais);

});

//deletar um animal
server.delete('/animais/:index', (req, res) => {
    const { index } = req.params;
    
    animais.splice(index, 1);
    return res.json({ message: "O animal foi deletado"});
});

server.listen(3000);