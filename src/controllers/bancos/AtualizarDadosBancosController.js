/* eslint-disable camelcase */
import { getBancos, salvarBancos } from '../../models/bancos/bancos.js'
import { AtualizarDadosBancos } from '../../services/bancos/AtualizarDadosBancosServices.js'

export const AtualizarDadosBancosController = (req, res) => {
  const { id_banco } = req.params
  const { nome_banco, saldo_debito, saldo_credito, saldo_poupado, id_usuario } = req.body
  const mensagem = AtualizarDadosBancos(getBancos, salvarBancos, id_banco, { nome_banco, saldo_debito, saldo_credito, saldo_poupado, id_usuario })
  res.status(200).json({ message: mensagem })
}
