'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { getCaretakerById } from '@/data/caretakers';
import Header from '@/components/Header';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const caretakerId = parseInt(searchParams.get('caretakerId') || '1');
  const caretaker = getCaretakerById(caretakerId);

  if (!caretaker) {
    router.push('/user/dashboard');
    return null;
  }

  // Calculate totals based on DAYS
  const days = 3;
  const caretakerRate = (caretaker.dailyRate || 1000) * days;
  const platformFee = caretakerRate * 0.05;
  const total = caretakerRate + platformFee;

  const handleProceedToPayment = () => {
    router.push(`/user/booking/payment?caretakerId=${caretaker.id}&total=${total.toFixed(2)}`);
  };

  return (
    <div className="font-display bg-background-light text-text-light min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Header - EXACT match to dashboard */}
          <Header />

          <main className="px-4 sm:px-10 lg:px-20 flex flex-1 justify-center py-8">
            <div className="layout-content-container flex flex-col w-full max-w-4xl flex-1 gap-6">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap gap-2 text-sm text-slate-500">
                <a className="hover:underline cursor-pointer" href="/user/dashboard">Home</a>
                <span>/</span>
                <a className="hover:underline cursor-pointer" href="/user/dashboard">Search</a>
                <span>/</span>
                <a className="hover:underline cursor-pointer" href={`/user/caretaker/${caretaker.id}`}>{caretaker.name}</a>
                <span>/</span>
                <span className="text-slate-900 font-medium">Review Booking</span>
              </div>

              {/* Page Header */}
              <div className="flex flex-wrap justify-between gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-slate-900 text-4xl font-black leading-tight tracking-[-0.033em]">Review Your Booking</p>
                  <p className="text-slate-500 text-base font-normal leading-normal">Please confirm the details below before proceeding to payment.</p>
                </div>
              </div>

              {/* Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left Column */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  {/* Caretaker Section */}
                  <section>
                    <h2 className="text-slate-900 text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-2">Your Caretaker</h2>
                    <div className="flex flex-col sm:flex-row items-stretch gap-4 rounded-xl bg-white p-4 shadow-sm border border-slate-200">
                      <div className="w-full sm:w-32 h-32 bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex-shrink-0" style={{ backgroundImage: `url("${caretaker.image}")` }} />
                      <div className="flex flex-col gap-2 flex-1 justify-center">
                        <p className="text-slate-900 text-xl font-bold leading-tight">{caretaker.name}</p>
                        <p className="text-slate-500 text-sm font-normal leading-normal">⭐️ {caretaker.rating} ({caretaker.reviews} Reviews) • {caretaker.experience}</p>
                        <a className="text-sm font-medium text-primary hover:underline mt-1 cursor-pointer" href={`/user/caretaker/${caretaker.id}`}>View Profile</a>
                      </div>
                    </div>
                  </section>

                  {/* Booking Details */}
                  <section>
                    <h2 className="text-slate-900 text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-2">Booking Details</h2>
                    <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-sm font-medium text-slate-500">Start Date & Time</label>
                          <p className="font-semibold text-base text-slate-900">Mon, Oct 28, 2024 at 9:00 AM</p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-sm font-medium text-slate-500">End Date & Time</label>
                          <p className="font-semibold text-base text-slate-900">Wed, Oct 30, 2024 at 5:00 PM</p>
                        </div>
                      </div>
                      <hr className="my-6 border-slate-200" />
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-slate-500">Total Duration</label>
                        <p className="font-semibold text-base text-slate-900">3 Days</p>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Cost Summary Sidebar */}
                <aside className="lg:col-span-1 lg:sticky top-28">
                  <h2 className="text-slate-900 text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-2">Cost Summary</h2>
                  <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm border border-slate-200">
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between text-sm text-slate-500">
                        <span>Caretaker Rate ({days} days)</span>
                        <span>₹{caretakerRate.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-slate-500">
                        <span>Platform Fee</span>
                        <span>₹{platformFee.toFixed(2)}</span>
                      </div>
                    </div>
                    <hr className="border-slate-200" />
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg text-slate-900">Total</span>
                      <span className="font-black text-2xl text-slate-900">₹{total.toFixed(2)}</span>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                      <button
                        onClick={handleProceedToPayment}
                        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                      >
                        <span className="truncate">Proceed to Payment</span>
                      </button>
                      <a
                        className="text-center text-sm font-medium text-slate-500 hover:text-primary cursor-pointer flex items-center justify-center gap-1"
                        href={`/user/caretaker/${caretaker.id}`}
                      >
                        <span className="material-symbols-outlined text-base">edit</span>
                        Edit Booking
                      </a>
                    </div>
                    <p className="text-xs text-center text-slate-500 mt-2 flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-sm">lock</span>
                      You will not be charged until you confirm on the next screen.
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-slate-200 mt-16">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-slate-500">© 2024 CarePlatform, Inc. All rights reserved.</p>
                <div className="flex gap-6">
                  <a className="text-sm text-slate-500 hover:text-primary cursor-pointer transition-colors" href="#">Terms of Service</a>
                  <a className="text-sm text-slate-500 hover:text-primary cursor-pointer transition-colors" href="#">Privacy Policy</a>
                  <a className="text-sm text-slate-500 hover:text-primary cursor-pointer transition-colors" href="#">Contact</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
