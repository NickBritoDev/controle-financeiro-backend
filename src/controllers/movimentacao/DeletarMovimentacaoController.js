/* eslint-disable camelcase */
import { getMovimentacao, salvarMovimentacao } from '../../models/movimentacao/movimentacao.js'
import { DeletarMovimentacao } from '../../services/movimentacao/DeletarMovimentacaoServices.js'

export const DeletarMovimentacaoController = (req, res) => {
  const { id_movimentacao } = req.params
  const mensagem = DeletarMovimentacao(getMovimentacao, salvarMovimentacao, id_movimentacao)
  res.status(200).json({ message: mensagem })
}
