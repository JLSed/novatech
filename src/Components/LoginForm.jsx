import { useState } from "react";
import { ExampleAccounts } from "../Constants"
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const matchingAccount = ExampleAccounts.find(
      (account) => account.user === username && account.pass === password);
        if (matchingAccount) {
        navigate("/home/"+ username);
        } else {
        alert('Invalid username or password');
        }
    }

  return (
    <div className="bg-background max-w-[700px] flex-1 flex flex-col items-center pt-20 rounded-t-2xl gap-6">
        <h1 className="font-poppins font-bold text-5xl text-primary pb-6 text-center">Login to Your Account.</h1>
        <div className="flex flex-col w-1/2 gap-3">
            <input type="email" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} className="text-primary p-2 flex-1 border-2 border-primary rounded-lg" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-primary p-2 flex-1 border-2 border-primary rounded-lg" />
        </div>
        <a href="" className="font-outfit text-primary text-base">Forgot your Password?</a>
        <button onClick={handleLogin} className="border-2 border-primary text-background bg-primary font-poppins font-bold px-20 p-3 rounded-lg shadow-lg">Log In</button>
        <p className="font-outfit text-gray-500">Not registered yet? <a href="" className="text-blue-400">Create an Account</a></p>
    </div>
  )
}

export default LoginForm