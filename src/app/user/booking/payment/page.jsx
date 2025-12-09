'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { getCaretakerById } from '@/data/caretakers';
import Header from '@/components/Header';

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const caretakerId = parseInt(searchParams.get('caretakerId') || '1');
  // We can trust the total passed from checkout, but we'll recalculate for the breakdown to be accurate
  const passedTotal = parseFloat(searchParams.get('total') || '0');
  const caretaker = getCaretakerById(caretakerId);

  if (!caretaker) {
    router.push('/user/dashboard');
    return null;
  }

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const [sameAsHome, setSameAsHome] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = () => {
    alert('Payment processed successfully! (This is a demo)');
    router.push('/user/dashboard');
  };

  // Calculate breakdown consistency
  const days = 3;
  const serviceCost = (caretaker.dailyRate || 1000) * days;
  const platformFee = serviceCost * 0.05;
  // If passedTotal is 0 (direct access), use calculated total. Otherwise use passed total.
  // We'll trust our calculation to match CheckoutPage logic.
  const total = serviceCost + platformFee;

  return (
    <div className="font-display bg-background-light text-text-light min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        {/* Header - EXACT match to dashboard */}
        <Header />

        <main className="flex-grow">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              {/* Left Column: Payment Details */}
              <div className="w-full lg:w-2/3">
                <div className="flex min-w-72 flex-col gap-3 mb-8">
                  <h1 className="text-slate-900 text-4xl font-black leading-tight tracking-[-0.033em]">Complete Your Booking</h1>
                  <p className="text-slate-500 text-base font-normal leading-normal">Please enter your payment information below. Your details are encrypted and secure.</p>
                </div>

                {/* Payment Method Selector */}
                <div className="flex px-0 py-3 mb-6">
                  <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-slate-200 p-1">
                    <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 transition-colors ${paymentMethod === 'card' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'} text-sm font-medium leading-normal`}>
                      <span className="truncate">Credit/Debit Card</span>
                      <input type="radio" name="payment_method" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="invisible w-0" />
                    </label>
                    <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 transition-colors ${paymentMethod === 'paypal' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'} text-sm font-medium leading-normal`}>
                      <span className="truncate">PayPal</span>
                      <input type="radio" name="payment_method" value="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="invisible w-0" />
                    </label>
                    <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 transition-colors ${paymentMethod === 'gpay' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'} text-sm font-medium leading-normal`}>
                      <span className="truncate">Google Pay</span>
                      <input type="radio" name="payment_method" value="gpay" checked={paymentMethod === 'gpay'} onChange={() => setPaymentMethod('gpay')} className="invisible w-0" />
                    </label>
                  </div>
                </div>

                {/* Credit Card Form */}
                <div className="space-y-8 pt-4">
                  <h2 className="text-slate-900 text-[22px] font-bold leading-tight tracking-[-0.015em] pb-0 pt-2">Payment Information</h2>

                  <div className="flex flex-col gap-2">
                    <label className="text-slate-800 text-sm font-bold leading-normal">Cardholder Name</label>
                    <input
                      name="cardholderName"
                      value={formData.cardholderName}
                      onChange={handleInputChange}
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white focus:border-primary h-14 placeholder:text-slate-400 px-4 text-base font-normal leading-normal shadow-sm"
                      placeholder="Enter name as it appears on card"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-slate-800 text-sm font-bold leading-normal">Card Number</label>
                    <div className="relative">
                      <input
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white focus:border-primary h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal leading-normal shadow-sm"
                        placeholder="0000 0000 0000 0000"
                      />
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">credit_card</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
                    <div className="flex flex-col flex-1 gap-2">
                      <label className="text-slate-800 text-sm font-bold leading-normal">Expiration Date</label>
                      <input
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white focus:border-primary h-14 placeholder:text-slate-400 px-4 text-base font-normal leading-normal shadow-sm"
                        placeholder="MM / YY"
                      />
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                      <label className="text-slate-800 text-sm font-bold leading-normal">CVV</label>
                      <div className="relative">
                        <input
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white focus:border-primary h-14 placeholder:text-slate-400 px-4 text-base font-normal leading-normal shadow-sm"
                          placeholder="123"
                        />
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-help" title="The 3-4 digit code on the back of your card.">help</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="space-y-8 pt-10">
                  <h2 className="text-slate-900 text-[22px] font-bold leading-tight tracking-[-0.015em] pb-0 pt-2">Billing Address</h2>

                  <div className="flex items-center space-x-3 mb-2">
                    <input
                      className="form-checkbox h-5 w-5 rounded border-slate-300 bg-white text-primary focus:ring-primary/50"
                      id="same_address"
                      type="checkbox"
                      checked={sameAsHome}
                      onChange={(e) => setSameAsHome(e.target.checked)}
                    />
                    <label className="text-sm font-medium text-slate-700 cursor-pointer" htmlFor="same_address">Same as my home address</label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-slate-800 text-sm font-bold leading-normal">Street Address</label>
                    <input
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white focus:border-primary h-14 placeholder:text-slate-400 px-4 text-base font-normal leading-normal shadow-sm"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
                    <div className="flex flex-col flex-1 gap-2">
                      <label className="text-slate-800 text-sm font-bold leading-normal">City</label>
                      <input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white focus:border-primary h-14 placeholder:text-slate-400 px-4 text-base font-normal leading-normal shadow-sm"
                        placeholder="Anytown"
                      />
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                      <label className="text-slate-800 text-sm font-bold leading-normal">State / Province</label>
                      <input
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white focus:border-primary h-14 placeholder:text-slate-400 px-4 text-base font-normal leading-normal shadow-sm"
                        placeholder="CA"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
                    <div className="flex flex-col flex-1 gap-2">
                      <label className="text-slate-800 text-sm font-bold leading-normal">ZIP / Postal Code</label>
                      <input
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white focus:border-primary h-14 placeholder:text-slate-400 px-4 text-base font-normal leading-normal shadow-sm"
                        placeholder="12345"
                      />
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                      <label className="text-slate-800 text-sm font-bold leading-normal">Country</label>
                      <input
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white focus:border-primary h-14 placeholder:text-slate-400 px-4 text-base font-normal leading-normal shadow-sm"
                        placeholder="United States"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary */}
              <div className="w-full lg:w-1/3 mt-12 lg:mt-0">
                <div className="sticky top-24">
                  <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="p-6">
                      <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight mb-4">Your Booking Summary</h2>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <img className="w-16 h-16 rounded-lg object-cover" src={caretaker.image} alt={`Photo of caretaker ${caretaker.name}`} />
                            <div>
                              <p className="font-semibold text-slate-800">{caretaker.name}</p>
                              <p className="text-sm text-slate-500">{caretaker.title}</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-slate-500">
                          <p>Mon, Oct 28, 2024</p>
                          <p>3 Days Duration</p>
                        </div>
                        <div className="border-t border-slate-200 my-4"></div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-500">Service Rate ({days} days)</span>
                            <span className="font-medium text-slate-700">₹{serviceCost.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Platform Fee</span>
                            <span className="font-medium text-slate-700">₹{platformFee.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-slate-200 p-6 bg-slate-50 rounded-b-xl">
                      <div className="flex justify-between items-baseline">
                        <span className="text-lg font-bold text-slate-900">Total</span>
                        <span className="text-2xl font-black text-slate-900 tracking-tight">₹{total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={handlePayment}
                      className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-wide min-w-0 px-6 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light transition-colors shadow-lg shadow-primary/25"
                    >
                      <span className="material-symbols-outlined">lock</span>
                      <span>Pay ₹{total.toFixed(2)} Securely</span>
                    </button>
                    <div className="mt-6 text-center text-xs text-slate-500">
                      <p>Your security is our priority. By clicking "Pay Securely", you agree to our <a className="font-medium text-primary hover:underline cursor-pointer" href="#">Terms of Service</a> and <a className="font-medium text-primary hover:underline cursor-pointer" href="#">Privacy Policy</a>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-100 border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-status-green">verified_user</span>
                <p className="text-sm font-medium text-slate-600">SSL Encrypted & PCI Compliant</p>
              </div>
              <div className="text-center text-xs text-slate-500 pt-4">
                © 2023 CarePlatform Inc. All rights reserved.
                <a className="hover:underline ml-2 cursor-pointer" href="#">Contact Support</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
