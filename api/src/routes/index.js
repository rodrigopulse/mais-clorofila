import { Router } from 'express'

// Controllers
import UserController from '../controllers/UserController'

const routes = Router()

routes.get('/', (req, res) => {res.status(200).json({helloWorld: 'Welcome to Mais Clorofila'})})

//User
routes.post('/user/register', UserController.register)

export default routes