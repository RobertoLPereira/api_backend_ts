import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes'
import routesSistema from './routes/sistemaseguranca/sistema/routes-sistema'
import routesOrdemServco from './routes/sistemaseguranca/ordem-servico/routes-ordem-servico'
import routesopcoesMenu from './routes/sistemaseguranca/menu/route-menu'
import routesPerfil from './routes/sistemaseguranca/perfil/route-perfil'

AppDataSource.initialize().then(() => {
	const app = express()

	app.use(express.json())

	app.use(routes)
	app.use(routesSistema)
	app.use(routesOrdemServco)
	app.use(routesopcoesMenu)
	app.use(routesPerfil)
	console.log("O sistema está disponível  em http://localhost:%s",process.env.PORT);
	return app.listen(process.env.PORT)
	
})
