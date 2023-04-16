import { AppDataSource } from '../data-source'
import { Transacoes } from '../entities/transacao'

export const transacaoRepository = AppDataSource.getRepository(Transacoes)