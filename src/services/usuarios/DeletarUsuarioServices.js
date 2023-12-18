/* eslint-disable camelcase */
export const DeletarUsuario = (getUsuarios, salvarUsuarios, id_usuario) => {
  const users = getUsuarios()
  const updatedUsers = users.filter((user) => user.id_usuario !== id_usuario)
  salvarUsuarios(updatedUsers)
  return 'Usuario deletado com sucesso.'
}
