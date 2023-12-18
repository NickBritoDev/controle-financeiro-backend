/* eslint-disable camelcase */
import { getBancos, salvarBancos } from '../../models/bancos/bancos.js'
import { DeletarBanco } from '../../services/bancos/DeletarBancosServices.js'

export const DeletarBancosController = (req, res) => {
  const { id_banco } = req.params
  const mensagem = DeletarBanco(getBancos, salvarBancos, id_banco)
  res.status(200).json({ message: mensagem })
}
