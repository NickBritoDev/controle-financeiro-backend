/* eslint-disable camelcase */
import { getUsuarios } from '../../models/usuarios/usuarios.js'
import { FiltrarUsuarioUnico } from '../../services/usuarios/FiltrarUsuarioUnicoService.js'

export const FiltrarUsuarioUnicoController = (req, res) => {
  const { id_usuario } = req.params
  const usuarioEncontrado = FiltrarUsuarioUnico(getUsuarios, id_usuario, res)
  res.status(200).json(usuarioEncontrado)
}
