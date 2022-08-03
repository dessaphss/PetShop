const express = require('express') // servidor
const dotenv = require('dotenv') // variavel de ambiente
const mustache = require('mustache-express') // template endne
const path = require('path')
//criando a variavel server que vai armazenar o express
const server = express()

//importando mainRoutes que será o arquivo da rota
const mainRoutes = require('./routes/index')

dotenv.config()

// configuração do mustache 
server.set('view engine', 'mustache')
server.set('views',path.join(__dirname, 'views')) // junção da raiz do arquivo do projeto com a pasta views
server.engine('mustache',mustache())
server.use(express.static(path.join(__dirname, '../public'))) // diretorio com os arquivos de css, html e imagens
//usando a rota importada
server.use(mainRoutes)
//escutando a porta que está no .env
server.listen(process.env.PORT)