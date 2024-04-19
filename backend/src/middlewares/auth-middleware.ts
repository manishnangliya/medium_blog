import { verify } from "hono/jwt";

async function authMiddleware(c: any, next: any) {
    const token = c.req.header('authorization') || "";
    if(!token){
        return c.json({
            message:"Token not provided"
        })
    }
    try {
        const response = await verify(token, c.env.JWT_SECRET);
        if(!response){
            return c.json({
                messsage: "Error in token verify"
            })
        }
        c.set('userId',response.id);
        console.log("token auth");
        await next();
    } catch (error) {
        console.log(error);
        c.status(498)
        return c.json({
            messsage: " User Not authorized "
        })
    }
}

export { authMiddleware }