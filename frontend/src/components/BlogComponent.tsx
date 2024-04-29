import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface blogType {
    id:string,
    name: string,
    title: string,
    content: string,
    date: string,
}
export function BlogComponent({ id, name, title, content, date }: blogType) {
    return <Link to={`/blog/${id}`}  >
        <div className="flex items-center gap-3 cursor-pointer ">
            <div>
                <Avatar name={name} />
            </div>
            <div className="text-sm">
                {name}
            </div>
            <div>
                <Circle/>
            </div>
            <div className="font-semibold text-sm text-slate-400 ">
                {date}
            </div>
        </div>
        <div className=" font-bold text-xl">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0, 150)} {content.length > 150 ? "..." : ""}.
        </div>
        <div className="text-slate-500 font-thin text-sm py-6">
            {`${Math.ceil(content.length/100)} min read`}
        </div>
        <div className="bg-slate-200 h-1 w-full">

        </div>
    </Link>
}

function Circle(){
    return <div className="h-1 w-1 bg-slate-700 rounded-full">
    </div>
}