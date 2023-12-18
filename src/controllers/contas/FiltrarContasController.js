import { getContas } from '../../models/contas/contas.js'
import { FiltrarContas } from '../../services/contas/FiltrarContasService.js'

export const FiltrarContasController = (req, res) => {
  const contasFiltradas = FiltrarContas(getContas)
  res.status(200).json(contasFiltradas)
}
