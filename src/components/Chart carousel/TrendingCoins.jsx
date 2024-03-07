import MiniChart from '../Chart/MiniChart';
import { useState, useEffect } from 'react';

function TrendingCoins() {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    async function fetchCryptoData(cryptoIds) {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds}&vs_currencies=usd&include_24hr_change=true`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    }

    fetchCryptoData('bitcoin,ethereum,dogecoin,uniswap,centrifuge');
  }, []);
    // console.log(cryptoData?.binancecoin)
  return (
    <div className="flex flex-col  w-[100%]  bg-white rounded-lg p-6 mb-5 ">
      <h1 className="text-2xl font-semibold pb-4">Trending Coins</h1>
      <div className='flex gap-4 overflow-auto no-scrollbar'>
        {cryptoData && (
          <>
            <div className="relative flex min-w-[280px] min-h-[170px] border border-zinc-400 rounded-xl justify-center">
                <div className='absolute top-3 left-3 flex flex-col'>
                    <img src="" alt="" />
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-lg font-semibold'>BTC</span>
                        <span className=' text-xs bg-green-300/20 p-[2px] rounded-md text-green-600'>{cryptoData?.bitcoin?.usd_24h_change.toFixed(2)}%</span>
                    </div>
                </div>
                <div className='absolute top-10 left-3'>
                    <span className='text-lg font-semibold'>${cryptoData?.bitcoin?.usd}</span>
                </div>
                <div className='flex justify-center items-end pb-4'>
                    <MiniChart symbol="BINANCE:BTCUSD" chartColor="rgba(0, 255, 0, 1)" />
                </div>
            </div>

            <div className="relative flex min-w-[280px] min-h-[170px] border border-zinc-400 rounded-xl justify-center">
                <div className='absolute top-3 left-3 flex flex-col'>
                    <img src="" alt="" />
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-lg font-semibold'>ETH</span>
                        <span className=' text-xs bg-red-300/20 p-[2px] rounded-md text-red-600'>{cryptoData?.ethereum?.usd_24h_change.toFixed(2)}%</span>
                    </div>
                </div>
                <div className='absolute top-10 left-3'>
                    <span className='text-lg font-semibold'>${cryptoData?.ethereum?.usd}</span>
                </div>
                <div className='flex justify-center items-end pb-4'>
                    <MiniChart symbol="BINANCE:ETHUSD" chartColor="rgba(255, 0, 0, 1)" />
                </div>
            </div>

            <div className="relative flex min-w-[280px] min-h-[170px] border border-zinc-400 rounded-xl justify-center">
                <div className='absolute top-3 left-3 flex flex-col'>
                    <img src="" alt="" />
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-lg font-semibold'>DOGE</span>
                        <span className=' text-xs bg-green-300/20 p-[2px] rounded-md text-green-600'>{cryptoData?.dogecoin?.usd_24h_change.toFixed(2)}%</span>
                    </div>
                </div>
                <div className='absolute top-10 left-3'>
                    <span className='text-lg font-semibold'>${cryptoData?.dogecoin?.usd}</span>
                </div>
                <div className='flex justify-center items-end pb-4'>
                    <MiniChart symbol="BINANCE:DOGEUSD"  chartColor="rgba(0, 255, 0, 1)"/>
                </div>
            </div>

            <div className="relative flex min-w-[280px] min-h-[170px] border border-zinc-400 rounded-xl justify-center">
                <div className='absolute top-3 left-3 flex flex-col'>
                    <img src="" alt="" />
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-lg font-semibold'>UNI</span>
                        <span className=' text-xs bg-red-300/20 p-[2px] rounded-md text-red-600'>{cryptoData?.uniswap?.usd_24h_change.toFixed(2)}%</span>
                    </div>
                </div>
                <div className='absolute top-10 left-3'>
                    <span className='text-lg font-semibold'>${cryptoData?.uniswap?.usd}</span>
                </div>
                <div className='flex justify-center items-end pb-4'>
                    <MiniChart symbol="BINANCE:UNIUSD" chartColor="rgba(255, 0, 0, 1)" />
                </div>
            </div>

            <div className="relative flex min-w-[280px] min-h-[170px] border border-zinc-400 rounded-xl justify-center">
                <div className='absolute top-3 left-3 flex flex-col'>
                    <img src="" alt="" />
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-lg font-semibold'>CFG</span>
                        <span className=' text-xs bg-red-300/20 p-[2px] rounded-md text-red-600'>{cryptoData?.centrifuge?.usd_24h_change.toFixed(2)}%</span>
                    </div>
                </div>
                <div className='absolute top-10 left-3'>
                    <span className='text-lg font-semibold'>${cryptoData?.centrifuge?.usd}</span>
                </div>
                <div className='flex justify-center items-end pb-4'>
                    <MiniChart symbol="CRYPTO:CFGUSD" chartColor="rgba(255, 0, 0, 1)"/>
                </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TrendingCoins;
