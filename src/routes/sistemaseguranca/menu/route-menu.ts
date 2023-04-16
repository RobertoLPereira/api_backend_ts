import { Router } from 'express'
import { ModulomenuController } from '../../../controllers/seguranca/moduleMenuController'
import { SubtransacaomenuController } from '../../../controllers/seguranca/subTransacaoMenuController'
import { TransacoesController } from '../../../controllers/seguranca/transacoesController'

const routesopcoesMenu = Router()

routesopcoesMenu.post('/menu', new ModulomenuController().create)
routesopcoesMenu.get('/menu', new ModulomenuController().list)
routesopcoesMenu.post('/subtransacao', new SubtransacaomenuController().create)
routesopcoesMenu.post('/subtransacoes', new SubtransacaomenuController().list)
routesopcoesMenu.post('/transacao', new TransacoesController().create)
routesopcoesMenu.get('/transacoes', new TransacoesController().list)

export default routesopcoesMenu