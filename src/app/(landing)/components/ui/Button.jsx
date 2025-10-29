export default function Button({ children, variant = "primary", size = "default", className = "", onClick }) {
  const baseStyles = "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg font-bold leading-normal tracking-[0.015em] transition-all";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 transform hover:scale-105",
    secondary: "bg-secondary text-white hover:bg-secondary/90 transition-colors",
    outline: "dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors",
    light: "bg-background-light text-heading-light hover:bg-gray-200 transform hover:scale-105",
  };
  
  const sizes = {
    default: "h-10 px-4 text-sm",
    large: "h-12 px-6 text-base",
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="truncate">{children}</span>
    </button>
  );
}
