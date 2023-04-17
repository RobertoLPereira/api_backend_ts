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
import { PessoaFisicaController } from './controllers/cup/pessoaFisicaController'
import { PessoaController } from './controllers/cup/pessoaController'
import { PessoaJuridicaController } from './controllers/cup/pessoaJuridicaController'

const routes = Router()

routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.get('/room', new RoomController().list)
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)
routes.post('/sistema', new SistemaController().create)
routes.get('/sistemas', new SistemaController().list)
routes.post('/pessoaFisica', new PessoaFisicaController().create)
routes.get('/pessoaFisica', new PessoaFisicaController().list)
routes.get('/pessoaFisicaPaginacao/:skip/:take', new PessoaFisicaController().listPaginacao)
routes.get('/pessoaFisica/:idfisica', new PessoaFisicaController().findById)
routes.post('/pessoa', new PessoaController().create)
routes.delete('/pessoa/:idpessoa', new PessoaController().delete)
routes.get('/pessoas', new PessoaController().list)
routes.get('/pessoasPaginacao/:skip/:take', new PessoaController().listPaginacao)
routes.get('/pessoa/:idpessoa', new PessoaController().findById)
routes.post('/pessoaJuridica', new PessoaJuridicaController().create)
routes.get('/pessoaJuridica', new PessoaJuridicaController().list)
routes.get('/pessoaJuridicaPaginacao/:skip/:take', new PessoaJuridicaController().listPaginacao)
routes.get('/pessoaJuridica/:idfisica', new PessoaJuridicaController().findById)


export default routes
