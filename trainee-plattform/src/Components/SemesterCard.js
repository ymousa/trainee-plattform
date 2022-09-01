import React from 'react'
import { CheckCircleIcon, RefreshIcon, PlayIcon } from '@heroicons/react/solid'

const SemesterCard = () => {
    return (
        <div className="p-4 sm:w-1/2 lg:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6 ">
                    <h2 className="text-base font-medium text-indigo-300 mb-1">October 29,
                        2021</h2>
                    <h1 className="text-2xl font-semibold mb-3">Semester 1</h1>
                    <div className="grid gap-4 grid-cols-1">
                        <div className='flex items-center justify-between hover:bg-indigo-700 hover:text-white transition duration-300 ease-in '>
                            <h3 >Java</h3>
                            <CheckCircleIcon className=' h-5 w-5 text-green-500 ' />
                        </div>
                        <div className='flex items-center justify-between hover:bg-indigo-700 hover:text-white transition duration-300 ease-in '>
                            <h3>Linux/Bash</h3>
                            <RefreshIcon className=' h-5 w-5 text-yellow-400' />
                        </div>
                        <div className='flex items-center justify-between hover:bg-indigo-700 hover:text-white transition duration-300 ease-in '>
                            <h3>Java</h3>
                            <PlayIcon className=' h-5 w-5 text-gray-500' />
                        </div>

                    </div>
                    <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                        fuga! Dolores quisquam eius cum accusamus?</p>
                    <div className="flex items-center flex-wrap ">
                        <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SemesterCard