import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Next from './component/Next'
import Main from './component/Main'
import Run from './component/Run'
import Hello from './component/Hello'
import HelloGif from './component/HelloGif'
import WebSoket from './component/WebSoket'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/next" element={<Next/>}/>
          <Route path="/run" element={<Run/>}/>
          <Route path="/hello" element={<Hello/>}/>
          <Route path="/hellogif" element={<HelloGif/>}/>
          <Route path="/websoket" element={<WebSoket/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
