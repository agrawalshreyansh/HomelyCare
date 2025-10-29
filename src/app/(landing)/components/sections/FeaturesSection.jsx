'use client'


import { ShieldCheck, Clock, CreditCard } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "../ui/FeatureCard";

const FEATURES = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Vetted & Verified Carers",
    description: "All carers on our platform undergo a thorough background check process.",
  },
  {
    id: 2,
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Find part-time, full-time, or occasional care that fits your family's schedule.",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Secure Payments",
    description: "Our easy and secure payment system protects your financial information.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="mt-16 sm:mt-24">
      <SectionTitle
        title="Your Peace of Mind is Our Priority"
        subtitle="We provide the tools and security you need to make safe and informed decisions."
      />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            layout="horizontal"
          />
        ))}
      </div>
    </section>
  );
}
