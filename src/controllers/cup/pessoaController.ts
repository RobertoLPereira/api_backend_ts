import { Request, Response } from 'express'
import { pessoaRepository } from '../../repositories/cup/pessoaRepository'
import { ApiError, BadRequestError, InternalServerError, UnauthorizedError } from '../../helpers/api-erros'
import { PreconditionFailed } from '../../helpers/api-respostas'
import { Pessoa } from '../../entities/cup/Pessoa'

export class PessoaController {
	async create(req: Request, res: Response) {
      
        const {idpessoa,nome,identificacaofiscal,idsituacaocadastro,idsituacaopessoa,idsituacaoreceitafederal,datacadastro,idagencia,idposto,clientedesde,idorigem,status,dataatualizacao,idusuario,idestacao,dataatualizacaocadastro,nomeusuario,email,idnatrelacnegocio,nivelsigilo,idsubtiporegistro,userId} = req.body
        if(!nome)	 throw new BadRequestError('Informe o nome da pessoa')
        const pessoa = await pessoaRepository.findOneBy({ nome: nome,identificacaofiscal:identificacaofiscal })
          
        if (pessoa) {
            throw new UnauthorizedError('Pessoa já existe')
        }
       
        try{
            const newPessoa = pessoaRepository.create({nome,identificacaofiscal,idsituacaocadastro,idsituacaopessoa,idsituacaoreceitafederal,datacadastro,idagencia,idposto,clientedesde,idorigem,status,dataatualizacao,idusuario,idestacao,dataatualizacaocadastro,nomeusuario,email,idnatrelacnegocio,nivelsigilo,idsubtiporegistro,userId})
            await pessoaRepository.save(newPessoa)
            return res.status(201).json(newPessoa)
        }catch(error){
            console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
        }		
	}
    async list(req: Request, res: Response) {
		const pessoas = await pessoaRepository.findAndCount({
			relations: {fisica: true,juridica:true,},
		})
		if (!pessoas){
			throw new BadRequestError('Não possui Pessoas cadastradas')
		}
		return res.status(200).json(pessoas)		
	}
	async listPaginacao(req: Request, res: Response) {
		const {skip,take} = req.params;
		const pessoas = await pessoaRepository.findAndCount({
			relations: {fisica: true,juridica:true,},skip:Number(skip),take:Number(take)
		})
		if (!pessoas){
			throw new BadRequestError('Não possui Pessoas cadastradas')
		}
		return res.status(200).json(pessoas)		
	}
	async findById(req: Request, res: Response) {
		try{
		const {idpessoa} = req.params;
		if(!idpessoa) throw new PreconditionFailed('Informe o identificador da pessoa!')
		const pessoa = await pessoaRepository.findOne({ where : {idpessoa: Number(idpessoa)},relations:{
			fisica: true,juridica:true
		},})
		
		if (!pessoa){
			throw new BadRequestError('Pessoa não cadastrada')
		}
		return res.status(200).json(pessoa)
		} catch(error){
			throw new InternalServerError('Erro interno no servidor')
		}
	}
	async delete(req: Request, res: Response) {
		try{
			const wstatus: string = '2';
			const {idpessoa} = req.params;
			if(!idpessoa) throw new PreconditionFailed('Informe o identificador da pessoa!')
			await pessoaRepository.createQueryBuilder().update(Pessoa).set({status:wstatus}).where("idpessoa=:idpessoa",{idpessoa:idpessoa}).execute()			
			.then(() => {
				res.status(200).json( { msg: 'Exclusão Lógica com sucesso -> Pessoa Id = ' + idpessoa } )
				});							
		} catch(error){
			throw new InternalServerError('Erro interno no servidor')
		}
	}
	async update(req: Request, res: Response) {
		try{
			const {dados} = req.body;
			const {idpessoa} = req.params;
			if(!idpessoa) throw new PreconditionFailed('Informe o identificador da pessoa!')
			await pessoaRepository.createQueryBuilder().update(Pessoa).set(dados).where("idpessoa=:idpessoa",{idpessoa:idpessoa}).execute()				
			.then(() => {
				res.status(200).json( { msg: 'Atualização Efetuada com sucesso -> Pessoa Id = ' + idpessoa } )
				});							
		} catch(error){
			throw new InternalServerError('Erro interno no servidor')
		}
	}
		
}
