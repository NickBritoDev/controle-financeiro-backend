/* eslint-disable camelcase */
import { getMovimentacao, salvarMovimentacao } from '../../models/movimentacao/movimentacao.js'
import { AtualizarDadosMovimentacao } from '../../services/movimentacao/AtualizarDadosMovimentacaoServices.js'

export const AtualizarDadosMovimentacaoController = (req, res) => {
  const { id_movimentacao } = req.params
  const { entrada, saida, data_movimentacao, id_banco } = req.body
  const mensagem = AtualizarDadosMovimentacao(getMovimentacao, salvarMovimentacao, id_movimentacao, { entrada, saida, data_movimentacao, id_banco })
  res.status(200).json({ message: mensagem })
}
