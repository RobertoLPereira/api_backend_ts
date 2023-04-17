import { Router } from 'express'
import { PessoaFisicaController } from '../../controllers/cup/pessoaFisicaController'
import { PessoaController } from '../../controllers/cup/pessoaController'


const routes = Router()

routes.post('/fisica', new PessoaFisicaController().create)
routes.get('/pessoaFisica', new PessoaFisicaController().list)
routes.post('/pessoa', new PessoaController().create)
routes.get('/pessoas', new PessoaController().list)

export default routes