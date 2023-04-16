
import { Request, Response } from 'express'
import { BadRequestError } from '../helpers/api-erros'
import { SistemaRepository } from '../repositories/sistemaRepository'
     
export class SistemaController {
async create(req: Request, res: Response) {
   const { idsistema,nomesistema,sigla,versao,url,status,} = req.body
   const { duplicidade } = req.params
   /*Verifica duplicidade antes de incluir o registro*/
   const sistema = await SistemaRepository.findOneBy({ nomesistema: duplicidade })

   if (sistema) {
       throw new BadRequestError('Sistema já existe')
   }
   const newSistema = SistemaRepository.create({ idsistema,nomesistema,sigla,versao,url,status,})
   await SistemaRepository.save(newSistema)

   return res.status(201).json(newSistema)
   }

   async list(req: Request, res: Response) {
		try {
			const sistemas = await SistemaRepository.find({
				relations: {
                    modulomenus: true,
					perfilsistemas: true
				},
			})
			return res.json(sistemas)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}
}