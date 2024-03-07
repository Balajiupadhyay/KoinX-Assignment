import GetStarted from "../GetStarted/GetStarted"
import TrendingCrypto from "../Trending/TrendingCrypto"

function SideBar() {
  return (
    <div className="flex flex-col  w-[100%] md:w-[100%] mb-5">
        <GetStarted/>
        <TrendingCrypto/>
    </div>
  )
}

export default SideBar