/* eslint-disable camelcase */
import { getUsuarios, salvarUsuarios } from '../../models/usuarios/usuarios.js'
import { DeletarUsuario } from '../../services/usuarios/DeletarUsuarioServices.js'

export const DeletarUsuarioController = (req, res) => {
  const { id_usuario } = req.params
  const mensagem = DeletarUsuario(getUsuarios, salvarUsuarios, id_usuario)
  res.status(200).json({ message: mensagem })
}
