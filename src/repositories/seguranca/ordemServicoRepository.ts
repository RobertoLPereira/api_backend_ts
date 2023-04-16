import { AppDataSource } from '../data-source'
import { Ordemservicocorpo } from '../entities/seguranca/ordemservico'

export const ordemServicoRepository = AppDataSource.getRepository(Ordemservicocorpo)