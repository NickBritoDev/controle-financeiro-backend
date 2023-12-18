import { v4 as uuidv4 } from 'uuid'
import { getContas, salvarContas } from '../../models/contas/contas.js'

export const CriarNovaConta = (req, res) => {
  const dadosConta = req.body
  const contas = getContas()

  const IdContas = { ...dadosConta, id_conta: uuidv4() }
  contas.push(IdContas)
  salvarContas(contas)
  res.status(200).json(contas)
}
