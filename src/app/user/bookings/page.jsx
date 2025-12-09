'use client';

import Header from '@/components/Header';

export default function MyBookingsPage() {
  const bookings = [
    {
      id: 1,
      caretakerName: 'Jane Doe',
      caretakerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCojqLUBH_qhjL4LaGvN65b-KeMsO-IBmCHEXDI_NZl4ECx-lCHbLeIrTsuMnXE22LtU8FDHEEQKQJHuwdH5i1qKeW6mFFL5ug_38rAMu2Fd6Dgtk5fPIaMfZ1Kubw6q0DXATsikxCyJ67WbRJg9Y-I3qO8DgpBmAkLCN33IQgyMHd8Db6MI2y7-oL3hI5WLGuTCl0Z9jN9LlHN6442UeUOAgMkm7d18EPMzUeh3RQJa8Dqf9CzGvGY-qqb5otwu-VKkvZtuIWSSOqM',
      date: 'Dec 15, 2024',
      time: '9:00 AM - 5:00 PM',
      status: 'Confirmed',
      amount: '$200.00'
    },
    {
      id: 2,
      caretakerName: 'John Smith',
      caretakerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1kGkHA16u17rePXvZLSQQZVOzGGJ9GVyR20pA0TRSDjiB3o6279zmgVVWWGsYa3RWBOHo_9BjmX4y42subKDTKIIQE7tZ6-tu1EySxcgndHJQRKGpklOcx3_uIXXnXB0S0ZNApo9moWMlgwgvXIBxFRDL_pcqPkdZ3auiCWVqNlj2jwDwELr16UHVgkvhgI1FEjqsuSh1JYmoOd9M69viJ-nQahILh8sBW62wdPNy9_CbnIqz-WVVNQ9fAJI9XDGCrP-LVOrzrsBZ',
      date: 'Dec 20, 2024',
      time: '10:00 AM - 3:00 PM',
      status: 'Pending',
      amount: '$150.00'
    },
    {
      id: 3,
      caretakerName: 'Sarah Lee',
      caretakerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_n5HnbehzmsKm8qIfdsfSfnhnb4QTq8yL8Kq8tqgpuVsMIj2-T3F4pa6zj2FdqwwsaxJZholqNAzCsI0aNsFx6UI96dwsZw_I-trJOFHnsaht8iifZA09FmKeVqdGOCHAEGnWdp-bFyJ-BDyAOGGqn7Kw5ewhZzPYyoZxLrpIo8uTmRN9DVhBBVqkDE3MvWozKdRX-_FvlUkUJ4LA15HwyBrqL_xT4AAvl1M5o12vs8ABWVQA34WGnsr-1XmEaKXhe3ko_mdnep9g',
      date: 'Dec 10, 2024',
      time: '2:00 PM - 6:00 PM',
      status: 'Completed',
      amount: '$120.00'
    },
  ];

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">
      <Header activeTab="My Bookings" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tight mb-2">My Bookings</h1>
          <p className="text-subtext-light dark:text-subtext-dark">View and manage your caretaker bookings</p>
        </div>

        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-16 flex-shrink-0"
                    style={{ backgroundImage: `url("${booking.caretakerImage}")` }}
                  />
                  <div>
                    <h3 className="font-bold text-lg">{booking.caretakerName}</h3>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">{booking.date} • {booking.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-bold text-xl text-primary">{booking.amount}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${booking.status === 'Confirmed' ? 'bg-status-green/10 text-status-green' :
                        booking.status === 'Pending' ? 'bg-secondary/10 text-secondary-darker' :
                          'bg-slate-100 dark:bg-slate-800 text-subtext-light dark:text-subtext-dark'
                      }`}>
                      {booking.status}
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {bookings.length === 0 && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-subtext-light dark:text-subtext-dark mb-4">event_busy</span>
            <h3 className="text-2xl font-bold mb-2">No bookings yet</h3>
            <p className="text-subtext-light dark:text-subtext-dark mb-6">Start by finding a caretaker on the dashboard</p>
            <a href="/user/dashboard" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Find Caretakers
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
