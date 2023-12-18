/* eslint-disable camelcase */
import { getUsuarios, salvarUsuarios } from '../../models/usuarios/usuarios.js'
import { AtualizarDadosUsuario } from '../../services/usuarios/AtualizarDadosUsuarioServices.js'

export const AtualizarDadosUsuarioController = (req, res) => {
  const { id_usuario } = req.params
  const { nome_completo, idade, profissao, tipo_vinculo } = req.body
  const mensagem = AtualizarDadosUsuario(getUsuarios, salvarUsuarios, id_usuario, { nome_completo, idade, profissao, tipo_vinculo })
  res.status(200).json({ message: mensagem })
}
