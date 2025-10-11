import MinecraftButton from './MinecraftButton';

const RulesGUI = ({ onBack }) => {
  const rules = [
    {
      category: 'General Rules',
      icon: '⚔️',
      items: ['No harassment or bullying', 'No spamming in chat', 'No advertising other servers', 'English only in main chat', 'Be respectful to all players'],
    },
    {
      category: 'Gameplay Rules',
      icon: '🎮',
      items: ['No hacked clients or mods', 'No exploiting bugs', 'No AFK machines', 'No griefing or stealing', 'PvP only in designated areas'],
    },
    {
      category: 'Chat Rules',
      icon: '💬',
      items: ['No excessive caps', 'No inappropriate language', 'No sharing personal information', 'No impersonating staff', 'Keep chat family-friendly'],
    },
  ];

  return (
    <div className="animate-slideIn px-2 sm:px-4">
      <div className="max-w-[1400px] mx-auto p-2 sm:p-4 bg-[url('/bgbtn.png')] bg-repeat [image-rendering:pixelated] border-[3px] border-[#1B1B1B]">
        <div className="bg-[url('/background_dirt.webp')] p-3 sm:p-6 border-[3px] border-[#1B1B1B]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl sm:text-3xl text-[#FFFFFF] font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">Server Rules</h2>
            <MinecraftButton onClick={onBack}>Done</MinecraftButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {rules.map((category) => (
              <div
                key={`category-${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-[url('/bgbtn.png')] rounded border-[3px] border-[#1B1B1B] hover:bg-black/70 transition-colors"
              >
                <div className="bg-black/60 p-3 border-b-[3px] border-[#1B1B1B] flex items-center gap-2">
                  <span className="text-xl">{category.icon}</span>
                  <h3 className="text-[#FFFF55] text-base sm:text-lg font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">{category.category}</h3>
                </div>
                <div className="p-3 sm:p-4">
                  <ul className="space-y-2 sm:space-y-3">
                    {category.items.map((rule) => (
                      <li
                        key={`rule-${rule.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-[#FFFFFF] font-['minecraft'] flex items-start gap-2 text-shadow-[1px_1px_rgba(0,0,0,0.8)] bg-black/40 p-2 rounded border border-[#1B1B1B] hover:bg-black/30 transition-colors"
                      >
                        <span className="text-[#FFFF55] min-w-[12px]">•</span>
                        <span className="text-xs sm:text-sm leading-5">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="bg-[url('/bgbtn.png')] rounded border-[3px] border-[#1B1B1B] p-3 sm:p-4">
              <div className="bg-black/60 p-3 rounded border-2 border-[#FF5555] flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                <span className="text-xl">⚠️</span>
                <p className="text-[#FF5555] font-['minecraft'] text-sm sm:text-base text-shadow-[2px_2px_rgba(0,0,0,0.8)]">Breaking these rules may result in a temporary or permanent ban</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesGUI;
