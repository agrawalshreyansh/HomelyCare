"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import ThemeToggle from "../ui/ThemeToggle";

const NAV_LINKS = [
  { label: "Find Care", href: "/auth" },
  { label: "Become a Carer", href: "/caretaker/auth" },
  { label: "About Us", href: "#" },
];

const BRAND = {
  name: "CarePlatform",
  logo: (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor" />
    </svg>
  ),
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-700 h-16">
          {/* Logo */}
          <div className="flex items-center gap-4 text-heading-light dark:text-heading-dark">
            <div className="h-8 w-8 text-primary">
              {BRAND.logo}
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
              {BRAND.name}
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-8">
            <nav className="flex items-center gap-9">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium leading-normal text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => router.push('/auth')}>Log In</Button>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-heading-light dark:text-heading-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name="menu" className="text-3xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-b border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium leading-normal text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <Button variant="outline" onClick={() => router.push('/auth')}>Log In</Button>
                <div className="flex justify-center mt-2">
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
