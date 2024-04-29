
import { Avatar } from "./Avatar"

interface blogType {
    id: string,
    title: string,
    content: string,
    date?: string,
    author: {
        name: string
    }
}
export const FullBlog = ({ blog }: { blog: blogType }) => {
    return <div>
        <div className="grid grid-cols-12 max-w-screen-lg justify-center mx-auto" >
            <div className="col-span-8 p-6">
                <div className="font-bold text-2xl lg:text-5xl  lg:leading-[3.5rem] pt-3">
                    {blog.title}
                </div>
                <div className="text-xs lg:text-base  text-slate-400 py-3">
                    {`Posted on ${blog.date}`}
                </div>
                <div className="lg:text-lg  text-slate-500">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4 p-6">
                <div className="py-4 font-semibold">Author</div>
                <div className="flex gap-4  items-center ">
                    <div className="invisible lg:visible">
                        <Avatar name={blog.author.name} />
                    </div>
                    <div className="font-bold text-xl">
                        {blog.author.name}
                    </div>

                </div>
                <div className="font-semibold text-slate-500 py-5">
                    Embark on a journey through the realms of imagination with me. Let my words be your guide as we explore the infinite landscapes of human experience together. Welcome to a world where every sentence paints a new adventure.
                </div>

            </div>
        </div>
    </div>
}