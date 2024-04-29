
import { BlogComponent } from "../components/BlogComponent";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../skeletons/BlogSkeleton";

export function Blogs() {

    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
        </div>
    }

    return <div>
        <div className="flex justify-center mt-4 " >
            <div className=" flex flex-col min-w-[42rem]   max-w-2xl gap-6 ">
                {blogs.map(blog => <BlogComponent
                    key={blog.id}
                    id={blog.id}
                    name={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    date="Oct 2nd 2024"
                />)}
            
            </div>
        </div>

    </div>
}