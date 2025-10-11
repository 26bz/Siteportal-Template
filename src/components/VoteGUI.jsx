import { useState } from 'react';
import { ExternalLink, Gift, Clock, Star } from 'lucide-react';
import MinecraftButton from './MinecraftButton';

const RewardItem = ({ icon: Icon, text }) => (
  <div className="text-[#FFFFFF] font-['minecraft'] flex items-start gap-2 text-shadow-[1px_1px_rgba(0,0,0,0.8)] bg-black/40 p-2 rounded border border-[#1B1B1B] hover:bg-black/30 transition-colors">
    <div className="min-w-[28px]">
      <div className="bg-black/60 p-2 rounded">
        <Icon className="w-5 h-5 text-[#FFFF55]" />
      </div>
    </div>
    <span className="text-sm leading-5 my-auto">{text}</span>
  </div>
);

const VoteGUI = ({ onBack }) => {
  const [selectedVote, setSelectedVote] = useState(null);

  const voteLinks = [
    {
      name: 'MinecraftServers.org',
      url: 'https://minecraftservers.org/vote/[YOUR-SERVER-ID]',
    },
    {
      name: 'PlanetMinecraft',
      url: 'https://planetminecraft.com/server/[YOUR-SERVER-NAME]/vote/',
    },
    {
      name: 'TopG.org',
      url: 'https://topg.org/minecraft-servers/server-[YOUR-SERVER-ID]/vote',
    },
    {
      name: 'MinecraftMP',
      url: 'https://minecraft-mp.com/server/[YOUR-SERVER-ID]/vote/',
    },
    {
      name: 'MCServers.com',
      url: 'https://mcservers.com/vote/[YOUR-SERVER-ID]',
    },
    { name: 'ServerPact', url: 'https://serverpact.com/vote/[YOUR-SERVER-ID]' },
  ];

  const rewards = [
    { icon: Gift, text: '5 Diamond Blocks' },
    { icon: Star, text: '1 Voting Key' },
    { icon: Gift, text: '10,000 In-game Currency' },
    { icon: Clock, text: '24h Double XP Boost' },
  ];

  const handleVoteClick = (index) => {
    const clickSound = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=');
    clickSound.play().catch(() => {});
    setSelectedVote(index);

    window.open(voteLinks[index].url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="animate-slideIn px-2 sm:px-4">
      <div className="max-w-[1400px] mx-auto p-2 sm:p-4 bg-[url('/bgbtn.png')] bg-repeat [image-rendering:pixelated] border-[3px] border-[#1B1B1B]">
        <div className="bg-[url('/background_dirt.webp')] p-3 sm:p-6 border-[3px] border-[#1B1B1B]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl text-[#FFFFFF] font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">Vote Rewards</h2>
            <MinecraftButton onClick={onBack}>Done</MinecraftButton>
          </div>

          <div className="mb-6 bg-[url('/bgbtn.png')] rounded border-[3px] border-[#1B1B1B] hover:bg-black/70 transition-colors">
            <div className="bg-black/60 p-3 border-b-[3px] border-[#1B1B1B] flex items-center gap-2">
              <span className="text-xl">🎁</span>
              <h3 className="text-[#FFFF55] text-lg font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">Daily Voting Rewards</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {rewards.map((reward) => (
                  <RewardItem key={`reward-${reward.text.replace(/\s+/g, '-').toLowerCase()}`} {...reward} />
                ))}
              </div>
              <div className="mt-4 p-3 bg-black/40 rounded border-2 border-[#FFFF55] text-center">
                <p className="text-[#FFFF55] text-sm font-['minecraft'] text-shadow-[1px_1px_rgba(0,0,0,0.8)]">Vote on all sites to receive bonus rewards!</p>
              </div>
            </div>
          </div>

          <div className="bg-[url('/bgbtn.png')] rounded border-[3px] border-[#1B1B1B] hover:bg-black/70 transition-colors">
            <div className="bg-black/60 p-3 border-b-[3px] border-[#1B1B1B] flex items-center gap-2">
              <span className="text-xl">🗳️</span>
              <h3 className="text-[#FFFF55] text-lg font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">Vote Sites</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {voteLinks.map((site, index) => (
                  <MinecraftButton
                    key={`vote-site-${site.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleVoteClick(index)}
                    className={`h-14 w-full ${selectedVote === index ? 'bg-[#00AA00]/40 border-[#00AA00]' : ''}`}
                  >
                    <div className="flex items-center justify-center gap-2 px-2">
                      <ExternalLink size={16} />
                      <span className="truncate">{site.name}</span>
                    </div>
                  </MinecraftButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteGUI;
