import { LogoutIcon } from '@heroicons/react/solid'
import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../Contexts/AuthContext'

const Navbar = () => {
    const [error, setError]= useState()
    const {currentUser, logout}= useAuth()

    async function handleLogout () {
        setError('')
        try {
            await logout();

        } catch (error) {
            setError("Failed to Logout")
        }
    }

    return (
        
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500" alt="Workflow" />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Meine Kurse</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            {/* <!-- Profile  --> */}
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div>
                            </div>
                            <span className="bg-gray-900 text-white">{currentUser?.email}</span>
                            {/* <!-- Logout  --> */}
                            <div className="ml-3 relative">
                                <div>
                                    <button className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page" onClick={handleLogout}>Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >



    )
}

export default Navbar

