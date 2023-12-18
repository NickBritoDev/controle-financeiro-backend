import { getMovimentacao } from '../../models/movimentacao/movimentacao.js'
import { FiltrarMovimentacao } from '../../services/movimentacao/FiltrarMovimentacaoService.js'

export const FiltrarMovimentacaoController = (req, res) => {
  const movimentacoesFiltradas = FiltrarMovimentacao(getMovimentacao)
  res.status(200).json(movimentacoesFiltradas)
}
