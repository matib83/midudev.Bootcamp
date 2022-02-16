const http = require('http')                                //Importar el modulo http utilizando Common.JS
const app = http.createServer((request, response) => {      //Callback, funcion que se ejecuta cada vez que
    response.writeHead(200, { 'Content-Type':'text/plain'}) //le llegue un request (petición al servidor)
    response.end('Hello Word')                              //responde enla cabecera con status 200
})

const PORT = 3001                                           //puerto por donde escucha mi servidor
app.listen(PORT)
console.log(`Server running on port ${PORT}`)