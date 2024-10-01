import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
    const { createUser } = useContext(AuthContext);

  // Handle registration
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // const user = { email, password };
    // console.log(user);

    // Create user by password
    createUser(email, password)
      .then((userCredential) => {
        toast.success('Successfully registered!')
        const user = userCredential.user;
        console.log(user);
        // console.log(user?.email);
        const userMail=user?.email;
        const userEmail = {userMail}
        form.reset();
        // Form data insert to database start
        axios.post('https://organic-grocery-shop-backend.vercel.app/users', userEmail)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error.message);
        });
    // Form data insert to database end
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error("Registration failed!")
      });
  };
  return (
    <>
      <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
          <div className="text-center">
            <img
              src="https://i.ibb.co.com/j3ZzVGQ/organic-high-resolution-logo-transparent.png"
              width={150}
              className="mx-auto"
            />
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Create an account
              </h3>
              <p className="">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label className="font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                />
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150">
                Create account
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
