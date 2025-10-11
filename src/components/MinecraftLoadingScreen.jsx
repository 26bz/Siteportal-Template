import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProgressBar = memo(({ progress }) => (
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      duration: 0.4,
      delay: 0.1,
      ease: [0.23, 1, 0.32, 1],
    }}
    className="w-full max-w-[24rem] relative"
  >
    <div className="w-full h-2 bg-[#333333] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 0.2,
          ease: 'linear',
        }}
        className="h-full bg-[#EE1C25]"
      />
    </div>
  </motion.div>
));

ProgressBar.displayName = 'ProgressBar';

const Logo = memo(() => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
    }}
    className="mb-24"
  >
    <div className="flex items-center justify-center">
      <div className="w-16 h-16 relative mr-4">
        <div className="absolute inset-0 bg-[#EE1C25] rounded-sm">
          <div className="absolute inset-2 border-[3px] border-white rounded-sm" />
        </div>
        <div className="absolute -inset-[2px] border-2 border-white rounded-sm" />
      </div>
      <div className="relative">
        <div className="text-4xl sm:text-6xl font-bold tracking-wider text-white" style={{ WebkitTextStroke: '2px white' }}>
          Made by 26BZ
        </div>
        <div
          className="absolute inset-0 text-4xl sm:text-6xl font-bold tracking-wider"
          style={{
            WebkitTextStroke: '4px #111111',
            color: 'transparent',
            zIndex: -1,
          }}
        >
          Made by 26BZ
        </div>
      </div>
    </div>
  </motion.div>
));

Logo.displayName = 'Logo';

const MinecraftLoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isUnmounting, setIsUnmounting] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setIsUnmounting(true);
    setTimeout(onLoadingComplete, 300);
  }, [onLoadingComplete]);

  useEffect(() => {
    let mounted = true;
    let progressInterval;
    let initialDelay;

    const startLoading = () => {
      let currentProgress = 0;
      let speedMultiplier = 1;

      progressInterval = setInterval(() => {
        if (!mounted) return;

        if (currentProgress < 30) speedMultiplier = 1.5;
        else if (currentProgress < 60) speedMultiplier = 1.2;
        else if (currentProgress < 85) speedMultiplier = 0.8;
        else speedMultiplier = 0.5;

        currentProgress += 2.5 * speedMultiplier;

        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(progressInterval);
          handleLoadingComplete();
        }

        setProgress(Math.min(currentProgress, 100));
      }, 40);
    };

    initialDelay = setTimeout(startLoading, 500);

    return () => {
      mounted = false;
      clearInterval(progressInterval);
      clearTimeout(initialDelay);
    };
  }, [handleLoadingComplete]);
  return (
    <AnimatePresence>
      {!isUnmounting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[#111111] flex flex-col items-center justify-center z-50 p-4"
        >
          <Logo />
          <ProgressBar progress={progress} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(MinecraftLoadingScreen);
