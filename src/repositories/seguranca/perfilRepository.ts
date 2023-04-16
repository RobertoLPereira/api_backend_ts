import { AppDataSource } from '../data-source'
import { Perfil } from '../entities/perfil'

export const perfilRepository = AppDataSource.getRepository(Perfil)