import {
  BarChart3,
  ChevronsLeft,
  ChevronsRight,
  CircleHelp,
  Database,
  Home,
  LogOut,
  Phone,
  UserRoundCheck,
  UsersRound
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/cn';

type SidebarProps = {
  persona: 'volunteer' | 'admin';
  isCollapsed: boolean;
  onCollapsedChange: (isCollapsed: boolean) => void;
};

type NavItem = {
  label: string;
  icon: typeof Home;
  active?: boolean;
};

export function Sidebar({ persona, isCollapsed, onCollapsedChange }: SidebarProps) {
  const navigate = useNavigate();
  const volunteerItems: NavItem[] = [
    { label: 'Dashboard', icon: Home, active: true },
    { label: 'My Calls', icon: Phone },
    { label: 'Follow-ups', icon: BarChart3 },
    { label: 'Help', icon: CircleHelp }
  ];

  const adminItems: NavItem[] = [
    { label: 'Overview', icon: Home },
    { label: 'Volunteers', icon: UserRoundCheck },
    { label: 'Parent Pool', icon: UsersRound },
    { label: 'Reports', icon: BarChart3, active: true },
    { label: 'BigQuery Sync', icon: Database }
  ];

  const items = persona === 'volunteer' ? volunteerItems : adminItems;

  const handleLogout = () => {
    navigate('/login', { replace: true });
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-20 hidden h-screen flex-col border-r border-[#DCE7F5] bg-white py-8 transition-all duration-200 lg:flex',
        isCollapsed ? 'w-[88px] px-4' : 'w-[260px] px-6'
      )}
    >
      <div className={cn('mb-8 flex items-center', isCollapsed ? 'flex-col gap-3' : 'justify-between gap-3')}>
        {isCollapsed ? (
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#009E9A] text-lg font-bold text-white shadow-sm ring-4 ring-[#E6F7F5]"
            aria-label="Saajha"
          >
            S
          </div>
        ) : (
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#009E9A] text-base font-bold text-white shadow-sm ring-4 ring-[#E6F7F5]"
              aria-hidden="true"
            >
              S
            </div>
            <p className="text-lg font-semibold leading-none text-[#071B45]">Saajha</p>
          </div>
        )}

        <button
          type="button"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#DCE7F5] bg-[#F7FBFF] text-[#51617D] transition hover:bg-[#EAF3FF] hover:text-[#0F6FEF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F6FEF]"
          onClick={() => onCollapsedChange(!isCollapsed)}
        >
          {isCollapsed ? <ChevronsRight size={17} /> : <ChevronsLeft size={17} />}
        </button>
      </div>

      <div className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              type="button"
              aria-label={isCollapsed ? item.label : undefined}
              className={cn(
                'flex w-full items-center rounded-2xl py-3 text-sm font-semibold transition',
                isCollapsed ? 'justify-center px-0' : 'gap-3 px-4',
                item.active
                  ? 'bg-[#EAF3FF] text-[#0F6FEF]'
                  : 'text-[#51617D] hover:bg-[#F4F7FF] hover:text-[#071B45]'
              )}
            >
              <Icon size={20} />
              {isCollapsed ? null : <span>{item.label}</span>}
            </button>
          );
        })}
      </div>

      <div className="mt-auto space-y-3">
        {isCollapsed ? null : (
          <div className="rounded-[24px] border border-[#DCE7F5] bg-[#F7FBFF] p-5 text-sm text-[#51617D] shadow-sm">
            <p className="font-semibold text-[#071B45]">
              {persona === 'volunteer' ? 'Thank you for making a difference!' : "You're in control."}
            </p>
            <p className="mt-2 leading-6">
              {persona === 'volunteer'
                ? 'Every call brings us closer to every child.'
                : 'Monitor performance and keep everything running smoothly.'}
            </p>
          </div>
        )}

        <button
          type="button"
          aria-label="Logout"
          className={cn(
            'flex w-full items-center justify-center rounded-2xl border border-[#DCE7F5] bg-white py-3 text-sm font-semibold text-[#51617D] transition hover:bg-[#F4F7FF]',
            isCollapsed ? 'px-0' : 'gap-2 px-4'
          )}
          onClick={handleLogout}
        >
          <LogOut size={18} />
          {isCollapsed ? null : <span>Logout</span>}
        </button>

      </div>
    </aside>
  );
}
