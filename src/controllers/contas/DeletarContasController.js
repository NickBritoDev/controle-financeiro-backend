/* eslint-disable camelcase */
import { getContas, salvarContas } from '../../models/contas/contas.js'
import { DeletarConta } from '../../services/contas/DeletarContaServices.js'

export const DeletarContasController = (req, res) => {
  const { id_conta } = req.params
  const mensagem = DeletarConta(getContas, salvarContas, id_conta)
  res.status(200).json({ message: mensagem })
}
