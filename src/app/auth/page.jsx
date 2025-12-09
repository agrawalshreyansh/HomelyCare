'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "./components/AuthLayout";
import Input from "./components/ui/Input";
import Checkbox from "./components/ui/Checkbox";
import Button from "./components/ui/Button";
import SocialButton from "./components/ui/SocialButton";
import { SIGNUP_FIELDS, useSocialProviders, TERMS_LABEL } from "./constants";

const LeftPanel = () => (
  <>
    <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAx0-41mIOOGN_DlxgZ28HS7QV_sx3TVKcxvSdFnoR3ND6l3shwSfJUq5pWXmwlWxJfZKZLD3DaOkcGcBdQF-dXf2lq-uu5UA2CFEzUzhMGXKWa5Hu--0VLSeMJ1zJn7i8k25-ske1-neY8QM2gQ3CRGxUZz03B0WOD5euEutckWGhnOWSr6htAOfkA0z_yNvP2LytCvvLECCloaylA2fprDHqx5JPnt4Re0fr_fHpQAYfmNwwPtteya6Az2kwJbZqu91byzoOQ4SwA")' }}>
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
    <div className="relative z-10 flex flex-col items-start p-16 text-white max-w-lg">
      <div className="mb-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-4xl text-primary">family_restroom</span>
        <p className="text-2xl font-bold">CareConnect</p>
      </div>
      <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4">Connecting families with trusted, compassionate care.</h1>
      <p className="text-lg text-white/80">Join a community dedicated to providing the best care for your loved ones, at every stage of life.</p>
    </div>
  </>
);

const SignUpPage = () => {
  const router = useRouter();
  const socialProviders = useSocialProviders();
  const [form, setForm] = useState({ fullName: "", email: "", password: "", terms: false });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to dashboard (static demo - no real authentication)
    router.push('/user/dashboard');
  };

  return (
    <AuthLayout leftPanel={<LeftPanel />}>
      <div className="w-full max-w-md space-y-8">

        <div className="md:hidden flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-3xl text-primary">family_restroom</span>
          <p className="text-xl font-bold text-slate-800">CareConnect</p>
        </div>

        <div className="flex flex-col gap-1 text-center">
          <p className="text-slate-900 text-3xl font-bold tracking-tight">Create Your Account</p>
          <p className="text-slate-500 text-base font-normal">Join our community of trusted caretakers and families.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {SIGNUP_FIELDS.map((field) => {
            if (field.type === "password") {
              return (
                <div className="flex flex-col" key={field.name}>
                  <label className="text-slate-800 text-sm font-medium pb-2">{field.label}</label>
                  <div className="relative">
                    <input
                      className="form-input w-full rounded-lg text-slate-900 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-background-light h-12 placeholder:text-slate-400 p-3 pr-10 text-base font-normal"
                      type={showPassword ? "text" : "password"}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      name={field.name}
                    />
                    <button
                      type="button"
                      aria-label="Toggle password visibility"
                      className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-2 text-slate-400 hover:text-slate-600 focus:outline-none"
                      onClick={() => setShowPassword((v) => !v)}
                      tabIndex={-1}
                    >
                      <span className="material-symbols-outlined text-xl">{showPassword ? "visibility_off" : "visibility"}</span>
                    </button>
                  </div>
                </div>
              );
            }
            return (
              <Input
                key={field.name}
                {...field}
                value={form[field.name]}
                onChange={handleChange}
                name={field.name}
              />
            );
          })}

          <Checkbox
            id="terms"
            checked={form.terms}
            onChange={handleChange}
            label={TERMS_LABEL}
            name="terms"
          />

          <Button type="submit">Create Account</Button>

          <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background-light px-2 text-slate-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {socialProviders.map((provider) => (
              <SocialButton key={provider.name} icon={provider.icon} onClick={provider.onClick}>
                Sign up with {provider.name}
              </SocialButton>
            ))}
          </div>
        </form>

        <p className="text-center text-sm text-slate-600">
          Already have an account?{' '}
          <a className="font-semibold leading-6 text-primary hover:underline cursor-pointer" onClick={() => router.push('/user/dashboard')}>Log in</a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;