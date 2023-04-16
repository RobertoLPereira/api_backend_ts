import { Router } from 'express'
import { PerfilController } from '../../../controllers/seguranca/perfilController'
import { PerfilsistemaController } from '../../../controllers/seguranca/perfilSistemaController'
import { CredenciaisperfilController } from '../../../controllers/seguranca/credenciaisPerfilController'

const routesPerfil = Router()

routesPerfil.post('/credencial', new CredenciaisperfilController().create)
routesPerfil.get('/credenciais', new CredenciaisperfilController().list)
routesPerfil.post('/perfil', new PerfilController().create)
routesPerfil.get('/perfis', new PerfilController().list)
routesPerfil.post('/perfilsistema', new PerfilsistemaController().create)
routesPerfil.get('/perfissistema', new PerfilsistemaController().list)

export default routesPerfil