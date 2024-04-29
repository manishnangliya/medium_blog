export function CustomButton({onClick,label}:any) {
    return <div className="p-2 px-4">
        <button type="button" onClick={onClick} className="text-white w-[100%] bg-white hover:bg-white focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-black dark:hover:bg-slate-600 focus:outline-none dark:focus:ring-black">{label}</button>
    </div>
}