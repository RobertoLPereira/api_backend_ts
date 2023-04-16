import { Router } from 'express'
import {CredenciaisperfilController} from './controllers/seguranca/credenciaisPerfilController'
import { ModulomenuController } from './controllers/moduleMenuController'
import {OrdemservicocienciaController} from './controllers/ordemServicoCiencia'
import { OrdemservicocorpoController } from './controllers/ordemServicoCorpoController'
import { OrdemservicoperfilController } from './controllers/ordemServicoPerfilController'
import { PerfilController } from './controllers/perfilController'
import { PerfilsistemaController } from './controllers/perfilSistemaController'
import { RoomController } from './controllers/RoomController'
import { SistemaController } from './controllers/sistemaController'
import { SubjectController } from './controllers/SubjectController'
import { SubtransacaomenuController } from './controllers/subTransacaoMenuController'
import { TransacoesController } from './controllers/transacoesController'

const routes = Router()

routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.get('/room', new RoomController().list)
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)
export default routes
