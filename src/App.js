import './App.css';
import Home from './components/Home';
import PieceOne from './components/piece_one/PieceOne';
import PieceTwo from './components/piece_two/PieceTwo';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pieceone" element={<PieceOne />} />
          <Route path="/piecetwo" element={<PieceTwo />} />
          <Route path="/conclusion" element={<Conclusion />} />
        </Routes>

      </Router>
    </div>
  );

}

export default App;
