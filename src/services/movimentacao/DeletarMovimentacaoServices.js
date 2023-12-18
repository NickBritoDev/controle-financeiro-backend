/* eslint-disable camelcase */
export const DeletarMovimentacao = (getMovimentacao, salvarMovimentacao, id_movimentacao) => {
  const movimentacao = getMovimentacao()
  const updateMovimentacao = movimentacao.filter((movimentacao) => movimentacao.id_movimentacao !== id_movimentacao)
  salvarMovimentacao(updateMovimentacao)
  return 'movimentação deletado com sucesso.'
}
