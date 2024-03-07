import GetStartedImg from '../../assets/getStarted.png'
import { GrLinkNext } from "react-icons/gr";

function GetStarted() {
  return (
    <div className="flex flex-col items-center p-8 gap-6 gradientGetStarted rounded-lg text-white mb-4">
        <h1 className='text-2xl font-semibold px-12 text-center'>Get Started with KoinX for Free</h1>
        <p className='text-center'>With our range of features that you can equip for free, KoinX allow you to be more educated and aware of 
            your tax reports.
        </p>
        <img src={GetStartedImg} alt="Get Started" className='rounded-xl' />
        <div className='flex flex-row items-center gap-2 bg-zinc-50 text-black rounded-md p-3 px-4'>
            <button className=' font-semibold'>Get Started for Free </button>
            <GrLinkNext /> 
        </div>
    </div>
  )
}

export default GetStarted