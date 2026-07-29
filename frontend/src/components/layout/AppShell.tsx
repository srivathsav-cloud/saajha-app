import { useState, type ReactNode } from 'react';
import { Sidebar } from '../navigation/Sidebar';
import { MobileTopBar } from '../navigation/MobileTopBar';
import { cn } from '../../lib/cn';

type AppShellProps = {
  role: 'volunteer' | 'admin';
  title: string;
  subtitle?: string;
  children: ReactNode;
  hideShellHeader?: boolean;
};

export function AppShell({ role, title, subtitle, children, hideShellHeader = false }: AppShellProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="app-shell min-h-screen bg-[#F6FAFF] text-[#071B45]">
      <div className="hidden lg:block">
        <Sidebar persona={role} isCollapsed={isSidebarCollapsed} onCollapsedChange={setIsSidebarCollapsed} />
      </div>

      <div className={cn('transition-[margin] duration-200', isSidebarCollapsed ? 'lg:ml-[88px]' : 'lg:ml-[260px]')}>
        <MobileTopBar persona={role} title={title} />
        <div className="mx-auto max-w-[1480px] px-4 pb-6 pt-4 sm:px-6 lg:px-8 lg:pb-10">
          {!hideShellHeader ? (
            <div className="hidden lg:block mb-6 px-2">
              <div className="rounded-[28px] bg-white border border-[#DCE7F5] p-8 shadow-card">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h1 className="text-3xl font-semibold text-[#071B45]">{title}</h1>
                    {subtitle ? <p className="mt-2 text-sm text-[#51617D]">{subtitle}</p> : null}
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <main className={cn('min-h-[calc(100vh-92px)] text-sm sm:text-base', 'lg:min-h-auto')}>{children}</main>
        </div>
      </div>
    </div>
  );
}
