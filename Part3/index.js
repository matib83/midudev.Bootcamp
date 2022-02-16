const http = require('http')    //Importar el modulo http utilizando Common.JS

let notes = [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true,
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false,
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true,
    },
  ]

const app = http.createServer((request, response) => {      //Callback, funcion que se ejecuta cada vez que
    response.writeHead(200, { 'Content-Type':'application/json'}) //le llegue un request (petición al servidor)
    response.end(JSON.stringify(notes))                              //responde enla cabecera con status 200
})

const PORT = 3001                                           //puerto por donde escucha mi servidor
app.listen(PORT)
console.log(`Server running on port ${PORT}`)               //Consola del servidor (no del navegador)