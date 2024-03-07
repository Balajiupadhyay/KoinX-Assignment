import { useState, useEffect } from "react";
import { IoIosInformationCircle } from "react-icons/io";

function Performance() {
  const [cryptoData, setCryptoData] = useState(null);



  useEffect(() => {
    async function fetchCryptoData() {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
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


  const usdPrice = cryptoData?.market_data?.current_price?.usd;
  const priceChange24hUSD = cryptoData?.market_data?.price_change_24h_in_currency?.usd;

  // Calculate today's high and low
  const todayHighUSD = priceChange24hUSD < 0 ? usdPrice - priceChange24hUSD : usdPrice + priceChange24hUSD;
  const todayLowUSD = priceChange24hUSD < 0 ? usdPrice + priceChange24hUSD : usdPrice - priceChange24hUSD;

  const priceChange7dUSD = cryptoData?.market_data?.price_change_percentage_7d_in_currency?.usd;

  // Calculate today's high and low
  const SevendHighUSD =  (usdPrice * (priceChange7dUSD / 100)) + usdPrice 
  const SevendLowUSD = Math.abs((usdPrice * (priceChange7dUSD / 100)) - usdPrice);

  // const usdPrice = data.market_data.current_price.usd;
  const priceChange1yUSD = cryptoData?.market_data?.price_change_percentage_1y_in_currency?.usd;

  // Calculate 1-year high and low
  const oneYearHighUSD = usdPrice + (usdPrice * (priceChange1yUSD / 100));
  const oneYearLowUSD =  (usdPrice * (priceChange1yUSD / 100)) - usdPrice;

  

  //get formatted date
  const currDate = new Date();
  const currYear = currDate.getFullYear();
  const athDate = cryptoData?.market_data?.ath_date?.usd;
  const athdate = new Date(athDate);
  const athYear = athdate.getFullYear();
  const athOptions = { year: 'numeric', month: 'short', day: '2-digit' };
  const athFormattedDate = athdate.toLocaleDateString('en-US', athOptions);

  const atlDate = cryptoData?.market_data?.atl_date?.usd;
  const atldate = new Date(atlDate);
  const atlYear = atldate.getFullYear();
  const atlOptions = { year: 'numeric', month: 'short', day: '2-digit' };
  const atlFormattedDate = atldate.toLocaleDateString('en-US', atlOptions);

  return (
    <div className="flex flex-col  w-[100%] md:w-[70%] bg-white rounded-lg p-6 mb-5">
      <h1 className="text-2xl font-semibold pb-4">Performance</h1>
      <div className="flex justify-between items-center gap-4 mb-8">
        <div className=" flex flex-col w-40 gap-2 ">
          <span className=" text-sm ">Today&apos;s Low</span>
          <span className=" font-medium ">${todayLowUSD.toFixed(2)}</span>
        </div>
        <div className="w-[100%] gradient h-[5px] border-none rounded-lg">
            <div></div>
        </div>
        <div className=" flex flex-col w-40 gap-2 items-end">
          <span className=" text-sm">Today&apos;s High</span>
          <span className=" font-medium">${todayHighUSD.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 mb-6">
        <div className=" flex flex-col w-40 gap-2 it">
          <span className=" text-sm">52W Low</span>
          <span className=" font-medium">${oneYearLowUSD.toFixed(2)}</span>
        </div>
        <div className="w-[100%] gradient h-[5px] border-none rounded-lg">
            <div></div>
        </div>
        <div className=" flex flex-col w-40 gap-2 items-end">
          <span className=" text-sm">52W High</span>
          <span className=" font-medium">${oneYearHighUSD.toFixed(2)}</span>
        </div>
      </div>

      <h1 className="text-xl font-semibold pb-4 flex items-center gap-2">Fundamental <IoIosInformationCircle className=" text-zinc-4" /></h1>


      <div className="flex sm:flex-row flex-col justify-between sm:gap-40 gap-2 ">
        <div className="flex flex-col sm:w-[50%] gap-4">
          <div className="flex justify-between items-center">
            <div className=" text-sm text-zinc-500">Bitcoin Price</div>
            <div className="font-medium text-sm">${usdPrice}</div>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <div className=" text-sm text-zinc-500">24h Low / 24h High</div>
            <div className="font-medium text-sm">${cryptoData?.market_data?.low_24h?.usd} / ${cryptoData?.market_data?.high_24h?.usd}</div>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <div className=" text-sm text-zinc-500">7d Low / 7d High</div>
            <div className="font-medium text-sm">${SevendLowUSD.toFixed(2)} / ${SevendHighUSD.toFixed(2)}</div>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <div className=" text-sm text-zinc-500">Trading Volume</div>
            <div className="font-medium text-sm">${cryptoData?.market_data?.total_volume?.usd}</div>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <div className=" text-sm text-zinc-500">Market Cap Rank</div>
            <div className="font-medium text-sm">#{cryptoData?.market_data?.market_cap_rank}</div>
          </div>
          <hr />
        </div>

        
        <div className="flex flex-col sm:w-[50%] gap-2">
          <div className="flex justify-between pb-2 items-center">
            <div className=" text-sm text-zinc-500">Market Cap</div>
            <div className="font-medium text-sm">${cryptoData?.market_data?.market_cap?.usd}</div>
          </div>
          <hr />
          <div className="flex justify-between py-2 items-center">
            <div className=" text-sm text-zinc-500">Bitocoin Cap Dominace</div>
            <div className="font-medium text-sm">{cryptoData?.market_data?.market_cap_change_percentage_24h_in_currency?.usd.toFixed(2)}%</div>
          </div>
          <hr />
          <div className="flex justify-between py-2 items-center">
            <div className=" text-sm text-zinc-500">Volume /  Market Cap</div>
            <div className="font-medium text-sm">{cryptoData?.market_data?.market_cap_fdv_ratio}</div>
          </div>
          <hr />
          <div className="flex justify-between items-center  ">
            <div className=" text-sm text-zinc-500">All Time High</div>
            <div className="">
              <div className="font-medium text-sm"><span>${cryptoData?.market_data?.ath?.usd}</span> <span className="text-red-500">{cryptoData?.market_data?.ath_change_percentage?.usd.toFixed(2)}%</span></div>
              <div className="text-xs">{athFormattedDate} (about {currYear - athYear} year)</div>
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <div className=" text-sm text-zinc-500">All Time Low</div>
            <div className="">
              <div className="font-medium text-sm"><span>${cryptoData?.market_data?.atl?.usd}</span> <span className="text-green-500">{cryptoData?.market_data?.atl_change_percentage?.usd.toFixed(2)}%</span></div>
              <div className="text-xs">{atlFormattedDate} (about {currYear - atlYear} year)</div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Performance