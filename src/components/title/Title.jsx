import React from 'react'

export const Title = (props) => {
    return (
        <>
            <h1 className="display-3 text-center text-light">{props.title}</h1>
            <p className="text-center text-light">{props.para}</p>
        </>
    )
}
