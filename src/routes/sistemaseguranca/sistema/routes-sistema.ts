import { Router } from 'express'
import { SistemaController } from '../../../controllers/seguranca/sistemaController'

const routesSistema = Router()

routesSistema.post('/sistema', new SistemaController().create)
routesSistema.get('/sistemas', new SistemaController().list)
export default routesSistema