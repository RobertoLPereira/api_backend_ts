import { Router } from 'express'
import { SistemaController } from '../../../controllers/sistemaController'

const routesSistema = Router()

routesSistema.post('/sistema', new SistemaController().create)
routesSistema.get('/sistema', new SistemaController().list)
export default routesSistema