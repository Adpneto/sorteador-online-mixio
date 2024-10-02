import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Configuration from './pages/Config/config';
import Giveaway from './pages/giveaway/giveaway';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuration />} />
          <Route path='/sorteio' element={<Giveaway />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App;
