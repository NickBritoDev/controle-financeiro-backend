/* eslint-disable camelcase */
import { getMovimentacao } from '../../models/movimentacao/movimentacao.js'
import { FiltrarMovimentacaoUnico } from '../../services/movimentacao/FiltrarMovimentacaoUnicoService.js'

export const FiltraMovimentacaoUnicoController = (req, res) => {
  const { id_movimentacao } = req.params
  const movimentacaoEncontrada = FiltrarMovimentacaoUnico(getMovimentacao, id_movimentacao, res)
  res.status(200).json(movimentacaoEncontrada)
}
