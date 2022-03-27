import React from 'react'
import DeleteIcon from "@material-ui/icons/Delete";

export const Notes = (props) => {
    function handleClick() {
        props.onDelete(props.id);
    }
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={handleClick}>
                    <DeleteIcon />
                </button>
            </div>
        </>
    )
}
