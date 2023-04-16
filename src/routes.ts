import { Router } from 'express'
import {CredenciaisperfilController} from './controllers/seguranca/credenciaisPerfilController'
import { ModulomenuController } from './controllers/seguranca/moduleMenuController'
import {OrdemservicocienciaController} from './controllers/seguranca/ordemServicoCiencia'
import { OrdemservicocorpoController } from './controllers/seguranca/ordemServicoCorpoController'
import { OrdemservicoperfilController } from './controllers/seguranca/ordemServicoPerfilController'
import { PerfilController } from './controllers/seguranca/perfilController'
import { PerfilsistemaController } from './controllers/seguranca/perfilSistemaController'
import { RoomController } from './controllers/RoomController'
import { SistemaController } from './controllers/seguranca/sistemaController'
import { SubjectController } from './controllers/SubjectController'
import { SubtransacaomenuController } from './controllers/seguranca/subTransacaoMenuController'
import { TransacoesController } from './controllers/seguranca/transacoesController'

const routes = Router()

routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.get('/room', new RoomController().list)
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)
export default routes
