import React from "react";

const Form = () => {
  return (
    <>
      <div className="m-auto w-[90%] md:w-[60%]">
        <div className="mb-10">
          <h2 className="py-5 text-center text-4xl font-bold text-black md:text-6xl">
            Message us
          </h2>
        </div>
        <form action="">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <div>
                <label
                  for="name"
                  className="block py-3 text-sm font-medium text-gray-700"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block py-3 text-sm font-medium text-gray-700"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  for="phone"
                  className="block py-3 text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <div>
                <label
                  for="message"
                  className="block py-3 text-sm font-medium text-gray-700"
                >
                  select*
                </label>
                <select
                  name=""
                  id=""
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">..................</option>
                  <option value="">..................</option>
                  <option value="">..................</option>
                  <option value="">..................</option>
                  <option value="">..................</option>
                </select>
              </div>
              <div>
                <label
                  for="message"
                  className="block py-3 text-sm font-medium text-gray-700"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
          </div>
          {/* check box  */}
          <div class="my-6 flex items-start">
            <div class="flex h-5 items-center">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="focus:ring-3 h-4 w-4 rounded-sm border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                required
              />
            </div>
            <label
              for="remember"
              className="ms-2 text-sm font-bold text-[#0e223b]"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          {/* submit btn  */}
          <button
            type="submit"
            className="m-auto flex w-full justify-center rounded-lg bg-blue-800 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            SEND NOW
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
