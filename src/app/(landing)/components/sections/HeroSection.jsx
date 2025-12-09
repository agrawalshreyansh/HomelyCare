'use client';

import { useRouter } from 'next/navigation';
import Button from "../ui/Button";

const HERO_DATA = {
  title: "Trusted Care for Your Loved Ones",
  subtitle: "Easily find qualified and compassionate carers for children and seniors.",
  backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv4iAw6rCGG4_5EkIX_ixauD6EZb1UgQfPX9BMCYv615oU-dXzY2DpPydSXh65cgapttjZlZTOFRUkmzZgtiZdnq571cEt-CwA2Mw0nA5zO6fRzPgEG5kzuixsoxqz5M3cKhUNvawdBryUHNnDlmAUrEgJQ6NFHrP8_FNj_jmNoIgEQbq29kL83BG7jkt3n1U6Xm6d4y94DdZbp2rfckZpoyDMg9rorhj3hsda0zpBfZ3IlZluLlQTTllkf3RMCcF2P524zkq6NNyC",
  backgroundAlt: "A diverse group of caregivers interacting warmly with children and elderly individuals in a bright, sunlit room.",
  primaryCTA: "Find a Carer",
  secondaryCTA: "Apply for a Job",
};

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="w-full">
      <div className="relative">
        <div
          className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("${HERO_DATA.backgroundImage}")`,
          }}
        >
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {HERO_DATA.title}
            </h1>
            <p className="text-white/90 text-base font-normal leading-normal md:text-xl">
              {HERO_DATA.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Button variant="primary" size="large" onClick={() => router.push('/user/dashboard')}>
              {HERO_DATA.primaryCTA}
            </Button>
            <Button variant="light" size="large" onClick={() => router.push('/caretaker/auth')}>
              {HERO_DATA.secondaryCTA}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
