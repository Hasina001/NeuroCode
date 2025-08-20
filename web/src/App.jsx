import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import "./App.css"
import Navbar from './components/navbar/Navbar'
import LoadingScreen from './components/Loading/LoadingScreen'
import visitTracker from './utils/visitTraker'
import texture from "./assets/absurdity.png"

const App = () => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // Vérifier si c'est la première visite
    if (visitTracker.isFirstVisit()) {
      setShowLoading(true);
      visitTracker.markAsVisited();
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  // Afficher l'écran de chargement si nécessaire
  if (showLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  // Votre application principale
  return (
    <>
      <div
        className="min-h-screen flex flex-col relative"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Effets de fond avec gradients radials */}
        <div
          className="absolute top-10 left-8 sm:left-16 md:left-32 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full blur-3xl z-0"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.7) 0%, rgba(96, 165, 250, 0.1) 50%, transparent 100%)'
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full blur-3xl z-0"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.7) 0%, rgba(96, 165, 250, 0.1) 50%, transparent 100%)'
          }}
        ></div>

        <Navbar />
        <div className='flex-grow relative z-10'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App