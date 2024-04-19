import { Hono } from 'hono'
import { signin, signup } from '../controllers/user-controller'
import { validate } from '../middlewares/validate-middleware'
import { signInInput, signUpInput } from '@manishnangliya/medium-common'
const userRoute = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
  }>()

userRoute.post('/signup',validate(signUpInput),signup)
userRoute.post('/signin',validate(signInInput),signin)


export {userRoute}