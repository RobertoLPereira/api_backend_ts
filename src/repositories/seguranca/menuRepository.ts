import { AppDataSource } from '../../data-source'
import { Modulomenu } from '../../entities/seguranca/modulomenu'

export const moduloMenuRepository = AppDataSource.getRepository(Modulomenu)
