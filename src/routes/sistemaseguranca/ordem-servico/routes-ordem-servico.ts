import { Router } from 'express'
import { OrdemservicocorpoController } from '../../../controllers/seguranca/ordemServicoCorpoController'
import { OrdemservicoperfilController } from '../../../controllers/seguranca/ordemServicoPerfilController'
import { OrdemservicocienciaController } from '../../../controllers/seguranca/ordemServicoCiencia'

const routesOrdemServco = Router()

routesOrdemServco.post('/cienciaos', new OrdemservicocienciaController().create)
routesOrdemServco.get('/cienciasos', new OrdemservicocienciaController().list)

routesOrdemServco.post('./ordemservico', new OrdemservicocorpoController().create)
routesOrdemServco.get('/ordemservicos', new OrdemservicocorpoController().list)

routesOrdemServco.post('/ordemservicoperfil', new OrdemservicoperfilController().create)
routesOrdemServco.get('/ordemservicoperfils', new OrdemservicoperfilController().list)

export default routesOrdemServco