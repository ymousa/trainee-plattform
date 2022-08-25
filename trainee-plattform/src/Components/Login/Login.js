
import React, { useState } from 'react'
import { Link, Navigate } from "react-router-dom" //Navigate ist Redirect



const Login = ({ setToken, token, isSubmited, setIsSubmited }) => {
    const [inputData, setInputData] = useState({ username: "", password: "" }) //input for login
    const [user, setUser] = useState([0, "", "", "", ""]) //logged user
    const [login_error, setLogin_error] = useState(false)


    

    //get all input and set it into inputData
    const setInput = (e) => {
        const { name, value } = e.target
        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // const verify = async (e) => {
    //     //e.preventDefault()
        
    //     try {
    //         //get user with the username: inputData.usernam
    //         const response = await fetch(`http://localhost:5000/login/${inputData.username}`);
    //         console.log(response)
    //         const data = await response.json();
    //         // console.log(`try to login with ${inputData.username}`)

    //         if (data.length == 0) {
    //             setLogin_error(true)
    //         } else if (await inputData.password === data.password) {
    //             const loggedUser = new User(data.userID, data.username, data.firstname, data.lastname, data.password)
    //             setUser(loggedUser)

    //             //set token for a sation
    //             setToken(loggedUser)
    //             localStorage.setItem("token", JSON.stringify(loggedUser))
    //             setIsSubmited(true)

    //         } else {
    //             setLogin_error(true)
    //         }
    //     } catch(err) {
    //         //console.log(err)
    //         setLogin_error(true)
    //     }
    // }


    return (
        <div>
            <div className='valign-wrapper row login-box '>

                <section className='section container'>
                    <h2 className="pink-text text-darken-1 ">Reservierungsystem Standort Kassel</h2>
                    <div className='row' >
                        <div className="col s12 l5 ">
                            <h3 className="pink-text text-darken-1 ">Login</h3>
                            <p>Gib deine Daten hier, um dich anzumelden. <br /> bist du neu? <Link to="/signin" >Registrieren</Link></p>
                        </div>
                        <div className="col s12 l5 offset-l2">
                            <h2 className="indigo-text text-darken-4"></h2>
                            <form >
                                <div className="input-field">
                                    <i className="material-icons prefix ">person</i>
                                    <input type="text" id="username" name="username"  onChange={setInput} />
                                    <label htmlFor="username">Your Username</label>
                                    
                                </div>
                                <div className="input-field">
                                    <i className="material-icons prefix">lock</i>
                                    <input type="password" id="password" name="password"  onChange={setInput} />
                                    <label htmlFor="password">Your Password</label>
                                    
                                </div>
                                {login_error && (<span className="helper-text blue-grey lighten-5 red-text text-darken-1" >Kein Treffer. Username oder Password ist falsch</span>)}
                                <div className='input-field '>
                                    <button className='btn pink darken-1 z-depth-2' type="submit">LogIn</button>
                                </div>
                                

                            </form>
                        </div>
                    </div>
                </section>
                <div className="row">
                    {isSubmited === false ? (<div></div>) : (<div><Navigate to={"/home"} /></div>)}
                </div>
            </div>
        </div>
    )
}

export default Login
