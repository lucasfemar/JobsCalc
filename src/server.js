const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

//Definindo o motor de vizualização HTML (Usando template engine)
server.set('view engine', 'ejs')

// Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

//Habilitar arquivos estaticos (arquivos na pasta public)
server.use(express.static("public"))

//usar o req.body da pagina routes.js
server.use(express.urlencoded({ extended: true }))

// rotas (vindo da pagina routes.js)
server.use(express.static("./routes"))


//utilizando as rotas
server.use(routes)

//Ligando o servidor
server.listen(process.env.PORT || 3000); //Ligando o servidor local