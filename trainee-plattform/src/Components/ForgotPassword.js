import React, { useRef, useState } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    
    
    const emailRef = useRef()
    const {resetPassword}= useAuth()
    const [error, setError]= useState('')
    const [message, setMessage]= useState('')
    const [loading, setLoading]= useState(false)
    

    async function handleSubmit(e){
        e.preventDefault()
        try {
            setLoading(true)
            setMessage('')
            setError('')
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
            

        } catch (error) {
            setError('Faild to reset Password')
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
                            Password Reset
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Login
                            </Link>
                        </p>
                        <span>{error}</span>
                        <span>{message}</span>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
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
                                    className="relative block w-full appearance-none border rounded-t-md rounded-b-md border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            
                        </div>

                        

                        <div>
                            <button
                                disabled= {loading}
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                                </span>
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ForgotPassword