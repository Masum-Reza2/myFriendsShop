import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthProvider";
import swal from 'sweetalert';

const Login = () => {
    const inputStyle = 'border py-1 w-full shadow-md shadow-gray-300 focus:outline-none text-center'
    const btnStyle = "border px-3 py-1 font-semibold text-white cursor-pointer rounded-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem] bg-indigo-500"

    const navigate = useNavigate()

    const { loginUser } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // loggin in user
        loginUser(email, password)
            .then(result => {
                if (!result.user.emailVerified) {
                    swal("Please verify your email!", "success")
                } else {
                    swal("Login successful!", "success")
                    navigate('/')
                }

            })
            .catch(error => {
                swal(error.message)
            })

        e.target.reset();
    }

    return (
        <div className="min-h-[80vh] flex items-center flex-col justify-center">
            <h1 className="text-xl font-bold py-3 text-center">Welcome to Rahul Digital Store. <br /> <span>Please Login</span> </h1>
            <div className="p-5 border shadow-md shadow-gray-400 rounded-md w-[70vw] md:w-[40vw] lg:w-[30vw]">
                <form className="space-y-3" onSubmit={handleLogin}>
                    <input required className={inputStyle} type="email" name="email" id="email" placeholder="Email" />

                    <div>
                        <input required className={inputStyle} type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <div className="text-center pt-5">
                        <input className={btnStyle} value={'Login'} type="submit" />
                    </div>
                    <div>
                        <h1 className="font-semibold text-center">Do not have an account? please <NavLink className='border px-3 py-1 shadow-md shadow-gray-500 rounded-sm' to={'/register'}>Register</NavLink> </h1>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login