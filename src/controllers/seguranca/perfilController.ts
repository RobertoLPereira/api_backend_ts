	 import { Request, Response } from 'express'
	 import { BadRequestError } from '../helpers/api-erros'
	 import { perfilRepository } from '../repositories/perfilRepository'
	 
	 export class PerfilController {
	 async create(req: Request, res: Response) {
		const { idsistema,idperfil,perfil,status,objetivo,} = req.body
		const { duplicidade } = req.params
		/*Verifica duplicidade antes de incluir o registro*/
		
		const wperfil = await perfilRepository
                .createQueryBuilder("perfil")                
                .where("perfil.idsistema = :id AND perfil.perfil = :name", { id: idsistema, name: perfil })
                .getOne()
		if (wperfil) {
			throw new BadRequestError('Perfil já existe')
		}

		const newPerfil = perfilRepository.create({ idsistema,idperfil,perfil,status,objetivo,})
		await perfilRepository.save(newPerfil)

		return res.status(201).json(newPerfil)
	}

	async list(req: Request, res: Response) {
		const perfils = await perfilRepository.find({
			relations: {
				sistema: true
			},
		})

		return res.json(perfils)
	}
	
}