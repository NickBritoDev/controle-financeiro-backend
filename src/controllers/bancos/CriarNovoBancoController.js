import { CriarNovoBanco } from '../../services/bancos/CriarNovoBancoService.js'

export const CriarNovoBancoController = (req, res) => {
  CriarNovoBanco(req, res)
}
