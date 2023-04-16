	 import { Request, Response } from 'express'
	 import { BadRequestError } from '../helpers/api-erros'
	 import { ordemServicoRepository } from '../repositories/ordemServicoRepository'
	 
	 export class OrdemservicocorpoController {
	 async create(req: Request, res: Response) {
		const { idordemservico,datacadastro,datainiciovalidade,datafimvalidade,idusuario,corpo,} = req.body
		const { duplicidade } = req.params
		/*Verifica duplicidade antes de incluir o registro*/
		
		const ordemservicocorpo = await ordemServicoRepository
                .createQueryBuilder("ordemservicocorpo")                
                .where("ordemservicocorpo.datainiciovalidade = :datainiciovalidade AND ordemservicocorpo.datafimvalidade = :datafimvalidade AND ordemservicocorpo.corpo = :corpo", { datainiciovalidade: datainiciovalidade, datafimvalidade: datafimvalidade, corpo:corpo })
                .getOne()
		if (ordemservicocorpo) {
			throw new BadRequestError('Ordem de Servico já existe')
		}

		const newOrdemservicocorpo = ordemServicoRepository.create({ idordemservico,datacadastro,datainiciovalidade,datafimvalidade,idusuario,corpo,})
		await ordemServicoRepository.save(newOrdemservicocorpo)

		return res.status(201).json(newOrdemservicocorpo)
	}

	async list(req: Request, res: Response) {
		const ordemservicocorpos = await ordemServicoRepository.find({})

		return res.json(ordemservicocorpos)
	}
}