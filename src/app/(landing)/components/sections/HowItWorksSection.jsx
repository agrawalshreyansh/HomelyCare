import { Search, MessageSquareText, CalendarCheck } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const HOW_IT_WORKS_STEPS = [
  {
    id: 1,
    icon: Search,
    title: "1. Search & Filter",
    description: "Describe your needs and browse profiles of qualified carers near you.",
  },
  {
    id: 2,
    icon: MessageSquareText,
    title: "2. Connect & Interview",
    description: "Message securely and conduct interviews to find the perfect match.",
  },
  {
    id: 3,
    icon: CalendarCheck,
    title: "3. Book & Pay",
    description: "Schedule and pay with ease through our secure platform.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="mt-16 sm:mt-24">
      <SectionTitle
        tag="How It Works"
        title="Find Care in Three Simple Steps"
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {HOW_IT_WORKS_STEPS.map((step) => {
          const IconComponent = step.icon;
          return (
            <div key={step.id} className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center size-16 rounded-full bg-[#43C1AD]/20">
                <IconComponent className="w-8 h-8 " color="#43C1AD" />
              </div>
              <h3 className="text-lg font-bold text-heading-light dark:text-heading-dark">
                {step.title}
              </h3>
              <p className="text-text-light dark:text-text-dark">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
