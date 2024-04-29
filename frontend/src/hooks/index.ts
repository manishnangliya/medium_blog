import axios from "axios";
import {  useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
interface Blog {
    content: string;
    title: string;
    id: string;
    author: {
        name: string
    }
}
export const useBlog = ({ id, token }: { id: string, token: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const navigate = useNavigate();
    async function fetchBlog() {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/getsingle/${id}`, {
                headers: {
                    Authorization: token
                }
            });
            if (response.status) {
                console.log(response);
                setBlog(response.data.blog);
                setLoading(false);
            }
            else {
                navigate('/signin');
            }
        } catch (error: unknown) {
            navigate('/signin');
        }
    }
    useEffect(() => {
        fetchBlog();
    }, [id, navigate, token])

    return {
        loading,
        blog
    }
}


export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`)
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        blogs
    }
}
