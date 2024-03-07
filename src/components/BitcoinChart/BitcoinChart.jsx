import { useEffect, useState } from "react";
import FullChart from "../Chart/FullChart"
import BitcoinLogo from "../../assets/bitcoin.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import SideBar from "../SideBar/SideBar";

function BitcoinChart() {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    async function fetchCryptoData(cryptoIds) {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds}&vs_currencies=usd%2Cinr&include_24hr_change=true`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    }

    fetchCryptoData('bitcoin');
  }, []);
  // console.log(cryptoData)
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col  w-[100%] md:w-[70%] bg-white rounded-lg p-6 mb-5">
      <div className="">
        <div className="flex flex-row items-center mb-6">
          <img src={BitcoinLogo} alt="Bitcoin Logo" className="h-8 w-8 mr-2" />
          <span className="font-bold mr-2 text-lg">Bitcoin </span>
          <span className="mr-6 text-xs">BTC</span>
          <span className=" left-64 p-2 bg-zinc-500/80 rounded-lg text-white text-xs">RANK #1</span>
        </div>
        <div className="flex items-center">
          <span className=" font-semibold text-2xl mr-6">${cryptoData?.bitcoin?.usd.toLocaleString()}</span>
          <span className="text-xs bg-green-200/40 text-green-600 px-6 rounded-md flex w-fit h-5 items-center mr-4">
            {cryptoData?.bitcoin?.usd_24h_change < 0 ? 
              <>{<TiArrowSortedDown />} {cryptoData?.bitcoin?.usd_24h_change.toFixed(2)}</> :
              <>{<TiArrowSortedUp />} {cryptoData?.bitcoin?.usd_24h_change.toFixed(2)}</>
            }
          </span>
          <span className="text-xs">(24H)</span>
        </div>
        <span className="text-xs font-medium">₹{cryptoData?.bitcoin?.inr.toLocaleString()}</span>
        <hr className="mt-4"/>
      </div>
      <FullChart/>
      </div>
      <div className="md:w-[28%] hidden lg:block">
        <SideBar/>
      </div>
      
    </div>
    
  )
}

export default BitcoinChart