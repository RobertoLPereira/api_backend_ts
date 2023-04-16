import { AppDataSource } from '../data-source'
import { Ordemservicousuarios } from '../entities/ordemservicousuario'

export const ordemServicoUsuarioRepository = AppDataSource.getRepository(Ordemservicousuarios)