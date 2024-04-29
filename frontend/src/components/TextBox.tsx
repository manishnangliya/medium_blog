import { ChangeEvent } from "react"

interface labeledInputType {
    label:string,
    placeholder:string
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void
    type:string
}
export function TextBox({ label, placeholder, onChange,type }: labeledInputType) {
    return <div>
        <p className="py-1 font-bold text-sm ">{label}</p>
        <input onChange={onChange} className="border w-96 rounded-md py-1 px-2 font-semibold text-l text-black border-gray-700" type={type} placeholder={placeholder} />
    </div>
}