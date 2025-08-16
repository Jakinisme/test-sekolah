import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy} from 'react'

const Profile = lazy(() => import('@pages/profil.jsx'));
const Home = lazy(() => import('@pages/home.jsx'));
const Gallery = lazy(() => import('@pages/galeri.jsx'))

import Header from '@components/layout/Header.jsx';
import Footer from '@components/layout/Footer.jsx';

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
            <Route path='/galeri' element={<Gallery />}/>
          </Routes>
        </Suspense>
        </main>
        <Footer />
      </Router>
    </section>
  )
}
