import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600 space-y-5">
                <div className="text-center pb-8">
                    <img src="https://i.ibb.co.com/jLQNvjb/organic.png" width={150} className="mx-auto" />
                    <div className="mt-5">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                    </div>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                        />
                    </div>
                   
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150"
                    >
                        Sign in
                    </button>
                </form>
                
                <p className="text-center">Don&apos;t have an account? <Link to="/register" className="font-medium text-green-600 hover:text-green-500">Sign up</Link></p>
            </div>
        </main>
        </>
    );
};

export default Login;