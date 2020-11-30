import { response } from 'express'
import {getRepository,getConnection} from 'typeorm'
import AppError from '../error/AppErro'
import Produto from '../models/produtos'
import Estoque from '../models/estoque'

class AddProduto {

    public async aumentar(codiguo:string){

            const estoqueRepository = await getRepository(Estoque)
            const produtoRepository = await getRepository(Produto)

            const checkEstoque = await estoqueRepository.findOne({
                where:{id:idproduto}
            })

            if (checkEstoque){
                checkEstoque.quantidade++
                let produtoUp = await estoqueRepository.save(checkEstoque)
                return produtoUp
            }

            const produto = await estoqueRepository.create({
            id:idproduto,
            quantidade:1,

            })
            //console.log({message:'ok12'})
            await estoqueRepository.save(produto)
           // console.log({message:'ok13'})
            // return response.send('Estoque Atualizado 2')
            let produtoadd= await estoqueRepository.save(produto)
            return produtoadd
    }

    public async diminuir(idproduto:string){
        const estoqueRepository = await getRepository(Estoque)

            const checkEstoque = await estoqueRepository.findOne({
                where:{id:idproduto}
            })
            console.log()
            if (checkEstoque){
                if(checkEstoque.quantidade!=0){
                checkEstoque.quantidade--
                await estoqueRepository.save(checkEstoque)
                return
            }
        }
    }
    public async update(id:string,nome:string) {
        const repositoryEstoque =  getRepository(Estoque)
        const checkCliente = await repositoryEstoque.findOne({where:{id}})
        let estoque

        if (checkCliente) {

            estoque = await repositoryEstoque
            .createQueryBuilder().update()
            .set({id})
            .where({id})
            .execute()

        }

        return estoque

    }

    public async delete(id:string){
        const grupoRepository = getRepository(Estoque)

        await grupoRepository.createQueryBuilder()
            .delete()
            .where({ id })
            .execute()

    }
    public async getAll(){

        const estoqueRepository = await getRepository(Estoque)

        const produtos = await estoqueRepository.find()
        return produtos
    }
    public async get(id:string){

        const estoqueRepository = await getRepository(Estoque)

        const produtos = await estoqueRepository.findOne({where:{id}})
        return produtos
    }

}

export default AddProduto
