'use client';

import Header from '@/components/Header';

export default function HelpPage() {
  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'How do I book a caretaker?',
          a: 'Browse our dashboard to find caretakers that match your needs. Click "View Profile" to see their details, then click "Check Availability" to proceed with booking.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards, debit cards, PayPal, and Google Pay. All transactions are secure and encrypted.'
        },
        {
          q: 'How do I search for specific care types?',
          a: 'Use the filters on the left sidebar of the dashboard to select Child Care, Elderly Care, or Special Needs. You can also set hourly rate limits and minimum ratings.'
        },
      ]
    },
    {
      category: 'Bookings & Payments',
      questions: [
        {
          q: 'Can I cancel or reschedule a booking?',
          a: 'Yes, you can cancel or reschedule bookings from the "My Bookings" page. Please note our cancellation policy: cancellations made 24 hours in advance receive a full refund.'
        },
        {
          q: 'How does the platform fee work?',
          a: 'We charge a small platform fee (typically 5%) to maintain our services and ensure quality. This fee is added to the caretaker\'s rate and shown in your booking summary.'
        },
        {
          q: 'When will I be charged?',
          a: 'Your payment method will be charged once you confirm the booking on the payment page. You can review all details before finalizing.'
        },
      ]
    },
    {
      category: 'Safety & Trust',
      questions: [
        {
          q: 'Are all caretakers background checked?',
          a: 'Yes, all caretakers with the "Background Checked" badge have completed comprehensive background checks. We prioritize your safety and security.'
        },
        {
          q: 'How do reviews and ratings work?',
          a: 'After each completed booking, you can leave a review and rating (1-5 stars). These help other users make informed decisions and help us maintain quality standards.'
        },
        {
          q: 'What if I have an issue during a booking?',
          a: 'Contact our 24/7 support team immediately through the Messages page or call our emergency hotline. We\'re here to help resolve any issues quickly.'
        },
      ]
    },
  ];

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">
      <Header activeTab="Help" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black tracking-tight mb-2">Help Center</h1>
          <p className="text-subtext-light dark:text-subtext-dark">Find answers to common questions</p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-subtext-light dark:text-subtext-dark">search</span>
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-surface-light dark:bg-surface-dark focus:outline-none focus:ring-2 focus:ring-primary/50 text-base"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <span className="material-symbols-outlined text-5xl text-primary mb-3">support_agent</span>
            <h3 className="font-bold mb-2">Contact Support</h3>
            <p className="text-sm text-subtext-light dark:text-subtext-dark">Get help from our team</p>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <span className="material-symbols-outlined text-5xl text-primary mb-3">description</span>
            <h3 className="font-bold mb-2">User Guide</h3>
            <p className="text-sm text-subtext-light dark:text-subtext-dark">Learn how to use CareFinder</p>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <span className="material-symbols-outlined text-5xl text-primary mb-3">policy</span>
            <h3 className="font-bold mb-2">Policies</h3>
            <p className="text-sm text-subtext-light dark:text-subtext-dark">Terms and privacy info</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-8">
          {faqs.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">help_outline</span>
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((faq, qIdx) => (
                  <details key={qIdx} className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 cursor-pointer hover:shadow-md transition-shadow">
                    <summary className="font-semibold text-lg list-none flex items-center justify-between">
                      <span>{faq.q}</span>
                      <span className="material-symbols-outlined text-primary">expand_more</span>
                    </summary>
                    <p className="mt-4 text-subtext-light dark:text-subtext-dark leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-primary/10 rounded-xl border border-primary/20 p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Still need help?</h3>
          <p className="text-subtext-light dark:text-subtext-dark mb-6">Our support team is available 24/7 to assist you</p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined">email</span>
              Email Support
            </button>
            <button className="px-6 py-3 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined">phone</span>
              Call Us
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
