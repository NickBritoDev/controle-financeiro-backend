/* eslint-disable camelcase */
export const FiltrarMovimentacaoUnico = (getMovimentacao, id_movimentacao, res) => {
  const movimentacoes = getMovimentacao()
  let movimentacaoLocalizada = false

  for (const dados of movimentacoes) {
    if (dados.id_movimentacao === id_movimentacao) {
      movimentacaoLocalizada = true
      break
    }
  }

  if (!movimentacaoLocalizada) {
    return res.status(400).json({ message: 'movimentação não localizado' })
  }

  return movimentacoes.find((user) => user.id_movimentacao === id_movimentacao)
}
