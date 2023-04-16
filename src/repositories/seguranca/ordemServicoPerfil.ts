import { AppDataSource } from '../data-source'
import { Ordemservicoperfil } from '../entities/ordemservicoperfil'

export const ordemServicoPerfilRepository = AppDataSource.getRepository(Ordemservicoperfil)