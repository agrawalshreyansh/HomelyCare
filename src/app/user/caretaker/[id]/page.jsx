'use client';

import { useParams, useRouter } from 'next/navigation';
import { getCaretakerById } from '@/data/caretakers';
import Header from '@/components/Header';

export default function CaretakerProfile() {
  const params = useParams();
  const router = useRouter();
  const caretakerId = parseInt(params.id);
  const caretaker = getCaretakerById(caretakerId);

  // If caretaker not found, show error
  if (!caretaker) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-light mb-4">Caretaker Not Found</h1>
          <button
            onClick={() => router.push('/user/dashboard')}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const handleCheckAvailability = () => {
    router.push(`/user/booking/checkout?caretakerId=${caretaker.id}`);
  };

  return (
    <div className="font-display bg-background-light text-text-light min-h-screen">
      {/* Header - EXACT match to dashboard */}
      <Header />

      <main className="layout-container flex h-full grow flex-col">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 pb-6">
            <a className="text-slate-500 text-sm font-medium leading-normal hover:text-primary cursor-pointer transition-colors" href="/user/dashboard">Home</a>
            <span className="text-slate-500 text-sm font-medium leading-normal">/</span>
            <a className="text-slate-500 text-sm font-medium leading-normal hover:text-primary cursor-pointer transition-colors" href="/user/dashboard">{caretaker.category}</a>
            <span className="text-slate-500 text-sm font-medium leading-normal">/</span>
            <span className="text-slate-900 text-sm font-medium leading-normal">{caretaker.name}</span>
          </div>

          {/* Profile Header */}
          <div className="flex pb-8">
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
              <div className="flex gap-4 items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0 border-4 border-white shadow-sm"
                  style={{ backgroundImage: `url("${caretaker.image}")` }}
                />
                <div className="flex flex-col justify-center">
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight tracking-[-0.015em]">{caretaker.name}</h1>
                  <p className="text-slate-700 text-base font-medium leading-normal">{caretaker.title}</p>
                  <p className="text-slate-500 text-sm sm:text-base font-normal leading-normal">{caretaker.location} • {caretaker.experience}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Sticky Column */}
            <aside className="lg:sticky top-8 col-span-1 flex flex-col gap-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: i < Math.floor(caretaker.rating) ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      star{i === Math.floor(caretaker.rating) && caretaker.rating % 1 !== 0 ? '_half' : ''}
                    </span>
                  ))}
                </div>
                <p className="font-bold text-slate-900">{caretaker.rating}</p>
                <p className="text-sm text-slate-500">({caretaker.reviews} reviews)</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {caretaker.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-semibold border border-green-100">
                    <span className="material-symbols-outlined text-base">
                      {cert.includes('Background') ? 'verified_user' : 'local_hospital'}
                    </span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 my-2"></div>

              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg text-slate-900">Rates</h3>
                {/* Removed Hourly Rate as per request */}
                <div className="flex justify-between items-baseline p-4 rounded-lg bg-slate-50">
                  <span className="text-slate-600 font-medium">Daily (8 hrs)</span>
                  <span className="text-2xl font-bold text-primary">₹{caretaker.dailyRate}</span>
                </div>
                <div className="flex justify-between items-baseline p-4 rounded-lg bg-slate-50">
                  <span className="text-slate-600 font-medium">Weekly (40 hrs)</span>
                  <span className="text-2xl font-bold text-primary">₹{caretaker.weeklyRate}</span>
                </div>
              </div>

              <div className="border-t border-slate-100 my-2"></div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleCheckAvailability}
                  className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <span className="truncate">Check Availability</span>
                </button>
                <div className="flex gap-3">
                  <button className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white border border-slate-200 text-slate-700 text-sm font-bold leading-normal hover:bg-slate-50 transition-colors">
                    <span className="truncate">Send Message</span>
                  </button>
                  <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-white border border-slate-200 text-secondary text-sm font-bold leading-normal hover:bg-slate-50 transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </aside>

            {/* Right Main Column */}
            <main className="col-span-1 lg:col-span-2 flex flex-col gap-8">
              {/* About Section */}
              <section className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">About Me</h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line text-lg">{caretaker.about}</p>
              </section>

              {/* Skills Section - ORANGE BADGES */}
              <section className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Skills & Specializations</h2>
                <div className="flex flex-wrap gap-3">
                  {caretaker.skills.map((skill, index) => (
                    <span key={index} className="bg-orange-50 text-orange-700 border border-orange-100 font-semibold px-4 py-2 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Reviews Section */}
              <section className="flex flex-col gap-6 p-8 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Reviews & Ratings</h2>

                {/* Rating Summary */}
                <div className="flex flex-wrap gap-x-8 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-5xl font-black leading-tight tracking-tight text-slate-900">{caretaker.rating}</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-primary text-xl"
                          style={{ fontVariationSettings: i < Math.floor(caretaker.rating) ? "'FILL' 1" : "'FILL' 0" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-500">from {caretaker.reviews} reviews</p>
                  </div>

                  <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
                    {[
                      { star: 5, percent: 70 },
                      { star: 4, percent: 23 },
                      { star: 3, percent: 4 },
                      { star: 2, percent: 2 },
                      { star: 1, percent: 1 }
                    ].map(({ star, percent }) => (
                      <>
                        <p key={`label-${star}`} className="text-sm font-medium text-slate-700 leading-normal">{star}</p>
                        <div key={`bar-${star}`} className="flex h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                          <div className="rounded-full bg-primary" style={{ width: `${percent}%` }}></div>
                        </div>
                        <p key={`percent-${star}`} className="text-slate-500 text-sm font-medium leading-normal text-right">{percent}%</p>
                      </>
                    ))}
                  </div>
                </div>

                {/* Sample Reviews */}
                <div className="flex flex-col gap-8 border-t border-slate-100 pt-8">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border border-slate-100" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfB-PqIpbRcEjW6ux3guzVeMtS8uLDtdk-6ZuqLQ2RZVgR_Xe4eC_Zb13I9uxK40XiD874bRqpyVddmoS6saEQxddgDqmthTkBIhjKP_XUzSs0nyJN5_qrvhJUVcV2URKGotrUVi2HIxVvCsxcM7RK0DyG-8cCQc9pQF1EJry8LvJMeKXe6x18k9qoM1CHojputlpMjtwXOnUgrUY5-6WL7CZvrlUVDe1tVqCdbmRznxBmVHi-EYL89h5hGvIhoGia1SpWU2Bo3YbO")' }} />
                      <div>
                        <p className="font-bold text-slate-900">Emily R.</p>
                        <div className="flex text-primary">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">"Absolutely wonderful caregiver! Professional, warm, and our family loved working with them. Highly recommend!"</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border border-slate-100" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWKCktFi2_4JpCAPZC4WF261PjXvFI-hokwZrrS3NEPpZ6Wa2jQOPObAX9pTAHWEeFo1zNwDxxR1AT9Y_4FisW6oMWZN_fzFD1n1i64Hfg61NP-yaWVUKNN1NXk2bo6jd0SWGeqlGp3sJU0h-thWh-iQJN0eqWLdlE4Jh7MXuIrqRdhmxzffKzDzPexIpwJ1fiL4PPpaLFzwZeFraKg-fhMR1ZcxFU3GMh3cbJu1-tWXD2hnokdjCR7epImiRnizjpwXqb5FphV_MG")' }} />
                      <div>
                        <p className="font-bold text-slate-900">Mark T.</p>
                        <div className="flex text-primary">
                          {[...Array(4)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          ))}
                          <span className="material-symbols-outlined text-sm">star</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">"Great experience overall. Very reliable and communicative. Would book again!"</p>
                  </div>

                  <a className="text-primary font-bold hover:underline self-start cursor-pointer" href="#">Show all {caretaker.reviews} reviews</a>
                </div>
              </section>
            </main>
          </div>
        </div>
      </main >
    </div >
  );
}
