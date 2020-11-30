import { response, Router} from "express"
import FormaPagamento from '../service/ControllerGrupoProduto'

const grupoProdutoRoutes = Router()


grupoProdutoRoutes.post('/', async (request,response)=>{

    const{nome} = request.body

    const createFormaPagamento = new FormaPagamento();

    const grupo = await createFormaPagamento.execute(nome)

    //delete user.email

    return response.json(grupo)


})

grupoProdutoRoutes.delete('/:id',async (request,response)=>{

    const{id} = request.params
    const formapagamento = new FormaPagamento();
    await formapagamento.delete(id)

    return response.send('Forma de pagamento Deletada')


})
grupoProdutoRoutes.get('/:id',async (request,response)=>{

    const{id} = request.params
    const formapagamento = new FormaPagamento();
    const grupo = await formapagamento.get(id)

    return response.json(grupo)


})




export default formaPagamentoRoutes;
