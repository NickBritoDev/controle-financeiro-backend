import { v4 as uuidv4 } from 'uuid'
import { getUsuarios, salvarUsuarios } from '../../models/usuarios/usuarios.js'

export const CriarNovoUsuario = (req, res) => {
  const user = req.body
  const usuarios = getUsuarios()

  let usuarioExistente = false

  for (const dados of usuarios) {
    if (user.email === dados.email) {
      usuarioExistente = true
      break
    }
  }

  if (usuarioExistente) {
    return res.status(400).json({ message: 'E-mail existente! Tente logar em sua conta...' })
  }

  const IdUsuario = { ...user, id_usuario: uuidv4() }
  usuarios.push(IdUsuario)
  salvarUsuarios(usuarios)
  res.status(200).json(usuarios)
}
