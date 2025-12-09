'use client';

import { useState } from 'react';
import CaretakerHeader from '@/components/CaretakerHeader';

export default function CaretakerBookings() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const bookings = [
    {
      id: 1,
      name: 'Sarah Coleman',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfB-PqIpbRcEjW6ux3guzVeMtS8uLDtdk-6ZuqLQ2RZVgR_Xe4eC_Zb13I9uxK40XiD874bRqpyVddmoS6saEQxddgDqmthTkBIhjKP_XUzSs0nyJN5_qrvhJUVcV2URKGotrUVi2HIxVvCsxcM7RK0DyG-8cCQc9pQF1EJry8LvJMeKXe6x18k9qoM1CHojputlpMjtwXOnUgrUY5-6WL7CZvrlUVDe1tVqCdbmRznxBmVHi-EYL89h5hGvIhoGia1SpWU2Bo3YbO',
      type: 'Child Care',
      date: 'Oct 24, 2023',
      time: '9:00 AM - 5:00 PM',
      duration: '8 hours',
      amount: '$200.00',
      location: 'San Francisco, CA',
      status: 'pending'
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
      location: 'San Jose, CA',
      status: 'upcoming'
    },
    {
      id: 3,
      name: 'Emily Davis',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMNsbQfOmU4_QBa_GubKjWiGWFKYGfJfXilStfhwpQC95UlPoKZu3tb06Qde2Irn-rGzN829QsA0LajuZg7IWk4w_XJrdIKqsRD95zfxYmsNHS8MzVLZsFmudGF51vU3p9D278BXeALvwN4IjD6s4F1q17iPlU0ZRQsydAdNNojwp-az2iFqdoVn04Gy5MddlZ0yfdXthH1_iQJIuhFSyTdfH9m1IRuRdwhn_EEZZyblvk0mLaK-TJ7WZEVKblPbEwteadATVjAhRn',
      type: 'Special Needs',
      date: 'Oct 15, 2023',
      time: '2:00 PM - 6:00 PM',
      duration: '4 hours',
      amount: '$160.00',
      location: 'Oakland, CA',
      status: 'completed'
    },
    {
      id: 4,
      name: 'John Smith',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx0-41mIOOGN_DlxgZ28HS7QV_sx3TVKcxvSdFnoR3ND6l3shwSfJUq5pWXmwlWxJfZKZLD3DaOkcGcBdQF-dXf2lq-uu5UA2CFEzUzhMGXKWa5Hu--0VLSeMJ1zJn7i8k25-ske1-neY8QM2gQ3CRGxUZz03B0WOD5euEutckWGhnOWSr6htAOfkA0z_yNvP2LytCvvLECCloaylA2fprDHqx5JPnt4Re0fr_fHpQAYfmNwwPtteya6Az2kwJbZqu91byzoOQ4SwA',
      type: 'Child Care',
      date: 'Oct 12, 2023',
      time: '5:00 PM - 9:00 PM',
      duration: '4 hours',
      amount: '$100.00',
      location: 'Berkeley, CA',
      status: 'completed'
    }
  ];

  const filteredBookings = bookings.filter(b => {
    if (activeTab === 'requests') return b.status === 'pending';
    if (activeTab === 'upcoming') return b.status === 'upcoming';
    if (activeTab === 'past') return b.status === 'completed';
    return true;
  });

  return (
    <div className="font-display bg-background-light text-text-light min-h-screen">
      <CaretakerHeader activeTab="Bookings" />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-3xl font-bold text-slate-900">My Bookings</h1>

            {/* Tabs */}
            <div className="flex p-1 bg-slate-200 rounded-lg">
              {['requests', 'upcoming', 'past'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-bold capitalize transition-all ${activeTab === tab
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {filteredBookings.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
                <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">event_busy</span>
                <p className="text-xl font-bold text-slate-900">No {activeTab} bookings</p>
                <p className="text-slate-500">You don't have any {activeTab} bookings at the moment.</p>
              </div>
            ) : (
              filteredBookings.map((booking) => (
                <div key={booking.id} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="flex gap-4">
                      <div
                        className="w-16 h-16 rounded-full bg-cover bg-center bg-no-repeat flex-shrink-0"
                        style={{ backgroundImage: `url("${booking.image}")` }}
                      ></div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg text-slate-900">{booking.name}</h3>
                          <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${booking.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                              booking.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                                'bg-green-100 text-green-700'
                            }`}>
                            {booking.status}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-500 mb-2">{booking.type}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-lg">calendar_today</span>
                            {booking.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-lg">schedule</span>
                            {booking.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-lg">location_on</span>
                            {booking.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row lg:flex-col justify-between items-end gap-4 min-w-[140px]">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-slate-900">{booking.amount}</p>
                        <p className="text-sm text-slate-500">{booking.duration}</p>
                      </div>

                      {booking.status === 'pending' && (
                        <div className="flex gap-2 w-full lg:w-auto">
                          <button onClick={() => alert('Declined (Demo)')} className="flex-1 bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-50">Decline</button>
                          <button onClick={() => alert('Accepted (Demo)')} className="flex-1 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90">Accept</button>
                        </div>
                      )}

                      {booking.status === 'upcoming' && (
                        <button onClick={() => alert('Opening chat... (Demo)')} className="w-full lg:w-auto bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/20">Message User</button>
                      )}

                      {booking.status === 'completed' && (
                        <div className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          5.0 Rating
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
