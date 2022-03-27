import React, { useState } from 'react'

export const Registration = () => {
    const [user, setUser] = useState({
        fullname: "",
        lastname: "",
        email: "",
        password: "",
        cpassword: "",
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
    }

    const sendData = async (e) => {
        e.preventDefault();

        const { fullname, lastname, email, password, cpassword } = user;

        if ((fullname && lastname && email && password && cpassword)) {
            const response = await fetch(
                'https://db-f7d84-default-rtdb.firebaseio.com/dgreggoogle.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullname,
                        lastname,
                        email,
                        password,
                        cpassword,
                    }),
                }
            );

            if (response) {
                setUser({
                    fullname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    cpassword: "",
                });

                alert("Data Stored Successfully.");
            }
        } else {
            alert("Plz fill all the fields");
        }
    }
    return (
        <>
            <form action="" method="POST" className="booking-form">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" name="fullname" onChange={getUserData} value={user.fullname} placeholder="Fullname" />
                                <label for="floatingInput">Fullname</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" name="lastname" onChange={getUserData} value={user.lastname} placeholder="Lastname" />
                                <label for="floatingInput">Lastname</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" name="email" onChange={getUserData} value={user.email} placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingInput" name="password" onChange={getUserData} value={user.password} placeholder="Fullname" />
                                <label for="floatingInput">Password</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingInput" name="cpassword" onChange={getUserData} value={user.cpassword} placeholder="Lastname" />
                                <label for="floatingInput">Confirm</label>
                            </div>
                        </div>
                    </div>
                    <button type="button" value="Submit" class="button" onClick={sendData} className="btn btn-dark">
                        Sign Up</button>
                </div>
            </form>
        </>
    )
}
