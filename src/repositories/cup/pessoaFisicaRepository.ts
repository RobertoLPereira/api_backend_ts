import { AppDataSource } from '../../data-source'
import { Fisica } from '../../entities/cup/Fisica'

export const pessoaFisicaRepository = AppDataSource.getRepository(Fisica)
