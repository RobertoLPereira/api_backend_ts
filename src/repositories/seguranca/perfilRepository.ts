import { AppDataSource } from '../../data-source'
import { Perfil } from '../../entities/seguranca/perfil'

export const perfilRepository = AppDataSource.getRepository(Perfil)