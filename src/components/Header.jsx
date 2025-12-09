'use client';

import Link from 'next/link';

export default function Header({ activeTab = 'Dashboard' }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm px-6 lg:px-10 py-3">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary text-3xl">health_and_safety</span>
        <h2 className="text-text-light dark:text-text-dark text-xl font-bold tracking-tight">CareFinder</h2>
      </div>
      <div className="hidden lg:flex items-center gap-8">
        <Link
          className={`${activeTab === 'Dashboard' ? 'text-primary' : 'text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary'} text-sm font-semibold cursor-pointer transition-colors`}
          href="/user/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className={`${activeTab === 'My Bookings' ? 'text-primary' : 'text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary'} text-sm font-medium cursor-pointer transition-colors`}
          href="/user/bookings"
        >
          My Bookings
        </Link>
        <Link
          className={`${activeTab === 'Messages' ? 'text-primary' : 'text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary'} text-sm font-medium cursor-pointer transition-colors`}
          href="/user/messages"
        >
          Messages
        </Link>
        <Link
          className={`${activeTab === 'Help' ? 'text-primary' : 'text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary'} text-sm font-medium cursor-pointer transition-colors`}
          href="/user/help"
        >
          Help
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-subtext-light dark:text-subtext-dark">notifications</span>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMNsbQfOmU4_QBa_GubKjWiGWFKYGfJfXilStfhwpQC95UlPoKZu3tb06Qde2Irn-rGzN829QsA0LajuZg7IWk4w_XJrdIKqsRD95zfxYmsNHS8MzVLZsFmudGF51vU3p9D278BXeALvwN4IjD6s4F1q17iPlU0ZRQsydAdNNojwp-az2iFqdoVn04Gy5MddlZ0yfdXthH1_iQJIuhFSyTdfH9m1IRuRdwhn_EEZZyblvk0mLaK-TJ7WZEVKblPbEwteadATVjAhRn")' }}
        />
      </div>
    </header>
  );
}
