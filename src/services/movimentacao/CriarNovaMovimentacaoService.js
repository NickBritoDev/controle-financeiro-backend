import { v4 as uuidv4 } from 'uuid'
import { getMovimentacao, salvarMovimentacao } from '../../models/movimentacao/movimentacao.js'

export const CriarNovaMovimentacao = (req, res) => {
  const dadosMovimentacao = req.body
  const movimentacao = getMovimentacao()

  const IdMovimentacao = { ...dadosMovimentacao, id_movimentacao: uuidv4() }
  movimentacao.push(IdMovimentacao)
  salvarMovimentacao(movimentacao)
  res.status(200).json(movimentacao)
}
