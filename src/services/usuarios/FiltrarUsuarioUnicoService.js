/* eslint-disable camelcase */
export const FiltrarUsuarioUnico = (getUsuarios, id_usuario, res) => {
  const usuarios = getUsuarios()
  let usuarioLocalizado = false

  for (const dados of usuarios) {
    if (dados.id_usuario === id_usuario) {
      usuarioLocalizado = true
      break
    }
  }

  if (!usuarioLocalizado) {
    return res.status(400).json({ message: 'Usuário não localizado' })
  }

  return usuarios.find((user) => user.id_usuario === id_usuario)
}
