
import "../../index.css"
const app = () => {
    return (
        <>
            <div className="h-full flex select-none flex-col gap-5 justify-center items-center bg-cover	 md:bg-way-image sm:bg-sharks-image ">
                <div className=" text-2xl font-[1400]">Card Maker</div>
                <div className="flex rounded-md gap-3 bg-slate-50 flex content-center items-center pr-2">
                    <div className="rounded-md relative overflow-hidden">
                        <img className="w-[150px] object-cover" src="https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        {/* <p className=" text-xs absolute text-cyan-100
                        align-center pb-3 w-full text-center  bottom-0">Rutvik Jaiswal</p> */}
                    </div>
                    <div className="content sm {  text-left text-center }">
                        <div className=" text-black text-2xl font-bold">
                            Software Engineer
                            <p className=" text-slate-500 text-xl ">Rutvik Jaiswal</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="title">
                        <p className="text-[22px] font-bold text-indigo-400"> " Pure Hardwork,No Shortcut "</p>
                    </div>
                    <div className="students"></div>
                </div>
            </div>
        </>
    )
}

export default app