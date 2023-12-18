/* eslint-disable camelcase */
export const AtualizarDadosConta = (getContas, salvarContas, id_conta, data) => {
  const movimentacao = getContas()
  console.log(movimentacao)

  let conta_encontrada
  for (const mov of movimentacao) {
    console.log(mov.id_conta)
    if (mov.id_conta === id_conta) {
      conta_encontrada = mov
      break
    }
  }

  if (!conta_encontrada) {
    return 'Movimentação não encontrada'
  }

  if (data.nome !== undefined) {
    conta_encontrada.nome = data.nome
  }
  if (data.valor !== undefined) {
    conta_encontrada.valor = data.valor
  }
  if (data.id_banco !== undefined) {
    conta_encontrada.id_banco = data.id_banco
  }

  if (data.id_movimentacao !== undefined) {
    conta_encontrada.id_movimentacao = data.id_movimentacao
  }

  salvarContas(movimentacao)
  return 'Movimentações atualizadas'
}
