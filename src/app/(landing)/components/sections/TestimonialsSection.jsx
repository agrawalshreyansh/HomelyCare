import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "../ui/TestimonialCard";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah L.",
    location: "New York, NY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV-FGCw_aKiRwoiry_G55GY-Bqnq3W4HMcl9e52YVcE7obrWzUS_gg2yUxmh9AnFh-ZDYZV12MB6GbglZr2N6UIlXkutQxKHIv_SjhYisBjb-ccJBfW39X8rjlN82hqCTs8TFxSXJZYHV9I8USXkw3DDMj0yTtkdwka2LDNhxy53396yAwT_E8CFXjDsxBYzWaGhwjhKK2mbgarJYyo_4B770HCC64z12fROeqGVq-I6ZN-6bqOO2W0bIVb9BDIt1R_jqWQyebLdOD",
    quote: "Finding a reliable carer for my father was so stressful until I found CarePlatform. The process was simple, and we found a wonderful companion for him in just a few days.",
  },
  {
    id: 2,
    name: "Maria G.",
    location: "Austin, TX",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDokJsNUdD7nD0t_SIEzBqiotMIQjDFN6MlgQPA5u3fC3A-X7yciDYSVdDRmbZKHwsin76bUtttRAlAztfJ92GFU5_NvTXHxJFFcLwbK-jOlrbjsDX5uPg914SwMrezsA9p1tMEFnGS09ox-L_fu8DsLhCL4sBakjBspyWSuXtna26hXcDalStlXLAB6sbvVlIM6kZTn0YTImCEX5fxu_Uz16AMhDRT9pUOjrsYPJOOpfiF6IJINiK4pdD__d_U2wybFmqcQ0m2d35o",
    quote: "As a new mom returning to work, I was anxious about childcare. CarePlatform's detailed profiles and reviews gave me the confidence I needed. Our nanny is fantastic!",
  },
  {
    id: 3,
    name: "Emily R.",
    location: "Chicago, IL",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_TwyBH8klf7ZXGeYSJKGRcv-4lgxhQO935hOz7tMrBINjCyaBFLPH6TYInmCJT-xMAJudwB5KwXfHBlqSwPqC5PgiyZdywqr406vedoECArtCEXALo6aswCSKxA1XcjThWb5h8ndeoQX-8AnAInLnfyDHe5AN607_S9C_ZE1Skg26dcE5scjQortLhDqFMbkPUkuVB7TJUVhm7GQ8-v6ixOX3HBxElJtYH71sCp07xBWQC27YDIUwEbclyg8UBElI8k2TUvdA2HpX",
    quote: "The platform is so user-friendly. We needed a last-minute babysitter, and we were able to find and book someone we trusted within an hour. Highly recommend!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white dark:bg-background-dark py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Trusted by Families Like Yours" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              image={testimonial.image}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
