import { AppDataSource } from '../../data-source'
import { Ordemservicousuarios } from '../../entities/seguranca/ordemservicousuario'

export const ordemServicoUsuarioRepository = AppDataSource.getRepository(Ordemservicousuarios)