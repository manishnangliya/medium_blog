export const FullBlogSkeleton = () => {
    return <div role="status" className=" animate-pulse">
        <div className="grid grid-cols-12 max-w-screen-lg justify-center mx-auto" >
            <div className="col-span-8 p-6">
                <div className="font-bold text-2xl lg:text-5xl  lg:leading-[3.5rem] pt-3">
                    <div className="h-20 bg-gray-300 rounded-full w-full "></div>
                </div>
                <div className="text-xs lg:text-base  text-slate-400 py-3">
                    <div className="h-3 bg-gray-200 rounded-full w-32 "></div>
                </div>
                <div className="lg:text-lg  text-slate-500">
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                </div>
            </div>
            <div className="col-span-4 p-6">
                <div className="py-4 font-semibold">Author</div>
                <div className="flex gap-4  items-center ">
                    <div className="invisible lg:visible">
                        <div className="h-2 bg-gray-200 rounded-full w-8 "></div>
                    </div>
                    <div className="font-bold text-xl">
                        <div className="h-2 bg-gray-200 rounded-full w-20 "></div>
                    </div>

                </div>
                <div className="font-semibold text-slate-500 py-5">
                    <div className="h-2 bg-gray-200 rounded-full w-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-full mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-full mb-2"></div>

                </div>

            </div>
        </div>
    </div>
}