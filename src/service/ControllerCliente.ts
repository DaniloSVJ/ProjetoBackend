import {getRepository} from 'typeorm'
import AppError from '../error/AppErro'
import Cliente from '../models/clients'
interface Request {
    id:string,
    nome:string,
    CPF:string,
    RG:string,
    telefone:string,
    cep:string,
    bairro :string,
    cidade:string,
    uf:string
}
class Clientes {

    public async execute({nome, CPF, RG, telefone, cep, bairro ,cidade, uf}:Request): Promise <Cliente> {
        const repositoryCliente =  getRepository(Cliente)

        const checkCliente = await repositoryCliente.findOne({
            where:{CPF}
        })

        if (checkCliente) {
            throw new AppError('CPF já cadastrado')
        }

        const cliente = repositoryCliente.create({
            nome,
            CPF,
            RG,
            telefone,
            cep,
            bairro ,
            cidade,
            uf
        })

        await repositoryCliente.save(cliente)

        return cliente


    }

    public async update({id, nome, CPF, RG, telefone, cep, bairro ,cidade, uf}:Request) {
        const repositoryCliente =  getRepository(Cliente)
        const checkCliente = await repositoryCliente.findOne({where:{id}})
        let cliente

        if (checkCliente) {

            cliente = await repositoryCliente
            .createQueryBuilder().update()
            .set({nome, CPF, RG, telefone, cep, bairro ,cidade, uf})
            .where({CPF})
            .execute()

        }

        return cliente

    }
    public async delete(id:string){
        const grupoRepository = getRepository(Cliente)

        await grupoRepository.createQueryBuilder()
            .delete()
            .where({ id })
            .execute()

    }
    public async getAll(){

        const estoqueRepository = await getRepository(Cliente)

        const produtos = await estoqueRepository.find()
        return produtos
    }
    public async get(id:string){

        const estoqueRepository = await getRepository(Cliente)

        const produtos = await estoqueRepository.findOne({where:{id}})
        return produtos
    }

}

export default Clientes
