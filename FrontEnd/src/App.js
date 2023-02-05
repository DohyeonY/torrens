import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Next from './component/Next'
import Main from './component/Main'
import Run from './component/Run'
import Hello from './component/Hello'
import HelloGif from './component/HelloGif'
import WebSoket from './component/WebSoket'
import CatchBf from './component/WaitScreen/CatchBF'
import Sleep from './component/WaitScreen/Sleep'
import EatLunch from './component/WaitScreen/EatLunch'


function App() {
  return (
    <div className="App"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main/>}/>
          <Route path="/next" element={<Next/>}/>
          <Route path="/run" element={<Run/>}/>
          <Route path="/hello" element={<Hello/>}/>
          <Route path="/hellogif" element={<HelloGif/>}/>
          <Route path="/websoket" element={<WebSoket/>}/>
          <Route path="/" element={<CatchBf/>}/>
          <Route path="/sleep" element={<Sleep/>}/>
          <Route path="/eatlunch" element={<EatLunch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
