import { verify } from "hono/jwt";

async function authMiddleware(c: any, next: any) {
    const token = c.req.header('authorization') || null;

    try {
        if(!token){
            c.status(401)
            console.log("token not provided");
            return c.json({
                messsage: "Token not provided"
            })
        }
        const response = await verify(token, c.env.JWT_SECRET);
        if(!response){
            c.status(401)
            // throw new Error("Error in Token  provided")
            console.log("Error in token verify");

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
        // throw new Error("User Not authorized")
        console.log("User Not authorized");

        return c.json({
            messsage: " User Not authorized "
        })
    }
}

export { authMiddleware }