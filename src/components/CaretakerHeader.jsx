'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CaretakerHeader({ activeTab = 'Dashboard' }) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between whitespace-nowrap border-b border-slate-200 bg-surface-light/80 backdrop-blur-sm px-6 lg:px-10 py-3">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary text-3xl">health_and_safety</span>
        <h2 className="text-text-light text-xl font-bold tracking-tight">CareConnect Pro</h2>
      </div>

      <div className="hidden lg:flex items-center gap-8">
        <Link
          className={`${activeTab === 'Dashboard' ? 'text-primary' : 'text-subtext-light hover:text-primary'} text-sm font-semibold cursor-pointer transition-colors`}
          href="/caretaker/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className={`${activeTab === 'Bookings' ? 'text-primary' : 'text-subtext-light hover:text-primary'} text-sm font-medium cursor-pointer transition-colors`}
          href="/caretaker/bookings"
        >
          My Bookings
        </Link>
        <Link
          className={`${activeTab === 'Earnings' ? 'text-primary' : 'text-subtext-light hover:text-primary'} text-sm font-medium cursor-pointer transition-colors`}
          href="/caretaker/earnings"
        >
          Earnings
        </Link>
        <Link
          className={`${activeTab === 'Profile' ? 'text-primary' : 'text-subtext-light hover:text-primary'} text-sm font-medium cursor-pointer transition-colors`}
          href="/caretaker/profile"
        >
          Profile
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 transition-colors">
          <span className="material-symbols-outlined text-subtext-light">notifications</span>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjHNQSHcat0P_Xg0t7rtjNqKYiwHCuFRB53c21SicwOqv6_beFDV3Q_JXtylz3Gk33MeJHmNVyanC5tFVgHwX5E5NQYUgj31P4OoOR1PZKwdyYQEdPAZp7ZiQkJP84i_ZToncjRul6xRfk1rb-P1rrph_OnFclyAmhw64lBpvSoqchJhJzshE5OiQqbXG9lMlHlZqAVCzbW5r0J4eHhpjWmQRtk6IGGjaubCfKwC2cDKGIRUFeCXaSq6TeRDPuhnVvp1Z0iUFjARtW")' }}
        />
      </div>
    </header>
  );
}
