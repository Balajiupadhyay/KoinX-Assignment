import Header from './components/Header/Header'
import BitcoinChart from './components/BitcoinChart/BitcoinChart'
import Performance from './components/Performance/Performance'
import Sentiment from './components/Sentiment/Sentiment'
import AboutBitcoin from './components/AboutBitcoin/AboutBitcoin'
import Tokenomics from './components/Tokenomics/Tokenomics'
import Team from './components/Team/Team'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <div className='p-4 bg-zinc-200'>
        <BitcoinChart/>
        <Performance/>
        <Sentiment/>
        <AboutBitcoin/>
        <Tokenomics/>
        <Team/>
      </div> 
    </>
  )
}

export default App
