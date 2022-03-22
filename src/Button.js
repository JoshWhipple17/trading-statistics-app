import React from 'react'
import './Button.css'

function Button({ text, click }) {
    return (
        <div className="button" onClick={click}>
            <p>{text}</p>
        </div>
    )
}

export default Button
