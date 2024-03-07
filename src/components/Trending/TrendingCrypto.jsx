import { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";

function TrendingCrypto() {
    const [cryptoData, setCryptoData] = useState(null);

    useEffect(() => {
        async function fetchCryptoData() {
          try {
            const response = await fetch(`https://api.coingecko.com/api/v3/search/trending`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCryptoData(data);
          } catch (error) {
            console.error('Error fetching crypto data:', error);
          }
        }
    
        fetchCryptoData();
      }, []);

  return (
    <div className="flex flex-col bg-white rounded-lg px-8 py-4">
        <h1 className='text-2xl font-semibold pb-4'>Trending Coins (24h)</h1>
        <div className="flex flex-col gap-4 ">
            <div className="flex justify-between">
                <div className="flex item-center">
                    <img className="h-6 mr-1 rounded-full" src={cryptoData?.coins[0]?.item?.thumb} alt="Crypto Icon"  />
                    <span className=" capitalize font-semibold">{cryptoData?.coins[0]?.item?.id}</span>
                    <span className=" font-semibold">({cryptoData?.coins[0]?.item?.symbol})</span>
                </div>
                
                <div className="flex items-center bg-green-200/40 text-green-600 font-medium rounded-md p-[2px] px-2">
                    <span><IoMdArrowDropup /></span>
                    <span>{cryptoData?.coins[0]?.item?.data?.price_change_percentage_24h?.usd.toFixed(2)}%</span>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex item-center">
                    <img className="h-6 mr-1 rounded-full" src={cryptoData?.coins[1]?.item?.thumb} alt="Crypto Icon"  />
                    <span className=" capitalize font-semibold">{cryptoData?.coins[1]?.item?.id}</span>
                    <span className=" font-semibold">({cryptoData?.coins[1]?.item?.symbol})</span>
                </div>
                
                <div className="flex items-center bg-green-200/40 text-green-600 font-medium rounded-md p-[2px] px-2">
                    <span><IoMdArrowDropup /></span>
                    <span>{cryptoData?.coins[1]?.item?.data?.price_change_percentage_24h?.usd.toFixed(2)}%</span>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex item-center">
                    <img className="h-6 mr-1 rounded-full" src={cryptoData?.coins[2]?.item?.thumb} alt="Crypto Icon"  />
                    <span className=" capitalize font-semibold">{cryptoData?.coins[2]?.item?.id}</span>
                    <span className=" font-semibold">({cryptoData?.coins[2]?.item?.symbol})</span>
                </div>
                
                <div className="flex items-center bg-green-200/40 text-green-600 font-medium rounded-md p-[2px] px-2">
                    <span><IoMdArrowDropup /></span>
                    <span>{cryptoData?.coins[2]?.item?.data?.price_change_percentage_24h?.usd.toFixed(2)}%</span>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default TrendingCrypto