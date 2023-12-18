/* eslint-disable camelcase */
export const AtualizarDadosUsuario = (getUsuarios, salvarUsuarios, id_usuario, data) => {
  const users = getUsuarios()
  const user = users.find((user) => user.id_usuario === id_usuario)
  if (data.nome_completo) user.nome_completo = data.nome_completo
  if (data.idade) user.idade = data.idade
  if (data.email) user.email = data.email
  if (data.profissao) user.profissao = data.profissao
  if (data.tipo_vinculo) user.tipo_vinculo = data.tipo_vinculo
  salvarUsuarios(users)
  return 'Dados do usuario atualizados'
}
