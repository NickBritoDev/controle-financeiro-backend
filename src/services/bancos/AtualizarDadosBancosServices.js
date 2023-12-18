/* eslint-disable camelcase */
export const AtualizarDadosBancos = (getBancos, salvarBancos, id_banco, data) => {
  const bancos = getBancos()
  const banco = bancos.find((banco) => banco.id_banco === id_banco)
  if (data.nome_banco) banco.nome_banco = data.nome_banco
  if (data.saldo_debito) banco.saldo_debito = data.saldo_debito
  if (data.saldo_credito) banco.saldo_credito = data.saldo_credito
  if (data.saldo_poupado) banco.saldo_poupado = data.saldo_poupado
  if (data.id_usuario) banco.id_usuario = data.id_usuario
  salvarBancos(bancos)
  return 'Dados bancarios atualizados'
}
