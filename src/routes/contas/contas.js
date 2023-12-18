import express from 'express'
import { CriarNovaContaController } from '../../controllers/contas/CriarNovaContaController.js'
import { AtualizarDadosContaController } from '../../controllers/contas/AtualizarDadosContaController.js'
import { DeletarContasController } from '../../controllers/contas/DeletarContasController.js'
import { FiltrarContasController } from '../../controllers/contas/FiltrarContasController.js'
import { FiltrarContaUnicoController } from '../../controllers/contas/FiltrarContaUnicoController.js'

const router = express.Router()

router.post('/criar-nova-conta', CriarNovaContaController)

router.get('/filtrar-contas', FiltrarContasController)

router.get('/filtrar-conta/:id_conta', FiltrarContaUnicoController)

router.delete('/deletar-conta/:id_conta', DeletarContasController)

router.patch('/atualizar-dados-conta/:id_conta', AtualizarDadosContaController)

export default router
