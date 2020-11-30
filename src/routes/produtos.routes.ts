import { response, Router} from "express"
import CreateProdutoService from '../service/ControllerProduto'
import AddProdutoEstoque from  '../service/ControllerProdutoEstoque'
import GetProdutos from '../service/SelecionarTodos'
import {getCustomRepository, getRepository} from 'typeorm'
import multer from 'multer'
import uploadConfig from "../config/upload"
import Produto from '../models/produtos'
const produtoRoutes = Router()
const produtoRoutesEestoqueAdd = Router()
const produtoRoutesEestoqueRemove =Router()
const upload = multer(uploadConfig)
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

produtoRoutes.get('/',async (request,response)=>{
    const getProdutos = new GetProdutos();

    const produto = await getProdutos.execute()

    //const  = produto
    //delete user.email

    return response.json(produto)
})

produtoRoutes.post('/', async (request,response)=>{

    const{nome,codigo,custo,valor_venda,id_grupo,imagem} = request.body

    const createProduto = new CreateProdutoService();

    const produto = await createProduto.execute({

        nome,
        codigo,
        custo,
        valor_venda,
        id_grupo,
        imagem
    })

    //delete user.email

    const addProdtudoEstoque = new AddProdutoEstoque();

    const addEstoque = await addProdtudoEstoque.aumentar(produto.id)

    return response.json({produto,addEstoque})


})
produtoRoutesEestoqueAdd.put('/', async (request,response)=>{

    const{id} = request.body

    const addProdtudoEstoque = new AddProdutoEstoque();

    const produto = await addProdtudoEstoque.aumentar(id)

    //delete user.email

    return response.json(produto)
})

produtoRoutesEestoqueRemove.put('/', async (request,response)=>{

    const{id} = request.body

    const addProdtudoEstoque = new AddProdutoEstoque();

    const produto = await addProdtudoEstoque.diminuir(id)

    //delete user.email

    return response.json(produto)
})

export default ({produtoRoutes,produtoRoutesEestoqueAdd,produtoRoutesEestoqueRemove});
