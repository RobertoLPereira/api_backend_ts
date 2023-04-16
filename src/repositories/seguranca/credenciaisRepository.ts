import { AppDataSource } from '../../data-source'
import { Credenciaisperfil } from '../../entities/seguranca/credenciaisperfil'
export const credenciaisRepository = AppDataSource.getRepository(Credenciaisperfil)