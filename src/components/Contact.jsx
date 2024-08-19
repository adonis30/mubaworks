import React from "react";
import Section from "./Section";
import { BottomLine } from "./design/Hero";

const Contact = () => {
  return (
    <Section id="contact">
      <div class="container z-1 px-6 py-12 mx-auto">
        <div>
          <h1 className="h1 mb-6">Get in touch</h1>
          <h3 className="h3 mb-4">We’d love to hear from you.</h3>
        </div>
        <div className=" border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
          <div class="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="p-4 rounded-lg bg-n-7 md:p-6 dark:bg-gray-800">
              <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-base font-medium  dark:text-white">
                E-mail us
              </h2>
              <p class="mt-2 text-sm dark:text-white">
                Email our friendly team.
              </p>
              <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">
                mubaworks00@gmail.com
              </p>
              <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">
                mubanga.kasenge@mubaworks.com
              </p>
            </div>

            <div class="p-4 rounded-lg bg-n-7 md:p-6 dark:bg-gray-800">
              <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-base font-medium dark:text-white">
                Chat with us
              </h2>
              <p class="mt-2 text-sm dark:text-white">
                We’re here at your service.
              </p>
              <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">
                Whatsapp: +260969434989
              </p>
            </div>

            <div class="p-4 rounded-lg bg-n-7 dark:bg-gray-800">
              <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-base font-medium dark:text-white">
                Visit us
              </h2>
              <p class="mt-2 text-sm  dark:text-white">Visit our office HQ..</p>
              <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">
                Plot No. 589/F839 Oxford Road Kitwe, Zamba
              </p>
            </div>

            <div class="p-4 rounded-lg bg-n-7  md:p-6 dark:bg-gray-800">
              <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-base font-medium dark:text-white">
                Call us
              </h2>
              <p class="mt-2 text-sm dark:text-white">Every day on:</p>
              <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">
                +260767999909
              </p>
              <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">
                +260969434989
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
