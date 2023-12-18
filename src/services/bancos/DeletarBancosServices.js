/* eslint-disable camelcase */
export const DeletarBanco = (getBancos, salvarBancos, id_banco) => {
  const users = getBancos()
  const updatedUsers = users.filter((user) => user.id_banco !== id_banco)
  salvarBancos(updatedUsers)
  return 'Banco deletado com sucesso.'
}
