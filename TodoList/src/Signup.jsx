import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signupUser } from "./actions/account.actions";

function Signup (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = () => {
        const signupInfo = { username, password };

        signupUser(signupInfo)
        .then(() => {
            navigate(`/login`);
        })
        .catch(error => {
            alert(error)
        });
    };

    return(
        <>
            <header className='bg-darkgray flex flex-row justify-around items-center'>
                <h1 className='text-lightblue my-4 text-4xl'>TodoList Web</h1>
            </header>
            <main className='min-h-screen w-full bg-darkblue flex flex-col justify-center items-center'>
                <section className='bg-darkgray px-4 py-4 border border-solid border-darkgray rounded-2xl flex flex-col items-center'>
                    <h1 className='my-2 text-4xl text-lightblue'>Sign Up</h1>
                    <div>
                        <div className='mb-6 mt-4 mx-6'>
                            <label htmlFor="username" className='mr-4 text-xl text-lightblue'>Username</label>
                            <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className='px-2 py-2 text-lg border-2 border-lightblue rounded-lg w-full'/>
                        </div>
                        <div className='mt-6 mb-4 mx-6'>
                            <label htmlFor="pasword" className='mr-4 text-xl text-lightblue'>Password</label>
                            <input type="text" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='px-2 py-2 text-lg border-2 border-lightblue rounded-lg w-full'/>
                        </div>
                    </div>
                    <div className='my-4 flex flex-row items-center'>
                        <button className='px-4 py-4 mx-4  text-2xl text-lighterblue bg-darkblue border border-darkblue rounded-lg' onClick={handleSignUp}>Sign Up</button>
                    </div>
                </section>
                <section className='my-4 flex flex-row'>
                    <p className='text-lighterblue text-xl text-center'>Already Have an Account?</p>
                    <p className='mx-2 text-darkgray text-xl font-semibold hover:text-lightblue hover:cursor-pointer'><Link to='/login'>Click Here</Link></p>
                </section>
            </main>
        </>
    )
}

export default Signup;