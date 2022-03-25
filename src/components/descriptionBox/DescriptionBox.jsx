import React from 'react'

export const DescriptionBox = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-4 col-12 col-xxl-4">
                <div className="card"></div>
                <div className="card-body">
                    <h2 className="card-title text-uppercase text-light">{props.title}</h2>
                </div>
            </div>
        </>
    )
}
