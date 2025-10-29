'use client'


import { Baby, HeartPulse } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "../ui/FeatureCard";

const SERVICES = [
  {
    id: 1,
    icon: Baby,
    title: "Child Care",
    description: "Find experienced nannies and babysitters you can trust for your children's needs.",
  },
  {
    id: 2,
    icon: HeartPulse,
    title: "Elderly Care",
    description: "Connect with compassionate companions and caregivers for senior family members.",
  },
];

export default function ServicesSection() {
  return (
    <section>
      <SectionTitle title="Comprehensive Care for Every Stage of Life" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service) => (
          <FeatureCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            layout="vertical"
          />
        ))}
      </div>
    </section>
  );
}
