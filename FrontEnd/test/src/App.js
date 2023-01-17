import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Next from './component/Next'
import Main from './component/Main'
import Run from './component/Run'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/next" element={<Next/>}/>
          <Route path="/run" element={<Run/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
