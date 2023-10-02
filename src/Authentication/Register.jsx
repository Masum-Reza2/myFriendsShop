import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import swal from 'sweetalert';

const Register = () => {
    const inputStyle = 'border py-1 w-full shadow-md shadow-gray-300 focus:outline-none text-center'
    const btnStyle = "border px-3 py-1 font-semibold text-white cursor-pointer rounded-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem] bg-indigo-500"

    const navigate = useNavigate()

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        // createing user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                navigate('/login')
                // updating users profile
                updateProfile(auth.currentUser, {
                    displayName: user.displayName, photoURL: user.photoURL
                })

                // sending verification email
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        swal("Verification code sent to your email!", "success")
                    })
            })
            .catch(error => {
                swal(error.message, "success")
            })

        e.target.reset();
    }

    return (
        <>
            <div className="min-h-[80vh] flex items-center flex-col justify-center">
                <h1 className="text-xl font-bold py-3 text-center">Welcome to Rahul Digital Store. <br /> <span>Please Register</span> </h1>
                <div className="p-5 border shadow-md shadow-gray-400 rounded-md w-[70vw] md:w-[40vw] lg:w-[30vw]">
                    <form className="space-y-3" onSubmit={handleRegister}>
                        <input required className={inputStyle} type="text" name="name" id="name" placeholder="Name" />
                        <br />
                        <input required className={inputStyle} type="email" name="email" id="email" placeholder="Email" />

                        <div>
                            <input required className={inputStyle} type="password" name="password" id="password" placeholder="Password" />
                        </div>
                        <div className="text-center pt-5">
                            <input className={btnStyle} value={'Register'} type="submit" />
                        </div>
                        <div>
                            <h1 className="font-semibold text-center">Already have an account? please <NavLink className='border px-3 py-1 shadow-md shadow-gray-500 rounded-sm' to={'/login'}>Login</NavLink> </h1>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register