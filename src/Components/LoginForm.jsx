
const LoginForm = () => {
  return (
    <div className="bg-background max-w-[700px] flex-1 flex flex-col items-center pt-20 rounded-t-2xl gap-6">
        <h1 className="font-poppins font-bold text-5xl text-primary">Login to Your Account.</h1>
        <div className="flex flex-col w-1/2 gap-3">
            <input type="text" placeholder="Email" className="text-primary p-2 flex-1 border-2 border-primary rounded-lg" />
            <input type="text" placeholder="Password" className="text-primary p-2 flex-1 border-2 border-primary rounded-lg" />
        </div>
        <a href="" className="font-outfit text-primary text-base">Forgot your Password?</a>
        <button className="border-2 border-primary text-background bg-primary font-poppins font-bold px-20 p-3 rounded-lg shadow-lg">Log In</button>
        <p className="font-outfit text-gray-500">Not registered yet? <a href="" className="text-blue-400">Create an Account</a></p>
    </div>
  )
}

export default LoginForm