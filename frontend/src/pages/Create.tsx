import { useState } from "react"
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Create = () => {
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const navigate = useNavigate();
    async function publishBlog(){
        
        const response =await axios.post(`${BACKEND_URL}/api/v1/blog/create`,{
            title,
            content
        },{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        navigate(`/blog/${response.data.message.id}`)
    }
    return <div>
        <div className="flex flex-col items-center pt-4">
            <div className="min-w-[42rem] max-w-[42rem] ">
                <input type="text" onChange={(e)=>{
                    setTitle(e.target.value);
                }} placeholder="Title" className="block w-full p-3 hover-none text-gray-900  border-2 border-gray-300 rounded-lg bg-gray-50 text-base  focus:border-slate-500" />
            </div>
            <div className="my-4 border-4 rounded-lg min-w-[42rem] max-w-[42rem] bg-gray-50  ">
                <textarea rows={10} onChange={(e)=>{
                    setContent(e.target.value);
                }} className="block p-3 w-full  text-sm text-gray-800    " placeholder="Write an article..." required />
            </div>
            <button type="button" onClick={publishBlog} className="focus:outline-none mr-10 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2">Publish</button>
        </div>
    </div>
}