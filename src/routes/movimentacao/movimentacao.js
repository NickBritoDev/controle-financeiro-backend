import express from 'express'
import { CriarNovaMovimentacaoController } from '../../controllers/movimentacao/CriarNovaMovimentacaoController.js'
import { AtualizarDadosMovimentacaoController } from '../../controllers/movimentacao/AtualizarDadosMovimentacaoController.js'
import { FiltrarMovimentacaoController } from '../../controllers/movimentacao/FiltrarMovimentacaoController.js'
import { FiltraMovimentacaoUnicoController } from '../../controllers/movimentacao/FiltraMovimentacaoUnicoController.js'
import { DeletarMovimentacaoController } from '../../controllers/movimentacao/DeletarMovimentacaoController.js'

const router = express.Router()

router.post('/criar-nova-movimentacao', CriarNovaMovimentacaoController)

router.get('/filtrar-movimentacao', FiltrarMovimentacaoController)

router.get('/filtrar-movimentacao/:id_movimentacao', FiltraMovimentacaoUnicoController)

router.delete('/deletar-movimentacao/:id_movimentacao', DeletarMovimentacaoController)

router.patch('/atualizar-dados-movimentacao/:id_movimentacao', AtualizarDadosMovimentacaoController)

export default router
