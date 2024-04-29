export function Avatar({ name }: { name: string }) {
    return (
        <>
            {name.length == 0 ?
                <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex justify-center items-center">
                    <svg className="absolute w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div> :
                 <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
                </div>
            }


        </>
    )
}
