import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../api/auth";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { logIn, forgetPassword, googleLogin } = useContext(AuthContext);
  const [userMail, setUserMail] = useState("");
  const [loading, setLoading] = useState(true);
  // const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //Login User
    logIn(email, password)
      .then((response) => {
        const user = response.user;
        setLoading(false);

        setAuthToken(user);

        navigate(from, { replace: true });
        toast.success("Login Success");
        form.reset();
      })
      .catch((error) => {
        const err1 = error.message.split("/")[1];
        const mainErr = err1.split(")")[0];
        toast.error(mainErr);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const user = res.user;
        setLoading(false);
        setAuthToken(user);
        toast.success("Login Success");
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };

  //Forget Password
  const handleForgetPassword = () => {
    forgetPassword(userMail)
      .then(() => {
        toast.success("Password Reset Successfully, Please Check your email");
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="">
      {loading ? (
        loading
      ) : (
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 mx-auto my-10"></div>
      )}
      <div className=" items-center px-5 py-12 lg:px-20">
        <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-gray-200 rounded-lg md:mt-0">
          <div className="mt-8">
            <p className="text-center font-bold text-3xl">Login</p>
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
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => setUserMail(e.target.value)}
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      placeholder="Your password"
                      className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="block ml-2 text-sm text-neutral-600"
                    >
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link
                      onClick={handleForgetPassword}
                      to=""
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      {" "}
                      Forgot your password?{" "}
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Login
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
                  onClick={handleGoogleLogin}
                  type="submit"
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
                Don't have an Account? Please{" "}
                <Link to="/register" className="text-blue-500">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
