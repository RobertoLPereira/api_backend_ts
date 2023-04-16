import { AppDataSource } from '../../data-source'
import { Perfilsistema } from '../../entities/seguranca/perfilsistema'

export const perfilSistemaRepository = AppDataSource.getRepository(Perfilsistema)