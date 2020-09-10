import React from 'react'

const input = React.createContext();

function Input() {
    return (
        <div>
            <input.Provider value='<div class="ui input"><input type="text" placeholder="Search..."></div>'>
            </input.Provider>
        </div>
    )
}

export default Input
