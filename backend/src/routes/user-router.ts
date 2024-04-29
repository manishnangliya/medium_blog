import { Hono } from 'hono'
import { getInfo, signin, signup } from '../controllers/user-controller'
import { validate } from '../middlewares/validate-middleware'
import {signInInput, signUpInput} from '@manishnangliya/medium-common-validation'
import { authMiddleware } from '../middlewares/auth-middleware'
const userRoute = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
  }>()

userRoute.post('/signup',validate(signUpInput),signup)
userRoute.post('/signin',validate(signInInput),signin)
userRoute.get('/getinfo',authMiddleware,getInfo)


export {userRoute}