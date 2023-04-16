import { Router } from 'express'
import { OrdemservicocorpoController } from '../../../controllers/ordemServicoCorpoController'
import { OrdemservicoperfilController } from '../../../controllers/ordemServicoPerfilController'
import { OrdemservicocienciaController } from '../../../controllers/ordemServicoCiencia'

const routesOrdemServco = Router()

routesOrdemServco.post('/cienciaos', new OrdemservicocienciaController().create)
routesOrdemServco.get('/cienciasos', new OrdemservicocienciaController().list)

routesOrdemServco.post('./ordemservico', new OrdemservicocorpoController().create)
routesOrdemServco.get('/ordemservicos', new OrdemservicocorpoController().list)

routesOrdemServco.post('/ordemservicoperfil', new OrdemservicoperfilController().create)
routesOrdemServco.get('/ordemservicoperfils', new OrdemservicoperfilController().list)

export default routesOrdemServco