	 import { Request, Response } from 'express'
	 import { BadRequestError } from '../../helpers/api-erros'
	 import { subtransacaomenuRepository } from '../../repositories/seguranca/subTrasacaoMenuRepository'
	 
	 export class SubtransacaomenuController {
	 async create(req: Request, res: Response) {
		const { idsubtransacao,idtransacoes,subtransacao,urlsubtransacao,idOperacao,} = req.body
		const { duplicidade } = req.params
		/*Verifica duplicidade antes de incluir o registro*/
		
		const subtransacaomenu = await subtransacaomenuRepository
                .createQueryBuilder("subtransacaomenu")                
                .where("subtransacaomenu.idtransacoes = :id AND subtransacaomenu.subtransacao = :name", { id: idtransacoes, name: subtransacao })
                .getOne()
		if (subtransacaomenu) {
			throw new BadRequestError('Subtransacaomenu já existe')
		}

		const newSubtransacaomenu = subtransacaomenuRepository.create({ idsubtransacao,idtransacoes,subtransacao,urlsubtransacao,idOperacao,})
		await subtransacaomenuRepository.save(newSubtransacaomenu)

		return res.status(201).json(newSubtransacaomenu)
	}

	async list(req: Request, res: Response) {
		const subtransacaomenus = await subtransacaomenuRepository.find({})

		return res.json(subtransacaomenus)
	}
}