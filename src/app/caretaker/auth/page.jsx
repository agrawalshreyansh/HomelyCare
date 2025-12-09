'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CaretakerAuth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: '',
    specialization: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to caretaker dashboard (static demo)
    router.push('/caretaker/dashboard');
  };

  const handleGoogleLogin = () => {
    router.push('/caretaker/dashboard');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 items-stretch justify-center">
          <div className="flex w-full flex-col lg:flex-row">
            {/* Left Panel - Image */}
            <div className="relative hidden w-full flex-1 items-center justify-center bg-slate-200 lg:flex lg:w-1/2">
              <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDi3uYudVA6cnZQWMZZDyJHbmvnmqorg0X9PZnfoeGKLxW1CyYjvXUaooeLWIjfVgHr9QSkLX2Ncw61TcfKmk1w3yyInsJHPCFinnJqLrzZdonAyp5O9Lh9hwoWT_FB6zD_2EpNzzjebR3_jDNLyBZkPyCGsx1ka1BuXZ9ocQ3v9MIXR6L6F8XUSRUlT1gvIMSvsNHaVtd3XVVueMqYj70FDgbIaa5QfTJLnzEeTtQptAlivsvUlS_R1WK1KZtGyj3CH2StgmmoVUSR")' }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="relative z-10 p-12 text-center text-white">
                <h2 className="text-4xl font-bold leading-tight">Making a Difference,</h2>
                <h2 className="text-4xl font-bold leading-tight">One Family at a Time.</h2>
                <p className="mt-4 max-w-md text-lg text-slate-200">
                  Join our community of trusted caregivers and connect with families who need your expertise and compassion.
                </p>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="flex w-full flex-1 items-center justify-center p-6 lg:w-1/2 lg:p-12">
              <div className="layout-content-container flex w-full max-w-md flex-col flex-1">
                <div className="mb-8">
                  <a
                    className="flex items-center gap-2 text-xl font-bold text-[#0d171b] cursor-pointer"
                    onClick={() => router.push('/')}
                  >
                    <span className="material-symbols-outlined text-primary text-3xl">health_and_safety</span>
                    <span>CareConnect</span>
                  </a>
                </div>

                <h1 className="text-[#0d171b] tracking-light text-[32px] font-bold leading-tight text-left pb-3 pt-6">
                  Welcome, Caregiver!
                </h1>

                {/* Tabs */}
                <div className="pb-3">
                  <div className="flex border-b border-[#cfdfe7] gap-8">
                    <button
                      className={`flex flex-col items-center justify-center border-b-[3px] ${isLogin ? 'border-b-primary text-[#0d171b]' : 'border-b-transparent text-[#4c809a]'
                        } pb-[13px] pt-4`}
                      onClick={() => setIsLogin(true)}
                    >
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">Log In</p>
                    </button>
                    <button
                      className={`flex flex-col items-center justify-center border-b-[3px] ${!isLogin ? 'border-b-primary text-[#0d171b]' : 'border-b-transparent text-[#4c809a]'
                        } pb-[13px] pt-4`}
                      onClick={() => setIsLogin(false)}
                    >
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">Sign Up</p>
                    </button>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-6">
                  {!isLogin && (
                    <div className="flex w-full flex-wrap items-end gap-4">
                      <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#0d171b] text-base font-medium leading-normal pb-2">Full Name</p>
                        <input
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdfe7] bg-slate-50 focus:border-primary h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                          placeholder="Enter your full name"
                        />
                      </label>
                    </div>
                  )}

                  {/* Email */}
                  <div className="flex w-full flex-wrap items-end gap-4">
                    <label className="flex flex-col min-w-40 flex-1">
                      <p className="text-[#0d171b] text-base font-medium leading-normal pb-2">Email Address</p>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdfe7] bg-slate-50 focus:border-primary h-14 placeholder:text-[#4c809a] p-[15px] text-base font-normal leading-normal"
                        placeholder="Enter your email"
                      />
                    </label>
                  </div>

                  {/* Password */}
                  <div className="flex w-full flex-wrap items-end gap-4">
                    <label className="flex flex-col min-w-40 flex-1">
                      <div className="flex justify-between items-center pb-2">
                        <p className="text-[#0d171b] text-base font-medium leading-normal">Password</p>
                        {isLogin && (
                          <a className="text-sm font-medium text-primary hover:underline cursor-pointer">Forgot Password?</a>
                        )}
                      </div>
                      <div className="flex w-full flex-1 items-stretch">
                        <input
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={handleInputChange}
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-[#0d171b] focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdfe7] bg-slate-50 focus:border-primary h-14 placeholder:text-[#4c809a] p-[15px] border-r-0 pr-2 text-base font-normal leading-normal"
                          placeholder="Enter your password"
                        />
                        <div className="text-[#4c809a] flex border border-[#cfdfe7] bg-slate-50 items-center justify-center px-[15px] rounded-r-lg border-l-0">
                          <span
                            className="material-symbols-outlined cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? 'visibility_off' : 'visibility'}
                          </span>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-lg bg-primary h-14 text-base font-bold text-white shadow-sm hover:opacity-90 transition-opacity"
                    >
                      {isLogin ? 'Log In' : 'Sign Up'}
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-4 py-4">
                    <div className="h-px w-full flex-1 bg-[#cfdfe7]"></div>
                    <p className="text-[#4c809a] text-sm">or</p>
                    <div className="h-px w-full flex-1 bg-[#cfdfe7]"></div>
                  </div>

                  {/* Google Login */}
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <button
                      type="button"
                      onClick={handleGoogleLogin}
                      className="flex h-14 w-full items-center justify-center gap-3 rounded-lg border border-[#cfdfe7] bg-white text-[#0d171b] font-medium hover:bg-slate-100 transition-colors"
                    >
                      <svg height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107" />
                        <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00" />
                        <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.223,0-9.657-3.657-11.303-8.591l-6.571,4.819C9.656,39.663,16.318,44,24,44z" fill="#4CAF50" />
                        <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.012,35.197,44,30.023,44,24C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2" />
                      </svg>
                      <span>Continue with Google</span>
                    </button>
                  </div>

                  <p className="text-center text-xs text-[#4c809a] pt-6">
                    By signing in, you agree to our{' '}
                    <a className="text-primary hover:underline cursor-pointer">Terms of Service</a> and{' '}
                    <a className="text-primary hover:underline cursor-pointer">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
