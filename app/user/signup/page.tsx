"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignIn() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const router = useRouter();

    const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault()
        
        try {
            const res = await fetch('/api/user/signup' , {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name,email, password })
            })

            if(res.ok) {
                router.push('/');
            } else {
                alert("res not okay")
            }


        } catch (error) {
            console.error(error)
            alert("Error signing up")
        }
    }


    return <div className="flex justify-center items-center h-screen">
        <div className="p-6 border bg-slate-800 rounded shadow-md shadow-slate-500">
            <div className="flex justify-center mb-8 font-bold">
                Sign Up
            </div>
            
            <form action="" className="gap-4">
                <div className="my-2">
                    <label htmlFor="name">Name:</label>
                    <input 
                        className="ml-2 bg-slate-700 rounded-md border"
                        type="name"
                        id="name" 
                        name="name" 
                        value={name} 
                        onChange={(e) => {setName(e.target.value)}}
                        required />
                </div>
                <div className="my-2">
                    <label htmlFor="email">Email:</label>
                    <input 
                        className="ml-2 bg-slate-700 rounded-md border"
                        type="email"
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => {setEmail(e.target.value)}}
                        required />
                </div>
                <div className="my-2">
                    <label htmlFor="password">Password:</label>
                    <input 
                        className="ml-2 bg-slate-700 rounded-md border"
                        type="password"
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => {setPassword(e.target.value)}}
                        required />
                </div>
                <div className="flex justify-center">
                    <button className="my-4 bg-blue-600 px-4 py-1 rounded">SignIn</button>
                </div>
                
            </form>

        </div>
        
    </div>
}