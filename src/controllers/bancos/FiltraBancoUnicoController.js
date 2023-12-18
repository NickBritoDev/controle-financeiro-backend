/* eslint-disable camelcase */
import { getBancos } from '../../models/bancos/bancos.js'
import { FiltrarBancoUnico } from '../../services/bancos/FiltrarBancoUnicoService.js'

export const FiltrarBancoUnicoController = (req, res) => {
  const { id_banco } = req.params
  const bancoEncontrado = FiltrarBancoUnico(getBancos, id_banco, res)
  res.status(200).json(bancoEncontrado)
}
