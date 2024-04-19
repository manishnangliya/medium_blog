export const validate = (schema: any) => async (c: any, next: any) => {

    try {
        const body = await c.req.json();
        const parsedBody = await schema.parseAsync(body);
        console.log(parsedBody);
        await next()
        // return c.json({
        //     message:"parsed"
        // })
    } catch (e:any) {
        c.status(400)
        const message = e.errors.map((err: { message: string; })=>err.message);
        return c.json({
            message: message
        })
    }

}