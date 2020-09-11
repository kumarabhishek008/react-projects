import React from 'react'
import { Header,Menu } from 'semantic-ui-react'
import './Header.scss';
import SearchBar from '../SearchBar';

export const AddHeader = () => {
    const state = {activeItem : "editorials"}

    const handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    const { activeItem } = state
    return (
        <>
      <Menu  className="menu-head" pointing secondary>
        <Menu.Item className="menuItem-1">
          
            <h3 className="m-h3" style={{}}>
              User Github Repositories

            </h3>
          
        </Menu.Item>
        
        <Menu.Item>
               <SearchBar/>             
        </Menu.Item>

      </Menu>
            
        </>
    )
}
