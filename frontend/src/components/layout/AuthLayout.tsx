import type { ReactNode } from 'react';
import { CheckCircle2, Heart, Phone, Sparkles } from 'lucide-react';

type AuthLayoutProps = {
  children: ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F6FAFF] py-8 overflow-x-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-[1480px] gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <section className="order-1 w-full min-w-0 rounded-[32px] bg-white p-6 shadow-card sm:p-10 lg:order-2 lg:p-12">
          {children}
        </section>

        <section className="relative order-2 w-full min-w-0 overflow-hidden rounded-[32px] bg-white p-8 shadow-card sm:p-10 lg:order-1 lg:p-12">
          <div className="space-y-8">
            <div className="max-w-xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#009E9A]">Saajha</p>
              <h1 className="text-3xl font-semibold leading-tight text-[#071B45] sm:text-4xl">
                Stronger connections.
                <span className="block text-[#009E9A]">Brighter futures.</span>
              </h1>
              <p className="max-w-md text-base leading-7 text-[#51617D]">
                Saajha helps volunteers reach families, complete follow-ups, and create meaningful impact in every child's journey.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[28px] border border-[#DCE7F5] bg-[#F7FBFF] p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-5">
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EAF3FF] text-[#0F6FEF]">
                  <Phone size={20} />
                </div>
                <p className="mt-4 font-semibold text-[#071B45]">Call & Connect</p>
                <p className="mt-2 text-sm text-[#51617D]">Reach parents with ease</p>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EAF3FF] text-[#0F6FEF]">
                  <Sparkles size={20} />
                </div>
                <p className="mt-4 font-semibold text-[#071B45]">Track & Follow-up</p>
                <p className="mt-2 text-sm text-[#51617D]">Stay organized and never miss a follow-up</p>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EAF3FF] text-[#0F6FEF]">
                  <Heart size={20} />
                </div>
                <p className="mt-4 font-semibold text-[#071B45]">Create Impact</p>
                <p className="mt-2 text-sm text-[#51617D]">Stronger families, better outcomes</p>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
