import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProfilSekolah from '../src/pages/profil.jsx';
import Home from '../src/pages/home.jsx';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';

export default function App() {
  return (
    <section className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profil" element={<ProfilSekolah />}/>
        </Routes>
      </Router>
      <Footer />
    </section>
  )
}
