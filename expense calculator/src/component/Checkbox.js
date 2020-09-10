import React from 'react'

const checkBox = React.createContext();

function CheckBox() {
    const Cbox = '<div class="ui toggle checkbox"><input type="checkbox" name="public"></div>';
    return (
        <div>
            <checkBox.Provider value={this.Cbox}>
            </checkBox.Provider> 
        </div>
    )
}

export default CheckBox
