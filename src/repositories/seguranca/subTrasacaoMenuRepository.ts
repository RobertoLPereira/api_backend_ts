import { AppDataSource } from '../data-source'
import { Subtransacaomenu } from '../entities/subtransacaomenu'

export const subtransacaomenuRepository = AppDataSource.getRepository(Subtransacaomenu)