import { AppDataSource } from '../../data-source'
import { Pessoa } from '../../entities/cup/Pessoa'

export const pessoaRepository = AppDataSource.getRepository(Pessoa)
