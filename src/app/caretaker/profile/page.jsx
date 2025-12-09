'use client';

import CaretakerHeader from '@/components/CaretakerHeader';
import { useState } from 'react';

export default function CaretakerProfile() {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="font-display bg-background-light text-text-light min-h-screen">
      <CaretakerHeader activeTab="Profile" />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Profile Management</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Sidebar Navigation */}
            <div className="md:col-span-1 bg-white rounded-xl border border-slate-200 p-2 shadow-sm sticky top-24">
              {[
                { id: 'details', label: 'Personal Details', icon: 'person' },
                { id: 'services', label: 'Services & Rates', icon: 'payments' },
                { id: 'availability', label: 'Availability', icon: 'calendar_month' },
                { id: 'photos', label: 'Photos', icon: 'image' },
                { id: 'reviews', label: 'Reviews', icon: 'star' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === item.id
                      ? 'bg-primary/10 text-primary font-bold'
                      : 'text-slate-600 hover:bg-slate-50'
                    }`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  {item.label}
                </button>
              ))}
              <div className="border-t border-slate-200 my-2"></div>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-all">
                <span className="material-symbols-outlined">logout</span>
                Log Out
              </button>
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {/* Profile Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4 items-center">
                    <div
                      className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat ring-4 ring-slate-100"
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfB-PqIpbRcEjW6ux3guzVeMtS8uLDtdk-6ZuqLQ2RZVgR_Xe4eC_Zb13I9uxK40XiD874bRqpyVddmoS6saEQxddgDqmthTkBIhjKP_XUzSs0nyJN5_qrvhJUVcV2URKGotrUVi2HIxVvCsxcM7RK0DyG-8cCQc9pQF1EJry8LvJMeKXe6x18k9qoM1CHojputlpMjtwXOnUgrUY5-6WL7CZvrlUVDe1tVqCdbmRznxBmVHi-EYL89h5hGvIhoGia1SpWU2Bo3YbO")' }}
                    ></div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Maria Garcia</h2>
                      <p className="text-slate-500">Experienced Nanny & Elder Care Specialist</p>
                      <div className="flex items-center gap-1 text-sm text-[#F5A623] mt-1">
                        <span className="material-symbols-outlined text-base font-fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-bold">4.9</span>
                        <span className="text-slate-400 font-normal">(123 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-primary text-sm font-bold border border-primary px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors">
                    Edit Profile
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-sm font-bold text-slate-700">Profile Completion</label>
                      <span className="text-sm font-bold text-primary">75%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-3/4 rounded-full"></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Complete your "Photos" section to reach 100% and rank higher in search.</p>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-900">About Me</h3>
                  <button className="text-primary text-sm font-bold hover:underline">Save Changes</button>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700">Bio</span>
                    <textarea
                      className="form-textarea w-full rounded-lg border-slate-200 bg-slate-50 min-h-[120px] p-4 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      defaultValue="With over 10 years of experience in both child care and elder companionship, I bring a warm, patient, and professional approach to every family I work with. I am passionate about creating a safe, engaging, and nurturing environment."
                    ></textarea>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-slate-700">Years of Experience</span>
                      <input
                        type="number"
                        defaultValue="10"
                        className="form-input rounded-lg border-slate-200 bg-slate-50 p-3 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-slate-700">Languages Spoken</span>
                      <input
                        type="text"
                        defaultValue="English, Spanish"
                        className="form-input rounded-lg border-slate-200 bg-slate-50 p-3 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      />
                    </label>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-bold text-slate-900 mb-4">Certifications</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      CPR & First Aid Certified
                    </span>
                  </div>
                  <button className="w-full border-2 border-dashed border-slate-300 rounded-lg p-4 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                    <span className="material-symbols-outlined text-2xl mb-1">upload_file</span>
                    <span className="text-sm font-medium">Upload Certification</span>
                  </button>
                </div>
              </div>

              {/* Rates Section (Teaser) */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-900">Services & Rates</h3>
                  <button className="text-primary text-sm font-bold hover:underline">Save Changes</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700">Services Offered</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">Newborn Care &times;</span>
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">Meal Prep &times;</span>
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">Companionship &times;</span>
                      <button className="px-3 py-1 rounded-full border border-blue-200 text-blue-600 text-sm font-bold hover:bg-blue-50">+ Add Service</button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-700">Hourly Rate</span>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                      <input
                        type="number"
                        defaultValue="25"
                        className="w-full form-input rounded-lg border-slate-200 bg-slate-50 p-3 pl-8 text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">/ hour</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
