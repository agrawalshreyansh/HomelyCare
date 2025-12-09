'use client';

import CaretakerHeader from '@/components/CaretakerHeader';
import { useRouter } from 'next/navigation';

export default function CaretakerDashboard() {
  const router = useRouter();

  // Mock Data
  const stats = [
    { label: 'Total Earnings', value: '$1,250.00', icon: 'payments', color: 'text-status-green' },
    { label: 'Active Bookings', value: '4', icon: 'calendar_month', color: 'text-primary' },
    { label: 'Profile Views', value: '128', icon: 'visibility', color: 'text-[#F5A623]' },
    { label: 'Rating', value: '4.9', icon: 'star', color: 'text-[#F5A623]' },
  ];

  const requests = [
    {
      id: 1,
      name: 'Sarah Coleman',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfB-PqIpbRcEjW6ux3guzVeMtS8uLDtdk-6ZuqLQ2RZVgR_Xe4eC_Zb13I9uxK40XiD874bRqpyVddmoS6saEQxddgDqmthTkBIhjKP_XUzSs0nyJN5_qrvhJUVcV2URKGotrUVi2HIxVvCsxcM7RK0DyG-8cCQc9pQF1EJry8LvJMeKXe6x18k9qoM1CHojputlpMjtwXOnUgrUY5-6WL7CZvrlUVDe1tVqCdbmRznxBmVHi-EYL89h5hGvIhoGia1SpWU2Bo3YbO',
      type: 'Child Care',
      date: 'Oct 24, 2023',
      time: '9:00 AM - 5:00 PM',
      duration: '8 hours',
      amount: '$200.00',
      location: 'San Francisco, CA'
    },
    {
      id: 2,
      name: 'Michael Chen',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWKCktFi2_4JpCAPZC4WF261PjXvFI-hokwZrrS3NEPpZ6Wa2jQOPObAX9pTAHWEeFo1zNwDxxR1AT9Y_4FisW6oMWZN_fzFD1n1i64Hfg61NP-yaWVUKNN1NXk2bo6jd0SWGeqlGp3sJU0h-thWh-iQJN0eqWLdlE4Jh7MXuIrqRdhmxzffKzDzPexIpwJ1fiL4PPpaLFzwZeFraKg-fhMR1ZcxFU3GMh3cbJu1-tWXD2hnokdjCR7epImiRnizjpwXqb5FphV_MG',
      type: 'Elderly Care',
      date: 'Oct 26, 2023',
      time: '10:00 AM - 2:00 PM',
      duration: '4 hours',
      amount: '$100.00',
      location: 'San Jose, CA'
    }
  ];

  const upcoming = [
    {
      id: 3,
      name: 'Emily Davis',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMNsbQfOmU4_QBa_GubKjWiGWFKYGfJfXilStfhwpQC95UlPoKZu3tb06Qde2Irn-rGzN829QsA0LajuZg7IWk4w_XJrdIKqsRD95zfxYmsNHS8MzVLZsFmudGF51vU3p9D278BXeALvwN4IjD6s4F1q17iPlU0ZRQsydAdNNojwp-az2iFqdoVn04Gy5MddlZ0yfdXthH1_iQJIuhFSyTdfH9m1IRuRdwhn_EEZZyblvk0mLaK-TJ7WZEVKblPbEwteadATVjAhRn',
      type: 'Special Needs Care',
      date: 'Today',
      time: '2:00 PM - 6:00 PM',
      location: 'Oakland, CA'
    }
  ];

  return (
    <div className="font-display bg-background-light text-text-light min-h-screen">
      <CaretakerHeader activeTab="Dashboard" />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Welcome back, Maria! 👋</h1>
          <p className="text-slate-500">Here's what's happening with your schedule today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                </div>
                <div className={`p-2 rounded-lg bg-slate-100 ${stat.color}`}>
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Requests */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900">New Requests</h2>
              <button
                onClick={() => router.push('/caretaker/bookings')}
                className="text-primary font-semibold text-sm hover:underline"
              >
                View All
              </button>
            </div>

            {requests.map((req) => (
              <div key={req.id} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url("${req.image}")` }}
                    ></div>
                    <div>
                      <h3 className="font-bold text-slate-900">{req.name}</h3>
                      <p className="text-sm text-slate-500">{req.type} • {req.location}</p>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="font-bold text-slate-900">{req.amount}</p>
                    <p className="text-sm text-slate-500">{req.duration}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 py-3 border-y border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="material-symbols-outlined text-primary text-xl">calendar_today</span>
                    {req.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                    {req.time}
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => alert('Request Accepted! (Demo)')}
                    className="flex-1 bg-primary text-white font-bold py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Accept Request
                  </button>
                  <button
                    onClick={() => alert('Request Declined (Demo)')}
                    className="flex-1 bg-white text-slate-700 border border-slate-200 font-bold py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar - Upcoming */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-slate-900">Upcoming Booking</h2>

            {upcoming.map((item) => (
              <div key={item.id} className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white p-2 rounded-full">
                    <span className="material-symbols-outlined text-primary">notifications_active</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Happening Today</p>
                    <p className="text-xs text-primary font-medium">{item.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  ></div>
                  <div>
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.location}</p>
                  </div>
                </div>

                <button
                  onClick={() => router.push('/caretaker/bookings')}
                  className="w-full bg-white text-primary font-bold py-2 rounded-lg border border-transparent hover:border-primary/20 transition-all shadow-sm"
                >
                  View Details
                </button>
              </div>
            ))}

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">Complete your profile</h3>
                <p className="text-slate-300 text-sm mb-4">Adding certifications increases your visibility by 40%.</p>
                <button
                  onClick={() => router.push('/caretaker/profile')}
                  className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold"
                >
                  Edit Profile
                </button>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-white/5">verified</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
