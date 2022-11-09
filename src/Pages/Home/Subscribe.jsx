import React from "react";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div>
      <section className="w-full bg-white dark:bg-wickeddark">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="pb-12 text-center">
                <h1 className="text-2xl font-bold leading-none tracking-tighter text-neutral-600">
                SUBSCRIBE to get New Lessons & Tips by Email
                </h1>

                <form
                  action=""
                  method="post"
                  id="revue-form"
                  name="revue-form"
                  className="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 md:mx-auto rounded-xl sm:max-w-lg sm:flex"
                >
                  <div className="flex-1 min-w-0 revue-form-group">
                    <label htmlFor="member_email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your email  "
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                    <button
                      type="submit"
                      value="Subscribe"
                      name="member[subscribe]"
                      id="member_submit"
                      className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <div className="sm:max-w-lg sm:flex md:mx-auto">
                  <p className="mt-3 text-xs text-gray-500">
                    By subscribing, you agree with Revue's
                    <Link to="">Terms of Service</Link>
                    and
                    <Link to="">Privacy Policy</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
