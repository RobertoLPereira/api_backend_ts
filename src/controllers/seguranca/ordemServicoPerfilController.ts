	 import { Request, Response } from 'express'
	 import { BadRequestError } from '../helpers/api-erros'
	 import { ordemServicoPerfilRepository } from '../repositories/ordemServicoPerfil'
	 
	 export class OrdemservicoperfilController {
	 async create(req: Request, res: Response) {
		const { idordemservicoperfil,idordemservico,idperfilsistema,} = req.body
		const { duplicidade } = req.params
		/*Verifica duplicidade antes de incluir o registro*/
		
		const ordemservicoperfil = await ordemServicoPerfilRepository
                .createQueryBuilder("ordemservicoperfil")                
                .where("ordemservicoperfil.idordemservico = :idordemservico AND ordemservicoperfil.idperfilsistema = :idperfilsistema", { idordemservico: idordemservico, idperfilsistema: idperfilsistema })
                .getOne()
		if (ordemservicoperfil) {
			throw new BadRequestError('Ordemservicoperfil já existe')
		}

		const newOrdemservicoperfil = ordemServicoPerfilRepository.create({ idordemservicoperfil,idordemservico,idperfilsistema,})
		await ordemServicoPerfilRepository.save(newOrdemservicoperfil)

		return res.status(201).json(newOrdemservicoperfil)
	}

	async list(req: Request, res: Response) {
		const ordemservicoperfils = await ordemServicoPerfilRepository.find({})

		return res.json(ordemservicoperfils)
	}
}