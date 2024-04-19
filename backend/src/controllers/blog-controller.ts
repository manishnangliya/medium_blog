
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

async function createBlog(c: any) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
        const body = await c.req.json();

        const responsePost = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: c.get('userId')
            }
        })
        return c.json({
            message: responsePost
        })
    } catch (error) {
        c.status(409) // conflicting with current state of resource
        console.log(error);
        return c.json({
            message:"Post not created"
        })
    }
}




async function updateBlog(c: any) {
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
        const postId = c.req.query('id');
        const body =await c.req.json()
        const response = await prisma.post.update({
            where:{
                id:postId
            },
            data:{
                title:body.title,
                content:body.content
            }
        })
        
        return c.json({
            message:"post updated",
            post:response
        })

    } catch (error) {
        return c.json({
            message:"not updated post"
        })
    }

}

async function getSingleBlog(c: any) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const postId = c.req.param('id');
        const response = await prisma.post.findFirst({
            where: {
                id: postId
            }
        })
        console.log(response);
        return c.json({
            message: response
        })
    } catch (error) {
        c.status(409);
        return c.json({
            message: "Post not found"
        })
    }
}
async function getAllBlog(c: any) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
        const responsePost = await prisma.post.findMany()
        return c.json({
            message: responsePost
        })
    } catch (error) {
        c.status(404)
        return c.json({
            message: "Posts not Found"
        })
    }


}

async function deleteBlog(c: any) {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const postId = c.req.param('id');
        const response = await prisma.post.delete({
            where: {
                id: postId
            }
        })
        console.log(response);
        return c.json({
            message: "post deleted"
        })
    } catch (error) {
        c.status(409);
        return c.json({
            message: "Post not found"
        })
    }


}



export { createBlog, updateBlog, getSingleBlog, getAllBlog, deleteBlog }