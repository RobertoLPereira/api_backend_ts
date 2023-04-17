import { Request, Response } from 'express'
import { pessoaFisicaRepository } from '../../repositories/cup/pessoaFisicaRepository'
import { BadRequestError, InternalServerError } from '../../helpers/api-erros'
import { PreconditionFailed } from '../../helpers/api-respostas'

export class PessoaFisicaController {
	async create(req: Request, res: Response) {
        const {idpessoa,apelido,nomemae,nomepai,datanascimento,idestadocivil,idsexo,profissao,ufnaturalidade,idnaturalidade,nacionalidade,registrogeral,dataregistrogeral,orgaoemissor,ufrg,ndependente,codigousuariorede,status,dataatualizacao,idusuario,idestacao,senha,idfisica,wPessoa}= req.body
		const fisica = await pessoaFisicaRepository.findOneBy({ datanascimento: datanascimento,nomemae:nomemae })
       
        if (fisica) {
            throw new PreconditionFailed('Pessoa fisica já existe')
        }
		try {
			const newFisica = pessoaFisicaRepository.create({ idpessoa,apelido,nomemae,nomepai,datanascimento,idestadocivil,idsexo,profissao,ufnaturalidade,idnaturalidade,nacionalidade,registrogeral,dataregistrogeral,orgaoemissor,ufrg,ndependente,codigousuariorede,status,dataatualizacao,idusuario,idestacao,senha })
			await pessoaFisicaRepository.save(newFisica)

			return res.status(201).json(newFisica)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}
    
    
	async list(req: Request, res: Response) {
		try {
			const pessoas = await pessoaFisicaRepository.findAndCount({
				relations: {pessoa: true},
			})

			return res.json(pessoas)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}
	async listPaginacao(req: Request, res: Response) {
		const {skip,take} = req.params;
		const pessoas = await pessoaFisicaRepository.findAndCount({
			relations: {pessoa: true},
			skip:Number(skip),
			take:Number(take)
		})
		if (!pessoas){
			throw new BadRequestError('Não possui Pessoas cadastradas')
		}
		return res.status(200).json(pessoas)		
	}
	async findById(req: Request, res: Response) {
		try{
		const {idfisica} = req.params;
		if(!idfisica) throw new PreconditionFailed('Informe o identificador da pessoa fisica!')
		const pessoa = await pessoaFisicaRepository.findOne({ where : {idfisica: Number(idfisica)},relations:{
			pessoa: true
		},})
		
		if (!pessoa){
			throw new BadRequestError('Pessoa não cadastrada')
		}
		return res.status(200).json(pessoa)
		} catch(error){
			throw new InternalServerError('Erro interno no servidor')
		}
	}
}
