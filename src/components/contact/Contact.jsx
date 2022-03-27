import React, { useState } from 'react'

export const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        custommsg: "",
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, custommsg } = user;

        if ((name && email && phone && custommsg)) {
            const response = await fetch(
                'https://db-f7d84-default-rtdb.firebaseio.com/dbgoogle.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        custommsg,
                    }),
                }
            );

            if (response) {
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    custommsg: "",
                });

                alert("Data Stored Successfully.");
            }
        } else {
            alert("Plz fill all the fields");
        }
    }
    return (
        <>
            <div className="container" >
                <form action="" className="booking-form mt-5" method="POST">
                    <input type="text" name="name" value={user.name} onChange={getUserData} placeholder="Full Name" className="form-control mb-3" />
                    <input type="email" name="email" value={user.email} onChange={getUserData} placeholder="Your Email" className="form-control mb-3" />
                    <input type="number" name="phone" value={user.phone} onChange={getUserData} placeholder="Your Phone" className="form-control mb-3" />
                    <textarea name="custommsg" id="" cols="30" rows="5" value={user.custommsg} onChange={getUserData} placeholder="Message" className="form-control mb-3" ></textarea>
                    <button type="button" value="Submit" class="button" onClick={postData} className="btn btn-dark">
                        Submit</button>
                </form>
            </div>
        </>
    )
}
