import React from 'react'

const button = React.createContext();

function Button() {
const btn = '<button className="ui button">Follow</button>';
    return (
        <div>
            <button.Provider value='<button className="ui button">Follow</button>'>
            </button.Provider> 
        </div>
    )
}

export default Button
