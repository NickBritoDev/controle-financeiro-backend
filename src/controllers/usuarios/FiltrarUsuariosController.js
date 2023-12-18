import { getUsuarios } from '../../models/usuarios/usuarios.js'
import { FiltrarUsuarios } from '../../services/usuarios/FiltrarUsuariosService.js'

export const FiltrarUsuariosController = (req, res) => {
  const usuariosFiltrados = FiltrarUsuarios(getUsuarios)
  res.status(200).json(usuariosFiltrados)
}
