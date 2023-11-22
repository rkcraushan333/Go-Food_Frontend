import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Login() {
    let navigate = useNavigate();
    const [credentials, setcredentials] = useState({
        email: "",
        password: "",
    });
    const URL = "https://go-food-backend-lgih.onrender.com/api/LoginUser"
    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post(URL, credentials)
            .then((response) => {
                // success login
                if (response.status === 200 && response.data.authToken) {
                    localStorage.setItem("userEmail", credentials.email);
                    localStorage.setItem("authToken", response.data.authToken);
                    localStorage.getItem("authToken");
                    navigate("/")
                }
                else {
                    alert("Enter Valid Credentials!")
                }
            })
            .catch((error) => {
                // error in login
                alert("Enter Valid Credentials!")
            })
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                            value={credentials.email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            value={credentials.password}
                            onChange={onChange}
                        />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">
                        Login
                    </button>
                    <Link to="/signup" className="m-3 btn btn-danger">
                        I'm a new User
                    </Link>
                </form>
            </div>
        </>
    )
}