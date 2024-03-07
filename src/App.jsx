import Header from './components/Header/Header'
import BitcoinChart from './components/BitcoinChart/BitcoinChart'
import Performance from './components/Performance/Performance'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <div className='p-4 bg-zinc-200'>
        <BitcoinChart/>
        <Performance/>
      </div> 
    </>
  )
}

export default App
