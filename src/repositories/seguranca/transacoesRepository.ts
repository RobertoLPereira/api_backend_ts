import { AppDataSource } from '../../data-source'
import { Transacoes } from '../../entities/seguranca/transacao'

export const transacaoRepository = AppDataSource.getRepository(Transacoes)