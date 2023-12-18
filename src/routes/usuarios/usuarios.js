import express from 'express'
import { CriarNovoUsuarioController } from '../../controllers/usuarios/CriarNovoUsuarioController.js'
import { FiltrarUsuariosController } from '../../controllers/usuarios/FiltrarUsuariosController.js'
import { FiltrarUsuarioUnicoController } from '../../controllers/usuarios/FiltrarUsuarioUnicoController.js'
import { DeletarUsuarioController } from '../../controllers/usuarios/DeletarUsuarioController.js'
import { AtualizarDadosUsuarioController } from '../../controllers/usuarios/AtualizarDadosUsuarioController.js'

const router = express.Router()

router.post('/criar-novo-usuario', CriarNovoUsuarioController)

router.get('/filtrar-usuarios', FiltrarUsuariosController)

router.get('/filtrar-usuario/:id_usuario', FiltrarUsuarioUnicoController)

router.delete('/deletar-usuario/:id_usuario', DeletarUsuarioController)

router.patch('/atualizar-dados-usuario/:id_usuario', AtualizarDadosUsuarioController)

export default router
