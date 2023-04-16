import { AppDataSource } from '../data-source'
import { Ordemservicociencia } from '../entities/ordemservicociencia'

export const ordemServicoCienciaRepository = AppDataSource.getRepository(Ordemservicociencia)