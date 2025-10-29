import { createElement } from "react";

export default function FeatureCard({ icon, title, description, layout = "vertical" }) {
  if (layout === "horizontal") {
    return (
      <div className="flex items-start gap-4 border-0">
        <div className="mt-1">
          {createElement(icon, { className: "w-6 h-6", color: "#43C1AD" })}
        </div>
        <div>
          <h3 className="font-bold text-heading-light dark:text-heading-dark">{title}</h3>
          <p className="mt-1 text-sm text-text-light dark:text-text-dark">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl border dark:border-gray-300 bg-white dark:bg-background-dark p-8 text-center items-center">
      <div className="mb-2">
        {createElement(icon, { className: "w-12 h-12", color: "#43C1AD" })}
      </div>
      <h3 className="text-xl font-bold leading-tight text-heading-light dark:text-heading-dark">
        {title}
      </h3>
      <p className="text-text-light dark:text-text-dark">{description}</p>
    </div>
  );
}
