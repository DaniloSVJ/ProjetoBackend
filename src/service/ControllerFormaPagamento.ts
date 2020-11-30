import {getRepository} from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../error/AppErro'

import FormaPagamento from '../models/formaPagamento'

class FormaPagamentoController {
    public async execute(nome:string):Promise<FormaPagamento>{
        const formaPagamento = getRepository(FormaPagamento);

        const checkNameGrup = await formaPagamento.findOne({
            where:{nome}
        })

        if(checkNameGrup){
            throw new AppError('Name grupo already used')
        }

        const grupoProduto = await formaPagamento.create({
            nome,
        })

        await formaPagamento.save(grupoProduto)

        return(grupoProduto)


    }
    public async update(id:string,nome:string) {
        const repositoryFormaPagamento =  getRepository(FormaPagamento)
        const checkCliente = await repositoryFormaPagamento.findOne({where:{id}})
        let pagamento

        if (checkCliente) {

            pagamento = await repositoryFormaPagamento
            .createQueryBuilder().update()
            .set({nome})
            .where({id})
            .execute()

        }

        return pagamento

    }
    public async delete(id:string){
        const formaPagamento = getRepository(FormaPagamento)

        await formaPagamento.createQueryBuilder()
            .delete()
            .where({ id })
            .execute()

    }
    public async getAll(){

        const formaPagamento = await getRepository(FormaPagamento)

        const pagamento = await formaPagamento.find()
        return pagamento
    }
    public async get(id:string){

        const formaPagamento = await getRepository(FormaPagamento)

        const pagamento = await formaPagamento.findOne({where:{id}})
        return pagamento
    }

}
export default FormaPagamentoController
