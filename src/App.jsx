import React, { useState, useEffect, useRef, lazy, Suspense, useCallback } from 'react';
import { Facebook, Youtube, Instagram, Map } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import MinecraftButton from './components/MinecraftButton';
import MinecraftLoadingScreen from './components/MinecraftLoadingScreen';

const VoteGUI = lazy(() => import('./components/VoteGUI'));
const RulesGUI = lazy(() => import('./components/RulesGUI'));
const StaffGUI = lazy(() => import('./components/StaffGUI'));
const AboutUsGUI = lazy(() => import('./components/AboutUsGUI'));

const config = {
  video: false, // Set this to false to use image background instead
  backgroundVideo: '/bgvid.mp4',
  backgroundImage: '/primary-bg.png', // Make sure to add your background image
};

const Background = () => {
  if (config.video) {
    return (
      <div className="fixed inset-0 w-full h-full z-0">
        <video autoPlay loop muted playsInline className="absolute min-w-full min-h-full w-auto h-auto object-cover">
          <source src={config.backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <img src={config.backgroundImage} alt="Background" className="absolute min-w-full min-h-full w-auto h-auto object-cover" />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

const MainMenuButton = ({ onClick, children, className = '' }) => (
  <MinecraftButton onClick={onClick} className={`w-full h-12 sm:h-16 text-lg sm:text-2xl ${className}`}>
    {children}
  </MinecraftButton>
);

const MinecraftSplash = React.memo(() => {
  const splashTexts = [
    'Also try My Other Themes',
    'BZ Got Flava!',
    'Absolutely no memes!',
    'As seen on Discord!',
    'Awesome!',
    '100% pure!',
    'May contain squid!',
    'Better than Prey!',
    'More than 0 sold!',
    'Contains pixels!',
  ];

  const randomSplash = splashTexts[Math.floor(Math.random() * splashTexts.length)];

  return (
    <div className="absolute -right-4 sm:-right-8 top-0 transform -rotate-[350deg] z-10">
      <span className="font-['minecraft'] text-yellow-300 text-base sm:text-2xl animate-pulse text-shadow-[2px_2px_rgba(0,0,0,0.8)] hover:scale-110 transition-transform">{randomSplash}</span>
    </div>
  );
});

const SocialMediaIcons = React.memo(() => {
  return (
    <div className="absolute top-4 sm:top-14 right-2 flex gap-2">
      {[
        { Icon: Facebook, bg: 'bg-blue-600', href: '#' },
        { Icon: Youtube, bg: 'bg-red-600', href: '#' },
        { Icon: FaDiscord, bg: 'bg-indigo-600', href: '#' },
        { Icon: Instagram, bg: 'bg-pink-600', href: '#' },
      ].map(({ Icon, bg, href }) => (
        <a
          key={`social-${bg}`}
          href={href}
          className={`
            flex items-center justify-center
            w-8 h-8 sm:w-12 sm:h-12 ${bg} rounded
            text-white transition-transform
            hover:scale-110
            border-2 border-gray-900
          `}
        >
          <Icon size={16} className="sm:w-6 sm:h-6" />
        </a>
      ))}
    </div>
  );
});

const ServerInfo = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [serverStatus, setServerStatus] = useState({
    online: false,
    players: { online: 0, max: 0 },
    isLoading: true,
  });
  const serverIP = 'play.hypixel.net';
  const clickSound = useRef(new Audio('/sounds/click.mp3'));

  const playClickSound = () => {
    clickSound.current.currentTime = 0;
    clickSound.current.play().catch((err) => console.error('Error playing sound:', err));
  };

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await response.json();

        setServerStatus({
          online: data.online || false,
          players: {
            online: data.players?.online || 0,
            max: data.players?.max || 0,
          },
          isLoading: false,
        });
      } catch (error) {
        console.error('Failed to fetch server status:', error);
        setServerStatus((prev) => ({ ...prev, isLoading: false }));
      }
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 30000);
    return () => clearInterval(interval);
  }, []);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      playClickSound();
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  return (
    <div className="bg-black/70 p-3 sm:p-4 rounded-xl text-center mb-4 sm:mb-8 border-2 border-gray-700">
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
        <span className="text-yellow-300 text-lg sm:text-2xl font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">{serverIP}</span>
        <button
          type="button"
          onClick={handleCopy}
          className={`
            relative
            group
            rounded-lg
            flex items-center justify-center
            w-12 h-12
            text-white
            hover:scale-105
            transition-transform
            overflow-hidden
            [image-rendering:pixelated]
          `}
          style={{
            background: `url('/bgbtn.png') no-repeat center center`,
            backgroundSize: '100% 100%',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />

          <div className="relative z-10">
            {isCopied ? (
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
            )}
          </div>
        </button>
      </div>
      <div
        className={`text-lg text-shadow-[1px_1px_rgba(0,0,0,0.8)] flex items-center justify-center gap-2 ${
          serverStatus.isLoading ? 'text-yellow-300' : serverStatus.online ? 'text-green-400' : 'text-red-400'
        }`}
      >
        <div className={`w-2 h-2 rounded-full ${serverStatus.isLoading ? 'bg-yellow-300 animate-pulse' : serverStatus.online ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
        <span>
          {serverStatus.isLoading
            ? 'Checking server status...'
            : serverStatus.online
              ? `${serverStatus.players.online.toLocaleString()} / ${serverStatus.players.max.toLocaleString()} Players Online`
              : 'Server Offline'}
        </span>
      </div>
    </div>
  );
};

const MainMenu = ({ handleGUIChange, handleExternalLink }) => (
  <div className="p-4 sm:p-8 w-[95%] mx-auto max-w-[800px]">
    <div className="relative text-center">
      <div className="-top-8 sm:-top-12 left-1/2 -translate-x-1/2 relative">
        <div className="w-auto h-[60px] sm:h-[80px] bg-[url('/Powered-By-BZ.png')] bg-contain bg-center mx-auto mb-6 sm:mb-10 mt-6 sm:mt-10 bg-no-repeat [image-rendering:pixelated]" />
        <MinecraftSplash />
      </div>

      <SocialMediaIcons />

      <ServerInfo />

      <div className="space-y-2 sm:space-y-4 max-w-4xl mx-auto mb-4 sm:mb-6">
        <MainMenuButton onClick={() => handleGUIChange('vote')}>Vote</MainMenuButton>
        <MinecraftButton onClick={() => handleExternalLink('https://store.example.com')} className="w-full h-12 sm:h-16 text-lg sm:text-2xl">
          Store
        </MinecraftButton>
        <MainMenuButton onClick={() => handleGUIChange('rules')}>Rules</MainMenuButton>
      </div>

      <div className="flex gap-2 max-w-4xl mx-auto mb-4 sm:mb-8">
        <MinecraftButton onClick={() => handleExternalLink('https://map.example.com')} className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-500/60 hover:bg-blue-400/60 flex items-center justify-center">
          <Map size={20} className="sm:w-6 sm:h-6" />
        </MinecraftButton>

        <div className="flex gap-2 flex-1">
          <MainMenuButton onClick={() => handleGUIChange('staff')} className="bg-blue-500/60 hover:bg-blue-400/60">
            Staff
          </MainMenuButton>
          <MainMenuButton onClick={() => handleGUIChange('about')} className="bg-blue-500/60 hover:bg-blue-400/60">
            About Us
          </MainMenuButton>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <a href="#" className="block w-full max-w-[468px] h-[60px] mx-auto border-2 border-gray-700 rounded overflow-hidden transition-transform hover:scale-105 shadow-lg">
          <img src="/banner.gif" alt="Server Banner" className="w-full h-full object-cover [image-rendering:pixelated]" />
        </a>
      </div>
    </div>
  </div>
);

const MinecraftPortal = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentGUI, setCurrentGUI] = useState('main');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const clickSound = useRef(new Audio('/sounds/click.mp3'));

  const playClickSound = () => {
    clickSound.current.play();
  };

  const handleGUIChange = useCallback(
    (gui) => {
      playClickSound();
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentGUI(gui);
        setIsTransitioning(false);
      }, 300);
    },
    [playClickSound]
  );

  const handleExternalLink = useCallback(
    (link) => {
      playClickSound();
      window.open(link, '_blank');
    },
    [playClickSound]
  );

  const renderCurrentGUI = () => {
    const guis = {
      vote: <VoteGUI onBack={() => handleGUIChange('main')} />,
      staff: <StaffGUI onBack={() => handleGUIChange('main')} />,
      rules: <RulesGUI onBack={() => handleGUIChange('main')} />,
      about: <AboutUsGUI onBack={() => handleGUIChange('main')} />,
      main: <MainMenu handleGUIChange={handleGUIChange} handleExternalLink={handleExternalLink} />,
    };
    return guis[currentGUI] || <MainMenu handleGUIChange={handleGUIChange} handleExternalLink={handleExternalLink} />;
  };

  if (isLoading) {
    return <MinecraftLoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  if (isLoading) {
    return <MinecraftLoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center font-['minecraft'] [image-rendering:pixelated] p-2 sm:p-4">
      {' '}
      <Background />
      <div className={`transition-all duration-300 transform w-full z-10 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <Suspense fallback={<div className="loading-minecraft p-4 text-center text-white font-['minecraft']">Loading...</div>}>{renderCurrentGUI()}</Suspense>
      </div>
    </div>
  );
};

export default MinecraftPortal;
