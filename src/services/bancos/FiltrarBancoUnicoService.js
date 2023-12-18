/* eslint-disable camelcase */
export const FiltrarBancoUnico = (getBancos, id_banco, res) => {
  const bancos = getBancos()
  let bancoLocalizado = false

  for (const dados of bancos) {
    if (dados.id_banco === id_banco) {
      bancoLocalizado = true
      break
    }
  }

  if (!bancoLocalizado) {
    return res.status(400).json({ message: 'Usuário não localizado' })
  }

  return bancos.find((user) => user.id_banco === id_banco)
}
