const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res) => res.send('<h1>Página inicial</h1'))

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))