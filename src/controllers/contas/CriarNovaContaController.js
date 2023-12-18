import { CriarNovaConta } from '../../services/contas/CriarNovaContaService.js'

export const CriarNovaContaController = (req, res) => {
  CriarNovaConta(req, res)
}
