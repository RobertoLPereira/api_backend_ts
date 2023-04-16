import { AppDataSource } from '../data-source'
import { Sistema } from '../entities/seguranca/sistema'

export const SistemaRepository = AppDataSource.getRepository(Sistema)