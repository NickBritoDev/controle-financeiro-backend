import express from 'express'
import { FiltrarBancoUnicoController } from '../../controllers/bancos/FiltraBancoUnicoController.js'
import { CriarNovoBancoController } from '../../controllers/bancos/CriarNovoBancoController.js'
import { AtualizarDadosBancosController } from '../../controllers/bancos/AtualizarDadosBancosController.js'
import { DeletarBancosController } from '../../controllers/bancos/DeletarBancosController.js'
import { FiltrarBancosController } from '../../controllers/bancos/FiltrarBancosController.js'

const router = express.Router()

router.post('/criar-novo-banco', CriarNovoBancoController)

router.get('/filtrar-bancos', FiltrarBancosController)

router.get('/filtrar-banco/:id_banco', FiltrarBancoUnicoController)

router.delete('/deletar-banco/:id_banco', DeletarBancosController)

router.patch('/atualizar-dados-banco/:id_banco', AtualizarDadosBancosController)

export default router
