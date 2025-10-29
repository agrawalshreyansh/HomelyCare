import Image from "next/image";

export default function TestimonialCard({ name, location, image, quote }) {
  return (
    <div className="flex flex-col bg-background-light dark:bg-gray-800 p-6 rounded-lg">
      <p className="grow text-text-light dark:text-text-dark">{quote}</p>
      <div className="flex items-center mt-4">
        <Image
          alt={`Photo of ${name}`}
          className="w-10 h-10 rounded-full mr-4 object-cover"
          src={image}
          width={40}
          height={40}
        />
        <div>
          <p className="font-bold text-sm text-heading-light dark:text-heading-dark">{name}</p>
          <p className="text-sm text-text-light dark:text-text-dark">{location}</p>
        </div>
      </div>
    </div>
  );
}
