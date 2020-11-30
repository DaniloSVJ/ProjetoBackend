import { response, Router} from "express"
import CreateCliente from '../service/ControllerCliente'
//import UpdateProdutoImagemService from '../service/UpdateProdutoImagemService'
import multer from 'multer'
import uploadConfig from "../config/upload"
const clienteRoutes =  Router()

clienteRoutes.post('/', async (request,response)=>{

    const {id} =request.params

    const{nome, CPF, RG, telefone, cep, bairro ,cidade, uf} = request.body

    const createCliente = new CreateCliente();

    const cliente = await createCliente.execute(
        {
            id,
            nome,
            CPF,
            RG,
            telefone,
            cep,
            bairro ,
            cidade,
            uf
        })

    return response.json(cliente)


})

export default clienteRoutes

