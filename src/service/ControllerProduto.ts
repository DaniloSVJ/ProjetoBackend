import {getRepository} from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../error/AppErro'

import  AddProdutoEstoque from './ControllerProdutoEstoque'

import Produto from '../models/produtos'
interface Request {

    nome:string,
    codigo: string,
    custo: number,
    valor_venda: number,
    id_grupo: string,
    imagem:string,
}


class CreateProduto{
    public async execute({nome,codigo,custo,valor_venda,id_grupo}:Request): Promise <Produto> {
        const produdoRepository = getRepository(Produto)
        const checkProdutoExist = await produdoRepository.findOne({
            where:{nome}
        })

        if(checkProdutoExist){
            throw new AppError('Name product already used')
        }

        const produto = produdoRepository.create({
            nome,
            codigo,
            custo,
            valor_venda,
            id_grupo,
        })

        await produdoRepository.save(produto)
        return produto;
    }
    public async update(id:string,{nome,codigo,custo,valor_venda,id_grupo}:Request) {
        const repositoryProduto =  getRepository(Produto)
        const checkCliente = await repositoryProduto.findOne({where:{id}})
        let produto

        if (checkCliente) {

            produto = await repositoryProduto
            .createQueryBuilder().update()
            .set({nome,codigo,custo,valor_venda,id_grupo})
            .where({id})
            .execute()

        }

        return produto

    }

    public async delete(id:string){
        const grupoRepository = getRepository(Produto)

        await grupoRepository.createQueryBuilder()
            .delete()
            .where({ id })
            .execute()

    }

    public async getAll(){

        const estoqueRepository = await getRepository(Produto)

        const produtos = await estoqueRepository.find()
        return produtos
    }
    public async get(id:string){

        const estoqueRepository = await getRepository(Produto)

        const produtos = await estoqueRepository.findOne({where:{id}})
        return produtos
    }

}

export default CreateProduto
