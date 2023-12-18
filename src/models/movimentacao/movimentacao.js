import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const usersFilePath = path.resolve(__dirname, 'movimentacao.json')

export const getMovimentacao = () => {
  try {
    const usersData = fs.readFileSync(usersFilePath, 'utf8')
    return JSON.parse(usersData)
  } catch (error) {
    console.error('Erro ao ler o arquivo de movimentacao:', error)
    return []
  }
}

export const salvarMovimentacao = (usuarios) => {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(usuarios, null, 2), 'utf8')
  } catch (error) {
    console.error('Erro ao salvar os banmovimentacaocos:', error)
  }
}
