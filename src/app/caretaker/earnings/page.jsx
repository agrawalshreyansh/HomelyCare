'use client';

import CaretakerHeader from '@/components/CaretakerHeader';

export default function CaretakerEarnings() {
  const transactions = [
    {
      id: 1,
      name: 'Payment from Sarah Coleman',
      date: 'Oct 24, 2023 at 5:30 PM',
      amount: '+$200.00',
      status: 'Completed',
      type: 'credit'
    },
    {
      id: 2,
      name: 'Withdrawal to Bank Account',
      date: 'Oct 20, 2023 at 10:00 AM',
      amount: '-$450.00',
      status: 'Processing',
      type: 'debit'
    },
    {
      id: 3,
      name: 'Payment from Emily Davis',
      date: 'Oct 15, 2023 at 6:15 PM',
      amount: '+$160.00',
      status: 'Completed',
      type: 'credit'
    },
    {
      id: 4,
      name: 'Payment from John Smith',
      date: 'Oct 12, 2023 at 9:05 PM',
      amount: '+$100.00',
      status: 'Completed',
      type: 'credit'
    }
  ];

  return (
    <div className="font-display bg-background-light text-text-light min-h-screen">
      <CaretakerHeader activeTab="Earnings" />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-slate-900">Earnings & Payouts</h1>
            <p className="text-slate-500">View your earnings summary and transaction history.</p>
          </div>

          {/* Balance Card */}
          <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">Available Balance</p>
                <h2 className="text-5xl font-black tracking-tight mb-4">$875.50</h2>
                <div className="flex gap-4 text-sm">
                  <div>
                    <p className="text-slate-400">Next Payout</p>
                    <p className="font-bold">Oct 31, 2023</p>
                  </div>
                  <div className="w-px bg-slate-700 h-full"></div>
                  <div>
                    <p className="text-slate-400">Pending</p>
                    <p className="font-bold">$125.00</p>
                  </div>
                </div>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/25">
                Withdraw Funds
              </button>
            </div>

            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          </div>

          {/* Recent Transactions */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-slate-900">Recent Transactions</h2>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              {transactions.map((tx, index) => (
                <div
                  key={tx.id}
                  className={`p-5 flex items-center justify-between hover:bg-slate-50 transition-colors ${index !== transactions.length - 1 ? 'border-b border-slate-100' : ''
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-600'
                      }`}>
                      <span className="material-symbols-outlined">
                        {tx.type === 'credit' ? 'arrow_downward' : 'arrow_upward'}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{tx.name}</p>
                      <p className="text-sm text-slate-500">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${tx.type === 'credit' ? 'text-green-600' : 'text-slate-900'}`}>
                      {tx.amount}
                    </p>
                    <p className="text-xs font-medium text-slate-500 uppercase">{tx.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-primary font-bold text-sm hover:underline self-center">View All Transactions</button>
          </div>
        </div>
      </main>
    </div>
  );
}
