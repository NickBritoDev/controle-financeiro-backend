/* eslint-disable camelcase */
export const FiltrarContaUnico = (getContas, id_conta, res) => {
  const contas = getContas()
  let contaLocalizada = false

  for (const dados of contas) {
    if (dados.id_conta === id_conta) {
      contaLocalizada = true
      break
    }
  }

  if (!contaLocalizada) {
    return res.status(400).json({ message: 'Usuário não localizado' })
  }

  return contas.find((user) => user.id_conta === id_conta)
}
