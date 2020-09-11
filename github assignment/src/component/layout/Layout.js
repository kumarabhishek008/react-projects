import React from 'react';
import {AddHeader} from '../header/Header'
import { Header } from 'semantic-ui-react';
import AddFooter from '../footer/Footer';
import AddGrid from '../grid/Grid';
import AddSidebar from '../sidebar/Sidebar'
import {connect} from 'react-redux';
import Result from '../Result';

 
export const Layout = (props) => {
    return (
        <div className={props.class}>
            
            <AddHeader />
            <Result/>
            
            {props.children} 
                 
        </div>
    )
}
