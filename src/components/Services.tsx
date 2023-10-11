/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const services = [
  {
    title: "Web3.0",
    description:
      "Step into the future with NWOIT's Web3.0 solutions. We redefine online experiences by integrating blockchain technology, decentralized applications, and the metaverse, creating a new era of interactivity, security, and trust on the web.",
    image: "/images/services/1.svg",
    alt: "Service description",
  },
  {
    title: "Metaverse",
    description:
      "Join us in exploring the metaverse, where digital and physical worlds merge. NWOIT crafts immersive metaverse experiences, from virtual reality environments to decentralized virtual economies, connecting users to a limitless digital frontier.",
    image: "/images/services/2.svg",
    alt: "Service description",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Our AI solutions bring intelligence to your data. NWOIT specializes in developing and deploying cutting-edge AI algorithms and models, helping businesses extract insights, automate processes, and make data-driven decisions like never before.",
    image: "/images/services/3.svg",
    alt: "Service description",
  },
  {
    title: "BlockChain",
    description:
      "Embrace the power of blockchain technology with NWOIT. We design secure, transparent, and efficient blockchain solutions for various industries, ensuring the integrity of data and transactions while reducing costs and complexity.",
    image: "/images/services/4.svg",
    alt: "Service description",
  },
  {
    title: "IOT",
    description:
      "Connect and control the physical world with IoT solutions from NWOIT. We leverage the Internet of Things to create smart, efficient, and data-driven ecosystems, enabling businesses to monitor, analyze, and optimize processes in real-time.",
    image: "/images/services/5.svg",
    alt: "Service description",
  },
  {
    title: "Serverless Cloud Computing",
    description:
      "Experience the agility and scalability of serverless cloud computing with NWOIT. We architect cloud-native solutions that eliminate the need for server management, allowing you to focus on innovation and growth.",
    image: "/images/services/6.svg",
    alt: "Service description",
  },
  {
    title: "NFT (Non-Fungible Tokens)",
    description:
      "NWOIT pioneers the creation and integration of non-fungible tokens. Whether you're an artist, gamer, or business looking to tokenize assets, we help you navigate the NFT landscape and unlock new possibilities for digital ownership and value exchange.",
    image: "/images/services/7.png",
    alt: "Service description",
  },
  {
    title: "Decentralized Applications",
    description:
      "Enter the world of decentralized applications with NWOIT. Our DApps leverage blockchain technology to provide secure, transparent, and tamper-resistant solutions for various use cases, from finance to supply chain management.",
    image: "/images/services/8.png",
    alt: "Service description",
  },
  {
    title: "Sass application",
    description:
      "Experience the agility and scalability of serverless cloud computing with NWOIT. We architect cloud-native solutions that eliminate the need for server management, allowing you to focus on innovation and growth.",
    image: "/images/services/9.png",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">What is NWOIT?</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        At NWOIT, we're not just an IT company; we're architects of the digital
future. With a passion for innovation and a commitment to excellence,
we've grown to become a trusted partner for businesses seeking
transformation through technology.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
