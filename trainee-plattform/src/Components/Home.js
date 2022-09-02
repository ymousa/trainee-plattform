import React, {useEffect} from 'react'
import SemesterCard from '../Components/SemesterCard'
import { db } from '../firebase'

const Home = () => {
    useEffect(() => {
        const data= db.collection("user")
        data.doc("fJzpUFJyV7AeOXmhyfvr").get().then((doc) => {
            console.log(doc.data())
        })
    
      
    }, [])
    
    
    return (
        <div className="min-h-full">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl tracking-tight font-bold text-gray-900">Home</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* <!-- Replace with your content --> */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="h-screen bg-gray-100">
                            <section className="md:h-full flex items-center text-gray-600">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        {/* Cards */}
                                        <SemesterCard />
                                        <SemesterCard />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

        </div >
    )
}

export default Home