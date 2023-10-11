import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqitems = [
  {
    question: "What services does NWOIT offer?",
    response:
      "NWOIT provides a wide range of cutting-edge technology solutions, including Artificial Intelligence (AI), Blockchain, Metaverse development, Web3.0 solutions, Internet of Things (IoT) integration, Serverless Cloud Computing, Decentralized Applications (DApps), and Non-Fungible Tokens (NFTs). Each of these services is tailored to meet the unique needs of our clients across various industries.",
  },
  {
    question: "How can NWOIT benefit my business?",
    response:
      "NWOIT empowers businesses by leveraging advanced technologies to enhance efficiency, reduce costs, improve security, and drive innovation. Whether you're looking to automate processes with AI, secure data with blockchain, or explore new digital frontiers in the metaverse, our solutions are designed to help you stay competitive and future-ready.",
  },
  {
    question: "What industries does NWOIT serve?",
    response:
      "NWOIT serves a diverse range of industries, including but not limited to finance, healthcare, supply chain, entertainment, gaming, and e-commerce. Our versatile expertise allows us to create custom solutions that address the unique challenges and opportunities in each sector.",
  },
  {
    question: "Can NWOIT provide examples of past projects or case studies?",
    response:
      "Yes, we have a portfolio of successful projects and case studies that showcase our expertise and the impact of our solutions. Please reach out to us via our Contact Us page, and we'd be happy to share relevant examples based on your specific interests and requirements.",
  },
];

export default function Faq() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>
<br/>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{question}</h2>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transition-transform" : ""
                      } h-5 w-5 flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-neutral-800 rounded-b-lg`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}
