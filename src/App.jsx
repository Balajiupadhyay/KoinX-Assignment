import Header from './components/Header/Header'
import BitcoinChart from './components/BitcoinChart/BitcoinChart'
import Performance from './components/Performance/Performance'
import Sentiment from './components/Sentiment/Sentiment'
import AboutBitcoin from './components/AboutBitcoin/AboutBitcoin'
import Tokenomics from './components/Tokenomics/Tokenomics'
import Team from './components/Team/Team'
import YouMayLike from './components/Chart carousel/YouMayLike'
import TrendingCoins from './components/Chart carousel/TrendingCoins'
import SideBar from './components/SideBar/SideBar'
import BreadCrums from './components/BreadCrum/BreadCrums'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <div className='p-4 bg-zinc-200'>
        <BreadCrums/>
        <BitcoinChart/>
        <Performance/>
        <Sentiment/>
        <AboutBitcoin/>
        <Tokenomics/>
        <Team/>
      </div> 
      <YouMayLike/>
      <TrendingCoins/>
      <div className='p-4 lg:hidden'>
        <SideBar/>
      </div>
    </>
  )
}

export default App
