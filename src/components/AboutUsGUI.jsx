import MinecraftButton from './MinecraftButton';
import { Globe, Users, Server, Calendar } from 'lucide-react';

const StatBox = ({ icon: Icon, value, label }) => (
  <div className="bg-[url('/bgbtn.png')] rounded border-[3px] border-[#1B1B1B] hover:bg-black/70 transition-colors">
    <div className="bg-black/60 p-2 sm:p-3 border-b-[3px] border-[#1B1B1B]">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFFF55] mx-auto" />
    </div>
    <div className="p-2 sm:p-3 text-center">
      <div className="text-xl sm:text-2xl text-[#FFFF55] font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">{value}</div>
      <div className="text-[#FFFFFF] text-xs sm:text-sm font-['minecraft'] text-shadow-[1px_1px_rgba(0,0,0,0.8)]">{label}</div>
    </div>
  </div>
);

const AboutUsGUI = ({ onBack }) => {
  return (
    <div className="animate-slideIn px-2 sm:px-4">
      <div className="max-w-[1400px] mx-auto p-2 sm:p-4 bg-[url('/bgbtn.png')] bg-repeat [image-rendering:pixelated] border-[3px] border-[#1B1B1B]">
        <div className="bg-[url('/background_dirt.webp')] p-3 sm:p-6 border-[3px] border-[#1B1B1B]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl sm:text-3xl text-[#FFFFFF] font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">Server Information</h2>
            <MinecraftButton onClick={onBack}>Done</MinecraftButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[url('/bgbtn.png')] rounded border-[3px] border-[#1B1B1B] hover:bg-black/70 transition-colors">
                <div className="bg-black/60 p-3 border-b-[3px] border-[#1B1B1B] flex items-center gap-2">
                  <span className="text-xl">ℹ️</span>
                  <h3 className="text-[#FFFF55] text-lg font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">About Network</h3>
                </div>
                <div className="p-4">
                  <p className="text-[#FFFFFF] font-['minecraft'] text-shadow-[1px_1px_rgba(0,0,0,0.8)] leading-6 text-sm sm:text-base">
                    Our network provides unique gameplay experiences with premium features and regular events.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <StatBox icon={Globe} value="50K+" label="Monthly Players" />
                <StatBox icon={Users} value="250+" label="Discord Members" />
                <StatBox icon={Server} value="99.9%" label="Uptime" />
                <StatBox icon={Calendar} value="2+ Yrs" label="Online" />
              </div>
            </div>

            <div className="bg-[url('/bgbtn.png')] rounded border-[3px] border-[#1B1B1B] hover:bg-black/70 transition-colors h-fit">
              <div className="bg-black/60 p-3 border-b-[3px] border-[#1B1B1B] flex items-center gap-2">
                <span className="text-xl">🎮</span>
                <h3 className="text-[#FFFF55] text-lg font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">Game Modes</h3>
              </div>
              <div className="p-3 sm:p-4 space-y-3">
                {['⚔️ Survival', '🏝️ SkyBlock', '🗡️ KitPvP', '🏗️ Creative'].map((mode) => (
                  <div
                    key={`gamemode-${mode.split(' ')[1]}`}
                    className="text-[#FFFFFF] font-['minecraft'] flex items-start gap-2 text-shadow-[1px_1px_rgba(0,0,0,0.8)] bg-black/40 p-2 rounded border border-[#1B1B1B] hover:bg-black/30 transition-colors"
                  >
                    <span className="text-[#FFFF55] min-w-[24px]">{mode.split(' ')[0]}</span>
                    <div>
                      <h4 className="text-[#FFFF55] mb-1 text-sm sm:text-base">{mode.split(' ')[1]}</h4>
                      <p className="text-xs sm:text-sm leading-5">
                        {mode.includes('Survival') && 'Classic survival with economy and land claiming'}
                        {mode.includes('SkyBlock') && 'Custom island progression and challenges'}
                        {mode.includes('KitPvP') && 'Fast-paced PvP with custom kits and abilities'}
                        {mode.includes('Creative') && 'WorldEdit and custom plot system'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[url('/bgbtn.png')] rounded border-[3px] border-[#1B1B1B] hover:bg-black/70 transition-colors">
                <div className="bg-black/60 p-3 border-b-[3px] border-[#1B1B1B] flex items-center gap-2">
                  <span className="text-xl">✨</span>
                  <h3 className="text-[#FFFF55] text-lg font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">Features</h3>
                </div>
                <div className="p-3 sm:p-4 space-y-3">
                  {[
                    ['✨', 'Custom enchantments'],
                    ['💰', 'Player economy'],
                    ['🏆', 'Weekly events'],
                    ['⭐', 'Custom ranks'],
                  ].map(([icon, text]) => (
                    <div
                      key={`feature-${text.replace(/\s+/g, '-').toLowerCase()}`}
                      className="text-[#FFFFFF] font-['minecraft'] flex items-start gap-2 text-shadow-[1px_1px_rgba(0,0,0,0.8)] bg-black/40 p-2 rounded border border-[#1B1B1B] hover:bg-black/30 transition-colors"
                    >
                      <span className="text-[#FFFF55] min-w-[12px]">{icon}</span>
                      <span className="text-xs sm:text-sm leading-5">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[url('/bgbtn.png')] rounded border-[3px] border-[#1B1B1B] hover:bg-black/70 transition-colors">
                <div className="bg-black/60 p-3 border-b-[3px] border-[#1B1B1B] flex items-center gap-2">
                  <span className="text-xl">⚙️</span>
                  <h3 className="text-[#FFFF55] text-lg font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">Technical</h3>
                </div>
                <div className="p-3 sm:p-4 space-y-3">
                  {[
                    ['⚙️', 'Version: 1.8.x - 1.20.x'],
                    ['🌎', 'Location: North America'],
                    ['🛡️', 'Anti-Cheat Protected'],
                    ['💻', 'Premium Hardware'],
                  ].map(([icon, text]) => (
                    <div
                      key={`tech-${text.split(':')[0].toLowerCase()}`}
                      className="text-[#FFFFFF] font-['minecraft'] flex items-start gap-2 text-shadow-[1px_1px_rgba(0,0,0,0.8)] bg-black/40 p-2 rounded border border-[#1B1B1B] hover:bg-black/30 transition-colors"
                    >
                      <span className="text-[#FFFF55] min-w-[12px]">{icon}</span>
                      <span className="text-xs sm:text-sm leading-5">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsGUI;
