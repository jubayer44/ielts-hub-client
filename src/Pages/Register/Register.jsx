import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import { setAuthToken } from "../../api/auth";

const Register = () => {
  useTitle("Register");
  const { createUer, updateUser, googleLogin } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUer(email, password)
      .then((response) => {
        const user = response.user;
        setLoading(false);
        setAuthToken(user)
        toast.success("Register Successfully Complete");

        updateUser(name, photoURL)
          .then((response) => {
            const currentUser = {
              email: user.email,
            };

            fetch("http://localhost:5000/jwt", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(currentUser),
            })
              .then((res) => res.json())
              .then((data) => {
                localStorage.setItem("ielts-hub-token", data.token);
                navigate(from, { replace: true });
              });
              navigate(from, { replace: true });


            form.reset();
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.log(err.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const user = res.user;
        setLoading(false);
        setAuthToken(user)
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <section className="">
      {loading ? (
        loading
      ) : (
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 mx-auto my-10"></div>
      )}
      <div className=" items-center px-5 py-12 lg:px-20 ">
        <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-gray-200 rounded-lg md:mt-0">
          <div className="mt-8">
            <p className="text-center font-bold text-3xl">Register</p>
            <div className="mt-6">
              <form
                onSubmit={handleSubmit}
                action="#"
                method="POST"
                className="space-y-6"
              >
                <div className="">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Name{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="email"
                        required
                        placeholder="Your Name"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Photo URL{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="photo"
                        name="photo"
                        type="photh"
                        placeholder="Your Photo URL"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Your Email"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        required
                        placeholder="Your Password"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-400"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-neutral-600 bg-gray-200">
                    {" "}
                    Or continue with{" "}
                  </span>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleGoogleLogin}
                  className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <div className="flex items-center justify-center">
                    <span className="ml-4 flex items-center">
                      <FaGoogle className="mr-2" /> Log in with Google
                    </span>
                  </div>
                </button>
              </div>
              <p className="mt-3">
                Already have an account? Please{" "}
                <Link to="/login" className="text-blue-500 ">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
