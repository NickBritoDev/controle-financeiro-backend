/* eslint-disable camelcase */
export const DeletarConta = (getContas, salvarContas, id_conta) => {
  const contas = getContas()
  const updateConta = contas.filter((user) => user.id_conta !== id_conta)
  salvarContas(updateConta)
  return 'Banco deletado com sucesso.'
}
