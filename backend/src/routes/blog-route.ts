import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth-middleware";
import { createBlog, deleteBlog, getAllBlog, getSingleBlog, updateBlog } from "../controllers/blog-controller";
import { validate } from "../middlewares/validate-middleware";
import { blogInput } from "@manishnangliya/medium-common-validation";
const blogRoute = new Hono();

blogRoute.post('/create',authMiddleware,validate(blogInput),createBlog);
blogRoute.put('/update',authMiddleware,validate(blogInput),updateBlog)
blogRoute.get('/bulk',getAllBlog)
blogRoute.delete('/deleteBlog/:id',deleteBlog)
blogRoute.get('/getsingle/:id',authMiddleware,getSingleBlog)

export {blogRoute}