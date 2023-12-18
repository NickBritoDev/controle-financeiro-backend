import { v4 as uuidv4 } from 'uuid'
import { getBancos, salvarBancos } from '../../models/bancos/bancos.js'

export const CriarNovoBanco = (req, res) => {
  const dadosBancarios = req.body
  const bancos = getBancos()

  let bancoExistente = false

  for (const dados of bancos) {
    if (dadosBancarios.nome_banco === dados.nome_banco) {
      bancoExistente = true
      break
    }
  }

  if (bancoExistente) {
    return res.status(400).json({ message: 'Banco existente! Edite ou exclua os dados do mesmo.' })
  }

  const IdBanco = { ...dadosBancarios, id_banco: uuidv4() }
  bancos.push(IdBanco)
  salvarBancos(bancos)
  res.status(200).json(bancos)
}
