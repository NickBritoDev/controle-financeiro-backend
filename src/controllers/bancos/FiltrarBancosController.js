import { getBancos } from '../../models/bancos/bancos.js'
import { FiltrarBancos } from '../../services/bancos/FiltrarBancosService.js'

export const FiltrarBancosController = (req, res) => {
  const bancosFiltrados = FiltrarBancos(getBancos)
  res.status(200).json(bancosFiltrados)
}
