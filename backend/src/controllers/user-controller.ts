
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';


async function signup(c: any) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    let user = await prisma.user.findFirst({
        where: {
            email: body.email,
        },
    })
    if (user) {
        c.status(404);
        return c.json({
            message: "User already  registered"
        })
    }
    user = await prisma.user.create({
        data: {
            email: body.email,
            name: body.name,
            password: body.password,
        },
    })
    const token = await sign({ id: user.id }, c.env.JWT_SECRET)
    return c.json({
        jwt: token
    })
}


async function signin(c: any) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    let user = await prisma.user.findFirst({
        where: {
            email: body.email,
        },
    })
    // console.log(user);
    if (!user) {
        c.status(404);
        return c.json({
            message: "User not registered"
        })
    }
    user = await prisma.user.findFirst({
        where: {
            email: body.email,
            password: body.password
        }
    })
    if (!user) {
        c.status(404);
        return c.json({
            message: "incorrect password"
        })
    }
    const token = await sign({ id: user.id }, c.env.JWT_SECRET)
    return c.json({
        jwt: token
    })
}
export { signup, signin };