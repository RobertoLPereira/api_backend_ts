import { AppDataSource } from '../../data-source'
import { Ordemservicociencia } from '../../entities/seguranca/ordemservicociencia'

export const ordemServicoCienciaRepository = AppDataSource.getRepository(Ordemservicociencia)