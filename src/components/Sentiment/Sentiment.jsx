import { MdInfo } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import News from '../../assets/news.png'
import Trend from '../../assets/trend.png'

function Sentiment() {
  return (
    <div className=" flex flex-col w-[100%] md:w-[70%] bg-white rounded-lg p-6 mb-5">
        <h1 className="text-2xl font-semibold pb-1">Sentiment</h1>
        <div className="flex  items-center gap-2 pb-2" >
            <h3>Key Events </h3>
            <MdInfo />
        </div>
            <div className="relative">
                <div className=" flex gap-4 pb-5 overflow-auto no-scrollbar">
                    <div className=" bg-blue-200/50 rounded-xl p-4 min-w-[600px]">
                        <div className="flex gap-1">
                            <img src={News} alt="News" className="h-10 w-10"/>
                            <h1 className=" font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti libero optio dicta, natus ipsum.</h1>
                        </div>
                        <div className="">
                            <p className="px-11">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quis sed eveniet ratione fugit
                                cupiditate ab, dolorem consectetur saepe pariatur porro explicabo nam. Maxime nobis culpa optio
                                quo iusto! Excepturi alias nam similique, deserunt, dolores quas, temporibus ratione corrupti
                                eligendi eaque ullam et enim molestiae a neque est aut eius.
                            </p>
                        </div>
                    </div>
                    <div className=" bg-green-200/50 rounded-xl p-4 min-w-[600px]">
                        <div className="flex gap-1">
                            <img src={Trend} alt="News" className="h-10 w-10"/>
                            <h1 className=" font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti libero optio dicta, natus ipsum.</h1>
                        </div>
                        <div>
                            <p className="px-11">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quis sed eveniet ratione fugit
                                cupiditate ab, dolorem consectetur saepe pariatur porro explicabo nam. Maxime nobis culpa optio
                                quo iusto! Excepturi alias nam similique, deserunt, dolores quas, temporibus ratione corrupti
                                eligendi eaque ullam et enim molestiae a neque est aut eius.
                            </p>
                        </div>
                    </div>
                    <div className=" bg-green-200/50 rounded-xl p-4 min-w-[600px]">
                        <div className="flex gap-1">
                            <img src={Trend} alt="News" className="h-10 w-10"/>
                            <h1 className=" font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti libero optio dicta, natus ipsum.</h1>
                        </div>
                        <div>
                            <p className="px-11">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quis sed eveniet ratione fugit
                                cupiditate ab, dolorem consectetur saepe pariatur porro explicabo nam. Maxime nobis culpa optio
                                quo iusto! Excepturi alias nam similique, deserunt, dolores quas, temporibus ratione corrupti
                                eligendi eaque ullam et enim molestiae a neque est aut eius.
                            </p>
                        </div>
                    </div>
                <span className="absolute right-4 rounded-full p-3 top-[40%] bg-white">
                    <GrLinkNext />
                </span>
                </div>
            </div>
        
        <div className="flex  items-center gap-2 pb-4 font-semibold">
            <h1>Analytics Estimates</h1>
            <MdInfo />
        </div>
        <div className="flex sm:gap-10 gap-2 items-center">
            <div className="min-h-28 min-w-28 rounded-full  bg-green-200/50 flex justify-center items-center  text-green-600">
                <span className="font-medium text-4xl">76</span> 
                <span className="text-sm">%</span>
            </div>
            <div className="flex gap-4 flex-col text-zinc-500">
                <span className=" flex items-center gap-4 ">
                    Buy <hr className="w-[50px] sm:w-[240px] border-[4px] border-green-600 rounded-sm"/> 76%
                </span>
                <span className=" flex items-center gap-4">
                    Hold <hr className="w-[20px] sm:w-[50px] border-[4px] rounded-sm"/> 8%
                </span>
                <span className=" flex items-center gap-4 ">
                    Sell <hr className="w-[40px] sm:w-[80px] border-[4px] border-red-600 rounded-sm"/> 16%
                </span> 
            </div>
        </div>
    </div>
  )
}

export default Sentiment