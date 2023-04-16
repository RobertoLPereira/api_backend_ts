import { Router } from 'express'
import { ModulomenuController } from '../../../controllers/moduleMenuController'
import { SubtransacaomenuController } from '../../../controllers/subTransacaoMenuController'
import { TransacoesController } from '../../../controllers/transacoesController'

const routesopcoesMenu = Router()

routesopcoesMenu.post('/menu', new ModulomenuController().create)
routesopcoesMenu.get('/menu', new ModulomenuController().list)
routesopcoesMenu.post('/subtransacao', new SubtransacaomenuController().create)
routesopcoesMenu.post('/subtransacoes', new SubtransacaomenuController().list)
routesopcoesMenu.post('/transacao', new TransacoesController().create)
routesopcoesMenu.get('/transacoes', new TransacoesController().list)

export default routesopcoesMenu