const express = require('express');
const app = express();
app.get('/', (request, response) => {
	response.sendStatus(200);
});
app.listen(3000); // Recebe solicitações que o deixa online
const Discord = require('discord.js'); //Conexão com a livraria Discord.js
const db = require('quick.db');
const Canvas = require('canvas');
const client = new Discord.Client(); //Criação de um novo Client
const config = require('./config.json'); //Pegando o prefixo do bot para respostas de comandos

 client.login(process.env.TOKEN);   