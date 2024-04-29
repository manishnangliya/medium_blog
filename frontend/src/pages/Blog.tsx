import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../skeletons/FullBlogSkeleton";

export function Blog() {
    const token = localStorage.getItem('token') || "";
    const { id } = useParams();
    console.log(token);
    const { loading, blog } = useBlog({id:id||"", token});
    if (loading || !blog ) {
        return <div>
            <FullBlogSkeleton/>
        </div>
    }

    return <>
        <FullBlog blog ={blog}/>
    </>
}