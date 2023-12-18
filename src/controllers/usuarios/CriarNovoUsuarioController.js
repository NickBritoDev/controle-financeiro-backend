import { CriarNovoUsuario } from '../../services/usuarios/CriarNovoUsuarioService.js'

export const CriarNovoUsuarioController = (req, res) => {
  CriarNovoUsuario(req, res)
}
