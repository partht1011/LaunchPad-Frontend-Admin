import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import CreateIDO from './pages/CreateIDO';
import BlackList from './pages/BlackList';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-primary ">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-ido" element={<CreateIDO />} />
        <Route path="/wishlist" element={<BlackList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
