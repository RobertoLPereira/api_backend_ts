	 import { Request, Response } from 'express'
	 import { BadRequestError } from '../../helpers/api-erros'
	 import { moduloMenuRepository } from '../../repositories/seguranca/menuRepository'
	 
	 export class ModulomenuController {
	 async create(req: Request, res: Response) {
		const { idmodulomenu,idsistema,denominacao,urlmenu,urlservico,} = req.body
		/*Verifica duplicidade antes de incluir o registro*/
        const modulomenu = await moduloMenuRepository
                .createQueryBuilder('modulomenu')                
                .where("modulomenu.idsistema = :id AND modulomenu.denominacao = :name", { id: idsistema, name: denominacao })
                .getOne()
		if (modulomenu) {
			throw new BadRequestError('Modulomenu já existe')
		}
		const newModulomenu = moduloMenuRepository.create({ idmodulomenu,idsistema,denominacao,urlmenu,urlservico,})
		await moduloMenuRepository.save(newModulomenu)

		return res.status(201).json(newModulomenu)
	}

	async list(req: Request, res: Response) {
		const modulomenus = await moduloMenuRepository.find({
			relations:{
				transacoes:true,
				submenu2:true
			}
		})

		return res.json(modulomenus)
	}
}