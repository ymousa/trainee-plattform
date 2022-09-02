import React, { useRef, useState } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Select, Option } from "@material-tailwind/react";
import ChoosingRole from "./ChoosingRole"



const Signup = () => {
    //for save the current, previous and next state
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const stuOrAusRef = useRef()
    const dateRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const [role, setRole] = useState("Select you Role")



    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            setError('')
            await signup(emailRef.current.value, passwordRef.current.value, firstnameRef.current.value, lastnameRef.current.value)
            navigate(from, { replace: true })

        } catch (error) {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Create a new account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Login
                            </Link>
                        </p>
                        <span>{error}</span>
                    </div>

                    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>

                        <input type="hidden" name="remember" defaultValue="true" />
                        <ChoosingRole selected={role} setSelected={setRole} />

                        <div className="-space-y-px rounded-md shadow-sm">

                            <div>
                                <label htmlFor="firstname" className="sr-only">
                                    Firstname
                                </label>
                                <input
                                    id="firstname"
                                    name="firstname"
                                    type="string"
                                    ref={firstnameRef}
                                    //required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Firstname"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="lastname" className="sr-only">
                                    Lastname
                                </label>
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="string"
                                    ref={lastnameRef}
                                    //required
                                    className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Lastname"
                                />
                            </div>
                            <br />
                            {role === "Learner" && (
                                <>
                                    <div>
                                        <label htmlFor="stuOrAus" className="sr-only">
                                            Studium oder Ausbildung
                                        </label>
                                        <input
                                            id="stuOrAus"
                                            name="stuOrAus"
                                            type="string"
                                            ref={stuOrAusRef}
                                            required
                                            className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Studium oder Ausbildung"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="stuOrAus" className="sr-only">
                                            Eintrittsdatum
                                        </label>
                                        <input 
                                        label= "Eintrittsdatum"
                                        type="date" 
                                        className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Eintrittsdatum" />
                                    </div>


                                </>
                            )}
                            {role === "Tutor" && (
                                <div>
                                    
                                </div>
                            )}
                            <br />
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    ref={emailRef}
                                    required
                                    className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    ref={passwordRef}
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>



                        </div>
                        <div>
                            <button
                                disabled={loading}
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                                </span>
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Signup