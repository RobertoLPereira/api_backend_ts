import { AppDataSource } from '../data-source'
import { Perfilsistema } from '../entities/perfilsistema'

export const perfilSistemaRepository = AppDataSource.getRepository(Perfilsistema)