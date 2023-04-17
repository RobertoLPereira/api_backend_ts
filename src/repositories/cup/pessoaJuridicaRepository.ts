import { AppDataSource } from '../../data-source'
import { Juridica } from '../../entities/cup/Juridica'

export const pessoaJuridicaRepository = AppDataSource.getRepository(Juridica)
