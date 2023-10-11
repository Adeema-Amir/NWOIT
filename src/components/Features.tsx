import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const contents = [
  {
    title: "Web 3.0",
    description:
      "In Web 3.0, we pioneer decentralized web experiences by integrating blockchain technology, smart contracts, and data decentralization.",
    features: [
      "Web 3.0",
    ],
    image: "/images/features/dashboard.svg",
    order: false,
  },
  {
    title: "AI (Artificial intelligence)",
    description:
      "Our AI solutions are at the forefront empowering businesses with machine learning, natural language processing and computer vision for a smarter future.",
    features: [
      "AI (Artificial intelligence)",
    ],
    image: "/images/features/product.svg",
    order: true,
  },
  {
    title: "Blockchain",
    description:
      "We provide blockchain solutions range from secure transactions to custom blockchain applications, empowering your business in a decentralized landscape.",
    features: [
      "Blockchain",
    ],
    image: "/images/features/inventory.svg",
    order: false,
  },
  {
    title: "Metaverse",
    description:
      "In the Metaverse, we lead the way with immersive experiences in virtual and augmented reality. We redefine engagement offering businesses opportunities to connect with audiences .",
    features: [
      "Metaverse",
    ],
    image: "/images/hero/hero.svg",
    order: true,
  },
];

export function Features() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">Our Services</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Our comprehensive suite of services includes Web 3.0
solutions, where we lead the way in decentralized
web experiences, AI implementationsthat drive
data-driven Blockchain expertise ensuring in
transactions, and Metaverse creations that engage
audiences in the digital frontier. We offer nothing short
of a transformative journey for businesses
harnessing the power.


        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

              <ul className="font-medium space-y-1 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt="Image description"
                  width={1920}
                  height={1080}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
