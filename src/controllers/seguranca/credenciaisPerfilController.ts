	 import { Request, Response } from 'express'
	 import { BadRequestError } from '../../helpers/api-erros'
	 import { credenciaisRepository } from '../../repositories/seguranca/credenciaisRepository'
	 
	 export class CredenciaisperfilController {
	 async create(req: Request, res: Response) {
		const { idcredenciais,idperfilsistema,idtransacoes,idsubtransacao,status,motivorecusa,} = req.body
		const { duplicidade } = req.params
		/*Verifica duplicidade antes de incluir o registro*/
		
		const credenciaisperfil = await credenciaisRepository
                .createQueryBuilder("credenciaisperfil")                
                .where("credenciaisperfil.idperfilsistema = :idperfilsistema AND credenciaisperfil.idtransacoes = :idtransacoes and credenciaisperfil.idsubtransacao=:idsubtransacao", { idperfilsistema: idperfilsistema, idtransacoes: idtransacoes,idsubtransacao:idsubtransacao })
                .getOne()
		if (credenciaisperfil) {
			throw new BadRequestError('Credenciaisperfil já existe')
		}

		const newCredenciaisperfil = credenciaisRepository.create({ idcredenciais,idperfilsistema,idtransacoes,idsubtransacao,status,motivorecusa,})
		await credenciaisRepository.save(newCredenciaisperfil)

		return res.status(201).json(newCredenciaisperfil)
	}

	async list(req: Request, res: Response) {
		const credenciaisperfils = await credenciaisRepository.find({
			relations:{
				perfilsistema:true
			},
		})

		return res.json(credenciaisperfils)
	}
}