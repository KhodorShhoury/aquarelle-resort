import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/utils/Header';
import Loader from './components/utils/loader';

// Lazy load the components
const LazyHomePage = lazy(() => import('./pages/Home/HomePage'));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<LazyHomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
