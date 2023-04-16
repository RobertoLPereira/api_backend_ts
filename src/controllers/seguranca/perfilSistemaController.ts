	 import { Request, Response } from 'express'
	 import { BadRequestError } from '../helpers/api-erros'
	 import { perfilSistemaRepository } from '../repositories/perfilSistemaRepository'
	 
	 export class PerfilsistemaController {
	 async create(req: Request, res: Response) {
		const { idperfilsistema,idperfil,idsistema,} = req.body
		const { duplicidade } = req.params
		/*Verifica duplicidade antes de incluir o registro*/
		
		const perfilsistema = await perfilSistemaRepository
                .createQueryBuilder("perfilsistema")                
                .where("perfilsistema.idperfil = :id AND perfilsistema.idsistema = :idsistema", { id: idperfil, idsistema: idsistema })
                .getOne()
		if (perfilsistema) {
			throw new BadRequestError('Perfilsistema já existe')
		}

		const newPerfilsistema = perfilSistemaRepository.create({ idperfilsistema,idperfil,idsistema,})
		await perfilSistemaRepository.save(newPerfilsistema)

		return res.status(201).json(newPerfilsistema)
	}

	async list(req: Request, res: Response) {
		const perfilsistemas = await perfilSistemaRepository.find({})

		return res.json(perfilsistemas)
	}
}