export const BlogSkeleton = () => {
    return <div role="status" className=" animate-pulse">
        <div className="flex justify-center mt-4 " >
            <div className=" flex flex-col min-w-[42rem]   max-w-2xl gap-6 ">
                <div className="flex items-center gap-3 cursor-pointer ">
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full w-4 "></div>
                    </div>
                    <div className="text-sm">
                        <div className="h-2.5 bg-gray-200 rounded-full w-20 "></div>
                    </div>
                    <div>
                        <Circle />
                    </div>
                    <div className="font-semibold text-sm text-slate-400 ">
                        <div className="h-2.5 bg-gray-200 rounded-full w-20 "></div>
                    </div>
                </div>

                
                <div className=" font-bold text-xl">
                    <div className="h-2.5 bg-gray-200 rounded-full w-48 "></div>
                </div>
                <div className="text-md font-thin">
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                </div>
                <div className="text-slate-500 font-thin text-sm ">
                    <div className="h-2 bg-gray-200 rounded-full w-20 "></div>
                </div>
                <div className="bg-slate-200 h-1 w-full">

                </div>



                <span className="sr-only">Loading...</span>
            </div>
        </div>
    </div>

}
function Circle() {
    return <div className="h-1 w-1 bg-slate-700 rounded-full">
    </div>
}