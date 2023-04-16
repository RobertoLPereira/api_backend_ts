	 import { Request, Response } from 'express'
	 import { BadRequestError } from '../helpers/api-erros'
	 import { transacaoRepository } from '../repositories/transacoesRepository'
	 
	 export class TransacoesController {
	 async create(req: Request, res: Response) {
		const { idtransacoes,idmodulomenu,idoperacao,transacao,urltransacao,status,} = req.body
		const { duplicidade } = req.params
		/*Verifica duplicidade antes de incluir o registro*/
		
		const transacoes = await transacaoRepository
                .createQueryBuilder("transacoes")                
                .where("transacoes.idmodulomenu = :id AND transacoes.transacao = :name", { id: idmodulomenu, name: transacao })
                .getOne()
		if (transacoes) {
			throw new BadRequestError('Transacoes já existe')
		}

		const newTransacoes = transacaoRepository.create({ idtransacoes,idmodulomenu,idoperacao,transacao,urltransacao,status,})
		await transacaoRepository.save(newTransacoes)

		return res.status(201).json(newTransacoes)
	}

	async list(req: Request, res: Response) {
		const transacoess = await transacaoRepository.find({
			relations:{
				modulomenu:true
			}
		})

		return res.json(transacoess)
	}
}