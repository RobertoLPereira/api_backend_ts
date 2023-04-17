import { Request, Response } from 'express'
import { pessoaJuridicaRepository } from '../../repositories/cup/pessoaJuridicaRepository'
import { BadRequestError, InternalServerError } from '../../helpers/api-erros'
import { PreconditionFailed } from '../../helpers/api-respostas'

export class PessoaJuridicaController {
	async create(req: Request, res: Response) {
        const {idjuridica,idpessoa,razaosocial,dataregistrojunta,numeroregistrojunta,orgaoexpedidor,inscricaoestadual,dataconstituicao,idformajuridica,quantidadefiliais,idramoatividade,idporte,incentivoicms,optantesimples,grupoeconomico,inscricaomunicipal,status,dataatualizacao,idusuario,idestacao}= req.body
		const juridica = await pessoaJuridicaRepository.findOneBy({ razaosocial: razaosocial })
       
        if (juridica) {
            throw new PreconditionFailed('Pessoa jurídica já existe')
        }
		try {
			const newJuridica = pessoaJuridicaRepository.create({ idjuridica,idpessoa,razaosocial,dataregistrojunta,numeroregistrojunta,orgaoexpedidor,inscricaoestadual,dataconstituicao,idformajuridica,quantidadefiliais,idramoatividade,idporte,incentivoicms,optantesimples,grupoeconomico,inscricaomunicipal,status,dataatualizacao,idusuario,idestacao })
			await pessoaJuridicaRepository.save(newJuridica)

			return res.status(201).json(newJuridica)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}
    
    
	async list(req: Request, res: Response) {
		try {
			const pessoas = await pessoaJuridicaRepository.findAndCount({
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
		const pessoas = await pessoaJuridicaRepository.findAndCount({
			relations: {pessoa: true},
			skip:Number(skip),
			take:Number(take)
		})
		if (!pessoas){
			throw new BadRequestError('Não possui Pessoas Juridica cadastradas')
		}
		return res.status(200).json(pessoas)		
	}
	async findById(req: Request, res: Response) {
		try{
		const {idjuridica} = req.params;
		if(!idjuridica) throw new PreconditionFailed('Informe o identificador da pessoa fisica!')
		const pessoa = await pessoaJuridicaRepository.findOne({ where : {idjuridica: Number(idjuridica)},
			relations:{pessoa: true},}
			)
		
		if (!pessoa){
			throw new PreconditionFailed('Pessoa não cadastrada')
		}
		return res.status(200).json(pessoa)
		} catch(error){
			throw new InternalServerError('Erro interno no servidor')
		}
	}
}
