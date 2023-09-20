import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Loader from './components/Loader'
const Hero = lazy(() => import('./components/Hero'))
const Explore = lazy(() => import('./components/Explore'))
const ExploreDetails = lazy(() => import('./components/ExploreDetails'))
const NotFound = lazy(() => import('./components/NotFound'))


function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/explore' element={<Explore />} />
          <Route path="exploreDetail/" element={<ExploreDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
