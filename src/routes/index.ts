import { Router } from 'express';
import produtoRoutes from './produtos.routes'
import grupoProdutoRoutes from './grupoProd.routes'
import clienteRoutes from './clientes.routes'
const routes = Router();


routes.use("/cliente", clienteRoutes)
routes.use("/produto", produtoRoutes.produtoRoutes)
routes.use("/estoque", produtoRoutes.produtoRoutesEestoqueRemove)
routes.use("/grupoproduto", grupoProdutoRoutes)
routes.use("/produtoEstoque", produtoRoutes.produtoRoutesEestoqueAdd)

export default routes;

