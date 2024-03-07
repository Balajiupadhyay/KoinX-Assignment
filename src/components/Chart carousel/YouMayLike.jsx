import MiniChart from '../Chart/MiniChart';
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { useState, useEffect } from 'react';

function YouMayLike() {
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

    fetchCryptoData('binancecoin,solana,ripple,cardano,polkadot');
  }, []);
    // console.log(cryptoData?.ripple)
  return (
    <div className="flex flex-col  w-[100%]  bg-white p-6">
      <h1 className="text-2xl font-semibold pb-4">You May Also Like</h1>
      <div className='flex gap-4 overflow-auto no-scrollbar' >
        {cryptoData && (
          <>
            <div className="relative flex min-w-[280px] min-h-[170px] border border-zinc-400 rounded-xl justify-center">
                <div className='absolute top-3 left-3 flex flex-col'>
                    <img src="" alt="" />
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-lg font-semibold'>BNB</span>
                        <span className=' text-xs bg-green-300/20 p-[2px] rounded-md text-green-600'>{cryptoData?.binancecoin?.usd_24h_change.toFixed(2)}%</span>
                    </div>
                </div>
                <div className='absolute top-10 left-3'>
                    <span className='text-lg font-semibold'>${cryptoData?.binancecoin?.usd}</span>
                </div>
                <div className='flex justify-center items-end pb-4'>
                    <MiniChart symbol="BINANCE:BNBUSD" chartColor="rgba(0, 255, 0, 1)" />
                </div>
                <div className='absolute top-[40%] left-[-5px] bg-zinc-50 p-2 shadow-inner rounded-full'>
                    <MdNavigateBefore />                
                </div>
            </div>

            <div className="relative flex min-w-[280px] min-h-[170px] border border-zinc-400 rounded-xl justify-center">
                <div className='absolute top-3 left-3 flex flex-col'>
                    <img src="" alt="" />
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-lg font-semibold'>SOL</span>
                        <span className=' text-xs bg-red-300/20 p-[2px] rounded-md text-red-600'>{cryptoData?.solana?.usd_24h_change.toFixed(2)}%</span>
                    </div>
                </div>
                <div className='absolute top-10 left-3'>
                    <span className='text-lg font-semibold'>${cryptoData?.solana?.usd}</span>
                </div>
                <div className='flex justify-center items-end pb-4'>
                    <MiniChart symbol="BINANCE:SOLUSD" chartColor="rgba(255, 0, 0, 1)" />
                </div>
            </div>

            <div className="relative flex min-w-[280px] min-h-[170px] border border-zinc-400 rounded-xl justify-center">
                <div className='absolute top-3 left-3 flex flex-col'>
                    <img src="" alt="" />
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-lg font-semibold'>XRP</span>
                        <span className=' text-xs bg-green-300/20 p-[2px] rounded-md text-green-600'>{cryptoData?.ripple?.usd_24h_change.toFixed(2)}%</span>
                    </div>
                </div>
                <div className='absolute top-10 left-3'>
                    <span className='text-lg font-semibold'>${cryptoData?.ripple?.usd}</span>
                </div>
                <div className='flex justify-center items-end pb-4'>
                    <MiniChart symbol="BINANCE:XRPUSD"  chartColor="rgba(0, 255, 0, 1)"/>
                </div>
            </div>

            <div className="relative flex min-w-[280px] min-h-[170px] border border-zinc-400 rounded-xl justify-center">
                <div className='absolute top-3 left-3 flex flex-col'>
                    <img src="" alt="" />
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-lg font-semibold'>ADA</span>
                        <span className=' text-xs bg-red-300/20 p-[2px] rounded-md text-red-600'>{cryptoData?.cardano?.usd_24h_change.toFixed(2)}%</span>
                    </div>
                </div>
                <div className='absolute top-10 left-3'>
                    <span className='text-lg font-semibold'>${cryptoData?.cardano?.usd}</span>
                </div>
                <div className='flex justify-center items-end pb-4'>
                    <MiniChart symbol="BINANCE:ADAUSD" chartColor="rgba(255, 0, 0, 1)" />
                </div>
            </div>

            <div className="relative flex min-w-[280px] min-h-[170px] border border-zinc-400 rounded-xl justify-center">
                <div className='absolute top-3 left-3 flex flex-col'>
                    <img src="" alt="" />
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-lg font-semibold'>DOT</span>
                        <span className=' text-xs bg-red-300/20 p-[2px] rounded-md text-red-600'>{cryptoData?.polkadot?.usd_24h_change.toFixed(2)}%</span>
                    </div>
                </div>
                <div className='absolute top-10 left-3'>
                    <span className='text-lg font-semibold'>${cryptoData?.polkadot?.usd}</span>
                </div>
                <div className='flex justify-center items-end pb-4'>
                    <MiniChart symbol="COINBASE:DOTUSD" chartColor="rgba(255, 0, 0, 1)"/>
                </div>
                <div className='absolute top-[40%] right-[-5px] bg-zinc-50 p-2 shadow-inner rounded-full'>
                    <MdOutlineNavigateNext />
                </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default YouMayLike;
