import { response } from 'express'
import {getRepository,getConnection} from 'typeorm'
import AppError from '../error/AppErro'

import Produtos from '../models/produtos'

class getProdutos {

    public async execute(){

            const estoqueRepository = await getRepository(Produtos)

            const produtos = await estoqueRepository.findAndCount()
            return produtos
    }

}

export default getProdutos

