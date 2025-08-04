import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy} from 'react'

const Profile = lazy(() => import('../src/pages/profil.jsx'));
const Home = lazy(() => import('../src/pages/home.jsx'));

import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';

export default function App() {
  return (
    <section className='app'>
      <Router>
        <Header />
        <main className="main">
          <Suspense>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/profil" element={<Profile />}/>
          </Routes>
        </Suspense>
        </main>
        <Footer />
      </Router>
    </section>
  )
}
