import { useRef } from 'react';
import MinecraftButton from './MinecraftButton';

const StaffCard = ({ staff }) => (
  <div className="text-[#FFFFFF] font-['minecraft'] flex items-start gap-2 text-shadow-[1px_1px_rgba(0,0,0,0.8)] bg-black/40 p-2 rounded border border-[#1B1B1B] hover:bg-black/30 transition-colors">
    <div className="min-w-[48px]">
      <div className="w-12 h-12 relative">
        <img src={`https://crafatar.com/avatars/${staff.uuid}?overlay=true`} alt={staff.name} className="w-full h-full object-cover rounded border border-[#1B1B1B]" />
        <div
          className={`
          absolute bottom-0 right-0 w-2 h-2 rounded-full
          ${staff.status === 'online' ? 'bg-[#55FF55]' : 'bg-[#FF5555]'}
          border border-[#1B1B1B]
        `}
        />
      </div>
    </div>

    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2 flex-wrap">
        <span
          className={`
          text-base text-shadow-[2px_2px_rgba(0,0,0,0.8)]
          ${staff.role === 'Administrator' ? 'text-[#FF5555]' : staff.role === 'Moderator' ? 'text-[#5555FF]' : 'text-[#55FF55]'}
        `}
        >
          {staff.name}
        </span>
        <span className="text-xs px-2 py-0.5 bg-[url('/bgbtn.png')] rounded border border-[#1B1B1B]">{staff.role}</span>
      </div>
      <div className="text-xs mt-1">
        <span className="text-[#AAAAAA]">Discord: </span>
        {staff.discord}
      </div>
    </div>
  </div>
);
const StaffGUI = ({ onBack }) => {
  const clickSound = useRef(new Audio('/sounds/click.mp3'));
  const applicationLink = 'https://example.com/staff-application';

  const playSound = () => {
    clickSound.current.play();
  };

  const handleApply = () => {
    playSound();
    window.open(applicationLink, '_blank');
  };

  const staffTeams = [
    {
      role: 'Administrators',
      icon: '👑',
      members: [
        {
          name: 'Notch',
          uuid: '069a79f4-44e9-4726-a5be-fca90e38aaf5',
          status: 'online',
          role: 'Administrator',
          discord: '@abc',
        },
        {
          name: 'Jeb_',
          uuid: '853c80ef-3c37-49fd-aa49-938b674adae6',
          status: 'offline',
          role: 'Administrator',
          discord: '@abc3',
        },
      ],
    },
    {
      role: 'Moderators',
      icon: '🛡️',
      members: [
        {
          name: 'Dinnerbone',
          uuid: '61699b2e-d327-4a01-9f1e-0ea8c3f06bc6',
          status: 'online',
          role: 'Moderator',
          discord: '@abc3',
        },
        {
          name: 'Grumm',
          uuid: 'e6b5c088-0680-44df-9e1b-9b7947696a3c',
          status: 'offline',
          role: 'Moderator',
          discord: '1 day ago',
        },
      ],
    },
    {
      role: 'Helpers',
      icon: '💫',
      members: [
        {
          name: 'Helper1',
          uuid: '8667ba71-b85a-4004-af54-457a9734eed7',
          status: 'online',
          role: 'Helper',
          discord: '@abc3',
        },
        {
          name: 'Helper2',
          uuid: 'af74a02d-19cb-445b-b07f-6866a861f783',
          status: 'offline',
          role: 'Helper',
          discord: '@abc3',
        },
      ],
    },
  ];

  return (
    <div className="animate-slideIn px-2 sm:px-4">
      <div className="max-w-[1400px] mx-auto p-2 sm:p-4 bg-[url('/bgbtn.png')] bg-repeat [image-rendering:pixelated] border-[3px] border-[#1B1B1B]">
        <div className="bg-[url('/background_dirt.webp')] p-3 sm:p-6 border-[3px] border-[#1B1B1B]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl sm:text-3xl text-[#FFFFFF] font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">Staff Team</h2>
            <MinecraftButton onClick={onBack}>Done</MinecraftButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
            <div className="space-y-6">
              {staffTeams.map((team) => (
                <div key={`team-${team.role.toLowerCase()}`} className="bg-[url('/bgbtn.png')] rounded border-[3px] border-[#1B1B1B] hover:bg-black/70 transition-colors">
                  <div className="bg-black/60 p-3 border-b-[3px] border-[#1B1B1B] flex items-center gap-2">
                    <span className="text-xl">{team.icon}</span>
                    <h3
                      className={`
                      text-lg font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]
                      ${team.role === 'Administrators' ? 'text-[#FF5555]' : team.role === 'Moderators' ? 'text-[#5555FF]' : 'text-[#55FF55]'}
                    `}
                    >
                      {team.role}
                    </h3>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {team.members.map((staff) => (
                        <StaffCard key={`staff-${staff.name}`} staff={staff} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[url('/bgbtn.png')] rounded border-[3px] border-[#1B1B1B] hover:bg-black/70 transition-colors h-fit">
              <div className="bg-black/60 p-3 border-b-[3px] border-[#1B1B1B] flex items-center gap-2">
                <span className="text-xl">📝</span>
                <h3 className="text-[#FFFF55] text-lg font-['minecraft'] text-shadow-[2px_2px_rgba(0,0,0,0.8)]">Staff Applications</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="space-y-3">
                  {['Minimum 100 hours playtime', 'Age 16 or older', 'Clean record (no bans/mutes)', 'Active on Discord'].map((req) => (
                    <div
                      key={`req-${req.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[#FFFFFF] font-['minecraft'] flex items-start gap-2 text-shadow-[1px_1px_rgba(0,0,0,0.8)] bg-black/40 p-2 rounded border border-[#1B1B1B] hover:bg-black/30 transition-colors"
                    >
                      <span className="text-[#FFFF55] min-w-[12px]">•</span>
                      <span className="text-sm leading-5">{req}</span>
                    </div>
                  ))}
                </div>
                <MinecraftButton onClick={handleApply} className="w-full bg-[#00AA00]/20 hover:bg-[#00AA00]/30">
                  Apply for Staff
                </MinecraftButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffGUI;
