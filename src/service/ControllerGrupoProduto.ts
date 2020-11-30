import {getRepository} from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../error/AppErro'

import GrupoProduto from '../models/grupoProdutos'

class CreateGrupoProduto {
    public async execute(nome:string):Promise<GrupoProduto>{
        const grupoRepository = getRepository(GrupoProduto);

        const checkNameGrup = await grupoRepository.findOne({
            where:{nome}
        })

        if(checkNameGrup){
            throw new AppError('Name grupo already used')
        }

        const grupoProduto = await grupoRepository.create({
            nome,
        })

        await grupoRepository.save(grupoProduto)

        return(grupoProduto)


    }
    public async update(id:string,nome:string) {
        const repositoryGrupoProduto =  getRepository(GrupoProduto)
        const checkCliente = await repositoryGrupoProduto.findOne({where:{id}})
        let Grupo

        if (checkCliente) {

            Grupo = await repositoryGrupoProduto
            .createQueryBuilder().update()
            .set({nome})
            .where({id})
            .execute()

        }

        return Grupo

    }

    public async delete(id:string){
        const grupoRepository = getRepository(GrupoProduto)

        await grupoRepository.createQueryBuilder()
            .delete()
            .where({ id })
            .execute()

    }
    public async getAll(){

        const estoqueRepository = await getRepository(GrupoProduto)

        const produtos = await estoqueRepository.find()
        return produtos
    }
    public async get(id:string){

        const estoqueRepository = await getRepository(GrupoProduto)

        const produtos = await estoqueRepository.findOne({where:{id}})
        return produtos
    }

}
export default CreateGrupoProduto
