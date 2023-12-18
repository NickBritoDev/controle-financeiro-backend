/* eslint-disable camelcase */
import { getContas } from '../../models/contas/contas.js'
import { FiltrarContaUnico } from '../../services/contas/FiltrarContaUnicoService.js'

export const FiltrarContaUnicoController = (req, res) => {
  const { id_conta } = req.params
  const contaEncontrada = FiltrarContaUnico(getContas, id_conta, res)
  res.status(200).json(contaEncontrada)
}
