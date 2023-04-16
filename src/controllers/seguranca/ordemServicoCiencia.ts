	 import { Request, Response } from 'express'
	 import { BadRequestError } from '../../helpers/api-erros'
	 import { ordemServicoCienciaRepository } from '../../repositories/seguranca/ordemServicoCienciaRepository'
	 
	 export class OrdemservicocienciaController {
	 async create(req: Request, res: Response) {
		const { idordemservicociencia,idordemservico,idpessoa,codigousuariorede,dataciencia,status,} = req.body
		const { duplicidade } = req.params
		/*Verifica duplicidade antes de incluir o registro*/
		
		const ordemservicociencia = await ordemServicoCienciaRepository
                .createQueryBuilder("ordemservicociencia")                
                .where("ordemservicociencia.idordemservico = :idordemservico AND ordemservicociencia.codigousuariorede = :codigousuariorede", { idordemservico: idordemservico, codigousuariorede: codigousuariorede })
                .getOne()
		if (ordemservicociencia) {
			throw new BadRequestError('Usuário já deu ciencia à O.S.')
		}

		const newOrdemservicociencia = ordemServicoCienciaRepository.create({ idordemservicociencia,idordemservico,idpessoa,codigousuariorede,dataciencia,status,})
		await ordemServicoCienciaRepository.save(newOrdemservicociencia)

		return res.status(201).json(newOrdemservicociencia)
	}

	async list(req: Request, res: Response) {
		const ordemservicociencias = await ordemServicoCienciaRepository.find({})

		return res.json(ordemservicociencias)
	}
}