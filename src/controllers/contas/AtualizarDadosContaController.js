/* eslint-disable camelcase */
import { getContas, salvarContas } from '../../models/contas/contas.js'
import { AtualizarDadosConta } from '../../services/contas/AtualizarDadosContaServices.js'

export const AtualizarDadosContaController = (req, res) => {
  const { id_conta } = req.params
  const { nome, valor, parcela, quantidade_parcela, valor_parcelas, cashback, valor_cashback, id_banco, id_movimentacao } = req.body
  const mensagem = AtualizarDadosConta(getContas, salvarContas, id_conta, { nome, valor, parcela, quantidade_parcela, valor_parcelas, cashback, valor_cashback, id_banco, id_movimentacao })
  res.status(200).json({ message: mensagem })
}
