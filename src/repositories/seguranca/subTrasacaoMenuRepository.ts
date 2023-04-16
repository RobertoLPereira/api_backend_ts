import { AppDataSource } from '../../data-source'
import { Subtransacaomenu } from '../../entities/seguranca/subtransacaomenu'

export const subtransacaomenuRepository = AppDataSource.getRepository(Subtransacaomenu)