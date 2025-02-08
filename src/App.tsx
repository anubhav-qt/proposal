import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProposalCard from "./components/ProposalCard.tsx";
import Memories from './components/Memories';
import './App.css'



function App() {
  return (
    <Router basename="/proposal">
        <Routes>
            <Route path="/" element={<ProposalCard />} />
            <Route path="/memories" element={<Memories />} />
        </Routes>
    </Router>
  );
}

export default App
