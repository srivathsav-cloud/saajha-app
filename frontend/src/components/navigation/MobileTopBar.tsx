import { useEffect, useRef, useState } from 'react';
import {
  BarChart3,
  Bell,
  CalendarDays,
  CircleHelp,
  Home,
  LogOut,
  Menu,
  MoreHorizontal,
  Phone,
  UserRoundCheck,
  UsersRound,
  type LucideIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/cn';

type MobileTopBarProps = {
  persona: 'volunteer' | 'admin';
  title: string;
};

type NavItem = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
};

export function MobileTopBar({ persona, title }: MobileTopBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const displayTitle = persona === 'volunteer' ? 'Volunteer Workspace' : 'Admin Dashboard';
  const normalizedTitle = title.toLowerCase();

  const volunteerItems: NavItem[] = [
    { label: 'Dashboard', icon: Home, active: true },
    { label: 'My Calls', icon: Phone },
    { label: 'Follow-ups', icon: CalendarDays },
    { label: 'Help', icon: CircleHelp }
  ];

  const adminItems: NavItem[] = [
    { label: 'Overview', icon: Home },
    { label: 'Volunteers', icon: UserRoundCheck },
    { label: 'Parent Pool', icon: UsersRound },
    { label: 'Reports', icon: BarChart3, active: true },
    { label: 'More', icon: MoreHorizontal }
  ];

  const items = persona === 'volunteer' ? volunteerItems : adminItems;

  const handleLogout = () => {
    setIsMenuOpen(false);
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-40 flex items-center justify-between bg-[#0F6FEF] px-4 py-3 text-white lg:hidden">
      <div ref={menuRef} className="relative">
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-navigation-menu"
          aria-expanded={isMenuOpen}
          className="rounded-2xl bg-white/10 p-2 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <Menu size={22} />
        </button>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation-menu"
            aria-label="Mobile navigation"
            className="absolute left-0 top-[calc(100%+0.5rem)] w-64 overflow-hidden rounded-lg border border-[#DCE7F5] bg-white p-2 text-[#071B45] shadow-card"
          >
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = item.active || normalizedTitle.includes(item.label.toLowerCase());

              return (
                <button
                  key={item.label}
                  type="button"
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition',
                    isActive
                      ? 'bg-[#EAF3FF] text-[#0F6FEF]'
                      : 'text-[#51617D] hover:bg-[#F4F7FF] hover:text-[#071B45]'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="mt-2 border-t border-[#DCE7F5] pt-2">
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-[#51617D] transition hover:bg-[#F4F7FF] hover:text-[#071B45]"
                onClick={handleLogout}
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </nav>
        ) : null}
      </div>
      <h1 className="text-sm font-semibold">{displayTitle}</h1>
      <button type="button" aria-label={persona === 'volunteer' ? 'Notifications' : 'Calendar'} className="rounded-2xl bg-white/10 p-2 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
        {persona === 'volunteer' ? (
          <Bell size={22} />
        ) : (
          <CalendarDays size={22} />
        )}
      </button>
    </header>
  );
}
