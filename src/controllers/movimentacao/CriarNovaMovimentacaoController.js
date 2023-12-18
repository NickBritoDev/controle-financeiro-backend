import { CriarNovaMovimentacao } from '../../services/movimentacao/CriarNovaMovimentacaoService.js'

export const CriarNovaMovimentacaoController = (req, res) => {
  CriarNovaMovimentacao(req, res)
}
