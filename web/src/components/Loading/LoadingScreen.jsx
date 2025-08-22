import { useState, useEffect } from 'react';
import { loadingConfig } from '../../config/loadingConfig';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Animation des lignes de chargement
    const lineInterval = setInterval(() => {
      setCurrentLine(prev => {
        if (prev < loadingConfig.messages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(lineInterval);
          // Attendre un peu avant de masquer l'écran
          setTimeout(() => {
            setLoadingComplete(true);
            setTimeout(() => {
              onLoadingComplete();
            }, loadingConfig.hideDelay);
          }, loadingConfig.completionDelay);
          return prev;
        }
      });
    }, loadingConfig.messageInterval);

    return () => clearInterval(lineInterval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black/90 text-white font-mono flex items-center justify-center z-50">
      {/* Effet de lignes de scan rétro */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(loadingConfig.animations.scanLines.count)].map((_, i) => (
          <div
            key={i}
            className="h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"
            style={{
              top: `${i * 2}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: loadingConfig.animations.scanLines.duration
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative text-center space-y-8">
        {/* Titre rétro */}
        <div className="text-4xl font-bold tracking-widest mb-8">
          <div className="animate-pulse">{loadingConfig.texts.title.line1}</div>
          <div className="animate-pulse delay-300">{loadingConfig.texts.title.line2}</div>
        </div>

        {/* Messages de chargement */}
        <div className="h-32 flex flex-col justify-center">
          {loadingConfig.messages.map((message, index) => (
            <div
              key={index}
              className={`text-lg transition-all duration-300 ${
                index <= currentLine 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-4'
              }`}
            >
              <span className="mr-2">&gt;</span>
              {message}
              {index === currentLine && !loadingComplete && (
                <span className="animate-pulse ml-2">█</span>
              )}
            </div>
          ))}
        </div>

        {/* Barre de progression rétro */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between text-sm mb-2">
            <span>{loadingConfig.texts.progressLabel}</span>
            <span>{Math.min(((currentLine + 1) / loadingConfig.messages.length * 100), 100).toFixed(0)}%</span>
          </div>
          <div className="border-2 border-white h-4 relative overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500 ease-out relative"
              style={{ width: `${Math.min(((currentLine + 1) / loadingConfig.messages.length * 100), 100)}%` }}
            >
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-pulse opacity-50" />
            </div>
          </div>
        </div>

        {/* Animation de pixels */}
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(loadingConfig.animations.pixels.count)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 border-2 border-white animate-ping"
              style={{
                animationDelay: `${i * loadingConfig.animations.pixels.delay}s`,
                animationDuration: loadingConfig.animations.pixels.duration
              }}
            />
          ))}
        </div>

        {loadingComplete && (
          <div className="text-xl animate-pulse text-green-400">
            {loadingConfig.texts.completionMessage}
          </div>
        )}
      </div>

      {/* Effet de grain rétro */}
      <div 
        className="absolute inset-0 opacity-10 animate-pulse"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default LoadingScreen;