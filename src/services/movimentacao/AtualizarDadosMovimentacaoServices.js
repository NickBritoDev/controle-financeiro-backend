/* eslint-disable camelcase */
export const AtualizarDadosMovimentacao = (getMovimentacao, salvarMovimentacao, id_movimentacao, data) => {
  const movimentacao = getMovimentacao()
  console.log(data)

  let movimentacao_encontrada
  for (const mov of movimentacao) {
    if (mov.id_movimentacao === id_movimentacao) {
      movimentacao_encontrada = mov
      break
    }
  }

  if (!movimentacao_encontrada) {
    return 'Movimentação não encontrada'
  }

  salvarMovimentacao(movimentacao)
  return 'Movimentações atualizadas'
}
