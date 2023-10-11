import React from "react";
import { useForm, useWatch } from "react-hook-form";

import { MapIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";

type Info = {
  access_key: string;
  subject: string;
  from_name: string;
  botcheck: string;
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Info, any>({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = React.useState(false);
  const [Message, setMessage] = React.useState("");

  const onSubmit = async (data: any, e: any) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Sorry your email is incorrect");
        console.log(error);
      });
  };
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Contact</h2>

<br />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <h2 className="text-lg font-bold">Contact NWOIT</h2>
          <p className="max-w-sm mt-4 mb-4 dark:text-neutral-400">
            Have something to say? We are here to help. Fill up the form or send
            email or call phone.
          </p>

          <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-neutral-400">
            <MapIcon className="w-4 h-4" />
            <span>Pakistan , Taxila , </span>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-neutral-400">
            <EnvelopeIcon className="w-4 h-4" />
            <a href="mailto:nwoit777@gmail.com">nwoit777@gmail.com</a>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-neutral-400">
            <PhoneIcon className="w-4 h-4" />
            <a>+92 345 3694452</a>
          </div>
        </div>

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
          
        <form action="https://api.web3forms.com/submit" method="POST" id="form">
          <input type="hidden" name="access_key" value="df2f4bef-7d91-4f08-9c7c-6f42650fe342" />
          <input type="hidden" name="subject" value="New Submission from Web3Forms" />
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />
          <input type="checkbox" name="botcheck" id="" className="hidden"/>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
            <input type="text" name="name" id="name" placeholder="NWOIT" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
            <input type="email" name="email" id="email" placeholder="nwoit777@gmail.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          </div>
          <div className="mb-6">
            <label className="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
            <input type="number" name="phone" id="phone" placeholder="+92 3453694452" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400"></label>
            <textarea name="message" id="message" placeholder="Can you come on inbox" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
              Send Message
            </button>
          </div>
          <p className="text-base text-center text-gray-400" id="result"></p>
        </form>
            </form>
        </div>
      </div>





    </div>
  );
}
