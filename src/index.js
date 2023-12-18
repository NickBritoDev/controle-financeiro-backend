import express from 'express'
import bodyParser from 'body-parser'
import usuarios from './routes/usuarios/usuarios.js'
import bancos from './routes/bancos/bancos.js'
import movimentacao from './routes/movimentacao/movimentacao.js'
import contas from './routes/contas/contas.js'

const app = express()
const PORT = 5555

app.use(bodyParser.json())

app.use('/controle-financeiro/usuarios', usuarios)
app.use('/controle-financeiro/bancos', bancos)
app.use('/controle-financeiro/movimentacao', movimentacao)
app.use('/controle-financeiro/contas', contas)

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
