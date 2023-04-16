import { AppDataSource } from '../../data-source'
import { Ordemservicoperfil } from '../../entities/seguranca/ordemservicoperfil'
export const ordemServicoPerfilRepository = AppDataSource.getRepository(Ordemservicoperfil)